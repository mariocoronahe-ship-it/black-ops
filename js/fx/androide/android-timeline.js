export const CUE = {
  power: 1.85,
  voices: [6.0, 11.1, 13.3, 17.6, 22.2, 27.3],
  doom: 21.0,
  hit: 24.6,
  logo: 24.9,
  welcome: 26.7,
  heartbeats: [8.4, 12.4, 16.4],
};

export const TOTAL = 30;
export const REDUCED_TOTAL = 6;

const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const smooth = (x) => { x = clamp(x); return x * x * (3 - 2 * x); };
const easeOut = (x) => 1 - Math.pow(1 - clamp(x), 3);
const lerp = (a, b, k) => a + (b - a) * k;
const rad = (d) => (d * Math.PI) / 180;

export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function track(t, keys, ease = smooth) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (t <= keys[i][0]) {
      const [a, va] = keys[i - 1];
      const [b, vb] = keys[i];
      return lerp(va, vb, ease((t - a) / (b - a)));
    }
  }
  return keys[keys.length - 1][1];
}

const bump = (t, at, dur) => {
  const x = (t - at) / dur;
  if (x <= 0 || x >= 1) return 0;
  const s = Math.sin(Math.PI * x);
  return s * s;
};

function buildFlickers() {
  const r = rng(1313);
  const list = [];
  let t = 4.6;
  while (t < 24.0) {
    const late = t > 15;
    const depth = 0.3 + r() * 0.4;
    const dur = 0.09 + r() * (late ? 0.2 : 0.14);
    list.push({ t, dur, depth });
    if (r() < 0.28) list.push({ t: t + dur + 0.1, dur: 0.07 + r() * 0.06, depth: depth * 0.7 });
    t += (late ? 0.55 : 0.9) + r() * (late ? 0.8 : 1.4);
  }
  return list;
}

const FLICKERS = buildFlickers();
const SPUTTER = [[0, 0], [1.85, 0], [1.97, 0.38], [2.12, 0.05], [2.4, 0.5], [2.52, 0.12], [2.95, 0.62], [3.05, 0.3], [3.5, 0.62], [4.4, 0.55]];
const EYE_IGNITE = [[0, 0], [3.0, 0], [3.08, 0.5], [3.2, 0.04], [3.55, 0.42], [3.62, 0.06], [3.95, 0.34], [4.5, 0.3]];

function flicker(t) {
  let m = 1;
  for (const e of FLICKERS) {
    if (e.t > t) break;
    m -= e.depth * bump(t, e.t, e.dur);
  }
  return clamp(m, 0.14, 1);
}

function heartbeat(t) {
  let h = 0;
  for (const b of CUE.heartbeats) h += bump(t, b, 0.2) * 0.9 + bump(t, b + 0.26, 0.3) * 0.6;
  return h;
}

// Avance a tirones (servo con rebote), usado para ladear la cabeza
function ratchet(t, a, b, steps, seed) {
  const r = rng(seed);
  const bounds = [0];
  for (let i = 0; i < steps; i++) bounds.push(bounds[i] + 0.5 + r());
  const sum = bounds[steps];
  const u = clamp((t - a) / (b - a)) * sum;
  let i = 0;
  while (i < steps - 1 && u >= bounds[i + 1]) i++;
  const f = (u - bounds[i]) / (bounds[i + 1] - bounds[i]);
  const spring = 1 - Math.exp(-11 * f) * Math.cos(15 * f);
  return (i + clamp(spring, 0, 1.18)) / steps;
}

function tremor(t, amp) {
  const burst = 0.35 + 0.65 * Math.max(0, Math.sin(t * 1.7) * Math.sin(t * 0.63 + 1.1));
  return amp * burst * (Math.sin(t * 61.3) * 0.5 + Math.sin(t * 37.9 + 2.1) * 0.35 + Math.sin(t * 97.7 + 0.4) * 0.15);
}

function pulse(t, at, dur) { return bump(t, at, dur); }

export function sampleTimeline(t, reduced = false) {
  return reduced ? sampleReduced(t) : sampleFull(t);
}

// ---------- Guion de terror: «cada vez que se apaga la luz, está más cerca» ----------
// Los cortes caen en los impactos y glitches de la partitura (intro.js · buildGlitches).

