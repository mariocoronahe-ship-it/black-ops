import { icon } from '../icons.js?v=20261121v';
import { store, questions, inferTopicId } from '../store.js?v=20261121v';
import { TEMARIO_APRENDE } from '../data/temario_aprende.js?v=20261121v';
import { shuffleBlitzItem } from '../casos.js';
import {
  DETECTIVE_CASES,
  QUIROFANO_PROCEDURES,
  EXTRA_BLITZ_QUESTIONS,
  EXTRA_PASE_BEDS,
  EXTRA_LAPBLANCA_CASES,
} from '../data/juegos_argos.js?v=20261121v';
import { DRIVE_V1 } from '../data/juegos_drive_v1.js?v=20261121v';
import { DRIVE_V2 } from '../data/juegos_drive_v2.js?v=20261121v';
import { JUEGOS_NUEVOS } from '../data/juegos_nuevos.js?v=20261121v';
import { canSee } from '../perfil.js?v=20261121v';
import { publishSoon } from '../ranking.js?v=20261121v';
import { esc, toast } from '../ui.js';
import { playUiSfx } from '../fx/audio.js?v=20261121v';
import { playSubPortal } from '../fx/portal.js?v=20261121v';
import { voiceTime } from '../fx/voice.js?v=20261121v';
import { startWaitingTaunts, playCalotEvaluation } from '../fx/eval-cinematic.js?v=20261121v';
import * as S from '../scroll.js';

export const section = 'juegos';

const BASE_BANK = [
  {
    q: '¿Cuáles son los límites anatómicos del Triángulo Hepatocístico (de Calot moderno)?',
    opts: [
      'Conducto cístico, conducto hepático común y borde inferior del hígado',
      'Conducto colédoco, arteria gastroduodenal y borde superior del duodeno',
      'Ligamento redondo, vena porta y arteria hepática propia',
      'Conducto pancreático, vena esplénica y arteria mesentérica superior',
    ],
    ans: 0,
    exp: 'En la definición quirúrgica moderna (Strasberg), el límite superior es el borde inferior del hígado, medial el conducto hepático común y lateral/inferior el conducto cístico.',
  },
  {
    q: 'En Tokyo Guidelines 2018 (TG18), ¿qué valor de INR define disfunción hepática en colecistitis aguda Grado III?',
    opts: ['INR > 1.5', 'INR > 1.2', 'INR > 2.5', 'INR > 3.0'],
    ans: 0,
    exp: 'TG18 clasifica como Grado III (severa) la presencia de disfunción orgánica: INR > 1.5, creatinina > 2.0 mg/dL, plaquetas < 100,000/mm³ o PaO2/FiO2 < 300.',
  },
  {
    q: 'En la clasificación de Hinchey modificada para diverticulitis aguda, ¿qué define al estadio III?',
    opts: [
      'Peritonitis purulenta generalizada',
      'Peritonitis fecal generalizada',
      'Absceso pélvico distante susceptible de drenaje percutáneo',
      'Flemón pericólico sin absceso',
    ],
    ans: 0,
    exp: 'Hinchey III corresponde a peritonitis purulenta generalizada; Hinchey IV a peritonitis fecal.',
  },
  {
    q: 'En una úlcera duodenal posterior sangrante (Forrest Ia), ¿qué arteria suele ser el origen del sangrado masivo?',
    opts: ['Arteria gastroduodenal', 'Arteria gástrica derecha', 'Arteria esplénica', 'Arteria cólica media'],
    ans: 0,
    exp: 'La pared posterior del bulbo duodenal se relaciona íntimamente con la arteria gastroduodenal, rama de la hepática común.',
  },
  {
    q: 'Según la clasificación de Parks, ¿cuál fístula anal asciende por el espacio interesfintérico, rodea por arriba el puborrectal y desciende a través del elevador del ano?',
    opts: ['Supraesfintérica', 'Transesfintérica', 'Extraesfintérica', 'Interesfintérica'],
    ans: 0,
    exp: 'La fístula supraesfintérica tiene origen criptoglandular anal, sube por el plano interesfintérico, rebasa el puborrectal y perfora el elevador del ano.',
  },
  {
    q: '¿Qué estructura anatómica divide las hernias inguinales en directas (mediales) e indirectas (laterales)?',
    opts: ['Vasos epigástricos inferiores', 'Ligamento pectíneo de Cooper', 'Nervio ilioinguinal', 'Tendón conjunto'],
    ans: 0,
    exp: 'El triángulo de Hesselbach tiene como límite lateral los vasos epigástricos inferiores.',
  },
  {
    q: 'En la clasificación de Chicago para Acalasia, ¿cuál subtipo presenta presurización panesofágica y mejor respuesta a la miotomía de Heller?',
    opts: ['Acalasia Tipo II', 'Acalasia Tipo I', 'Acalasia Tipo III (espástica)', 'Espasmo esofágico distal'],
    ans: 0,
    exp: 'La Acalasia Tipo II (con presurización panesofágica) logra las tasas de éxito más altas (> 90–95 %) tras miotomía laparoscópica de Heller + funduplicatura parcial.',
  },
  {
    q: 'En la clasificación de Johnson modificada de úlceras gástricas, ¿cuáles subtipos se asocian a HIPERSECRECIÓN ácida?',
    opts: ['Tipos II y III', 'Tipos I y IV', 'Tipos I y V', 'Solo el Tipo IV (yuxtacardial)'],
    ans: 0,
    exp: 'Las úlceras Tipo II (gástrica + duodenal) y Tipo III (prepilórica) cursan con hipersecreción ácida; las Tipo I, IV y V cursan con hiposecreción.',
  },
  {
    q: '¿Cuál es el factor pronóstico individual más importante en el melanoma maligno cutáneo?',
    opts: ['Espesor de Breslow (en milímetros)', 'Nivel anatómico de Clark', 'Fototipo de Fitzpatrick', 'Diámetro horizontal > 6 mm'],
    ans: 0,
    exp: 'El espesor vertical de invasión en milímetros (Breslow) define los márgenes quirúrgicos y la indicación de biopsia de ganglio centinela.',
  },
  {
    q: '¿Qué estructuras corren peligro en el Triángulo de la Muerte (Triangle of Doom) durante una hernioplastía TAPP/TEP?',
    opts: ['Vasos ilíacos externos (arteria y vena ilíaca externa)', 'Nervio iliohipogástrico e ilioinguinal', 'Arteria mesentérica inferior', 'Conducto torácico'],
    ans: 0,
    exp: 'Entre el conducto deferente (medial) y los vasos espermáticos (lateral) discurren la arteria y vena ilíaca externa; nunca deben colocarse tackers ahí.',
  },
];

const BANK = [
  ...BASE_BANK.map((x, idx) => ({ id: `base-blitz-${String(idx + 1).padStart(2, '0')}`, grade: 'R2', ...x })),
  ...EXTRA_BLITZ_QUESTIONS.map((x, idx) => ({
    id: x.id || `argos-blitz-${idx + 1}`,
    grade: x.grade || 'R2',
    q: x.vignette ? `${x.vignette} ${x.stem}` : x.stem,
    opts: x.opts,
    ans: x.ans,
    exp: x.why,
    tag: x.tag,
  })),
];

// ARGOS-MED Modo: "¿Se opera o no? (Laparotomías Blancas)"
const LAP_BLANCA_CASES = [
  {
    title: 'Interconsulta Urgencias Cama 4 · Trombosis Venosa Mesentérica sin Peritonitis',
    vitals: 'FC 94 lpm · TA 124/76 mmHg · Temp 37.1 °C · Lactato 1.4 mmol/L',
    vig: 'Mujer de 42 años con antecedente de trombofilia (factor V Leiden) y dolor abdominal subagudo de 3 días. Abdomen blando, depresible, doloroso a la palpación profunda pero SIN irritación peritoneal. La Angio-TC muestra trombo en la vena mesentérica superior, engrosamiento edematoso de yeyuno pero con realce mural conservado y sin aire libre.',
    decision: 'NO_OPERAR',
    exp: '¡Evitaste una laparotomía blanca! En trombosis venosa mesentérica SIN datos de peritonitis ni necrosis transmural (WSES 2022), el tratamiento de primera línea es ANTICOAGULACIÓN sistémica inmediata con heparina + reanimación hídrica y vigilancia estrecha.',
  },
  {
    title: 'Interconsulta Urgencias Cama 9 · Vólvulo Cecal Agudo',
    vitals: 'FC 112 lpm · TA 108/68 mmHg · Leucocitos 16,400/mm³',
    vig: 'Mujer de 52 años con distensión asimétrica marcada, dolor cólico intenso y vómito. TC abdominal muestra signo del remolino ("whirl sign") en mesenterio ileocecal y ciego distendido a 11 cm rotado hacia el hipocondrio izquierdo.',
    decision: 'OPERAR',
    exp: '¡Indicación quirúrgica correcta! A diferencia del vólvulo de sigmoides, en el vólvulo cecal la descompresión colonoscópica tiene < 20 % de éxito y alto riesgo de perforación; el tratamiento de elección es quirúrgico (hemicolectomía derecha).',
  },
  {
    title: 'Interconsulta Piso Medicina Interna · Diverticulitis Hinchey II (Absceso Pélvico 5 cm)',
    vitals: 'FC 88 lpm · TA 122/74 mmHg · Temp 38.1 °C · Abdomen sin rebote generalizado',
    vig: 'Hombre de 61 años con dolor en fosa ilíaca izquierda. La TC con contraste IV reporta diverticulitis sigmoidea con absceso pélvico bien delimitado de 5.2 cm (Hinchey II), sin neumoperitoneo libre ni líquido libre generalizado.',
    decision: 'NO_OPERAR',
    exp: '¡Excelente criterio! En diverticulitis Hinchey II con absceso > 4 cm y paciente hemodinámicamente estable sin peritonitis difusa (WSES 2020), el manejo es DRENAJE PERCUTÁNEO guiado por imagen + antibiótico IV, no laparotomía de urgencia.',
  },
  {
    title: 'Interconsulta Choque · Hernia Femoral Derecha Incarcerada con Eritema Cutáneo',
    vitals: 'FC 118 lpm · TA 100/62 mmHg · Leucocitos 17,800/mm³ · Dolor inguinal y oclusión',
    vig: 'Mujer de 74 años con aumento de volumen irreductible por debajo del ligamento inguinal derecho, muy doloroso, con piel suprayacente violácea/eritematosa y niveles hidroaéreos de intestino delgado en la radiografía.',
    decision: 'OPERAR',
    exp: '¡Quirófano inmediato! Toda hernia femoral (Nyhus IIIc) aguda irreductible con cambios inflamatorios locales y oclusión tiene altísimo riesgo de estrangulación intestinal; la taxis está contraindicada y requiere exploración quirúrgica urgente.',
  },
  {
    title: 'Interconsulta Urgencias · Pancreatitis Aguda Biliar Leve sin Colangitis (24 h de ingreso)',
    vitals: 'FC 84 lpm · TA 125/80 mmHg · BISAP 0 · Bilirrubina 1.1 mg/dL · Sin fiebre',
    vig: 'Mujer de 34 años con dolor epigástrico en cinturón y lipasa en 1,450 U/L. USG muestra litiasis vesicular sin dilatación de vía biliar (colédoco 4 mm). Te piden "meterla ya a laparotomía exploradora porque tiene abdomen doloroso".',
    decision: 'NO_OPERAR',
    exp: '¡Salvaste al paciente de una laparotomía innecesaria! La pancreatitis aguda no se opera en fase aguda para "explorar el páncreas". En pancreatitis biliar leve se reanima y, una vez resuelto el dolor y tolerada la vía oral, se realiza colecistectomía laparoscópica en el mismo internamiento.',
  },
  ...EXTRA_LAPBLANCA_CASES.map((c, idx) => ({
    id: c.id || `argos-lb-${idx + 1}`,
    grade: c.grade || 'R2',
    title: `Interconsulta · ${c.title}`,
    vitals: c.idealAction,
    vig: c.vignette,
    decision: c.operar ? 'OPERAR' : 'NO_OPERAR',
    exp: c.why,
  })),
].map((c, idx) => ({ id: c.id || `base-lb-${String(idx + 1).padStart(2, '0')}`, grade: c.grade || 'R2', ...c }));

