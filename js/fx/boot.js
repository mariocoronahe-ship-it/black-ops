/* ==========================================================================
   CALOT-OS · Boot Portada (4d Arranque del Sistema)
   Núcleo pulsante + terminal de arranque con métricas reales + Enter / CTA.
   ========================================================================== */

import { store, questions, todayISO, loadStoreData } from '../store.js?v=20261121q';
import { esc } from '../ui.js';
import { playUiSfx } from './audio.js?v=20261121q';
import { unlockPortalAudio } from './portal-audio.js?v=20261121q';
import { profileByCode, setPerfil, perfilId, perfil, isAdscrito, markBody } from '../perfil.js?v=20261121q';

export const BOOT_KEY = 'calot:booted';
// Sesión simulada: solo se recuerda el usuario; la contraseña nunca se guarda ni se envía.
const USER_KEY = 'calot:usuario';
export const ROLE_KEY = 'calot:rol';
const getLS = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const setLS = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

let TEMARIO_APRENDE = [];
let CATALOGO_RECURSOS = [];
let bootReady = false;
const dueLabel = (n) => `${n} ${n === 1 ? 'pendiente' : 'pendientes'}`;

/** Carga diferida de los datos que muestra el arranque; las cifras se completan al llegar. */
export function loadBootData() {
  return Promise.all([
    import('../data/temario_aprende.js?v=20261121q'),
    import('../data/catalogo_recursos.js?v=20261121q'),
    loadStoreData(),
  ]).then(([t, c]) => {
    TEMARIO_APRENDE = t.TEMARIO_APRENDE;
    CATALOGO_RECURSOS = c.CATALOGO_RECURSOS;
    bootReady = true;
  });
}

/**
 * Compute real-time boot diagnostics directly from live project datasets and
 * the user's calot:v3 store without altering any persisted structures.
 */
export function getBootMetrics() {
  const modulesCount = bootReady && Array.isArray(TEMARIO_APRENDE) ? TEMARIO_APRENDE.length : 11;

  const reviewsMap = new Map(store.all('reviews').map((r) => [r.id, r]));
  const today = todayISO();
  const dueCount = questions().filter((q) => {
    const rec = reviewsMap.get(q.id);
    return !rec || rec.due <= today;
  }).length;

  const modelsCount = bootReady && Array.isArray(CATALOGO_RECURSOS)
    ? CATALOGO_RECURSOS.filter((r) => r.type === '3d' || r.subtype === 'threejs').length
    : 13;

  const rawName = String(store.state.settings?.name || 'Residente').trim();
  const doctorLabel = /^dra?\.\s/i.test(rawName) ? rawName : `Dr. ${rawName}`;

  return { modulesCount, dueCount, modelsCount, doctorLabel };
}

/**
 * Play the subtle crimson boot arpeggio through the Web Audio engine.
 */
export function playBootSound() {
  playUiSfx('boot');
}

/**
 * Legacy compatibility helper retained for any caller expecting immediate
 * completion after boot audio feedback.
 */
export function runAiHackSequence(onComplete) {
  sessionStorage.setItem(BOOT_KEY, '1');
  playBootSound();
  onComplete?.();
}

/**
 * Render the animated crimson Calot core (pulses, radar sweep, orbit ring, ECG).
 * Shared between 4d boot portada and 4a Inicio en órbita.
 */
export function renderPulsingCoreHTML({ isOrbit = false } = {}) {
  return `
    <div class="boot-core${isOrbit ? ' is-orbit' : ''}" aria-hidden="true">
      <span class="boot-ring boot-ring-a"></span>
      <span class="boot-ring boot-ring-b"></span>
      <span class="boot-sweep"></span>
      <span class="boot-orbit"><i></i></span>
      <span class="boot-orb">
        <img src="assets/calot-hero.png?v=20261121q" alt="" width="96" height="96" decoding="async" />
        <svg class="boot-ecg" viewBox="0 0 120 32" preserveAspectRatio="none">
          <path class="boot-ecg-base" d="M0 16 H32 L40 16 L46 6 L53 26 L60 4 L67 22 L73 16 H120" />
          <path class="boot-ecg-pulse" d="M0 16 H32 L40 16 L46 6 L53 26 L60 4 L67 22 L73 16 H120" />
        </svg>
      </span>
    </div>
  `;
}

/**
 * Render the 4d system-boot portada HTML fragment.
 */
