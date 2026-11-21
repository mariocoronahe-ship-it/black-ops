// Competencia entre testers (Chantal, Areli, Daniela): métricas, índice, insignias y premio semanal.
// Cada perfil publica sus métricas en /api/ranking y lee las de las demás. Sin API (local), se arma con
// los almacenes de cada perfil guardados en este mismo navegador (calot:v3:<id>).
import { store, todayISO } from './store.js?v=20261121t';
import { PROFILES, TESTERS, perfilId, isOwner, wipeTestersLocalData } from './perfil.js?v=20261121t';

const ENDPOINT = 'api/ranking';
const WEEKS = 8;
const PREMIO_KEY = 'calot:ranking:premio';
const SNAP_KEY = 'calot:ranking:snap:v2';
export const DEFAULT_PREMIO = 'Corona dorada en su perfil toda la semana y su nombre en el Salón de la Fama de CALOT-OS.';

const getLS = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const setLS = (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignore */ } };
const readJSON = (k) => { try { return JSON.parse(getLS(k) || 'null'); } catch { return null; } };

/** Lunes (ISO) de la semana de la fecha dada. */
export function weekStartISO(d = new Date()) {
  const x = new Date(d); x.setHours(12, 0, 0, 0);
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return todayISO(x);
}
function addDaysISO(iso, n) { const d = new Date(`${iso}T12:00:00`); d.setDate(d.getDate() + n); return todayISO(d); }
export const weekKeys = (n = WEEKS) => Array.from({ length: n }, (_, i) => addDaysISO(weekStartISO(), -7 * i));

const EMPTY = () => ({ pts: 0, ok: 0, n: 0, streak: 0, studySec: 0, cards: 0, sheets: 0 });

/** Métricas por semana (últimas 8) y totales desde un estado del store. */
export function metricsFromState(s) {
  const keys = weekKeys();
  const weeks = Object.fromEntries(keys.map((k) => [k, EMPTY()]));
  const total = EMPTY();
  const wkOf = (iso) => (iso ? weekStartISO(new Date(`${iso}T12:00:00`)) : null);
  const add = (iso, f, v) => {
    if (!v) return;
    if (f === 'streak') total.streak = Math.max(total.streak, v); else total[f] += v;
    const w = weeks[wkOf(iso)];
    if (w) { if (f === 'streak') w.streak = Math.max(w.streak, v); else w[f] += v; }
  };
  for (const [iso, d] of Object.entries(s?.arena?.days || {})) {
    add(iso, 'pts', d?.pts || 0); add(iso, 'ok', d?.ok || 0); add(iso, 'n', d?.n || 0); add(iso, 'streak', d?.streak || 0);
  }
  total.streak = Math.max(total.streak, s?.arena?.bestStreak || 0);
  for (const [iso, d] of Object.entries(s?.telemetry?.secByDay || {})) {
    add(iso, 'studySec', (d?.aprendeSec || 0) + (d?.resumenesSec || 0) + (d?.repasaSec || 0) + (d?.recursosSec || 0) + (d?.puemSec || 0));
  }
  for (const r of s?.reviewLog || []) add(r.date, 'cards', r.count || 0);
  for (const [tid, t] of Object.entries(s?.seenTopics || {})) {
    const n = Object.values(t?.subblocks || {}).filter(Boolean).length + (t?.seen ? 1 : 0);
    if (!n) continue;
    const ts = t.updated || t.seenAt || 0;
    add(ts ? todayISO(new Date(ts)) : null, 'sheets', n); // sin fecha: solo cuenta en el total
  }
  const secBySection = {
    inicio: Math.round(Number(s?.telemetry?.secBySection?.inicio) || 0),
    aprende: Math.round(Number(s?.telemetry?.secBySection?.aprende) || 0),
    repasa: Math.round(Number(s?.telemetry?.secBySection?.repasa) || 0),
    recursos: Math.round(Number(s?.telemetry?.secBySection?.recursos) || 0),
    juegos: Math.round(Number(s?.telemetry?.secBySection?.juegos) || 0),
    stats: Math.round(Number(s?.telemetry?.secBySection?.stats) || 0),
    hgr72: Math.round(Number(s?.telemetry?.secBySection?.hgr72) || 0),
  };
  const topicsRead = Object.entries(s?.seenTopics || {}).map(([id, t]) => ({
    id,
    sheets: Object.values(t?.subblocks || {}).filter(Boolean).length,
    seen: Boolean(t?.seen),
    ts: Number(t?.updated || t?.seenAt || 0),
  })).filter((t) => t.sheets > 0 || t.seen);
  const allGames = Array.isArray(s?.telemetry?.gameSessions) ? s.telemetry.gameSessions : [];
  const recentGames = allGames.slice(-10).reverse().map((g) => ({
    modeLabel: String(g?.modeLabel || g?.mode || 'Simulador'),
    topic: String(g?.topic || ''),
    score: Number(g?.score) || 0,
    maxScore: Math.max(1, Number(g?.maxScore) || 1),
    ts: Number(g?.ts || 0),
  }));
  const activeDaySet = new Set([
    ...Object.keys(s?.telemetry?.secByDay || {}),
    ...Object.keys(s?.arena?.days || {}),
    ...(s?.reviewLog || []).map((r) => r?.date).filter(Boolean),
  ]);
  const lastGameTs = allGames.reduce((m, g) => Math.max(m, Number(g?.ts) || 0), 0);
  const lastTopicTs = topicsRead.reduce((m, t) => Math.max(m, t.ts || 0), 0);
  const lastSeen = Math.max(Number(s?.arena?.updated) || 0, lastGameTs, lastTopicTs);
  const monitor = {
    lastSeen,
    activeDays: activeDaySet.size,
    gameCount: allGames.length,
    secBySection,
    topicsRead,
    recentGames,
  };
  return { weeks, total, monitor };
}

