// Genera js/data/temario_drive.js y js/data/casos_drive.js a partir de los 16 .md de Drive (carpetas «CALOT-OS R1–R4»:
// 01-resumenes-detallados, 02-resumenes-breves, 03-puntos-clave, 04-casos-clinicos).
// Uso: node scripts/build-drive.mjs <carpeta con R1-det.md, R1-breve.md, R1-puntos.md, R1-casos.md, …> js/data/temario_drive.js .
import fs from 'node:fs';
import path from 'node:path';

const DIR = process.argv[2];
const OUT = process.argv[3];
const REPO = process.argv[4];

const read = (f) => fs.readFileSync(path.join(DIR, f), 'utf8').replace(/\r/g, '');

// Correcciones médicas al material de Drive (desactualizado frente a guías vigentes)
const FIXES = [
  [/reanimación con líquidos intravenosos temprana y vigorosa \(solución cristaloide, preferentemente Ringer lactato\)/g,
    'reanimación con líquidos intravenosos temprana y moderada, no agresiva (solución cristaloide, preferentemente Ringer lactato; el ensayo WATERFALL 2022 mostró más sobrecarga de volumen sin beneficio con la reanimación agresiva)'],
  [/Reanimación vigorosa temprana con Ringer lactato/g, 'Reanimación temprana y moderada (no agresiva, WATERFALL 2022) con Ringer lactato'],
];
const fix = (s) => FIXES.reduce((acc, [re, rep]) => acc.replace(re, rep), s);

