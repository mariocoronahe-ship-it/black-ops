import { icon } from '../icons.js?v=20261121y';
import { store, todayISO } from '../store.js?v=20261121y';
import { esc, modal, toast, fmtDate, placeSeg } from '../ui.js';
import * as S from '../scroll.js';

export const section = 'bitacora';

export const PROCEDURES = [
  'Colecistectomía laparoscópica', 'Colecistectomía abierta', 'Exploración de vía biliar',
  'Apendicectomía laparoscópica', 'Apendicectomía abierta',
  'Hernioplastía inguinal (Lichtenstein)', 'Hernioplastía inguinal laparoscópica (TAPP/TEP)', 'Hernioplastía umbilical', 'Eventroplastía / hernia ventral',
  'Laparotomía exploradora', 'Hemicolectomía derecha', 'Sigmoidectomía', 'Procedimiento de Hartmann', 'Cierre de colostomía',
  'Gastrectomía', 'Funduplicatura', 'Cierre de úlcera perforada (parche de Graham)',
  'Tiroidectomía', 'Mastectomía', 'Drenaje de absceso', 'Amputación', 'Otro',
];
const CATEGORIES = ['Hepatobiliar', 'Colon', 'Pared/Hernias', 'Apéndice', 'Trauma', 'Onco', 'Vascular', 'Otros'];
const CAT_C = { Hepatobiliar: '#3dff8a', Colon: '#ff8a3d', 'Pared/Hernias': '#8b5cf6', 'Apéndice': '#3ee0ff', Trauma: '#ff3b4e', Onco: '#ff5fae', Vascular: '#f5c84b', Otros: '#9a9aa6' };
const APPROACHES = ['Laparoscópica', 'Abierta', 'Robótica', 'Convertida'];
const ROLES = ['Cirujano', 'Primer ayudante', 'Segundo ayudante', 'Observador'];
const CLAVIEN = ['Ninguna', 'I', 'II', 'IIIa', 'IIIb', 'IVa', 'IVb', 'V'];

const ui = { role: 'Todos', q: '' };
const isLap = (c) => c.approach === 'Laparoscópica' || c.approach === 'Robótica';
const isAyudante = (r) => r === 'Primer ayudante' || r === 'Segundo ayudante';

function monthly(cases) {
  const out = []; const d = new Date(); d.setDate(1);
  for (let i = 11; i >= 0; i--) {
    const m = new Date(d.getFullYear(), d.getMonth() - i, 1);
    const key = `${m.getFullYear()}-${String(m.getMonth() + 1).padStart(2, '0')}`;
    out.push({ key, label: m.toLocaleDateString('es-MX', { month: 'short' }).replace('.', ''), n: cases.filter((c) => c.date?.startsWith(key)).length });
  }
  return out;
}

function trendSvg(series) {
  const W = 600; const H = 140; const max = Math.max(3, ...series.map((s) => s.n));
  const x = (i) => 20 + (i * (W - 40)) / (series.length - 1); const y = (n) => H - 24 - (n / max) * (H - 50);
  const pts = series.map((s, i) => `${x(i).toFixed(1)},${y(s.n).toFixed(1)}`);
  return `<svg class="trend" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-label="Cirugías por mes">
    <defs><linearGradient id="trF" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#2dd4e6" stop-opacity=".35"/><stop offset="1" stop-color="#2dd4e6" stop-opacity="0"/></linearGradient></defs>
    <path d="M${pts[0]} L${pts.join(' L')} L${x(series.length - 1)},${H - 24} L${x(0)},${H - 24} Z" fill="url(#trF)"/>
    <path data-draw d="M${pts.join(' L')}" fill="none" stroke="#2dd4e6" stroke-width="2.5" style="filter:drop-shadow(0 0 6px #2dd4e6)"/>
    ${series.map((s, i) => `<circle cx="${x(i)}" cy="${y(s.n)}" r="${s.n ? 3.5 : 2}" fill="${s.n ? '#e9fbff' : '#2a2a30'}"/><text x="${x(i)}" y="${H - 6}" text-anchor="middle">${s.label}</text>`).join('')}
  </svg>`;
}

