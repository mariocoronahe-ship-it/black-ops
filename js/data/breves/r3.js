// Resumen breve (vista «Ejecutivo») de los módulos R3: { 'id-del-modulo': 'markdown corto' }.
// Si un módulo aparece aquí, reemplaza al resumen original. El desarrollo completo va en las hojas (subtemas/).
export const BREVES_R3 = {
  'ap-r3-intestino': `Las emergencias de intestino delgado y colon —obstrucción mecánica, vólvulo, isquemia mesentérica, colitis isquémica y hemorragia digestiva baja (HDB)— exigen distinguir en horas cuándo basta el manejo conservador o endoscópico y cuándo retrasar la cirugía provoca necrosis transmural, perforación o exanguinación.

### Criterios y números de corte
- **Obstrucción intestinal:** en delgado predominan **adherencias** (~65-75%) y hernias; en colon, **adenocarcinoma** (~60%), vólvulo y estenosis diverticular. Datos tomográficos de **isquemia/estrangulación**: ausencia de realce mural, edema mesentérico, **asa cerrada**, neumatosis intestinal y gas venoso portal.
- **Isquemia intestinal:** en **isquemia mesentérica aguda** (embolia AMS > trombosis > NOMI > trombosis venosa) destaca el **dolor desproporcionado a la exploración**; en **colitis isquémica** predominan zonas limítrofes (**ángulo esplénico de Griffith** y **unión rectosigmoidea de Sudeck**) con dolor izquierdo y hematoquecia leve.
- **HDB (distal a Treitz):** causas principales: **enfermedad diverticular** (~30-40%, sangrado arterial indoloro), angiodisplasias, colitis isquémica, neoplasias y patología anorrectal. Usar **escala de Oakland (≤8 puntos = bajo riesgo ambulatorio)** y umbral transfusional restrictivo **Hb <7 g/dL**.
- **Vólvulo:** sigmoideo (signo del grano de café hacia CSD) vs. cecal (asa distendida hacia CSI; casi siempre quirúrgico).

### Conducta de primera línea
- **Obstrucción adhesiva no complicada:** SNG, reposición hidroelectrolítica y **contraste hidrosoluble oral (Gastrografin)** (si llega al colon en 24 h predice éxito conservador; si falla a las **48-72 h**, operar). Ante asa cerrada, hernia estrangulada o peritonitis: **cirugía urgente**.
- **Vólvulo:** en sigmoideo sin peritonitis ni necrosis, **desvolvulación endoscópica** con tubo rectal y sigmoidectomía electiva en el mismo ingreso; si hay isquemia o vólvulo cecal, resección directa.
- **Isquemia mesentérica y colitis:** angio-TC urgente + heparina IV + **revascularización precoz** (endovascular o abierta) + resección de lo necrótico + ***second look* a las 24-48 h**. Colitis no gangrenosa: reposo intestinal, líquidos y antibióticos selectivos; gangrenosa o con peritonitis: colectomía con estoma.
- **HDB:** 1) estabilizar y descartar HDA (10-15% de hematoquecias masivas son altas); 2) inestable o sangrado activo → **angio-TC inmediata** (detecta ≥0.3-0.5 mL/min) + **angioembolización superselectiva**; 3) estable → **colonoscopia preparada**; 4) cirugía (resección dirigida; colectomía subtotal solo sin localización e inestabilidad refractaria).

### Banderas rojas y errores a evitar
- **Operar una HDB masiva sin localizar el sangrado:** resecar "a ciegas" eleva resangrado (>30%) y mortalidad; agotar angio-TC/embolización o localización precisa.
- **Descartar isquemia mesentérica por lactato normal:** se eleva tarde, con necrosis ya establecida; manda sospecha clínica + angio-TC.
- **Destorsión endoscópica en vólvulo con fiebre, peritonismo o mucosa violácea:** arriesga perforación inmediata; resecar quirúrgicamente.`,

  'ap-r3-higado': `La cirugía hepática exige dominar la anatomía funcional de Couinaud (8 segmentos independientes), la estratificación de reserva hepática y la selección multidisciplinaria entre manejo médico, intervencionismo, resección o trasplante. Abarca síndrome ictérico, abscesos y quistes, lesiones benignas, carcinoma hepatocelular (CHC), metástasis colorrectales e hipertensión portal.

### Criterios y números de corte
- **Reserva hepática y remanente hepático futuro (FLR):** evaluar con **Child-Pugh** (resección segura casi solo en Child A sin hipertensión portal significativa) y **MELD** (priorización de trasplante). **FLR mínimo**: **≥20-25%** en hígado sano, **≥30%** tras quimioterapia/esteatosis y **≥40%** en cirrosis compensada; si es insuficiente, considerar embolización venosa portal o ALPPS en centro HPB.
- **Abscesos y quistes:** absceso **amebiano** (frecuente en México, único en lóbulo derecho, serología *E. histolytica* positiva) vs. **piógeno** (origen biliar/portal, polimicrobiano). Quiste **hidatídico** (*Echinococcus*, calcificación parietal, vesículas hijas) tiene riesgo de anafilaxia.
- **Tumores benignos:** **hemangioma** (el más frecuente; realce nodular periférico centrípeto; casi nunca se opera), **hiperplasia nodular focal** (cicatriz central; manejo conservador) y **adenoma hepatocelular** (asociado a anticonceptivos/esteroides; **resecar si >5 cm, sintomático o en varones** por riesgo de rotura y malignización).
- **CHC y criterios de Milán:** en cirrosis, lesión ≥1 cm con hiperrealce arterial y lavado (*washout*) venoso en TC/RM multifásica (LI-RADS 5) diagnostica CHC sin biopsia. **Milán** (trasplante): 1 lesión **≤5 cm** o hasta 3 lesiones **≤3 cm** sin invasión vascular ni metástasis.

### Conducta de primera línea
- **Absceso hepático:** amebiano → **metronidazol** 7-10 días + agente luminal (drenaje solo si riesgo de rotura en lóbulo izquierdo, >5-10 cm refractario o falta de respuesta en 72 h); piógeno → antibiótico IV amplio + **drenaje percutáneo guiado** (>3-5 cm).
- **Quiste hidatídico:** **albendazol** perioperatorio + cirugía (periquistectomía/resección) o técnica PAIR según clasificación OMS; proteger el campo con gasas hipertónicas y **jamás biopsiar a ciegas**.
- **CHC (algoritmo BCLC) y metástasis colorrectales:** BCLC 0-A → resección (sin hipertensión portal), ablación (≤3 cm) o **trasplante** (si cirrosis dentro de Milán); BCLC B → quimioembolización (TACE); BCLC C → inmunoterapia/terapia sistémica. Las **metástasis hepáticas colorrectales** resecables con FLR adecuado se operan con intención curativa en comité oncológico.
- **Hipertensión portal y sangrado variceal:** terlipresina/octreótido + antibiótico profiláctico (ceftriaxona) + **ligadura endoscópica**; ante sangrado refractario → **TIPS** (derivación portosistémica transyugular); las derivaciones quirúrgicas (Warren) son excepcionales hoy.

### Banderas rojas y errores a evitar
- **Biopsiar un quiste hidatídico o un hemangioma típico:** provoca choque anafiláctico/siembra peritoneal o hemorragia catastrófica.
- **Resecar hígado cirrótico con hipertensión portal clínica o FLR insuficiente:** desencadena **insuficiencia hepática posthepatectomía (ISGLS)** de altísima mortalidad.
- **Omitir el estudio de síndromes ictéricos por obstrucción:** bilirrubina directa elevada + dilatación biliar obliga a descartar colédoco obstruido o neoplasia periampular con CPRM/TC antes de intervenir.`,

  'ap-r3-vias-biliares': `La patología biliar es el núcleo cotidiano de cirugía general. Su estándar de seguridad se resume en tres reglas: operar tempranamente la colecistitis según Tokio TG18, descomprimir sin demora la colangitis y aplicar la visión crítica de seguridad de Strasberg para evitar la lesión quirúrgica de vía biliar (LQVB).

### Criterios y clasificaciones clave
- **Colecistitis aguda (TG18):** diagnóstico definitivo = local (Murphy/dolor HCD >6 h) + sistémico (fiebre, PCR o leucocitosis) + imagen (US: pared **>4 mm**, líquido perivesicular, cálculo impactado, Murphy sonográfico). **Grado I** leve; **II** moderada (leucocitos >18,000, masa HCD, >72 h o inflamación local grave); **III** grave (disfunción orgánica).
- **Coledocolitiasis (ASGE):** alto riesgo (cálculo en US/TC, colangitis o bilirrubina total **>4 mg/dL** + colédoco >6 mm) → **CPRE directa**; intermedio (PFH alteradas, colédoco dilatado, edad >55) → **CPRM** o ultrasonido endoscópico.
- **Colangitis (TG18):** tríada de **Charcot** (fiebre, ictericia, dolor HCD) y péntada de **Reynolds** (+ hipotensión y confusión = grado III).
- **LQVB (Strasberg A-E):** **A** fuga cístico/Luschka; **B/C** conducto derecho aberrante ocluido/seccionado; **D** lesión lateral de colédoco; **E1-E5** transección/estenosis circunferencial del hepático común o confluencia (= Bismuth I-V). **Bismuth-Corlette I-IV** clasifica el colangiocarcinoma perihiliar (Klatskin).

### Conducta de primera línea
- **Colecistitis aguda:** **colecistectomía laparoscópica temprana (<72 h)** en grados I-II; en grado III inestable o alto riesgo, antibiótico + **colecistostomía percutánea** y cirugía diferida. La colelitiasis asintomática no se opera salvo vesícula en porcelana, pólipo >1 cm o cálculo >3 cm.
- **Prevención de LQVB:** exigir **visión crítica de seguridad** (triángulo hepatocístico limpio, tercio inferior separado de placa cística y exactamente **dos estructuras** entrando a vesícula). Ante triángulo congelado: ***bail-out*** (colecistectomía subtotal fenestrante/reconstituyente, colangiografía intraoperatoria o conversión).
- **Colangitis y fístulas:** reanimación + antibiótico IV amplio + **CPRE** (inmediata en grado III, <24-48 h en grado II) y colecistectomía posterior. En **Mirizzi** o **íleo biliar** (fístula bilioentérica), planear imagen previa para proteger el colédoco.
- **Cáncer biliar:** cáncer incidental de vesícula **T1a** basta colecistectomía; **≥T1b** exige **re-resección oncológica** (segmentos IVb-V + linfadenectomía hiliar ± resección del colédoco si margen cístico positivo).

### Banderas rojas y errores a evitar
- **Reparar una Strasberg E sin experiencia HPB:** la sutura inexperta en conductos finos o isquémicos fracasa; drenar, no clipear más y **derivar a centro HPB** para hepaticoyeyunoanastomosis en Y de Roux.
- **Ictericia, biloma o dolor poscolecistectomía:** sospechar LQVB o litiasis residual; realizar US/TC + CPRM/CPRE urgente.
- **Confiar en CA 19-9 con ictericia:** la colestasis benigna da falsos positivos; repetir tras drenaje biliar.`,

  'ap-r3-pancreas': `La patología pancreática concentra decisiones críticas: evitar el bisturí temprano en pancreatitis necrotizante, definir qué quiste vigilar o resecar y estatificar la resecabilidad vascular del adenocarcinoma ductal. El abordaje escalonado (*step-up*) y el comité HPB rigen la conducta.

### Criterios y clasificaciones clave
- **Pancreatitis aguda (Atlanta 2012):** diagnóstico con **≥2 de 3** (dolor epigástrico irradiado a espalda, **lipasa/amilasa >3× LSN**, imagen compatible). Severidad: **leve** (sin falla orgánica ni complicaciones), **moderadamente grave** (falla orgánica <48 h o complicación local) y **grave** (falla orgánica **>48 h**, Marshall).
- **Colecciones:** <4 semanas → colección líquida o necrótica aguda; **≥4 semanas** (pared definida) → **pseudoquiste** (líquido puro) o **necrosis encapsulada (WON)**.
- **Quistes pancreáticos:** **cistoadenoma seroso** (benigno, mujeres mayores, cicatriz estrellada, CEA bajo → observar); **neoplasia quística mucinosa** (cuerpo/cola, estroma ovárico, CEA >192 ng/mL → **resecar**); **IPMN** (**conducto principal ≥10 mm** o estigmas altos como ictericia/nódulo mural ≥5 mm → **resecar**; rama secundaria sin alarmas → vigilar).
- **Adenocarcinoma (NCCN):** **resecable**, ***borderline*** (contacto venoso/arterial limitado), **localmente avanzado** (encasamiento >180° AMS/tronco celíaco) o **metastásico**.

### Conducta de primera línea
- **Pancreatitis aguda:** reanimación **moderada** con **Ringer lactato**, analgesia, **nutrición enteral precoz** (<24-72 h) y **sin antibióticos profilácticos** en necrosis estéril. CPRE (<24 h) solo si hay **colangitis** u obstrucción biliar persistente. En biliar leve: **colecistectomía en el mismo ingreso**.
- **Necrosis infectada:** carbapenémico + ***step-up*** diferido **≥4 semanas**: 1) drenaje percutáneo o endoscópico transgástrico; 2) necrosectomía mínimamente invasiva (VARD o endoscópica) si no mejora.
- **Pancreatitis crónica:** suspender alcohol/tabaco, enzimas pancreáticas y manejo de diabetes 3c; dolor intratable + conducto >7 mm → drenaje endoscópico o derivación (**Puestow/Frey**).
- **Cáncer y TNE:** cabeza resecable → **Whipple** + mFOLFIRINOX adyuvante; cuerpo/cola → pancreatectomía distal + esplenectomía. En ***borderline*** → **neoadyuvancia obligatoria**. **TNE** funcionales (insulinoma, gastrinoma) o no funcionales **>2 cm** → resección.

### Banderas rojas y errores a evitar
- **Necrosectomía abierta temprana (<2-4 semanas):** dispara hemorragia, fístulas y mortalidad; no operar necrosis estéril o inmadura.
- **TC temprana (24-48 h) sin duda diagnóstica:** subestima la necrosis; reservarla para **≥72 h** o deterioro.
- **Complicaciones pos-Whipple:** vigilar **fístula pancreática (ISGPS: amilasa drenaje >3× límite sérico en día ≥3)**, hemorragia centinela (pseudoaneurisma gastroduodenal → angioembolización urgente) y vaciamiento gástrico retardado.`,

  'ap-r3-peritoneo': `El peritoneo y el retroperitoneo concentran cuadros críticos de cirugía general: sepsis abdominal, síndrome compartimental y abdomen abierto, carcinomatosis, pseudomixoma y sarcomas retroperitoneales. La clave terapéutica combina control precoz del foco, cierre fascial temprano y cirugía oncológica en bloque en centros expertos.

### Criterios y clasificaciones clave
- **Peritonitis:** **primaria** (espontánea del cirrótico, monomicrobiana, cefalosporina de 3.ª generación, **no quirúrgica**), **secundaria** (perforación o fuga anastomótica, polimicrobiana, más frecuente) y **terciaria** (persistente/recurrente en crítico inmunodeprimido, hongos y resistentes).
- **Abdomen abierto (Björck 2016):** 1A limpio, 1B contaminado, 1C fuga entérica; 2A-2C adherencias/fijación progresiva; **3A-3B abdomen congelado (*hostil*)**; **4 fístula enteroatmosférica**.
- **Carcinomatosis peritoneal:** medir extensión con **PCI de Sugarbaker (0-39 puntos, 13 regiones)** y citorreducción con **CC-0** (sin tumor visible), **CC-1** (<2.5 mm), **CC-2** (2.5 mm-2.5 cm) y **CC-3** (>2.5 cm); el beneficio exige **CC-0/CC-1**.
- **Sarcoma retroperitoneal:** predominan liposarcoma y leiomiosarcoma; crecen silentes desplazando órganos.

### Conducta de primera línea
- **Sepsis abdominal (Surviving Sepsis 2021 / WSES):** *bundle* de 1.ª hora (lactato, cultivos, antibiótico amplio <1 h, cristaloides balanceados, norepinefrina para PAM ≥65 mmHg) + **control del foco** (drenaje percutáneo si absceso; cirugía ante peritonitis difusa, isquemia o fuga). Antibiótico por **4 días** tras control exitoso.
- **Abdomen abierto:** en control de daños, síndrome compartimental o sepsis sin cierre seguro, aplicar **presión negativa + tracción fascial dinámica** buscando **cierre fascial definitivo en 7-8 días**.
- **Carcinomatosis y pseudomixoma:** **laparoscopia estadificadora** (la TC subestima implantes milimétricos). En **pseudomixoma**, mesotelioma peritoneal y cáncer colorrectal seleccionado con PCI bajo, referir a **citorreducción (CRS) + HIPEC**.
- **Sarcoma retroperitoneal:** TC toracoabdominal + **tru-cut retroperitoneal guiado por imagen** (sin contaminar peritoneo), comité oncológico y **resección multivisceral en bloque con cápsula intacta** (nunca enuclear).

### Banderas rojas y errores a evitar
- **Fístula enteroatmosférica:** cada día con asas expuestas eleva el riesgo; proteger con lámina visceral fenestrada y cerrar fascia pronto.
- **Operar electivamente un abdomen hostil entre semanas 2 y 8:** las adherencias densas causan enterotomías; salvo sepsis no drenable, diferir reconstrucción **≥3-6 meses**.
- **Enuclear o biopsiar transperitonealmente un sarcoma retroperitoneal:** causa siembra sarcomatosa difusa e irresecabilidad.`,

  'ap-r3-tiroides': `La cirugía endocrina cervical y suprarrenal obedece una regla absoluta: **bioquímica e imagen siempre preceden al bisturí**. En tiroides evita cirugías innecesarias; en paratiroides la PTH intraoperatoria confirma curación; y en suprarrenal descartar feocromocitoma previene crisis hipertensivas letales en la inducción anestésica.

### Criterios y clasificaciones clave
- **Nódulo tiroideo (ATA / TI-RADS y Bethesda):** solicitar **TSH** y **ultrasonido cervical de alta resolución** (sospecha: hipoecogenicidad, microcalcificaciones, bordes irregulares, más alto que ancho). TSH baja → gammagrafía (nódulo caliente rara vez maligno); TSH normal/alta + criterio ecográfico → **BAAF** (**Bethesda I-VI**: I no diagnóstico, II benigno, III AUS/FLUS, IV folicular, V sospechoso, VI maligno).
- **Cáncer de tiroides (AJCC 8.ª):** **papilar** (~80-85%, linfático, mejor pronóstico), **folicular** (invasión capsular/vascular, hematógeno; BAAF no distingue adenoma de carcinoma), **medular** (células C, calcitonina/CEA, descartar **MEN 2 y feocromocitoma**) y **anaplásico** (letal). Corte pronóstico AJCC: **55 años**.
- **Hiperparatiroidismo primario (HPTP):** hipercalcemia + PTH elevada o inapropiadamente normal (80-85% **adenoma único**). Criterios quirúrgicos en asintomático: **<50 años**, Ca²⁺ **>1 mg/dL** sobre LSN, TFG <60 mL/min, osteoporosis (T-score ≤−2.5) o nefrolitiasis/hipercalciuria.
- **Incidentaloma suprarrenal (≥1 cm):** **tamizaje obligatorio**: metanefrinas libres (feocromocitoma), supresión con 1 mg dexametasona (Cushing) y aldosterona/renina si hipertenso (Conn). Resecar si funcionante, **≥4 cm** o sospecha maligna (>10 UH sin contraste, lavado lento).

### Conducta de primera línea
- **Tiroidectomía:** lobectomía en benigno sintomático unilateral o diferenciado de bajo riesgo (1-4 cm sin extensión ni ganglios); **total** en >4 cm, bilateral, extensión extratiroidea, metástasis o medular (+ disección central). En **Graves**, lograr eutiroidismo previo (metimazol + betabloqueador + Lugol 7-10 días).
- **Paratiroidectomía:** localización concordante (**US + Tc-99m sestamibi** o TC 4D) → abordaje mínimamente invasivo con **criterio de Miami** (caída de **PTH ≥50%** a 10 min).
- **Feocromocitoma:** **bloqueo alfa 7-14 días antes** (fenoxibenzamina o prazosina/doxazosina) + sal/hidratación, añadiendo betabloqueador **solo después** si hay taquicardia → adrenalectomía laparoscópica con ligadura precoz de vena suprarrenal.

### Banderas rojas y errores a evitar
- **Hematoma cervical expansivo postiroidectomía con estridor/disnea:** **abrir puntos de piel y planos musculares en la cama** para descomprimir la tráquea antes de quirófano.
- **Betabloqueador aislado en feocromocitoma:** deja receptores alfa sin oposición → crisis hipertensiva y edema pulmonar.
- **NLR e hipocalcemia:** identificar NLR, preservar paratiroides (o autotrasplantar en esternocleidomastoideo) y vigilar Chvostek/Trousseau y Ca²⁺/PTH a 6-24 h.`,

  'ap-r3-mama': `La patología mamaria exige diferenciar ginecomastia y lesiones benignas del cáncer de mama, primera causa de muerte por cáncer en mexicanas. Hoy el **subtipo molecular** guía neoadyuvancia, cirugía, manejo axilar conservador y reconstrucción.

### Criterios y clasificaciones clave
- **Triple evaluación (>30 años):** clínica + imagen (**mastografía bilateral** ≥40 años, **US** en <40 años o complemento; RM en alto riesgo/BRCA o lobulillar) + **biopsia tru-cut** con inmunohistoquímica (**RE, RP, HER2, Ki-67**). La BAAF no diferencia in situ de invasor ni aporta receptores fiables.
- **BI-RADS:** 0 incompleto, 1-2 benigno, 3 probablemente benigno (<2%, control 6 meses), **4 sospechoso (4A-4C → biopsia)**, **5 altamente sugestivo (>95% → biopsia)**, 6 confirmado.
- **Subtipos moleculares:** **Luminal A** (RE+/RP+, HER2−, Ki-67 bajo; mejor pronóstico), **Luminal B** (RE+, HER2+/−, Ki-67 alto), **HER2 enriquecido** (RE−/RP−, HER2+) y **Triple negativo** (RE−/RP−/HER2−; agresivo, alta respuesta a neoadyuvancia).
- **Márgenes (SSO/ASTRO):** en **invasor**, **"no tumor en tinta"**; en **CDIS puro**, margen **≥2 mm**.
- **Ginecomastia:** tejido glandular subareolar concéntrico y elástico (vs. pseudoginecomastia y cáncer masculino: excéntrico, duro, indoloro); revisar fármacos (espironolactona, finasteride, antiandrógenos), hepatopatía, hipogonadismo y tumor testicular/hCG.

### Conducta de primera línea
- **Cirugía oncológica:** en estadios tempranos, **conservadora + radioterapia** iguala supervivencia a **mastectomía**. Indicar mastectomía en multicentricidad, relación tumor-mama desfavorable, contraindicación de radioterapia o preferencia informada; ofrecer **reconstrucción inmediata o diferida**.
- **Axila moderna:** en cN0 realizar **biopsia de ganglio centinela (BGC)**. Con **ACOSOG Z0011** (T1-T2, conservadora + radioterapia tangencial y **1-2 centinelas positivos** sin extensión extranodal) se **omite la disección axilar** (previene linfedema).
- **Terapia sistémica:** **neoadyuvancia** de entrada en **estadio III, inflamatorio (T4d), HER2+ (≥T2 o N+) y triple negativo (≥T2 o N+)**. Hormonoterapia (tamoxifeno o inhibidor de aromatasa) en RE+; anti-HER2 (trastuzumab/pertuzumab) en HER2+.
- **Ginecomastia:** suspender fármaco y observar si puberal o <1 año; cirugía solo si es crónica fibrosa sintomática tras descartar neoplasia/endocrinopatía.

### Banderas rojas y errores a evitar
- **Cáncer inflamatorio (eritema, calor, *piel de naranja* >1/3 de mama):** si no cede a antibiótico en 7-10 días, hacer **biopsia en sacabocados de piel** e iniciar neoadyuvancia (nunca operar de inicio).
- **Cardiotoxicidad anti-HER2 (trastuzumab):** monitorizar **FEVI** basal y cada 3 meses.
- **Asesoría genética (BRCA1/2):** obligada si cáncer <45-50 años, triple negativo <60 años, bilateral, masculino o antecedente familiar mama/ovario.`
};