const CUTS = [7.4, 10.4, 12.0, 13.6, 14.7, 16.3, 17.4, 18.5, 19.4, 20.2, 20.75, 23.85];
const LIGHTNING = [7.46, 7.64, 8.62, 9.38, 9.52, 10.44, 10.62];
const SPASMS = [
  [19.4, 34, 9, -18], [20.2, -28, -12, 22], [20.75, 12, 16, -30],
];

const DARK = { key: 0, under: 0, rimLeft: 0, rimRight: 0, fill: 0 };

const cam = (px, py, pz, tx, ty, fov, roll = 0, tz = 0) => ({ px, py, pz, tx, ty, tz, fov, roll });

function strobe(t, list, dur = 0.13) {
  let v = 0;
  for (const f of list) v = Math.max(v, bump(t, f, dur));
  return v;
}

function cutKick(t) {
  let v = 0;
  for (const c of CUTS) v = Math.max(v, bump(t, c, 0.09));
  return v;
}

// ---------- Monitor: frecuencia cardiaca del paciente (tú) ----------
export function heartRate(t) {
  if (t < 0.3) return 0;
  if (t >= 21.0 && t < 22.2) return 0; // línea plana
  if (t >= 24.6) return 0;
  return track(t, [[0.3, 72], [8, 74], [11.1, 96], [13.3, 104], [17.6, 118], [19.0, 128], [20.6, 142], [21, 142], [22.2, 150], [24.6, 158]]);
}

export const BEEPS = (() => {
  const list = [];
  let t = 0.6;
  while (t < 24.55) {
    const hr = heartRate(t);
    if (hr > 0) { list.push(+t.toFixed(3)); t += 60 / hr; } else t += 0.05;
  }
  return list;
})();

// Lámpara quirúrgica con fallas
const LAMP_SPUTTER = [[0, 0], [2.3, 0], [2.36, 1], [2.45, 0.1], [2.62, 0.9], [2.7, 0.2], [3.05, 1], [3.15, 0.45], [3.5, 1]];

