// Resúmenes · Temario PUEM R1–R4: Portada editorial (Por Año / Por Tema) + Catálogo filtrable.
import { icon } from '../icons.js?v=20261122b';
import { store } from '../store.js?v=20261122b';
import { esc, toast } from '../ui.js';
import * as S from '../scroll.js';
import { TEMARIO_PUEM, YEARS, SISTEMAS, temaById, temaSistemas, subtemaSistema, isMine } from '../data/temario_puem.js?v=20261122b';
import { isOwner, perfil, allowedYear } from "../perfil.js?v=20261122b";

export const section = 'cuaderno';

const PREF_KEY = 'calot:resumenes-filtros';
const loadPrefs = () => {
  let p;
  try { p = { year: 'todos', sistema: '', q: '', mias: false, ...JSON.parse(localStorage.getItem(PREF_KEY) || '{}') }; } catch { p = { year: 'todos', sistema: '', q: '', mias: false }; }
  if (p.year !== 'todos' && !YEARS.includes(p.year)) p.year = 'todos';
  if (!isOwner()) p.mias = false;
  return p;
};
let f = loadPrefs();
const savePrefs = () => { try { localStorage.setItem(PREF_KEY, JSON.stringify(f)); } catch { /* sin almacenamiento */ } };

// Estado de navegación dentro de Resúmenes ('hub' | 'anio' | 'tema' | 'catalogo')
let vista = 'hub';
let selYear = YEARS.includes('R2') ? 'R2' : YEARS[YEARS.length - 1];
let lastListVista = 'hub';
let preserveVistaNext = false;

const YEAR_META = {
  R1: { label: 'Primer año', dia: 'Viernes', cls: 'r1', desc: 'Fundamentos, perioperatorio, respuesta al trauma y bases quirúrgicas.' },
  R2: { label: 'Segundo año', dia: 'Martes', cls: 'r2', actual: true, desc: 'Piel, pared abdominal, tubo digestivo y colonorrectal (tu ciclo actual).' },
  R3: { label: 'Tercer año', dia: 'Jueves', cls: 'r3', desc: 'Hígado, vías biliares, páncreas, endocrino, mama y cirugía vascular/torácica.' },
  R4: { label: 'Cuarto año', dia: 'Lunes', cls: 'r4', desc: 'Endoscopia, especialidades quirúrgicas, trauma complejo y trasplante.' },
};

const TERRITORIOS = [
  {
    num: 'I',
    title: 'Tubo Digestivo',
    sub: 'Patología quirúrgica del tracto gastrointestinal superior, intestino y colonorrectal',
    sistemas: ['Esófago', 'Estómago y duodeno', 'Intestino delgado', 'Colon y apéndice', 'Recto y ano', 'Endoscopia'],
  },
  {
    num: 'II',
    title: 'Hepatobiliopancreático y Pared',
    sub: 'Hígado, vía biliar, páncreas, compartimento retroperitoneal y hernias de pared',
    sistemas: ['Hígado', 'Vías biliares', 'Páncreas', 'Bazo, peritoneo y retroperitoneo', 'Pared abdominal y hernias'],
  },
  {
    num: 'III',
    title: 'Fundamentos, Trauma y Oncología',
    sub: 'Principios perioperatorios, manejo del paciente traumatizado y criterios oncológicos',
    sistemas: ['Fundamentos y perioperatorio', 'Trauma', 'Piel, quemaduras y reconstructiva', 'Oncología'],
  },
  {
    num: 'IV',
    title: 'Cuello, Tórax, Mama y Vascular',
    sub: 'Cirugía endocrina cervical, patología mamaria, torácica y sistema vascular',
    sistemas: ['Cabeza, cuello y endocrino', 'Mama', 'Tórax', 'Vascular'],
  },
  {
    num: 'V',
    title: 'Especialidades Quirúrgicas y Trasplante',
    sub: 'Áreas complementarias de rotación avanzada e inmunobiología de trasplantes',
    sistemas: ['Urología', 'Ginecología', 'Musculoesquelético', 'Trasplante'],
  },
];

const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const fmtFecha = (iso) => {
  if (!iso) return '';
  const [, m, d] = iso.split('-').map(Number);
  return `${d} ${MESES[m - 1]}`;
};

