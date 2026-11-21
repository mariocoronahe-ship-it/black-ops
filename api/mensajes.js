// Mensajes adscrita ↔ residente (Vercel Node function, sin dependencias).
// Guarda la conversación de un canal en Upstash Redis, igual que /api/sync.
//   GET  /api/mensajes            -> { messages }
//   POST /api/mensajes  body: msg -> { ok }
// El canal llega en `x-channel`; en Redis solo se usa su SHA-256.
const crypto = require('crypto');

const MAX = 200;

function redisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ''), token } : null;
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
    req.on('data', (c) => { size += c.length; if (size > 8192) { reject(new Error('too_large')); req.destroy(); } else chunks.push(c); });
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

module.exports = async function handler(req, res) {
  const cfg = redisConfig();
  if (!cfg) return send(res, 503, { configured: false, error: 'Base de datos no configurada.' });
  const channel = String(req.headers['x-channel'] || '').trim().toUpperCase();
  if (!/^[A-Z0-9-]{16,80}$/.test(channel)) return send(res, 400, { error: 'Canal inválido.' });
  const key = 'blackops:msg:' + crypto.createHash('sha256').update(channel).digest('hex');

  try {
    if (req.method === 'GET') {
      const raw = await redis(cfg, ['LRANGE', key, 0, -1]);
      const messages = (raw || []).map((s) => { try { return JSON.parse(s); } catch { return null; } }).filter(Boolean);
      return send(res, 200, { messages });
    }
    if (req.method === 'POST') {
      let m;
      try { m = JSON.parse(await readBody(req)); } catch { return send(res, 400, { error: 'JSON inválido.' }); }
      const from = m && ['tester', 'owner', 'adscrito', 'residente'].includes(m.from) ? m.from : null;
      const text = m && typeof m.text === 'string' ? m.text.trim().slice(0, 1000) : '';
      if (!from || !text) return send(res, 400, { error: 'Mensaje inválido.' });
      const doc = JSON.stringify({ id: String(m.id || Date.now()).slice(0, 40), from, text, ts: Date.now() });
      await redis(cfg, ['RPUSH', key, doc]);
      await redis(cfg, ['LTRIM', key, -MAX, -1]);
      return send(res, 200, { ok: true });
    }
    res.setHeader('Allow', 'GET, POST');
    return send(res, 405, { error: 'Método no permitido.' });
  } catch {
    return send(res, 502, { error: 'Error al hablar con la base de datos.' });
  }
};
