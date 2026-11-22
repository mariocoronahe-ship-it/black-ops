/* ==========================================================================
   Black Ops · Frases de la voz guía del panel docente (Dra. Hernández)
   Módulo puro (sin imports) para que lo usen tanto la app como
   scripts/voz-docente.mjs, que genera los mp3 con ElevenLabs en
   assets/voz/docente/<clave>.mp3. Si un mp3 no existe, la app usa la voz
   del navegador con el mismo texto.
   ========================================================================== */

export const DOCENTE_R2 = [
  ['jesus', 'Jesús'], ['alina', 'Alina'], ['angel_g', 'Ángel González'], ['diana', 'Diana'],
  ['alejandro', 'Alejandro'], ['luis', 'Luis'], ['isahy', 'Isahy'], ['ulises', 'Ulises'],
  ['delia', 'Delia'], ['dulce', 'Dulce'], ['tiffany', 'Tiffany'], ['marco', 'Marco'], ['r2_mario', 'Mario'],
];

const BASE = {
  bienvenida: 'Bienvenida, doctora Hernández. Soy CALOT, su asistente de examen. '
    + 'En el menú tiene seis secciones: Estadísticas, Progreso, Ranking, Perfiles de cada residente, '
    + 'Vigilancia en vivo, y Mensajes y alertas. Desde la Consola de examen sube su examen y lo lanza a todos. '
    + 'Todo el contenido de la aplicación está basado en el Tratado de Cirugía General y en Schwartz, '
    + 'así que puede consultar ahí la información de cada pregunta. '
    + 'Durante el examen le avisaré cuando alguien salga, termine o necesite su autorización.',
  'sec-stats': 'Estadísticas: promedio del grupo y qué contestó cada pregunta.',
  'sec-progreso': 'Progreso: en qué pregunta va cada residente, en vivo.',
  'sec-ranking': 'Ranking: la clasificación del grupo.',
  'sec-perfiles': 'Perfiles: toque la placa de un residente para ver su detalle.',
  'sec-vigilancia': 'Vigilancia en vivo: salidas de pantalla e interrupciones.',
  'sec-mensajes': 'Mensajes y alertas: escriba a todos o a un residente.',
  'sec-consola': 'Consola de examen: suba su examen y láncelo a todos.',
  'examen-comenzo': 'Atención, doctora: el examen comenzó.',
  'cinco-minutos': 'Atención, doctora: quedan cinco minutos.',
  'todos-terminaron': 'Doctora, ya terminaron todos.',
  'mensaje-enviado': 'Mensaje enviado.',
};

/** Clave → texto de todas las frases (incluye las de cada residente). */
export const DOCENTE_LINES = (() => {
  const out = { ...BASE };
  for (const [id, n] of DOCENTE_R2) {
    out[`salio-${id}`] = `Atención, doctora: ${n} salió del examen.`;
    out[`termino-${id}`] = `${n} ya terminó.`;
    out[`bloqueado-${id}`] = `Atención, doctora: ${n} salió dos veces y necesita su autorización.`;
  }
  return out;
})();
