/* ==========================================================================
   CALOT-OS · Black Ops · Motor de Bloqueo Simultáneo y Examen Anti-Trampa R2
   Mientras la Dra. Hernández prepara el examen, los R2 navegan libremente.
   En cuanto activa el examen, a todos se les bloquea la interfaz con una
   animación simultánea y entran al examen blindado bajo vigilancia en vivo.
   ========================================================================== */

import { store, questions, loadStoreData } from '../store.js?v=20261122c';
import { perfil, perfilId, isAdscrito, setPerfil, markBody, profileByCode, R2_RESIDENTS } from '../perfil.js?v=20261122c';
import { BOOT_KEY, ROLE_KEY } from './boot.js?v=20261122c';
import { esc, toast } from '../ui.js';
import { playUiSfx } from './audio.js?v=20261122c';
import { unlockPortalAudio, getEngine } from './portal-audio.js?v=20261122c';
import { playCalotEvaluation } from './eval-cinematic.js?v=20261122c';
import { detectCurrentBrowser } from './browser-check.js?v=20261122c';

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

/** Orden de preguntas que vio un residente (posición mostrada → pregunta original) en un examen cargado. */
export function examOrderFor(sessionId, residentId, n) {
  return seededShuffle(Array.from({ length: n }, (_, i) => i), `${sessionId}:${residentId}:questions`);
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
        import('../data/juegos_argos.js?v=20261122c'),
        import('../data/juegos_drive_v1.js?v=20261122c'),
        import('../data/juegos_drive_v2.js?v=20261122c'),
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
let blockedRoot = null;
let pillEl = null;
let lockedHash = '';

const BROWSER = detectCurrentBrowser();
export const currentBrowserInfo = () => BROWSER;

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const MIN_EXIT_SEC = 2; // salidas más cortas = «parpadeo» (no cuentan)
const COUNTED = new Set(['salida', 'recarga']);
const EXIT_VERB = { salida: 'salió', recarga: 'recargó/cerró', interrupcion: 'interrupción' };

const storeKey = (sessionId, id) => `bo:exam:${sessionId}:${id}`;
function loadLocal(sessionId, id) {
  try { return JSON.parse(localStorage.getItem(storeKey(sessionId, id)) || 'null'); } catch { return null; }
}
function saveLocal(sessionId, id, data) {
  try { localStorage.setItem(storeKey(sessionId, id), JSON.stringify(data)); } catch {}
}

const fmtSec = (s) => (s < 10 ? `${(Math.round(s * 10) / 10).toString()} s` : `${Math.round(s)} s`);

/** Mientras el examen está activo, ninguna otra vista puede cambiar el hash. */
export function isExamLockActive() {
  return Boolean(lockdownRoot || blockedRoot);
}

export function initExamLockdownMonitor() {
  if (mounted) return;
  mounted = true;
  armExamAudioUnlock();

  const isOnAdscritoView = () => {
    const h = (location.hash || '').replace(/^#\/?/, '').split('?')[0].toLowerCase();
    return h === 'adscrito';
  };

  const effectiveResident = () => {
    const p = perfil();
    if (R2_RESIDENTS.some((r) => r.id === p.id)) return p;
    return R2_RESIDENTS.find((r) => r.id === 'r2_mario') || R2_RESIDENTS[0];
  };

  // Si algo intenta mover el hash detrás del examen, se regresa al instante
  window.addEventListener('hashchange', () => {
    if (isExamLockActive() && lockedHash && location.hash !== lockedHash) {
      try { history.replaceState(null, '', lockedHash); } catch {}
    }
  }, true);

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
      ${BROWSER.allowed ? '' : `<span class="bo-pill-warn">⚠️ ${esc(BROWSER.name)}: para el examen usa Safari (iPhone) o Chrome (Android)</span>`}
      <button type="button" class="bo-pill-btn mono" data-bo-switch>Cambiar R2</button>
      <button type="button" class="bo-pill-btn mono" data-bo-docente style="border-color:rgba(255,58,82,.55);color:#ff8096">Control Docente (HE)</button>
    `;
  };

  let polling = false;
  const poll = async () => {
    if (polling) return;
    polling = true;
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
        if (blockedRoot) closeBlockedScreen();
        return;
      }

      const p = effectiveResident();
      const extra = lockdownRoot?._payload?.() || {};
      // Examen ya entregado en este dispositivo: se re-envía hasta que el servidor lo registre
      if (!lockdownRoot && activeSessionId) {
        const local = loadLocal(activeSessionId, p.id);
        if (local?.submitted) Object.assign(extra, { sessionId: activeSessionId, submitted: local.submitted, events: local.events || [] });
      }
      const res = await apiPost({
        action: 'heartbeat',
        id: p.id,
        name: p.name,
        section: lockdownRoot ? 'Examen' : currentSectionLabel(),
        browser: BROWSER,
        ...extra,
      });
      const exam = res?.exam;
      const me = res?.me;
      ensureExplorePill(Boolean(exam?.active));

      const localDone = exam?.active && loadLocal(exam.sessionId, p.id)?.submitted;
      if (exam?.active && me?.state !== 'entregado' && !localDone) {
        if (!BROWSER.allowed) {
          activeSessionId = exam.sessionId;
          if (!blockedRoot) launchBlockedScreen(exam, p);
        } else if (activeSessionId !== exam.sessionId || !lockdownRoot) {
          activeSessionId = exam.sessionId;
          launchLockdownOverlay(exam, me, p);
        } else if (lockdownRoot && typeof lockdownRoot._syncRemoteMe === 'function') {
          lockdownRoot._syncRemoteMe(exam, me);
        }
      } else {
        if (exam?.active) activeSessionId = exam.sessionId;
        if (blockedRoot) closeBlockedScreen();
        if (lockdownRoot && !lockdownRoot.dataset.submitting) {
          if (exam?.active && me?.state === 'entregado' && typeof lockdownRoot._syncRemoteMe === 'function') {
            lockdownRoot._syncRemoteMe(exam, me); // cierre docente («Calificar así»)
          } else if (!exam?.active) {
            closeLockdownOverlay();
            if (exam?.ended) toast('La Dra. Hernández finalizó la sesión del examen.');
          }
        }
      }
    } catch {
      // Sin red temporal: sigue intentando en el siguiente ciclo
    } finally {
      polling = false;
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
  if (!blockedRoot) document.body.classList.remove('is-exam-locked');
}

function closeBlockedScreen() {
  if (!blockedRoot) return;
  blockedRoot.remove();
  blockedRoot = null;
  if (!lockdownRoot) document.body.classList.remove('is-exam-locked');
}

/* ------------------------------------------------------------------
   Pantalla para navegadores no permitidos (Edge, Opera, Chrome iOS…)
   ------------------------------------------------------------------ */
function launchBlockedScreen(exam, p) {
  closeLockdownOverlay();
  lockedHash = location.hash;
  document.body.classList.add('is-exam-locked');
  const root = document.createElement('div');
  root.className = 'bo-lockdown bo-blocked';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Navegador no permitido');
  const link = `${location.origin}${location.pathname}`;
  root.innerHTML = `
    <div class="bo-takeover-stage">
      <div class="bo-takeover-badge mono">⛔ PROTOCOLO BLACK OPS · NAVEGADOR NO PERMITIDO</div>
      <div class="bo-takeover-eye"><img src="assets/calot-hero.png?v=20261122c" alt="" width="96" height="96" /></div>
      <h1>CAMBIA DE <em>NAVEGADOR</em></h1>
      <p class="bo-takeover-lead">Este examen solo se puede presentar en <b>Safari (iPhone)</b> o <b>Chrome (Android)</b>. Copia el link y ábrelo ahí.</p>
      <div class="bo-takeover-rules mono">
        <div><span>RESIDENTE</span><b>${esc(p.name)} (R2)</b></div>
        <div><span>DETECTADO</span><b class="bo-browser-bad">${esc(BROWSER.label)}</b></div>
        <div><span>EXAMEN</span><b>${esc(exam.topicLabel || 'Cirugía General R2')}</b></div>
      </div>
      ${BROWSER.reason ? `<p class="muted mono" style="margin:0;font-size:12px">${esc(BROWSER.reason)}</p>` : ''}
      <div class="bo-blocked-link mono">${esc(link)}</div>
      <button type="button" class="btn btn-glow lg" data-bo-copy-link>Copiar link</button>
      <p class="muted" style="margin:0;font-size:13px">La Dra. Hernández ya ve en su panel qué navegador estás usando.</p>
    </div>
  `;
  root.addEventListener('click', async (e) => {
    if (!e.target.closest('[data-bo-copy-link]')) return;
    try {
      await navigator.clipboard.writeText(link);
      toast('Link copiado. Ábrelo en Safari o Chrome.');
    } catch {
      toast('Mantén presionado el link para copiarlo.');
    }
  });
  document.body.appendChild(root);
  blockedRoot = root;
}

/* ------------------------------------------------------------------
   Texto dibujado en canvas: la pregunta no existe como texto en el DOM,
   así que los asistentes de IA del navegador no la pueden leer.
   ------------------------------------------------------------------ */
function wrapLines(ctx, text, maxW) {
  const out = [];
  for (const para of String(text || '').split(/\n+/)) {
    const words = para.split(/\s+/).filter(Boolean);
    let line = '';
    for (let w of words) {
      // Palabras más anchas que la línea: partir por letras
      while (ctx.measureText(w).width > maxW && w.length > 1) {
        let cut = w.length - 1;
        while (cut > 1 && ctx.measureText(w.slice(0, cut)).width > maxW) cut -= 1;
        if (line) { out.push(line); line = ''; }
        out.push(w.slice(0, cut));
        w = w.slice(cut);
      }
      const test = line ? `${line} ${w}` : w;
      if (ctx.measureText(test).width <= maxW || !line) line = test;
      else { out.push(line); line = w; }
    }
    if (line) out.push(line);
  }
  return out.length ? out : [''];
}

function paintTextCanvas(canvas) {
  const text = canvas._boText;
  if (text == null) return;
  const host = canvas.parentElement;
  if (!host) return;
  const cs = getComputedStyle(canvas);
  const width = Math.max(40, Math.floor(canvas.getBoundingClientRect().width || host.clientWidth));
  const fontSize = parseFloat(cs.fontSize) || 16;
  const lineH = Math.round(fontSize * (parseFloat(canvas.dataset.lh || '1.5') || 1.5));
  const font = `${cs.fontWeight || 500} ${fontSize}px ${cs.fontFamily || 'system-ui, sans-serif'}`;
  const dpr = Math.min(3, window.devicePixelRatio || 1);
  const ctx = canvas.getContext('2d');
  ctx.font = font;
  const lines = wrapLines(ctx, text, width - 1);
  const height = Math.ceil(lines.length * lineH + fontSize * 0.25);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.font = font;
  ctx.fillStyle = cs.color || '#f3edf0';
  ctx.textBaseline = 'top';
  const pad = Math.round((lineH - fontSize) / 2);
  lines.forEach((ln, i) => ctx.fillText(ln, 0, i * lineH + pad));
}

function paintAllCanvases(scope) {
  scope.querySelectorAll('canvas[data-bo-text]').forEach((c) => paintTextCanvas(c));
}

/* ------------------------------------------------------------------
   Examen blindado
   ------------------------------------------------------------------ */
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
    [1.6, 2.8, 3.9, 4.9, 5.7, 6.4, 7.0, 7.5].forEach((at, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = i >= 5 ? 'triangle' : 'sine';
      o.frequency.setValueAtTime(i >= 5 ? 330 : 190 + i * 35, t0 + at);
      o.frequency.exponentialRampToValueAtTime(i >= 5 ? 220 : 62, t0 + at + 0.16);
      g.gain.setValueAtTime(0.0001, t0 + at);
      g.gain.exponentialRampToValueAtTime(i >= 5 ? 0.18 : 0.24, t0 + at + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + 0.22);
      o.connect(g); g.connect(dry || ctx.destination);
      o.start(t0 + at); o.stop(t0 + at + 0.24);
    });
  } catch {}
}
/* ------------------------------------------------------------------
   Audio de arranque del examen
   Aviso «aguas» suave → voz de CALOT → música de misterio baja (filtrada,
   sin agudos) que se desvanece al abrir la primera pregunta.
   ------------------------------------------------------------------ */
const EXAM_VOICE_SRC = 'assets/voz/examen-inicio.mp3';
const EXAM_VOICE_TEXT = 'Atención. El examen ha comenzado. Cuidado al hacer trampa: CALOT está vigilando.';
const EXAM_BED_SRC = 'assets/sfx/sombra.mp3';
const EXAM_BED_VOL = 0.24;
const IS_IOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let examPrimed = null;
let examBed = null; // { el, gain?, ctx? }

function primeExamAudio() {
  if (examPrimed) return examPrimed;
  const mk = (src) => {
    const a = new Audio(src);
    a.preload = 'auto';
    a.playsInline = true;
    a.setAttribute('playsinline', '');
    return a;
  };
  examPrimed = { voice: mk(EXAM_VOICE_SRC), bed: mk(EXAM_BED_SRC), voiceOk: true, unlocking: false };
  examPrimed.bed.loop = true;
  examPrimed.voice.addEventListener('error', () => { examPrimed.voiceOk = false; }, { once: true });
  return examPrimed;
}

/** En celular, un toque previo del residente «desbloquea» estos audios para que suenen al llegar el examen. */
function armExamAudioUnlock() {
  const once = () => {
    window.removeEventListener('pointerdown', once, true);
    window.removeEventListener('keydown', once, true);
    try { unlockPortalAudio(); } catch {}
    const p = primeExamAudio();
    if (examBed) return;
    p.unlocking = true;
    [p.voice, p.bed].forEach((a) => {
      try {
        a.muted = true;
        const pr = a.play();
        const done = () => { if (p.unlocking) { try { a.pause(); a.currentTime = 0; } catch {} } a.muted = false; };
        if (pr?.then) pr.then(done, done); else done();
      } catch { a.muted = false; }
    });
    setTimeout(() => { p.unlocking = false; }, 1500);
  };
  window.addEventListener('pointerdown', once, true);
  window.addEventListener('keydown', once, true);
}

/** Dos pares de pulsos medios/graves con filtro: avisa sin espantar. */
function playSoftExamAlarm() {
  try {
    const eng = getEngine();
    if (!eng || eng.ctx.state !== 'running') return;
    const { ctx, dry } = eng;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1400;
    lp.connect(dry || ctx.destination);
    const t0 = ctx.currentTime + 0.03;
    [[0, 392], [0.34, 294], [1.05, 392], [1.39, 294]].forEach(([at, f]) => {
      const o = ctx.createOscillator();
      const o2 = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o2.type = 'triangle';
      o.frequency.value = f;
      o2.frequency.value = f / 2;
      g.gain.setValueAtTime(0.0001, t0 + at);
      g.gain.exponentialRampToValueAtTime(0.2, t0 + at + 0.03);
      g.gain.setValueAtTime(0.2, t0 + at + 0.16);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + 0.3);
      o.connect(g); o2.connect(g); g.connect(lp);
      o.start(t0 + at); o2.start(t0 + at);
      o.stop(t0 + at + 0.32); o2.stop(t0 + at + 0.32);
    });
  } catch {}
}

function setBedLevel(v, sec = 0.6) {
  if (!examBed) return;
  try {
    if (examBed.gain) {
      const t = examBed.ctx.currentTime;
      examBed.gain.gain.cancelScheduledValues(t);
      examBed.gain.gain.setValueAtTime(examBed.gain.gain.value, t);
      examBed.gain.gain.linearRampToValueAtTime(v, t + sec);
    } else {
      const el = examBed.el;
      const from = el.volume;
      const steps = Math.max(1, Math.round(sec * 20));
      let i = 0;
      clearInterval(examBed.fade);
      examBed.fade = setInterval(() => {
        i += 1;
        el.volume = Math.max(0, Math.min(1, from + ((v - from) * i) / steps));
        if (i >= steps) clearInterval(examBed.fade);
      }, 50);
    }
  } catch {}
}

function startExamBed() {
  if (examBed) return;
  const p = primeExamAudio();
  p.unlocking = false;
  const el = p.bed;
  const eng = getEngine();
  try {
    if (eng && eng.ctx.state === 'running') {
      // Pasa por un filtro pasa-bajos: misterio suave, nada chillante
      if (!el._boSrc) {
        el._boSrc = eng.ctx.createMediaElementSource(el);
        el._boLp = eng.ctx.createBiquadFilter();
        el._boLp.type = 'lowpass';
        el._boLp.frequency.value = 2200;
        el._boGain = eng.ctx.createGain();
        el._boSrc.connect(el._boLp); el._boLp.connect(el._boGain); el._boGain.connect(eng.ctx.destination);
      }
      el._boGain.gain.value = 0.0001;
      el.volume = 1;
      examBed = { el, gain: el._boGain, ctx: eng.ctx };
    } else if (!IS_IOS) {
      el.volume = 0;
      examBed = { el };
    } else {
      return; // iOS sin Web Audio no respeta el volumen: mejor sin música que a todo volumen
    }
    el.muted = false;
    el.currentTime = 0;
    el.play().catch(() => {});
    setBedLevel(EXAM_BED_VOL, 2);
  } catch {}
}

function stopExamBed(fadeMs = 1200) {
  if (!examBed) return;
  const bed = examBed;
  setBedLevel(0.0001, fadeMs / 1000);
  setTimeout(() => {
    try { bed.el.pause(); bed.el.currentTime = 0; } catch {}
    clearInterval(bed.fade);
  }, fadeMs + 80);
  examBed = null;
}

function speakExamWarning() {
  const p = primeExamAudio();
  const duck = () => setBedLevel(EXAM_BED_VOL * 0.4, 0.4);
  const restore = () => setBedLevel(EXAM_BED_VOL, 1.2);
  const tts = () => {
    try {
      const synth = window.speechSynthesis;
      if (!synth) return;
      const u = new SpeechSynthesisUtterance(EXAM_VOICE_TEXT);
      u.lang = 'es-MX';
      const v = synth.getVoices().find((x) => /^es[-_]MX/i.test(x.lang)) || synth.getVoices().find((x) => /^es/i.test(x.lang));
      if (v) u.voice = v;
      u.rate = 0.95;
      u.pitch = 0.85;
      u.onend = restore;
      duck();
      synth.cancel();
      synth.speak(u);
    } catch {}
  };
  if (!p.voiceOk) { tts(); return; }
  try {
    const a = p.voice;
    a.muted = false;
    a.volume = 1;
    a.currentTime = 0;
    a.onended = restore;
    a.onerror = () => { p.voiceOk = false; tts(); };
    duck();
    a.play().catch(() => { if (!p.voiceOk) return; tts(); });
  } catch { tts(); }
}

/** Fase 1 arranca con: aviso suave → voz de CALOT → música baja. */
function startExamAudioSequence(timers) {
  playSoftExamAlarm();
  timers.push(setTimeout(startExamBed, 900));
  timers.push(setTimeout(speakExamWarning, 1700));
}

function stopExamAudio() {
  stopExamBed(1200);
  try { examPrimed?.voice?.pause(); } catch {}
  try { window.speechSynthesis?.cancel(); } catch {}
}

/* ------------------------------------------------------------------
   Fase 1 · La app se va bloqueando pieza por pieza (≈9 s)
   Fase 3 · «Evaluación en curso · no intentes hacer trampa» (≈6 s)
   ------------------------------------------------------------------ */
const PRELOCK_MS = 9000;
const EVALPHASE_MS = 6500;
const PRELOCK_MSGS = [
  'LA DRA. HERNÁNDEZ INICIÓ EL EXAMEN · TOMANDO EL CONTROL…',
  'DESCONECTANDO RESÚMENES, PUEM Y BANCO DE PREGUNTAS…',
  'BLOQUEANDO NAVEGACIÓN, ASISTENTE IA Y COPIADO…',
  'SELLANDO PANTALLA · NO TOQUES NADA…',
];

function synthBlip(freq = 520, dur = 0.07, vol = 0.12, type = 'square') {
  try {
    const eng = getEngine();
    if (!eng || eng.ctx.state !== 'running') return;
    const { ctx, dry } = eng;
    const t0 = ctx.currentTime + 0.005;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    o.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.55), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(dry || ctx.destination);
    o.start(t0); o.stop(t0 + dur + 0.02);
  } catch {}
}

function collectLockPieces(max = 44) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const sel = '.hud a, .hud button, .tabbar a, .fab, #view .card, #view h1, #view h2, #view h3, #view .btn, #view a, #view img, #view canvas, #view li, #view input, #view select';
  const seen = new Set();
  const out = [];
  document.querySelectorAll(sel).forEach((el) => {
    if (el.closest('#bo-lockdown-root, #boot-gate')) return;
    const r = el.getBoundingClientRect();
    if (r.width < 26 || r.height < 14) return;
    if (r.bottom < 0 || r.top > vh || r.right < 0 || r.left > vw) return;
    if (r.width * r.height > vw * vh * 0.55) return;
    const key = `${Math.round(r.left / 6)}:${Math.round(r.top / 6)}:${Math.round(r.width / 6)}:${Math.round(r.height / 6)}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ top: Math.max(0, r.top), left: Math.max(0, r.left), width: Math.min(vw, r.right) - Math.max(0, r.left), height: Math.min(vh, r.bottom) - Math.max(0, r.top) });
  });
  out.sort((a, b) => (a.top + a.left * 0.25) - (b.top + b.left * 0.25));
  if (out.length <= max) return out;
  const step = out.length / max;
  return Array.from({ length: max }, (_, i) => out[Math.floor(i * step)]);
}