const norm = (s = '') => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const seenKey = (t) => (t.aprendeId && t.year === 'R2' ? t.aprendeId : `puem:${t.id}`);
const isSeen = (t) => store.isTopicSeen(seenKey(t));

// Subtemas visibles de un tema según los filtros activos
function visibleSubtemas(t) {
  const q = norm(f.q.trim());
  return t.subtemas.filter((s) => {
    if (f.sistema && subtemaSistema(t, s) !== f.sistema) return false;
    if (f.mias && !isMine(s)) return false;
    if (q && !norm(`${t.title} ${s.t} ${s.ponente || ''} ${(s.puntos || []).join(' ')}`).includes(q)) return false;
    return true;
  });
}

function filtered() {
  return TEMARIO_PUEM
    .filter((t) => f.year === 'todos' || t.year === f.year)
    .filter((t) => !f.sistema || temaSistemas(t).includes(f.sistema))
    .map((t) => {
      const subs = f.sistema && t.sistema === f.sistema && !f.q && !f.mias ? t.subtemas : visibleSubtemas(t);
      return { t, subs };
    })
    .filter(({ t, subs }) => {
      const q = norm(f.q.trim());
      if (subs.length) return true;
      if (f.mias) return false;
      return q ? norm(`${t.title} ${t.sistema} ${(t.esencial || []).join(' ')}`).includes(q) : !f.sistema;
    });
}

const yearCount = (y) => TEMARIO_PUEM.filter((t) => y === 'todos' || t.year === y).length;

function renderTopSwitch() {
  const tabs = [
    { k: 'anio', lbl: 'Por Año' },
    { k: 'tema', lbl: 'Por Tema' },
    { k: 'catalogo', lbl: 'Catálogo completo' },
  ];
  return `
  <div class="rs-view-bar">
    <button type="button" class="btn btn-sm btn-ghost" data-rs-vista="hub">← Portada de Resúmenes</button>
    <div class="rs-view-tabs" role="tablist" aria-label="Modo de visualización de resúmenes">
      ${tabs.map((x) => `<button type="button" class="rs-view-tab ${vista === x.k ? 'is-on' : ''}" data-rs-vista="${x.k}" role="tab" aria-selected="${vista === x.k}">${x.lbl}</button>`).join('')}
    </div>
  </div>`;
}

function renderHub() {
  const totalTemas = TEMARIO_PUEM.length;
  const totalSubs = TEMARIO_PUEM.reduce((a, t) => a + (t.subtemas?.length || 0), 0);
  const seenCount = TEMARIO_PUEM.filter(isSeen).length;

  return `
<div class="resumenes">
  <header class="page-head">
    <div>
      <p class="mono eyebrow">01 · RESÚMENES · TEMARIO R1–R4 · HGR 72</p>
      <h1>Resú<em>menes</em></h1>
      <p>Programa operativo completo de Cirugía General. Elige si quieres recorrerlo por año de residencia o organizado por tema anatómico.</p>
      <a class="btn btn-glow btn-sm" href="#/biblioteca" style="margin-top:10px;max-width:100%;white-space:normal;text-align:center">Biblioteca completa · detallado, breve, perlas y casos →</a>
    </div>
  </header>

  <section class="rs-hub-grid" aria-label="Modos de estudio en Resúmenes">
    <button type="button" class="card rs-hub-card is-anio" data-rs-vista="anio">
      <div class="rs-hub-top">
        <span class="rs-hub-num mono">01 · ESTRUCTURA POR GRADO</span>
        <span class="chip chip-accent">Tu ciclo: ${perfil().ciclo}</span>
      </div>
      <h2>Resúmenes por <em>Año</em></h2>
      <p class="rs-hub-desc">Paleta editorial de <strong>R1 a R4</strong> con día de sesión académica, coordinación de grado y listado limpio de módulos sin saturación.</p>
      <div class="rs-hub-palette" aria-hidden="true">
        ${YEARS.map((y) => {
          const m = YEAR_META[y];
          return `<span class="rs-pal-pill is-${m.cls}"><i></i><b>${y}</b><small>${m.dia}</small></span>`;
        }).join('')}
      </div>
      <div class="rs-hub-foot">
        <span class="mono muted">${totalTemas} temas · 4 años académicos</span>
        <span class="rs-hub-cta">Entrar por año →</span>
      </div>
    </button>

    <button type="button" class="card rs-hub-card is-tema" data-rs-vista="tema">
      <div class="rs-hub-top">
        <span class="rs-hub-num mono">02 · ARQUITECTURA ANATÓMICA</span>
        <span class="chip">${SISTEMAS.length} sistemas</span>
      </div>
      <h2>Resúmenes por <em>Tema</em></h2>
      <p class="rs-hub-desc">Organización por <strong>órgano y territorio quirúrgico</strong> conforme al temario operativo: Digestivo, HBP, Trauma, Oncología y Especialidades.</p>
      <div class="rs-hub-terrs" aria-hidden="true">
        ${TERRITORIOS.map((ter) => `<span><b>${ter.num}.</b> ${esc(ter.title)}</span>`).join('')}
      </div>
      <div class="rs-hub-foot">
        <span class="mono muted">5 territorios quirúrgicos · ${totalSubs} subtemas</span>
        <span class="rs-hub-cta">Explorar por tema →</span>
      </div>
    </button>
  </section>

  <div class="card rs-hub-catalog-bar">
    <div>
      <span class="mono rs-flabel">CATÁLOGO FILTRABLE DIRECTO</span>
      <p class="muted">Filtro rápido por año (Todos, R1, R2, R3, R4), tema, buscador por palabra clave y tus ponencias · <strong>${seenCount}/${totalTemas}</strong> temas vistos.</p>
    </div>
    <button type="button" class="btn btn-sm btn-glow" data-rs-vista="catalogo">${icon('search')} Abrir catálogo y buscador →</button>
  </div>
</div>`;
}

