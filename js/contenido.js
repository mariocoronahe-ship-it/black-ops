// Contenido completo R1–R4 (carpeta de Drive «CALOT-OS COMPLETO», copiada a content/drive/).
// Se carga por año y tipo bajo demanda, se divide por tema («## …») y se cachea en memoria.

export const TIPOS = [
  { id: 'detallado', file: '01-resumenes-detallados', label: 'Detallado', desc: 'Por tema y subtema' },
  { id: 'breve', file: '02-resumenes-breves', label: 'Breve', desc: 'Solo lo importante' },
  { id: 'perlas', file: '03-puntos-clave', label: 'Perlas', desc: '10 puntos clave por tema' },
  { id: 'casos', file: '04-casos-clinicos', label: 'Casos', desc: '10 casos difíciles por tema' },
];

const BASE = new URL('../content/drive/', import.meta.url);
const cache = new Map();

/** Divide el markdown en temas por encabezados de nivel 2. Lo previo al primer «##» es la introducción. */
export function splitTopics(src) {
  const topics = [];
  let cur = { title: 'Introducción', body: [] };
  for (const line of src.split('\n')) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (m) {
      if (cur.body.join('').trim()) topics.push(cur);
      cur = { title: m[1].replace(/\*\*/g, '').trim(), body: [] };
    } else if (!(topics.length === 0 && cur.title === 'Introducción' && /^#\s/.test(line))) cur.body.push(line); // el título H1 del archivo no cuenta
  }
  if (cur.body.join('').trim()) topics.push(cur);
  return topics.map((t, i) => ({ i, title: t.title, md: t.body.join('\n').trim() }));
}

/** Carga los temas de un año y tipo. Devuelve null si el archivo aún no está copiado. */
export async function loadTopics(year, tipoId) {
  const tipo = TIPOS.find((t) => t.id === tipoId) || TIPOS[0];
  const key = `${tipo.file}-${year}`;
  if (cache.has(key)) return cache.get(key);
  const p = fetch(new URL(`${key}.md`, BASE), { cache: 'force-cache' })
    .then((r) => (r.ok ? r.text() : null))
    .then((txt) => (txt ? splitTopics(txt) : null))
    .catch(() => null);
  cache.set(key, p);
  const res = await p;
  if (!res) cache.delete(key); // reintentar cuando se copien los archivos
  return res;
}
