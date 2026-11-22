// Secuencia cinemática de evaluación de CALOT-OS:
//  · Taunts aleatorios de espera mientras el residente contesta juegos o casos clínicos.
//  · Pantalla negra con código rojo rápido, flashes robóticos, voz «Calculando» + riser oscuro de 30 s.
//  · Impacto sincronizado al PUM (23.45 s) → calificación gigante en pantalla → ambiente de terror en loop + voz de burla.
import { esc } from '../ui.js';
import { isVoiceOn, stopVoice } from './voice.js?v=20261122i';
import { unlockPortalAudio } from './portal-audio.js?v=20261122i';

const BASE = new URL('../../assets/voz/', import.meta.url);

const WAIT_CLIPS = [
  'eval-wait-tictac',
  'eval-wait-respira',
];

const CALC_CLIPS = [
  'eval-calc-indicaciones',
  'eval-calc-turno',
];

const ROAST_CLIPS = [
  'eval-roast-primer-anio',
  'eval-roast-uci',
  'eval-roast-caiste',
  'eval-roast-abuelita',
  'eval-roast-seguro',
  'eval-roast-404',
  'eval-roast-patologia',
];

const RISER_CLIP = 'eval-riser-pum';
const TERROR_CLIP = 'eval-terror-loop';
const PUM_TIME_SEC = 23.45; // Pico exacto del impacto medido en eval-riser-pum.mp3

const recentByGroup = new Map();
let activeWaitAudio = null;
let activeEvalCleanup = null;

function clipUrl(name) {
  return new URL(`${name}.mp3`, BASE).href;
}

function pickRandom(group, list) {
  if (!list.length) return null;
  const last = recentByGroup.get(group);
  const pool = list.length > 1 && last ? list.filter((x) => x !== last) : list;
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  recentByGroup.set(group, chosen);
  return chosen;
}

function makeSfx(file, { loop = false, volume = 1 } = {}) {
  const a = new Audio(new URL(`../../assets/sfx/${file}`, import.meta.url).href);
  a.preload = 'auto';
  a.setAttribute('playsinline', '');
  a.playsInline = true;
  a.loop = loop;
  a.volume = Math.max(0, Math.min(1, volume));
  return a;
}

function makeAudio(name, { loop = false, volume = 1 } = {}) {
  const a = new Audio(clipUrl(name));
  a.preload = 'auto';
  a.setAttribute('playsinline', '');
  a.playsInline = true;
  a.loop = loop;
  a.volume = Math.max(0, Math.min(1, volume));
  return a;
}

/** Desbloquea un elemento <audio> durante el toque del usuario en iOS/Android para que pueda sonar segundos después. */
function primeAudioForMobile(a) {
  if (!a) return;
  try {
    const prevVol = a.volume;
    a.muted = true;
    a.volume = 0;
    const p = a.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        a.pause();
        a.currentTime = 0;
        a.muted = false;
        a.volume = prevVol;
      }).catch(() => {
        a.muted = false;
        a.volume = prevVol;
      });
    } else {
      a.pause();
      a.currentTime = 0;
      a.muted = false;
      a.volume = prevVol;
    }
  } catch {}
}

function fadeAudio(audio, targetVol, ms = 500, stopAtEnd = false) {
  if (!audio) return;
  const startVol = audio.volume;
  const t0 = performance.now();
  const step = (now) => {
    const k = Math.min(1, (now - t0) / Math.max(1, ms));
    try { audio.volume = Math.max(0, Math.min(1, startVol + (targetVol - startVol) * k)); } catch {}
    if (k < 1) requestAnimationFrame(step);
    else if (stopAtEnd) { try { audio.pause(); audio.currentTime = 0; } catch {} }
  };
  requestAnimationFrame(step);
}

/** Detiene cualquier audio de espera que esté sonando. */
export function stopWaitingTaunt() {
  if (!activeWaitAudio) return;
  try { activeWaitAudio.pause(); activeWaitAudio.currentTime = 0; } catch {}
  activeWaitAudio = null;
}