export function renderBootPortadaHTML() {
  const { modulesCount, dueCount, modelsCount, doctorLabel } = getBootMetrics();
  const dueText = bootReady ? dueLabel(dueCount) : '…';
  return `
    <section class="boot-screen is-login" aria-labelledby="boot-title">
      <div class="boot-aura" aria-hidden="true"></div>
      <div class="boot-grid" aria-hidden="true"></div>

      <div class="login-shell">
        <div class="login-hero">
          <div class="login-eye" aria-hidden="true">
            <span class="login-ring is-a"></span><span class="login-ring is-b"></span><span class="login-scan"></span>
            <img src="assets/calot-hero.png?v=20261121q" alt="" width="220" height="220" decoding="async" />
          </div>
          <h1 id="boot-title" class="login-word">CALOT<i>·</i>OS</h1>
          <p class="login-slogan">Donde aprender medicina se vuelve tu mayor obsesión</p>
          <ul class="login-status t-mono" role="status" aria-live="polite">
            <li><i></i>temario PUEM <b data-boot-val="modules">${modulesCount} módulos</b></li>
            <li><i></i>tarjetas SM-2 <b data-boot-val="due">${esc(dueText)}</b></li>
            <li><i></i>atlas 3D <b data-boot-val="models">${modelsCount} modelos</b></li>
            <li><i></i>triángulo de Calot <b class="is-accent">visión crítica OK</b></li>
          </ul>
        </div>

        <div class="login-card is-dossier" data-dossier>
          <div class="dossier-cover">
            <span class="dossier-stamp" aria-hidden="true">Confidencial</span>
            <p class="login-kicker t-mono"><span class="login-lock" aria-hidden="true"></span>Expediente · CALOT-OS</p>
            <h2 class="login-title">Acceso restringido</h2>
            <p class="login-greet">Fase de prueba privada. Solo personal autorizado.</p>
            <button type="button" class="btn btn-glow boot-enter-btn" data-dossier-open>
              <span>Abrir expediente</span><span class="boot-arrow" aria-hidden="true">→</span>
            </button>
          </div>
          <form class="boot-login dossier-form" data-boot-login autocomplete="off" novalidate>
            <p class="login-kicker t-mono"><span class="login-lock" aria-hidden="true"></span>Identificación requerida</p>
            <label class="boot-field">
              <span class="t-mono">código de acceso</span>
              <span class="login-input"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
              <input name="c" type="text" class="is-secret" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="••••••" /></span>
            </label>
            <p class="boot-login-msg t-mono" data-boot-msg aria-live="polite"></p>
            <button type="submit" class="btn btn-glow boot-enter-btn">
              <span>Entrar</span><span class="boot-arrow" aria-hidden="true">→</span>
            </button>
            <p class="login-foot t-mono">Acceso simulado · <kbd>Enter</kbd> para entrar · <kbd>Esc</kbd> para cerrar</p>
          </form>
        </div>
      </div>
    </section>
  `;
}

/**
 * Wire click + Enter-key entrance interactions on a rendered boot container.
 * Returns a cleanup callback to detach listeners and pending timers.
 */
