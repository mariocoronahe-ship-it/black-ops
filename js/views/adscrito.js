/* ==========================================================================
   CALOT-OS · Black Ops · Centro de Control de Examen R2 (Dra. Hernández)
   Monitoreo en tiempo real de los residentes R2 mientras navegan,
   botón de bloqueo simultáneo para lanzar el examen, vigilancia anti-trampa
   (salidas de pantalla, desbloqueo remoto) y descarga de calificaciones en CSV.
   ========================================================================== */

import { icon } from '../icons.js?v=20261122l';
import { R2_RESIDENTS, isOwner, setPerfil, markBody } from '../perfil.js?v=20261122l';
import { esc, toast } from '../ui.js';
import { playUiSfx } from '../fx/audio.js?v=20261122l';
import { fetchExamBoard, adminExamAction, currentBrowserInfo } from '../fx/exam-lockdown.js?v=20261122l';
import { parseExamFile, parseExamText, OPTION_LETTERS } from '../fx/exam-import.js?v=20261122l';
import { dashboardSectionHTML } from './adscrito-dashboard.js?v=20261122l';
import { say, setMuted as setVoiceMuted, isMuted as isVoiceMuted, isUnlocked as voiceUnlocked, unlockDocenteVoice, welcomeOnce, replayWelcome, onVoiceChange, stopAll as stopVoice } from '../fx/docente-voice.js?v=20261122l';

export const section = 'biblio';

const TOPIC_OPTIONS = [
  { id: 'colon',        label: 'Colon y apéndice (R2)' },
  { id: 'recto',        label: 'Recto y ano (R2)' },
  { id: 'delgado',      label: 'Intestino delgado (R2)' },
  { id: 'estomago',     label: 'Estómago y duodeno (R2)' },
  { id: 'esofago',      label: 'Esófago y hiato (R2)' },
  { id: 'pared',        label: 'Pared abdominal y hernias (R2)' },
  { id: 'neoplasias',   label: 'Oncología quirúrgica (R2)' },
  { id: 'piel',         label: 'Piel y tejidos blandos (R2)' },
  { id: 'quemaduras',   label: 'Quemaduras (R2)' },
  { id: 'hepatobiliar', label: 'Hepatobiliar (R2)' },
  { id: 'trauma',       label: 'Trauma y abdomen agudo (R2)' },
  { id: 'todos_r2',     label: 'Examen Departamental R2 (Todos los módulos)' },
];

let board = {
  configured: true,
  exam: {
    active: false,
    ended: false,
    sessionId: 'lobby-inicial',
    topic: 'colon',
    topicLabel: 'Colon y apéndice (R2)',
    questionCount: 15,
    durationMin: 20,
    strictMode: '2strikes',
    startedAt: 0,
  },
  residents: {},
};

// Examen de la docente en edición (solo vive en esta pestaña hasta que se guarda)
let importDraft = null; // { title, questions:[{stem, options[], answer, answerFrom}], warnings[] }
let importBusy = false;
let pasteOpen = false;
let resultsData = null; // respuesta de la acción 'results'
let resultsOpenFor = null;
let liveResults = null; // respuestas de todos en vivo (examen cargado) para el tablero
let liveSig = '';
let clockTimer = null;
let pullCount = 0;

let formDraft = {
  topic: 'colon',
  questionCount: 15,
  durationMin: 20,
  strictMode: '2strikes',
  source: 'auto', // 'auto' usa el examen cargado si existe
};
let pollTimer = null;
let lastSig = '';
let firstPullDone = false;

function boardSig(b) {
  try {
    const ex = b?.exam || {};
    const rs = Object.values(b?.residents || {}).map((r) => `${r.id}:${r.state}:${r.section}:${r.answered}:${r.strikes}:${r.locked}:${r.scorePct}:${(r.events || []).length}:${r.browser?.label}:${r.browser?.allowed}`).sort().join('|');
    return `${ex.active}:${ex.sessionId}:${ex.topic}:${ex.questionCount}:${(ex.msgs || []).length}:${rs}`;
  } catch {
    return '';
  }
}

function formatAgo(ts) {
  if (!ts) return 'Sin entrar aún';
  const sec = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (sec < 35) return 'En línea ahora';
  if (sec < 60) return `hace ${sec} s`;
  const min = Math.round(sec / 60);
  if (min < 60) return `hace ${min} min`;
  return `hace ${Math.round(min / 60)} h`;
}

function buildRows() {
  const now = Date.now();
  return R2_RESIDENTS.map((meta) => {
    const r = board.residents?.[meta.id] || null;
    const lastSeen = Number(r?.lastSeen) || 0;
    const isOnline = lastSeen > 0 && (now - lastSeen) < 90000;
    const hasJoined = lastSeen > 0;
    const state = !hasJoined
      ? 'sin_entrar'
      : r.locked || r.state === 'bloqueado_trampa'
        ? 'bloqueado_trampa'
        : r.state || 'navegando';
    return {
      ...meta,
      hasJoined,
      isOnline,
      lastSeen,
      lastSeenLabel: formatAgo(lastSeen),
      state,
      section: r?.section || 'Inicio',
      qIndex: r?.qIndex || 0,
      qTotal: r?.qTotal || board.exam?.questionCount || 15,
      answered: r?.answered || 0,
      strikes: r?.strikes || 0,
      locked: Boolean(r?.locked),
      strikeLog: Array.isArray(r?.strikeLog) ? r.strikeLog : [],
      events: Array.isArray(r?.events) ? r.events : [],
      browser: r?.browser || null,
      scorePct: r?.scorePct ?? null,
      missTopics: Array.isArray(r?.missTopics) ? r.missTopics : [],
      correct: r?.correct || 0,
      total: r?.total || board.exam?.questionCount || 15,
      submittedAt: r?.submittedAt || 0,
    };
  });
}

export function cohort() {
  return buildRows().map((r) => ({
    id: r.id,
    name: r.name,
    grade: 'R2',
    avance: r.scorePct ?? 0,
    weeks: [0, 0, 0, 0, 0, 0, 0, 0],
    topics: {},
    st: {
      key: r.locked ? 'riesgo' : r.hasJoined ? 'ok' : 'atencion',
      label: r.locked ? 'Bloqueado' : r.hasJoined ? 'Conectado' : 'Pendiente',
    },
  }));
}

function stateBadgeHTML(r) {
  if (r.state === 'sin_entrar') {
    return `<span class="ads-badge is-atencion">Sin entrar aún</span>`;
  }
  if (r.state === 'bloqueado_trampa') {
    return `<span class="ads-badge is-riesgo">🔒 BLOQUEADO (${r.strikes} salidas)</span>`;
  }
  if (r.state === 'entregado') {
    return `<span class="ads-badge is-ok">✅ Entregado · ${r.scorePct ?? 0}%</span>`;
  }
  if (r.state === 'en_examen' || board.exam?.active) {
    return `<span class="ads-badge is-ok">✍️ En examen (${r.answered}/${r.qTotal})</span>`;
  }
  return `<span class="ads-badge is-ok">🟢 Navegando · ${esc(r.section)}</span>`;
}

const fmtS = (s) => (s < 10 ? `${Math.round(s * 10) / 10} s` : `${Math.round(s)} s`);
const KIND_TXT = { salida: 'salió', recarga: 'recargó/cerró', parpadeo: 'parpadeo', interrupcion: 'interrupción', cambio: 'cambio', pestana: 'pestaña' };

function eventText(e) {
  if (e.k === 'cambio') {
    const what = e.from ? 'cambió su respuesta' : 'contestó';
    return `${e.ref || 'salida'} y ${what} en P${e.q}`;
  }
  if (e.k === 'pestana') return `P${e.q} · ${fmtS(e.s)} · cambió de pestaña (modo prueba, no cuenta)`;
  if (e.k === 'interrupcion') return `P${e.q} · ${fmtS(e.s)} · ${e.why || 'interrupción'}`;
  return `P${e.q} · ${fmtS(e.s)}${e.k === 'recarga' ? ' (recargó/cerró)' : ''}`;
}

function browserChipHTML(r) {
  if (!r.browser) return '<span class="bo-browser-chip is-none">Navegador: —</span>';
  const ok = Boolean(r.browser.allowed);
  return `<span class="bo-browser-chip ${ok ? 'is-ok' : 'is-bad'}" title="${esc(r.browser.reason || '')}">${ok ? '✓' : '⛔'} ${esc(r.browser.label)}</span>`;
}

