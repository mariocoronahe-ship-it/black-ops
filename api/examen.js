// API en vivo del Examen R2 Black Ops (Dra. Araceli Hernández Vargas · HGR 72)
// Separa la llave de configuración docente (EXAM_CFG) de la llave de residentes (EXAM_RES)
// para que ningún pulso (heartbeat) de residente pueda sobrescribir el disparo del examen.

const KEY_CFG = 'blackops:examen:cfg:v2';
const KEY_RES = 'blackops:examen:res:v2';
const CLOUD_SYNC_URL = 'https://argus-tau-three.vercel.app/api/sync';
const CLOUD_CFG_CODE = 'BLACKOPS-EXAM-CFG-R2-HGR72-2026-V2';
const CLOUD_RES_CODE = 'BLACKOPS-EXAM-RES-R2-HGR72-2026-V2';

const ADMIN_CODES = new Set(['he', '12']);
const VALID_R2 = new Set([
  'jesus', 'alina', 'angel_g', 'diana', 'alejandro', 'luis', 'angel_c',
  'isahy', 'ulises', 'delia', 'dulce', 'tiffany', 'marco', 'r2_mario',
]);

let memExam = null;
let memResidents = null;
// Pruebas locales: BO_EXAM_MEMORY=1 guarda todo en memoria (no toca la nube compartida)
const MEMORY_ONLY = process.env.BO_EXAM_MEMORY === '1';

const EVENT_KINDS = new Set(['salida', 'recarga', 'parpadeo', 'interrupcion', 'cambio']);
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
      if (raw.length > 32768) { req.destroy(); reject(new Error('payload_too_large')); }
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
  r.scorePct = null;
  r.correct = 0;
  r.total = 0;
  r.submittedAt = 0;
  delete r.strikes; delete r.strikeLog; delete r.locked; delete r.pardonedStrikes;
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
      q: Math.max(1, Math.min(99, Math.round(Number(e.q) || 1))),
      s: Math.max(0, Math.min(7200, Math.round((Number(e.s) || 0) * 10) / 10)),
      ts: Math.round(Number(e.ts) || 0),
      from: e.from == null ? null : String(e.from).slice(0, 2),
      to: e.to == null ? null : String(e.to).slice(0, 2),
      why: e.why ? String(e.why).slice(0, 60) : '',
      ref: e.ref ? String(e.ref).slice(0, 60) : '',
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
  for (const [k, v] of Object.entries(residents || {})) o[k] = derive(v, exam);
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
      if (['launch', 'stop', 'reopen', 'reset', 'unlock_resident', 'force_finish_resident'].includes(action)) {
        const code = String(body?.code || '').trim().toLowerCase();
        if (!ADMIN_CODES.has(code)) return send(res, 403, { error: 'forbidden' });

        const [exam, residents] = await Promise.all([loadExam(cfg), loadResidents(cfg)]);
        const reply = (ex, rs) => send(res, 200, { ok: true, exam: ex, residents: deriveAll(rs, ex) });

        if (action === 'launch') {
          const sessionId = `ex-${now}`;
          const qCount = Math.max(5, Math.min(40, Number(body.questionCount) || 15));
          const durMin = Math.max(5, Math.min(90, Number(body.durationMin) || 20));
          const newExam = {
            active: true,
            ended: false,
            sessionId,
            topic: String(body.topic || 'colon').slice(0, 32),
            topicLabel: String(body.topicLabel || 'Colon y apéndice (R2)').slice(0, 80),
            questionCount: qCount,
            durationMin: durMin,
            strictMode: ['2strikes', '1strike', 'warn'].includes(body.strictMode) ? body.strictMode : '2strikes',
            startedAt: now,
            endedAt: 0,
            pardons: {},
            forced: {},
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
          const freshRes = {};
          await Promise.all([saveExam(cfg, freshExam), saveResidents(cfg, freshRes)]);
          return reply(freshExam, freshRes);
        }

        if (action === 'unlock_resident') {
          const tid = String(body.targetId || '');
          if (residents[tid]) {
            const d = derive(residents[tid], exam);
            exam.pardons = { ...(exam.pardons || {}), [tid]: d.strikes || 0 };
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
          if (typeof body.correct === 'number') r.correct = Math.max(0, Math.round(body.correct));
        }
      }

      const submitted = action === 'submit' || (sameSession && body.submitted && typeof body.submitted === 'object');
      if (submitted && sameSession && r.state !== 'entregado') {
        const src = action === 'submit' ? body : body.submitted;
        const correct = Math.max(0, Math.round(Number(src.correct) || 0));
        const total = Math.max(1, Math.round(Number(src.total) || exam.questionCount || 15));
        r.correct = correct;
        r.total = total;
        r.scorePct = Math.max(0, Math.min(100, Math.round((correct / total) * 100)));
        r.answered = Math.max(0, Math.round(Number(src.answered ?? total)));
        r.qIndex = total;
        r.state = 'entregado';
        r.submittedAt = now;
      }

      if (!['heartbeat', 'progress', 'strike', 'submit'].includes(action)) return send(res, 400, { error: 'unknown_action' });

      if (r.state !== 'entregado') {
        if (!exam.active) r.state = 'navegando';
        else if (r.state === 'navegando' || r.state === 'bloqueado_trampa') r.state = 'en_examen';
      }
      await saveResidents(cfg, residents);
      return send(res, 200, { ok: true, exam, me: derive(r, exam), serverNow: now });
    }

    return send(res, 405, { error: 'method_not_allowed' });
  } catch (e) {
    const ex = memExam || defaultExam();
    return send(res, 200, { configured: false, exam: ex, residents: deriveAll(memResidents || {}, ex), serverNow: Date.now() });
  }
}
