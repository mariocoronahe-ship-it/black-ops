// Temario PUEM · Tercer año (R3) · HGR 72 IMSS · Cronograma 2026 (jueves)
// Estructura tomada de atlas/temario-cirugia.pdf. Resúmenes esenciales (alto rendimiento) por subtema.
export const TEMARIO_R3 = [
  {
    id: 'r3-intestino',
    year: 'R3',
    sistema: 'Intestino delgado',
    title: 'Obstrucción intestinal y hemorragia digestiva baja',
    coordinador: 'Dr. David Ángeles',
    subtemas: [
      {
        t: 'Obstrucción intestinal: fisiopatología, etiología, diagnóstico y tratamiento',
        ponente: 'Aisha', fecha: '2026-03-05',
        puntos: [
          'Causas: delgado → adherencias (la más frecuente), hernias, neoplasias; colon → cáncer, vólvulo, diverticulitis.',
          'TC con contraste es el estudio de elección: punto de transición, asa cerrada, signos de isquemia (neumatosis, pared que no realza, líquido libre).',
          'Obstrucción adherencial sin datos de estrangulación: manejo conservador (SNG, ayuno, líquidos) y contraste hidrosoluble (Gastrografin): si llega a colon en 24 h predice resolución.',
          'Indicaciones de cirugía: datos de estrangulación/peritonitis, asa cerrada o falla del manejo conservador (habitualmente 72 h).',
        ],
      },
      {
        t: 'Hemorragia de tubo digestivo bajo',
        ponente: 'Nelson', fecha: '2026-03-12',
        sistema: 'Colon y apéndice',
        puntos: [
          'Distal al ángulo de Treitz. Causas en adulto mayor: enfermedad diverticular (la más frecuente; más del colon derecho) y angiodisplasia.',
          'Descartar origen alto (hasta 15%) con SNG/endoscopia si hay inestabilidad.',
          'Estable: colonoscopia tras preparación en < 24 h. Sangrado activo: angio-TC → embolización. Gammagrafía detecta 0.1 mL/min; angiografía 0.5–1 mL/min.',
          'Cirugía si persiste: colectomía segmentaria si se localiza; colectomía subtotal si no se localiza.',
        ],
      },
    ],
  },
  {
    id: 'r3-higado',
    year: 'R3',
    sistema: 'Hígado',
    title: 'Hígado',
    coordinador: 'Dr. David Ángeles',
    linkTo: 'hepatobiliar',
    subtemas: [
      {
        t: 'Síndrome ictérico',
        ponente: 'Lizeth', fecha: '2026-03-19',
        puntos: [
          'Ictericia clínica con bilirrubina > 2.5–3 mg/dL. Prehepática (indirecta), hepatocelular o posthepática/obstructiva (directa, FA y GGT elevadas).',
          'Ultrasonido primero: vía biliar dilatada (colédoco > 6–8 mm) orienta a obstrucción → colangio-RM, USE o CPRE.',
          'Signo de Courvoisier-Terrier: vesícula palpable no dolorosa con ictericia → neoplasia periampular.',
        ],
      },
      {
        t: 'Absceso hepático y quistes hepáticos',
        ponente: 'Daniela', fecha: '2026-03-26',
        puntos: [
          'Amebiano: hombre joven, lóbulo derecho, único; tratamiento con metronidazol (aspiración sólo si > 5–10 cm, lóbulo izquierdo o sin respuesta).',
          'Piógeno: múltiples, origen biliar; antibiótico + drenaje percutáneo.',
          'Quiste hidatídico (Echinococcus): albendazol + PAIR o cirugía; no puncionar sin cobertura por riesgo de anafilaxia.',
        ],
      },
      {
        t: 'Tumores benignos hepáticos y hepatocarcinoma',
        ponente: 'Ricardo', fecha: '2026-04-09',
        sistema: 'Oncología',
        puntos: [
          'Hemangioma: el tumor benigno más frecuente; realce periférico nodular centrípeto; observación.',
          'Hiperplasia nodular focal: cicatriz central, no se opera. Adenoma: mujeres con anticonceptivos; riesgo de sangrado y malignización → resecar si > 5 cm.',
          'Hepatocarcinoma: sobre cirrosis; diagnóstico por imagen (realce arterial + lavado venoso, LI-RADS 5) sin biopsia; estadificar con BCLC (resección, trasplante con criterios de Milán, ablación, quimioembolización).',
        ],
      },
      {
        t: 'Hipertensión portal y su tratamiento quirúrgico',
        ponente: 'Raúl', fecha: '2026-04-16',
        puntos: [
          'Gradiente de presión venosa hepática > 10 mmHg clínicamente significativa; > 12 riesgo de sangrado variceal.',
          'Sangrado variceal: vasoactivo (terlipresina/octreótido), antibiótico profiláctico (ceftriaxona), ligadura endoscópica en < 12 h; TIPS si falla.',
          'Derivaciones quirúrgicas (esplenorrenal distal de Warren) hoy son excepcionales.',
        ],
      },
      {
        t: 'Trasplante hepático y hepatectomías',
        ponente: 'Enrique', fecha: '2026-04-23',
        sistema: 'Trasplante',
        puntos: [
          'Anatomía de Couinaud: 8 segmentos; la línea de Cantlie (vesícula–VCI) divide lóbulo derecho e izquierdo.',
          'Remanente hepático futuro mínimo ~20–25% en hígado sano y ~40% en cirrótico; embolización portal para hipertrofiarlo.',
          'Trasplante: MELD prioriza la lista; Milán (1 tumor ≤ 5 cm o hasta 3 ≤ 3 cm, sin invasión vascular).',
        ],
      },
    ],
  },
  {
    id: 'r3-vias-biliares',
    year: 'R3',
    sistema: 'Vías biliares',
    title: 'Vías biliares',
    coordinador: 'Dr. David Ángeles',
    linkTo: 'hepatobiliar',
    subtemas: [
      {
        t: 'Anatomía de la vesícula · colecistitis litiásica y alitiásica',
        ponente: 'Edgar', fecha: '2026-04-30',
        puntos: [
          'Triángulo hepatocístico (Calot moderno): conducto cístico, conducto hepático común y borde inferior del hígado; contiene la arteria cística.',
          'Tokio 2018: grado I leve, II moderado (leucocitos > 18 mil, masa palpable, > 72 h, inflamación local marcada), III con disfunción orgánica.',
          'Colecistectomía laparoscópica temprana (idealmente < 72 h). Grado III o alto riesgo quirúrgico → colecistostomía percutánea.',
          'Alitiásica: paciente crítico (UCI, NPT, quemados); alta mortalidad; colecistostomía si no tolera cirugía.',
        ],
      },
      {
        t: 'Coledocolitiasis',
        ponente: 'Edgar', fecha: '2026-04-30',
        puntos: [
          'Riesgo ASGE 2019 alto: litiasis en colédoco por imagen, colangitis, o bilirrubina > 4 con colédoco dilatado → CPRE directa.',
          'Riesgo intermedio → colangio-RM o USE antes de decidir; o exploración laparoscópica de vía biliar.',
        ],
      },
      {
        t: 'Colangitis y fístulas biliares',
        ponente: 'Valeria', fecha: '2026-05-07',
        puntos: [
          'Tríada de Charcot (fiebre, ictericia, dolor en hipocondrio derecho); péntada de Reynolds suma choque y alteración del estado mental.',
          'Antibiótico + drenaje biliar (CPRE de preferencia). Grado III (Tokio) → drenaje urgente.',
          'Fístula colecistoentérica → íleo biliar: tríada de Rigler (neumobilia, obstrucción intestinal, lito ectópico); enterolitotomía.',
        ],
      },
      {
        t: 'Disrupciones de la vía biliar · técnicas de colecistectomía y biliodigestivas',
        ponente: 'Andrea · Estefanía', fecha: '2026-05-14',
        puntos: [
          'Visión crítica de seguridad (Strasberg): triángulo hepatocístico libre, tercio inferior de la vesícula separado de la placa y sólo dos estructuras entrando a la vesícula.',
          'Lesión clasificada por Strasberg (A–E) o Bismuth (E1–E5 en lesiones mayores).',
          'Lesión mayor de vía biliar → hepaticoyeyunoanastomosis en Y de Roux en centro con experiencia. Si la anatomía es difícil: colecistectomía subtotal.',
        ],
      },
      {
        t: 'Adenocarcinoma de vesícula y vía biliar',
        ponente: 'Andrea',
        sistema: 'Oncología',
        puntos: [
          'Vesícula: asociado a litos grandes y vesícula en porcelana; hallazgo incidental T1b o mayor → reintervención con resección hepática (IVb/V) y linfadenectomía.',
          'Colangiocarcinoma hiliar (tumor de Klatskin): clasificación de Bismuth-Corlette para planear la resección.',
        ],
      },
    ],
  },
  {
    id: 'r3-pancreas',
    year: 'R3',
    sistema: 'Páncreas',
    title: 'Páncreas',
    coordinador: 'Dr. David Ángeles',
    subtemas: [
      {
        t: 'Pancreatitis aguda',
        ponente: 'Giselle', fecha: '2026-05-28',
        puntos: [
          'Diagnóstico con 2 de 3: dolor típico, lipasa/amilasa > 3 veces el límite, imagen compatible. Causas: biliar y alcohol.',
          'Atlanta 2012: leve (sin falla orgánica), moderadamente grave (falla transitoria < 48 h o complicaciones locales), grave (falla orgánica persistente > 48 h).',
          'Reanimación con Ringer lactato moderada (no agresiva), nutrición enteral temprana, sin antibiótico profiláctico.',
          'Biliar leve → colecistectomía en el mismo internamiento. Necrosis infectada → step-up: drenaje percutáneo/endoscópico y necrosectomía diferida (> 4 semanas, necrosis encapsulada).',
        ],
      },
      {
        t: 'Pancreatitis crónica',
        ponente: 'Aisha', fecha: '2026-06-04',
        puntos: [
          'Tríada: calcificaciones, esteatorrea y diabetes. Dolor como principal indicación quirúrgica.',
          'Conducto dilatado (> 7 mm) → derivación (Puestow/Partington-Rochelle); cabeza agrandada → Frey o Beger.',
        ],
      },
      {
        t: 'Pseudoquiste, quistes y absceso pancreático',
        ponente: 'Giselle', fecha: '2026-06-11',
        puntos: [
          'Colección peripancreática aguda (< 4 semanas) → pseudoquiste (> 4 semanas, pared definida). Drenar sólo si es sintomático o complicado; preferir drenaje endoscópico transmural.',
          'Neoplasias quísticas: IPMN de conducto principal y mucinoso quístico → resecar; seroso → generalmente observar.',
        ],
      },
      {
        t: 'Técnicas quirúrgicas: pancreatectomías',
        ponente: 'Lizbeth', fecha: '2026-07-02',
        puntos: [
          'Pancreatoduodenectomía (Whipple) para cabeza/periampulares; pancreatectomía distal ± esplenectomía para cuerpo-cola.',
          'Fístula pancreática (ISGPS): amilasa en drenaje > 3 veces la sérica al día 3; grados BL, B y C.',
        ],
      },
      {
        t: 'Tumores benignos (insulinoma) y adenocarcinoma de páncreas',
        ponente: 'Edgar · Andrea', fecha: '2026-07-18',
        sistema: 'Oncología',
        puntos: [
          'Insulinoma: tríada de Whipple (hipoglucemia sintomática, glucosa < 50 y alivio con glucosa); el tumor neuroendocrino funcional más frecuente; enucleación.',
          'Adenocarcinoma: 2/3 en cabeza; ictericia indolora y pérdida de peso; CA 19-9. Resecable vs limítrofe (contacto vascular) vs irresecable; neoadyuvancia en limítrofe.',
        ],
      },
    ],
  },
  {
    id: 'r3-bazo',
    year: 'R3',
    sistema: 'Bazo, peritoneo y retroperitoneo',
    title: 'Bazo',
    coordinador: 'Dr. David Ángeles',
    subtemas: [
      {
        t: 'Anatomía, fisiología, absceso y tumores esplénicos',
        ponente: 'Enrique', fecha: '2026-07-09',
        puntos: [
          'Ligamentos: gastroesplénico (vasos cortos), esplenorrenal (contiene la cola del páncreas), esplenocólico y esplenofrénico.',
          'Bazos accesorios en ~10–20% (hilio el más común): buscarlos en esplenectomía por enfermedad hematológica.',
        ],
      },
      {
        t: 'Patologías hematológicas que requieren esplenectomía',
        ponente: 'Raúl', fecha: '2026-07-16',
        puntos: [
          'PTI: la indicación electiva más frecuente, tras falla a esteroides/inmunoglobulina/agonistas de trombopoyetina.',
          'Esferocitosis hereditaria: esplenectomía (después de los 6 años) y colecistectomía si hay litos.',
        ],
      },
      {
        t: 'Técnica de esplenectomía y complicaciones postesplenectomía',
        ponente: 'Raúl', fecha: '2026-07-16',
        puntos: [
          'Vacunar contra neumococo, meningococo y Haemophilus 2 semanas antes (electiva) o 2 semanas después (urgencia).',
          'Sepsis fulminante postesplenectomía (OPSI): por encapsulados, mayor riesgo en niños y en los primeros 2 años. Trombocitosis reactiva y lesión de cola de páncreas.',
        ],
      },
    ],
  },
  {
    id: 'r3-peritoneo',
    year: 'R3',
    sistema: 'Bazo, peritoneo y retroperitoneo',
    title: 'Peritoneo y retroperitoneo',
    coordinador: 'Dr. David Ángeles',
    subtemas: [
      {
        t: 'Anatomía y fisiología del peritoneo · peritonitis',
        ponente: 'Estefanía', fecha: '2026-07-23',
        puntos: [
          'Primaria (bacteriana espontánea, cirrótico, > 250 PMN/mm³, monomicrobiana, sin cirugía); secundaria (perforación, polimicrobiana, cirugía); terciaria (persistente en inmunocomprometido).',
          'Control de la fuente + antibiótico; puntaje de Mannheim para pronóstico.',
        ],
      },
      {
        t: 'Abdomen hostil',
        ponente: 'Estefanía', fecha: '2026-07-23',
        puntos: [
          'Abdomen abierto: clasificación de Björck. Cierre temprano (< 7 días) con presión negativa y tracción fascial.',
          'Hipertensión intraabdominal ≥ 12 mmHg; síndrome compartimental abdominal > 20 mmHg con nueva disfunción orgánica → descompresión.',
        ],
      },
      {
        t: 'Patología maligna de peritoneo y retroperitoneo',
        ponente: 'Daniela', fecha: '2026-07-30',
        sistema: 'Oncología',
        puntos: [
          'Carcinomatosis: índice PCI de Sugarbaker; citorreducción + HIPEC en casos seleccionados. Pseudomixoma peritoneal (origen apendicular).',
          'Sarcoma retroperitoneal (liposarcoma el más común): resección en bloque R0 es el pilar.',
        ],
      },
    ],
  },
  {
    id: 'r3-salivales',
    year: 'R3',
    sistema: 'Cabeza, cuello y endocrino',
    title: 'Glándulas salivales',
    coordinador: 'Dr. David Ángeles',
    subtemas: [
      {
        t: 'Anatomía, fisiología, tumores benignos y malignos',
        ponente: 'Nelson', fecha: '2026-08-06',
        puntos: [
          '~80% de los tumores salivales son parotídeos y ~80% de ellos benignos; mientras más pequeña la glándula, mayor probabilidad de malignidad.',
          'Adenoma pleomorfo: el más frecuente; parotidectomía superficial con preservación del nervio facial (no enucleación: recurre). Tumor de Warthin: hombre fumador, bilateral.',
          'Maligno más frecuente: mucoepidermoide; el adenoide quístico tiene invasión perineural.',
          'Síndrome de Frey (sudoración gustatoria) tras parotidectomía.',
        ],
      },
    ],
  },
  {
    id: 'r3-tiroides',
    year: 'R3',
    sistema: 'Cabeza, cuello y endocrino',
    title: 'Tiroides y paratiroides',
    coordinador: 'Dr. David Ángeles',
    subtemas: [
      {
        t: 'Hipertiroidismo, hipotiroidismo y bocio',
        ponente: 'Valeria', fecha: '2026-08-13',
        puntos: [
          'Graves: la causa más frecuente de hipertiroidismo (anticuerpos contra el receptor de TSH). Opciones: antitiroideos, yodo radiactivo o tiroidectomía total.',
          'Preparación preoperatoria en hipertiroidismo: eutiroidismo con antitiroideos, β-bloqueador y lugol (↓ vascularidad) para evitar tormenta tiroidea.',
          'Bocio multinodular: cirugía si hay compresión, extensión retroesternal o sospecha de malignidad.',
        ],
      },
      {
        t: 'Nódulo tiroideo y técnicas de tiroidectomía',
        ponente: 'Ricardo', fecha: '2026-08-20',
        puntos: [
          'USG con TI-RADS decide la BAAF; citología por Bethesda I–VI (III–IV indeterminados; VI maligno).',
          'Riesgos: nervio laríngeo recurrente (disfonía; bilateral → estridor y vía aérea) y laríngeo superior rama externa (voz aguda); hipoparatiroidismo (hipocalcemia).',
          'Hematoma cervical con compromiso de vía aérea → abrir la herida a pie de cama.',
        ],
      },
      {
        t: 'Cáncer de tiroides',
        ponente: 'Aisha', fecha: '2026-08-27',
        sistema: 'Oncología',
        puntos: [
          'Papilar (el más frecuente, cuerpos de psamoma, diseminación linfática), folicular (hematógena; requiere ver invasión capsular/vascular), medular (células C, calcitonina, MEN 2; descartar feocromocitoma antes), anaplásico (muy agresivo).',
          'Tiroglobulina como marcador de seguimiento tras tiroidectomía total.',
        ],
      },
      {
        t: 'Patología de paratiroides (hiperparatiroidismo)',
        ponente: 'Enrique', fecha: '2026-09-03',
        puntos: [
          'Hiperparatiroidismo primario: adenoma único (~85%). "Huesos, piedras, quejidos abdominales y gemidos psíquicos".',
          'Localización con gammagrafía sestamibi y USG; paratiroidectomía dirigida con PTH transoperatoria (caída > 50% a los 10 min = criterio de Miami).',
          'Síndrome de hueso hambriento: hipocalcemia profunda tras paratiroidectomía.',
        ],
      },
    ],
  },
  {
    id: 'r3-mama',
    year: 'R3',
    sistema: 'Mama',
    title: 'Mama',
    coordinador: 'Dr. David Ángeles',
    subtemas: [
      {
        t: 'Ginecomastia',
        ponente: 'Edgar', fecha: '2026-09-10',
        puntos: [
          'Fisiológica (neonatal, puberal, senil) vs secundaria a fármacos (espironolactona, antiandrógenos), hepatopatía o tumores productores de estrógenos/hCG.',
          'Tratar la causa; cirugía (mastectomía subcutánea/liposucción) si persiste > 1–2 años o es sintomática.',
        ],
      },
      {
        t: 'Cáncer de mama',
        ponente: 'Andrea', fecha: '2026-09-17',
        sistema: 'Oncología',
        puntos: [
          'Tamizaje con mastografía; BI-RADS 4–5 → biopsia con aguja de corte.',
          'Ductal infiltrante es el más común. Subtipos: luminal A/B, HER2 y triple negativo (peor pronóstico).',
          'Cirugía conservadora + radioterapia equivale a mastectomía en sobrevida; ganglio centinela en axila clínicamente negativa.',
        ],
      },
    ],
  },
  {
    id: 'r3-reconstructiva',
    year: 'R3',
    sistema: 'Piel, quemaduras y reconstructiva',
    title: 'Cirugía reconstructiva',
    coordinador: 'Dr. David Ángeles',
    subtemas: [
      {
        t: 'Principios de cirugía plástica y reconstructiva',
        ponente: 'Lizbeth', fecha: '2026-09-24',
        puntos: [
          'Escalera reconstructiva: cierre primario → cierre por segunda intención → injerto → colgajo local → colgajo a distancia → colgajo libre microvascular.',
          'Incisiones siguiendo las líneas de tensión de la piel (Langer/Kraissl).',
        ],
      },
      {
        t: 'Neurorrafia y tenorrafia',
        puntos: [
          'Seddon: neuropraxia (recupera), axonotmesis, neurotmesis (requiere reparación). El nervio regenera ~1 mm/día; reparar sin tensión (epineural).',
        ],
      },
      {
        t: 'Injertos libres y colgajos',
        ponente: 'Daniela', fecha: '2026-10-01',
        puntos: [
          'Injerto de espesor parcial: prende mejor, contrae más. Espesor total: mejor estética, menos contracción. Prendimiento: imbibición (48 h) → inosculación → revascularización.',
          'Colgajo tiene irrigación propia: aleatorio vs axial; musculocutáneo (dorsal ancho, TRAM) u osteomiocutáneo (peroné).',
        ],
      },
    ],
  },
];
