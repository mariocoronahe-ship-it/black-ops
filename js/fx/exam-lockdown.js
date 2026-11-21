/* ==========================================================================
   CALOT-OS · Black Ops · Motor de Bloqueo Simultáneo y Examen Anti-Trampa R2
   Mientras la Dra. Hernández prepara el examen, los R2 navegan libremente.
   En cuanto activa el examen, a todos se les bloquea la interfaz con una
   animación simultánea y entran al examen blindado bajo vigilancia en vivo.
   ========================================================================== */

import { store, questions, loadStoreData } from '../store.js?v=20261121r';
import { perfil, perfilId, isAdscrito, R2_RESIDENTS, BOOT_KEY } from '../perfil.js?v=20261121r';
import { esc, toast } from '../ui.js';
import { playUiSfx } from './audio.js?v=20261121r';
import { unlockPortalAudio } from './portal-audio.js?v=20261121r';
import { playCalotEvaluation, startWaitingTauntLoop } from './eval-cinematic.js?v=20261121r';

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
  await loadStoreData();
  if (!cachedPool) {
    let puemQs = [];
    try {
      const m = await import('../data/puem_examenes.js?v=20261121r');
      puemQs = (m.PUEM_QUESTIONS || []).filter((q) => q.year === 'R2' || !q.year);
    } catch {}
    const storeQs = (questions() || []).map((q) => ({
      id: q.id,
      topicId: q.topicId || 'todos_r2',
      stem: q.q,
      options: q.options || [],
      answer: typeof q.answer === 'number' ? q.answer : 0,
      explanation: q.exp || '',
    })).filter((q) => q.options.length >= 2);
    cachedPool = [...storeQs, ...puemQs];
  }

  let filtered = cachedPool;
  if (topic && topic !== 'todos_r2') {
    const byTopic = cachedPool.filter((q) =>
      q.topicId === topic ||
      String(q.sistema || '').toLowerCase().includes(topic) ||
      String(q.subtema || '').toLowerCase().includes(topic)
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

  // Píldora flotante en modo exploración para que el R2 vea quién es o pueda cambiar de tarjeta antes del examen
  const ensureExplorePill = (examActive) => {
    if (isAdscrito() || examActive || sessionStorage.getItem(BOOT_KEY) !== '1') {
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
          location.reload();
        }
      });
    }
    const p = perfil();
    pillEl.hidden = false;
    pillEl.innerHTML = `
      <span class="bo-pill-dot"></span>
      <span>R2 · <b>${esc(p.name)}</b> · Exploración activa</span>
      <button type="button" class="bo-pill-btn mono" data-bo-switch>Cambiar R2</button>
    `;
  };

  const poll = async () => {
    try {
      if (sessionStorage.getItem(BOOT_KEY) !== '1') return;
      if (isAdscrito()) {
        ensureExplorePill(false);
        return;
      }
      const p = perfil();
      if (!R2_RESIDENTS.some((r) => r.id === p.id)) return;

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
          launchLockdownOverlay(exam, me);
        } else if (lockdownRoot && typeof lockdownRoot._syncRemoteMe === 'function') {
          lockdownRoot._syncRemoteMe(exam, me);
        }
      } else if (!exam?.active && lockdownRoot && !lockdownRoot.dataset.submitting) {
        // La Dra. Hernández cerró o reabrió la sala
        closeLockdownOverlay();
        if (exam?.ended) {
          toast('La Dra. Hernández finalizó la sesión del examen.');
        }
      }
    } catch {
      // Sin red temporal: sigue intentando en el siguiente ciclo
    }
  };

  setInterval(poll, 3200);
  window.addEventListener('hashchange', () => setTimeout(poll, 200));
  setTimeout(poll, 600);
}

function closeLockdownOverlay() {
  if (!lockdownRoot) return;
  try { lockdownRoot._cleanup?.(); } catch {}
  lockdownRoot.remove();
  lockdownRoot = null;
  document.body.classList.remove('is-exam-locked');
}

