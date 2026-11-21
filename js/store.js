// Tiny localStorage-backed store with automatic ARGOS-MED seed migration, telemetry, seenTopics and HGR 72 personal state.
import {
  PENDIENTES_WHATSAPP, PENDIENTES_RETIRADOS, EVENTOS_RETIRADOS, CALENDARIO_MARIO, ROTACIONES_MARIO, WA_SYNC_ID,
} from './data/pendientes_whatsapp.js';
import { perfil, perfilId } from './perfil.js?v=20261122c';

// Mario conserva su almacén de siempre; cada tester tiene el suyo y no recibe los datos personales de Mario.
const isOwner = () => perfil().owner;
const myName = () => perfil().name;

// Datos pesados: se cargan una sola vez con loadStoreData() antes de usar questions(), inferTopicId o el progreso por tema.
let TEMARIO_APRENDE = [];
let ARGOS_FLASHCARDS = [];
let PUEM_SERIAL_CASES = [];
let dataReady = null;
export const loadStoreData = () => (dataReady ||= Promise.all([
  import('./data/temario_aprende.js?v=20261122c'),
  import('./data/repaso_alto_rendimiento.js?v=20261122c'),
]).then(([t, r]) => {
  TEMARIO_APRENDE = t.TEMARIO_APRENDE;
  ARGOS_FLASHCARDS = r.ARGOS_FLASHCARDS;
  PUEM_SERIAL_CASES = r.PUEM_SERIAL_CASES;
  TOPIC_ID_SET = new Set(TEMARIO_APRENDE.map((x) => x.id));
}).catch((e) => { dataReady = null; throw e; }));

const storeKey = () => (isOwner() ? 'calot:v3' : `calot:v3:${perfilId()}`);
const legacyKeys = () => (isOwner() ? ['calot:v2', 'nous:v1', 'argos:v1'] : []);
const listeners = new Set();
let mem = null;

const uid = () => Math.random().toString(36).slice(2, 10);
export const todayISO = (d = new Date()) => {
  const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return z.toISOString().slice(0, 10);
};
const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return todayISO(d); };

const TAG_TO_TOPIC_ID = {
  'Piel/Quemaduras': 'piel',
  'Neoplasias/Onco': 'neoplasias',
  'Pared': 'pared',
  'Esófago': 'esofago',
  'Estómago/Duodeno': 'estomago',
  'Intestino Delgado': 'delgado',
  'Colon': 'colon',
  'Recto y Ano': 'recto',
  'Hepatobiliar': 'hepatobiliar',
  'Trauma': 'trauma',
};

function defaultTelemetry() {
  return {
    secBySection: { inicio: 0, aprende: 0, repasa: 0, recursos: 0, juegos: 0, stats: 0, hgr72: 0 },
    secByDay: {},
    gameSessions: [],
    caseProgress: {},
    topicGames: {},
  };
}

function defaultHgr72Personal() {
  if (!isOwner()) return { rotaciones: [], guardias: [], pendientes: [], calendario: [], borrados: {} };
  return {
    rotaciones: ROTACIONES_MARIO.map((r) => ({ ...r, updated: 0 })),
    guardias: [],
    pendientes: PENDIENTES_WHATSAPP.map((p) => ({ ...p, done: false, updated: 0 })),
    calendario: CALENDARIO_MARIO.map((c) => ({ ...c, updated: 0 })),
    borrados: {},
  };
}

// Datos de demostración de versiones anteriores que ya no deben aparecer
const DEMO_IDS = {
  tasks: ['t-1', 't-2', 't-3', 't-4', 't-5', 't-6'],
  cases: ['c-1', 'c-2', 'c-3', 'c-4'],
  events: ['ev-guardia', 'ev-puem'],
};
const DEMO_HGR = {
  rotaciones: ['rot-1', 'rot-2'],
  guardias: ['g-1', 'g-2', 'g-3'],
  pendientes: ['hp-1', 'hp-2', 'hp-3', 'hp-4'],
};
const DEMO_GAMES = ['gs-1', 'gs-2', 'gs-3', 'gs-4'];
const DEMO_SEC = { inicio: 900, aprende: 14400, repasa: 9600, recursos: 5400, juegos: 6300, stats: 600, hgr72: 1800 };

function cleanDemo(s) {
  for (const [col, ids] of Object.entries(DEMO_IDS)) {
    s[col] = s[col].filter((x) => !ids.includes(x.id));
  }
  const hp = s.hgr72Personal;
  for (const [k, ids] of Object.entries(DEMO_HGR)) hp[k] = hp[k].filter((x) => !ids.includes(x.id));
  s.telemetry.gameSessions = s.telemetry.gameSessions.filter((g) => !DEMO_GAMES.includes(g.id));
  // pendientes y eventos de sincronizaciones anteriores, ya reemplazados
  hp.pendientes = hp.pendientes.filter((x) => !PENDIENTES_RETIRADOS.includes(x.id));
  s.events = s.events.filter((e) => !EVENTOS_RETIRADOS.includes(e.id));
}

function migrate(s) {
  if (!s.migrations || typeof s.migrations !== 'object') s.migrations = {};
  if (isOwner() && !s.migrations[WA_SYNC_ID]) {
    const t = Date.now();
    // tiempo de estudio sembrado como demo en versiones anteriores
    if (!s.migrations.demoSec) {
      for (const [k, v] of Object.entries(DEMO_SEC)) {
        if (typeof s.telemetry.secBySection[k] === 'number') s.telemetry.secBySection[k] = Math.max(0, s.telemetry.secBySection[k] - v);
      }
      s.migrations.demoSec = t;
    }
    const hp = s.hgr72Personal;
    for (const id of PENDIENTES_RETIRADOS) hp.borrados[id] = t;
    const seedList = (key, items, extra = {}) => {
      for (const it of items) {
        if (!hp[key].some((x) => x.id === it.id) && !hp.borrados[it.id]) hp[key].push({ ...it, ...extra, updated: 0 });
      }
    };
    seedList('pendientes', PENDIENTES_WHATSAPP, { done: false });
    seedList('calendario', CALENDARIO_MARIO);
    seedList('rotaciones', ROTACIONES_MARIO);
    s.migrations[WA_SYNC_ID] = t;
  }
}

