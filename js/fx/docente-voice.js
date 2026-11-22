/* ==========================================================================
   Black Ops · Voz guía del panel docente
   · Suena SOLO en el panel de la Dra. Hernández (lo llama adscrito.js).
   · Contexto de audio propio: no pasa por portal-audio (que en el dispositivo
     docente está silenciado a propósito para el examen de los residentes).
   · Desbloqueo con el primer gesto (iOS/Safari/iframe de NOUS).
   · Cola: las frases nunca se enciman.
   · Usa assets/voz/docente/<clave>.mp3 (ElevenLabs, voz de CALOT); si no
     existe, cae a la voz del navegador (es-MX) con el mismo texto.
   ========================================================================== */

import { DOCENTE_LINES } from './docente-voice-lines.js?v=20261122l';

const MUTE_KEY = 'bo:docente-voz';
const WELCOME_KEY = 'bo:docente-bienvenida';
const BASE_URL = 'assets/voz/docente/';
// Se sube junto con la caché de la app: evita que quede guardado un 404 de antes de tener los mp3
const AUDIO_VER = '20261122l';

let ctx = null;
let unlocked = false;
let playing = false;
let currentStop = null;
const queue = [];
const missing = new Set();
const bufCache = new Map();
const listeners = new Set();

const ls = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

export const isMuted = () => ls.get(MUTE_KEY) === 'off';
export const isUnlocked = () => unlocked;
export const onVoiceChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
const emit = () => listeners.forEach((fn) => { try { fn(); } catch {} });

export function setMuted(m) {
  ls.set(MUTE_KEY, m ? 'off' : 'on');
  if (m) stopAll();
  emit();
}

function ensureCtx() {
  if (ctx) return ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  try { ctx = new AC(); } catch { ctx = null; }
  return ctx;
}

/** Se llama en cada gesto dentro del panel; el primero desbloquea el audio. */
export function unlockDocenteVoice() {
  const c = ensureCtx();
  if (c) {
    try {
      if (c.state === 'suspended') c.resume();
      // Búfer silencioso: requisito de iOS para soltar el audio
      const b = c.createBuffer(1, 1, 22050);
      const s = c.createBufferSource();
      s.buffer = b; s.connect(c.destination); s.start(0);
    } catch {}
  }
  try {
    if (!unlocked && window.speechSynthesis) {
      const u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      window.speechSynthesis.speak(u);
    }
  } catch {}
  if (!unlocked) {
    unlocked = true;
    emit();
    pump();
  }
}

async function loadBuf(key) {
  if (missing.has(key)) return null;
  if (bufCache.has(key)) return bufCache.get(key);
  const c = ensureCtx();
  if (!c) return null;
  try {
    const r = await fetch(`${BASE_URL}${key}.mp3?v=${AUDIO_VER}`);
    if (!r.ok || !(r.headers.get('content-type') || '').includes('audio')) throw new Error('missing');
    const ab = await r.arrayBuffer();
    const buf = await new Promise((res, rej) => {
      const pr = c.decodeAudioData(ab, res, rej);
      if (pr && typeof pr.then === 'function') pr.then(res, rej);
    });
    bufCache.set(key, buf);
    return buf;
  } catch {
    missing.add(key);
    return null;
  }
}

let esVoice = null;
function pickVoice() {
  if (esVoice) return esVoice;
  try {
    const vs = window.speechSynthesis?.getVoices?.() || [];
    esVoice = vs.find((v) => /es[-_]MX/i.test(v.lang)) || vs.find((v) => /^es/i.test(v.lang)) || null;
  } catch {}
  return esVoice;
}

function speakFallback(text) {
  return new Promise((resolve) => {
    const ss = window.speechSynthesis;
    if (!ss || !text) { resolve(); return; }
    let done = false;
    const end = () => { if (!done) { done = true; resolve(); } };
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'es-MX';
      const v = pickVoice();
      if (v) u.voice = v;
      u.rate = 0.98;
      u.pitch = 0.85;
      u.volume = 1;
      u.onend = end;
      u.onerror = end;
      currentStop = () => { try { ss.cancel(); } catch {} end(); };
      ss.speak(u);
      // Red de seguridad por si el navegador no avisa del final
      setTimeout(end, Math.min(30000, 1500 + text.length * 90));
    } catch { end(); }
  });
}

function playBuf(buf) {
  return new Promise((resolve) => {
    try {
      const c = ensureCtx();
      if (c.state === 'suspended') c.resume();
      const src = c.createBufferSource();
      const g = c.createGain();
      g.gain.value = 0.95;
      // Paso-bajo suave: quita agudos ásperos sin apagar la voz
      const lp = c.createBiquadFilter();
      lp.type = 'lowpass'; lp.frequency.value = 6500; lp.Q.value = 0.5;
      src.buffer = buf;
      src.connect(lp); lp.connect(g); g.connect(c.destination);
      let done = false;
      const end = () => { if (!done) { done = true; resolve(); } };
      src.onended = end;
      currentStop = () => { try { src.stop(); } catch {} end(); };
      src.start();
      setTimeout(end, buf.duration * 1000 + 800);
    } catch { resolve(); }
  });
}

async function pump() {
  if (playing || !unlocked || isMuted()) return;
  const item = queue.shift();
  if (!item) return;
  // Avisos que esperaron demasiado (p. ej. sin gesto aún) ya no tienen sentido
  if (item.ttl && Date.now() - item.at > item.ttl) { pump(); return; }
  playing = true;
  emit();
  try {
    const buf = await loadBuf(item.key);
    if (isMuted()) { /* se silenció mientras cargaba */ }
    else if (buf) await playBuf(buf);
    else await speakFallback(item.text);
  } catch {}
  currentStop = null;
  playing = false;
  emit();
  if (queue.length) setTimeout(pump, 350);
}

/** Encola una frase por clave (texto opcional si no está en el catálogo). */
export function say(key, { text = null, ttl = 90000, front = false } = {}) {
  if (isMuted()) return;
  const t = text || DOCENTE_LINES[key];
  if (!t) return;
  // Evita duplicados en cola
  if (queue.some((q) => q.key === key)) return;
  const item = { key, text: t, at: Date.now(), ttl };
  if (front) queue.unshift(item); else queue.push(item);
  pump();
}

export function stopAll() {
  queue.length = 0;
  try { currentStop?.(); } catch {}
  try { window.speechSynthesis?.cancel(); } catch {}
}

export const isSpeaking = () => playing;

/** Bienvenida solo la primera vez (se reproduce al primer gesto). */
export function welcomeOnce() {
  if (ls.get(WELCOME_KEY)) return false;
  ls.set(WELCOME_KEY, String(Date.now()));
  say('bienvenida', { ttl: 0, front: true });
  return true;
}

export function replayWelcome() {
  stopAll();
  say('bienvenida', { ttl: 0, front: true });
}

/** Lista de claves para generar con ElevenLabs (la usa el script). */
export const ALL_KEYS = Object.keys(DOCENTE_LINES);
