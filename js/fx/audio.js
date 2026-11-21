// CALOT-OS — Web Audio API Ambient & UI SFX Console Engine
// Comparte contexto, bus maestro (limitador a -1 dBFS) y reverb con portal-audio.js.
import { getEngine, addDuckTarget, removeDuckTarget, unlockPortalAudio } from './portal-audio.js?v=20261121x';

const STORAGE_KEY = 'calot:audio-v1';
const UNMUTE_MIGRATION_KEY = 'calot:audio-unmute-v2';

export const AMBIENT_MODES = [
  { id: 'elegante', label: 'Elegante', short: 'Elegante', sub: 'Campanas cristal sobre drone cálido' },
  { id: 'fogata', label: 'Lluvia y fogata', short: 'Fogata', sub: 'Para estudiar: lluvia, fuego y retumbo' },
  { id: 'tension', label: 'Tensión', short: 'Tensión', sub: 'Para juegos: pulso grave y tic-tac' },
  { id: 'off', label: 'Silencio', short: 'Silencio', sub: 'Solo efectos de interfaz' },
];

export const SFX_PACKS = [
  { id: 'cristal', label: 'Cristal' },
  { id: 'seda', label: 'Seda' },
  { id: 'tactil', label: 'Táctil' },
  { id: 'cuerda', label: 'Cuerda' },
];

const VALID_AMB = new Set(AMBIENT_MODES.map((m) => m.id));
const VALID_PACK = new Set(SFX_PACKS.map((p) => p.id));

const DEFAULT_STATE = {
  amb: 'off',
  pack: 'cristal',
  muted: false,
  musicVol: 50,
  fxVol: 55,
};

function clampVol(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.min(100, Math.round(n))) : fallback;
}

function loadState() {
  const base = { ...DEFAULT_STATE };
  try {
    if (typeof localStorage === 'undefined') return base;
    if (!localStorage.getItem(UNMUTE_MIGRATION_KEY)) {
      localStorage.setItem(UNMUTE_MIGRATION_KEY, '1');
      localStorage.removeItem('calot:portal-sfx');
      localStorage.removeItem('calot:voz');
      localStorage.removeItem(STORAGE_KEY);
      return base;
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return base;
    if (VALID_AMB.has(parsed.amb)) base.amb = parsed.amb;
    if (VALID_PACK.has(parsed.pack)) base.pack = parsed.pack;
    if (typeof parsed.muted === 'boolean') base.muted = parsed.muted;
    base.musicVol = clampVol(parsed.musicVol, DEFAULT_STATE.musicVol);
    base.fxVol = clampVol(parsed.fxVol, DEFAULT_STATE.fxVol);
  } catch {}
  return base;
}

function saveState() {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

const state = loadState();
const subs = new Set();

let ctx = null;
let comp = null;
let verb = null;
let bus = null;
let ambGain = null;
let musicNodes = [];
let timers = [];

const midiHz = (n) => 440 * Math.pow(2, (n - 69) / 12);

function getCtx() {
  try {
    if (!ctx) {
      const eng = getEngine();
      if (!eng) return null;
      const c = eng.ctx;
      // Bus de la interfaz: directo al maestro y con un envío a la reverb compartida.
      const fxBus = c.createGain();
      fxBus.connect(eng.comp);
      const uiSend = c.createGain();
      uiSend.gain.value = 0.8;
      fxBus.connect(uiSend);
      uiSend.connect(eng.verb);

      ctx = c;
      comp = eng.comp;
      verb = eng.verb;
      bus = fxBus;
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  } catch {
    return null;
  }
}

export function getAudioState() {
  return {
    ...state,
    musicOn: !state.muted && state.amb !== 'off',
  };
}

function notify() {
  const snapshot = getAudioState();
  subs.forEach((fn) => {
    try { fn(snapshot); } catch {}
  });
}

function ambLevel() {
  if (state.muted || state.amb === 'off') return 0;
  const weight = { elegante: 0.5, tension: 0.4, fogata: 0.35 }[state.amb] || 0;
  return (state.musicVol / 100) * weight;
}

function tone(c, freq, t, dur, vol, type = 'sine', dest = bus) {
  const ui = dest === bus;
  // Interfaz: volumen y afinación con variación mínima, panorama suave y una capa grave que da cuerpo.
  const v = ui ? vol * (0.92 + Math.random() * 0.16) : vol;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (ui) o.detune.value = (Math.random() - 0.5) * 10;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0001, v), t + 0.006);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g);
  let out = g;
  if (ui && c.createStereoPanner) {
    const pan = c.createStereoPanner();
    pan.pan.value = (Math.random() - 0.5) * 0.3;
    g.connect(pan);
    out = pan;
  }
  out.connect(dest);
  o.start(t);
  o.stop(t + dur + 0.05);
  if (ui && type === 'sine' && freq >= 600 && dur >= 0.1) {
    const lo = c.createOscillator();
    const lg = c.createGain();
    lo.type = 'sine';
    lo.frequency.setValueAtTime(freq / 2, t);
    lg.gain.setValueAtTime(0.0001, t);
    lg.gain.exponentialRampToValueAtTime(Math.max(0.0001, v * 0.3), t + 0.01);
    lg.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.8);
    lo.connect(lg);
    lg.connect(out);
    lo.start(t);
    lo.stop(t + dur + 0.05);
  }
  return o;
}

