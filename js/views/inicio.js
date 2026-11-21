/* ==========================================================================
   CALOT-OS · Inicio en Órbita (4a + 3a)
   Núcleo animado central + 6 módulos en órbita + "¿Dónde estás flojo?"
   ========================================================================== */

import { icon } from '../icons.js?v=20261122e';
import {
  store,
  streak,
  weekHours,
  weekSeries,
  nextEvent,
  daysUntil,
  questions,
  todayISO,
  getTopicDomainProgress,
} from '../store.js?v=20261122e';
import { TEMARIO_APRENDE } from '../data/temario_aprende.js?v=20261122e';
import { CATALOGO_RECURSOS as CATALOGO_COMPLETO } from '../data/catalogo_recursos.js?v=20261122e';
import { renderPulsingCoreHTML } from '../fx/boot.js?v=20261122e';
import { playUiSfx } from '../fx/audio.js?v=20261122e';
import { esc, modal, toast, fmtDate } from '../ui.js';
import * as S from '../scroll.js';
import { perfil, doctorTitle } from '../perfil.js?v=20261122e';
import { mountRankingCard } from './ranking.js?v=20261122e';

export const section = 'inicio';

const CATALOGO_RECURSOS = CATALOGO_COMPLETO.filter((r) => r.subtype !== 'puem_pack');

const ORBIT_MOD_KEY = 'calot:orbit-mod';
const ARC_LEN = 2 * Math.PI * 56 * (240 / 360);

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Buenos días' : h < 19 ? 'Buenas tardes' : 'Buenas noches';
}

function gauge(hours, goal) {
  const ticks = [];
  for (let i = 0; i <= 24; i++) {
    const a = (-120 + i * 10) * Math.PI / 180;
    const big = i % 6 === 0;
    const r1 = big ? 66 : 70;
    const r2 = 76;
    ticks.push(`<line x1="${(100 + r1 * Math.sin(a)).toFixed(1)}" y1="${(100 - r1 * Math.cos(a)).toFixed(1)}" x2="${(100 + r2 * Math.sin(a)).toFixed(1)}" y2="${(100 - r2 * Math.cos(a)).toFixed(1)}" stroke="rgba(var(--ink-rgb),${big ? 0.52 : 0.24})" stroke-width="${big ? 2 : 1.2}"/>`);
  }
  const angle = -120 + 240 * Math.min(hours / goal, 1);
  return `
  <svg class="gauge" viewBox="0 0 200 186" aria-hidden="true">
    <defs>
      <linearGradient id="gArc" x1="0" x2="1"><stop offset="0" style="stop-color:var(--crimson-deep)"/><stop offset="1" style="stop-color:var(--crimson)"/></linearGradient>
      <radialGradient id="gHub"><stop offset="0" style="stop-color:var(--crimson-pale)"/><stop offset=".5" style="stop-color:var(--crimson)"/><stop offset="1" style="stop-color:var(--crimson-dark)"/></radialGradient>
    </defs>
    <polygon points="100,22 168,61 168,139 100,178 32,139 32,61" fill="rgba(var(--ink-rgb),.025)" stroke="var(--stroke)"/>
    ${ticks.join('')}
    <path d="M ${(100 + 56 * Math.sin(-120 * Math.PI / 180)).toFixed(1)} ${(100 - 56 * Math.cos(-120 * Math.PI / 180)).toFixed(1)} A 56 56 0 1 1 ${(100 + 56 * Math.sin(120 * Math.PI / 180)).toFixed(1)} ${(100 - 56 * Math.cos(120 * Math.PI / 180)).toFixed(1)}" fill="none" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
    <path class="gauge-arc" data-len="${ARC_LEN.toFixed(1)}" data-off="${(ARC_LEN * (1 - Math.min(hours / goal, 1))).toFixed(1)}" d="M ${(100 + 56 * Math.sin(-120 * Math.PI / 180)).toFixed(1)} ${(100 - 56 * Math.cos(-120 * Math.PI / 180)).toFixed(1)} A 56 56 0 1 1 ${(100 + 56 * Math.sin(120 * Math.PI / 180)).toFixed(1)} ${(100 - 56 * Math.cos(120 * Math.PI / 180)).toFixed(1)}" fill="none" stroke="url(#gArc)" stroke-width="6" stroke-linecap="round" stroke-dasharray="${ARC_LEN.toFixed(1)}" stroke-dashoffset="${(ARC_LEN * (1 - Math.min(hours / goal, 1))).toFixed(1)}" style="filter:drop-shadow(0 0 6px var(--crimson))"/>
    <g class="needle" data-angle="${angle.toFixed(1)}" transform="rotate(${angle.toFixed(1)} 100 100)">
      <path d="M100 100 L96 96 L100 38 L104 96 Z" fill="var(--crimson)" style="filter:drop-shadow(0 0 6px var(--crimson))"/>
    </g>
    <circle cx="100" cy="100" r="11" fill="url(#gHub)"/>
    <circle cx="100" cy="100" r="4" fill="var(--bg)"/>
  </svg>`;
}

