// Liga CALOT · ranking entre Chantal, Areli y Daniela (Mario también lo ve). Datos: js/ranking.js.
import { icon } from '../icons.js?v=20261122c';
import { esc, modal, toast } from '../ui.js';
import { playUiSfx } from '../fx/audio.js?v=20261122c';
import * as S from '../scroll.js';
import {
  loadBoard, markCrown, publishSoon, savePremio, accuracy, fmtWeek, BADGES, TITLES,
} from '../ranking.js?v=20261122c';

export const section = 'stats';

const initial = (name) => esc(String(name).replace(/^Dra?\.\s*/i, '').charAt(0).toUpperCase());
const fmtMin = (sec) => {
  const m = Math.round((sec || 0) / 60);
  return m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${m} min`;
};

function avatar(p, size = '') {
  const isLeader = p.rank === 1 && p.idx > 0;
  return `<span class="rk-avatar${p.crown ? ' is-crown' : ''}${isLeader ? ' is-leader' : ''}${size ? ` ${size}` : ''}" data-p="${esc(p.id)}">
    ${p.crown ? `<span class="rk-crown" aria-label="Campeona de la semana pasada">${icon('crown')}</span>` : (isLeader ? `<span class="rk-crown is-week-leader" aria-label="Líder de la semana">${icon('trophy')}</span>` : '')}
    <span class="rk-initial">${initial(p.name)}</span>
  </span>`;
}

const badgeChips = (p, max = 6) => p.badges.slice(0, max).map((b) => `<span class="rk-badge" title="${esc(b.hint)} · ${esc(b.value)}">${icon(b.ic)}<span>${esc(b.label)}</span></span>`).join('');

/** Tarjeta compacta (Inicio / Progreso). */
export function rankingCardHTML(board, { compact = false } = {}) {
  if (!board) return '';
  const { players, champion, premio, mode } = board;
  const top = players.slice(0, 3);
  return `
  <div class="rk-card${compact ? ' is-compact' : ''}">
    <div class="rk-card-head">
      <div>
        <span class="mono rk-kicker">${icon('trophy')} LIGA CALOT · SEMANA DEL ${esc(fmtWeek(board.week).toUpperCase())}</span>
        <h3>${board.leader ? `${esc(board.leader.name)} va al frente` : 'La liga empieza en cero: juega y estudia para puntuar'}</h3>
      </div>
      <a href="#/ranking" class="btn btn-sm btn-glow">Ver ranking →</a>
    </div>
    <ol class="rk-mini">
      ${top.map((p) => `
        <li class="rk-mini-row${p.me ? ' is-me' : ''}">
          <span class="rk-pos mono">${p.rank}</span>
          ${avatar(p, 'is-sm')}
          <span class="rk-mini-name"><strong>${esc(p.name)}${p.me ? ' <small class="mono">(tú)</small>' : ''}</strong><small>${esc(p.title)}</small></span>
          <span class="rk-mini-badges">${badgeChips(p, compact ? 2 : 3)}</span>
          <span class="rk-mini-score mono"><strong>${p.idx}</strong> pts</span>
        </li>`).join('')}
    </ol>
    <div class="rk-card-foot">
      <span>${icon('sparkle')} <strong>Premio semanal:</strong> ${esc(premio.text)}</span>
      ${champion ? `<span class="rk-champ-pill">${icon('trophy')} Campeona vigente: ${esc(champion.name)}</span>` : ''}
    </div>
    ${mode === 'local' ? '<p class="rk-local-note mono">Modo local · datos de este navegador</p>' : ''}
  </div>`;
}

/** Llena un contenedor con la tarjeta (sin bloquear el render síncrono de la vista). */
export function mountRankingCard(el, opts) {
  if (!el) return;
  el.innerHTML = '<div class="rk-card is-loading"><span class="mono muted">Cargando Liga CALOT…</span></div>';
  loadBoard().then((board) => {
    if (!el.isConnected) return;
    markCrown(board);
    el.innerHTML = rankingCardHTML(board, opts);
  }).catch(() => { el.innerHTML = ''; });
}

export function render() {
  return `
<div class="ranking-view">
  <header class="page-head wing-hero rk-hero" data-wing-enter>
    <div class="wing-top-bar">
      <span class="mono wing-badge">LIGA CALOT · RANKING DE RESIDENTES</span>
      <div class="wing-top-actions">
        <a href="#/juegos" class="btn btn-sm btn-glow">${icon('gamepad')} Jugar</a>
        <a href="#/stats" class="btn btn-sm btn-ghost">Progreso →</a>
      </div>
    </div>
    <div class="wing-main-row">
      <div>
        <h1>Liga <em>CALOT</em></h1>
        <p class="wing-lead">Chantal, Areli y Daniela compiten cada semana en juegos y estudio. La mejor se lleva la corona, el marco dorado y el premio semanal.</p>
      </div>
    </div>
  </header>
  <div data-rk-body><p class="muted mono" style="padding:24px">Cargando ranking…</p></div>
</div>`;
}

function bodyHTML(board, tab) {
  const { players, champion, fame, premio, mode, owner } = board;
  const podium = [players[1], players[0], players[2]].filter(Boolean);
  const metric = (p) => (tab === 'total' ? p.total : p.week);
  const idxOf = (p) => (tab === 'total' ? p.idxTotal : p.idx);
  const rows = [...players].sort((a, b) => idxOf(b) - idxOf(a));
  return `
  ${mode === 'local' ? `<p class="rk-local-banner mono">${icon('cloud')} Sin conexión al servidor del ranking: se muestran los datos guardados en este navegador.</p>` : ''}

  <section class="rk-podium" data-wing-enter aria-label="Podio de la semana">
    ${podium.map((p) => `
      <article class="rk-podium-col is-${p.rank}${p.me ? ' is-me' : ''}">
        ${avatar(p, 'is-lg')}
        <strong class="rk-name">${esc(p.name)}${p.me ? ' <small class="mono">(tú)</small>' : ''}</strong>
        <span class="rk-title mono">${esc(p.title)}</span>
        <span class="rk-score"><strong>${p.idx}</strong><small>pts esta semana</small></span>
        <div class="rk-badges">${badgeChips(p) || '<span class="muted mono" style="font-size:.72rem">Sin insignias aún</span>'}</div>
        <div class="rk-step"><span class="mono">${p.rank}º</span></div>
        ${p.has ? '' : '<span class="rk-nodata mono">Aún sin datos publicados</span>'}
      </article>`).join('')}
  </section>

  <section class="rk-grid" data-wing-enter>
    <article class="card rk-prize">
      <span class="mono rk-kicker">${icon('sparkle')} PREMIO SEMANAL</span>
      <h3>${champion ? `${esc(champion.name)} ganó la semana del ${esc(fmtWeek(champion.week))}` : 'Aún no hay campeona: la primera semana se cierra el domingo'}</h3>
      <p>${esc(premio.text)}</p>
      <p class="muted" style="font-size:.85rem">La ganadora de cada semana (lunes a domingo, por índice CALOT) lleva la corona y el marco dorado en su perfil durante toda la semana siguiente.</p>
      ${owner ? '<button type="button" class="btn btn-sm btn-metal" data-rk-edit>Editar premio</button>' : ''}
    </article>
    <article class="card rk-fame">
      <span class="mono rk-kicker">${icon('trophy')} SALÓN DE LA FAMA</span>
      ${fame.length ? `<ol>${fame.map((f) => `<li><span class="mono">${esc(fmtWeek(f.week))}</span><strong>${esc(f.name)}</strong><span class="mono">${f.v} pts</span></li>`).join('')}</ol>` : '<p class="muted">Las campeonas de cada semana aparecerán aquí.</p>'}
    </article>
  </section>

  <section class="card rk-table-wrap" data-wing-enter>
    <div class="rk-table-head">
      <div>
        <span class="mono rk-kicker">${icon('pulse')} MÉTRICAS</span>
        <h3>${tab === 'total' ? 'Acumulado desde el inicio' : `Semana del ${esc(fmtWeek(board.week))}`}</h3>
      </div>
      <div class="arcade-seg" role="group" aria-label="Periodo">
        <button type="button" class="arcade-seg-btn${tab === 'week' ? ' is-on' : ''}" data-rk-tab="week">Semana</button>
        <button type="button" class="arcade-seg-btn${tab === 'total' ? ' is-on' : ''}" data-rk-tab="total">Total</button>
      </div>
    </div>
    <div class="rk-table" role="table">
      <div class="rk-tr rk-th" role="row">
        <span role="columnheader">Residente</span><span role="columnheader">Índice</span><span role="columnheader">Pts juego</span>
        <span role="columnheader">Aciertos</span><span role="columnheader">Racha</span><span role="columnheader">Estudio</span>
        <span role="columnheader">Tarjetas</span><span role="columnheader">Hojas</span>
      </div>
      ${rows.map((p) => {
        const m = metric(p);
        return `
        <div class="rk-tr${p.me ? ' is-me' : ''}" role="row">
          <span role="cell" class="rk-who">${avatar(p, 'is-sm')}<strong>${esc(p.name)}</strong></span>
          <span role="cell" data-l="Índice"><strong>${idxOf(p)}</strong></span>
          <span role="cell" data-l="Pts juego">${(m.pts || 0).toLocaleString('es-MX')}</span>
          <span role="cell" data-l="Aciertos">${m.ok || 0}/${m.n || 0} <small class="muted">${accuracy(m)}%</small></span>
          <span role="cell" data-l="Racha">${m.streak || 0}</span>
          <span role="cell" data-l="Estudio">${fmtMin(m.studySec)}</span>
          <span role="cell" data-l="Tarjetas">${m.cards || 0}</span>
          <span role="cell" data-l="Hojas">${m.sheets || 0}</span>
        </div>`;
      }).join('')}
    </div>
  </section>

  <section class="rk-grid" data-wing-enter>
    <article class="card rk-legend">
      <span class="mono rk-kicker">${icon('target')} INSIGNIAS DE LA SEMANA</span>
      <ul>${BADGES.map((b) => {
        const holders = players.filter((p) => p.badges.some((x) => x.id === b.id));
        return `<li><span class="rk-badge">${icon(b.ic)}<span>${esc(b.label)}</span></span><small class="muted">${esc(b.hint)}</small><strong>${holders.length ? holders.map((h) => esc(h.name)).join(', ') : '—'}</strong></li>`;
      }).join('')}</ul>
    </article>
    <article class="card rk-legend">
      <span class="mono rk-kicker">${icon('calc')} CÓMO SE CALCULA</span>
      <p class="muted" style="font-size:.86rem">Índice CALOT = puntos de juego ÷ 25 + 4 por acierto + 6 por la mejor racha + 1.5 por minuto de estudio (Resúmenes, PUEM, Repasa, Recursos) + 2 por tarjeta repasada + 12 por hoja leída.</p>
      <span class="mono rk-kicker" style="margin-top:10px">TÍTULOS (POR ÍNDICE ACUMULADO)</span>
      <ul class="rk-titles">${TITLES.map((t) => `<li><span class="mono">${t.min}+</span> ${esc(t.t)}</li>`).join('')}</ul>
    </article>
  </section>`;
}

export function mount(root) {
  const body = root.querySelector('[data-rk-body]');
  let tab = 'week';
  let board = null;
  publishSoon(true);
  const paint = () => {
    if (!body?.isConnected || !board) return;
    body.innerHTML = bodyHTML(board, tab);
    S.reveal(body);
  };
  const load = () => loadBoard().then((b) => { board = b; markCrown(b); paint(); }).catch(() => {
    if (body) body.innerHTML = '<p class="muted" style="padding:24px">No se pudo cargar el ranking.</p>';
  });
  load();
  body?.addEventListener('click', (e) => {
    const t = e.target.closest('[data-rk-tab]');
    if (t) { playUiSfx('click'); tab = t.dataset.rkTab; paint(); return; }
    if (e.target.closest('[data-rk-edit]')) {
      modal('Premio semanal', `
        <label class="field">¿Qué gana la campeona de la semana?
          <textarea class="input" name="premio" rows="3" maxlength="240" required>${esc(board?.premio?.text || '')}</textarea>
        </label>`, async (fd) => {
        await savePremio(fd.get('premio'));
        toast('Premio actualizado');
        load();
      });
    }
  });
  // Al volver a la pestaña, refresca (otras testers pudieron publicar).
  const onVis = () => { if (document.visibilityState === 'visible' && root.isConnected) load(); };
  document.addEventListener('visibilitychange', onVis);
  S.onCleanup?.(() => document.removeEventListener('visibilitychange', onVis));
  S.scope(root, () => { S.compactHeader(root); S.reveal(root); });
}

