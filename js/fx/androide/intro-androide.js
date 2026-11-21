import { CUE, TOTAL, REDUCED_TOTAL, BEEPS } from './android-timeline.js?v=20261121q';
import { mountUi } from './android-ui.js?v=20261121q';

export { CUE, TOTAL, REDUCED_TOTAL, BEEPS };

const DEFAULT_ASSETS = new URL('./assets/', import.meta.url);
const DEFAULT_VENDOR = new URL('./vendor/three/', import.meta.url);
const MODELS = { lo: 'models/android-bust-lo.glb', lod: 'models/android-bust-lod.glb' };
const HDR = 'hdri/polyhaven-wooden_studio_09-1k.hdr';

const threeCache = new Map();
const loadThree = (vendorBase) => {
  const url = new URL('three.module.min.js', vendorBase).href;
  if (!threeCache.has(url)) threeCache.set(url, import(url).catch((err) => { threeCache.delete(url); throw err; }));
  return threeCache.get(url);
};
let stageModule = null;
const loadStage = () => (stageModule ||= import('./android-stage.js?v=20261121q').catch((err) => { stageModule = null; throw err; }));

let webglOk = null;
export function canRunAndroidIntro() {
  if (webglOk !== null) return webglOk;
  try {
    if (typeof WebGL2RenderingContext === 'undefined') return (webglOk = false);
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2');
    webglOk = Boolean(gl);
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
  } catch {
    webglOk = false;
  }
  return webglOk;
}

export function pickQuality() {
  const nav = navigator;
  const mobile = Boolean(window.matchMedia?.('(max-width: 720px), (pointer: coarse)').matches);
  const cores = nav.hardwareConcurrency || 4;
  const mem = nav.deviceMemory || 8;
  if (mobile || mem <= 4 || cores <= 4) return 1;
  if (cores >= 10 && mem >= 8) return 3;
  return 2;
}

const resolveQuality = (q) => (q === 'auto' || q === undefined || q === null ? pickQuality() : Math.max(0, Math.min(3, Math.round(Number(q)) || 0)));

export function prefetchAndroidIntro({ assetBase = DEFAULT_ASSETS, vendorBase = DEFAULT_VENDOR, quality = 'auto' } = {}) {
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 900));
  idle(() => {
    const model = resolveQuality(quality) <= 1 ? MODELS.lo : MODELS.lod;
    loadThree(vendorBase).catch(() => {});
    loadStage().catch(() => {});
    import(new URL('addons/loaders/GLTFLoader.js', vendorBase).href).catch(() => {});
    import(new URL('addons/loaders/RGBELoader.js', vendorBase).href).catch(() => {});
    fetch(new URL(model, assetBase)).catch(() => {});
    fetch(new URL(HDR, assetBase)).catch(() => {});
  });
}

