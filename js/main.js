import { runAiHackSequence, mountInitialBootGate, playRoleIntro } from './fx/boot.js?v=20261122i';
import { playIntro, prefetchIntro } from './fx/intro.js?v=20261122i';
import { isVoiceOn, setVoiceOn, speak } from './fx/voice.js?v=20261122i';
import { icon } from './icons.js?v=20261122i';
import { INTRO_PENDING } from "./fx/boot.js?v=20261122i";
import { markBody, isOwner, isAdscrito } from "./perfil.js?v=20261122i";
import * as S from './scroll.js';
import { esc, toast } from './ui.js';
import { createOrb } from './fx/orb.js?v=20261119d';
import { createNeuralField } from './fx/synapse.js?v=20261119d';
import { initCalotAI } from './ai.js?v=20261119d';
import { PORTAL_MODULES, playModulePortal, playWingEntrance, playSubPortal, hasSubPortal } from './fx/portal.js?v=20261122i';

let lastSubScene = null;
import { AMBIENT_MODES, SFX_PACKS, getAudioState, setAmbient, setSfxPack, setMuted, setMusicVol, setFxVol, toggleMusic, isMusicPlaying, onAudioChange, playUiSfx } from './fx/audio.js?v=20261122i';
import { store, loadStoreData } from './store.js?v=20261122i';
import { initSync, onStatus, getCode, createCode, linkCode, unlink, syncNow } from './sync.js?v=20261122i';
import * as portada from './views/portada.js?v=20261122i';
import * as hgr72 from './views/hgr72.js?v=20261122i';
import * as pendientes from './views/pendientes.js?v=20261122i';

const VIEWS = {
  '': portada,
  portada,
  hgr72,
  pendientes,
};

// Vistas con datos pesados: se importan al entrar por primera vez (misma URL que en el resto de importadores).
const LAZY_VIEWS = {
  resumenes: () => import('./views/resumenes.js?v=20261122i'),
  inicio: () => import('./views/inicio.js?v=20261122i'),
  aprende: () => import('./views/aprende.js?v=20261122i'),
  repasa: () => import('./views/repasa.js?v=20261122i'),
  puem: () => import('./views/puem.js?v=20261122i'),
  recursos: () => import('./views/recursos.js?v=20261122i'),
  juegos: () => import('./views/juegos.js?v=20261122i'),
  stats: () => import('./views/stats.js?v=20261122i'),
  adscrito: () => import('./views/adscrito.js?v=20261122i'),
  biblioteca: () => import("./views/biblioteca.js?v=20261122i"),
  ranking: () => import('./views/ranking.js?v=20261122i'),
};
const loadedViews = {};
// Vistas que además necesitan los datos del store (questions, progreso por tema, casos).
const STORE_DATA_VIEWS = new Set(['inicio', 'aprende', 'repasa', 'juegos', 'stats']);
const isView = (p) => Object.hasOwn(VIEWS, p) || Object.hasOwn(LAZY_VIEWS, p); // hasOwn: «constructor» o «__proto__» no son vistas

const REDIRECT_MAP = {
  cuaderno: { target: 'aprende', extra: (p) => (p.get('new') === '1' && !p.has('tab') ? { tab: 'apuntes' } : {}) },
  apuntes: { target: 'aprende', extra: () => ({ tab: 'apuntes' }) },
  tema: { target: 'aprende', extra: () => ({}) },
  temas: { target: 'resumenes', extra: () => ({}) },
  temario: { target: 'resumenes', extra: () => ({}) },
  resumen: { target: 'resumenes', extra: () => ({}) },
  repaso: { target: 'repasa', extra: () => ({}) },
  flashcards: { target: 'repasa', extra: () => ({ tab: 'tarjetas' }) },
  blitz: { target: 'juegos', extra: () => ({ modo: 'blitz' }) },
  arcade: { target: 'juegos', extra: () => ({}) },
  simuladores: { target: 'juegos', extra: () => ({}) },
  atlas: { target: 'recursos', extra: (p) => (!p.has('id') && !p.has('cat') ? { cat: '3d' } : {}) },
  '3d': { target: 'recursos', extra: () => ({ cat: '3d' }) },
  modelos: { target: 'recursos', extra: () => ({ cat: '3d' }) },
  algoritmos: { target: 'recursos', extra: () => ({ cat: 'algoritmos' }) },
  guias: { target: 'recursos', extra: () => ({ cat: 'guias' }) },
  escalas: { target: 'recursos', extra: () => ({ cat: 'escalas' }) },
  calculadoras: { target: 'recursos', extra: () => ({ cat: 'escalas' }) },
  estadisticas: { target: 'stats', extra: () => ({}) },
  liga: { target: 'ranking', extra: () => ({}) },
  competencia: { target: 'ranking', extra: () => ({}) },
  bitacora: { target: 'hgr72', extra: () => ({ mod: 'bitacora' }) },
  guardia: { target: 'hgr72', extra: () => ({ mod: 'personal' }) },
  guardias: { target: 'hgr72', extra: () => ({ mod: 'personal' }) },
  rotaciones: { target: 'hgr72', extra: () => ({ mod: 'personal' }) },
  formatos: { target: 'hgr72', extra: () => ({ mod: 'formatos' }) },
  home: { target: 'inicio', extra: () => ({}) },
  orbit: { target: 'inicio', extra: () => ({}) },
  orbita: { target: 'inicio', extra: () => ({}) },
};

export const STUDY_NAV = [
  { to: 'inicio', label: 'Inicio', ic: 'home' },
  { to: 'resumenes', label: 'Resúmenes', ic: 'notebook' },
  { to: 'repasa', label: 'Repasa', ic: 'brain' },
  { to: 'puem', label: 'PUEM', ic: 'tasks' },
  { to: 'juegos', label: 'Juegos', ic: 'gamepad' },
  { to: 'recursos', label: 'Recursos', ic: 'cube' },
  { to: 'stats', label: 'Progreso', ic: 'sparkle' },
];

export const GUARDIA_NAV = { to: 'hgr72', label: 'HGR 72', ic: 'hospital', badge: 'GUARDIA' };
// Panel de monitoreo docente: visible para Dra. Hernández (HE) y Mario (12)
export const ADSCRITO_NAV = { to: 'adscrito', label: 'Monitoreo', ic: 'eye' };
export const NAV = [...STUDY_NAV, GUARDIA_NAV, ADSCRITO_NAV];
markBody();

const TAB_MAIN = ['inicio', 'resumenes', 'juegos'];
const FAB_ITEMS = [
  { href: '#/resumenes', label: 'Resúmenes · Temario PUEM R1–R4', ic: 'notebook', c: 'var(--crimson)' },
  { href: '#/repasa', label: 'Repasa · Tarjetas y perlas', ic: 'brain', c: 'var(--repaso)' },
  { href: '#/puem', label: 'PUEM · Banco de preguntas por año', ic: 'tasks', c: 'var(--repaso)' },
  { href: '#/juegos', label: 'Juegos · Preguntas y casos clínicos', ic: 'gamepad', c: 'var(--juegos)' },
  { href: '#/recursos', label: 'Recursos · Modelos 3D, algoritmos y escalas', ic: 'cube', c: 'var(--atlas)' },
  { href: '#/stats', label: 'Progreso · Tiempo y rendimiento', ic: 'sparkle', c: 'var(--biblio)' },
  { href: '#/ranking', label: 'Liga CALOT · Ranking semanal', ic: 'trophy', c: 'var(--rk-gold)' },
];

