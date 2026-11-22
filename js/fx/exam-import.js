/* ==========================================================================
   Black Ops · Lector del examen de la Dra. Hernández (Word .docx o texto)
   Convierte el documento en preguntas { stem, options[], answer } y detecta
   la respuesta correcta por:
     · inciso en negritas (o subrayado / resaltado)
     · línea «Respuesta: C» (o «Resp:», «R:», «Correcta:»)
     · hoja de respuestas al final («1. C», «1-C», «1) c»)
   Todo pasa en el navegador de la docente; nada se manda hasta que ella guarda.
   ========================================================================== */

const MAMMOTH_URL = 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.8.0/mammoth.browser.min.js';

let mammothPromise = null;
function loadMammoth() {
  if (window.mammoth) return Promise.resolve(window.mammoth);
  if (!mammothPromise) {
    mammothPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = MAMMOTH_URL;
      s.onload = () => resolve(window.mammoth);
      s.onerror = () => { mammothPromise = null; reject(new Error('No se pudo cargar el lector de Word (revisa internet)')); };
      document.head.appendChild(s);
    });
  }
  return mammothPromise;
}

const OPT_RE = /^\(?([A-Ha-h])\s*[).:\-–]\s*(.*)$/s;
const ANS_RE = /^(?:respuesta(?:\s+correcta)?|resp\.?|r|correcta|clave)\s*[:=.\-–]\s*\(?([A-Ha-h])\)?\s*\.?$/i;
const NUM_RE = /^(\d{1,3})\s*[.)\-–:]\s*(.*)$/s;
const KEY_LINE_RE = /^(\d{1,3})\s*[.)\-–:]?\s*\(?([A-Ha-h])\)?\s*\.?$/;
// Clave global en un párrafo suelto: «la respuesta correcta es siempre el inciso A»,
// «todas las respuestas correctas son B», «la respuesta será la letra C»…
const GLOBAL_KEY_RE = /respuestas?\s+(?:correctas?\s+)?(?:es|son|ser[áa]n?|corresponde[n]?\s+a)\s+(?:siempre\s+)?(?:(?:el|la|al)\s+)?(inciso|opci[oó]n|letra|literal)?\s*\(?([A-Ha-h])\)?(?=[\s.,;:)»"”]|$)/i;
// Inciso marcado a mano: «A) texto *», «* B) texto», «C) texto ✓»
const MARK_RE = /^\s*(?:\*+|[✓✔✅☑])\s*|\s*(?:\*+|[✓✔✅☑])\s*$/;
const ANS_INLINE_RE = /^(?:respuesta(?:\s+correcta)?|resp\.?(?:\s+correcta)?|correcta|clave)\s*[:=.\-–]?\s*(?:(?:el|la)\s+)?(?:inciso|opci[oó]n|letra)?\s*\(?([A-Ha-h])\)?(?:[).:\-–]|\s|$)/i;
const KEY_HEADER_RE = /^(hoja\s+de\s+)?(respuestas|clave(\s+de\s+respuestas)?|soluciones)\s*:?$/i;

/**
 * Bloques de texto: { text, strong (0-1), depth, listIndex }
 */
function blocksFromHtml(html) {
  const doc = new DOMParser().parseFromString(`<div id="r">${html}</div>`, 'text/html');
  const root = doc.getElementById('r');
  const blocks = [];
  const emphasisRatio = (el) => {
    const total = (el.textContent || '').replace(/\s+/g, '').length || 1;
    let em = 0;
    el.querySelectorAll('strong, b, u, mark').forEach((n) => {
      // evitar contar dos veces anidados
      if (n.parentElement && n.parentElement.closest('strong, b, u, mark') && el.contains(n.parentElement.closest('strong, b, u, mark'))) return;
      em += (n.textContent || '').replace(/\s+/g, '').length;
    });
    return Math.min(1, em / total);
  };
  const walk = (node, depth) => {
    for (const el of node.children) {
      const tag = el.tagName.toLowerCase();
      if (tag === 'ol' || tag === 'ul') {
        let i = 0;
        for (const li of el.children) {
          if (li.tagName.toLowerCase() !== 'li') continue;
          // texto propio del <li> sin las sublistas
          const clone = li.cloneNode(true);
          clone.querySelectorAll('ol, ul').forEach((x) => x.remove());
          const text = (clone.textContent || '').replace(/\s+/g, ' ').trim();
          if (text) blocks.push({ text, strong: emphasisRatio(clone), depth: depth + 1, listIndex: i, ordered: tag === 'ol' });
          i += 1;
          walk(li, depth + 1);
        }
      } else if (tag === 'table') {
        el.querySelectorAll('tr').forEach((tr) => {
          const text = [...tr.children].map((td) => (td.textContent || '').trim()).join(' ').replace(/\s+/g, ' ').trim();
          if (text) blocks.push({ text, strong: emphasisRatio(tr), depth });
        });
      } else if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'].includes(tag)) {
        // un <p> puede traer saltos de línea (<br>) con varios incisos
        const parts = el.innerHTML.split(/<br\s*\/?>/i);
        for (const part of parts) {
          const frag = doc.createElement('div');
          frag.innerHTML = part;
          const text = (frag.textContent || '').replace(/\s+/g, ' ').trim();
          if (text) blocks.push({ text, strong: emphasisRatio(frag), depth });
        }
      }
    }
  };
  walk(root, 0);
  return blocks;
}

