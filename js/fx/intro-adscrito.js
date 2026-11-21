// Entrada «El guardián» para la adscrita (Dra. Hernández):
// «Núcleo de obsidiana»: fragmentos de cristal negro que se ensamblan alrededor de un núcleo de luz roja,
// con el guion y las voces propios del panel docente.
// Conserva la entrada 2D original (`playAdscritoIntro2D`) como respaldo si no hay WebGL2 o falla la carga.

import { getEngine, isPortalAudioMuted, setPortalAudioMuted, addDuckTarget, removeDuckTarget } from './portal-audio.js?v=20261121t';
import { speak, stopVoice, prefetchVoice } from './voice.js?v=20261121t';
import { unread, refresh as refreshMsgs } from '../mensajes.js?v=20261121t';
import { canRunAndroidIntro, createAndroidIntro } from './androide/intro-androide.js?v=20261121t';
import { cueListAlly, TOTAL, REDUCED_TOTAL, CUE_ALLY } from './androide/android-timeline-aliado.js?v=20261121t';

const LOGO = new URL('../../assets/calot-hero.png?v=20261121t', import.meta.url).href;
const ANDROID_ASSETS = new URL('../../assets/intro/', import.meta.url);
const VENDOR_THREE = new URL('../../vendor/three/', import.meta.url);
const loadNucleo = () => Promise.all([import('./forge/nucleo-stage.js?v=20261121t'), import('./forge/nucleo-timeline.js?v=20261121t')]);
const STYLE_2D_ID = 'ci-ads-style';
const STYLE_OV_ID = 'ci-ally-ov-style';

