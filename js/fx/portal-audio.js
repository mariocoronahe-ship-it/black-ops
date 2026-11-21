// Motor Web Audio compartido por los portales, la intro, la voz y la interfaz (audio.js):
// un solo contexto con bus maestro (compresor suave, estantes de agudos, limitador y techo
// a -1 dBFS), reverb con pre-delay y reflexiones tempranas, ruido marrón, saturación cálida,
// ducking de camas bajo golpes y voz, y la preferencia de silencio del usuario.

const PORTAL_SFX_KEY = 'calot:portal-sfx';

let sharedCtx = null;
let sharedComp = null;
let sharedDry = null;
let sharedVerb = null;
let sharedVerbLp = null;
let sharedBrownNoiseBuf = null;
let sharedWarmCurve = null;

// Ducking: las camas (ruido de fondo, ambiente) bajan cuando entra un golpe o la voz.
const duckNodes = new Set();
let duckSpans = [];

export function isPortalAudioMuted() {
  try {
    if (typeof localStorage === 'undefined') return false;
    return localStorage.getItem(PORTAL_SFX_KEY) === '0';
  } catch {
    return false;
  }
}

export function setPortalAudioMuted(muted) {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(PORTAL_SFX_KEY, muted ? '0' : '1');
  } catch {}
}

function makeWarmCurve(amount = 1.8) {
  const n = 2048;
  const curve = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = (i * 2) / n - 1;
    curve[i] = Math.tanh(x * amount) / Math.tanh(amount);
  }
  return curve;
}

// Techo suave: nada pasa de ~-1 dBFS aunque el limitador se retrase.
function makeCeilingCurve(ceil = 0.89) {
  const n = 4096;
  const curve = new Float32Array(n);
  const knee = 0.7 * ceil;
  for (let i = 0; i < n; i++) {
    const x = (i * 2) / (n - 1) - 1;
    const a = Math.abs(x);
    const y = a <= knee ? a : knee + (ceil - knee) * Math.tanh((a - knee) / (ceil - knee));
    curve[i] = Math.sign(x) * y;
  }
  return curve;
}

// Reverb: pre-delay de 18 ms, reflexiones tempranas distintas por canal y cola estéreo
// descorrelacionada que se oscurece con el tiempo (sin siseo agudo).
function makeRoomImpulse(c) {
  const sr = c.sampleRate;
  const len = Math.max(1, Math.floor(sr * 2.4));
  const ir = c.createBuffer(2, len, sr);
  const pre = Math.floor(sr * 0.018);
  const early = [
    [0.021, 0.62, 0.027, 0.5], [0.034, 0.5, 0.041, 0.55], [0.047, 0.42, 0.058, 0.38],
    [0.063, 0.34, 0.072, 0.36], [0.081, 0.28, 0.089, 0.24], [0.097, 0.2, 0.11, 0.22],
  ];
  for (let ch = 0; ch < 2; ch++) {
    const d = ir.getChannelData(ch);
    let lp = 0;
    for (let i = pre; i < len; i++) {
      const k = (i - pre) / (len - pre);
      const coef = 0.78 + 0.19 * k; // paso-bajo de un polo que se cierra en la cola
      lp = lp * coef + (Math.random() * 2 - 1) * (1 - coef);
      d[i] = lp * 2.6 * Math.pow(1 - k, 2.6) * Math.min(1, k * 9 + 0.15);
    }
    early.forEach((e, n) => {
      const at = Math.floor(sr * e[ch * 2]) + pre;
      const g = e[ch * 2 + 1] * (n % 2 ? -1 : 1) * 0.9;
      for (let j = 0; j < 6 && at + j < len; j++) d[at + j] += g * Math.exp(-j / 2);
    });
  }
  return ir;
}

function applyDucks(c) {
  const now = c.currentTime;
  duckSpans = duckSpans.filter((s) => s.end > now - 1).sort((a, b) => a.t0 - b.t0);
  const merged = [];
  duckSpans.forEach((s) => {
    const last = merged[merged.length - 1];
    if (last && s.t0 <= last.end + 0.05) {
      last.end = Math.max(last.end, s.end);
      last.depth = Math.min(last.depth, s.depth);
    } else merged.push({ ...s });
  });
  duckNodes.forEach((g) => {
    try {
      const p = g.gain;
      const cur = p.value;
      p.cancelScheduledValues(now);
      p.setValueAtTime(cur, now);
      merged.forEach((s) => {
        if (s.end <= now) return;
        p.setTargetAtTime(s.depth, Math.max(s.t0, now), s.atk / 3);
        p.setTargetAtTime(1, s.end, s.rel / 3);
      });
    } catch {}
  });
}

// Registra un nodo de ganancia (valor base 1, sin otra automatización) para que baje bajo golpes y voz.
export function addDuckTarget(node) { duckNodes.add(node); }
export function removeDuckTarget(node) { duckNodes.delete(node); }

// `at`: hora absoluta del contexto; `dur`: cuánto dura el golpe/voz; `depth`: ganancia de la cama (0.5 ≈ -6 dB).
export function duck(at, dur, depth = 0.5, atk = 0.06, rel = 0.7) {
  if (!sharedCtx || !duckNodes.size) return;
  duckSpans.push({ t0: at, end: at + dur, depth, atk, rel });
  applyDucks(sharedCtx);
}