export function render() {
  const all = [...store.all('cases')].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const q = ui.q.toLowerCase();
  const list = all.filter((c) => (ui.role === 'Todos' || (ui.role === 'Cirujano' ? c.role === 'Cirujano' : isAyudante(c.role)))
    && (!q || `${c.procedure} ${c.category} ${c.notes}`.toLowerCase().includes(q)));
  const n = all.length;
  const pct = (k) => (n ? Math.round((k / n) * 100) : 0);
  const asSurgeon = pct(all.filter((c) => c.role === 'Cirujano').length);
  const lap = pct(all.filter(isLap).length);
  const comp = pct(all.filter((c) => c.clavien && c.clavien !== 'Ninguna').length);
  const chole = all.filter((c) => /colecistectom/i.test(c.procedure));
  const cvs = chole.length ? Math.round((chole.filter((c) => c.cvs).length / chole.length) * 100) : null;
  const byCat = CATEGORIES.map((k) => ({ k, n: all.filter((c) => c.category === k).length })).filter((x) => x.n).sort((a, b) => b.n - a.n);
  const maxCat = Math.max(1, ...byCat.map((x) => x.n));

  return `
<div class="bitacora">
  <div class="sticky-bar glass"><strong>Bitácora · ${n} cirugías</strong><button class="btn btn-sm btn-glow" data-act="add">${icon('plus')} Registrar</button></div>
  <header class="page-head">
    <div>
      <p class="mono eyebrow">Registro quirúrgico de la residencia</p>
      <h1>Tu <em>bitácora</em></h1>
      <p>Cada cirugía cuenta: rol, abordaje, complicaciones y visión crítica de seguridad. Lista para tu reporte de residencia.</p>
    </div>
    <div class="head-actions">
      <button class="btn" data-act="csv">${icon('download')} Exportar CSV</button>
      <button class="btn btn-glow" data-act="add">${icon('plus')} Registrar cirugía</button>
    </div>
  </header>

  <div class="bt-stats">
    <article class="card lamp" data-reveal style="--c:var(--bitacora)"><p class="mono">Total</p><div class="big"><span data-count="${n}">${n}</span><small>cirugías</small></div></article>
    <article class="card lamp" data-reveal style="--c:var(--neon-green)"><p class="mono">Como cirujano</p><div class="big"><span data-count="${asSurgeon}">${asSurgeon}</span><small>%</small></div></article>
    <article class="card lamp" data-reveal style="--c:var(--violet)"><p class="mono">Mínima invasión</p><div class="big"><span data-count="${lap}">${lap}</span><small>%</small></div></article>
    <article class="card lamp" data-reveal style="--c:var(--neon-red)"><p class="mono">Con complicación</p><div class="big"><span data-count="${comp}">${comp}</span><small>% (Clavien ≥ I)</small></div></article>
  </div>

  <div class="bt-charts">
    <article class="card" data-reveal style="--c:var(--bitacora)">
      <p class="mono">Por categoría</p>
      <div class="cat-bars">
        ${byCat.map((x) => `<div class="cat-row" style="--c:${CAT_C[x.k]}"><span>${x.k}</span><div class="progress"><span style="--p:${(x.n / maxCat) * 100}%"></span></div><b>${x.n}</b></div>`).join('') || '<p class="muted">Aún no hay registros.</p>'}
      </div>
      ${cvs !== null ? `<p class="cvs-note">${icon('circleCheck')} Visión crítica de seguridad lograda en <b>${cvs}%</b> de ${chole.length} colecistectomías.</p>` : ''}
    </article>
    <article class="card" data-reveal style="--c:var(--bitacora)">
      <p class="mono">Últimos 12 meses</p>
      ${trendSvg(monthly(all))}
    </article>
  </div>

  <div class="bt-toolbar" data-reveal>
    <div class="seg" data-seg role="tablist" aria-label="Rol"><span class="seg-ind" aria-hidden="true"></span>${['Todos', 'Cirujano', 'Ayudante'].map((r) => `<button class="${ui.role === r ? 'on' : ''}" data-role="${r}">${r}</button>`).join('')}</div>
    <label class="search glass">${icon('search')}<input name="q" value="${esc(ui.q)}" placeholder="Buscar procedimiento, categoría, nota…" aria-label="Buscar"></label>
  </div>

  <section class="cases">
    ${list.map((c) => `
      <article class="case-row" data-id="${c.id}" data-reveal style="--c:${CAT_C[c.category] || 'var(--bitacora)'}">
        <div class="cr-date"><b>${new Date(c.date + 'T12:00:00').getDate()}</b><span>${fmtDate(c.date).split(' ')[1] || ''}</span></div>
        <div class="cr-main">
          <strong>${esc(c.procedure)}</strong>
          <span class="muted">${esc(c.category)} · ${esc(c.approach)} · ${esc(c.urgency)}${c.minutes ? ` · ${c.minutes} min` : ''}</span>
          ${c.notes ? `<p>${esc(c.notes)}</p>` : ''}
        </div>
        <div class="cr-tags">
          <span class="chip" style="--c:${c.role === 'Cirujano' ? 'var(--neon-green)' : 'var(--neon-cyan)'}">${esc(c.role)}</span>
          ${c.clavien && c.clavien !== 'Ninguna' ? `<span class="chip" style="--c:var(--neon-red)">Clavien ${esc(c.clavien)}</span>` : ''}
          ${c.cvs ? `<span class="chip" style="--c:var(--neon-green)">${icon('check')} CVS</span>` : ''}
          <button class="icon-btn" data-act="edit" aria-label="Editar">${icon('edit')}</button>
        </div>
      </article>`).join('') || '<div class="empty">Sin cirugías con este filtro.</div>'}
  </section>
</div>`;
}

