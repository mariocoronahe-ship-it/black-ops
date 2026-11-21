// CALOT·IA — Cliente de conversación y contexto quirúrgico conectado a /api/ai
import { esc } from './ui.js';

const ENDPOINT = 'api/ai';
const SESSION_KEY = 'calot:ai-chat-v1';
const LOCAL_KEY = 'calot:ai-local-key';

const SECTION_PROMPTS = {
  resumenes: [
    'Perlas PUEM de esta vista',
    'Hazme 3 preguntas tipo examen del tema',
    'Resumen clínico rápido para pase de visita',
  ],
  hgr72: [
    'Checklist preoperatorio IMSS rápido',
    'Criterios de Tokio y manejo de colecistitis',
    'Datos de alarma postquirúrgicos clave',
  ],
  juegos: [
    'Explícame una perla quirúrgica clave',
    'Diferencias entre Tokio I, II y III',
    'Criterios de Visión Crítica de Strasberg',
  ],
  repasa: [
    'Hazme una pregunta corta estilo R2',
    'Clasificación de Hinchey paso a paso',
    'Principios de control de daños en trauma',
  ],
  recursos: [
    '¿Cuándo usar Mannheim o Boey?',
    'Triángulo hepatocístico y límites anatómicos',
    'Escala de Alvarado y conducta sugerida',
  ],
  inicio: [
    '3 criterios de la Visión Crítica de Strasberg',
    'Hazme 3 preguntas tipo examen R2',
    'Abordaje inicial de abdomen agudo quirúrgico',
  ],
};

function loadHistory() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    const arr = JSON.parse(raw || '[]');
    return Array.isArray(arr) ? arr.filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string').slice(-24) : [];
  } catch {
    return [];
  }
}

function saveHistory(msgs) {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(msgs.slice(-24))); } catch { /* sin storage */ }
}

const getLocalKey = () => {
  try { return String(localStorage.getItem(LOCAL_KEY) || '').trim(); } catch { return ''; }
};
const setLocalKey = (val) => {
  try {
    const clean = String(val || '').trim();
    if (clean) localStorage.setItem(LOCAL_KEY, clean);
    else localStorage.removeItem(LOCAL_KEY);
  } catch { /* sin storage */ }
};

function inlineMd(s) {
  return esc(s)
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
}

function formatReply(text) {
  const lines = String(text || '').replace(/\r\n/g, '\n').split('\n');
  let out = '';
  let inList = false;

  const closeList = () => { if (inList) { out += '</ul>'; inList = false; } };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { closeList(); continue; }
    const bullet = line.match(/^(?:[-*•]|\d+[.)])\s+(.*)$/);
    if (bullet) {
      if (!inList) { out += '<ul>'; inList = true; }
      out += `<li>${inlineMd(bullet[1])}</li>`;
    } else {
      closeList();
      out += `<p>${inlineMd(line)}</p>`;
    }
  }
  closeList();
  return out || `<p>${esc(text)}</p>`;
}

