import { icon } from '../icons.js?v=20261121s';
import { store, todayISO, daysUntil } from '../store.js?v=20261121s';
import { esc, modal, toast, placeSeg, fmtDate } from '../ui.js';
import * as S from '../scroll.js';
import * as bitacora from './bitacora.js?v=20261121s';
import { PERFIL_MARIO as PERFIL_DUENO, ROTACIONES_MARIO as ROT_DUENO } from '../data/pendientes_whatsapp.js';
import { isOwner, topGrade } from '../perfil.js?v=20261121s';
// Las testers ven una sede neutra: nada del grupo de guardia ni de las rotaciones de Mario.
const PERFIL_MARIO = isOwner() ? PERFIL_DUENO : { grupoGuardia: '—', sede: 'HGR No. 72 IMSS', grado: `${topGrade()} Cirugía General` };
const ROTACIONES_MARIO = isOwner() ? ROT_DUENO : [];

export const section = 'hgr72';

const FORMATOS = [
  {
    id: 'preqx',
    title: 'Nota Preoperatoria · IMSS HGR 72',
    sub: 'Valoración prequirúrgica normativa en prosa continua',
    body: `NOTA PREOPERATORIA — CIRUGÍA GENERAL HGR 72 IMSS
Fecha y hora: [Fecha/Hora]. Paciente con diagnóstico preoperatorio de [Diagnóstico], programado para [Procedimiento proyectado] de carácter [Electivo / Urgencia]. Cuenta con protocolo preoperatorio completo, laboratorios con biometría hemática, tiempos de coagulación y química sanguínea dentro de parámetros seguros para el acto quirúrgico, riesgo quirúrgico ASA [I-V] y consentimiento válidamente informado firmado. Plan quirúrgico: bajo anestesia [General balanceada / Bloqueo neuroaxial], profilaxis antimicrobiana preincisional acorde a guía institucional y medidas de tromboprofilaxis. Se verifica marcado quirúrgico y disponibilidad de hemoderivados. Pronóstico ligado a evolución y hallazgos transoperatorios.`,
  },
  {
    id: 'postqx',
    title: 'Nota Postoperatoria · Visión Crítica de Calot / Strasberg',
    sub: 'Descripción técnica con hallazgos, sangrado y cuenta completa',
    body: `NOTA POSTOPERATORIA — CIRUGÍA GENERAL HGR 72 IMSS
Diagnóstico preoperatorio: [Diagnóstico Pre-Qx]. Diagnóstico postoperatorio: [Diagnóstico Post-Qx]. Cirugía realizada: [Procedimiento realizado]. Cirujano: [Nombre]. Primer ayudante: Mario Reyes (R2 CG). Hallazgos transoperatorios: [Describir hallazgos; en colecistectomía laparoscópica: disección del Triángulo Hepatocístico de Calot logrando los 3 criterios de la Visión Crítica de Seguridad de Strasberg: triángulo hepatocístico libre de tejido graso y fibroso, tercio inferior vesicular separado de la placa cística y visualización exclusiva de dos estructuras ingresando a la vesícula]. Complicaciones e incidentes: ninguno (Clavien-Dindo 0). Sangrado cuantificado: [XX] mL. Cuenta de gasas, compresas e instrumental reportada completa por enfermería quirúrgica. Paciente pasa a recuperación hemodinámicamente estable.`,
  },
  {
    id: 'alta',
    title: 'Nota de Egreso / Contrareferencia · HGR 72',
    sub: 'Resumen clínico, manejo ambulatorio y datos de alarma',
    body: `NOTA DE EGRESO HOSPITALARIO — CIRUGÍA GENERAL HGR 72 IMSS
Paciente que cursó su postoperatorio de [Procedimiento] con evolución clínica favorable, afebril, tolerando la vía oral adecuadamente, canalizando gases y con evacuaciones presentes. Heridas quirúrgicas limpias, bordes bien afrontados, sin datos de infección ni colecciones. Se decide alta hospitalaria por mejoría con analgésico horario, cuidados de herida quirúrgica con agua y jabón neutro, retiro de puntos en consulta externa en [7-10] días y cita abierta a Urgencias de este hospital en caso de fiebre ≥ 38 °C, dolor abdominal progresivo, ictericia, vómito persistente o salida de material purulento por la herida.`,
  },
];

let curMod = 'personal'; // 'personal' | 'bitacora' | 'formatos'
let verHechos = false;
const stamp = () => Date.now();
const markDeleted = (hp, id) => { hp.borrados = { ...(hp.borrados || {}), [id]: stamp() }; };
let calMonth = null; // 'YYYY-MM'
let calDay = null; // 'YYYY-MM-DD' seleccionado
let curRotYear = 'R2'; // 'R2' | 'R3' (sin R1)

const TIPOS = {
  examen: { label: 'Examen', color: '#ff3b4e' },
  clase: { label: 'Clase', color: '#f5a524' },
  guardia: { label: 'Guardia', color: 'var(--hgr72)' },
  rotacion: { label: 'Rotación', color: '#1fa5b8' },
  limite: { label: 'Fecha límite', color: '#a970ff' },
  pendiente: { label: 'Pendiente', color: 'rgba(140,140,150,.85)' },
};
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const MESES_C = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const pad = (n) => String(n).padStart(2, '0');
const fmtLargo = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' });
const cuando = (d) => (d === 0 ? 'Hoy' : d === 1 ? 'Mañana' : d > 1 ? `En ${d} días` : d === -1 ? 'Ayer' : `Hace ${-d} días`);