function renderPorAnio() {
  const ys = TEMARIO_PUEM.filter((t) => t.year === selYear);
  const meta = YEAR_META[selYear] || YEAR_META.R2;
  const coord = ys.find((t) => t.coordinador)?.coordinador || '';
  const vistos = ys.filter(isSeen).length;
  const pct = ys.length ? Math.round((vistos / ys.length) * 100) : 0;

  return `
<div class="resumenes">
  <header class="page-head">
    <div>
      <p class="mono eyebrow">01 · RESÚMENES · RECORRIDO POR AÑO DE RESIDENCIA</p>
      <h1>Resúmenes por <em>Año</em></h1>
      <p>Selecciona un grado académico en la paleta inferior para ver su programa editorial ordenado.</p>
    </div>
  </header>

  ${renderTopSwitch()}

  <div class="rs-year-palette" role="tablist" aria-label="Paleta de grados R1 a R4">
    ${YEARS.map((y) => {
      const m = YEAR_META[y];
      const cnt = yearCount(y);
      const active = selYear === y;
      return `
        <button type="button" class="rs-pal-btn is-${m.cls} ${active ? 'is-on' : ''}" data-rs-sel-year="${y}" role="tab" aria-selected="${active}">
          <span class="rs-pal-bar" aria-hidden="true"></span>
          <span class="rs-pal-head">
            <strong>${y}</strong>
            ${m.actual ? '<span class="rs-pal-tag">Actual</span>' : `<span class="mono muted">${m.dia}</span>`}
          </span>
          <span class="rs-pal-sub">${esc(m.label)} · ${cnt} temas</span>
        </button>`;
    }).join('')}
  </div>

  <section class="card rs-year-dossier is-${meta.cls}">
    <div class="rs-dossier-head">
      <div>
        <div class="rs-card-top">
          <span class="rs-year rs-year-${meta.cls}">${selYear}</span>
          <span class="chip">${esc(meta.label)} · Sesiones ${esc(meta.dia)}</span>
          ${meta.actual ? '<span class="chip chip-accent">Ciclo actual</span>' : ''}
        </div>
        <h2>Programa operativo ${selYear}</h2>
        <p class="muted">${esc(meta.desc)}</p>
        ${coord ? `<p class="mono muted rs-coord">Coordina: ${esc(coord)}</p>` : ''}
      </div>
      <div class="rs-dossier-side">
        <div class="rs-dossier-stat">
          <span class="mono muted">AVANCE DEL GRADO</span>
          <strong>${vistos} / ${ys.length} temas</strong>
          <div class="rs-dossier-prog" aria-hidden="true"><span style="width:${pct}%"></span></div>
        </div>
        <button type="button" class="btn btn-sm btn-glow" data-rs-open-year="${selYear}">Ver ${selYear} con subtemas y filtro →</button>
      </div>
    </div>

    <div class="rs-editorial-list" role="list">
      ${ys.map((t, idx) => {
        const seen = isSeen(t);
        return `
          <a class="rs-ed-row" href="#/resumenes?id=${esc(t.id)}" role="listitem">
            <span class="rs-ed-idx mono">${String(idx + 1).padStart(2, '0')}</span>
            <span class="rs-ed-main">
              <strong>${esc(t.title)}</strong>
              <small>${esc(t.sistema)} · ${t.subtemas.length} ${t.subtemas.length === 1 ? 'subtema' : 'subtemas'}</small>
            </span>
            <span class="rs-ed-badges">
              ${t.aprendeId ? '<span class="chip chip-accent">Resumen completo</span>' : ''}
              ${seen ? '<span class="chip chip-done">✓ Visto</span>' : ''}
            </span>
            <span class="rs-ed-go" aria-hidden="true">→</span>
          </a>`;
      }).join('')}
    </div>
  </section>
</div>`;
}

