// Índice unificado del temario PUEM (R1–R4) para la sección Resúmenes.
// R2 enlaza a los resúmenes completos de TEMARIO_APRENDE; R1, R3 y R4 traen resumen esencial por subtema y,
// cuando hay resumen de Drive para el tema, enlazan también a su módulo de Aprende (ap-<id del tema>).
import { TEMARIO_APRENDE, TEMARIO_APRENDE_BASE } from './temario_aprende.js?v=20261122k';
import { TEMARIO_R1 } from './temario_r1.js';
import { TEMARIO_R3 } from './temario_r3.js';
import { TEMARIO_R4 } from './temario_r4.js';
import { canSee, isOwner } from '../perfil.js?v=20261122k';

// Solo los años que el perfil activo puede ver (Daniela: hasta R3)
export const YEARS = ['R1', 'R2', 'R3', 'R4'].filter(canSee);

export const SISTEMAS = [
  'Fundamentos y perioperatorio',
  'Trauma',
  'Piel, quemaduras y reconstructiva',
  'Oncología',
  'Pared abdominal y hernias',
  'Esófago',
  'Estómago y duodeno',
  'Intestino delgado',
  'Colon y apéndice',
  'Recto y ano',
  'Hígado',
  'Vías biliares',
  'Páncreas',
  'Bazo, peritoneo y retroperitoneo',
  'Cabeza, cuello y endocrino',
  'Mama',
  'Endoscopia',
  'Urología',
  'Ginecología',
  'Vascular',
  'Tórax',
  'Musculoesquelético',
  'Trasplante',
];

// R2 · Martes · Coordinadora Dra. Araceli Hernández Vargas (subtemas, ponentes y fechas del PDF)
const R2_SKELETON = [
  { aprende: 'piel', sistema: 'Piel, quemaduras y reconstructiva', subtemas: [
    { t: 'Generalidades de piel y tejidos blandos · tumores benignos', ponente: 'Jesús', fecha: '2026-03-03' },
    { t: 'Tumores malignos de la piel y sus anexos', ponente: 'Alina', fecha: '2026-03-10', sistema: 'Oncología' },
  ] },
  { aprende: 'quemaduras', sistema: 'Piel, quemaduras y reconstructiva', subtemas: [
    { t: 'Causas, clasificación, fisiopatología, manejo inicial y quirúrgico, prevención de secuelas', ponente: 'Ángel González', fecha: '2026-03-17' },
  ] },
  { aprende: 'neoplasias', sistema: 'Oncología', subtemas: [
    { t: 'Epidemiología, criterio oncológico y clasificación de neoplasias', ponente: 'Diana', fecha: '2026-03-24' },
    { t: 'Diagnóstico, enfoque multidisciplinario y principios del tratamiento quirúrgico', ponente: 'Alejandro', fecha: '2026-03-31' },
  ] },
  { aprende: 'pared', sistema: 'Pared abdominal y hernias', subtemas: [
    { t: 'Anatomía, incisiones, anomalías congénitas y cierre de pared', ponente: 'Luis', fecha: '2026-04-07' },
    { t: 'Etiopatogenia de hernias, materiales protésicos y hernias poco frecuentes', ponente: 'Ángel Contreras', fecha: '2026-04-14' },
    { t: 'Hernias ventrales, epigástricas y umbilicales: técnica abierta y mínima invasión', ponente: 'Isahy', fecha: '2026-04-21' },
    { t: 'Hernia inguinal: anatomía, reparación abierta y laparoscópica, complicaciones', ponente: 'Ulises', fecha: '2026-04-28' },
  ] },
  { aprende: 'esofago', sistema: 'Esófago', subtemas: [
    { t: 'Anatomía, fisiología y pruebas de función esofágica', ponente: 'Delia', fecha: '2026-05-12' },
    { t: 'Trastornos de motilidad esofágica', ponente: 'Dulce', fecha: '2026-05-19' },
    { t: 'Enfermedad por reflujo gastroesofágico', ponente: 'Tiffany', fecha: '2026-05-26' },
    { t: 'Esofagitis cáustica', ponente: 'Mario', fecha: '2026-06-02' },
    { t: 'Tumores esofágicos malignos y tratamiento paliativo', ponente: 'Ulises', fecha: '2026-06-09', sistema: 'Oncología' },
    { t: 'Divertículos, tumores benignos y complicaciones en cirugía esofágica', ponente: 'Marco', fecha: '2026-06-16' },
  ] },
  { aprende: 'estomago', sistema: 'Estómago y duodeno', subtemas: [
    { t: 'Anatomía, fisiología y pruebas de función gástrica', ponente: 'Alejandro', fecha: '2026-06-23' },
    { t: 'Enfermedad acidopéptica y H. pylori', ponente: 'Dulce', fecha: '2026-06-30' },
    { t: 'Úlcera gástrica y duodenal: tratamiento urgente y electivo', ponente: 'Tiffany', fecha: '2026-07-07' },
    { t: 'Hemorragia de tubo digestivo alto', ponente: 'Jesús', fecha: '2026-07-14' },
    { t: 'Tumores gástricos malignos', ponente: 'Alina', fecha: '2026-07-21', sistema: 'Oncología' },
    { t: 'Tumores gástricos benignos, divertículos, bezoar y complicaciones gastroduodenales', ponente: 'Mario', fecha: '2026-07-28' },
  ] },
  { aprende: 'delgado', sistema: 'Intestino delgado', subtemas: [
    { t: 'Anatomía, fisiología y enteritis específica', ponente: 'Isahy', fecha: '2026-08-04' },
    { t: 'Trombosis venosa y arterial intestinal', ponente: 'Ángel Contreras', fecha: '2026-08-11', sistema: 'Vascular' },
    { t: 'Síndrome adherencial', ponente: 'Marco', fecha: '2026-08-25' },
    { t: 'Fístulas intestinales (enterocutánea, enteroatmosférica)', ponente: 'Luis', fecha: '2026-09-01' },
    { t: 'Tumores benignos y divertículos del intestino delgado', ponente: 'Diana', fecha: '2026-09-08' },
    { t: 'Tumores carcinoides y tumores malignos del delgado', ponente: 'Delia · Ángel González', fecha: '2026-09-17', sistema: 'Oncología' },
    { t: 'Estomas', ponente: 'Dulce', fecha: '2026-09-29' },
  ] },
  { aprende: 'colon', sistema: 'Colon y apéndice', subtemas: [
    { t: 'Anatomía y fisiología del colon', ponente: 'Ulises', fecha: '2026-10-06' },
    { t: 'Colitis inespecíficas y amebiasis', ponente: 'Luis', fecha: '2026-10-13' },
    { t: 'Apendicitis', ponente: 'Mario', fecha: '2026-10-20' },
    { t: 'Enfermedad diverticular', ponente: 'Alejandro', fecha: '2026-10-27' },
    { t: 'Megacolon y vólvulos', ponente: 'Diana · Isahy', fecha: '2026-10-15' },
    { t: 'Colitis por Clostridioides difficile', ponente: 'Ángel Contreras', fecha: '2026-10-22' },
    { t: 'Tumores malignos y benignos de colon · complicaciones', ponente: 'Delia · Marco', fecha: '2026-11-03', sistema: 'Oncología' },
  ] },
  { aprende: 'recto', sistema: 'Recto y ano', subtemas: [
    { t: 'Anatomía, fisiología y pruebas de función anorrectal', ponente: 'Jesús', fecha: '2026-08-04' },
    { t: 'Enfermedad hemorroidal', ponente: 'Tiffany', fecha: '2026-08-11' },
    { t: 'Fístulas y abscesos', ponente: 'Ángel González', fecha: '2026-08-18' },
    { t: 'Fisuras anales y enfermedad pilonidal', ponente: 'Marco', fecha: '2026-08-25' },
    { t: 'Prolapso rectal', ponente: 'Alina', fecha: '2026-09-01' },
    { t: 'Tumores benignos anorrectales', ponente: 'Isahy', fecha: '2026-09-08' },
    { t: 'Tumores malignos anorrectales', ponente: 'Mario', fecha: '2026-09-22', sistema: 'Oncología' },
    { t: 'Traumatismo de la región anorrectal', ponente: 'Ángel Contreras', fecha: '2026-09-29', sistema: 'Trauma' },
  ] },
];