function antiCheatHTML(r) {
  const exits = r.events.filter((e) => e.k === 'salida' || e.k === 'recarga');
  const blinks = r.events.filter((e) => e.k === 'parpadeo');
  const ints = r.events.filter((e) => e.k === 'interrupcion');
  const changes = r.events.filter((e) => e.k === 'cambio' || e.k === 'pestana');
  const longest = exits.reduce((m, e) => (!m || e.s > m.s ? e : m), null);
  const parts = [];
  parts.push(exits.length === 0
    ? '<span class="mono" style="color:#3ccf8e">🟢 0 salidas (Limpio)</span>'
    : `<span class="mono" style="color:#ff4b66">⚠️ <b>${exits.length}</b> ${exits.length === 1 ? 'salida' : 'salidas'}${longest ? ` · más larga ${fmtS(longest.s)} en P${longest.q}` : ''}</span>`);
  const items = [
    ...exits.map((e) => `<li class="is-exit ${e === longest ? 'is-long' : ''}">🚪 ${esc(eventText(e))}</li>`),
    ...ints.map((e) => `<li class="is-interrupt">⚠ ${esc(eventText(e))}</li>`),
    ...changes.map((e) => `<li class="is-change">✎ ${esc(eventText(e))}</li>`),
  ];
  if (ints.length) parts.push(`<span class="mono" style="color:#e6a700;display:block">🟡 ${ints.length} ${ints.length === 1 ? 'interrupción' : 'interrupciones'}</span>`);
  if (items.length) parts.push(`<ul class="bo-log">${items.join('')}</ul>`);
  if (blinks.length) parts.push(`<small class="muted mono" style="display:block">${blinks.length} parpadeo${blinks.length === 1 ? '' : 's'} &lt;2 s (no cuentan)</small>`);
  return parts.join('');
}