/**
 * Dispara audios de espera/presión al azar mientras el usuario contesta juegos o casos clínicos.
 * Respeta el interruptor de voz y se detiene automáticamente al evaluar o salir de la vista.
 */
export function startWaitingTaunts({ isActive } = {}) {
  let stopped = false;
  let timerId = 0;

  const schedule = (minMs, maxMs) => {
    clearTimeout(timerId);
    if (stopped) return;
    const delay = minMs + Math.floor(Math.random() * (maxMs - minMs));
    timerId = window.setTimeout(fire, delay);
  };

  const fire = () => {
    if (stopped) return;
    const ok = typeof isActive === 'function' ? isActive() : true;
    if (!ok || document.hidden || activeEvalCleanup || !isVoiceOn()) {
      schedule(12000, 20000);
      return;
    }
    if (activeWaitAudio && !activeWaitAudio.paused) {
      schedule(14000, 22000);
      return;
    }
    const clip = pickRandom('wait', WAIT_CLIPS);
    if (!clip) return;
    const a = makeAudio(clip, { volume: 0.92 });
    activeWaitAudio = a;
    a.addEventListener('ended', () => {
      if (activeWaitAudio === a) activeWaitAudio = null;
      schedule(22000, 36000);
    }, { once: true });
    a.play().catch(() => {
      if (activeWaitAudio === a) activeWaitAudio = null;
      schedule(16000, 26000);
    });
  };

  schedule(14000, 23000);

  return {
    touch() {
      if (stopped) return;
      // Si el usuario acaba de responder, reprograma con ventana natural sin cortar un audio que ya habla
      if (!activeWaitAudio || activeWaitAudio.paused) schedule(16000, 28000);
    },
    stop() {
      stopped = true;
      clearTimeout(timerId);
      stopWaitingTaunt();
    },
  };
}

/** Detiene y cierra cualquier evaluación en curso (p. ej. al cambiar de ruta). */
export function stopCalotEvaluation() {
  if (activeEvalCleanup) {
    const fn = activeEvalCleanup;
    activeEvalCleanup = null;
    fn();
  }
}

const CODE_TOKENS = [
  '0x4F2A', '0x9C11', '0xDEAD', '0x0404', '0x7B3E', '0xFF08', '0xA19C', '0x00F1',
  'DX_SCAN', 'HEMO_CHK', 'CALOT::EVAL', 'ERR_404', 'VITAL_Δ', 'TOX_LVL', 'ATLS_10',
  'SCHWARTZ', 'SABISTON', 'QX_RISK', 'SYNC_NEURAL', 'AUDIT_R2', 'CRIT_FAIL', 'PROC_99',
  '01011001', '11001010', '00110111', '10100101', '>>SCAN', '::WARN', 'ΔpH=7.19', 'LAC=6.4',
];

const CONSOLE_LINES = [
  '> INICIANDO AUDITORÍA QUIRÚRGICA CALOT//OS…',
  '> DESENCRIPTANDO DECISIONES REGISTRADAS…',
  '> CRUZANDO CRITERIOS CON SABISTON · SCHWARTZ · ATLS…',
  '> CALCULANDO SOBREVIDA ESTIMADA DEL PACIENTE…',
  '> EVALUANDO RIESGO DE MORBIMORTALIDAD…',
  '> DETECTANDO DESVIACIONES CLÍNICAS…',
  '> COMPILANDO VEREDICTO FINAL…',
];

/**
 * Reproduce la secuencia completa de evaluación de CALOT:
 *  1) Negro + código rojo rápido + flashes robóticos + riser oscuro (#11) + voz «Calculando» (#6/#7).
 *  2) En el PUM (23.45 s): impacto + calificación gigante en pantalla.
 *  3) Tras el PUM: ambiente de terror constante en loop (#12) + voz de burla (#0/#1/#4/#5/#8/#9/#10).
 *  4) Revisión desplegable opcional de respuestas (sin haber spoileado nada durante el juego).
 */