// Las semillas llevan updated:0: al vincular un dispositivo, cualquier edición real (updated > 0) o tombstone del remoto les gana.
function seed() {
  return {
    settings: { name: myName(), weeklyGoal: 20, updated: 1 },
    seenTopics: {},
    telemetry: defaultTelemetry(),
    hgr72Personal: defaultHgr72Personal(),
    events: [],
    log: [],
    notes: [
      {
        id: 'n-tg18', kind: 'nota', tag: 'Hepatobiliar', updated: 0,
        title: 'Colecistitis y Colangitis Aguda — Tokyo Guidelines 2018 & Strasberg',
        body: `# Criterios diagnósticos de Colecistitis Aguda (TG18)
**A. Inflamación local:** signo de Murphy; masa, dolor o hipersensibilidad en hipocondrio derecho.
**B. Inflamación sistémica:** fiebre > 38 °C, PCR > 3 mg/dL, leucocitosis > 10,000/mm³.
**C. Imagen (USG estándar inicial):** pared vesicular ≥ 4 mm, líquido pericolecístico, signo de Murphy ultrasonográfico, litos impactados.
- **Sospecha:** A + B | **Definitivo:** A + B + C

# Clasificación de Severidad TG18 (Colecistitis)
- **Grado III (Severa — disfunción orgánica):** Cardiovascular (dopamina ≥ 5 µg/kg/min o norepinefrina), Neurológica (alteración de conciencia), Respiratoria (PaO₂/FiO₂ < 300), Renal (oliguria o Cr > 2.0 mg/dL), Hepática (**INR > 1.5**), Hematológica (**plaquetas < 100,000/mm³**).
- **Grado II (Moderada):** Leucocitos > 18,000/mm³, masa palpable en HCD, duración **> 72 h**, o inflamación local marcada (gangrenosa, enfisematosa, absceso pericolecístico/hepático, peritonitis biliar).
- **Grado I (Leve):** Sin criterios de Grado II ni III.

# Colangitis Aguda (TG18)
- **Tríada de Charcot:** fiebre con escalofríos + ictericia + dolor en HCD.
- **Péntada de Reynolds:** Charcot + hipotensión (choque) + alteración del estado mental.
- **Descompresión biliar de elección:** CPRE temprana (< 24 h en Grado II; urgente en Grado III tras reanimación).

# Visión Crítica de Seguridad (Strasberg)
1. **Triángulo hepatocístico (de Calot)** limpio de tejido graso y fibroso (límites: conducto cístico, conducto hepático común y borde inferior hepático).
2. **Tercio inferior de la vesícula** separado de la placa cística.
3. **Dos y solo dos estructuras** entrando a la vesícula (conducto cístico y arteria cística).
- **Estrategia de rescate en vesícula difícil:** colecistectomía subtotal (fenestrante o reconstitutiva) antes que disecar a ciegas el hilio.

?? ¿Cuáles son los 3 componentes de la Visión Crítica de Seguridad de Strasberg? :: 1) Triángulo hepatocístico limpio de grasa y fibrosis; 2) Tercio inferior de la vesícula separado de la placa cística; 3) Solo dos estructuras (conducto y arteria cística) entrando a la vesícula.
?? ¿Qué parámetro hepático y de duración definen Colecistitis Grado III y Grado II en TG18? :: Grado III: INR > 1.5 (disfunción orgánica); Grado II: evolución > 72 horas o leucocitos > 18,000/mm³.
?? ¿Cuáles son los límites anatómicos del Triángulo Hepatocístico (Calot moderno)? :: Conducto cístico (lateral/inferior), conducto hepático común (medial) y borde inferior del hígado (superior).`,
      },
      {
        id: 'n-puem1-piel', kind: 'nota', tag: 'Piel/Quemaduras', updated: 0,
        title: 'PUEM Bloque 1 · Piel y Tejido Subcutáneo (Tumores e Infecciones Necrosantes)',
        body: `# Tumores Malignos de Piel (Programa PUEM R2)
- **Carcinoma Basocelular (CBC):** neoplasia maligna cutánea más frecuente (75–80 %). Crecimiento lento, bordes perlados con telangiectasias, rara metástasis. Margen quirúrgico estándar: 4 mm (Mohs en zona H facial o recidivante).
- **Carcinoma Epidermoide (CEC):** segundo en frecuencia; asociado a radiación UV crónica, úlcera de Marjolin (cicatriz de quemadura crónica) e inmunosupresión. Potencial metastásico linfático.
- **Melanoma Maligno:** el factor pronóstico individual más importante es el **índice de Breslow** (espesor en milímetros).

# Márgenes de Escisión en Melanoma según Breslow (NCCN)
- **In situ:** 0.5 a 1.0 cm
- **≤ 1.0 mm:** 1.0 cm
- **1.01 a 2.0 mm:** 1.0 a 2.0 cm
- **> 2.0 mm (II y III):** 2.0 cm
- **Biopsia de ganglio centinela:** indicada en Breslow > 0.8 mm (o < 0.8 mm con ulceración).

# Fascitis Necrotizante y Escala LRINEC
- Infección rápidamente progresiva de la fascia superficial/profunda (Tipo I polimicrobiana/Fournier; Tipo II monomicrobiana por *S. pyogenes*).
- **Datos duros:** dolor desproporcionado a los hallazgos cutáneos, crepitación, bullas hemorrágicas, anestesia cutánea por trombosis de vasos perforantes.
- **Conducta:** desbridamiento quirúrgico radical inmediato + antibiótico de amplio espectro. Un puntaje **LRINEC ≥ 6** tiene alta sospecha, pero la clínica manda y nunca retrasa el quirófano.

?? ¿Cuál es el factor pronóstico más importante en el melanoma cutáneo y qué margen quirúrgico requiere un Breslow de 2.5 mm? :: El espesor de Breslow; para > 2.0 mm el margen quirúrgico recomendado es de 2.0 cm.
?? ¿Qué tipo de neoplasia maligna se asocia clásicamente a la úlcera de Marjolin sobre cicatrices de quemadura antigua? :: Carcinoma epidermoide (espinocelular) agresivo.`,
      },
      {
        id: 'n-reflexion', kind: 'reflexion', tag: 'Reflexión', updated: 0,
        title: 'El obstáculo es el camino — Visión Crítica en la Guardia',
        body: `"Lo que impide la acción hace avanzar la acción. Lo que se interpone en el camino se convierte en el camino."
— Marco Aurelio, Meditaciones V.20

En el quirófano, como en el Triángulo de Calot, el tejido inflamado parece caos hasta que disecas con método, paciencia y anatomía.`,
      },
    ],
    library: [
      { id: 'lib-prog', title: 'Programa Operativo de Cirugía General HGR 72 (2026-2027)', author: 'UNAM · PUEM / IMSS HGR 72 · Segundo Año R2', type: 'Guía', tag: 'General', status: 'leyendo', progress: 45, relevance: 5, difficulty: 3, ref: 'atlas/temario-cirugia.pdf' },
      { id: 'lib-sabiston', title: 'Sabiston Textbook of Surgery', author: 'Townsend CM, et al. · 21ª ed.', type: 'Libro', tag: 'General', status: 'leyendo', progress: 48, relevance: 5, difficulty: 4, ref: 'Base biológica de la práctica quirúrgica' },
      { id: 'lib-schwartz', title: 'Schwartz\'s Principles of Surgery', author: 'Brunicardi FC, et al. · 11ª ed.', type: 'Libro', tag: 'General', status: 'leyendo', progress: 35, relevance: 5, difficulty: 4, ref: 'McGraw-Hill AccessSurgery' },
      { id: 'lib-tg18', title: 'Tokyo Guidelines 2018 (TG18) — Colecistitis y Colangitis', author: 'Yokoe M, Strasberg SM, et al. J Hepatobiliary Pancreat Sci', type: 'Guía', tag: 'Hepatobiliar', status: 'resumido', progress: 100, relevance: 5, difficulty: 2, ref: 'doi:10.1002/jhbp.515' },
    ],
    cases: [],
    reviews: [],
    reviewLog: [],
    deleted: {},
    tasks: [],
    missedQuestions: [],
  };
}