/** Índice CALOT: un solo número para ordenar el ranking. */
export function indice(m = EMPTY()) {
  return Math.round((m.pts || 0) / 25 + (m.ok || 0) * 4 + (m.streak || 0) * 6 + (m.studySec || 0) / 60 * 1.5 + (m.cards || 0) * 2 + (m.sheets || 0) * 12);
}
export const accuracy = (m) => (m?.n ? Math.round((m.ok / m.n) * 100) : 0);

export const BADGES = [
  { id: 'arcade', label: 'Leyenda del Arcade', ic: 'gamepad', hint: 'Más puntos de juego', val: (m) => m.pts, fmt: (v) => `${v.toLocaleString('es-MX')} pts` },
  { id: 'precision', label: 'Francotiradora', ic: 'target', hint: 'Mejor precisión (mín. 10 respuestas)', val: (m) => (m.n >= 10 ? accuracy(m) : 0), fmt: (v) => `${v}%` },
  { id: 'racha', label: 'Racha imparable', ic: 'flame', hint: 'Racha más larga de aciertos', val: (m) => m.streak, fmt: (v) => `${v} seguidas` },
  { id: 'maraton', label: 'Maratonista', ic: 'clock', hint: 'Más tiempo de estudio', val: (m) => Math.round(m.studySec / 60), fmt: (v) => `${v} min` },
  { id: 'repaso', label: 'Maestra del repaso', ic: 'card', hint: 'Más tarjetas repasadas', val: (m) => m.cards, fmt: (v) => `${v} tarjetas` },
  { id: 'lectora', label: 'Devoradora de hojas', ic: 'book', hint: 'Más hojas leídas', val: (m) => m.sheets, fmt: (v) => `${v} hojas` },
];

export const TITLES = [
  { min: 0, t: 'Interna de guardia' },
  { min: 40, t: 'Residente aplicada' },
  { min: 120, t: 'Cirujana en ascenso' },
  { min: 300, t: 'Jefa de residentes' },
  { min: 600, t: 'Adscrita honoraria' },
  { min: 1000, t: 'Leyenda del HGR 72' },
];
export const titleFor = (idx) => [...TITLES].reverse().find((x) => idx >= x.min).t;

/** Snapshot del perfil actual (lo que se publica). */
export function mySnapshot() {
  const { weeks, total, monitor } = metricsFromState(store.state);
  const nowTs = Date.now();
  return { id: perfilId(), weeks, total, monitor: { ...monitor, lastSeen: nowTs }, updated: nowTs };
}

function latestStateTs(raw) {
  let ts = raw?.arena?.updated || 0;
  for (const t of Object.values(raw?.seenTopics || {})) ts = Math.max(ts, t?.updated || t?.seenAt || 0);
  for (const r of raw?.reviewLog || []) ts = Math.max(ts, r?.updated || 0);
  const lastGame = raw?.telemetry?.gameSessions?.[0]?.ts || 0;
  return Math.max(ts, lastGame);
}