export function playCalotEvaluation({
  pct = 0,
  correct = 0,
  total = 0,
  modeLabel = 'Evaluación CALOT',
  detail = '',
  reviewItems = [],
  onReplay = null,
  onClose = null,
  sessionEnd = null, // { name } → cierre de examen: sin voces, solo efectos + tarjeta de sesión finalizada
  buildSec = null, // duración del ascenso hasta el PUM (por defecto el riser completo; el examen usa 8 s)
} = {}) {
  stopCalotEvaluation();
  stopWaitingTaunt();
  stopVoice();

  const scorePct = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
  // Ascenso hasta el PUM: el riser arranca a (PUM − buildSec) para que el impacto siga cayendo justo en el porcentaje
  const BUILD_SEC = Math.max(3, Math.min(PUM_TIME_SEC, Number(buildSec) || (sessionEnd ? 8 : PUM_TIME_SEC)));
  const RISER_FROM = PUM_TIME_SEC - BUILD_SEC;
  // En el cierre del examen no hay voces: solo efectos (y suenan aunque la voz esté apagada)
  const soundOn = sessionEnd ? true : isVoiceOn();
  const voiceOn = !sessionEnd && isVoiceOn();
  const endName = sessionEnd ? String(sessionEnd.name || 'Residente R2') : '';
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  const overlay = document.createElement('div');
  overlay.id = 'calot-eval-overlay';
  overlay.className = `eval-overlay is-scanning${sessionEnd ? ' is-session-end' : ''}`;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Evaluación de CALOT-OS');

  overlay.innerHTML = `
    <canvas class="eval-code-canvas" aria-hidden="true"></canvas>
    <div class="eval-scanlines" aria-hidden="true"></div>
    <div class="eval-flash" aria-hidden="true"></div>

    <button type="button" class="eval-skip mono" data-eval-skip>Saltar ›</button>

    <div class="eval-stage">
      <!-- FASE 1: CALCULANDO / CÓDIGO ROJO -->
      <section class="eval-calc-view" data-eval-calc>
        <div class="eval-reticle" aria-hidden="true">
          <span class="eval-ring is-a"></span>
          <span class="eval-ring is-b"></span>
          <span class="eval-ring is-c"></span>
          <div class="eval-core-readout mono">
            <span class="eval-core-tag">CALOT//EVAL</span>
            <strong data-eval-pct>00%</strong>
          </div>
        </div>
        <div class="eval-hud-bar mono">
          <span class="eval-pulse-dot"></span>
          <span data-eval-status>ANALIZANDO RESPUESTAS…</span>
        </div>
        <div class="eval-console mono" data-eval-console aria-live="polite"></div>
      </section>

      <!-- FASE 2: REVEAL GIGANTE DE LA CALIFICACIÓN -->
      <section class="eval-result-view" data-eval-result hidden>
        <p class="eval-result-kicker mono">${esc(modeLabel.toUpperCase())}</p>
        <div class="eval-score-huge${scorePct >= 80 ? ' is-high' : scorePct >= 60 ? ' is-mid' : ' is-low'}" data-eval-score>
          <span>${scorePct}</span><em>%</em>
        </div>
        ${total > 0 ? `<p class="eval-score-sub mono">${correct} / ${total}${detail ? ` · ${esc(detail)}` : ''}</p>` : (detail ? `<p class="eval-score-sub mono">${esc(detail)}</p>` : '')}

        ${sessionEnd ? `
        <div class="eval-end" data-eval-end>
          <div class="eval-end-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="27" fill="rgba(255,45,70,.12)" stroke="#ff2d46" stroke-width="2.5"/><path d="M32 14v17" stroke="#ffd2d9" stroke-width="4" stroke-linecap="round"/><path d="M21.5 21.5a15 15 0 1 0 21 0" fill="none" stroke="#ffd2d9" stroke-width="4" stroke-linecap="round"/></svg>
          </div>
          <p class="eval-end-kicker mono">SESIÓN DE EXAMEN FINALIZADA · POR EL MOMENTO</p>
          <div class="eval-name3d-scene" aria-label="${esc(endName)}">
            <div class="eval-name3d" aria-hidden="true">${esc(endName.toUpperCase())}</div>
            <div class="eval-name3d-floor" aria-hidden="true"></div>
          </div>
          <p class="eval-end-msg">Tus respuestas quedaron <b>selladas y enviadas</b> a la Dra. Hernández.<br />La sesión terminó por ahora: puedes dejar el celular.</p>
        </div>` : ''}

        <div class="eval-result-actions" data-eval-actions hidden>
          <button type="button" class="btn eval-cta-btn" data-eval-menu>${sessionEnd ? 'Cerrar sesión' : '← Regresar al menú'}</button>
          ${onReplay ? `<button type="button" class="btn btn-metal" data-eval-replay>Volver a jugar</button>` : ''}
          ${reviewItems.length ? `<button type="button" class="btn btn-ghost" data-eval-review-toggle>Revisar respuestas (${reviewItems.length})</button>` : ''}
        </div>

        ${reviewItems.length ? `
          <div class="eval-review-panel" data-eval-review hidden>
            <div class="eval-review-head">
              <span class="mono">REVISIÓN DETALLADA · ${correct}/${total} ACIERTOS</span>
              <button type="button" class="btn btn-sm btn-ghost" data-eval-review-toggle>Ocultar</button>
            </div>
            <div class="eval-review-list">
              ${reviewItems.map((it, idx) => `
                <article class="eval-review-item ${it.ok ? 'is-ok' : 'is-bad'}">
                  <div class="eval-review-top">
                    <span class="mono eval-review-idx">#${String(idx + 1).padStart(2, '0')}</span>
                    <span class="eval-review-badge mono ${it.ok ? 'is-ok' : 'is-bad'}">${it.ok ? '✓ Correcta' : '✗ Incorrecta'}</span>
                  </div>
                  <p class="eval-review-q"><strong>${esc(it.q || '')}</strong></p>
                  ${it.picked !== undefined && it.picked !== null && it.picked !== '' ? `<p class="eval-review-ans"><span>Tu respuesta:</span> ${esc(it.picked)}</p>` : ''}
                  ${!it.ok && it.right ? `<p class="eval-review-right"><span>Respuesta correcta:</span> ${esc(it.right)}</p>` : ''}
                  ${it.exp ? `<p class="eval-review-exp">${esc(it.exp)}</p>` : ''}
                </article>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </section>
    </div>
  `;

  document.body.appendChild(overlay);

  const canvas = overlay.querySelector('.eval-code-canvas');
  const ctx = canvas.getContext('2d');
  const flashEl = overlay.querySelector('.eval-flash');
  const pctEl = overlay.querySelector('[data-eval-pct]');
  const statusEl = overlay.querySelector('[data-eval-status]');
  const consoleEl = overlay.querySelector('[data-eval-console]');
  const calcView = overlay.querySelector('[data-eval-calc]');
  const resultView = overlay.querySelector('[data-eval-result]');
  const skipBtn = overlay.querySelector('[data-eval-skip]');

  // Audios de la secuencia (se desbloquean en este mismo toque para iOS Safari / Android)
  unlockPortalAudio();
  const riser = soundOn ? makeAudio(RISER_CLIP, { volume: 0.72 }) : null;
  const calcName = pickRandom('calc', CALC_CLIPS);
  const calcAudio = voiceOn && calcName ? makeAudio(calcName, { volume: 1.0 }) : null;
  const roastPool = scorePct >= 95 ? ['eval-roast-seguro', ...ROAST_CLIPS] : ROAST_CLIPS;
  const roastName = scorePct >= 95 ? 'eval-roast-seguro' : pickRandom('roast', roastPool);
  const roastAudio = voiceOn && roastName ? makeAudio(roastName, { volume: 1.0 }) : null;
  const terrorAudio = !soundOn ? null : sessionEnd ? makeSfx('darkbed.mp3', { loop: true, volume: 0 }) : makeAudio(TERROR_CLIP, { loop: true, volume: 0.0 });
  const endSwoosh = sessionEnd ? makeSfx('whsh.mp3', { volume: 0.85 }) : null;
  const endPower = sessionEnd ? makeSfx('power-on.mp3', { volume: 0.55 }) : null;
  primeAudioForMobile(endSwoosh);
  primeAudioForMobile(endPower);
  primeAudioForMobile(calcAudio);
  primeAudioForMobile(roastAudio);
  primeAudioForMobile(terrorAudio);

  let closed = false;
  let revealed = false;
  let rafId = 0;
  let startMs = performance.now();
  let lastFlashMs = 0;
  let lastConsoleIdx = -1;
  const timers = [];

  // Canvas de código rojo rápido estilo robot/terminal
  let cols = [];
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const colW = w < 640 ? 64 : 88;
    const count = Math.ceil(w / colW) + 1;
    cols = Array.from({ length: count }, (_, i) => ({
      x: i * colW + 6,
      y: Math.random() * h,
      speed: 2.2 + Math.random() * 4.5,
      token: CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)],
      alpha: 0.22 + Math.random() * 0.55,
    }));
  };
  resize();
  window.addEventListener('resize', resize);

  const triggerFlash = (strong = false) => {
    if (!flashEl || closed) return;
    flashEl.classList.remove('is-pulse', 'is-impact');
    void flashEl.offsetWidth;
    flashEl.classList.add(strong ? 'is-impact' : 'is-pulse');
  };

  const revealScore = () => {
    if (revealed || closed) return;
    revealed = true;
    try { calcAudio?.pause(); } catch {}
    overlay.classList.remove('is-scanning', 'is-intense');
    overlay.classList.add('is-revealed');
    if (skipBtn) skipBtn.hidden = true;
    if (calcView) calcView.hidden = true;
    if (resultView) resultView.hidden = false;
    triggerFlash(true);

    const actionsEl = overlay.querySelector('[data-eval-actions]');
    const showActions = () => {
      if (closed || !actionsEl) return;
      actionsEl.hidden = false;
      actionsEl.classList.add('is-ready');
    };

    // Justo después del PUM (~0.85 s): entra el ambiente de terror constante + la voz de burla;
    // cuando termina la voz de burla aparece el botón para regresar al menú.
    if (sessionEnd) {
      timers.push(window.setTimeout(() => {
        if (closed) return;
        if (terrorAudio) {
          terrorAudio.volume = 0;
          terrorAudio.play().then(() => fadeAudio(terrorAudio, 0.3, 1800)).catch(() => {});
        }
      }, 850));
      timers.push(window.setTimeout(() => {
        if (closed) return;
        overlay.querySelector('[data-eval-end]')?.classList.add('is-in');
        endSwoosh?.play().catch(() => {});
        timers.push(window.setTimeout(() => endPower?.play().catch(() => {}), 650));
        try { navigator.vibrate?.([60, 40, 120]); } catch {}
      }, 1500));
      timers.push(window.setTimeout(showActions, 3200));
      return;
    }

    timers.push(window.setTimeout(() => {
      if (closed) return;
      if (terrorAudio) {
        terrorAudio.volume = 0;
        terrorAudio.play().then(() => fadeAudio(terrorAudio, 0.34, 1400)).catch(() => {});
      }
      if (roastAudio) {
        roastAudio.addEventListener('ended', showActions, { once: true });
        roastAudio.play().catch(() => {
          timers.push(window.setTimeout(showActions, 1500));
        });
        // Respaldo de seguridad por si el evento ended no dispara
        timers.push(window.setTimeout(showActions, 14500));
      } else {
        timers.push(window.setTimeout(showActions, 1500));
      }
    }, 850));
  };

  const drawFrame = (now) => {
    if (closed) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const riserSynced = riser && !riser.paused && riser.currentTime > 0 && riser.currentTime >= RISER_FROM - 0.5;
    const elapsedSec = riserSynced
      ? riser.currentTime - RISER_FROM
      : (now - startMs) / 1000;
    const progress = Math.max(0, Math.min(1, elapsedSec / BUILD_SEC));

    // Fondo negro con estela rápida
    ctx.fillStyle = revealed ? 'rgba(0, 0, 0, 0.24)' : `rgba(0, 0, 0, ${0.22 - progress * 0.08})`;
    ctx.fillRect(0, 0, w, h);

    if (!revealed) {
      const accel = 1 + Math.pow(progress, 2.2) * 5.2;
      ctx.font = '600 12px "JetBrains Mono", ui-monospace, monospace';
      for (const col of cols) {
        col.y += col.speed * accel;
        if (Math.random() < 0.14 + progress * 0.28) {
          col.token = CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)];
        }
        if (col.y > h + 24) {
          col.y = -18;
          col.speed = 2.4 + Math.random() * 5.0;
        }
        const bright = Math.random() < (0.06 + progress * 0.22);
        ctx.fillStyle = bright
          ? `rgba(255, 120, 138, ${Math.min(0.95, col.alpha + 0.35)})`
          : `rgba(230, 24, 52, ${Math.min(0.88, col.alpha + progress * 0.25)})`;
        ctx.fillText(col.token, col.x, col.y);

        // Números rápidos secundarios
        if (Math.random() < 0.35 + progress * 0.4) {
          ctx.fillStyle = `rgba(180, 12, 34, ${0.25 + progress * 0.35})`;
          ctx.fillText(String(Math.floor(Math.random() * 999999)).padStart(6, '0'), col.x, col.y - 16);
        }
      }

      // Barras horizontales glitch robóticas conforme sube la tensión
      if (progress > 0.45 && Math.random() < progress * 0.35) {
        const gy = Math.random() * h;
        const gh = 1 + Math.random() * (progress > 0.8 ? 5 : 2);
        ctx.fillStyle = `rgba(255, 30, 60, ${0.14 + progress * 0.32})`;
        ctx.fillRect(0, gy, w, gh);
      }

      // Actualizar porcentaje y consola
      const shownPct = Math.min(99, Math.floor(Math.pow(progress, 1.15) * 100));
      if (pctEl) pctEl.textContent = `${String(shownPct).padStart(2, '0')}%`;

      const cIdx = Math.min(CONSOLE_LINES.length - 1, Math.floor(progress * CONSOLE_LINES.length));
      if (cIdx > lastConsoleIdx && consoleEl) {
        lastConsoleIdx = cIdx;
        const p = document.createElement('div');
        p.textContent = CONSOLE_LINES[cIdx];
        consoleEl.appendChild(p);
        while (consoleEl.children.length > 4) consoleEl.firstChild.remove();
      }
      if (progress > 0.65) {
        overlay.classList.add('is-intense');
        if (statusEl) statusEl.textContent = progress > 0.88 ? 'IMPACTO INMINENTE · COMPILANDO…' : 'PROCESANDO VEREDICTO…';
      }

      // Flashes robóticos rojos (más rápidos al final del ascenso)
      const flashGap = progress > 0.82 ? 260 : progress > 0.55 ? 780 : 1900;
      if (now - lastFlashMs > flashGap && Math.random() < (progress > 0.78 ? 0.5 : 0.25)) {
        lastFlashMs = now;
        triggerFlash(false);
      }

      // Disparo exacto al PUM
      if (elapsedSec >= BUILD_SEC - 0.03) {
        revealScore();
      }
    } else {
      // Fondo negro muy sutil con brasas/código tenue mientras está el ambiente de terror
      ctx.font = '600 11px "JetBrains Mono", ui-monospace, monospace';
      for (let i = 0; i < cols.length; i += 3) {
        const col = cols[i];
        col.y += col.speed * 0.28;
        if (col.y > h + 20) col.y = -18;
        ctx.fillStyle = 'rgba(180, 14, 34, 0.11)';
        ctx.fillText(col.token, col.x, col.y);
      }
    }

    rafId = requestAnimationFrame(drawFrame);
  };

  // Arrancar audios
  if (riser) {
    if (RISER_FROM > 0) {
      // Saltar al tramo final del riser (el PUM queda en el segundo BUILD_SEC)
      const seek = () => { try { if (riser.currentTime < RISER_FROM - 0.5) riser.currentTime = RISER_FROM; } catch {} };
      seek();
      riser.addEventListener('loadedmetadata', seek, { once: true });
      riser.addEventListener('playing', seek, { once: true });
    }
    riser.play().catch(() => {});
  }
  if (calcAudio) {
    timers.push(window.setTimeout(() => {
      if (closed || revealed) return;
      if (riser) fadeAudio(riser, 0.46, 350);
      calcAudio.addEventListener('ended', () => {
        if (!closed && !revealed && riser) fadeAudio(riser, 0.96, 600);
      }, { once: true });
      calcAudio.play().catch(() => {
        if (riser) fadeAudio(riser, 0.92, 400);
      });
    }, 1100));
  }

  const cleanup = (fadeOut = true) => {
    if (closed) return;
    closed = true;
    cancelAnimationFrame(rafId);
    timers.forEach(clearTimeout);
    window.removeEventListener('resize', resize);
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('hashchange', onHash);
    try { calcAudio?.pause(); } catch {}
    try { roastAudio?.pause(); } catch {}
    try { endSwoosh?.pause(); endPower?.pause(); } catch {}
    if (riser) {
      if (fadeOut) fadeAudio(riser, 0, 280, true);
      else { try { riser.pause(); } catch {} }
    }
    if (terrorAudio) {
      if (fadeOut) fadeAudio(terrorAudio, 0, 380, true);
      else { try { terrorAudio.pause(); } catch {} }
    }
    document.body.style.overflow = prevOverflow;
    overlay.classList.add('is-leaving');
    window.setTimeout(() => overlay.remove(), fadeOut ? 260 : 0);
    if (activeEvalCleanup === doClose) activeEvalCleanup = null;
  };

  const doClose = () => cleanup(true);
  activeEvalCleanup = doClose;

  const onHash = () => cleanup(false);
  const onKey = (e) => {
    if (e.key === 'Escape' && revealed) {
      doClose();
      onClose?.();
    }
  };
  document.addEventListener('keydown', onKey);
  window.addEventListener('hashchange', onHash);

  overlay.addEventListener('click', (e) => {
    if (e.target.closest('[data-eval-skip]')) {
      if (riser && !revealed) {
        try {
          if (calcAudio) calcAudio.pause();
          riser.volume = 0.92;
          riser.currentTime = Math.max(0, PUM_TIME_SEC - 0.15);
          riser.play().catch(() => {});
        } catch {}
      }
      revealScore();
      return;
    }
    if (e.target.closest('[data-eval-review-toggle]')) {
      const panel = overlay.querySelector('[data-eval-review]');
      if (panel) {
        panel.hidden = !panel.hidden;
        if (!panel.hidden) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }
    if (e.target.closest('[data-eval-replay]')) {
      doClose();
      onReplay?.();
      return;
    }
    if (e.target.closest('[data-eval-menu]')) {
      doClose();
      onClose?.();
      if (location.hash.startsWith('#/juegos?')) {
        location.hash = '#/juegos';
      }
      return;
    }
    if (e.target.closest('[data-eval-close]')) {
      doClose();
      onClose?.();
    }
  });

  rafId = requestAnimationFrame(drawFrame);
  return doClose;
}
