#!/usr/bin/env node
// Genera el aviso de voz de CALOT al iniciar el examen R2 (assets/voz/examen-inicio.mp3) con ElevenLabs.
// Usa la misma voz de guía de la app (ELEVENLABS_VOICE_ID). Si el archivo no existe, la app usa la voz del navegador.
// Uso:
//   ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... node scripts/voz-examen.mjs

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const API_KEY = process.env.ELEVENLABS_API_KEY?.trim();
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID?.trim();

if (!API_KEY || !VOICE_ID) {
  console.error('Faltan variables de entorno: ELEVENLABS_API_KEY y ELEVENLABS_VOICE_ID.');
  console.error('Ejemplo: ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... node scripts/voz-examen.mjs');
  process.exit(1);
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = resolve(ROOT, 'assets/voz');

const LINES = [
  ['examen-inicio.mp3', 'Atención. El examen ha comenzado. Cuidado al hacer trampa: CALOT está vigilando.'],
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
