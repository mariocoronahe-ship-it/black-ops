import { icon } from '../icons.js?v=20261122l';
import { store, getTopicDomainProgress } from '../store.js?v=20261122l';
import { TEMARIO_APRENDE } from '../data/temario_aprende.js?v=20261122l';
import { renderTopicRepasaPanel, mountTopicRepasaPanel, getTopicRepasaSummary, studyLinks } from './repasa.js?v=20261122l';
import { renderTopicJugarPanel, mountTopicJugarPanel, getTopicBlitzBank } from './juegos.js?v=20261122l';
import { playUiSfx } from '../fx/audio.js?v=20261122l';
import { esc, md, toast, renderCitationChips, extractCitations } from '../ui.js';
import * as S from '../scroll.js';

export const section = 'cuaderno';

let activeTopicId = 'piel';
let houseMode = 'leer'; // 'leer' | 'repasar' | 'jugar'
let activeTab = 'subbloques'; // 'ejecutivo' | 'perlas' | 'subbloques' | 'apuntes'
let activeSubblockId = 'sb-1';
let showAllSubblocks = false;
let searchQuery = '';
let activeNoteId = null;
let highlighterOn = false;
let activeCiteFull = null;

function syncHouseUrl(topicId, casa, subTab = null) {
  const qs = new URLSearchParams({ tema: topicId, casa });
  if (casa === 'leer' && subTab && subTab !== 'subbloques') qs.set('tab', subTab);
  const next = `#/aprende?${qs.toString()}`;
  if (location.hash !== next) {
    try { history.replaceState(null, '', next); } catch {}
  }
}

function applyUserHighlights(html = '', scopeKey = '') {
  if (!scopeKey || !html) return html;
  const phrases = store.getHighlights(scopeKey);
  if (!phrases.length) return html;
  let out = html;
  for (const phrase of phrases) {
    const escaped = esc(phrase).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    if (!escaped) continue;
    const rx = new RegExp(escaped, 'gi');
    const parts = out.split(/(<[^>]+>)/g);
    let markDepth = 0;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!part) continue;
      if (part.startsWith('<')) {
        if (/^<mark\b/i.test(part)) markDepth++;
        else if (/^<\/mark>/i.test(part) && markDepth > 0) markDepth--;
      } else if (markDepth === 0) {
        parts[i] = part.replace(rx, (m) => `<mark class="cuaderno-hl is-user-hl" data-user-hl="${esc(phrase)}" title="Clic para quitar resaltado">${m}</mark>`);
      }
    }
    out = parts.join('');
  }
  return out;
}

