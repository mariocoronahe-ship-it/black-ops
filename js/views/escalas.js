import { icon } from '../icons.js?v=20261122j';
import { esc, placeSeg } from '../ui.js';
import * as S from '../scroll.js';

export const section = 'escalas';

const LOW = 'var(--neon-green)'; const MID = 'var(--escalas)'; const HIGH = 'var(--neon-red)';

/* 14 Validated Surgical Calculators (CALOT-OS × ARGOS-MED) */
const CALCS = [
  {
    id: 'alvarado', title: 'Alvarado', sub: 'Apendicitis aguda (MANTRELS)', ref: 'Alvarado A. Ann Emerg Med 1986;15:557–64.',
    fields: [
      { k: 'm', l: 'Migración del dolor a FID', p: 1 }, { k: 'a', l: 'Anorexia', p: 1 }, { k: 'n', l: 'Náusea / vómito', p: 1 },
      { k: 't', l: 'Dolor a la palpación en FID', p: 2 }, { k: 'r', l: 'Rebote', p: 1 }, { k: 'e', l: 'Temperatura ≥ 37.3 °C', p: 1 },
      { k: 'l', l: 'Leucocitosis > 10,000/mm³', p: 2 }, { k: 's', l: 'Neutrofilia > 75 %', p: 1 },
    ].map((f) => ({ ...f, type: 'check' })),
    compute(v) {
      const s = this.fields.reduce((a, f) => a + (v[f.k] ? f.p : 0), 0);
      const [level, color] = s <= 4 ? ['Baja probabilidad', LOW] : s <= 6 ? ['Equívoca (solicitar USG/TC)', MID] : s <= 8 ? ['Probable apendicitis', HIGH] : ['Muy probable apendicitis', HIGH];
      return { value: s, max: 10, level, color, text: 'Integra con exploración seriada e imagen según guías WSES Jerusalem 2020.' };
    },
  },
  {
    id: 'air', title: 'AIR Score', sub: 'Appendicitis Inflammatory Response (WSES)', ref: 'Andersson M, Andersson RE. World J Surg 2008;32:1843–9.',
    fields: [
      { k: 'vom', l: 'Vómito', type: 'check', p: 1 },
      { k: 'fid', l: 'Dolor en fosa ilíaca derecha', type: 'check', p: 1 },
      { k: 'reb', l: 'Rebote / defensa muscular', type: 'select', opts: [[0, 'Ausente'], [1, 'Leve'], [2, 'Moderado'], [3, 'Severo']] },
      { k: 'feb', l: 'Temperatura ≥ 38.5 °C', type: 'check', p: 1 },
      { k: 'pmn', l: 'Polimorfonucleares (neutrófilos)', type: 'select', opts: [[0, '< 70 %'], [1, '70–84 %'], [2, '≥ 85 %']] },
      { k: 'wbc', l: 'Leucocitos (/mm³)', type: 'select', opts: [[0, '< 10,000'], [1, '10,000–14,900'], [2, '≥ 15,000']] },
      { k: 'crp', l: 'Proteína C Reactiva (mg/L)', type: 'select', opts: [[0, '< 10 mg/L'], [1, '10–49 mg/L'], [2, '≥ 50 mg/L']] },
    ],
    defaults: { reb: 0, pmn: 0, wbc: 0, crp: 0 },
    compute(v) {
      const s = (v.vom ? 1 : 0) + (v.fid ? 1 : 0) + (+v.reb || 0) + (v.feb ? 1 : 0) + (+v.pmn || 0) + (+v.wbc || 0) + (+v.crp || 0);
      const [level, color] = s <= 4 ? ['Riesgo bajo (0–4)', LOW] : s <= 8 ? ['Riesgo intermedio (5–8)', MID] : ['Riesgo alto (9–12)', HIGH];
      return { value: s, max: 12, level, color, text: 'Supera a Alvarado en especificidad al incorporar PCR graduada (WSES 2020).' };
    },
  },
  {
    id: 'tg18_chole', title: 'Tokyo 2018 · Colecistitis', sub: 'Diagnóstico y Severidad TG18', ref: 'Yokoe M, et al. J Hepatobiliary Pancreat Sci 2018;25:41–54.',
    fields: [
      { k: 'h1', l: 'Criterios diagnósticos', type: 'head' },
      { k: 'a', l: 'A · Signo de Murphy o dolor/masa en HCD', type: 'check' },
      { k: 'b', l: 'B · Fiebre, PCR elevada o leucocitosis', type: 'check' },
      { k: 'c', l: 'C · Hallazgo característico en USG / TC', type: 'check' },
      { k: 'h2', l: 'Grado II (Moderada)', type: 'head' },
      { k: 'g2', l: 'Leucocitos > 18k, masa HCD, > 72 h o gangrena/absceso', type: 'check' },
      { k: 'h3', l: 'Grado III (Severa · Disfunción orgánica)', type: 'head' },
      { k: 'g3', l: 'Hipotensión, Cr > 2.0, INR > 1.5, Plaq < 100k, PaO₂/FiO₂ < 300 o glasgow alterado', type: 'check' },
    ],
    compute(v) {
      const dx = (v.a && v.b && v.c) ? 'Dx Definitivo' : (v.a && v.b) ? 'Sospecha Dx' : 'Sin criterios completos';
      const grade = v.g3 ? 3 : v.g2 ? 2 : 1;
      const color = grade === 3 ? HIGH : grade === 2 ? MID : LOW;
      const level = `${dx} · Grado ${['I (Leve)', 'II (Moderada)', 'III (Severa)'][grade - 1]}`;
      return { value: grade, max: 3, level, color, text: grade === 3 ? 'Grado III: soporte orgánico + drenaje vesicular (colecistostomía) o cirugía por experto.' : grade === 2 ? 'Grado II: colecistectomía laparoscópica temprana en centro con experiencia.' : 'Grado I: colecistectomía laparoscópica temprana.' };
    },
  },
  {
    id: 'tg18_cholangitis', title: 'Tokyo 2018 · Colangitis', sub: 'Diagnóstico y Severidad TG18', ref: 'Kiriyama S, et al. J Hepatobiliary Pancreat Sci 2018;25:17–30.',
    fields: [
      { k: 'a', l: 'A · Inflamación sistémica (fiebre/escalofríos o respuesta inflamatoria)', type: 'check' },
      { k: 'b', l: 'B · Colestasis (Bilirrubina ≥ 2 mg/dL o FA/GGT/AST/ALT > 1.5× LSN)', type: 'check' },
      { k: 'c', l: 'C · Imagen biliar (dilatación o evidencia de etiología: lito, estenosis, stent)', type: 'check' },
      { k: 'g2', l: 'Grado II (≥ 2 de: Leu >12k/<4k, Fiebre ≥39°C, Edad ≥75, Bil ≥5 mg/dL, Hipoalbuminemia)', type: 'check' },
      { k: 'g3', l: 'Grado III (Disfunción orgánica: choque, mental, PaO₂/FiO₂ <300, Cr >2.0, INR >1.5, Plaq <100k)', type: 'check' },
    ],
    compute(v) {
      const dx = (v.a && v.b && v.c) ? 'Dx Definitivo' : (v.a && (v.b || v.c)) ? 'Sospecha Dx' : 'Incompleto';
      const grade = v.g3 ? 3 : v.g2 ? 2 : 1;
      const color = grade === 3 ? HIGH : grade === 2 ? MID : LOW;
      return { value: grade, max: 3, level: `${dx} · Grado ${['I', 'II', 'III'][grade - 1]}`, color,
        text: grade === 3 ? 'Grado III: descompresión biliar URGENTE (CPRE) + antibiótico y soporte hemodinámico.' : grade === 2 ? 'Grado II: drenaje biliar temprano (< 24 h) + antibiótico.' : 'Grado I: antibiótico IV; drenaje biliar si no responde en 24 h.' };
    },
  },
  {
    id: 'bisap', title: 'BISAP', sub: 'Pancreatitis aguda · primeras 24 h', ref: 'Wu BU, et al. Gut 2008;57:1698–703.',
    fields: [
      { k: 'b', l: 'BUN > 25 mg/dL' }, { k: 'i', l: 'Alteración del estado mental (GCS < 15)' }, { k: 's', l: 'SIRS (≥ 2 criterios)' },
      { k: 'a', l: 'Edad > 60 años' }, { k: 'p', l: 'Derrame pleural en imagen' },
    ].map((f) => ({ ...f, type: 'check', p: 1 })),
    compute(v) {
      const s = this.fields.filter((f) => v[f.k]).length;
      return { value: s, max: 5, level: s >= 3 ? 'Riesgo alto (mortalidad > 5–20 %)' : 'Riesgo bajo (< 1 %)', color: s >= 3 ? HIGH : s === 2 ? MID : LOW,
        text: s >= 3 ? 'Puntaje ≥ 3 se asocia con falla orgánica y necrosis pancreática.' : 'Puntaje < 3: menor riesgo de mortalidad intrahospitalaria.' };
    },
  },
  {
    id: 'ranson', title: 'Ranson', sub: 'Pancreatitis · ingreso + 48 h', ref: 'Ranson JHC, et al. 1974 (no biliar); Ranson 1979 (biliar).',
    fields: [
      { k: 'etio', l: 'Etiología', type: 'seg', opts: ['No biliar', 'Biliar'] },
      { k: 'h', l: 'Al ingreso', type: 'head' },
      { k: 'age', type: 'check', l: (v) => `Edad > ${v.etio === 'Biliar' ? 70 : 55} años` },
      { k: 'wbc', type: 'check', l: (v) => `Leucocitos > ${v.etio === 'Biliar' ? '18,000' : '16,000'}/mm³` },
      { k: 'glu', type: 'check', l: (v) => `Glucosa > ${v.etio === 'Biliar' ? 220 : 200} mg/dL` },
      { k: 'ldh', type: 'check', l: (v) => `LDH > ${v.etio === 'Biliar' ? 400 : 350} UI/L` },
      { k: 'ast', type: 'check', l: () => 'AST > 250 UI/L' },
      { k: 'h2', l: 'A las 48 h', type: 'head' },
      { k: 'hct', type: 'check', l: () => 'Caída del hematocrito > 10 %' },
      { k: 'bun', type: 'check', l: (v) => `Aumento del BUN > ${v.etio === 'Biliar' ? 2 : 5} mg/dL` },
      { k: 'ca', type: 'check', l: () => 'Calcio < 8 mg/dL' },
      { k: 'pao2', type: 'check', l: () => 'PaO₂ < 60 mmHg', only: 'No biliar' },
      { k: 'be', type: 'check', l: (v) => `Déficit de base > ${v.etio === 'Biliar' ? 5 : 4} mEq/L` },
      { k: 'fl', type: 'check', l: (v) => `Secuestro de líquidos > ${v.etio === 'Biliar' ? 4 : 6} L` },
    ],
    defaults: { etio: 'No biliar' },
    compute(v) {
      const s = this.fields.filter((f) => f.type === 'check' && (!f.only || f.only === v.etio) && v[f.k]).length;
      const max = v.etio === 'Biliar' ? 10 : 11;
      return { value: s, max, level: s >= 3 ? 'Pancreatitis grave' : 'Pancreatitis leve', color: s >= 3 ? HIGH : LOW,
        text: 'Ranson ≥ 3 predice pancreatitis severa. Complementa con Atlanta revisada 2012 (Marshall).' };
    },
  },
  {
    id: 'atlanta', title: 'Atlanta 2012', sub: 'Severidad de Pancreatitis Aguda', ref: 'Banks PA, et al. Gut 2013;62:102–11.',
    fields: [
      { k: 'local', l: 'Complicación local (colección aguda, necrosis, pseudoquiste) o sistémica', type: 'check' },
      { k: 'fo_trans', l: 'Falla orgánica transitoria (resuelve en < 48 h; Marshall ≥ 2)', type: 'check' },
      { k: 'fo_pers', l: 'Falla orgánica PERSISTENTE (> 48 h: respiratoria, renal o cardiovascular)', type: 'check' },
    ],
    compute(v) {
      const g = v.fo_pers ? 3 : (v.local || v.fo_trans) ? 2 : 1;
      const [level, color] = g === 3 ? ['Grave (Falla > 48 h)', HIGH] : g === 2 ? ['Moderadamente grave', MID] : ['Leve', LOW];
      return { value: g, max: 3, level, color, text: g === 3 ? 'Falla orgánica persistente > 48 h define Pancreatitis Aguda Grave; requiere manejo en unidad crítica.' : g === 2 ? 'Falla transitoria (< 48 h) o complicación local/sistémica sin falla persistente.' : 'Sin falla orgánica ni complicaciones locales.' };
    },
  },
  {
    id: 'qsofa', title: 'qSOFA', sub: 'Sepsis fuera de UCI (Sepsis-3)', ref: 'Seymour CW, et al. JAMA 2016;315:762–74.',
    fields: [
      { k: 'rr', l: 'Frecuencia respiratoria ≥ 22/min' }, { k: 'ms', l: 'Alteración del estado mental (GCS < 15)' }, { k: 'sbp', l: 'Presión sistólica ≤ 100 mmHg' },
    ].map((f) => ({ ...f, type: 'check', p: 1 })),
    compute(v) {
      const s = this.fields.filter((f) => v[f.k]).length;
      return { value: s, max: 3, level: s >= 2 ? 'Alto riesgo séptico' : 'Bajo riesgo', color: s >= 2 ? HIGH : s === 1 ? MID : LOW,
        text: s >= 2 ? '≥ 2 puntos identifica mayor riesgo de mortalidad; evalúa SOFA completo y lactato.' : 'Un qSOFA < 2 no descarta sepsis.' };
    },
  },
  {
    id: 'sirs', title: 'SIRS', sub: 'Respuesta Inflamatoria Sistémica', ref: 'Bone RC, et al. Chest 1992;101:1644–55.',
    fields: [
      { k: 't', l: 'Temperatura > 38.0 °C o < 36.0 °C' },
      { k: 'hr', l: 'Frecuencia cardíaca > 90 lpm' },
      { k: 'rr', l: 'Frecuencia respiratoria > 20 rpm o PaCO₂ < 32 mmHg' },
      { k: 'wbc', l: 'Leucocitos > 12,000/mm³, < 4,000/mm³ o > 10 % bandas' },
    ].map((f) => ({ ...f, type: 'check', p: 1 })),
    compute(v) {
      const s = this.fields.filter((f) => v[f.k]).length;
      return { value: s, max: 4, level: s >= 2 ? 'SIRS Positivo (≥ 2)' : 'SIRS Negativo', color: s >= 2 ? HIGH : LOW,
        text: '≥ 2 criterios definen SIRS (componente clave de BISAP y TG18).' };
    },
  },
  {
    id: 'gcs', title: 'Glasgow', sub: 'Escala de Coma (TCE / Neuro)', ref: 'Teasdale G, Jennett B. Lancet 1974;2:81–4.',
    fields: [
      { k: 'o', l: 'Apertura ocular', type: 'select', opts: [[4, 'Espontánea'], [3, 'Al estímulo verbal'], [2, 'Al dolor'], [1, 'Ninguna']] },
      { k: 'v', l: 'Respuesta verbal', type: 'select', opts: [[5, 'Orientado'], [4, 'Confuso'], [3, 'Palabras inapropiadas'], [2, 'Sonidos incomprensibles'], [1, 'Ninguna']] },
      { k: 'm', l: 'Respuesta motora', type: 'select', opts: [[6, 'Obedece órdenes'], [5, 'Localiza el dolor'], [4, 'Retira al dolor'], [3, 'Flexión anormal (decorticación)'], [2, 'Extensión (descerebración)'], [1, 'Ninguna']] },
    ],
    defaults: { o: 4, v: 5, m: 6 },
    compute(v) {
      const s = +v.o + +v.v + +v.m;
      const [level, color] = s <= 8 ? ['TCE grave (Intubar)', HIGH] : s <= 12 ? ['TCE moderado', MID] : ['TCE leve', LOW];
      return { value: s, max: 15, min: 3, level, color, text: s <= 8 ? 'GCS ≤ 8: indicación de asegurar vía aérea definitiva.' : `Desglose: O${v.o} V${v.v} M${v.m}.` };
    },
  },
  {
    id: 'atls_shock', title: 'Choque ATLS', sub: 'Clasificación de Choque Hemorrágico (10.ª ed.)', ref: 'ATLS 10th ed. American College of Surgeons, 2018.',
    fields: [
      { k: 'loss', l: 'Pérdida hemática estimada / Clínica', type: 'select', opts: [
        [1, 'Clase I · < 15 % (< 750 mL) · FC < 100 · TA normal · Déficit base 0 a -2'],
        [2, 'Clase II · 15–30 % (750–1,500 mL) · FC 100–120 · Presión pulso disminuida · DB -2 a -6'],
        [3, 'Clase III · 31–40 % (1,500–2,000 mL) · FC 120–140 · Hipotensión · DB -6 a -10'],
        [4, 'Clase IV · > 40 % (> 2,000 mL) · FC > 140 · Letargo / Anuria · DB -10 o más'],
      ] },
    ],
    defaults: { loss: 1 },
    compute(v) {
      const cl = +v.loss || 1;
      const color = cl >= 3 ? HIGH : cl === 2 ? MID : LOW;
      const txt = {
        1: 'Clase I: cristaloide isotónico; no requiere transfusión rutinaria.',
        2: 'Clase II: reanimación con cristaloide; evaluar respuesta hemodinámica.',
        3: 'Clase III: caída de presión sistólica; requiere cristaloides + paquetes globulares y control quirúrgico/angiográfico del sangrado.',
        4: 'Clase IV: amenaza inmediata a la vida; activar Protocolo de Transfusión Masiva (1:1:1) y control quirúrgico inmediato.',
      }[cl];
      return { value: cl, max: 4, level: `Choque Clase ${['I', 'II', 'III', 'IV'][cl - 1]}`, color, text: txt };
    },
  },
  {
    id: 'burns', title: 'Quemaduras', sub: 'Parkland & ATLS · Reanimación 24 h', ref: 'ATLS 10ª ed. (ACS, 2018); Baxter CR. Parkland, 1968.',
    fields: [
      { k: 'f', l: 'Fórmula', type: 'seg', opts: ['ATLS adulto (2 mL)', 'ATLS niño (3 mL)', 'Eléctrica (4 mL)', 'Parkland (4 mL)'] },
      { k: 'kg', l: 'Peso (kg)', type: 'num', min: 1, max: 300, step: 0.5 },
      { k: 'tbsa', l: '% SCQ (2º y 3er grado)', type: 'num', min: 0, max: 100, step: 1 },
    ],
    defaults: { f: 'ATLS adulto (2 mL)', kg: 70, tbsa: 30 },
    compute(v) {
      const mlk = { 'ATLS adulto (2 mL)': 2, 'ATLS niño (3 mL)': 3, 'Eléctrica (4 mL)': 4, 'Parkland (4 mL)': 4 }[v.f];
      const total = Math.round(mlk * (+v.kg || 0) * Math.min(100, +v.tbsa || 0));
      const half = Math.round(total / 2);
      const uo = v.f.includes('niño') ? '1 mL/kg/h (niños < 30 kg)' : v.f.includes('Eléctrica') ? '1–1.5 mL/kg/h' : '0.5 mL/kg/h';
      return { value: total, max: null, unit: 'mL', level: `1ªs 8 h: ${half.toLocaleString('es-MX')} mL (${Math.round(half / 8)} mL/h)`, color: 'var(--neon-cyan)',
        text: `Mitad (${half.toLocaleString('es-MX')} mL) en las primeras 8 h desde la quemadura y ${half.toLocaleString('es-MX')} mL en las siguientes 16 h (${Math.round(half / 16)} mL/h). Titular según uresis (${uo}).` };
    },
  },
  {
    id: 'caprini', title: 'Caprini', sub: 'Riesgo de Tromboembolismo Venoso (TEV)', ref: 'Caprini JA. Dis Mon 2005;51:70–8.',
    fields: [
      { k: 'age', l: 'Edad', type: 'select', opts: [[0, '< 41 años'], [1, '41–60 años (+1)'], [2, '61–74 años (+2)'], [3, '≥ 75 años (+3)']] },
      { k: 'maj', l: 'Cirugía mayor (> 45 min) o laparoscópica mayor', type: 'check', p: 2 },
      { k: 'ca', l: 'Neoplasia maligna activa o previa', type: 'check', p: 2 },
      { k: 'bmi', l: 'IMC > 25 kg/m² o reposo en cama < 72 h', type: 'check', p: 1 },
      { k: 'vte', l: 'Antecedente personal de TVP / TEP o trombofilia', type: 'check', p: 3 },
    ],
    defaults: { age: 1 },
    compute(v) {
      const s = (+v.age || 0) + (v.maj ? 2 : 0) + (v.ca ? 2 : 0) + (v.bmi ? 1 : 0) + (v.vte ? 3 : 0);
      const [level, color] = s === 0 ? ['Muy bajo (0)', LOW] : s <= 2 ? ['Bajo (1–2)', LOW] : s <= 4 ? ['Moderado (3–4)', MID] : ['Alto riesgo (≥ 5)', HIGH];
      return { value: s, max: 11, level, color, text: s >= 5 ? 'Caprini ≥ 5: profilaxis dual (HBPM/enoxaparina + compresión neumática intermitente); considerar 28 días si es cáncer abdominal.' : s >= 3 ? 'Caprini 3–4: profilaxis farmacológica (HBPM) o mecánica.' : 'Deambulación temprana + compresión mecánica.' };
    },
  },
  {
    id: 'asa', title: 'ASA Physical Status', sub: 'Clasificación Preanestésica (ASA I–VI)', ref: 'American Society of Anesthesiologists (ASA), 2020.',
    fields: [
      { k: 'cl', l: 'Estado físico del paciente', type: 'select', opts: [
        [1, 'ASA I · Paciente sano normal'],
        [2, 'ASA II · Enfermedad sistémica leve controlada (HTA/DM sin daño a órgano blanco, IMC 30–39, tabaquismo)'],
        [3, 'ASA III · Enfermedad sistémica grave o limitante (DM/HTA descontrolada, EPOC, IMC ≥ 40, ERC en diálisis)'],
        [4, 'ASA IV · Enfermedad sistémica grave con amenaza constante a la vida (sepsis, choque, IAM < 3 meses)'],
        [5, 'ASA V · Paciente moribundo que no sobrevivirá sin la operación (ruptura AAA, isquemia mesentérica masiva)'],
      ] },
      { k: 'urg', l: 'Cirugía de Urgencia (Sufijo E)', type: 'check' },
    ],
    defaults: { cl: 2, urg: false },
    compute(v) {
      const cl = +v.cl || 1;
      const suf = v.urg ? 'E' : '';
      const color = cl >= 4 ? HIGH : cl === 3 ? MID : LOW;
      return { value: cl, max: 5, level: `ASA ${['I', 'II', 'III', 'IV', 'V'][cl - 1]}${suf}`, color,
        text: `Clasificación preoperatoria ASA ${['I', 'II', 'III', 'IV', 'V'][cl - 1]}${suf} lista para asentar en tu Nota Preoperatoria del HGR 72.` };
    },
  },
];

