#!/usr/bin/env node
// Genera las voces de la intro «El guardián» (adscrita · Dra. Hernández) con ElevenLabs.
// Uso:
//   ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... node scripts/voz-adscrito.mjs

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const API_KEY = process.env.ELEVENLABS_API_KEY?.trim();
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID?.trim();

if (!API_KEY || !VOICE_ID) {
  console.error('Faltan variables de entorno: ELEVENLABS_API_KEY y ELEVENLABS_VOICE_ID.');
  console.error('Ejemplo: ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... node scripts/voz-adscrito.mjs');
  process.exit(1);
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = resolve(ROOT, 'assets/voz');

const LINES = [
  ['ads-saludo-dia.mp3', 'Buenos días, doctora Hernández.'],
  ['ads-saludo-tarde.mp3', 'Buenas tardes, doctora Hernández.'],
  ['ads-saludo-noche.mp3', 'Buenas noches, doctora Hernández.'],
  ['ads-orden.mp3', 'Su servicio está en orden. Yo vigilo mientras usted enseña.'],
  ['ads-resumen.mp3', 'Le preparé el resumen de su grupo.'],
  ['ads-mensajes.mp3', 'Tiene mensajes de sus residentes.'],
  ['ads-calma.mp3', 'Todo en calma esta noche.'],
  ['ads-cuando.mp3', 'Cuando quiera, doctora.'],
];

const VOICE_SETTINGS = {
  stability: 0.6,
  similarity_boost: 0.8,
  style: 0.15,
  use_speaker_boost: true,
};

await mkdir(OUT_DIR, { recursive: true });

for (const [file, text] of LINES) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(VOICE_ID)}?output_format=mp3_44100_128`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg',
    },
    body: JSON.stringify({
      text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: VOICE_SETTINGS,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error(`Error generando ${file}: HTTP ${res.status} ${detail.slice(0, 200)}`);
    process.exit(1);
  }

  const bytes = Buffer.from(await res.arrayBuffer());
  const outPath = resolve(OUT_DIR, file);
  await writeFile(outPath, bytes);
  console.log(`✓ ${file} (${(bytes.length / 1024).toFixed(1)} KB)`);
}

console.log(`\nListo: ${LINES.length} archivos generados en assets/voz/`);
