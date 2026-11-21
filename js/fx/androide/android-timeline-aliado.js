// Guion «El guardián» para la adscrita (Dra. Hernández) — 18.5 s (~5 s en movimiento reducido).
// Usa el mismo androide y la misma paleta roja que la intro de usuarios; solo cambian guion, voces y encuadre.
// Ventanas ajustadas a las duraciones reales de los 8 clips de ElevenLabs (sin pisar ni cortar voces).

export const TOTAL = 18.5;
export const REDUCED_TOTAL = 5;

export const CUE_ALLY = {
  eyesOn: 2.0,
  saludo: 2.5,
  cardsIn: 5.2,
  orden: 5.6,
  scanStart: 10.2,
  resumen: 10.7,
  scanEnd: 13.2,
  mensajes: 13.4,
  title: 16.0,
  cuando: 16.4,
};


const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const smooth = (x) => { x = clamp(x); return x * x * (3 - 2 * x); };
const lerp = (a, b, k) => a + (b - a) * k;
const rad = (d) => (d * Math.PI) / 180;

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

function sampleReduced(t) {
  const fadeIn = smooth(t / 0.9);
  const fadeOut = smooth((REDUCED_TOTAL - t) / 0.9);
  const fade = Math.min(fadeIn, fadeOut);
  const eye = track(t, [[0, 0], [0.25, 0], [1.0, 1.1], [3.6, 1.0], [5.0, 0.5]]);
  return {
    cam: { px: 0, py: 1.61, pz: 1.06, tx: 0, ty: 1.60, tz: 0, fov: 29, roll: 0 },
    yaw: 0,
    pitch: 0,
    roll: 0,
    headT: [0, 0, 0],
    body: [0, 0, 0, 0.06, 0],
    eye,
    cables: eye * 0.65,
    lamp: 0,
    scalpel: null,
    hr: 60,
    key: 0.2 * fade,
    rimLeft: 0.42 * fade,
    rimRight: 0.36 * fade,
    under: 0,
    fill: 1.4 * fade,
    halo: 0.1 * fade,
    mist: 0.14 * fade,
    crackGlow: 0.02,
    crackVoice: 0.06,
    crackSpread: 0,
    scan: -1,
    jawExtra: 0,
    squint: 0.1,
    sway: 0,
    exposure: fade * 0.95,
    bloom: 0.72,
    aberration: 0,
    flicker: 1,
    motion: 0,
    time: 0,
  };
}

// En vertical (celular) el escenario abre el campo de visión: acercamos la cámara y apagamos las lámparas
const portraitK = () => {
  try {
    const a = window.innerWidth / Math.max(1, window.innerHeight);
    return clamp((1.5 - a) / 0.9);
  } catch { return 0; }
};

