// Cross-device sync: pulls on open/focus, pushes 2 s after each local change.
// The sync code lives only in this device's localStorage.
import { store, mergeStates } from './store.js?v=20261121u';
import { perfil, perfilId } from "./perfil.js?v=20261121u";

// Código por perfil: una tester nunca usa (ni escribe en) el código de sincronización de Mario.
const CODE_KEY = perfil().owner ? 'nous:sync-code' : `nous:sync-code:${perfilId()}`;
const ENDPOINT = 'api/sync';
const statusListeners = new Set();
let status = 'off'; // off | ok | pending | syncing | error | unconfigured
let lastError = '';
let pushTimer = null;
let busy = false;
let onRemote = () => {};

const getLS = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const setLS = (k, v) => { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch { /* ignore */ } };

function setStatus(s, err = '') {
  status = s; lastError = err;
  statusListeners.forEach((fn) => fn(status, lastError));
}
export const getStatus = () => ({ status, error: lastError, code: getCode() });
export const onStatus = (fn) => { statusListeners.add(fn); fn(status, lastError); return () => statusListeners.delete(fn); };
export const getCode = () => getLS(CODE_KEY);

const kv = (o = {}) => Object.entries(o).map(([k, v]) => `${k}=${v}`).sort().join(',');
const idTs = (list) => (Array.isArray(list) ? list : []).map((x) => `${x.id || x.date}@${x.updated || 0}`).sort().join(',');

/** Fingerprint of a state: ids + timestamps, order-independent. */
function sig(s) {
  const parts = [];
  for (const [k, v] of Object.entries(s)) {
    if (k === 'dirty') continue;
    if (Array.isArray(v)) parts.push(k + ':' + v.map((x) => `${x.id || x.date}@${x.updated || 0}`).sort().join(','));
    else if (k === 'settings') parts.push('settings@' + (v.updated || 0));
    else if (k === 'telemetry') {
      parts.push('tel:' + [
        kv(v.secBySection),
        Object.entries(v.secByDay || {}).map(([d, x]) => d + ':' + kv(x)).sort().join('|'),
        (v.gameSessions || []).map((g) => g.id || g.ts).sort().join(','),
        Object.entries(v.caseProgress || {}).map(([c, x]) => `${c}@${x?.ts || 0}`).sort().join(','),
        Object.entries(v.topicGames || {}).map(([c, x]) => `${c}@${x?.updated || 0}`).sort().join(','),
      ].join(';'));
    } else if (k === 'seenTopics') {
      parts.push('seen:' + Object.entries(v || {}).map(([t, x]) => `${t}:${x?.seen ? 1 : 0}@${x?.seenAt || 0}@${x?.updated || 0}:${kv(x?.subblocks)}`).sort().join('|'));
    } else if (k === 'highlights') {
      parts.push('hl:' + Object.entries(v || {}).filter(([, l]) => Array.isArray(l) && l.length).map(([sc, l]) => sc + '=' + [...l].sort().join('~')).sort().join('|'));
    } else if (k === 'highlightsTs') parts.push('hlts:' + kv(v));
    else if (k === 'atlasProgress') parts.push('atl:' + Object.entries(v || {}).map(([i, x]) => `${i}@${x?.ts || 0}:${x?.completed ? 1 : 0}:${x?.best ?? ''}`).sort().join(','));
    else if (k === 'hgr72Personal') {
      parts.push('hgr:' + ['rotaciones', 'guardias', 'pendientes', 'calendario'].map((c) => c + '[' + idTs(v[c]) + ']').join(';') + ';borr:' + kv(v.borrados));
    }
    else if (k === 'deleted') parts.push('del:' + Object.entries(v).map(([c, m]) => c + Object.keys(m).sort().join('')).sort().join('|'));
  }
  return parts.sort().join(';');
}
const clean = (s) => { const { dirty, ...rest } = s; return rest; };

async function request(method, body) {
  const r = await fetch(ENDPOINT, {
    method,
    headers: { 'x-sync-code': getCode(), ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  });
  let j = {};
  try { j = await r.json(); } catch { /* non-JSON (e.g. local static server without /api) */ }
  if (r.status === 503 || j.configured === false) { const e = new Error(j.error || 'no configurado'); e.unconfigured = true; throw e; }
  if (!r.ok) throw new Error(j.error || `HTTP ${r.status}`);
  return j;
}

async function push() {
  await request('PUT', { data: clean(store.state) });
}

/** Pull remote, merge, apply locally if it changed, push back if remote is behind. */
export async function syncNow({ adopt = false } = {}) {
  if (!getCode() || busy) return;
  busy = true; setStatus('syncing');
  try {
    const remote = await request('GET');
    const local = store.state;
    if (!remote.data) {
      await push();
    } else {
      // a device that never had user edits simply adopts the remote copy (avoids duplicated sample data)
      const merged = adopt || !local.dirty ? mergeStates(remote.data, remote.data) : mergeStates(local, remote.data);
      if (sig(merged) !== sig(local)) { store.replace(merged, { dirty: local.dirty }); onRemote(); }
      if (sig(merged) !== sig(remote.data)) await push();
    }
    setStatus('ok');
  } catch (e) {
    setStatus(e.unconfigured ? 'unconfigured' : 'error', e.message);
  } finally { busy = false; }
}

function schedulePush() {
  if (!getCode()) return;
  clearTimeout(pushTimer);
  setStatus('pending');
  pushTimer = setTimeout(() => syncNow(), 2000);
}

/** Readable code like NOUS-7K3F-Q9XM-2HPA-W8TZ (≈100 bits). */
export function createCode() {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const bytes = new Uint8Array(20); crypto.getRandomValues(bytes);
  const chars = [...bytes].map((b) => A[b % A.length]).join('');
  const code = 'CALOT-' + chars.match(/.{4}/g).join('-');
  setLS(CODE_KEY, code);
  syncNow();
  return code;
}
export async function linkCode(code) {
  const c = String(code || '').trim().toUpperCase().replace(/\s+/g, '');
  if (!/^[A-Z0-9-]{20,64}$/.test(c)) throw new Error('Ese código no parece válido.');
  setLS(CODE_KEY, c);
  await syncNow({ adopt: !store.state.dirty });
  if (status === 'error' || status === 'unconfigured') throw new Error(lastError);
}
export function unlink() { setLS(CODE_KEY, null); clearTimeout(pushTimer); setStatus('off'); }

export function initSync(onRemoteChange) {
  onRemote = onRemoteChange || onRemote;
  store.subscribe((_s, origin) => { if (origin === 'local') schedulePush(); });
  if (getCode()) syncNow(); else setStatus('off');
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') syncNow(); });
  window.addEventListener('online', () => syncNow());
  // flush a pending push when the page is being hidden
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && pushTimer && getCode()) {
      clearTimeout(pushTimer); pushTimer = null;
      try {
        fetch(ENDPOINT, { method: 'PUT', keepalive: true, headers: { 'x-sync-code': getCode(), 'Content-Type': 'application/json' }, body: JSON.stringify({ data: clean(store.state) }) });
      } catch { /* best effort */ }
    }
  });
}