const bulletsFromMd = (md = '') => String(md)
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => /^[-*]\s+/.test(l))
  .map((l) => l.replace(/^[-*]\s+/, '').replace(/\*\*/g, ''));

function buildR2() {
  return R2_SKELETON.map((sk) => {
    const a = TEMARIO_APRENDE.find((t) => t.id === sk.aprende);
    return {
      id: `r2-${sk.aprende}`,
      year: 'R2',
      sistema: sk.sistema,
      title: a?.title || sk.aprende,
      subtitle: a?.subtitle || '',
      coordinador: 'Dra. Araceli Hernández Vargas',
      aprendeId: sk.aprende,
      readTimeMin: a?.readTimeMin || 0,
      // Lo esencial sale de las perlas originales del módulo (las de Drive viven en Aprende y Repaso)
      esencial: bulletsFromMd(TEMARIO_APRENDE_BASE.find((b) => b.id === sk.aprende)?.keyPoints),
      subtemas: sk.subtemas.map((s) => ({ ...s, puntos: [] })),
    };
  });
}

// Si el tema tiene módulo propio en Aprende (resúmenes de Drive) se enlaza a él; si no, al bloque transversal de antes
const withLinks = (list) => list.map((t) => {
  const own = TEMARIO_APRENDE.find((a) => a.id === `ap-${t.id}`);
  return {
    ...t,
    aprendeId: own ? own.id : (t.linkTo && TEMARIO_APRENDE.some((a) => a.id === t.linkTo) ? t.linkTo : null),
    readTimeMin: own ? own.readTimeMin : t.readTimeMin,
    esencial: t.esencial || (own ? bulletsFromMd(own.keyPoints).slice(0, 6) : undefined),
  };
});

export const TEMARIO_PUEM = [
  ...withLinks(TEMARIO_R1),
  ...buildR2(),
  ...withLinks(TEMARIO_R3),
  ...withLinks(TEMARIO_R4),
].filter((t) => canSee(t.year));

export const temaById = (id) => TEMARIO_PUEM.find((t) => t.id === id) || null;

// Sistemas que toca un tema (propio + los de sus subtemas)
export const temaSistemas = (t) => [...new Set([t.sistema, ...t.subtemas.map((s) => s.sistema).filter(Boolean)])];

export const subtemaSistema = (t, s) => s.sistema || t.sistema;

// Clases en las que Mario es ponente
export const isMine = (s) => isOwner() && /\bMario\b/.test(s.ponente || '');
