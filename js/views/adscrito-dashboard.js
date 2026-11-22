/* ==========================================================================
   Black Ops · Tablero gráfico del examen R2 (panel de la Dra. Hernández)
   · Indicadores: promedio global, avance del grupo, entregados y reloj.
   · Pregunta en vivo: matriz residente × pregunta (✓/✗, dónde va cada uno, salidas).
   · Respuestas por pregunta: qué inciso eligió el grupo y % de aciertos.
   · Ranking con podio.
   · Vigilancia: línea de tiempo de salidas/interrupciones y salidas por pregunta.
   Todo es HTML/SVG plano; los detalles salen al pasar el dedo/ratón (title).
   ========================================================================== */

import { esc } from '../ui.js';
import { examOrderFor } from '../fx/exam-lockdown.js?v=20261122l';

const clip = (s, n = 70) => { const x = String(s || '').replace(/\s+/g, ' ').trim(); return x.length > n ? `${x.slice(0, n - 1)}…` : x; };
const STATUS = (pct) => (pct >= 80 ? 'is-good' : pct >= 60 ? 'is-warn' : 'is-bad');
const STATUS_TXT = (pct) => (pct >= 80 ? 'Bien' : pct >= 60 ? 'Regular' : 'Bajo');
const fmtS = (s) => (s < 10 ? `${Math.round(s * 10) / 10} s` : s < 90 ? `${Math.round(s)} s` : `${Math.floor(s / 60)} min ${Math.round(s % 60)} s`);
const fmtClock = (ms) => {
  const t = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
};

function donut(pct, { label, sub, status = STATUS(pct), size = 112 }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const v = Math.max(0, Math.min(100, pct));
  return `
    <figure class="bo-donut ${status}" title="${esc(label)}: ${v}%">
      <svg viewBox="0 0 112 112" width="${size}" height="${size}" aria-hidden="true">
        <circle cx="56" cy="56" r="${r}" class="bo-donut-track" />
        <circle cx="56" cy="56" r="${r}" class="bo-donut-arc" stroke-dasharray="${(c * v) / 100} ${c}" transform="rotate(-90 56 56)" />
      </svg>
      <div class="bo-donut-val"><b>${v}<small>%</small></b></div>
      <figcaption><span class="mono">${esc(label)}</span>${sub ? `<small>${sub}</small>` : ''}</figcaption>
    </figure>`;
}

/**
 * Construye el modelo del tablero.
 * @param rows   filas de residentes (buildRows de adscrito.js)
 * @param exam   examen actual
 * @param results respuesta de la acción 'results' ({content, picks}) o null
 */