function localSnapshotOf(id) {
  const booted = (() => { try { return sessionStorage.getItem('calot:booted') === '1'; } catch { return false; } })();
  if (id === perfilId() && booted) return mySnapshot();
  const raw = readJSON(`calot:v3:${id}`);
  if (!raw) return null;
  const { weeks, total, monitor } = metricsFromState(raw);
  const savedSnap = readJSON(`${SNAP_KEY}:${id}`);
  const up = Math.max(latestStateTs(raw), savedSnap?.updated || 0);
  if (!up && indice(total) === 0 && !(monitor?.gameCount) && !(monitor?.topicsRead?.length)) return null;
  return { id, weeks, total, monitor, updated: up };
}

let lastMode = 'local';
export const rankingMode = () => lastMode;

async function api(method, body) {
  if (typeof fetch !== 'function') throw Object.assign(new Error('no_fetch'), { status: 0 });
  const r = await fetch(ENDPOINT, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  });
  const ct = r.headers.get('content-type') || '';
  if (!r.ok || !ct.includes('json')) throw Object.assign(new Error(`ranking ${r.status}`), { status: r.status });
  return r.json();
}

let pubTimer = null;
let lastPub = 0;
/** Publica mis métricas (solo testers con sesión autenticada activa); guarda en local al instante y sube al servidor con debounce. */
export function publishSoon(force = false) {
  if (!TESTERS.includes(perfilId())) return;
  try {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('calot:booted') !== '1') return;
  } catch {}
  const immediateSnap = mySnapshot();
  setLS(`${SNAP_KEY}:${immediateSnap.id}`, JSON.stringify(immediateSnap));
  clearTimeout(pubTimer);
  const wait = force ? 0 : Math.max(3000, 15000 - (Date.now() - lastPub));
  pubTimer = setTimeout(async () => {
    lastPub = Date.now();
    const snap = mySnapshot();
    setLS(`${SNAP_KEY}:${snap.id}`, JSON.stringify(snap));
    try {
      await api('POST', { id: snap.id, code: PROFILES[snap.id].code, weeks: snap.weeks, total: snap.total, monitor: snap.monitor });
      lastMode = 'api';
    } catch { lastMode = 'local'; }
  }, wait);
}

/** Reinicia las estadísticas de las 3 testers (local y servidor). Solo Mario. */
export async function resetTestersStats() {
  if (!isOwner()) return false;
  wipeTestersLocalData();
  try {
    await api('POST', { id: 'mario', code: PROFILES.mario.code, reset: true });
    lastMode = 'api';
  } catch { lastMode = 'local'; }
  return true;
}

export async function savePremio(text) {
  if (!isOwner()) return null;
  const doc = { text: String(text || '').trim().slice(0, 240) || DEFAULT_PREMIO, updated: Date.now() };
  setLS(PREMIO_KEY, JSON.stringify(doc));
  try {
    await api('POST', { id: 'mario', code: PROFILES.mario.code, premio: doc.text });
    lastMode = 'api';
  } catch { lastMode = 'local'; }
  return doc;
}

/**
 * Tablero completo: jugadoras con métricas, índice semanal, insignias, campeona de la semana pasada y Salón de la Fama.
 * mode: 'api' si respondió el servidor; 'local' si se armó con los datos de este navegador.
 */