const root = document.getElementById('view');
const navLink = (n) => `<a class="nav-item" href="#/${n.to}" data-to="${n.to}" aria-label="${n.label}">${icon(n.ic, 'ic3d')}<span class="tip">${n.label}</span></a>`;
const hudItem = (n) => `<a class="hud-item" href="#/${n.to}" data-to="${n.to}">${icon(n.ic, 'ic3d')}<span>${n.label}</span></a>`;
const hudGuardiaItem = (n) => `<a class="hud-item is-guardia" href="#/${n.to}" data-to="${n.to}" title="Modo Guardia · Hospital HGR 72">${icon(n.ic, 'ic3d')}<span>${n.label}</span><em class="hud-guardia-tag">${n.badge}</em></a>`;
const orbBtn = (cls = '') => `<button class="fab orb-btn ${cls}" aria-label="CALOT IA · Asistente y acciones rápidas" aria-expanded="false" aria-controls="fab-menu"><canvas class="orb" aria-hidden="true"></canvas></button>`;
const syncBtn = (cls = '') => `<button class="nav-item sync-btn ${cls}" data-act="settings" aria-label="Sincronizar y ajustes">${icon('cloud', 'ic3d')}<i class="sync-dot" data-s="off"></i><span class="tip">Sincronizar</span></button>`;
const cmdkBtn = () => `<button class="nav-item cmdk-btn" data-act="cmdk" aria-label="Buscador rápido (⌘K)">${icon('search', 'ic3d')}<span class="tip">Buscar ⌘K</span></button>`;
const ligaBtn = () => `<a class="nav-item liga-btn" href="#/ranking" data-to="ranking" aria-label="Liga CALOT · Ranking semanal">${icon('trophy', 'ic3d')}<span class="liga-hud-tag mono" data-rk-hud-tag hidden></span><span class="tip" data-rk-hud-tip>Liga CALOT</span></a>`;
function renderAudioConsoleBody(st = getAudioState(), scopePrefix = '') {
  const ambList = AMBIENT_MODES.map((m) => `
    <button type="button" class="sound-amb-btn ${st.amb === m.id && !st.muted ? 'is-on' : ''}" data-audio-amb="${esc(m.id)}" data-audio-scope="${esc(scopePrefix)}">
      <span class="sound-amb-dot" aria-hidden="true"></span>
      <span class="sound-amb-txt"><strong>${esc(m.label)}</strong><small>${esc(m.sub)}</small></span>
    </button>
  `).join('');
  const packList = SFX_PACKS.map((p) => `
    <button type="button" class="sound-pack-btn ${st.pack === p.id ? 'is-on' : ''}" data-audio-pack="${esc(p.id)}" data-audio-scope="${esc(scopePrefix)}">${esc(p.label)}</button>
  `).join('');
  return `
    <div class="sound-panel-head">
      <span>Sonido</span>
      <button type="button" class="sound-mute-btn ${st.muted ? 'is-muted' : ''}" data-audio-mute aria-pressed="${String(!st.muted)}">
        <span class="sound-mute-lbl" data-audio-mute-lbl>${st.muted ? 'Silenciado' : 'Activo'}</span>
        <span class="sound-mute-track" aria-hidden="true"><span class="sound-mute-knob"></span></span>
      </button>
    </div>
    <div class="sound-fx-head">
      <span class="sound-section-lbl mono">VOZ DE CALOT</span>
      <button type="button" class="sound-mute-btn ${isVoiceOn() ? '' : 'is-muted'}" data-voice-toggle aria-pressed="${String(isVoiceOn())}" aria-label="Voz de la IA">
        <span class="sound-mute-lbl">${isVoiceOn() ? 'Activa' : 'Callada'}</span>
        <span class="sound-mute-track" aria-hidden="true"><span class="sound-mute-knob"></span></span>
      </button>
    </div>
    <div class="sound-section-lbl mono">AMBIENTE</div>
    <div class="sound-amb-list">${ambList}</div>
    <div class="sound-fx-head">
      <span class="sound-section-lbl mono">EFECTOS · TOCA PARA OÍR</span>
      <button type="button" class="sound-test-btn" data-audio-test-boot>▶ arranque</button>
    </div>
    <div class="sound-pack-grid">${packList}</div>
    <label class="sound-slider-row">
      <span class="sound-slider-top"><span>Música</span><span class="mono" data-audio-mvol-val>${st.musicVol}%</span></span>
      <input type="range" min="0" max="100" value="${st.musicVol}" data-audio-mvol aria-label="Volumen de música">
    </label>
    <label class="sound-slider-row">
      <span class="sound-slider-top"><span>Efectos (clics y navegación)</span><span class="mono" data-audio-fvol-val>${st.fxVol}%</span></span>
      <input type="range" min="0" max="100" value="${st.fxVol}" data-audio-fvol aria-label="Volumen de efectos">
    </label>`;
}

const audioBtn = () => {
  const st = getAudioState();
  const curAmb = AMBIENT_MODES.find((m) => m.id === st.amb) || AMBIENT_MODES[0];
  return `<div class="hud-sound-wrap">
    <button type="button" class="nav-item audio-btn ${st.musicOn ? 'is-playing' : ''}" data-act="toggle-sound-panel" aria-expanded="false" aria-controls="hud-sound-panel" aria-label="Consola de sonido">
      <span class="eq-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
      <span class="audio-amb-lbl mono" data-audio-amb-label>${st.muted || st.amb === 'off' ? 'Silencio' : esc(curAmb.short)}</span>
      <span class="audio-caret" aria-hidden="true">▾</span>
    </button>
    <div class="hud-sound-panel glass" id="hud-sound-panel" role="dialog" aria-label="Consola de sonido" hidden>${renderAudioConsoleBody(st, 'hud')}</div>
  </div>`;
};
const themeBtn = () => {
  const isLight = store.state.settings?.theme === 'light';
  return `<button class="nav-item theme-btn" data-act="toggle-theme" aria-label="Cambiar entre modo noche y modo día (papel)" title="Interruptor Sol / Luna"><span class="theme-glyph" data-theme-glyph aria-hidden="true">${isLight ? '☾' : '☀'}</span><span class="tip" data-theme-tip>${isLight ? 'Modo Noche' : 'Modo Día'}</span></button>`;
};

function placeFlare() {
  const hud = document.querySelector('.hud'); const on = hud?.querySelector('.hud-item[aria-current="page"]');
  const flare = hud?.querySelector('.hud-flare'); if (!flare) return;
  if (!on) { flare.style.opacity = '0'; return; }
  const r = on.getBoundingClientRect(); const h = hud.getBoundingClientRect();
  flare.style.opacity = '1'; flare.style.setProperty('--fx', `${r.left - h.left + r.width / 2}px`); flare.style.setProperty('--fw', `${r.width}px`);
}