// ARGOS-MED Modo: "Pase de Visita (Modo Adscrito)"
const PASE_VISITA_CASES = [
  {
    r1: 'R1 presenta en Cama 214: "Adscrito, es un hombre de 48 años con úlcera duodenal posterior Forrest IIa en la endoscopia de anoche. Le inyectaron únicamente adrenalina diluida 1:10,000, ya no sangró y mi plan es dejarlo en ayuno sin IBP y sin segunda modalidad endoscópica."',
    q: 'Como Adscrito / R2, ¿cuál es tu corrección inmediata al plan del R1?',
    opts: [
      'La inyección de adrenalina en monoterapia es INSUFICIENTE en Forrest Ia, Ib y IIa: requiere segunda modalidad (hemoclip o termocoagulación) + IBP en dosis alta.',
      'Felicitar al R1: la adrenalina sola es el estándar definitivo en Forrest IIa.',
      'Suspender la endoscopia y enviar a gastrectomía total inmediata.',
      'Dar de alta hoy mismo con antiácidos masticables.',
    ],
    ans: 0,
    exp: 'Las guías ESGE 2021 y ACG establecen de forma contundente que la adrenalina sola NO debe usarse en monoterapia en lesiones de alto riesgo (Forrest Ia, Ib, IIa); siempre debe combinarse con un método mecánico (clips) o térmico + IBP IV.',
  },
  {
    r1: 'R1 presenta en Cama 219: "Paciente masculino de 64 años con quemadura por fuego directo en el 40 % de SCQ (2.º y 3.er grado), pesa 80 kg. El accidente fue a las 02:00 AM y llegó al HGR 72 a las 06:00 AM (4 horas después). Calculé Parkland (4 × 80 × 40 = 12,800 mL) y le indiqué pasar los primeros 6,400 mL en 8 horas a partir de las 06:00 AM que pisó urgencias."',
    q: '¿Qué error crítico cometió el R1 en la prescripción de líquidos?',
    opts: [
      'La primera mitad del volumen debe administrarse en las primeras 8 horas DESDE LA HORA DE LA QUEMADURA (02:00 AM), por lo que deben pasarse en las 4 horas restantes (06:00 a 10:00 AM) titulando según uresis.',
      'Debió incluir también las zonas de eritema de 1.er grado en el porcentaje de SCQ.',
      'Debió administrar dextrosa al 5 % en agua libre como cristaloide de reanimación.',
      'Ninguno; las 8 horas siempre empiezan cuando se firma la nota de ingreso.',
    ],
    ans: 0,
    exp: 'En ATLS 10.ª ed. y fórmula de Parkland, el reloj de las primeras 8 horas corre desde el momento térmico de la lesión (02:00 AM), no desde la llegada al hospital.',
  },
  {
    r1: 'R1 presenta en Cama 225: "Mujer de 58 años en su día 5 postoperatorio de hemicolectomía derecha; inició con salida de líquido entérico por la herida (180 mL en 24 h). El paciente está afebril, sin datos de peritonitis ni sepsis. Mi plan es meterla hoy mismo a relaparotomía para resecar la fístula."',
    q: 'Como R2/Adscrito, ¿cómo corriges la conducta del R1?',
    opts: [
      'En una fístula enterocutánea de bajo gasto (< 200 mL/d) sin peritonitis generalizada, la cirugía temprana en la ventana de adherencias densas (días 5 a 42) está contraindicada: el manejo es sepsis/piel/nutrición (SNAP) esperando cierre espontáneo.',
      'Aprobar la relaparotomía urgente en el día 5 postoperatorio aunque no tenga peritonitis.',
      'Pinzar el drenaje para que el líquido entérico se acumule dentro de la cavidad.',
      'Suspender todo aporte nutricional por 3 semanas.',
    ],
    ans: 0,
    exp: 'Operar el abdomen entre los días 7–10 y la semana 6 postoperatoria conlleva altísimo riesgo de enterotomías adicionales y abdomen hostil. Sin peritonitis difusa, el protocolo SNAP logra cierre espontáneo en la mayoría de fístulas de bajo gasto.',
  },
  ...EXTRA_PASE_BEDS.map((b, idx) => ({
    id: b.id || `argos-pase-${idx + 1}`,
    grade: b.grade || 'R2',
    r1: `${b.bed} (${b.vitals}) — ${b.r1}`,
    q: b.question,
    opts: b.options,
    ans: b.ans,
    exp: b.why,
  })),
].map((b, idx) => ({ id: b.id || `base-pase-${String(idx + 1).padStart(2, '0')}`, grade: b.grade || 'R2', ...b }));

// ARGOS-MED Modo: "NOCTUA · Simulador Clínico Evolutivo"
const NOCTUA_STEPS = [
  {
    turn: 'TURNO 1 · 23:00 HRS · INGRESO A CHOQUE HGR 72',
    vitals: 'FC 116 lpm · TA 92/58 mmHg · Temp 38.9 °C · Bilirrubina 4.8 mg/dL · Leucocitos 19,200/mm³',
    story: 'Ingresa mujer de 67 años con dolor en hipocondrio derecho, ictericia escleral marcada, fiebre de 38.9 °C con escalofríos y somnolencia leve. USG reporta colédoco dilatado de 12 mm con imagen ecogénica distal con sombra acústica.',
    q: '¿Cuál es tu diagnóstico sindromático e indicación inicial prioritaria en los primeros 30 minutos?',
    opts: [
      'Colangitis aguda severa (Péntada de Reynolds / TG18 Grado III): reanimación con cristaloides IV, hemocultivos, antibiótico IV de amplio espectro inmediato y gestionar drenaje biliar urgente (CPRE).',
      'Colecistitis crónica litiásica: enviar a consulta externa con dieta baja en colecistoquinéticos.',
      'Pasar directo a colecistectomía abierta sin reanimar ni descomprimir la vía biliar.',
      'Solicitar gammagrama HIDA programado para la próxima semana.',
    ],
    ans: 0,
    exp: 'Tiene Tríada de Charcot + hipotensión y alteración neurológica (Péntada de Reynolds = Colangitis TG18 Grado III). La prioridad es reanimación hemodinámica + antibiótico en la primera hora + descompresión biliar urgente.',
  },
  {
    turn: 'TURNO 2 · 01:30 HRS · RESPUESTA A REANIMACIÓN Y DRENAJE',
    vitals: 'FC 96 lpm · TA 108/68 mmHg · Lactato 2.1 mmol/L · Uresis 45 mL/h',
    story: 'Tras cristaloides y piperacilina/tazobactam, mejora la presión arterial. El endoscopista está listo en sala para CPRE.',
    q: 'Durante la CPRE sale pus franco a presión tras la esfinterotomía y extracción del cálculo. ¿Cuál es el objetivo del procedimiento en este momento?',
    opts: [
      'Asegurar el drenaje biliar efectivo (colocación de prótesis biliar plástica / stent si hay edema papilar o litos residuales) con el menor tiempo anestésico posible.',
      'Realizar colecistectomía abierta simultánea a las 02:00 AM en paciente que acaba de salir de choque séptico.',
      'Retirar los antibióticos inmediatamente al terminar la CPRE.',
      'Dejar la vía biliar obstruida y esperar 72 horas.',
    ],
    ans: 0,
    exp: 'En colangitis Grado III, el control de fuente consiste en descomprimir la vía biliar rápidamente (CPRE con esfinterotomía y stent). La colecistectomía definitiva se difiere hasta que el paciente se recupere de la disfunción orgánica.',
  },
  {
    turn: 'TURNO 3 · DÍA 4 DE HOSPITALIZACIÓN · RESOLUCIÓN DE SEPSIS',
    vitals: 'FC 74 lpm · TA 122/76 mmHg · Temp 36.6 °C · Bilirrubina 1.2 mg/dL · Sin vasopresores',
    story: 'La paciente está afebril, sin falla orgánica, tolerando vía oral y con vía biliar limpia tras la CPRE, pero conserva la vesícula con litiasis múltiple.',
    q: '¿Cuál es la conducta definitiva antes del egreso según Tokyo Guidelines 2018?',
    opts: [
      'Programar colecistectomía laparoscópica electiva (con Visión Crítica de Strasberg) de preferencia en el mismo internamiento para prevenir recurrencia de eventos biliares.',
      'Dar de alta definitiva sin operar nunca la vesícula biliar aunque sea joven/apta para cirugía.',
      'Repetir CPRE cada mes de forma indefinida.',
      'Realizar pancreatectomía distal.',
    ],
    ans: 0,
    exp: '¡Caso NOCTUA completado con éxito! Tras resolver la colangitis por CPRE en un paciente con litiasis vesicular y riesgo quirúrgico aceptable, se indica colecistectomía laparoscópica para evitar colecistitis o colangitis recurrente.',
  },
];

// ── Bancos por modo, nivel (Normal / Difícil) y año (R1–R4) ──
// Normal = bancos ARGOS originales (sin año) + juegos-datos.json de Drive; Difícil = versión v2 endurecida.
// Los 6 juegos nuevos vienen de juegos-nuevos-contenido-R1-R4.md. Todo ítem con año respeta canSee().
const GRADES = ['R1', 'R2', 'R3', 'R4'];
const CLASSIC_MODES = ['blitz', 'pase', 'lapblanca', 'detective', 'quirofano', 'noctua'];
const NEW_MODES = ['guardia', 'adscrito', 'algoritmo', 'sepaso', 'duelo', 'imagen'];
const LEVEL_KEY = 'calot:juegos:nivel';
const YEAR_KEY = 'calot:juegos:anio';
const BASE_POOLS = {
  blitz: BANK,
  pase: PASE_VISITA_CASES,
  lapblanca: LAP_BLANCA_CASES,
  detective: DETECTIVE_CASES.map((c, idx) => ({ id: c.id || `argos-det-${idx + 1}`, grade: c.grade || 'R2', ...c })),
  quirofano: QUIROFANO_PROCEDURES.map((p, idx) => ({ id: p.id || `argos-qx-${idx + 1}`, grade: p.grade || 'R2', ...p })),
  noctua: [{ id: 'noctua-base', grade: 'R2', title: 'Colangitis aguda grave · HGR 72', caso: '', steps: NOCTUA_STEPS }],
};
const visibleGrades = () => GRADES.filter((g) => canSee(g));
const normKey = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const dedupePool = (items) => {
  const seenIds = new Set();
  const seenQ = new Set();
  const out = [];
  for (const it of items) {
    if (!it) continue;
    const id = it.id;
    if (id && seenIds.has(id)) continue;
    const qk = it.q ? normKey(`${it.caso || it.r1 || it.vig || ''} ${it.q}`) : '';
    if (qk && seenQ.has(qk)) continue;
    if (id) seenIds.add(id);
    if (qk) seenQ.add(qk);
    out.push(it);
  }
  return out;
};
export function poolFor(mode, level = 'normal', year = 'all') {
  let items;
  if (NEW_MODES.includes(mode)) items = JUEGOS_NUEVOS[mode] || [];
  else if (level === 'dificil') items = DRIVE_V2[mode] || [];
  else items = [...(BASE_POOLS[mode] || []), ...(DRIVE_V1[mode] || [])];
  const safeYear = year !== 'all' && canSee(year) ? year : (year === 'all' ? 'all' : '__blocked__');
  if (safeYear === '__blocked__') return [];
  return dedupePool(items).filter((it) => {
    const g = it.grade || 'R2';
    return canSee(g) && (safeYear === 'all' || g === safeYear);
  });
}
const SHUF = new Map();
/** Orden aleatorio estable por clave (no cambia al re-pintar el mismo ítem). */
function shuffledOrder(key, n) {
  let order = SHUF.get(key);
  if (!order || order.length !== n) {
    order = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
    SHUF.set(key, order);
  }
  return order;
}
function shuffled(key, opts = [], ans = 0) {
  const order = shuffledOrder(`o:${key}`, opts.length);
  return { opts: order.map((i) => opts[i]), ans: order.indexOf(ans) };
}

export function getTopicBlitzBank(topicId) {
  const visibleBank = poolFor('blitz', 'normal', 'all');
  const topic = TEMARIO_APRENDE.find((t) => t.id === topicId);
  if (!topic) return visibleBank;
  const out = [];
  const seenQ = new Set();

  for (const item of visibleBank) {
    const inferred = inferTopicId(item.tag || item.q, 'blitz');
    if (inferred === topicId && !seenQ.has(item.q)) {
      seenQ.add(item.q);
      out.push(item);
    }
  }

  if (out.length < 8 && topic) {
    const allQs = questions();
    const fcs = allQs.filter(
      (c) => (c.topicId || inferTopicId(`${c.note || ''} ${c.tag || ''} ${c.q || ''}`)) === topicId
    );
    const pool = fcs.length >= 4 ? fcs : [...fcs, ...allQs];
    for (let i = 0; i < fcs.length && out.length < 10; i++) {
      const fc = fcs[i];
      if (!fc?.q || !fc?.a || seenQ.has(fc.q)) continue;
      const distractors = [];
      for (let j = 1; j < pool.length && distractors.length < 3; j++) {
        const cand = pool[(i + j * 3) % pool.length]?.a;
        if (cand && cand !== fc.a && !distractors.includes(cand)) {
          distractors.push(cand);
        }
      }
      if (distractors.length < 3) continue;
      const shift = i % 4;
      const opts = [...distractors];
      opts.splice(shift, 0, fc.a);
      seenQ.add(fc.q);
      out.push({
        q: fc.q,
        opts,
        ans: shift,
        exp: fc.a,
        tag: topic.title,
      });
    }
  }

  return out.length ? out : visibleBank;
}