const CSS_2D = `
.ci-ads{position:fixed;inset:0;z-index:400;background:#030406;color:#eef3f8;overflow:hidden;display:grid;place-items:center;font-family:var(--font-sans,"Manrope",system-ui,sans-serif);transition:opacity .7s ease}
.ci-ads.is-out{opacity:0;pointer-events:none}
.ci-ads::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 46%,rgba(70,140,255,.16),transparent 55%),radial-gradient(circle at 50% 50%,rgba(255,40,64,.10),transparent 70%);opacity:0;animation:ciAdsFade 1.2s ease 1s forwards}
.ci-ads-grid{position:absolute;inset:-10%;background-image:linear-gradient(rgba(120,180,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(120,180,255,.06) 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse 60% 55% at 50% 50%,#000 20%,transparent 75%);-webkit-mask-image:radial-gradient(ellipse 60% 55% at 50% 50%,#000 20%,transparent 75%);opacity:0;animation:ciAdsFade 1.4s ease 1.2s forwards,ciAdsDrift 12s linear 1.2s infinite}
.ci-ads-line{position:absolute;left:0;right:0;top:50%;height:80px;transform:translateY(-50%);overflow:visible}
.ci-ads-line path{fill:none;stroke:#7fd0ff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 6px rgba(110,200,255,.9));stroke-dasharray:2400;stroke-dashoffset:2400;animation:ciAdsDraw 1.3s cubic-bezier(.6,.05,.3,1) .15s forwards,ciAdsLineOut .5s ease 1.55s forwards}
.ci-ads-lid{position:absolute;left:50%;top:50%;width:min(300px,56vw);aspect-ratio:1;transform:translate(-50%,-50%);display:grid;place-items:center}
.ci-ads-eye{width:100%;height:100%;border-radius:50%;object-fit:cover;clip-path:ellipse(50% 0% at 50% 50%);animation:ciAdsOpen 1s cubic-bezier(.2,.8,.2,1) 1.45s forwards,ciAdsPulse 2.4s ease-in-out 2.6s infinite;box-shadow:0 0 80px -10px rgba(255,40,64,.7)}
.ci-ads-ring{position:absolute;inset:-12%;border-radius:50%;border:1px solid rgba(120,190,255,.35);opacity:0;animation:ciAdsRing 1s ease 1.9s forwards,ciAdsSpin 20s linear 1.9s infinite;border-top-color:rgba(140,210,255,.95)}
.ci-ads-ring.is-b{inset:-24%;border-style:dashed;border-color:rgba(255,70,90,.28);animation:ciAdsRing 1s ease 2.1s forwards,ciAdsSpin 34s linear 2.1s infinite reverse}
.ci-ads-scan{position:absolute;inset:0;border-radius:50%;overflow:hidden;pointer-events:none}
.ci-ads-scan::after{content:'';position:absolute;left:0;right:0;height:22%;top:-25%;background:linear-gradient(180deg,transparent,rgba(120,200,255,.35),transparent);animation:ciAdsScan 1.6s ease-in-out 2.2s 2}
.ci-ads-cards{position:absolute;inset:0;pointer-events:none}
.ci-ads-card{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:12px;display:grid;place-items:center;font:700 13px/1 var(--font-mono,ui-monospace,monospace);color:#fff;background:rgba(14,20,30,.85);border:1px solid var(--c);box-shadow:0 0 16px -4px var(--c);opacity:0;transform:translate(var(--x0),var(--y0)) scale(.4) rotate(var(--r));animation:ciAdsCard .9s cubic-bezier(.2,.9,.25,1) var(--d) forwards}
.ci-ads-card::after{content:'';position:absolute;right:-3px;top:-3px;width:9px;height:9px;border-radius:50%;background:var(--c);box-shadow:0 0 8px var(--c)}
.ci-ads-text{position:absolute;left:0;right:0;bottom:clamp(40px,13vh,120px);text-align:center;padding:0 16px}
.ci-ads-kicker{margin:0;font:600 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.32em;text-transform:uppercase;color:#8fd3ff;opacity:0;animation:ciAdsUp .6s ease 3.1s forwards}
.ci-ads-hello{margin:12px 0 0;font:italic 400 clamp(26px,4.4vw,46px)/1.1 var(--font-serif,"Fraunces",Georgia,serif);color:#f6f1f2;opacity:0;animation:ciAdsUp .7s ease 3.35s forwards;text-shadow:0 0 30px rgba(120,190,255,.35)}
.ci-ads-hello em{color:#ff5a6e;font-style:italic}
.ci-ads-stats{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 22px;margin:18px 0 0;font:500 12.5px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.06em;color:rgba(225,235,245,.75)}
.ci-ads-stats span{opacity:0;animation:ciAdsUp .5s ease forwards}
.ci-ads-stats b{color:#fff;font-size:15px;margin-right:6px}
.ci-ads-stats .is-red b{color:#ff4d62}.ci-ads-stats .is-blue b{color:#8fd3ff}
.ci-ads-skip{position:absolute;right:18px;bottom:18px;z-index:3;font:600 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.1em;color:rgba(220,230,240,.6);background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:99px;padding:9px 14px;cursor:pointer}
.ci-ads-skip:hover{color:#fff;border-color:rgba(140,210,255,.5)}
.ci-ads.is-exit .ci-ads-lid{animation:ciAdsZoom .8s cubic-bezier(.7,0,.3,1) forwards}
.ci-ads.is-exit .ci-ads-cards,.ci-ads.is-exit .ci-ads-text{transition:opacity .4s ease;opacity:0}
.ci-ads-flash{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(200,230,255,.9),rgba(120,180,255,.2) 40%,transparent 70%);opacity:0;pointer-events:none}
.ci-ads.is-exit .ci-ads-flash{animation:ciAdsFlash .8s ease .25s forwards}
@keyframes ciAdsFade{to{opacity:1}}
@keyframes ciAdsDrift{to{transform:translate(44px,44px)}}
@keyframes ciAdsDraw{to{stroke-dashoffset:0}}
@keyframes ciAdsLineOut{to{opacity:0;transform:scaleY(.2)}}
@keyframes ciAdsOpen{0%{clip-path:ellipse(50% 0% at 50% 50%)}60%{clip-path:ellipse(50% 30% at 50% 50%)}100%{clip-path:ellipse(70% 70% at 50% 50%)}}
@keyframes ciAdsPulse{0%,100%{filter:brightness(1)}50%{filter:brightness(1.18) saturate(1.15)}}
@keyframes ciAdsRing{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}
@keyframes ciAdsSpin{to{rotate:360deg}}
@keyframes ciAdsScan{0%{top:-25%}100%{top:105%}}
@keyframes ciAdsCard{0%{opacity:0;transform:translate(var(--x0),var(--y0)) scale(.4) rotate(var(--r))}70%{opacity:1}100%{opacity:1;transform:translate(var(--x),var(--y)) scale(1) rotate(0)}}
@keyframes ciAdsUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes ciAdsZoom{to{transform:translate(-50%,-50%) scale(5);opacity:0}}
@keyframes ciAdsFlash{0%{opacity:0}35%{opacity:1}100%{opacity:0}}
@media (max-width:640px){.ci-ads-card{width:36px;height:36px;margin:-18px 0 0 -18px;font-size:11px;border-radius:9px}.ci-ads-stats{font-size:11px}}
@media (max-height:620px){.ci-ads-lid{width:min(200px,40vh)}}
`;