export function buildDashboard(rows, exam, results) {
  const content = exam.source === 'custom' ? results?.content || null : null;
  const N = content ? content.questions.length : Math.max(1, Number(exam.questionCount) || 15);
  const picksAll = results?.picks || {};
  const joined = rows.filter((r) => r.hasJoined && (exam.active || r.state === 'entregado' || r.answered > 0 || r.events.length));

  const people = joined.map((r) => {
    const picks = content ? picksAll[r.id] || [] : [];
    const live = content
      ? content.questions.reduce((a, q, i) => a + (picks[i] === q.answer ? 1 : 0), 0)
      : r.correct;
    const answered = content ? picks.filter((v) => v != null).length : r.answered;
    // ¿En qué pregunta (original) va? En el examen cargado se reconstruye su orden barajado.
    let currentQ = null;
    const badBrowser = Boolean(r.browser && !r.browser.allowed);
    if (exam.active && !badBrowser && r.state !== 'entregado' && r.state !== 'sin_entrar') {
      const d = Math.max(0, Math.min(N - 1, Number(r.qIndex) || 0));
      currentQ = content ? examOrderFor(exam.sessionId, r.id, N)[d] : d;
    }
    const exits = r.events.filter((e) => e.k === 'salida' || e.k === 'recarga');
    const ints = r.events.filter((e) => e.k === 'interrupcion');
    const submitted = r.state === 'entregado';
    // Entregado: calificación final. En curso: % de aciertos sobre lo que lleva contestado.
    const pct = submitted && r.scorePct != null ? r.scorePct : answered ? Math.round((live / answered) * 100) : null;
    const durMs = submitted && r.submittedAt && exam.startedAt ? r.submittedAt - exam.startedAt : null;
    return { r, picks, live, answered, currentQ, exits, ints, submitted, pct, durMs, badBrowser };
  });

  // Respuestas por pregunta (solo con examen cargado)
  const perQ = content
    ? content.questions.map((q, i) => {
        const counts = q.options.map(() => 0);
        let n = 0;
        people.forEach((p) => {
          const v = p.picks[i];
          if (v != null && v >= 0 && v < counts.length) { counts[v] += 1; n += 1; }
        });
        const ok = counts[q.answer] || 0;
        const wrong = counts.map((c, j) => (j === q.answer ? -1 : c));
        const topWrong = Math.max(...wrong);
        return { i, q, counts, n, ok, pct: n ? Math.round((ok / n) * 100) : null, distractor: topWrong > 0 ? wrong.indexOf(topWrong) : -1 };
      })
    : [];

  // Salidas por pregunta (número original en el examen cargado; posición en el banco)
  const exitsByQ = Array.from({ length: N }, () => ({ salida: 0, interrupcion: 0 }));
  people.forEach((p) => p.r.events.forEach((e) => {
    const idx = Math.max(1, Math.min(N, Number(e.q) || 1)) - 1;
    if (e.k === 'salida' || e.k === 'recarga') exitsByQ[idx].salida += 1;
    else if (e.k === 'interrupcion') exitsByQ[idx].interrupcion += 1;
  }));

  const scored = people.filter((p) => p.pct != null);
  const avg = scored.length ? Math.round(scored.reduce((a, p) => a + p.pct, 0) / scored.length) : null;
  const totalAnswered = people.reduce((a, p) => a + p.answered, 0);
  const progress = people.length ? Math.round((totalAnswered / (people.length * N)) * 100) : 0;

  return { content, N, people, perQ, exitsByQ, avg, progress };
}

function statsRowHTML(m, exam, now) {
  const submitted = m.people.filter((p) => p.submitted).length;
  const endTs = exam.startedAt ? exam.startedAt + (Number(exam.durationMin) || 20) * 60000 : 0;
  const clock = exam.active && endTs ? fmtClock(endTs - now) : exam.ended ? 'Cerrado' : '—';
  const cheaters = m.people.filter((p) => p.exits.length).length;
  return `
    <div class="bo-dash-stats">
      ${donut(m.avg ?? 0, { label: 'Promedio global', sub: m.avg == null ? 'aún sin respuestas' : `${m.people.filter((p) => p.pct != null).length} residentes · ${STATUS_TXT(m.avg)}${m.people.some((p) => p.pct != null && !p.submitted) ? ' · en curso' : ''}`, status: m.avg == null ? 'is-none' : STATUS(m.avg) })}
      ${donut(m.progress, { label: 'Avance del grupo', sub: `${m.people.reduce((a, p) => a + p.answered, 0)} de ${m.people.length * m.N} respuestas`, status: 'is-info' })}
      <div class="bo-dash-tile">
        <span class="mono">ENTREGADOS</span>
        <b>${submitted}<small>/${m.people.length || 0}</small></b>
        <div class="bo-dash-mini"><i style="width:${m.people.length ? (submitted / m.people.length) * 100 : 0}%"></i></div>
      </div>
      <div class="bo-dash-tile ${exam.active && endTs - now < 5 * 60000 ? 'is-hot' : ''}">
        <span class="mono">TIEMPO RESTANTE</span>
        <b data-bo-clock="${endTs}">${clock}</b>
        <small class="muted">${exam.durationMin || 20} min en total</small>
      </div>
      <div class="bo-dash-tile ${cheaters ? 'is-alert' : ''}">
        <span class="mono">CON SALIDAS</span>
        <b>${cheaters}<small>/${m.people.length || 0}</small></b>
        <small class="muted">${m.people.reduce((a, p) => a + p.exits.length, 0)} salidas · ${m.people.reduce((a, p) => a + p.ints.length, 0)} interrupciones</small>
      </div>
    </div>`;
}