// Todo lo que va al calendario: fechas propias, pendientes con fecha y guardias registradas
function calItems(hp) {
  const out = (hp.calendario || []).map((c) => ({ ...c, origen: 'cal' }));
  for (const p of hp.pendientes || []) {
    if (p.vence && !p.done) out.push({ id: p.id, fecha: p.vence, titulo: p.texto, tipo: 'pendiente', origen: 'pend' });
  }
  for (const g of hp.guardias || []) {
    if (g.fecha) out.push({ id: g.id, fecha: g.fecha, titulo: `${g.esquema || 'Guardia'}${g.area ? ` · ${g.area}` : ''}`, tipo: 'guardia', origen: 'guardia' });
  }
  const orden = ['examen', 'clase', 'limite', 'guardia', 'rotacion', 'pendiente'];
  return out.sort((a, b) => a.fecha.localeCompare(b.fecha) || orden.indexOf(a.tipo) - orden.indexOf(b.tipo));
}

function rotInfo(r, hoy) {
  if (!r.inicio || !r.fin) return { estado: r.activa ? 'activa' : 'otra', periodo: r.periodo || '' };
  const estado = hoy < r.inicio ? 'proxima' : hoy > r.fin ? 'pasada' : 'activa';
  const [y, m] = r.inicio.split('-').map(Number);
  const [y2, m2] = r.fin.split('-').map(Number);
  const periodo = y === y2 && m === m2 ? `${MESES[m - 1]} ${y}` : `${fmtDate(r.inicio)} ${y} → ${fmtDate(r.fin)} ${y2}`;
  return { estado, periodo };
}

const isR1Rot = (r) => /^R1\b/i.test(String(r.grado || '').trim());
const rotYearOf = (r) => {
  const g = String(r.grado || '').toUpperCase().trim();
  if (g.startsWith('R3')) return 'R3';
  if (g.startsWith('R2')) return 'R2';
  return (r.inicio || '') >= '2027-03-01' ? 'R3' : 'R2';
};
const rotMesTag = (r) => {
  if (!r.inicio) return { mes: 'MES', anio: '' };
  const [y, m] = r.inicio.split('-').map(Number);
  return { mes: (MESES_C[m - 1] || '').toUpperCase(), anio: String(y) };
};
const rotPct = (r, hoy) => {
  if (!r.inicio || !r.fin) return 0;
  const a = new Date(r.inicio + 'T12:00:00').getTime();
  const b = new Date(r.fin + 'T12:00:00').getTime();
  const c = new Date(hoy + 'T12:00:00').getTime();
  if (b <= a) return 100;
  return Math.max(4, Math.min(100, Math.round(((c - a) / (b - a)) * 100)));
};

const fmtRangoFechas = (r) => {
  if (!r?.inicio || !r?.fin) return r?.periodo || '';
  const [y1, m1, d1] = r.inicio.split('-').map(Number);
  const [y2, m2, d2] = r.fin.split('-').map(Number);
  if (y1 === y2) return `${d1} ${MESES_C[m1 - 1]} – ${d2} ${MESES_C[m2 - 1]} ${y2}`;
  return `${d1} ${MESES_C[m1 - 1]} ${y1} – ${d2} ${MESES_C[m2 - 1]} ${y2}`;
};

function getRotacionesSeguras(hp) {
  const existing = Array.isArray(hp?.rotaciones) ? [...hp.rotaciones] : [];
  const borrados = hp?.borrados || {};
  for (const r of ROTACIONES_MARIO) {
    if (!existing.some((x) => x.id === r.id) && !borrados[r.id]) {
      existing.push({ ...r, updated: 0 });
    }
  }
  return existing
    .filter((r) => !isR1Rot(r))
    .sort((a, b) => (a.inicio || '0').localeCompare(b.inicio || '0'));
}

const QUARTER_DEFS = [
  { num: 'I', title: 'Trimestre I · Mar – May 2027', match: (ym) => ['2027-03', '2027-04', '2027-05'].includes(ym) },
  { num: 'II', title: 'Trimestre II · Jun – Ago 2027', match: (ym) => ['2027-06', '2027-07', '2027-08'].includes(ym) },
  { num: 'III', title: 'Trimestre III · Sep – Nov 2027', match: (ym) => ['2027-09', '2027-10', '2027-11'].includes(ym) },
  { num: 'IV', title: 'Trimestre IV · Dic 2027 – Feb 2028', match: (ym) => ['2027-12', '2028-01', '2028-02'].includes(ym) },
];

function renderHgrYearHeader(r2List, r3List, activeR2, abiertosCount) {
  const externaCount = r3List.filter((r) => !/HGR\s*72/i.test(r.sede || '')).length;
  const hgrCount = r3List.length - externaCount;
  return `
  <section class="hgr-year-hub" aria-label="Hospital HGR 72 agrupado por año">
    <button type="button" class="card hgr-ycard ${curRotYear === 'R2' ? 'is-on' : ''}" data-rot-year="R2">
      <div class="hgr-ycard-top">
        <span class="hgr-ycard-badge"><i class="dot-r2" aria-hidden="true"></i> R2 · AÑO ACTUAL</span>
        <span class="chip">${r2List.length} rotaciones · ${abiertosCount} pendientes</span>
      </div>
      <h3>R2 · Ciclo 2026 – 2027</h3>
      <p class="hgr-ycard-sub">${activeR2 ? `<strong>En curso:</strong> ${esc(activeR2.servicio)} · ${esc(activeR2.sede || '')}` : 'Rotaciones actuales, calendario y guardias'}</p>
      <div class="hgr-ycard-foot">
        <span class="mono muted">${activeR2 ? esc(fmtRangoFechas(activeR2)) : 'Nov 2026 – Feb 2027'}</span>
        <span class="hgr-ycard-cta">${curRotYear === 'R2' ? '● Viendo R2' : 'Ver R2 y agenda →'}</span>
      </div>
    </button>

    <button type="button" class="card hgr-ycard is-r3 ${curRotYear === 'R3' ? 'is-on' : ''}" data-rot-year="R3">
      <div class="hgr-ycard-top">
        <span class="hgr-ycard-badge is-r3"><i class="dot-r3" aria-hidden="true"></i> R3 · PRÓXIMO AÑO</span>
        <span class="chip chip-accent">${r3List.length} meses · Mar 2027 – Feb 2028</span>
      </div>
      <h3>R3 · Calendario Anual de Rotaciones</h3>
      <p class="hgr-ycard-sub"><strong>Plan ${r3List.length} meses:</strong> ${hgrCount} en sede HGR 72 · ${externaCount} externas/subespecialidad · 2 quincenas vacaciones</p>
      <div class="hgr-ycard-foot">
        <span class="mono muted">1 mar 2027 – 29 feb 2028</span>
        <span class="hgr-ycard-cta">${curRotYear === 'R3' ? '● Viendo R3' : 'Abrir calendario R3 →'}</span>
      </div>
    </button>
  </section>`;
}