const state = {};
const valuesOf = (c) => (state[c.id] ||= { ...(c.defaults || {}) });
const label = (f, v) => (typeof f.l === 'function' ? f.l(v) : f.l);

function fieldHtml(c, f, v) {
  if (f.only && f.only !== v.etio) return '';
  if (f.type === 'head') return `<p class="mono calc-head">${f.l}</p>`;
  if (f.type === 'check') return `<label class="check-row"><input type="checkbox" data-k="${f.k}" ${v[f.k] ? 'checked' : ''}><span class="cb" aria-hidden="true"></span><span>${label(f, v)}</span>${f.p > 1 ? `<em>+${f.p}</em>` : ''}</label>`;
  if (f.type === 'select') return `<label class="field">${f.l}<select class="select" data-k="${f.k}">${f.opts.map(([val, t]) => `<option value="${val}" ${+v[f.k] === val ? 'selected' : ''}>${val} · ${t}</option>`).join('')}</select></label>`;
  if (f.type === 'num') return `<label class="field">${f.l}<input class="input" type="number" inputmode="decimal" data-k="${f.k}" min="${f.min}" max="${f.max}" step="${f.step}" value="${v[f.k] ?? ''}"></label>`;
  if (f.type === 'seg') return `<div class="seg calc-seg" data-seg data-k="${f.k}"><span class="seg-ind" aria-hidden="true"></span>${f.opts.map((o) => `<button type="button" class="${v[f.k] === o ? 'on' : ''}" data-val="${esc(o)}">${o}</button>`).join('')}</div>`;
  return '';
}

