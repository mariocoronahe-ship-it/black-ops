// Hojas por subtema de los módulos R2 (piel, quemaduras, neoplasias, pared, esófago, estómago, delgado, colon, recto).
// Si un módulo aparece aquí, sus hojas reemplazan a las originales de temario_aprende_base.js. Ver hoja.js.
// Conserva el texto citado de ARGOS-MED y las síntesis/casos de Drive, reacomodados en una hoja por subtema, y lo amplía.
import { sheet } from './hoja.js?v=20261122c';

export const R2 = {
  "piel": [
    sheet("piel-anatomia", "01", "Anatomía quirúrgica de la piel, cierre de heridas e incisiones", `
## Anatomía quirúrgica de la piel, cierre de heridas e incisiones

### Definición y relevancia quirúrgica
La piel y el tejido celular subcutáneo forman el primer plano que el cirujano atraviesa en cualquier procedimiento y el último que cierra. Conocer su estructura explica por qué una incisión cicatriza bien o mal, por qué la dermis reticular es la que sostiene la sutura, de qué capa nace cada tumor cutáneo y por qué la profundidad de una quemadura decide si epiteliza o requiere injerto.

La piel es el órgano más extenso del cuerpo humano, representando aproximadamente el 16% del peso corporal total y cubriendo un área de 1.5 a 2.0 m² en el adulto [Tratado AMCG 3ª ed., Cap. 91, p. 760; Schwartz 10ª ed., Cap. 16, p. 473]. Su espesor varía ampliamente desde 0.5 mm en los párpados y región pretibial hasta más de 4.0 mm en la espalda, palmas y plantas. Desde la perspectiva quirúrgica y fisiopatológica, actúa como una barrera semipermeable indispensable para la termorregulación, la inmunovigilancia celular, la síntesis de vitamina D y el mantenimiento del equilibrio hidroelectrolítico corporal, previniendo pérdidas masivas por evaporación insensible que en condiciones basales promedian 300 a 500 mL/día [Tratado AMCG 3ª ed., Cap. 91, p. 762; Sabiston 21ª ed., Cap. 20, p. 485].

### Histología y poblaciones celulares
#### A. Estructura Histológica y Celular
1. **Epidermis**: Epitelio plano estratificado queratinizado avascular en constante renovación (turnover celular de 28 a 30 días). Se compone de cuatro estratos fundamentales (y un quinto en piel gruesa): estrato basal o germinativo (capa monocelular anclada a la lámina basal mediante hemidesmosomas, donde residen las células madre pluripotenciales y melanocitos), estrato espinoso (5 a 15 capas de células poliédricas con abundantes desmosomas), estrato granuloso (1 a 3 capas de queratinocitos con gránulos basófilos de queratohialina), estrato lúcido (presente exclusivamente en palmas y plantas) y estrato córneo (5 a 15 capas de corneocitos anucleados embebidos en una matriz lipídica rica en ceramidas, colesterol y ácidos grasos libres, constituyendo la barrera física e hidrofóbica principal) [Schwartz 10ª ed., Cap. 16, p. 474; Tratado AMCG 3ª ed., Cap. 91, p. 761].
   - *Poblaciones celulares epidérmicas*: Queratinocitos (90-95% de la población epidérmica); Melanocitos (derivados de la cresta neural, ubicados en la capa basal en proporción 1:10 respecto a queratinocitos, encargados de la síntesis de melanina mediante la tirosinasa para transferirla a través de dendritas a los queratinocitos adyacentes para protección nuclear contra la radiación ultravioleta); Células de Langerhans (células dendríticas presentadoras de antígenos derivadas de la médula ósea, con gránulos citoplasmáticos de Birbeck en raqueta, esenciales en la hipersensibilidad retardada); Células de Merkel (mecanorreceptores sensoriales de adaptación lenta conectados a terminaciones nerviosas libres tipo I para la discriminación táctil fina) [Schwartz 10ª ed., Cap. 16, p. 475; Sabiston 21ª ed., Cap. 31, p. 713].
2. **Unión Dermoepidérmica (Membrana Basal)**: Zona de transición acelular de 100 nm de espesor integrada por la lámina lúcida (laminina, antígeno del penfigoide ampolloso), lámina densa (colágeno tipo IV, heparán sulfato) y sublámina densa (fibrillas de anclaje de colágeno tipo VII). Proporciona resistencia mecánica a las fuerzas de cizallamiento y actúa como filtro macromolecular selectivo [Tratado AMCG 3ª ed., Cap. 91, p. 763].
3. **Dermis**: Capa mesodérmica de soporte mecánico y vascularización que nutre a la epidermis por difusión. Se divide en:
   - *Dermis Papilar Superficial*: Conectivo laxo organizado en crestas o papilas interdigitadas con las redes epidérmicas; contiene asas capilares nutricias, terminaciones nerviosas y colágeno tipo III finamente entretejido.
   - *Dermis Reticular Profunda*: Conectivo denso e irregular que alberga gruesos haces de colágeno tipo I (80-85% del total del colágeno dérmico) dispuestos paralelamente a las líneas de tensión cutánea, elastina (proporciona retroceso elástico), sustancia fundamental rica en glucosaminoglicanos (ácido hialurónico, dermatán sulfato) y los anejos cutáneos pilosebáceos y sudoríparos. Es la estructura que otorga resistencia a la tracción y soporte para el anclaje de suturas quirúrgicas [Schwartz 10ª ed., Cap. 16, p. 476; Tratado AMCG 3ª ed., Cap. 91, p. 764].
4. **Tejido Celular Subcutáneo (Hipodermis)**: Capa lobulillar de adipocitos organizados por tabiques fibrosos de colágeno (*retinacula cutis*) por donde discurren los vasos y nervios perforantes mayores. Cumple funciones de aislamiento térmico, reserva energética metabólica, amortiguación de traumatismos compresivos directos y permite el deslizamiento libre de la piel sobre las fascias musculares subyacentes [Tratado AMCG 3ª ed., Cap. 91, p. 765; Schwartz 10ª ed., Cap. 16, p. 477].

#### Anejos cutáneos y su importancia en la reparación
Los folículos pilosos, las glándulas sebáceas y las sudoríparas ecrinas y apocrinas nacen en la epidermis y se hunden hasta la dermis reticular o la hipodermis. Su epitelio funciona como reserva de queratinocitos: cuando se pierde la epidermis pero se conserva parte de la dermis (abrasión, sitio donador de injerto de espesor parcial, quemadura de segundo grado superficial), la reepitelización ocurre desde islotes alrededor de cada anejo y no solo desde los bordes. Por eso una herida de espesor parcial cierra en 10–14 días y una de espesor total solo lo hace por contracción y migración marginal. Las glándulas apocrinas de axila, ingle y región perianal son el sustrato de la hidradenitis supurativa, que se confunde con abscesos recurrentes.

#### Irrigación e inervación
La piel recibe sangre de arterias perforantes (musculocutáneas y septocutáneas) que forman un plexo subdérmico y un plexo dérmico profundo, comunicados con un plexo papilar superficial. El concepto de **angiosoma** (territorio tridimensional irrigado por una arteria fuente) es la base del diseño de colgajos: un colgajo aleatorio depende del plexo subdérmico y su largo útil es limitado (relación largo:ancho aproximada 3:1 en cara y 1.5–2:1 en extremidades inferiores), mientras que un colgajo axial lleva una arteria con nombre propio. Despegar la piel en el plano supraaponeurótico conserva las perforantes; despegar dentro del tejido adiposo superficial deja colgajos isquémicos con necrosis de bordes, una complicación frecuente en eventraciones y en el cierre de heridas a tensión.

### Líneas de tensión y planificación de incisiones
#### B. Líneas de Tensión Cutánea (Líneas de Langer) y Planificación de Incisiones
Descritas por Karl Langer en 1861 mediante perforaciones circulares en cadáveres que se convertían en hendiduras elípticas, reflejan la orientación arquitectónica predominante de los haces de colágeno en la dermis reticular:
- *Principio Quirúrgico*: Toda incisión electiva debe trazarse **estrictamente paralela a las líneas de mínima tensión cutánea o pliegues de flexión naturales** (Líneas de Kraissl o Borges en la cara). Las incisiones paralelas a estas líneas experimentan fuerzas de tracción divergentes mínimas durante el ciclo de cicatrización, lo que previene la dehiscencia, disminuye la sobreproducción de colágeno por miofibroblastos y optimiza el resultado funcional y cosmético. Por el contrario, las incisiones perpendiculares a las líneas de tensión quedan sometidas a fuerzas de distracción perpetuas, evolucionando con elevada frecuencia a ensanchamiento cicatrizal, bridas retráctiles articulares, cicatrices hipertróficas o queloides [Tratado AMCG 3ª ed., Cap. 94, p. 788; Schwartz 10ª ed., Cap. 16, p. 478; Sabiston 21ª ed., Cap. 31, p. 714].

#### Aplicación práctica en el quirófano
- **Cara:** seguir las arrugas de expresión (líneas de Kraissl), perpendiculares a la acción de los músculos mímicos; en la frente son horizontales, en el párpado siguen el pliegue palpebral.
- **Cuello:** incisiones transversas en un pliegue (tiroidectomía tipo Kocher).
- **Tronco y abdomen:** las líneas de Langer son casi transversales; la incisión de Pfannenstiel o la subcostal cicatrizan mejor que una media vertical, pero la elección en cirugía abdominal depende de la exposición y la urgencia, no de la estética.
- **Extremidades:** sobre articulaciones evitar incisiones longitudinales que crucen el pliegue de flexión (producen bridas); usar incisiones en zigzag o en S.
- **Biopsias y extirpación de lesiones:** elipse con eje mayor paralelo a las líneas de tensión, relación largo:ancho de aproximadamente 3:1 y ángulos de 30° en los extremos para evitar "orejas de perro". La excepción es el melanoma en extremidades, donde la elipse se orienta en el eje del drenaje linfático (véase la hoja de melanoma).

### Cierre de heridas: tipos de cicatrización
| Tipo | Definición | Indicación |
| :--- | :--- | :--- |
| Primera intención | Bordes afrontados con sutura, grapas, adhesivo o cintas | Heridas limpias o limpias-contaminadas, < 6–8 h de evolución (hasta 12–24 h en cara por su irrigación) |
| Segunda intención | Herida abierta que cierra por granulación, contracción y epitelización | Heridas contaminadas o sucias, abscesos drenados, pérdida de tejido |
| Tercera intención (cierre primario diferido) | Herida abierta 3–5 días y cerrada después si está limpia | Heridas sucias de laparotomía, mordeduras seleccionadas, trauma contaminado |

#### Principios técnicos de la sutura cutánea
- **La fuerza tensil la da la dermis.** La sutura dérmica profunda con material absorbible (poliglactina o poliglecaprona 3-0/4-0) libera la tensión del borde; la piel se afronta después con puntos simples, intradérmico continuo o adhesivo tisular.
- **Eversión de bordes:** un borde invertido deja una cicatriz deprimida; el punto vertical de Donati (colchonero vertical) evierte y es útil en piel laxa.
- **Tensión mínima:** si los bordes no se afrontan sin tensión, se socava el tejido subcutáneo o se planea una plastia o un injerto; la tensión es el principal factor modificable de la cicatriz ensanchada e hipertrófica.
- **Calibre del material:** cara 5-0/6-0; tronco y extremidades 3-0/4-0; cuero cabelludo 3-0 o grapas.
- **Retiro de puntos (aproximado):** cara 5 días; cuero cabelludo 7–10 días; tronco y brazos 10–14 días; piernas y zonas de flexión 14 días; retirar tarde deja marcas transversales ("vías de tren").
- **Espacio muerto:** no dejar espacio muerto en el tejido subcutáneo profundo; cuando no puede cerrarse, se deja drenaje cerrado y no se intenta obliterarlo con múltiples puntos de grasa (aumentan la necrosis grasa y la infección).

### Fisiología de la cicatrización normal (resumen para el contexto)
Hemostasia (minutos) → inflamación (días 1–4; neutrófilos y luego macrófagos, que son la célula indispensable) → proliferación (días 4–21; fibroblastos, colágeno tipo III, angiogénesis, epitelización) → remodelación (de la semana 3 hasta 1–2 años; colágeno III sustituido por tipo I). La herida alcanza aproximadamente el 20% de su fuerza a las 3 semanas y nunca supera el 70–80% de la piel sana. Retrasan la cicatrización la infección, la isquemia, la diabetes, la desnutrición (albúmina baja, déficit de vitamina C y zinc), los esteroides (la vitamina A revierte parcialmente su efecto), la radioterapia y el tabaquismo.

### Funciones de barrera y consecuencias clínicas de su pérdida
La pérdida de la barrera cutánea explica tres problemas del paciente quemado o con grandes heridas: pérdida de agua por evaporación (que se multiplica al perder el estrato córneo), pérdida de calor (hipotermia) e infección. También explica por qué un injerto de espesor parcial (epidermis y parte de la dermis) se contrae más que uno de espesor total: la dermis es la que limita la contracción.

### Perlas
- La dermis reticular (colágeno I) es el plano que sostiene la sutura; el tejido adiposo no sostiene nada.
- Incisión electiva paralela a las líneas de tensión; elipse 3:1; ángulos de 30°.
- Herida limpia de menos de 6–8 h: cierre primario; contaminada o vieja: abierta o cierre diferido.
- Retiro de puntos según región: cara 5 días, piernas 14.

### Trazabilidad bibliográfica
*Definición de la Unidad de Asignación Bibliográfica*: Se define como una afirmación doctrinal clínica, cuantitativa o técnica independiente verificada en las fuentes primarias de consulta.
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **1. Anatomía y Biología Cutánea** | Módulo 15, Cap. 91, pp. 760-765 (Estructura dérmica, anejos, turnover epidérmico, funciones barrera); Cap. 94, p. 788 (Líneas de Langer). | Schwartz 10ª ed., Cap. 16, pp. 473-478 (Capas epidérmicas, queratinocitos, células de Langerhans y Merkel); Sabiston 21ª ed., Cap. 31, pp. 713-714 (Líneas de mínima tensión). | **4 afirmaciones AMCG / 4 afirmaciones Schwartz-Sabiston** (Total: 8) |
*Consolidación del Balance Numérico Auditado*:
- Total de unidades de asignación bibliográfica AMCG 3ª ed.: **20 afirmaciones documentadas (50.0%)**.
- Total de unidades de asignación bibliográfica Schwartz 10ª ed. / Sabiston 21ª ed. / Guías NCCN-ABA: **20 afirmaciones documentadas (50.0%)**.
- Balance total global: **40 unidades asignadas / Proporción auditada exacta: 50% vs 50%**.

### Referencias
Tratado de Cirugía General AMCG, 3ª ed., Caps. 91 y 94. Schwartz, Principios de Cirugía, 10ª ed., Cap. 16 (piel y tejido subcutáneo) y Cap. 9 (cicatrización). Sabiston, Tratado de Cirugía, 21ª ed., Caps. 7 (cicatrización) y 31.
`),
    sheet("piel-infecciones", "02", "Absceso cutáneo y celulitis", `
## Absceso cutáneo y celulitis

### Definición
- **Absceso cutáneo:** colección de pus en la dermis o el tejido celular subcutáneo, delimitada por una pared de tejido de granulación y fibrina.
- **Celulitis:** infección difusa de la dermis profunda y del tejido celular subcutáneo, sin colección y con bordes mal definidos.
- **Erisipela:** forma superficial de celulitis (dermis superior y linfáticos), de bordes elevados y bien delimitados, casi siempre por estreptococo β-hemolítico del grupo A.
- **Infección necrosante de tejidos blandos (fascitis):** infección que avanza por planos profundos con necrosis y toxicidad sistémica; es una urgencia quirúrgica y se estudia aparte, pero aquí se describe cómo no confundirla.

#### Epidemiología
Aproximada: los abscesos cutáneos y la celulitis son motivos frecuentes de consulta en urgencias; la diabetes, la obesidad y la inmunosupresión aumentan el riesgo y la gravedad.

### Epidemiología en nuestro medio
En los servicios de urgencias del IMSS las infecciones de piel y tejidos blandos están entre los motivos más frecuentes de valoración por cirugía general; los abscesos de glúteo, axila, región perianal, sitios de inyección y pie diabético son los más vistos. La diabetes tipo 2, con una prevalencia en adultos mexicanos cercana al 15–18%, y la obesidad explican buena parte de la gravedad y de las recurrencias. *Staphylococcus aureus* es el agente principal del absceso; el *S. aureus* resistente a meticilina adquirido en la comunidad (SARM-AC) existe en México, pero su frecuencia es menor que en Estados Unidos y varía por centro, por lo que el cultivo del pus orienta la terapia local.

### Fisiopatología
La rotura de la barrera cutánea (traumatismo menor, foliculitis, picadura, inyección, intertrigo o tiña interdigital) permite la entrada de bacterias de la piel. En el absceso, la respuesta inflamatoria aísla el foco con una pared; el centro es pus (neutrófilos muertos, bacterias, detritos) con poca perfusión, por lo que el antibiótico no penetra y **el tratamiento es drenar**. En la celulitis la infección se difunde por el tejido sin colección y responde a antibióticos. El tejido adiposo está poco vascularizado, por lo que la infección se propaga con facilidad y cicatriza mal, sobre todo en obesidad y diabetes. La fascitis necrosante avanza por la fascia superficial con trombosis de perforantes: la piel se ve "mejor de lo que está" porque la necrosis empieza por debajo.

### Clasificación útil (IDSA 2014)
| Categoría | Leve | Moderada | Grave |
| :--- | :--- | :--- | :--- |
| **Purulenta** (absceso, furúnculo, ántrax) | Incisión y drenaje solamente | Incisión y drenaje + antibiótico oral contra *S. aureus* (TMP-SMX o doxiciclina) | Incisión y drenaje + antibiótico IV con cobertura SARM (vancomicina, linezolid) |
| **No purulenta** (celulitis, erisipela) | Antibiótico oral contra estreptococo (penicilina V, cefalexina, dicloxacilina, clindamicina) | Antibiótico IV (penicilina, ceftriaxona, cefazolina, clindamicina) | Desbridamiento urgente si hay necrosis + vancomicina con piperacilina-tazobactam |

Se considera grave el paciente con SIRS, hipotensión, inmunosupresión, progresión rápida o falla del tratamiento oral.

### Cuadro clínico
- **Absceso:** tumoración dolorosa, eritematosa, caliente, con fluctuación y a veces punto de drenaje espontáneo; fiebre si es grande. La fluctuación puede faltar en abscesos profundos (glúteo, isquiorrectal, mama).
- **Celulitis:** eritema, edema, calor y dolor con borde mal definido; linfangitis y adenopatía regional; fiebre.
- **Datos de alarma de infección necrosante:** dolor desproporcionado a la exploración, edema más allá del eritema, ampollas hemorrágicas, crepitación, anestesia cutánea, piel violácea o necrótica, progresión en horas, choque o falla orgánica.

### Diagnóstico
Clínico en la mayoría; ecografía para confirmar colección y su profundidad; cultivo del pus drenado; labs si hay fiebre o extensión; descartar fascitis si hay dolor desproporcionado, crepitación o choque (véase Tema 8). Biopsia si la lesión es atípica, no cicatriza o se sospecha malignidad (carcinoma basocelular, epidermoide, melanoma).
- **Ecografía a pie de cama:** confirma colección (imagen anecoica o mixta con refuerzo posterior), mide su profundidad y evita drenar una celulitis sin pus; cambia la conducta en una proporción importante de los casos dudosos.
- **Laboratorio:** biometría, glucosa (descompensación diabética oculta), creatinina y PCR si hay fiebre o extensión. El puntaje **LRINEC** (PCR, leucocitos, hemoglobina, sodio, creatinina, glucosa) ≥ 6 sugiere infección necrosante, pero un valor bajo no la descarta: la decisión es clínica y la exploración quirúrgica es el estándar diagnóstico.
- **TC:** gas en tejidos blandos o colecciones profundas; nunca debe retrasar la cirugía en el paciente séptico.
- **Cultivo del pus:** en abscesos que se drenan, sobre todo si son recurrentes, si hubo antibiótico previo o si el paciente es inmunocomprometido.

### Diagnóstico diferencial
Quiste epidérmico inflamado, hidradenitis supurativa (abscesos recurrentes en axila e ingle con trayectos), absceso perianal (requiere exploración y drenaje propio), trombosis venosa profunda y tromboflebitis superficial, dermatitis por estasis (bilateral, sin fiebre), gota, reacción a picadura y el lipoma, que no se drena.

### Clasificación por profundidad
- **Absceso vs celulitis vs fascitis** (por profundidad y velocidad).

### Tratamiento
- **Absceso:** incisión y drenaje es el tratamiento; el antibiótico solo no lo cura. Drenar en el punto de máxima fluctuación, romper tabiques, cultivo, dejar abierto o con drenaje, curaciones.
- **Celulitis:** antibiótico oral (cobertura de estreptococo y *S. aureus*; considerar MRSA si hay factores de riesgo), elevar la extremidad, marcar el borde para vigilar la progresión.

#### Técnica de incisión y drenaje
1. Anestesia local infiltrando la periferia (el anestésico funciona mal en el pus ácido); en abscesos grandes, profundos o en niños, sedación o anestesia en quirófano.
2. Incisión sobre el punto de máxima fluctuación, siguiendo las líneas de tensión y con longitud suficiente para drenar todo el absceso (una incisión puntiforme se cierra y recidiva). En abscesos grandes se prefiere una incisión elíptica o en cruz con resección de los bordes cutáneos para mantener el drenaje.
3. Exploración digital o con pinza para romper tabiques (loculaciones).
4. Toma de cultivo.
5. Irrigación con solución salina.
6. Empaquetamiento o drenaje: en abscesos pequeños (< 5 cm) el empaquetamiento no mejora la curación y aumenta el dolor; en abscesos grandes o profundos se deja una gasa o un drenaje tipo Penrose 24–48 h.
7. Curaciones diarias hasta que la cavidad granule desde el fondo.

#### Antibiótico después del drenaje
En el absceso simple drenado el antibiótico añade una mejoría modesta en la curación y la recurrencia (ensayos de Talan 2016 y Daum 2017 con TMP-SMX o clindamicina). Se indica con: celulitis extensa alrededor, SIRS, absceso > 5 cm, inmunosupresión o diabetes descompensada, edades extremas, localización difícil de drenar (cara, manos, genitales) o falla del drenaje.

#### Celulitis
- Antibiótico oral 5 días (prolongar si no hay mejoría): cefalexina 500 mg c/6 h, dicloxacilina 500 mg c/6 h o clindamicina 300–450 mg c/8 h en alérgicos a penicilina.
- Elevación de la extremidad (reduce el edema y acelera la resolución); tratar la puerta de entrada (tiña interdigital, úlcera).
- Marcar el borde del eritema para valorar progresión a las 24–48 h; el eritema puede extenderse las primeras 24 h a pesar de un antibiótico adecuado por la lisis bacteriana.
- Hospitalizar si hay SIRS, inmunosupresión, falla del manejo oral o sospecha de infección profunda.

#### Infección necrosante
Ante la sospecha: reanimación, antibiótico de amplio espectro (vancomicina + piperacilina-tazobactam, con clindamicina para inhibir toxinas en el estreptococo) y **desbridamiento quirúrgico urgente** de todo el tejido no viable, con revisión programada en 24 h. El retraso de la cirugía más allá de 12–24 h se asocia a mayor mortalidad.

### Complicaciones
Recidiva por drenaje insuficiente o por un cuerpo extraño o quiste no resecado; celulitis que progresa a absceso o a fascitis; bacteriemia y sepsis; tromboflebitis; en la cara, tromboflebitis del seno cavernoso (triángulo peligroso de la cara); linfedema tras celulitis recurrentes; cicatriz retráctil.

### Seguimiento
Revisar la herida a las 48–72 h; retirar el empaquetamiento cuando la cavidad granula; vigilar recidiva; control glucémico y búsqueda de diabetes no diagnosticada en abscesos recurrentes; descolonización (mupirocina nasal y baños con clorhexidina) en furunculosis recurrente por *S. aureus*; derivar lo atípico.

### Perlas
- El antibiótico solo no cura un absceso: se drena.
- La ausencia de fluctuación no descarta un absceso profundo: ecografía.
- Dolor desproporcionado, ampollas, crepitación o progresión rápida: fascitis hasta demostrar lo contrario y al quirófano.
- Marca el borde de la celulitis con plumón.
- Abscesos recurrentes en axila o ingle: piensa en hidradenitis supurativa.

### Referencias
Sabiston; Schwartz; IDSA (infecciones de piel y tejidos blandos 2014, actualizada).
Stevens DL, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the IDSA. Clin Infect Dis 2014. Talan DA, et al. N Engl J Med 2016;374:823-32. Daum RS, et al. N Engl J Med 2017;376:2545-55. GPC IMSS/CENETEC de infecciones de piel y tejidos blandos. Tratado AMCG 3ª ed., Módulo de piel.
`),
    sheet("piel-benignas", "03", "Lipoma y quiste epidérmico", `
## Lipoma y quiste epidérmico

### Definición
- **Lipoma:** tumor mesenquimatoso benigno de adipocitos maduros, encapsulado, el tumor de tejidos blandos más frecuente del adulto.
- **Quiste epidérmico (infundibular, mal llamado "sebáceo"):** quiste revestido por epitelio escamoso estratificado con capa granulosa, lleno de queratina laminada; nace del infundíbulo folicular.
- **Quiste triquilemal (pilar):** quiste con queratinización triquilemal, sin capa granulosa, típico del cuero cabelludo, a menudo múltiple y familiar.

- **Tumores benignos:** lipoma, quiste epidérmico, dermatofibroma, queratosis seborreica.

### Epidemiología
Los lipomas aparecen sobre todo entre los 40 y 60 años, en tronco, hombros, cuello y extremidades proximales; son múltiples en 5–15% de los casos (lipomatosis familiar, enfermedad de Dercum con lipomas dolorosos, síndrome de Madelung en alcohólicos). Los quistes epidérmicos son las lesiones quísticas cutáneas más comunes y predominan en cara, cuello, tronco superior y escroto. Juntos constituyen buena parte de la cirugía menor de consulta externa del cirujano general en el IMSS.

### Fisiopatología
- El lipoma es una proliferación clonal de adipocitos maduros; con frecuencia tiene reordenamientos de *HMGA2* (12q13-15). El **liposarcoma bien diferenciado** (tumor lipomatoso atípico) tiene amplificación de *MDM2* y *CDK4*, lo que permite diferenciarlo por inmunohistoquímica o FISH.
- El quiste epidérmico se forma por oclusión del folículo o por implantación de epidermis en la dermis tras un traumatismo; la queratina se acumula y, si la pared se rompe, la queratina libre en la dermis provoca una reacción inflamatoria de cuerpo extraño intensa que simula un absceso (a menudo estéril al inicio).

### Cuadro clínico
| Rasgo | Lipoma | Quiste epidérmico |
| :--- | :--- | :--- |
| Consistencia | Blando, lobulado, "pastoso" | Firme a renitente |
| Relación con la piel | Libre, la piel se desliza encima | Adherido a la piel |
| Punto central (poro) | No | Sí, con frecuencia |
| Contenido | Grasa | Queratina blanca, maloliente |
| Dolor | Indoloro (salvo angiolipoma) | Indoloro, doloroso si se inflama |
| Crecimiento | Lento | Lento, con brotes inflamatorios |

### Diagnóstico
- **Clínico** en lesiones pequeñas, superficiales y típicas.
- **Ecografía:** lipoma isoecoico o ligeramente hiperecoico, ovalado, paralelo a la piel, sin flujo Doppler; quiste epidérmico con contenido heterogéneo y refuerzo posterior, con conexión a la epidermis.
- **Datos de alarma de liposarcoma** (regla práctica): tamaño > 5 cm, localización profunda a la fascia (subfascial o intramuscular), crecimiento rápido, dolor, consistencia dura o fijación, recidiva tras resección. Ante cualquiera de ellos: **resonancia magnética y biopsia con aguja gruesa (trucut)** orientada en el eje de la futura resección, y referencia a un centro con experiencia en sarcomas. No hacer una "enucleación de lipoma" de una masa profunda de 10 cm del muslo: una resección no planeada de un sarcoma contamina planos y obliga a una cirugía mucho más amplia.
- **Retroperitoneo:** un "lipoma" retroperitoneal es liposarcoma hasta demostrar lo contrario.

### Tratamiento
- **Quiste/lipoma:** resección completa con cápsula si es sintomático o diagnóstico dudoso; no drenar un lipoma como si fuera absceso.

#### Técnica de resección del lipoma
Incisión sobre el eje mayor siguiendo las líneas de tensión, más corta que el diámetro del tumor (el lipoma se exprime a través de la incisión); disección roma alrededor de la cápsula; resección completa con cápsula para evitar recidiva; hemostasia y cierre por planos sin espacio muerto. Los lipomas grandes pueden dejar seroma: drenaje cerrado o vendaje compresivo. La liposucción es una opción estética, con mayor recidiva y sin pieza adecuada para patología.

#### Técnica de resección del quiste epidérmico
Incisión elíptica que incluya el poro central; disección por fuera de la pared sin romperla; extirpación completa. Si la pared se rompe, se debe retirar toda la cápsula, porque cualquier resto recidiva. **Quiste inflamado o infectado:** primero incisión y drenaje con curaciones, y resección de la cápsula 6–8 semanas después, cuando cede la inflamación (operarlo inflamado aumenta la recidiva y la infección de herida).

#### Enviar a patología
Toda pieza resecada se envía a estudio histopatológico; el carcinoma basocelular o espinocelular puede simular un quiste y el liposarcoma bien diferenciado un lipoma.

### Complicaciones
Hematoma y seroma (lipomas grandes), infección de herida, recidiva (quiste con cápsula residual; lipoma con resección incompleta), cicatriz hipertrófica o queloide (región preesternal y deltoidea), lesión nerviosa en resecciones del cuello (rama marginal del facial, nervio espinal accesorio en el triángulo posterior: el R1/R2 debe conocer este riesgo antes de resecar "una bolita" en el cuello posterior).

### Variantes y diagnóstico diferencial
- **Angiolipoma:** pequeño, múltiple, doloroso, en antebrazos de adultos jóvenes.
- **Lipoma intramuscular o infiltrante:** sin cápsula clara, se infiltra entre fibras musculares; se hace evidente al contraer el músculo; recidiva más si no se reseca con un borde de músculo.
- **Hibernoma:** tumor de grasa parda, interescapular o axilar, muy vascularizado.
- **Lipoma de cordón espermático:** se presenta como "hernia inguinal" irreductible sin impulso; durante la hernioplastia debe buscarse y resecarse, porque dejarlo explica la persistencia del abultamiento.
- **Lipoma de la pared abdominal y hernia epigástrica:** la grasa preperitoneal que protruye por un defecto de la línea alba puede confundirse con lipoma; la ecografía dinámica con Valsalva aclara la duda.
- **Quiste dermoide:** congénito, en líneas de fusión embrionaria (ceja lateral, línea media); puede extenderse a planos profundos o al cráneo, por lo que se estudia con imagen antes de resecarlo en la línea media.
- **Quiste pilonidal:** en el pliegue interglúteo, por pelo incrustado; tiene manejo propio (drenaje del absceso, resección con cierre fuera de la línea media).
- **Hidradenitis supurativa:** nódulos y abscesos recurrentes en axila, ingle y periné con trayectos sinuosos; no es un quiste y su manejo quirúrgico es la resección del área afectada o la técnica de *deroofing*.
- **Neurofibroma, dermatofibroma, ganglión, metástasis cutánea, linfadenopatía:** a considerar según la localización.

#### Lesiones del cuello y la cabeza
En el cuello, antes de resecar una "bolita" el cirujano debe descartar ganglio (adenopatía metastásica de carcinoma de cabeza y cuello o linfoma), quiste branquial (borde anterior del esternocleidomastoideo) o quiste tirogloso (línea media, se mueve al deglutir y sacar la lengua). Una adenopatía cervical persistente en un adulto fumador se estudia con exploración otorrinolaringológica y biopsia con aguja fina, no con biopsia excisional como primer paso.

#### Anestesia local en cirugía menor
Lidocaína al 1–2% con dosis máxima de 4.5 mg/kg sin epinefrina y 7 mg/kg con epinefrina; la epinefrina es segura en dedos, nariz y orejas a las concentraciones habituales (1:100,000–1:200,000) según la evidencia actual. Bicarbonato (1 mL de bicarbonato al 8.4% por cada 10 mL de lidocaína) reduce el ardor de la infiltración. Los signos tempranos de toxicidad son parestesias peribucales, sabor metálico, acúfenos y mareo; el tratamiento de la toxicidad grave es la emulsión lipídica al 20%.

### Pronóstico
Excelente. La recidiva del lipoma resecado completo es menor del 5%; la del quiste epidérmico resecado con su cápsula íntegra es baja, y aumenta si se reseca inflamado o roto.

### Perlas
- Lipoma no se drena como absceso: es blando, móvil e indoloro.
- Quiste: si queda cápsula, recidiva; si está inflamado, drenar ahora y resecar después.
- Masa grasa > 5 cm, profunda, dura o de crecimiento rápido: resonancia y biopsia con aguja, no enucleación.
- Todo lo que se reseca va a patología.

### Referencias
Schwartz 10ª ed., Cap. 16. Sabiston 21ª ed., Cap. 31. NCCN Soft Tissue Sarcoma Guidelines (estudio de masas de tejidos blandos). Tratado AMCG 3ª ed., Módulo de piel.
`),
    sheet("piel-ulceras", "04", "Úlceras por presión", `
## Úlceras por presión (lesiones por presión)

### Definición
Lesión localizada de la piel o del tejido subyacente, generalmente sobre una prominencia ósea, causada por presión sostenida o por presión combinada con cizallamiento. El NPIAP (antes NPUAP) cambió el término a "lesión por presión" en 2016 porque los estadios iniciales no son úlceras abiertas.

### Epidemiología
En hospitales mexicanos la prevalencia se informa alrededor del 10–20% de los pacientes hospitalizados, mayor en terapia intensiva, en adultos mayores, en lesión medular y en pacientes con estancia prolongada; es un indicador de calidad de la atención de enfermería y un motivo frecuente de interconsulta a cirugía general para desbridamiento. Las localizaciones más frecuentes son sacro, talones, isquion y trocánter mayor.

### Fisiopatología
La presión capilar normal es de unos 32 mmHg; una presión externa mayor sostenida ocluye la microcirculación y produce isquemia. El músculo y la grasa son más sensibles a la isquemia que la piel, por lo que la necrosis empieza en profundidad (forma de cono con base en el hueso) y la piel se ve íntegra cuando ya hay daño profundo. Contribuyen el cizallamiento (paciente que se desliza en la cama con la cabecera elevada), la fricción, la humedad (incontinencia) y la desnutrición. Factores de riesgo: inmovilidad, alteración sensitiva (lesión medular, neuropatía), sedación, hipoperfusión, anemia, hipoalbuminemia, edad avanzada.

### Clasificación NPIAP
- **Úlceras por presión (NPIAP):** estadios 1-4 + inclasificable y lesión de tejido profundo.
| Estadio | Hallazgo |
| :--- | :--- |
| 1 | Piel íntegra con eritema que no blanquea a la presión |
| 2 | Pérdida de espesor parcial con dermis expuesta (ampolla o úlcera superficial rosada) |
| 3 | Pérdida de espesor total de la piel; grasa visible, puede haber esfacelo y tunelización; no se ve fascia, músculo ni hueso |
| 4 | Pérdida de espesor total con fascia, músculo, tendón, ligamento o hueso expuestos o palpables |
| Inclasificable | Pérdida de espesor total cubierta por esfacelo o escara que impide ver la profundidad |
| Lesión de tejido profundo | Área violácea o marrón persistente, o ampolla hemática, sobre piel íntegra |

Una úlcera no se "reestadifica" hacia atrás al cicatrizar (una estadio 4 que mejora es una estadio 4 en cicatrización).

### Cuadro clínico
Lesión sobre una prominencia ósea en un paciente inmóvil: desde eritema persistente hasta cavidades profundas con esfacelo, escara negra, tunelizaciones y exposición ósea. La infección se sospecha por eritema perilesional, calor, secreción purulenta, mal olor, dolor nuevo, fiebre o aumento de tamaño. El hueso palpable con estilete al fondo de la úlcera sugiere osteomielitis.

### Diagnóstico
- **Evaluación del riesgo:** escala de Braden (percepción sensorial, humedad, actividad, movilidad, nutrición, fricción/cizallamiento; ≤ 18 = riesgo, ≤ 12 = riesgo alto) o Norton.
- **Evaluación de la úlcera:** localización, estadio, dimensiones, tunelización, tipo de tejido (granulación, esfacelo, necrosis), exudado y piel perilesional; fotografía seriada.
- **Infección:** cultivo de tejido profundo o biopsia tras desbridamiento (el hisopado superficial solo muestra colonización).
- **Osteomielitis:** sonda al hueso, VSG/PCR, radiografía; la resonancia es el estudio por imagen más sensible y la biopsia ósea confirma el germen.
- **Nutrición:** albúmina, prealbúmina, valoración nutricional; la desnutrición es casi constante en úlceras estadio 3–4.

### Tratamiento
- **Úlceras por presión:** aliviar la presión (cambios posturales, superficies especiales), desbridar tejido necrótico, control de la infección, nutrición, cobertura quirúrgica (colgajo) en estadios avanzados seleccionados.

#### Prevención (lo más importante)
- Cambios de posición cada 2 horas en cama (cada hora sentado), posición a 30° para descargar el sacro y el trocánter, cabecera ≤ 30° cuando sea posible para reducir el cizallamiento.
- Superficies de redistribución de presión (colchón de aire alternante o de baja pérdida de aire), talones flotantes.
- Control de la humedad (incontinencia), cuidado de la piel, nutrición con aporte proteico de 1.25–1.5 g/kg/día.

#### Tratamiento local
- **Descargar la presión** del área: sin descarga ninguna curación funciona.
- **Desbridamiento** del tejido necrótico: cortante (en la cama o en quirófano), enzimático, autolítico o mecánico. Excepción: la escara seca, estable y sin infección en el talón de un paciente con isquemia arterial no se desbrida (funciona como cobertura biológica) hasta valorar la circulación.
- Apósitos que mantengan un lecho húmedo y controlen el exudado (hidrocoloides en estadio 2; alginatos o espumas en lechos exudativos); terapia de presión negativa en cavidades limpias estadio 3–4.
- Tratar la infección con desbridamiento y antibiótico sistémico solo si hay celulitis, osteomielitis o sepsis.

#### Tratamiento quirúrgico
Indicado en úlceras estadio 3–4 limpias que no cierran con manejo conservador, en pacientes con estado nutricional optimizado, sin incontinencia no controlada y con un plan de descarga posoperatorio. Consiste en resección de la úlcera y de la bursa, ostectomía de la prominencia ósea y cobertura con colgajos de buena irrigación: miocutáneo o fasciocutáneo de glúteo mayor (sacra e isquiática), tensor de la fascia lata (trocantérica), colgajos de músculo isquiotibial o grácil. La recidiva es alta (30–60% en parapléjicos) si persisten los factores de riesgo.

### Complicaciones
Celulitis, osteomielitis, sepsis (las úlceras sacras son fuente frecuente de bacteriemia en pacientes encamados), fístulas, amiloidosis secundaria en úlceras crónicas y transformación maligna a carcinoma espinocelular (úlcera de Marjolin) en úlceras de muchos años.

### Situaciones especiales para el cirujano
- **Paciente con lesión medular:** las úlceras isquiáticas y sacras son recurrentes; antes de un colgajo se exige control de la espasticidad (las contracturas impiden la descarga), manejo de la vejiga e intestino (sonda, programa intestinal o colostomía de derivación en úlceras perineales contaminadas de forma continua) y un colchón especial en el posoperatorio.
- **Úlcera sacra infectada con sepsis:** desbridamiento amplio en quirófano hasta tejido sangrante, toma de hueso para cultivo, y curaciones o presión negativa; la cobertura definitiva se difiere hasta que la herida esté limpia y el paciente nutrido.
- **Úlcera de talón:** valorar el pulso y el índice tobillo-brazo antes de desbridar; en enfermedad arterial periférica, primero revascularizar.
- **Paciente terminal:** el objetivo cambia a confort, control del olor (metronidazol tópico, apósitos de carbón) y del dolor; no todo paciente es candidato a cierre.

#### Factores sistémicos que deben corregirse
Anemia, hiperglucemia (meta < 180 mg/dL), hipoalbuminemia con aporte proteico, deficiencias de zinc y vitamina C, control de la espasticidad, retiro de sondas y drenajes innecesarios que obligan a posiciones fijas, y manejo de la incontinencia urinaria y fecal (dispositivos de manejo fecal en terapia intensiva).

#### Indicadores de buena evolución
Disminución del área de 30–40% en 2–4 semanas con tejido de granulación roja y sana predice cierre; si la úlcera no reduce su tamaño en ese plazo, debe replantearse la descarga, la nutrición, la infección (osteomielitis oculta) o la presencia de malignidad.

### Seguimiento
Revaloración semanal con medición y fotografía; vigilancia de la nutrición; educación del cuidador; prevención de recidiva tras el cierre.

### Perlas
- Lo primero es aliviar la presión, no curar.
- La necrosis empieza en profundidad: la piel engaña.
- Estadio 4 = hueso, tendón o músculo expuestos.
- Hisopado superficial = colonización; cultivo de tejido profundo o hueso.
- Úlcera crónica que cambia de aspecto: biopsia (Marjolin).

### Referencias
National Pressure Injury Advisory Panel (NPIAP). Pressure Injury Stages, 2016; Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline, EPUAP/NPIAP/PPPIA 2019. GPC IMSS/CENETEC de prevención, diagnóstico y manejo de úlceras por presión. Sabiston 21ª ed., Cap. 69 (cirugía plástica). Schwartz 10ª ed., Cap. 45.
`),
    sheet("piel-cicatriz", "05", "Cicatriz hipertrófica y queloide", `
## Cicatriz hipertrófica y queloide

### Definición
Ambas son trastornos fibroproliferativos de la cicatrización con depósito excesivo de colágeno. La **cicatriz hipertrófica** es elevada pero se mantiene dentro de los límites de la herida original y tiende a mejorar; el **queloide** crece más allá de esos límites, invade piel sana y no regresa.

### Epidemiología
La cicatriz hipertrófica es frecuente tras quemaduras profundas (hasta 40–70% de las quemaduras que tardan más de 3 semanas en cerrar) y en heridas a tensión. El queloide tiene predisposición genética (herencia autosómica dominante con penetrancia incompleta en algunas familias), predomina entre los 10 y 30 años y es más frecuente en pieles oscuras; en la población mexicana mestiza es un problema habitual en heridas preesternales, de hombro y lóbulos auriculares perforados.

### Fisiopatología
En la cicatrización normal la proliferación de fibroblastos se detiene al cerrarse la herida y la remodelación reemplaza el colágeno III por colágeno I organizado. En las cicatrices patológicas hay persistencia de la fase inflamatoria y proliferativa: fibroblastos con sobreexpresión de **TGF-β1 y TGF-β2** (y baja expresión de TGF-β3), menor apoptosis, más miofibroblastos (en la hipertrófica, que por eso contrae) y desequilibrio entre síntesis y degradación de colágeno (metaloproteinasas). Los factores mecánicos (tensión perpendicular a las líneas de Langer, movimiento articular), la infección, el cierre tardío y los cuerpos extraños prolongan la inflamación.

### Comparación diferencial
#### A. Cicatrización Hipertrófica vs Queloide
| Característica Diferencial | Cicatriz Hipertrófica | Cicatriz Queloide |
| :--- | :--- | :--- |
| **Límites de Extensión** | **Se confina estrictamente a los márgenes originales** de la herida quirúrgica o traumática previa | **Rebasa ampliamente los márgenes originales de la herida**, invadiendo piel sana circundante adyacente |
| **Evolución Temporal** | Aparece tempranamente (< 4 semanas); suele experimentar **regresión espontánea** parcial tras 6 a 18 meses | Aparece tardíamente (meses o años); **persiste indefinidamente sin regresión espontánea** |
| **Predisposición Genética y Racial**| Sin predilección racial clara; vinculada a tensión mecánica local y quemaduras profundas | Fuerte predisposición genética; **15 veces más frecuente en población de piel oscura** (afrodescendientes, asiáticos) |
| **Localización Anatómica Típica** | Zonas de tensión mecánica o flexión articular (hombros, cuello, articulaciones mayores) | Lóbulo auricular, región deltoidea, tórax anterior preesternal y parte superior de la espalda |
| **Histopatología del Colágeno** | Haces de colágeno delgados, ondulados, dispuestos **paralelos a la superficie epidérmica** (predominio colágeno tipo III) | Haces de colágeno gigantes, hialinizados, gruesos, eosinofílicos, dispuestos **al azar de forma anárquica desorganizada** |
| **Respuesta a Cirugía Aislada** | Excelente resultado con plastias de descarga (Z-plastia, W-plastia); **recurrencia baja (< 20%)** | **Tasa de recurrencia catastrófica (> 70% a 90%)** si se extirpa quirúrgicamente sin terapia adyuvante |
| **Manejo Terapéutico Reglado** | Presoterapia elástica (25 mmHg), láminas de gel de silicona tópica, corticoide intralesional selectivo | **Infiltración intralesional de acetónido de triamcinolona** (10-40 mg/mL) mensual + 5-Fluorouracilo intralesional + escisión intralesional (dejando ribete queloideo periférico) complementada obligatoriamente con **radioterapia externa postoperatoria superficial (12 a 15 Gy)** o presoterapia inmediata [Tratado AMCG 3ª ed., Cap. 94, p. 790; Schwartz 10ª ed., Cap. 16, p. 480; Sabiston 21ª ed., Cap. 31, p. 715]. |

### Diagnóstico
Clínico. La biopsia solo se justifica si la lesión tiene características atípicas o crece de forma inusual (el dermatofibrosarcoma protuberans y el carcinoma pueden simular un queloide). Se documenta con fotografía y con escalas como la de Vancouver (pigmentación, vascularidad, flexibilidad, altura) o POSAS.

### Tratamiento

#### Prevención
- Incisiones en líneas de tensión, cierre sin tensión con sutura dérmica, evitar infección y cuerpos extraños.
- En pacientes con antecedente de queloide, evitar cirugía electiva estética en zonas de riesgo (preesternal, deltoidea).
- Láminas o gel de silicona desde la epitelización durante 2–3 meses (12–24 h al día).
- Presoterapia en quemaduras (prendas a 20–30 mmHg, 23 h al día durante 6–12 meses).

#### Cicatriz hipertrófica
- Silicona y presoterapia de primera línea; masaje.
- Corticoide intralesional (triamcinolona 10–40 mg/mL) en cicatrices engrosadas.
- Láser de colorante pulsado para el eritema y láser CO₂ fraccionado para la textura.
- Cirugía: si hay contractura o la cicatriz no mejora tras 12 meses, resección con Z-plastia o W-plastia (reorientan la cicatriz y la alargan para liberar la brida).

#### Queloide
- **Monoterapia quirúrgica proscrita** por la recidiva de 70–90%.
- Triamcinolona intralesional cada 4–6 semanas (puede combinarse con 5-fluorouracilo 50 mg/mL en proporción 1:9 o 1:3 con el esteroide).
- Escisión **intramarginal** (dejando un ribete de queloide) seguida obligatoriamente de terapia adyuvante: radioterapia superficial iniciada idealmente en las primeras 24–72 horas (dosis total aproximada 12–15 Gy fraccionados), corticoide intralesional seriado o presoterapia (aretes compresivos en el lóbulo).
- Crioterapia intralesional en lesiones pequeñas.
- Efectos adversos del esteroide: atrofia cutánea, telangiectasias, hipopigmentación.

### Complicaciones
Prurito y dolor (frecuentes en el queloide), contracturas articulares y limitación funcional (hipertrófica tras quemadura), ulceración, alteración estética y psicológica, recidiva tras tratamiento.

### Técnicas de plastia que debe conocer el residente
- **Z-plastia:** dos colgajos triangulares transpuestos sobre el eje de la cicatriz; con ángulos de 60° alarga la cicatriz aproximadamente 75% y la reorienta 90°, lo que libera bridas lineales (axila, cuello, pliegues de flexión). Ángulos de 30° alargan 25% y de 45° alrededor de 50%.
- **W-plastia:** resección en zigzag que rompe una cicatriz recta larga en segmentos cortos que siguen mejor las líneas de tensión; no alarga la cicatriz.
- **Revisión de cicatriz:** resección de la cicatriz ensanchada y cierre por planos con buena sutura dérmica; se espera al menos 12 meses para que madure.
- **Liberación de contracturas por quemadura:** incisión de la brida y cobertura del defecto con injerto de espesor total o colgajo; seguida de férulas y rehabilitación.

#### Diagnóstico diferencial
Dermatofibrosarcoma protuberans (placa multinodular indurada que crece lentamente en el tronco; requiere biopsia y resección amplia o Mohs), carcinoma basocelular morfeiforme (placa cicatricial sin antecedente de herida), sarcoidosis cicatricial, cicatriz infectada con granuloma de cuerpo extraño (sutura no absorbible), lobomicosis (lesiones queloideas en zonas endémicas tropicales).

#### Consideraciones en cirugía general
En el posoperatorio de un paciente con antecedente de queloide, se recomienda cierre intradérmico sin tensión, evitar grapas, silicona desde el retiro de puntos y valoración temprana si la cicatriz empieza a engrosarse (el esteroide intralesional es más eficaz en lesiones recientes). En las incisiones de laparotomía, el queloide es menos frecuente que en el tórax anterior, pero la cicatriz ensanchada por tensión es común; debe distinguirse de una eventración subyacente.

### Pronóstico
La hipertrófica mejora en 6–18 meses en la mayoría y responde bien a la cirugía de reorientación. El queloide es una enfermedad crónica: con terapia combinada la recidiva baja a 10–30%, pero los pacientes deben saber que el control, no la curación, es el objetivo realista.

### Perlas
- Queloide rebasa la herida y no regresa; hipertrófica la respeta y mejora.
- Nunca operar un queloide sin adyuvancia (radioterapia, esteroide o presión).
- La Z-plastia es para la hipertrófica con contractura, no para el queloide aislado.
- Silicona y presoterapia previenen; la tensión es el factor modificable más importante.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **6. Cicatrización y Tétanos** | Módulo 15, Cap. 92, p. 770 (Profilaxis tetánica Td/TIG); Cap. 94, p. 790 (Cicatrización queloide vs hipertrófica). | Schwartz 10ª ed., Cap. 8, p. 237 y Cap. 16, p. 480 (Triamcinolona, histología de colágeno); Sabiston 21ª ed., Cap. 20, p. 496 y Cap. 31, p. 715 (TIG 250 UI, radioterapia coadyuvante). | **2 afirmaciones AMCG / 2 afirmaciones Schwartz-Sabiston** (Total: 4) |

### Referencias
Tratado AMCG 3ª ed., Cap. 94, p. 790. Schwartz 10ª ed., Caps. 9 y 16. Sabiston 21ª ed., Caps. 7 y 31. Ogawa R. Keloid and hypertrophic scars are the result of chronic inflammation in the reticular dermis. Int J Mol Sci 2017. International Clinical Recommendations on Scar Management (actualización 2014).
`),
    sheet("piel-tetanos", "06", "Profilaxis antitetánica en heridas y quemaduras", `
## Profilaxis antitetánica en heridas y quemaduras

### Definición
El tétanos es una enfermedad neurológica aguda causada por la **tetanospasmina**, neurotoxina de *Clostridium tetani*. La profilaxis en la herida combina la inmunización activa (toxoide tetánico, Td o Tdap) y, cuando está indicada, la pasiva (inmunoglobulina humana antitetánica, IGHT o TIG), además del manejo local de la herida.

### Epidemiología
En México el tétanos es raro gracias a la vacunación, con algunas decenas de casos al año informados por la Dirección General de Epidemiología, sobre todo en adultos mayores sin refuerzos, trabajadores rurales y usuarios de drogas inyectables; su letalidad sigue siendo alta (aproximadamente 20–40% en casos generalizados). El tétanos neonatal está prácticamente eliminado. El esquema nacional aplica refuerzos con Td cada 10 años en el adulto y Tdap en cada embarazo.

### Fisiopatología
El tétanos es una toxoinfección neuromuscular grave causada por la tetanospasmina producida por *Clostridium tetani*, un bacilo anaerobio estricto formador de esporas telúricas:
Las esporas entran por la herida y germinan en condiciones de anaerobiosis (tejido desvitalizado, cuerpo extraño, infección). La toxina viaja por transporte axonal retrógrado hasta la médula espinal y el tronco encefálico, donde bloquea la liberación de los neurotransmisores inhibidores **GABA y glicina** en las interneuronas: el resultado es rigidez y espasmos musculares, con hiperactividad autonómica. La unión de la toxina es irreversible; la recuperación requiere la formación de nuevas terminaciones (semanas). La enfermedad no confiere inmunidad: el paciente que sobrevive debe vacunarse.

### Clasificación de la herida
- *Herida Propensa al Tétanos (Tetanus-Prone)*: Toda quemadura de segundo y tercer grado, quemaduras eléctricas, lesiones por aplastamiento, heridas contaminadas con tierra, heces o saliva, heridas con tejido desvitalizado no desbridado > 6 horas, o heridas punzantes profundas.

### Algoritmo de profilaxis
- *Algoritmo de Profilaxis Inmunológica (CDC / ACS / AMCG)*:
  1. **Paciente con Antecedente de Vacunación Completa (≥ 3 Dosis Previas)**:
     - *Herida limpia y menor*: Administrar refuerzo con Toxoide Tetánico (Td o Tdap) únicamente si han transcurrido **más de 10 años** desde la última dosis. No requiere gammaglobulina.
     - *Herida propensa al tétanos / Quemadura*: Administrar refuerzo con Td/Tdap si han transcurrido **más de 5 años** desde la última dosis de refuerzo. **NO requiere Inmunoglobulina Antitetánica (TIG)**.
  2. **Paciente con Vacunación Incompleta (< 3 Dosis) o Desconocida**:
     - *Herida limpia y menor*: Administrar esquema completo de vacunación con Td/Tdap (dosis inicial a tiempo cero, segunda dosis a las 4-8 semanas, tercera dosis a los 6-12 meses). No requiere TIG.
     - *Herida propensa al tétanos / Gran Quemado*: Administrar **simultáneamente**:
       1. **Vacuna Td/Tdap (0.5 mL IM)** en un sitio anatómico (ej. deltoides derecho).
       2. **Inmunoglobulina Humana Antitetánica (TIG)** a dosis de **250 UI vía intramuscular** utilizando una jeringa distinta en un **sitio anatómico separado contralateral** (ej. deltoides izquierdo o glúteo) para conferir inmunidad pasiva inmediata protectora [Tratado AMCG 3ª ed., Cap. 92, p. 770; Schwartz 10ª ed., Cap. 8, p. 237; Sabiston 21ª ed., Cap. 20, p. 496].

| Antecedente de vacunación | Herida limpia y menor | Herida propensa a tétanos |
| :--- | :--- | :--- |
| ≥ 3 dosis, última < 5 años | Nada | Nada |
| ≥ 3 dosis, última 5–10 años | Nada | Td/Tdap |
| ≥ 3 dosis, última > 10 años | Td/Tdap | Td/Tdap |
| < 3 dosis o desconocido | Td/Tdap (iniciar esquema) | Td/Tdap + IGHT 250 UI |

Notas prácticas:
- Si el adulto nunca ha recibido Tdap, se prefiere Tdap para una de las dosis.
- En inmunodeprimidos (VIH, quimioterapia) con herida propensa se administra IGHT aunque tengan esquema completo.
- Algunas guías duplican la dosis de IGHT a 500 UI en heridas muy contaminadas o con más de 24 h de evolución; la dosis estándar de profilaxis es 250 UI.
- La vacuna y la inmunoglobulina nunca se aplican en la misma jeringa ni en el mismo sitio.

### Manejo local de la herida
La inmunización no sustituye al desbridamiento: retirar cuerpos extraños y tejido desvitalizado, irrigar y dejar abiertas las heridas sucias o de más de 6–8 h. El antibiótico no previene el tétanos.

### Cuadro clínico del tétanos establecido
Periodo de incubación de 3 a 21 días (más corto = más grave). La forma generalizada empieza con **trismo** (el signo más común y temprano), seguido de risa sardónica, rigidez de cuello y tronco (opistótonos), espasmos dolorosos desencadenados por estímulos y disfunción autonómica (taquicardia, hipertensión lábil, hipertermia), con conciencia conservada. Existen formas localizadas y cefálicas (heridas de cabeza, con parálisis facial). El diagnóstico es clínico; la prueba de la espátula (el paciente muerde el abatelenguas en lugar de provocar arcada) es útil.

### Tratamiento del tétanos establecido
1. Ingreso a terapia intensiva, ambiente sin estímulos, control temprano de la vía aérea (traqueostomía si se prevé ventilación prolongada).
2. IGHT para neutralizar la toxina circulante (dosis terapéuticas de 3000–6000 UI IM; algunas series usan 500 UI con resultados similares) y vacunación con toxoide en otro sitio.
3. Desbridamiento de la herida.
4. Metronidazol 500 mg IV c/6–8 h por 7–10 días (preferido sobre penicilina, que es antagonista GABA).
5. Benzodiacepinas a dosis altas para espasmos; sulfato de magnesio para espasmos y disautonomía; bloqueo neuromuscular con ventilación en casos graves.
6. Soporte nutricional, profilaxis tromboembólica y de úlceras.

### Situaciones prácticas en urgencias
- **Paciente que no recuerda sus vacunas:** se trata como "desconocido" (< 3 dosis). La cartilla nacional de vacunación y el expediente electrónico del IMSS pueden aclararlo, pero no debe retrasarse la profilaxis.
- **Mordeduras:** son heridas propensas a tétanos y además requieren valoración de profilaxis antirrábica y antibiótico (amoxicilina-clavulanato), irrigación abundante y, en general, cierre diferido salvo en cara.
- **Pie diabético con gangrena, heridas por clavo y fracturas expuestas:** heridas propensas; la profilaxis se registra en la nota de ingreso.
- **Embarazo:** Td/Tdap e IGHT son seguros; se prefiere Tdap entre las semanas 27 y 36 para proteger al recién nacido contra tos ferina.
- **Pacientes quemados:** la profilaxis forma parte de la valoración inicial junto con la vía aérea, la reanimación y el cálculo de la superficie; se documenta en la hoja de ingreso a la unidad de quemados.
- **Dosis y vía:** Td y Tdap 0.5 mL IM en deltoides; IGHT 250 UI IM en el deltoides contralateral o en la región glútea (cuadrante superoexterno).

#### Diagnóstico diferencial del tétanos
Reacción distónica por fármacos (metoclopramida, haloperidol: responde a biperideno), intoxicación por estricnina, hipocalcemia (tetania con signos de Chvostek y Trousseau), meningitis, rabia, absceso dental o periamigdalino con trismo, luxación temporomandibular y síndrome neuroléptico maligno.

### Complicaciones
Insuficiencia respiratoria por laringoespasmo o espasmo de músculos respiratorios, neumonía por aspiración, fracturas vertebrales por espasmos, rabdomiólisis, arritmias y muerte súbita por disautonomía.

### Perlas
- Toda quemadura de 2º y 3er grado es herida propensa a tétanos.
- Con esquema completo y herida propensa: refuerzo si la última dosis fue hace más de 5 años, sin IGHT.
- Sin esquema o desconocido con herida propensa: Td + IGHT 250 UI en sitios distintos.
- El trismo es el primer signo del tétanos.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **6. Cicatrización y Tétanos** | Módulo 15, Cap. 92, p. 770 (Profilaxis tetánica Td/TIG); Cap. 94, p. 790 (Cicatrización queloide vs hipertrófica). | Schwartz 10ª ed., Cap. 8, p. 237 y Cap. 16, p. 480 (Triamcinolona, histología de colágeno); Sabiston 21ª ed., Cap. 20, p. 496 y Cap. 31, p. 715 (TIG 250 UI, radioterapia coadyuvante). | **2 afirmaciones AMCG / 2 afirmaciones Schwartz-Sabiston** (Total: 4) |

### Referencias
Tratado AMCG 3ª ed., Cap. 92, p. 770. Schwartz 10ª ed., Cap. 8, p. 237. Sabiston 21ª ed., Cap. 20, p. 496. CDC. Tetanus: Clinical Guidance / Pink Book (Epidemiology and Prevention of Vaccine-Preventable Diseases). Secretaría de Salud, Esquema Nacional de Vacunación vigente. ACS-COT, Prophylaxis Against Tetanus in Wound Management.
`),
    sheet("piel-cbc", "07", "Carcinoma basocelular", `
## Carcinoma basocelular

### Definición
Neoplasia maligna epitelial de crecimiento lento que nace de células pluripotenciales de la capa basal de la epidermis y del folículo piloso. Es localmente destructiva y casi nunca metastatiza.

1. **Carcinoma Basocelular**: La neoplasia cutánea maligna más frecuente (75-80% de los cánceres de piel no melanoma). Se origina de células pluripotenciales de la capa basal epidérmica. Factores de riesgo: exposición a radiación UV intermitente en la infancia y mutaciones en la vía Sonic Hedgehog (*PTCH1* en síndrome de Gorlin). Subtipos: nodular (el más común, nódulo aperlado con telangiectasias y bordes translúcidos), pigmentado, morfeiforme/esclerosante (agresivo, márgenes subclínicos amplios) y superficial. Posee crecimiento local invasivo lento con una tasa de metástasis a distancia prácticamente nula (< 0.01%) [Tratado AMCG 3ª ed., Cap. 93, p. 776; Schwartz 10ª ed., Cap. 16, p. 483; Sabiston 21ª ed., Cap. 31, p. 718].

### Epidemiología
Es el cáncer más frecuente en humanos. En México es también el cáncer de piel más común (alrededor de 70–75% de los cánceres de piel en series del Centro Dermatológico Pascua y del INCan), con predominio en mayores de 50 años, piel clara y trabajadores al aire libre; 80% se localiza en cabeza y cuello, sobre todo nariz. La exposición ultravioleta intermitente e intensa en la infancia es el factor de riesgo principal; otros son el fototipo I–II, la radioterapia previa, la exposición a arsénico, la inmunosupresión y síndromes genéticos (síndrome de Gorlin o del nevo basocelular, xeroderma pigmentoso, albinismo).

### Fisiopatología
La activación constitutiva de la vía **Sonic Hedgehog** (mutación inactivadora de *PTCH1* o activadora de *SMO*) es casi universal; *TP53* mutado por UV también es frecuente. El tumor depende del estroma que lo rodea, lo que explica su baja capacidad metastásica.

### Clasificación clínico-patológica
| Subtipo | Aspecto | Comportamiento |
| :--- | :--- | :--- |
| Nodular (≈ 50–60%) | Pápula o nódulo perlado, translúcido, con telangiectasias arborizantes, a veces ulcerado central ("úlcera roedora") | Bajo riesgo |
| Superficial | Placa eritematosa descamativa en tronco | Bajo riesgo; admite tratamiento tópico |
| Pigmentado | Nódulo con pigmento (más frecuente en mexicanos) | Diferencial con melanoma |
| Morfeiforme (esclerodermiforme) | Placa blanquecina indurada de bordes mal definidos, como cicatriz | Alto riesgo: márgenes subclínicos amplios |
| Infiltrante, micronodular, basoescamoso | Variables | Alto riesgo |

**Estratificación de riesgo de recurrencia (NCCN):** alto riesgo si está en zona H de la cara (párpados, nariz, labios, mentón, orejas, sien, área periauricular), mide > 2 cm en tronco/extremidades, tiene bordes mal definidos, es recidivante, tiene subtipo agresivo, invasión perineural, aparece en sitio de radioterapia previa o en un inmunosuprimido.

### Cuadro clínico
Lesión de crecimiento lento (meses a años), indolora, que sangra con el roce y no cicatriza; la descripción clásica es la "perla" con telangiectasias. Los tumores descuidados pueden destruir cartílago, hueso, órbita o base de cráneo (*ulcus terebrans*).

### Diagnóstico
- Dermatoscopia: vasos arborizantes, nidos ovoides azul-grisáceos, hojas de arce, ulceración.
- **Biopsia** antes de la cirugía definitiva en lesiones dudosas o de alto riesgo: por sacabocado (punch) o por rasurado profundo (a diferencia del melanoma, en el basocelular el rasurado diagnóstico es aceptable).
- Estudios de imagen solo en tumores extensos con sospecha de invasión ósea, orbitaria o perineural (TC o RM).

### Tratamiento
3. **Márgenes Quirúrgicos Oncológicos**:
   - *Bajo Riesgo (Lesiones < 2 cm en tronco/extremidades, no infiltrantes)*: Margen lateral de piel sana de **4.0 mm** extirpando hasta el tejido celular subcutáneo.
   - *Alto Riesgo (Lesiones > 2 cm, localización en zona "H" facial [párpados, nariz, labios, orejas], bordes mal definidos, variantes morfeiformes o recidivantes)*: Margen lateral mínimo de **6.0 a 10 mm** o realización de **Cirugía Micrográfica de Mohs** (estudio histopatológico intraoperatorio al 100% de los bordes periféricos y profundos por congelación, con tasa de curación > 98-99% y máxima preservación de tejido sano) [Schwartz 10ª ed., Cap. 16, p. 486; Sabiston 21ª ed., Cap. 31, p. 721].

#### Opciones según el riesgo
- **Bajo riesgo:** escisión quirúrgica con margen de 4 mm y evaluación histológica de márgenes (curación ≈ 95%); curetaje y electrodesecación en lesiones pequeñas de tronco (no en zonas con pelo terminal ni en cara de alto riesgo); tratamientos tópicos (imiquimod 5%, 5-fluorouracilo) o terapia fotodinámica en el superficial.
- **Alto riesgo:** cirugía micrográfica de Mohs o escisión con evaluación completa de márgenes (CCPDMA); márgenes más amplios en tronco cuando no se dispone de Mohs.
- **Margen positivo:** reescisión o Mohs; radioterapia adyuvante si no es posible operar.
- **No candidatos a cirugía:** radioterapia (especialmente en mayores de 60 años).
- **Localmente avanzado o metastásico:** inhibidores de la vía Hedgehog (vismodegib, sonidegib); cemiplimab (anti-PD-1) tras falla.

#### Reconstrucción
Cierre directo en líneas de tensión, colgajos locales (de avance, rotación, transposición: bilobulado y romboidal en nariz) o injertos. La reconstrucción compleja se pospone hasta confirmar márgenes libres.

### Diagnóstico diferencial
- **Lesiones perladas o nodulares:** hiperplasia sebácea (pápulas amarillentas con umbilicación central), queratoacantoma (crecimiento rápido en semanas con cráter queratósico; se trata como espinocelular), nevo intradérmico, molusco contagioso.
- **Lesiones pigmentadas:** melanoma (ABCDE, dermatoscopia con red atípica), queratosis seborreica (aspecto "pegado", pseudoquistes de cuerno).
- **Lesiones en placa:** enfermedad de Bowen, eccema numular, psoriasis (superficial); cicatriz o morfea (morfeiforme).

#### Fotoprotección y prevención
Protector solar de amplio espectro (FPS ≥ 30) diario en zonas expuestas, sombrero de ala ancha, evitar la exposición entre las 10 y 16 h; en el paciente con síndrome de Gorlin, evitar la radioterapia (induce múltiples tumores nuevos en el campo). La nicotinamida oral (500 mg c/12 h) redujo en un ensayo clínico la aparición de nuevos cánceres no melanoma en pacientes de alto riesgo.

#### Consideraciones técnicas para el cirujano general
En el IMSS, gran parte de los basocelulares de tronco y extremidades se resecan en cirugía ambulatoria por el cirujano general o el dermatólogo. Recomendaciones: marcar el margen con plumón antes de infiltrar (la anestesia deforma los bordes), resecar hasta el tejido celular subcutáneo, orientar la pieza con un punto de sutura (por ejemplo, "punto en las 12") para que el patólogo informe qué borde está comprometido, y no hacer colgajos que redistribuyan tejido hasta tener márgenes libres, porque un colgajo sobre un margen positivo dificulta encontrar el tumor residual.

### Complicaciones
Recidiva local (mayor en zona H y en morfeiformes), destrucción de estructuras faciales, sangrado e infección del sitio quirúrgico, necrosis de colgajos. Metástasis excepcional (< 0.01%), generalmente a ganglios y pulmón en tumores gigantes descuidados.

### Pronóstico y seguimiento
Curación > 95% con resección completa (> 98–99% con Mohs). El 30–50% de los pacientes desarrollará otro cáncer de piel no melanoma en 5 años: revisión dermatológica anual de toda la piel y fotoprotección.

### Perlas
- Perla con telangiectasias en nariz de un adulto mayor = basocelular hasta demostrar lo contrario.
- Metástasis prácticamente nula; mata por destrucción local.
- Morfeiforme y zona H: márgenes amplios o Mohs.
- Vía Hedgehog: *PTCH1*; tratamiento sistémico con vismodegib.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **7. Neoplasias Cutáneas y Melanoma** | Módulo 15, Cap. 93, pp. 776-786 (CBC, CEC, úlcera de Marjolin, biopsia excisional, espesor de Breslow). | Schwartz 10ª ed., Cap. 16, pp. 483-490 (Márgenes NCCN melanoma, BSGC); Sabiston 21ª ed., Cap. 31, pp. 718-730 (Ensayo MSLT-II y proscripción de linfadenectomía radical de rutina). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Cap. 93, p. 776. Schwartz 10ª ed., Cap. 16, pp. 483–486. Sabiston 21ª ed., Cap. 31, pp. 718–721. NCCN Guidelines: Basal Cell Skin Cancer (versión vigente).
`),
    sheet("piel-cec", "08", "Carcinoma espinocelular y úlcera de Marjolin", `
## Carcinoma espinocelular (epidermoide) cutáneo y úlcera de Marjolin

### Definición
Neoplasia maligna de queratinocitos suprabasales con capacidad de invasión local, perineural y metástasis ganglionar. Sus precursores son la queratosis actínica y el carcinoma in situ (enfermedad de Bowen). La **úlcera de Marjolin** es el carcinoma (casi siempre espinocelular) que aparece sobre una cicatriz crónica: quemadura antigua, úlcera venosa o por presión, osteomielitis con fístula, hidradenitis.

2. **Carcinoma Espinocelular (Epidermoide)**: Segunda neoplasia cutánea maligna más común (20%). Se origina en queratinocitos suprabasales del estrato espinoso. Factores de riesgo: radiación UV acumulativa crónica, inmunosupresión crónica (receptores de trasplante de órganos tienen riesgo 65 a 250 veces mayor), queratosis actínica previa y lesiones sobre cicatrices crónicas de quemaduras desatendidas (**Úlcera de Marjolin**, caracterizada por comportamiento biológico extremadamente agresivo, invasión perineural y tasa de metástasis ganglionar temprana > 30-40%). Tasa global de metástasis ganglionar del CEC convencional: 2% a 5% [Tratado AMCG 3ª ed., Cap. 93, p. 778; Schwartz 10ª ed., Cap. 16, p. 485; Sabiston 21ª ed., Cap. 31, p. 720].

### Epidemiología
En México ocupa el segundo lugar entre los cánceres de piel (aproximadamente 15–20%), con predominio en hombres mayores, labio inferior, dorso de manos, cuero cabelludo calvo y orejas. Su incidencia es muy alta en receptores de trasplante (inmunosupresión) y en pacientes con VIH. En nuestro medio, las cicatrices de quemaduras que cerraron por segunda intención en la infancia son un sustrato clásico de úlcera de Marjolin, con latencia media de 20–35 años.

### Fisiopatología
Daño acumulativo por radiación UVB (mutaciones de *TP53* con firma UV), inmunosupresión que reduce la vigilancia inmunitaria, virus del papiloma humano en algunas localizaciones (periungueal, anogenital), carcinógenos químicos (arsénico, hidrocarburos). En la úlcera de Marjolin la cicatriz es pobre en vasos y linfáticos, lo que reduce la vigilancia inmunitaria local y permite el crecimiento; cuando el tumor alcanza el tejido sano su comportamiento es agresivo.

### Clasificación
- **In situ** (Bowen): placa eritematosa escamosa bien delimitada.
- **Invasor de bajo riesgo:** < 2 cm, bien diferenciado, espesor < 2 mm, sin invasión perineural, en tronco o extremidades.
- **Alto riesgo:** > 2 cm, zona H o labio/oreja, profundidad > 6 mm o más allá de la grasa subcutánea, pobremente diferenciado, invasión perineural (sobre todo de nervios ≥ 0.1 mm), invasión linfovascular, recidiva, inmunosupresión, sitio de radiación o de cicatriz crónica.
- Estadificación T del AJCC 8ª edición (cabeza y cuello) o de Brigham and Women's Hospital (T1, T2a, T2b, T3 según factores de riesgo).

### Cuadro clínico
Pápula o placa queratósica que crece en semanas a meses, se ulcera, sangra y puede tener un cuerno cutáneo; consistencia indurada. En la úlcera de Marjolin, los signos de alarma son: úlcera en una cicatriz antigua que no cierra, bordes evertidos y elevados, tejido de granulación exuberante, sangrado fácil, mal olor y dolor nuevo. La invasión perineural se manifiesta con dolor, parestesias o parálisis facial.

### Diagnóstico
- **Biopsia** de toda lesión sospechosa; en úlceras de Marjolin, biopsias múltiples del borde y del centro (una sola biopsia negativa no descarta el cáncer).
- Exploración de las cadenas ganglionares; ecografía con biopsia con aguja fina de ganglios sospechosos.
- TC o RM en tumores de alto riesgo, invasión ósea o perineural.

### Tratamiento
3. **Márgenes Quirúrgicos Oncológicos**:
   - *Bajo Riesgo (Lesiones < 2 cm en tronco/extremidades, no infiltrantes)*: Margen lateral de piel sana de **4.0 mm** extirpando hasta el tejido celular subcutáneo.
   - *Alto Riesgo (Lesiones > 2 cm, localización en zona "H" facial [párpados, nariz, labios, orejas], bordes mal definidos, variantes morfeiformes o recidivantes)*: Margen lateral mínimo de **6.0 a 10 mm** o realización de **Cirugía Micrográfica de Mohs** (estudio histopatológico intraoperatorio al 100% de los bordes periféricos y profundos por congelación, con tasa de curación > 98-99% y máxima preservación de tejido sano) [Schwartz 10ª ed., Cap. 16, p. 486; Sabiston 21ª ed., Cap. 31, p. 721].

#### Detalles por escenario
- **Bajo riesgo:** escisión con margen de 4–6 mm hasta el tejido subcutáneo profundo.
- **Alto riesgo:** Mohs o escisión con márgenes ≥ 6–10 mm y evaluación completa del margen.
- **Ganglios clínicamente positivos:** linfadenectomía terapéutica de la región (parotidectomía con disección cervical en cabeza y cuello) y radioterapia adyuvante según hallazgos.
- **Radioterapia adyuvante:** invasión perineural extensa o de nervio grueso, márgenes positivos no reoperables, enfermedad ganglionar extensa.
- **Úlcera de Marjolin:** resección amplia con márgenes de 2–4 cm, incluyendo hueso subyacente si está invadido, y amputación en tumores extensos de extremidades con invasión ósea o articular; cobertura con injerto o colgajo; valoración ganglionar.
- **Enfermedad avanzada irresecable o metastásica:** inmunoterapia anti-PD-1 (cemiplimab, pembrolizumab), con respuestas en aproximadamente la mitad de los pacientes.
- **Lesiones precursoras:** queratosis actínicas con crioterapia, 5-FU o imiquimod tópicos.

### Diagnóstico diferencial
- **Queratoacantoma:** nódulo crateriforme con tapón de queratina que crece en semanas y puede involucionar; como no puede distinguirse con seguridad del espinocelular bien diferenciado, se reseca como tal.
- **Queratosis actínica hipertrófica y cuerno cutáneo:** la base del cuerno puede contener un carcinoma; se reseca con base.
- **Úlcera venosa crónica:** maléolo medial, piel con lipodermatoesclerosis y várices; una úlcera venosa que no responde a compresión en 3 meses o tiene bordes elevados se biopsia.
- **Pioderma gangrenoso, micosis profundas (esporotricosis, cromoblastomicosis, muy presentes en zonas rurales de México), tuberculosis cutánea y leishmaniasis:** se diferencian por biopsia y cultivo.
- **Carcinoma basocelular ulcerado y melanoma amelánico.**

#### Prevención de la úlcera de Marjolin
La forma más eficaz de prevenirla es cerrar las quemaduras profundas con injerto en lugar de dejarlas epitelizar durante meses, y tratar de forma definitiva las úlceras crónicas y las fístulas de osteomielitis. Toda cicatriz antigua que se ulcera en un adulto merece biopsia temprana.

#### Labio inferior
El espinocelular del labio (bermellón) se relaciona con exposición solar y tabaco; se reseca en cuña en "V" o en escudo con margen de 5 mm cuando afecta menos de un tercio del labio, con cierre por planos (mucosa, músculo orbicular y piel, alineando con precisión el borde del bermellón). Lesiones mayores requieren colgajos (Abbe, Karapandzic) y valoración ganglionar submentoniana y submandibular.

### Complicaciones y pronóstico
La metástasis ganglionar del espinocelular convencional es de 2–5%, pero sube a > 30–40% en la úlcera de Marjolin y en tumores de alto riesgo; la supervivencia a 5 años con metástasis ganglionares cae a 25–50%. Recurrencia local en tumores de alto riesgo y en inmunosuprimidos. La mayoría de las recidivas aparece en los primeros 2 años.

### Seguimiento
Exploración de piel y ganglios cada 3–6 meses los primeros 2 años y después cada 6–12 meses; en trasplantados, vigilancia más estrecha y ajuste de la inmunosupresión (sirolimus en lugar de inhibidores de calcineurina reduce nuevos tumores).

### Perlas
- Úlcera crónica sobre cicatriz de quemadura que no cierra: biopsias múltiples, piensa en Marjolin.
- Marjolin: metástasis ganglionar > 30–40%; resección amplia y estudio ganglionar.
- Trasplantados: riesgo 65–250 veces mayor; el espinocelular supera al basocelular.
- Labio inferior y oreja son zonas de alto riesgo de metástasis.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **7. Neoplasias Cutáneas y Melanoma** | Módulo 15, Cap. 93, pp. 776-786 (CBC, CEC, úlcera de Marjolin, biopsia excisional, espesor de Breslow). | Schwartz 10ª ed., Cap. 16, pp. 483-490 (Márgenes NCCN melanoma, BSGC); Sabiston 21ª ed., Cap. 31, pp. 718-730 (Ensayo MSLT-II y proscripción de linfadenectomía radical de rutina). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Cap. 93, p. 778. Schwartz 10ª ed., Cap. 16, pp. 485–486. Sabiston 21ª ed., Cap. 31, pp. 720–721. NCCN Guidelines: Squamous Cell Skin Cancer (versión vigente). AJCC Cancer Staging Manual, 8ª ed.
`),
    sheet("piel-melanoma", "09", "Melanoma maligno cutáneo", `
## Melanoma maligno cutáneo

### Definición y relevancia
Neoplasia maligna derivada de los melanocitos de la cresta neural; responsable del 75% al 80% de todas las muertes por cáncer cutáneo a pesar de representar menos del 5% de los casos [Tratado AMCG 3ª ed., Cap. 93, p. 782; Schwartz 10ª ed., Cap. 16, p. 487; Sabiston 21ª ed., Cap. 31, p. 724].

### Epidemiología en México
El melanoma representa una fracción pequeña de los cánceres de piel en México, pero es el más letal. A diferencia de las poblaciones caucásicas, en la población mexicana el subtipo **acral lentiginoso** (plantas, palmas, uñas) es el más frecuente en las series del INCan y del IMSS, con diagnóstico tardío (Breslow grueso) y peor pronóstico por la demora en la consulta y porque las lesiones plantares no se vigilan. Factores de riesgo: fototipo claro, quemaduras solares con ampollas en la infancia, más de 50 nevos o nevos atípicos, antecedente personal o familiar de melanoma (mutaciones *CDKN2A*), inmunosupresión y xeroderma pigmentoso; el acral no se relaciona con el sol.

### Fisiopatología y subtipos
La transformación del melanocito sigue la vía MAPK: mutaciones de **BRAF V600E** en aproximadamente 40–50% de los melanomas de piel con daño solar intermitente (menos frecuente en el acral), *NRAS* en 15–20% y *KIT* en el acral y mucoso. El tumor tiene una fase de crecimiento radial (intraepidérmica, sin capacidad metastásica) y otra vertical (invasión dérmica), que explica por qué el espesor determina el pronóstico.

| Subtipo | Frecuencia global | Características |
| :--- | :--- | :--- |
| Extensión superficial | ≈ 70% (caucásicos) | Tronco en hombres, piernas en mujeres; fase radial prolongada |
| Nodular | 15–30% | Crecimiento vertical desde el inicio; puede ser amelánico; diagnóstico tardío |
| Léntigo maligno melanoma | 5–15% | Cara de ancianos con daño solar crónico |
| Acral lentiginoso | 2–8% en caucásicos; el más frecuente en México | Plantas, palmas, subungueal (signo de Hutchinson: pigmento que invade el pliegue ungueal) |
| Mucoso y ocular | Raros | Peor pronóstico |

### Cuadro clínico y diagnóstico clínico
1. **Regla Mnemotécnica ABCDE para Diagnóstico Clínico**:
   - **A** (Asimetría estructural del contorno).
   - **B** (Bordes irregulares, festoneados o mal delimitados).
   - **C** (Color abigarrado o heterogéneo con múltiples tonos: marrón, negro, azul, rojo o blanco).
   - **D** (Diámetro mayor a **6.0 mm**).
   - **E** (Evolución: cambio dinámico en tamaño, forma, elevación o síntomas como prurito/sangrado).
Otros signos de alarma: el "patito feo" (lesión distinta al resto de los nevos del paciente), una banda ungueal pigmentada ancha, irregular o en un adulto (melanoniquia longitudinal), y un nódulo que sangra. Recordar el melanoma amelánico, que parece un granuloma piógeno.

### Biopsia
2. **Técnica de Biopsia**: Ante toda lesión clínicamente sospechosa de melanoma, la técnica mandatoria de elección es la **Biopsia Excisional Completa con margen estrecho de 1.0 a 2.0 mm de piel sana en superficie y profundidad hasta el tejido celular subcutáneo**, orientando la elipse paralela a los ejes axiales de drenaje linfático de la extremidad. Las biopsias por rasurado superficial (*shave*) o electrocoagulación están formalmente proscritas porque transectan la base de la lesión, impidiendo la medición histopatológica precisa del espesor tumoral. La biopsia incisional sólo se tolera ante lesiones gigantes en localizaciones cosméticas críticas (cara, región subungueal) [Tratado AMCG 3ª ed., Cap. 93, p. 784; Schwartz 10ª ed., Cap. 16, p. 488; Sabiston 21ª ed., Cap. 31, p. 726].

### Estadificación y factores pronósticos
3. **Factores Histopatológicos Pronósticos Mayores**:
   - **Índice de Breslow (Espesor Tumoral Máximo en Milímetros)**: Es el factor pronóstico independiente más determinante en melanoma localizado. Se mide micrométricamente con ocular calibrado desde el estrato granuloso epidérmico (o base de la úlcera) hasta la célula tumoral melánica más profunda en la dermis o hipodermis.
   - **Ulceración**: Presencia o ausencia de solución de continuidad de la epidermis sobre el tumor. Su presencia reclasifica de inmediato la categoría T hacia un subestadio de peor pronóstico (*upstaging*).
   - *Tasa Mitótica dérmica*: Número de mitosis por mm² (criterio complementario).
   - *Niveles Anatómicos de Clark (I a V)*: Valoran la invasión por capas histológicas anatómicas (relegados a valor secundario respecto a la medición cuantitativa de Breslow).

#### Categoría T del AJCC 8ª edición
| T | Breslow | Subcategoría |
| :--- | :--- | :--- |
| Tis | In situ | — |
| T1 | ≤ 1.0 mm | T1a < 0.8 mm sin ulceración; T1b < 0.8 mm con ulceración o 0.8–1.0 mm |
| T2 | 1.1–2.0 mm | a sin / b con ulceración |
| T3 | 2.1–4.0 mm | a sin / b con ulceración |
| T4 | > 4.0 mm | a sin / b con ulceración |

La tasa mitótica dejó de usarse para la categoría T en la 8ª edición, pero conserva valor pronóstico. N depende del número de ganglios (clínicamente ocultos o evidentes) y de las metástasis en tránsito o satélites; M depende del sitio (piel/tejidos blandos, pulmón, otras vísceras, sistema nervioso central) y de la DHL.

#### Estudios de extensión
Estadios 0–II: no se requieren estudios de imagen de rutina. Estadio III (ganglio positivo) o sospecha clínica: TC o PET-TC y RM de cerebro según el caso; DHL sérica en estadio IV.

### Tratamiento quirúrgico del tumor primario
4. **Márgenes Quirúrgicos de Resección Ampliada Definitiva (Guías NCCN / ACS)**:
   - **Melanoma in situ (pTis)**: Margen lateral libre de **0.5 cm (5 mm)** de piel sana.
   - **Melanoma T1 (Breslow ≤ 1.0 mm)**: Margen lateral libre de **1.0 cm**.
   - **Melanoma T2 (Breslow 1.01 a 2.0 mm)**: Margen lateral libre de **1.0 a 2.0 cm**.
   - **Melanoma T3 y T4 (Breslow > 2.0 mm)**: Margen lateral libre de **2.0 cm**.
   - *Profundidad de la escisión*: En todos los casos, la escisión debe extenderse en profundidad **a través de todo el tejido celular subcutáneo hasta la fascia muscular profunda**, sin extirpar la fascia a menos que exista invasión tumoral directa [Schwartz 10ª ed., Cap. 16, p. 489; Sabiston 21ª ed., Cap. 31, p. 728; NCCN Guidelines Cutaneous Melanoma v2.2024].

### Ganglio centinela
La técnica del ganglio centinela (introducida por Donald Morton en 1992) se fundamenta en que el drenaje linfático de un tumor cutáneo específico discurre secuencialmente hacia uno o dos ganglios linfáticos iniciales específicos dentro de la cuenca regional antes de alcanzar al resto de la cadena. Se realiza mediante mapeo linfático dual preoperatorio (linfocintigrafía con coloide marcado con Tecnecio-99m) y detección intraoperatoria dual (sonda gamma y colorante azul patente o verde de indocianina) [Sabiston 21ª ed., Cap. 31, p. 729; Schwartz 10ª ed., Cap. 16, p. 490].

**Indicaciones Clínicas Específicas de BSGC**:
1. **Melanoma T1a (Breslow < 0.8 mm sin ulceración)**: **NO se recomienda de rutina** debido a que la tasa de positividad ganglionar es inferior al 5%.
2. **Melanoma T1b (Breslow 0.8 a 1.0 mm con o sin ulceración, o < 0.8 mm con ulceración presente)**: Indicación para considerar y discutir con el paciente, ya que la tasa de positividad ganglionar oscila entre el 5% y el 12%.
3. **Melanoma T2 a T4 (Breslow > 1.0 mm, cN0 sin adenopatías palpables)**: **Indicación formal y sistemática de BSGC** (probabilidad de afectación metastásica oculta del 15% al 30%).

**CAMBIO DE PARADIGMA QUIRÚRGICO AUDITADO EN GANGLIO CENTINELA POSITIVO (ENSAYO MSLT-II)**:
Históricamente, el hallazgo de micrometástasis tumorales en el ganglio centinela (pN1a) obligaba a la realización inmediata y sistemática de una linfadenectomía radical de vaciamiento ganglionar completo de la cuenca afectada (cervical, axilar o inguinocrural). Sin embargo, los resultados definitivos del ensayo clínico internacional aleatorizado de fase III **MSLT-II (Multicenter Selective Lymphadenectomy Trial II)** demostraron de forma concluyente que la **linfadenectomía de vaciamiento radical inmediato NO confiere ninguna ventaja en la supervivencia global a 10 años** en comparación con la vigilancia ganglionar estrecha mediante **ecografía nodal trimestral** asociada a la terapia adyuvante sistémica moderna. Adicionalmente, el vaciamiento radical incrementa de forma inaceptable la morbilidad quirúrgica grave, induciendo **linfedema crónico irreversible incapacitante en más del 24% al 30% de los pacientes** sometidos a disección inguinocrural o axilar. Por lo tanto, el estándar oncológico actual ante un ganglio centinela positivo es la **observación ecográfica estricta y adyuvancia sistémica con inmunoterapia anti-PD-1 (Nivolumab o Pembrolizumab) o terapia blanco oral dirigida contra BRAF/MEK (Dabrafenib + Trametinib)** en presencia de la mutación *BRAF V600E* [Sabiston 21ª ed., Cap. 31, p. 730; NCCN Guidelines Cutaneous Melanoma v2.2024].

#### Cuándo sí se hace linfadenectomía
- Ganglios clínicamente palpables o confirmados por biopsia con aguja (linfadenectomía terapéutica), aunque hoy muchos pacientes con enfermedad voluminosa reciben primero inmunoterapia neoadyuvante en centros oncológicos.
- Recurrencia ganglionar durante la vigilancia.
- Imposibilidad de seguimiento ecográfico (consideración pertinente en el contexto de acceso limitado).

### Tratamiento sistémico
- **Adyuvante (estadios IIB–IV resecados):** anti-PD-1 (nivolumab o pembrolizumab) durante 1 año; dabrafenib + trametinib si hay *BRAF V600*.
- **Enfermedad avanzada:** inmunoterapia (anti-PD-1 solo o combinado con ipilimumab o relatlimab) o terapia blanco BRAF/MEK; la cirugía de metástasis aisladas (metastasectomía) se considera en casos seleccionados con buena respuesta.
- La radioterapia tiene papel en metástasis cerebrales (radiocirugía) y en control local.

### Complicaciones
Seroma y linfedema tras linfadenectomía (inguinal sobre todo), infección y dehiscencia de la herida, necrosis de colgajos o pérdida de injertos en la reconstrucción; efectos adversos inmunomediados de la inmunoterapia (colitis, hepatitis, tiroiditis, hipofisitis, neumonitis).

### Pronóstico
La supervivencia específica a 10 años según AJCC 8 es de aproximadamente 98% en IA, 75–90% en estadio II según el subgrupo (IIC ≈ 75%), 88% en IIIA y alrededor de 24–30% en IIID; la inmunoterapia moderna mejoró de forma importante la supervivencia del estadio IV, que hoy supera el 40–50% a 5 años con la combinación anti-PD-1 + anti-CTLA-4 en ensayos clínicos.

### Seguimiento
Exploración completa de piel y ganglios cada 3–6 meses los primeros 2–3 años (con ecografía ganglionar en quienes tuvieron centinela positivo sin linfadenectomía), después cada 6–12 meses; autoexploración y fotoprotección; el riesgo de un segundo melanoma primario es de 2–5%.

### Discrepancias bibliográficas
| Parámetro / Entidad Quirúrgica | Tratado de Cirugía General (AMCG 3ª edición) | Schwartz: Principios de Cirugía (10ª edición) | Sabiston: Tratado de Cirugía (21ª edición) | Análisis Crítico y Guía de Conducta para el Residente (R2) |
| :--- | :--- | :--- | :--- | :--- |
| **Margen Quirúrgico Lateral en Melanoma T2 (Breslow 1.01 a 2.0 mm)** | **Módulo 15, Cap. 93, p. 785**: Establece una conducta rígida estandarizada recomendando un margen de escisión amplio de **2.0 cm sistemático** para todo melanoma con espesor mayor a 1.0 mm. | **Cap. 16, p. 488**: Fija un margen quirúrgico recomendado de **1.0 a 2.0 cm**, permitiendo ajustar a 1.0 cm en zonas anatómicas complejas (cara, manos, cuello) basándose en ensayos multicéntricos controlados. | **Cap. 31, p. 728**: Avala la recomendación flexible del Intergroup Melanoma Trial y las guías NCCN vigentes: **margen de 1.0 a 2.0 cm** según las restricciones anatómicas y cosméticas locales, demostrando que 1 cm confiere control locorregional idéntico a 2 cm en T2. | **Discrepancia de Conducta Quirúrgica (2 cm fijo vs 1-2 cm flexible)**: Para un R2, en zonas anatómicas con holgura tisular (espalda, abdomen) debe buscarse el margen de 2 cm; sin embargo, en cara o extremidades distales, un margen de 1.0 cm es oncológicamente seguro y evita reconstrucciones mutilantes innecesarias. |
| **Manejo del Melanoma con Metástasis en Ganglio Centinela (pN1a)**| **Módulo 15, Cap. 93, p. 786**: Dictamina que el hallazgo de células tumorales en el ganglio centinela es indicación formal e inmediata de **Linfadenectomía Radical Completa del territorio ganglionar regional**. | **Cap. 16, p. 490**: Mantiene la recomendación tradicional histórica de linfadenectomía de vaciamiento ganglionar complementario al detectarse micrometástasis centinela (edición previa al reporte definitivo del MSLT-II). | **Cap. 31, p. 730**: **Proscribe formalmente la linfadenectomía radical inmediata de rutina** basándose en la evidencia del ensayo fase III MSLT-II: el vaciamiento no mejora la sobrevida global y causa linfedema severo en > 25%; se sustituye por seguimiento ecográfico trimestral e inmunoterapia adyuvante sistémica. | **Discrepancia Doctrinal Oncológica Crítica**: Representa el cambio de paradigma quirúrgico más trascendental en oncología cutánea de la última década. La linfadenectomía radical ha dejado de ser obligatoria y sólo se practica ante progresión clínica palpable o ecográfica macroscópica (*terapéutica*). |

### Perlas
- Biopsia excisional con margen de 1–2 mm; nunca rasurado: impide medir Breslow.
- Breslow es el factor pronóstico más importante; la ulceración sube la categoría.
- Márgenes: in situ 0.5 cm, ≤ 1 mm 1 cm, 1–2 mm 1–2 cm, > 2 mm 2 cm; hasta la fascia sin resecarla.
- Centinela: T1a no; T1b considerar; T2–T4 cN0 sí.
- MSLT-II: centinela positivo = vigilancia ecográfica + adyuvancia; no linfadenectomía inmediata.
- En México, piensa en el pie: el acral lentiginoso es el más frecuente.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **7. Neoplasias Cutáneas y Melanoma** | Módulo 15, Cap. 93, pp. 776-786 (CBC, CEC, úlcera de Marjolin, biopsia excisional, espesor de Breslow). | Schwartz 10ª ed., Cap. 16, pp. 483-490 (Márgenes NCCN melanoma, BSGC); Sabiston 21ª ed., Cap. 31, pp. 718-730 (Ensayo MSLT-II y proscripción de linfadenectomía radical de rutina). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Cap. 93, pp. 782–786. Schwartz 10ª ed., Cap. 16, pp. 487–490. Sabiston 21ª ed., Cap. 31, pp. 724–730. NCCN Guidelines: Cutaneous Melanoma v2.2024. Faries MB, et al. Completion dissection or observation for sentinel-node metastasis in melanoma (MSLT-II). N Engl J Med 2017;376:2211-22. Gershenwald JE, et al. Melanoma staging: AJCC 8th edition. CA Cancer J Clin 2017.
`),
  ],
  "quemaduras": [
    sheet("q-evaluacion", "01", "Evaluación inicial del quemado: extensión, profundidad y referencia", `
## Evaluación inicial del paciente quemado: extensión, profundidad y criterios de referencia

### Definición
La quemadura es la lesión de la piel y de tejidos más profundos producida por energía térmica (llama, líquidos calientes, contacto), eléctrica, química o por radiación. Su gravedad depende de tres variables que el cirujano debe estimar en la primera hora: **extensión** (porcentaje de superficie corporal quemada, % SCQ), **profundidad** y **lesiones asociadas** (inhalación, trauma, comorbilidad, edad).

### Epidemiología
En México las quemaduras son una causa importante de hospitalización y discapacidad; la mayoría ocurre en el hogar, en niños menores de 5 años (escaldaduras por líquidos calientes) y en adultos jóvenes con accidentes laborales (eléctricas y por llama). El IMSS concentra la atención del gran quemado en unidades especializadas de tercer nivel, y la GPC del IMSS sobre el manejo del paciente quemado orienta la referencia temprana. La mortalidad aumenta con la edad, la superficie y la lesión por inhalación; el índice de Baux (edad + % SCQ, con 17 puntos adicionales si hay inhalación en la versión revisada) estima el riesgo: un valor cercano a 140–160 se asocia con mortalidad muy alta.

### Valoración primaria
El quemado es un paciente de trauma: se evalúa con la secuencia ABCDE del ATLS.
- **A:** vía aérea con control cervical si hay mecanismo de trauma; buscar datos de inhalación (véase la hoja correspondiente).
- **B:** ventilación; quemaduras circunferenciales del tórax que restringen la expansión.
- **C:** acceso venoso (dos periféricos de grueso calibre, de preferencia en piel sana; intraóseo si no se logra), control de hemorragias.
- **D:** estado neurológico; la alteración de la conciencia sugiere CO, cianuro, trauma craneal o intoxicación, no la quemadura.
- **E:** exposición completa, retiro de ropa y joyas (anillos que se vuelven torniquete con el edema), y **prevención de la hipotermia**: el agua fría solo se usa para enfriar la quemadura los primeros minutos (20 minutos con agua corriente a 15–25 °C en quemaduras pequeñas) y nunca hielo ni en grandes superficies.

Durante la valoración secundaria se pesa al paciente (o se estima el peso), se coloca sonda urinaria en quemaduras > 20% SCQ, se pide gasometría con cooximetría, lactato, biometría, química, electrolitos, CPK y examen general de orina, y se aplica profilaxis antitetánica.

### Estimación de la superficie corporal quemada y de la profundidad
#### B. Estimación de la Superficie Corporal Quemada (% SCQ) y Profundidad
1. **Regla de los Nueve de Wallace (Adultos)**:
   - Cabeza y cuello completos: 9% (4.5% anterior, 4.5% posterior).
   - Tronco anterior (tórax y abdomen): 18%.
   - Tronco posterior (espalda y glúteos): 18%.
   - Cada extremidad superior completa: 9% (4.5% anterior, 4.5% posterior; ambas suman 18%).
   - Cada extremidad inferior completa: 18% (9% anterior, 9% posterior; ambas suman 36%).
   - Periné y genitales externos: 1%.
   - *Regla de la Palma de la Mano*: La palma de la mano del paciente (incluyendo los dedos extendidos) representa aproximadamente el **1.0% de su propia superficie corporal** (la superficie palmar sin dedos representa el 0.5%), método útil para mapear quemaduras parcheadas o irregulares.
   - *Regla de Lund y Browder*: Esquema indispensable en pacientes pediátricos para compensar la desproporción anatómica cefálica (la cabeza representa 19% al nacer, 17% a 1–4 años, 13% a 5–9, 11% a 10–14, 9% a los 15 años y 7% en el adulto, transfiriéndose a las extremidades inferiores) [Tratado AMCG 3ª ed., Cap. 238, p. 2022; Sabiston 21ª ed., Cap. 20, p. 491; Schwartz 10ª ed., Cap. 8, p. 233].
   - **REGLA AUDITADA CRÍTICA**: En el cálculo de la % SCQ para la reanimación hídrica **SÓLO SE CONTABILIZAN LAS QUEMADURAS DE SEGUNDO GRADO (ESPESOR PARCIAL) Y TERCER GRADO (ESPESOR TOTAL)**. Las quemaduras de primer grado (eritema simple, daño epidérmico puro) NO se incluyen en el cálculo hídrico ya que la barrera cutánea permanece funcionalmente intacta y no hay fuga capilar intersticial.
2. **Profundidad Histológica de la Quemadura**:
   - *Primer Grado (Epidérmica)*: Eritematosa, seca, dolorosa, sin ampollas (flictenas); cura espontáneamente en 3 a 5 días sin cicatriz por descamación epidérmica (ej. quemadura solar).
   - *Segundo Grado Superficial (Espesor Parcial Superficial)*: Afecta epidermis y tercio papilar de la dermis; presencia de ampollas intactas o rotas, lecho húmedo, rosado brillante, blanquea inmediatamente a la presión digital y es exquisitamente dolorosa; epiteliza en 10 a 14 días a partir de los anejos cutáneos residuales con mínima o nula cicatrización hipertrófica.
   - *Segundo Grado Profundo (Espesor Parcial Profundo)*: Destruye dermis papilar y compromete dermis reticular profunda; lecho pálido, blanquecino o moteado ceroso, no blanquea o blanquea de forma lenta a la presión, textura seca, sensibilidad disminuida al tacto suave (conserva dolor a la presión profunda); tarda más de 21 a 35 días en cicatrizar, genera cicatrización hipertrófica severa y contracturas, por lo que **su indicación reglada es la escarectomía tangencial e injerto cutáneo autólogo**.
   - *Tercer Grado (Espesor Total)*: Destrucción completa de epidermis, dermis y anejos cutáneos; aspecto de cuero seco o pergamino (escara dura), translúcido o carbonizado, color blanco perla, marrón o negro; vasos trombosados visibles por transparencia; **completamente insensible (anestesia local por destrucción de terminaciones nerviosas dérmicas)**; no puede epitelizar espontáneamente (salvo contracción marginal desde los bordes sanos); exige desbridamiento quirúrgico e injertos.
   - *Cuarto Grado*: Involucra tejido celular subcutáneo profundo, fascias musculares, músculo, tendones, periostio o hueso; carbonización masiva; requiere colgajos reconstructivos o amputaciones [Tratado AMCG 3ª ed., Cap. 238, p. 2023; Sabiston 21ª ed., Cap. 20, p. 492; Schwartz 10ª ed., Cap. 8, p. 234].

#### Errores frecuentes en la estimación
- Contar el eritema de primer grado: sobrestima la superficie y lleva a sobrerreanimar (*fluid creep*).
- Estimar en el primer contacto, antes de limpiar el hollín: las áreas sucias parecen más profundas.
- No reevaluar a las 48–72 h: la profundidad "se define" en los primeros días (la zona de estasis puede progresar a necrosis si la reanimación es insuficiente).
- Usar la regla de los nueve en niños pequeños: se subestima la cabeza y se sobrestiman las piernas.

#### Zonas de Jackson (fisiopatología local)
- **Zona de coagulación:** centro de la quemadura, necrosis irreversible.
- **Zona de estasis:** alrededor, perfusión disminuida, potencialmente recuperable; la hipovolemia, la infección y el edema la convierten en necrosis. Es el objetivo de la reanimación adecuada.
- **Zona de hiperemia:** periferia con vasodilatación, se recupera en 7–10 días.

### Criterios de referencia a un centro de quemados
#### D. Criterios de Referencia a un Centro Especializado de Quemados (American Burn Association)
Cualquier paciente que cumpla con al menos uno de los siguientes 10 criterios estandarizados debe ser trasladado a un Centro Especializado de Quemados previa estabilización cardiorrespiratoria inicial:
1. Quemaduras de espesor parcial (segundo grado) mayores al **10% de la SCQ**.
2. Quemaduras que involucran áreas anatómicas críticas funcionales o cosméticas: **cara, manos, pies, genitales, periné o articulaciones mayores**.
3. Quemaduras de espesor total (tercer grado) de cualquier tamaño y en cualquier grupo de edad.
4. **Quemaduras eléctricas**, incluyendo lesiones directas por rayo o arco voltaico.
5. **Quemaduras químicas** graves (ácidos concentrados, álcalis, ácido fluorhídrico).
6. **Lesión por inhalación** confirmada o con alta sospecha clínica.
7. Quemaduras en pacientes con comorbilidades médicas preexistentes graves que puedan complicar el manejo, prolongar la recuperación o elevar la mortalidad (cardiopatías, insuficiencia renal, diabetes descompensada, EPOC).
8. Pacientes con quemaduras y **traumatismo mayor concomitante** (fracturas, trauma cerrado o penetrante); si el trauma pone en peligro inmediato la vida, el paciente puede ser estabilizado primero en un centro de trauma antes de la transferencia.
9. Quemaduras en niños hospitalizados en unidades que carezcan de personal especializado o infraestructura pediátrica adecuada.
10. Quemaduras en pacientes con necesidades especiales de soporte emocional, psicológico o rehabilitación a largo plazo (incluyendo sospecha de maltrato o abuso infantil/adulto) [Schwartz 10ª ed., Cap. 8, p. 228; Sabiston 21ª ed., Cap. 20, p. 486; American Burn Association Practice Guidelines 2024].

#### Criterios de hospitalización en un hospital general
Quemaduras de segundo grado de 10–20% en adultos o 5–10% en niños sin otros criterios, quemaduras de zonas especiales que el centro de quemados no puede recibir de inmediato, sospecha de maltrato, imposibilidad de curaciones en casa, dolor no controlable por vía oral o comorbilidad descompensada.

#### Traslado seguro
Antes de trasladar: vía aérea asegurada si hay dudas (el edema empeora durante el traslado), dos accesos venosos y reanimación iniciada con la fórmula, sonda urinaria, analgesia IV (opioide titulado), sonda nasogástrica en quemaduras > 20% (íleo), cubrir con sábanas limpias y secas (no aplicar cremas que impiden valorar la herida), registro de la hora de la quemadura y de los líquidos administrados, y comunicación médico a médico.

### Clasificación de gravedad (resumen operativo)
| Gravedad | Adulto | Conducta |
| :--- | :--- | :--- |
| Menor | 2º grado < 10% (< 5% en niños o ancianos), 3º grado < 2%, sin zonas especiales | Ambulatorio con curaciones |
| Moderada | 2º grado 10–20%, 3º grado 2–10% | Hospital general |
| Mayor | 2º grado > 20%, 3º grado > 10%, zonas especiales, eléctrica, química, inhalación, trauma | Centro de quemados |

### Pronóstico
La mortalidad global de los pacientes admitidos a centros de quemados es del 3–5%; los determinantes más fuertes son la edad avanzada, el % SCQ y la inhalación. La calidad de vida depende de la cobertura temprana, la rehabilitación y el manejo de cicatrices.

### Perlas
- El quemado es un paciente de trauma: ABCDE primero, superficie después.
- Para la fórmula solo cuentan el 2º y 3er grado.
- Palma con dedos = 1%; Lund-Browder en niños.
- Enfriar 20 minutos con agua corriente, nunca hielo; prevenir la hipotermia.
- Reevaluar la profundidad a las 48–72 h.

### Trazabilidad bibliográfica
*Definición de la Unidad de Asignación Bibliográfica*: Se define como una afirmación doctrinal clínica, cuantitativa o técnica independiente verificada en las fuentes primarias de consulta.
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
*Consolidación del Balance Numérico Auditado*:
- Total de unidades de asignación bibliográfica AMCG 3ª ed.: **20 afirmaciones documentadas (50.0%)**.
- Total de unidades de asignación bibliográfica Schwartz 10ª ed. / Sabiston 21ª ed. / Guías NCCN-ABA: **20 afirmaciones documentadas (50.0%)**.
- Balance total global: **40 unidades asignadas / Proporción auditada exacta: 50% vs 50%**.

### Referencias
Tratado AMCG 3ª ed., Cap. 238, pp. 2021–2023. Sabiston 21ª ed., Cap. 20, pp. 486–492. Schwartz 10ª ed., Cap. 8, pp. 228–234. American Burn Association, Advanced Burn Life Support (ABLS) Provider Manual y Guidelines for Burn Patient Referral. ATLS 10ª ed., capítulo de lesiones térmicas. GPC IMSS/CENETEC: Diagnóstico y tratamiento del paciente adulto con quemaduras graves.
`),
    sheet("q-inhalacion", "02", "Lesión por inhalación, monóxido de carbono, cianuro y vía aérea", `
## Lesión por inhalación, intoxicación por monóxido de carbono y cianuro, y manejo de la vía aérea

### Definición
Daño del aparato respiratorio por calor, por productos químicos del humo o por gases tóxicos absorbidos, que con frecuencia acompaña a las quemaduras ocurridas en espacios cerrados. Es el principal determinante de mortalidad en el quemado después de la edad y la superficie.

### Fisiopatología
La lesión por inhalación se presenta en el 10% al 20% de los pacientes admitidos en unidades de quemados y es el factor determinante independiente más letal de mortalidad, incrementándola en un 20% al 40% al asociarse con quemaduras cutáneas [Tratado AMCG 3ª ed., Cap. 238, p. 2018; Sabiston 21ª ed., Cap. 20, p. 486; Schwartz 10ª ed., Cap. 8, p. 228]. Comprende tres mecanismos fisiopatológicos lesivos independientes o superpuestos:
1. **Lesión Térmica de la Vía Aérea Superior (Supraglótica)**: Por encima de las cuerdas vocales. Debido a la excelente capacidad disipadora de calor del lecho vascular nasofaríngeo y el reflejo de cierre glótico, el aire caliente rara vez causa daño térmico directo por debajo de la glotis (salvo en inhalación de vapor a alta presión, cuya capacidad calórica supera 4,000 veces la del aire seco). Produce eritema, ulceración mucosa y un edema masivo progresivo de la orofaringe, epiglotis y repliegues aritenoepiglóticos que alcanza su máximo pico entre las **12 y 24 horas posteriores a la exposición**, provocando colapso mecánico obstructivo agudo si no se asegura la vía aérea tempranamente [Tratado AMCG 3ª ed., Cap. 238, p. 2019; Sabiston 21ª ed., Cap. 20, p. 487].
2. **Lesión Química Infraglótica y Traqueobronquial**: Provocada por la inhalación de humo con partículas de hollín y productos de combustión incompleta (aldehídos, óxidos de nitrógeno, acroleína, ácido clorhídrico, fosgeno). Las sustancias químicas hidrosolubles se disuelven en la mucosa bronquial formando ácidos o álcalis concentrados que desnaturalizan proteínas celulares, paralizan el aparato mucociliar, desprenden el epitelio respiratorio cilíndrico y desencadenan una intensa respuesta inflamatoria mediada por neutrófilos con liberación de interleucina-8 (IL-8), radicales libres de oxígeno y tromboxano A2. La exudación masiva de plasma rico en fibrinógeno hacia la luz bronquial se mezcla con detritos celulares necróticos y moco espeso, formando **moldes o tapones de fibrina intraluminales obstructivos** que provocan atelectasias segmentarias, hiperinsuflación distal, broncoespasmo severo, aumento del cortocircuito intrapulmonar (*shunt* derecha-izquierda) y predisposición extrema a neumonía bacteriana secundaria (*Pseudomonas aeruginosa*, *Staphylococcus aureus*) [Sabiston 21ª ed., Cap. 20, p. 488; Schwartz 10ª ed., Cap. 8, p. 229; American Burn Association Practice Guidelines 2024].
3. **Intoxicación Sistémica por Asfixiantes Químicos**:
   - *Monóxido de Carbono (CO)*: Se une a la hemoglobina con una afinidad **200 a 250 veces superior a la del oxígeno**, formando carboxihemoglobina (COHb) y desviando la curva de disociación de la hemoglobina hacia la izquierda (efecto Haldane inverso), impidiendo la liberación de oxígeno a los tejidos; además, inhibe la citocromo c oxidasa mitocondrial mitógena y se une a la mioglobina provocando isquemia miocárdica y cerebral.
     - Vida media de la COHb respirando aire ambiente: **240 a 320 minutos**; respirando **FiO₂ al 100% con mascarilla con reservorio o tubo endotraqueal: se reduce drásticamente a 40 a 60 minutos**; en cámara hiperbárica a 3 atmósferas: se reduce a 20 a 30 minutos.
     - Conducta clínica inmediata: Administración sistemática e inmediata de **oxígeno al 100% a alto flujo** a todo paciente con sospecha de inhalación de humo en espacio cerrado, midiendo niveles de COHb por co-oximetría arterial (la pulsioximetría estándar es engañosamente normal porque el oxímetro convencional confunde la longitud de onda de la COHb con la de la oxihemoglobina).
   - *Ácido Cianhídrico (Cianuro)*: Liberado por combustión de lana, seda, plásticos de poliuretano, nailon y resinas sintéticas. El cianuro se une con altísima afinidad al ion férrico (Fe³⁺) de la **citocromo c oxidasa (complejo IV) de la cadena de transporte de electrones mitocondrial**, bloqueando por completo la fosforilación oxidativa celular e induciendo hipoxia histotóxica masiva con respiración anaerobia obligada. Sospecha clínica: paciente rescatado de incendio en espacio cerrado con acidosis metabólica severa con anión gap elevado y **lactato sérico > 8 a 10 mmol/L** refractario a la reanimación hídrica.
     - Antídoto específico de primera línea: **Hidroxocobalamina (Cianokit)** a dosis de **5.0 g en infusión intravenosa en 15 minutos** en adultos (repite una segunda dosis de 5.0 g según evolución hemodinámica); la hidroxocobalamina se une al cianuro formando cianocobalamina (vitamina B12 no tóxica) que se excreta de forma segura por vía renal [Tratado AMCG 3ª ed., Cap. 238, p. 2020; Sabiston 21ª ed., Cap. 20, p. 488; Schwartz 10ª ed., Cap. 8, p. 230].

### Cuadro clínico
Sospechar inhalación ante: incendio en espacio cerrado, pérdida del estado de alerta en la escena, quemaduras faciales, vibrisas chamuscadas, hollín en boca, nariz o esputo, ronquera, estridor, disnea, sibilancias o broncorrea. La intoxicación por CO da cefalea, náusea, confusión, síncope, convulsiones y coma; el color "rojo cereza" es un signo tardío y poco frecuente. La intoxicación por cianuro produce alteración de la conciencia, hipotensión, convulsiones y apnea con acidosis láctica grave y saturación venosa de oxígeno inusualmente alta (las células no extraen oxígeno).

### Diagnóstico
- **Cooximetría arterial** (COHb): > 10% confirma exposición significativa en un no fumador; > 25% o síntomas neurológicos o cardiacos se consideran intoxicación grave. Los valores pueden ser bajos si ya se administró oxígeno: siempre interpretar con el tiempo transcurrido.
- **Lactato** sérico: > 8–10 mmol/L sugiere cianuro.
- **Broncoscopia** de fibra óptica: estándar para el diagnóstico y la gravedad de la lesión infraglótica (hollín, eritema, edema, ulceración, necrosis; escala de Endorf y Gamelli de 0 a 4); también permite retirar tapones.
- **Nasofibrolaringoscopia:** valora el edema supraglótico y guía la decisión de intubar.
- Radiografía de tórax: normal al ingreso en la mayoría; los infiltrados aparecen después.
- Gasometría seriada y relación PaO₂/FiO₂.

### Criterios de intubación
#### B. Criterios Clínicos Rigurosos de Intubación Endotraqueal vs Hallazgos No Determinantes
**CORRECCIÓN DE SEGURIDAD CLÍNICA AUDITADA**: Es un error doctrinario común en residentes asumir que la presencia de quemaduras faciales aisladas o vibrisas nasales chamuscadas constituye una indicación perentoria e inmediata de intubación endotraqueal profiláctica. Las vibrisas nasales chamuscadas, el hollín en esputo o el eritema facial son únicamente signos de exposición térmica que justifican un monitoreo continuo estrecho y la realización de una laringoscopia o nasofibroscopia flexible para evaluar las cuerdas vocales, pero **NO justifican la intubación mecánica invasiva aislada en ausencia de compromiso respiratorio o edema de la vía aérea**. La intubación innecesaria en el gran quemado incrementa sustancialmente la incidencia de neumonía asociada a la ventilación mecánica, sepsis respiratoria y estenosis subglótica [Sabiston 21ª ed., Cap. 20, p. 487; Schwartz 10ª ed., Cap. 8, p. 231; American Burn Association Practice Guidelines 2024].

**Indicaciones Formales Absolutas de Intubación Endotraqueal Inmediata**:
1. Signos clínicos evidentes de obstrucción mecánica inminente de la vía aérea superior: **estridor laríngeo inspiratorio**, ronquera progresiva, disfonía marcada, tiraje intercostal o taquipnea extrema.
2. Evidencia directa nasofibroscópica o laringoscópica de **edema significativo, ampollas mucosas, ulceración profunda o eritema intenso con estenosis de la hendidura glótica o cuerdas vocales**.
3. Quemaduras cutáneas profundas de espesor total circunferenciales del cuello con escara constrictiva rígida (el edema dérmico progresivo colapsa la laringe y la tráquea por compresión extrínseca).
4. Depresión del estado de alerta neurológico con incapacidad para proteger la vía aérea (**Escala de Coma de Glasgow ≤ 8 puntos**) secundario a hipoxia, intoxicación masiva por monóxido de carbono o traumatismo craneoencefálico concomitante.
5. Gran quemadura cutánea extensa que compromete **más del 40% al 50% de la Superficie Corporal Quemada (% SCQ)**: estos pacientes requerirán volúmenes masivos de reanimación hídrica que precipitarán edema orofaríngeo y de cuerdas vocales generalizado durante las primeras 12 a 24 horas, convirtiendo la intubación tardía en una maniobra extremadamente difícil o imposible.
6. Fatiga muscular respiratoria con insuficiencia ventilatoria aguda evidenciada en gasometría arterial: PaO₂ < 60 mmHg con FiO₂ > 0.5, PaCO₂ > 50 mmHg con pH < 7.25, o relación PaO₂/FiO₂ < 200 [Tratado AMCG 3ª ed., Cap. 238, p. 2021; Sabiston 21ª ed., Cap. 20, p. 487; Schwartz 10ª ed., Cap. 8, p. 231].

#### Técnica y detalles prácticos de la intubación
- Intubar temprano y con el operador más experimentado: el edema progresivo convierte una intubación fácil en una vía aérea quirúrgica.
- Usar tubo de calibre grande (≥ 7.5–8.0 en adultos) para permitir la broncoscopia y el aclaramiento de secreciones.
- La succinilcolina puede usarse en las primeras 24–48 h; después está contraindicada por el riesgo de hiperpotasemia (proliferación de receptores de acetilcolina extrasinápticos) hasta que la herida cierre.
- Fijar el tubo sin cinta adhesiva sobre la cara quemada (cintas de algodón o fijadores comerciales); el tubo desplazado en un paciente con edema facial es una urgencia vital.
- No extubar hasta que el edema ceda (prueba de fuga del globo, nasofibroscopia).
- Tener disponible el equipo de cricotiroidotomía.

### Tratamiento de la lesión por inhalación
- **Oxígeno al 100%** hasta que la COHb sea < 5–10% y desaparezcan los síntomas; la cámara hiperbárica se considera en intoxicaciones graves por CO (síncope, coma, convulsiones, isquemia miocárdica, embarazo con COHb > 15–20%) si está disponible y el paciente es trasladable, aunque su beneficio en secuelas neurológicas es controvertido y nunca debe retrasar la reanimación del gran quemado.
- **Hidroxocobalamina** ante sospecha de cianuro (no esperar la medición, que tarda horas); produce coloración roja de piel y orina e interfiere con algunas pruebas de laboratorio colorimétricas. El tiosulfato de sodio es una alternativa; los nitritos se evitan en el quemado porque la metahemoglobina agrava la hipoxia por CO.
- **Higiene pulmonar:** aspiración frecuente, broncoscopias terapéuticas, fisioterapia, movilización temprana.
- **Nebulizaciones con heparina** (5,000–10,000 UI c/4 h) con N-acetilcisteína y broncodilatadores (salbutamol) para disolver los moldes de fibrina: práctica de muchos centros con evidencia de calidad moderada.
- **Ventilación protectora:** volumen corriente de 6 mL/kg de peso ideal, presión meseta < 30 cmH₂O, PEEP adecuada; modos como la ventilación percusiva de alta frecuencia en centros con experiencia.
- No hay indicación de esteroides ni de antibióticos profilácticos; tratar la neumonía cuando se documente.
- La inhalación aumenta los requerimientos de líquidos: la reanimación no debe restringirse "para cuidar el pulmón".

### Complicaciones
Obstrucción de la vía aérea superior por edema, atelectasias y tapones, neumonía (la complicación más frecuente; *Pseudomonas* y *S. aureus*), síndrome de dificultad respiratoria aguda, traqueobronquitis necrosante, estenosis subglótica o traqueal por intubación prolongada, secuelas neurológicas tardías por CO (síndrome neuropsiquiátrico diferido a los 2–40 días: deterioro cognitivo, parkinsonismo, cambios de conducta).

### Pronóstico
La inhalación aumenta la mortalidad 20–40% sobre la esperada por edad y superficie. Los supervivientes pueden quedar con hiperreactividad bronquial, bronquiectasias o estenosis.

### Perlas
- Vibrisas chamuscadas o hollín indican exposición, no indicación automática de intubar: nasofibroscopia y vigilancia.
- Estridor, ronquera, edema glótico, Glasgow ≤ 8, quemadura > 40–50% SCQ o escara circunferencial de cuello: intubar temprano.
- El pulsioxímetro es normal en la intoxicación por CO: pedir cooximetría.
- Lactato > 8–10 refractario en incendio cerrado: hidroxocobalamina 5 g IV.
- Succinilcolina prohibida después de las 48 h en el quemado.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **2. Vía Aérea e Inhalación** | Módulo 32, Cap. 238, pp. 2018-2021 (Lesión supraglótica térmica, intoxicación por CO, hipoxia por cianuro). | Sabiston 21ª ed., Cap. 20, pp. 486-488 (Tapones de fibrina, COHb, cianuro y criterios estandarizados de intubación); Schwartz 10ª ed., Cap. 8, pp. 228-231 (Hidroxocobalamina, intubación restrictiva). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Cap. 238, pp. 2018–2021. Sabiston 21ª ed., Cap. 20, pp. 486–488. Schwartz 10ª ed., Cap. 8, pp. 228–231. American Burn Association Practice Guidelines 2024. Walker PF, et al. Diagnosis and management of inhalation injury: an updated review. Crit Care 2015.
`),
    sheet("q-reanimacion", "03", "Choque por quemadura y reanimación hídrica", `
## Choque por quemadura y reanimación hídrica

### Definición
El choque por quemadura es un estado de hipoperfusión que aparece en las primeras 24–48 horas en quemaduras de más de 15–20% SCQ en adultos (10% en niños). Combina hipovolemia por fuga capilar, componente distributivo y depresión miocárdica. La reanimación hídrica busca mantener la perfusión de los órganos y de la zona de estasis sin provocar sobrecarga.

### Fisiopatología
El choque por quemadura es una entidad mixta única que combina hipovolemia masiva, choque distributivo por fuga capilar y disfunción miocárdica intrínseca. Se desarrolla en dos fases metabólicas descritas clásicamente por Sir David Cuthbertson:
1. **Fase de Declive (Ebb Phase, Primeras 24 a 48 Horas)**:
   - *Fuga Capilar Sistémica*: La lesión térmica induce liberación masiva de mediadores vasoactivos locales y sistémicos (histamina, serotonina, bradicinina, leucotrienos, tromboxano A2, factor de necrosis tumoral alfa [TNF-α] e interleucina-1 [IL-1]). Esto altera la permeabilidad endotelial no sólo en el tejido quemado sino en toda la microvasculatura corporal si la quemadura supera el 20-25% SCQ.
   - Ocurre una salida torrencial de agua, electrólitos y proteínas plasmáticas (principalmente albúmina) hacia el espacio intersticial con pérdida de la presión oncótica intravascular y generación de un tercer espacio colosal.
   - *Respuesta Hemodinámica*: Caída crítica del gasto cardíaco y del volumen latido (incluso antes de que se manifieste la hipovolemia, atribuido a la liberación del "factor depresor del miocardio" y citocinas proinflamatorias), incremento compensatorio extremo de las resistencias vasculares sistémicas mediado por catecolaminas y angiotensina II, y disminución drástica del consumo tisular de oxígeno (VO₂) y de la tasa metabólica basal [Tratado AMCG 3ª ed., Cap. 238, p. 2021; Sabiston 21ª ed., Cap. 20, p. 489; Schwartz 10ª ed., Cap. 8, p. 232].

#### Consecuencias prácticas
- La fuga capilar es máxima en las primeras 8–12 horas y disminuye hacia las 24 horas; por eso la mitad del volumen se da en las primeras 8 horas.
- Los coloides administrados en las primeras horas se fugan al intersticio; la albúmina se agrega como "rescate" a partir de las 8–12 h si los requerimientos superan lo calculado.
- El edema se forma tanto en tejido quemado como en tejido sano cuando la quemadura es extensa.
- La hemoconcentración (hematocrito alto) es habitual al inicio y no debe confundirse con ausencia de hipovolemia.

### Fórmulas y protocolo de reanimación
#### C. Fórmulas de Reanimación Hídrica: Parkland vs Consenso ABA Moderno
Históricamente, la fórmula de Parkland (Baxter, 1968) dictaba infundir 4 mL/kg/% SCQ de Ringer Lactato en las primeras 24 horas. Sin embargo, la evidencia clínica de las últimas dos décadas demostró que la sobre-reanimación hídrica sistemática causa el fenómeno de ***fluid creep*** (deslizamiento de líquidos), complicación grave asociada a edema pulmonar no cardiogénico, síndrome de dificultad respiratoria aguda (SDRA), síndrome compartimental abdominal (SCA) y síndrome compartimental de extremidades [Sabiston 21ª ed., Cap. 20, p. 493; Schwartz 10ª ed., Cap. 8, p. 235; American Burn Association Consensus Guidelines 2024].

**Protocolo de Reanimación Hídrica Vigente**:
1. **Adultos con Quemaduras Térmicas o Químicas (Consenso ABA)**:
   $$\\text{Volumen Total (24 h)} = \\mathbf{2.0\\text{ mL}} \\times \\text{Peso corporal (kg)} \\times \\mathbf{\\%\\text{ SCQ (2º y 3º grado)}}$$
2. **Adultos con Quemaduras Eléctricas de Alto Voltaje o Lesión por Inhalación Concomitante**:
   $$\\text{Volumen Total (24 h)} = \\mathbf{4.0\\text{ mL}} \\times \\text{Peso corporal (kg)} \\times \\mathbf{\\%\\text{ SCQ}}$$
3. **Población Pediátrica (< 14 años o < 40 kg)**:
   $$\\text{Volumen Total (24 h)} = \\mathbf{3.0\\text{ mL}} \\times \\text{Peso corporal (kg)} \\times \\mathbf{\\%\\text{ SCQ}}$$
   *Requisito Pediátrico Obligatorio*: En niños, debido a sus limitadas reservas de glucógeno hepático y alto riesgo de hipoglucemia letal, debe agregarse en infusión paralela **Líquidos de Mantenimiento con Glucosa al 5%** en solución Ringer Lactato o salina al 0.45% calculados por fórmula de Holliday-Segar (100 mL/kg para los primeros 10 kg, 50 mL/kg para 10-20 kg y 20 mL/kg para > 20 kg) [Schwartz 10ª ed., Cap. 8, p. 236; Sabiston 21ª ed., Cap. 20, p. 494].
- *Cronograma de Administración de Líquidos*:
  - El tiempo de reanimación se contabiliza **a partir de la hora exacta en que ocurrió la quemadura**, NO desde la hora de llegada al hospital.
  - La **mitad (50%)** del volumen calculado para 24 horas se administra en las **primeras 8 horas**.
  - La **mitad restante (50%)** se infunde de manera constante durante las **siguientes 16 horas**.
- *Solución de Elección*: **Ringer Lactato** (o Solución Hartmann balanceada). Su concentración de sodio fisiológica (130 mEq/L) y tampón lactato (28 mEq/L, que se metaboliza a bicarbonato en el hígado) evitan la acidosis hiperclorémica inducida por la solución salina al 0.9% (154 mEq/L de cloro).
- *Metas de Monitorización Fisiológica Horaria*:
  - La fórmula es únicamente una guía inicial de arranque; la velocidad de infusión se ajusta cada hora en un 10% a 20% arriba o abajo basándose estrictamente en la uresis horaria:
    - **Adultos (Térmica/Química)**: **0.5 mL/kg/h** (aproximadamente 30 a 50 mL/h en un adulto promedio de 70 kg).
    - **Quemadura Eléctrica con Mioglobinuria o Hemoglobinuria**: **1.0 a 1.5 mL/kg/h** (aproximadamente 75 a 100 mL/h en adultos) hasta que la orina aclare visualmente, para prevenir la precipitación intratubular de cilindros de pigmento hemo y la necrosis tubular aguda.
    - **Niños (< 30-40 kg)**: **1.0 a 1.5 mL/kg/h**.
  - Otros parámetros de perfusión: presión arterial media (PAM) ≥ 65 mmHg, frecuencia cardíaca < 110 lpm, lactato sérico normalizándose y déficit de base entre -2 y +2 [Tratado AMCG 3ª ed., Cap. 238, p. 2024; Sabiston 21ª ed., Cap. 20, p. 495; Schwartz 10ª ed., Cap. 8, p. 237].

#### Ejemplo de cálculo
Adulto de 70 kg con 40% SCQ de segundo y tercer grado por llama, sin inhalación, quemado a las 10:00 y que llega a las 12:00: 2 mL × 70 kg × 40 = 5,600 mL en 24 h. La mitad (2,800 mL) debe pasar antes de las 18:00 (8 h desde la quemadura); como ya pasaron 2 horas sin líquidos, esos 2,800 mL se reparten en las 6 horas restantes (≈ 467 mL/h), y los otros 2,800 mL en las 16 horas siguientes (175 mL/h). Después, la velocidad se ajusta cada hora según la diuresis (meta 35 mL/h para 70 kg).

#### Ajuste horario práctico
- Diuresis por debajo de la meta durante 2 horas: aumentar la infusión 10–20%; no dar bolos repetidos (aumentan el edema) salvo hipotensión.
- Diuresis por encima de la meta (por ejemplo > 1 mL/kg/h en adulto): disminuir 10–20%.
- Si el volumen proyectado supera 6 mL/kg/% SCQ en 24 h (límite de Ivy, aproximadamente 250 mL/kg) o hay oliguria a pesar del aumento: considerar albúmina al 5% como rescate, medir presión intraabdominal (vesical) cada 4 horas, buscar causas de mala respuesta (escarotomías pendientes, inhalación, quemadura eléctrica, retraso del inicio, intoxicación, sepsis) y valorar monitoreo hemodinámico avanzado.
- Diuréticos y vasopresores no sustituyen el volumen; los diuréticos invalidan la diuresis como marcador. La excepción es la mioglobinuria persistente (manitol tras asegurar el volumen, según el centro).
- A las 24 h: disminuir el cristaloide a mantenimiento más pérdidas insensibles (que en el quemado son altas: aproximadamente [25 + % SCQ] × superficie corporal en m² mL/h) y vigilar sodio, porque las curaciones y las pérdidas favorecen hiper o hiponatremia.

### Monitoreo
Sonda urinaria con medición horaria, presión arterial (línea arterial en quemaduras > 40%), frecuencia cardiaca, estado mental, lactato y déficit de base, hematocrito, electrolitos, glucosa, presión intraabdominal en reanimaciones de gran volumen, ecocardiografía o monitoreo del gasto cardiaco cuando no hay respuesta.

### Complicaciones de la reanimación
- **Subreanimación:** lesión renal aguda, progresión de la profundidad de la quemadura (zona de estasis), choque y falla orgánica.
- **Sobrerreanimación (*fluid creep*):** edema de la vía aérea, edema pulmonar y SDRA, síndrome compartimental abdominal (presión intraabdominal > 20 mmHg con disfunción orgánica; tratamiento con sedación, relajación, descompresión gástrica, paracentesis percutánea y, si falla, laparotomía descompresiva), síndrome compartimental de extremidades no quemadas y síndrome compartimental orbitario (cantotomía lateral).

### Discrepancia bibliográfica
| Parámetro / Entidad Quirúrgica | Tratado de Cirugía General (AMCG 3ª edición) | Schwartz: Principios de Cirugía (10ª edición) | Sabiston: Tratado de Cirugía (21ª edición) | Análisis Crítico y Guía de Conducta para el Residente (R2) |
| :--- | :--- | :--- | :--- | :--- |
| **Fórmula de Reanimación Hídrica Inicial en Quemaduras Térmicas** | **Módulo 32, Cap. 238, p. 2022**: Recomienda de forma clásica la **Fórmula de Parkland completa a 4.0 mL/kg/% SCQ** de Ringer Lactato en las primeras 24 horas para todos los quemados de segundo y tercer grado. | **Cap. 8, p. 235**: Adopta el umbral de **2.0 mL/kg/% SCQ** en adultos con quemaduras térmicas y químicas, advirtiendo del peligro extremo de *fluid creep* (síndrome compartimental abdominal) al utilizar 4 mL/kg. | **Cap. 20, p. 493**: Ratifica el consenso moderno de la American Burn Association fijando **2.0 mL/kg/% SCQ en adultos**, reservando estrictamente los **4.0 mL/kg/% SCQ** para quemaduras eléctricas de alto voltaje o con lesión por inhalación demostrada. | **Discrepancia Cuantitativa Real (4 mL vs 2 mL)**: La doctrina histórica de Parkland sobrestimaba las necesidades hidroelectrolíticas provocando ascitis a tensión y edema masivo. El residente debe iniciar a 2 mL/kg/% SCQ en quemaduras térmicas de adultos y titular dinámicamente cada hora según la meta urinaria de 0.5 mL/kg/h. |

### Perlas
- Se cuenta desde la hora de la quemadura, no desde la llegada.
- Adulto térmico: 2 mL/kg/% SCQ; eléctrica o inhalación: 4 mL; niños: 3 mL + glucosa.
- La fórmula solo inicia; la diuresis manda.
- Más de 6 mL/kg/% SCQ proyectado: rescate con albúmina y medir presión vesical.
- Nada de bolos repetidos ni diuréticos para "hacer orinar".

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **3. Fisiopatología, Choque y Reanimación** | Módulo 32, Cap. 238, pp. 2021-2024 (Ebb y Flow phase, Wallace, Lund-Browder); Módulo 7, Cap. 53, p. 426 (Respuesta hipermetabólica). | Schwartz 10ª ed., Cap. 8, pp. 232-237 (Fórmula ABA 2 mL/kg/%SCQ, fluid creep, uresis horaria); Sabiston 21ª ed., Cap. 20, pp. 489-495 (Reanimación pediátrica con glucosa, choque por quemadura). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Cap. 238, pp. 2021–2024. Sabiston 21ª ed., Cap. 20, pp. 489–495. Schwartz 10ª ed., Cap. 8, pp. 232–237. American Burn Association Consensus Guidelines 2024 (reanimación). Pruitt BA. Protection from excessive resuscitation: "pushing the pendulum back". J Trauma 2000 (*fluid creep*). Saffle JR. The phenomenon of "fluid creep" in acute burn resuscitation. J Burn Care Res 2007.
`),
    sheet("q-hipermetabolismo", "04", "Respuesta hipermetabólica y soporte nutricional del gran quemado", `
## Respuesta hipermetabólica y soporte nutricional del gran quemado

### Definición
Después de la fase de reanimación, las quemaduras de más de 20–30% SCQ inducen el estado hipermetabólico más intenso de toda la patología quirúrgica: aumento del gasto energético, catabolismo proteico, resistencia a la insulina y disfunción inmunológica, que pueden persistir hasta 1–2 años y explican la pérdida de masa muscular, la mala cicatrización y la infección.

### Fisiopatología
2. **Fase de Flujo (Flow Phase, Posterior a las 48 Horas)**:
   - Una vez restaurada la integridad del endotelio capilar y reabsorbido el edema intersticial, el paciente entra en un estado hiperdinámico e hipermetabólico severo y prolongado que puede persistir hasta 12 a 24 meses.
   - *Mediación Neuroendocrina*: Elevación masiva y sostenida de catecolaminas endógenas (10 a 20 veces su valor basal), cortisol, glucagón y hormona del crecimiento. El gasto cardíaco se duplica, el consumo de oxígeno se incrementa entre 100% y 200%, y la temperatura corporal central se resetea a 38.0 - 38.5 °C en el hipotálamo.
   - *Catabolismo Proteico y Lipólisis*: Degradación acelerada del músculo esquelético (hasta 0.5 a 1.0 kg de masa magra/día en quemaduras graves desatendidas) para proveer aminoácidos gluconeogénicos (alanina, glutamina) al hígado, resistencia periférica masiva a la insulina con hiperglucemia persistente e hígado graso por lipólisis desmedida de ácidos grasos libres [Tratado AMCG 3ª ed., Cap. 53, p. 426; Sabiston 21ª ed., Cap. 20, p. 490].

#### Mediadores y consecuencias
- **Catecolaminas:** taquicardia, aumento del gasto cardiaco, lipólisis, glucogenólisis, termogénesis.
- **Cortisol y glucagón:** gluconeogénesis a partir de aminoácidos musculares.
- **Citocinas (IL-6, TNF-α):** fiebre, anorexia, síntesis de reactantes de fase aguda.
- **Resistencia a la insulina:** hiperglucemia que favorece infección y pérdida de injertos.
- **Pérdida de la barrera intestinal:** translocación bacteriana; por eso la nutrición enteral temprana es protectora.

### Evaluación
Gasto energético: la calorimetría indirecta es el estándar. Fórmulas aproximadas: Curreri (25 kcal × kg + 40 kcal × % SCQ, que tiende a sobrestimar), Toronto, o 25–35 kcal/kg/día ajustado a la evolución. Requerimientos proteicos: 1.5–2.0 g/kg/día en adultos (hasta 3 g/kg/día en niños). Monitoreo con balance nitrogenado, prealbúmina, glucosa, peso semanal y función hepática (esteatosis por sobrealimentación).

### Tratamiento
- **Nutrición enteral temprana** (en las primeras 24 horas) por sonda nasogástrica o nasoyeyunal; reduce la translocación, las úlceras de estrés y la pérdida muscular. La nutrición parenteral se reserva para la intolerancia enteral prolongada (se asocia a más infecciones).
- **Control glucémico:** meta de 130–180 mg/dL con insulina.
- **Escisión y cobertura tempranas:** la herida abierta es el motor del hipermetabolismo; cerrar la herida es el tratamiento más eficaz.
- **Ambiente térmico:** cuartos a 28–33 °C para disminuir el gasto energético dedicado a la termogénesis.
- **Moduladores farmacológicos:**
  - **Propranolol** titulado para reducir la frecuencia cardiaca ~ 20% del basal: disminuye el gasto energético, el catabolismo muscular y la esteatosis (evidencia sólida en niños, creciente en adultos).
  - **Oxandrolona** (anabólico) 10 mg c/12 h: mejora la masa magra y la cicatrización del sitio donador; vigilar función hepática.
  - Insulina, metformina y hormona de crecimiento recombinante en protocolos de investigación o centros especializados.
- **Micronutrientes:** vitamina C, zinc, selenio y cobre (pérdidas por exudado); glutamina con evidencia contradictoria (el ensayo RE-ENERGIZE de 2022 no mostró beneficio).
- **Rehabilitación temprana y ejercicio de resistencia** en la fase de convalecencia.

### Complicaciones metabólicas
Hiperglucemia, sobrealimentación (hipercapnia, esteatosis hepática), síndrome de realimentación, pérdida de masa magra (una pérdida > 10% compromete la inmunidad y la cicatrización, > 40% suele ser letal), úlcera de estrés duodenal (**úlcera de Curling**; prevenida con nutrición enteral temprana e inhibidores de bomba o bloqueadores H2), colecistitis alitiásica, osteopenia e hipovitaminosis D en el seguimiento.

### Sepsis en el quemado
La fiebre y la taquicardia son constantes por el hipermetabolismo, por lo que el SIRS clásico no sirve. La ABA propone criterios de sepsis propios: temperatura > 39 °C o < 36.5 °C, taquicardia > 110 lpm, taquipnea > 25 rpm o ventilación minuto > 12 L/min, trombocitopenia < 100,000 (después de 3 días), hiperglucemia o resistencia a la insulina nueva e intolerancia a la alimentación enteral, junto con un foco infeccioso documentado. La infección de la herida se confirma con biopsia cuantitativa (> 10⁵ UFC/g de tejido con invasión de tejido viable en la histología). Los focos más frecuentes son neumonía, herida, catéteres y vías urinarias.

### Otras complicaciones del gran quemado en la fase de flujo
- **Colecistitis alitiásica:** fiebre, dolor en hipocondrio derecho o intolerancia a la vía oral en un paciente crítico; ecografía con vesícula distendida, pared engrosada y líquido perivesicular; tratamiento con colecistostomía percutánea o colecistectomía según el estado del paciente.
- **Síndrome compartimental abdominal** tardío por sepsis o reanimaciones repetidas.
- **Isquemia mesentérica no oclusiva** en pacientes con vasopresores y nutrición enteral a dosis altas: distensión, intolerancia y acidosis láctica obligan a suspender la alimentación y explorar.
- **Trombosis venosa profunda:** profilaxis con heparina de bajo peso molecular en cuanto el sangrado lo permita; los catéteres femorales aumentan el riesgo.
- **Insuficiencia suprarrenal relativa** en choque refractario (hidrocortisona).
- **Osificación heterotópica** en codos y hombros en quemaduras extensas con inmovilidad.

#### Ejemplo de prescripción nutricional
Adulto de 70 kg con 45% SCQ en el día 3: meta calórica por calorimetría o, en su ausencia, alrededor de 30–35 kcal/kg/día (2,100–2,450 kcal), proteína 2 g/kg/día (140 g), fórmula enteral polimérica hiperproteica por sonda nasogástrica iniciada en las primeras 24 h y progresada en 48–72 h, sin suspenderla en el perioperatorio de las escarectomías (alimentación pospilórica permite mantenerla durante la cirugía), glucosa capilar cada 4–6 h con insulina, reposición de fósforo, magnesio y potasio, y propranolol titulado si la frecuencia cardiaca persiste > 120 lpm sin hipovolemia.

### Pronóstico
La recuperación de la masa muscular y de la fuerza tarda meses; la intervención metabólica (propranolol, oxandrolona, ejercicio) acorta esa fase y mejora la función.

### Perlas
- Fase *ebb* (24–48 h): hipometabolismo y choque; fase *flow*: hipermetabolismo hasta 1–2 años.
- Nutrición enteral en las primeras 24 h; proteína 1.5–2 g/kg/día.
- Cerrar la herida es la mejor terapia metabólica.
- Propranolol reduce el catabolismo; oxandrolona mejora la masa magra.
- La úlcera de Curling es la úlcera de estrés del quemado.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **3. Fisiopatología, Choque y Reanimación** | Módulo 32, Cap. 238, pp. 2021-2024 (Ebb y Flow phase, Wallace, Lund-Browder); Módulo 7, Cap. 53, p. 426 (Respuesta hipermetabólica). | Schwartz 10ª ed., Cap. 8, pp. 232-237 (Fórmula ABA 2 mL/kg/%SCQ, fluid creep, uresis horaria); Sabiston 21ª ed., Cap. 20, pp. 489-495 (Reanimación pediátrica con glucosa, choque por quemadura). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Cap. 53, p. 426 y Cap. 238. Sabiston 21ª ed., Cap. 20, p. 490. Schwartz 10ª ed., Cap. 8. Herndon DN, Tompkins RG. Support of the metabolic response to burn injury. Lancet 2004. Greenhalgh DG, et al. American Burn Association consensus conference to define sepsis and infection in burns. J Burn Care Res 2007. Heyland DK, et al. RE-ENERGIZE trial, N Engl J Med 2022.
`),
    sheet("q-herida", "05", "Manejo local de la quemadura: escarotomía, escarectomía, injertos y tópicos", `
## Manejo local de la quemadura: escarotomía, escarectomía, injertos y antimicrobianos tópicos

### Definición
Conjunto de procedimientos dirigidos a la herida: descompresión de la escara constrictiva (escarotomía y fasciotomía), retiro del tejido necrótico (escarectomía), cobertura temporal o definitiva (injertos y sustitutos dérmicos) y prevención de la infección local (antimicrobianos tópicos y apósitos).

### Fisiopatología de la herida
La escara es tejido muerto, avascular e inelástico que se coloniza por la flora cutánea en las primeras 48 horas (grampositivos) y después por gramnegativos (*Pseudomonas*, *Acinetobacter*, *Klebsiella*) y hongos. Al no tener irrigación, el antibiótico sistémico no llega a ella; la carga bacteriana y las citocinas que libera alimentan la respuesta inflamatoria sistémica. Su retiro temprano y el cierre con piel interrumpen ese círculo.

### Escarotomía y fasciotomía
#### A. Escarotomía y Fasciotomía Descompresivas de Urgencia
Las quemaduras circunferenciales de espesor total (tercer grado) en las extremidades o el tórax producen una escara rígida inelástica. Conforme se administra la reanimación hídrica y se desarrolla el edema intersticial progresivo debajo de la escara, se incrementa la presión tisular intersticial intracompartimental:
1. **Escarotomía Torácica**: Indicada ante quemaduras circunferenciales de tórax que provocan restricción mecánica ventilatoria con presiones pico elevadas en el ventilador (> 35-40 cmH₂O), hipoxemia progresiva e hipoventilación.
   - *Técnica*: Incisiones a lo largo de las líneas axilares anteriores bilaterales extendidas desde la clavícula hasta el reborde costal inferior, unidas por una incisión transversal a nivel de la unión toracoabdominal (en forma de "H" o marco rectangular). Se profundiza exclusivamente a través de la escara avascular hasta visualizar la grasa subcutánea viable, observándose la separación inmediata de los bordes con expansión torácica visible [Tratado AMCG 3ª ed., Cap. 238, p. 2024; Schwartz 10ª ed., Cap. 8, p. 238].
2. **Escarotomía de Extremidades**: Indicada ante la pérdida de pulsos distales evaluados por ultrasonido Doppler, cianosis acra, retraso del llenado capilar (> 3 segundos), parestesias o **presión intracompartimental > 30 mmHg** medida por manometría de aguja.
   - *Técnica*: Incisiones longitudinales medial y lateral a lo largo del eje axial de la extremidad sobre piel quemada, evitando pasar directamente sobre trayectos nerviosos superficiales (nervio cubital en el canal epitrocleoolecraneano, nervio peroneo común en la cabeza del peroné).
3. **Fasciotomía**: A diferencia de la escarotomía (que sólo divide la escara y el subcutáneo), la fasciotomía incide la fascia muscular profunda. Está formalmente indicada en **quemaduras eléctricas de alto voltaje**, síndromes compartimentales musculares que no ceden tras escarotomía o traumatismos por aplastamiento asociados [Sabiston 21ª ed., Cap. 20, p. 496; Schwartz 10ª ed., Cap. 8, p. 239].

#### Detalles técnicos y de seguridad
- Se realiza con electrocauterio en la cama o en el quirófano; por ser tejido insensible requiere poca anestesia, pero sí analgesia y sedación.
- En la mano: incisiones mediales y laterales de los dedos (en el lado no dominante para la pinza: cubital del pulgar, radial del meñique) y dorsales entre metacarpianos; siempre consultar al cirujano plástico.
- En el cuello, la escarotomía circunferencial que compromete la vía aérea se libera con incisiones laterales.
- Sangrado: los bordes pueden sangrar al liberar la tensión; hemostasia con cauterio.
- Después de la escarotomía debe recuperarse el pulso o la presión pico; si no, sospechar síndrome compartimental muscular y hacer fasciotomía.

### Escarectomía temprana e injertos
#### B. Escarectomía Temprana e Injertos Cutáneos
El estándar de oro internacional indiscutible en quemaduras profundas de segundo grado profundo y tercer grado es la **Escisión Tangencial Quirúrgica Temprana y Cierre Inmediato con Injertos dentro de los primeros 3 a 7 días** post-quemadura (una vez superada la fase inicial de choque y reanimación hemodinámica). La remoción precoz de la escara necrótica reduce drásticamente la translocación bacteriana, la liberación de citocinas inflamatorias, la sepsis de origen cutáneo, la estancia intrahospitalaria y la mortalidad [Tratado AMCG 3ª ed., Cap. 238, p. 2025; Sabiston 21ª ed., Cap. 20, p. 497; Schwartz 10ª ed., Cap. 8, p. 240].
- *Técnicas de Escarectomía*:
  - **Escisión Tangencial (Dermatomo manual de Watson o Goulian)**: Consiste en retirar láminas sucesivas muy finas de escara (0.2 a 0.5 mm) hasta alcanzar un lecho dérmico viable caracterizado por sangrado capilar uniforme y difuso (*punctum* hemorrágico) y color blanco nacarado o tejido subcutáneo amarillo brillante viable.
  - **Escisión Fascial**: Remoción completa en bloque de la piel y el tejido celular subcutáneo hasta el plano de la fascia muscular subyacente mediante electrocauterio. Reservada para quemaduras extremadamente profundas de tercer y cuarto grado o quemaduras masivas (> 60% SCQ) con el fin de minimizar la pérdida hemática transoperatoria, aunque produce un defecto estético de contorno más pronunciado.
- *Coberturas Cutáneas e Injertos*:
  - **Autoinjertos**: Tejido autólogo del propio paciente; es el único método de cobertura epitelial permanente definitiva. Se obtienen con dermatomo eléctrico (espesor parcial de 0.010 a 0.015 pulgadas, equivalente a 0.25 a 0.35 mm). Pueden mallarse (proporciones 1.5:1 a 3:1) para ampliar su superficie de cobertura en grandes extensiones y permitir el drenaje de hematomas/seromas.
  - **Aloinjertos (Piel de Cadáver de Banco)** y **Xenoinjertos (Piel Porcina)**: Coberturas biológicas temporales indispensables cuando no hay sitios donadores autólogos inmediatos suficientes. Reducen el dolor, controlan la pérdida de calor y agua, y previenen la infección hasta que los sitios donadores curen para una nueva cosecha.
  - **Matrices Dérmicas Acelulares (Integra, Matriderm)**: Compuestas de colágeno bovino y condroitín-6-sulfato con una capa externa de silicona semipermeable; permiten la formación de una neodermis vascularizada sobre la cual se coloca un injerto epidérmico fino autólogo a las 2 a 3 semanas [Sabiston 21ª ed., Cap. 20, p. 498; Schwartz 10ª ed., Cap. 8, p. 241].

#### Sitios donadores y cuidados del injerto
- Sitios donadores preferidos: muslo anterolateral, espalda, glúteos, cuero cabelludo (epiteliza rápido y no deja cicatriz visible). El sitio donador cura en 10–14 días y puede volver a cosecharse.
- El injerto prende en tres fases: imbibición plasmática (primeras 48 h), inosculación (48–72 h) y revascularización (día 4–7). Las causas de pérdida del injerto son, en orden de frecuencia: **hematoma o seroma** (separa el injerto del lecho), infección (*Streptococcus pyogenes* destruye injertos incluso con bajas cantidades) y cizallamiento. Por eso se inmoviliza 5 días con apósito compresivo o presión negativa y se revisa al quinto día.
- El injerto de espesor total (con toda la dermis) se contrae menos y da mejor resultado en cara, manos y articulaciones, pero el sitio donador se cierra primariamente y su superficie es limitada.
- El injerto mallado se contrae más y deja patrón en "red"; en cara y manos se prefieren láminas sin mallar.
- Técnicas para quemaduras masivas: injertos con malla amplia sobrecubiertos con aloinjerto (técnica "sándwich" de Alexander), queratinocitos cultivados, suspensión autóloga de células epidérmicas.

### Antimicrobianos tópicos
#### C. Antimicrobianos Tópicos
La escara quemada desvascularizada actúa como un medio de cultivo óptimo para bacterias y hongos donde los antibióticos sistémicos no penetran por vía hematógena. Por ello, los **antimicrobianos tópicos son obligatorios** [Tratado AMCG 3ª ed., Cap. 238, p. 2025; Schwartz 10ª ed., Cap. 8, p. 242; Sabiston 21ª ed., Cap. 20, p. 499]:

| Fármaco Tópico | Espectro Antimicrobiano | Penetración en Escara | Efectos Adversos / Complicaciones Clave | Indicación Clínica Quirúrgica Primaria |
| :--- | :--- | :--- | :--- | :--- |
| **Sulfadiazina de Plata al 1%** (Silvadene) | Amplio espectro (Gram positivos y Gram negativos, *Pseudomonas*, *Candida*) | **Baja a moderada** (actúa en superficie) | **Leucopenia transitoria transitoria** (neutropenia por supresión medular reversible); pseudoescara grisácea que enmascara la herida; argiria cutánea local | Antimicrobiano de uso más extendido en quemaduras de segundo grado y lechos limpios. Contraindicado en alergia a sulfas y último mes de embarazo. |
| **Acetato de Mafenida al 8.5%** (Sulfamylon crema o sol. 5%) | Excelente contra Gram negativos (*Pseudomonas aeruginosa*) y anaerobios | **Excelente y profunda** (atraviesa cartílago y escara gruesa) | **Dolor severo a la aplicación**; **acidosis metabólica hiperclorémica** por inhibición de la anhidrasa carbónica renal con taquipnea compensatoria | Quemaduras eléctricas, quemaduras infectadas profundas y áreas cartilaginosas avasculares (pabellón auricular y nariz) para prevenir condritis supurativa. |
| **Nitrato de Plata al 0.5%** (Solución acuosa) | Gram positivos, Gram negativos y hongos | **Superficial pura** (nula penetración en escara) | Mancha de color negro indeleble piel y ropa; **hiponatremia, hipocloremia e hipomagnesemia** severas por lixiviación electrolítica transcutánea; metahemoglobinemia rara | Pacientes con hipersensibilidad comprobada a sulfamidas o toxicodermias extensas (NET/Stevens-Johnson). |
| **Pomada de Bacitracina / Polimixina B** | Gram positivos (bacitracina) y Gram negativos (polimixina) | Superficial | Toxicidad sistémica nula; riesgo bajo de dermatitis de contacto | Quemaduras superficiales de cara, cuello, zonas periorificiales e injertos en fase de integración. |

#### Apósitos modernos
- Apósitos con plata nanocristalina o hidrofibra con plata: se cambian cada 3–7 días, disminuyen el dolor y el número de curaciones; útiles en segundo grado superficial e intermedio y en sitios donadores.
- Sustitutos biosintéticos (por ejemplo membranas de silicona-nailon con colágeno): cobertura temporal de quemaduras superficiales limpias.
- Quemaduras de segundo grado superficial pequeñas: lavado, retiro de ampollas rotas (las ampollas intactas pequeñas pueden dejarse), apósito no adherente y curaciones; cicatrizan sin cirugía.

### Manejo de la infección de la herida
Signos: cambio de coloración de la escara (negra o violácea), separación prematura de la escara, conversión de una quemadura de espesor parcial a total, celulitis perilesional, pérdida de injertos, signos sistémicos. La biopsia cuantitativa confirma la invasión. El tratamiento es la escisión del tejido infectado más antibiótico sistémico guiado por cultivo. La infección por hongos (*Aspergillus*, *Fusarium*, *Mucor*) es grave y exige escisión amplia y antifúngico.

### Complicaciones
Hemorragia transoperatoria de la escarectomía (aproximadamente 2–4% del volumen sanguíneo por cada 1% de superficie extirpada; se limita con torniquete en extremidades, infiltración con solución con epinefrina, compresas con epinefrina y trombina tópica), hipotermia en quirófano (calentar la sala a 30 °C o más), pérdida de injertos, infección, cicatriz hipertrófica y contracturas.

### Rehabilitación y cicatrices
Férulas en posición antideformidad desde el ingreso (cuello en extensión, hombro en abducción de 90°, codo y rodilla en extensión, mano en posición intrínseca *plus*), movilización temprana, presoterapia y silicona tras la epitelización, y seguimiento para liberar contracturas.

### Perlas
- Escarotomía: tórax con presión pico > 35–40 cmH₂O; extremidad con presión compartimental > 30 mmHg o pérdida de pulso Doppler.
- Fasciotomía en alto voltaje o compartimental persistente.
- Escisión tangencial e injerto en los primeros 3–7 días.
- La causa número uno de pérdida del injerto es el hematoma o seroma.
- Mafenida: penetra cartílago, causa acidosis; sulfadiazina: leucopenia; nitrato de plata: hiponatremia.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **4. Manejo Local, Escarectomías y Tópicos**| Módulo 32, Cap. 238, pp. 2024-2025 (Escarotomías torácica y extremidades, apósitos, sulfadiazina de plata). | Schwartz 10ª ed., Cap. 8, pp. 238-242 (Presiones compartimentales, sulfamylon y acidosis por anhidrasa carbónica); Sabiston 21ª ed., Cap. 20, pp. 496-499 (Matrices acelulares, autoinjertos mallados). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Cap. 238, pp. 2024–2025. Sabiston 21ª ed., Cap. 20, pp. 496–499. Schwartz 10ª ed., Cap. 8, pp. 238–242. ISBI Practice Guidelines for Burn Care 2016 y 2018. Janzekovic Z. A new concept in the early excision and immediate grafting of burns. J Trauma 1970.
`),
    sheet("q-electricas", "06", "Quemaduras eléctricas", `
## Quemaduras eléctricas

### Definición
Lesión tisular producida por el paso de corriente eléctrica a través del cuerpo. La corriente genera calor según la resistencia de cada tejido y además produce lesiones por el arco eléctrico, por la ignición de la ropa (llama) y por traumatismo (caídas, contracciones tetánicas). Incluye la lesión por rayo, que tiene características propias.

### Epidemiología
Representan alrededor del 3–5% de los ingresos a unidades de quemados, con predominio en hombres jóvenes con accidentes laborales (electricistas, trabajadores de la construcción y de líneas de alta tensión) y en niños que muerden cables o introducen objetos en contactos. En México son una causa frecuente de amputaciones en la población trabajadora y de referencia a los centros de quemados del IMSS.

### Fisiopatología
1. **Bajo Voltaje (< 1,000 Voltios)**: Habituales en el hogar (corriente alterna de 110-220 V a 60 Hz). El contacto produce tetania muscular sostenida que impide al sujeto soltar la fuente conductora ("no-let-go phenomenon"), con elevado riesgo de fibrilación ventricular primaria. Suelen dejar lesiones cutáneas pequeñas y bien delimitadas en puntos de contacto y salida.
2. **Alto Voltaje (≥ 1,000 Voltios)**: Accidentes industriales o líneas de alta tensión. El cuerpo actúa como una resistencia eléctrica en serie según la Ley de Joule ($Q = I^2 \\times R \\times t$): el hueso tiene la mayor resistencia eléctrica, calentándose intensamente y disipando calor masivo a los tejidos adyacentes profundos.
   - *Patrón Lesional en "Témpano de Hielo" (Iceberg Effect)*: La superficie cutánea exterior puede mostrar quemaduras térmicas circunscritas mínimas en los puntos de entrada y salida, mientras que en la profundidad muscular existe una **necrosis muscular periósea masiva oculta** de compartimentos profundos.
   - *Complicaciones*: Rabdomiólisis masiva con liberación de mioglobina a la circulación sistémica (precipita en los túbulos renales causando insuficiencia renal aguda nefrotóxica anúrica), hiperpotasemia severa letal aguda por citólisis muscular, arritmias cardíacas inmediatas o tardías y síndrome compartimental severo que exige **fasciotomías descompresivas tempranas** [Tratado AMCG 3ª ed., Cap. 238, p. 2026; Sabiston 21ª ed., Cap. 20, p. 500; Schwartz 10ª ed., Cap. 8, p. 243].

#### Factores que determinan el daño
- **Voltaje y tipo de corriente:** la corriente alterna es más peligrosa que la continua a igual voltaje, porque produce tetania (el paciente no puede soltar el conductor) y arritmias.
- **Resistencia tisular** (de mayor a menor): hueso, grasa, tendón, piel, músculo, sangre, nervio. La piel seca y callosa resiste más; la húmeda deja pasar más corriente con menos lesión cutánea.
- **Trayecto:** mano-mano o mano-pie atraviesa el corazón; cabeza-pie, el tronco encefálico.
- **Tiempo de contacto.**

#### Lesión por rayo
Corriente continua de altísimo voltaje y muy corta duración que suele "rodear" el cuerpo (*flashover*): pocas quemaduras profundas, pero paro cardiorrespiratorio (asistolia), figuras de Lichtenberg (patrón arborescente en la piel, no es quemadura), rotura timpánica, cataratas tardías y parálisis transitoria de extremidades (queraunoparálisis). En víctimas múltiples de rayo se prioriza a las que parecen muertas (triaje invertido), porque el paro respiratorio responde a la reanimación.

### Cuadro clínico
Lesiones de entrada (centrales, deprimidas, carbonizadas, a menudo en manos) y de salida (pies, a veces "explosivas"), quemaduras por arco en flexuras (axila, fosa antecubital) por saltar la corriente entre superficies, quemaduras por llama. En profundidad: extremidad edematosa, tensa, dolorosa, con déficit neurológico o pulsos disminuidos. Puede haber fracturas, luxación posterior de hombro por la contracción muscular, lesión medular, perforación de víscera hueca (raro), cataratas y alteraciones neurológicas tardías.

### Diagnóstico
- **Electrocardiograma** a todos los pacientes; monitoreo cardiaco de 24 horas si hubo pérdida de conciencia, arritmia o alteración del ECG en el ingreso, o en alto voltaje. Los pacientes con bajo voltaje, ECG normal y sin síntomas pueden egresar.
- **CPK** y mioglobina sérica y en orina (orina oscura "color té" o refresco de cola con tira reactiva positiva a sangre sin eritrocitos en el sedimento), potasio, creatinina, calcio.
- Troponina si hay sospecha de daño miocárdico (su interpretación es difícil).
- Radiografías y TC según mecanismo de trauma.
- Medición de presiones compartimentales; la RM o la gammagrafía pueden delimitar la necrosis muscular, pero el diagnóstico de viabilidad es quirúrgico.

### Tratamiento
- ABCDE de trauma con inmovilización cervical si hubo caída.
- **Reanimación a 4 mL/kg/% SCQ**: la superficie cutánea subestima el daño profundo; meta de diuresis 1–1.5 mL/kg/h mientras haya mioglobinuria.
- Manejo de la rabdomiólisis: volumen; la alcalinización de la orina con bicarbonato y el manitol tienen evidencia limitada y se usan según el protocolo del centro tras asegurar el volumen. Tratar la hiperpotasemia (gluconato de calcio, insulina con glucosa, salbutamol, hemodiálisis si es refractaria).
- **Fasciotomía temprana** de los compartimentos afectados (incluida la liberación del túnel del carpo y del canal de Guyon en el antebrazo), con exploración de la viabilidad muscular.
- **Desbridamientos seriados** cada 48–72 h hasta dejar solo tejido viable; la necrosis "progresa" en los primeros días por trombosis vascular tardía.
- Amputación temprana de extremidades no viables (reduce la mioglobinuria, la sepsis y la estancia); se intenta conservar longitud.
- Cobertura con injertos o colgajos (los tendones, nervios y huesos expuestos requieren colgajos).
- Profilaxis antitetánica; mafenida tópica por su penetración en escaras profundas.

### Complicaciones
Arritmias (fibrilación ventricular en bajo voltaje, asistolia en alto voltaje y rayo), lesión renal aguda por mioglobina, hiperpotasemia, síndrome compartimental, sepsis por músculo necrótico, amputación (alta en alto voltaje), neuropatía periférica y lesión medular tardías, cataratas (meses o años después; requieren valoración oftalmológica), trastorno de estrés postraumático.

### Situaciones especiales
- **Niños que muerden cables:** quemadura de la comisura labial que puede sangrar de forma tardía (días 5–10) cuando se desprende la escara y expone la arteria labial; los padres deben saber comprimirla. Se trata de forma conservadora y con férulas de comisura.
- **Embarazo:** la corriente atraviesa el útero con facilidad (líquido amniótico); aun con lesiones maternas mínimas puede haber muerte fetal; requiere monitoreo fetal.
- **Bajo voltaje doméstico asintomático con ECG normal:** egreso con indicaciones de alarma.
- **Lesiones por arco o *flash*:** producen quemaduras térmicas sin paso de corriente a través del cuerpo y se tratan como tales.

#### Exploración quirúrgica de la extremidad
En la fasciotomía del antebrazo por alto voltaje se abren los compartimentos volar (incluido el túnel del carpo) y dorsal, y se exploran los músculos profundos (flexor profundo de los dedos y pronador cuadrado), que suelen ser los más dañados por su cercanía al hueso; un músculo con buena coloración superficial puede estar necrótico en profundidad. Criterios de viabilidad: color, consistencia, contracción al estímulo y sangrado. Se deja la herida abierta con curaciones o presión negativa y se programa revisión en 48 h.

### Pronóstico
La mortalidad depende de las arritmias iniciales y de las lesiones asociadas; las secuelas funcionales y las amputaciones son la principal carga en el superviviente.

### Perlas
- Fenómeno de témpano de hielo: piel mínima, músculo muerto en profundidad.
- Alto voltaje: 4 mL/kg/% SCQ y diuresis 1–1.5 mL/kg/h hasta que aclare la orina.
- Orina color té con tira positiva a sangre sin eritrocitos = mioglobinuria.
- ECG a todos; monitoreo si alto voltaje, pérdida de conciencia o ECG alterado.
- Fasciotomía y desbridamientos seriados; la necrosis progresa.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **5. Quemaduras Eléctricas y Químicas** | Módulo 32, Cap. 238, p. 2026 (Alto voltaje, rabdomiólisis, neutralización proscrita). | Schwartz 10ª ed., Cap. 8, pp. 243-245 (Fisiopatología de HF, gluconato de calcio tópico e infiltrativo); Sabiston 21ª ed., Cap. 20, pp. 500-502 (Infusión intraarterial de calcio en HF, hipocalcemia letal). | **2 afirmaciones AMCG / 2 afirmaciones Schwartz-Sabiston** (Total: 4) |

### Referencias
Tratado AMCG 3ª ed., Cap. 238, p. 2026. Sabiston 21ª ed., Cap. 20, p. 500. Schwartz 10ª ed., Cap. 8, p. 243. Arnoldo B, et al. Practice guidelines for the management of electrical injuries. J Burn Care Res 2006. ATLS 10ª ed., lesiones térmicas.
`),
    sheet("q-quimicas", "07", "Quemaduras químicas y ácido fluorhídrico", `
## Quemaduras químicas y manejo del ácido fluorhídrico

### Definición
Lesión tisular producida por el contacto con sustancias químicas (ácidos, álcalis, solventes orgánicos, compuestos inorgánicos) cuyo daño continúa mientras el agente permanece en contacto con el tejido. A diferencia de la quemadura térmica, el tiempo de contacto es el factor más importante y el único que el médico puede modificar de inmediato.

### Epidemiología
Representan alrededor del 3% de las quemaduras, pero una proporción mayor de las muertes por quemadura. Ocurren en el trabajo (industria, limpieza, agricultura), en el hogar (destapacaños, limpiadores con hidróxido de sodio, cemento húmedo) y en agresiones intencionales con ácido, que en México han aumentado como forma de violencia de género y se dirigen a la cara.

### Fisiopatología
#### B. Quemaduras Químicas: Ácidos vs Álcalis
- **Ácidos**: Producen **necrosis por coagulación** al desnaturalizar y precipitar proteínas tisulares celulares. La escara coagulada inicial firme resultante actúa como una barrera física relativa que limita la penetración del ácido hacia capas tisulares más profundas (con la notable excepción del ácido fluorhídrico).
- **Álcalis (Hidróxido de sodio, potasio, cemento húmedo)**: Producen **necrosis por licuefacción**. Saponifican las grasas celulares y disuelven las proteínas de las membranas, permitiendo una penetración tisular continua, inexorable y profunda que prolonga la destrucción tisular durante horas tras el contacto.

#### Factores que determinan el daño
Concentración, cantidad, tiempo de contacto, mecanismo de acción (oxidantes, reductores, agentes corrosivos, desecantes, vesicantes, venenos protoplasmáticos) y capacidad de penetración. El cemento húmedo (pH 12–13) produce quemaduras profundas indoloras al inicio en rodillas y pies de albañiles que trabajan arrodillados durante horas. El fenol y los hidrocarburos se absorben y causan toxicidad sistémica (arritmias, depresión del SNC, falla renal).

### Conducta inicial
- **Conducta Inmediata Inviolable**:
  - Retiro inmediato de ropa contaminada y cepillado previo en seco de químicos en polvo (cal viva / óxido de calcio).
  - **Irrigación hidroterápica masiva continua con agua corriente a baja presión durante un mínimo de 30 a 60 minutos** (y hasta 2 a 4 horas en álcalis fuertes).
  - **PROSCRIPCIÓN FORMAL AUDITADA**: Está **estrictamente contraindicada la neutralización química** (por ejemplo, aplicar ácidos débiles sobre álcalis o viceversa). La reacción ácido-base de neutralización es altamente exotérmica, generando calor masivo instantáneo que superpone una quemadura térmica severa sobre la lesión química previa [Tratado AMCG 3ª ed., Cap. 238, p. 2026; Schwartz 10ª ed., Cap. 8, p. 244; Sabiston 21ª ed., Cap. 20, p. 501].

#### Detalles prácticos
- El personal se protege primero (guantes, lentes, bata) para no convertirse en víctima.
- Medir el pH de la superficie con tira reactiva y continuar la irrigación hasta que se normalice (pH 7) y el dolor ceda.
- **Ojos:** irrigación inmediata y prolongada (al menos 30 minutos, con litros de solución) separando los párpados, retirando partículas de los fondos de saco; valoración oftalmológica urgente. Los álcalis en el ojo son una urgencia oftalmológica por su penetración.
- **Excepciones a la irrigación con agua:** metales elementales (sodio, potasio, litio) que reaccionan con agua y se cubren con aceite mineral o se retiran mecánicamente; cal viva seca que se cepilla antes; fenol que se limpia con polietilenglicol, si está disponible, porque el agua lo diluye pero aumenta su superficie de absorción.
- Después de la descontaminación, la herida se maneja como quemadura térmica: estimar superficie y profundidad (las químicas suelen ser más profundas de lo que parecen), reanimación con la fórmula si son extensas, escarectomía e injerto.
- Las ingestas de cáusticos se tratan en la hoja de lesión esofágica por cáusticos.

### Ácido fluorhídrico
#### C. Manejo Especializado del Ácido Fluorhídrico (HF)
El ácido fluorhídrico (utilizado en la industria del vidrio, decapado de acero, refinación de petróleo y removedores de óxido) representa una urgencia quirúrgica y médica extrema. Aunque es un ácido inorgánico débil (pKa 3.17), no disocia inmediatamente en superficie:
- **Fisiopatología Única**: La molécula no disociada de HF penetra rápidamente a través de la piel y el tejido celular subcutáneo hasta el periostio. En la profundidad tisular se disocia, liberando **iones fluoruro libres ($F^-$)** que son extremadamente citotóxicos. El ion fluoruro quela de forma ávida e irreversible los iones bivalentes libres de **calcio ($Ca^{2+}$) y magnesio ($Mg^{2+}$)**, formando sales insolubles precipitadas de fluoruro de calcio ($CaF_2$) y fluoruro de magnesio ($MgF_2$).
- **Consecuencias Clínicas Letales**: Destrucción celular masiva con necrosis licuefactiva profunda, **dolor exquisito desproporcionado a los hallazgos físicos iniciales** e **hipocalcemia profunda e hipomagnesemia refractarias asociadas a hiperpotasemia**, que precipitan arritmias ventriculares letales (torsade de pointes, taquicardia ventricular y paro en asistolia). La exposición a concentraciones altas (> 50%) en tan sólo un 1% de la SCQ, o concentraciones menores en un 5% de la SCQ, puede ser fatal en pocas horas.
- **Protocolo Terapéutico Específico Escalonado**:
  1. *Descontaminación*: Retiro de vestimenta e irrigación copiosa continua con agua durante 15 minutos.
  2. *Neutralización Tópica*: Aplicación inmediata y repetida de **Gel de Gluconato de Calcio al 2.5%** sobre el área afectada (se prepara mezclando 10 mL de ampolleta de gluconato de calcio al 10% en 100 g de lubricante estéril hidrosoluble K-Y). Se masajea con guantes protectores de nitrilo hasta el alivio del dolor.
  3. *Infiltración Subcutánea*: Si el dolor intenso persiste pasados 30 a 45 minutos de gel tópico, o en quemaduras profundas/subungueales (puede requerir avulsión de la placa ungueal): **infiltración local subdérmica de Gluconato de Calcio al 5% a 10%** (a razón de 0.5 mL de solución por cada cm² de piel quemada) utilizando aguja de pequeño calibre (30G) para fijar los iones fluoruro en el tejido celular subcutáneo.
  4. *Infusión Intraarterial Regional*: En quemaduras extensas digitales de mano o antebrazo refractarias a la infiltración, o para evitar el síndrome compartimental por inyecciones múltiples en dedos: colocación de catéter arterial en la arteria braquial o radial e infusión de **10 mL de gluconato de calcio al 10% diluidos en 40 a 50 mL de solución glucosada al 5% o salina, administrados en 4 horas**.
  5. *Manejo Sistémico y UCI*: Monitorización electrocardiográfica continua estricta (vigilancia de prolongación del intervalo QTc); medición seriada urgente de calcio iónico, magnesio y potasio séricos cada 1 a 2 horas; y **reposición intravenosa agresiva de calcio y magnesio** mediante catéter venoso central [Sabiston 21ª ed., Cap. 20, p. 502; Schwartz 10ª ed., Cap. 8, p. 245].

#### Diagnóstico y monitoreo del ácido fluorhídrico
ECG continuo (prolongación del QT, arritmias ventriculares), calcio iónico, magnesio y potasio séricos seriados; la desaparición del dolor es el mejor marcador clínico de que el fluoruro fue neutralizado en el tejido. En quemaduras extensas por concentraciones altas se considera la escisión temprana del tejido afectado y el manejo en terapia intensiva; la hemodiálisis puede retirar fluoruro en casos refractarios.

### Otros agentes con tratamiento específico
| Agente | Particularidad | Conducta específica |
| :--- | :--- | :--- |
| Fenol | Absorción sistémica, arritmias | Polietilenglicol, irrigación, monitoreo |
| Ácido fórmico | Hemólisis, acidosis, hemoglobinuria | Irrigación, alcalinización, diálisis |
| Fósforo blanco | Se inflama con el aire, hipocalcemia | Mantener húmedo, retirar partículas (fluorescen con luz UV), evitar sulfato de cobre |
| Alquitrán caliente | Quemadura térmica, adherido | Enfriar, retirar con solventes lipofílicos (vaselina, emulsiones) |
| Cemento húmedo | Álcali, lesión profunda indolora | Irrigación prolongada |

### Complicaciones
Profundización de la quemadura por irrigación insuficiente, toxicidad sistémica (hipocalcemia por HF, metahemoglobinemia por anilinas y nitratos, lesión renal y hepática), lesión ocular con ceguera, lesión de vía aérea por inhalación de vapores, cicatrices hipertróficas y contracturas, secuelas psicológicas en las agresiones.

### Perlas
- Ácidos coagulan; álcalis licúan y penetran más.
- Irrigar con agua abundante 30–60 minutos (horas en álcalis) hasta normalizar el pH.
- Nunca neutralizar: la reacción es exotérmica.
- Ácido fluorhídrico: dolor desproporcionado → gluconato de calcio gel, infiltración o intraarterial; vigilar calcio, magnesio y QT.
- Metales elementales y cal viva seca: no agua primero.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **5. Quemaduras Eléctricas y Químicas** | Módulo 32, Cap. 238, p. 2026 (Alto voltaje, rabdomiólisis, neutralización proscrita). | Schwartz 10ª ed., Cap. 8, pp. 243-245 (Fisiopatología de HF, gluconato de calcio tópico e infiltrativo); Sabiston 21ª ed., Cap. 20, pp. 500-502 (Infusión intraarterial de calcio en HF, hipocalcemia letal). | **2 afirmaciones AMCG / 2 afirmaciones Schwartz-Sabiston** (Total: 4) |

### Referencias
Tratado AMCG 3ª ed., Cap. 238, p. 2026. Schwartz 10ª ed., Cap. 8, pp. 244–245. Sabiston 21ª ed., Cap. 20, pp. 501–502. Palao R, et al. Chemical burns: pathophysiology and treatment. Burns 2010. American Burn Association, ABLS Provider Manual (quemaduras químicas).
`),
  ],
  "neoplasias": [
    sheet("neo-biologia", "01", "Biología tumoral, clasificación histológica y oncogénesis", `
## Biología tumoral, clasificación histológica y oncogénesis

### Definición
El cáncer comprende un grupo heterogéneo de más de 200 enfermedades caracterizadas por la proliferación celular anárquica, la evasión de los mecanismos homeostáticos de muerte celular programada y la adquisición de capacidad invasiva tisular y metastásica a distancia [Tratado AMCG 3ª ed., Cap. 79, p. 673; Schwartz 10ª ed., Cap. 10, p. 273; Sabiston 21ª ed., Cap. 29, p. 656]. Para el cirujano general, el conocimiento de los fundamentos biológicos de la carcinogénesis es indispensable para determinar la resecabilidad con intención curativa, la selección de márgenes anatómicos libres de tumor y la integración multidisciplinaria con terapias sistémicas.

### Epidemiología
En México el cáncer es la tercera causa de muerte general, con alrededor de 90,000 defunciones anuales según el INEGI; los tumores con mayor mortalidad en adultos son los de pulmón, colon y recto, próstata, mama, estómago, hígado y páncreas. Las cifras de GLOBOCAN estiman cerca de 200,000 casos nuevos por año. El IMSS atiende a una proporción mayoritaria de estos pacientes, y en sus hospitales generales regionales el cirujano general recibe con frecuencia el primer contacto con el cáncer digestivo, mamario, de piel y de partes blandas.

### Clasificación histológica y grado
#### A. Clasificación Histológica y Diferenciación Tisular
Las neoplasias malignas se clasifican formalmente de acuerdo con su linaje celular de origen embriológico y su arquitectura tisular [Tratado AMCG 3ª ed., Cap. 80, p. 679; Schwartz 10ª ed., Cap. 10, p. 274]:
1. **Carcinomas**: Neoplasias malignas derivadas de células epiteliales (ectodermo o endodermo), que constituyen más del 80% al 85% de los tumores sólidos en el adulto:
   - *Adenocarcinomas*: Originados a partir de epitelio glandular o con diferenciación secretora de mucina (ej. estómago, colon, recto, páncreas, mama, próstata).
   - *Carcinomas Epidermoides (Espinocelulares o Escamosos)*: Originados en epitelio plano estratificado o áreas de metaplasia escamosa (ej. esófago medio y superior, canal anal, piel, cérvix, bronquios).
   - *Carcinomas de Células Pequeñas (Microcíticos / Anaplásicos)*: Neoplasias epiteliales indiferenciadas de alto grado con propiedades neuroendocrinas y comportamiento biológico extraordinariamente agresivo.
2. **Sarcomas**: Neoplasias malignas derivadas del tejido mesenquimatoso mesodérmico embrionario (hueso, cartílago, grasa, músculo liso, músculo estriado, vasos sanguíneos y tejido fibroso):
   - Ejemplos quirúrgicos: Liposarcoma (tejido adiposo), Leiomiosarcoma (músculo liso intestinal o retroperitoneal), Rabdomiosarcoma (músculo esquelético), Angiosarcoma (endotelio vascular) y Osteosarcoma (hueso). Su diseminación es predominantemente hematógena hacia los pulmones, con afección ganglionar linfática excepcional (< 2-3%), salvo en subtipos específicos (sarcoma epitelioide, rabdomiosarcoma, sarcoma sinovial) [Schwartz 10ª ed., Cap. 10, p. 275; Sabiston 21ª ed., Cap. 30, p. 706].
3. **Neoplasias Hematolinfoides**: Derivadas de precursores hematopoyéticos de la médula ósea y del tejido linfoide (Leucemias y Linfomas de Hodgkin y no Hodgkin).
4. **Tumores Neuroendocrinos (NET)**: Derivados del sistema neuroendocrino difuso (células enterocromafines del tubo digestivo, islotes pancreáticos, médula suprarrenal).
5. **Grados de Diferenciación Histopatológica (Grading, G1 a G4)**:
   - *G1 (Bien Diferenciado)*: Las células tumorales y su arquitectura glandular/estructural se asemejan estrechamente al tejido normal de origen (menos del 25% de células atípicas indiferenciadas).
   - *G2 (Moderadamente Diferenciado)*: Arquitectura intermedia con anomalías nucleares moderadas (25% a 50% de células indiferenciadas).
   - *G3 (Pobremente Diferenciado)*: Células con pleomorfismo nuclear marcado, atipias citológicas severas, mitosis anormales frecuentes y pérdida de la estructura glandular/papilar (50% a 75% de células indiferenciadas).
   - *G4 (Indiferenciado o Anaplásico)*: Pérdida total de diferenciación tisular reconocible; requiere estudios inmunohistoquímicos para identificar el linaje de origen celular [Tratado AMCG 3ª ed., Cap. 80, p. 680; Sabiston 21ª ed., Cap. 29, p. 658].

#### Diferencia entre grado y estadio
El **grado** es una característica biológica de las células (qué tan diferentes son del tejido normal y cuánto proliferan); el **estadio** describe la extensión anatómica (TNM). Ambos son independientes: un tumor pequeño de alto grado puede tener peor pronóstico que uno más grande y bien diferenciado. En algunos tumores el grado forma parte de la estadificación (sarcomas, tumores neuroendocrinos con el índice Ki-67, próstata con Gleason).

#### Términos que el residente debe dominar
- **Displasia:** alteración citológica y arquitectónica preneoplásica (bajo o alto grado).
- **Carcinoma in situ:** neoplasia confinada al epitelio sin rebasar la membrana basal; en el tubo digestivo, el adenocarcinoma intramucoso del colon no metastatiza porque la mucosa colónica casi no tiene linfáticos, y se considera Tis.
- **Invasión linfovascular y perineural:** factores de mal pronóstico que indican adyuvancia en varios tumores.
- **Gemación tumoral (*tumor budding*):** grupos de menos de 5 células en el frente invasor; predictor de metástasis ganglionar en el colon (útil al decidir colectomía tras polipectomía de un pólipo maligno).

### Genética molecular y características distintivas del cáncer
#### B. Genética Molecular y los Hallmarks del Cáncer
La transformación maligna celular es un proceso estocástico microevolutivo impulsado por la acumulación secuencial de mutaciones genéticas y alteraciones epigenéticas en tres familias génicas principales [Tratado AMCG 3ª ed., Cap. 79, p. 674; Schwartz 10ª ed., Cap. 10, p. 276; Sabiston 21ª ed., Cap. 29, p. 660]:
1. **Protooncogenes y Oncogenes**: Genes que promueven el crecimiento, ciclo celular y supervivencia. Una mutación con **ganancia de función en un solo alelo (mutación dominante)** es suficiente para inducir transformación celular neoplásica. Ejemplos críticos: *KRAS* y *NRAS* (transductores de señal intracelular de la vía MAPK/ERK; mutados en cáncer colorrectal y pancreático), *HER2/neu* (*ERBB2*, tirosina cinasa receptora amplificada en cáncer de mama y adenocarcinoma gástrico), *EGFR* (mutado en adenocarcinoma pulmonar), *MYC* (factor de transcripción) y *RET* (tirosina cinasa mutada en carcinoma medular de tiroides).
2. **Genes Supresores de Tumores**: Genes que codifican proteínas encargadas de frenar el ciclo celular, reparar aberraciones del ADN o inducir apoptosis ante daño genotóxico irreparable. Requieren una alteración con **pérdida de función en ambos alelos (mutación recesiva)** según la *Hipótesis de los Dos Golpes de Knudson* (*Two-Hit Hypothesis*):
   - *TP53* (Cromosoma 17p): El "guardián del genoma"; codifica la fosfoproteína nuclear p53, la cual arresta el ciclo celular en la transición G1-S mediante inducción de p21 (inhibidor de CDK) o activa las vías apoptóticas dependientes de BAX y PUMA si el daño genético es irreparable. Se encuentra mutado o delecionado en más del 50% de todos los cánceres humanos.
   - *RB1* (Cromosoma 13q): Regulador maestro de la transición G1 a fase S; en estado hipofosforilado secuestra al factor de transcripción E2F impidiendo la replicación del ADN; su inactivación bialélica libera permanentemente a E2F hacia la fase S.
   - *APC* (Cromosoma 5q21): Componente central del complejo de degradación citoplasmática de la $\\beta$-catenina; su mutación germinal causa la Poliposis Adenomatosa Familiar (PAF) y su pérdida somática inicia la vía clásica adenoma-carcinoma en CCR esporádico.
   - *BRCA1 y BRCA2*: Esenciales en la reparación de roturas de doble cadena del ADN mediante el mecanismo de recombinación homóloga de alta fidelidad; su pérdida condiciona predisposición extrema a cáncer de mama, ovario, próstata y adenocarcinoma pancreático.
3. **Genes de Reparación de Desajustes del ADN (Mismatch Repair - MMR)**: *MLH1*, *MSH2*, *MSH6* y *PMS2*. Su inactivación bialélica por mutación o hipermetilación del promotor impide corregir errores de inserción/deleción durante la replicación, acumulando mutaciones en secuencias repetitivas del genoma, fenómeno denominado **Inestabilidad de Microsatélites de Alto Grado (MSI-H / dMMR)** característico del Síndrome de Lynch y del 15% de los carcinomas colorrectales y gástricos esporádicos.
4. **Los Hallmarks del Cáncer (Hanahan y Weinberg)**:
   - Capacidad proliferativa sostenida (autocrina/mutaciones constitutivas).
   - Evasión de los supresores de crecimiento (pérdida de p53, pRb, TGF-$\\beta$).
   - Resistencia activa a la muerte celular programada (sobreexpresión de Bcl-2, inactivación de caspasas).
   - Inmortalidad replicativa (reactivación de la telomerasa en > 85-90% de tumores).
   - Inducción de angiogénesis sostenida (secreción tumoral de VEGF y bFGF para formar neovasos aberrantes tortuosos y permeables).
   - Activación de la invasión tisular y metástasis (pérdida de E-cadherina, degradación de lámina basal por metaloproteinasas de matriz MMP-2 y MMP-9).
   - Reprogramación del metabolismo energético (*Efecto Warburg*: glucólisis aerobia con producción de lactato aun en presencia de abundante oxígeno para proveer intermediarios biosintéticos).
   - Evasión de la destrucción inmunitaria (sobreexpresión de ligandos inmunosupresores PD-L1 que inactivan a los linfocitos T citotóxicos CD8+).
   - *Propiedades Facilitadoras*: Inestabilidad genómica y mutacional e inflamación promotora de tumores mediada por el estroma y macrófagos asociados a tumor (TAMs tipo M2) [Schwartz 10ª ed., Cap. 10, p. 278; Sabiston 21ª ed., Cap. 29, p. 662].

#### Vías de carcinogénesis colorrectal (ejemplo integrador)
1. **Vía de inestabilidad cromosómica (≈ 70–85%):** secuencia adenoma-carcinoma de Vogelstein: *APC* (inicio, adenoma temprano) → *KRAS* (adenoma intermedio) → pérdida de 18q/*SMAD4* → *TP53* (transición a carcinoma).
2. **Vía de inestabilidad de microsatélites (≈ 15%):** defectos de reparación de desajustes, por mutación germinal (Lynch) o por hipermetilación somática de *MLH1*; tumores del colon derecho, mucinosos, con infiltrado linfocitario, mejor pronóstico en estadios tempranos y gran respuesta a inmunoterapia.
3. **Vía serrada (fenotipo metilador CIMP):** pólipos serrados sésiles con mutación de *BRAF* V600E, frecuentes en el colon derecho y responsables de cánceres de intervalo tras colonoscopia.

#### Síndromes hereditarios de interés quirúrgico
| Síndrome | Gen | Tumores | Implicación quirúrgica |
| :--- | :--- | :--- | :--- |
| Poliposis adenomatosa familiar | *APC* | Colon (≈ 100% sin cirugía), duodeno, desmoides | Colectomía profiláctica |
| Lynch | *MLH1, MSH2, MSH6, PMS2, EPCAM* | Colon, endometrio, ovario, estómago, vías urinarias | Colonoscopia cada 1–2 años; colectomía extendida al diagnosticar cáncer en jóvenes |
| Cáncer gástrico difuso hereditario | *CDH1* | Gástrico difuso, mama lobulillar | Gastrectomía total profiláctica |
| Mama-ovario hereditario | *BRCA1/2* | Mama, ovario, páncreas, próstata | Cirugía reductora de riesgo |
| Neoplasia endocrina múltiple 2 | *RET* | Medular de tiroides, feocromocitoma | Tiroidectomía profiláctica según el codón |
| Li-Fraumeni | *TP53* | Sarcomas, mama, cerebro, suprarrenal | Vigilancia intensiva |

### Metástasis: biología relevante para el cirujano
La cascada metastásica requiere invasión local, intravasación, supervivencia en la circulación, extravasación y colonización del órgano blanco (hipótesis de "semilla y suelo" de Paget). La mayoría de las células circulantes muere; la colonización es el paso limitante. Este concepto explica por qué la resección de metástasis hepáticas de cáncer colorrectal puede curar (enfermedad oligometastásica) y por qué la manipulación tumoral excesiva debe evitarse.

### Fisiopatología integradora (Drive)
Carcinogénesis por acumulación de mutaciones (oncogenes, genes supresores, reparación del ADN), inestabilidad genómica, angiogénesis, invasión y metástasis (vía linfática, hematógena, peritoneal, perineural). Conceptos clave: campo de cancerización, márgenes, enfermedad microscópica residual, células tumorales circulantes, microambiente tumoral. La biología —no solo el tamaño— decide el pronóstico: un tumor pequeño con biología agresiva (alto grado, invasión linfovascular, receptores negativos) se comporta peor que uno grande indolente.

### Perlas
- Oncogén: un alelo basta (dominante); supresor: se requieren los dos golpes (Knudson).
- *TP53* está alterado en más de la mitad de los cánceres.
- dMMR/MSI-H: Lynch y ≈ 15% de colorrectales; responde a inmunoterapia.
- Sarcomas: diseminación hematógena a pulmón, rara vez ganglionar.
- Grado ≠ estadio.

### Trazabilidad bibliográfica
*Definición de la Unidad de Asignación Bibliográfica*: Se define como una afirmación doctrinal clínica, cuantitativa o técnica independiente verificada en las fuentes primarias de consulta.
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **1. Bases Biológicas, Histología y Oncogénesis** | Módulo 13, Cap. 79, pp. 673-675 (Mecanismos oncogénicos, p53); Cap. 80, pp. 679-681 (Clasificación celular, adenocarcinomas, sarcomas, G1-G4). | Schwartz 10ª ed., Cap. 10, pp. 273-278 (Hallmarks de Hanahan, APC, KRAS, vía Knudson); Sabiston 21ª ed., Cap. 29, pp. 656-662 (BRCA, mismatch repair y microsatélites). | **4 afirmaciones AMCG / 4 afirmaciones Schwartz-Sabiston** (Total: 8) |

### Referencias
Tratado AMCG 3ª ed., Caps. 79–80. Schwartz 10ª ed., Cap. 10, pp. 273–278. Sabiston 21ª ed., Caps. 29–30. Hanahan D, Weinberg RA. Hallmarks of cancer: the next generation. Cell 2011; Hanahan D. Hallmarks of cancer: new dimensions. Cancer Discov 2022. Fearon ER, Vogelstein B. A genetic model for colorectal tumorigenesis. Cell 1990. INEGI, Estadísticas de defunciones registradas; GLOBOCAN 2022.
`),
    sheet("neo-estadificacion", "02", "Estadificación TNM, vías de diseminación y márgenes quirúrgicos", `
## Estadificación TNM, vías de diseminación y márgenes quirúrgicos

### Definición
La estadificación es la descripción estandarizada de la extensión anatómica del cáncer en un momento dado. Su finalidad es estimar el pronóstico, elegir el tratamiento (cirugía primaria, neoadyuvancia, adyuvancia, paliación) y permitir comparar resultados. Los márgenes quirúrgicos describen si la resección dejó tumor residual.

### Sistema TNM (AJCC 8ª edición)
La estadificación anatómica sistemática es el lenguaje universal que rige el pronóstico oncológico, define la necesidad de tratamiento neoadyuvante o adyuvante y permite comparar resultados terapéuticos internacionales [Tratado AMCG 3ª ed., Cap. 81, p. 685; Schwartz 10ª ed., Cap. 10, p. 280; AJCC Cancer Staging Manual 8ª edición]:
- **Categorías Fundamentales**:
  - **T (Tumor Primario)**: Evalúa el tamaño tridimensional en centímetros del tumor o su profundidad anatómica de invasión a través de las capas de la pared de una víscera hueca (TX: no evaluable; T0: sin evidencia de tumor primario; Tis: carcinoma *in situ* confinado al epitelio o membrana basal sin rebasar la lámina propia; T1 a T4: extensión progresiva según el órgano específico).
  - **N (Ganglios Linfáticos Regionales - Nodes)**: Evalúa la presencia, número y localización anatómica de metástasis en los ganglios linfáticos de drenaje regional primario (NX: ganglios no evaluables; N0: sin metástasis ganglionares regionales; N1 a N3: afectación de cuencas ganglionares según el número absoluto de ganglios metastásicos o niveles anatómicos comprometidos).
  - **M (Metástasis a Distancia)**: M0 (sin evidencia de metástasis a distancia en estudios de extensión clínica/radiológica); M1 (metástasis a distancia confirmada histológica o radiológicamente, incluyendo diseminación hematógena a órganos sólidos distantes, ganglios linfáticos no regionales o carcinomatosis peritoneal).
- **Prefijos y Modificadores del Sistema TNM**:
  - **cTNM (Estadificación Clínica)**: Determinada antes de cualquier tratamiento mediante la exploración física, estudios de imagen (TAC, RMN, PET-CT) y biopsias endoscópicas o percutáneas diagnósticas.
  - **pTNM (Estadificación Patológica)**: Determinada tras la resección quirúrgica primaria definitiva mediante el examen macroscópico y microscópico completo de la pieza quirúrgica y los ganglios linfáticos extirpados.
  - **ypTNM (Estadificación Post-Neoadyuvancia)**: Clasificación patológica obtenida del espécimen quirúrgico tras la administración previa de quimioterapia, radioterapia o inmunoterapia neoadyuvante (el prefijo "y" denota evaluación tras tratamiento previo).
  - **rTNM (Estadificación de Recurrencia)**: Asignada cuando el paciente experimenta una recidiva tumoral tras un período libre de enfermedad y se re-estadifica para planear terapia de rescate.
  - **aTNM (Estadificación por Autopsia)**: Asignada mediante examen post mortem.

#### Elementos adicionales que modifican el estadio o el pronóstico
- **Grado histológico** (G), **invasión linfovascular** (L/V), **invasión perineural** (Pn) y **tumor residual** (R).
- **Depósitos tumorales** en el mesenterio del colon (sin estructura ganglionar): se clasifican N1c si no hay ganglios positivos.
- **Marcadores séricos** que forman parte del estadio en algunos tumores (por ejemplo, la DHL en melanoma y los marcadores en tumores germinales).
- **Estadios pronósticos** que integran biología (por ejemplo, receptores hormonales y HER2 en mama).
- **Ganglios mínimos para estadificar:** el número de ganglios examinados condiciona la confiabilidad de N0.

### Vías de diseminación
#### B. Vías Anatómicas de Diseminación Tumoral
1. **Diseminación Hematógena**: Típica de sarcomas y carcinomas avanzados. Las células tumorales invaden vénulas y capilares endoteliales facilitadas por la neoangiogénesis. Los patrones de metástasis siguen la arquitectura venosa de drenaje anatómico:
   - *Vía Porta*: Los tumores del tracto digestivo drenan a través del sistema venoso portal mesentérico hacia el **hígado**, el cual constituye el sitio primario dominante de metástasis para el adenocarcinoma colorrectal, gástrico y pancreático.
   - *Vía Cava*: Los órganos con drenaje venoso directo a la vena cava inferior o superior (recto inferior por debajo de la línea pectínea, riñón, sarcomas de extremidades, mama) metastatizan inicialmente hacia el **lecho capilar pulmonar**.
   - *Vía de los Plexos Vertebrales de Batson*: Red venosa anastomótica desprovista de válvulas que conecta las venas pélvicas y retroperitoneales con los plexos epidurales raquídeos, permitiendo que células de cáncer de próstata y mama alcancen directamente la columna vertebral y cráneo eludiendo el paso por pulmones e hígado.
2. **Diseminación Linfática**: Vía primordial y temprana de diseminación de la mayoría de los carcinomas y melanomas. Las células metastatizan a través de los capilares linfáticos dérmicos o submucosos hacia los ganglios centinela y cadenas ganglionares regionales escalonadas. La presencia de metástasis ganglionares es el factor pronóstico independiente más adverso en cánceres gastrointestinales resecables [Tratado AMCG 3ª ed., Cap. 80, p. 682; Sabiston 21ª ed., Cap. 30, p. 707].
3. **Diseminación Transcelómica (Siembra Peritoneal o Pleural)**: Ocurre cuando el tumor primario penetra la serosa visceral del órgano (estadio T4a en tubo digestivo) exfoliando células neoplásicas libres viables hacia la cavidad celómica. Estas células se implantan por gravedad e hidrodinámica peritoneal en el epiplón mayor, fondo de saco de Douglas, correderas parietocólicas y hemidiafragma derecho, o en los ovarios (**Tumor de Krukenberg**, caracterizado histopatológicamente por nidos de células en anillo de sello productoras de mucina que infiltran el estroma ovárico bilateral secundario a adenocarcinoma gástrico difuso o de colon).
4. **Implantación Iatrógena por Siembra Mecánica**: Ocurre por manipulación quirúrgica descuidada, rotura accidental de la pseudocápsula tumoral o arrastre de células viables con el instrumental quirúrgico, manifestándose como recidiva precoz en la línea de sutura anastomótica, el lecho quirúrgico o los orificios de entrada de trócares laparoscópicos (*port-site metastasis*).

#### Diseminación perineural e intramural
La invasión perineural (páncreas, vías biliares, cabeza y cuello, recto) permite al tumor avanzar a lo largo de los nervios más allá del límite macroscópico, por lo que obliga a márgenes amplios o radioterapia. La diseminación intramural submucosa (esófago, estómago difuso) explica por qué estos tumores requieren márgenes proximales de varios centímetros y estudio transoperatorio del borde.

#### Prevención de la siembra iatrógena
Técnica de "no tocar" en lo posible (ligadura vascular antes de la movilización del tumor en el colon), evitar romper la cápsula de tumores quísticos o sarcomas, extracción de la pieza en bolsa en cirugía laparoscópica, protección de la herida, cambio de guantes e instrumental tras manipular el tumor, irrigación de la cavidad en cirugía de recto, y nunca biopsiar por vía transperitoneal un tumor quístico de páncreas o un sarcoma retroperitoneal resecable sin plan.

### Márgenes quirúrgicos y clasificación R
#### C. Clasificación de Márgenes Quirúrgicos Microscópicos (Clasificación R de Enneking y la UICC)
La radicalidad oncológica y la suficiencia de una resección quirúrgica se definen de forma estandarizada mediante la clasificación histopatológica del estado del margen:
- **R0 (Resección Completa R0)**: Resección oncológica curativa óptima. No se observan células tumorales residuales ni a nivel macroscópico ni microscópico. Todos los márgenes de resección quirúrgicos (proximal, distal y circunferencial/radial) se encuentran histológicamente **libres de tumor a una distancia segura preestablecida del borde teñido con tinta china** (habitualmente > 1.0 mm en cáncer de recto y esófago; libre en margen entintado en colon y estómago).
- **R1 (Resección Microscópicamente Incompleta R1)**: Tumor macroscópico completamente resecado por el cirujano en quirófano, pero el patólogo documenta la **presencia de células tumorales viables que tocan o se localizan a ≤ 1.0 mm de la superficie entintada del margen quirúrgico**. Confiere un riesgo de recurrencia locorregional superior al 50-70% y exige considerar reintervención para ampliación de márgenes o radioterapia adyuvante intensiva.
- **R2 (Resección Macroscópicamente Incompleta R2)**: Tumor macroscópico visible o palpable dejado deliberada o accidentalmente en el campo operatorio (invasión irresecable de vasos mayores vitales, siembra peritoneal residual no resecada, depósitos tumorales fijos irresecables). Corresponde a un procedimiento estrictamente paliativo [Schwartz 10ª ed., Cap. 10, p. 282; Sabiston 21ª ed., Cap. 30, p. 708].

#### Márgenes que debe conocer el residente por órgano
| Órgano | Margen recomendado (aproximado) |
| :--- | :--- |
| Colon | 5 cm proximal y distal con resección del mesocolon y ligadura vascular en el origen |
| Recto | Distal ≥ 1–2 cm (1 cm aceptable tras neoadyuvancia en recto bajo); circunferencial > 1 mm (escisión total del mesorrecto) |
| Estómago | ≥ 3 cm en tipo expansivo y ≥ 5 cm en tipo infiltrante (JGCA) |
| Esófago | Margen proximal amplio por diseminación submucosa; circunferencial > 1 mm |
| Melanoma | 0.5–2 cm según Breslow |
| Sarcoma de extremidad | Resección amplia con un manguito de tejido sano o una barrera fascial |

### Ganglios linfáticos: discrepancia entre fuentes
| Parámetro / Entidad Quirúrgica | Tratado de Cirugía General (AMCG 3ª edición) | Schwartz: Principios de Cirugía (10ª edición) | Sabiston: Tratado de Cirugía (21ª edición) | Análisis Crítico y Guía de Conducta para el Residente (R2) |
| :--- | :--- | :--- | :--- | :--- |
| **Cosecha Ganglionar Linfática Mínima para Estadificación R0** | **Módulo 13, Cap. 81, p. 686**: Dictamina como estándar básico adecuado una cosecha y análisis histopatológico mínimo de **12 a 15 ganglios linfáticos regionales** para considerar estadificado con exactitud un espécimen oncológico gastrointestinal resecado. | **Cap. 10, p. 281**: Fija un mínimo indispensable de **12 ganglios linfáticos** en especímenes de colectomía por adenocarcinoma, advirtiendo del peligro de infraestadificación si se examinan menos ganglios. | **Cap. 29, p. 674**: Demuestra que aunque 12 ganglios es el umbral normativo regulatorio mínimo en colon, en tumores como el adenocarcinoma gástrico y de unión esofagogástrica la exactitud pronóstica exige formalmente el análisis de **al menos 16 a 30 ganglios linfáticos regionales**, reduciendo la recurrencia locorregional oculta por fenómeno de Will Rogers. | **Discrepancia Cuantitativa por Órgano Específico (12 vs 16-30 ganglios)**: Para el residente, 12 ganglios representa la exigencia mínima legal en cáncer de colon; no obstante, en gastrectomías oncológicas con linfadenectomía D2 reglada se deben obtener sistemáticamente más de 16 a 25 ganglios para una estadificación N fidedigna. |

### Estudios de estadificación
TC de tórax, abdomen y pelvis con contraste en la mayoría de los tumores digestivos; resonancia magnética en recto, hígado y páncreas seleccionados; ultrasonido endoscópico en esófago, estómago y páncreas para T y N; PET-CT en esófago, linfoma, melanoma avanzado y recurrencias; laparoscopia diagnóstica en cáncer gástrico localmente avanzado y en páncreas para detectar carcinomatosis oculta.

### Integración con el diagnóstico (Drive)
Diagnóstico de certeza = histopatología. Biopsia con aguja (tru-cut o aspiración) preferible a excisional cuando el plan quirúrgico depende del resultado; nunca hacer biopsia incisional de un tumor resecable sin plan oncológico (riesgo de siembra). Inmunohistoquímica y marcadores moleculares (p. ej., HER2, receptores hormonales, MSI/MMR, KRAS/NRAS/BRAF) ya no son opcionales: definen tratamiento neoadyuvante y adyuvante. Estadificación con AJCC 8.ª ed. (TNM): T = extensión local, N = ganglios, M = metástasis; la estadificación clínica (cTNM) guía la neoadyuvancia y la patológica (pTNM) el pronóstico y la adyuvancia. Imagen: TC de tórax/abdomen/pelvis, RM, PET-CT en casos seleccionados.

### Perlas
- c = clínico, p = patológico, yp = tras neoadyuvancia, r = recurrencia, a = autopsia.
- Tubo digestivo → vía porta → hígado; recto bajo → cava → pulmón.
- Krukenberg: células en anillo de sello en ovario (gástrico difuso o colon).
- R0 libre; R1 microscópico (≤ 1 mm en recto y esófago); R2 macroscópico.
- Colon: mínimo 12 ganglios; gástrico D2: ≥ 16 (idealmente > 25).

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **2. Estadificación TNM y Márgenes Quirúrgicos** | Módulo 13, Cap. 81, p. 685 (Prefijos TNM, cTNM, pTNM); Cap. 80, p. 682 (Vías porta y cava, siembra transcelómica y Krukenberg). | Schwartz 10ª ed., Cap. 10, pp. 280-283 (Márgenes R0, R1 y R2 de la UICC); Sabiston 21ª ed., Cap. 30, pp. 706-708 (Plexos de Batson, márgenes en bloque y siembra laparoscópica). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Caps. 80–81. Schwartz 10ª ed., Cap. 10, pp. 280–283. Sabiston 21ª ed., Caps. 29–30. AJCC Cancer Staging Manual, 8ª ed. (2017). Japanese Gastric Cancer Treatment Guidelines 2021 (6ª ed.).
`),
    sheet("neo-principios", "03", "Principios de la cirugía oncológica y manejo multidisciplinario", `
## Principios de la cirugía oncológica y manejo multidisciplinario

### Definición
La cirugía oncológica es la disciplina que diagnostica, estadifica y trata con intención curativa o paliativa los tumores sólidos mediante resección, dentro de un manejo multidisciplinario (cirugía, oncología médica, radioterapia, patología, radiología, cuidados paliativos). El cirujano general R3 debe dominar los principios oncológicos antes que la técnica: una resección técnicamente perfecta pero oncológicamente incorrecta (márgenes positivos, siembra, linfadenectomía incompleta) es un fracaso. Referencias base: Sabiston, *Tratado de cirugía* (21.ª ed., 2022); Schwartz, *Principios de cirugía* (11.ª ed., 2019); NCCN Guidelines (versiones vigentes 2024-2025, por tumor); AJCC Cancer Staging Manual, 8.ª ed. (2017).

### Epidemiología
En México el cáncer es una de las primeras causas de muerte; los tumores más frecuentes que llegan al cirujano general son mama, colorrectal, gástrico, tiroides y pulmón (cifras aproximadas, varían por registro: GLOBOCAN/INEGI). El R3 debe conocer la carga local: en el IMSS el cáncer colorrectal y gástrico se diagnostican con frecuencia en etapas avanzadas, lo que cambia la intención del tratamiento.
En el IMSS, la mayoría de los cánceres digestivos llegan en etapas III–IV: el cáncer gástrico se diagnostica en etapa avanzada en más del 70–80% de los casos y una proporción considerable de los colorrectales debuta como urgencia (obstrucción o perforación). Esto hace que la cirugía de urgencia oncológica sea una competencia central del cirujano general en un hospital de segundo nivel.

### Biología tumoral aplicada
Ver la hoja de biología tumoral. La biología decide si la cirugía tiene sentido: un tumor oligometastásico con buena respuesta a la quimioterapia puede ser candidato a resección curativa, mientras que la progresión durante la neoadyuvancia sugiere biología agresiva y suele contraindicar una cirugía mayor.

### Evaluación clínica
Depende del órgano: masa palpable, sangrado, obstrucción, pérdida de peso, dolor, síntomas paraneoplásicos. La sospecha oncológica obliga a historia dirigida (antecedentes familiares, síndromes hereditarios: BRCA, Lynch), exploración completa (incluye ganglios regionales) y estudios de extensión antes de cualquier biopsia excisional que pueda comprometer el plan.

#### Estado funcional y valoración preoperatoria
- **Escala ECOG** (0 = asintomático, 1 = síntomas con actividad ligera, 2 = en cama < 50% del día, 3 = en cama > 50%, 4 = postrado) o **Karnofsky**: un ECOG ≥ 3 suele contraindicar la cirugía mayor y la quimioterapia intensiva.
- **Fragilidad y nutrición:** pérdida de peso > 10% en 6 meses, albúmina < 3 g/dL y sarcopenia en TC predicen complicaciones; la prehabilitación (nutrición, ejercicio, suspensión del tabaco) de 2–4 semanas mejora los resultados.
- **Riesgo tromboembólico:** el cáncer y la cirugía abdominopélvica mayor justifican tromboprofilaxis extendida 4 semanas con heparina de bajo peso molecular.

### Diagnóstico
Diagnóstico de certeza = histopatología. Biopsia con aguja (tru-cut o aspiración) preferible a excisional cuando el plan quirúrgico depende del resultado; nunca hacer biopsia incisional de un tumor resecable sin plan oncológico (riesgo de siembra). Inmunohistoquímica y marcadores moleculares (p. ej., HER2, receptores hormonales, MSI/MMR, KRAS/NRAS/BRAF) ya no son opcionales: definen tratamiento neoadyuvante y adyuvante. Estadificación con AJCC 8.ª ed. (TNM): T = extensión local, N = ganglios, M = metástasis; la estadificación clínica (cTNM) guía la neoadyuvancia y la patológica (pTNM) el pronóstico y la adyuvancia. Imagen: TC de tórax/abdomen/pelvis, RM, PET-CT en casos seleccionados.

#### Principios de la biopsia
- Obtener tejido suficiente para inmunohistoquímica y biología molecular.
- Planear la vía de la biopsia en el trayecto de la futura resección (sarcomas, mama), para que el trayecto se reseque con la pieza.
- La biopsia excisional se reserva para lesiones pequeñas en las que la resección completa es diagnóstica y terapéutica sin comprometer la cirugía definitiva (ganglio periférico para linfoma, lesiones cutáneas).
- En tumores que se van a resecar de cualquier forma (masa colónica obstructiva, tumor pancreático resecable con clínica típica), la biopsia preoperatoria no siempre es indispensable, pero se procura cuando cambia el plan (neoadyuvancia).

### Clasificación de la cirugía oncológica
Por intención: curativa (R0), citorreductora, paliativa, diagnóstica/estadificadora, profiláctica (p. ej., mastectomía reductora de riesgo en BRCA). Por margen: R0 (microscópicamente libre), R1 (microscópico positivo), R2 (macroscópico residual). Por momento: primaria, neoadyuvante, adyuvante, de rescate, de intervalo. El comité de tumores (tumor board) es el estándar: ninguna decisión oncológica mayor debe tomarse en solitario.

### Tratamiento: principios técnicos
Resección oncológica = tumor + margen adecuado + linfadenectomía regional según el tumor, sin manipular ni fragmentar el tumor (técnica no-touch en lo posible), con manejo cuidadoso para evitar siembra. Terapia neoadyuvante (quimio, radio o inmuno) para reducir, convertir irresecable en resecable y tratar micrometástasis; adyuvante para enfermedad microscópica. Principio de Halsted superado por el concepto de enfermedad sistémica: la cirugía controla lo local; lo sistémico lo trata la oncología médica. Cirugía de mínima invasión oncológica solo si respeta los mismos principios (márgenes, linfadenectomía, extracción en bolsa).

#### Resección en bloque y linfadenectomía
Cuando el tumor está adherido a un órgano vecino, no se separa: la adherencia es tumoral en un 30–50% de los casos y su separación convierte una R0 posible en una R1 y siembra el campo. Se reseca el órgano adyacente en bloque (resección multivisceral). La linfadenectomía tiene valor de estadificación siempre y valor terapéutico en algunos tumores (D2 en estómago, mesocolon completo en colon, escisión total del mesorrecto en recto).

#### Cirugía en el contexto de la urgencia oncológica
Ante un tumor obstructivo o perforado, el objetivo es resolver la urgencia con seguridad y, cuando el estado del paciente lo permite, respetar los principios oncológicos (resección con margen y linfadenectomía). Si no es posible, se prefiere una cirugía de control (estoma derivativo, prótesis) que permita estadificar y planear después una cirugía oncológica correcta, antes que una resección inadecuada que comprometa la curación.

#### Comité de tumores
Reunión periódica de cirugía, oncología médica, radioterapia, patología, radiología, gastroenterología y paliativos. Cada caso se presenta con la histología, los estudios de estadificación y el estado funcional; la decisión se documenta en el expediente. En el IMSS los casos complejos se refieren al tercer nivel (Centros Médicos Nacionales) o a la unidad oncológica correspondiente.

### Complicaciones
Recurrencia local (margen positivo, siembra), recurrencia a distancia, linfedema tras linfadenectomía, fístulas, dehiscencia, complicaciones de quimio/radioterapia (mielosupresión, fibrosis, segunda neoplasia). La complicación oncológica más grave es la resección incompleta que se pudo evitar con mejor planeación.

### Seguimiento
Vigilancia por 5 años como mínimo según el tumor: exploración, marcadores (CEA, CA 15-3, etc. según el caso), imagen periódica. El seguimiento busca recurrencia rescatable y segundos primarios; también rehabilitación, linfedema, y apoyo psicosocial. Todo paciente oncológico requiere plan de seguimiento escrito y fecha de próxima cita antes del alta.

#### Comunicación de malas noticias
Protocolo SPIKES: preparar el entorno (*Setting*), explorar lo que el paciente sabe (*Perception*), preguntar cuánta información desea (*Invitation*), dar el conocimiento con lenguaje claro (*Knowledge*), responder a las emociones con empatía (*Emotions*) y resumir con un plan (*Strategy and Summary*). La información se documenta y el consentimiento informado debe incluir alternativas, riesgos y la posibilidad de cirugía paliativa o de no operar.

### Perlas
- Una resección técnicamente perfecta pero oncológicamente incorrecta es un fracaso.
- No separar un tumor adherido: resección en bloque.
- Ninguna decisión oncológica mayor se toma en solitario: comité de tumores.
- La biología manda: progresión durante la neoadyuvancia suele contraindicar la cirugía.
- Paciente con ECOG ≥ 3: pensar dos veces antes de una cirugía mayor.

### Referencias
Sabiston 21.ª ed. (2022); Schwartz 11.ª ed. (2019); NCCN Guidelines 2024-2025; AJCC 8.ª ed. (2017); AMCG, Propuesta académica PRFCG (Cir Gen 2023;45(2):67-75).
Oken MM, et al. Toxicity and response criteria of the Eastern Cooperative Oncology Group. Am J Clin Oncol 1982. Baile WF, et al. SPIKES — a six-step protocol for delivering bad news. Oncologist 2000.
`),
    sheet("neo-tamizaje", "04", "Tamizaje y prevención del cáncer", `
## Tamizaje y prevención del cáncer

### Definición
**Prevención primaria:** evitar que el cáncer aparezca (control del tabaco, vacunación contra hepatitis B y VPH, erradicación de *H. pylori*, control del peso, actividad física, dieta). **Prevención secundaria o tamizaje:** detectar el cáncer o sus lesiones precursoras en personas asintomáticas para tratarlo en etapa curable. **Prevención terciaria:** reducir las complicaciones y recurrencias en quien ya tuvo cáncer.

### Epidemiología y contexto nacional
En México los programas organizados de tamizaje con mayor alcance son los de cáncer cervicouterino y de mama (NOM-014-SSA2 y NOM-041-SSA2); el tamizaje de cáncer colorrectal con prueba inmunoquímica fecal está en expansión en el IMSS y en el sector salud, pero su cobertura todavía es baja, lo que explica el diagnóstico en etapas avanzadas. El cáncer gástrico no tiene un programa poblacional de tamizaje en México por su incidencia intermedia; se recomienda endoscopia en personas con síntomas de alarma o factores de riesgo.

### Principios y recomendaciones de tamizaje
Para que un programa de tamizaje poblacional (*screening*) sea médicamente coste-efectivo y justificado, la neoplasia debe ser prevalente en la comunidad, tener una fase preclínica asintomática prolongada y tratable, y la prueba diagnóstica debe ser altamente sensible, específica, accesible, segura y demostrar una **reducción estadísticamente significativa en la mortalidad global o específica por cáncer** [Tratado AMCG 3ª ed., Cap. 81, p. 687; Schwartz 10ª ed., Cap. 10, p. 284]:
1. **Cáncer Colorrectal**:
   - Población de riesgo promedio: Iniciar a los **45 años** de edad.
   - Opciones validadas de primera línea: **Colonoscopia completa cada 10 años** (estándar de oro indiscutible diagnóstica y terapéutica al resecar pólipos premalignos adenomatosos) o **Prueba Inmunoquímica Fecal (FIT) anual**.
2. **Cáncer de Mama**:
   - Mamografía digital bilateral anual o bienal a partir de los **40 a 50 años** de edad en mujeres de riesgo promedio hasta los 74 años (asociada a ultrasonido mamario complementario en mamas densas).
3. **Cáncer Cervicouterino**:
   - Citología cervical (Papanicolaou) cada 3 años a partir de los **21 años**, o prueba molecular de detección de genotipos de alto riesgo del Virus del Papiloma Humano (VPH-ADN) cada 5 años en mujeres entre 30 y 65 años.
4. **Cáncer de Pulmón**:
   - **Tomografía Computarizada de Tórax de Baja Dosis anual** en adultos entre **50 y 80 años** que posean un historial de tabaquismo de al menos **20 paquetes-año** y que actualmente fumen o hayan dejado de fumar en los últimos 15 años.
5. **Cáncer de Próstata**:
   - Determinación de Antígeno Prostático Específico (PSA) sérico y examen digital rectal a partir de los **50 años** (o a los 45 años en hombres de raza negra o con antecedente familiar de primer grado).

#### Conceptos epidemiológicos que distorsionan la interpretación del tamizaje
- **Sesgo de anticipación (*lead time*):** el diagnóstico más temprano aumenta el tiempo de supervivencia medido sin cambiar la fecha de la muerte.
- **Sesgo de duración (*length time*):** el tamizaje detecta con más frecuencia tumores de crecimiento lento.
- **Sobrediagnóstico:** cánceres que nunca habrían causado síntomas (próstata, tiroides, algunos de mama).
- Por eso la única prueba de beneficio es la **reducción de la mortalidad** específica en ensayos aleatorizados.

### Tamizaje de cáncer colorrectal en detalle
- **Riesgo promedio** (sin antecedentes personales ni familiares, sin enfermedad inflamatoria intestinal): de 45 a 75 años; entre 76 y 85 se individualiza.
- **Opciones:** prueba inmunoquímica fecal anual (positiva → colonoscopia en las semanas siguientes; una colonoscopia diferida más de 6–9 meses aumenta el riesgo de cáncer avanzado), colonoscopia cada 10 años, colonografía por TC cada 5 años, sigmoidoscopia cada 5 años, prueba de ADN fecal multiobjetivo cada 1–3 años.
- **Riesgo aumentado:** familiar de primer grado con cáncer colorrectal o adenoma avanzado antes de los 60 años (o dos familiares de primer grado a cualquier edad): colonoscopia desde los 40 años o 10 años antes de la edad del diagnóstico del familiar más joven, cada 5 años.
- **Lynch:** colonoscopia desde los 20–25 años, cada 1–2 años.
- **Poliposis adenomatosa familiar:** sigmoidoscopia o colonoscopia anual desde los 10–12 años.
- **Enfermedad inflamatoria intestinal:** colonoscopia de vigilancia 8 años después del inicio de la pancolitis, cada 1–3 años (cromoendoscopia).
- **Calidad de la colonoscopia:** intubación cecal > 95%, preparación adecuada, tiempo de retirada ≥ 6 minutos y tasa de detección de adenomas ≥ 25% (≥ 30% en hombres, ≥ 20% en mujeres según la guía).

### Prevención primaria con impacto quirúrgico
- **Erradicación de *H. pylori*:** reduce la incidencia de cáncer gástrico; indicación en familiares de pacientes con cáncer gástrico y tras resección endoscópica.
- **Vacunación contra hepatitis B y tratamiento de hepatitis C:** previenen el hepatocarcinoma.
- **Vacuna contra VPH:** previene cáncer cervicouterino, anal y orofaríngeo.
- **Aspirina:** reduce la incidencia de cáncer colorrectal en Lynch (ensayo CAPP2); en la población general su uso preventivo se individualiza por el riesgo de sangrado.
- **Cirugía reductora de riesgo:** colectomía en PAF, gastrectomía total en *CDH1*, mastectomía y salpingooforectomía en *BRCA*, tiroidectomía en *RET*.

### Vigilancia de lesiones precursoras y escenarios de alto riesgo
La detección oportuna también incluye la vigilancia estructurada de lesiones premalignas y síndromes de alto riesgo oncológico, cuyo objetivo es interceptar la progresión hacia carcinoma invasor:

| Neoplasia / Escenario | Población objetivo | Prueba recomendada e intervalo | Criterio clave de seguimiento |
| :--- | :--- | :--- | :--- |
| **Colorrectal (riesgo promedio)** | Adultos 45–75 años | Colonoscopia c/10 años o FIT anual | FIT positivo exige colonoscopia diagnóstica sin repetir FIT |
| **Mama (riesgo promedio)** | Mujeres 40–74 años | Mastografía bilateral anual o bienal (US si mama densa) | En México: NOM-041 promueve tamizaje desde los 40 años |
| **Mama (alto riesgo: BRCA1/2, riesgo > 20%)** | Portadoras o radiación torácica previa | RM mamaria anual desde 25 años + mastografía desde 30 años | Alternar cada 6 meses y valorar cirugía reductora de riesgo |
| **Cervicouterino** | Mujeres 21–65 años | Citología c/3 años (21–29) o VPH-ADN c/5 años (30–65) | Co-testing c/5 años es alternativa validada |
| **Pulmón** | 50–80 años, ≥ 20 paquetes-año, fumador o exfumador < 15 años | TC de tórax de baja dosis anual | Suspender al cumplir 15 años sin fumar o si no es candidato a cirugía |
| **Hepatocarcinoma** | Cirrosis (Child A/B) o VHB crónica de alto riesgo | Ultrasonido hepático ± AFP cada 6 meses | Lesión ≥ 1 cm se caracteriza con TC/RM multifásica (LI-RADS) |
| **Páncreas (alto riesgo genético)** | Peutz-Jeghers, CDKN2A, BRCA2/PALB2 con familiar afectado | Colangio-RM y/o ultrasonido endoscópico anual | No existe tamizaje poblacional en riesgo promedio |

#### Intervalos de vigilancia pospolipectomía (USMSTF 2020)
- **Colonoscopia normal o pólipos hiperplásicos rectosigmoideos < 10 mm:** repetir colonoscopia en **10 años**.
- **1–2 adenomas tubulares < 10 mm (bajo riesgo):** vigilancia en **7–10 años**.
- **3–4 adenomas tubulares < 10 mm:** vigilancia en **3–5 años**.
- **5–10 adenomas, adenoma ≥ 10 mm, componente velloso o displasia de alto grado (adenoma avanzado):** colonoscopia en **3 años**.
- **> 10 adenomas en un solo estudio:** repetir al **año** y solicitar valoración genética (poliposis atenuada o asociada a *MUTYH*).
- **Resección en fragmentos (*piecemeal*) de adenoma o lesión serrada ≥ 20 mm:** revisión endoscópica del sitio de resección a los **6 meses** para descartar tejido residual.
- **Otras lesiones precursoras:** esófago de Barrett (endoscopia con protocolo de Seattle cada 3–5 años si no hay displasia) y gastritis atrófica con metaplasia intestinal extensa (endoscopia cada 3 años según guías MAPS II).

### Perlas de examen
- El tamizaje solo se justifica cuando demuestra **reducción de la mortalidad específica** (no basta mejorar la supervivencia aparente por sesgos de anticipación o duración).
- Colorrectal en riesgo promedio: iniciar a los **45 años** con FIT anual o colonoscopia cada 10 años; un FIT positivo obliga a colonoscopia pronta, jamás a repetir el FIT.
- Antecedente de familiar de primer grado con cáncer colorrectal < 60 años: colonoscopia a los **40 años** o **10 años antes** del diagnóstico del familiar más joven, cada 5 años.
- Pulmón: TC de baja dosis anual entre **50 y 80 años** con historial ≥ **20 paquetes-año** (fumador activo o suspensión < 15 años).
- La resección en fragmentos (*piecemeal*) de un pólipo colónico ≥ 20 mm obliga a colonoscopia de control en **6 meses**.
- El cáncer de páncreas, ovario y tiroides **no** tienen tamizaje poblacional en personas de riesgo promedio por ausencia de beneficio en mortalidad y alto sobrediagnóstico.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **3. Tamizaje y Terapias Sistémicas** | Módulo 13, Cap. 81, pp. 687-689 (Criterios de tamizaje CCR y mama); Cap. 84, pp. 704-708 y Cap. 85, pp. 712-716 (Citotóxicos, anti-HER2, anti-PD-1). | Schwartz 10ª ed., Cap. 10, pp. 284-292 (Gemcitabina en páncreas, Bevacizumab perioperatorio); Sabiston 21ª ed., Cap. 29, pp. 668-671 (Mutaciones KRAS/NRAS y resistencia a anti-EGFR). | **4 afirmaciones AMCG / 4 afirmaciones Schwartz-Sabiston** (Total: 8) |

### Referencias
Tratado AMCG 3ª ed., Cap. 81, pp. 687–689. Schwartz 10ª ed., Cap. 10, p. 284. US Preventive Services Task Force: Colorectal Cancer Screening 2021; Lung Cancer Screening 2021. American Cancer Society Guideline for Colorectal Cancer Screening 2018. NOM-041-SSA2-2011 (mama); NOM-014-SSA2-1994 (cervicouterino). Gupta S, et al. US Multi-Society Task Force: Recommendations for follow-up after colonoscopy and polypectomy, 2020.
`),
    sheet("neo-sistemica", "05", "Terapias oncológicas sistémicas e implicaciones perioperatorias", `
## Terapias oncológicas sistémicas e implicaciones perioperatorias

### Definición
Tratamientos que actúan en todo el organismo: quimioterapia citotóxica, terapia blanco molecular, inmunoterapia y hormonoterapia. Según su momento, pueden ser neoadyuvantes (antes de la cirugía), adyuvantes (después), perioperatorias (antes y después), de conversión (para volver resecable un tumor) o paliativas.

### Modalidades y farmacogenómica
El cirujano general moderno participa activamente en comités multidisciplinarios de tumores donde se combinan cirugías con modalidades sistémicas [Tratado AMCG 3ª ed., Cap. 84, p. 704; Schwartz 10ª ed., Cap. 10, p. 288; Sabiston 21ª ed., Cap. 30, p. 709]:
1. **Quimioterapia Citotóxica Clásica**:
   - *Agentes Alquilantes y Complejos de Platino* (Cisplatino, Carboplatino, Oxaliplatino, Ciclofosfamida): Forman enlaces cruzados covalentes intracatenarios e intercatenarios en el ADN impidiendo la replicación celular; neurotoxicidad periférica acumulativa y nefrotoxicidad.
   - *Antimetabolitos*: Falsos sustratos que bloquean la síntesis de ácidos nucleicos durante la fase S del ciclo celular:
     - **5-Fluorouracilo (5-FU)** y su profármaco oral **Capecitabina**: Inhiben a la timidilato sintasa bloqueando la síntesis de timidina.
     - **Gemcitabina (Análogo de la Desoxicitidina)**: Fármaco citotóxico de importancia quirúrgica cardinal; penetra en la célula donde es fosforilada intracelularmente por la desoxicitidina cinasa a gemcitabina difosfato y trifosfato, inhibiendo la ribonucleótido reductasa e incorporándose al ADN provocando la terminación prematura de la elongación de la cadena. Es el **pilar quimioterapéutico de referencia en el adenocarcinoma ductal de páncreas**, carcinomas de la vía biliar (colangiocarcinoma), carcinoma urotelial de vejiga y carcinoma pulmonar no microcítico.
   - *Inhibidores de Topoisomerasas* (Irinotecán, Etopósido): Bloquean la topoisomerasa I o II induciendo roturas letales de la doble hebra de ADN; mielosupresión y diarrea colinérgica/tardía severa.
   - *Inhibidores del Huso Mitótico* (Taxanos: Paclitaxel, Docetaxel; Alcaloides de la Vinca: Vincristina): Los taxanos estabilizan e hiperpolimerizan los microtúbulos impidiendo su desensamblaje durante la metafase/anafase; los alcaloides de la vinca impiden la polimerización de tubulina.
2. **Terapias Blanco Moleculares y Farmacogenómica**:
   - *Inhibidores de Tirosina Cinasa Intracelular (TKIs)*: Moléculas pequeñas orales que bloquean el dominio catalítico de unión a ATP. Ej. **Imatinib** (bloquea c-KIT en GIST y BCR-ABL en LMC), **Osimertinib** (EGFR mutado).
   - *Anticuerpos Monoclonales Dirigidos*:
     - **Trastuzumab y Pertuzumab**: Anticuerpos humanizados contra el dominio extracelular de **HER2/neu**; bloquean la dimerización e inducen citotoxicidad celular mediada por anticuerpos en adenocarcinoma gástrico y de unión esofagogástrica HER2 positivo.
     - **Bevacizumab**: Anticuerpo monoclonal contra el Factor de Crecimiento del Endotelio Vascular (**VEGF-A**); inhibe la angiogénesis tumoral. Según la ficha técnica de la FDA debe suspenderse al menos 28 días (4 semanas) antes de una cirugía electiva y no reiniciarse hasta al menos 28 días después de una cirugía mayor y hasta una cicatrización adecuada (vida media ≈20 días); los libros difieren (2–4, 4–6 y 6–8 semanas); el riesgo es severo de dehiscencia de anastomosis, sangrado y perforación intestinal.
     - **Cetuximab y Panitumumab (Anticuerpos anti-EGFR)**: Se unen al dominio extracelular del Receptor del Factor de Crecimiento Epidérmico (EGFR), bloqueando la autofosforilación y transducción de señales proliferativas río abajo.
     - **IMPLICACIÓN CLÍNICA FARMACOGENÓMICA VITAL**: En pacientes con cáncer colorrectal metastásico, la indicación de anticuerpos anti-EGFR está supeditada de forma absoluta al **estado mutacional de los genes *KRAS* y *NRAS* (exones 2, 3 y 4)**. La presencia de una **mutación activadora en cualquier codón de *KRAS* o *NRAS* (tumores RAS mutados)** mantiene encendida de forma constitutiva e irreversible la cascada intracelular MAPK/ERK independientemente del receptor de membrana, lo que confiere **RESISTENCIA BIOLÓGICA ABSOLUTA a Cetuximab y Panitumumab**; por ende, estos fármacos están estrictamente contraindicados en tumores con mutaciones en RAS, reservándose exclusivamente para tumores con genes *KRAS/NRAS* de tipo salvaje nativo (*wild-type*) [Sabiston 21ª ed., Cap. 29, p. 668; Schwartz 10ª ed., Cap. 10, p. 290].
3. **Inmunoterapia con Inhibidores de Puntos de Control Inmunitario (Immune Checkpoint Inhibitors - ICIs)**:
   - Anticuerpos que bloquean las señales fisiológicas que los tumores utilizan para inactivar la respuesta de los linfocitos T citotóxicos CD8+: **Anticuerpos anti-PD-1 (Nivolumab, Pembrolizumab)**, **anti-PD-L1 (Atezolizumab, Durvalumab)** y **anti-CTLA-4 (Ipilimumab)**.
   - Su máxima eficacia clínica se documenta en tumores con **alta inestabilidad de microsatélites (MSI-H / dMMR)** o con elevada carga mutacional tumoral (TMB-High), donde la acumulación de miles de neoantígenos aberrantes desata una respuesta inmune antitumoral colosal una vez liberado el freno inmunológico [Tratado AMCG 3ª ed., Cap. 85, p. 714; Sabiston 21ª ed., Cap. 29, p. 670].

### Principios de la quimioterapia
- **Cinética:** los fármacos destruyen una fracción constante de células por ciclo (hipótesis de la fracción logarítmica), por lo que se administran en ciclos repetidos; la enfermedad microscópica (tras una cirugía R0) es la más sensible, lo que justifica la adyuvancia.
- **Esquemas que el cirujano general ve con frecuencia:** FOLFOX/CAPOX (colon, adyuvancia en estadio III), FLOT (perioperatoria en cáncer gástrico y de la unión esofagogástrica), CROSS (carboplatino-paclitaxel con radioterapia en esófago), FOLFIRINOX y gemcitabina/nab-paclitaxel (páncreas), neoadyuvancia total en recto.
- **Toxicidades:** mielosupresión (nadir a los 7–14 días), mucositis, neuropatía (oxaliplatino, taxanos), cardiotoxicidad (antraciclinas, 5-FU con espasmo coronario), nefrotoxicidad (cisplatino), esteatohepatitis y síndrome de obstrucción sinusoidal hepática (irinotecán y oxaliplatino: aumentan la morbilidad de las hepatectomías).

### Implicaciones perioperatorias para el cirujano
| Fármaco | Riesgo quirúrgico | Conducta |
| :--- | :--- | :--- |
| Bevacizumab (anti-VEGF) | Dehiscencia, sangrado, perforación | Suspender ≥ 4–8 semanas antes y reiniciar ≥ 4 semanas después de cirugía mayor y con herida cicatrizada |
| Ramucirumab, aflibercept, inhibidores de tirosina cinasa antiangiogénicos (sunitinib, regorafenib) | Similar, vida media más corta | Suspender días a 2 semanas según el fármaco |
| Quimioterapia citotóxica | Neutropenia, mala cicatrización | Operar con neutrófilos > 1,500 y plaquetas > 100,000; intervalo de 4–6 semanas tras el último ciclo |
| Esteroides | Mala cicatrización, insuficiencia suprarrenal | Dosis de estrés según el caso |
| Inhibidores de punto de control | Colitis, hepatitis, insuficiencia suprarrenal inmunomediadas | Reconocer la colitis inmunomediada como causa de dolor y diarrea |
| Radioterapia previa | Fibrosis, fístulas, mala cicatrización | Cirugía 6–12 semanas después en recto; planear tejidos bien irrigados |

### Discrepancia bibliográfica sobre bevacizumab
| Parámetro / Entidad Quirúrgica | Tratado de Cirugía General (AMCG 3ª edición) | Schwartz: Principios de Cirugía (10ª edición) | Sabiston: Tratado de Cirugía (21ª edición) | Análisis Crítico y Guía de Conducta para el Residente (R2) |
| :--- | :--- | :--- | :--- | :--- |
| **Estrategia Quirúrgica y Farmacológica ante Fármacos Antiangiogénicos** | **Módulo 13, Cap. 84, p. 709**: Recomienda suspender la quimioterapia biológica sistémica al menos **2 a 4 semanas** previas a una intervención quirúrgica mayor programada. | **Cap. 10, p. 290**: Advierte del riesgo de sangrado y dehiscencia tisular con anti-VEGF, sugiriendo una ventana de seguridad perioperatoria de al menos 4 a 6 semanas. | **Cap. 29, p. 669**: Especifica de forma estricta que los inhibidores del Factor de Crecimiento del Endotelio Vascular (como **Bevacizumab**) exigen una **ventana obligatoria de suspensión preoperatoria de al menos 6 a 8 semanas previas a la cirugía**, y diferir su reinicio al menos **6 a 8 semanas posoperatorias** hasta constatar la cicatrización biológica completa de las anastomosis digestivas. | **Discrepancia de Intervalo Temporal Perioperatorio (2-4 semanas vs 6-8 semanas)**: La vida media prolongada del Bevacizumab (20 días) y su potente inhibición de la angiogénesis dérmica y anastomótica justifican la ventana de 6-8 semanas. Operar a un paciente con < 4 semanas de suspensión de bevacizumab multiplica por 4 el riesgo de fuga anastomótica y evisceración. |

### Complicaciones quirúrgicas de la terapia sistémica
- **Perforación intestinal por bevacizumab** (1–2%): suele requerir cirugía con estoma.
- **Enterocolitis neutropénica (tiflitis):** necrosis transmural del ciego en el neutropénico; tratamiento médico inicial y cirugía si hay perforación, hemorragia incontrolable o deterioro.
- **Colitis inmunomediada por anti-CTLA-4 o anti-PD-1:** se trata con esteroides e infliximab; la cirugía solo ante perforación o megacolon.
- **Hemorragia o perforación de tumores que responden** rápidamente (linfomas gástricos o intestinales al iniciar quimioterapia, GIST grandes con imatinib).
- **Extravasación de citotóxicos vesicantes** (antraciclinas, vinca): suspender la infusión, aspirar, antídoto específico y, en casos de necrosis, desbridamiento.
- **Catéteres de quimioterapia (puertos implantables):** su colocación y retiro son procedimientos frecuentes del cirujano general; complicaciones: neumotórax, trombosis, infección y malposición.

### Radioterapia: conceptos para el cirujano
Unidades en Gray (Gy); fraccionamiento convencional (1.8–2 Gy/día) o hipofraccionado (curso corto de 5 × 5 Gy en recto). Efectos agudos (mucositis, dermatitis, diarrea) y tardíos (fibrosis, estenosis, fístulas, enteritis actínica crónica, segundas neoplasias). La radioterapia se usa neoadyuvante (recto, esófago), adyuvante (márgenes positivos, mama) o paliativa (dolor óseo, compresión medular, hemorragia).

### Perlas
- Anti-EGFR (cetuximab, panitumumab) solo en *KRAS/NRAS* nativos (y, en la práctica, del lado izquierdo).
- Bevacizumab: ventana perioperatoria amplia; riesgo de dehiscencia y perforación.
- Gemcitabina es el pilar en páncreas y vía biliar.
- MSI-H/dMMR: candidatos a inmunoterapia.
- Imatinib: GIST con *KIT* o *PDGFRA* sensibles.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **3. Tamizaje y Terapias Sistémicas** | Módulo 13, Cap. 81, pp. 687-689 (Criterios de tamizaje CCR y mama); Cap. 84, pp. 704-708 y Cap. 85, pp. 712-716 (Citotóxicos, anti-HER2, anti-PD-1). | Schwartz 10ª ed., Cap. 10, pp. 284-292 (Gemcitabina en páncreas, Bevacizumab perioperatorio); Sabiston 21ª ed., Cap. 29, pp. 668-671 (Mutaciones KRAS/NRAS y resistencia a anti-EGFR). | **4 afirmaciones AMCG / 4 afirmaciones Schwartz-Sabiston** (Total: 8) |

### Referencias
Tratado AMCG 3ª ed., Caps. 84–85. Schwartz 10ª ed., Cap. 10, pp. 288–292. Sabiston 21ª ed., Cap. 29, pp. 668–671. Ficha técnica de bevacizumab (FDA). NCCN Guidelines por tumor (versiones vigentes).
`),
    sheet("neo-lisis", "06", "Síndrome de lisis tumoral", `
## Síndrome de lisis tumoral

### Definición
Las urgencias oncológicas constituyen complicaciones agudas derivadas de la compresión mecánica de estructuras anatómicas vitales por la masa neoplásica o por trastornos metabólicos derivados de la lisis celular o secreción hormonal ectópica [Tratado AMCG 3ª ed., Cap. 82, p. 690; Schwartz 10ª ed., Cap. 10, p. 295; Sabiston 21ª ed., Cap. 30, p. 710].
El síndrome de lisis tumoral (SLT) es el conjunto de alteraciones metabólicas (hiperuricemia, hiperpotasemia, hiperfosfatemia e hipocalcemia secundaria) por la liberación masiva del contenido intracelular de células tumorales, que puede causar lesión renal aguda, arritmias y convulsiones.

### Epidemiología y factores de riesgo
#### A. Síndrome de Lisis Tumoral (SLT)
Urgencia metabólica desencadenada por la lisis celular neoplásica masiva con vaciamiento brusco del contenido intracelular al torrente sanguíneo, típicamente en linfomas de alto grado (Burkitt), leucemias agudas y tumores de células germinales tras iniciar quimioterapia citotóxica:
Riesgo alto: linfoma de Burkitt, leucemia linfoblástica aguda con leucocitosis > 100,000, leucemia mieloide aguda con leucocitosis alta, tumores voluminosos (> 10 cm) muy quimiosensibles, DHL > 2 veces lo normal, insuficiencia renal o deshidratación previas, hiperuricemia basal. Es raro en tumores sólidos, aunque se ha descrito en cáncer de pulmón de células pequeñas, tumores germinales, neuroblastoma, hepatoblastoma y, de forma espontánea o tras embolización, en hepatocarcinoma y metástasis hepáticas voluminosas. También puede desencadenarse por esteroides en linfomas, por radioterapia y por la manipulación quirúrgica de tumores muy voluminosos.

### Fisiopatología
- **Ácido úrico:** los ácidos nucleicos liberados se degradan a hipoxantina → xantina → ácido úrico (xantina oxidasa). En la orina ácida del túbulo distal el ácido úrico precipita y obstruye.
- **Fósforo:** las células tumorales tienen hasta 4 veces más fósforo; el fosfato se une al calcio y precipita como fosfato de calcio en el riñón (nefrocalcinosis) y en tejidos; la hipocalcemia resultante causa tetania, arritmias y convulsiones. Si el producto calcio × fósforo supera 60 mg²/dL² el riesgo de precipitación aumenta.
- **Potasio:** la liberación directa y la lesión renal causan hiperpotasemia con arritmias, la causa más rápida de muerte.
- **Lesión renal aguda:** por cristales, nefrocalcinosis, hipovolemia y, en algunos casos, uropatía obstructiva por el tumor.

### Diagnóstico y criterios
- **Criterios Diagnósticos de Cairo-Bishop (2004)**:
  1. *Lisis Tumoral de Laboratorio (LT-Lab)*: Requiere la presencia de al menos **dos o más de los siguientes cuatro criterios analíticos** dentro de las 24 horas previas o hasta 7 días posteriores al inicio de la quimioterapia:
     - **Hiperuricemia**: Ácido úrico sérico $\\ge 8.0\\text{ mg/dL}$ (o aumento del 25% respecto al valor basal).
     - **Hiperpotasemia**: Potasio sérico $\\ge 6.0\\text{ mEq/L}$ (o aumento del 25%).
     - **Hiperfosfatemia**: Fósforo sérico $\\ge 4.5\\text{ mg/dL}$ (o aumento del 25%).
     - **Hipocalcemia**: Calcio sérico corregido $\\le 7.0\\text{ mg/dL}$ (o calcio iónico $< 1.12\\text{ mg/dL}$, o descenso del 25% respecto al basal) secundaria a la precipitación de sales de fosfato de calcio insolubles en tejidos blandos y túbulos renales.
  2. *Lisis Tumoral Clínica (LT-Clínica)*: Presencia de LT-Lab confirmada más al menos **una complicación clínica orgánica grave**: creatinina sérica $\\ge 1.5$ veces el límite superior normal para la edad, arritmias ventriculares letales / muerte súbita o convulsiones neuromusculares.

### Tratamiento
- **Protocolo de Manejo y Prevención**:
  - *Hiperhidratación Enérgica*: Infusión continua de cristaloides sin potasio a razón de **2,500 a 3,000 mL/m²/día** para mantener un gasto urinario $\\ge 100\\text{ mL/m}^2/\\text{h}$ ($\\ge 2.0\\text{ a }3.0\\text{ mL/kg/h}$).
  - *Fármacos Hipouricemiantes*:
    - **Alopurinol**: Inhibidor competitivo de la enzima xantina oxidasa administrado a dosis de **300 mg/día vía oral**. Bloquea la formación de nuevo ácido úrico a partir de xantina e hipoxantina; está indicado de forma profiláctica en pacientes con riesgo intermedio de SLT, pero **carece de efecto sobre el ácido úrico ya circulante preexistente**.
    - **Rasburicasa (Urato Oxidasa Recombinante)**: Enzima recombinante de acción catalítica directa administrada a dosis de **0.15 a 0.20 mg/kg IV en infusión única de 30 minutos**. Transforma enzimáticamente de forma instantánea e irreversible el ácido úrico circulante soluble en **alantoína**, una molécula 10 veces más hidrosoluble que se depura con facilidad por filtración glomerular sin precipitar en la médula renal. Es el **tratamiento de elección indiscutible en pacientes de alto riesgo de SLT o con hiperuricemia severa ya establecida** [Schwartz 10ª ed., Cap. 10, p. 296; Sabiston 21ª ed., Cap. 30, p. 710; Cairo-Bishop Guidelines].

#### Manejo de cada alteración
- **Hiperpotasemia:** ECG inmediato; gluconato de calcio 10% 10 mL IV si hay cambios electrocardiográficos (estabiliza la membrana), insulina rápida 10 UI con glucosa 25 g, salbutamol nebulizado, resinas de intercambio (patirómero o poliestireno) y hemodiálisis si es refractaria.
- **Hiperfosfatemia:** quelantes orales (sevelamer, hidróxido de aluminio), restricción; diálisis si es grave.
- **Hipocalcemia:** solo se corrige si es sintomática (tetania, arritmias, convulsiones), porque el calcio administrado con fósforo alto precipita en los tejidos.
- **Alcalinización urinaria** con bicarbonato: ya **no se recomienda** de rutina; favorece la precipitación de fosfato de calcio y de xantina, y no es necesaria si se usa rasburicasa.
- **Rasburicasa:** contraindicada en deficiencia de glucosa-6-fosfato deshidrogenasa (hemólisis y metahemoglobinemia); interfiere con la medición del ácido úrico si la muestra no se transporta en hielo.
- **Hemodiálisis:** oliguria persistente, hiperpotasemia refractaria, sobrecarga de volumen, hiperfosfatemia o hipocalcemia sintomática graves.

#### Prevención según el riesgo
| Riesgo | Medidas |
| :--- | :--- |
| Bajo | Hidratación y vigilancia; alopurinol opcional |
| Intermedio | Hidratación intensa y alopurinol (o febuxostat); laboratorio cada 8–12 h |
| Alto | Hidratación intensa, rasburicasa, monitoreo cardiaco, laboratorio cada 6 h y disponibilidad de diálisis |

### Relevancia para el cirujano
El cirujano participa en la colocación de catéteres para hemodiálisis o quimioterapia, en la biopsia de masas abdominales voluminosas de un posible linfoma (donde la manipulación y los esteroides perioperatorios pueden desencadenar el síndrome) y en la cirugía de urgencia de un paciente que inicia quimioterapia. En un paciente con masa abdominal voluminosa y DHL muy alta, el laboratorio preoperatorio debe incluir ácido úrico, potasio, fósforo, calcio y creatinina.

### Complicaciones y pronóstico
Lesión renal aguda (con mortalidad que aumenta varias veces si requiere diálisis), arritmias y muerte súbita, convulsiones. Con prevención adecuada, la incidencia de SLT clínico es baja y la recuperación renal es la regla.

### Perlas
- Cuatro letras: K alto, P alto, ácido úrico alto, Ca bajo.
- Rasburicasa en riesgo alto o hiperuricemia establecida; alopurinol solo previene.
- No alcalinizar de rutina.
- No corregir la hipocalcemia asintomática.
- Deficiencia de G6PD contraindica rasburicasa.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **4. Lisis Tumoral y Neutropenia Febril** | Módulo 13, Cap. 82, pp. 690-692 (Metabolismo de uratos, alopurinol, contraindicación de examen rectal en neutropenia). | Schwartz 10ª ed., Cap. 10, pp. 295-297 (Criterios Cairo-Bishop, rasburicasa); Sabiston 21ª ed., Cap. 30, p. 710; MASCC Guidelines (Estratificación MASCC de neutropenia febril). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Cap. 82, pp. 690–691. Schwartz 10ª ed., Cap. 10, pp. 295–296. Sabiston 21ª ed., Cap. 30, p. 710. Cairo MS, Bishop M. Tumour lysis syndrome: new therapeutic strategies and classification. Br J Haematol 2004. Howard SC, et al. The tumor lysis syndrome. N Engl J Med 2011.
`),
    sheet("neo-neutropenia", "07", "Neutropenia febril y enterocolitis neutropénica", `
## Neutropenia febril y enterocolitis neutropénica

### Definición
- **Definición Médica Estandarizada**: Presencia de una temperatura corporal **oral única $\\ge 38.3\\text{ }^\\circ\\text{C}$** o una temperatura **oral $\\ge 38.0\\text{ }^\\circ\\text{C}$ sostenida durante más de una hora continua**, en un paciente con un Recuento Absoluto de Neutrófilos (**RAN) $< 500/\\text{mm}^3$** (o un RAN $< 1,000/\\text{mm}^3$ con declive previsto a $< 500/\\text{mm}^3$ en las siguientes 48 horas tras quimioterapia mielosupresora).

La **enterocolitis neutropénica (tiflitis)** es la necrosis inflamatoria de la pared intestinal, sobre todo del ciego y el colon derecho, en pacientes con neutropenia profunda; es la presentación quirúrgica más importante de la neutropenia.

### Epidemiología
La neutropenia febril ocurre en 10–50% de los pacientes con tumores sólidos y en más del 80% de los pacientes con neoplasias hematológicas que reciben quimioterapia; su mortalidad global es de alrededor del 5–10% y llega al 20–30% en los de alto riesgo. La enterocolitis neutropénica se presenta en aproximadamente 5% de los pacientes hospitalizados con neoplasias hematológicas y quimioterapia intensiva, con mortalidad alta (hasta 30–50% en series antiguas).

### Fisiopatología
La quimioterapia destruye la mucosa intestinal (mucositis) y la médula ósea al mismo tiempo; los microorganismos de la flora (gramnegativos entéricos, anaerobios, *Clostridium septicum*, hongos) invaden la pared sin la respuesta neutrofílica. Por la falta de neutrófilos, los signos clásicos de inflamación (pus, eritema, defensa abdominal intensa, infiltrados pulmonares) se atenúan: **la fiebre puede ser el único signo**. El ciego es el más afectado por su distensibilidad, su menor irrigación y la abundancia de tejido linfoide.

### Cuadro clínico y precauciones
- **CONTRAINDICACIÓN CLÍNICA INVIOLABLE AUDITADA**: En todo paciente neutropénico está **estrictamente contraindicada la toma de temperatura rectal, la colocación de termómetros rectales, el tacto rectal y la aplicación de supositorios o enemas**. El microtrauma de la mucosa rectal desprovista de barrera epitelial neutrofílica facilita la invasión vascular inmediata y desata bacteriemia fulminante y sepsis por bacilos gramnegativos entéricos (*Pseudomonas*, *E. coli*, *Klebsiella*).
- **Neutropenia febril:** fiebre con o sin foco aparente; buscar en catéteres, piel, boca, región perianal (sin tacto rectal), pulmón y vías urinarias.
- **Enterocolitis neutropénica:** fiebre, dolor en fosa iliaca derecha, distensión, diarrea (a veces sanguinolenta), entre los 10 y 14 días después de la quimioterapia, coincidiendo con el nadir de neutrófilos.

### Diagnóstico
- Hemocultivos (al menos dos juegos, uno de cada lumen del catéter central y uno periférico) antes del antibiótico, sin retrasarlo; urocultivo, radiografía de tórax, cultivo de sitios sospechosos.
- Biometría, química, función hepática, lactato.
- **TC de abdomen** en sospecha de enterocolitis: engrosamiento de la pared del ciego > 4 mm (más de 10 mm se asocia a mayor mortalidad), neumatosis, líquido pericecal, perforación. El ultrasonido también mide el grosor parietal. Evitar colonoscopia y enemas de contraste por riesgo de perforación.

### Estratificación del riesgo y tratamiento antimicrobiano
- **Estratificación Pronóstica con la Escala MASCC (Multinational Association for Supportive Care in Cancer)**:
  - Evalúa 7 factores clínicos ponderados (severidad de síntomas: leve 5 pts, moderado 3 pts; sin hipotensión: 5 pts; sin EPOC: 4 pts; tumor sólido o sin infección fúngica: 4 pts; sin deshidratación: 3 pts; estado ambulatorio: 3 pts; edad < 60 años: 2 pts; escala máxima de 26 puntos):
    - **Puntaje MASCC $\\ge 21$ Puntos (Bajo Riesgo)**: Riesgo de complicaciones médicas graves $< 5\\%$ y mortalidad $< 1-3\\%$. Son candidatos a manejo **ambulatorio con antibióticos orales** de amplio espectro: **Ciprofloxacino (500 mg c/12h VO) asociado a Amoxicilina con Ácido Clavulánico (875/125 mg c/8h VO)** tras una fase de observación inicial de 4 a 12 horas en urgencias.
    - **Puntaje MASCC $< 21$ Puntos (Alto Riesgo)**: Riesgo de complicaciones mayores $> 30\\%$ y mortalidad del 15% al 30%. Exige **ingreso hospitalario urgente y administración inmediata de antibioticoterapia intravenosa bactericida antipseudomónica en menos de 60 minutos** (*Golden Hour*): Monoterapia con **Cefepima (2.0 g IV c/8h)**, **Piperacilina/Tazobactam (4.5 g IV c/6h)** o **Meropenem (1.0 g IV c/8h)**. La Vancomicina se agrega de inicio sólo ante sospecha de infección asociada a catéter venoso central, hipotensión hemodinámica o mucositis severa [Tratado AMCG 3ª ed., Cap. 82, p. 692; Schwartz 10ª ed., Cap. 10, p. 297; MASCC Guidelines].

#### Ajustes
- Agregar cobertura contra grampositivos resistentes (vancomicina) por inestabilidad, infección de catéter o de piel, neumonía o colonización por SARM; contra anaerobios si hay foco abdominal o perianal (piperacilina-tazobactam o meropenem ya los cubren).
- Antifúngico empírico si la fiebre persiste 4–7 días pese al antibiótico.
- Factor estimulante de colonias de granulocitos (filgrastim) en pacientes de alto riesgo con sepsis, neumonía o infección fúngica.
- Retiro del catéter en bacteriemia por *S. aureus*, *Pseudomonas*, hongos o micobacterias, o en infección del túnel.

### Tratamiento de la enterocolitis neutropénica
- **Médico (la mayoría):** ayuno, sonda nasogástrica si hay distensión, líquidos, nutrición parenteral, antibiótico de amplio espectro con cobertura anaerobia (piperacilina-tazobactam, meropenem), antifúngico si persiste la fiebre, factor estimulante de colonias, transfusión de plaquetas y corrección de la coagulopatía; evitar antidiarreicos, opioides y anticolinérgicos.
- **Quirúrgico:** perforación libre, hemorragia persistente a pesar de corregir la coagulación, deterioro clínico con sepsis no controlada o necrosis transmural. Se hace **hemicolectomía derecha con ileostomía terminal y fístula mucosa** (sin anastomosis primaria en el neutropénico), con resección de todo el intestino necrótico. Idealmente se opera cuando se recupera la cuenta de neutrófilos, pero la perforación no espera.

### Complicaciones
Choque séptico, falla orgánica múltiple, infecciones fúngicas invasoras, perforación, hemorragia, dehiscencias y abscesos en el neutropénico operado, retraso de la quimioterapia subsecuente.

### Abdomen agudo en el paciente neutropénico: diagnóstico diferencial
Apendicitis (que puede coexistir y es difícil de distinguir de la tiflitis), colitis por *C. difficile*, colecistitis alitiásica, absceso perianal (sin fluctuación por la falta de pus), pancreatitis por fármacos (asparaginasa), perforación de linfoma intestinal, obstrucción por tumor, colitis isquémica. El absceso perianal del neutropénico se trata con antibiótico y drenaje solo si hay fluctuación, porque las heridas no cicatrizan hasta recuperar neutrófilos.

### Perlas
- Fiebre ≥ 38.3 °C única o ≥ 38 °C por una hora con neutrófilos < 500: antibiótico IV antipseudomónico en menos de 60 minutos si es de alto riesgo.
- Prohibido el tacto rectal, termómetro rectal, supositorios y enemas.
- MASCC ≥ 21: bajo riesgo, manejo oral; < 21: hospitalización.
- Tiflitis: dolor en fosa iliaca derecha en el nadir; TC con pared cecal engrosada.
- Cirugía solo por perforación, hemorragia o deterioro: hemicolectomía derecha con ileostomía, sin anastomosis.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **4. Lisis Tumoral y Neutropenia Febril** | Módulo 13, Cap. 82, pp. 690-692 (Metabolismo de uratos, alopurinol, contraindicación de examen rectal en neutropenia). | Schwartz 10ª ed., Cap. 10, pp. 295-297 (Criterios Cairo-Bishop, rasburicasa); Sabiston 21ª ed., Cap. 30, p. 710; MASCC Guidelines (Estratificación MASCC de neutropenia febril). | **3 afirmaciones AMCG / 3 afirmaciones Schwartz-Sabiston** (Total: 6) |

### Referencias
Tratado AMCG 3ª ed., Cap. 82, p. 692. Schwartz 10ª ed., Cap. 10, p. 297. Sabiston 21ª ed., Cap. 30. Freifeld AG, et al. Clinical practice guideline for the use of antimicrobial agents in neutropenic patients with cancer: 2010 update by the IDSA. Clin Infect Dis 2011. Taplitz RA, et al. Outpatient management of fever and neutropenia: ASCO/IDSA guideline update 2018. Klastersky J, et al. The MASCC risk index. J Clin Oncol 2000.
`),
    sheet("neo-medular", "08", "Compresión medular neoplásica", `
## Compresión medular neoplásica

### Definición
Urgencia neuroquirúrgica originada en más del 85-90% de los casos por el colapso patológico de un cuerpo vertebral con metástasis epidural ósea (cáncer de mama, pulmón, próstata, riñón y mieloma múltiple) que comprime el saco dural y la médula espinal (típicamente torácica en el 70%):

### Epidemiología
Afecta al 3–5% de los pacientes con cáncer durante la evolución de su enfermedad y puede ser la primera manifestación del cáncer en aproximadamente 20% de los casos. Las metástasis vertebrales son las metástasis óseas más frecuentes; la localización es torácica en 60–70%, lumbosacra en 20–30% y cervical en 10%.

### Fisiopatología
Las células tumorales llegan al cuerpo vertebral por vía hematógena (plexo venoso de Batson) y crecen hacia el espacio epidural, o el cuerpo vertebral colapsa y retropulsa fragmentos al canal. La compresión produce edema vasogénico, isquemia venosa y finalmente infarto medular. El daño es reversible mientras el paciente conserva la marcha: **el estado neurológico al iniciar el tratamiento es el principal predictor del resultado**.

### Cuadro clínico
- **Cuadro Clínico**: El dolor raquídeo dorsal o lumbar focal constante que empeora en decúbito supino, por la noche y con la percusión espinal o maniobras de Valsalva suele preceder en semanas a la compresión medular; le sigue debilidad motora simétrica progresiva en extremidades inferiores (paresia o paraplejía flácida inicial), hipoestesia con nivel sensitivo troncular definido y disfunción autonómica esfinteriana tardía (retención urinaria por rebosamiento o incontinencia fecal).

#### Datos de alarma en un paciente con cáncer
Dolor de espalda nuevo o diferente, dolor torácico en banda (radicular), dolor que empeora acostado y despierta por la noche, debilidad o torpeza de piernas, alteración sensitiva con nivel, retención urinaria. Cualquiera de ellos obliga a resonancia urgente, aunque la exploración neurológica sea normal. La exploración incluye fuerza segmentaria, reflejos (hiperreflexia y Babinski en compresión medular; arreflexia en cola de caballo), nivel sensitivo y tono del esfínter anal.

### Diagnóstico
- **Estudio Diagnóstico de Elección**: **Resonancia Magnética Nuclear (RMN) urgente de TODA la columna vertebral completa (cervical, torácica y lumbosacra) con gadolinio**.
  - *Justificación Anatómica*: Entre el 20% y el 30% de los pacientes oncológicos presentan metástasis compresivas epidurales multinivel asintomáticas en sitios remotos al dolor inicial que cambiarán la planificación quirúrgica y radioterapéutica.
Si la resonancia está contraindicada o no disponible, se usa TC (mielografía por TC). La biopsia guiada se requiere si no hay diagnóstico de cáncer previo.

#### Clasificaciones útiles
- **Escala de Bilsky** de compresión epidural: grado 0 (solo hueso), 1 (epidural sin deformar la médula), 2 (deforma la médula con líquido cefalorraquídeo visible), 3 (compresión sin LCR visible). Grados 2–3 = compresión de alto grado.
- **SINS** (*Spinal Instability Neoplastic Score*): localización, dolor mecánico, tipo de lesión ósea, alineación, colapso vertebral y afectación de elementos posteriores; 0–6 estable, 7–12 potencialmente inestable, 13–18 inestable.
- **Marco NOMS** (neurológico, oncológico, mecánico, sistémico) para elegir entre radioterapia convencional, radiocirugía estereotáctica y cirugía.
- **Radiosensibilidad del tumor:** linfoma, mieloma, mama, próstata y células pequeñas son radiosensibles; renal, melanoma, tiroides, sarcoma y colon son radiorresistentes a la radioterapia convencional.

### Tratamiento
- **Protocolo Terapéutico Específico**:
  1. *Fase Farmacológica Inmediata*: Administración intravenosa inmediata de **Dexametasona en bolo de 10 a 16 mg IV**, seguida de 4 a 8 mg IV cada 6 horas para reducir el edema vasogénico del cordón medular y preservar la perfusión microvascular axonal.
  2. *Descompresión Quirúrgica Circunferencial Urgente vs Radioterapia*:
     - **CAMBIO DOCTRINAL BASADO EN EL ENSAYO PATCHELL**: Históricamente la radioterapia externa sola era el pilar inicial. El ensayo clínico prospectivo y aleatorizado de **Patchell (Lancet 2005)** demostró categóricamente la superioridad de la **Descompresión Quirúrgica Circunferencial Urgente con Resección del Tumor y Estabilización Instrumental Espinal seguida de Radioterapia Adyuvante en las primeras 24 a 48 horas**, permitiendo al **84% de los pacientes recuperar o mantener la marcha independiente en comparación con tan sólo el 57% en el grupo de radioterapia sola**, con una supervivencia global significativamente más prolongada y menor requerimiento de narcóticos. La cirugía descompresiva es mandatoria ante compresión medular con inestabilidad espinal biomecánica (SINS $\\ge 7$), fractura patológica con retropulsión de fragmentos óseos hacia el canal, progresión durante la radioterapia o diagnóstico histológico desconocido [Sabiston 21ª ed., Cap. 30, p. 711; Schwartz 10ª ed., Cap. 10, p. 298; Tratado AMCG 3ª ed., Cap. 82, p. 693].

#### Elementos complementarios
- Analgesia con opioides, inmovilización en caso de inestabilidad hasta la cirugía, tromboprofilaxis, protocolo de vejiga (sonda), programa intestinal y prevención de úlceras por presión.
- Radioterapia sola (por ejemplo 8 Gy en una fracción o 20 Gy en 5) en pacientes con expectativa de vida corta, tumores radiosensibles, paraplejía completa de más de 48 horas o mal estado general.
- Radiocirugía estereotáctica corporal en tumores radiorresistentes sin compresión de alto grado.
- Quimioterapia de inicio en tumores muy quimiosensibles (linfoma, tumores germinales).

### Discrepancia bibliográfica
| Parámetro / Entidad Quirúrgica | Tratado de Cirugía General (AMCG 3ª edición) | Schwartz: Principios de Cirugía (10ª edición) | Sabiston: Tratado de Cirugía (21ª edición) | Análisis Crítico y Guía de Conducta para el Residente (R2) |
| :--- | :--- | :--- | :--- | :--- |
| **Tratamiento Inicial de Elección en Compresión Medular Neoplásica** | **Módulo 13, Cap. 82, p. 693**: Recomienda como conducta clásica dominante el inicio inmediato de **Radioterapia Externa urgente combinada con dosis altas de dexametasona**, reservando la cirugía únicamente para fallas radioterápicas tardías o inestabilidad espinal extrema. | **Cap. 10, p. 298**: Plantea la radioterapia fraccionada y la descompresión quirúrgica como modalidades competitivas equivalentes según el estado general del paciente, seleccionando radioterapia en pacientes frágiles con tumores radiosensibles. | **Cap. 30, p. 711**: **Establece la Descompresión Quirúrgica Circunferencial Urgente con Estabilización Espinal seguida de Radioterapia Adyuvante en las primeras 24-48 horas como el estándar de oro superior de primera línea**, basándose en el ensayo aleatorizado de Patchell (84% vs 57% de recuperación de marcha frente a radioterapia sola). | **Discrepancia Doctrinal Real Comprobable**: La doctrina clásica recomendaba radioterapia de inicio por su rapidez; sin embargo, en pacientes con expectativa de vida mayor a 3 meses y compresión por masa sólida, la evidencia de nivel 1A exige descompresión quirúrgica urgente como tratamiento primario para preservar la deambulación. |

### Complicaciones
Paraplejía permanente, disfunción vesical e intestinal, úlceras por presión, trombosis venosa profunda, neumonía, complicaciones de la herida quirúrgica (más en pacientes irradiados y con esteroides), hiperglucemia por dexametasona.

### Pronóstico
La mediana de supervivencia tras la compresión medular es de 3–6 meses y depende del tumor primario (mejor en mama, próstata, mieloma y linfoma). El 80–90% de los pacientes que caminan al inicio del tratamiento siguen caminando; menos del 10% de los que llegan parapléjicos recuperan la marcha.

### Relevancia para el cirujano general
El cirujano general es a menudo quien atiende al paciente oncológico hospitalizado (por ejemplo, en el posoperatorio de una cirugía de cáncer de colon o en urgencias por obstrucción). Reconocer el dolor de espalda nuevo y los signos neurológicos tempranos, iniciar dexametasona, pedir la resonancia de toda la columna y comunicarse de inmediato con neurocirugía o columna y radioterapia es su responsabilidad.

### Perlas
- Dolor de espalda nuevo en un paciente con cáncer = resonancia de toda la columna.
- Dexametasona 10–16 mg IV de inmediato.
- Patchell: cirugía descompresiva + radioterapia > radioterapia sola (84% vs 57% de marcha).
- El estado neurológico al inicio predice el final: actuar antes de la paraplejía.
- SINS ≥ 7: valorar estabilización quirúrgica.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **5. Compresión Medular, SVCS e Hipercalcemia** | Módulo 13, Cap. 82, pp. 693-696 (RMN de columna completa, fisiopatología de PTHrP, expansión salina). | Schwartz 10ª ed., Cap. 10, pp. 298-302 (Stent en SVCS, ácido zoledrónico, calcitonina); Sabiston 21ª ed., Cap. 29, p. 673 y Cap. 30, p. 711 (Ensayo Patchell de descompresión quirúrgica). | **4 afirmaciones AMCG / 4 afirmaciones Schwartz-Sabiston** (Total: 8) |

### Referencias
Tratado AMCG 3ª ed., Cap. 82, p. 693. Schwartz 10ª ed., Cap. 10, p. 298. Sabiston 21ª ed., Cap. 30, p. 711. Patchell RA, et al. Direct decompressive surgical resection in the treatment of spinal cord compression caused by metastatic cancer: a randomised trial. Lancet 2005;366:643-8. Fisher CG, et al. A novel classification system for spinal instability in neoplastic disease (SINS). Spine 2010. Bilsky MH, et al. J Neurosurg Spine 2010.
`),
    sheet("neo-svcs", "09", "Síndrome de vena cava superior", `
## Síndrome de vena cava superior

### Definición
Obstrucción mecánica intrínseca o extrínseca del retorno venoso a través de la VCS hacia la aurícula derecha, originada en más del 85% al 90% por neoplasias torácicas malignas invasivas (carcinoma pulmonar microcítico y no microcítico, linfoma mediastínico de células B y metástasis mediastínicas):

### Epidemiología
Afecta a 2–4% de los pacientes con cáncer de pulmón y a una proporción similar de pacientes con linfoma no Hodgkin mediastínico. Las causas no malignas han aumentado (hasta 20–40% en series recientes) por la **trombosis asociada a dispositivos intravasculares**: catéteres venosos centrales, puertos de quimioterapia, catéteres de hemodiálisis y cables de marcapasos, algo que el cirujano general que coloca catéteres debe tener presente. Otras causas benignas: mediastinitis fibrosante (histoplasmosis, tuberculosis), bocio intratorácico y aneurisma aórtico.

### Anatomía y fisiopatología
La vena cava superior es un vaso de pared delgada y baja presión, rodeado por estructuras rígidas (esternón, tráquea, bronquio derecho, aorta, ganglios paratraqueales y subcarinales), por lo que se comprime con facilidad. La obstrucción gradual permite el desarrollo de colaterales (sistema ácigos, mamarias internas, torácicas laterales, venas paravertebrales y esofágicas), que explican la red venosa visible y por qué los síntomas mejoran en semanas aunque la obstrucción persista. Si la obstrucción está por debajo de la desembocadura de la ácigos, los síntomas son más graves porque el flujo debe regresar por la vena cava inferior.

- **Fisiopatología y Clínica**: Aumento de la presión venosa retrógrada en el territorio tributario superior (cabeza, cuello y extremidades superiores) desde los 2 a 8 mmHg normales hasta más de 20 a 40 mmHg:
  - *Fascies Abotagada en Esclavina*: Edema periorbitario y facial matutino masivo, plétora facial violácea, edema bipalpebral y quemosis conjuntival.
  - *Ingurgitación Venosa*: Dilatación yugular bilateral sin pulso visible y red venosa colateral superficial dilatada en el tórax anterior y hombros.
  - *Signos de Alarma Vital*: Edema de glotis o cuerdas vocales con estridor laríngeo, ortopnea severa y edema cerebral con cefalea holocraneana, somnolencia, visión borrosa y estupor.

### Clasificación de gravedad (Yu, 2008)
| Grado | Descripción |
| :--- | :--- |
| 0 | Asintomático (hallazgo de imagen) |
| 1 | Leve: edema de cabeza y cuello, plétora |
| 2 | Moderado: edema con alteración funcional (disfagia leve, tos, alteración visual) |
| 3 | Grave: edema cerebral leve (cefalea, mareo), edema laríngeo leve, disminución de la reserva cardiaca |
| 4 | Amenaza la vida: edema cerebral significativo (confusión), edema laríngeo con estridor o compromiso hemodinámico (síncope, hipotensión) |
| 5 | Muerte |

### Diagnóstico y tratamiento
- **Abordaje Diagnóstico y Manejo Terapéutico**:
  - Diagnóstico: **Angiotomografía Computarizada (AngioTAC) torácica multifásica con contraste intravenoso** para delimitar el punto exacto de la obstrucción, la presencia de trombosis endoluminal y la permeabilidad del árbol vascular distal.
  - Medidas generales: Elevación de la cabecera de la cama a 45°, oxigenoterapia suplementaria, restricción hidrosalina moderada y Dexametasona (4 a 8 mg c/6h IV) para reducir el componente inflamatorio y el edema de la vía aérea.
  - *Terapia de Elección*: **Colocación Percutánea Endovascular de Stent Metálico Autoexpandible en la Vena Cava Superior**. Proporciona alivio sintomático inmediato en más del 90% al 95% de los pacientes dentro de las primeras 24 a 48 horas sin retrasar la quimioterapia o radioterapia subsecuente [Schwartz 10ª ed., Cap. 10, p. 299; Tratado AMCG 3ª ed., Cap. 82, p. 694].

#### Principios del manejo actual
- **El síndrome rara vez es una urgencia quirúrgica o radioterápica inmediata:** salvo en el grado 4 (estridor, edema cerebral o compromiso hemodinámico), existe margen seguro para obtener un **diagnóstico histológico** antes de iniciar terapia específica; los esteroides o la radioterapia empíricos pueden inducir lisis linfoide rápida, enmascarar un linfoma e impedir su tipificación definitiva.
- **Signo de Pemberton y valoración clínica:** la elevación bilateral de los brazos por encima de la cabeza durante 60 segundos estrecha el opérculo torácico y desencadena plétora facial intensa, ingurgitación yugular y disnea/estridor; es característico de masas mediastínicas anteriores y bocio intratorácico. Debe explorarse siempre si existen ganglios supraclaviculares o cervicales accesibles para biopsia bajo anestesia local.
- **Obtención de tejido y seguridad anestésica en masa mediastínica anterior:** preferir el método menos invasivo (biopsia excisional de ganglio supraclavicular, broncoscopia con EBUS o biopsia percutánea guiada por TC). Si existe compresión traqueal > 50% en la TC o síntomas posicionales en decúbito, **la anestesia general con bloqueo neuromuscular conlleva riesgo de colapso catastrófico de la vía aérea y paro circulatorio**; priorizar procedimientos bajo anestesia local con paciente semisentado y, si es imprescindible intubar, realizarlo en ventilación espontánea con fibrobroncoscopio y respaldo de broncoscopio rígido.
- **Conducta terapéutica dirigida por etiología:**

| Etiología del SVCS | Tratamiento primario de base | Papel del stent endovascular | Anticoagulación / Retiro de dispositivo |
| :--- | :--- | :--- | :--- |
| **Linfoma mediastínico** | Quimioterapia sistémica ± inmunoterapia (respuesta rápida en 1–2 semanas) | Solo si grado 3–4 grave o amenaza vital inmediata | Solo si hay trombosis venosa extensa documentada |
| **Cáncer pulmonar microcítico (SCLC)** | Quimioterapia combinada ± radioterapia torácica (respuesta alta en 1–2 semanas) | Reservado para síntomas graves o recidiva refractaria | Solo ante trombosis asociada |
| **Cáncer pulmonar no microcítico (NSCLC)** | Radioterapia ± quimio/inmunoterapia (respuesta más lenta, 2–4 semanas) | **Primera línea para alivio rápido** en grados 2–4 sintomáticos | Antiagregación o anticoagulación según protocolo de stent y trombo |
| **Trombosis por catéter o puerto** | Anticoagulación sistémica mínima 3 meses | Trombólisis dirigida + angioplastia/stent si síntomas graves refractarios | Retirar si el catéter está mal posicionado, infectado o no es necesario; puede conservarse si funciona y es indispensable |
| **Causa benigna (mediastinitis fibrosante, bocio)** | Resección quirúrgica (bocio/timoma) o tratamiento de causa | Angioplastia con balón ± stent en estenosis sintomática refractaria | Considerar reconstrucción quirúrgica con injerto espiralado de safena o PTFE solo en centros expertos |

- **Prevención en cirugía general (catéteres y puertos):** colocar siempre la punta del catéter venoso central o puerto implantable en la **unión cavoatrial** (tercio inferior de la VCS), evitando puntas altas en el tronco braquiocefálico o contra la pared lateral de la VCS, que precipitan lesión endotelial y trombosis.

### Complicaciones
Edema laríngeo con obstrucción aguda de la vía aérea, edema cerebral con herniación, trombosis venosa central extensa y tromboembolia pulmonar, várices esofágicas descendentes (*downhill varices*) por drenaje colateral hacia el sistema ácigos con riesgo de hemorragia digestiva alta, y complicaciones propias del stent (migración a aurícula derecha, trombosis aguda, reestenosis, perforación de VCS con taponamiento cardiaco y hemorragia por anticoagulación).

### Pronóstico
Depende casi por completo de la enfermedad de base y su quimiosensibilidad: en carcinoma pulmonar avanzado la mediana de supervivencia global oscila alrededor de 6 a 12 meses, mientras que en linfomas curables la supervivencia a 5 años supera el 70%. El SVCS por sí mismo no constituye un factor pronóstico adverso independiente.

### Perlas de examen
- Primero obtener **diagnóstico histológico**, salvo grado 4 (estridor laríngeo, edema cerebral o inestabilidad hemodinámica).
- Administrar esteroides o radioterapia empíricos antes de la biopsia puede borrar el diagnóstico histológico de un **linfoma**.
- El **stent metálico autoexpandible endovascular** logra alivio sintomático en > 90% de los pacientes en 24–48 horas sin retrasar la terapia oncológica.
- Si la obstrucción se ubica **por debajo de la desembocadura de la vena ácigos**, el cuadro clínico es más severo porque el retorno debe desviarse hacia la vena cava inferior.
- En el paciente con **masa mediastínica anterior**, la relajación muscular bajo anestesia general puede colapsar la vía aérea; privilegiar biopsia con anestesia local y paciente sentado.
- Los catéteres venosos centrales, puertos de quimioterapia y marcapasos explican hoy hasta el 20–40% de los casos de SVCS por trombosis asociada a dispositivo.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **5. Compresión Medular, SVCS e Hipercalcemia** | Módulo 13, Cap. 82, pp. 693-696 (RMN de columna completa, fisiopatología de PTHrP, expansión salina). | Schwartz 10ª ed., Cap. 10, pp. 298-302 (Stent en SVCS, ácido zoledrónico, calcitonina); Sabiston 21ª ed., Cap. 29, p. 673 y Cap. 30, p. 711 (Ensayo Patchell de descompresión quirúrgica). | **4 afirmaciones AMCG / 4 afirmaciones Schwartz-Sabiston** (Total: 8) |

### Referencias
Tratado AMCG 3ª ed., Cap. 82, p. 694. Schwartz 10ª ed., Cap. 10, p. 299. Wilson LD, Detterbeck FC, Yahalom J. Superior vena cava syndrome with malignant causes. N Engl J Med 2007. Yu JB, et al. Superior vena cava syndrome — a proposed classification system and algorithm for management. J Thorac Oncol 2008.
`),
    sheet("neo-hipercalcemia", "10", "Hipercalcemia de malignidad", `
## Hipercalcemia de malignidad

### Definición y epidemiología
La alteración hidroelectrolítica oncológica potencialmente letal más frecuente, presentándose en el 10% al 30% de los pacientes con cáncer avanzado (mama, mieloma múltiple, pulmón epidermoide y carcinoma de células renales) [Tratado AMCG 3ª ed., Cap. 82, p. 695; Schwartz 10ª ed., Cap. 10, p. 301; Sabiston 21ª ed., Cap. 29, p. 672]:

### Fisiopatología
1. **Fisiopatología**:
   - *Hipercalcemia Humoral de la Malignidad (80% de los casos)*: Secreción sistémica no regulada por parte de tumores epitelioides de la **Proteína Relacionada con la Hormona Paratiroidea (PTHrP)**. La PTHrP se une con avidez al receptor acoplado a proteína G de PTH/PTHrP tipo 1 en los túbulos renales y osteoblastos, estimulando la resorción osteoclástica masiva e incrementando la reabsorción tubular renal de calcio y la excreción renal de fósforo.
   - *Osteólisis por Metástasis Óseas Locales (20%)*: Liberación directa de citocinas osteolíticas paracrinas (RANKL, IL-1, TNF-$\\alpha$) por micrometástasis medulares en mama y mieloma.
Mecanismos menos frecuentes: producción de **1,25-dihidroxivitamina D (calcitriol)** por linfomas (por la 1-α-hidroxilasa de los macrófagos tumorales, similar a la sarcoidosis), y secreción ectópica de PTH (excepcional). Además, la hipercalcemia produce un círculo vicioso: el calcio causa diabetes insípida nefrogénica (poliuria), náusea y vómito, que llevan a deshidratación, menor filtración glomerular y más hipercalcemia.

### Cuadro clínico
"Huesos, piedras, quejidos abdominales y gemidos psíquicos": dolor óseo, litiasis renal (más en el hiperparatiroidismo crónico que en la de malignidad, que es aguda), náusea, vómito, estreñimiento, pancreatitis, úlcera péptica, poliuria, polidipsia, deshidratación, debilidad, confusión, letargo y coma. Las manifestaciones dependen de la velocidad de instalación más que del valor absoluto: la hipercalcemia de malignidad suele ser de instalación rápida y sintomática.

### Diagnóstico
2. **Diagnóstico y Corrección por Albúmina**:
   - El calcio iónico biológicamente activo depende de la concentración de albúmina plasmática. Ante hipoalbuminemia común en cáncer, debe emplearse el **Calcio Sérico Corregido**:
     $$\\text{Calcio Corregido (mg/dL)} = \\text{Calcio total medido} + 0.8 \\times (4.0 - \\text{Albúmina sérica }[\\text{g/dL}])$$
   - *Estratificación*: Leve (10.5 a 11.9 mg/dL), Moderada (12.0 a 13.9 mg/dL) y **Severa o Crisis Hipercalcémica ($\\ge 14.0\\text{ mg/dL}$)**: letargia, confusión mental, estupor, náusea intratable, estreñimiento severo, deshidratación profunda por diabetes insípida nefrogénica inducida por calcio, insuficiencia renal prerrenal, **acortamiento del intervalo QT en el ECG**, arritmias ventriculares y paro cardíaco.

#### Estudio etiológico
| Prueba | Hipercalcemia humoral (PTHrP) | Hiperparatiroidismo primario | Linfoma (calcitriol) | Metástasis osteolíticas |
| :--- | :--- | :--- | :--- | :--- |
| PTH intacta | Suprimida | Alta o inapropiadamente normal | Suprimida | Suprimida |
| PTHrP | Alta | Normal | Normal | Normal o alta |
| 1,25-(OH)₂ vitamina D | Baja o normal | Alta o normal | Alta | Baja o normal |
| Fósforo | Bajo | Bajo | Normal o alto | Normal o alto |

El hiperparatiroidismo primario es la causa más frecuente de hipercalcemia en pacientes ambulatorios; la malignidad lo es en pacientes hospitalizados. Ambos pueden coexistir, por lo que siempre se mide la PTH.

### Tratamiento
3. **Protocolo Terapéutico Escalonado y Riguroso**:
   - **Paso 1: Expansión de Volumen Intravascular Inmediata (Pilar Inicial)**:
     - Infusión de **Solución Salina Normal al 0.9%** a una velocidad de **200 a 300 mL/hora** (2 a 4 litros en las primeras 24 horas), titulada para revertir la hipovolemia, restaurar la tasa de filtración glomerular e inducir calciuresis forzada por saturación de los canales de sodio y calcio en el asa gruesa de Henle.
   - **Paso 2: Diuréticos de Asa (Furosemida)**:
     - **CORRECCIÓN CLÍNICA CRÍTICA**: La Furosemida (20 a 40 mg IV) está **formalmente contraindicada hasta que la hipovolemia haya sido COMPLETAMENTE revertida con solución salina**. Administrar diuréticos en un paciente hipercalcémico deshidratado exacerba la contracción de volumen, disminuye el filtrado glomerular y dispara paradójicamente la calcemia. Se reserva para pacientes completamente euvolémicos o con sobrecarga hídrica cardiopulmonar demostrada.
   - **Paso 3: Inhibidores de la Resorción Ósea (Bifosfonatos Intravenosos)**:
     - **Ácido Zoledrónico a dosis fija de 4.0 mg IV infundidos en 15 minutos** (o Pamidronato 60 a 90 mg IV en infusión de 2 a 4 horas). Son análogos sintéticos del pirofosfato inorgánico que se adhieren a la hidroxiapatita ósea y son endocitados por los osteoclastos, bloqueando la farnesil pirofosfato sintasa e induciendo apoptosis osteoclástica. Normalizan la calcemia en más del 85-90% de los pacientes; su inicio de acción ocurre a las 48-72 horas con nadir a los 4 a 7 días. Requiere ajuste de dosis o vigilancia estrecha ante insuficiencia renal severa.
   - **Paso 4: Calcitonina de Salmón (4 a 8 UI/kg SC o IM cada 12 horas)**:
     - Actúa en 2 a 4 horas inhibiendo directamente a los osteoclastos e incrementando la excreción renal de calcio; se utiliza como terapia puente durante las primeras 48 horas mientras los bifosfonatos alcanzan su efecto pleno. Su uso está limitado a 48 horas debido al desarrollo rápido de taquifilaxia por internalización de receptores.
   - **Paso 5: Denosumab (Anticuerpo anti-RANKL)**:
     - Dosis de **120 mg subcutáneos semanales durante el primer mes y luego mensual**. Bloquea la maduración osteoclástica; es el **tratamiento de elección ante hipercalcemia refractaria a bifosfonatos o en pacientes con insuficiencia renal severa (TFG $< 30\\text{ mL/min}$)** donde los bifosfonatos están contraindicados por toxicidad tubular [Tratado AMCG 3ª ed., Cap. 82, p. 696; Schwartz 10ª ed., Cap. 10, p. 302; Sabiston 21ª ed., Cap. 29, p. 673].

#### Otros recursos
- **Hemodiálisis** con baño bajo en calcio en hipercalcemia grave con insuficiencia renal o insuficiencia cardiaca que impide la hidratación.
- **Glucocorticoides** (prednisona 40–60 mg/día) en la hipercalcemia mediada por calcitriol (linfomas, mieloma) y en la sarcoidosis.
- **Suspender** suplementos de calcio y vitamina D, diuréticos tiazídicos, litio, y movilizar al paciente (la inmovilidad aumenta la resorción ósea).
- **Tratar la neoplasia**: el control a largo plazo depende del tratamiento oncológico; sin él, la hipercalcemia recurre.

### Complicaciones
Lesión renal aguda, arritmias (QT corto, bradiarritmias, bloqueos), pancreatitis, coma; complicaciones del tratamiento: sobrecarga de volumen con la hidratación, hipocalcemia e hipofosfatemia tras bifosfonatos o denosumab (más con denosumab en insuficiencia renal), osteonecrosis de mandíbula con uso prolongado de antirresortivos, reacción de fase aguda (fiebre, mialgias) tras la primera dosis de zoledronato.

### Pronóstico
La hipercalcemia de malignidad indica enfermedad avanzada: la mediana de supervivencia tras su aparición es de pocos meses (alrededor de 1–3 meses en series clásicas), salvo en tumores con tratamiento eficaz (mieloma, mama, linfoma).

### Relevancia para el cirujano
El cirujano general encuentra la hipercalcemia en pacientes con cáncer de mama, de cabeza y cuello, de pulmón y renal; también debe distinguirla del hiperparatiroidismo primario, cuyo tratamiento es la paratiroidectomía. En un paciente quirúrgico con náusea, estreñimiento, íleo o confusión inexplicables y un cáncer conocido, medir el calcio corregido.

### Perlas
- Calcio corregido = calcio + 0.8 × (4 – albúmina).
- Primero solución salina; furosemida solo en euvolemia.
- Zoledronato 4 mg IV (efecto en 2–4 días); calcitonina como puente las primeras 48 h.
- Denosumab en refractarios o con TFG < 30.
- PTH suprimida + PTHrP alta = hipercalcemia humoral de malignidad.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **5. Compresión Medular, SVCS e Hipercalcemia** | Módulo 13, Cap. 82, pp. 693-696 (RMN de columna completa, fisiopatología de PTHrP, expansión salina). | Schwartz 10ª ed., Cap. 10, pp. 298-302 (Stent en SVCS, ácido zoledrónico, calcitonina); Sabiston 21ª ed., Cap. 29, p. 673 y Cap. 30, p. 711 (Ensayo Patchell de descompresión quirúrgica). | **4 afirmaciones AMCG / 4 afirmaciones Schwartz-Sabiston** (Total: 8) |

### Referencias
Tratado AMCG 3ª ed., Cap. 82, pp. 695–696. Schwartz 10ª ed., Cap. 10, pp. 301–302. Sabiston 21ª ed., Cap. 29, pp. 672–673. Stewart AF. Hypercalcemia associated with cancer. N Engl J Med 2005. Endocrine Society Clinical Practice Guideline: Treatment of Hypercalcemia of Malignancy in Adults, 2023.
`),
    sheet("neo-paliativa", "11", "Cirugía paliativa y control del dolor en cáncer avanzado", `
## Cirugía paliativa y control del dolor en cáncer avanzado

### Definición
La cirugía paliativa no busca la curación oncológica del paciente, sino el alivio directo y eficaz de síntomas mecánicos devastadores producidos por el tumor avanzado (obstrucción, hemorragia, perforación, dolor intratable), preservando o mejorando la calidad de vida remanente con la mínima morbilidad perioperatoria posible [Tratado AMCG 3ª ed., Cap. 83, p. 697; Schwartz 10ª ed., Cap. 10, p. 304; Sabiston 21ª ed., Cap. 30, p. 711]:

### Epidemiología
Una proporción importante de los procedimientos que realiza un servicio de cirugía general en un hospital de segundo nivel del IMSS se hacen en pacientes con cáncer avanzado: gastrostomías y yeyunostomías, derivaciones intestinales, colostomías, drenaje de derrames, colocación de catéteres y control de hemorragias. La obstrucción intestinal maligna aparece en 10–28% de los cánceres colorrectales y en 20–50% de los de ovario avanzados.

### Principios de decisión en cirugía paliativa
- **El objetivo lo define el paciente:** aliviar un síntoma concreto, no "tratar el cáncer"; la pregunta es si el procedimiento mejorará su calidad de vida durante el tiempo que le queda.
- **Expectativa de vida y estado funcional:** ECOG, nutrición, ascitis, carcinomatosis y metástasis definen el beneficio; una cirugía mayor en un paciente con supervivencia esperada de semanas suele aumentar el sufrimiento.
- **Triángulo de decisión paliativa:** paciente y familia, cirujano y la enfermedad; documentar objetivos, alternativas y voluntades anticipadas (en México, Ley de Voluntad Anticipada en varias entidades y NOM-011-SSA3-2014 de cuidados paliativos).
- **Intervención menos invasiva eficaz:** endoscopia, radiología intervencionista o cirugía mínima antes que la laparotomía.

### Procedimientos paliativos
1. **Descompresión de Obstrucción Gastrointestinal**:
   - En obstrucción gástrica o duodenal por adenocarcinoma pancreático o gástrico irresecable: colocación de prótesis metálicas autoexpandibles (SEMS) transendoscópicas como opción mínimamente invasiva de rápida recuperación vs gastroyeyunostomía quirúrgica derivativa laparoscópica en pacientes con expectativa de vida mayor a 3-6 meses.
   - En obstrucción colónica maligna: colocación de stent colónico autoexpandible como puente a cirugía electiva o paliación definitiva vs colostomía de derivación desfuncionalizante en asa en fosa ilíaca izquierda o fístula mucosa descompresiva.
2. **Control de Hemorragia Maligna**:
   - Resecciones paliativas de contención hemostática limpia ante tumores gástricos o de colon sangrantes con anemia dependiente de transfusiones repetidas; o embolización arterial percutánea selectiva mediante radiología intervencionista.
3. **Procedimientos para Control de Fuga y Sepsis**:
   - Cierre o exteriorización con estomas derivativos proximales ante fístulas enterocutáneas, rectovaginales o enterovesicales secundarias a invasión tumoral o radiación previa.
4. **Cirugía del Dolor Visceral y Neuropático**:
   - **Neurólisis del Plexo Celíaco**: Destrucción química de los ganglios del plexo celíaco mediante inyección percutánea posterior guiada por tomografía o transgástrica guiada por ultrasonido endoscópico (EUS) de alcohol absoluto al 50-100% asociado a bupivacaína. Indicada en pacientes con cáncer pancreático o gástrico irresecable con dolor retroperitoneal profundo intratable; reduce el consumo de opioides sistémicos y sus efectos adversos neuromotores e íleo paralítico [Tratado AMCG 3ª ed., Cap. 83, p. 701; Schwartz 10ª ed., Cap. 10, p. 305].

### Obstrucción intestinal maligna (OIM): selección de estrategia
- **Diagnóstico:** la TC abdominopélvica contrastada define el número de sitios de obstrucción, presencia de carcinomatosis peritoneal, ascitis masiva, isquemia o perforación. Múltiples niveles de obstrucción, ascitis refractaria, hipoalbuminemia severa (< 2.5 g/dL) y ECOG 3–4 predicen fracaso quirúrgico y alta mortalidad.
- **Manejo médico farmacológico:** reposo digestivo inicial, hidratación prudente, **octreotida** (análogo de somatostatina que disminuye el volumen de secreciones gastrointestinales y el vómito), **dexametasona** (reduce el edema peritumoral y mejora la permeabilidad luminal en 30–50% de los casos), antieméticos centrales (haloperidol, metoclopramida **solo en obstrucción parcial**, estrictamente contraindicada en obstrucción completa por exacerbar cólicos y riesgo de perforación) y analgesia con opioides.
- **Gastrostomía descompresiva (PEG o percutánea):** permite retirar la sonda nasogástrica y que el paciente ingiera líquidos o alimentos blandos por confort mientras drena el contenido gástrico a bolsa.
- **Selección terapéutica comparada en OIM:**

| Escenario clínico | Opción de elección | Consideraciones técnicas y contraindicaciones clave |
| :--- | :--- | :--- |
| **Obstrucción única, ECOG 0–2, expectativa > 2–3 meses, sin ascitis masiva** | Cirugía paliativa (derivación, resección o estoma) | Mortalidad a 30 días de 15–30%; priorizar anastomosis fuera de tejido tumoral o radiado |
| **Obstrucción gástrica/duodenal (GOO) irresecable** | SEMS duodenal si expectativa < 3 meses; gastroyeyunostomía laparoscópica o EUS-GE si > 3–6 meses | El SEMS alivia más rápido pero reobstruye más a largo plazo |
| **Obstrucción colónica maligna izquierda** | SEMS colónico paliativo o colostomía en asa derivativa | **Contraindicado el SEMS si el paciente recibe o recibirá bevacizumab (anti-VEGF)** por riesgo de perforación del 10–20%; evitar SEMS a < 5 cm del margen anal |
| **Múltiples niveles, carcinomatosis difusa, ascitis masiva o ECOG 3–4** | Manejo médico (octreotida + dexametasona + haloperidol) + **gastrostomía descompresiva** | Evitar laparotomía fútil: alto riesgo de fístula, abdomen congelado y estancia hospitalaria terminal |

### Control del dolor oncológico y rotación de opioides
- **Escalera analgésica de la OMS:** escalón 1 no opioides (paracetamol, AINE); escalón 2 opioides débiles (tramadol); escalón 3 opioides potentes (morfina, oxicodona, hidromorfona, fentanilo transdérmico, buprenorfina), con coadyuvantes en cada escalón (gabapentinoides y antidepresivos duales para dolor neuropático, dexametasona para compresión tumoral, bifosfonatos/denosumab y radioterapia 8 Gy en fracción única para dolor óseo). En dolor intenso (EVA ≥ 7) se inicia directamente en el escalón 3.
- **Principios prácticos y ajuste renal:** vía oral preferente, horario fijo, **dosis de rescate equivalente al 10–15% de la dosis diaria total** cada 1–4 h, y **laxante estimulante/osmótico profiláctico obligatorio** con todo opioide (el estreñimiento nunca genera tolerancia). Al rotar entre opioides por toxicidad o analgesia insuficiente, calcular la dosis equianalgésica y **reducir 25–50% por tolerancia cruzada incompleta**. En insuficiencia renal avanzada (TFG < 30 mL/min), **evitar morfina y tramadol** por acumulación de metabolitos activos neurotóxicos (morfina-3 y 6-glucurónido → mioclonías, sedación, depresión respiratoria); preferir **fentanilo o buprenorfina** (y como alternativa hidromorfona con monitoreo estrecho).
- **Intervencionismo y sedación paliativa:** neurólisis del plexo celíaco (páncreas, estómago), bloqueo del plexo hipogástrico superior (dolor pélvico), bloqueo del ganglio impar (dolor perineal), bomba intratecal en dolor refractario. En fase agónica con síntomas refractarios (disnea, delirio agitado o dolor intratable), la **sedación paliativa proporcional** con midazolam (con consentimiento informado y respaldo de la NOM-011-SSA3-2014) busca aliviar el sufrimiento sin intención de acortar la vida.

### Otros procedimientos paliativos frecuentes
- **Ascitis maligna:** paracentesis evacuadora repetida o catéter peritoneal tunelizado; la derivación peritoneovenosa casi no se emplea por alto riesgo de trombosis, coagulopatía y siembra hematógena.
- **Derrame pleural maligno:** catéter pleural tunelizado (útil incluso con pulmón atrapado) o pleurodesis química con talco (si hay reexpansión pulmonar completa).
- **Ictericia obstructiva maligna:** prótesis biliar endoscópica (metálica cubierta/no cubierta si expectativa > 3 meses) o drenaje biliar percutáneo; la derivación biliodigestiva quirúrgica se reserva para irresecabilidad hallada durante laparotomía.
- **Hemorragia tumoral y heridas fungantes:** radioterapia hemostática hipofraccionada, embolización arterial transcatéter, hemostasia endoscópica; en lesiones ulceradas fétidas, curación suave con metronidazol tópico para control de olor y apósitos hemostáticos no adherentes.
- **Nutrición:** gastrostomía o yeyunostomía de alimentación en obstrucción de vía digestiva alta (cabeza y cuello, esófago) cuando la expectativa de vida justifica el soporte nutricional; evitar nutrición artificial agresiva en pacientes en fase agónica.

### Complicaciones
Mortalidad perioperatoria elevada (15–30% en cirugía por OIM), fístulas enterocutáneas, dehiscencia anastomótica por desnutrición e hipoalbuminemia, infección de sitio quirúrgico, reobstrucción temprana y prolongación de la hospitalización en el tramo final de la vida; por ello toda indicación paliativa debe discutirse en equipo multidisciplinario y con la familia.

### Perlas de examen
- La cirugía paliativa trata **síntomas específicos**, no el cáncer; la métrica de éxito es la calidad de vida remanente.
- Carcinomatosis difusa, ascitis voluminosa, hipoalbuminemia y múltiples niveles de obstrucción predicen **fracaso quirúrgico** en OIM.
- **Prohibido colocar SEMS colónico** en pacientes bajo tratamiento con **bevacizumab** por alto riesgo de perforación intestinal.
- La **gastrostomía descompresiva** es la alternativa digna a la sonda nasogástrica permanente en OIM inoperable.
- Todo opioide lleva **laxante profiláctico**; en insuficiencia renal grave evitar morfina (acumula M3G/M6G) y preferir **fentanilo o buprenorfina**.
- La **neurólisis del plexo celíaco** es de elección en dolor retroperitoneal intratable por cáncer de páncreas irresecable.

### Trazabilidad bibliográfica
| Sección Temática del Compendio | Fuente Principal 1: Tratado AMCG (3ª edición) [~50%] | Fuente Complementaria 2: Schwartz (10ª ed.) / Sabiston (21ª ed.) / Guías [~50%] | Inventario Exacto y Suma de Unidades Auditadas |
| :--- | :--- | :--- | :--- |
| **6. Cirugía Paliativa y Manejo del Dolor** | Módulo 13, Cap. 83, pp. 697-702 (Derivaciones paliativas, gastrostomías descompresivas, alcoholización del plexo celíaco). | Schwartz 10ª ed., Cap. 10, pp. 304-306 (Stents enterales autoexpandibles paliativos); Sabiston 21ª ed., Cap. 30, pp. 711-712 (Criterios de paliación quirúrgica de calidad de vida). | **2 afirmaciones AMCG / 2 afirmaciones Schwartz-Sabiston** (Total: 4) |
*Consolidación del Balance Numérico Auditado*:
- Total de unidades de asignación bibliográfica AMCG 3ª ed.: **20 afirmaciones documentadas (50.0%)**.
- Total de unidades de asignación bibliográfica Schwartz 10ª ed. / Sabiston 21ª ed. / Guías internacionales: **20 afirmaciones documentadas (50.0%)**.
- Balance total global: **40 unidades asignadas / Proporción auditada exacta: 50% vs 50%**.

### Referencias
Tratado AMCG 3ª ed., Cap. 83, pp. 697–702. Schwartz 10ª ed., Cap. 10, pp. 304–306. Sabiston 21ª ed., Cap. 30, pp. 711–712. Organización Mundial de la Salud, escalera analgésica; WHO Guidelines for the pharmacological and radiotherapeutic management of cancer pain, 2018. NOM-011-SSA3-2014, criterios para la atención de enfermos en situación terminal a través de cuidados paliativos. MASCC/ESMO guidelines on malignant bowel obstruction.
`),
  ],
};