export function getEngine() {
  try {
    if (typeof window === 'undefined') return null;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;

    if (!sharedCtx || sharedCtx.state === 'closed') {
      const c = new AC();
      // Compresor suave de pegamento
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -16;
      comp.knee.value = 14;
      comp.ratio.value = 3;
      comp.attack.value = 0.008;
      comp.release.value = 0.26;
      // Agudos domados con estantes suaves: se conserva claridad entre 2 y 5 kHz y todo lo
      // que pasa de ~5–6 kHz baja poco a poco (sin paso-bajo duro ni resonancias).
      const shelfA = c.createBiquadFilter();
      shelfA.type = 'highshelf';
      shelfA.frequency.value = 5500;
      shelfA.gain.value = -5;
      const shelfB = c.createBiquadFilter();
      shelfB.type = 'highshelf';
      shelfB.frequency.value = 7500;
      shelfB.gain.value = -6;
      // Limitador rápido (ratio alto) y techo suave a -1 dBFS
      const limiter = c.createDynamicsCompressor();
      limiter.threshold.value = -8;
      limiter.knee.value = 0;
      limiter.ratio.value = 20;
      limiter.attack.value = 0.001;
      limiter.release.value = 0.14;
      const trim = c.createGain();
      trim.gain.value = 0.98;
      const ceiling = c.createWaveShaper();
      ceiling.curve = makeCeilingCurve(0.89);
      ceiling.oversample = '4x';
      comp.connect(shelfA);
      shelfA.connect(shelfB);
      shelfB.connect(limiter);
      limiter.connect(trim);
      trim.connect(ceiling);
      ceiling.connect(c.destination);

      const convolver = c.createConvolver();
      convolver.buffer = makeRoomImpulse(c);

      const verbLp = c.createBiquadFilter();
      verbLp.type = 'lowpass';
      verbLp.frequency.value = 1800;
      verbLp.Q.value = 0.6;

      const wet = c.createGain();
      wet.gain.value = 0.36;
      convolver.connect(verbLp);
      verbLp.connect(wet);
      wet.connect(comp);

      const dry = c.createGain();
      dry.gain.value = 0.92;
      dry.connect(comp);

      // Buffer de ruido marrón (brown noise integrado, sin siseo ni frecuencias altas)
      const nLen = Math.max(1, Math.floor(c.sampleRate * 3.0));
      const nBuf = c.createBuffer(1, nLen, c.sampleRate);
      const nData = nBuf.getChannelData(0);
      let lastOut = 0;
      for (let i = 0; i < nLen; i++) {
        const white = Math.random() * 2 - 1;
        lastOut = (lastOut + 0.025 * white) / 1.025;
        nData[i] = Math.max(-1, Math.min(1, lastOut * 3.2));
      }

      sharedCtx = c;
      sharedComp = comp;
      sharedDry = dry;
      sharedVerb = convolver;
      sharedVerbLp = verbLp;
      sharedBrownNoiseBuf = nBuf;
      sharedWarmCurve = makeWarmCurve(1.8);
    }

    if (sharedCtx.state === 'suspended' || sharedCtx.state === 'interrupted') {
      sharedCtx.resume().catch(() => {});
    }

    return {
      ctx: sharedCtx,
      comp: sharedComp,
      dry: sharedDry,
      verb: sharedVerb,
      brownBuf: sharedBrownNoiseBuf,
      warmCurve: sharedWarmCurve,
    };
  } catch {
    return null;
  }
}

// 40 ms WAV silencioso (8 kHz mono PCM) para activar el canal de reproducción multimedia en iOS Safari
// (evita que el botón físico de silencio/vibración del iPhone silencie Web Audio).
const SILENT_WAV = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
let htmlUnlocker = null;
let keepAliveOsc = null;

/**
 * Desbloquea Web Audio y el canal multimedia de iOS/Android dentro del gesto táctil o clic del usuario.
 * Mantiene el AudioContext vivo mientras cargan modelos 3D o fragmentos dinámicos.
 */
export function unlockPortalAudio() {
  try {
    if (typeof navigator !== 'undefined' && navigator.audioSession) {
      try { navigator.audioSession.type = 'playback'; } catch {}
    }
    if (typeof Audio !== 'undefined' && !htmlUnlocker) {
      try {
        const a = new Audio(SILENT_WAV);
        a.setAttribute('playsinline', '');
        a.playsInline = true;
        a.volume = 0.01;
        const p = a.play();
        if (p && typeof p.then === 'function') {
          p.then(() => { htmlUnlocker = a; }).catch(() => {});
        }
      } catch {}
    }
    const eng = getEngine();
    if (!eng) return null;
    const c = eng.ctx;
    if (c.state !== 'running') {
      try { c.resume().catch(() => {}); } catch {}
    }
    // Disparo de buffer de 1 muestra para desbloquear iOS WebKit
    try {
      const b = c.createBuffer(1, 1, 22050);
      const s = c.createBufferSource();
      s.buffer = b;
      s.connect(c.destination);
      s.start(0);
    } catch {}
    // Oscilador inaudible continuo para evitar que iOS suspenda el contexto durante descargas 3D
    if (!keepAliveOsc) {
      try {
        const osc = c.createOscillator();
        const g = c.createGain();
        g.gain.value = 0.00001;
        osc.frequency.value = 1;
        osc.connect(g);
        g.connect(c.destination);
        osc.start();
        keepAliveOsc = osc;
      } catch {}
    }
    return eng;
  } catch {
    return null;
  }
}

if (typeof document !== 'undefined') {
  const onGesture = () => {
    unlockPortalAudio();
    if (sharedCtx && sharedCtx.state === 'running' && htmlUnlocker) {
      ['touchstart', 'touchend', 'pointerdown', 'click', 'keydown'].forEach((ev) =>
        document.removeEventListener(ev, onGesture, true)
      );
    }
  };
  ['touchstart', 'touchend', 'pointerdown', 'click', 'keydown'].forEach((ev) =>
    document.addEventListener(ev, onGesture, { capture: true, passive: true })
  );
}