const COLLECTIONS = ['notes', 'library', 'tasks', 'events', 'cases', 'reviews'];
const DATED = ['log', 'reviewLog'];

function shape(s) {
  for (const c of COLLECTIONS) if (!Array.isArray(s[c])) s[c] = [];
  for (const c of DATED) if (!Array.isArray(s[c])) s[c] = [];
  if (!s.deleted) s.deleted = {};
  if (!s.settings) s.settings = { name: myName(), weeklyGoal: 20, theme: 'dark' };
  if (!s.settings.theme) s.settings.theme = 'dark';
  if (!s.settings.updated) s.settings.updated = 1;
  if (!s.highlights || typeof s.highlights !== 'object' || Array.isArray(s.highlights)) {
    s.highlights = {};
  }
  if (!s.highlightsTs || typeof s.highlightsTs !== 'object' || Array.isArray(s.highlightsTs)) s.highlightsTs = {};
  if (!s.atlasProgress || typeof s.atlasProgress !== 'object' || Array.isArray(s.atlasProgress)) s.atlasProgress = {};
  if (!Array.isArray(s.missedQuestions)) s.missedQuestions = [];
  if (!s.seenTopics || typeof s.seenTopics !== 'object') {
    s.seenTopics = seed().seenTopics;
  }
  if (!s.telemetry || typeof s.telemetry !== 'object') {
    s.telemetry = defaultTelemetry();
  } else {
    const dt = defaultTelemetry();
    s.telemetry.secBySection = { ...dt.secBySection, ...(s.telemetry.secBySection || {}) };
    s.telemetry.secByDay = { ...dt.secByDay, ...(s.telemetry.secByDay || {}) };
    if (!Array.isArray(s.telemetry.gameSessions)) s.telemetry.gameSessions = dt.gameSessions;
    if (!s.telemetry.caseProgress) s.telemetry.caseProgress = {};
    if (!s.telemetry.topicGames || typeof s.telemetry.topicGames !== 'object') s.telemetry.topicGames = {};
  }
  if (!s.hgr72Personal || typeof s.hgr72Personal !== 'object') {
    s.hgr72Personal = defaultHgr72Personal();
  } else {
    const dh = defaultHgr72Personal();
    if (!Array.isArray(s.hgr72Personal.rotaciones)) s.hgr72Personal.rotaciones = dh.rotaciones;
    if (!Array.isArray(s.hgr72Personal.guardias)) s.hgr72Personal.guardias = dh.guardias;
    if (!Array.isArray(s.hgr72Personal.pendientes)) s.hgr72Personal.pendientes = dh.pendientes;
    if (!Array.isArray(s.hgr72Personal.calendario)) s.hgr72Personal.calendario = [];
  }
  if (!s.hgr72Personal.borrados || typeof s.hgr72Personal.borrados !== 'object') s.hgr72Personal.borrados = {};
  cleanDemo(s);
  migrate(s);
  return s;
}

function load() {
  if (mem) return mem;
  const k = storeKey();
  try {
    let raw = localStorage.getItem(k);
    if (!raw) {
      for (const lk of legacyKeys()) {
        raw = localStorage.getItem(lk);
        if (raw) break;
      }
    }
    mem = raw ? JSON.parse(raw) : seed();
  } catch { mem = seed(); }
  if (!mem || !mem.notes) mem = seed();
  mem = shape(mem);
  save();
  return mem;
}
function save() {
  try { localStorage.setItem(storeKey(), JSON.stringify(mem)); } catch {}
}
function persist(origin = 'local', notify = true) {
  if (origin === 'local') mem.dirty = true;
  save();
  if (notify) listeners.forEach((fn) => fn(mem, origin));
}
const now = () => Date.now();
const hash = (str) => { let h = 5381; for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };

export const store = {
  get state() { return load(); },
  reloadProfile() {
    mem = null;
    load();
    listeners.forEach((fn) => fn(mem, 'local'));
    return mem;
  },
  all(col) { return load()[col]; },
  find(col, id) { return load()[col].find((x) => x.id === id); },
  add(col, item) { const it = { id: uid(), ...item, updated: now() }; load()[col].unshift(it); persist(); return it; },
  update(col, id, patch) { const it = this.find(col, id); if (it) Object.assign(it, patch, { updated: now() }); persist(); return it; },
  put(col, item) {
    const s = load(); const i = s[col].findIndex((x) => x.id === item.id);
    const it = { ...item, updated: now() };
    if (i >= 0) s[col][i] = it; else s[col].push(it);
    persist(); return it;
  },
  remove(col, id) {
    const s = load(); s[col] = s[col].filter((x) => x.id !== id);
    (s.deleted[col] ||= {})[id] = now();
    persist();
  },
  logHours(hours, date = todayISO()) {
    const s = load(); const e = s.log.find((x) => x.date === date);
    if (e) { e.hours = Math.round((e.hours + hours) * 10) / 10; e.updated = now(); } else s.log.push({ date, hours, updated: now() });
    persist();
  },
  logReview(date = todayISO()) {
    const s = load(); const e = s.reviewLog.find((x) => x.date === date);
    if (e) { e.count += 1; e.updated = now(); } else s.reviewLog.push({ date, count: 1, updated: now() });
    persist();
  },
  // Topic & Subblock Seen Tracking
  isTopicSeen(topicId) {
    return Boolean(load().seenTopics?.[topicId]?.seen);
  },
  toggleTopicSeen(topicId) {
    const s = load();
    const cur = s.seenTopics[topicId] || { seen: false, seenAt: 0, subblocks: {} };
    cur.seen = !cur.seen;
    cur.seenAt = cur.seen ? now() : 0;
    cur.updated = now();
    s.seenTopics[topicId] = cur;
    persist();
    return cur.seen;
  },
  setTopicSeen(topicId, val = true) {
    const s = load();
    const cur = s.seenTopics[topicId] || { seen: false, seenAt: 0, subblocks: {} };
    cur.seen = Boolean(val);
    cur.seenAt = cur.seen ? now() : 0;
    cur.updated = now();
    s.seenTopics[topicId] = cur;
    persist();
    return cur.seen;
  },
  isSubblockRead(topicId, sbId) {
    return Boolean(load().seenTopics?.[topicId]?.subblocks?.[sbId]);
  },
  toggleSubblockRead(topicId, sbId, totalSubblocks = 0) {
    const s = load();
    const cur = s.seenTopics[topicId] || { seen: false, seenAt: 0, subblocks: {} };
    cur.subblocks = cur.subblocks || {};
    cur.subblocks[sbId] = !cur.subblocks[sbId];
    const readCount = Object.values(cur.subblocks).filter(Boolean).length;
    if (totalSubblocks > 0 && readCount >= totalSubblocks) {
      cur.seen = true;
      cur.seenAt = now();
    }
    cur.updated = now();
    s.seenTopics[topicId] = cur;
    persist();
    return cur.subblocks[sbId];
  },
  getHighlights(scopeKey) {
    const list = load().highlights?.[scopeKey];
    return Array.isArray(list) ? list : [];
  },
  toggleHighlight(scopeKey, rawPhrase) {
    const phrase = String(rawPhrase || '').replace(/\s+/g, ' ').trim();
    if (!scopeKey || phrase.length < 2) return false;
    const s = load();
    if (!s.highlights || typeof s.highlights !== 'object') s.highlights = {};
    const cur = Array.isArray(s.highlights[scopeKey]) ? [...s.highlights[scopeKey]] : [];
    const ts = (s.highlightsTs ||= {});
    const idx = cur.findIndex((p) => p.toLowerCase() === phrase.toLowerCase());
    let added = false;
    if (idx >= 0) {
      cur.splice(idx, 1);
    } else {
      cur.push(phrase.slice(0, 220));
      if (cur.length > 40) ts[scopeKey + '|' + String(cur.shift()).toLowerCase()] = now();
      added = true;
    }
    ts[scopeKey + '|' + phrase.toLowerCase()] = now();
    s.highlights[scopeKey] = cur;
    persist();
    return added;
  },
  clearHighlights(scopeKey) {
    const s = load();
    if (s.highlights && s.highlights[scopeKey]) {
      const ts = (s.highlightsTs ||= {});
      for (const p of s.highlights[scopeKey]) ts[scopeKey + '|' + String(p).toLowerCase()] = now();
      delete s.highlights[scopeKey];
      persist();
    }
  },
  // Blitz / Quiz Missed Questions
  getMissedQuestions(topicId = null) {
    const list = [...(load().missedQuestions || [])]
      .sort((a, b) => (b.updated || 0) - (a.updated || 0));
    if (topicId && topicId !== 'todos') {
      return list.filter((x) => x.topicId === topicId);
    }
    return list;
  },
  recordMissedQuestions(items = [], meta = {}) {
    if (!Array.isArray(items) || !items.length) return [];
    const s = load();
    const byNormQ = new Map();
    for (const prev of s.missedQuestions || []) {
      const k = String(prev?.q || '').trim().toLowerCase();
      if (k) byNormQ.set(k, prev);
    }
    const processed = [];
    for (const item of items) {
      const q = String(item?.q ?? '').trim();
      if (!q) continue;
      const normQ = q.toLowerCase();
      const prev = byNormQ.get(normQ);
      const rawItemTid = item?.topicId && item.topicId !== 'todos' ? item.topicId : '';
      const rawMetaTid = meta?.topicId && meta.topicId !== 'todos' ? meta.topicId : '';
      const mode = String(item?.mode || meta?.mode || 'blitz').trim() || 'blitz';
      const topicId = rawItemTid || rawMetaTid || inferTopicId(
        `${q} ${item?.topicTitle || meta?.topicTitle || meta?.topic || ''}`,
        mode
      );
      const topicObj = topicId ? TEMARIO_APRENDE.find((t) => t.id === topicId) : null;
      const topicTitle = String(
        item?.topicTitle || meta?.topicTitle || topicObj?.title || 'Cirugía General'
      ).trim();
      const id = prev?.id || ('mq-' + hash(normQ));
      const entry = {
        id,
        q,
        right: String(item?.right ?? prev?.right ?? '').trim(),
        why: String(item?.why ?? prev?.why ?? '').trim(),
        topicId: topicId || prev?.topicId || '',
        topicTitle: topicTitle || prev?.topicTitle || 'Cirugía General',
        mode,
        savedToNotes: Boolean(prev?.savedToNotes),
        attempts: (prev?.attempts || 0) + 1,
        updated: now(),
      };
      if (s.deleted?.missedQuestions) delete s.deleted.missedQuestions[id];
      byNormQ.set(normQ, entry);
      processed.push(entry);
    }
    if (!processed.length) return [];
    s.missedQuestions = [...byNormQ.values()]
      .sort((a, b) => (b.updated || 0) - (a.updated || 0))
      .slice(0, 80);
    persist();
    return processed;
  },
  removeMissedQuestion(id) {
    if (!id) return;
    const s = load();
    s.missedQuestions = (s.missedQuestions || []).filter((x) => x.id !== id);
    (s.deleted.missedQuestions ||= {})[id] = now();
    persist();
  },
  clearMissedQuestions(topicId = null) {
    const s = load();
    const list = s.missedQuestions || [];
    const tomb = (s.deleted.missedQuestions ||= {});
    const ts = now();
    const filterTopic = Boolean(topicId && topicId !== 'todos');
    const kept = [];
    for (const item of list) {
      if (!filterTopic || item.topicId === topicId) {
        if (item?.id) tomb[item.id] = ts;
      } else {
        kept.push(item);
      }
    }
    s.missedQuestions = kept;
    persist();
  },
  saveMissedToNotes(idOrTopicId = 'all') {
    const s = load();
    const list = s.missedQuestions || [];
    const single = idOrTopicId && idOrTopicId !== 'all' && idOrTopicId !== 'todos'
      ? list.find((x) => x.id === idOrTopicId)
      : null;
    let targets;
    if (single) {
      targets = [single];
    } else if (!idOrTopicId || idOrTopicId === 'all' || idOrTopicId === 'todos') {
      targets = list.filter((x) => !x.savedToNotes);
    } else {
      targets = list.filter((x) => !x.savedToNotes && x.topicId === idOrTopicId);
    }
    if (!targets.length) return { count: 0, noteId: null };

    const cleanLine = (v) => String(v ?? '').replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
    const groups = new Map();
    for (const item of targets) {
      const gid = item.topicId || '';
      if (!groups.has(gid)) groups.set(gid, []);
      groups.get(gid).push(item);
    }

    const ts = now();
    let count = 0;
    let firstNoteId = null;

    for (const [gid, groupItems] of groups.entries()) {
      const topicObj = gid ? TEMARIO_APRENDE.find((t) => t.id === gid) : null;
      const topicTitle = topicObj?.title || groupItems.find((x) => x.topicTitle)?.topicTitle || 'Cirugía General';
      const noteTitle = `Mis Fallos PUEM · ${topicTitle}`;
      const noteTag = topicObj?.tag || 'General';

      let note = s.notes.find((n) => n.title === noteTitle);
      const validItems = groupItems.filter((it) => cleanLine(it.q));
      if (!validItems.length) continue;

      if (!note) {
        note = {
          id: uid(),
          kind: 'nota',
          tag: noteTag,
          title: noteTitle,
          body: '',
          updated: ts,
        };
        s.notes.unshift(note);
      }

      const bodyStr = String(note.body || '');
      const existingQs = new Set(
        bodyStr
          .split('\n')
          .map((line) => line.match(/^\?\?\s*(.+?)\s*::/)?.[1]?.trim().toLowerCase())
          .filter(Boolean)
      );

      const newLines = [];
      for (const item of validItems) {
        const cleanQ = cleanLine(item.q);
        const cleanRight = cleanLine(item.right);
        const cleanWhy = cleanLine(item.why);
        const lowQ = cleanQ.toLowerCase();
        if (!existingQs.has(lowQ) && !bodyStr.toLowerCase().includes('?? ' + lowQ)) {
          newLines.push(`?? ${cleanQ} :: ${cleanRight}${cleanWhy ? ' — ' + cleanWhy : ''}`);
          existingQs.add(lowQ);
        }
        item.savedToNotes = true;
        item.updated = ts;
        count += 1;
      }

      if (newLines.length) {
        note.body = bodyStr ? `${bodyStr.replace(/\s+$/, '')}\n${newLines.join('\n')}` : newLines.join('\n');
      }
      note.updated = ts;
      if (!firstNoteId) firstNoteId = note.id;
    }

    if (count > 0) persist();
    return { count, noteId: count > 0 ? firstNoteId : null };
  },
  // Telemetry & Active Time Tracking
  tickActiveTime(sectionKey, deltaSec = 5) {
    const s = load();
    const t = s.telemetry;
    const key = sectionKey || 'inicio';
    t.secBySection[key] = (t.secBySection[key] || 0) + deltaSec;
    const iso = todayISO();
    const day = t.secByDay[iso] || { totalSec: 0, aprendeSec: 0, repasaSec: 0, recursosSec: 0, puemSec: 0, gameSec: 0 };
    day.totalSec = (day.totalSec || 0) + deltaSec;
    if (key === 'aprende') day.aprendeSec = (day.aprendeSec || 0) + deltaSec;
    if (key === 'repasa') day.repasaSec = (day.repasaSec || 0) + deltaSec;
    if (key === 'recursos') day.recursosSec = (day.recursosSec || 0) + deltaSec;
    if (key === 'puem') day.puemSec = (day.puemSec || 0) + deltaSec;
    if (key === 'juegos') day.gameSec = (day.gameSec || 0) + deltaSec;
    t.secByDay[iso] = day;
    // Silent save so active inputs/views don't re-render every 5s
    persist('local', false);
  },
  recordGameSession({ mode, modeLabel, topic = 'Cirugía General', topicId = '', score = 0, maxScore = 100, durationSec = 60 }) {
    const s = load();
    const accuracy = maxScore > 0 ? Math.min(100, Math.round((score / maxScore) * 100)) : 100;
    const resolvedTopicId = topicId || inferTopicId(topic, mode);
    const entry = {
      id: 'gs-' + uid(),
      mode,
      modeLabel: modeLabel || mode,
      topic,
      ...(resolvedTopicId ? { topicId: resolvedTopicId } : {}),
      score,
      maxScore,
      accuracy,
      durationSec: Math.max(5, Math.round(durationSec)),
      date: todayISO(),
      ts: now(),
    };
    s.telemetry.gameSessions.unshift(entry);
    if (s.telemetry.gameSessions.length > 80) s.telemetry.gameSessions.length = 80;
    if (resolvedTopicId) {
      const tg = (s.telemetry.topicGames ||= {});
      const prev = tg[resolvedTopicId] || { sessions: 0, totalAccuracy: 0, bestAccuracy: 0, updated: 0 };
      tg[resolvedTopicId] = {
        sessions: (prev.sessions || 0) + 1,
        totalAccuracy: (prev.totalAccuracy || 0) + accuracy,
        bestAccuracy: Math.max(prev.bestAccuracy || 0, accuracy),
        updated: now(),
      };
    }
    persist();
    return entry;
  },
  recordCaseAttempt(caseId, score, total) {
    const s = load();
    s.telemetry.caseProgress[caseId] = {
      completed: true,
      score,
      total,
      ts: now(),
    };
    persist();
  },
  // Progreso de las piezas del atlas (postMessage calot-atlas v1): { [id]: { opened, step, total, completed, best, ts } }
  recordAtlas(id, { event, step, total, score } = {}) {
    const s = load();
    const p = s.atlasProgress[id] ||= { opened: true, step: 0, total: 0, completed: false, best: null, ts: 0 };
    p.opened = true;
    if (Number.isInteger(total) && total > 0) p.total = total;
    if (event === 'step' && Number.isInteger(step) && !p.completed) p.step = step;
    if (event === 'complete') {
      p.completed = true;
      p.step = p.total || step || p.step;
      if (typeof score === 'number' && score >= 0 && score <= 1 && (p.best == null || score > p.best)) p.best = score;
    }
    p.ts = now();
    persist();
  },
  // Arena (competencia entre testers): puntos, aciertos y rachas acumulados por día.
  recordArena({ points = 0, ok = null, streak = 0 } = {}) {
    const s = load();
    const a = (s.arena && typeof s.arena === 'object') ? s.arena : (s.arena = { days: {}, bestStreak: 0, updated: 0 });
    a.days ||= {};
    const iso = todayISO();
    const d = (a.days[iso] ||= { pts: 0, ok: 0, n: 0, streak: 0 });
    d.pts += Math.max(0, Math.round(Number(points) || 0));
    if (ok !== null) { d.n += 1; if (ok) d.ok += 1; }
    d.streak = Math.max(d.streak || 0, Number(streak) || 0);
    a.bestStreak = Math.max(a.bestStreak || 0, d.streak);
    d.updated = now();
    a.updated = now();
    const keys = Object.keys(a.days).sort();
    while (keys.length > 120) delete a.days[keys.shift()];
    persist('local', false);
    return d;
  },
  // HGR 72 Personal Helpers
  saveHgr72Personal(patch) {
    const s = load();
    Object.assign(s.hgr72Personal, patch);
    persist();
  },
  setSettings(patch) { Object.assign(load().settings, patch, { updated: now() }); persist(); },
  replace(state, { dirty } = {}) { mem = shape(state); mem.dirty = dirty ?? mem.dirty; save(); listeners.forEach((fn) => fn(mem, 'remote')); },
  reset() { mem = shape(seed()); persist(); },
  subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },
};