function tick(c, t, vol, hz = 1300) {
  const len = Math.max(1, Math.floor(c.sampleRate * 0.03));
  const b = c.createBuffer(1, len, c.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < len; i++) {
    d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 6);
  }
  const n = c.createBufferSource();
  n.buffer = b;
  const bp = c.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = Math.min(hz, 3000);
  bp.Q.value = 0.9;
  const g = c.createGain();
  g.gain.value = vol * 3.4;
  n.connect(bp);
  bp.connect(g);
  g.connect(comp);
  n.start(t);

  const o = c.createOscillator();
  const og = c.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(150, t);
  o.frequency.exponentialRampToValueAtTime(70, t + 0.06);
  og.gain.setValueAtTime(0.0001, t);
  og.gain.exponentialRampToValueAtTime(Math.max(0.0001, vol * 2.2), t + 0.004);
  og.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
  o.connect(og);
  og.connect(comp);
  o.start(t);
  o.stop(t + 0.12);
}

function stopAmbient() {
  timers.forEach((id) => {
    clearInterval(id);
    clearTimeout(id);
  });
  timers = [];
  musicNodes.forEach((n) => {
    try {
      removeDuckTarget(n);
      if (n.stop) n.stop();
      n.disconnect();
    } catch {}
  });
  musicNodes = [];
  ambGain = null;
}