const ARCADE_MODES = [
  { id: 'blitz', label: 'Blitz 45s', ic: 'bolt', desc: 'Ráfaga contrarreloj con racha multiplicadora' },
  { id: 'pase', label: 'Pase de Visita', ic: 'clipboard', desc: 'Evalúa y corrige el plan del R1 como adscrito' },
  { id: 'lapblanca', label: '¿Se opera o no?', ic: 'scalpel', desc: 'Evita laparotomías blancas en urgencias' },
  { id: 'detective', label: 'Detective Dx', ic: 'search', desc: 'Casos con pistas progresivas de guardia' },
  { id: 'quirofano', label: 'Quirófano Paso a Paso', ic: 'layers', desc: 'Ordena los tiempos y variantes anatómicas' },
  { id: 'noctua', label: 'Paciente en evolución', ic: 'brain', desc: 'Decide turno a turno con un paciente que evoluciona' },
];

const topicBlitzSummaries = new Map();

function renderBlitzMissesSection({ misses, savedToNotes, saveBtnAttr, notesHref, notesLabel }) {
  if (!misses || !misses.length) return '';
  return `
    <div class="blitz-misses-box">
      <div class="blitz-misses-head">
        <span class="mono repasa-kicker">PARA TU CUADERNO · LO QUE FALLASTE (${misses.length})</span>
      </div>
      <div class="blitz-misses-list">
        ${misses.map((m) => `
          <div class="blitz-miss-item">
            <p class="blitz-miss-q">${esc(m.q)}</p>
            <p class="blitz-miss-right"><strong>✓ ${esc(m.right)}</strong></p>
            ${m.why ? `<p class="blitz-miss-why muted">${esc(m.why)}</p>` : ''}
          </div>
        `).join('')}
      </div>
      <div class="repasa-done-acts" style="margin-top:12px">
        ${savedToNotes
          ? `<span class="chip chip-accent">✓ Guardado en Mis Apuntes</span>`
          : `<button type="button" class="btn btn-sm btn-glow" ${saveBtnAttr}>${icon('note')} Mandar al cuaderno</button>`}
        <a href="${notesHref}" class="btn btn-sm btn-metal">${notesLabel}</a>
      </div>
    </div>`;
}

function renderBlitzSummaryCard({
  verdict,
  title,
  statsLine,
  actionsHtml,
  misses,
  savedToNotes,
  saveBtnAttr,
  notesHref,
  notesLabel,
}) {
  return `
    <div class="blitz-summary-card">
      <div class="blitz-summary-head">
        <span class="icon-tile">${icon('bolt', 'ic3d')}</span>
        <div style="min-width:0;flex:1">
          <p class="mono repasa-kicker">${esc(verdict)}</p>
          <h2>${esc(title)}</h2>
          <p class="muted">${esc(statsLine)}</p>
        </div>
      </div>
      <div class="repasa-done-acts">${actionsHtml}</div>
      ${renderBlitzMissesSection({ misses, savedToNotes, saveBtnAttr, notesHref, notesLabel })}
    </div>`;
}

function renderTopicSummaryMarkup(topic, summary) {
  return renderBlitzSummaryCard({
    verdict: summary.misses.length === 0 ? 'RONDA PERFECTA' : 'RONDA COMPLETADA',
    title: `Blitz · ${topic.title}`,
    statsLine: `${summary.correct}/${summary.total} aciertos · ${summary.pct}% · ${summary.score} pts`,
    actionsHtml: `
      <button type="button" class="btn btn-glow" data-topic-blitz-start>${icon('play')} Otra ronda ▶</button>
      <a href="#/juegos?modo=blitz&tema=${esc(topic.id)}" class="btn btn-metal">Abrir en Arcade ↗</a>`,
    misses: summary.misses,
    savedToNotes: summary.savedToNotes,
    saveBtnAttr: 'data-topic-save-misses',
    notesHref: `#/aprende?tema=${esc(topic.id)}&casa=leer&tab=apuntes`,
    notesLabel: 'Ver en Mis Apuntes →',
  });
}

export function renderTopicJugarPanel(topic) {
  const bank = getTopicBlitzBank(topic.id);
  const tg = store.state.telemetry?.topicGames?.[topic.id] || null;
  const avgAcc = tg?.sessions ? Math.round((tg.totalAccuracy || 0) / tg.sessions) : 0;
  const summary = topicBlitzSummaries.get(topic.id) || null;

  return `
  <div class="jugar-topic-panel" data-jugar-scope>
    <article class="card repasa-scope-banner">
      <div class="repasa-scope-banner-top">
        <div>
          <span class="mono repasa-kicker">JUGAR EN ESTE MÓDULO · ${esc(topic.num)}</span>
          <h3>Entrenamiento clínico de ${esc(topic.title)}</h3>
          <p class="muted">Cada partida suma directamente al porcentaje de <strong>Jugar</strong> de este módulo y al mapa 11×3.</p>
        </div>
        <div class="repasa-chip-row">
          <span class="chip"><strong>${bank.length}</strong>&nbsp;reactivos del tema</span>
          <span class="chip"><strong>${tg?.sessions || 0}</strong>&nbsp;partidas</span>
          <span class="chip"><strong>${avgAcc}%</strong>&nbsp;precisión media</span>
        </div>
      </div>
    </article>

    <section class="card game-stage" id="topic-game-stage">
      ${summary ? renderTopicSummaryMarkup(topic, summary) : `
      <div class="game-hero-start">
        <span class="icon-tile">${icon('bolt', 'ic3d')}</span>
        <h2>Blitz del Módulo · ${esc(topic.title)} (${bank.length} reactivos)</h2>
        <p class="muted">45 segundos contra reloj con preguntas y casos clínicos filtrados a <strong>${esc(topic.title)}</strong>.</p>
        <div class="repasa-done-acts">
          <button type="button" class="btn btn-glow" data-topic-blitz-start>${icon('play')} Jugar Blitz de ${esc(topic.num)} ahora</button>
          <a href="#/juegos?modo=blitz&tema=${esc(topic.id)}" class="btn btn-metal">Abrir en Arcade completo ↗</a>
        </div>
      </div>`}
    </section>

    <div class="jugar-modes-section">
      <p class="mono muted repasa-kicker">OTROS SIMULADORES DEL ARCADE QUIRÚRGICO (FILTRADOS AL TEMA):</p>
      <div class="tema-jugar-grid">
        ${ARCADE_MODES.map((m) => `
          <a href="#/juegos?modo=${esc(m.id)}&tema=${esc(topic.id)}" class="card tema-mode-card">
            <div class="tema-mode-head">
              <span class="icon-tile-sm">${icon(m.ic)}</span>
              <strong>${esc(m.label)}</strong>
              <span class="mono muted">→</span>
            </div>
            <p class="muted">${esc(m.desc)}</p>
          </a>
        `).join('')}
      </div>
    </div>
  </div>`;
}

export function mountTopicJugarPanel(scopeRoot, rerender, topic) {
  const scope = scopeRoot.matches?.('[data-jugar-scope]')
    ? scopeRoot
    : scopeRoot.querySelector('[data-jugar-scope]') || scopeRoot;
  const stage = scope.querySelector('#topic-game-stage');
  if (!stage) return;

  const bank = getTopicBlitzBank(topic.id);
  let timer = null;
  let active = false;
  let secs = 45;
  let idx = 0;
  let correct = 0;
  let total = 0;
  let streak = 0;
  let misses = [];
  let advanceId = null;

  const onKey = (e) => {
    if (!active || !stage.isConnected) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.querySelector('.modal.open')) return;
    if (e.target?.closest?.('input, textarea, select, [contenteditable]')) return;
    if (!['1', '2', '3', '4'].includes(e.key)) return;
    const opts = stage.querySelectorAll('.blitz-opt:not(:disabled)');
    const btn = opts[Number(e.key) - 1];
    if (btn) {
      e.preventDefault();
      btn.click();
    }
  };
  document.addEventListener('keydown', onKey);

  let reviewLog = [];
  const taunts = startWaitingTaunts({ isActive: () => active && stage.isConnected });

  S.onCleanup(() => {
    clearInterval(timer);
    clearTimeout(advanceId);
    taunts.stop();
    document.removeEventListener('keydown', onKey);
  });

  const wireIdleButtons = () => {
    stage.querySelector('[data-topic-blitz-start]')?.addEventListener('click', startBlitz);
    stage.querySelector('[data-topic-save-misses]')?.addEventListener('click', () => {
      const summary = topicBlitzSummaries.get(topic.id);
      if (!summary || summary.savedToNotes) return;
      const res = store.saveMissedToNotes(topic.id);
      summary.savedToNotes = true;
      playUiSfx('ok');
      toast(`${res?.count || summary.misses.length} reactivos guardados en Mis Apuntes ✓`);
      if (rerender) {
        rerender({ keepScroll: true });
      } else {
        drawIdle(summary);
      }
    });
  };

  const drawIdle = (summary = null) => {
    stage.innerHTML = summary ? renderTopicSummaryMarkup(topic, summary) : `
      <div class="game-hero-start">
        <span class="icon-tile">${icon('bolt', 'ic3d')}</span>
        <h2>Blitz del Módulo · ${esc(topic.title)} (${bank.length} reactivos)</h2>
        <p class="muted">45 segundos contra reloj a ciegas con reactivos de ${esc(topic.title)}. CALOT te evaluará al terminar.</p>
        <div class="repasa-done-acts">
          <button type="button" class="btn btn-glow" data-topic-blitz-start>${icon('play')} Jugar Blitz de ${esc(topic.num)} ahora</button>
          <a href="#/juegos?modo=blitz&tema=${esc(topic.id)}" class="btn btn-metal">Abrir en Arcade completo ↗</a>
        </div>
      </div>`;
    wireIdleButtons();
  };

  const runTopicEvaluation = () => {
    const denom = Math.max(1, total);
    const pct = total ? Math.round((correct / total) * 100) : 0;
    if (misses.length > 0) {
      store.recordMissedQuestions(misses, {
        topicId: topic.id,
        topicTitle: topic.title,
        mode: 'blitz',
      });
    }
    let runStreak = 0;
    for (const item of reviewLog) {
      if (item.ok) {
        runStreak += 1;
        store.recordArena({ points: 100 + runStreak * 15, ok: true, streak: runStreak });
      } else {
        runStreak = 0;
        store.recordArena({ ok: false });
      }
    }
    const summary = {
      correct,
      total,
      pct,
      score: correct * 100,
      misses: [...misses],
      savedToNotes: false,
    };
    topicBlitzSummaries.set(topic.id, summary);
    store.recordGameSession({
      mode: 'blitz',
      modeLabel: `Blitz · ${topic.title}`,
      topic: topic.title,
      topicId: topic.id,
      score: correct,
      maxScore: denom,
      durationSec: Math.max(1, 45 - secs),
    });
    publishSoon();
    taunts.stop();
    playCalotEvaluation({
      pct,
      correct,
      total,
      modeLabel: `Blitz · ${topic.title}`,
      reviewItems: reviewLog,
      onReplay: () => startBlitz(),
      onClose: () => {
        if (rerender) rerender({ keepScroll: true });
        else drawIdle(summary);
      },
    });
  };

  const finishBlitz = (directEval = false) => {
    clearInterval(timer);
    clearTimeout(advanceId);
    if (!active) return;
    active = false;
    if (total <= 0) {
      drawIdle(null);
      return;
    }
    if (directEval) {
      runTopicEvaluation();
      return;
    }
    stage.innerHTML = `
      <div class="game-hero-start">
        <span class="icon-tile">${icon('clock', 'ic3d')}</span>
        <h2>Tiempo agotado · ${total} reactivo${total === 1 ? '' : 's'} registrado${total === 1 ? '' : 's'}</h2>
        <p class="muted">CALOT guardó todas tus decisiones sin revelar resultados. Pídele que te evalúe.</p>
        <div class="repasa-done-acts">
          <button type="button" class="btn eval-cta-btn" data-topic-eval-now>Pedirle a CALOT que me evalúe →</button>
          <button type="button" class="btn btn-ghost" data-topic-blitz-start>Reiniciar sin evaluar</button>
        </div>
      </div>`;
    stage.querySelector('[data-topic-eval-now]')?.addEventListener('click', runTopicEvaluation);
    stage.querySelector('[data-topic-blitz-start]')?.addEventListener('click', startBlitz);
  };

  const drawQuestion = () => {
    if (!active) return;
    const q = shuffleBlitzItem(bank[idx % bank.length]);
    stage.innerHTML = `
      <div class="game-top">
        <div>
          <p class="mono">BLITZ ${esc(topic.num)} · REACTIVO #${idx + 1} · RESPONDIDAS: ${total}</p>
        </div>
        <div class="game-hud-pills">
          <span class="chip ${secs <= 10 ? 'pulse-danger' : ''}" id="t-blitz-clock">${icon('clock')} ${secs}s</span>
          <button type="button" class="btn btn-sm eval-cta-btn" data-topic-blitz-stop ${total === 0 ? 'disabled' : ''}>Pedirle a CALOT que me evalúe</button>
        </div>
      </div>
      <div class="blitz-box">
        <h3 class="blitz-q">${esc(q.q)}</h3>
        <div class="blitz-opts">
          ${q.opts.map((opt, oIdx) => `
            <button type="button" class="blitz-opt" data-idx="${oIdx}">
              <span>${esc(opt)}</span>
            </button>`).join('')}
        </div>
      </div>`;

    stage.querySelector('[data-topic-blitz-stop]')?.addEventListener('click', () => finishBlitz(true));
    stage.querySelectorAll('.blitz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!active) return;
        const picked = Number(btn.dataset.idx);
        const ok = picked === q.ans;
        total += 1;
        stage.querySelectorAll('.blitz-opt').forEach((b) => { b.disabled = true; });
        btn.classList.add('is-picked');
        playUiSfx('click');
        taunts.touch();
        if (ok) {
          correct += 1;
          streak += 1;
        } else {
          streak = 0;
          misses.push({
            q: q.q,
            right: q.opts[q.ans] ?? '',
            why: q.exp || '',
            topicId: topic.id,
            topicTitle: topic.title,
            mode: 'blitz',
          });
        }
        reviewLog.push({
          q: q.q,
          picked: q.opts[picked] ?? '',
          right: q.opts[q.ans] ?? '',
          ok,
          exp: q.exp || '',
        });
        advanceId = setTimeout(() => {
          idx += 1;
          drawQuestion();
        }, 220);
      });
    });
  };

  function startBlitz() {
    playUiSfx('click');
    clearInterval(timer);
    clearTimeout(advanceId);
    active = true;
    secs = 45;
    idx = 0;
    correct = 0;
    total = 0;
    streak = 0;
    misses = [];
    reviewLog = [];
    drawQuestion();
    timer = setInterval(() => {
      secs -= 1;
      const clock = stage.querySelector('#t-blitz-clock');
      if (clock) {
        clock.innerHTML = `${icon('clock')} ${secs}s`;
        if (secs <= 10) clock.classList.add('pulse-danger');
        if (secs === 10) voiceTime();
      }
      if (secs <= 0) finishBlitz(false);
    }, 1000);
  }

  wireIdleButtons();
}

