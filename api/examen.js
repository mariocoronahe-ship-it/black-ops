// API en vivo del Examen R2 Black Ops (Dra. Araceli Hernández Vargas · HGR 72)
// Gestiona el estado del lobby (residentes navegando), el disparo de bloqueo simultáneo,
// el monitoreo anti-trampa (salidas de pantalla) y la entrega de calificaciones.

const KEY = 'blackops:examen:v1';
const ADMIN_CODES = new Set(['he', '12']);
const VALID_R2 = new Set([
  'jesus', 'alina', 'angel_g', 'diana', 'alejandro', 'luis', 'angel_c',
  'isahy', 'ulises', 'delia', 'dulce', 'tiffany', 'marco', 'r2_mario',
]);

let memState = null;

function redisEnv() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.REDIS_REST_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ''), token } : null;
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

function defaultBoard() {
  return {
    exam: {
      active: false,
      ended: false,
      sessionId: 'lobby-inicial',
      topic: 'colon',
      topicLabel: 'Colon y apéndice (R2)',
      questionCount: 15,
      durationMin: 20,
      strictMode: '2strikes', // '2strikes' | '1strike' | 'warn'
      startedAt: 0,
      endedAt: 0,
    },
    residents: {},
  };
}

async function loadState(cfg) {
  if (!cfg) {
    if (!memState) memState = defaultBoard();
    return memState;
  }
  const raw = await redis(cfg, 'GET', KEY);
  if (!raw) return defaultBoard();
  try {
    const parsed = JSON.parse(raw);
    return {
      exam: { ...defaultBoard().exam, ...(parsed.exam || {}) },
      residents: parsed.residents && typeof parsed.residents === 'object' ? parsed.residents : {},
    };
  } catch {
    return defaultBoard();
  }
}

