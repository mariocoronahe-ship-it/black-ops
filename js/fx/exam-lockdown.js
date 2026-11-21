/* ==========================================================================
   CALOT-OS · Black Ops · Motor de Bloqueo Simultáneo y Examen Anti-Trampa R2
   Mientras la Dra. Hernández prepara el examen, los R2 navegan libremente.
   En cuanto activa el examen, a todos se les bloquea la interfaz con una
   animación simultánea y entran al examen blindado bajo vigilancia en vivo.
   ========================================================================== */

import { store, questions, loadStoreData } from '../store.js?v=20261121y';
import { perfil, perfilId, isAdscrito, setPerfil, markBody, profileByCode, R2_RESIDENTS } from '../perfil.js?v=20261121y';
import { BOOT_KEY, ROLE_KEY } from './boot.js?v=20261121y';
import { esc, toast } from '../ui.js';
import { playUiSfx } from './audio.js?v=20261121y';
import { unlockPortalAudio, getEngine } from './portal-audio.js?v=20261121y';
import { playCalotEvaluation, startWaitingTaunts } from './eval-cinematic.js?v=20261121y';

const ENDPOINT = '/api/examen';

const SECTION_LABELS = {
  inicio: 'Inicio (Órbita)',
  resumenes: 'Resúmenes PUEM',
  aprende: 'Lectura de tema',
  repasa: 'Tarjetas SM-2',
  puem: 'Banco PUEM',
  juegos: 'Juegos quirúrgicos',
  recursos: 'Atlas 3D y Escalas',
  stats: 'Progreso',
  ranking: 'Liga CALOT',
  hgr72: 'Modo Guardia HGR 72',
};

function rng(seed) {
  let h = 2166136261;
  const s = String(seed || 'calot');
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 100000) / 100000;
  };
}

