import { icon } from '../icons.js?v=20261122d';
import { store, todayISO, daysUntil } from '../store.js?v=20261122d';
import { esc, modal, toast, fmtDate, placeSeg } from '../ui.js';
import * as S from '../scroll.js';

export const section = 'pendientes';

const COLS = [
  { k: 'porhacer', label: 'Por hacer', ic: 'circlePlus' },
  { k: 'progreso', label: 'En progreso', ic: 'half' },
  { k: 'bloqueado', label: 'Bloqueado', ic: 'circleX' },
  { k: 'hecho', label: 'Hecho', ic: 'circleCheck' },
];
const TYPES = ['Estudio', 'Presentación', 'Trámite', 'Guardia'];
const TYPE_C = { Estudio: 'var(--inicio)', 'Presentación': 'var(--cuaderno)', 'Trámite': 'var(--yellow)', Guardia: 'var(--red)' };
const HOUR_PX = 68;

const ui = { view: 'agenda', day: null, hideDone: false };

const toMin = (hhmm) => { if (!hhmm) return null; const [h, m] = hhmm.split(':').map(Number); return h * 60 + (m || 0); };
const fmtMin = (m) => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

function dueLabel(iso) {
  if (!iso) return '';
  const d = daysUntil(iso);
  if (d === 0) return 'Hoy'; if (d === 1) return 'Mañana'; if (d === -1) return 'Ayer';
  if (d < 0) return `Vencida · ${fmtDate(iso)}`;
  return fmtDate(iso);
}

function taskCard(t) {
  const col = COLS.find((c) => c.k === t.status);
  const late = t.due && t.status !== 'hecho' && daysUntil(t.due) < 0;
  return `
  <article class="task" data-id="${t.id}" style="--c:${TYPE_C[t.type] || 'var(--c-accent)'}">
    <div class="task-top">
      <span class="task-type">${esc(t.type)}${t.start ? ` · ${t.start}` : ''}</span>
      <button class="icon-btn" data-act="edit" aria-label="Editar">${icon('edit')}</button>
    </div>
    <p class="task-title ${t.status === 'hecho' ? 'done' : ''}">${esc(t.title)}</p>
    <div class="task-foot">
      <button class="chip" data-s="${t.status}" data-act="cycle" title="Cambiar estado">${icon(col.ic)}${col.label}</button>
      ${t.due ? `<span class="due ${late ? 'late' : ''}">${icon('calendar')}${dueLabel(t.due)}</span>` : ''}
    </div>
    ${t.status !== 'hecho' ? `<button class="task-done" data-act="done">${icon('check')} Completar</button>` : ''}
  </article>`;
}

/** Greedy lane assignment so overlapping blocks sit side by side. */
function layout(items) {
  const sorted = [...items].sort((a, b) => a.s - b.s || b.e - a.e);
  const lanes = []; const groups = []; let group = []; let groupEnd = -1;
  for (const it of sorted) {
    if (it.s >= groupEnd && group.length) { groups.push(group); group = []; lanes.length = 0; }
    let lane = lanes.findIndex((end) => end <= it.s);
    if (lane === -1) { lane = lanes.length; lanes.push(it.e); } else lanes[lane] = it.e;
    it.lane = lane; group.push(it); groupEnd = Math.max(groupEnd, it.e);
  }
  if (group.length) groups.push(group);
  groups.forEach((g) => { const n = Math.max(...g.map((x) => x.lane)) + 1; g.forEach((x) => { x.lanes = n; }); });
  return sorted;
}

