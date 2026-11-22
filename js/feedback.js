// Chat de retroalimentación: un canal por tester con Mario.
// Con el servidor (Vercel + Upstash) viaja entre dispositivos por /api/mensajes;
// sin servidor (p. ej. en local) se guarda en este navegador para probar el flujo.
import { PROFILES, TESTERS, perfil } from './perfil.js?v=20261122i';

const ENDPOINT = 'api/mensajes';
export const channelOf = (id) => `CALOT-FEEDBACK-${String(id).toUpperCase()}`;
const localKey = (id) => `calot:feedback:${id}`;
const readKey = (id, role) => `calot:feedback-leido:${id}:${role}`;

const getLS = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const setLS = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
const readLocal = (id) => { try { return JSON.parse(getLS(localKey(id)) || '[]'); } catch { return []; } };

/** Canales visibles para el perfil activo: Mario ve los tres; cada tester, solo el suyo. */
export const myChannels = () => (perfil().owner ? TESTERS : [perfil().id]);
export const myRole = () => (perfil().owner ? 'owner' : 'tester');

const cache = {};
let mode = 'local';
const listeners = new Set();
let timer = 0;

export const deliveryMode = () => mode;
const emit = () => listeners.forEach((fn) => { try { fn(); } catch {} });

async function fetchOne(id) {
  const r = await fetch(ENDPOINT, { headers: { 'x-channel': channelOf(id) }, cache: 'no-store' });
  if (!r.ok) throw new Error(String(r.status));
  const j = await r.json();
  if (!Array.isArray(j.messages)) throw new Error('bad');
  return j.messages;
}

export async function refresh() {
  const ids = myChannels();
  try {
    const all = await Promise.all(ids.map(fetchOne));
    ids.forEach((id, i) => { cache[id] = all[i]; });
    mode = 'server';
  } catch {
    ids.forEach((id) => { cache[id] = readLocal(id); });
    mode = 'local';
  }
  emit();
}

export const messages = (id) => cache[id] || readLocal(id);

export async function send(id, text) {
  const body = String(text || '').trim().slice(0, 1000);
  if (!body) return null;
  const msg = { id: 'f-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), from: myRole(), text: body, ts: Date.now() };
  if (mode === 'server') {
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'x-channel': channelOf(id), 'Content-Type': 'application/json' }, body: JSON.stringify(msg) });
      if (r.ok) { await refresh(); return msg; }
    } catch {}
  }
  const list = readLocal(id);
  list.push(msg);
  setLS(localKey(id), JSON.stringify(list.slice(-200)));
  cache[id] = list;
  emit();
  return msg;
}

/** Sin leer en un canal: los mensajes del otro lado posteriores a la última lectura. */
export function unread(id) {
  const role = myRole();
  const last = Number(getLS(readKey(id, role)) || 0);
  return messages(id).filter((m) => m.from !== role && m.ts > last).length;
}
export const unreadTotal = () => myChannels().reduce((n, id) => n + unread(id), 0);
export function markRead(id) { setLS(readKey(id, myRole()), String(Date.now())); emit(); }

export function subscribe(fn) {
  listeners.add(fn);
  if (!timer) {
    refresh();
    timer = window.setInterval(refresh, 20000);
    window.addEventListener('storage', (e) => {
      if (mode === 'local' && e.key?.startsWith('calot:feedback:')) { myChannels().forEach((id) => { cache[id] = readLocal(id); }); emit(); }
    });
    window.addEventListener('focus', refresh);
  }
  fn();
  return () => listeners.delete(fn);
}

const fmt = (ts) => new Date(ts).toLocaleString('es-MX', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
const escHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function threadHTML(id) {
  const list = messages(id);
  const me = myRole();
  if (!list.length) {
    return me === 'owner'
      ? '<p class="msg-empty muted">Aún no hay mensajes de esta tester.</p>'
      : '<p class="msg-empty muted">Cuéntale a Mario qué te gustó, qué falló o qué falta. Todo sirve.</p>';
  }
  return list.map((m) => `
    <div class="msg ${m.from === me ? 'is-me' : 'is-them'}">
      <p>${escHtml(m.text).replace(/\n/g, '<br>')}</p>
      <time class="mono">${m.from === 'owner' ? 'Mario' : escHtml(PROFILES[id]?.name || 'Tester')} · ${fmt(m.ts)}</time>
    </div>`).join('');
}