function startAmbient() {
  stopAmbient();
  if (state.amb === 'off' || state.muted) return;
  const c = getCtx();
  if (!c) return;

  const g = c.createGain();
  g.gain.value = 0.0001;
  // El ambiente baja un poco cuando entra la voz o un golpe de portal/intro (ducking).
  const dk = c.createGain();
  g.connect(dk);
  dk.connect(comp);
  addDuckTarget(dk);

  const send = c.createGain();
  send.gain.value = state.amb === 'elegante' ? 1.4 : 0.5;
  dk.connect(send);
  send.connect(verb);

  g.gain.exponentialRampToValueAtTime(Math.max(0.0001, ambLevel()), c.currentTime + 2.5);
  ambGain = g;

  const nodes = [g, dk, send];
  const alive = () => ambGain === g && !state.muted && state.amb !== 'off';

  const scheduleLoop = (fn, minMs, maxMs) => {
    const run = () => {
      if (!alive()) return;
      fn();
      timers.push(setTimeout(run, minMs + Math.random() * (maxMs - minMs)));
    };
    timers.push(setTimeout(run, 400));
  };

  const makeNoise = (sec, brown) => {
    const len = Math.max(1, Math.floor(c.sampleRate * sec));
    const b = c.createBuffer(1, len, c.sampleRate);
    const d = b.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (brown) {
        last = (last + 0.02 * w) / 1.02;
        d[i] = last * 3.5;
      } else {
        d[i] = w;
      }
    }
    const s = c.createBufferSource();
    s.buffer = b;
    s.loop = true;
    return s;
  };

  const burst = (t, vol, hz, q, dur) => {
    const len = Math.max(1, Math.floor(c.sampleRate * dur));
    const b = c.createBuffer(1, len, c.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 4);
    }
    const s = c.createBufferSource();
    s.buffer = b;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = hz;
    bp.Q.value = q;
    const gg = c.createGain();
    gg.gain.value = vol;
    s.connect(bp);
    bp.connect(gg);
    gg.connect(g);
    s.start(t);
  };

  const bell = (note, t, vol, dur = 3.2) => {
    tone(c, midiHz(note), t, dur, vol, 'sine', g);
    tone(c, midiHz(note + 12), t, dur * 0.5, vol * 0.18, 'sine', g);
  };

  if (state.amb === 'elegante') {
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 500;
    lp.connect(g);
    [45, 52, 57].forEach((n, i) => {
      const o = c.createOscillator();
      const vg = c.createGain();
      o.type = 'sine';
      o.frequency.value = midiHz(n);
      o.detune.value = i * 3;
      vg.gain.value = 0.035;
      o.connect(vg);
      vg.connect(lp);
      o.start();
      nodes.push(o, vg);
    });
    nodes.push(lp);

    const PEN = [69, 71, 73, 76, 78, 81, 83, 85, 88];
    let last = 4;
    scheduleLoop(() => {
      const t = c.currentTime;
      last = Math.max(0, Math.min(PEN.length - 1, last + Math.round(Math.random() * 4 - 2)));
      bell(PEN[last], t, 0.07);
      if (Math.random() < 0.35) {
        bell(PEN[Math.max(0, last - 2)] - 12, t + 0.18, 0.05, 4);
      }
    }, 1600, 3800);
  } else if (state.amb === 'tension') {
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 260;
    lp.Q.value = 4;
    lp.connect(g);
    [[45, 'sawtooth'], [46, 'sawtooth'], [33, 'sine']].forEach(([n, type]) => {
      const o = c.createOscillator();
      const vg = c.createGain();
      o.type = type;
      o.frequency.value = midiHz(n);
      vg.gain.value = type === 'sine' ? 0.12 : 0.04;
      o.connect(vg);
      vg.connect(lp);
      o.start();
      nodes.push(o, vg);
    });
    const lfo = c.createOscillator();
    const lg = c.createGain();
    lfo.frequency.value = 1 / 16;
    lg.gain.value = 220;
    lfo.connect(lg);
    lg.connect(lp.frequency);
    lfo.start();
    nodes.push(lfo, lg, lp);

    let k = 0;
    timers.push(setInterval(() => {
      if (!alive()) return;
      const t = c.currentTime;
      if (k % 2 === 0) {
        const o = c.createOscillator();
        const og = c.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(90, t);
        o.frequency.exponentialRampToValueAtTime(42, t + 0.25);
        og.gain.setValueAtTime(0.0001, t);
        og.gain.exponentialRampToValueAtTime(0.35, t + 0.01);
        og.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
        o.connect(og);
        og.connect(g);
        o.start(t);
        o.stop(t + 0.45);
      }
      burst(t + 0.001, k % 2 ? 0.25 : 0.12, 4200, 6, 0.03);
      if (k % 16 === 12) tone(c, midiHz(81), t, 1.2, 0.03, 'sine', g);
      k++;
    }, 375));
  } else if (state.amb === 'fogata') {
    const s = makeNoise(4, false);
    const hp = c.createBiquadFilter();
    const lp = c.createBiquadFilter();
    const am = c.createGain();
    hp.type = 'highpass';
    hp.frequency.value = 1100;
    lp.type = 'lowpass';
    lp.frequency.value = 5500;
    am.gain.value = 0.22;
    s.connect(hp);
    hp.connect(lp);
    lp.connect(am);
    am.connect(g);
    s.start();

    const lfo = c.createOscillator();
    const lg = c.createGain();
    lfo.frequency.value = 0.09;
    lg.gain.value = 0.08;
    lfo.connect(lg);
    lg.connect(am.gain);
    lfo.start();

    const r = makeNoise(5, true);
    const rl = c.createBiquadFilter();
    const rg = c.createGain();
    rl.type = 'lowpass';
    rl.frequency.value = 160;
    rg.gain.value = 1.1;
    r.connect(rl);
    rl.connect(rg);
    rg.connect(g);
    r.start();

    nodes.push(s, hp, lp, am, lfo, lg, r, rl, rg);

    scheduleLoop(() => {
      const t = c.currentTime;
      const count = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        burst(
          t + i * (0.01 + Math.random() * 0.03),
          0.25 + Math.random() * 0.5,
          1500 + Math.random() * 3500,
          2 + Math.random() * 4,
          0.006 + Math.random() * 0.02
        );
      }
    }, 40, 260);

    scheduleLoop(() => {
      burst(c.currentTime, 1.2, 900 + Math.random() * 900, 1.5, 0.05);
    }, 1800, 5200);
  }

  musicNodes = nodes;
}