function liveMatrixHTML(m, exam) {
  if (!m.people.length) return '<p class="muted mono bo-dash-empty">Cuando los R2 entren al examen aparecerán aquí, pregunta por pregunta.</p>';
  const cols = Array.from({ length: m.N }, (_, i) => i);
  const head = cols.map((i) => {
    const pq = m.perQ[i];
    return `<th scope="col" title="${pq ? esc(`P${i + 1}: ${pq.q.stem.slice(0, 120)}`) : `Posición ${i + 1}`}">${i + 1}</th>`;
  }).join('');
  const body = m.people.map((p) => {
    const exitQ = new Map();
    p.r.events.forEach((e) => {
      if (e.k === 'salida' || e.k === 'recarga' || e.k === 'interrupcion') {
        const k = (Number(e.q) || 1) - 1;
        exitQ.set(k, [...(exitQ.get(k) || []), e]);
      }
    });
    const cells = cols.map((i) => {
      let cls = 'is-empty';
      let txt = '';
      let tip = `${p.r.name} · P${i + 1}`;
      if (m.content) {
        const v = p.picks[i];
        if (v != null) {
          const ok = v === m.content.questions[i].answer;
          cls = ok ? 'is-ok' : 'is-bad';
          const qq = m.content.questions[i];
          txt = ok ? '✓' : '✗';
          tip += ` · eligió «${clip(qq.options[v])}» ${ok ? '✓ correcta' : `✗ incorrecta (correcta: «${clip(qq.options[qq.answer])}»)`}`;
        } else tip += ' · sin contestar';
      } else if (i < p.answered) {
        cls = 'is-done';
        tip += ' · contestada';
      }
      const here = p.currentQ === i;
      if (here) tip += ' · ESTÁ AQUÍ AHORA';
      const ev = exitQ.get(i);
      if (ev) tip += ` · ${ev.map((e) => `${e.k === 'interrupcion' ? 'interrupción' : e.k === 'recarga' ? 'recargó' : 'salió'} ${fmtS(e.s)}`).join(', ')}`;
      return `<td class="${cls}${here ? ' is-here' : ''}" title="${esc(tip)}">${txt}${ev ? `<i class="bo-cell-flag ${ev.some((e) => e.k !== 'interrupcion') ? 'is-exit' : 'is-int'}"></i>` : ''}</td>`;
    }).join('');
    const state = p.submitted ? '✅' : p.badBrowser ? '⛔' : p.r.locked ? '🔒' : exam.active ? '✍️' : '·';
    return `<tr>
      <th scope="row"><span class="bo-mx-state">${state}</span>${esc(p.r.name)}</th>
      ${cells}
      <td class="bo-mx-score ${p.pct == null ? '' : STATUS(p.pct)}">${p.pct == null ? '—' : `${p.pct}%`}</td>
    </tr>`;
  }).join('');
  const foot = m.content ? `<tr class="bo-mx-foot"><th scope="row">% del grupo</th>${m.perQ.map((q) => `<td class="${q.pct == null ? '' : STATUS(q.pct)}">${q.pct == null ? '' : q.pct}</td>`).join('')}<td></td></tr>` : '';
  return `
    <div class="bo-mx-wrap">
      <table class="bo-mx">
        <thead><tr><th scope="col">Residente</th>${head}<th scope="col">Calif.</th></tr></thead>
        <tbody>${body}</tbody>
        <tfoot>${foot}</tfoot>
      </table>
    </div>
    <div class="bo-legend mono">
      ${m.content ? '<span><i class="sw is-ok"></i>Correcta</span><span><i class="sw is-bad"></i>Incorrecta</span>' : '<span><i class="sw is-done"></i>Contestada</span>'}
      <span><i class="sw is-empty"></i>Sin contestar</span>
      <span><i class="sw is-here"></i>Está aquí ahora</span>
      <span><i class="sw-dot is-exit"></i>Salió en esa pregunta</span>
      <span><i class="sw-dot is-int"></i>Interrupción</span>
    </div>
    ${m.content ? '' : '<p class="muted mono bo-dash-note">Con el banco CALOT cada residente tiene preguntas distintas: el detalle ✓/✗ por pregunta solo existe con el examen cargado (Word).</p>'}`;
}