export function wireBootPortada(container, onEnter) {
  if (!container) return () => {};
  if (!bootReady) {
    loadBootData().then(() => {
      const m = getBootMetrics();
      const set = (k, v) => { const el = container.querySelector(`[data-boot-val="${k}"]`); if (el) el.textContent = v; };
      set('modules', `${m.modulesCount} módulos`);
      set('due', dueLabel(m.dueCount));
      set('models', `${m.modelsCount} modelos`);
    }).catch(() => {});
  }
  let entered = false;
  let timerId = 0;
  // Ruta destino tras el login: se aplica justo al entrar (si se cambia antes, el router
  // desmonta la portada y cancela la entrada, y nunca corre la intro).
  let nextHash = null;
  const go = () => {
    if (nextHash && location.hash !== nextHash) location.hash = nextHash;
    onEnter?.();
  };

  const triggerEnter = () => {
    if (entered) return;
    entered = true;
    sessionStorage.setItem(BOOT_KEY, '1');
    playBootSound();

    const screen = container.querySelector('.boot-screen');
    screen?.classList.add('is-leaving');

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      go();
      return;
    }

    timerId = window.setTimeout(go, 180);
  };

  const form = container.querySelector('[data-boot-login]');
  const msg = container.querySelector('[data-boot-msg]');
  const say = (text, cls = '') => { if (msg) { msg.textContent = text; msg.className = `boot-login-msg t-mono ${cls}`; } };
  let checking = false;
  const timers = [];

  const dossier = container.querySelector('[data-dossier]');
  const openDossier = (v = true) => {
    unlockPortalAudio();
    if (!dossier) return;
    dossier.classList.toggle('is-open', v);
    if (v) setTimeout(() => form?.elements.c.focus({ preventScroll: true }), 420);
    playUiSfx('click');
  };
  const shake = () => {
    form.classList.remove('is-shake');
    void form.offsetWidth;
    form.classList.add('is-shake');
    form.elements.c.focus();
    form.elements.c.select();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    unlockPortalAudio();
    if (checking || entered || !form) return;
    const code = form.elements.c.value.trim();
    if (!code) { say('> ingresa tu código', 'is-error'); shake(); return; }
    const prof = profileByCode(code);
    if (!prof) { say('> acceso denegado', 'is-error'); shake(); return; }
    checking = true;
    const isAds = prof.role === 'adscrito';
    const changed = prof.id !== perfilId();
    setPerfil(prof.id);
    setLS(ROLE_KEY, isAds ? 'adscrito' : 'residente');
    markBody();
    if (changed) {
      try { store.reloadProfile?.(); } catch {}
    }
    if (isAds) {
      import('./intro-adscrito.js?v=20261121q').then((m) => m.prefetchAdscritoIntro?.()).catch(() => {});
    } else if (!prof.owner) {
      import('./voice.js?v=20261121q').then((m) => m.prefetchVoice?.([prof.voice || `tester-${prof.id}`, 'guia-que-es'])).catch(() => {});
    }
    form.classList.add('is-checking');
    [...form.querySelectorAll('button')].forEach((el) => { el.disabled = true; });
    playUiSfx('click');
    say('> verificando expediente…');
    timers.push(window.setTimeout(() => say(`> acceso concedido · ${prof.owner ? 'bienvenido' : 'bienvenida'}, ${prof.title}`, 'is-ok'), 420));
    timers.push(window.setTimeout(() => {
      if (isAds) nextHash = '#/adscrito';
      else if (location.hash.startsWith('#/adscrito') || !location.hash || location.hash === '#/') nextHash = '#/inicio';
      triggerEnter();
    }, 520));
  };

  const onClick = (e) => {
    if (e.target.closest('[data-dossier-open]')) { e.preventDefault(); openDossier(true); return; }
    const btn = e.target.closest('[data-boot-enter]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    triggerEnter();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape' && dossier?.classList.contains('is-open') && !checking) { openDossier(false); return; }
    if (e.key !== 'Enter' || e.defaultPrevented || e.repeat) return;
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (document.getElementById('modal')?.classList.contains('open')) return;

    const active = document.activeElement;
    if (active) {
      const tag = active.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || active.isContentEditable) return;
      if ((tag === 'BUTTON' || tag === 'A') && !active.closest('[data-boot-enter]') && active.closest('.boot-screen')) {
        return;
      }
    }

    e.preventDefault();
    if (dossier && !dossier.classList.contains('is-open')) openDossier(true);
    else if (form) form.elements.c.focus();
    else triggerEnter();
  };

  form?.addEventListener('submit', onSubmit);
  container.addEventListener('click', onClick);
  document.addEventListener('keydown', onKeyDown);

  return () => {
    window.clearTimeout(timerId);
    timers.forEach(clearTimeout);
    form?.removeEventListener('submit', onSubmit);
    container.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onKeyDown);
  };
}

/**
 * One-time boot gate for fresh sessions entering directly into a deep route
 * (e.g. #/inicio or #/aprende) so they see the 4d arranque before the shell.
 */
export function mountInitialBootGate(onEnterApp) {
  if (sessionStorage.getItem(BOOT_KEY) === '1') return;
  if (document.getElementById('boot-gate')) return;

  const gate = document.createElement('div');
  gate.id = 'boot-gate';
  gate.className = 'boot-gate';
  gate.setAttribute('role', 'dialog');
  gate.setAttribute('aria-modal', 'true');
  gate.setAttribute('aria-label', 'Arranque del sistema CALOT-OS');
  gate.innerHTML = renderBootPortadaHTML();

  document.body.appendChild(gate);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  let cleanupWire = () => {};
  let closeTimer = 0;

  const finishGate = () => {
    cleanupWire();
    gate.classList.add('is-closing');
    closeTimer = window.setTimeout(() => {
      gate.remove();
      document.body.style.overflow = prevOverflow;
      onEnterApp?.();
    }, 200);
  };

  cleanupWire = wireBootPortada(gate, finishGate);

  return () => {
    window.clearTimeout(closeTimer);
    cleanupWire();
    gate.remove();
    document.body.style.overflow = prevOverflow;
  };
}

export const INTRO_PENDING = 'calot:intro-pendiente';

/** Intro de entrada según el perfil: Dra. Hernández ve la del guardián docente; Mario la del androide; las testers, la del guía. */
export function playRoleIntro(playIntro, reduced) {
  if (isAdscrito() || document.body.dataset.rol === 'adscrito') {
    import('./intro-adscrito.js?v=20261121q')
      .then((m) => m.playAdscritoIntro({ reduced }))
      .catch(() => playIntro({ reduced, force: true }));
    return;
  }
  if (perfil().owner) { playIntro({ reduced, force: true }); return; }
  import('./intro-tester.js?v=20261121q')
    .then((m) => m.playTesterIntro({ perfil: perfil(), reduced }))
    .catch(() => playIntro({ reduced, force: true }));
}
