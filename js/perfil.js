// Perfiles de acceso (fase de prueba). Es una puerta simulada: los códigos viven en el cliente.
// Mario (dueño) ve todo y conserva sus datos; las testers tienen su propio almacén y no ven lo personal.

export const PERFIL_KEY = 'calot:perfil';
const ALL = ['R1', 'R2', 'R3', 'R4'];

export const PROFILES = {
  mario: { id: 'mario', code: '12', name: 'Mario', title: 'Dr. Mario', owner: true, role: 'residente', grades: ALL, ciclo: 'R2', voice: null },
  chantal: { id: 'chantal', code: 'cha-b1', name: 'Dra. Chantal', title: 'Dra. Chantal', owner: false, role: 'residente', grades: ALL, ciclo: 'R2', voice: 'tester-chantal' },
  areli: { id: 'areli', code: 'are-b1', name: 'Dra. Areli', title: 'Dra. Areli', owner: false, role: 'residente', grades: ALL, ciclo: 'R2', voice: 'tester-areli' },
  daniela: { id: 'daniela', code: 'dan-b1', name: 'Dra. Daniela', title: 'Dra. Daniela', owner: false, role: 'residente', grades: ['R1', 'R2', 'R3'], ciclo: 'R2', voice: 'tester-daniela' },
  hernandez: { id: 'hernandez', code: 'he', name: 'Dra. Hernández', title: 'Dra. Hernández', owner: false, role: 'adscrito', grades: ALL, ciclo: 'Adscrita', voice: null },
};
export const TESTERS = ['chantal', 'areli', 'daniela'];
export const TESTER_RESET_EPOCH = 'calot:tester-reset:20261121-v3';

const getLS = (k) => { try { return localStorage.getItem(k); } catch { return null; } };

/** Limpia datos locales y banderas de intro de las 3 testers para que entren desde cero con su intro completa. */
export function wipeTestersLocalData() {
  try {
    for (const id of TESTERS) {
      localStorage.removeItem(`calot:v3:${id}`);
      localStorage.removeItem(`calot:intro-vista:${id}`);
      localStorage.removeItem(`calot:intro-vista:v2:${id}`);
      localStorage.removeItem(`calot:ranking:snap:${id}`);
      localStorage.removeItem(`calot:ranking:snap:v2:${id}`);
    }
    localStorage.setItem(TESTER_RESET_EPOCH, '1');
  } catch {}
}

if (typeof localStorage !== 'undefined' && getLS(TESTER_RESET_EPOCH) !== '1') {
  wipeTestersLocalData();
}

export const perfilId = () => (PROFILES[getLS(PERFIL_KEY)] ? getLS(PERFIL_KEY) : 'mario');
export const perfil = () => PROFILES[perfilId()];
export const isOwner = () => perfil().owner;
export const isAdscrito = () => perfil().role === 'adscrito';
export const canSee = (grade) => !grade || perfil().grades.includes(grade);
export const topGrade = () => perfil().grades[perfil().grades.length - 1];
/** Año permitido más cercano: el pedido si se puede ver; si no, el más alto permitido. */
export const allowedYear = (y) => (canSee(y) ? y : topGrade());

export function profileByCode(code) {
  const c = String(code || '').trim().toLowerCase();
  return Object.values(PROFILES).find((p) => p.code === c) || null;
}

export function setPerfil(id) {
  try { localStorage.setItem(PERFIL_KEY, id); } catch {}
}

/** Marca el perfil en <body> (para CSS: [data-owner="1"] / [data-owner="0"] y [data-rol="adscrito"]). */
export function markBody() {
  if (typeof document === 'undefined' || !document.body) return;
  document.body.dataset.perfil = perfilId();
  document.body.dataset.owner = isOwner() ? '1' : '0';
  document.body.dataset.rol = isAdscrito() ? 'adscrito' : 'residente';
}