function perQuestionHTML(m) {
  if (!m.content) return '';
  const answeredQs = m.perQ.filter((q) => q.pct != null);
  const hardest = new Set([...answeredQs].sort((a, b) => a.pct - b.pct).slice(0, 3).filter((q) => q.pct < 60).map((q) => q.i));
  const rows = m.perQ.map((pq) => {
    const total = pq.n || 1;
    const segs = pq.counts.map((c, j) => {
      if (!c) return '';
      const kind = j === pq.q.answer ? 'is-ok' : j === pq.distractor ? 'is-distractor' : 'is-wrong';
      return `<span class="bo-seg ${kind}" style="flex:${c}" title="${esc(`${pq.q.options[j]} — ${c} ${c === 1 ? 'residente' : 'residentes'}${j === pq.q.answer ? ' (correcta)' : ''}`)}">${(c / total) >= 0.12 ? `${c}` : ''}</span>`;
    }).join('');
    return `
      <li class="bo-pq">
        <div class="bo-pq-head">
          <b class="mono">P${pq.i + 1}</b>
          <span class="bo-pq-stem" title="${esc(pq.q.stem)}">${esc(pq.q.stem.replace(/\s+/g, ' ').slice(0, 90))}${pq.q.stem.length > 90 ? '…' : ''}</span>
          ${hardest.has(pq.i) ? '<em class="bo-pq-tag mono">⚠ difícil</em>' : ''}
          <span class="bo-pq-pct ${pq.pct == null ? '' : STATUS(pq.pct)} mono">${pq.pct == null ? '—' : `${pq.pct}%`}</span>
        </div>
        <div class="bo-pq-bar">${pq.n ? segs : '<span class="bo-seg is-none">sin respuestas aún</span>'}</div>
        <small class="muted bo-pq-foot"><span class="bo-pq-ok">✓ Correcta: ${esc(clip(pq.q.options[pq.q.answer], 110))}</span> · <span class="mono">${pq.ok}/${pq.n} acertaron</span>${pq.distractor >= 0 ? ` · <span class="bo-pq-dis">Distractor más elegido: ${esc(clip(pq.q.options[pq.distractor], 110))}</span>` : ''}</small>
      </li>`;
  }).join('');
  return `
    <section class="card bo-dash-card" data-wing-enter>
      <div class="ads-sec-head">
        <div><p class="mono ads-kicker">QUÉ CONTESTÓ EL GRUPO</p><h2>Respuestas por pregunta</h2></div>
        <div class="bo-legend mono"><span><i class="sw is-ok"></i>Correcta</span><span><i class="sw is-distractor"></i>Distractor más elegido</span><span><i class="sw is-wrong"></i>Otra incorrecta</span></div>
      </div>
      <ol class="bo-pq-list">${rows}</ol>
    </section>`;
}

function rankingHTML(m) {
  const list = m.people.filter((p) => p.pct != null).sort((a, b) => (b.pct - a.pct) || ((a.durMs ?? 9e15) - (b.durMs ?? 9e15)) || (a.exits.length - b.exits.length));
  if (!list.length) return '<p class="muted mono bo-dash-empty">El ranking aparece en cuanto haya respuestas calificadas.</p>';
  const medals = ['🥇', '🥈', '🥉'];
  const podium = list.slice(0, 3);
  const order = podium.length === 3 ? [podium[1], podium[0], podium[2]] : podium;
  return `
    <div class="bo-podium" style="grid-template-columns:repeat(${order.length}, minmax(0, 170px))">
      ${order.map((p) => {
        const pos = list.indexOf(p);
        return `<div class="bo-podium-col is-p${pos + 1}">
          <span class="bo-podium-medal">${medals[pos]}</span>
          <span class="bo-podium-ini mono">${esc(p.r.ini)}</span>
          <b>${esc(p.r.name)}</b>
          <span class="bo-podium-pct mono">${p.pct}%</span>
          <div class="bo-podium-step mono">${pos + 1}</div>
        </div>`;
      }).join('')}
    </div>
    <ol class="bo-rank">
      ${list.map((p, i) => `
        <li class="${p.submitted ? '' : 'is-live'}">
          <span class="bo-rank-pos mono">${i + 1}</span>
          <span class="bo-rank-name">${esc(p.r.name)}<small class="muted mono">${p.submitted ? `entregó${p.durMs ? ` en ${fmtClock(p.durMs)} min` : ''}` : `en curso · ${p.answered}/${m.N}`}${p.exits.length ? ` · <b class="is-bad-txt">${p.exits.length} salida${p.exits.length === 1 ? '' : 's'}</b>` : ''}</small></span>
          <span class="bo-rank-bar" title="${p.pct}%"><i class="${STATUS(p.pct)}" style="width:${p.pct}%"></i></span>
          <b class="bo-rank-pct mono">${p.pct}%</b>
        </li>`).join('')}
    </ol>`;
}

