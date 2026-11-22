// API en vivo del Examen R2 Black Ops (Dra. Araceli Hernández Vargas · HGR 72)
import crypto from 'node:crypto';

// Separa la llave de configuración docente (EXAM_CFG) de la llave de residentes (EXAM_RES)
// para que ningún pulso (heartbeat) de residente pueda sobrescribir el disparo del examen.

const KEY_CFG = 'blackops:examen:cfg:v2';
const KEY_RES = 'blackops:examen:res:v2';
const CLOUD_SYNC_URL = 'https://argus-tau-three.vercel.app/api/sync';
const CLOUD_CFG_CODE = 'BLACKOPS-EXAM-CFG-R2-HGR72-2026-V2';
const CLOUD_RES_CODE = 'BLACKOPS-EXAM-RES-R2-HGR72-2026-V2';
// Examen cargado por la docente (Word). Se guarda CIFRADO con BO_EXAM_SECRET (variable de entorno de Vercel,
// no está en el repositorio), así que aunque alguien lea la nube no ve preguntas ni respuestas.
const KEY_QS = 'blackops:examen:qs:v1';
const CLOUD_QS_CODE = 'BLACKOPS-EXAM-QS-R2-HGR72-2026-V1';
const MAX_QUESTIONS = 120;

/* MODO DE PRUEBA (temporal): la correcta siempre en A para estos residentes.
   Para apagarlo deja vacío este Set y TEST_ALWAYS_A en js/fx/exam-lockdown.js. */
const TEST_ALWAYS_A = new Set(['r2_mario']);
/* MODO DE PRUEBA (temporal): acepta navegadores de escritorio para probar con varias pestañas.
   Apágalo antes del examen real (y TEST_MULTI_TAB en js/fx/exam-lockdown.js). */
const TEST_MULTI_TAB = true;
const ADMIN_CODES = new Set(['he', '12']);
const VALID_R2 = new Set([
  'jesus', 'alina', 'angel_g', 'diana', 'alejandro', 'luis',
  'isahy', 'ulises', 'delia', 'dulce', 'tiffany', 'marco', 'r2_mario',
]);

let memExam = null;
let memResidents = null;
let memQsRaw = null; // documento cifrado (modo memoria)
let qsCache = { stamp: 0, content: null };
// Pruebas locales: BO_EXAM_MEMORY=1 guarda todo en memoria (no toca la nube compartida)
const MEMORY_ONLY = process.env.BO_EXAM_MEMORY === '1';

const EVENT_KINDS = new Set(['salida', 'recarga', 'parpadeo', 'interrupcion', 'cambio', 'pestana']);
const MAX_EVENTS = 80;

function redisEnv() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.REDIS_REST_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.REDIS_REST_TOKEN;
  if (!url || !token || !/^https?:\/\//i.test(url)) return null;
  return { url: url.replace(/\/$/, ''), token };
}

async function redis(cfg, ...cmd) {
  const r = await fetch(cfg.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cmd),
  });
  if (!r.ok) throw new Error(`Redis ${r.status}`);
  const data = await r.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

function defaultExam() {
  return {
    active: false,
    ended: false,
    sessionId: 'lobby-inicial',
    topic: 'colon',
    topicLabel: 'Colon y apéndice (R2)',
    questionCount: 15,
    durationMin: 20,
    strictMode: '2strikes',
    startedAt: 0,
    endedAt: 0,
    // Decisiones docentes por residente. Viven en la llave de configuración (solo la escribe la docente)
    // para que ningún pulso de residente las pueda pisar.
    pardons: {},
    forced: {},
    source: 'banco', // 'banco' | 'custom' (examen cargado por la docente)
    custom: null, // { title, count, uploadedAt, device }
  };
}

async function loadDoc(cfg, redisKey, syncCode, fallbackFn) {
  if (MEMORY_ONLY) return fallbackFn();
  if (cfg) {
    try {
      const raw = await redis(cfg, 'GET', redisKey);
      if (raw) return JSON.parse(raw);
    } catch {}
  }
  try {
    const r = await fetch(CLOUD_SYNC_URL, {
      method: 'GET',
      headers: { 'x-sync-code': syncCode },
      cache: 'no-store',
    });
    if (r.ok) {
      const j = await r.json();
      if (j && j.data && typeof j.data === 'object') return j.data;
    }
  } catch {}
  return fallbackFn();
}

