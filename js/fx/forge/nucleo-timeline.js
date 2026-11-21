// Guion visual del «Núcleo de obsidiana» sobre los tiempos y voces de la adscrita (18.5 s):
// saludo (2.5) · «Su servicio está en orden…» (5.6) · resumen + escaneo (10.2–13.2) · mensajes (13.4) · título (16.0).

import { track, bump, smooth } from './forge-common.js?v=20261122c';

const rad = (d) => (d * Math.PI) / 180;

function sampleFull(t) {
  const cam = {
    dist: track(t, [[0, 1.35], [2.0, 1.3], [5.2, 1.08], [10.2, 0.98], [13.4, 0.9], [15.9, 0.92], [17.4, 1.1], [18.5, 1.15]]),
    yaw: rad(track(t, [[0, 22], [5.2, 10], [10.2, 0], [13.4, -6], [18.5, -10]])),
    lift: track(t, [[0, 0.5], [5.2, 0.25], [13.4, 0.1], [18.5, 0.1]]),
    roll: rad(track(t, [[0, -3], [5.2, 0], [18.5, 0]])),
    // Al llegar el título el núcleo colapsa a un punto de luz (ver «collapse»)
    aim: 0,
  };
  const assemble = track(t, [[0, 0], [2.3, 0], [5.0, 1.9]], (x) => Math.min(1, x));
  const spark = track(t, [[0, 0], [1.75, 0], [2.05, 1], [2.6, 0.5], [3.3, 0]]) + bump(t, 16.35, 0.5) * 0.9;
  const collapse = track(t, [[0, 0], [15.85, 0], [16.4, 1]], (x) => x * x);
  const heat = track(t, [[0, 0], [1.9, 0], [2.3, 0.7], [5.0, 1.0], [15.8, 1.0], [16.8, 0.55], [18.5, 0]])
    + bump(t, 5.0, 0.6) * 0.8
    + [5.7, 6.06, 6.42, 6.78, 7.14, 7.5, 7.86, 8.22, 8.58, 8.94, 9.3].reduce((v, a) => v + bump(t, a + 0.75, 0.35) * 0.25, 0);
  const seams = track(t, [[0, 0], [3.0, 0], [5.0, 1], [15.8, 1], [16.8, 0.5], [18.5, 0]]);
  const open = track(t, [[0, 0], [13.4, 0], [14.2, 0.08], [15.8, 0.08], [17.4, 0.32], [18.5, 0.4]]);
  const scan = t >= 10.2 && t <= 13.2 ? (t - 10.2) / 3.0 : -1;
  const lit = track(t, [[0, 0], [1.9, 0], [3.0, 1], [15.8, 1], [17.0, 0.45], [18.5, 0]]);
  const exposure = track(t, [[0, 0], [1.6, 0], [2.1, 1]]) * track(t, [[17.6, 1], [18.5, 0]]);
  return {
    cam,
    assemble, spark, heat, seams, open, collapse,
    edgeHeat: bump(t, 5.0, 0.8) + (scan >= 0 ? 0.05 : 0),
    spinKick: track(t, [[0, 0], [2.3, 0], [5.2, 1.2]]),
    rays: 1, scan,
    key: lit * 0.55, rim: lit * 0.7, low: lit * 0.45,
    mist: lit * 0.4, dust: lit * 0.5,
    exposure, bloom: 0.9, aberration: 0.0006,
    glitch: bump(t, 2.05, 0.18) * 0.6 + bump(t, 15.92, 0.2) * 0.6, flash: bump(t, 5.0, 0.3) * 0.12,
    // «Dra. Hernández» en 3D bajo el título: llega (16.1–17.0), se pone al rojo y falla
    name: {
      scatter: track(t, [[0, 1], [16.1, 1], [17.0, 0]], (x) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 2)),
      heat: track(t, [[0, 0], [16.9, 0], [17.7, 1]]),
      glitch: bump(t, 17.75, 0.22) + bump(t, 18.1, 0.16) * 0.7,
      beat: bump(t, 17.05, 0.22),
      fade: 1,
    },
    motion: 1,
  };
}

function sampleReduced(t) {
  const fade = Math.min(smooth(t / 0.9), smooth((5 - t) / 0.9));
  return {
    cam: { dist: 1.15, yaw: rad(8), lift: 0.2, roll: 0, aim: -0.4 },
    assemble: 2, spark: 0, heat: 0.8, seams: 0.8, open: 0.05, edgeHeat: 0, spinKick: 0,
    rays: 0, scan: -1, key: 0.5, rim: 0.6, low: 0.4, mist: 0.3, dust: 0.3,
    exposure: fade, bloom: 0.85, aberration: 0, glitch: 0, flash: 0, motion: 0, name: { scatter: 1 },
  };
}

export function sampleNucleo(t, reduced = false) {
  return reduced ? sampleReduced(t) : sampleFull(t);
}
