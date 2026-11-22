/* ==========================================================================
   CALOT-OS · Black Ops · Repaso personalizado tras el examen R2
   Por cada pregunta fallada busca en los resúmenes de la app el párrafo que mejor
   coincide con la pregunta y su respuesta correcta (términos clave ponderados por
   rareza). Si no hay coincidencia con suficiente confianza, solo da la liga al tema
   más probable: nunca inventa contenido.
   ========================================================================== */

import { esc, md } from '../ui.js';
import { TEMARIO_APRENDE } from '../data/temario_aprende.js?v=20261122j';

const STORE_KEY = 'bo:exam-review'; // + ':<residente>' → [{ sessionId, title, at, items }]

const STOP = new Set(`para como cual cuales cuál cuáles este esta estos estas ese esa esos esas aquel aquella entre sobre desde hasta hacia contra durante mediante segun según donde dónde cuando cuándo porque pero tambien también mismo misma mismos mismas otro otra otros otras todo toda todos todas cada mucho mucha muchos muchas poco poca pocos pocas menos mayor menor mejor peor siempre nunca solo sólo puede pueden debe deben tiene tienen tener hace hacen hacer siendo sido será serán está están estar están cuyo cuya cuyos cuyas dicho dicha principal principales caso casos paciente pacientes forma tipo tipos parte partes manera nivel niveles tras ante bajo segun habitualmente generalmente frecuente frecuentes frecuencia comun común comunes indica indicado indicada correcta correcto incorrecta opcion opción respuesta pregunta siguiente siguientes enunciado afirmacion afirmación verdadera falsa excepto excepcion excepción considera considerar recomienda recomendado manejo tratamiento indicacion indicación`.split(/\s+/).map((w) => norm(w)));