function renderRotacionesPorAnio(hp, vigentes, r2List, r3List, activeR2, hoy) {
  const externaCount = r3List.filter((r) => !/HGR\s*72/i.test(r.sede || '')).length;
  const hgrCount = r3List.length - externaCount;

  const r2Body = r2List.length ? `
    ${activeR2 ? (() => {
      const { estado } = rotInfo(activeR2, hoy);
      const rango = fmtRangoFechas(activeR2);
      const leftDays = activeR2.fin ? daysUntil(activeR2.fin) : null;
      const pct = rotPct(activeR2, hoy);
      return `
      <div class="rot-active-banner">
        <div class="rot-active-head">
          <div>
            <span class="rot-live-pill"><i aria-hidden="true"></i> ${estado === 'activa' ? 'ROTACIÓN ACTUAL EN CURSO' : 'PRÓXIMA ROTACIÓN R2'}</span>
            <h4>${esc(activeR2.servicio)}</h4>
            <p class="mono muted">${esc(activeR2.sede || '')}${rango ? ` · ${esc(rango)}` : ''}</p>
          </div>
          ${leftDays !== null && estado === 'activa' ? `<div class="rot-days-left"><b>${Math.max(0, leftDays)}</b><small class="mono muted">${leftDays === 1 ? 'día restante' : 'días restantes'}</small></div>` : ''}
        </div>
        ${activeR2.notas ? `<p class="rot-active-note">${esc(activeR2.notas)}</p>` : ''}
        ${estado === 'activa' ? `<div class="rot-prog-track" aria-label="Avance del mes"><span style="width:${pct}%"></span></div>` : ''}
      </div>`;
    })() : ''}

    <div class="rot-timeline" role="list" aria-label="Cronograma de rotaciones R2 por fechas">
      ${r2List.map((r) => {
        const { estado } = rotInfo(r, hoy);
        const rango = fmtRangoFechas(r);
        const tag = rotMesTag(r);
        const externa = !/HGR\s*72/i.test(r.sede || '');
        const estadoLbl = estado === 'activa' ? 'En curso' : estado === 'proxima' ? 'Siguiente' : estado === 'pasada' ? 'Concluida' : 'Programada';
        return `
        <div class="rot-tl-row is-${estado} ${externa ? 'is-external' : ''}" role="listitem">
          <div class="rot-tl-date">
            <b>${esc(tag.mes)}</b>
            <small class="mono muted">${esc(tag.anio)}</small>
          </div>
          <span class="rot-tl-node" aria-hidden="true"></span>
          <div class="rot-tl-main">
            <div class="rot-tl-top">
              <strong>${esc(r.servicio)}</strong>
              <span class="rot-state-tag is-${estado}">${estadoLbl}</span>
              ${externa ? '<span class="rot-ext-tag">Rotación externa</span>' : ''}
            </div>
            <div class="rot-tl-sub">
              <span>${esc(r.sede || 'Sede por confirmar')}</span>
              ${rango ? `<span class="rot-month-dates mono">${esc(rango)}</span>` : ''}
            </div>
            ${r.notas ? `<p class="rot-tl-note muted">${esc(r.notas)}</p>` : ''}
          </div>
          <button type="button" class="icon-btn rot-del" data-del-rot="${esc(r.id)}" aria-label="Eliminar rotación">${icon('trash')}</button>
        </div>`;
      }).join('')}
    </div>` : '<p class="muted">Aún no hay rotaciones R2 registradas. Usa “+ Nueva rotación”.</p>';

  const assignedIds = new Set();
  const qGroups = QUARTER_DEFS.map((qd) => {
    const items = r3List.filter((r) => {
      const ym = String(r.inicio || '').slice(0, 7);
      const ok = qd.match(ym);
      if (ok) assignedIds.add(r.id);
      return ok;
    });
    return { ...qd, items };
  }).filter((q) => q.items.length);
  const extras = r3List.filter((r) => !assignedIds.has(r.id));
  if (extras.length) qGroups.push({ num: '+', title: 'Otras rotaciones R3 registradas', items: extras });

  const hitosR3 = calItems(hp).filter((x) => (x.fecha || '') >= '2027-03-01');

  const r3Body = r3List.length ? `
    <div class="rot-r3-summary">
      <div>
        <span class="mono" style="color:var(--crimson-ink)">CALENDARIO ANUAL R3 · MARZO 2027 – FEBRERO 2028</span>
        <p class="muted">Agrupado por trimestres y fechas exactas (${r3List.length} meses: ${hgrCount} en HGR 72 · ${externaCount} rotaciones externas / especialidad).</p>
      </div>
      <div class="rot-r3-legend mono muted">
        <span><i class="dot-ext"></i> Externa / Subespecialidad</span>
        <span><i class="dot-base"></i> Sede HGR 72</span>
      </div>
    </div>
    <div class="rot-quarters">
      ${qGroups.map((qg) => `
        <section class="rot-quarter">
          <div class="rot-quarter-head">
            <span class="rot-quarter-num mono">${qg.num}</span>
            <h4>${esc(qg.title)}</h4>
          </div>
          <div class="rot-r3-calendar" role="list" aria-label="${esc(qg.title)}">
            ${qg.items.map((r) => {
              const tag = rotMesTag(r);
              const rango = fmtRangoFechas(r);
              const externa = !/HGR\s*72/i.test(r.sede || '');
              const pendingSede = /confirmar/i.test(r.sede || '');
              const hasVac = /vacacion/i.test(r.notas || '');
              return `
              <div class="rot-month-row ${externa ? 'is-external' : 'is-base'}" role="listitem">
                <div class="rot-month-badge">
                  <b>${esc(tag.mes)}</b>
                  <span class="mono muted">${esc(tag.anio)}</span>
                </div>
                <div class="rot-month-body">
                  <div class="rot-month-title">
                    <strong>${esc(r.servicio)}</strong>
                    ${hasVac ? `<span class="rot-vac-chip">${esc(r.notas)}</span>` : ''}
                  </div>
                  <div class="rot-month-sede ${pendingSede ? 'is-pending' : ''}">
                    <span>${esc(r.sede || 'Por confirmar')}</span>
                    ${externa ? '<span class="rot-ext-mini mono">Externa</span>' : '<span class="mono muted">Sede base</span>'}
                  </div>
                  ${rango ? `<span class="rot-month-dates mono">${esc(rango)}</span>` : ''}
                  ${!hasVac && r.notas ? `<p class="rot-tl-note muted">${esc(r.notas)}</p>` : ''}
                </div>
                <button type="button" class="icon-btn rot-del" data-del-rot="${esc(r.id)}" aria-label="Eliminar rotación">${icon('trash')}</button>
              </div>`;
            }).join('')}
          </div>
        </section>`).join('')}
    </div>
    ${hitosR3.length ? `
    <div class="rot-r3-milestones">
      <span class="mono muted">HITOS DEL CALENDARIO EN R3</span>
      <div class="rot-milestones-list">
        ${hitosR3.map((it) => `<span class="chip"><strong>${fmtDate(it.fecha)}</strong> · ${esc(it.titulo)}</span>`).join('')}
      </div>
    </div>` : ''}` : '<p class="muted">Aún no hay rotaciones R3 registradas. Usa “+ Nueva rotación”.</p>';

  return `
  <article class="card rot-year-card" style="--c:var(--hgr72)">
    <div class="rot-year-head">
      <div>
        <span class="mono" style="color:var(--crimson-ink);font-size:.75rem">${curRotYear === 'R2' ? 'ROTACIONES R2 POR FECHAS · NOV 2026 – FEB 2027' : 'CALENDARIO R3 POR FECHAS · MAR 2027 – FEB 2028'}</span>
        <h3 style="margin:2px 0 0">${curRotYear === 'R2' ? 'Mis Rotaciones · R2 (Actual)' : 'Calendario de Rotaciones · R3 (Próximo)'}</h3>
      </div>
      <div class="rot-year-controls">
        ${curRotYear === 'R2'
          ? '<button type="button" class="btn btn-sm btn-ghost" data-rot-year="R3">Ver calendario R3 (Mar 2027 – Feb 2028) →</button>'
          : '<button type="button" class="btn btn-sm btn-ghost" data-rot-year="R2">← Volver a R2 (Año Actual)</button>'}
        <button type="button" class="btn btn-sm btn-glow" data-act="add-rotacion">${icon('plus')} Nueva rotación</button>
      </div>
    </div>
    <div class="rot-year-panel">
      ${curRotYear === 'R2' ? r2Body : r3Body}
    </div>
  </article>`;
}