function mergeHgr(a = {}, b = {}) {
  const borrados = { ...(a.borrados || {}) };
  for (const [id, t] of Object.entries(b.borrados || {})) borrados[id] = Math.max(t, borrados[id] || 0);
  const out = { borrados };
  for (const k of ['rotaciones', 'guardias', 'pendientes', 'calendario']) {
    const byId = new Map();
    for (const it of [...(a[k] || []), ...(b[k] || [])]) {
      const prev = byId.get(it.id);
      if (!prev || (it.updated || 0) >= (prev.updated || 0)) byId.set(it.id, it);
    }
    out[k] = [...byId.values()].filter((it) => !(borrados[it.id] >= (it.updated || 0)));
  }
  return out;
}

const maxByKey = (x = {}, y = {}) => {
  const o = { ...x };
  for (const [k, v] of Object.entries(y)) o[k] = Math.max(v || 0, o[k] || 0);
  return o;
};

function mergeSeenTopic(x, y) {
  if (!x || !y) return x || y;
  const ux = x.updated || 0; const uy = y.updated || 0;
  if (ux !== uy) return ux > uy ? x : y;
  const subblocks = { ...(x.subblocks || {}) };
  for (const [k, v] of Object.entries(y.subblocks || {})) subblocks[k] = Boolean(subblocks[k] || v);
  return { ...x, seen: Boolean(x.seen || y.seen), seenAt: Math.max(x.seenAt || 0, y.seenAt || 0), subblocks };
}