async function launchLockdownOverlay(exam, initialMe) {
  closeLockdownOverlay();
  unlockPortalAudio();
  document.body.classList.add('is-exam-locked');

  const p = perfil();
  const root = document.createElement('div');
  root.id = 'bo-lockdown-root';
  root.className = 'bo-lockdown is-takeover';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Examen Departamental R2 · Bloqueo Activo');
  document.body.appendChild(root);
  lockdownRoot = root;

  // Sonido de alarma + riser de bloqueo
  playUiSfx('bad');
  let takeoverAudio = null;
  try {
    takeoverAudio = new Audio('assets/sfx/alert.mp3');
    takeoverAudio.playsInline = true;
    takeoverAudio.volume = 0.75;
    takeoverAudio.play().catch(() => {});
  } catch {}

  root.innerHTML = `
    <canvas class="bo-takeover-canvas" aria-hidden="true"></canvas>
    <div class="bo-takeover-stage" data-bo-takeover>
      <div class="bo-takeover-badge mono">⚠️ PROTOCOLO BLACK OPS · INTERVENCIÓN DOCENTE</div>
      <div class="bo-takeover-eye">
        <img src="assets/calot-hero.png?v=20261121r" alt="" width="112" height="112" />
      </div>
      <h1>BLOQUEO GENERAL <em>ACTIVADO</em></h1>
      <p class="bo-takeover-lead">La <b>Dra. Araceli Hernández Vargas</b> ha suspendido la navegación libre e iniciado el examen de <b>${esc(exam.topicLabel || 'Cirugía General R2')}</b>.</p>
      <div class="bo-takeover-rules mono">
        <div><span>RESIDENTE</span><b>${esc(p.name)} (R2)</b></div>
        <div><span>REACTIVOS</span><b>${exam.questionCount} preguntas (orden único)</b></div>
        <div><span>TIEMPO LÍMITE</span><b>${exam.durationMin} minutos</b></div>
        <div><span>VIGILANCIA</span><b>Detector de cambio de pantalla activo</b></div>
      </div>
      <div class="bo-takeover-count mono" data-bo-countdown>INICIANDO EN 5…</div>
    </div>
    <div class="bo-exam-stage" data-bo-exam hidden></div>
    <div class="bo-cheat-modal" data-bo-cheat hidden></div>
  `;

  // Animación Matrix roja de fondo durante la intervención
  const canvas = root.querySelector('.bo-takeover-canvas');
  const ctx = canvas.getContext('2d');
  let rafId = 0;
  let cols = [];
  const resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const n = Math.ceil(w / 72);
    cols = Array.from({ length: n }, (_, i) => ({ x: i * 72 + 8, y: Math.random() * h, v: 3 + Math.random() * 5 }));
  };
  resize();
  window.addEventListener('resize', resize);

  const tokens = ['LOCK::R2', 'HGR_72', 'CALOT//OS', 'NO_EXIT', 'PROCTOR_ON', '0x72F1', 'AUDIT_QX'];
  const drawMatrix = () => {
    if (!root.isConnected) return;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '600 12px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(255, 42, 72, 0.65)';
    for (const c of cols) {
      c.y += c.v;
      if (c.y > canvas.height + 20) c.y = -16;
      ctx.fillText(tokens[Math.floor(Math.random() * tokens.length)], c.x, c.y);
    }
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

  // Bloquear copiar, pegar y clic derecho durante el examen
  const blockEvent = (e) => {
    if (examRunning) e.preventDefault();
  };
  document.addEventListener('contextmenu', blockEvent, true);
  document.addEventListener('copy', blockEvent, true);
  document.addEventListener('cut', blockEvent, true);

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
    // Si pierde foco en escritorio/multitarea sin ocultar pestaña
    setTimeout(() => {
      if (!document.hidden && !document.hasFocus() && hiddenSince > 0) {
        const awaySec = Math.max(1, Math.round((Date.now() - hiddenSince) / 1000));
        hiddenSince = 0;
        registerStrike(awaySec, 'Ventana fuera de foco / multitarea');
      }
    }, 1200);
  };

  const onWindowFocus = () => {
    if (!examRunning) return;
    if (hiddenSince > 0) {
      const awaySec = Math.max(1, Math.round((Date.now() - hiddenSince) / 1000));
      hiddenSince = 0;
      registerStrike(awaySec, 'Regresó tras salir de la ventana');
    }
  };

  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('blur', onWindowBlur);
  window.addEventListener('focus', onWindowFocus);

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

  // Cuenta regresiva de 5 segundos de la intervención antes de mostrar la Pregunta 1
  let countSec = 5;
  const takeoverInterval = setInterval(() => {
    countSec -= 1;
    if (countSec > 0) {
      if (countEl) countEl.textContent = `INICIANDO EN ${countSec}…`;
      playUiSfx('click');
    } else {
      clearInterval(takeoverInterval);
      root.classList.remove('is-takeover');
      takeoverStage.hidden = true;
      examStage.hidden = false;
      examRunning = true;
      tauntLoop = startWaitingTauntLoop();
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
    }
  }, 1000);

  root._cleanup = () => {
    examRunning = false;
    cancelAnimationFrame(rafId);
    clearInterval(takeoverInterval);
    clearInterval(clockInterval);
    tauntLoop?.stop?.();
    try { takeoverAudio?.pause(); } catch {}
    window.removeEventListener('resize', resize);
    document.removeEventListener('contextmenu', blockEvent, true);
    document.removeEventListener('copy', blockEvent, true);
    document.removeEventListener('cut', blockEvent, true);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('blur', onWindowBlur);
    window.removeEventListener('focus', onWindowFocus);
  };
}