function renderCalendario(hp) {
  const hoy = todayISO();
  if (!calMonth) calMonth = hoy.slice(0, 7);
  const items = calItems(hp);
  const porDia = {};
  for (const it of items) (porDia[it.fecha] ||= []).push(it);

  const [Y, M] = calMonth.split('-').map(Number);
  const first = new Date(Y, M - 1, 1);
  const offset = (first.getDay() + 6) % 7; // semana inicia en lunes
  const nDias = new Date(Y, M, 0).getDate();
  const celdas = [];
  for (let i = 0; i < offset; i++) celdas.push('<div class="cal-cell is-empty" aria-hidden="true"></div>');
  for (let d = 1; d <= nDias; d++) {
    const iso = `${Y}-${pad(M)}-${pad(d)}`;
    const its = porDia[iso] || [];
    const hayExamen = its.some((x) => x.tipo === 'examen');
    const cls = ['cal-cell', iso === hoy ? 'is-today' : '', iso === calDay ? 'is-sel' : '', hayExamen ? 'is-exam' : '', its.length ? 'has-items' : '', iso < hoy ? 'is-past' : ''].filter(Boolean).join(' ');
    const tipos = [...new Set(its.map((x) => x.tipo))];
    celdas.push(`<button type="button" class="${cls}" data-cal-day="${iso}" aria-label="${esc(fmtLargo(iso))}${its.length ? `: ${its.length} eventos` : ''}">
      <span class="cal-num">${d}</span>
      ${its.length ? `<span class="cal-dots">${tipos.map((t) => `<i style="background:${TIPOS[t]?.color || 'gray'}"></i>`).join('')}</span>` : ''}
      ${its.length ? `<span class="cal-peek">${esc(hayExamen ? 'Examen' : TIPOS[its[0].tipo]?.label || '')}</span>` : ''}
    </button>`);
  }

  const proximoExamen = items.find((x) => x.tipo === 'examen' && x.fecha >= hoy);
  const diaSel = calDay && porDia[calDay] ? calDay : null;
  const lista = diaSel ? porDia[diaSel] : items.filter((x) => x.fecha >= hoy).slice(0, 8);

  return `
    <article class="card cal-card" style="--c:var(--hgr72);padding:20px">
      <div class="cal-head">
        <div>
          <span class="mono" style="color:var(--hgr72);font-size:.75rem">CALENDARIO · EXÁMENES, CLASES Y FECHAS</span>
          <h3 style="margin:2px 0 0">Mi calendario</h3>
        </div>
        <button type="button" class="btn btn-sm btn-ghost" data-act="add-fecha">${icon('plus')} Agregar fecha</button>
      </div>

      ${proximoExamen ? `
      <div class="cal-next">
        <span class="cal-next-days"><b>${daysUntil(proximoExamen.fecha)}</b><small>${daysUntil(proximoExamen.fecha) === 1 ? 'día' : 'días'}</small></span>
        <span><span class="mono" style="font-size:.7rem;color:#ff3b4e">PRÓXIMO EXAMEN</span><br><strong>${esc(proximoExamen.titulo)}</strong><br><span class="muted" style="font-size:.85rem">${esc(fmtLargo(proximoExamen.fecha))}</span></span>
      </div>` : ''}

      <div class="cal-layout">
        <div class="cal-month">
          <div class="cal-nav">
            <button type="button" class="icon-btn" data-cal-nav="-1" aria-label="Mes anterior">‹</button>
            <strong>${MESES[M - 1]} ${Y}</strong>
            <button type="button" class="icon-btn" data-cal-nav="1" aria-label="Mes siguiente">›</button>
            ${calMonth !== hoy.slice(0, 7) ? '<button type="button" class="btn btn-sm btn-ghost" data-cal-nav="0">Hoy</button>' : ''}
          </div>
          <div class="cal-grid cal-dow">${['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d) => `<span>${d}</span>`).join('')}</div>
          <div class="cal-grid">${celdas.join('')}</div>
          <div class="cal-legend">${Object.entries(TIPOS).map(([, t]) => `<span><i style="background:${t.color}"></i>${t.label}</span>`).join('')}</div>
        </div>

        <div class="cal-list">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px">
            <span class="mono" style="font-size:.72rem;color:var(--c-muted)">${diaSel ? esc(fmtLargo(diaSel)).toUpperCase() : 'PRÓXIMAS FECHAS'}</span>
            ${diaSel ? '<button type="button" class="btn btn-sm btn-ghost" data-cal-day="">Ver próximas</button>' : ''}
          </div>
          ${lista.map((it) => {
            const d = daysUntil(it.fecha);
            const t = TIPOS[it.tipo] || TIPOS.pendiente;
            return `
            <div class="cal-item ${it.tipo === 'examen' ? 'is-exam' : ''}" style="--t:${t.color}">
              <span class="cal-item-date"><b>${Number(it.fecha.slice(8))}</b>${MESES_C[Number(it.fecha.slice(5, 7)) - 1]}</span>
              <span style="min-width:0;flex:1">
                <span class="cal-item-title">${esc(it.titulo)}</span>
                ${it.nota ? `<span class="hp-detail" style="display:block">${esc(it.nota)}</span>` : ''}
                <span class="hp-meta"><span class="cal-tag">${t.label}</span><span class="hp-src">${cuando(d)}</span></span>
              </span>
              ${it.origen === 'cal' ? `<button type="button" class="icon-btn" data-del-cal="${esc(it.id)}" aria-label="Eliminar fecha" style="width:26px;height:26px;flex:none">${icon('trash')}</button>` : ''}
            </div>`;
          }).join('') || `<p class="muted" style="margin:6px 0">${diaSel ? 'Nada registrado ese día.' : 'Sin fechas próximas.'}</p>`}
        </div>
      </div>
    </article>`;
}