function wireMagneticHud() {
  if (!window.matchMedia('(pointer: fine)').matches || !S.enabled || !window.gsap) return;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  document.querySelectorAll('.hud-item, .hud .orb-btn, .hud .liga-btn, .hud .theme-btn, .hud .sync-btn, .hud .cmdk-btn, .hud .audio-btn').forEach((el) => {
    const xTo = window.gsap.quickTo(el, 'x', { duration: 0.28, ease: 'power3.out' });
    const yTo = window.gsap.quickTo(el, 'y', { duration: 0.28, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      if (e.buttons > 0) { xTo(0); yTo(0); return; }
      const r = el.getBoundingClientRect();
      xTo(clamp((e.clientX - (r.left + r.width / 2)) * 0.1, -3.5, 3.5));
      yTo(clamp((e.clientY - (r.top + r.height / 2)) * 0.1, -3.5, 3.5));
    });
    el.addEventListener('pointerdown', () => { xTo(0); yTo(0); });
    el.addEventListener('pointerenter', () => playUiSfx('hover'));
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
}

async function openCmdPalette() {
  let TEMARIO_PUEM = [];
  let TEMARIO_APRENDE = [];
  let CATALOGO_RECURSOS = [];
  try {
    [{ TEMARIO_PUEM }, { TEMARIO_APRENDE }, { CATALOGO_RECURSOS }] = await Promise.all([import('./data/temario_puem.js?v=20261122i'), import('./data/temario_aprende.js?v=20261122i'), import('./data/catalogo_recursos.js?v=20261122i')]);
  } catch { /* sin conexión: solo secciones, resúmenes y juegos */ }
  const m = document.getElementById('modal');
  const items = [
    ...NAV.filter((n) => n.to !== 'adscrito' || isAdscrito() || isOwner()).map((n) => ({ title: `Sección · ${n.label}`, sub: `Ir a #/${n.to}`, href: `#/${n.to}`, ic: n.ic })),
    ...TEMARIO_PUEM.map((t) => ({ title: `Resumen ${t.year} · ${t.title}`, sub: `${t.sistema} · ${t.subtemas.map((s) => s.t).join(' · ')}`, href: `#/resumenes?id=${t.id}`, ic: 'notebook' })),
    ...TEMARIO_APRENDE.map((t) => ({ title: `Resumen completo R2 · ${t.num}. ${t.title}`, sub: `Leer (${t.subblocks.length} subbloques) · Repasar · Jugar`, href: `#/aprende?tema=${t.id}`, ic: 'book' })),
    ...TEMARIO_APRENDE.map((t) => ({ title: `Repasar · ${t.num}. ${t.title}`, sub: `Tarjetas SM-2 y puntos clave en casa del tema`, href: `#/aprende?tema=${t.id}&casa=repasar`, ic: 'brain' })),
    ...TEMARIO_APRENDE.map((t) => ({ title: `Jugar · ${t.num}. ${t.title}`, sub: `Blitz del módulo y arcade quirúrgico`, href: `#/aprende?tema=${t.id}&casa=jugar`, ic: 'gamepad' })),
    ...CATALOGO_RECURSOS.filter((r) => r.subtype !== 'puem_pack').slice(0, 45).map((r) => ({ title: `Recurso · ${r.title}`, sub: `${r.badge || r.type} · ${r.tag || ''}`, href: `#/recursos?id=${r.id}`, ic: 'cube' })),
    { title: 'Juego · Pase de Visita (Modo Adscrito)', sub: 'Evalúa y corrige el plan del R1', href: '#/juegos?modo=pase', ic: 'clipboard' },
    { title: 'Juego · ¿Se opera o no? (Laparotomías Blancas)', sub: 'Decisiones quirúrgicas urgentes', href: '#/juegos?modo=lapblanca', ic: 'scalpel' },
    { title: 'Juego · Detective Diagnóstico Quirúrgico', sub: 'Casos misteriosos con pistas progresivas', href: '#/juegos?modo=detective', ic: 'search' },
    { title: 'Juego · Quirófano Paso a Paso', sub: 'Ordena los tiempos quirúrgicos y variantes', href: '#/juegos?modo=quirofano', ic: 'layers' },
    { title: 'Juego · Paciente en evolución', sub: 'Decide turno a turno con un paciente crítico', href: '#/juegos?modo=noctua', ic: 'brain' },
    { title: 'Juego · Blitz PUEM (45s)', sub: 'Speed-round de preguntas quirúrgicas', href: '#/juegos?modo=blitz', ic: 'bolt' },
    { title: 'Juego · Guardia Nocturna (3 a. m.)', sub: 'Decide y mira la evolución T0 → T1 → T2', href: '#/juegos?modo=guardia', ic: 'clock' },
    { title: 'Juego · El Adscrito Te Pregunta', sub: 'Cadenas de 4 preguntas que suben o te rescatan', href: '#/juegos?modo=adscrito', ic: 'feather' },
    { title: 'Juego · Arma el Algoritmo', sub: 'Ordena las decisiones de la guía clínica', href: '#/juegos?modo=algoritmo', ic: 'grid' },
    { title: 'Juego · ¿Qué se te pasó?', sub: 'Encuentra el error escondido en la nota clínica', href: '#/juegos?modo=sepaso', ic: 'eye' },
    { title: 'Juego · Duelo de Residentes (1 vs 1)', sub: 'Primero a 11 puntos contra el rival', href: '#/juegos?modo=duelo', ic: 'target' },
    { title: 'Juego · Imagen Misteriosa', sub: 'Descripción de estudio PACS y pistas progresivas', href: '#/juegos?modo=imagen', ic: 'cube' },
    { title: 'Liga CALOT · Ranking semanal', sub: 'Competencia entre Chantal, Areli y Daniela', href: '#/ranking', ic: 'trophy' },
    { title: 'HGR 72 · Mis pendientes', sub: 'Exámenes, sesiones y entregas', href: '#/hgr72?mod=personal', ic: 'hospital' },
  ];

  const renderList = (q = '') => {
    const k = q.toLowerCase().trim();
    const filtered = items.filter((it) => !k || `${it.title} ${it.sub}`.toLowerCase().includes(k)).slice(0, 12);
    return filtered.map((it, idx) => `
      <a class="cmdk-item ${idx === 0 ? 'on' : ''}" href="${it.href}" data-cmd-href="${it.href}">
        <span class="cmdk-ic">${icon(it.ic)}</span>
        <div><strong>${esc(it.title)}</strong><small class="mono muted">${esc(it.sub)}</small></div>
        <span class="mono">↵</span>
      </a>
    `).join('') || '<div class="empty small">Sin resultados para esta búsqueda.</div>';
  };

  m.innerHTML = `
    <div class="sheet glass cmdk-sheet" data-lenis-prevent role="dialog" aria-label="Paleta de comandos">
      <div class="cmdk-head">
        ${icon('search')}
        <input class="cmdk-input" placeholder="Busca un resumen, tema, modelo 3D, escala o juego…" aria-label="Buscar comando" autocomplete="off">
        <button class="chip" data-cmd-close>ESC</button>
      </div>
      <div class="cmdk-list">${renderList('')}</div>
    </div>`;
  const close = () => { m.classList.remove('open'); };
  const inp = m.querySelector('.cmdk-input');
  const listEl = m.querySelector('.cmdk-list');
  inp.addEventListener('input', () => { listEl.innerHTML = renderList(inp.value); });
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
    if (e.key === 'Enter') {
      const first = listEl.querySelector('[data-cmd-href]');
      if (first) { e.preventDefault(); close(); navigate(first.dataset.cmdHref); }
    }
  });
  m.onclick = (e) => {
    if (e.target === m || e.target.closest('[data-cmd-close]')) return close();
    const a = e.target.closest('[data-cmd-href]');
    if (a) { e.preventDefault(); close(); navigate(a.dataset.cmdHref); }
  };
  m.classList.add('open');
  setTimeout(() => inp.focus(), 40);
}

