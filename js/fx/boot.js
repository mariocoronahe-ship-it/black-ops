/* ==========================================================================
   CALOT-OS · Black Ops Boot Portada (Selector de Tarjetas R2 + Acceso Docente)
   Al abrir el enlace salen todos los R2 en tarjetas: cada quien toca la suya
   y entra directo a navegar por CALOT-OS mientras la Dra. Hernández activa el examen.
   ========================================================================== */

import { store, questions, todayISO, loadStoreData } from '../store.js?v=20261122c';
import { esc } from '../ui.js';
import { playUiSfx } from './audio.js?v=20261122c';
import { unlockPortalAudio } from './portal-audio.js?v=20261122c';
import { R2_RESIDENTS, profileByCode, setPerfil, isAdscrito, markBody, doctorTitle } from '../perfil.js?v=20261122c';

export const BOOT_KEY = 'blackops:booted:v4';
export const ROLE_KEY = 'calot:rol';
export const INTRO_PENDING = 'calot:intro-pendiente';
const setLS = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

let TEMARIO_APRENDE = [];
let CATALOGO_RECURSOS = [];
let bootReady = false;
const dueLabel = (n) => `${n} ${n === 1 ? 'pendiente' : 'pendientes'}`;

export function loadBootData() {
  return Promise.all([
    import('../data/temario_aprende.js?v=20261122c'),
    import('../data/catalogo_recursos.js?v=20261122c'),
    loadStoreData(),
  ]).then(([t, c]) => {
    TEMARIO_APRENDE = t.TEMARIO_APRENDE;
    CATALOGO_RECURSOS = c.CATALOGO_RECURSOS;
    bootReady = true;
  });
}

export function getBootMetrics() {
  const modulesCount = bootReady && Array.isArray(TEMARIO_APRENDE) ? TEMARIO_APRENDE.length : 30;
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
  const doctorLabel = doctorTitle(rawName);
  return { modulesCount, dueCount, modelsCount, doctorLabel };
}

export function playBootSound() {
  playUiSfx('boot');
}

export function runAiHackSequence(onComplete) {
  sessionStorage.setItem(BOOT_KEY, '1');
  playBootSound();
  onComplete?.();
}

export function renderPulsingCoreHTML({ isOrbit = false } = {}) {
  return `
    <div class="boot-core${isOrbit ? ' is-orbit' : ''}" aria-hidden="true">
      <span class="boot-ring boot-ring-a"></span>
      <span class="boot-ring boot-ring-b"></span>
      <span class="boot-sweep"></span>
      <span class="boot-orbit"><i></i></span>
      <span class="boot-orb">
        <img src="assets/calot-hero.png?v=20261122c" alt="" width="96" height="96" decoding="async" />
        <svg class="boot-ecg" viewBox="0 0 120 32" preserveAspectRatio="none">
          <path class="boot-ecg-base" d="M0 16 H32 L40 16 L46 6 L53 26 L60 4 L67 22 L73 16 H120" />
          <path class="boot-ecg-pulse" d="M0 16 H32 L40 16 L46 6 L53 26 L60 4 L67 22 L73 16 H120" />
        </svg>
      </span>
    </div>
  `;
}

