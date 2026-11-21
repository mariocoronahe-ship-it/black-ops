// Temario PUEM · Primer año (R1) · HGR 72 IMSS · Cronograma 2026
// Estructura tomada de atlas/temario-cirugia.pdf. Resúmenes esenciales (alto rendimiento) por subtema.
export const TEMARIO_R1 = [
  {
    id: 'r1-profesionalismo',
    year: 'R1',
    sistema: 'Fundamentos y perioperatorio',
    title: 'Profesionalismo médico',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Profesionalismo, ética y aspectos médico-legales',
        ponente: 'Dr. Edmundo Rivero Sánchez', fecha: '2026-03-06',
        puntos: [
          'Atributos del profesionalismo: altruismo, honor, integridad, humanismo y compasión, responsabilidad, excelencia, compromiso con el conocimiento y liderazgo.',
          'Principios bioéticos: autonomía, beneficencia, no maleficencia y justicia. El consentimiento informado es un proceso (no sólo una firma): diagnóstico, procedimiento, riesgos, alternativas y pronóstico, en lenguaje comprensible.',
          'NOM-004-SSA3-2012 del expediente clínico: notas legibles, con fecha, hora, nombre completo y firma; el expediente es propiedad de la institución y se conserva mínimo 5 años.',
          'Responsabilidad médica por negligencia, impericia o imprudencia. La mejor defensa es una nota completa, contemporánea y veraz.',
          'Medicina basada en evidencia: pregunta PICO, jerarquía de evidencia (metaanálisis de ECA > ECA > cohortes > casos y controles > series/opinión) y aplicación individualizada.',
        ],
      },
    ],
  },
  {
    id: 'r1-tecnicas',
    year: 'R1',
    sistema: 'Fundamentos y perioperatorio',
    title: 'Técnicas quirúrgicas y cirugía laparoscópica',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Bases técnicas, tiempos fundamentales, asepsia y antisepsia',
        fecha: '2026-03-13',
        puntos: [
          'Tiempos fundamentales: incisión (diéresis), hemostasia, exposición/disección y síntesis.',
          'Asepsia = prevenir la contaminación; antisepsia = destruir microorganismos en tejidos vivos. Clorhexidina-alcohol es superior a yodopovidona para preparar piel (menos ISQ).',
          'Lavado quirúrgico de manos: 3–5 min con antiséptico o fricción con solución alcohólica. Rasurar sólo si estorba, con máquina y justo antes de la cirugía.',
        ],
      },
      {
        t: 'Material de sutura, engrapadoras y drenajes · Taller de sutura',
        fecha: '2026-03-20',
        puntos: [
          'Absorbibles: catgut (proteólisis), poliglactina 910 (Vicryl, ~60–90 días), poliglecaprona (Monocryl, rápida), polidioxanona (PDS, 180–210 días, ideal para cierre de aponeurosis). No absorbibles: polipropileno (Prolene), nylon, seda.',
          'Monofilamento = menos infección y paso suave; multifilamento = mejor manejo y nudo, pero más capilaridad.',
          'Cierre de línea media: técnica de puntos pequeños (small bites 5 × 5 mm) con relación sutura/herida ≥ 4:1 reduce hernia incisional.',
          'Drenajes: pasivos (Penrose) o activos cerrados (Jackson-Pratt, Blake, Hemovac). Sacar por contrabertura y retirar cuando el gasto es bajo y no útil.',
        ],
      },
      {
        t: 'Cirugía laparoscópica: principios, equipo y neumoperitoneo',
        ponente: 'Claudia Samantha Ordóñez Carrillo', fecha: '2026-04-24',
        puntos: [
          'CO₂ por ser incombustible, barato y muy soluble (menor riesgo de embolia). Presión habitual 12–15 mmHg.',
          'Efectos del neumoperitoneo: ↑ PVC y resistencias, ↓ retorno venoso y gasto cardiaco, ↓ distensibilidad pulmonar, hipercapnia/acidosis, ↓ flujo renal y oliguria transitoria.',
          'Acceso abierto (Hasson) vs aguja de Veress (confirmar con prueba de la gota y presión inicial < 8–10 mmHg). Triangulación de puertos.',
          'Embolia de CO₂: hipotensión súbita, ↓ EtCO₂ y soplo en rueda de molino → suspender insuflación, decúbito lateral izquierdo + Trendelenburg, O₂ al 100%.',
        ],
      },
    ],
  },
  {
    id: 'r1-rbt',
    year: 'R1',
    sistema: 'Fundamentos y perioperatorio',
    title: 'Respuesta biológica al trauma',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Estímulos, mediadores y cambios hemodinámicos, metabólicos y bioquímicos',
        ponente: 'Sandra Mariana Bras Santos', fecha: '2026-03-20',
        puntos: [
          'Fases de Cuthbertson: ebb (hipometabólica, primeras 24–48 h) y flow (catabólica → anabólica). Moore describe 4 fases hasta la recuperación ponderal.',
          'Eje neuroendocrino: ↑ cortisol, catecolaminas, glucagón, ADH, aldosterona y GH; resistencia a la insulina → hiperglucemia de estrés.',
          'Mediadores: IL-1, IL-6 (mejor marcador de magnitud de la lesión), TNF-α; proteínas de fase aguda (PCR ↑, albúmina ↓).',
          'Catabolismo proteico con balance nitrogenado negativo; retención de agua y sodio con pérdida de potasio.',
        ],
      },
      {
        t: 'Fase de convalecencia',
        puntos: [
          'Retorno de diuresis, apetito y anabolismo. ERAS atenúa la respuesta: ayuno corto, carga de carbohidratos, analgesia multimodal, movilización y vía oral tempranas.',
        ],
      },
    ],
  },
  {
    id: 'r1-perioperatorio',
    year: 'R1',
    sistema: 'Fundamentos y perioperatorio',
    title: 'Cuidados perioperatorios',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Evaluación preoperatoria',
        ponente: 'Alan Salvador Herreras García · Yanireth Israde Osnaya', fecha: '2026-04-03',
        puntos: [
          'ASA I–VI; índice de Lee (RCRI) para riesgo cardiaco: cirugía de alto riesgo, cardiopatía isquémica, ICC, EVC, DM con insulina y creatinina > 2 mg/dL.',
          'Capacidad funcional ≥ 4 METs (subir 2 pisos) permite operar sin más estudios en la mayoría.',
          'Ayuno: sólidos 6–8 h, líquidos claros 2 h. Suspender clopidogrel 5 días y warfarina 5 días (puente con HBPM si alto riesgo trombótico).',
          'Tromboprofilaxis según Caprini; profilaxis antibiótica dentro de los 60 min previos a la incisión.',
        ],
      },
      {
        t: 'Oxigenoterapia y ventilación mecánica',
        fecha: '2026-04-10',
        puntos: [
          'Ventilación protectora: Vt 6–8 mL/kg de peso ideal, presión meseta < 30 cmH₂O, PEEP individualizada.',
          'Insuficiencia respiratoria tipo I (hipoxémica, PaO₂ < 60) vs tipo II (hipercápnica, PaCO₂ > 50). SDRA (Berlín): PaO₂/FiO₂ ≤ 300 con PEEP ≥ 5.',
        ],
      },
      {
        t: 'Cuidados postoperatorios y complicaciones',
        ponente: 'Angel Abraham Martínez Valerio', fecha: '2026-04-17',
        puntos: [
          'Fiebre postoperatoria (5 W): Wind (atelectasia/neumonía, días 1–2), Water (IVU, días 3–5), Wound (ISQ, días 5–7), Walking (TVP/TEP, > día 5), Wonder drugs (fármacos).',
          'Inmediatas (< 24 h): sangrado, hipotermia, náusea. Mediatas: ISQ, íleo, fuga de anastomosis (días 5–7). Tardías: hernia incisional, adherencias, estenosis.',
          'Clasificación Clavien-Dindo I–V para graduar complicaciones (III = requiere intervención; IV = UCI).',
        ],
      },
    ],
  },
  {
    id: 'r1-liquidos',
    year: 'R1',
    sistema: 'Fundamentos y perioperatorio',
    title: 'Líquidos y electrolitos',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Composición corporal, requerimientos y soluciones',
        ponente: 'Luis Ángel Rivera Gutiérrez', fecha: '2026-05-08',
        puntos: [
          'Agua corporal total ~60% del peso (hombre): 2/3 intracelular, 1/3 extracelular (3/4 intersticial, 1/4 intravascular).',
          'Requerimiento de mantenimiento 4-2-1 (Holliday-Segar) o 25–30 mL/kg/día. Diuresis objetivo 0.5–1 mL/kg/h.',
          'Cristaloides balanceados (Hartmann) preferibles a SS 0.9% en volúmenes grandes (menos acidosis hiperclorémica).',
        ],
      },
      {
        t: 'Trastornos del sodio',
        ponente: 'Brenda Berenice Sánchez González', fecha: '2026-05-15',
        puntos: [
          'Hiponatremia: clasificar por osmolaridad y volumen. Corrección máxima 8–10 mEq/L en 24 h (riesgo de mielinólisis pontina). Sintomática grave: bolo de SS 3%.',
          'Hipernatremia: déficit de agua libre = ACT × (Na/140 − 1); corregir ≤ 10 mEq/L/día (riesgo de edema cerebral).',
        ],
      },
      {
        t: 'Trastornos del potasio y magnesio',
        ponente: 'Jessica Pamela Velasco García', fecha: '2026-05-22',
        puntos: [
          'Hiperkalemia con cambios en ECG (T picudas, QRS ancho): gluconato de calcio para estabilizar membrana, luego insulina + glucosa, β2 agonista y eliminar (diuréticos, resinas, diálisis).',
          'Hipokalemia: reponer máximo ~10–20 mEq/h por vía periférica; corregir antes el magnesio si está bajo (si no, la hipokalemia es refractaria).',
        ],
      },
      {
        t: 'Trastornos del calcio y fósforo',
        ponente: 'Sandra Mariana Bras Santos', fecha: '2026-06-05',
        puntos: [
          'Calcio corregido = Ca + 0.8 × (4 − albúmina). Hipocalcemia: Chvostek, Trousseau, QT largo → gluconato de calcio IV.',
          'Síndrome de realimentación: hipofosfatemia, hipokalemia e hipomagnesemia al iniciar nutrición en desnutridos → iniciar lento y reponer.',
        ],
      },
    ],
  },
  {
    id: 'r1-cicatrizacion',
    year: 'R1',
    sistema: 'Piel, quemaduras y reconstructiva',
    title: 'Cicatrización',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Proceso normal, factores que la alteran y cicatrización patológica',
        ponente: 'Alan Salvador Herreras García', fecha: '2026-06-12',
        puntos: [
          'Fases: hemostasia → inflamatoria (neutrófilos 24–48 h, macrófagos 48–96 h; el macrófago es la célula clave) → proliferativa (fibroblastos, colágeno III, angiogénesis) → remodelación (colágeno III → I, hasta 1 año).',
          'La herida alcanza ~80% de la fuerza tensil original como máximo.',
          'Factores adversos: infección, isquemia, tabaquismo, desnutrición (vit. C, zinc, proteínas), esteroides (la vitamina A revierte su efecto), diabetes, radiación.',
          'Hipertrófica: dentro de los bordes y puede regresar. Queloide: rebasa los bordes, no regresa, recurre al resecar sola; tratar con esteroide intralesional ± presoterapia/radioterapia.',
        ],
      },
      {
        t: 'Tratamiento de heridas: apósitos y presión negativa',
        ponente: 'Yanireth Israde Osnaya', fecha: '2026-06-19',
        puntos: [
          'Elegir apósito según exudado: hidrogel (heridas secas), alginato/espumas (exudado moderado-alto), plata (carga bacteriana).',
          'Terapia de presión negativa (−125 mmHg): ↓ edema, estimula granulación y contrae la herida. Contraindicada sobre tumor, vasos expuestos o fístula no explorada.',
        ],
      },
    ],
  },
  {
    id: 'r1-infeccion',
    year: 'R1',
    sistema: 'Fundamentos y perioperatorio',
    title: 'Infección y cirugía',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Etiología, fisiopatología, clasificación y prevención de la infección quirúrgica',
        ponente: 'Angel Abraham Martínez Valerio', fecha: '2026-07-03',
        puntos: [
          'Heridas: limpia (I, ~1–2%), limpia-contaminada (II, ~5–10%), contaminada (III), sucia (IV, > 25–40%).',
          'ISQ (CDC): superficial, profunda y de órgano/espacio; dentro de 30 días (90 si hay implante).',
          'Profilaxis: cefazolina 2 g IV (3 g si > 120 kg) dentro de 60 min antes de la incisión; redosificar a las 4 h o si sangrado > 1500 mL.',
          'Agentes más frecuentes en ISQ: S. aureus; en cirugía colorrectal: E. coli y anaerobios (B. fragilis).',
        ],
      },
      {
        t: 'Antimicrobianos: farmacología, indicaciones y riesgos',
        ponente: 'Claudia Samantha Ordóñez Carrillo', fecha: '2026-07-10',
        puntos: [
          'β-lactámicos inhiben pared celular (tiempo-dependientes). Carbapenémicos: reservar para BLEE.',
          'Aminoglucósidos (concentración-dependientes): nefro y ototoxicidad. Quinolonas: tendinopatía, QT largo.',
          'Intraabdominal complicada: cubrir gramnegativos + anaerobios (p. ej., ceftriaxona + metronidazol); duración ~4 días tras control de la fuente (STOP-IT).',
        ],
      },
    ],
  },
  {
    id: 'r1-choque',
    year: 'R1',
    sistema: 'Fundamentos y perioperatorio',
    title: 'Estado de choque',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Choque séptico',
        ponente: 'Luis Ángel Rivera Gutiérrez', fecha: '2026-07-17',
        puntos: [
          'Sepsis-3: infección + disfunción orgánica (↑ SOFA ≥ 2). Choque séptico: vasopresor para PAM ≥ 65 y lactato > 2 pese a volumen.',
          'Primera hora: lactato, hemocultivos, antibiótico de amplio espectro, 30 mL/kg de cristaloide si hipotensión o lactato ≥ 4, norepinefrina como vasopresor de primera elección.',
          'Control de la fuente lo antes posible (drenaje, desbridamiento o cirugía).',
        ],
      },
      {
        t: 'Choque hipovolémico',
        ponente: 'Brenda Berenice Sánchez González', fecha: '2026-07-24',
        puntos: [
          'Clases ATLS I–IV por pérdida: < 15%, 15–30%, 30–40%, > 40%. La hipotensión aparece en clase III.',
          'Reanimación hemostática: hipotensión permisiva (PAS ~80–90) sin TCE, transfusión 1:1:1 y ácido tranexámico en las primeras 3 h.',
          'Tríada letal: hipotermia, acidosis y coagulopatía.',
        ],
      },
      {
        t: 'Choque cardiogénico y neurogénico',
        ponente: 'Jessica Pamela Velasco García', fecha: '2026-08-07',
        puntos: [
          'Cardiogénico: ↓ gasto cardiaco con ↑ presiones de llenado (PCP > 18), extremidades frías → inotrópicos (dobutamina) y tratar la causa.',
          'Neurogénico (lesión medular alta): hipotensión con bradicardia y piel caliente → volumen, vasopresor (norepinefrina) y atropina si bradicardia.',
        ],
      },
    ],
  },
  {
    id: 'r1-nutricion',
    year: 'R1',
    sistema: 'Fundamentos y perioperatorio',
    title: 'Nutrición en cirugía',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Desnutrición, valoración e indicaciones de nutrición artificial',
        ponente: 'Sandra Mariana Bras Santos', fecha: '2026-09-04',
        puntos: [
          'Herramientas: NRS-2002 (≥ 3 = riesgo), SGA, criterios GLIM. Albúmina < 3 g/dL y pérdida de peso > 10% en 6 meses = alto riesgo.',
          'Requerimientos: 25–30 kcal/kg/día y 1.2–2 g/kg/día de proteína en el paciente quirúrgico.',
          'Iniciar soporte si no habrá ingesta adecuada en 5–7 días o en desnutrición grave antes de cirugía mayor (7–14 días de soporte preoperatorio).',
        ],
      },
      {
        t: 'Nutrición enteral, fórmulas y accesos (gastrostomía, yeyunostomía)',
        ponente: 'Alan Salvador Herreras García', fecha: '2026-09-11',
        puntos: [
          '"Si el intestino funciona, úsalo": la enteral mantiene el trofismo y la barrera intestinal, con menos infecciones que la parenteral.',
          'Fórmulas poliméricas (estándar), oligoméricas/elementales (absorción comprometida) y especiales.',
          'Sonda nasoenteral si < 4–6 semanas; gastrostomía (endoscópica o quirúrgica: Stamm, Witzel) o yeyunostomía si es más prolongada.',
        ],
      },
      {
        t: 'Nutrición parenteral, catéteres y complicaciones',
        ponente: 'Yanireth Israde Osnaya', fecha: '2026-09-18',
        puntos: [
          'Indicada cuando la vía enteral está contraindicada o es insuficiente (obstrucción, fístula de alto gasto, intestino corto).',
          'Complicaciones: infección de catéter, hiperglucemia, colestasis/esteatosis, síndrome de realimentación.',
          'Taller de CVC: técnica de Seldinger, preferir vena subclavia/yugular con guía ecográfica; confirmar posición con Rx.',
        ],
      },
    ],
  },
  {
    id: 'r1-sangre',
    year: 'R1',
    sistema: 'Fundamentos y perioperatorio',
    title: 'Sangre: coagulación y transfusión',
    coordinador: 'Dra. Evelyn Contreras Jurado',
    subtemas: [
      {
        t: 'Fisiopatología de la coagulación y la fibrinólisis',
        ponente: 'Angel Abraham Martínez Valerio', fecha: '2026-10-02',
        puntos: [
          'Modelo celular: iniciación (factor tisular + VIIa), amplificación y propagación sobre plaquetas → trombina → fibrina.',
          'TP/INR valora vía extrínseca (VII); TTPa la intrínseca (VIII, IX, XI, XII). Tromboelastografía guía la transfusión dirigida.',
        ],
      },
      {
        t: 'Transfusión: indicaciones y contraindicaciones',
        ponente: 'Claudia Samantha Ordóñez Carrillo', fecha: '2026-10-09',
        puntos: [
          'Concentrado eritrocitario: umbral restrictivo Hb < 7 g/dL (< 8 en cardiopatía). Cada unidad sube ~1 g/dL de Hb.',
          'Plaquetas: < 10 mil profilaxis; < 50 mil para cirugía; < 100 mil en neurocirugía. Plasma fresco congelado: 10–15 mL/kg para coagulopatía. Crioprecipitado si fibrinógeno < 150–200 mg/dL.',
          'Reacciones: hemolítica aguda (incompatibilidad ABO, la más grave), TRALI, TACO, febril no hemolítica (la más frecuente).',
        ],
      },
      {
        t: 'Anticoagulantes: fundamentos, indicaciones y peligros',
        ponente: 'Luis Ángel Rivera Gutiérrez', fecha: '2026-10-16',
        puntos: [
          'Heparina no fraccionada → antídoto protamina. Warfarina → vitamina K + complejo protrombínico. Dabigatrán → idarucizumab. Anti-Xa → andexanet alfa.',
          'Trombocitopenia inducida por heparina: caída > 50% de plaquetas a los 5–10 días → suspender toda heparina y usar alternativo (fondaparinux, argatrobán).',
        ],
      },
    ],
  },
  {
    id: 'r1-trauma',
    year: 'R1',
    sistema: 'Trauma',
    title: 'Trauma',
    coordinador: 'Dr. Eduardo Alonso Guerrero Robles',
    linkTo: 'trauma',
    subtemas: [
      {
        t: 'Mecanismos de lesión, triage, traslado y atención prehospitalaria',
        ponente: 'Brenda Berenice Sánchez González', fecha: '2026-03-13',
        puntos: [
          'Triage START en víctimas múltiples: rojo, amarillo, verde, negro. En catástrofes se prioriza al mayor número de sobrevivientes.',
          'Prehospitalario: vía aérea con control cervical, control de hemorragia externa (torniquete), traslado al centro adecuado ("hora dorada").',
        ],
      },
      {
        t: 'Atención hospitalaria inicial (ATLS)',
        ponente: 'Jessica Pamela Velasco García', fecha: '2026-03-27',
        puntos: [
          'Revisión primaria XABCDE: hemorragia exanguinante, vía aérea con restricción cervical, ventilación, circulación, déficit neurológico, exposición/ambiente.',
          'FAST/eFAST en inestables. Paciente inestable con FAST positivo → laparotomía.',
        ],
      },
      {
        t: 'Trauma craneoencefálico y raquimedular',
        ponente: 'Sandra Mariana Bras Santos · Alan Salvador Herreras García', fecha: '2026-06-12',
        sistema: 'Trauma',
        puntos: [
          'Glasgow: leve 13–15, moderado 9–12, grave ≤ 8 (intubar). Evitar hipotensión e hipoxia (lesión secundaria).',
          'Hematoma epidural: arteria meníngea media, intervalo lúcido, lente biconvexa. Subdural: venas puente, semiluna.',
          'Raquimedular: inmovilización, choque neurogénico vs medular, NEXUS/Canadian C-spine para decidir imagen.',
        ],
      },
      {
        t: 'Trauma de cuello',
        ponente: 'Yanireth Israde Osnaya', fecha: '2026-04-10',
        puntos: [
          'Zonas: I (clavícula–cricoides), II (cricoides–ángulo mandibular), III (ángulo–base de cráneo).',
          'Signos duros (hemorragia activa, hematoma expansivo, soplo/frémito, aire por la herida, déficit) → cirugía. Estable sin signos duros → angio-TC.',
        ],
      },
      {
        t: 'Trauma de tórax · taller de pericardiocentesis, toracocentesis y toracostomía',
        ponente: 'Angel Abraham Martínez Valerio · Claudia Samantha Ordóñez Carrillo', fecha: '2026-04-24',
        sistema: 'Tórax',
        puntos: [
          'Neumotórax a tensión: diagnóstico clínico → descompresión (5º EIC línea axilar media en adultos) y sonda pleural.',
          'Hemotórax masivo: > 1500 mL inicial o > 200 mL/h por 2–4 h → toracotomía.',
          'Tamponade: tríada de Beck (hipotensión, ingurgitación yugular, ruidos velados) → ventana pericárdica/toracotomía.',
        ],
      },
      {
        t: 'Trauma abdominal',
        ponente: 'Luis Ángel Rivera Gutiérrez', fecha: '2026-05-22',
        puntos: [
          'Contuso: bazo e hígado los más lesionados. Penetrante por arma de fuego: intestino delgado; por arma blanca: hígado.',
          'Cirugía de control de daños: control de hemorragia y contaminación, empaquetamiento, abdomen abierto y reanimación en UCI, reintervención en 24–48 h.',
        ],
      },
      {
        t: 'Trauma esofágico, gástrico e intestino delgado',
        ponente: 'Brenda Berenice Sánchez González · Jessica Pamela Velasco García', fecha: '2026-06-05',
        puntos: [
          'Esófago: diagnóstico con esofagograma hidrosoluble y endoscopia; reparación primaria en dos planos con drenaje si < 24 h.',
          'Delgado: reparación primaria si < 50% de la circunferencia; resección y anastomosis si > 50% o lesiones múltiples cercanas.',
        ],
      },
      {
        t: 'Trauma de duodeno y páncreas-biliar',
        ponente: 'Sandra Mariana Bras Santos', fecha: '2026-08-07',
        sistema: 'Páncreas',
        puntos: [
          'Duodeno retroperitoneal: sospechar con aire retroperitoneal o borramiento del psoas; Kocher para explorar.',
          'Páncreas: lo que define el manejo es la integridad del conducto de Wirsung. Lesión distal con conducto roto → pancreatectomía distal.',
        ],
      },
      {
        t: 'Trauma de colon',
        ponente: 'Alan Salvador Herreras García', fecha: '2026-08-21',
        sistema: 'Colon y apéndice',
        puntos: [
          'Reparación primaria o resección con anastomosis en la mayoría; colostomía si choque, transfusión masiva, gran contaminación o control de daños.',
        ],
      },
      {
        t: 'Trauma hepático y esplénico',
        ponente: 'Yanireth Israde Osnaya', fecha: '2026-09-04',
        puntos: [
          'Escala AAST I–V. Paciente estable → manejo no operatorio ± angioembolización, aun en lesiones de alto grado.',
          'Hígado inestable: maniobra de Pringle, empaquetamiento perihepático. Esplenectomía en inestables → vacunar (neumococo, meningococo, Haemophilus).',
        ],
      },
      {
        t: 'Trauma vascular',
        ponente: 'Angel Abraham Martínez Valerio', fecha: '2026-09-18',
        sistema: 'Vascular',
        puntos: [
          'Signos duros (pulso ausente, hemorragia pulsátil, hematoma expansivo, soplo/frémito) → cirugía. Índice tobillo-brazo < 0.9 → estudio de imagen.',
          'Shunt temporal en control de daños; fasciotomía si isquemia > 4–6 h (síndrome compartimental).',
        ],
      },
    ],
  },
];
