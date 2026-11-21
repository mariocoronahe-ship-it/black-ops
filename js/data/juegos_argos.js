// Bancos extendidos de juegos quirúrgicos generados desde ARGOS-MED
export const DETECTIVE_CASES = [
  {
    "id": "det-1",
    "title": "El Dolor que Ningún Analgésico Calma",
    "topicId": "delgado",
    "tag": "Intestino Delgado",
    "chief": "Femenino de 74 años con dolor abdominal súbito e insoportable de 4 horas de evolución.",
    "clues": {
      "interrogatorio": "Antecedente de fibrilación auricular crónica; suspendió apixabán hace 6 días por procedimiento dental. Dolor periumbilical súbito 10/10 acompañado de urgencia defecatoria inicial.",
      "exploracion": "TA 105/65 mmHg, FC 118 lpm irregularmente irregular, FR 24 rpm. Abdomen blando, depresible, con dolor difuso a la palpación profunda pero SIN irritación peritoneal franca (dolor desproporcionado a los hallazgos físicos).",
      "laboratorio": "Leucocitos 21,400/mm³ con neutrofilia 91%, pH 7.26, HCO₃ 14 mEq/L, Lactato sérico 5.4 mmol/L, Dímero D muy elevado, Amilasa ligeramente elevada.",
      "imagen": "Angio-TC abdominal trifásica: defecto de llenado abrupto (menisco embólico) en la arteria mesentérica superior a 5 cm de su ostium (distal al origen de la arteria cólica media), con hiporrealce mural de asas de íleon."
    },
    "options": [
      "Isquemia mesentérica aguda por embolia de la arteria mesentérica superior",
      "Pancreatitis aguda biliar grave (Atlanta)",
      "Úlcera duodenal perforada contenida",
      "Trombosis venosa mesentérica superior subaguda"
    ],
    "ans": 0,
    "management": "Anticoagulación inmediata con heparina no fraccionada IV, reanimación hídrica y antibióticos, y laparotomía urgente para embolectomía de la AMS con catéter de Fogarty (revascularizar antes de resecar) + planeación de Second-Look a las 24-48 h.",
    "why": "El dolor abdominal súbito desproporcionado a la exploración física en un paciente con fibrilación auricular sin anticoagulación es la presentación clásica de la embolia aguda de la AMS (50% de las IMA), que típicamente se aloja 3-8 cm distal al ostium respetando la cólica media y el yeyuno proximal."
  },
  {
    "id": "det-2",
    "title": "Ictericia, Confusión e Hipotensión en Urgencias",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "chief": "Masculino de 68 años traído por familiares por somnolencia, fiebre de 39.4 °C y tinte ictérico.",
    "clues": {
      "interrogatorio": "Historia de colelitiasis diagnosticada hace 2 años. Inicia hace 36 horas con dolor en hipocondrio derecho, fiebre con escalofríos intensos, coluria y desde hace 4 horas desorientación.",
      "exploracion": "TA 82/48 mmHg pese a carga inicial, FC 124 lpm, Temp 39.2 °C, Glasgow 12 (confuso). Escleras francamente ictéricas, dolor a la palpación en HCD.",
      "laboratorio": "Leucocitos 23,800/mm³, Plaquetas 84,000/mm³, Bilirrubina total 6.8 mg/dL (directa 5.4 mg/dL), FA 490 U/L, GGT 620 U/L, Creatinina 2.3 mg/dL, INR 1.68.",
      "imagen": "Ultrasonido hepatobiliar en sala de choque: dilatación de vía biliar intrahepática y colédoco de 12 mm con imagen ecogénica distal de 9 mm que proyecta sombra acústica posterior."
    },
    "options": [
      "Colecistitis aguda enfisematosa TG18 Grado III",
      "Colangitis aguda supurativa grave (TG18 Grado III / Péntada de Reynolds)",
      "Absceso hepático piógeno roto a cavidad",
      "Síndrome de Mirizzi Tipo IV"
    ],
    "ans": 1,
    "management": "Reanimación con cristaloides y norepinefrina, antibióticos IV de amplio espectro en la primera hora y descompresión biliar endoscópica urgente mediante CPRE (esfinterotomía y/o colocación rápida de stent biliar).",
    "why": "Presenta la Péntada de Reynolds completa (Tríada de Charcot: fiebre, ictericia, dolor en HCD + choque hipotensivo + alteración del estado mental) y cumple criterios de Colangitis Aguda Grado III de Tokyo 2018 (plaquetas <100k, Cr >2.0, INR >1.5, vasopresores). La descompresión biliar urgente por CPRE salva la vida; la colecistectomía en agudo está prohibida en este momento."
  },
  {
    "id": "det-3",
    "title": "Oclusión Intestinal en una Paciente sin Cirugías Previas",
    "topicId": "delgado",
    "tag": "Intestino Delgado",
    "chief": "Femenino de 76 años con vómito gastrobiliar profuso, distensión abdominal y ausencia de canalización de gases.",
    "clues": {
      "interrogatorio": "Sin antecedente de cirugías abdominales previas. Refiere episodios intermitentes de dolor en hipocondrio derecho hace 3 semanas que cedieron espontáneamente; desde hace 4 días presenta vómito y dolor cólico intermitente ('fenómeno de rodamiento').",
      "exploracion": "Deshidratación de mucosas, abdomen distendido, peristalsis metálica de lucha, dolor difuso sin signos de irritación peritoneal, anillos inguinales y femorales libres.",
      "laboratorio": "Leucocitos 12,100/mm³, Na 131 mEq/L, K 3.1 mEq/L, Cl 92 mEq/L, BUN 42 mg/dL, Creatinina 1.5 mg/dL, Bilirrubina total 1.3 mg/dL.",
      "imagen": "TC de abdomen simple: dilatación de asas de intestino delgado con niveles hidroaéreos, aire en el árbol biliar intrahepático (neumobilia) e imagen calcificada laminada de 2.8 cm impactada en la válvula ileocecal."
    },
    "options": [
      "Síndrome de Bouveret",
      "Íleo biliar (Tríada de Rigler por fístula colecistoentérica)",
      "Intususcepción ileocecal por tumor neuroendocrino",
      "Vólvulo cecal en báscula"
    ],
    "ans": 1,
    "management": "Reanimación hidroelectrolítica y laparotomía para realizar enterolitotomía longitudinal (incisión proximal al sitio de impactación para extraer el cálculo y cierre transversal tipo Heineke-Mikulicz), dejando intacta la fístula colecistoduodenal en el primer tiempo quirúrgico en pacientes ancianos o de alto riesgo.",
    "why": "La Tríada de Rigler (obstrucción de intestino delgado + neumobilia + lito ectópico > 2.5 cm, habitualmente impactado en el íleon terminal/válvula ileocecal que es el segmento más estrecho) es diagnóstica de Íleo Biliar secundario a una fístula colecistoduodenal."
  },
  {
    "id": "det-4",
    "title": "Fiebre, Eritema Sutil y Dolor Desproporcionado en el Muslo",
    "topicId": "piel",
    "tag": "Piel/Quemaduras",
    "chief": "Masculino de 52 años con diabetes mellitus tipo 2 mal controlada y dolor intenso en muslo derecho tras abrasión menor hace 48 h.",
    "clues": {
      "interrogatorio": "Dolor lancinante 10/10 en cara anteromedial del muslo derecho que en las últimas 3 horas evolucionó a hipoestesia cutánea en el centro de la lesión, acompañado de malestar general extremo.",
      "exploracion": "TA 88/54 mmHg, FC 126 lpm, Temp 38.9 °C. Edema tenso que rebasa los bordes del eritema mal delimitado, coloración violácea central, dos flictenas hemorrágicas y crepitación sutil a la palpación.",
      "laboratorio": "PCR 210 mg/L (4 pts), Leucocitos 26,500/mm³ (2 pts), Hb 10.4 g/dL (2 pts), Sodio 129 mEq/L (2 pts), Creatinina 2.1 mg/dL (2 pts), Glucosa 310 mg/dL (1 pt) → Puntaje LRINEC = 13 puntos.",
      "imagen": "A la incisión exploradora junto a la cama (prueba del dedo / Finger Test): ausencia de sangrado dérmico, salida de líquido turbio en 'agua de lavar platos' y disección digital sin resistencia a lo largo de la fascia profunda."
    },
    "options": [
      "Celulitis abscedada por S. aureus resistente a meticilina",
      "Trombosis venosa profunda iliofemoral (Flegmasia cerúlea dolens)",
      "Fascitis necrotizante polimicrobiana Tipo I (LRINEC alto)",
      "Pioderma gangrenoso"
    ],
    "ans": 2,
    "management": "Ingreso inmediato a quirófano para desbridamiento quirúrgico radical agresivo de toda la fascia y tejido necrótico hasta encontrar tejido viable sangrante (revisión en quirófano cada 24-48 h) + triple esquema antibiótico IV (Carbapenémico o Piperacilina/Tazobactam + Vancomicina + Clindamicina para inhibir síntesis de toxinas).",
    "why": "El dolor desproporcionado que progresa a anestesia cutánea (por infarto de nervios perforantes), flictenas hemorrágicas, agua de lavar platos y LRINEC ≥ 6 (aquí 13 pts) confirman Fascitis Necrotizante. Nunca debe retrasarse el pase a quirófano por esperar una TC o RM."
  },
  {
    "id": "det-5",
    "title": "Vómito Posprandial, Dolor Epigástrico e Imposibilidad para Pasar la SNG",
    "topicId": "esofago",
    "tag": "Esófago",
    "chief": "Femenino de 79 años con dolor retroesternal y epigástrico severo postprandial, arqueo improductivo sin vómito.",
    "clues": {
      "interrogatorio": "Refiere saciedad temprana y plenitud retroesternal de años de evolución. Hace 6 horas tras comida copiosa presenta dolor epigástrico/torácico intenso e intentos repetidos de vomitar sin lograr expulsar contenido gástrico.",
      "exploracion": "TA 100/60 mmHg, FC 112 lpm. Al intentar colocar sonda nasogástrica se detiene a los 40 cm con resistencia infranqueable.",
      "laboratorio": "Leucocitos 15,200/mm³, Lactato 3.1 mmol/L, troponinas negativas.",
      "imagen": "Radiografía de tórax: gran nivel hidroaéreo retrocardíaco. TC toracoabdominal: herniación del fundus y gran curvatura gástrica al mediastino posterior con rotación organoaxial de 180° del estómago."
    },
    "options": [
      "Acalasia Tipo II con megaesófago sigmoideo",
      "Síndrome de Boerhaave (perforación esofágica espontánea)",
      "Hernia hiatal paraesofágica gigante (Tipo III) complicada con vólvulo gástrico agudo (Tríada de Borchardt)",
      "Divertículo epifrénico gigante trombosado"
    ],
    "ans": 2,
    "management": "Descompresión endoscópica urgente si no hay necrosis y cirugía urgente para reducción del vólvulo gástrico, resección del saco herniario mediastinal, hiatoplastia y gastropexia / funduplicatura (o gastrectomía parcial si hay necrosis gástrica).",
    "why": "La Tríada de Borchardt (dolor epigástrico/torácico severo + arqueo improductivo sin poder vomitar + imposibilidad para pasar una sonda nasogástrica) es patognomónica del vólvulo gástrico agudo, complicación letal de las hernias hiatales paraesofágicas (Tipos II, III y IV)."
  },
  {
    "id": "det-6",
    "title": "Distensión Masiva y Signo del Grano de Café",
    "topicId": "colon",
    "tag": "Colon",
    "chief": "Masculino de 72 años institucionalizado con constipación crónica y distensión abdominal asimétrica masiva de 36 horas.",
    "clues": {
      "interrogatorio": "Paciente con enfermedad de Parkinson en tratamiento con anticolinérgicos. Sin evacuaciones ni canalización de gases desde hace 36 horas.",
      "exploracion": "TA 125/78 mmHg, FC 92 lpm, afebril. Abdomen con distensión timpánica asimétrica gigante hacia hipocondrio derecho, dolor moderado a la palpación, SIN signos de irritación peritoneal. Ampolla rectal vacía al tacto.",
      "laboratorio": "Leucocitos 9,800/mm³, Lactato 1.4 mmol/L, electrolitos normales.",
      "imagen": "Radiografía de abdomen: gran asa colónica dilatada en forma de 'U invertida' o 'grano de café' que nace en la pelvis y apunta hacia el cuadrante superior derecho. TC: signo del remolino ('whirl sign') mesentérico sigmoideo sin neumoperitoneo."
    },
    "options": [
      "Vólvulo cecal",
      "Vólvulo de sigmoides no complicado",
      "Síndrome de Ogilvie (pseudoobstrucción colónica aguda)",
      "Adenocarcinoma estenosante de recto superior"
    ],
    "ans": 1,
    "management": "Devolvulación endoscópica urgente mediante rectosigmoidoscopia flexible/rígida con colocación de sonda rectal descompresiva, seguida de Sigmoidectomía electiva con anastomosis primaria durante el mismo internamiento (porque la recurrencia sin cirugía supera el 60-70%).",
    "why": "En el vólvulo de sigmoides sin peritonitis ni isquemia mucosa, el manejo inicial de primera línea es la devolvulación endoscópica seguida de sigmoidectomía en el mismo ingreso. En cambio, en el vólvulo cecal la colonoscopia está contraindicada/ineficaz y se realiza hemicolectomía derecha quirúrgica directa."
  },
  {
    "id": "det-7",
    "title": "Estridor Agudo en la Sala de Recuperación Post-Tiroidectomía",
    "topicId": "trauma",
    "tag": "Trauma",
    "chief": "Femenino de 44 años que a las 3 horas de una tiroidectomía total por enfermedad de Graves presenta disnea súbita, agitación y estridor.",
    "clues": {
      "interrogatorio": "Cirugía reportada con bocio hipervascularizado. En recuperación inicia con sensación de opresión cervical rápidamente progresiva, disfagia y estridor inspiratorio.",
      "exploracion": "SatO₂ 86%, FC 132 lpm, paciente angustiada sentada hacia adelante. Cuello anterior tenso, aumentado de volumen debajo de la herida de Kocher, apósito con escaso manchado serohemático.",
      "laboratorio": "Calcio sérico normal (9.1 mg/dL); el cuadro ocurre a las 3 horas postoperatorias (la hipocalcemia aguda suele presentarse a las 24-72 h).",
      "imagen": "No se solicita imagen: emergencia quirúrgica inmediata de vía aérea."
    },
    "options": [
      "Hipocalcemia aguda por paratiroidectomía inadvertida",
      "Hematoma cervical sofocante a tensión en el compartimento visceral del cuello",
      "Traqueomalacia aislada",
      "Lesión unilateral de la rama externa del nervio laríngeo superior"
    ],
    "ans": 1,
    "management": "Abrir INMEDIATAMENTE en la cama del paciente la piel, el platisma y la línea alba de los músculos pretiroideos (retirar suturas/grapas) para evacuar los coágulos y descomprimir la tráquea y el retorno venoso laríngeo, asegurar la vía aérea y pasar a quirófano para controlar el vaso sangrante.",
    "why": "El hematoma cervical a tensión produce obstrucción letal de la vía aérea no solo por compresión traqueal directa, sino porque comprime el drenaje venoso y linfático de la laringe provocando edema masivo de la glotis y supraglotis. La maniobra salvadora inmediata junto a la cama es abrir todos los planos de la herida antes o mientras se prepara la intubación."
  },
  {
    "id": "det-8",
    "title": "Sangrado Hepático Persistente Pese a Maniobra de Pringle",
    "topicId": "trauma",
    "tag": "Trauma",
    "chief": "Masculino de 26 años en laparotomía exploradora por herida por proyectil de arma de fuego en hipocondrio derecho.",
    "clues": {
      "interrogatorio": "Ingresó con TA 70/40 mmHg, FC 140 lpm y FAST positivo en receso hepatorrenal de Morrison. Se activó protocolo de transfusión masiva 1:1:1.",
      "exploracion": "En quirófano se encuentra hemoperitoneo de 2,200 mL y laceración profunda estrellada en los segmentos VII y VIII del lóbulo hepático derecho.",
      "laboratorio": "Temp central 34.6 °C, pH arterial 7.16, Déficit de base -11, Lactato 7.2 mmol/L, INR 1.8 (Tríada de la Muerte instalada).",
      "imagen": "Hallazgo transoperatorio: se aplica pinzamiento atraumático del ligamento hepatoduodenal (Maniobra de Pringle), pero continúa brotando abundante sangre venosa oscura desde detrás del lóbulo hepático derecho."
    },
    "options": [
      "Lesión de la arteria hepática derecha reemplazada originada de la AMS",
      "Lesión de las venas suprahepáticas o de la vena cava inferior retrohepática (Grado V AAST)",
      "Fuga del conducto hepático derecho",
      "Sangrado de la arteria gastroduodenal"
    ],
    "ans": 1,
    "management": "Empaquetamiento perihepático compresivo inmediato (packing con compresas sobre el domo y debajo del hígado para comprimir el espacio retrohepático), cierre abdominal temporal (cirugía de control de daños) y traslado inmediato a UCI para corregir hipotermia, acidosis y coagulopatía.",
    "why": "La Maniobra de Pringle ocluye el flujo de entrada portal (arteria hepática propia y vena porta). Si el sangrado venoso oscuro persiste con Pringle activo, proviene del flujo de salida: venas suprahepáticas o vena cava inferior retrohepática. En presencia de la Tríada Letal, intentar movilizar y suturar la cava retrohepática tiene mortalidad >80%; la conducta salvadora es el empaquetamiento perihepático compresivo (control de daños)."
  }
];