function renderPorTema() {
  const sysMeta = (sys) => {
    const matches = TEMARIO_PUEM.filter((t) => temaSistemas(t).includes(sys));
    const years = YEARS.filter((y) => matches.some((t) => t.year === y));
    return { count: matches.length, years };
  };

  return `
<div class="resumenes">
  <header class="page-head">
    <div>
      <p class="mono eyebrow">01 · RESÚMENES · ARQUITECTURA POR ÓRGANO Y SISTEMA</p>
      <h1>Resúmenes por <em>Tema</em></h1>
      <p>Estructura del programa por territorio quirúrgico y órgano. Selecciona cualquier sistema para abrir sus resúmenes.</p>
    </div>
  </header>

  ${renderTopSwitch()}

  <div class="rs-territories">
    ${TERRITORIOS.map((ter) => `
      <section class="card rs-territory">
        <div class="rs-terr-head">
          <span class="rs-terr-num mono">${ter.num}</span>
          <div>
            <h2>${esc(ter.title)}</h2>
            <p class="muted">${esc(ter.sub)}</p>
          </div>
        </div>
        <div class="rs-organ-list" role="list">
          ${ter.sistemas.map((sys) => {
            const { count, years } = sysMeta(sys);
            return `
              <button type="button" class="rs-organ-row" data-rs-open-sistema="${esc(sys)}" role="listitem">
                <span class="rs-organ-name">${esc(sys)}</span>
                <span class="rs-organ-meta">
                  <span class="rs-organ-years">${years.map((y) => `<i class="rs-mini-y is-${y.toLowerCase()}">${y}</i>`).join('')}</span>
                  <small class="mono muted">${count} ${count === 1 ? 'tema' : 'temas'}</small>
                  <span class="rs-ed-go" aria-hidden="true">→</span>
                </span>
              </button>`;
          }).join('')}
        </div>
      </section>`).join('')}
  </div>
</div>`;
}

function temaCard({ t, subs }) {
  const seen = isSeen(t);
  const list = subs.length ? subs : t.subtemas;
  return `
  <article class="card rs-card" data-year="${esc(t.year)}">
    <div class="rs-card-top">
      <span class="rs-year rs-year-${esc(t.year.toLowerCase())}">${esc(t.year)}</span>
      <span class="chip">${esc(t.sistema)}</span>
      ${t.aprendeId ? '<span class="chip chip-accent">Resumen completo</span>' : ''}
      ${seen ? '<span class="chip chip-done">✓ Visto</span>' : ''}
    </div>
    <h3><a href="#/resumenes?id=${esc(t.id)}">${esc(t.title)}</a></h3>
    ${t.coordinador ? `<p class="mono muted rs-coord">Coordina: ${esc(t.coordinador)}</p>` : ''}
    <ul class="rs-sub-list">
      ${list.map((s) => `
        <li class="${isMine(s) ? 'is-mine' : ''}">
          <span class="rs-sub-t">${esc(s.t)}</span>
          <span class="rs-sub-meta mono">${s.ponente ? esc(s.ponente) : ''}${s.ponente && s.fecha ? ' · ' : ''}${fmtFecha(s.fecha)}${isMine(s) ? ' <b class="rs-mine">Tu clase</b>' : ''}</span>
        </li>`).join('')}
    </ul>
    <div class="rs-card-actions">
      <a class="btn btn-sm btn-glow" href="#/resumenes?id=${esc(t.id)}">${icon('notebook')} Leer resumen</a>
      ${t.aprendeId ? `<a class="btn btn-sm btn-ghost" href="#/aprende?tema=${esc(t.aprendeId)}">${icon('book')} Resumen completo</a>` : ''}
    </div>
  </article>`;
}