function sampleFull(t) {
  const hb = heartbeat(t);
  const fl = t < 4.4 ? 1 : flicker(t);
  let c = cam(0, 1.32, 1.3, 0, 1.75, 30, 0.04, -0.4);
  let L = { ...DARK };
  let body = [0, 0, 0, 0.18, 0]; // x, y, z, inclinación (rad), giro
  let yaw = 0, pitch = 10, roll = 0; // grados; pitch + = mira hacia abajo (a ti)
  let eye = 0, cables = 0, lamp = 0, mist = 0.1, exposure = 1.0, halo = 0;
  let crackGlow = 0, crackSpread = 0, scan = -1, jawExtra = 0;
  let scalpel = null;
  const headT = [0, 0, 0];

  if (t < 6.0) {
    // Despiertas en la mesa: la lámpara se enciende sobre ti. No hay nadie.
    lamp = t < 3.5 ? track(t, LAMP_SPUTTER, (x) => x) : 0.95 * (0.85 + 0.15 * fl);
    c = cam(0.02, 1.3, 1.25, 0.03, 1.9, 32, 0.05, -0.8);
    body = [1.4, 0, -0.4, 0, 0]; // fuera de cuadro
    mist = 0.18 * lamp;
  } else if (t < 7.4) {
    // «No me busques»: se va la luz y frente a la lámpara aparecen sus ojos
    lamp = t < 6.08 ? 0.3 : 0;
    c = cam(0, 1.36, 0.95, 0, 1.68, 28, 0.03, -0.2);
    body = [0, 0, 0, 0.22, 0];
    pitch = 14;
    eye = 1.2;
    cables = 0.9 * (1 + hb * 0.5);
    L.rimLeft = 0.06;
    mist = 0.04;
  } else if (t < 11.1) {
    // La lámpara falla: entre destellos, la silueta recortada al borde del cuadro, de perfil
    const near = t >= 10.4;
    const f = strobe(t, LIGHTNING, 0.16);
    lamp = 0.12 + f * 1.05;
    c = near ? cam(0.04, 1.32, 1.05, 0.0, 1.78, 30, 0.04, -0.4) : cam(0.06, 1.3, 1.25, 0.02, 1.82, 32, 0.05, -0.6);
    body = near ? [-0.2, 0, -0.1, 0.16, 0] : [-0.36, 0, -0.25, 0.08, 0];
    yaw = near ? -48 : -64;
    yaw += tremor(t, 0.5);
    pitch = 4;
    eye = 0.5 + f * 0.4;
    cables = 0.5 + f * 0.4;
    L = { ...DARK, rimLeft: f * 0.9, rimRight: f * 1.2 };
    exposure = 1.0 + f * 0.25;
    mist = 0.1 + f * 0.25;
  } else if (t < 13.3) {
    // «Ya te vi»: gira de golpe hacia ti; en cada apagón está más inclinado encima
    const whip = t < 11.22 ? (t - 11.1) / 0.12 : 1 + Math.exp(-(t - 11.22) * 18) * Math.sin((t - 11.22) * 40) * 0.08;
    const w = clamp(whip, 0, 1.08);
    yaw = lerp(-48, 0, w) + tremor(t, 0.6);
    pitch = lerp(4, 16, w);
    const near = t >= 12.0;
    c = near ? cam(0, 1.4, 1.0, 0, 1.6, 28, 0.03, -0.1) : cam(0.02, 1.36, 1.15, 0, 1.64, 29, 0.04, -0.2);
    body = near ? [0, 0, 0.05, 0.36, 0] : [-0.08, 0, 0, 0.26, 0];
    const black = t > 11.86 && t < 12.0;
    lamp = black ? 0 : 0.9 * (0.7 + 0.3 * fl);
    L = black ? { ...DARK } : { ...DARK, key: 0.22, rimLeft: 0.5, rimRight: 0.6, under: 0.25 };
    eye = (1 + Math.exp(-Math.max(0, t - 11.1) * 2.5) * 1.6) * (black ? 0.3 : 1);
    cables = 1 + hb * 0.6;
  } else if (t < 15.6) {
    // «Sigo aquí…»: su rostro sobre ti, la lámpara como corona, láser de escaneo
    const k = (t - 13.3) / 2.3;
    if (t < 13.6) c = cam(0, 1.42, 0.98, 0, 1.6, 27, 0.03, 0);
    else if (t < 14.7) c = cam(-0.1, 1.4, 0.9, -0.01, 1.58, 26, 0.08, 0);
    else c = cam(0.02, 1.42, lerp(0.92, 0.84, k), 0, 1.58, 26, 0.02, 0);
    body = [0, 0, 0.05, 0.4, 0];
    pitch = 16;
    yaw = tremor(t, 0.3);
    lamp = 1;
    L = { ...DARK, key: 0.25, rimLeft: 0.4, rimRight: 0.5, under: 0.2 };
    eye = 1.25 * (1 + hb * 0.3);
    cables = 1.1 * (1 + hb * 0.6);
    scan = 1.67 - ((t - 13.45) % 1.05) / 1.05 * 0.16;
  } else if (t < 17.4) {
    // Apagón: sólo ojos y cables que cambian de sitio en la oscuridad
    c = cam(0, 1.36, 1.05, 0, 1.7, 30, 0.03, -0.2);
    body = t < 16.3 ? [0.32, 0, -0.15, 0.2, -0.3] : [-0.06, -0.02, 0.12, 0.42, 0.1];
    pitch = 12;
    yaw = (t < 16.3 ? -20 : 6) + tremor(t, 0.6);
    eye = 1.15;
    cables = 0.9 * (1 + hb * 0.5);
    mist = 0.04;
  } else if (t < 19.0) {
    // «Este quirófano es mío»: el bisturí entra al cuadro; la cabeza se ladea a tirones
    c = t < 18.5 ? cam(0.06, 1.4, 0.98, 0.02, 1.58, 28, 0.04, 0) : cam(-0.06, 1.42, 0.92, 0.02, 1.58, 28, -0.03, 0);
    body = [0, 0, 0.04, 0.38, 0];
    roll = 24 * ratchet(t, 17.5, 18.7, 3, 77) + tremor(t, 0.8);
    pitch = 14;
    yaw = 5 + tremor(t + 3, 0.6);
    lamp = 0.75 * (0.7 + 0.3 * fl);
    L = { ...DARK, key: 0.15, rimLeft: 0.45, rimRight: 0.5, under: 0.9 };
    eye = 1.2;
    cables = 1.2 * (1 + hb * 0.6);
    crackGlow = 0.6;
    crackSpread = lerp(0, 0.05, clamp((t - 17.6) / 1.4));
    const sIn = easeOut((t - 17.75) / 0.6);
    scalpel = { on: t > 17.7, x: lerp(0.32, 0.11, sIn), y: lerp(1.38, 1.52, sIn), z: 0.2, rx: 0.3, ry: -0.5, rz: lerp(0.9, 0.35, sIn) + Math.sin(t * 9) * 0.02 };
  } else if (t < 21.0) {
    // Corrupción: espasmos, lámpara en estroboscopio, las juntas se encienden en rojo
    c = cam(0.02, 1.42, lerp(0.98, 0.86, (t - 19) / 2), 0, 1.58, 27, 0.03, 0);
    body = [0, 0, 0.04, 0.4, 0];
    let sp = [0, 14, 22];
    let lastAt = 19;
    for (const [at, y, p, r] of SPASMS) if (t >= at) { sp = [y, p + 12, r]; lastAt = at; }
    const jerk = Math.exp(-(t - lastAt) * 30);
    yaw = sp[0] + tremor(t, 2.2) + jerk * 6;
    pitch = sp[1] + tremor(t + 7, 1.4);
    roll = sp[2] + tremor(t + 2, 1.6);
    const hard = Math.sin(t * 47) * Math.sin(t * 13) > 0.4 ? 0.1 : 1;
    lamp = hard;
    L = { ...DARK, key: 0.2 * hard, rimLeft: 0.6 * hard, rimRight: 0.6 * hard, under: 0.5 };
    eye = 1.35 * (1 + hb * 0.5);
    cables = 1.4 * (1 + hb * 0.6);
    crackGlow = 1.4;
    crackSpread = lerp(0.05, 0.19, clamp((t - 19) / 2));
    scalpel = { on: true, x: 0.11 + Math.sin(t * 31) * 0.004, y: 1.52, z: 0.2, rx: 0.3, ry: -0.5, rz: 0.35 };
    mist = 0.16;
  } else if (t < 22.2) {
    // Línea plana: negro; los ojos se encienden justo antes de hablar
    c = cam(0, 1.42, 0.88, 0, 1.57, 26, 0.02, 0);
    body = [0, 0, 0.05, 0.44, 0];
    pitch = 16;
    eye = t > 21.85 ? Math.min(1, (t - 21.85) / 0.08) * 1.4 : 0;
    cables = eye * 0.8;
    crackSpread = 0.19;
    crackGlow = eye * 0.8;
    mist = 0.03;
  } else if (t < 24.6) {
    // «Te estoy observando»: su cara sobre la tuya; al final, embestida con la mandíbula desencajada
    const k = (t - 22.2) / 1.65;
    c = cam(0, 1.42, lerp(0.92, 0.8, smooth(k)), 0, 1.57, 26, 0.02, 0);
    body = [0, 0, 0.05, 0.44, 0];
    pitch = 16;
    yaw = tremor(t, 0.3);
    roll = -4;
    lamp = 0.85;
    L = { ...DARK, key: 0.3, rimLeft: 0.5, rimRight: 0.55, under: 0.4 };
    eye = 1.25 * (1 + hb * 0.3);
    cables = 1.2 * (1 + hb * 0.6);
    crackSpread = 0.19;
    crackGlow = 0.9;
    if (t >= 23.85) {
      const l = easeOut((t - 23.85) / 0.55);
      headT[2] = l * 0.15;
      headT[1] = l * 0.01;
      body[3] = 0.44 - l * 0.08;
      pitch = 16 - l * 18; // levanta la cara hacia ti al embestir
      jawExtra = smooth((t - 23.95) / 0.3) * 0.34;
      eye = 1.6 + l * 1.6;
      cables = 2.2;
      roll = -4 - l * 8;
      c = cam(0, 1.4, 0.98, 0, 1.55, 30, 0.02, 0);
    }
    exposure = 1.0 + pulse(t, 24.42, 0.18) * 3.5;
  } else {
    // Título: oscuridad; al final sólo vuelven ojos, cables y boca mientras habla
    c = cam(0, 1.36, 1.1, 0, 1.72, 30, 0.02, -0.2);
    body = [0, 0, 0, 0.3, 0];
    pitch = 12;
    const back = t > 27.15 ? Math.min(1, (t - 27.15) / 0.12) : 0;
    eye = back * 1.15 * (t > 29.2 ? Math.max(0, 1 - (t - 29.2) / 0.5) : 1);
    cables = eye * 0.9;
    crackSpread = 0.19;
    crackGlow = eye * 0.6;
    const haloIn = easeOut((t - CUE.hit) / 0.7);
    halo = haloIn * track(t, [[24.6, 1], [26.5, 0.75], [29, 0.5]]);
    mist = 0.16;
  }

  const kick = cutKick(t);
  const aberration = 0.0008 + kick * 0.0045 + pulse(t, CUE.doom, 0.07) * 0.004 + pulse(t, CUE.hit, 0.07) * 0.0055
    + (t > 19 && t < 21 ? 0.0012 : 0);
  const fade = Math.min(track(t, [[0, 0], [0.3, 0], [0.8, 1]], smooth), track(t, [[28.3, 1], [30, 0]], smooth));
  const hit = t >= CUE.hit ? Math.exp(-(t - CUE.hit) * 1.4) : 0;

  return {
    cam: c, yaw: rad(yaw), pitch: rad(pitch), roll: rad(roll), headT, body,
    eye: eye + hit * 0.3, cables, lamp, scalpel, hr: heartRate(t),
    key: L.key, rimLeft: L.rimLeft, rimRight: L.rimRight, under: L.under, fill: L.fill, halo,
    mist,
    crackGlow: crackGlow + hb * 0.2, crackSpread, scan, jawExtra,
    exposure: exposure * fade,
    bloom: 0.8 + kick * 0.3 + lamp * 0.25,
    aberration,
    flicker: fl,
    motion: 1,
    time: t,
  };
}