function renderPersonal() {
  const hp = store.state.hgr72Personal || { rotaciones: [], guardias: [], pendientes: [] };
  const vigentes = getRotacionesSeguras(hp);
  const r2List = vigentes.filter((r) => rotYearOf(r) === 'R2');
  const r3List = vigentes.filter((r) => rotYearOf(r) === 'R3');
  const guardias = hp.guardias || [];
  const pendientes = hp.pendientes || [];
  const byDue = (x, y) => (x.vence || '9999').localeCompare(y.vence || '9999') || (x.hora || '').localeCompare(y.hora || '');
  const abiertos = pendientes.filter((p) => !p.done).sort(byDue);
  const hechos = pendientes.filter((p) => p.done).sort(byDue);
  const lista = verHechos ? [...abiertos, ...hechos] : abiertos;
  const hoy = todayISO();
  const activeR2 = r2List.find((r) => rotInfo(r, hoy).estado === 'activa') || r2List.find((r) => rotInfo(r, hoy).estado === 'proxima');

  const r2ExtraBlocks = `
    ${renderCalendario(hp)}

    <!-- MIS PENDIENTES (ordenados por fecha) -->
    <article class="card" style="--c:var(--hgr72);padding:20px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px">
        <div>
          <span class="mono" style="color:var(--hgr72);font-size:.75rem">PENDIENTES Y COSAS POR RECORDAR</span>
          <h3 style="margin:2px 0 0">${abiertos.length} pendientes${hechos.length ? ` · ${hechos.length} hechos` : ''}</h3>
        </div>
        ${hechos.length ? `<button type="button" class="btn btn-sm btn-ghost" data-act="toggle-hechos">${verHechos ? 'Ocultar hechos' : 'Ver hechos'}</button>` : ''}
      </div>

      <form class="hgr-todo-form" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px" autocomplete="off">
        <input class="input" name="texto" placeholder="Añadir pendiente (guardia, trámite, clase, entrega…)" required style="flex:1 1 220px;min-width:0">
        <input class="input" name="vence" type="date" aria-label="Fecha límite" style="width:150px">
        <select class="input" name="categoria" style="width:130px" aria-label="Categoría">
          <option value="Hospital">Hospital</option>
          <option value="Guardia">Guardia</option>
          <option value="Académico">Académico</option>
          <option value="Examen">Examen</option>
          <option value="Trámite">Trámite</option>
          <option value="Personal">Personal</option>
        </select>
        <select class="input" name="prioridad" style="width:110px" aria-label="Prioridad">
          <option value="alta">Alta</option>
          <option value="media" selected>Media</option>
          <option value="baja">Baja</option>
        </select>
        <button class="btn btn-sm btn-glow" type="submit">${icon('plus')} Agregar</button>
      </form>

      <div style="display:flex;flex-direction:column;gap:8px">
        ${lista.map((p) => {
          const d = p.vence ? daysUntil(p.vence) : null;
          const dueTxt = d === null ? 'Sin fecha' : d === 0 ? `Hoy${p.hora ? ` · ${p.hora}` : ''}` : d === 1 ? `Mañana${p.hora ? ` · ${p.hora}` : ''}` : d > 1 ? `${fmtDate(p.vence)} · en ${d} días` : `Venció ${fmtDate(p.vence)}`;
          const dueCls = d === null ? '' : d < 0 && !p.done ? 'is-late' : d <= 2 ? 'is-soon' : '';
          const linkHtml = p.link ? (p.link.startsWith('#') ? `<a class="hp-src" href="${esc(p.link)}">Abrir →</a>` : `<a class="hp-src" href="${esc(p.link)}" target="_blank" rel="noopener">Abrir enlace ↗</a>`) : '';
          return `
          <div class="glass" style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;padding:10px 14px;border-radius:12px;opacity:${p.done ? 0.55 : 1};border-left:3px solid ${p.prioridad === 'alta' ? '#ff3b4e' : p.prioridad === 'baja' ? 'rgba(127,127,127,.5)' : '#f5c84b'}">
            <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;flex:1;min-width:0">
              <input type="checkbox" data-hgr-todo-toggle="${esc(p.id)}" ${p.done ? 'checked' : ''} style="width:17px;height:17px;margin-top:2px;flex:none;accent-color:var(--hgr72)">
              <span style="min-width:0">
                <span style="text-decoration:${p.done ? 'line-through' : 'none'};font-size:.95rem;font-weight:600">${esc(p.texto)}</span>
                ${p.detalle ? `<span class="hp-detail" style="display:block">${esc(p.detalle)}</span>` : ''}
                <span class="hp-meta">
                  <span class="hp-due ${dueCls}">${esc(dueTxt)}</span>
                  <span class="chip" style="font-size:.7rem">${esc(p.categoria || 'Hospital')}</span>
                  ${p.fuente ? `<span class="hp-src">${esc(p.fuente)}</span>` : ''}
                  ${linkHtml}
                </span>
              </span>
            </label>
            <button type="button" class="icon-btn" data-hgr-todo-del="${esc(p.id)}" aria-label="Eliminar pendiente" style="width:26px;height:26px;flex:none">${icon('trash')}</button>
          </div>`;
        }).join('') || '<p class="muted">Sin pendientes por ahora.</p>'}
      </div>
    </article>

    <!-- MIS GUARDIAS -->
    <article class="card" style="--c:var(--hgr72);padding:20px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <div>
          <span class="mono" style="color:var(--hgr72);font-size:.75rem">ROL DE GUARDIAS · GRUPO ${esc(PERFIL_MARIO.grupoGuardia)}</span>
          <h3 style="margin:2px 0 0">Mis Guardias</h3>
        </div>
        <button type="button" class="btn btn-sm btn-ghost" data-act="add-guardia">${icon('plus')} Registrar guardia</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px">
        ${guardias.map((g) => {
          const d = daysUntil(g.fecha);
          return `
          <div class="glass" style="padding:14px 16px;border-radius:12px;border-left:3px solid ${d >= 0 ? 'var(--hgr72)' : 'rgba(255,255,255,.2)'}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px">
              <div>
                <strong>${esc(g.esquema)} · ${fmtDate(g.fecha)}</strong>
                <div class="mono muted" style="font-size:.74rem">${esc(g.area)}</div>
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="chip" style="font-size:.7rem">${d === 0 ? '¡Hoy!' : d > 0 ? `En ${d} días` : `Hace ${Math.abs(d)}d`}</span>
                <button type="button" class="icon-btn" data-del-guardia="${esc(g.id)}" style="width:26px;height:26px">${icon('trash')}</button>
              </div>
            </div>
            ${g.companeros ? `<p style="margin:0 0 4px;font-size:.84rem"><strong>Equipo:</strong> ${esc(g.companeros)}</p>` : ''}
            ${g.pendientesGuardia ? `<p class="muted" style="margin:0;font-size:.84rem"><strong>Notas / Pendientes:</strong> ${esc(g.pendientesGuardia)}</p>` : ''}
          </div>`;
        }).join('') || '<p class="muted">Aún no registras guardias. Usa “Registrar guardia”.</p>'}
      </div>
    </article>`;

  return `
  <div style="display:flex;flex-direction:column;gap:22px;margin-top:18px">
    ${renderHgrYearHeader(r2List, r3List, activeR2, abiertos.length)}
    ${renderRotacionesPorAnio(hp, vigentes, r2List, r3List, activeR2, hoy)}
    ${curRotYear === 'R2' ? r2ExtraBlocks : ''}
  </div>`;
}

