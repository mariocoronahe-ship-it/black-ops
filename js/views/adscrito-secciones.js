/* ==========================================================================
   CALOT-OS · Panel del adscrito · secciones
   1 Bitácora quirúrgica con validación y autonomía (Zwisch)
   2 Evaluaciones y comentarios privados
   3 Sesiones académicas, asistencia, asignaciones y examen rápido
   4 Organización del servicio: guardias, postguardia y rotaciones
   + Mensajes con el residente
   Lo que decide el adscrito se guarda en este navegador (calot:adscrito).
   ========================================================================== */

import { icon } from '../icons.js?v=20261122i';
import { store, todayISO } from '../store.js?v=20261122i';
// El panel docente sigue los módulos R2 originales (sus calificaciones y mapas de calor usan esos ids)
import { TEMARIO_APRENDE_BASE as TEMARIO_APRENDE } from '../data/temario_aprende.js?v=20261122i';
import { esc } from '../ui.js';
import { threadHTML, deliveryMode, ADSCRITA } from '../mensajes.js?v=20261122i';

const KEY = 'calot:adscrito';
export function loadState() {
  let s = {};
  try { s = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch {}
  return {
    valid: s.valid || {}, zwisch: s.zwisch || {}, evals: s.evals || {}, notes: s.notes || {},
    sessions: s.sessions || null, attendance: s.attendance || {}, tasks: s.tasks || [], exams: s.exams || [],
  };
}
export function saveState(st) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch {} }

function rng(seed) {
  let h = 2166136261;
  for (const ch of seed) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 10000) / 10000; };
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const GN = { R1: 1, R2: 2, R3: 3, R4: 4 };
const isoPlus = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return todayISO(d); };
const fmtDay = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric', month: 'short' });
const short = (name) => name.replace(/^Dra?\.\s*/, '').split(' ')[0];
const SHORT_T = { piel: 'Piel', quemaduras: 'Quemaduras', neoplasias: 'Oncología', pared: 'Pared y hernias', esofago: 'Esófago', estomago: 'Estómago', delgado: 'Intestino delgado', colon: 'Colon y apéndice', recto: 'Recto y ano', hepatobiliar: 'Hepatobiliar', trauma: 'Trauma' };

/* ---------------- 1 · Bitácora quirúrgica ---------------- */

// Metas de referencia como cirujano, acumuladas por año (ajustables por el servicio)
export const PROCS = [
  { id: 'colelap', name: 'Colecistectomía laparoscópica', re: /colecistectom.a lap/i, meta: [2, 10, 25, 40] },
  { id: 'apendi', name: 'Apendicectomía', re: /apendicectom/i, meta: [8, 15, 20, 25] },
  { id: 'inguinal', name: 'Hernioplastía inguinal', re: /inguinal/i, meta: [6, 15, 25, 30] },
  { id: 'ventral', name: 'Hernia umbilical / ventral', re: /umbilical|eventro|ventral/i, meta: [4, 8, 12, 15] },
  { id: 'lape', name: 'Laparotomía exploradora', re: /laparotom/i, meta: [1, 5, 12, 20] },
  { id: 'absceso', name: 'Drenaje de absceso', re: /absceso/i, meta: [10, 12, 12, 12] },
];
const ZWISCH = ['', 'Le muestro', 'Lo guío', 'Lo apoyo', 'Solo superviso'];

function realCases() { return store.all('cases') || []; }

function procCounts(r) {
  const out = {};
  for (const p of PROCS) {
    out[p.id] = { cir: 0, ayu: 0 };
  }
  if (r.isCurrentDevice) {
    for (const p of PROCS) {
      const cs = realCases().filter((c) => p.re.test(c.procedure || ''));
      out[p.id] = { cir: cs.filter((c) => c.role === 'Cirujano').length, ayu: cs.filter((c) => c.role !== 'Cirujano').length };
    }
  }
  return out;
}

function zwischOf(st, r, pid) {
  const v = st.zwisch[r.id]?.[pid];
  if (v) return v;
  return 2;
}

