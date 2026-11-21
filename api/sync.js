// NOUS sync endpoint (Vercel Node function, no dependencies).
// Stores one JSON document per sync code in Upstash Redis via its REST API.
//   GET  /api/sync   -> { configured, data, updated }
//   PUT  /api/sync   body: { data }  -> { ok, updated }
// The caller identifies itself with the `x-sync-code` header; only a SHA-256
// of the code is used as the Redis key, so the code itself is never stored.
const crypto = require('crypto');

const MAX_BYTES = 900 * 1024;

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
  if (req.body !== undefined) {
    return Promise.resolve(typeof req.body === 'string' ? req.body : JSON.stringify(req.body));
  }
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', (c) => { size += c.length; if (size > MAX_BYTES) { reject(new Error('too_large')); req.destroy(); } else chunks.push(c); });
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
  if (!cfg) return send(res, 503, { configured: false, error: 'Base de datos no configurada en Vercel (Storage → Upstash Redis).' });

  const code = String(req.headers['x-sync-code'] || '').trim().toUpperCase();
  if (!/^[A-Z0-9-]{20,64}$/.test(code)) return send(res, 400, { configured: true, error: 'Código de sincronización inválido.' });
  const key = 'nous:' + crypto.createHash('sha256').update(code).digest('hex');

  try {
    if (req.method === 'GET') {
      const raw = await redis(cfg, ['GET', key]);
      if (!raw) return send(res, 200, { configured: true, data: null, updated: 0 });
      const doc = JSON.parse(raw);
      return send(res, 200, { configured: true, data: doc.data, updated: doc.updated });
    }
    if (req.method === 'PUT' || req.method === 'POST') {
      let body;
      try { body = JSON.parse(await readBody(req)); } catch (e) {
        return send(res, e.message === 'too_large' ? 413 : 400, { configured: true, error: e.message === 'too_large' ? 'Datos demasiado grandes.' : 'JSON inválido.' });
      }
      if (!body || typeof body.data !== 'object') return send(res, 400, { configured: true, error: 'Falta "data".' });
      const doc = JSON.stringify({ data: body.data, updated: Date.now() });
      if (Buffer.byteLength(doc) > MAX_BYTES) return send(res, 413, { configured: true, error: 'Datos demasiado grandes.' });
      await redis(cfg, ['SET', key, doc]);
      return send(res, 200, { configured: true, ok: true, updated: JSON.parse(doc).updated });
    }
    res.setHeader('Allow', 'GET, PUT');
    return send(res, 405, { configured: true, error: 'Método no permitido.' });
  } catch (e) {
    return send(res, 502, { configured: true, error: 'Error al hablar con la base de datos.' });
  }
};