function blocksFromText(text) {
  return String(text || '')
    .split(/\r?\n/)
    .map((line) => {
      let t = line.trim();
      if (!t) return null;
      // Markdown: **negritas** o __negritas__ marcan la respuesta
      const plain = t.replace(/\*\*|__/g, '');
      const boldChars = (t.match(/\*\*(.+?)\*\*|__(.+?)__/g) || []).join('').replace(/\*\*|__|\s/g, '').length;
      const ratio = boldChars / (plain.replace(/\s/g, '').length || 1);
      t = plain.replace(/^[-*]\s+/, '').trim();
      return { text: t, strong: ratio, depth: 0 };
    })
    .filter(Boolean);
}

/**
 * Convierte bloques en preguntas.
 * @returns {{ questions: Array<{stem:string, options:string[], answer:number, answerFrom:string}>, warnings: string[] }}
 */
function parseBlocks(blocks) {
  const questions = [];
  const warnings = [];
  const answerKey = new Map();
  let cur = null;
  let inKey = false;
  let globalKey = -1;

  const startQuestion = (stem) => {
    cur = { stem: stem.trim(), options: [], strong: [], marked: [], answer: -1, answerFrom: '' };
    questions.push(cur);
  };

  // ¿Las preguntas vienen como lista numerada de Word (sin número escrito)?
  const listQuestions = blocks.some((b) => b.depth === 1 && b.ordered) && blocks.some((b) => b.depth === 2);

  for (const b of blocks) {
    const t = b.text;
    if (KEY_HEADER_RE.test(t)) { inKey = true; continue; }

    const km = t.match(KEY_LINE_RE);
    if (km && (inKey || (cur && cur.options.length >= 2 && !OPT_RE.test(t)))) {
      // «12. C» sola en la línea = hoja de respuestas
      if (inKey || Number(km[1]) <= questions.length + 1) {
        answerKey.set(Number(km[1]), km[2].toUpperCase().charCodeAt(0) - 65);
        inKey = true;
        continue;
      }
    }
    if (inKey) {
      // Hoja de respuestas en una sola línea: «1-C, 2-A, 3-D»
      const many = [...t.matchAll(/(\d{1,3})\s*[.)\-–:]?\s*\(?([A-Ha-h])\)?(?=[\s,;]|$)/g)];
      if (many.length >= 2) {
        many.forEach((m) => answerKey.set(Number(m[1]), m[2].toUpperCase().charCodeAt(0) - 65));
        continue;
      }
    }
    const many = [...t.matchAll(/(\d{1,3})\s*[.)\-–:]\s*\(?([A-Ha-h])\)?(?=[\s,;]|$)/g)];
    if (many.length >= 3 && many.map((m) => m[0]).join('').length > t.replace(/[\s,;]/g, '').length * 0.7) {
      many.forEach((m) => answerKey.set(Number(m[1]), m[2].toUpperCase().charCodeAt(0) - 65));
      inKey = true;
      continue;
    }

    // «La respuesta correcta es siempre el inciso A»: aplica a todas las que no traigan su propia clave
    const gm = t.match(GLOBAL_KEY_RE);
    const looksGlobal = gm && (gm[1] || /[A-H]/.test(gm[2])) && !OPT_RE.test(t);
    if (looksGlobal && (!cur || cur.options.length < 2 || /siempre|todas|cada\s+pregunta|en\s+todos/i.test(t))) {
      globalKey = gm[2].toUpperCase().charCodeAt(0) - 65;
      // el resto del párrafo (título/introducción) no es una pregunta
      continue;
    }

    const am = t.match(ANS_RE) || (cur && cur.options.length >= 2 ? t.match(ANS_INLINE_RE) : null)
      || (looksGlobal && cur && cur.options.length >= 2 ? [t, gm[2]] : null);
    if (am && cur) {
      cur.answer = am[1].toUpperCase().charCodeAt(0) - 65;
      cur.answerFrom = 'línea «Respuesta»';
      continue;
    }

    // Incisos: «A) texto», o elementos de una sublista de Word
    const om = t.replace(/^\s*(?:\*+|[✓✔✅☑])\s*/, '').match(OPT_RE);
    const isListOption = listQuestions && b.depth >= 2;
    if (cur && (om || isListOption)) {
      const txt = om ? om[2].trim() : t;
      const letterIdx = om ? om[1].toUpperCase().charCodeAt(0) - 65 : cur.options.length;
      if (letterIdx === cur.options.length || isListOption) {
        const mk = MARK_RE.test(txt) || (om && /^\s*(?:\*+|[✓✔✅☑])/.test(t));
        cur.options.push(txt.replace(MARK_RE, '').trim());
        cur.strong.push(b.strong);
        cur.marked.push(Boolean(mk));
        continue;
      }
    }

    // Pregunta nueva: número escrito, elemento de lista numerada, o texto después de incisos
    const nm = t.match(NUM_RE);
    if (nm && nm[2].trim()) { startQuestion(nm[2]); continue; }
    if (listQuestions && b.depth === 1) { startQuestion(t); continue; }
    if (!cur || cur.options.length >= 2) { startQuestion(t); continue; }
    // Si aún no hay incisos, es continuación del enunciado (caso clínico de varios párrafos)
    cur.stem = `${cur.stem}\n${t}`;
  }

  const out = [];
  questions.forEach((q, i) => {
    if (q.options.length < 2) {
      if (q.stem.length > 3) warnings.push(`Se ignoró un bloque sin incisos: «${q.stem.slice(0, 60)}…»`);
      return;
    }
    let answer = q.answer;
    let from = q.answerFrom;
    if (answer < 0) {
      const markIdx = q.marked.map((m, j) => (m ? j : -1)).filter((j) => j >= 0);
      if (markIdx.length === 1) { answer = markIdx[0]; from = 'marca * / ✓'; }
    }
    if (answer < 0) {
      const strongIdx = q.strong.map((r, j) => (r >= 0.6 ? j : -1)).filter((j) => j >= 0);
      if (strongIdx.length === 1) { answer = strongIdx[0]; from = 'negritas'; }
    }
    const keyN = out.length + 1;
    if (answerKey.has(keyN)) { answer = answerKey.get(keyN); from = 'hoja de respuestas'; }
    if (answer < 0 && globalKey >= 0 && globalKey < q.options.length) { answer = globalKey; from = 'clave global'; }
    if (!(answer >= 0 && answer < q.options.length)) { answer = -1; from = ''; }
    out.push({ stem: q.stem, options: q.options, answer, answerFrom: from });
  });
  return { questions: out, warnings, globalKey: globalKey >= 0 ? String.fromCharCode(65 + globalKey) : null };
}

export async function parseExamFile(file) {
  const name = String(file?.name || '').toLowerCase();
  if (name.endsWith('.docx')) {
    const mammoth = await loadMammoth();
    const arrayBuffer = await file.arrayBuffer();
    const res = await mammoth.convertToHtml({ arrayBuffer }, {
      styleMap: ['u => u', 'highlight => mark'],
      ignoreEmptyParagraphs: true,
    });
    return parseBlocks(blocksFromHtml(res.value));
  }
  if (name.endsWith('.doc')) {
    throw new Error('Ese es un Word antiguo (.doc). Ábrelo en Word y «Guardar como» .docx');
  }
  const text = await file.text();
  return parseExamText(text);
}

export function parseExamText(text) {
  return parseBlocks(blocksFromText(text));
}

export const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
