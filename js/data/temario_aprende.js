// Lista de módulos de Aprende en el orden del temario del HGR 72:
//  · R1, R3 y R4: módulos nuevos con los resúmenes de Drive (temario_drive.js), uno por tema del hospital.
//  · R2: los módulos de ARGOS-MED se conservan íntegros (son más extensos y citados) y al final de cada uno se agregan
//    las síntesis de Drive (hojas extra, repaso rápido en Ejecutivo y perlas).
//  · Los bloques transversales originales (HBP y trauma) quedan al final, después de R4.
import { TEMARIO_APRENDE_BASE } from './temario_aprende_base.js?v=20261121r';
import { DRIVE_MODULES, DRIVE_R2_ADDITIONS } from './temario_drive.js?v=20261121r';
import { canSee } from '../perfil.js?v=20261121r';
import { SUBTEMA_SHEETS } from './subtemas_drive.js?v=20261121r';
import { BREVES_R1 } from './breves/r1.js?v=20261121r';
import { BREVES_R2 } from './breves/r2.js?v=20261121r';
import { BREVES_R3 } from './breves/r3.js?v=20261121r';
import { BREVES_R4 } from './breves/r4.js?v=20261121r';

// Resumen breve por módulo (vista «Ejecutivo»); reemplaza al original si existe.
const BREVES = { ...BREVES_R1, ...BREVES_R2, ...BREVES_R3, ...BREVES_R4 };

export { TEMARIO_APRENDE_BASE };

const R2_ORDER = ['piel', 'quemaduras', 'neoplasias', 'pared', 'esofago', 'estomago', 'delgado', 'colon', 'recto'];

function withDrive(t) {
  const add = DRIVE_R2_ADDITIONS[t.id];
  if (!add) return t;
  const base = t.subblocks || [];
  const extra = add.subblocks.map((sb, i) => ({ ...sb, num: String(base.length + i + 1).padStart(2, '0') }));
  const subblocks = [...base, ...extra];
  const totalWords = subblocks.reduce((a, s) => a + (s.wordCount || 0), 0);
  return {
    ...t,
    subblocks,
    totalWords,
    readTimeMin: Math.max(t.readTimeMin || 0, Math.round(totalWords / 220)),
    summary: `${t.summary || ''}\n\n---\n\n${add.summary}`.trim(),
    keyPoints: `${t.keyPoints || ''}\n\n${add.keyPoints}`.trim(),
  };
}

const r2 = R2_ORDER.map((id) => TEMARIO_APRENDE_BASE.find((t) => t.id === id)).filter(Boolean)
  .map(withDrive)
  .map((t) => bySubtema(t))
  .map((t, i) => ({ ...t, num: `2.${String(i + 1).padStart(2, '0')}` })); // misma numeración que R1/R3/R4 (año.tema)
const transversal = TEMARIO_APRENDE_BASE.filter((t) => !R2_ORDER.includes(t.id));
// Cada perfil ve solo los años permitidos (Daniela: sin R4)
// Si el módulo ya está reorganizado por subtema, sus hojas reemplazan a las originales
function bySubtema(m) {
  const sheets = SUBTEMA_SHEETS[m.id];
  const out = sheets ? {
    ...m,
    subblocks: sheets,
    totalWords: sheets.reduce((a, b) => a + b.wordCount, 0),
    readTimeMin: sheets.reduce((a, b) => a + b.readTimeMin, 0),
  } : m;
  return BREVES[m.id] ? { ...out, summary: BREVES[m.id] } : out;
}
const byYear = (y) => (canSee(y) ? DRIVE_MODULES.filter((m) => m.year === y).map(bySubtema) : []);

export const TEMARIO_APRENDE = [
  ...byYear('R1'),
  ...r2,
  ...byYear('R3'),
  ...byYear('R4'),
  ...transversal,
];

// Año de cada módulo (los transversales cuentan como R2 para no salir de su grupo original)
export const yearOfTopic = (t) => (t?.year && /^R[1-4]$/.test(t.year) ? t.year : 'R2');
