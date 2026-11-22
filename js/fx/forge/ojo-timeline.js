// Guion visual de «El Ojo de CALOT» sobre los mismos tiempos, voces y textos de la intro de residentes (30 s):
// «No me busques» · «Ya te vi» · «Sigo aquí. Dentro de tu sistema» · «Este quirófano es mío» · «Te estoy observando».

import { CUE, cueList } from '../androide/android-timeline.js?v=20261122i';
import { track, bump, clamp, smooth, rng } from './forge-common.js?v=20261122i';

const rad = (d) => (d * Math.PI) / 180;

// Parpadeos de la luz (corriente inestable) más frecuentes hacia el final
const FLICKERS = (() => {
  const r = rng(1313);
  const list = [];
  let t = 4.8;
  while (t < 24.0) {
    const late = t > 15;
    list.push({ t, dur: 0.09 + r() * (late ? 0.18 : 0.12), depth: 0.3 + r() * 0.45 });
    t += (late ? 0.6 : 1.0) + r() * (late ? 0.8 : 1.4);
  }
  return list;
})();
const SPUTTER = [[0, 0], [1.85, 0], [1.97, 0.4], [2.12, 0.05], [2.4, 0.55], [2.52, 0.12], [2.95, 0.7], [3.05, 0.3], [3.5, 0.75], [4.4, 0.7]];
const LIGHTNING = [7.46, 7.64, 8.62, 9.38, 9.52, 10.44, 10.62];
const SPASMS = [19.4, 20.2, 20.75];

function flicker(t) {
  let m = 1;
  for (const e of FLICKERS) { if (e.t > t) break; m -= e.depth * bump(t, e.t, e.dur); }
  return clamp(m, 0.12, 1);
}
const strobe = (t, list, dur = 0.13) => list.reduce((v, f) => Math.max(v, bump(t, f, dur)), 0);
const heartbeat = (t) => CUE.heartbeats.reduce((h, b) => h + bump(t, b, 0.2) * 0.9 + bump(t, b + 0.26, 0.3) * 0.6, 0);
const linear = (x) => clamp(x);

