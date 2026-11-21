// Temario PUEM · Cuarto año (R4) · HGR 72 IMSS · Cronograma 2026 (lunes)
// Estructura tomada de atlas/temario-cirugia.pdf. Resúmenes esenciales (alto rendimiento) por subtema.
export const TEMARIO_R4 = [
  {
    id: 'r4-endoscopia',
    year: 'R4',
    sistema: 'Endoscopia',
    title: 'Endoscopia',
    coordinador: 'Dr. Enrique Fernández Castro (gastroenterólogo)',
    subtemas: [
      {
        t: 'Historia, equipos y procedimientos endoscópicos más frecuentes',
        ponente: 'Valeria',
        puntos: [
          'Panendoscopia diagnóstica/terapéutica; CPRE (esfinterotomía, extracción de litos, prótesis); colonoscopia (tamizaje, polipectomía).',
          'Hemorragia por úlcera: clasificación de Forrest. Ia (en chorro), Ib (en capa), IIa (vaso visible), IIb (coágulo adherido) → terapia endoscópica dual; IIc y III bajo riesgo.',
          'Complicación más frecuente de la CPRE: pancreatitis (indometacina rectal la previene).',
        ],
      },
    ],
  },
  {
    id: 'r4-nefrourologia',
    year: 'R4',
    sistema: 'Urología',
    title: 'Nefrourología',
    coordinador: 'Dr. Enrique Juvenal Vite Velázquez',
    subtemas: [
      {
        t: 'Anatomía, fisiología e incontinencia urinaria',
        ponente: 'Alejandra', fecha: '2026-03-02',
        puntos: [
          'Incontinencia de esfuerzo (falla esfinteriana; cabestrillo suburetral), de urgencia (hiperactividad del detrusor; antimuscarínicos/β3 agonistas), mixta y por rebosamiento.',
        ],
      },
      {
        t: 'Insuficiencia renal aguda y crónica · indicaciones quirúrgicas',
        ponente: 'Maresa', fecha: '2026-03-09',
        puntos: [
          'KDIGO: ↑ creatinina ≥ 0.3 mg/dL en 48 h o ≥ 1.5 veces la basal, o diuresis < 0.5 mL/kg/h por 6 h.',
          'Prerrenal (FENa < 1%), renal (necrosis tubular, FENa > 2%), posrenal (obstrucción: descartar con USG y sonda).',
          'Acceso para hemodiálisis: fístula arteriovenosa radiocefálica como primera opción.',
        ],
      },
      {
        t: 'Absceso perirrenal, renal y cistitis enfisematosa',
        ponente: 'Areli', fecha: '2026-03-30',
        puntos: [
          'Diabéticos e inmunocomprometidos. Pielonefritis enfisematosa → antibiótico + drenaje percutáneo; nefrectomía si no responde.',
        ],
      },
      {
        t: 'Litiasis del tracto urinario',
        ponente: 'Porfirio', fecha: '2026-04-06',
        puntos: [
          'Oxalato de calcio la más frecuente. TC simple es el estándar diagnóstico.',
          'Lito < 5 mm suele expulsarse; 5–10 mm → tratamiento expulsivo con tamsulosina. Lito obstructivo + infección = urgencia → derivar (catéter JJ o nefrostomía).',
          'Tratamiento: LEOC, ureteroscopia o nefrolitotomía percutánea (litos renales > 2 cm).',
        ],
      },
      {
        t: 'Cáncer renal',
        ponente: 'Oswaldo', fecha: '2026-04-13',
        sistema: 'Oncología',
        puntos: [
          'Carcinoma de células claras el más frecuente; tríada clásica (hematuria, dolor, masa) en < 10%; síndromes paraneoplásicos (policitemia, hipercalcemia, Stauffer).',
          'Nefrectomía parcial para tumores T1 cuando es factible; radical para tumores mayores; el trombo en vena cava no contraindica la cirugía.',
        ],
      },
    ],
  },
  {
    id: 'r4-gineco',
    year: 'R4',
    sistema: 'Ginecología',
    title: 'Aparato genital femenino',
    coordinador: 'Dra. Guadalupe Romero',
    subtemas: [
      {
        t: 'Anatomía y fisiología',
        ponente: 'Chantal', fecha: '2026-04-20',
        puntos: [
          'El uréter cruza por debajo de la arteria uterina ("el agua pasa bajo el puente"): sitio clásico de lesión en histerectomía.',
        ],
      },
      {
        t: 'Embarazo ectópico',
        ponente: 'Sergio', fecha: '2026-04-27',
        puntos: [
          'Siempre hCG en mujer en edad fértil con dolor abdominal. Ámpula tubaria el sitio más frecuente.',
          'hCG > zona discriminatoria (~1500–3500 mUI/mL) sin saco intrauterino por USG transvaginal = ectópico hasta demostrar lo contrario.',
          'Roto/inestable → cirugía (salpingectomía). Estable, no roto, hCG baja → metotrexato.',
        ],
      },
      {
        t: 'Tumores y quistes de ovario',
        ponente: 'Valeria', fecha: '2026-05-04',
        puntos: [
          'Torsión ovárica: urgencia; destorsión y preservar el ovario incluso si se ve oscuro.',
          'Datos de malignidad: componente sólido, septos gruesos, ascitis, CA-125 elevado en posmenopáusica (índice RMI/O-RADS).',
        ],
      },
      {
        t: 'Tumores benignos y malignos del útero (CaCu)',
        ponente: 'Alejandra · Maresa', fecha: '2026-05-11',
        sistema: 'Oncología',
        puntos: [
          'Miomatosis: el tumor pélvico más frecuente en la mujer; cirugía si sangrado, dolor o crecimiento.',
          'Cáncer cervicouterino: VPH 16/18; epidermoide el más común; estadificación FIGO clínica e imagen. Temprano → histerectomía radical; localmente avanzado → quimiorradiación.',
        ],
      },
      {
        t: 'Disfunción de piso pélvico, prolapso y patología benigna que amerita histerectomía',
        ponente: 'Areli · Porfirio', fecha: '2026-05-25',
        puntos: [
          'Prolapso estadificado con POP-Q. Indicaciones benignas de histerectomía: miomatosis, adenomiosis, sangrado uterino anormal refractario.',
        ],
      },
    ],
  },
  {
    id: 'r4-genital-masculino',
    year: 'R4',
    sistema: 'Urología',
    title: 'Aparato genital masculino',
    coordinador: 'Dr. Joel Juárez Ávila',
    subtemas: [
      {
        t: 'Fimosis, parafimosis y circuncisión',
        ponente: 'Oswaldo', fecha: '2026-06-08',
        puntos: [
          'Parafimosis = urgencia (prepucio retraído que estrangula el glande): reducción manual con compresión; si falla, incisión dorsal.',
        ],
      },
      {
        t: 'Criptorquidia e hidrocele',
        ponente: 'Chantal', fecha: '2026-06-15',
        puntos: [
          'Orquidopexia entre los 6 y 18 meses: disminuye el riesgo de infertilidad y facilita vigilar el riesgo de cáncer (seminoma).',
          'Hidrocele transilumina; comunicante en niños (conducto peritoneovaginal permeable) se trata como hernia.',
        ],
      },
      {
        t: 'Hiperplasia prostática y cáncer de próstata',
        ponente: 'Sergio', fecha: '2026-06-29',
        sistema: 'Oncología',
        puntos: [
          'HPB: zona de transición; síntomas medidos con IPSS; α-bloqueadores e inhibidores de 5-α-reductasa; RTUP si falla o hay complicaciones.',
          'Cáncer: zona periférica; adenocarcinoma; puntaje Gleason/ISUP; APE para tamizaje y seguimiento.',
        ],
      },
      {
        t: 'Retención aguda de orina, talla suprapúbica y cistostomía',
        ponente: 'Valeria', fecha: '2026-06-29',
        puntos: [
          'Primero sonda transuretral; si no pasa (estenosis, trauma uretral) → cistostomía suprapúbica.',
          'Sospecha de lesión uretral (sangre en el meato, hematoma perineal, próstata alta) → NO sondear; uretrografía retrógrada.',
        ],
      },
      {
        t: 'Tumores testiculares benignos y malignos',
        ponente: 'Alejandra', fecha: '2026-07-06',
        sistema: 'Oncología',
        puntos: [
          'Masa testicular sólida indolora en joven = cáncer hasta demostrar lo contrario. Marcadores: AFP, hCG, DHL.',
          'Orquiectomía radical por vía inguinal (nunca escrotal).',
          'Torsión testicular: < 6 h para salvar el testículo; reflejo cremastérico ausente; no retrasar la exploración por estudios.',
        ],
      },
    ],
  },
  {
    id: 'r4-vascular',
    year: 'R4',
    sistema: 'Vascular',
    title: 'Enfermedades vasculares',
    coordinador: 'Dr. Luis Guerrero Galindo',
    subtemas: [
      {
        t: 'Anatomía y fisiología · insuficiencia venosa periférica',
        ponente: 'Maresa · Areli', fecha: '2026-07-20',
        puntos: [
          'Clasificación CEAP (C0–C6; C6 = úlcera activa). Úlcera venosa típica en región maleolar medial.',
          'Tratamiento: compresión elástica; ablación endovenosa térmica o safenectomía en reflujo safeno.',
        ],
      },
      {
        t: 'Insuficiencia arterial periférica',
        ponente: 'Porfirio', fecha: '2026-08-03',
        puntos: [
          'Índice tobillo-brazo < 0.9 diagnóstico; > 1.3 arterias no compresibles (diabetes, calcificación).',
          'Claudicación (Fontaine II / Rutherford 1–3) → ejercicio supervisado, cilostazol, estatina y antiagregante. Isquemia crítica (dolor en reposo, úlcera, gangrena) → revascularización.',
        ],
      },
      {
        t: 'Aneurisma de aorta',
        ponente: 'Oswaldo', fecha: '2026-08-10',
        puntos: [
          'Aorta abdominal infrarrenal la más común. Reparar si ≥ 5.5 cm en hombres (≥ 5.0 cm en mujeres), crecimiento > 1 cm/año o sintomático.',
          'Roto: tríada de dolor, hipotensión y masa pulsátil → quirófano sin retrasos (EVAR si la anatomía lo permite).',
        ],
      },
      {
        t: 'Trombosis arterial periférica (isquemia aguda)',
        ponente: 'Chantal', fecha: '2026-08-17',
        puntos: [
          '6 P: dolor, palidez, ausencia de pulso, parestesias, parálisis y poiquilotermia. Embolia (fibrilación auricular) vs trombosis in situ.',
          'Heparina inmediata; clasificación de Rutherford; embolectomía con Fogarty o trombólisis; fasciotomía tras reperfusión prolongada.',
        ],
      },
      {
        t: 'Trombosis venosa periférica',
        ponente: 'Sergio', fecha: '2026-08-24',
        puntos: [
          'Escala de Wells + dímero D; USG Doppler compresivo para confirmar.',
          'Anticoagulación mínimo 3 meses (anticoagulantes directos de elección). Flegmasia cerulea dolens → trombectomía/trombólisis.',
        ],
      },
      {
        t: 'Linfomas y biopsias ganglionares',
        ponente: 'Valeria', fecha: '2026-08-31',
        sistema: 'Oncología',
        puntos: [
          'Para el diagnóstico de linfoma se requiere biopsia escisional completa del ganglio (la BAAF no basta: se necesita la arquitectura).',
          'Hodgkin: células de Reed-Sternberg.',
        ],
      },
    ],
  },
  {
    id: 'r4-torax',
    year: 'R4',
    sistema: 'Tórax',
    title: 'Tórax',
    coordinador: 'Dr. Edmundo Rivero Sánchez · Dra. Magali González',
    subtemas: [
      {
        t: 'Dolor torácico agudo (SCA)',
        ponente: 'Alejandra', fecha: '2026-09-07',
        puntos: [
          'ECG en < 10 min. Elevación del ST → reperfusión (angioplastia primaria; trombólisis si no está disponible a tiempo). Troponinas seriadas.',
          'Diferenciales quirúrgicos: disección aórtica (Stanford A = cirugía urgente), rotura esofágica (Boerhaave), neumotórax.',
        ],
      },
      {
        t: 'Tromboembolia pulmonar',
        ponente: 'Maresa', fecha: '2026-09-21',
        puntos: [
          'Wells/PERC + dímero D; angio-TC pulmonar diagnóstica.',
          'Masiva (inestable) → trombólisis sistémica; anticoagulación en el resto.',
        ],
      },
      {
        t: 'Hidroneumotórax y hemotórax',
        ponente: 'Areli', fecha: '2026-09-14',
        puntos: [
          'Criterios de Light para exudado: proteínas pleura/suero > 0.5, DHL pleura/suero > 0.6 o DHL > 2/3 del límite superior.',
          'Neumotórax espontáneo primario recurrente o con fuga persistente → VATS con bulectomía y pleurodesis.',
          'Hemotórax retenido → VATS temprana (< 7 días) para evitar empiema y fibrotórax.',
        ],
      },
      {
        t: 'Tumores pleuropulmonares y mediastinales',
        ponente: 'Porfirio', fecha: '2026-09-21',
        sistema: 'Oncología',
        puntos: [
          'Mediastino anterior: las 4 T (timoma, teratoma/germinales, tiroides, "terrible" linfoma). Posterior: neurogénicos.',
          'Nódulo pulmonar solitario: guías de Fleischner según tamaño y riesgo. Metastasectomía si el primario está controlado y es resecable.',
        ],
      },
    ],
  },
  {
    id: 'r4-musculoesqueletico',
    year: 'R4',
    sistema: 'Musculoesquelético',
    title: 'Sistema musculoesquelético y pie diabético',
    coordinador: 'Dra. Magali González',
    subtemas: [
      {
        t: 'Pie diabético',
        ponente: 'Oswaldo', fecha: '2026-09-28',
        sistema: 'Vascular',
        puntos: [
          'Clasificación de Wagner (0–5) y de Texas (profundidad + infección/isquemia); WIfI para riesgo de amputación.',
          'Desbridamiento, descarga, control glucémico, antibiótico si hay infección y evaluar perfusión (ITB/oscilometría).',
          'Prueba de sonda a hueso positiva → sospechar osteomielitis.',
        ],
      },
      {
        t: 'Tumores benignos musculoesqueléticos · síndrome compartimental, amputaciones y fasciotomías',
        ponente: 'Chantal', fecha: '2026-10-05',
        puntos: [
          'Síndrome compartimental: dolor desproporcionado y al estiramiento pasivo (signo temprano); la ausencia de pulso es tardía.',
          'Presión compartimental > 30 mmHg o presión diastólica − compartimental < 30 mmHg → fasciotomía (pierna: 4 compartimentos con 2 incisiones).',
          'Amputación de urgencia (guillotina) en sepsis por gangrena húmeda; cierre definitivo diferido.',
        ],
      },
      {
        t: 'Tumores musculares y óseos (sarcomas)',
        ponente: 'Sergio', fecha: '2026-10-12',
        sistema: 'Oncología',
        puntos: [
          'Masa de tejidos blandos > 5 cm, profunda o en crecimiento → RM y biopsia con aguja de corte orientada (en el trayecto de la futura resección).',
          'Resección con márgenes amplios ± radioterapia; metástasis principalmente a pulmón.',
        ],
      },
    ],
  },
  {
    id: 'r4-trasplante',
    year: 'R4',
    sistema: 'Trasplante',
    title: 'Trasplante',
    coordinador: 'Dra. Sheyla Alonso Domínguez',
    subtemas: [
      {
        t: 'Generalidades y trasplante renal',
        ponente: 'Valeria', fecha: '2026-10-19',
        puntos: [
          'Compatibilidad ABO y prueba cruzada negativa. El injerto renal se coloca en fosa ilíaca (anastomosis a vasos ilíacos externos).',
          'Rechazo hiperagudo (minutos, anticuerpos preformados), agudo (semanas–meses, celular) y crónico (fibrosis).',
          'Inmunosupresión: inhibidores de calcineurina (tacrolimus: nefrotoxicidad), antiproliferativos y esteroides.',
        ],
      },
      {
        t: 'Trasplante hepático',
        ponente: 'Alejandra', fecha: '2026-10-26',
        sistema: 'Hígado',
        puntos: [
          'Indicaciones: cirrosis descompensada (MELD), falla hepática aguda (criterios del King\'s College), hepatocarcinoma en criterios de Milán.',
          'Complicación vascular temida: trombosis de arteria hepática (falla del injerto y lesión biliar).',
        ],
      },
      {
        t: 'Trasplante multiorgánico',
        ponente: 'Maresa', fecha: '2026-11-09',
        puntos: [
          'Muerte encefálica: coma irreversible, ausencia de reflejos de tallo y apnea, confirmada con estudio complementario según la Ley General de Salud.',
          'Mantenimiento del donador: PAM ≥ 65, diabetes insípida (desmopresina), normotermia y control hormonal.',
        ],
      },
    ],
  },
];
