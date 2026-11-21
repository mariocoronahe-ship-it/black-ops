// Genera las voces del guía para las testers con ElevenLabs.
// Uso (la llave NUNCA se guarda en el repo ni se imprime):
//   ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... node scripts/voz-testers.mjs
// Opcional: SOLO=tester-chantal,cierre-areli para regenerar solo algunos.
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const KEY = process.env.ELEVENLABS_API_KEY;
const VOICE = process.env.ELEVENLABS_VOICE_ID;
if (!KEY || !VOICE) {
  console.error('Faltan ELEVENLABS_API_KEY y/o ELEVENLABS_VOICE_ID en el entorno.');
  process.exit(1);
}

// Generados con la voz «ias» (Eleven v4) desde la web de ElevenLabs; mismos textos que js/fx/intro-tester.js.
// Tono: guardián intimidante y sarcástico, pero de buenas con las primeras testers. Saludo, cierre y regreso son por tester.
const CLIPS = {
  'tester-chantal': '[susurro] Doctora Chantal... por fin. [amenazante] Llevaba un rato observándote.',
  'tester-areli': '[calmado] Doctora Areli. Puntual... eso me gusta. [sarcástico] Pasa. No muerdo... todavía.',
  'tester-daniela': '[calmado] Doctora Daniela. [sarcástico] Tranquila... el cuarto año todavía no es para ti. Aquí, yo decido qué ves.',
  'guia-que-es': '[calmado] Soy el guardián de CALOT-OS. Nací en el HGR setenta y dos... entre guardias, desvelos, y residentes que juraban que ya sabían cirugía.',
  'guia-que-tiene': 'Aquí guardo todo: resúmenes por tema y subtema, repaso espaciado, casos clínicos, juegos, escalas, un atlas en tres dimensiones... y el PUEM, en su propio rincón. [sarcástico] De nada.',
  'guia-objetivo': 'Mi meta es simple: que cada día de estudio cuente. Yo lo mido todo... absolutamente todo. [amenazante] Y si dejas de estudiar... me voy a enterar.',
  'guia-tu-papel': 'Eres de las primeras en entrar... y eso tiene sus privilegios: contigo me voy a portar bien. Lo que falle, lo que te guste, lo que te confunda... díselo a Mario desde el botón de mensajes. [sarcástico] Él cree que aquí manda. Déjalo creerlo.',
  'guia-competencia': '[sarcástico] Ah... y un detalle. Ustedes tres van a competir. Juegos, sesiones de estudio... todo cuenta. Yo llevo las estadísticas. [susurro] La mejor se gana una recompensa... las demás, mi compasión.',
  'cierre-chantal': '[susurro] Bienvenida, Chantal. Con las primeras soy amable... no me hagas cambiar de opinión.',
  'cierre-areli': '[calmado] Bienvenida, Areli. Hoy estoy de buen humor... aprovéchalo. [susurro] Te estaré vigilando.',
  'cierre-daniela': '[calmado] Bienvenida, Daniela. Pórtate bien conmigo... y yo me portaré bien contigo. [susurro] Por ahora.',
  'regreso-chantal': '[susurro] Volviste, Chantal. Sabía que no ibas a poder alejarte.',
  'regreso-areli': '[sarcástico] Areli, de vuelta. Tus tarjetas te extrañaban... yo, no tanto.',
  'regreso-daniela': '[calmado] Daniela. Otra vez por aquí... me agrada. Sigamos.',
};

const only = (process.env.SOLO || '').split(',').map((s) => s.trim()).filter(Boolean);
const outDir = fileURLToPath(new URL('../assets/voz/', import.meta.url));
await mkdir(outDir, { recursive: true });

for (const [name, text] of Object.entries(CLIPS)) {
  if (only.length && !only.includes(name)) continue;
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({
      text,
      model_id: 'eleven_multilingual_v2',
      // Grave, pausada, enigmática pero amable
      voice_settings: { stability: 0.62, similarity_boost: 0.8, style: 0.2, use_speaker_boost: true },
    }),
  });
  if (!res.ok) {
    console.error(`✗ ${name}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(`${outDir}${name}.mp3`, buf);
  console.log(`✓ ${name}.mp3 (${(buf.length / 1024).toFixed(0)} KB)`);
}