/** Recorre la pantalla del residente y sella cada pieza de la app con un candado rojo. */
function runPrelock(root, timers) {
  return new Promise((resolve) => {
    const layer = root.querySelector('[data-bo-pieces]');
    const msgEl = root.querySelector('[data-bo-prelock-msg]');
    const pctEl = root.querySelector('[data-bo-prelock-count]');
    const barEl = root.querySelector('[data-bo-prelock-bar]');
    const pieces = collectLockPieces();
    const tecleo = null; // sin tecleo: la voz de CALOT y la música de misterio llevan esta fase
    startExamAudioSequence(timers);
    root._prelockAudios = [];
    try { navigator.vibrate?.([120, 60, 120]); } catch {}

    const t0 = performance.now();
    const lockEnd = PRELOCK_MS - 1500; // el último segundo y medio se cierran las persianas
    const n = Math.max(1, pieces.length);
    pieces.forEach((r, i) => {
      // arranca lento y se acelera, como si el sistema fuera ganando terreno
      const at = 450 + Math.pow(i / n, 0.72) * (lockEnd - 600);
      timers.push(setTimeout(() => {
        if (!root.isConnected || !layer) return;
        const d = document.createElement('div');
        d.className = `bo-lockpiece${r.width * r.height > 2600 ? ' has-lock' : ''}`;
        d.style.cssText = `top:${r.top}px;left:${r.left}px;width:${r.width}px;height:${r.height}px`;
        d.innerHTML = '<i></i>';
        layer.appendChild(d);
        synthBlip(180 + (i / n) * 260, 0.07, 0.035 + (i / n) * 0.03, 'triangle');
        if (i % 9 === 8) { try { navigator.vibrate?.(35); } catch {} }
      }, at));
    });
    PRELOCK_MSGS.forEach((m, i) => {
      timers.push(setTimeout(() => { if (msgEl) msgEl.textContent = m; }, (i * lockEnd) / PRELOCK_MSGS.length));
    });

    const tick = () => {
      if (!root.isConnected) return;
      const k = Math.min(1, (performance.now() - t0) / lockEnd);
      document.documentElement.style.setProperty('--bo-prelock-k', k.toFixed(3));
      if (pctEl) pctEl.textContent = `${Math.round(k * 100)}%`;
      if (barEl) barEl.style.width = `${k * 100}%`;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    timers.push(setTimeout(() => {
      if (!root.isConnected) return;
      if (msgEl) msgEl.textContent = 'APLICACIÓN BLOQUEADA';
      root.classList.add('is-shutting');
      const sw = makeSfxAudio('swoosh.mp3', 0.55);
      sw?.play().catch(() => {});
      try { tecleo?.pause(); } catch {}
      try { navigator.vibrate?.(180); } catch {}
    }, lockEnd));
    timers.push(setTimeout(() => {
      document.body.classList.remove('is-exam-prelock');
      document.documentElement.style.removeProperty('--bo-prelock-k');
      root.classList.remove('is-prelock', 'is-shutting');
      root.querySelector('[data-bo-prelock]')?.remove();
      resolve();
    }, PRELOCK_MS));
  });
}

function strikeRuleText(exam) {
  if (exam.strictMode === '1strike') return 'La 1.ª salida de pantalla bloquea tu examen';
  if (exam.strictMode === 'warn') return 'Cada salida de pantalla queda registrada con su tiempo';
  return 'A la 2.ª salida de pantalla tu examen se bloquea';
}

/** Pantalla intermedia: evaluación en curso y advertencia anti-trampa. */
function runEvalPhase(root, exam, timers) {
  return new Promise((resolve) => {
    const el = root.querySelector('[data-bo-evalphase]');
    if (!el) { resolve(); return; }
    el.hidden = false;
    root.classList.add('is-evalphase');
    const latido = makeSfxAudio('latido.mp3', 0.45);
    latido?.play().catch(() => {});
    root._evalAudios = [latido];
    const rules = [...el.querySelectorAll('[data-bo-rule]')];
    rules.forEach((li, i) => timers.push(setTimeout(() => {
      li.classList.add('is-on');
      synthBlip(180 + i * 60, 0.12, 0.14, 'triangle');
    }, 700 + i * 650)));
    const cnt = el.querySelector('[data-bo-eval-count]');
    const bar = el.querySelector('[data-bo-eval-bar]');
    const t0 = performance.now();
    const tick = () => {
      if (!root.isConnected) return;
      const k = Math.min(1, (performance.now() - t0) / EVALPHASE_MS);
      if (bar) bar.style.width = `${k * 100}%`;
      const left = Math.ceil((EVALPHASE_MS - (performance.now() - t0)) / 1000);
      if (cnt) cnt.textContent = left > 0 ? `PRIMERA PREGUNTA EN ${left}…` : 'ADELANTE';
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    timers.push(setTimeout(() => {
      try { latido?.pause(); } catch {}
      el.hidden = true;
      root.classList.remove('is-evalphase');
      resolve();
    }, EVALPHASE_MS));
  });
}

async function launchLockdownOverlay(exam, initialMe, residentProfile = null) {
  closeLockdownOverlay();
  closeBlockedScreen();
  unlockPortalAudio();
  document.body.classList.add('is-exam-locked');
  lockedHash = location.hash;
  try {
    const aiDrawer = document.getElementById('calot-ai-drawer');
    if (aiDrawer) aiDrawer.hidden = true;
    document.getElementById('modal')?.classList.remove('open');
    document.getElementById('fab-menu')?.classList.remove('open');
  } catch {}

  const p = residentProfile || perfil();
  const canReturnToDocente = isAdscrito();
  const persisted = loadLocal(exam.sessionId, p.id);
  const resuming = Boolean(persisted?.started);

  const root = document.createElement('div');
  root.id = 'bo-lockdown-root';
  root.className = `bo-lockdown${resuming ? '' : ' is-takeover is-prelock'}`;
  if (!resuming) document.body.classList.add('is-exam-prelock');
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Examen Departamental R2 · Bloqueo Activo');
  document.body.appendChild(root);
  lockdownRoot = root;

  // Secuencia sonora de bloqueo de 8 s: alerta + glitch + riser + impacto al final
  let takeoverAudios = [];
  let riserAudio = null;
  let impactAudio = null;
  let alertAudio = null;
  let glitchAudio = null;
  if (!resuming) {
    alertAudio = null; // el aviso ya sonó al inicio, suave
    glitchAudio = makeSfxAudio('glitch.mp3', 0.45);
    riserAudio = makeSfxAudio('riser.mp3', 0.82);
    impactAudio = makeSfxAudio('impacto.mp3', 0.92);
    takeoverAudios = [alertAudio, glitchAudio, riserAudio, impactAudio].filter(Boolean);
  }
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
    <div class="bo-takeover-stage" data-bo-takeover ${resuming ? 'hidden' : ''}>
      <div class="bo-takeover-badge mono"><i class="bo-live-led"></i>PROTOCOLO BLACK OPS · INTERVENCIÓN REMOTA</div>
      <div class="bo-takeover-reticle" aria-hidden="true">
        <span class="bo-ret-ring is-a"></span>
        <span class="bo-ret-ring is-b"></span>
        <span class="bo-ret-ring is-c"></span>
        <div class="bo-takeover-eye">
          <img src="assets/calot-hero.png?v=20261122c" alt="" width="112" height="112" />
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
    ${resuming ? '' : `
    <div class="bo-prelock" data-bo-prelock aria-live="polite">
      <div class="bo-prelock-layer" data-bo-pieces></div>
      <div class="bo-prelock-banner mono"><i class="bo-live-led"></i><span data-bo-prelock-msg>${esc(PRELOCK_MSGS[0])}</span><b data-bo-prelock-count>0%</b></div>
      <div class="bo-prelock-bar"><i data-bo-prelock-bar></i></div>
      <div class="bo-shutter is-top" aria-hidden="true"><span class="mono">BLACK OPS</span></div>
      <div class="bo-shutter is-bottom" aria-hidden="true"><span class="mono">🔒 EXAMEN R2</span></div>
    </div>
    <div class="bo-evalphase" data-bo-evalphase hidden>
      <div class="bo-evalphase-icon" aria-hidden="true">
        <span class="bo-ret-ring is-a"></span><span class="bo-ret-ring is-b"></span>
        <svg viewBox="0 0 64 64"><path d="M32 4 8 13v17c0 15 10.4 26.3 24 30 13.6-3.7 24-15 24-30V13L32 4z" fill="rgba(255,45,70,.16)" stroke="#ff2d46" stroke-width="2.5"/><circle cx="32" cy="30" r="8" fill="none" stroke="#ffd2d9" stroke-width="2.5"/><circle cx="32" cy="30" r="3" fill="#ff2d46"/><path d="M14 30c5-8 11-12 18-12s13 4 18 12c-5 8-11 12-18 12s-13-4-18-12z" fill="none" stroke="#ff8b9b" stroke-width="2"/></svg>
      </div>
      <p class="bo-evalphase-kicker mono"><i class="bo-live-led"></i>VIGILANCIA EN VIVO · HGR 72</p>
      <h1 class="bo-evalphase-title">EVALUACIÓN <em>EN CURSO</em></h1>
      <p class="bo-evalphase-sub">${esc(p.name)}, <b>no intentes hacer trampa.</b></p>
      <ul class="bo-evalphase-rules">
        <li data-bo-rule><i>👁</i><span>La Dra. Hernández ve en vivo tu avance y cada movimiento</span></li>
        <li data-bo-rule><i>🚪</i><span>${esc(strikeRuleText(exam))}</span></li>
        <li data-bo-rule><i>🤖</i><span>Siri, Gemini, capturas y otras apps quedan registradas</span></li>
        <li data-bo-rule><i>🔀</i><span>Tu orden de preguntas e incisos es único: copiar no sirve</span></li>
      </ul>
      <div class="bo-takeover-count-box mono">
        <div class="bo-takeover-bar"><i data-bo-eval-bar></i></div>
        <div class="bo-takeover-count" data-bo-eval-count>PRIMERA PREGUNTA EN 6…</div>
      </div>
    </div>`}
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
  const resizeMatrix = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const colW = w < 640 ? 58 : 72;
    const n = Math.ceil(w / colW);
    cols = Array.from({ length: n }, (_, i) => ({ x: i * colW + 6, y: Math.random() * h, v: 3.5 + Math.random() * 6 }));
  };
  resizeMatrix();

  const triggerTakeoverFlash = (strong = false) => {
    if (!flashEl || !root.isConnected) return;
    flashEl.classList.remove('is-pulse', 'is-bang');
    void flashEl.offsetWidth;
    flashEl.classList.add(strong ? 'is-bang' : 'is-pulse');
  };

  const tokens = ['LOCK::R2', 'HGR_72', 'CALOT//OS', 'NO_EXIT', 'PROCTOR_ON', '0x72F1', 'AUDIT_QX', 'AI_OFF', 'SEAL_8S'];
  let takeoverStartMs = performance.now();
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
    if (root.classList.contains('is-takeover')) rafId = requestAnimationFrame(drawMatrix);
  };
  // Fase 1 arranca ya (mientras se descargan las preguntas); la fase 2 espera a que termine
  const phaseTimers = [];
  const prelockDone = resuming ? Promise.resolve() : runPrelock(root, phaseTimers);

  const seedStr = `${exam.sessionId}:${p.id}`;
  const isCustom = exam.source === 'custom';
  let qs;
  if (isCustom) {
    // Examen cargado por la docente: el servidor manda enunciados e incisos SIN la respuesta correcta
    let list = null;
    for (let tries = 0; tries < 40 && root.isConnected && !list; tries++) {
      try {
        const r = await apiPost({ action: 'questions', id: p.id, name: p.name, sessionId: exam.sessionId, browser: BROWSER });
        if (Array.isArray(r?.questions) && r.questions.length) list = r.questions;
      } catch {}
      if (!list) await new Promise((res) => setTimeout(res, 1500));
    }
    if (!list) {
      toast('No se pudieron descargar las preguntas. Avisa a la Dra. Hernández.');
      closeLockdownOverlay();
      activeSessionId = null;
      return;
    }
    const order = seededShuffle(list.map((_, i) => i), `${seedStr}:questions`);
    qs = order.map((orig) => {
      const q = list[orig];
      const opts = seededShuffle(q.options.map((txt, i) => ({ txt, i })), `${seedStr}:opts:${orig}`);
      return { orig, stem: q.stem, options: opts.map((o) => o.txt), optMap: opts.map((o) => o.i), answer: -1, explanation: '' };
    });
  } else {
    qs = await buildQuestionPool(exam.topic, exam.questionCount || 15, seedStr);
  }
  if (!root.isConnected) return;
  const examStage = root.querySelector('[data-bo-exam]');
  const takeoverStage = root.querySelector('[data-bo-takeover]');
  const cheatModal = root.querySelector('[data-bo-cheat]');
  const countEl = root.querySelector('[data-bo-countdown]');
  const N = qs.length;

  // ---- Estado del examen (persistido en el dispositivo para sobrevivir recargas) ----
  const st = {
    started: false,
    answers: Array(N).fill(null), // { i, ts }
    flags: Array(N).fill(false),
    qIdx: 0,
    events: [],
    pending: null, // { since, q } mientras la pestaña está oculta / recargando
    submitted: null,
    ...(persisted || {}),
  };
  if (!Array.isArray(st.answers) || st.answers.length !== N) st.answers = Array(N).fill(null);
  if (!Array.isArray(st.flags) || st.flags.length !== N) st.flags = Array(N).fill(false);
  st.qIdx = Math.max(0, Math.min(N - 1, Number(st.qIdx) || 0));
  const persist = () => saveLocal(exam.sessionId, p.id, st);

  let pardoned = Number(initialMe?.pardonedStrikes || 0);
  let serverLocked = Boolean(initialMe?.locked);
  let examRunning = false;
  let clockInterval = 0;
  let tauntLoop = null;
  let blurSince = 0;
  let sawHiddenSinceBlur = false;
  let vpSince = 0;
  let vpWhy = '';
  let shownAt = Date.now();

  const countedEvents = () => st.events.filter((e) => COUNTED.has(e.k));
  const strikesCount = () => countedEvents().length;
  const limit = exam.strictMode === '1strike' ? 1 : exam.strictMode === '2strikes' ? 2 : 999;
  const isLockedByCheat = () => serverLocked || (strikesCount() - pardoned >= limit);
  const correctCount = () => st.answers.reduce((a, ans, i) => a + (ans && ans.i === qs[i]?.answer ? 1 : 0), 0);
  const answeredCount = () => st.answers.filter(Boolean).length;
  const curQ = () => st.qIdx + 1; // número que ve el residente
  // Número original de la pregunta (el del Word de la docente) para el panel
  const origQ = (idx = st.qIdx) => (isCustom ? (qs[idx]?.orig ?? idx) + 1 : idx + 1);
  const letterFor = (qi, i) => LETTERS[qs[qi]?.optMap ? qs[qi].optMap[i] : i];
  const picks = () => {
    const out = Array(N).fill(null);
    st.answers.forEach((a, i) => { if (a && qs[i]?.optMap) out[qs[i].orig] = qs[i].optMap[a.i]; });
    return out;
  };

  const payload = () => ({
    sessionId: exam.sessionId,
    qIndex: st.qIdx,
    qTotal: N,
    answered: answeredCount(),
    ...(isCustom ? { picks: picks() } : { correct: correctCount() }),
    events: st.events.slice(-80),
  });
  root._payload = () => (st.started ? payload() : { sessionId: exam.sessionId });

  const syncNow = async () => {
    try {
      const r = await apiPost({ action: 'progress', id: p.id, name: p.name, browser: BROWSER, ...payload() });
      if (r?.me) applyMe(r.me);
    } catch {}
  };

  const applyMe = (me) => {
    pardoned = Number(me.pardonedStrikes || 0);
    const wasLocked = isLockedByCheat();
    serverLocked = Boolean(me.locked);
    const nowLocked = isLockedByCheat();
    if (wasLocked && !nowLocked) {
      cheatModal.hidden = true;
      toast('La Dra. Hernández desbloqueó tu examen. Continúa.');
      playUiSfx('ok');
    } else if (!wasLocked && nowLocked) {
      renderCheatWarning();
    }
    updateHud();
  };

  const addEvent = (ev) => {
    st.events.push({ ts: Date.now(), ...ev });
    if (st.events.length > 80) st.events = st.events.slice(-80);
    persist();
  };

  // ---- Detección de salidas, parpadeos, recargas e interrupciones ----
  const registerExit = (kind, sec, q, why, d) => {
    addEvent({ k: kind, q, d, s: sec, why });
    if (COUNTED.has(kind)) {
      playUiSfx('bad');
      updateHud();
      renderCheatWarning();
    }
    syncNow();
  };

  const onVisibility = () => {
    if (!examRunning) return;
    if (document.hidden) {
      sawHiddenSinceBlur = true;
      if (!st.pending) { st.pending = { since: Date.now(), q: origQ(), d: curQ() }; persist(); }
    } else if (st.pending) {
      const sec = (Date.now() - st.pending.since) / 1000;
      const { q, d } = st.pending;
      st.pending = null;
      if (sec >= MIN_EXIT_SEC) registerExit('salida', sec, q, 'Salió de la pestaña / cambió de app', d);
      else registerExit('parpadeo', sec, q, 'Pestaña oculta menos de 2 s', d);
    }
  };

  const onPageHide = () => {
    if (!examRunning || root.dataset.submitting) return;
    if (!st.pending) st.pending = { since: Date.now(), q: origQ(), d: curQ() };
    persist();
  };

  const onWindowBlur = () => {
    if (!examRunning) return;
    blurSince = Date.now();
    sawHiddenSinceBlur = document.hidden;
  };
  const onWindowFocus = () => {
    if (!examRunning || !blurSince) return;
    const sec = (Date.now() - blurSince) / 1000;
    blurSince = 0;
    if (!sawHiddenSinceBlur && sec >= 0.8) {
      addEvent({ k: 'interrupcion', q: origQ(), d: curQ(), s: sec, why: 'Perdió el foco sin salir (algo se abrió encima)' });
      syncNow();
    }
  };

  // Cambio grande del área visible: típico cuando se abre un panel de IA o pantalla dividida
  const vv = window.visualViewport;
  const layoutSize = () => {
    if (vv) return { w: vv.width * vv.scale, h: vv.height * vv.scale };
    return { w: window.innerWidth, h: window.innerHeight };
  };
  let base = layoutSize();
  const onViewport = () => {
    if (!examRunning) { base = layoutSize(); return; }
    const cur = layoutSize();
    const rotated = (cur.w > cur.h) !== (base.w > base.h);
    if (rotated) { base = cur; vpSince = 0; return; }
    if (cur.h > base.h) base.h = cur.h; // la barra de Safari al ocultarse agranda; se toma el máximo
    if (cur.w > base.w) base.w = cur.w;
    const dh = (base.h - cur.h) / base.h;
    const dw = (base.w - cur.w) / base.w;
    const shrunk = dh > 0.18 || dw > 0.15;
    if (shrunk && !vpSince) {
      vpSince = Date.now();
      vpWhy = dw > 0.15 ? 'Pantalla dividida / ventana más angosta' : 'Área visible reducida (panel encima)';
    } else if (!shrunk && vpSince) {
      const sec = (Date.now() - vpSince) / 1000;
      vpSince = 0;
      if (sec >= 0.8) {
        addEvent({ k: 'interrupcion', q: origQ(), d: curQ(), s: sec, why: vpWhy });
        syncNow();
      }
    }
    repaintSoon();
  };

  let repaintT = 0;
  let lastPaintW = 0;
  const repaintSoon = () => {
    clearTimeout(repaintT);
    repaintT = setTimeout(() => {
      const w = examStage.clientWidth;
      if (w && w !== lastPaintW) { lastPaintW = w; paintAllCanvases(examStage); }
    }, 120);
  };

  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('pagehide', onPageHide);
  window.addEventListener('beforeunload', onPageHide);
  window.addEventListener('blur', onWindowBlur);
  window.addEventListener('focus', onWindowFocus);
  window.addEventListener('resize', onViewport);
  vv?.addEventListener('resize', onViewport);

  // Bloquear copiar, pegar, seleccionar y clic derecho durante el examen
  const blockEvent = (e) => { if (examRunning) e.preventDefault(); };
  document.addEventListener('contextmenu', blockEvent, true);
  document.addEventListener('copy', blockEvent, true);
  document.addEventListener('cut', blockEvent, true);
  document.addEventListener('selectstart', blockEvent, true);
  const blockShortcuts = (e) => {
    if (!examRunning) return;
    const k = String(e.key || '').toLowerCase();
    if (e.key === 'F12' || ((e.metaKey || e.ctrlKey) && ['c', 'v', 'x', 'a', 'f', 'p', 'u', 's', 'k'].includes(k))) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  document.addEventListener('keydown', blockShortcuts, true);

  // ---- UI ----
  const lastCountedEvent = () => countedEvents().slice(-1)[0] || null;

  const renderCheatWarning = () => {
    if (!cheatModal) return;
    const n = strikesCount();
    const last = lastCountedEvent();
    const lastTxt = last
      ? `${last.k === 'recarga' ? 'recargó/cerró la página' : 'salió'} ${fmtSec(last.s)} en la Pregunta ${last.d || last.q}`
      : '';
    if (isLockedByCheat()) {
      cheatModal.hidden = false;
      cheatModal.innerHTML = `
        <div class="bo-cheat-card is-locked">
          <span class="bo-cheat-tag mono">🔒 EXAMEN BLOQUEADO POR SISTEMA ANTI-TRAMPA</span>
          <h2>Se detectó salida de la aplicación</h2>
          <p>Acumulaste <b>${n} ${n === 1 ? 'salida' : 'salidas'}</b> de pantalla${lastTxt ? ` (última: ${lastTxt})` : ''}.</p>
          <p class="muted">Tu pantalla ha quedado bloqueada y se notificó en vivo al monitor de la <b>Dra. Araceli Hernández Vargas</b>. Espera a que autorice tu desbloqueo desde su panel.</p>
          <div class="bo-cheat-pulse mono">ESPERANDO AUTORIZACIÓN DOCENTE EN LÍNEA…</div>
        </div>
      `;
    } else if (last) {
      cheatModal.hidden = false;
      cheatModal.innerHTML = `
        <div class="bo-cheat-card">
          <span class="bo-cheat-tag mono">⚠️ ALERTA ANTI-TRAMPA · FALTA REGISTRADA (${n})</span>
          <h2>No salgas de la pantalla del examen</h2>
          <p>Se registró que ${esc(lastTxt)}. El incidente ya quedó registrado en el monitor en vivo de la Dra. Hernández.</p>
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
    if (examRunning) applyMe(remoteMe);
  };

  const formatTimeLeft = () => {
    const endMs = (exam.startedAt || Date.now()) + (exam.durationMin || 20) * 60000;
    const remSec = Math.max(0, Math.floor((endMs - Date.now()) / 1000));
    const m = String(Math.floor(remSec / 60)).padStart(2, '0');
    const s = String(remSec % 60).padStart(2, '0');
    return { remSec, text: `${m}:${s}` };
  };

  const updateHud = () => {
    const el = root.querySelector('[data-bo-strikes]');
    if (!el) return;
    const n = strikesCount();
    el.textContent = `Salidas: ${n}`;
    el.classList.toggle('is-warn', n > 0);
  };

  const mapHTML = () => qs.map((_, i) => {
    const cls = [
      'bo-map-btn',
      st.answers[i] ? 'is-answered' : '',
      st.flags[i] ? 'is-flagged' : '',
      i === st.qIdx ? 'is-current' : '',
    ].filter(Boolean).join(' ');
    return `<button type="button" class="${cls}" data-bo-goto="${i}" aria-label="Pregunta ${i + 1}">${i + 1}</button>`;
  }).join('');

  const renderQuestion = () => {
    const q = qs[st.qIdx];
    if (!q) return;
    const { text: timeText } = formatTimeLeft();
    const n = strikesCount();
    const chosen = st.answers[st.qIdx]?.i;
    const answered = answeredCount();
    shownAt = Date.now();
    examStage.innerHTML = `
      <div class="bo-exam-shell">
        <header class="bo-exam-head">
          <div>
            <span class="mono bo-exam-kicker">EXAMEN DEPARTAMENTAL R2 · ${esc(exam.topicLabel || 'CIRUGÍA GENERAL')}</span>
            <h2>${esc(p.name)} <small class="mono muted">· Reactivo ${st.qIdx + 1} de ${N}</small></h2>
          </div>
          <div class="bo-exam-meta mono">
            <span class="bo-exam-strikes ${n > 0 ? 'is-warn' : ''}" data-bo-strikes>Salidas: ${n}</span>
            <span class="bo-exam-timer" data-bo-timer>⏱ ${timeText}</span>
          </div>
        </header>

        <div class="bo-exam-progress"><i style="width:${Math.round((answered / N) * 100)}%"></i></div>

        <nav class="bo-map" aria-label="Mapa de preguntas">${mapHTML()}</nav>

        <article class="card bo-question-card">
          <div class="bo-q-top mono">
            <span>Pregunta ${st.qIdx + 1}</span>
            <button type="button" class="bo-flag-btn ${st.flags[st.qIdx] ? 'is-on' : ''}" data-bo-flag aria-pressed="${st.flags[st.qIdx] ? 'true' : 'false'}">⚑ ${st.flags[st.qIdx] ? 'Marcada para revisar' : 'Marcar para revisar'}</button>
          </div>
          <canvas class="bo-question-stem bo-text-canvas" data-bo-text data-lh="1.6" role="img" aria-label="Enunciado de la pregunta"></canvas>
          <div class="bo-options-list" role="radiogroup" aria-label="Opciones de respuesta">
            ${q.options.map((_, idx) => `
              <button type="button" class="bo-opt-btn ${chosen === idx ? 'is-chosen' : ''}" data-bo-opt="${idx}" role="radio" aria-checked="${chosen === idx ? 'true' : 'false'}" aria-label="Opción ${LETTERS[idx]}">
                <span class="bo-opt-letter mono" aria-hidden="true">${LETTERS[idx]}</span>
                <canvas class="bo-text-canvas" data-bo-text data-lh="1.5" aria-hidden="true"></canvas>
              </button>
            `).join('')}
          </div>
        </article>

        <div class="bo-nav-row">
          <button type="button" class="btn btn-ghost" data-bo-prev ${st.qIdx === 0 ? 'disabled' : ''}>← Anterior</button>
          <button type="button" class="btn btn-ghost" data-bo-next ${st.qIdx >= N - 1 ? 'disabled' : ''}>Siguiente →</button>
        </div>
        <button type="button" class="btn btn-glow lg bo-submit-btn" data-bo-review>Entregar examen (${answered}/${N} contestadas)</button>

        <footer class="bo-exam-foot mono muted">
          <span>🔒 Sin pistas · Selección de texto deshabilitada</span>
          <span>Vigilancia en vivo: Dra. Araceli Hernández Vargas</span>
        </footer>
      </div>
    `;
    const canvases = examStage.querySelectorAll('canvas[data-bo-text]');
    canvases[0]._boText = q.stem;
    q.options.forEach((opt, i) => { canvases[i + 1]._boText = opt; });
    lastPaintW = examStage.clientWidth;
    paintAllCanvases(examStage);
    examStage.querySelector('.bo-map-btn.is-current')?.scrollIntoView?.({ block: 'nearest', inline: 'center' });
  };

  const goTo = (i) => {
    st.qIdx = Math.max(0, Math.min(N - 1, i));
    persist();
    renderQuestion();
    examStage.scrollIntoView?.({ block: 'start' });
    syncNow();
  };

  const chooseOption = (chosenIdx) => {
    const qi = st.qIdx;
    const prev = st.answers[qi];
    const now = Date.now();
    if (prev && prev.i === chosenIdx) return;
    // ¿Cambió (o dio) la respuesta justo después de una salida/interrupción?
    const exits = st.events.filter((e) => e.k === 'salida' || e.k === 'recarga' || e.k === 'interrupcion');
    if (prev) {
      const after = exits.filter((e) => e.ts > prev.ts).slice(-1)[0];
      if (after) {
        addEvent({ k: 'cambio', q: origQ(qi), d: qi + 1, from: letterFor(qi, prev.i), to: letterFor(qi, chosenIdx), s: after.s, ref: `${EXIT_VERB[after.k] || after.k} ${fmtSec(after.s)} en P${after.q}` });
      }
    } else {
      const recent = exits.filter((e) => e.q === origQ(qi) && now - e.ts < 120000).slice(-1)[0];
      if (recent) {
        addEvent({ k: 'cambio', q: origQ(qi), d: qi + 1, from: null, to: letterFor(qi, chosenIdx), s: recent.s, ref: `${EXIT_VERB[recent.k] || recent.k} ${fmtSec(recent.s)} en P${recent.q}` });
      }
    }
    st.answers[qi] = { i: chosenIdx, ts: now };
    persist();
    playUiSfx('click');
    tauntLoop?.touch?.();
    // Avanza sola a la siguiente pregunta sin contestar (si hay)
    const nextUn = st.answers.findIndex((a, i) => !a && i > qi);
    const anyUn = st.answers.findIndex((a) => !a);
    const target = !prev ? (nextUn >= 0 ? nextUn : anyUn >= 0 ? anyUn : qi) : qi;
    if (target !== qi) {
      renderQuestion();
      setTimeout(() => { if (examRunning && st.qIdx === qi) goTo(target); }, 260);
    } else {
      renderQuestion();
      syncNow();
    }
  };

  const renderSubmitConfirm = () => {
    const unanswered = st.answers.map((a, i) => (a ? null : i + 1)).filter(Boolean);
    const flagged = st.flags.map((f, i) => (f ? i + 1 : null)).filter(Boolean);
    const clean = !unanswered.length && !flagged.length;
    cheatModal.hidden = false;
    cheatModal.innerHTML = `
      <div class="bo-cheat-card bo-confirm-card">
        <span class="bo-cheat-tag mono">${clean ? '✅ LISTO PARA ENTREGAR' : '⚠️ REVISA ANTES DE ENTREGAR'}</span>
        <h2>${clean ? `Contestaste las ${N} preguntas` : '¿Entregar de todos modos?'}</h2>
        ${unanswered.length ? `<p>Sin contestar: ${unanswered.map((n) => `<button type="button" class="bo-chip" data-bo-goto="${n - 1}">P${n}</button>`).join(' ')}</p>` : ''}
        ${flagged.length ? `<p>Marcadas para revisar: ${flagged.map((n) => `<button type="button" class="bo-chip is-flag" data-bo-goto="${n - 1}">P${n}</button>`).join(' ')}</p>` : ''}
        <p class="muted">Al entregar ya no podrás cambiar respuestas.</p>
        <div class="bo-confirm-actions">
          <button type="button" class="btn btn-ghost" data-bo-cancel-submit>Seguir revisando</button>
          <button type="button" class="btn btn-glow" data-bo-submit-final>Entregar y que CALOT me evalúe</button>
        </div>
      </div>
    `;
  };

  const finishAndEvaluate = async (forced = false) => {
    if (root.dataset.submitting) return;
    root.dataset.submitting = '1';
    examRunning = false;
    clearInterval(clockInterval);
    tauntLoop?.stop?.();

    const total = N || 1;
    let correct = correctCount();
    st.pending = null;
    st.submitted = isCustom ? { picks: picks(), total, answered: answeredCount() } : { correct, total, answered: answeredCount() };
    persist();
    let serverMe = null;
    for (let tries = 0; tries < 3 && !serverMe; tries++) {
      try {
        const r = await apiPost({ action: 'submit', id: p.id, name: p.name, browser: BROWSER, ...payload(), ...(isCustom ? {} : { correct }), total, answered: answeredCount() });
        serverMe = r?.me || null;
      } catch {
        await new Promise((res) => setTimeout(res, 800));
      }
    }
    // En el examen de la docente la calificación la calcula el servidor (el celular no conoce las respuestas)
    if (isCustom) correct = Number(serverMe?.correct || 0);
    const pct = isCustom && serverMe?.scorePct != null ? serverMe.scorePct : Math.round((correct / total) * 100);

    const reviewItems = isCustom ? [] : qs.map((q, i) => {
      const a = st.answers[i];
      return {
        q: `${i + 1}. ${q.stem}`,
        chosen: a ? q.options[a.i] : 'Sin responder',
        correct: q.options[q.answer],
        ok: Boolean(a && a.i === q.answer),
        exp: q.explanation,
      };
    });

    closeLockdownOverlay();

    playCalotEvaluation({
      pct,
      correct,
      total,
      modeLabel: `${exam.topicLabel || 'Examen R2'} · ${p.name}`,
      detail: `${correct} de ${total} aciertos · ${strikesCount()} salidas de pantalla${forced ? ' · Cierre docente' : ''}${isCustom ? ' · La revisión de respuestas la verás con la Dra. Hernández' : ''}`,
      reviewItems,
      sessionEnd: { name: p.name },
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
    if (e.target.closest('[data-bo-cheat-ack]') && !isLockedByCheat()) {
      cheatModal.hidden = true;
      return;
    }
    if (e.target.closest('[data-bo-cancel-submit]')) {
      cheatModal.hidden = true;
      return;
    }
    if (isLockedByCheat() || !examRunning) return;

    const gotoBtn = e.target.closest('[data-bo-goto]');
    if (gotoBtn) {
      cheatModal.hidden = true;
      goTo(Number(gotoBtn.dataset.boGoto));
      return;
    }
    if (e.target.closest('[data-bo-prev]')) { goTo(st.qIdx - 1); return; }
    if (e.target.closest('[data-bo-next]')) { goTo(st.qIdx + 1); return; }
    if (e.target.closest('[data-bo-flag]')) {
      st.flags[st.qIdx] = !st.flags[st.qIdx];
      persist();
      renderQuestion();
      return;
    }
    const optBtn = e.target.closest('[data-bo-opt]');
    if (optBtn) {
      chooseOption(Number(optBtn.dataset.boOpt));
      return;
    }
    if (e.target.closest('[data-bo-review]')) {
      renderSubmitConfirm();
      return;
    }
    if (e.target.closest('[data-bo-submit-final]')) {
      e.preventDefault();
      finishAndEvaluate(false);
    }
  });

  const startExam = () => {
    root.classList.remove('is-takeover');
    takeoverStage.hidden = true;
    examStage.hidden = false;
    examRunning = true;
    base = layoutSize();
    if (!st.started) { st.started = true; persist(); }
    // ¿Venimos de una recarga / cierre de la página a media prueba? Cuenta como salida con su tiempo real.
    if (st.pending) {
      const sec = Math.max(0.1, (Date.now() - st.pending.since) / 1000);
      const { q, d } = st.pending;
      st.pending = null;
      addEvent({ k: 'recarga', q, d, s: sec, why: 'Recargó o cerró la página del examen' });
    }
    tauntLoop = null; // sin voces durante el examen: solo efectos
    stopExamAudio(); // la música de misterio se desvanece al abrir la primera pregunta
    renderQuestion();
    if (isLockedByCheat() || lastCountedEvent()?.ts > Date.now() - 5000) renderCheatWarning();
    syncNow();

    clockInterval = setInterval(() => {
      const { remSec, text } = formatTimeLeft();
      const tEl = root.querySelector('[data-bo-timer]');
      if (tEl) tEl.textContent = `⏱ ${text}`;
      if (remSec <= 0 && examRunning) finishAndEvaluate(true);
    }, 1000);
    if (document.fonts?.ready) document.fonts.ready.then(() => { if (root.isConnected) paintAllCanvases(examStage); });
  };

  // Secuencia dramática de 8 segundos antes de abrir la Pregunta 1 (se omite al reanudar tras recarga)
  let takeoverInterval = 0;
  const takeoverTimers = [];
  const markStep = (idx) => {
    const el = stepEls[idx];
    if (!el || el.classList.contains('is-done')) return;
    el.classList.add('is-done');
    const ic = el.querySelector('i');
    if (ic) ic.textContent = '🔒';
    playUiSfx('click');
  };
  const startTakeover = () => {
    if (!root.isConnected) return;
    root.classList.add('is-glitch-hit');
    takeoverStartMs = performance.now();
    rafId = requestAnimationFrame(drawMatrix);
    triggerTakeoverFlash(false);
    try { navigator.vibrate?.([220, 70, 260, 70, 340, 90, 480]); } catch {}
    playUiSfx('bad');
    playSynthTakeoverAudio();
    alertAudio?.play().catch(() => {});
    glitchAudio?.play().catch(() => {});
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

    let countSec = TAKEOVER_SEC;
    takeoverInterval = setInterval(() => {
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
          root.classList.remove('is-glitch-hit', 'is-critical');
          cancelAnimationFrame(rafId);
          takeoverStage.hidden = true;
          runEvalPhase(root, exam, phaseTimers).then(() => { if (root.isConnected) startExam(); });
        }, 650));
      }
    }, 1000);
  };
  if (resuming) {
    startExam();
  } else {
    prelockDone.then(startTakeover);
  }

  root._cleanup = () => {
    examRunning = false;
    cancelAnimationFrame(rafId);
    clearInterval(takeoverInterval);
    clearInterval(clockInterval);
    clearTimeout(repaintT);
    takeoverTimers.forEach(clearTimeout);
    phaseTimers.forEach(clearTimeout);
    tauntLoop?.stop?.();
    stopExamAudio();
    [...takeoverAudios, ...(root._prelockAudios || []), ...(root._evalAudios || [])].forEach((a) => { try { a?.pause(); a.currentTime = 0; } catch {} });
    document.body.classList.remove('is-exam-prelock');
    document.documentElement.style.removeProperty('--bo-prelock-k');
    document.removeEventListener('keydown', blockShortcuts, true);
    document.removeEventListener('contextmenu', blockEvent, true);
    document.removeEventListener('copy', blockEvent, true);
    document.removeEventListener('cut', blockEvent, true);
    document.removeEventListener('selectstart', blockEvent, true);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('pagehide', onPageHide);
    window.removeEventListener('beforeunload', onPageHide);
    window.removeEventListener('blur', onWindowBlur);
    window.removeEventListener('focus', onWindowFocus);
    window.removeEventListener('resize', onViewport);
    vv?.removeEventListener('resize', onViewport);
  };
}