function agenda(tasks, events) {
  const days = []; const d = new Date(); d.setDate(d.getDate() - 1);
  for (let i = 0; i < 8; i++) { days.push(todayISO(d)); d.setDate(d.getDate() + 1); }
  if (!ui.day || !days.includes(ui.day)) ui.day = todayISO();
  const dayTasks = tasks.filter((t) => t.due === ui.day);
  const timed = dayTasks.filter((t) => t.start).map((t) => {
    const s = toMin(t.start); const e = Math.max(s + 30, toMin(t.end) || s + 60);
    return { t, s, e };
  });
  const untimed = dayTasks.filter((t) => !t.start);
  const allDay = events.filter((e) => e.date === ui.day);
  const isToday = ui.day === todayISO();
  const now = new Date(); const nowMin = now.getHours() * 60 + now.getMinutes();
  const mins = timed.flatMap((x) => [x.s, x.e]).concat(isToday ? [nowMin] : []);
  const startH = Math.max(0, Math.min(7, ...mins.map((m) => Math.floor(m / 60))));
  const endH = Math.min(24, Math.max(20, ...mins.map((m) => Math.ceil(m / 60))));
  const blocks = layout(timed);
  const dateLabel = new Date(ui.day + 'T12:00:00').toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' });

  return `
  <section class="agenda card" data-reveal>
    <div class="ag-head">
      <div>
        <p class="mono">Agenda</p>
        <h2 class="ag-date">${dateLabel}</h2>
      </div>
      <button class="lg lg-sm" data-act="add" style="--c:var(--tareas)">${icon('plus')} Bloque</button>
    </div>
    <div class="day-pills" role="tablist" aria-label="Día">
      ${days.map((iso) => {
        const dt = new Date(iso + 'T12:00:00');
        const n = tasks.filter((t) => t.due === iso).length + events.filter((e) => e.date === iso).length;
        return `<button class="day-pill ${iso === ui.day ? 'on' : ''} ${iso === todayISO() ? 'is-today' : ''}" role="tab" aria-selected="${iso === ui.day}" data-day="${iso}">
          <span>${dt.toLocaleDateString('es-MX', { weekday: 'short' }).replace('.', '')}</span><b>${dt.getDate()}</b>
          <i class="pdots">${'<em></em>'.repeat(Math.min(n, 4))}</i>
        </button>`;
      }).join('')}
    </div>
    ${allDay.length ? `<div class="allday">${allDay.map((e) => `<span class="chip" data-s="bloqueado">${icon('calendar')}${esc(e.title)} · todo el día</span>`).join('')}</div>` : ''}
    <div class="timeline" style="--hpx:${HOUR_PX}px;height:${(endH - startH) * HOUR_PX}px" data-start="${startH}">
      ${Array.from({ length: endH - startH + 1 }, (_, i) => `<div class="hour" style="top:${i * HOUR_PX}px"><span>${String(startH + i).padStart(2, '0')}:00</span></div>`).join('')}
      ${blocks.map((b) => `
        <article class="block ${b.t.status === 'hecho' ? 'is-done' : ''} ${((b.e - b.s) / 60) * HOUR_PX < 64 ? 'short' : ''}" data-id="${b.t.id}" data-act="edit"
          style="--c:${TYPE_C[b.t.type]};top:${((b.s - startH * 60) / 60) * HOUR_PX}px;height:${Math.max(34, ((b.e - b.s) / 60) * HOUR_PX - 6)}px;--lane:${b.lane};--lanes:${b.lanes}">
          <span class="dots3" aria-hidden="true">•••</span>
          <strong>${esc(b.t.title)}</strong>
          <span class="bt">${fmtMin(b.s)} – ${fmtMin(b.e)} · ${esc(b.t.type)}</span>
        </article>`).join('')}
      ${isToday && nowMin >= startH * 60 && nowMin <= endH * 60 ? `<div class="now" style="top:${((nowMin - startH * 60) / 60) * HOUR_PX}px"><span>${fmtMin(nowMin)}</span><i></i></div>` : ''}
      ${!timed.length ? '<div class="ag-empty">Sin bloques con hora este día. Agrega uno con <b>+ Bloque</b>.</div>' : ''}
    </div>
    ${untimed.length ? `<div class="untimed"><p class="mono">Sin hora</p>${untimed.map((t) => `<button class="ut" data-id="${t.id}" data-act="edit" style="--c:${TYPE_C[t.type]}">${esc(t.title)}<span class="chip" data-s="${t.status}">${COLS.find((c) => c.k === t.status).label}</span></button>`).join('')}</div>` : ''}
  </section>`;
}