function pendingCases(all, st) {
  const cur = all.find((r) => r.isCurrentDevice) || all[0];
  const mine = realCases().slice().sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 8)
    .map((c) => ({ id: c.id, res: cur, date: c.date, proc: c.procedure, role: c.role || 'Cirujano', approach: c.approach || '' }));
  return mine.filter((c) => c.res).map((c) => ({ ...c, state: st.valid[c.id] || 'pend' }));
}

export function bitacoraHTML(all, st, ui) {
  const sel = all.find((r) => r.id === ui.bitRes) || all.find((r) => r.real) || all[0];
  const counts = procCounts(sel);
  const g = GN[sel.grade] - 1;
  const cases = pendingCases(all, st);
  const pend = cases.filter((c) => c.state === 'pend');
  const done = cases.filter((c) => c.state !== 'pend').slice(0, 6);
  return `
  <div class="ads-grid-2">
    <section class="card ads-pad">
      <div class="ads-sec-head">
        <h2>Bitácora de ${esc(sel.name)}</h2>
        <select class="ads-select" data-ads-bitres aria-label="Residente">
          ${all.map((r) => `<option value="${r.id}" ${r.id === sel.id ? 'selected' : ''}>${esc(r.grade)} · ${esc(r.name)}${r.real ? ' (real)' : ''}</option>`).join('')}
        </select>
      </div>
      <p class="muted ads-note">Metas de referencia como cirujano para ${esc(sel.grade)}. La autonomía usa la escala Zwisch y la ajustas tú.</p>
      <div class="ads-table-wrap">
        <table class="ads-table ads-proc">
          <thead><tr><th>Procedimiento</th><th>Como cirujano</th><th>Ayudante</th><th>Autonomía</th></tr></thead>
          <tbody>
          ${PROCS.map((p) => {
            const c = counts[p.id]; const meta = p.meta[g]; const pct = Math.round(clamp(c.cir / meta, 0, 1) * 100);
            const z = zwischOf(st, sel, p.id);
            return `<tr class="is-static">
              <td>${esc(p.name)}</td>
              <td data-label="Cirujano"><div class="ads-meter ${pct < 50 ? 'is-low' : ''}"><i style="width:${pct}%"></i></div><b>${c.cir}</b><small> / ${meta}</small></td>
              <td data-label="Ayudante">${c.ayu}</td>
              <td data-label="Autonomía"><select class="ads-select is-sm" data-ads-zwisch="${sel.id}" data-proc="${p.id}">${ZWISCH.slice(1).map((l, i) => `<option value="${i + 1}" ${z === i + 1 ? 'selected' : ''}>${i + 1} · ${l}</option>`).join('')}</select></td>
            </tr>`;
          }).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <section class="card ads-pad">
      <div class="ads-sec-head"><h2>Por validar</h2><span class="ads-count">${pend.length}</span></div>
      <p class="muted ads-note">Confirma las cirugías en las que estuviste. Las de Dr. Mario vienen de su bitácora real.</p>
      <ul class="ads-cases">
        ${pend.map((c) => `
        <li>
          <div>
            <b>${esc(c.proc)}</b>
            <span class="muted">${esc(c.res.name)} · ${esc(c.role)}${c.approach ? ` · ${esc(c.approach)}` : ''} · ${esc(fmtDay(c.date))}</span>
          </div>
          <div class="ads-case-act">
            <button type="button" class="btn btn-sm btn-glow" data-ads-valid="${esc(c.id)}" data-v="ok">${icon('check')} Validar</button>
            <button type="button" class="btn btn-sm btn-ghost" data-ads-valid="${esc(c.id)}" data-v="no" aria-label="No estuve">${icon('close')}</button>
          </div>
        </li>`).join('') || '<li class="muted">Todo validado.</li>'}
      </ul>
      ${done.length ? `<p class="mono ads-kicker" style="margin-top:16px">Revisadas</p><ul class="ads-cases is-done">${done.map((c) => `<li><div><b>${esc(c.proc)}</b><span class="muted">${esc(c.res.name)} · ${esc(fmtDay(c.date))}</span></div><span class="ads-badge ${c.state === 'ok' ? 'is-ok' : 'is-riesgo'}">${c.state === 'ok' ? 'Validada' : 'No estuve'}</span></li>`).join('')}</ul>` : ''}
    </section>
  </div>`;
}