function renderCatalogo() {
  const rows = filtered();
  const subCount = rows.reduce((a, r) => a + (r.subs.length || r.t.subtemas.length), 0);
  const seenCount = TEMARIO_PUEM.filter(isSeen).length;
  const sistemasConTemas = SISTEMAS.filter((s) => TEMARIO_PUEM.some((t) => (f.year === 'todos' || t.year === f.year) && temaSistemas(t).includes(s)));

  const grouped = f.year === 'todos' && !f.sistema && !f.q && !f.mias;
  const body = grouped
    ? YEARS.map((y) => {
      const ys = rows.filter((r) => r.t.year === y);
      if (!ys.length) return '';
      return `
        <section class="rs-year-block">
          <h2 class="rs-year-h"><span class="rs-year rs-year-${y.toLowerCase()}">${y}</span> ${y === 'R1' ? 'Primer año · viernes' : y === 'R2' ? 'Segundo año · martes' : y === 'R3' ? 'Tercer año · jueves' : 'Cuarto año · lunes'} <small class="mono muted">${ys.length} temas</small></h2>
          <div class="rs-grid">${ys.map(temaCard).join('')}</div>
        </section>`;
    }).join('')
    : `<div class="rs-grid">${rows.map(temaCard).join('')}</div>`;

  return `
<div class="resumenes">
  <header class="page-head">
    <div>
      <p class="mono eyebrow">01 · RESÚMENES · TEMARIO R1–R4 · HGR 72</p>
      <h1>Resú<em>menes</em></h1>
      <p>Todo el programa operativo de Cirugía General. Elige por año de residencia o por tema; puedes mezclar los cuatro años.</p>
    </div>
  </header>

  ${renderTopSwitch()}

  <div class="card rs-filters">
    <div class="rs-filter-row">
      <span class="mono muted rs-flabel">AÑO</span>
      <div class="rs-pills" role="group" aria-label="Filtrar por año">
        ${['todos', ...YEARS].map((y) => `<button type="button" class="rs-pill ${f.year === y ? 'on' : ''}" data-year="${y}">${y === 'todos' ? 'Todos' : y} <small>${yearCount(y)}</small></button>`).join('')}
      </div>
    </div>
    <div class="rs-filter-row">
      <label class="rs-field">
        <span class="mono muted rs-flabel">TEMA</span>
        <select class="input" data-f="sistema" aria-label="Filtrar por tema">
          <option value="">Todos los temas</option>
          ${sistemasConTemas.map((s) => `<option value="${esc(s)}" ${f.sistema === s ? 'selected' : ''}>${esc(s)}</option>`).join('')}
        </select>
      </label>
      <label class="rs-field rs-field-grow">
        <span class="mono muted rs-flabel">BUSCAR</span>
        <input class="input" data-f="q" type="search" placeholder="Ej. Graham, Hinchey, Tokio, hernia inguinal…" value="${esc(f.q)}" autocomplete="off">
      </label>
      ${isOwner() ? `<label class="rs-check">
        <input type="checkbox" data-f="mias" ${f.mias ? 'checked' : ''}>
        <span>Sólo mis clases</span>
      </label>` : ''}
      ${(f.year !== 'todos' || f.sistema || f.q || f.mias) ? '<button type="button" class="btn btn-sm btn-ghost" data-act="clear">Limpiar filtros</button>' : ''}
    </div>
    <p class="mono muted rs-count">${rows.length} temas · ${subCount} subtemas · ${seenCount}/${TEMARIO_PUEM.length} temas vistos</p>
  </div>

  <div class="rs-results">
    ${rows.length ? body : '<div class="card empty">No hay temas con esos filtros. Prueba con otro año o limpia la búsqueda.</div>'}
  </div>
</div>`;
}

