import { icon } from '../icons.js?v=20261122a';
import { CATALOGO_RECURSOS as CATALOGO_COMPLETO } from '../data/catalogo_recursos.js?v=20261122a';
import { TEMARIO_APRENDE } from '../data/temario_aprende.js?v=20261122a';
import { render as renderEscalas, mount as mountEscalas } from './escalas.js?v=20261122a';
import { esc } from '../ui.js';
import { store } from '../store.js?v=20261122a';
import { playUiSfx } from '../fx/audio.js?v=20261122a';
import { queueSubPortal, consumeQueuedSubPortal, playSubPortal } from '../fx/portal.js?v=20261122a';
import * as S from '../scroll.js';

export const section = 'atlas';

const CATALOGO_RECURSOS = CATALOGO_COMPLETO.filter((r) => r.subtype !== 'puem_pack');

let activeCategory = 'todos'; // 'todos' | '3d' | 'algoritmos' | 'casos' | 'guias' | 'escalas'
let activeTopicFilter = 'todos';
let searchQuery = '';
let selectedResourceId = null;
let originFrom = null; // e.g. 'aprende:colon' or 'repasa:estomago'

// State for interactive decision tree traversal
const treeNodeState = {}; // { [resId]: currentNodeId }
let revealHospitalCaseDx = false;
let pdfSearchQuery = '';

const escalasCount = CATALOGO_RECURSOS.filter((r) => r.type === 'escalas').length; // se calcula del catálogo, no es fijo
const CAT_META = [
  { id: 'todos', num: '00', label: 'Todos los Recursos', short: 'Todos', sub: 'Catálogo maestro unificado', iconName: 'layers', color: 'var(--atlas)' },
  { id: '3d', num: '01', label: 'Modelos 3D, Tiempos Qx y Variantes', short: 'Modelos 3D & Qx', sub: 'Anatomía Three.js y pasos', iconName: 'cube', color: '#3ee0ff' },
  { id: 'algoritmos', num: '02', label: 'Algoritmos y Tablas Oficiales', short: 'Algoritmos', sub: 'Árboles de decisión rápida', iconName: 'sparkle', color: '#f5c84b' },
  { id: 'casos', num: '03', label: 'Casos Clínicos', short: 'Casos Clínicos', sub: 'Resolución guiada de piso', iconName: 'scalpel', color: '#ff5fae' },
  { id: 'guias', num: '04', label: 'Guías, Artículos y 157 Textos', short: 'Guías y Textos', sub: 'GPC, consensos y PDFs', iconName: 'book', color: '#8b5cf6' },
  { id: 'escalas', num: '05', label: `${escalasCount} Escalas y Calculadoras Clínicas`, short: `${escalasCount} Escalas`, sub: 'Scores quirúrgicos en vivo', iconName: 'calc', color: '#3dff8a' },
];

// Indicador de progreso de las piezas del atlas (lo escribe el listener de postMessage de mount)
function atlasChip(id) {
  const p = store.state.atlasProgress?.[id];
  if (!p?.opened) return '';
  let txt = 'Abierto';
  if (p.completed) txt = `✓ Completado${typeof p.best === 'number' ? ` · ${Math.round(p.best * 100)} %` : ''}`;
  else if (p.step > 0 && p.total > 0) txt = `En progreso · ${p.step}/${p.total}`;
  return `<span class="chip mono" style="margin-top:8px;font-size:.7rem;color:var(--cyan);border-color:var(--cyan)">${esc(txt)}</span>`;
}