export async function loadBoard() {
  let remote = null;
  try { remote = await api('GET'); lastMode = 'api'; } catch { lastMode = 'local'; }
  const premio = (remote?.premio?.text && remote.premio) || readJSON(PREMIO_KEY) || { text: DEFAULT_PREMIO, updated: 0 };
  if (remote?.premio?.text) setLS(PREMIO_KEY, JSON.stringify(remote.premio));
  const keys = weekKeys();
  const [cur, prev] = keys;
  const players = TESTERS.map((id) => {
    const fromApi = remote?.players?.[id];
    const local = localSnapshotOf(id) || readJSON(`${SNAP_KEY}:${id}`);
    let snap;
    if (id === perfilId()) {
      snap = (fromApi && indice(local?.total) === 0 && indice(fromApi.total) > 0) ? fromApi : local;
    } else {
      snap = (fromApi && (!local || (fromApi.updated || 0) >= (local.updated || 0))) ? fromApi : local;
    }
    const has = !!snap && (snap.updated > 0 || indice(snap.total) > 0 || (snap.monitor?.gameCount || 0) > 0 || (snap.monitor?.topicsRead?.length || 0) > 0);
    snap ||= { id, weeks: {}, total: EMPTY(), monitor: {}, updated: 0 };
    const week = { ...EMPTY(), ...(snap.weeks?.[cur] || {}) };
    return {
      id, name: PROFILES[id].name, has, me: id === perfilId(), updated: snap.updated || 0,
      week, total: { ...EMPTY(), ...(snap.total || {}) }, weeks: snap.weeks || {},
      monitor: snap.monitor || {},
      idx: indice(week), idxTotal: indice(snap.total || EMPTY()),
    };
  });
  players.sort((a, b) => b.idx - a.idx || b.idxTotal - a.idxTotal || a.name.localeCompare(b.name));
  players.forEach((p, i) => { p.rank = i + 1; p.title = titleFor(p.idxTotal); p.badges = []; });
  for (const b of BADGES) {
    const best = Math.max(...players.map((p) => b.val(p.week) || 0));
    if (best > 0) players.filter((p) => (b.val(p.week) || 0) === best).forEach((p) => p.badges.push({ ...b, value: b.fmt(best) }));
  }
  const winnerOf = (wk) => {
    const scored = players.map((p) => ({ p, v: indice({ ...EMPTY(), ...(p.weeks?.[wk] || {}) }) })).filter((x) => x.v > 0);
    if (!scored.length) return null;
    scored.sort((a, b) => b.v - a.v);
    return { id: scored[0].p.id, name: scored[0].p.name, v: scored[0].v, week: wk };
  };
  const champion = winnerOf(prev);
  const fame = keys.slice(1).map(winnerOf).filter(Boolean);
  players.forEach((p) => {
    p.crown = champion?.id === p.id;
    p.fameCount = fame.filter((f) => f.id === p.id).length;
  });
  const leader = players[0]?.idx > 0 ? players[0] : null;
  return { players, leader, champion, fame, premio, mode: lastMode, week: cur, prevWeek: prev, owner: isOwner(), me: perfilId() };
}

/** Marca <body>, HUD superior e Inicio según si la tester actual es campeona vigente o va primera esta semana. */
export function markCrown(board) {
  if (typeof document === 'undefined' || !document.body) return;
  const mine = board?.players?.find((p) => p.me);
  const isCrown = Boolean(mine?.crown);
  const isLeader = Boolean(mine && board.leader?.id === mine.id);
  document.body.dataset.rankingCrown = isCrown ? '1' : '0';
  document.body.dataset.rankingLeader = isLeader ? '1' : '0';
  document.body.dataset.rankingRank = mine ? String(mine.rank) : '0';

  const hudTag = document.querySelector('[data-rk-hud-tag]');
  if (hudTag) {
    if (isCrown) {
      hudTag.textContent = isLeader ? '♛ 1ª' : '♛';
      hudTag.hidden = false;
    } else if (isLeader) {
      hudTag.textContent = '★ 1ª';
      hudTag.hidden = false;
    } else {
      hudTag.textContent = '';
      hudTag.hidden = true;
    }
  }
  const hudTip = document.querySelector('[data-rk-hud-tip]');
  if (hudTip) {
    if (isCrown) hudTip.textContent = `Campeona vigente · ${mine.title}`;
    else if (isLeader) hudTip.textContent = `1ª en Liga CALOT · ${mine.title}`;
    else if (mine) hudTip.textContent = `Liga CALOT · #${mine.rank} · ${mine.title}`;
    else hudTip.textContent = board?.leader ? `Liga CALOT · Líder: ${board.leader.name}` : 'Liga CALOT';
  }
  const heroPill = document.querySelector('[data-rk-hero-pill]');
  if (heroPill) {
    heroPill.classList.toggle('is-crown', isCrown);
    heroPill.classList.toggle('is-leader', !isCrown && isLeader);
    if (isCrown) {
      heroPill.textContent = `♛ Campeona vigente · ${mine.title}${isLeader ? ' · 1ª esta semana' : ''}`;
      heroPill.hidden = false;
    } else if (isLeader) {
      heroPill.textContent = `★ 1ª en la Liga CALOT · ${mine.title} · ${mine.idx} pts`;
      heroPill.hidden = false;
    } else if (mine && (mine.idx > 0 || mine.idxTotal > 0)) {
      heroPill.textContent = `#${mine.rank} Liga CALOT · ${mine.title}`;
      heroPill.hidden = false;
    } else {
      heroPill.textContent = '';
      heroPill.hidden = true;
    }
  }
}

export const fmtWeek = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
