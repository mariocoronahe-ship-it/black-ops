// Shared UI helpers: modal sheet, toast, escaping, tiny markdown.
export const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let toastTimer;
export function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/** Opens a form modal. `onSubmit(FormData)` returning false keeps it open. */
export function modal(title, fieldsHtml, onSubmit, submitLabel = 'Guardar') {
  const m = document.getElementById('modal');
  m.innerHTML = `
    <form class="sheet glass" data-lenis-prevent>
      <h3>${esc(title)}</h3>
      ${fieldsHtml}
      <div class="actions">
        <button type="button" class="btn btn-ghost btn-sm" data-close>Cancelar</button>
        <button type="submit" class="btn btn-glow btn-sm">${esc(submitLabel)}</button>
      </div>
    </form>`;
  const form = m.querySelector('form');
  const close = () => { m.classList.remove('open'); document.removeEventListener('keydown', onKey); };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', onKey);
  m.onclick = (e) => { if (e.target === m || e.target.closest('[data-close]')) close(); };
  form.onsubmit = (e) => { e.preventDefault(); if (onSubmit(new FormData(form)) !== false) close(); };
  m.classList.add('open');
  setTimeout(() => form.querySelector('input,textarea,select')?.focus(), 60);
}

const CITE_FILTER_RX = /(AMCG|Schwartz|Sabiston|NCCN|ATLS|Tokyo|TG18|ABA|American Burn|WSES|SAGES|ACG|ASCRS|ESGE|EAES|GPC|CENETEC|CDC|ACS|OMS|WHO|Cap\.|ed\.|p\.|pp\.|Guidelines|Trial)/i;

export function isCitationGroup(inner = '') {
  return CITE_FILTER_RX.test(String(inner));
}

export function shortCiteLabel(raw = '') {
  const s = String(raw).trim();
  const srcMatch = s.match(/AMCG|Schwartz|Sabiston|NCCN|ATLS|Tokyo|TG18|ABA|WSES|SAGES|ACG|ASCRS|ESGE|EAES|GPC|CENETEC|CDC|ACS|WHO|OMS/i);
  let base = srcMatch ? srcMatch[0] : (/American Burn/i.test(s) ? 'ABA' : s.split(/[\s,;]/)[0]);
  if (/^amcg$/i.test(base)) base = 'AMCG';
  else if (/^schwartz$/i.test(base)) base = 'Schwartz';
  else if (/^sabiston$/i.test(base)) base = 'Sabiston';
  else if (/^nccn$/i.test(base)) base = 'NCCN';
  else if (/^aba$/i.test(base)) base = 'ABA';
  const ch = s.match(/Cap\.\s*(\d+)/i);
  const pg = !ch ? s.match(/\bp+\.\s*(\d+)/i) : null;
  const yr = !ch && !pg ? s.match(/\b(20\d{2})\b/) : null;
  if (ch) return `${base} Cap. ${ch[1]}`;
  if (pg) return `${base} p. ${pg[1]}`;
  if (yr) return `${base} ${yr[1]}`;
  return base;
}

export function renderCitationChips(escapedText = '') {
  return String(escapedText).replace(/[ \t]*\[([^\[\]\n]{4,240})\]([.,;:])?/g, (full, inner, punct) => {
    if (!isCitationGroup(inner)) return full;
    const parts = inner.split(';').map((s) => s.trim()).filter(Boolean);
    const chips = parts.map((p) => {
      const lbl = shortCiteLabel(p);
      return `<button type="button" class="cite-chip" data-cite-full="${p}" title="${p}">${lbl}</button>`;
    }).join('');
    return `${punct || ''} <span class="cite-group" aria-label="Fuentes bibliográficas">${chips}</span>`;
  });
}

export function extractCitations(rawMd = '') {
  const seen = new Set();
  const out = [];
  String(rawMd || '').replace(/\[([^\[\]\n]{4,240})\]/g, (_, inner) => {
    if (!isCitationGroup(inner)) return '';
    for (const part of inner.split(';')) {
      const full = part.trim();
      if (!full || seen.has(full)) continue;
      seen.add(full);
      out.push({ short: shortCiteLabel(full), full });
    }
    return '';
  });
  return out;
}

