// Chat de retroalimentación en el HUD.
// Tester: cajón «Retroalimentación con Mario». Mario: bandeja con una pestaña por tester.
import { icon } from './icons.js?v=20261121v';
import { PROFILES } from './perfil.js?v=20261121v';
import { subscribe, send, unread, unreadTotal, markRead, threadHTML, deliveryMode, myChannels, myRole } from './feedback.js?v=20261121v';

const TAGS = ['Bug', 'Idea', 'Me gustó', 'Confuso'];
let mounted = false;

export function mountResidentMessages() {
  if (mounted) return;
  const right = document.querySelector('.hud-right');
  if (!right) return;
  mounted = true;
  const owner = myRole() === 'owner';
  const channels = myChannels();
  let active = channels[0];
  let tag = '';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-item hud-msg-btn';
  btn.setAttribute('aria-label', owner ? 'Retroalimentación de las testers' : 'Retroalimentación con Mario');
  btn.innerHTML = `${icon('send')}<i class="hud-msg-dot" hidden></i>`;
  right.prepend(btn);

  const drawer = document.createElement('aside');
  drawer.className = 'msg-drawer glass';
  drawer.hidden = true;
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-label', 'Retroalimentación');
  drawer.setAttribute('data-lenis-prevent', '');
  drawer.innerHTML = `
    <header class="msg-drawer-head">
      <span class="msg-avatar">${owner ? 'T' : 'M'}</span>
      <div><b>${owner ? 'Retroalimentación' : 'Retroalimentación con Mario'}</b><small class="mono" data-msg-mode></small></div>
      <button type="button" class="btn btn-sm btn-ghost" data-msg-close aria-label="Cerrar">${icon('close')}</button>
    </header>
    ${owner ? `<nav class="msg-tabs" role="tablist">${channels.map((id) => `<button type="button" role="tab" class="msg-tab" data-ch="${id}">${PROFILES[id].name.replace(/^Dra\.\s*/, '')}<i class="msg-tab-dot" hidden></i></button>`).join('')}</nav>` : ''}
    <div class="msg-thread" data-msg-thread></div>
    <form class="msg-form" data-msg-reply>
      ${owner ? '' : `<div class="msg-tags">${TAGS.map((t) => `<button type="button" class="msg-tag" data-tag="${t}">${t}</button>`).join('')}</div>`}
      <textarea class="input" name="text" rows="2" placeholder="${owner ? 'Responder…' : '¿Qué te gustó, qué falló, qué falta?'}" required></textarea>
      <button class="btn btn-glow" type="submit">${icon('send')} Enviar</button>
      ${owner ? '' : '<label class="msg-where mono"><input type="checkbox" name="where" checked> Incluir la sección donde estoy</label>'}
    </form>`;
  document.body.append(drawer);

  const thread = drawer.querySelector('[data-msg-thread]');
  const dot = btn.querySelector('.hud-msg-dot');
  const modeEl = drawer.querySelector('[data-msg-mode]');
  const isOpen = () => !drawer.hidden;

  const paint = () => {
    if (isOpen()) markRead(active);
    const n = unreadTotal();
    dot.hidden = !n;
    dot.textContent = n > 9 ? '9+' : String(n || '');
    btn.classList.toggle('has-new', !!n);
    drawer.querySelectorAll('.msg-tab').forEach((t) => {
      const on = t.dataset.ch === active;
      t.classList.toggle('is-on', on);
      t.setAttribute('aria-selected', String(on));
      const d = t.querySelector('.msg-tab-dot');
      const u = on && isOpen() ? 0 : unread(t.dataset.ch);
      d.hidden = !u; d.textContent = u ? String(u) : '';
    });
    if (isOpen()) {
      thread.innerHTML = threadHTML(active);
      thread.scrollTop = thread.scrollHeight;
    }
    modeEl.textContent = deliveryMode() === 'server' ? 'en línea' : 'solo este dispositivo (sin servidor)';
  };

  const open = (v) => {
    drawer.hidden = !v;
    drawer.classList.toggle('open', v);
    btn.setAttribute('aria-expanded', String(v));
    paint();
    if (v) drawer.querySelector('textarea').focus({ preventScroll: true });
  };

  btn.addEventListener('click', () => open(!isOpen()));
  drawer.querySelector('[data-msg-close]').addEventListener('click', () => open(false));
  drawer.addEventListener('click', (e) => {
    const tab = e.target.closest('.msg-tab');
    if (tab) { active = tab.dataset.ch; paint(); return; }
    const t = e.target.closest('.msg-tag');
    if (t) {
      tag = tag === t.dataset.tag ? '' : t.dataset.tag;
      drawer.querySelectorAll('.msg-tag').forEach((x) => x.classList.toggle('is-on', x.dataset.tag === tag));
    }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isOpen()) open(false); });
  window.addEventListener('hashchange', () => { if (isOpen()) open(false); });
  drawer.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    let text = String(new FormData(f).get('text') || '').trim();
    if (!text) return;
    if (tag) text = `[${tag}] ${text}`;
    if (f.elements.where?.checked) text += `\n— en ${location.hash || '#/inicio'}`;
    f.querySelector('button[type="submit"]').disabled = true;
    await send(active, text);
    f.elements.text.value = '';
    tag = '';
    drawer.querySelectorAll('.msg-tag').forEach((x) => x.classList.remove('is-on'));
    f.querySelector('button[type="submit"]').disabled = false;
  });
  drawer.querySelector('textarea').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); e.target.form.requestSubmit(); }
  });

  subscribe(paint);
}
