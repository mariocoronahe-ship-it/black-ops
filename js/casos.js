// Normalizador único de casos seriados PUEM y utilidades del Blitz.
// Los datos (repaso_alto_rendimiento.js / catalogo_recursos.js) usan
// answer_index, context y topic; las vistas leen answerIndex, vignette y subtopic.
// Aquí se aceptan ambos esquemas y se devuelve siempre el que usan las vistas
// (conservando también los campos originales). No modifica ningún texto.

export function normalizeQuestion(q) {
  if (!q || typeof q !== 'object') return q;
  const raw = q.answerIndex ?? q.answer_index;
  let answerIndex = Number.isInteger(raw) ? raw : Number(raw);
  if (!Number.isInteger(answerIndex)) {
    const byText = Array.isArray(q.options) ? q.options.indexOf(q.correct_text) : -1;
    answerIndex = byText >= 0 ? byText : 0;
  }
  return { ...q, answerIndex, answer_index: answerIndex };
}

export function normalizeCase(c) {
  if (!c || typeof c !== 'object') return c;
  return {
    ...c,
    vignette: c.vignette ?? c.context ?? '',
    context: c.context ?? c.vignette ?? '',
    subtopic: c.subtopic ?? c.topic ?? '',
    questions: (c.questions || []).map(normalizeQuestion),
  };
}

export function normalizeCases(list) {
  return (list || []).map(normalizeCase);
}

// Fisher-Yates sobre una copia: baraja las opciones de un ítem de Blitz
// ({ q, opts, ans, exp, tag }) y reasigna el índice de la correcta.
export function shuffleBlitzItem(item) {
  if (!item || !Array.isArray(item.opts) || item.opts.length < 2) return item;
  const order = item.opts.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return {
    ...item,
    opts: order.map((i) => item.opts[i]),
    ans: order.indexOf(item.ans),
  };
}
