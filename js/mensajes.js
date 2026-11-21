// Mensajes entre la adscrita (Dra. Hernández) y el residente.
// Con el servidor (Vercel + Upstash) viajan entre dispositivos por /api/mensajes;
// sin servidor (p. ej. en local) se guardan en este navegador para probar el flujo.

const CHANNEL = 'HGR72-CIRUGIA-HERNANDEZ-RESIDENTE-R2';
const LOCAL_KEY = 'calot:mensajes';
const READ_KEY = 'calot:mensajes-leido';
const ENDPOINT = 'api/mensajes';

export const ADSCRITA = { user: 'dra.hernandez', name: 'Dra. Hernández', role: 'Adscrita · Cirugía General' };

let cache = null;
let mode = 'local'; // 'server' | 'local'
const listeners = new Set();
let timer = 0;

const getLS = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const setLS = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
const readLocal = () => { try { return JSON.parse(getLS(LOCAL_KEY) || '[]'); } catch { return []; } };

export const deliveryMode = () => mode;

function emit() { listeners.forEach((fn) => { try { fn(cache || []); } catch {} }); }

async function fetchServer() {
  const r = await fetch(`${ENDPOINT}`, { headers: { 'x-channel': CHANNEL }, cache: 'no-store' });
  if (!r.ok) throw new Error(String(r.status));
  const j = await r.json();
  if (!Array.isArray(j.messages)) throw new Error('bad');
  return j.messages;
}

export async function refresh() {
  try {
    cache = await fetchServer();
    mode = 'server';
  } catch {
    cache = readLocal();
    mode = 'local';
  }
  emit();
  return cache;
}

export function messages() { return cache || readLocal(); }

export async function send(from, text) {
  const body = String(text || '').trim().slice(0, 1000);
  if (!body) return null;
  const msg = { id: 'm-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), from, text: body, ts: Date.now() };
  if (mode === 'server') {
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'x-channel': CHANNEL, 'Content-Type': 'application/json' }, body: JSON.stringify(msg) });
      if (r.ok) { await refresh(); return msg; }
    } catch {}
  }
  const list = readLocal();
  list.push(msg);
  setLS(LOCAL_KEY, JSON.stringify(list.slice(-200)));
  cache = list;
  emit();
  return msg;
}

// Mensajes sin leer para un rol ('residente' lee los de la adscrita y viceversa)
export function unread(role) {
  const last = Number(getLS(`${READ_KEY}:${role}`) || 0);
  return messages().filter((m) => m.from !== role && m.ts > last).length;
}
export function markRead(role) { setLS(`${READ_KEY}:${role}`, String(Date.now())); emit(); }

export function subscribe(fn) {
  listeners.add(fn);
  if (!timer) {
    refresh();
    timer = window.setInterval(refresh, 20000);
    window.addEventListener('storage', (e) => { if (e.key === LOCAL_KEY && mode === 'local') { cache = readLocal(); emit(); } });
    window.addEventListener('focus', refresh);
  }
  fn(messages());
  return () => listeners.delete(fn);
}

const fmt = (ts) => new Date(ts).toLocaleString('es-MX', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
const escHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Hilo de conversación visto desde `me` ('adscrito' | 'residente')
export function threadHTML(me, list = messages()) {
  if (!list.length) return '<p class="msg-empty muted">Aún no hay mensajes.</p>';
  return list.map((m) => `
    <div class="msg ${m.from === me ? 'is-me' : 'is-them'}">
      <p>${escHtml(m.text).replace(/\n/g, '<br>')}</p>
      <time class="mono">${m.from === 'adscrito' ? ADSCRITA.name : 'Residente'} · ${fmt(m.ts)}</time>
    </div>`).join('');
}
