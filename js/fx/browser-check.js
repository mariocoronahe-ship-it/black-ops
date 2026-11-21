/* ==========================================================================
   Black Ops · Detección de navegador para el examen R2
   Solo se permite Safari en iPhone y Chrome en Android. Todo lo demás
   (Edge con Copilot, Opera/Brave con IA, Chrome iOS con Gemini, Firefox,
   Samsung Internet, DuckDuckGo, navegadores dentro de apps, computadora)
   queda bloqueado para presentar el examen.
   Función pura: también la usa api/examen.js con el user agent del request.
   ========================================================================== */

const RULES = [
  // Navegadores dentro de apps (WebView): no tienen barra de dirección real
  { re: /FBAN|FBAV|FB_IAB|FBIOS|Instagram|WhatsApp|Snapchat|TikTok|musical_ly|BytedanceWebview|Line\/|LinkedInApp|Twitter|Pinterest|MicroMessenger|Telegram/i, name: 'App (navegador interno)' },
  { re: /\bGSA\//, name: 'App de Google' },
  { re: /EdgiOS|EdgA\/|Edg\/|Edge\//, name: 'Edge' },
  { re: /OPiOS|OPR\/|OPT\/|OPX\/|Opera/, name: 'Opera' },
  { re: /FxiOS|Firefox\//, name: 'Firefox' },
  { re: /SamsungBrowser/, name: 'Samsung Internet' },
  { re: /DuckDuckGo|Ddg\//, name: 'DuckDuckGo' },
  { re: /YaBrowser|YaSearchBrowser/, name: 'Yandex' },
  { re: /UCBrowser|UCWEB/, name: 'UC Browser' },
  { re: /Vivaldi/, name: 'Vivaldi' },
  { re: /MiuiBrowser|XiaoMi\/MiuiBrowser/, name: 'Navegador Xiaomi' },
  { re: /HuaweiBrowser|HiBrowser/, name: 'Navegador Huawei' },
  { re: /Brave/, name: 'Brave' },
  { re: /Comet|Perplexity/, name: 'Comet (Perplexity)' },
  { re: /CriOS/, name: 'Chrome (iPhone)' },
];

/**
 * @param {string} ua  navigator.userAgent o header user-agent
 * @param {{brave?: boolean, maxTouchPoints?: number, screenW?: number}} hints  pistas que solo existen en el cliente
 * @returns {{name: string, os: string, label: string, allowed: boolean, reason: string}}
 */
export function detectBrowser(ua = '', hints = {}) {
  const s = String(ua || '');
  const isAndroid = /Android/i.test(s);
  const isIPhone = /iPhone|iPod/.test(s);
  const isIPad = /iPad/.test(s);
  const isMacTouch = /Macintosh/.test(s) && (hints.maxTouchPoints || 0) > 1;
  let os = isAndroid ? 'Android' : isIPhone ? 'iPhone' : isIPad ? 'iPad' : isMacTouch ? 'iPhone/iPad' : /Windows/.test(s) ? 'Windows' : /Macintosh/.test(s) ? 'Mac' : /Linux|CrOS/.test(s) ? 'Linux' : 'Desconocido';

  const out = (name, allowed, reason = '') => ({ name, os, label: `${name} · ${os}`, allowed, reason });

  if (!s) return out('Desconocido', false, 'Sin user agent');
  if (hints.brave) return out('Brave', false, 'Brave trae asistente de IA (Leo)');

  for (const rule of RULES) {
    if (rule.re.test(s)) return out(rule.name, false, `${rule.name} no está permitido para el examen`);
  }

  // iPhone (o iPad) con Safari real: trae "Version/x" y "Safari/"
  if (isIPhone || isIPad) {
    if (/Version\/[\d.]+/.test(s) && /Safari\//.test(s)) return out('Safari', true);
    return out('App (navegador interno)', false, 'Navegador dentro de una app');
  }
  // "Ver sitio de escritorio" en iPhone: el UA se disfraza de Mac pero hay pantalla táctil
  if (isMacTouch) {
    return out('Modo escritorio', false, 'Desactiva «Sitio de escritorio» y usa Safari normal');
  }
  if (isAndroid) {
    if (/; wv\)/.test(s) || /Version\/4\.0/.test(s)) return out('App (navegador interno)', false, 'WebView dentro de una app');
    if (/Chrome\/[\d.]+/.test(s) && /Mobile|Android/.test(s)) return out('Chrome', true);
    return out('Otro navegador', false, 'Navegador Android no reconocido');
  }
  // Computadora: nunca permitida para el examen
  if (/Chrome\//.test(s)) return out('Chrome', false, 'Computadora: el examen es solo en celular');
  if (/Safari\//.test(s)) return out('Safari', false, 'Computadora: el examen es solo en celular');
  return out('Otro navegador', false, 'Navegador no reconocido');
}

export function detectCurrentBrowser() {
  if (typeof navigator === 'undefined') return detectBrowser('');
  let screenW = 0;
  try { screenW = Math.min(screen.width, screen.height); } catch {}
  return detectBrowser(navigator.userAgent, {
    brave: Boolean(navigator.brave && typeof navigator.brave.isBrave === 'function'),
    maxTouchPoints: navigator.maxTouchPoints || 0,
    screenW,
  });
}
