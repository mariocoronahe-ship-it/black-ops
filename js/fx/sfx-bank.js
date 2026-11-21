// Banco de efectos ElevenLabs (assets/sfx). Se descargan en segundo plano y se
// decodifican al primer uso; si un archivo aún no está listo, la escena usa su respaldo sintetizado.

const BASE = new URL('../../assets/sfx/', import.meta.url);

export const SFX_FILES = {
  boom: 'boom.mp3',
  power: 'power-on.mp3',
  pop: 'pop.mp3',
  alert: 'alert.mp3',
  tecleo: 'tecleo.mp3',
  tension: 'tension.mp3',
  calma1: 'amb-calma-1.mp3',
  calma2: 'amb-calma-2.mp3',
  portada: 'amb-portada.mp3',
  cuenta: 'amb-cuenta.mp3',
  pulsos: 'amb-pulsos.mp3',
  // Lote 2: originales de ElevenLabs en estéreo (128–160 kbps), con estante suave de agudos y pico a -1 dBFS.
  // Los *.mp3 mono de 96 kbps anteriores siguen en assets/sfx, sin uso.
  doom: 'doom-st.mp3',
  darkbed: 'darkbed-st.mp3',
  latido: 'latido-st.mp3',
  epicboom: 'epicboom-st.mp3',
  cyber: 'cyber.mp3',
  heroic: 'heroic-st.mp3',
  apoc: 'apoc.mp3',
  trailer: 'trailer-st.mp3',
  impacto: 'impacto-st.mp3',
  sombra: 'sombra-st.mp3',
  percu: 'percu.mp3',
  riser: 'riser-st.mp3',
  glitch: 'glitch-st.mp3',
  swoosh: 'swoosh-st.mp3',
  whsh: 'whsh-st.mp3',
};

const raw = new Map(); // nombre → Promise<ArrayBuffer>
const decoded = new Map(); // nombre → AudioBuffer
const decoding = new Map(); // nombre → Promise

function fetchRaw(name) {
  if (!raw.has(name)) {
    const url = new URL(SFX_FILES[name], BASE);
    raw.set(name, fetch(url).then((r) => (r.ok ? r.arrayBuffer() : null)).catch(() => null));
  }
  return raw.get(name);
}

// Descarga sin AudioContext (no requiere gesto del usuario).
export function prefetchSfx() {
  Object.keys(SFX_FILES).forEach(fetchRaw);
}

// Decodifica todo lo descargado con el contexto ya creado.
export function warmSfx(ctx) {
  Object.keys(SFX_FILES).forEach((name) => {
    if (decoded.has(name) || decoding.has(name)) return;
    const p = fetchRaw(name)
      .then((buf) => (buf ? ctx.decodeAudioData(buf.slice(0)) : null))
      .then((ab) => { if (ab) decoded.set(name, ab); })
      .catch(() => {})
      .finally(() => decoding.delete(name));
    decoding.set(name, p);
  });
}

export function getSfx(name) {
  return decoded.get(name) || null;
}

if (typeof window !== 'undefined') {
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1200));
  idle(() => prefetchSfx());
}