function cheatTimelineHTML(m, exam, now) {
  const start = Number(exam.startedAt) || 0;
  const end = exam.active ? now : Number(exam.endedAt) || now;
  const span = Math.max(60000, end - start);
  const lanes = m.people.filter((p) => p.r.events.some((e) => e.k !== 'parpadeo' && e.k !== 'cambio'));
  const KIND = { salida: 'Salió', recarga: 'Recargó/cerró', interrupcion: 'Interrupción', cambio: 'Cambió respuesta', pestana: 'Cambió de pestaña (modo prueba)' };
  const lanesHTML = lanes.map((p) => {
    const marks = p.r.events.filter((e) => e.k !== 'parpadeo' && e.ts).map((e) => {
      const left = Math.max(0, Math.min(100, ((e.ts - (e.k === 'cambio' ? 0 : e.s * 1000) - start) / span) * 100));
      const w = e.k === 'cambio' ? 0 : Math.min(100 - left, ((e.s * 1000) / span) * 100);
      const tip = e.k === 'cambio'
        ? `${p.r.name} · ${e.ref || ''} y ${e.from ? 'cambió su respuesta' : 'contestó'} en P${e.q}`
        : `${p.r.name} · ${KIND[e.k]} ${fmtS(e.s)} en P${e.q}${e.why ? ` · ${e.why}` : ''}`;
      return `<i class="bo-tl-mark is-${e.k}" style="left:${left}%;${w ? `width:max(6px, ${w}%)` : ''}" title="${esc(tip)}"></i>`;
    }).join('');
    return `<div class="bo-tl-lane"><span class="bo-tl-name">${esc(p.r.name)}<small class="mono">${p.exits.length} sal. · ${p.ints.length} int.</small></span><div class="bo-tl-track">${marks}</div></div>`;
  }).join('');
  const maxQ = Math.max(1, ...m.exitsByQ.map((x) => x.salida + x.interrupcion));
  const bars = m.exitsByQ.map((x, i) => `
    <div class="bo-qbar" title="P${i + 1}: ${x.salida} salidas · ${x.interrupcion} interrupciones">
      <div class="bo-qbar-stack">
        ${x.interrupcion ? `<i class="is-int" style="height:${(x.interrupcion / maxQ) * 100}%"></i>` : ''}
        ${x.salida ? `<i class="is-exit" style="height:${(x.salida / maxQ) * 100}%"></i>` : ''}
      </div>
      <span class="mono">${i + 1}</span>
    </div>`).join('');
  return `
    <div class="bo-tl">
      <div class="bo-tl-axis mono"><span>Inicio</span><span>${fmtClock(span / 2)}</span><span>${exam.active ? 'Ahora' : 'Cierre'} · ${fmtClock(span)}</span></div>
      ${lanesHTML || '<p class="muted mono bo-dash-empty">🟢 Nadie ha salido de la pantalla ni ha tenido interrupciones.</p>'}
    </div>
    <div class="bo-legend mono">
      <span><i class="sw is-salida"></i>Salida (ancho = tiempo fuera)</span>
      <span><i class="sw is-recarga"></i>Recargó/cerró</span>
      <span><i class="sw is-interrupcion"></i>Interrupción (Siri, Gemini…)</span>
      <span><i class="sw-tick"></i>Cambió respuesta tras salir</span>
    </div>
    <h3 class="bo-dash-h3">¿En qué pregunta se salen?</h3>
    <div class="bo-qbars">${bars}</div>`;
}

