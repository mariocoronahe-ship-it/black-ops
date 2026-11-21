import { icon } from '../icons.js?v=20261122g';
import { store, questions, todayISO } from '../store.js?v=20261122g';
import { TEMARIO_APRENDE } from '../data/temario_aprende.js?v=20261122g';
import { HIGH_YIELD_BY_TOPIC as HY_BASE, PUEM_PEARL_CATEGORIES } from '../data/repaso_alto_rendimiento.js?v=20261122g';
import { DRIVE_HIGH_YIELD } from '../data/temario_drive.js?v=20261122g';

import { esc, toast } from '../ui.js';
import { playUiSfx } from '../fx/audio.js?v=20261122g';
import { voiceReview, voiceForgot } from '../fx/voice.js?v=20261122g';
import * as S from '../scroll.js';

// Puntos de alto rendimiento: los citados de ARGOS-MED primero y, después, las perlas de los resúmenes de Drive por tema
const HIGH_YIELD_BY_TOPIC = Object.fromEntries(
  [...new Set([...Object.keys(HY_BASE), ...Object.keys(DRIVE_HIGH_YIELD)])]
    .map((id) => [id, [...(HY_BASE[id] || []), ...(DRIVE_HIGH_YIELD[id] || [])]]),
);

export const section = 'repaso';

const MASTERED = 21;
const GRADES = [
  { q: 1, label: 'Otra vez', c: 'var(--crimson-hot)' },
  { q: 3, label: 'Difícil', c: 'var(--crimson)' },
  { q: 4, label: 'Bien', c: 'var(--ink-2)' },
  { q: 5, label: 'Fácil', c: 'var(--ink)' },
];

const addDays = (iso, n) => { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n); return todayISO(d); };