export function render() {
  const all = store.all('tasks');
  const tasks = ui.hideDone ? all.filter((t) => t.status !== 'hecho') : all;
  const done = all.filter((t) => t.status === 'hecho').length;
  const pct = all.length ? Math.round((done / all.length) * 100) : 0;
  const events = store.all('events');

  return `
<div class="pendientes">
  <div class="sticky-bar glass"><strong>Pendientes · ${pct}% hecho</strong><button class="btn btn-sm btn-glow" data-act="add">${icon('plus')} Nueva tarea</button></div>
  <header class="page-head">
    <div>
      <p class="mono eyebrow">${all.length - done} abiertas · ${done} hechas</p>
      <h1>Tus <em>pendientes</em></h1>
      <p>Bloques de estudio entre guardias, presentaciones y trámites. Toca un bloque para editarlo.</p>
    </div>
    <div class="ring-wrap">
      <svg class="ring" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,.07)" stroke-width="10" fill="none"/>
        <circle class="ring-fill" cx="60" cy="60" r="50" stroke="var(--tareas)" stroke-width="10" fill="none" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="${100 - pct}" transform="rotate(-90 60 60)"/>
      </svg>
      <span class="ring-val"><b data-count="${pct}">${pct}</b>%</span>
    </div>
  </header>

  <div class="pd-toolbar" data-reveal>
    <div class="seg" data-seg role="tablist" aria-label="Vista">
      <span class="seg-ind" aria-hidden="true"></span>
      <button class="${ui.view === 'agenda' ? 'on' : ''}" data-view="agenda">${icon('clock')} Agenda</button>
      <button class="${ui.view === 'tablero' ? 'on' : ''}" data-view="tablero">${icon('layers')} Tablero</button>
    </div>
    <label class="switch">
      <input type="checkbox" data-act="hide" ${ui.hideDone ? 'checked' : ''}>
      <span class="sw-track"><span class="sw-knob"></span></span>
      <span>Ocultar hechas</span>
    </label>
  </div>

  ${ui.view === 'agenda' ? agenda(tasks, events) : `
  <div class="kanban">
    ${COLS.filter((c) => !(ui.hideDone && c.k === 'hecho')).map((c, ci) => {
      const items = tasks.filter((t) => t.status === c.k);
      return `
      <section class="kcol" data-col="${c.k}" data-side="${ci < 2 ? 'l' : 'r'}">
        <header><span class="chip" data-s="${c.k}">${icon(c.ic)}${c.label}</span><span class="mono">${items.length}</span></header>
        <div class="kitems">${items.map(taskCard).join('') || '<div class="empty small">Vacío</div>'}</div>
        ${c.k === 'porhacer' ? `<button class="kadd" data-act="add">${icon('plus')} Agregar tarea</button>` : ''}
      </section>`;
    }).join('')}
  </div>`}
</div>`;
}

function form(t) {
  return `
    <label class="field">Tarea<input class="input" name="title" value="${esc(t?.title || '')}" placeholder="Ej. Preparar sesión de pancreatitis" required></label>
    <div class="row">
      <label class="field">Tipo<select class="select" name="type">${TYPES.map((x) => `<option ${t?.type === x ? 'selected' : ''}>${x}</option>`).join('')}</select></label>
      <label class="field">Fecha<input class="input" type="date" name="due" value="${t?.due || ui.day || todayISO()}"></label>
    </div>
    <div class="row">
      <label class="field">Inicio (opcional)<input class="input" type="time" name="start" value="${t?.start || ''}"></label>
      <label class="field">Fin<input class="input" type="time" name="end" value="${t?.end || ''}"></label>
    </div>
    ${t ? `<label class="field">Estado<select class="select" name="status">${COLS.map((c) => `<option value="${c.k}" ${t.status === c.k ? 'selected' : ''}>${c.label}</option>`).join('')}</select></label>` : ''}`;
}
const read = (fd) => {
  const o = { title: fd.get('title').trim(), type: fd.get('type'), due: fd.get('due'), start: fd.get('start') || '', end: fd.get('end') || '' };
  if (fd.get('status')) o.status = fd.get('status');
  return o;
};

