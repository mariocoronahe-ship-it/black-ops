import { icon } from '../icons.js?v=20261122h';
import { store } from '../store.js?v=20261122h';
import { PUEM_SERIAL_CASES } from '../data/repaso_alto_rendimiento.js?v=20261122h';
import { PUEM_REPASO_2013 } from '../data/puem_repaso_2013.js?v=20261122h';
import { DRIVE_CASES } from '../data/casos_drive.js?v=20261122h';
import { normalizeCases } from '../casos.js';
import { esc, toast } from '../ui.js';
import { playUiSfx } from '../fx/audio.js?v=20261122h';
import { startWaitingTaunts, playCalotEvaluation } from '../fx/eval-cinematic.js?v=20261122h';
import * as S from '../scroll.js';
import { canSee } from '../perfil.js?v=20261122h';

export const section = 'repaso';

const YEARS = ['R1', 'R2', 'R3', 'R4'].filter(canSee);

// Las preguntas con retirada:true (defectuosas o sin clave defendible) no se muestran ni cuentan; un caso sin preguntas visibles se oculta.
const visibleCases = (list) => list
  .map((c) => ({ ...c, questions: (c.questions || []).filter((q) => !q.retirada) }))
  .filter((c) => c.questions.length);

// Un banco por fuente; el año sale del prefijo del id (puem-rN-…). Un banco nuevo es una línea más aquí.
const SOURCES = [
  { id: 'puem2', title: 'Preguntas PUEM R2 (2022)', cases: visibleCases(normalizeCases(PUEM_SERIAL_CASES)) },
  { id: 'repaso13', title: 'Repaso PUEM R2 (2013)', cases: visibleCases(normalizeCases(PUEM_REPASO_2013)) },
  // 510 casos de los resúmenes de Drive, colocados en el año y tema del temario HGR 72 (no en el año del archivo)
  { id: 'calot', title: 'Casos clínicos CALOT-OS (por tema)', cases: visibleCases(normalizeCases(DRIVE_CASES)) },
];

const yearOf = (c) => {
  const m = /^puem-r(\d)-/.exec(c.id || '');
  return m ? `R${m[1]}` : null;
};

const BANKS = SOURCES.flatMap((src) => YEARS.flatMap((y) => {
  const cases = src.cases.filter((c) => yearOf(c) === y);
  return cases.length ? [{ id: src.id, title: src.title, year: y, cases }] : [];
}));

const banksOf = (y) => BANKS.filter((b) => b.year === y);
const topicGroup = (t) => String(t || '').split(' / ')[0].trim(); // «Colon / Apéndice» → «Colon»
const qCount = (cases) => cases.reduce((a, c) => a + (c.questions?.length || 0), 0);

let year = null;
let bankId = null;
let caseId = null;
let topicFilter = 'todos';
const picked = {}; // { [caseId]: { [qIdx]: optIdx } }
const evaluated = {}; // { [caseId]: true } (solo muestra corrección tras pedir evaluación a CALOT)