function norm(s) {
  return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

function terms(s) {
  return norm(s)
    .replace(/[^a-z0-9ñ]+/g, ' ')
    .split(' ')
    .filter((w) => w.length >= 4 && !STOP.has(w) && !/^\d+$/.test(w))
    .map((w) => (w.length > 5 ? w.replace(/(es|s)$/, '') : w));
}

let INDEX = null;
function buildIndex() {
  if (INDEX) return INDEX;
  const paras = [];
  for (const t of TEMARIO_APRENDE) {
    for (const sb of t.subblocks || []) {
      const mdText = String(sb.markdown || '');
      if (!mdText) continue;
      let heading = sb.title || '';
      let buf = [];
      const flush = () => {
        const text = buf.join('\n').trim();
        buf = [];
        if (text.length < 60) return;
        // Listas largas: se parten en trozos legibles
        const chunks = [];
        if (text.length > 1100) {
          let cur = [];
          for (const line of text.split('\n')) {
            cur.push(line);
            if (cur.join('\n').length > 650) { chunks.push(cur.join('\n')); cur = []; }
          }
          if (cur.length) chunks.push(cur.join('\n'));
        } else chunks.push(text);
        for (const c of chunks) {
          if (c.trim().length < 60) continue;
          const tk = terms(`${heading} ${c}`);
          paras.push({ topicId: t.id, topicTitle: t.title, sbId: sb.id, sbTitle: sb.title, heading, text: c.trim(), set: new Set(tk), len: tk.length, ntext: norm(c) });
        }
      };
      for (const line of mdText.split('\n')) {
        const h = line.match(/^#{1,6}\s+(.*)$/);
        if (h) { flush(); heading = h[1].replace(/[*_`]/g, '').trim(); continue; }
        if (!line.trim()) { flush(); continue; }
        buf.push(line);
      }
      flush();
    }
  }
  const df = new Map();
  for (const p of paras) for (const w of p.set) df.set(w, (df.get(w) || 0) + 1);
  const N = paras.length || 1;
  const idf = (w) => Math.log((N + 1) / ((df.get(w) || 0) + 1));
  INDEX = { paras, idf };
  return INDEX;
}

/** Busca el fragmento del resumen para una pregunta y su respuesta correcta. */
export function matchFragment(stem, right, topicHint = '') {
  const { paras, idf } = buildIndex();
  if (!paras.length) return null;
  const rightT = [...new Set(terms(right))];
  const stemT = [...new Set(terms(stem))];
  const rightPhrase = norm(right).replace(/[^a-z0-9ñ ]+/g, ' ').replace(/\s+/g, ' ').trim();
  let best = null;
  for (const p of paras) {
    let s = 0;
    let rightHits = 0;
    for (const w of rightT) if (p.set.has(w)) { const v = idf(w); s += 3 * v; if (v > 2) rightHits += 1; }
    for (const w of stemT) if (p.set.has(w)) s += idf(w);
    if (rightPhrase.length >= 6) {
      const flat = p.ntext.replace(/[^a-z0-9ñ ]+/g, ' ').replace(/\s+/g, ' ');
      if (flat.includes(rightPhrase)) { s += 14; rightHits += 2; }
    }
    if (topicHint && p.topicId === topicHint) s *= 1.35;
    s /= 1 + p.len / 900;
    if (!best || s > best.s) best = { p, s, rightHits };
  }
  if (!best) return null;
  const { p, s, rightHits } = best;
  const confident = s >= 30 && rightHits >= 1;
  return {
    confident,
    score: Math.round(s * 10) / 10,
    topicId: p.topicId,
    topicTitle: p.topicTitle,
    sbId: p.sbId,
    sbTitle: p.sbTitle,
    heading: p.heading,
    text: confident ? p.text : '',
  };
}

/** Tema dominante de un examen (p. ej. «colon»): sesga la búsqueda hacia ese módulo. */
export function dominantTopic(allQuestions) {
  const votes = new Map();
  for (const q of allQuestions || []) {
    const f = matchFragment(q.stem, q.right || '');
    if (f && f.confident) votes.set(f.topicId, (votes.get(f.topicId) || 0) + 1);
  }
  let best = '';
  let n = 0;
  for (const [k, v] of votes) if (v > n) { best = k; n = v; }
  return n >= 2 ? best : '';
}

/** items: [{ stem, picked, right }] → guarda y devuelve el repaso con fragmentos.
    allQuestions (opcional): todas las preguntas del examen para detectar el tema dominante. */
export function buildReview({ residentId, sessionId, title, items, topicHint = '', allQuestions = null }) {
  const hint = topicHint || dominantTopic(allQuestions || items);
  const out = items.map((it) => ({ ...it, frag: matchFragment(it.stem, it.right, hint) }));
  const rec = { sessionId, title: title || 'Examen R2', at: Date.now(), items: out };
  try {
    const key = `${STORE_KEY}:${residentId}`;
    const prev = JSON.parse(localStorage.getItem(key) || '[]').filter((r) => r && r.sessionId !== sessionId);
    localStorage.setItem(key, JSON.stringify([rec, ...prev].slice(0, 5)));
  } catch {}
  return rec;
}

export function loadReview(residentId, sessionId = null) {
  try {
    const list = JSON.parse(localStorage.getItem(`${STORE_KEY}:${residentId}`) || '[]');
    return (sessionId ? list.find((r) => r.sessionId === sessionId) : list[0]) || null;
  } catch { return null; }
}

/** Temas (únicos) que el residente debe repasar: para el panel de la docente. */
export function reviewTopics(rec) {
  const seen = new Set();
  const out = [];
  for (const it of rec?.items || []) {
    const f = it.frag;
    if (!f) continue;
    const label = `${f.topicTitle} · ${f.sbTitle}`;
    if (!seen.has(label)) { seen.add(label); out.push(label); }
  }
  return out;
}

const topicHref = (f) => `#/aprende?tema=${encodeURIComponent(f.topicId)}&sb=${encodeURIComponent(f.sbId)}`;

function boldRight(html, right) {
  const r = String(right || '').trim();
  if (r.length < 4) return html;
  const rx = new RegExp(esc(r).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'), 'i');
  return html.replace(rx, (m) => `<mark>${m}</mark>`);
}

/** Bloque «Tu repaso personalizado». `locked`: la app sigue bloqueada (el tema se abre aquí mismo). */
export function reviewSectionHTML(rec, { locked = false } = {}) {
  if (!rec) return '';
  const items = rec.items || [];
  if (!items.length) {
    return `<section class="bo-review" data-bo-review>
      <h2 class="bo-review-title">Tu repaso personalizado</h2>
      <p class="bo-review-empty">🎯 No fallaste ninguna pregunta: no hay temas pendientes de este examen.</p>
    </section>`;
  }
  return `<section class="bo-review" data-bo-review>
    <h2 class="bo-review-title">Tu repaso personalizado</h2>
    <p class="bo-review-sub mono">${items.length} PREGUNTA${items.length === 1 ? '' : 'S'} A REPASAR · ${esc(rec.title)}</p>
    ${items.map((it, i) => {
      const f = it.frag;
      return `<article class="bo-review-card">
        <p class="bo-review-n mono">ERROR ${i + 1}</p>
        <p class="bo-review-q">${esc(it.stem)}</p>
        <p class="bo-review-ans is-bad"><span class="mono">TU RESPUESTA</span>${esc(it.picked || 'Sin responder')}</p>
        <p class="bo-review-ans is-ok"><span class="mono">CORRECTA</span>${esc(it.right)}</p>
        ${f && f.confident ? `
          <div class="bo-review-frag">
            <p class="bo-review-src mono">📖 ${esc(f.topicTitle)} › ${esc(f.sbTitle)}${f.heading && f.heading !== f.sbTitle ? ` › ${esc(f.heading)}` : ''}</p>
            <div class="bo-review-md">${boldRight(md(f.text), it.right)}</div>
          </div>` : `
          <p class="bo-review-none mono">No encontré un párrafo exacto en los resúmenes${f ? '; el tema más probable es el de abajo' : ''}.</p>`}
        ${f ? `<button type="button" class="btn btn-sm btn-ghost bo-review-open" data-bo-review-open="${i}">${locked ? '📖 Leer el tema completo' : '📖 Abrir el tema en la app'} · ${esc(f.sbTitle)}</button>` : ''}
      </article>`;
    }).join('')}
  </section>`;
}

/** Lector del tema completo (dentro de la pantalla bloqueada o como capa sobre la app). */
export function openTopicReader(item, { allowNavigate = false } = {}) {
  const f = item?.frag;
  if (!f) return;
  const topic = TEMARIO_APRENDE.find((t) => t.id === f.topicId);
  const sb = topic?.subblocks?.find((s) => s.id === f.sbId);
  if (!sb) return;
  const el = document.createElement('div');
  el.className = 'bo-reader';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.innerHTML = `
    <div class="bo-reader-bar">
      <button type="button" class="btn btn-sm btn-ghost" data-bo-reader-close>← Volver a mi repaso</button>
      ${allowNavigate ? `<a class="btn btn-sm btn-ghost" href="${topicHref(f)}" data-bo-reader-go>Ir al tema en la app →</a>` : ''}
    </div>
    <article class="bo-reader-body">
      <p class="bo-reader-kicker mono">${esc(topic.title)}</p>
      <div class="bo-reader-md">${md(sb.markdown || '')}</div>
    </article>`;
  (document.querySelector('.bo-closed') || document.body).appendChild(el);
  el.addEventListener('click', (e) => {
    if (e.target.closest('[data-bo-reader-close]')) el.remove();
    if (e.target.closest('[data-bo-reader-go]')) { el.remove(); document.querySelector('.bo-myerrors')?.remove(); }
  });
  // Resalta el párrafo del fragmento y lleva la vista hasta él
  if (f.text) {
    const flat = (s) => norm(s).replace(/[^a-z0-9ñ ]+/g, ' ').replace(/\s+/g, ' ').trim();
    const words = flat(f.text.replace(/\*\*|__|`|#|\|/g, ' ')).split(' ').filter((w) => w.length > 4).slice(0, 4);
    const cands = [...el.querySelectorAll('.bo-reader-md p, .bo-reader-md li, .bo-reader-md tr, .bo-reader-md blockquote')];
    const hit = words.length ? cands.find((n) => { const x = flat(n.textContent); return words.every((w) => x.includes(w)); }) : null;
    if (hit) {
      hit.classList.add('bo-reader-hit');
      requestAnimationFrame(() => hit.scrollIntoView({ block: 'center' }));
    }
  }
}

/** «Mis errores del examen»: capa sobre la app con el último repaso guardado. */
export function openMyErrors(residentId) {
  const rec = loadReview(residentId);
  document.querySelector('.bo-myerrors')?.remove();
  const el = document.createElement('div');
  el.className = 'bo-myerrors';
  el.innerHTML = `
    <div class="bo-myerrors-inner">
      <div class="bo-reader-bar"><b class="mono">📕 MIS ERRORES DEL EXAMEN</b><button type="button" class="btn btn-sm btn-ghost" data-bo-myerr-close>Cerrar</button></div>
      ${rec ? reviewSectionHTML(rec) : '<p class="bo-review-empty">Aún no tienes un examen calificado en este dispositivo.</p>'}
    </div>`;
  document.body.appendChild(el);
  el.addEventListener('click', (e) => {
    if (e.target.closest('[data-bo-myerr-close]')) { el.remove(); return; }
    const b = e.target.closest('[data-bo-review-open]');
    if (b && rec) openTopicReader(rec.items[Number(b.dataset.boReviewOpen)], { allowNavigate: true });
  });
}
