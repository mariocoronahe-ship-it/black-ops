// Portales cinematográficos (11.2 s): módulos Juegos · Recursos · Progreso y sus subsecciones.
// Secuencia: emblema que se dibuja en la oscuridad → boom y zoom a través del emblema →
// título que cae letra por letra → cuenta regresiva gigante → estallido y apertura.

import { getEngine, isPortalAudioMuted } from './portal-audio.js?v=20261121q';
import { sceneFor, drawWaves } from './scenes.js?v=20261121q';
import { startSceneScore } from './scene-audio.js?v=20261121q';
import { warmSfx } from './sfx-bank.js?v=20261121q';
import { voiceForScene } from './voice.js?v=20261121q';

export const PORTAL_MODULES = new Set(['juegos', 'recursos', 'stats', 'resumenes', 'repasa', 'hgr72']);

const TOTAL = 11.2;
const ECHO_TOTAL = 1.8;
const SEEN_KEY = 'calot:subportal-seen';

let overlayEl = null;
let activeTl = null;
let failsafeTimer = null;
let escHandler = null;
let activeRootEl = null;
let activeAudio = null;
let fxRafId = 0;
let fxResizeHandler = null;
let queuedSubPortal = null;

// Desbloquea y decodifica el audio con el primer toque, para que la primera intro ya suene completa.
if (typeof document !== 'undefined') {
  const unlock = () => {
    const eng = getEngine();
    if (eng) warmSfx(eng.ctx);
  };
  document.addEventListener('pointerdown', unlock, { once: true, capture: true });
  document.addEventListener('keydown', unlock, { once: true, capture: true });
}

function ensureOverlay() {
  if (overlayEl && overlayEl.isConnected) return overlayEl;
  const existing = document.getElementById('module-portal');
  if (existing) {
    overlayEl = existing;
    return overlayEl;
  }
  const el = document.createElement('div');
  el.id = 'module-portal';
  el.className = 'module-portal';
  el.setAttribute('aria-hidden', 'true');
  document.body.appendChild(el);
  overlayEl = el;
  return el;
}

function forceRevealWing(rootEl) {
  if (!rootEl) return;
  // Protección: si una transición previa dejó la vista en opacidad 0, la restablece.
  const view = rootEl.closest?.('#view');
  if (view && getComputedStyle(view).opacity === '0') {
    window.gsap?.killTweensOf(view);
    view.style.opacity = '1';
  }
  rootEl.querySelectorAll('[data-wing-enter]').forEach((node) => {
    node.style.opacity = '';
    node.style.transform = '';
    if (window.gsap) {
      window.gsap.killTweensOf(node);
      window.gsap.set(node, { clearProps: 'transform,opacity' });
    }
  });
}

function stopCanvasFx() {
  if (fxRafId) {
    cancelAnimationFrame(fxRafId);
    fxRafId = 0;
  }
  if (fxResizeHandler) {
    window.removeEventListener('resize', fxResizeHandler);
    fxResizeHandler = null;
  }
}

function cleanupPortal(immediate = false) {
  if (failsafeTimer) {
    clearTimeout(failsafeTimer);
    failsafeTimer = null;
  }
  if (escHandler) {
    document.removeEventListener('keydown', escHandler);
    escHandler = null;
  }
  if (activeTl) {
    activeTl.kill();
    activeTl = null;
  }
  if (activeAudio) {
    activeAudio.stop();
    activeAudio = null;
  }
  stopCanvasFx();

  if (overlayEl) {
    if (window.gsap) window.gsap.killTweensOf(overlayEl.querySelectorAll('*'));
    overlayEl.classList.remove('is-active');
    overlayEl.setAttribute('aria-hidden', 'true');
    overlayEl.removeAttribute('data-portal');
    overlayEl.removeAttribute('data-scene');
    overlayEl.removeAttribute('data-opening');
    overlayEl.style.removeProperty('--crimson');
    overlayEl.style.removeProperty('--crimson-rgb');
    overlayEl.style.removeProperty('--rgb');
    if (immediate) {
      overlayEl.style.opacity = '0';
      overlayEl.innerHTML = '';
    }
  }
  if (immediate && activeRootEl) forceRevealWing(activeRootEl);
}

