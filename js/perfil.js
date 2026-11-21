// Perfiles de Black Ops · Generación R2 Cirugía General HGR 72 + Coordinación (Dra. Hernández / Dr. Mario)

export const PERFIL_KEY = 'blackops:perfil';
const ALL = ['R1', 'R2', 'R3', 'R4'];

export const R2_RESIDENTS = [
  { id: 'jesus',     name: 'Dr. Jesús',           short: 'Jesús',           ini: 'JE', tema: 'Piel · Estómago · Recto' },
  { id: 'alina',     name: 'Dra. Alina',          short: 'Alina',           ini: 'AL', tema: 'Oncología cutánea · Gástrico · Recto' },
  { id: 'angel_g',   name: 'Dr. Ángel González',  short: 'Ángel González',  ini: 'AG', tema: 'Quemaduras · Delgado · Fístulas' },
  { id: 'diana',     name: 'Dra. Diana',          short: 'Diana',           ini: 'DI', tema: 'Neoplasias · Delgado · Colon' },
  { id: 'alejandro', name: 'Dr. Alejandro',       short: 'Alejandro',       ini: 'AJ', tema: 'Oncología · Estómago · Diverticular' },
  { id: 'luis',      name: 'Dr. Luis',            short: 'Luis',            ini: 'LU', tema: 'Pared · Fístulas · Colitis' },
  { id: 'angel_c',   name: 'Dr. Ángel Contreras', short: 'Ángel Contreras', ini: 'AC', tema: 'Hernias · Isquemia · C. difficile' },
  { id: 'isahy',     name: 'Dr. Isahy',           short: 'Isahy',           ini: 'IS', tema: 'Hernias ventrales · Delgado · Colon' },
  { id: 'ulises',    name: 'Dr. Ulises',          short: 'Ulises',          ini: 'UL', tema: 'Hernia inguinal · Esófago · Colon' },
  { id: 'delia',     name: 'Dra. Delia',          short: 'Delia',           ini: 'DE', tema: 'Esófago · Delgado · Colon' },
  { id: 'dulce',     name: 'Dra. Dulce',          short: 'Dulce',           ini: 'DU', tema: 'Motilidad · Acidopéptica · Estomas' },
  { id: 'tiffany',   name: 'Dra. Tiffany',        short: 'Tiffany',         ini: 'TI', tema: 'ERGE · Úlcera péptica · Hemorroides' },
  { id: 'marco',     name: 'Dr. Marco',           short: 'Marco',           ini: 'MC', tema: 'Divertículos · Adherencias · Colon' },
  { id: 'r2_mario',  name: 'Dr. Mario',           short: 'Mario',           ini: 'MR', tema: 'Cáustica · Gástrico · Apendicitis · Recto' },
];

export const PROFILES = {
  ...Object.fromEntries(
    R2_RESIDENTS.map((r) => [
      r.id,
      {
        id: r.id,
        code: r.id,
        name: r.name,
        title: r.name,
        short: r.short,
        ini: r.ini,
        tema: r.tema,
        owner: false,
        role: 'residente',
        grades: ALL,
        ciclo: 'R2',
        voice: null,
      },
    ])
  ),
  mario: { id: 'mario', code: '12', name: 'Dr. Mario', title: 'Dr. Mario (Control)', owner: true, role: 'adscrito', grades: ALL, ciclo: 'R2', voice: null },
  hernandez: { id: 'hernandez', code: 'he', name: 'Dra. Hernández', title: 'Dra. Araceli Hernández Vargas', owner: false, role: 'adscrito', grades: ALL, ciclo: 'Coordinadora R2', voice: null },
};

export const TESTERS = R2_RESIDENTS.map((r) => r.id);
export const TESTER_RESET_EPOCH = 'blackops:reset:20261121-v1';

const getLS = (k) => { try { return localStorage.getItem(k); } catch { return null; } };

export function wipeTestersLocalData() {
  try {
    localStorage.setItem(TESTER_RESET_EPOCH, '1');
  } catch {}
}

export const perfilId = () => (PROFILES[getLS(PERFIL_KEY)] ? getLS(PERFIL_KEY) : 'r2_mario');
export const perfil = () => PROFILES[perfilId()];
export const isOwner = () => Boolean(perfil().owner);
export const isAdscrito = () => perfil().role === 'adscrito';
export const canSee = (grade) => !grade || perfil().grades.includes(grade);
export const topGrade = () => perfil().grades[perfil().grades.length - 1];
export const allowedYear = (y) => (canSee(y) ? y : topGrade());

export function profileByCode(code) {
  const c = String(code || '').trim().toLowerCase();
  return Object.values(PROFILES).find((p) => p.code === c) || null;
}

export function setPerfil(id) {
  try { localStorage.setItem(PERFIL_KEY, id); } catch {}
}

export function markBody() {
  if (typeof document === 'undefined' || !document.body) return;
  document.body.dataset.perfil = perfilId();
  document.body.dataset.owner = isOwner() ? '1' : '0';
  document.body.dataset.rol = isAdscrito() ? 'adscrito' : 'residente';
}