function stripLeadingHeading(markdown = '') {
  return String(markdown || '').replace(/^\s*#{1,3}\s+[^\n]+\n+/, '');
}

function richMd(src = '', scopeKey = '') {
  if (!src) return '';
  if (typeof src !== 'string') src = String(src);
  const lines = src.split('\n');
  const out = [];
  let inTable = false;
  let tableRows = [];
  const tables = [];

  const flushTable = () => {
    if (!tableRows.length) return;
    const cells = (r) => r.split('|').slice(1, -1).map((c) => c.trim());
    const headers = cells(tableRows[0]);
    const bodyRows = tableRows.slice(2).map(cells);
    tables.push(`<div class="table-wrap"><table class="calot-table">
      <thead><tr>${headers.map((h) => `<th>${mdInline(h)}</th>`).join('')}</tr></thead>
      <tbody>${bodyRows.map((r) => `<tr>${r.map((c) => `<td>${mdInline(c)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`);
    out.push('', `@@TABLA${tables.length - 1}@@`, '');
    tableRows = [];
    inTable = false;
  };

  for (const line of lines) {
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      inTable = true;
      tableRows.push(line.trim());
    } else {
      if (inTable) flushTable();
      out.push(line);
    }
  }
  if (inTable) flushTable();
  let html = md(out.join('\n'));
  tables.forEach((t, i) => { html = html.replace(`<p>@@TABLA${i}@@</p>`, () => t); });
  return applyUserHighlights(html, scopeKey);
}

function mdInline(s = '') {
  return renderCitationChips(
    esc(s)
      .replace(/==(.+?)==/g, '<mark class="cuaderno-hl">$1</mark>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
  );
}

const PEARL_STOPWORDS = new Set([
  'para', 'como', 'entre', 'sobre', 'desde', 'hasta', 'donde', 'cuando', 'tiene',
  'tienen', 'puede', 'pueden', 'debe', 'deben', 'todo', 'toda', 'todos', 'todas',
  'cada', 'este', 'esta', 'estos', 'estas', 'unos', 'unas', 'pero', 'porque',
  'ante', 'bajo', 'tras', 'solo', 'mas', 'menos', 'mayor', 'menor', 'caso', 'casos',
]);

function extractKeywords(text = '') {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 4 && !PEARL_STOPWORDS.has(w));
}

function dedupeCitationsByShort(cites = []) {
  const byShort = new Map();
  for (const c of cites || []) {
    if (!c || !c.short) continue;
    const prev = byShort.get(c.short);
    if (!prev) {
      byShort.set(c.short, { short: c.short, full: c.full || '', _parts: new Set(c.full ? [c.full] : []) });
    } else if (c.full && !prev._parts.has(c.full)) {
      prev._parts.add(c.full);
      prev.full = prev.full ? `${prev.full} · ${c.full}` : c.full;
    }
  }
  return Array.from(byShort.values(), ({ short, full }) => ({ short, full }));
}

function extractNotebookExtras(topic, currentSbIndex = 0, currentSb = null) {
  const allPearls = (topic.keyPoints || '')
    .split('\n')
    .filter((l) => /^\s*-\s/.test(l))
    .map((l) => l.replace(/^\s*-\s+/, '').trim())
    .filter(Boolean)
    .map((text, idx) => ({
      idx,
      text,
      html: mdInline(text),
      rot: idx % 2 === 0 ? '1.2deg' : '-1deg',
    }));

  const sheetPearls = [];
  if (allPearls.length) {
    if (currentSb) {
      const titleTokens = new Set(extractKeywords(currentSb.title || ''));
      const bodyTokens = new Set(extractKeywords(currentSb.markdown || ''));
      const ranked = allPearls
        .map((p) => {
          const words = extractKeywords(p.text);
          let score = 0;
          for (const w of words) {
            if (titleTokens.has(w)) score += 3;
            else if (bodyTokens.has(w)) score += 1;
          }
          return { p, score };
        })
        .sort((a, b) => b.score - a.score || a.p.idx - b.p.idx);

      if (ranked[0] && ranked[0].score > 0) {
        const picked = ranked.filter((r) => r.score > 0).slice(0, 2);
        if (picked.length < 2 && allPearls.length > 1) {
          const fallbackIdx = (currentSbIndex * 2) % allPearls.length;
          const fallback = allPearls[fallbackIdx] === picked[0].p
            ? allPearls[(fallbackIdx + 1) % allPearls.length]
            : allPearls[fallbackIdx];
          picked.push({ p: fallback, score: 0 });
        }
        picked.forEach((entry, i) => {
          sheetPearls.push({
            idx: entry.p.idx,
            text: entry.p.text,
            html: entry.p.html,
            rot: i === 0 ? '1.2deg' : '-1deg',
            matched: entry.score > 0,
          });
        });
      }
    }

    if (!sheetPearls.length) {
      const start = (currentSbIndex * 2) % allPearls.length;
      const count = Math.min(2, allPearls.length);
      for (let i = 0; i < count; i++) {
        const item = allPearls[(start + i) % allPearls.length];
        sheetPearls.push({
          idx: item.idx,
          text: item.text,
          html: item.html,
          rot: i === 0 ? '1.2deg' : '-1deg',
          matched: false,
        });
      }
    }
  }

  const rawSummary = topic.summary || '';
  const dm = rawSummary.match(/## Donde difieren[^\n]*\n([\s\S]*)$/);
  const difLines = dm
    ? dm[1].split('\n').filter((l) => /^\s*-\s/.test(l)).map((l) => l.replace(/^\s*-\s+/, '').trim()).slice(0, 2)
    : [];
  const difieren = difLines.length ? difLines.map((l) => `- ${l}`).join('\n') : '';
  const execSummary = rawSummary.replace(/\n##\s+Donde difieren[^\n]*[\s\S]*$/i, '').trim();

  const sheetCites = dedupeCitationsByShort(extractCitations(currentSb ? currentSb.markdown : execSummary));
  const execCites = dedupeCitationsByShort(extractCitations(execSummary));

  return { allPearls, sheetPearls, difieren, execSummary, sheetCites, execCites };
}

// Nombre corto de la hoja para el separador: sin «(NIVEL R2)» y en tipo oración
function sheetName(title = '') {
  const t = String(title).replace(/\s*\(nivel[^)]*\)\s*/i, '').replace(/^\d+\.\s*/, '').trim();
  return t === t.toUpperCase() ? t.charAt(0) + t.slice(1).toLowerCase() : t;
}

// Índice de la hoja: sus apartados «###» como saltos rápidos
function sheetToc(markdown = '') {
  const hs = String(markdown).split('\n').filter((l) => /^###\s+/.test(l)).map((l) => l.replace(/^###\s+/, '').replace(/\*\*/g, '').trim());
  if (hs.length < 3) return '';
  return `<nav class="sheet-toc" aria-label="En esta hoja"><span class="mono">En esta hoja</span>${hs.map((h, i) => `<button type="button" class="sheet-toc-item" data-toc-jump="${i}">${esc(h)}</button>`).join('')}</nav>`;
}

function renderMarginNotes({
  topic,
  pearls,
  difieren,
  cites,
  subblocksCount,
  allPearlsCount,
  userHlCount,
  hojaNum,
  mode = 'hoja',
}) {
  const citesToShow = dedupeCitationsByShort(cites).slice(0, 6);
  return `
  <aside class="cuaderno-margin-notes" aria-label="Perlas y referencias pegadas en la hoja">
    ${pearls.map((p, i) => `
      <div class="cuaderno-sticky${p.matched ? ' is-context' : ''}" style="--rot:${esc(p.rot)}">
        <div class="cuaderno-sticky-kicker mono">
          ${icon('flame')} ${mode === 'ejecutivo' ? 'PERLA CLAVE' : p.matched && hojaNum ? `PERLA EN HOJA ${hojaNum}` : `PERLA ${String((p.idx ?? i) + 1).padStart(2, '0')}`}
        </div>
        <div class="cuaderno-sticky-body">${p.html}</div>
      </div>
    `).join('')}

    ${difieren ? `
      <div class="cuaderno-difieren">
        <div class="cuaderno-difieren-head mono">${icon('sparkle')} LOS LIBROS DIFIEREN</div>
        <div class="cuaderno-difieren-body prose">${richMd(difieren)}</div>
      </div>
    ` : ''}

    ${citesToShow.length ? `
      <div class="cuaderno-sources-box">
        <div class="cuaderno-pinned-head mono">${mode === 'ejecutivo' ? 'FUENTES DEL RESUMEN' : 'FUENTES DE ESTA HOJA'}</div>
        <div class="cuaderno-sources-list">
          ${citesToShow.map((c) => `
            <button type="button" class="cite-chip" data-cite-full="${esc(c.full)}" title="${esc(c.full)}">${esc(c.short)}</button>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div class="cuaderno-pinned">
      <div class="cuaderno-pinned-head mono">RECURSOS RELACIONADOS</div>
      ${studyLinks(topic).length ? `
        <ul class="cuaderno-pinned-list">
          ${studyLinks(topic).slice(0, 3).map((lr) => `
            <li><a href="#/recursos?id=${encodeURIComponent(lr.id)}&from=aprende:${encodeURIComponent(topic.id)}">${esc(lr.title)} →</a></li>
          `).join('')}
        </ul>
      ` : `<p class="cuaderno-pinned-meta mono muted">${esc(topic.code)} · ${subblocksCount} apartados · ${allPearlsCount} perlas</p>`}
      ${userHlCount ? `<p class="cuaderno-pinned-meta mono">${userHlCount} resaltado${userHlCount > 1 ? 's' : ''} guardado${userHlCount > 1 ? 's' : ''}</p>` : ''}
    </div>
  </aside>`;
}

function renderCuadernoMissesPanel(topic) {
  const allMissed = store.getMissedQuestions() || [];
  const missedList = [
    ...allMissed.filter((m) => m.topicId === topic.id),
    ...allMissed.filter((m) => m.topicId !== topic.id),
  ];
  const hasPending = missedList.some((m) => !m.savedToNotes);

  return `
    <section class="cuaderno-misses-panel" aria-label="Repaso de errores · Lo que fallaste">
      <div class="cuaderno-miss-head">
        <span class="mono aprende-sb-num">REPASO DE ERRORES · LO QUE FALLASTE (${missedList.length})</span>
        ${hasPending ? `
          <button type="button" class="btn btn-sm btn-glow" data-act="misses-all-to-note">${icon('plus')} Pasar pendientes a apuntes</button>
        ` : ''}
      </div>
      ${!missedList.length ? `
        <div class="cuaderno-misses-empty">
          <p class="muted">Los reactivos que falles en Blitz aparecerán aquí automáticamente para pasarlos a tarjetas SM-2.</p>
          <button type="button" class="btn btn-sm btn-metal" data-casa="jugar">${icon('bolt')} Practicar en Blitz →</button>
        </div>
      ` : `
        <div class="cuaderno-misses-list">
          ${missedList.map((m) => `
            <div class="cuaderno-miss-card${m.savedToNotes ? ' is-saved' : ''}">
              <div class="cuaderno-miss-meta">
                <span class="chip">${esc(m.topicTitle || m.topicId)}</span>
                ${m.savedToNotes ? `<span class="chip is-saved mono">✓ En apuntes</span>` : ''}
              </div>
              <p class="cuaderno-miss-q"><strong>${esc(m.q)}</strong></p>
              <p class="cuaderno-miss-right">✓ ${esc(m.right)}</p>
              ${m.why ? `<p class="cuaderno-miss-why muted">${esc(m.why)}</p>` : ''}
              <div class="cuaderno-miss-acts">
                ${!m.savedToNotes ? `
                  <button type="button" class="btn btn-sm btn-glow" data-act="miss-to-note" data-miss-id="${esc(m.id)}">${icon('plus')} Pasar a nota SM-2</button>
                ` : ''}
                <button type="button" class="btn btn-sm btn-ghost" data-act="miss-dismiss" data-miss-id="${esc(m.id)}">Ya lo domino</button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </section>
  `;
}

export function render(params = {}) {
  if (params.tema && TEMARIO_APRENDE.some((t) => t.id === params.tema)) {
    activeTopicId = params.tema;
  }
  if (params.sb) {
    // Liga directa a una hoja (p. ej. desde «Mis errores del examen»)
    activeSubblockId = String(params.sb);
    houseMode = 'leer';
    activeTab = 'subbloques';
  }
  if (params.casa && ['leer', 'repasar', 'jugar'].includes(params.casa)) {
    houseMode = params.casa;
  }
  if (params.tab) {
    if (['leer', 'repasar', 'jugar'].includes(params.tab)) {
      houseMode = params.tab;
    } else if (params.tab === 'completo') {
      houseMode = 'leer';
      activeTab = 'subbloques';
    } else if (['puntos', 'clave', 'puntos-clave'].includes(params.tab)) {
      houseMode = 'leer';
      activeTab = 'perlas';
    } else if (['subbloques', 'ejecutivo', 'perlas', 'apuntes'].includes(params.tab)) {
      houseMode = 'leer';
      activeTab = params.tab;
    }
  }
  if (params.new === '1') {
    houseMode = 'leer';
    activeTab = 'apuntes';
  }

  const topic = TEMARIO_APRENDE.find((t) => t.id === activeTopicId) || TEMARIO_APRENDE.find((t) => t.id === 'piel') || TEMARIO_APRENDE[0];
  const subblocks = topic.subblocks || [];
  if (!subblocks.some((sb) => sb.id === activeSubblockId)) {
    activeSubblockId = subblocks[0]?.id || 'sb-1';
  }

  const domainList = getTopicDomainProgress();
  const domainMap = new Map(domainList.map((d) => [d.id, d]));
  const topicDomain = domainMap.get(topic.id) || { leerPct: 0, repasarPct: 0, jugarPct: 0, pct: 0 };

  const seenObj = store.state.seenTopics?.[topic.id] || { seen: false, subblocks: {} };
  const readSubblocksCount = subblocks.filter((sb) => seenObj.subblocks?.[sb.id]).length;
  const pctRead = subblocks.length ? Math.round((readSubblocksCount / subblocks.length) * 100) : (seenObj.seen ? 100 : 0);
  const isSeen = Boolean(seenObj.seen);

  const totalTopicsSeen = TEMARIO_APRENDE.filter((t) => store.isTopicSeen(t.id)).length;
  const currentSbIndex = Math.max(0, subblocks.findIndex((s) => s.id === activeSubblockId));
  const currentSb = subblocks[currentSbIndex] || subblocks[0];

  const filteredSubblocks = searchQuery.trim()
    ? subblocks.filter((sb) => (sb.title + ' ' + sb.markdown).toLowerCase().includes(searchQuery.toLowerCase()))
    : subblocks;

  // Solo los apuntes de este tema (los creados aquí o los de fallos del mismo tema)
  const notes = store.all('notes').filter((n) => n.topicId === topic.id || String(n.title || '').endsWith(`· ${topic.title}`));
  if (!notes.some((n) => n.id === activeNoteId)) activeNoteId = notes[0]?.id || null;
  const currentNote = notes.find((n) => n.id === activeNoteId) || notes[0] || null;

  const repSummary = getTopicRepasaSummary(topic.id);
  const topicBank = getTopicBlitzBank(topic.id);

  const isLight = (store.state.settings?.theme || 'dark') === 'light';
  const { allPearls, sheetPearls, difieren, execSummary, sheetCites, execCites } = extractNotebookExtras(topic, currentSbIndex, currentSb);
  const execMin = Math.max(2, Math.round((execSummary || '').split(/\s+/).filter(Boolean).length / 220));
  const fullMin = topic.readTimeMin || Math.max(4, subblocks.reduce((a, s) => a + (s.readTimeMin || 3), 0));
  const remainingMin = Math.max(0, subblocks.reduce((a, s) => a + (seenObj.subblocks?.[s.id] ? 0 : (s.readTimeMin || 3)), 0));
  const currentHojaNum = String(currentSbIndex + 1).padStart(2, '0');
  const activeHlScope = activeTab === 'subbloques' && currentSb && !showAllSubblocks && !searchQuery.trim()
    ? `${topic.id}:${currentSb.id}`
    : `${topic.id}:${activeTab}`;
  const userHlCount = store.getHighlights(activeHlScope).length;

  return `
<div class="aprende-view">
  <div class="tema-house-shell">
    <!-- RIEL IZQUIERDO: TEMAS CON SU AVANCE -->
    <aside class="tema-rail" aria-label="Temas de Resúmenes">
      <div class="tema-rail-head">
        <div>
          <a class="mono tema-rail-kicker" href="#/resumenes" style="text-decoration:none">← TODOS LOS RESÚMENES</a>
          <span class="mono muted" style="display:block;font-size:11px">Resúmenes completos R1–R4 · temario HGR 72</span>
          <span class="mono muted tema-rail-count">${totalTopicsSeen}/${TEMARIO_APRENDE.length} vistos</span>
        </div>
        <a class="mono tema-rail-pdf" href="atlas/temario-cirugia.pdf" target="_blank" rel="noopener" title="Programa Operativo PDF">${icon('book')} PDF ↗</a>
      </div>

      <div class="tema-rail-list" role="listbox" aria-label="Temas">
        ${TEMARIO_APRENDE.map((t, i) => {
          const active = t.id === topic.id;
          const d = domainMap.get(t.id) || { pct: 0, seen: false };
          const grp = t.year === 'Transversal' ? 'Bloques transversales' : t.year;
          const prevGrp = i ? (TEMARIO_APRENDE[i - 1].year === 'Transversal' ? 'Bloques transversales' : TEMARIO_APRENDE[i - 1].year) : null;
          const head = grp !== prevGrp ? `<div class="mono tema-rail-group" role="presentation">${esc(grp)}</div>` : '';
          return `${head}
          <button
            type="button"
            class="tema-rail-item${active ? ' is-active' : ''}"
            data-select-topic="${esc(t.id)}"
            role="option"
            aria-selected="${active ? 'true' : 'false'}"
            title="${esc(t.num)}. ${esc(t.title)} · Dominio ${d.pct}%"
          >
            <span class="tema-rail-num">${esc(t.num)}</span>
            <span class="tema-rail-name">${esc(t.title)}</span>
            <span class="tema-ring${d.pct > 0 ? ' is-lit' : ''}" style="--p:${d.pct}%">
              <span>${d.pct}%</span>
            </span>
          </button>`;
        }).join('')}
      </div>
    </aside>

    <!-- CASA DEL TEMA (1b): LEER / REPASAR / JUGAR DENTRO DE CADA TEMA -->
    <section class="tema-house">
      <article class="card tema-house-head">
        <div class="tema-house-head-top">
          <div class="tema-house-copy">
            <div class="tema-house-badges">
              <span class="chip chip-accent">${esc(topic.code)}</span>
              <span class="mono muted">${topic.subblocks.length} subbloques · ~${topic.readTimeMin} min</span>
              ${isSeen ? '<span class="chip chip-done">✓ Visto</span>' : ''}
            </div>
            <h1>${esc(topic.num)}. ${esc(topic.title)}</h1>
            <p class="muted">${esc(topic.subtitle)}</p>
          </div>

          <div class="tema-house-progress">
            <button type="button" class="btn btn-sm ${isSeen ? 'btn-ghost' : 'btn-glow'}" data-act="toggle-topic-seen">
              ${icon('check')} ${isSeen ? 'Tema visto' : 'Marcar como visto'}
            </button>
            <div class="tema-domain-pills">
              <span class="chip">L ${topicDomain.leerPct}%</span>
              <span class="chip">R ${topicDomain.repasarPct}%</span>
              <span class="chip">J ${topicDomain.jugarPct}%</span>
              <span class="chip chip-accent">Global ${topicDomain.pct}%</span>
            </div>
            <div class="tema-sb-bar">
              <div class="tema-sb-bar-lbl">
                <span class="mono muted">Subbloques leídos</span>
                <span class="mono">${readSubblocksCount}/${subblocks.length} (${pctRead}%)</span>
              </div>
              <div class="progress"><span style="--p:${pctRead}%"></span></div>
            </div>
          </div>
        </div>

        ${studyLinks(topic).length ? `
        <div class="tema-linked-resources">
          <span class="mono muted">${icon('cube')} RECURSOS 3D, ALGORITMOS Y ESCALAS DEL TEMA:</span>
          <div class="tema-linked-row">
            ${studyLinks(topic).map((lr) => `
              <a href="#/recursos?id=${encodeURIComponent(lr.id)}&from=aprende:${encodeURIComponent(topic.id)}" class="glass tema-res-pill">
                <span class="chip">${esc(lr.badge || lr.typeLabel)}</span>
                <strong>${esc(lr.title)}</strong>
                <span class="mono">→</span>
              </a>
            `).join('')}
          </div>
        </div>` : ''}

        <!-- PESTAÑAS PRINCIPALES DE LA CASA DEL TEMA: LEER / REPASAR / JUGAR -->
        <nav class="casa-tabs" role="tablist" aria-label="Fases dentro del tema">
          <button type="button" role="tab" aria-selected="${houseMode === 'leer'}" class="casa-tab${houseMode === 'leer' ? ' is-on' : ''}" data-casa="leer">
            ${icon('notebook')}
            <span>Leer</span>
            <em class="casa-badge">${readSubblocksCount}/${subblocks.length}</em>
          </button>
          <button type="button" role="tab" aria-selected="${houseMode === 'repasar'}" class="casa-tab${houseMode === 'repasar' ? ' is-on' : ''}" data-casa="repasar">
            ${icon('brain')}
            <span>Repasar</span>
            <em class="casa-badge">${repSummary.dueCount || repSummary.cardsTotal}</em>
          </button>
          <button type="button" role="tab" aria-selected="${houseMode === 'jugar'}" class="casa-tab${houseMode === 'jugar' ? ' is-on' : ''}" data-casa="jugar">
            ${icon('gamepad')}
            <span>Jugar</span>
            <em class="casa-badge">${topicBank.length}</em>
          </button>
        </nav>
      </article>

      <!-- CUERPO DE LA PESTAÑA ACTIVA DENTRO DEL TEMA -->
      <div class="tema-house-body" id="tema-house-body">
        ${houseMode === 'leer' ? `
          <div class="cuaderno-stage${highlighterOn ? ' is-hl-mode' : ''}">
            <div class="cuaderno-paper">

              <!-- BARRA FINA DE PROGRESO DE LECTURA DEL MÓDULO (2a) -->
              <div class="reader-progress" aria-label="Progreso de lectura del módulo">
                <div class="reader-progress-track">
                  <div class="reader-progress-fill" style="width:${pctRead}%"></div>
                </div>
                <span class="reader-progress-meta mono">${pctRead}% leído · ${readSubblocksCount}/${subblocks.length} apartados · ~${remainingMin}m rest.</span>
              </div>

              <!-- BARRA SUPERIOR EDITORIAL: SELECTOR DE PROFUNDIDAD + APUNTES + RESALTADOR + TEMA -->
              <div class="cuaderno-top-bar">
                <div class="reader-depth-well" role="tablist" aria-label="Nivel de profundidad de lectura">
                  <button type="button" role="tab" aria-selected="${activeTab === 'ejecutivo'}" class="reader-depth-btn${activeTab === 'ejecutivo' ? ' is-on' : ''}" data-tab="ejecutivo" title="Resumen ejecutivo del tema">
                    ${icon('sparkle')}
                    <span>Ejecutivo</span>
                    <em class="mono">~${execMin}m</em>
                  </button>
                  <button type="button" role="tab" aria-selected="${activeTab === 'perlas'}" class="reader-depth-btn${activeTab === 'perlas' ? ' is-on' : ''}" data-tab="perlas" title="Perlas quirúrgicas y puntos clave">
                    ${icon('flame')}
                    <span>Puntos clave</span>
                    <em class="mono">${allPearls.length}</em>
                  </button>
                  <button type="button" role="tab" aria-selected="${activeTab === 'subbloques'}" class="reader-depth-btn${activeTab === 'subbloques' ? ' is-on' : ''}" data-tab="subbloques" title="Lectura completa por subtemas">
                    ${icon('layers')}
                    <span>Completo</span>
                    <em class="mono">~${fullMin}m</em>
                  </button>
                </div>

                <div class="cuaderno-top-actions">
                  <button
                    type="button"
                    class="btn btn-sm ${activeTab === 'apuntes' ? 'btn-glow' : 'btn-metal'} cuaderno-apuntes-btn"
                    data-tab="apuntes"
                    aria-pressed="${activeTab === 'apuntes' ? 'true' : 'false'}"
                    title="Abrir mis apuntes del módulo"
                  >
                    ${icon('notebook')} <span>Apuntes</span> <em class="mono">(${notes.length})</em>
                  </button>

                  ${activeTab === 'subbloques' || activeTab === 'ejecutivo' ? `
                  <button
                    type="button"
                    class="btn btn-sm ${highlighterOn ? 'btn-glow' : 'btn-metal'} cuaderno-hl-btn"
                    data-act="toggle-highlighter"
                    aria-pressed="${highlighterOn ? 'true' : 'false'}"
                    title="Activa el resaltador para marcar frases o párrafos clave"
                  >
                    ${icon('edit')} ${highlighterOn ? 'Resaltador activo' : 'Resaltador'}${userHlCount ? ` <span class="mono">(${userHlCount})</span>` : ''}
                  </button>` : ''}

                  <button
                    type="button"
                    class="btn btn-sm btn-metal cuaderno-theme-btn"
                    data-act="toggle-theme"
                    aria-label="Cambiar entre modo claro y oscuro"
                    title="Cambiar entre modo claro y oscuro"
                  >
                    <span class="theme-glyph" data-theme-glyph aria-hidden="true">${isLight ? '&#9728;' : '&#9790;'}</span>
                    <span class="cuaderno-theme-text" data-theme-label>${isLight ? 'Modo claro' : 'Modo oscuro'}</span>
                  </button>
                </div>
              </div>

              ${activeTab === 'subbloques' ? `
              <!-- FILTRO + BOTÓN CORRIDO -->
              <div class="aprende-leer-tools cuaderno-leer-tools">
                <input class="input aprende-search-sb" type="search" data-search-sb placeholder="Buscar dentro del tema…" value="${esc(searchQuery)}">
                <button type="button" class="btn btn-sm ${showAllSubblocks ? 'btn-glow' : 'btn-metal'}" data-act="toggle-all-sb">
                  ${showAllSubblocks ? 'Ver por apartado' : 'Ver todo corrido'}
                </button>
              </div>

              <!-- SEPARADORES DE HOJAS NUMERADOS -->
              <div class="cuaderno-hojas-bar" role="navigation" aria-label="Separadores de hojas del módulo">
                ${subblocks.map((sb, idx) => {
                  const isCurr = !showAllSubblocks && sb.id === currentSb?.id;
                  const sbDone = store.isSubblockRead(topic.id, sb.id);
                  const hojaNum = String(idx + 1).padStart(2, '0');
                  return `
                  <button
                    type="button"
                    class="cuaderno-hoja-tab${isCurr ? ' is-on' : ''}${sbDone ? ' is-done' : ''}"
                    data-select-sb="${esc(sb.id)}"
                    title="${esc(sb.title)}"
                  >
                    <span class="mono">${hojaNum}</span><span class="cuaderno-hoja-name">${esc(sheetName(sb.title))}</span>
                    ${sbDone ? `<span class="cuaderno-hoja-check" aria-label="Leída">✓</span>` : ''}
                  </button>`;
                }).join('')}
              </div>` : ''}

              ${activeTab === 'subbloques' ? `
                ${showAllSubblocks || searchQuery.trim() ? `
                  <div class="cuaderno-sheet-grid">
                    <div class="cuaderno-main-col">
                      ${filteredSubblocks.map((sb) => {
                        const sbIdx = subblocks.findIndex((x) => x.id === sb.id);
                        const hojaNum = String((sbIdx >= 0 ? sbIdx : 0) + 1).padStart(2, '0');
                        const sbDone = store.isSubblockRead(topic.id, sb.id);
                        const sbScope = `${topic.id}:${sb.id}`;
                        return `
                        <article class="cuaderno-sheet-block" id="subblock-${esc(sb.id)}">
                          <span class="cuaderno-margin-num mono" aria-hidden="true">${hojaNum}</span>
                          <div class="subblock-head">
                            <div>
                              <span class="mono aprende-sb-num">HOJA ${hojaNum} DE ${String(subblocks.length).padStart(2, '0')} · SUBBLOQUE ${esc(sb.num)} · ~${sb.readTimeMin} MIN</span>
                              <h3>${esc(sb.title)}</h3>
                            </div>
                            <button type="button" class="btn btn-sm ${sbDone ? 'btn-metal' : 'btn-glow'}" data-toggle-sb-read="${esc(sb.id)}">
                              ${icon('check')} ${sbDone ? 'Leído ✓' : 'Marcar leído'}
                            </button>
                          </div>
                          <div class="prose aprende-prose cuaderno-prose" data-hl-scope="${esc(sbScope)}">
                            ${richMd(stripLeadingHeading(sb.markdown), sbScope)}
                          </div>
                        </article>`;
                      }).join('') || '<article class="cuaderno-sheet-block"><p class="muted">No se encontraron hojas con ese término.</p></article>'}
                    </div>

                    ${renderMarginNotes({
                      topic,
                      pearls: sheetPearls,
                      difieren,
                      cites: sheetCites,
                      subblocksCount: subblocks.length,
                      allPearlsCount: allPearls.length,
                      userHlCount,
                      hojaNum: currentHojaNum,
                      mode: 'hoja',
                    })}
                  </div>
                ` : (
                  currentSb ? `
                  <div class="cuaderno-sheet-grid">
                    <div class="cuaderno-main-col">
                      <article class="cuaderno-sheet-block">
                        <span class="cuaderno-margin-num mono" aria-hidden="true">${currentHojaNum}</span>
                        <div class="subblock-head">
                          <div>
                            <span class="mono aprende-sb-num">HOJA ${currentHojaNum} DE ${String(subblocks.length).padStart(2, '0')} · SUBBLOQUE ${esc(currentSb.num)} · ${currentSb.wordCount} PALABRAS (~${currentSb.readTimeMin} MIN)</span>
                            <h3>${esc(currentSb.title)}</h3>
                          </div>
                          <button type="button" class="btn btn-sm ${store.isSubblockRead(topic.id, currentSb.id) ? 'btn-metal' : 'btn-glow'}" data-toggle-sb-read="${esc(currentSb.id)}">
                            ${icon('check')} ${store.isSubblockRead(topic.id, currentSb.id) ? 'Leído ✓' : 'Marcar leído'}
                          </button>
                        </div>

                        ${highlighterOn ? `
                        <p class="cuaderno-hl-hint mono">
                          Selecciona cualquier frase o haz clic sobre un párrafo para resaltarlo en carmesí. Haz clic en un resaltado propio para quitarlo.
                        </p>` : ''}

                        ${sheetToc(currentSb.markdown)}
                        <div class="prose aprende-prose cuaderno-prose" data-hl-scope="${esc(`${topic.id}:${currentSb.id}`)}">
                          ${richMd(stripLeadingHeading(currentSb.markdown), `${topic.id}:${currentSb.id}`)}
                        </div>

                        <div class="subblock-foot">
                          ${currentSbIndex > 0 ? `
                            <button type="button" class="btn btn-metal" data-select-sb="${esc(subblocks[currentSbIndex - 1].id)}">
                              ← Hoja ${String(currentSbIndex).padStart(2, '0')}: ${esc(subblocks[currentSbIndex - 1].num)}
                            </button>` : '<span></span>'}

                          ${currentSbIndex < subblocks.length - 1 ? `
                            <button type="button" class="btn btn-glow" data-next-sb="${esc(subblocks[currentSbIndex + 1].id)}" data-curr-sb="${esc(currentSb.id)}">
                              Leído y avanzar a Hoja ${String(currentSbIndex + 2).padStart(2, '0')} →
                            </button>` : `
                            <button type="button" class="btn btn-glow" data-act="finish-topic">
                              ${icon('check')} Concluir y pasar a Repasar →
                            </button>`}
                        </div>
                      </article>
                    </div>

                    ${renderMarginNotes({
                      topic,
                      pearls: sheetPearls,
                      difieren,
                      cites: sheetCites,
                      subblocksCount: subblocks.length,
                      allPearlsCount: allPearls.length,
                      userHlCount,
                      hojaNum: currentHojaNum,
                      mode: 'hoja',
                    })}
                  </div>` : ''
                )}
              ` : activeTab === 'ejecutivo' ? `
                <div class="cuaderno-sheet-grid">
                  <div class="cuaderno-main-col">
                    <article class="cuaderno-sheet-block">
                      <span class="cuaderno-margin-num mono" aria-hidden="true">EJ</span>
                      <div class="subblock-head">
                        <div>
                          <span class="mono aprende-sb-num">NIVEL EJECUTIVO · SÍNTESIS DE ALTA DENSIDAD (~${execMin} MIN)</span>
                          <h3>Resumen Ejecutivo · ${esc(topic.title)}</h3>
                        </div>
                        <button type="button" data-casa="repasar" class="btn btn-sm btn-glow">${icon('brain')} Pasar a Repasar →</button>
                      </div>
                      <div class="prose aprende-prose cuaderno-prose" data-hl-scope="${esc(`${topic.id}:ejecutivo`)}">
                        ${richMd(execSummary, `${topic.id}:ejecutivo`)}
                      </div>
                      <div class="subblock-foot">
                        <button type="button" class="btn btn-metal" data-tab="perlas">${icon('flame')} Ver Puntos clave (${allPearls.length})</button>
                        <button type="button" class="btn btn-glow" data-tab="subbloques">Continuar en Completo · Hoja ${currentHojaNum} →</button>
                      </div>
                    </article>
                  </div>

                  ${renderMarginNotes({
                    topic,
                    pearls: allPearls.slice(0, 2),
                    difieren,
                    cites: execCites,
                    subblocksCount: subblocks.length,
                    allPearlsCount: allPearls.length,
                    userHlCount,
                    hojaNum: 'EJ',
                    mode: 'ejecutivo',
                  })}
                </div>
              ` : activeTab === 'perlas' ? `
                <div class="cuaderno-perlas-wrap">
                    <div class="subblock-head">
                      <div>
                        <span class="mono aprende-sb-num">PUNTOS CLAVE · PERLAS DE ALTO RENDIMIENTO</span>
                        <h3>Puntos clave y perlas · ${esc(topic.title)}</h3>
                      </div>
                    <div class="cuaderno-perlas-actions">
                      <button type="button" data-tab="subbloques" class="btn btn-sm btn-metal">Volver a Hoja ${currentHojaNum} →</button>
                      <button type="button" data-casa="repasar" class="btn btn-sm btn-glow">${icon('brain')} Abrir Repasar →</button>
                    </div>
                  </div>

                  <ul class="perlas-quick-list">
                    ${allPearls.map((p, idx) => `
                      <li>
                        <span class="mono perlas-quick-idx">${String(idx + 1).padStart(2, '0')}</span>
                        <div>${p.html}</div>
                      </li>
                    `).join('')}
                  </ul>

                  <div class="cuaderno-sticky-wall">
                    ${allPearls.map((p, idx) => `
                      <div class="cuaderno-sticky is-wall" style="--rot:${esc(idx % 2 === 0 ? '-1.1deg' : '1.4deg')}">
                        <div class="cuaderno-sticky-kicker mono">${icon('flame')} PERLA ${String(idx + 1).padStart(2, '0')}</div>
                        <div class="cuaderno-sticky-body">${p.html}</div>
                      </div>
                    `).join('')}

                    <div class="cuaderno-pinned is-wall">
                      <div class="cuaderno-pinned-head mono">SUBTEMAS OFICIALES DEL MÓDULO</div>
                      <ul class="aprende-subtopics-list">
                        ${(topic.subtopics || []).map((st) => `<li><strong>${esc(st)}</strong></li>`).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
              ` : `
                <div class="aprende-notes-grid cuaderno-notes-grid">
                  <aside class="cuaderno-notes-side">
                    <div class="aprende-notes-head">
                      <span class="mono">MIS APUNTES (${notes.length})</span>
                      <button type="button" class="btn btn-sm btn-glow" data-act="new-note">${icon('plus')} Nueva</button>
                    </div>
                    <div class="aprende-notes-list">
                      ${notes.map((n) => `
                        <button type="button" data-select-note="${esc(n.id)}" class="glass aprende-note-item${n.id === currentNote?.id ? ' is-curr' : ''}">
                          <span class="chip">${esc(n.tag || 'Nota')}</span>
                          <strong>${esc(n.title)}</strong>
                        </button>
                      `).join('')}
                    </div>
                  </aside>
                  <article class="cuaderno-sheet-block">
                    ${currentNote ? `
                      <div class="aprende-note-editor-head">
                        <input class="input" data-note-title value="${esc(currentNote.title)}" placeholder="Título del apunte…">
                        <button type="button" class="btn btn-sm btn-metal" data-act="add-highlight-syntax">${icon('edit')} + Resaltar ==…==</button>
                        <button type="button" class="btn btn-sm btn-metal" data-act="add-flashcard-line">${icon('plus')} + Tarjeta SM-2</button>
                        <button type="button" class="btn btn-sm btn-ghost danger" data-act="del-note">${icon('trash')} Eliminar</button>
                      </div>
                      <textarea class="input aprende-note-textarea" data-note-body rows="10" placeholder="Escribe tus apuntes en Markdown, usa ==frase== para resaltar o agrega ?? pregunta :: respuesta…">${esc(currentNote.body)}</textarea>
                      <div class="aprende-note-preview-wrap">
                        <p class="mono muted">VISTA PREVIA:</p>
                        <div class="prose cuaderno-prose" data-note-preview>${richMd(currentNote.body, `${topic.id}:apuntes`)}</div>
                      </div>
                    ` : '<p class="muted">Crea una nota para empezar.</p>'}
                  </article>
                </div>
                ${renderCuadernoMissesPanel(topic)}
              `}

              <div class="cuaderno-page-stamp mono" aria-hidden="true">
                ${activeTab === 'subbloques'
                  ? `HOJA ${currentHojaNum} / ${String(subblocks.length).padStart(2, '0')} · ${esc(topic.code)}`
                  : `${esc(activeTab.toUpperCase())} · ${esc(topic.code)}`}
              </div>
            </div>

            ${activeCiteFull ? `
              <div class="cite-popover" role="status" aria-live="polite">
                <div class="cite-popover-head">
                  <span class="mono cite-popover-badge">${esc(activeCiteFull.short)}</span>
                  <button type="button" class="cite-popover-close" data-act="close-cite" aria-label="Cerrar referencia">&times;</button>
                </div>
                <p class="cite-popover-text">${esc(activeCiteFull.full)}</p>
              </div>
            ` : ''}
          </div>
        ` : houseMode === 'repasar' ? renderTopicRepasaPanel(topic, { insideHouse: true }) : renderTopicJugarPanel(topic)}
      </div>
    </section>
  </div>
</div>`;
}

export function mount(root, rerender) {
  const topic = TEMARIO_APRENDE.find((t) => t.id === activeTopicId) || TEMARIO_APRENDE.find((t) => t.id === 'piel') || TEMARIO_APRENDE[0];
  const totalSb = (topic.subblocks || []).length;

  root.addEventListener('click', (e) => {
    const selTopic = e.target.closest('[data-select-topic]');
    if (selTopic) {
      playUiSfx('click');
      activeTopicId = selTopic.dataset.selectTopic;
      const newTopic = TEMARIO_APRENDE.find((t) => t.id === activeTopicId) || TEMARIO_APRENDE.find((t) => t.id === 'piel') || TEMARIO_APRENDE[0];
      activeSubblockId = newTopic.subblocks?.[0]?.id || 'sb-1';
      activeCiteFull = null;
      if (houseMode === 'leer' && activeTab === 'apuntes') activeTab = 'subbloques';
      syncHouseUrl(activeTopicId, houseMode, activeTab);
      rerender({ keepScroll: false });
      return;
    }

    const casaBtn = e.target.closest('[data-casa]');
    if (casaBtn) {
      playUiSfx('click');
      houseMode = casaBtn.dataset.casa;
      activeCiteFull = null;
      syncHouseUrl(topic.id, houseMode, activeTab);
      rerender({ keepScroll: true });
      return;
    }

    const tabBtn = e.target.closest('[data-tab]');
    if (tabBtn) {
      playUiSfx('click');
      activeTab = tabBtn.dataset.tab;
      activeCiteFull = null;
      syncHouseUrl(topic.id, 'leer', activeTab);
      rerender({ keepScroll: true });
      return;
    }

    const toc = e.target.closest('[data-toc-jump]');
    if (toc) {
      const h = root.querySelectorAll('.cuaderno-main-col .cuaderno-prose h4')[Number(toc.dataset.tocJump)];
      if (h && S.lenis) S.lenis.scrollTo(h, { offset: -96 });
      else h?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const selSb = e.target.closest('[data-select-sb]');
    if (selSb) {
      playUiSfx('click');
      activeSubblockId = selSb.dataset.selectSb;
      showAllSubblocks = false;
      activeCiteFull = null;
      rerender({ keepScroll: true });
      return;
    }

    const citeBtn = e.target.closest('.cite-chip[data-cite-full]');
    if (citeBtn) {
      e.preventDefault();
      e.stopPropagation();
      playUiSfx('click');
      const full = citeBtn.dataset.citeFull || citeBtn.getAttribute('title') || '';
      const short = (citeBtn.textContent || '').trim();
      if (activeCiteFull && activeCiteFull.full === full) {
        activeCiteFull = null;
      } else {
        activeCiteFull = { short, full };
      }
      rerender({ keepScroll: true });
      return;
    }

    const nextSb = e.target.closest('[data-next-sb]');
    if (nextSb) {
      const currId = nextSb.dataset.currSb;
      if (currId && !store.isSubblockRead(topic.id, currId)) {
        store.toggleSubblockRead(topic.id, currId, totalSb);
      }
      playUiSfx('ok');
      activeSubblockId = nextSb.dataset.nextSb;
      activeCiteFull = null;
      rerender({ keepScroll: false });
      return;
    }

    const toggleSb = e.target.closest('[data-toggle-sb-read]');
    if (toggleSb) {
      e.stopPropagation();
      const sbId = toggleSb.dataset.toggleSbRead;
      const isNowRead = store.toggleSubblockRead(topic.id, sbId, totalSb);
      playUiSfx(isNowRead ? 'ok' : 'click');
      toast(isNowRead ? 'Subbloque marcado como leído ✓' : 'Subbloque desmarcado');
      rerender({ keepScroll: true });
      return;
    }

    const selNote = e.target.closest('[data-select-note]');
    if (selNote) {
      activeNoteId = selNote.dataset.selectNote;
      rerender({ keepScroll: true });
      return;
    }

    const actBtn = e.target.closest('[data-act]');
    if (!actBtn) return;
    const act = actBtn.dataset.act;

    if (act === 'close-cite') {
      activeCiteFull = null;
      rerender({ keepScroll: true });
    } else if (act === 'toggle-topic-seen') {
      const nowSeen = store.toggleTopicSeen(topic.id);
      playUiSfx(nowSeen ? 'ok' : 'click');
      toast(nowSeen ? `Tema "${topic.title}" marcado como Visto ✓` : 'Tema desmarcado como visto');
      rerender({ keepScroll: true });
    } else if (act === 'toggle-all-sb') {
      showAllSubblocks = !showAllSubblocks;
      rerender({ keepScroll: true });
    } else if (act === 'finish-topic') {
      store.setTopicSeen(topic.id, true);
      playUiSfx('ok');
      houseMode = 'repasar';
      syncHouseUrl(topic.id, 'repasar');
      toast(`¡Tema "${topic.title}" completado! Abriendo pestaña Repasar…`);
      rerender({ keepScroll: false });
    } else if (act === 'new-note') {
      const n = store.add('notes', {
        kind: 'nota',
        topicId: topic.id,
        tag: topic.tag || 'General',
        title: `Apuntes · ${topic.title}`,
        body: `# ${topic.title}\n\nEscribe aquí tus notas clave…\n\n?? ¿Pregunta clave de ${topic.title}? :: Respuesta concisa`,
      });
      activeNoteId = n.id;
      toast('Nueva nota creada');
      rerender({ keepScroll: true });
    } else if (act === 'del-note' && activeNoteId) {
      store.remove('notes', activeNoteId);
      activeNoteId = store.all('notes')[0]?.id || null;
      toast('Nota eliminada');
      rerender({ keepScroll: true });
    } else if (act === 'toggle-highlighter') {
      highlighterOn = !highlighterOn;
      playUiSfx('click');
      toast(highlighterOn ? 'Resaltador activado: selecciona una frase o toca un párrafo' : 'Resaltador desactivado');
      rerender({ keepScroll: true });
    } else if (act === 'add-highlight-syntax') {
      const ta = root.querySelector('[data-note-body]');
      if (ta && activeNoteId) {
        ta.value += `\n==Texto resaltado clave==`;
        store.update('notes', activeNoteId, { body: ta.value });
        toast('Resaltado ==...== insertado');
        rerender({ keepScroll: true });
      }
    } else if (act === 'add-flashcard-line') {
      const ta = root.querySelector('[data-note-body]');
      if (ta && activeNoteId) {
        ta.value += `\n?? ¿Pregunta de examen o guardia? :: Respuesta clave`;
        store.update('notes', activeNoteId, { body: ta.value });
        toast('Línea de tarjeta SM-2 insertada');
        rerender({ keepScroll: true });
      }
    } else if (act === 'miss-to-note') {
      const res = store.saveMissedToNotes(actBtn.dataset.missId);
      if (res?.noteId) activeNoteId = res.noteId;
      playUiSfx('ok');
      toast('Fallo convertido en tarjeta SM-2 en Mis Apuntes ✓');
      rerender({ keepScroll: true });
    } else if (act === 'misses-all-to-note') {
      const res = store.saveMissedToNotes(topic.id);
      const res2 = res?.count ? res : store.saveMissedToNotes('all');
      if (res2?.noteId) activeNoteId = res2.noteId;
      playUiSfx('ok');
      toast(`${res2?.count || 0} reactivos agregados a Mis Apuntes ✓`);
      rerender({ keepScroll: true });
    } else if (act === 'miss-dismiss') {
      store.removeMissedQuestion(actBtn.dataset.missId);
      playUiSfx('click');
      toast('Reactivo marcado como dominado ✓');
      rerender({ keepScroll: true });
    }
  });

  // Clic en resaltado propio del usuario para quitarlo
  root.addEventListener('click', (e) => {
    const hlMark = e.target.closest('mark.is-user-hl[data-user-hl]');
    if (!hlMark) return;
    const scopeEl = hlMark.closest('[data-hl-scope]');
    if (!scopeEl) return;
    e.stopPropagation();
    const removed = !store.toggleHighlight(scopeEl.dataset.hlScope, hlMark.dataset.userHl);
    playUiSfx('click');
    if (removed) toast('Resaltado quitado');
    rerender({ keepScroll: true });
  });

  // Modo resaltador activo: guardar selección de texto o clic en párrafo
  const saveUserHighlight = (scopeEl, rawPhrase) => {
    const clean = String(rawPhrase || '').replace(/\s+/g, ' ').trim();
    if (clean.length < 3 || clean.length > 200) return false;
    const added = store.toggleHighlight(scopeEl.dataset.hlScope, clean);
    playUiSfx(added ? 'ok' : 'click');
    toast(added ? 'Resaltado guardado ✓' : 'Resaltado quitado');
    rerender({ keepScroll: true });
    return true;
  };

  const handleSelectionHighlight = (e) => {
    if (!highlighterOn) return;
    if (e.target.closest('button, a, input, textarea, mark.is-user-hl')) return;
    const scopeEl = e.target.closest('[data-hl-scope]');
    if (!scopeEl) return;
    const sel = window.getSelection?.();
    const selText = sel ? String(sel.toString() || '').trim() : '';
    if (selText.length >= 3 && selText.length <= 200) {
      sel.removeAllRanges?.();
      saveUserHighlight(scopeEl, selText);
    }
  };

  root.addEventListener('mouseup', handleSelectionHighlight);
  root.addEventListener('touchend', handleSelectionHighlight);

  root.addEventListener('click', (e) => {
    if (!highlighterOn) return;
    if (e.target.closest('button, a, input, textarea, mark.is-user-hl')) return;
    const scopeEl = e.target.closest('[data-hl-scope]');
    if (!scopeEl) return;
    const selText = String(window.getSelection?.()?.toString() || '').trim();
    if (selText.length >= 3) return;
    const blockEl = e.target.closest('p, li, blockquote, td');
    if (!blockEl || !scopeEl.contains(blockEl)) return;
    saveUserHighlight(scopeEl, (blockEl.textContent || '').slice(0, 140));
  });

  const searchInput = root.querySelector('[data-search-sb]');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      rerender({ keepScroll: true });
    });
  }

  const titleIn = root.querySelector('[data-note-title]');
  const bodyIn = root.querySelector('[data-note-body]');
  const prevEl = root.querySelector('[data-note-preview]');
  if (titleIn && activeNoteId) {
    titleIn.addEventListener('input', () => store.update('notes', activeNoteId, { title: titleIn.value }));
  }
  if (bodyIn && activeNoteId) {
    bodyIn.addEventListener('input', () => {
      store.update('notes', activeNoteId, { body: bodyIn.value });
      if (prevEl) prevEl.innerHTML = richMd(bodyIn.value, `${topic.id}:apuntes`);
    });
  }

  const houseBody = root.querySelector('#tema-house-body');
  if (houseBody && houseMode === 'repasar') {
    mountTopicRepasaPanel(houseBody, rerender, topic);
  } else if (houseBody && houseMode === 'jugar') {
    mountTopicJugarPanel(houseBody, rerender, topic);
  }

  S.scope(root, () => {
    S.reveal(root);
  });
}