export function playWingEntrance(rootEl, moduleKey, { delay = 0, reduced = false } = {}) {
  if (!rootEl || !PORTAL_MODULES.has(moduleKey)) return;
  const view = rootEl.closest?.('#view');
  if (view && getComputedStyle(view).opacity === '0') {
    window.gsap?.killTweensOf(view);
    view.style.opacity = '1';
  }
  const items = rootEl.querySelectorAll('[data-wing-enter]');
  if (!items.length) return;
  const g = window.gsap;
  if (reduced || !g) {
    forceRevealWing(rootEl);
    return;
  }
  g.killTweensOf(items);
  g.fromTo(
    items,
    { opacity: 0, y: 24, scale: 0.985 },
    { opacity: 1, y: 0, scale: 1, duration: 0.56, delay, stagger: 0.06, ease: 'power3.out', clearProps: 'transform,opacity' }
  );
}

// ---------- Registro de vistas de la sesión ----------

function readSeen() {
  try {
    return new Set(JSON.parse(sessionStorage.getItem(SEEN_KEY) || '[]'));
  } catch {
    return new Set();
  }
}

function markSeen(key) {
  try {
    const s = readSeen();
    s.add(key);
    sessionStorage.setItem(SEEN_KEY, JSON.stringify([...s]));
  } catch {}
}

export function hasSubPortal(key) {
  return Boolean(sceneFor(key));
}

// Para vistas que se re-renderizan: se encola antes del rerender y se consume en mount.
export function queueSubPortal(key) {
  queuedSubPortal = hasSubPortal(key) ? key : null;
}

export function consumeQueuedSubPortal() {
  const k = queuedSubPortal;
  queuedSubPortal = null;
  return k;
}

// ---------- Canvas ----------

function startSceneFx(canvas, scene, st, getT) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let width = 0;
  let height = 0;
  const resize = () => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  fxResizeHandler = resize;
  window.addEventListener('resize', fxResizeHandler);
  Object.assign(st, scene.render.init(width, height) || {});

  let last = null;
  const loop = (now) => {
    if (last === null) last = now;
    const dt = Math.max(0.001, Math.min(0.05, (now - last) / 1000));
    last = now;
    ctx.clearRect(0, 0, width, height);
    try {
      drawWaves(ctx, width, height, dt, st, scene.rgb);
      scene.render.draw(ctx, width, height, getT(), dt, st, scene.rgb);
    } catch {}
    fxRafId = requestAnimationFrame(loop);
  };
  fxRafId = requestAnimationFrame(loop);
}

// ---------- Plantilla ----------

function openingHtml(kind) {
  switch (kind) {
    case 'doors':
    case 'incision':
      return '<div class="mp-door mp-door-l"></div><div class="mp-door mp-door-r"></div><div class="mp-seam"></div>';
    case 'shutters':
      return '<div class="mp-shutter mp-shutter-t"></div><div class="mp-shutter mp-shutter-b"></div><div class="mp-grid"></div>';
    case 'iris':
      return '<div class="mp-iris"></div>';
    default:
      return '<div class="mp-monitor"></div><div class="mp-grid"></div>';
  }
}

function sceneTemplate(scene, mode) {
  const c = scene.copy;
  const muted = isPortalAudioMuted();
  return `
    ${openingHtml(scene.opening)}
    <div class="mp-stage">
      <canvas class="mp-fx-canvas" role="presentation"></canvas>
      <div class="mp-shockwave-ring" aria-hidden="true"></div>
      <div class="mp-center mp-scene-center">
        <div class="mp-emblem mp-scene-emblem" aria-hidden="true">${scene.emblem}</div>
        <div class="mp-head-tags"><p class="mono mp-badge">${c.badge}</p></div>
        <h2 class="mp-title">${c.titleHtml}</h2>
        <div class="mp-pills">${c.pills.map((p) => `<span class="mp-pill">${p}</span>`).join('')}</div>
        <div class="mp-log" aria-live="off">
          ${c.logs.map((l, i) => `<div class="mono mp-log-line" data-log-i="${i}">${l}</div>`).join('')}
        </div>
      </div>
      <div class="mp-bigcount" aria-hidden="true"></div>
    </div>
    <div class="mp-blackout" aria-hidden="true"></div>
    <div class="mp-intro-emblem" aria-hidden="true">${scene.emblem}</div>
    <div class="mp-flash" aria-hidden="true"></div>
    <div class="mp-flash-white" aria-hidden="true"></div>
    <div class="mp-footer"${mode === 'echo' ? ' hidden' : ''}>
      <div class="mp-prog-wrap">
        <div class="mp-progress-track"><span class="mp-progress-fill"></span></div>
        <span class="mono mp-timer">00.0s / ${TOTAL.toFixed(1)}s</span>
      </div>
      <div class="mp-controls">
        <button type="button" class="mono mp-ctrl-btn" data-portal-mute aria-pressed="${muted ? 'true' : 'false'}">
          ${muted ? '🔇 SONIDO: OFF' : '🔊 SONIDO: ON'}
        </button>
        <button type="button" class="mono mp-ctrl-btn is-skip" data-portal-skip>SALTAR INTRO · ESC →</button>
      </div>
    </div>`;
}

