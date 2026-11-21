// R3 · peritoneo, tiroides/paratiroides/suprarrenal y mama.
// Desarrollo de tema completo por subtema (nivel R3 Cirugía General · Sabiston 21.ª, Schwartz 11.ª, ATA, NCCN, WSES, GPC IMSS).
import { sheet } from './hoja.js?v=20261122c';

export const R3B = {
  'ap-r3-peritoneo': [
    sheet('per-peritonitis', '01', 'Peritonitis y sepsis abdominal', `
## Anatomía y fisiología del peritoneo · peritonitis y sepsis abdominal

### Anatomía y fisiología del peritoneo
El peritoneo es la membrana serosa más extensa del organismo (~1.7 a 2.0 m², comparable a la superficie cutánea), formada por una monocapa de **células mesoteliales** sobre tejido conectivo submesotelial ricamente vascularizado y linfático. Se divide en dos hojas continuas:
- **Peritoneo parietal:** reviste la cara interna de la pared abdominal, el diafragma y la pelvis. Recibe irrigación de vasos parietales e **inervación somática** (nervios intercostales bajos T7–T12, iliohipogástrico, ilioinguinal y nervio frénico en el diafragma central). Su irritación desencadena **dolor somático agudo, bien localizado**, hiperestesia, contractura muscular refleja (defensa involuntaria) y signo de rebote (Blumberg).
- **Peritoneo visceral:** cubre los órganos intraperitoneales y forma mesos, ligamentos y epiplones. Posee **inervación autónoma visceral** (plexos celíaco, mesentéricos e hipogástrico), sensible principalmente a la distensión, tracción mesentérica e isquemia; produce **dolor mal localizado en la línea media** (epigastrio en intestino anterior, periumbilical en intestino medio e hipogastrio en intestino posterior).

En condiciones fisiológicas, la cavidad peritoneal contiene **50 a 100 mL de líquido seroso estéril** (proteínas <3 g/dL, <300 células/µL, predominio de macrófagos y linfocitos) que lubrica las asas. La membrana peritoneal actúa como una barrera bidireccional semipermeable (base de la diálisis peritoneal). La depuración bacteriana ocurre por tres mecanismos coordinados:
1. **Drenaje linfático diafragmático:** los **estomas linfáticos subdiafragmáticos** (predominantemente en el hemidiafragma derecho) absorben partículas y bacterias de forma unidireccional hacia el conducto torácico impulsados por la presión negativa inspiratoria; esto explica por qué la contaminación peritoneal produce bacteriemia en minutos y por qué los abscesos se localizan con frecuencia en los espacios subfrénicos y la pelvis (fondo de saco de Douglas).
2. **Respuesta inflamatoria local y fagocitosis:** los macrófagos residentes y las células mesoteliales liberan TNF-alfa, IL-1, IL-6 e IL-8, reclutando neutrófilos y aumentando la permeabilidad capilar con exudación de proteínas y fibrinógeno.
3. **Secuestro fibrinoso y epiplón mayor:** el depósito de fibrina —junto con la migración del epiplón mayor («el policía del abdomen»)— localiza la infección en forma de plastrón o absceso; si bien limita la diseminación temprana, la fibrina excesiva atrapa bacterias protegidas de antibióticos y fagocitos, favoreciendo abscesos residuales y adherencias.

### Definición y epidemiología
- **Peritonitis:** inflamación localizada o difusa del peritoneo, generalmente de origen infeccioso (también química por bilis, jugo gástrico, orina o sangre).
- **Sepsis abdominal:** disfunción orgánica potencialmente mortal provocada por una respuesta desregulada del huésped a una infección intraabdominal complicada (perforación de víscera hueca, fuga anastomótica, isquemia intestinal, absceso, colangitis o necrosis pancreática infectada).
- Es la segunda causa más frecuente de sepsis en la unidad de cuidados intensivos (UCI) después de la neumonía. En México, la apendicitis perforada, la enfermedad diverticular complicada, la úlcera péptica perforada y las fugas anastomóticas concentran la mayoría de las urgencias quirúrgicas en hospitales generales del IMSS. La mortalidad global de la peritonitis secundaria ronda 10–15%, pero asciende a **30–50%** cuando cursa con choque séptico o peritonitis nosocomial posoperatoria.

### Clasificación y microbiología
| Tipo de peritonitis | Mecanismo y escenario típico | Flora habitual | Conducta principal |
|---|---|---|---|
| **Primaria (espontánea)** | Translocación bacteriana o diseminación hematógena sin perforación visceral. Clásica en **cirrosis con ascitis** (PBE), síndrome nefrótico o diálisis peritoneal | **Monomicrobiana:** *E. coli*, *Klebsiella*, *S. pneumoniae* (cirrosis); *Staphylococcus* en catéter de diálisis | **Médica** (cefotaxima/ceftriaxona + albúmina en cirrótico). **No requiere cirugía** |
| **Secundaria** | Pérdida de continuidad del tubo digestivo, vía biliar o aparato genitourinario (perforación, isquemia, trauma, fuga anastomótica). Es la más frecuente en cirugía | **Polimicrobiana sinérgica:** bacilos gramnegativos (*E. coli*, *Klebsiella*, *Enterobacter*), anaerobios (*Bacteroides fragilis*) y cocos grampositivos (*Enterococcus*, *Streptococcus*) | **Control urgente de la fuente** (cirugía o drenaje percutáneo) + antibiótico + reanimación |
| **Terciaria** | Infección peritoneal persistente o recurrente (>48 h) tras control aparentemente adecuado de la fuente, en pacientes críticos o inmunocomprometidos | Patógenos oportunistas y multidrogorresistentes: *Enterococcus faecium*, *Pseudomonas*, *Acinetobacter*, *Enterobacter* BLEE, *Candida* spp. | Cobertura dirigida (incluyendo antifúngicos según riesgo), reevaluación de foco oculto y soporte en UCI |

La carga bacteriana y la flora varían con el nivel anatómico: estómago y duodeno proximal (<10³ UFC/mL, estreptococos, lactobacilos y *Candida*); íleon distal (10⁶–10⁸ UFC/mL, gramnegativos y anaerobios); colon (10¹¹–10¹² UFC/mL con relación anaerobios/aerobios de 1,000:1, predominio de *B. fragilis* y *E. coli*). En la peritonitis secundaria existe **sinergismo bacteriano**: los aerobios consumen oxígeno creando un entorno anaerobio que facilita la proliferación de *B. fragilis*, responsable de la formación de abscesos tardíos.

**Clasificación Sepsis-3 (JAMA 2016):**
- **Sepsis:** infección sospechada o documentada con aumento agudo de **≥2 puntos en la escala SOFA** (PaO2/FiO2, plaquetas, bilirrubina, presión arterial media/vasopresores, Glasgow y creatinina/diuresis).
- **Choque séptico:** subgrupo de sepsis con anomalías circulatorias y metabólicas profundas: requerimiento de **vasopresor para mantener PAM ≥65 mmHg** más **lactato sérico >2 mmol/L** pese a reanimación hídrica adecuada (mortalidad >40%).

### Cuadro clínico y diagnóstico
El cuadro clásico combina dolor abdominal agudo progresivo que empeora con el movimiento o la tos, fiebre o hipotermia, taquicardia, taquipnea, distensión, íleo y signos de irritación peritoneal (defensa involuntaria, rigidez «en madera» y rebote). En **ancianos, pacientes con esteroides, inmunosuprimidos, obesos mórbidos o en posoperatorio inmediato**, los signos abdominales pueden ser mínimos; la taquicardia persistente, la taquipnea, la oliguria o el delirio súbito deben encender la alarma de fuga o peritonitis oculta.

- **Laboratorios:** biometría hemática, química sanguínea con creatinina y electrolitos, pruebas hepáticas, tiempos de coagulación, **lactato arterial** (marcador de hipoperfusión tisular y respuesta a reanimación), gasometría, **hemocultivos (dos juegos)** antes del antibiótico (sin demorarlo) y procalcitonina (útil para desescalar y suspender antibióticos).
- **Paracentesis diagnóstica** en todo paciente cirrótico con ascitis y deterioro clínico: **≥250 neutrófilos (PMN)/mm³** confirma PBE; si los criterios de Runyon sugieren perforación (proteínas >1 g/dL, glucosa <50 mg/dL, LDH mayor al límite sérico o tinción polimicrobiana), descartar peritonitis secundaria con TC.
- **Imagen:** la **tomografía computarizada (TC) de abdomen y pelvis con contraste intravenoso** (y oral/rectal selectivo ante sospecha de fuga) es el estándar de oro en el paciente hemodinámicamente estable: identifica neumoperitoneo, líquido libre, colecciones, isquemia mesentérica y el sitio exacto de perforación. En el paciente inestable, el ultrasonido a pie de cama o la radiografía pueden apoyar, pero **nunca deben retrasar la laparotomía** cuando existe peritonitis difusa y choque.
- **Escalas pronósticas:** el **Índice de Peritonitis de Mannheim (MPI)** asigna puntaje a edad >50, sexo femenino, falla orgánica, malignidad, evolución >24 h, origen no colónico, peritonitis difusa y tipo de exudado (claro, purulento o fecal); un **MPI >26 puntos** predice alta mortalidad. El **WSES Sepsis Severity Score** también estratifica riesgo quirúrgico.

### Tratamiento integral
El manejo se sustenta en tres pilares simultáneos: **reanimación fisiológica**, **antimicrobianos tempranos** y **control definitivo de la fuente**.

1. **Paquete de la primera hora (Surviving Sepsis Campaign 2021):**
   - Medir lactato sérico y repetirlo si está >2 mmol/L.
   - Obtener hemocultivos antes de administrar antimicrobianos.
   - Administrar **antibióticos intravenosos de amplio espectro dentro de la primera hora** en choque séptico (y en las primeras 3 horas en sepsis sin choque).
   - Iniciar reanimación con **cristaloides balanceados** (Ringer lactato o Hartmann, prefiriéndolos sobre solución salina al 0.9% para reducir acidosis hiperclorémica y lesión renal) a dosis guía de ~30 mL/kg en las primeras 3 horas si hay hipoperfusión, reevaluando la respuesta con variables dinámicas para evitar sobrecarga de volumen.
   - Iniciar **noradrenalina** (vasopresor de primera línea) para mantener **PAM ≥65 mmHg**; añadir vasopresina (hasta 0.03 U/min) si persiste requerimiento elevado de noradrenalina, e hidrocortisona IV (200 mg/día) en choque séptico refractario.

2. **Terapia antimicrobiana empírica (WSES 2020 / SIS):**
| Escenario clínico | Esquema empírico habitual | Cobertura adicional y notas |
|---|---|---|
| **Comunitaria leve a moderada** (sin choque, sin factores de resistencia) | Ceftriaxona + metronidazol, o ertapenem, o piperacilina-tazobactam | No se requiere cobertura rutinaria contra *Enterococcus*, *Pseudomonas* ni *Candida* |
| **Comunitaria grave / choque séptico** | Piperacilina-tazobactam, o cefepime + metronidazol, o meropenem | Infusión extendida de betalactámicos mejora el objetivo farmacocinético en pacientes críticos |
| **Nosocomial / posoperatoria / antibióticos previos** | Meropenem o imipenem (o cefepime + metronidazol) + **vancomicina o linezolid** (SARM / *Enterococcus*) | Añadir **equinocandina** (caspofungina/anidulafungina) si hay perforación digestiva alta recurrente, fuga grave en UCI o choque séptico con colonización fúngica |

3. **Control de la fuente (*source control*):**
   - Sin control de la fuente, los antibióticos por sí solos fracasan. Debe lograrse idealmente en las primeras **6 a 12 horas** (de inmediato en choque séptico o isquemia).
   - **Abscesos localizados bien delimitados:** drenaje percutáneo guiado por TC o ultrasonido.
   - **Peritonitis difusa, perforación libre, necrosis o fuga mayor:** abordaje quirúrgico (laparoscópico en perforaciones tempranas seleccionadas o laparotomía media en inestabilidad/contaminación masiva) para reparar o resecar el foco, derivar (estoma en colon perforado con inestabilidad o anastomosis de alto riesgo), desbridar tejido necrótico y aspirar/lavar la cavidad con solución salina tibia sin dañar el mesotelio ni diseminar material purulento a compartimentos limpios.
   - **Duración de antibióticos:** tras un control adecuado de la fuente, el ensayo aleatorizado **STOP-IT (Sawyer et al., NEJM 2015)** demostró que un **curso fijo de 4 días** es tan eficaz como prolongarlos hasta la resolución de la fiebre o la leucocitosis, con menor riesgo de resistencia y colitis por *C. difficile*. Si el paciente no mejora al día 4–5, no se prolonga empíricamente el antibiótico: se busca un **foco residual o fuga con TC**.

4. **Soporte en UCI:** ventilación mecánica protectora (6 mL/kg de peso predicho), control glucémico (<180 mg/dL), tromboprofilaxis mecánica y farmacológica, profilaxis de úlcera de estrés solo con factores de riesgo, nutrición enteral temprana tras estabilidad hemodinámica y vigilancia de la presión intraabdominal.

### Complicaciones y seguimiento
Incluyen disfunción orgánica múltiple, síndrome compartimental abdominal, absceso intraabdominal residual, dehiscencia de herida o anastomosis, fístula enterocutánea, peritonitis terciaria, lesión renal aguda, delirio y debilidad adquirida en UCI. Tras el control infeccioso, desescalar antibióticos según cultivos peritoneales (obligatorios en infección nosocomial o grave) y rehabilitar de forma temprana.

### Referencias
- Evans L, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med 2021.
- Sartelli M, et al. WSES/GAIS/SIS-E/WSIS/AAST global clinical pathways for patients with intra-abdominal infections. World J Emerg Surg 2021.
- Sawyer RG, et al. Trial of Short-Course Antimicrobial Therapy for Intraabdominal Infection (STOP-IT). NEJM 2015.
- Singer M, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA 2016.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.

### Perlas de examen
- La irrigación y la **inervación somática del peritoneo parietal** explican el dolor localizado, la defensa y el rebote; el peritoneo visceral da dolor difuso en la línea media.
- Los **estomas linfáticos subdiafragmáticos** depuran bacterias rápidamente hacia el conducto torácico y explican la bacteriemia precoz y la predilección por abscesos subfrénicos derechos.
- En el cirrótico con ascitis, **≥250 PMN/mm³** y flora monomicrobiana confirman PBE (manejo médico); si hay múltiples gérmenes, glucosa <50 mg/dL o proteínas >1 g/dL, buscar **peritonitis secundaria**.
- **Choque séptico (Sepsis-3)** = vasopresor para PAM ≥65 mmHg + lactato >2 mmol/L pese a volumen. Primera línea vasopresora: **noradrenalina**; cristaloides balanceados de elección.
- **Ensayo STOP-IT:** tras un control adecuado de la fuente en infección intraabdominal complicada, **4 días de antibióticos** bastan; si persiste fiebre o leucocitosis al 5.º día, realizar TC buscando absceso o fuga.
- Ningún esquema antibiótico sustituye al **control de la fuente** oportuno.
`),
    sheet('per-hostil', '02', 'Abdomen hostil y abdomen abierto', `
## Abdomen hostil y abdomen abierto

### Definiciones e interrelación clínica
- **Abdomen hostil (o abdomen congelado):** cavidad abdominal en la que adherencias densas, vasculares y fibrosas obliteran los planos anatómicos normales e impiden el acceso seguro a las vísceras. Suele originarse tras múltiples laparotomías previas, peritonitis grave, fugas anastomóticas, enfermedad inflamatoria intestinal, radioterapia abdominopélvica, mallas intraperitoneales previas o un abdomen abierto que progresó a granulación visceral. Conlleva un riesgo elevado de enterotomías inadvertidas (hasta 20–30%), sangrado difuso, tiempo quirúrgico prolongado y fístulas enterocutáneas o enteroatmosféricas.
- **Abdomen abierto (laparostomía):** estrategia quirúrgica deliberada en la cual se deja sin cerrar la aponeurosis tras una laparotomía, protegiendo las vísceras mediante un sistema de **cierre abdominal temporal (CAT)** con la meta de realizar reexploraciones planeadas y lograr un **cierre fascial primario diferido** tan pronto se corrija la fisiología del paciente.

### Hipertensión intraabdominal (HIA) y síndrome compartimental abdominal (SCA)
Según el consenso de la **World Society of the Abdominal Compartment Syndrome (WSACS)**, la presión intraabdominal (PIA) normal en el adulto crítico es de **5 a 7 mmHg**. Se mide de manera estandarizada por **vía intravesical** (sonda de Foley) en decúbito supino estricto, al final de la espiración, instilando **25 mL de solución salina estéril** (nunca volúmenes mayores que falsifican la lectura) con el transductor calibrado en la línea axilar media a nivel de la cresta ilíaca.

| Grado de HIA (WSACS) | PIA sostenida (mmHg) | Repercusión fisiopatológica y conducta |
|---|---|---|
| **Grado I** | 12–15 | Reducción inicial del retorno venoso; optimizar sedación, analgesia, balance hídrico neutro y descompresión gastrointestinal |
| **Grado II** | 16–20 | Compresión renal y esplácnica; medidas médicas activas (descompresión con SNG/sonda rectal, drenaje percutáneo de ascitis o colecciones, relajación neuromuscular breve) |
| **Grado III** | 21–25 | Alto riesgo de falla orgánica; valorar laparotomía descompresiva si hay disfunción orgánica nueva |
| **Grado IV** | >25 | Compromiso crítico multiorgánico; descompresión quirúrgica urgente si no responde de inmediato a medidas conservadoras |

- **Síndrome compartimental abdominal (SCA):** **PIA sostenida >20 mmHg** (con o sin presión de perfusión abdominal [PPA = PAM − PIA] <60 mmHg) asociada a **nueva disfunción orgánica**: oliguria/anuria (compresión de venas renales y parénquima), hipoxemia con presiones pico ventilatorias elevadas (elevación diafragmática y disminución de la distensibilidad torácica), gasto cardíaco bajo con presiones venosas centrales falsamente elevadas (compresión de la vena cava inferior), isquemia mesentérica (lactato en ascenso) y aumento de la presión intracraneal.
- El **SCA refractario** a manejo médico es una indicación absoluta de **laparotomía descompresiva** y manejo con abdomen abierto.

### Indicaciones del abdomen abierto
El abdomen abierto es una herramienta que salva vidas, pero debe utilizarse con criterio estricto y nunca por comodidad; las guías **WSES (2018)** reconocen cuatro indicaciones principales:
1. **Cirugía de control de daños en trauma grave:** presencia del diamante letal (hipotermia <35 °C, acidosis pH <7.2 o déficit de base >8, coagulopatía e hipocalcemia) o necesidad de empaquetamiento hepático/retroperitoneal.
2. **Sepsis abdominal grave con inestabilidad fisiológica:** choque séptico que impide una reconstrucción prolongada, fuente infecciosa incompletamente controlada o necesidad de reexploración programada (*second-look*).
3. **Isquemia mesentérica aguda:** para reevaluar la viabilidad de segmentos intestinales limítrofes a las 24–48 horas antes de realizar anastomosis definitivas.
4. **Síndrome compartimental abdominal o cierre a tensión extrema:** edema visceral masivo tras reanimación agresiva en el que forzar la fascia desencadenaría necrosis aponeurótica o SCA.

### Clasificación de Björck enmendada (2016)
Define el estado del abdomen abierto en cada reintervención, predice la probabilidad de cierre fascial y orienta la estrategia técnica:

| Grado Björck | Descripción clínica | Implicación terapéutica y pronóstico |
|---|---|---|
| **1A** | Limpio, **sin adherencias** entre intestino y pared abdominal | Escenario ideal; altísima tasa de cierre fascial primario diferido (<7 días) |
| **1B** | Contaminado, **sin adherencias** | Lavados seriados, terapia de presión negativa (TPN) y cierre temprano al controlar la sepsis |
| **1C** | Fuga entérica **sin adherencias** (fístula no fijada) | Control inmediato de la fuga (reparación, resección o exteriorización) antes de que se fije el abdomen |
| **2A** | Limpio, **con adherencias en desarrollo** (fijación progresiva) | Prioridad absoluta de **tracción fascial dinámica** y cierre antes de que las asas se fijen a la pared lateral |
| **2B** | Contaminado, **con adherencias en desarrollo** | Control de sepsis + tracción fascial + TPN con lámina visceral protectora |
| **2C** | Fuga entérica **con adherencias en desarrollo** | Alto riesgo de progresión a abdomen congelado con fístula enteroatmosférica; aislar y derivar cuanto antes |
| **3A** | **Abdomen congelado** limpio (asas adheridas formando un bloque inseparable) | Ya no es posible el cierre fascial inmediato; proteger asas, permitir granulación y **hernia ventral planeada** |
| **3B** | **Abdomen congelado** contaminado | Control local de infección, curación húmeda o TPN de baja presión, nutrición y cierre cutáneo/injerto diferido |
| **4** | **Abdomen congelado con fístula enteroatmosférica (FEA)** establecida | El escenario más complejo y mórbido; aislamiento del efluente, rehabilitación nutricional y reconstrucción diferida ≥6–12 meses |

### Técnicas de cierre abdominal temporal (CAT) y cierre fascial diferido
Un CAT ideal protege las vísceras de la desecación y el trauma mecánico, evacua el exudado rico en citocinas, previene la retracción lateral de los músculos rectos y permite cuantificar las pérdidas hídricas.

| Técnica de CAT | Características y uso recomendado | Limitaciones |
|---|---|---|
| **Terapia de presión negativa comercial (p. ej., ABThera)** | Lámina visceral protectora fenestrada no adherente que llega hasta las gotieras paracólicas + espuma + succión continua (−75 a −125 mmHg). Estándar de elección según WSES | Costo mayor; requiere evitar contacto directo de la espuma con serosa intestinal o líneas de sutura |
| **Técnica de Barker (vacuum pack casero)** | Bolsa plástica estéril perforada sobre las asas + compresas húmedas + dos sondas de succión + campo plástico adhesivo. Útil cuando no hay sistema comercial en el IMSS | Menor tracción fascial y distribución menos homogénea de la presión negativa |
| **TPN + tracción fascial mediada por malla (VAWCM)** | Combina TPN con una malla temporal (polipropileno o PTFE) suturada a los bordes aponeuróticos que se plica progresivamente cada 48–72 h. Alcanza tasas de cierre fascial >80–90% | Requiere experiencia para no generar necrosis de bordes fasciales ni hiperpresión |
| **Parche de Wittmann** | Dos láminas con velcro cosidas a la fascia que se aproximan en cada revisión | No evacua líquido por sí solo (suele combinarse con drenajes) |
| **Bolsa de Bogotá** | Lámina de polivinilo suturada a la piel o fascia | No controla el edema ni evita la retracción fascial; reservar solo como medida de rescate ultratransitoria (<48 h) |

**Regla de oro del abdomen abierto:** reexplorar cada **24–48 horas**, revertir el balance hídrico positivo (diuresis controlada/ultrafiltración una vez superado el choque) y cerrar la fascia **antes del día 7 a 10**, momento en que la retracción lateral y las adherencias hacen caer drásticamente la tasa de cierre primario y disparan el riesgo de FEA. Si es imposible cerrar la fascia sin tensión, se opta por una **hernia ventral planeada** (cubrir con piel si alcanza, o dejar granular el bloque visceral y colocar un injerto cutáneo de espesor parcial), difiriendo la reconstrucción compleja de pared abdominal con separación de componentes (p. ej., TAR) al menos **6 a 12 meses** hasta que las adherencias maduren y el paciente esté nutrido.

### Abordaje quirúrgico del abdomen hostil
Operar un abdomen hostil electivo o semielectivo exige disciplina táctica:
1. **Respetar la ventana biológica de las adherencias:** entre las **2 semanas y los 3–6 meses** posteriores a una laparotomía reciente (y especialmente tras peritonitis o radiación), las adherencias son máximamente vasculares, densas e indistinguibles de la pared intestinal («ventana hostil»). Salvo una emergencia vital (isquemia, perforación libre, choque), se debe **diferir la cirugía definitiva al menos 6 meses** (y 9–12 meses tras abdomen abierto o FEA), verificando el signo del «pellizco» (piel o injerto móvil y despegable del bloque visceral).
2. **Planeación y acceso seguro:** revisar notas quirúrgicas previas y TC reciente. Ingresar siempre en una **zona virgen de cicatriz** (prolongando la incisión por arriba o por debajo de la cicatriz previa, o mediante incisión transversa/subcostal alejada) y entrar a la cavidad bajo visión directa.
3. **Adhesiolisis meticulosa:** tracción y contratracción suaves con compresas húmedas, **disección cortante con tijera de Metzenbaum o bisturí frío** en el plano avascular de la adherencia, evitando el electrocauterio o energía ultrasónica cerca de la serosa (causa necrosis térmica tardía y fuga a los 4–7 días). En la duda entre sacrificar fascia o lesionar intestino, dejar una delgada lámina de fascia o peritoneo pegada a la serosa.
4. **Manejo de lesiones seromusculares y enterotomías:** revisar sistemáticamente todo el intestino liberado antes de cerrar; reparar desgarros serosos con sutura fina seromuscular y resecar segmentos múltiples con lesiones contiguas o desvascularizados. En el paciente séptico o desnutrido, priorizar una derivación segura antes que una anastomosis de alto riesgo.

### Fístula enteroatmosférica (FEA)
Es la complicación más temida del abdomen abierto (incidencia 5–20%, mortalidad 20–40%): una abertura intestinal expuesta directamente al ambiente sobre tejido de granulación, sin piel ni trayecto fistuloso, por lo que **nunca cierra espontáneamente**.
- **Prevención:** evitar el abdomen abierto innecesario, nunca colocar gasas secas o espuma de presión negativa directamente sobre el intestino, cubrir líneas de sutura o anastomosis profundamente bajo epiplón o asas sanas, cerrar la fascia en <7 días y aportar nutrición temprana.
- **Manejo (principio SNAP: Sepsis, Nutrición, Anatomía, Plan):** estabilizar sepsis y electrolitos, proteger la granulación circundante convirtiendo la FEA en un **estoma flotante** (aislamiento del orificio con anillos de silicona/«chupón» o puentes de espuma y bolsa colectora separada de la TPN), disminuir el gasto con loperamida, inhibidores de bomba de protones y análogos de somatostatina si es alto gasto (>500 mL/día), **nutrición enteral o parenteral** (fistuloclisis cuando existe intestino distal funcional), y reconstrucción quirúrgica definitiva en bloque con reconstrucción de pared únicamente tras **6–12 meses** cuando la albúmina y el estado inflamatorio se hayan normalizado.

### Referencias
- Coccolini F, et al. The open abdomen in trauma and non-trauma patients: WSES guidelines. World J Emerg Surg 2018.
- Björck M, et al. Amended classification of the open abdomen. Scand J Surg 2016.
- Kirkpatrick AW, et al. Intra-abdominal hypertension and the abdominal compartment syndrome: updated consensus definitions and clinical practice guidelines from the WSACS. Intensive Care Med 2013.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.

### Perlas de examen
- **HIA** = PIA sostenida ≥12 mmHg; **SCA** = PIA sostenida **>20 mmHg + nueva disfunción orgánica**. Se mide por sonda vesical con **25 mL** de solución salina al final de la espiración.
- En la **clasificación de Björck 2016**, el paso de grado 1–2 a grado 3 (**abdomen congelado**) marca el fin de la ventana para cierre fascial inmediato; el **grado 4** corresponde a abdomen congelado con **fístula enteroatmosférica**.
- La combinación de **TPN con lámina visceral protectora + tracción fascial mediada por malla (VAWCM)** ofrece las mayores tasas de cierre fascial primario diferido; el objetivo es cerrar antes de los **7–10 días**.
- La **fístula enteroatmosférica** carece de trayecto cubierto de tejido y **no cierra espontáneamente**: se aísla el efluente, se nutre al paciente y se reconstruye de manera diferida a los **6–12 meses**.
- En un **abdomen hostil**, entrar por zona virgen, evitar la «ventana hostil» (2 semanas a 3–6 meses) y disecar adherencias con **tijera fría** en lugar de electrocauterio para evitar perforaciones térmicas diferidas.
`),
    sheet('per-maligna', '03', 'Patología maligna de peritoneo y retroperitoneo', `
## Patología maligna de peritoneo y retroperitoneo

### Definición y espectro nosológico
Este grupo reúne neoplasias de alta complejidad quirúrgica que requieren manejo en centros de referencia con comité multidisciplinario:
- **Tumores peritoneales primarios:** mesotelioma peritoneal maligno (asociado en parte a exposición a asbesto, variantes epitelioide, bifásica y sarcomatoide) y carcinoma seroso peritoneal primario (histológica y terapéuticamente análogo al cáncer epitelial de ovario de alto grado).
- **Carcinomatosis peritoneal (neoplasias secundarias):** diseminación superficial por siembra transcelómica procedente con mayor frecuencia de **apéndice (pseudomixoma peritoneal)**, **colon y recto**, **ovario** y **estómago**. Antes considerada uniformemente terminal, hoy un subgrupo estrictamente seleccionado alcanza largas supervivencias o curación mediante **cirugía citorreductora completa (CRS)** con o sin **quimioterapia intraperitoneal hipertérmica (HIPEC)**.
- **Tumores retroperitoneales primarios y GIST:** los **sarcomas retroperitoneales** representan ~10–15% de los sarcomas de tejidos blandos (predominan **liposarcoma** bien diferenciado/desdiferenciado y **leiomiosarcoma**); los **tumores del estroma gastrointestinal (GIST)** son las neoplasias mesenquimatosas más frecuentes del tubo digestivo.

### Fisiopatología y cuantificación de la carga peritoneal
En la carcinomatosis, las células neoplásicas exfoliadas siguen el **fenómeno de redistribución de Sugarbaker**: se concentran en sitios de absorción linfática y declive gravitacional (hemidiafragma derecho, epiplón mayor, espacio hepatorenal, gotieras paracólicas y fondo de saco de Douglas), respetando relativamente el intestino delgado móvil hasta etapas avanzadas (excepto en tumores muy invasores como el gástrico difuso).

**Índice de Carcinomatosis Peritoneal (PCI de Sugarbaker):** divide el abdomen en **13 regiones** (0 a 8 en cuadrícula abdominopélvica y 9 a 12 correspondientes a yeyuno proximal, yeyuno distal, íleon proximal e íleon distal). En cada región se califica el tamaño del implante mayor:
- **LS-0:** sin tumor visible.
- **LS-1:** nódulos ≤0.5 cm.
- **LS-2:** nódulos >0.5 cm hasta 5.0 cm.
- **LS-3:** nódulos >5.0 cm o confluencia/capas tumorales.

El **PCI oscila entre 0 y 39 puntos** y es el principal predictor cuantitativo de resecabilidad y supervivencia.

**Puntuación de Completitud de la Citorreducción (CC):** se determina al concluir la resección quirúrgica y es el factor pronóstico más poderoso:
| Puntuación CC | Enfermedad residual tras cirugía | Significado oncológico |
|---|---|---|
| **CC-0** | Sin enfermedad macroscópica residual | Meta obligatoria en carcinomatosis colorrectal, gástrica y mesotelioma |
| **CC-1** | Nódulos residuales **<2.5 mm** | Aceptable en pseudomixoma peritoneal (la quimioterapia intraperitoneal penetra ~2–3 mm) |
| **CC-2** | Nódulos residuales de **2.5 mm a 2.5 cm** | Citorreducción incompleta; pronóstico desfavorable |
| **CC-3** | Nódulos residuales **>2.5 cm** o enfermedad confluente | Sin beneficio de HIPEC; evitar morbilidad fútil |

### Cuadro clínico y diagnóstico
Las neoplasias peritoneales suelen manifestarse tardíamente con distensión abdominal progresiva, ascitis (en el pseudomixoma, el «abdomen gelatinoso» o *jelly belly*), dolor difuso, pérdida de peso, saciedad precoz u obstrucción intestinal subaguda. Los sarcomas retroperitoneales crecen de forma silente hasta alcanzar **>10–15 cm** y producir masa abdominal indolora, desplazamiento visceral, hidronefrosis o compresión venosa.

- **Imagen:** **TC de tórax, abdomen y pelvis con contraste** es la base de estadificación; sin embargo, la TC subestima hasta en 30–40% los implantes milimétricos en mesenterio e intestino delgado. La **RM abdominopélvica con difusión (DWI)** tiene mayor sensibilidad para enfermedad peritoneal pequeña. En sarcomas retroperitoneales, la TC/RM define invasión de órganos vecinos, aorta, cava y uréteres.
- **Laparoscopia estadificadora:** herramienta fundamental antes de indicar CRS+HIPEC en carcinomatosis colorrectal, gástrica u ovárica; permite calcular el **PCI real**, evaluar compromiso extenso de la raíz del mesenterio o del intestino delgado y **evitar laparotomías fútiles**.
- **Biopsia e inmunohistoquímica:**
  - En **carcinomatosis de origen desconocido:** biopsia peritoneal laparoscópica o guiada por imagen más marcadores (CEA, CA 19-9, CA 125) y perfil molecular (*KRAS/NRAS/BRAF*, MSI, *HER2*, *BRCA*).
  - En **sarcoma retroperitoneal:** está indicada la **biopsia percutánea guiada por imagen con aguja gruesa (tru-cut) por vía retroperitoneal coaxial** (riesgo de siembra mínimo), para definir subtipo histológico y grado antes de planear cirugía o neoadyuvancia; **nunca realizar biopsia excisional ni enucleación** de una masa retroperitoneal sospechosa.

### Cirugía citorreductora (CRS) e HIPEC según el tumor primario
La CRS consiste en resecar toda enfermedad macroscópica mediante **peritonectomías de Sugarbaker** (diafragmáticas, pélvica, parietales, omentectomía mayor y menor) y resecciones viscerales selectivas. La **HIPEC** perfunde quimioterapia calentada a **41–43 °C** durante 30–90 minutos (técnica abierta de coliseo o cerrada), aprovechando la barrera peritoneo-plasmática (alta concentración local con menor toxicidad sistémica) y la sinergia citotóxica del calor sobre células residuales (<2.5 mm).

| Tumor primario | Papel de CRS + HIPEC y evidencia clave | Umbral orientativo y agentes |
|---|---|---|
| **Pseudomixoma peritoneal (origen apendicular: LAMN/HAMN o adenocarcinoma mucinoso)** | **Estándar de oro curativo.** Incluso con PCI elevado, si es factible CC-0/CC-1 se logran supervivencias a 10 años de 60–80% en bajo grado | PCI alto no es contraindicación absoluta si el intestino delgado está respetado. Agente habitual: **mitomicina C** o oxaliplatino |
| **Mesotelioma peritoneal maligno** | **Estándar en enfermedad resecable** (especialmente subtipo epitelioide); mediana de supervivencia >50–60 meses vs ~12 meses con quimioterapia sola | Cisplatino + doxorrubicina (o mitomicina C) |
| **Carcinoma epitelial de ovario (estadio III)** | Ensayo **OVHIPEC (van Driel, NEJM 2018):** añadir HIPEC con cisplatino durante la **cirugía de intervalo** (tras quimioterapia neoadyuvante) mejoró la supervivencia libre de recurrencia y global | Cisplatino 100 mg/m² por 90 min (con tiosulfato de sodio nefroprotector) |
| **Carcinomatosis colorrectal** | El ensayo **PRODIGE 7 (Quénet, Lancet Oncol 2021)** mostró que la **CRS completa (CC-0)** alcanza ~41 meses de supervivencia mediana, pero añadir HIPEC con oxaliplatino a dosis altas por 30 min no mejoró la supervivencia global y elevó la morbilidad a 60 días (aunque sugirió posible beneficio en PCI 11–15). Hoy el pilar es **quimioterapia sistémica + CRS completa** en pacientes con **PCI <15–20** y sin metástasis extraabdominales irresecables; los centros que añaden HIPEC suelen usar **mitomicina C** (90 min) | Contraindicado si PCI >20, afectación masiva del intestino delgado o progresión bajo quimioterapia |
| **Carcinoma gástrico con carcinomatosis** | Pronóstico muy pobre; quimioterapia sistémica ± inmunoterapia como estándar. CRS+HIPEC solo en protocolos de investigación o **PCI muy bajo (<6–7)** con respuesta a neoadyuvancia | PIPAC (quimioterapia intraperitoneal en aerosol presurizado) en estudio para paliación |

### Sarcomas retroperitoneales y GIST
- **Sarcoma retroperitoneal:** el **liposarcoma** (~45–50%) y el **leiomiosarcoma** (~25–30%) son los más frecuentes. El pilar curativo es la **resección quirúrgica en bloque con márgenes microscópicamente negativos (R0)**, sin violar la pseudocápsula tumoral (la enucleación conduce a recurrencia local casi universal). A menudo requiere **resección multivisceral compartimental** (riñón ipsilateral, colon derecho o izquierdo, músculo psoas o bazo/cola pancreática) en el liposarcoma cuando el órgano está envuelto o sirve de margen, preservando órganos solo cuando hay plano seguro (en leiomiosarcoma el margen vascular es el crítico). La **radioterapia preoperatoria** (ensayo **EORTC STRASS, Lancet Oncol 2020**) no mejoró la supervivencia libre de recurrencia global, pero mostró señal de beneficio en **liposarcomas** bien diferenciados/desdiferenciados de bajo grado. La quimioterapia sistémica neoadyuvante se valora en subtipos quimiosensibles de alto grado (leiomiosarcoma, sarcoma sinovial).
- **Tumores del estroma gastrointestinal (GIST):** se originan de las **células intersticiales de Cajal** (estómago 60%, intestino delgado 30%, recto/esófago <10%); expresan **CD117 (KIT)** en ~95% y **DOG1**. Cerca de 80% presenta mutaciones activadoras en ***KIT*** (exón 11 el más común y sensible a imatinib; exón 9 requiere dosis doble de imatinib 800 mg/día) y 5–10% en ***PDGFRA*** (la mutación **D842V es resistente a imatinib** y se trata con avapritinib). El riesgo de recurrencia se estratifica por **tamaño, índice mitótico (por 5 mm²), localización (gástrico mejor pronóstico que intestino delgado) y ruptura tumoral** (criterios de Joensuu/Miettinen). **Principios quirúrgicos:** resección en cuña o segmentaria R0 evitando estrictamente la **ruptura de la pseudocápsula** (que equivale a enfermedad de muy alto riesgo/peritoneal); **no se requiere linfadenectomía rutinaria** (metástasis ganglionares <5%, salvo en GIST deficiente en SDH en jóvenes). **Imatinib neoadyuvante** (6–12 meses) en tumores localmente avanzados para evitar resecciones mutilantes (p. ej., preservación de esfínter en recto o evitar gastrectomía total/Whipple); **imatinib adyuvante por 3 años** en pacientes de alto riesgo con mutación sensible (ensayo SSGXVIII/AIO).

### Cirugía paliativa, complicaciones y seguimiento
En enfermedad peritoneal irresecable con obstrucción intestinal maligna, las opciones incluyen manejo médico antisecretor (octreótido, dexametasona, antieméticos), **gastrostomía endoscópica o percutánea de descompresión**, *stents* endoscópicos en obstrucción única o derivación paliativa solo si existe un único nivel obstructivo y esperanza de vida razonable (evitar cirugías que solo añadan morbilidad). Las complicaciones mayores de CRS+HIPEC (20–40%) comprenden fuga anastomótica, fístula digestiva, sepsis, íleo prolongado, neutropenia, nefrotoxicidad por cisplatino y tromboembolia venosa. El seguimiento oncológico combina exploración, marcadores tumorales y TC seriada cada 3–6 meses durante los primeros 3–5 años.

### Referencias
- Quénet F, et al. Cytoreductive surgery plus hyperthermic intraperitoneal chemotherapy versus cytoreductive surgery alone for colorectal peritoneal metastases (PRODIGE 7). Lancet Oncol 2021.
- van Driel WJ, et al. Hyperthermic Intraperitoneal Chemotherapy in Ovarian Cancer (OVHIPEC). NEJM 2018.
- Bonvalot S, et al. Preoperative radiotherapy plus surgery versus surgery alone for patients with primary retroperitoneal sarcoma (EORTC-62092 STRASS). Lancet Oncol 2020.
- NCCN Guidelines: Soft Tissue Sarcoma, Gastrointestinal Stromal Tumors (GIST) y Colon Cancer 2024–2025; Transatlantic Australasian Retroperitoneal Sarcoma Working Group (TARPSWG) 2021.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.

### Perlas de examen
- El **PCI de Sugarbaker** va de **0 a 39 puntos** (13 regiones × 0–3); la **laparoscopia estadificadora** es indispensable porque la TC subestima la carga peritoneal real.
- La completitud **CC-0** (sin tumor macroscópico residual) es el predictor más importante de supervivencia; **CC-1 (<2.5 mm)** solo se acepta en pseudomixoma peritoneal.
- En el **pseudomixoma peritoneal** (origen apendicular, LAMN/HAMN), CRS + HIPEC es el estándar curativo; en **carcinomatosis colorrectal**, el ensayo **PRODIGE 7** confirmó el enorme valor de la CRS completa y cuestionó el oxaliplatino 30 min.
- En **sarcoma retroperitoneal** (liposarcoma el más común): biopsia percutánea con **aguja gruesa por vía retroperitoneal** seguida de **resección en bloque R0** sin fragmentar la pseudocápsula; nunca enuclear.
- En **GIST** (células de Cajal, CD117+/DOG1+): resección R0 **sin romper la cápsula** y **sin linfadenectomía rutinaria**; **imatinib 3 años** en alto riesgo, recordando que la mutación ***PDGFRA* D842V es resistente a imatinib**.
`),
  ],

  'ap-r3-tiroides': [
    sheet('tir-funcion', '01', 'Hipertiroidismo, hipotiroidismo y bocio', `
## Hipertiroidismo, hipotiroidismo y bocio

### Anatomía quirúrgica y fisiología del eje tiroideo
La glándula tiroides pesa entre 15 y 25 g, se apoya sobre los anillos traqueales 2.º a 4.º mediante el **ligamento suspensorio posterior de Berry** y está formada por dos lóbulos unidos por el istmo (con un lóbulo piramidal en ~50% de los individuos, remanente del conducto tirogloso). Su **irrigación es extraordinariamente rica**: las **arterias tiroideas superiores** (primera rama de la carótida externa) descienden junto a la rama externa del nervio laríngeo superior, y las **arterias tiroideas inferiores** (del tronco tirocervical, rama de la subclavia) irrigan los polos inferiores y la mayoría de las paratiroides, cruzándose íntimamente con el nervio laríngeo recurrente. El drenaje venoso se realiza por venas tiroideas superiores, medias (directas a la yugular interna, cortas y frágiles) e inferiores (al tronco braquiocefálico).

La síntesis hormonal depende de la captación activa de yoduro (simportador NIS), su oxidación y organificación sobre la tiroglobulina mediante la **peroxidasa tiroidea (TPO)**, y el acoplamiento para formar **T4** (80–90% de la secreción, vida media ~7 días) y **T3** (hormona biológicamente activa, producida mayormente por desyodación periférica de T4). La **TSH hipofisaria** regula todo el proceso por retroalimentación negativa: es la prueba de tamizaje más sensible para evaluar el estado funcional tiroideo.

### Hipertiroidismo y tirotoxicosis
La tirotoxicosis es el exceso de hormonas tiroideas en los tejidos; el hipertiroidismo implica sobreproducción glandular.

| Etiología | Fisiopatología y cuadro típico | Captación de yodo radiactivo (123I / Tc-99m) | Papel de la cirugía |
|---|---|---|---|
| **Enfermedad de Graves** (60–80% de los casos) | Autoinmune: **anticuerpos estimulantes del receptor de TSH (TRAb)**. Mujeres jóvenes; bocio difuso con soplo, **oftalmopatía de Graves**, mixedema pretibial y acropaquia | **Alta y difusa** | **Tiroidectomía total** (o casi total) en indicaciones específicas; controla rápidamente el hipertiroidismo sin empeorar la oftalmopatía |
| **Bocio multinodular tóxico (enfermedad de Plummer)** | Múltiples nódulos con autonomía funcional en bocios de larga evolución (adultos mayores); síntomas cardiovasculares (fibrilación auricular) y compresivos | **Heterogénea** («en parches», zonas calientes y frías) | **Tiroidectomía total** (de elección si hay síntomas compresivos, bocio grande o sospecha maligna) |
| **Adenoma tóxico solitario** | Nódulo único hiperfuncionante (mutación somática del receptor de TSH) que suprime el resto de la glándula | **Focal en el nódulo** con supresión contralateral | **Lobectomía (hemitiroidectomía)** ipsilateral; preserva eutiroidismo en >70–80% |
| **Tiroiditis subaguda (De Quervain), silente o posparto** | Destrucción folicular inflamatoria con liberación transitoria de hormona preformada; dolor cervical y VSG alta en De Quervain | **Baja / ausente** | **No quirúrgica** (betabloqueador y AINE/esteroides) |

### Tratamiento del hipertiroidismo y selección de cirugía
Las tres modalidades definitivas o de control son **antitiroideos (tionamidas)**, **yodo radiactivo (131I)** y **tiroidectomía**:
- **Tionamidas:** inhiben la peroxidasa tiroidea (organificación). El **metimazol** es de primera elección por su eficacia, dosis única diaria y menor hepatotoxicidad. El **propiltiouracilo (PTU)** añade inhibición periférica de la conversión T4→T3, pero se reserva para el **primer trimestre del embarazo** (el metimazol se asocia a aplasia cutis y atresia de coanas/esófago), la **tormenta tiroidea** y la intolerancia menor al metimazol. Efectos adversos graves compartidos: **agranulocitosis** (0.2–0.5%; fiebre u odinofagia obligan a suspender el fármaco y pedir biometría hemática urgente) y hepatotoxicidad grave (sobre todo PTU).
- **Yodo radiactivo (131I):** eficaz, ambulatorio y de bajo costo, pero **contraindicado en embarazo, lactancia y oftalmopatía de Graves moderada-grave activa** (la agrava); suele inducir hipotiroidismo tardío.
- **Indicaciones claras de tiroidectomía en enfermedad de Graves (ATA 2016):**
  1. **Oftalmopatía de Graves moderada a grave activa.**
  2. Bocio voluminoso (>80 g) o síntomas compresivos (disnea, disfagia).
  3. Nódulo sospechoso o cáncer de tiroides coexistente.
  4. Embarazo (2.º trimestre) con intolerancia o falla a antitiroideos, o deseo de embarazo en <6 meses.
  5. Hiperparatiroidismo primario concomitante.
  6. Efectos adversos graves a antitiroideos, necesidad de control bioquímico inmediato o preferencia informada del paciente.
- En enfermedad de Graves la cirugía de elección es la **tiroidectomía total** (la subtotal tiene tasas inaceptables de recurrencia de 10–30%).

### Preparación preoperatoria y tormenta tiroidea
Operar a un paciente hipertiroideo mal controlado puede precipitar una **tormenta tiroidea** intra o posoperatoria (mortalidad 10–30%). La preparación obligatoria incluye:
1. **Lograr eutiroidismo bioquímico** con metimazol durante 4–8 semanas previas (normalizar T4L y T3L; la TSH puede tardar meses en subir y no impide operar).
2. **Bloqueo beta-adrenérgico:** **propranolol** (20–80 mg VO cada 6–8 h, manteniendo FC <80–90 lpm), que controla el tono simpático y bloquea la conversión periférica de T4 a T3.
3. **Yoduro inorgánico preoperatorio en Graves:** **solución de Lugol** (5–7 gotas c/8 h) o yoduro de potasio saturado (**SSKI**, 1–2 gotas c/8 h) durante **7 a 10 días antes de la cirugía**. Mediante el **efecto Wolff-Chaikoff** frena la liberación hormonal y **disminuye marcadamente la vascularidad y friabilidad glandular**, reduciendo el sangrado transoperatorio. No se administra por más de 14 días por riesgo de fenómeno de escape, y **no** suele usarse en bocio multinodular tóxico (riesgo de efecto Jod-Basedow).
4. **Preparación rápida de urgencia (cuando no tolera tionamidas):** betabloqueador + yoduro (Lugol/SSKI) + **glucocorticoide** (hidrocortisona o dexametasona, inhiben conversión T4→T3) ± colestiramina durante 5–7 días.

**Tormenta tiroidea:** diagnóstico clínico apoyado en la **escala de Burch-Wartofsky** (temperatura, sistema nervioso central, taquicardia, fibrilación auricular, falla cardíaca, síntomas gastrointestinales/ictericia y factor precipitante; **≥45 puntos = altamente sugestiva**). Tratamiento inmediato en UCI: **PTU** dosis alta (o metimazol), **yodo (Lugol/SSKI) administrado al menos 1 hora DESPUÉS de la tionamida** (nunca antes, para no aportar sustrato a nueva síntesis), **propranolol** (o esmolol IV), **hidrocortisona** 100 mg IV c/8 h, enfriamiento activo, líquidos y tratamiento del desencadenante (infección, cirugía, suspensión de antitiroideos).

### Hipotiroidismo
En México y países con yodación de sal, la causa más frecuente es la **tiroiditis crónica autoinmune de Hashimoto** (anticuerpos anti-TPO y anti-tiroglobulina positivos, bocio firme indoloro o atrofia; se asocia a mayor riesgo relativo de **linfoma tiroideo primario**), seguida del hipotiroidismo iatrogénico posquirúrgico o posterior a 131I.
- **Diagnóstico:** TSH elevada con T4L baja (hipotiroidismo primario); TSH elevada con T4L normal (hipotiroidismo subclínico).
- **Sustitución con levotiroxina (LT4):** tras tiroidectomía total benigna se inicia a **1.6 µg/kg/día** en ayuno (30–60 min antes del desayuno, lejos de calcio, hierro e inhibidores de bomba de protones). En adultos mayores (>65 años) o con cardiopatía isquémica, iniciar con dosis bajas (**25–50 µg/día**) y titular cada 6–8 semanas según TSH. En el paciente hipotiroideo que requiere cirugía electiva, optimizar primero la TSH; ante cirugía de urgencia en hipotiroidismo grave o **coma mixedematoso** (hipotermia, bradicardia, hipoventilación, hiponatremia, estupor), administrar **levotiroxina IV más hidrocortisona IV** (para cubrir una posible insuficiencia suprarrenal coexistente).

### Bocio multinodular eutiroideo y bocio retroesternal (intratorácico)
El bocio es el aumento de volumen tiroideo (>20–25 g), causado por deficiencia de yodo, bociógenos, predisposición genética o ciclos repetidos de hiperplasia e involución.
- **Cuadro clínico y signo de Pemberton:** masa cervical indolora que asciende al deglutir; cuando crece hacia el opérculo torácico comprime tráquea (disnea en decúbito, estridor), esófago (disfagia) o venas braquiocefálicas. El **signo de Pemberton** (congestión facial, plétora yugular y disnea al elevar ambos brazos sobre la cabeza durante 1 minuto) traduce obstrucción del estrecho torácico superior.
- **Diagnóstico:** TSH, ultrasonido cervical y BAAF de nódulos dominantes o sospechosos; en bocios grandes o que no muestran borde inferior en el cuello, **TC de cuello y tórax** (preferiblemente sin contraste yodado si existe posibilidad de usar 131I en el corto plazo, o contrastada si la anatomía mediastinal es prioritaria) para evaluar desviación/compresión traqueal y extensión intratorácica.
- **Indicaciones quirúrgicas:** síntomas compresivos locales, extensión retroesternal, sospecha o confirmación de malignidad (5–15% de bocios multinodulares albergan carcinoma oculto), hipertiroidismo asociado o deformidad estética marcada. La **tiroidectomía total** (o lobectomía si es estrictamente unilateral) evita recurrencias y reintervenciones de alto riesgo.
- **Bocio retroesternal:** más del **90–95% se extrae por cervicotomía de Kocher** (porque su irrigación proviene de vasos cervicales), liberando primero los vasos del polo superior y traccionando suavemente el componente mediastinal con el dedo. Los predictores de necesidad de **esternotomía parcial o total** (disponible en coordinación con cirugía cardiotorácica) son: extensión **por debajo del borde inferior del cayado aórtico**, localización en **mediastino posterior**, bocio ectópico mediastinal puro con irrigación intratorácica, carcinoma invasor o bocio recurrente con fibrosis intensa.

### Referencias
- Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid 2016.
- Haugen BR, et al. ATA Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid 2016 (y actualizaciones vigentes).
- GPC CENETEC IMSS: Diagnóstico y tratamiento del hipotiroidismo primario / hipertiroidismo.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.

### Perlas de examen
- La **TSH sérica** es siempre el primer estudio en cualquier disfunción o masa tiroidea.
- En enfermedad de **Graves** con **oftalmopatía moderada-grave activa**, bocio grande compresivo o embarazo refractario, el tratamiento de elección es la **tiroidectomía total**, evitando el 131I.
- Preparación preoperatoria del hipertiroidismo: **tionamida** (eutiroidismo) + **propranolol** (FC y conversión T4→T3) + **solución de Lugol 7–10 días** antes (efecto Wolff-Chaikoff, reduce sangrado).
- En la **tormenta tiroidea** (Burch-Wartofsky ≥45): administrar **PTU primero** y el **yodo al menos 1 hora después**, junto con propranolol e hidrocortisona.
- **Propiltiouracilo (PTU)** en el **primer trimestre del embarazo**; **metimazol** en el resto de escenarios. Fiebre u odinofagia bajo tionamidas = sospechar **agranulocitosis** y suspender de inmediato.
- Más del **90% de los bocios retroesternales** se resecan por **vía cervical**; sospechar necesidad de esternotomía si descienden por debajo del cayado aórtico, ocupan el mediastino posterior o son recidivas malignas.
`),
    sheet('tir-nodulo', '02', 'Nódulo tiroideo y técnicas de tiroidectomía', `
## Nódulo tiroideo y técnicas de tiroidectomía

### Epidemiología y evaluación inicial
Los nódulos tiroideos son extremadamente frecuentes: palpables en 4–7% de la población adulta y detectables por ultrasonido de alta resolución hasta en **30–68%**, especialmente en mujeres y adultos mayores. Sin embargo, solo **7 a 15%** resultan malignos; el reto quirúrgico es identificar los cánceres clínicamente relevantes sin sobretratar lesiones benignas.

**Factores clínicos que elevan la sospecha de malignidad:** antecedente de radiación ionizante de cabeza o cuello en la infancia, historia familiar de cáncer medular o papilar de tiroides (MEN 2, síndrome de Cowden, poliposis adenomatosa familiar), edad <20 o >60 años, sexo masculino, crecimiento rápido, consistencia pétrea o fijación a estructuras vecinas, parálisis de cuerda vocal (disfonía) y adenopatías cervicales firmes.

**Algoritmo diagnóstico obligatorio:**
1. **TSH sérica:** si está **suprimida**, solicitar **gammagrafía tiroidea (123I o Tc-99m)**. Un nódulo «caliente» (hiperfuncionante autónomo) tiene riesgo de malignidad <1% y **no requiere BAAF**; se maneja como hipertiroidismo. Si la TSH es normal o alta, no se pide gammagrafía.
2. **Ultrasonido cervical de alta resolución:** obligatorio en todo paciente con nódulo palpable o incidental; debe describir el parénquima, cada nódulo con sistema estandarizado (**ACR TI-RADS**) y **evaluar sistemáticamente los compartimentos ganglionares cervicales** (central VI y laterales II–V).
3. **Calcitonina sérica:** no se solicita de rutina en todos los nódulos en las guías ATA, pero es obligatoria ante antecedente familiar de cáncer medular/MEN 2 o citología sospechosa; una calcitonina basal >100 pg/mL es prácticamente diagnóstica de carcinoma medular.

### Estratificación ultrasonográfica (ACR TI-RADS)
El sistema **ACR TI-RADS** suma puntos en cinco categorías: composición (sólido = 2), ecogenicidad (hipoecoico = 2, muy hipoecoico = 3), forma (**más alto que ancho** = 3), márgenes (lobulado/irregular = 2, extensión extratiroidea = 3) y focos ecogénicos (**microcalcificaciones puntiformes** = 3).

| Categoría ACR TI-RADS | Puntaje | Sospecha ecográfica | Umbral para BAAF | Umbral para seguimiento |
|---|---|---|---|---|
| **TR1** | 0 | Benigno (quiste simple, espongiforme) | No BAAF | No requiere |
| **TR2** | 2 | No sospechoso | No BAAF | No requiere |
| **TR3** | 3 | Levemente sospechoso (iso/hiperecoico sólido, márgenes lisos) | **≥2.5 cm** | ≥1.5 cm |
| **TR4** | 4–6 | Moderadamente sospechoso (sólido hipoecoico sin otros datos mayores) | **≥1.5 cm** | ≥1.0 cm |
| **TR5** | ≥7 | Altamente sospechoso (hipoecoico + microcalcificaciones, más alto que ancho o bordes irregulares) | **≥1.0 cm** | ≥0.5 cm |

### Citología por BAAF: Sistema Bethesda (3.ª edición, 2023)
La **biopsia por aspiración con aguja fina (BAAF) guiada por ultrasonido** es la piedra angular para decidir cirugía.

| Categoría Bethesda | Diagnóstico citológico | Riesgo de malignidad (Bethesda 2023) | Manejo recomendado |
|---|---|---|---|
| **I** | No diagnóstica / insatisfactoria | 5–20% (media ~13%) | Repetir BAAF guiada por USG (en lo posible con evaluación rápida in situ) |
| **II** | Benigna (nódulo folicular benigno, tiroiditis) | 2–7% (media ~4%) | Seguimiento clínico y ultrasonográfico según patrón TI-RADS |
| **III** | Atipia de significado indeterminado (AUS) | 13–30% (media ~22%) | Repetir BAAF, **pruebas moleculares** (Afirma GSC / ThyroSeq v3) o **lobectomía diagnóstica** según riesgo clínico-ecográfico |
| **IV** | Neoplasia folicular (incluye variante oncocítica/Hürthle) | 23–34% (media ~30%) | **Pruebas moleculares** o **lobectomía diagnóstica** (la BAAF no puede ver invasión capsular ni vascular) |
| **V** | Sospechosa de malignidad | 67–83% (media ~74%) | **Cirugía** (lobectomía o tiroidectomía total según tamaño, bilateralidad y ganglios) |
| **VI** | Maligna (papilar, medular, anaplásico, linfoma) | 97–100% | **Tratamiento quirúrgico oncológico** (salvo linfoma o anaplásico irresecable) |

Las **pruebas moleculares** sobre el aspirado (paneles de expresión génica o secuenciación de nueva generación como ThyroSeq v3 y Afirma GSC) poseen un alto valor predictivo negativo (>95%) en categorías Bethesda III y IV, permitiendo evitar hasta 50–60% de las lobectomías diagnósticas por lesiones benignas cuando están disponibles.

### Anatomía quirúrgica y técnica reglada de tiroidectomía
El objetivo de toda cirugía tiroidea es lograr una resección completa y segura preservando las **cuerdas vocales** y las **glándulas paratiroides**.
- **Preparación y posición:** paciente en decúbito supino con ligera hiperextensión cervical (cojín interescapular y cabeza en dona) en posición de semi-Fowler (15–20°) para disminuir la congestión venosa. En pacientes con disfonía, cirugía cervical previa o cáncer avanzado, realizar **laringoscopia preoperatoria** para documentar movilidad de cuerdas vocales.
- **Abordaje y exposición:** incisión transversa simétrica de **Kocher** en un pliegue cutáneo natural (~2 cm por encima de la escotadura esternal), elevación de colgajos subplatismales (hasta el cartílago tiroides arriba y la horquilla esternal abajo), apertura vertical de la línea alba cervical entre los músculos esternohioideos y separación lateral de los esternotiroideos (solo se seccionan en su tercio superior si el bocio es gigante, respetando su inervación por el asa cervical).
- **Control del polo superior y nervio laríngeo superior:** la **rama externa del nervio laríngeo superior (RELS)** inerva el músculo **cricotiroideo** (tensor de las cuerdas vocales). Según la **clasificación de Cernea**, en el tipo 2B (~20%) el nervio cruza por debajo del borde superior del polo tiroideo en máximo riesgo de lesión. Para protegerlo se desarrolla el espacio avascular cricotiroideo (de Joll/Reeve) y se **ligan individualmente las ramas de la arteria tiroidea superior pegadas a la cápsula glandular**, evitando la ligadura en masa alta.
- **Identificación del nervio laríngeo recurrente (NLR):** disecar y ligar la vena tiroidea media, rotar el lóbulo hacia la línea media y buscar sistemáticamente el NLR antes de seccionar cualquier estructura posterior.
  - **Trayecto:** el izquierdo rodea el cayado aórtico y asciende verticalmente en el surco traqueoesofágico; el derecho rodea la arteria subclavia derecha y entra con un trayecto más oblicuo. En 0.5–1% de los casos existe un **nervio laríngeo no recurrente derecho** (emerge directo del vago hacia la laringe, asociado a arteria subclavia derecha aberrante o *arteria lusoria*).
  - **Referencias anatómicas:** triángulo de Beahrs (carótida común, tráquea y arteria tiroidea inferior), **tubérculo de Zuckerkandl** (proyección posterolateral del lóbulo que cubre al NLR como un «sombrero») y el **ligamento de Berry**, sitio donde el nervio está más adherido y donde ocurren más lesiones por tracción o calor; aquí se recomienda disección fría y evitar energía bipolar/ultrasónica a <2–3 mm del nervio.
  - **Neuromonitoreo intraoperatorio (IONM):** identifica funcionalmente el nervio (estímulo vagal V1–V2 y recurrente R1–R2) y detecta **pérdida de señal (LOS)** en el primer lado de una tiroidectomía total; ante LOS confirmada en el primer lóbulo, se recomienda **cirugía en dos tiempos (diferir el segundo lóbulo)** para prevenir la parálisis bilateral catastrófica.
- **Preservación paratiroidea:** emplear **disección capsular meticulosa** ligando las ramas terciarias de la arteria tiroidea inferior sobre la cápsula tiroidea (nunca ligar el tronco principal), «barriendo» gentilmente cada paratiroides con su pedículo vascular. Si una glándula se torna negruzca o es resecada inadvertidamente, confirmar histología por congelación (si hay duda) y realizar **autotrasplante inmediato** picándola en fragmentos de 1 mm dentro de un bolsillo muscular del **esternocleidomastoideo**.
- **Abordajes alternativos:** en centros expertos, la **tiroidectomía endoscópica transoral por vía vestibular (TOETVA)** ofrece resección sin cicatriz visible en nódulos benignos <4–6 cm o cánceres diferenciados pequeños de bajo riesgo.
- **Drenajes:** los metanálisis demuestran que los drenajes de rutina **no previenen** el hematoma cervical y aumentan estancia e infección; se reservan para bocios gigantes con gran espacio muerto o disecciones ganglionares extensas.

### Complicaciones y manejo urgente
| Complicación | Incidencia aproximada | Manifestaciones y manejo inmediato |
|---|---|---|
| **Hipoparatiroidismo / hipocalcemia** | Transitoria 10–30%; definitiva 1–3% | **Complicación más frecuente.** Parestesias periorales y acrales, calambres, signos de **Chvostek** y **Trousseau**, prolongación del QT y tetania/laringoespasmo. Medir calcio y **PTH posoperatoria** (a las 4–24 h); suplementar calcio oral (carbonato/citrato 1–3 g/día) + **calcitriol** (0.25–0.5 µg c/12 h). Si hay síntomas graves o calcio <7.5 mg/dL: **gluconato de calcio al 10% IV** (1–2 g en 10–20 min) y verificar magnesio |
| **Hematoma cervical expansivo** | 0.5–1.5% (80% en las primeras 6–24 h) | **Emergencia absoluta de vía aérea** (no es un choque hemorrágico: la compresión venosa produce edema laríngeo supraglótico veloz). Disnea, sensación de opresión, cuello tenso, estridor y agitación. **Conducta:** abrir inmediatamente la herida **a pie de cama** (piel, platisma y **puntos de la línea media de los músculos pretiroideos** — protocolo SCOOP) para descomprimir, evacuar coágulos, asegurar vía aérea y llevar a quirófano para hemostasia definitiva |
| **Lesión del NLR** | Transitoria 3–5%; permanente <1–2% | **Unilateral:** disfonía, voz soplada, aspiración leve; vigilancia, terapia de voz y medialización si persiste >6–12 meses. **Bilateral:** cuerdas en aducción paramediana → **estridor y obstrucción aguda al extubar**; reintubación urgente y valoración de traqueostomía o cordotomía posterior |
| **Lesión de RELS** | 1–5% (subdiagnosticada) | Fatiga vocal e incapacidad para alcanzar tonos agudos o proyectar la voz (crítico en cantantes y docentes) |

### Referencias
- Tessler FN, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper. J Am Coll Radiol 2017.
- Ali SZ, et al. The 2023 Bethesda System for Reporting Thyroid Cytopathology. Thyroid 2023.
- Haugen BR, et al. ATA Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid 2016 (y actualización ATA).
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.

### Perlas de examen
- Ante cualquier nódulo tiroideo: **TSH + ultrasonido cervical con mapeo ganglionar** primero; si la TSH está baja, pedir **gammagrafía** (nódulo caliente no se biopsia).
- En **ACR TI-RADS**, el rasgo «más alto que ancho» y las microcalcificaciones puntiformes dan 3 puntos cada uno; umbrales de BAAF: **TR3 ≥2.5 cm, TR4 ≥1.5 cm, TR5 ≥1.0 cm**.
- **Bethesda IV (neoplasia folicular)** no puede distinguir adenoma de carcinoma folicular en citología porque requiere demostrar **invasión capsular o vascular** en la pieza quirúrgica (lobectomía o prueba molecular).
- El **ligamento de Berry** y el **tubérculo de Zuckerkandl** son las zonas de mayor riesgo para el **NLR**; la lesión de la **RELS** paraliza el músculo cricotiroideo y borra los tonos agudos.
- Ante un **hematoma cervical con estridor o disnea**, no esperar al quirófano ni a estudios: **abrir piel y músculos pretiroideos en la cama del paciente** de inmediato.
- Si una paratiroides queda desvascularizada durante la tiroidectomía, **autotrasplantarla en el músculo esternocleidomastoideo** de inmediato.
`),
    sheet('tir-cancer', '03', 'Cáncer de tiroides', `
## Cáncer de tiroides

### Epidemiología y espectro histopatológico
El cáncer de tiroides es la neoplasia maligna endocrina más frecuente y ocupa los primeros lugares en incidencia en mujeres mexicanas (relación mujer:hombre ~3:1). Su incidencia se ha triplicado en décadas recientes principalmente por sobrediagnóstico de microcarcinomas papilares mediante ultrasonido, mientras que la mortalidad global permanece estable y muy baja (<0.5 por 100,000).

| Tipo histológico | Frecuencia | Origen y biología molecular | Diseminación y rasgos clave | Supervivencia a 10 años |
|---|---|---|---|---|
| **Carcinoma papilar (CPT)** | ~80–85% | Células foliculares. Mutaciones ***BRAF V600E*** (45–60%), reordenamientos *RET/PTC*, *RAS* | **Vía linfática** (ganglios centrales VI y laterales II–V). Histología: núcleos claros «en ojos de Anita la Huerfanita», hendiduras, pseudoinclusiones y **cuerpos de psamoma**. Variantes agresivas: células altas, en tachuela (*hobnail*), esclerosante difusa y sólida | >95% |
| **Carcinoma folicular (CFT)** | ~8–10% | Células foliculares. Mutaciones ***RAS*** y translocación *PAX8-PPARG* | **Vía hematógena** (pulmón y hueso); rara afectación ganglionar (<10%). Requiere invasión capsular y/o vascular (mínimamente invasor vs extensamente invasor) | 80–90% |
| **Carcinoma oncocítico (células de Hürthle)** | ~3–5% | Células foliculares ricas en mitocondrias (entidad distinta en OMS) | Mayor invasión vascular, mayor tasa ganglionar que el folicular y **pobre avidez por 131I** | 70–80% |
| **Carcinoma medular (CMT)** | ~3–5% | **Células C parafoliculares** (cresta neural). Produce **calcitonina y CEA**. Protooncogén ***RET*** (75% esporádico; **25% hereditario: MEN 2A, MEN 2B y CMT familiar**) | Diseminación **linfática temprana** (hasta 50–70% al diagnóstico) y hematógena (hígado, hueso, pulmón). **No capta yodo radiactivo** ni responde a supresión de TSH | 75–85% (según estadio) |
| **Carcinoma anaplásico (CAT)** | <1–2% | Indiferenciado (a menudo desdiferenciación de CPT/CFT). ***TP53***, *TERT*, ***BRAF V600E*** (30–40%) | Masa cervical de crecimiento explosivo con invasión de tráquea/esófago y metástasis tempranas. **Siempre estadio IV** | Mediana 4–6 meses (en mejora con terapias dirigidas) |

La entidad **NIFTP** (*non-invasive follicular thyroid neoplasm with papillary-like nuclear features*) se reclasificó como neoplasia de muy bajo potencial maligno (no cáncer invasor), manejada adecuadamente con lobectomía sola sin yodo radiactivo.

### Estadificación AJCC 8.ª edición y estratificación de riesgo ATA
La **8.ª edición del TNM (AJCC)** elevó el punto de corte pronóstico de edad de 45 a **55 años** para el carcinoma diferenciado (papilar, folicular y oncocítico), reclasificando hacia abajo a miles de pacientes con excelente pronóstico:
- **Menores de 55 años:** solo existen **Estadio I** (cualquier T, cualquier N, **M0**) y **Estadio II** (cualquier T, cualquier N, **M1**).
- **Mayores o iguales a 55 años:**
  - **T1:** ≤2 cm intratiroideo (T1a ≤1 cm; T1b >1–2 cm). **T2:** >2–4 cm intratiroideo.
  - **T3a:** >4 cm intratiroideo. **T3b:** extensión extratiroidea (ETE) macroscópica que invade **solo músculos pretiroideos** (la ETE microscópica ya NO sube a T3).
  - **T4a:** invasión de tejidos subcutáneos, laringe, tráquea, esófago o NLR. **T4b:** fascia prevertebral o engloba carótida/vasos mediastinales.
  - **N1a:** ganglios centrales (nivel VI/VII). **N1b:** ganglios laterales (niveles I–V) o retrofaríngeos.
  - **Estadio I:** T1–T2 N0 M0 · **Estadio II:** T1–T2 N1 M0 o T3 cualquier N M0 · **Estadio III:** T4a cualquier N M0 · **Estadio IVA:** T4b cualquier N M0 · **Estadio IVB:** cualquier T, cualquier N, M1.

Mientras el TNM predice **mortalidad**, la **estratificación ATA** predice **riesgo de recurrencia estructural**:
- **Bajo riesgo (<5%):** intratiroideo, sin invasión vascular, histología no agresiva, cN0 o ≤5 micrometástasis (<2 mm), sin metástasis a distancia.
- **Riesgo intermedio (5–20%):** ETE microscópica, invasión vascular, histología agresiva, >5 ganglios positivos o cualquier ganglio ≥2 mm a <3 cm, captación fuera del lecho en rastreo post-RAI.
- **Alto riesgo (>20–30%):** ETE macroscópica, resección incompleta (R1/R2), metástasis a distancia, cualquier ganglio metastásico **≥3 cm**, o carcinoma folicular con invasión vascular extensa (>4 focos).

### Tratamiento del carcinoma diferenciado de tiroides (ATA / NCCN 2024–2025)
1. **Cirugía de la glándula primaria:**
   - **Vigilancia activa (observación con USG seriado):** opción válida en **microcarcinoma papilar (T1a ≤1 cm)** estrictamente intratiroideo, sin invasión traqueal/del NLR, sin ganglios sospechosos y en paciente apegado (estudios de Miyauchi/Ito).
   - **Lobectomía (hemitiroidectomía) con istmectomía:** suficiente en tumores **T1b–T2 (1 a 4 cm)** intratiroideos de bajo riesgo, sin ETE, sin ganglios clínicos (cN0), sin antecedente de radiación cervical y sin nódulos contralaterales relevantes. Reduce complicaciones y evita levotiroxina en muchos pacientes.
   - **Tiroidectomía total:** indicada en tumores **>4 cm (T3a)**, ETE macroscópica (T3b/T4), enfermedad bilateral o multifocal significativa, metástasis ganglionares (N1) o a distancia (M1), antecedente de irradiación cervical, cáncer familiar o cuando se planea terapia adyuvante con 131I.
2. **Manejo ganglionar cervical:**
   - **Disección terapéutica:** obligatoria cuando existen metástasis comprobadas por imagen/BAAF en compartimento central (**nivel VI**) o lateral (**disección selectiva modificada niveles IIa, III, IV y Vb**, preservando vena yugular interna, esternocleidomastoideo y nervio espinal accesorio). **Nunca hacer «berry picking»** (resección aislada de un ganglio positivo) por altísima recurrencia.
   - **Disección profiláctica central:** no se recomienda de rutina en T1–T2 cN0 (aumenta hipoparatiroidismo y lesión del NLR sin mejorar supervivencia); puede considerarse en tumores avanzados T3–T4 o cN1b.
3. **Yodo radiactivo (131I) adyuvante:**
   - **No indicado** en bajo riesgo ATA.
   - **Considerar selectivamente** en riesgo intermedio (dosis bajas de 30–100 mCi).
   - **Recomendado** en alto riesgo ATA (100–200 mCi), previa estimulación de TSH (>30 mUI/L mediante TSH humana recombinante o retiro de levotiroxina) y dieta baja en yodo por 2 semanas.
4. **Supresión de TSH con levotiroxina:** el epitelio diferenciado expresa receptores de TSH. Metas iniciales según riesgo: **alto riesgo <0.1 mUI/L**, **riesgo intermedio 0.1–0.5 mUI/L**, **bajo riesgo 0.5–2.0 mUI/L** (equilibrando el riesgo cardiovascular y de osteoporosis en mayores de 60 años).

### Seguimiento del carcinoma diferenciado
Se basa en la **reestratificación dinámica** de la respuesta al tratamiento (excelente, indeterminada, bioquímica incompleta o estructural incompleta) mediante:
- **Tiroglobulina (Tg) sérica** (marcador tumoral de tejido tiroideo tras tiroidectomía total; solo interpretable midiendo simultáneamente **anticuerpos antitiroglobulina [Ac-Tg]**, pues si son positivos invalidan la Tg y pasan a ser el marcador indirecto).
- **Ultrasonido cervical** periódico (cada 6–12 meses inicialmente).
- En enfermedad **refractaria a 131I** progresiva o metastásica: inhibidores multicinasa (**lenvatinib**, sorafenib) o inhibidores selectivos dirigidos (*selpercatinib* en fusión *RET*, *larotrectinib* en *NTRK*, *dabrafenib/trametinib* en *BRAF V600E*).

### Carcinoma medular (CMT) y carcinoma anaplásico (CAT)
- **Carcinoma medular:**
  - **Regla de oro preoperatoria:** antes de llevar a quirófano a cualquier paciente con CMT, **descartar siempre feocromocitoma** (metanefrinas plasmáticas/urinarias) e **hiperparatiroidismo** (calcio y PTH), y solicitar **secuenciación germinal del protooncogén *RET*** (incluso en casos aparentemente esporádicos, pues ~7–10% resultan hereditarios). Si coexiste feocromocitoma, **se opera primero la suprarrenal** tras bloqueo alfa.
  - **Cirugía:** **tiroidectomía total + disección ganglionar central bilateral (nivel VI) sistemática**; añadir disección lateral ipsilateral o bilateral según ultrasonido y nivel basal de calcitonina (>200 pg/mL sugiere compromiso lateral).
  - **Tiroidectomía profiláctica infantil:** en portadores asintomáticos de mutación *RET*: categoría de **riesgo máximo (MEN 2B, codón M918T)** → operar en el **primer año de vida**; **alto riesgo (MEN 2A, codón C634)** → antes de los **5 años**.
  - **Seguimiento:** calcitonina y CEA séricos (su tiempo de duplicación <6 meses predice alta mortalidad). Enfermedad avanzada con mutación *RET*: **selpercatinib**.
- **Carcinoma anaplásico:** requiere evaluación de urgencia de la vía aérea, biopsia con aguja gruesa (nunca basta BAAF; descartar linfoma tiroideo que se trata con quimioterapia) y **prueba molecular rápida de *BRAF V600E*** (por inmunohistoquímica y secuenciación). En tumores ***BRAF V600E* mutados** (30–40%), la terapia dirigida con **dabrafenib + trametinib** logra respuestas rápidas e incluso permite conversión a cirugía R0 en enfermedad localmente avanzada (estadio IVB). En enfermedad resecable sin metástasis (IVA), resección completa + quimiorradioterapia adyuvante.

### Referencias
- Haddad RI, et al. NCCN Clinical Practice Guidelines in Oncology: Thyroid Carcinoma, versiones 2024–2025.
- Haugen BR, et al. ATA Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer (y actualización vigente). Thyroid 2016.
- Wells SA, et al. Revised ATA Guidelines for the Management of Medullary Thyroid Carcinoma. Thyroid 2015; Bible KC, et al. ATA Guidelines for Anaplastic Thyroid Cancer. Thyroid 2021.
- AJCC Cancer Staging Manual, 8.ª ed. (2017); Sabiston, 21.ª ed.; Schwartz, 11.ª ed.

### Perlas de examen
- En el **TNM AJCC 8.ª ed.** para carcinoma diferenciado, el corte etario es **55 años**; en <55 años solo hay **estadio I (M0)** y **estadio II (M1)**, sin importar T ni N.
- **Carcinoma papilar** = diseminación linfática, cuerpos de psamoma, *BRAF V600E*; **carcinoma folicular** = diseminación hematógena, requiere pieza quirúrgica para confirmar invasión capsular/vascular.
- En carcinoma diferenciado de **1–4 cm de bajo riesgo** sin ganglios ni ETE, la **lobectomía sola** es aceptable y el **131I no se indica en bajo riesgo ATA**.
- En todo paciente con **carcinoma medular**: medir **metanefrinas** (descartar feocromocitoma antes de tocar el cuello), solicitar **estudio germinal de *RET*** y realizar **tiroidectomía total + disección central bilateral**.
- **MEN 2B (codón M918T)** exige tiroidectomía profiláctica en el **primer año de vida**; **MEN 2A (codón C634)** antes de los **5 años**.
- En el **carcinoma anaplásico**, descartar linfoma con biopsia de núcleo y pedir ***BRAF V600E* urgente** (candidato a dabrafenib + trametinib).
`),
    sheet('tir-paratiroides', '04', 'Patología de paratiroides (hiperparatiroidismo)', `
## Patología de paratiroides: hiperparatiroidismo

### Embriología y anatomía quirúrgica aplicada
El éxito de la cirugía paratiroidea descansa en la embriología. Habitualmente existen cuatro glándulas paratiroides (peso 30–40 mg cada una, color pardo-amarillento «caramelo»), irrigadas en >80% por ramas de la **arteria tiroidea inferior**:
- **Paratiroides superiores (4.ª bolsa faríngea):** realizan un descenso embriológico corto junto con el cuerpo ultimobranquial, por lo que su posición es muy constante (~80% a 1 cm de la intersección del NLR con la arteria tiroidea inferior, sobre la cara posterolateral del polo superior/medio cerca del tubérculo de Zuckerkandl). Se localizan **posteriores (profundas) al plano del nervio laríngeo recurrente**. Si migran de forma ectópica, caen por gravedad al **surco traqueoesofágico, espacio retroesofágico o mediastino posterior**.
- **Paratiroides inferiores (3.ª bolsa faríngea):** descienden un trayecto largo acompañando al **timo**, lo que las hace mucho más variables en posición. Habitualmente residen en la cara anteroinferior o posterolateral del polo inferior tiroideo, **anteriores (superficiales) al plano del NLR**. Sus sitios ectópicos clásicos siguen el trayecto tímico: **ligamento tirotímico, interior del timo, mediastino anterior**, vaina carotídea o intratiroideas (1–3%). Existen glándulas supernumerarias (5 o más) en hasta 5–13% de la población, a menudo alojadas en el timo.

### Fisiología y clasificación del hiperparatiroidismo
La hormona paratiroidea (PTH, vida media plasmática muy corta de **3 a 5 minutos**) mantiene la calcemia mediante tres acciones: estimula la resorción ósea osteoclástica, aumenta la reabsorción tubular renal de calcio (y excreción de fósforo) y activa la 1-alfa-hidroxilasa renal para generar **calcitriol (1,25-OH2-vitamina D)**, que eleva la absorción intestinal de calcio.

| Tipo | Fisiopatología | Perfil bioquímico típico | Causas principales |
|---|---|---|---|
| **Hiperparatiroidismo primario (HPTP)** | Secreción autónoma excesiva de PTH con pérdida del punto de ajuste del calcio | **Calcio alto**, **PTH alta** (o inapropiadamente normal), fósforo normal-bajo, calciuria normal o alta | **Adenoma único (80–85%)**, hiperplasia de 4 glándulas (10–15%), doble adenoma (2–4%), carcinoma paratiroideo (<1%). Asociado a **MEN 1** (hiperplasia multiglandular) y **MEN 2A** |
| **Hiperparatiroidismo secundario (HPTS)** | Hiperplasia compensadora de las 4 glándulas en respuesta a hipocalcemia crónica, hiperfosfatemia y déficit de calcitriol | **Calcio normal o bajo**, **PTH muy elevada**, fósforo alto | **Enfermedad renal crónica (ERC)** en diálisis (causa principal), malabsorción, deficiencia grave de vitamina D |
| **Hiperparatiroidismo terciario (HPTT)** | Autonomía glandular persistente tras corregir el estímulo (típicamente después de **trasplante renal** exitoso) | **Calcio alto**, **PTH elevada** persistente | Hiperplasia nodular autónoma postrasplante renal (~1–5% requieren cirugía) |

### Cuadro clínico y diagnóstico
En países occidentales >80% de los HPTP se detecta de forma «asintomática» o oligosintomática mediante química sanguínea (fatiga, depresión, niebla mental, estreñimiento, hipertensión, osteopenia). En hospitales públicos de México aún se observa la presentación clásica («huesos, piedras, quejidos abdominales y trastornos psíquicos»): nefrolitiasis recurrente, nefrocalcinosis, **osteítis fibrosa quística** (tumores pardos, resorción subperióstica en falanges y cráneo «en sal y pimienta»), pancreatitis, enfermedad ácido-péptica y crisis hipercalcémica (calcio >14 mg/dL con deshidratación, arritmias y estupor).

**El diagnóstico de HPTP es estrictamente bioquímico (nunca por imagen):**
1. **Calcio sérico total corregido por albúmina** (o calcio ionizado) elevado en al menos dos determinaciones + **PTH intacta elevada o inapropiadamente normal** (>20–25 pg/mL con hipercalcemia). En la hipercalcemia de malignidad (PTHrP o metástasis óseas), la PTH está **suprimida**.
2. **Descartar hipercalcemia hipocalciúrica familiar (FHH):** trastorno benigno autosómico dominante por mutación inactivadora del receptor sensible al calcio (*CASR*) que **NO debe operarse**. Se solicita **calcio y creatinina en orina de 24 horas**: una **relación de aclaramiento calcio/creatinina <0.01** (o calciuria <100 mg/24 h) orienta fuertemente a FHH y obliga a estudio genético antes de operar.
3. **Evaluación complementaria:** 25-OH vitamina D (su deficiencia eleva falsamente la PTH y debe reponerse con cautela), creatinina/TFGe, ultrasonido renal (litiasis silente) y **densitometría ósea de tres sitios** (columna lumbar, cadera total y **tercio distal del radio**, hueso cortical preferentemente afectado por la PTH).

### Indicaciones quirúrgicas (5.º Taller Internacional de HPTP, 2022)
La **paratiroidectomía es el único tratamiento curativo** y está indicada en **todo paciente sintomático** (litiasis, fracturas, síntomas neuromusculares/hipercalcemia grave) y en pacientes **asintomáticos** que cumplan **al menos uno** de los siguientes criterios:

| Parámetro | Umbral quirúrgico (Consenso 2022) |
|---|---|
| **Calcio sérico** | >1.0 mg/dL (>0.25 mmol/L) por encima del límite superior normal |
| **Edad** | **<50 años** |
| **Hueso (densitometría o imagen)** | **T-score ≤−2.5** en columna, cadera, cuello femoral o radio distal 1/3 (en mujeres posmenopáusicas y varones ≥50 años), o **fractura vertebral** en radiografía/VFA |
| **Función renal** | TFGe **<60 mL/min/1.73 m²** |
| **Litiasis / calciuria** | Nefrolitiasis o nefrocalcinosis por imagen, o hipercalciuria **>250 mg/24 h en mujeres / >300 mg/24 h en hombres** |

### Estudios de localización preoperatoria
Solo se solicitan **una vez establecida la indicación quirúrgica** para planear una cirugía dirigida; un estudio negativo **no descarta HPTP ni contraindica la cirugía** (obliga a exploración bilateral).
- **Ultrasonido cervical de alta resolución:** económico, evalúa simultáneamente patología tiroidea concomitante; operador-dependiente y limitado en mediastino o espacio retroesofágico.
- **Gammagrafía con 99mTc-sestamibi (SPECT/TC):** captura retención tardía en adenomas ricos en mitocondrias y detecta glándulas ectópicas mediastinales.
- **Tomografía computarizada en cuatro dimensiones (4D-TC):** resolución anatómica superior (realce arterial temprano con lavado venoso rápido); excelente en localización negativa/discordante, bocio multinodular y **reintervenciones**.
- **PET/TC con 18F-fluorocolina:** altísima sensibilidad (>90%) en casos difíciles o persistentes donde esté disponible.

### Tratamiento quirúrgico y monitoreo de PTH intraoperatoria
- **Paratiroidectomía focalizada (mínimamente invasiva):** estándar cuando dos estudios (p. ej., USG y sestamibi o 4D-TC) localizan de manera **concordante** un adenoma único. Se acompaña obligatoriamente de **medición de PTH intraoperatoria (IOPTH)**, aprovechando su vida media de 3–5 minutos.
  - **Criterio de Miami:** caída de la PTH **≥50% a los 10 minutos** tras la resección del adenoma respecto al valor basal más alto (preincisión o preexcisión), idealmente cayendo además a rango normal. Si no desciende ≥50%, existe enfermedad multiglandular oculta y se convierte a **exploración cervical bilateral**.
- **Exploración cervical bilateral de las 4 glándulas:** obligatoria en estudios negativos o discordantes, sospecha de hiperplasia, antecedentes de radiación, uso crónico de litio, **MEN 1 / MEN 2A** y falla en el descenso de la IOPTH.
- **Enfermedad multiglandular / hiperplasia (MEN 1, HPTS refractario, HPTT):**
  - **Paratiroidectomía subtotal (3.5 glándulas):** se resecan 3 glándulas y media, dejando un remanente viable de ~40–50 mg marcado con clip de titanio (más timectomía transcervical bilateral en MEN 1 por glándulas supernumerarias).
  - **Paratiroidectomía total con autotrasplante:** resección de las 4 glándulas e implante de fragmentos de la más normal en el **músculo braquiorradial del antebrazo no dominante** (facilita reintervención bajo anestesia local si recurre).
- **Hiperparatiroidismo secundario en ERC:** tratamiento inicial médico (quelantes de fósforo, calcitriol/paricalcitol, calcimiméticos como cinacalcet). Se opera cuando persiste **PTH >800 pg/mL** refractaria con hipercalcemia/hiperfosfatemia, prurito intratable, dolor óseo, fracturas o **calcifilaxis**.
- **Carcinoma paratiroideo (<1%):** sospechar ante **calcio >14 mg/dL**, PTH >5–10× LSN, masa cervical palpable dura o parálisis de cuerda vocal. **Nunca biopsiar ni enuclear**; realizar **resección en bloque** (paratiroides + **lobectomía tiroidea ipsilateral** + tejido fibrograso adherido) respetando la cápsula tumoral.

### Complicaciones y seguimiento
- **Hipocalcemia transitoria:** frecuente en los primeros días por supresión de las glándulas normales restantes; se maneja con calcio oral y vitamina D.
- **Síndrome de hueso hambriento (*hungry bone syndrome*):** hipocalcemia **profunda y prolongada** acompañada de **hipofosfatemia e hipomagnesemia** (a diferencia del hipoparatiroidismo donde el fósforo sube y la PTH cae), provocada por la captación ávida de minerales por un hueso gravemente desmineralizado (riesgo elevado con fosfatasa alcalina preoperatoria muy alta, osteítis fibrosa o HPTS). Requiere infusión continua de gluconato de calcio IV, dosis altas de calcio oral, **calcitriol** (1–2 µg/día) y reposición de magnesio.
- **Persistencia vs recurrencia:** la hipercalcemia dentro de los primeros **6 meses** es enfermedad **persistente** (adenoma ectópico no hallado o multiglandular no reconocida); después de 6 meses de normocalcemia es **recurrencia**. Antes de reintervenir se exigen confirmación bioquímica, revisión de patología previa y al menos dos estudios de localización concordantes (4D-TC, 18F-colina PET, arteriografía/muestreo venoso selectivo).

### Referencias
- Bilezikian JP, et al. Evaluation and Management of Primary Hyperparathyroidism: Summary Statement and Guidelines from the Fifth International Workshop. J Bone Miner Res 2022.
- Wilhelm SM, et al. The American Association of Endocrine Surgeons Guidelines for Definitive Management of Primary Hyperparathyroidism. JAMA Surg 2016.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.

### Perlas de examen
- Paratiroides **inferiores = 3.ª bolsa faríngea** (descienden con el timo, más ectópicas, **anteriores al NLR**); **superiores = 4.ª bolsa** (más constantes, **posteriores al NLR**).
- El diagnóstico de HPTP es **bioquímico** (calcio alto + PTH elevada o inapropiadamente normal); los estudios de imagen solo sirven para **localizar** antes de operar.
- Siempre medir **calciuria de 24 horas** para descartar **FHH** (relación aclaramiento Ca/Cr <0.01): operar una FHH no cura la hipercalcemia.
- **Criterios de cirugía en HPTP asintomático (2022):** edad <50 años, Ca >1 mg/dL sobre LSN, T-score ≤−2.5 (incluyendo radio distal 1/3) o fractura vertebral, TFGe <60 mL/min, nefrolitiasis o calciuria >250 (M) / >300 (H) mg/24 h.
- **Criterio de Miami (IOPTH):** descenso **≥50% a los 10 minutos** de resecar el adenoma respecto al basal más alto confirma curación intraoperatoria.
- **Síndrome de hueso hambriento:** calcio bajo + **fósforo bajo** + magnesio bajo (con PTH normal o alta); en el hipoparatiroidismo el fósforo está **alto** y la PTH **baja**.
`),
    sheet('tir-suprarrenal', '05', 'Patología suprarrenal', `
## Patología suprarrenal

### Anatomía quirúrgica y fisiología
Las glándulas suprarrenales son órganos retroperitoneales situados en el polo superomedial de ambos riñones dentro de la fascia de Gerota. La corteza (mesodermo) consta de tres zonas —**glomerulosa** (aldosterona, regulada por renina-angiotensina), **fasciculada** (cortisol, regulada por ACTH) y **reticular** (andrógenos)—, mientras la **médula** (cresta neural) secreta catecolaminas (adrenalina y noradrenalina).

**Anatomía vascular crítica para el cirujano:**
- **Irrigación arterial triple:** arterias suprarrenales superiores (de la frénica inferior), medias (directas de la aorta) e inferiores (de la arteria renal).
- **Drenaje venoso asimétrico (punto clave en adrenalectomía):** la **vena suprarrenal derecha** es muy **corta (<1 cm)** y desemboca directamente en la cara posterolateral de la **vena cava inferior** (su avulsión genera hemorragia masiva); la **vena suprarrenal izquierda** es más larga, recibe la vena frénica inferior y drena en la **vena renal izquierda**.

### Incidentaloma suprarrenal: evaluación sistemática
Un incidentaloma es una masa suprarrenal ≥1 cm hallada en un estudio de imagen por una causa no suprarrenal (prevalencia 4–5% en TC abdominal, aumentando con la edad). La mayoría (>75–80%) son adenomas corticales benignos no funcionantes. Toda masa suprarrenal exige responder dos preguntas **antes de considerar cirugía o biopsia**: **¿es hormonalmente activa?** y **¿es maligna?**

1. **Estudio bioquímico obligatorio (ESE/ENSAT 2023):**
   - **Descartar feocromocitoma** (en todas las lesiones con atenuación >10 UH o heterogéneas, y obligatorio antes de cualquier intervención invasiva): **metanefrinas libres plasmáticas** o **metanefrinas fraccionadas en orina de 24 horas** (sensibilidad >97%).
   - **Descartar hipercortisolismo (secreción autónoma leve de cortisol [MACS] o Cushing):** **prueba de supresión nocturna con 1 mg de dexametasona** a las 23:00 h midiendo cortisol sérico a las 8:00 h (normal ≤1.8 µg/dL; >1.8 µg/dL sugiere autonomía y requiere ACTH basal y cortisol urinario/salival).
   - **Descartar hiperaldosteronismo primario** (en pacientes con hipertensión o hipopotasemia): **relación aldosterona plasmática / actividad de renina plasmática (ARR)**.
   - **Perfil androgénico** (DHEA-S, testosterona, androstenediona, 17-OH progesterona) si existen signos de virilización o sospecha de carcinoma adrenocortical.

2. **Caracterización por imagen (TC y RM):**
| Característica radiológica | Adenoma benigno típico | Masa indeterminada o sospechosa de malignidad / feocromocitoma |
|---|---|---|
| **Tamaño** | <4 cm, bordes regulares y homogénea | **≥4 cm** (riesgo de carcinoma ~6% entre 4–6 cm y **>25% si >6 cm**), bordes irregulares, necrosis o hemorragia |
| **TC simple (sin contraste)** | **≤10 Unidades Hounsfield (UH)** (rico en lípidos intracelulares; especificidad ~98% para benignidad) | **>10–20 UH** (feocromocitoma suele tener >20 UH; carcinoma >20–30 UH) |
| **TC con lavado de contraste (a los 15 min)** | **Lavado absoluto ≥60%** o **lavado relativo ≥40%** | Lavado absoluto <60% / relativo <40% (los feocromocitomas y carcinomas retienen contraste; excepción: algunos feocromocitomas simulan lavado rápido) |
| **RM desplazamiento químico** | Pérdida de señal en secuencia fuera de fase | Sin caída de señal; el feocromocitoma muestra hiperintensidad clásica en T2 («signo de la bombilla») |

**Regla de oro sobre la biopsia suprarrenal:** **NUNCA biopsiar** una masa suprarrenal sin descartar primero feocromocitoma (riesgo de crisis hipertensiva fatal). Además, la biopsia está **contraindicada ante sospecha de carcinoma adrenocortical resecable** (no distingue adenoma de carcinoma y siembra el trayecto); se reserva casi exclusivamente para confirmar una metástasis aislada de un tumor primario conocido cuando cambia la conducta oncológica.

### Entidades quirúrgicas principales
#### 1. Feocromocitoma y paraganglioma
Tumores neuroendocrinos productores de catecolaminas de la médula suprarrenal (feocromocitoma, 80–85%) o ganglios simpáticos extraadrenales (paraganglioma, 15–20%). La vieja «regla de los 10» quedó superada: hoy se sabe que **30 a 40% tiene una mutación germinal hereditaria** (**MEN 2A/2B [*RET*]**, **von Hippel-Lindau [*VHL*]**, **neurofibromatosis tipo 1 [*NF1*]**, complejo succinato deshidrogenasa ***SDHB/SDHD*** — *SDHB* conlleva alto riesgo de malignidad/metástasis), por lo que **todo paciente con feocromocitoma requiere asesoría y estudio genético**.
- **Clínica:** tríada paroxística (cefalea pulsátil, diaforesis y palpitaciones) con hipertensión lábil o refractaria, ansiedad, palidez o hipotensión ortostática por depleción de volumen.
- **Preparación preoperatoria obligatoria (7 a 14 días antes):**
  1. **Bloqueo alfa-adrenérgico primero:** fenoxibenzamina (bloqueador no competitivo irreversible, 10 mg c/12 h titulando hasta control) o bloqueadores alfa-1 selectivos (**doxazosina**, prazosina; menor hipotensión posoperatoria, similar eficacia en ensayo **PRESCRIPT**). Meta: PA <130/80 mmHg sentado y >90 mmHg de pie con discreta congestión nasal.
  2. **Expansión de volumen:** dieta rica en sodio y líquidos abundantes (3–5 L/día) para revertir la hemoconcentración y prevenir choque vasopléjico al ligar la vena suprarrenal.
  3. **Bloqueo beta-adrenérgico (propranolol o metoprolol):** solo se añade **después de lograr el bloqueo alfa** si hay taquicardia refleja (>100 lpm) o arritmias. **Jamás iniciar betabloqueador solo**, porque bloquea la vasodilatación beta-2 dejando una vasoconstricción alfa sin oposición → crisis hipertensiva y edema pulmonar agudo.
- **Manejo trans y posoperatorio:** manipulación tumoral mínima y ligadura temprana de la vena suprarrenal; crisis hipertensiva transoperatoria se trata con nicardipina, clevidipina, fentolamina o nitroprusiato IV (y esmolol para taquiarritmias). Tras resecar el tumor, vigilar **hipotensión refractaria** (reanimar con cristaloides y noradrenalina) e **hipoglucemia de rebote** (por liberación súbita de insulina antes inhibida por catecolaminas).

#### 2. Hiperaldosteronismo primario (síndrome de Conn)
Causa más frecuente de hipertensión endocrina (5–10% de hipertensos; hasta 20% en hipertensión resistente). Las dos causas principales son el **adenoma productor de aldosterona unilateral (~35–40%)** y la **hiperplasia suprarrenal bilateral idiopática (~60%)**.
- **Clínica y diagnóstico:** hipertensión resistente + hipopotasemia (solo presente en ~30–40% de los casos; la normopotasemia no lo descarta) + alcalosis metabólica. Tamizaje con **ARR elevada** (aldosterona alta, renina suprimida), confirmada con prueba de carga salina oral/IV o supresión con fludrocortisona.
- **Lateralización (paso crucial):** debido a la alta frecuencia de incidentalomas no funcionantes en adultos, el **muestreo venoso suprarrenal (AVS)** es el estándar de oro para diferenciar enfermedad unilateral (quirúrgica) de bilateral (médica con **espironolactona o eplerenona**). Solo puede omitirse el AVS en pacientes **<35 años** con hipopotasemia espontánea, aldosterona marcadamente elevada y un adenoma unilateral típico >1 cm con glándula contralateral normal en TC.

#### 3. Síndrome de Cushing suprarrenal
Representa ~15–20% del síndrome de Cushing endógeno (el 80% restante es ACTH-dependiente, mayoritariamente enfermedad de Cushing hipofisaria). Cursa con obesidad central, facies de luna llena, giba dorsal, estrías violáceas >1 cm, miopatía proximal, hipertensión, diabetes y osteoporosis, con **ACTH plasmática suprimida (<5–10 pg/mL)**.
- **Manejo quirúrgico:** adrenalectomía unilateral en adenoma productor de cortisol (o bilateral en enfermedad de Cushing hipofisaria refractaria o hiperplasia macronodular bilateral).
- **Cobertura esteroidea obligatoria:** el exceso crónico de cortisol suprime el eje hipotálamo-hipófisis y atrofia la suprarrenal contralateral; sin reemplazo, el paciente sufre una **crisis suprarrenal aguda** posoperatoria. Administrar **hidrocortisona IV en el perioperatorio** (p. ej., 100 mg en inducción y 50 mg c/8 h) y continuar con pauta oral descendente durante **6 a 18 meses** hasta comprobar recuperación del eje con cortisol matutino/prueba de ACTH.

#### 4. Carcinoma adrenocortical (CAC)
Neoplasia rara pero agresiva (distribución bimodal: infancia y 40–50 años); ~50–60% son funcionantes (Cushing mixto con virilización). El diagnóstico patológico usa la **puntuación de Weiss (≥3 criterios)** y la estadificación se realiza con el sistema **ENSAT (estadios I–IV)**.
- **Tratamiento:** **adrenalectomía abierta con resección en bloque R0** (con linfadenectomía regional y resección de órganos invadidos si es necesario), evitando estrictamente la ruptura capsular. El **mitotano** es el fármaco adyuvante de elección en alto riesgo (Ki-67 >10%, estadio III, resección R1) y en enfermedad metastásica junto con quimioterapia (esquema EDP: etopósido, doxorrubicina, cisplatino).

### Abordajes quirúrgicos de la suprarrenal
| Abordaje | Indicaciones preferentes | Ventajas y notas |
|---|---|---|
| **Laparoscópico transperitoneal lateral (Gagner)** | **Estándar de oro** en tumores benignos funcionantes o no funcionantes **<6 cm** (hasta 8 cm en manos expertas sin signos de invasión) | Anatomía familiar, espacio amplio, excelente control de la vena cava inferior en el lado derecho |
| **Retroperitoneoscópico posterior (Walz)** | Tumores benignos **<5–6 cm**, obesidad central, cirugías abdominales previas o adrenalectomía bilateral | Evita entrar a cavidad peritoneal, menor dolor y alta rápida; espacio más reducido |
| **Abierto (subcostal, chevron o línea media)** | **Carcinoma adrenocortical confirmado o sospechado**, invasión vascular/órganos vecinos, tumores gigantes (>8–10 cm) | Permite resección en bloque R0, linfadenectomía y control vascular directo de cava/aorta |

### Referencias
- Fassnacht M, et al. European Society of Endocrinology clinical practice guidelines on the management of adrenal incidentalomas (ESE/ENSAT 2023). Eur J Endocrinol 2023.
- NCCN Clinical Practice Guidelines in Oncology: Neuroendocrine and Adrenal Tumors, 2024–2025.
- Lenders JWM, et al. Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2014 (y consenso internacional vigente).
- Funder JW, et al. The Management of Primary Aldosteronism: Endocrine Society Guideline. J Clin Endocrinol Metab 2016; Sabiston 21.ª ed.; Schwartz 11.ª ed.

### Perlas de examen
- **Regla de oro:** nunca operar ni biopsiar una masa suprarrenal sin estudio bioquímico previo completo (metanefrinas, dexametasona 1 mg y, si hay HTA/hipopotasemia, aldosterona/renina).
- En TC simple, una atenuación **≤10 UH** identifica un adenoma benigno rico en lípidos (~98% especificidad); lesiones **>4–6 cm** o **>20 UH** sin lavado adecuado deben sospecharse malignas.
- En el **feocromocitoma**: **bloqueo alfa 7–14 días antes + hidratación con sal**, y betabloqueador solo después si hay taquicardia; **nunca betabloqueo inicial sin bloqueo alfa**. Vigilar hipotensión e **hipoglucemia** tras resecarlo.
- En **hiperaldosteronismo primario**, realizar **muestreo venoso suprarrenal (AVS)** en pacientes >35 años antes de operar para confirmar lateralización.
- Tras resecar un adenoma productor de cortisol (**Cushing**), iniciar **hidrocortisona perioperatoria obligatoria** por atrofia de la suprarrenal contralateral.
- La **vena suprarrenal derecha** es corta y entra directo a la **vena cava inferior**; la **izquierda** es larga y drena en la **vena renal izquierda**.
- El **carcinoma adrenocortical** se opera por **vía abierta en bloque (R0)**, nunca fragmentado, seguido de mitotano en alto riesgo.
`),
  ],

  'ap-r3-mama': [
    sheet('mama-ginecomastia', '01', 'Ginecomastia', `
## Ginecomastia

### Definición y diagnóstico diferencial fundamental
La **ginecomastia** es la proliferación benigna, unilateral o bilateral, del tejido glandular ductal y estromal de la mama masculina. Debe distinguirse desde la primera exploración de dos entidades con manejo completamente distinto:
- **Pseudoginecomastia (lipomastia):** aumento difuso del volumen mamario debido exclusivamente a depósito de tejido adiposo sin proliferación glandular, frecuente en varones con sobrepeso u obesidad. A la palpación no existe el disco firme subareolar característico.
- **Carcinoma de mama masculino:** representa <1% de todos los cánceres de mama y <1% de las neoplasias en el hombre (pico 60–70 años; asociado a mutaciones ***BRCA2***, síndrome de Klinefelter, radiación torácica y hepatopatía crónica). A diferencia de la ginecomastia, suele presentarse como una masa **unilateral, excéntrica (fuera del complejo areola-pezón), dura, indolora, fija a piel o plano muscular**, frecuentemente con **retracción o ulceración del pezón, telorrea sanguinolenta o adenopatías axilares**. La ginecomastia común **no** aumenta el riesgo de cáncer de mama (salvo cuando subyace el síndrome de Klinefelter).

### Fisiopatología e historia natural
El tejido mamario masculino posee receptores tanto de estrógenos (estimulan la proliferación ductal) como de andrógenos (inhiben dicho crecimiento). La ginecomastia surge cuando aumenta la **relación estrógenos libres / andrógenos libres** a nivel tisular por cualquiera de los siguientes mecanismos:
1. Aumento absoluto de la producción de estrógenos (tumores testiculares o suprarrenales, tumores productores de hCG, incremento de la aromatización periférica en el tejido adiposo por obesidad o envejecimiento).
2. Disminución absoluta de la producción o biodisponibilidad de testosterona (hipogonadismo primario o secundario, elevación de la globulina fijadora de hormonas sexuales [SHBG] en cirrosis o hipertiroidismo, que secuestra más testosterona que estradiol).
3. Bloqueo del receptor de andrógenos o actividad estrogénica directa por fármacos.

**Fases histológicas con implicación terapéutica directa:**
- **Fase florida o proliferativa (primeros 6–12 meses):** hiperplasia ductal epitelial y edema estromal periductal; clínicamente la mama es más sensible o dolorosa y **puede responder a la corrección de la causa o al tratamiento médico**.
- **Fase fibrosa o hialinizada (>12–24 meses):** fibrosis densa, hialinización estromal y regresión epitelial; la lesión se vuelve **irreversible a fármacos** y solo responde a cirugía.

### Epidemiología y etiología
Presenta una distribución **trimodal fisiológica**: recién nacidos (60–90%, por paso transplacentario de estrógenos maternos; resuelve en semanas), adolescentes puberales (30–60%, pico a los 13–14 años; **resuelve espontáneamente en 70–90% de los casos en 1 a 3 años**) y varones mayores (>50–65 años, hasta 40–60% por descenso de testosterona y aumento de adiposidad/aromatasa).

| Categoría etiológica | Causas principales | Pistas clínicas |
|---|---|---|
| **Fisiológica** (~25% de consultas) | Neonatal, puberal, senil | Inicio acorde a la edad, bilateral, asimétrica en ocasiones, sin signos de alarma |
| **Fármacos y sustancias** (~10–25%) | **Espironolactona** (clásico), **antiandrógenos** (bicalutamida, flutamida, terapia de cáncer de próstata), inhibidores de 5-alfa-reductasa (**finasterida**, dutasterida), ketoconazol, **cimetidina**, omeprazol, antipsicóticos/risperidona, metoclopramida, digitálicos, **esteroides anabólicos** (aromatización), marihuana, alcohol, aceite de lavanda/árbol de té | Relación temporal con inicio o ajuste de dosis; revisar siempre suplementos de gimnasio y herbolaria |
| **Hipogonadismo** (~8–10%) | **Primario:** síndrome de **Klinefelter (47,XXY)**, criptorquidia, orquitis, trauma, quimioterapia. **Secundario:** adenoma hipofisario, hiperprolactinemia, síndrome de Kallmann | Testículos pequeños y firmes (Klinefelter), hábito eunucoide, disminución de libido/vello, infertilidad |
| **Enfermedades sistémicas** (~8%) | **Cirrosis / hepatopatía crónica**, **hipertiroidismo** (eleva SHBG), enfermedad renal crónica en diálisis, realimentación tras desnutrición grave | Estigmas hepáticos, tirotoxicosis, uremia |
| **Neoplasias productoras de hormonas** (<3%, pero críticas) | **Tumores testiculares** (células de Leydig, células de Sertoli, tumores germinales productores de **beta-hCG**), carcinoma broncogénico productor de hCG, **carcinoma suprarrenal feminizante** | **Inicio súbito y crecimiento rápido**, dolor marcado, masa testicular, pérdida de peso o síntomas endocrinos |
| **Idiopática persistente** (~25%) | Sin causa identificable tras estudio completo | Diagnóstico de exclusión |

### Evaluación clínica y clasificación
1. **Exploración mamaria (maniobra del pellizco):** con el paciente en decúbito supino y las manos detrás de la cabeza, se palpa suavemente con pulgar e índice desde la periferia hacia el pezón. La ginecomastia verdadera se percibe como un **botón o disco glandular firme, elástico, móvil y concéntrico** bajo la areola (≥2 cm de diámetro), a menudo doloroso si es reciente; en la pseudoginecomastia los dedos se juntan sin resistencia glandular.
2. **Exploración obligatoria complementaria:** **palpación testicular sistemática** (volumen, asimetrías, nódulos), exploración axilar y supraclavicular, evaluación tiroidea, signos de hepatopatía crónica y caracteres sexuales secundarios.

**Clasificación clínica de Simon (guía la táctica quirúrgica):**
| Grado de Simon | Características clínicas | Abordaje quirúrgico habitual |
|---|---|---|
| **Grado I** | Aumento pequeño sin exceso cutáneo | Resección glandular periareolar (Webster) ± liposucción |
| **Grado IIa** | Aumento moderado sin exceso cutáneo | Liposucción + adenectomía subcutánea periareolar |
| **Grado IIb** | Aumento moderado con **exceso cutáneo discreto** | Liposucción + adenectomía; valorar pexia periareolar («dona») si la piel no retrae |
| **Grado III** | Aumento marcado con **exceso cutáneo importante y ptosis** (aspecto de mama femenina) | Mastectomía subcutánea + resección cutánea (periareolar concéntrica, pedículo inferior o amputación con injerto libre del complejo areola-pezón) |

### Estudios diagnósticos
No todos los casos requieren estudios extensos: en una ginecomastia puberal típica o claramente secundaria a un fármaco conocido con exploración testicular normal, basta la evaluación clínica y el seguimiento. El estudio dirigido está indicado en ginecomastia de **inicio reciente en adultos sin causa farmacológica**, crecimiento rápido, tamaño >4–5 cm, dolor intenso o sospecha tumoral:
- **Panel hormonal matutino (en ayuno):** **testosterona total y libre (o biodisponible), LH, FSH, estradiol, beta-hCG, prolactina y TSH**, además de pruebas de función hepática y renal.
  - Beta-hCG elevada o estradiol alto con LH suprimida → **ultrasonido testicular urgente** (y TC toracoabdominopélvica si el testículo es normal, buscando tumor germinal extragonadal, carcinoma pulmonar o tumor suprarrenal).
  - Testosterona baja + LH/FSH altas → hipogonadismo primario (solicitar cariotipo si sospecha Klinefelter).
  - Testosterona baja + LH/FSH bajas → hipogonadismo secundario (medir prolactina y RM hipofisaria).
- **Imagen mamaria:** la exploración suele bastar si es típica y concéntrica. Ante cualquier masa **unilateral excéntrica, dura, fija, con retracción cutánea, telorrea o sospecha de cáncer**, indicar **mastografía diagnóstica y ultrasonido mamario** (BI-RADS) seguidos de **biopsia con aguja de corte (tru-cut)**.

### Tratamiento médico y quirúrgico
1. **Manejo etiológico y expectante:**
   - Suspender o sustituir el fármaco responsable (p. ej., cambiar espironolactona por eplerenona, cimetidina por otro esquema) y tratar la enfermedad de base (hipertiroidismo, hipogonadismo, tumor). La mejoría suele observarse en 1–3 meses si está en fase florida.
   - En la **ginecomastia puberal**, tranquilizar y observar cada 6 meses (resolución espontánea en la gran mayoría); evitar cirugía precipitada antes de completar el desarrollo puberal salvo afectación psicológica grave o grado III.
2. **Tratamiento farmacológico (solo en fase florida <1 año con dolor o impacto relevante):**
   - **Tamoxifeno** (modulador selectivo del receptor estrogénico, 10–20 mg VO/día durante 3–6 meses): fármaco con mayor evidencia clínica para reducir el dolor y el volumen (respuesta parcial o completa en 50–80%, uso fuera de etiqueta); también útil en prevención/manejo de la ginecomastia por bicalutamida en cáncer de próstata.
   - Los inhibidores de aromatasa (anastrozol) mostraron resultados inferiores al placebo en ensayos de ginecomastia puberal y no son primera línea. La testosterona solo se indica si existe **hipogonadismo confirmado** (en eugonadales empeora la ginecomastia por aromatización).
3. **Tratamiento quirúrgico:**
   - **Indicaciones:** ginecomastia persistente **>1–2 años** (fase fibrosa), falla del tratamiento médico, dolor crónico, afectación psicosocial significativa o imposibilidad de descartar neoplasia.
   - **Técnica estándar (combinada):** se inicia frecuentemente con **liposucción asistida o tumescente** periférica para adelgazar la transición adiposa y evitar un escalón periférico, seguida de **adenectomía subcutánea por incisión periareolar inferior de Webster** (semicircular en el borde inferior de la areola, cicatriz prácticamente invisible). Es fundamental **dejar un botón retroareolar de 5 a 10 mm de espesor** debajo del complejo areola-pezón (CAP) para preservar su vascularización y evitar la deformidad cóncava («en platillo») o la necrosis del pezón.
   - En **grado III de Simon**, resecar el exceso cutáneo (mastopexia periareolar o cicatriz en surco inframamario con transposición o injerto libre del CAP).
   - **Regla oncológica:** **todo tejido glandular resecado debe enviarse a estudio histopatológico** (para descartar carcinoma ductal *in situ* o invasor oculto).

### Complicaciones y seguimiento
Las complicaciones quirúrgicas (5–15%) incluyen **hematoma** (la más frecuente en las primeras 24 h; obliga a hemostasia meticulosa y vendaje compresivo/chaleco por 4–6 semanas), seroma, infección, deformidad «en platillo» por resección subareolar excesiva, asimetría, retracción o necrosis parcial del CAP e hipoestesia transitoria del pezón.

### Referencias
- Kanakis GA, et al. EAA clinical practice guidelines—gynecomastia evaluation and management. Andrology 2019.
- Braunstein GD. Gynecomastia. N Engl J Med 2007; Thiruchelvam P, et al. Assessment and management of gynaecomastia. BMJ 2016.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.

### Perlas de examen
- La **ginecomastia verdadera** se palpa como un disco firme **concéntrico subareolar**; una masa **excéntrica, dura, indolora o con telorrea/retracción** en un varón es **cáncer de mama** hasta demostrar lo contrario (mastografía + tru-cut).
- Causa por desequilibrio **estrógenos/andrógenos**; fármacos clásicos de examen: **espironolactona**, antiandrógenos, finasterida, cimetidina, ketoconazol y anabólicos.
- En toda ginecomastia del adulto de inicio rápido es obligatorio realizar **exploración testicular** y solicitar **beta-hCG, LH, FSH, testosterona y estradiol** (descartar tumor de células de Leydig/germinal).
- **Fase florida (<1 año):** potencialmente reversible (suspender causa o **tamoxifeno**). **Fase fibrosa (>1–2 años):** irreversible, requiere **cirugía**.
- En la **adenectomía por incisión de Webster** (periareolar inferior) + liposucción, dejar un disco retroareolar de **5–10 mm** para evitar necrosis del pezón y deformidad en platillo, y **enviar siempre la pieza a patología**.
`),
    sheet('mama-cancer', '02', 'Cáncer de mama', `
## Cáncer de mama

### Definición y epidemiología en México
Neoplasia maligna originada en el epitelio de la unidad ductolobulillar terminal de la mama. Es el cáncer más frecuente y la **primera causa de muerte por tumor maligno en mujeres mexicanas** (GLOBOCAN/INEGI), con una edad media al diagnóstico de **~52 años** —alrededor de una década más joven que en países anglosajones— y un porcentaje elevado (~45–55%) diagnosticado todavía en estadios localmente avanzados (IIB–III).

- **Factores de riesgo:** sexo femenino, edad creciente, **susceptibilidad genética hereditaria (5–10%: *BRCA1*, *BRCA2*, *PALB2*, *TP53*, *CHEK2*, *ATM*, *CDH1*)**, antecedente personal de cáncer de mama o lesiones de alto riesgo (hiperplasia ductal/lobulillar atípica, CLIS), densidad mamográfica elevada, exposición estrogénica prolongada (menarca <12 años, menopausia >55 años, nuliparidad, primer parto >30 años, terapia hormonal combinada), obesidad posmenopáusica, alcohol, sedentarismo y radioterapia torácica previa (p. ej., linfoma de Hodgkin en juventud).
- **Histología:** el **carcinoma ductal infiltrante (no especial)** representa 75–80%; el **carcinoma lobulillar infiltrante** (10–15%) se caracteriza por pérdida de **E-cadherina**, crecimiento en «fila india», mayor tendencia a **multicentricidad, bilateralidad** y metástasis atípicas (peritoneo, tubo digestivo, meninges). El **carcinoma ductal *in situ* (CDIS)** es precursor obligado no invasor (membrana basal íntegra); el **CLIS** clásico se considera hoy un marcador de riesgo bilateral más que un precursor directo (salvo la variante pleomórfica, que se trata como CDIS).

### Biología molecular y subtipos intrínsecos
En la oncología mamaria moderna, la **biología molecular dicta el pronóstico y el tratamiento sistémico** por encima del tamaño aislado:

| Subtipo intrínseco | Perfil IHQ aproximado | Frecuencia | Comportamiento y pilares terapéuticos |
|---|---|---|---|
| **Luminal A** | **RE+, RP alto, HER2−, Ki-67 bajo (<14–20%)** | ~40–50% | Mejor pronóstico, crecimiento lento, metástasis óseas tardías. Base: **hormonoterapia** (tamoxifeno o inhibidor de aromatasa); quimioterapia solo si carga ganglionar alta o firma genómica alta |
| **Luminal B (HER2− o HER2+)** | **RE+, RP bajo o Ki-67 alto**, HER2− o HER2+ | ~20–30% | Mayor riesgo de recurrencia que Luminal A. Hormonoterapia + quimioterapia (y terapia anti-HER2 si HER2+) |
| **HER2 enriquecido** | **RE−, RP−, HER2+ (IHC 3+ o 2+ con FISH amplificado)** | ~15–20% | Agresivo históricamente, hoy pronóstico transformado por **doble bloqueo anti-HER2 (trastuzumab + pertuzumab)** + quimioterapia (neoadyuvancia estándar si ≥cT2 o cN+) |
| **Triple negativo (basal-like)** | **RE−, RP−, HER2−** | ~12–18% (mayor en mujeres jóvenes y portadoras de ***BRCA1***) | Mayor agresividad, recaída visceral/cerebral temprana (<3 años). **Quimioterapia + inmunoterapia (pembrolizumab, KEYNOTE-522)** neoadyuvante en estadios II–III |

### Cuadro clínico y triple evaluación
La presentación habitual es una **masa palpable indolora, dura y de bordes irregulares** (cuadrante superoexterno en ~50%); otros signos son retracción cutánea o del pezón, telorrea sanguinolenta unilateral uniorificial, piel de naranja y adenopatía axilar. Dos presentaciones obligan a reconocimiento inmediato:
- **Cáncer inflamatorio de mama (cT4d):** diagnóstico **clínico** (eritema y edema/piel de naranja en **≥1/3 de la mama** de instalación rápida <6 meses, con invasión de linfáticos dérmicos en biopsia); **nunca se opera de inicio** — exige biopsia con marcadores, estadificación sistémica y **quimioterapia neoadyuvante urgente** seguida de mastectomía radical modificada y radioterapia.
- **Enfermedad de Paget del pezón:** lesión eccematosa, costrosa o ulcerada unilateral del pezón que no cura con esteroides tópicos; en >90% subyace CDIS o carcinoma invasor (biopsia de espesor completo del pezón + imagen).

**Triple evaluación (clínica + imagen + patología):**
1. **Tamizaje (NOM-041-SSA2 / GPC IMSS / NCCN):** mastografía bilateral periódica a partir de los 40 años (anual o bienal según guía; anual desde los 40 en NCCN). El **ultrasonido mamario y axilar** complementa mamas densas, evalúa mujeres <35–40 años y guía biopsias. La **resonancia magnética contrastada** se reserva para portadoras de *BRCA*, carcinoma lobulillar, búsqueda de primario oculto en axila positiva, evaluación de respuesta a neoadyuvancia y sospecha de multifocalidad.
2. **Sistema ACR BI-RADS:**

| BI-RADS | Categoría | Probabilidad de malignidad | Conducta |
|---|---|---|---|
| **0** | Incompleto | No determinada | Estudios adicionales (compresión focal, USG) o comparación con previas |
| **1–2** | Negativo / hallazgo benigno | ~0% | Tamizaje habitual de rutina |
| **3** | Probablemente benigno | **<2%** | Seguimiento a corto plazo (6, 12 y 24 meses) |
| **4 (4A/4B/4C)** | Sospechoso | 2–95% (4A 2–10%; 4B 10–50%; 4C 50–95%) | **Biopsia con aguja de corte (tru-cut)** |
| **5** | Altamente sugestivo de malignidad | **≥95%** | **Biopsia tru-cut** obligatoria |
| **6** | Malignidad comprobada por biopsia | 100% | Planeación terapéutica / monitoreo neoadyuvante |

3. **Biopsia diagnóstica:** siempre **biopsia con aguja gruesa de corte (tru-cut)** guiada por USG o estereotaxia (con colocación de **clip metálico marcador** si se prevé neoadyuvancia), para determinar histología invasora vs *in situ*, grado de Nottingham, **RE, RP, HER2 y Ki-67**. La **BAAF** sirve para puncionar ganglios axilares sospechosos, pero **no sustituye al tru-cut** en el tumor primario.
4. **Estadificación (AJCC 8.ª ed.):** incorpora tanto el estadio anatómico (T1 ≤2 cm, T2 >2–5 cm, T3 >5 cm, T4 pared torácica/piel/inflamatorio; N0–N3; M0–M1) como el **estadio pronóstico** (integra grado, RE, RP, HER2 y plataformas genómicas como **Oncotype DX** en RE+/HER2− para decidir si omitir quimioterapia). Los estudios de extensión (TC toracoabdominopélvica, gammagrafía ósea o PET-TC) no son rutinarios en estadios I–II asintomáticos; se indican en estadio III, síntomas específicos o alteración bioquímica.

### Tratamiento quirúrgico de la mama y de la axila
1. **Cirugía de la mama:**
   - **Cirugía conservadora (tumorectomía/cuadrantectomía) + radioterapia adyuvante:** ofrece **supervivencia global equivalente a la mastectomía** en enfermedad temprana (ensayos históricos **NSABP B-06** y **Milán**).
   - **Márgenes quirúrgicos (consenso SSO-ASTRO):** en carcinoma invasor basta **«sin tumor en la tinta»** (márgenes más amplios no reducen la recurrencia local); en **CDIS puro** el margen óptimo es **≥2 mm**.
   - **Contraindicaciones de cirugía conservadora:** enfermedad multicéntrica (dos o más cuadrantes), microcalcificaciones difusas de aspecto maligno, radioterapia torácica/mamaria previa, imposibilidad de lograr márgenes libres tras reescisión, mala relación tamaño tumoral/mama (salvo descenso con neoadyuvancia o técnica oncoplástica) y embarazo en 1.º–2.º trimestre cuando no puede diferirse la radioterapia posparto.
   - **Mastectomía:** simple/total (con BGC), preservadora de piel o preservadora de complejo areola-pezón (candidatas a reconstrucción inmediata con implante/expansor o colgajo autólogo DIEP) y **mastectomía radical modificada de Madden** (preserva ambos pectorales + disección axilar niveles I–II).
2. **Manejo contemporáneo de la axila (desescalamiento basado en evidencia):**
   - **Axila clínicamente negativa (cN0):** **biopsia de ganglio centinela (BGC)** mediante técnica dual (radiocoloide Tc-99m + colorante azul patente o verde de indocianina).
   - **Ensayo ACOSOG Z0011:** en pacientes con tumor **T1–T2, cN0**, tratadas con cirugía conservadora y radioterapia de mama completa que resultan con **1 a 2 ganglios centinela positivos** (sin extensión extracapsular masiva), **se omite la disección radical de axila (DRA)** sin perjudicar supervivencia ni control regional.
   - **Ensayo AMAROS:** ante centinela positivo, la **radioterapia axilar** ofrece igual control regional que la disección axilar con menos de la mitad de linfedema.
   - **Ensayo SOUND (JAMA Oncol 2023):** en mujeres seleccionadas con tumor ≤2 cm y ultrasonido axilar negativo tratadas con cirugía conservadora, la omisión de BGC resultó no inferior.
   - **Axila clínicamente positiva (cN1) tras neoadyuvancia:** si se colocó clip en el ganglio positivo antes de la quimioterapia y responde a ycN0, puede realizarse **disección axilar dirigida (TAD = BGC + extracción del ganglio con clip)** con tasa de falsos negativos <2–4%; si persiste enfermedad residual en el centinela (ypN+), está indicada la **disección axilar niveles I–II** (respetando nervio torácico largo [escápula alada], toracodorsal [dorsal ancho] y en lo posible intercostobraquial).

### Tratamiento sistémico, radioterapia y complicaciones
- **Terapia neoadyuvante:** estándar en cáncer **localmente avanzado/inflamatorio**, y preferida en **HER2+** y **triple negativo** (≥cT2 o cN+) porque reduce el estadio mamario/axilar y evalúa la **respuesta patológica completa (pCR)**, principal marcador pronóstico y guía para terapia adyuvante escalada (**T-DM1** si queda tumor residual en HER2+ [ensayo KATHERINE]; **capecitabina** o **olaparib** en *BRCA* mutado si queda residual en triple negativo).
- **Hormonoterapia adyuvante (RE+/RP+):** **tamoxifeno** (5–10 años) en premenopáusicas (añadiendo supresión ovárica + inhibidor de aromatasa en alto riesgo; vigilar trombosis y cáncer de endometrio) o **inhibidores de aromatasa** (anastrozol, letrozol, exemestano) en posmenopáusicas (vigilar densidad ósea y artralgias); añadir **inhibidor de CDK4/6** (abemaciclib/ribociclib) en enfermedad luminal de alto riesgo.
- **Anti-HER2:** **trastuzumab** por 1 año (± pertuzumab en N+); vigilar **FEVI cada 3 meses** por cardiotoxicidad reversible.
- **Radioterapia adyuvante:** obligatoria tras cirugía conservadora (salvo subgrupos seleccionados >70 años, T1, RE+, N0 con hormonoterapia) y tras mastectomía si tumor >5 cm (T3–T4), márgenes positivos o ganglios positivos.
- **Complicaciones y seguimiento:** seroma (la más frecuente tras mastectomía/DRA), **linfedema del miembro superior** (15–30% tras DRA vs <5% tras BGC; prevención con fisioterapia y compresión temprana), necrosis de colgajo, rigidez de hombro y lesión nerviosa (torácico largo → escápula alada). Seguimiento: exploración física cada 3–6 meses los primeros 3 años, cada 6–12 meses hasta el 5.º año y luego anual, más **mastografía anual** de mama conservada/contralateral; no pedir marcadores tumorales (CA 15-3) ni TC de rutina en pacientes asintomáticas.

### Referencias
- Gradishar WJ, et al. NCCN Clinical Practice Guidelines in Oncology: Breast Cancer, versiones 2024–2025.
- Giuliano AE, et al. ACOSOG Z0011 10-Year Follow-Up. JAMA 2017; Donker M, et al. EORTC AMAROS. Lancet Oncol 2014; Gentilini OD, et al. SOUND. JAMA Oncol 2023.
- GPC CENETEC IMSS / NOM-041-SSA2: Prevención, diagnóstico, tratamiento, control y vigilancia epidemiológica del cáncer de mama.
- AJCC Cancer Staging Manual, 8.ª ed. (2017); Sabiston, 21.ª ed.; Schwartz, 11.ª ed.

### Perlas de examen
- **Triple evaluación:** clínica + imagen (BI-RADS) + **biopsia tru-cut con RE, RP, HER2 y Ki-67** (la BAAF nunca basta para el tumor primario).
- **Cirugía conservadora + radioterapia = mastectomía** en supervivencia global (NSABP B-06). Margen óptimo: **«sin tumor en la tinta»** en carcinoma invasor y **≥2 mm** en CDIS puro.
- **ACOSOG Z0011:** en T1–T2 cN0 con cirugía conservadora + RT y **1–2 ganglios centinela positivos**, **no** se realiza disección axilar.
- **Cáncer inflamatorio (cT4d):** diagnóstico clínico (eritema/piel de naranja ≥1/3 de mama); **jamás cirugía inicial** → quimioterapia neoadyuvante, luego mastectomía radical modificada y radioterapia.
- La lesión del **nervio torácico largo (de Bell)** durante la disección axilar paraliza el serrato anterior y produce **escápula alada**.
- **Trastuzumab** exige monitoreo periódico de la **FEVI**; **tamoxifeno** se asocia a tromboembolia y cáncer endometrial (sangrado posmenopáusico obliga a biopsia).
- En enfermedad **HER2+ o triple negativo** ≥cT2 o cN+, la **neoadyuvancia** es estándar porque la presencia de tumor residual cambia la terapia adyuvante (T-DM1 / capecitabina).
`),
  ],
};
