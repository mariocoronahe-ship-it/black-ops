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
  };
}

async function loadDoc(cfg, redisKey, syncCode, fallbackFn) {
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
    strikes: 0,
    pardonedStrikes: 0,
    locked: false,
    strikeLog: [],
    scorePct: null,
    correct: 0,
    total: 0,
    submittedAt: 0,
    sessionId: exam.sessionId,
  };
  if (name) cur.name = String(name).slice(0, 48);
  residents[id] = cur;
  return cur;
}

export default async function handler(req, res) {
  const cfg = redisEnv();

  try {
    if (req.method === 'GET') {
      const [exam, residents] = await Promise.all([loadExam(cfg), loadResidents(cfg)]);
      return send(res, 200, { configured: true, exam, residents, serverNow: Date.now() });
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
          };
          for (const r of Object.values(residents)) {
            r.sessionId = sessionId;
            r.state = (now - (r.lastSeen || 0) < 120000) ? 'en_examen' : r.state;
            r.qIndex = 0;
            r.qTotal = qCount;
            r.answered = 0;
            r.strikes = 0;
            r.pardonedStrikes = 0;
            r.locked = false;
            r.strikeLog = [];
            r.scorePct = null;
            r.correct = 0;
            r.total = 0;
            r.submittedAt = 0;
          }
          await Promise.all([saveExam(cfg, newExam), saveResidents(cfg, residents)]);
          return send(res, 200, { ok: true, exam: newExam, residents });
        }

        if (action === 'stop') {
          exam.active = false;
          exam.ended = true;
          exam.endedAt = now;
          await saveExam(cfg, exam);
          return send(res, 200, { ok: true, exam, residents });
        }

        if (action === 'reopen') {
          exam.active = false;
          exam.ended = false;
          exam.endedAt = 0;
          for (const r of Object.values(residents)) {
            if (r.state !== 'entregado') {
              r.state = 'navegando';
              r.locked = false;
            }
          }
          await Promise.all([saveExam(cfg, exam), saveResidents(cfg, residents)]);
          return send(res, 200, { ok: true, exam, residents });
        }

        if (action === 'reset') {
          const freshExam = defaultExam();
          const freshRes = {};
          await Promise.all([saveExam(cfg, freshExam), saveResidents(cfg, freshRes)]);
          return send(res, 200, { ok: true, exam: freshExam, residents: freshRes });
        }

        if (action === 'unlock_resident') {
          const tid = String(body.targetId || '');
          if (residents[tid]) {
            residents[tid].locked = false;
            residents[tid].pardonedStrikes = residents[tid].strikes || 0;
            if (residents[tid].state === 'bloqueado_trampa') {
              residents[tid].state = 'en_examen';
            }
            await saveResidents(cfg, residents);
          }
          return send(res, 200, { ok: true, exam, residents });
        }

        if (action === 'force_finish_resident') {
          const tid = String(body.targetId || '');
          const r = residents[tid];
          if (r) {
            r.locked = false;
            r.state = 'entregado';
            r.submittedAt = now;
            if (r.scorePct == null) {
              const tot = Math.max(1, r.qTotal || exam.questionCount || 15);
              r.total = tot;
              r.scorePct = Math.round(((r.correct || 0) / tot) * 100);
            }
            await saveResidents(cfg, residents);
          }
          return send(res, 200, { ok: true, exam, residents });
        }
      }

      // ---------------- ACCIONES DE RESIDENTES R2 ----------------
      const id = String(body?.id || '').trim();
      if (!VALID_R2.has(id)) return send(res, 400, { error: 'invalid_resident' });

      // Los residentes NUNCA escriben KEY_CFG, solo la leen y actualizan su entrada en KEY_RES
      const [exam, residents] = await Promise.all([loadExam(cfg), loadResidents(cfg)]);
      const r = ensureResident(residents, exam, id, body.name);
      r.lastSeen = now;

      if (r.sessionId !== exam.sessionId) {
        r.sessionId = exam.sessionId;
        r.qIndex = 0;
        r.qTotal = exam.questionCount || 15;
        r.answered = 0;
        r.strikes = 0;
        r.pardonedStrikes = 0;
        r.locked = false;
        r.strikeLog = [];
        r.scorePct = null;
        r.correct = 0;
        r.total = 0;
        r.submittedAt = 0;
        r.state = exam.active ? 'en_examen' : 'navegando';
      }

      if (action === 'heartbeat') {
        if (body.section) r.section = String(body.section).slice(0, 40);
        if (!exam.active && r.state !== 'entregado') {
          r.state = 'navegando';
        } else if (exam.active && r.state === 'navegando') {
          r.state = 'en_examen';
        }
        await saveResidents(cfg, residents);
        return send(res, 200, { ok: true, exam, me: r, serverNow: now });
      }

      if (action === 'progress') {
        if (r.state !== 'entregado') {
          r.state = r.locked ? 'bloqueado_trampa' : 'en_examen';
          r.qIndex = Math.max(0, Number(body.qIndex) || 0);
          r.qTotal = Math.max(1, Number(body.qTotal) || exam.questionCount || 15);
          r.answered = Math.max(0, Number(body.answered) || 0);
          if (typeof body.correct === 'number') r.correct = Math.max(0, Math.round(body.correct));
        }
        await saveResidents(cfg, residents);
        return send(res, 200, { ok: true, exam, me: r, serverNow: now });
      }

      if (action === 'strike') {
        if (exam.active && r.state !== 'entregado') {
          r.strikes = (r.strikes || 0) + 1;
          const awaySec = Math.max(1, Math.min(3600, Math.round(Number(body.awaySec) || 1)));
          const qNum = Math.max(1, Math.round(Number(body.qNum) || (r.qIndex + 1) || 1));
          const reason = String(body.reason || 'Cambio de pestaña / salida de app').slice(0, 64);
          r.strikeLog = [{ ts: now, qNum, awaySec, reason }, ...(r.strikeLog || [])].slice(0, 15);

          const effectiveStrikes = r.strikes - (r.pardonedStrikes || 0);
          const limit = exam.strictMode === '1strike' ? 1 : exam.strictMode === '2strikes' ? 2 : 999;
          if (effectiveStrikes >= limit) {
            r.locked = true;
            r.state = 'bloqueado_trampa';
          }
          await saveResidents(cfg, residents);
        }
        return send(res, 200, { ok: true, exam, me: r, serverNow: now });
      }

      if (action === 'submit') {
        const correct = Math.max(0, Math.round(Number(body.correct) || 0));
        const total = Math.max(1, Math.round(Number(body.total) || exam.questionCount || 15));
        const scorePct = Math.max(0, Math.min(100, Math.round((correct / total) * 100)));
        r.correct = correct;
        r.total = total;
        r.scorePct = scorePct;
        r.answered = total;
        r.qIndex = total;
        r.locked = false;
        r.state = 'entregado';
        r.submittedAt = now;
        await saveResidents(cfg, residents);
        return send(res, 200, { ok: true, exam, me: r, serverNow: now });
      }

      return send(res, 400, { error: 'unknown_action' });
    }

    return send(res, 405, { error: 'method_not_allowed' });
  } catch (e) {
    return send(res, 200, { configured: false, exam: memExam || defaultExam(), residents: memResidents || {}, serverNow: Date.now() });
  }
}
