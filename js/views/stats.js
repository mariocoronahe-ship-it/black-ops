import { icon } from '../icons.js?v=20261122i';
import { store, streak, weekHours, weekSeries, questions, todayISO } from '../store.js?v=20261122i';
import { TEMARIO_APRENDE } from '../data/temario_aprende.js?v=20261122i';
import { PUEM_SERIAL_CASES } from '../data/repaso_alto_rendimiento.js?v=20261122i';
import { esc, modal, toast } from '../ui.js';
import { playUiSfx } from '../fx/audio.js?v=20261122i';
import * as S from '../scroll.js';
import { mountRankingCard } from './ranking.js?v=20261122i';

export const section = 'biblio';

function fmtDuration(sec = 0) {
  const s = Math.max(0, Math.round(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m} min`;
  return `${s} s`;
}

function heatmap() {
  const counts = new Map(store.all('reviewLog').map((r) => [r.date, r.count]));
  const secByDay = store.state.telemetry?.secByDay || {};
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 7 * 12 + 1);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  const cells = [];
  const d = new Date(start);
  while (d <= end) {
    const iso = todayISO(d);
    const revN = counts.get(iso) || 0;
    const minActive = Math.round((secByDay[iso]?.totalSec || 0) / 60);
    const score = revN + Math.round(minActive / 10);
    cells.push({ iso, score, revN, minActive });
    d.setDate(d.getDate() + 1);
  }
  const max = Math.max(4, ...cells.map((c) => c.score));
  return `<div class="heat" style="--weeks:${Math.ceil(cells.length / 7)}">${cells.map((c) => `<i title="${c.iso}: ${c.minActive} min activos · ${c.revN} tarjetas" style="--a:${c.score ? 0.25 + 0.75 * (c.score / max) : 0}" class="${c.score ? 'on' : ''}"></i>`).join('')}</div>`;
}

export function render() {
  const st = store.state;
  const tel = st.telemetry || {};
  const secBySection = tel.secBySection || {};
  const secByDay = tel.secByDay || {};
  const gameSessions = tel.gameSessions || [];
  const caseProgress = tel.caseProgress || {};

  const totalAppSec = Object.values(secBySection).reduce((a, b) => a + b, 0);
  const gameSec = secBySection.juegos || 0;
  const aprendeSec = (secBySection.aprende || 0) + (secBySection.resumenes || 0); // «resumenes» = tiempo acreditado antes de unificar la clave
  const repasaSec = secBySection.repasa || 0;
  const recursosSec = secBySection.recursos || 0;
  const todaySec = secByDay[todayISO()]?.totalSec || 0;

  const avgGameAcc = gameSessions.length
    ? Math.round(gameSessions.reduce((a, g) => a + (g.accuracy || 0), 0) / gameSessions.length)
    : 0;

  const reviewsMap = new Map(store.all('reviews').map((r) => [r.id, r]));
  const allCards = questions();
  const masteredCards = allCards.filter((c) => {
    const r = reviewsMap.get(c.id);
    return r && r.interval >= 21;
  }).length;

  const seenTopicsCount = TEMARIO_APRENDE.filter((t) => store.isTopicSeen(t.id)).length;
  const totalSubblocks = TEMARIO_APRENDE.reduce((a, t) => a + (t.subblocks?.length || 0), 0);
  const readSubblocks = TEMARIO_APRENDE.reduce(
    (a, t) => a + (t.subblocks || []).filter((sb) => store.isSubblockRead(t.id, sb.id)).length,
    0
  );
  const solvedCasesCount = Object.keys(caseProgress).length;
  const atlasDone = Object.values(store.state.atlasProgress || {}).filter((p) => p?.completed).length;

  const sectionRows = [
    { key: 'aprende', label: 'Resúmenes (lectura)', sec: aprendeSec, color: 'var(--cuaderno)' },
    { key: 'puem', label: 'PUEM (Banco de preguntas)', sec: secBySection.puem || 0, color: 'var(--repaso)' },
    { key: 'repasa', label: 'Repasa (Alto Rendimiento y SM-2; los casos están en PUEM)', sec: repasaSec, color: 'var(--repaso)' },
    { key: 'juegos', label: 'Juegos (Arcade Quirúrgico)', sec: gameSec, color: 'var(--juegos)' },
    { key: 'recursos', label: 'Recursos (Modelos 3D, Algoritmos, Guías y Escalas)', sec: recursosSec, color: 'var(--atlas)' },
    { key: 'hgr72', label: 'HGR 72 (Rotaciones, Guardias y Pendientes)', sec: secBySection.hgr72 || 0, color: 'var(--hgr72)' },
    { key: 'inicio', label: 'Inicio y Estadísticas', sec: (secBySection.inicio || 0) + (secBySection.stats || 0), color: 'var(--cyan)' },
  ];

  const gameModesMeta = [
    { mode: 'blitz', label: 'Blitz PUEM (45s)', color: '#ff5fae' },
    { mode: 'pase', label: 'Pase de Visita · Modo Adscrito', color: '#3dff8a' },
    { mode: 'lapblanca', label: '¿Se opera o no? · Laparotomías Blancas', color: '#3ee0ff' },
    { mode: 'detective', label: 'Detective Diagnóstico Quirúrgico', color: '#f5c84b' },
    { mode: 'quirofano', label: 'Quirófano Paso a Paso', color: '#ff8a3d' },
    { mode: 'noctua', label: 'NOCTUA · Simulador Evolutivo', color: '#a855f7' },
    { mode: 'guardia', label: 'Guardia Nocturna (3 a. m.)', color: '#ef4444' },
    { mode: 'adscrito', label: 'El Adscrito Te Pregunta', color: '#f59e0b' },
    { mode: 'algoritmo', label: 'Arma el Algoritmo', color: '#06b6d4' },
    { mode: 'sepaso', label: '¿Qué se te pasó?', color: '#ec4899' },
    { mode: 'duelo', label: 'Duelo de Residentes (1 vs 1)', color: '#22c55e' },
    { mode: 'imagen', label: 'Imagen Misteriosa (PACS)', color: '#8b5cf6' },
  ];

  const modeStats = gameModesMeta.map((m) => {
    const list = gameSessions.filter((g) => g.mode === m.mode);
    const count = list.length;
    const sec = list.reduce((a, g) => a + (g.durationSec || 0), 0);
    const acc = count ? Math.round(list.reduce((a, g) => a + (g.accuracy || 0), 0) / count) : 0;
    return { ...m, count, sec, acc };
  });

  // Per-topic mastery calculation
  const topicMetrics = TEMARIO_APRENDE.map((t) => {
    const sbTotal = (t.subblocks || []).length;
    const sbRead = (t.subblocks || []).filter((sb) => store.isSubblockRead(t.id, sb.id)).length;
    const seen = store.isTopicSeen(t.id);
    const tCases = PUEM_SERIAL_CASES.filter((c) => c.topicId === t.id);
    const tCasesDone = tCases.filter((c) => caseProgress[c.id]?.completed).length;
    const tCards = allCards.filter((c) => c.topicId === t.id);
    const tCardsMastered = tCards.filter((c) => (reviewsMap.get(c.id)?.interval || 0) >= 21).length;

    const sbPct = sbTotal ? Math.round((sbRead / sbTotal) * 100) : 0;
    const casePct = tCases.length ? Math.round((tCasesDone / tCases.length) * 100) : 0;
    const cardPct = tCards.length ? Math.round((tCardsMastered / tCards.length) * 100) : 0;
    const globalPct = Math.round((sbPct * 0.4) + (casePct * 0.35) + (cardPct * 0.25) + (seen ? 15 : 0));
    return {
      ...t,
      sbRead,
      sbTotal,
      seen,
      casesDone: tCasesDone,
      casesTotal: tCases.length,
      cardsMastered: tCardsMastered,
      cardsTotal: tCards.length,
      globalPct: Math.min(100, globalPct),
    };
  });

  const weakestTopics = [...topicMetrics].sort((a, b) => a.globalPct - b.globalPct).slice(0, 3);
  const series = weekSeries();
  const maxDayH = Math.max(3, ...series.map((d) => d.hours));

  return `
<div class="stats-view">
  <header class="page-head wing-hero is-stats" data-wing-enter>
    <div class="wing-top-bar">
      <span class="mono wing-badge">WING 05 · CENTRO DE TELEMETRÍA PUEM</span>
      <div class="wing-top-actions">
        <span class="mono wing-live-pill"><i class="wing-dot" aria-hidden="true"></i>MONITOREO EN VIVO</span>
        <button type="button" class="btn btn-sm btn-ghost wing-replay-btn" data-replay-portal="stats">${icon('play')} Intro 10s</button>
        <button type="button" class="btn btn-glow btn-sm" data-act="log-hours">${icon('plus')} Registrar sesión manual</button>
      </div>
    </div>
    <div class="wing-main-row wing-main-split">
      <div>
        <h1>Telemetría y <em>Progreso</em></h1>
        <p class="wing-lead">Central independiente de rendimiento quirúrgico: tiempo activo por módulo, desempeño en simuladores, constancia de 12 semanas y dominio por bloque PUEM.</p>
      </div>
      <div class="wing-ecg-strip" aria-hidden="true">
        <span class="mono wing-ecg-lbl">ECG // DOMINIO ACTIVO · RACHA ${streak()}D</span>
        <svg viewBox="0 0 280 54" preserveAspectRatio="none">
          <path class="wing-ecg-base" d="M0 30h44l10-16 10 30 12-40 10 34 8-8h36l10-14 8 24 10-18 8 8h44l10-16 10 30 12-38 10 32 8-8h20" fill="none" stroke="currentColor" stroke-opacity="0.24" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          <path class="wing-ecg-trace" d="M0 30h44l10-16 10 30 12-40 10 34 8-8h36l10-14 8 24 10-18 8 8h44l10-16 10 30 12-38 10 32 8-8h20" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </header>

  <nav class="telemetry-dock" aria-label="Secciones de telemetría" data-wing-enter>
    <button type="button" class="tel-dock-btn is-active" data-tel-jump="tel-kpis">
      <span class="mono tel-dock-num">01 · RESUMEN</span>
      <strong>${fmtDuration(totalAppSec)}</strong>
      <small>Tiempo total activo</small>
    </button>
    <button type="button" class="tel-dock-btn" data-tel-jump="tel-tiempo">
      <span class="mono tel-dock-num">02 · RITMO 12 SEM</span>
      <strong>Racha ${streak()}d</strong>
      <small>${weekHours().toFixed(1)}h esta semana</small>
    </button>
    <button type="button" class="tel-dock-btn" data-tel-jump="tel-arcade">
      <span class="mono tel-dock-num">03 · ARCADE</span>
      <strong>${gameSessions.length} partidas</strong>
      <small>${avgGameAcc}% precisión global</small>
    </button>
    <button type="button" class="tel-dock-btn" data-tel-jump="tel-liga">
      <span class="mono tel-dock-num">04 · LIGA CALOT</span>
      <strong>Ranking</strong>
      <small>Testers · premio semanal</small>
    </button>
    <button type="button" class="tel-dock-btn" data-tel-jump="tel-dominio">
      <span class="mono tel-dock-num">05 · DOMINIO PUEM</span>
      <strong>${seenTopicsCount}/${TEMARIO_APRENDE.length} bloques</strong>
      <small>${readSubblocks}/${totalSubblocks} subbloques</small>
    </button>
  </nav>

  <!-- KPIS PRINCIPALES -->
  <div id="tel-kpis" data-wing-enter style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-bottom:24px">
    <article class="card lamp" style="--c:var(--cyan)">
      <p class="mono">Tiempo Total en la App</p>
      <div class="big" style="font-size:2.1rem"><span>${fmtDuration(totalAppSec)}</span></div>
      <p class="muted" style="margin:4px 0 0;font-size:.82rem">Hoy activo: <strong>${fmtDuration(todaySec)}</strong> (se actualiza en vivo)</p>
    </article>

    <article class="card lamp" style="--c:var(--juegos)">
      <p class="mono">Tiempo Jugando en Arcade</p>
      <div class="big" style="font-size:2.1rem"><span>${fmtDuration(gameSec)}</span></div>
      <p class="muted" style="margin:4px 0 0;font-size:.82rem"><strong>${gameSessions.length}</strong> partidas jugadas · Precisión: <strong>${avgGameAcc}%</strong></p>
    </article>

    <article class="card lamp" style="--c:var(--cuaderno)">
      <p class="mono">Avance en Resúmenes</p>
      <div class="big" style="font-size:2.1rem"><span>${seenTopicsCount}/${TEMARIO_APRENDE.length}</span><small>temas</small></div>
      <p class="muted" style="margin:4px 0 0;font-size:.82rem"><strong>${readSubblocks}/${totalSubblocks}</strong> subbloques leídos</p>
    </article>

    <article class="card lamp" style="--c:var(--repaso)">
      <p class="mono">Casos PUEM y Tarjetas SM-2</p>
      <div class="big" style="font-size:2.1rem"><span>${solvedCasesCount}/${PUEM_SERIAL_CASES.length}</span><small>casos</small></div>
      <p class="muted" style="margin:4px 0 0;font-size:.82rem"><strong>${masteredCards}/${allCards.length}</strong> tarjetas dominadas · Racha: <strong>${streak()}d</strong> · <strong>${atlasDone}</strong> piezas de atlas completadas</p>
    </article>
  </div>

  <!-- DESGLOSE DE TIEMPO POR SECCIÓN + ACTIVIDAD SEMANAL -->
  <div id="tel-tiempo" data-wing-enter style="display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:18px;margin-bottom:24px">
    <article class="card" style="padding:22px;--c:var(--cyan)">
      <span class="mono" style="color:var(--cyan);font-size:.75rem">DISTRIBUCIÓN DE TIEMPO ACTIVO EN LA APLICACIÓN</span>
      <h3 style="margin:4px 0 16px">¿En qué secciones has invertido tu tiempo?</h3>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${sectionRows.map((r) => {
          const pct = totalAppSec > 0 ? Math.round((r.sec / totalAppSec) * 100) : 0;
          return `
          <div>
            <div style="display:flex;justify-content:space-between;font-size:.86rem;margin-bottom:4px">
              <strong>${esc(r.label)}</strong>
              <span class="mono">${fmtDuration(r.sec)} (${pct}%)</span>
            </div>
            <div class="progress" style="height:8px"><span style="--p:${pct}%;background:${r.color}"></span></div>
          </div>`;
        }).join('')}
      </div>
    </article>

    <article class="card" style="padding:22px;--c:var(--tareas);display:flex;flex-direction:column;justify-content:space-between;gap:16px">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span class="mono" style="color:var(--tareas);font-size:.75rem">HORAS DE ESTUDIO ESTA SEMANA (${weekHours().toFixed(1)}h / ${st.settings.weeklyGoal || 20}h)</span>
          <span class="chip">Racha: ${streak()} días</span>
        </div>
        <h3 style="margin:4px 0 14px">Ritmo Diario y Constancia (12 Semanas)</h3>
        <div class="week" style="height:95px;margin-bottom:16px">
          ${series.map((d) => `<div class="day${d.today ? ' today' : ''}" title="${d.iso}: ${d.hours}h"><i style="--h:${(d.hours / maxDayH) * 100}%"></i><span>${d.label} (${d.hours}h)</span></div>`).join('')}
        </div>
      </div>
      <div>
        <p class="mono muted" style="font-size:.73rem;margin:0 0 8px">MAPA DE CALOR DE CONSTANCIA (12 SEMANAS):</p>
        ${heatmap()}
      </div>
    </article>
  </div>

  <!-- LIGA CALOT · RANKING ENTRE TESTERS -->
  <section id="tel-liga" data-wing-enter data-ranking-card style="margin-bottom:24px"></section>

  <!-- DESEMPEÑO EN JUEGOS QUIRÚRGICOS -->
  <section id="tel-arcade" data-wing-enter class="card" style="padding:22px;margin-bottom:24px;--c:var(--juegos)">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px">
      <div>
        <span class="mono" style="color:var(--juegos);font-size:.75rem">ESTADÍSTICAS DEL ARCADE QUIRÚRGICO</span>
        <h3 style="margin:4px 0 0">¿Cómo te ha ido en los Juegos Quirúrgicos?</h3>
      </div>
      <a href="#/juegos" class="btn btn-sm btn-glow">${icon('gamepad')} Jugar nueva partida →</a>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(235px,1fr));gap:12px;margin-bottom:20px">
      ${modeStats.map((ms) => `
        <div class="glass" style="padding:14px;border-radius:12px;border-left:3px solid ${ms.color}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <strong style="font-size:.9rem">${esc(ms.label)}</strong>
            <span class="chip" style="font-size:.68rem">${ms.count} partidas</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:.82rem;color:var(--c-muted);margin-bottom:6px">
            <span>Tiempo: <strong style="color:#fff">${fmtDuration(ms.sec)}</strong></span>
            <span>Precisión: <strong style="color:${ms.acc >= 80 ? '#2bd27a' : ms.acc >= 60 ? '#f5c84b' : '#ff3b4e'}">${ms.acc}%</strong></span>
          </div>
          <div class="progress" style="height:6px"><span style="--p:${ms.acc}%;background:${ms.color}"></span></div>
        </div>
      `).join('')}
    </div>

    <!-- Historial reciente de partidas -->
    <p class="mono muted" style="font-size:.74rem;margin:0 0 8px">HISTORIAL RECIENTE DE PARTIDAS JUGADAS:</p>
    <div style="overflow-x:auto;max-height:280px;overflow-y:auto;border:1px solid rgba(255,255,255,.08);border-radius:12px">
      <table style="width:100%;border-collapse:collapse;font-size:.85rem">
        <thead>
          <tr style="background:rgba(255,255,255,.05)">
            <th style="text-align:left;padding:10px 12px">Fecha</th>
            <th style="text-align:left;padding:10px 12px">Modo de Juego</th>
            <th style="text-align:left;padding:10px 12px">Tema / Caso</th>
            <th style="text-align:left;padding:10px 12px">Resultado</th>
            <th style="text-align:left;padding:10px 12px">Precisión</th>
            <th style="text-align:left;padding:10px 12px">Duración</th>
          </tr>
        </thead>
        <tbody>
          ${gameSessions.slice(0, 15).map((gs) => `
            <tr style="border-top:1px solid rgba(255,255,255,.06)">
              <td style="padding:9px 12px" class="mono muted">${esc(gs.date)}</td>
              <td style="padding:9px 12px"><strong>${esc(gs.modeLabel)}</strong></td>
              <td style="padding:9px 12px">${esc(gs.topic || 'General')}</td>
              <td style="padding:9px 12px" class="mono">${gs.score} / ${gs.maxScore}</td>
              <td style="padding:9px 12px">
                <span class="chip" style="font-size:.7rem;color:${gs.accuracy >= 80 ? '#2bd27a' : '#f5c84b'}">${gs.accuracy}%</span>
              </td>
              <td style="padding:9px 12px" class="mono muted">${fmtDuration(gs.durationSec)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </section>

  <!-- DETECTOR DE TEMAS A REFORZAR + AVANCE POR BLOQUE QUIRÚRGICO -->
  <section id="tel-dominio" data-wing-enter class="card" style="padding:22px;--c:var(--biblio)">
    <span class="mono" style="color:var(--biblio);font-size:.75rem">DOMINIO ACADÉMICO POR BLOQUE QUIRÚRGICO (11 MÓDULOS)</span>
    <h3 style="margin:4px 0 14px">Progreso en Resúmenes, casos PUEM y tarjetas SM-2</h3>

    <div style="padding:14px 16px;border-radius:12px;background:rgba(255,138,61,.09);border:1px solid rgba(255,138,61,.3);margin-bottom:18px">
      <strong style="color:var(--cuaderno);display:block;margin-bottom:6px">🎯 Recomendación Inteligente · 3 Bloques Prioritarios para Reforzar Hoy:</strong>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        ${weakestTopics.map((wt) => `
          <div class="glass" style="padding:8px 12px;border-radius:10px;display:flex;align-items:center;gap:10px">
            <span><strong>${esc(wt.num)}. ${esc(wt.title)}</strong> (${wt.globalPct}% dominio)</span>
            <a href="#/aprende?tema=${esc(wt.id)}" class="btn btn-sm btn-ghost" style="padding:3px 8px;font-size:.74rem">Aprende</a>
            <a href="#/repasa?tema=${esc(wt.id)}" class="btn btn-sm btn-glow" style="padding:3px 8px;font-size:.74rem">Repasa</a>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:.87rem">
        <thead>
          <tr style="border-bottom:1px solid rgba(255,255,255,.14)">
            <th style="text-align:left;padding:10px 12px">Bloque Quirúrgico</th>
            <th style="text-align:left;padding:10px 12px">Lectura</th>
            <th style="text-align:left;padding:10px 12px">Subbloques</th>
            <th style="text-align:left;padding:10px 12px">Casos PUEM</th>
            <th style="text-align:left;padding:10px 12px">Tarjetas SM-2</th>
            <th style="text-align:left;padding:10px 12px">Dominio Global</th>
            <th style="text-align:left;padding:10px 12px">Acción</th>
          </tr>
        </thead>
        <tbody>
          ${topicMetrics.map((tm) => `
            <tr style="border-bottom:1px solid rgba(255,255,255,.06)">
              <td style="padding:10px 12px"><strong style="color:${tm.color}">${esc(tm.num)}. ${esc(tm.title)}</strong></td>
              <td style="padding:10px 12px">
                <span class="chip" style="font-size:.7rem;color:${tm.seen ? '#2bd27a' : 'var(--c-muted)'}">${tm.seen ? '✓ Visto' : 'En curso'}</span>
              </td>
              <td style="padding:10px 12px" class="mono">${tm.sbRead}/${tm.sbTotal}</td>
              <td style="padding:10px 12px" class="mono">${tm.casesDone}/${tm.casesTotal}</td>
              <td style="padding:10px 12px" class="mono">${tm.cardsMastered}/${tm.cardsTotal}</td>
              <td style="padding:10px 12px;min-width:140px">
                <div style="display:flex;align-items:center;gap:8px">
                  <div class="progress" style="flex:1;height:7px"><span style="--p:${tm.globalPct}%;background:${tm.color}"></span></div>
                  <span class="mono" style="font-size:.76rem">${tm.globalPct}%</span>
                </div>
              </td>
              <td style="padding:10px 12px">
                <div style="display:flex;gap:6px">
                  <a href="#/aprende?tema=${esc(tm.id)}" class="btn btn-sm btn-ghost" style="padding:4px 8px;font-size:.73rem">Aprende</a>
                  <a href="#/repasa?tema=${esc(tm.id)}" class="btn btn-sm btn-ghost" style="padding:4px 8px;font-size:.73rem">Repasa</a>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </section>
</div>`;
}

export function mount(root, rerender) {
  mountRankingCard(root.querySelector('[data-ranking-card]'));
  root.addEventListener('click', (e) => {
    const jumpBtn = e.target.closest('[data-tel-jump]');
    if (jumpBtn) {
      playUiSfx('click');
      const targetId = jumpBtn.dataset.telJump;
      root.querySelectorAll('[data-tel-jump]').forEach((b) => b.classList.toggle('is-active', b === jumpBtn));
      const target = root.querySelector(`#${targetId}`);
      if (target) {
        if (S.lenis) S.lenis.scrollTo(target, { offset: -96 });
        else target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    const actBtn = e.target.closest('[data-act]');
    if (!actBtn) return;
    if (actBtn.dataset.act === 'log-hours') {
      modal('Registrar horas de estudio', `
        <label class="field">Horas a sumar al registro de hoy<input class="input" name="h" type="number" min="0.25" max="16" step="0.25" value="1" required></label>`,
      (fd) => {
        const hrs = parseFloat(fd.get('h')) || 1;
        store.logHours(hrs);
        store.tickActiveTime('aprende', Math.round(hrs * 3600));
        toast('Horas registradas en tu historial');
        rerender({ keepScroll: true });
      });
    }
  });

  S.scope(root, () => {
    S.reveal(root);
    S.bars(root);
  });
}