const notStarted = (msg) => `<section class="card bo-dash-card" data-wing-enter><p class="muted mono bo-dash-empty">${msg}</p></section>`;
const isStarted = (rows, exam) => Boolean(exam.startedAt) && (exam.active || exam.ended || rows.some((r) => r.state === 'entregado'));

/** Una sección del tablero para el menú del panel: stats | progreso | ranking | vigilancia. */
export function dashboardSectionHTML(sec, rows, exam, results, now = Date.now()) {
  if (!isStarted(rows, exam)) return notStarted('Aún no se ha lanzado ningún examen. Esta sección se llena en cuanto lo lance desde la Consola de examen.');
  const m = buildDashboard(rows, exam, results);
  const head = (kicker, title, extra = '') => `<div class="ads-sec-head"><div><p class="mono ads-kicker">${kicker}</p><h2>${title}</h2></div>${extra}</div>`;
  if (sec === 'stats') {
    return `<section class="card bo-dash-card bo-dash-hero" data-wing-enter>
      ${head(`${exam.active ? '🔴 EN VIVO' : 'RESULTADOS'} · ${esc(exam.topicLabel || 'Examen R2')}`, 'Tablero del examen', `<span class="mono muted">${m.N} preguntas · ${m.people.length} residentes</span>`)}
      ${statsRowHTML(m, exam, now)}
    </section>
    ${perQuestionHTML(m)}`;
  }
  if (sec === 'progreso') {
    return `<section class="card bo-dash-card bo-dash-hero" data-wing-enter>${statsRowHTML(m, exam, now)}</section>
    <section class="card bo-dash-card" data-wing-enter>
      ${head('PREGUNTA EN VIVO', '¿Dónde va cada residente?', '<span class="mono muted">Toque una casilla para ver el detalle</span>')}
      ${liveMatrixHTML(m, exam)}
    </section>`;
  }
  if (sec === 'ranking') {
    return `<section class="card bo-dash-card" data-wing-enter>${head('CLASIFICACIÓN', 'Ranking')}${rankingHTML(m)}</section>`;
  }
  if (sec === 'vigilancia') {
    return `<section class="card bo-dash-card" data-wing-enter>${head('VIGILANCIA ANTI-TRAMPA', 'Salidas e interrupciones')}${cheatTimelineHTML(m, exam, now)}</section>`;
  }
  return '';
}

/** Tablero completo (se inserta después de los indicadores del panel). */
export function dashboardHTML(rows, exam, results, now = Date.now()) {
  const started = Boolean(exam.startedAt) && (exam.active || exam.ended || rows.some((r) => r.state === 'entregado'));
  if (!started) return '';
  const m = buildDashboard(rows, exam, results);
  return `
    <section class="card bo-dash-card bo-dash-hero" data-wing-enter>
      <div class="ads-sec-head">
        <div><p class="mono ads-kicker">${exam.active ? '🔴 EN VIVO' : 'RESULTADOS'} · ${esc(exam.topicLabel || 'Examen R2')}</p><h2>Tablero del examen</h2></div>
        <span class="mono muted">${m.N} preguntas · ${m.people.length} residentes</span>
      </div>
      ${statsRowHTML(m, exam, now)}
    </section>

    <section class="card bo-dash-card" data-wing-enter>
      <div class="ads-sec-head">
        <div><p class="mono ads-kicker">PREGUNTA EN VIVO</p><h2>¿Dónde va cada residente?</h2></div>
        <span class="mono muted">Pase el cursor o toque una casilla para ver el detalle</span>
      </div>
      ${liveMatrixHTML(m, exam)}
    </section>

    ${perQuestionHTML(m)}

    <div class="bo-dash-split">
      <section class="card bo-dash-card" data-wing-enter>
        <div class="ads-sec-head"><div><p class="mono ads-kicker">CLASIFICACIÓN</p><h2>Ranking</h2></div></div>
        ${rankingHTML(m)}
      </section>
      <section class="card bo-dash-card" data-wing-enter>
        <div class="ads-sec-head"><div><p class="mono ads-kicker">VIGILANCIA ANTI-TRAMPA</p><h2>Salidas e interrupciones</h2></div></div>
        ${cheatTimelineHTML(m, exam, now)}
      </section>
    </div>`;
}