function sampleReduced(t) {
  const fadeIn = smooth(t / 1.2);
  const fadeOut = smooth((REDUCED_TOTAL - t) / 1.1);
  const fade = Math.min(fadeIn, fadeOut);
  const eye = track(t, [[0, 0], [0.6, 0], [1.8, 0.8], [3.4, 0.9], [5, 0.55]]);
  const halo = track(t, [[0, 0], [2.2, 0], [3.6, 0.6], [5, 0.45]]);
  return {
    cam: { px: 0.02, py: 1.36, pz: 1.1, tx: 0, ty: 1.72, tz: -0.2, fov: 30, roll: 0.02 },
    yaw: rad(2), pitch: rad(10), roll: 0, headT: [0, 0, 0], key: 0.3, crackSpread: 0, scan: -1, jawExtra: 0,
    body: [0, 0, 0, 0.25, 0], lamp: 0.6 * fade, cables: eye, scalpel: null, hr: 72,
    eye, rimLeft: 0.6 + halo * 0.5, rimRight: 0.5, under: 0.5 + eye * 0.25, halo, fill: 0.3,
    mist: 0.45, crackGlow: eye * 0.4,
    exposure: fade, bloom: 0.8, aberration: 0, flicker: 1, motion: 0, time: 0,
  };
}

