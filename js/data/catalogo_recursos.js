// Catálogo Maestro Unificado de Recursos de CALOT-OS (Modelos 3D, Tiempos Qx, Variantes, Algoritmos, Tablas, Casos, Guías y Escalas)
export const CATALOGO_RECURSOS = [
  {
    "id": "3d-apendicitis",
    "type": "3d",
    "subtype": "threejs",
    "title": "Modelo 3D: Posiciones del Apéndice y Ciego",
    "subtitle": "Ciego translúcido, íleon terminal y las 6 variantes posicionales del apéndice (retrocecal 65%, pélvica 30%, subcecal, preileal, postileal) con correlación clínica.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "3D Three.js",
    "url": "atlas/01-apendicitis.html",
    "highlights": [
      "Retrocecal 65%: signo del psoas positivo y dolor lumbar",
      "Pélvica 30%: signo del obturador positivo y tenesmo/disuria",
      "Confluencia de las 3 tenias cólicas en la base apendicular"
    ]
  },
  {
    "id": "3d-parks",
    "type": "3d",
    "subtype": "threejs",
    "title": "Modelo 3D: Mapa del Esfínter y Fístulas Anales de Parks",
    "subtitle": "Corte coronal 3D del aparato esfinteriano (esfínter interno, externo, elevador del ano, línea dentada) con los 4 trayectos fistulosos de Parks y la Regla de Goodsall.",
    "topicId": "recto",
    "tag": "Recto y Ano",
    "badge": "3D Three.js",
    "url": "atlas/03-fistula-anal-parks.html",
    "highlights": [
      "Tipo I Interesfintérica (45-70%): fistulotomía primaria",
      "Tipo II Transesfintérica (25-30%): atraviesa ambos esfínteres (LIFT/setón si es alta)",
      "Tipo III Supraesfintérica y Tipo IV Extraesfintérica"
    ]
  },
  {
    "id": "3d-ulcera",
    "type": "3d",
    "subtype": "threejs",
    "title": "Modelo 3D: La Arteria Detrás de la Úlcera (Bulbo Duodenal y Forrest)",
    "subtitle": "Anatomía 3D del bulbo duodenal: pared anterior (perforación libre y neumoperitoneo) vs pared posterior (erosión de la arteria gastroduodenal y sangrado masivo Forrest Ia).",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "badge": "3D Three.js",
    "url": "atlas/05-ulcera-htda.html",
    "highlights": [
      "Pared anterior duodenal: perforación libre → Parche de Graham",
      "Pared posterior duodenal: arteria gastroduodenal → ligadura en 3 puntos (triple punto)",
      "Complejo arterial gastroduodenal, hepática común y pancreatoduodenales"
    ]
  },
  {
    "id": "3d-diverticulos",
    "type": "3d",
    "subtype": "threejs",
    "title": "Modelo 3D: Diverticulitis Perforada y Estadios de Hinchey",
    "subtitle": "Sección transversal del colon sigmoides mostrando los vasa recta penetrando entre la tenia mesentérica y las antimesentéricas, y progresión 3D de Hinchey I a IV.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "3D Three.js",
    "url": "atlas/02-diverticulos-hinchey.html",
    "highlights": [
      "Pseudodivertículos por pulsión en el punto débil de entrada de los vasa recta",
      "Hinchey I (flemón/absceso pericólico) y II (absceso pélvico, a distancia o retroperitoneal; drenaje percutáneo si es >4–5 cm)",
      "Hinchey III (peritonitis purulenta) y IV (peritonitis fecal)"
    ]
  },
  {
    "id": "caso-seriado-diverticulitis",
    "type": "casos",
    "subtype": "atlas_html",
    "title": "Caso Seriado: La contención falla (Diverticulitis)",
    "subtitle": "Caso seriado interactivo de diverticulitis en cinco decisiones: cada respuesta correcta abre el siguiente hallazgo, con teach-back al final.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Caso seriado",
    "url": "atlas/casos-seriados.html",
    "highlights": [
      "Cinco decisiones encadenadas: cada respuesta correcta desbloquea el siguiente hallazgo",
      "Teach-back: explicar por qué el mismo Hinchey no obliga a la misma operación"
    ]
  },
  {
    "id": "3d-isquemia",
    "type": "3d",
    "subtype": "threejs",
    "title": "Modelo 3D: Isquemia Mesentérica (Arcadas y AMS)",
    "subtitle": "Árbol arterial mesentérico superior 3D interactivo: embolia arterial distal a la cólica media (50%), trombosis en el ostium (20-25%), NOMI y trombosis venosa.",
    "topicId": "delgado",
    "tag": "Intestino Delgado",
    "badge": "3D Three.js",
    "url": "atlas/04-isquemia-intestinal.html",
    "highlights": [
      "Embolia de AMS (50%): aloja a 3-8 cm del origen, distal a la arteria cólica media (respeta yeyuno proximal)",
      "Trombosis arterial aguda (25%): ocurre en el ostium de la AMS con necrosis desde el ángulo de Treitz",
      "Puntos críticos colónicos de Griffith (ángulo esplénico) y Sudeck (unión rectosigmoidea)"
    ]
  },
  {
    "id": "3d-erge",
    "type": "3d",
    "subtype": "threejs",
    "title": "Modelo 3D: Unión Gastroesofágica, Hiato y ERGE",
    "subtitle": "Anatomía 3D de la barrera antirreflujo: pilares diafragmáticos, ángulo de His, ligamento frenoesofágico de Laimer, hernias hiatales Tipo I-IV y Funduplicatura de Nissen.",
    "topicId": "esofago",
    "tag": "Esófago",
    "badge": "3D Three.js",
    "url": "atlas/06-erge-union.html",
    "highlights": [
      "Hernia hiatal Tipo I (por deslizamiento, 90%) vs Tipo II-IV (paraesofágicas con riesgo de vólvulo gástrico)",
      "Metaplasia columnar de Barrett y clasificación de Siewert de tumores de la UEG",
      "Geometría 360° de la funduplicatura de Nissen corta y holgada"
    ]
  },
  {
    "id": "3d-volvulo",
    "type": "3d",
    "subtype": "threejs",
    "title": "Modelo 3D: Vólvulo de Sigmoides y de Ciego",
    "subtitle": "Gira el asa sobre su mesenterio: de la asa cerrada (>180°) al compromiso vascular (≥360°), con radiografía reactiva y decisión de manejo.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "3D Three.js",
    "url": "atlas/07-volvulo.html",
    "highlights": [
      "Más de 180° cierra el asa en sus dos extremos; hacia 360° el pedículo comprime los vasos mesentéricos",
      "Sigmoides estable: detorsión endoscópica (60–95 %) y sigmoidectomía en el mismo ingreso porque recurre en 43–75 %",
      "Ciego: resección segmentaria, no endoscopia; el ciego no viable está presente en 18–44 %"
    ]
  },
  {
    "id": "3d-fuga-anastomotica",
    "type": "3d",
    "subtype": "atlas_html",
    "title": "Línea de Tiempo: Fuga Anastomótica (POD 0–10)",
    "subtitle": "Recorre el posoperatorio día por día: qué es esperable y qué es alarma, PCR como prueba para descartar, momento de la TC y grados ISREC A/B/C.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Interactivo",
    "url": "atlas/08-fuga-anastomotica.html",
    "highlights": [
      "PCR para descartar: cortes de 172 / 124 / 144 mg/L en POD 3 / 4 / 5, VPN cercano a 97 % y VPP de solo 21–23 %",
      "La mediana del diagnóstico cae entre POD 6 y 9: la vigilancia debe superar la ventana del alta temprana",
      "ISREC: A no cambia el manejo, B requiere tratamiento activo sin relaparotomía, C requiere relaparotomía"
    ]
  },
  {
    "id": "3d-hirschsprung",
    "type": "3d",
    "subtype": "threejs",
    "title": "Modelo 3D: Enfermedad de Hirschsprung",
    "subtitle": "Segmento aganglionar, cono de transición y colon proximal dilatado; capa plexual, reflejo rectoanal inhibitorio, variantes, diagnóstico y técnicas de descenso.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "3D Three.js",
    "url": "atlas/09-hirschsprung.html",
    "highlights": [
      "El colon dilatado es el sano; el segmento estrecho y contraído es el aganglionar",
      "Diagnóstico de certeza: biopsia rectal ≥2 cm sobre la línea pectínea, con calretinina negativa y AChE aumentada",
      "Descenso: Soave (manguito muscular), Swenson (coloanal de espesor total) y Duhamel (colon retrorrectal látero-lateral)"
    ]
  },
  {
    "id": "caso-seriado-cuci-crohn",
    "type": "casos",
    "subtype": "atlas_html",
    "title": "Caso Seriado: Cuando el esteroide no alcanza (CUCI vs Crohn)",
    "subtitle": "Caso seriado de colitis grave en siete decisiones: cada respuesta correcta desbloquea el siguiente hallazgo, con contrafactual y teach-back al final.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Caso seriado",
    "url": "atlas/10-caso-cuci-crohn.html",
    "highlights": [
      "Truelove y Witts y reevaluación al día 3: más de 8 evacuaciones, o 3–8 con PCR >45 mg/L, predice falla de esteroides",
      "Cirugía urgente en CUCI: colectomía total abdominal con ileostomía terminal, sin proctectomía; reservorio después, por etapas",
      "Crohn colónico: un segmento, resección segmentaria; varios, colectomía subtotal; sin estricturoplastia en colon"
    ]
  },
  {
    "id": "3d-diferenciales",
    "type": "algoritmos",
    "subtype": "atlas_html",
    "title": "Fichas de Diferenciación Quirúrgica Lado a Lado",
    "subtitle": "Comparador interactivo de patologías que se confunden en el examen y en la guardia (acalasia vs espasmo, Crohn vs CUCI, vólvulo sigmoideo vs cecal, etc.).",
    "topicId": "recto",
    "tag": "General",
    "badge": "Diferenciales",
    "url": "atlas/fichas-diferenciacion.html",
    "highlights": [
      "Comparación directa de clínica, estándar de oro diagnóstico y tratamiento quirúrgico de elección"
    ]
  },
  {
    "id": "3d-arboles-guardia",
    "type": "algoritmos",
    "subtype": "atlas_html",
    "title": "Árboles Interactivos de Guardia Quirúrgica",
    "subtitle": "Diagramas de flujo interactivos paso a paso para decisiones críticas en urgencias quirúrgicas.",
    "topicId": "estomago",
    "tag": "General",
    "badge": "Flujogramas",
    "url": "atlas/arboles-guardia.html",
    "highlights": [
      "Nodos interactivos con bifurcación por estabilidad hemodinámica y hallazgos de imagen"
    ]
  },
  {
    "id": "3d-noche-critica",
    "type": "casos",
    "subtype": "atlas_html",
    "title": "Noche Crítica: 6 Momentos de una HTDA Masiva",
    "subtitle": "Simulación cronológica de guardia desde el ingreso en choque hipovolémico hasta la duodenotomía longitudinal y ligadura en 3 puntos de la arteria gastroduodenal.",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "badge": "Simulador HTDA",
    "url": "atlas/noche-critica.html",
    "highlights": [
      "Reanimación restrictiva, IBP en bolo, endoscopia < 24 h (o < 12 h en alto riesgo) y rescate quirúrgico"
    ]
  },
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
  },
  {
    "id": "tabla-nyhus",
    "type": "algoritmos",
    "subtype": "classification_table",
    "title": "Clasificación de Nyhus para Hernias Inguinales y Femorales",
    "subtitle": "Módulo: Pared Abdominal",
    "topicId": "pared",
    "tag": "Pared",
    "badge": "Tabla Oficial",
    "headers": [
      "Tipo",
      "Definición Anatómica",
      "Manejo Quirúrgico Recomendado"
    ],
    "rows": [
      [
        "Tipo I",
        "Hernia inguinal indirecta con anillo inguinal profundo normal (típica en niños y jóvenes)",
        "Herniorrafia con ligadura alta de saco (Marcy / herniotomía)"
      ],
      [
        "Tipo II",
        "Hernia inguinal indirecta con anillo profundo dilatado pero piso del conducto intacto",
        "Plastia libre de tensión (Lichtenstein) o laparoscópica (TAPP/TEP)"
      ],
      [
        "Tipo III A",
        "Hernia inguinal directa (defecto de la fascia transversalis en triángulo de Hesselbach)",
        "Técnica libre de tensión con malla (Lichtenstein o abordaje posterior)"
      ],
      [
        "Tipo III B",
        "Hernia indirecta con defecto del piso inguinal (hernia en pantalón o escrotal gigante)",
        "Plastia libre de tensión con reconstrucción del piso"
      ],
      [
        "Tipo III C",
        "Hernia femoral (crural) por debajo de la cintilla iliopúbica",
        "Reparación con tapón o técnica de McVay / abordaje preperitoneal"
      ],
      [
        "Tipo IV",
        "Hernia recurrente (A: directa, B: indirecta, C: femoral, D: combinada)",
        "Abordaje posterior preperitoneal (TEP/TAPP o Stoppa)"
      ]
    ]
  },
  {
    "id": "tabla-hinchey",
    "type": "algoritmos",
    "subtype": "classification_table",
    "title": "Clasificación de Hinchey para Diverticulitis Aguda Complicada",
    "subtitle": "Módulo: Colon",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Tabla Oficial",
    "headers": [
      "Estadio",
      "Hallazgos Clínicos e Imagenológicos",
      "Tratamiento Quirúrgico / Médico"
    ],
    "rows": [
      [
        "Estadio I a",
        "Inflamación pericolónica confinada o flemón",
        "Manejo ambulatorio/hospitalario con antibióticos orales o IV y dieta"
      ],
      [
        "Estadio I b",
        "Absceso pericolónico o mesocólico confinado",
        "Antibioticoterapia IV; si el absceso es >4-5 cm: drenaje percutáneo guiado por TAC (umbral de manejo WSES 2020, no de clasificación)"
      ],
      [
        "Estadio II",
        "Absceso pélvico, retroperitoneal o a distancia",
        "Antibióticos IV; drenaje percutáneo guiado por TAC si el absceso es >4-5 cm; cirugía electiva diferida"
      ],
      [
        "Estadio III",
        "Peritonitis purulenta generalizada sin comunicación fecal abierta",
        "Resección (Hartmann; o anastomosis ± estoma en paciente estable sin comorbilidad). Lavado laparoscópico y drenaje solo en pacientes muy seleccionados, no es de primera línea (WSES 2020)"
      ],
      [
        "Estadio IV",
        "Peritonitis fecaloidea generalizada por rotura diverticular libre",
        "Laparotomía exploradora urgente: Operación de Hartmann (resección sigmoidea + colostomía terminal)"
      ]
    ]
  },
  {
    "id": "tabla-forrest",
    "type": "algoritmos",
    "subtype": "classification_table",
    "title": "Clasificación de Forrest para Úlcera Péptica Sangrante",
    "subtitle": "Módulo: Estómago y Duodeno",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "badge": "Tabla Oficial",
    "headers": [
      "Clase",
      "Hallazgo Endoscópico",
      "Riesgo de Resangrado",
      "Conducta Terapéutica"
    ],
    "rows": [
      [
        "Forrest I a",
        "Sangrado activo en chorro arterial pulsátil",
        "90%",
        "Terapia endoscópica dual (adrenalina + clips/térmico) + IBP IV infusión"
      ],
      [
        "Forrest I b",
        "Sangrado activo rezumante o en napa continuo",
        "60-80%",
        "Terapia endoscópica dual + IBP IV infusión"
      ],
      [
        "Forrest II a",
        "Vaso visible protruyente no sangrante",
        "40-50%",
        "Terapia endoscópica dual obligatoria + vigilancia estrecha"
      ],
      [
        "Forrest II b",
        "Coágulo adherido en el lecho ulceroso",
        "20-30%",
        "Lavado vigoroso / remoción dirigida y tratamiento si subyace vaso"
      ],
      [
        "Forrest II c",
        "Manchas oscuras de hematina sobre la base",
        "5-10%",
        "Tratamiento médico con IBP oral; no requiere hemostasia endoscópica"
      ],
      [
        "Forrest III",
        "Úlcera de base limpia fibrinoide",
        "<3%",
        "Tratamiento médico ambulatorio con IBP oral; egreso hospitalario temprano"
      ]
    ]
  },
  {
    "id": "tabla-aast-bazo",
    "type": "algoritmos",
    "subtype": "classification_table",
    "title": "Escala de Lesión Esplénica de la AAST (American Association for the Surgery of Trauma)",
    "subtitle": "Módulo: Trauma",
    "topicId": "trauma",
    "tag": "Trauma",
    "badge": "Tabla Oficial",
    "headers": [
      "Grado",
      "Hematoma",
      "Laceración",
      "Conducta Quirúrgica Habitual"
    ],
    "rows": [
      [
        "Grado I",
        "Subcapsular no expansivo <10% superficie",
        "Capsular sin sangrado activo, <1 cm de profundidad",
        "Conservador o agentes hemostáticos locales (trombina, celulosa)"
      ],
      [
        "Grado II",
        "Subcapsular 10-50% superficie; intraparenquimatoso <5 cm",
        "Sangrado activo 1-3 cm profundidad sin vasos trabeculares",
        "Compresión 5 min + esponja hemostática / esplenorrafia directa"
      ],
      [
        "Grado III",
        "Subcapsular >50% superficie o expansivo; roto con sangrado activo",
        ">3 cm profundidad o afección de vasos trabeculares",
        "Esplenorrafia con pledgets, colágena, epiplón o malla de ácido poliglicólico"
      ],
      [
        "Grado IV",
        "Intraparenquimatoso roto con sangrado activo",
        "Afecta vasos hiliares o segmentarios con desvascularización >25%",
        "Resección segmentaria parcial o esplenectomía total"
      ],
      [
        "Grado V",
        "Bazo estallado y completamente desvitalizado",
        "Lesión vascular hiliar mayor que devasculariza todo el bazo",
        "Esplenectomía total obligatoria de urgencia"
      ]
    ]
  },
  {
    "id": "tabla-strasberg",
    "type": "algoritmos",
    "subtype": "classification_table",
    "title": "Clasificación de Strasberg-Bismuth de Lesión de Vía Biliar",
    "subtitle": "Estratificación anatómica y tratamiento definitivo de las lesiones iatrogénicas de la vía biliar",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "badge": "Tabla Oficial",
    "headers": [
      "Tipo",
      "Definición Anatómica",
      "Mecanismo Clásico",
      "Tratamiento de Elección"
    ],
    "rows": [
      [
        "Tipo A",
        "Fuga biliar del conducto cístico o de pequeños conductos subvesicales del lecho hepático (Luschka).",
        "Pérdida de clip en muñón cístico o lesión en el lecho vesicular.",
        "CPRE con esfinterotomía y colocación de endoprótesis (stent) biliar + drenaje de biloma."
      ],
      [
        "Tipo B",
        "Oclusión (clipaje) de un conducto hepático derecho aberrante (sectorial posterior derecho).",
        "Confusión de un conducto sectorial bajo con el conducto cístico.",
        "Asintomático: vigilancia. Colangitis recurrente o dolor: hepaticoyeyunoanastomosis segmentaria o resección hepática."
      ],
      [
        "Tipo C",
        "Sección sin ligadura (fuga libre) de un conducto hepático derecho aberrante que no comunica con el colédoco.",
        "Sección inadvertida de conducto sectorial posterior derecho aberrante.",
        "Drenaje externo + derivación biliodigestiva (hepaticoyeyunoanastomosis en Y de Roux al conducto sectorial)."
      ],
      [
        "Tipo D",
        "Lesión lateral parcial de la vía biliar principal (< 50% de la circunferencia) sin pérdida de continuidad.",
        "Laceración lateral o lesión térmica parcial del colédoco/hepático común.",
        "CPRE con stent biliar y drenaje; si se detecta en quirófano sin daño térmico: cierre primario con sutura fina sobre sonda en T."
      ],
      [
        "Tipo E (E1-E5)",
        "Sección circunferencial completa o estenosis de la vía biliar principal (E1 >2 cm de confluencia; E2 <2 cm; E3 en la confluencia preservada; E4 destruye la confluencia; E5 involucra hepático común + rama derecha aberrante).",
        "Confusión del colédoco con el conducto cístico por tracción cefálica lineal sin Visión Crítica de Strasberg.",
        "Reconstrucción mediante Hepaticoyeyunoanastomosis en Y de Roux (técnica de Hepp-Couinaud) por cirujano hepatobiliar."
      ]
    ]
  },
  {
    "id": "algo-perforacion-esofago",
    "type": "algoritmos",
    "subtype": "step_algorithm",
    "title": "Algoritmo de Perforación Esofágica",
    "subtitle": "Módulo: Esófago · Refs: Tratado AMCG de Esófago p. 28, Schwartz Cap. 25",
    "topicId": "esofago",
    "tag": "Esófago",
    "badge": "Algoritmo PUEM",
    "steps": [
      {
        "condition": "Sospecha de perforación esofágica (dolor retroesternal/cervical, crepitación, enfisema tras vómito o endoscopia)",
        "action": "Esofagograma hidrosoluble (gastrografín) o TC contrastada oral/IV."
      },
      {
        "condition": "¿Fuga contenida al mediastino, síntomas leves y sin sepsis (criterios de Cameron)?",
        "yes": "Manejo conservador médico: ayuno absoluto, NPT, IBP IV y antibióticos de amplio espectro.",
        "no": "Evaluar tiempo de evolución y viabilidad tisular."
      },
      {
        "condition": "¿Perforación temprana (<12-24 horas), tejido viable y paciente estable?",
        "yes": "Cierre primario con parche muscular o pleural + drenaje mediastinal amplio.",
        "no": "Perforación tardía (>24h), sepsis severa o tejido necrótico: exclusión esofágica, esofagostomía cervical, gastrostomía de descompresión y yeyunostomía de alimentación."
      }
    ]
  },
  {
    "id": "algo-acalasia-chicago",
    "type": "algoritmos",
    "subtype": "step_algorithm",
    "title": "Algoritmo de Acalasia según Criterios de Chicago v4.0",
    "subtitle": "Módulo: Esófago · Refs: Tratado AMCG de Esófago p. 20, Chicago Classification v4.0",
    "topicId": "esofago",
    "tag": "Esófago",
    "badge": "Algoritmo PUEM",
    "steps": [
      {
        "condition": "Disfagia mixta progresiva + esofagograma con 'pico de pájaro' + endoscopia que descarta cáncer",
        "action": "Manometría esofágica de alta resolución obligatoria."
      },
      {
        "condition": "Presión de Relajación Integrada (IRP) elevada (>15 mmHg) + 100% degluciones aperistálticas",
        "action": "Clasificar subtipo según contractilidad residual:"
      },
      {
        "condition": "Tipo I (Acalasia Clásica): Aperistalsis completa sin presurización esofágica",
        "action": "Cardiomiotomía de Heller laparoscópica + funduplicatura parcial de Dor (o POEM)."
      },
      {
        "condition": "Tipo II (Presurización panesofágica en ≥20% degluciones)",
        "action": "Mejor pronóstico: responde excelente a Cardiomiotomía de Heller o Dilatación neumática con balón."
      },
      {
        "condition": "Tipo III (Espástica: contracciones prematuras con DCI elevado)",
        "action": "POEM (peroral endoscopic myotomy) con miotomía larga distal o Heller laparoscópica amplia."
      }
    ]
  },
  {
    "id": "algo-htda-ulcera",
    "type": "algoritmos",
    "subtype": "step_algorithm",
    "title": "Algoritmo de Hemorragia Digestiva Alta por Úlcera Péptica",
    "subtitle": "Módulo: Estómago y Duodeno · Refs: Schwartz Cap. 26, Consenso de Forrest",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "badge": "Algoritmo PUEM",
    "steps": [
      {
        "condition": "Melena / Hematemesis + Inestabilidad hemodinámica (FC >100, TA <90)",
        "action": "Reanimación con cristaloides en carga, paquete globular si Hb <7-8 g/dl, infusión de IBP IV (pantoprazol bolo 80 mg + 8 mg/h)."
      },
      {
        "condition": "Endoscopia temprana (primeras 12-24 horas): Clasificación de Forrest",
        "action": "Estratificación de riesgo de resangrado:"
      },
      {
        "condition": "Forrest Ia (sangrado en chorro) o Ib (sangrado en napa)",
        "action": "Terapia dual obligatoria: inyección de adrenalina (1:10,000) + método térmico o clips hemostáticos. Hospitalización UCI."
      },
      {
        "condition": "Forrest IIa (vaso visible no sangrante)",
        "action": "Terapia endoscópica combinada. Alto riesgo de recidiva hemorrágica (40-50%)."
      },
      {
        "condition": "Forrest IIb (coágulo adherido)",
        "action": "Remover coágulo irrigando; si vaso visible tratar. Si permanece adherido, IBP infusión."
      },
      {
        "condition": "Forrest IIc (mancha oscura de hematina) o III (base limpia)",
        "action": "Bajo riesgo (<5%). No requieren terapia endoscópica; tolerancia oral temprana y egreso con IBP."
      },
      {
        "condition": "¿Falla endoscópica repetida, inestabilidad refractaria o requerimiento >4-6 U sangre?",
        "yes": "Cirugía urgente: piloroduodenotomía con sutura hemostática de vaso gastroduodenal + vagotomía/piloroplastia."
      }
    ]
  },
  {
    "id": "algo-hernias-pared",
    "type": "algoritmos",
    "subtype": "step_algorithm",
    "title": "Algoritmo de Decisión en Hernia Inguinal",
    "subtitle": "Módulo: Pared Abdominal · Refs: Sabiston Pared Abdominal, EHS Guidelines",
    "topicId": "pared",
    "tag": "Pared",
    "badge": "Algoritmo PUEM",
    "steps": [
      {
        "condition": "Masa inguinal reductible no dolorosa",
        "action": "Plastia programada con técnica libre de tensión (Lichtenstein de elección en cirugía abierta; TAPP o TEP en laparoscópica)."
      },
      {
        "condition": "Hernia irreductible con dolor agudo, edema y cambios de coloración (estrangulación sospechada)",
        "action": "NO intentar reducción manual por riesgo de 'reducción en masa' o perforación de asa gangrenada."
      },
      {
        "condition": "Exploración quirúrgica urgente inmediata",
        "action": "Apertura de saco, inspección de viabilidad de asas y resección intestinal si hay necrosis. En campos contaminados evitar malla de polipropileno macroporoso pesado o usar plastia tisular (Shouldice/McVay)."
      }
    ]
  },
  {
    "id": "algo-db-0",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: Algoritmo de Manejo de Colecistitis y Vía Biliar",
    "subtitle": "Simulador de decisiones ramificadas (10 nodos clínicos) · Bloque: Colecistitis y vía biliar",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "Algoritmo de Manejo de Colecistitis y Vía Biliar",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿El paciente tiene signos de colangitis aguda?",
          "citation": "[Fragmento 12 — 1 s2.0 S1424390325000857 main.pdf, pág. 36]",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Realizar ERCP/ES de manera urgente (dentro de 24 horas).",
          "citation": "[Fragmento 12 — 1 s2.0 S1424390325000857 main.pdf, pág. 36]",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿El paciente presenta pancreatitis biliar severa?",
          "citation": "[Fragmento 2 — 1 s2.0 S1424390325000857 main.pdf, pág. 36]",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "No realizar ERCP/ES a menos que haya colangitis aguda presente.",
          "citation": "[Fragmento 12 — 1 s2.0 S1424390325000857 main.pdf, pág. 36]",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "¿Se sospecha que hay una obstrucción del ducto biliar común mediante imagenología?",
          "citation": "[Fragmento 10 — 1 s2.0 S1424390325000857 main.pdf, pág. 36]",
          "options": [
            {
              "label": "Sí",
              "next": "n6"
            },
            {
              "label": "No",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Proceder a ERCP para extracción de piedras del ducto biliar común.",
          "citation": "[Fragmento 5 — 1 s2.0 S1424390313005255 main.pdf, pág. 20]",
          "options": []
        },
        {
          "id": "n7",
          "kind": "decision",
          "text": "¿El paciente tiene malestar persistente o complicaciones?",
          "citation": "[Fragmento 1 — 1 s2.0 S1424390313005255 main.pdf, pág. 25]",
          "options": [
            {
              "label": "Sí",
              "next": "n8"
            },
            {
              "label": "No",
              "next": "n10"
            }
          ]
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Realizar colecistectomía programada durante la misma hospitalización.",
          "citation": "[Fragmento 7 — 1 s2.0 S1424390313005255 main.pdf, pág. 25]",
          "options": []
        },
        {
          "id": "n10",
          "kind": "action",
          "text": "Dar tratamiento conservador y considerar colecistectomía electiva si los síntomas persisten.",
          "citation": "[Fragmento 8 — 1 s2.0 S1424390313005255 main.pdf, pág. 12]",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Cholecystectomy should be delayed in patients with peripancreatic collections until they resolve.",
          "citation": "[Fragmento 8 — 1 s2.0 S1424390313005255 main.pdf, pág. 12]",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-1",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Esófago: Perforación esofágica",
    "subtitle": "Simulador de decisiones ramificadas (7 nodos clínicos) · Bloque: PUEM R2 Esófago: Perforación esofágica",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Esófago: Perforación esofágica",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Sospecha de perforación esofágica (dolor torácico o cervical, crepitación, tras endoscopia o vómito). Esofagograma con contraste hidrosoluble (o TC con contraste oral). ¿Fuga contenida al mediastino que drena al esófago, síntomas leves y sepsis mínima (Cameron)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Manejo conservador: ayuno, antibióticos de amplio espectro y vigilancia estrecha. Siempre: tratar contaminación, drenaje amplio, control de la fuente y acceso enteral",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿Perforación temprana y pequeña, contaminación mínima, sitio apto?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Endoprótesis cubierta (o clips/EVT) más drenaje pleural o VATS. Siempre: tratar contaminación, drenaje amplio, control de la fuente y acceso enteral",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "Cirugía según nivel: cervical izquierda (alta), toracotomía derecha (media), toracotomía izquierda (distal). ¿Condición del tejido y extensión de la lesión?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Tejido sano",
              "next": "n6"
            },
            {
              "label": "Lesión extensa o desvitalizada",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Cierre en dos capas con colgajo y corrección de obstrucción distal (miotomía si acalasia). Siempre: tratar contaminación, drenaje amplio, control de la fuente y acceso enteral",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Tubo en T; defecto enorme: exclusión con esofagostomía cervical y gastrostomía. Siempre: tratar contaminación, drenaje amplio, control de la fuente y acceso enteral",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-2",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Esófago: Ingesta de cáusticos",
    "subtitle": "Simulador de decisiones ramificadas (9 nodos clínicos) · Bloque: PUEM R2 Esófago: Ingesta de cáusticos",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Esófago: Ingesta de cáusticos",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Afectación de vía aérea (disnea, babeo, estridor, ronquera)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Intubación con guía broncoscópica y preparación para cricotiroidotomía",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "Sin sondas a ciegas ni eméticos; antibióticos de amplio espectro. TC de tórax y abdomen con contraste IV y oral: ¿Aire intramural en la pared esofágica?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Esofagectomía (necrosis muscular, perforación inminente)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "Endoscopia temprana (antes de 48 h) y graduar lesión (Zargar): ¿Grado de quemadura endoscópica?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Primer grado",
              "next": "n6"
            },
            {
              "label": "Segundo y tercer grado",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Observación 24 a 48 h. Seguimiento: estenosis (60% al primer mes) → dilataciones; cirugía si fallan o luz < 40 F",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "decision",
          "text": "Laparotomía exploradora",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Necrosis de grosor total de esófago y estómago",
              "next": "n8"
            },
            {
              "label": "Viabilidad dudosa",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Resección esofagogástrica, esofagostomía cervical y yeyunostomía",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Segunda valoración a las 36 h",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-3",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Esófago: Tratamiento de acalasia",
    "subtitle": "Simulador de decisiones ramificadas (11 nodos clínicos) · Bloque: PUEM R2 Esófago: Tratamiento de acalasia",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Esófago: Tratamiento de acalasia",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Disfagia a sólidos y líquidos, regurgitación y pérdida de peso?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "decision",
          "text": "¿Esofagograma (pico de pájaro) y endoscopia para descartar seudoacalasia?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n3",
          "kind": "action",
          "text": "Disfagia a sólidos y líquidos, regurgitación y pérdida de peso",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n4",
          "kind": "decision",
          "text": "¿Manometría de alta resolución: PRI > 15 mmHg sin peristaltismo normal → acalasia (Chicago I, II, III)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n6"
            },
            {
              "label": "No",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n5",
          "kind": "action",
          "text": "Esofagograma (pico de pájaro) y endoscopia para descartar seudoacalasia",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n6",
          "kind": "decision",
          "text": "¿Megaesófago o esófago sigmoide sintomático, fracaso de más de una miotomía o estenosis no dilatable?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n8"
            },
            {
              "label": "No",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Manometría de alta resolución: PRI > 15 mmHg sin peristaltismo normal → acalasia (Chicago I, II, III)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Esofagectomía (POEM es alternativa en sigmoide). Vigilancia prolongada: riesgo de carcinoma hasta 8% a 20 años",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "decision",
          "text": "¿Candidato a procedimiento definitivo?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n10"
            },
            {
              "label": "No",
              "next": "n11"
            }
          ]
        },
        {
          "id": "n10",
          "kind": "action",
          "text": "Miotomía de Heller laparoscópica con funduplicatura parcial (Dor o Toupet); alternativas: dilatación neumática o POEM. Vigilancia prolongada: riesgo de carcinoma hasta 8% a 20 años",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n11",
          "kind": "action",
          "text": "Toxina botulínica (recaída > 50% a 6 meses) o nitratos/antagonistas del calcio. Vigilancia prolongada: riesgo de carcinoma hasta 8% a 20 años",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-4",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Esófago: ERGE: del tratamiento médico a la funduplicatura",
    "subtitle": "Simulador de decisiones ramificadas (10 nodos clínicos) · Bloque: PUEM R2 Esófago: ERGE: del tratamiento médico a la funduplicatura",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Esófago: ERGE: del tratamiento médico a la funduplicatura",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Síntomas típicos de ERGE (pirosis, regurgitación). ¿Datos de alarma (disfagia progresiva, regurgitación de no digerido, anemia, pérdida de peso)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No (IBP empírico 8 semanas)",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Endoscopia antes de tratar",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿Persisten síntomas o esofagitis tras 12 semanas de IBP adecuado?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "No",
              "next": "n4"
            },
            {
              "label": "Sí",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Tratamiento médico a la menor dosis eficaz",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "Evaluación preoperatoria: endoscopia, pH-metría (DeMeester ≥ 14,7), manometría y esofagograma",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "LA C/D o estenosis péptica",
              "next": "n6"
            },
            {
              "label": "pH-metría (DeMeester ≥ 14,7)",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "pH-metría no necesaria",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "decision",
          "text": "¿Tipo de paciente quirúrgico?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Peristaltismo adecuado",
              "next": "n8"
            },
            {
              "label": "Hipomotilidad severa",
              "next": "n9"
            },
            {
              "label": "Obesidad",
              "next": "n10"
            }
          ]
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Funduplicatura laparoscópica (Nissen 360°) con cierre de pilares y ≥ 3 cm de esófago intraabdominal",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Funduplicatura parcial (Toupet 270°)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n10",
          "kind": "action",
          "text": "Procedimiento bariátrico en lugar de funduplicatura",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-5",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Esófago: Esófago de Barrett y cáncer superficial",
    "subtitle": "Simulador de decisiones ramificadas (7 nodos clínicos) · Bloque: PUEM R2 Esófago: Esófago de Barrett y cáncer superficial",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Esófago: Esófago de Barrett y cáncer superficial",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Esófago de Barrett en endoscopia. Biopsias de Seattle (4 cuadrantes cada 1 cm y lesiones visibles). ¿Lesión nodular o elevada?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "decision",
          "text": "Resección endoscópica de la mucosa (REM) para estadificar. ¿Resultado de la estadificación?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "T1a de bajo riesgo",
              "next": "n4"
            },
            {
              "label": "T1b (salvo SM1 de bajo riesgo)",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿Grado de displasia?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Bajo grado",
              "next": "n6"
            },
            {
              "label": "Alto grado",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "REM ± ablación. Tras ablación: IBP y endoscopia a 3 meses (alto grado) o 6 meses (bajo grado)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "action",
          "text": "Esofagectomía",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Erradicación endoscópica (ARF) o vigilancia anual. Tras ablación: IBP y endoscopia a 6 meses (bajo grado)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Tratamiento endoscópico si lo tolera. Tras ablación: IBP y endoscopia a 3 meses (alto grado)",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-6",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Estómago y Duodeno: Hemorragia digestiva alta no variceal (úlcera péptica)",
    "subtitle": "Simulador de decisiones ramificadas (9 nodos clínicos) · Bloque: PUEM R2 Estómago y Duodeno: Hemorragia digestiva alta no variceal (úlcera péptica)",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Estómago y Duodeno: Hemorragia digestiva alta no variceal (úlcera péptica)",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "HTDA no variceal (sospecha de úlcera péptica). Reanimación: vía IV de gran calibre, líquidos y hemoderivados, monitorización; IBP intravenoso. Estratificar riesgo (Glasgow-Blatchford antes de la endoscopia). Endoscopia en las primeras 24 h. ¿Estigma de alto riesgo (sangrado activo, vaso visible, coágulo adherido)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No (mancha pigmentada o base limpia)",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "decision",
          "text": "Hemostasia endoscópica (térmica, clips o esclerosante); adrenalina solo como segunda modalidad. ¿Resangrado tras endoscopia inicial satisfactoria?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n3",
          "kind": "action",
          "text": "Sin tratamiento endoscópico; IBP ordinario",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n4",
          "kind": "decision",
          "text": "Nueva endoscopia; si recurre y está estable, embolización transarterial. ¿Fracaso endoscópico, inestabilidad hemodinámica o transfusión continua?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n6"
            },
            {
              "label": "No",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n5",
          "kind": "action",
          "text": "Hemostasia endoscópica (térmica, clips o esclerosante); adrenalina solo como segunda modalidad",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n6",
          "kind": "decision",
          "text": "Cirugía: ¿Localización de la úlcera?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Úlcera duodenal posterior",
              "next": "n8"
            },
            {
              "label": "Úlcera gástrica",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Nueva endoscopia; si recurre y está estable, embolización transarterial",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Duodenotomía y sutura en U de tres puntos de la gastroduodenal (sin incluir el colédoco)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Escisión-biopsia de la úlcera y reparación",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-7",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Estómago y Duodeno: Hemorragia por várices gástricas",
    "subtitle": "Simulador de decisiones ramificadas (5 nodos clínicos) · Bloque: PUEM R2 Estómago y Duodeno: Hemorragia por várices gástricas",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Estómago y Duodeno: Hemorragia por várices gástricas",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Contexto?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Trombosis de la vena esplénica (várices gástricas aisladas)",
              "next": "n2"
            },
            {
              "label": "Hipertensión portal",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Confirmar por imagen y esplenectomía",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "Manejar como várices esofágicas: reponer volemia, corregir coagulopatía, balón de Sengstaken temporal y endoscopia terapéutica. ¿Hemorragia que no responde a endoscopia?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "TIPS (o BRTO como alternativa)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "action",
          "text": "Reponer volemia, corregir coagulopatía, balón de Sengstaken temporal y endoscopia terapéutica",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-8",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Estómago y Duodeno: Úlcera péptica perforada",
    "subtitle": "Simulador de decisiones ramificadas (8 nodos clínicos) · Bloque: PUEM R2 Estómago y Duodeno: Úlcera péptica perforada",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Estómago y Duodeno: Úlcera péptica perforada",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Sospecha de úlcera péptica perforada. ¿Aire libre en la radiografía?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "No",
              "next": "n2"
            },
            {
              "label": "Sí",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "TC, preferiblemente con contraste oral",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿Síntomas localizados, estable y fuga sellada en estudio hidrosoluble?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Tratamiento conservador con vigilancia estrecha. Después: erradicar H. pylori y endoscopia a las 6-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "Cirugía (laparoscopia si estable y equipo experto; laparotomía si choque, > 24 h, > 70 años). ¿Tipo de perforación?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Duodenal < 1 cm",
              "next": "n6"
            },
            {
              "label": "Duodenal > 3 cm",
              "next": "n7"
            },
            {
              "label": "Gástrica",
              "next": "n8"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Cierre primario reforzado con epiplón (o parche de Graham). Después: erradicar H. pylori y endoscopia a las 6-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Exclusión pilórica con gastroyeyunostomía, o antrectomía. Después: erradicar H. pylori y endoscopia a las 6-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Escisión-biopsia y cierre, o parche de epiplón. Después: erradicar H. pylori y endoscopia a las 6-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-9",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: Adenocarcinoma gástrico: estadificación y tratamiento",
    "subtitle": "Simulador de decisiones ramificadas (9 nodos clínicos) · Bloque: PUEM R2 Estómago y Duodeno: Adenocarcinoma gástrico: estadificación y tratamiento",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "Adenocarcinoma gástrico: estadificación y tratamiento",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Sospecha de cáncer gástrico. Endoscopia con 6 a 8 biopsias. TC de tórax, abdomen y pelvis con contraste oral e IV (PET/TC si es mayor de T1). ¿Metástasis o invasión de aorta, tronco celíaco o arterias hepática común o esplénica proximales?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Irresecable: tratamiento sistémico o paliativo",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿Cumple criterios de resección endoscópica (intestinal, mucosa, sin invasión linfovascular, sin úlcera, < 2 cm)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Mucosectomía o disección endoscópica submucosa",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "¿T2 o mayor?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n6"
            },
            {
              "label": "No",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "decision",
          "text": "Laparoscopia de estadificación (20-30% con enfermedad peritoneal)",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sin metástasis",
              "next": "n8"
            },
            {
              "label": "Con metástasis",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Gastrectomía: margen 2-3 cm (inicial) o 4-6 cm (avanzado), linfadenectomía D2 (≥ 16 ganglios)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Quimioterapia perioperatoria y gastrectomía",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Laparoscopia de estadificación (20-30% con enfermedad peritoneal)",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-10",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Estómago y Duodeno: GIST gástrico",
    "subtitle": "Simulador de decisiones ramificadas (11 nodos clínicos) · Bloque: PUEM R2 Estómago y Duodeno: GIST gástrico",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Estómago y Duodeno: GIST gástrico",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Tumor submucoso gástrico con sospecha de GIST. TC de abdomen y pelvis con contraste (RM si no tolera contraste IV). ¿Alta sospecha y paciente operable?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No (metástasis o se plantea imatinib neoadyuvante)",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "decision",
          "text": "Sin biopsia preoperatoria. ¿Sintomático o > 2 cm?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n3",
          "kind": "action",
          "text": "Biopsia (AAF guiada por USE)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n4",
          "kind": "decision",
          "text": "Resección R0 sin linfadenectomía, sin romper el tumor. ¿Alto riesgo tras resección?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n6"
            },
            {
              "label": "No",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "¿Datos de alto riesgo en USE (bordes irregulares, úlcera, focos ecógenos, heterogeneidad)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n8"
            },
            {
              "label": "No",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Imatinib adyuvante 3 años",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Resección R0 sin linfadenectomía, sin romper el tumor",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "decision",
          "text": "Resección. ¿Alto riesgo tras resección?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n10"
            },
            {
              "label": "No",
              "next": "n11"
            }
          ]
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Vigilancia con endoscopia y USE cada 6-12 meses",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n10",
          "kind": "action",
          "text": "Imatinib adyuvante 3 años",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n11",
          "kind": "action",
          "text": "Resección",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-11",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Intestino Delgado: Obstrucción de intestino delgado por bridas (fig. 28-16)",
    "subtitle": "Simulador de decisiones ramificadas (9 nodos clínicos) · Bloque: PUEM R2 Intestino Delgado: Obstrucción de intestino delgado por bridas (fig. 28-16)",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Intestino Delgado: Obstrucción de intestino delgado por bridas (fig. 28-16)",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Signos y síntomas de estrangulación o isquemia intestinal?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Quirófano para exploración",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿Obstrucción parcial o completa?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Completa",
              "next": "n4"
            },
            {
              "label": "Parcial",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "decision",
          "text": "Ayuno, líquidos IV, SNG y exploración abdominal seriada. ¿Desarrolla signos de isquemia o no mejora en 24 h?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n6"
            },
            {
              "label": "No",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "Ayuno, líquidos IV, SNG si es necesaria y exploración seriada. ¿Desarrolla signos de isquemia?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n8"
            },
            {
              "label": "No",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Quirófano para exploración",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Continuar tratamiento y vigilancia estrecha",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Quirófano para exploración",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Continuar tratamiento conservador; operar si no mejora en 48 h",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-12",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: Fístula enterocutánea posoperatoria",
    "subtitle": "Simulador de decisiones ramificadas (7 nodos clínicos) · Bloque: PUEM R2 Intestino Delgado: Fístula enterocutánea posoperatoria",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "Fístula enterocutánea posoperatoria",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Paso 1. Estabilización: Líquidos y electrólitos, nutrición (casi siempre NPT), antibióticos, drenaje percutáneo de abscesos, protección de piel. Paso 2. Investigación: TC con contraste intestinal; fistulograma si el origen no es claro. Paso 3. Decisión: ¿Gasto bajo y origen distal?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No (alto gasto)",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "decision",
          "text": "Probar nutrición oral o enteral. ¿Cierra en el periodo de tratamiento conservador (2-3 meses)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "NPT; octreótido reduce el gasto. ¿Cierra en el periodo de tratamiento conservador (2-3 meses)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n6"
            },
            {
              "label": "No",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Paso 4. Rehabilitación",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "action",
          "text": "Tratamiento definitivo: resecar trayecto y segmento de origen",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Paso 4. Rehabilitación",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Tratamiento definitivo: resecar trayecto y segmento de origen",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-13",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Intestino Delgado: Divertículo de Meckel",
    "subtitle": "Simulador de decisiones ramificadas (8 nodos clínicos) · Bloque: PUEM R2 Intestino Delgado: Divertículo de Meckel",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Intestino Delgado: Divertículo de Meckel",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Sintomático?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "No (hallazgo incidental)",
              "next": "n2"
            },
            {
              "label": "Sí",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "decision",
          "text": "¿Tiene bandas o base estrecha?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿Cuál es la complicación?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Hemorragia",
              "next": "n6"
            },
            {
              "label": "Obstrucción o diverticulitis sin afectar la base",
              "next": "n7"
            },
            {
              "label": "Tumor, base inflamada o perforada",
              "next": "n8"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Extirpación selectiva",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "action",
          "text": "Manejo controvertido",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Resección segmentaria de íleon con el divertículo y la úlcera ileal adyacente",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Diverticulectomía y extirpación de bandas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Resección ileal segmentaria",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-14",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Intestino Delgado: Tumor neuroendocrino (carcinoide) de intestino delgado",
    "subtitle": "Simulador de decisiones ramificadas (8 nodos clínicos) · Bloque: PUEM R2 Intestino Delgado: Tumor neuroendocrino (carcinoide) de intestino delgado",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Intestino Delgado: Tumor neuroendocrino (carcinoide) de intestino delgado",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Durante la anestesia, ¿crisis carcinoide?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Octreótido IV 50-100 µg en bolo, luego 50 µg/h",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿Metástasis?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Citorreducción + octreótido para síntomas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "Explorar todo el intestino delgado (múltiples en ~30%). ¿Localización y tamaño?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "< 1 cm sin ganglios",
              "next": "n6"
            },
            {
              "label": "> 1 cm, múltiples o con ganglios",
              "next": "n7"
            },
            {
              "label": "Íleon terminal",
              "next": "n8"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Resección intestinal segmentaria",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Escisión amplia de intestino y mesenterio",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Hemicolectomía derecha",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-15",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Colon: Apendicitis complicada o de presentación tardía",
    "subtitle": "Simulador de decisiones ramificadas (9 nodos clínicos) · Bloque: PUEM R2 Colon: Apendicitis complicada o de presentación tardía",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Colon: Apendicitis complicada o de presentación tardía",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Sepsis o peritonitis generalizada?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No (dolor localizado, fiebre, días de evolución)",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Reanimación y apendicectomía inmediata (abierta o laparoscópica)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "Líquidos, antibióticos de amplio espectro y TC. ¿Hallazgo en la TC?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Absceso localizado",
              "next": "n4"
            },
            {
              "label": "Flemón o líquido no drenable",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "decision",
          "text": "Drenaje percutáneo guiado por TC (4-7 días); si no es viable, drenaje laparoscópico, transrectal o transvaginal. Tras la resolución:",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Adulto",
              "next": "n6"
            },
            {
              "label": "Apendicectomía de intervalo solo si hay síntomas recurrentes",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "Antibióticos solos 4-7 días. Tras la resolución:",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Adulto",
              "next": "n8"
            },
            {
              "label": "Apendicectomía de intervalo solo si hay síntomas recurrentes",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Colonoscopia",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Apendicectomía de intervalo solo si hay síntomas recurrentes",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Colonoscopia",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Apendicectomía de intervalo solo si hay síntomas recurrentes",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-16",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Colon: Diverticulitis aguda",
    "subtitle": "Simulador de decisiones ramificadas (10 nodos clínicos) · Bloque: PUEM R2 Colon: Diverticulitis aguda",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Colon: Diverticulitis aguda",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Diverticulitis aguda (confirmar y estadificar con TC). ¿Complicada?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "No (Hinchey 0-Ia)",
              "next": "n2"
            },
            {
              "label": "Sí",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "decision",
          "text": "¿Tolera vía oral, sin síntomas sistémicos ni comorbilidad?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n3"
            },
            {
              "label": "No",
              "next": "n4"
            }
          ]
        },
        {
          "id": "n3",
          "kind": "action",
          "text": "Manejo ambulatorio: antibiótico oral y dieta baja en residuo 7-10 días. Al resolver: colonoscopia en 4-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Hospitalizar: antibiótico IV y reposo intestinal. Al resolver: colonoscopia en 4-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "¿Qué complicación?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Absceso pequeño (Ib)",
              "next": "n6"
            },
            {
              "label": "Absceso grande (II), paciente estable",
              "next": "n7"
            },
            {
              "label": "Peritonitis purulenta o fecal (III-IV)",
              "next": "n8"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Antibióticos solos. Al resolver: colonoscopia en 4-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Drenaje percutáneo guiado por TC + antibióticos. Al resolver: colonoscopia en 4-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "decision",
          "text": "Urgencia: reanimación y resección. ¿Paciente estable?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n9"
            },
            {
              "label": "No",
              "next": "n10"
            }
          ]
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Resección con anastomosis primaria ± ileostomía derivativa. Al resolver: colonoscopia en 4-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n10",
          "kind": "action",
          "text": "Procedimiento de Hartmann. Al resolver: colonoscopia en 4-8 semanas",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-17",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Colon: Vólvulo de colon: sigmoides vs ciego",
    "subtitle": "Simulador de decisiones ramificadas (9 nodos clínicos) · Bloque: PUEM R2 Colon: Vólvulo de colon: sigmoides vs ciego",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Colon: Vólvulo de colon: sigmoides vs ciego",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "Vólvulo de colon (radiografía simple, enema hidrosoluble o TC): ¿Sigmoides o ciego?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sigmoides (grano de café hacia el cuadrante superior derecho; pico de pájaro)",
              "next": "n2"
            },
            {
              "label": "Ciego (riñón en el cuadrante superior izquierdo)",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "decision",
          "text": "¿Gangrena, peritonitis o perforación?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n3"
            },
            {
              "label": "No",
              "next": "n4"
            }
          ]
        },
        {
          "id": "n3",
          "kind": "action",
          "text": "Cirugía inmediata sin intentar detorsión; intestino muerto: Hartmann",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n4",
          "kind": "decision",
          "text": "Reanimación y detorsión endoscópica + sonda rectal. ¿Mucosa necrótica, úlcera o sangre oscura en la endoscopia?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n5"
            },
            {
              "label": "No",
              "next": "n6"
            }
          ]
        },
        {
          "id": "n5",
          "kind": "action",
          "text": "Cirugía",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n6",
          "kind": "decision",
          "text": "¿Falla la descompresión?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n8"
            },
            {
              "label": "No",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "No se detuerce por endoscopía; exploración quirúrgica al diagnóstico. Hemicolectomía derecha con anastomosis ileocólica primaria",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Resección, colostomía (Hartmann)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Sigmoidectomía electiva (recurrencia hasta 40%)",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-18",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Colon: Cáncer de colon obstructivo",
    "subtitle": "Simulador de decisiones ramificadas (9 nodos clínicos) · Bloque: PUEM R2 Colon: Cáncer de colon obstructivo",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Colon: Cáncer de colon obstructivo",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Peritonitis, perforación o isquemia?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "decision",
          "text": "¿Paciente inestable o con alto riesgo de fuga?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n3"
            },
            {
              "label": "No",
              "next": "n4"
            }
          ]
        },
        {
          "id": "n3",
          "kind": "action",
          "text": "Estoma derivativo temporal o exteriorizar la anastomosis",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Cirugía inmediata",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "¿Localización?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Colon derecho",
              "next": "n6"
            },
            {
              "label": "Sigmoides o descendente",
              "next": "n7"
            },
            {
              "label": "Ciego isquémico o inviable",
              "next": "n8"
            },
            {
              "label": "Recto medio o bajo",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Hemicolectomía derecha con anastomosis primaria",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Endoprótesis endoscópica como puente o cirugía inicial (Hartmann o anastomosis primaria ± estoma)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Colectomía subtotal",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Estoma derivativo y quimiorradioterapia antes de la cirugía definitiva",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-19",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Pared Abdominal: Hernia inguinal o femoral incarcerada/estrangulada",
    "subtitle": "Simulador de decisiones ramificadas (7 nodos clínicos) · Bloque: PUEM R2 Pared Abdominal: Hernia inguinal o femoral incarcerada/estrangulada",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Pared Abdominal: Hernia inguinal o femoral incarcerada/estrangulada",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Signos de estrangulación (fiebre, leucocitosis, inestabilidad hemodinámica, saco caliente y doloroso, edema o cambio de color de la piel)?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "No (incarcerada sin compromiso)",
              "next": "n2"
            },
            {
              "label": "Sí",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Se puede intentar la reducción, con la reparación quirúrgica ya planeada",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "NO reducir (reducir tejido gangrenado puede causar una catástrofe intraabdominal) → Reanimación con líquidos, descompresión nasogástrica y antibióticos IV → cirugía urgente. ¿La hernia se redujo con la inducción anestésica?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Explorar el abdomen en busca de tejido no viable (laparoscopia o laparotomía)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "Abordaje preperitoneal: valorar contenido y viabilidad por una sola incisión. ¿Contenido viable?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n6"
            },
            {
              "label": "No",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Reducir a la cavidad peritoneal y reparar",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Resección; malla sintética contraindicada → reparación tisular (femoral: ligamento de Cooper)",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-20",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Pared Abdominal: Hernia en campo contaminado o con resección intestinal",
    "subtitle": "Simulador de decisiones ramificadas (9 nodos clínicos) · Bloque: PUEM R2 Pared Abdominal: Hernia en campo contaminado o con resección intestinal",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Pared Abdominal: Hernia en campo contaminado o con resección intestinal",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Contaminación del campo o resección intestinal concomitante?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "No",
              "next": "n2"
            },
            {
              "label": "Sí",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Reparación estándar con malla sintética permanente",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "Malla sintética contraindicada si la contaminación es importante. ¿Hernia inguinal?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Reparación tisular: cintilla iliopúbica, Shouldice, Bassini o McVay",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "¿Enterotomía durante una reparación ventral?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n6"
            },
            {
              "label": "No",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Reparación primaria o con tejido biológico, o malla protésica diferida 3-4 días",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "decision",
          "text": "¿Se requiere soporte en campo contaminado?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n8"
            },
            {
              "label": "No",
              "next": "n9"
            }
          ]
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Malla absorbible (poliglactina) o biológica transitoria como barrera. Advertir que la malla absorbible deja una eventración",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n9",
          "kind": "action",
          "text": "Malla sintética contraindicada si la contaminación es importante",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-21",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Pared Abdominal: Elección de la reparación en hernia inguinal programada",
    "subtitle": "Simulador de decisiones ramificadas (8 nodos clínicos) · Bloque: PUEM R2 Pared Abdominal: Elección de la reparación en hernia inguinal programada",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Pared Abdominal: Elección de la reparación en hernia inguinal programada",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Hombre con hernia inguinal asintomática o poco sintomática?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No (sintomática o femoral)",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Vigilancia activa segura (no extrapolar a mujeres ni a hernia femoral)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "Reparación programada. ¿Escenario?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Abierta en hernia unilateral o bilateral",
              "next": "n4"
            },
            {
              "label": "Bilateral o recidivante",
              "next": "n5"
            },
            {
              "label": "Recidiva tras reparación anterior con malla",
              "next": "n6"
            },
            {
              "label": "Recidiva tras abordaje posterior",
              "next": "n7"
            },
            {
              "label": "Intolerancia a anestesia general (única contraindicación absoluta de la laparoscopia)",
              "next": "n8"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Lichtenstein (técnica abierta preferida por la EHS)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "action",
          "text": "Laparoscópica (TEP/TAPP) o Stoppa",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Abordaje posterior + segunda prótesis",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Entrar por un plano virgen (anterior)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n8",
          "kind": "action",
          "text": "Reparación abierta con anestesia local",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "algo-db-22",
    "type": "algoritmos",
    "subtype": "decision_tree",
    "title": "Árbol de Decisión: PUEM R2 Pared Abdominal: Hernia umbilical del adulto",
    "subtitle": "Simulador de decisiones ramificadas (7 nodos clínicos) · Bloque: PUEM R2 Pared Abdominal: Hernia umbilical del adulto",
    "topicId": "colon",
    "tag": "General",
    "badge": "Árbol Interactivo",
    "tree": {
      "title": "PUEM R2 Pared Abdominal: Hernia umbilical del adulto",
      "start": "n1",
      "nodes": [
        {
          "id": "n1",
          "kind": "decision",
          "text": "¿Pequeña y asintomática?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n2"
            },
            {
              "label": "No (crece, da síntomas o se incarcera): Reparación quirúrgica",
              "next": "n3"
            }
          ]
        },
        {
          "id": "n2",
          "kind": "action",
          "text": "Vigilancia clínica; no precisa reparación",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n3",
          "kind": "decision",
          "text": "¿Ascitis por hepatopatía avanzada?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Sí",
              "next": "n4"
            },
            {
              "label": "No",
              "next": "n5"
            }
          ]
        },
        {
          "id": "n4",
          "kind": "action",
          "text": "Diferir la reparación hasta controlar la ascitis; si es resistente, valorar TIPS o trasplante. Vigilar rotura espontánea (peritonitis y muerte)",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n5",
          "kind": "decision",
          "text": "¿Tamaño del defecto?",
          "citation": "Tu algoritmo",
          "options": [
            {
              "label": "Pequeño",
              "next": "n6"
            },
            {
              "label": "> 2 cm (Schwartz) o > 3 cm (Sabiston)",
              "next": "n7"
            }
          ]
        },
        {
          "id": "n6",
          "kind": "action",
          "text": "Cierre primario con sutura",
          "citation": "Tu algoritmo",
          "options": []
        },
        {
          "id": "n7",
          "kind": "action",
          "text": "Malla protésica, abierta o laparoscópica",
          "citation": "Tu algoritmo",
          "options": []
        }
      ]
    }
  },
  {
    "id": "caso-db-0",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Apendicitis complicada",
    "subtitle": "Dolor abdominal agudo en fosa iliaca derecha",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Caso AVANZADO",
    "chiefComplaint": "Dolor abdominal agudo en fosa iliaca derecha",
    "presentation": "El paciente de 61 años presenta un dolor abdominal agudo en la fosa iliaca derecha que comenzó hace 24 horas. El dolor ha ido en aumento y se ha vuelto constante. El paciente también refiere náuseas y un par de episodios de vómito. Al examinar al paciente, se observa que está afebril, aunque presenta ligera taquicardia. La exploración física revela sensibilidad a la palpación en la fosa iliaca derecha y se observa una defensa abdominal. No hay signos evidentes de peritonitis. Al realizar laboratorios, se reporta un recuento de glóbulos blancos de 17,000/µL con un 85% de neutrófilos, y la proteína C-reactiva (PCR) está elevada (12 mg/L). Se planifica realizar una ecografía abdominal inicial para evaluar la posibilidad de apendicitis, pero también se considera la posibilidad de absceso o flegmón.",
    "diagnosis": "Apendicitis complicada con formación de absceso",
    "patientState": {
      "severity_score": 3,
      "status_label": "estable",
      "weight_kg": 80.0,
      "vitals": {
        "heart_rate": 102,
        "blood_pressure_systolic": 130,
        "blood_pressure_diastolic": 85,
        "respiratory_rate": 18,
        "oxygen_saturation": 98,
        "temperature_celsius": 37.2,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal",
        "Náuseas",
        "Vómitos",
        "Leucocitosis",
        "Elevación de PCR"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "Paciente presenta signos de apendicitis aguda complicada, considerar el manejo no quirúrgico inicialmente dependiendo de la ecografía."
    },
    "criticalActions": [
      "Solicitar ecografía abdominal para evaluar apendicitis",
      "Iniciar fluidoterapia intravenosa",
      "Considerar inicio de antimicrobianos",
      "Planificar posible cirugía si se confirma apendicitis"
    ],
    "expectedManagement": [
      "Si se confirma apendicitis complicada con absceso, el manejo inicial incluirá la antibioterapia y drenaje del absceso. Posteriormente, según la evolución del paciente, se evaluará la necesidad de apendicectomía."
    ]
  },
  {
    "id": "caso-db-1",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Isquemia Mesentérica Aguda",
    "subtitle": "Dolor abdominal intenso y vómitos",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal intenso y vómitos",
    "presentation": "Un hombre de 74 años llega a la sala de emergencia acompañado por su esposa. Refirió un inicio súbito de dolor abdominal intenso, en cólico, que comenzó hace aproximadamente 4 horas. El dolor se localiza principalmente en la región periumbilical y ha sido constante. Además, ha presentado vómitos biliosos y distensión abdominal. La esposa menciona que el paciente tiene antecedentes recientes de claudicación intermitente y pérdida de peso no intencionada en los últimos meses. En la exploración física, el paciente se muestra ansioso y en evidente malestar, con signos de distensión abdominal moderada. A la auscultación, se notan sonidos intestinales disminuidos. El abdomen está sensible a la palpación en la región periumbilical, pero no presenta defensa o rigidez. Los análisis de laboratorio iniciales muestran un incremento de los leucocitos a 14,000/mm³ y lactato sérico elevado de 4.5 mmol/L. Se solicita un AngioTAC de abdomen para evaluar la perfusión mesentérica.",
    "diagnosis": "Isquemia mesentérica aguda",
    "patientState": {
      "severity_score": 16,
      "status_label": "estable",
      "weight_kg": 78.0,
      "vitals": {
        "heart_rate": 110,
        "blood_pressure_systolic": 90,
        "blood_pressure_diastolic": 60,
        "respiratory_rate": 24,
        "oxygen_saturation": 93,
        "temperature_celsius": 37.8,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal agudo",
        "Vómitos biliosos",
        "Distensión abdominal",
        "Trombosis mesentérica posible"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": ""
    },
    "criticalActions": [
      "Solicitar AngioTAC abdominal",
      "Iniciar fluidoterapia intravenosa",
      "Evaluar la necesidad de cirugía urgente"
    ],
    "expectedManagement": [
      "La identificación de trombosis mesentérica o isquemia no oclusiva mediante AngioTAC. Dependiendo de los hallazgos, puede requerir intervención quirúrgica a nivel intestinal o la administración de anticoagulantes. SV: fluidoterapia a alta capacidad y corrección del balance electrolítico."
    ]
  },
  {
    "id": "caso-db-2",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Isquemia Mesentérica Aguda",
    "subtitle": "Dolor abdominal intenso y distensión abdominal notable",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal intenso y distensión abdominal notable",
    "presentation": "El paciente de 63 años, masculino, se presenta en el servicio de urgencias con dolor abdominal intenso que inició hace aproximadamente 4 horas. El dolor es de tipo colico, localizado en la región periumbilical y ha empeorado progresivamente. Refiere náuseas y ha tenido un par de episodios de vómitos biliosos. El paciente tiene antecedentes de hipertensión y diabetes mellitus tipo 2 bien controlada. Declaró haber tenido episodios previos de 'angina abdominal' en las últimas semanas, especialmente tras las comidas, pero no había buscado atención médica hasta ahora. A la exploración física, se observa distensión abdominal significativo, sensibilidad generalizada y signos de defensa muscular. Los ruidos intestinales están ausentes y el paciente parece estar en estado de inquietud debido al dolor. Los laboratorios muestran leucocitosis (15,000/mm³) y elevación de la lactato sérica (2.5 mmol/L). La TC abdominal revela engrosamiento de la pared intestinal y neumatosis intestinal, sugiriendo isquemia. Se decide su manejo quirúrgico urgente debido a la sospecha de isquemia mesentérica.",
    "diagnosis": "Isquemia mesentérica aguda secundaria a trombosis de la arteria mesentérica superior",
    "patientState": {
      "severity_score": 8,
      "status_label": "estable",
      "weight_kg": 82.0,
      "vitals": {
        "heart_rate": 104,
        "blood_pressure_systolic": 90,
        "blood_pressure_diastolic": 60,
        "respiratory_rate": 22,
        "oxygen_saturation": 95,
        "temperature_celsius": 37.8,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal agudo",
        "Deshidratación",
        "Leucocitosis"
      ],
      "interventions_applied": [
        "Rehidratación IV",
        "Control de signos vitales",
        "Laboratorio de hemograma, gasometría y lactato"
      ],
      "time_elapsed_minutes": 30,
      "clinician_notes": "Paciente con dolor abdominal agudo, distensión significativa y cambios en la TC que sugieren isquemia. Se requiere atención chirúrgica urgente."
    },
    "criticalActions": [
      "Realizar cirugía exploradora inmediata",
      "Evaluar viabilidad intestinal y resección si es necesario",
      "Restaurar la perfusión intestinal",
      "Monitorear señales de sepsis postoperatoria"
    ],
    "expectedManagement": [
      "Cirugía exploradora urgente con posibilidad de resección intestinal afectada y restauración de la perfusión mesentérica."
    ]
  },
  {
    "id": "caso-db-3",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Colecistitis Aguda Litiásica",
    "subtitle": "Dolor abdominal intenso en hipocondrio derecho y fiebre.",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal intenso en hipocondrio derecho y fiebre.",
    "presentation": "La paciente es una mujer de 42 años con antecedentes de cólicos biliares recurrentes y dispepsia que ha presentado un episodio agudo de dolor en hipocondrio derecho durante las últimas 24 horas. El dolor es constante, empeora al inhalar profundamente y se irradia hacia la espalda. Se acompaña de fiebre (39°C), náuseas y vómitos. A la exploración física se evidenció sensibilidad en el hipocondrio derecho y signos de Murphy positivos. A nivel laboratorial, se observaron leucocitosis (14,000/mm³) con predominio de neutrófilos y elevación leve de transaminasas. La ecografía abdominal revela presencia de cálculos en la vesícula biliar, engrosamiento de la pared vesicular y líquido perivesicular.",
    "diagnosis": "Colecistitis aguda litiásica",
    "patientState": {
      "severity_score": 6,
      "status_label": "estable",
      "weight_kg": 72.5,
      "vitals": {
        "heart_rate": 102,
        "blood_pressure_systolic": 110,
        "blood_pressure_diastolic": 70,
        "respiratory_rate": 22,
        "oxygen_saturation": 98,
        "temperature_celsius": 39.0,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Colecistitis aguda litiásica",
        "Hipotensión leve",
        "Fiebre"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "Paciente con historia de cálculos biliares y episodio agudo de dolor abdominal. Considerar abordaje quirúrgico."
    },
    "criticalActions": [
      "Realizar ecografía abdominal para confirmar diagnóstico.",
      "Iniciar tratamiento antibiótico empírico.",
      "Evaluar la necesidad de colecistectomía urgente."
    ],
    "expectedManagement": [
      "Colecistectomía laparoscópica como manejo definitivo, además de antibióticos para la infección."
    ]
  },
  {
    "id": "caso-db-4",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Isquemia Mesentérica Aguda",
    "subtitle": "Dolor abdominal intenso y vómitos",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal intenso y vómitos",
    "presentation": "Paciente femenina de 30 años de edad se presenta a urgencias con un cuadro de dolor abdominal intenso localizado en epigastrio y región periumbilical, que ha ido en aumento en las últimas 6 horas. Refiera que el dolor se acompaña de náuseas y episodios de vómitos, sin diarrea asociada. La paciente tiene antecedentes de hipertensión arterial controlada y no reporta cirugías previas. En la exploración física, presenta distensión abdominal moderada, sensibilidad a la palpación en todo el abdomen, sin signos de defensa o rigidez abdominal. Se realiza un análisis de laboratorio que revela leucocitosis con 15,000/mm³, amilasas y lipasas dentro de rangos normales. Se solicita una tomografía abdominal que muestra signos de isquemia intestinal sin evidencia de oclusión.",
    "diagnosis": "Isquemia mesentérica aguda",
    "patientState": {
      "severity_score": 8,
      "status_label": "estable",
      "weight_kg": 65.0,
      "vitals": {
        "heart_rate": 120,
        "blood_pressure_systolic": 90,
        "blood_pressure_diastolic": 60,
        "respiratory_rate": 24,
        "oxygen_saturation": 95,
        "temperature_celsius": 37.8,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal",
        "Vómitos",
        "Leucocitosis"
      ],
      "interventions_applied": [
        "Monitoreo de signos vitales",
        "Administración de antieméticos"
      ],
      "time_elapsed_minutes": 30,
      "clinician_notes": "Paciente se observa con leve distensión abdominal. El dolor es moderado a severo y apunta hacia un cuadro de isquemia, siguiendo el protocolo se solicitará AngioTAC."
    },
    "criticalActions": [
      "Realizar AngioTAC para evaluación vascular",
      "Considerar laparotomía exploradora si se confirma isquemia",
      "Iniciar líquidos intravenosos y manejo de dolor"
    ],
    "expectedManagement": [
      "Manejo quirúrgico en caso de confirmar isquemia intestinal, posiblemente revascularización intestinal."
    ]
  },
  {
    "id": "caso-db-quemaduras",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Quemadura química",
    "subtitle": "Dolor intenso y quemaduras en la piel.",
    "topicId": "quemaduras",
    "tag": "Piel/Quemaduras",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor intenso y quemaduras en la piel.",
    "presentation": "Un hombre de 64 años se presenta en la sala de emergencias con quemaduras en la mano derecha y parte de su antebrazo debido a un accidente laboral. El paciente es un jardinero y se está quejando de un dolor intenso en la zona afectada. Refirió que estaba manejando un herbicida concentrado, y se derramó parte del líquido sobre su piel. El paciente niega haber desarrollado síntomas respiratorios o lesiones visibles en la cara. Al examen físico, se observa quemadura química de segundo grado (espesor parcial) en el dorso de la mano y antebrazo, con formación de ampollas. Su estado es general moderadamente comprometido, presenta ansiedad aguda por el dolor. Los signos vitales son lesvemente alterados, con una presión arterial de 130/85 mmHg, frecuencia cardíaca de 102 lpm, frecuencia respiratoria de 20 rpm, saturación de oxígeno del 97% en ambiente, y una temperatura de 37.8 °C. Se recomienda la irrigación abundante con suero fisiológico. Resultados de laboratorio: hemograma normal, función renal estable, análisis de electrolitos dentro de los límites normales.",
    "diagnosis": "Quemadura química por exposición a herbicida concentrado.",
    "patientState": {
      "severity_score": 3,
      "status_label": "estable",
      "weight_kg": 80.0,
      "vitals": {
        "heart_rate": 102,
        "blood_pressure_systolic": 130,
        "blood_pressure_diastolic": 85,
        "respiratory_rate": 20,
        "oxygen_saturation": 97,
        "temperature_celsius": 37.8,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Quemadura química en mano y antebrazo derecho",
        "Dolor agudo por quemadura"
      ],
      "interventions_applied": [
        "Irrigación de la zona afectada con suero fisiológico",
        "Valoración del dolor y administración de analgésicos"
      ],
      "time_elapsed_minutes": 0,
      "clinician_notes": "El paciente presenta quemaduras químicas que requieren evaluación continua y manejo adecuado. Considerar traslado a un centro de quemaduras si hay signos de complicación."
    },
    "criticalActions": [
      "Irrigar la zona afectada con agua o suero fisiológico durante al menos 20 minutos.",
      "Aplicar apósitos estériles y proporcionar analgesia adecuada.",
      "Evaluar la necesidad de derivar al paciente a un centro especializado en quemaduras."
    ],
    "expectedManagement": [
      "Manejo inicial con irrigación de la quemadura, evaluación del área quemada y tratamiento del dolor, seguido de seguimiento en un centro de quemaduras si es necesario."
    ]
  },
  {
    "id": "caso-db-6",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Apendicitis",
    "subtitle": "Dolor abdominal en el cuadrante inferior derecho desde hace 12 horas.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Caso BASICO",
    "chiefComplaint": "Dolor abdominal en el cuadrante inferior derecho desde hace 12 horas.",
    "presentation": "Paciente femenina de 83 años de edad se presenta a la sala de emergencias con dolor abdominal localizado en el cuadrante inferior derecho, que comenzó de manera súbita. Refirió náuseas y un episodio de vómitos en la mañana. A la exploración física se observa distensión abdominal leve, sensibilidad a la palpación en el cuadrante inferior derecho sin defensa ni rebote. La paciente está afebril y presenta un leve taquicardia. Laboratorios muestran un hemograma con leucocitos de 12,000/mm3 y un aumento de neutrófilos. Reactantes de fase aguda muestran elevación de la proteína C-reactiva (PCR). Se ha mantenido en ayuno desde la llegada a la emergencia. Ultrasonido abdominal indica signos compatibles con apendicitis aguda.",
    "diagnosis": "Apendicitis aguda no complicada",
    "patientState": {
      "severity_score": 7,
      "status_label": "estable",
      "weight_kg": 68.0,
      "vitals": {
        "heart_rate": 108,
        "blood_pressure_systolic": 130,
        "blood_pressure_diastolic": 80,
        "respiratory_rate": 20,
        "oxygen_saturation": 98,
        "temperature_celsius": 36.8,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal agudo",
        "Náuseas",
        "Vómitos"
      ],
      "interventions_applied": [
        "Ayuno desde la mañana de la consulta"
      ],
      "time_elapsed_minutes": 30,
      "clinician_notes": "Paciente aparentemente estable en el momento de la evaluación, con signos de deshidratación leve. Se recomienda iniciar el manejo quirúrgico tras una evaluación más extensa si los hallazgos confirman la apendicitis."
    },
    "criticalActions": [
      "Realizar una apendicectomía laparoscópica.",
      "Iniciar tratamiento con antibióticos de manera profiláctica.",
      "Monitorear signos vitales de la paciente.",
      "Realizar analgésicos según sea necesario."
    ],
    "expectedManagement": [
      "La paciente debe ser sometida a una apendicectomía laparoscópica, seguido de un manejo postoperatorio apropiado con antibióticos y observación de evolución."
    ]
  },
  {
    "id": "caso-db-7",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Apendicitis Aguda",
    "subtitle": "Dolor abdominal agudo en el cuadrante inferior derecho.",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal agudo en el cuadrante inferior derecho.",
    "presentation": "Paciente femenina de 73 años que acude a urgencias por un dolor abdominal agudo, localizado en el cuadrante inferior derecho, que comenzó hace 12 horas. Reporta náuseas y un episodio de vómito. Refiere fiebre ligera (38.2 °C) y pérdida de apetito. En la exploración física presenta sensibilidad a la palpación en el cuadrante inferior derecho, sin signos de defensa abdominal. La paciente tiene antecedentes de hipertensión controlada y enfermedad articular degenerativa. No toma medicamentos de manera regular. En el examen, se observa taquicardia ligera (100 lpm) y ligera deshidratación. Se realiza un hemograma que muestra leucocitosis (12,000/mm3) con predominio de neutrófilos (80%). La ecografía muestra un apéndice hiperplásico y líquido peritoneal.",
    "diagnosis": "Apendicitis Aguda",
    "patientState": {
      "severity_score": 7,
      "status_label": "estable",
      "weight_kg": 70.0,
      "vitals": {
        "heart_rate": 100,
        "blood_pressure_systolic": 90,
        "blood_pressure_diastolic": 60,
        "respiratory_rate": 20,
        "oxygen_saturation": 95,
        "temperature_celsius": 38.2,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal agudo",
        "Leucocitosis",
        "Hipotensión leve"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "La paciente necesita evaluación quirúrgica urgente y se debe considerar el inicio de fluidoterapia y antibióticos."
    },
    "criticalActions": [
      "Realizar una apendicectomía laparoscópica urgente.",
      "Iniciar tratamiento antibiótico empírico previo a la cirugía."
    ],
    "expectedManagement": [
      "Cirugía de apendicectomía laparoscópica con manejo antibiótico postoperatorio."
    ]
  },
  {
    "id": "caso-db-8",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Causas no obstructivas",
    "subtitle": "Intenso dolor en el abdomen superior",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso AVANZADO",
    "chiefComplaint": "Intenso dolor en el abdomen superior",
    "presentation": "Una paciente de 34 años, traída a la sala de emergencias en ambulancia, se encuentra en posición fetal, quejándose de un dolor insidioso pero intenso en el abdomen superior que irradia hacia la espalda. Su piel está ligeramente pálida y muestra sudoración en la frente. A su llegada, comenta entre quejidos: \"Siento que me quema el estómago y no puedo comer nada por el dolor\". La nota de triage revela signos vitales: TA 90/60 mmHg, FC 115 lpm, FR 24 rpm, T 37.8°C y SatO2 99%.",
    "diagnosis": "Pancreatitis aguda hemorrágica por consumo excesivo de alcohol",
    "patientState": {
      "severity_score": 35,
      "status_label": "compensado",
      "weight_kg": 68.0,
      "vitals": {
        "heart_rate": 115,
        "blood_pressure_systolic": 90,
        "blood_pressure_diastolic": 60,
        "respiratory_rate": 24,
        "oxygen_saturation": 99,
        "temperature_celsius": 37.8,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal severo",
        "Hipotensión ortostática",
        "Náuseas y vómitos frecuentes"
      ],
      "interventions_applied": [
        "Monitoreo continuo de signos vitales",
        "Valoración clínica inicial",
        "Administración de oxígeno"
      ],
      "time_elapsed_minutes": 15,
      "clinician_notes": "La paciente presenta signos de deshidratación y posible choque hipovolémico secundario a la pancreatitis. Se debe actuar rápidamente para estabilizar su estado hemodinámico y evaluar la necesidad de intervenciones adicionales.",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Establecer acceso venoso y iniciar fluidoterapia",
      "Realizar un control y análisis de enzimas pancreáticas",
      "Solicitar una tomografía computarizada abdominal para evaluar necrosis pancreática",
      "Monitorear signos vitales y signos de shock",
      "Consultar cirugía si hay evidencia de complicaciones"
    ],
    "expectedManagement": [
      "Manejo de soporte con fluidos intravenosos, control del dolor, evaluación de la causa, y seguimiento con imágenes para detectar complicaciones como necrosis pancreática."
    ]
  },
  {
    "id": "caso-db-9",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Shock séptico",
    "subtitle": "Dificultad respiratoria y confusión.",
    "topicId": "trauma",
    "tag": "Trauma",
    "badge": "Caso AVANZADO",
    "chiefComplaint": "Dificultad respiratoria y confusión.",
    "presentation": "Un hombre de 79 años es traído a la sala de emergencia en ambulancia por su hija, quien reporta que ha tenido fiebre alta, escalofríos y una tos productiva con esputo húmedo en los últimos dos días. Al llegar, el paciente está sentado y presenta una postura encorvada, con sudor frío en la frente. Su piel está pálida y sus labios ligeramente cianóticos. Con voz temblorosa, dice: 'No puedo respirar bien ... me siento débil'. En el triage, se registra una temperatura de 38.9°C, una frecuencia cardíaca de 120 lpm, presión arterial de 85/55 mmHg y una frecuencia respiratoria de 30 rpm con una saturación de oxígeno del 88%.",
    "diagnosis": "Neumonía adquirida en la comunidad que progresó a sepsis y shock séptico.",
    "patientState": {
      "severity_score": 50,
      "status_label": "descompensandose",
      "weight_kg": 70.0,
      "vitals": {
        "heart_rate": 120,
        "blood_pressure_systolic": 85,
        "blood_pressure_diastolic": 55,
        "respiratory_rate": 30,
        "oxygen_saturation": 88,
        "temperature_celsius": 38.9,
        "glasgow_coma_scale": 14
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Neumonía adquirida en la comunidad",
        "Shock séptico",
        "Confusión postural"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "Paciente en estado de incremento de la gravedad, presenta taquicardia y disminución de presión arterial.",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Iniciar resucitación con líquidos intravenosos",
      "Iniciar antibióticos de amplio espectro",
      "Monitorear signos vitales de manera continua",
      "Valorar necesidad de soporte vasopresor"
    ],
    "expectedManagement": [
      "El manejo definitivo incluye la administración de líquidos, antibióticos, soporte hemodinámico y, si es necesario, cuidados intensivos para manejo ventilatorio y monitoreo."
    ]
  },
  {
    "id": "caso-db-10",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Apendicitis aguda",
    "subtitle": "Dolor abdominal en el cuadrante inferior derecho",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal en el cuadrante inferior derecho",
    "presentation": "Paciente masculino de 25 años, acudió al servicio de urgencias acompañado por su madre, quien menciona que el dolor comenzó hace 24 horas, siendo inicialmente difuso, pero ahora localizado en la fosa ilíaca derecha. El paciente camina encorvado, presenta palidez y ligera sudoración. Al preguntar, menciona que el dolor es constante y se intensifica al movimiento. En la evaluación inicial, presenta una presión arterial de 110/70 mmHg, frecuencia cardíaca de 98 lpm, frecuencia respiratoria de 20 rpm, temperatura de 38.2 °C y saturación de oxígeno del 98%.",
    "diagnosis": "Apendicitis aguda complicada con perforación",
    "patientState": {
      "severity_score": 7,
      "status_label": "estable",
      "weight_kg": 75.0,
      "vitals": {
        "heart_rate": 98,
        "blood_pressure_systolic": 110,
        "blood_pressure_diastolic": 70,
        "respiratory_rate": 20,
        "oxygen_saturation": 98,
        "temperature_celsius": 38.2,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal",
        "Fiebre",
        "Náuseas"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "Paciente presenta signos de alerta para apendicitis con febrilidad y dolor en fosa ilíaca derecha.",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Realizar laparoscopia diagnóstica",
      "Iniciar tratamiento antibiótico intravenoso",
      "Evaluar parámetros de inflamación",
      "Realizar apendicectomía si se confirma apendicitis aguda"
    ],
    "expectedManagement": [
      "Apendicectomía laparoscópica, acompañado de antibioterapia adecuada y manejo de dolor postoperatorio."
    ]
  },
  {
    "id": "caso-db-11",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Apendicitis aguda no complicada",
    "subtitle": "Dolor abdominal en la fosa ilíaca derecha",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso BASICO",
    "chiefComplaint": "Dolor abdominal en la fosa ilíaca derecha",
    "presentation": "La paciente de 29 años acude al servicio de urgencias acompañada por su madre, quien comenta que empezó a quejarse de un dolor abdominal creciente hace 24 horas. La paciente está ligeramente sudorosa, en posición de antálgica (encorvada hacia delante) y manifiesta un dolor intenso en el cuadrante inferior derecho. Al interrogarla, expresa: 'Siento como si algo me estuviera doliendo muy fuerte aquí'. En el triage, presenta signos vitales: presión arterial 110/70 mmHg, frecuencia cardíaca 88 lpm, frecuencia respiratoria 16 rpm, temperatura 38.2 °C, y saturación de oxígeno 98% en aire ambiente.",
    "diagnosis": "Apendicitis aguda",
    "patientState": {
      "severity_score": 2,
      "status_label": "estable",
      "weight_kg": 65.0,
      "vitals": {
        "heart_rate": 88,
        "blood_pressure_systolic": 110,
        "blood_pressure_diastolic": 70,
        "respiratory_rate": 16,
        "oxygen_saturation": 98,
        "temperature_celsius": 38.2,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal en la fosa ilíaca derecha",
        "Fiebre"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Realizar examen físico abdominal detallado",
      "Solicitar hemograma completo con leucograma",
      "Solicitar una ecografía abdominal",
      "Evaluar el score de Alvarado o AIR"
    ],
    "expectedManagement": [
      "Apendicectomía laparoscópica tras confirmación del diagnóstico de apendicitis aguda."
    ]
  },
  {
    "id": "caso-db-12",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Sepsis y Choque Séptico",
    "subtitle": "Fiebre alta, escalofríos y dolor en el costado derecho con estado confusional agudo.",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso BASICO",
    "chiefComplaint": "Fiebre alta, escalofríos y dolor en el costado derecho con estado confusional agudo.",
    "presentation": "ANAMNESIS: Paciente femenina de 63 años, acude traída por su hija debido a cuadro de 48 horas de evolución caracterizado por fiebre no cuantificada, escalofríos intensos, disuria y dolor lumbar derecho. Desde hace 6 horas la familia la nota aletargada, diaforética y desorientada en tiempo. Sin antecedentes crónico-degenerativos conocidos ni alergias. EXPLORACIÓN FÍSICA: Somnolienta, responde a estímulos verbales (Glasgow 14/15, O4 V4 M6). Mucosas orales secas, palidez cutáneo-mucosa e hiperemia. Campos pulmonares bien ventilados con taquipnea leve. Ruidos cardíacos rítmicos, taquicárdicos, sin soplos. Abdomen blando, depresible, doloroso a la palpación profunda en flanco y fosa ilíaca derechas, sin signos de irritación peritoneal. Puño percusión renal derecha (signo de Giordano) marcadamente positiva. Llenado capilar de 3.5 segundos. Pulsos periféricos débiles. LABORATORIOS ESPERADOS: Leucocitos 18,500/mm³ con 88% de neutrófilos y 8% de bandas; Hemoglobina 12.8 g/dL; Plaquetas 145,000/mm³; Lactato sérico 3.4 mmol/L; Nitrógeno de urea en sangre (BUN) 28 mg/dL; Creatinina 1.4 mg/dL; EGO con piuria masiva (>50 leucocitos por campo), nitritos positivos y bacterias abundantes.",
    "diagnosis": "Choque séptico secundario a pielonefritis aguda derecha (Urosepsis)",
    "patientState": {
      "severity_score": 50,
      "status_label": "descompensandose",
      "weight_kg": 65.0,
      "vitals": {
        "heart_rate": 115,
        "blood_pressure_systolic": 88,
        "blood_pressure_diastolic": 54,
        "respiratory_rate": 24,
        "oxygen_saturation": 94,
        "temperature_celsius": 38.9,
        "glasgow_coma_scale": 14
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Hipotensión arterial",
        "Taquicardia",
        "Síndrome de Respuesta Inflamatoria Sistémica (SIRS)",
        "Suspecha de sepsis de origen urinario"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Iniciar reanimación hídrica agresiva con solución cristaloide isotónica (Hartmann o Fisiológica 0.9%) a 30 mL/kg en bolo.",
      "Solicitar hemocultivos (al menos dos pares) y urocultivo antes de la administración del antibiótico.",
      "Iniciar antibioticoterapia de amplio espectro por vía intravenosa de forma inmediata (dentro de la primera hora).",
      "Solicitar medición de lactato sérico inicial para evaluar hipoperfusión tisular.",
      "Evaluar necesidad de vasopresor (norepinefrina) si la hipotensión persiste tras la carga hídrica inicial para mantener una PAM ≥ 65 mmHg."
    ],
    "expectedManagement": [
      "Reanimación hídrica guiada por metas con cristaloides isotónicos (30 mL/kg), toma previa de hemocultivos y urocultivo, inicio inmediato de esquema antibiótico empírico intravenoso de amplio espectro (ej. ceftriaxona o piperacilina/tazobactam), monitoreo de lactato sérico y gasto urinario mediante sonda Foley. Si persiste la hipotensión arterial (PAM < 65 mmHg) a pesar de la resucitación hídrica, iniciar infusión de norepinefrina como vasopresor de primera elección."
    ]
  },
  {
    "id": "caso-db-13",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Absceso diverticular",
    "subtitle": "Dolor abdominal intenso y fiebre",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal intenso y fiebre",
    "presentation": "El paciente es un hombre de 47 años con antecedentes de diabetes tipo 2 y hipertensión controlada, quien fue traído por su esposa a la sala de urgencias. Según relata, ha presentado dolor abdominal moderado en el cuadrante inferior izquierdo durante los últimos tres días, que ha incrementado en intensidad y se ha acompañado de fiebre y escalofríos. En el triage, se observa al paciente en posición fetal, con sudoración y pálido, indicando signos visibles de angustia. Los signos vitales en triage muestran una presión arterial de 100/70 mmHg, frecuencia cardíaca de 110 lpm, frecuencia respiratoria de 22 rpm y temperatura de 38.5 °C.",
    "diagnosis": "Absceso diverticular",
    "patientState": {
      "severity_score": 35,
      "status_label": "compensado",
      "weight_kg": 85.0,
      "vitals": {
        "heart_rate": 110,
        "blood_pressure_systolic": 100,
        "blood_pressure_diastolic": 70,
        "respiratory_rate": 22,
        "oxygen_saturation": 96,
        "temperature_celsius": 38.5,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal intenso",
        "Fiebre",
        "Deshidratación leve"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "El paciente muestra signos de descompensación y se requiere una evaluación cuidadosa y rápida.",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Solicitar estudios de imagen para confirmar diagnóstico.",
      "Iniciar tratamiento antibiótico de amplio espectro.",
      "Evaluar la necesidad de drenaje percutáneo del absceso."
    ],
    "expectedManagement": [
      "Manejo quirúrgico mediante drenaje percutáneo, seguido de una evaluación de la necesidad de reparación quirúrgica definitiva posteriormente."
    ]
  },
  {
    "id": "caso-db-14",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Diverticulitis Aguda",
    "subtitle": "Dolor abdominal en el lado izquierdo con fiebre",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal en el lado izquierdo con fiebre",
    "presentation": "La paciente es una mujer de 64 años, con antecedentes de diabetes tipo 2 mal controlada. Es traída a la sala de emergencias por su hija, quien informa que ha tenido un dolor abdominal intenso en el cuadrante inferior izquierdo durante las últimas 24 horas, asociado con fiebre y náuseas. Al llegar, la paciente parece pálida y ligeramente deshidratada, se encuentra en posición fetal y se queja de dolor persistente. En la evaluación de triage, los signos vitales son: FC 101 lpm, TA 90/60 mmHg, FR 22 rpm y SpO2 95% en aire ambiente. Está consciente pero con dificultad para hablar debido al dolor. Se observa un abdomen distendido a la palpación, con sensibilidad marcada en el cuadrante inferior izquierdo. ",
    "diagnosis": "Diverticulitis aguda complicada",
    "patientState": {
      "severity_score": 35,
      "status_label": "compensado",
      "weight_kg": 72.0,
      "vitals": {
        "heart_rate": 101,
        "blood_pressure_systolic": 90,
        "blood_pressure_diastolic": 60,
        "respiratory_rate": 22,
        "oxygen_saturation": 95,
        "temperature_celsius": 38.5,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Diverticulitis aguda",
        "Deshidratación",
        "Diabetes tipo 2 mal controlada"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "Paciente presenta signos de deshidratación y se sospecha diverticulitis complicada. Se requiere evaluación urgente y tratamiento.",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Realizar estudios de imagen (TAC abdominal) para confirmar diagnóstico",
      "Iniciar tratamiento intravenoso con líquidos y antibióticos",
      "Evaluar necesidad de intervención quirúrgica ante complicaciones"
    ],
    "expectedManagement": [
      "Manejo inicial con resucitación de líquidos, administración de antibióticos y evaluación para posible cirugía en caso de perforación o absceso."
    ]
  },
  {
    "id": "caso-db-15",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Úlcera Péptica Perforada",
    "subtitle": "Dolor abdominal súbito e intenso de 6 horas de evolución",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal súbito e intenso de 6 horas de evolución",
    "presentation": "Paciente femenina de 70 años de edad, con antecedente de artrosis severa en rodillas en tratamiento crónico con piroxicam y ketorolaco automedicados, además de fibrilación auricular no valvular en tratamiento con rivaroxabán. Acude por dolor abdominal de inicio súbito tipo punzante/quemante en epigastrio, que rápidamente se generalizó a todo el abdomen y se irradia a la región escapular derecha. A la exploración física: facies de dolor agudo, abdomen rígido 'en tabla' con hiperestesia, hiperbaralgesia, rebote positivo (signo de Blumberg generalizado) y pérdida de la matidez hepática (signo de Jobert). Laboratorios esperados: Leucocitosis de 16,500/mm3 con 88% de neutrófilos y bandemia del 6%, acidosis metabólica leve con lactato de 2.8 mmol/L, creatinina 1.3 mg/dL. Radiografía de tórax en bipedestación o TC de abdomen mostrará neumoperitoneo subdiafragma manifiesto (signo de la luna creciente). El diagnóstico es una úlcera péptica duodenal perforada con peritonitis química/bacteriana secundaria.",
    "diagnosis": "Úlcera péptica duodenal perforada complicada con peritonitis secundaria",
    "patientState": {
      "severity_score": 45,
      "status_label": "compensado",
      "weight_kg": 62.0,
      "vitals": {
        "heart_rate": 112,
        "blood_pressure_systolic": 95,
        "blood_pressure_diastolic": 60,
        "respiratory_rate": 24,
        "oxygen_saturation": 94,
        "temperature_celsius": 37.8,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "fibrilacion_auricular",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Abdomen agudo peritoneal por sospecha de perforación de víscera hueca",
        "Hipotensión e taquicardia secundaria a sepsis intraabdominal inicial",
        "Fibrilación auricular descompensada",
        "Uso reciente de anticoagulación oral directa y AINEs"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Indicar ayuno (NPO), canalizar dos vías venosas periféricas de grueso calibre y comenzar reanimación agresiva con cristaloides IV.",
      "Iniciar manejo farmacológico urgente con inhibidor de bomba de protones IV (omeprazol o pantoprazol) y esquema antibiótico IV de amplio espectro (ej. ceftriaxona + metronidazol).",
      "Solicitar radiografía de tórax de pie / abdomen o TC abdominal para confirmar neumoperitoneo.",
      "Programar e indicar laparotomía exploradora o laparoscopia de urgencia para cierre primario de la perforación con parche de epiplón (técnica de Graham)."
    ],
    "expectedManagement": [
      "Reanimación hidroelectrolítica con solución salina/Ringer lactato, suspensión de anticoagulante y AINEs, cobertura antibiótica de amplio espectro, IVP a dosis altas, evaluación por cirugía general y corrección quirúrgica mediante cierre primario con parche de epiplón (técnica de Graham) más lavado peritoneal exhaustivo."
    ]
  },
  {
    "id": "caso-db-16",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Isquemia Mesentérica Aguda",
    "subtitle": "Dolor abdominal intenso y vómitos",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal intenso y vómitos",
    "presentation": "Paciente masculino de 73 años de edad es traído por su hija a la sala de emergencias, después de que comenzaron súbitamente dolores abdominales severos. Ella menciona que su padre ha estado quejándose de pérdida de apetito y de náuseas durante los últimos días, pero nunca había experimentado dolor tan intenso. A su llegada, el paciente se encuentra semi-fowler, con palidez y sudoración profusa. Refiriendo: \"El dolor es como un calambre y me duele todo el abdomen\". En el triage, los signos vitales son: presión arterial 98/60 mmHg, frecuencia cardíaca 122 lpm, frecuencia respiratoria 24 rpm, saturación de oxígeno 96% en aire ambiente, temperatura 37.8°C.",
    "diagnosis": "Isquemia mesentérica aguda",
    "patientState": {
      "severity_score": 35,
      "status_label": "compensado",
      "weight_kg": 80.0,
      "vitals": {
        "heart_rate": 122,
        "blood_pressure_systolic": 98,
        "blood_pressure_diastolic": 60,
        "respiratory_rate": 24,
        "oxygen_saturation": 96,
        "temperature_celsius": 37.8,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Hipotensión",
        "Taquicardia",
        "Dolor abdominal severo"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Evaluar y estabilizar el estado hemodinámico del paciente",
      "Realizar estudios de imagen para confirmar la isquemia",
      "Iniciar tratamiento antibiótico y fluidoterapia intravenosa",
      "Valorar la necesidad de cirugía urgente"
    ],
    "expectedManagement": [
      "Manejo quirúrgico urgente de la isquemia mesentérica, que puede incluir resección intestinal si hay necrosis"
    ]
  },
  {
    "id": "caso-db-17",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Complicaciones de la pancreatitis",
    "subtitle": "Dolor abdominal intenso y persistente.",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal intenso y persistente.",
    "presentation": "Paciente masculino de 53 años con antecedentes de consumo crónico de alcohol y diabetes tipo 2 descontrolada, que presenta dolor abdominal en epigastrio que irradia a la espalda, calificado como 9 en una escala de 10. Refleja signos de sudoración y palidez, y habla en frases cortas. El paciente también refiere náuseas y vómitos. A la exploración física se observan distensión abdominal y sensibilidad en el epigastrio. Los signos vitales al ingreso: TA 90/60 mmHg, FC 110 lpm, FR 24 rpm, temperatura 37.8° C. El paciente está ansioso y parece encontrarse en estado leve de shock hipovolémico.",
    "diagnosis": "Pancreatitis aguda severa con complicaciones",
    "patientState": {
      "severity_score": 35,
      "status_label": "compensado",
      "weight_kg": 85.0,
      "vitals": {
        "heart_rate": 110,
        "blood_pressure_systolic": 90,
        "blood_pressure_diastolic": 60,
        "respiratory_rate": 24,
        "oxygen_saturation": 95,
        "temperature_celsius": 37.8,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "taquicardia_sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Deshidratación",
        "Dolor abdominal",
        "Hipotensión"
      ],
      "interventions_applied": [
        "Monitoreo continuo de signos vitales",
        "Acceso venoso bilateral"
      ],
      "time_elapsed_minutes": 0,
      "clinician_notes": "Paciente con alto riesgo de pancreatitis severa debido a antecedentes de consumo crónico de alcohol y diabetes descontrolada. Importante monitorizar la evolución y considerar el manejo en unidad crítica si la condición no mejora rápidamente.",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Estabilizar el estado hemodinámico del paciente",
      "Iniciar fluidoterapia intravenosa",
      "Obtener estudios de imagen (ecografía abdominal o TAC)",
      "Evaluar la necesidad de intervención quirúrgica"
    ],
    "expectedManagement": [
      "Manejo en UCI, fluidoterapia agresiva, evaluación quirúrgica para necrosis pancreática si se evidencia, manejo del dolor, y monitoreo constante de los signos vitales."
    ]
  },
  {
    "id": "caso-db-18",
    "type": "casos",
    "subtype": "hospital_case",
    "title": "Caso de Guardia: Trombosis Venosa Mesentérica",
    "subtitle": "Dolor abdominal sordo, progresivo y náuseas de 3 días de evolución",
    "topicId": "colon",
    "tag": "General",
    "badge": "Caso INTERMEDIO",
    "chiefComplaint": "Dolor abdominal sordo, progresivo y náuseas de 3 días de evolución",
    "presentation": "Paciente masculino de 80 años con antecedentes de hipertensión arterial, diabetes mellitus tipo 2 bien controlada y tabaquismo suspendido hace 10 años. Acude por dolor abdominal difuso de 72 horas de evolución, de carácter sordo pero de intensidad creciente (7/10), mal localizado, acompañado de distensión abdominal leve, náuseas, anorexia e hiporexia. Refiere disminución en la evacuación de gases y heces en las últimas 24 horas, sin rectorragia evidente ni hematemesis. A la exploración física: consciente, orientado, con deshidratación mucocutánea leve. Abdomen blando, distendido, con dolor moderado a la palpación profunda de forma difusa, más acentuado en mesogastrio, sin francos datos de irritación peritoneal (Signo de Blumberg negativo, no hay rigidez muscular ni defensa involuntaria). Ruidos hidroaéreos disminuidos en frecuencia. Laboratorios esperados: Leucocitos 13,800/mm3 con 78% de neutrófilos, Hemoglobina 15.2 g/dL, Hematocrito 46%, Plaquetas 240,000/mm3, Creatinina 1.3 mg/dL, Nitrógeno de urea 26 mg/dL, Lactato sérico 2.1 mmol/L (levemente elevado), Sodio 137 mEq/L, Potasio 4.1 mEq/L, Gasometría arterial con pH 7.36, HCO3 21 mEq/L, PaCO2 36 mmHg. AngioTAC abdominal (fase venosa/portal): muestra defecto de llenado por trombo intraluminal extenso en la vena mesentérica superior con engrosamiento y edema de la pared de asas de yeyuno e íleon, congestión mesentérica y pequeña cantidad de líquido libre en cavidad pélvica, sin neumoperitoneo ni gas venoso portal.",
    "diagnosis": "Trombosis Venosa Mesentérica Aguda con isquemia intestinal no transmural",
    "patientState": {
      "severity_score": 35,
      "status_label": "compensado",
      "weight_kg": 72.0,
      "vitals": {
        "heart_rate": 98,
        "blood_pressure_systolic": 115,
        "blood_pressure_diastolic": 75,
        "respiratory_rate": 20,
        "oxygen_saturation": 95,
        "temperature_celsius": 37.4,
        "glasgow_coma_scale": 15
      },
      "heart_rhythm": "sinusal",
      "on_ventilator": false,
      "ventilator": null,
      "fluids": {
        "intake_ml": 0.0,
        "output_ml": 0.0,
        "npo": true,
        "iv_rate_ml_per_h": 0.0
      },
      "active_problems": [
        "Dolor abdominal difuso progresivo",
        "Sospecha de isquemia intestinal / trombosis venosa mesentérica",
        "Deshidratación leve"
      ],
      "interventions_applied": [],
      "time_elapsed_minutes": 0,
      "clinician_notes": "",
      "strikes": 0,
      "last_harm": null
    },
    "criticalActions": [
      "Indicar ayuno (NPO) e iniciar reanimación con soluciones cristaloides endovenosas",
      "Solicitar Tomografía Computarizada de Abdomen con contraste IV (AngioTAC con fase venosa)",
      "Iniciar anticoagulación sistémica inmediata con Heparina No Fraccionada o Heparina de Bajo Peso Molecular a dosis terapéutica",
      "Realizar valoración urgente por Cirugía General para vigilancia estrecha y descartar progresión a peritonitis/necrosis transmural"
    ],
    "expectedManagement": [
      "Inicio inmediato de anticoagulación parenteral continua (heparina no fraccionada o heparina de bajo peso molecular), reposo intestinal (ayuno), reposición de volumen intravascular con cristaloides y monitorización quirúrgica estrecha. En ausencia de signos de peritonitis o necrosis intestinal, se prefiere el manejo conservador no operatorio; si presenta deterioro o peritonitis, indicación de laparotomía exploradora urgente."
    ]
  },
  {
    "id": "caso-puem-piel",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Piel y Tejido Subcutáneo",
    "subtitle": "1 casos clínicos seriados con 3 reactivos comentados paso a paso.",
    "topicId": "piel",
    "tag": "Piel/Quemaduras",
    "badge": "1 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-31",
        "number": 31,
        "title": "Infección del Sitio Quirúrgico en Cirugía Colorrectal",
        "topic": "Infección de Sitio Qx",
        "context": "Hombre de 62 años en el día 6 de sigmoidectomía y colostomía por diverticulitis perforada, presenta fiebre de 38.5°C, leucocitosis 14,000, aumento de volumen, hiperemia e hipertermia del sitio quirúrgico.",
        "questions": [
          {
            "id": "puem-r2-c31-q2",
            "ordinal": 2,
            "stem": "La conducta a seguir:",
            "options": [
              "Solicitar TC abdominal",
              "Drenar sitio quirúrgico",
              "Cambiar de esquema antibiótico",
              "Solicitar USG de pared abdominal"
            ],
            "answer_index": 1,
            "correct_text": "Drenar sitio quirúrgico",
            "explanation": "Una infección superficial del sitio quirúrgico (aumento de volumen, hiperemia, calor y fiebre) se trata abriendo la herida: retirar los puntos e incisión y drenaje, y se agrega antibiótico si hay respuesta sistémica importante, como fiebre mayor de 38.5°C, frecuencia cardiaca mayor de 110 o leucocitos mayores de 12,000 (IDSA 2014). La TC o el ultrasonido se reservan para sospecha de colección profunda o fuga anastomótica, y cambiar el antibiótico sin drenar no resuelve el foco.",
            "topic": "Infección de Sitio Qx"
          },
          {
            "id": "puem-r2-c31-q3",
            "ordinal": 3,
            "stem": "Según la clasificación de heridas, esta corresponde a una herida:",
            "options": [
              "Sucia",
              "Supurativa",
              "Contaminada",
              "Limpia contaminada"
            ],
            "answer_index": 0,
            "correct_text": "Sucia",
            "explanation": "Una sigmoidectomía por diverticulitis perforada se realiza en un campo con pus y contaminación fecal, y esa cirugía corresponde a una herida sucia. Una herida contaminada tiene derrame abierto reciente sin pus, la limpia contaminada es la que entra al tubo digestivo sin contaminación importante, y «supurativa» no es una categoría de la clasificación.",
            "topic": "Infección de Sitio Qx"
          },
          {
            "id": "puem-r2-c31-q4",
            "ordinal": 4,
            "stem": "Por frecuencia el microorganismo encontrado en este tipo de heridas es:",
            "options": [
              "Escherichia coli",
              "Clostridium difficile",
              "Enterobacter cloacae",
              "Cryptococcus neoformans"
            ],
            "answer_index": 0,
            "correct_text": "Escherichia coli",
            "explanation": "El microorganismo que más se aísla en las infecciones del sitio quirúrgico tras cirugía colorrectal es Escherichia coli, parte de la flora entérica que contamina la herida. Clostridium difficile causa colitis, Enterobacter es menos frecuente y Cryptococcus es un hongo de pacientes inmunodeprimidos.",
            "topic": "Infección de Sitio Qx"
          }
        ],
        "topicId": "piel"
      }
    ]
  },
  {
    "id": "caso-puem-quemaduras",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Quemaduras y Lesión Inhalatoria",
    "subtitle": "3 casos clínicos seriados con 15 reactivos comentados paso a paso.",
    "topicId": "quemaduras",
    "tag": "Piel/Quemaduras",
    "badge": "3 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-25",
        "number": 25,
        "title": "Quemaduras Extensas y Reanimación con Fórmula de Parkland",
        "topic": "Quemaduras",
        "context": "Hombre de 37 años quien sufrió hace 30 minutos quemaduras por flamazo, en cara, cara anterior de miembro superior derecho, y pequeñas zonas en hipocondrio derecho. SCQ 30%. EF: cara con zonas de quemaduras de primer grado, edema palpebral, edema de la mucosa nasal y vibrisas quemadas; cuello zonas con flictenas, abdomen con quemaduras de segundo grado e hipocondrio derecho con flictenas; extremidad superior derecha con quemaduras de segundo grado. Peso: 80 kg, talla 1.72 m, FR 28, FC 100, TA 120/70 y temperatura de 37°C.",
        "questions": [
          {
            "id": "puem-r2-c25-q1",
            "ordinal": 1,
            "stem": "Se inicia manejo con líquidos en base a esquema del Hospital Parkland que es:",
            "options": [
              "Sol. Hartmann 3.5 ml x metro cuadrado de SCQ",
              "Sol. Isotónica 0.9% 1.5 ml x kg de peso x SCQ",
              "Sol. Hartmann 2.5 ml x % SCQ para 24 h x kg de peso",
              "Sol. Hartmann 4 ml x SCQ para 24 h x kg de peso"
            ],
            "answer_index": 3,
            "correct_text": "Sol. Hartmann 4 ml x SCQ para 24 h x kg de peso",
            "explanation": "La fórmula de Parkland es: Solución Ringer lactato / Hartmann a 4 ml x kg de peso x % de SCQ para las primeras 24 horas (50% en las primeras 8 horas desde la quemadura y 50% en las 16 horas restantes).",
            "topic": "Quemaduras"
          },
          {
            "id": "puem-r2-c25-q2",
            "ordinal": 2,
            "stem": "En este paciente, además de BH, ES, QS, y examen general de orina solicita:",
            "options": [
              "Broncoscopia",
              "Tele de tórax",
              "Laringoscopia",
              "Enzimas cardiacas"
            ],
            "answer_index": 2,
            "correct_text": "Laringoscopia",
            "explanation": "Ante quemaduras faciales con vibrisas quemadas y edema de mucosa nasal se sospecha lesión por inhalación y se realiza laringoscopia para evaluar edema laríngeo y asegurar vía aérea.",
            "topic": "Quemaduras"
          },
          {
            "id": "puem-r2-c25-q3",
            "ordinal": 3,
            "stem": "La principal complicación inmediata puede ser:",
            "options": [
              "Neumonía",
              "Atelectasia",
              "Insuficiencia cardiaca",
              "Insuficiencia renal aguda"
            ],
            "answer_index": 3,
            "correct_text": "Insuficiencia renal aguda",
            "explanation": "La hipovolemia masiva no corregida y la mioglobinuria/hemoglobinuria inducen necrosis tubular aguda e insuficiencia renal aguda.",
            "topic": "Quemaduras"
          },
          {
            "id": "puem-r2-c25-q4",
            "ordinal": 4,
            "stem": "Dentro del tratamiento inmediato quirúrgico, en condiciones ideales, se debe realizar:",
            "options": [
              "Manejo oclusivo",
              "Uso de aloinjertos",
              "Excusión tangencial",
              "Debridación temprana"
            ],
            "answer_index": 3,
            "correct_text": "Debridación temprana",
            "explanation": "La escisión tangencial y debridación temprana reducen la carga bacteriana y disminuyen la respuesta hipermetabólica e inflamatoria sistémica.",
            "topic": "Quemaduras"
          },
          {
            "id": "puem-r2-c25-q5",
            "ordinal": 5,
            "stem": "En qué posición debe permanecer el paciente, para disminuir la posibilidad de formación de sinequias:",
            "options": [
              "Fetal",
              "Dossier",
              "Actitud libre",
              "Cuello y miembro torácico en extensión"
            ],
            "answer_index": 3,
            "correct_text": "Cuello y miembro torácico en extensión",
            "explanation": "Para prevenir contracturas cicatrizales y sinequias en cuello y axila, el paciente debe mantenerse con cuello y miembro torácico en extensión.",
            "topic": "Quemaduras"
          }
        ],
        "topicId": "quemaduras"
      },
      {
        "id": "puem-r2-case-35",
        "number": 35,
        "title": "Sepsis e Infección por Catéter en Paciente Gran Quemado",
        "topic": "Quemaduras / Sepsis",
        "context": "Hombre de 53 años quien sufrió quemaduras de 2do y 3er grado en el 53% de SC, requirió catéteres intravasculares y vesical. Al día 15 presenta fiebre cotidiana de 39°C, 18 días después se le aplican injertos. En hemocultivo periférico sale S aureus y E Coli tratado inicialmente con cefotaxima, teicoplanina y posteriormente vancomicina. Se pierden varios injertos; a los 45 días persiste la fiebre. EF: TA 110/70, FC 104, FR 32, Temp 38.5°C. alerta, pálido, áreas denudadas sin datos de infección, sangrantes con edema; Hb 7, leucocitos 12,000, 78% neutrófilos. EGO: eritrocitos y proteínas. Cultivo transcateter: Staphylococcus simulans, periféricos S aureus, S simulans por método automatizado: oxacilina =R, vancomicina=S.",
        "questions": [
          {
            "id": "puem-r2-c35-q1",
            "ordinal": 1,
            "stem": "El diagnóstico inicial es:",
            "options": [
              "Sepsis",
              "Neumonía",
              "Pielonefritis",
              "Tromboflebitis séptica"
            ],
            "answer_index": 0,
            "correct_text": "Sepsis",
            "explanation": "Fiebre persistente de 39°C, taquicardia, taquipnea, bacteriemia por S. aureus y E. coli y antecedente de catéteres y quemaduras extensas configuran una sepsis, es decir una respuesta sistémica a una infección. La neumonía y la pielonefritis son focos posibles pero el cuadro y el hemocultivo apuntan a bacteriemia, y la tromboflebitis séptica sería una causa de la sepsis, no el diagnóstico inicial.",
            "topic": "Quemaduras / Sepsis"
          },
          {
            "id": "puem-r2-c35-q2",
            "ordinal": 2,
            "stem": "Además de hemocultivo, indica:",
            "options": [
              "Ecocardiograma",
              "USG, angiorresonancia",
              "Angiografía y TC helicoidal de tórax",
              "Gasometría, electrólitos séricos y osmolaridad"
            ],
            "answer_index": 0,
            "correct_text": "Ecocardiograma",
            "explanation": "Una bacteriemia por S. aureus obliga a buscar endocarditis y otros focos metastásicos, por eso además del hemocultivo se indica un ecocardiograma. La gasometría y los electrolitos son útiles pero no buscan el foco, y la angiografía con TC de tórax o el ultrasonido con angiorresonancia no son el estudio inicial.",
            "topic": "Quemaduras / Sepsis"
          },
          {
            "id": "puem-r2-c35-q3",
            "ordinal": 3,
            "stem": "Por frecuencia en el hemocultivo espera encontrar:",
            "options": [
              "Candida albicans",
              "Escherichia coli",
              "S. aureus",
              "Pseudomonas aeruginosa"
            ],
            "answer_index": 2,
            "correct_text": "S. aureus",
            "explanation": "Por frecuencia el germen que se espera en el hemocultivo de un paciente quemado con catéteres es Staphylococcus aureus, un colonizador de piel y catéteres. E. coli, Pseudomonas y Candida pueden aparecer, pero el S. aureus es el más común y el que se aísla en los hemocultivos de este caso.",
            "topic": "Quemaduras / Sepsis"
          },
          {
            "id": "puem-r2-c35-q4",
            "ordinal": 4,
            "stem": "La presencia del microorganismo en el hemocultivo se explica por:",
            "options": [
              "Resistencia",
              "Infección endovascular",
              "Sistema inmune comprometido",
              "Contaminación de la toma de la muestra"
            ],
            "answer_index": 1,
            "correct_text": "Infección endovascular",
            "explanation": "Que el mismo germen aparezca en el hemocultivo periférico y en el cultivo del catéter indica infección endovascular relacionada con el catéter y no una contaminación de la toma. La resistencia explica el fracaso de un antibiótico, no la presencia del germen, y la inmunosupresión del gran quemado es un factor de riesgo, pero no explica por sí sola la bacteriemia.",
            "topic": "Quemaduras / Sepsis"
          },
          {
            "id": "puem-r2-c35-q5",
            "ordinal": 5,
            "stem": "El manejo en este momento es:",
            "options": [
              "Cambio de catéter y antibiótico",
              "Cambio de catéter y mismo antibiótico",
              "Mantener catéter y agregar antifúngico",
              "Mantener catéter con cambio de antibiótico"
            ],
            "answer_index": 1,
            "correct_text": "Cambio de catéter y mismo antibiótico",
            "explanation": "La infección del catéter se resuelve retirándolo o cambiándolo: el cultivo mostró un estafilococo resistente a oxacilina pero sensible a vancomicina, que es el antibiótico que ya recibía, de modo que se mantiene el mismo antibiótico y se cambia el catéter. Mantener el catéter infectado perpetúa la bacteriemia y agregar un antifúngico no está justificado sin evidencia de Candida.",
            "topic": "Quemaduras / Sepsis"
          }
        ],
        "topicId": "quemaduras"
      },
      {
        "id": "puem-r2-case-37",
        "number": 37,
        "title": "Monitoreo de Oximetría y Lesión Inhalatoria por Humo",
        "topic": "Quemaduras / Fisiología",
        "context": "Mujer de 46 años con quemaduras del 40% se SC e inhalación de humo. Se intuba y se monitoriza con oxímetro de pulso (dedo índice). Después de la intubación SpO2 98% posteriormente SpO2 disminuye al 90%.",
        "questions": [
          {
            "id": "puem-r2-c37-q1",
            "ordinal": 1,
            "stem": "De acuerdo a la SpO2 inicial, se infiere que la PaO2 (en mmHg) se encuentra en:",
            "options": [
              "40",
              "50",
              "65",
              "90"
            ],
            "answer_index": 3,
            "correct_text": "90",
            "explanation": "La saturación se relaciona con la PaO2 mediante la curva de disociación de la hemoglobina: una SpO2 de 98% corresponde a una PaO2 normal, alrededor de 90 mmHg o más. Los valores de 40 a 65 mmHg corresponderían a saturaciones mucho menores, en la parte pendiente de la curva.",
            "topic": "Quemaduras / Fisiología"
          },
          {
            "id": "puem-r2-c37-q2",
            "ordinal": 2,
            "stem": "De acuerdo a la segunda medición de SpO2 (90%), usted puede inferir que la PaO2 (en mmHg) es de:",
            "options": [
              "60",
              "80",
              "90",
              "110"
            ],
            "answer_index": 0,
            "correct_text": "60",
            "explanation": "Una SpO2 de 90% marca el inicio de la parte pendiente de la curva de disociación de la hemoglobina y equivale a una PaO2 cercana a 60 mmHg, que es el umbral de insuficiencia respiratoria. Por eso una caída de 98% a 90% representa una caída importante de la PaO2, no un cambio menor. Los valores de 80 a 110 mmHg corresponden a saturaciones normales.",
            "topic": "Quemaduras / Fisiología"
          },
          {
            "id": "puem-r2-c37-q3",
            "ordinal": 3,
            "stem": "Con respecto al sitio de colocación del sensor de oxímetro de pulso:",
            "options": [
              "Es indistinto con el sitio de colocación",
              "Los cambios se detectan igual que cuando está en la oreja",
              "Los cambios se detectan más tardíamente que cuando está en la oreja",
              "Los cambios se detectan más rápidamente que cuando está en los labios"
            ],
            "answer_index": 2,
            "correct_text": "Los cambios se detectan más tardíamente que cuando está en la oreja",
            "explanation": "El sensor en el dedo detecta los cambios de saturación más tarde que en la oreja o los labios, porque la circulación periférica tiene mayor retraso (más aún con hipoperfusión o vasoconstricción). Por eso el sitio no es indistinto y los cambios no se detectan igual ni más rápido en el dedo.",
            "topic": "Quemaduras / Fisiología"
          },
          {
            "id": "puem-r2-c37-q4",
            "ordinal": 4,
            "stem": "Con respecto a la carboxihemoglobina y su relación con la oximetría de pulso, usted considera que la SpO2:",
            "options": [
              "Es suficiente para monitorización",
              "No discrimina la carboxihemoglobina de la oxihemoglobina",
              "Correlaciona a la oxihemoglobina con la carboxihemaglobina",
              "Se modifica con la presencia de carboxihemoglobina, pero solo mide la oxihemoglobina"
            ],
            "answer_index": 1,
            "correct_text": "No discrimina la carboxihemoglobina de la oxihemoglobina",
            "explanation": "El oxímetro de pulso usa solo dos longitudes de onda y no distingue la carboxihemoglobina de la oxihemoglobina, de modo que registra una saturación falsamente normal en la intoxicación por monóxido de carbono. Por eso no es suficiente para monitorizar a un paciente con inhalación de humo y se necesita cooximetría en sangre arterial.",
            "topic": "Quemaduras / Fisiología"
          },
          {
            "id": "puem-r2-c37-q5",
            "ordinal": 5,
            "stem": "Son factores que pueden afectar la medición de la SpO2:",
            "options": [
              "Color de la piel, PaO2 y ETCO2",
              "Hemoglobina fetal y color de piel",
              "Tabaquismo, color de piel y ETCO2",
              "Luz directa de lámparas, electrocauterio y movimientos del paciente"
            ],
            "answer_index": 3,
            "correct_text": "Luz directa de lámparas, electrocauterio y movimientos del paciente",
            "explanation": "La medición de la SpO2 se altera por factores que interfieren con la señal: luz ambiental directa de lámparas, interferencia eléctrica del electrocauterio y movimiento del paciente. El color de la piel y la hemoglobina fetal también influyen en circunstancias específicas, pero la PaO2 y el ETCO2 no son factores de error del oxímetro, y las opciones que los incluyen mezclan variables que no corresponden.",
            "topic": "Quemaduras / Fisiología"
          }
        ],
        "topicId": "quemaduras"
      }
    ]
  },
  {
    "id": "caso-puem-pared",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Pared Abdominal y Hernias",
    "subtitle": "4 casos clínicos seriados con 20 reactivos comentados paso a paso.",
    "topicId": "pared",
    "tag": "Pared",
    "badge": "4 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-04",
        "number": 4,
        "title": "Trauma Penetrante Abdominal por Instrumento Punzocortante",
        "topic": "Pared Abdominal / Trauma",
        "context": "Hombre de 34 años con aliento alcohólico, quien presenta una herida por instrumento punzocortante a nivel de cicatriz umbilical. EF: TA 110/60, FC 100, FR 20, TEMP 37. Con dolor en el sitio de la herida y rebote dudoso.",
        "questions": [
          {
            "id": "puem-r2-c04-q1",
            "ordinal": 1,
            "stem": "Para establecer el diagnóstico de herida penetrante se requiere:",
            "options": [
              "FAST",
              "Exploración de herida",
              "TC de abdomen contrastada",
              "Tele de tórax y simple de abdomen"
            ],
            "answer_index": 1,
            "correct_text": "Exploración de herida",
            "explanation": "En heridas abdominales punzocortantes con estabilidad hemodinámica y datos peritoneales dudosos, la exploración local de la herida determina la penetración de la fascia posterior/peritoneo.",
            "topic": "Pared Abdominal / Trauma"
          },
          {
            "id": "puem-r2-c04-q2",
            "ordinal": 2,
            "stem": "De acuerdo a la localización de la lesión, víscera que probablemente este afectada es:",
            "options": [
              "Hígado",
              "Estómago",
              "Intestino delgado",
              "Grandes vasos abdominales"
            ],
            "answer_index": 2,
            "correct_text": "Intestino delgado",
            "explanation": "El intestino delgado es la víscera hueca más frecuentemente lesionada por heridas punzocortantes debido a su extensa superficie y disposición anatómica central.",
            "topic": "Pared Abdominal / Trauma"
          },
          {
            "id": "puem-r2-c04-q3",
            "ordinal": 3,
            "stem": "En caso de que la lesión fuera de grandes vasos abdominales, esperaría observar:",
            "options": [
              "Datos de choque",
              "Náuseas y vómito",
              "Distensión abdominal",
              "Síndrome compartimental"
            ],
            "answer_index": 0,
            "correct_text": "Datos de choque",
            "explanation": "La laceración de grandes vasos retroperitoneales (aorta, vena cava, vasos ilíacos) produce hemoperitoneo masivo y choque hipovolémico exanguinante.",
            "topic": "Pared Abdominal / Trauma"
          },
          {
            "id": "puem-r2-c04-q4",
            "ordinal": 4,
            "stem": "En caso de ser lesión de víscera hueca, esperaría encontrar:",
            "options": [
              "Choque séptico",
              "Irritación peritoneal",
              "Choque hipovolémico",
              "Síndrome compartimental"
            ],
            "answer_index": 1,
            "correct_text": "Irritación peritoneal",
            "explanation": "La contaminación fecal o entérica produce peritonitis química y bacteriana con datos francos de irritación peritoneal (rebote, resistencia involuntaria).",
            "topic": "Pared Abdominal / Trauma"
          },
          {
            "id": "puem-r2-c04-q5",
            "ordinal": 5,
            "stem": "Se corrobora lesión de víscera hueca probablemente afectada, el manejo inicial además de soluciones parenterales es:",
            "options": [
              "Cefalosporinas",
              "Analgésicos y transfusiones",
              "Cefalosporina y metronidazol",
              "Triple esquema de antibióticos"
            ],
            "answer_index": 2,
            "correct_text": "Cefalosporina y metronidazol",
            "explanation": "El esquema antimicrobiano profiláctico en trauma abdominal con perforación entérica debe cubrir bacilos gramnegativos y anaerobios (cefalosporinas de 2ª o 3ª generación más metronidazol).",
            "topic": "Pared Abdominal / Trauma"
          }
        ],
        "topicId": "pared"
      },
      {
        "id": "puem-r2-case-15",
        "number": 15,
        "title": "Hernia Inguinal Pediátrica en Lactante",
        "topic": "Pared Abdominal",
        "context": "Niña de 8 meses con antecedentes de prematures, aumento de volumen en región inguinal izquierda, intermitente cada vez mas frecuente, asociada al esfuerzo y llanto. EF: masa blanda, reductible y no dolorosa en la región inguinal izquierda únicamente.",
        "questions": [
          {
            "id": "puem-r2-c15-q1",
            "ordinal": 1,
            "stem": "El diagnóstico mas probable es:",
            "options": [
              "Hernia femoral",
              "Hernia inguinal",
              "Lipoma inguinal",
              "Adenopatía inguinal"
            ],
            "answer_index": 1,
            "correct_text": "Hernia inguinal",
            "explanation": "Una niña prematura de 8 meses con aumento de volumen inguinal intermitente, blando y reductible, que aparece con el esfuerzo y el llanto, tiene una hernia inguinal indirecta por persistencia del conducto peritoneovaginal. La hernia femoral es rara en esta edad, y el lipoma o la adenopatía no se reducen ni cambian con el esfuerzo.",
            "topic": "Pared Abdominal"
          },
          {
            "id": "puem-r2-c15-q2",
            "ordinal": 2,
            "stem": "El tratamiento es:",
            "options": [
              "Plastia inguinal",
              "Biopsia excisional",
              "Resección de lipoma",
              "Plastia femoral bilateral"
            ],
            "answer_index": 0,
            "correct_text": "Plastia inguinal",
            "explanation": "El tratamiento es quirúrgico, una plastia inguinal con ligadura alta del saco herniario, que es la corrección del defecto en niños. La biopsia excisional y la resección de lipoma corresponden a otras lesiones, y la plastia femoral bilateral trataría una hernia que no es la de la paciente.",
            "topic": "Pared Abdominal"
          },
          {
            "id": "puem-r2-c15-q3",
            "ordinal": 3,
            "stem": "La recurrencia se puede deber a:",
            "options": [
              "Hernia en pantalón",
              "Resección incompleta",
              "Infecciones de repetición",
              "Derivación ventrículo peritoneal"
            ],
            "answer_index": 1,
            "correct_text": "Resección incompleta",
            "explanation": "En la hernia pediátrica la causa principal de recurrencia es una técnica incompleta sobre el saco herniario (resección o ligadura alta insuficiente), que deja el conducto permeable. La hernia en pantalón es una variante anatómica que se trata en la cirugía inicial, las infecciones de repetición no explican por sí solas la recurrencia y una derivación ventriculoperitoneal es un factor de riesgo poco frecuente.",
            "topic": "Pared Abdominal"
          },
          {
            "id": "puem-r2-c15-q4",
            "ordinal": 4,
            "stem": "La complicación mas frecuente es:",
            "options": [
              "Incarceración",
              "Absceso inguinal",
              "Recidiva de la lesión",
              "Obstrucción intestinal"
            ],
            "answer_index": 0,
            "correct_text": "Incarceración",
            "explanation": "La complicación más frecuente de la hernia inguinal pediátrica es la incarceración, cuyo riesgo es mayor en lactantes y prematuros, y por eso se repara al diagnóstico (AAP, Pediatrics 2023). La recidiva tras una reparación electiva es poco frecuente. El absceso inguinal y la obstrucción intestinal son menos frecuentes, y esta última es una consecuencia de la incarceración.",
            "topic": "Pared Abdominal"
          },
          {
            "id": "puem-r2-c15-q5",
            "ordinal": 5,
            "stem": "La paciente debe tratarse:",
            "options": [
              "A los 2 años",
              "Al diagnóstico",
              "A los 12 meses",
              "De acuerdo al tamaño"
            ],
            "answer_index": 1,
            "correct_text": "Al diagnóstico",
            "explanation": "En un lactante la hernia inguinal se repara al diagnóstico porque el riesgo de incarceración es alto y no cede con el tiempo; esperar a los 12 meses o a los 2 años expone a la complicación sin beneficio. A diferencia de la hernia umbilical del lactante, que suele cerrarse sola (12 Pared Abdominal Sabiston, p. 4), la inguinal no remite, y su urgencia no depende del tamaño.",
            "topic": "Pared Abdominal"
          }
        ],
        "topicId": "pared"
      },
      {
        "id": "puem-r2-case-20",
        "number": 20,
        "title": "Hernia Inguinal Indirecta Estrangulada",
        "topic": "Pared Abdominal",
        "context": "Hombre de 57 años a quien hace 3 meses le diagnosticaron hernia inguinal. Inicia hace 12 horas con dolor punzante, constante, en la región inguinoescrotal derecha, sin irradiaciones, con sensación de plenitud y distensión abdominal, tumoración en región inguinal derecha. EF: palidez de tegumentos con actitud antiálgica. FC 95 lpm, FR 20 rpm, TA 140/110 mmHg, temp 38°C, dolor a la palpación de hemiabdomen inferior y aumento de volumen en región inguinoescrotal derecha de consistencia dura, edematosa y muy dolorosa, no es reductible y presenta crepitación. La peristalsis se encuentra disminuida.",
        "questions": [
          {
            "id": "puem-r2-c20-q1",
            "ordinal": 1,
            "stem": "Por frecuencia el cuadro es compatible con hernia:",
            "options": [
              "Directa incarcerada",
              "Directa estrangulada",
              "Indirecta incarcerada",
              "Indirecta estrangulada"
            ],
            "answer_index": 3,
            "correct_text": "Indirecta estrangulada",
            "explanation": "Una tumoración inguinoescrotal dura, edematosa, irreductible, con dolor intenso, fiebre y crepitación en un hombre con hernia previa indica compromiso de la circulación, es decir estrangulación. Por frecuencia la hernia inguinal más común es la indirecta, mientras que la directa suele aparecer en pacientes con debilidad de la pared, como el EPOC, y rara vez se estrangula por tener anillo amplio.",
            "topic": "Pared Abdominal"
          },
          {
            "id": "puem-r2-c20-q2",
            "ordinal": 2,
            "stem": "El diagnóstico lo fundamenta en:",
            "options": [
              "Herniografia",
              "Examen físico",
              "TAC",
              "Placas simples de abdomen"
            ],
            "answer_index": 1,
            "correct_text": "Examen físico",
            "explanation": "El diagnóstico de la hernia estrangulada es clínico: masa inguinoescrotal dolorosa, irreductible y con signos locales o sistémicos de isquemia. La herniografía, la TAC y las placas simples retrasan la cirugía urgente y no cambian la conducta, por lo que se reservan para dudas diagnósticas.",
            "topic": "Pared Abdominal"
          },
          {
            "id": "puem-r2-c20-q3",
            "ordinal": 3,
            "stem": "A la zona limitada por la arteria epigástrica inferior, el ligamento inguinal y el borde lateral de la vaina del recto, se le denomina:",
            "options": [
              "Anillo inguinal profundo",
              "Anillo inguinal superficial",
              "Triángulo de Hesselbach",
              "Triángulo femoral de Scarpa"
            ],
            "answer_index": 2,
            "correct_text": "Triángulo de Hesselbach",
            "explanation": "El triángulo limitado por los vasos epigástricos inferiores, el borde lateral de la vaina del recto y el ligamento inguinal es el triángulo de Hesselbach, por donde salen las hernias directas (12 Pared Abdominal Sabiston, p. 30). El anillo inguinal profundo queda lateral a los vasos epigástricos, el superficial es una apertura de la aponeurosis del oblicuo externo y el triángulo de Scarpa es femoral.",
            "topic": "Pared Abdominal"
          },
          {
            "id": "puem-r2-c20-q4",
            "ordinal": 4,
            "stem": "A la hernia que sobresale a través del piso del canal inguinal, en el triángulo de Hasselbach, se denomina:",
            "options": [
              "Directa",
              "Indirecta",
              "De Littre",
              "De Richter"
            ],
            "answer_index": 0,
            "correct_text": "Directa",
            "explanation": "La hernia que protruye a través del piso del canal inguinal, en el triángulo de Hesselbach y medial a los vasos epigástricos, es la hernia directa. La indirecta entra por el anillo inguinal profundo, lateral a los epigástricos; Littre contiene un divertículo de Meckel y Richter atrapa solo parte de la pared intestinal.",
            "topic": "Pared Abdominal"
          },
          {
            "id": "puem-r2-c20-q5",
            "ordinal": 5,
            "stem": "Para establecer el diagnóstico de estrangulación, debe existir:",
            "options": [
              "Edema local",
              "Irreductibilidad",
              "Oclusión intestinal",
              "Compromiso vascular"
            ],
            "answer_index": 3,
            "correct_text": "Compromiso vascular",
            "explanation": "La estrangulación se define por el compromiso vascular del contenido herniado (isquemia), que es lo que condiciona necrosis y perforación; el edema y la irreductibilidad son datos de incarceración y la oclusión intestinal puede existir sin isquemia. Por eso son datos de alarma el dolor desproporcionado, la fiebre y la leucocitosis (15 Intestino Delgado Schwartz, p. 11).",
            "topic": "Pared Abdominal"
          }
        ],
        "topicId": "pared"
      },
      {
        "id": "puem-r2-case-21",
        "number": 21,
        "title": "Manejo de Anticoagulación en Cirugía Electiva de Pared",
        "topic": "Pared Abdominal / Hematología",
        "context": "Hombre de 42 años con válvula mitral mecánica (disco) por cardiopatía reumática, en anticoagulación crónica con acenocumarol a dosis de 3 y 4 mg/día, en días alternos e INR de 3.5 a quien se le realizara plastia inguinal izquierda electiva.",
        "questions": [
          {
            "id": "puem-r2-c21-q1",
            "ordinal": 1,
            "stem": "Una de las primeras medidas a tomar para realizar la cirugía es:",
            "options": [
              "Repetir el INR",
              "Administrar vitamina K",
              "Transfundir plasma fresco congelado",
              "Suspender el acenocumarol en forma progresiva"
            ],
            "answer_index": 3,
            "correct_text": "Suspender el acenocumarol en forma progresiva",
            "explanation": "En un paciente con prótesis mecánica para cirugía electiva, el anticoagulante oral se suspende varios días antes para que el INR baje; la guía ACCP 2022 indica al menos 5 días en el caso de la warfarina, y con acenocumarol son menos por su vida media más corta. No se recomienda dar vitamina K de rutina antes de la cirugía, aunque el INR siga elevado uno o dos días antes. El plasma se reserva para sangrado o urgencia, y repetir el INR es un seguimiento, no la medida que lo corrige. Al suspenderlo, la prótesis mitral exige cubrir con heparina.",
            "topic": "Pared Abdominal / Hematología"
          },
          {
            "id": "puem-r2-c21-q2",
            "ordinal": 2,
            "stem": "El tratamiento debe incluir:",
            "options": [
              "Aspirina",
              "Warfarina",
              "Rivaroxabán",
              "Heparina fraccionada"
            ],
            "answer_index": 3,
            "correct_text": "Heparina fraccionada",
            "explanation": "Con una válvula mitral mecánica el riesgo de trombosis es alto, de modo que al suspender el acenocumarol se debe puentear con heparina de bajo peso molecular, que tiene acción corta, es predecible y se maneja fácilmente en el perioperatorio. La aspirina no protege la prótesis mecánica y la warfarina y el rivaroxabán no son opciones seguras ni confiables para este puente, el rivaroxabán está contraindicado en válvulas mecánicas.",
            "topic": "Pared Abdominal / Hematología"
          },
          {
            "id": "puem-r2-c21-q3",
            "ordinal": 3,
            "stem": "Por frecuencia la complicación que puede presentar es:",
            "options": [
              "Recidiva",
              "Trombosis de la válvula",
              "Infección del sitio quirúrgico",
              "Hematoma del sitio quirúrgico"
            ],
            "answer_index": 3,
            "correct_text": "Hematoma del sitio quirúrgico",
            "explanation": "La complicación más frecuente en el paciente anticoagulado es el hematoma del sitio quirúrgico, porque la anticoagulación perioperatoria, incluso el puente con heparina, aumenta el sangrado local. La trombosis valvular es la más grave pero rara si se cubre con heparina, y la infección y la recidiva herniaria no se relacionan con la anticoagulación.",
            "topic": "Pared Abdominal / Hematología"
          },
          {
            "id": "puem-r2-c21-q4",
            "ordinal": 4,
            "stem": "La forma de monitorizar la acción del medicamento prescrito es:",
            "options": [
              "Trombina",
              "Fibrinólisis",
              "Actividad plaquetaria",
              "Cuantificar la actividad de antiXa"
            ],
            "answer_index": 3,
            "correct_text": "Cuantificar la actividad de antiXa",
            "explanation": "La heparina fraccionada (de bajo peso molecular) actúa inhibiendo sobre todo el factor Xa, por lo que su efecto se monitoriza con la actividad anti-Xa. El tiempo de trombina o la fibrinólisis no reflejan este efecto y la actividad plaquetaria monitoriza antiagregantes, no heparinas.",
            "topic": "Pared Abdominal / Hematología"
          },
          {
            "id": "puem-r2-c21-q5",
            "ordinal": 5,
            "stem": "El medicamento se reiniciará:",
            "options": [
              "A las 24 horas",
              "Inmediatamente",
              "Después de 6 horas",
              "Después de la cuarta hora"
            ],
            "answer_index": 2,
            "correct_text": "Después de 6 horas",
            "explanation": "El anticoagulante se reinicia pocas horas después de la cirugía una vez que hay hemostasia adecuada, con la clave en 6 horas, porque reiniciarlo de inmediato aumenta el riesgo de hematoma y esperar 24 horas deja sin protección a una prótesis mecánica de alto riesgo. El tiempo exacto depende de la dosis y del riesgo de sangrado, y la clave del PUEM lo fija después de 6 horas.",
            "topic": "Pared Abdominal / Hematología"
          }
        ],
        "topicId": "pared"
      }
    ]
  },
  {
    "id": "caso-puem-esofago",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Esófago y Unión Esofagogástrica",
    "subtitle": "5 casos clínicos seriados con 24 reactivos comentados paso a paso.",
    "topicId": "esofago",
    "tag": "Esófago",
    "badge": "5 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-01",
        "number": 1,
        "title": "Divertículo de Zenker y Estrecho Cricofaríngeo",
        "topic": "Esófago",
        "context": "Hombre de 72 años con halitosis quien presenta sensación de cuerpo extraño a la ingesta de alimento sólido. En el estudio de imagen se visualiza acumulación de medio de contraste en pequeña bolsa a nivel del estrecho cricofaríngeo.",
        "questions": [
          {
            "id": "puem-r2-c01-q1",
            "ordinal": 1,
            "stem": "El diagnóstico es:",
            "options": [
              "Neoplasia esofágica",
              "Divertículo de Zenker",
              "Espasmo del cricofaríngeo",
              "Fístula de segunda hendidura branquial"
            ],
            "answer_index": 1,
            "correct_text": "Divertículo de Zenker",
            "explanation": "El divertículo de Zenker es un pseudodivertículo por pulsión a través del triángulo de Killian (entre fibras oblicuas del tirofaríngeo y transversas del cricofaríngeo).",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c01-q2",
            "ordinal": 2,
            "stem": "La teoría mas aceptada para esta patología es:",
            "options": [
              "Error embrionario",
              "Distensión del sáculo laríngeo",
              "Hipertonía del músculo cricofaríngeo",
              "Estenosis del estrecho esofágico superior"
            ],
            "answer_index": 2,
            "correct_text": "Hipertonía del músculo cricofaríngeo",
            "explanation": "La etiología se asocia a dismotilidad e hipertonía del esfínter esofágico superior (músculo cricofaríngeo).",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c01-q3",
            "ordinal": 3,
            "stem": "El tratamiento de esta patología es:",
            "options": [
              "Fistulectomía",
              "Resección transcervical",
              "Miotomía del músculo cricofaríngeo",
              "Miotomía del cricofaríngeo con diverticulectomía"
            ],
            "answer_index": 3,
            "correct_text": "Miotomía del cricofaríngeo con diverticulectomía",
            "explanation": "El tratamiento quirúrgico estándar es miotomía del cricofaríngeo más diverticulectomía (o diverticulopexia en sacos pequeños <3 cm).",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c01-q4",
            "ordinal": 4,
            "stem": "En el tratamiento de esta patología, se obtienen mejores resultados:",
            "options": [
              "Abordaje transoral",
              "Cirugía en escalera",
              "Faringotomia lateral",
              "Abordaje transcervical"
            ],
            "answer_index": 3,
            "correct_text": "Abordaje transcervical",
            "explanation": "El abordaje abierto transcervical anterolateral izquierdo permite exposición anatómica directa de la pared posterior del esófago cervical.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c01-q5",
            "ordinal": 5,
            "stem": "La complicación mas grave de esta técnica quirúrgica es:",
            "options": [
              "Mediastinitis",
              "Síndrome de horner",
              "Fístula traqueoesofágica",
              "Parálisis de cuerda vocal"
            ],
            "answer_index": 0,
            "correct_text": "Mediastinitis",
            "explanation": "La fuga anastomótica o dehiscencia de la mucosa esofágica cervical puede descender por el espacio retrofaríngeo hacia el mediastino posterior causando mediastinitis grave.",
            "topic": "Esófago"
          }
        ],
        "topicId": "esofago"
      },
      {
        "id": "puem-r2-case-03",
        "number": 3,
        "title": "Disfagia Progresiva y Acalasia Esofágica",
        "topic": "Esófago",
        "context": "Mujer de 42 años quien inicio hace 5 años con disfagia baja a sólidos al principio, intermitente, que mejora con la ingesta de líquidos; en los últimos 2 años ha progresado; se han agregado regurgitaciones, halitosis, broncoaspiración nocturna y perdida de peso no cuantificada. EF: sin alteraciones.",
        "questions": [
          {
            "id": "puem-r2-c03-q1",
            "ordinal": 1,
            "stem": "El estudio inicial que solicita es:",
            "options": [
              "Rx de tórax",
              "Manometría",
              "Esofagograma",
              "Ph-metria de 24 horas"
            ],
            "answer_index": 2,
            "correct_text": "Esofagograma",
            "explanation": "El estudio radiológico inicial de elección en sospecha de disfagia motora es el esofagograma baritado (muestra dilatación esofágica y afinamiento distal en 'punta de lápiz' o 'pico de pájaro').",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c03-q2",
            "ordinal": 2,
            "stem": "El estudio complementario que indica es:",
            "options": [
              "Esofagograma",
              "Esofagogastroscopia",
              "Phmetria de 24 horas",
              "USG transesofágico"
            ],
            "answer_index": 1,
            "correct_text": "Esofagogastroscopia",
            "explanation": "La esofagogastroscopia es obligatoria para descartar neoplasia en la unión esofagogástrica (pseudoacalasia tumoral).",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c03-q3",
            "ordinal": 3,
            "stem": "La conducta siguiente es indicar:",
            "options": [
              "Esofagograma",
              "Motilidad esofágica",
              "Dilatación neumática",
              "Manometría esofágica"
            ],
            "answer_index": 3,
            "correct_text": "Manometría esofágica",
            "explanation": "La manometría esofágica de alta resolución es el estándar de oro para confirmar el diagnóstico y clasificar el subtipo (criterios de Chicago v4.0: aperistalsis y relajación incompleta del EEI con IRP elevado).",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c03-q4",
            "ordinal": 4,
            "stem": "El tratamiento de elección es:",
            "options": [
              "Toxina botulínica mensualmente",
              "Dilataciones neumáticas frecuentes",
              "Esofagocardiomiotomía y funduplicatura parcial",
              "Bloqueador de canales de calcio de acción prolongada"
            ],
            "answer_index": 2,
            "correct_text": "Esofagocardiomiotomía y funduplicatura parcial",
            "explanation": "La esofagocardiomiotomía de Heller laparoscópica asociada a funduplicatura parcial anterior (Dor) o posterior (Toupet) es el tratamiento curativo definitivo de elección.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c03-q5",
            "ordinal": 5,
            "stem": "El manejo médico que proporciona mejores resultados:",
            "options": [
              "Toxina botulínica",
              "Dilataciones neumáticas",
              "Bloqueadores de canales de calcio",
              "Dilataciones con sondas mercuriales"
            ],
            "answer_index": 2,
            "correct_text": "Bloqueadores de canales de calcio",
            "explanation": "En pacientes no candidatos a cirugía ni dilatación neumática, los bloqueadores de canales de calcio (nifedipino) y nitratos orales ofrecen relajación parcial de la musculatura lisa.",
            "topic": "Esófago"
          }
        ],
        "topicId": "esofago"
      },
      {
        "id": "puem-r2-case-11",
        "number": 11,
        "title": "Carcinoma Epidermoide de Esófago Medio",
        "topic": "Esófago",
        "context": "Hombre de 57 años de raza blanca, con índice tabáquico 40 paquetes/año, quien consume de 30 g de whisky al día. Desde hace 3 meses presenta disfagia progresiva y perdida del 10% de peso en 6 meses. La endoscopia muestra en el tercio medio del esófago una lesión exofitica que obstruye el 60% de la luz.",
        "questions": [
          {
            "id": "puem-r2-c11-q1",
            "ordinal": 1,
            "stem": "El diagnóstico probable es:",
            "options": [
              "Tumor estromal",
              "Adenocarcinoma",
              "Carcinoma epidermoide",
              "Síndrome de Plummer Vinson"
            ],
            "answer_index": 2,
            "correct_text": "Carcinoma epidermoide",
            "explanation": "Un hombre con tabaquismo intenso y alcoholismo, disfagia progresiva, pérdida de peso y lesión exofítica en el tercio medio del esófago tiene un carcinoma epidermoide, porque este predomina en el esófago proximal y medio (13 Esofago Sabiston, p. 26). El adenocarcinoma se ubica en el esófago distal y la unión esofagogástrica sobre Barrett; el tumor estromal es submucoso y no suele producir una lesión exofítica de la mucosa, y el síndrome de Plummer-Vinson es un factor de riesgo, no un tumor.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c11-q2",
            "ordinal": 2,
            "stem": "El factor que proporciona mayor riesgo para la presentación de esta patología es:",
            "options": [
              "Tabaquismo",
              "Edad > 40 años",
              "Género masculino",
              "Consumo de alcohol"
            ],
            "answer_index": 0,
            "correct_text": "Tabaquismo",
            "explanation": "El tabaquismo es el factor de riesgo de mayor peso para el carcinoma epidermoide de esófago, y el alcohol potencia su efecto porque ambos actúan de forma sinérgica (13 Esofago Sabiston, p. 25). La edad y el género masculino son factores asociados pero con menor contribución individual, y el alcohol solo ocupa un segundo lugar frente al tabaco en la clave del PUEM.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c11-q3",
            "ordinal": 3,
            "stem": "Para determinar el estadio T, N; el estudio de mayor utilidad es:",
            "options": [
              "PET CT",
              "TC de tórax",
              "Resonancia magnética",
              "Ultrasonido endoscópico"
            ],
            "answer_index": 3,
            "correct_text": "Ultrasonido endoscópico",
            "explanation": "El ultrasonido endoscópico es el estudio de mayor utilidad para los estadios T y N porque ve las capas de la pared esofágica y los ganglios regionales; la TC de tórax-abdomen y el PET/TC se usan para descartar metástasis (M) (13 Esofago Sabiston, p. 28). La resonancia no es el estudio estándar para estadificar el esófago.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c11-q4",
            "ordinal": 4,
            "stem": "El paciente es clasificado T2, NI, M0; el tratamiento que proporciona mayor sobrevida es:",
            "options": [
              "Esofagectomía seguida de braquiterapia",
              "Esofaguectomia y quimioterapia adyuvante",
              "RT neoadyuvante seguida de esofagectomía",
              "Quimio y RT neoadyuvante seguida de esofagectomía"
            ],
            "answer_index": 3,
            "correct_text": "Quimio y RT neoadyuvante seguida de esofagectomía",
            "explanation": "Un tumor T2N1M0 es localmente avanzado con ganglios positivos, y la quimioterapia más radioterapia neoadyuvante seguida de esofagectomía es la estrategia que ofrece mayor sobrevida porque reduce el tumor, mejora la resecabilidad y trata la enfermedad microscópica. La radioterapia sola antes de cirugía, la quimioterapia adyuvante sola o la braquiterapia posterior a la cirugía no tienen ese beneficio combinado.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c11-q5",
            "ordinal": 5,
            "stem": "El paciente NO acepta el tratamiento anterior, la primer propuesta es:",
            "options": [
              "Yeyunostomía",
              "Aplicación de photofrin",
              "Prótesis esofágica plástica",
              "Prótesis esofágica autoexpandible cubierta"
            ],
            "answer_index": 3,
            "correct_text": "Prótesis esofágica autoexpandible cubierta",
            "explanation": "Si el paciente rechaza el tratamiento curativo, lo que sigue es paliar la disfagia, y la prótesis esofágica autoexpandible cubierta restablece la vía oral y la cubierta evita el crecimiento del tumor a través de la malla (13 Esofago Sabiston, p. 39). La prótesis plástica rígida es una técnica abandonada por su mayor riesgo, la yeyunostomía solo da nutrición sin aliviar la disfagia y la terapia fotodinámica con photofrin tiene un papel limitado.",
            "topic": "Esófago"
          }
        ],
        "topicId": "esofago"
      },
      {
        "id": "puem-r2-case-14",
        "number": 14,
        "title": "Complicaciones Graves de Funduplicatura Laparoscópica",
        "topic": "Esófago",
        "context": "Hombre de 37 años a quien hace 3 días se le practico cirugía laparoscópica antirreflujo gastro esofágico sin complicaciones. 24 horas después se interna por malestar general, fiebre, dolor abdominal severo con signos de irritación peritoneal. Leucocitos de 19,400, 89% de neutrófilos y 9% de bandas. En la rx simple se observa derrame pleural bilateral, mediastino ensanchado, líquido libre y aire subdiafragmático.",
        "questions": [
          {
            "id": "puem-r2-c14-q1",
            "ordinal": 1,
            "stem": "Por frecuencia el diagnóstico más probable es mediastinitis por:",
            "options": [
              "Absceso subfrénico",
              "Perforación gástrica",
              "Perforación esofágica",
              "Perforación diafragmática"
            ],
            "answer_index": 2,
            "correct_text": "Perforación esofágica",
            "explanation": "Tras una funduplicatura, la fiebre, el dolor abdominal con irritación peritoneal, el derrame pleural bilateral, el ensanchamiento mediastinal y el aire subdiafragmático indican una perforación esofágica con mediastinitis, que es la lesión más frecuente en esta cirugía por la disección del hiato y la manipulación instrumental (13 Esofago Sabiston, p. 21). La perforación gástrica o diafragmática también libera aire, pero no explica por sí sola el ensanchamiento del mediastino.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c14-q2",
            "ordinal": 2,
            "stem": "Para confirmar el diagnóstico solicita:",
            "options": [
              "Paracentesis",
              "Panendoscopia",
              "TAC toraco abdominal",
              "Laparotomía exploradora"
            ],
            "answer_index": 2,
            "correct_text": "TAC toraco abdominal",
            "explanation": "La TAC toracoabdominal es el estudio que confirma el diagnóstico porque muestra la fuga de aire o contraste, las colecciones mediastinales y pleurales y el líquido peritoneal en el mismo estudio, en un paciente grave. La panendoscopia puede ampliar la perforación al insuflar, la paracentesis no define el origen y la laparotomía exploradora es una intervención y no un estudio de confirmación.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c14-q3",
            "ordinal": 3,
            "stem": "La conducta quirúrgica inicial es:",
            "options": [
              "Lavado y drenaje",
              "Reparación diafragmática y drenaje",
              "Drenaje y cierre de la perforación gástrica",
              "Cierre de perforación, gastrostomía y drenaje mediastinal"
            ],
            "answer_index": 3,
            "correct_text": "Cierre de perforación, gastrostomía y drenaje mediastinal",
            "explanation": "La perforación esofágica con mediastinitis requiere cierre de la perforación, drenaje del mediastino y una gastrostomía que descomprima y proteja la reparación. El lavado y drenaje sin cerrar deja la fuga activa, y los procedimientos centrados en el diafragma o en una perforación gástrica no tratan el sitio real de la contaminación.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c14-q5",
            "ordinal": 5,
            "stem": "En caso de fracaso en el tratamiento anterior, indica:",
            "options": [
              "Colocación de malla",
              "Pancreatectomía distal",
              "Drenaje guiado por TAC",
              "Esofagostomía, yeyunostomía y drenaje"
            ],
            "answer_index": 3,
            "correct_text": "Esofagostomía, yeyunostomía y drenaje",
            "explanation": "Si fracasan el cierre y el drenaje, se pasa a la exclusión de la vía digestiva: esofagostomía para desviar las secreciones, yeyunostomía para nutrir y drenaje de la zona infectada, de modo que se controle la sepsis. La colocación de malla o la pancreatectomía distal no tienen relación con el problema, y el drenaje guiado por TAC solo no controla una perforación que sigue activa.",
            "topic": "Esófago"
          }
        ],
        "topicId": "esofago"
      },
      {
        "id": "puem-r2-case-46",
        "number": 46,
        "title": "Ingesta de Cáusticos y Estenosis Esofágica Cicatrizal",
        "topic": "Esófago",
        "context": "Hombre de 18 años, quien ingirió hace 6 horas sosa cáustica; presenta salivación intensa, dolor torácico y epigástrico. EF: sin alteraciones.",
        "questions": [
          {
            "id": "puem-r2-c46-q1",
            "ordinal": 1,
            "stem": "En su anamnesis para determinar el grado y extensión del daño debe interrogar:",
            "options": [
              "Consistencia de la sustancia ingerida y motivo de la ingesta",
              "Color, olor y sabor de la sustancia ingerida, motivo de la ingesta",
              "Etiqueta del envase, porcentaje de concentración, sabor, motivo de la ingesta",
              "Tipo de sustancia, estado físico, cantidad, concentración e intención de la ingesta"
            ],
            "answer_index": 3,
            "correct_text": "Tipo de sustancia, estado físico, cantidad, concentración e intención de la ingesta",
            "explanation": "Para estimar el daño por un cáustico hay que conocer el tipo de sustancia (álcali o ácido), su estado físico (líquido o sólido), la cantidad, la concentración y la intención de la ingesta, porque de ellos depende la profundidad y la extensión de la lesión. El color, el olor, el sabor o la etiqueta aislados son datos insuficientes para graduar el daño.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c46-q2",
            "ordinal": 2,
            "stem": "Persiste con dolor torácico y se agregan taquicardia y fiebre; la conducta a seguir es:",
            "options": [
              "Realizar TC con contraste oral",
              "Ingresar a sala general por neumonitis",
              "Iniciar inhibidor de bomba en infusión por esofagitis severa",
              "Ingresar a cuidados intensivos por posibilidad de perforación"
            ],
            "answer_index": 3,
            "correct_text": "Ingresar a cuidados intensivos por posibilidad de perforación",
            "explanation": "Dolor torácico persistente con taquicardia y fiebre tras ingerir un cáustico hace sospechar perforación esofágica con mediastinitis, por lo que el paciente debe ingresar a cuidados intensivos para vigilancia, estudios y tratamiento urgentes; el esofagograma es la prueba estándar y la TC con contraste oral es aceptable (13 Esofago Sabiston, p. 21). Ingresar a sala general o dar solo un IBP subestima una complicación grave.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c46-q3",
            "ordinal": 3,
            "stem": "El paciente evoluciona satisfactoriamente, la endoscopia muestra estenosis corta, la conducta a seguir es:",
            "options": [
              "Indicar inhibidor de bomba de protones",
              "Dilatación endoscópica de forma secuencial",
              "Aplicar toxina botulínica en la zona de estenosis",
              "Indicar esteroide tópico e inhibidor de la síntesis de colágena"
            ],
            "answer_index": 1,
            "correct_text": "Dilatación endoscópica de forma secuencial",
            "explanation": "Si la lesión cicatriza y la endoscopia muestra una estenosis corta, el tratamiento es la dilatación endoscópica progresiva (secuencial), que alivia la disfagia. La toxina botulínica sirve en acalasia y no en estenosis cicatrizal, los IBP no revierten la fibrosis y los esteroides o inhibidores de colágena no son estándar.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c46-q4",
            "ordinal": 4,
            "stem": "El paciente NO se realizo tratamiento, regresa en 2 años y se le realiza esofagograma; la conducta a seguir es:",
            "options": [
              "Gastrostomía quirúrgica",
              "Prótesis esofágica autoexpandible",
              "Dilatación con balón neumático de forma mensual",
              "Interposición de esófago por colon o ascenso gástrico"
            ],
            "answer_index": 2,
            "correct_text": "Dilatación con balón neumático de forma mensual",
            "explanation": "Un paciente que no recibió tratamiento y vuelve a los dos años con una estenosis cicatricial establecida y larga requiere sustituir el esófago con una interposición de colon o un ascenso gástrico, cuando la dilatación ya no es eficaz. Las dilataciones mensuales o la prótesis autoexpandible no tratan una estenosis fibrosa extensa a largo plazo, y la gastrostomía solo alimenta sin restituir la vía.",
            "topic": "Esófago"
          },
          {
            "id": "puem-r2-c46-q5",
            "ordinal": 5,
            "stem": "La complicación tardía que puede presentar es:",
            "options": [
              "Carcinoma de la unión",
              "Carcinoma de cavidad oral",
              "Carcinoma esofágico de tipo epidermoide",
              "Incremento del riesgo de adenocarcinoma gástrico"
            ],
            "answer_index": 2,
            "correct_text": "Carcinoma esofágico de tipo epidermoide",
            "explanation": "La complicación tardía de la estenosis cáustica es el carcinoma epidermoide de esófago, que aparece años después sobre el segmento cicatrizado, por lo que el riesgo justifica vigilancia. El carcinoma de la unión o el adenocarcinoma gástrico no son consecuencia del cáustico, y el de cavidad oral se asocia con tabaco y alcohol.",
            "topic": "Esófago"
          }
        ],
        "topicId": "esofago"
      }
    ]
  },
  {
    "id": "caso-puem-estomago",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Estómago y Duodeno",
    "subtitle": "6 casos clínicos seriados con 28 reactivos comentados paso a paso.",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "badge": "6 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-02",
        "number": 2,
        "title": "Hemorragia Digestiva Alta por Úlcera Duodenal",
        "topic": "Estómago y Duodeno",
        "context": "Hombre de 37 años taxista quien fuma 20 cigarrillos al día desde hace 20 años, alcoholismo ocasional. Inicia el día de hoy con 4 evacuaciones melenicas, abundantes, palidez de piel y mucosas; sin hematemesis. EF: FC 120, TA 80/50, FR 23. Se coloca SNG que drena material hemático rojo rutilante.",
        "questions": [
          {
            "id": "puem-r2-c02-q1",
            "ordinal": 1,
            "stem": "Por frecuencia el diagnóstico más probable es:",
            "options": [
              "Úlcera gástrica",
              "Úlcera duodenal",
              "Várices esofágicas",
              "Adenocarcinoma gástrico"
            ],
            "answer_index": 1,
            "correct_text": "Úlcera duodenal",
            "explanation": "En hemorragia digestiva alta masiva con melena y choque en paciente joven con tabaquismo, la causa más frecuente es la úlcera péptica duodenal (bulbo duodenal cara posterior).",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c02-q2",
            "ordinal": 2,
            "stem": "El factor causal más importante es:",
            "options": [
              "Hipertensión portal",
              "Consumo excesivo de tabaco",
              "Infección por H. Pylori",
              "Consumo de AINES"
            ],
            "answer_index": 2,
            "correct_text": "Infección por H. Pylori",
            "explanation": "El Helicobacter pylori y el consumo de AINES son los factores etiológicos predominantes en la patogenia ulcerosa péptica.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c02-q3",
            "ordinal": 3,
            "stem": "Decide intervención quirúrgica en presencia de:",
            "options": [
              "Vaso visible",
              "Hemorragia endoscópica",
              "Melena persistente por cinco días",
              "Requerimiento de mas de 4 U de sangre en 24 horas"
            ],
            "answer_index": 3,
            "correct_text": "Requerimiento de mas de 4 U de sangre en 24 horas",
            "explanation": "Las indicaciones quirúrgicas de urgencia incluyen falla del tratamiento endoscópico, inestabilidad hemodinámica refractaria o requerimiento transfusional >4-6 unidades de sangre en 24 horas.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c02-q4",
            "ordinal": 4,
            "stem": "Dentro de la terapéutica endoscópica lo mas utilizado para cohibir la hemorragia es:",
            "options": [
              "Ligadura",
              "Escleroterapia",
              "Uso de hemoclips",
              "Inyección de cianoacrilato"
            ],
            "answer_index": 1,
            "correct_text": "Escleroterapia",
            "explanation": "La terapia endoscópica combinada (inyección con epinefrina/esclerosante más método térmico o hemoclip) es el estándar.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c02-q5",
            "ordinal": 5,
            "stem": "Es un procedimiento utilizado en esta enfermedad:",
            "options": [
              "Gastrectomía subtotal ampliada",
              "Desvascularización esófago gástrica",
              "Gastrotomía y cauterización directa del vaso",
              "Pilorotomía y sutura del vaso, con vagotomía y piloroplastia"
            ],
            "answer_index": 3,
            "correct_text": "Pilorotomía y sutura del vaso, con vagotomía y piloroplastia",
            "explanation": "La pilorotomía con ligadura o sutura hemostática del vaso sangrante (arteria gastroduodenal) combinada con vagotomía y piloroplastia es el procedimiento quirúrgico de elección en úlcera duodenal sangrante.",
            "topic": "Estómago y Duodeno"
          }
        ],
        "topicId": "estomago"
      },
      {
        "id": "puem-r2-case-08",
        "number": 8,
        "title": "Tricobezoar Gástrico (Síndrome de Rapunzel)",
        "topic": "Estómago y Duodeno",
        "context": "Adolescente femenina de 14 años con tricofagia desde los 8 años. Inicio hace un año con dolor moderado en epigastrio. Durante los últimos 2 meses hiporexia, plenitud posprandial y perdida de peso de 4 kg. EF: peso 28 kg, talla 1.56m, edema de párpados, masa supraumbilical de 25 cm dura, no dolorosa, sin visceromegalias, edema de miembros inferiores. HG 9.0 g/dl, leucos 5,600, segmentados 56%, linfocitos 30%, monocitos 11% y eosinófilos 3%. Plaquetas 350,000. TP 90%. Albúmina 1.5.",
        "questions": [
          {
            "id": "puem-r2-c08-q1",
            "ordinal": 1,
            "stem": "El diagnóstico probable es:",
            "options": [
              "Leiomioma",
              "Ascaridiasis",
              "Tricobezoar",
              "Pseudoquiste pancreático"
            ],
            "answer_index": 2,
            "correct_text": "Tricobezoar",
            "explanation": "Una adolescente con tricofagia de años, masa epigástrica dura e indolora, plenitud posprandial, pérdida de peso, anemia e hipoalbuminemia tiene un tricobezoar (síndrome de Rapunzel si se extiende al intestino). El leiomioma es una neoplasia de pared sin el antecedente de ingesta de cabello, y la ascaridiasis no produce una masa de ese tamaño y consistencia.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c08-q2",
            "ordinal": 2,
            "stem": "Para confirmar el diagnóstico solicita:",
            "options": [
              "TC abdominal",
              "Endoscopia alta",
              "Marcadores tumorales",
              "Coproparasitoscópicos"
            ],
            "answer_index": 1,
            "correct_text": "Endoscopia alta",
            "explanation": "La endoscopia alta confirma el diagnóstico porque permite ver el bezoar dentro del estómago y comprobar que la mucosa es normal, además de valorar su extensión. La TC abdominal describe una masa intragástrica heterogénea pero no confirma su naturaleza, los marcadores tumorales no aplican a un cuerpo extraño y los coproparasitoscópicos buscan helmintos.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c08-q3",
            "ordinal": 3,
            "stem": "Un dato que le apoya para establecer el diagnóstico es:",
            "options": [
              "Ovillo de áscaris",
              "Infiltración de linfoblastos",
              "Masa tumoral dependiente de la mucosa",
              "Masa café oscura intragástrica con mucosa normal"
            ],
            "answer_index": 3,
            "correct_text": "Masa café oscura intragástrica con mucosa normal",
            "explanation": "El dato que apoya un tricobezoar es una masa intragástrica de color café oscuro (cabello compactado) con la mucosa subyacente normal, porque el bezoar es un cuerpo extraño y no una lesión de la pared. Una masa dependiente de la mucosa sugiere neoplasia, un ovillo de áscaris correspondería a parasitosis, y la infiltración por linfoblastos a una neoplasia hematológica.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c08-q4",
            "ordinal": 4,
            "stem": "El tratamiento de elección es:",
            "options": [
              "Quimioterapia",
              "Marsupializacion",
              "Quirúrgico y radioterapia",
              "Quirúrgico para extracción de la masa"
            ],
            "answer_index": 3,
            "correct_text": "Quirúrgico para extracción de la masa",
            "explanation": "Un tricobezoar tan grande como esta masa de 25 cm no se disuelve ni se fragmenta de forma fiable, por lo que el tratamiento de elección es la extracción quirúrgica. La quimioterapia y la radioterapia son para neoplasias, que aquí se descartaron, y la marsupialización se usa en quistes, no en un cuerpo extraño intragástrico.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c08-q5",
            "ordinal": 5,
            "stem": "El manejo debe incluir:",
            "options": [
              "Terapia psicológica",
              "Estudios de extensión",
              "Trasfusión de sangre y hemoderivados",
              "Endoscopia con toma de biopsias de control"
            ],
            "answer_index": 0,
            "correct_text": "Terapia psicológica",
            "explanation": "Tras extraer el bezoar hay que tratar la causa: la tricofagia suele relacionarse con tricotilomanía o un trastorno psicológico, y sin terapia psicológica el cuadro recurre. Los estudios de extensión corresponden a neoplasias, la biopsia de control no tiene objeto cuando la mucosa era normal, y la anemia e hipoalbuminemia se corrigen con soporte nutricional más que con hemoderivados de rutina.",
            "topic": "Estómago y Duodeno"
          }
        ],
        "topicId": "estomago"
      },
      {
        "id": "puem-r2-case-09",
        "number": 9,
        "title": "Úlcera Péptica Sangrante por AINE en Paciente Mayor",
        "topic": "Estómago y Duodeno",
        "context": "Mujer de 74 años con antecedente de EPOC, quien ingiere naproxeno por osteoartritis degenerativa desde hace 6 meses. Acude al servicio de urgencias por presentar evacuaciones melenicas y en 2 ocasiones hematemesis en escasa cantidad. En el momento del ingreso TA 90/60, FC 106, Hb 8, Hto 26%.",
        "questions": [
          {
            "id": "puem-r2-c09-q1",
            "ordinal": 1,
            "stem": "La conducta inicial es:",
            "options": [
              "Infusión de ocreotide",
              "Endoscopia de urgencia",
              "Lavado gástrico con agua helada",
              "Transfundir sangre y estabilizar a la paciente"
            ],
            "answer_index": 3,
            "correct_text": "Transfundir sangre y estabilizar a la paciente",
            "explanation": "Con TA 90/60, FC 106 y Hb 8 hay datos de choque hemorrágico, y la prioridad es la reanimación: acceso venoso, reposición de volumen y transfusión de hemoderivados, con IBP intravenoso y monitorización (14 Estomago y Duodeno Sabiston, p. 16). La endoscopia es el siguiente paso una vez estabilizada; la octreotida es para sangrado variceal y el lavado con agua helada no ha demostrado beneficio.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c09-q3",
            "ordinal": 3,
            "stem": "El medicamento intravenoso que indica para prevenir la recurrencia de la hemorragia es:",
            "options": [
              "Ocreotida",
              "Famotidina",
              "Omeprazol",
              "Terlipresina"
            ],
            "answer_index": 2,
            "correct_text": "Omeprazol",
            "explanation": "Para prevenir la recurrencia del sangrado se usa un inhibidor de la bomba de protones intravenoso, porque mantiene el pH gástrico alto, lo que estabiliza el coágulo sobre la úlcera. La famotidina (anti-H2) suprime el ácido con menos potencia y desarrolla taquifilaxia, mientras que la octreotida y la terlipresina actúan sobre el flujo esplácnico en hipertensión portal y no tienen lugar en una úlcera por AINE.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c09-q4",
            "ordinal": 4,
            "stem": "Una vez controlado el episodio de hemorragia, el tratamiento de mantenimiento es:",
            "options": [
              "Omeprazol 40 mg diarios por 8 semanas",
              "Lansoprazol 60 mg al día por 2 semanas",
              "Pantoprazol 40 mg 2 veces al día por 8 semanas",
              "Misoprostol 200 mcg 4 veces al día por 8 semanas"
            ],
            "answer_index": 2,
            "correct_text": "Pantoprazol 40 mg 2 veces al día por 8 semanas",
            "explanation": "Tras la hemostasia se continúa el IBP en dosis alta, dividida en dos tomas, durante el tiempo necesario para cicatrizar la úlcera; por eso la clave es pantoprazol dos veces al día por 8 semanas. Una dosis única de omeprazol es insuficiente después de una hemorragia, el lansoprazol por 2 semanas es muy corto para cicatrizar y el misoprostol solo protege frente a AINE, con peor tolerancia. Además hay que suspender el AINE y buscar H. pylori.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c09-q5",
            "ordinal": 5,
            "stem": "Si presentara recurrencia, el manejo definitivo seria:",
            "options": [
              "Piloroplastia",
              "Repetir endoscopia",
              "Gastrectomía subtotal",
              "Antrectomía con vagotomía"
            ],
            "answer_index": 1,
            "correct_text": "Repetir endoscopia",
            "explanation": "Ante una recidiva del sangrado tras una hemostasia endoscópica exitosa, la guía ESGE 2021 recomienda repetir la endoscopia con hemostasia, y solo si este segundo intento falla se considera la embolización angiográfica o la cirugía. La antrectomía con vagotomía, la gastrectomía subtotal y la piloroplastia son operaciones que se reservan para la falla de las medidas endoscópicas y angiográficas, y la piloroplastia sola no reduce la secreción ácida.",
            "topic": "Estómago y Duodeno"
          }
        ],
        "topicId": "estomago"
      },
      {
        "id": "puem-r2-case-22",
        "number": 22,
        "title": "Úlcera Péptica e Infección por Helicobacter Pylori",
        "topic": "Estómago y Duodeno",
        "context": "Hombre de 32 años, chofer quien desde hace 3 meses presenta dolor epigástrico tipo ardoroso que disminuye con la ingesta de alimentos y en ocasiones lo despierta en la madrugada, refiere que ha tenido otros episodios semejantes que han cedido con la ingesta de ranitidina, la que toma en forma irregular.",
        "questions": [
          {
            "id": "puem-r2-c22-q1",
            "ordinal": 1,
            "stem": "El diagnóstico más probable es:",
            "options": [
              "Úlcera péptica",
              "Gastritis folicular",
              "Dispepsia no ulcerosa",
              "ERGE"
            ],
            "answer_index": 0,
            "correct_text": "Úlcera péptica",
            "explanation": "El dolor epigástrico ardoroso que mejora con los alimentos, despierta en la madrugada, recurre y cede con anti-H2 corresponde a una úlcera péptica, de preferencia duodenal. La dispepsia no ulcerosa no tiene lesión endoscópica y la ERGE cursa con pirosis y regurgitación sin ese ritmo con la comida; la gastritis folicular no explica un patrón ulceroso recurrente.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c22-q2",
            "ordinal": 2,
            "stem": "El estudio de elección para el diagnóstico es:",
            "options": [
              "Endoscopia",
              "Phmetria de 24 horas",
              "Manometría esofágica",
              "SEGD con doble contraste"
            ],
            "answer_index": 0,
            "correct_text": "Endoscopia",
            "explanation": "La endoscopia es el estudio de elección porque muestra la úlcera, permite tomar biopsias para descartar malignidad y buscar H. pylori. La pHmetría y la manometría estudian el reflujo y la motilidad esofágica, y la serie esofagogastroduodenal con doble contraste es menos sensible y no permite biopsia.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c22-q3",
            "ordinal": 3,
            "stem": "En esta patología el porcentaje en que puede identificar infección por H. Pylori es:",
            "options": [
              "30",
              "40",
              "50",
              "90"
            ],
            "answer_index": 3,
            "correct_text": "90",
            "explanation": "En la úlcera duodenal, la infección por H. pylori se identifica en la gran mayoría de los pacientes, alrededor de 90%, y el resto se explica sobre todo por AINE; la úlcera necesita ácido y pepsina más H. pylori o AINE (14 Estomago y Duodeno Sabiston, p. 13). Los porcentajes de 30 a 50% corresponden a la población general o a otras entidades, no a la úlcera duodenal.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c22-q4",
            "ordinal": 4,
            "stem": "En la actualidad el tratamiento de primera elección para erradicar H. Pylori; además de IBP es:",
            "options": [
              "Tinidazol + tetraciclinas",
              "Amoxicilina + claritromicina",
              "Metronidazol + amoxicilina",
              "Metronidazol + claritromicina"
            ],
            "answer_index": 1,
            "correct_text": "Amoxicilina + claritromicina",
            "explanation": "La terapia clásica de primera línea combina un IBP con amoxicilina y claritromicina, siempre que no haya resistencia a macrólidos ni alergia a penicilina, y el metronidazol se usa como alternativa en alérgicos a penicilina (14 Estomago y Duodeno Sabiston, p. 15). La combinación metronidazol-claritromicina o tinidazol-tetraciclina es otra variante, no la de primera elección. En regiones con alta resistencia a claritromicina las guías actuales prefieren esquemas cuádruples con bismuto.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c22-q5",
            "ordinal": 5,
            "stem": "La prueba de elección para valorar erradicación de H. Pylori es:",
            "options": [
              "Prueba de aliento con urea marcada",
              "Determinación de anticuerpos en materia fecal",
              "Determinación de anticuerpos IgG en suero",
              "Determinación de anticuerpos de IgM en suero"
            ],
            "answer_index": 0,
            "correct_text": "Prueba de aliento con urea marcada",
            "explanation": "Para confirmar la erradicación se usa una prueba que detecte infección activa: la prueba de aliento con urea marcada o el antígeno fecal (14 Estomago y Duodeno Sabiston, p. 14). Los anticuerpos IgG o IgM séricos permanecen positivos durante meses o años tras curarse y por eso no distinguen infección activa de pasada.",
            "topic": "Estómago y Duodeno"
          }
        ],
        "topicId": "estomago"
      },
      {
        "id": "puem-r2-case-23",
        "number": 23,
        "title": "Dispepsia Crónica y Complicaciones de H. Pylori",
        "topic": "Estómago y Duodeno",
        "context": "Mujer de 46 años con dolor epigástrico de tipo ardoroso de varios años de evolución, sin irradiaciones, ocasionalmente pirosis, multitratada con antiácidos y bloqueadores H2 en forma irregular, con recurrencia al suspender el tratamiento. EF: dolor en epigastrio a la palpación media y profunda.",
        "questions": [
          {
            "id": "puem-r2-c23-q1",
            "ordinal": 1,
            "stem": "La conducta inicial es:",
            "options": [
              "Iniciar tratamiento con IBP",
              "SEGD con doble contraste",
              "Esofagogastroduodenoscopia",
              "Determinación de ureasa en aliento"
            ],
            "answer_index": 2,
            "correct_text": "Esofagogastroduodenoscopia",
            "explanation": "En una paciente con años de dispepsia recurrente, tratada de forma irregular, lo primero es la endoscopia (esofagogastroduodenoscopia), que muestra la lesión, permite biopsia y búsqueda de H. pylori y descarta una neoplasia antes de tratar. Iniciar IBP a ciegas puede enmascarar un cáncer, la SEGD es menos sensible y la prueba de aliento no estudia la mucosa.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c23-q2",
            "ordinal": 2,
            "stem": "Se reporta presencia de H Pylori, el tratamiento es:",
            "options": [
              "IBP y procinético",
              "Erradicación con tetra esquema",
              "Erradicación con triple esquema",
              "Erradicación con doble esquema"
            ],
            "answer_index": 2,
            "correct_text": "Erradicación con triple esquema",
            "explanation": "Con H. pylori confirmado se indica la erradicación con triple esquema (IBP más claritromicina y amoxicilina) (14 Estomago y Duodeno Sabiston, p. 15). El IBP con procinético trata los síntomas sin erradicar, el doble esquema tiene menor eficacia y el tetraesquema se reserva para fallas o resistencia.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c23-q3",
            "ordinal": 3,
            "stem": "El H. Pylori causa daño a la mucosa gástrica localmente porque produce:",
            "options": [
              "Citocinas",
              "Toxina vac A",
              "Hialuronidasa",
              "Radicales libres"
            ],
            "answer_index": 1,
            "correct_text": "Toxina vac A",
            "explanation": "La toxina vacuolizante VacA daña localmente la mucosa gástrica al formar poros y vacuolas en las células epiteliales, además de la ureasa que alcaliniza el microambiente. Las citocinas inflamatorias participan de la respuesta, pero no son la toxina que produce la bacteria, y la hialuronidasa y los radicales libres no son el mecanismo principal descrito.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c23-q4",
            "ordinal": 4,
            "stem": "La patología grave más frecuente asociada al H. Pylori es:",
            "options": [
              "Carcinoma",
              "Úlcera gástrica",
              "Úlcera duodenal",
              "Linfoma de MALT"
            ],
            "answer_index": 0,
            "correct_text": "Carcinoma",
            "explanation": "La patología grave más frecuente asociada a la infección crónica por H. pylori es el carcinoma gástrico, a través de gastritis crónica, atrofia y metaplasia. La úlcera gástrica o duodenal es más común pero no es el desenlace más grave, y el linfoma MALT es mucho más raro.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c23-q5",
            "ordinal": 5,
            "stem": "Evoluciona con pirosis, disfonía y tos nocturna, el estudio complementario que indica es:",
            "options": [
              "Laringoscopia",
              "USG endoscópico",
              "Gammagrama esofagogástrico",
              "Manometría y pHmetría esofágica"
            ],
            "answer_index": 3,
            "correct_text": "Manometría y pHmetría esofágica",
            "explanation": "Pirosis con disfonía y tos nocturna sugieren reflujo con manifestaciones extraesofágicas; el estudio que confirma el reflujo patológico y evalúa la función motora del esófago, necesario antes de una cirugía antirreflujo, es la manometría con pHmetría esofágica. La laringoscopia solo muestra la lesión laríngea, el ultrasonido endoscópico estudia la pared y el gammagrama esofagogástrico es de poca ayuda diagnóstica.",
            "topic": "Estómago y Duodeno"
          }
        ],
        "topicId": "estomago"
      },
      {
        "id": "puem-r2-case-27",
        "number": 27,
        "title": "Linfoma Gástrico MALT vs Adenocarcinoma Gástrico",
        "topic": "Estómago y Duodeno",
        "context": "Hombre de 45 años con tabaquismo desde los 15 años. Inicio hace 8 meses con exacerbaciones y remisiones de dolor epigástrico, intermitente, náusea y vómito ocasional; y hace 2 meses se agregaron melena y disminución de peso no cuantificado; Hb 8, leucocitos 11,000. SGD con engrosamiento de los pliegues gástricos y úlcera prepilórica. La endoscopia muestra úlcera prepilórica de 3 cm, pliegues rechazados y engrosados, bordes eritematosos y la biopsia de bordes de la úlcera reporta ulceración de la mucosa, infiltrado de leucocitos maduros, células plasmáticas, neutrófilos, histiocitos, fibrosis de la submucosa y folículos linfoides con centro germinal.",
        "questions": [
          {
            "id": "puem-r2-c27-q1",
            "ordinal": 1,
            "stem": "El diagnóstico más probable es:",
            "options": [
              "Úlcera péptica",
              "Linfoma gástrico",
              "Carcinoma gástrico",
              "Enfermedad de Menetrier"
            ],
            "answer_index": 1,
            "correct_text": "Linfoma gástrico",
            "explanation": "Úlcera prepilórica con pliegues engrosados, anemia y biopsia con infiltrado linfoide y folículos con centro germinal orientan a linfoma gástrico tipo MALT. Una úlcera péptica común no cursa con engrosamiento de pliegues e infiltrado linfoide denso, el carcinoma muestra células malignas en la biopsia y la enfermedad de Ménétrier tiene pliegues gigantes sin úlcera.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c27-q2",
            "ordinal": 2,
            "stem": "El factor predisponente más frecuente es:",
            "options": [
              "Tabaquismo",
              "Gastritis atrófica",
              "Helicobacter Pylori",
              "Reflujo duodeno gástrico"
            ],
            "answer_index": 2,
            "correct_text": "Helicobacter Pylori",
            "explanation": "El factor predisponente más frecuente del linfoma gástrico MALT es la infección crónica por H. pylori, que estimula de forma persistente al tejido linfoide de la mucosa; por eso la erradicación logra remisión en la mayoría de los casos iniciales (14 Estomago y Duodeno Sabiston, p. 37). El tabaquismo, la gastritis atrófica y el reflujo duodenogástrico no son el factor principal.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c27-q3",
            "ordinal": 3,
            "stem": "En la evolución natural de esta entidad lo mas frecuente es que presente:",
            "options": [
              "Hemorragia",
              "Obstrucción",
              "Diseminación",
              "Anemia megaloblástica"
            ],
            "answer_index": 0,
            "correct_text": "Hemorragia",
            "explanation": "En la evolución natural lo más frecuente es la hemorragia digestiva, por la úlcera que forma el tumor en la mucosa, como la melena y la anemia de este paciente. La obstrucción y la diseminación son menos frecuentes en un linfoma de crecimiento lento, y la anemia megaloblástica no es una complicación típica.",
            "topic": "Estómago y Duodeno"
          },
          {
            "id": "puem-r2-c27-q4",
            "ordinal": 4,
            "stem": "El estudio complementario de primera elección que indica es:",
            "options": [
              "TC de abdomen",
              "Gastrina sérica",
              "RM de abdomen",
              "Antígeno CA 19-9"
            ],
            "answer_index": 0,
            "correct_text": "TC de abdomen",
            "explanation": "El estudio complementario de primera elección es la TC de abdomen para estadificar la extensión ganglionar y a distancia del linfoma. La gastrina sérica estudia gastrinoma, el CA 19-9 es un marcador sin valor diagnóstico en el linfoma y la resonancia no es el estudio de elección.",
            "topic": "Estómago y Duodeno"
          }
        ],
        "topicId": "estomago"
      }
    ]
  },
  {
    "id": "caso-puem-delgado",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Intestino Delgado",
    "subtitle": "4 casos clínicos seriados con 20 reactivos comentados paso a paso.",
    "topicId": "delgado",
    "tag": "Intestino Delgado",
    "badge": "4 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-05",
        "number": 5,
        "title": "Sobrecrecimiento Bacteriano y Divertículo Duodenal",
        "topic": "Intestino Delgado",
        "context": "Mujer de 65 años con consumo crónico de AINES quien desde hace 6 meses presenta evacuaciones líquidas, explosivas, fétidas, con lientería, sin sangre, moco, fiebre o dolor abdominal. Perdida ponderal de 10 kg. HG 13.3 g/dl, VCM 89, HCM 29 y TP normal. Coproparasitoscópico y Guayaco (-). Carotenos 43 mcg/dl y folatos normales, D-xilosa 4, anticuerpos anti-reticulina, anti-endomisio e IgG antigliadina negativos, IgA anti gliadina 70 U. Colonoscopia con biopsia normal. La biopsia de duodeno se reporta con duodenitis crónica sin atrofia. Aspirado duodenal: E. Coli > 100,000 UFC/ml. Tránsito intestinal con divertículo en la segunda porción del duodeno.",
        "questions": [
          {
            "id": "puem-r2-c05-q1",
            "ordinal": 1,
            "stem": "La causa más probable de la diarrea es:",
            "options": [
              "Colitis colagenosa",
              "Enteropatía por AINE",
              "Sobrepoblación bacteriana",
              "Síndrome de intestino irritable"
            ],
            "answer_index": 2,
            "correct_text": "Sobrepoblación bacteriana",
            "explanation": "La diarrea crónica, explosiva y fétida con lientería, pérdida ponderal y carotenos/D-xilosa bajos indica malabsorción, y la colonoscopia con biopsia normal y la biopsia duodenal sin atrofia alejan la colitis colagenosa. El aspirado duodenal con E. coli en cifra alta y el divertículo duodenal (estasis) completan el cuadro de sobrepoblación bacteriana. La enteropatía por AINE es la distractora tentadora por el consumo crónico, pero daña la mucosa y causa pérdida sanguínea, no diarrea grasa con cultivo cuantitativo positivo.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c05-q2",
            "ordinal": 2,
            "stem": "El estándar de oro para el diagnóstico de esta entidad es:",
            "options": [
              "Carotenos",
              "Biopsia duodenal",
              "Aspirado duodenal",
              "Anticuerpos anti gliadina"
            ],
            "answer_index": 2,
            "correct_text": "Aspirado duodenal",
            "explanation": "El diagnóstico de sobrepoblación bacteriana se confirma demostrando el crecimiento bacteriano excesivo, y el aspirado duodenal con cultivo cuantitativo es el estándar de oro; por eso es la clave. La biopsia duodenal solo descarta enfermedad celíaca u otra lesión de la mucosa (aquí era una duodenitis crónica inespecífica), y los anticuerpos antigliadina y los carotenos orientan a malabsorción pero no identifican la causa.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c05-q3",
            "ordinal": 3,
            "stem": "El factor condicionante de esta entidad es:",
            "options": [
              "Género",
              "Gluten en la dieta",
              "Consumo de AINE",
              "Divertículo duodenal"
            ],
            "answer_index": 3,
            "correct_text": "Divertículo duodenal",
            "explanation": "La sobrepoblación aparece cuando algo favorece el estasis intestinal; en esta paciente el divertículo en la segunda porción del duodeno funciona como un reservorio donde las bacterias proliferan, y por eso es el factor condicionante. El consumo de AINE es el distractor más tentador, pero no crea estasis ni explica el aspirado con crecimiento bacteriano; el gluten y el género tampoco tienen relación con el mecanismo.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c05-q4",
            "ordinal": 4,
            "stem": "El tratamiento de elección es:",
            "options": [
              "Antibiótico",
              "Loperamida",
              "Colestiramina",
              "Dieta libre de gluten"
            ],
            "answer_index": 0,
            "correct_text": "Antibiótico",
            "explanation": "El tratamiento de elección es un antibiótico que reduzca la carga bacteriana (suele acompañarse de corregir la causa anatómica y el déficit nutricional). La loperamida y la colestiramina solo tratan el síntoma, y la dieta libre de gluten no aplica porque la serología y la biopsia descartaron enfermedad celíaca.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c05-q5",
            "ordinal": 5,
            "stem": "Otra entidad asociada a este padecimiento es:",
            "options": [
              "Escleroderma",
              "Hipertiroidismo",
              "Úlcera por AINE",
              "Dermatitis herpetiforme"
            ],
            "answer_index": 0,
            "correct_text": "Escleroderma",
            "explanation": "La sobrepoblación bacteriana se asocia a trastornos que lentifican la motilidad intestinal, y la esclerodermia es el clásico por la hipomotilidad que produce. La úlcera por AINE es la opción engañosa por el antecedente de la paciente, pero es una complicación del fármaco y no una entidad ligada al estasis; la dermatitis herpetiforme se asocia a enfermedad celíaca, que aquí se descartó.",
            "topic": "Intestino Delgado"
          }
        ],
        "topicId": "delgado"
      },
      {
        "id": "puem-r2-case-06",
        "number": 6,
        "title": "Oclusión Intestinal por Adherencias y Pérdidas de Líquidos",
        "topic": "Intestino Delgado",
        "context": "Hombre de 30 años con antecedente de apendicetomía a los 15 años. Acude por dolor abdominal tipo cólico generalizado, náuseas, vómito, incapacidad para evacuar y canalizar gases desde hace 48 horas. EF: pero 70 kg, talla 1.72 cm, TA 100/60, FC 100, FR 20 y TEMP 36.5°; mal estado de hidratación, cardiopulmonar sin compromiso aparente, abdomen distendido y timpánico; doloroso con peristalsis aumentada en intensidad. Tacto rectal con ámpula vacía.",
        "questions": [
          {
            "id": "puem-r2-c06-q1",
            "ordinal": 1,
            "stem": "El diagnóstico más probable es:",
            "options": [
              "Diverticulitis",
              "Colitis inespecífica",
              "Isquemia intestinal",
              "Obstrucción intestinal"
            ],
            "answer_index": 3,
            "correct_text": "Obstrucción intestinal",
            "explanation": "Un paciente con apendicectomía previa que presenta dolor cólico, vómito, ausencia de canalización de gases, distensión timpánica con peristalsis aumentada y ámpula rectal vacía tiene una obstrucción intestinal, casi siempre por adherencias (15 Intestino Delgado Schwartz, p. 10). La isquemia intestinal es la distractora, pero cursa con dolor desproporcionado a la exploración, acidosis y sin peristalsis aumentada.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c06-q2",
            "ordinal": 2,
            "stem": "La pérdida de agua y electrólitos en este paciente es a expensas de líquido:",
            "options": [
              "Intestinal",
              "Intersticial",
              "Plasmático",
              "Extracelular"
            ],
            "answer_index": 3,
            "correct_text": "Extracelular",
            "explanation": "En la obstrucción, el líquido se acumula en la luz y en la pared intestinal edematosa (tercer espacio) y se pierde además por el vómito; lo que se pierde proviene del compartimento extracelular, que incluye plasma e intersticio. Elegir solo «intersticial» o «plasmático» describe una parte del compartimento, y «intestinal» nombra el sitio donde se secuestra el líquido, no el compartimento de origen.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c06-q3",
            "ordinal": 3,
            "stem": "El paciente presenta somnoliencia, apatía, hiporexia, hipotensión ortostática y disminución de la turgencia de la piel, por lo que se debe sospechar:",
            "options": [
              "Hipocloremia",
              "Hipernatremia",
              "Déficit severo de líquido intravascular",
              "Déficit moderado de líquido intracelular"
            ],
            "answer_index": 2,
            "correct_text": "Déficit severo de líquido intravascular",
            "explanation": "Somnolencia, apatía, hiporexia, hipotensión ortostática y piel con turgencia disminuida son signos de hipovolemia grave: el volumen circulante efectivo es insuficiente para mantener la presión al cambiar de posición. El déficit de líquido intravascular explica la hipotensión, y no hay datos de laboratorio que sustenten hipernatremia o hipocloremia; el déficit intracelular predominaría con sed y osmolaridad alta, no con este cuadro hemodinámico.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c06-q4",
            "ordinal": 4,
            "stem": "Para realizar un adecuado balance hídrico, en términos generales las perdidas insensibles en ml/24 horas, son de:",
            "options": [
              "200",
              "400",
              "500",
              "600"
            ],
            "answer_index": 3,
            "correct_text": "600",
            "explanation": "Las pérdidas insensibles son el agua que se pierde por piel y vía respiratoria sin que se vea ni se mida, por eso no se cuantifican sino que se estiman y se suman al balance. La clave del PUEM toma 600 mL/24 horas como valor general; es solo una estimación basal que aumenta con fiebre, taquipnea o ambiente caluroso, y no sustituye la medición de lo que sí se puede medir (diuresis, drenajes, vómito).",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c06-q5",
            "ordinal": 5,
            "stem": "Entre las secreciones digestivas, la de mayor contenido de bicarbonato es la:",
            "options": [
              "Biliar",
              "Saliva",
              "Gástrica",
              "Pancreática"
            ],
            "answer_index": 3,
            "correct_text": "Pancreática",
            "explanation": "La secreción pancreática es la de mayor contenido de bicarbonato: las células ductales lo secretan para neutralizar el quimo ácido que sale del estómago y dar el pH que requieren las enzimas pancreáticas. La bilis también es alcalina pero con menor concentración, la gástrica es ácida por la bomba H+/K+ de la célula parietal y la saliva tiene poco bicarbonato en comparación.",
            "topic": "Intestino Delgado"
          }
        ],
        "topicId": "delgado"
      },
      {
        "id": "puem-r2-case-24",
        "number": 24,
        "title": "Oclusión Intestinal Mecánica Alta por Bridas",
        "topic": "Intestino Delgado",
        "context": "Hombre de 58 años con antecedentes de apendicectomía a los 16 años y colecistectomía a los 30 años, tabaquismo de 5 cigarros por día. Inicio hace 14 horas con dolor abdominal de moderado a intenso, tipo cólico, acompañado con náusea y vómito de contenido verde amarillento, distensión abdominal y evacuaciones diarreicas en 2 ocasiones, sin canalizar gases por el recto. EF: distensión abdominal, dolor difuso a la palpación profunda, timpanismo generalizado, peristaltismo aumento de frecuencia e intensidad. Hb 17, Hto, 46%, leucocitos 16,000, 80% neutrófilos y 1% bandas. Na 140, K 3.2 y Cl 98.",
        "questions": [
          {
            "id": "puem-r2-c24-q1",
            "ordinal": 1,
            "stem": "El diagnóstico inicial es:",
            "options": [
              "Íleo metabólico",
              "Gastroenteritis",
              "Oclusión intestinal alta",
              "Trombosis mesentérica"
            ],
            "answer_index": 2,
            "correct_text": "Oclusión intestinal alta",
            "explanation": "Dolor cólico, vómito de contenido biliar, distensión, peristaltismo aumentado y falta de canalización de gases en un paciente con cirugías abdominales previas indican oclusión intestinal mecánica alta. El íleo metabólico cursa sin peristalsis, la gastroenteritis suele producir diarrea sin distensión importante, y la trombosis mesentérica produce dolor desproporcionado con exploración pobre.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c24-q2",
            "ordinal": 2,
            "stem": "El estudio inicial que solicita es:",
            "options": [
              "Colonoscopia",
              "Arteriografía mesentérica",
              "Radiografía de abdomen de pie y decúbito",
              "TAC con doble contraste"
            ],
            "answer_index": 2,
            "correct_text": "Radiografía de abdomen de pie y decúbito",
            "explanation": "El primer estudio es la radiografía de abdomen de pie y en decúbito, porque es rápida, barata y suficiente para ver niveles hidroaéreos, asas dilatadas y descartar perforación. La TAC con doble contraste confirma después, y la colonoscopia y la arteriografía no son estudios iniciales de una oclusión de intestino delgado.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c24-q3",
            "ordinal": 3,
            "stem": "El estudio que tiene mayor especificada y sensibilidad para confirmar el diagnóstico es:",
            "options": [
              "Arteriografía mesentérica",
              "USG abdomino pélvico",
              "Placa simple de abdomen de pie y decúbito",
              "TAC con doble contraste"
            ],
            "answer_index": 3,
            "correct_text": "TAC con doble contraste",
            "explanation": "La TAC es la prueba con mayor sensibilidad y especificidad para confirmar la oclusión, porque localiza la zona de transición, distingue la causa mecánica y detecta datos de isquemia o estrangulación. La placa simple orienta pero es menos específica, el ultrasonido depende del operador y la arteriografía mesentérica estudia solo la isquemia vascular.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c24-q4",
            "ordinal": 4,
            "stem": "Por frecuencia el factor causal de este padecimiento es:",
            "options": [
              "Adherencias",
              "Salmonelosis",
              "Arterioesclerosis",
              "Adenoma velloso"
            ],
            "answer_index": 0,
            "correct_text": "Adherencias",
            "explanation": "Por frecuencia la causa de oclusión de intestino delgado en un paciente con cirugías previas, apendicectomía y colecistectomía, son las adherencias o bridas (15 Intestino Delgado Schwartz, p. 10). La salmonelosis, la arterioesclerosis y un adenoma velloso son causas raras de oclusión mecánica.",
            "topic": "Intestino Delgado"
          },
          {
            "id": "puem-r2-c24-q5",
            "ordinal": 5,
            "stem": "El tratamiento inicial es:",
            "options": [
              "Antibióticos",
              "Cirugía inmediata",
              "Soluciones isotónicas y SNG",
              "Soluciones hipertónicas y SNG"
            ],
            "answer_index": 2,
            "correct_text": "Soluciones isotónicas y SNG",
            "explanation": "El tratamiento inicial de una oclusión sin datos de estrangulación es conservador: reposición con soluciones isotónicas, corrección de electrólitos (el K de 3.2 requiere reposición) y descompresión con sonda nasogástrica. Los antibióticos no resuelven la obstrucción, las soluciones hipertónicas no reponen el déficit extracelular y la cirugía inmediata se reserva para peritonitis, isquemia o falla del manejo.",
            "topic": "Intestino Delgado"
          }
        ],
        "topicId": "delgado"
      },
      {
        "id": "puem-r2-case-32",
        "number": 32,
        "title": "Isquemia Mesentérica Aguda en Postoperatorio",
        "topic": "Intestino Delgado / Vascular",
        "context": "Mujer de 66 años diabética, con traumatismo de cadera tratada con cirugía. Al día 15 de post operatorio inicia con dolor abdominal continuo intenso y gran distensión, no canaliza gases ni heces. EF: FC 140, FR 36, Temp 38°C, TA 90/60, en abdomen resistencia muscular y ausencia de peristalsis; tacto rectal con sangre oscura. Glucemia 280, Hb 17, Hto 52%, leucocitos 22,600. En la radiografía simple de abdomen se observa gran distensión de asas de intestino delgado.",
        "questions": [
          {
            "id": "puem-r2-c32-q1",
            "ordinal": 1,
            "stem": "El diagnóstico más probable es:",
            "options": [
              "Impacto fecal",
              "Vólvulo colónico",
              "Obstrucción intestinal",
              "Trombosis mesentérica"
            ],
            "answer_index": 3,
            "correct_text": "Trombosis mesentérica",
            "explanation": "Una paciente diabética en el posoperatorio con dolor abdominal intenso desproporcionado, distensión, ausencia de peristalsis, sangre oscura al tacto rectal, taquicardia, leucocitosis y hemoconcentración tiene isquemia intestinal por trombosis mesentérica (15 Intestino Delgado Schwartz, p. 31). El impacto fecal y el vólvulo colónico no explican la sangre ni el estado de choque, y la obstrucción simple no cursa con esa toxicidad.",
            "topic": "Intestino Delgado / Vascular"
          },
          {
            "id": "puem-r2-c32-q2",
            "ordinal": 2,
            "stem": "La etiología de este padecimiento es:",
            "options": [
              "Tumoral",
              "Vascular",
              "Neurógena",
              "Metabólica"
            ],
            "answer_index": 1,
            "correct_text": "Vascular",
            "explanation": "La isquemia mesentérica es de etiología vascular: por émbolo, trombosis arterial, vasoespasmo o trombosis venosa (15 Intestino Delgado Schwartz, p. 31). Las causas tumoral, neurógena o metabólica no producen la oclusión del flujo sanguíneo mesentérico.",
            "topic": "Intestino Delgado / Vascular"
          },
          {
            "id": "puem-r2-c32-q3",
            "ordinal": 3,
            "stem": "La conducta en este momento es:",
            "options": [
              "Colonoscopia",
              "Laparotomía exploradora",
              "Laparoscopia diagnostica",
              "TAC"
            ],
            "answer_index": 1,
            "correct_text": "Laparotomía exploradora",
            "explanation": "Con peritonitis (resistencia muscular, ausencia de peristalsis), choque y sospecha de infarto intestinal, el siguiente paso es la laparotomía exploradora para evaluar la viabilidad y resecar el intestino necrótico. La TAC retrasa la cirugía en una paciente inestable, la colonoscopia no está indicada y la laparoscopia diagnóstica es poco útil con distensión masiva y choque.",
            "topic": "Intestino Delgado / Vascular"
          },
          {
            "id": "puem-r2-c32-q4",
            "ordinal": 4,
            "stem": "De acuerdo a la conducta anterior el hallazgo que espera es:",
            "options": [
              "Edema inter asa",
              "Isquemia intestinal",
              "Dilatación cecal de 9 cm",
              "Dilatación de asas y líquido libre"
            ],
            "answer_index": 1,
            "correct_text": "Isquemia intestinal",
            "explanation": "Tras la laparotomía por isquemia mesentérica, el hallazgo esperado es isquemia intestinal, con asas de color violáceo o negruzco, pared edematosa y, según la evolución, segmentos necróticos (15 Intestino Delgado Schwartz, p. 31). El edema entre asas o el líquido libre son inespecíficos, y la dilatación cecal de 9 cm sugiere obstrucción colónica distal o vólvulo.",
            "topic": "Intestino Delgado / Vascular"
          },
          {
            "id": "puem-r2-c32-q5",
            "ordinal": 5,
            "stem": "La consecuencia fisiopatológica de esta enfermedad es:",
            "options": [
              "Sepsis abdominal",
              "Isquemia intestinal",
              "Necrosis intestinal",
              "Obstrucción intestinal"
            ],
            "answer_index": 2,
            "correct_text": "Necrosis intestinal",
            "explanation": "La consecuencia fisiopatológica de la oclusión del flujo mesentérico es la necrosis intestinal: cuando la isquemia se prolonga, la pared muere y se pierde la barrera mucosa, con translocación bacteriana, sepsis y choque. La isquemia es el mecanismo inicial y no la consecuencia final, la sepsis abdominal viene como complicación de la necrosis y la obstrucción es un hallazgo asociado, no la consecuencia principal.",
            "topic": "Intestino Delgado / Vascular"
          }
        ],
        "topicId": "delgado"
      }
    ]
  },
  {
    "id": "caso-puem-colon",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Colon y Apéndice",
    "subtitle": "7 casos clínicos seriados con 33 reactivos comentados paso a paso.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "7 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-26",
        "number": 26,
        "title": "Vólvulo de Sigmoides con Signo de Grano de Café",
        "topic": "Colon",
        "context": "Mujer de 80 años quien inicio hace 5 días con 6 evacuaciones líquidas que cedieron espontáneamente, dolor abdominal tipo cólico progresivo en intensidad, distensión y vómito fecaloide sin canalizar gases. EF: mal hidratada, aumento del esfuerzo respiratorio, abdomen distendido, doloroso a la palpación generalizada, sin datos de irritación, timpánico y con peristalsis disminuida. Al tacto rectal esfínter hipotónico y ámpula rectal vacía. Las placas simples de abdomen muestran distensión colónica, con imagen en grano de café.",
        "questions": [
          {
            "id": "puem-r2-c26-q2",
            "ordinal": 2,
            "stem": "La causa que explica esta patología es:",
            "options": [
              "CUCI",
              "Colon redundante",
              "Antecedente de cirugía pélvica",
              "Aumento de la presión intraluminal"
            ],
            "answer_index": 1,
            "correct_text": "Colon redundante",
            "explanation": "La presencia de un colon sigmoides redundante con mesenterio estrecho es la base anatómica predisponente.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c26-q3",
            "ordinal": 3,
            "stem": "El estudio de primera elección que le apoya para el diagnóstico es:",
            "options": [
              "Endoscopia",
              "TC de abdomen",
              "Tránsito intestinal",
              "Colon por enema a baja presión"
            ],
            "answer_index": 1,
            "correct_text": "TC de abdomen",
            "explanation": "La tomografía de abdomen contrastada muestra el signo del remolino mesentérico y evalúa perfusión de la pared colónica.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c26-q4",
            "ordinal": 4,
            "stem": "El procedimiento terapéutico más adecuado es:",
            "options": [
              "Colectomía subtotal",
              "Destorsión del vólvulo con sonda",
              "Resección con colo colo anastomosis",
              "Resección, colostomía y bolsa de Hartmann"
            ],
            "answer_index": 1,
            "correct_text": "Destorsión del vólvulo con sonda",
            "explanation": "En ausencia de datos de peritonitis o gangrena, el tratamiento inicial es la descompresión y destorsión endoscópica mediante colonoscopia o sonda rectal.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c26-q5",
            "ordinal": 5,
            "stem": "Siete días posteriores al tratamiento presenta sepsis abdominal, el manejo de primera elección es:",
            "options": [
              "Abdomen abierto con aseo",
              "Lavado peritoneal continuo",
              "Aseo y cierre de la pared con drenaje",
              "Lavado de cavidad y cierre de la pared"
            ],
            "answer_index": 0,
            "correct_text": "Abdomen abierto con aseo",
            "explanation": "Si se presenta necrosis, perforación o peritonitis, se realiza laparotomía con resección del sigmoides, colostomía terminal y bolsa de Hartmann.",
            "topic": "Colon"
          }
        ],
        "topicId": "colon"
      },
      {
        "id": "puem-r2-case-28",
        "number": 28,
        "title": "Colitis Ulcerosa Crónica Inespecífica y Megacolon Tóxico",
        "topic": "Colon",
        "context": "Hombre de 59 años quien inicio hace 30 días con 12 evacuaciones diarreicas muco sanguinolentas al día, ataque al estado general, dolor abdominal tipo cólico y tenesmo rectal. EF: temperatura 39°C y FC 95. Albúmina 1 g/dl, Hb 9 y VSG 38. La colonoscopia con diagnóstico de CUCI. Al séptimo día a pesar del tratamiento se exacerban los signos y síntomas colónicos y se agrega distensión abdominal. En la rx simple de abdomen se observa dilatación colónica, más evidente en colon transverso.",
        "questions": [
          {
            "id": "puem-r2-c28-q1",
            "ordinal": 1,
            "stem": "El diagnóstico que se establece con la placa simple de abdomen es:",
            "options": [
              "Íleo metabólico",
              "Vólvulo colónico",
              "Megacolon tóxico",
              "Síndrome de Ogilvie"
            ],
            "answer_index": 2,
            "correct_text": "Megacolon tóxico",
            "explanation": "Un paciente con CUCI grave que empeora con distensión abdominal y una radiografía con dilatación colónica, más evidente en el transverso, tiene un megacolon tóxico, una complicación del CUCI (16 Colon Sabiston, p. 50). El vólvulo colónico muestra un asa en grano de café, el Ogilvie ocurre sin colitis y el íleo metabólico no produce esa dilatación segmentaria con toxicidad sistémica.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c28-q2",
            "ordinal": 2,
            "stem": "El tratamiento es:",
            "options": [
              "Colectomía subtotal",
              "Reposición hidroelectrolítica",
              "Colonoscopia descompresiva",
              "Proctocolectomía con reservorio íleo anal"
            ],
            "answer_index": 0,
            "correct_text": "Colectomía subtotal",
            "explanation": "Un megacolon tóxico que empeora a pesar del tratamiento médico es una urgencia quirúrgica, y la operación indicada es la colectomía (total abdominal o subtotal) con ileostomía terminal, que retira el colon enfermo sin anastomosis ni proctectomía en un paciente séptico y desnutrido (16 Colon Schwartz, p. 24; guía ASCRS 2021). La proctocolectomía con reservorio ileoanal es el tiempo definitivo posterior, que plantea la pregunta siguiente. La reposición hidroelectrolítica sola o la descompresión colonoscópica no resuelven el cuadro y esta última aumenta el riesgo de perforación.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c28-q3",
            "ordinal": 3,
            "stem": "El tratamiento definitivo después del tratamiento anterior, es:",
            "options": [
              "Azatioprina o ciclosporina",
              "Proctectomía con ileostomía terminal",
              "Proctectomía con íleo anastomosis",
              "Proctectomía restauradora con reservorio íleo anal"
            ],
            "answer_index": 3,
            "correct_text": "Proctectomía restauradora con reservorio íleo anal",
            "explanation": "Después de la colectomía subtotal de urgencia, el tratamiento definitivo es la proctectomía restauradora con reservorio ileoanal, que extirpa el recto enfermo y conserva el tránsito por el ano. La proctectomía con ileostomía terminal deja un estoma permanente, la anastomosis ileorrectal deja mucosa enferma y azatioprina o ciclosporina son manejo médico, no definitivo.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c28-q5",
            "ordinal": 5,
            "stem": "La complicación tardía post tratamiento más frecuente es:",
            "options": [
              "Fístulas",
              "Pouchitis",
              "Hemorragia",
              "Perforación colónica"
            ],
            "answer_index": 1,
            "correct_text": "Pouchitis",
            "explanation": "La complicación tardía más frecuente tras el reservorio ileoanal es la reservoritis (pouchitis), una inflamación inespecífica del reservorio que causa diarrea, urgencia y dolor, y responde a antibióticos. Las fístulas, la hemorragia y la perforación son menos frecuentes y no son la secuela típica de esta técnica.",
            "topic": "Colon"
          }
        ],
        "topicId": "colon"
      },
      {
        "id": "puem-r2-case-29",
        "number": 29,
        "title": "Poliposis Adenomatosa Familiar (PAF)",
        "topic": "Colon",
        "context": "Hombre de 19 años con antecedentes de padre muerto por cáncer de colon a los 45 años, hermana bajo vigilancia médica por pólipos colónicos. Desde hace 1 año presenta evacuaciones mucho sanguinolentas y dolor cólico abdominal de poca intensidad. La colonoscopia reporta presencia de más de 100 pólipos sésiles y pediculados en todo el colon.",
        "questions": [
          {
            "id": "puem-r2-c29-q1",
            "ordinal": 1,
            "stem": "El diagnóstico es:",
            "options": [
              "Síndrome de cowden",
              "Síndrome de Lynch I",
              "Síndrome de peutz jeghers",
              "Poliposis adenomatosa familiar"
            ],
            "answer_index": 3,
            "correct_text": "Poliposis adenomatosa familiar",
            "explanation": "Un joven de 19 años con más de 100 pólipos en todo el colon, rectorragia y antecedente familiar de cáncer de colon temprano tiene poliposis adenomatosa familiar. El síndrome de Lynch no produce poliposis masiva, Peutz-Jeghers cursa con pólipos hamartomatosos y pigmentación mucocutánea, y Cowden con hamartomas múltiples y tumores extraintestinales.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c29-q2",
            "ordinal": 2,
            "stem": "La transmisión genética de este padecimiento es:",
            "options": [
              "Mutación de novo",
              "Autosómica dominante",
              "Recesiva ligada al cromosoma Y",
              "Recesiva ligada al cromosoma X"
            ],
            "answer_index": 1,
            "correct_text": "Autosómica dominante",
            "explanation": "La poliposis adenomatosa familiar se hereda de forma autosómica dominante por mutación del gen APC, por lo que el hijo de un afectado tiene 50% de riesgo y suele haber antecedente familiar, como el padre y la hermana de este paciente. No es de novo en la mayoría, y no es recesiva ni ligada al cromosoma X o Y, porque afecta a hombres y mujeres por igual.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c29-q3",
            "ordinal": 3,
            "stem": "El tipo histológico probable de estos pólipos es:",
            "options": [
              "Hamartomas",
              "Adenomas vellosos",
              "Adenomas tubulares",
              "Adenomas túbulo vellosos"
            ],
            "answer_index": 2,
            "correct_text": "Adenomas tubulares",
            "explanation": "Los pólipos de la poliposis adenomatosa familiar son adenomas, y el tipo más frecuente es el adenoma tubular, mientras que el velloso o el túbulo-velloso aparecen en menor proporción y los hamartomas corresponden a otros síndromes como Peutz-Jeghers o poliposis juvenil. Aquí la multiplicidad (más de 100 pólipos) y el antecedente familiar orientan a adenomas.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c29-q4",
            "ordinal": 4,
            "stem": "El método diagnóstico para detectar esta patología es:",
            "options": [
              "Colonoscopia",
              "Tránsito intestinal",
              "TC abdomino pélvica",
              "Sangre oculta en heces"
            ],
            "answer_index": 0,
            "correct_text": "Colonoscopia",
            "explanation": "El diagnóstico se hace con colonoscopia, que permite ver los más de 100 pólipos, tomar biopsias y confirmar el fenotipo. El tránsito intestinal y la TC son menos sensibles para pólipos y la sangre oculta en heces es un tamizaje, no un método diagnóstico en un paciente que ya tiene rectorragia.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c29-q5",
            "ordinal": 5,
            "stem": "Tratamiento ideal de esta patología es:",
            "options": [
              "Polipectomía",
              "Proctocolectomía con ileostomía",
              "Colectomía con anastomosis íleo rectal",
              "Proctocolectomía con reservorio íleo anal"
            ],
            "answer_index": 3,
            "correct_text": "Proctocolectomía con reservorio íleo anal",
            "explanation": "El tratamiento ideal es la proctocolectomía con reservorio ileoanal, que elimina la mucosa colorrectal donde se desarrollará el cáncer y conserva el tránsito por el ano (PAF: opciones de proctocolectomía con ileostomía, colectomía con anastomosis ileorrectal o proctocolectomía con reservorio, 16 Colon Schwartz, p. 33). La polipectomía es inviable con cientos de pólipos y la anastomosis ileorrectal deja recto con riesgo de cáncer; la ileostomía definitiva se reserva para casos concretos.",
            "topic": "Colon"
          }
        ],
        "topicId": "colon"
      },
      {
        "id": "puem-r2-case-30",
        "number": 30,
        "title": "Rectorragia y Pólipos Colónicos con Riesgo de Malignidad",
        "topic": "Colon",
        "context": "Hombre de 65 años, sin antecedentes de importancia. Acude e urgencias por presentar rectorragia en varias ocasiones en los últimos 2 meses, sin otra sintomatología. EF: TA 100/65, FC 80. Abdomen sin datos patológicos. Hb 13 y Hto 38%.",
        "questions": [
          {
            "id": "puem-r2-c30-q1",
            "ordinal": 1,
            "stem": "Por frecuencia la causa probable de esta hemorragia es:",
            "options": [
              "Angiodisplasia",
              "Diverticulosis colónica",
              "Cáncer de colon o recto",
              "Úlcera solitaria del recto"
            ],
            "answer_index": 1,
            "correct_text": "Diverticulosis colónica",
            "explanation": "En un hombre de 65 años con rectorragia repetida pero estable (TA y hemoglobina conservadas) y exploración abdominal normal, la causa más frecuente de hemorragia baja es la diverticulosis colónica, que sangra de forma indolora y a veces recurrente. El cáncer debe descartarse siempre, pero es menos frecuente, y la angiodisplasia o la úlcera solitaria del recto son menos comunes.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c30-q2",
            "ordinal": 2,
            "stem": "Una vez estabilizado el paciente, el estudio que indica es:",
            "options": [
              "Angiografía",
              "Colonoscopia",
              "Colon por enema",
              "Eritrocitos marcados"
            ],
            "answer_index": 1,
            "correct_text": "Colonoscopia",
            "explanation": "Una vez estable, el estudio de elección es la colonoscopia, que localiza el sitio de sangrado, permite biopsiar y tratar y descarta neoplasia. La angiografía y los eritrocitos marcados se reservan para sangrado activo importante, y el colon por enema es menos sensible y no permite tratamiento.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c30-q3",
            "ordinal": 3,
            "stem": "Si encuentra un pólipo único de 1.5 cm, sésil, ulcerado, localizado en sigmoides; la conducta es:",
            "options": [
              "Sigmoidectomía",
              "Resección quirúrgica",
              "Polipectomía endoscópica",
              "Colonoscopia virtual cada año"
            ],
            "answer_index": 2,
            "correct_text": "Polipectomía endoscópica",
            "explanation": "Un pólipo único de 1.5 cm en el sigmoides es accesible y se maneja con polipectomía endoscópica, enviándolo a patología para decidir si requiere cirugía adicional (si hay invasión de mal pronóstico). La sigmoidectomía inicial es excesiva sin diagnóstico histológico y la colonoscopia virtual anual no retira el pólipo.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c30-q4",
            "ordinal": 4,
            "stem": "El pólipo que tiene alta probabilidad de malignización es:",
            "options": [
              "Juvenil",
              "Velloso",
              "Hamartomatoso",
              "Adenoma tubular"
            ],
            "answer_index": 1,
            "correct_text": "Velloso",
            "explanation": "El pólipo con mayor probabilidad de malignización es el adenoma velloso, que tiene mayor riesgo que el tubular, y el riesgo crece con el tamaño y el componente velloso. Los pólipos juveniles y hamartomatosos son benignos, y el adenoma tubular es el que menos se malignea de los adenomas.",
            "topic": "Colon"
          },
          {
            "id": "puem-r2-c30-q5",
            "ordinal": 5,
            "stem": "Si hay infiltración de células malignas en la base del pólipo, su decisión es:",
            "options": [
              "QT",
              "Sigmoidectomía",
              "Observación endoscópica cada 6 meses",
              "Colonoscopia y marcadores tumorales anuales"
            ],
            "answer_index": 1,
            "correct_text": "Sigmoidectomía",
            "explanation": "Si las células malignas invaden la base del pólipo (el pie de implantación), la polipectomía no garantiza margen libre y hay riesgo de metástasis ganglionar, por lo que se hace sigmoidectomía con resección oncológica. La observación endoscópica o los marcadores anuales dejarían un cáncer invasor sin tratamiento y la quimioterapia sola no sustituye la resección.",
            "topic": "Colon"
          }
        ],
        "topicId": "colon"
      },
      {
        "id": "puem-r2-case-33",
        "number": 33,
        "title": "Apendicitis Aguda Perforada y Abscedada",
        "topic": "Colon / Apéndice",
        "context": "Hombre de 28 años quien hace 4 días inicio con dolor abdominal agudo, fue tratado con analgésicos y antibióticos no especificados, se realizó laparotomía exploradora con hallazgo operatorio de apendicitis aguda perforada y abscedada.",
        "questions": [
          {
            "id": "puem-r2-c33-q1",
            "ordinal": 1,
            "stem": "Por frecuencia el microorganismo anaerobio que espera aislar es:",
            "options": [
              "Clostridium Sp.",
              "Escherichia Coli",
              "Pseudomona Sp.",
              "Bacteroides fragilis"
            ],
            "answer_index": 3,
            "correct_text": "Bacteroides fragilis",
            "explanation": "En la apendicitis aguda perforada y peritonitis apendicular, el anaerobio más frecuentemente aislado es Bacteroides fragilis, seguido de bacilos facultativos como Escherichia coli.",
            "topic": "Colon / Apéndice"
          },
          {
            "id": "puem-r2-c33-q2",
            "ordinal": 2,
            "stem": "La irrigación arterial del apéndice proviene de:",
            "options": [
              "Ileocólica",
              "Cólica media",
              "Cólica derecha",
              "Mesentérica superior"
            ],
            "answer_index": 0,
            "correct_text": "Ileocólica",
            "explanation": "La arteria apendicular es rama terminal de la arteria ileocólica (rama de la mesentérica superior).",
            "topic": "Colon / Apéndice"
          },
          {
            "id": "puem-r2-c33-q3",
            "ordinal": 3,
            "stem": "En este caso la incisión quirúrgica indicada es:",
            "options": [
              "Mc burney",
              "Rocky Davis",
              "Media infraumbilical",
              "Paramedia derecha"
            ],
            "answer_index": 2,
            "correct_text": "Media infraumbilical",
            "explanation": "Tras 48 horas de evolución con sospecha de peritonitis generalizada o absceso, el abordaje laparotómico por incisión media infraumbilical ofrece mejor campo quirúrgico y lavado de cavidad.",
            "topic": "Colon / Apéndice"
          },
          {
            "id": "puem-r2-c33-q4",
            "ordinal": 4,
            "stem": "Si la base del ciego se encuentra con necrosis y abscedada se recomienda realizar:",
            "options": [
              "Cecostomía",
              "Resección de ciego e ileostomía",
              "Drenaje de absceso e ileostomía",
              "Hemicolectomía derecha e ileotransversoanastomosis"
            ],
            "answer_index": 1,
            "correct_text": "Resección de ciego e ileostomía",
            "explanation": "Si la necrosis abarca la base apendicular y el ciego, el cierre primario fallará; se requiere resección de ciego e ileostomía o hemicolectomía derecha con ileotransversoanastomosis.",
            "topic": "Colon / Apéndice"
          },
          {
            "id": "puem-r2-c33-q5",
            "ordinal": 5,
            "stem": "La conducta a seguir es:",
            "options": [
              "Drenaje cerrado",
              "Cierre por primera intención",
              "Cierre por segunda intención",
              "Irrigación local con antibióticos"
            ],
            "answer_index": 0,
            "correct_text": "Drenaje cerrado",
            "explanation": "En peritonitis apendicular purulenta con abscesos se coloca drenaje cerrado en el fondo de saco de Douglas y correderas parietocólicas.",
            "topic": "Colon / Apéndice"
          }
        ],
        "topicId": "colon"
      },
      {
        "id": "puem-r2-case-34",
        "number": 34,
        "title": "Trauma de Colon por PAF y Fascitis Necrotizante",
        "topic": "Colon / Trauma",
        "context": "Hombre de 50 años quien 8 horas antes recibió un balazo con orificio de entrada en la ingle izquierda y orificio de salida en fosa ilíaca derecha. EF: TA 100/65, FC 115, FR 34, Temp 35.7°C. inquieto, rodillas flexionadas, quejumbroso, movimientos limitados por acentuación del dolor, peristalsis ausente y rigidez abdominal. En la cirugía se identificó perforación de sigmoides. Durante los siguientes 3 días, presenta inestabilidad hemodinámica, escroto necrótico, crepitación perineal y aumento de volumen del miembro pélvico izquierdo. Recibió gentamicina, metronidazol y ampicilina.",
        "questions": [
          {
            "id": "puem-r2-c34-q1",
            "ordinal": 1,
            "stem": "El manejo de la lesión de sigmoides debió haber sido:",
            "options": [
              "Cierre primario",
              "Colostomía derivativa",
              "Resección y anastomosis",
              "Cierre primario e ileostomía"
            ],
            "answer_index": 1,
            "correct_text": "Colostomía derivativa",
            "explanation": "Una herida de colon por proyectil con 8 horas de evolución, peritonitis, inestabilidad hemodinámica y contaminación importante se maneja con colostomía derivativa, que evita el riesgo de dehiscencia de una sutura o anastomosis en un campo contaminado y con choque. El cierre primario o la resección con anastomosis se reservan para pacientes estables con poca contaminación y sin comorbilidad.",
            "topic": "Colon / Trauma"
          },
          {
            "id": "puem-r2-c34-q2",
            "ordinal": 2,
            "stem": "En este momento la primera posibilidad diagnostica es:",
            "options": [
              "Fascitis necrotizante",
              "Absceso abdominal",
              "Tromboflebitis supurativa",
              "Hematoma pélvico infectado"
            ],
            "answer_index": 0,
            "correct_text": "Fascitis necrotizante",
            "explanation": "Escroto necrótico, crepitación perineal, edema del miembro pélvico e inestabilidad hemodinámica tras una lesión colónica contaminada son el cuadro de una fascitis necrotizante (gangrena de Fournier). Un absceso abdominal no produce crepitación ni necrosis cutánea, la tromboflebitis supurativa no explica el gas en tejidos blandos y un hematoma infectado no evoluciona con tanta rapidez.",
            "topic": "Colon / Trauma"
          },
          {
            "id": "puem-r2-c34-q3",
            "ordinal": 3,
            "stem": "El estudio inicial que indica es:",
            "options": [
              "TC de abdomen",
              "USG abdominal",
              "TC pélvico abdominal",
              "USG Doppler de muslo"
            ],
            "answer_index": 2,
            "correct_text": "TC pélvico abdominal",
            "explanation": "La clave del PUEM es la TC pélvico abdominal, que muestra la extensión del gas y de la necrosis en tejidos blandos, la fuga colónica y las colecciones. La TC de abdomen sola no abarcaría el periné y el muslo, y el ultrasonido (abdominal o Doppler de muslo) tiene menor rendimiento. Con un diagnóstico clínico claro la TC no debe retrasar el desbridamiento.",
            "topic": "Colon / Trauma"
          },
          {
            "id": "puem-r2-c34-q4",
            "ordinal": 4,
            "stem": "Además de la estabilización hemodinámica la conducta a seguir es:",
            "options": [
              "Fasciotomía",
              "Anticoagulación",
              "Laparotomía exploradora",
              "Cambio de esquema antimicrobiano"
            ],
            "answer_index": 0,
            "correct_text": "Fasciotomía",
            "explanation": "La fascitis necrotizante es una urgencia quirúrgica: además de estabilizar al paciente se hace apertura amplia de los planos fasciales y desbridamiento del tejido necrótico, que es lo que da la clave «fasciotomía». Cambiar solo los antibióticos o anticoagular no controla el foco, y repetir la laparotomía no trata la necrosis del periné y el muslo.",
            "topic": "Colon / Trauma"
          },
          {
            "id": "puem-r2-c34-q5",
            "ordinal": 5,
            "stem": "Los agentes etiológicos probables son:",
            "options": [
              "Estreptococos grupo A y B",
              "Enterobacterias y pseudomonas",
              "Enterococos, enterobacterias y cándida",
              "Bacteroides, peptoestreptococo y enterobacterias"
            ],
            "answer_index": 3,
            "correct_text": "Bacteroides, peptoestreptococo y enterobacterias",
            "explanation": "La fascitis necrotizante de origen colónico o perineal es polimicrobiana, con anaerobios como Bacteroides y peptoestreptococo junto con enterobacterias, que son la flora del colon. Los estreptococos del grupo A y B causan el tipo monomicrobiano de piel y partes blandas, y las pseudomonas o la cándida son menos probables en una herida de colon sin hospitalización previa.",
            "topic": "Colon / Trauma"
          }
        ],
        "topicId": "colon"
      },
      {
        "id": "puem-r2-case-45",
        "number": 45,
        "title": "Peritonitis Diverticular Purulenta (Hinchey III/IV)",
        "topic": "Colon / Peritonitis",
        "context": "Hombre de 65 años con abdomen agudo es intervenido encontrando peritonitis purulenta secundaria a divertículo de sigmoides perforado, se le realiza sigmoidectomía y colostomía de colon descendente, lavado de cavidad y abdomen abierto. En el post operatorio temp 39°C, FC 110, FR 30 y TA 85/50, leucocitosis 18,000, lactato sérico 10, glicemia 300 y creatinina en 2. A las 48 horas cultivos de líquido peritoneal y sérico positivos a E. coli.",
        "questions": [
          {
            "id": "puem-r2-c45-q1",
            "ordinal": 1,
            "stem": "En este momento el diagnóstico es:",
            "options": [
              "Sepsis grave",
              "Choque séptico",
              "Falla multiorgánica",
              "SRIS"
            ],
            "answer_index": 0,
            "correct_text": "Sepsis grave",
            "explanation": "La clave del PUEM es sepsis grave: el paciente tiene una infección confirmada con E. coli en el líquido peritoneal y en sangre, más disfunción orgánica (hipotensión, lactato de 10, creatinina de 2). Se hablaría de choque séptico cuando la hipotensión persiste a pesar de una reanimación adecuada con líquidos, lo que la pregunta 5 plantea a las 72 horas. El SRIS es solo respuesta inflamatoria sin infección demostrada y la falla multiorgánica implica más de un órgano en disfunción establecida.",
            "topic": "Colon / Peritonitis"
          },
          {
            "id": "puem-r2-c45-q2",
            "ordinal": 2,
            "stem": "La hormona responsable de esta hiperglucemia es:",
            "options": [
              "ACTH",
              "Cortisol",
              "Insulina",
              "Aldosterona"
            ],
            "answer_index": 1,
            "correct_text": "Cortisol",
            "explanation": "La hiperglucemia del estrés en la sepsis la produce principalmente el cortisol, una hormona contrarreguladora que aumenta la gluconeogénesis y la resistencia periférica a la insulina junto con catecolaminas y glucagón. La insulina baja la glucosa, y la ACTH y la aldosterona no producen directamente esa hiperglucemia.",
            "topic": "Colon / Peritonitis"
          },
          {
            "id": "puem-r2-c45-q3",
            "ordinal": 3,
            "stem": "La interleucina que tiene efecto antiinflamatorio es:",
            "options": [
              "1",
              "2",
              "4",
              "10"
            ],
            "answer_index": 3,
            "correct_text": "10",
            "explanation": "La interleucina 10 es la citocina antiinflamatoria clásica de la respuesta a la sepsis, y limita la producción de TNF, IL-1 e IL-6. La IL-1 es proinflamatoria, la IL-2 estimula linfocitos T y la IL-4, aunque también modula la respuesta, no es la citocina antiinflamatoria de referencia.",
            "topic": "Colon / Peritonitis"
          },
          {
            "id": "puem-r2-c45-q4",
            "ordinal": 4,
            "stem": "Produce extravasación de neutrófilos de la circulación a las zonas de infección o inflamación:",
            "options": [
              "Eicosanoides",
              "Interferón gamma",
              "FNT",
              "Factor estimulante de colonias de granulocitos"
            ],
            "answer_index": 2,
            "correct_text": "FNT",
            "explanation": "El factor de necrosis tumoral, junto con la IL-1, activa el endotelio y estimula la expresión de moléculas de adhesión, lo que permite que los neutrófilos salgan de la circulación hacia el sitio de infección. El factor estimulante de colonias de granulocitos aumenta la producción de neutrófilos en la médula, el interferón gamma activa macrófagos y los eicosanoides son mediadores lipídicos.",
            "topic": "Colon / Peritonitis"
          },
          {
            "id": "puem-r2-c45-q5",
            "ordinal": 5,
            "stem": "A las 72 horas con hipotensión refractaria el diagnóstico es:",
            "options": [
              "Sepsis grave",
              "SIRS + sepsis",
              "Choque séptico",
              "Falla multiorgánica"
            ],
            "answer_index": 2,
            "correct_text": "Choque séptico",
            "explanation": "A las 72 horas, la hipotensión que no responde a la reanimación con líquidos y requiere vasopresores define el choque séptico. La sepsis grave es la sepsis con disfunción orgánica sin hipotensión refractaria, y la falla multiorgánica se identifica por el compromiso de varios órganos, no solo por la hipotensión.",
            "topic": "Colon / Peritonitis"
          }
        ],
        "topicId": "colon"
      }
    ]
  },
  {
    "id": "caso-puem-recto",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Recto y Ano",
    "subtitle": "7 casos clínicos seriados con 33 reactivos comentados paso a paso.",
    "topicId": "recto",
    "tag": "Recto y Ano",
    "badge": "7 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-10",
        "number": 10,
        "title": "Prolapso Rectal Completo con Estrangulación",
        "topic": "Recto y Ano",
        "context": "Hombre de 78 años hipertenso controlado, quien por primera vez hace 3 horas presenta dolor anal intenso, hemorragia transanal abundante y tumor a través del ano. EF: pálido, consciente, orientado, fascies dolorosa y regularmente hidratado. EF: prolapso rectal de 7 cm de longitud con edema, mucosa de coloración rojo-vino, laceración superficial y huellas de hemorragia reciente.",
        "questions": [
          {
            "id": "puem-r2-c10-q1",
            "ordinal": 1,
            "stem": "El manejo en el servicio de urgencias es:",
            "options": [
              "Manitol al 10%",
              "Crioterapia local",
              "Reducción digital",
              "Bloqueo de nervios pudendos"
            ],
            "answer_index": 2,
            "correct_text": "Reducción digital",
            "explanation": "El prolapso rectal incarcerado con edema y mucosa rojo-vino se maneja en urgencias intentando reducirlo manualmente, con medidas que disminuyen el edema como el azúcar (17 Recto y Ano Sabiston, p. 17). El bloqueo pudendo solo da analgesia y la crioterapia o el manitol no resuelven la incarceración; si hay necrosis se requiere cirugía.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c10-q2",
            "ordinal": 2,
            "stem": "El dato mas importante que orienta al diagnóstico es:",
            "options": [
              "Tamaño del prolapso",
              "Edema de la mucosa",
              "Pliegues mucosos radiales",
              "Pliegues mucosos circunferenciales"
            ],
            "answer_index": 3,
            "correct_text": "Pliegues mucosos circunferenciales",
            "explanation": "El dato clave son los pliegues mucosos circunferenciales: indican prolapso rectal de espesor total (17 Recto y Ano Schwartz, p. 44). Los pliegues radiales son los del prolapso hemorroidal; el tamaño y el edema dependen del tiempo de evolución y de la estrangulación, no distinguen entre ambos diagnósticos.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c10-q3",
            "ordinal": 3,
            "stem": "En el caso de que el prolapso sea irreductible con datos de compromiso vascular, la técnica quirúrgica aconsejable es:",
            "options": [
              "Ripstein",
              "Delorme",
              "Thiersch",
              "Altemeier"
            ],
            "answer_index": 3,
            "correct_text": "Altemeier",
            "explanation": "Un prolapso irreductible con datos de compromiso vascular tiene segmento isquémico que debe resecarse, y la rectosigmoidectomía perineal de Altemeier lo reseca por vía perineal, adecuada en un paciente mayor de alto riesgo (17 Recto y Ano Schwartz, p. 45). El Ripstein es una rectopexia abdominal con malla que no reseca el tejido dañado, el Delorme (plicatura mucosa) sirve en prolapso limitado y el cerclaje anal de Thiersch está prácticamente abandonado (17 Recto y Ano Schwartz, p. 45).",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c10-q4",
            "ordinal": 4,
            "stem": "El estudio de gabinete más útil en la predicción de los resultados funcionales es:",
            "options": [
              "Colonoscopia",
              "Defecografia",
              "Colon por enema",
              "Latencia motora terminal del nervio pudendo"
            ],
            "answer_index": 3,
            "correct_text": "Latencia motora terminal del nervio pudendo",
            "explanation": "La latencia motora terminal del nervio pudendo mide la integridad de la inervación del esfínter externo y es el estudio que mejor predice los resultados funcionales de continencia tras la reparación; una neuropatía del pudendo anticipa mala recuperación. La defecografía muestra la anatomía del prolapso, y la colonoscopia y el colon por enema solo descartan lesiones asociadas, pero ninguno predice la función.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c10-q5",
            "ordinal": 5,
            "stem": "La complicación post quirúrgica más frecuente es:",
            "options": [
              "Recidiva",
              "Estenosis",
              "Incontinencia",
              "Malignización"
            ],
            "answer_index": 0,
            "correct_text": "Recidiva",
            "explanation": "La recidiva es la complicación posquirúrgica más frecuente del prolapso rectal, y es mayor tras los procedimientos perineales (Delorme y Altemeier) que tras la fijación abdominal, aunque un ensayo aleatorizado (PROSPER) no encontró diferencia significativa entre ambos abordajes (guía ASCRS 2017). La incontinencia suele mejorar después de la reparación, salvo cuando hay lesión del nervio pudendo, y la estenosis y la malignización no son complicaciones características.",
            "topic": "Recto y Ano"
          }
        ],
        "topicId": "recto"
      },
      {
        "id": "puem-r2-case-12",
        "number": 12,
        "title": "Enfermedad Hemorroidal Grado IV y Complicaciones Qx",
        "topic": "Recto y Ano",
        "context": "Mujer de 40 años quien desde hace 3 meses presenta dolor y hemorragia transanal escasa. Refiere ingesta baja de fibra y agua, evacua heces de consistencia dura cada 2 a 3 días con necesidad de pujar. EF: hemorroides externas con protrusión permanente de las internas. En la rectosigmoidoscopia se observa hasta 22 cm mucosa de características normales.",
        "questions": [
          {
            "id": "puem-r2-c12-q2",
            "ordinal": 2,
            "stem": "La conducta terapéutica es:",
            "options": [
              "Escleroterapia",
              "Hemorroidectomía",
              "Ligadura con banda elástica",
              "Mucosectomía con engrapadora"
            ],
            "answer_index": 1,
            "correct_text": "Hemorroidectomía",
            "explanation": "La hemorroidectomía es la conducta para la enfermedad grado IV con prolapso permanente, ya que las hemorroides mixtas sintomáticas de grado III-IV son su indicación (17 Recto y Ano Sabiston, p. 5). La ligadura con banda y la escleroterapia son para los grados I-II (17 Recto y Ano Sabiston, p. 4), y la mucosectomía con engrapadora es una alternativa con más riesgo de recurrencia en prolapso grande.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c12-q3",
            "ordinal": 3,
            "stem": "Diez días después del tratamiento presenta hemorragia rectal moderada. Hb con disminución de 1 gr respecto a la inicial, la conducta es:",
            "options": [
              "Aplicación de ligadura",
              "Reoperación inmediata",
              "Administración de vitamina K",
              "Reposición de líquidos, reposo y vigilancia de la hemorragia"
            ],
            "answer_index": 3,
            "correct_text": "Reposición de líquidos, reposo y vigilancia de la hemorragia",
            "explanation": "Una hemorragia a los 10 días de una hemorroidectomía es un sangrado tardío (hasta 2 semanas después), asociado a infección o trauma local, y la mayoría cede de forma espontánea. Con sangrado moderado y una caída de solo 1 g de hemoglobina lo indicado es reponer líquidos, guardar reposo y vigilar, y reservar el taponamiento, la ligadura o la reintervención para el sangrado persistente o con inestabilidad (Complications Following Anorectal Surgery, Clin Colon Rectal Surg 2016). La vitamina K no tiene indicación sin coagulopatía y la reoperación inmediata es excesiva.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c12-q4",
            "ordinal": 4,
            "stem": "La posible causa de la hemorragia en este caso es:",
            "options": [
              "Patología colónica",
              "Proctopatia por AINE",
              "Necrosis del pedículo",
              "Patología hematológica"
            ],
            "answer_index": 2,
            "correct_text": "Necrosis del pedículo",
            "explanation": "El sangrado alrededor del décimo día de una hemorroidectomía es hemorragia secundaria por necrosis o desprendimiento del pedículo, cuando cae la escara. Una patología colónica es poco probable porque la rectosigmoidoscopia mostró mucosa normal hasta 22 cm, y no hay antecedente de AINE ni de enfermedad hematológica que expliquen un sangrado nuevo tan ligado al tiempo de la cirugía.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c12-q5",
            "ordinal": 5,
            "stem": "La causa mas frecuente de estenosis, como complicación tardía de la hemorroidectomía es:",
            "options": [
              "Resección excesiva de anodermo",
              "Diarrea continua en el post operatorio",
              "Uso de suturas de absorción prolongada",
              "No realizar dilataciones digitales periódicas"
            ],
            "answer_index": 0,
            "correct_text": "Resección excesiva de anodermo",
            "explanation": "La causa más frecuente de estenosis tardía es la resección excesiva del anodermo: al dejar sin puentes de piel suficientes, la cicatrización retrae el conducto anal. Las suturas de absorción prolongada y la falta de dilataciones digitales no son la causa principal, y la diarrea continua más bien tiende a prevenir la estenosis que a causarla.",
            "topic": "Recto y Ano"
          }
        ],
        "topicId": "recto"
      },
      {
        "id": "puem-r2-case-13",
        "number": 13,
        "title": "Fístula Perianal Compleja en Herradura",
        "topic": "Recto y Ano",
        "context": "Hombre de 29 años, obeso, quien inicio hace 4 años con absceso perianal izquierdo con drenaje espontáneo; 6 meses después presenta absceso derecho que se trata quirúrgicamente, 1 año después otro absceso con drenaje espontáneo, desde entonces hay secreción continua. EF: presenta cicatrices perianales derecha e izquierda, ambas con orificio secretante y cicatriz limitada en comisura posterior. Al tacto rectal cicatriz derecha y fibrosis en comisura posterior y en la anoscopia paquetes hemorroidales principales GII, no complicados, no se observa cripta causal. RS: eritema de la mucosa hasta los 15 cm, sin otra alteración.",
        "questions": [
          {
            "id": "puem-r2-c13-q1",
            "ordinal": 1,
            "stem": "El diagnóstico más probable es fístula:",
            "options": [
              "En herradura",
              "Interesfintérica",
              "Extraesfintérica",
              "Transesfintérica alta"
            ],
            "answer_index": 0,
            "correct_text": "En herradura",
            "explanation": "Los abscesos perianales a ambos lados con orificios secretantes bilaterales y fibrosis en la comisura posterior forman un trayecto que rodea el conducto anal por detrás: una fístula en herradura. La interesfintérica y la transesfintérica alta describen un solo trayecto unilateral, y la extraesfintérica se origina fuera del esfínter por una causa distinta al absceso criptoglandular.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c13-q2",
            "ordinal": 2,
            "stem": "En el preoperatorio el estudio diagnóstico de mayor utilidad en este paciente es:",
            "options": [
              "Fistulografía",
              "Colonoscopia",
              "Tomografía A C",
              "USG endoanal"
            ],
            "answer_index": 3,
            "correct_text": "USG endoanal",
            "explanation": "El ultrasonido endoanal muestra el trayecto fistuloso, su relación con los esfínteres y el orificio interno, y la integridad del esfínter, lo que decide la técnica quirúrgica y evita incontinencia. La fistulografía es menos precisa en trayectos complejos, la TC tiene poca resolución para tejidos blandos perianales y la colonoscopia no estudia el trayecto.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c13-q3",
            "ordinal": 3,
            "stem": "La complicación mas grave de esta enfermedad es:",
            "options": [
              "Estenosis anal",
              "Absceso pélvico",
              "Incontinencia anal",
              "Gangrena de Fournier"
            ],
            "answer_index": 3,
            "correct_text": "Gangrena de Fournier",
            "explanation": "La complicación más grave de la enfermedad fistulosa y de sus abscesos perianales repetidos es la gangrena de Fournier, una fascitis necrotizante perineal que puede progresar con rapidez a sepsis y necesita desbridamiento urgente. La estenosis anal y la incontinencia son complicaciones del tratamiento o secuelas, y el absceso pélvico es posible pero menos letal que la necrosis de tejidos blandos perineales.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c13-q5",
            "ordinal": 5,
            "stem": "Muy probablemente la causa de las recidivas haya sido:",
            "options": [
              "Drenaje insuficiente",
              "Proctocolitis inflamatoria",
              "Falta de curaciones post operatorias",
              "Error en la localización de la cripta causal"
            ],
            "answer_index": 3,
            "correct_text": "Error en la localización de la cripta causal",
            "explanation": "Tras varios abscesos y una secreción persistente sin cripta evidente, lo más probable es que el tratamiento previo no haya identificado ni tratado el orificio interno (la cripta causal); mientras el origen siga abierto, el absceso se reforma. El drenaje insuficiente y la falta de curaciones explicarían una recurrencia inmediata, no la formación de una fístula, y una proctocolitis inflamatoria no encaja con el eritema mucoso solo hasta 15 cm.",
            "topic": "Recto y Ano"
          }
        ],
        "topicId": "recto"
      },
      {
        "id": "puem-r2-case-16",
        "number": 16,
        "title": "Fisura Anal Crónica y Esfinterotomía Lateral Interna",
        "topic": "Recto y Ano",
        "context": "Hombre de 36 años con malos hábitos higiénico dietéticos y estreñimiento. Inicio hace 6 meses con dolor intenso a la defecación con sangrado rectal escaso. EF: colgajo cutáneo perianal y lesión ulcerada de bordes irregulares en comisura posterior. Al tacto rectal dolor y aumento del tono de esfínter.",
        "questions": [
          {
            "id": "puem-r2-c16-q1",
            "ordinal": 1,
            "stem": "El diagnóstico es:",
            "options": [
              "Úlcera sifilítica",
              "Úlcera herpética",
              "Fisura anal crónica",
              "Enfermedad de Crohn"
            ],
            "answer_index": 2,
            "correct_text": "Fisura anal crónica",
            "explanation": "El dolor intenso a la defecación con sangrado escaso, estreñimiento, el colgajo cutáneo (centinela), la lesión ulcerada en la comisura posterior y el aumento del tono esfinteriano de más de 6 meses indican una fisura anal crónica (más de 6-8 semanas de evolución) (17 Recto y Ano Sabiston, p. 7). Las úlceras sifilítica o herpética suelen ser múltiples, laterales o con historia de contacto, y el Crohn se sospecha con fisuras atípicas o fuera de la línea media posterior.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c16-q2",
            "ordinal": 2,
            "stem": "El diagnóstico lo realiza mediante:",
            "options": [
              "Biopsia",
              "Manometría anal",
              "Examen serológico",
              "Exploración proctológica"
            ],
            "answer_index": 3,
            "correct_text": "Exploración proctológica",
            "explanation": "La fisura anal se diagnostica con la exploración proctológica: inspección del borde anal separando los glúteos y, si es tolerable, tacto, porque la lesión y el espasmo esfinteriano son visibles y palpables. La biopsia, la manometría y la serología se reservan para fisuras atípicas que sugieran Crohn, infección o neoplasia, y no son necesarias en un cuadro típico de línea media posterior.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c16-q3",
            "ordinal": 3,
            "stem": "La etiopatogenia es:",
            "options": [
              "Malos hábitos alimentarios",
              "Enfermedad de transmisión sexual",
              "Ph alcalino en las evacuaciones diarreicas",
              "Aumento de la presión en reposo del esfínter anal interno"
            ],
            "answer_index": 3,
            "correct_text": "Aumento de la presión en reposo del esfínter anal interno",
            "explanation": "La etiopatogenia de la fisura crónica es el aumento de la presión de reposo del esfínter interno, que reduce el flujo sanguíneo del anodermo posterior y perpetúa la isquemia y el dolor (17 Recto y Ano Schwartz, p. 8). Los malos hábitos y el estreñimiento son desencadenantes, no el mecanismo que mantiene la herida; la ETS y el pH alcalino de la diarrea no son la causa.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c16-q4",
            "ordinal": 4,
            "stem": "El tratamiento es:",
            "options": [
              "Aciclovir",
              "Quirúrgico",
              "Mesalazina",
              "Penicilina procaínica"
            ],
            "answer_index": 1,
            "correct_text": "Quirúrgico",
            "explanation": "En una fisura crónica con hipertonía del esfínter interno y falta de respuesta al manejo conservador, el tratamiento es quirúrgico, la esfinterotomía lateral interna, que corta el esfínter hipertónico y permite cicatrizar con tasas superiores a las de nitratos, calcioantagonistas y toxina (17 Recto y Ano Sabiston, p. 8). Aciclovir, penicilina y mesalazina tratarían una lesión herpética, sifilítica o de Crohn, que no es el diagnóstico.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c16-q5",
            "ordinal": 5,
            "stem": "La complicación post tratamiento más frecuente es:",
            "options": [
              "Estenosis",
              "Sangrado",
              "Terciarismo",
              "Incontinencia"
            ],
            "answer_index": 3,
            "correct_text": "Incontinencia",
            "explanation": "La incontinencia, sobre todo a gases y con escurrimiento leve, es la complicación más frecuente de la esfinterotomía lateral interna, según una revisión sistemática con metaanálisis y la guía ASCRS de fisura anal. El sangrado, la estenosis y el terciarismo no son las complicaciones típicas de esta técnica.",
            "topic": "Recto y Ano"
          }
        ],
        "topicId": "recto"
      },
      {
        "id": "puem-r2-case-17",
        "number": 17,
        "title": "Incontinencia Fecal Obstétrica post Parto Distócico",
        "topic": "Recto y Ano",
        "context": "Mujer de 24 años con G1, P1, parto distócico con uso de fórceps, desde el posparto inmediato presenta diario salida transanal involuntaria de gas, líquidos y sólidos, limitando sus actividades; usa pañal. Infección de vías urinarias de repetición. EP: adelgazamiento del periné y ano entreabierto con hipotonía del esfínter. RS normal.",
        "questions": [
          {
            "id": "puem-r2-c17-q1",
            "ordinal": 1,
            "stem": "El diagnóstico de la incontinencia fecal es:",
            "options": [
              "Trauma obstétrico",
              "Neuropatía adquirida",
              "Endometriosis perineal",
              "Contracción paradójica del puborrectal"
            ],
            "answer_index": 0,
            "correct_text": "Trauma obstétrico",
            "explanation": "Una primípara con parto distócico con fórceps, salida involuntaria de gas, líquido y sólido desde el posparto inmediato, periné adelgazado y esfínter hipotónico tiene una incontinencia por trauma obstétrico, ya que el parto vaginal es la causa más frecuente de lesión del esfínter y el desgarro de cuarto grado la de mayor riesgo (17 Recto y Ano Schwartz, p. 61). La neuropatía adquirida es posible, pero el inicio inmediato tras el fórceps apunta a lesión directa, y la contracción paradójica del puborrectal produce estreñimiento, no incontinencia.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c17-q2",
            "ordinal": 2,
            "stem": "El estudio diagnóstico más útil es:",
            "options": [
              "Defecografia",
              "Electromiografía",
              "Ultrasonido endoanal",
              "Latencia motora terminal del nervio pudendo"
            ],
            "answer_index": 2,
            "correct_text": "Ultrasonido endoanal",
            "explanation": "Para demostrar un defecto del esfínter tras un trauma obstétrico el estudio más útil es el ultrasonido endoanal, que identifica defectos del esfínter interno o externo y orienta la reparación (guía ASCRS 2023). La latencia motora terminal del pudendo ya no se recomienda de rutina porque no predice de forma fiable el resultado de la reparación. La electromiografía y la defecografía estudian la función neuromuscular y la evacuación, no el defecto anatómico.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c17-q3",
            "ordinal": 3,
            "stem": "La prueba que informa de las presiones basales y de contracción de los esfínteres es:",
            "options": [
              "Defecografia",
              "Electromiografía",
              "USG endoanal",
              "Manometría anorrectal"
            ],
            "answer_index": 3,
            "correct_text": "Manometría anorrectal",
            "explanation": "La manometría anorrectal es la prueba que mide la presión basal en reposo, que depende sobre todo del esfínter interno, y la presión de contracción voluntaria, que depende del externo (17 Recto y Ano Schwartz, p. 8). La electromiografía registra la actividad eléctrica muscular, el ultrasonido endoanal muestra la anatomía y la defecografía la dinámica evacuatoria, pero ninguna mide presiones.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c17-q4",
            "ordinal": 4,
            "stem": "El tratamiento con mayor éxito es:",
            "options": [
              "Antidiarreicos",
              "Esfinteroplastia",
              "Estimulación sacra",
              "Biorretroalimentación"
            ],
            "answer_index": 1,
            "correct_text": "Esfinteroplastia",
            "explanation": "Con un defecto esfinteriano anatómico por trauma obstétrico, la esfinteroplastia es el tratamiento de mayor éxito porque repara el músculo lesionado. Los antidiarreicos y la biorretroalimentación mejoran los síntomas sin corregir el defecto, y la estimulación sacra se reserva para falla de otros tratamientos o esfínter íntegro.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c17-q5",
            "ordinal": 5,
            "stem": "Después del tratamiento, continua con incontinencia leve; el USEA reporta esfínteres íntegros; el tratamiento complementario es:",
            "options": [
              "Colostomía",
              "Cerclaje anal",
              "Graciloplastia",
              "Biorretroalimentación"
            ],
            "answer_index": 3,
            "correct_text": "Biorretroalimentación",
            "explanation": "Si persiste una incontinencia leve con esfínteres íntegros en el ultrasonido, ya no hay un defecto que reparar, y el siguiente paso es la biorretroalimentación, que reentrena la contracción y la sensibilidad rectal. La graciloplastia y la colostomía son opciones para casos graves con falla de otras medidas, y el cerclaje anal está prácticamente abandonado (17 Recto y Ano Schwartz, p. 45).",
            "topic": "Recto y Ano"
          }
        ],
        "topicId": "recto"
      },
      {
        "id": "puem-r2-case-18",
        "number": 18,
        "title": "Adenocarcinoma de Recto Inferior Temprano (T1N0M0)",
        "topic": "Recto y Ano",
        "context": "Hombre de 50 años con adenocarcinoma de 2.5 cm en pared posterior de recto ulcerado a 4 cm del margen anal",
        "questions": [
          {
            "id": "puem-r2-c18-q1",
            "ordinal": 1,
            "stem": "La conducta a seguir es:",
            "options": [
              "USG transrectal",
              "RM",
              "PET",
              "TC abdominopélvica"
            ],
            "answer_index": 0,
            "correct_text": "USG transrectal",
            "explanation": "Ante un adenocarcinoma pequeño y bajo del recto, lo primero es estadificar la profundidad (T) y los ganglios (N) con ultrasonido transrectal, porque define si la lesión es lo bastante superficial para una resección local o necesita una cirugía radical. La TC abdominopélvica y el PET buscan enfermedad a distancia, y la resonancia es más útil para tumores avanzados y para la fascia mesorrectal.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c18-q2",
            "ordinal": 2,
            "stem": "Se concluye que la lesión invade la submucosa, sin presencia de ganglios metastásicos y sin lesiones a distancia; la etapa clínica es:",
            "options": [
              "T1N0M0",
              "T2N0M0",
              "T3N0M0",
              "TXN0M0"
            ],
            "answer_index": 0,
            "correct_text": "T1N0M0",
            "explanation": "Una lesión que invade la submucosa es T1; sin ganglios es N0 y sin metástasis es M0, de modo que la etapa clínica es T1N0M0, que corresponde a etapa I (Etapa I: T1-T2 N0, 16 Colon Schwartz, p. 36). T2 implica invasión de la muscular propia, T3 de la subserosa o tejido perirrectal, y TX no aplica porque el tumor sí fue evaluado.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c18-q3",
            "ordinal": 3,
            "stem": "Los factores pronósticos adicionales para decidir conducta en este paciente son:",
            "options": [
              "Presencia de mutación BRCA 2",
              "Grado nuclear y numero de mitosis",
              "Niveles de antígeno carcinoembrionario",
              "Grado histológico y permeación linfovascular"
            ],
            "answer_index": 3,
            "correct_text": "Grado histológico y permeación linfovascular",
            "explanation": "En un tumor T1 temprano, la decisión entre resección local y cirugía radical depende de factores histológicos de mal pronóstico, sobre todo el grado histológico y la permeación linfovascular, que predicen riesgo de metástasis ganglionar. El antígeno carcinoembrionario es un marcador de seguimiento, la mutación BRCA 2 no es un factor pronóstico de este cáncer, y el grado nuclear y las mitosis no son los criterios de decisión.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c18-q4",
            "ordinal": 4,
            "stem": "El procedimiento terapéutico de elección es:",
            "options": [
              "Quimio radio terapia radicales",
              "Resección local con márgenes",
              "RT preoperatoria y resección baja",
              "Proctocolectomía con colon ano anastomosis"
            ],
            "answer_index": 1,
            "correct_text": "Resección local con márgenes",
            "explanation": "Un adenocarcinoma T1 pequeño, bien diferenciado y de bajo riesgo en el recto inferior permite la resección local con márgenes, lo que conserva el esfínter y evita una cirugía mayor. La quimiorradioterapia radical, la RT preoperatoria con resección baja y la proctocolectomía con anastomosis coloanal son demasiado agresivas para un tumor confinado a la submucosa.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c18-q5",
            "ordinal": 5,
            "stem": "El reporte histopatológico confirma adenocarcinoma bien diferenciado con invasión hasta la submucosa con márgenes negativos; la conducta a seguir es:",
            "options": [
              "Observación",
              "RT",
              "Braquiterapia",
              "QT adyuvante"
            ],
            "answer_index": 0,
            "correct_text": "Observación",
            "explanation": "Un adenocarcinoma bien diferenciado con invasión hasta la submucosa, márgenes negativos y sin otros factores de riesgo ya fue tratado de forma adecuada con la resección local, por lo que se continúa con observación y seguimiento. La radioterapia, la braquiterapia o la quimioterapia adyuvante no aportan beneficio en este estadio de bajo riesgo y solo agregarían toxicidad.",
            "topic": "Recto y Ano"
          }
        ],
        "topicId": "recto"
      },
      {
        "id": "puem-r2-case-43",
        "number": 43,
        "title": "Absceso Anorrectal y Úlceras Rectales por Entamoeba Histolytica",
        "topic": "Recto y Ano",
        "context": "Mujer de 54 años quien desde hace 2 años presenta pujo, tenesmo y tumores ano perianales que mejoran con pomadas antihemorroidales. EF: dolor y distensión abdominal generalizados y peristalsis aumentada; tumor y dolor anal persistente. En la rectosigmoidoscopia se observan paquetes hemorroidales congestivos y aumentados de consistencia, pequeñas ulceraciones puntiformes con halo eritematoso y centro blanquecino sobre mucosa rectal inflamada.",
        "questions": [
          {
            "id": "puem-r2-c43-q1",
            "ordinal": 1,
            "stem": "El diagnóstico probable es:",
            "options": [
              "Fisura anal",
              "Pólipo rectal",
              "Absceso ano perianal",
              "Enfermedad hemorroidal trombosada"
            ],
            "answer_index": 2,
            "correct_text": "Absceso ano perianal",
            "explanation": "Una mujer con tenesmo, dolor y tumor anal persistente de dos años, con paquetes hemorroidales congestivos y aumento de consistencia, orienta a un absceso anoperianal según la clave del PUEM. La fisura se manifiesta con dolor al evacuar y la hemorroide trombosada con un nódulo azulado, y el pólipo rectal no explica el dolor persistente.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c43-q2",
            "ordinal": 2,
            "stem": "El manejo inmediato:",
            "options": [
              "Polipectomía",
              "Trombectomía",
              "Esfinteroplastia",
              "Drenaje de absceso"
            ],
            "answer_index": 3,
            "correct_text": "Drenaje de absceso",
            "explanation": "El manejo inmediato del absceso anorrectal es el drenaje, en la zona más fluctuante y lo más cerca del ano posible para acortar la futura fístula (17 Recto y Ano Sabiston, p. 8). La esfinteroplastia, la polipectomía o la trombectomía tratan otras entidades.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c43-q3",
            "ordinal": 3,
            "stem": "Las úlceras en mucosa rectal, le hace sospechar que son causadas por:",
            "options": [
              "Oxiuros",
              "Tricocéfalos",
              "Salmonella typhi",
              "Entamoeba histolytica"
            ],
            "answer_index": 3,
            "correct_text": "Entamoeba histolytica",
            "explanation": "Las úlceras puntiformes con halo eritematoso y centro blanquecino sobre una mucosa rectal inflamada son características de la colitis amebiana por Entamoeba histolytica. Los oxiuros y los tricocéfalos producen prurito o prolapso y no úlceras en esa distribución, y la Salmonella typhi afecta sobre todo el íleon terminal con fiebre tifoidea.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c43-q4",
            "ordinal": 4,
            "stem": "En este momento, para identificar el microorganismo causal procede:",
            "options": [
              "Prueba terapéutica con antibióticos",
              "Solicitar coproparasitoscópicos en serie",
              "Prueba terapéutica con pomadas antihemorroidales",
              "Tomar muestra de moco rectal y observarlas al microscopio"
            ],
            "answer_index": 3,
            "correct_text": "Tomar muestra de moco rectal y observarlas al microscopio",
            "explanation": "La forma rápida de identificar el parásito es obtener moco o material de la úlcera rectal y examinarlo al microscopio en fresco, donde se observan trofozoítos de E. histolytica, lo que confirma la sospecha en el momento. Los coproparasitoscópicos en serie son útiles pero más lentos, y las pruebas terapéuticas con antibióticos o pomadas retrasan el diagnóstico.",
            "topic": "Recto y Ano"
          },
          {
            "id": "puem-r2-c43-q5",
            "ordinal": 5,
            "stem": "Ya curada la enfermedad; la profilaxis que debe de seguir es:",
            "options": [
              "Amebicida",
              "Antibioticoterapia 2-3 veces por año",
              "Normas generales de higiene personal y alimentación",
              "Antiparasitario de amplio espectro 1 a 2 veces por año"
            ],
            "answer_index": 2,
            "correct_text": "Normas generales de higiene personal y alimentación",
            "explanation": "Una vez curada la amebiasis, la prevención se basa en medidas generales de higiene personal y de los alimentos, porque se adquiere por ingestión de quistes en agua o alimentos contaminados. La quimioprofilaxis repetida con amebicidas, antiparasitarios de amplio espectro o antibióticos no está indicada y expone a efectos adversos y resistencia.",
            "topic": "Recto y Ano"
          }
        ],
        "topicId": "recto"
      }
    ]
  },
  {
    "id": "caso-puem-hepatobiliar",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Hígado, Vías Biliares y Páncreas (Calot & TG18)",
    "subtitle": "1 casos clínicos seriados con 4 reactivos comentados paso a paso.",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "badge": "1 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-39",
        "number": 39,
        "title": "Tumor Duodenal y Síndrome Paraneoplásico de Trousseau",
        "topic": "Intestino Delgado / Páncreas",
        "context": "Mujer de 48 años con historia de pancreatitis biliar a los 43 años y urolitiasis. Inicio hace 5 meses con hiporexia, plenitud posprandial, evacuaciones melenicas, tromboflebitis migratoria y perdida de peso de 10 kg. Hb 8.5, Hto 26%, VGM 78, HCM 27. Desarrolla TEP. En la enteroscopia se encontró tumor en 3ra y 4ta porción del duodeno con obstrucción del 70% de la luz.",
        "questions": [
          {
            "id": "puem-r2-c39-q1",
            "ordinal": 1,
            "stem": "Los síntomas mas comunes en los pacientes con tumores de intestino delgado son:",
            "options": [
              "Diarrea crónica y masa palpable",
              "Paraneoplasicos procoagulantes",
              "Náusea, vómito y saciedad temprana",
              "Dolor abdominal, obstrucción y hemorragia"
            ],
            "answer_index": 3,
            "correct_text": "Dolor abdominal, obstrucción y hemorragia",
            "explanation": "Los tumores de intestino delgado dan síntomas inespecíficos y tardíos: dolor abdominal, obstrucción por crecimiento de la masa y hemorragia por ulceración, que son los más comunes. La diarrea crónica con masa palpable es poco frecuente, la saciedad temprana se asocia más a tumores gástricos y los síndromes paraneoplásicos son raros.",
            "topic": "Intestino Delgado / Páncreas"
          },
          {
            "id": "puem-r2-c39-q2",
            "ordinal": 2,
            "stem": "Por frecuencia la estirpe histológica que esperaría es:",
            "options": [
              "Estromales",
              "Neuroendocrino",
              "Adenocarcinoma",
              "Leiomiosarcomas"
            ],
            "answer_index": 2,
            "correct_text": "Adenocarcinoma",
            "explanation": "Por frecuencia, el tumor maligno del duodeno y del intestino delgado proximal es el adenocarcinoma, aunque la lista incluye neuroendocrinos, linfomas y GIST. En el duodeno el adenocarcinoma se trata con pancreatoduodenectomía, salvo en la tercera y cuarta porción, donde cabe resección local (15 Intestino Delgado Schwartz, p. 25).",
            "topic": "Intestino Delgado / Páncreas"
          },
          {
            "id": "puem-r2-c39-q3",
            "ordinal": 3,
            "stem": "El mayor riesgo de tromboflebitis migratoria o síndrome de Trousseau se presenta en:",
            "options": [
              "Linfomas intestinales",
              "Tumores estromales",
              "Carcinoma hepatocelular",
              "Adenocarcinoma de páncreas"
            ],
            "answer_index": 3,
            "correct_text": "Adenocarcinoma de páncreas",
            "explanation": "El síndrome de Trousseau (tromboflebitis migratoria) se asocia sobre todo con el adenocarcinoma de páncreas y otras neoplasias mucinosas que activan la coagulación por factor tisular y mucina. Los linfomas, los tumores estromales y el carcinoma hepatocelular lo producen con menor frecuencia.",
            "topic": "Intestino Delgado / Páncreas"
          },
          {
            "id": "puem-r2-c39-q4",
            "ordinal": 4,
            "stem": "El mejor tratamiento definitivo para este síndrome paraneoplásico es:",
            "options": [
              "Resección del tumor",
              "ASA",
              "QT sistémica",
              "Heparina de bajo peso molecular"
            ],
            "answer_index": 0,
            "correct_text": "Resección del tumor",
            "explanation": "El tratamiento definitivo del síndrome paraneoplásico es tratar la causa, es decir resecar el tumor, porque mientras persista el cáncer se mantiene la hipercoagulabilidad (resección en bloque con márgenes, 11 Neoplasias Generalidades Schwartz, p. 1). La heparina de bajo peso molecular trata la trombosis pero no cura el síndrome, y el AAS o la quimioterapia sistémica no son el tratamiento definitivo.",
            "topic": "Intestino Delgado / Páncreas"
          }
        ],
        "topicId": "hepatobiliar"
      }
    ]
  },
  {
    "id": "caso-puem-trauma",
    "type": "casos",
    "subtype": "puem_pack",
    "title": "Banco de Casos Clínicos Seriados PUEM · Trauma, Choque Quirúrgico y Cuello/Tórax (ATLS 10ª)",
    "subtitle": "8 casos clínicos seriados con 37 reactivos comentados paso a paso.",
    "topicId": "trauma",
    "tag": "Trauma",
    "badge": "8 Casos PUEM",
    "cases": [
      {
        "id": "puem-r2-case-07",
        "number": 7,
        "title": "SIRS, Sepsis y Mediadores Antiinflamatorios en Politrauma",
        "topic": "Cuidados Críticos / SIRS",
        "context": "Hombre de 73 años politraumatizado con dolor y distensión abdominal. Múltiples escoriaciones y lesión de tejidos profundos en todo el muslo izquierdo. En cirugía se identifica perforación intestinal. Postoperatorio con estado de choque; se maneja con noradrenalina, vasopresina y ventilación mecánica con FiO2 AL 100% y PEE de 16.",
        "questions": [
          {
            "id": "puem-r2-c07-q1",
            "ordinal": 1,
            "stem": "El mediador antiinflamatorio mas importante en SIRS es:",
            "options": [
              "IL6",
              "IL10",
              "Óxido nítrico",
              "Interferón delta"
            ],
            "answer_index": 1,
            "correct_text": "IL10",
            "explanation": "La IL-10 es la principal citocina antiinflamatoria: frena la producción de TNF-alfa, IL-1 e IL-6 y limita la respuesta que se vuelve dañina en el SIRS. La IL-6 es la distractora clásica porque aumenta mucho en sepsis, pero es proinflamatoria e induce la fase aguda; el óxido nítrico es un mediador vasodilatador y no una citocina antiinflamatoria.",
            "topic": "Cuidados Críticos / SIRS"
          },
          {
            "id": "puem-r2-c07-q2",
            "ordinal": 2,
            "stem": "Los marcadores tempranos de gravedad en sepsis son:",
            "options": [
              "IL1 y FNT alfa",
              "IL1 e IL5",
              "IL6 y FNT alfa",
              "IL10 y óxido nítrico"
            ],
            "answer_index": 0,
            "correct_text": "IL1 y FNT alfa",
            "explanation": "La IL-1 y el TNF-alfa son las primeras citocinas que liberan macrófagos y monocitos tras el estímulo (endotoxina, daño tisular), y sus niveles tempranos reflejan la gravedad de la respuesta; ellas inducen después a la IL-6 y a otros mediadores. Por eso IL-6 con TNF no es la mejor opción como marcador temprano, y IL-10 y óxido nítrico son mediadores antiinflamatorio y vasodilatador, no los primeros disparadores.",
            "topic": "Cuidados Críticos / SIRS"
          },
          {
            "id": "puem-r2-c07-q3",
            "ordinal": 3,
            "stem": "La célula que produce citocinas en SIRS es:",
            "options": [
              "Neutrófilos",
              "Macrófagos",
              "Linfocitos B",
              "Células endoteliales"
            ],
            "answer_index": 1,
            "correct_text": "Macrófagos",
            "explanation": "El macrófago (con el monocito) es la célula central en la producción de citocinas en el SIRS: reconoce endotoxina y patrones de daño tisular y libera TNF-alfa, IL-1 e IL-6. Los neutrófilos son sobre todo células efectoras (fagocitosis, radicales de oxígeno) y los linfocitos B producen anticuerpos, por lo que no son el origen principal de las citocinas iniciales.",
            "topic": "Cuidados Críticos / SIRS"
          },
          {
            "id": "puem-r2-c07-q4",
            "ordinal": 4,
            "stem": "La respuesta de fase aguda se caracteriza por:",
            "options": [
              "Aumento en niveles de transferrina",
              "Aumento en niveles de complemento",
              "Disminución de proteína C reactiva",
              "Disminución en la superóxido dismutasa"
            ],
            "answer_index": 1,
            "correct_text": "Aumento en niveles de complemento",
            "explanation": "En la respuesta de fase aguda el hígado aumenta los reactantes positivos (proteína C reactiva, complemento, fibrinógeno, ferritina) y disminuye los negativos (albúmina, transferrina) (Gabay y Kushner, NEJM 1999). Por eso el aumento del complemento es la opción correcta, mientras que la transferrina aumentada y la PCR disminuida describen lo contrario. La superóxido dismutasa no figura entre los reactantes de fase aguda clásicos.",
            "topic": "Cuidados Críticos / SIRS"
          },
          {
            "id": "puem-r2-c07-q5",
            "ordinal": 5,
            "stem": "La apoptosis es:",
            "options": [
              "Un proceso siempre patológico",
              "Responsable de atrofia intestinal",
              "Un proceso activo que requiere energía",
              "Mas activa en lesión que en remodelación"
            ],
            "answer_index": 2,
            "correct_text": "Un proceso activo que requiere energía",
            "explanation": "La apoptosis es muerte celular programada y activa: la célula ejecuta su propia destrucción mediante caspasas y consume energía (ATP), a diferencia de la necrosis, que es pasiva. No es siempre patológica, porque participa en el desarrollo y en la remodelación de los tejidos, y por eso es más activa en remodelación que en lesión aguda, por lo que las opciones A y D son falsas.",
            "topic": "Cuidados Críticos / SIRS"
          }
        ],
        "topicId": "trauma"
      },
      {
        "id": "puem-r2-case-19",
        "number": 19,
        "title": "Balance Hidroelectrolítico y Pérdidas por Ileostomía",
        "topic": "Cuidados Críticos / Fisiología",
        "context": "Mujer de 46 años con 65 kg de peso y talla de 1.60 cm. Séptica a quien se le han realizado múltiples cirugías abdominales con resultado de abdomen abierto e ileostomía.",
        "questions": [
          {
            "id": "puem-r2-c19-q2",
            "ordinal": 2,
            "stem": "El calculo de los requerimientos basales de líquidos para 24 horas es:",
            "options": [
              "1500",
              "1800",
              "2400",
              "3500"
            ],
            "answer_index": 2,
            "correct_text": "2400",
            "explanation": "Los requerimientos basales de agua en 24 horas siguen la regla de Holliday-Segar: 100 mL/kg para los primeros 10 kg, 50 mL/kg para los siguientes 10 y 20 mL/kg por cada kg adicional; para 65 kg suman 2,400 mL. Los valores de 1,500 y 1,800 subestiman y 3,500 corresponde a un paciente con pérdidas aumentadas, no a los requerimientos basales.",
            "topic": "Cuidados Críticos / Fisiología"
          },
          {
            "id": "puem-r2-c19-q3",
            "ordinal": 3,
            "stem": "Las perdidas insensibles para 24 horas en cm cúbicos un día antes de la cirugía son:",
            "options": [
              "350",
              "600",
              "780",
              "1000"
            ],
            "answer_index": 1,
            "correct_text": "600",
            "explanation": "Las pérdidas insensibles por piel y respiración son del orden de 10 mL/kg al día en un adulto, lo que da unos 650 mL para 65 kg, y 600 es la opción más cercana. Las cifras de 780 y 1,000 se acercan a las de un paciente con fiebre o hiperventilación, y 350 queda muy por debajo.",
            "topic": "Cuidados Críticos / Fisiología"
          },
          {
            "id": "puem-r2-c19-q5",
            "ordinal": 5,
            "stem": "Las características del volumen, Na, K, Cl, HCO3 del gasto de una ileostomía en 24 horas son:",
            "options": [
              "800, 150, 12, 180 y 0",
              "1,500, 10, 26, 10 y 30",
              "1,500, 60, 10, 130, 0",
              "1500, 140, 5, 104, y 30"
            ],
            "answer_index": 3,
            "correct_text": "1500, 140, 5, 104, y 30",
            "explanation": "El líquido del íleon es isotónico y rico en sodio y cloro, con potasio bajo y bicarbonato presente, y la opción D (1,500 mL con Na 140, K 5, Cl 104 y HCO3 30) cumple ese perfil. Las otras opciones tienen sodio muy bajo, potasio demasiado alto o sin bicarbonato, por lo que no corresponden a una ileostomía; su pérdida elevada produce deshidratación y acidosis metabólica por pérdida de bicarbonato.",
            "topic": "Cuidados Críticos / Fisiología"
          }
        ],
        "topicId": "trauma"
      },
      {
        "id": "puem-r2-case-36",
        "number": 36,
        "title": "Trombosis Venosa Profunda post Cirugía Oncológica",
        "topic": "Cirugía Vascular / TVP",
        "context": "Hombre de 64 años en octavo día post operado de resección anterior de colon, por adenocarcinoma bien diferenciado T1N0M0. Se encuentra afebril, signos vitales estables y buena tolerancia a la vía oral. Presenta súbitamente dolor y aumento de volumen de toda la extremidad inferior derecha.",
        "questions": [
          {
            "id": "puem-r2-c36-q1",
            "ordinal": 1,
            "stem": "El diagnóstico probable es:",
            "options": [
              "Erisipela",
              "Linfadenitis",
              "Insuficiencia arterial aguda",
              "Trombosis venosa profunda"
            ],
            "answer_index": 3,
            "correct_text": "Trombosis venosa profunda",
            "explanation": "Un paciente en el octavo día después de una cirugía oncológica de colon con dolor y aumento de volumen súbito de toda la extremidad inferior tiene una trombosis venosa profunda, favorecida por la cirugía, el cáncer y la inmovilidad (tríada de Virchow). La erisipela y la linfadenitis cursan con eritema y fiebre, y la insuficiencia arterial aguda produce palidez, frialdad y dolor, no edema de toda la pierna.",
            "topic": "Cirugía Vascular / TVP"
          },
          {
            "id": "puem-r2-c36-q2",
            "ordinal": 2,
            "stem": "El estudio de primera elección es:",
            "options": [
              "Arteriografía selectiva",
              "ECO Doppler arterial y venoso",
              "Biopsia excisional de piel para cultivo",
              "Medición de las presiones compartimentales"
            ],
            "answer_index": 1,
            "correct_text": "ECO Doppler arterial y venoso",
            "explanation": "El estudio de primera elección es el ultrasonido Doppler venoso (dúplex), que es no invasivo, disponible y con muy buena sensibilidad y especificidad para trombosis venosa profunda. La arteriografía se reserva para patología arterial, la biopsia de piel para infecciones cutáneas y la medición de presiones compartimentales para un síndrome compartimental.",
            "topic": "Cirugía Vascular / TVP"
          },
          {
            "id": "puem-r2-c36-q3",
            "ordinal": 3,
            "stem": "Otro estudio que solicita es:",
            "options": [
              "Hemocultivo",
              "Factor V de Leiden",
              "Dímero D en sangre",
              "Tiempo de protrombina"
            ],
            "answer_index": 2,
            "correct_text": "Dímero D en sangre",
            "explanation": "El dímero D es un producto de degradación de la fibrina que se eleva cuando hay trombosis activa; es un estudio complementario útil junto con el Doppler, aunque un resultado negativo ayuda sobre todo a descartar. El hemocultivo no es útil en un paciente afebril, el factor V de Leiden estudia una trombofilia que no se solicita de entrada y el tiempo de protrombina vigila anticoagulantes orales.",
            "topic": "Cirugía Vascular / TVP"
          },
          {
            "id": "puem-r2-c36-q4",
            "ordinal": 4,
            "stem": "El tratamiento de elección es:",
            "options": [
              "Fasciotomía",
              "Filtro en vena cava inferior",
              "Gentamicina + dicloxacilina",
              "Anticoagulación con heparina"
            ],
            "answer_index": 3,
            "correct_text": "Anticoagulación con heparina",
            "explanation": "El tratamiento de elección de la trombosis venosa profunda es la anticoagulación con heparina, que impide que el trombo crezca y reduce el riesgo de embolia pulmonar mientras el organismo lo lisa. El filtro de vena cava se reserva para quienes no pueden anticoagularse o tienen embolias a pesar de ella; la fasciotomía y los antibióticos no tienen indicación.",
            "topic": "Cirugía Vascular / TVP"
          },
          {
            "id": "puem-r2-c36-q5",
            "ordinal": 5,
            "stem": "La complicación mas frecuente de este padecimiento es:",
            "options": [
              "Úlcera cutánea",
              "Embolia pulmonar",
              "Insuficiencia renal",
              "Necrosis de la extremidad"
            ],
            "answer_index": 1,
            "correct_text": "Embolia pulmonar",
            "explanation": "La complicación más frecuente y más grave de la trombosis venosa profunda es la embolia pulmonar, porque el trombo puede desprenderse de las venas profundas y viajar a la arteria pulmonar. La úlcera cutánea y la necrosis de la extremidad (flegmasia) son complicaciones locales menos frecuentes, y la insuficiencia renal no es una complicación característica.",
            "topic": "Cirugía Vascular / TVP"
          }
        ],
        "topicId": "trauma"
      },
      {
        "id": "puem-r2-case-38",
        "number": 38,
        "title": "Explosión, Trauma Torácico y Vía Aérea Urgente",
        "topic": "Trauma / Vía Aérea",
        "context": "Hombre de 28 años presente en explosión de una planta de productos químicos. Media hora mas tarde se le encuentra inconsciente en un área cerrada. Fue trasladado al servicio de urgencias de un hospital cercano. EF: TA 80/50, FC140, Temp 35°C. deshidratado con vibrisas quemadas, disneico y con estridor laríngeo. PaO2 de 45 mmHg, PaCO2 de **, ph de 7.28. se intenta intubación oro traqueal sin lograrlo, se ausculta hiperresonancia del hemitórax derecho y se tiene dificultad para ventilarlo con mascarilla. La rx de tórax muestra zona de hiperclaridad y un objeto metálico en región subescapular derecha.",
        "questions": [
          {
            "id": "puem-r2-c38-q1",
            "ordinal": 1,
            "stem": "El procedimiento terapéutico prioritario es:",
            "options": [
              "Línea arterial",
              "Pleurostomía",
              "Traqueotomía",
              "Cricotiroidectomia"
            ],
            "answer_index": 3,
            "correct_text": "Cricotiroidectomia",
            "explanation": "Con estridor, vibrisas quemadas, hipoxemia y fracaso de la intubación orotraqueal, la prioridad es asegurar la vía aérea de inmediato por vía quirúrgica con una cricotiroidotomía, que es más rápida que la traqueotomía en urgencia. La línea arterial y la gasometría ayudan a monitorizar, pero no resuelven la obstrucción de la vía aérea.",
            "topic": "Trauma / Vía Aérea"
          },
          {
            "id": "puem-r2-c38-q2",
            "ordinal": 2,
            "stem": "Con los datos clínicos y radiológicos mencionados, lo indicado es realizar:",
            "options": [
              "Toracotomía",
              "Pleurostomía",
              "Traqueotomía",
              "Gasometría arterial"
            ],
            "answer_index": 1,
            "correct_text": "Pleurostomía",
            "explanation": "La hiperresonancia de un hemitórax, la dificultad para ventilar y la zona de hiperclaridad con un objeto metálico en la radiografía indican neumotórax por herida penetrante, con riesgo de tensión; el tratamiento es la pleurostomía (sonda pleural). La toracotomía se reserva para hemorragia masiva y la traqueotomía no resuelve el aire en el espacio pleural.",
            "topic": "Trauma / Vía Aérea"
          },
          {
            "id": "puem-r2-c38-q3",
            "ordinal": 3,
            "stem": "El estado neurológico del paciente seguramente se debe a:",
            "options": [
              "TCE",
              "Deshidratación",
              "Intoxicación por humo",
              "Hipotermia"
            ],
            "answer_index": 2,
            "correct_text": "Intoxicación por humo",
            "explanation": "El paciente fue encontrado inconsciente en un área cerrada tras una explosión, con inhalación de humo: el deterioro neurológico se explica por la intoxicación por humo (monóxido de carbono y otros gases) con hipoxia cerebral. Un TCE es posible, pero no hay datos de traumatismo craneal, y la deshidratación o la hipotermia leve no explican por sí solas la pérdida de conciencia.",
            "topic": "Trauma / Vía Aérea"
          },
          {
            "id": "puem-r2-c38-q4",
            "ordinal": 4,
            "stem": "Durante la exposición e inhalación por humo, uno de los gases más tóxicos y que produce hipoxia:",
            "options": [
              "Benceno",
              "Amoniaco",
              "Dióxido de nitrógeno",
              "Monóxido de carbono"
            ],
            "answer_index": 3,
            "correct_text": "Monóxido de carbono",
            "explanation": "El monóxido de carbono es uno de los gases más tóxicos del humo porque se une a la hemoglobina con afinidad mucho mayor que el oxígeno y forma carboxihemoglobina, lo que produce hipoxia tisular. El amoníaco y el dióxido de nitrógeno son irritantes de la vía aérea y el benceno no es un gas del humo de incendio.",
            "topic": "Trauma / Vía Aérea"
          },
          {
            "id": "puem-r2-c38-q5",
            "ordinal": 5,
            "stem": "Por hipotensión persistente se coloca catéter de flotación con PCP de 18 mmHg, IC 2 lit/min. Presenta temprana oliguria; el manejo más apropiado es:",
            "options": [
              "Digital",
              "Dopamina",
              "Sol coloides",
              "Furosemida"
            ],
            "answer_index": 1,
            "correct_text": "Dopamina",
            "explanation": "Con hipotensión persistente, PCP de 18 mmHg (presiones de llenado altas), índice cardiaco bajo y oliguria, el problema es de bomba, un choque cardiogénico, y el manejo es un inotrópico como la dopamina para elevar el gasto y la perfusión renal. Los coloides aumentarían una precarga que ya está alta, el diurético sin gasto adecuado no resuelve la hipoperfusión y la digital no es el tratamiento agudo.",
            "topic": "Trauma / Vía Aérea"
          }
        ],
        "topicId": "trauma"
      },
      {
        "id": "puem-r2-case-40",
        "number": 40,
        "title": "Coagulación Intravascular Diseminada (CID) en Cirugía",
        "topic": "Cuidados Críticos / CID",
        "context": "Mujer de 55 años con antecedente de ingesta de Warfarina por TEP. Cursa con choque séptico secundario a perforación intestinal por úlcera duodenal, en el TO se observa el hígado cirrótico, presenta choque hipovolémico por perdida hemática de 3000 ml. Trombocitopenia progresiva hasta 60,000, TTP 45 seg, TP 19 seg 37%, fibrinógeno 190, tiempo de sangrado 8 min, y antitrombina III disminuida. Lisis de euglobinas acortada.",
        "questions": [
          {
            "id": "puem-r2-c40-q1",
            "ordinal": 1,
            "stem": "La disminución de la antitrombina III ocurre en:",
            "options": [
              "Fibrinólisis primaria",
              "Ingesta de Warfarina",
              "Administración de heparina",
              "CID"
            ],
            "answer_index": 3,
            "correct_text": "CID",
            "explanation": "La antitrombina III es un anticoagulante natural que se consume cuando hay activación masiva de la coagulación, por lo que disminuye en la coagulación intravascular diseminada (CID). La fibrinólisis primaria no la consume, la warfarina actúa sobre factores dependientes de vitamina K y la heparina requiere antitrombina para actuar, pero no la reduce de forma típica.",
            "topic": "Cuidados Críticos / CID"
          },
          {
            "id": "puem-r2-c40-q3",
            "ordinal": 3,
            "stem": "El tiempo de sangrado se realizó para evaluar:",
            "options": [
              "Función plaquetaria",
              "Deficiencia de trombina",
              "Deficiencia de factor Xa",
              "Deficiencia de fibrinógeno"
            ],
            "answer_index": 0,
            "correct_text": "Función plaquetaria",
            "explanation": "El tiempo de sangrado evalúa la hemostasia primaria, es decir la función y el número de plaquetas y su interacción con el endotelio; en esta paciente, con 60,000 plaquetas, estaría alargado. No mide la deficiencia de trombina, de factor Xa ni de fibrinógeno, que se valoran con TP, TTP y fibrinógeno.",
            "topic": "Cuidados Críticos / CID"
          },
          {
            "id": "puem-r2-c40-q4",
            "ordinal": 4,
            "stem": "El tiempo de lisis de euglobinas acortado implica que:",
            "options": [
              "Existe fibrinólisis",
              "La fibrinólisis es normal",
              "Existe un estado de hipercoagulabilidad",
              "Existe una deficiencia de factores de coagulación"
            ],
            "answer_index": 0,
            "correct_text": "Existe fibrinólisis",
            "explanation": "El tiempo de lisis de euglobinas mide cuánto tarda en disolverse un coágulo formado con la fracción de euglobulinas del plasma, y un tiempo acortado indica mayor actividad fibrinolítica, es decir que existe fibrinólisis. Esto es lo esperado en la CID, donde la activación de la coagulación se acompaña de fibrinólisis secundaria. Un tiempo prolongado, no acortado, indicaría fibrinólisis disminuida e hipercoagulabilidad, y esta prueba no mide la deficiencia de factores.",
            "topic": "Cuidados Críticos / CID"
          },
          {
            "id": "puem-r2-c40-q5",
            "ordinal": 5,
            "stem": "La diferencia entre CID y coagulopatía dilucional, se puede identificar por:",
            "options": [
              "Descenso de plaquetas",
              "Tendencia a la hemorragia",
              "Alteración en la agregación plaquetaria",
              "Elevación de productos de degradación de fibrina"
            ],
            "answer_index": 3,
            "correct_text": "Elevación de productos de degradación de fibrina",
            "explanation": "La CID se distingue de la coagulopatía dilucional porque en la CID hay formación de fibrina y su degradación, de modo que se elevan los productos de degradación de fibrina y el dímero D; en la dilucional no. El descenso de plaquetas y la tendencia a hemorragia se ven en ambas, y la alteración de la agregación plaquetaria no distingue entre ellas.",
            "topic": "Cuidados Críticos / CID"
          }
        ],
        "topicId": "trauma"
      },
      {
        "id": "puem-r2-case-41",
        "number": 41,
        "title": "Choque Séptico por Peritonitis y Metas de Reanimación",
        "topic": "Cuidados Críticos / Sepsis",
        "context": "Mujer de 38 años sometida a laparotomía exploradora encontrando apendicitis aguda fase IV. EF: temp 39, FC 115, FR 24, TA 80/40, Hb 13.8, Hto 41%, leucocitos 27,980, neutrófilos 92%, plaquetas 471,000, creatinina 1.9, glucosa 85, urea 96, BUN 45.3, TP 18 al 50%, TTP 40%, lactato 4.5.",
        "questions": [
          {
            "id": "puem-r2-c41-q1",
            "ordinal": 1,
            "stem": "El valor que espera de resistencias vasculares periféricas en dinas x seg/cm es:",
            "options": [
              "Menos de 800",
              "900",
              "1000",
              "1100"
            ],
            "answer_index": 0,
            "correct_text": "Menos de 800",
            "explanation": "En el choque séptico por peritonitis hay vasodilatación, por lo que las resistencias vasculares periféricas están bajas, menos de 800 dinas·s/cm⁵, con taquicardia e hipotensión pese a un gasto cardiaco normal o alto. Los valores de 900 a 1,100 corresponden al rango normal de resistencias, no a un estado vasodilatado.",
            "topic": "Cuidados Críticos / Sepsis"
          },
          {
            "id": "puem-r2-c41-q2",
            "ordinal": 2,
            "stem": "La cifra mínima de lactato sérico que se asocia con mayor índice de mortalidad:",
            "options": [
              "1 – 1.5",
              "2 – 3",
              "4 – 8",
              "10 – 12"
            ],
            "answer_index": 1,
            "correct_text": "2 – 3",
            "explanation": "Un lactato elevado refleja hipoperfusión y metabolismo anaerobio, y desde cifras de 2 a 3 mmol/L la mortalidad en sepsis ya aumenta, de modo que el umbral que marca peor pronóstico empieza en ese rango, y las cifras mayores lo empeoran más. El valor de 1 a 1.5 es normal.",
            "topic": "Cuidados Críticos / Sepsis"
          },
          {
            "id": "puem-r2-c41-q3",
            "ordinal": 3,
            "stem": "El fármaco que indica es:",
            "options": [
              "Adrenalina",
              "Noradrenalina",
              "Amiodarona",
              "Vasopresina"
            ],
            "answer_index": 1,
            "correct_text": "Noradrenalina",
            "explanation": "El vasopresor de primera elección en el choque séptico es la noradrenalina, que eleva la presión arterial por vasoconstricción con poco efecto taquicardizante. La vasopresina es un fármaco de segunda línea que se agrega, la adrenalina se reserva para refractariedad y la amiodarona es un antiarrítmico, no un vasopresor.",
            "topic": "Cuidados Críticos / Sepsis"
          },
          {
            "id": "puem-r2-c41-q4",
            "ordinal": 4,
            "stem": "Las metas óptimas iniciales de reanimación en las primeras 6 horas son:",
            "options": [
              "PVC <8 mmHg, PAM >65, gasto urinario > 1 ml/kg/h, saturación venosa central > 70 %",
              "PVC 8 -12 mmHg, PAM >65, gasto urinario > 2 ml/kg/h, saturación venosa central > 65 %",
              "PVC <8 mmHg, PAM >65, gasto urinario > 0.5 ml/kg/h, saturación venosa central > 65 %",
              "PVC 8- 12 mmHg, PAM >65, gasto urinario > 0.5 ml/kg/h, saturación venosa central > 70 %"
            ],
            "answer_index": 3,
            "correct_text": "PVC 8- 12 mmHg, PAM >65, gasto urinario > 0.5 ml/kg/h, saturación venosa central > 70 %",
            "explanation": "Las metas de la reanimación temprana dirigida por objetivos en las primeras 6 horas incluyen PVC de 8 a 12 mmHg, PAM mayor de 65, gasto urinario mayor de 0.5 mL/kg/h y saturación venosa central mayor de 70%, que es la combinación de la opción D. Las otras mezclan una PVC baja o un gasto urinario y una saturación distintos de esas metas. Hoy se prefiere guiar la reanimación por perfusión sin exigir esa PVC como obligatoria.",
            "topic": "Cuidados Críticos / Sepsis"
          },
          {
            "id": "puem-r2-c41-q5",
            "ordinal": 5,
            "stem": "La meta óptima de control glucémico es mantener cifras entre:",
            "options": [
              "< 80",
              "80 – 100",
              "110 – 130",
              "110 – 180"
            ],
            "answer_index": 3,
            "correct_text": "110 – 180",
            "explanation": "En el paciente crítico con sepsis la meta es evitar tanto la hiperglucemia como la hipoglucemia, y el rango de 110 a 180 mg/dL lo cumple sin exigir un control estricto. Un control muy estricto (menos de 100) aumenta el riesgo de hipoglucemia y de mortalidad.",
            "topic": "Cuidados Críticos / Sepsis"
          }
        ],
        "topicId": "trauma"
      },
      {
        "id": "puem-r2-case-42",
        "number": 42,
        "title": "Monitoreo con Catéter de Swan-Ganz en Choque Séptico",
        "topic": "Cuidados Críticos / Hemodinamia",
        "context": "Hombre de 65 años con 85 kg de peso, en choque distributivo secundario a perforación de víscera hueca. Presión intraabdominal de 30 mmHg, PaO2 de 50, PaCO2 de 15, ph 7.11, HCO3 35, EB -18. Se coloca catéter de swan ganz encontrando gasto cardiaco 8, índice cardiaco 4, VL 45, resistencias vasculares sistémicas 574, y presión capilar pulmonar de 8.",
        "questions": [
          {
            "id": "puem-r2-c42-q1",
            "ordinal": 1,
            "stem": "El diagnóstico hemodinámico es:",
            "options": [
              "Hipovolémico",
              "Hipodinamico e hipovolémico",
              "Hipodinamico normovolemico",
              "Hiperdinámico e hipovolémico"
            ],
            "answer_index": 3,
            "correct_text": "Hiperdinámico e hipovolémico",
            "explanation": "El choque distributivo séptico tiene un perfil hiperdinámico: gasto cardiaco normal o alto con resistencias vasculares bajas, y aquí el gasto es 8 L/min (índice 4) con resistencias de 574. La presión capilar pulmonar baja indica hipovolemia, relativa o absoluta, que la peritonitis y la perforación favorecen. Por eso el diagnóstico es hiperdinámico e hipovolémico; el estado hipodinámico implicaría un gasto bajo y el choque hipovolémico puro cursaría con resistencias elevadas.",
            "topic": "Cuidados Críticos / Hemodinamia"
          },
          {
            "id": "puem-r2-c42-q2",
            "ordinal": 2,
            "stem": "El manejo inicial es:",
            "options": [
              "Soluciones cristaloides en carga",
              "Infusión de azul de metileno y soluciones cristaloides",
              "Norepinefrina y dopamina a dosis dopa y coloides en cargas",
              "Dobutamina y norepinefrina con cargas de solución salina 0.9%"
            ],
            "answer_index": 0,
            "correct_text": "Soluciones cristaloides en carga",
            "explanation": "Con presión capilar baja, el déficit de volumen es lo primero que se corrige: cargas de cristaloides para restituir la precarga. Los vasopresores o inotrópicos (norepinefrina, dopamina, dobutamina) y el azul de metileno se agregan después si persiste la hipotensión con volumen adecuado.",
            "topic": "Cuidados Críticos / Hemodinamia"
          },
          {
            "id": "puem-r2-c42-q3",
            "ordinal": 3,
            "stem": "Le mecánica respiratoria esta modificada por:",
            "options": [
              "Generación de auto PEEP",
              "Aumento de la compliance estática",
              "Reducción de la resistencia de la vía aérea",
              "Desplazamiento del diafragma con incremento de la presión intra torácica"
            ],
            "answer_index": 3,
            "correct_text": "Desplazamiento del diafragma con incremento de la presión intra torácica",
            "explanation": "Una presión intraabdominal de 30 mmHg desplaza el diafragma hacia el tórax y aumenta la presión intratorácica, lo que reduce la distensibilidad y modifica la mecánica respiratoria. No hay datos de auto-PEEP, y la compliance estática y la resistencia de la vía aérea no explican esta alteración: la compliance disminuye y la resistencia no se reduce.",
            "topic": "Cuidados Críticos / Hemodinamia"
          },
          {
            "id": "puem-r2-c42-q4",
            "ordinal": 4,
            "stem": "El paciente persiste hipotenso, PEEP 15, GC 3.5, IC 1.4, VL 40, RVS 850, IVO2 80, PCP 15, usted decide:",
            "options": [
              "Dobutamina y vasopresor",
              "Diurético y disminuir PEEP",
              "Milrinona en infusión y diurético",
              "Incrementar dosis de norepinefrina y coloide"
            ],
            "answer_index": 0,
            "correct_text": "Dobutamina y vasopresor",
            "explanation": "Un paciente hipotenso con índice cardiaco bajo (1.4), presión capilar de 15 y resistencias de 850 con PEEP alto necesita apoyo de la bomba y de la presión: dobutamina para aumentar el gasto y un vasopresor para sostener la PAM. Más líquidos o diuréticos no son lo indicado con esa precarga, y la milrinona con diurético empeoraría la hipotensión por vasodilatación.",
            "topic": "Cuidados Críticos / Hemodinamia"
          },
          {
            "id": "puem-r2-c42-q5",
            "ordinal": 5,
            "stem": "Con los parámetros anteriores, la ventilación mecánica modifica el gasto cardiaco por:",
            "options": [
              "Disminución de la presión intrapleural",
              "Incremento de la presión intratorácica",
              "Incremento de la presión inspiratoria PICO",
              "Incremento en las resistencias vasculares sistémicas"
            ],
            "answer_index": 1,
            "correct_text": "Incremento de la presión intratorácica",
            "explanation": "La ventilación con presión positiva aumenta la presión intratorácica, lo que disminuye el retorno venoso y la precarga del corazón derecho, y con un PEEP alto reduce el gasto cardiaco. La presión intrapleural no disminuye con la presión positiva y la presión pico no es el mecanismo principal, y las resistencias vasculares sistémicas no aumentan por la ventilación.",
            "topic": "Cuidados Críticos / Hemodinamia"
          }
        ],
        "topicId": "trauma"
      },
      {
        "id": "puem-r2-case-44",
        "number": 44,
        "title": "Disfunción Endotelial y Cascada del Choque Séptico",
        "topic": "Cuidados Críticos / Fisiopatología",
        "context": "Hombre de 65 años quien fue intervenido quirúrgicamente por apendicitis aguda perforada y peritonitis. En el post operatorio desarrolla choque séptico que es tratado con antibióticos, inotrópicos, vasopresores y ventilación mecánica.",
        "questions": [
          {
            "id": "puem-r2-c44-q1",
            "ordinal": 1,
            "stem": "El mecanismo fundamental del choque séptico es:",
            "options": [
              "Exotoxina",
              "Endotoxina",
              "Disfunción endotelial",
              "Activación del complemento"
            ],
            "answer_index": 2,
            "correct_text": "Disfunción endotelial",
            "explanation": "En el choque séptico el fenómeno central es la disfunción endotelial: la respuesta a los productos bacterianos activa al endotelio, aumenta la permeabilidad y la vasodilatación y altera la coagulación, lo que produce la hipotensión y la mala perfusión. La endotoxina o la exotoxina son los desencadenantes y el complemento un mediador, pero la lesión del endotelio es el mecanismo final del choque.",
            "topic": "Cuidados Críticos / Fisiopatología"
          },
          {
            "id": "puem-r2-c44-q2",
            "ordinal": 2,
            "stem": "El indicador inicial de disfunción endotelial es:",
            "options": [
              "Insulina",
              "Vasopresina",
              "Factor tisular",
              "IL 10"
            ],
            "answer_index": 2,
            "correct_text": "Factor tisular",
            "explanation": "El factor tisular, que el endotelio activado expresa en su superficie, es el indicador inicial de la disfunción endotelial porque pone en marcha la coagulación. La insulina y la vasopresina son hormonas del estrés y la IL-10 es una citocina antiinflamatoria, no un marcador de activación del endotelio.",
            "topic": "Cuidados Críticos / Fisiopatología"
          },
          {
            "id": "puem-r2-c44-q3",
            "ordinal": 3,
            "stem": "En sepsis el endotelio activado se caracteriza por ser:",
            "options": [
              "Antiinflamatorio e inmunomodulador",
              "Antiinflamatorio, procoagulante e inhibidor",
              "Anticoagulante, antiadhesivo y vasodilatador",
              "Procoagulante, proadhesivo y vasoconstrictor"
            ],
            "answer_index": 3,
            "correct_text": "Procoagulante, proadhesivo y vasoconstrictor",
            "explanation": "El endotelio activado en la sepsis pierde su estado normal antitrombótico y se vuelve procoagulante, proadhesivo para los leucocitos y vasoconstrictor, con un equilibrio roto a favor de la trombosis y la inflamación. Las opciones que lo describen como antiinflamatorio, anticoagulante o vasodilatador corresponden al endotelio sano.",
            "topic": "Cuidados Críticos / Fisiopatología"
          },
          {
            "id": "puem-r2-c44-q4",
            "ordinal": 4,
            "stem": "El endotelio activado genera:",
            "options": [
              "Trombina",
              "Interleucina 8",
              "Antitrombina III",
              "Complemento 5b"
            ],
            "answer_index": 0,
            "correct_text": "Trombina",
            "explanation": "El endotelio activado genera trombina al expresar factor tisular y activar la cascada de la coagulación, lo que contribuye a la microtrombosis de la sepsis. La antitrombina III es un anticoagulante natural que disminuye y no se genera, y la interleucina 8 y el complemento son mediadores de otras vías.",
            "topic": "Cuidados Críticos / Fisiopatología"
          },
          {
            "id": "puem-r2-c44-q5",
            "ordinal": 5,
            "stem": "El factor de transcripción responsable de la actividad endotelial es:",
            "options": [
              "Egr 1",
              "ICAM",
              "FNT GAMMA",
              "FNT KAPPA B"
            ],
            "answer_index": 3,
            "correct_text": "FNT KAPPA B",
            "explanation": "El factor de transcripción responsable de la activación del endotelio es el factor nuclear kappa B (NF-κB), que al activarse migra al núcleo y promueve la expresión de citocinas, moléculas de adhesión como ICAM y factor tisular. ICAM es una molécula de adhesión que resulta de esa activación, el interferón gamma es una citocina y Egr-1 es otro factor, pero el NF-κB es el principal.",
            "topic": "Cuidados Críticos / Fisiopatología"
          }
        ],
        "topicId": "trauma"
      }
    ]
  },
  {
    "id": "guia-tg18-atlanta",
    "type": "guias",
    "subtype": "guideline_summary",
    "title": "Tokyo Guidelines 2018 (TG18) & Clasificación Revisada de Atlanta 2012",
    "subtitle": "Criterios diagnósticos, estratificación de severidad Grado I-III en colecistitis y colangitis aguda, Visión Crítica de Strasberg y manejo Step-Up en pancreatitis aguda.",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "badge": "Guía TG18 / Atlanta",
    "org": "JSHBPS / IAP / APA",
    "year": "2018 / 2012",
    "keyRecommendations": [
      "Colecistitis Grado I (Leve): colecistectomía laparoscópica temprana (< 72 h o dentro de 7 días).",
      "Colecistitis Grado II (Moderada): leucocitos > 18,000/mm³, masa palpable en HCD, evolución > 72 h o inflamación local marcada (gangrena, enfisema, absceso pericolecístico).",
      "Colecistitis Grado III (Severa): disfunción orgánica (cardiovascular con dopamina ≥5 µg/kg/min o norepinefrina, neurológica, PaO₂/FiO₂ <300, Cr >2.0 mg/dL, INR >1.5 o plaquetas <100,000) → drenaje vesicular percutáneo si hay factores negativos.",
      "Colangitis Aguda: descompresión biliar por CPRE urgente (< 24 h en Grado II; inmediata tras reanimación en Grado III).",
      "Pancreatitis Aguda (Atlanta 2012): Leve (sin falla orgánica), Moderadamente grave (falla orgánica transitoria < 48 h o complicaciones locales), Grave (falla orgánica persistente > 48 h con Marshall ≥ 2).",
      "Necrosis Pancreática Infectada (Ensayo PANTER): enfoque Step-Up (drenaje percutáneo o endoscópico transmural con LAMS → necrosectomía mínimamente invasiva VARD/DEN difiriendo idealmente ≥ 4 semanas hasta WON)."
    ]
  },
  {
    "id": "guia-wses-colon",
    "type": "guias",
    "subtype": "guideline_summary",
    "title": "Guías WSES Jerusalem (Apendicitis Aguda) & WSES Diverticulitis Aguda",
    "subtitle": "Estratificación con escalas AIR y Alvarado, manejo del flemón/absceso apendicular y conducta por estadios de Hinchey modificados.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Guía WSES 2020",
    "org": "World Society of Emergency Surgery (WSES)",
    "year": "2020",
    "keyRecommendations": [
      "Escala AIR (Appendicitis Inflammatory Response) supera a Alvarado en capacidad discriminatoria al incorporar PCR y graduación del rebote.",
      "Absceso apendicular ≥ 4 cm bien delimitado: drenaje percutáneo guiado por imagen + antibióticos IV; apendicectomía de intervalo solo si hay síntomas recurrentes o en ≥ 40 años tras colonoscopia para descartar neoplasia cecal.",
      "Diverticulitis Hinchey Ia/Ib: manejo conservador (absceso <4–5 cm: antibióticos solos, WSES 2020); en inmunocomprometidos o ancianos se indican antibióticos.",
      "Diverticulitis Hinchey II (absceso pélvico, a distancia o retroperitoneal): si el absceso es >4–5 cm, drenaje percutáneo guiado por TC + antibióticos (WSES 2020).",
      "Diverticulitis Hinchey III (peritonitis purulenta) y IV (fecal): en pacientes hemodinámicamente estables e inmunocompetentes se prefiere resección sigmoidea con anastomosis primaria ± ileostomía en asa; en inestables o choque séptico: Procedimiento de Hartmann (el lavado peritoneal laparoscópico aislado NO se recomienda por mayor tasa de reintervención)."
    ]
  },
  {
    "id": "guia-wses-isquemia",
    "type": "guias",
    "subtype": "guideline_summary",
    "title": "Guías WSES Isquemia Mesentérica Aguda & Obstrucción por Adherencias (Bolonia)",
    "subtitle": "Diagnóstico con Angio-TC trifásica, revascularización antes que resección, cirugía de Second-Look y protocolo con contraste hidrosoluble (Gastrografin).",
    "topicId": "delgado",
    "tag": "Intestino Delgado",
    "badge": "Guía WSES",
    "org": "WSES (Bolonia / Isquemia Mesentérica)",
    "year": "2018 / 2022",
    "keyRecommendations": [
      "En sospecha de Isquemia Mesentérica Aguda (dolor desproporcionado a la exploración física + FA o aterosclerosis): realizar Angio-TC abdominal trifásica inmediata (la elevación de creatinina NO contraindica el contraste IV porque el retraso es letal).",
      "Principio quirúrgico en IMA: revascularizar primero (embolectomía con catéter de Fogarty en AMS o bypass mesentérico) y resecar después solo el intestino francamente necrótico.",
      "Laparotomía de revisión planeada ('Second-Look' a las 24-48 h) con abdomen abierto temporal es obligatoria cuando la viabilidad intestinal es limítrofe.",
      "En obstrucción de intestino delgado por bridas (ASBO) sin signos de estrangulación ni peritonitis: prueba diagnóstico-terapéutica con medio hidrosoluble hiperosmolar (Gastrografin 100 mL por SNG pinzada); si llega al colon en la radiografía a las 8-24 h predice resolución no operatoria en >95%."
    ]
  },
  {
    "id": "guia-herniasurge",
    "type": "guias",
    "subtype": "guideline_summary",
    "title": "Guías Internacionales HerniaSurge 2023 & WSES Hernias Complicadas",
    "subtitle": "Indicaciones de Lichtenstein vs TAPP/TEP, manejo de hernias femorales, fijación traumática prohibida en triángulos de peligro y uso de malla en campo contaminado.",
    "topicId": "pared",
    "tag": "Pared",
    "badge": "Guía HerniaSurge",
    "org": "HerniaSurge Group / EHS / AHS / WSES",
    "year": "2023",
    "keyRecommendations": [
      "En toda mujer con hernia de la región inguinofemoral se recomienda de primera elección el abordaje laparo-endoscópico (TAPP o TEP) porque cubre simultáneamente el anillo femoral y evita pasar por alto una hernia femoral oculta.",
      "En hernia inguinal bilateral o recidivada tras reparación anterior abierta (Lichtenstein previo): el abordaje de elección es posterior laparo-endoscópico (TAPP/TEP). Si recidiva tras TAPP/TEP previo: abordar por vía anterior (Lichtenstein).",
      "Tamaño mínimo de malla en TAPP/TEP: 10 x 15 cm cubriendo todo el Orificio Miopectíneo de Fruchaud; prohibido colocar tackers en el Triángulo de Doom (vasos ilíacos externos) y Triángulo del Dolor (nervios femorocutáneo lateral y genitofemoral).",
      "En hernias incarceradas con campo limpio-contaminado (reducción sin resección o resección intestinal sin derrame macroscópico): puede colocarse malla sintética macroporosa monofilamento de polipropileno."
    ]
  },
  {
    "id": "guia-ascrs-anorrecto",
    "type": "guias",
    "subtype": "guideline_summary",
    "title": "Guías ASCRS & WSES en Patología Anorrectal y Cáncer de Recto/Ano",
    "subtitle": "Manejo de abscesos perianales, fístulas complejas (LIFT/colgajo), fisura anal crónica (ELI), Escisión Mesorrectal Total (Heald) y Protocolo de Nigro.",
    "topicId": "recto",
    "tag": "Recto y Ano",
    "badge": "Guía ASCRS",
    "org": "American Society of Colon and Rectal Surgeons (ASCRS)",
    "year": "2022 / 2023",
    "keyRecommendations": [
      "Todo absceso anorrectal requiere drenaje quirúrgico inmediato con incisión cruciforme o elíptica cercana al margen anal (no esperar fluctuación); el absceso interesfintérico se drena por vía transanal dividiendo el esfínter interno.",
      "Fisura anal crónica refractaria a calcioantagonistas/nitratos tópicos: el estándar de oro quirúrgico es la Esfinterotomía Lateral Interna (ELI) hasta la línea dentada (tasa de curación >95%).",
      "Fístula transesfintérica alta (>30% del esfínter externo) o anterior en mujeres: contraindicada la fistulotomía primaria; realizar drenaje con setón laxo seguido de técnica preservadora de esfínter (LIFT o colgajo de avance endorrectal).",
      "Cáncer de recto medio e inferior localmente avanzado (T3-T4 o N+): Terapia Neoadyuvante Total (TNT: quimiorradioterapia + quimioterapia sistémica) seguida de Escisión Mesorrectal Total (TME en el plano avascular de Heald). En carcinoma epidermoide del canal anal: Quimiorradioterapia definitiva con 5-FU + Mitomicina C (Protocolo de Nigro)."
    ]
  },
  {
    "id": "guia-atls10",
    "type": "guias",
    "subtype": "guideline_summary",
    "title": "ATLS 10ª Edición (ACS) & Cirugía de Control de Daños",
    "subtitle": "Cambios clave de la 10ª edición del ATLS, reanimación hemostática 1:1:1, ácido tranexámico (CRASH-2), trauma torácico letal y tríada de la muerte.",
    "topicId": "trauma",
    "tag": "Trauma",
    "badge": "Guía ATLS 10ª",
    "org": "American College of Surgeons (Committee on Trauma)",
    "year": "2018",
    "keyRecommendations": [
      "Sitio de toracocentesis con aguja en adultos para neumotórax a tensión: 4º o 5º espacio intercostal ligeramente anterior a la línea axilar media (línea axilar anterior).",
      "Bolo inicial de cristaloides en el adulto traumatizado: 1 Litro de solución isotónica tibia; paso temprano a hemoderivados 1:1:1 en choque hemorrágico Clase III y IV.",
      "Ácido tranexámico (CRASH-2): 1 g IV en 10 min dentro de las primeras 3 horas del trauma, seguido de 1 g en infusión para 8 horas.",
      "Cirugía de Control de Daños ante la Tríada Letal (hipotermia <35°C, acidosis pH <7.20 / déficit de base <-6, coagulopatía INR >1.5): control rápido de sangrado (packing) y contaminación en <60-90 min, abdomen abierto temporal y traslado a UCI."
    ]
  },
  {
    "id": "guia-aba-quemaduras",
    "type": "guias",
    "subtype": "guideline_summary",
    "title": "Guías ABA (American Burn Association) & Manejo del Gran Quemado",
    "subtitle": "Reanimación hídrica 2 mL/kg/%SCQ (quemaduras térmicas) vs 4 mL/kg/%SCQ (eléctricas), lesión inhalatoria, cianuro (hidroxocobalamina) y criterios de referencia.",
    "topicId": "quemaduras",
    "tag": "Piel/Quemaduras",
    "badge": "Guía ABA / ATLS",
    "org": "American Burn Association (ABA)",
    "year": "2018 / 2023",
    "keyRecommendations": [
      "Reanimación hídrica consenso ABA / ATLS 10ª ed.: iniciar con Ringer Lactato a 2 mL × kg × %SCQ (quemaduras de 2º y 3º grado en adultos), 3 mL × kg × %SCQ en niños (<14 años) y 4 mL × kg × %SCQ en quemaduras eléctricas de alto voltaje, titulando para uresis de 0.5 mL/kg/h (1.0 mL/kg/h en eléctricas/rabdomiólisis).",
      "Fórmula clásica de Parkland (Baxter): 4 mL × kg × %SCQ (50% en las primeras 8 horas contadas desde el momento del accidente térmico, 50% en las siguientes 16 horas).",
      "Intoxicación por cianuro en incendio en espacio cerrado (acidosis láctica severa con lactato > 8-10 mmol/L): antídoto de elección es Hidroxocobalamina 5 g IV.",
      "Quemadura por ácido fluorhídrico: neutralización inmediata del ion fluoruro con Gluconato de Calcio (tópico, infiltrado o intraarterial)."
    ]
  },
  {
    "id": "guia-piel-melanoma",
    "type": "guias",
    "subtype": "guideline_summary",
    "title": "Guías NCCN Melanoma Cutáneo, Breslow y Escala LRINEC",
    "subtitle": "Márgenes quirúrgicos de escisión amplia según el espesor de Breslow, indicaciones de biopsia de ganglio centinela y diagnóstico temprano de fascitis necrotizante.",
    "topicId": "piel",
    "tag": "Piel/Quemaduras",
    "badge": "Guía NCCN",
    "org": "National Comprehensive Cancer Network (NCCN)",
    "year": "2024",
    "keyRecommendations": [
      "Márgenes quirúrgicos radiales en Melanoma según espesor de Breslow: In situ → 0.5 a 1.0 cm; ≤ 1.0 mm (T1) → 1.0 cm; 1.01 a 2.0 mm (T2) → 1.0 a 2.0 cm; > 2.0 mm (T3 y T4) → 2.0 cm de margen hasta la fascia muscular.",
      "Biopsia de Ganglio Centinela: indicada en melanoma con Breslow > 1.0 mm (T2-T4) o en Breslow 0.8-1.0 mm (T1b) o < 0.8 mm con ulceración.",
      "Fascitis Necrotizante: dolor desproporcionado a los hallazgos cutáneos. Escala LRINEC ≥ 6 (alta sospecha, VPP 92%) basada en PCR ≥150 mg/L (4 pts), leucocitos, Hb, sodio <135, creatinina >1.6 y glucosa >180 mg/dL → desbridamiento quirúrgico radical inmediato sin retrasar por estudios de imagen."
    ]
  },
  {
    "id": "guia-onco-principios",
    "type": "guias",
    "subtype": "guideline_summary",
    "title": "Principios de Cirugía Oncológica, Sarcomas y Tromboprofilaxis Extendida",
    "subtitle": "Clasificación R0/R1/R2, biopsia incisional longitudinal en sarcomas de extremidades, linfadenectomías y profilaxis con HBPM por 28 días (Caprini).",
    "topicId": "neoplasias",
    "tag": "Neoplasias/Onco",
    "badge": "Guía OncoQx",
    "org": "NCCN / ACCP / AJCC 8ª ed.",
    "year": "2023",
    "keyRecommendations": [
      "Clasificación del tumor residual tras resección: R0 (márgenes macro y microscópicamente negativos), R1 (margen microscópicamente positivo en tinta china), R2 (enfermedad macroscópica residual visible).",
      "En masas sospechosas de sarcoma de partes blandas en extremidades (> 5 cm o profundas a la fascia): biopsia con aguja gruesa (Tru-Cut) o biopsia incisional estrictamente longitudinal en el eje de la extremidad para que el trayecto sea resecado en bloque.",
      "En cirugía mayor abdominal o pélvica por cáncer (Caprini ≥ 5): se indica tromboprofilaxis farmacológica extendida con Heparina de Bajo Peso Molecular (enoxaparina) durante 28 días postoperatorios."
    ]
  },
  {
    "id": "catalogo-bibliografia-157",
    "type": "guias",
    "subtype": "pdf_catalog",
    "title": "Biblioteca Quirúrgica PUEM (157 Capítulos, Tratados y Guías)",
    "subtitle": "Índice completo de capítulos de Sabiston 21ª ed., Schwartz 11ª ed., Tratado AMCG, Skandalakis y Guías de Práctica Clínica organizados por año de residencia (R1 a R4).",
    "topicId": "neoplasias",
    "tag": "General",
    "badge": "157 Textos PUEM",
    "items": [
      {
        "id": "ea20c19320d94aa3b8b7769c192635aa",
        "title": "01 Tecnicas Quirurgicas Sabiston",
        "source": "tecnica_quirurgica",
        "module": "01 Tecnicas Quirurgicas",
        "filename": "01_Tecnicas_Quirurgicas_Sabiston.pdf",
        "pages": 36
      },
      {
        "id": "30d10c8b3c8743448ee10a96e1f3b6e3",
        "title": "01 Tecnicas Quirurgicas Schwartz",
        "source": "tecnica_quirurgica",
        "module": "01 Tecnicas Quirurgicas",
        "filename": "01_Tecnicas_Quirurgicas_Schwartz.pdf",
        "pages": 28
      },
      {
        "id": "bcd3cf5aa11d462cbd816fdb8a6eab0d",
        "title": "01 Tecnicas Quirurgicas Tratado AMCG",
        "source": "tecnica_quirurgica",
        "module": "01 Tecnicas Quirurgicas",
        "filename": "01_Tecnicas_Quirurgicas_Tratado_AMCG.pdf",
        "pages": 59
      },
      {
        "id": "4b5e960f00c54411b0e0dac1d1316846",
        "title": "02 Respuesta Biologica al Trauma Sabiston",
        "source": "national",
        "module": "02 Respuesta Biologica al Trauma",
        "filename": "02_Respuesta_Biologica_al_Trauma_Sabiston.pdf",
        "pages": 24
      },
      {
        "id": "51749502b648453da8820d46578ed2a5",
        "title": "02 Respuesta Biologica al Trauma Schwartz",
        "source": "national",
        "module": "02 Respuesta Biologica al Trauma",
        "filename": "02_Respuesta_Biologica_al_Trauma_Schwartz.pdf",
        "pages": 51
      },
      {
        "id": "c26acee158e3453f8e53c57af1147170",
        "title": "02 Respuesta Biologica al Trauma Tratado AMCG",
        "source": "national",
        "module": "02 Respuesta Biologica al Trauma",
        "filename": "02_Respuesta_Biologica_al_Trauma_Tratado_AMCG.pdf",
        "pages": 15
      },
      {
        "id": "8b4055c4c1914831bc89539f114d002b",
        "title": "03 Liquidos y Electrolitos Sabiston",
        "source": "national",
        "module": "03 Liquidos y Electrolitos",
        "filename": "03_Liquidos_y_Electrolitos_Sabiston.pdf",
        "pages": 51
      },
      {
        "id": "3a3d9bc03bc640b7bb8920d07cc4a38c",
        "title": "03 Liquidos y Electrolitos Schwartz",
        "source": "national",
        "module": "03 Liquidos y Electrolitos",
        "filename": "03_Liquidos_y_Electrolitos_Schwartz.pdf",
        "pages": 20
      },
      {
        "id": "54cff4d0dc3747a696e5663dd899e30f",
        "title": "03 Liquidos y Electrolitos Tratado AMCG",
        "source": "national",
        "module": "03 Liquidos y Electrolitos",
        "filename": "03_Liquidos_y_Electrolitos_Tratado_AMCG.pdf",
        "pages": 13
      },
      {
        "id": "b017e66239d24d53bc7a22bce72f74bc",
        "title": "04 Cicatrizacion Sabiston",
        "source": "national",
        "module": "04 Cicatrizacion",
        "filename": "04_Cicatrizacion_Sabiston.pdf",
        "pages": 31
      },
      {
        "id": "f9f233cb04c94a81b331cab8c669bbca",
        "title": "04 Cicatrizacion Schwartz",
        "source": "national",
        "module": "04 Cicatrizacion",
        "filename": "04_Cicatrizacion_Schwartz.pdf",
        "pages": 32
      },
      {
        "id": "2a99c86af07741a1b1a454a6ccade1bf",
        "title": "04 Cicatrizacion Tratado AMCG",
        "source": "national",
        "module": "04 Cicatrizacion",
        "filename": "04_Cicatrizacion_Tratado_AMCG.pdf",
        "pages": 16
      },
      {
        "id": "0b75686a9a03418aae003bf3f88b7305",
        "title": "05 Infeccion y Cirugia Sabiston",
        "source": "national",
        "module": "05 Infeccion y Cirugia",
        "filename": "05_Infeccion_y_Cirugia_Sabiston.pdf",
        "pages": 15
      },
      {
        "id": "05027ab820f645709394a9640c48ca29",
        "title": "05 Infeccion y Cirugia Schwartz",
        "source": "national",
        "module": "05 Infeccion y Cirugia",
        "filename": "05_Infeccion_y_Cirugia_Schwartz.pdf",
        "pages": 26
      },
      {
        "id": "98c546a5bce54c9088a7585d4b8be8e3",
        "title": "05 Infeccion y Cirugia Tratado AMCG",
        "source": "national",
        "module": "05 Infeccion y Cirugia",
        "filename": "05_Infeccion_y_Cirugia_Tratado_AMCG.pdf",
        "pages": 94
      },
      {
        "id": "a3131efc97c54b049fdcecd4c9b832d2",
        "title": "06 Estado de Choque Sabiston",
        "source": "national",
        "module": "06 Estado de Choque",
        "filename": "06_Estado_de_Choque_Sabiston.pdf",
        "pages": 51
      },
      {
        "id": "1e53ba7d7af34004906659c8366c079c",
        "title": "06 Estado de Choque Schwartz",
        "source": "national",
        "module": "06 Estado de Choque",
        "filename": "06_Estado_de_Choque_Schwartz.pdf",
        "pages": 26
      },
      {
        "id": "335d82784a7643229b05476a29d229a6",
        "title": "06 Estado de Choque Tratado AMCG",
        "source": "national",
        "module": "06 Estado de Choque",
        "filename": "06_Estado_de_Choque_Tratado_AMCG.pdf",
        "pages": 10
      },
      {
        "id": "34159fc75ef145938f1912197473f76b",
        "title": "07 Nutricion en Cirugia Sabiston",
        "source": "national",
        "module": "07 Nutricion en Cirugia",
        "filename": "07_Nutricion_en_Cirugia_Sabiston.pdf",
        "pages": 24
      },
      {
        "id": "eb11929624154f24a8e4fb38482a5814",
        "title": "07 Nutricion en Cirugia Schwartz",
        "source": "national",
        "module": "07 Nutricion en Cirugia",
        "filename": "07_Nutricion_en_Cirugia_Schwartz.pdf",
        "pages": 14
      },
      {
        "id": "be7f7c1420be42bd8b44c320ef03d414",
        "title": "07 Nutricion en Cirugia Tratado AMCG",
        "source": "national",
        "module": "07 Nutricion en Cirugia",
        "filename": "07_Nutricion_en_Cirugia_Tratado_AMCG.pdf",
        "pages": 59
      },
      {
        "id": "0b5a8d3413424cc0bb43147c97d20a09",
        "title": "08 Sangre y Coagulacion Sabiston",
        "source": "national",
        "module": "08 Sangre y Coagulacion",
        "filename": "08_Sangre_y_Coagulacion_Sabiston.pdf",
        "pages": 51
      },
      {
        "id": "af548838f76b41cda517c807c6a06c81",
        "title": "08 Sangre y Coagulacion Schwartz",
        "source": "national",
        "module": "08 Sangre y Coagulacion",
        "filename": "08_Sangre_y_Coagulacion_Schwartz.pdf",
        "pages": 24
      },
      {
        "id": "2745079947744ffa8682946b20b28a4e",
        "title": "08 Sangre y Coagulacion Tratado AMCG",
        "source": "national",
        "module": "08 Sangre y Coagulacion",
        "filename": "08_Sangre_y_Coagulacion_Tratado_AMCG.pdf",
        "pages": 9
      },
      {
        "id": "6f453b204392488197a4ec156e17b065",
        "title": "09 Trauma Sabiston",
        "source": "national",
        "module": "09 Trauma",
        "filename": "09_Trauma_Sabiston.pdf",
        "pages": 43
      },
      {
        "id": "977cf50b05354fc685955be7b924c2fd",
        "title": "09 Trauma Schwartz",
        "source": "national",
        "module": "09 Trauma",
        "filename": "09_Trauma_Schwartz.pdf",
        "pages": 66
      },
      {
        "id": "3655097e0fc746d3905e13a7b1adfe6e",
        "title": "09 Trauma Tratado AMCG",
        "source": "national",
        "module": "09 Trauma",
        "filename": "09_Trauma_Tratado_AMCG.pdf",
        "pages": 140
      },
      {
        "id": "e2b62cf943e24d50be6c22d529ca9f50",
        "title": "10 Piel Tejido Subcutaneo y Quemaduras Sabiston",
        "source": "national",
        "module": "10 Piel Tejido Subcutaneo y Quemaduras",
        "filename": "10_Piel_Tejido_Subcutaneo_y_Quemaduras_Sabiston.pdf",
        "pages": 22
      },
      {
        "id": "a257cc1814bf4667a5678a67a79e2e85",
        "title": "10 Piel Tejido Subcutaneo y Quemaduras Schwartz",
        "source": "national",
        "module": "10 Piel Tejido Subcutaneo y Quemaduras",
        "filename": "10_Piel_Tejido_Subcutaneo_y_Quemaduras_Schwartz.pdf",
        "pages": 24
      },
      {
        "id": "610acd044ab348d295541f5ca9ac1a56",
        "title": "10 Piel Tejido Subcutaneo y Quemaduras Tratado AMCG",
        "source": "national",
        "module": "10 Piel Tejido Subcutaneo y Quemaduras",
        "filename": "10_Piel_Tejido_Subcutaneo_y_Quemaduras_Tratado_AMCG.pdf",
        "pages": 35
      },
      {
        "id": "ba79039e3d224ec79c5a17d1247391a5",
        "title": "Resumen · TEMA 10: PIEL, TEJIDO SUBCUTÁNEO Y QUEMADURAS",
        "source": "resumen",
        "module": "10 Piel Tejido Subcutaneo y Quemaduras Gemini",
        "filename": "10_Piel_Tejido_Subcutaneo_y_Quemaduras_Gemini.md",
        "pages": 0
      },
      {
        "id": "21a001a26dd847d3b59be47fdddff7c4",
        "title": "11 Neoplasias Generalidades Sabiston",
        "source": "national",
        "module": "11 Neoplasias Generalidades",
        "filename": "11_Neoplasias_Generalidades_Sabiston.pdf",
        "pages": 49
      },
      {
        "id": "477cb57f6f1f4e02b08fd558f4411278",
        "title": "11 Neoplasias Generalidades Schwartz",
        "source": "national",
        "module": "11 Neoplasias Generalidades",
        "filename": "11_Neoplasias_Generalidades_Schwartz.pdf",
        "pages": 48
      },
      {
        "id": "e6f897a0f6c44991817369950028483b",
        "title": "11 Neoplasias Generalidades Tratado AMCG",
        "source": "national",
        "module": "11 Neoplasias Generalidades",
        "filename": "11_Neoplasias_Generalidades_Tratado_AMCG.pdf",
        "pages": 47
      },
      {
        "id": "c2e97945979a498082238829d5ed2ac6",
        "title": "Resumen · TEMA 11: NEOPLASIAS (GENERALIDADES)",
        "source": "resumen",
        "module": "11 Neoplasias Generalidades Gemini",
        "filename": "11_Neoplasias_Generalidades_Gemini.md",
        "pages": 0
      },
      {
        "id": "a6afb8475fcc407885acf83c8a86160a",
        "title": "12 Pared Abdominal Sabiston",
        "source": "national",
        "module": "12 Pared Abdominal",
        "filename": "12_Pared_Abdominal_Sabiston.pdf",
        "pages": 54
      },
      {
        "id": "5eae4ea0539f461b8e4c3135ba54f5d9",
        "title": "12 Pared Abdominal Schwartz",
        "source": "national",
        "module": "12 Pared Abdominal",
        "filename": "12_Pared_Abdominal_Schwartz.pdf",
        "pages": 72
      },
      {
        "id": "4f523b13a1134204abe533af96bc5955",
        "title": "12 Pared Abdominal Skandalakis",
        "source": "national",
        "module": "12 Pared Abdominal",
        "filename": "12_Pared_Abdominal_Skandalakis.pdf",
        "pages": 92
      },
      {
        "id": "7a994bcdfef34af5863b63f5199dd061",
        "title": "12 Pared Abdominal Tratado AMCG",
        "source": "national",
        "module": "12 Pared Abdominal",
        "filename": "12_Pared_Abdominal_Tratado_AMCG.pdf",
        "pages": 86
      },
      {
        "id": "43a55daf132d41d0866bf1d9db993053",
        "title": "Resumen · TEMA 12: PARED ABDOMINAL Y HERNIAS",
        "source": "resumen",
        "module": "12 Pared Abdominal Gemini",
        "filename": "12_Pared_Abdominal_Gemini.md",
        "pages": 0
      },
      {
        "id": "28147a453aa6420b9fab375310598e27",
        "title": "13 Esofago Sabiston",
        "source": "national",
        "module": "13 Esofago",
        "filename": "13_Esofago_Sabiston.pdf",
        "pages": 65
      },
      {
        "id": "a0d946ead584450085a1411a02cedf7a",
        "title": "13 Esofago Schwartz",
        "source": "national",
        "module": "13 Esofago",
        "filename": "13_Esofago_Schwartz.pdf",
        "pages": 94
      },
      {
        "id": "4364a9ee96814eb4906bb9878e08ae03",
        "title": "13 Esofago Skandalakis",
        "source": "national",
        "module": "13 Esofago",
        "filename": "13_Esofago_Skandalakis.pdf",
        "pages": 36
      },
      {
        "id": "d8d956c95570474b8812285cd7c00630",
        "title": "13 Esofago Tratado AMCG",
        "source": "national",
        "module": "13 Esofago",
        "filename": "13_Esofago_Tratado_AMCG.pdf",
        "pages": 65
      },
      {
        "id": "ac66e2908492433a904e08acd47e5db5",
        "title": "Resumen · TEMA 13: ESÓFAGO Y UNIÓN ESOFAGOGÁSTRICA",
        "source": "resumen",
        "module": "13 Esofago Gemini",
        "filename": "13_Esofago_Gemini.md",
        "pages": 0
      },
      {
        "id": "eb05d4230a3845df98a0ec58ce3167f6",
        "title": "14 Estomago y Duodeno Sabiston",
        "source": "national",
        "module": "14 Estomago y Duodeno",
        "filename": "14_Estomago_y_Duodeno_Sabiston.pdf",
        "pages": 44
      },
      {
        "id": "00bd6573968c4f4ca02193a73039d230",
        "title": "14 Estomago y Duodeno Schwartz",
        "source": "national",
        "module": "14 Estomago y Duodeno",
        "filename": "14_Estomago_y_Duodeno_Schwartz.pdf",
        "pages": 64
      },
      {
        "id": "b9007c554a3c4bf9b815474ed1805c06",
        "title": "14 Estomago y Duodeno Skandalakis",
        "source": "national",
        "module": "14 Estomago y Duodeno",
        "filename": "14_Estomago_y_Duodeno_Skandalakis.pdf",
        "pages": 90
      },
      {
        "id": "29c5555da09845c8aa475335528369ae",
        "title": "14 Estomago y Duodeno Tratado AMCG",
        "source": "national",
        "module": "14 Estomago y Duodeno",
        "filename": "14_Estomago_y_Duodeno_Tratado_AMCG.pdf",
        "pages": 73
      },
      {
        "id": "3e27479a5e9141e5810ffcaf15068f12",
        "title": "Resumen · TEMA 14: ESTÓMAGO Y DUODENO",
        "source": "resumen",
        "module": "14 Estomago y Duodeno Gemini",
        "filename": "14_Estomago_y_Duodeno_Gemini.md",
        "pages": 0
      },
      {
        "id": "fe89cd7cf65842478e748dafd8ac63e6",
        "title": "15 Intestino Delgado Sabiston",
        "source": "national",
        "module": "15 Intestino Delgado",
        "filename": "15_Intestino_Delgado_Sabiston.pdf",
        "pages": 61
      },
      {
        "id": "e55c25e0d73f4b8e89dc886009fab560",
        "title": "15 Intestino Delgado Schwartz",
        "source": "national",
        "module": "15 Intestino Delgado",
        "filename": "15_Intestino_Delgado_Schwartz.pdf",
        "pages": 38
      },
      {
        "id": "2ef77773f46d4f0b8d5332ad684dd404",
        "title": "15 Intestino Delgado Skandalakis",
        "source": "national",
        "module": "15 Intestino Delgado",
        "filename": "15_Intestino_Delgado_Skandalakis.pdf",
        "pages": 45
      },
      {
        "id": "63d5b9713d2340e5a94ded79253b92ed",
        "title": "15 Intestino Delgado Tratado AMCG",
        "source": "national",
        "module": "15 Intestino Delgado",
        "filename": "15_Intestino_Delgado_Tratado_AMCG.pdf",
        "pages": 48
      },
      {
        "id": "917e283f6ebc4fc082015ca0a433e91b",
        "title": "Resumen · TEMA 15: INTESTINO DELGADO Y MESENTERIO",
        "source": "resumen",
        "module": "15 Intestino Delgado Gemini",
        "filename": "15_Intestino_Delgado_Gemini.md",
        "pages": 0
      },
      {
        "id": "1dece5c8d6894c399e46ffb133add314",
        "title": "16 Colon Sabiston",
        "source": "national",
        "module": "16 Colon",
        "filename": "16_Colon_Sabiston.pdf",
        "pages": 100
      },
      {
        "id": "8b7faf3e215849b48bf59fdd5bd5cecf",
        "title": "16 Colon Schwartz",
        "source": "national",
        "module": "16 Colon",
        "filename": "16_Colon_Schwartz.pdf",
        "pages": 88
      },
      {
        "id": "458a4c2ce44d436e8b2ea421cd5632da",
        "title": "16 Colon Skandalakis",
        "source": "national",
        "module": "16 Colon",
        "filename": "16_Colon_Skandalakis.pdf",
        "pages": 90
      },
      {
        "id": "6863ecd5efa44ed092ef669280da87ed",
        "title": "16 Colon Tratado AMCG",
        "source": "national",
        "module": "16 Colon",
        "filename": "16_Colon_Tratado_AMCG.pdf",
        "pages": 104
      },
      {
        "id": "c825bfc261e143e890164bbd1aaec4ac",
        "title": "Resumen · TEMA 16: COLON Y APÉNDICE CECAL",
        "source": "resumen",
        "module": "16 Colon Gemini",
        "filename": "16_Colon_Gemini.md",
        "pages": 0
      },
      {
        "id": "71e88cce6fb94ef881a2298e6e741940",
        "title": "17 Recto y Ano Sabiston",
        "source": "national",
        "module": "17 Recto y Ano",
        "filename": "17_Recto_y_Ano_Sabiston.pdf",
        "pages": 24
      },
      {
        "id": "d6a564938b3d4bbead188bf518ed62c4",
        "title": "17 Recto y Ano Schwartz",
        "source": "national",
        "module": "17 Recto y Ano",
        "filename": "17_Recto_y_Ano_Schwartz.pdf",
        "pages": 66
      },
      {
        "id": "1cfa3c3c3e46440994e9fd54671c9d57",
        "title": "17 Recto y Ano Skandalakis",
        "source": "national",
        "module": "17 Recto y Ano",
        "filename": "17_Recto_y_Ano_Skandalakis.pdf",
        "pages": 57
      },
      {
        "id": "e93e33190c454d7f991f3e829b41770a",
        "title": "17 Recto y Ano Tratado AMCG",
        "source": "national",
        "module": "17 Recto y Ano",
        "filename": "17_Recto_y_Ano_Tratado_AMCG.pdf",
        "pages": 50
      },
      {
        "id": "df759bf929d647188cccf9aab86abf1f",
        "title": "Resumen · TEMA 17: RECTO Y CONDUCTO ANAL",
        "source": "resumen",
        "module": "17 Recto y Ano Gemini",
        "filename": "17_Recto_y_Ano_Gemini.md",
        "pages": 0
      },
      {
        "id": "be251830fe8d4c2a8e3ca15029a371ef",
        "title": "18 Intestino Obstruccion y HTDB Sabiston",
        "source": "national",
        "module": "18 Intestino Obstruccion y HTDB",
        "filename": "18_Intestino_Obstruccion_y_HTDB_Sabiston.pdf",
        "pages": 17
      },
      {
        "id": "a6efd87a42554b55b165b02d4b04e242",
        "title": "18 Intestino Obstruccion y HTDB Schwartz",
        "source": "national",
        "module": "18 Intestino Obstruccion y HTDB",
        "filename": "18_Intestino_Obstruccion_y_HTDB_Schwartz.pdf",
        "pages": 104
      },
      {
        "id": "383ef359e1e241a99b1e3d26ffabdf2e",
        "title": "18 Intestino Obstruccion y HTDB Tratado AMCG",
        "source": "national",
        "module": "18 Intestino Obstruccion y HTDB",
        "filename": "18_Intestino_Obstruccion_y_HTDB_Tratado_AMCG.pdf",
        "pages": 6
      },
      {
        "id": "fd6b6f8c71cd4cd0a400fd1374cb5f8e",
        "title": "19 Higado Sabiston",
        "source": "national",
        "module": "19 Higado",
        "filename": "19_Higado_Sabiston.pdf",
        "pages": 64
      },
      {
        "id": "1c855082deb64ef9b8c58da3f1e5fb8a",
        "title": "19 Higado Schwartz",
        "source": "national",
        "module": "19 Higado",
        "filename": "19_Higado_Schwartz.pdf",
        "pages": 46
      },
      {
        "id": "1f96fcff01e9479ea458f1bac794a8ef",
        "title": "19 Higado Skandalakis",
        "source": "national",
        "module": "19 Higado",
        "filename": "19_Higado_Skandalakis.pdf",
        "pages": 79
      },
      {
        "id": "c1208df296fb4a478292afffa636c974",
        "title": "19 Higado Tratado AMCG",
        "source": "national",
        "module": "19 Higado",
        "filename": "19_Higado_Tratado_AMCG.pdf",
        "pages": 60
      },
      {
        "id": "56c9e6b910d34a1791814d6e7cb9539d",
        "title": "20 Vias Biliares Sabiston",
        "source": "national",
        "module": "20 Vias Biliares",
        "filename": "20_Vias_Biliares_Sabiston.pdf",
        "pages": 39
      },
      {
        "id": "567e47c817d141e3b9ac0c364eee6655",
        "title": "20 Vias Biliares Schwartz",
        "source": "national",
        "module": "20 Vias Biliares",
        "filename": "20_Vias_Biliares_Schwartz.pdf",
        "pages": 32
      },
      {
        "id": "a88bc5384fc54d73be5cf3d70f05ef3d",
        "title": "20 Vias Biliares Skandalakis",
        "source": "national",
        "module": "20 Vias Biliares",
        "filename": "20_Vias_Biliares_Skandalakis.pdf",
        "pages": 51
      },
      {
        "id": "36dd994bc540437fb4587e81d09d53b1",
        "title": "20 Vias Biliares Tratado AMCG",
        "source": "national",
        "module": "20 Vias Biliares",
        "filename": "20_Vias_Biliares_Tratado_AMCG.pdf",
        "pages": 46
      },
      {
        "id": "68bcce315b7248d38032c391b47cb1dc",
        "title": "21 Pancreas Sabiston",
        "source": "national",
        "module": "21 Pancreas",
        "filename": "21_Pancreas_Sabiston.pdf",
        "pages": 38
      },
      {
        "id": "7595ae45ee064e1898153f5aeafcf285",
        "title": "21 Pancreas Schwartz",
        "source": "national",
        "module": "21 Pancreas",
        "filename": "21_Pancreas_Schwartz.pdf",
        "pages": 82
      },
      {
        "id": "5434b9607376454c99381831853e7cc5",
        "title": "21 Pancreas Skandalakis",
        "source": "national",
        "module": "21 Pancreas",
        "filename": "21_Pancreas_Skandalakis.pdf",
        "pages": 73
      },
      {
        "id": "87236054ab91497dae8ae0ba6e088fe7",
        "title": "21 Pancreas Tratado AMCG",
        "source": "national",
        "module": "21 Pancreas",
        "filename": "21_Pancreas_Tratado_AMCG.pdf",
        "pages": 40
      },
      {
        "id": "e802514647474a51ace70954eb8c5bfd",
        "title": "22 Bazo Sabiston",
        "source": "national",
        "module": "22 Bazo",
        "filename": "22_Bazo_Sabiston.pdf",
        "pages": 17
      },
      {
        "id": "4092361f16da43db85ecccd3dc944797",
        "title": "22 Bazo Schwartz",
        "source": "national",
        "module": "22 Bazo",
        "filename": "22_Bazo_Schwartz.pdf",
        "pages": 26
      },
      {
        "id": "21b984fce160423c9bf69dc7a7c58078",
        "title": "22 Bazo Skandalakis",
        "source": "national",
        "module": "22 Bazo",
        "filename": "22_Bazo_Skandalakis.pdf",
        "pages": 45
      },
      {
        "id": "0da7d7c1035244ac9628865356e02e94",
        "title": "22 Bazo Tratado AMCG",
        "source": "national",
        "module": "22 Bazo",
        "filename": "22_Bazo_Tratado_AMCG.pdf",
        "pages": 48
      },
      {
        "id": "26e2e88a688c4f478c00b5f8ce7208e8",
        "title": "23 Peritoneo y Retroperitoneo Sabiston",
        "source": "national",
        "module": "23 Peritoneo y Retroperitoneo",
        "filename": "23_Peritoneo_y_Retroperitoneo_Sabiston.pdf",
        "pages": 25
      },
      {
        "id": "d4e62844de144fdfbfe08d78b875db54",
        "title": "23 Peritoneo y Retroperitoneo Schwartz",
        "source": "national",
        "module": "23 Peritoneo y Retroperitoneo",
        "filename": "23_Peritoneo_y_Retroperitoneo_Schwartz.pdf",
        "pages": 16
      },
      {
        "id": "03a419b17dfc4280b5ba967cbeff4822",
        "title": "23 Peritoneo y Retroperitoneo Skandalakis",
        "source": "national",
        "module": "23 Peritoneo y Retroperitoneo",
        "filename": "23_Peritoneo_y_Retroperitoneo_Skandalakis.pdf",
        "pages": 74
      },
      {
        "id": "9f6e4f1a24bf4a09ae0c03b41e630843",
        "title": "24 Glandulas Salivales y Tiroides Sabiston",
        "source": "national",
        "module": "24 Glandulas Salivales y Tiroides",
        "filename": "24_Glandulas_Salivales_y_Tiroides_Sabiston.pdf",
        "pages": 68
      },
      {
        "id": "c85ef00c9a2f4a19b3afe0d0700f8c4f",
        "title": "24 Glandulas Salivales y Tiroides Schwartz",
        "source": "national",
        "module": "24 Glandulas Salivales y Tiroides",
        "filename": "24_Glandulas_Salivales_y_Tiroides_Schwartz.pdf",
        "pages": 76
      },
      {
        "id": "d74bb88c24724b9d92bc8b9e6eaeb973",
        "title": "24 Glandulas Salivales y Tiroides Skandalakis",
        "source": "national",
        "module": "24 Glandulas Salivales y Tiroides",
        "filename": "24_Glandulas_Salivales_y_Tiroides_Skandalakis.pdf",
        "pages": 103
      },
      {
        "id": "b81aa1d54e0a4d6cb340fd4e339de8b8",
        "title": "24 Glandulas Salivales y Tiroides Tratado AMCG",
        "source": "national",
        "module": "24 Glandulas Salivales y Tiroides",
        "filename": "24_Glandulas_Salivales_y_Tiroides_Tratado_AMCG.pdf",
        "pages": 78
      },
      {
        "id": "1082f01e5f6c4fef9067f70b39005672",
        "title": "25 Mama y Cirugia Reconstructiva Sabiston",
        "source": "national",
        "module": "25 Mama y Cirugia Reconstructiva",
        "filename": "25_Mama_y_Cirugia_Reconstructiva_Sabiston.pdf",
        "pages": 63
      },
      {
        "id": "08381fccde4641cc9e1e273408e259e2",
        "title": "25 Mama y Cirugia Reconstructiva Schwartz",
        "source": "national",
        "module": "25 Mama y Cirugia Reconstructiva",
        "filename": "25_Mama_y_Cirugia_Reconstructiva_Schwartz.pdf",
        "pages": 68
      },
      {
        "id": "c037a39c5ec14d8ba56db63331c9e269",
        "title": "25 Mama y Cirugia Reconstructiva Skandalakis",
        "source": "national",
        "module": "25 Mama y Cirugia Reconstructiva",
        "filename": "25_Mama_y_Cirugia_Reconstructiva_Skandalakis.pdf",
        "pages": 29
      },
      {
        "id": "57598843cd9d40d3a5922a6bdb29b2fe",
        "title": "25 Mama y Cirugia Reconstructiva Tratado AMCG",
        "source": "national",
        "module": "25 Mama y Cirugia Reconstructiva",
        "filename": "25_Mama_y_Cirugia_Reconstructiva_Tratado_AMCG.pdf",
        "pages": 102
      },
      {
        "id": "7a9bfca4a2644ef7b9d667c34a5587d7",
        "title": "26 Endoscopia Sabiston",
        "source": "national",
        "module": "26 Endoscopia",
        "filename": "26_Endoscopia_Sabiston.pdf",
        "pages": 13
      },
      {
        "id": "40f71537d6904cef81cea6a8ef1a99b4",
        "title": "26 Endoscopia Schwartz",
        "source": "national",
        "module": "26 Endoscopia",
        "filename": "26_Endoscopia_Schwartz.pdf",
        "pages": 28
      },
      {
        "id": "68b745b701b641f58e3c2385bc4f9bda",
        "title": "26 Endoscopia Tratado AMCG",
        "source": "national",
        "module": "26 Endoscopia",
        "filename": "26_Endoscopia_Tratado_AMCG.pdf",
        "pages": 40
      },
      {
        "id": "87efc20d58c44950875926701451b9a4",
        "title": "27 Nefro Urologia Sabiston",
        "source": "national",
        "module": "27 Nefro Urologia",
        "filename": "27_Nefro_Urologia_Sabiston.pdf",
        "pages": 23
      },
      {
        "id": "fafd9bb019d94ca19b6c8e00d0cc94e3",
        "title": "27 Nefro Urologia Schwartz",
        "source": "national",
        "module": "27 Nefro Urologia",
        "filename": "27_Nefro_Urologia_Schwartz.pdf",
        "pages": 20
      },
      {
        "id": "99dd261c5b514c60bb1e478be15ad6eb",
        "title": "27 Nefro Urologia Skandalakis",
        "source": "national",
        "module": "27 Nefro Urologia",
        "filename": "27_Nefro_Urologia_Skandalakis.pdf",
        "pages": 100
      },
      {
        "id": "3d99705cb88b4c60a36faf2819814088",
        "title": "27 Nefro Urologia Tratado AMCG",
        "source": "national",
        "module": "27 Nefro Urologia",
        "filename": "27_Nefro_Urologia_Tratado_AMCG.pdf",
        "pages": 40
      },
      {
        "id": "ee11d2cdb154457ab7ef2d6fb23fbe69",
        "title": "28 Aparato Genital Femenino Sabiston",
        "source": "national",
        "module": "28 Aparato Genital Femenino",
        "filename": "28_Aparato_Genital_Femenino_Sabiston.pdf",
        "pages": 27
      },
      {
        "id": "47a6952cf70a4586a54ba55bd302efce",
        "title": "28 Aparato Genital Femenino Schwartz",
        "source": "national",
        "module": "28 Aparato Genital Femenino",
        "filename": "28_Aparato_Genital_Femenino_Schwartz.pdf",
        "pages": 38
      },
      {
        "id": "2aecc27485e746229922b8fd45a4307d",
        "title": "28 Aparato Genital Femenino Skandalakis",
        "source": "national",
        "module": "28 Aparato Genital Femenino",
        "filename": "28_Aparato_Genital_Femenino_Skandalakis.pdf",
        "pages": 59
      },
      {
        "id": "4f809f6ae2e04788b1759e10a517b9b5",
        "title": "28 Aparato Genital Femenino Tratado AMCG",
        "source": "national",
        "module": "28 Aparato Genital Femenino",
        "filename": "28_Aparato_Genital_Femenino_Tratado_AMCG.pdf",
        "pages": 44
      },
      {
        "id": "1102d3cb5990433992fb18db4886a187",
        "title": "29 Aparato Genital Masculino Sabiston",
        "source": "national",
        "module": "29 Aparato Genital Masculino",
        "filename": "29_Aparato_Genital_Masculino_Sabiston.pdf",
        "pages": 23
      },
      {
        "id": "49bac64c1f9c41edaaed0426a00b5c24",
        "title": "29 Aparato Genital Masculino Schwartz",
        "source": "national",
        "module": "29 Aparato Genital Masculino",
        "filename": "29_Aparato_Genital_Masculino_Schwartz.pdf",
        "pages": 20
      },
      {
        "id": "133733181f0c496d80543db984efa21b",
        "title": "29 Aparato Genital Masculino Skandalakis",
        "source": "national",
        "module": "29 Aparato Genital Masculino",
        "filename": "29_Aparato_Genital_Masculino_Skandalakis.pdf",
        "pages": 71
      },
      {
        "id": "294189d7b31a4e43a50879aeb4fd6aa5",
        "title": "29 Aparato Genital Masculino Tratado AMCG",
        "source": "national",
        "module": "29 Aparato Genital Masculino",
        "filename": "29_Aparato_Genital_Masculino_Tratado_AMCG.pdf",
        "pages": 40
      },
      {
        "id": "8f5f5f927845437bac87d71008b74485",
        "title": "30 Enfermedades Vasculares Sabiston",
        "source": "national",
        "module": "30 Enfermedades Vasculares",
        "filename": "30_Enfermedades_Vasculares_Sabiston.pdf",
        "pages": 99
      },
      {
        "id": "c46bf83a0c0240f190a3374533a42e27",
        "title": "30 Enfermedades Vasculares Schwartz",
        "source": "national",
        "module": "30 Enfermedades Vasculares",
        "filename": "30_Enfermedades_Vasculares_Schwartz.pdf",
        "pages": 156
      },
      {
        "id": "4d6e37d1a23040d9a9692bcb901db4e3",
        "title": "30 Enfermedades Vasculares Skandalakis",
        "source": "national",
        "module": "30 Enfermedades Vasculares",
        "filename": "30_Enfermedades_Vasculares_Skandalakis.pdf",
        "pages": 16
      },
      {
        "id": "6fa6d8bd24ae4f349c682919665de1d2",
        "title": "30 Enfermedades Vasculares Tratado AMCG",
        "source": "national",
        "module": "30 Enfermedades Vasculares",
        "filename": "30_Enfermedades_Vasculares_Tratado_AMCG.pdf",
        "pages": 64
      },
      {
        "id": "a2a7d7bb74b44db5919c41a05aece034",
        "title": "31 Torax Sabiston",
        "source": "national",
        "module": "31 Torax",
        "filename": "31_Torax_Sabiston.pdf",
        "pages": 57
      },
      {
        "id": "ee678694834e4025a247286829b883fc",
        "title": "31 Torax Schwartz",
        "source": "national",
        "module": "31 Torax",
        "filename": "31_Torax_Schwartz.pdf",
        "pages": 90
      },
      {
        "id": "a8534b4996924e799b16eaae8e4d70a4",
        "title": "31 Torax Skandalakis",
        "source": "national",
        "module": "31 Torax",
        "filename": "31_Torax_Skandalakis.pdf",
        "pages": 102
      },
      {
        "id": "4f8061db49324b0f894693bcfd31583a",
        "title": "31 Torax Tratado AMCG",
        "source": "national",
        "module": "31 Torax",
        "filename": "31_Torax_Tratado_AMCG.pdf",
        "pages": 54
      },
      {
        "id": "26f035f181a1471cbb26ffe3f2855588",
        "title": "32 Sistema Musculo Esqueletico y Trasplantes Sabiston",
        "source": "national",
        "module": "32 Sistema Musculo Esqueletico y Trasplantes",
        "filename": "32_Sistema_Musculo_Esqueletico_y_Trasplantes_Sabiston.pdf",
        "pages": 83
      },
      {
        "id": "e4556ded97ee45e2a159582862ecc0a1",
        "title": "32 Sistema Musculo Esqueletico y Trasplantes Schwartz",
        "source": "national",
        "module": "32 Sistema Musculo Esqueletico y Trasplantes",
        "filename": "32_Sistema_Musculo_Esqueletico_y_Trasplantes_Schwartz.pdf",
        "pages": 32
      },
      {
        "id": "a554d9fad7b445cfb9fbda827c1d07fc",
        "title": "32 Sistema Musculo Esqueletico y Trasplantes Tratado AMCG",
        "source": "national",
        "module": "32 Sistema Musculo Esqueletico y Trasplantes",
        "filename": "32_Sistema_Musculo_Esqueletico_y_Trasplantes_Tratado_AMCG.pdf",
        "pages": 50
      },
      {
        "id": "ec7a4e625f184199a8dd451740bc59ec",
        "title": "Pancreas",
        "source": "gpc_mexico",
        "module": "Cirugía General",
        "filename": "1-s2.0-S1424390313005255-main.pdf",
        "pages": 15
      },
      {
        "id": "15f62235510747f28a99357006c5c302",
        "title": "Anatomia y Tecnica Quirurgicas Abby",
        "source": "tecnica_quirurgica",
        "module": "Tecnicas Quirurgicas y Anatomia",
        "filename": "Anatomia y Tecnica Quirurgicas Abby.pdf",
        "pages": 633
      },
      {
        "id": "24bba1e978e44005ac5c25e4b91d6c51",
        "title": "Apendicectomía laparoscópica: técnica paso a paso y complicaciones",
        "source": "tecnica_quirurgica",
        "module": "Tecnicas Quirurgicas y Anatomia",
        "filename": "Apendicectomia_Laparoscopica_Tecnica.md",
        "pages": 0
      },
      {
        "id": "5fe121f008e34a219d096373853d7f8a",
        "title": "Indice y Manuales de Tecnicas Quirurgicas y Anatomia",
        "source": "tecnica_quirurgica",
        "module": "Tecnicas Quirurgicas y Anatomia",
        "filename": "Indice y Manuales de Tecnicas Quirurgicas y Anatomia.pdf",
        "pages": 1
      },
      {
        "id": "4aa6c3ff88fe4056ac6f47ad0bee7849",
        "title": "Mayagoitia   Hernias de la Pared Abdominal (2014)",
        "source": "tecnica_quirurgica",
        "module": "Tecnicas Quirurgicas y Anatomia",
        "filename": "Mayagoitia - Hernias de la Pared Abdominal (2014).pdf",
        "pages": 722
      },
      {
        "id": "a6dbaca5204e4860b418fced3f1be36c",
        "title": "Skandalakis Cirugia",
        "source": "tecnica_quirurgica",
        "module": "Tecnicas Quirurgicas y Anatomia",
        "filename": "Skandalakis Cirugia.pdf",
        "pages": 1579
      },
      {
        "id": "08a2a10f28104995a8d82a599ab1e6b4",
        "title": "Surgical Anatomy and Technique   Skandalakis",
        "source": "tecnica_quirurgica",
        "module": "Tecnicas Quirurgicas y Anatomia",
        "filename": "Surgical Anatomy and Technique - Skandalakis.pdf",
        "pages": 773
      },
      {
        "id": "906662960cbd4fd782ab9bece6bb5b1f",
        "title": "Suturing Techniques",
        "source": "tecnica_quirurgica",
        "module": "Tecnicas Quirurgicas y Anatomia",
        "filename": "Suturing Techniques.pdf",
        "pages": 6
      },
      {
        "id": "efdf3e4cafa7425db0c3dd55734fa7d3",
        "title": "Zollinger's Atlas of Surgical Operations",
        "source": "tecnica_quirurgica",
        "module": "Tecnicas Quirurgicas y Anatomia",
        "filename": "Zollinger's Atlas of Surgical Operations.pdf",
        "pages": 514
      },
      {
        "id": "854eec8dc14641bba918383e859ea1b9",
        "title": "ESPEN Guidelines & Consensus Papers",
        "source": "national",
        "module": "guias",
        "filename": "ESPEN_Guidelines_&_Consensus_Papers.pdf",
        "pages": 19
      },
      {
        "id": "f8790c4845e84e279a6b7655054324c7",
        "title": "Guia ASGE Endoscopia en Coledocolitiasis 2019",
        "source": "national",
        "module": "guias",
        "filename": "Guia_ASGE_Endoscopia_en_Coledocolitiasis_2019.pdf",
        "pages": 94
      },
      {
        "id": "ed1e0bd48e0948f089787490c1d66301",
        "title": "Guia ESGE Manejo Endoscopico Litiasis Coledociana 2019",
        "source": "national",
        "module": "guias",
        "filename": "Guia_ESGE_Manejo_Endoscopico_Litiasis_Coledociana_2019.pdf",
        "pages": 121
      },
      {
        "id": "7163bc1ba4304ed4b8f01694523f8f4b",
        "title": "Guia IAP APA Pancreatitis Aguda 2013",
        "source": "national",
        "module": "guias",
        "filename": "Guia_IAP_APA_Pancreatitis_Aguda_2013.pdf",
        "pages": 40
      },
      {
        "id": "61ba2a462d4a4ffb948475bfec540307",
        "title": "Guia IAP APA Pancreatitis Aguda 2025",
        "source": "national",
        "module": "guias",
        "filename": "Guia_IAP_APA_Pancreatitis_Aguda_2025.pdf",
        "pages": 131
      },
      {
        "id": "d15bb7751ce44d34a2e2b42c85681dc0",
        "title": "Guia IDSA Infecciones Intraabdominales Complicadas 2024",
        "source": "national",
        "module": "guias",
        "filename": "Guia_IDSA_Infecciones_Intraabdominales_Complicadas_2024.pdf",
        "pages": 28
      },
      {
        "id": "987c0e679c9741e28eec7ccd55a4ddf5",
        "title": "Guia Tokyo TG18 Colecistitis Aguda Criterios y Severidad 2018",
        "source": "national",
        "module": "guias",
        "filename": "Guia_Tokyo_TG18_Colecistitis_Aguda_Criterios_y_Severidad_2018.pdf",
        "pages": 28
      },
      {
        "id": "7df6b88e0a814d449e8b3ebf89eb22ce",
        "title": "Guia WSES Abdomen Abierto No Trauma 2018",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Abdomen_Abierto_No_Trauma_2018.pdf",
        "pages": 17
      },
      {
        "id": "8bc72e7431294879966a72b654947e6c",
        "title": "Guia WSES Colecistitis Aguda Adulto Mayor 2019",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Colecistitis_Aguda_Adulto_Mayor_2019.pdf",
        "pages": 16
      },
      {
        "id": "885466f0a2424b0da8f814cdf83e730d",
        "title": "Guia WSES Colecistitis Calculosa Aguda 2018",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Colecistitis_Calculosa_Aguda_2018.pdf",
        "pages": 23
      },
      {
        "id": "217b076c0cf64b47b22745fa80fa55c2",
        "title": "Guia WSES Diverticulitis Aguda 2020",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Diverticulitis_Aguda_2020.pdf",
        "pages": 18
      },
      {
        "id": "d9465c0be4a84983a7dcba04b050b39e",
        "title": "Guia WSES Hernias Pared Abdominal Complicadas",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Hernias_Pared_Abdominal_Complicadas.pdf",
        "pages": 11
      },
      {
        "id": "e57682af257a42b99c27563d82b4987a",
        "title": "Guia WSES Infecciones Intraabdominales 2017",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Infecciones_Intraabdominales_2017.pdf",
        "pages": 34
      },
      {
        "id": "fcd26ef4461b4ebeb21783cd2c85f0f8",
        "title": "Guia WSES Isquemia Mesenterica Aguda 2018",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Isquemia_Mesenterica_Aguda_2018.pdf",
        "pages": 11
      },
      {
        "id": "4331e180536741d3a7a2655ad6f5174e",
        "title": "Guia WSES Jerusalem Apendicitis Aguda 2020",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Jerusalem_Apendicitis_Aguda_2020.pdf",
        "pages": 114
      },
      {
        "id": "9953522dc37248248aca81a696facbda",
        "title": "Guia WSES Lesiones Vasculares Cervicales 2026",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Lesiones_Vasculares_Cervicales_2026.pdf",
        "pages": 11
      },
      {
        "id": "1aa2126216b4442e95d7942e6d77e1fe",
        "title": "Guia WSES Obstruccion Intestinal Adherencias ASBO 2018",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Obstruccion_Intestinal_Adherencias_ASBO_2018.pdf",
        "pages": 13
      },
      {
        "id": "b4bb5e03d3b64fb6a3a99afc8ec32ee8",
        "title": "Guia WSES Pancreatitis Aguda Severa 2019",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Pancreatitis_Aguda_Severa_2019.pdf",
        "pages": 20
      },
      {
        "id": "0152415b69d84299b14529ef7b8d866a",
        "title": "Guia WSES Perforacion Iatrogenica Colonoscopia 2018",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Perforacion_Iatrogenica_Colonoscopia_2018.pdf",
        "pages": 20
      },
      {
        "id": "aa28d004560b447eb7cd8c7cec607acf",
        "title": "Guia WSES Trauma Adulto Mayor Fragil 2026",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Trauma_Adulto_Mayor_Fragil_2026.pdf",
        "pages": 61
      },
      {
        "id": "b94be92d87ff4549bb0ccf8c6d991d98",
        "title": "Guia WSES Trauma Hepatico 2020",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Trauma_Hepatico_2020.pdf",
        "pages": 15
      },
      {
        "id": "86e2026ad6f0434981befe71ee8d497e",
        "title": "Guia WSES Trauma Intestinal Cerrado y Penetrante 2022",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Trauma_Intestinal_Cerrado_y_Penetrante_2022.pdf",
        "pages": 15
      },
      {
        "id": "9af6f0ae116546619dbb8eadd8d2728b",
        "title": "Guia WSES Trauma Pelvico 2018",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Trauma_Pelvico_2018.pdf",
        "pages": 18
      },
      {
        "id": "7a3ac3a683974c44a4425f16c1761e64",
        "title": "Guia WSES Trauma Toracico 2026",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Trauma_Toracico_2026.pdf",
        "pages": 21
      },
      {
        "id": "6733584c7a3042f889de39b4cb7afc58",
        "title": "Guia WSES Ulcera Peptica Perforada 2020",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Ulcera_Peptica_Perforada_2020.pdf",
        "pages": 24
      },
      {
        "id": "98aef0d06de44c04acca319149c94b50",
        "title": "Guia WSES Urgencias Anorrectales 2022",
        "source": "national",
        "module": "guias",
        "filename": "Guia_WSES_Urgencias_Anorrectales_2022.pdf",
        "pages": 45
      },
      {
        "id": "3f0969b6e1df4283ae86156779b807a8",
        "title": "WSES Compendio Completo Guias Clinicas Booklet",
        "source": "national",
        "module": "guias",
        "filename": "WSES_Compendio_Completo_Guias_Clinicas_Booklet.pdf",
        "pages": 372
      }
    ],
    "articles": [
      {
        "title": "PANTER Trial (NEJM 2010) · Step-Up Approach vs Open Necrosectomy in Necrotizing Pancreatitis",
        "journal": "New England Journal of Medicine",
        "takeaway": "El enfoque escalonado (drenaje percutáneo/endoscópico seguido de necrosectomía retroperitoneal mínimamente invasiva VARD solo si es necesario) redujo complicaciones mayores o muerte del 69% al 40% frente a necrosectomía abierta."
      },
      {
        "title": "WATERFALL Trial (NEJM 2022) · Moderate vs Aggressive Fluid Resuscitation in Acute Pancreatitis",
        "journal": "New England Journal of Medicine",
        "takeaway": "La reanimación agresiva con Ringer Lactato (20 mL/kg bolo + 3 mL/kg/h) triplicó la sobrecarga hídrica (20.5% vs 6.3%) sin mejorar el desenlace frente a la reanimación moderada (1.5 mL/kg/h con bolo de 10 mL/kg solo si hay hipovolemia)."
      },
      {
        "title": "CRASH-2 Trial (Lancet 2010) · Tranexamic Acid in Bleeding Trauma Patients",
        "journal": "The Lancet",
        "takeaway": "Ácido tranexámico (1 g IV en 10 min + 1 g en 8 h) administrado en las primeras 3 horas del trauma reduce significativamente la mortalidad por sangrado; después de 3 horas es deletéreo."
      },
      {
        "title": "CODA Trial (NEJM 2020) & APPAC (JAMA) · Antibiotics vs Appendectomy in Acute Appendicitis",
        "journal": "NEJM / JAMA",
        "takeaway": "La presencia de apendicolito duplica el riesgo de complicaciones y falla del manejo antibiótico conservador (~41% de apendicectomía a 90 días), manteniendo a la apendicectomía laparoscópica como el estándar definitivo."
      },
      {
        "title": "LOLA / Ladies Trial (Lancet 2015) · Laparoscopic Lavage vs Sigmoidectomy in Purulent Perforated Diverticulitis (Hinchey III)",
        "journal": "The Lancet",
        "takeaway": "El lavado peritoneal laparoscópico aislado en diverticulitis Hinchey III se asoció a una tasa significativamente mayor de reintervención de urgencia y abscesos residuales frente a la resección sigmoidea."
      }
    ]
  },
  {
    "id": "escala-alvarado",
    "scaleId": "alvarado",
    "title": "Escala de Alvarado (MANTRELS) · Apendicitis Aguda",
    "subtitle": "8 criterios clínicos y de laboratorio (10 puntos máx.) para estratificar probabilidad de apendicitis aguda.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-air",
    "scaleId": "air",
    "title": "Escala AIR (Appendicitis Inflammatory Response)",
    "subtitle": "Recomendada por las Guías WSES Jerusalem sobre Alvarado por incluir PCR y graduación del rebote.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-tg18",
    "scaleId": "tg18",
    "title": "Tokyo Guidelines 2018 (TG18) · Severidad de Colecistitis Aguda",
    "subtitle": "Clasificación automática en Grado I (Leve), Grado II (Moderada) o Grado III (Severa con falla orgánica).",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-bisap",
    "scaleId": "bisap",
    "title": "Escala BISAP · Pronóstico en Pancreatitis Aguda (< 24 h)",
    "subtitle": "BUN > 25 mg/dL, alteración mental, SIRS, Edad > 60 años y derrame pleural.",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-ranson",
    "scaleId": "ranson",
    "title": "Criterios de Ranson · Pancreatitis Aguda (Ingreso y 48 h)",
    "subtitle": "Estratificación clásica de mortalidad en pancreatitis aguda al ingreso y a las 48 horas.",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-glasgow",
    "scaleId": "glasgow",
    "title": "Escala de Coma de Glasgow (GCS) · Trauma Craneoencefálico",
    "subtitle": "Respuesta ocular (4), verbal (5) y motora (6). GCS ≤ 8 exige vía aérea definitiva (intubación).",
    "topicId": "trauma",
    "tag": "Trauma",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-qsofa",
    "scaleId": "qsofa",
    "title": "qSOFA (Quick SOFA) · Tamizaje de Sepsis en Piso y Urgencias",
    "subtitle": "FR ≥ 22 rpm, TAS ≤ 100 mmHg y alteración del estado mental (Glasgow < 15).",
    "topicId": "trauma",
    "tag": "Trauma",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-child",
    "scaleId": "child",
    "title": "Clasificación de Child-Pugh · Reserva Hepática Quirúrgica",
    "subtitle": "Bilirrubina, albúmina, INR, ascitis y encefalopatía (Clases A, B y C) para riesgo operatorio en cirróticos.",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-meld",
    "scaleId": "meld",
    "title": "Puntaje MELD · Mortalidad Hepática a 90 Días",
    "subtitle": "Cálculo logarítmico con creatinina, bilirrubina total e INR para priorización y riesgo quirúrgico.",
    "topicId": "hepatobiliar",
    "tag": "Hepatobiliar",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-rockall",
    "scaleId": "rockall",
    "title": "Escala de Rockall Completa · Hemorragia Digestiva Alta",
    "subtitle": "Edad, estado hemodinámico, comorbilidades, diagnóstico endoscópico y estigmas de sangrado.",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-hinchey",
    "scaleId": "hinchey",
    "title": "Clasificador Interactivo de Hinchey Modificado · Diverticulitis",
    "subtitle": "Selección del hallazgo tomográfico/quirúrgico con conducta terapéutica WSES inmediata.",
    "topicId": "colon",
    "tag": "Colon",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-forrest",
    "scaleId": "forrest",
    "title": "Clasificador Endoscópico de Forrest · Úlcera Péptica Sangrante",
    "subtitle": "Riesgo de resangrado y necesidad de terapia endoscópica dual según estigma (Ia a III).",
    "topicId": "estomago",
    "tag": "Estómago/Duodeno",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-caprini",
    "scaleId": "caprini",
    "title": "Escala de Caprini · Riesgo de Tromboembolismo Venoso Quirúrgico",
    "subtitle": "Estratificación de riesgo trombótico y duración de profilaxis farmacológica (incluyendo 28 días en oncología).",
    "topicId": "neoplasias",
    "tag": "Neoplasias/Onco",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-parkland",
    "scaleId": "parkland",
    "title": "Calculadora de Reanimación en Quemaduras (Parkland & ABA) + LRINEC",
    "subtitle": "Cálculo automático de volumen total para 24 h, velocidad de infusión en las primeras 8 h y siguientes 16 h.",
    "topicId": "quemaduras",
    "tag": "Piel/Quemaduras",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  },
  {
    "id": "escala-lrinec",
    "scaleId": "parkland",
    "title": "Escala LRINEC & Reanimación de Tejidos Blandos / Quemaduras",
    "subtitle": "Evaluación rápida de infecciones necrosantes de tejidos blandos y reanimación hídrica.",
    "topicId": "piel",
    "tag": "Piel/Quemaduras",
    "badge": "Calculadora",
    "type": "escalas",
    "subtype": "calculator"
  }
];