/* ---------------- 2 · Evaluaciones ---------------- */

const CRIT = [
  { id: 'con', name: 'Conocimiento' }, { id: 'hab', name: 'Habilidad quirúrgica' }, { id: 'jui', name: 'Juicio clínico' },
  { id: 'pro', name: 'Profesionalismo' }, { id: 'com', name: 'Comunicación' },
];
function evalOf(st, r, cid) {
  const v = st.evals[r.id]?.[cid];
  if (v) return v;
  return 8;
}
const examOf = (r) => (r.simulacros ? r.precision : null);

export function evaluacionesHTML(all, st, ui) {
  const mes = new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' });
  const sel = all.find((r) => r.id === ui.evalRes);
  return `
  <section class="card ads-pad">
    <div class="ads-sec-head"><h2>Evaluación de ${esc(mes)}</h2><span class="mono muted">escala 5–10</span></div>
    <div class="ads-table-wrap">
      <table class="ads-table ads-eval">
        <thead><tr><th>Residente</th>${CRIT.map((c) => `<th>${c.name}</th>`).join('')}<th>Promedio</th><th>Departamental</th><th></th></tr></thead>
        <tbody>
        ${all.map((r) => {
          const vals = CRIT.map((c) => evalOf(st, r, c.id));
          const prom = (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
          const ex = r.real ? null : examOf(r);
          return `<tr class="is-static ${ui.evalRes === r.id ? 'is-sel' : ''}">
            <td class="ads-name"><span>${esc(r.name)}</span> <span class="ads-grade">${r.grade}</span></td>
            ${CRIT.map((c, i) => `<td data-label="${c.name}"><select class="ads-select is-sm is-score" data-ads-eval="${r.id}" data-crit="${c.id}">${[5, 6, 7, 8, 9, 10].map((n) => `<option ${vals[i] === n ? 'selected' : ''}>${n}</option>`).join('')}</select></td>`).join('')}
            <td data-label="Promedio"><b class="${prom < 7 ? 'ads-down' : ''}">${prom}</b></td>
            <td data-label="Departamental">${ex == null ? '<small class="muted">pendiente</small>' : `${ex}`}</td>
            <td><button type="button" class="btn btn-sm btn-ghost" data-ads-evalres="${r.id}">${icon('note')} ${(st.notes[r.id] || []).length || ''} Notas</button></td>
          </tr>`;
        }).join('')}
        </tbody>
      </table>
    </div>
  </section>
  ${sel ? `
  <section class="card ads-pad ads-notes">
    <div class="ads-sec-head"><h2>Notas privadas · ${esc(sel.name)}</h2><button type="button" class="btn btn-sm btn-ghost" data-ads-evalres="">${icon('close')}</button></div>
    <ul class="ads-note-list">
      ${(st.notes[sel.id] || []).slice().reverse().map((n) => `<li><time class="mono muted">${new Date(n.t).toLocaleString('es-MX', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</time><p>${esc(n.text)}</p></li>`).join('') || '<li class="muted">Sin notas todavía. Solo tú las ves.</li>'}
    </ul>
    <form class="ads-inline-form" data-ads-noteform="${sel.id}">
      <textarea class="input" name="text" rows="2" placeholder="Observación del mes, desempeño en quirófano, acuerdos…" required></textarea>
      <button class="btn btn-glow btn-sm" type="submit">${icon('plus')} Guardar nota</button>
    </form>
  </section>` : ''}`;
}

/* ---------------- 3 · Sesiones y asignaciones ---------------- */

export function defaultSessions(all) {
  const temas = TEMARIO_APRENDE.map((t) => SHORT_T[t.id] || t.title);
  const out = [];
  [-9, -6, -2, 2, 5, 9].forEach((d, i) => {
    const ponente = all[i % Math.max(1, all.length)];
    out.push({ id: `s${i}`, date: isoPlus(d), tema: temas[(i * 3 + 1) % temas.length], ponente: ponente?.id });
  });
  return out;
}
function attended(st, sid, r) {
  const v = st.attendance[sid]?.[r.id];
  if (v != null) return v;
  return Boolean(r.has);
}