// Envuelve cada letra del título en un span para animarlas por separado.
function splitChars(root) {
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        [...child.textContent].forEach((ch) => {
          const span = document.createElement('span');
          span.className = ch === ' ' ? 'mp-ch is-space' : 'mp-ch';
          span.textContent = ch === ' ' ? ' ' : ch;
          frag.appendChild(span);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1) {
        walk(child);
      }
    });
  };
  walk(root);
  return root.querySelectorAll('.mp-ch');
}

// Prepara los trazos del emblema para dibujarlos (stroke-dashoffset).
function prepStroke(svgRoot) {
  const shapes = svgRoot ? svgRoot.querySelectorAll('path, circle, rect, ellipse, line, polyline') : [];
  shapes.forEach((s) => {
    let len = 300;
    try { len = Math.ceil(s.getTotalLength()) || 300; } catch {}
    s.style.strokeDasharray = `${len}`;
    s.style.strokeDashoffset = `${len}`;
    if (s.getAttribute('fill') && s.getAttribute('fill') !== 'none') s.style.fillOpacity = '0';
  });
  return shapes;
}

function addOpening(tl, el, kind, at, dur) {
  const q = (s) => el.querySelector(s);
  if (kind === 'doors' || kind === 'incision') {
    tl.to(q('.mp-seam'), { opacity: 0, duration: 0.2 }, at)
      .to(q('.mp-door-l'), { xPercent: -105, duration: dur, ease: 'expo.inOut' }, at)
      .to(q('.mp-door-r'), { xPercent: 105, duration: dur, ease: 'expo.inOut' }, at);
  } else if (kind === 'shutters') {
    tl.to(q('.mp-grid'), { opacity: 0, duration: 0.2 }, at)
      .to(q('.mp-shutter-t'), { yPercent: -105, duration: dur, ease: 'expo.inOut' }, at)
      .to(q('.mp-shutter-b'), { yPercent: 105, duration: dur, ease: 'expo.inOut' }, at);
  } else if (kind === 'iris') {
    tl.fromTo(q('.mp-iris'), { '--iris': '0%' }, { '--iris': '150%', duration: dur, ease: 'expo.inOut' }, at);
  } else {
    tl.to(q('.mp-grid'), { opacity: 0, duration: 0.2 }, at)
      .to(q('.mp-monitor'), { yPercent: -105, duration: dur, ease: 'expo.inOut' }, at);
  }
}

// ---------- Motor de la cinemática ----------