export function setAmbient(amb) {
  if (!VALID_AMB.has(amb)) return getAudioState();
  state.amb = amb;
  if (amb !== 'off' && state.muted) {
    state.muted = false;
  }
  saveState();
  if (!state.muted && state.amb !== 'off') {
    startAmbient();
  } else {
    stopAmbient();
  }
  notify();
  return getAudioState();
}

export function setSfxPack(pack) {
  if (!VALID_PACK.has(pack)) return getAudioState();
  state.pack = pack;
  saveState();
  playUiSfx('ok');
  notify();
  return getAudioState();
}

export function setMuted(val) {
  state.muted = Boolean(val);
  saveState();
  if (state.muted || state.amb === 'off') {
    stopAmbient();
  } else {
    startAmbient();
  }
  notify();
  return getAudioState();
}

export function setMusicVol(v) {
  state.musicVol = clampVol(v, state.musicVol);
  saveState();
  if (ctx && ambGain) {
    try {
      ambGain.gain.setTargetAtTime(Math.max(0.0001, ambLevel()), ctx.currentTime, 0.3);
    } catch {}
  }
  notify();
  return getAudioState();
}

export function setFxVol(v) {
  state.fxVol = clampVol(v, state.fxVol);
  saveState();
  notify();
  return getAudioState();
}

export function isMusicPlaying() {
  return !state.muted && state.amb !== 'off';
}

export function toggleMusic() {
  if (isMusicPlaying()) {
    setMuted(true);
  } else {
    if (state.amb === 'off') state.amb = 'elegante';
    setMuted(false);
  }
  return isMusicPlaying();
}

export function onAudioChange(fn) {
  subs.add(fn);
  return () => subs.delete(fn);
}