const CSS_OV = `
.ci-ally-ov{position:absolute;inset:0;z-index:2;pointer-events:none;overflow:hidden}
.ci-ally-line{position:absolute;left:0;right:0;top:50%;height:88px;transform:translateY(-50%);transform-origin:50% 50%;overflow:visible}
.ci-ally-line path{fill:none;stroke:rgba(120,230,170,.95);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 8px rgba(120,230,170,.7))}
`;

function greetingByHour(date = new Date()) {
  const h = date.getHours();
  if (h >= 6 && h < 12) return { label: 'Buenos días', clip: 'ads-saludo-dia' };
  if (h >= 12 && h < 19) return { label: 'Buenas tardes', clip: 'ads-saludo-tarde' };
  return { label: 'Buenas noches', clip: 'ads-saludo-noche' };
}

async function summary() {
  const out = { residentes: 11, alertas: null, mensajes: 0 };
  try {
    await refreshMsgs();
    out.mensajes = unread('adscrito');
  } catch {}
  try {
    const [{ loadStoreData }, mod] = await Promise.all([
      import('../store.js?v=20261121t'),
      import('../views/adscrito.js?v=20261121t'),
    ]);
    await loadStoreData();
    const all = mod.cohort();
    out.residentes = all.length;
    out.alertas = all.filter((r) => r.st.key !== 'ok').length;
    out.cards = all.map((r) => ({
      ini: r.name.replace(/^Dra?\.\s*/, '').split(' ').map((x) => x[0]).slice(0, 2).join(''),
      st: r.st.key,
    }));
  } catch {}
  return out;
}

// ---------- Partitura aliada (Web Audio API con paso-bajo <= 2000 Hz, sin agudos ásperos) ----------