function sampleFull(t) {
  const pk = portraitK();
  // Pulso estable a 60 lpm (1 Hz)
  const pulse60 = 0.5 + 0.5 * Math.sin((t - 0.25) * Math.PI * 2);

  // Cámara a la altura de los ojos, de 3/4 a frontal con dolly suave
  const cam = {
    px: track(t, [[0, 0.28], [2.0, 0.26], [5.2, 0.16], [9.8, 0.04], [13.2, 0.0], [18.5, 0.0]]),
    py: track(t, [[0, 1.61], [18.5, 1.60]]),
    pz: track(t, [[0, 1.18], [2.0, 1.15], [5.2, 1.05], [10.2, 0.98], [13.4, 0.90], [15.8, 0.89], [17.5, 1.06], [18.5, 1.10]]),
    tx: 0,
    ty: track(t, [[0, 1.59], [5.2, 1.60], [18.5, 1.60]]),
    tz: 0,
    fov: track(t, [[0, 29.5], [13.4, 28.0], [16.0, 28.5], [18.5, 29.5]]),
    roll: 0,
  };
  cam.pz *= 1 - 0.5 * pk;
  cam.px *= 1 - 0.5 * pk;

  // Se endereza de 0.25 a 0.05 rad entre 5.0 y 7.2 s
  const tilt = track(t, [[0, 0.25], [5.0, 0.25], [7.2, 0.05], [18.5, 0.05]]);
  const body = [0, 0, 0, tilt, 0];

  // Reverencia leve (+12° y vuelta) durante «Su servicio está en orden...»; reojo (-25°) en 10.2–13.2 s; frontal en 13.4–18.5 s
  const pitchDeg = track(t, [[0, 4], [5.0, 3], [6.2, 12], [7.8, 1], [13.2, 0], [16.0, 0], [18.5, 2]]);
  const yawDeg = track(t, [[0, -8], [2.2, -6], [5.2, -3], [10.0, 0], [11.3, -25], [12.7, -23], [13.6, 0], [18.5, 0]]);

  // Ojos ámbar: fade limpio de 0.6 s desde 2.0 s; tenues de guardia en el cierre
  const eye = track(t, [[0, 0], [2.0, 0], [2.6, 1.25], [15.7, 1.2], [16.4, 0.56], [17.8, 0.45], [18.5, 0]]);

  // Cables verde azulado: se iluminan suave al ritmo del pulso de 60 lpm
  const cabBase = track(t, [[0, 0], [2.0, 0], [2.8, 0.85], [15.7, 0.8], [16.4, 0.36], [17.8, 0.25], [18.5, 0]]);
  const cables = cabBase * (0.76 + 0.24 * pulse60);

  // Escaneo ámbar en la cara solo de 10.2 a 13.2 s
  const scan = t >= 10.25 && t <= 13.15 ? lerp(1.70, 1.47, (t - 10.25) / 2.9) : -1;

  // Ojos se suavizan (squint leve) al hablar de frente entre 13.2 y 16.0 s
  const squint = t >= 13.2 && t <= 16.1 ? bump(t, 13.2, 2.9) * 0.2 : 0;

  // Iluminación: penumbra cálida con contorno y relleno azul petróleo tenue
  const lit = track(t, [[0, 0], [1.9, 0], [2.8, 1], [15.7, 1], [16.5, 0.42], [17.7, 0.32], [18.5, 0]]);
  const key = lit * track(t, [[2.0, 0.16], [5.6, 0.3], [13.4, 0.34], [16.0, 0.24]]);
  const rimLeft = lit * track(t, [[2.0, 0.35], [5.6, 0.55], [16.0, 0.45]]);
  const rimRight = lit * track(t, [[2.0, 0.28], [5.6, 0.48], [16.0, 0.4]]);
  const fill = lit * 0.9;
  const under = lit * track(t, [[2.0, 0.25], [5.6, 0.45], [13.4, 0.5], [16.0, 0.3]]);
  const lamp = lit * (1 - pk) * track(t, [[2.0, 0], [3.2, 0.1], [15.7, 0.1], [16.5, 0.04]]);
  const halo = track(t, [[0, 0], [2.4, 0], [5.2, 0.08], [15.7, 0.1], [16.5, 0.14], [17.8, 0.1], [18.5, 0]]);
  const mist = lit * 0.22;

  // Exposición: negro hasta ~1.85 s, sube limpio, baja suave a negro al final
  const fadeIn = track(t, [[0, 0], [1.85, 0], [2.45, 1.05]], smooth);
  const fadeOut = track(t, [[15.8, 1], [16.6, 0.55], [17.6, 0.45], [18.5, 0]], smooth);

  return {
    cam,
    yaw: rad(yawDeg),
    pitch: rad(pitchDeg),
    roll: 0,
    headT: [0, 0, 0],
    body,
    eye,
    cables,
    lamp,
    scalpel: null,
    hr: 60,
    key,
    rimLeft,
    rimRight,
    under,
    fill,
    halo,
    mist,
    crackGlow: 0.05,
    crackVoice: 0.35,
    crackSpread: 0,
    scan,
    jawExtra: 0,
    squint,
    sway: 0.35,
    exposure: fadeIn * fadeOut,
    bloom: 0.78,
    aberration: 0.0005,
    flicker: 1,
    motion: 1,
    time: t,
  };
}

export function sampleAlly(t, reduced = false) {
  return reduced ? sampleReduced(t) : sampleFull(t);
}

export function cueListAlly({ saludo = 'Buenas noches', mensajes = 0, stats = null, reduced = false } = {}) {
  const statHtml = stats
    ? `<div class="ci-an-ads-stats">${[
        `<span><b>${stats.residentes}</b>residentes</span>`,
        stats.alertas != null ? `<span class="is-warn"><b>${stats.alertas}</b>requieren atención</span>` : '',
        `<span class="is-teal"><b>${stats.mensajes}</b>${stats.mensajes === 1 ? 'mensaje nuevo' : 'mensajes nuevos'}</span>`,
      ].filter(Boolean).join('')}</div>`
    : '';

  const titleBlock = {
    cls: 'ci-an-title is-ads',
    html: `<b>CALOT<i>·</i>OS</b><small>Panel docente</small><p class="ci-an-ads-hello">Bienvenida, <em>Dra. Hernández</em></p>${statHtml}`,
  };

  if (reduced) {
    return [
      { at: 0.8, out: 4.5, ...titleBlock },
    ];
  }

  // Versión completa: «Bienvenida,» cierra el bloque y el nombre aparece debajo en metal 3D
  titleBlock.html = `<b>CALOT<i>·</i>OS</b><small>Panel docente</small>${statHtml}<p class="ci-an-ads-hello">Bienvenida,</p>`;

  return [
    { at: 2.45, out: 5.3, cls: 'ci-an-sub', html: `—${saludo}, doctora Hernández.` },
    { at: 5.55, out: 10.35, cls: 'ci-an-sub', html: '—Su servicio está en orden. Yo vigilo mientras usted enseña.' },
    { at: 10.65, out: 13.1, cls: 'ci-an-sub', html: '—Le preparé el resumen de su grupo.' },
    {
      at: 13.35,
      out: 15.9,
      cls: 'ci-an-sub',
      html: mensajes > 0 ? '—Tiene mensajes de sus residentes.' : '—Todo en calma esta noche.',
    },
    { at: 15.95, out: 18.25, ...titleBlock },
    { at: 16.35, out: 18.1, cls: 'ci-an-sub', html: '—Cuando quiera, doctora.' },
  ];
}