const state = {
  mode: 'blitz',
  inGame: false,
  topicFilter: '',
  score: 0,
  streak: 0,
  best: Number(localStorage.getItem('calot:best-score') || 0),
  blitzTime: 45,
  blitzActive: false,
  lastBlitzResult: null,
  qIdx: 0,
  lapBlancaIdx: 0,
  paseIdx: 0,
  noctuaIdx: 0,
  detectiveIdx: 0,
  detectiveOpen: 1,
  quirofanoProcIdx: 0,
  order: { key: '', picked: [], errors: 0, done: false },
  guardiaIdx: 0,
  adscritoIdx: 0,
  chain: { key: '', step: 0, log: [] },
  algoritmoIdx: 0,
  sepasoIdx: 0,
  duel: { active: false, me: 0, rival: 0, idx: 0, t: 15, result: null },
  imagenIdx: 0,
  imagenOpen: 0,
  level: (() => { try { return localStorage.getItem(LEVEL_KEY) === 'dificil' ? 'dificil' : 'normal'; } catch { return 'normal'; } })(),
  year: (() => { try { const y = localStorage.getItem(YEAR_KEY); return y && canSee(y) && GRADES.includes(y) ? y : 'all'; } catch { return 'all'; } })(),
  modeStartTs: Date.now(),
};

function resetIndices() {
  Object.assign(state, {
    qIdx: 0, lapBlancaIdx: 0, paseIdx: 0, noctuaIdx: 0, detectiveIdx: 0, detectiveOpen: 1, quirofanoProcIdx: 0,
    guardiaIdx: 0, adscritoIdx: 0, algoritmoIdx: 0, sepasoIdx: 0, imagenIdx: 0, imagenOpen: 0,
    order: { key: '', picked: [], errors: 0, done: false }, chain: { key: '', step: 0, log: [] },
    duel: { active: false, me: 0, rival: 0, idx: 0, t: 15, result: null },
  });
}

/** Banco de Blitz según tema, nivel y año. */
function blitzBank(topic) {
  const pool = poolFor('blitz', state.level, state.year);
  if (!topic) return pool;
  if (state.level === 'normal' && state.year === 'all') return getTopicBlitzBank(topic.id);
  const t = pool.filter((it) => inferTopicId(it.tag || it.q, 'blitz') === topic.id);
  return t.length >= 4 ? t : pool;
}

function poolLabel(mode) {
  let n;
  if (mode === 'noctua') n = poolFor(mode, state.level, state.year).reduce((a, c) => a + (c.steps || []).length, 0);
  else if (mode === 'blitz') n = blitzBank(state.topicFilter ? TEMARIO_APRENDE.find((t) => t.id === state.topicFilter) : null).length;
  else n = poolFor(mode, state.level, state.year).length;
  return `${n} ${mode === 'noctua' ? 'tiempos' : mode === 'quirofano' ? 'cirugías' : 'ítems'}`;
}

function saveBest() {
  if (state.score > state.best) {
    state.best = state.score;
    try { localStorage.setItem('calot:best-score', String(state.best)); } catch {}
  }
}

function arcadeModes(bankLen) {
  return [
    { id: 'blitz', num: '01', icon: 'bolt', title: 'Blitz 45s', tag: 'VELOCIDAD', desc: `${bankLen} reactivos PUEM contra reloj` },
    { id: 'pase', num: '02', icon: 'clipboard', title: 'Pase de Visita', tag: 'CLÍNICO', desc: 'Modo adscrito y decisiones de piso' },
    { id: 'lapblanca', num: '03', icon: 'scalpel', title: '¿Se opera o no?', tag: 'CRITERIO', desc: 'Evita laparotomías blancas' },
    { id: 'detective', num: '04', icon: 'search', title: 'Detective Dx', tag: 'DIAGNÓSTICO', desc: 'Pistas progresivas de guardia' },
    { id: 'quirofano', num: '05', icon: 'layers', title: 'Quirófano Paso a Paso', tag: 'TÉCNICA', desc: 'Ordena tiempos quirúrgicos' },
    { id: 'noctua', num: '06', icon: 'brain', title: 'Paciente en evolución', tag: 'NOCTUA', desc: 'Simulador turno a turno' },
    { id: 'guardia', num: '07', icon: 'clock', title: 'Guardia Nocturna', tag: 'NUEVO · 3 A. M.', desc: 'Decide y mira la evolución T0 → T1 → T2' },
    { id: 'adscrito', num: '08', icon: 'feather', title: 'El Adscrito Te Pregunta', tag: 'NUEVO · CADENA', desc: 'Cadenas de 4 preguntas que suben o te rescatan' },
    { id: 'algoritmo', num: '09', icon: 'grid', title: 'Arma el Algoritmo', tag: 'NUEVO · GUÍAS', desc: 'Ordena las decisiones de la guía' },
    { id: 'sepaso', num: '10', icon: 'eye', title: '¿Qué se te pasó?', tag: 'NUEVO · AUDITORÍA', desc: 'Encuentra el error escondido en la nota' },
    { id: 'duelo', num: '11', icon: 'target', title: 'Duelo de Residentes', tag: 'NUEVO · 1 VS 1', desc: 'Primero a 11 puntos contra el rival' },
    { id: 'imagen', num: '12', icon: 'cube', title: 'Imagen Misteriosa', tag: 'NUEVO · IMAGEN', desc: 'Descripción del estudio y pistas progresivas' },
  ];
}

export const ARCADE_MODE_IDS = [...CLASSIC_MODES, ...NEW_MODES];

/** Hash de la vista de un modo (conserva el filtro de tema activo). */
function modeHref(modeId) {
  return `#/juegos?modo=${encodeURIComponent(modeId)}${state.topicFilter ? `&tema=${encodeURIComponent(state.topicFilter)}` : ''}`;
}

/** Hash del menú de juegos (conserva el filtro de tema activo). */
function menuHref() {
  return state.topicFilter ? `#/juegos?tema=${encodeURIComponent(state.topicFilter)}` : '#/juegos';
}

export function render(params = {}) {
  // Con ?modo= se pinta solo la vista del juego; sin él, solo el menú.
  if (state.year !== 'all' && !canSee(state.year)) state.year = 'all';
  state.inGame = !!params.modo;
  if (params.modo) {
    state.mode = ARCADE_MODE_IDS.includes(params.modo) ? params.modo : 'blitz';
  }
  if ('tema' in params) {
    state.topicFilter = TEMARIO_APRENDE.some((t) => t.id === params.tema) ? params.tema : '';
  }
  const activeTopic = state.topicFilter ? TEMARIO_APRENDE.find((t) => t.id === state.topicFilter) : null;
  const activeBank = blitzBank(activeTopic);
  const totalSessions = (store.state.telemetry?.gameSessions || []).length;
  const modes = arcadeModes(activeBank.length);
  const currentMode = modes.find((m) => m.id === state.mode) || modes[0];

  const stickyBar = `
  <div class="sticky-bar glass">
    <strong>Arcade Quirúrgico</strong>
    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
      ${activeTopic ? `<a href="#/aprende?tema=${esc(activeTopic.id)}&casa=jugar" class="btn btn-sm btn-ghost">← Casa ${esc(activeTopic.num)}</a>` : ''}
      <span class="mono">Récord: ${state.best} pts</span>
      <a href="#/stats" class="btn btn-sm btn-ghost">${icon('sparkle')} Telemetría (${totalSessions} partidas)</a>
    </div>
  </div>`;

  const hudStrip = `
    <div class="wing-hud-strip">
      <div class="wing-hud-kpi">
        <span class="mono">Puntaje sesión</span>
        <strong><span id="gm-score">${state.score}</span> <small>pts</small></strong>
      </div>
      <div class="wing-hud-kpi">
        <span class="mono">Racha actual</span>
        <strong><span id="gm-streak">${state.streak}</span> <small>x</small></strong>
      </div>
      <div class="wing-hud-kpi">
        <span class="mono">Mejor récord</span>
        <strong><span id="gm-best">${state.best}</span> <small>pts</small></strong>
      </div>
      <div class="wing-hud-kpi">
        <span class="mono">Reactivos Blitz</span>
        <strong>${activeBank.length} <small>ítems</small></strong>
      </div>
    </div>`;

  if (state.inGame) {
    return `
<div class="juegos is-game-view">
  ${stickyBar}

  <header class="arcade-game-head" data-wing-enter>
    <div class="arcade-game-nav">
      <a href="${menuHref()}" class="btn btn-sm btn-ghost arcade-back" data-arcade-back>← Juegos</a>
      ${activeTopic ? `<span class="chip chip-accent">Tema: ${esc(activeTopic.num)}. ${esc(activeTopic.title)}</span>` : ''}
    </div>
    <div class="arcade-game-title">
      <span class="arcade-ic">${icon(currentMode.icon)}</span>
      <div>
        <span class="mono arcade-game-kicker">MODO ${esc(currentMode.num)} · ${esc(currentMode.tag)}</span>
        <h1>${esc(currentMode.title)}</h1>
        <p class="wing-lead">${esc(currentMode.desc)}</p>
      </div>
    </div>
    ${hudStrip}
  </header>

  <div class="arcade-filters" data-arcade-filters>
    ${CLASSIC_MODES.includes(state.mode) ? `
    <div class="arcade-seg" role="group" aria-label="Nivel de dificultad">
      <span class="mono">Nivel</span>
      <button type="button" class="arcade-seg-btn${state.level === 'normal' ? ' is-on' : ''}" data-set-level="normal">Normal</button>
      <button type="button" class="arcade-seg-btn is-hard${state.level === 'dificil' ? ' is-on' : ''}" data-set-level="dificil">Difícil v2</button>
    </div>` : ''}
    <div class="arcade-seg" role="group" aria-label="Año de residencia">
      <span class="mono">Año</span>
      ${['all', ...visibleGrades()].map((g) => `<button type="button" class="arcade-seg-btn${state.year === g ? ' is-on' : ''}" data-set-year="${g}">${g === 'all' ? 'Todos' : g}</button>`).join('')}
    </div>
    <span class="mono arcade-pool-count" data-pool-count>${poolLabel(state.mode)}</span>
    <a href="#/ranking" class="btn btn-sm btn-ghost arcade-rank-link">${icon('trophy')} Ranking</a>
  </div>

  <section class="arcade-console" data-wing-enter>
    <div class="arcade-console-bar">
      <span class="mono console-led-lbl"><i class="wing-dot" aria-hidden="true"></i>SIMULADOR ACTIVO · <strong id="arcade-active-title">${esc(currentMode.title)}</strong></span>
      <span class="mono console-keys">ATAJOS: TECLAS 1–4</span>
    </div>
    <div class="card game-stage" id="game-stage" style="--c:var(--juegos)"></div>
  </section>
</div>`;
  }

  return `
<div class="juegos">
  ${stickyBar}

  <header class="page-head wing-hero is-juegos" data-wing-enter>
    <div class="wing-top-bar">
      <span class="mono wing-badge">WING 03 · SALA DE SIMULACIÓN QUIRÚRGICA</span>
      <div class="wing-top-actions">
        <span class="mono wing-live-pill"><i class="wing-dot" aria-hidden="true"></i>${totalSessions} partidas registradas</span>
        <button type="button" class="btn btn-sm btn-ghost wing-replay-btn" data-replay-portal="juegos">${icon('play')} Intro 10s</button>
        <a href="#/ranking" class="btn btn-sm btn-glow">${icon('trophy')} Ranking</a>
        <a href="#/stats" class="btn btn-sm btn-ghost">Ver Telemetría →</a>
      </div>
    </div>
    <div class="wing-main-row">
      <div>
        <h1>Arcade <em>Quirúrgico</em></h1>
        <p class="wing-lead">Entorno táctico independiente para entrenar velocidad PUEM, criterio operatorio y decisiones de guardia bajo presión.</p>
      </div>
    </div>
    ${activeTopic ? `
    <div class="juegos-topic-banner">
      <span class="chip chip-accent">Módulo filtrado: ${esc(activeTopic.num)}. ${esc(activeTopic.title)}</span>
      <a href="#/juegos?tema=" class="btn btn-sm btn-ghost">Ver todos los temas</a>
      <a href="#/aprende?tema=${esc(activeTopic.id)}&casa=jugar" class="btn btn-sm btn-glow">Volver a casa del tema →</a>
    </div>` : ''}
    ${hudStrip}
  </header>

  <section class="arcade-deck-wrap" data-wing-enter>
    <div class="arcade-deck-head">
      <span class="mono wing-kicker">MENÚ DE SIMULADORES · ELIGE TU MODO</span>
      <span class="mono wing-subnote">${modes.length} modos activos · 6 nuevos</span>
    </div>
    <div class="arcade-deck" data-arcade-deck aria-label="Menú de juegos quirúrgicos">
      ${modes.map((m) => `
        <a href="${modeHref(m.id)}" class="arcade-card" data-mode="${m.id}">
          <span class="arcade-card-top">
            <span class="mono arcade-num">${m.num}</span>
            <span class="mono arcade-tag">${m.tag}</span>
          </span>
          <span class="arcade-card-mid">
            <span class="arcade-ic">${icon(m.icon)}</span>
            <span class="arcade-titles">
              <strong>${esc(m.title)}</strong>
              <small>${esc(m.desc)}</small>
            </span>
          </span>
          <span class="arcade-card-foot mono">ENTRAR →</span>
        </a>`).join('')}
    </div>
  </section>
</div>`;
}