// Contadores de tiempo: máximo por sección/día (no se pisa el local con el remoto);
// partidas: unión por id; casos y topicGames: el más reciente.
function mergeTelemetry(a = {}, b = {}) {
  const secByDay = {};
  for (const iso of new Set([...Object.keys(a.secByDay || {}), ...Object.keys(b.secByDay || {})])) {
    secByDay[iso] = maxByKey(a.secByDay?.[iso], b.secByDay?.[iso]);
  }
  const sessions = new Map();
  for (const g of [...(a.gameSessions || []), ...(b.gameSessions || [])]) {
    const k = g.id || `${g.ts}-${g.mode}`;
    if (!sessions.has(k)) sessions.set(k, g);
  }
  const newest = (x = {}, y = {}, field) => {
    const o = { ...x };
    for (const [k, v] of Object.entries(y)) if (!o[k] || (v?.[field] || 0) > (o[k]?.[field] || 0)) o[k] = v;
    return o;
  };
  return {
    ...a,
    ...b,
    secBySection: maxByKey(a.secBySection, b.secBySection),
    secByDay,
    gameSessions: [...sessions.values()].sort((x, y) => (y.ts || 0) - (x.ts || 0)).slice(0, 80),
    caseProgress: newest(a.caseProgress, b.caseProgress, 'ts'),
    topicGames: newest(a.topicGames, b.topicGames, 'updated'),
  };
}

// Progreso del atlas: gana el registro más reciente por pieza, pero completado y mejor score nunca retroceden.
function mergeAtlas(a = {}, b = {}) {
  const o = { ...a };
  for (const [k, v] of Object.entries(b)) {
    const x = o[k];
    if (!x) { o[k] = v; continue; }
    const [n, old] = (v?.ts || 0) > (x?.ts || 0) ? [v, x] : [x, v];
    const best = Math.max(n?.best ?? -1, old?.best ?? -1);
    o[k] = { ...n, completed: Boolean(n?.completed || old?.completed), best: best < 0 ? null : best };
  }
  return o;
}

