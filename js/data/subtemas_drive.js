// Hojas reorganizadas por subtema: el material de Drive venía con cada apartado mezclando enfermedades
// (p. ej. «Definición» de pancreatitis aguda y crónica juntas). Aquí cada subtema tiene su propia hoja,
// con el mismo contenido de Drive reacomodado. Un módulo con entrada aquí reemplaza sus hojas originales.
// Los demás módulos de Drive viven en ./subtemas/ (uno por bloque del temario).
import { R1A } from './subtemas/r1a.js?v=20261121y';
import { R1B } from './subtemas/r1b.js?v=20261121y';
import { R1_TRAUMA } from './subtemas/r1_trauma.js?v=20261121y';
import { R3A } from './subtemas/r3a.js?v=20261121y';
import { R3B } from './subtemas/r3b.js?v=20261121y';
import { R4 } from './subtemas/r4.js?v=20261121y';
import { R4B } from './subtemas/r4b.js?v=20261121y';
import { R3C } from './subtemas/r3c.js?v=20261121y';
import { R2 } from './subtemas/r2.js?v=20261121y';
import { R2_PARED_ESOFAGO } from './subtemas/r2_pared_esofago.js?v=20261121y';
import { R2_ESTOMAGO_DELGADO } from './subtemas/r2_estomago_delgado.js?v=20261121y';
import { R2_COLON } from './subtemas/r2_colon.js?v=20261121y';
import { R2_RECTO } from './subtemas/r2_recto.js?v=20261121y';

export const SUBTEMA_SHEETS = {
  ...R1A,
  ...R1B,
  ...R1_TRAUMA,
  ...R3A,
  ...R3B,
  ...R4,
  ...R4B,
  ...R3C,
  ...R2,
  ...R2_PARED_ESOFAGO,
  ...R2_ESTOMAGO_DELGADO,
  ...R2_COLON,
  ...R2_RECTO,
};