function sampleFull(t) {
  const hb = heartbeat(t);
  const fl = t < 4.4 ? track(t, SPUTTER, linear) : flicker(t);
  const strike = strobe(t, LIGHTNING);
  const spasm = SPASMS.reduce((v, s) => Math.max(v, bump(t, s, 0.28)), 0);
  const doom = t >= 21.0 && t < 22.2 ? 1 : 0;

  // Cámara (dist relativa al encuadre base): lejos → empuje → huye → muy cerca de la pupila → retrocede al título
  const dist = track(t, [[0, 1.5], [3.0, 1.35], [7.2, 1.12], [11.1, 1.02], [11.35, 0.86], [15.4, 0.8], [17.6, 0.72], [21.0, 0.64], [22.2, 0.4], [24.5, 0.26], [24.9, 1.15], [30, 1.25]]);
  const cam = {
    dist,
    x: track(t, [[0, 0.35], [7.2, 0.12], [11.1, 0], [30, 0]]),
    y: track(t, [[0, -0.25], [7.2, -0.08], [11.1, 0], [30, 0]]),
    roll: rad(track(t, [[0, -4], [7.2, -1.5], [11.1, 0], [30, 0]]) + spasm * 6 * Math.sin(t * 9)),
  };

  // Diafragma: rendija al «No me busques», se abre de golpe en «Ya te vi», se esconde, se abre de par en par
  const aperture = track(t, [[0, 0], [5.9, 0], [6.1, 0.06], [7.0, 0.02], [11.05, 0.02], [11.3, 0.88], [15.3, 0.8], [15.9, 0.12], [17.5, 0.14], [17.75, 1.0], [21.0, 0.95], [21.1, 0.18], [22.15, 0.18], [22.4, 1.05], [24.6, 1.05], [24.9, 0.55], [30, 0.5]])
    + hb * 0.04 + spasm * 0.12 * Math.sin(t * 31);
  const assembled = track(t, [[0, 0], [6.7, 0], [7.0, 1]]);
  const edge = track(t, [[0, 0], [2.8, 0], [3.2, 0.45], [6.6, 0.45], [7.2, 0], [30, 0]]) + strike * 0.2;

  const glow = track(t, [[0, 0], [5.9, 0], [6.1, 0.9], [7.0, 0.5], [11.05, 0.5], [11.3, 1.0], [15.3, 0.85], [17.6, 0.75], [17.8, 1.1], [21.0, 1.1], [21.1, 0.2], [22.2, 0.2], [22.4, 1.0], [24.6, 1.0], [24.9, 0.55], [29.0, 0.6], [30, 0]]);
  const pupil = track(t, [[0, 0.24], [11.1, 0.26], [11.4, 0.11], [13.3, 0.15], [17.6, 0.2], [17.8, 0.09], [22.2, 0.3], [24.6, 0.16], [30, 0.2]]);
  const ecg = track(t, [[0, 0], [11.2, 0], [11.8, 1], [30, 1]]);
  const look = [track(t, [[11.1, 0], [13.3, 0.1], [14.6, -0.12], [15.4, 0], [30, 0]]), track(t, [[11.1, 0], [13.3, 0.03], [14.6, -0.04], [15.4, 0], [30, 0]])];

  const key = fl * track(t, [[0, 0], [1.85, 0.5], [4.4, 0.55], [11.1, 0.45], [21.0, 0.4], [21.1, 0], [22.2, 0], [22.4, 0.3], [24.6, 0.3], [24.9, 0.12], [30, 0.1]]) * (1 - doom) + strike * 1.4;
  const rim = fl * track(t, [[0, 0], [2.4, 0.35], [11.1, 0.5], [17.6, 0.8], [21.0, 0.8], [21.1, 0], [22.2, 0], [22.4, 0.6], [24.9, 0.35], [30, 0.3]]) * (1 - doom);
  const led = track(t, [[0, 0], [6.7, 0], [7.1, 0.8], [21.0, 0.9], [21.1, 0.05], [22.2, 0.05], [22.4, 1.0], [24.9, 0.5], [30, 0.4]]) * fl + hb * 0.4;
  const traces = track(t, [[0, 0], [12.9, 0], [13.6, 1], [21.0, 1], [21.1, 0], [22.2, 0], [22.6, 1.2], [24.9, 0.45], [30, 0.35]]);

  const exposure = track(t, [[0, 0], [1.8, 0], [2.2, 1]]) * track(t, [[28.8, 1], [30, 0]]) * (doom ? 0.55 : 1);
  const glitch = spasm * 1.2 + bump(t, 11.08, 0.18) * 0.8 + bump(t, 24.6, 0.25) + bump(t, 17.62, 0.15) * 0.6;
  const flash = bump(t, 24.6, 0.3) * 0.5 + bump(t, 11.1, 0.18) * 0.25 + strike * 0.04;

  return {
    cam,
    yaw: rad(track(t, [[0, 10], [7.2, 3], [11.1, 0], [30, 0]]) + spasm * 8 * Math.sin(t * 23)),
    pitch: rad(track(t, [[0, -6], [7.2, -2], [11.1, 0], [30, 0]]) + hb * 0.6),
    roll: rad(spasm * 10 * Math.sin(t * 17)),
    aperture, assembled, edge, glow, pupil, ecg, look, saccade: t > 11.3 ? 1 : 0,
    key, rim, led, traces, tracePulse: hb * 2,
    mist: track(t, [[0, 0.1], [2.4, 0.35], [21.0, 0.5], [21.1, 0.1], [22.4, 0.5], [30, 0.4]]) * fl,
    dust: track(t, [[0, 0], [2.4, 0.5], [30, 0.5]]),
    exposure, bloom: 0.85 + strike * 0.3, aberration: 0.0008 + spasm * 0.004,
    glitch, flash, flicker: fl, shake: spasm, rattle: spasm + bump(t, 11.1, 0.3),
    // Nombre 3D bajo «CALOT·OS»: los fragmentos llegan (25.3–26.6), late, se pone al rojo y falla
    name: {
      scatter: track(t, [[0, 1], [25.3, 1], [26.6, 0]], (x) => 1 - Math.pow(1 - clamp(x), 2)),
      heat: track(t, [[0, 0], [26.6, 0], [27.8, 1]]),
      glitch: bump(t, 27.9, 0.28) + bump(t, 28.5, 0.2) * 0.8 + bump(t, 29.0, 0.15) * 0.6,
      beat: bump(t, 26.7, 0.22) + bump(t, 26.96, 0.26) * 0.7,
      fade: track(t, [[0, 1], [29.2, 1], [30, 0]]),
    },
    motion: 1,
  };
}

function sampleReduced(t) {
  const fade = Math.min(smooth(t / 1.0), smooth((6 - t) / 1.0));
  return {
    cam: { dist: 1.1, x: 0, y: 0, roll: 0 }, yaw: 0, pitch: 0, roll: 0,
    aperture: 0.55, assembled: 1, edge: 0, glow: 0.75 * fade, pupil: 0.18, ecg: 1, look: [0, 0], saccade: 0,
    key: 0.35, rim: 0.4, led: 0.5, traces: 0.3, tracePulse: 0, mist: 0.3, dust: 0.3,
    exposure: fade, bloom: 0.8, aberration: 0, glitch: 0, flash: 0, flicker: 1, shake: 0, rattle: 0, motion: 0, name: { scatter: 1 },
  };
}

export function sampleOjo(t, reduced = false) {
  return reduced ? sampleReduced(t) : sampleFull(t);
}

// Mismos textos de la intro de residentes, sin «Bienvenido, …»: el nombre ya aparece en 3D bajo el título
export function cueListOjo({ doctor, reduced, logoUrl }) {
  const cues = cueList(doctor, reduced, logoUrl);
  return reduced ? cues : cues.filter((c) => !String(c.cls).includes('ci-an-welcome'));
}