function shell() {
  if (!document.querySelector('.laser-line')) {
    const laser = document.createElement('div');
    laser.className = 'laser-line';
    laser.setAttribute('aria-hidden', 'true');
    document.body.append(laser);
  }
  document.querySelector('.hud').innerHTML = `
    <span class="hud-line top" aria-hidden="true"></span><span class="hud-line bottom" aria-hidden="true"></span><span class="hud-flare" aria-hidden="true"></span>
    <a class="hud-brand" href="#/inicio" aria-label="Inicio de CALOT-OS"><img class="hud-logo-img" src="assets/calot-logo.png?v=20261122i" alt="CALOT-OS"><div class="hud-brand-txt"><span class="wordmark"><b>ca</b>lot<em class="os-pill">OS</em></span><small><span class="rol-res">Cirugía · R2</span><span class="rol-ads">Adscrito · Cirugía</span></small></div></a>
    <nav class="hud-nav" aria-label="Secciones">${STUDY_NAV.map(hudItem).join('<i class="hud-sep" aria-hidden="true"></i>')}<i class="hud-guardia-sep" aria-hidden="true"></i>${hudGuardiaItem(GUARDIA_NAV)}<i class="hud-sep is-adscrito-only" aria-hidden="true"></i><a class="hud-item is-adscrito-only" href="#/adscrito" data-to="adscrito">${icon('eye', 'ic3d')}<span>Monitoreo</span></a></nav>
    <div class="hud-right">${ligaBtn()}${themeBtn()}${audioBtn()}${cmdkBtn()}${syncBtn()}${orbBtn()}</div>`;
  const tab = (to) => navLink(NAV.find((n) => n.to === to));
  document.querySelector('.tabbar').innerHTML = `${tab('inicio')}${tab('resumenes')}${orbBtn('orb-tab')}${tab('juegos')}
    <button class="nav-item more-btn" data-act="more" aria-label="Más secciones" aria-expanded="false">${icon('grid', 'ic3d')}<i class="sync-dot" data-s="off"></i></button>`;
  createNeuralField(document.getElementById('neural-bg'), { reduced: !S.enabled });
  const orbInstances = [...document.querySelectorAll('canvas.orb')].map((c) => createOrb(c, { reduced: !S.enabled }));
  window.addEventListener('resize', placeFlare);
  wireMagneticHud();
  // Bandeja de retroalimentación (testers <-> Mario); la adscrita usa Mensajes en su Panel docente.
  if (!isAdscrito()) import('./mensajes-ui.js?v=20261122i').then((m) => m.mountResidentMessages()).catch(() => {});
  // Monitor Black Ops de Examen R2 (pulso de exploración y bloqueo simultáneo cuando la Dra. Hernández lanza el examen)
  import('./fx/exam-lockdown.js?v=20261122i').then((m) => m.initExamLockdownMonitor()).catch(() => {});
  // Liga CALOT: cada tester publica sus métricas al abrir, al estudiar/jugar y cada 60 s; se marca la corona/líder en <body> y HUD.
  import('./ranking.js?v=20261122i').then((m) => {
    m.publishSoon(true);
    m.loadBoard().then(m.markCrown).catch(() => {});
    store.subscribe((_, origin) => { if (origin === 'local') m.publishSoon(); });
    setInterval(() => m.publishSoon(), 60 * 1000);
    document.addEventListener('visibilitychange', () => { if (document.hidden) m.publishSoon(true); });
  }).catch(() => {});

  const menu = document.getElementById('fab-menu');
  menu.innerHTML = `
    <div class="ai-companion-box">
      <div class="ai-menu-head mono"><span class="ai-dot"></span><span>CALOT·IA</span><span class="ai-status-pill" data-ai-status>CONECTANDO</span></div>
      <p class="ai-context-line" id="ai-context-line">Asistente quirúrgico interactivo conectado a OpenAI.</p>
      <div class="ai-ready-bar" id="ai-api-slot"></div>
    </div>` +
    FAB_ITEMS.map((f) => `<button data-href="${f.href}" style="--c:${f.c}">${icon(f.ic)}${f.label}</button>`).join('') +
    `<div class="ai-menu-sep" aria-hidden="true"></div><button class="is-guardia" data-href="#/hgr72">${icon('hospital')} Modo Guardia · HGR 72 (Guardias y Formatos)</button>`;
  const more = document.getElementById('more-sheet');
  const colVar = (to) => {
    const map = { aprende: 'cuaderno', resumenes: 'cuaderno', repasa: 'repaso', puem: 'repaso', recursos: 'atlas', stats: 'biblio' };
    return map[to] || to;
  };
  const isLightTheme = store.state.settings?.theme === 'light';
  more.innerHTML = `<div class="more-grid">${STUDY_NAV.filter((n) => !TAB_MAIN.includes(n.to)).map((n) => `<a href="#/${n.to}" data-to="${n.to}" class="more-item" style="--c:var(--${colVar(n.to)})">${icon(n.ic, 'ic3d')}<span>${n.label}</span></a>`).join('')}
    <a href="#/ranking" data-to="ranking" class="more-item" style="--c:var(--rk-gold)">${icon('trophy', 'ic3d')}<span>Liga CALOT</span></a>
    <button class="more-item" data-act="toggle-theme" style="--c:var(--crimson)"><span class="more-theme-glyph" data-theme-glyph>${isLightTheme ? '☾' : '☀'}</span><span data-theme-label>${isLightTheme ? 'Modo Noche' : 'Modo Día'}</span></button>
    <button class="more-item" data-act="music" style="--c:var(--crimson)">${icon('pulse', 'ic3d')}<span>Música IA</span></button>
    <button class="more-item" data-act="cmdk" style="--c:var(--juegos)">${icon('search', 'ic3d')}<span>Buscar ⌘K</span></button>
    <button class="more-item" data-act="settings" style="--c:var(--crimson-ink)">${icon('cloud', 'ic3d')}<span>Sincronizar</span></button>
    <a href="#/adscrito" data-to="adscrito" class="more-item is-adscrito-only" style="--c:var(--crimson)">${icon('eye', 'ic3d')}<span>Monitoreo</span></a></div>
    <div class="more-guardia-wrap"><span class="mono muted more-guardia-lbl">MODO GUARDIA HOSPITALARIO</span><a href="#/hgr72" data-to="hgr72" class="more-item is-guardia">${icon('hospital', 'ic3d')}<span>HGR 72 · Guardias, Rotaciones y Formatos</span></a></div>`;

  const soundPanel = document.getElementById('hud-sound-panel');
  const setSoundPanel = (open) => {
    if (!soundPanel) return;
    soundPanel.hidden = !open;
    soundPanel.classList.toggle('open', open);
    document.querySelector('[data-act="toggle-sound-panel"]')?.setAttribute('aria-expanded', String(open));
    if (open) playUiSfx('click');
  };

  const syncAudioConsoleUI = (st) => {
    const curAmb = AMBIENT_MODES.find((m) => m.id === st.amb) || AMBIENT_MODES[0];
    document.querySelectorAll('.audio-btn').forEach((b) => b.classList.toggle('is-playing', Boolean(st.musicOn)));
    document.querySelectorAll('[data-audio-amb-label]').forEach((el) => {
      el.textContent = st.muted || st.amb === 'off' ? 'Silencio' : curAmb.short;
    });
    document.querySelectorAll('#hud-sound-panel, #modal .settings').forEach((scope) => {
      const muteBtn = scope.querySelector('[data-audio-mute]');
      if (muteBtn) {
        muteBtn.classList.toggle('is-muted', Boolean(st.muted));
        muteBtn.setAttribute('aria-pressed', String(!st.muted));
        const lbl = muteBtn.querySelector('[data-audio-mute-lbl]');
        if (lbl) lbl.textContent = st.muted ? 'Silenciado' : 'Activo';
      }
      scope.querySelectorAll('[data-audio-amb]').forEach((btn) => {
        btn.classList.toggle('is-on', btn.dataset.audioAmb === st.amb && !st.muted);
      });
      scope.querySelectorAll('[data-audio-pack]').forEach((btn) => {
        btn.classList.toggle('is-on', btn.dataset.audioPack === st.pack);
      });
      const mVolInp = scope.querySelector('[data-audio-mvol]');
      if (mVolInp && document.activeElement !== mVolInp) mVolInp.value = String(st.musicVol);
      const mVolVal = scope.querySelector('[data-audio-mvol-val]');
      if (mVolVal) mVolVal.textContent = `${st.musicVol}%`;
      const fVolInp = scope.querySelector('[data-audio-fvol]');
      if (fVolInp && document.activeElement !== fVolInp) fVolInp.value = String(st.fxVol);
      const fVolVal = scope.querySelector('[data-audio-fvol-val]');
      if (fVolVal) fVolVal.textContent = `${st.fxVol}%`;
    });
  };
  onAudioChange(syncAudioConsoleUI);

  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    document.querySelectorAll('.fab').forEach((b) => b.setAttribute('aria-expanded', String(open)));
    orbInstances.forEach((o) => o.setOpen?.(open));
    if (open) playUiSfx('click');
    if (open && S.enabled) window.gsap.from(menu.children, { x: -12, opacity: 0, duration: 0.4, stagger: 0.04, ease: 'power3.out' });
  };
  const setMore = (open) => {
    more.classList.toggle('open', open);
    document.querySelector('.more-btn')?.setAttribute('aria-expanded', String(open));
    if (open && S.enabled) window.gsap.from(more.querySelectorAll('.more-item'), { y: 16, opacity: 0, duration: 0.45, stagger: 0.04, ease: 'back.out(2)' });
  };
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-boot-enter]')) {
      e.preventDefault();
      const targetHref = e.target.closest('[data-boot-enter]').getAttribute('href') || '#/inicio';
      sessionStorage.setItem('calot:booted', '1');
      runAiHackSequence(() => { navigate(targetHref); playRoleIntro(playIntro, !S.enabled); });
      return;
    }
    if (e.target.closest('[data-act="toggle-sound-panel"]')) {
      setOpen(false);
      setMore(false);
      return setSoundPanel(soundPanel ? soundPanel.hidden : false);
    }
    if (e.target.closest('[data-audio-mute]')) {
      const st = getAudioState();
      setMuted(!st.muted);
      playUiSfx('click');
      return;
    }
    const voiceBtn = e.target.closest('[data-voice-toggle]');
    if (voiceBtn) {
      const on = !isVoiceOn();
      setVoiceOn(on);
      document.querySelectorAll('[data-voice-toggle]').forEach((b) => {
        b.classList.toggle('is-muted', !on);
        b.setAttribute('aria-pressed', String(on));
        const lbl = b.querySelector('.sound-mute-lbl');
        if (lbl) lbl.textContent = on ? 'Activa' : 'Callada';
      });
      playUiSfx('click');
      if (on) speak('boot-2', { delay: 0.15 });
      return;
    }
    const ambBtn = e.target.closest('[data-audio-amb]');
    if (ambBtn) {
      setAmbient(ambBtn.dataset.audioAmb);
      playUiSfx('click');
      return;
    }
    const packBtn = e.target.closest('[data-audio-pack]');
    if (packBtn) {
      setSfxPack(packBtn.dataset.audioPack);
      return;
    }
    if (e.target.closest('[data-audio-test-boot]')) {
      playUiSfx('boot');
      return;
    }
    if (e.target.closest('.fab')) { setMore(false); setSoundPanel(false); return setOpen(!menu.classList.contains('open')); }
    if (e.target.closest('[data-act="more"]')) { setOpen(false); setSoundPanel(false); return setMore(!more.classList.contains('open')); }
    if (e.target.closest('[data-act="toggle-theme"]')) { setOpen(false); setMore(false); setSoundPanel(false); toggleTheme(); return; }
    if (e.target.closest('[data-act="settings"]')) { setOpen(false); setMore(false); setSoundPanel(false); playUiSfx('click'); return openSettings(); }
    if (e.target.closest('[data-act="cmdk"]')) { setOpen(false); setMore(false); setSoundPanel(false); playUiSfx('click'); return openCmdPalette(); }
    if (e.target.closest('[data-act="music"]')) {
      setOpen(false); setMore(false); setSoundPanel(false);
      const on = toggleMusic();
      toast(on ? 'Música ambiental activada' : 'Música ambiental en pausa');
      return;
    }
    const item = e.target.closest('#fab-menu [data-href]');
    if (item) { setOpen(false); navigate(item.dataset.href); return; }
    if (!e.target.closest('#fab-menu')) setOpen(false);
    if (!e.target.closest('#more-sheet') || e.target.closest('.more-item')) setMore(false);
    if (!e.target.closest('.hud-sound-wrap')) setSoundPanel(false);
  });
  document.addEventListener('input', (e) => {
    if (e.target.matches('[data-audio-mvol]')) { setMusicVol(Number(e.target.value)); return; }
    if (e.target.matches('[data-audio-fvol]')) { setFxVol(Number(e.target.value)); return; }
  });
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault(); setOpen(false); setMore(false); setSoundPanel(false); openCmdPalette();
    } else if (e.key === 'Escape') {
      setOpen(false); setMore(false); setSoundPanel(false);
    }
  });
  window.addEventListener('hashchange', () => setSoundPanel(false));
  window.addEventListener('nous:cmdk', () => openCmdPalette());

  onStatus((st) => document.querySelectorAll('.sync-dot').forEach((d) => { d.dataset.s = st; }));

  calotAi = initCalotAI({
    getContext: () => ({
      section: currentNavKey || 'inicio',
      title: document.querySelector('#view h1')?.textContent?.trim() || document.title,
      route: location.hash || '#/inicio',
      snippet: (document.getElementById('view')?.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 480),
    }),
    onBusyChange: (isBusy) => orbInstances.forEach((o) => o.setThinking?.(isBusy)),
    onStatusChange: (st) => {
      const badge = menu.querySelector('[data-ai-status]');
      const line = document.getElementById('ai-context-line');
      if (badge && st.badge) badge.textContent = st.badge;
      if (line && st.hint && currentNavKey === 'inicio') line.textContent = st.hint;
      if (window.CALOT_AI) window.CALOT_AI.configured = Boolean(st.configured);
    },
    onOpenDrawer: () => { setOpen(false); setMore(false); setSoundPanel(false); },
  });
  window.CALOT_AI = { ...calotAi, configured: true };
}