function buildOrbitModules({ st, dueCount, wk, goal, domainList, gamesPlayed, totalHoursApp, hgrPending }) {
  const seenCount = domainList.filter((d) => d.seen).length;
  const totalSubblocks = domainList.reduce((acc, d) => acc + d.sbTotal, 0);
  const readSubblocks = domainList.reduce((acc, d) => acc + d.sbRead, 0);
  const nextTopic = domainList.find((d) => d.leer < 1) || domainList[0];

  const models3d = CATALOGO_RECURSOS.filter((r) => r.type === '3d' || r.subtype === 'threejs').length;
  const sessions = st.telemetry?.gameSessions || [];
  const avgAcc = sessions.length
    ? Math.round(sessions.reduce((a, g) => a + (g.accuracy || 0), 0) / sessions.length)
    : 0;

  const guardias = (st.hgr72Personal?.guardias || []).filter((g) => g.estado === 'proxima' || g.fecha >= todayISO());
  const nextGuardia = guardias[0];
  const nextGuardiaLabel = nextGuardia ? fmtDate(nextGuardia.fecha) : 'Sin guardia próxima';

  const defs = [
    {
      id: 'aprende',
      label: 'Resúmenes',
      ic: 'notebook',
      stat: `${seenCount}/${TEMARIO_APRENDE.length} temas · ${readSubblocks}/${totalSubblocks} hojas`,
      sub: nextTopic ? `Sigue en ${nextTopic.num}. ${nextTopic.title}` : 'Temario PUEM R1–R4',
      cta: 'Abrir resúmenes',
      href: nextTopic ? `#/aprende?tema=${nextTopic.id}` : '#/resumenes',
    },
    {
      id: 'repasa',
      label: 'Repasa',
      ic: 'brain',
      stat: `${dueCount} tarjetas hoy · racha ${streak()} d`,
      sub: 'Alto rendimiento, perlas y tarjetas SM-2',
      cta: 'Empezar repaso',
      href: '#/repasa',
    },
    {
      id: 'recursos',
      label: 'Recursos',
      ic: 'cube',
      stat: `${models3d} modelos 3D · ${CATALOGO_RECURSOS.length} recursos`,
      sub: 'Atlas anatómico, algoritmos, guías y escalas',
      cta: 'Abrir atlas',
      href: '#/recursos',
    },
    {
      id: 'juegos',
      label: 'Juegos',
      ic: 'gamepad',
      stat: `12 modos · ${gamesPlayed} partidas`,
      sub: avgAcc ? `Precisión media ${avgAcc}% · Arcade quirúrgico` : 'Blitz 45s y simuladores clínicos',
      cta: 'Ir al arcade',
      href: '#/juegos',
    },
    {
      id: 'stats',
      label: 'Progreso',
      ic: 'sparkle',
      stat: `${wk.toFixed(1)} h esta semana · meta ${goal} h`,
      sub: `${totalHoursApp} h registradas en CALOT-OS`,
      cta: 'Ver stats',
      href: '#/stats',
    },
    {
      id: 'hgr72',
      label: 'HGR 72',
      ic: 'hospital',
      stat: `${hgrPending} pendientes · ${nextGuardia ? 'guardia ' + nextGuardiaLabel : 'sin guardias registradas'}`,
      sub: 'Pendientes, guardias, bitácora y formatos',
      cta: 'Modo guardia',
      href: '#/hgr72',
    },
  ];

  return defs.map((m, i) => {
    const angle = (i / defs.length) * Math.PI * 2 - Math.PI / 2;
    const x = (50 + Math.cos(angle) * 38.5).toFixed(2);
    const y = (50 + Math.sin(angle) * 38.5).toFixed(2);
    return { ...m, x: `${x}%`, y: `${y}%` };
  });
}

