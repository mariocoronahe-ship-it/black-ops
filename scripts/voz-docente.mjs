#!/usr/bin/env node
// Genera la voz guía del panel docente (bienvenida, secciones y avisos por residente)
// con ElevenLabs y la misma voz de CALOT. Salida: assets/voz/docente/<clave>.mp3
// La llave se lee SOLO del entorno; nunca se imprime ni se guarda.
// Uso:
//   ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... node scripts/voz-docente.mjs          (solo las que faltan)
//   ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... node scripts/voz-docente.mjs --force  (regenera todas)

import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DOCENTE_LINES } from '../js/fx/docente-voice-lines.js';

const API_KEY = process.env.ELEVENLABS_API_KEY?.trim();
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID?.trim();
const FORCE = process.argv.includes('--force');

if (!API_KEY || !VOICE_ID) {
  console.error('Faltan variables de entorno: ELEVENLABS_API_KEY y ELEVENLABS_VOICE_ID.');
  process.exit(1);
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = resolve(ROOT, 'assets/voz/docente');
const VOICE_SETTINGS = { stability: 0.6, similarity_boost: 0.8, style: 0.15, use_speaker_boost: true };

await mkdir(OUT_DIR, { recursive: true });
let made = 0;
let skipped = 0;
for (const [key, text] of Object.entries(DOCENTE_LINES)) {
  const outPath = resolve(OUT_DIR, `${key}.mp3`);
  if (!FORCE) {
    try { await access(outPath); skipped += 1; continue; } catch {}
  }
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(VOICE_ID)}?output_format=mp3_44100_128`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'xi-api-key': API_KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({ text, model_id: 'eleven_multilingual_v2', voice_settings: VOICE_SETTINGS }),
  });
  if (!res.ok) {
    console.error(`Error generando ${key}: HTTP ${res.status}`);
    process.exit(1);
  }
  await writeFile(outPath, Buffer.from(await res.arrayBuffer()));
  made += 1;
  console.log(`✓ ${key}.mp3`);
}
console.log(`Listo: ${made} generadas, ${skipped} ya existían (${Object.keys(DOCENTE_LINES).length} en total).`);