async function saveState(cfg, st) {
  memState = st;
  if (cfg) {
    await redis(cfg, 'SET', KEY, JSON.stringify(st));
  }
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

function ensureResident(st, id, name) {
  const cur = st.residents[id] || {
    id,
    name: String(name || id).slice(0, 48),
    state: 'navegando', // 'navegando' | 'en_examen' | 'bloqueado_trampa' | 'entregado'
    section: 'Inicio',
    lastSeen: 0,
    joinedAt: Date.now(),
    qIndex: 0,
    qTotal: st.exam.questionCount || 15,
    answered: 0,
    strikes: 0,
    pardonedStrikes: 0,
    locked: false,
    strikeLog: [],
    scorePct: null,
    correct: 0,
    total: 0,
    submittedAt: 0,
    sessionId: st.exam.sessionId,
  };
  if (name) cur.name = String(name).slice(0, 48);
  st.residents[id] = cur;
  return cur;
}

export default async function handler(req, res) {
  const cfg = redisEnv();

  try {
    if (req.method === 'GET') {
      const st = await loadState(cfg);
      return send(res, 200, { configured: Boolean(cfg), ...st, serverNow: Date.now() });
    }

    if (req.method === 'POST') {
      let body;
      try { body = await readBody(req); } catch { return send(res, 400, { error: 'bad_json' }); }
      const action = String(body?.action || '');
      const st = await loadState(cfg);
      const now = Date.now();

      // ---------------- ACCIONES DOCENTES (Dra. Hernández HE / Dr. Mario 12) ----------------
      if (['launch', 'stop', 'reopen', 'reset', 'unlock_resident', 'force_finish_resident'].includes(action)) {
        const code = String(body?.code || '').trim().toLowerCase();
        if (!ADMIN_CODES.has(code)) return send(res, 403, { error: 'forbidden' });

        if (action === 'launch') {
          const sessionId = `ex-${now}`;
          const qCount = Math.max(5, Math.min(40, Number(body.questionCount) || 15));
          const durMin = Math.max(5, Math.min(90, Number(body.durationMin) || 20));
          st.exam = {
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
          // Reiniciar progreso de examen de los residentes conectados para la nueva sesión
          for (const r of Object.values(st.residents)) {
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
          await saveState(cfg, st);
          return send(res, 200, { ok: true, ...st });
        }

        if (action === 'stop') {
          st.exam.active = false;
          st.exam.ended = true;
          st.exam.endedAt = now;
          await saveState(cfg, st);
          return send(res, 200, { ok: true, ...st });
        }

        if (action === 'reopen') {
          st.exam.active = false;
          st.exam.ended = false;
          st.exam.endedAt = 0;
          for (const r of Object.values(st.residents)) {
            if (r.state !== 'entregado') {
              r.state = 'navegando';
              r.locked = false;
            }
          }
          await saveState(cfg, st);
          return send(res, 200, { ok: true, ...st });
        }

        if (action === 'reset') {
          const fresh = defaultBoard();
          await saveState(cfg, fresh);
          return send(res, 200, { ok: true, ...fresh });
        }

        if (action === 'unlock_resident') {
          const tid = String(body.targetId || '');
          if (st.residents[tid]) {
            st.residents[tid].locked = false;
            st.residents[tid].pardonedStrikes = st.residents[tid].strikes || 0;
            if (st.residents[tid].state === 'bloqueado_trampa') {
              st.residents[tid].state = 'en_examen';
            }
            await saveState(cfg, st);
          }
          return send(res, 200, { ok: true, ...st });
        }

        if (action === 'force_finish_resident') {
          const tid = String(body.targetId || '');
          const r = st.residents[tid];
          if (r) {
            r.locked = false;
            r.state = 'entregado';
            r.submittedAt = now;
            if (r.scorePct == null) {
              const tot = Math.max(1, r.qTotal || st.exam.questionCount || 15);
              r.total = tot;
              r.scorePct = Math.round(((r.correct || 0) / tot) * 100);
            }
            await saveState(cfg, st);
          }
          return send(res, 200, { ok: true, ...st });
        }
      }

      // ---------------- ACCIONES DE RESIDENTES R2 ----------------
      const id = String(body?.id || '').trim();
      if (!VALID_R2.has(id)) return send(res, 400, { error: 'invalid_resident' });
      const r = ensureResident(st, id, body.name);
      r.lastSeen = now;

      // Si cambió la sesión de examen y este residente tenía datos de una sesión vieja, se sincroniza
      if (r.sessionId !== st.exam.sessionId) {
        r.sessionId = st.exam.sessionId;
        r.qIndex = 0;
        r.qTotal = st.exam.questionCount || 15;
        r.answered = 0;
        r.strikes = 0;
        r.pardonedStrikes = 0;
        r.locked = false;
        r.strikeLog = [];
        r.scorePct = null;
        r.correct = 0;
        r.total = 0;
        r.submittedAt = 0;
        r.state = st.exam.active ? 'en_examen' : 'navegando';
      }

      if (action === 'heartbeat') {
        if (body.section) r.section = String(body.section).slice(0, 40);
        if (!st.exam.active && r.state !== 'entregado') {
          r.state = 'navegando';
        } else if (st.exam.active && r.state === 'navegando') {
          r.state = 'en_examen';
        }
        await saveState(cfg, st);
        return send(res, 200, { ok: true, exam: st.exam, me: r, serverNow: now });
      }

      if (action === 'progress') {
        if (r.state !== 'entregado') {
          r.state = r.locked ? 'bloqueado_trampa' : 'en_examen';
          r.qIndex = Math.max(0, Number(body.qIndex) || 0);
          r.qTotal = Math.max(1, Number(body.qTotal) || st.exam.questionCount || 15);
          r.answered = Math.max(0, Number(body.answered) || 0);
          if (typeof body.correct === 'number') r.correct = Math.max(0, Math.round(body.correct));
        }
        await saveState(cfg, st);
        return send(res, 200, { ok: true, exam: st.exam, me: r, serverNow: now });
      }

      if (action === 'strike') {
        if (st.exam.active && r.state !== 'entregado') {
          r.strikes = (r.strikes || 0) + 1;
          const awaySec = Math.max(1, Math.min(3600, Math.round(Number(body.awaySec) || 1)));
          const qNum = Math.max(1, Math.round(Number(body.qNum) || (r.qIndex + 1) || 1));
          const reason = String(body.reason || 'Cambio de pestaña / salida de app').slice(0, 64);
          r.strikeLog = [{ ts: now, qNum, awaySec, reason }, ...(r.strikeLog || [])].slice(0, 15);

          const effectiveStrikes = r.strikes - (r.pardonedStrikes || 0);
          const limit = st.exam.strictMode === '1strike' ? 1 : st.exam.strictMode === '2strikes' ? 2 : 999;
          if (effectiveStrikes >= limit) {
            r.locked = true;
            r.state = 'bloqueado_trampa';
          }
          await saveState(cfg, st);
        }
        return send(res, 200, { ok: true, exam: st.exam, me: r, serverNow: now });
      }

      if (action === 'submit') {
        const correct = Math.max(0, Math.round(Number(body.correct) || 0));
        const total = Math.max(1, Math.round(Number(body.total) || st.exam.questionCount || 15));
        const scorePct = Math.max(0, Math.min(100, Math.round((correct / total) * 100)));
        r.correct = correct;
        r.total = total;
        r.scorePct = scorePct;
        r.answered = total;
        r.qIndex = total;
        r.locked = false;
        r.state = 'entregado';
        r.submittedAt = now;
        await saveState(cfg, st);
        return send(res, 200, { ok: true, exam: st.exam, me: r, serverNow: now });
      }

      return send(res, 400, { error: 'unknown_action' });
    }

    return send(res, 405, { error: 'method_not_allowed' });
  } catch (e) {
    return send(res, 502, { error: 'upstream_error', detail: String(e?.message || e) });
  }
}