export function initCalotAI({ getContext = () => ({}), onBusyChange = () => {}, onStatusChange = () => {}, onOpenDrawer = () => {} } = {}) {
  let messages = loadHistory();
  let busy = false;
  let drawerOpen = false;
  let showKeyConfig = false;
  let serverConfigured = false;
  let modelName = 'gpt-4.1';

  const hasAuth = () => serverConfigured || Boolean(getLocalKey());

  // Crear drawer único sobre body
  let drawer = document.getElementById('calot-ai-drawer');
  if (!drawer) {
    drawer = document.createElement('aside');
    drawer.id = 'calot-ai-drawer';
    drawer.className = 'ai-drawer glass';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-label', 'Chat asistente CALOT·IA');
    drawer.setAttribute('data-lenis-prevent', '');
    drawer.hidden = true;
    document.body.append(drawer);
  }

  drawer.innerHTML = `
    <div class="ai-drawer-head">
      <div class="ai-drawer-id">
        <span class="ai-dot" aria-hidden="true"></span>
        <div>
          <strong>CALOT·IA</strong>
          <small class="mono muted" data-ai-model>VERIFICANDO...</small>
        </div>
      </div>
      <div class="ai-drawer-acts">
        <button type="button" class="btn btn-sm btn-ghost" data-ai-clear title="Limpiar conversación">Limpiar</button>
        <button type="button" class="btn btn-sm btn-ghost" data-ai-key-toggle title="Configurar clave de respaldo">API</button>
        <button type="button" class="icon-btn" data-ai-close aria-label="Cerrar chat CALOT·IA">✕</button>
      </div>
    </div>
    <div class="ai-key-box" data-ai-key-box hidden></div>
    <div class="ai-msgs" data-ai-msgs></div>
    <div class="ai-chips" data-ai-chips></div>
    <form class="ai-composer" data-ai-form>
      <textarea class="input ai-input" rows="2" placeholder="Pregunta sobre Cirugía, PUEM, guías o escalas… (Enter envía)" aria-label="Mensaje para CALOT·IA" required></textarea>
      <button type="submit" class="btn btn-sm btn-glow ai-send-btn">Enviar</button>
    </form>
    <p class="ai-footnote mono muted">Respuestas de apoyo académico. No ingreses datos identificables de pacientes (NOM-004).</p>
  `;

  const modelEl = drawer.querySelector('[data-ai-model]');
  const msgsEl = drawer.querySelector('[data-ai-msgs]');
  const chipsEl = drawer.querySelector('[data-ai-chips]');
  const keyBoxEl = drawer.querySelector('[data-ai-key-box]');
  const formEl = drawer.querySelector('[data-ai-form]');
  const inputEl = drawer.querySelector('.ai-input');
  const sendBtn = drawer.querySelector('.ai-send-btn');

  const notifyStatus = () => {
    const label = serverConfigured ? `ONLINE · ${modelName}` : (getLocalKey() ? 'CLAVE LOCAL' : 'SIN API');
    if (modelEl) modelEl.textContent = label;
    onStatusChange({
      configured: hasAuth(),
      serverConfigured,
      model: modelName,
      badge: serverConfigured ? 'ONLINE · OPENAI' : (getLocalKey() ? 'LOCAL · OPENAI' : 'CONFIGURAR API'),
      hint: serverConfigured
        ? `Motor OpenAI activo (${modelName}). Pregunta cualquier tema quirúrgico.`
        : 'Listo para recibir clave OPENAI_API_KEY o respaldo local.',
    });
  };

  const renderSlot = () => {
    const slot = document.getElementById('ai-api-slot');
    if (!slot) return;
    slot.innerHTML = `
      <form class="ai-quick-form" data-ai-quick-form>
        <input type="text" class="ai-quick-inp" placeholder="Pregunta rápida a CALOT·IA…" aria-label="Pregunta rápida a CALOT·IA" autocomplete="off">
        <button type="submit" class="ai-quick-go" aria-label="Preguntar">→</button>
      </form>
      <button type="button" class="ai-open-btn" data-ai-open>Abrir chat completo CALOT·IA →</button>
    `;
  };

  const renderKeyBox = () => {
    if (!keyBoxEl) return;
    keyBoxEl.hidden = !showKeyConfig;
    if (!showKeyConfig) return;
    const saved = getLocalKey();
    keyBoxEl.innerHTML = serverConfigured
      ? `<p class="muted"><strong>Servidor conectado:</strong> OpenAI ya opera de forma segura mediante variable de entorno (<code>${esc(modelName)}</code>).</p>`
      : `
        <p class="muted">Para pruebas directas si aún no agregas <code>OPENAI_API_KEY</code> en Vercel, puedes guardar una clave en este navegador:</p>
        <div class="ai-key-row">
          <input type="password" class="input" data-ai-key-inp placeholder="Pega tu clave de OpenAI..." value="${esc(saved)}" autocomplete="off">
          <button type="button" class="btn btn-sm btn-glow" data-ai-key-save>Guardar</button>
          ${saved ? '<button type="button" class="btn btn-sm btn-ghost" data-ai-key-del>Quitar</button>' : ''}
        </div>`;
  };

  const renderChips = () => {
    if (!chipsEl) return;
    const sec = String(getContext()?.section || 'inicio');
    const list = SECTION_PROMPTS[sec] || SECTION_PROMPTS.inicio;
    chipsEl.innerHTML = list.map((txt) => `<button type="button" class="ai-chip" data-ai-chip="${esc(txt)}">${esc(txt)}</button>`).join('');
  };

  const renderMessages = () => {
    if (!msgsEl) return;
    if (!messages.length && !busy) {
      msgsEl.innerHTML = `
        <div class="ai-empty">
          <p class="ai-empty-title">Hola, soy <strong>CALOT·IA</strong>.</p>
          <p class="muted">Pregúntame dudas de Cirugía General, criterios GPC/Tokio/WSES, resúmenes PUEM o pídeme preguntas tipo examen.</p>
        </div>`;
      return;
    }

    const html = messages.map((m) => `
      <div class="ai-msg ${m.role === 'user' ? 'is-user' : 'is-bot'} ${m.error ? 'is-err' : ''}">
        <span class="ai-msg-role mono">${m.role === 'user' ? 'TÚ' : 'CALOT·IA'}</span>
        <div class="ai-msg-body">${m.role === 'user' ? `<p>${esc(m.content)}</p>` : formatReply(m.content)}</div>
      </div>`).join('');

    const typing = busy
      ? `<div class="ai-msg is-bot is-typing"><span class="ai-msg-role mono">CALOT·IA</span><div class="ai-msg-body"><span class="ai-dots"><i></i><i></i><i></i></span> Analizando…</div></div>`
      : '';

    msgsEl.innerHTML = html + typing;
    msgsEl.scrollTop = msgsEl.scrollHeight;
  };

  const setOpen = (open) => {
    drawerOpen = Boolean(open);
    drawer.hidden = !drawerOpen;
    drawer.classList.toggle('open', drawerOpen);
    if (drawerOpen) {
      onOpenDrawer();
      renderChips();
      renderMessages();
      setTimeout(() => inputEl?.focus(), 40);
    }
  };

  const ask = async (promptText) => {
    const text = String(promptText || '').trim();
    if (!text || busy) return;
    if (!drawerOpen) setOpen(true);

    messages.push({ role: 'user', content: text });
    saveHistory(messages);
    busy = true;
    onBusyChange(true);
    if (sendBtn) sendBtn.disabled = true;
    renderMessages();

    const headers = { 'Content-Type': 'application/json' };
    const localKey = !serverConfigured ? getLocalKey() : '';
    if (localKey) headers['x-openai-key'] = localKey;

    try {
      const r = await fetch(ENDPOINT, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          messages: messages.filter((m) => !m.error).slice(-14).map(({ role, content }) => ({ role, content })),
          context: getContext(),
        }),
        cache: 'no-store',
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || !data?.reply) {
        if (r.status === 503 && !serverConfigured) showKeyConfig = true;
        renderKeyBox();
        messages.push({ role: 'assistant', content: data?.error || `No se pudo obtener respuesta (HTTP ${r.status}).`, error: true });
      } else {
        if (data.model) modelName = data.model;
        messages.push({ role: 'assistant', content: data.reply });
      }
      saveHistory(messages);
    } catch {
      messages.push({ role: 'assistant', content: 'Error de red al conectar con CALOT·IA.', error: true });
      saveHistory(messages);
    } finally {
      busy = false;
      onBusyChange(false);
      if (sendBtn) sendBtn.disabled = false;
      notifyStatus();
      renderMessages();
    }
  };

  // Delegación dentro del drawer
  drawer.addEventListener('click', (e) => {
    if (e.target.closest('[data-ai-close]')) return setOpen(false);
    if (e.target.closest('[data-ai-clear]')) {
      messages = [];
      saveHistory(messages);
      return renderMessages();
    }
    if (e.target.closest('[data-ai-key-toggle]')) {
      showKeyConfig = !showKeyConfig;
      return renderKeyBox();
    }
    if (e.target.closest('[data-ai-key-save]')) {
      const val = drawer.querySelector('[data-ai-key-inp]')?.value || '';
      setLocalKey(val);
      showKeyConfig = false;
      renderKeyBox();
      notifyStatus();
      return;
    }
    if (e.target.closest('[data-ai-key-del]')) {
      setLocalKey('');
      renderKeyBox();
      notifyStatus();
      return;
    }
    const chip = e.target.closest('[data-ai-chip]');
    if (chip) return ask(chip.dataset.aiChip);
  });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = inputEl.value.trim();
    if (!val) return;
    inputEl.value = '';
    ask(val);
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formEl.requestSubmit();
    }
  });

  // Eventos sobre #fab-menu (#ai-api-slot)
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-ai-open]')) {
      e.preventDefault();
      setOpen(true);
    }
  });
  document.addEventListener('submit', (e) => {
    const qf = e.target.closest('[data-ai-quick-form]');
    if (!qf) return;
    e.preventDefault();
    const inp = qf.querySelector('.ai-quick-inp');
    const q = inp?.value.trim();
    if (inp) inp.value = '';
    if (q) ask(q);
    else setOpen(true);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerOpen) setOpen(false);
  });

  // Consultar estado inicial del endpoint
  renderSlot();
  renderChips();
  renderMessages();
  notifyStatus();

  fetch(ENDPOINT, { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : null))
    .then((info) => {
      if (info) {
        serverConfigured = Boolean(info.configured);
        if (info.model) modelName = info.model;
      }
      notifyStatus();
      renderKeyBox();
    })
    .catch(() => { notifyStatus(); });

  return {
    open: () => setOpen(true),
    close: () => setOpen(false),
    isOpen: () => drawerOpen,
    ask,
    refreshChips: renderChips,
  };
}
