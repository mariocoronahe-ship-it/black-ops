/* ==========================================================================
   CALOT-OS · Black Ops · Centro de Control de Examen R2 (Dra. Hernández)
   Monitoreo en tiempo real de los residentes R2 mientras navegan,
   botón de bloqueo simultáneo para lanzar el examen, vigilancia anti-trampa
   (salidas de pantalla, desbloqueo remoto) y descarga de calificaciones en CSV.
   ========================================================================== */

import { icon } from '../icons.js?v=20261122e';
import { R2_RESIDENTS, isOwner, setPerfil, markBody } from '../perfil.js?v=20261122e';
import { esc, toast } from '../ui.js';
import { playUiSfx } from '../fx/audio.js?v=20261122e';
import { fetchExamBoard, adminExamAction, currentBrowserInfo } from '../fx/exam-lockdown.js?v=20261122e';
import { parseExamFile, parseExamText, OPTION_LETTERS } from '../fx/exam-import.js?v=20261122e';
import { dashboardHTML } from './adscrito-dashboard.js?v=20261122e';

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
    return `${ex.active}:${ex.sessionId}:${ex.topic}:${ex.questionCount}:${rs}`;
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
const KIND_TXT = { salida: 'salió', recarga: 'recargó/cerró', parpadeo: 'parpadeo', interrupcion: 'interrupción' };

function eventText(e) {
  if (e.k === 'cambio') {
    const what = e.from ? `cambió ${e.from}→${e.to}` : `contestó ${e.to}`;
    return `${e.ref || 'salida'} y ${what} en P${e.q}`;
  }
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
  const changes = r.events.filter((e) => e.k === 'cambio');
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
      vals.push(`"${detail.content.questions.map((q, i) => `${i + 1}:${picks[i] == null ? '-' : OPTION_LETTERS[picks[i]]}${picks[i] == null ? '' : picks[i] === q.answer ? '✓' : '✗'}`).join(' ')}"`);
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
        <button type="button" class="btn btn-glow" data-bo-act="import-save" ${missing || !d.questions.length || importBusy ? 'disabled' : ''}>🔒 Guardar examen (${d.questions.length} preguntas)</button>
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
        <p class="muted">Sube el Word (.docx) con sus preguntas. La respuesta correcta se detecta si el inciso está en <b>negritas</b>, si hay una línea «Respuesta: C» o una hoja de respuestas al final. Antes de guardar podrá revisar y corregir todo.</p>
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
  return `<ol class="bo-results-list mono">${content.questions.map((q, i) => {
    const p = picks[i];
    const ok = p === q.answer;
    return `<li class="${p == null ? 'is-none' : ok ? 'is-ok' : 'is-bad'}">P${i + 1}: ${p == null ? 'sin contestar' : `eligió ${OPTION_LETTERS[p]}`} ${p == null ? '' : ok ? '✓' : `✗ (correcta ${OPTION_LETTERS[q.answer]})`}</li>`;
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
        <div class="bo-rc-actions">
          ${r.locked ? `<button type="button" class="btn btn-sm btn-glow" data-bo-unlock="${esc(r.id)}">🔓 Desbloquear</button>` : ''}
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

  return `
<div class="ads-view">
  <header class="page-head wing-hero is-stats ads-hero" data-wing-enter>
    <div class="wing-top-bar">
      <span class="mono wing-badge">CENTRO DE CONTROL DE EXAMEN R2 · DRA. ARACELI HERNÁNDEZ VARGAS · HGR 72</span>
      <div class="wing-top-actions">
        <span class="mono wing-live-pill ads-private"><i class="wing-dot" aria-hidden="true"></i>${ex.active ? '🔴 BLOQUEO Y EXAMEN EN CURSO' : '🟢 SALA EN EXPLORACIÓN LIBRE'}</span>
        <button type="button" class="btn btn-sm btn-ghost" data-bo-act="switch-card">${icon('arrowL')} Ver tarjetas R2</button>
      </div>
    </div>
    <div class="wing-main-row">
      <div>
        <h1>Control de Examen <em>Generación R2</em></h1>
        <p class="wing-lead">Mientras el examen está inactivo, los ${R2_RESIDENTS.length} residentes R2 pueden elegir su tarjeta y navegar por la plataforma. Al presionar <b>Bloquear plataforma e iniciar examen</b>, a todos se les congela la interfaz con una animación simultánea y comienza la evaluación con detector anti-trampa.</p>
      </div>
    </div>
  </header>

  ${controlRoomHTML(rows, ex)}

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
  </div>

  ${dashboardHTML(rows, ex, liveResults)}

  ${customExamCardHTML(ex)}

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
  </section>

</div>`;
}

export function mount(root, rerender) {
  const keep = () => {
    if (!root.isConnected) return;
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
    };
    if (!importDraft.questions.length) {
      toast('No encontré preguntas. Revisa que cada inciso empiece con A), B), C)…');
      importDraft = null;
    }
  };

  root.addEventListener('input', (e) => {
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
    const sel = e.target.closest('[data-bo-cfg]');
    if (!sel) return;
    const key = sel.dataset.boCfg;
    formDraft[key] = sel.value;
    if (key === 'source') rerenderNow();
  });

  root.addEventListener('click', async (e) => {
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
      toast('Examen desbloqueado para el residente');
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
    if (act === 'import-save' && importDraft) {
      const qsList = importDraft.questions
        .map((q) => ({ stem: String(q.stem || '').trim(), options: q.options.map((o) => String(o || '').trim()), answer: q.answer }))
        .filter((q) => q.stem);
      if (qsList.some((q) => !(q.answer >= 0) || q.options.filter(Boolean).length < 2 || q.options.some((o) => !o))) {
        toast('Cada pregunta necesita enunciado, incisos llenos y respuesta correcta');
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
        formDraft.source = 'auto';
        toast(`🔒 Examen guardado cifrado (${qsList.length} preguntas)`);
      } catch (err) {
        toast(String(err?.message || '').includes('500') ? 'El servidor no tiene configurada la clave de cifrado' : 'No se pudo guardar el examen');
      }
      importBusy = false;
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