const STATUS_TEXT = {
  off: 'Este dispositivo no está sincronizado.',
  ok: 'Sincronizado.',
  pending: 'Cambios pendientes de subir…',
  syncing: 'Sincronizando…',
  error: 'No se pudo sincronizar. Revisa tu conexión.',
  unconfigured: 'Falta activar la base de datos en Vercel: proyecto → Storage → Upstash for Redis → Connect.',
};

function applyTheme(t) {
  const theme = t === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
    if (bg) meta.setAttribute('content', bg);
  }
  const glyph = theme === 'light' ? '☾' : '☀';
  const label = theme === 'light' ? 'Modo Noche' : 'Modo Día';
  document.querySelectorAll('[data-theme-glyph]').forEach((el) => { el.textContent = glyph; });
  document.querySelectorAll('[data-theme-tip], [data-theme-label]').forEach((el) => { el.textContent = label; });
}

function toggleTheme() {
  const cur = store.state.settings?.theme === 'light' ? 'light' : 'dark';
  const next = cur === 'dark' ? 'light' : 'dark';
  store.setSettings({ theme: next });
  applyTheme(next);
  playUiSfx('click');
  toast(next === 'light' ? '☀ Modo Día (Papel clínico 4b)' : '☾ Modo Noche (Cuaderno oscuro 3b)');
}

