// Ayudante para armar una hoja de lectura por subtema (ver subtemas_drive.js).
const words = (s) => s.split(/\s+/).filter(Boolean).length;

export const sheet = (id, num, title, markdown) => ({
  id, num, title, markdown: markdown.trim(), wordCount: words(markdown), readTimeMin: Math.max(1, Math.round(words(markdown) / 200)), fuente: 'drive',
});

// Aviso estándar para un subtema que el material de Drive todavía no desarrolla
export const PENDIENTE = '*Contenido pendiente: el material de Drive todavía no desarrolla este subtema. Se completará en una próxima actualización.*';
