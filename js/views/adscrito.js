/* ==========================================================================
   CALOT-OS · Panel Docente y Monitoreo en Vivo (Dra. Hernández / Dr. Mario)
   Seguimiento exclusivo y en tiempo real de las 3 residentes:
   Dra. Chantal, Dra. Areli y Dra. Daniela.
   Sin perfiles ficticios: muestra conexiones, tiempo por sección,
   temas y hojas aprendidas, tarjetas SM-2 y desempeño en simuladores.
   ========================================================================== */

import { icon } from '../icons.js?v=20261121q';
import { store, questions, todayISO } from '../store.js?v=20261121q';
import { TEMARIO_APRENDE_BASE as TEMARIO_APRENDE, TEMARIO_APRENDE as TEMARIO_ALL } from '../data/temario_aprende.js?v=20261121q';
import { esc, toast } from '../ui.js';
import { playUiSfx } from '../fx/audio.js?v=20261121q';
import { isOwner, isAdscrito } from '../perfil.js?v=20261121q';
import { loadBoard, resetTestersStats, accuracy, rankingMode } from '../ranking.js?v=20261121q';
import { loadState, saveState, defaultSessions, bitacoraHTML, evaluacionesHTML, sesionesHTML, servicioHTML, mensajesHTML } from './adscrito-secciones.js?v=20261121q';
import { subscribe, send as sendMsg, markRead, unread, threadHTML, deliveryMode } from '../mensajes.js?v=20261121q';

const TABS = [
  { id: 'resumen', label: 'Monitoreo en vivo', ic: 'grid' },
  { id: 'bitacora', label: 'Bitácora', ic: 'scalpel' },
  { id: 'evaluaciones', label: 'Evaluaciones', ic: 'clipboard' },
  { id: 'sesiones', label: 'Sesiones', ic: 'calendar' },
  { id: 'servicio', label: 'Servicio', ic: 'hospital' },
  { id: 'mensajes', label: 'Mensajes', ic: 'send' },
];
const ui = { bitRes: null, evalRes: null };

export const section = 'biblio';

const WEEKS = 8;
const SHORT = {
  piel: 'Piel y tejidos blandos',
  quemaduras: 'Quemaduras',
  neoplasias: 'Oncología quirúrgica',
  pared: 'Pared abdominal y hernias',
  esofago: 'Esófago y hiato',
  estomago: 'Estómago y duodeno',
  delgado: 'Intestino delgado',
  colon: 'Colon y apéndice',
  recto: 'Recto y ano',
  hepatobiliar: 'Hepatobiliar',
  trauma: 'Trauma y abdomen agudo',
};

const GAME_NAMES = {
  blitz: 'Blitz PUEM',
  guardia: 'Guardia Nocturna',
  pase: 'Pase de Visita',
  lapblanca: '¿Se opera o no?',
  detective: 'Detective Quirúrgico',
  quirofano: 'Quirófano Paso a Paso',
  noctua: 'Paciente en Evolución',
  adscrito: 'El Adscrito Te Pregunta',
  algoritmo: 'Arma el Algoritmo',
  sepaso: '¿Qué se te pasó?',
  duelo: 'Duelo 1 vs 1',
  imagen: 'Imagen Misteriosa',
  puem: 'Simulador PUEM',
};

const REAL_RESIDENTS = [
  { id: 'chantal', name: 'Dra. Chantal', grade: 'R2', acceso: 'R1–R4' },
  { id: 'areli',   name: 'Dra. Areli',   grade: 'R2', acceso: 'R1–R4' },
  { id: 'daniela', name: 'Dra. Daniela', grade: 'R2', acceso: 'R1–R3' },
];

let latestBoard = null;
let refreshTimer = null;

const clamp = (v, a = 0, b = 100) => Math.max(a, Math.min(b, v));
const avg = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);

function topicTitleById(id) {
  if (SHORT[id]) return SHORT[id];
  const found = (TEMARIO_ALL || TEMARIO_APRENDE).find((t) => t.id === id);
  if (found) return `${found.year ? found.year + ' · ' : ''}${found.title}`;
  return id;
}

