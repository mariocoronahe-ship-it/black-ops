// Pendientes, calendario y rotaciones de Mario (R2 Cirugía General, HGR 72).
// Fuente: rotaciones_mario_R2.md (actualizado 2026-11-19: WhatsApp, Gmail y rol de rotaciones R3).
// Sin datos de pacientes.
export const WA_SYNC_ID = 'rot-2026-11-19';

// IDs de versiones anteriores que este reemplazo retira (si siguen sin marcarse por el usuario)
export const PENDIENTES_RETIRADOS = [
  'wa-entrega-17nov', 'wa-clase-ovando-17nov', 'wa-sesion-obligatoria-17nov',
  'wa-examen-colon', 'wa-examen-recto', 'wa-evidencia-recto', 'wa-afrontamiento',
  'wa-caso-clinico-r2', 'wa-protocolo-tesis', 'wa-encuesta-ace',
];
export const EVENTOS_RETIRADOS = ['wa-ev-colon', 'wa-ev-recto', 'wa-ev-sesion'];

export const PENDIENTES_WHATSAPP = [
  {
    id: 'p-confirmar-cruz',
    texto: 'Confirmar con el Dr. Cruz la hora de tu clase de recto y ano',
    detalle: 'Propusiste el viernes 27 nov y le preguntaste si ese día tiene consulta o quirófano; no ha respondido.',
    categoria: 'Clase', prioridad: 'alta', vence: '2026-11-24',
    fuente: 'WhatsApp · Dr. Cruz',
  },
  {
    id: 'p-presentacion-recto',
    texto: 'Terminar la presentación de cáncer de recto y ano',
    detalle: 'Con las correcciones; el Dr. Cruz dijo que el tema es "muy general" y quedó de mandar pautas.',
    categoria: 'Clase', prioridad: 'alta', vence: '2026-11-26',
    link: '#/resumenes?id=r2-recto',
  },
  {
    id: 'p-estudiar-colon',
    texto: 'Estudiar para el examen del módulo de colon',
    detalle: 'Examen presencial en la sede el viernes 27 nov.',
    categoria: 'Examen', prioridad: 'alta', vence: '2026-11-27',
    link: '#/resumenes?id=r2-colon',
  },
  {
    id: 'p-estudiar-recto',
    texto: 'Estudiar para el examen del módulo de recto y ano',
    detalle: 'Examen presencial en la sede el miércoles 9 dic.',
    categoria: 'Examen', prioridad: 'alta', vence: '2026-12-09',
    link: '#/resumenes?id=r2-recto',
  },
  {
    id: 'p-evidencia-clase',
    texto: 'Tener la evidencia de tu clase de recto y ano',
    detalle: 'Sin evidencia la calificación máxima es 7; si la clase no se da antes de la captura de inicios de enero, es 0.',
    categoria: 'Académico', prioridad: 'alta', vence: '2027-01-04',
  },
  {
    id: 'p-calendario-departamentales',
    texto: 'Revisar el calendario de exámenes departamentales 2026-2027',
    detalle: 'Lo envió Enseñanza Cirugía el 1 nov.',
    categoria: 'Examen', prioridad: 'media',
    fuente: 'WhatsApp · Enseñanza Cirugía',
  },
  {
    id: 'p-tesis',
    texto: 'Avanzar con el protocolo de tesis',
    detalle: 'Directora: Dra. Contreras.',
    categoria: 'Académico', prioridad: 'media',
  },
];