const answerText = (q) => q.answer_text || q.correct_text || (q.options?.[q.answerIndex] || '') || 'Sin respuesta en el PDF';
const hasOptions = (q) => Array.isArray(q.options) && q.options.length >= 2;
const safeUrl = (u) => (/^https?:\/\//i.test(String(u || '')) ? String(u) : '');

// Nota de clave corregida: correccion = { fuente, url, mas?: [{ fuente, url }] }
function correctionNote(q) {
  const c = q.correccion;
  if (!c || !c.fuente) return '';
  const link = (x) => {
    const url = safeUrl(x.url);
    return url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(x.fuente)}</a>` : esc(x.fuente);
  };
  const all = [c, ...(Array.isArray(c.mas) ? c.mas : [])].filter((x) => x && x.fuente);
  return `<div class="mono muted repasa-cite puem-correccion">Clave corregida · fuente: ${all.map(link).join(' · ')}</div>`;
}

function currentBank() {
  if (!year) return null;
  const list = banksOf(year);
  return list.find((b) => b.id === bankId) || list[0] || null;
}

function renderYears() {
  return `
  <div class="puem-year-grid">
    ${YEARS.map((y) => {
      const list = banksOf(y);
      const cases = list.reduce((a, b) => a + b.cases.length, 0);
      const qs = list.reduce((a, b) => a + qCount(b.cases), 0);
      return `
      <button type="button" class="card puem-year${list.length ? '' : ' is-empty'}" data-puem-year="${y}">
        <span class="mono puem-year-tag">AÑO DE RESIDENCIA</span>
        <strong class="puem-year-name">${y}</strong>
        <span class="mono muted puem-year-meta">${list.length ? `${cases} casos · ${qs} preguntas` : 'Sin material todavía'}</span>
      </button>`;
    }).join('')}
  </div>`;
}

function renderEmpty() {
  return `
  <article class="card puem-empty">
    <span class="icon-tile">${icon('book', 'ic3d')}</span>
    <h2>Sin material todavía</h2>
    <p class="muted">Aún no hay banco de preguntas de ${esc(year)}. Cuando llegue, aparecerá aquí solo.</p>
  </article>`;
}

function renderQuestion(c, q, qIdx) {
  const sel = picked[c.id]?.[qIdx];
  const isEval = Boolean(evaluated[c.id]);
  const total = c.questions.length;
  return `
  <div class="glass repasa-case-q">
    <p class="repasa-case-stem"><span class="mono repasa-kicker">PREGUNTA ${qIdx + 1}/${total}:</span> ${esc(q.stem)}</p>
    ${hasOptions(q) ? `
    <div class="repasa-stack-xs">
      ${q.options.map((opt, oIdx) => {
        const isPicked = !isEval && sel === oIdx;
        const isRight = isEval && oIdx === q.answerIndex;
        const isWrong = isEval && sel === oIdx && oIdx !== q.answerIndex;
        return `
        <button type="button" data-puem-q="${qIdx}" data-puem-opt="${oIdx}" class="glass repasa-opt-btn${isPicked ? ' is-picked' : ''}${isRight ? ' is-right' : ''}${isWrong ? ' is-wrong' : ''}" ${isEval ? 'disabled' : ''}>
          <span>${esc(opt)}</span>
          ${isRight ? '<span class="repasa-opt-tag ok">✓ Correcta</span>' : ''}
          ${isWrong ? '<span class="repasa-opt-tag bad">✗ Tu elección</span>' : ''}
        </button>`;
      }).join('')}
    </div>` : ''}
    ${isEval ? `
    <div class="repasa-justification">
      ${hasOptions(q) ? '' : `<strong>Respuesta:</strong> ${esc(answerText(q))}<br>`}
      ${q.explanation ? `<strong>Explicación:</strong> ${esc(q.explanation)}` : ''}
      ${correctionNote(q)}
      ${q.citation ? `<div class="mono muted repasa-cite">📖 Fuente: ${esc(q.citation)}</div>` : ''}
    </div>` : ''}
  </div>`;
}

function renderBank(bank) {
  const topics = [...new Set(bank.cases.map((c) => topicGroup(c.topic)).filter(Boolean))];
  if (topicFilter !== 'todos' && !topics.includes(topicFilter)) topicFilter = 'todos';
  const cases = bank.cases.filter((c) => topicFilter === 'todos' || topicGroup(c.topic) === topicFilter);
  const cur = cases.find((c) => c.id === caseId) || cases[0];
  caseId = cur?.id || null;
  const progress = store.state.telemetry?.caseProgress || {};
  const done = bank.cases.filter((c) => progress[c.id]).length;
  return `
  <div class="repasa-chip-row puem-topics">
    <span class="chip"><strong>${bank.cases.length}</strong>&nbsp;casos</span>
    <span class="chip"><strong>${qCount(bank.cases)}</strong>&nbsp;preguntas</span>
    ${bank.cases.some((c) => c.questions.some(hasOptions)) ? `<span class="chip"><strong>${done}</strong>&nbsp;resueltos</span>` : ''}
    ${topics.length > 1 ? ['todos', ...topics].map((t) => `
      <button type="button" class="chip puem-topic${topicFilter === t ? ' is-on' : ''}" data-puem-topic="${esc(t)}">${t === 'todos' ? 'Todos los temas' : esc(t)}</button>`).join('') : ''}
  </div>
  <div class="repasa-cases-grid">
    <aside class="card repasa-cases-sidebar">
      <p class="mono muted repasa-cases-kicker">CASOS (${cases.length})</p>
      <div class="repasa-stack-xs">
        ${cases.map((c) => {
          const prog = progress[c.id];
          const vis = c.questions.length;
          const progTotal = prog ? Math.min(Number(prog.total) || vis, vis) : 0; // un intento viejo puede traer más preguntas que las visibles hoy
          const progScore = prog ? Math.min(Number(prog.score) || 0, progTotal) : 0;
          return `
          <button type="button" data-puem-case="${esc(c.id)}" class="glass repasa-case-btn${c.id === cur?.id ? ' is-active' : ''}">
            <div class="repasa-case-meta">
              <span class="mono repasa-kicker">CASO #${esc(c.number ?? '')}</span>
              ${prog ? `<span class="chip chip-done">✓ ${esc(progScore)}/${esc(progTotal)}</span>` : `<span class="mono muted">${c.questions.length} pregs</span>`}
            </div>
            <div class="repasa-case-name">${esc(c.title)}</div>
            ${c.topic ? `<div class="mono muted repasa-case-sub">${esc(c.topic)}</div>` : ''}
          </button>`;
        }).join('')}
      </div>
    </aside>
    ${cur ? `
    <article class="card repasa-case-body">
      <div class="repasa-pts-head">
        <div>
          ${cur.topic ? `<span class="chip chip-accent">${esc(cur.topic)}</span>` : ''}
          <h3>${esc(cur.title)}</h3>
        </div>
        <div class="repasa-chip-row">
          <button type="button" class="btn btn-sm btn-ghost" data-puem-act="reset">${icon('refresh')} Reiniciar caso</button>
        </div>
      </div>
      ${cur.vignette ? `
      <div class="glass repasa-vignette">
        <span class="mono repasa-kicker">CASO CLÍNICO:</span>
        <p>${esc(cur.vignette)}</p>
      </div>` : ''}
      <div class="repasa-stack">
        ${cur.questions.map((q, qIdx) => renderQuestion(cur, q, qIdx)).join('')}
      </div>
      ${!evaluated[cur.id] && cur.questions.some(hasOptions) ? (() => {
        const ansCount = Object.keys(picked[cur.id] || {}).length;
        const optTotal = cur.questions.filter(hasOptions).length;
        return `
        <div class="eval-cta-bar">
          <p class="mono">${ansCount}/${optTotal} preguntas respondidas · CALOT no revelará aciertos ni errores hasta evaluarte.</p>
          <button type="button" class="btn eval-cta-btn" data-puem-act="evaluate" ${ansCount === 0 ? 'disabled' : ''}>
            Pedirle a CALOT que me evalúe →
          </button>
        </div>`;
      })() : ''}
    </article>` : '<article class="card"><p class="muted">No hay casos para este tema.</p></article>'}
  </div>`;
}

export function render(params = {}) {
  year = YEARS.includes(params.anio) ? params.anio : null;
  const bank = currentBank();
  const banks = year ? banksOf(year) : [];
  return `
<div class="puem-view">
  <header class="page-head">
    <div>
      <p class="mono eyebrow">PUEM · BANCO DE PREGUNTAS${year ? ` · ${esc(year)}` : ''}</p>
      <h1>Banco <em>PUEM</em></h1>
      <p>${year ? 'Casos clínicos con sus preguntas, opciones, respuesta correcta y explicación. Responde o muestra la respuesta.' : 'Elige tu año de residencia para consultar el banco de preguntas y respuestas.'}</p>
    </div>
    ${year ? `<button type="button" class="btn btn-ghost" data-puem-act="years">${icon('arrowL')} Cambiar año</button>` : ''}
  </header>
  ${year ? `
  <div class="repasa-chip-row puem-years-bar">
    ${YEARS.map((y) => `<button type="button" class="chip puem-topic${y === year ? ' is-on' : ''}" data-puem-year="${y}">${y}</button>`).join('')}
    ${banks.length > 1 ? banks.map((b) => `<button type="button" class="chip puem-topic${bank && b.id === bank.id ? ' is-on' : ''}" data-puem-bank="${esc(b.id)}">${esc(b.title)}</button>`).join('') : (bank ? `<span class="chip chip-accent">${esc(bank.title)}</span>` : '')}
  </div>
  ${bank ? renderBank(bank) : renderEmpty()}` : renderYears()}
</div>`;
}

const setYear = (y) => {
  year = y;
  bankId = null; caseId = null; topicFilter = 'todos';
  try { history.replaceState(null, '', y ? `#/puem?anio=${y}` : '#/puem'); } catch { /* hash fijo */ }
};

// En móvil la lista de casos queda apilada sobre el caso: tras elegir uno, lleva el scroll al cuerpo del caso.
function scrollToCaseBody() {
  const body = document.querySelector('.repasa-case-body');
  const side = document.querySelector('.repasa-cases-sidebar');
  if (!body || !side || body.getBoundingClientRect().top < side.getBoundingClientRect().bottom) return; // lado a lado: no hace falta
  const hud = document.querySelector('.hud')?.offsetHeight || 0;
  const y = Math.max(0, body.getBoundingClientRect().top + window.scrollY - hud - 12);
  if (S.lenis) S.lenis.scrollTo(y, { immediate: true, force: true }); else window.scrollTo(0, y);
}

export function mount(root, rerender) {
  const taunts = startWaitingTaunts({
    isActive: () => {
      const cur = currentBank()?.cases.find((c) => c.id === caseId);
      return Boolean(root.isConnected && cur && !evaluated[cur.id] && cur.questions.some(hasOptions));
    },
  });
  S.onCleanup(() => taunts.stop());

  root.addEventListener('click', (e) => {
    const yBtn = e.target.closest('[data-puem-year]');
    if (yBtn) {
      playUiSfx('click');
      setYear(yBtn.dataset.puemYear);
      rerender({ keepScroll: false });
      return;
    }
    const bBtn = e.target.closest('[data-puem-bank]');
    if (bBtn) {
      playUiSfx('click');
      bankId = bBtn.dataset.puemBank; caseId = null; topicFilter = 'todos';
      rerender({ keepScroll: true });
      return;
    }
    const tBtn = e.target.closest('[data-puem-topic]');
    if (tBtn) {
      playUiSfx('click');
      topicFilter = tBtn.dataset.puemTopic; caseId = null;
      rerender({ keepScroll: true });
      return;
    }
    const cBtn = e.target.closest('[data-puem-case]');
    if (cBtn) {
      playUiSfx('click');
      caseId = cBtn.dataset.puemCase;
      taunts.touch();
      rerender({ keepScroll: false });
      scrollToCaseBody();
      return;
    }
    const cur = currentBank()?.cases.find((c) => c.id === caseId);
    const opt = e.target.closest('[data-puem-opt]');
    if (opt && cur) {
      if (evaluated[cur.id]) return;
      const qIdx = +opt.dataset.puemQ;
      const oIdx = +opt.dataset.puemOpt;
      const ans = picked[cur.id] = picked[cur.id] || {};
      ans[qIdx] = oIdx;
      playUiSfx('click');
      taunts.touch();
      rerender({ keepScroll: true });
      return;
    }
    const act = e.target.closest('[data-puem-act]')?.dataset.puemAct;
    if (act === 'years') {
      playUiSfx('click');
      setYear(null);
      rerender({ keepScroll: false });
    } else if (act === 'evaluate' && cur) {
      const ans = picked[cur.id] || {};
      const optQs = cur.questions.map((q, i) => ({ q, i })).filter(({ q }) => hasOptions(q));
      const answered = optQs.filter(({ i }) => ans[i] !== undefined);
      if (!answered.length) {
        toast('Contesta al menos una pregunta antes de pedir evaluación');
        return;
      }
      const total = optQs.length;
      const correct = optQs.filter(({ q, i }) => ans[i] === q.answerIndex).length;
      const pct = Math.round((correct / Math.max(1, total)) * 100);
      store.recordCaseAttempt(cur.id, correct, total);
      evaluated[cur.id] = true;
      taunts.stop();
      const reviewItems = optQs.map(({ q, i }) => ({
        q: q.stem,
        picked: ans[i] !== undefined ? (q.options?.[ans[i]] || '') : 'Sin responder',
        right: q.options?.[q.answerIndex] || answerText(q),
        ok: ans[i] === q.answerIndex,
        exp: q.explanation || '',
      }));
      playCalotEvaluation({
        pct,
        correct,
        total,
        modeLabel: `Caso clínico · ${cur.title}`,
        reviewItems,
        onReplay: () => {
          delete picked[cur.id];
          delete evaluated[cur.id];
          rerender({ keepScroll: false });
        },
        onClose: () => rerender({ keepScroll: true }),
      });
    } else if (act === 'reset' && cur) {
      delete picked[cur.id];
      delete evaluated[cur.id];
      rerender({ keepScroll: true });
    }
  });
}