function renderFormatos() {
  return `
    <div class="formatos-grid" style="display:grid;gap:18px;margin-top:18px">
      ${FORMATOS.map((f) => `
        <article class="card" style="--c:var(--hgr72)">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:12px">
            <div>
              <p class="mono">${esc(f.sub)}</p>
              <h3>${esc(f.title)}</h3>
            </div>
            <button class="btn btn-sm btn-glow" data-copy-fmt="${esc(f.id)}">${icon('copy')} Copiar formato</button>
          </div>
          <pre class="hgr-pre" id="fmt-${esc(f.id)}">${esc(f.body)}</pre>
        </article>`).join('')}
    </div>`;
}

export function render(params = {}) {
  if (params?.mod) curMod = params.mod;
  const MODS = [
    { k: 'personal', label: 'Por año · Rotaciones y agenda', ic: 'hospital' },
    { k: 'bitacora', label: 'Bitácora Qx', ic: 'scalpel' },
    { k: 'formatos', label: 'Formatos IMSS', ic: 'clipboard' },
  ];

  let innerHtml = '';
  if (curMod === 'personal') innerHtml = renderPersonal();
  else if (curMod === 'bitacora') innerHtml = bitacora.render(params);
  else innerHtml = renderFormatos();

  return `
<div class="hgr72-wrap">
  <div class="hgr-banner glass">
    <div class="hgr-banner-left">
      <span class="hgr-badge">${icon('hospital')} MODO GUARDIA · HGR 72 IMSS · APARTADO HOSPITALARIO</span>
      <span class="mono muted">Calendario de exámenes y fechas, pendientes en orden, rotaciones, guardias, bitácora quirúrgica y formatos de notas.</span>
    </div>
    <div class="hgr-banner-right">
      <a class="btn-metal btn-sm hgr-back-temario" href="#/resumenes">← Volver a Resúmenes</a>
      <div class="seg" data-hgr-seg role="tablist" aria-label="Submódulos HGR 72">
      <span class="seg-ind" aria-hidden="true"></span>
      ${MODS.map((m) => `<button class="${curMod === m.k ? 'on' : ''}" data-hgr-mod="${m.k}" role="tab">${icon(m.ic)} ${m.label}</button>`).join('')}
    </div>
  </div>
  <div id="hgr-subview">${innerHtml}</div>
</div>`;
}