function form(c) {
  const opt = (arr, v) => arr.map((x) => `<option ${x === v ? 'selected' : ''}>${x}</option>`).join('');
  const known = !c || PROCEDURES.includes(c.procedure);
  return `
    <div class="row">
      <label class="field">Fecha<input class="input" type="date" name="date" value="${c?.date || todayISO()}" required></label>
      <label class="field">Categoría<select class="select" name="category">${opt(CATEGORIES, c?.category || 'Hepatobiliar')}</select></label>
    </div>
    <label class="field">Procedimiento<select class="select" name="procSel">${opt(PROCEDURES, known ? (c?.procedure || PROCEDURES[0]) : 'Otro')}</select></label>
    <label class="field proc-other" ${known ? 'hidden' : ''}>Especifica<input class="input" name="procOther" value="${known ? '' : esc(c?.procedure || '')}" placeholder="Nombre del procedimiento"></label>
    <div class="row">
      <label class="field">Rol<select class="select" name="role">${opt(ROLES, c?.role || 'Primer ayudante')}</select></label>
      <label class="field">Abordaje<select class="select" name="approach">${opt(APPROACHES, c?.approach || 'Laparoscópica')}</select></label>
    </div>
    <div class="row">
      <label class="field">Tipo<select class="select" name="urgency">${opt(['Electiva', 'Urgencia'], c?.urgency || 'Electiva')}</select></label>
      <label class="field">Duración (min)<input class="input" type="number" min="0" max="1440" step="5" name="minutes" value="${c?.minutes || ''}"></label>
    </div>
    <div class="row">
      <label class="field">Complicación (Clavien-Dindo)<select class="select" name="clavien">${opt(CLAVIEN, c?.clavien || 'Ninguna')}</select></label>
      <label class="switch cvs-switch" style="align-self:end"><input type="checkbox" name="cvs" ${c?.cvs ? 'checked' : ''}><span class="sw-track"><span class="sw-knob"></span></span><span>Visión crítica lograda</span></label>
    </div>
    <label class="field">Notas<textarea class="textarea" name="notes" rows="3" style="min-height:80px" placeholder="Hallazgos, aprendizaje, perla del adscrito…">${esc(c?.notes || '')}</textarea></label>`;
}
const read = (fd) => {
  const sel = fd.get('procSel');
  return {
    date: fd.get('date'), category: fd.get('category'),
    procedure: sel === 'Otro' ? (fd.get('procOther') || '').trim() || 'Otro' : sel,
    role: fd.get('role'), approach: fd.get('approach'), urgency: fd.get('urgency'),
    minutes: +fd.get('minutes') || 0, clavien: fd.get('clavien'), cvs: fd.get('cvs') === 'on', notes: (fd.get('notes') || '').trim(),
  };
};
function wireForm() {
  const f = document.querySelector('#modal form'); const sel = f.procSel; const other = f.querySelector('.proc-other');
  const cat = f.category;
  sel.addEventListener('change', () => {
    other.hidden = sel.value !== 'Otro';
    // sensible default category from the procedure name
    const v = sel.value.toLowerCase();
    const guess = /colecist|biliar/.test(v) ? 'Hepatobiliar' : /apendic/.test(v) ? 'Apéndice' : /hernio|eventro/.test(v) ? 'Pared/Hernias'
      : /colect|sigmoid|hartmann|colostom/.test(v) ? 'Colon' : /tiroid|mastect|gastrect/.test(v) ? 'Onco' : null;
    if (guess) cat.value = guess;
  });
}