function resultHtml(r) {
  const R = 46; const C = 2 * Math.PI * R;
  const frac = r.max ? Math.max(0, (r.value - (r.min || 0)) / (r.max - (r.min || 0))) : 1;
  return `
    <div class="calc-ring" style="--c:${r.color}">
      <svg viewBox="0 0 110 110" aria-hidden="true"><circle cx="55" cy="55" r="${R}" class="rg-bg"/><circle cx="55" cy="55" r="${R}" class="rg-fill" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - frac)).toFixed(1)}" transform="rotate(-90 55 55)"/></svg>
      <div class="rg-val"><b>${r.unit ? r.value.toLocaleString('es-MX') : r.value}</b><small>${r.unit || (r.max ? `/ ${r.max}` : '')}</small></div>
    </div>
    <div class="calc-out"><strong class="lamp-text" style="--c:${r.color}">${esc(r.level)}</strong><p>${esc(r.text)}</p></div>`;
}

function calcCard(c) {
  const v = valuesOf(c);
  return `
  <article class="card calc lamp" id="calc-${c.id}" data-calc="${c.id}" data-reveal style="--c:${c.compute(v).color}">
    <header><h3>${c.title}</h3><span class="mono">${c.sub}</span></header>
    <div class="calc-body">
      <div class="calc-fields">${c.fields.map((f) => fieldHtml(c, f, v)).join('')}</div>
      <div class="calc-result" aria-live="polite">${resultHtml(c.compute(v))}</div>
    </div>
    <footer><button class="btn btn-sm btn-ghost" data-reset>Reiniciar</button><span class="ref">${esc(c.ref)}</span></footer>
  </article>`;
}

