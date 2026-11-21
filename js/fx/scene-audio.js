// Partituras de los portales: efectos ElevenLabs (boom, encendido, alerta, pop y ambientes)
// como capa principal, con texturas sintetizadas propias de cada escena encima.

import { getEngine, isPortalAudioMuted, setPortalAudioMuted, duck, addDuckTarget, removeDuckTarget } from './portal-audio.js?v=20261122g';
import { getSfx, warmSfx } from './sfx-bank.js?v=20261122g';

let whiteBuf = null;

function getWhite(ctx) {
  if (whiteBuf && whiteBuf.sampleRate === ctx.sampleRate) return whiteBuf;
  const len = Math.floor(ctx.sampleRate * 2);
  whiteBuf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = whiteBuf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  return whiteBuf;
}

const LEVEL = 0.8;

// Audio de cada escena: sonido de arranque y cama ambiental (archivos de assets/sfx).
const SCENE_AUDIO = {
  'modulo:juegos': { intro: 'power', bed: ['portada', 'percu'], hit: 'cyber' },
  'modulo:recursos': { intro: 'power', bed: ['calma2', 'darkbed'], hit: 'heroic' },
  'modulo:stats': { intro: 'alert', bed: ['pulsos', 'latido'], hit: 'apoc' },
  'modulo:resumenes': { intro: 'power', bed: ['calma1', 'darkbed'], hit: 'heroic' },
  'modulo:repasa': { intro: 'power', bed: ['cuenta', 'percu'], hit: 'cyber' },
  'modulo:hgr72': { intro: 'alert', bed: ['sombra', 'latido'], hit: 'apoc' },
  'juegos:blitz': { intro: 'power', bed: ['cuenta', 'percu'], hit: 'cyber' },
  'juegos:pase': { intro: 'power', bed: ['calma1'], hit: 'heroic' },
  'juegos:lapblanca': { intro: 'alert', bed: ['tension', 'latido'], hit: 'apoc' },
  'juegos:detective': { intro: 'alert', bed: ['sombra'], hit: 'apoc' },
  'juegos:quirofano': { intro: 'power', bed: ['calma2', 'darkbed'], hit: 'heroic' },
  'juegos:noctua': { intro: 'alert', bed: ['pulsos', 'latido'], hit: 'apoc' },
  'recursos:3d': { intro: 'power', bed: ['portada', 'darkbed'], hit: 'cyber' },
  'recursos:algoritmos': { intro: 'power', bed: ['calma1', 'percu'], hit: 'cyber' },
  'recursos:casos': { intro: 'alert', bed: ['tension', 'sombra'], hit: 'apoc' },
  'recursos:guias': { intro: 'power', bed: ['calma1', 'darkbed'], hit: 'heroic' },
  'recursos:escalas': { intro: 'power', bed: ['cuenta'], hit: 'cyber' },
};

