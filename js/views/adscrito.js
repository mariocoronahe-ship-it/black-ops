/* ==========================================================================
   CALOT-OS · Black Ops · Centro de Control de Examen R2 (Dra. Hernández)
   Monitoreo en tiempo real de los 14 residentes R2 mientras navegan,
   botón de bloqueo simultáneo para lanzar el examen, vigilancia anti-trampa
   (salidas de pantalla, desbloqueo remoto) y descarga de calificaciones en CSV.
   ========================================================================== */

import { icon } from '../icons.js?v=20261121y';
import { R2_RESIDENTS, isOwner, setPerfil, markBody } from '../perfil.js?v=20261121y';
import { esc, toast } from '../ui.js';
import { playUiSfx } from '../fx/audio.js?v=20261121y';
import { fetchExamBoard, adminExamAction } from '../fx/exam-lockdown.js?v=20261121y';

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

let formDraft = {
  topic: 'colon',
  questionCount: 15,
  durationMin: 20,
  strictMode: '2strikes',
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

function downloadCSV(rows) {
  const ex = board.exam || {};
  const header = ['Residente', 'Grado', 'Estado', 'Navegador', 'Calificacion (%)', 'Aciertos', 'Total Reactivos', 'Salidas Detectadas', 'Detalle Anti-Trampa', 'Ultima Conexion'];
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
        <p class="wing-lead">Mientras el examen está inactivo, los 14 residentes R2 pueden elegir su tarjeta y navegar por la plataforma. Al presionar <b>Bloquear plataforma e iniciar examen</b>, a todos se les congela la interfaz con una animación simultánea y comienza la evaluación con detector anti-trampa.</p>
      </div>
    </div>
  </header>

  <div class="ads-kpis" data-wing-enter>
    <article class="card lamp" style="--c:var(--cyan)">
      <p class="mono">R2 conectados</p>
      <div class="big"><span>${conectados}<small>/14</small></span></div>
      <p class="muted"><b>${navegando}</b> explorando la app · <b>${enExamen}</b> contestando</p>
    </article>
    <article class="card lamp" style="--c:var(--crimson)">
      <p class="mono">Estado del bloqueo</p>
      <div class="big"><span>${ex.active ? 'ACTIVO' : 'EN ESPERA'}</span></div>
      <p class="muted">${ex.active ? `${esc(ex.topicLabel)} · ${ex.questionCount} preg.` : 'Los R2 están navegando libremente'}</p>
    </article>
    <article class="card lamp" style="--c:var(--repaso)">
      <p class="mono">Exámenes entregados</p>
      <div class="big"><span>${entregadosList.length}<small>/${conectados || 14}</small></span></div>
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
      </label>
      <label class="bo-field">
        <span class="mono">TIEMPO LÍMITE</span>
        <select class="input" data-bo-cfg="durationMin">
          ${[15, 20, 30, 45].map((m) => `<option value="${m}" ${Number(formDraft.durationMin) === m ? 'selected' : ''}>${m} minutos</option>`).join('')}
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

  <section class="card ads-table-card" data-wing-enter>
    <div class="ads-sec-head">
      <h2>Monitoreo en Vivo · 14 Residentes R2</h2>
      <span class="mono muted">Actualización automática cada 3 segundos</span>
    </div>
    <div class="ads-table-wrap">
      <table class="ads-table">
        <thead>
          <tr>
            <th>Residente R2</th>
            <th>Estado en tiempo real</th>
            <th>Avance / Reactivo</th>
            <th>Calificación</th>
            <th>Salidas (Anti-Trampa)</th>
            <th>Última señal</th>
            <th>Control Docente</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((r) => {
            const pct = r.qTotal ? Math.round((r.answered / r.qTotal) * 100) : 0;
            return `
            <tr class="${r.locked ? 'is-locked-row' : ''}">
              <td class="ads-name">
                <span class="ads-avatar">${esc(r.ini)}</span>
                <div>
                  <b>${esc(r.name)}</b>
                  <small class="mono muted" style="display:block;font-size:10.5px">${esc(r.tema)}</small>
                  ${r.hasJoined ? browserChipHTML(r) : ''}
                </div>
              </td>
              <td data-label="Estado">${stateBadgeHTML(r)}</td>
              <td data-label="Avance">
                <div class="ads-meter"><i style="width:${pct}%"></i></div>
                <b>${r.answered}/${r.qTotal}</b>
              </td>
              <td data-label="Calificación">
                ${r.scorePct != null ? `<b class="bo-score-pill">${r.scorePct}%</b> <small class="muted">(${r.correct}/${r.total})</small>` : '<span class="muted">—</span>'}
              </td>
              <td data-label="Anti-Trampa">${antiCheatHTML(r)}</td>
              <td data-label="Última señal" class="mono muted">${esc(r.lastSeenLabel)}</td>
              <td data-label="Acciones">
                <div style="display:flex;gap:6px;flex-wrap:wrap">
                  ${r.locked ? `<button type="button" class="btn btn-sm btn-glow" data-bo-unlock="${esc(r.id)}">🔓 Desbloquear</button>` : ''}
                  ${r.hasJoined && r.state !== 'entregado' && ex.active ? `<button type="button" class="btn btn-sm btn-ghost" data-bo-finish="${esc(r.id)}">⛔ Calificar así</button>` : ''}
                </div>
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </section>
</div>`;
}

export function mount(root, rerender) {
  const keep = () => {
    if (!root.isConnected) return;
    // No redibujar si la doctora tiene abierto un <select>
    if (document.activeElement && document.activeElement.tagName === 'SELECT') return;
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
        if (changed || forceRender) keep();
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

  root.addEventListener('change', (e) => {
    const sel = e.target.closest('[data-bo-cfg]');
    if (!sel) return;
    const key = sel.dataset.boCfg;
    formDraft[key] = sel.value;
  });

  root.addEventListener('click', async (e) => {
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

    if (act === 'csv') {
      downloadCSV(buildRows());
      toast('Reporte CSV descargado');
      return;
    }

    if (act === 'preview-lock') {
      location.hash = '#/inicio';
      return;
    }

    if (act === 'launch') {
      const topicObj = TOPIC_OPTIONS.find((t) => t.id === formDraft.topic) || TOPIC_OPTIONS[0];
      board = await adminExamAction('launch', {
        topic: topicObj.id,
        topicLabel: topicObj.label,
        questionCount: Number(formDraft.questionCount) || 15,
        durationMin: Number(formDraft.durationMin) || 20,
        strictMode: formDraft.strictMode || '2strikes',
      });
      lastSig = boardSig(board);
      toast(`🔴 Bloqueo activado: ${topicObj.label} lanzado a todos los R2`);
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
      board = await adminExamAction('reset');
      lastSig = boardSig(board);
      toast('Sala de examen reiniciada en cero');
      keep();
    }
  });
}