function seededShuffle(arr, seed) {
  const out = [...arr];
  const rand = rng(seed);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function currentSectionLabel() {
  const h = (location.hash || '#/inicio').replace(/^#\/?/, '').split('?')[0].toLowerCase() || 'inicio';
  return SECTION_LABELS[h] || h;
}

async function apiPost(body) {
  const r = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

export async function fetchExamBoard() {
  const r = await fetch(ENDPOINT, { cache: 'no-store' });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

export async function adminExamAction(action, extra = {}) {
  const code = perfilId() === 'mario' ? '12' : 'he';
  return apiPost({ action, code, ...extra });
}

let cachedPool = null;
async function buildQuestionPool(topic, count, seedStr) {
  if (!cachedPool) {
    const items = [];
    try {
      const [argos, v1, v2] = await Promise.all([
        import('../data/juegos_argos.js?v=20261121y'),
        import('../data/juegos_drive_v1.js?v=20261121y'),
        import('../data/juegos_drive_v2.js?v=20261121y'),
      ]);
      const rawBlitz = [
        ...(argos.EXTRA_BLITZ_QUESTIONS || []),
        ...(v1.DRIVE_V1?.blitz || []),
        ...(v2.DRIVE_V2?.blitz || []),
      ];
      for (const b of rawBlitz) {
        const opts = b.opts || b.options || [];
        if (opts.length < 2) continue;
        items.push({
          id: b.id || '',
          topicId: b.topicId || b.tema || 'todos_r2',
          stem: b.q || b.stem || b.prompt || '',
          options: opts,
          answer: typeof b.ans === 'number' ? b.ans : (typeof b.answer === 'number' ? b.answer : 0),
          explanation: b.exp || b.explanation || '',
        });
      }
    } catch {}
    cachedPool = items;
  }

  let filtered = cachedPool;
  if (topic && topic !== 'todos_r2') {
    const byTopic = cachedPool.filter((q) =>
      q.topicId === topic ||
      String(q.topicId || '').toLowerCase().includes(topic)
    );
    if (byTopic.length >= 5) filtered = byTopic;
  }

  // Deduplicar por enunciado
  const seen = new Set();
  const unique = [];
  for (const q of filtered) {
    const k = String(q.stem || '').trim().slice(0, 120);
    if (!k || seen.has(k)) continue;
    seen.add(k);
    unique.push(q);
  }

  const picked = seededShuffle(unique, `${seedStr}:questions`).slice(0, count);
  // Revolver también el orden de los incisos para cada residente
  return picked.map((q, idx) => {
    const indexedOpts = (q.options || []).map((txt, i) => ({
      txt: String(txt).replace(/^[A-Da-d][).:\-]\s*/, ''),
      isCorrect: i === q.answer,
    }));
    const shuffledOpts = seededShuffle(indexedOpts, `${seedStr}:opts:${idx}`);
    return {
      id: q.id || `q-${idx}`,
      stem: q.stem,
      options: shuffledOpts.map((o) => o.txt),
      answer: shuffledOpts.findIndex((o) => o.isCorrect),
      explanation: q.explanation || '',
    };
  });
}

let mounted = false;
let activeSessionId = null;
let lockdownRoot = null;
let pillEl = null;

export function initExamLockdownMonitor() {
  if (mounted) return;
  mounted = true;

  const isOnAdscritoView = () => {
    const h = (location.hash || '').replace(/^#\/?/, '').split('?')[0].toLowerCase();
    return h === 'adscrito';
  };

  const effectiveResident = () => {
    const p = perfil();
    if (R2_RESIDENTS.some((r) => r.id === p.id)) return p;
    return R2_RESIDENTS.find((r) => r.id === 'r2_mario') || R2_RESIDENTS[0];
  };

  // Píldora flotante en modo exploración para que el R2 vea quién es o pueda cambiar de tarjeta antes del examen
  const ensureExplorePill = (examActive) => {
    const inGate = Boolean(document.getElementById('boot-gate')) || document.body.classList.contains('is-landing');
    if (isOnAdscritoView() || examActive || inGate) {
      if (pillEl) pillEl.hidden = true;
      return;
    }
    if (!pillEl) {
      pillEl = document.createElement('div');
      pillEl.className = 'bo-explore-pill mono';
      document.body.appendChild(pillEl);
      pillEl.addEventListener('click', (e) => {
        if (e.target.closest('[data-bo-switch]')) {
          sessionStorage.removeItem(BOOT_KEY);
          sessionStorage.removeItem('calot:booted');
          location.hash = '#/';
          location.reload();
          return;
        }
        if (e.target.closest('[data-bo-docente]')) {
          if (isAdscrito()) {
            location.hash = '#/adscrito';
            return;
          }
          const code = window.prompt('Clave de Coordinación Docente (Dra. Hernández):', '');
          if (!code) return;
          const prof = profileByCode(code);
          if (!prof || prof.role !== 'adscrito') {
            toast('Clave inválida (usa HE)');
            return;
          }
          setPerfil(prof.id);
          sessionStorage.setItem(BOOT_KEY, '1');
          markBody();
          location.hash = '#/adscrito';
          window.dispatchEvent(new HashChangeEvent('hashchange'));
        }
      });
    }
    const p = effectiveResident();
    pillEl.hidden = false;
    pillEl.innerHTML = `
      <span class="bo-pill-dot"></span>
      <span>R2 · <b>${esc(p.name)}</b> · Exploración activa</span>
      <button type="button" class="bo-pill-btn mono" data-bo-switch>Cambiar R2</button>
      <button type="button" class="bo-pill-btn mono" data-bo-docente style="border-color:rgba(255,58,82,.55);color:#ff8096">Control Docente (HE)</button>
    `;
  };

  const poll = async () => {
    try {
      const inGate = Boolean(document.getElementById('boot-gate')) || document.body.classList.contains('is-landing');
      if (inGate) {
        if (pillEl) pillEl.hidden = true;
        return;
      }
      // Si está dentro de la consola docente (#/adscrito), no se bloquea la consola en sí
      if (isOnAdscritoView() && isAdscrito()) {
        ensureExplorePill(false);
        if (lockdownRoot) closeLockdownOverlay();
        return;
      }

      const p = effectiveResident();
      const res = await apiPost({
        action: 'heartbeat',
        id: p.id,
        name: p.name,
        section: currentSectionLabel(),
      });
      const exam = res?.exam;
      const me = res?.me;
      ensureExplorePill(Boolean(exam?.active));

      if (exam?.active && me?.state !== 'entregado') {
        if (activeSessionId !== exam.sessionId || !lockdownRoot) {
          activeSessionId = exam.sessionId;
          launchLockdownOverlay(exam, me, p);
        } else if (lockdownRoot && typeof lockdownRoot._syncRemoteMe === 'function') {
          lockdownRoot._syncRemoteMe(exam, me);
        }
      } else if (!exam?.active && lockdownRoot && !lockdownRoot.dataset.submitting) {
        closeLockdownOverlay();
        if (exam?.ended) {
          toast('La Dra. Hernández finalizó la sesión del examen.');
        }
      }
    } catch {
      // Sin red temporal: sigue intentando en el siguiente ciclo
    }
  };

  setInterval(poll, 2200);
  window.addEventListener('hashchange', () => setTimeout(poll, 80));
  setTimeout(poll, 300);
}

function closeLockdownOverlay() {
  if (!lockdownRoot) return;
  try { lockdownRoot._cleanup?.(); } catch {}
  lockdownRoot.remove();
  lockdownRoot = null;
  document.body.classList.remove('is-exam-locked');
}

const TAKEOVER_SEC = 8;

function makeSfxAudio(file, vol = 0.85) {
  try {
    const a = new Audio(`assets/sfx/${file}`);
    a.preload = 'auto';
    a.setAttribute('playsinline', '');
    a.playsInline = true;
    a.volume = Math.max(0, Math.min(1, vol));
    return a;
  } catch {
    return null;
  }
}

function playSynthTakeoverAudio() {
  try {
    const eng = getEngine();
    if (!eng || eng.ctx.state !== 'running') return;
    const { ctx, dry } = eng;
    const t0 = ctx.currentTime + 0.02;
    // Pulso sub-grave de bloqueo + sirena descendente breve
    const sub = ctx.createOscillator();
    const sg = ctx.createGain();
    sub.type = 'sawtooth';
    sub.frequency.setValueAtTime(110, t0);
    sub.frequency.exponentialRampToValueAtTime(34, t0 + 1.4);
    sg.gain.setValueAtTime(0.001, t0);
    sg.gain.exponentialRampToValueAtTime(0.32, t0 + 0.04);
    sg.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.5);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 340;
    sub.connect(lp); lp.connect(sg); sg.connect(dry || ctx.destination);
    sub.start(t0); sub.stop(t0 + 1.6);

    // Latidos acelerados hasta los 8 s
    [1.6, 2.8, 3.9, 4.9, 5.7, 6.4, 7.0, 7.5].forEach((at, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = i >= 5 ? 'triangle' : 'sine';
      o.frequency.setValueAtTime(i >= 5 ? 880 : 190 + i * 35, t0 + at);
      o.frequency.exponentialRampToValueAtTime(i >= 5 ? 620 : 62, t0 + at + 0.16);
      g.gain.setValueAtTime(0.0001, t0 + at);
      g.gain.exponentialRampToValueAtTime(i >= 5 ? 0.18 : 0.24, t0 + at + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + 0.22);
      o.connect(g); g.connect(dry || ctx.destination);
      o.start(t0 + at); o.stop(t0 + at + 0.24);
    });
  } catch {}
}

async function launchLockdownOverlay(exam, initialMe, residentProfile = null) {
  closeLockdownOverlay();
  unlockPortalAudio();
  document.body.classList.add('is-exam-locked');
  try {
    const aiDrawer = document.getElementById('calot-ai-drawer');
    if (aiDrawer) aiDrawer.hidden = true;
    document.getElementById('modal')?.classList.remove('open');
    document.getElementById('fab-menu')?.classList.remove('open');
  } catch {}

  const p = residentProfile || perfil();
  const canReturnToDocente = isAdscrito();
  const root = document.createElement('div');
  root.id = 'bo-lockdown-root';
  root.className = 'bo-lockdown is-takeover is-glitch-hit';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Examen Departamental R2 · Bloqueo Activo');
  document.body.appendChild(root);
  lockdownRoot = root;

  // Vibración háptica intensa en celulares Android compatibles
  try { navigator.vibrate?.([220, 70, 260, 70, 340, 90, 480]); } catch {}

  // Secuencia sonora de bloqueo de 8 s: alerta + glitch + riser + impacto al final
  playUiSfx('bad');
  playSynthTakeoverAudio();
  const alertAudio = makeSfxAudio('alert.mp3', 0.88);
  const glitchAudio = makeSfxAudio('glitch.mp3', 0.72);
  const riserAudio = makeSfxAudio('riser.mp3', 0.82);
  const impactAudio = makeSfxAudio('impacto.mp3', 0.92);
  const takeoverAudios = [alertAudio, glitchAudio, riserAudio, impactAudio].filter(Boolean);
  alertAudio?.play().catch(() => {});
  glitchAudio?.play().catch(() => {});

  const lockSteps = [
    'Módulos de consulta y resúmenes desconectados',
    'Asistente IA, copiado y capturas deshabilitados',
    'Sensor anti-trampa y foco de pantalla armados',
    `Orden único de ${exam.questionCount || 15} reactivos asignado a ${p.short || p.name}`,
  ];

  root.innerHTML = `
    <canvas class="bo-takeover-canvas" aria-hidden="true"></canvas>
    <div class="bo-takeover-scanbeam" aria-hidden="true"></div>
    <div class="bo-takeover-vignette" aria-hidden="true"></div>
    <div class="bo-takeover-flash" data-bo-flash aria-hidden="true"></div>
    ${canReturnToDocente ? `<button type="button" class="btn btn-sm btn-ghost mono" data-bo-back-docente style="position:fixed;top:14px;right:16px;z-index:999;border-color:rgba(255,90,110,.5)">← Volver a Consola Dra. Hernández</button>` : ''}
    <div class="bo-takeover-stage" data-bo-takeover>
      <div class="bo-takeover-badge mono"><i class="bo-live-led"></i>PROTOCOLO BLACK OPS · INTERVENCIÓN REMOTA</div>
      <div class="bo-takeover-reticle" aria-hidden="true">
        <span class="bo-ret-ring is-a"></span>
        <span class="bo-ret-ring is-b"></span>
        <span class="bo-ret-ring is-c"></span>
        <div class="bo-takeover-eye">
          <img src="assets/calot-hero.png?v=20261121y" alt="" width="112" height="112" />
        </div>
      </div>
      <div class="bo-takeover-title-wrap">
        <p class="bo-takeover-sub mono" data-bo-phase>SEÑAL INTERCEPTADA · CONGELANDO DISPOSITIVO…</p>
        <h1>DISPOSITIVO <em>BLOQUEADO</em></h1>
      </div>
      <p class="bo-takeover-lead">La <b>Dra. Araceli Hernández Vargas</b> activó el examen de <b>${esc(exam.topicLabel || 'Cirugía General R2')}</b>. No salgas de esta pantalla.</p>
      <ul class="bo-takeover-checks mono" data-bo-checks>
        ${lockSteps.map((txt, i) => `<li data-bo-step="${i}"><i>⏳</i><span>${esc(txt)}</span></li>`).join('')}
      </ul>
      <div class="bo-takeover-rules mono">
        <div><span>RESIDENTE R2</span><b>${esc(p.name)}</b></div>
        <div><span>REACTIVOS</span><b>${exam.questionCount} preguntas</b></div>
        <div><span>TIEMPO</span><b>${exam.durationMin} min</b></div>
        <div><span>VIGILANCIA</span><b>EN VIVO · HGR 72</b></div>
      </div>
      <div class="bo-takeover-count-box mono">
        <div class="bo-takeover-bar"><i data-bo-bar></i></div>
        <div class="bo-takeover-count" data-bo-countdown>INICIANDO EN ${TAKEOVER_SEC}…</div>
      </div>
    </div>
    <div class="bo-exam-stage" data-bo-exam hidden></div>
    <div class="bo-cheat-modal" data-bo-cheat hidden></div>
  `;

  // Animación Matrix roja de fondo + pulso dinámico durante los 8 s
  const canvas = root.querySelector('.bo-takeover-canvas');
  const ctx = canvas.getContext('2d');
  const flashEl = root.querySelector('[data-bo-flash]');
  const phaseEl = root.querySelector('[data-bo-phase]');
  const barEl = root.querySelector('[data-bo-bar]');
  const stepEls = [...root.querySelectorAll('[data-bo-step]')];
  let rafId = 0;
  let cols = [];
  const resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const colW = w < 640 ? 58 : 72;
    const n = Math.ceil(w / colW);
    cols = Array.from({ length: n }, (_, i) => ({ x: i * colW + 6, y: Math.random() * h, v: 3.5 + Math.random() * 6 }));
  };
  resize();
  window.addEventListener('resize', resize);

  const triggerTakeoverFlash = (strong = false) => {
    if (!flashEl || !root.isConnected) return;
    flashEl.classList.remove('is-pulse', 'is-bang');
    void flashEl.offsetWidth;
    flashEl.classList.add(strong ? 'is-bang' : 'is-pulse');
  };
  triggerTakeoverFlash(false);

  const tokens = ['LOCK::R2', 'HGR_72', 'CALOT//OS', 'NO_EXIT', 'PROCTOR_ON', '0x72F1', 'AUDIT_QX', 'AI_OFF', 'SEAL_8S'];
  const takeoverStartMs = performance.now();
  const drawMatrix = () => {
    if (!root.isConnected) return;
    const elapsed = Math.min(TAKEOVER_SEC, (performance.now() - takeoverStartMs) / 1000);
    const k = elapsed / TAKEOVER_SEC;
    const accel = 1 + k * k * 2.8;
    ctx.fillStyle = `rgba(0, 0, 0, ${0.24 - k * 0.08})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '600 12px "JetBrains Mono", monospace';
    for (const c of cols) {
      c.y += c.v * accel;
      if (c.y > canvas.height + 20) c.y = -16;
      const hot = Math.random() < (0.1 + k * 0.35);
      ctx.fillStyle = hot ? 'rgba(255, 130, 148, 0.92)' : `rgba(255, 36, 68, ${0.48 + k * 0.38})`;
      ctx.fillText(tokens[Math.floor(Math.random() * tokens.length)], c.x, c.y);
    }
    if (k > 0.35 && Math.random() < k * 0.45) {
      ctx.fillStyle = `rgba(255, 28, 60, ${0.15 + k * 0.25})`;
      ctx.fillRect(0, Math.random() * canvas.height, canvas.width, 1 + Math.random() * 4);
    }
    if (barEl) barEl.style.width = `${Math.round(k * 100)}%`;
    if (root.classList.contains('is-takeover')) {
      rafId = requestAnimationFrame(drawMatrix);
    }
  };
  rafId = requestAnimationFrame(drawMatrix);

  const qs = await buildQuestionPool(exam.topic, exam.questionCount || 15, `${exam.sessionId}:${p.id}`);
  const examStage = root.querySelector('[data-bo-exam]');
  const takeoverStage = root.querySelector('[data-bo-takeover]');
  const cheatModal = root.querySelector('[data-bo-cheat]');
  const countEl = root.querySelector('[data-bo-countdown]');

  let qIdx = 0;
  const answers = [];
  let correctCount = 0;
  let isLockedByCheat = Boolean(initialMe?.locked);
  let strikesCount = initialMe?.strikes || 0;
  let examRunning = false;
  let hiddenSince = 0;
  let lastStrikeTs = 0;
  let clockInterval = 0;
  let tauntLoop = null;
  let baseVpW = window.visualViewport?.width || window.innerWidth;
  let baseVpH = window.visualViewport?.height || window.innerHeight;
  let viewportCooldown = 0;

  // Bloquear copiar, pegar, clic derecho e invocación de búsqueda / IA / inspección durante el examen
  const blockEvent = (e) => {
    if (examRunning) e.preventDefault();
  };
  const blockShortcuts = (e) => {
    if (!examRunning) return;
    const k = String(e.key || '').toLowerCase();
    if (e.key === 'F12' || ((e.metaKey || e.ctrlKey) && ['c', 'v', 'x', 'a', 'f', 'p', 'u', 's', 'k'].includes(k))) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  document.addEventListener('contextmenu', blockEvent, true);
  document.addEventListener('copy', blockEvent, true);
  document.addEventListener('cut', blockEvent, true);
  document.addEventListener('keydown', blockShortcuts, true);

  const registerStrike = async (awaySec, reason) => {
    if (!examRunning || root.dataset.submitting) return;
    const now = Date.now();
    if (now - lastStrikeTs < 1800) return; // evitar duplicado blur + visibilitychange del mismo gesto
    lastStrikeTs = now;
    playUiSfx('bad');
    try {
      const r = await apiPost({
        action: 'strike',
        id: p.id,
        name: p.name,
        qNum: qIdx + 1,
        awaySec,
        reason,
      });
      if (r?.me) {
        strikesCount = r.me.strikes || (strikesCount + 1);
        isLockedByCheat = Boolean(r.me.locked);
      } else {
        strikesCount += 1;
        if (exam.strictMode === '1strike' || (exam.strictMode === '2strikes' && strikesCount >= 2)) {
          isLockedByCheat = true;
        }
      }
    } catch {
      strikesCount += 1;
      if (exam.strictMode !== 'warn' && strikesCount >= 2) isLockedByCheat = true;
    }
    renderCheatWarning(awaySec);
  };

  const onVisibility = () => {
    if (!examRunning) return;
    if (document.hidden) {
      hiddenSince = Date.now();
    } else if (hiddenSince > 0) {
      const awaySec = Math.max(1, Math.round((Date.now() - hiddenSince) / 1000));
      hiddenSince = 0;
      registerStrike(awaySec, 'Salió de la pestaña / cambió de aplicación');
    }
  };

  const onWindowBlur = () => {
    if (!examRunning) return;
    if (!hiddenSince) hiddenSince = Date.now();
    // Si pierde foco hacia Edge Copilot, panel lateral o multitarea sin ocultar la pestaña
    setTimeout(() => {
      if (!document.hidden && !document.hasFocus() && hiddenSince > 0) {
        const awaySec = Math.max(1, Math.round((Date.now() - hiddenSince) / 1000));
        hiddenSince = 0;
        registerStrike(awaySec, 'Ventana fuera de foco / panel IA o multitarea');
      }
    }, 380);
  };

  const onWindowFocus = () => {
    if (!examRunning) return;
    if (hiddenSince > 0) {
      const awaySec = Math.max(1, Math.round((Date.now() - hiddenSince) / 1000));
      hiddenSince = 0;
      registerStrike(awaySec, 'Regresó tras salir de la ventana');
    }
  };

  // Detector de pantalla dividida / panel lateral (ej. Copilot sidebar en Edge) sin disparar falsos positivos al rotar
  const onViewportResize = () => {
    if (!examRunning) return;
    const vw = window.visualViewport?.width || window.innerWidth;
    const vh = window.visualViewport?.height || window.innerHeight;
    const now = Date.now();
    const widthDrop = baseVpW - vw;
    const heightDrop = baseVpH - vh;
    const flipped = (baseVpW > baseVpH) !== (vw > vh);
    if (flipped) {
      baseVpW = vw;
      baseVpH = vh;
      return;
    }
    if (now - viewportCooldown > 2500 && ((widthDrop > 130 && Math.abs(heightDrop) < 80) || (heightDrop > 190 && Math.abs(widthDrop) < 40))) {
      viewportCooldown = now;
      registerStrike(2, 'Panel lateral IA / pantalla dividida detectada');
    }
    baseVpW = vw;
    baseVpH = vh;
  };

  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('blur', onWindowBlur);
  window.addEventListener('focus', onWindowFocus);
  window.visualViewport?.addEventListener('resize', onViewportResize);

  const renderCheatWarning = (awaySec = 1) => {
    if (!cheatModal) return;
    cheatModal.hidden = false;
    if (isLockedByCheat) {
      cheatModal.innerHTML = `
        <div class="bo-cheat-card is-locked">
          <span class="bo-cheat-tag mono">🔒 EXAMEN BLOQUEADO POR SISTEMA ANTI-TRAMPA</span>
          <h2>Se detectó salida de la aplicación</h2>
          <p>Acumulaste <b>${strikesCount} ${strikesCount === 1 ? 'salida' : 'salidas'}</b> de pantalla (última: ${awaySec} s fuera en la Pregunta ${qIdx + 1}).</p>
          <p class="muted">Tu pantalla ha quedado bloqueada y se notificó en vivo al monitor de la <b>Dra. Araceli Hernández Vargas</b>. Espera a que autorice tu desbloqueo desde su panel.</p>
          <div class="bo-cheat-pulse mono">ESPERANDO AUTORIZACIÓN DOCENTE EN LÍNEA…</div>
        </div>
      `;
    } else {
      cheatModal.innerHTML = `
        <div class="bo-cheat-card">
          <span class="bo-cheat-tag mono">⚠️ ALERTA ANTI-TRAMPA · FALTA REGISTRADA (${strikesCount})</span>
          <h2>No salgas de la pantalla del examen</h2>
          <p>Estuviste <b>${awaySec} s</b> fuera de la ventana en la <b>Pregunta ${qIdx + 1}</b>. El incidente ya quedó registrado en el monitor en vivo de la Dra. Hernández.</p>
          <p class="muted">${exam.strictMode === 'warn' ? 'Cada salida queda grabada en tu reporte final.' : 'En la siguiente salida tu examen se bloqueará automáticamente.'}</p>
          <button type="button" class="btn btn-glow" data-bo-cheat-ack>Entendido, continuar examen</button>
        </div>
      `;
    }
  };

  root._syncRemoteMe = (remoteExam, remoteMe) => {
    if (!remoteMe) return;
    if (remoteMe.state === 'entregado' && !root.dataset.submitting) {
      finishAndEvaluate(true);
      return;
    }
    if (isLockedByCheat && !remoteMe.locked) {
      isLockedByCheat = false;
      cheatModal.hidden = true;
      toast('La Dra. Hernández desbloqueó tu examen. Continúa.');
      playUiSfx('ok');
    } else if (!isLockedByCheat && remoteMe.locked) {
      isLockedByCheat = true;
      renderCheatWarning(1);
    }
  };

  const formatTimeLeft = () => {
    const endMs = (exam.startedAt || Date.now()) + (exam.durationMin || 20) * 60000;
    const remSec = Math.max(0, Math.floor((endMs - Date.now()) / 1000));
    const m = String(Math.floor(remSec / 60)).padStart(2, '0');
    const s = String(remSec % 60).padStart(2, '0');
    return { remSec, text: `${m}:${s}` };
  };

  const renderQuestion = () => {
    const q = qs[qIdx];
    if (!q) {
      renderReadyToSubmit();
      return;
    }
    const { text: timeText } = formatTimeLeft();
    examStage.innerHTML = `
      <div class="bo-exam-shell">
        <header class="bo-exam-head">
          <div>
            <span class="mono bo-exam-kicker">EXAMEN DEPARTAMENTAL R2 · ${esc(exam.topicLabel || 'CIRUGÍA GENERAL')}</span>
            <h2>${esc(p.name)} <small class="mono muted">· Reactivo ${qIdx + 1} de ${qs.length}</small></h2>
          </div>
          <div class="bo-exam-meta mono">
            <span class="bo-exam-strikes ${strikesCount > 0 ? 'is-warn' : ''}">Salidas: ${strikesCount}</span>
            <span class="bo-exam-timer" data-bo-timer>⏱ ${timeText}</span>
          </div>
        </header>

        <div class="bo-exam-progress"><i style="width:${Math.round(((qIdx + 1) / qs.length) * 100)}%"></i></div>

        <article class="card bo-question-card">
          <p class="bo-question-stem">${esc(q.stem)}</p>
          <div class="bo-options-list" role="radiogroup" aria-label="Opciones de respuesta">
            ${q.options.map((opt, idx) => `
              <button type="button" class="bo-opt-btn" data-bo-opt="${idx}">
                <span>${esc(opt)}</span>
              </button>
            `).join('')}
          </div>
        </article>

        <footer class="bo-exam-foot mono muted">
          <span>🔒 Sin retroceso · Sin pistas · Selección de texto deshabilitada</span>
          <span>Vigilancia en vivo: Dra. Araceli Hernández Vargas</span>
        </footer>
      </div>
    `;
  };

  const renderReadyToSubmit = () => {
    examStage.innerHTML = `
      <div class="bo-exam-shell is-done">
        <article class="card bo-done-card">
          <span class="mono bo-exam-kicker">REACTIVOS COMPLETADOS (${qs.length}/${qs.length})</span>
          <h2>Has registrado todas tus respuestas, ${esc(p.name)}</h2>
          <p class="muted">Tus respuestas ya están selladas. Presiona el botón para enviar tu examen al monitor de la Dra. Hernández y recibir tu veredicto de CALOT-OS.</p>
          <button type="button" class="btn btn-glow lg" data-bo-submit-final>Pedirle a CALOT que me evalúe</button>
        </article>
      </div>
    `;
  };

  const finishAndEvaluate = async (forced = false) => {
    if (root.dataset.submitting) return;
    root.dataset.submitting = '1';
    examRunning = false;
    clearInterval(clockInterval);
    tauntLoop?.stop?.();

    const total = qs.length || 1;
    const pct = Math.round((correctCount / total) * 100);
    try {
      await apiPost({
        action: 'submit',
        id: p.id,
        name: p.name,
        correct: correctCount,
        total,
      });
    } catch {}

    const reviewItems = answers.map((a, i) => ({
      q: `${i + 1}. ${a.stem}`,
      chosen: a.chosenText || 'Sin responder',
      correct: a.correctText,
      ok: a.ok,
      exp: a.explanation,
    }));

    closeLockdownOverlay();

    playCalotEvaluation({
      pct,
      correct: correctCount,
      total,
      modeLabel: `${exam.topicLabel || 'Examen R2'} · ${p.name}`,
      detail: `${correctCount} de ${total} aciertos · ${strikesCount} salidas de pantalla${forced ? ' · Cierre docente' : ''}`,
      reviewItems,
      onClose: () => {
        location.hash = '#/inicio';
      },
    });
  };

  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-bo-back-docente]')) {
      e.preventDefault();
      closeLockdownOverlay();
      location.hash = '#/adscrito';
      return;
    }
    const ack = e.target.closest('[data-bo-cheat-ack]');
    if (ack && !isLockedByCheat) {
      cheatModal.hidden = true;
      return;
    }
    if (isLockedByCheat) return;

    const optBtn = e.target.closest('[data-bo-opt]');
    if (optBtn && examRunning) {
      const chosenIdx = Number(optBtn.dataset.boOpt);
      const q = qs[qIdx];
      if (!q) return;
      playUiSfx('click');
      tauntLoop?.touch?.();
      const ok = chosenIdx === q.answer;
      if (ok) correctCount += 1;
      answers.push({
        stem: q.stem,
        chosenText: q.options[chosenIdx],
        correctText: q.options[q.answer],
        ok,
        explanation: q.explanation,
      });
      qIdx += 1;
      apiPost({
        action: 'progress',
        id: p.id,
        name: p.name,
        qIndex: qIdx,
        qTotal: qs.length,
        answered: answers.length,
        correct: correctCount,
      }).catch(() => {});
      renderQuestion();
      return;
    }

    const subBtn = e.target.closest('[data-bo-submit-final]');
    if (subBtn) {
      e.preventDefault();
      finishAndEvaluate(false);
    }
  });

  // Secuencia dramática de 8 segundos para celulares y computadoras antes de abrir la Pregunta 1
  const markStep = (idx) => {
    const el = stepEls[idx];
    if (!el || el.classList.contains('is-done')) return;
    el.classList.add('is-done');
    const ic = el.querySelector('i');
    if (ic) ic.textContent = '🔒';
    playUiSfx('click');
  };

  let countSec = TAKEOVER_SEC;
  const takeoverTimers = [];
  takeoverTimers.push(setTimeout(() => {
    if (phaseEl) phaseEl.textContent = 'BLOQUEANDO MÓDULOS DE ESTUDIO E IA…';
    riserAudio?.play().catch(() => {});
    markStep(0);
  }, 900));
  takeoverTimers.push(setTimeout(() => {
    markStep(1);
    triggerTakeoverFlash(false);
    try { navigator.vibrate?.(120); } catch {}
  }, 2400));
  takeoverTimers.push(setTimeout(() => {
    if (phaseEl) phaseEl.textContent = 'VIGILANCIA ANTI-TRAMPA EN VIVO ARMADA…';
    markStep(2);
  }, 4000));
  takeoverTimers.push(setTimeout(() => {
    if (phaseEl) phaseEl.textContent = 'IMPACTO INMINENTE · PREPARA TU PANTALLA…';
    root.classList.add('is-critical');
    markStep(3);
    triggerTakeoverFlash(false);
    try { navigator.vibrate?.([90, 50, 140]); } catch {}
  }, 5600));

  const takeoverInterval = setInterval(() => {
    countSec -= 1;
    if (countSec > 0) {
      if (countEl) {
        countEl.textContent = countSec <= 3 ? `INICIANDO EN ${countSec}` : `BLOQUEO EN ${countSec} s…`;
        countEl.classList.toggle('is-final', countSec <= 3);
      }
      if (countSec <= 3) {
        triggerTakeoverFlash(false);
        playUiSfx('nav');
        try { navigator.vibrate?.(80); } catch {}
      }
    } else {
      clearInterval(takeoverInterval);
      if (countEl) countEl.textContent = 'EVALUACIÓN EN CURSO';
      triggerTakeoverFlash(true);
      impactAudio?.play().catch(() => {});
      try { navigator.vibrate?.(260); } catch {}

      takeoverTimers.push(setTimeout(() => {
        if (!root.isConnected) return;
        root.classList.remove('is-takeover', 'is-glitch-hit', 'is-critical');
        takeoverStage.hidden = true;
        examStage.hidden = false;
        examRunning = true;
        baseVpW = window.visualViewport?.width || window.innerWidth;
        baseVpH = window.visualViewport?.height || window.innerHeight;
        tauntLoop = startWaitingTaunts();
        renderQuestion();
        if (isLockedByCheat) renderCheatWarning(1);

        clockInterval = setInterval(() => {
          const { remSec, text } = formatTimeLeft();
          const tEl = root.querySelector('[data-bo-timer]');
          if (tEl) tEl.textContent = `⏱ ${text}`;
          if (remSec <= 0 && examRunning) {
            finishAndEvaluate(true);
          }
        }, 1000);
      }, 280));
    }
  }, 1000);

  root._cleanup = () => {
    examRunning = false;
    cancelAnimationFrame(rafId);
    clearInterval(takeoverInterval);
    clearInterval(clockInterval);
    takeoverTimers.forEach(clearTimeout);
    tauntLoop?.stop?.();
    takeoverAudios.forEach((a) => { try { a.pause(); a.currentTime = 0; } catch {} });
    window.removeEventListener('resize', resize);
    document.removeEventListener('contextmenu', blockEvent, true);
    document.removeEventListener('copy', blockEvent, true);
    document.removeEventListener('cut', blockEvent, true);
    document.removeEventListener('keydown', blockShortcuts, true);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('blur', onWindowBlur);
    window.removeEventListener('focus', onWindowFocus);
    window.visualViewport?.removeEventListener('resize', onViewportResize);
  };
}