/** Minimal markdown: headings, bold/italic, ordered/unordered lists, quotes, inline code, citations, ?? exam questions. */
export function md(src = '') {
  const inline = (t) => renderCitationChips(
    esc(t)
      .replace(/==(.+?)==/g, '<mark class="cuaderno-hl">$1</mark>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, '$1<em>$2</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
  );
  const out = [];
  let listTag = null;
  let hIdx = 0;
  const closeList = () => {
    if (listTag) { out.push(`</${listTag}>`); listTag = null; }
  };
  for (const raw of src.split('\n')) {
    const line = raw.trimEnd();
    const trimmed = line.trim();
    let m;
    if (/^\|.*\|$/.test(trimmed)) {
      // Tablas markdown: | a | b | (la fila |---|---| se omite)
      closeList();
      if (/^\|[\s:|-]+\|$/.test(trimmed)) continue;
      const cells = trimmed.slice(1, -1).split('|').map((c) => inline(c.trim()));
      if (out[out.length - 1] === '</tbody></table>') out.pop(); else out.push('<table class="md-table"><tbody>');
      out.push(`<tr>${cells.map((c) => `<td>${c}</td>`).join('')}</tr>`, '</tbody></table>');
    } else if (/^-{3,}$/.test(trimmed)) {
      closeList();
      out.push('<hr class="cuaderno-sep">');
    } else if ((m = line.match(/^(#{1,4})\s+(.+)$/))) {
      closeList();
      const lvl = Math.min(5, m[1].length + 1);
      out.push(`<h${lvl} id="h-${hIdx++}">${inline(m[2])}</h${lvl}>`);
    } else if ((m = line.match(/^\?\?\s*(.+?)\s*::\s*(.+)$/))) {
      closeList();
      out.push(`<details class="exam-q"><summary><span class="mono">Pregunta de examen</span>${inline(m[1])}</summary><p>${inline(m[2])}</p></details>`);
    } else if ((m = line.match(/^(\s*)\d+\.\s+(.+)$/))) {
      const indent = m[1].length >= 2;
      if (!indent && listTag !== 'ol') { closeList(); out.push('<ol class="md-ol">'); listTag = 'ol'; }
      else if (indent && !listTag) { out.push('<ol class="md-ol">'); listTag = 'ol'; }
      out.push(`<li${indent ? ' class="md-sub-li"' : ''}>${inline(m[2])}</li>`);
    } else if ((m = line.match(/^(\s*)[-*]\s+(.+)$/))) {
      const indent = m[1].length >= 2;
      if (!indent && listTag !== 'ul') { closeList(); out.push('<ul>'); listTag = 'ul'; }
      else if (indent && !listTag) { out.push('<ul>'); listTag = 'ul'; }
      out.push(`<li${indent ? ' class="md-sub-li"' : ''}>${inline(m[2])}</li>`);
    } else if ((m = line.match(/^>\s?(.*)$/))) {
      closeList(); out.push(`<blockquote>${inline(m[1])}</blockquote>`);
    } else if (!trimmed) {
      closeList();
    } else {
      closeList(); out.push(`<p>${inline(line)}</p>`);
    }
  }
  closeList();
  return out.join('\n');
}

export const fmtDate = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });

/** Liquid-glass segmented control: the glass pill slides under the active item. */
export function placeSeg(seg, target) {
  if (!seg) return;
  const ind = seg.querySelector('.seg-ind');
  const el = target || seg.querySelector('.on');
  if (!ind || !el) return;
  ind.style.setProperty('--x', `${el.offsetLeft}px`);
  ind.style.setProperty('--w', `${el.offsetWidth}px`);
  if (!seg.dataset.wired) {
    seg.dataset.wired = '1';
    // hovering previews the move; leaving snaps back to the active item
    seg.addEventListener('pointerover', (e) => { const it = e.target.closest('a,button'); if (it && seg.contains(it)) placeSeg(seg, it); });
    seg.addEventListener('pointerleave', () => placeSeg(seg));
    new ResizeObserver(() => placeSeg(seg)).observe(seg);
  }
}
