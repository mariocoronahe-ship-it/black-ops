import { cueList, heartRate, BEEPS } from './android-timeline.js?v=20261122a';

const STYLE_ID = 'ci-an-style';
const BAR_RATIO = 2.39;

const CSS = `
.ci-an{position:fixed;inset:0;z-index:2147483000;background:#000;overflow:hidden;color:#f1e3e5;opacity:1;transition:opacity .8s ease;--ci-bar:0px;cursor:pointer;user-select:none;-webkit-user-select:none}
.ci-an.is-out{opacity:0;pointer-events:none}
.ci-an canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.ci-an .ci-an-bar{position:absolute;left:0;right:0;height:var(--ci-bar);background:#000;z-index:3}
.ci-an .ci-an-bar.is-top{top:0}.ci-an .ci-an-bar.is-bot{bottom:0}
.ci-an [data-cue]{position:absolute;left:50%;z-index:4;pointer-events:none;opacity:0;text-align:center;transition:opacity 1.4s ease,filter 1.8s ease,letter-spacing 3.4s cubic-bezier(.2,.7,.2,1),transform 1.8s cubic-bezier(.2,.7,.2,1)}
.ci-an [data-cue].on{opacity:1}
.ci-an .ci-an-credit{left:8vw;top:42%;transform:translateY(-50%);text-align:left;width:min(38vw,540px);font:300 clamp(11px,1.4vw,15px)/1.6 var(--font-sans,"Manrope",system-ui,sans-serif);letter-spacing:.6em;text-transform:uppercase;color:rgba(235,214,217,.7);filter:blur(8px)}
.ci-an .ci-an-credit.on{filter:blur(0);letter-spacing:.4em}
.ci-an .ci-an-credit span{color:#c4283e;font-weight:500}
.ci-an .ci-an-credit.is-big{font:400 clamp(24px,3.8vw,50px)/1.14 var(--font-serif,"Fraunces",Georgia,serif);letter-spacing:.01em;text-transform:none;color:rgba(240,226,228,.9);text-shadow:0 0 40px #000,0 0 3px #000}
.ci-an .ci-an-credit.is-big.on{letter-spacing:0}
.ci-an .ci-an-credit.is-big em{font-style:italic;color:#d3243d}
.ci-an .ci-an-sub{bottom:calc(var(--ci-bar) + 26px);transform:translateX(-50%);width:min(92vw,760px);font:italic 400 clamp(15px,1.9vw,22px)/1.4 var(--font-serif,"Fraunces",Georgia,serif);color:rgba(236,222,224,.88);text-shadow:0 2px 18px #000,0 0 2px #000}
.ci-an .ci-an-sub.is-red{color:#d6243c;font-size:clamp(18px,2.3vw,27px)}
.ci-an .ci-an-sub.is-warm{color:#ffe4b8;text-shadow:0 2px 18px #000,0 0 24px rgba(255,179,71,.28)}
.ci-an.is-ally .ci-an-sub{bottom:calc(var(--ci-bar) + 52px);width:min(86vw,660px)}
.ci-an .ci-an-title{top:41%;transform:translate(-50%,-50%) scale(1.03);display:flex;flex-direction:column;align-items:center;gap:14px;filter:blur(10px)}
.ci-an .ci-an-title.on{transform:translate(-50%,-50%) scale(1);filter:blur(0)}
.ci-an .ci-an-title::before{content:"";position:absolute;inset:-30% -45%;z-index:-1;background:radial-gradient(closest-side,rgba(0,0,0,.72),rgba(0,0,0,0));pointer-events:none}
.ci-an .ci-an-title img{width:clamp(64px,8vw,96px);height:auto;border-radius:24%;filter:saturate(.7) brightness(.8);box-shadow:0 0 50px rgba(190,20,45,.4),0 0 0 1px rgba(190,40,60,.3)}
.ci-an .ci-an-title b{font:700 clamp(38px,7.6vw,98px)/1 var(--font-display,"Space Grotesk","Manrope",system-ui,sans-serif);letter-spacing:.2em;padding-left:.2em;color:#d4bfc2;text-shadow:-2px 0 rgba(255,24,52,.45),2px 0 rgba(90,170,175,.22),0 0 36px rgba(200,20,45,.5),0 0 100px rgba(150,10,30,.4)}
.ci-an .ci-an-title b i{font-style:normal;color:#d0243b}
.ci-an .ci-an-title small{font:300 clamp(10px,1.2vw,13px)/1 var(--font-sans,"Manrope",system-ui,sans-serif);letter-spacing:.3em;padding-left:.3em;text-transform:uppercase;color:rgba(214,192,196,.62);max-width:90vw;line-height:1.7;text-align:center}
.ci-an .ci-an-title.is-ally{top:44%;gap:10px}
.ci-an .ci-an-title.is-ally b{font-size:clamp(30px,5.6vw,70px);color:#f3ead8;text-shadow:0 0 34px rgba(255,179,71,.38),0 2px 18px #000}
.ci-an .ci-an-title.is-ally b i{color:#ffb347}
.ci-an .ci-an-title.is-ally small{color:rgba(255,217,160,.82);letter-spacing:.26em}
.ci-an .ci-an-ally-hello{margin:6px 0 0;font:italic 400 clamp(22px,3.4vw,38px)/1.15 var(--font-serif,"Fraunces",Georgia,serif);color:#f8f3ea;text-shadow:0 2px 18px #000,0 0 28px rgba(47,214,192,.25)}
.ci-an .ci-an-ally-hello em{color:#ffb347;font-style:italic}
.ci-an .ci-an-ally-stats{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 22px;margin:10px 0 0;font:500 12.5px/1.2 var(--font-mono,"JetBrains Mono",ui-monospace,monospace);letter-spacing:.06em;color:rgba(225,235,245,.82)}
.ci-an .ci-an-ally-stats b{color:#fff;font-size:15px;margin-right:6px}
.ci-an .ci-an-ally-stats .is-warn b{color:#f0b54a}
.ci-an .ci-an-ally-stats .is-teal b{color:#2fd6c0}
.ci-an .ci-an-title.is-ally::before{inset:-40% -60%;background:radial-gradient(closest-side,rgba(1,5,8,.82),rgba(1,5,8,.5) 55%,rgba(0,0,0,0))}
.ci-an .ci-an-title.is-ally .ci-an-ally-stats span{display:inline-flex;align-items:baseline;gap:6px;padding:7px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(3,12,16,.6)}
.ci-an .ci-an-title.is-ally .ci-an-ally-stats b{font:600 15px/1 var(--font-mono,"JetBrains Mono",ui-monospace,monospace);letter-spacing:.02em;padding:0;margin:0;color:#fff;text-shadow:none}
.ci-an .ci-an-title.is-ally .ci-an-ally-stats .is-warn b{color:#f0b54a}
.ci-an .ci-an-title.is-ally .ci-an-ally-stats .is-teal b{color:#2fd6c0}
@media (max-width:600px){.ci-an .ci-an-title.is-ally{top:42%;width:92vw}.ci-an .ci-an-title.is-ally .ci-an-ally-stats{gap:8px;font-size:11px}.ci-an .ci-an-title.is-ally .ci-an-ally-stats span{padding:6px 10px}.ci-an.is-ally .ci-an-sub{bottom:calc(var(--ci-bar) + 70px)}}
.ci-an.is-ads .ci-an-sub{bottom:calc(var(--ci-bar) + 52px);width:min(86vw,660px)}
.ci-an .ci-an-title.is-ads{top:42%;gap:10px}
.ci-an .ci-an-title.is-ads::before{inset:-40% -60%;background:radial-gradient(closest-side,rgba(0,0,0,.84),rgba(0,0,0,.55) 55%,rgba(0,0,0,0))}
.ci-an .ci-an-title.is-ads b{font-size:clamp(32px,6vw,78px)}
.ci-an .ci-an-ads-hello{margin:6px 0 0;font:italic 400 clamp(22px,3.4vw,38px)/1.15 var(--font-serif,"Fraunces",Georgia,serif);color:rgba(240,226,228,.95);text-shadow:0 2px 18px #000}
.ci-an .ci-an-ads-hello em{color:#d3243d;font-style:italic}
.ci-an .ci-an-ads-stats{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 14px;margin:12px 0 0;font:500 12px/1.2 var(--font-mono,"JetBrains Mono",ui-monospace,monospace);letter-spacing:.06em;color:rgba(225,214,216,.82)}
.ci-an .ci-an-ads-stats span{display:inline-flex;align-items:baseline;gap:6px;padding:7px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(8,2,4,.6)}
.ci-an .ci-an-title.is-ads .ci-an-ads-stats b{font:600 15px/1 var(--font-mono,"JetBrains Mono",ui-monospace,monospace);letter-spacing:.02em;padding:0;margin:0;color:#fff;text-shadow:none}
.ci-an .ci-an-title.is-ads .ci-an-ads-stats .is-warn b{color:#ff3048}
.ci-an .ci-an-title.is-ads .ci-an-ads-stats .is-teal b{color:rgba(120,230,170,.95)}
.ci-an.is-ads .ci-an-btn:hover,.ci-an.is-ads .ci-an-btn:focus-visible{border-color:rgba(214,36,60,.8)}
@media (max-width:600px){.ci-an .ci-an-title.is-ads{width:92vw}.ci-an .ci-an-ads-stats{gap:8px;font-size:11px}.ci-an .ci-an-ads-stats span{padding:6px 10px}.ci-an.is-ads .ci-an-sub{bottom:calc(var(--ci-bar) + 70px)}}
.ci-an .ci-an-welcome{bottom:calc(var(--ci-bar) + 30px);transform:translateX(-50%) translateY(10px);font:italic 400 clamp(18px,2.3vw,27px)/1.2 var(--font-serif,"Fraunces",Georgia,serif);color:rgba(240,226,228,.92);white-space:nowrap;text-shadow:0 2px 18px #000}
.ci-an .ci-an-welcome.on{transform:translateX(-50%)}
.ci-an .ci-an-foot{position:absolute;right:16px;bottom:calc(var(--ci-bar) + 12px);z-index:5;display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
.ci-an .ci-an-btn{font:500 11px/1 var(--font-mono,"JetBrains Mono",ui-monospace,monospace);letter-spacing:.08em;color:rgba(235,212,216,.62);background:rgba(8,2,4,.6);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:9px 14px;cursor:pointer;transition:color .2s,border-color .2s}
.ci-an .ci-an-btn:hover,.ci-an .ci-an-btn:focus-visible{color:#fff;border-color:rgba(214,36,60,.8);outline:none}
.ci-an.is-ally .ci-an-btn:hover,.ci-an.is-ally .ci-an-btn:focus-visible{border-color:rgba(255,179,71,.85)}
.ci-an .ci-an-btn kbd{font:inherit;opacity:.55;margin-left:4px}
.ci-an.is-reduced [data-cue]{transition:opacity .9s ease}
.ci-an.is-reduced .ci-an-title,.ci-an.is-reduced .ci-an-credit{filter:none}
.ci-an .ci-an-vitals{position:absolute;left:16px;bottom:calc(var(--ci-bar) + 12px);z-index:5;display:flex;align-items:center;gap:10px;font:500 11px/1 var(--font-mono,"JetBrains Mono",ui-monospace,monospace);letter-spacing:.08em;color:rgba(120,230,170,.85);pointer-events:none;opacity:0;transition:opacity .6s ease}
.ci-an .ci-an-vitals.on{opacity:1}
.ci-an .ci-an-vitals b{font:600 22px/1 var(--font-mono,"JetBrains Mono",ui-monospace,monospace);min-width:2.4ch;text-align:right}
.ci-an .ci-an-vitals i{width:7px;height:7px;border-radius:50%;background:currentColor;opacity:.25;font-style:normal}
.ci-an .ci-an-vitals i.beat{opacity:1;box-shadow:0 0 10px currentColor}
.ci-an .ci-an-vitals.is-alarm{color:#ff3048}
.ci-an .ci-an-vitals.is-alarm b{animation:ci-an-blink .5s steps(2) infinite}
.ci-an .ci-an-vitals canvas{position:static;width:150px;height:34px}
@keyframes ci-an-blink{50%{opacity:.25}}
@media (max-width:600px){.ci-an .ci-an-sub{bottom:max(64px,calc(var(--ci-bar) - 70px))}.ci-an .ci-an-foot{bottom:calc(16px + env(safe-area-inset-bottom,0px))}.ci-an .ci-an-vitals{left:50%;transform:translateX(-50%);bottom:auto;top:max(14px,calc(var(--ci-bar) * .5 - 17px))}.ci-an .ci-an-vitals canvas{width:120px}.ci-an .ci-an-vitals b{font-size:18px}}
@media (max-width:800px){.ci-an .ci-an-credit{left:50%;top:26%;transform:translate(-50%,-50%);text-align:center;width:90vw}}
@media (max-width:600px){.ci-an .ci-an-title small{letter-spacing:.14em;padding-left:.14em;font-size:10px}.ci-an .ci-an-welcome{white-space:normal;width:86vw}}
`;