async function saveDoc(cfg, redisKey, syncCode, data) {
  if (MEMORY_ONLY) return;
  if (cfg) {
    try { await redis(cfg, 'SET', redisKey, JSON.stringify(data)); return; } catch {}
  }
  try {
    await fetch(CLOUD_SYNC_URL, {
      method: 'PUT',
      headers: {
        'x-sync-code': syncCode,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
  } catch {}
}

async function loadExam(cfg) {
  const raw = await loadDoc(cfg, KEY_CFG, CLOUD_CFG_CODE, () => memExam || defaultExam());
  memExam = { ...defaultExam(), ...(raw || {}) };
  return memExam;
}

async function saveExam(cfg, ex) {
  memExam = ex;
  await saveDoc(cfg, KEY_CFG, CLOUD_CFG_CODE, ex);
}

async function loadResidents(cfg) {
  const raw = await loadDoc(cfg, KEY_RES, CLOUD_RES_CODE, () => memResidents || {});
  memResidents = raw && typeof raw === 'object' ? raw : {};
  return memResidents;
}

async function saveResidents(cfg, residents) {
  memResidents = residents;
  await saveDoc(cfg, KEY_RES, CLOUD_RES_CODE, residents);
}

function secretKey() {
  const s = process.env.BO_EXAM_SECRET;
  if (!s) return null;
  return crypto.createHash('sha256').update(String(s)).digest();
}

function encryptJSON(obj) {
  const key = secretKey();
  if (!key) {
    if (MEMORY_ONLY) return { plain: obj };
    throw new Error('no_secret');
  }
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', key, iv);
  const enc = Buffer.concat([c.update(JSON.stringify(obj), 'utf8'), c.final()]);
  return { v: 1, iv: iv.toString('base64'), tag: c.getAuthTag().toString('base64'), enc: enc.toString('base64') };
}

function decryptJSON(doc) {
  if (!doc || typeof doc !== 'object') return null;
  if (doc.plain) return MEMORY_ONLY ? doc.plain : null;
  if (!doc.enc) return null;
  const key = secretKey();
  if (!key) return null;
  try {
    const d = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(doc.iv, 'base64'));
    d.setAuthTag(Buffer.from(doc.tag, 'base64'));
    const out = Buffer.concat([d.update(Buffer.from(doc.enc, 'base64')), d.final()]);
    return JSON.parse(out.toString('utf8'));
  } catch {
    return null;
  }
}

async function loadQuestions(cfg, exam) {
  const stamp = exam?.custom?.uploadedAt || 0;
  if (!stamp) return null;
  if (qsCache.stamp === stamp && qsCache.content) return qsCache.content;
  const raw = await loadDoc(cfg, KEY_QS, CLOUD_QS_CODE, () => memQsRaw);
  const content = decryptJSON(raw);
  if (content && content.uploadedAt === stamp) qsCache = { stamp, content };
  return content && content.uploadedAt === stamp ? content : null;
}

async function saveQuestions(cfg, content) {
  const doc = content ? encryptJSON(content) : { cleared: Date.now() };
  memQsRaw = doc;
  qsCache = content ? { stamp: content.uploadedAt, content } : { stamp: 0, content: null };
  await saveDoc(cfg, KEY_QS, CLOUD_QS_CODE, doc);
}

function cleanQuestions(list) {
  if (!Array.isArray(list)) return null;
  const out = [];
  for (const q of list.slice(0, MAX_QUESTIONS)) {
    if (!q || typeof q !== 'object') continue;
    const stem = String(q.stem || '').trim().slice(0, 4000);
    const options = (Array.isArray(q.options) ? q.options : []).map((o) => String(o || '').trim().slice(0, 1200)).filter(Boolean).slice(0, 8);
    const answer = Math.round(Number(q.answer));
    if (!stem || options.length < 2 || !(answer >= 0 && answer < options.length)) return null;
    out.push({ stem, options, answer });
  }
  return out.length ? out : null;
}

function cleanPicks(list, n) {
  if (!Array.isArray(list)) return null;
  return Array.from({ length: n }, (_, i) => {
    const v = list[i];
    return Number.isInteger(v) && v >= 0 && v < 8 ? v : null;
  });
}

function scorePicks(picks, content) {
  if (!content || !Array.isArray(picks)) return 0;
  return content.questions.reduce((a, q, i) => a + (picks[i] === q.answer ? 1 : 0), 0);
}

function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(obj));
}