function renderDetail(t) {
  const order = filtered().map((r) => r.t.id);
  const ids = order.includes(t.id) ? order : TEMARIO_PUEM.map((x) => x.id);
  const i = ids.indexOf(t.id);
  const prev = i > 0 ? temaById(ids[i - 1]) : null;
  const next = i < ids.length - 1 ? temaById(ids[i + 1]) : null;
  const seen = isSeen(t);
  const hasPuntos = t.subtemas.some((s) => s.puntos?.length);
  const backVista = lastListVista === 'hub' ? '' : `?vista=${encodeURIComponent(lastListVista)}`;

  return `
<div class="resumenes rs-detail">
  <a class="btn btn-sm btn-ghost rs-back" href="#/resumenes${backVista}">← Volver a Resúmenes</a>
  <header class="card rs-detail-head">
    <div class="rs-card-top">
      <span class="rs-year rs-year-${esc(t.year.toLowerCase())}">${esc(t.year)}</span>
      <span class="chip">${esc(t.sistema)}</span>
      ${seen ? '<span class="chip chip-done">✓ Visto</span>' : ''}
    </div>
    <h1>${esc(t.title)}</h1>
    ${t.subtitle ? `<p class="muted">${esc(t.subtitle)}</p>` : ''}
    ${t.coordinador ? `<p class="mono muted">Coordina: ${esc(t.coordinador)}</p>` : ''}
    <div class="rs-card-actions">
      <button type="button" class="btn btn-sm ${seen ? 'btn-ghost' : 'btn-glow'}" data-act="seen">${icon('check')} ${seen ? 'Visto' : 'Marcar como visto'}</button>
      ${t.aprendeId ? `<a class="btn btn-sm btn-glow" href="#/aprende?tema=${esc(t.aprendeId)}">${icon('book')} Abrir resumen completo${t.readTimeMin ? ` (~${t.readTimeMin} min)` : ''}</a>` : ''}
      ${t.aprendeId ? `<a class="btn btn-sm btn-ghost" href="#/juegos?modo=blitz&tema=${esc(t.aprendeId)}">${icon('bolt')} Blitz del tema</a>` : ''}
      <a class="btn btn-sm btn-ghost" href="#/repasa">${icon('brain')} Repasar tarjetas</a>
    </div>
  </header>

  ${t.esencial?.length ? `
  <section class="card rs-block">
    <p class="mono rs-block-k">PUNTOS CLAVE DEL TEMA</p>
    <ul class="rs-points">${t.esencial.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
  </section>` : ''}

  <section class="rs-subtemas">
    ${!hasPuntos ? '<p class="mono muted rs-block-k">SUBTEMAS DEL PROGRAMA · PONENTE Y FECHA</p>' : ''}
    ${t.subtemas.map((s, k) => `
      <article class="card rs-block ${isMine(s) ? 'is-mine' : ''}">
        <div class="rs-sub-head">
          <span class="rs-num mono">${String(k + 1).padStart(2, '0')}</span>
          <div>
            <h3>${esc(s.t)}</h3>
            <p class="mono muted">${s.ponente ? `Ponente: ${esc(s.ponente)}` : 'Ponente por asignar'}${s.fecha ? ` · ${fmtFecha(s.fecha)}` : ''}${subtemaSistema(t, s) !== t.sistema ? ` · ${esc(subtemaSistema(t, s))}` : ''}${isMine(s) ? ' <b class="rs-mine">Tu clase</b>' : ''}</p>
          </div>
        </div>
        ${s.puntos?.length ? `<ul class="rs-points">${s.puntos.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
      </article>`).join('')}
  </section>

  <nav class="rs-pager">
    ${prev ? `<a class="card rs-pager-btn" href="#/resumenes?id=${esc(prev.id)}"><small class="mono muted">← Anterior · ${esc(prev.year)}</small><strong>${esc(prev.title)}</strong></a>` : '<span></span>'}
    ${next ? `<a class="card rs-pager-btn is-next" href="#/resumenes?id=${esc(next.id)}"><small class="mono muted">Siguiente · ${esc(next.year)} →</small><strong>${esc(next.title)}</strong></a>` : '<span></span>'}
  </nav>
</div>`;
}

export function render(params = {}) {
  const reqVista = String(params.vista || '').toLowerCase();
  const anio = String(params.anio || '').toUpperCase();
  const hasFilterParam = Boolean(anio || params.sistema);

  if (!preserveVistaNext) {
    if (['hub', 'anio', 'tema', 'catalogo'].includes(reqVista)) vista = reqVista;
    else if (hasFilterParam) vista = 'catalogo';
    else if (!params.id) vista = 'hub';
  }
  preserveVistaNext = false;

  if (YEARS.includes(anio)) { f.year = anio; selYear = anio; }
  else if (/^R[1-4]$/.test(anio)) { f.year = allowedYear(anio); selYear = f.year; } // año sin permiso → el más alto permitido
  else if (anio === 'TODOS') f.year = 'todos';
  if (params.sistema && SISTEMAS.includes(params.sistema)) f.sistema = params.sistema;

  const t = params.id ? temaById(params.id) : null;
  if (t) return renderDetail(t);

  lastListVista = vista;
  if (vista === 'anio') return renderPorAnio();
  if (vista === 'tema') return renderPorTema();
  if (vista === 'catalogo') return renderCatalogo();
  return renderHub();
}

export function mount(root, rerender, params = {}) {
  const t = params.id ? temaById(params.id) : null;

  root.addEventListener('click', (e) => {
    const vBtn = e.target.closest('[data-rs-vista]');
    if (vBtn) {
      vista = vBtn.dataset.rsVista;
      preserveVistaNext = true;
      rerender({ keepScroll: false });
      return;
    }

    const syBtn = e.target.closest('[data-rs-sel-year]');
    if (syBtn) {
      selYear = syBtn.dataset.rsSelYear;
      preserveVistaNext = true;
      rerender({ keepScroll: true });
      return;
    }

    const oyBtn = e.target.closest('[data-rs-open-year]');
    if (oyBtn) {
      f.year = oyBtn.dataset.rsOpenYear;
      f.sistema = '';
      vista = 'catalogo';
      savePrefs();
      preserveVistaNext = true;
      rerender({ keepScroll: false });
      return;
    }

    const osBtn = e.target.closest('[data-rs-open-sistema]');
    if (osBtn) {
      f.year = 'todos';
      f.sistema = osBtn.dataset.rsOpenSistema;
      vista = 'catalogo';
      savePrefs();
      preserveVistaNext = true;
      rerender({ keepScroll: false });
      return;
    }

    const yb = e.target.closest('[data-year]');
    if (yb && yb.tagName === 'BUTTON') {
      f.year = yb.dataset.year;
      savePrefs();
      preserveVistaNext = true;
      rerender({ keepScroll: true });
      return;
    }

    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'clear') {
      f = { year: 'todos', sistema: '', q: '', mias: false };
      savePrefs();
      preserveVistaNext = true;
      rerender({ keepScroll: true });
      return;
    }
    if (act === 'seen' && t) {
      const now = store.toggleTopicSeen(seenKey(t));
      toast(now ? `“${t.title}” marcado como visto` : 'Marcado como no visto');
      preserveVistaNext = true;
      rerender({ keepScroll: true });
    }
  });

  root.querySelector('[data-f="sistema"]')?.addEventListener('change', (e) => {
    f.sistema = e.target.value; savePrefs(); preserveVistaNext = true; rerender({ keepScroll: true });
  });
  root.querySelector('[data-f="mias"]')?.addEventListener('change', (e) => {
    f.mias = e.target.checked; savePrefs(); preserveVistaNext = true; rerender({ keepScroll: true });
  });
  const q = root.querySelector('[data-f="q"]');
  if (q) {
    let tmr = 0;
    q.addEventListener('input', () => {
      clearTimeout(tmr);
      tmr = setTimeout(() => {
        f.q = q.value; savePrefs();
        const pos = q.selectionStart;
        preserveVistaNext = true;
        rerender({ keepScroll: true });
        const nq = document.querySelector('.resumenes [data-f="q"]');
        if (nq) { nq.focus(); try { nq.setSelectionRange(pos, pos); } catch { /* tipo search */ } }
      }, 220);
    });
  }

  S.scope(root, () => { S.reveal(root); });
}