function downloadCSV(rows, detail = null) {
  const ex = board.exam || {};
  const header = ['Residente', 'Grado', 'Estado', 'Navegador', 'Calificacion (%)', 'Aciertos', 'Total Reactivos', 'Salidas Detectadas', 'Detalle Anti-Trampa', 'Ultima Conexion'];
  if (detail?.content) header.push('Respuestas por pregunta');
  const lines = [header.join(',')];
  for (const r of rows) {
    const logTxt = r.events.filter((e) => e.k !== 'parpadeo').map((e) => `${KIND_TXT[e.k] || e.k} ${eventText(e)}`).join(' | ').replace(/"/g, "'") || 'Limpio';
    const vals = [
      `"${r.name}"`,
      'R2',
      `"${r.state}"`,
      `"${r.browser ? `${r.browser.label}${r.browser.allowed ? '' : ' (NO PERMITIDO)'}` : ''}"`,
      r.scorePct != null ? r.scorePct : '',
      r.state === 'entregado' ? r.correct : r.answered,
      r.qTotal,
      r.strikes,
      `"${logTxt}"`,
      `"${r.lastSeenLabel}"`,
    ];
    if (detail?.content) {
      const picks = detail.picks?.[r.id] || [];
      const cell = (s) => String(s || '').replace(/\s+/g, ' ').replace(/"/g, "'").trim();
      vals.push(`"${detail.content.questions.map((q, i) => `P${i + 1}: ${picks[i] == null ? 'sin contestar' : `${cell(q.options[picks[i]])} ${picks[i] === q.answer ? '✓ correcta' : '✗ incorrecta'}`}`).join(' | ')}"`);
    }
    lines.push(vals.join(','));
  }
  const blob = new Blob(['\uFEFF' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `examen-r2-${ex.topic || 'general'}-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// Por defecto: si hay examen cargado, se usa ese
function useCustomSource(ex) {
  if (ex.active) return ex.source === 'custom';
  return Boolean(ex.custom) && formDraft.source !== 'banco';
}

function fmtTime(ts) {
  if (!ts) return '';
  try { return new Date(ts).toLocaleString('es-MX', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }); } catch { return ''; }
}

function importEditorHTML() {
  const d = importDraft;
  const missing = d.questions.filter((q) => !(q.answer >= 0)).length;
  return `
    <div class="bo-import-editor" data-bo-import>
      <label class="bo-field">
        <span class="mono">TÍTULO DEL EXAMEN</span>
        <input class="input" data-bo-imp="title" value="${esc(d.title)}" maxlength="80" />
      </label>
      <p class="mono bo-import-summary ${missing ? 'is-bad' : 'is-ok'}">
        ${d.questions.length} preguntas leídas · ${missing ? `<b>${missing} sin respuesta correcta</b> — tóquela abajo` : '✓ todas tienen respuesta correcta'}
      </p>
      ${d.globalKey ? `<p class="mono bo-import-summary is-ok">🔑 Clave global detectada: inciso ${esc(d.globalKey)}</p>` : ''}
      ${missing ? `<div class="bo-import-actions"><button type="button" class="btn btn-sm btn-ghost" data-bo-act="import-fill-a">Marcar A como correcta en las ${missing} que faltan</button></div>` : ''}
      ${d.warnings.length ? `<ul class="bo-import-warn mono">${d.warnings.slice(0, 6).map((w) => `<li>${esc(w)}</li>`).join('')}</ul>` : ''}
      <ol class="bo-import-list">
        ${d.questions.map((q, qi) => `
          <li class="bo-import-q ${q.answer >= 0 ? '' : 'is-missing'}">
            <div class="bo-import-qhead mono">
              <span>Pregunta ${qi + 1}${q.answerFrom ? ` · respuesta por ${esc(q.answerFrom)}` : ''}</span>
              <button type="button" class="btn btn-sm btn-ghost" data-bo-imp-del="${qi}">Quitar</button>
            </div>
            <textarea class="input" rows="3" data-bo-imp="stem" data-q="${qi}">${esc(q.stem)}</textarea>
            ${q.options.map((o, oi) => `
              <div class="bo-import-opt ${q.answer === oi ? 'is-correct' : ''}">
                <button type="button" class="bo-import-pick" data-bo-imp-pick="${qi}:${oi}" aria-label="Marcar ${OPTION_LETTERS[oi]} como correcta">${q.answer === oi ? '✓' : OPTION_LETTERS[oi]}</button>
                <input class="input" data-bo-imp="opt" data-q="${qi}" data-o="${oi}" value="${esc(o)}" />
              </div>`).join('')}
          </li>`).join('')}
      </ol>
      <div class="bo-import-actions">
        <button type="button" class="btn btn-ghost" data-bo-act="import-cancel">Cancelar</button>
        <button type="button" class="btn btn-glow" data-bo-act="import-save" ${!d.questions.length || importBusy ? 'disabled' : ''}>${importBusy ? 'Guardando…' : `🔒 Guardar examen (${d.questions.length} preguntas)`}</button>
      </div>
    </div>`;
}

function customExamCardHTML(ex) {
  const c = ex.custom;
  let body;
  if (importDraft) {
    body = importEditorHTML();
  } else if (c) {
    body = `
      <div class="bo-import-loaded">
        <p>📄 <b>${esc(c.title)}</b> · ${c.count} preguntas</p>
        <p class="mono muted">Cargado ${esc(fmtTime(c.uploadedAt))}${c.device ? ` desde ${esc(c.device)}` : ''} · guardado cifrado</p>
        <div class="bo-import-actions">
          <button type="button" class="btn btn-sm btn-ghost" data-bo-act="import-edit" ${ex.active ? 'disabled' : ''}>✎ Revisar / editar</button>
          <button type="button" class="btn btn-sm btn-ghost" data-bo-act="import-clear" ${ex.active && ex.source === 'custom' ? 'disabled' : ''}>🗑 Borrar examen</button>
        </div>
      </div>`;
  } else {
    body = `
      <div class="bo-import-empty" data-bo-import>
        <p class="muted">Sube el Word (.docx) con sus preguntas. La respuesta correcta se detecta si el inciso está en <b>negritas</b> o marcado con * o ✓, si hay una línea «Respuesta: C», una hoja de respuestas al final («1-A, 2-C») o una nota como «la respuesta correcta es siempre el inciso A». Antes de guardar podrá revisar y corregir todo.</p>
        <label class="btn btn-glow bo-file-btn">
          ${importBusy ? 'Leyendo…' : '📄 Elegir archivo Word (.docx)'}
          <input type="file" accept=".docx,.txt,.md,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain" data-bo-imp-file hidden />
        </label>
        <button type="button" class="btn btn-sm btn-ghost" data-bo-act="import-paste-toggle">${pasteOpen ? 'Ocultar' : 'o pegar el texto'}</button>
        ${pasteOpen ? `
          <textarea class="input bo-paste" rows="8" data-bo-imp-paste placeholder="1. Enunciado…&#10;A) …&#10;B) …&#10;C) …&#10;D) …&#10;Respuesta: B"></textarea>
          <button type="button" class="btn btn-sm btn-glow" data-bo-act="import-paste-read">Leer texto</button>` : ''}
      </div>`;
  }
  return `
  <section class="card bo-control-card bo-import-card" data-wing-enter>
    <div class="ads-sec-head">
      <div>
        <p class="mono ads-kicker">PREGUNTAS DE LA DRA. HERNÁNDEZ</p>
        <h2>Subir examen (Word)</h2>
      </div>
    </div>
    ${body}
  </section>`;
}

function resultsHTML(rowId) {
  const data = resultsData;
  if (!data) return '<p class="muted mono">Cargando respuestas…</p>';
  const content = data.content;
  const picks = data.picks?.[rowId];
  if (!content) return '<p class="muted mono">El detalle por pregunta solo está disponible con un examen cargado (Word).</p>';
  if (!picks) return '<p class="muted mono">Aún no hay respuestas de este residente.</p>';
  return `<ol class="bo-results-list">${content.questions.map((q, i) => {
    const p = picks[i];
    const ok = p === q.answer;
    const st = p == null ? 'is-none' : ok ? 'is-ok' : 'is-bad';
    return `<li class="${st}">
      <div class="bo-res-q"><b class="mono">P${i + 1}</b> ${esc(String(q.stem || '').replace(/\s+/g, ' ').slice(0, 160))}${String(q.stem || '').length > 160 ? '…' : ''}</div>
      <div class="bo-res-a">${p == null ? '<span class="mono">Sin contestar</span>' : `<span class="bo-res-tag">${ok ? '✓ Correcta' : '✗ Incorrecta'}</span> Eligió: «${esc(q.options[p])}»`}</div>
      ${p != null && !ok ? `<div class="bo-res-c">Respuesta correcta: «${esc(q.options[q.answer])}»</div>` : ''}
      <button type="button" class="btn btn-sm btn-ghost bo-res-frag" data-bo-frag="${i}">📕 Ver en la app</button>
    </li>`;
  }).join('')}</ol>`;
}

/* ------------------------------------------------------------------
   Sala de control · monitoreo en vivo en placas compactas
   ------------------------------------------------------------------ */
let openCardId = null;
let rosterShown = false;           // la entrada escalonada solo la primera vez
const prevRoster = new Map();      // id → { st, exits } para animar cambios de estado

const ST_LABEL = {
  idle: 'SIN ENTRAR', nav: 'EN LÍNEA', exam: 'CONTESTANDO', done: 'TERMINÓ', out: 'FUERA DE PANTALLA', locked: 'BLOQUEADO',
};

function rosterState(r, ex) {
  const exits = r.events.filter((e) => e.k === 'salida' || e.k === 'recarga').length || r.strikes || 0;
  const now = Date.now();
  const inExam = r.state === 'en_examen' || (ex.active && r.hasJoined && r.state !== 'entregado' && r.state !== 'bloqueado_trampa');
  let st = 'nav';
  if (r.state === 'sin_entrar') st = 'idle';
  else if (r.state === 'entregado') st = 'done';
  else if (r.state === 'bloqueado_trampa') st = 'locked';
  else if (inExam) st = r.lastSeen && now - r.lastSeen > 12000 ? 'out' : 'exam';
  else if (!r.isOnline) st = 'idle';
  const q = Math.min(r.qTotal, (r.qIndex || 0) + 1);
  const pct = st === 'done' ? 100 : r.qTotal ? Math.round((r.answered / r.qTotal) * 100) : 0;
  return { st, exits, q, pct };
}

function rosterCardHTML(r, ex, idx) {
  const { st, exits, q, pct } = rosterState(r, ex);
  const prev = prevRoster.get(r.id);
  const changed = prev && prev.st !== st;
  const newExit = prev && exits > prev.exits;
  prevRoster.set(r.id, { st, exits });
  let qTxt;
  if (st === 'done') qTxt = r.scorePct != null ? `${r.scorePct}%` : 'Terminó';
  else if (st === 'exam' || st === 'out' || st === 'locked') qTxt = `P ${q}/${r.qTotal}`;
  else if (st === 'nav') qTxt = esc(r.section || 'Explorando');
  else qTxt = '—';
  const open = openCardId === r.id;
  const badBrowser = r.browser && !r.browser.allowed;
  const cls = [`s-${st}`, exits ? 'has-exits' : '', changed ? 'is-changed' : '', newExit ? 'is-newexit' : '', open ? 'is-open' : ''].join(' ');
  return `
    <article class="bo-rc ${cls}" role="listitem" style="--i:${idx};--p:${pct}">
      <button type="button" class="bo-rc-main" data-bo-card="${esc(r.id)}" aria-expanded="${open}" aria-label="${esc(r.name)} · ${ST_LABEL[st]}">
        <span class="bo-rc-top">
          <span class="bo-rc-ini" aria-hidden="true">${esc(r.ini)}</span>
          <span class="bo-rc-id"><b>${badBrowser ? '⛔ ' : ''}${esc(r.name)}</b><small class="mono">EXP · R2-${String(idx + 1).padStart(2, '0')}</small></span>
          <i class="bo-rc-led" aria-hidden="true"></i>
        </span>
        <span class="bo-rc-mid mono">
          <span class="bo-rc-q">${qTxt}</span>
          <span class="bo-rc-ex" title="Salidas de pantalla">⚠ ${exits}</span>
        </span>
        <span class="bo-rc-bar" aria-hidden="true"><i></i></span>
        <span class="bo-rc-state mono">${ST_LABEL[st]}</span>
        ${st === 'out' ? '<span class="bo-rc-alert mono" aria-hidden="true">⚠ FUERA AHORA</span>' : ''}
      </button>
      ${open ? `
      <div class="bo-rc-more">
        <div class="bo-rc-row">${stateBadgeHTML(r)} ${r.hasJoined ? browserChipHTML(r) : ''}</div>
        <div class="bo-rc-row mono muted">Última señal: ${esc(r.lastSeenLabel)} · ${esc(r.tema)}</div>
        <div class="bo-rc-row">${antiCheatHTML(r)}</div>
        ${r.state === 'entregado' && r.missTopics?.length ? `<div class="bo-rc-row bo-rc-miss"><span class="mono">TEMAS A REPASAR</span><ul>${r.missTopics.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>` : ''}
        <div class="bo-rc-actions">
          ${r.locked ? `<button type="button" class="btn btn-sm btn-glow" data-bo-unlock="${esc(r.id)}">🔓 Desbloquear</button>` : ''}
          ${r.state === 'entregado' && !ex.released?.[r.id] ? `<button type="button" class="btn btn-sm btn-ghost" data-bo-unlock="${esc(r.id)}" data-bo-release>🔓 Liberar sesión cerrada</button>` : ''}
          ${r.hasJoined && r.state !== 'entregado' && ex.active ? `<button type="button" class="btn btn-sm btn-ghost" data-bo-finish="${esc(r.id)}">⛔ Calificar así</button>` : ''}
          ${r.hasJoined && ex.source === 'custom' ? `<button type="button" class="btn btn-sm btn-ghost" data-bo-results="${esc(r.id)}">${resultsOpenFor === r.id ? 'Ocultar respuestas' : '📋 Ver respuestas'}</button>` : ''}
        </div>
        ${resultsOpenFor === r.id ? `<div class="bo-results">${resultsHTML(r.id)}</div>` : ''}
      </div>` : ''}
    </article>`;
}

function controlRoomHTML(rows, ex) {
  const states = rows.map((r) => rosterState(r, ex));
  const total = rows.length;
  const online = states.filter((x) => x.st !== 'idle').length;
  const answering = states.filter((x) => x.st === 'exam').length;
  const done = states.filter((x) => x.st === 'done').length;
  const alerts = states.filter((x) => x.st === 'out' || x.st === 'locked').length + states.reduce((a, x) => a + (x.st === 'exam' && x.exits ? 1 : 0), 0);
  const first = !rosterShown;
  rosterShown = true;
  const stat = (n, of, label, cls) => `<div class="bo-ctl-stat ${cls}"><b class="mono">${n}${of != null ? `<small>/${of}</small>` : ''}</b><span class="mono">${label}</span></div>`;
  return `
  <section class="card bo-ctl ${first ? 'is-first' : ''} ${ex.active ? 'is-live' : ''}" data-wing-enter>
    <div class="bo-ctl-bg" aria-hidden="true"><i class="bo-ctl-radar"></i><i class="bo-ctl-scan"></i><i class="bo-ctl-grid"></i></div>
    <header class="bo-ctl-head">
      <div class="bo-ctl-title">
        <span class="mono bo-ctl-kicker"><i class="bo-ctl-rec"></i>${ex.active ? 'SALA DE CONTROL · EXAMEN EN CURSO' : 'SALA DE CONTROL · EN ESPERA'}</span>
        <h2>Monitoreo en vivo</h2>
        <span class="mono muted bo-ctl-hint">Toca una placa para ver detalles</span>
      </div>
      <div class="bo-ctl-stats">
        ${stat(online, total, 'CONECTADOS', 'is-cyan')}
        ${stat(answering, null, 'CONTESTANDO', 'is-green')}
        ${stat(done, null, 'TERMINADOS', 'is-blue')}
        ${stat(alerts, null, 'ALERTAS', alerts ? 'is-red is-hot' : 'is-red')}
      </div>
    </header>
    <div class="bo-roster" role="list">
      ${rows.map((r, i) => rosterCardHTML(r, ex, i)).join('')}
    </div>
  </section>`;
}

/* ------------------------------------------------------------------
   Menú grande del panel docente · secciones
   ------------------------------------------------------------------ */
const SEC_KEY = 'bo:panel-sec';
const SECTIONS = [
  { id: 'stats', ico: '📊', title: 'Estadísticas', sub: 'Promedio del grupo y qué contestó cada pregunta', c: 'var(--cyan)' },
  { id: 'progreso', ico: '⏱', title: 'Progreso', sub: 'En qué pregunta va cada residente, en vivo', c: '#3ccf8e' },
  { id: 'ranking', ico: '🏆', title: 'Ranking', sub: 'Podio y clasificación del grupo', c: '#ffc857' },
  { id: 'perfiles', ico: '🩺', title: 'Perfiles R2', sub: 'Detalle, respuestas y temas de cada residente', c: '#8ab4ff' },
  { id: 'vigilancia', ico: '🛰', title: 'Vigilancia en vivo', sub: 'Salidas de pantalla, interrupciones y bloqueos', c: 'var(--crimson)' },
  { id: 'mensajes', ico: '✉️', title: 'Mensajes y alertas', sub: 'Escriba a todos o a un residente', c: '#c38bff' },
  { id: 'consola', ico: '🎛', title: 'Consola de examen', sub: 'Subir examen (Word), configurar y lanzar', c: '#ff8a5c' },
];
const secById = (id) => SECTIONS.find((x) => x.id === id) || null;
function getSec() {
  try { const v = sessionStorage.getItem(SEC_KEY); return secById(v) ? v : 'inicio'; } catch { return 'inicio'; }
}
function setSec(v) {
  try { sessionStorage.setItem(SEC_KEY, v); } catch {}
}

let msgDraft = { to: 'all', kind: 'mensaje', text: '' };
let msgBusy = false;
const MSG_TEMPLATES = [
  'Quedan 5 minutos: revisen sus respuestas.',
  'Regresen a la pantalla del examen, por favor.',
  'Pueden entregar cuando terminen.',
  'Todo en orden, sigan contestando.',
];

function tratadoCardHTML(compact = false) {
  return `<section class="card bo-tratado ${compact ? 'is-compact' : ''}" data-wing-enter>
    <div class="bo-tratado-ico" aria-hidden="true">📚</div>
    <div class="bo-tratado-body">
      <p class="mono ads-kicker">FUENTES DE LA APP</p>
      <h3>Tratado de Cirugía General y Schwartz</h3>
      <p>Todo el contenido de CALOT y las preguntas de repaso están basados en el <b>Tratado de Cirugía General</b> y en <b>Schwartz · Principios de Cirugía</b>. Puede consultar ahí la información de cada pregunta; en el detalle de cada residente, el botón <b>«Ver en la app»</b> abre el fragmento del resumen que corresponde.</p>
    </div>
  </section>`;
}

function voiceBarHTML() {
  const muted = isVoiceMuted();
  return `<div class="bo-voice-bar" data-bo-voicebar>
    <button type="button" class="btn btn-sm btn-ghost" data-bo-voice="toggle" aria-pressed="${muted ? 'false' : 'true'}">${muted ? '🔇 Voz guía apagada' : '🔊 Voz guía activa'}</button>
    <button type="button" class="btn btn-sm btn-ghost" data-bo-voice="replay">↻ Escuchar bienvenida</button>
    ${voiceUnlocked() || muted ? '' : '<span class="mono bo-voice-hint">Toque cualquier parte para activar la voz</span>'}
  </div>`;
}

function menuHTML(rows, ex) {
  const done = rows.filter((r) => r.state === 'entregado').length;
  const joined = rows.filter((r) => r.hasJoined).length;
  const alerts = rows.filter((r) => r.state === 'bloqueado_trampa').length;
  const exits = rows.reduce((a, r) => a + r.strikes, 0);
  const prom = done ? Math.round(rows.filter((r) => r.state === 'entregado').reduce((a, r) => a + (r.scorePct || 0), 0) / done) : null;
  const msgs = Array.isArray(ex.msgs) ? ex.msgs.length : 0;
  const meta = {
    stats: prom != null ? `Promedio ${prom}%` : ex.startedAt ? 'En curso' : 'Sin examen aún',
    progreso: ex.active ? `${rows.filter((r) => r.state === 'en_examen').length} contestando` : `${done} entregados`,
    ranking: done ? `${done} calificados` : '—',
    perfiles: `${joined}/${rows.length} conectados`,
    vigilancia: alerts ? `⚠ ${alerts} bloqueado${alerts === 1 ? '' : 's'}` : `${exits} salida${exits === 1 ? '' : 's'}`,
    mensajes: msgs ? `${msgs} enviado${msgs === 1 ? '' : 's'}` : 'Ninguno aún',
    consola: ex.active ? '🔴 Examen en curso' : ex.custom ? `📄 ${ex.custom.count} preguntas listas` : 'Sin examen cargado',
  };
  return `<nav class="bo-menu" aria-label="Secciones del panel">
    ${SECTIONS.map((s) => `<button type="button" class="bo-menu-card ${s.id === 'vigilancia' && alerts ? 'is-hot' : ''}" style="--c:${s.c}" data-bo-sec="${s.id}">
      <span class="bo-menu-ico" aria-hidden="true">${s.ico}</span>
      <span class="bo-menu-txt"><b>${s.title}</b><small>${s.sub}</small></span>
      <span class="bo-menu-meta mono">${esc(meta[s.id] || '')}</span>
    </button>`).join('')}
  </nav>`;
}

function secHeadHTML(sec) {
  const s = secById(sec);
  return `<div class="bo-sec-bar" data-wing-enter>
    <button type="button" class="btn btn-sm btn-ghost bo-sec-back" data-bo-sec="inicio">← Inicio</button>
    <h2 class="bo-sec-title"><span aria-hidden="true">${s.ico}</span> ${s.title}</h2>
    <nav class="bo-sec-tabs" aria-label="Otras secciones">${SECTIONS.filter((x) => x.id !== sec).map((x) => `<button type="button" class="bo-sec-tab" data-bo-sec="${x.id}" title="${x.title}">${x.ico}<span>${x.title}</span></button>`).join('')}</nav>
  </div>`;
}

function messagesHTML(ex) {
  const list = (Array.isArray(ex.msgs) ? ex.msgs : []).slice().reverse();
  const nameOf = (id) => (id === 'all' ? 'Todos' : R2_RESIDENTS.find((r) => r.id === id)?.name || id);
  const left = 280 - (msgDraft.text || '').length;
  return `<section class="card bo-msg-card" data-wing-enter data-bo-msgform>
    <p class="mono ads-kicker">ENVIAR</p>
    <div class="bo-msg-grid">
      <label class="bo-field"><span class="mono">PARA</span>
        <select class="input" data-bo-msg="to">
          <option value="all" ${msgDraft.to === 'all' ? 'selected' : ''}>Todos los R2</option>
          ${R2_RESIDENTS.map((r) => `<option value="${r.id}" ${msgDraft.to === r.id ? 'selected' : ''}>${esc(r.name)}</option>`).join('')}
        </select>
      </label>
      <div class="bo-field"><span class="mono">TIPO</span>
        <div class="bo-msg-kind" role="radiogroup">
          <button type="button" role="radio" aria-checked="${msgDraft.kind === 'mensaje'}" class="${msgDraft.kind === 'mensaje' ? 'is-on' : ''}" data-bo-msgkind="mensaje">✉ Mensaje<small>Banner arriba</small></button>
          <button type="button" role="radio" aria-checked="${msgDraft.kind === 'alerta'}" class="${msgDraft.kind === 'alerta' ? 'is-on is-alert' : ''}" data-bo-msgkind="alerta">⚠ Alerta<small>Ventana + tono suave</small></button>
        </div>
      </div>
    </div>
    <label class="bo-field"><span class="mono">TEXTO <small class="muted" data-bo-msg-left>${left}</small></span>
      <textarea class="input bo-msg-text" rows="3" maxlength="280" placeholder="Escriba su mensaje…" data-bo-msg="text">${esc(msgDraft.text || '')}</textarea>
    </label>
    <div class="bo-msg-tpl">${MSG_TEMPLATES.map((x, i) => `<button type="button" class="bo-chip" data-bo-msgtpl="${i}">${esc(x)}</button>`).join('')}</div>
    <button type="button" class="btn btn-glow bo-msg-send" data-bo-act="msg-send" ${msgBusy ? 'disabled' : ''}>${msgBusy ? 'Enviando…' : msgDraft.kind === 'alerta' ? '⚠ Enviar alerta' : '✉ Enviar mensaje'}</button>
  </section>
  <section class="card bo-msg-card" data-wing-enter>
    <p class="mono ads-kicker">ENVIADOS</p>
    ${list.length ? `<ul class="bo-msg-sent">${list.map((m) => `<li class="${m.kind === 'alerta' ? 'is-alert' : ''}">
      <span class="mono">${m.kind === 'alerta' ? '⚠' : '✉'} ${esc(nameOf(m.to))} · ${esc(fmtClockTime(m.at))}</span>
      <p>${esc(m.text)}</p></li>`).join('')}</ul>` : '<p class="muted mono">Todavía no ha enviado mensajes.</p>'}
  </section>`;
}

function fmtClockTime(ts) {
  try { return new Date(ts).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }); } catch { return ''; }
}

export function render() {
  const rows = buildRows();
  const ex = board.exam || {};
  const conectados = rows.filter((r) => r.hasJoined).length;
  const navegando = rows.filter((r) => r.hasJoined && r.state === 'navegando').length;
  const enExamen = rows.filter((r) => r.state === 'en_examen').length;
  const entregadosList = rows.filter((r) => r.state === 'entregado');
  const bloqueadosList = rows.filter((r) => r.state === 'bloqueado_trampa');
  const conSalidas = rows.filter((r) => r.strikes > 0).length;
  const withBrowser = rows.filter((r) => r.hasJoined && r.browser);
  const okBrowsers = withBrowser.filter((r) => r.browser.allowed).length;
  const badBrowsers = withBrowser.length - okBrowsers;
  const conInterrupciones = rows.filter((r) => r.events.some((e) => e.k === 'interrupcion')).length;
  const prom = entregadosList.length
    ? Math.round(entregadosList.reduce((a, r) => a + (r.scorePct || 0), 0) / entregadosList.length)
    : 0;

  const sec = getSec();
  const kpisHTML = () => `
  <div class="ads-kpis" data-wing-enter>
    <article class="card lamp" style="--c:var(--cyan)">
      <p class="mono">R2 conectados</p>
      <div class="big"><span>${conectados}<small>/${R2_RESIDENTS.length}</small></span></div>
      <p class="muted"><b>${navegando}</b> explorando la app · <b>${enExamen}</b> contestando</p>
    </article>
    <article class="card lamp" style="--c:var(--crimson)">
      <p class="mono">Estado del bloqueo</p>
      <div class="big"><span>${ex.active ? 'ACTIVO' : 'EN ESPERA'}</span></div>
      <p class="muted">${ex.active ? `${esc(ex.topicLabel)} · ${ex.questionCount} preg.` : 'Los R2 están navegando libremente'}</p>
    </article>
    <article class="card lamp" style="--c:var(--repaso)">
      <p class="mono">Exámenes entregados</p>
      <div class="big"><span>${entregadosList.length}<small>/${conectados || R2_RESIDENTS.length}</small></span></div>
      <p class="muted">Promedio actual: <b>${prom}%</b></p>
    </article>
    <article class="card lamp ads-kpi-alert" style="--c:var(--crimson)">
      <p class="mono">Vigilancia Anti-Trampa</p>
      <div class="big"><span>${conSalidas}</span></div>
      <p class="muted"><b>${bloqueadosList.length}</b> bloqueados esperando su decisión${conInterrupciones ? ` · <b style="color:#e6a700">${conInterrupciones}</b> con interrupciones` : ''}</p>
    </article>
    <article class="card lamp" style="--c:${badBrowsers ? 'var(--crimson)' : 'var(--cyan)'}">
      <p class="mono">Navegadores</p>
      <div class="big"><span>${okBrowsers}<small>/${withBrowser.length}</small></span></div>
      <p class="muted bo-browser-summary">${okBrowsers} en Safari/Chrome · <b class="${badBrowsers ? 'is-bad' : ''}">${badBrowsers} ${badBrowsers === 1 ? 'navegador no permitido' : 'navegadores no permitidos'}</b></p>
    </article>
  </div>`;
  const consoleHTML = () => `
  <section class="card bo-control-card" data-wing-enter>
    <div class="ads-sec-head">
      <div>
        <p class="mono ads-kicker">CONFIGURACIÓN Y DISPARO SIMULTÁNEO</p>
        <h2>Consola de Mando · Examen R2</h2>
      </div>
      <div class="bo-control-actions">
        <button type="button" class="btn btn-sm btn-ghost" data-bo-act="csv">${icon('clipboard')} Descargar Excel (CSV)</button>
        <button type="button" class="btn btn-sm btn-ghost" data-bo-act="reset">${icon('trash')} Reiniciar sala en cero</button>
      </div>
    </div>

    <div class="bo-config-grid">
      <label class="bo-field">
        <span class="mono">PREGUNTAS</span>
        <select class="input" data-bo-cfg="source">
          <option value="banco" ${useCustomSource(ex) ? '' : 'selected'}>Banco CALOT (por tema)</option>
          ${ex.custom ? `<option value="custom" ${useCustomSource(ex) ? 'selected' : ''}>📄 ${esc(ex.custom.title)} (${ex.custom.count})</option>` : ''}
        </select>
      </label>
      ${useCustomSource(ex) ? '' : `<label class="bo-field">
        <span class="mono">MÓDULO DEL EXAMEN R2</span>
        <select class="input" data-bo-cfg="topic">
          ${TOPIC_OPTIONS.map((t) => `<option value="${t.id}" ${formDraft.topic === t.id ? 'selected' : ''}>${esc(t.label)}</option>`).join('')}
        </select>
      </label>
      <label class="bo-field">
        <span class="mono">REACTIVOS</span>
        <select class="input" data-bo-cfg="questionCount">
          ${[10, 15, 20, 25, 30].map((n) => `<option value="${n}" ${Number(formDraft.questionCount) === n ? 'selected' : ''}>${n} preguntas</option>`).join('')}
        </select>
      </label>`}
      <label class="bo-field">
        <span class="mono">TIEMPO LÍMITE</span>
        <select class="input" data-bo-cfg="durationMin">
          ${[15, 20, 30, 45, 60, 90].map((m) => `<option value="${m}" ${Number(formDraft.durationMin) === m ? 'selected' : ''}>${m} minutos</option>`).join('')}
        </select>
      </label>
      <label class="bo-field">
        <span class="mono">CANDADO ANTI-TRAMPA</span>
        <select class="input" data-bo-cfg="strictMode">
          <option value="2strikes" ${formDraft.strictMode === '2strikes' ? 'selected' : ''}>Bloquear a la 2.ª salida de pantalla</option>
          <option value="1strike" ${formDraft.strictMode === '1strike' ? 'selected' : ''}>Muerte súbita (bloquear a la 1.ª salida)</option>
          <option value="warn" ${formDraft.strictMode === 'warn' ? 'selected' : ''}>Solo alertar y registrar salidas</option>
        </select>
      </label>
    </div>

    <div class="bo-launch-bar">
      ${!ex.active ? `
        <button type="button" class="btn btn-glow lg bo-launch-btn" data-bo-act="launch">
          🔴 BLOQUEAR PLATAFORMA A TODOS E INICIAR EXAMEN AHORA
        </button>
      ` : `
        <button type="button" class="btn btn-glow lg bo-launch-btn is-running" data-bo-act="preview-lock">
          👁 VER BLOQUEO Y EXAMEN EN VIVO (MODO RESIDENTE)
        </button>
        <button type="button" class="btn btn-metal lg" data-bo-act="reopen">
          🔓 SUSPENDER BLOQUEO Y DEJARLOS NAVEGAR
        </button>
        <button type="button" class="btn btn-ghost lg" data-bo-act="stop">
          ⏹ CERRAR EXAMEN DEFINITIVO
        </button>
      `}
    </div>
  </section>`;

  let body = '';
  if (sec === 'inicio') {
    body = `${menuHTML(rows, ex)}${tratadoCardHTML()}`;
  } else if (sec === 'stats') {
    body = `${secHeadHTML(sec)}${kpisHTML()}${dashboardSectionHTML('stats', rows, ex, liveResults)}`;
  } else if (sec === 'progreso' || sec === 'ranking') {
    body = `${secHeadHTML(sec)}${dashboardSectionHTML(sec, rows, ex, liveResults)}`;
  } else if (sec === 'perfiles') {
    body = `${secHeadHTML(sec)}${controlRoomHTML(rows, ex)}${tratadoCardHTML(true)}`;
  } else if (sec === 'vigilancia') {
    body = `${secHeadHTML(sec)}${vigilanceSummaryHTML(rows, ex)}${dashboardSectionHTML('vigilancia', rows, ex, liveResults)}`;
  } else if (sec === 'mensajes') {
    body = `${secHeadHTML(sec)}${messagesHTML(ex)}`;
  } else if (sec === 'consola') {
    body = `${secHeadHTML(sec)}${customExamCardHTML(ex)}${consoleHTML()}`;
  }

  return `
<div class="ads-view bo-panel is-sec-${sec}">
  <header class="page-head wing-hero is-stats ads-hero ${sec === 'inicio' ? '' : 'is-compact'}" data-wing-enter>
    <div class="wing-top-bar">
      <span class="mono wing-badge">CENTRO DE CONTROL DE EXAMEN R2 · DRA. ARACELI HERNÁNDEZ VARGAS · HGR 72</span>
      <div class="wing-top-actions">
        <span class="mono wing-live-pill ads-private"><i class="wing-dot" aria-hidden="true"></i>${ex.active ? '🔴 EXAMEN EN CURSO' : '🟢 EXPLORACIÓN LIBRE'}</span>
        <button type="button" class="btn btn-sm btn-ghost" data-bo-act="switch-card">${icon('arrowL')} Ver tarjetas R2</button>
      </div>
    </div>
    ${sec === 'inicio' ? `<div class="wing-main-row">
      <div>
        <h1>Panel docente <em>Generación R2</em></h1>
        <p class="wing-lead">Elija una sección. Desde cualquier sección vuelve aquí con <b>← Inicio</b>. Los ${R2_RESIDENTS.length} residentes navegan libres hasta que lance el examen desde la <b>Consola de examen</b>.</p>
      </div>
    </div>` : ''}
    ${voiceBarHTML()}
  </header>

  ${body}
</div>`;
}

function vigilanceSummaryHTML(rows, ex) {
  const blocked = rows.filter((r) => r.state === 'bloqueado_trampa');
  const out = rows.filter((r) => r.strikes > 0);
  const tabs = rows.filter((r) => r.events.some((e) => e.k === 'pestana'));
  const ints = rows.filter((r) => r.events.some((e) => e.k === 'interrupcion'));
  const card = (r, why, cls) => `<li class="${cls}"><b>${esc(r.name)}</b><span class="mono">${why}</span>${r.state === 'bloqueado_trampa' ? `<button type="button" class="btn btn-sm btn-glow" data-bo-unlock="${r.id}">🔓 Autorizar</button>` : ''}</li>`;
  const items = [
    ...blocked.map((r) => card(r, `🔒 Bloqueado · ${r.strikes} salidas · necesita su autorización`, 'is-blocked')),
    ...out.filter((r) => r.state !== 'bloqueado_trampa').map((r) => card(r, `🚪 ${r.strikes} salida${r.strikes === 1 ? '' : 's'}`, 'is-out')),
    ...ints.filter((r) => !out.includes(r)).map((r) => card(r, '🟡 Interrupción (Siri, notificación…)', 'is-int')),
    ...tabs.map((r) => card(r, `🧪 ${r.events.filter((e) => e.k === 'pestana').length} cambio(s) de pestaña · modo prueba, no cuenta`, 'is-test')),
  ];
  return `<section class="card bo-vig" data-wing-enter>
    <div class="bo-vig-stats">
      <div class="${blocked.length ? 'is-hot' : ''}"><b>${blocked.length}</b><span class="mono">BLOQUEADOS</span></div>
      <div><b>${out.length}</b><span class="mono">CON SALIDAS</span></div>
      <div><b>${ints.length}</b><span class="mono">INTERRUPCIONES</span></div>
      <div><b>${rows.filter((r) => r.isOnline).length}</b><span class="mono">EN LÍNEA</span></div>
    </div>
    ${items.length ? `<ul class="bo-vig-list">${items.join('')}</ul>` : `<p class="muted mono">🟢 ${ex.active ? 'Nadie ha salido de la pantalla.' : 'Sin incidencias registradas.'}</p>`}
  </section>`;
}

/* ------------------------------------------------------------------
   Avisos de voz para la doctora (comparando con la lectura anterior)
   ------------------------------------------------------------------ */
let voiceWired = false;
let voiceSnap = null; // { sessionId, active, res: { id: { st, exits, locked } } }
const fiveMinSaid = new Set();
function snapOf(b) {
  const ex = b?.exam || {};
  const res = {};
  for (const r of R2_RESIDENTS) {
    const x = b?.residents?.[r.id];
    const ev = Array.isArray(x?.events) ? x.events : [];
    res[r.id] = {
      st: x?.state || '',
      exits: ev.filter((e) => e.k === 'salida' || e.k === 'recarga' || e.k === 'pestana').length,
      locked: Boolean(x?.locked) || x?.state === 'bloqueado_trampa',
      joined: Number(x?.lastSeen) > 0 && x?.sessionId === ex.sessionId,
    };
  }
  return { sessionId: ex.sessionId, active: Boolean(ex.active), res };
}
function detectVoiceEvents(b) {
  const next = snapOf(b);
  const prev = voiceSnap;
  voiceSnap = next;
  if (!prev) return; // la primera lectura nunca dispara avisos
  const sameSession = prev.sessionId === next.sessionId;
  if (next.active && (!prev.active || !sameSession)) { say('examen-comenzo', { front: true }); return; }
  if (!next.active || !sameSession) return;
  let newlyDone = 0;
  for (const r of R2_RESIDENTS) {
    const a = prev.res[r.id];
    const z = next.res[r.id];
    if (!a || !z) continue;
    if (z.locked && !a.locked) say(`bloqueado-${r.id}`, { front: true });
    else if (z.exits > a.exits) say(`salio-${r.id}`);
    if (z.st === 'entregado' && a.st !== 'entregado') { newlyDone += 1; say(`termino-${r.id}`); }
  }
  if (newlyDone) {
    const inExam = R2_RESIDENTS.filter((r) => next.res[r.id].joined || next.res[r.id].st === 'entregado' || next.res[r.id].st === 'en_examen');
    if (inExam.length && inExam.every((r) => next.res[r.id].st === 'entregado')) say('todos-terminaron');
  }
}

export function mount(root, rerender) {
  // Voz guía: se desbloquea con el primer gesto dentro del panel
  if (!voiceWired) {
    voiceWired = true;
    // Solo mientras el panel docente está en pantalla
    const onGesture = () => { if (document.querySelector('.bo-panel')) unlockDocenteVoice(); };
    document.addEventListener('pointerdown', onGesture, { capture: true, passive: true });
    document.addEventListener('keydown', onGesture, { capture: true });
    onVoiceChange(() => {
      const bar = document.querySelector('.bo-panel [data-bo-voicebar]');
      if (bar) bar.outerHTML = voiceBarHTML();
    });
    window.addEventListener('hashchange', () => { if (!/adscrito/.test(location.hash)) stopVoice(); });
  }
  welcomeOnce();

  const keep = () => {
    if (!root.isConnected) return;
    if (document.activeElement?.closest?.('[data-bo-msgform]') && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    // No redibujar si la doctora tiene abierto un <select> o está editando el examen
    if (document.activeElement && document.activeElement.tagName === 'SELECT') return;
    if (document.activeElement?.closest?.('[data-bo-import]') && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    rerender({ keepScroll: true });
  };

  const pull = async (forceRender = false) => {
    try {
      const data = await fetchExamBoard();
      if (data?.exam) {
        const nextSig = boardSig(data);
        const changed = nextSig !== lastSig;
        board = data;
        lastSig = nextSig;
        try { detectVoiceEvents(data); } catch {}
        let resChanged = false;
        const ex = data.exam;
        // Tablero en vivo: con examen cargado se traen las respuestas de todos cada ~6 s
        const wantResults = ex.source === 'custom' && ex.startedAt && (ex.active ? (pullCount++ % 2 === 0 || changed) : (!liveResults || changed));
        if (wantResults) {
          try {
            const r = await adminExamAction('results');
            const sig = JSON.stringify(r?.picks || {});
            if (sig !== liveSig) { liveSig = sig; resChanged = true; }
            liveResults = r;
          } catch {}
        } else if (ex.source !== 'custom' && liveResults) {
          liveResults = null;
          liveSig = '';
          resChanged = true;
        }
        if (changed || forceRender || resChanged) keep();
      }
    } catch {}
  };

  if (!firstPullDone) {
    firstPullDone = true;
    pull(true);
  }
  clearInterval(pollTimer);
  pollTimer = setInterval(() => {
    if (!root.isConnected) { clearInterval(pollTimer); pollTimer = null; return; }
    pull(false);
  }, 3000);

  const rerenderNow = () => rerender({ keepScroll: true });

  // Reloj del tablero (sin redibujar todo el panel)
  clearInterval(clockTimer);
  clockTimer = setInterval(() => {
    if (!root.isConnected) { clearInterval(clockTimer); clockTimer = null; return; }
    const ex5 = board.exam || {};
    if (ex5.active && ex5.startedAt && ex5.sessionId && !fiveMinSaid.has(ex5.sessionId)) {
      const left = ex5.startedAt + (Number(ex5.durationMin) || 20) * 60000 - Date.now();
      if (left > 0 && left <= 300000) {
        fiveMinSaid.add(ex5.sessionId);
        // Solo si ya lo veníamos siguiendo (no al abrir el panel con <4 min)
        if (voiceSnap && left > 240000) say('cinco-minutos', { front: true });
      }
    }
    root.querySelectorAll('[data-bo-clock]').forEach((el) => {
      const end = Number(el.dataset.boClock) || 0;
      if (!end || !board.exam?.active) return;
      const t = Math.max(0, Math.round((end - Date.now()) / 1000));
      el.textContent = `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
    });
  }, 1000);

  const loadDraft = (parsed, title) => {
    importDraft = {
      title: title || 'Examen departamental R2',
      questions: parsed.questions.map((q) => ({ ...q, options: [...q.options] })),
      warnings: parsed.warnings || [],
      globalKey: parsed.globalKey || null,
    };
    if (!importDraft.questions.length) {
      toast('No encontré preguntas. Revisa que cada inciso empiece con A), B), C)…');
      importDraft = null;
    }
  };

  root.addEventListener('input', (e) => {
    const mEl = e.target.closest('[data-bo-msg]');
    if (mEl) {
      msgDraft[mEl.dataset.boMsg] = mEl.value;
      const left = root.querySelector('[data-bo-msg-left]');
      if (left) left.textContent = String(280 - (msgDraft.text || '').length);
      return;
    }
    const el = e.target.closest('[data-bo-imp]');
    if (!el || !importDraft) return;
    const kind = el.dataset.boImp;
    if (kind === 'title') importDraft.title = el.value;
    else if (kind === 'stem') importDraft.questions[Number(el.dataset.q)].stem = el.value;
    else if (kind === 'opt') importDraft.questions[Number(el.dataset.q)].options[Number(el.dataset.o)] = el.value;
  });

  root.addEventListener('change', async (e) => {
    const fileIn = e.target.closest('[data-bo-imp-file]');
    if (fileIn && fileIn.files?.[0]) {
      const file = fileIn.files[0];
      importBusy = true;
      rerenderNow();
      try {
        const parsed = await parseExamFile(file);
        loadDraft(parsed, file.name.replace(/\.(docx|txt|md)$/i, ''));
      } catch (err) {
        toast(err?.message || 'No se pudo leer el archivo');
      }
      importBusy = false;
      rerenderNow();
      return;
    }
    const mSel = e.target.closest('select[data-bo-msg]');
    if (mSel) { msgDraft[mSel.dataset.boMsg] = mSel.value; return; }
    const sel = e.target.closest('[data-bo-cfg]');
    if (!sel) return;
    const key = sel.dataset.boCfg;
    formDraft[key] = sel.value;
    if (key === 'source') rerenderNow();
  });

  root.addEventListener('click', async (e) => {
    const secBtn = e.target.closest('[data-bo-sec]');
    if (secBtn) {
      const v = secBtn.dataset.boSec;
      setSec(v);
      playUiSfx('click');
      if (v !== 'inicio') say(`sec-${v}`, { ttl: 6000 });
      rerender({ keepScroll: false });
      requestAnimationFrame(() => { try { window.scrollTo({ top: 0 }); root.closest('main, .main, #app')?.scrollTo?.({ top: 0 }); } catch {} });
      return;
    }
    const vBtn = e.target.closest('[data-bo-voice]');
    if (vBtn) {
      unlockDocenteVoice();
      if (vBtn.dataset.boVoice === 'toggle') {
        const m = !isVoiceMuted();
        setVoiceMuted(m);
        toast(m ? 'Voz guía apagada' : 'Voz guía activada');
      } else {
        if (isVoiceMuted()) setVoiceMuted(false);
        replayWelcome();
      }
      return;
    }
    const kBtn = e.target.closest('[data-bo-msgkind]');
    if (kBtn) { msgDraft.kind = kBtn.dataset.boMsgkind; rerenderNow(); return; }
    const tBtn = e.target.closest('[data-bo-msgtpl]');
    if (tBtn) { msgDraft.text = MSG_TEMPLATES[Number(tBtn.dataset.boMsgtpl)] || ''; rerenderNow(); return; }
    const fragBtn = e.target.closest('[data-bo-frag]');
    if (fragBtn) {
      const q = resultsData?.content?.questions?.[Number(fragBtn.dataset.boFrag)];
      if (!q) return;
      try {
        const rv = await import('../fx/exam-review.js?v=20261122l');
        const frag = rv.matchFragment(q.stem, q.options[q.answer], (resultsData._topic ??= rv.dominantTopic(resultsData.content.questions.map((x) => ({ stem: x.stem, right: x.options[x.answer] }))) || ''));
        if (!frag) { toast('No encontré esta pregunta en los resúmenes de la app'); return; }
        if (!frag.confident) toast('Sin coincidencia exacta: se abre el tema más cercano del resumen');
        rv.openTopicReader({ frag }, { allowNavigate: false, closeLabel: '← Volver al panel' });
      } catch (err) {
        console.error('[panel] Ver en la app falló:', err);
        toast('No se pudo abrir el resumen');
      }
      return;
    }
    const pickBtn = e.target.closest('[data-bo-imp-pick]');
    if (pickBtn && importDraft) {
      const [qi, oi] = pickBtn.dataset.boImpPick.split(':').map(Number);
      importDraft.questions[qi].answer = oi;
      importDraft.questions[qi].answerFrom = 'selección manual';
      rerenderNow();
      return;
    }
    const delBtn = e.target.closest('[data-bo-imp-del]');
    if (delBtn && importDraft) {
      importDraft.questions.splice(Number(delBtn.dataset.boImpDel), 1);
      rerenderNow();
      return;
    }
    const cardBtn = e.target.closest('[data-bo-card]');
    if (cardBtn) {
      const id = cardBtn.dataset.boCard;
      openCardId = openCardId === id ? null : id;
      if (openCardId !== resultsOpenFor) resultsOpenFor = null;
      rerenderNow();
      return;
    }
    const resBtn = e.target.closest('[data-bo-results]');
    if (resBtn) {
      const id = resBtn.dataset.boResults;
      if (resultsOpenFor === id) { resultsOpenFor = null; rerenderNow(); return; }
      resultsOpenFor = id;
      resultsData = null;
      rerenderNow();
      try { resultsData = await adminExamAction('results'); } catch { toast('No se pudieron cargar las respuestas'); }
      rerenderNow();
      return;
    }

    const unlockBtn = e.target.closest('[data-bo-unlock]');
    if (unlockBtn) {
      playUiSfx('click');
      const tid = unlockBtn.dataset.boUnlock;
      board = await adminExamAction('unlock_resident', { targetId: tid });
      toast(unlockBtn.hasAttribute('data-bo-release') ? 'Sesión liberada: el residente vuelve a la app' : 'Examen desbloqueado para el residente');
      keep();
      return;
    }

    const finBtn = e.target.closest('[data-bo-finish]');
    if (finBtn) {
      playUiSfx('click');
      const tid = finBtn.dataset.boFinish;
      board = await adminExamAction('force_finish_resident', { targetId: tid });
      toast('Examen cerrado y calificado');
      keep();
      return;
    }

    const actBtn = e.target.closest('[data-bo-act]');
    if (!actBtn) return;
    const act = actBtn.dataset.boAct;
    playUiSfx('click');

    if (act === 'switch-card') {
      sessionStorage.removeItem('blackops:booted:v4');
      sessionStorage.removeItem('blackops:booted:v3');
      sessionStorage.removeItem('calot:booted');
      try { localStorage.removeItem('calot:rol'); } catch {}
      setPerfil('r2_mario');
      markBody();
      location.hash = '#/inicio';
      location.reload();
      return;
    }

    if (act === 'import-paste-toggle') { pasteOpen = !pasteOpen; rerenderNow(); return; }
    if (act === 'import-paste-read') {
      const txt = root.querySelector('[data-bo-imp-paste]')?.value || '';
      loadDraft(parseExamText(txt), 'Examen departamental R2');
      pasteOpen = false;
      rerenderNow();
      return;
    }
    if (act === 'import-cancel') {
      if (!window.confirm('¿Descartar los cambios del examen?')) return;
      importDraft = null;
      rerenderNow();
      return;
    }
    if (act === 'import-edit') {
      try {
        const r = await adminExamAction('get_exam');
        if (!r?.content) { toast('No se pudo abrir el examen guardado'); return; }
        importDraft = {
          title: r.content.title,
          questions: r.content.questions.map((q) => ({ ...q, options: [...q.options], answerFrom: 'guardada' })),
          warnings: [],
        };
      } catch { toast('No se pudo abrir el examen guardado'); }
      rerenderNow();
      return;
    }
    if (act === 'import-clear') {
      if (!window.confirm('¿Borrar el examen cargado del servidor? No se puede deshacer.')) return;
      try { board = await adminExamAction('clear_exam'); lastSig = boardSig(board); toast('Examen borrado'); } catch { toast('No se pudo borrar'); }
      rerenderNow();
      return;
    }
    if (act === 'import-fill-a' && importDraft) {
      importDraft.questions.forEach((q) => {
        if (!(q.answer >= 0)) { q.answer = 0; q.answerFrom = 'A en las que faltaban'; }
      });
      rerenderNow();
      return;
    }

    if (act === 'import-save' && importDraft) {
      const goTo = (qi, msg) => {
        toast(msg);
        const li = root.querySelectorAll('.bo-import-q')[qi];
        if (li) {
          li.scrollIntoView({ behavior: 'smooth', block: 'center' });
          li.classList.add('is-flash');
          setTimeout(() => li.classList.remove('is-flash'), 1600);
        }
      };
      const missingIdx = importDraft.questions.map((q, i) => (q.answer >= 0 ? -1 : i)).filter((i) => i >= 0);
      if (missingIdx.length) {
        goTo(missingIdx[0], `Faltan ${missingIdx.length} respuesta${missingIdx.length === 1 ? '' : 's'} correcta${missingIdx.length === 1 ? '' : 's'} · toca el inciso correcto o usa «Marcar A»`);
        return;
      }
      const badIdx = importDraft.questions.findIndex((q) => !String(q.stem || '').trim() || q.options.filter((o) => String(o || '').trim()).length < 2 || q.options.some((o) => !String(o || '').trim()));
      if (badIdx >= 0) {
        goTo(badIdx, `La pregunta ${badIdx + 1} tiene el enunciado o algún inciso vacío`);
        return;
      }
      const qsList = importDraft.questions
        .map((q) => ({ stem: String(q.stem || '').trim(), options: q.options.map((o) => String(o || '').trim()), answer: q.answer }));
      if (board.exam?.active) {
        toast('Hay un examen en curso: finalízalo antes de guardar uno nuevo');
        return;
      }
      importBusy = true;
      rerenderNow();
      try {
        board = await adminExamAction('upload_exam', {
          title: importDraft.title,
          questions: qsList,
          device: currentBrowserInfo()?.label || '',
        });
        lastSig = boardSig(board);
        importDraft = null;
        formDraft.source = 'custom'; // la consola pasa sola a este examen
        toast(`🔒 Examen guardado cifrado (${qsList.length} preguntas) · listo en la Consola de Mando`);
      } catch (err) {
        const m = String(err?.message || '');
        console.error('[examen] upload_exam falló:', m);
        toast(m.includes('no_secret') ? 'El servidor no tiene configurada la clave de cifrado'
          : m.includes('exam_active') ? 'Hay un examen en curso: finalízalo antes de guardar uno nuevo'
            : m.includes('bad_questions') ? 'El servidor rechazó alguna pregunta (revisa incisos y respuesta)'
              : m.includes('413') ? 'El examen es demasiado grande para guardarse'
                : `No se pudo guardar el examen (${m || 'sin conexión'}). Intenta de nuevo.`);
      }
      importBusy = false;
      rerenderNow();
      return;
    }

    if (act === 'msg-send') {
      const text = String(msgDraft.text || '').trim();
      if (!text) { toast('Escriba el mensaje primero'); root.querySelector('[data-bo-msg="text"]')?.focus(); return; }
      msgBusy = true;
      rerenderNow();
      try {
        board = await adminExamAction('send_message', { to: msgDraft.to, kind: msgDraft.kind, text });
        lastSig = boardSig(board);
        const who = msgDraft.to === 'all' ? 'todos los R2' : (R2_RESIDENTS.find((r) => r.id === msgDraft.to)?.name || msgDraft.to);
        toast(`${msgDraft.kind === 'alerta' ? '⚠ Alerta' : '✉ Mensaje'} enviado a ${who}`);
        msgDraft.text = '';
      } catch (err) {
        toast(`No se pudo enviar (${String(err?.message || 'sin conexión')})`);
      }
      msgBusy = false;
      rerenderNow();
      return;
    }

    if (act === 'csv') {
      let detail = null;
      if (board.exam?.source === 'custom') {
        try { detail = await adminExamAction('results'); } catch {}
      }
      downloadCSV(buildRows(), detail);
      toast('Reporte CSV descargado');
      return;
    }

    if (act === 'preview-lock') {
      try { sessionStorage.setItem('bo:docente-preview', '1'); } catch {}
      location.hash = '#/inicio';
      return;
    }

    if (act === 'launch') {
      const topicObj = TOPIC_OPTIONS.find((t) => t.id === formDraft.topic) || TOPIC_OPTIONS[0];
      const custom = useCustomSource(board.exam || {});
      if (custom && !window.confirm(`¿Iniciar «${board.exam.custom.title}» (${board.exam.custom.count} preguntas) para todos?`)) return;
      board = await adminExamAction('launch', {
        source: custom ? 'custom' : 'banco',
        topic: topicObj.id,
        topicLabel: topicObj.label,
        questionCount: Number(formDraft.questionCount) || 15,
        durationMin: Number(formDraft.durationMin) || 20,
        strictMode: formDraft.strictMode || '2strikes',
      });
      lastSig = boardSig(board);
      toast(`🔴 Bloqueo activado: ${custom ? board.exam?.topicLabel : topicObj.label} lanzado a todos los R2`);
      keep();
      return;
    }

    if (act === 'reopen') {
      board = await adminExamAction('reopen');
      lastSig = boardSig(board);
      toast('Bloqueo suspendido: los R2 pueden navegar de nuevo');
      keep();
      return;
    }

    if (act === 'stop') {
      board = await adminExamAction('stop');
      lastSig = boardSig(board);
      toast('Examen finalizado para todo el grupo');
      keep();
      return;
    }

    if (act === 'reset') {
      if (!window.confirm('¿Reiniciar la sala? Se borran los resultados y bitácoras de todos (el examen cargado se conserva).')) return;
      board = await adminExamAction('reset');
      lastSig = boardSig(board);
      toast('Sala de examen reiniciada en cero');
      keep();
    }
  });
}