export function mount(root, rerender, params) {
  const seg = root.querySelector('[data-hgr-seg]');
  placeSeg(seg);

  seg.addEventListener('click', (e) => {
    const b = e.target.closest('[data-hgr-mod]');
    if (!b || b.dataset.hgrMod === curMod) return;
    curMod = b.dataset.hgrMod;
    rerender({ keepScroll: true });
  });

  const sub = root.querySelector('#hgr-subview');
  if (curMod === 'bitacora') bitacora.mount(sub, rerender, params);

  const todoForm = root.querySelector('.hgr-todo-form');
  if (todoForm) {
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const texto = e.target.texto.value.trim();
      if (!texto) return;
      const hp = store.state.hgr72Personal;
      hp.pendientes.unshift({
        id: 'hp-' + Math.random().toString(36).slice(2, 8),
        texto,
        categoria: e.target.categoria.value,
        prioridad: e.target.prioridad.value,
        vence: e.target.vence.value || '',
        done: false,
        fecha: todayISO(),
        updated: stamp(),
      });
      store.saveHgr72Personal({ pendientes: hp.pendientes });
      e.target.reset();
      toast('Pendiente personal HGR 72 agregado');
      rerender({ keepScroll: true });
    });
  }

  root.addEventListener('change', (e) => {
    const cb = e.target.closest('[data-hgr-todo-toggle]');
    if (cb) {
      const hp = store.state.hgr72Personal;
      const item = hp.pendientes.find((p) => p.id === cb.dataset.hgrTodoToggle);
      if (item) {
        item.done = cb.checked;
        item.updated = stamp();
        store.saveHgr72Personal({ pendientes: hp.pendientes });
        rerender({ keepScroll: true });
      }
    }
  });

  root.addEventListener('click', (e) => {
    const delTodo = e.target.closest('[data-hgr-todo-del]');
    if (delTodo) {
      const hp = store.state.hgr72Personal;
      markDeleted(hp, delTodo.dataset.hgrTodoDel);
      hp.pendientes = hp.pendientes.filter((p) => p.id !== delTodo.dataset.hgrTodoDel);
      store.saveHgr72Personal({ pendientes: hp.pendientes, borrados: hp.borrados });
      toast('Pendiente eliminado');
      rerender({ keepScroll: true });
      return;
    }

    const delRot = e.target.closest('[data-del-rot]');
    if (delRot) {
      const hp = store.state.hgr72Personal;
      markDeleted(hp, delRot.dataset.delRot);
      hp.rotaciones = hp.rotaciones.filter((r) => r.id !== delRot.dataset.delRot);
      store.saveHgr72Personal({ rotaciones: hp.rotaciones, borrados: hp.borrados });
      toast('Rotación eliminada');
      rerender({ keepScroll: true });
      return;
    }

    const navBtn = e.target.closest('[data-cal-nav]');
    if (navBtn) {
      const step = Number(navBtn.dataset.calNav);
      if (step === 0) { calMonth = todayISO().slice(0, 7); calDay = null; } else {
        const [y, m] = calMonth.split('-').map(Number);
        const d = new Date(y, m - 1 + step, 1);
        calMonth = `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
      }
      rerender({ keepScroll: true });
      return;
    }

    const dayBtn = e.target.closest('[data-cal-day]');
    if (dayBtn) {
      const iso = dayBtn.dataset.calDay;
      calDay = !iso || iso === calDay ? null : iso;
      rerender({ keepScroll: true });
      return;
    }

    const delCal = e.target.closest('[data-del-cal]');
    if (delCal) {
      const hp = store.state.hgr72Personal;
      markDeleted(hp, delCal.dataset.delCal);
      hp.calendario = (hp.calendario || []).filter((c) => c.id !== delCal.dataset.delCal);
      store.saveHgr72Personal({ calendario: hp.calendario, borrados: hp.borrados });
      toast('Fecha eliminada del calendario');
      rerender({ keepScroll: true });
      return;
    }

    const delG = e.target.closest('[data-del-guardia]');
    if (delG) {
      const hp = store.state.hgr72Personal;
      markDeleted(hp, delG.dataset.delGuardia);
      hp.guardias = hp.guardias.filter((g) => g.id !== delG.dataset.delGuardia);
      store.saveHgr72Personal({ guardias: hp.guardias, borrados: hp.borrados });
      toast('Guardia eliminada');
      rerender({ keepScroll: true });
      return;
    }

    const copyBtn = e.target.closest('[data-copy-fmt]');
    if (copyBtn) {
      const f = FORMATOS.find((x) => x.id === copyBtn.dataset.copyFmt);
      if (f && navigator.clipboard) {
        navigator.clipboard.writeText(f.body);
        toast('Formato IMSS copiado al portapapeles');
      }
      return;
    }

    const rotTab = e.target.closest('[data-rot-year]');
    if (rotTab) {
      curRotYear = rotTab.dataset.rotYear === 'R3' ? 'R3' : 'R2';
      rerender({ keepScroll: true });
      return;
    }

    const actBtn = e.target.closest('[data-act]');
    if (!actBtn) return;
    const act = actBtn.dataset.act;
    if (act === 'toggle-hechos') { verHechos = !verHechos; rerender({ keepScroll: true }); return; }
    if (act === 'add-fecha') {
      modal('Agregar al calendario', `
        <label class="field">Fecha<input class="input" name="fecha" type="date" value="${calDay || todayISO()}" required></label>
        <label class="field">¿Qué es?<input class="input" name="titulo" placeholder="Ej. Examen departamental, entrega de tesis…" required></label>
        <label class="field">Tipo<select class="input" name="tipo">
          <option value="examen">Examen</option>
          <option value="clase">Clase</option>
          <option value="guardia">Guardia</option>
          <option value="limite">Fecha límite</option>
          <option value="rotacion">Rotación</option>
        </select></label>
        <label class="field">Nota (opcional)<input class="input" name="nota" placeholder="Hora, sede, qué llevar…"></label>`,
      (fd) => {
        const hp = store.state.hgr72Personal;
        if (!Array.isArray(hp.calendario)) hp.calendario = [];
        const fecha = fd.get('fecha');
        hp.calendario.push({
          id: 'c-' + Math.random().toString(36).slice(2, 8),
          fecha,
          titulo: String(fd.get('titulo') || '').trim(),
          tipo: fd.get('tipo'),
          nota: String(fd.get('nota') || '').trim(),
          updated: stamp(),
        });
        store.saveHgr72Personal({ calendario: hp.calendario });
        calMonth = fecha.slice(0, 7);
        calDay = fecha;
        toast('Fecha agregada al calendario');
        rerender({ keepScroll: true });
      });
      return;
    }
    if (act === 'add-rotacion') {
      modal('Agregar Rotación Personal', `
        <label class="field">Año de residencia<select class="input" name="grado">
          <option value="R2" ${curRotYear === 'R2' ? 'selected' : ''}>R2 (Actual)</option>
          <option value="R3" ${curRotYear === 'R3' ? 'selected' : ''}>R3 (Próximo)</option>
        </select></label>
        <label class="field">Servicio / Rotación<input class="input" name="servicio" placeholder="Ej. Cirugía Oncológica, Endoscopia, UMAE…" required></label>
        <label class="field">Hospital / Sede<input class="input" name="sede" value="HGR 72 IMSS" required></label>
        <label class="field">Inicio<input class="input" name="inicio" type="date" required></label>
        <label class="field">Fin<input class="input" name="fin" type="date" required></label>
        <label class="field">Objetivos y cosas por recordar<textarea class="input" name="notas" rows="3" placeholder="Adscritos, horarios, entregas…"></textarea></label>`,
      (fd) => {
        const hp = store.state.hgr72Personal;
        const grado = String(fd.get('grado') || curRotYear);
        hp.rotaciones.unshift({
          id: 'rot-' + Math.random().toString(36).slice(2, 8),
          grado,
          servicio: fd.get('servicio'),
          sede: fd.get('sede'),
          inicio: fd.get('inicio'),
          fin: fd.get('fin'),
          objetivos: '',
          notas: fd.get('notas'),
          updated: stamp(),
        });
        store.saveHgr72Personal({ rotaciones: hp.rotaciones });
        curRotYear = grado === 'R3' ? 'R3' : 'R2';
        toast('Rotación agregada');
        rerender({ keepScroll: true });
      });
    } else if (act === 'add-guardia') {
      modal('Registrar Guardia', `
        <label class="field">Fecha de la guardia<input class="input" name="fecha" type="date" value="${todayISO()}" required></label>
        <label class="field">Esquema / Rol<input class="input" name="esquema" placeholder="Ej. Guardia C" required></label>
        <label class="field">Área asignada<input class="input" name="area" placeholder="Ej. Urgencias / Piso oriente" required></label>
        <label class="field">Notas o pendientes de la guardia<textarea class="input" name="notas" rows="3" placeholder="Pacientes graves, cirugías pendientes, pendientes de entrega…"></textarea></label>`,
      (fd) => {
        const hp = store.state.hgr72Personal;
        hp.guardias.unshift({
          id: 'g-' + Math.random().toString(36).slice(2, 8),
          fecha: fd.get('fecha'),
          esquema: fd.get('esquema'),
          area: fd.get('area'),
          companeros: 'Equipo de Guardia',
          pendientesGuardia: fd.get('notas'),
          estado: 'proxima',
          updated: stamp(),
        });
        store.saveHgr72Personal({ guardias: hp.guardias });
        toast('Guardia registrada');
        rerender({ keepScroll: true });
      });
    }
  });
}