function openSettings() {
  const m = document.getElementById('modal');
  const draw = () => {
    const code = getCode();
    const curTheme = store.state.settings?.theme === 'light' ? 'light' : 'dark';
    m.innerHTML = `
    <div class="sheet glass settings" data-lenis-prevent role="document">
      <h3>${icon('cloud')} Sincronizar y apariencia</h3>
      <div class="theme-switch-row">
        <span class="mono">TEMA DEL SISTEMA</span>
        <div class="seg seg-metal" role="group" aria-label="Tema claro u oscuro">
          <button type="button" class="${curTheme === 'dark' ? 'on' : ''}" data-s-act="theme-dark">☾ Noche OLED (#000000)</button>
          <button type="button" class="${curTheme === 'light' ? 'on' : ''}" data-s-act="theme-light">☀ Día (Papel)</button>
        </div>
      </div>
      <div class="settings-audio-box">${renderAudioConsoleBody(getAudioState(), 'settings')}</div>
      <p class="muted">Tus notas, tareas, bitácora y repaso se guardan en tu base de datos de Vercel. Usa el mismo código en tu iPhone y en tu Mac.</p>
      <p class="sync-state" data-s="${esc(document.querySelector('.sync-dot')?.dataset.s || 'off')}"><i class="sync-dot"></i><span></span></p>
      ${code ? `
        <label class="field">Tu código de sincronización
          <div class="code-row"><input class="input mono-code" readonly value="${esc(code)}" aria-label="Código"><button class="btn btn-metal btn-sm" data-s-act="copy">${icon('copy')} Copiar</button></div>
        </label>
        <p class="note">Guárdalo como una contraseña: quien lo tenga puede ver y cambiar tus datos.</p>
        <div class="actions"><button class="btn btn-sm btn-ghost danger" data-s-act="unlink">Desvincular este dispositivo</button><button class="btn btn-sm btn-glow" data-s-act="now">Sincronizar ahora</button></div>
      ` : `
        <div class="sync-choices">
          <button class="lg btn-glow" data-s-act="create">${icon('plus')} Crear código (primer dispositivo)</button>
          <form class="code-row" data-s-act="link-form"><input class="input mono-code" name="code" placeholder="CALOT-XXXX-XXXX-XXXX-XXXX-XXXX" aria-label="Código existente" autocomplete="off"><button class="btn btn-sm btn-glow">${icon('link')} Usar código</button></form>
        </div>
        <p class="note">En el segundo dispositivo pega el código que creaste en el primero. Si este dispositivo no tiene cambios propios, tomará los datos de la nube.</p>
      `}
      <div class="actions"><button class="btn btn-sm btn-metal" data-s-act="close">Cerrar</button></div>
    </div>`;
    const stEl = m.querySelector('.sync-state');
    const paint = (st) => { stEl.dataset.s = st; stEl.querySelector('span').textContent = STATUS_TEXT[st] || st; };
    paint(stEl.dataset.s);
    off?.(); off = onStatus(paint);
  };
  let off = null;
  const close = () => { m.classList.remove('open'); off?.(); document.removeEventListener('keydown', onKey); };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', onKey);
  m.onclick = async (e) => {
    if (e.target === m) return close();
    const b = e.target.closest('[data-s-act]'); if (!b || b.tagName === 'FORM') return;
    const a = b.dataset.sAct;
    if (a === 'close') close();
    if (a === 'theme-dark') { store.setSettings({ theme: 'dark' }); applyTheme('dark'); draw(); }
    if (a === 'theme-light') { store.setSettings({ theme: 'light' }); applyTheme('light'); draw(); }
    if (a === 'create') { createCode(); draw(); }
    if (a === 'copy') { try { await navigator.clipboard.writeText(getCode()); toast('Código copiado'); } catch { m.querySelector('.mono-code').select(); } }
    if (a === 'unlink') { unlink(); toast('Dispositivo desvinculado'); draw(); }
    if (a === 'now') syncNow();
  };
  m.onsubmit = async (e) => {
    e.preventDefault();
    try { await linkCode(new FormData(e.target).get('code')); toast('Dispositivo vinculado'); draw(); } catch (err) { toast(err.message || 'No se pudo vincular'); draw(); }
  };
  draw();
  m.classList.add('open');
}

function navigate(href) {
  if (location.hash === href) route(); else location.hash = href;
}