function readLocalState(id) {
  try {
    const raw = localStorage.getItem(`calot:v3:${id}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function formatAgo(ts) {
  if (!ts || ts <= 0) return 'Sin entrar aún';
  const diffSec = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (diffSec < 90) return 'En línea ahora';
  const min = Math.round(diffSec / 60);
  if (min < 60) return `hace ${min} min`;
  const hrs = Math.round(min / 60);
  if (hrs < 24) return `hace ${hrs} h`;
  const days = Math.round(hrs / 24);
  return days === 1 ? 'ayer' : `hace ${days} d`;
}

function buildResident(meta) {
  const boardPlayer = latestBoard?.players?.find((p) => p.id === meta.id) || null;
  const localSt = readLocalState(meta.id);

  const total = boardPlayer?.total || { studySec: 0, ok: 0, n: 0, pts: 0, sheets: 0, cards: 0, streak: 0, idx: 0 };
  const mon = boardPlayer?.monitor || { lastSeen: 0, activeDays: 0, gameCount: 0, secBySection: {}, topicsRead: [], recentGames: [] };
  const lastSeen = Math.max(Number(mon.lastSeen) || 0, Number(boardPlayer?.updated) || 0);
  const has = Boolean(boardPlayer?.has || lastSeen > 0 || total.studySec > 0 || total.sheets > 0 || total.n > 0 || mon.gameCount > 0);

  const topicsRead = Array.isArray(mon.topicsRead) ? mon.topicsRead : [];
  const readSet = new Set(topicsRead);

  // Avance por tema R2 base
  const topics = {};
  const localSeen = localSt?.seenTopics || {};
  const allSheetsTotal = (TEMARIO_ALL || TEMARIO_APRENDE).reduce((acc, t) => acc + (t.subblocks?.length || 4), 0) || 149;

  for (const t of TEMARIO_APRENDE) {
    const sbs = t.subblocks || [];
    const localTopic = localSeen[t.id];
    const localSbCount = localTopic?.subblocks ? Object.keys(localTopic.subblocks).length : 0;
    if (localSbCount > 0 && sbs.length > 0) {
      topics[t.id] = Math.round(clamp((localSbCount / sbs.length) * 100, 0, 100));
    } else if (readSet.has(t.id)) {
      const approxPerTopic = Math.max(1, Math.round((total.sheets || 1) / Math.max(1, topicsRead.length)));
      topics[t.id] = Math.round(clamp((approxPerTopic / Math.max(1, sbs.length || 5)) * 100, 25, 100));
    } else {
      topics[t.id] = 0;
    }
  }

  // Semanas (8 semanas para gráfica, las últimas 4 vienen del board)
  const bWeeks = boardPlayer?.weeks || [];
  const weeks = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    const w = bWeeks[i];
    weeks.push(w ? +((w.studySec || 0) / 3600).toFixed(1) : 0);
  }

  const studySec = total.studySec || 0;
  const studyMin = Math.round(studySec / 60);
  const sheets = total.sheets || 0;
  const cards = total.cards || 0;
  const simulacros = Math.max(mon.gameCount || 0, (mon.recentGames || []).length, total.n ? 1 : 0);
  const precision = total.n ? accuracy(total) : (mon.recentGames?.length ? Math.round(avg(mon.recentGames.map((g) => g.acc || 0))) : 0);

  // Avance general combina hojas leídas, temas abiertos y tarjetas
  const avanceFromSheets = Math.round(clamp((sheets / Math.max(1, allSheetsTotal)) * 100 + (topicsRead.length * 2) + Math.min(20, cards / 5), 0, 100));
  const avance = has ? Math.max(avanceFromSheets, Math.round(avg(Object.values(topics)))) : 0;

  const lastDays = lastSeen > 0 ? Math.max(0, Math.floor((Date.now() - lastSeen) / 86400000)) : 99;
  const secBySection = {
    aprende: Math.round((mon.secBySection?.aprende || 0) / 60),
    repasa: Math.round((mon.secBySection?.repasa || 0) / 60),
    juegos: Math.round((mon.secBySection?.juegos || 0) / 60),
    recursos: Math.round((mon.secBySection?.recursos || 0) / 60),
  };

  return {
    ...meta,
    real: true,
    has,
    lastSeen,
    lastSeenLabel: formatAgo(lastSeen),
    lastDays,
    activeDays: mon.activeDays || (has ? 1 : 0),
    studySec,
    studyMin,
    sheets,
    cards,
    ok: total.ok || 0,
    n: total.n || 0,
    pts: total.pts || 0,
    topics,
    topicsRead,
    topicNames: topicsRead.map(topicTitleById),
    secBySection,
    recentGames: Array.isArray(mon.recentGames) ? mon.recentGames : [],
    weeks,
    avance,
    precision,
    simulacros,
    racha: total.streak || 0,
  };
}

function status(r) {
  if (!r.has) return { key: 'atencion', label: 'Sin entrar aún' };
  const hasWork = r.studyMin > 0 || r.sheets > 0 || r.cards > 0 || r.simulacros > 0;
  if (Date.now() - r.lastSeen < 15 * 60 * 1000) {
    return { key: 'ok', label: hasWork ? 'En línea' : 'Conectada (inicio)' };
  }
  if (r.lastDays <= 2) return { key: 'ok', label: hasWork ? 'Activa' : 'Entró sin actividad' };
  if (r.lastDays <= 4) return { key: 'atencion', label: `Hace ${r.lastDays} d` };
  return { key: 'riesgo', label: `Inactiva (${r.lastDays} d)` };
}

function spark(values, w = 96, h = 26) {
  const max = Math.max(1, ...values);
  const pts = values.map((v, i) => `${((i / (values.length - 1)) * w).toFixed(1)},${(h - 2 - (v / max) * (h - 4)).toFixed(1)}`).join(' ');
  return `<svg class="ads-spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts}" /></svg>`;
}

let tab = 'resumen';
let selectedId = null;
let sortKey = 'avance';

export function cohort() {
  return REAL_RESIDENTS.map(buildResident).map((r) => ({ ...r, st: status(r) }));
}

function residentLiveCardHTML(r) {
  const s = r.secBySection;
  const hasTopics = r.topicNames.length > 0;
  const hasGames = r.recentGames.length > 0;
  return `
  <article class="card ads-live-card ${selectedId === r.id ? 'is-sel' : ''}" data-ads-card="${esc(r.id)}">
    <div class="ads-live-top">
      <div class="ads-live-id">
        <span class="ads-avatar">${esc(r.name.replace(/^Dra?\.\s*/, '').slice(0, 2).toUpperCase())}</span>
        <div>
          <h3>${esc(r.name)}</h3>
          <p class="mono muted">${esc(r.grade)} · Acceso ${esc(r.acceso)} · ${esc(r.lastSeenLabel)}</p>
        </div>
      </div>
      <span class="ads-badge is-${r.st.key}">${esc(r.st.label)}</span>
    </div>

    <div class="ads-live-metrics">
      <div><span class="mono muted">TIEMPO</span><b>${r.studyMin} min</b><small>${r.activeDays} d activos</small></div>
      <div><span class="mono muted">LECTURA</span><b>${r.sheets} hojas</b><small>${r.topicsRead.length} temas</small></div>
      <div><span class="mono muted">TARJETAS</span><b>${r.cards}</b><small>SM-2</small></div>
      <div><span class="mono muted">JUEGOS</span><b>${r.simulacros}</b><small>${r.n ? `${r.precision}% (${r.ok}/${r.n})` : '0 reactivos'}</small></div>
    </div>

    <div class="ads-live-block">
      <p class="mono ads-kicker">Uso por sección (minutos reales)</p>
      <div class="ads-sec-pills">
        <span class="ads-pill">Resúmenes <b>${s.aprende}m</b></span>
        <span class="ads-pill">Repasa <b>${s.repasa}m</b></span>
        <span class="ads-pill">Juegos <b>${s.juegos}m</b></span>
        <span class="ads-pill">Recursos <b>${s.recursos}m</b></span>
      </div>
    </div>

    <div class="ads-live-block">
      <p class="mono ads-kicker">Qué ha estudiado (${r.topicNames.length} temas abiertos)</p>
      ${hasTopics
        ? `<div class="ads-sec-pills">${r.topicNames.slice(0, 8).map((t) => `<span class="ads-pill is-topic">${esc(t)}</span>`).join('')}${r.topicNames.length > 8 ? `<span class="ads-pill">+${r.topicNames.length - 8} más</span>` : ''}</div>`
        : `<p class="muted ads-empty-line">Aún no ha abierto temas desde el reinicio.</p>`}
    </div>

    <div class="ads-live-block">
      <p class="mono ads-kicker">Últimos juegos y evaluaciones</p>
      ${hasGames
        ? `<ul class="ads-mini-games">${r.recentGames.slice(0, 4).map((g) => `<li><span>${esc(GAME_NAMES[g.mode] || g.mode)}</span><b>${g.acc}%</b><small class="mono muted">${esc(formatAgo(g.ts))}</small></li>`).join('')}</ul>`
        : `<p class="muted ads-empty-line">Sin evaluaciones registradas todavía.</p>`}
    </div>

    <div class="ads-live-foot">
      <button type="button" class="btn btn-sm btn-ghost" data-ads-row="${esc(r.id)}">${icon('eye')} ${selectedId === r.id ? 'Ocultar desglose' : 'Ver desglose por tema'}</button>
      <button type="button" class="btn btn-sm btn-ghost" data-ads-act="nota" data-name="${esc(r.name)}">${icon('note')} Nota docente</button>
    </div>
  </article>`;
}

function detailHTML(r) {
  const entries = TEMARIO_APRENDE.map((t) => ({ id: t.id, name: SHORT[t.id] || t.title, v: r.topics[t.id] || 0 }));
  const strong = [...entries].sort((a, b) => b.v - a.v).slice(0, 4);
  const weak = [...entries].sort((a, b) => a.v - b.v).slice(0, 4);
  const max = Math.max(1, ...r.weeks);
  const rec = !r.has
    ? `${esc(r.name)} aún no inicia sesión tras el reinicio. En cuanto ingrese con su clave se registrará su primera sesión.`
    : r.sheets === 0 && r.simulacros === 0
      ? `Ya inició sesión (${esc(r.lastSeenLabel)}), pero aún no completa hojas ni simuladores.`
      : `Ha estudiado ${r.studyMin} min, leído ${r.sheets} hojas en ${r.topicsRead.length} temas y contestado ${r.n} preguntas con ${r.precision}% de precisión.`;
  return `
  <section class="ads-detail card" data-ads-detail>
    <header class="ads-detail-head">
      <div>
        <p class="mono ads-kicker">${esc(r.grade)} · ACCESO ${esc(r.acceso)} · MONITOREO REAL (${esc(r.lastSeenLabel)})</p>
        <h3>${esc(r.name)}</h3>
      </div>
      <span class="ads-badge is-${r.st.key}">${r.st.label}</span>
      <button type="button" class="btn btn-sm btn-ghost" data-ads-close aria-label="Cerrar detalle">${icon('close')}</button>
    </header>
    <div class="ads-detail-grid">
      <div>
        <p class="mono ads-kicker">Horas por semana · últimas 8</p>
        <div class="ads-bars" role="img" aria-label="Horas de estudio por semana">
          ${r.weeks.map((h, i) => `<span style="--h:${(h / max) * 100}%" class="${i === WEEKS - 1 ? 'is-now' : ''}"><i>${h}</i></span>`).join('')}
        </div>
      </div>
      <div>
        <p class="mono ads-kicker">Temas con mayor avance</p>
        <ul class="ads-topics">${strong.map((t) => `<li><span>${esc(t.name)}</span><b>${t.v}%</b></li>`).join('')}</ul>
        <p class="mono ads-kicker" style="margin-top:12px">Temas pendientes por revisar</p>
        <ul class="ads-topics is-weak">${weak.map((t) => `<li><span>${esc(t.name)}</span><b>${t.v}%</b></li>`).join('')}</ul>
      </div>
      <div class="ads-rec">
        <p class="mono ads-kicker">Resumen de actividad</p>
        <p>${rec}</p>
        <div class="ads-rec-actions">
          <button type="button" class="btn btn-sm btn-glow" data-ads-act="asignar" data-name="${esc(r.name)}" data-topic="${esc(weak[0].name)}">${icon('target')} Asignar ${esc(weak[0].name)}</button>
          <button type="button" class="btn btn-sm btn-ghost" data-ads-act="nota" data-name="${esc(r.name)}">${icon('note')} Nota privada</button>
        </div>
      </div>
    </div>
  </section>`;
}

function sectionHTML(t, list) {
  const st = loadState();
  if (!list.length) return '<p class="muted">No hay residentes registradas.</p>';
  if (t === 'bitacora') return bitacoraHTML(list, st, ui);
  if (t === 'evaluaciones') return evaluacionesHTML(list, st, ui);
  if (t === 'sesiones') return sesionesHTML(list, st);
  if (t === 'servicio') return servicioHTML(list);
  if (t === 'mensajes') return mensajesHTML(list);
  return '';
}

export function render(params = {}) {
  if (params.tab && TABS.some((t) => t.id === params.tab)) tab = params.tab;
  const list = cohort();
  const order = { ok: 0, atencion: 1, riesgo: 2 };
  const sorters = {
    estado: (a, b) => order[a.st.key] - order[b.st.key] || b.studyMin - a.studyMin,
    avance: (a, b) => b.studyMin - a.studyMin || b.sheets - a.sheets || b.simulacros - a.simulacros,
    horas: (a, b) => b.studyMin - a.studyMin,
    grado: (a, b) => a.name.localeCompare(b.name),
  };
  const rows = [...list].sort(sorters[sortKey] || sorters.avance);

  const conectadas = list.filter((r) => r.has).length;
  const totalMin = list.reduce((a, r) => a + r.studyMin, 0);
  const totalSheets = list.reduce((a, r) => a + r.sheets, 0);
  const totalTopics = list.reduce((a, r) => a + r.topicsRead.length, 0);
  const totalCards = list.reduce((a, r) => a + r.cards, 0);
  const totalGames = list.reduce((a, r) => a + r.simulacros, 0);
  const totalReactivos = list.reduce((a, r) => a + r.n, 0);
  const conJuegos = list.filter((r) => r.n > 0 || r.simulacros > 0);
  const precProm = conJuegos.length ? Math.round(avg(conJuegos.map((r) => r.precision))) : 0;

  const selected = selectedId ? list.find((r) => r.id === selectedId) : null;
  const modeOnline = rankingMode() === 'server';
  const ownerMode = isOwner();

  const heat = TEMARIO_APRENDE.map((t) => {
    const cells = list.map((r) => {
      const v = r.topics[t.id] || 0;
      const seen = r.topicsRead.includes(t.id);
      return `<td style="--v:${v}" class="${!seen && v === 0 ? 'is-na' : v < 30 ? 'is-low' : ''}" title="${esc(SHORT[t.id] || t.title)} · ${esc(r.name)}: ${v}%"><span>${seen || v > 0 ? `${v}%` : '—'}</span></td>`;
    }).join('');
    return `<tr><th scope="row">${esc(SHORT[t.id] || t.title)}</th>${cells}</tr>`;
  }).join('');

  return `
<div class="ads-view">
  <header class="page-head wing-hero is-stats ads-hero" data-wing-enter>
    <div class="wing-top-bar">
      <span class="mono wing-badge">${ownerMode ? 'MONITOREO DE PROPIETARIO · DR. MARIO' : 'PANEL DOCENTE · DRA. HERNÁNDEZ · HGR 72'}</span>
      <div class="wing-top-actions">
        <span class="mono wing-live-pill ads-private"><i class="wing-dot" aria-hidden="true"></i>${modeOnline ? 'NUBE EN VIVO' : 'SINCRONIZANDO'}</span>
        <button type="button" class="btn btn-sm btn-ghost" data-ads-act="refresh">${icon('sparkle')} Actualizar</button>
        ${ownerMode ? `<button type="button" class="btn btn-sm btn-ghost" data-ads-act="reset-testers" title="Poner en cero estadísticas e intro de Chantal, Areli y Daniela">${icon('trash')} Reiniciar a las 3</button>` : ''}
        ${isAdscrito() ? `<button type="button" class="btn btn-sm btn-ghost" data-ads-act="residente">${icon('arrowL')} Vista residente</button>` : ''}
      </div>
    </div>
    <div class="wing-main-row">
      <div>
        <h1>Monitoreo de <em>Chantal, Areli y Daniela</em></h1>
        <p class="wing-lead">Uso real de la plataforma, tiempo por sección, temas y hojas leídas, tarjetas de repaso y calificaciones en simuladores. Sin perfiles de demostración.</p>
      </div>
    </div>
  </header>

  <nav class="ads-tabs" role="tablist" aria-label="Secciones del panel" data-wing-enter>
    ${TABS.map((t) => { const n = t.id === 'mensajes' ? unread('adscrito') : 0; return `<button type="button" role="tab" class="ads-tab ${tab === t.id ? 'is-on' : ''}" aria-selected="${tab === t.id}" data-ads-tab="${t.id}">${icon(t.ic)}<span>${t.label}</span>${n ? `<i class="ads-dot">${n}</i>` : ''}</button>`; }).join('')}
  </nav>

  ${tab !== 'resumen' ? `<div class="ads-section" data-wing-enter>${sectionHTML(tab, list)}</div>` : `
  <div class="ads-kpis" data-wing-enter>
    <article class="card lamp" style="--c:var(--cyan)">
      <p class="mono">Residentes activas</p>
      <div class="big"><span>${conectadas}<small>/3</small></span></div>
      <p class="muted">Dra. Chantal · Dra. Areli · Dra. Daniela</p>
    </article>
    <article class="card lamp" style="--c:var(--cuaderno)">
      <p class="mono">Tiempo total de uso</p>
      <div class="big"><span>${totalMin}<small> min</small></span></div>
      <p class="muted"><b>${(totalMin / 60).toFixed(1)} h</b> acumuladas entre las 3 residentes</p>
    </article>
    <article class="card lamp" style="--c:var(--repaso)">
      <p class="mono">Qué han aprendido</p>
      <div class="big"><span>${totalSheets}<small> hojas</small></span></div>
      <p class="muted"><b>${totalTopics}</b> temas abiertos · <b>${totalCards}</b> tarjetas SM-2</p>
    </article>
    <article class="card lamp" style="--c:var(--crimson)">
      <p class="mono">Juegos y evaluaciones</p>
      <div class="big"><span>${totalGames}<small> part.</small></span></div>
      <p class="muted"><b>${totalReactivos}</b> reactivos · precisión promedio <b>${precProm}%</b></p>
    </article>
  </div>

  <section class="ads-live-grid" data-wing-enter aria-label="Tarjetas de monitoreo individual">
    ${list.map(residentLiveCardHTML).join('')}
  </section>

  ${selected ? detailHTML(selected) : ''}

  <section class="card ads-table-card" data-wing-enter>
    <div class="ads-sec-head">
      <h2>Tabla comparativa en tiempo real</h2>
      <label class="ads-sort mono">Ordenar
        <select data-ads-sort>
          ${[['avance', 'Actividad'], ['estado', 'Estado'], ['horas', 'Tiempo'], ['grado', 'Nombre']].map(([k, l]) => `<option value="${k}" ${sortKey === k ? 'selected' : ''}>${l}</option>`).join('')}
        </select>
      </label>
    </div>
    <div class="ads-table-wrap">
      <table class="ads-table">
        <thead><tr><th>Residente</th><th>Acceso</th><th>Tiempo total</th><th>Hojas y temas</th><th>Simuladores</th><th>Horas · 8 sem</th><th>Racha</th><th>Última conexión</th><th>Estado</th></tr></thead>
        <tbody>
          ${rows.map((r) => `
          <tr data-ads-row="${r.id}" tabindex="0" class="${selectedId === r.id ? 'is-sel' : ''}" aria-label="Ver detalle de ${esc(r.name)}">
            <td class="ads-name"><span class="ads-avatar">${esc(r.name.replace(/^Dra?\.\s*/, '').slice(0, 2).toUpperCase())}</span><span>${esc(r.name)}</span></td>
            <td data-label="Acceso"><span class="ads-grade">${esc(r.acceso)}</span></td>
            <td data-label="Tiempo"><b>${r.studyMin} min</b> <small class="muted">(${(r.studyMin / 60).toFixed(1)} h)</small></td>
            <td data-label="Aprendizaje"><b>${r.sheets} hojas</b> <small class="muted">· ${r.topicsRead.length} temas · ${r.cards} tarj.</small></td>
            <td data-label="Simuladores">${r.simulacros ? `<b>${r.precision}%</b><small> · ${r.simulacros} part. (${r.ok}/${r.n})</small>` : '<small class="muted">sin partidas aún</small>'}</td>
            <td data-label="Horas">${spark(r.weeks)}<b>${r.weeks[WEEKS - 1]} h</b></td>
            <td data-label="Racha">${r.racha ? `${r.racha} d` : '—'}</td>
            <td data-label="Última conexión">${esc(r.lastSeenLabel)}</td>
            <td data-label="Estado"><span class="ads-badge is-${r.st.key}">${r.st.label}</span></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </section>

  <section class="card ads-heat-card" data-wing-enter>
    <div class="ads-sec-head"><h2>Mapa de temas revisados por residente</h2><span class="mono muted">% de avance por módulo quirúrgico</span></div>
    <div class="ads-table-wrap">
      <table class="ads-heat">
        <thead><tr><th>Módulo</th>${list.map((r) => `<th>${esc(r.name.replace(/^Dra\.\s*/, ''))}</th>`).join('')}</tr></thead>
        <tbody>${heat}</tbody>
      </table>
    </div>
  </section>
  `}
  <p class="ads-foot mono muted">${icon('eye')} Monitoreo en tiempo real exclusivo de Dra. Chantal, Dra. Areli y Dra. Daniela. Se actualiza automáticamente cada vez que abren un tema, repasan tarjetas o terminan un juego.</p>
</div>`;
}

const uid = (p) => `${p}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`;
const isoIn = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return todayISO(d); };

function updateState(fn) { const st = loadState(); fn(st); saveState(st); }

let unsubMsg = null;

export function mount(root, rerender) {
  const keep = () => { if (root.isConnected) rerender({ keepScroll: true }); };

  const pullLive = async (showToast = false) => {
    try {
      latestBoard = await loadBoard();
      if (showToast) toast('Monitoreo actualizado en vivo');
      keep();
    } catch {
      if (showToast) toast('Mostrando datos locales');
    }
  };

  pullLive(false);
  clearInterval(refreshTimer);
  refreshTimer = setInterval(() => {
    if (!root.isConnected) { clearInterval(refreshTimer); refreshTimer = null; return; }
    pullLive(false);
  }, 18000);

  const open = (id) => {
    selectedId = selectedId === id ? null : id;
    playUiSfx('click');
    keep();
    if (selectedId) requestAnimationFrame(() => document.querySelector('[data-ads-detail]')?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  };
  const goTab = (t) => { tab = t; selectedId = null; playUiSfx('click'); keep(); };

  unsubMsg?.();
  unsubMsg = subscribe(() => {
    if (!root.isConnected) { unsubMsg?.(); unsubMsg = null; return; }
    const th = root.querySelector('[data-msg-thread]');
    if (th) {
      th.innerHTML = threadHTML('adscrito');
      th.scrollTop = th.scrollHeight;
      markRead('adscrito');
      const m = root.querySelector('[data-ads-mode]');
      if (m) { const on = deliveryMode() === 'server'; m.textContent = on ? 'En línea' : 'Solo este dispositivo'; m.className = `ads-badge ${on ? 'is-ok' : 'is-atencion'}`; }
    }
    const dot = root.querySelector('[data-ads-tab="mensajes"] .ads-dot');
    const n = tab === 'mensajes' ? 0 : unread('adscrito');
    if (dot && !n) dot.remove();
  });
  const th = root.querySelector('[data-msg-thread]');
  if (th) { th.scrollTop = th.scrollHeight; markRead('adscrito'); }

  root.addEventListener('click', async (e) => {
    const tb = e.target.closest('[data-ads-tab]');
    if (tb) { goTab(tb.dataset.adsTab); return; }
    if (e.target.closest('[data-ads-close]')) { selectedId = null; keep(); return; }

    const v = e.target.closest('[data-ads-valid]');
    if (v) {
      updateState((st) => { st.valid[v.dataset.adsValid] = v.dataset.v; });
      playUiSfx('click');
      toast(v.dataset.v === 'ok' ? 'Cirugía validada' : 'Marcada como «no estuve»');
      keep(); return;
    }
    const ev = e.target.closest('[data-ads-evalres]');
    if (ev) { ui.evalRes = ev.dataset.adsEvalres || null; playUiSfx('click'); keep(); return; }
    const att = e.target.closest('[data-ads-att]');
    if (att) {
      updateState((st) => { const m = (st.attendance[att.dataset.adsAtt] ||= {}); m[att.dataset.res] = !att.classList.contains('is-on'); });
      keep(); return;
    }
    const dt = e.target.closest('[data-ads-deltask]');
    if (dt) { updateState((st) => { st.tasks = st.tasks.filter((t) => t.id !== dt.dataset.adsDeltask); }); keep(); return; }

    const act = e.target.closest('[data-ads-act]');
    if (act) {
      const { adsAct: a, name, topic } = act.dataset;
      playUiSfx('click');
      if (a === 'refresh') {
        await pullLive(true);
      } else if (a === 'reset-testers') {
        await resetTestersStats();
        latestBoard = await loadBoard();
        toast('Estadísticas e intro de Chantal, Areli y Daniela reiniciadas a cero');
        keep();
      } else if (a === 'residente') {
        try { localStorage.setItem('calot:rol', 'residente'); } catch {}
        document.body.dataset.rol = 'residente';
        location.hash = '#/inicio';
      } else if (a === 'sesion') {
        const all = cohort();
        updateState((st) => {
          st.sessions = [...(st.sessions || defaultSessions(all)), { id: uid('s'), date: isoIn(7), tema: topic, ponente: all[0]?.id }];
        });
        toast(`Sesión de ${topic} programada para dentro de 7 días`);
      } else if (a === 'asignar') {
        const res = cohort().find((r) => r.name === name);
        updateState((st) => { st.tasks.push({ id: uid('t'), title: `Repasar ${topic}`, to: res?.id || 'todos', due: isoIn(7) }); });
        toast(`${topic} asignado a ${name}`);
      } else if (a === 'nota') {
        ui.evalRes = cohort().find((r) => r.name === name)?.id || null;
        tab = 'evaluaciones'; selectedId = null; keep();
      }
      return;
    }
    const row = e.target.closest('[data-ads-row]');
    if (row) open(row.dataset.adsRow);
  });

  root.addEventListener('submit', async (e) => {
    const f = e.target;
    e.preventDefault();
    const fd = new FormData(f);
    if (f.matches('[data-msg-form]')) {
      const text = String(fd.get('text') || '').trim();
      if (!text) return;
      f.querySelector('button').disabled = true;
      await sendMsg('adscrito', text);
      f.reset(); f.querySelector('button').disabled = false;
      playUiSfx('click');
      return;
    }
    if (f.matches('[data-ads-noteform]')) {
      const text = String(fd.get('text') || '').trim();
      if (!text) return;
      updateState((st) => { (st.notes[f.dataset.adsNoteform] ||= []).push({ t: Date.now(), text }); });
      toast('Nota privada guardada'); keep(); return;
    }
    if (f.matches('[data-ads-sessionform]')) {
      const all = cohort();
      updateState((st) => {
        st.sessions = [...(st.sessions || defaultSessions(all)), { id: uid('s'), date: fd.get('date'), tema: fd.get('tema'), ponente: fd.get('ponente') }];
      });
      toast('Sesión programada'); keep(); return;
    }
    if (f.matches('[data-ads-taskform]')) {
      updateState((st) => { st.tasks.push({ id: uid('t'), title: String(fd.get('title')).trim(), to: fd.get('to'), due: fd.get('due') }); });
      toast('Asignación enviada'); keep(); return;
    }
    if (f.matches('[data-ads-examform]')) {
      updateState((st) => { st.exams.push({ id: uid('x'), tema: fd.get('tema'), n: Number(fd.get('n')), date: todayISO() }); });
      toast('Examen enviado al grupo'); keep(); return;
    }
  });

  root.addEventListener('keydown', (e) => {
    const row = e.target.closest?.('[data-ads-row]');
    if (row && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(row.dataset.adsRow); }
    if (e.target.matches?.('[data-msg-form] textarea') && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); e.target.form.requestSubmit(); }
  });
  root.addEventListener('change', (e) => {
    const t = e.target;
    if (t.matches('[data-ads-sort]')) { sortKey = t.value; keep(); return; }
    if (t.matches('[data-ads-bitres]')) { ui.bitRes = t.value; keep(); return; }
    if (t.matches('[data-ads-zwisch]')) { updateState((st) => { (st.zwisch[t.dataset.adsZwisch] ||= {})[t.dataset.proc] = Number(t.value); }); toast('Autonomía actualizada'); return; }
    if (t.matches('[data-ads-eval]')) { updateState((st) => { (st.evals[t.dataset.adsEval] ||= {})[t.dataset.crit] = Number(t.value); }); keep(); }
  });
}