function readBody(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  if (typeof req.body === 'string') return Promise.resolve(JSON.parse(req.body || '{}'));
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 900000) { req.destroy(); reject(new Error('payload_too_large')); }
    });
    req.on('end', () => {
      try { resolve(JSON.parse(raw || '{}')); } catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

function ensureResident(residents, exam, id, name) {
  const cur = residents[id] || {
    id,
    name: String(name || id).slice(0, 48),
    state: 'navegando',
    section: 'Inicio',
    lastSeen: 0,
    joinedAt: Date.now(),
    qIndex: 0,
    qTotal: exam.questionCount || 15,
    answered: 0,
    events: [],
    scorePct: null,
    correct: 0,
    total: 0,
    submittedAt: 0,
    sessionId: exam.sessionId,
    browser: null,
  };
  if (name) cur.name = String(name).slice(0, 48);
  residents[id] = cur;
  return cur;
}

function resetResidentForSession(r, exam, active) {
  r.sessionId = exam.sessionId;
  r.qIndex = 0;
  r.qTotal = exam.questionCount || 15;
  r.answered = 0;
  r.events = [];
  r.picks = null;
  r.scorePct = null;
  r.correct = 0;
  r.total = 0;
  r.submittedAt = 0;
  delete r.strikes; delete r.strikeLog; delete r.locked; delete r.pardonedStrikes; delete r.missTopics;
  r.state = active ? 'en_examen' : 'navegando';
}

// --- Detección de navegador (copia mínima de js/fx/browser-check.js para el servidor) ---
const UA_BLOCK = [
  [/FBAN|FBAV|FB_IAB|FBIOS|Instagram|WhatsApp|Snapchat|TikTok|musical_ly|BytedanceWebview|Line\/|LinkedInApp|Twitter|Pinterest|MicroMessenger|Telegram/i, 'App (navegador interno)'],
  [/\bGSA\//, 'App de Google'],
  [/EdgiOS|EdgA\/|Edg\/|Edge\//, 'Edge'],
  [/OPiOS|OPR\/|OPT\/|OPX\/|Opera/, 'Opera'],
  [/FxiOS|Firefox\//, 'Firefox'],
  [/SamsungBrowser/, 'Samsung Internet'],
  [/DuckDuckGo|Ddg\//, 'DuckDuckGo'],
  [/YaBrowser|YaSearchBrowser/, 'Yandex'],
  [/UCBrowser|UCWEB/, 'UC Browser'],
  [/Vivaldi/, 'Vivaldi'],
  [/MiuiBrowser/, 'Navegador Xiaomi'],
  [/HuaweiBrowser|HiBrowser/, 'Navegador Huawei'],
  [/Brave/, 'Brave'],
  [/Comet|Perplexity/, 'Comet (Perplexity)'],
  [/CriOS/, 'Chrome (iPhone)'],
];
function serverBrowser(ua) {
  const s = String(ua || '');
  const os = /Android/i.test(s) ? 'Android' : /iPhone|iPod/.test(s) ? 'iPhone' : /iPad/.test(s) ? 'iPad' : /Windows/.test(s) ? 'Windows' : /Macintosh/.test(s) ? 'Mac' : 'Otro';
  const mk = (name, allowed) => ({ label: `${name} · ${os}`, allowed });
  for (const [re, name] of UA_BLOCK) if (re.test(s)) return mk(name, false);
  if (os === 'iPhone' || os === 'iPad') return mk('Safari', /Version\/[\d.]+/.test(s) && /Safari\//.test(s));
  if (os === 'Android') return mk('Chrome', /Chrome\/[\d.]+/.test(s) && !/; wv\)|Version\/4\.0/.test(s));
  // Mac puede ser un iPhone en «modo escritorio»: el cliente decide con pantalla táctil; el servidor no bloquea por sí solo
  if (os === 'Mac') return mk('Safari/Chrome', true);
  return mk('Otro navegador', false);
}

function cleanBrowser(raw, ua) {
  const srv = serverBrowser(ua);
  const cli = raw && typeof raw === 'object' ? raw : null;
  const cliAllowed = cli ? Boolean(cli.allowed) : srv.allowed;
  const allowed = cliAllowed && srv.allowed;
  let label = cli ? String(cli.label || '').slice(0, 48) : srv.label;
  if (cliAllowed && !srv.allowed) label = srv.label; // el UA del servidor delata otro navegador
  return {
    label: label || srv.label,
    allowed,
    reason: cli ? String(cli.reason || '').slice(0, 90) : '',
    serverLabel: srv.label,
  };
}

function cleanEvents(list) {
  if (!Array.isArray(list)) return null;
  const out = [];
  for (const e of list.slice(-MAX_EVENTS)) {
    if (!e || typeof e !== 'object' || !EVENT_KINDS.has(e.k)) continue;
    out.push({
      k: e.k,
      q: Math.max(1, Math.min(MAX_QUESTIONS, Math.round(Number(e.q) || 1))),
      s: Math.max(0, Math.min(7200, Math.round((Number(e.s) || 0) * 10) / 10)),
      ts: Math.round(Number(e.ts) || 0),
      from: e.from == null ? null : String(e.from).slice(0, 2),
      to: e.to == null ? null : String(e.to).slice(0, 2),
      why: e.why ? String(e.why).slice(0, 60) : '',
      ref: e.ref ? String(e.ref).slice(0, 60) : '',
      d: e.d == null ? null : Math.max(1, Math.min(MAX_QUESTIONS, Math.round(Number(e.d) || 1))),
    });
  }
  return out;
}

const COUNTED = new Set(['salida', 'recarga']);
function strikeLimit(exam) {
  return exam.strictMode === '1strike' ? 1 : exam.strictMode === '2strikes' ? 2 : 999;
}

// Calcula el estado anti-trampa a partir de la bitácora y de las decisiones docentes.
function derive(r, exam) {
  if (!r) return r;
  const out = { ...r };
  const events = Array.isArray(r.events) ? r.events : [];
  const counted = events.filter((e) => COUNTED.has(e.k));
  out.strikes = counted.length;
  out.strikeLog = [...counted].reverse();
  out.blinks = events.filter((e) => e.k === 'parpadeo').length;
  out.interruptions = events.filter((e) => e.k === 'interrupcion').length;
  out.changes = events.filter((e) => e.k === 'cambio').length;
  const sameSession = r.sessionId === exam.sessionId;
  const pardon = sameSession ? Number(exam.pardons?.[r.id] || 0) : 0;
  out.pardonedStrikes = pardon;
  const forced = sameSession && exam.forced?.[r.id];
  if (forced && out.state !== 'entregado') {
    out.state = 'entregado';
    out.submittedAt = forced;
    const tot = Math.max(1, out.qTotal || exam.questionCount || 15);
    out.total = tot;
    out.scorePct = Math.round(((out.correct || 0) / tot) * 100);
    out.forced = true;
  }
  out.locked = Boolean(exam.active && sameSession && out.state !== 'entregado' && (out.strikes - pardon) >= strikeLimit(exam));
  if (out.locked) out.state = 'bloqueado_trampa';
  else if (out.state === 'bloqueado_trampa') out.state = 'en_examen';
  return out;
}

function deriveAll(residents, exam) {
  const o = {};
  for (const [k, v] of Object.entries(residents || {})) {
    const d = derive(v, exam);
    delete d.picks; // las respuestas elegidas solo las ve la docente (acción 'results')
    o[k] = d;
  }
  return o;
}

export default async function handler(req, res) {
  const cfg = redisEnv();

  try {
    if (req.method === 'GET') {
      const [exam, residents] = await Promise.all([loadExam(cfg), loadResidents(cfg)]);
      return send(res, 200, { configured: true, exam, residents: deriveAll(residents, exam), serverNow: Date.now() });
    }

    if (req.method === 'POST') {
      let body;
      try { body = await readBody(req); } catch { return send(res, 400, { error: 'bad_json' }); }
      const action = String(body?.action || '');
      const now = Date.now();

      // ---------------- ACCIONES DOCENTES (Dra. Hernández HE / Dr. Mario 12) ----------------
      if (['launch', 'stop', 'reopen', 'reset', 'unlock_resident', 'force_finish_resident', 'upload_exam', 'get_exam', 'clear_exam', 'results', 'send_message'].includes(action)) {
        const code = String(body?.code || '').trim().toLowerCase();
        if (!ADMIN_CODES.has(code)) return send(res, 403, { error: 'forbidden' });

        const [exam, residents] = await Promise.all([loadExam(cfg), loadResidents(cfg)]);
        const reply = (ex, rs) => send(res, 200, { ok: true, exam: ex, residents: deriveAll(rs, ex) });

        // Mensajes y alertas de la docente → a todos o a un residente. Viajan en la configuración
        // del examen (que cada celular ya lee en su pulso), últimos 25.
        if (action === 'send_message') {
          const text = String(body.text || '').replace(/\s+/g, ' ').trim().slice(0, 280);
          const to = String(body.to || 'all');
          if (!text) return send(res, 400, { error: 'empty' });
          if (to !== 'all' && !VALID_R2.has(to)) return send(res, 400, { error: 'invalid_resident' });
          const msg = { id: `m-${now}-${Math.random().toString(36).slice(2, 6)}`, at: now, to, kind: body.kind === 'alerta' ? 'alerta' : 'mensaje', text };
          exam.msgs = [...(Array.isArray(exam.msgs) ? exam.msgs : []), msg].slice(-25);
          await saveExam(cfg, exam);
          return reply(exam, residents);
        }

        if (action === 'upload_exam') {
          const questions = cleanQuestions(body.questions);
          if (!questions) return send(res, 400, { error: 'bad_questions' });
          if (exam.active) return send(res, 409, { error: 'exam_active' });
          const title = String(body.title || 'Examen departamental R2').trim().slice(0, 80) || 'Examen departamental R2';
          const content = { title, questions, uploadedAt: now };
          try {
            await saveQuestions(cfg, content);
          } catch (e) {
            return send(res, 500, { error: String(e.message || e) === 'no_secret' ? 'no_secret' : 'save_failed' });
          }
          exam.custom = { title, count: questions.length, uploadedAt: now, device: String(body.device || '').slice(0, 48) };
          await saveExam(cfg, exam);
          return reply(exam, residents);
        }

        if (action === 'get_exam') {
          const content = await loadQuestions(cfg, exam);
          return send(res, 200, { ok: true, exam, content });
        }

        if (action === 'clear_exam') {
          if (exam.active && exam.source === 'custom') return send(res, 409, { error: 'exam_active' });
          await saveQuestions(cfg, null);
          exam.custom = null;
          if (exam.source === 'custom') exam.source = 'banco';
          await saveExam(cfg, exam);
          return reply(exam, residents);
        }

        if (action === 'results') {
          const content = await loadQuestions(cfg, exam);
          const picks = {};
          for (const r of Object.values(residents)) {
            if (r.sessionId === exam.sessionId && Array.isArray(r.picks)) picks[r.id] = r.picks;
          }
          return send(res, 200, { ok: true, exam, content: exam.source === 'custom' ? content : null, picks });
        }

        if (action === 'launch') {
          const sessionId = `ex-${now}`;
          const useCustom = body.source === 'custom';
          let customContent = null;
          if (useCustom) {
            customContent = await loadQuestions(cfg, exam);
            if (!customContent) return send(res, 409, { error: 'no_custom_exam' });
          }
          const qCount = useCustom ? customContent.questions.length : Math.max(5, Math.min(40, Number(body.questionCount) || 15));
          const durMin = Math.max(5, Math.min(90, Number(body.durationMin) || 20));
          const newExam = {
            active: true,
            ended: false,
            sessionId,
            topic: useCustom ? 'custom' : String(body.topic || 'colon').slice(0, 32),
            topicLabel: useCustom ? customContent.title : String(body.topicLabel || 'Colon y apéndice (R2)').slice(0, 80),
            source: useCustom ? 'custom' : 'banco',
            custom: exam.custom || null,
            questionCount: qCount,
            durationMin: durMin,
            strictMode: ['2strikes', '1strike', 'warn'].includes(body.strictMode) ? body.strictMode : '2strikes',
            startedAt: now,
            endedAt: 0,
            pardons: {},
            forced: {},
            msgs: Array.isArray(exam.msgs) ? exam.msgs.slice(-25) : [],
          };
          for (const r of Object.values(residents)) {
            const online = now - (r.lastSeen || 0) < 120000;
            resetResidentForSession(r, newExam, online);
            if (!online) r.state = 'navegando';
          }
          await Promise.all([saveExam(cfg, newExam), saveResidents(cfg, residents)]);
          return reply(newExam, residents);
        }

        if (action === 'stop') {
          exam.active = false;
          exam.ended = true;
          exam.endedAt = now;
          await saveExam(cfg, exam);
          return reply(exam, residents);
        }

        if (action === 'reopen') {
          exam.active = false;
          exam.ended = false;
          exam.endedAt = 0;
          for (const r of Object.values(residents)) {
            if (r.state !== 'entregado') r.state = 'navegando';
          }
          await Promise.all([saveExam(cfg, exam), saveResidents(cfg, residents)]);
          return reply(exam, residents);
        }

        if (action === 'reset') {
          const freshExam = defaultExam();
          // El examen cargado por la docente sobrevive al reinicio (solo se borra con «Borrar examen»)
          freshExam.custom = exam.custom || null;
          freshExam.msgs = Array.isArray(exam.msgs) ? exam.msgs : [];
          const freshRes = {};
          await Promise.all([saveExam(cfg, freshExam), saveResidents(cfg, freshRes)]);
          return reply(freshExam, freshRes);
        }

        if (action === 'unlock_resident') {
          const tid = String(body.targetId || '');
          if (residents[tid]) {
            const d = derive(residents[tid], exam);
            exam.pardons = { ...(exam.pardons || {}), [tid]: d.strikes || 0 };
            // Si ya entregó, la docente libera su «Sesión cerrada» y el residente vuelve a la app
            if (d.state === 'entregado') exam.released = { ...(exam.released || {}), [tid]: now };
            await saveExam(cfg, exam);
          }
          return reply(exam, residents);
        }

        if (action === 'force_finish_resident') {
          const tid = String(body.targetId || '');
          if (residents[tid]) {
            exam.forced = { ...(exam.forced || {}), [tid]: now };
            await saveExam(cfg, exam);
          }
          return reply(exam, residents);
        }
      }

      // ---------------- ACCIONES DE RESIDENTES R2 ----------------
      const id = String(body?.id || '').trim();
      if (!VALID_R2.has(id)) return send(res, 400, { error: 'invalid_resident' });

      // Los residentes NUNCA escriben KEY_CFG, solo la leen y actualizan su entrada en KEY_RES.
      // Cada pulso trae el estado completo del residente (avance + bitácora), así que si una
      // escritura se pierde por concurrencia, el siguiente pulso la repara.
      const [exam, residents] = await Promise.all([loadExam(cfg), loadResidents(cfg)]);
      const r = ensureResident(residents, exam, id, body.name);
      r.lastSeen = now;
      r.browser = cleanBrowser(body.browser, req.headers?.['user-agent']);

      if (r.sessionId !== exam.sessionId) resetResidentForSession(r, exam, exam.active);

      const bodySession = body.sessionId ? String(body.sessionId) : null;
      const sameSession = !bodySession || bodySession === exam.sessionId;

      if (body.section) r.section = String(body.section).slice(0, 40);

      if (sameSession && exam.active && r.state !== 'entregado') {
        const evs = cleanEvents(body.events);
        if (evs && evs.length >= (r.events || []).length) r.events = evs;
        if (body.qTotal != null) {
          r.qIndex = Math.max(0, Number(body.qIndex) || 0);
          r.qTotal = Math.max(1, Number(body.qTotal) || exam.questionCount || 15);
          r.answered = Math.max(0, Number(body.answered) || 0);
          if (exam.source !== 'custom' && typeof body.correct === 'number') r.correct = Math.max(0, Math.round(body.correct));
        }
      }

      // Examen cargado por la docente: la calificación se calcula aquí; el celular nunca recibe las respuestas.
      let customContent = null;
      if (sameSession && (exam.active || action === 'review') && exam.source === 'custom') {
        customContent = await loadQuestions(cfg, exam);
        const n = customContent ? customContent.questions.length : (exam.questionCount || 0);
        const src = action === 'submit' ? body.picks : (body.submitted?.picks ?? body.picks);
        const picks = r.state !== 'entregado' ? cleanPicks(src, n) : null;
        if (picks) {
          r.picks = picks;
          r.answered = picks.filter((v) => v != null).length;
          r.qTotal = n;
          r.correct = scorePicks(picks, customContent);
        }
      }

      if (action === 'questions') {
        if (!(exam.active && exam.source === 'custom' && sameSession) || !customContent) {
          return send(res, 409, { error: 'no_questions' });
        }
        if (!TEST_MULTI_TAB && r.browser && !r.browser.allowed) return send(res, 403, { error: 'browser_not_allowed' });
        await saveResidents(cfg, residents);
        return send(res, 200, {
          ok: true,
          exam,
          me: derive(r, exam),
          questions: customContent.questions.map((q) => ({ stem: q.stem, options: q.options })),
          // Modo de prueba: solo a estos residentes se les manda la clave para poner la correcta en A
          ...(TEST_ALWAYS_A.has(id) ? { testKey: customContent.questions.map((q) => q.answer) } : {}),
        });
      }

      const submitted = action === 'submit' || (sameSession && body.submitted && typeof body.submitted === 'object');
      if (submitted && sameSession && r.state !== 'entregado') {
        const src = action === 'submit' ? body : body.submitted;
        const isCustom = exam.source === 'custom' && customContent;
        const correct = isCustom ? r.correct || 0 : Math.max(0, Math.round(Number(src.correct) || 0));
        const total = isCustom ? customContent.questions.length : Math.max(1, Math.round(Number(src.total) || exam.questionCount || 15));
        r.correct = correct;
        r.total = total;
        r.scorePct = Math.max(0, Math.min(100, Math.round((correct / total) * 100)));
        r.answered = isCustom ? r.answered || 0 : Math.max(0, Math.round(Number(src.answered ?? total)));
        r.qIndex = total;
        r.state = 'entregado';
        r.submittedAt = now;
      }

      // Temas que el residente debe repasar (los calcula su celular al calificar) → panel docente
      if (action === 'review_topics' && sameSession) {
        const list = Array.isArray(body.topics) ? body.topics : [];
        r.missTopics = list.slice(0, 40).map((x) => String(x || '').slice(0, 90)).filter(Boolean);
      }

      if (!['heartbeat', 'progress', 'strike', 'submit', 'questions', 'review', 'review_topics'].includes(action)) return send(res, 400, { error: 'unknown_action' });

      if (r.state !== 'entregado') {
        if (!exam.active) r.state = 'navegando';
        else if (r.state === 'navegando' || r.state === 'bloqueado_trampa') r.state = 'en_examen';
      }
      await saveResidents(cfg, residents);
      // Ya entregado: se le revela la clave para su repaso personalizado (nunca antes de entregar)
      const review = (action === 'submit' || action === 'review') && sameSession && r.state === 'entregado'
        && exam.source === 'custom' && customContent
        ? {
          key: customContent.questions.map((q) => q.answer),
          picks: Array.isArray(r.picks) ? r.picks : [],
          ...(action === 'review' ? { questions: customContent.questions.map((q) => ({ stem: q.stem, options: q.options })) } : {}),
        }
        : null;
      // Cada residente solo recibe los mensajes para todos o para él
      const myMsgs = (Array.isArray(exam.msgs) ? exam.msgs : []).filter((m) => m.to === 'all' || m.to === id);
      return send(res, 200, { ok: true, exam: { ...exam, msgs: myMsgs }, me: derive(r, exam), serverNow: now, ...(review ? { review } : {}) });
    }

    return send(res, 405, { error: 'method_not_allowed' });
  } catch (e) {
    const ex = memExam || defaultExam();
    return send(res, 200, { configured: false, exam: ex, residents: deriveAll(memResidents || {}, ex), serverNow: Date.now() });
  }
}