function startAllyScore({ reduced = false } = {}) {
  let muted = isPortalAudioMuted();
  let stopped = false;
  const timers = [];
  const sources = [];
  let master = null;
  let duckGain = null;
  let lp = null;
  let verbSend = null;
  let ctx = null;
  let startedAt = 0;

  const eng = getEngine();
  if (!eng) {
    return {
      stop() { stopped = true; },
      isMuted: () => muted,
      setMuted(m) { muted = Boolean(m); setPortalAudioMuted(muted); },
      toggle() { this.setMuted(!muted); return muted; },
      getTime: () => NaN,
    };
  }

  ctx = eng.ctx;
  const out = eng.dry || ctx.destination;
  const t0 = ctx.currentTime + 0.04;
  startedAt = t0;

  master = ctx.createGain();
  master.gain.setValueAtTime(muted ? 0.0001 : 1, t0);

  duckGain = ctx.createGain();
  duckGain.gain.setValueAtTime(1, t0);
  addDuckTarget(duckGain);

  lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 2000;
  lp.Q.value = 0.7;

  master.connect(duckGain);
  duckGain.connect(lp);
  lp.connect(out);

  if (eng.verb) {
    verbSend = ctx.createGain();
    verbSend.gain.value = 0.36;
    lp.connect(verbSend);
    verbSend.connect(eng.verb);
  }

  const track = (n) => { sources.push(n); return n; };

  const softTone = (at, freq, dur, vol, type = 'sine', endFreq = null) => {
    const o = track(ctx.createOscillator());
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0 + at);
    if (endFreq && endFreq !== freq) {
      o.frequency.exponentialRampToValueAtTime(Math.max(24, endFreq), t0 + at + dur * 0.9);
    }
    g.gain.setValueAtTime(0.0001, t0 + at);
    g.gain.linearRampToValueAtTime(vol, t0 + at + Math.min(0.08, dur * 0.25));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
    o.connect(g);
    g.connect(master);
    o.start(t0 + at);
    o.stop(t0 + at + dur + 0.06);
  };

  if (reduced) {
    // Versión corta (~5 s): pad cálido y campana suave
    softTone(0.2, 110, 4.2, 0.09, 'triangle');
    softTone(0.5, 660, 2.0, 0.045, 'sine');
    [130.81, 196.0, 246.94, 329.63].forEach((f, i) => softTone(1.2 + i * 0.08, f, 3.2, 0.032, 'sine'));
  } else {
    // 1. Pad grave cálido (triángulo/seno 55–110 Hz) desde 0.5 s hasta 18.1 s
    const padGain = ctx.createGain();
    padGain.gain.setValueAtTime(0.0001, t0 + 0.5);
    padGain.gain.linearRampToValueAtTime(0.11, t0 + 2.2);
    padGain.gain.setValueAtTime(0.11, t0 + 16.2);
    padGain.gain.exponentialRampToValueAtTime(0.0001, t0 + 18.3);
    const padLp = ctx.createBiquadFilter();
    padLp.type = 'lowpass';
    padLp.frequency.setValueAtTime(220, t0 + 0.5);
    padLp.frequency.linearRampToValueAtTime(420, t0 + 10.2);
    padLp.frequency.linearRampToValueAtTime(260, t0 + 18.1);
    padLp.connect(padGain);
    padGain.connect(master);

    [
      { f: 55, type: 'sine', det: 0 },
      { f: 110, type: 'triangle', det: -4 },
      { f: 110, type: 'sine', det: 4 },
      { f: 164.81, type: 'sine', det: 0 },
    ].forEach((v) => {
      const o = track(ctx.createOscillator());
      o.type = v.type;
      o.frequency.setValueAtTime(v.f, t0 + 0.5);
      if (v.det) o.detune.setValueAtTime(v.det, t0 + 0.5);
      o.connect(padLp);
      o.start(t0 + 0.5);
      o.stop(t0 + 18.4);
    });

    // 2. Latido suave a 60 lpm (1 cada 1.0 s) hasta los 15.5 s
    for (let sec = 0.4; sec <= 15.4; sec += 1.0) {
      softTone(sec, 62, 0.22, 0.14, 'sine', 34);
      softTone(sec + 0.18, 52, 0.2, 0.09, 'sine', 30);
    }

    // 3. Campana suave (seno 660 Hz, decaimiento 2 s) cuando se encienden los ojos (2.5 s)
    softTone(2.5, 660, 2.0, 0.055, 'sine');
    softTone(2.52, 330, 2.1, 0.04, 'sine');

    // Pulso armónico cálido muy tenue al aparecer hologramas (5.2 s) y al iniciar escaneo (10.2 s)
    softTone(5.2, 220, 1.8, 0.038, 'triangle');
    softTone(10.2, 293.66, 1.6, 0.036, 'sine');

    // 4. Acorde mayor-7 abierto en 16.0 s (C3, G3, B3, E4, G4)
    [
      [16.0, 130.81, 0.055],
      [16.08, 196.0, 0.045],
      [16.16, 246.94, 0.042],
      [16.24, 329.63, 0.04],
      [16.34, 392.0, 0.032],
    ].forEach(([at, f, v]) => softTone(at, f, 2.3, v, 'sine'));
  }

  return {
    isMuted: () => muted,
    setMuted(m) {
      muted = Boolean(m);
      setPortalAudioMuted(muted);
      try {
        if (master && ctx && ctx.state !== 'closed') {
          master.gain.setTargetAtTime(muted ? 0.0001 : 1, ctx.currentTime, 0.035);
        }
      } catch {}
    },
    toggle() {
      this.setMuted(!muted);
      if (muted) stopVoice();
      return muted;
    },
    getTime() {
      if (stopped || !ctx || ctx.state !== 'running') return NaN;
      return ctx.currentTime - startedAt;
    },
    stop() {
      if (stopped) return;
      stopped = true;
      timers.forEach(clearTimeout);
      timers.length = 0;
      removeDuckTarget(duckGain);
      try {
        if (master && ctx && ctx.state !== 'closed') {
          master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.025);
        }
      } catch {}
      setTimeout(() => {
        sources.forEach((n) => {
          try { n.stop?.(); } catch {}
          try { n.disconnect?.(); } catch {}
        });
        sources.length = 0;
        try {
          master?.disconnect();
          duckGain?.disconnect();
          lp?.disconnect();
          verbSend?.disconnect();
        } catch {}
      }, 90);
    },
  };
}