export function mount(root, rerender, params) {
  const keep = () => rerender({ keepScroll: true });
  const openAdd = () => modal('Nueva tarea', form(null), (fd) => {
    store.add('tasks', { ...read(fd), status: 'porhacer' }); toast('Tarea agregada'); keep();
  });
  const openEdit = (id) => {
    const t = store.find('tasks', id);
    modal('Editar tarea', form(t) + `<button type="button" class="btn btn-sm btn-ghost danger" data-del>${icon('trash')} Eliminar</button>`, (fd) => {
      store.update('tasks', id, read(fd)); toast('Tarea actualizada'); keep();
    });
    document.querySelector('#modal [data-del]').onclick = () => { store.remove('tasks', id); document.getElementById('modal').classList.remove('open'); keep(); };
  };
  if (params?.get('new')) { history.replaceState(null, '', '#/pendientes'); openAdd(); }

  const seg = root.querySelector('[data-seg]'); placeSeg(seg);

  root.addEventListener('change', (e) => {
    if (e.target.matches('[data-act="hide"]')) { ui.hideDone = e.target.checked; setTimeout(keep, 280); }
  });
  root.addEventListener('click', (e) => {
    const v = e.target.closest('[data-view]');
    if (v) {
      if (ui.view === v.dataset.view) return;
      ui.view = v.dataset.view;
      seg.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('on', b === v)); placeSeg(seg);
      return setTimeout(keep, 320);
    }
    const day = e.target.closest('[data-day]');
    if (day) { ui.day = day.dataset.day; return keep(); }
    const a = e.target.closest('[data-act]'); if (!a || a.matches('input')) return;
    const card = a.closest('[data-id]'); const id = card?.dataset.id;
    const t = id && store.find('tasks', id);
    const act = a.dataset.act;
    if (act === 'add') return openAdd();
    if (act === 'edit') return openEdit(id);
    if (act === 'cycle') {
      const order = ['porhacer', 'progreso', 'bloqueado', 'hecho'];
      store.update('tasks', id, { status: order[(order.indexOf(t.status) + 1) % order.length] });
      return keep();
    }
    if (act === 'done') {
      store.update('tasks', id, { status: 'hecho' });
      if (S.enabled) {
        const g = window.gsap;
        a.classList.add('burst'); card.classList.add('completing');
        g.timeline({ onComplete: () => { toast('¡Hecho!'); keep(); } })
          .to(a, { scale: 1.08, duration: 0.18, ease: 'power2.out' })
          .to(a, { scale: 1, duration: 0.3, ease: 'back.out(3)' })
          .to(card, { x: 40, opacity: 0, duration: 0.35, ease: 'power2.in' }, '+=0.15');
      } else { toast('¡Hecho!'); keep(); }
    }
  });

  S.scope(root, (g) => {
    S.compactHeader(root);
    S.reveal(root);
    S.counters(root);
    S.splitReveal(root);
    g.from('.ring-fill', { strokeDashoffset: 100, duration: 1.8, ease: 'power3.out', delay: 0.2 });

    // agenda: pills pop, hour rows fade, blocks slide in, "now" line sweeps across (ref 8260)
    if (root.querySelector('.timeline')) {
      g.from('.day-pill', { y: 24, opacity: 0, scale: 0.9, duration: 0.7, stagger: 0.04, ease: 'back.out(2)', scrollTrigger: { trigger: '.day-pills', start: 'top 92%' } });
      g.utils.toArray('.timeline .hour').forEach((h) => {
        g.from(h, { opacity: 0, x: -14, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: h, start: 'top 92%' } });
      });
      g.utils.toArray('.timeline .block').forEach((b, i) => {
        g.from(b, { x: 60, opacity: 0, filter: 'blur(6px)', duration: 0.9, delay: (i % 3) * 0.06, ease: 'expo.out', clearProps: 'filter', scrollTrigger: { trigger: b, start: 'top 90%' } });
      });
      const now = root.querySelector('.now');
      if (now) {
        g.from(now.querySelector('i'), { scaleX: 0, transformOrigin: 'left', duration: 1.4, ease: 'expo.inOut', scrollTrigger: { trigger: now, start: 'top 85%' } });
        g.from(now.querySelector('span'), { scale: 0, duration: 0.6, ease: 'back.out(3)', delay: 0.3, scrollTrigger: { trigger: now, start: 'top 85%' } });
      }
    }
    // board: columns enter from the sides, chips pop
    g.utils.toArray('.kcol').forEach((col) => {
      g.from(col, { x: col.dataset.side === 'l' ? -80 : 80, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: col, start: 'top 90%' } });
      g.from(col.querySelectorAll('.task'), { y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: col, start: 'top 85%' } });
      g.from(col.querySelectorAll('.chip'), { scale: 0.4, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'back.out(2.5)', scrollTrigger: { trigger: col, start: 'top 85%' } });
    });
  });
}
