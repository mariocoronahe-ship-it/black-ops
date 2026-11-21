// CALOT·IA serverless endpoint (Vercel Node function, zero dependencies).
//   GET  /api/ai -> { configured, model }
//   POST /api/ai body: { messages: [{ role, content }], context?: { section, title, route, snippet } }
//                -> { ok, configured, reply, model }

const MAX_BYTES = 64 * 1024;
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';

function readBody(req) {
  if (req.body !== undefined) {
    return Promise.resolve(typeof req.body === 'string' ? req.body : JSON.stringify(req.body));
  }
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > MAX_BYTES) {
        reject(new Error('too_large'));
        req.destroy();
      } else {
        chunks.push(c);
      }
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(obj));
}

function resolveKey(req) {
  const envKey = String(process.env.OPENAI_API_KEY || '').trim();
  if (envKey) return envKey;
  const hdr = String(req.headers['x-openai-key'] || '').trim();
  return /^sk-[A-Za-z0-9_-]{16,}$/.test(hdr) ? hdr : '';
}

function buildSystemPrompt(context = {}) {
  const ctxLines = [];
  if (context.section) ctxLines.push(`Sección actual: ${String(context.section).slice(0, 60)}`);
  if (context.title) ctxLines.push(`Vista actual: ${String(context.title).slice(0, 120)}`);
  if (context.route) ctxLines.push(`Ruta: ${String(context.route).slice(0, 140)}`);
  if (context.snippet) ctxLines.push(`Extracto visible: ${String(context.snippet).slice(0, 600)}`);

  return [
    'Eres CALOT·IA, tutor experto en Cirugía General dentro de CALOT-OS para un médico residente de 2° año (R2) en México (PUEM · HGR No. 72 IMSS).',
    'Responde en español de México con precisión anatómica, técnica y clínica de libro de texto y guías vigentes (Sabiston, Schwartz, Tokio TG18, WSES, ACS, GPC CENETEC). Ve directo al punto en formato claro con viñetas o pasos cuando ayude.',
    'Privacidad y rigor clínico (NOM-004 / HIPAA): nunca solicites ni repitas datos identificables de pacientes; no inventes criterios, cifras ni hallazgos clínicos; ante manejo farmacológico recuerda validar función renal/hepática, alergias y ajuste de dosis.',
    ctxLines.length ? `Contexto de la pantalla del usuario:\n${ctxLines.join('\n')}` : '',
  ].filter(Boolean).join('\n\n');
}

module.exports = async function handler(req, res) {
  const model = String(process.env.OPENAI_MODEL || 'gpt-4.1').trim() || 'gpt-4.1';

  if (req.method === 'GET') {
    return send(res, 200, {
      configured: Boolean(String(process.env.OPENAI_API_KEY || '').trim()),
      model,
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return send(res, 405, { configured: Boolean(resolveKey(req)), error: 'Método no permitido.' });
  }

  const apiKey = resolveKey(req);
  if (!apiKey) {
    return send(res, 503, {
      configured: false,
      error: 'Falta configurar OPENAI_API_KEY en Vercel (Project Settings → Environment Variables).',
    });
  }

  let body;
  try {
    body = JSON.parse(await readBody(req) || '{}');
  } catch (e) {
    return send(res, e.message === 'too_large' ? 413 : 400, {
      configured: true,
      error: e.message === 'too_large' ? 'Solicitud demasiado grande.' : 'JSON inválido.',
    });
  }

  const rawMsgs = Array.isArray(body?.messages) ? body.messages : [];
  const messages = rawMsgs
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.trim().slice(0, 3000) }))
    .filter((m) => m.content.length > 0)
    .slice(-14);

  if (!messages.length) {
    return send(res, 400, { configured: true, error: 'Escribe una pregunta para CALOT·IA.' });
  }

  const context = body?.context && typeof body.context === 'object' ? {
    section: String(body.context.section || '').trim().slice(0, 60),
    title: String(body.context.title || '').trim().slice(0, 120),
    route: String(body.context.route || '').trim().slice(0, 140),
    snippet: String(body.context.snippet || '').trim().slice(0, 600),
  } : {};

  try {
    const upstream = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: buildSystemPrompt(context) }, ...messages],
        temperature: 0.35,
        max_tokens: 750,
      }),
      signal: AbortSignal.timeout(25000),
    });

    if (!upstream.ok) {
      if (upstream.status === 401) {
        return send(res, 401, { configured: true, error: 'Clave de OpenAI inválida o revocada.' });
      }
      if (upstream.status === 429) {
        return send(res, 429, { configured: true, error: 'Límite de cuota o tasa de OpenAI alcanzado.' });
      }
      return send(res, 502, { configured: true, error: `Error al consultar OpenAI (HTTP ${upstream.status}).` });
    }

    const data = await upstream.json();
    const reply = String(data?.choices?.[0]?.message?.content || '').trim();
    if (!reply) {
      return send(res, 502, { configured: true, error: 'OpenAI devolvió una respuesta vacía.' });
    }

    return send(res, 200, {
      ok: true,
      configured: true,
      reply,
      model: String(data?.model || model),
    });
  } catch (err) {
    return send(res, 502, {
      configured: true,
      error: err?.name === 'TimeoutError'
        ? 'Tiempo de espera agotado al consultar OpenAI.'
        : 'No se pudo conectar con OpenAI.',
    });
  }
};
