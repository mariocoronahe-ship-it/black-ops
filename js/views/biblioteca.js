// Biblioteca R1–R4: resúmenes detallados, breves, perlas y casos clínicos del contenido completo (Drive).
import { md, esc } from '../ui.js';
import { YEARS } from '../data/temario_puem.js?v=20261121v';
import { allowedYear, perfil } from '../perfil.js?v=20261121v';
import { TIPOS, loadTopics } from '../contenido.js?v=20261121v';

export const section = 'resumenes';

let year = null;
let tipo = 'breve';
let tema = 0;

const href = (y, t, i = 0) => `#/biblioteca?anio=${y}&tipo=${t}&tema=${i}`;

export function render(params = {}) {
  const def = YEARS.includes(perfil().ciclo) ? perfil().ciclo : YEARS[YEARS.length - 1];
  year = /^R[1-4]$/.test(String(params.anio || '').toUpperCase()) ? allowedYear(String(params.anio).toUpperCase()) : (year || def);
  tipo = TIPOS.some((t) => t.id === params.tipo) ? params.tipo : tipo;
  tema = Number.isFinite(Number(params.tema)) ? Math.max(0, Number(params.tema)) : 0;
  return `
    <section class="bib wrap">
      <header class="bib-head">
        <p class="mono bib-kicker">Biblioteca · contenido completo</p>
        <h1>Resúmenes y casos <em>${YEARS[0]}–${YEARS[YEARS.length - 1]}</em></h1>
        <p class="muted">Elige año y formato. Cada tema trae su versión detallada, breve, sus perlas y 10 casos clínicos difíciles.</p>
      </header>
      <nav class="bib-row" aria-label="Año">${YEARS.map((y) => `<a class="rs-pill ${y === year ? 'on' : ''}" href="${href(y, tipo)}">${y}</a>`).join('')}</nav>
      <nav class="bib-row" aria-label="Formato">${TIPOS.map((t) => `<a class="bib-tipo ${t.id === tipo ? 'on' : ''}" href="${href(year, t.id)}"><b>${t.label}</b><small>${t.desc}</small></a>`).join('')}</nav>
      <div class="bib-body" data-bib><p class="muted">Cargando ${esc(year)}…</p></div>
    </section>`;
}

export function mount(root) {
  const box = root.querySelector('[data-bib]');
  if (!box) return;
  const y = year, t = tipo, i = tema;
  loadTopics(y, t).then((topics) => {
    if (!box.isConnected || y !== year || t !== tipo) return;
    if (!topics || !topics.length) {
      box.innerHTML = `<div class="card bib-empty"><h3>Contenido en camino</h3><p class="muted">Este año todavía no está cargado en la app. Vuelve pronto.</p></div>`;
      return;
    }
    const cur = topics[Math.min(i, topics.length - 1)];
    box.innerHTML = `
      <div class="bib-grid">
        <aside class="bib-index card" data-lenis-prevent>
          <p class="mono muted">${topics.length} temas</p>
          <ol>${topics.map((x) => `<li><a class="${x.i === cur.i ? 'on' : ''}" href="${href(y, t, x.i)}">${esc(x.title)}</a></li>`).join('')}</ol>
        </aside>
        <article class="bib-doc card md-body ${t === 'casos' ? 'is-casos' : ''}">
          <h2>${esc(cur.title)}</h2>
          ${md(cur.md)}
          <nav class="bib-pager">
            ${cur.i > 0 ? `<a class="btn btn-sm btn-ghost" href="${href(y, t, cur.i - 1)}">← ${esc(topics[cur.i - 1].title)}</a>` : '<span></span>'}
            ${cur.i < topics.length - 1 ? `<a class="btn btn-sm btn-glow" href="${href(y, t, cur.i + 1)}">${esc(topics[cur.i + 1].title)} →</a>` : ''}
          </nav>
        </article>
      </div>`;
    // En casos clínicos, la respuesta y explicación quedan ocultas hasta tocarlas
    if (t === 'casos') hideAnswers(box.querySelector('.bib-doc'));
  });
}

function hideAnswers(doc) {
  if (!doc) return;
  doc.querySelectorAll('p, li, h4, h5').forEach((el) => {
    if (!/^(respuesta|explicaci[oó]n|por qu[eé])/i.test(el.textContent.trim())) return;
    if (el.closest('details')) return;
    const det = document.createElement('details');
    det.className = 'bib-answer';
    det.innerHTML = '<summary>Ver respuesta</summary>';
    el.replaceWith(det);
    det.append(el);
    // arrastra los párrafos siguientes hasta el próximo encabezado o caso
    let n = det.nextElementSibling;
    while (n && !/^H[2-5]$/.test(n.tagName) && !/^(caso|\d+\.)/i.test(n.textContent.trim())) {
      const next = n.nextElementSibling;
      det.append(n);
      n = next;
    }
  });
}
