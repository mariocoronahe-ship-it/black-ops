// Voz de CALOT (la IA). Clips de ElevenLabs en assets/voz con un leve procesado robótico
// en Web Audio: filtro peine metálico (sin agudos: el lazo se corta a 3 kHz), modulación en anillo
// sutil y presencia media, con un estante que suaviza sibilancias. Baja las camas mientras habla.
// Respeta el silencio de los portales y tiene su propio interruptor (calot:voz).

import { getEngine, isPortalAudioMuted, duck, unlockPortalAudio } from './portal-audio.js?v=20261122h';

const BASE = new URL('../../assets/voz/', import.meta.url);
const VOICE_KEY = 'calot:voz';

const raw = new Map();
const decoded = new Map();
let chain = null;
let lastAt = 0;
const live = new Set();
const liveHtml = new Set();
const recent = new Map(); // grupo → último clip (para no repetir)

export function isVoiceOn() {
  try { return localStorage.getItem(VOICE_KEY) !== '0'; } catch { return true; }
}

export function setVoiceOn(on) {
  try { localStorage.setItem(VOICE_KEY, on ? '1' : '0'); } catch {}
  if (!on) stopVoice();
}

function fetchRaw(name) {
  if (!raw.has(name)) {
    raw.set(name, fetch(new URL(`${name}.mp3`, BASE)).then((r) => (r.ok ? r.arrayBuffer() : null)).catch(() => null));
  }
  return raw.get(name);
}

export function prefetchVoice(names) {
  names.forEach(fetchRaw);
}

async function load(ctx, name) {
  if (decoded.has(name)) return decoded.get(name);
  const buf = await fetchRaw(name);
  if (!buf) return null;
  try {
    const ab = await ctx.decodeAudioData(buf.slice(0));
    decoded.set(name, ab);
    return ab;
  } catch { return null; }
}

function getChain(engine) {
  if (chain && chain.ctx === engine.ctx) return chain;
  const { ctx, dry, verb } = engine;
  const input = ctx.createGain();
  const out = ctx.createGain();
  out.gain.value = 1.35;

  // Presencia y cuerpo: corta graves sucios, realza 1.8 kHz
  const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 110;
  const pres = ctx.createBiquadFilter(); pres.type = 'peaking'; pres.frequency.value = 1800; pres.Q.value = 0.9; pres.gain.value = 3;
  // Sibilancias y brillo metálico suavizados (nada de agudos chillantes)
  const soft = ctx.createBiquadFilter(); soft.type = 'highshelf'; soft.frequency.value = 4800; soft.gain.value = -5;
  out.connect(hp); hp.connect(pres); pres.connect(soft); soft.connect(dry);

  // Señal limpia
  const direct = ctx.createGain(); direct.gain.value = 0.85;
  input.connect(direct); direct.connect(out);

  // Filtro peine (timbre metálico)
  const comb = ctx.createDelay(0.05); comb.delayTime.value = 0.0085;
  const fb = ctx.createGain(); fb.gain.value = 0.42;
  const combOut = ctx.createGain(); combOut.gain.value = 0.32;
  const combLp = ctx.createBiquadFilter(); combLp.type = 'lowpass'; combLp.frequency.value = 3000; combLp.Q.value = 0.5;
  input.connect(comb); comb.connect(combLp); combLp.connect(fb); fb.connect(comb); combLp.connect(combOut); combOut.connect(out);

  // Modulación en anillo muy leve (zumbido de máquina)
  const ring = ctx.createGain(); ring.gain.value = 0;
  const osc = ctx.createOscillator(); osc.type = 'sine'; osc.frequency.value = 48;
  osc.connect(ring.gain); osc.start();
  const ringOut = ctx.createGain(); ringOut.gain.value = 0.16;
  input.connect(ring); ring.connect(ringOut); ringOut.connect(out);

  // Un poco de sala
  if (verb) { const send = ctx.createGain(); send.gain.value = 0.22; out.connect(send); send.connect(verb); }

  // Medidor de nivel para mover la mandíbula del androide al hablar
  const analyser = ctx.createAnalyser();
  analyser.fftSize = 512;
  analyser.smoothingTimeConstant = 0.35;
  input.connect(analyser);

  chain = { ctx, input, analyser, buf: new Float32Array(analyser.fftSize) };
  return chain;
}

// Nivel actual de la voz (0‥1 aprox.), para sincronizar boca y ojos.
export function getVoiceLevel() {
  if (liveHtml.size) {
    return 0.35 + 0.35 * Math.abs(Math.sin(performance.now() * 0.014));
  }
  if (!chain || !live.size) return 0;
  chain.analyser.getFloatTimeDomainData(chain.buf);
  let sum = 0;
  for (let i = 0; i < chain.buf.length; i++) sum += chain.buf[i] * chain.buf[i];
  return Math.min(1, Math.sqrt(sum / chain.buf.length) * 4.5);
}

export function stopVoice() {
  live.forEach((src) => { try { src.stop(); } catch {} });
  live.clear();
  liveHtml.forEach((item) => {
    try { clearTimeout(item.timer); } catch {}
    try { item.audio.pause(); item.audio.currentTime = 0; } catch {}
  });
  liveHtml.clear();
}