export function startSceneScore(key, { mode = 'full' } = {}) {
  let muted = isPortalAudioMuted();
  let stopped = false;
  const timers = [];
  const sources = [];
  const noop = {
    stop() { stopped = true; },
    setMuted(f) { muted = Boolean(f); setPortalAudioMuted(muted); },
  };
  const engine = getEngine();
  if (!engine) return noop;
  const { ctx, dry, verb, brownBuf, warmCurve } = engine;
  const white = getWhite(ctx);

  const master = ctx.createGain();
  master.gain.setValueAtTime(muted ? 0.0001 : LEVEL, ctx.currentTime);
  const shaper = ctx.createWaveShaper();
  shaper.curve = warmCurve;
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 4200;
  master.connect(shaper);
  shaper.connect(lp);
  lp.connect(dry);
  const send = ctx.createGain();
  send.gain.value = 0.35;
  lp.connect(send);
  send.connect(verb);

  // Los archivos van directo al filtro (sin la saturación) para conservar su pegada.
  const sampleBus = ctx.createGain();
  sampleBus.gain.value = 1;
  sampleBus.connect(lp);
  // Camas de la escena: bajan bajo la voz y los golpes finales (ducking)
  const bedBus = ctx.createGain();
  bedBus.connect(sampleBus);
  addDuckTarget(bedBus);
  warmSfx(ctx);

  const track = (n) => { sources.push(n); return n; };

  const sample = (name, t, { vol = 1, rate = 1, offset = 0, dur = null, fadeIn = 0, fadeOut = 0, cutoff = null, isBed = false } = {}) => {
    const buf = getSfx(name);
    if (!buf) return false;
    const src = track(ctx.createBufferSource());
    src.buffer = buf;
    src.playbackRate.value = rate;
    const g = ctx.createGain();
    const len = dur ?? Math.max(0.05, (buf.duration - offset) / rate);
    if (fadeIn > 0) {
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + fadeIn);
    } else {
      g.gain.setValueAtTime(vol, t);
    }
    if (fadeOut > 0) {
      g.gain.setValueAtTime(vol, t + Math.max(fadeIn, len - fadeOut));
      g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    }
    let node = src;
    if (cutoff) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = cutoff;
      src.connect(f);
      node = f;
    }
    node.connect(g);
    g.connect(isBed ? bedBus : sampleBus);
    src.start(t, offset);
    src.stop(t + len + 0.05);
    return true;
  };
  const at = (sec, fn) => {
    const id = setTimeout(() => {
      if (stopped) return;
      try {
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});
        fn(ctx.currentTime + 0.012);
      } catch {}
    }, Math.max(0, Math.round(sec * 1000)));
    timers.push(id);
  };

  // ---------- Primitivas ----------
  const tone = (t, { f = 220, f2 = null, dur = 0.3, vol = 0.2, type = 'sine', atk = 0.005, cutoff = 6000 } = {}) => {
    const o = track(ctx.createOscillator());
    const g = ctx.createGain();
    const fl = ctx.createBiquadFilter();
    fl.type = 'lowpass';
    fl.frequency.value = cutoff;
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(Math.max(20, f2), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + atk);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(fl); fl.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.05);
  };

  const noise = (t, { dur = 0.2, vol = 0.2, type = 'bandpass', f = 1500, f2 = null, q = 1, atk = 0.004, brown = false } = {}) => {
    const s = track(ctx.createBufferSource());
    s.buffer = brown ? brownBuf : white;
    s.loop = true;
    const fl = ctx.createBiquadFilter();
    fl.type = type;
    fl.frequency.setValueAtTime(f, t);
    if (f2) fl.frequency.exponentialRampToValueAtTime(Math.max(20, f2), t + dur);
    fl.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + atk);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(master);
    s.start(t, Math.random()); s.stop(t + dur + 0.05);
  };

  const boom = (t, vol = 0.5) => {
    const ok = sample('boom', t, { vol: Math.min(1.4, vol * 2.2), offset: 0.35, fadeOut: 0.8 });
    tone(t, { f: 110, f2: 32, dur: 1.1, vol: ok ? vol * 0.55 : vol, type: 'sine' });
    if (!ok) {
      tone(t, { f: 55, dur: 1.4, vol: vol * 0.5, type: 'triangle', cutoff: 200 });
      noise(t, { dur: 0.6, vol: vol * 0.35, type: 'lowpass', f: 400, f2: 60, brown: true });
    }
  };
  const pop = (t, vol = 0.9, rate = 1) => {
    if (!sample('pop', t, { vol, rate })) tone(t, { f: 900 * rate, f2: 300, dur: 0.12, vol: 0.08 });
  };
  const kick = (t, vol = 0.45) => tone(t, { f: 140, f2: 42, dur: 0.32, vol });
  const click = (t, vol = 0.12, f = 1500) => noise(t, { dur: 0.04, vol: vol * 1.4, type: 'bandpass', f: Math.min(f, 1800), q: 4, atk: 0.001 });
  const metal = (t, vol = 0.1) => {
    [620, 930, 1390].forEach((f, i) => tone(t, { f, dur: 0.4 - i * 0.08, vol: vol / (i + 1), type: 'sine', atk: 0.001, cutoff: 3000 }));
    click(t, vol * 0.8, 1500);
  };
  const beep = (t, f = 440, vol = 0.09, dur = 0.12) => tone(t, { f: Math.min(f, 880), dur, vol, type: 'sine', atk: 0.004 });
  const heart = (t, vol = 0.35) => { tone(t, { f: 72, f2: 40, dur: 0.18, vol }); tone(t + 0.16, { f: 64, f2: 38, dur: 0.16, vol: vol * 0.75 }); };
  const whoosh = (t, dur = 0.5, vol = 0.12, f = 600, f2 = 3200) => noise(t, { dur, vol, type: 'bandpass', f, f2, q: 1.2, atk: dur * 0.6 });
  const pad = (t, freqs, dur = 3, vol = 0.05) => freqs.forEach((f) => {
    tone(t, { f, dur, vol, type: 'sawtooth', atk: dur * 0.4, cutoff: 900 });
  });

  // ---------- Partituras ----------
  const S = {
    'modulo:juegos': {
      full() {
        // Túnel de hexágonos: barridos que aceleran y golpes de cartucho
        for (let i = 0; i < 6; i++) at(3.4 + i * 0.8, (t) => { whoosh(t - 0.25, 0.3, 0.1, 400, 3600); kick(t, 0.35); });
        for (let s = 2.4; s < 6.6; s += 0.6) at(s, (t) => tone(t, { f: 55, dur: 0.5, vol: 0.12, type: 'sawtooth', cutoff: 260 }));
      },
      sting(t) { kick(t, 0.6); whoosh(t, 0.4, 0.1, 300, 4000); },
    },
    'modulo:recursos': {
      full() {
        // Bóveda: cuatro anillos que se traban con chasquido metálico
        [3.0, 3.8, 4.6, 5.4].forEach((k, i) => at(k, (t) => { metal(t, 0.14); tone(t, { f: 90 - i * 8, f2: 50, dur: 0.35, vol: 0.3 }); }));
        for (let s = 2.4; s < 3.0; s += 0.08) at(s, (t) => click(t, 0.05, 2200));
        at(6.2, (t) => noise(t, { dur: 2.6, vol: 0.08, type: 'lowpass', f: 120, f2: 900, atk: 2.2, brown: true }));
      },
      sting(t) { metal(t, 0.14); kick(t + 0.05, 0.5); },
    },
    'modulo:stats': {
      full() {
        // Línea plana → descarga del desfibrilador → regresa el ritmo
        at(0.05, (t) => tone(t, { f: 988, dur: 1.55, vol: 0.06, type: 'sine', atk: 0.01 }));
        at(0.9, (t) => tone(t, { f: 300, f2: 2600, dur: 0.75, vol: 0.05, type: 'sawtooth', atk: 0.05, cutoff: 3000 }));
        let s = 2.3, bpm = 54;
        while (s < 9.4) { const k = s; at(k, (t) => { heart(t, 0.34); beep(t + 0.02, 1040, 0.045, 0.07); }); bpm = Math.min(96, bpm + 6); s += 60 / bpm; }
      },
      sting(t) { heart(t, 0.42); beep(t, 1040, 0.06, 0.08); },
    },
    'juegos:blitz': {
      full() {
        let s = 2.4, gap = 0.5;
        while (s < 9.4) { const k = s; at(k, (t) => click(t, 0.14, gap < 0.2 ? 3400 : 2600)); s += gap; gap = Math.max(0.075, gap * 0.93); }
        [6.75, 7.65, 8.55, 9.1].forEach((k) => at(k, (t) => kick(t, 0.55)));
        [3.3, 4.6, 5.9].forEach((k) => at(k, (t) => noise(t, { dur: 0.25, vol: 0.12, type: 'bandpass', f: 600, atk: 0.002 })));
      },
      sting(t) { kick(t, 0.6); [0, 0.08, 0.16].forEach((d) => click(t + d, 0.14, 3400)); },
    },
    'juegos:pase': {
      full() {
        at(2.3, (t) => { tone(t, { f: 120, dur: 7.4, vol: 0.035, type: 'sawtooth', atk: 0.6, cutoff: 400 }); tone(t, { f: 240, dur: 7.4, vol: 0.015, type: 'square', atk: 0.6, cutoff: 600 }); });
        for (let i = 0; i < 10; i++) at(2.4 + i * 0.5, (t) => { click(t, 0.1, 1800); tone(t, { f: 90, f2: 60, dur: 0.12, vol: 0.18 }); });
        for (let s = 3; s < 9.3; s += 0.55) at(s, (t) => noise(t, { dur: 0.09, vol: 0.18, type: 'lowpass', f: 380, brown: true, atk: 0.003 }));
        for (let i = 0; i < 5; i++) at(3.3 + i * 0.55, (t) => noise(t, { dur: 0.22, vol: 0.05, type: 'bandpass', f: 3800, f2: 2800, q: 3 }));
        [6.75, 7.65, 8.55].forEach((k) => at(k, (t) => beep(t, 660, 0.07)));
      },
      sting(t) { click(t, 0.12, 1800); noise(t + 0.05, { dur: 0.22, vol: 0.06, type: 'bandpass', f: 3800, f2: 2800, q: 3 }); },
    },
    'juegos:lapblanca': {
      full() {
        for (let s = 2.4; s < 9.4; s += 0.8) at(s, (t) => beep(t, 880, 0.08));
        at(2.5, (t) => noise(t, { dur: 1.4, vol: 0.14, type: 'bandpass', f: 1800, f2: 6200, q: 4, atk: 0.05 }));
        at(2.5, (t) => metal(t, 0.06));
        [6.75, 7.65, 8.55].forEach((k) => at(k, (t) => { kick(t, 0.5); tone(t, { f: 98, dur: 0.6, vol: 0.18, type: 'triangle', cutoff: 300 }); }));
      },
      sting(t) { beep(t, 880, 0.09); noise(t, { dur: 0.6, vol: 0.12, type: 'bandpass', f: 2000, f2: 6200, q: 4, atk: 0.03 }); },
    },
    'juegos:detective': {
      full() {
        at(1.8, (t) => noise(t, { dur: 7.8, vol: 0.08, type: 'lowpass', f: 700, atk: 1.2, brown: true }));
        const walk = [82.4, 98, 110, 116.5, 110, 98, 82.4, 73.4];
        for (let i = 0; i < 16; i++) at(2.4 + i * 0.45, (t) => tone(t, { f: walk[i % walk.length], dur: 0.38, vol: 0.28, type: 'triangle', atk: 0.003, cutoff: 700 }));
        [3.4, 4.6, 5.8, 7.0].forEach((k) => at(k, (t) => tone(t, { f: 1318, dur: 0.8, vol: 0.04, type: 'sine', atk: 0.01 })));
      },
      sting(t) { tone(t, { f: 82.4, dur: 0.4, vol: 0.3, type: 'triangle', cutoff: 700 }); tone(t + 0.05, { f: 1318, dur: 0.7, vol: 0.05 }); },
    },
    'juegos:quirofano': {
      full() {
        for (let i = 0; i < 7; i++) at(2.4 + i * 0.42, (t) => { tone(t, { f: 70, f2: 50, dur: 0.25, vol: 0.25 }); tone(t, { f: 180 + i * 20, dur: 0.6, vol: 0.03, type: 'sawtooth', atk: 0.1, cutoff: 800 }); });
        for (let i = 0; i < 6; i++) at(3.8 + i * 0.55, (t) => metal(t, 0.1));
        for (let s = 2.6; s < 9.4; s += 2.4) at(s, (t) => { noise(t, { dur: 1.1, vol: 0.08, type: 'lowpass', f: 300, f2: 900, atk: 0.8 }); noise(t + 1.2, { dur: 1.0, vol: 0.05, type: 'lowpass', f: 900, f2: 250, atk: 0.05 }); });
      },
      sting(t) { metal(t, 0.12); metal(t + 0.14, 0.08); },
    },
    'juegos:noctua': {
      full() {
        at(1.8, (t) => pad(t, [110, 164.8, 220], 7.8, 0.025));
        for (let s = 2.2; s < 9.4; s += 2.6) at(s, (t) => { noise(t, { dur: 1.2, vol: 0.07, type: 'lowpass', f: 400, f2: 1100, atk: 0.9 }); noise(t + 1.3, { dur: 1.0, vol: 0.05, type: 'lowpass', f: 1000, f2: 300 }); });
        let s = 1.8;
        while (s < 9.4) {
          const bpm = s < 6.8 ? 72 + (s / 6.8) * 66 : 138 - Math.min(1, (s - 6.8) / 2.4) * 58;
          const k = s;
          at(k, (t) => heart(t, 0.32));
          at(k + 0.02, (t) => beep(t, 1040, 0.035, 0.07));
          s += 60 / bpm;
        }
      },
      sting(t) { heart(t, 0.4); beep(t, 1040, 0.05, 0.08); },
    },
    'recursos:3d': {
      full() {
        for (let s = 2.2; s < 9.2; s += 1.6) at(s, (t) => noise(t, { dur: 1.1, vol: 0.07, type: 'bandpass', f: 300, f2: 4200, q: 6, atk: 0.4 }));
        for (let i = 0; i < 18; i++) at(2.3 + i * 0.3, (t) => tone(t, { f: 330 * Math.pow(2, (i % 12) / 12), dur: 0.12, vol: 0.05, type: 'triangle' }));
      },
      sting(t) { noise(t, { dur: 0.7, vol: 0.09, type: 'bandpass', f: 300, f2: 4200, q: 6, atk: 0.2 }); },
    },
    'recursos:algoritmos': {
      full() {
        const notes = [220, 261.6, 293.7, 329.6, 392, 440, 523.3, 587.3, 659.3, 784];
        for (let lvl = 0; lvl < 5; lvl++) {
          for (let k = 0; k <= lvl; k++) at(2.3 + lvl * 0.75 + k * 0.1, (t) => tone(t, { f: notes[Math.min(notes.length - 1, lvl * 2 + k % 2)], dur: 0.22, vol: 0.06, type: 'square', cutoff: 2400 }));
        }
        for (let s = 5.2; s < 9.4; s += 0.5) at(s, (t) => tone(t, { f: 880, f2: 1760, dur: 0.15, vol: 0.03, type: 'sine' }));
      },
      sting(t) { [0, 0.07, 0.14, 0.21].forEach((d, i) => tone(t + d, { f: [261.6, 329.6, 392, 523.3][i], dur: 0.2, vol: 0.06, type: 'square', cutoff: 2400 })); },
    },
    'recursos:casos': {
      full() {
        for (let i = 0; i < 9; i++) {
          at(2.3 + i * 0.48, (t) => whoosh(t, 0.35, 0.08, 500, 2600));
          at(2.3 + i * 0.48 + 0.42, (t) => { noise(t, { dur: 0.12, vol: 0.2, type: 'lowpass', f: 500, brown: true }); click(t, 0.05, 1400); });
        }
        at(6.8, (t) => { kick(t, 0.6); noise(t, { dur: 0.08, vol: 0.2, type: 'bandpass', f: 1200, q: 2 }); });
      },
      sting(t) { whoosh(t, 0.25, 0.08, 500, 2600); kick(t + 0.22, 0.55); },
    },
    'recursos:guias': {
      full() {
        at(1.9, (t) => pad(t, [98, 146.8, 196, 233.1], 8, 0.022));
        for (let g = 0; g < 7; g++) for (let k = 0; k < 4; k++) at(2.4 + g * 0.95 + k * 0.07, (t) => noise(t, { dur: 0.08, vol: 0.07, type: 'bandpass', f: 2600 + k * 300, q: 1.5, atk: 0.004 }));
      },
      sting(t) { for (let k = 0; k < 5; k++) noise(t + k * 0.05, { dur: 0.07, vol: 0.07, type: 'bandpass', f: 2600 + k * 250, q: 1.5 }); },
    },
    'recursos:escalas': {
      full() {
        for (let i = 0; i < 3; i++) for (let k = 0; k < 14; k++) at(2.5 + i * 0.6 + k * 0.12, (t) => click(t, 0.06, 3200 + (k % 3) * 400));
        [6.75, 7.65, 8.55].forEach((k) => at(k, (t) => { beep(t, 1200, 0.07, 0.08); beep(t + 0.11, 1600, 0.06, 0.1); }));
      },
      sting(t) { click(t, 0.08, 3200); beep(t + 0.06, 1200, 0.07, 0.08); beep(t + 0.17, 1600, 0.06, 0.1); },
    },
  };

  const score = S[key];
  const conf = SCENE_AUDIO[key] || { intro: 'power', bed: [] };
  if (mode === 'echo') {
    at(0, (t) => { if (!sample('impacto', t, { vol: 0.8 })) boom(t, 0.5); score?.sting(t + 0.05); });
    at(0.55, (t) => pop(t, 1, 0.8));
    at(1.0, (t) => boom(t, 0.38));
  } else {
    // Arranque: el encendido culmina justo en el primer golpe (1.65 s); la alerta entra seca.
    at(0, (t) => {
      if (conf.intro === 'alert') sample('alert', t + 0.05, { vol: 0.9 });
      else sample('power', t, { vol: 1, offset: 0.55 });
    });
    at(1.65, (t) => boom(t, 0.55));
    // Cama ambiental de la escena hasta el impacto final
    at(1.7, (t) => conf.bed.forEach((b, i) => sample(b, t, { vol: i === 0 ? 0.75 : 0.45, fadeIn: 0.9, dur: 8.6, fadeOut: 1.4, isBed: true })));
    // Letras del título y píldoras
    at(2.5, (t) => pop(t, 0.7, 0.7));
    for (let i = 0; i < 6; i++) at(3.4 + i * 0.8, (t) => pop(t, 0.9, 1 + i * 0.06));
    score?.full();
    // Cuenta regresiva con golpe y subida antes del final
    [6.75, 7.65, 8.55].forEach((k, i) => at(k, (t) => { kick(t, 0.5 + i * 0.08); pop(t, 0.8, 0.6 + i * 0.1); }));
    // Subida grave (pico del riser a 3.9 s → cae en el impacto de 9.5 s)
    at(5.6, (t) => { if (!sample('riser', t, { vol: 0.85 })) noise(t + 2.3, { dur: 1.55, vol: 0.12, type: 'lowpass', f: 160, f2: 900, q: 1, atk: 1.4, brown: true }); });
    at(9.1, (t) => { kick(t, 0.6); sample('whsh', t + 0.05, { vol: 0.6, rate: 0.8 }); });
    // Impacto final: doom (golpe a 1.5 s) + braam propio de la escena
    at(8.0, (t) => { duck(t, 1.4, 0.55, 0.05, 0.8); sample('doom', t, { vol: 0.95 }); });
    at(9.5, (t) => {
      duck(t, 2.4, 0.55, 0.04, 0.9);
      if (!sample(conf.hit || 'epicboom', t, { vol: 0.7, dur: 2.6, fadeOut: 0.9 })) boom(t, 0.7);
      sample('epicboom', t, { vol: 0.5, dur: 2.4, fadeOut: 0.8 });
      score?.sting(t + 0.04);
    });
  }

  return {
    stop() {
      if (stopped) return;
      stopped = true;
      timers.forEach((id) => clearTimeout(id));
      removeDuckTarget(bedBus);
      try { master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.025); } catch {}
      setTimeout(() => {
        sources.forEach((n) => { try { n.stop(); } catch {} try { n.disconnect(); } catch {} });
        try { master.disconnect(); bedBus.disconnect(); sampleBus.disconnect(); shaper.disconnect(); lp.disconnect(); send.disconnect(); } catch {}
      }, 90);
    },
    setMuted(flag) {
      muted = Boolean(flag);
      setPortalAudioMuted(muted);
      try { master.gain.setTargetAtTime(muted ? 0.0001 : LEVEL, ctx.currentTime, 0.035); } catch {}
    },
  };
}