// Subrayados: gana el cambio más reciente por frase (highlightsTs); sin sello, unión.
function mergeHighlights(a, b) {
  const ta = a.highlightsTs || {}; const tb = b.highlightsTs || {};
  const out = {};
  for (const k of new Set([...Object.keys(a.highlights || {}), ...Object.keys(b.highlights || {})])) {
    const list = (st) => (Array.isArray(st.highlights?.[k]) ? st.highlights[k] : []).map((p) => String(p || '').trim()).filter(Boolean);
    const la = list(a); const lb = list(b);
    const lowA = new Set(la.map((p) => p.toLowerCase())); const lowB = new Set(lb.map((p) => p.toLowerCase()));
    const seen = new Set(); const items = [];
    for (const p of [...la, ...lb]) {
      const low = p.toLowerCase();
      if (seen.has(low)) continue;
      seen.add(low);
      const x = ta[k + '|' + low] || 0; const y = tb[k + '|' + low] || 0;
      if (x > y ? lowA.has(low) : y > x ? lowB.has(low) : true) items.push(p);
    }
    if (items.length) out[k] = items;
  }
  return out;
}

function mergeArena(x, y) {
  if (!x && !y) return undefined;
  const days = { ...(x?.days || {}) };
  for (const [iso, d] of Object.entries(y?.days || {})) {
    if (!days[iso] || (d?.updated || 0) > (days[iso].updated || 0)) days[iso] = d;
  }
  return { days, bestStreak: Math.max(x?.bestStreak || 0, y?.bestStreak || 0), updated: Math.max(x?.updated || 0, y?.updated || 0) };
}

export function mergeStates(a, b) {
  a = shape(JSON.parse(JSON.stringify(a || {}))); b = shape(JSON.parse(JSON.stringify(b || {})));
  const out = shape({});
  for (const c of new Set([...Object.keys(a.deleted), ...Object.keys(b.deleted)])) {
    out.deleted[c] = { ...(a.deleted[c] || {}) };
    for (const [id, t] of Object.entries(b.deleted[c] || {})) out.deleted[c][id] = Math.max(t, out.deleted[c][id] || 0);
  }
  for (const c of COLLECTIONS) {
    const byId = new Map();
    for (const it of [...a[c], ...b[c]]) {
      const prev = byId.get(it.id);
      if (!prev || (it.updated || 0) > (prev.updated || 0)) byId.set(it.id, it);
    }
    const tomb = out.deleted[c] || {};
    out[c] = [...byId.values()].filter((it) => !(tomb[it.id] >= (it.updated || 0)));
  }
  for (const c of DATED) {
    const byDate = new Map();
    for (const it of [...a[c], ...b[c]]) {
      const prev = byDate.get(it.date);
      if (!prev || (it.updated || 0) > (prev.updated || 0)) byDate.set(it.date, it);
    }
    out[c] = [...byDate.values()];
  }
  out.settings = (b.settings.updated || 0) > (a.settings.updated || 0) ? b.settings : a.settings;
  out.seenTopics = {};
  for (const k of new Set([...Object.keys(a.seenTopics || {}), ...Object.keys(b.seenTopics || {})])) {
    out.seenTopics[k] = mergeSeenTopic(a.seenTopics?.[k], b.seenTopics?.[k]);
  }
  out.telemetry = mergeTelemetry(a.telemetry, b.telemetry);
  out.hgr72Personal = mergeHgr(a.hgr72Personal, b.hgr72Personal);
  out.migrations = { ...(a.migrations || {}), ...(b.migrations || {}) };
  out.highlights = mergeHighlights(a, b);
  out.highlightsTs = maxByKey(a.highlightsTs, b.highlightsTs);
  out.atlasProgress = mergeAtlas(a.atlasProgress, b.atlasProgress);
  out.arena = mergeArena(a.arena, b.arena);
  const byNormMq = new Map();
  for (const it of [...(a.missedQuestions || []), ...(b.missedQuestions || [])]) {
    const normQ = String(it?.q || '').trim().toLowerCase();
    if (!normQ) continue;
    const prev = byNormMq.get(normQ);
    if (!prev || (it.updated || 0) > (prev.updated || 0)) byNormMq.set(normQ, it);
  }
  const mqTomb = out.deleted?.missedQuestions || {};
  out.missedQuestions = [...byNormMq.values()]
    .filter((it) => {
      const id = it.id || ('mq-' + hash(String(it.q || '').trim().toLowerCase()));
      return !(mqTomb[id] >= (it.updated || 0));
    })
    .sort((x, y) => (y.updated || 0) - (x.updated || 0))
    .slice(0, 80);
  return out;
}