export function cueList(doctor, reduced = false, logoUrl = '') {
  const logo = logoUrl ? `<img src="${logoUrl}" alt="" width="96" height="96">` : '';
  const title = { cls: 'ci-an-title', html: `${logo}<b>CALOT<i>·</i>OS</b><small>Donde aprender medicina se vuelve tu mayor obsesión</small>` };
  if (reduced) {
    return [
      { at: 2.4, out: 5.4, ...title },
      { at: 3.3, out: 5.5, cls: 'ci-an-welcome', text: `Bienvenido, ${doctor}` },
    ];
  }
  return [
    { at: 0.5, out: 3.3, cls: 'ci-an-credit', html: 'CALOT·OS <span>presenta</span>' },
    { at: 4.0, out: 7.2, cls: 'ci-an-credit', html: 'Cirugía General <span>·</span> PUEM <span>·</span> HGR 72' },
    { at: 9.4, out: 12.6, cls: 'ci-an-credit is-big', html: 'Un sistema hecho para<br><em>salvar vidas</em>' },
    { at: 15.5, out: 18.6, cls: 'ci-an-credit is-big', html: 'Algo aprendió<br><em>a esconderse</em>' },
    { at: 6.0, out: 7.2, cls: 'ci-an-sub', html: '—No me busques.' },
    { at: 11.1, out: 12.3, cls: 'ci-an-sub', html: '—Ya te vi.' },
    { at: 13.3, out: 15.6, cls: 'ci-an-sub', html: '—Sigo aquí. Dentro de tu sistema.' },
    { at: 17.6, out: 19.0, cls: 'ci-an-sub', html: '—Este quirófano es mío.' },
    { at: 22.2, out: 24.2, cls: 'ci-an-sub is-red', html: '—Te estoy observando.' },
    { at: 24.9, out: 29.0, ...title },
    { at: 26.7, out: 29.3, cls: 'ci-an-welcome', text: `Bienvenido, ${doctor}` },
  ];
}