export function render() {
  return `
<div class="escalas">
  <div class="sticky-bar glass"><strong>14 Escalas Quirúrgicas · CALOT-OS</strong><span class="mono">${CALCS.slice(0, 7).map((c) => `<a href="#calc-${c.id}" data-jump="${c.id}">${c.title}</a>`).join(' · ')}</span></div>
  <header class="page-head">
    <div>
      <p class="mono eyebrow">14 Calculadoras Validadas · ARGOS-MED + HGR 72</p>
      <h1>Decide con <em>números</em></h1>
      <p>Las 14 escalas quirúrgicas en vivo con su interpretación y su fuente original: Alvarado, AIR, TG18 Colecistitis y Colangitis, BISAP, Ranson, Atlanta 2012, qSOFA, SIRS, Glasgow, Choque ATLS, Parkland, Caprini y ASA.</p>
    </div>
  </header>
  <nav class="calc-jump" data-reveal>${CALCS.map((c) => `<a class="chip" href="#calc-${c.id}" data-jump="${c.id}" style="--c:var(--escalas)">${c.title}</a>`).join('')}</nav>
  <div class="calc-grid">${CALCS.map(calcCard).join('')}</div>
</div>`;
}

export function mount(root) {
  const redraw = (card, animate = true) => {
    const c = CALCS.find((x) => x.id === card.dataset.calc); const v = valuesOf(c);
    const r = c.compute(v);
    card.style.setProperty('--c', r.color);
    card.querySelector('.calc-fields').innerHTML = c.fields.map((f) => fieldHtml(c, f, v)).join('');
    card.querySelectorAll('[data-seg]').forEach((s) => placeSeg(s));
    const res = card.querySelector('.calc-result'); res.innerHTML = resultHtml(r);
    if (animate && S.enabled) {
      const g = window.gsap;
      g.fromTo(res.querySelector('.rg-val b'), { scale: 0.7, opacity: 0.3 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(3)' });
      const fill = res.querySelector('.rg-fill'); const off = fill.getAttribute('stroke-dashoffset');
      g.fromTo(fill, { strokeDashoffset: fill.getAttribute('stroke-dasharray') }, { strokeDashoffset: off, duration: 0.8, ease: 'power3.out' });
    }
  };
  root.querySelectorAll('[data-seg]').forEach((s) => placeSeg(s));

  root.addEventListener('change', (e) => {
    const el = e.target.closest('[data-k]'); if (!el) return;
    const card = el.closest('[data-calc]'); const v = valuesOf(CALCS.find((x) => x.id === card.dataset.calc));
    v[el.dataset.k] = el.type === 'checkbox' ? el.checked : el.value;
    redraw(card);
  });
  root.addEventListener('input', (e) => {
    const el = e.target.closest('input[type=number][data-k]'); if (!el) return;
    const card = el.closest('[data-calc]'); const c = CALCS.find((x) => x.id === card.dataset.calc);
    valuesOf(c)[el.dataset.k] = el.value;
    const res = card.querySelector('.calc-result'); res.innerHTML = resultHtml(c.compute(valuesOf(c)));
  });
  root.addEventListener('click', (e) => {
    const segBtn = e.target.closest('[data-seg] [data-val]');
    if (segBtn) {
      const seg = segBtn.closest('[data-seg]'); const card = seg.closest('[data-calc]');
      valuesOf(CALCS.find((x) => x.id === card.dataset.calc))[seg.dataset.k] = segBtn.dataset.val;
      return redraw(card);
    }
    const rs = e.target.closest('[data-reset]');
    if (rs) { const card = rs.closest('[data-calc]'); const c = CALCS.find((x) => x.id === card.dataset.calc); state[c.id] = { ...(c.defaults || {}) }; return redraw(card); }
    const j = e.target.closest('[data-jump]');
    if (j) { e.preventDefault(); const t = root.querySelector('#calc-' + j.dataset.jump); if (S.lenis) S.lenis.scrollTo(t, { offset: -90 }); else t.scrollIntoView({ behavior: 'smooth' }); }
  });

  S.scope(root, (g) => {
    S.compactHeader(root); S.splitReveal(root); S.reveal(root);
    g.utils.toArray('.calc').forEach((card) => {
      const fill = card.querySelector('.rg-fill');
      g.fromTo(fill, { strokeDashoffset: fill.getAttribute('stroke-dasharray') }, { strokeDashoffset: fill.getAttribute('stroke-dashoffset'), duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
    });
  });
}

export { CALCS };