export function sm2(prev, q) {
  const st = { ef: 2.5, interval: 0, reps: 0, lapses: 0, ...(prev || {}) };
  if (q < 3) { st.reps = 0; st.interval = 1; st.lapses += 1; } else {
    st.interval = st.reps === 0 ? 1 : st.reps === 1 ? 6 : Math.round(st.interval * st.ef);
    st.reps += 1;
  }
  st.ef = Math.max(1.3, st.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  st.due = addDays(todayISO(), st.interval);
  return st;
}
const fmtInterval = (d) => (d <= 1 ? '1 día' : d < 30 ? `${d} días` : d < 365 ? `${Math.round(d / 30)} mes${Math.round(d / 30) > 1 ? 'es' : ''}` : `${(d / 365).toFixed(1)} años`);

let activeTopicId = 'piel'; // All topics appear in Repasa even if not viewed in Aprende
let activeTab = 'puntos'; // 'puntos' | 'tarjetas' | 'perlas'
let pointsFilter = '';
let showQuotes = false;

// State for SM-2 flashcards
const session = { topicId: null, queue: [], idx: 0, flipped: false, done: 0 };

function deck(topicId = null) {
  const reviews = new Map(store.all('reviews').map((r) => [r.id, r]));
  const today = todayISO();
  return questions(topicId).map((c) => ({ ...c, st: reviews.get(c.id) || null })).map((c) => ({
    ...c, isNew: !c.st, isDue: !c.st || c.st.due <= today, mastered: !!c.st && c.st.interval >= MASTERED,
  }));
}

export const studyLinks = (topic) => (topic.linkedResources || []).filter((lr) => !String(lr.id).startsWith('caso-puem-'));

export function getTopicRepasaSummary(topicId) {
  const cards = deck(topicId);
  const dueCount = cards.filter((c) => c.isDue).length;
  const subtemas = HIGH_YIELD_BY_TOPIC[topicId] || [];
  const pointsCount = subtemas.reduce((acc, s) => acc + (s.puntos?.length || 0), 0);
  return { cardsTotal: cards.length, dueCount, pointsCount };
}

export function renderTopicRepasaPanel(topic, { insideHouse = false } = {}) {
  const isSeen = store.isTopicSeen(topic.id);
  const subtemas = HIGH_YIELD_BY_TOPIC[topic.id] || [];
  const totalPointsInTopic = subtemas.reduce((acc, s) => acc + (s.puntos?.length || 0), 0);

  const cards = deck(topic.id);
  const due = cards.filter((c) => c.isDue);
  const mastered = cards.filter((c) => c.mastered).length;
  if (session.topicId !== topic.id || !session.queue.length || session.idx >= session.queue.length) {
    session.topicId = topic.id;
    session.queue = (due.length ? due : cards).map((c) => c.id);
    session.idx = 0;
    session.flipped = false;
  }
  const curCard = cards.find((c) => c.id === session.queue[session.idx]);

  return `
  <div class="repasa-topic-panel" data-repasa-scope>
    ${insideHouse ? `
      <div class="card repasa-scope-banner">
        <div class="repasa-scope-banner-top">
          <div>
            <span class="mono repasa-kicker">REPASO DEL MÓDULO · ${esc(topic.num)}</span>
            <h3>Alto rendimiento y tarjetas SM-2</h3>
          </div>
          <div class="repasa-chip-row">
            <span class="chip"><strong>${totalPointsInTopic}</strong>&nbsp;puntos</span>
            <span class="chip"><strong>${cards.length}</strong>&nbsp;tarjetas</span>
            <a href="#/repasa?tema=${esc(topic.id)}" class="btn btn-sm btn-ghost">Vista completa ↗</a>
          </div>
        </div>
      </div>` : `
      <article class="card repasa-scope-banner">
        <div class="repasa-scope-banner-top">
          <div>
            <div class="repasa-chip-row" style="margin-bottom:4px">
              <span class="chip chip-accent">${esc(topic.code)}</span>
              <span class="chip">${isSeen ? '✓ Ya visto en Resúmenes' : 'Repaso directo activo'}</span>
            </div>
            <h2 style="margin:2px 0;font-size:1.35rem">Repaso de Alto Rendimiento · ${esc(topic.title)}</h2>
          </div>
          <div class="repasa-chip-row">
            <span class="chip"><strong>${totalPointsInTopic}</strong>&nbsp;puntos citados</span>
            <span class="chip"><strong>${cards.length}</strong>&nbsp;tarjetas SM-2</span>
          </div>
        </div>

        ${studyLinks(topic).length ? `
        <div class="repasa-linked-strip">
          <span class="mono repasa-kicker">${icon('cube')} RECURSOS VISUALES PARA REFORZAR ESTE REPASO:</span>
          <div class="repasa-chip-row">
            ${studyLinks(topic).map((lr) => `
              <a href="#/recursos?id=${encodeURIComponent(lr.id)}&from=repasa:${encodeURIComponent(topic.id)}" class="glass repasa-res-chip">
                <span class="chip">${esc(lr.badge || lr.typeLabel)}</span>
                <span>${esc(lr.title)}</span>
                <span class="mono">→</span>
              </a>
            `).join('')}
          </div>
        </div>` : ''}
      </article>`}

    <div class="repasa-subtabs-bar">
      <div class="tabs" role="tablist">
        <button class="tab ${activeTab === 'puntos' ? 'is-on' : ''}" data-repasa-tab="puntos">${icon('flame')} 1. Puntos (${totalPointsInTopic})</button>
        <button class="tab ${activeTab === 'tarjetas' ? 'is-on' : ''}" data-repasa-tab="tarjetas">${icon('brain')} 2. Tarjetas SM-2 (${cards.length})</button>
        <button class="tab ${activeTab === 'perlas' ? 'is-on' : ''}" data-repasa-tab="perlas">${icon('sparkle')} 3. Perlas Rápidas</button>
      </div>

      ${activeTab === 'puntos' ? `
      <div class="repasa-filter-bar">
        <input class="input repasa-filter-input" type="search" data-filter-pts placeholder="Buscar concepto, escala o libro…" value="${esc(pointsFilter)}">
        <button type="button" class="btn btn-sm ${showQuotes ? 'btn-glow' : 'btn-ghost'}" data-repasa-act="toggle-quotes">
          ${showQuotes ? 'Ocultar citas textuales' : 'Mostrar citas de libros'}
        </button>
      </div>` : ''}
    </div>

    ${activeTab === 'puntos' ? `
      <div class="repasa-stack">
        ${subtemas.map((sub, sIdx) => {
          const pts = (sub.puntos || []).filter((p) => {
            if (!pointsFilter.trim()) return true;
            const q = pointsFilter.toLowerCase();
            return (p.texto + ' ' + p.libro + ' ' + (p.cita || '')).toLowerCase().includes(q);
          });
          if (!pts.length) return '';
          return `
          <article class="card repasa-pts-card">
            <div class="repasa-pts-head">
              <div>
                <span class="mono repasa-kicker">SUBTEMA 0${sIdx + 1} · ALTO RENDIMIENTO</span>
                <h3>${esc(sub.subtema)}</h3>
              </div>
              <span class="chip">${pts.length} puntos clave</span>
            </div>
            <div class="repasa-stack-sm">
              ${pts.map((p, pIdx) => `
                <div class="glass repasa-point-item">
                  <div class="repasa-point-row">
                    <p class="repasa-point-text">
                      <strong class="mono repasa-point-num">#${pIdx + 1}</strong>${esc(p.texto)}
                    </p>
                    <span class="chip repasa-book-chip">📖 ${esc(p.libro)}${p.pagina ? ` · p. ${esc(p.pagina)}` : ''}</span>
                  </div>
                  ${showQuotes && p.cita ? `<blockquote class="repasa-quote">"${esc(p.cita)}"</blockquote>` : ''}
                </div>
              `).join('')}
            </div>
          </article>`;
        }).join('') || '<article class="card"><p class="muted">No hay puntos de alto rendimiento registrados o coincidentes para este filtro.</p></article>'}
      </div>
    ` : activeTab === 'tarjetas' ? `
      <div class="rp-stats repasa-sm2-kpis">
        <article class="card lamp"><p class="mono">Pendientes hoy (${esc(topic.title)})</p><div class="big"><span>${due.length}</span><small>tarjetas</small></div></article>
        <article class="card lamp"><p class="mono">Total del tema</p><div class="big"><span>${cards.length}</span><small>tarjetas</small></div></article>
        <article class="card lamp"><p class="mono">Dominadas (≥21d)</p><div class="big"><span>${mastered}</span><small>de ${cards.length}</small></div></article>
      </div>

      <section class="card rp-session">
        ${curCard ? `
          <div class="rp-top">
            <span class="chip tag">${esc(curCard.tag)}</span>
            <span class="mono">${session.idx + 1} / ${session.queue.length}${curCard.isNew ? ' · nueva' : ''}</span>
          </div>
          <div class="flash big-flash ${session.flipped ? 'flipped' : ''}" tabindex="0" role="button" aria-label="Voltear tarjeta">
            <span class="shockwave" aria-hidden="true"></span>
            <div class="flash-inner">
              <div class="face front"><span class="mono repasa-face-kicker">PREGUNTA</span><p class="q">${esc(curCard.q)}</p><span class="mono">Toca o presiona Espacio para voltear en 3D</span></div>
              <div class="face back"><span class="mono repasa-face-kicker is-back">RESPUESTA</span><p class="a">${esc(curCard.a)}</p><span class="mono repasa-face-src">${esc(curCard.note)}</span></div>
            </div>
          </div>
          <div class="grades ${session.flipped ? 'show' : ''}">
            ${GRADES.map((g, idx) => `<button type="button" class="lg grade" data-q="${g.q}" data-color="${g.c}" style="--c:${g.c}"><kbd class="rp-kbd">${idx + 1}</kbd><b>${g.label}</b><small>${fmtInterval(sm2(curCard.st, g.q).interval)}</small></button>`).join('')}
          </div>` : `
          <div class="rp-done">
            <span class="icon-tile">${icon('circleCheck', 'ic3d')}</span>
            <h2>¡Tarjetas de ${esc(topic.title)} completadas!</h2>
            <p class="muted">Puedes reiniciar el mazo del tema o ponerlo a prueba en el Blitz del módulo.</p>
            <div class="repasa-done-acts">
              <button type="button" class="btn btn-ghost" data-repasa-act="restart-deck">${icon('refresh')} Repasar todo (${cards.length})</button>
              ${insideHouse
                ? `<button type="button" class="btn btn-glow" data-casa="jugar">${icon('bolt')} Ponerlo a prueba en Blitz →</button>`
                : `<a class="btn btn-glow" href="#/juegos?modo=blitz&tema=${esc(topic.id)}">${icon('bolt')} Ponerlo a prueba en Blitz →</a>`}
            </div>
          </div>`}
      </section>
    ` : `
      <div class="repasa-pearls-grid">
        ${PUEM_PEARL_CATEGORIES.map((cat) => `
          <article class="card repasa-pts-card">
            <span class="mono repasa-kicker">BANCO DE PERLAS RÁPIDAS</span>
            <h3>${esc(cat.categoria)}</h3>
            <ul class="repasa-pearl-list">
              ${(cat.perlas || []).map((pr) => `<li>${esc(pr)}</li>`).join('')}
            </ul>
          </article>
        `).join('')}
      </div>
    `}
  </div>`;
}

export function render(params = {}) {
  if (params.tema && (params.tema === 'todos' || TEMARIO_APRENDE.some((t) => t.id === params.tema))) {
    activeTopicId = params.tema === 'todos' ? 'piel' : params.tema;
  }
  if (params.tab && ['puntos', 'tarjetas', 'perlas'].includes(params.tab)) {
    activeTab = params.tab;
  }

  const topic = TEMARIO_APRENDE.find((t) => t.id === activeTopicId) || TEMARIO_APRENDE.find((t) => t.id === 'piel') || TEMARIO_APRENDE[0];

  return `
<div class="repasa-view">
  <header class="page-head">
    <div>
      <p class="mono eyebrow">02 · REPASA · ALTO RENDIMIENTO Y TARJETAS SM-2</p>
      <h1>Repasa <em>Alto Rendimiento</em></h1>
      <p>Todos los bloques están disponibles desde el inicio: puntos clave citados por libro y página, perlas rápidas y repetición espaciada 3D.</p>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <a class="btn btn-ghost" href="#/aprende?tema=${esc(topic.id)}&casa=repasar">${icon('notebook')} Casa del tema (${esc(topic.num)})</a>
      <a class="btn btn-glow" href="#/juegos?tema=${esc(topic.id)}">${icon('gamepad')} Entrenar en Juegos</a>
    </div>
  </header>

  <section style="margin-bottom:20px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px">
      <span class="mono" style="font-size:.76rem;color:var(--c-muted)">ELIGE UN MÓDULO PARA REPASAR:</span>
    </div>
    <div class="topic-selector-rail">
      ${TEMARIO_APRENDE.map((t) => {
        const active = t.id === topic.id;
        const ptsCount = (HIGH_YIELD_BY_TOPIC[t.id] || []).reduce((a, s) => a + (s.puntos?.length || 0), 0);
        return `
        <button type="button" class="card topic-mini-pill ${active ? 'is-active' : ''}" data-repasa-topic="${esc(t.id)}">
          <span class="mono topic-mini-num">${esc(t.num)}</span>
          <span class="topic-mini-title">${esc(t.title)}</span>
          <span class="mono muted topic-mini-meta">${ptsCount} puntos</span>
        </button>`;
      }).join('')}
    </div>
  </section>

  ${renderTopicRepasaPanel(topic, { insideHouse: false })}
</div>`;
}

export function mountTopicRepasaPanel(scopeRoot, rerender, topic) {
  const scope = scopeRoot.matches?.('[data-repasa-scope]')
    ? scopeRoot
    : scopeRoot.querySelector('[data-repasa-scope]') || scopeRoot;

  const flash = scope.querySelector('.flash');
  let grading = false;
  const flip = () => {
    if (grading) return;
    playUiSfx('click');
    session.flipped = !session.flipped;
    flash?.classList.toggle('flipped', session.flipped);
    scope.querySelector('.grades')?.classList.toggle('show', session.flipped);
  };
  flash?.addEventListener('click', flip);

  function grade(q) {
    if (grading) return;
    const id = session.queue[session.idx];
    if (!id) return;
    grading = true;
    const prev = store.find('reviews', id);
    store.put('reviews', { id, ...sm2(prev, q) });
    store.logReview();
    playUiSfx(q < 3 ? 'bad' : 'ok');
    if (q < 3 && prev?.reps > 0) voiceForgot();
    session.done += 1;
    session.idx += 1;
    session.flipped = false;
    if (q < 3) session.queue.push(id);
    if (session.idx >= session.queue.length) toast('¡Mazo del tema repasado!');
    const shock = scope.querySelector('.shockwave');
    const col = GRADES.find((x) => x.q === q)?.c || 'var(--crimson)';
    if (shock && S.enabled && window.gsap) {
      shock.style.setProperty('--sw', col);
      window.gsap.fromTo(shock, { opacity: 0.95, scale: 0.88 }, {
        opacity: 0, scale: 1.12, duration: 0.32, ease: 'power2.out',
        onComplete: () => rerender({ keepScroll: true }),
      });
    } else if (shock && typeof shock.animate === 'function' && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      shock.style.setProperty('--sw', col);
      const anim = shock.animate(
        [{ opacity: 0.95, transform: 'scale(0.88)' }, { opacity: 0, transform: 'scale(1.12)' }],
        { duration: 280, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      );
      anim.onfinish = () => rerender({ keepScroll: true });
    } else {
      rerender({ keepScroll: true });
    }
  }

  const onKey = (e) => {
    if (!scope.isConnected || !scope.querySelector('.flash')) return;
    if (document.querySelector('.modal.open')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target?.closest?.('input, textarea, select, [contenteditable]')) return;

    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      flip();
    } else if (session.flipped && ['1', '2', '3', '4'].includes(e.key)) {
      e.preventDefault();
      grade(GRADES[Number(e.key) - 1].q);
    }
  };
  document.addEventListener('keydown', onKey);
  S.onCleanup(() => document.removeEventListener('keydown', onKey));

  scope.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('[data-repasa-tab]');
    if (tabBtn) {
      playUiSfx('click');
      activeTab = tabBtn.dataset.repasaTab;
      rerender({ keepScroll: true });
      return;
    }

    const gradeBtn = e.target.closest('[data-q]');
    if (gradeBtn) {
      grade(+gradeBtn.dataset.q);
      return;
    }

    const actBtn = e.target.closest('[data-repasa-act]');
    if (!actBtn) return;
    const act = actBtn.dataset.repasaAct;
    if (act === 'toggle-quotes') {
      showQuotes = !showQuotes;
      rerender({ keepScroll: true });
    } else if (act === 'restart-deck') {
      const cards = deck(topic.id);
      session.queue = cards.map((c) => c.id);
      session.idx = 0;
      session.flipped = false;
      rerender({ keepScroll: true });
    }
  });

  const filterInput = scope.querySelector('[data-filter-pts]');
  if (filterInput) {
    filterInput.addEventListener('input', (e) => {
      pointsFilter = e.target.value;
      rerender({ keepScroll: true });
    });
  }
}

export function mount(root, rerender) {
  const topic = TEMARIO_APRENDE.find((t) => t.id === activeTopicId) || TEMARIO_APRENDE.find((t) => t.id === 'piel') || TEMARIO_APRENDE[0];
  root.addEventListener('click', (e) => {
    const selTopic = e.target.closest('[data-repasa-topic]');
    if (selTopic) {
      playUiSfx('click');
      activeTopicId = selTopic.dataset.repasaTopic;
      rerender({ keepScroll: true });
    }
  });
  mountTopicRepasaPanel(root, rerender, topic);
  voiceReview(getTopicRepasaSummary(topic.id).dueCount, 5.2);
}