function addStyle() {
  let el = document.getElementById(STYLE_ID);
  if (el) { el.dataset.refs = String(Number(el.dataset.refs) + 1); return; }
  el = document.createElement('style');
  el.id = STYLE_ID;
  el.dataset.refs = '1';
  el.textContent = CSS;
  document.head.appendChild(el);
}

function dropStyle() {
  const el = document.getElementById(STYLE_ID);
  if (!el) return;
  const n = Number(el.dataset.refs) - 1;
  if (n <= 0) el.remove(); else el.dataset.refs = String(n);
}

export function mountUi({ container, doctor, reduced, logoUrl, muteControl, cues: customCues = null, vitals: showVitals = true, overlay = null, variant = '', bars = 'cinema' }) {
  addStyle();
  const cues = Array.isArray(customCues) ? customCues : cueList(doctor, reduced, logoUrl);
  const root = document.createElement('div');
  root.className = `ci-an${reduced ? ' is-reduced' : ''}${variant ? ` is-${variant}` : ''}`;
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-label', variant === 'ally' || variant === 'ads' ? 'Entrada al panel docente' : 'Intro de CALOT-OS');
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  root.appendChild(canvas);
  if (overlay) root.appendChild(overlay);
  root.insertAdjacentHTML('beforeend', '<div class="ci-an-bar is-top"></div><div class="ci-an-bar is-bot"></div>');
  const els = cues.map((c, i) => {
    const el = document.createElement('div');
    el.className = c.cls;
    el.dataset.cue = String(i);
    if (c.text !== undefined) el.textContent = c.text; else el.innerHTML = c.html;
    root.appendChild(el);
    return el;
  });
  const foot = document.createElement('div');
  foot.className = 'ci-an-foot';
  let muteBtn = null;
  if (muteControl) {
    muteBtn = document.createElement('button');
    muteBtn.type = 'button';
    muteBtn.className = 'ci-an-btn';
    muteBtn.dataset.ciMute = '';
    foot.appendChild(muteBtn);
  }
  const skipBtn = document.createElement('button');
  skipBtn.type = 'button';
  skipBtn.className = 'ci-an-btn';
  skipBtn.dataset.ciSkip = '';
  skipBtn.innerHTML = 'Saltar <kbd>Esc</kbd>';
  foot.appendChild(skipBtn);
  root.appendChild(foot);

  // Monitor de signos vitales del paciente (tú) — solo en la intro del residente
  let vitals = null, vDot = null, vNum = null, ecg = null, eg = null;
  if (showVitals && !reduced) {
    vitals = document.createElement('div');
    vitals.className = 'ci-an-vitals';
    vitals.setAttribute('aria-hidden', 'true');
    vitals.innerHTML = '<i></i><span>FC</span><b>--</b><span>lpm</span><canvas width="300" height="68"></canvas>';
    vDot = vitals.querySelector('i');
    vNum = vitals.querySelector('b');
    ecg = vitals.querySelector('canvas');
    eg = ecg.getContext('2d');
    root.appendChild(vitals);
  }
  container.appendChild(root);

  const wave = (tau) => {
    // Busca el latido más cercano y dibuja P-QRS-T
    let v = 0;
    for (let i = 0; i < BEEPS.length; i++) {
      const d = tau - BEEPS[i];
      if (d < -0.2) break;
      if (d > 0.4) continue;
      if (d > -0.15 && d < -0.06) v += 0.12 * Math.sin(Math.PI * (d + 0.15) / 0.09);
      else if (d >= -0.02 && d < 0.01) v += (d + 0.02) / 0.03;
      else if (d >= 0.01 && d < 0.04) v += 1 - (d - 0.01) / 0.03 * 1.35;
      else if (d >= 0.04 && d < 0.07) v += -0.35 + (d - 0.04) / 0.03 * 0.35;
      else if (d > 0.18 && d < 0.32) v += 0.22 * Math.sin(Math.PI * (d - 0.18) / 0.14);
    }
    return v;
  };
  const drawEcg = (t, alarm) => {
    const W = ecg.width, H = ecg.height;
    eg.clearRect(0, 0, W, H);
    eg.lineWidth = 2.4;
    eg.strokeStyle = alarm ? '#ff3048' : 'rgba(120,230,170,.95)';
    eg.shadowColor = eg.strokeStyle;
    eg.shadowBlur = 6;
    eg.beginPath();
    for (let x = 0; x <= W; x += 2) {
      const tau = t - 2.4 + (x / W) * 2.4;
      const y = H * 0.62 - wave(tau) * H * 0.48;
      if (x === 0) eg.moveTo(x, y); else eg.lineTo(x, y);
    }
    eg.stroke();
  };

  const setBars = () => {
    const w = root.clientWidth || window.innerWidth;
    const h = root.clientHeight || window.innerHeight;
    // «adaptive»: franja cinemascope en horizontal, barras delgadas en vertical (celular) para no reducir la imagen a una tira
    const ratio = bars === 'adaptive' ? (w / h < 1.05 ? 0.5 : w / h < 1.6 ? 1.85 : BAR_RATIO) : BAR_RATIO;
    const bar = Math.max(0, (h - w / ratio) / 2);
    const cap = bars === 'adaptive' ? h * (w / h < 1.05 ? 0.06 : 0.14) : Infinity;
    root.style.setProperty('--ci-bar', `${Math.min(cap, Math.max(bar, h * 0.045)).toFixed(1)}px`);
  };
  setBars();

  const setMuteLabel = (muted) => {
    if (!muteBtn) return;
    muteBtn.setAttribute('aria-pressed', String(muted));
    muteBtn.textContent = muted ? 'Sonido: no' : 'Sonido: sí';
  };

  return {
    root, canvas, muteBtn, skipBtn, setBars, setMuteLabel,
    update(t) {
      cues.forEach((c, i) => els[i].classList.toggle('on', t >= c.at && t < c.out));
      if (!vitals) return;
      const show = t > 0.4 && t < 24.6;
      vitals.classList.toggle('on', show);
      if (!show) return;
      const hr = heartRate(t);
      const alarm = hr === 0 || hr > 115;
      vitals.classList.toggle('is-alarm', alarm);
      vNum.textContent = hr ? String(Math.round(hr)) : '0';
      let beat = false;
      for (const b of BEEPS) { if (b > t) break; if (t - b < 0.12) beat = true; }
      vDot.classList.toggle('beat', beat);
      drawEcg(t, alarm);
    },
    fadeOut() { root.classList.add('is-out'); },
    dispose() { root.remove(); dropStyle(); },
  };
}