// ---------- Overlay DOM: línea de ECG que se dibuja y se contrae al centro (0–2.1 s) ----------

function buildAllyOverlay() {
  if (!document.getElementById(STYLE_OV_ID)) {
    const st = document.createElement('style');
    st.id = STYLE_OV_ID;
    st.textContent = CSS_OV;
    document.head.append(st);
  }
  const el = document.createElement('div');
  el.className = 'ci-ally-ov';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <svg class="ci-ally-line" viewBox="0 0 1200 88" preserveAspectRatio="none">
      <path d="M0 44 H280 L300 44 L312 24 L326 64 L342 10 L358 58 L372 44 H760 L780 44 L792 24 L806 64 L822 10 L838 58 L852 44 H1200"/>
    </svg>`;
  const lineSvg = el.querySelector('.ci-ally-line');
  const linePath = el.querySelector('.ci-ally-line path');
  const pathLen = 1520;
  linePath.style.strokeDasharray = String(pathLen);
  linePath.style.strokeDashoffset = String(pathLen);

  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  const update = (t, { reduced = false } = {}) => {
    if (reduced || t > 2.2) {
      lineSvg.style.opacity = '0';
    } else {
      // Se dibuja, se aplana y se contrae a un punto en el centro, justo antes de que se enciendan los ojos
      const draw = clamp01((t - 0.1) / 1.4);
      const squash = clamp01((t - 1.5) / 0.55);
      const k = squash * squash * (3 - 2 * squash);
      linePath.style.strokeDashoffset = String(pathLen * (1 - draw));
      lineSvg.style.transform = `translateY(-50%) scale(${(1 - k * 0.995).toFixed(4)}, ${(1 - k * 0.97).toFixed(3)})`;
      lineSvg.style.opacity = String(1 - clamp01((t - 1.95) / 0.2));
    }
  };

  return { el, update };
}

// ---------- Respaldo 2D original ----------

function tones2D(reduced) {
  try {
    if (reduced || isPortalAudioMuted()) return;
    const eng = getEngine();
    if (!eng) return;
    const { ctx, dry } = eng;
    const out = dry || ctx.destination;
    const t0 = ctx.currentTime + 0.05;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200; lp.connect(out);
    const note = (at, f, dur, vol, type = 'sine') => {
      const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.setValueAtTime(0, t0 + at);
      g.gain.linearRampToValueAtTime(vol, t0 + at + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
      o.connect(g); g.connect(lp); o.start(t0 + at); o.stop(t0 + at + dur + 0.05);
    };
    note(0.2, 660, 0.12, 0.07); note(1.25, 660, 0.12, 0.07);
    note(1.5, 110, 1.6, 0.14, 'triangle');
    [[1.55, 329.6], [1.75, 392], [1.95, 493.9], [2.15, 587.3]].forEach(([at, f]) => note(at, f, 2.2, 0.045));
    note(3.35, 784, 0.9, 0.03);
  } catch {}
}

export function playAdscritoIntro2D({ reduced = false, onDone, statsPromise = null } = {}) {
  if (!document.getElementById(STYLE_2D_ID)) {
    const st = document.createElement('style'); st.id = STYLE_2D_ID; st.textContent = CSS_2D; document.head.append(st);
  }
  const root = document.createElement('div');
  root.className = 'ci-ads';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-label', 'Entrada al panel docente');
  root.innerHTML = `
    <div class="ci-ads-grid" aria-hidden="true"></div>
    <svg class="ci-ads-line" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 H470 L500 40 L515 18 L532 66 L552 4 L572 58 L588 40 H1200"/></svg>
    <div class="ci-ads-lid" aria-hidden="true">
      <span class="ci-ads-ring"></span><span class="ci-ads-ring is-b"></span>
      <img class="ci-ads-eye" src="${LOGO}" alt="">
      <span class="ci-ads-scan"></span>
    </div>
    <div class="ci-ads-cards" aria-hidden="true"></div>
    <div class="ci-ads-text">
      <p class="ci-ads-kicker">Panel docente · Cirugía General</p>
      <h2 class="ci-ads-hello">Bienvenida, <em>Dra. Hernández</em></h2>
      <p class="ci-ads-stats" data-stats></p>
    </div>
    <div class="ci-ads-flash" aria-hidden="true"></div>
    <button type="button" class="ci-ads-skip">Saltar · Esc</button>`;
  document.body.append(root);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  let done = false;
  const timers = [];
  const finish = () => {
    if (done) return;
    done = true;
    timers.forEach(clearTimeout);
    document.removeEventListener('keydown', onKey, true);
    root.classList.add('is-exit');
    setTimeout(() => root.classList.add('is-out'), reduced ? 0 : 450);
    setTimeout(() => { root.remove(); document.body.style.overflow = prevOverflow; onDone?.(); }, reduced ? 500 : 1200);
  };
  const onKey = (e) => {
    if (['Escape', ' ', 'Enter', 'Spacebar'].includes(e.key)) { e.preventDefault(); e.stopPropagation(); finish(); }
  };
  document.addEventListener('keydown', onKey, true);
  root.addEventListener('click', finish);

  if (reduced) {
    root.querySelectorAll('*').forEach((el) => { el.style.animation = 'none'; });
    root.querySelector('.ci-ads-line').style.display = 'none';
    root.querySelector('.ci-ads-eye').style.clipPath = 'none';
    root.querySelectorAll('.ci-ads-kicker,.ci-ads-hello').forEach((el) => { el.style.opacity = '1'; });
    timers.push(setTimeout(finish, 1800));
    return;
  }

  tones2D(reduced);

  (statsPromise || summary()).then((s) => {
    if (done) return;
    const cards = s.cards || Array.from({ length: 11 }, (_, i) => ({ ini: 'R' + ((i % 4) + 1), st: 'ok' }));
    const color = { ok: '#3ccf8e', atencion: '#f0b54a', riesgo: '#ff4d62' };
    const wrap = root.querySelector('.ci-ads-cards');
    const R = Math.min(window.innerWidth * 0.36, window.innerHeight * 0.3, 300);
    wrap.innerHTML = cards.map((c, i) => {
      const a = (i / cards.length) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(a) * R; const y = Math.sin(a) * R * 0.74 - 48;
      return `<span class="ci-ads-card" style="--c:${color[c.st] || color.ok};--x:${x.toFixed(0)}px;--y:${y.toFixed(0)}px;--x0:${(x * 2.6).toFixed(0)}px;--y0:${(y * 2.6).toFixed(0)}px;--r:${(i % 2 ? 1 : -1) * 40}deg;--d:${(2.2 + i * 0.07).toFixed(2)}s">${c.ini}</span>`;
    }).join('');
    const stats = [
      [`<b>${s.residentes}</b>residentes`, ''],
      s.alertas != null ? [`<b>${s.alertas}</b>requieren atención`, 'is-red'] : null,
      [`<b>${s.mensajes}</b>${s.mensajes === 1 ? 'mensaje nuevo' : 'mensajes nuevos'}`, 'is-blue'],
    ].filter(Boolean);
    root.querySelector('[data-stats]').innerHTML = stats.map(([h, c], i) => `<span class="${c}" style="animation-delay:${(3.8 + i * 0.22).toFixed(2)}s">${h}</span>`).join('');
  });

  timers.push(setTimeout(finish, 6400));
}

// Precarga en segundo plano (al elegir «adscrito» en el inicio de sesión) para que la intro 3D no caiga al respaldo 2D
let prefetched = false;
export function prefetchAdscritoIntro() {
  if (prefetched || !canRunAndroidIntro()) return;
  prefetched = true;
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 600));
  idle(() => {
    loadNucleo().catch(() => {});
    import(new URL('three.module.min.js', VENDOR_THREE).href).catch(() => {});
    fetch(new URL('hdri/polyhaven-wooden_studio_09-1k.hdr', ANDROID_ASSETS)).catch(() => {});
  });
}

// ---------- Entrada principal 3D «El guardián» ----------

export async function playAdscritoIntro({ reduced = false, onDone } = {}) {
  const greet = greetingByHour();
  const statsPromise = summary();
  prefetchVoice([greet.clip, 'ads-orden', 'ads-resumen', 'ads-mensajes', 'ads-calma', 'ads-cuando']);

  const useReduced = Boolean(reduced || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);

  if (!canRunAndroidIntro()) {
    playAdscritoIntro2D({ reduced: useReduced, onDone, statsPromise });
    return;
  }

  let stats = { residentes: 11, alertas: null, mensajes: 0, cards: null };
  try {
    stats = await Promise.race([
      statsPromise,
      new Promise((r) => setTimeout(() => r(stats), 900)),
    ]);
  } catch {}

  const overlay = buildAllyOverlay();
  const cues = cueListAlly({ saludo: greet.label, mensajes: stats.mensajes, stats, reduced: useReduced });

  let score = null;
  const voiceTimers = [];
  let cleaned = false;
  const cleanupAudio = () => {
    if (cleaned) return;
    cleaned = true;
    voiceTimers.forEach(clearTimeout);
    voiceTimers.length = 0;
    stopVoice();
    score?.stop();
  };

  let timedOut = false;
  let loadTimer = 0;
  let intro = null;

  try {
    const createPromise = createAndroidIntro({
      doctor: 'Dra. Hernández',
      assetBase: ANDROID_ASSETS,
      vendorBase: VENDOR_THREE,
      getAudioTime: () => (score ? score.getTime() : null),
      reducedMotion: useReduced,
      // «Núcleo de obsidiana»: mismo guion y voces; cambia el escenario 3D
      stageFactory: async (opts) => (await loadNucleo())[0].createNucleoStage(opts),
      stageOptions: { nodes: stats.cards || null, name: 'Dra. Hernández' },
      timeline: {
        sample: (await loadNucleo())[1].sampleNucleo,
        cues,
        TOTAL,
        REDUCED_TOTAL,
      },
      ui: { vitals: false, variant: 'ads', bars: 'adaptive' },
      overlay: overlay.el,
      onFrame: (t, ctx) => overlay.update(t, ctx),
      muteControl: {
        isMuted: () => (score ? score.isMuted() : isPortalAudioMuted()),
        toggle: () => {
          if (score) return score.toggle();
          const next = !isPortalAudioMuted();
          setPortalAudioMuted(next);
          if (next) stopVoice();
          return next;
        },
      },
      onSkip: cleanupAudio,
      onEnd: cleanupAudio,
    }).then((inst) => {
      if (timedOut) {
        inst?.dispose?.();
        return null;
      }
      return inst;
    });

    intro = await Promise.race([
      createPromise,
      new Promise((_, rej) => {
        loadTimer = setTimeout(() => {
          timedOut = true;
          rej(new Error('Carga 3D excedió 7 s'));
        }, 7000);
      }),
    ]);
    clearTimeout(loadTimer);

    if (timedOut) {
      intro?.dispose?.();
      playAdscritoIntro2D({ reduced: useReduced, onDone, statsPromise });
      return;
    }
  } catch (err) {
    clearTimeout(loadTimer);
    console.warn('[intro-adscrito] Fallback 2D:', err?.message || err);
    playAdscritoIntro2D({ reduced: useReduced, onDone, statsPromise });
    return;
  }

  score = startAllyScore({ reduced: useReduced });

  // Programar voces relativas al inicio (se cancelan limpiamente si se salta)
  const queueVoice = (sec, clip) => {
    const id = setTimeout(() => {
      if (cleaned) return;
      speak(clip, { interrupt: true }).catch(() => {});
    }, Math.max(0, Math.round(sec * 1000)));
    voiceTimers.push(id);
  };

  if (useReduced) {
    queueVoice(0.8, greet.clip);
  } else {
    queueVoice(CUE_ALLY.saludo, greet.clip);
    queueVoice(CUE_ALLY.orden, 'ads-orden');
    queueVoice(CUE_ALLY.resumen, 'ads-resumen');
    queueVoice(CUE_ALLY.mensajes, stats.mensajes > 0 ? 'ads-mensajes' : 'ads-calma');
    queueVoice(CUE_ALLY.cuando, 'ads-cuando');
  }

  intro.start();
  try {
    await intro.done;
  } finally {
    cleanupAudio();
    onDone?.();
  }
}