// Calendario: tipo = examen | clase | guardia | rotacion | limite
export const CALENDARIO_MARIO = [
  { id: 'c-examen-colon', fecha: '2026-11-27', titulo: 'Examen módulo de colon (R2)', tipo: 'examen', nota: 'Presencial en la sede' },
  { id: 'c-clase-recto', fecha: '2026-11-27', titulo: 'Tu clase: patología maligna de recto y ano (Dr. Cruz)', tipo: 'clase', nota: 'Fecha propuesta · el Dr. Cruz no ha confirmado la hora' },
  { id: 'c-programada-29nov', fecha: '2026-11-29', titulo: 'Programada matutina de Cirugía', tipo: 'guardia', nota: 'Rol de fin de semana de noviembre' },
  { id: 'c-fin-umaa', fecha: '2026-11-30', titulo: 'Fin de la rotación en la UMAA 199', tipo: 'rotacion' },
  { id: 'c-inicio-raza', fecha: '2026-12-01', titulo: 'Inicia Coloproctología · HE CMN La Raza', tipo: 'rotacion' },
  { id: 'c-examen-recto', fecha: '2026-12-09', titulo: 'Examen módulo de recto y ano (R2)', tipo: 'examen', nota: 'Presencial en la sede' },
  { id: 'c-inicio-trauma', fecha: '2027-01-01', titulo: 'Inicia Traumatología y Ortopedia · UMAE Magdalena de las Salinas', tipo: 'rotacion' },
  { id: 'c-captura-calif', fecha: '2027-01-04', titulo: 'Captura de calificaciones (evidencia de tu clase)', tipo: 'limite', nota: 'Inicios de enero' },
  { id: 'c-inicio-hgr72-feb', fecha: '2027-02-01', titulo: 'Inicia Cirugía General · HGR 72', tipo: 'rotacion' },
  { id: 'c-inicio-r3', fecha: '2027-03-01', titulo: 'Inicio de R3', tipo: 'rotacion' },
];

// Rotaciones con fechas para saber cuál está activa
export const ROTACIONES_MARIO = [
  { id: 'r-2611', servicio: 'Cirugía General', sede: 'UMAA 199 Tlalnepantla', inicio: '2026-11-02', fin: '2026-11-30', grado: 'R2', notas: 'Quirófano vespertino (desde las 14:30 aprox.). Programación en el tablero PHEDS de la UMAA 199.' },
  { id: 'r-2612', servicio: 'Coloproctología', sede: 'HE CMN La Raza', inicio: '2026-12-01', fin: '2026-12-31', grado: 'R2' },
  { id: 'r-2701', servicio: 'Traumatología y Ortopedia (trauma general)', sede: 'UMAE Magdalena de las Salinas', inicio: '2027-01-01', fin: '2027-01-31', grado: 'R2' },
  { id: 'r-2702', servicio: 'Cirugía General', sede: 'HGR 72', inicio: '2027-02-01', fin: '2027-02-28', grado: 'R2' },
  { id: 'r-2703', servicio: 'Cirugía General', sede: 'HGR 72', inicio: '2027-03-01', fin: '2027-03-31', grado: 'R3' },
  { id: 'r-2704', servicio: 'Cirugía General', sede: 'HGR 72', inicio: '2027-04-01', fin: '2027-04-30', grado: 'R3' },
  { id: 'r-2705', servicio: 'Trauma', sede: 'UMAE Trauma', inicio: '2027-05-01', fin: '2027-05-31', grado: 'R3' },
  { id: 'r-2706', servicio: 'Cirugía General', sede: 'HGR 72', inicio: '2027-06-01', fin: '2027-06-30', grado: 'R3', notas: 'Vacaciones: 1ª quincena.' },
  { id: 'r-2707', servicio: 'Cirugía General', sede: 'HGR 72', inicio: '2027-07-01', fin: '2027-07-31', grado: 'R3' },
  { id: 'r-2708', servicio: 'Oncología', sede: 'Por confirmar', inicio: '2027-08-01', fin: '2027-08-31', grado: 'R3' },
  { id: 'r-2709', servicio: 'Cirugía General', sede: 'HGR 196', inicio: '2027-09-01', fin: '2027-09-30', grado: 'R3' },
  { id: 'r-2710', servicio: 'Cirugía General', sede: 'HGR 72', inicio: '2027-10-01', fin: '2027-10-31', grado: 'R3' },
  { id: 'r-2711', servicio: 'Ginecología', sede: 'Por confirmar', inicio: '2027-11-01', fin: '2027-11-30', grado: 'R3' },
  { id: 'r-2712', servicio: 'Cirugía Plástica', sede: 'UMAE Plástica', inicio: '2027-12-01', fin: '2027-12-31', grado: 'R3' },
  { id: 'r-2801', servicio: 'Cirugía General', sede: 'HGR 72', inicio: '2028-01-01', fin: '2028-01-31', grado: 'R3', notas: 'Vacaciones: 2ª quincena.' },
  { id: 'r-2802', servicio: 'Cardiotórax', sede: 'Por confirmar', inicio: '2028-02-01', fin: '2028-02-29', grado: 'R3' },
];

export const PERFIL_MARIO = { grupoGuardia: 'D', sede: 'HGR No. 72 IMSS', grado: 'R2 Cirugía General' };