export async function createAndroidIntro({
  container = document.body,
  doctor = 'Doctor',
  getAudioTime = null,
  reducedMotion,
  quality = 'auto',
  adaptive = true,
  onSkip,
  onEnd,
  assetBase = DEFAULT_ASSETS,
  vendorBase = DEFAULT_VENDOR,
  logoUrl = '',
  muteControl = null,
  timeline = null,
  palette = null,
  ui: uiOpts = null,
  overlay = null,
  onFrame = null,
  stageFactory = null,
  stageOptions = null,
} = {}) {
  if (!canRunAndroidIntro()) throw new Error('WebGL2 no disponible');
  const assets = new URL(String(assetBase), document.baseURI);
  const vendor = new URL(String(vendorBase), document.baseURI);
  const reduced = reducedMotion ?? Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  const total = reduced ? (timeline?.REDUCED_TOTAL ?? REDUCED_TOTAL) : (timeline?.TOTAL ?? TOTAL);
  const startLevel = resolveQuality(quality);

  const THREE = await loadThree(vendor);
  const createStage = typeof stageFactory === 'function' ? stageFactory : (await loadStage()).createStage;
  const customCues = Array.isArray(timeline?.cues)
    ? timeline.cues
    : (typeof timeline?.cueList === 'function' ? timeline.cueList({ doctor, reduced, logoUrl }) : null);
  const ui = mountUi({
    container,
    doctor,
    reduced,
    logoUrl,
    muteControl: Boolean(muteControl),
    cues: customCues,
    vitals: uiOpts?.vitals ?? true,
    overlay,
    variant: uiOpts?.variant || '',
    bars: uiOpts?.bars || 'cinema',
  });
  const prevOverflow = document.body.style.overflow;
  let stage;
  try {
    stage = await createStage({
      THREE,
      canvas: ui.canvas,
      assetBase: assets,
      vendorBase: vendor,
      level: startLevel,
      reduced,
      sample: timeline?.sample,
      palette,
      ...(stageOptions || {}),
    });
  } catch (err) {
    ui.dispose();
    throw err;
  }

  let raf = 0;
  let started = false;
  let finished = false;
  let disposed = false;
  let startWall = 0;
  let lastA = null;
  let lastAWall = 0;
  let level = stage.level;
  let lastDrop = 0;
  let lastNow = 0;
  const dts = [];
  const timers = [];
  let resolveDone;
  const done = new Promise((r) => { resolveDone = r; });

  const size = () => {
    stage.resize(ui.root.clientWidth || window.innerWidth, ui.root.clientHeight || window.innerHeight);
    ui.setBars();
  };
  try {
    size();
    stage.update(0);
    stage.render();
  } catch (err) {
    try { stage.dispose(); } catch {}
    ui.dispose();
    throw err;
  }

  const clock = (now) => {
    const own = (now - startWall) / 1000;
    // window.__ciT congela un instante (solo para revisar cuadros), igual que la intro anterior
    if (typeof window.__ciT === 'number') return window.__ciT;
    if (reduced || typeof getAudioTime !== 'function') return own;
    let a;
    try { a = getAudioTime(); } catch { a = NaN; }
    if (!Number.isFinite(a) || a < 0) return own;
    if (a !== lastA) { lastA = a; lastAWall = now; return a; }
    const stall = (now - lastAWall) / 1000;
    return stall > 1 ? Math.max(own, lastA + stall) : lastA + stall;
  };

  const adapt = (now) => {
    if (!adaptive || level === 0) return;
    if (lastNow) {
      const dt = now - lastNow;
      if (dt < 250) dts.push(dt);
      if (dts.length > 50) dts.shift();
    }
    lastNow = now;
    if (now - startWall < 1500 || now - lastDrop < 1600 || dts.length < 10) return;
    const avg = dts.reduce((a, b) => a + b, 0) / dts.length;
    if (avg > 1000 / 40 && (dts.length >= 40 || avg > 80)) {
      level -= 1;
      lastDrop = now;
      dts.length = 0;
      stage.setLevel(level);
      size();
    }
  };

  const frameAt = (t) => {
    ui.update(t);
    stage.update(t);
    stage.render();
    try { onFrame?.(t, { reduced }); } catch (err) { console.warn('[intro-androide]', err); }
  };

  const finish = (reason) => {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(raf);
    try { if (reason === 'skip') onSkip?.(); else if (reason === 'end') onEnd?.(); } catch (err) { console.warn('[intro-androide]', err); }
    ui.fadeOut();
    timers.push(setTimeout(() => dispose(reason), reason === 'end' ? 300 : 800));
  };

  const dispose = (reason = 'disposed') => {
    if (disposed) return;
    disposed = true;
    finished = true;
    cancelAnimationFrame(raf);
    timers.forEach(clearTimeout);
    window.removeEventListener('resize', size);
    document.removeEventListener('keydown', onKey, true);
    ui.root.removeEventListener('click', onClick);
    ui.canvas.removeEventListener('webglcontextlost', onLost);
    try { stage.dispose(); } catch (err) { console.warn('[intro-androide]', err); }
    ui.dispose();
    document.body.style.overflow = prevOverflow;
    resolveDone({ reason });
  };

  const onKey = (e) => {
    const skipKey = e.key === 'Escape' || e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter';
    if (!skipKey || !started) return;
    if (e.key !== 'Escape' && e.target?.closest?.('[data-ci-mute]')) return;
    e.preventDefault();
    e.stopPropagation();
    finish('skip');
  };
  const onClick = (e) => {
    if (e.target.closest('[data-ci-mute]')) {
      const next = muteControl?.toggle?.();
      ui.setMuteLabel(typeof next === 'boolean' ? next : Boolean(muteControl?.isMuted?.()));
      return;
    }
    if (started) finish('skip');
  };
  const onLost = (e) => { e.preventDefault(); finish('error'); };

  window.addEventListener('resize', size);
  document.addEventListener('keydown', onKey, true);
  ui.root.addEventListener('click', onClick);
  ui.canvas.addEventListener('webglcontextlost', onLost);
  if (muteControl) ui.setMuteLabel(Boolean(muteControl.isMuted?.()));
  ui.update(0);
  try { onFrame?.(0, { reduced }); } catch {}

  const loop = (now) => {
    raf = requestAnimationFrame(loop);
    try {
      const t = clock(now);
      if (t >= total || (typeof window.__ciT !== 'number' && now - startWall > (total + 4) * 1000)) { finish('end'); return; }
      adapt(now);
      frameAt(t);
    } catch (err) {
      console.warn('[intro-androide]', err);
      finish('error');
    }
  };

  return {
    mode: reduced ? 'reduced' : 'full',
    duration: total,
    done,
    get quality() { return level; },
    get info() { return stage.info; },
    start() {
      if (started || disposed) return done;
      started = true;
      document.body.style.overflow = 'hidden';
      startWall = performance.now();
      raf = requestAnimationFrame(loop);
      return done;
    },
    skip() { if (!finished) finish('skip'); },
    dispose: () => dispose('disposed'),
    renderAt(t) { frameAt(t); },
  };
}

export async function playAndroidIntro(opts = {}) {
  const intro = await createAndroidIntro(opts);
  intro.start();
  return intro.done;
}