export function renderBootPortadaHTML({ showDocente = false } = {}) {
  const { modulesCount, modelsCount } = getBootMetrics();
  return `
    <section class="boot-screen is-login is-r2-roster" aria-labelledby="boot-title">
      <div class="boot-aura" aria-hidden="true"></div>
      <div class="boot-grid" aria-hidden="true"></div>

      <div class="r2-roster-shell">
        <header class="r2-roster-head">
          <div class="r2-roster-brand">
            <div class="login-eye is-compact" aria-hidden="true">
              <span class="login-ring is-a"></span><span class="login-ring is-b"></span><span class="login-scan"></span>
              <img src="assets/calot-hero.png?v=20261122c" alt="" width="88" height="88" decoding="async" />
            </div>
            <div>
              <p class="login-kicker t-mono"><span class="login-lock" aria-hidden="true"></span>HGR 72 · CIRUGÍA GENERAL · GENERACIÓN R2</p>
              <h1 id="boot-title" class="login-word">CALOT<i>·</i>OS</h1>
              <p class="login-slogan">Selecciona tu tarjeta para entrar al sistema · ${modulesCount} módulos PUEM · ${modelsCount} modelos 3D</p>
            </div>
          </div>

          ${showDocente ? `
          <div class="r2-docente-box">
            <span class="t-mono" style="font-size:10.5px;letter-spacing:0.12em;color:#ff6b81">ACCESO DOCENTE</span>
            <form class="r2-docente-form" data-boot-login autocomplete="off" novalidate>
              <input name="c" type="password" class="input is-sm t-mono" placeholder="Código CALOT" aria-label="Código docente" autocomplete="off" autocapitalize="off" />
              <button type="submit" class="btn btn-sm btn-glow">Panel Control →</button>
            </form>
            <p class="boot-login-msg t-mono" data-boot-msg aria-live="polite"></p>
          </div>` : `
          <div class="r2-only-pill t-mono" aria-hidden="true"><i></i>ACCESO EXCLUSIVO · RESIDENTES R2</div>`}
        </header>

        <div class="r2-roster-status t-mono" data-r2-status aria-live="polite"><i aria-hidden="true"></i><span>ESCÁNER LISTO · TOCA TU PLACA</span></div>

        <div class="r2-cards-grid" role="list" aria-label="Residentes de Segundo Año (R2)">
          ${R2_RESIDENTS.map((r, i) => `
            <button type="button" class="r2-card" role="listitem" data-r2-pick="${esc(r.id)}" style="--i:${i}" aria-label="${esc(r.name)} · ${esc(r.tema)}">
              <span class="r2-plate-scan" aria-hidden="true"></span>
              <span class="r2-plate-head t-mono" aria-hidden="true"><span>EXP · R2-${String(i + 1).padStart(2, '0')}</span><i class="r2-plate-led"></i></span>
              <span class="r2-card-avatar" aria-hidden="true" data-ini="${esc(r.ini)}">${esc(r.ini)}</span>
              <span class="r2-card-body">
                <strong>${esc(r.name)}</strong>
                <small class="r2-card-sub">${esc(r.tema)}</small>
              </span>
              <span class="r2-plate-foot t-mono" aria-hidden="true"><span>CIRUGÍA GRAL · HGR 72</span><i class="r2-plate-code"></i></span>
              <span class="r2-plate-stamp t-mono" aria-hidden="true"><b>✓ IDENTIDAD</b><b>CONFIRMADA</b></span>
              <span class="r2-plate-seal t-mono" aria-hidden="true">EN USO</span>
            </button>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function wireBootPortada(container, onEnter) {
  if (!container) return () => {};
  if (!bootReady) {
    loadBootData().catch(() => {});
  }
  let entered = false;
  let timerId = 0;
  let nextHash = null;

  const go = () => {
    if (nextHash) {
      if (location.hash !== nextHash) {
        location.hash = nextHash;
      } else {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    }
    onEnter?.();
  };

  const triggerEnter = () => {
    if (entered) return;
    entered = true;
    sessionStorage.setItem(BOOT_KEY, '1');
    playBootSound();

    const screen = container.querySelector('.boot-screen');
    screen?.classList.add('is-leaving');
    timerId = window.setTimeout(go, 120);
  };

  const grid = container.querySelector('.r2-cards-grid');
  const status = container.querySelector('[data-r2-status] span');
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Placas «en uso»: residentes con señal reciente en el servidor (otro dispositivo ya entró con ese nombre)
  let sealTimer = 0;
  const refreshSeals = async () => {
    if (!container.isConnected || entered) return;
    try {
      const r = await fetch('/api/examen', { cache: 'no-store' });
      const data = r.ok ? await r.json() : null;
      const now = Number(data?.serverNow) || Date.now();
      const res = data?.residents || {};
      container.querySelectorAll('[data-r2-pick]').forEach((card) => {
        const seen = Number(res[card.dataset.r2Pick]?.lastSeen) || 0;
        card.classList.toggle('is-sealed', seen > 0 && now - seen < 25000);
      });
    } catch {}
    sealTimer = window.setTimeout(refreshSeals, 8000);
  };
  refreshSeals();

  const enterAsResident = (r2Id, cardEl) => {
    if (entered || grid?.classList.contains('has-pick')) return;
    unlockPortalAudio();
    const prof = profileByCode(r2Id);
    if (!prof) return;
    if (cardEl?.classList.contains('is-sealed')
      && !window.confirm(`${prof.name} ya aparece conectado en otro dispositivo.\n\n¿Eres tú y quieres entrar aquí?`)) return;
    grid?.classList.add('has-pick');
    cardEl?.classList.add('is-picked');
    if (status) status.textContent = `VERIFICANDO IDENTIDAD · ${prof.name.toUpperCase()}…`;
    try { navigator.vibrate?.([14, 50, 22]); } catch {}
    setPerfil(prof.id);
    setLS(ROLE_KEY, 'residente');
    markBody();
    try {
      store.reloadProfile?.();
      store.setSettings?.({ name: prof.short || prof.name });
    } catch {}
    playUiSfx('click');
    nextHash = '#/inicio';
    // Bloqueo de identidad: escaneo + glitch y sello de confirmación antes de entrar
    timerId = window.setTimeout(() => {
      cardEl?.classList.add('is-confirmed');
      if (status) status.textContent = `✓ IDENTIDAD CONFIRMADA · BIENVENIDO, ${prof.name.toUpperCase()}`;
      try { navigator.vibrate?.(30); } catch {}
      timerId = window.setTimeout(triggerEnter, reduced ? 250 : 750);
    }, reduced ? 150 : 650);
  };

  const form = container.querySelector('[data-boot-login]');
  const msg = container.querySelector('[data-boot-msg]');
  const say = (text, cls = '') => { if (msg) { msg.textContent = text; msg.className = `boot-login-msg t-mono ${cls}`; } };

  const onSubmit = (e) => {
    e.preventDefault();
    unlockPortalAudio();
    if (entered || !form) return;
    const code = form.elements.c.value.trim();
    if (!code) { say('> ingresa tu código de CALOT', 'is-error'); return; }
    const prof = profileByCode(code);
    if (!prof || prof.role !== 'adscrito') {
      say('> código inválido', 'is-error');
      return;
    }
    setPerfil(prof.id);
    setLS(ROLE_KEY, 'adscrito');
    markBody();
    try { store.reloadProfile?.(); } catch {}
    playUiSfx('click');
    say(`> acceso concedido · ${prof.title}`, 'is-ok');
    nextHash = '#/adscrito';
    triggerEnter();
  };

  const onClick = (e) => {
    const r2Btn = e.target.closest('[data-r2-pick]');
    if (r2Btn) {
      e.preventDefault();
      enterAsResident(r2Btn.dataset.r2Pick, r2Btn);
      return;
    }
    const enterBtn = e.target.closest('[data-boot-enter]');
    if (enterBtn) {
      e.preventDefault();
      triggerEnter();
    }
  };

  form?.addEventListener('submit', onSubmit);
  container.addEventListener('click', onClick);

  return () => {
    window.clearTimeout(timerId);
    window.clearTimeout(sealTimer);
    form?.removeEventListener('submit', onSubmit);
    container.removeEventListener('click', onClick);
  };
}

/**
 * Acceso docente desde la app CALOT original (ARGUS): el botón de su panel abre
 * black-ops/?docente=<código>. El menú de Black Ops solo muestra a los R2.
 * Devuelve 'entered' si entró directo, 'form' si hay que pedir el código, o null.
 */
function consumeDocenteLink() {
  let params;
  try { params = new URLSearchParams(location.search); } catch { return null; }
  const hashDocente = /^#\/docente\b/.test(location.hash);
  if (!params.has('docente') && !hashDocente) return null;
  const code = String(params.get('docente') || '').trim();
  params.delete('docente');
  const qs = params.toString();
  const prof = code ? profileByCode(code) : null;
  try { history.replaceState(null, '', `${location.pathname}${qs ? `?${qs}` : ''}${prof?.role === 'adscrito' ? '#/adscrito' : hashDocente ? '#/' : location.hash}`); } catch {}
  if (!prof || prof.role !== 'adscrito') return 'form';
  setPerfil(prof.id);
  setLS(ROLE_KEY, 'adscrito');
  markBody();
  try { store.reloadProfile?.(); } catch {}
  sessionStorage.setItem(BOOT_KEY, '1');
  return 'entered';
}

// Se resuelve al cargar el módulo, antes del primer ruteo de main.js
const DOCENTE_LINK = consumeDocenteLink();
export const docenteFormRequested = () => DOCENTE_LINK === 'form';

export function mountInitialBootGate(onEnterApp) {
  const docente = DOCENTE_LINK;
  if (docente === 'entered') return;
  if (docente !== 'form' && sessionStorage.getItem(BOOT_KEY) === '1') return;
  if (document.getElementById('boot-gate')) return;

  const gate = document.createElement('div');
  gate.id = 'boot-gate';
  gate.className = 'boot-gate';
  gate.setAttribute('role', 'dialog');
  gate.setAttribute('aria-modal', 'true');
  gate.setAttribute('aria-label', 'Selección de perfil R2 · CALOT-OS');
  gate.innerHTML = renderBootPortadaHTML({ showDocente: docente === 'form' });

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
    }, 140);
  };

  cleanupWire = wireBootPortada(gate, finishGate);

  return () => {
    window.clearTimeout(closeTimer);
    cleanupWire();
    gate.remove();
    document.body.style.overflow = prevOverflow;
  };
}

/** En Black Ops entran directo a navegar o al panel de control sin intro de 60 s que estorbe. */
export function playRoleIntro() {
  if (isAdscrito()) return;
  import('./voice.js?v=20261122c').then((m) => m.voiceWelcome?.(0.35)).catch(() => {});
}