export const QUIROFANO_PROCEDURES = [
  {
    "id": "qx-colecistectomia",
    "type": "3d",
    "subtype": "surgical_steps",
    "title": "Colecistectomía Laparoscópica: Visión Crítica de Strasberg y Variantes",
    "subtitle": "Triángulo de Calot, Visión Crítica de Strasberg y Variantes de Michels · 5 tiempos quirúrgicos críticos y 3 variantes anatómicas de riesgo.",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "badge": "Pasos Qx + 3 Variantes",
    "procedureKey": "colecistectomia",
    "steps": [
      {
        "step": "1. Exposición del fondo vesicular y liberación de adherencias",
        "detail": "Tracción del fondo vesicular hacia cefálico sobre el domo hepático y tracción del infundíbulo (bolsa de Hartmann) inferolateral derecha para abrir el ángulo entre cístico y colédoco.",
        "pitfall": "Traccionar el infundíbulo en línea recta hacia cefálico alinea el conducto cístico con el colédoco (lesión clásica tipo Strasberg E).",
        "instrument": "Grasper atraumático"
      },
      {
        "step": "2. Apertura peritoneal anterior y posterior (sobre línea R4U)",
        "detail": "Incisión de la hoja peritoneal anterior y posterior en el cuello vesicular, manteniéndose siempre por encima del surco de Rouvière.",
        "pitfall": "Disecar por debajo de la línea R4U o usar energía monopolar cerca del conducto hepático común.",
        "instrument": "Hook / Disector de Maryland"
      },
      {
        "step": "3. Obtención de la Visión Crítica de Seguridad de Strasberg",
        "detail": "1) Triángulo hepatocístico limpio de grasa; 2) Tercio inferior vesicular despegado de la placa cística; 3) Dos y solo dos estructuras entrando a la vesícula.",
        "pitfall": "Confundir una arteria hepática derecha en 'joroba de oruga' (Moynihan) con la arteria cística.",
        "instrument": "Disector de Maryland"
      },
      {
        "step": "4. Clipaje y sección de arteria cística y conducto cístico",
        "detail": "Colocación de 2 clips proximales y 1 distal en cada estructura tras confirmar la Visión Crítica en vista anterior y posterior (doble vista).",
        "pitfall": "No verificar que las puntas del clip abracen únicamente el conducto cístico sin morder la pared lateral del colédoco.",
        "instrument": "Engrapadora de clips de titanio / Hem-o-lok"
      },
      {
        "step": "5. Disección retrógrada del lecho vesicular y hemostasia",
        "detail": "Separación subserosa de la vesícula de la placa cística y revisión exhaustiva del lecho en busca de sangrado o fuga por conductos subvesicales de Luschka.",
        "pitfall": "Entrar al parénquima hepático (seno venoso de la rama media) o pasar por alto un conducto de Luschka.",
        "instrument": "Hook monopolar"
      }
    ],
    "variants": {
      "name": "Colecistectomía laparoscópica",
      "query": "colecistectomia laparoscopica triangulo hepatocistico calot arteria cistica conducto cistico variantes anatomicas",
      "variants": [
        {
          "id": "ahd-reemplazada",
          "name": "Arteria hepática derecha reemplazada desde la arteria mesentérica superior (Michels III)",
          "region": "Triángulo hepatocístico / posterior al colédoco",
          "incidence": "≈10–15 %",
          "cue": "Pulso por detrás y a la derecha del colédoco en el ligamento hepatoduodenal; la arteria cística nace de ella.",
          "if_missed": "Lesión o ligadura de la AHD: sangrado profuso o isquemia del lóbulo derecho."
        },
        {
          "id": "caterpillar",
          "name": "Joroba de oruga (caterpillar hump) de la arteria hepática derecha",
          "region": "Triángulo hepatocístico",
          "incidence": "≈5–10 %",
          "cue": "Asa arterial tortuosa y gruesa muy cerca del cuello vesicular; la 'cística' es corta y de gran calibre.",
          "if_missed": "Se confunde la AHD con la arteria cística y se liga."
        },
        {
          "id": "cistica-doble",
          "name": "Arteria cística doble",
          "region": "Triángulo hepatocístico",
          "incidence": "≈15–25 %",
          "cue": "Tras ligar una arteria cística persiste sangrado pulsátil del lecho o de la cara posterior del cuello.",
          "if_missed": "Sangrado del lecho vesicular durante la disección."
        },
        {
          "id": "luschka",
          "name": "Conducto de Luschka (conducto biliar subvesical)",
          "region": "Lecho vesicular",
          "incidence": "≈4–10 %",
          "cue": "Estructura tubular fina (1–2 mm) en el lecho hepático, con bilis en la gasa al disecar la placa cística.",
          "if_missed": "Fuga biliar posoperatoria (biloma) con colédoco íntegro."
        },
        {
          "id": "hepatico-aberrante",
          "name": "Conducto hepático derecho aberrante (sectorial posterior) que drena en el cístico",
          "region": "Triángulo hepatocístico",
          "incidence": "≈2–5 %",
          "cue": "Una segunda estructura tubular entra al cístico o al cuello; la colangiografía muestra un sector derecho sin opacificar.",
          "if_missed": "Sección de un conducto sectorial: fuga biliar o atrofia sectorial."
        },
        {
          "id": "cistico-paralelo",
          "name": "Conducto cístico largo, paralelo y adherido al colédoco",
          "region": "Ligamento hepatoduodenal",
          "incidence": "≈20 %",
          "cue": "El cístico no forma ángulo: corre pegado al colédoco varios centímetros antes de unirse bajo.",
          "if_missed": "Clip o sección del colédoco confundido con el cístico (lesión biliar mayor)."
        }
      ]
    },
    "outline": [
      "Tracción del fondo hacia el hombro derecho y de la bolsa de Hartmann lateral e inferior; referencia al surco de Rouvière",
      "Apertura del peritoneo anterior y posterior del triángulo hepatocístico, siempre por encima del surco de Rouvière",
      "Disección del triángulo hepatocístico: identificar conducto y arteria que entran a la vesícula",
      "Separación del tercio inferior de la vesícula de la placa cística",
      "Visión crítica de seguridad (Strasberg): sólo dos estructuras entran a la vesícula",
      "Colangiografía transoperatoria cuando la anatomía no es clara",
      "Clipado y sección de la arteria cística",
      "Clipado y sección del conducto cístico",
      "Disección de la vesícula del lecho hepático (placa cística)",
      "Revisión del lecho: hemostasia y búsqueda de bilis"
    ]
  },
  {
    "id": "qx-apendicectomia",
    "type": "3d",
    "subtype": "surgical_steps",
    "title": "Apendicectomía Laparoscópica Paso a Paso y Variantes Posicionales",
    "subtitle": "Base cecal, mesoapéndice, arteria apendicular y posiciones · 5 tiempos quirúrgicos críticos y 3 variantes anatómicas de riesgo.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Pasos Qx + 3 Variantes",
    "procedureKey": "apendicectomia",
    "steps": [
      {
        "step": "1. Exploración de cavidad e identificación de las tenias cólicas",
        "detail": "Localización del ciego siguiendo la tenia anterior (taenia libera) hasta su confluencia en la base apendicular.",
        "pitfall": "Manipular brusca o instrumentalmente la punta gangrenosa provocando perforación iatrogénica.",
        "instrument": "Babcock / Grasper atraumático"
      },
      {
        "step": "2. Creación de ventana avascular en el mesoapéndice",
        "detail": "Disección roma en la base del mesoapéndice junto a la pared cecal para aislar la arteria apendicular (rama de la ileocólica).",
        "pitfall": "Lesionar la pared cecal friable o avulsionar la arteria apendicular cerca de su origen.",
        "instrument": "Disector de Maryland"
      },
      {
        "step": "3. Control y sección de la arteria apendicular",
        "detail": "Electrocoagulación bipolar/ultrasónica o clipaje del mesoapéndice hasta dejar libre y limpia la base apendicular.",
        "pitfall": "Quemadura térmica lateral sobre el ciego o íleon terminal.",
        "instrument": "Energía bipolar avanzada / Clips"
      },
      {
        "step": "4. Ligadura de la base apendicular sana y sección",
        "detail": "Colocación de endoloop (nudo de Roeder), polimérico Hem-o-lok o engrapadora lineal en tejido viable de la base cecal.",
        "pitfall": "Dejar un muñón apendicular > 5 mm (riesgo de apendicitis del muñón) o ligar sobre tejido necrótico.",
        "instrument": "Endoloop / Hem-o-lok / Engrapadora"
      },
      {
        "step": "5. Extracción protegida y aspiración dirigida",
        "detail": "Extracción en bolsa extractora sin contaminar el puerto umbilical y aspiración de colecciones purulentas.",
        "pitfall": "Retirar el apéndice inflamado directo por el trocar causando infección de sitio quirúrgico.",
        "instrument": "Endobag y cánula de aspiración"
      }
    ],
    "variants": {
      "name": "Apendicectomía laparoscópica",
      "query": "apendicectomia laparoscopica apendice retrocecal arteria apendicular mesoapendice variantes",
      "variants": [
        {
          "id": "retrocecal",
          "name": "Apéndice retrocecal (subseroso) o subhepático",
          "region": "Retrocecal / fosa hepatorrenal",
          "incidence": "retrocecal ≈65 %; subhepático raro",
          "cue": "La base se encuentra en la convergencia de las tenias pero el cuerpo no se ve: está bajo el peritoneo del ciego.",
          "if_missed": "Apendicectomía incompleta o lesión del ciego o del uréter al disecar a ciegas."
        },
        {
          "id": "apendicular-accesoria",
          "name": "Arteria apendicular accesoria (de Seshachalam)",
          "region": "Base del apéndice / ciego",
          "incidence": "≈30–80 % según la serie",
          "cue": "Tras ligar el mesoapéndice persiste un vaso pulsátil en la base, desde la arteria cecal posterior.",
          "if_missed": "Sangrado del muñón o del mesoapéndice."
        },
        {
          "id": "meckel",
          "name": "Divertículo de Meckel",
          "region": "Íleon, a ~60 cm de la válvula ileocecal",
          "incidence": "≈2 %",
          "cue": "El apéndice se ve sano para el cuadro; al recorrer el íleon aparece un fondo de saco en el borde antimesentérico.",
          "if_missed": "Se deja la causa real del abdomen agudo (diverticulitis de Meckel)."
        },
        {
          "id": "pelvico",
          "name": "Apéndice pélvico adherido al anexo derecho o al uréter",
          "region": "Hueco pélvico",
          "incidence": "posición pélvica ≈20–30 %",
          "cue": "La punta desciende a la pelvis y se pierde entre el anexo derecho y el peritoneo que cubre el uréter.",
          "if_missed": "Lesión ureteral o anexial al liberarlo a ciegas."
        },
        {
          "id": "ciego-movil",
          "name": "Ciego móvil (mesenterio ileocecal común)",
          "region": "Fosa iliaca derecha / línea media",
          "incidence": "≈10–20 %",
          "cue": "Ciego y apéndice libres, sin fijación retroperitoneal; el ciego se desplaza hacia la línea media.",
          "if_missed": "Orientación equivocada de la base y riesgo de vólvulo cecal."
        },
        {
          "id": "subhepatico",
          "name": "Apéndice subhepático por ciego alto",
          "region": "Hipocondrio derecho",
          "incidence": "raro",
          "cue": "No hay ciego en la fosa iliaca; las tenias convergen bajo el borde hepático.",
          "if_missed": "Exploración prolongada en el sitio equivocado o apendicectomía incompleta."
        }
      ]
    },
    "outline": [
      "Exploración: localizar el ciego y seguir las tenias hasta su convergencia en la base apendicular",
      "Movilización del apéndice según su posición (pélvica, retrocecal, subhepática)",
      "Ventana en el mesoapéndice y control de la arteria apendicular",
      "Revisión de la base y del ciego antes de ligar",
      "Ligadura o grapado de la base y sección",
      "Revisión de hemostasia del mesoapéndice y del muñón; lavado dirigido"
    ]
  },
  {
    "id": "qx-lichtenstein",
    "type": "3d",
    "subtype": "surgical_steps",
    "title": "Hernioplastia Inguinal Abierta de Lichtenstein y Nervios Inguinales",
    "subtitle": "Conducto inguinal, malla libre de tensión y nervios inguinales · 5 tiempos quirúrgicos críticos y 3 variantes anatómicas de riesgo.",
    "topicId": "pared",
    "tag": "Pared",
    "badge": "Pasos Qx + 3 Variantes",
    "procedureKey": "lichtenstein",
    "steps": [
      {
        "step": "1. Incisión inguinal y apertura de la aponeurosis del oblicuo externo",
        "detail": "Apertura siguiendo las fibras hacia el anillo inguinal superficial, identificando y protegiendo el nervio ilioinguinal subyacente.",
        "pitfall": "Seccionar el nervio ilioinguinal al abrir con tijera sin visualizar el plano subaponeurótico.",
        "instrument": "Bisturí y tijera de Metzenbaum"
      },
      {
        "step": "2. Movilización del cordón espermático sobre el tubérculo púbico",
        "detail": "Rodeo atraumático del cordón con drenaje Penrose, preservando los 3 nervios (ilioinguinal, iliohipogástrico y rama genital del genitofemoral).",
        "pitfall": "Esqueletizar en exceso el plexo pampiniforme causando orquitis isquémica.",
        "instrument": "Disección roma y Penrose"
      },
      {
        "step": "3. Identificación y manejo del saco herniario (indirecto vs directo)",
        "detail": "En hernia indirecta (lateral a vasos epigástricos): disección alta del saco del cordón e inversión; en directa (triángulo de Hesselbach): plicatura de fascia transversalis.",
        "pitfall": "Abrir la pared de la vejiga o colon sigmoides en una hernia por deslizamiento.",
        "instrument": "Disección fina y sutura absorbible"
      },
      {
        "step": "4. Fijación libre de tensión de malla de polipropileno",
        "detail": "Fijación al tejido perióstico del tubérculo púbico (traslape de 2 cm medial), borde inferior al ligamento inguinal (sutura continua) y borde superior al tendón conjunto.",
        "pitfall": "Dejar traslape insuficiente sobre el pubis (sitio #1 de recidiva) o atrapar el nervio iliohipogástrico en los puntos superiores.",
        "instrument": "Malla de polipropileno y sutura monofilamento"
      },
      {
        "step": "5. Creación de colas para el nuevo anillo profundo y cierre por planos",
        "detail": "Entrecruzamiento de las dos colas de la malla alrededor del cordón recreando el anillo inguinal profundo y cierre de la aponeurosis del oblicuo externo.",
        "pitfall": "Estrangular el cordón espermático con un anillo demasiado estrecho.",
        "instrument": "Portaagujas"
      }
    ],
    "variants": {
      "name": "Hernioplastia inguinal abierta (Lichtenstein)",
      "query": "hernioplastia de lichtenstein canal inguinal nervio ilioinguinal iliohipogastrico rama genital genitofemoral hernia por deslizamiento lipoma del cordon",
      "variants": [
        {
          "id": "ilioinguinal-ausente",
          "name": "Nervio ilioinguinal ausente o con trayecto atípico",
          "region": "Canal inguinal, bajo la aponeurosis del oblicuo mayor",
          "incidence": "variable (ausente en una minoría)",
          "cue": "Al abrir la aponeurosis no se ve el nervio sobre el cordón; un filete atraviesa la aponeurosis o corre pegado al borde del oblicuo menor.",
          "if_missed": "Neuralgia crónica por atraparlo con la sutura de la malla."
        },
        {
          "id": "rama-genital",
          "name": "Rama genital del genitofemoral junto a la vena espermática externa",
          "region": "Piso del canal, borde inferior del cordón",
          "incidence": "constante, con trayecto variable",
          "cue": "Un nervio fino acompaña a una vena azulada (la «línea azul») en el borde inferior del cordón.",
          "if_missed": "Dolor o hipoestesia escrotal por incluirlo al levantar el cordón."
        },
        {
          "id": "deslizamiento",
          "name": "Hernia por deslizamiento (ciego, sigmoides o vejiga en la pared del saco)",
          "region": "Saco herniario",
          "incidence": "≈3–5 % de las indirectas",
          "cue": "Saco grueso de un lado, con grasa y vasos en su pared; no se transilumina y no se puede vaciar por completo.",
          "if_missed": "Lesión visceral al abrir o ligar el saco alto."
        },
        {
          "id": "femoral-pantalon",
          "name": "Hernia femoral concomitante (hernia en pantalón)",
          "region": "Anillo femoral, bajo el ligamento inguinal",
          "incidence": "poco frecuente",
          "cue": "Tras reparar el piso persiste un abultamiento bajo el ligamento inguinal, medial a la vena femoral.",
          "if_missed": "Recidiva por una hernia femoral que nunca se reparó."
        },
        {
          "id": "lipoma-cordon",
          "name": "Lipoma del cordón",
          "region": "Dentro del cordón espermático",
          "incidence": "≈20–40 %",
          "cue": "Masa de grasa amarilla, lobulada, dentro de las fibras del cremáster, separada del saco.",
          "if_missed": "Pseudorrecurrencia por dejar la masa grasa."
        }
      ]
    },
    "outline": [
      "Apertura de la aponeurosis del oblicuo mayor hasta el anillo inguinal superficial",
      "Identificación y preservación de los nervios ilioinguinal e iliohipogástrico",
      "Levantamiento del cordón espermático en bloque",
      "Identificación de la rama genital del genitofemoral y la vena espermática externa",
      "Disección del saco (indirecto o directo) y manejo de su contenido",
      "Revisión del anillo femoral y del piso del canal",
      "Colocación de la malla: sutura al ligamento inguinal y al tubérculo púbico",
      "Cola de la malla alrededor del cordón y cierre de la aponeurosis"
    ]
  },
  {
    "id": "qx-hernioplastia",
    "type": "3d",
    "subtype": "surgical_steps",
    "title": "Hernioplastia Inguinal Laparoscópica (TAPP/TEP) y Orificio de Fruchaud",
    "subtitle": "Orificio miopectíneo de Fruchaud, Triángulo de Doom, del Dolor y Corona Mortis · 5 tiempos quirúrgicos críticos y 3 variantes anatómicas de riesgo.",
    "topicId": "pared",
    "tag": "Pared",
    "badge": "Pasos Qx + 3 Variantes",
    "procedureKey": "hernioplastia",
    "steps": [
      {
        "step": "1. Creación del colgajo peritoneal / espacio preperitoneal",
        "detail": "En TAPP: apertura peritoneal transversal 4 cm por encima del defecto desde la EIAS hasta el pliegue umbilical medial; en TEP: disección con balón en espacio de Retzius y Bogros.",
        "pitfall": "Lesionar los vasos epigástricos inferiores en su origen ilíaco.",
        "instrument": "Tijera laparoscópica / Balón disector"
      },
      {
        "step": "2. Disección de las 3 zonas y exposición del Orificio Miopectíneo de Fruchaud",
        "detail": "Exposición del ligamento de Cooper y sínfisis púbica (Zona 2 medial), espacio de Bogros/psoas (Zona 1 lateral) y visualización de la Corona Mortis.",
        "pitfall": "Avulsionar una Corona Mortis venosa o arterial sobre la rama superior del pubis.",
        "instrument": "Disector atraumático"
      },
      {
        "step": "3. Reducción del saco y parietalización de los elementos del cordón",
        "detail": "Separación del peritoneo al menos 4-5 cm proximal del conducto deferente (medial) y vasos gonadales (laterales), delimitando el Triángulo de Doom y el Triángulo del Dolor.",
        "pitfall": "No reducir un lipoma preherniario del cordón (causa de 'seudorrecidiva').",
        "instrument": "Graspers atraumáticos"
      },
      {
        "step": "4. Colocación de malla macroporosa amplia (≥ 10 x 15 cm)",
        "detail": "Cobertura completa del orificio miopectíneo de Fruchaud (anillos inguinal directo, indirecto y femoral) sin pliegues.",
        "pitfall": "Colocar grapas o tackers en el Triángulo de Doom (vasos ilíacos externos) o en el Triángulo del Dolor (nervios femorocutáneo lateral y genitofemoral).",
        "instrument": "Malla anatómica 10x15 cm"
      },
      {
        "step": "5. Cierre hermético del colgajo peritoneal (en TAPP)",
        "detail": "Sutura continua hermética del peritoneo cubriendo por completo la malla para aislarla de las asas intestinales.",
        "pitfall": "Dejar defectos o brechas en el peritoneo donde pueda herniarse e incarcerarse un asa de intestino delgado.",
        "instrument": "Portaagujas laparoscópico y sutura barbada/absorbible"
      }
    ],
    "variants": {
      "name": "Hernioplastia inguinal laparoscópica (TAPP/TEP)",
      "query": "hernioplastia inguinal laparoscopica tapp tep corona mortis vasos epigastricos triangulo del dolor triangulo de la fatalidad",
      "variants": [
        {
          "id": "corona-mortis",
          "name": "Corona mortis (anastomosis obturatriz–epigástrica sobre el ligamento de Cooper)",
          "region": "Espacio retropúbico, sobre la rama púbica superior",
          "incidence": "≈20–30 % (venosa más frecuente)",
          "cue": "Vaso de 2–3 mm que cruza el ligamento de Cooper en dirección vertical hacia el agujero obturador.",
          "if_missed": "Sangrado difícil de controlar al fijar la malla o disecar el Cooper."
        },
        {
          "id": "epigastricos-anomalos",
          "name": "Vasos epigástricos inferiores duplicados o de origen anómalo",
          "region": "Anillo inguinal profundo",
          "incidence": "poco frecuente",
          "cue": "Dos troncos arteriales en la pared posterior o un origen desde la obturatriz.",
          "if_missed": "Sangrado de la pared o hematoma de la vaina del recto."
        },
        {
          "id": "ilioinguinal-atipico",
          "name": "Nervio ilioinguinal o genitofemoral con trayecto atípico",
          "region": "Triángulo del dolor",
          "incidence": "variable",
          "cue": "Estructura nerviosa por debajo del tracto iliopúbico, dentro del área donde se planea fijar.",
          "if_missed": "Inguinodinia crónica por atrapamiento con la fijación."
        },
        {
          "id": "femoral-oculta",
          "name": "Hernia femoral u obturatriz oculta concomitante",
          "region": "Orificio miopectíneo, bajo el tracto iliopúbico",
          "incidence": "femoral oculta ≈5–10 % en la exploración laparoscópica",
          "cue": "Al despejar el orificio miopectíneo, un defecto medial a la vena iliaca externa (o junto al agujero obturador) con grasa preperitoneal que entra en él.",
          "if_missed": "Recidiva temprana por una hernia que no se cubrió con la malla."
        },
        {
          "id": "lipoma-preperitoneal",
          "name": "Lipoma preperitoneal del cordón",
          "region": "Anillo inguinal profundo",
          "incidence": "≈20–40 %",
          "cue": "Al reducir el saco persiste una masa de grasa amarilla que se mete al anillo profundo junto a los elementos del cordón.",
          "if_missed": "Pseudorrecurrencia: el paciente sigue con abultamiento inguinal."
        },
        {
          "id": "vejiga-directa",
          "name": "Vejiga en la pared medial de una hernia directa (por deslizamiento)",
          "region": "Espacio de Retzius / triángulo de Hesselbach",
          "incidence": "poco frecuente; más en hernias directas grandes",
          "cue": "El saco directo tiene pared gruesa y vascularizada que continúa hacia el espacio de Retzius; no se separa como un saco peritoneal fino.",
          "if_missed": "Lesión vesical al disecar o fijar la malla."
        }
      ]
    },
    "outline": [
      "Apertura del colgajo peritoneal (TAPP) o del espacio preperitoneal (TEP) desde la espina iliaca anterosuperior hasta el ligamento umbilical medial",
      "Identificación de los vasos epigástricos inferiores y del anillo inguinal profundo",
      "Disección del espacio de Retzius hasta el ligamento de Cooper y la sínfisis",
      "Disección del espacio de Bogros lateral, respetando el triángulo del dolor",
      "Parietalización de los elementos del cordón y reducción del saco",
      "Visión del orificio miopectíneo completo antes de colocar la malla",
      "Colocación y fijación de la malla (dónde sí y dónde no fijar)",
      "Cierre del colgajo peritoneal y revisión de hemostasia"
    ]
  },
  {
    "id": "qx-funduplicatura",
    "type": "3d",
    "subtype": "surgical_steps",
    "title": "Funduplicatura de Nissen Laparoscópica y Anatomía Hiatal",
    "subtitle": "Hiato esofágico, pilares diafragmáticos, nervios vagos y vasos cortos · 5 tiempos quirúrgicos críticos y 3 variantes anatómicas de riesgo.",
    "topicId": "esofago",
    "tag": "Esófago",
    "badge": "Pasos Qx + 3 Variantes",
    "procedureKey": "funduplicatura",
    "steps": [
      {
        "step": "1. Disección de la pars flaccida y exposición del pilar derecho",
        "detail": "Apertura del epiplón gastrohepático respetando una posible arteria hepática izquierda accesoria/reemplazada (Michels II) y el nervio vago hepático.",
        "pitfall": "Ligar a ciegas una arteria hepática izquierda reemplazada en la pars condensa.",
        "instrument": "Bisturí armónico / Bipolar avanzado"
      },
      {
        "step": "2. Movilización circunferencial del esófago y ventana retroesofágica",
        "detail": "Disección de ambos pilares diafragmáticos y del mediastino inferior logrando ≥ 3 cm de esófago intraabdominal libre de tensión, preservando vagos anterior y posterior.",
        "pitfall": "Perforar la cara posterior del esófago al crear la ventana retroesofágica a ciegas.",
        "instrument": "Grasper atraumático y energía ultrasónica"
      },
      {
        "step": "3. Sección de vasos gástricos cortos y movilización del fundus",
        "detail": "División de los vasos gástricos cortos desde el polo esplénico inferior hasta el pilar izquierdo para liberar por completo el fundus gástrico.",
        "pitfall": "Omitir la sección de vasos cortos produciendo una funduplicatura a tensión con torsión ('twist') y disfagia postoperatoria.",
        "instrument": "Sellador vascular ultrasónico"
      },
      {
        "step": "4. Cierre de los pilares diafragmáticos (hiatoplastia posterior)",
        "detail": "Aproximación de los pilares derecho e izquierdo detrás del esófago con puntos separados de material no absorbible calibrando el hiato.",
        "pitfall": "Angulación excesiva o cierre demasiado apretado del hiato esofágico.",
        "instrument": "Portaagujas y sutura trenzada no absorbible"
      },
      {
        "step": "5. Confección de la funduplicatura de Nissen 360° ('Floppy Nissen')",
        "detail": "Paso del fundus gástrico por detrás del esófago ('maniobra del limpiabrisas') y confección de una válvula holgada y corta (1.5 a 2 cm) con 3 puntos no absorbibles sobre bujía.",
        "pitfall": "Confeccionar la válvula con el cuerpo gástrico en vez del fundus o hacerla > 3 cm de longitud.",
        "instrument": "Portaagujas laparoscópico"
      }
    ],
    "variants": {
      "name": "Funduplicatura de Nissen laparoscópica",
      "query": "funduplicatura de nissen laparoscopica hiato esofagico pilares nervio vago arteria hepatica izquierda accesoria gastricos cortos variantes",
      "variants": [
        {
          "id": "hepatica-izq-accesoria",
          "name": "Arteria hepática izquierda accesoria o reemplazada (desde la gástrica izquierda)",
          "region": "Pars flácida del ligamento gastrohepático",
          "incidence": "≈10–20 %",
          "cue": "Vaso de 2–3 mm que late dentro de la pars flácida y corre oblicuo desde la curvatura menor hacia el hilio hepático.",
          "if_missed": "Sangrado o isquemia del segmento lateral izquierdo del hígado al seccionarla."
        },
        {
          "id": "gastrica-posterior",
          "name": "Arteria gástrica posterior (desde la esplénica)",
          "region": "Cara posterior del fondo gástrico",
          "incidence": "≈40–60 %",
          "cue": "Al exponer la cara posterior del fondo, un vaso asciende desde la arteria esplénica hacia el fondo por detrás del estómago.",
          "if_missed": "Sangrado al crear la ventana retrogástrica."
        },
        {
          "id": "vago-posterior-despegado",
          "name": "Nervio vago posterior separado del esófago",
          "region": "Hiato, junto al pilar derecho",
          "incidence": "frecuente",
          "cue": "Al disecar por detrás del esófago aparece un cordón blanco de 2–3 mm separado del esófago, pegado al pilar derecho.",
          "if_missed": "Lesión vagal o funduplicatura que lo deja fuera: gastroparesia o síndrome de distensión."
        },
        {
          "id": "gastricos-cortos-cortos",
          "name": "Vasos gástricos cortos muy cortos (bazo pegado al fondo)",
          "region": "Fondo gástrico / polo superior del bazo",
          "incidence": "variable",
          "cue": "El polo superior del bazo queda casi pegado al fondo; los gástricos cortos miden menos de 1 cm.",
          "if_missed": "Desgarro capsular o sangrado esplénico al traccionar o seccionar."
        }
      ]
    },
    "outline": [
      "Exposición del hiato: retracción del lóbulo izquierdo del hígado",
      "División de la pars flácida del ligamento gastrohepático",
      "Disección del pilar derecho e identificación del vago anterior",
      "Ventana retroesofágica e identificación del vago posterior",
      "Sección de los vasos gástricos cortos y movilización del fondo",
      "Movilización mediastinal del esófago hasta lograr 3 cm intraabdominales",
      "Cierre posterior de los pilares",
      "Maniobra de shoe-shine y funduplicatura de 360° floja sobre bujía"
    ]
  },
  {
    "id": "qx-tiroidectomia",
    "type": "3d",
    "subtype": "surgical_steps",
    "title": "Tiroidectomía Total: Nervio Laríngeo Recurrente y Paratiroides",
    "subtitle": "Nervio laríngeo recurrente, ligamento de Berry, tubérculo de Zuckerkandl y paratiroides · 5 tiempos quirúrgicos críticos y 3 variantes anatómicas de riesgo.",
    "topicId": "trauma",
    "tag": "Trauma",
    "badge": "Pasos Qx + 3 Variantes",
    "procedureKey": "tiroidectomia",
    "steps": [
      {
        "step": "1. Cervicotomía transversa (Kocher), colgajos subplatismales y apertura de línea alba",
        "detail": "Incisión cervical anterior 2 cm sobre la horquilla esternal, elevación de colgajos subplatismales y separación de músculos pretiroideos en el rafe medio.",
        "pitfall": "Lesionar las venas yugulares anteriores produciendo sangrado que oscurece los planos anatómicos.",
        "instrument": "Bisturí y electrocauterio fino"
      },
      {
        "step": "2. Ligadura individualizada de los vasos del polo tiroideo superior",
        "detail": "Exposición del espacio avascular de Joll (triángulo esternotiroideo-laríngeo) y ligadura de las ramas de la arteria y vena tiroidea superior estrictamente al ras de la cápsula.",
        "pitfall": "Ligadura en masa alta del pedículo superior lesionando la rama externa del nervio laríngeo superior (nervio de Galli-Curci).",
        "instrument": "Pinzas delicadas y ligaduras / sellador"
      },
      {
        "step": "3. Movilización medial del lóbulo y sección de la vena tiroidea media",
        "detail": "Ligadura de la vena tiroidea media de Kocher, rotando medialmente el lóbulo tiroideo para abrir el surco traqueoesofágico.",
        "pitfall": "Tracción brusca que avulsiona la vena tiroidea media directamente de la vena yugular interna.",
        "instrument": "Pinza de disección vascular"
      },
      {
        "step": "4. Identificación del Nervio Laríngeo Recurrente y preservación de paratiroides",
        "detail": "Identificación visual completa del NLR en el triángulo de Simon/Beahr y junto al tubérculo de Zuckerkandl; disección capsular preservando la irrigación de paratiroides superior e inferior.",
        "pitfall": "Confundir una rama arterial con el NLR o desvascularizar las paratiroides al ligar el tronco principal de la arteria tiroidea inferior.",
        "instrument": "Disección fina + neuromonitoreo"
      },
      {
        "step": "5. Disección del ligamento suspensorio de Berry y hemostasia con Valsalva",
        "detail": "Sección milimétrica del ligamento de Berry bajo visión directa de la entrada laríngea del NLR, verificación de viabilidad paratiroidea (autotransplante en ECM si hay isquemia) y maniobra de Valsalva.",
        "pitfall": "Usar energía térmica a menos de 2-3 mm del nervio laríngeo recurrente en el ligamento de Berry.",
        "instrument": "Bisturí frío y ligaduras"
      }
    ],
    "variants": {
      "name": "Tiroidectomía total",
      "query": "tiroidectomia nervio laringeo recurrente paratiroides tuberculo de zuckerkandl variantes",
      "variants": [
        {
          "id": "no-recurrente",
          "name": "Nervio laríngeo no recurrente derecho con arteria subclavia derecha aberrante (lusoria)",
          "region": "Cuello derecho, a nivel del polo superior/medio",
          "incidence": "≈0.5–1 % (lado derecho)",
          "cue": "No se encuentra el NLR en el surco traqueoesofágico bajo; una rama transversa sale del vago a la altura del cricoides.",
          "if_missed": "Sección del nervio creyendo que es una rama vascular: parálisis cordal."
        },
        {
          "id": "bifurcacion-nlr",
          "name": "Bifurcación extralaríngea del nervio laríngeo recurrente",
          "region": "Surco traqueoesofágico, cerca del ligamento de Berry",
          "incidence": "≈30–40 %",
          "cue": "El nervio identificado es delgado; una segunda rama anterior (motora) corre más medial hacia el ligamento de Berry.",
          "if_missed": "Lesión de la rama anterior motora con el tronco 'preservado'."
        },
        {
          "id": "zuckerkandl",
          "name": "Tubérculo de Zuckerkandl grande que cubre el nervio",
          "region": "Cara posterolateral del lóbulo",
          "incidence": "≈60 % presente; grado III en una minoría",
          "cue": "Prolongación posterior del lóbulo; el NLR corre por debajo (medial) del tubérculo.",
          "if_missed": "Tracción o sección del NLR al luxar el lóbulo."
        },
        {
          "id": "paratiroides-timica",
          "name": "Paratiroides inferior intratímica",
          "region": "Lengüeta tímica cervical",
          "incidence": "≈5–10 % de las inferiores",
          "cue": "No se encuentra la paratiroides inferior en su sitio; el cuerno tímico está engrosado.",
          "if_missed": "Hipoparatiroidismo por no preservarla o por tiroidectomía sin identificarla."
        }
      ]
    },
    "outline": [
      "Exposición del lóbulo: separación de los músculos pretiroideos y ligadura de la vena tiroidea media",
      "Disección del polo superior pegado a la cápsula, protegiendo la rama externa del laríngeo superior",
      "Búsqueda del nervio laríngeo recurrente en el surco traqueoesofágico y su relación con la arteria tiroidea inferior",
      "Rotación medial del lóbulo y manejo del tubérculo de Zuckerkandl",
      "Identificación y preservación de paratiroides superior e inferior con su pedículo",
      "Disección en el ligamento de Berry siguiendo el nervio hasta su entrada laríngea",
      "Neuromonitoreo (señal V2/R2) antes de pasar al lado contralateral",
      "Revisión de hemostasia y de la vascularidad de las paratiroides"
    ]
  },
  {
    "id": "qx-hemicolectomia",
    "type": "3d",
    "subtype": "surgical_steps",
    "title": "Hemicolectomía Derecha Oncológica (CME) y Tronco de Henle",
    "subtitle": "Escisión completa del mesocolon (CME), vasos ileocólicos y tronco de Henle · 5 tiempos quirúrgicos críticos y 3 variantes anatómicas de riesgo.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Pasos Qx + 3 Variantes",
    "procedureKey": "hemicolectomia",
    "steps": [
      {
        "step": "1. Abordaje medial-a-lateral e identificación del pedículo ileocólico",
        "detail": "Tracción de la unión ileocecal para tensar la raíz mesentérica e incisión peritoneal debajo de los vasos ileocólicos.",
        "pitfall": "Confundir los vasos mesentéricos superiores (AMS/VMS) con el pedículo ileocólico.",
        "instrument": "Grasper atraumático y tijera/hook"
      },
      {
        "step": "2. Disección en el plano embriológico de Toldt y protección duodenal",
        "detail": "Separación avascular entre la fascia mesocólica posterior y la fascia retroperitoneal de Gerota/Toldt, dejando en el piso la 2ª/3ª porción del duodeno, cabeza pancreática, uréter derecho y vasos gonadales.",
        "pitfall": "Perforar la segunda porción duodenal o lesionar el uréter derecho por perder el plano interfascial.",
        "instrument": "Disección roma y energía avanzada"
      },
      {
        "step": "3. Ligadura vascular central (CME) y atención al Tronco Gastrocólico de Henle",
        "detail": "Ligadura en el origen de vasos ileocólicos, cólicos derechos (si existen) y rama derecha de la cólica media.",
        "pitfall": "Avulsión del Tronco Venoso Gastrocólico de Henle en su desembocadura en la vena mesentérica superior (sangrado venoso masivo).",
        "instrument": "Clips Hem-o-lok y sellador vascular"
      },
      {
        "step": "4. Movilización del ángulo hepático y corredera parietocólica derecha",
        "detail": "Apertura de la transcavidad de los epiplones, sección del ligamento hepatocólico y liberación lateral completa del colon ascendente.",
        "pitfall": "Tracción excesiva sobre el epiplón causando desgarro capsular hepático o lesión duodenal.",
        "instrument": "Bisturí ultrasónico"
      },
      {
        "step": "5. Sección de íleon terminal y colon transverso + anastomosis ileocólica",
        "detail": "Sección con márgenes oncológicos ≥ 5-10 cm y confección de anastomosis ileocólica isoperistáltica o antiperistáltica libre de tensión y bien perfundida.",
        "pitfall": "Torsión de 180° del mesenterio ileal al subir el asa para la anastomosis.",
        "instrument": "Engrapadora lineal cortante y sutura"
      }
    ],
    "variants": {
      "name": "Hemicolectomía derecha laparoscópica con ligadura central",
      "query": "hemicolectomia derecha tronco gastrocolico de henle arteria colica media ileocolica variantes vasculares",
      "variants": [
        {
          "id": "henle",
          "name": "Tronco gastrocólico de Henle con afluentes variables (gastro-pancreato-cólico)",
          "region": "Borde inferior del páncreas, raíz del mesocolon",
          "incidence": "presente ≈70–90 %, con múltiples patrones",
          "cue": "Al disecar la vena mesentérica superior aparece un tronco corto que recibe la gastroepiploica derecha y una cólica derecha superior.",
          "if_missed": "Desgarro venoso con sangrado de difícil control en la raíz del mesenterio."
        },
        {
          "id": "colica-media",
          "name": "Arteria cólica media ausente o accesoria",
          "region": "Mesocolon transverso",
          "incidence": "ausente ≈3–5 %; accesoria ≈10 %",
          "cue": "No se identifica el tronco esperado; la irrigación llega por una arteria cólica izquierda accesoria o una rama doble.",
          "if_missed": "Isquemia del colon transverso por ligar la única rama dominante."
        }
      ]
    },
    "outline": [
      "Abordaje medial a lateral: tracción del pedículo ileocólico y apertura del peritoneo bajo él",
      "Identificación del duodeno y del plano de Toldt por detrás del mesocolon",
      "Ligadura central de los vasos ileocólicos junto a la vena mesentérica superior",
      "Disección sobre la vena mesentérica superior en sentido cefálico",
      "Identificación del tronco gastrocólico de Henle y sus afluentes",
      "Identificación y ligadura de la rama derecha de la cólica media",
      "Movilización del ángulo hepático y del colon derecho desde el retroperitoneo",
      "Revisión de la perfusión del colon transverso remanente antes de la anastomosis"
    ]
  }
];