function runScene(key, { rootEl, mode, reduced = false }) {
  const scene = sceneFor(key);
  if (!scene) return false;
  const g = window.gsap;
  const motionOff = reduced || !g || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (motionOff || document.querySelector('.boot-gate, .calot-intro')) {
    cleanupPortal(true);
    forceRevealWing(rootEl);
    return false;
  }

  cleanupPortal(true);
  activeRootEl = rootEl || null;
  const el = ensureOverlay();
  el.dataset.portal = scene.wing;
  el.dataset.scene = key;
  el.dataset.opening = scene.opening;
  el.style.setProperty('--crimson-rgb', scene.rgb);
  el.style.setProperty('--crimson', `rgb(${scene.rgb})`);
  el.style.setProperty('--rgb', '0');
  el.innerHTML = sceneTemplate(scene, mode);
  el.classList.add('is-active');
  el.setAttribute('aria-hidden', 'false');
  el.style.opacity = '1';

  // En los módulos, las tarjetas del ala esperan ocultas hasta la apertura.
  const wingItems = scene.module && rootEl ? rootEl.querySelectorAll('[data-wing-enter]') : [];
  if (wingItems.length) g.set(wingItems, { opacity: 0, y: 24, scale: 0.985 });

  activeAudio = startSceneScore(key, { mode });

  const fxState = { boost: 0, waves: [] };
  const $ = (s) => el.querySelector(s);
  const stage = $('.mp-stage');
  const fxCanvas = $('.mp-fx-canvas');
  const blackout = $('.mp-blackout');
  const introEmblem = $('.mp-intro-emblem');
  const flashEl = $('.mp-flash');
  const flashWhite = $('.mp-flash-white');
  const center = $('.mp-center');
  const footer = $('.mp-footer');
  const emblem = $('.mp-scene-emblem');
  const badge = $('.mp-badge');
  const titleEl = $('.mp-title');
  const pills = el.querySelectorAll('.mp-pill');
  const logs = el.querySelectorAll('.mp-log-line');
  const bigCount = $('.mp-bigcount');
  const progFill = $('.mp-progress-fill');
  const timerEl = $('.mp-timer');
  const shockRing = $('.mp-shockwave-ring');
  const chars = splitChars(titleEl);
  const c = scene.copy;

  // Golpe de cámara: sacudida, destello, anillo de choque y separación RGB.
  const impact = (power = 1, white = false) => {
    fxState.waves.push({ r: 14, a: 0.96, lw: 2 + power * 2 });
    g.fromTo(white ? flashWhite : flashEl, { opacity: 0.25 + power * 0.35 }, { opacity: 0, duration: 0.25 + power * 0.25, ease: 'power2.out' });
    g.fromTo(shockRing, { scale: 0.3, opacity: 0.9 }, { scale: 2.6 + power, opacity: 0, duration: 0.8, ease: 'expo.out' });
    g.fromTo(el, { '--rgb': 6 + power * 10 }, { '--rgb': 0, duration: 0.5, ease: 'power3.out' });
    const amp = 6 + power * 10;
    g.timeline()
      .to(stage, { x: amp, y: -amp * 0.6, rotation: power * 0.6, duration: 0.04 })
      .to(stage, { x: -amp * 0.8, y: amp * 0.5, rotation: -power * 0.5, duration: 0.05 })
      .to(stage, { x: amp * 0.4, y: -amp * 0.3, rotation: 0, duration: 0.05 })
      .to(stage, { x: 0, y: 0, duration: 0.1, ease: 'power2.out' });
  };
  // Palabra gigante que cae desde la cámara.
  const slamWord = (txt, power = 1) => {
    bigCount.textContent = txt;
    g.killTweensOf(bigCount);
    g.fromTo(bigCount, { scale: 3.4, opacity: 0, filter: 'blur(14px)' }, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.32, ease: 'expo.in' });
    g.to(bigCount, { scale: 0.92, opacity: 0, duration: 0.4, delay: 0.55, ease: 'power2.in' });
    g.fromTo(stage, { scale: 1.07 }, { scale: 1, duration: 0.5, delay: 0.3, ease: 'power3.out' });
    g.delayedCall(0.3, () => impact(power, power > 1.3));
  };

  const finish = () => {
    // Deja sonar la cola del último impacto antes de cortar el audio.
    const audio = activeAudio;
    activeAudio = null;
    if (audio) setTimeout(() => audio.stop(), 1600);
    cleanupPortal(false);
    if (overlayEl) {
      overlayEl.style.opacity = '0';
      overlayEl.innerHTML = '';
    }
  };
  const skip = () => {
    cleanupPortal(true);
    if (scene.module) playWingEntrance(rootEl, scene.wing, { delay: 0.03 });
  };
  $('[data-portal-skip]')?.addEventListener('click', (e) => { e.stopPropagation(); skip(); });
  const muteBtn = $('[data-portal-mute]');
  muteBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const next = !isPortalAudioMuted();
    activeAudio?.setMuted(next);
    muteBtn.setAttribute('aria-pressed', next ? 'true' : 'false');
    muteBtn.textContent = next ? '🔇 SONIDO: OFF' : '🔊 SONIDO: ON';
  });
  escHandler = (e) => { if (e.key === 'Escape') skip(); };
  document.addEventListener('keydown', escHandler);

  const total = mode === 'echo' ? ECHO_TOTAL : TOTAL;
  failsafeTimer = setTimeout(() => cleanupPortal(true), (total + 2) * 1000);

  const tl = g.timeline({
    onUpdate: () => {
      if (timerEl) timerEl.textContent = `${Math.min(TOTAL, tl.time()).toFixed(1).padStart(4, '0')}s / ${TOTAL.toFixed(1)}s`;
    },
    onComplete: finish,
  });
  activeTl = tl;

  // El canvas sigue el reloj de la línea de tiempo; el eco arranca en el clímax (t≈7.2).
  startSceneFx(fxCanvas, scene, fxState, () => (mode === 'echo' ? 7.2 + tl.time() * 1.2 : tl.time()));

  const scatterChars = (at) => {
    tl.to(chars, {
      x: () => (Math.random() - 0.5) * window.innerWidth * 1.2,
      y: () => (Math.random() - 0.5) * window.innerHeight * 1.1,
      rotation: () => (Math.random() - 0.5) * 540,
      scale: () => 0.4 + Math.random() * 2.2,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.in',
      stagger: { each: 0.008, from: 'center' },
    }, at);
  };

  if (mode === 'echo') {
    fxState.boost = 1.2;
    g.set([blackout, introEmblem], { opacity: 0 });
    g.set([logs, pills, footer], { opacity: 0 });
    tl.fromTo(fxCanvas, { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0)
      .fromTo(center, { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0)
      .fromTo(emblem, { scale: 0.4, rotation: -60, transformOrigin: '50% 50%' }, { scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(2)' }, 0)
      .fromTo(chars, { opacity: 0, scale: 3, y: -30 }, { opacity: 1, scale: 1, y: 0, duration: 0.22, stagger: 0.018, ease: 'expo.in' }, 0)
      .add(() => impact(1.2, true), 0.04)
      .add(() => slamWord(c.countdowns[3], 1.1), 0.4);
    scatterChars(1.0);
    tl.to([emblem, badge, fxCanvas], { opacity: 0, duration: 0.25, ease: 'power2.in' }, 1.02);
    addOpening(tl, el, scene.opening, 1.05, 0.6);
    if (scene.module) tl.add(() => playWingEntrance(rootEl, scene.wing, { delay: 0.05 }), 1.1);
    tl.to(el, { opacity: 0, duration: 0.15 }, 1.65);
    return true;
  }

  // ---------- Versión completa (11.2 s) ----------
  if (progFill) tl.fromTo(progFill, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 10.8, ease: 'none' }, 0);
  g.set(center, { opacity: 0 });
  g.set(fxCanvas, { opacity: 0 });
  g.set(blackout, { opacity: 1 });
  g.set(chars, { opacity: 0 });
  g.set(pills, { opacity: 0 });
  g.set(footer, { opacity: 0 });
  const strokes = prepStroke(introEmblem.querySelector('svg'));

  // PRÓLOGO (0 → 1.65 s): el emblema se dibuja solo en la oscuridad y parpadea.
  tl.to(footer, { opacity: 1, duration: 0.4 }, 0.2)
    .fromTo(introEmblem, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }, 0.05)
    .to(strokes, { strokeDashoffset: 0, duration: 1.2, stagger: 0.06, ease: 'power2.inOut' }, 0.1)
    .to(strokes, { fillOpacity: 1, duration: 0.3 }, 1.1)
    .to(introEmblem, { opacity: 0.35, duration: 0.05, repeat: 3, yoyo: true }, 1.25)
    .to(introEmblem, { scale: 1.12, duration: 0.25, ease: 'power2.in' }, 1.4);

  // BOOM (1.65 s): zoom a través del emblema y se revela el mundo de la escena.
  tl.add(() => impact(1.6, true), 1.65)
    .to(introEmblem, { scale: 14, opacity: 0, filter: 'blur(12px)', duration: 0.6, ease: 'expo.in' }, 1.65)
    .to(blackout, { opacity: 0, duration: 0.35, ease: 'power2.out' }, 1.7)
    .fromTo(fxCanvas, { opacity: 0, scale: 1.25 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'expo.out' }, 1.68)
    .add(() => { fxState.boost = 0.35; }, 1.7);

  // ACTO I (2.4 s): emblema, insignia y título que cae letra por letra.
  tl.set(center, { opacity: 1 }, 2.4)
    .fromTo(emblem, { scale: 0, rotation: -120, transformOrigin: '50% 50%' }, { scale: 1, rotation: 0, duration: 0.7, ease: 'back.out(2.2)' }, 2.4)
    .to(emblem, { y: -6, duration: 1.2, yoyo: true, repeat: 5, ease: 'sine.inOut' }, 3.2)
    .fromTo(badge, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.5, ease: 'power3.inOut' }, 2.5)
    .fromTo(chars, { opacity: 0, scale: 3.2, y: -40, rotationX: -80, filter: 'blur(8px)' }, {
      opacity: 1, scale: 1, y: 0, rotationX: 0, filter: 'blur(0px)', duration: 0.32, stagger: 0.045, ease: 'expo.in',
    }, 2.55)
    .add(() => impact(0.6), Math.min(3.4, 2.55 + chars.length * 0.045 + 0.2))
    .fromTo(logs[0], { x: -14, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3 }, 3.0);

  // ACTO II (3.4 s): las píldoras caen como tarjetas, una por golpe.
  pills.forEach((p, i) => {
    tl.fromTo(p, { opacity: 0, y: -60, rotation: (i % 2 ? 1 : -1) * 18, scale: 1.4 }, {
      opacity: 1, y: 0, rotation: 0, scale: 1, duration: 0.42, ease: 'bounce.out',
    }, 3.4 + i * 0.8)
      .add(() => {
        p.classList.add('is-lit');
        fxState.waves.push({ r: 14, a: 0.7, lw: 1.8 });
      }, 3.55 + i * 0.8);
  });
  tl.fromTo(logs[1], { x: -14, opacity: 0 }, { x: 0, opacity: 1, duration: 0.32 }, 4.4)
    .add(() => { fxState.boost = 0.6; }, 4.6);

  // ACTO III (6.75 s): cuenta regresiva gigante con golpe de cámara.
  tl.add(() => { fxState.boost = 1; slamWord(c.countdowns[0], 0.8); }, 6.45)
    .fromTo(logs[2], { x: -14, opacity: 0 }, { x: 0, opacity: 1, duration: 0.32 }, 6.85)
    .add(() => slamWord(c.countdowns[1], 1), 7.35)
    .add(() => slamWord(c.countdowns[2], 1.2), 8.25)
    .to(center, { scale: 0.94, duration: 1.2, ease: 'power1.in' }, 8.3)
    .add(() => { fxState.boost = 1.7; slamWord(c.countdowns[3], 1.6); }, 8.8);

  // ACTO IV (9.5 s): el título estalla en pedazos y se abre la puerta.
  tl.add(() => impact(2, true), 9.5);
  scatterChars(9.5);
  tl.to([emblem, badge, pills, logs], { opacity: 0, scale: 1.3, duration: 0.3, ease: 'power2.in' }, 9.5)
    .to([fxCanvas, footer], { opacity: 0, duration: 0.5, ease: 'power2.in' }, 9.9);
  addOpening(tl, el, scene.opening, 9.75, 1.2);
  if (scene.module) tl.add(() => playWingEntrance(rootEl, scene.wing, { delay: 0.12 }), 9.85);
  tl.to(el, { opacity: 0, duration: 0.25 }, 10.95);
  return true;
}

// ---------- API pública ----------

// Portal del módulo: siempre la versión completa al entrar (como antes).
// Sección: completa la primera vez en la sesión; eco de 1.8 s al regresar (el botón «Intro» fuerza la completa).
export function playModulePortal(moduleKey, { rootEl, reduced = false, force = false } = {}) {
  if (!PORTAL_MODULES.has(moduleKey)) {
    cleanupPortal(true);
    return;
  }
  const key = `modulo:${moduleKey}`;
  const mode = !force && readSeen().has(key) ? 'echo' : 'full';
  if (runScene(key, { rootEl, mode, reduced })) {
    markSeen(key);
    if (mode === 'full') voiceForScene(key);
  }
}

// Subsección: completa la primera vez en la sesión; eco de 1.8 s al regresar.
export function playSubPortal(key, { rootEl, reduced = false, force = false } = {}) {
  if (!hasSubPortal(key)) return false;
  const mode = !force && readSeen().has(key) ? 'echo' : 'full';
  const ok = runScene(key, { rootEl, mode, reduced });
  if (ok) {
    markSeen(key);
    if (mode === 'full') voiceForScene(key);
  }
  return ok;
}