function csv() {
  const cols = ['Fecha', 'Procedimiento', 'Categoría', 'Abordaje', 'Rol', 'Tipo', 'Duración (min)', 'Clavien-Dindo', 'Visión crítica', 'Notas'];
  const q = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = [...store.all('cases')].sort((a, b) => a.date.localeCompare(b.date))
    .map((c) => [c.date, c.procedure, c.category, c.approach, c.role, c.urgency, c.minutes || '', c.clavien, c.cvs ? 'Sí' : 'No', c.notes].map(q).join(','));
  const blob = new Blob(['﻿' + [cols.map(q).join(','), ...rows].join('\r\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `bitacora-quirurgica-${todayISO()}.csv`;
  document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

export function mount(root, rerender, params) {
  const keep = () => rerender({ keepScroll: true });
  const openAdd = () => { modal('Registrar cirugía', form(null), (fd) => { store.add('cases', read(fd)); toast('Cirugía registrada'); keep(); }); wireForm(); };
  const openEdit = (id) => {
    modal('Editar cirugía', form(store.find('cases', id)) + `<button type="button" class="btn btn-sm btn-ghost danger" data-del>${icon('trash')} Eliminar</button>`,
      (fd) => { store.update('cases', id, read(fd)); toast('Registro actualizado'); keep(); });
    wireForm();
    document.querySelector('#modal [data-del]').onclick = () => { store.remove('cases', id); document.getElementById('modal').classList.remove('open'); toast('Registro eliminado'); keep(); };
  };
  if (params?.get('new')) { history.replaceState(null, '', '#/bitacora'); openAdd(); }
  const seg = root.querySelector('[data-seg]'); placeSeg(seg);

  root.addEventListener('click', (e) => {
    const r = e.target.closest('[data-role]');
    if (r) { if (ui.role === r.dataset.role) return; ui.role = r.dataset.role; seg.querySelectorAll('[data-role]').forEach((b) => b.classList.toggle('on', b === r)); placeSeg(seg); return setTimeout(keep, 300); }
    const a = e.target.closest('[data-act]'); if (!a) return;
    if (a.dataset.act === 'add') openAdd();
    if (a.dataset.act === 'csv') { csv(); toast('CSV descargado'); }
    if (a.dataset.act === 'edit') openEdit(a.closest('[data-id]').dataset.id);
  });
  root.addEventListener('dblclick', (e) => { const row = e.target.closest('.case-row'); if (row) openEdit(row.dataset.id); });
  let t;
  root.querySelector('.search input').addEventListener('input', (e) => {
    ui.q = e.target.value; clearTimeout(t);
    t = setTimeout(() => { keep(); const inp = document.querySelector('.bitacora .search input'); inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }, 250);
  });

  S.scope(root, () => {
    S.compactHeader(root); S.splitReveal(root); S.reveal(root); S.counters(root); S.bars(root); S.drawPaths(root);
  });
}