export const EXTRA_BLITZ_QUESTIONS = [
  {
    "id": "5c5e596b64a841928f41732b6047d687",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente de 25 años se presenta en el servicio de urgencias con dolor abdominal en la fosa iliaca derecha, fiebre y vómitos. Al examen físico presenta signos de irritación peritoneal. ¿Qué prueba diagnóstica tiene la mejor precisión para confirmar apendicitis aguda en este caso?",
    "opts": [
      "Ultrasonido",
      "Tomografía computarizada",
      "Radiografía abdominal",
      "Laparoscopia"
    ],
    "ans": 1,
    "why": "La tomografía computarizada es la prueba de imagen más precisa para confirmar el diagnóstico de apendicitis aguda, especialmente en adultos. Aunque el ultrasonido puede ser útil en algunos casos, su eficacia es inferior comparada con la tomografía. Las radiografías no son útiles en el diagnóstico de apendicitis."
  },
  {
    "id": "64a13560ad3c470885391846e3a985f0",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un adolescente de 16 años es evaluado por dolor abdominal recurrente. Se sospecha apendicitis aguda. ¿Cuál es el puntaje de Alvarado que indica una alta probabilidad de apendicitis aguda?",
    "opts": [
      "2-4",
      "5-6",
      "7-8",
      "9-10"
    ],
    "ans": 2,
    "why": "Un puntaje de Alvarado entre 7 y 8 indica una probabilidad probable de apendicitis aguda, lo que sugiere que se debe considerar seriamente la intervención quirúrgica. Puntajes mayores son indicativos de una apendicitis muy probable."
  },
  {
    "id": "76fa7914e84a4b76a92949d12059d25e",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente de 30 años presenta dolor en la fosa iliaca derecha, fiebre y leucocitosis. Después de evaluación clínica y estudios de imagen, se hace el diagnóstico de apendicitis aguda. ¿Cuál es el tratamiento de elección para esta condición?",
    "opts": [
      "Tratamiento antibiótico solo",
      "Apendicectomía laparoscópica",
      "Apendicectomía abierta",
      "Observación"
    ],
    "ans": 1,
    "why": "La apendicectomía laparoscópica es el tratamiento de elección para la apendicitis aguda, ya que ofrece menores tasas de complicaciones y un tiempo de recuperación más rápido en comparación con la apendicectomía abierta."
  },
  {
    "id": "e412aeee48404246afd3e0bffd9d77f1",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "En un estudio de investigación sobre apendicitis aguda en pacientes pediátricos, se ha demostrado que el dolor abdominal es una característica común. ¿Qué otro examen puede ser útil para fortalecer el diagnóstico de apendicitis en niños?",
    "opts": [
      "Biopsia del apéndice",
      "Tomografía computarizada",
      "Punción lumbar",
      "Exámenes de sangre"
    ],
    "ans": 3,
    "why": "Los exámenes de sangre, incluido el conteo de leucocitos y los marcadores inflamatorios, son útiles para evaluar apendicitis aguda en niños. Ayudan a confirmar la presencia de una inflamación."
  },
  {
    "id": "ec36d9fdfbd34f338da2d804161e1c18",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente con apendicitis aguda no complicada opta por tratamiento no quirúrgico. Según las guías, ¿qué opción es más efectiva?",
    "opts": [
      "Solo observación",
      "Antibióticos solo",
      "Antibióticos y observación",
      "Apendicectomía programada"
    ],
    "ans": 2,
    "why": "El tratamiento no quirúrgico que combina antibióticos y observación ha mostrado ser efectivo en pacientes con apendicitis no complicada. Sin embargo, es importante monitorear para prevenir complicaciones."
  },
  {
    "id": "9edd27b0b6374d1fa86e79a60d8b24da",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un hombre de 40 años llega con dolor abdominal severo en la fosa iliaca derecha. La tomografía revela un apéndice inflamado y la presencia de flegmón. ¿Cuál es el manejo adecuado en este caso?",
    "opts": [
      "Apendicectomía inmediata",
      "Tratamiento antibiótico y observación",
      "Drenaje del flegmón y apendicectomía diferida",
      "Reevaluación en 48 horas"
    ],
    "ans": 1,
    "why": "Un flegmón no es una colección drenable: la guía WSES Jerusalem 2020 considera razonable el manejo no operatorio con antibióticos como primera línea en apendicitis con flegmón o absceso. El drenaje percutáneo es solo un complemento si hay absceso accesible, y no se recomienda la apendicectomía de intervalo de rutina en menores de 40 años. A partir de los 40 años se sugiere colonoscopia y tomografía de intervalo para descartar neoplasia apendicular."
  },
  {
    "id": "58a54233e8174e5a9bd8786439e07595",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente necesita cirugía por apendicitis aguda. Según la evidencia disponible, ¿cuál es la ventaja principal de la apendicectomía laparoscópica comparada con la cirugía abierta?",
    "opts": [
      "Menor riesgo de infección posquirúrgica",
      "Mayor duración de la cirugía",
      "Mayor costo",
      "Mayor tiempo de hospitalización"
    ],
    "ans": 0,
    "why": "La apendicectomía laparoscópica tiene la ventaja de un menor riesgo de infección en comparación con la apendicectomía abierta, así como un menor tiempo de recuperación."
  },
  {
    "id": "54432c58f0f0487fa496e44a12b95910",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un niño es evaluado por sospecha de apendicitis. Según las guías, ¿cuál es el rol de los marcadores bioquímicos en el diagnóstico?",
    "opts": [
      "Son poco útiles",
      "Son altamente predictivos en todos los casos",
      "Pueden excluir apendicitis complicada",
      "Reducen la necesidad de cirugía"
    ],
    "ans": 2,
    "why": "Los marcadores bioquímicos pueden indicar la presencia de apendicitis complicada y ayudar a descartar casos negativos de apendicitis en pediatría."
  },
  {
    "id": "dcdc224db2f646da9eeb06aab94a1e5c",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Una revisión centrada en los indicadores de apendicitis aguda menciona un nuevo criterio llamado AIR. ¿Qué mejora notable ofrece este puntaje comparado con otros?",
    "opts": [
      "Reduce el número de cirugías innecesarias",
      "Aumenta las tasas de perforación",
      "Se basa únicamente en síntomas",
      "No tiene aplicabilidad clínica"
    ],
    "ans": 0,
    "why": "El puntaje AIR ha demostrado disminuir las tasas de apendicectomías negativas y mejorar la precisión en el diagnóstico clínico."
  },
  {
    "id": "d3a137d8119a44b3bb980419de8eb0b0",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente con apendicitis perforada recibe tratamiento inicial. ¿Cuál es el manejo quirúrgico óptimo en esta situación según las guías recientes?",
    "opts": [
      "Apendicectomía inmediata",
      "Cirugía laparoscópica solo",
      "Apendicectomía diferida",
      "Apendicectomía con drenaje"
    ],
    "ans": 3,
    "why": "La apendicectomía con drenaje es el manejo recomendado para apendicitis perforada con absceso, dado que permite controlar la infección y manejar la inflamación efectivamente."
  },
  {
    "id": "cca31f1ff130452b8202a74283952a55",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente de 30 años presenta dolor en la fosa iliaca derecha de 24 horas de evolución, fiebre y leucocitosis de 14,000/mm³. El puntaje de Alvarado es 7. ¿Cuál de las siguientes afirmaciones sobre su manejo es más correcta?",
    "opts": [
      "La cirugía es el único tratamiento recomendado.",
      "La administración de antibióticos es suficiente para el tratamiento a largo plazo.",
      "La apendectomía es el tratamiento de elección para apendicitis no complicada.",
      "El manejo no quirúrgico tiene alta tasa de éxito en todos los casos."
    ],
    "ans": 2,
    "why": "La apendectomía es considerada el tratamiento de elección para apendicitis no complicada, dado que se asocia a menor riesgo de complicaciones a largo plazo. Aunque los antibióticos pueden ser útiles, los estudios demuestran que tienen tasas de recurrencia significativas. La cirugía es lo más seguro para evitar complicaciones en el futuro."
  },
  {
    "id": "c0fc1810477642138aa1aa5d181cd084",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un adolescente presenta dolor abdominal con un puntaje AIR de 6 y una CRP de 8 mg/L. Se decide realizar estudios de imagen. ¿Qué estudio sería más adecuado en este caso como primera línea para la valoración de apendicitis?",
    "opts": [
      "Radiografía de abdomen.",
      "Ultrasonido abdominal.",
      "Tomografía computarizada.",
      "Laparoscopia diagnóstica."
    ],
    "ans": 1,
    "why": "El ultrasonido es considerado uno de los métodos de imagen más seguros para la evaluación inicial de la apendicitis en adolescentes, con bajo riesgo de radiación y buena sensibilidad. La tomografía computarizada también es efectiva, pero se prefiere el ultrasonido para evitar dosis de radiación innecesarias en jóvenes."
  },
  {
    "id": "59b024e161af4fcd8e101af2c96b512a",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "En un paciente con apendicitis aguda no complicada, ¿qué factor cambia la decisión de realizar cirugía de inmediato versus un enfoque conservador con antibióticos?",
    "opts": [
      "Edad del paciente.",
      "Resultado de la ecografía.",
      "Presencia de apendicolito en la imagen.",
      "Presencia de comorbilidades."
    ],
    "ans": 2,
    "why": "La guía WSES Jerusalem 2020 propone discutir el tratamiento con antibióticos solo en pacientes seleccionados con apendicitis no complicada y sin apendicolito (recomendación 2.1.1, 1A). El apendicolito se asocia a mayor falla del manejo no operatorio, por lo que en ese caso se prefiere la cirugía. La leucocitosis no es el criterio que separa ambas estrategias."
  },
  {
    "id": "66e738a07afb44b8ae79d98ecf4b56c9",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un adulto que sufre de apendicitis presenta un cuadro de perforación. ¿Cuál es el tratamiento quirúrgico más recomendado en este contexto?",
    "opts": [
      "Apendectomía abierta sin drenaje.",
      "Apendectomía laparoscópica y drenaje del absceso.",
      "Apendectomía laparosófica sin drenaje.",
      "Manejo médico con antibióticos exclusivamente."
    ],
    "ans": 1,
    "why": "En casos de apendicitis perforada, la apendectomía laparoscópica con drenaje es el tratamiento recomendado para manejar la infección y prevenir complicaciones. La laparotomía abierta puede ser necesaria en casos más severos, pero la drenaje y apendectomía laparoscópica tiene mejores resultados."
  },
  {
    "id": "81d2a4a455d445bfa0487bbada65c82e",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "¿Cuál es el objetivo principal de implementar un score como el AIR o AAS en la evaluación clínica de apendicitis aguda?",
    "opts": [
      "Aumentar el uso de antibióticos.",
      "Disminuir la tasa de apendectomías negativas.",
      "Incrementar la cantidad de cirugías urgentes.",
      "Reducir el uso de estudios de imagen."
    ],
    "ans": 1,
    "why": "El uso de scores como el AIR o AAS está diseñado para ayudar a distinguir con mayor precisión aquellos casos que realmente necesitan apendicectomía, lo cual disminuye la tasa de apendectomías negativas y mejora la eficiencia del diagnóstico y manejo clínico."
  },
  {
    "id": "d53acd7785314b6c97c40e5be2cfb6b8",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente de 40 años llega con dolor abdominal y se le realiza un score de Alvarado. El resultado indica una alta probabilidad de apendicitis. ¿Cuál es la recomendación principal en este caso?",
    "opts": [
      "Solicitar una tomografía computarizada como confirmación.",
      "Iniciar manejo solo con antibióticos y observar.",
      "Realizar apendectomía urgente.",
      "Realizar una laparoscopia diagnóstica antes de decidir el tratamiento."
    ],
    "ans": 2,
    "why": "Cuando el score de Alvarado indica alta probabilidad de apendicitis, la recomendación es proceder a la apendectomía urgente para evitar complicaciones como la perforación. Las imágenes pueden ser útiles, pero no deben retrasar una intervención necesaria."
  },
  {
    "id": "c86c3fcbaed9435f9795f3a77b4dac8d",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente pediátrico llega con dolor en la fosa iliaca derecha y puntuación de Alvarado de 5. ¿Qué es lo más adecuado a seguir en el manejo?",
    "opts": [
      "Administrar antibióticos y dar de alta.",
      "Realizar una apendectomía inmediata.",
      "Observar y repetir los estudios de imagen.",
      "Realizar una laparoscopía diagnóstica."
    ],
    "ans": 2,
    "why": "Con un puntaje de Alvarado de 5, lo más prudente es realizar una observación y repetir los estudios de imagen para asegurar que no hay una evolución desfavorable antes de tomar decisiones quirúrgicas."
  },
  {
    "id": "f7cb57cc24db42b083b37b4de47ffecc",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "En un estudio realizado sobre el manejo de apendicitis, se observó que los pacientes con apendicitis no complicada pueden manejarse sin cirugía bajo ciertas condiciones. ¿Cuál es uno de estos criterios que hace esta opción viable?",
    "opts": [
      "Presencia de absceso asociado.",
      "Leucocitosis mayor a 20,000/mm³.",
      "Ausencia de perforación o phlegmon.",
      "Dolor aislado en fosa iliaca derecha."
    ],
    "ans": 2,
    "why": "La ausencia de perforación o phlegmon es un criterio crítico para considerar el manejo no quirúrgico en apendicitis no complicada. Sin estas condiciones, el riesgo de complicaciones aumenta significativamente y se prefiere la cirugía."
  },
  {
    "id": "75933a96cb384c8c813d23b3bfc29308",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Al realizar estudios de imagen, se sugiere que se reduce el riesgo de apendectomía negativa al usar ciertos score de evaluación clínica. ¿Cuál es uno de los score propuestos para tal fin?",
    "opts": [
      "Score de Alvarado.",
      "Puntaje de recuperación.",
      "AIR Score (Appendicitis Inflammatory Response).",
      "Washington appendicitis score."
    ],
    "ans": 0,
    "why": "El score de Alvarado es una de las herramientas más utilizadas para evaluar la probabilidad de apendicitis, y se ha observado que aumenta la precisión del diagnóstico y reduce la tasa de apendectomías negativas en la práctica clínica."
  },
  {
    "id": "e9fae9096b744cf38e5b47e50c07e8ec",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "En una revisión de literatura sobre el tratamiento quirúrgico de la apendicitis, se discute la efectividad de la apendectomía laparoscópica frente a la abierta. ¿Cuál es la principal ventaja de la laparoscopía mencionada en este contexto?",
    "opts": [
      "Menor duración de la cirugía.",
      "Mayor tasa de complicaciones postoperatorias.",
      "Menor tiempo de recuperación y dolor postoperatorio.",
      "Mayor costo para el paciente"
    ],
    "ans": 2,
    "why": "La apendectomía laparoscópica está asociada con un menor tiempo de recuperación y menos dolor postoperatorio en comparación con la apendectomía abierta, lo que mejora la experiencia del paciente y reduce el tiempo de hospitalización."
  },
  {
    "id": "939839668f714688908131c8188c0448",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente de 30 años presenta un traumatismo abdominal cerrado tras un accidente automovilístico. En la evaluación inicial, se encuentra hemodinámicamente estable y sin signos de hemorragia activa. ¿Cuál es la mejor conducta a seguir?",
    "opts": [
      "Laparotomía inmediata",
      "Observación y manejo conservador",
      "Tomografía computarizada para evaluación",
      "Control de daños quirúrgico"
    ],
    "ans": 1,
    "why": "Dado que el paciente es hemodinámicamente estable y no presenta signos de hemorragia activa, la mejor opción es la observación y manejo conservador, siempre y cuando no haya hallazgos que sugieran una lesión quirúrgica inmediata. Las laparotomías deben reservarse para pacientes con inestabilidad hemodinámica o evidencia de hemorragia interna."
  },
  {
    "id": "0505732f4091445a8799125011240cc5",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente presenta hipertensión intraabdominal medida en 18 mm Hg a las 48 horas post cirugía abdominal. ¿Qué grado de hipertensión intraabdominal se está presentando y cuál es la posible implicación clínica?",
    "opts": [
      "Grado I, requerimiento de vigilancia",
      "Grado II, riesgo de disfunción orgánica",
      "Grado III, síndrome compartimental abdominal",
      "Grado IV, indicación quirúrgica"
    ],
    "ans": 0,
    "why": "Con una presión intraabdominal de 18 mm Hg, el paciente tiene hipertensión intraabdominal de grado I. Esto requiere vigilancia, pero no implica aún riesgo inmediato de disfunción orgánica o síndrome compartimental abdominal, los cuales se presentan a partir del grado III."
  },
  {
    "id": "ae65b4a7a97b48aabfa2aab6d8a96544",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Se presenta un paciente con trauma abdominal que ha desarrollado un hemoperitoneo significativo. ¿Cuál es la intervención inicial más indicada?",
    "opts": [
      "Laparotomía exploradora",
      "Control de daños",
      "Laparoscopia diagnosticadora",
      "Transfusión de sangre"
    ],
    "ans": 0,
    "why": "La intervención inicial más indicada en un paciente con hemoperitoneo significativo es la laparotomía exploradora, que permite una evaluación y control directo de cualquier lesión intraabdominal. Las otras opciones pueden considerarse en circunstancias diferentes pero no son la primera prioridad en este contexto."
  },
  {
    "id": "882881f7915c4a9d9e1ffb80cb0f4efa",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Una evaluación de un paciente con trauma abdominal revela un hematoma del bazo grado IV. ¿Qué estrategia de manejo es la más adecuada?",
    "opts": [
      "Laparotomía inmediata",
      "Manejo no operatorio bajo protocolo",
      "Control de daños",
      "Transfusión masiva"
    ],
    "ans": 1,
    "why": "El manejo no operatorio bajo un protocolo estricto es la estrategia adecuada para un hematoma del bazo grado IV, siempre que el paciente esté hemodinámicamente estable y se encuentre en un centro con experiencia en esta modalidad de tratamiento."
  },
  {
    "id": "228e847f16754b8298539c7170c003cb",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente de 50 años con trauma abdominal de elevado mecanismo presenta un aumento de presión intraabdominal inferior a 12 mm Hg. ¿Cuál es la clasificación de esta hipertensión intraabdominal?",
    "opts": [
      "Grado I, sin tratamiento necesario",
      "Grado II, monitorización recomendada",
      "Grado III, posible cirugía inmediata",
      "Grado IV, intervención quirúrgica necesaria"
    ],
    "ans": 0,
    "why": "Un aumento de presión intraabdominal inferior a 12 mm Hg se clasifica como grado I, que no necesita tratamiento inmediato y se puede manejar con monitoreo. No hay riesgo significativo de disfunción orgánica en este grado."
  },
  {
    "id": "4da7af0f8aa74e03b704d18b8f345e6a",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente con trauma abdominal penetrante presenta signos de peritonitis. ¿Qué prueba diagnóstico es la más útil para evaluar su condición?",
    "opts": [
      "Radiografía simple de abdomen",
      "Tomografía computarizada",
      "Laparoscopia diagnóstica",
      "Eco abdominal"
    ],
    "ans": 1,
    "why": "La tomografía computarizada es la prueba diagnóstica más útil para evaluar la condición de un paciente con trauma abdominal penetrante y signos de peritonitis, al ofrecer una valoración detallada de órganos y posibles lesiones internas."
  },
  {
    "id": "3872824a27aa4b4bbb9548148eff32b8",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un joven presenta un traumatismo abdominal severo y desarrolla síndrome compartimental abdominal. Según las guías, ¿a partir de qué grado de presión intraabdominal se considera este síndrome?",
    "opts": [
      "Grado I, mayor a 10 mm Hg",
      "Grado II, mayor a 15 mm Hg",
      "Grado III, mayor a 20 mm Hg",
      "Grado IV, mayor a 25 mm Hg"
    ],
    "ans": 2,
    "why": "El síndrome compartimental abdominal se considera a partir del grado III de hipertensión intraabdominal, que se define como una presión mayor a 20 mm Hg. A este nivel, ya existen compromisos psicológicos significativos en la perfusión e función de los órganos intraabdominales."
  },
  {
    "id": "4127e7f72452485697c3c9532e8ea46f",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "En un estudio sobre traumas abdominales, se encontró que la mayoría de lesiones diafragmáticas son producto de traumas penetrantes. ¿Qué porcentaje de lesiones diafragmáticas podrían atribuirse a este tipo de trauma?",
    "opts": [
      "15%",
      "30%",
      "63%",
      "80%"
    ],
    "ans": 2,
    "why": "La gran mayoría de las lesiones diafragmáticas en el contexto de trauma son causadas por trauma penetrante, llegando a un 63% de casos, lo que subraya la importancia de una evaluación completa y temprana."
  },
  {
    "id": "4a34ded5ae644cddb6efff4cd45b26f8",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente tiene un impacto severo en la zona abdominal y presenta un elevado riesgo de lesión hepática. ¿Qué enfoque debe seguir el equipo quirúrgico?",
    "opts": [
      "Manejo exclusivamente quirúrgico",
      "Intervención multidisciplinaria",
      "Esperar y observar sin intervención",
      "Manejo farmacológico solamente"
    ],
    "ans": 1,
    "why": "El manejo de las lesiones hepáticas en trauma debe ser multidisciplinario, involucrando cirugía, radiología intervencionista y médicos de emergencia para asegurar un tratamiento adecuado a las severidades de la lesión y la condición del paciente."
  },
  {
    "id": "96e9364dabd64eb68652f5e994327d15",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente con traumatic abdominal severo presenta inestabilidad hemodinámica. Según las recomendaciones, ¿cuál es el primero de los pasos a seguir?",
    "opts": [
      "Observación estricto",
      "Estabilización hemodinámica",
      "Intervención quirúrgica inmediata",
      "Uso de fluidos intravenosos únicamente"
    ],
    "ans": 2,
    "why": "Ante un paciente con inestabilidad hemodinámica en trauma abdominal severo, se debe proceder a una intervención quirúrgica inmediata para controlar las lesiones que puedan estar causando la hemorragia interna y estabilizar al paciente."
  },
  {
    "id": "db16b9984f404d30a754eafc65f08a86",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Paciente varón de 45 años con antecedentes de consumo excesivo de alcohol, se presenta con dolor abdominal severo y aumento de amilasas por encima de tres veces el límite normal. ¿Cuál es la causa más probable de su pancreatitis aguda?",
    "opts": [
      "Cálculos biliares",
      "Consumo de alcohol",
      "Traumatismo abdominal",
      "Hipercalcemia"
    ],
    "ans": 1,
    "why": "La causa más probable de pancreatitis aguda en este paciente es el consumo de alcohol, que está asociado en un alto porcentaje de casos. Aunque los cálculos biliares también son una causa frecuente, el historial de consumo excesivo de alcohol lo hace más susceptible a este tipo de pancreatitis."
  },
  {
    "id": "89bc464b8155474ca92c33a9317e83a5",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Una mujer de 38 años se presenta con un episodio agudo de pancreatitis. Se encuentra que tiene colelitiasis. De acuerdo con las recomendaciones, ¿cuál sería el manejo inicial más adecuado?",
    "opts": [
      "Cirugía inmediata",
      "Colangiopancreatografía retrógrada endoscópica (ERCP)",
      "Tratamiento conservador",
      "Hospitalización y seguimiento"
    ],
    "ans": 1,
    "why": "La colangiopancreatografía retrógrada endoscópica (ERCP) es el manejo adecuado para pacientes con pancreatitis biliar y complicaciones como la colangitis. Se recomienda realizarla para descomprimir el conducto biliar si hay evidencia de obstrucción asociada."
  },
  {
    "id": "14c448a639694e34b8b54f8ce7164976",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente es diagnosticado con pancreatitis aguda leve. Al ingreso, se aplica la escala de Ranson. ¿Cuál de los siguientes criterios NO forma parte de esta escala?",
    "opts": [
      "Edad mayor de 55 años",
      "Hiperglucemia",
      "Tipo de dolor abdominal",
      "Leucocitosis"
    ],
    "ans": 2,
    "why": "El tipo de dolor abdominal no es un criterio de la escala de Ranson, la cual se basa en factores como la edad, glucosa, y recuento de leucocitos entre otros. Esto la convierte en una herramienta estadística para evaluar la gravedad de la pancreatitis."
  },
  {
    "id": "f6af90c39d884e45b201f79963b2a787",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente con pancreatitis aguda presenta deterioro de la función renal y alteración en el estado de conciencia. Según la clasificación de Atlanta, ¿qué grado de pancreatitis se considera en este caso?",
    "opts": [
      "Leve",
      "Moderada",
      "Grave",
      "Complicada"
    ],
    "ans": 2,
    "why": "De acuerdo con la clasificación de Atlanta, la presencia de insuficiencia orgánica se considera pancreatitis aguda grave. Los detalles del estado del paciente sugieren un involucramiento sistémico serio."
  },
  {
    "id": "a43e1cad8af945eda9a4221ad8194a8a",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Durante la evaluación de un paciente con pancreatitis aguda, se identifica una elevación de lipasa y amilasa en sangre. ¿Cuál es la razón más importante para monitorear estos niveles durante su hospitalización?",
    "opts": [
      "Para evaluar la función hepática",
      "Para determinar la severidad del episodio",
      "Para calcular el riesgo de infección",
      "Para decidir la necesidad de cirugía"
    ],
    "ans": 1,
    "why": "Monitorear los niveles de lipasa y amilasa permite valorar la progresión y gravedad de la pancreatitis aguda, ya que niveles persistentemente altos pueden indicar complicaciones o severidad del proceso inflamatorio."
  },
  {
    "id": "f35e33b7f8864f699107629b7e03628e",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Se presenta un paciente con pancreatitis aguda severa y necrosis pancreática. ¿Cuál es el tratamiento más indicado?",
    "opts": [
      "Antibióticos de forma profiláctica",
      "Cirugía inmediata",
      "Nutrición enteral",
      "Observación"
    ],
    "ans": 2,
    "why": "La nutrición enteral es la estrategia más recomendada en pacientes con pancreatitis aguda severa, ya que favorece la recuperación y minimiza el riesgo de infecciones adicionales en comparación con la nutrición parenteral o el ayuno prolongado."
  },
  {
    "id": "2ffa1494df8643528ff562e561499811",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "En una serie de estudios sobre pancreatitis aguda, se ha determinado que el tabaquismo es un factor de riesgo. ¿Qué porcentaje se estima de pacientes con pancreatitis aguda que tienen este antecedente?",
    "opts": [
      "20%",
      "10%",
      "15%",
      "30%"
    ],
    "ans": 0,
    "why": "El tabaquismo se considera un factor de riesgo significativo para desarrollar pancreatitis aguda, observándose en aproximadamente el 20% de los casos en diferentes estudios realizados."
  },
  {
    "id": "a71af0caa52b4c9d98945fad16964156",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente con pancreatitis aguda tiene un recuento de leucocitos de 12,500. Según las características de los laboratorios analizados, ¿cuál es la interpretación más apropiada?",
    "opts": [
      "Indicador de infección",
      "Normal",
      "Leve elevación",
      "Severa leucocitosis"
    ],
    "ans": 1,
    "why": "Un recuento de leucocitos de 12,500 no es necesariamente indicativo de una respuesta inflamatoria o infecciosa, ya que puede ser considerado dentro de rangos normales en el contexto clínico adecuado."
  },
  {
    "id": "9a0c20cfab1c4c1a9c069bd6570fe21c",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un hombre de 50 años que ingirió alcohol en exceso presenta pancreatitis aguda. ¿Qué complicación local es más probable que desarrolle?",
    "opts": [
      "Seudoquiste",
      "Necrosis pancreática",
      "Colección de líquido pancreático",
      "Absceso pancreático"
    ],
    "ans": 0,
    "why": "Los seudoquistes son una complicación frecuente de la pancreatitis aguda, sobre todo en pacientes con antecedentes de alcoholismo, debido a la necrosis y acumulación de líquidos inflamatórios."
  },
  {
    "id": "d83f7ab3ba3a4899985326ed876b0a5e",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "stem": "Un paciente se presenta con síntomas de perforación de úlcera duodenal. ¿Cuál es la técnica quirúrgica adecuada a realizar en este caso específico?",
    "opts": [
      "Parche de Graham original",
      "Cierre directo de la perforación",
      "Parche de Graham modificado",
      "Duodenostomía"
    ],
    "ans": 0,
    "why": "El parche de Graham original implica colocar puntos alrededor de la úlcera perforada y fijar un epiplón sobre el defecto sin intentar suturar directamente los bordes, evitando así complicaciones adicionales. Las otras opciones no son las más recomendadas para el manejo de la perforación en este contexto."
  },
  {
    "id": "54e6dafbe1bf48c7a9184c383d1ad666",
    "topicId": "delgado",
    "tag": "Intestino Delgado",
    "stem": "Un niño de 1.5 años es llevado a urgencias por hemorragia digestiva baja masiva. Se sospecha un divertículo de Meckel. ¿Cuál es la prueba de imagen de elección para diagnosticar esta condición?",
    "opts": [
      "Ultrasonido abdominal",
      "Endoscopia superior",
      "Gammagrafía con Tecnecio-99m",
      "Tomografía computarizada"
    ],
    "ans": 2,
    "why": "La gammagrafía con Tecnecio-99m es la prueba de imagen de elección para diagnosticar un divertículo de Meckel, ya que este radioisótopo tiene afinidad por las células que secretan moco en la mucosa gástrica ectópica, permitiendo confirmar la presencia del divertículo en casos sintomáticos."
  },
  {
    "id": "9f04b1d4d9a64a2aafaf1d75aae5a397",
    "topicId": "neoplasias",
    "tag": "Neoplasias/Onco",
    "stem": "Una paciente de 45 años se presenta con obesidad, dislipidemia y un historial familiar de cáncer de mama. Durante la evaluación, se considera realizar pruebas genéticas. ¿Cuál de las siguientes mutaciones podría estar implicada en su riesgo de cáncer relacionado?",
    "opts": [
      "Mutación en el gen APC.",
      "Mutación en el gen BRCA1.",
      "Mutación en el gen MSH2.",
      "Mutación en el gen TP53."
    ],
    "ans": 1,
    "why": "Las mutaciones en el gen BRCA1 están asociadas con un mayor riesgo de cáncer de mama y ovario, lo cual es relevante en individuos con antecedentes familiares de estos cánceres. Las mutaciones en otros genes, como APC, MSH2 o TP53, están relacionadas con diferentes síndromes o tipos de cáncer, pero no específicamente a cáncer de mama en el contexto descrito."
  },
  {
    "id": "df032e8247d84eba95909d32e7b3cf8e",
    "topicId": "delgado",
    "tag": "Intestino Delgado",
    "stem": "Paciente masculino de 75 años presenta obstrucción intestinal y neumobilia en estudios de imagen, sugiriendo íleo biliar. Se realiza enterotomía distal a la obstrucción y se analiza el cálculo impactado. ¿Cuál es la conducta quirúrgica recomendada en este caso?",
    "opts": [
      "Cierre de la fístula colecistoduodenal durante la misma intervención",
      "Colecistectomía y enterolitotomía simultáneas",
      "Enterolitotomía aislada sin intento de cierre de fístula",
      "Resección intestinal e implante de un stent"
    ],
    "ans": 2,
    "why": "La mejor conducta quirúrgica recomendada es realizar una enterolitotomía aislada, dejando el cierre de la fístula para un segundo tiempo electivo. Intentar cerrar la fístula en un paciente anciano tiene un alto riesgo de complicaciones, incluyendo un aumento en la mortalidad. Esto se debe a que muchas fístulas cierran espontáneamente tras resolver la obstrucción distal."
  },
  {
    "id": "eaa0a2c54914462198ba32864548bf46",
    "topicId": "delgado",
    "tag": "Intestino Delgado",
    "stem": "Un paciente de 45 años con historia de enfermedad de Crohn presenta estenosis en el intestino delgado. ¿Cuál es la técnica quirúrgica más apropiada para tratar esta estenosis sin resecar intestino?",
    "opts": [
      "Estenoplastia de Finney",
      "Estenoplastia de Heineke-Mikulicz",
      "Resección segmentaria y anastomosis primaria",
      "Anastomosis latero-lateral amplia"
    ],
    "ans": 1,
    "why": "La técnica quirúrgica más apropiada para tratar una estenosis en el intestino delgado sin resecar intestino es la estenoplastia de Heineke-Mikulicz. Esta técnica es adecuada para estenosis fibróticas cortas, permitiendo ampliar la luz intestinal sin la necesidad de realizar una resección, preservando así más intestino funcional."
  },
  {
    "id": "93cbbd1a39514e6081a3d5114b5445c3",
    "topicId": "recto",
    "tag": "Recto y Ano",
    "stem": "Un paciente de 58 años acude a consulta por hemorragias rectales intermitentes y cambio en los hábitos intestinales. Además, menciona que ha notado una masa palpable en el recto al realizar la defecación. ¿Cuál es la longitud aproximada del recto en un adulto sano?",
    "opts": [
      "10 cm",
      "12-15 cm",
      "20 cm",
      "4 cm"
    ],
    "ans": 1,
    "why": "El recto tiene una longitud aproximada de 12 a 15 cm en el adulto, lo cual incluye la distinción entre la anatomía y las características del conducto anal. Las otras opciones son incorrectas porque están por debajo o por encima de la longitud real del recto."
  },
  {
    "id": "e4885d2590254a39a1e2d1e59627500f",
    "topicId": "quemaduras",
    "tag": "Piel/Quemaduras",
    "stem": "Durante el manejo de una quemadura química por ácido, ¿cuál es la acción inmediata más importante que debe realizarse en el sitio de la quemadura?",
    "opts": [
      "Aplicar un antídoto específico.",
      "Iniciar irrigación con agua corriente immediately por 30 a 60 minutos.",
      "Neutralizar químicamente la quemadura.",
      "Descontaminar la ropa solo."
    ],
    "ans": 1,
    "why": "La irrigación con agua corriente es la medida más crucial para diluir y remover el agente químico de la piel, y debe hacerse de forma continua para neutralizar la acción del ácido. La neutralización química está proscrita debido a la reacción explosiva que puede ocurrir."
  },
  {
    "id": "582fa0d48bad4debbd9125f57f191e71",
    "topicId": "piel",
    "tag": "Piel/Quemaduras",
    "stem": "Un paciente con una herida quirúrgica de piel presenta riesgo de desarrollar tétanos. Según las guías de profilaxis antitetánica, ¿cuál es la opción correcta para el manejo de este paciente?",
    "opts": [
      "Se debe administrar inmunoglobulina antitetánica y refuerzo si han pasado más de 10 años desde la última dosis.",
      "El refuerzo con toxoide tetánico es necesario si la herida es limpia y ha transcurrido más de 10 años desde la última dosis.",
      "La inmunoglobulina antitetánica no será necesaria si la herida se considera propensa al tétanos.",
      "Para pacientes con menos de tres dosis previas, se recomienda un refuerzo únicamente en heridas limpias y menores."
    ],
    "ans": 2,
    "why": "Para heridas propensas al tétanos en pacientes con antecedentes de vacunación completa (≥3 dosis previas), no se requiere inmunoglobulina antitetánica, pero sí se debe administrar un refuerzo si han pasado más de 5 años. Las otras afirmaciones son incorrectas en este contexto."
  },
  {
    "id": "e0c6675ac7594369a06cf2d5c5ae312b",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "stem": "Un paciente de 55 años presenta un cuadro de hemorragia digestiva alta. Tras una endoscopia, se le diagnostica una úlcera gástrica tipo II asociada a úlcera duodenal. ¿Cuál es la conducta quirúrgica recomendada según la clasificación de Johnson?",
    "opts": [
      "Antrectomía gástrica con vagotomía troncular bilateral",
      "Antrectomía distal sin vagotomía",
      "Gastrectomía total con linfadenectomía D2",
      "Antrectomía gástrica sin vagotomía"
    ],
    "ans": 0,
    "why": "En las úlceras tipo II, hay una hipersecreción ácida y se recomienda la antrectomía gástrica asociada a vagotomía troncular bilateral para controlar esta secreción. Las otras opciones no abordan adecuadamente la hiperacidez asociada."
  },
  {
    "id": "0a62022905954b50b09a6d3834ff7998",
    "topicId": "piel",
    "tag": "Piel/Quemaduras",
    "stem": "Un paciente es diagnosticado con melanoma T3 (Breslow > 2.0 mm). ¿Cuál es el margen quirúrgico recomendado para una resección definitiva según las guías actuales?",
    "opts": [
      "0.5 cm de piel sana.",
      "1 cm de piel sana.",
      "1 a 2 cm de piel sana.",
      "2 cm de piel sana."
    ],
    "ans": 3,
    "why": "Para un melanoma T3, el margen quirúrgico recomendado es de 2 cm de piel sana. Esta es una práctica común según las guías de manejo del melanoma y se basa en la necesidad de asegurar un adecuado control local de la enfermedad."
  },
  {
    "id": "74bc4fa57e664cc9872e6d8303f21d59",
    "topicId": "esofago",
    "tag": "Esófago",
    "stem": "Un paciente de 64 años acude con disfagia progresiva, regurgitación de alimentos no digeridos y halitosis. Se le diagnostica un divertículo de Zenker. ¿Cuál es el abordaje quirúrgico más adecuado para este caso?",
    "opts": [
      "Diverticuloplicatura",
      "Diverticulopexia",
      "Diverticulectomía Excisional",
      "Miotomía cricofaríngea aislada"
    ],
    "ans": 2,
    "why": "La diverticulectomía excisional es el tratamiento indicado en divertículos grandes (>4 cm) para evitar que retengan alimentos y prevenir complicaciones. Las otras opciones no son suficientes en este caso debido al tamaño del divertículo y el riesgo de recidiva."
  },
  {
    "id": "839faa52f6b847ebbbcc226c371293aa",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Una mujer de 73 años presenta un vólvulo de ciego que fue tratado con descompresión endoscópica con escasa mejoría. ¿Cuál es el tratamiento quirúrgico de elección en este caso?",
    "opts": [
      "Sigmoidectomía",
      "Hemicolectomía derecha",
      "Laparotomía con anastomosis",
      "Colectomía subtotal"
    ],
    "ans": 1,
    "why": "En el caso de un vólvulo de ciego, la descompresión endoscópica está contraindicada debido a la baja tasa de éxito y el alto riesgo de perforación. El tratamiento de elección es una hemicolectomía derecha con anastomosis primaria, que aborda la causa subyacente del vólvulo y restaura la continuidad del tracto digestivo."
  },
  {
    "id": "5ae235576daf4f9289ccb8c4f5ebe8c7",
    "topicId": "pared",
    "tag": "Pared",
    "stem": "Un paciente masculino presenta una hernia inguinal con un saco que contiene un divertículo de Meckel. ¿Cómo se clasifica esta hernia?",
    "opts": [
      "Hernia de Amyand",
      "Hernia de Garengeot",
      "Hernia de Littré",
      "Hernia de Richter"
    ],
    "ans": 2,
    "why": "La hernia que contiene en su saco un divertículo de Meckel se clasifica como Hernia de Littré. Esta patología es caracterizada por la inclusión del divertículo en el saco herniario, lo cual es un hallazgo importante durante la cirugía."
  },
  {
    "id": "5e8167ed97c14848ab9cdbb9fc11240a",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente masculino de 42 años, previamente sano, presenta síntomas de diverticulitis. Según la clasificación de Hinchey modificada, se le diagnostica con una diverticulitis leve, sin abscesos ni complicaciones. ¿Cuál es el manejo inicial más adecuado según las guías actuales?",
    "opts": [
      "Antibióticos intravenosos",
      "Antihipertensivos",
      "Manejo conservador sintomático",
      "Cirugía urgente"
    ],
    "ans": 2,
    "why": "En la diverticulitis leve (Estadio 0 de Hinchey), el manejo conservador sintomático es el tratamiento inicial recomendado. Esto incluye dieta líquida, reposo intestinal y observación, evitando el uso rutinario de antibióticos a menos que haya factores de riesgo que justifiquen su utilización."
  },
  {
    "id": "2fbb3b0a750a48b0a48652f04a0e4897",
    "topicId": "quemaduras",
    "tag": "Piel/Quemaduras",
    "stem": "Un paciente adulto es admitido a la sala de urgencias después de una quemadura profunda de tercer grado que afecta el 60% de su superficie corporal. ¿Cuál es la fórmula correcta de reanimación hídrica a aplicar en las primeras 24 horas?",
    "opts": [
      "4 mL × Peso corporal (kg) × % SCQ",
      "3 mL × Peso corporal (kg) × % SCQ",
      "2 mL × Peso corporal (kg) × % SCQ",
      "5 mL × Peso corporal (kg) × % SCQ"
    ],
    "ans": 0,
    "why": "La formulación de Parkland estipula que se deben administrar 4 mL/kg/% SCQ en todas las quemaduras de segundo y tercer grado en adultos. Esto es crucial para la reanimación hídrica efectiva en pacientes con grandes quemaduras. Las fórmulas de menor volumen, como 2 o 3 mL/kg, son específicas para condiciones distintas o poblaciones pediátricas."
  },
  {
    "id": "a86db5c67a4e4e7c969c2cfc1cae6b1f",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "stem": "Durante una gastrectomía distal, se presenta un muñón duodenal difícil debido a una úlcera activa. ¿Cuál es la opción quirúrgica más adecuada en este contexto según las guías?",
    "opts": [
      "Técnica de Nissen",
      "Inclusión del muñón en la anastomosis",
      "Exclusión pilórica con drenaje",
      "Duodenostomía en tubo descompresivo"
    ],
    "ans": 2,
    "why": "La opción más adecuada es la exclusión pilórica con drenaje, permitiendo la descompresión del contenido y sello de la fístula durante el posoperatorio, ya que un muñón dificultoso requiere un manejo cuidadoso para evitar complicaciones. Las otras opciones no contemplan la descompresión del duodeno en este escenario complicado."
  },
  {
    "id": "7abb4268cccd4288a489c95d37f03b17",
    "topicId": "pared",
    "tag": "Pared",
    "stem": "Durante una cirugía laparoscópica, se decide reparar un defecto en el orificio miopectíneo de Fruchaud. ¿Cuál debe ser el tamaño mínimo de la malla que se aplique para una correcta cobertura?",
    "opts": [
      "5 x 10 cm",
      "10 x 15 cm",
      "15 x 20 cm",
      "20 x 25 cm"
    ],
    "ans": 1,
    "why": "El orificio miopectíneo de Fruchaud debe ser cubierto completamente con una malla protésica grande de al menos 10 x 15 cm para asegurar la reparación adecuada y prevenir hernias recurrentes."
  },
  {
    "id": "5bf164161de74ddeb5c9f7cb61d203fb",
    "topicId": "piel",
    "tag": "Piel/Quemaduras",
    "stem": "Un paciente presenta una cicatriz quirúrgica que evoluciona a una cicatrización hipertrófica, la cual se caracteriza por los siguientes hallazgos. ¿Cuál es la opción correcta que describe esta condición?",
    "opts": [
      "La cicatriz rebasa los márgenes originales de la herida.",
      "La cicatriz suele experimenter regresión espontánea parcial después de 6 a 18 meses.",
      "La cicatriz presenta un comportamiento biológico extremadamente agresivo.",
      "La cicatriz se presenta casi exclusivamente en piel de individuos con mayor pigmentación."
    ],
    "ans": 1,
    "why": "La cicatriz hipertrófica se confina a los márgenes originales de la herida y, a diferencia del queloide, suele experimentar regresión espontánea parcial tras un tiempo determinado. Las otras opciones describen características de cicatrices queloides o no son correctas en el contexto de la hipertrófica."
  },
  {
    "id": "075568d884f24df990fb7d6b91992f2c",
    "topicId": "quemaduras",
    "tag": "Piel/Quemaduras",
    "stem": "Un hombre es rescatado de un incendio y presenta quemaduras de tercer grado y signos claros de inhalación de humo. Según las guías actuales, ¿cuál es el criterio que justifica la intubación endotraqueal en este paciente?",
    "opts": [
      "Eritema facial aislado.",
      "Vibrisas nasales chamuscadas.",
      "Evidencia de edema glótico en laringoscopia.",
      "Hollín en esputo."
    ],
    "ans": 2,
    "why": "La intubación endotraqueal debe realizarse si hay evidencia directa de edema significativo o ulceración en la vía aérea, lo que podría causar obstrucción inminente. Los otros signos como el eritema facial, hollín o vibrisas chamuscadas no son criterios suficientes por sí solos para indicar intubación, aunque requieren monitoreo."
  },
  {
    "id": "be69df5d7c4b4dafacb0f9c4878d5837",
    "topicId": "colon",
    "tag": "Colon",
    "stem": "Un paciente de 65 años acude a la consulta con dolor abdominal difuso y fiebre. El examen físico revela dolor en el cuadrante inferior derecho, defensa muscular presente y leucocitosis de 18,000/mm³. Se sospecha apendicitis aguda. Según la Escala AIR, ¿cuál es el puntaje total que debe considerarse para identificar la severidad de la apendicitis en este paciente?",
    "opts": [
      "5 puntos",
      "6 puntos",
      "9 puntos",
      "11 puntos"
    ],
    "ans": 2,
    "why": "El puntaje del paciente incluiría 1 punto por dolor en fosa ilíaca derecha, 3 puntos por defensa muscular severa, y 2 puntos por leucocitosis (18,000/mm³), sumando 6 puntos. Sin embargo, si se asignaran 1 punto por fiebre (T > 38.5 °C), el total sería de 7 puntos, lo que indicaría un riesgo intermedio. En la tabla AIR, los puntos 9 a 12 indican un alto riesgo de apendicitis. Por lo tanto, la opción correcta es 9 puntos, que corresponde al puntaje para un riesgo alto en suma."
  },
  {
    "id": "fc6fe958d14c4b3082bec315e70e1caa",
    "topicId": "esofago",
    "tag": "Esófago",
    "stem": "En la manometría esofágica, se encuentra un DCI mayor a 8000 mmHg·s·cm y un DL menor a 4.5 segundos. ¿Qué tipo de acalasia se sugiere con estos resultados?",
    "opts": [
      "Acalasia Tipo I",
      "Acalasia Tipo II",
      "Acalasia Tipo III",
      "No se puede clasificar"
    ],
    "ans": 2,
    "why": "Los hallazgos son típicos de la Acalasia Tipo III, que presenta contracciones prematuras o espásticas y es un trastorno que responde mal a la dilatación neumática y requiere POEM. Las otras acalasia no cumplen estos criterios específicos."
  },
  {
    "id": "4d09c86cc8114b3d83f862a7f53daf6d",
    "topicId": "neoplasias",
    "tag": "Neoplasias/Onco",
    "stem": "Un paciente con cáncer gástrico avanzado irresecable presenta síntomas de obstrucción de la salida gástrica, es mal candidato quirúrgico y tiene una expectativa de vida corta. ¿Cuál es la intervención paliativa más adecuada en este contexto?",
    "opts": [
      "Colocación de un stent gástrico autoexpandible.",
      "Resección del tumor con márgenes R0.",
      "Radioterapia adyuvante a la cirugía.",
      "Colocación de una gastroyeyunostomía quirúrgica."
    ],
    "ans": 0,
    "why": "En obstrucción maligna de la salida gástrica, la guía ASGE 2021 sugiere el stent autoexpandible en pacientes mal candidatos quirúrgicos con expectativa de vida corta (<6 meses), porque alivia rápido y permite reiniciar la vía oral y el egreso temprano. La gastroyeyunostomía quirúrgica da un alivio más duradero y se prefiere si la expectativa de vida es mayor de 6 meses con buen estado funcional. La resección R0 no es viable en un tumor avanzado irresecable."
  },
  {
    "id": "866bd8c5b74a46a7b5d5fb3f6360ec96",
    "topicId": "recto",
    "tag": "Recto y Ano",
    "stem": "Durante una cirugía de resección, se menciona la importancia de preservar los nervios simpáticos pélvicos. ¿Cuál es la función principal de estos nervios?",
    "opts": [
      "Inervación del esfínter anal externo",
      "Responsables de la erección del pene",
      "Eyacular anterográdamente en el varón",
      "Facilitar la contracción del detrusor"
    ],
    "ans": 2,
    "why": "Los nervios simpáticos pélvicos son responsables de la eyaculación anterógrada en el varón, así como de la continencia basal interna y el tono vascular pélvico. Las otras opciones se relacionan más con los nervios parasimpáticos o funciones anales."
  },
  {
    "id": "df8c0e310d41406598f3557f83ec6c6f",
    "topicId": "neoplasias",
    "tag": "Neoplasias/Onco",
    "stem": "Un paciente de 55 años es diagnosticado con adenocarcinoma gástrico. Durante la consulta, el cirujano menciona que el conocimiento sobre la carcinogénesis y la biología del cáncer es crucial para determinar el tratamiento. ¿Cuál de las siguientes afirmaciones sobre la biología del cáncer es correcta?",
    "opts": [
      "La transformación maligna requiere mutaciones en todos los alelos de protooncogenes.",
      "Los genes supresores de tumores requieren mutaciones en uno de sus alelos para perder función.",
      "La inactivación bialélica de genes supresores como TP53 puede contribuir a la carcinogénesis.",
      "Los oncogenes siempre están asociados a la pérdida de función en ambos alelos."
    ],
    "ans": 2,
    "why": "La inactivación bialélica de genes supresores, como TP53, es fundamental para la pérdida de su función y se asocia con el desarrollo del cáncer, tal como se describe en la hipótesis de los dos golpes de Knudson. En contraste, los oncogenes requieren solo una mutación en un alelo para obtener una ganancia de función lo que no está relacionado con la pérdida de función en ambos alelos."
  },
  {
    "id": "1b9140cc6aa14e4ab6e34b4b4b41bf41",
    "topicId": "recto",
    "tag": "Recto y Ano",
    "stem": "Un paciente se presenta con síntomas de urgencia y pérdida de continencia fecal tras cirugía rectal. ¿Qué puntaje en la Escala LARS indicaría un impacto severo en la calidad de vida del paciente?",
    "opts": [
      "0-20",
      "21-29",
      "30-42",
      "10-15"
    ],
    "ans": 2,
    "why": "Según la escala de LARS, un puntaje de 30 a 42 puntos indica un LARS mayor, significando un impacto severo en la calidad de vida del paciente. Los otros rangos muestran menos severidad en sus síntomas."
  },
  {
    "id": "61fb72691560434c8fcba7b552b84e8d",
    "topicId": "pared",
    "tag": "Pared",
    "stem": "Paciente masculino de 56 años presenta hernia inguinal derecha. En examen físico se observa que la protrusión se encuentra medial a los vasos epigástricos inferiores. ¿Cuál es el tipo de hernia?",
    "opts": [
      "Hernia inguinal indirecta",
      "Hernia inguinal directa",
      "Hernia femoral",
      "Hernia umbilical"
    ],
    "ans": 1,
    "why": "La protrusión medial a los vasos epigástricos inferiores corresponde a una hernia inguinal directa, la cual es un defecto adquirido en el triángulo de Hesselbach. Las hernias inguinales indirectas se localizan lateral a estos vasos."
  },
  {
    "id": "957f1c5c99a44cc384e5055a83d17802",
    "topicId": "esofago",
    "tag": "Esófago",
    "stem": "Un paciente es operado por acalasia mediante cardiomiotomía de Heller. ¿Cuál es la longitud mínima que se debe extender la miotomía sobre el estómago proximal para evitar complicaciones?",
    "opts": [
      "1 a 1.5 cm",
      "2 a 3 cm",
      "4 a 5 cm",
      "5 a 6 cm"
    ],
    "ans": 1,
    "why": "La extensión gástrica debe ser de al menos 2 a 3 cm para evitar la retención de alimentos y la recidiva de disfagia, dado que se dejarían fibras musculares intactas en caso de que la extensión sea menor. Las otras opciones no garantizan un adecuado manejo postoperatorio."
  },
  {
    "id": "colx-cuci-q1",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Colitis inespecíficas: CUCI y Crohn colónico",
    "vignette": "Mujer de 27 años con CUCI extensa, ingresada por brote grave. Lleva 3 días con metilprednisolona IV 60 mg/día; persiste con 9 evacuaciones sanguinolentas al día, PCR de 82 mg/L, sin dilatación colónica en la radiografía y hemodinámicamente estable.",
    "stem": "¿Cuál es la conducta más adecuada?",
    "opts": [
      "Continuar el esteroide IV hasta el día 7 antes de cambiar de estrategia",
      "Agregar 5-ASA oral a dosis altas al esquema",
      "Iniciar rescate con infliximab o ciclosporina y avisar a cirugía",
      "Programar proctocolectomía total con reservorio ileoanal en un tiempo"
    ],
    "ans": 2,
    "why": "Correcta (C): al día 3 cumple criterios de Oxford de falla del esteroide (>8 evacuaciones, o 3–8 con PCR >45 mg/L) [Travis 1996; Chen 2016]; el ACG recomienda rescate con infliximab o ciclosporina y valoración quirúrgica desde ese momento [ACG-UC, Rubin 2025], con colectomía comparable entre ambos [ECCO-UC médico, Gisbert 2026]. Falla A: esperar hasta el día 7 retrasa el rescate; el día 7 es el límite para operar si no hay mejoría tras el rescate [ECCO-UC quirúrgico, Spinelli 2022]. B: no se suma 5-ASA oral al esteroide IV en CUCI aguda grave [ECCO-UC médico, Gisbert 2026]. D: el tiempo único con reservorio no se recomienda; tras una colitis aguda grave el estándar es en tres tiempos [ECCO-UC quirúrgico, Adamina 2026]."
  },
  {
    "id": "colx-cuci-q2",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Colitis inespecíficas: CUCI y Crohn colónico",
    "vignette": "Hombre de 35 años con CUCI, 5 días de esteroide IV y rescate con infliximab sin respuesta. Hoy con fiebre de 39 °C, FC de 128, abdomen distendido y doloroso, leucocitos de 21,000 y dilatación del colon transverso de 7 cm.",
    "stem": "¿Qué operación es la indicada?",
    "opts": [
      "Colectomía subtotal con ileostomía terminal",
      "Proctocolectomía restauradora con reservorio ileoanal en un tiempo",
      "Colectomía total con anastomosis ileorrectal",
      "Hemicolectomía izquierda con anastomosis primaria"
    ],
    "ans": 0,
    "why": "Correcta (A): en colitis fulminante o megacolon tóxico se recomienda colectomía abdominal con ileostomía terminal, con o sin fístula mucosa, y no proctocolectomía total [Schwartz 16 Colon, p. 24]; el megacolon tóxico y la falla del rescate son indicaciones de cirugía [ACG-UC, Rubin 2025]. Falla B: quien está séptico e inmunosuprimido no tolera la disección pélvica ni el reservorio, que se hace después en etapas [ECCO-UC quirúrgico, Adamina 2026]. C: la anastomosis no se hace en urgencia. D: la enfermedad es pancolónica; una resección parcial deja colon enfermo."
  },
  {
    "id": "colx-cuci-q3",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Colitis inespecíficas: CUCI y Crohn colónico",
    "vignette": "Mujer de 34 años con enfermedad de Crohn colónica que afecta el colon ascendente y el sigmoides, con recto respetado, falla a terapia biológica y cirugía electiva. No hay displasia.",
    "stem": "¿Qué operación se prefiere?",
    "opts": [
      "Resección segmentaria de cada segmento enfermo",
      "Proctocolectomía restauradora con reservorio ileoanal",
      "Hemicolectomía derecha únicamente",
      "Colectomía total con anastomosis ileorrectal"
    ],
    "ans": 3,
    "why": "Correcta (D): con dos o más segmentos colónicos afectados y recto respetado se prefiere colectomía total con ileoproctostomía, porque la resección segmentaria recurre antes (4.4 años menos hasta la recurrencia quirúrgica) [ASCRS-Crohn, Lightner 2020]. Falla A: la segmentaria solo es adecuada si hay un único segmento enfermo [Schwartz 16 Colon, p. 25; ASCRS-Crohn, Lightner 2020]. B: el reservorio en Crohn es controvertido (recomendación débil) y el recto está sano [ASCRS-Crohn, Lightner 2020]. C: deja el sigmoides enfermo."
  },
  {
    "id": "colx-cuci-q4",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Colitis inespecíficas: CUCI y Crohn colónico",
    "vignette": "Hombre de 38 años con CUCI extensa de 8 años de evolución, sin colangitis esclerosante ni familiares con cáncer colorrectal. La colonoscopia de tamizaje, en remisión, muestra seudopólipos inflamatorios e inflamación leve sin displasia.",
    "stem": "¿En cuánto tiempo se programa la siguiente colonoscopia de vigilancia?",
    "opts": [
      "En 1 año",
      "En 2 a 3 años",
      "En 5 años",
      "En 10 años, como la población general"
    ],
    "ans": 1,
    "why": "Correcta (B): la primera colonoscopia se hace a los 8 años del inicio de síntomas; después, 1 año si hay alto riesgo, 2–3 años con riesgo intermedio y 5 años sin factores [ECCO-EII y neoplasias, Gordon 2023]; la colitis extensa con inflamación leve y seudopólipos inflamatorios es un riesgo intermedio [ECCO E-Guide]. Falla A: el año es para riesgo alto: estenosis o displasia, colangitis esclerosante, familiar de primer grado con cáncer a los ≤50 años o colitis extensa con inflamación grave. C: son los 5 años de quien no tiene factores. D: la colitis extensa de 8 años ya requiere vigilancia endoscópica específica."
  },
  {
    "id": "colx-cuci-q5",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Colitis inespecíficas: CUCI y Crohn colónico",
    "vignette": "Mujer de 45 años con CUCI pancolónica de 14 años. En la colonoscopia de vigilancia las biopsias muestran displasia de bajo grado en varias áreas.",
    "stem": "¿Qué se recomienda?",
    "opts": [
      "Repetir la vigilancia endoscópica cada año",
      "Aumentar la dosis de mesalazina y repetir biopsias",
      "Colectomía para evitar la progresión a adenocarcinoma",
      "Polipectomía endoscópica de las áreas displásicas y alta"
    ],
    "ans": 2,
    "why": "Correcta (C): displasia de bajo grado en múltiples áreas, o de alto grado, indica colectomía [Sabiston 16 Colon, p. 50]; ECCO también indica proctocolectomía oncológica en cáncer o displasia [ECCO-UC quirúrgico, Adamina 2026]. Falla A: la vigilancia con resección endoscópica se reserva para una lesión visible, esporádica y resecable en bloque [ECCO-UC quirúrgico, Adamina 2026], no para displasia multifocal. B: no hay sustento de que más 5-ASA revierta la displasia establecida. D: la polipectomía de las áreas aplica a la lesión única resecable, no a la displasia de bajo grado múltiple."
  },
  {
    "id": "colx-hirsch-q1",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Megacolon congénito: enfermedad de Hirschsprung",
    "vignette": "Recién nacido de término de 3 días que no ha evacuado meconio, con distensión abdominal y vómito biliar. Al tacto rectal sale gas y heces explosivas y fétidas.",
    "stem": "¿Qué estudio confirma el diagnóstico?",
    "opts": [
      "Colon por enema con zona de transición",
      "Biopsia rectal por succión con histoquímica o inmunohistoquímica",
      "Manometría anorrectal con ausencia del reflejo inhibidor",
      "Tomografía de abdomen con contraste"
    ],
    "ans": 1,
    "why": "Correcta (B): el diagnóstico se basa en histología rectal representativa y se confirma antes del descenso [ERNICA, Kyrklund 2020]. Falla A: el enema muestra la zona de transición [Montalva 2023], pero es menos sensible y específico que la biopsia, sobre todo en lactantes pequeños [ERNICA, Kyrklund 2020]. C: la ausencia del reflejo inhibidor rectoanal es característica [Schwartz 17 Recto y Ano, p. 8], pero no sustituye a la biopsia [ERNICA, Kyrklund 2020]. D: la tomografía no forma parte del diagnóstico de Hirschsprung."
  },
  {
    "id": "colx-hirsch-q2",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Megacolon congénito: enfermedad de Hirschsprung",
    "vignette": "A un lactante con sospecha de enfermedad de Hirschsprung se le toma una biopsia rectal por succión de la pared posterior, 2.5 cm sobre la línea dentada, con submucosa abundante.",
    "stem": "¿Qué hallazgos confirman el diagnóstico?",
    "opts": [
      "Células ganglionares presentes y calretinina positiva",
      "Ausencia de células ganglionares con acetilcolinesterasa disminuida",
      "Ausencia de células ganglionares en una biopsia tomada a 1 cm de la línea dentada",
      "Ausencia de células ganglionares, calretinina negativa y acetilcolinesterasa aumentada"
    ],
    "ans": 3,
    "why": "Correcta (D): en Hirschsprung la actividad de acetilcolinesterasa está aumentada (fibras nerviosas extrínsecas hipertróficas) y la calretinina es negativa; si en la H&E no se ven ganglionares se agregan calretinina o periferina [ERNICA, Kyrklund 2020]. Falla A: ver cualquier célula ganglionar en H&E excluye el diagnóstico. B: invierte el patrón de la acetilcolinesterasa. C: la biopsia debe estar al menos a 2 cm de la línea dentada porque el recto distal es fisiológicamente aganglionar o hipoganglionar [ERNICA, Kyrklund 2020]."
  },
  {
    "id": "colx-hirsch-q3",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Megacolon congénito: enfermedad de Hirschsprung",
    "vignette": "Lactante de 3 meses con Hirschsprung rectosigmoideo confirmado, estable, creciendo y bien descomprimido con irrigaciones salinas. Se planea el descenso.",
    "stem": "¿Cuál afirmación es correcta?",
    "opts": [
      "Ninguna técnica (Swenson, Soave, Duhamel o transanal) es superior; se conserva el conducto anal y se transecta ≥5–10 cm por arriba de la primera biopsia normal",
      "La técnica de Duhamel es superior porque elimina por completo el segmento aganglionar",
      "La técnica de Soave exige un manguito seromuscular largo, mayor de 5 cm",
      "El descenso debe hacerse siempre en el periodo neonatal inmediato"
    ],
    "ans": 0,
    "why": "Correcta (A): ERNICA no encuentra superioridad entre técnicas en complicaciones ni en función; la disección transanal inicia 0.5–2 cm sobre la línea dentada y se evita una zona de transición transecando 5–10 cm por arriba de la primera biopsia normal [ERNICA, Kyrklund 2020]. Falla B: el Duhamel deja un segmento aganglionar anterior (de ahí el espolón) y no es superior. C: el manguito debe ser corto (<2–3 cm); los largos se evitan. D: «siempre» es incorrecto; se opera con el paciente estable, creciendo y descomprimido, y lo habitual es 2–3 meses después del diagnóstico [ERNICA, Kyrklund 2020]."
  },
  {
    "id": "colx-hirsch-q4",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Megacolon congénito: enfermedad de Hirschsprung",
    "vignette": "Niño de 8 meses, operado de descenso a los 3 meses, con diarrea explosiva y fétida, fiebre de 39 °C, distensión abdominal, mala perfusión periférica y letargo.",
    "stem": "¿Cuál es el manejo inicial?",
    "opts": [
      "Enema con bario para buscar estenosis anastomótica",
      "Alta con metronidazol oral y lavados en casa",
      "Ingreso, líquidos IV, antibióticos IV de amplio espectro y lavados rectales salinos",
      "Laparotomía urgente con ileostomía de derivación"
    ],
    "ans": 2,
    "why": "Correcta (C): es enterocolitis asociada a Hirschsprung grave (diarrea explosiva con mala perfusión y letargo); se ingresa, se reanima con líquidos IV, se dan antibióticos IV de amplio espectro y lavados rectales salinos 2–3 veces al día [ERNICA, Kyrklund 2020]. Falla A: el enema contrastado está contraindicado en el episodio agudo por riesgo de perforación. B: no es manejo ambulatorio: este niño tiene datos de gravedad que exigen reanimación IV. D: la cirugía no es el manejo inicial de la enterocolitis; primero se reanima y se tratan con antibióticos y lavados [ERNICA, Kyrklund 2020]."
  },
  {
    "id": "colx-mt-q1",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Megacolon tóxico",
    "vignette": "Se evalúa a un paciente con CUCI grave y sospecha de megacolon tóxico aplicando los criterios clásicos de Jalan.",
    "stem": "¿Cuál de los siguientes es un criterio indispensable?",
    "opts": [
      "Frecuencia cardiaca mayor de 120 por minuto",
      "Fiebre mayor de 38.6 °C",
      "Leucocitosis mayor de 10.5 ×10³/µL",
      "Dilatación radiográfica del colon transverso mayor de 6 cm"
    ],
    "ans": 3,
    "why": "Correcta (D): Jalan exige dilatación >6 cm del transverso, más al menos 3 de fiebre >38.6 °C, FC >120, leucocitosis >10.5 ×10³/µL o anemia, y al menos uno de hipotensión, hipovolemia, alteración mental o alteraciones electrolíticas [Desai 2020]. Falla A, B y C: son parte del grupo de «al menos 3 de 4», no obligatorios por separado. Ojo: la definición del libro no exige dilatación, solo ≥3 criterios de toxicidad [Sabiston 16 Colon, p. 50]."
  },
  {
    "id": "colx-mt-q2",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Megacolon tóxico",
    "vignette": "Hombre de 31 años con CUCI en tratamiento con esteroide IV por megacolon tóxico, con hipopotasemia y dolor por distensión. El médico residente quiere indicar medicamentos de apoyo.",
    "stem": "¿Cuál debe evitarse?",
    "opts": [
      "Loperamida u opioides y anticolinérgicos",
      "Hidrocortisona IV",
      "Corrección de la hipopotasemia",
      "Antibióticos de amplio espectro"
    ],
    "ans": 0,
    "why": "Correcta (A): los antimotilidad (opioides, anticolinérgicos) y la hipopotasemia son precipitantes del megacolon tóxico [Desai 2020], y el ACG indica evitar narcóticos, AINE y anticolinérgicos en la colitis aguda grave [ACG-UC, Rubin 2025]. Falla B: el esteroide IV es parte del tratamiento de la CUCI grave que origina el cuadro [ACG-UC, Rubin 2025]. C: corregir electrolitos es parte de la reanimación. D: los antibióticos empíricos se justifican porque la mortalidad se relaciona con sepsis [Desai 2020]."
  },
  {
    "id": "colx-mt-q3",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Megacolon tóxico",
    "vignette": "Paciente de 29 años con CUCI, megacolon tóxico y signos de peritonitis difusa; la radiografía muestra neumoperitoneo. Está en choque y con falla orgánica.",
    "stem": "¿Qué operación se realiza?",
    "opts": [
      "Proctocolectomía restauradora con reservorio ileoanal",
      "Colectomía subtotal con ileostomía terminal",
      "Hemicolectomía izquierda con anastomosis primaria",
      "Colostomía transversa en asa de descompresión"
    ],
    "ans": 1,
    "why": "Correcta (B): la perforación y el choque son indicaciones absolutas; el procedimiento de elección es la colectomía subtotal con ileostomía terminal, con o sin fístula mucosa, que evita la disección pélvica y la anastomosis en el paciente séptico [Schwartz 16 Colon, p. 24; ACG-UC, Rubin 2025; Desai 2020]. Falla A: el reservorio es una operación de etapas posteriores. C: deja el colon séptico y la anastomosis en un campo contaminado. D: la derivación sin resección no controla el foco."
  },
  {
    "id": "colx-mt-q4",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Megacolon tóxico",
    "vignette": "Mujer de 70 años con diarrea tras ciprofloxacino e hipotensión, íleo, leucocitos de 38,000 y megacolon tóxico por *C. difficile* fulminante.",
    "stem": "¿Cuál es el manejo correcto?",
    "opts": [
      "Esteroide IV como en la CUCI grave",
      "Metronidazol oral como único tratamiento",
      "Suspender el antibiótico causal, dar vancomicina 500 mg c/6 h por vía oral o sonda más metronidazol IV (y vancomicina rectal si hay íleo), con colectomía si hay toxicidad, perforación o falla",
      "Fidaxomicina como monoterapia"
    ],
    "ans": 2,
    "why": "Correcta (C): en CDI fulminante (hipotensión o choque, íleo o megacolon) se da vancomicina 500 mg c/6 h VO o por sonda, y con íleo se añaden vancomicina rectal y metronidazol IV [Sabiston 16 Colon, p. 57; IDSA-SHEA, Johnson 2021]; la cirugía urgente (colectomía total o subtotal con ileostomía terminal) está indicada si hay toxicidad sistémica, megacolon o perforación [Sabiston 16 Colon, pp. 56–57]. Falla A: los esteroides están contraindicados en el megacolon infeccioso [Desai 2020]. B y D: son esquemas insuficientes para un episodio fulminante; el esquema fulminante lleva vancomicina en dosis altas más metronidazol IV [Sabiston 16 Colon, p. 57]."
  },
  {
    "id": "colx-fuga-q1",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Complicaciones de la cirugía de colon: fuga anastomótica",
    "vignette": "Hombre de 62 años en el día 4 de una hemicolectomía izquierda con anastomosis. Evoluciona bien: sin fiebre, abdomen blando, tolera dieta. La PCR es de 98 mg/L.",
    "stem": "¿Cuál afirmación es correcta?",
    "opts": [
      "Debe realizarse una TC urgente con contraste antes de cualquier alta",
      "Es razonable considerar el alta: la PCR está por debajo del corte del día 4 (124 mg/L), con alto valor predictivo negativo, vigilando síntomas",
      "La PCR de 98 mg/L confirma una fuga contenida",
      "La PCR solo tiene utilidad a partir del día 7"
    ],
    "ans": 1,
    "why": "Correcta (B): los cortes de PCR derivados del metaanálisis son 172, 124 y 144 mg/L en los días 3, 4 y 5, con valor predictivo negativo de 97 %; sirve para descartar, y siempre junto a la clínica [Singh 2014]. Falla A: sin datos clínicos de fuga, la TC no es necesaria. C: el valor predictivo positivo es de solo 21–23 %, así que una PCR baja no confirma nada y una alta tampoco. D: su utilidad está entre los días 3 y 5 [Singh 2014; McDermott 2015]. Recordar que el diagnóstico puede ser tardío (media de 12.7 días) [Hyman 2007]."
  },
  {
    "id": "colx-fuga-q2",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Complicaciones de la cirugía de colon: fuga anastomótica",
    "vignette": "Mujer de 58 años en el día 9 tras una resección anterior de recto con anastomosis colorrectal. Tiene fiebre y la TC muestra una colección pélvica de 4 cm adyacente a la anastomosis. Está estable, sin peritonitis; se maneja con antibióticos y drenaje percutáneo.",
    "stem": "¿Qué grado ISREC corresponde?",
    "opts": [
      "Grado A, porque no hubo relaparotomía",
      "Grado A, porque la paciente está estable",
      "Grado C, porque hay una colección pélvica",
      "Grado B"
    ],
    "ans": 3,
    "why": "Correcta (D): grado B es la fuga que requiere intervención terapéutica activa pero se maneja sin relaparotomía [Rahbari 2010]; aquí hubo antibióticos y drenaje percutáneo, que es lo indicado para colecciones >3 cm [Hedrick 2021]. Falla A: el grado A es el que no cambia el manejo, y aquí sí lo cambió. C: el grado C requiere relaparotomía. El grado se define por el tratamiento, no por el tamaño de la colección ni por la estabilidad [Rahbari 2010]."
  },
  {
    "id": "colx-fuga-q3",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Complicaciones de la cirugía de colon: fuga anastomótica",
    "vignette": "Un residente discute el papel del estoma derivativo en una anastomosis colorrectal baja.",
    "stem": "¿Cuál afirmación es correcta?",
    "opts": [
      "No disminuye la prevalencia de fuga, pero reduce su gravedad y el riesgo de reintervención",
      "Evita la fuga cuando la anastomosis es baja",
      "Elimina la necesidad de TC ante sospecha de fuga",
      "Solo debe crearse después de que ocurre la fuga"
    ],
    "ans": 0,
    "why": "Correcta (A): el estoma de derivación no disminuye el riesgo de fuga pero reduce su gravedad y baja el riesgo de reintervención [Sabiston 16 Colon, p. 86; McDermott 2015]; se usa para «proteger» anastomosis de riesgo (recto bajo, radiación, inmunosupresión, desnutrición, urgencia) [Schwartz 16 Colon, p. 18]. Falla B: confunde reducir la gravedad con prevenir. C: la TC sigue siendo la prueba de elección [Hyman 2007]. D: se puede crear profilácticamente en anastomosis de riesgo."
  },
  {
    "id": "colx-fuga-q4",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Complicaciones de la cirugía de colon: fuga anastomótica",
    "vignette": "Hombre de 66 años, día 6 tras sigmoidectomía con anastomosis. Fiebre de 39 °C, FC de 125, abdomen rígido con dolor difuso, leucocitos de 22,000 y salida de material turbio por el drenaje.",
    "stem": "¿Cuál es la conducta indicada?",
    "opts": [
      "Antibióticos y observación durante 48 horas",
      "Enema con medio de contraste hidrosoluble",
      "Reanimación, antibióticos de amplio espectro y relaparotomía para control del foco",
      "Drenaje percutáneo como único tratamiento"
    ],
    "ans": 2,
    "why": "Correcta (C): la fuga con peritonitis o sepsis, aunque sea mínima, requiere reintervención sin demora [Sabiston 16 Colon, p. 86]; en el inestable se hace control de daños, con resección de la anastomosis y colostomía terminal (Hartmann) o drenaje paranastomótico con derivación proximal, sin revisar la anastomosis [Hedrick 2021]. Falla A: el manejo no operatorio solo es para el paciente estable y contenido. B: el enema identifica solo 4 de 10 fugas y retrasa el tratamiento [Hyman 2007]. D: el drenaje percutáneo es para colecciones contenidas, no para peritonitis generalizada."
  },
  {
    "id": "colx-fuga-q5",
    "topicId": "colon",
    "tag": "Colon",
    "subtopic": "Complicaciones de la cirugía de colon: fuga anastomótica",
    "vignette": "Durante una colectomía izquierda laparoscópica por diverticulitis, el residente va a ligar la arteria mesentérica inferior.",
    "stem": "¿Qué medida reduce el riesgo de lesión ureteral?",
    "opts": [
      "Ligar primero la arteria mesentérica inferior y después buscar el uréter",
      "Colocar catéteres ureterales en todos los pacientes, ya que está demostrado que previenen la lesión",
      "Disecar por fuera del plano embrionario para ganar exposición",
      "Identificar el uréter izquierdo antes de ligar la arteria y mantener el plano de Toldt"
    ],
    "ans": 3,
    "why": "Correcta (D): el uréter izquierdo, adyacente a la arteria mesentérica inferior, debe identificarse y protegerse antes de ligarla, y se disminuye el riesgo manteniendo los planos embrionarios (a lo largo de la línea blanca de Toldt) [Ferrara 2019]. Falla A: es el error contrario. B: no hay indicaciones claras ni ensayos aleatorizados; el catéter ayuda a detectar la lesión pero no garantiza prevenirla [Ferrara 2019]. C: salirse del plano aumenta el riesgo. La incidencia global es de 0.28 % y la lesión se asocia a mayor morbilidad y mortalidad [Halabi 2014]."
  }
];