function getSelectedModId(mods) {
  const saved = sessionStorage.getItem(ORBIT_MOD_KEY);
  return mods.some((m) => m.id === saved) ? saved : mods[0].id;
}

export function render() {
  const st = store.state;
  const name = st.settings.name || perfil().name;
  const wk = weekHours();
  const goal = st.settings.weeklyGoal || 20;
  const series = weekSeries();
  const maxH = Math.max(4, ...series.map((d) => d.hours));
  const ev = nextEvent();
  const dd = ev ? daysUntil(ev.date) : null;
  const qs = questions();
  const rev = new Map(store.all('reviews').map((r) => [r.id, r]));
  const dueCount = qs.filter((q) => !rev.get(q.id) || rev.get(q.id).due <= todayISO()).length;

  const totalSec = Object.values(st.telemetry?.secBySection || {}).reduce((a, b) => a + b, 0);
  const totalHoursApp = (totalSec / 3600).toFixed(1);
  const gamesPlayed = (st.telemetry?.gameSessions || []).length;
  const hgrOpen = (st.hgr72Personal?.pendientes || []).filter((p) => !p.done)
    .sort((x, y) => (x.vence || '9999').localeCompare(y.vence || '9999') || (x.hora || '').localeCompare(y.hora || ''));
  const hgrPending = (st.hgr72Personal?.pendientes || []).filter((p) => !p.done).length;
  const tasks = st.tasks || [];
  const pendingTasks = tasks.filter((t) => t.status !== 'hecho');
  const doneTasks = tasks.filter((t) => t.status === 'hecho');

  const domainList = getTopicDomainProgress();
  const mods = buildOrbitModules({ st, dueCount, wk, goal, domainList, gamesPlayed, totalHoursApp, hgrPending });
  const activeId = getSelectedModId(mods);
  const activeMod = mods.find((m) => m.id === activeId) || mods[0];

  // Top 3 weakest PUEM topics sorted by average of Leer / Repasar / Jugar
  const weakest = [...domainList]
    .sort((a, b) => a.avg - b.avg || a.num.localeCompare(b.num))
    .slice(0, 3);

  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  }).toUpperCase();

  return `
<div class="inicio">
  <!-- 4a + 3a · Inicio en órbita + "¿Dónde estás flojo?" -->
  <section class="inicio-hero-grid" aria-label="Centro de mando en órbita">
    <div class="inicio-orbit-pane">
      <header class="orbit-head">
        <div>
          <p class="orbit-eyebrow">${today} · ${dueCount} TARJETAS HOY · ${hgrOpen.length + pendingTasks.length} PENDIENTES</p>
          <h1 class="orbit-greeting">${greeting()}, <em>${esc(doctorTitle(name))}</em></h1>
          <a href="#/ranking" class="rk-hero-pill" data-rk-hero-pill hidden></a>
        </div>
        <div class="orbit-head-acts">
          <button type="button" class="btn btn-sm btn-ghost" data-act="name" title="Configurar perfil">${icon('feather')} Perfil</button>
          <button type="button" class="btn btn-sm btn-ghost" data-act="cmdk" title="Buscador global">${icon('search')} ⌘K</button>
          <button type="button" class="btn btn-sm btn-glow" data-act="log">${icon('clock')} + Estudio</button>
        </div>
      </header>

      <div class="orbit-arena">
        <div class="orbit-stage" role="group" aria-label="Módulos de CALOT-OS en órbita">
          <div class="orbit-ring orbit-ring-outer" aria-hidden="true"></div>
          <div class="orbit-ring orbit-ring-inner" aria-hidden="true"></div>

          <button type="button" class="orbit-core" data-orbit-core title="Núcleo CALOT-OS" aria-label="Núcleo animado de CALOT-OS">
            ${renderPulsingCoreHTML({ isOrbit: true })}
          </button>

          ${mods.map((m) => {
            const on = m.id === activeMod.id;
            return `
            <button
              type="button"
              class="orbit-planet${on ? ' is-active' : ''}"
              data-orbit-mod="${m.id}"
              aria-pressed="${on ? 'true' : 'false'}"
              style="--px:${m.x};--py:${m.y}"
            >
              <span class="orbit-node">${icon(m.ic)}</span>
              <span class="orbit-label">${esc(m.label)}</span>
            </button>`;
          }).join('')}
        </div>
      </div>

      <div class="orbit-detail glass" aria-live="polite">
        <div class="orbit-detail-copy">
          <strong class="orbit-detail-title" data-orbit-title>${esc(activeMod.label)}</strong>
          <span class="orbit-detail-meta" data-orbit-meta>${esc(activeMod.stat)} · ${esc(activeMod.sub)}</span>
        </div>
        <a href="${activeMod.href}" class="btn btn-glow orbit-detail-cta" data-orbit-cta>
          <span data-orbit-cta-text>${esc(activeMod.cta)}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <aside class="inicio-aside" aria-label="Diagnóstico de dominio por tema">
      <div class="aside-head">
        <span class="aside-kicker">¿DÓNDE ESTÁS FLOJO?</span>
        <p class="aside-sub">Promedio de Leer, Repasar y Jugar. Toca un módulo para reforzarlo.</p>
      </div>

      <div class="weak-list">
        ${weakest.map((w) => `
        <a href="#/aprende?tema=${esc(w.id)}&casa=${esc((w.weakestPhase || 'Leer').toLowerCase())}" class="weak-card">
          <div class="weak-row">
            <span class="weak-title-wrap">
              <span class="weak-num">${esc(w.num)}</span>
              <strong class="weak-title">${esc(w.title)}</strong>
            </span>
            <span class="weak-pct">${w.pct}%</span>
          </div>
          <span class="weak-bar" aria-hidden="true"><i style="--p:${w.pct}%"></i></span>
          <span class="weak-tip">Lo más flojo: ${esc(w.weakestPhase)} · L ${w.leerPct}% · R ${w.repasarPct}% · J ${w.jugarPct}%</span>
        </a>`).join('')}
      </div>

      <div class="domain-map-wrap">
        <div class="domain-map-head">
          <span class="aside-kicker">MAPA DE DOMINIO · LEER / REPASAR / JUGAR</span>
        </div>
        <div class="domain-grid" role="list" aria-label="11 módulos PUEM">
          ${domainList.map((t) => {
            const cells = [
              { k: 'Leer', v: t.leer },
              { k: 'Repasar', v: t.repasar },
              { k: 'Jugar', v: t.jugar },
            ];
            return `
            <a
              href="#/aprende?tema=${esc(t.id)}"
              class="domain-col"
              role="listitem"
              title="${esc(t.num)}. ${esc(t.title)} · Leer ${t.leerPct}% · Repasar ${t.repasarPct}% · Jugar ${t.jugarPct}%"
            >
              ${cells.map((c) => {
                const alpha = c.v > 0 ? (0.14 + c.v * 0.82).toFixed(2) : '0';
                return `<span class="domain-cell${c.v > 0 ? ' is-lit' : ''}${c.v >= 0.8 ? ' is-hot' : ''}" style="--ca:${alpha}" aria-label="${c.k} ${Math.round(c.v * 100)}%"></span>`;
              }).join('')}
              <span class="domain-num">${esc(t.num)}</span>
            </a>`;
          }).join('')}
        </div>
      </div>
    </aside>
  </section>

  <!-- Liga CALOT · ranking entre testers -->
  <section class="inicio-liga" data-ranking-card aria-label="Liga CALOT"></section>

  <!-- 02 · Agenda del día y Bento operativo -->
  <section class="inicio-ops" aria-label="Agenda y ritmo de estudio">
    <p class="ops-kicker">02 · RECORDATORIOS, PENDIENTES Y RITMO DE ESTUDIO</p>

    <article class="card ops-card hgr-next-card" style="margin-bottom:16px">
      <div class="ops-card-head">
        <div>
          <p class="mono">HGR 72 · PRÓXIMOS PENDIENTES (${hgrOpen.length})</p>
          <h3>Lo que viene</h3>
        </div>
        <a href="#/hgr72?mod=personal" class="btn btn-sm btn-ghost">${icon('hospital')} Ver todos</a>
      </div>
      <div class="home-todo-list">
        ${hgrOpen.slice(0, 5).map((p) => {
          const d = p.vence ? daysUntil(p.vence) : null;
          const when = d === null ? 'Sin fecha' : d === 0 ? `Hoy${p.hora ? ' · ' + p.hora : ''}` : d === 1 ? `Mañana${p.hora ? ' · ' + p.hora : ''}` : d > 1 ? `${fmtDate(p.vence)} · en ${d} días` : `Venció ${fmtDate(p.vence)}`;
          return `
          <div class="glass todo-row">
            <label class="todo-check">
              <input type="checkbox" data-hgr-done="${esc(p.id)}">
              <span>${esc(p.texto)}</span>
            </label>
            <div class="todo-meta"><span class="hp-due ${d !== null && d <= 2 ? (d < 0 ? 'is-late' : 'is-soon') : ''}">${esc(when)}</span></div>
          </div>`;
        }).join('') || '<p class="muted">Sin pendientes del hospital.</p>'}
      </div>
    </article>

    <div class="inicio-agenda-grid">
      <article class="card ops-card">
        <div class="ops-card-head">
          <div>
            <p class="mono">MIS TAREAS (${pendingTasks.length} activas)</p>
            <h3>Mi Lista de Hoy</h3>
          </div>
          <a href="#/pendientes" class="btn btn-sm btn-ghost">${icon('calendar')} Tablero</a>
        </div>

        <form class="quick-todo-form" autocomplete="off">
          <input class="input" name="title" placeholder="Agregar recordatorio o pendiente…" required>
          <select class="input quick-todo-type" name="type" aria-label="Tipo">
            <option value="Estudio">Estudio</option>
            <option value="Guardia">Guardia</option>
            <option value="Presentación">Presentación</option>
            <option value="Personal">Personal</option>
          </select>
          <button class="btn btn-sm btn-glow" type="submit">${icon('plus')} Añadir</button>
        </form>

        <div class="home-todo-list">
          ${tasks.slice(0, 8).map((t) => {
            const isDone = t.status === 'hecho';
            return `
            <div class="glass todo-row${isDone ? ' is-done' : ''}">
              <label class="todo-check">
                <input type="checkbox" data-todo-toggle="${esc(t.id)}" ${isDone ? 'checked' : ''}>
                <span>${esc(t.title)}</span>
              </label>
              <div class="todo-meta">
                <span class="chip">${esc(t.type || 'General')}</span>
                <button type="button" class="icon-btn" data-todo-del="${esc(t.id)}" title="Eliminar">${icon('trash')}</button>
              </div>
            </div>`;
          }).join('')}
          ${!tasks.length ? '<p class="muted">No tienes pendientes registrados. Añade uno arriba.</p>' : ''}
        </div>
        ${doneTasks.length ? `<p class="mono muted todo-clear">${doneTasks.length} completados · <button type="button" class="btn-link" data-act="clear-done">Limpiar completados</button></p>` : ''}
      </article>

      <article class="card card-neon ops-card" style="--c:var(--inicio);--c2:var(--violet)">
        <div class="ops-ev-top">
          <div class="ops-card-head">
            <p class="mono">PRÓXIMOS HITOS Y GUARDIAS</p>
            <button type="button" class="btn btn-sm btn-ghost" data-act="event">${icon('plus')} Nuevo hito</button>
          </div>
          ${ev ? `
            <div class="ev-hero">
              <div class="big"><span data-count="${dd}">${dd}</span><small>${dd === 1 ? 'día' : 'días'}</small></div>
              <div>
                <p class="ev-title">${esc(ev.title)}</p>
                <p class="muted">${fmtDate(ev.date)}</p>
              </div>
            </div>` : '<p class="muted">Sin eventos próximos.</p>'}
          <div class="ev-list">
            ${st.events.slice(0, 4).map((e) => {
              const d = daysUntil(e.date);
              return `
              <div class="glass ev-row">
                <div>
                  <strong>${esc(e.title)}</strong>
                  <span class="muted">${fmtDate(e.date)}</span>
                </div>
                <div class="ev-row-acts">
                  <span class="chip">${d >= 0 ? `En ${d}d` : `Hace ${Math.abs(d)}d`}</span>
                  <button type="button" class="icon-btn" data-ev-del="${esc(e.id)}" title="Borrar">${icon('close')}</button>
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>

        <form class="capture glass" autocomplete="off">
          <div class="capture-row">
            <span class="icon-btn" aria-hidden="true">${icon('feather')}</span>
            <input class="capture-input" name="q" placeholder="Captura rápida de nota o ?? pregunta :: respuesta…" aria-label="Captura rápida">
            <button class="send" aria-label="Guardar">${icon('send')}</button>
          </div>
        </form>
      </article>
    </div>

    <div class="bento">
      <article class="card b-streak" data-reveal style="--c:var(--tareas)">
        <span class="glow" data-parallax="50" style="right:-20%;top:-30%"></span>
        <p class="mono">Racha de estudio</p>
        <div class="big"><span data-count="${streak()}">${streak()}</span><small>días</small></div>
        <div class="week">
          ${series.map((d) => `<div class="day${d.today ? ' today' : ''}"><i style="--h:${(d.hours / maxH) * 100}%"></i><span>${d.label}</span></div>`).join('')}
        </div>
      </article>

      <article class="card b-gauge" data-reveal style="--c:var(--cyan)">
        <span class="glow" data-parallax="60" style="left:-10%;bottom:-40%;--c:var(--crimson)"></span>
        <div class="b-gauge-head">
          <p class="mono">Horas esta semana</p>
          <button type="button" class="icon-btn" data-act="log" aria-label="Registrar horas">${icon('plus')}</button>
        </div>
        ${gauge(wk, goal)}
        <p class="gauge-val"><span data-count="${wk}" data-dec="1">${wk.toFixed(1)}</span><span class="muted"> / ${goal} h</span></p>
      </article>

      <article class="card b-review" data-reveal style="--c:var(--cuaderno)">
        <span class="glow" data-parallax="50" style="left:20%;top:-40%"></span>
        <div class="b-gauge-head">
          <p class="mono">Tarjeta Rápida SM-2 · <span>${dueCount}</span> para hoy</p>
          <button type="button" class="icon-btn" data-act="nextq" aria-label="Siguiente pregunta">${icon('arrowR')}</button>
        </div>
        <div class="flash" tabindex="0" role="button" aria-label="Voltear tarjeta">
          <div class="flash-inner">
            <div class="face front"><span class="chip tag">${qs[0] ? esc(qs[0].tag) : '—'}</span><p class="q">${qs[0] ? esc(qs[0].q) : 'Tarjetas listas en Repasa'}</p><span class="mono">Toca para giro 3D</span></div>
            <div class="face back"><p class="a">${qs[0] ? esc(qs[0].a) : ''}</p><span class="mono">${qs[0] ? esc(qs[0].note) : ''}</span></div>
          </div>
        </div>
        <a class="lg lg-sm review-go" href="#/repasa" style="--c:var(--repaso)">${icon('brain')} Ir a Repasa</a>
      </article>
    </div>
  </section>
