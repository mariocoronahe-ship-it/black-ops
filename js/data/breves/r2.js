// Resumen breve (vista «Ejecutivo») de los módulos R2: { 'id-del-modulo': 'markdown corto' }.
// Si un módulo aparece aquí, reemplaza al resumen original. El desarrollo completo va en las hojas (subtemas/).
export const BREVES_R2 = {
  'piel': `La patología quirúrgica de piel y tejido subcutáneo abarca infecciones locales, lesiones benignas, úlceras por presión y cáncer cutáneo. El cirujano debe diferenciar colecciones drenables de celulitis o fascitis, planear incisiones sobre líneas de tensión (Langer) y respetar márgenes oncológicos según estirpe.

### Criterios y números de corte
- **Infecciones locales:** **absceso** = colección fluctuante (ecografía si es profundo); **celulitis** = eritema difuso sin colección (delimitar bordes con tinta).
- **Úlceras por presión (NPIAP):** estadio 1 eritema no blanqueable; 2 pérdida dérmica parcial; 3 pérdida total hasta adiposo; 4 exposición de fascia, músculo o hueso.
- **Profilaxis antitetánica:** herida limpia con <3 dosis o ≥10 años → vacuna Td/Tdap; herida sucia con <3 dosis o desconocido → vacuna + **inmunoglobulina antitetánica (IGT)**; esquema completo pero ≥5 años → solo refuerzo.
- **Márgenes oncológicos:** **basocelular** (perlado) bajo riesgo **4 mm** (alto riesgo/facial → **Mohs**); **espinocelular** (queratósico; úlcera de Marjolin en cicatriz crónica) **4-6 mm** (alto riesgo ≥6-10 mm/Mohs); **melanoma** (ABCDE, profundidad **Breslow**): in situ 0.5-1 cm, ≤1 mm → **1 cm**, 1.01-2 mm → **1-2 cm**, >2 mm → **2 cm**. Ganglio centinela si Breslow **≥0.8 mm** (o ulcerado).

### Conducta de primera línea
- **Absceso cutáneo:** **incisión y drenaje** rompiendo tabiques; añadir antibiótico solo si hay celulitis extensa, fiebre, inmunosupresión o sospecha de MRSA.
- **Lesiones benignas:** **lipoma** (blando, móvil) se reseca solo si molesta o crece (nunca drenar como absceso); **quiste epidérmico** exige extirpación con **cápsula intacta** (si infectado, drenar primero y resecar diferido).
- **Sospecha de melanoma:** **biopsia escisional con margen de 1-3 mm** (nunca rasurado que destruya Breslow).
- **Cicatriz patológica:** silicón y triamcinolona intralesional; en queloide refractario combinar resección intramarginal con adyuvancia.

### Banderas rojas y errores a evitar
- **Fascitis necrosante:** dolor desproporcionado, bulas hemorrágicas, anestesia cutánea, crepitación o choque exigen desbridamiento quirúrgico inmediato.
- **Úlcera crónica en cicatriz o fístula que no cierra:** biopsiar bordes para descartar **úlcera de Marjolin** (CEC agresivo).
- **Tratar úlceras por presión solo con apósitos:** sin **descarga de presión** cada 2 h, nutrición y desbridamiento, no cicatrizan.`,

  'quemaduras': `El gran quemado sufre pérdida de barrera cutánea, fuga capilar masiva con choque y un estado hipermetabólico prolongado. La supervivencia depende de asegurar tempranamente la vía aérea en lesión inhalatoria, titular líquidos por diuresis y realizar escarectomía e injerto precoces.

### Criterios y números de corte
- **Extensión (SCQ):** regla de los 9 de Wallace en adultos (cabeza 9%, cada brazo 9%, tronco anterior 18%, posterior 18%, cada pierna 18%, periné 1%); palma con dedos ≈**1%**; en niños usar **Lund-Browder**. Solo sumar **2.° y 3.° grado**.
- **Profundidad:** 1.° epidermis (eritema doloroso); 2.° superficial (flictenas, base roja húmeda, muy dolorosa); 2.° profundo (pálida/moteada, menor dolor); 3.° acartonada, indolora, vasos trombosados.
- **Reanimación hídrica (>20% SCQ adulto, >10-15% niño):** **Parkland/ABA**: **2-4 mL/kg/%SCQ** de Ringer lactato (ATLS 10.ª ed. parte de **2 mL/kg/%SCQ** en adulto térmico, 3 mL en niños y **4 mL** en eléctricas); mitad en las primeras **8 h desde el accidente** y mitad en las 16 h siguientes.
- **Meta de titulación:** gasto urinario **0.5 mL/kg/h** en adultos (1 mL/kg/h niños; **1-1.5 mL/kg/h** en eléctrica con mioglobinuria).

### Conducta de primera línea
- **Lesión inhalatoria:** incendio en espacio cerrado, hollín en narinas/esputo, disfonía o estridor → **intubación temprana**. Intoxicación por **CO** (SpO₂ falsamente normal) → **O₂ 100%**; **cianuro** (acidosis láctica refractaria) → **hidroxicobalamina**.
- **Manejo local y quirúrgico:** antimicrobianos tópicos (sulfadiazina de plata; acetato de mafenida penetra cartílago/escara), **escarotomía urgente** en quemaduras circunferenciales de 3.° grado de extremidades o tórax, y **escarectomía tangencial precoz + autoinjerto**.
- **Eléctricas y químicas:** en eléctricas vigilar arritmias (ECG 24 h), rabdomiólisis y **síndrome compartimental** (fasciotomía). En químicas irrigar con agua >30-60 min; en **ácido fluorhídrico** aplicar **gel de gluconato de calcio** y monitorizar calcio/potasio.
- **Soporte metabólico:** nutrición enteral precoz hiperproteica (1.5-2 g/kg/día), ambiente tibio (30-33 °C) y control glucémico.

### Banderas rojas y errores a evitar
- **Criterios de traslado (ABA):** 2.° grado >10%, cualquier 3.°, cara/manos/pies/genitales/periné/articulaciones mayores, eléctricas, químicas o inhalación.
- **Sobrecarga hídrica (*fluid creep*):** no seguir fórmulas a ciegas sin ajustar a diuresis; genera edema pulmonar y síndrome compartimental abdominal.
- **Antibióticos sistémicos profilácticos:** contraindicados de rutina; usarlos solo ante infección documentada.`,

  'neoplasias': `La oncología quirúrgica integra biología tumoral, estadificación precisa y terapias multimodales decididas en comité multidisciplinario. El cirujano obtiene biopsias sin contaminar planos, ejecuta resecciones R0 con linfadenectomía adecuada, resuelve urgencias oncológicas y ofrece paliación honesta en enfermedad avanzada.

### Criterios y clasificaciones clave
- **Márgenes (R):** **R0** libre microscópico (objetivo curativo); **R1** tumor microscópico en borde; **R2** residuo macroscópico.
- **TNM (AJCC 8.ª ed.):** cTNM (clínica, define neoadyuvancia), pTNM (patológica, define adyuvancia) y ypTNM (posneoadyuvancia). La biología (grado, invasión linfovascular, **HER2, RE/RP, MSI/MMR, RAS/BRAF**) define terapia tanto como el tamaño.
- **Urgencias oncológicas:**
  - *Síndrome de lisis tumoral:* **hiperuricemia, hiperpotasemia, hiperfosfatemia e hipocalcemia** → LRA y arritmias.
  - *Neutropenia febril:* T° ≥38.3 °C (o ≥38.0 °C por 1 h) + neutrófilos **<500/µL**.
  - *Hipercalcemia maligna:* Ca²⁺ corregido >10.5 mg/dL (>14 grave) por PTHrP o metástasis óseas.
  - *Compresión medular:* dolor dorsal progresivo + debilidad/pérdida esfinteriana.
  - *SVCS:* edema en esclavina, plétora y colaterales venosas.

### Conducta de primera línea
- **Principios quirúrgicos:** biopsia previa con **aguja gruesa (tru-cut)** planeando resecar el trayecto; no fragmentar el tumor, extraer en bolsa en laparoscopia y realizar linfadenectomía regional estandarizada.
- **Terapias sistémicas en quirófano:** esperar **4-6 semanas** tras anti-VEGF (bevacizumab) antes de cirugía electiva por riesgo de dehiscencia/sangrado; verificar biometría y toxicidades por inmunoterapia.
- **Manejo de urgencias:** lisis tumoral → hidratación vigorosa + alopurinol o **rasburicasa**; neutropenia febril → hemocultivos y **antipseudomónico IV en <1 h** (cefepima/piperacilina-tazobactam/meropenem; en **tiflitis** manejo médico salvo perforación); compresión medular → **dexametasona IV inmediata** + RM urgente + descompresión/RT; hipercalcemia → salina + calcitonina + **ácido zoledrónico**.
- **Cirugía paliativa:** indicada ante obstrucción, sangrado o perforación con objetivo sintomático claro y cuidados paliativos tempranos.

### Banderas rojas y errores a evitar
- **Biopsia mal orientada en sarcoma:** incisiones transversas o excisionales marginales contaminan compartimentos y comprometen salvamento de extremidad.
- **Operar sin comité de tumores:** omite neoadyuvancias que aumentan R0 y supervivencia.
- **Demorar antibiótico en neutropenia febril:** esperar imagen o recuentos definitivos dispara la mortalidad por choque séptico.`,

  'pared': `Las hernias de pared resultan del desequilibrio entre presión intraabdominal e integridad miofascial. Dominar la anatomía inguinal anterior y posterior (orificio miopectíneo), la clasificación EHS, la selección de mallas y la hipertensión intraabdominal (HIA) permite reparaciones duraderas y manejo oportuno de estrangulación.

### Criterios y clasificaciones clave
- **Anatomía inguinal:** **indirecta** lateral a vasos epigástricos inferiores; **directa** medial, por el **triángulo de Hesselbach** (epigástricos inferiores, borde del recto y ligamento inguinal); **femoral** bajo el ligamento inguinal medial a la vena femoral (**mayor tasa de estrangulación**, más frecuente en mujeres).
- **Visión posterior laparoscópica:** **triángulo de la muerte** (entre deferente y vasos espermáticos → vasos ilíacos externos) y **triángulo del dolor** (lateral a espermáticos bajo tracto iliopúbico → nervios femorocutáneo lateral, femoral y genitofemoral): **jamás fijar grapas ahí**. Vigilar **corona mortis** en Cooper.
- **Hernias especiales:** **Richter** (borde antimesentérico: estrangula **sin obstrucción completa**), **Littré** (Meckel), **Amyand** (apéndice en saco inguinal), **Garengeot** (en femoral), **Spiegel** (línea semilunar).
- **HIA y SCA (WSACS):** PIA normal 5-7 mmHg; **HIA ≥12 mmHg**; **síndrome compartimental abdominal = PIA >20 mmHg + nueva disfunción orgánica** (oliguria, presión pico alta, hipotensión).

### Conducta de primera línea
- **Hernia inguinal electiva (HerniaSurge):** malla sintética sin tensión. **Lichtenstein** en unilateral primaria; **TEP/TAPP** preferido en **bilateral, recidivada** tras vía anterior y en **mujeres** (cubre canal femoral).
- **Hernia ventral compleja:** optimizar tabaco (≥4 sem), glucemia y peso. Malla **retromuscular (*sublay*/Rives-Stoppa)**; en pérdida de dominio preparar con **toxina botulínica A**/neumoperitoneo progresivo y separación posterior (**TAR**).
- **Estrangulada (urgencia inmediata):** dolor continuo, eritema, fiebre, lactato alto → cirugía urgente sin retraso; evaluar viabilidad intestinal. Ante contaminación fecal o necrosis extensa evitar malla sintética permanente y elegir reparación tisular o malla absorbible/biológica.
- **SCA establecido:** descompresión quirúrgica (abdomen abierto) si fallan medidas médicas (SNG, sedación, paracentesis, balance neutro).

### Banderas rojas y errores a evitar
- **Taxis forzada:** reducir a la fuerza una hernia tensa, eritematosa o con peritonismo arriesga perforación o reducción en masa de asa necrótica.
- **Observar una hernia femoral:** siempre requiere reparación quirúrgica programada por su alto riesgo de estrangulación.
- **Inguinodinia crónica:** prevenir identificando y preservando nervios ilioinguinal, iliohipogástrico y rama genital del genitofemoral.`,

  'esofago': `La patología quirúrgica esofágica comprende trastornos motores, ERGE y esófago de Barrett, divertículos, cáusticos, perforación y cáncer. La ausencia de serosa y su trayecto cervicotoracoabdominal explican la diseminación tumoral temprana y la alta letalidad de perforaciones y fugas.

### Criterios y clasificaciones clave
- **Trastornos motores (Chicago v4.0):** **acalasia** = disfagia a sólidos y líquidos desde el inicio + IRP elevada; **tipo I** aperistáltica, **tipo II** presurización panesofágica (mejor respuesta), **tipo III** espástica (preferir POEM).
- **ERGE y Barrett:** signos de alarma (disfagia, pérdida de peso, anemia, sangrado) obligan a endoscopia. **Barrett** exige metaplasia intestinal en biopsias (protocolo de Seattle). Antes de cirugía antirreflujo son obligatorias **endoscopia, manometría y pH-metría 24 h** (DeMeester >14.7).
- **Cáusticos (Zargar):** endoscopia en **12-24 h** (salvo perforación); 0-IIa conservador, **IIb-IIIa** riesgo de estenosis, **IIIb** necrosis extensa con riesgo de perforación.
- **Cáncer y UEG (Siewert):** epidermoide (tercio superior/medio) y adenocarcinoma (inferior sobre Barrett). **Siewert I** (1-5 cm sobre línea Z → esófago), **II** (unión), **III** (2-5 cm abajo → estómago).

### Conducta de primera línea
- **ERGE quirúrgico:** **Nissen laparoscópica (360°)** en reflujo confirmado con buena motilidad; **parcial (Toupet 270° o Dor 180°)** si existe dismotilidad para evitar disfagia y *gas-bloat*.
- **Acalasia y divertículos:** **miotomía de Heller + funduplicatura parcial** o **POEM** (elección en tipo III). **Divertículo de Zenker** (falso, triángulo de Killian) → **miotomía cricofaríngea** (endoscópica o abierta + diverticulectomía).
- **Perforación esofágica (Boerhaave/iatrogénica):** más allá del dogma de las 24 h, decidir por estabilidad, contaminación y viabilidad: NPO, antibiótico amplio + antifúngico, drenaje amplio y **reparación primaria reforzada con colgajo** si es viable; **stent cubierto + drenaje** en seleccionados; exclusión/esofagectomía si hay necrosis o tumor.
- **Cáncer localizado/avanzado:** estadificar con TC, PET-TC y USE; **quimiorradioterapia neoadyuvante (CROSS)** (o FLOT en UEG) + **esofagectomía** (Ivor Lewis/McKeown).

### Banderas rojas y errores a evitar
- **Operar reflujo sin manometría:** hacer Nissen en una acalasia no detectada provoca disfagia severa.
- **Neutralizar cáusticos o inducir vómito:** causa reacción exotérmica y doble quemadura; prohibido lavado a ciegas.
- **Tríada de Mackler (vómito, dolor torácico, enfisema subcutáneo):** sospechar **Boerhaave**; confirmar con TC con contraste hidrosoluble y drenar sin demora.`,

  'estomago': `La cirugía gastroduodenal resuelve las complicaciones agudas de la enfermedad ácido-péptica, el trauma duodenal, los síndromes posgastrectomía y las neoplasias (adenocarcinoma y GIST). Pese al impacto de los IBP y la erradicación de *H. pylori*, perforación, hemorragia refractaria y cirugía oncológica D2 siguen siendo pilares del cirujano.

### Criterios y clasificaciones clave
- **Úlcera gástrica (Johnson):** I curvatura menor (ácido normal/bajo), II gástrica + duodenal (**ácido alto**), III prepilórica (**ácido alto**), IV alta cerca de UEG, V por AINE.
- **Hemorragia digestiva alta (Forrest / ACG 2021):** **Ia** a chorro, **Ib** en capa, **IIa** vaso visible (alto riesgo → terapia endoscópica obligada); **IIb** coágulo adherido; **IIc/III** base limpia (sin terapia). Transfusión restrictiva **Hb <7 g/dL**.
- **Cáncer gástrico (Lauren / JGCA):** **intestinal** (cascada de Correa, *H. pylori*) vs. **difuso** (anillo de sello, linitis, siembra peritoneal). Linfadenectomía **D2** exige **≥16 ganglios** y márgenes proximales de 3-5 cm (5-8 cm en difuso).
- **Zollinger-Ellison:** úlceras múltiples, posbulbares o refractarias + diarrea → gastrina en ayuno (sin IBP) y prueba de secretina.

### Conducta de primera línea
- **HDA:** reanimación, **IBP IV**, transfusión restrictiva y **endoscopia <24 h** (<12 h si inestable) con **hemostasia combinada** (adrenalina + clip/térmica; nunca adrenalina sola). Si resangra: nueva endoscopia → **angioembolización** → cirugía (ligadura de arteria gastroduodenal en úlcera duodenal posterior).
- **Úlcera perforada:** NPO, antibiótico amplio y **lavado peritoneal + parche de epiplón de Graham** + biopsia si es gástrica + erradicación de *H. pylori*. Obstrucción pilórica: SNG y corregir **alcalosis hipoclorémica hipopotasémica** antes de intervenir.
- **Cáncer gástrico localmente avanzado (≥T2 o N+):** TC, USE y **laparoscopia estadificadora con citología peritoneal**; estándar: **quimioterapia perioperatoria (FLOT) + gastrectomía con linfadenectomía D2**.
- **GIST (CD117+):** resección en cuña con margen negativo **sin linfadenectomía** ni rotura capsular; **imatinib** según riesgo y mutación KIT/PDGFRA.

### Banderas rojas y errores a evitar
- **No biopsiar una úlcera gástrica:** toda úlcera gástrica requiere biopsia inicial y endoscopia de control tras cicatrización para descartar malignidad.
- **Síndromes posgastrectomía:** *dumping* temprano (15-30 min) y tardío (2-3 h, hipoglucemia) → dieta fraccionada baja en azúcares simples; tras gastrectomía total dar **B12, hierro y calcio de por vida**.
- **Muñón duodenal difícil:** evitar cierres forzados sobre duodeno inflamado; asegurar cierre seguro o duodenostomía controlada con drenaje.`,

  'delgado': `El intestino delgado absorbe nutrientes, sales biliares y vitamina B12. Sus principales retos quirúrgicos son obstrucción mecánica, isquemia mesentérica aguda, fístulas enterocutáneas (FEC), enfermedad de Crohn, síndrome de intestino corto (SIC) y tumores raros (TNE, adenocarcinoma, linfoma y GIST).

### Criterios y números de corte
- **Obstrucción mecánica:** adherencias (~65-75%, primera causa en operados), hernias y tumores. **Tríada de Rigler** (neumobilia, obstrucción y cálculo ectópico) = **íleo biliar**.
- **Isquemia mesentérica aguda:** embolia AMS (~50%, FA), trombosis arterial (~25%), NOMI y trombosis venosa (~10%). Clásico: **dolor intenso desproporcionado a la exploración**.
- **FEC:** alto gasto **>500 mL/día**. Causas de no cierre (**FRIENDS**): cuerpo extraño (*Foreign body*), **R**adiación, **I**nfección, **E**pitelización, **N**eoplasia, obstrucción **D**istal y esteroides (*Steroids*).
- **SIC y Meckel:** SIC funcional con **<200 cm** de delgado (crítico <100 cm sin colon o <60 cm con colon/válvula ileocecal). **Divertículo de Meckel (regla de los 2):** 2% población, ~60 cm de válvula ileocecal, mucosa gástrica/pancreática ectópica.

### Conducta de primera línea
- **Obstrucción adhesiva sin isquemia (Bolonia/WSES):** NPO, SNG, líquidos y **contraste hidrosoluble (Gastrografin)** (si llega al colon en 24 h predice éxito conservador; si no resuelve en **48-72 h**, operar). Asa cerrada, estrangulación o peritonitis → **cirugía inmediata**.
- **Isquemia mesentérica aguda:** **angio-TC inmediata**, heparina IV, **revascularización urgente** + resección limitada a lo necrótico + ***second look* a las 24-48 h**. En trombosis venosa sin peritonitis: anticoagulación como pilar.
- **FEC (protocolo SNAP):** 1) **S**epsis y piel, 2) **N**utrición y electrolitos, 3) **A**natomía del trayecto tras estabilizar, 4) **P**lan quirúrgico diferido **≥6-12 semanas** (no operar en caliente salvo sepsis).
- **Crohn y estomas:** resecciones limitadas o **estenoplastias** para conservar intestino. En ileostomía usar **técnica de Brooke** (protrusión 2-3 cm) para proteger la piel.

### Banderas rojas y errores a evitar
- **Esperar lactato elevado para diagnosticar isquemia:** un lactato normal inicial no excluye isquemia mesentérica; mandar a angio-TC por clínica.
- **Resecar asas dudosas en la primera cirugía de isquemia:** revascularizar y revalorar en *second look* evita SIC dependiente de NPT.
- **TNE (carcinoide) de íleon:** suele ser pequeño con metástasis ganglionares; exige resección con linfadenectomía mesentérica amplia.`,

  'colon': `La cirugía de apéndice y colon abarca emergencias diarias (apendicitis, diverticulitis complicada, vólvulos, colitis fulminante y megacolon tóxico) y resecciones oncológicas con escisión completa del mesocolon (CME). La estabilidad, la ley de Laplace (el ciego perfora primero) y el control séptico guían cada decisión.

### Criterios y clasificaciones clave
- **Apendicitis:** dolor periumbilical que migra a FID, anorexia y fiebre baja. Escalas **Alvarado/AIR**; confirmar con **TC contrastada** en adultos y **US** en niños/embarazadas (apéndice >6 mm no compresible) o RM en embarazo.
- **Diverticulitis (Hinchey modificada):** Ia flemón, Ib absceso pericólico, II pélvico, **III peritonitis purulenta**, **IV peritonitis fecal**.
- **Megacolon tóxico (Jalan) y Ogilvie:** colon **>6 cm** + ≥3 datos sistémicos (fiebre >38 °C, FC >120, leucocitos >10,500, anemia) + toxicidad (hipotensión, confusión, deshidratación). En **síndrome de Ogilvie**, alto riesgo de perforación si **ciego ≥12 cm**.
- **Cáncer de colon:** derecho da anemia ferropénica y masa; izquierdo, obstrucción y sangrado. Exige márgenes ≥5 cm, ligadura vascular alta, **CME** y **≥12 ganglios**.

### Conducta de primera línea
- **Apendicitis:** **apendicectomía laparoscópica <24 h** (profilaxis en no complicada; **3-5 días antibiótico** en complicada). Plastrón/absceso estable: antibiótico + drenaje percutáneo; en **>40 años** hacer colonoscopia a las 6-8 semanas.
- **Diverticulitis (WSES):** no complicada leve → manejo médico; absceso **>3-4 cm** → **drenaje percutáneo**; Hinchey III-IV → resección urgente (**Hartmann** en inestable/fecal; anastomosis ± derivación solo si estable seleccionado). Colonoscopia a las **6-8 semanas**.
- **Vólvulos y Ogilvie:** **sigmoideo** (grano de café) sin isquemia → **desvolvulación endoscópica** y sigmoidectomía en el mismo ingreso; **cecal** → cirugía directa. **Ogilvie** refractario → **neostigmina IV** monitorizada o colonoscopia descompresiva.
- **Megacolon tóxico / *C. difficile* fulminante:** **colectomía subtotal con ileostomía terminal**. Cáncer de colon: adyuvancia (FOLFOX/CAPEOX) en estadio III y II de alto riesgo; perfil **MSI/MMR y RAS/BRAF**.

### Banderas rojas y errores a evitar
- **Colonoscopia en diverticulitis aguda:** contraindicada por riesgo de perforación; esperar 6-8 semanas.
- **Fuga anastomótica (ISREC A-C):** taquicardia persistente, fiebre, dolor o íleo en días 4-7 exigen TC con contraste o reexploración temprana.
- **Retrasar apendicectomía en embarazada:** aumenta perforación y pérdida fetal; laparoscopia segura en cualquier trimestre (pedir siempre β-hCG en edad fértil).`,

  'recto': `La cirugía de recto y ano requiere precisión en el "plano sagrado" de Heald, el complejo esfinteriano y la estadificación pélvica por resonancia magnética. En cáncer de recto localmente avanzado la neoadyuvancia antecede a la cirugía, mientras que el carcinoma epidermoide anal se cura primariamente con quimiorradioterapia.

### Criterios y clasificaciones clave
- **Cáncer de recto:** tacto rectal (altura y fijación), colonoscopia completa, TC, ACE y **RMN pélvica** (define T, N, invasión venosa extramural y **margen circunferencial [CRM ≤1 mm = amenazado]**).
- **Calidad de TME (Quirke) y márgenes:** mesorrecto íntegro; margen distal ≥2 cm (≥1 cm en recto bajo posneoadyuvancia) y CRM >1 mm.
- **Cáncer de conducto anal:** **epidermoide** asociado a **VPH** (16/18); AJCC 8.ª ed. por tamaño (T1 ≤2 cm, T2 2-5 cm, T3 >5 cm, T4 órganos vecinos).
- **Proctología benigna:** **hemorroides internas** (sangrado indoloro, grados I-IV); **fisura anal** (dolor cortante, 90% posterior; crónica = tríada de Brodie); **fístula (Parks)** (interesfinteriana, transesfinteriana, supraesfinteriana, extraesfinteriana; **regla de Goodsall**).

### Conducta de primera línea
- **Recto localmente avanzado (T3-T4, N+ o CRM amenazado):** **terapia neoadyuvante total (TNT)** seguida de **escisión total del mesorrecto (TME)** (resección anterior baja + ileostomía derivativa o resección abdominoperineal si invade esfínter). ***Watch-and-Wait*** solo ante respuesta clínica completa bajo protocolo estricto.
- **Cáncer anal:** **quimiorradioterapia definitiva (protocolo de Nigro: 5-FU + mitomicina C + RT)**; cirugía de rescate solo si persiste o recurre.
- **Patología benigna:**
  - *Hemorroides:* fibra; grados I-III ligadura elástica; III refractarias/IV hemorroidectomía. Externa trombosada <72 h → escisión elíptica completa.
  - *Fisura:* fibra, baños de asiento y **diltiazem/nitroglicerina tópica**; crónica refractaria → **esfinterotomía lateral interna (ELI)**.
  - *Absceso perianal:* **drenaje urgente** cercano al margen anal (antibiótico solo en diabetes, inmunosupresión o sepsis). *Fístula simple baja* → fistulotomía; *compleja/alta* → preservar esfínter (setón, LIFT, colgajo).

### Banderas rojas y errores a evitar
- **Asumir hemorroides en rectorragia >45 años:** exigir siempre **colonoscopia completa** para no pasar por alto un cáncer colorrectal.
- **Fisura lateral o múltiple:** descartar **Crohn, VIH, sífilis, tuberculosis o cáncer anal** antes de realizar ELI.
- **Síndrome LARS:** advertir sobre fragmentación defecatoria/urgencia tras TME baja e indicar rehabilitación de piso pélvico.`
};
