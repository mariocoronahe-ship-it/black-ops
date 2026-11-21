// Resumen breve (vista «Ejecutivo») de los módulos R1: { 'id-del-modulo': 'markdown corto' }.
// Si un módulo aparece aquí, reemplaza al resumen original. El desarrollo completo va en las hojas (subtemas/).
export const BREVES_R1 = {
  'ap-r1-profesionalismo': `El profesionalismo quirúrgico articula la bioética clínica, el marco médico-legal y la cultura de seguridad del paciente como competencias nucleares del residente desde el primer año. Opera sobre cuatro principios —autonomía, beneficencia, no maleficencia y justicia— y se materializa en un expediente clínico veraz, un consentimiento informado entendido como proceso continuo y una comunicación estructurada dentro del equipo quirúrgico.

### Criterios y marco normativo
- **Consentimiento informado:** requiere información clara (diagnóstico, procedimiento, riesgos frecuentes y graves aunque raros, alternativas), comprensión verificada (pedir al paciente que lo explique con sus palabras), voluntariedad y capacidad legal. La negativa informada debe respetarse y documentarse.
- **Expediente clínico (NOM-004-SSA3-2012):** documento médico-legal obligatorio; exige notas completas, cronológicas, legibles, sin abreviaturas ambiguas, con fecha, hora, nombre completo, firma y cédula. Propiedad institucional, confidencialidad del paciente.
- **Responsabilidad profesional:** la mala praxis se evalúa por impericia, imprudencia, negligencia o inobservancia de reglamentos; la obligación médica es de medios, nunca de resultados garantizados.
- **Análisis de errores (modelo de Reason):** los eventos adversos surgen de fallas latentes del sistema alineadas, no solo del individuo; requieren sesiones de morbimortalidad con análisis de causa raíz sin cultura punitiva.

### Conducta de primera línea
- **Seguridad en quirófano:** aplicar lista de verificación de la OMS en sus tres pausas (entrada, pausa quirúrgica antes de la incisión y salida) con marcaje del sitio anatómico y conteo completo de gasas e instrumental.
- **Comunicación clínica:** utilizar formato **SBAR** en entregas de guardia e interconsultas, comunicación en circuito cerrado (*closed-loop*) durante crisis y política activa de *speak up* ante cualquier riesgo detectado.
- **Manejo de evento adverso:** reconocer el error con honestidad, informar oportunamente al adscrito y al paciente/familia, documentar hechos objetivos sin juicios y activar medidas correctivas.
- **Investigación y docencia:** formular preguntas clínicas con estructura **PICO**, exigir aval del comité de ética y evaluar evidencia con metodología **GRADE**.

### Banderas rojas y errores a evitar
- **Consentimiento como trámite:** recabar solo la firma en el pasillo antes de quirófano sin explicar riesgos mayores ni alternativas invalida el acto ético y legal.
- **Ruptura de confidencialidad:** comentar casos en pasillos, elevadores o redes sociales (incluyendo fotos clínicas sin anonimización estricta ni autorización) constituye falta grave.
- **Fatiga no reconocida:** operar o tomar decisiones complejas con deprivación extrema de sueño sin pedir apoyo al superior compromete la seguridad; solicitar ayuda es un estándar profesional, no debilidad.`,

  'ap-r1-tecnicas': `La técnica quirúrgica segura se fundamenta en los principios de Halsted: manipulación delicada de los tejidos, hemostasia meticulosa, preservación de la irrigación, asepsia estricta, disección anatómica por planos, obliteración de espacios muertos y cierre sin tensión. Dominar tiempos fundamentales, selección de suturas, fuentes de energía y fisiología del neumoperitoneo reduce morbilidad intraoperatoria y complicaciones de la herida.

### Criterios y números de corte
- **Tiempos fundamentales:** incisión (diéresis), hemostasia, exposición, disección y síntesis (cierre); cada paso respeta planos anatómicos para minimizar desvascularización.
- **Suturas clave:** absorbibles multifilamento (poliglactina 910 / Vicryl: fuerza útil ~2-3 semanas) vs. monofilamento de absorción lenta (polidioxanona / PDS: ~4-6 semanas, ideal para aponeurosis); no absorbibles monofilamento (polipropileno / Prolene en vascular y malla; nylon en piel). En tejido contaminado preferir **monofilamento** (menor capilaridad bacteriana).
- **Neumoperitoneo laparoscópico:** presión estándar con CO₂ de **12-15 mmHg** (flujo inicial bajo); presiones >15 mmHg reducen retorno venoso, gasto cardiaco y distensibilidad pulmonar, y elevan la PaCO₂.
- **Retiro orientativo de puntos cutáneos:** cara 3-5 días, cuello 5-7 días, tronco y abdomen 7-10 días, extremidades y espalda 10-14 días.

### Conducta de primera línea
- **Preparación del campo:** lavado quirúrgico, antisepsia cutánea con **clorhexidina alcohólica al 2%** (dejando secar para evitar ignición) y corte de vello con rasuradora eléctrica solo si interfiere (nunca navaja).
- **Acceso laparoscópico seguro:** elegir técnica abierta de **Hasson** en pacientes con cirugías previas o sospecha de adherencias; colocar trócares secundarios siempre bajo visión directa y mantener **triangulación** óptima.
- **Uso racional de energía:** monopolar con dispersión térmica amplia (alejar de estructuras nobles y evitar acoplamiento capacitivo); bipolar y energía ultrasónica (bisturí armónico) reducen daño térmico lateral y sellan vasos de hasta 5-7 mm.
- **Drenajes:** usarlos con indicación precisa (evacuar colecciones o vigilar fuga), siempre en sistema cerrado de succión y retirarlos precozmente al disminuir gasto.

### Banderas rojas y errores a evitar
- **Lesión en la entrada laparoscópica:** la mayoría de lesiones vasculares mayores (aorta/ilíacas) y viscerales ocurren al introducir la aguja de Veress o el primer trócar; ante hipotensión súbita o sangre en trócar, no retirar la guía y convertir de inmediato.
- **Embolia gaseosa por CO₂:** caída brusca del CO₂ espirado (EtCO₂), hipotensión e hipoxemia; desinsuflar abdomen, colocar en decúbito lateral izquierdo con Trendelenburg (maniobra de Durant) y ventilar con O₂ al 100%.
- **Anastomosis o cierres a tensión:** un tejido pálido o tenso se isquemia y fistuliza; convertir a cirugía abierta ante anatomía oscura es una decisión de seguridad, jamás un fracaso.`,

  'ap-r1-rbt': `La respuesta biológica al trauma (RBT) es la reacción neuroendocrina, inmunitaria y metabólica desencadenada por lesión tisular, hemorragia, dolor o infección. Su objetivo evolutivo es preservar la perfusión vital y movilizar sustratos para la reparación; sin embargo, si el estímulo persiste o se amplifica, evoluciona hacia hipercatabolismo sostenido, inmunoparálisis, síndrome de respuesta inflamatoria sistémica (SIRS) y disfunción orgánica múltiple.

### Criterios y fases fisiopatológicas
- **Fase *ebb* (reflujo o choque, 0-48 h):** disminución del gasto metabólico y del consumo de O₂, vasoconstricción por catecolaminas, retención de sodio y agua (ADH y eje renina-angiotensina-aldosterona), oliguria fisiológica y resistencia inicial a la insulina.
- **Fase *flow* catabólica (días 2-10+):** hipermetabolismo, fiebre baja de origen inflamatorio (IL-1, IL-6, TNF-α), proteólisis muscular acelerada (el músculo aporta alanina y glutamina para gluconeogénesis hepática), lipólisis e hiperglucemia de estrés.
- **Fase anabólica (convalecencia):** inicia cuando cesa el estímulo nocivo; predominan hormona de crecimiento, IGF-1 e insulina, restaurando el balance nitrogenado positivo y la síntesis proteica.
- **Reactantes de fase aguda:** suben PCR, procalcitonina, fibrinógeno y ferritina; **bajan albúmina, prealbúmina y transferrina** (reactantes negativos por fuga capilar y dilución, no reflejan por sí solos desnutrición aguda).

### Conducta de primera línea
- **Modulación mediante ERAS:** atenuar la respuesta neuroendocrina con cirugía mínimamente invasiva, carga oral de carbohidratos preoperatoria (si no hay gastroparesia), analgesia multimodal ahorradora de opioides y bloqueo regional/epidural.
- **Metas metabólicas e hídricas:** mantener **normotermia (>36 °C)**, control glucémico en rango de **140-180 mg/dL** en el paciente crítico o quirúrgico mayor (evitando hipoglucemia <70 mg/dL) y fluidoterapia guiada por objetivos evitando sobrecarga de sodio.
- **Soporte nutricional y movilización:** reiniciar vía oral o nutrición enteral precoz (24-48 h) y deambulación temprana para frenar la sarcopenia y la resistencia insulínica.
- **Control definitivo del estímulo:** drenar colecciones, controlar sangrado y tratar focos sépticos; ninguna modulación metabólica compensa una complicación activa.

### Banderas rojas y errores a evitar
- **Confundir RBT con complicación:** fiebre leve en las primeras 24-48 h puede ser fisiológica, pero fiebre persistente >48 h, taquicardia sostenida, hiperglucemia refractaria u oliguria obligan a descartar **fuga anastomótica, sepsis o hemorragia**.
- **Sobrealimentar o sobrecargar en fase *ebb*:** administrar cargas hipercalóricas tempranas o litros excesivos de salina 0.9% empeora el edema tisular, el íleo y la hiperglucemia.
- **Usar la albúmina sérica aislada como marcador nutricional:** una albúmina baja en el día 3 postoperatorio suele reflejar inflamación sistémica y redistribución capilar; corregir la causa antes de suplementar.`,

  'ap-r1-perioperatorio': `El manejo perioperatorio integral abarca la estratificación del riesgo preoperatorio, la optimización de comorbilidades, la seguridad intraoperatoria y la recuperación acelerada (ERAS) con detección precoz de complicaciones. Su objetivo es llevar al paciente en la mejor condición fisiológica posible al quirófano y reducir estancia, infección y mortalidad sin retrasar cirugías urgentes.

### Criterios y números de corte
- **Estratificación de riesgo:** estado físico **ASA I-VI**, índice cardiaco revisado de **Lee** (cirugía alto riesgo, cardiopatía isquémica, ICC, EVC, DM con insulina, creatinina >2 mg/dL; ≥2 factores = alto riesgo) y capacidad funcional (**<4 METs** incapaz de subir un piso de escaleras = riesgo elevado).
- **Ayuno seguro (ASA):** líquidos claros **2 h**, leche materna 4 h, fórmula/comida ligera **6 h**, alimentos grasos o carne 8 h. El ayuno prolongado innecesario induce resistencia a la insulina y deshidratación.
- **Profilaxis antibiótica:** administrar dentro de los **60 min previos a la incisión** (120 min para vancomicina o fluoroquinolonas); redosificar si la cirugía supera 2 vidas medias del fármaco o hay sangrado >1,500 mL; suspender en <24 h (dosis única en la mayoría).
- **Profilaxis antitrombótica (Caprini):** puntaje ≥3-4 indica riesgo moderado-alto; combinar medidas mecánicas con HBPM (enoxaparina) o HNF según riesgo hemorrágico.

### Conducta de primera línea
- **Optimización preoperatoria:** suspender tabaquismo idealmente 4 semanas antes, corregir anemia ferropénica electiva, mantener betabloqueadores y estatinas crónicas, ajustar anticoagulantes valorando riesgo trombótico vs. hemorrágico (puente solo en alto riesgo trombótico).
- **Oxigenoterapia y ventilación protectora:** en el paciente intubado usar volumen corriente bajo (**6-8 mL/kg de peso predicho**), PEEP adecuada (5-8 cmH₂O) y presión meseta <30 cmH₂O para prevenir barotrauma y atelectrauma.
- **Paquete ERAS postoperatorio:** analgesia multimodal ahorradora de opioides, profilaxis antiemética (escala de Apfel), retiro temprano de sonda Foley y SNG, deambulación e inicio precoz de dieta enteral.
- **Vigilancia sistemática de fiebre postoperatoria (regla orientativa):** días 1-2 atelectasia/inflamación o fascitis precoz; días 3-5 infección urinaria, neumonía o catéter; días 5-7 **infección de herida o fuga anastomótica**; >7 días tromboembolia venosa o absceso profundo.

### Banderas rojas y errores a evitar
- **Minimizar signos tempranos de fuga o sangrado:** taquicardia persistente (>100-110 lpm), oliguria (<0.5 mL/kg/h), dolor desproporcionado o confusión en el postoperatorio son señales de complicación mayor hasta demostrar lo contrario, no "atelectasia normal".
- **Prolongar antibióticos profilácticos:** mantener cefalosporinas por días "por cobertura" no reduce la infección de sitio quirúrgico y sí dispara *Clostridioides difficile* y resistencia bacteriana.
- **Estudios preoperatorios rutinarios sin indicación:** solicitar laboratorios o radiografías por inercia en pacientes jóvenes ASA I de cirugía menor genera hallazgos incidentales sin mejorar desenlaces.`,

  'ap-r1-liquidos': `El manejo hidroelectrolítico y ácido-base en cirugía integra distribución corporal de agua, pérdidas digestivas y respuesta neuroendocrina. Un equilibrio preciso preserva la perfusión sin inducir edema ni íleo; corregir rápido un trastorno crónico puede causar desmielinización o arritmias fatales.

### Criterios y números de corte
- **Agua corporal total:** ≈**60%** del peso (50% mujer/anciano): 2/3 intracelular (K⁺) y 1/3 extracelular (Na⁺). Requerimiento basal: **25-30 mL/kg/día**.
- **Sodio:** hiponatremia <135 mEq/L (clasificar por volumen: hipo/eu/hipervolémica). En hiponatremia crónica (>48 h), corregir **≤8 mEq/L en 24 h** (máx. 10) para evitar desmielinización osmótica; en hipernatremia crónica bajar ≤8-10 mEq/L/día.
- **Potasio y magnesio:** hipopotasemia <3.5 mEq/L (ondas U, íleo); hiperpotasemia >5.5 mEq/L (T picuda, QRS ancho, FV). Hipopotasemia refractaria obliga a reponer **Mg²⁺** (<1.7 mg/dL).
- **Ácido-base:** pH 7.35-7.45, PaCO₂ 35-45 mmHg, HCO₃⁻ 22-26 mEq/L. Brecha aniónica = Na⁺ − (Cl⁻ + HCO₃⁻), normal **8-12 mEq/L** (+2.5 por cada 1 g/dL de albúmina <4).

### Conducta de primera línea
- **Soluciones:** preferir **cristaloides balanceados** (Ringer lactato/Hartmann) sobre salina 0.9%; el exceso de NaCl 0.9% provoca **acidosis metabólica hiperclorémica**.
- **Hiponatremia grave sintomática (convulsiones/coma):** bolo de **NaCl 3% 100-150 mL** en 10-20 min para subir 4-6 mEq/L y frenar edema cerebral.
- **Hiperpotasemia grave o con ECG alterado:** 1) **gluconato de calcio 10%** 10 mL IV (estabiliza membrana, no baja K⁺), 2) **insulina regular 10 UI + dextrosa 50% 50 mL** y salbutamol nebulizado, 3) eliminación (furosemida, resinas o hemodiálisis).
- **Pérdidas digestivas:** SNG o vómito generan **alcalosis hipoclorémica hipopotasémica** (reponer NaCl 0.9% + KCl); fístulas pancreáticas o diarrea biliar causan acidosis con brecha aniónica normal.

### Banderas rojas y errores a evitar
- **Hipocalcemia sintomática (postirodectomía/transfusión masiva):** Chvostek/Trousseau, tetania y QT largo; reponer calcio ionizado y magnesio.
- **KCl en bolo o rápido periférico:** límite periférico ≤10 mEq/h; confirmar diuresis adecuada antes de reponer.
- **Líquidos por receta fija:** ajustar a diario con **diuresis (meta ≥0.5 mL/kg/h)**, balances, peso y electrolitos seriados.`,

  'ap-r1-cicatrizacion': `La cicatrización cutánea y aponeurótica sigue una secuencia ordenada de inflamación, proliferación y remodelación. Identificar factores locales o sistémicos que la bloquean, elegir el cierre adecuado y aplicar desbridamiento, apósitos o presión negativa previene dehiscencias y evisceraciones.

### Criterios y fases biológicas
- **Inflamatoria (días 0-4):** hemostasia con PDGF/TGF-β, neutrófilos (24-48 h) y **macrófagos** (célula orquestadora indispensable).
- **Proliferativa (días 4-21):** angiogénesis, fibroblastos produciendo **colágeno tipo III**, tejido de granulación, epitelización y contracción por **miofibroblastos**.
- **Remodelación (día 21 a 1 año):** reemplazo de colágeno III por **colágeno tipo I**; fuerza tensil máxima definitiva de **70-80%** (nunca 100%).
- **Cicatrización patológica:** la **hipertrófica** respeta los bordes de la herida y tiende a atenuarse; el **queloide** rebasa límites originales y recurre tras resección aislada.

### Conducta de primera línea
- **Tipos de cierre:** primera intención (limpia afrontada), segunda intención (contaminada o con pérdida tisular abierta para granular) y tercera intención o diferido (abierta 4-5 días y luego suturada).
- **Manejo local (TIME):** desbridamiento de tejido necrótico (quirúrgico es el más efectivo), control bacteriano, **ambiente húmedo equilibrado** (alginatos/hidrofibras en alto exudado; hidrogel en herida seca) y protección de bordes.
- **Terapia de presión negativa (VAC, −75 a −125 mmHg):** disminuye edema, aumenta perfusión, acelera granulación y aproxima bordes; ideal en dehiscencias amplias y preparación de lecho para injerto.
- **Factores sistémicos:** controlar perfusión, glucemia, normotermia, tabaquismo y nutrición (proteínas, vitamina C, zinc y vitamina A si usa esteroides).

### Banderas rojas y errores a evitar
- **Dehiscencia fascial inminente:** salida súbita de **líquido serosanguinolento ("agua de lavar carne")** entre los días 5 y 10 anuncia rotura aponeurótica y riesgo de evisceración.
- **Evisceración:** cubrir asas con compresas estériles húmedas con salina tibia, NPO, SNG, antibiótico y **quirófano urgente**; jamás reintroducir vísceras a fuerza en cama.
- **Contraindicaciones de VAC:** nunca colocar esponja directa sobre vasos expuestos, órganos desnudos, necrosis no desbridada, osteomielitis activa o neoplasia en el lecho.`,

  'ap-r1-infeccion': `Las infecciones quirúrgicas comprenden aquellas que requieren intervención operatoria o drenaje para su curación y las que complican un procedimiento. El principio rector es innegociable: el **control anatómico del foco** (drenaje, desbridamiento o resección) combinado con antibiótico empírico oportuno; ningún esquema antimicrobiano logra curar una colección cerrada o tejido necrótico infectado.

### Criterios y clasificaciones clave
- **Carga bacteriana y clasificación de heridas (CDC):** infección suele requerir **>10⁵ UFC/g** de tejido (mucho menos en presencia de malla, sutura o cuerpo extraño). Heridas: I Limpia (<2% ISQ), II Limpia-contaminada (3-10%), III Contaminada (10-20%), IV Sucia/infectada (>25-40%).
- **Infección de sitio quirúrgico (ISQ, CDC):** **superficial** (piel y tejido subcutáneo, <30 días), **profunda** (fascia y músculo, hasta 30-90 días con implante) y de **órgano/espacio** (absceso intraabdominal, fuga).
- **Sepsis-3:** sepsis = infección + disfunción orgánica aguda (**incremento SOFA ≥2**); choque séptico = necesidad de vasopresor para PAM ≥65 mmHg + **lactato >2 mmol/L** pese a reanimación hídrica.
- **Fascitis necrosante:** tipo I polimicrobiana (diabéticos, Fournier) y tipo II monomicrobiana (*S. pyogenes*, *S. aureus*). Escala LRINEC apoya sospecha pero nunca descarta; el diagnóstico es clínico-quirúrgico.

### Conducta de primera línea
- **ISQ superficial o absceso cutáneo:** apertura de puntos, drenaje completo, lavado, curación abierta y cultivo del pus; el antibiótico sistémico solo se añade si hay celulitis extensa, fiebre, inmunosupresión o prótesis.
- **Infección intraabdominal complicada:** reanimación, cultivos sin demorar el antibiótico, cobertura empírica contra gramnegativos entéricos y anaerobios (ej. ceftriaxona + metronidazol en comunitaria leve-moderada; piperacilina-tazobactam o carbapenémico en nosocomial/grave) y **control del foco**. Tras control exitoso, **3-5 días de antibiótico** suelen bastar (estudio STOP-IT).
- **Fascitis necrosante:** **desbridamiento quirúrgico radical inmediato** hasta tejido sangrante sano + antibiótico empírico amplio (carbapenémico o piperacilina-tazobactam + **clindamicina** por efecto antitoxina + vancomicina/linezolid para MRSA) + reexploración programada en 24 h.
- **Prevención de ISQ (paquete OMS/CDC):** clorhexidina alcohólica, antibiótico profiláctico <60 min preincisión, normotermia, control glucémico (<180-200 mg/dL) y desescalada temprana según cultivos.

### Banderas rojas y errores a evitar
- **Esperar imagen para operar fascitis necrosante:** dolor desproporcionado a los hallazgos cutáneos, bulas hemorrágicas, anestesia cutánea, crepitación o choque exigen quirófano inmediato; retrasar >12-24 h dispara la mortalidad.
- **Fiebre persistente a las 48-72 h con antibióticos:** indica foco residual no drenado, colección persistente, resistencia o diagnóstico alternativo; pedir TC dirigida antes de cambiar antibióticos a ciegas.
- **Prolongar antibióticos sin fundamento:** favorece sobreinfección fúngica, colitis por *Clostridioides difficile* y bacterias multidrogorresistentes.`,

  'ap-r1-choque': `El estado de choque es un síndrome de hipoperfusión tisular aguda donde el aporte de oxígeno (DO₂) resulta insuficiente para cubrir la demanda metabólica celular, conduciendo a metabolismo anaerobio, acidosis láctica y disfunción orgánica. **Choque no equivale a hipotensión**: un paciente joven puede mantener presión arterial normal hasta perder 30% de su volemia gracias a vasoconstricción compensadora.

### Criterios y clasificaciones clave
- **Cuatro perfiles fisiopatológicos:**
  - *Hipovolémico/hemorrágico:* precarga (PVC/PCP) baja, gasto cardiaco (GC) bajo, resistencias vasculares sistémicas (RVS) altas.
  - *Distributivo (séptico, anafiláctico, neurogénico):* GC normal/alto (en fase caliente), **RVS bajas**; el neurogénico (lesión medular >T6) cursa con **hipotensión + bradicardia** y piel tibia.
  - *Cardiogénico:* precarga alta, GC bajo, RVS altas.
  - *Obstructivo (neumotórax a tensión, taponamiento cardiaco, TEP masiva):* llenado ventricular impedido, precarga/PVC alta, GC bajo, RVS altas.
- **Choque hemorrágico (ATLS 10.ª ed.):** Clase I (<15% volemia, signos normales), Clase II (15-30%, taquicardia, presión de pulso estrecha, ansiedad), **Clase III (30-40%, hipotensión, taquipnea, oliguria, confusión)** y **Clase IV (>40%, choque profundo, anuria, letargo)**.
- **Metas de perfusión:** PAM **≥65 mmHg**, gasto urinario **≥0.5 mL/kg/h**, depuración de **lactato** (<2 mmol/L), déficit de base en descenso y llenado capilar <3 s.

### Conducta de primera línea
- **Choque hemorrágico:** control inmediato del sangrado (compresión, torniquete, *binder* pélvico, quirófano/embolización), reanimación balanceada **1:1:1** (concentrado eritrocitario, plasma fresco congelado y plaquetas) en hemorragia masiva, **ácido tranexámico 1 g IV en <3 h** (seguido de 1 g en 8 h), calcio ionizado y calentamiento activo; hipotensión permisiva (PAS 80-90 mmHg) hasta hemostasia salvo en TCE.
- **Choque séptico (Surviving Sepsis 2021, *bundle* 1.ª hora):** medir lactato, hemocultivos, antibiótico de amplio espectro en **<1 hora**, cristaloides balanceados **~30 mL/kg** en hipoperfusión y **norepinefrina** de primera línea si PAM <65 mmHg (añadir vasopresina 0.03 U/min como segunda línea) + control urgente del foco.
- **Choque obstructivo:** descompresión pleural inmediata en neumotórax a tensión; pericardiocentesis/ventana en taponamiento; trombólisis o trombectomía en TEP masiva.

### Banderas rojas y errores a evitar
- **Tríada letal (rombo de la muerte):** **hipotermia + acidosis + coagulopatía (+ hipocalcemia)**; perpetúa el sangrado y exige reanimación de control de daños desde el minuto uno.
- **Reanimación excesiva con cristaloides en hemorragia:** diluye factores de coagulación, enfría al paciente y despega el coágulo; ante clase III-IV pasar pronto a hemoderivados.
- **Confiar en la hemoglobina inicial:** en hemorragia aguda la Hb puede ser normal por pérdida proporcional de plasma y eritrocitos; guiar decisiones por clínica, lactato y respuesta a volumen.`,

  'ap-r1-nutricion': `La desnutrición hospitalaria afecta hasta a 30-50% de los pacientes quirúrgicos y constituye un predictor independiente de dehiscencia anastomótica, infección de sitio quirúrgico, ventilación prolongada y mortalidad. Identificar el riesgo desde el ingreso, priorizar siempre la vía enteral cuando el intestino funciona y prevenir el síndrome de realimentación son pilares del manejo quirúrgico moderno (guías ESPEN).

### Criterios y números de corte
- **Tamizaje y diagnóstico:** aplicar **NRS-2002** al ingreso (**≥3 puntos = riesgo nutricional**); confirmar desnutrición con criterios **GLIM** (1 criterio fenotípico: pérdida ponderal >5% en 6 meses o >10% >6 meses, IMC bajo o masa muscular reducida + 1 etiológico: baja ingesta o inflamación).
- **Desnutrición quirúrgica grave (ESPEN):** pérdida ponderal **>10-15% en 6 meses**, IMC **<18.5 kg/m²**, valoración global subjetiva clase C o albúmina <3.0 g/dL sin falla hepática/renal (marcador de riesgo quirúrgico).
- **Requerimientos diarios estándar:** energía **25-30 kcal/kg/día** y proteínas **1.2-1.5 g/kg/día** (hasta **1.5-2.0 g/kg/día** en paciente crítico, politraumatizado, abdomen abierto o gran quemado).
- **Umbral para nutrición parenteral (NPT):** cuando no es factible cubrir >50-60% de requerimientos por vía enteral durante **>5-7 días** (o de inicio temprano si existe desnutrición grave y tubo digestivo no utilizable).

### Conducta de primera línea
- **Regla de oro:** *"si el intestino funciona, úsalo"*. La **nutrición enteral (NE)** preserva el trofismo vellositario, la barrera mucosa y la inmunidad IgA, reduce translocación bacteriana y genera menos infecciones que la NPT.
- **Inicio precoz:** comenzar dieta oral o NE dentro de las **24-48 h** tras cirugía digestiva mayor o ingreso a UCI (salvo choque no controlado con vasopresores crecientes o isquemia intestinal).
- **Prehabilitación e inmunonutrición:** en desnutrición grave previa a cirugía mayor electiva, diferir la cirugía **7-14 días** para soporte nutricional intensivo; en cirugía oncológica digestiva mayor considerar fórmulas con **arginina, ácidos grasos omega-3 y nucleótidos** (5-7 días preoperatorios).
- **Accesos nutricionales:** sonda nasogástrica/nasoyeyunal si el soporte será <4 semanas; **gastrostomía (PEG) o yeyunostomía** si se prevé >4 semanas.

### Banderas rojas y errores a evitar
- **Síndrome de realimentación:** al reintroducir carbohidratos en el desnutrido grave, el pico de insulina mete electrolitos a la célula causando **hipofosfatemia (sello clásico), hipopotasemia, hipomagnesemia y déficit de tiamina** → arritmias, falla cardiaca y respiratoria. Prevenir iniciando a **10-15 kcal/kg/día**, reponiendo **tiamina 100-300 mg/día** antes de la glucosa y midiendo P/K/Mg diarios.
- **Suspender la nutrición por "ruidos intestinales ausentes":** los ruidos no predicen tolerancia enteral; la NE precoz postoperatoria es segura y acorta el íleo.
- **Prescribir sin verificar ingesta real:** vigilar lo que el paciente efectivamente consume y evitar hiperalimentación en NPT (causa esteatosis, hiperglucemia e hipercapnia).`,

  'ap-r1-sangre': `La hemostasia quirúrgica integra la respuesta vascular y plaquetaria (hemostasia primaria), la cascada de coagulación generadora de fibrina (hemostasia secundaria) y la fibrinólisis controlada. El cirujano debe dominar el manejo racional de hemoderivados (*Patient Blood Management*), los protocolos de transfusión masiva, la interpretación funcional con tromboelastografía y la reversión de anticoagulantes antes de operar.

### Criterios y umbrales transfusionales
- **Umbral restrictivo de concentrado eritrocitario (CE):** transfundir con **Hb <7 g/dL** en pacientes estables sin sangrado activo (meta 7-9 g/dL); elevar umbral a **Hb <8 g/dL** en cardiopatía isquémica aguda, cirugía cardiaca/ortopédica mayor o hipoxia sintomática. Cada CE sube Hb ~1 g/dL y Hto ~3%.
- **Umbrales de coagulación y plaquetas:**
  - *Plaquetas:* <10,000/µL profilaxis; **<50,000/µL** en sangrado activo o cirugía mayor; **<100,000/µL** en neurocirugía o cirugía ocular.
  - *Fibrinógeno:* reponer si **<150-200 mg/dL** con hemorragia activa mediante crioprecipitado (1 unidad/10 kg) o concentrado de fibrinógeno.
  - *Plasma fresco congelado (PFC):* indicado en coagulopatía con sangrado activo (INR >1.5-1.8) o dentro del protocolo 1:1:1, **no** para corregir un INR ligeramente elevado sin sangrado.
- **Pruebas viscoelásticas (TEG/ROTEM):** tiempo R prolongado → falta de factores (PFC); ángulo alfa bajo → bajo fibrinógeno (crioprecipitado); amplitud máxima (MA) baja → disfunción/baja plaquetaria; lisis a 30 min (LY30 >3%) → hiperfibrinólisis (ácido tranexámico).

### Conducta de primera línea
- **Protocolo de transfusión masiva (PTM):** activar ante hemorragia exanguinante (puntuación ABC ≥2, necesidad prevista ≥4 CE en 1 h o ≥10 CE en 24 h); administrar relación **1:1:1 (CE:PFC:plaquetas)**, **ácido tranexámico** en <3 h, mantener T° >36 °C, pH >7.2 y **calcio ionizado >1.1 mmol/L** (el citrato de las bolsas quela calcio).
- **Reversión urgente de anticoagulantes:** warfarina → concentrado de complejo protrombínico de 4 factores (CCP-4F) + vitamina K 10 mg IV; heparina no fraccionada → sulfato de protamina (1 mg por cada 100 UI); dabigatrán → idarucizumab; anti-Xa (rivaroxabán/apixabán) → andexanet alfa o CCP-4F.
- **Hemostasia definitiva:** ningún hemoderivado sustituye la ligadura vascular, compresión, empaquetamiento o embolización del sitio sangrante.

### Banderas rojas y errores a evitar
- **Disnea aguda en las primeras 6 horas post-transfusión:** diferenciar **TRALI** (lesión pulmonar aguda inflamatoria, normotensión/hipotensión, sin sobrecarga de volumen; manejo soporte ventilatorio) de **TACO** (edema pulmonar cardiogénico por sobrecarga, hipertensión, BNP alto; responde a diurético y O₂).
- **Reacción hemolítica aguda (incompatibilidad ABO):** fiebre, dolor lumbar, hipotensión, hemoglobinuria y sangrado difuso (CID); **detener la transfusión de inmediato**, mantener vía con salina, verificar etiquetas y notificar al banco de sangre.
- **Omitir el calcio en transfusión masiva:** la hipocalcemia severa empeora la contractilidad miocárdica y la cascada de coagulación.`,

  'ap-r1-trauma': `La atención del politraumatizado sigue el protocolo ATLS (10.ª ed.): evaluación primaria A-B-C-D-E con reanimación simultánea tratando primero lo que mata primero. En el paciente fisiológicamente agotado, la **cirugía de control de daños** sustituye la reparación definitiva para frenar la tríada letal.

### Criterios y números de corte
- **Evaluación primaria A-B-C-D-E:** **A** vía aérea con control cervical (**Glasgow ≤8** = vía aérea definitiva); **B** descartar neumotórax a tensión/abierto, hemotórax masivo y tórax inestable; **C** control de hemorragia, accesos y eFAST; **D** Glasgow, pupilas, glucemia; **E** exposición y evitar hipotermia.
- **Indicaciones quirúrgicas inmediatas:** hemotórax masivo (**>1,500 mL** iniciales o **>200 mL/h** por 2-4 h) → toracotomía; trauma abdominal con choque + eFAST positivo, peritonitis o evisceración → **laparotomía inmediata** (nunca TC).
- **Criterios de control de daños:** T° <35 °C, pH <7.2, déficit de base >−8, coagulopatía o transfusión masiva.
- **Trauma de cuello (zonas I-III):** signos **duros** (sangrado pulsátil, hematoma expansivo, soplo/frémito, déficit neurológico, burbujeo/estridor) → exploración quirúrgica inmediata; signos blandos en estable → angio-TC.

### Conducta de primera línea
- **Neumotórax a tensión:** descompresión inmediata (4.°-5.° EIC LAA en adultos o 2.° EIC LMC) seguida de sonda pleural, **sin esperar radiografía**.
- **Órganos sólidos (hígado/bazo):** en paciente estable sin peritonitis, **manejo no operatorio** guiado por TC contrastada ± angioembolización ante fuga activa (*blush*) o pseudoaneurisma. En inestable: empaquetamiento perihepático/maniobra de Pringle (hígado) o esplenectomía (bazo).
- **Pelvis inestable con choque:** **faja (*binder*) pélvica** sobre trocánteres mayores, empaquetamiento preperitoneal y/o angioembolización; sangre en meato uretral contraindica sondaje a ciegas.
- **Control de daños (3 fases):** 1) laparotomía breve (<60-90 min) para controlar sangrado y contaminación (*shunts* temporales, empaquetamiento, cierre temporal); 2) reanimación en UCI; 3) reoperación definitiva a las 24-48 h.

### Banderas rojas y errores a evitar
- **Llevar al inestable a TC:** la tomografía mata al paciente en choque no controlado; el inestable va a quirófano.
- **Anastomosis primaria en control de daños:** en acidosis, hipotermia y vasopresores las suturas fugan; dejar cabos cerrados para la segunda mirada.
- **Confiar en FAST para retroperitoneo o víscera hueca:** el FAST no descarta lesión duodenal, pancreática ni colónica; reevaluación clínica seriada obligada.`
};
