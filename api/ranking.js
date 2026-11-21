// Ranking entre testers (Vercel Node function, sin dependencias). Guarda en Upstash Redis, igual que /api/mensajes.
//   GET  /api/ranking                                   -> { players: { id: snap }, premio }
//   POST /api/ranking  body: { id, code, weeks, total }  -> { ok }   (tester publica sus métricas)
//   POST /api/ranking  body: { id:'mario', code, premio } -> { ok }   (Mario edita el premio semanal)
// Los códigos de perfil ya viven en el cliente (puerta simulada); aquí solo evitan escrituras a nombre de otra.
const KEY = 'blackops:ranking:v2';
const PREMIO_KEY = 'blackops:ranking:premio';
const MAX_BODY = 24576;
const CODES = { chantal: 'cha-b1', areli: 'are-b1', daniela: 'dan-b1', mario: '12' };
const TESTERS = ['chantal', 'areli', 'daniela'];
const FIELDS = { pts: 5e6, ok: 1e5, n: 1e5, streak: 1e4, studySec: 7 * 24 * 3600 * 60, cards: 1e5, sheets: 1e5 };
const SEC_KEYS = ['inicio', 'aprende', 'repasa', 'recursos', 'juegos', 'stats', 'hgr72'];

function redisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token || !/^https?:\/\//i.test(url)) return null;
  return { url: url.replace(/\/$/, ''), token };
}

async function redis(cfg, command) {
  const r = await fetch(cfg.url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${cfg.token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  });
  if (!r.ok) throw new Error(`redis ${r.status}`);
  const j = await r.json();
  if (j.error) throw new Error(j.error);
  return j.result;
}

function readBody(req) {
  if (req.body !== undefined) return Promise.resolve(typeof req.body === 'string' ? req.body : JSON.stringify(req.body));
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', (c) => { size += c.length; if (size > MAX_BODY) { reject(new Error('too_large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(obj));
}

/** Deja solo los campos numéricos conocidos, enteros y dentro de su límite. */
function cleanMetrics(m) {
  const out = {};
  for (const [k, max] of Object.entries(FIELDS)) {
    const v = Math.round(Number(m && m[k]) || 0);
    out[k] = Math.min(max, Math.max(0, v));
  }
  return out;
}

function cleanWeeks(w) {
  const out = {};
  if (!w || typeof w !== 'object') return out;
  const keys = Object.keys(w).filter((k) => /^\d{4}-\d{2}-\d{2}$/.test(k)).sort().slice(-10);
  for (const k of keys) out[k] = cleanMetrics(w[k]);
  return out;
}

function cleanMonitor(m) {
  if (!m || typeof m !== 'object') return {};
  const secBySection = {};
  for (const k of SEC_KEYS) {
    secBySection[k] = Math.min(7 * 24 * 3600 * 60, Math.max(0, Math.round(Number(m.secBySection?.[k]) || 0)));
  }
  const topicsRead = Array.isArray(m.topicsRead)
    ? m.topicsRead.slice(0, 40).map((t) => ({
      id: String(t?.id || '').slice(0, 40),
      sheets: Math.min(50, Math.max(0, Math.round(Number(t?.sheets) || 0))),
      seen: Boolean(t?.seen),
      ts: Math.max(0, Math.round(Number(t?.ts) || 0)),
    })).filter((t) => t.id)
    : [];
  const recentGames = Array.isArray(m.recentGames)
    ? m.recentGames.slice(0, 10).map((g) => ({
      modeLabel: String(g?.modeLabel || g?.mode || '').slice(0, 60),
      topic: String(g?.topic || '').slice(0, 60),
      score: Math.max(0, Math.round(Number(g?.score) || 0)),
      maxScore: Math.max(1, Math.round(Number(g?.maxScore) || 1)),
      ts: Math.max(0, Math.round(Number(g?.ts) || 0)),
    }))
    : [];
  return {
    lastSeen: Math.max(0, Math.round(Number(m.lastSeen) || 0)),
    activeDays: Math.min(365, Math.max(0, Math.round(Number(m.activeDays) || 0))),
    gameCount: Math.min(10000, Math.max(0, Math.round(Number(m.gameCount) || 0))),
    secBySection,
    topicsRead,
    recentGames,
  };
}

module.exports = async function handler(req, res) {
  const cfg = redisConfig();
  if (!cfg) return send(res, 503, { configured: false, error: 'Base de datos no configurada.' });
  try {
    if (req.method === 'GET') {
      const flat = (await redis(cfg, ['HGETALL', KEY])) || [];
      const players = {};
      for (let i = 0; i + 1 < flat.length; i += 2) {
        if (!TESTERS.includes(flat[i])) continue;
        try { players[flat[i]] = JSON.parse(flat[i + 1]); } catch { /* ignora basura */ }
      }
      let premio = null;
      try { premio = JSON.parse((await redis(cfg, ['GET', PREMIO_KEY])) || 'null'); } catch { premio = null; }
      return send(res, 200, { configured: true, players, premio });
    }
    if (req.method === 'POST') {
      let b;
      try { b = JSON.parse(await readBody(req)); } catch { return send(res, 400, { error: 'JSON inválido.' }); }
      const id = b && typeof b.id === 'string' ? b.id : '';
      if (!CODES[id] || String(b.code || '').trim().toLowerCase() !== CODES[id]) return send(res, 403, { error: 'Perfil no autorizado.' });
      // Límite: una publicación cada 5 s por perfil.
      const ok = await redis(cfg, ['SET', `blackops:ranking:rl:${id}`, '1', 'NX', 'EX', 5]);
      if (ok !== 'OK') return send(res, 429, { error: 'Demasiadas publicaciones, espera unos segundos.' });
      if (id === 'mario') {
        if (b.reset) {
          await redis(cfg, ['DEL', KEY]);
          return send(res, 200, { ok: true, reset: true });
        }
        const text = typeof b.premio === 'string' ? b.premio.trim().slice(0, 240) : '';
        if (!text) return send(res, 400, { error: 'Premio vacío.' });
        await redis(cfg, ['SET', PREMIO_KEY, JSON.stringify({ text, updated: Date.now() })]);
        return send(res, 200, { ok: true });
      }
      const doc = {
        id,
        weeks: cleanWeeks(b.weeks),
        total: cleanMetrics(b.total),
        monitor: cleanMonitor(b.monitor),
        updated: Date.now(),
      };
      await redis(cfg, ['HSET', KEY, id, JSON.stringify(doc)]);
      return send(res, 200, { ok: true });
    }
    res.setHeader('Allow', 'GET, POST');
    return send(res, 405, { error: 'Método no permitido.' });
  } catch {
    return send(res, 502, { error: 'Error al hablar con la base de datos.' });
  }
};