export function sesionesHTML(all, st) {
  const sessions = st.sessions || defaultSessions(all);
  const today = todayISO();
  const past = sessions.filter((s) => s.date < today).sort((a, b) => b.date.localeCompare(a.date));
  const next = sessions.filter((s) => s.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const byId = (id) => all.find((r) => r.id === id);
  const asist = (r) => (past.length ? Math.round((past.filter((s) => attended(st, s.id, r)).length / past.length) * 100) : 100);
  const taskDone = (t, r) => Boolean(t.doneBy?.[r.id] || (r.topicsRead && r.topicsRead.length > 0 && t.doneReal));
  const targets = (t) => all.filter((r) => t.to === 'todos' || t.to === r.grade || t.to === r.id);
  const temaOpts = TEMARIO_APRENDE.map((t) => `<option>${esc(SHORT_T[t.id] || t.title)}</option>`).join('');

  return `
  <div class="ads-grid-2">
    <section class="card ads-pad">
      <div class="ads-sec-head"><h2>Próximas sesiones</h2></div>
      <ul class="ads-sessions">
        ${next.map((s) => `<li><span class="ads-date mono">${esc(fmtDay(s.date))}</span><div><b>${esc(s.tema)}</b><span class="muted">Expone ${esc(byId(s.ponente)?.name || 'por asignar')}</span></div></li>`).join('') || '<li class="muted">Sin sesiones programadas.</li>'}
      </ul>
      <form class="ads-inline-form is-row" data-ads-sessionform>
        <input class="input" type="date" name="date" value="${isoPlus(7)}" required aria-label="Fecha">
        <select class="input" name="tema" aria-label="Tema">${temaOpts}</select>
        <select class="input" name="ponente" aria-label="Ponente">${all.map((r) => `<option value="${r.id}">${esc(r.grade)} · ${esc(short(r.name))}</option>`).join('')}</select>
        <button class="btn btn-glow btn-sm" type="submit">${icon('plus')} Programar</button>
      </form>
    </section>

    <section class="card ads-pad">
      <div class="ads-sec-head"><h2>Asistencia</h2><span class="mono muted">últimas ${past.length} sesiones</span></div>
      ${past.map((s) => `
      <div class="ads-attend">
        <p><b>${esc(s.tema)}</b> <span class="muted mono">${esc(fmtDay(s.date))}</span></p>
        <div class="ads-chips">${all.map((r) => `<button type="button" class="ads-att ${attended(st, s.id, r) ? 'is-on' : ''}" data-ads-att="${s.id}" data-res="${r.id}" title="${esc(r.name)}">${esc(short(r.name))}</button>`).join('')}</div>
      </div>`).join('')}
      <p class="mono ads-kicker" style="margin-top:12px">Asistencia acumulada</p>
      <div class="ads-chips">${all.map((r) => { const a = asist(r); return `<span class="ads-pill ${a < 60 ? 'is-low' : ''}">${esc(short(r.name))} <b>${a}%</b></span>`; }).join('')}</div>
    </section>
  </div>

  <div class="ads-grid-2">
    <section class="card ads-pad">
      <div class="ads-sec-head"><h2>Asignaciones</h2></div>
      <form class="ads-inline-form is-row" data-ads-taskform>
        <input class="input" name="title" placeholder="Lectura o tema (ej. TG18 colecistitis)" required aria-label="Asignación">
        <select class="input" name="to" aria-label="Para"><option value="todos">Todo el grupo</option>${['R1', 'R2', 'R3', 'R4'].map((g) => `<option value="${g}">Solo ${g}</option>`).join('')}${all.map((r) => `<option value="${r.id}">${esc(r.name)}</option>`).join('')}</select>
        <input class="input" type="date" name="due" value="${isoPlus(5)}" required aria-label="Fecha límite">
        <button class="btn btn-glow btn-sm" type="submit">${icon('plus')} Asignar</button>
      </form>
      <ul class="ads-tasks">
        ${st.tasks.slice().reverse().map((t) => { const ts = targets(t); const n = ts.filter((r) => taskDone(t, r)).length; return `
        <li>
          <div><b>${esc(t.title)}</b><span class="muted">Para ${esc(t.to === 'todos' ? 'todo el grupo' : (byId(t.to)?.name || t.to))} · vence ${esc(fmtDay(t.due))}</span></div>
          <div class="ads-task-prog"><div class="ads-meter"><i style="width:${ts.length ? (n / ts.length) * 100 : 0}%"></i></div><span class="mono">${n}/${ts.length}</span></div>
          <button type="button" class="btn btn-sm btn-ghost" data-ads-deltask="${t.id}" aria-label="Quitar asignación">${icon('trash')}</button>
        </li>`; }).join('') || '<li class="muted">Aún no asignas nada.</li>'}
      </ul>
    </section>

    <section class="card ads-pad">
      <div class="ads-sec-head"><h2>Examen rápido</h2></div>
      <p class="muted ads-note">Preguntas del banco PUEM del tema elegido; los resultados de los residentes de demostración se simulan.</p>
      <form class="ads-inline-form is-row" data-ads-examform>
        <select class="input" name="tema" aria-label="Tema">${temaOpts}</select>
        <select class="input" name="n" aria-label="Preguntas"><option value="5">5 preguntas</option><option value="10" selected>10 preguntas</option><option value="20">20 preguntas</option></select>
        <button class="btn btn-glow btn-sm" type="submit">${icon('send')} Enviar al grupo</button>
      </form>
      ${st.exams.slice(-2).reverse().map((e) => `
      <div class="ads-exam">
        <p><b>${esc(e.tema)}</b> <span class="muted mono">${e.n} preguntas · ${esc(fmtDay(e.date))}</span></p>
        ${all.map((r) => { const v = r.simulacros ? r.precision : null; return `<div class="ads-exam-row"><span>${esc(short(r.name))}</span><div class="ads-meter ${v != null && v < 60 ? 'is-low' : ''}"><i style="width:${v ?? 0}%"></i></div><b class="mono">${v == null ? 'Sin presentar' : v + '%'}</b></div>`; }).join('')}
      </div>`).join('')}
    </section>
  </div>`;
}

/* ---------------- 4 · Organización del servicio ---------------- */

const ESQ = ['A', 'B', 'C', 'D'];
const DEMO_ROT = [['Cirugía General', 'HGR 72'], ['Urgencias quirúrgicas', 'HGR 72'], ['Coloproctología', 'HE CMN La Raza'], ['Cirugía oncológica', 'HO CMN Siglo XXI'], ['Trauma', 'UMAE Magdalena de las Salinas'], ['Endoscopia', 'HGR 72'], ['Cirugía General', 'UMAA 199 Tlalnepantla']];
const dayIdx = (iso) => Math.floor(new Date(iso + 'T12:00:00').getTime() / 86400000);

// Rol A–D rotando cada 4 días; si el residente real registró guardias, se usan las suyas
function onCall(all, iso) {
  const realGuards = store.state.hgr72Personal?.guardias || [];
  return all.filter((r, i) => {
    if (r.real && realGuards.length) return realGuards.some((g) => g.fecha === iso);
    return (dayIdx(iso) + i) % 4 === 0;
  });
}
function rotationOf(r, i) {
  if (r.real) {
    const t = todayISO();
    const rot = (store.state.hgr72Personal?.rotaciones || []).find((x) => x.inicio <= t && x.fin >= t);
    if (rot) return { servicio: rot.servicio, sede: rot.sede, fin: rot.fin };
  }
  const [servicio, sede] = DEMO_ROT[(i * 3 + GN[r.grade]) % DEMO_ROT.length];
  const d = new Date(); return { servicio, sede, fin: todayISO(new Date(d.getFullYear(), d.getMonth() + 1, 0)) };
}

export function servicioHTML(all) {
  const today = todayISO();
  const yest = isoPlus(-1);
  const hoy = onCall(all, today);
  const post = onCall(all, yest);
  const days = Array.from({ length: 7 }, (_, i) => isoPlus(i));
  return `
  <div class="ads-grid-3">
    <section class="card ads-pad ads-today">
      <p class="mono ads-kicker">De guardia hoy</p>
      <ul class="ads-people">${hoy.map((r) => `<li><span class="ads-avatar">${esc(short(r.name)[0])}</span>${esc(r.name)} <span class="ads-grade">${r.grade}</span></li>`).join('') || '<li class="muted">Nadie registrado.</li>'}</ul>
    </section>
    <section class="card ads-pad ads-today is-post">
      <p class="mono ads-kicker">Postguardia</p>
      <ul class="ads-people">${post.map((r) => `<li><span class="ads-avatar">${esc(short(r.name)[0])}</span>${esc(r.name)} <span class="ads-grade">${r.grade}</span></li>`).join('') || '<li class="muted">Nadie.</li>'}</ul>
      <p class="ads-warn">${icon('bolt')} No asignar sesión ni cirugía larga hoy.</p>
    </section>
    <section class="card ads-pad ads-today">
      <p class="mono ads-kicker">Disponibles en el servicio</p>
      <div class="big"><span>${all.length - hoy.length - post.length}<small>/${all.length}</small></span></div>
      <p class="muted">sin guardia ni postguardia</p>
    </section>
  </div>

  <section class="card ads-pad">
    <div class="ads-sec-head"><h2>Rol de guardias · próximos 7 días</h2><span class="mono muted">esquemas A–D</span></div>
    <div class="ads-table-wrap">
      <table class="ads-roster">
        <thead><tr>${days.map((d) => `<th class="${d === today ? 'is-today' : ''}">${esc(fmtDay(d))}</th>`).join('')}</tr></thead>
        <tbody><tr>${days.map((d) => `<td class="${d === today ? 'is-today' : ''}">${onCall(all, d).map((r) => `<span class="ads-roster-chip ${r.real ? 'is-real' : ''}">${esc(short(r.name))} <small>${r.grade}</small></span>`).join('')}</td>`).join('')}</tr></tbody>
      </table>
    </div>
  </section>

  <section class="card ads-pad">
    <div class="ads-sec-head"><h2>Rotaciones actuales</h2></div>
    <div class="ads-table-wrap">
      <table class="ads-table">
        <thead><tr><th>Residente</th><th>Grado</th><th>Servicio</th><th>Sede</th><th>Hasta</th></tr></thead>
        <tbody>${all.map((r, i) => { const ro = rotationOf(r, i); return `<tr class="is-static"><td class="ads-name"><span>${esc(r.name)}</span></td><td data-label="Grado"><span class="ads-grade">${r.grade}</span></td><td data-label="Servicio">${esc(ro.servicio)}</td><td data-label="Sede">${esc(ro.sede)}</td><td data-label="Hasta">${esc(fmtDay(ro.fin))}</td></tr>`; }).join('')}</tbody>
      </table>
    </div>
  </section>`;
}

/* ---------------- Mensajes ---------------- */

export function mensajesHTML(all) {
  const real = all.find((r) => r.real);
  return `
  <section class="card ads-pad ads-chat">
    <div class="ads-sec-head">
      <div><h2>Mensajes con ${esc(real?.name || 'el residente')}</h2><p class="muted ads-note" style="margin:4px 0 0">${esc(ADSCRITA.name)} · ${esc(ADSCRITA.role)}</p></div>
      <span class="ads-badge ${deliveryMode() === 'server' ? 'is-ok' : 'is-atencion'}" data-ads-mode>${deliveryMode() === 'server' ? 'En línea' : 'Solo este dispositivo'}</span>
    </div>
    <div class="msg-thread" data-msg-thread data-me="adscrito">${threadHTML('adscrito')}</div>
    <form class="msg-form" data-msg-form="adscrito">
      <textarea class="input" name="text" rows="2" placeholder="Escribe un mensaje para ${esc(real?.name || 'el residente')}…" required></textarea>
      <button class="btn btn-glow" type="submit">${icon('send')} Enviar</button>
    </form>
  </section>`;
}