export function streak() {
  const days = new Set(load().log.filter((l) => l.hours > 0).map((l) => l.date));
  for (const [iso, d] of Object.entries(load().telemetry?.secByDay || {})) {
    if ((d.totalSec || 0) > 60) days.add(iso);
  }
  let n = 0; const d = new Date();
  if (!days.has(todayISO(d))) d.setDate(d.getDate() - 1);
  while (days.has(todayISO(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
export function weekHours() {
  const d = new Date(); const dow = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - dow);
  const start = todayISO(d);
  return load().log.filter((l) => l.date >= start).reduce((a, l) => a + l.hours, 0);
}
export function weekSeries() {
  const out = []; const d = new Date(); const dow = (d.getDay() + 6) % 7; d.setDate(d.getDate() - dow);
  for (let i = 0; i < 7; i++) {
    const iso = todayISO(d); const e = load().log.find((l) => l.date === iso);
    out.push({ iso, label: 'LMMJVSD'[i], hours: e ? e.hours : 0, today: iso === todayISO() });
    d.setDate(d.getDate() + 1);
  }
  return out;
}
export function nextEvent() {
  const t = todayISO();
  return load().events.filter((e) => e.date >= t).sort((a, b) => a.date.localeCompare(b.date))[0] || null;
}
export function daysUntil(iso) {
  const a = new Date(todayISO() + 'T00:00:00'); const b = new Date(iso + 'T00:00:00');
  return Math.round((b - a) / 86400e3);
}
export function questions(topicId = null) {
  const out = [];
  const seenIds = new Set();
  for (const n of load().notes) {
    for (const line of n.body.split('\n')) {
      const m = line.match(/^\?\?\s*(.+?)\s*::\s*(.+)$/);
      if (m) {
        const id = 'q' + hash(n.id + '|' + m[1]);
        const tid = TAG_TO_TOPIC_ID[n.tag] || 'hepatobiliar';
        if (!topicId || topicId === 'todos' || tid === topicId) {
          seenIds.add(id);
          out.push({ id, q: m[1], a: m[2], note: n.title, noteId: n.id, tag: n.tag, topicId: tid });
        }
      }
    }
  }
  for (const fc of ARGOS_FLASHCARDS) {
    if (!seenIds.has(fc.id) && (!topicId || topicId === 'todos' || fc.topicId === topicId)) {
      seenIds.add(fc.id);
      out.push({
        id: fc.id,
        q: fc.q,
        a: fc.a,
        note: fc.source || fc.topicTitle,
        noteId: null,
        tag: fc.tag,
        topicId: fc.topicId,
      });
    }
  }
  return out;
}

let TOPIC_ID_SET = new Set();
const TOPIC_MATCHERS = [
  ['hepatobiliar', /calot|biliar|colecist|colang|pancre|h[íi]gado|tg18|strasberg|co[l]?[ée]doco|whipple/i],
  ['quemaduras', /quemad|inhalat|parkland|escald/i],
  ['piel', /piel|melanoma|necrot|fasci[íi]tis|lr[ií]nec|basocel|epidermo|tejido subcut/i],
  ['neoplasias', /neopla|onco|sarcoma|mama|tiroid|ganglio centinela|estadific/i],
  ['pared', /pared|hernia|inguinal|lichtenstein|eventrac|femor/i],
  ['esofago', /es[óo]fag|acalasia|barrett|boerhaave|erg|nissen|zenker/i],
  ['estomago', /est[óo]mag|duoden|g[áa]str|[úu]lcera|p[íi]loro|forrest|billroth/i],
  ['delgado', /delgado|brida|obstrucci[óo]n intestinal|crohn|isquemia mesent|meckel|yeyun|[íi]leo/i],
  ['colon', /col[óo]n|ap[ée]ndic|divertic|hartmann|alvarado|hinchey|v[óo]lvulo/i],
  ['recto', /recto|ano|f[íi]stula|hemorroid|fisura|absceso perian|miles/i],
  ['trauma', /trauma|atls|choque|neumot[óo]rax|hemot[óo]rax|taponamiento|abdomen agudo|urgencias|laparo/i],
];

/**
 * Best-effort resolution of a free-form topic label or game mode to one of the 11 PUEM topic IDs.
 */
export function inferTopicId(label = '', mode = '') {
  const s = String(label || '').trim();
  if (TOPIC_ID_SET.has(s)) return s;
  if (mode === 'sniper') return 'hepatobiliar';
  const hay = `${s} ${mode || ''}`;
  for (const [id, rx] of TOPIC_MATCHERS) {
    if (rx.test(hay)) return id;
  }
  return '';
}

/**
 * Compute per-topic mastery across Leer / Repasar / Jugar from live calot:v3 data.
 * Compatible with existing Vercel saves where optional telemetry.topicGames may be absent.
 */
export function getTopicDomainProgress() {
  const st = load();
  const reviewsMap = new Map((st.reviews || []).map((r) => [r.id, r]));
  const allCards = questions();
  const caseProgress = st.telemetry?.caseProgress || {};
  const gameSessions = st.telemetry?.gameSessions || [];
  const topicGames = st.telemetry?.topicGames || {};

  // Aggregate per-topic accuracy from legacy gameSessions as baseline if topicGames hasn't recorded it yet.
  const inferredGames = new Map();
  for (const gs of gameSessions) {
    const tid = gs.topicId && TOPIC_ID_SET.has(gs.topicId) ? gs.topicId : inferTopicId(gs.topic, gs.mode);
    if (!tid) continue;
    const prev = inferredGames.get(tid) || { sessions: 0, totalAccuracy: 0 };
    prev.sessions += 1;
    prev.totalAccuracy += Number(gs.accuracy || 0);
    inferredGames.set(tid, prev);
  }

  return TEMARIO_APRENDE.map((t) => {
    const sbList = t.subblocks || [];
    const sbTotal = sbList.length;
    const sbRead = sbList.filter((sb) => Boolean(st.seenTopics?.[t.id]?.subblocks?.[sb.id])).length;
    const seen = Boolean(st.seenTopics?.[t.id]?.seen);
    const leer = sbTotal ? (sbRead > 0 ? Math.min(1, sbRead / sbTotal) : (seen ? 1 : 0)) : (seen ? 1 : 0);

    const tCards = allCards.filter((c) => c.topicId === t.id);
    const tCardsReviewed = tCards.filter((c) => {
      const r = reviewsMap.get(c.id);
      return r && (r.reps > 0 || r.interval > 0);
    }).length;
    const tCardsMastered = tCards.filter((c) => (reviewsMap.get(c.id)?.interval || 0) >= 21).length;
    const cardScore = tCards.length
      ? tCards.reduce((acc, c) => {
        const r = reviewsMap.get(c.id);
        if (!r || (!r.reps && !r.interval)) return acc;
        return acc + (r.interval >= 21 ? 1 : 0.65);
      }, 0) / tCards.length
      : null;

    const tCases = PUEM_SERIAL_CASES.filter((c) => c.topicId === t.id);
    const tCasesDone = tCases.filter((c) => caseProgress[c.id]?.completed).length;
    const caseScore = tCases.length ? tCasesDone / tCases.length : null;

    let repasar = 0;
    if (cardScore !== null && caseScore !== null) repasar = cardScore * 0.6 + caseScore * 0.4;
    else if (cardScore !== null) repasar = cardScore;
    else if (caseScore !== null) repasar = caseScore;

    const tg = topicGames[t.id];
    const ig = inferredGames.get(t.id);
    const gamesCount = Math.max(tg?.sessions || 0, ig?.sessions || 0);
    const avgGameAcc = tg?.sessions
      ? tg.totalAccuracy / tg.sessions
      : (ig?.sessions ? ig.totalAccuracy / ig.sessions : 0);
    const jugar = gamesCount > 0 ? Math.min(1, avgGameAcc / 100) : 0;

    const phases = [leer, repasar, jugar];
    const avg = (leer + repasar + jugar) / 3;
    const weakestPhase = ['Leer', 'Repasar', 'Jugar'][phases.indexOf(Math.min(...phases))];

    return {
      ...t,
      sbRead,
      sbTotal,
      seen,
      cardsTotal: tCards.length,
      cardsReviewed: tCardsReviewed,
      cardsMastered: tCardsMastered,
      casesTotal: tCases.length,
      casesDone: tCasesDone,
      gamesCount,
      leer,
      repasar,
      jugar,
      leerPct: Math.round(leer * 100),
      repasarPct: Math.round(repasar * 100),
      jugarPct: Math.round(jugar * 100),
      avg,
      pct: Math.round(avg * 100),
      weakestPhase,
    };
  });
}