export const EXTRA_PASE_BEDS = [
  {
    "id": "c7",
    "bed": "Cama 519 · Fem 62a · PO4 Hemicolectomía Derecha",
    "dx": "Adenocarcinoma de colon ascendente operado con anastomosis ileocólica",
    "vitals": "FC 118 · TA 96/58 · Temp 38.6°C · FR 24 · Leuc 18,400 · PCR 240 mg/L",
    "r1": "Nota R1: 'Paciente en PO4 con taquicardia, dolor abdominal difuso, íleo prolongado y fiebre. Solicito urocultivo y radiografía de tórax por probable neumonía nosocomial o IVU; inicio dieta líquida para estimular tránsito.'",
    "question": "¿Cuál es la falla crítica del R1 y qué complicación debes descartar de inmediato?",
    "options": [
      "En el día 4 a 7 postoperatorio de una anastomosis intestinal, taquicardia + fiebre + íleo + PCR >150-200 mg/L es FUGA ANASTOMÓTICA hasta demostrar lo contrario: dejar en ayuno, reanimar, iniciar antibióticos y solicitar TC con contraste o reexplorar si hay peritonitis.",
      "El R1 tiene razón: antes del día 10 las fugas anastomóticas no ocurren; es una atelectasia.",
      "Administrar neostigmina IV para resolver el íleo paralítico.",
      "Retirar el drenaje y dar de alta con antibiótico oral."
    ],
    "ans": 0,
    "why": "La ventana clásica de dehiscencia/fuga anastomótica es entre el 4º y 7º día postoperatorio (cuando la fuerza tensil del colágeno depende aún de las suturas por máxima actividad de colagenasas). La taquicardia inexplicada y la PCR elevada (>150-170 mg/L en PO3-PO4) son los signos más tempranos."
  },
  {
    "id": "c8",
    "bed": "Cama 522 · Masc 45a · Pancreatitis Aguda Biliar (Día 3)",
    "dx": "Pancreatitis aguda edematosa intersticial sin falla orgánica",
    "vitals": "FC 94 · TA 122/76 · Temp 38.0°C · Leuc 14,500 · Lipasa 1,800 · Cr 0.9 · PaO₂/FiO₂ 380",
    "r1": "Nota R1: 'Por presentar leucocitosis de 14,500 y pico febril de 38.0 °C en el día 3 de pancreatitis, inicio Imipenem IV profiláctico para prevenir necrosis infectada y mantengo en ayuno absoluto por 7 días con NPT.'",
    "question": "¿Qué errores comete el R1 según las guías internacionales (IAP/APA y ACG)?",
    "options": [
      "Dos errores graves: 1) Los antibióticos profilácticos NO están indicados en pancreatitis aguda (ni leve ni grave estéril) pues el SIRS inicial explica la fiebre/leucocitosis en la primera semana; 2) Debe iniciarse nutrición oral o enteral temprana (24-48 h), nunca ayuno prolongado ni NPT de rutina.",
      "El Imipenem es correcto pero debe cambiarse por Vancomicina.",
      "Debe llevarse a necrosectomía abierta hoy mismo en el día 3.",
      "La nutrición parenteral total es superior a la nutrición enteral en pancreatitis."
    ],
    "ans": 0,
    "why": "En los primeros 7 días de pancreatitis aguda, la fiebre y leucocitosis suelen deberse a la respuesta inflamatoria sistémica (SIRS) estéril. Los antibióticos profilácticos no reducen mortalidad ni necrosis infectada y seleccionan infección fúngica/multirresistente. La nutrición enteral temprana preserva la barrera mucosa e impide la translocación bacteriana."
  },
  {
    "id": "c9",
    "bed": "Cama 525 · Fem 55a · Obstrucción Intestinal por Bridas (24 h con Gastrografin)",
    "dx": "Oclusión de intestino delgado por adherencias (antecedente de histerectomía)",
    "vitals": "FC 84 · TA 120/74 · Temp 36.7°C · Gasto SNG 150 mL seroso · Lactato 1.1",
    "r1": "Nota R1: 'Radiografía de abdomen a las 12 horas de haber administrado medio hidrosoluble (Gastrografin) por SNG muestra el contraste opacificando todo el colon ascendente y transverso. Solicito turno quirúrgico para laparotomía exploradora porque ya pasaron 12 horas.'",
    "question": "¿Cómo interpretas la llegada del Gastrografin al colon según las Guías WSES de Bolonia?",
    "options": [
      "La llegada del contraste hidrosoluble al colon en 8-24 h demuestra que la obstrucción es parcial y predice resolución NO operatoria en >95% de los casos: debe retirarse la SNG e iniciar tolerancia a la vía oral, NO operar.",
      "La presencia de contraste en el colon indica perforación intestinal y exige laparotomía.",
      "Debe repetirse otra dosis de bario espeso por la sonda nasogástrica.",
      "Toda obstrucción por bridas se opera a las 12 horas sin excepción."
    ],
    "ans": 0,
    "why": "Según las Guías WSES de Bolonia, el protocolo con medio de contraste hidrosoluble hiperosmolar (Gastrografin) tiene valor diagnóstico y terapéutico (reduce el edema parietal por efecto osmótico). Si el contraste llega al ciego/colon dentro de las 24 horas, la obstrucción se resuelve sin cirugía en casi todos los pacientes."
  }
];