// Divide un archivo en temas: «## Tema N. Título» o «## N. Título»
function splitTopics(md) {
  const lines = md.split('\n');
  const out = [];
  let cur = null;
  for (const line of lines) {
    const m = /^##\s+(?:Tema\s+)?(\d+)\.\s+(.+?)\s*$/.exec(line);
    if (m) {
      cur = { n: Number(m[1]), title: m[2].trim(), body: [] };
      out.push(cur);
      continue;
    }
    if (/^#{1,2}\s/.test(line) && cur) { cur = null; continue; } // «# 02 — …», «## Temas», «## Fuente…»
    if (cur) cur.body.push(line);
  }
  return out.map((t) => ({ ...t, body: fix(t.body.join('\n').replace(/\n---\s*$/g, '').trim()) }));
}

// Encabezados de sección uniformes (### …) y negritas de sección de R4 convertidas a encabezado
function normDet(body) {
  return body
    .split('\n')
    .map((l) => {
      const h = /^#{3,5}\s+(.+)$/.exec(l);
      if (h) return `### ${h[1].trim()}`;
      const b = /^\*\*([^*]{3,60}?)[.:]\*\*\s*(.*)$/.exec(l);
      if (b) return `### ${b[1].trim()}\n\n${b[2].trim()}`;
      return l;
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function bullets(body) {
  return body.split('\n').map((l) => l.trim())
    .filter((l) => /^(-|\*|\d+\.)\s+/.test(l))
    .map((l) => l.replace(/^(-|\*|\d+\.)\s+/, '').trim())
    .filter(Boolean);
}

// Casos: «### Caso 1.1», «#### Caso 1.1», «### Caso 1» o «**Caso 5.2**»
function parseCases(body) {
  const lines = body.split('\n');
  const chunks = [];
  let cur = null;
  for (const l of lines) {
    const hm = /^(?:#{3,4}\s*Caso\b.*|\*\*Caso\s+[\d.]+\.?\*\*\.?)(.*)$/.exec(l.trim());
    if (hm && /^(#{3,4}\s*Caso\b|\*\*Caso\s+[\d.]+)/.test(l.trim())) {
      cur = []; chunks.push(cur);
      if (/^\*\*/.test(l.trim()) && hm[1].trim()) cur.push(hm[1].trim());
      continue;
    }
    if (cur) cur.push(l);
  }
  return chunks.map((c) => {
    const vign = [];
    const opts = [];
    let ans = -1;
    const exp = [];
    let stage = 'v';
    for (const raw of c) {
      const l = raw.trim();
      if (!l || /^---+$/.test(l)) continue;
      const o = /^(?:[-*]\s*)?(?:\*\*)?([A-E])[).](?:\*\*)?\s*(.+)$/.exec(l);
      const a = /Respuesta correcta:\s*\**\s*([A-E])/i.exec(l);
      if (a) { ans = 'ABCDE'.indexOf(a[1]); stage = 'e'; continue; }
      if (stage !== 'e' && o && (stage === 'o' || /^(?:[-*]\s*)?(?:\*\*)?A[).]/.test(l))) {
        stage = 'o';
        opts.push(o[2].replace(/\*\*/g, '').trim());
        continue;
      }
      if (stage === 'v') vign.push(l);
      else if (stage === 'e') {
        if (/^\*\*Por qué no los distractores/i.test(l) && /contradice el razonamiento anterior/.test(l)) continue; // relleno genérico
        exp.push(l.replace(/^\*\*Explicaci[oó]n:?\*\*:?\s*/i, '').replace(/^\*\*Correcta\s+[A-E]\.?\*\*\s*/i, ''));
      }
    }
    let text = vign.join(' ').replace(/\s+/g, ' ').trim();
    let stem = 'Elige la mejor respuesta:';
    const q = /^(.*?)(¿[^¿]*\?)\s*$/.exec(text);
    if (q && q[1].trim().length > 20) { text = q[1].trim(); stem = q[2].trim(); }
    return { context: fix(text), stem: fix(stem), options: opts.map(fix), answer: ans, explanation: fix(exp.join('\n\n').trim()) };
  }).filter((c) => c.options.length >= 2 && c.answer >= 0 && c.answer < c.options.length && c.context);
}


// El material de Drive pone la correcta casi siempre en B: se rota de forma fija (por id) para repartirla en A–D
// y se reescriben las letras que la explicación menciona.
function hashStr(str) { let h = 2166136261; for (const ch of str) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function balance(id, c) {
  const n = c.options.length;
  const target = hashStr(id) % n;
  const shift = (target - c.answer + n) % n;
  if (!shift) return c;
  const newPos = (i) => (i + shift) % n;
  const options = new Array(n);
  c.options.forEach((o, i) => { options[newPos(i)] = o; });
  const L = 'ABCDE';
  const remap = (ch) => { const i = L.indexOf(ch); return i >= 0 && i < n ? L[newPos(i)] : ch; };
  const explanation = c.explanation
    .replace(/\(([A-E])\)/g, (m, ch) => `(${remap(ch)})`)
    .replace(/(^|[\s*;.(])([A-E])(?=(\s+es\s+(in)?correcta|\s+\(|\s*:\*\*|\s*\*\*\s*es|\s+no\b|\s+y\s+[A-E]\b|,\s*[A-E]\b|\s+ser[ií]a))/g, (m, pre, ch) => `${pre}${remap(ch)}`)
    .replace(/(opci[oó]n|inciso|Correcta)\s+([A-E])\b/g, (m, w, ch) => `${w} ${remap(ch)}`)
    .replace(/\b([A-E])(?=\s+y\s+[A-E]\s+(son|est))/g, (m, ch) => remap(ch))
    .replace(/(\s+y\s+)([A-E])(?=\s+(son|est))/g, (m, y, ch) => `${y}${remap(ch)}`);
  return { ...c, options, answer: newPos(c.answer), explanation };
}

// ---- Temario del hospital ----
const HOSP = {};
const loadHosp = async () => {
  for (const f of ['temario_r1', 'temario_r3', 'temario_r4']) {
    const m = await import(path.join(REPO, 'js/data', `${f}.js`));
    Object.values(m)[0].forEach((t, i) => { HOSP[t.id] = { ...t, order: i + 1 }; });
  }
  const R2 = [['piel', 'Piel y Tejido Subcutáneo'], ['quemaduras', 'Quemaduras'], ['neoplasias', 'Neoplasias'], ['pared', 'Pared Abdominal y Hernias'], ['esofago', 'Esófago'], ['estomago', 'Estómago y Duodeno'], ['delgado', 'Intestino Delgado'], ['colon', 'Colon y Apéndice'], ['recto', 'Recto y Ano']];
  R2.forEach(([id, title], i) => { HOSP[`r2:${id}`] = { id: `r2:${id}`, aprende: id, year: 'R2', title, order: i + 1 }; });
};

// Tema de Drive → tema del temario HGR 72
const MAP = {
  R1: { 1: 'r1-rbt', 2: 'r1-liquidos', 3: 'r1-choque', 4: 'r1-perioperatorio', 5: 'r1-nutricion', 6: 'r1-sangre', 7: 'r1-cicatrizacion', 8: 'r1-infeccion', 9: 'r1-tecnicas', 10: 'r1-trauma', 11: 'r2:piel', 12: 'r2:colon', 13: 'r3-vias-biliares', 14: 'r2:pared', 15: 'r1-profesionalismo' },
  R2: { 1: 'r2:esofago', 2: 'r2:estomago', 3: 'r3-higado', 4: 'r3-vias-biliares', 5: 'r3-pancreas', 6: 'r2:colon', 7: 'r2:pared', 8: 'r3-intestino', 9: 'r2:colon', 10: 'r2:colon', 11: 'r2:recto', 12: 'r1-trauma' },
  R3: { 1: 'r2:neoplasias', 2: 'r3-mama', 3: 'r2:colon', 4: 'r2:estomago', 5: 'r3-higado', 6: 'r3-tiroides', 7: 'r4-torax', 8: 'r4-vascular', 9: 'r1-trauma', 10: 'r2:pared', 11: 'r4-trasplante', 12: 'r3-peritoneo' },
  R4: { 1: 'r3-vias-biliares', 2: 'r3-pancreas', 3: 'r3-peritoneo', 4: 'r2:recto', 5: 'r2:esofago', 6: 'r1-trauma', 7: 'r3-tiroides', 8: 'r2:pared', 9: 'r4-vascular', 10: 'r4-trasplante', 11: 'r2:delgado', 12: 'r1-profesionalismo' },
};

const COLORS = { R1: '#4fb3ff', R2: '#ff8a3d', R3: '#c86bff', R4: '#3ccf8e' };
const words = (s) => String(s).split(/\s+/).filter(Boolean).length;
const mins = (w) => Math.max(1, Math.round(w / 220));

await loadHosp();

const drive = {};
for (const y of ['R1', 'R2', 'R3', 'R4']) {
  const det = splitTopics(read(`${y}-det.md`));
  const brv = splitTopics(read(`${y}-breve.md`));
  const pts = splitTopics(read(`${y}-puntos.md`));
  const cas = splitTopics(read(`${y}-casos.md`));
  drive[y] = det.map((t) => ({
    src: y, n: t.n, title: t.title, hosp: MAP[y][t.n],
    det: normDet(t.body),
    breve: (brv.find((b) => b.n === t.n)?.body || '').trim(),
    puntos: bullets(pts.find((p) => p.n === t.n)?.body || ''),
    casos: parseCases(cas.find((c) => c.n === t.n)?.body || ''),
  }));
  console.error(y, drive[y].map((t) => `${t.n}:${t.hosp}:${words(t.det)}w/${t.puntos.length}p/${t.casos.length}c`).join(' '));
}

const all = Object.values(drive).flat();
const byHosp = {};
for (const t of all) {
  if (!t.hosp || !HOSP[t.hosp]) throw new Error(`Sin tema de hospital para ${t.src}-${t.n}`);
  (byHosp[t.hosp] ||= []).push(t);
}

const lvl = (t) => `nivel ${t.src}`;
const SECT_GROUPS = [
  ['Definición, epidemiología y fisiopatología', /^(definici|epidemiolog|fisiopatolog|anatom|biolog)/i],
  ['Cuadro clínico, diagnóstico y clasificación', /^(cuadro|diagn|clasificaci|valoraci|estadific)/i],
  ['Tratamiento, complicaciones y seguimiento', /./],
];
function splitSections(md) {
  const parts = md.split(/\n(?=### )/);
  const groups = SECT_GROUPS.map(([title]) => ({ title, parts: [] }));
  let gi = 0;
  for (const p of parts) {
    const h = /^### (.+)/.exec(p)?.[1] || '';
    if (SECT_GROUPS[1][1].test(h)) gi = Math.max(gi, 1);
    if (/^(tratamiento|complicac|seguimiento|pron|decisi)/i.test(h)) gi = 2;
    groups[gi].parts.push(p);
  }
  return groups.filter((g) => g.parts.join('').trim());
}

let sbCounter = 0;
const mkSub = (num, title, md) => {
  const w = words(md);
  sbCounter++;
  return { id: `dr-${sbCounter}`, num: String(num).padStart(2, '0'), title, markdown: md, wordCount: w, readTimeMin: mins(w), fuente: 'drive' };
};

// ---- Módulos nuevos de Aprende (R1, R3, R4) ----
const modules = [];
const yearOrder = { R1: 1, R2: 2, R3: 3, R4: 4 };
const hospIds = Object.keys(byHosp).filter((id) => !id.startsWith('r2:'))
  .sort((a, b) => (yearOrder[HOSP[a].year] - yearOrder[HOSP[b].year]) || (HOSP[a].order - HOSP[b].order));
for (const hid of hospIds) {
  const h = HOSP[hid];
  const src = byHosp[hid].sort((a, b) => yearOrder[a.src] - yearOrder[b.src] || a.n - b.n);
  const subblocks = [];
  if (src.length === 1) {
    splitSections(src[0].det).forEach((g, i) => {
      subblocks.push(mkSub(i + 1, g.title.toUpperCase(), `## ${i + 1}. ${g.title.toUpperCase()}\n\n${g.parts.join('\n\n')}`));
    });
  } else {
    src.forEach((t, i) => {
      subblocks.push(mkSub(i + 1, `${t.title.toUpperCase()} (${lvl(t).toUpperCase()})`, `## ${i + 1}. ${t.title.toUpperCase()} · ${lvl(t)}\n\n${t.det}`));
    });
  }
  const summary = src.map((t) => `## ${t.title}${src.length > 1 ? ` · ${lvl(t)}` : ''}\n\n${t.breve}`).join('\n\n');
  const keyPoints = `# ${h.title} — puntos clave\n${src.map((t) => t.puntos.map((p) => `- ${p}`).join('\n')).join('\n')}`;
  const total = subblocks.reduce((a, s) => a + s.wordCount, 0);
  modules.push({
    id: `ap-${hid}`,
    code: `${h.year} · TEMA ${String(h.order).padStart(2, '0')}`,
    num: `${h.year.slice(1)}.${String(h.order).padStart(2, '0')}`,
    title: h.title,
    subtitle: `Resumen estructurado del temario HGR 72 (${h.year}): definición, diagnóstico, clasificación, tratamiento y complicaciones${src.length > 1 ? `, integrando ${src.length} niveles (${src.map((t) => t.src).join(', ')})` : ''}.`,
    tag: h.sistema || h.title,
    year: h.year,
    color: COLORS[h.year],
    subtopics: (h.subtemas || []).map((s) => s.t),
    totalWords: total,
    readTimeMin: mins(total),
    subblocks,
    summary,
    keyPoints,
    linkedResources: [],
    hospId: hid,
    fuente: 'CALOT-OS · resúmenes R1–R4 (Drive, nov 2026)',
  });
}

// ---- Añadidos a los módulos R2 existentes (se conservan íntegros; esto va al final) ----
const r2Add = {};
for (const [hid, src] of Object.entries(byHosp)) {
  if (!hid.startsWith('r2:')) continue;
  const aid = HOSP[hid].aprende;
  src.sort((a, b) => yearOrder[a.src] - yearOrder[b.src] || a.n - b.n);
  r2Add[aid] = {
    subblocks: src.map((t) => mkSub(0, `SÍNTESIS ESTRUCTURADA · ${t.title.toUpperCase()} (${lvl(t).toUpperCase()})`, `## SÍNTESIS ESTRUCTURADA · ${t.title.toUpperCase()} · ${lvl(t)}\n\n${t.det}`)),
    summary: src.map((t) => `## Repaso rápido · ${t.title} (${lvl(t)})\n\n${t.breve}`).join('\n\n'),
    keyPoints: src.map((t) => `# ${t.title} (${lvl(t)}) — puntos clave\n${t.puntos.map((p) => `- ${p}`).join('\n')}`).join('\n\n'),
  };
}

// ---- Repaso de alto rendimiento: perlas por tema ----
const highYield = {};
for (const [hid, src] of Object.entries(byHosp)) {
  const tid = hid.startsWith('r2:') ? HOSP[hid].aprende : `ap-${hid}`;
  highYield[tid] = src.map((t) => ({
    subtema: `Perlas · ${t.title} (${lvl(t)})`,
    puntos: t.puntos.map((p) => ({ texto: p.replace(/\*\*/g, ''), libro: `Síntesis CALOT-OS ${t.src}`, pagina: null, cita: '' })),
  }));
}

// ---- Casos clínicos por año del temario del hospital ----
const cases = [];
const counters = {};
// Orden del banco: año y tema del temario del hospital; dentro del tema, del nivel R1 al R4
const hospKey = (t) => [yearOrder[HOSP[t.hosp].year], HOSP[t.hosp].order, yearOrder[t.src], t.n];
const cmp = (a, b) => { const x = hospKey(a), y = hospKey(b); for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return x[i] - y[i]; return 0; };
for (const t of [...all].sort(cmp)) {
  const h = HOSP[t.hosp];
  const y = h.year.slice(1);
  t.casos.forEach((c, i) => {
    counters[y] = (counters[y] || 0) + 1;
    const id = `puem-r${y}-cc-${t.src.toLowerCase()}-${String(t.n).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`;
    const topicTitle = h.title.replace(/ y Tejido Subcutáneo$/, '');
    const bal = balance(id, c);
    cases.push({
      id,
      number: counters[y],
      title: `${t.title} · caso ${i + 1}`,
      topic: topicTitle,
      topicId: t.hosp.startsWith('r2:') ? h.aprende : `ap-${t.hosp}`,
      nivel: t.src,
      context: c.context,
      questions: [{
        id: `${id}-q1`, ordinal: 1, stem: c.stem, options: bal.options,
        answer_index: bal.answer, correct_text: bal.options[bal.answer], explanation: bal.explanation, topic: topicTitle,
      }],
    });
  });
}

const header = `// Generado desde Drive · carpetas «CALOT-OS R1–R4» (resúmenes detallados, breves, puntos clave y casos clínicos).
// Cada tema de Drive se reparte en el tema del temario del HGR 72 al que pertenece (ver MAP en el generador).
// Correcciones aplicadas: reanimación moderada (no agresiva) en pancreatitis aguda (WATERFALL 2022).
`;
const js = `${header}
export const DRIVE_MODULES = ${JSON.stringify(modules)};

export const DRIVE_R2_ADDITIONS = ${JSON.stringify(r2Add)};

export const DRIVE_HIGH_YIELD = ${JSON.stringify(highYield)};
`;
fs.writeFileSync(OUT, js.replace(/\n\nexport const DRIVE_CASES[\s\S]*$/, ''));
fs.writeFileSync(OUT.replace(/temario_drive\.js$/, 'casos_drive.js'), `${header}\nexport const DRIVE_CASES = ${JSON.stringify(cases)};\n`);
console.error('módulos nuevos', modules.length, '· R2 ampliados', Object.keys(r2Add).length, '· casos', cases.length, JSON.stringify(counters));
console.error(modules.map((m) => `${m.code} ${m.title} (${m.subblocks.length} hojas, ${m.totalWords} palabras)`).join('\n'));