function parse() {
  const h = location.hash.replace(/^#\/?/, '');
  const [rawSegment, qs] = h.split('?');
  const cleanSeg = (rawSegment || '').trim().toLowerCase();
  const params = new URLSearchParams(qs || '');

  let path = cleanSeg;
  let redirectHash = null;

  if (Object.hasOwn(REDIRECT_MAP, cleanSeg)) {
    const rule = REDIRECT_MAP[cleanSeg];
    path = rule.target;
    const extras = rule.extra(params) || {};
    for (const [k, v] of Object.entries(extras)) {
      if (!params.has(k) && v) params.set(k, v);
    }
    const qStr = params.toString();
    redirectHash = `#/${path}${qStr ? `?${qStr}` : ''}`;
  } else if (cleanSeg && !isView(cleanSeg)) {
    // Unknown/legacy hash never lands on an empty page
    path = 'inicio';
    const qStr = params.toString();
    redirectHash = `#/inicio${qStr ? `?${qStr}` : ''}`;
  }

  for (const [k, v] of params.entries()) {
    if (!(k in params)) params[k] = v;
  }
  return { path: isView(path) ? path : '', params, redirectHash };
}

const PATH_TO_NAV = {
  inicio: 'inicio',
  resumenes: 'resumenes',
  biblioteca: 'resumenes',
  aprende: 'resumenes',
  repasa: 'repasa',
  puem: 'puem',
  recursos: 'recursos',
  juegos: 'juegos',
  stats: 'stats',
  ranking: 'ranking',
  hgr72: 'hgr72',
  pendientes: 'inicio',
  adscrito: 'adscrito',
};

// Clave de navegación → clave de tiempo que lee Progreso (stats.js): Resúmenes y Aprende suman en «aprende»; «puem» tiene su propia fila.
const NAV_TO_STATS = { resumenes: 'aprende' };

let current = null;
let currentNavKey = 'inicio';
let remoteRenderPending = false; // un merge remoto quedó aplazado porque se estaba escribiendo
let calotAi = null;
let routeSeq = 0;

function loadLazyView(path, opts, seq) {
  document.body.classList.remove('is-landing');
  if (current === null) root.innerHTML = '<div class="view-root"><p class="muted mono" style="padding:32px">Cargando…</p></div>';
  Promise.all([LAZY_VIEWS[path](), STORE_DATA_VIEWS.has(path) ? loadStoreData() : null])
    .then(([mod]) => { loadedViews[path] = mod; if (seq === routeSeq) route(opts); })
    .catch(() => { if (seq === routeSeq) toast('No se pudo cargar la sección. Revisa tu conexión.'); });
}

function route(opts = {}) {
  // Con el examen activo no se dibuja ninguna otra vista detrás del bloqueo (salvo el panel docente)
  if (document.body.classList.contains('is-exam-locked') && !(isAdscrito() && parse().path === 'adscrito')) return;
  remoteRenderPending = false; // cualquier redibujo deja la vista al día
  const { path, params, redirectHash } = parse();
  if (path === 'adscrito' && !isAdscrito() && !isOwner()) { navigate('#/inicio'); return; }
  if (redirectHash && location.hash !== redirectHash) {
    try { history.replaceState(null, '', redirectHash); } catch { location.hash = redirectHash; }
  }
  const seq = ++routeSeq;
  if (LAZY_VIEWS[path] && !loadedViews[path]) return loadLazyView(path, opts, seq);
  const prevView = current;
  const prevNavKey = currentNavKey;
  const view = VIEWS[path] || loadedViews[path];
  const sameView = current === view;
  const y = window.scrollY;
  current = view;

  document.body.dataset.section = view.section;
  document.body.classList.toggle('is-landing', view === portada);
  const activeNavKey = PATH_TO_NAV[path] || path;
  currentNavKey = activeNavKey || 'inicio';
  document.body.dataset.guardia = activeNavKey === 'hgr72' ? '1' : '0';

  document.querySelectorAll('[data-to]').forEach((a) => {
    if (a.dataset.to === activeNavKey) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  placeFlare();
  const nav = NAV.find((n) => n.to === activeNavKey);
  document.title = view === portada ? 'CALOT-OS | Donde aprender medicina se vuelve tu mayor obsesión' : `${nav ? nav.label : (path === 'ranking' ? 'Liga CALOT' : path)} · CALOT-OS`;
  const aiLine = document.getElementById('ai-context-line');
  if (aiLine) {
    const AI_HINTS = {
      inicio: 'Vista Inicio · Listo para asistirte en estudio o guardia.',
      resumenes: 'Resúmenes PUEM · Explora por año (R1–R4) o por tema quirúrgico.',
      biblioteca: 'Biblioteca · Resúmenes detallados, breves, perlas y casos clínicos por año.',
      repasa: 'Repasa SM-2 · Tarjetas activas y perlas rápidas.',
      puem: 'Banco PUEM · Preguntas y respuestas por año de residencia (R1–R4).',
      juegos: 'Juegos Qx · Refuerza criterio quirúrgico bajo presión.',
      recursos: 'Recursos 3D y Escalas · Anatomía interactiva y calculadoras.',
      stats: 'Progreso · Métricas reales de estudio y dominio.',
      ranking: 'Liga CALOT · Competencia semanal entre Chantal, Areli y Daniela.',
      hgr72: 'Modo Guardia · Calendario, rotaciones R2/R3, guardias y formatos.',
      adscrito: 'Panel docente · Seguimiento del grupo de residentes (vista privada).',
    };
    aiLine.textContent = AI_HINTS[activeNavKey] || 'Asistente quirúrgico interactivo conectado.';
  }
  calotAi?.refreshChips?.();

  S.teardown();
  const el = document.createElement('div');
  el.className = 'view-root';
  el.innerHTML = view.render(params);
  root.replaceChildren(el);
  const rerender = (o = {}) => route({ ...o, rerender: true });
  view.mount(el, rerender, params);

  if (opts.keepScroll && sameView) {
    if (S.lenis) S.lenis.scrollTo(y, { immediate: true, force: true }); else window.scrollTo(0, y);
    S.refresh();
  } else {
    S.toTop();
    const isPortalEntry = !opts.rerender && PORTAL_MODULES.has(activeNavKey) && prevView !== null && prevNavKey !== activeNavKey;
    // Entrada directa a un modo de Juegos (?modo=) → cinemática propia del modo
    const subScene = activeNavKey === 'juegos' && params.modo && hasSubPortal(`juegos:${params.modo}`) ? `juegos:${params.modo}` : null;
    const playSub = subScene && !opts.rerender && (isPortalEntry || subScene !== lastSubScene);
    if (!opts.rerender) lastSubScene = subScene;
    if (playSub && playSubPortal(subScene, { rootEl: el, reduced: !S.enabled })) {
      if (window.gsap) window.gsap.killTweensOf(root);
      root.style.opacity = '1';
    } else if (isPortalEntry) {
      if (window.gsap) window.gsap.killTweensOf(root);
      root.style.opacity = '1';
      playModulePortal(activeNavKey, { rootEl: el, reduced: !S.enabled });
    } else if (!opts.rerender && PORTAL_MODULES.has(activeNavKey)) {
      playModulePortal(null);
      playUiSfx('nav');
      if (S.enabled && window.gsap) {
        const laser = document.querySelector('.laser-line');
        if (laser) {
          window.gsap.fromTo(laser, { scaleX: 0, opacity: 1, transformOrigin: 'left center' }, {
            scaleX: 1, opacity: 0, duration: 0.55, ease: 'expo.out',
          });
        }
        window.gsap.fromTo(root, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
        playWingEntrance(el, activeNavKey, { delay: 0.05, reduced: false });
      }
    } else {
      playModulePortal(null);
      if (!opts.rerender) playUiSfx('nav');
      if (S.enabled && !opts.rerender && window.gsap) {
        const laser = document.querySelector('.laser-line');
        if (laser) {
          window.gsap.fromTo(laser, { scaleX: 0, opacity: 1, transformOrigin: 'left center' }, {
            scaleX: 1, opacity: 0, duration: 0.55, ease: 'expo.out',
          });
        }
        window.gsap.fromTo(root, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out' });
      }
    }
  }
}

// Replay manual de secuencia cinematográfica desde botón discreto en cada ala
root.addEventListener('click', (e) => {
  const replayBtn = e.target.closest('[data-replay-portal]');
  if (!replayBtn) return;
  const modKey = replayBtn.dataset.replayPortal;
  if (!PORTAL_MODULES.has(modKey)) return;
  playModulePortal(modKey, { rootEl: root.querySelector('.view-root') || root, reduced: false, force: true });
});

// Automatic Active-Time Tracker (credits active section every 5 seconds)
setInterval(() => {
  if (!document.hidden && current !== portada) {
    const navKey = currentNavKey || 'inicio';
    store.tickActiveTime(Object.hasOwn(NAV_TO_STATS, navKey) ? NAV_TO_STATS[navKey] : navKey, 5);
  }
}, 5000);

// Spotlight suave en tarjetas + micro-tilt estable (±1.8°) solo en tarjetas compactas sin interferir con clics
if (window.matchMedia('(pointer: fine)').matches) {
  const SPOT = '.card, .task, .nb-item, .quick-card, .wday, .block, .day-pill, .case-row, .atlas-card, .blitz-opt, .rv-stat, .rs-hub-card, .arcade-card, .vault-tile, .tel-dock-btn';
  const TILT = '.quick-card, .atlas-card, .rv-stat, .day-pill, .rs-hub-card';
  const CTRL = 'button, a, input, select, textarea, label, [data-act]';
  let activeTilt = null;
  let lastEv = null;
  let rafId = 0;

  const resetTilt = (el) => {
    if (!el) return;
    el.style.removeProperty('--rx');
    el.style.removeProperty('--ry');
    delete el.dataset.tilting;
  };

  const updatePointerFX = () => {
    rafId = 0;
    const e = lastEv;
    if (!e) return;

    const spotEl = e.target?.closest?.(SPOT);
    if (spotEl) {
      let spot = spotEl.querySelector(':scope > .spot');
      if (!spot) {
        spot = document.createElement('span');
        spot.className = 'spot';
        spot.setAttribute('aria-hidden', 'true');
        spotEl.append(spot);
      }
      const r = spotEl.getBoundingClientRect();
      spotEl.style.setProperty('--mx', `${e.clientX - r.left}px`);
      spotEl.style.setProperty('--my', `${e.clientY - r.top}px`);
    }

    const tiltEl = e.target?.closest?.(TILT);
    if (activeTilt && activeTilt !== tiltEl) {
      resetTilt(activeTilt);
      activeTilt = null;
    }
    if (!tiltEl || e.buttons > 0) {
      if (activeTilt) { resetTilt(activeTilt); activeTilt = null; }
      return;
    }

    const ctrl = e.target?.closest?.(CTRL);
    if ((ctrl && ctrl !== tiltEl) || tiltEl.querySelector('input, select, textarea, form')) {
      resetTilt(tiltEl);
      activeTilt = null;
      return;
    }

    const r = tiltEl.getBoundingClientRect();
    if (r.width > 560 || r.height > 420 || r.width < 40 || r.height < 40) {
      resetTilt(tiltEl);
      activeTilt = null;
      return;
    }

    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    const edge = 8;
    if (px < edge || py < edge || px > r.width - edge || py > r.height - edge) {
      resetTilt(tiltEl);
      activeTilt = null;
      return;
    }

    const nx = Math.max(0, Math.min(1, px / r.width));
    const ny = Math.max(0, Math.min(1, py / r.height));
    const rx = (ny - 0.5) * -3.6; // max ±1.8deg
    const ry = (nx - 0.5) * 3.6;
    activeTilt = tiltEl;
    tiltEl.dataset.tilting = '1';
    tiltEl.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    tiltEl.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
  };

  document.addEventListener('pointermove', (e) => {
    lastEv = e;
    if (!rafId) rafId = requestAnimationFrame(updatePointerFX);
  }, { passive: true });
  document.addEventListener('pointerdown', () => { resetTilt(activeTilt); activeTilt = null; }, { passive: true });
  document.addEventListener('pointerleave', () => { resetTilt(activeTilt); activeTilt = null; }, { passive: true });
  window.addEventListener('blur', () => { resetTilt(activeTilt); activeTilt = null; });
  window.addEventListener('scroll', () => { resetTilt(activeTilt); activeTilt = null; }, { passive: true });
}

applyTheme(store.state.settings?.theme);
store.subscribe((s) => applyTheme(s?.settings?.theme));
S.init();
shell();
window.addEventListener('hashchange', () => route());
route();
if (!document.body.classList.contains('is-landing')) {
  if (document.getElementById('boot-gate') || !sessionStorage.getItem('calot:booted')) prefetchIntro();
  mountInitialBootGate(() => {
    const target = isAdscrito() ? '#/adscrito' : '#/inicio';
    navigate(target);
    playRoleIntro(playIntro, !S.enabled);
    import('./ranking.js?v=20261122i').then((m) => m.publishSoon(true)).catch(() => {});
  });
  // Tras cambiar de perfil la página se recarga: la intro de ese perfil corre aquí.
  if (sessionStorage.getItem(INTRO_PENDING)) {
    sessionStorage.removeItem(INTRO_PENDING);
    playRoleIntro(playIntro, !S.enabled);
  }
}
// Un merge remoto no debe redibujar la vista mientras se escribe: se aplaza mientras haya foco en un campo de texto o texto sin enviar en la vista,
// y se aplica al soltar el foco (si no quedó texto escrito) o con la siguiente navegación/redibujo.
const isEditingText = () => {
  const el = document.activeElement;
  if (!el || el === document.body) return false;
  if (el.isContentEditable) return true;
  if (el.tagName === 'TEXTAREA') return true;
  return el.tagName === 'INPUT' && !['button', 'submit', 'reset', 'checkbox', 'radio', 'range', 'color', 'file', 'image'].includes(el.type);
};
const hasTypedText = () => [...(root.querySelectorAll('textarea, [contenteditable=""], [contenteditable="true"], input:not([type]), input[type="text"], input[type="search"]'))]
  .some((el) => String(el.value ?? el.textContent ?? '').trim() !== '');
const modalIsOpen = () => document.getElementById('modal').classList.contains('open');
// Al soltar el foco se espera a que termine un clic en curso (p. ej. «Guardar»): redibujar entre pointerdown y click lo perdería.
let pointerDown = false;
['pointerdown', 'pointerup', 'pointercancel'].forEach((ev) => document.addEventListener(ev, () => { pointerDown = ev === 'pointerdown'; }, true));
const flushRemoteRender = () => {
  if (!remoteRenderPending) return;
  if (pointerDown) { setTimeout(flushRemoteRender, 400); return; }
  if (isEditingText() || hasTypedText() || modalIsOpen()) return;
  route({ keepScroll: true, rerender: true });
};
document.addEventListener('focusout', () => { if (remoteRenderPending) setTimeout(flushRemoteRender, 400); }, true);
initSync(() => {
  applyTheme(store.state.settings?.theme);
  if (modalIsOpen()) return;
  if (isEditingText() || hasTypedText()) { remoteRenderPending = true; return; }
  route({ keepScroll: true, rerender: true });
});
document.fonts?.ready.then(() => { S.refresh(); placeFlare(); });