export function playUiSfx(kind = 'click') {
  try {
    unlockPortalAudio();
    if (state.muted) return;
    const v = (state.fxVol / 100) * 0.16;
    if (!v) return;
    const c = getCtx();
    if (!c) return;

    const t = c.currentTime + 0.01;
    const pack = state.pack || 'cristal';

    if (pack === 'cristal') {
      if (kind === 'hover') {
        tone(c, midiHz(95), t, 0.045, v * 0.18, 'sine');
      } else if (kind === 'nav') {
        tone(c, midiHz(81), t, 0.35, v * 0.5);
        tone(c, midiHz(88), t + 0.07, 0.45, v * 0.45);
      } else if (kind === 'ok') {
        [76, 81, 84, 88].forEach((n, i) => tone(c, midiHz(n), t + i * 0.065, 0.6, v * 0.4));
      } else if (kind === 'bad') {
        tone(c, midiHz(62), t, 0.14, v * 0.35, 'triangle');
        tone(c, midiHz(57), t + 0.07, 0.2, v * 0.35, 'triangle');
      } else if (kind === 'boot') {
        [57, 64, 69, 71, 76].forEach((n, i) => tone(c, midiHz(n), t + i * 0.12, 1.8, v * 0.35, 'triangle'));
        tone(c, midiHz(93), t + 0.7, 1.6, v * 0.12);
      } else {
        tone(c, midiHz(88), t, 0.22, v * 0.5);
        tone(c, midiHz(100), t, 0.12, v * 0.15);
      }
    } else if (pack === 'seda') {
      const bub = (f0, tt, vv, d = 0.16) => {
        const o = c.createOscillator();
        const g = c.createGain();
        const lp = c.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 1400;
        o.type = 'sine';
        o.frequency.setValueAtTime(f0 * 1.25, tt);
        o.frequency.exponentialRampToValueAtTime(f0, tt + 0.05);
        g.gain.setValueAtTime(0.0001, tt);
        g.gain.exponentialRampToValueAtTime(Math.max(0.0001, vv), tt + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, tt + d);
        o.connect(lp);
        lp.connect(g);
        g.connect(bus);
        o.start(tt);
        o.stop(tt + d + 0.05);
      };
      if (kind === 'hover') {
        bub(midiHz(74), t, v * 0.22, 0.05);
      } else if (kind === 'nav') {
        bub(midiHz(62), t, v * 0.6);
        bub(midiHz(69), t + 0.08, v * 0.55, 0.3);
      } else if (kind === 'ok') {
        [60, 64, 67, 72].forEach((n, i) => bub(midiHz(n), t + i * 0.07, v * 0.5, 0.5));
      } else if (kind === 'bad') {
        bub(midiHz(55), t, v * 0.5, 0.16);
        bub(midiHz(50), t + 0.08, v * 0.45, 0.22);
      } else if (kind === 'boot') {
        [48, 55, 60, 64].forEach((n, i) => bub(midiHz(n), t + i * 0.16, v * 0.55, 1.4));
      } else {
        bub(midiHz(67), t, v * 0.7);
      }
    } else if (pack === 'tactil') {
      if (kind === 'hover') {
        tick(c, t, v * 0.28, 3200);
      } else if (kind === 'nav') {
        tick(c, t, v, 2200);
        tick(c, t + 0.05, v * 0.7, 3600);
      } else if (kind === 'ok') {
        tick(c, t, v, 2600);
        tone(c, midiHz(84), t + 0.02, 0.18, v * 0.25);
      } else if (kind === 'bad') {
        tick(c, t, v * 0.85, 720);
        tone(c, midiHz(52), t + 0.02, 0.2, v * 0.35, 'sawtooth');
      } else if (kind === 'boot') {
        [0, 0.08, 0.16, 0.24].forEach((d) => tick(c, t + d, v, 1800 + d * 6000));
        tone(c, midiHz(60), t + 0.3, 1.2, v * 0.3, 'triangle');
      } else {
        tick(c, t, v);
      }
    } else {
      const pluck = (n, tt, vv, d = 0.9) => {
        const o = c.createOscillator();
        const o2 = c.createOscillator();
        const lp = c.createBiquadFilter();
        const g = c.createGain();
        o.type = 'sawtooth';
        o2.type = 'triangle';
        o.frequency.value = midiHz(n);
        o2.frequency.value = midiHz(n) * 2;
        lp.type = 'lowpass';
        lp.Q.value = 2;
        lp.frequency.setValueAtTime(3200, tt);
        lp.frequency.exponentialRampToValueAtTime(260, tt + 0.35);
        g.gain.setValueAtTime(0.0001, tt);
        g.gain.exponentialRampToValueAtTime(Math.max(0.0001, vv), tt + 0.004);
        g.gain.exponentialRampToValueAtTime(0.0001, tt + d);
        o.connect(lp);
        o2.connect(lp);
        lp.connect(g);
        g.connect(bus);
        o.start(tt);
        o2.start(tt);
        o.stop(tt + d + 0.05);
        o2.stop(tt + d + 0.05);
      };
      if (kind === 'hover') {
        pluck(74, t, v * 0.14, 0.18);
      } else if (kind === 'nav') {
        pluck(57, t, v * 0.35);
        pluck(62, t + 0.09, v * 0.32);
      } else if (kind === 'ok') {
        [50, 57, 62, 66, 69].forEach((n, i) => pluck(n, t + i * 0.06, v * 0.3, 1.2));
      } else if (kind === 'bad') {
        pluck(45, t, v * 0.35, 0.35);
        pluck(42, t + 0.08, v * 0.32, 0.45);
      } else if (kind === 'boot') {
        [38, 45, 50, 54, 57, 62].forEach((n, i) => pluck(n, t + i * 0.11, v * 0.32, 1.8));
      } else {
        pluck(62, t, v * 0.35, 0.5);
      }
    }
  } catch {}
}