</div>`;
}

export function mount(root, rerender) {
  mountRankingCard(root.querySelector('[data-ranking-card]'), { compact: true });
  const st = store.state;
  const wk = weekHours();
  const goal = st.settings.weeklyGoal || 20;
  const qs = questions();
  const rev = new Map(store.all('reviews').map((r) => [r.id, r]));
  const dueCount = qs.filter((q) => !rev.get(q.id) || rev.get(q.id).due <= todayISO()).length;
  const totalSec = Object.values(st.telemetry?.secBySection || {}).reduce((a, b) => a + b, 0);
  const totalHoursApp = (totalSec / 3600).toFixed(1);
  const gamesPlayed = (st.telemetry?.gameSessions || []).length;
  const hgrPending = (st.hgr72Personal?.pendientes || []).filter((p) => !p.done).length;
  const domainList = getTopicDomainProgress();
  const mods = buildOrbitModules({ st, dueCount, wk, goal, domainList, gamesPlayed, totalHoursApp, hgrPending });
  let selectedId = getSelectedModId(mods);

  const titleEl = root.querySelector('[data-orbit-title]');
  const metaEl = root.querySelector('[data-orbit-meta]');
  const ctaEl = root.querySelector('[data-orbit-cta]');
  const ctaTxtEl = root.querySelector('[data-orbit-cta-text]');

  const selectOrbitMod = (id) => {
    const mod = mods.find((m) => m.id === id);
    if (!mod) return;
    selectedId = mod.id;
    sessionStorage.setItem(ORBIT_MOD_KEY, mod.id);
    root.querySelectorAll('[data-orbit-mod]').forEach((btn) => {
      const active = btn.dataset.orbitMod === mod.id;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (titleEl) titleEl.textContent = mod.label;
    if (metaEl) metaEl.textContent = `${mod.stat} · ${mod.sub}`;
    if (ctaEl) ctaEl.setAttribute('href', mod.href);
    if (ctaTxtEl) ctaTxtEl.textContent = mod.cta;
  };

  let qi = 0;
  const flash = root.querySelector('.flash');
  if (flash) {
    const flip = () => {
      playUiSfx('click');
      flash.classList.toggle('flipped');
    };
    flash.addEventListener('click', flip);
    flash.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flip();
      }
    });
  }

  root.addEventListener('change', (e) => {
    const hcb = e.target.closest('[data-hgr-done]');
    if (hcb) {
      const hp = store.state.hgr72Personal;
      const it = hp.pendientes.find((x) => x.id === hcb.dataset.hgrDone);
      if (it) { it.done = true; it.updated = Date.now(); store.saveHgr72Personal({ pendientes: hp.pendientes }); toast('Pendiente marcado como hecho'); rerender({ keepScroll: true }); }
      return;
    }
    const cb = e.target.closest('[data-todo-toggle]');
    if (cb) {
      const id = cb.dataset.todoToggle;
      store.update('tasks', id, { status: cb.checked ? 'hecho' : 'porhacer' });
      rerender({ keepScroll: true });
    }
  });

  root.addEventListener('click', (e) => {
    const planet = e.target.closest('[data-orbit-mod]');
    if (planet) {
      const id = planet.dataset.orbitMod;
      if (id === selectedId) {
        const mod = mods.find((m) => m.id === id);
        if (mod?.href) {
          playUiSfx('nav');
          location.hash = mod.href;
        }
        return;
      }
      playUiSfx('click');
      selectOrbitMod(id);
      return;
    }

    if (e.target.closest('[data-orbit-core]')) {
      playUiSfx('hover');
      return;
    }

    const delTodo = e.target.closest('[data-todo-del]');
    if (delTodo) {
      store.remove('tasks', delTodo.dataset.todoDel);
      toast('Pendiente eliminado');
      rerender({ keepScroll: true });
      return;
    }

    const delEv = e.target.closest('[data-ev-del]');
    if (delEv) {
      store.remove('events', delEv.dataset.evDel);
      toast('Hito eliminado');
      rerender({ keepScroll: true });
      return;
    }

    const b = e.target.closest('[data-act]');
    if (!b) return;
    const act = b.dataset.act;
    if (act === 'cmdk') {
      window.dispatchEvent(new CustomEvent('nous:cmdk'));
    } else if (act === 'clear-done') {
      const done = store.all('tasks').filter((t) => t.status === 'hecho');
      done.forEach((t) => store.remove('tasks', t.id));
      toast('Pendientes completados limpiados');
      rerender({ keepScroll: true });
    } else if (act === 'name') {
      modal('Configurar Perfil', `
        <label class="field">Tu nombre<input class="input" name="name" value="${esc(store.state.settings.name || perfil().name)}" required></label>
        <label class="field">Meta semanal de estudio (horas)<input class="input" name="goal" type="number" min="5" max="80" value="${store.state.settings.weeklyGoal || 20}" required></label>`,
      (fd) => {
        store.setSettings({ name: fd.get('name').trim() || perfil().name, weeklyGoal: parseFloat(fd.get('goal')) || 20 });
        toast('Perfil actualizado');
        rerender({ keepScroll: true });
      });
    } else if (act === 'log') {
      modal('Registrar estudio', `
        <label class="field">Horas estudiadas hoy<input class="input" name="h" type="number" min="0.25" max="16" step="0.25" value="1" required></label>`,
      (fd) => {
        const hrs = parseFloat(fd.get('h')) || 1;
        store.logHours(hrs);
        store.tickActiveTime('aprende', Math.round(hrs * 3600));
        playUiSfx('ok');
        toast('Horas registradas en Stats');
        setTimeout(() => rerender({ keepScroll: true }), 250);
      });
    } else if (act === 'event') {
      modal('Nuevo recordatorio / hito / guardia', `
        <label class="field">Título<input class="input" name="t" placeholder="Examen PUEM, Guardia B, entrega…" required></label>
        <label class="field">Fecha<input class="input" name="d" type="date" value="${todayISO()}" required></label>`,
      (fd) => {
        store.add('events', { title: fd.get('t'), date: fd.get('d') });
        toast('Hito agregado');
        rerender({ keepScroll: true });
      });
    } else if (act === 'nextq' && qs.length && flash) {
      qi = (qi + 1) % qs.length;
      const q = qs[qi];
      playUiSfx('click');
      flash.classList.remove('flipped');
      setTimeout(() => {
        flash.querySelector('.front .chip').textContent = q.tag;
        flash.querySelector('.q').textContent = q.q;
        flash.querySelector('.a').textContent = q.a;
        flash.querySelector('.back .mono').textContent = q.note;
      }, 200);
    }
  });

  const todoForm = root.querySelector('.quick-todo-form');
  if (todoForm) {
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = e.target.title.value.trim();
      const type = e.target.type.value;
      if (!title) return;
      store.add('tasks', { title, type, status: 'porhacer', due: todayISO(), start: '08:00', end: '09:00' });
      e.target.reset();
      playUiSfx('ok');
      toast('Pendiente añadido');
      rerender({ keepScroll: true });
    });
  }

  const capForm = root.querySelector('.capture');
  if (capForm) {
    capForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = e.target.q.value.trim();
      if (!v) return;
      store.add('notes', { kind: 'nota', tag: 'General', title: v.slice(0, 70), body: v, updated: Date.now() });
      e.target.reset();
      playUiSfx('ok');
      toast('Guardado en Resúmenes → Mis apuntes');
    });
  }

  S.scope(root, (g) => {
    S.reveal(root);
    S.parallax(root);
    S.counters(root);
    const needle = root.querySelector('.needle');
    const arc = root.querySelector('.gauge-arc');
    if (needle && arc) {
      const target = +needle.dataset.angle;
      g.fromTo(needle, { rotation: -120, svgOrigin: '100 100' }, { rotation: target, svgOrigin: '100 100', duration: 2, ease: 'elastic.out(1, 0.6)', scrollTrigger: { trigger: needle.closest('svg'), start: 'top 85%' } });
      g.fromTo(arc, { strokeDashoffset: +arc.dataset.len }, { strokeDashoffset: +arc.dataset.off, duration: 1.8, ease: 'power3.out', scrollTrigger: { trigger: arc.closest('svg'), start: 'top 85%' } });
    }
  });
}