export const EXTRA_LAPBLANCA_CASES = [
  {
    "id": "lb9",
    "title": "Diverticulitis Hinchey II con Absceso Pélvico de 5.5 cm",
    "vignette": "Masculino de 59 años con dolor en FII de 4 días y fiebre de 38.4 °C. TA 124/76, FC 92, abdomen con dolor localizado en FII sin peritonitis generalizada. TC con contraste muestra diverticulitis sigmoidea con absceso pélvico bien delimitado de 5.5 cm (Hinchey II), sin neumoperitoneo libre distante.",
    "operar": false,
    "idealAction": "NO operar de urgencia: Drenaje percutáneo guiado por TC + antibióticos IV.",
    "why": "En la diverticulitis aguda complicada con absceso grande (>4–5 cm; Hinchey Ib/II) sin peritonitis difusa, el tratamiento de primera línea según las Guías WSES y ASCRS es el drenaje percutáneo guiado por imagen más antibioticoterapia intravenosa, evitando una cirugía de urgencia y un estoma."
  },
  {
    "id": "lb10",
    "title": "Trauma Esplénico Grado III AAST en Paciente Hemodinámicamente Estable",
    "vignette": "Masculino de 24 años sufre caída en motocicleta con contusión en hipocondrio izquierdo. TA 122/78 mmHg, FC 84 lpm, Hb 13.1 g/dL, abdomen sin irritación peritoneal. TC con contraste IV: laceración esplénica parenquimatosa de 3.5 cm de profundidad (Grado III AAST), moderado hemoperitoneo periesplénico, SIN blush ni extravasación activa de contraste.",
    "operar": false,
    "idealAction": "NO operar: Manejo No Operatorio (MNO) en vigilancia estrecha con seriación de hemoglobina y examen físico.",
    "why": "En el trauma esplénico cerrado Grados I a III (e incluso IV sin extravasación o tras angioembolización), la estabilidad hemodinámica y la ausencia de peritonitis o lesiones de víscera hueca asociadas indican Manejo No Operatorio (MNO), con éxito >85-90% y preservación de la función inmunológica esplénica."
  },
  {
    "id": "lb11",
    "title": "Hernia Femoral Derecha Incarcerada Aguda Dolorosa",
    "vignette": "Femenino de 78 años acude por tumoración dolorosa irreductible de 2.5 cm por debajo del ligamento inguinal derecho y medial a la vena femoral de 8 horas de evolución, acompañada de náusea y cólico abdominal.",
    "operar": true,
    "idealAction": "SÍ OPERAR DE URGENCIA: Exploración quirúrgica inmediata (las hernias femorales tienen riesgo de estrangulación de hasta 40%).",
    "why": "El anillo femoral tiene bordes rígidos e inextensibles (ligamento inguinal anterior, ligamento pectíneo de Cooper posterior, ligamento lacunar de Gimbernat medial y vena femoral lateral). Toda hernia femoral sintomática o incarcerada exige cirugía urgente por su altísima tasa de estrangulación intestinal (frecuentemente hernia de Richter)."
  },
  {
    "id": "lb12",
    "title": "Síndrome de Ogilvie con Ciego de 10 cm sin Peritonitis",
    "vignette": "Masculino de 70 años en PO3 de artroplastia total de cadera bajo analgesia con opioides, presenta distensión abdominal importante sin dolor peritoneal (TA 130/80, FC 82, afebril, leucocitos 8,900, K 3.1 mEq/L). TC con contraste rectal descarta obstrucción mecánica y reporta dilatación colónica con ciego de 10 cm sin neumatosis ni líquido libre.",
    "operar": false,
    "idealAction": "NO operar: Suspender opioides, corregir hipokalemia/hipomagnesemia, SNG/sonda rectal y Neostigmina 2 mg IV bajo monitoreo cardíaco si no cede en 24-48 h.",
    "why": "En la pseudoobstrucción colónica aguda (Síndrome de Ogilvie) sin isquemia ni perforación (ciego < 12 cm), el tratamiento inicial es médico (corrección hidroelectrolítica, retiro de opioides/anticolinérgicos y Neostigmina IV, anticolinesterásico con éxito >85%, teniendo atropina lista por riesgo de bradicardia)."
  }
];