function renderSelectedResource(res) {
  if (!res) return '';
  let backFromBtn = '';
  if (originFrom) {
    const [sec, tid] = originFrom.split(':');
    const secLabel = sec === 'repasa' ? 'Repasa' : 'Aprende';
    const targetHref = sec === 'repasa' ? `#/repasa?tema=${encodeURIComponent(tid || 'piel')}` : `#/aprende?tema=${encodeURIComponent(tid || 'piel')}`;
    backFromBtn = `
      <a href="${targetHref}" class="btn btn-sm btn-glow" style="--c:var(--cyan)">
        ← Volver a ${secLabel} (${esc(tid || '')})
      </a>`;
  }

  let bodyHtml = '';

  if (res.subtype === 'threejs' || res.subtype === 'atlas_html') {
    bodyHtml = `
      <div style="display:flex;flex-direction:column;gap:14px">
        <div style="position:relative;width:100%;height:560px;border-radius:14px;overflow:hidden;border:1px solid rgba(62,224,255,.3);background:var(--surface-deep)">
          <iframe src="${esc(res.url)}" title="${esc(res.title)}" style="width:100%;height:100%;border:0" loading="lazy"></iframe>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${(res.highlights || []).map((h) => `<span class="chip" style="font-size:.78rem">★ ${esc(h)}</span>`).join('')}
          </div>
          <a href="${esc(res.url)}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">${icon('cube')} Abrir en pantalla completa ↗</a>
        </div>
      </div>`;
  } else if (res.subtype === 'surgical_steps') {
    bodyHtml = `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:18px">
        <div>
          <p class="mono" style="color:var(--cyan);font-size:.76rem;margin:0 0 10px">TIEMPOS QUIRÚRGICOS PASO A PASO (${(res.steps || []).length} FASES CRÍTICAS)</p>
          <div style="display:flex;flex-direction:column;gap:12px">
            ${(res.steps || []).map((st) => `
              <div class="glass" style="padding:14px 16px;border-radius:12px;border-left:3px solid var(--cyan)">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px">
                  <strong style="font-size:.96rem">${esc(st.step)}</strong>
                  <span class="chip" style="font-size:.68rem">${esc(st.instrument || 'Instrumental')}</span>
                </div>
                <p style="margin:0 0 8px;font-size:.9rem;line-height:1.55">${esc(st.detail)}</p>
                <div style="padding:8px 10px;border-radius:8px;background:rgba(255,59,78,.12);border:1px solid rgba(255,59,78,.3);font-size:.82rem">
                  <strong style="color:#ff3b4e">⚠ Error crítico a evitar:</strong> ${esc(st.pitfall)}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <p class="mono" style="color:#f5c84b;font-size:.76rem;margin:0 0 10px">VARIANTES ANATÓMICAS QUIRÚRGICAS (${(res.variants || []).length} VARIANTES DE RIESGO)</p>
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:18px">
            ${(res.variants || []).map((v) => `
              <div class="glass" style="padding:13px 15px;border-radius:12px;border-left:3px solid #f5c84b">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px">
                  <strong style="color:#f5c84b">${esc(v.name)}</strong>
                  <span class="chip" style="font-size:.68rem">${esc(v.prevalence || 'Variante')}</span>
                </div>
                <p style="margin:0 0 6px;font-size:.86rem;line-height:1.5"><strong>Riesgo quirúrgico:</strong> ${esc(v.danger || v.description || '')}</p>
                ${v.conduct ? `<p style="margin:0;font-size:.84rem;color:#2bd27a"><strong>Conducta segura:</strong> ${esc(v.conduct)}</p>` : ''}
              </div>
            `).join('')}
          </div>

          ${res.outline?.length ? `
            <div class="glass" style="padding:14px 16px;border-radius:12px">
              <p class="mono" style="font-size:.74rem;color:var(--c-muted);margin:0 0 8px">LISTA DE VERIFICACIÓN TRANSOPERATORIA (CHECKLIST):</p>
              <ol style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:6px;font-size:.86rem;line-height:1.45">
                ${res.outline.map((item) => `<li>${esc(item)}</li>`).join('')}
              </ol>
            </div>
          ` : ''}
        </div>
      </div>`;
  } else if (res.subtype === 'classification_table') {
    bodyHtml = `
      <div style="overflow-x:auto">
        <table class="calot-table" style="width:100%;border-collapse:collapse;font-size:.9rem">
          <thead>
            <tr>
              ${(res.headers || []).map((h) => `<th style="text-align:left;padding:12px 14px;border-bottom:2px solid rgba(62,224,255,.35);color:var(--cyan)">${esc(h)}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${(res.rows || []).map((r) => `
              <tr>
                ${r.map((cell, idx) => `<td style="padding:11px 14px;border-bottom:1px solid rgba(255,255,255,.08);vertical-align:top;${idx === 0 ? 'font-weight:700;color:#f5c84b;white-space:nowrap' : ''}">${esc(cell)}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`;
  } else if (res.subtype === 'step_algorithm') {
    bodyHtml = `
      <div style="display:flex;flex-direction:column;gap:12px">
        ${(res.steps || []).map((st, idx) => `
          <div class="glass" style="padding:14px 18px;border-radius:12px;border-left:4px solid #f5c84b;display:flex;gap:14px;align-items:flex-start">
            <span class="chip" style="font-weight:700;color:#f5c84b">PASO ${idx + 1}</span>
            <div style="flex:1">
              <strong style="font-size:1rem;display:block;margin-bottom:4px">${esc(st.nodo || st.title || `Fase ${idx + 1}`)}</strong>
              <p style="margin:0;font-size:.92rem;line-height:1.55">${esc(st.conducta || st.detail || '')}</p>
            </div>
          </div>
        `).join('')}
      </div>`;
  } else if (res.subtype === 'decision_tree') {
    const tree = res.tree || {};
    const nodes = tree.nodes || [];
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));
    const curNodeId = treeNodeState[res.id] || tree.start || nodes[0]?.id;
    const curNode = nodeMap.get(curNodeId) || nodes[0];

    bodyHtml = `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:18px">
        <div class="glass" style="padding:20px;border-radius:14px;border:1.5px solid var(--cyan)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <span class="mono" style="color:var(--cyan);font-size:.75rem">SIMULADOR INTERACTIVO DE TOMA DE DECISIONES</span>
            <button type="button" class="btn btn-sm btn-ghost" data-tree-reset="${esc(res.id)}">${icon('refresh')} Reiniciar al inicio</button>
          </div>
          ${curNode ? `
            <span class="chip" style="margin-bottom:8px">Nodo: ${esc(curNode.id)}</span>
            <h3 style="margin:4px 0 10px;font-size:1.2rem">${esc(curNode.label || curNode.title || '')}</h3>
            ${curNode.detail ? `<p style="margin:0 0 16px;font-size:.94rem;line-height:1.6">${esc(curNode.detail)}</p>` : ''}
            ${curNode.options?.length ? `
              <p class="mono muted" style="font-size:.74rem;margin:0 0 8px">ELIGE LA RAMA CLÍNICA PARA AVANZAR:</p>
              <div style="display:flex;flex-direction:column;gap:8px">
                ${curNode.options.map((opt) => `
                  <button type="button" class="btn btn-ghost" data-tree-res="${esc(res.id)}" data-tree-next="${esc(opt.next)}" style="justify-content:space-between;text-align:left">
                    <span>${esc(opt.label)}</span>
                    <span class="mono" style="color:var(--cyan)">→</span>
                  </button>
                `).join('')}
              </div>
            ` : `
              <div style="padding:12px;border-radius:10px;background:rgba(43,210,122,.16);border:1px solid #2bd27a;color:#2bd27a;font-weight:600">
                ✓ Conducta final alcanzada. Usa "Reiniciar al inicio" para explorar otra rama.
              </div>
            `}
          ` : ''}
        </div>

        <div class="glass" style="padding:18px;border-radius:14px;max-height:460px;overflow-y:auto">
          <p class="mono" style="font-size:.74rem;color:var(--c-muted);margin:0 0 10px">MAPA COMPLETO DE NODOS DEL ALGORITMO (${nodes.length})</p>
          <div style="display:flex;flex-direction:column;gap:8px">
            ${nodes.map((n) => `
              <div style="padding:10px 12px;border-radius:9px;background:${n.id === curNode?.id ? 'rgba(62,224,255,.14)' : 'rgba(255,255,255,.03)'};border:1px solid ${n.id === curNode?.id ? 'var(--cyan)' : 'rgba(255,255,255,.06)'}">
                <strong style="font-size:.88rem;display:block">${esc(n.label || n.id)}</strong>
                ${n.detail ? `<span class="muted" style="font-size:.8rem">${esc(n.detail)}</span>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>`;
  } else if (res.subtype === 'hospital_case') {
    const ps = res.patientState || {};
    bodyHtml = `
      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="glass" style="padding:16px 18px;border-radius:12px;border-left:4px solid #ff5fae">
          <span class="mono" style="color:#ff5fae;font-size:.74rem">MOTIVO DE CONSULTA Y PRESENTACIÓN INICIAL</span>
          <h4 style="margin:4px 0 8px;font-size:1.1rem">${esc(res.chiefComplaint)}</h4>
          <p style="margin:0;line-height:1.6;font-size:.95rem">${esc(res.presentation)}</p>
        </div>

        ${Object.keys(ps).length ? `
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            ${Object.entries(ps).map(([k, v]) => `<span class="chip"><strong>${esc(k)}:</strong>&nbsp;${esc(typeof v === 'object' ? JSON.stringify(v) : String(v))}</span>`).join('')}
          </div>
        ` : ''}

        <div style="display:flex;justify-content:space-between;align-items:center">
          <span class="mono" style="font-size:.76rem;color:var(--cyan)">PIENSA TU DIAGNÓSTICO Y CONDUCTA ANTES DE REVELAR:</span>
          <button type="button" class="btn btn-sm btn-glow" data-act="toggle-hosp-dx">
            ${revealHospitalCaseDx ? 'Ocultar resolución' : 'Revelar Diagnóstico y Manejo Quirúrgico'}
          </button>
        </div>

        ${revealHospitalCaseDx ? `
          <div class="glass" style="padding:18px;border-radius:12px;border:1.5px solid #2bd27a;background:rgba(43,210,122,.08)">
            <h4 style="margin:0 0 10px;color:#2bd27a">Diagnóstico Definitivo: ${esc(res.diagnosis)}</h4>
            ${res.criticalActions?.length ? `
              <p class="mono" style="font-size:.74rem;margin:8px 0 6px">ACCIONES CRÍTICAS INMEDIATAS:</p>
              <ul style="margin:0 0 12px;padding-left:18px;line-height:1.55">
                ${res.criticalActions.map((ca) => `<li>${esc(typeof ca === 'string' ? ca : JSON.stringify(ca))}</li>`).join('')}
              </ul>
            ` : ''}
            ${res.expectedManagement?.length ? `
              <p class="mono" style="font-size:.74rem;margin:8px 0 6px">MANEJO QUIRÚRGICO ESPERADO:</p>
              <ul style="margin:0;padding-left:18px;line-height:1.55">
                ${res.expectedManagement.map((em) => `<li>${esc(typeof em === 'string' ? em : JSON.stringify(em))}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        ` : ''}
      </div>`;
  } else if (res.subtype === 'guideline_summary') {
    bodyHtml = `
      <div style="display:flex;flex-direction:column;gap:14px">
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <span class="chip">Organización: <strong>${esc(res.org || 'Internacional')}</strong></span>
          <span class="chip">Edición: <strong>${esc(res.year || 'Vigente')}</strong></span>
        </div>
        <div class="glass" style="padding:18px 20px;border-radius:14px;border-left:4px solid #8b5cf6">
          <p class="mono" style="font-size:.75rem;color:#8b5cf6;margin:0 0 10px">RECOMENDACIONES Y CRITERIOS DE ALTO IMPACTO QUIRÚRGICO:</p>
          <ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:10px;font-size:.95rem;line-height:1.6">
            ${(res.keyRecommendations || []).map((rec) => `<li>${esc(rec)}</li>`).join('')}
          </ul>
        </div>
      </div>`;
  } else if (res.subtype === 'pdf_catalog') {
    const items = (res.items || []).filter((it) => {
      if (!pdfSearchQuery.trim()) return true;
      return (it.title + ' ' + it.module + ' ' + it.source).toLowerCase().includes(pdfSearchQuery.toLowerCase());
    });
    bodyHtml = `
      <div style="display:flex;flex-direction:column;gap:18px">
        <div>
          <p class="mono" style="color:var(--cyan);font-size:.76rem;margin:0 0 10px">ENSAYOS CLÍNICOS QUIRÚRGICOS PARADIGMÁTICOS (LANDMARK TRIALS)</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px">
            ${(res.articles || []).map((art) => `
              <div class="glass" style="padding:14px;border-radius:12px;border-left:3px solid var(--cyan)">
                <span class="mono" style="font-size:.7rem;color:var(--cyan)">${esc(art.journal)}</span>
                <h4 style="margin:4px 0 6px;font-size:.95rem">${esc(art.title)}</h4>
                <p class="muted" style="margin:0;font-size:.85rem;line-height:1.5">${esc(art.takeaway)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px">
            <span class="mono" style="color:#8b5cf6;font-size:.76rem">ÍNDICE DE 157 CAPÍTULOS Y GUÍAS DE REFERENCIA (${items.length} MOSTRADOS)</span>
            <input class="input" type="search" data-pdf-search placeholder="Filtrar entre los 157 textos…" value="${esc(pdfSearchQuery)}" style="width:240px;padding:6px 12px;font-size:.84rem">
          </div>
          <div style="max-height:420px;overflow-y:auto;border:1px solid rgba(255,255,255,.08);border-radius:12px">
            <table style="width:100%;border-collapse:collapse;font-size:.85rem">
              <thead>
                <tr style="background:rgba(255,255,255,.05)">
                  <th style="text-align:left;padding:10px 12px">Título del Capítulo / Guía</th>
                  <th style="text-align:left;padding:10px 12px">Módulo / Año</th>
                  <th style="text-align:left;padding:10px 12px">Páginas</th>
                </tr>
              </thead>
              <tbody>
                ${items.map((it) => `
                  <tr style="border-top:1px solid rgba(255,255,255,.06)">
                    <td style="padding:8px 12px"><strong>${esc(it.title)}</strong></td>
                    <td style="padding:8px 12px"><span class="chip" style="font-size:.68rem">${esc(it.module)}</span></td>
                    <td style="padding:8px 12px" class="mono muted">${it.pages || '—'} págs</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
  } else if (res.subtype === 'calculator') {
    bodyHtml = `<div class="embedded-escalas-wrap">${renderEscalas()}</div>`;
  }

  return `
  <section class="card resource-inspector" style="padding:22px;margin-bottom:24px;border:1.5px solid var(--cyan);--c:var(--cyan)">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.1)">
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap">
          <span class="chip" style="color:var(--cyan);border-color:var(--cyan)">${esc(res.badge || res.type)}</span>
          <span class="chip">${esc(res.tag || 'Cirugía General')}</span>
          <span data-atlas-status="${esc(res.id)}">${atlasChip(res.id)}</span>
          <a href="#/aprende?tema=${encodeURIComponent(res.topicId || 'piel')}" class="mono" style="font-size:.75rem;color:var(--cuaderno);text-decoration:none">Ir a Aprende (${esc(res.topicId)}) →</a>
          <a href="#/repasa?tema=${encodeURIComponent(res.topicId || 'piel')}" class="mono" style="font-size:.75rem;color:var(--repaso);text-decoration:none">Ir a Repasa (${esc(res.topicId)}) →</a>
        </div>
        <h2 style="margin:0 0 4px;font-size:1.4rem">${esc(res.title)}</h2>
        <p class="muted" style="margin:0;font-size:.9rem">${esc(res.subtitle || '')}</p>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${backFromBtn}
        <button type="button" class="btn btn-sm btn-ghost" data-act="close-resource">${icon('close')} Cerrar visor</button>
      </div>
    </div>
    ${bodyHtml}
  </section>`;
}

export function render(params = {}) {
  if (params.id) {
    selectedResourceId = params.id;
  }
  if (params.from) {
    originFrom = params.from;
  }
  if (params.cat && CAT_META.some((c) => c.id === params.cat)) {
    activeCategory = params.cat;
  }
  if (params.tema) {
    activeTopicFilter = params.tema;
  }

  const selectedRes = selectedResourceId
    ? CATALOGO_RECURSOS.find((r) => r.id === selectedResourceId) || null
    : null;

  const filtered = CATALOGO_RECURSOS.filter((r) => {
    if (activeCategory !== 'todos' && r.type !== activeCategory) return false;
    if (activeTopicFilter !== 'todos' && r.topicId !== activeTopicFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (r.title + ' ' + (r.subtitle || '') + ' ' + (r.tag || '') + ' ' + (r.badge || '')).toLowerCase().includes(q);
    }
    return true;
  });

  const countByCat = (cid) => cid === 'todos' ? CATALOGO_RECURSOS.length : CATALOGO_RECURSOS.filter((r) => r.type === cid).length;

  return `
<div class="recursos-view">
  <header class="page-head wing-hero is-recursos" data-wing-enter>
    <div class="wing-top-bar">
      <span class="mono wing-badge">WING 04 · BÓVEDA ANATÓMICA &amp; CLÍNICA</span>
      <div class="wing-top-actions">
        <span class="mono wing-live-pill"><i class="wing-dot" aria-hidden="true"></i>${CATALOGO_RECURSOS.length} recursos interactivos</span>
        <button type="button" class="btn btn-sm btn-ghost wing-replay-btn" data-replay-portal="recursos">${icon('play')} Intro 10s</button>
      </div>
    </div>
    <div class="wing-main-row wing-main-split">
      <div>
        <h1>Bóveda de <em>Recursos</em></h1>
        <p class="wing-lead">Entorno anatómico y clínico unificado: modelos 3D interactivos, tiempos quirúrgicos, algoritmos oficiales, casos, guías y las ${escalasCount} escalas y calculadoras.</p>
      </div>
      <div class="vault-search-box">
        <input class="input" type="search" data-res-search placeholder="Buscar modelo 3D, escala, guía, caso…" value="${esc(searchQuery)}">
        <div class="vault-quick-counts mono">
          <span><strong>${countByCat('3d')}</strong> 3D &amp; Qx</span>
          <span><strong>${countByCat('algoritmos')}</strong> Algoritmos</span>
          <span><strong>${countByCat('casos')}</strong> Casos</span>
          <span><strong>14</strong> Escalas</span>
        </div>
      </div>
    </div>
  </header>

  <!-- VISOR INTERACTIVO DEL RECURSO SELECCIONADO (O DEEP-LINKED DESDE APRENDE / REPASA) -->
  ${selectedRes ? renderSelectedResource(selectedRes) : ''}

  <!-- DOCK DE CATEGORÍAS DE LA BÓVEDA -->
  <section class="vault-dock-wrap" data-wing-enter>
    <div class="arcade-deck-head">
      <span class="mono wing-kicker">BÓVEDAS TEMÁTICAS · SELECCIONA UNA SALA</span>
      <span class="mono wing-subnote">${filtered.length} visibles</span>
    </div>
    <div class="vault-dock" role="tablist" aria-label="Categorías de la bóveda">
      ${CAT_META.map((c) => {
        const isOn = activeCategory === c.id;
        return `
        <button type="button" class="vault-tile ${isOn ? 'is-on' : ''}" data-res-cat="${esc(c.id)}" role="tab" aria-selected="${isOn ? 'true' : 'false'}" style="--vc:${c.color}">
          <span class="vault-tile-top">
            <span class="mono vault-num">${c.num}</span>
            <span class="mono vault-count">${countByCat(c.id)}</span>
          </span>
          <span class="vault-tile-ic">${icon(c.iconName)}</span>
          <span class="vault-tile-lbl">${esc(c.short)}</span>
          <span class="vault-tile-sub">${esc(c.sub)}</span>
        </button>`;
      }).join('')}
    </div>
  </section>

  <!-- FILTRO POR BLOQUE QUIRÚRGICO -->
  <div class="vault-topics-rail" data-wing-enter>
    <span class="mono muted" style="font-size:.74rem;margin-right:4px">BLOQUE:</span>
    <button type="button" class="chip" data-res-topic="todos" style="cursor:pointer;border-color:${activeTopicFilter === 'todos' ? 'var(--cyan)' : 'rgba(255,255,255,.1)'};color:${activeTopicFilter === 'todos' ? 'var(--cyan)' : 'inherit'}">Todos (${CATALOGO_RECURSOS.length})</button>
    ${TEMARIO_APRENDE.map((t) => `
      <button type="button" class="chip" data-res-topic="${esc(t.id)}" style="cursor:pointer;border-color:${activeTopicFilter === t.id ? t.color : 'rgba(255,255,255,.1)'};color:${activeTopicFilter === t.id ? t.color : 'inherit'}">
        ${esc(t.num)}. ${esc(t.title.split(' ')[0])}
      </button>
    `).join('')}
  </div>

  <!-- SI LA CATEGORÍA ES ESCALAS Y NO HAY UN RECURSO ESPECÍFICO ABIERTO, MOSTRAR TAMBIÉN LAS 14 CALCULADORAS EN VIVO -->
  ${activeCategory === 'escalas' && !selectedRes ? `
    <div class="embedded-escalas-wrap" data-wing-enter style="margin-bottom:24px">${renderEscalas()}</div>
  ` : ''}

  <!-- CUADRÍCULA DE TARJETAS DE RECURSOS -->
  <div class="vault-grid" data-wing-enter style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px">
    ${filtered.map((r) => {
      const isSelected = r.id === selectedResourceId;
      const typeColors = { '3d': '#3ee0ff', algoritmos: '#f5c84b', casos: '#ff5fae', guias: '#8b5cf6', escalas: '#3dff8a' };
      const col = typeColors[r.type] || 'var(--atlas)';
      return `
      <article class="card resource-card" data-open-res="${esc(r.id)}" style="--c:${col};cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;gap:12px;border:${isSelected ? `1.5px solid ${col}` : '1px solid rgba(255,255,255,.08)'}">
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px">
            <span class="chip" style="color:${col};border-color:${col};font-size:.7rem">${esc(r.badge || r.type)}</span>
            <span class="mono muted" style="font-size:.7rem">${esc(r.tag || '')}</span>
          </div>
          <h3 style="margin:0 0 6px;font-size:1.04rem;line-height:1.3">${esc(r.title)}</h3>
          <p class="muted" style="margin:0;font-size:.85rem;line-height:1.45">${esc(r.subtitle || '')}</p>
          <div data-atlas-status="${esc(r.id)}">${atlasChip(r.id)}</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid rgba(255,255,255,.06)">
          <span class="mono" style="font-size:.76rem;color:${col}">Abrir recurso interactivo →</span>
          ${r.url ? `<span class="mono muted" style="font-size:.7rem">3D / HTML</span>` : ''}
        </div>
      </article>`;
    }).join('') || '<article class="card"><p class="muted">No se encontraron recursos con esos filtros.</p></article>'}
  </div>
</div>`;
}

export function mount(root, rerender) {
  const escWrap = root.querySelector('.embedded-escalas-wrap');
  if (escWrap) {
    mountEscalas(escWrap);
  }

  const pendingScene = consumeQueuedSubPortal();
  if (pendingScene) playSubPortal(pendingScene, { rootEl: root, reduced: !S.enabled });

  // Progreso de las piezas del atlas en iframe: {source:'calot-atlas', v:1, id, event, step, total, score}
  const onAtlasMessage = (e) => {
    const d = e.data;
    if (e.origin !== location.origin || !d || d.source !== 'calot-atlas' || d.v !== 1) return;
    if (!['open', 'step', 'complete'].includes(d.event) || !CATALOGO_RECURSOS.some((r) => r.id === d.id)) return;
    store.recordAtlas(d.id, { event: d.event, step: d.step, total: d.total, score: d.score });
    root.querySelectorAll('[data-atlas-status]').forEach((el) => { if (el.dataset.atlasStatus === d.id) el.innerHTML = atlasChip(d.id); });
  };
  window.addEventListener('message', onAtlasMessage);
  S.onCleanup(() => window.removeEventListener('message', onAtlasMessage));

  root.addEventListener('click', (e) => {
    const catBtn = e.target.closest('[data-res-cat]');
    if (catBtn) {
      playUiSfx('click');
      if (catBtn.dataset.resCat !== activeCategory) queueSubPortal(`recursos:${catBtn.dataset.resCat}`);
      activeCategory = catBtn.dataset.resCat;
      selectedResourceId = null;
      rerender({ keepScroll: true });
      return;
    }

    const topBtn = e.target.closest('[data-res-topic]');
    if (topBtn) {
      playUiSfx('click');
      activeTopicFilter = topBtn.dataset.resTopic;
      rerender({ keepScroll: true });
      return;
    }

    const openCard = e.target.closest('[data-open-res]');
    if (openCard) {
      selectedResourceId = openCard.dataset.openRes;
      revealHospitalCaseDx = false;
      rerender({ keepScroll: false });
      return;
    }

    const treeBtn = e.target.closest('[data-tree-next]');
    if (treeBtn) {
      const resId = treeBtn.dataset.treeRes;
      treeNodeState[resId] = treeBtn.dataset.treeNext;
      rerender({ keepScroll: true });
      return;
    }

    const treeReset = e.target.closest('[data-tree-reset]');
    if (treeReset) {
      delete treeNodeState[treeReset.dataset.treeReset];
      rerender({ keepScroll: true });
      return;
    }

    const actBtn = e.target.closest('[data-act]');
    if (!actBtn) return;
    const act = actBtn.dataset.act;
    if (act === 'close-resource') {
      selectedResourceId = null;
      originFrom = null;
      if (location.hash.includes('?')) {
        history.replaceState(null, '', '#/recursos');
      }
      rerender({ keepScroll: true });
    } else if (act === 'toggle-hosp-dx') {
      revealHospitalCaseDx = !revealHospitalCaseDx;
      rerender({ keepScroll: true });
    }
  });

  const searchIn = root.querySelector('[data-res-search]');
  if (searchIn) {
    searchIn.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      rerender({ keepScroll: true });
    });
  }

  const pdfIn = root.querySelector('[data-pdf-search]');
  if (pdfIn) {
    pdfIn.addEventListener('input', (e) => {
      pdfSearchQuery = e.target.value;
      rerender({ keepScroll: true });
    });
  }

  S.scope(root, () => {
    S.reveal(root);
  });
}