function playHtmlVoiceFallback(name, { delay = 0, vol = 1, interrupt = true } = {}) {
  try {
    if (typeof Audio === 'undefined') return false;
    if (interrupt) stopVoice();
    const a = new Audio(new URL(`${name}.mp3`, BASE).href);
    a.setAttribute('playsinline', '');
    a.playsInline = true;
    a.volume = Math.max(0, Math.min(1, vol));
    const entry = { audio: a, timer: 0 };
    liveHtml.add(entry);
    const cleanup = () => liveHtml.delete(entry);
    a.addEventListener('ended', cleanup, { once: true });
    a.addEventListener('error', cleanup, { once: true });
    const startPlay = () => {
      if (!isVoiceOn() || isPortalAudioMuted() || !liveHtml.has(entry)) { cleanup(); return; }
      const p = a.play();
      if (p && typeof p.catch === 'function') p.catch(cleanup);
    };
    if (delay > 0) entry.timer = setTimeout(startPlay, Math.round(delay * 1000));
    else startPlay();
    lastAt = Date.now() + (Math.max(0, delay) + 5) * 1000;
    return true;
  } catch {
    return false;
  }
}

// Reproduce un clip. `delay` en segundos (o `at`: hora absoluta del AudioContext);
// `interrupt` corta lo que se esté diciendo.
export async function speak(name, { delay = 0, at = null, vol = 1, interrupt = true } = {}) {
  if (!isVoiceOn() || isPortalAudioMuted()) return false;
  const engine = unlockPortalAudio() || getEngine();
  if (!engine) return playHtmlVoiceFallback(name, { delay, vol, interrupt });
  const { ctx } = engine;
  if (ctx.state !== 'running') {
    try { await Promise.race([ctx.resume(), new Promise((r) => setTimeout(r, 180))]); } catch {}
  }
  const c = getChain(engine);
  const buf = await load(ctx, name);
  if (!isVoiceOn() || isPortalAudioMuted()) return false;
  if (!buf || ctx.state !== 'running') {
    return playHtmlVoiceFallback(name, { delay, vol, interrupt });
  }
  if (interrupt) stopVoice();
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const g = ctx.createGain();
  g.gain.value = vol;
  src.connect(g); g.connect(c.input);
  const start = at != null ? Math.max(ctx.currentTime, at) : ctx.currentTime + Math.max(0, delay);
  src.start(start);
  duck(start, buf.duration, 0.6, 0.05, 0.5);
  live.add(src);
  src.onended = () => live.delete(src);
  lastAt = Date.now() + (start - ctx.currentTime + buf.duration) * 1000;
  return true;
}

// Elige un clip del grupo sin repetir el anterior.
function pickFrom(group, names) {
  const prev = recent.get(group);
  const pool = names.length > 1 ? names.filter((n) => n !== prev) : names;
  const n = pool[Math.floor(Math.random() * pool.length)];
  recent.set(group, n);
  return n;
}

// Comentario ocasional: probabilidad baja y sin pisar otra línea reciente.
function remark(group, names, { p = 1, gap = 6000, delay = 0.25 } = {}) {
  if (Date.now() - lastAt < gap) return;
  if (Math.random() > p) return;
  speak(pickFrom(group, names), { delay, interrupt: false });
}

// ---------- Ganchos de la app ----------

const SECTION = { resumenes: 'sec-resumenes', repasa: 'sec-repasa', juegos: 'sec-juegos', recursos: 'sec-recursos', stats: 'sec-stats', hgr72: 'sec-hgr72' };

// Portal de sección o subsección (solo en la versión completa).
export function voiceForScene(key, delay = 2.2) {
  const [kind, id] = key.split(':');
  const name = kind === 'modulo' ? SECTION[id] : kind === 'juegos' ? `jg-${id}` : kind === 'recursos' ? `rc-${id}` : null;
  if (name) speak(name, { delay });
}

// Saludo al entrar (una vez por sesión).
export function voiceWelcome(delay = 0.8) {
  try { if (sessionStorage.getItem('calot:voz-hola')) return; sessionStorage.setItem('calot:voz-hola', '1'); } catch {}
  let name;
  const h = new Date().getHours();
  let away = 0;
  try {
    const last = Number(localStorage.getItem('calot:voz-ultima') || 0);
    if (last) away = (Date.now() - last) / 86400000;
    localStorage.setItem('calot:voz-ultima', String(Date.now()));
  } catch {}
  if (away >= 3) name = 'boot-ausente';
  else if (h >= 0 && h < 5) name = 'boot-noche';
  else name = pickFrom('boot', ['boot-1', 'boot-2', 'boot-3']);
  speak(name, { delay });
}

// Respuesta en juegos: rachas siempre; acierto/error de vez en cuando.
export function voiceAnswer(ok, streak = 0) {
  if (ok && (streak === 3 || streak === 5 || streak === 10)) { speak(`racha-${streak}`, { delay: 0.35 }); return; }
  if (ok) remark('ok', ['ok-1', 'ok-2', 'ok-3'], { p: 0.14 });
  else remark('mal', ['mal-1', 'mal-2', 'mal-3'], { p: 0.22 });
}

export function voiceTime() { speak('tiempo', { interrupt: false }); }

export function voiceFinish({ pct = 0, record = false } = {}) {
  if (record) speak('record', { delay: 0.5 });
  else speak(pct >= 60 ? 'fin-bien' : 'fin-mal', { delay: 0.5 });
}

// Estado de tarjetas al entrar a Repasa (una vez por sesión).
export function voiceReview(pending, delay = 0.6) {
  try { if (sessionStorage.getItem('calot:voz-rep')) return; sessionStorage.setItem('calot:voz-rep', '1'); } catch {}
  speak(pending > 0 ? 'rep-pend' : 'rep-cero', { delay, interrupt: false });
}

export function voiceForgot() { remark('olvido', ['rep-olvido'], { p: 0.2, gap: 20000 }); }

export function voiceBye() { speak(pickFrom('adios', ['adios-1', 'adios-2'])); }

export const INTRO_LINES = ['intro-1', 'intro-2', 'intro-3', 'intro-4', 'intro-5', 'intro-6'];