export function mount(root) {
  let timer = null;
  let advanceId = null;
  let lapRaf = 0;
  let sessionLog = []; // Acumulador ciego del modo actual: no revela nada hasta pedir evaluación a CALOT
  state.modeStartTs = Date.now();

  const deck = root.querySelector('[data-arcade-deck]');
  const stage = root.querySelector('#game-stage');

  const taunts = startWaitingTaunts({
    isActive: () => Boolean(root.isConnected && stage?.isConnected),
  });

  const onKey = (e) => {
    if (!root.isConnected || !stage?.isConnected) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.querySelector('.modal.open, #calot-eval-overlay')) return;
    if (e.target?.closest?.('input, textarea, select, [contenteditable]')) return;
    if (!['1', '2', '3', '4'].includes(e.key)) return;
    const opts = stage.querySelectorAll('.blitz-opt:not(:disabled)');
    const btn = opts[Number(e.key) - 1];
    if (btn) {
      e.preventDefault();
      btn.click();
    }
  };
  document.addEventListener('keydown', onKey);
  S.onCleanup(() => {
    clearInterval(timer);
    clearTimeout(advanceId);
    cancelAnimationFrame(lapRaf);
    taunts.stop();
    document.removeEventListener('keydown', onKey);
  });

  const syncHud = () => {
    const sEl = root.querySelector('#gm-score');
    const kEl = root.querySelector('#gm-streak');
    const bEl = root.querySelector('#gm-best');
    if (sEl) sEl.textContent = state.score;
    if (kEl) kEl.textContent = state.streak;
    if (bEl) bEl.textContent = state.best;
  };

  const elapsedSec = () => Math.max(8, Math.round((Date.now() - state.modeStartTs) / 1000));

  /** Suma a la sesión y a la arena (ranking) al momento de la evaluación final. */
  const award = (ok, pts = 0) => {
    if (ok === true) { state.streak += 1; state.score += pts; }
    else if (ok === false) state.streak = 0;
    else state.score += pts;
    saveBest();
    store.recordArena({ points: ok === false ? 0 : pts, ok, streak: state.streak });
    publishSoon();
    syncHud();
  };

  const evalBarHtml = (hint = '') => {
    const n = sessionLog.length;
    if (!n) return '';
    return `
      <div class="eval-cta-bar">
        <p class="mono">${n} respuesta${n === 1 ? '' : 's'} registrada${n === 1 ? '' : 's'}${hint ? ` · ${esc(hint)}` : ' · CALOT evaluará todo al final.'}</p>
        <button type="button" class="btn eval-cta-btn" data-calot-eval>
          Pedirle a CALOT que me evalúe →
        </button>
      </div>`;
  };

  const wireEvalBar = (modeId, modeLabel, onAfter = () => paintMode()) => {
    stage.querySelector('[data-calot-eval]')?.addEventListener('click', () => {
      runModeEvaluation({ modeId, modeLabel, onAfter });
    });
  };

  const runModeEvaluation = ({ modeId, modeLabel, detail = '', onAfter = () => paintMode() }) => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const items = [...sessionLog];
    if (!items.length) return;
    sessionLog = [];
    taunts.stop();

    const total = items.length;
    const correct = items.filter((x) => x.ok).length;
    const pct = Math.round((correct / Math.max(1, total)) * 100);
    const misses = [];

    for (const it of items) {
      award(it.ok, it.pts || 140);
      if (!it.ok && it.right) {
        misses.push({
          q: it.q,
          right: it.right,
          why: it.exp || '',
          topicId: it.topicId || inferTopicId(it.topic || it.q, modeId),
          topicTitle: it.topic || modeLabel,
          mode: modeId,
        });
      }
    }
    if (misses.length) {
      store.recordMissedQuestions(misses, { topicId: '', topicTitle: modeLabel, mode: modeId });
    }
    store.recordGameSession({
      mode: modeId,
      modeLabel,
      topic: items[items.length - 1]?.topic || modeLabel,
      score: correct,
      maxScore: total,
      durationSec: elapsedSec(),
    });
    publishSoon();
    state.modeStartTs = Date.now();

    playCalotEvaluation({
      pct,
      correct,
      total,
      modeLabel,
      detail,
      reviewItems: items,
      onReplay: () => {
        sessionLog = [];
        state.modeStartTs = Date.now();
        onAfter();
      },
      onClose: () => {
        onAfter();
      },
    });
  };

  // 1. BLITZ PUEM 45S (modo ciego total + evaluación CALOT al terminar)
  const renderBlitz = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const activeTopic = state.topicFilter ? TEMARIO_APRENDE.find((t) => t.id === state.topicFilter) : null;
    const activeBank = blitzBank(activeTopic);
    if (!activeBank.length) return renderEmpty();
    if (!state.blitzActive) {
      if (state.lastBlitzResult) {
        const res = state.lastBlitzResult;
        stage.innerHTML = renderBlitzSummaryCard({
          verdict: res.isNewRecord ? 'NUEVO RÉCORD' : 'RONDA EVALUADA',
          title: activeTopic ? `Blitz · ${activeTopic.title}` : 'Blitz PUEM (45s)',
          statsLine: `${res.score} pts · ${res.right}/${res.total} aciertos · récord ${res.best} pts`,
          actionsHtml: `
            <button type="button" class="btn btn-glow" id="start-blitz">${icon('play')} Otra ronda ▶</button>
            <button type="button" class="btn btn-metal" id="clear-blitz-summary">Modo arcade</button>`,
          misses: res.misses,
          savedToNotes: res.savedToNotes,
          saveBtnAttr: 'id="save-blitz-misses"',
          notesHref: `#/aprende?tema=${esc(res.topicId || 'piel')}&casa=leer&tab=apuntes`,
          notesLabel: 'Ir a Mis Apuntes →',
        });
        stage.querySelector('#clear-blitz-summary')?.addEventListener('click', () => {
          playUiSfx('click');
          state.lastBlitzResult = null;
          renderBlitz();
        });
        stage.querySelector('#save-blitz-misses')?.addEventListener('click', () => {
          if (res.savedToNotes) return;
          const saved = store.saveMissedToNotes(res.topicId || 'all');
          res.savedToNotes = true;
          playUiSfx('ok');
          toast(`${saved?.count || res.misses.length} reactivos guardados en Mis Apuntes ✓`);
          renderBlitz();
        });
      } else {
        stage.innerHTML = `
          <div class="game-hero-start">
            <span class="icon-tile">${icon('bolt', 'ic3d')}</span>
            <h2>Blitz PUEM · ${activeTopic ? `${esc(activeTopic.num)}. ${esc(activeTopic.title)}` : '45 segundos'} (${activeBank.length} reactivos)</h2>
            <p class="muted">Responde a ciegas todos los reactivos que puedas ${activeTopic ? `de <strong>${esc(activeTopic.title)}</strong>` : (state.year === 'all' ? 'del temario PUEM' : `de <strong>${esc(state.year)}</strong>`)}. CALOT te evaluará al final.</p>
            <button type="button" class="btn btn-glow" id="start-blitz">${icon('play')} Iniciar Blitz de 45s</button>
          </div>`;
      }
      stage.querySelector('#start-blitz')?.addEventListener('click', () => {
        playUiSfx('click');
        state.blitzActive = true;
        state.lastBlitzResult = null;
        state.blitzTime = 45;
        state.modeStartTs = Date.now();
        sessionLog = [];
        renderBlitz();
      });
      return;
    }

    let blitzCorrect = 0;
    let blitzTotal = 0;
    const blitzMisses = [];
    const blitzReview = [];

    const executeBlitzEval = () => {
      const spentSec = Math.max(1, 45 - state.blitzTime);
      let roundScore = 0;
      let beatRecord = false;
      for (const it of blitzReview) {
        if (it.ok) {
          state.streak += 1;
          const pts = 100 + state.streak * 15;
          state.score += pts;
          roundScore += pts;
          if (state.score > state.best) beatRecord = true;
          saveBest();
          store.recordArena({ points: pts, ok: true, streak: state.streak });
        } else {
          state.streak = 0;
          store.recordArena({ ok: false });
        }
      }
      syncHud();
      store.recordGameSession({
        mode: 'blitz',
        modeLabel: activeTopic ? `Blitz · ${activeTopic.title}` : 'Blitz PUEM (45s)',
        topic: activeTopic ? activeTopic.title : (state.year === 'all' ? 'Multimódulo PUEM' : `Multimódulo ${state.year}`),
        topicId: activeTopic?.id || '',
        score: blitzCorrect,
        maxScore: Math.max(1, blitzTotal),
        durationSec: spentSec,
      });
      publishSoon();
      if (blitzMisses.length > 0) {
        store.recordMissedQuestions(blitzMisses, {
          topicId: activeTopic?.id || '',
          topicTitle: activeTopic?.title || 'Multimódulo',
          mode: 'blitz',
        });
      }
      state.lastBlitzResult = {
        score: roundScore,
        right: blitzCorrect,
        total: blitzTotal,
        best: state.best,
        isNewRecord: beatRecord,
        misses: [...blitzMisses],
        topicId: activeTopic?.id || '',
        savedToNotes: false,
      };
      const pct = Math.round((blitzCorrect / Math.max(1, blitzTotal)) * 100);
      taunts.stop();
      playCalotEvaluation({
        pct,
        correct: blitzCorrect,
        total: blitzTotal,
        modeLabel: activeTopic ? `Blitz · ${activeTopic.title}` : 'Blitz PUEM (45s)',
        reviewItems: blitzReview,
        onReplay: () => {
          state.blitzActive = true;
          state.lastBlitzResult = null;
          state.blitzTime = 45;
          state.modeStartTs = Date.now();
          renderBlitz();
        },
        onClose: () => renderBlitz(),
      });
    };

    const finishArcadeBlitz = (directEval = false) => {
      clearInterval(timer);
      clearTimeout(advanceId);
      if (!state.blitzActive) return;
      state.blitzActive = false;
      if (blitzTotal <= 0) {
        state.lastBlitzResult = null;
        renderBlitz();
        return;
      }
      if (directEval) {
        executeBlitzEval();
        return;
      }
      stage.innerHTML = `
        <div class="game-hero-start">
          <span class="icon-tile">${icon('clock', 'ic3d')}</span>
          <h2>Tiempo agotado · ${blitzTotal} reactivo${blitzTotal === 1 ? '' : 's'} registrado${blitzTotal === 1 ? '' : 's'}</h2>
          <p class="muted">CALOT registró cada respuesta en silencio. Pídele que te evalúe.</p>
          <div class="repasa-done-acts">
            <button type="button" class="btn eval-cta-btn" id="eval-blitz-now">Pedirle a CALOT que me evalúe →</button>
            <button type="button" class="btn btn-ghost" id="retry-blitz-skip">Reiniciar</button>
          </div>
        </div>`;
      stage.querySelector('#eval-blitz-now')?.addEventListener('click', executeBlitzEval);
      stage.querySelector('#retry-blitz-skip')?.addEventListener('click', () => {
        state.blitzActive = true;
        state.blitzTime = 45;
        renderBlitz();
      });
    };

    const drawQ = () => {
      if (!state.blitzActive) return;
      const q = shuffleBlitzItem(activeBank[state.qIdx % activeBank.length]);
      stage.innerHTML = `
        <div class="game-top">
          <div><p class="mono">REACTIVO #${blitzTotal + 1} · ${activeTopic ? esc(activeTopic.title.toUpperCase()) : (state.level === 'dificil' ? 'BANCO DIFÍCIL v2' : 'BANCO PUEM')}${q.grade ? ` · ${esc(q.grade)}` : ''}</p></div>
          <div class="game-hud-pills">
            <span class="chip ${state.blitzTime <= 10 ? 'pulse-danger' : ''}" id="blitz-timer">${icon('clock')} ${state.blitzTime}s</span>
            <button type="button" class="btn btn-sm eval-cta-btn" id="stop-blitz" ${blitzTotal === 0 ? 'disabled' : ''}>Pedirle a CALOT que me evalúe</button>
          </div>
        </div>
        <div class="blitz-box">
          <h3 class="blitz-q">${esc(q.q)}</h3>
          <div class="blitz-opts">
            ${q.opts.map((opt, idx) => `
              <button type="button" class="blitz-opt" data-idx="${idx}">
                <span>${esc(opt)}</span>
              </button>`).join('')}
          </div>
        </div>`;

      stage.querySelector('#stop-blitz')?.addEventListener('click', () => finishArcadeBlitz(true));
      stage.querySelectorAll('.blitz-opt').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (!state.blitzActive) return;
          const picked = Number(btn.dataset.idx);
          const ok = picked === q.ans;
          blitzTotal += 1;
          stage.querySelectorAll('.blitz-opt').forEach((b) => { b.disabled = true; });
          btn.classList.add('is-picked');
          playUiSfx('click');
          taunts.touch();
          if (ok) {
            blitzCorrect += 1;
          } else {
            blitzMisses.push({
              q: q.q,
              right: q.opts[q.ans] ?? '',
              why: q.exp || '',
              topicId: activeTopic?.id || inferTopicId(q.tag || q.q, 'blitz'),
              topicTitle: activeTopic?.title || q.tag || 'Multimódulo',
              mode: 'blitz',
            });
          }
          blitzReview.push({
            q: q.q,
            picked: q.opts[picked] ?? '',
            right: q.opts[q.ans] ?? '',
            ok,
            exp: q.exp || '',
          });
          advanceId = setTimeout(() => {
            if (!state.blitzActive) return;
            state.qIdx += 1;
            drawQ();
          }, 220);
        });
      });
    };

    drawQ();
    timer = setInterval(() => {
      state.blitzTime -= 1;
      const tEl = stage.querySelector('#blitz-timer');
      if (tEl) {
        tEl.innerHTML = `${icon('clock')} ${state.blitzTime}s`;
        if (state.blitzTime <= 10) tEl.classList.add('pulse-danger');
        if (state.blitzTime === 10) voiceTime();
      }
      if (state.blitzTime <= 0) {
        finishArcadeBlitz(false);
      }
    }, 1000);
  };

  // ── Utilidades comunes (pools por nivel/año, opciones limpias sin A/B/C/D) ──
  const curPool = () => poolFor(state.mode, state.level, state.year);
  const gradeChip = (it) => `${it?.grade ? `<span class="chip arcade-grade-chip">${esc(it.grade)}</span>` : ''}${it?.nivel ? `<span class="chip arcade-level-chip">${esc(it.nivel)}</span>` : ''}`;
  const optsHtml = (opts) => `
    <div class="blitz-opts">
      ${opts.map((opt, idx) => `
        <button type="button" class="blitz-opt" data-idx="${idx}">
          <span>${esc(opt)}</span>
        </button>`).join('')}
    </div>`;
  const renderEmpty = () => {
    stage.innerHTML = `
      <div class="game-hero-start">
        <span class="icon-tile">${icon('search', 'ic3d')}</span>
        <h2>Sin casos para este filtro</h2>
        <p class="muted">Cambia el año o el nivel en la barra de arriba.</p>
      </div>`;
  };

  // 2. ¿SE OPERA O NO? (LAPAROTOMÍAS BLANCAS)
  const renderLapBlanca = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const i = state.lapBlancaIdx % pool.length;
    const c = pool[i];
    const multi = state.level === 'dificil' && Array.isArray(c.opts) && c.opts.length > 1;
    const sh = multi ? shuffled(c.id, c.opts, c.ans) : null;
    stage.innerHTML = `
      <div class="triage-card">
        <div class="triage-monitor">
          <div>
            <p class="mono triage-kicker" style="color:var(--juegos)"><span class="triage-kicker-ic">${icon('scalpel')}</span><span>¿SE OPERA O NO SE OPERA? (${i + 1}/${pool.length})</span></p>
            <strong>${esc(c.title)}</strong> ${gradeChip(c)}
          </div>
          ${c.vitals ? `<span class="mono">${esc(c.vitals)}</span>` : ''}
        </div>
        <p class="triage-vig">${esc(c.vig)}</p>
        ${multi ? `<h3 class="blitz-q" style="font-size:1.02rem">¿Cuál es tu decisión? (nivel difícil: elige la conducta exacta)</h3>${optsHtml(sh.opts)}` : `
        <div class="blitz-opts" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
          <button type="button" class="blitz-opt" data-dec="OPERAR">
            <span><strong>SÍ SE OPERA AHORA</strong> · Indicar Quirófano Urgente (Laparotomía / Laparoscopia)</span>
          </button>
          <button type="button" class="blitz-opt" data-dec="NO_OPERAR">
            <span><strong>NO SE OPERA AHORA</strong> · Manejo Médico, Anticoagulación, Endoscopia o Drenaje Percutáneo</span>
          </button>
        </div>`}
        ${evalBarHtml()}
      </div>`;

    wireEvalBar('lapblanca', '¿Se opera o no? · Laparotomías Blancas');
    stage.querySelectorAll('.blitz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const ok = multi ? Number(btn.dataset.idx) === sh.ans : btn.dataset.dec === c.decision;
        stage.querySelectorAll('.blitz-opt').forEach((b) => { b.disabled = true; });
        btn.classList.add('is-picked');
        playUiSfx('click');
        taunts.touch();
        const pickedText = multi ? (sh.opts[Number(btn.dataset.idx)] || '') : (btn.dataset.dec === 'OPERAR' ? 'SÍ SE OPERA AHORA' : 'NO SE OPERA AHORA');
        const rightText = multi ? (sh.opts[sh.ans] || '') : (c.decision === 'OPERAR' ? 'SÍ SE OPERA AHORA' : 'NO SE OPERA AHORA');
        sessionLog.push({
          q: `${c.title}: ${c.vig}`,
          picked: pickedText,
          right: c.decisionLabel ? `${rightText} (${c.decisionLabel})` : rightText,
          ok,
          exp: c.exp || '',
          pts: multi ? 180 : 140,
          topic: String(c.title).slice(0, 42),
        });
        advanceId = setTimeout(() => {
          state.lapBlancaIdx += 1;
          renderLapBlanca();
        }, 220);
      });
    });
  };

  // 3. PASE DE VISITA (MODO ADSCRITO)
  const renderPaseVisita = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const i = state.paseIdx % pool.length;
    const c = pool[i];
    const sh = shuffled(c.id || c.r1, c.opts, c.ans);
    stage.innerHTML = `
      <div class="triage-card">
        <div class="triage-monitor">
          <div>
            <p class="mono triage-kicker" style="color:var(--juegos)"><span class="triage-kicker-ic">${icon('clipboard')}</span><span>PASE DE VISITA MATUTINO (ROL DE ADSCRITO)</span></p>
            <strong>${c.tag ? esc(c.tag) : 'Audita la nota y el plan terapéutico presentado por el R1'}</strong> ${gradeChip(c)}
          </div>
          <span class="chip">Cama ${i + 1} / ${pool.length}</span>
        </div>
        <blockquote class="triage-vig" style="border-left:3px solid var(--juegos);padding-left:14px;margin:0">${esc(c.r1)}</blockquote>
        <h3 class="blitz-q" style="font-size:18px">${esc(c.q || 'Como adscrito, ¿cuál es la conducta correcta?')}</h3>
        ${optsHtml(sh.opts)}
        ${evalBarHtml()}
      </div>`;

    wireEvalBar('pase', 'Pase de Visita · Modo Adscrito');
    stage.querySelectorAll('.blitz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pickedIdx = Number(btn.dataset.idx);
        const ok = pickedIdx === sh.ans;
        stage.querySelectorAll('.blitz-opt').forEach((b) => { b.disabled = true; });
        btn.classList.add('is-picked');
        playUiSfx('click');
        taunts.touch();
        sessionLog.push({
          q: `${c.r1} — ${c.q || '¿Cuál es la conducta correcta?'}`,
          picked: sh.opts[pickedIdx] || '',
          right: sh.opts[sh.ans] || '',
          ok,
          exp: c.exp || '',
          pts: state.level === 'dificil' ? 190 : 150,
          topic: c.tag || `Cama ${i + 1}`,
        });
        advanceId = setTimeout(() => {
          state.paseIdx += 1;
          renderPaseVisita();
        }, 220);
      });
    });
  };

  // 4. DETECTIVE DIAGNÓSTICO QUIRÚRGICO (PISTAS PROGRESIVAS)
  const CLUE_META = [
    { key: 'interrogatorio', label: '1. Interrogatorio Dirigido' },
    { key: 'exploracion', label: '2. Exploración Física' },
    { key: 'laboratorio', label: '3. Laboratorio y Gasometría' },
    { key: 'imagen', label: '4. Imagen / Hallazgo Crítico' },
  ];
  const renderDetective = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const i = state.detectiveIdx % pool.length;
    const c = pool[i];
    const clues = Array.isArray(c.clueList)
      ? c.clueList.map((text, k) => ({ label: `Pista ${k + 1}`, text }))
      : CLUE_META.map((cm) => ({ label: cm.label, text: c.clues?.[cm.key] || '' }));
    const open = Math.max(1, Math.min(clues.length, state.detectiveOpen));
    const potentialPts = Math.max(80, 220 - (open - 1) * 35) + (state.level === 'dificil' ? 40 : 0);
    const sh = shuffled(c.id || c.title, c.options, c.ans);

    stage.innerHTML = `
      <div class="triage-card">
        <div class="triage-monitor">
          <div>
            <p class="mono triage-kicker" style="color:var(--juegos)"><span class="triage-kicker-ic">${icon('search')}</span><span>DETECTIVE DIAGNÓSTICO QUIRÚRGICO · CASO ${i + 1}/${pool.length}</span></p>
            <strong>${esc(c.title)}${c.tag && !c.grade ? ` · (${esc(c.tag)})` : ''}</strong> ${gradeChip(c)}
          </div>
          <span class="chip">${open}/${clues.length} pistas abiertas</span>
        </div>

        ${c.chief ? `<p class="triage-vig" style="margin-bottom:12px"><strong>Motivo de ingreso:</strong> ${esc(c.chief)}</p>` : ''}

        <div class="arcade-clue-grid">
          ${clues.map((cl, k) => {
            const isOpen = k < open;
            return `
            <div class="glass arcade-clue${isOpen ? ' is-open' : ''}">
              <div class="arcade-clue-head">
                <strong class="mono">${esc(cl.label)}</strong>
                ${isOpen ? '<span class="chip" style="font-size:.65rem">Abierta</span>' : (k === open ? '<button type="button" class="btn btn-sm btn-ghost" data-open-clue>Destapar pista</button>' : '<span class="mono muted" style="font-size:.7rem">Bloqueada</span>')}
              </div>
              <p>${isOpen ? esc(cl.text) : 'Pista oculta. Destápala si necesitas más datos clínicos.'}</p>
            </div>`;
          }).join('')}
        </div>

        <h3 class="blitz-q" style="font-size:1.05rem;margin-bottom:10px">¿Cuál es tu diagnóstico definitivo?</h3>
        ${optsHtml(sh.opts)}
        ${evalBarHtml()}
      </div>`;

    wireEvalBar('detective', 'Detective Diagnóstico Quirúrgico');
    stage.querySelector('[data-open-clue]')?.addEventListener('click', () => {
      playUiSfx('click');
      taunts.touch();
      state.detectiveOpen = open + 1;
      renderDetective();
    });

    stage.querySelectorAll('.blitz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pickedIdx = Number(btn.dataset.idx);
        const ok = pickedIdx === sh.ans;
        stage.querySelectorAll('.blitz-opt, [data-open-clue]').forEach((b) => { b.disabled = true; });
        btn.classList.add('is-picked');
        playUiSfx('click');
        taunts.touch();
        sessionLog.push({
          q: `${c.title}${c.chief ? ` · ${c.chief}` : ''}`,
          picked: sh.opts[pickedIdx] || '',
          right: sh.opts[sh.ans] || '',
          ok,
          exp: `${c.why || ''}${c.management ? ` Conducta: ${c.management}` : ''}`.trim(),
          pts: potentialPts,
          topic: c.title,
        });
        advanceId = setTimeout(() => {
          state.detectiveIdx += 1;
          state.detectiveOpen = 1;
          renderDetective();
        }, 220);
      });
    });
  };

  // Ordenar pasos a ciegas (Quirófano y Arma el Algoritmo): el usuario arma su secuencia sin pistas y CALOT evalúa al final.
  const renderOrdering = ({ item, idxKey, kicker, iconName, intro, ptsStep, ptsDone, modeId, modeLabel, explain }) => {
    const pool = curPool();
    const steps = (item.steps || []).map((s) => (typeof s === 'string' ? { step: s } : s));
    const distractors = item.distractors || [];
    const key = item.id || item.title;
    if (state.order.key !== key) state.order = { key, picked: [], errors: 0, done: false };
    const cards = [...steps.map((s, k) => ({ k: String(k), s, trap: false })), ...distractors.map((d, k) => ({ k: `t${k}`, s: { step: d }, trap: true }))];
    const order = shuffledOrder(`ord:${key}`, cards.length);
    const i = state[idxKey] % pool.length;

    stage.innerHTML = `
      <div class="triage-card">
        <div class="triage-monitor" style="flex-wrap:wrap;gap:10px">
          <div>
            <p class="mono triage-kicker" style="color:var(--juegos)"><span class="triage-kicker-ic">${icon(iconName)}</span><span>${esc(kicker)} · ${i + 1}/${pool.length}</span></p>
            <strong>${esc(item.title)}</strong> ${gradeChip(item)}
          </div>
          <span class="chip">Elegidos ${state.order.picked.length} de ${steps.length}</span>
        </div>
        ${item.caso ? `<p class="triage-vig">${esc(item.caso)}</p>` : ''}
        ${intro}
        <div class="arcade-order-list">
          ${order.map((oi) => {
            const card = cards[oi];
            const pickedPos = state.order.picked.indexOf(card.k);
            const isPicked = pickedPos !== -1;
            const cleanTitle = String(card.s.step || '').replace(/^\d+\.\s*/, '');
            return `
            <button type="button" class="blitz-opt ${isPicked ? 'is-picked' : ''}" data-ord="${card.k}" ${isPicked ? 'disabled' : ''}>
              <div style="text-align:left">
                ${isPicked ? `<span class="chip mono" style="margin-right:8px">Paso ${pickedPos + 1}</span>` : ''}
                <strong>${esc(cleanTitle)}</strong>
                ${card.s.detail ? `<div class="muted" style="font-size:.82rem">${esc(card.s.detail)}</div>` : ''}
              </div>
            </button>`;
          }).join('')}
        </div>
        ${state.order.picked.length ? `<div style="margin-bottom:10px"><button type="button" class="btn btn-sm btn-ghost" id="ord-undo">Deshacer último paso</button></div>` : ''}
        ${evalBarHtml()}
      </div>`;

    wireEvalBar(modeId, modeLabel);
    stage.querySelector('#ord-undo')?.addEventListener('click', () => {
      playUiSfx('click');
      state.order.picked.pop();
      paintMode();
    });

    stage.querySelectorAll('[data-ord]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const raw = btn.dataset.ord;
        if (state.order.picked.includes(raw)) return;
        playUiSfx('click');
        taunts.touch();
        state.order.picked.push(raw);
        if (state.order.picked.length >= steps.length) {
          const exact = state.order.picked.every((k, pos) => k === String(pos));
          const pickedLabels = state.order.picked.map((k, pos) => {
            const cObj = cards.find((x) => x.k === k);
            return `${pos + 1}. ${String(cObj?.s.step || '').replace(/^\d+\.\s*/, '')}`;
          }).join(' → ');
          const rightLabels = steps.map((s, pos) => `${pos + 1}. ${String(s.step || '').replace(/^\d+\.\s*/, '')}`).join(' → ');
          sessionLog.push({
            q: `${item.title}${item.caso ? ` · ${item.caso}` : ''}`,
            picked: pickedLabels,
            right: rightLabels,
            ok: exact,
            exp: explain || '',
            pts: ptsDone + ptsStep * steps.length,
            topic: item.title,
          });
          state[idxKey] += 1;
          state.order = { key: '', picked: [], errors: 0, done: false };
          advanceId = setTimeout(() => paintMode(), 240);
          return;
        }
        paintMode();
      });
    });
  };

  // 5. QUIRÓFANO PASO A PASO
  const renderQuirofano = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const proc = pool[state.quirofanoProcIdx % pool.length];
    const nSteps = (proc.steps || []).length;
    renderOrdering({
      item: proc,
      idxKey: 'quirofanoProcIdx',
      kicker: 'QUIRÓFANO PASO A PASO',
      iconName: 'layers',
      intro: `<p class="muted" style="margin:0 0 12px">Selecciona los <strong>${nSteps} tiempos quirúrgicos en orden cronológico</strong>. CALOT no te corregirá hasta el veredicto final.</p>`,
      ptsStep: 40,
      ptsDone: 120,
      modeId: 'quirofano',
      modeLabel: 'Quirófano Paso a Paso',
      explain: proc.exp || '',
    });
  };

  // 6. NOCTUA · SIMULADOR CLÍNICO EVOLUTIVO
  const renderNoctua = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    const flat = [];
    for (const c of pool) (c.steps || []).forEach((s, si) => flat.push({ c, s, si, n: c.steps.length }));
    if (!flat.length) return renderEmpty();
    const { c, s: step, si, n } = flat[state.noctuaIdx % flat.length];
    const sh = shuffled(`${c.id}:${si}`, step.opts, step.ans);
    const caseNo = pool.indexOf(c) + 1;
    stage.innerHTML = `
      <div class="triage-card">
        <div class="triage-monitor">
          <div>
            <p class="mono triage-kicker" style="color:var(--juegos)"><span class="triage-kicker-ic">${icon('brain')}</span><span>PACIENTE EN EVOLUCIÓN · CASO ${caseNo}/${pool.length} · TIEMPO ${si + 1}/${n}</span></p>
            <strong>${esc(c.title)}${step.turn ? ` · ${esc(step.turn)}` : ''}</strong> ${gradeChip(c)}
          </div>
          ${step.vitals ? `<span class="mono">${esc(step.vitals)}</span>` : ''}
        </div>
        <div class="arcade-timeline" aria-hidden="true">${Array.from({ length: n }, (_, k) => `<i class="${k < si ? 'is-done' : k === si ? 'is-now' : ''}"></i>`).join('')}</div>
        ${si === 0 && c.caso ? `<p class="triage-vig"><strong>Caso:</strong> ${esc(c.caso)}</p>` : ''}
        <p class="triage-vig">${esc(step.story)}</p>
        <h3 class="blitz-q" style="font-size:18px">${esc(step.q)}</h3>
        ${optsHtml(sh.opts)}
        ${evalBarHtml()}
      </div>`;

    wireEvalBar('noctua', 'NOCTUA · Simulador Evolutivo');
    stage.querySelectorAll('.blitz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pickedIdx = Number(btn.dataset.idx);
        const ok = pickedIdx === sh.ans;
        stage.querySelectorAll('.blitz-opt').forEach((b) => { b.disabled = true; });
        btn.classList.add('is-picked');
        playUiSfx('click');
        taunts.touch();
        sessionLog.push({
          q: `${c.title} (${step.turn || `T${si + 1}`}): ${step.q}`,
          picked: sh.opts[pickedIdx] || '',
          right: sh.opts[sh.ans] || '',
          ok,
          exp: step.exp || '',
          pts: state.level === 'dificil' ? 210 : 180,
          topic: `${c.title} · ${step.turn || ''}`.slice(0, 60),
        });
        advanceId = setTimeout(() => {
          state.noctuaIdx += 1;
          renderNoctua();
        }, 220);
      });
    });
  };

  // 7. GUARDIA NOCTURNA
  const renderGuardia = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const i = state.guardiaIdx % pool.length;
    const c = pool[i];
    const sh = shuffled(c.id, c.opts, c.ans);
    stage.innerHTML = `
      <div class="triage-card guardia-card">
        <div class="triage-monitor">
          <div>
            <p class="mono triage-kicker" style="color:var(--juegos)"><span class="triage-kicker-ic">${icon('clock')}</span><span>GUARDIA NOCTURNA · 03:00 A. M. · LLAMADA ${i + 1}/${pool.length}</span></p>
            <strong>${esc(c.tema)}</strong> ${gradeChip(c)}
          </div>
          <span class="chip guardia-clock">03:00</span>
        </div>
        <p class="triage-vig">${esc(c.caso)}</p>
        <div class="guardia-vitals"><span class="mono">T0 · LLEGADA</span><p>${esc(c.t0)}</p></div>
        <h3 class="blitz-q" style="font-size:1.05rem">${esc(c.q || '¿Qué haces?')}</h3>
        ${optsHtml(sh.opts)}
        ${evalBarHtml()}
      </div>`;

    wireEvalBar('guardia', 'Guardia Nocturna');
    stage.querySelectorAll('.blitz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pickedIdx = Number(btn.dataset.idx);
        const ok = pickedIdx === sh.ans;
        stage.querySelectorAll('.blitz-opt').forEach((b) => { b.disabled = true; });
        btn.classList.add('is-picked');
        playUiSfx('click');
        taunts.touch();
        sessionLog.push({
          q: `${c.tema}: ${c.caso} — ${c.q || '¿Qué haces?'}`,
          picked: sh.opts[pickedIdx] || '',
          right: sh.opts[sh.ans] || c.answer || '',
          ok,
          exp: `${ok ? (c.t2Good || '') : (c.t2Bad || c.t1Bad || '')} ${c.exp || ''}`.trim(),
          pts: 170,
          topic: c.tema,
        });
        advanceId = setTimeout(() => {
          state.guardiaIdx += 1;
          renderGuardia();
        }, 220);
      });
    });
  };

  // 8. EL ADSCRITO TE PREGUNTA (cadena P1→P2→P3 sin revelar aciertos en vivo)
  const AP_PTS = [100, 150, 200, 80];
  const renderAdscrito = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const i = state.adscritoIdx % pool.length;
    const c = pool[i];
    const ch = state.chain.key === c.id ? state.chain : (state.chain = { key: c.id, step: 0, log: [] });
    if (ch.step >= 3 || ch.finished) {
      state.adscritoIdx += 1;
      state.chain = { key: '', step: 0, log: [] };
      renderAdscrito();
      return;
    }
    const q = c.chain[ch.step];
    const sh = shuffled(`${c.id}:${q.p}`, q.opts, q.ans);
    const lvlTxt = { P1: 'Pregunta base', P2: 'Sube la dificultad', P3: 'Nivel avanzado' }[q.p] || q.nivel;
    stage.innerHTML = `
      <div class="triage-card">
        <div class="triage-monitor">
          <div>
            <p class="mono triage-kicker" style="color:var(--juegos)"><span class="triage-kicker-ic">${icon('feather')}</span><span>EL ADSCRITO TE PREGUNTA · PASE ${i + 1}/${pool.length}</span></p>
            <strong>${esc(c.tema)}</strong> ${gradeChip(c)}
          </div>
          <div class="ap-steps">${['P1', 'P2', 'P3'].map((p, k) => `<span class="ap-step ${k === ch.step ? 'is-now' : ''}">${p}</span>`).join('')}</div>
        </div>
        <p class="mono muted" style="margin:0 0 6px">${esc(lvlTxt)}</p>
        <h3 class="blitz-q" style="font-size:1.08rem">${esc(q.q)}</h3>
        ${optsHtml(sh.opts)}
        ${evalBarHtml()}
      </div>`;

    wireEvalBar('adscrito', 'El Adscrito Te Pregunta');
    stage.querySelectorAll('.blitz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pickedIdx = Number(btn.dataset.idx);
        const ok = pickedIdx === sh.ans;
        stage.querySelectorAll('.blitz-opt').forEach((b) => { b.disabled = true; });
        btn.classList.add('is-picked');
        playUiSfx('click');
        taunts.touch();
        ch.log.push({ p: q.p, ok });
        sessionLog.push({
          q: `${c.tema} (${q.p}): ${q.q}`,
          picked: sh.opts[pickedIdx] || '',
          right: sh.opts[sh.ans] || '',
          ok,
          exp: q.exp || '',
          pts: AP_PTS[ch.step] || 120,
          topic: c.tema,
        });
        advanceId = setTimeout(() => {
          ch.step += 1;
          renderAdscrito();
        }, 220);
      });
    });
  };

  // 9. ARMA EL ALGORITMO
  const renderAlgoritmo = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const a = pool[state.algoritmoIdx % pool.length];
    renderOrdering({
      item: a,
      idxKey: 'algoritmoIdx',
      kicker: 'ARMA EL ALGORITMO',
      iconName: 'grid',
      intro: `<p class="muted" style="margin:0 0 12px">${a.algoritmo ? `<strong>${esc(a.algoritmo)}</strong> ` : ''}${a.guia ? `<span class="mono">(${esc(a.guia)})</span>` : ''}<br>Selecciona los pasos en el orden en que deben decidirse. CALOT evaluará al final.</p>`,
      ptsStep: 30,
      ptsDone: 150,
      modeId: 'algoritmo',
      modeLabel: 'Arma el Algoritmo',
      explain: a.exp ? `Por qué ese orden: ${a.exp}` : '',
    });
  };

  // 10. ¿QUÉ SE TE PASÓ? (registra hipótesis en silencio y CALOT evalúa al final)
  const renderSePaso = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const i = state.sepasoIdx % pool.length;
    const c = pool[i];
    stage.innerHTML = `
      <div class="triage-card">
        <div class="triage-monitor">
          <div>
            <p class="mono triage-kicker" style="color:var(--juegos)"><span class="triage-kicker-ic">${icon('eye')}</span><span>¿QUÉ SE TE PASÓ? · NOTA ${i + 1}/${pool.length}</span></p>
            <strong>${esc(c.tema)}</strong> ${gradeChip(c)}
          </div>
          <span class="chip">1 error escondido</span>
        </div>
        <div class="sepaso-note"><span class="mono">NOTA CLÍNICA · YA "RESUELTA"</span><p>${esc(c.nota)}</p></div>
        <label class="field sepaso-guess">¿Cuál es el error oculto en esta nota?
          <textarea class="input" id="qp-input" rows="3" placeholder="Escribe qué antibiótico, dosis, estudio, profilaxis o tiempo está mal…"></textarea>
        </label>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button type="button" class="btn btn-glow" id="qp-save">Registrar y siguiente nota →</button>
        </div>
        ${evalBarHtml()}
      </div>`;
    wireEvalBar('sepaso', '¿Qué se te pasó?');
    stage.querySelector('#qp-save')?.addEventListener('click', () => {
      const guess = String(stage.querySelector('#qp-input')?.value || '').trim();
      if (!guess) {
        toast('Escribe tu hipótesis antes de avanzar');
        return;
      }
      playUiSfx('click');
      taunts.touch();
      const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const refTokens = norm(`${c.error} ${c.debio}`).split(/[^a-z0-9]+/).filter((w) => w.length >= 5);
      const guessNorm = norm(guess);
      const hits = refTokens.filter((w) => guessNorm.includes(w)).length;
      const ok = hits >= Math.min(2, Math.max(1, refTokens.length));
      sessionLog.push({
        q: `${c.tema}: ${c.nota.slice(0, 220)}${c.nota.length > 220 ? '…' : ''}`,
        picked: guess,
        right: `${c.error} · Debió hacerse: ${c.debio}`,
        ok,
        exp: `${c.consecuencia ? `Consecuencia: ${c.consecuencia}. ` : ''}${c.exp || ''}`.trim(),
        pts: 130,
        topic: c.tema,
      });
      state.sepasoIdx += 1;
      renderSePaso();
    });
  };

  // 11. DUELO DE RESIDENTES (ronda ciega de 11 preguntas → evaluación CALOT)
  const DUEL_TARGET = 11;
  const DUEL_SEC = 15;
  const renderDuelo = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const d = state.duel;
    if (!d.active) {
      stage.innerHTML = `
        <div class="game-hero-start duel-start">
          <span class="icon-tile">${icon('bolt', 'ic3d')}</span>
          <h2>Duelo de Residentes · ${DUEL_TARGET} asaltos a ciegas</h2>
          <p class="muted">${DUEL_SEC} segundos por pregunta contra el R rival. Sin marcador en vivo: al terminar los ${DUEL_TARGET} asaltos, CALOT dictará el veredicto.</p>
          <button type="button" class="btn btn-glow" id="duel-start">${icon('play')} Empezar duelo</button>
        </div>`;
      stage.querySelector('#duel-start')?.addEventListener('click', () => {
        playUiSfx('click');
        sessionLog = [];
        state.duel = { active: true, me: 0, rival: 0, count: 0, idx: Math.floor(Math.random() * pool.length), t: DUEL_SEC, result: null };
        state.modeStartTs = Date.now();
        renderDuelo();
      });
      return;
    }
    if ((d.count || 0) >= DUEL_TARGET) {
      stage.innerHTML = `
        <div class="game-hero-start duel-start">
          <span class="icon-tile">${icon('trophy', 'ic3d')}</span>
          <h2>Duelo concluido · ${DUEL_TARGET} asaltos registrados</h2>
          <p class="muted">¿Le ganaste al rival o quedaste en ridículo? Pídele a CALOT que te evalúe.</p>
          <button type="button" class="btn eval-cta-btn" id="duel-eval-now">Pedirle a CALOT que me evalúe →</button>
        </div>`;
      stage.querySelector('#duel-eval-now')?.addEventListener('click', () => {
        const win = d.me > d.rival;
        const detail = `${d.me}–${d.rival} vs Rival`;
        state.duel = { active: false, me: 0, rival: 0, count: 0, idx: 0, t: DUEL_SEC, result: { win, me: d.me, rival: d.rival } };
        runModeEvaluation({ modeId: 'duelo', modeLabel: 'Duelo de Residentes', detail, onAfter: () => renderDuelo() });
      });
      return;
    }
    const q = pool[d.idx % pool.length];
    const sh = shuffled(`duel:${q.id}:${d.idx}`, q.opts, q.ans);
    d.t = DUEL_SEC;
    let answered = false;
    stage.innerHTML = `
      <div class="game-top">
        <div><p class="mono">DUELO · ASALTO ${(d.count || 0) + 1} DE ${DUEL_TARGET}${q.tag ? ` · ${esc(q.tag)}` : ''} ${gradeChip(q)}</p></div>
        <div class="game-hud-pills">
          <span class="chip" id="duel-timer">${icon('clock')} ${d.t}s</span>
          <button type="button" class="btn btn-sm eval-cta-btn" id="duel-eval-early" ${sessionLog.length === 0 ? 'disabled' : ''}>Pedirle a CALOT que me evalúe</button>
        </div>
      </div>
      <div class="blitz-box">
        <h3 class="blitz-q">${esc(q.q)}</h3>
        ${optsHtml(sh.opts)}
      </div>`;

    stage.querySelector('#duel-eval-early')?.addEventListener('click', () => {
      clearInterval(timer);
      const detail = `${d.me}–${d.rival} vs Rival`;
      state.duel = { active: false, me: 0, rival: 0, count: 0, idx: 0, t: DUEL_SEC, result: null };
      runModeEvaluation({ modeId: 'duelo', modeLabel: 'Duelo de Residentes', detail, onAfter: () => renderDuelo() });
    });

    const resolve = (ok, btn, pickedIdx = null) => {
      if (answered) return;
      answered = true;
      clearInterval(timer);
      stage.querySelectorAll('.blitz-opt').forEach((b) => { b.disabled = true; });
      if (btn) btn.classList.add('is-picked');
      playUiSfx('click');
      taunts.touch();
      if (ok) d.me += 1; else d.rival += 1;
      d.count = (d.count || 0) + 1;
      sessionLog.push({
        q: q.q,
        picked: pickedIdx !== null ? (sh.opts[pickedIdx] || '') : 'Sin respuesta (tiempo agotado)',
        right: sh.opts[sh.ans] || '',
        ok,
        exp: q.exp || '',
        pts: 95,
        topic: q.tag || 'Duelo',
      });
      d.idx += 1;
      advanceId = setTimeout(() => {
        if (!stage.isConnected) return;
        renderDuelo();
      }, 220);
    };
    stage.querySelectorAll('.blitz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pickedIdx = Number(btn.dataset.idx);
        resolve(pickedIdx === sh.ans, btn, pickedIdx);
      });
    });
    timer = setInterval(() => {
      d.t -= 1;
      const tEl = stage.querySelector('#duel-timer');
      if (tEl) { tEl.innerHTML = `${icon('clock')} ${d.t}s`; if (d.t <= 5) tEl.classList.add('pulse-danger'); }
      if (d.t <= 0) resolve(false, null, null);
    }, 1000);
  };

  // 12. IMAGEN MISTERIOSA
  const renderImagen = () => {
    clearInterval(timer);
    clearTimeout(advanceId);
    const pool = curPool();
    if (!pool.length) return renderEmpty();
    const i = state.imagenIdx % pool.length;
    const c = pool[i];
    const open = Math.max(0, Math.min(c.pistas.length, state.imagenOpen));
    const pts = Math.max(70, 230 - open * 50);
    const others = (JUEGOS_NUEVOS.imagen || []).filter((x) => canSee(x.grade) && x.id !== c.id && x.dx !== c.dx);
    const same = others.filter((x) => x.grade === c.grade);
    const pickFrom = same.length >= 3 ? same : others;
    const ord = shuffledOrder(`imd:${c.id}`, pickFrom.length).slice(0, 3);
    const sh = shuffled(`im:${c.id}`, [c.dx, ...ord.map((k) => pickFrom[k].dx)], 0);
    stage.innerHTML = `
      <div class="triage-card">
        <div class="triage-monitor">
          <div>
            <p class="mono triage-kicker" style="color:var(--juegos)"><span class="triage-kicker-ic">${icon('eye')}</span><span>IMAGEN MISTERIOSA · ESTUDIO ${i + 1}/${pool.length}</span></p>
            <strong>${esc(c.tema)}</strong> ${gradeChip(c)}
          </div>
          <span class="chip">${open}/${c.pistas.length} pistas abiertas</span>
        </div>
        <figure class="imagen-viewer">
          <figcaption class="mono">VISOR PACS · DESCRIPCIÓN DEL ESTUDIO</figcaption>
          <p>${esc(c.imagen)}</p>
        </figure>
        <div class="arcade-clue-grid">
          ${c.pistas.map((p, k) => `
            <div class="glass arcade-clue${k < open ? ' is-open' : ''}">
              <div class="arcade-clue-head"><strong class="mono">Pista ${k + 1}</strong>
                ${k < open ? '<span class="chip" style="font-size:.65rem">Abierta</span>' : (k === open ? '<button type="button" class="btn btn-sm btn-ghost" data-im-clue>Destapar pista</button>' : '<span class="mono muted" style="font-size:.7rem">Bloqueada</span>')}
              </div>
              <p>${k < open ? esc(p) : 'Oculta.'}</p>
            </div>`).join('')}
        </div>
        <h3 class="blitz-q" style="font-size:1.05rem">¿Cuál es el diagnóstico?</h3>
        ${optsHtml(sh.opts)}
        ${evalBarHtml()}
      </div>`;
    wireEvalBar('imagen', 'Imagen Misteriosa');
    stage.querySelector('[data-im-clue]')?.addEventListener('click', () => { playUiSfx('click'); taunts.touch(); state.imagenOpen = open + 1; renderImagen(); });
    stage.querySelectorAll('.blitz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pickedIdx = Number(btn.dataset.idx);
        const ok = pickedIdx === sh.ans;
        stage.querySelectorAll('.blitz-opt, [data-im-clue]').forEach((b) => { b.disabled = true; });
        btn.classList.add('is-picked');
        playUiSfx('click');
        taunts.touch();
        sessionLog.push({
          q: `${c.tema}: ${c.imagen}`,
          picked: sh.opts[pickedIdx] || '',
          right: sh.opts[sh.ans] || c.dx,
          ok,
          exp: `${c.hallazgo ? `Hallazgo clave: ${c.hallazgo}. ` : ''}${c.exp || ''}`.trim(),
          pts,
          topic: c.tema,
        });
        advanceId = setTimeout(() => {
          state.imagenIdx += 1;
          state.imagenOpen = 0;
          renderImagen();
        }, 220);
      });
    });
  };

  const RENDERERS = {
    blitz: () => renderBlitz(),
    lapblanca: () => renderLapBlanca(),
    pase: () => renderPaseVisita(),
    detective: () => renderDetective(),
    quirofano: () => renderQuirofano(),
    noctua: () => renderNoctua(),
    guardia: () => renderGuardia(),
    adscrito: () => renderAdscrito(),
    algoritmo: () => renderAlgoritmo(),
    sepaso: () => renderSePaso(),
    duelo: () => renderDuelo(),
    imagen: () => renderImagen(),
  };
  function paintMode() {
    state.modeStartTs = Date.now();
    (RENDERERS[state.mode] || RENDERERS.blitz)();
  }

  // Barra de nivel / año (filtra por canSee: Daniela no ve R4).
  root.querySelector('[data-arcade-filters]')?.addEventListener('click', (e) => {
    const b = e.target.closest('[data-set-level],[data-set-year]');
    if (!b) return;
    playUiSfx('click');
    if (b.dataset.setLevel) state.level = b.dataset.setLevel;
    if (b.dataset.setYear) state.year = b.dataset.setYear;
    try { localStorage.setItem(LEVEL_KEY, state.level); localStorage.setItem(YEAR_KEY, state.year); } catch {}
    resetIndices();
    sessionLog = [];
    state.blitzActive = false;
    state.lastBlitzResult = null;
    root.querySelectorAll('[data-set-level]').forEach((x) => x.classList.toggle('is-on', x.dataset.setLevel === state.level));
    root.querySelectorAll('[data-set-year]').forEach((x) => x.classList.toggle('is-on', x.dataset.setYear === state.year));
    const cnt = root.querySelector('[data-pool-count]');
    if (cnt) cnt.textContent = poolLabel(state.mode);
    paintMode();
  });

  deck?.addEventListener('click', (e) => {
    if (e.target.closest('[data-mode]')) playUiSfx('click');
  });

  if (stage) paintMode();
  S.scope(root, () => { S.compactHeader(root); S.reveal(root); });
}
