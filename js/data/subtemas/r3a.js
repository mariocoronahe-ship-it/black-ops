// R3 · intestino, hígado y vías biliares: una hoja por subtema (desarrollo completo). Ver hoja.js.
import { sheet } from './hoja.js?v=20261121y';

export const R3A = {
  'ap-r3-intestino': [
    sheet('int-obstruccion', '01', 'Obstrucción intestinal y vólvulo', `
## Obstrucción intestinal y vólvulo

### Definición
Interrupción parcial o completa del tránsito aboral del contenido luminal intestinal causada por una barrera física (**obstrucción mecánica**) o por una alteración de la motilidad propulsiva sin obstáculo anatómico (**íleo paralítico o adinámico** y **pseudoobstrucción colónica aguda o síndrome de Ogilvie**). El **vólvulo** es la torsión axial de un segmento intestinal sobre su propio eje mesentérico, lo cual genera simultáneamente una obstrucción mecánica en asa cerrada y un compromiso vascular progresivo con alto riesgo de necrosis y perforación.

La distinción operativa más importante para el residente de tercer año no es solo anatómica (intestino delgado frente a colon), sino fisiológica: diferenciar una **obstrucción simple** (sin compromiso vascular) de una **obstrucción estrangulada o en asa cerrada**, porque esta última constituye una urgencia quirúrgica absoluta en la que cada hora de retraso incrementa la necrosis transmural y la mortalidad.

### Epidemiología
- La obstrucción intestinal representa aproximadamente **15 a 20%** de los ingresos hospitalarios por dolor abdominal agudo en cirugía general.
- En el **intestino delgado** del adulto, las causas más frecuentes en países occidentales y en hospitales de segundo y tercer nivel del IMSS son las **adherencias posquirúrgicas (60-75%)**, seguidas de las **hernias de la pared abdominal o internas (10-15%)** y las **neoplasias (10-15%)**, habitualmente metastásicas o carcinomatosis peritoneal. Causas menos frecuentes son la enfermedad de Crohn, el íleo biliar, los bezoares, la invaginación (en adultos suele tener un punto guía tumoral en más de 80% de los casos), la enteritis por radiación y el divertículo de Meckel.
- En el **colon**, la etiología cambia de forma radical: el **adenocarcinoma colorrectal** ocasiona alrededor de **60%** de los casos, seguido por el **vólvulo (10-15%)** y la **estenosis diverticular o diverticulitis complicada (10%)**.
- El **vólvulo sigmoideo** representa 60 a 75% de los vólvulos colónicos; predomina en adultos mayores institucionalizados con estreñimiento crónico, dolicosigmoides, enfermedades neurológicas o psiquiátricas y dieta rica en residuo (en zonas endémicas de Sudamérica también se asocia a megacolon chagásico). El **vólvulo cecal** corresponde a 25 a 40%, aparece en pacientes más jóvenes (40-60 años) con fijación retroperitoneal incompleta del ciego (ciego móvil), antecedente de cirugía abdominal o embarazo. El vólvulo de colon transverso y el de ángulo esplénico suman menos de 5%.

### Fisiopatología
Al obstruirse la luz intestinal, el segmento proximal acumula **gas** (70-80% aire deglutido rico en nitrógeno, que se absorbe mal, más gas producido por fermentación bacteriana) y **líquido** (secreciones salivales, gástricas, biliares, pancreáticas e intestinales que suman 7 a 8 litros diarios). Al principio la motilidad proximal aumenta para vencer el obstáculo, pero cuando la presión intraluminal supera 20 cmH2O la absorción se invierte hacia la secreción neta y la pared se edematiza.

- **Secuestro al tercer espacio y alteraciones ácido-base:** la pérdida de agua y electrolitos hacia la luz y por vómito produce hipovolemia, hemoconcentración y lesión renal prerrenal. La obstrucción proximal cursa con pérdida de ácido clorhídrico y potasio, produciendo **alcalosis metabólica hipoclorémica e hipopotasémica** con aciduria paradójica. Conforme evoluciona hacia hipoperfusión e isquemia tisular aparece **acidosis metabólica con brecha aniónica elevada** por hiperlactatemia.
- **Sobrecrecimiento y translocación bacteriana:** la estasis permite la proliferación exponencial de enterobacterias y anaerobios en el intestino delgado proximal (normalmente casi estéril); al alterarse la barrera mucosa ocurre translocación hacia ganglios mesentéricos y circulación portal.
- **Estrangulación y asa cerrada:** cuando ambos extremos de un asa quedan ocluidos (vólvulo, banda adherencial que atrapa un segmento, hernia incarcerada o cáncer colónico con **válvula ileocecal competente**, presente en ~70-80% de la población), la presión intraluminal sube con rapidez. Primero colapsa el retorno linfático y venoso, produciendo congestión, edema mural y hemorragia submucosa; luego se compromete el flujo arterial y sobreviene necrosis transmural.
- **Ley de Laplace en el colon:** la tensión parietal es proporcional a la presión por el radio ($T = P \times r$). Como el **ciego** posee el mayor diámetro del tubo digestivo, es el sitio que alcanza primero la tensión crítica de isquemia y perforación diastásica cuando su diámetro supera **9 a 12 cm** en presencia de válvula ileocecal competente.

### Clasificación comparativa
| Criterio | Obstrucción de intestino delgado | Obstrucción de colon | Obstrucción en asa cerrada / Vólvulo | Íleo paralítico / Síndrome de Ogilvie |
|---|---|---|---|---|
| **Causas principales** | Adherencias, hernias, tumores | Cáncer colorrectal, vólvulo, diverticulitis | Vólvulo sigmoideo/cecal, hernia incarcerada, banda única | Posoperatorio, sepsis, hipopotasemia, opioides; Ogilvie en paciente crítico |
| **Dolor** | Cólico periumbilical en paroxismos cada 3-5 min | Sordo, menos frecuente, hipogástrico | Intenso, continuo, de rápida progresión | Molestia difusa por distensión, poco cólico |
| **Vómito** | Temprano (proximal) o bilioso/fecaloide (distal) | Tardío o ausente si válvula ileocecal competente | Variable, a menudo reflejo temprano | Variable, no suele ser en proyectil |
| **Distensión** | Leve en alta; moderada a marcada en distal | Muy marcada y progresiva | Asimétrica y masiva en vólvulo sigmoideo | Difusa, timpánica |
| **Riesgo de necrosis** | Bajo si simple; alto si estrangulada | Alto en ciego >9-12 cm con válvula competente | Muy alto e inmediato (compromiso mesentérico) | Bajo en íleo; alto en Ogilvie si ciego >12 cm |
| **Manejo inicial** | SNG, reanimación, Gastrografin si adherencial simple | Estabilización, TC, colonoscopia/stent o cirugía | Cirugía urgente (o destorsión endoscópica en sigmoideo no complicado) | Corregir causa y electrolitos; neostigmina en Ogilvie |

### Cuadro clínico
La presentación clásica combina los cuatro datos cardinales: **dolor abdominal cólico, vómito, distensión abdominal e incapacidad para evacuar y canalizar gases (obstipación)**. Sin embargo, en la obstrucción parcial o muy proximal el paciente puede evacuar contenido distal al sitio de bloqueo durante las primeras horas, lo cual no descarta el diagnóstico.

- **Exploración física obligada:** inspeccionar todas las cicatrices previas y palpar minuciosamente los **orificios herniarios** (inguinales, femorales, umbilicales, incisionales y signos de hernia obturatriz en ancianas delgadas con dolor en cara interna del muslo — signo de Howship-Romberg). Al inicio se auscultan ruidos hiperactivos de tono metálico; al fatigarse el músculo liso o instaurarse la necrosis aparece silencio abdominal. El tacto rectal descarta impactación fecal, tumor rectal bajo o sangre oculta; en el vólvulo sigmoideo la ampolla suele encontrarse vacía.
- **Signos de alarma de estrangulación:** dolor que pasa de cólico a **continuo y severo**, fiebre, taquicardia persistente tras reanimación, hipotensión, irritación peritoneal (rebote, defensa involuntaria), leucocitosis marcada con bandemia y acidosis láctica. Ningún signo aislado es completamente sensible, por lo que la integración clínica y tomográfica es indispensable.
- **Vólvulo gástrico** (organoaxial por torsión en eje cardiopilórico o mesenteroaxial): presenta la **tríada de Borchardt** (dolor epigástrico súbito, arcadas improductivas e imposibilidad para pasar sonda nasogástrica), que exige descompresión y cirugía urgentes.

### Diagnóstico
1. **Reanimación simultánea y laboratorio:** instalar dos vías periféricas, ayuno, sonda nasogástrica para descompresión y prevención de broncoaspiración, y sonda vesical para cuantificar diuresis. Solicitar biometría hemática, química sanguínea, electrolitos séricos (Na, K, Cl, Mg), gasometría arterial o venosa con lactato y tiempos de coagulación. **Un lactato normal no descarta isquemia intestinal**, pues la sangre venosa de un segmento estrangulado puede quedar secuestrada sin drenar a la circulación sistémica y el hígado depura lactato de forma eficiente al inicio.
2. **Radiografía simple de abdomen (bipedestación y decúbito):** útil como tamizaje inicial rápido (sensibilidad ~60-70%), pero insuficiente para descartar estrangulación. Regla mnemotécnica **3-6-9** para límites máximos de dilatación: intestino delgado >3 cm (válvulas conniventes de pared a pared en "pilas de monedas"), colon >6 cm (haustras incompletas) y ciego >9 cm. Muestra niveles hidroaéreos escalonados y ausencia de gas en ámpula rectal. En el vólvulo sigmoideo se observa el **signo del grano de café** o U invertida dirigida hacia el cuadrante superior derecho; en el vólvulo cecal el asa dilatada apunta hacia el cuadrante superior izquierdo.
3. **Tomografía computarizada (TC) de abdomen y pelvis con contraste IV:** es el **estudio de elección** (sensibilidad >90% para obstrucción de alto grado y estrangulación). Permite definir el nivel y la causa exacta, identificar el **punto de transición** con **signo de las heces en intestino delgado**, detectar asa cerrada (distribución en C o U con convergencia radial de vasos mesentéricos y **signo del pico**), identificar el **signo del remolino (whirl sign)** en vólvulo, y buscar signos específicos de isquemia: **falta de realce parietal**, engrosamiento mural con edema submucoso, ingurgitación mesentérica, líquido libre en pelvis, **neumatosis intestinal**, gas venoso portomesentérico y neumoperitoneo.
4. **Prueba terapéutica con contraste hidrosoluble (Gastrografin):** recomendada por las **guías de Bolonia de la WSES (2017)** en la obstrucción adherencial de intestino delgado sin signos de isquemia ni hernia. Tras descomprimir con SNG se administran 50 a 100 mL de contraste hidrosoluble diluido y se toma radiografía abdominal a las 8-24 horas. Si el contraste llega al colon en **24 horas**, predice resolución sin cirugía con sensibilidad y especificidad mayores de 90%; además, por su alta osmolaridad reduce el edema parietal y acelera la resolución (efecto terapéutico).

### Tratamiento
#### Obstrucción de intestino delgado
- **Urgencia quirúrgica inmediata:** indicada ante peritonitis, inestabilidad hemodinámica, signos tomográficos de isquemia o estrangulación, obstrucción en asa cerrada, hernia incarcerada no reducible o íleo biliar. Se inicia antibiótico de amplio espectro (cobertura para gramnegativos y anaerobios) y laparotomía (o laparoscopia en casos muy seleccionados con distensión moderada y sospecha de banda única). Se libera el agente causal y se evalúa la **viabilidad intestinal** tras liberar la torsión y cubrir las asas con compresas tibias durante 10-15 minutos: color rosado, peristaltismo visible, sangrado arterial en los bordes de corte y pulso en vasos rectos; en centros equipados se apoya con Doppler o angiografía por fluorescencia con verde de indocianina (ICG). Si hay necrosis franca, se reseca con anastomosis primaria o estoma según estabilidad y contaminación; si la viabilidad de tramos extensos es dudosa, se aplica control de daños y **segunda revisión (second-look)** programada a las 24-48 horas para evitar un síndrome de intestino corto evitable.
- **Manejo no operatorio (obstrucción adherencial simple):** resuelve 65 a 80% de los episodios. Consiste en reposo intestinal, SNG a derivación, cristaloides balanceados, reposición de potasio y magnesio, exploración abdominal seriada y prueba con contraste hidrosoluble. Si el contraste no alcanza el colon a las 24-36 horas o el cuadro clínico no resuelve tras **72 horas**, se indica cirugía porque el riesgo de isquemia tardía y morbimortalidad aumenta significativamente.

#### Obstrucción colónica y vólvulo
- **Cáncer colorrectal obstructivo:** en colon derecho se prefiere hemicolectomía derecha con anastomosis ileocólica primaria (o ileostomía terminal si hay inestabilidad/peritonitis). En colon izquierdo existen tres opciones según condición del paciente y experiencia del centro: resección con colostomía terminal (**procedimiento de Hartmann**), resección con lavado colónico intraoperatorio y anastomosis primaria ± ileostomía derivativa, o colocación de **prótesis metálica autoexpandible (stent)** como puente a cirugía electiva en pacientes de alto riesgo (WSES 2017) o como paliación en enfermedad irresecable.
- **Vólvulo sigmoideo:** sin datos de necrosis ni peritonitis, el tratamiento inicial es la **destorsión endoscópica** mediante sigmoidoscopia flexible (éxito >80%), dejando una sonda rectal de descompresión por 24-48 horas. Debido a que la recurrencia supera 40-60%, se recomienda **sigmoidectomía electiva con anastomosis primaria durante el mismo internamiento** si el paciente es operable. Si existen signos de necrosis mucosa en la endoscopia, peritonitis o falla a la destorsión, se realiza cirugía urgente con resección sigmoidea (Hartmann en inestabilidad o anastomosis primaria en tejido sano y paciente estable).
- **Vólvulo cecal:** la colonoscopia tiene baja tasa de éxito (<30%) y alto riesgo de perforación, por lo que el manejo es **quirúrgico de entrada**. La **hemicolectomía derecha** con anastomosis ileocólica (o ileostomía si hay sepsis grave) es el estándar en presencia de necrosis y también la opción más definitiva para evitar recurrencia; la cecopexia o cecostomía se reserva para pacientes muy frágiles con intestino completamente viable.
- **Síndrome de Ogilvie (pseudoobstrucción colónica aguda):** descartar obstrucción mecánica con TC. Manejo inicial conservador por 24-48 horas (suspender opioides y anticolinérgicos, corregir potasio y magnesio, movilización). Si el ciego supera **12 cm** o falla el manejo conservador, administrar **neostigmina** (2 mg IV lento bajo monitoreo electrocardiográfico continuo y con atropina a la mano por riesgo de bradicardia); si falla o está contraindicada, descompresión colonoscópica. Cirugía urgente si hay perforación o isquemia cecal.

### Complicaciones y pronóstico
Las complicaciones abarcan deshidratación grave, desequilibrio hidroelectrolítico, lesión renal aguda, neumonía por broncoaspiración, perforación intestinal con peritonitis fecal, sepsis abdominal, fuga anastomótica, infección de herida quirúrgica, enterotomía inadvertida durante adherenciolisis, fístula enterocutánea y síndrome de intestino corto tras resecciones masivas. La mortalidad de la obstrucción simple operada a tiempo es menor de 3 a 5%, pero asciende a **20-35%** cuando existe estrangulación con necrosis transmural. El uso de abordaje laparoscópico en cirugías electivas reduce la formación futura de adherencias.

### Referencias
- Ten Broek RPG, et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ASBO): 2017 update of the evidence-based guidelines from the WSES. World J Emerg Surg 2018.
- Tian BWCA, et al. WSES consensus guidelines on sigmoid volvulus management. World J Emerg Surg 2023.
- Pisano M, et al. 2017 WSES guidelines on colon and rectal cancer emergencies: obstruction and perforation. World J Emerg Surg 2018.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.
- Brunicardi FC, et al. Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- La causa más frecuente de obstrucción de intestino delgado en adultos son las **adherencias posquirúrgicas**; en colon es el **adenocarcinoma colorrectal**.
- Un **lactato sérico normal no excluye isquemia ni estrangulación intestinal**; la clínica y la TC con contraste IV mandan.
- En la obstrucción adherencial simple, la llegada de **Gastrografin al colon en 24 horas** predice resolución no operatoria (>90%); no prolongar manejo conservador más allá de **72 horas**.
- En el **vólvulo sigmoideo** no complicado el primer paso es la **destorsión endoscópica**, pero se debe programar **sigmoidectomía en el mismo internamiento** por la alta recurrencia; en el **vólvulo cecal** la cirugía es de primera línea.
- Por la **ley de Laplace**, el **ciego** es el sitio más propenso a perforarse en la obstrucción colónica con válvula ileocecal competente (umbral de alerta >9-12 cm).
`),
    sheet('int-isquemia', '02', 'Isquemia mesentérica y colitis isquémica', `
## Isquemia mesentérica y colitis isquémica

### Definición
La **isquemia mesentérica** es la reducción crítica del flujo sanguíneo esplácnico (arterial o venoso) que resulta insuficiente para cubrir las demandas metabólicas del intestino, generando un espectro de daño que va desde la lesión mucosa reversible hasta el infarto transmural, la perforación, el choque séptico y la muerte. Se clasifica en **isquemia mesentérica aguda (IMA)**, **isquemia mesentérica crónica (IMC)** y **colitis isquémica (CI)**, que representa la forma más frecuente de isquemia del tubo digestivo y suele afectar de manera localizada y no oclusiva al colon.

### Anatomía vascular mesentérica
El conocimiento preciso de la irrigación esplácnica y de sus redes colaterales explica la topografía de los infartos y define la estrategia de revascularización:
- **Tronco celíaco:** irriga el intestino anterior (esófago distal, estómago, duodeno proximal, hígado, bazo y cabeza/cuerpo pancreático). Se anastomosa con la arteria mesentérica superior (AMS) a través de las **arcadas pancreatoduodenales** (arteria gastroduodenal con pancreatoduodenal inferior).
- **Arteria mesentérica superior (AMS):** nace de la aorta a nivel de L1 con un ángulo agudo y gran calibre, lo que la hace especialmente vulnerable a los émbolos. Origina la pancreatoduodenal inferior, la **arteria cólica media**, las ramas yeyunales e ileales, la cólica derecha y la ileocólica; irriga desde el duodeno distal hasta los dos tercios proximales del colon transverso.
- **Arteria mesentérica inferior (AMI):** nace a nivel de L3 e irriga desde el tercio distal del colon transverso hasta el recto superior mediante las arterias cólica izquierda, sigmoideas y rectal superior. Se comunica con la AMS mediante la **arteria marginal de Drummond** y la **arcada de Riolano** (arteria mesentérica serpenteante), y con la circulación sistémica (arterias iliacas internas) mediante las arterias rectales medias e inferiores.
- **Zonas limítrofes (watershed) del colon:** el **punto de Griffith** en el ángulo esplénico (unión AMS-AMI) y el **punto de Sudeck** en la unión rectosigmoidea (unión AMI-iliaca interna) poseen menor red colateral y son los sitios predilectos de la colitis isquémica. El recto rara vez se infarta por su rica doble irrigación.

### Epidemiología
- La **IMA** explica apenas ~0.1% de los ingresos hospitalarios, pero presenta una de las mortalidades más elevadas de la cirugía de urgencia (**50 a 70%** en series globales; desciende a 15-30% cuando se diagnostica y revasculariza antes del infarto transmural). Su incidencia crece exponencialmente en mayores de 70 años con cardiopatía estructural, fibrilación auricular o aterosclerosis difusa.
- La **colitis isquémica** representa 50 a 60% de todos los episodios de isquemia intestinal; en 80-85% de los casos es transitoria y no gangrenosa, con mortalidad global <10%, pero sube a 40-60% cuando es gangrenosa o pancolónica.

### Fisiopatología
La mucosa intestinal posee una altísima tasa metabólica y una arquitectura vascular en contracorriente en las vellosidades que la vuelve extremadamente sensible a la hipoxia:
- **Cronología del daño:** en los primeros **15 a 30 minutos** de oclusión completa se produce desprendimiento epitelial apical y pérdida de la función de barrera; entre **2 y 4 horas** aparece hemorragia submucosa y edema parietal; después de **6 horas** de isquemia total suele establecerse la **necrosis transmural** irreversible.
- **Lesión por isquemia-reperfusión:** paradójicamente, gran parte del daño tisular y sistémico ocurre al restablecer el flujo, cuando el oxígeno activa la xantina oxidasa generando especies reactivas de oxígeno, quimiotaxis neutrofílica, lesión endotelial, liberación masiva de potasio, lactato y citocinas (TNF-alfa, IL-6) que pueden precipitar falla orgánica múltiple.

### Clasificación y subtipos de isquemia mesentérica aguda
| Subtipo | Frecuencia | Etiología y sitio típico | Presentación clave | Pilar terapéutico |
|---|---|---|---|---|
| **Embolia arterial (EAMS)** | 40-50% | Émbolo cardiaco (FA, trombo mural post-IAM, valvulopatía). Se enclava **3-10 cm distal al origen de la AMS**, respetando la cólica media y el yeyuno proximal | Inicio súbito, dolor atroz desproporcionado a la exploración, vaciamiento intestinal (diarrea/vómito) | Anticoagulación + revascularización urgente (embolectomía abierta con Fogarty o aspiración endovascular) + resección de necrosis + second-look |
| **Trombosis arterial (TAMS)** | 20-30% | Placa aterosclerótica complicada en el **ostium (primeros 2 cm) de la AMS**; afecta todo el intestino medio | Antecedente de angina intestinal crónica y pérdida de peso, con agudización subaguda | Revascularización (stent endovascular retrógrado/anterógrado o bypass aortomesentérico) + control de necrosis |
| **No oclusiva (IMNO)** | 20% | Vasoespasmo esplácnico severo por bajo gasto cardiaco, choque séptico/cardiogénico, hemodiálisis, vasopresores (alfa-agonistas), digoxina o cocaína | Paciente crítico en UCI con distensión progresiva, intolerancia enteral y acidosis refractaria sin obstrucción arterial | Corregir causa de bajo gasto, retirar vasopresores, infusión intraarterial de **papaverina** o prostaglandina E1; cirugía solo si hay necrosis |
| **Trombosis venosa (TVM)** | 5-15% | Estados protrombóticos (factor V Leiden, déficit de proteína C/S, neoplasia, JAK2), hipertensión portal, sepsis intraabdominal (pancreatitis, diverticulitis) | Curso subagudo (días a semanas), dolor progresivo, ascitis sanguinolenta, menos choque inicial | **Anticoagulación sistémica** inmediata (HNF) como pilar; cirugía únicamente si aparece peritonitis o infarto transmural |

### Cuadro clínico
- **Isquemia mesentérica aguda:** el sello diagnóstico temprano es el **dolor abdominal intenso y súbito, completamente desproporcionado a los hallazgos de la exploración física** (abdomen blando, depresible, sin defensa inicial). Suele acompañarse de náusea, vómito y evacuaciones diarreicas por hiperperistaltismo isquémico inicial. Cuando aparecen irritación peritoneal, defensa muscular, hematoquecia, fiebre, taquicardia sostenida, choque y acidosis metabólica severa, el intestino ya presenta infarto transmural.
- **Isquemia mesentérica crónica:** afecta a pacientes fumadores con enfermedad aterosclerótica multisistémica y estenosis significativa de al menos dos de los tres troncos esplácnicos. Produce la tríada clásica de **angina intestinal**: dolor abdominal cólico o sordo que inicia 15-60 minutos después de comer y dura 1-2 horas, **sitofobia** (miedo a comer) y pérdida ponderal marcada que a menudo obliga a descartar neoplasia oculta.
- **Colitis isquémica:** adulto mayor con factores de riesgo cardiovascular (o paciente posoperado de reparación aórtica abdominal con ligadura de AMI) que presenta dolor cólico súbito en hemiabdomen o fosa iliaca izquierda, urgencia defecatoria y diarrea sanguinolenta o hematoquecia en las primeras 24 horas.

### Diagnóstico
- **Angiotomografía computarizada (angio-TC) trifásica (sin contraste, arterial y portal):** es el **estudio de elección indiscutible** según las guías **WSES 2022 y ESVS** (sensibilidad 93% y especificidad 96%). Debe realizarse de forma inmediata sin retrasarla por creatinina elevada cuando existe sospecha alta de IMA, ya que el riesgo de infarto intestinal supera ampliamente el de nefropatía por contraste. Permite identificar el defecto de llenado arterial o venoso, la localización ostial frente a distal, calcificaciones ateroscleróticas y signos parietales de viabilidad (adelgazamiento en "papel de fumar" en fase arterial, falta de realce mural, edema submucoso, neumatosis intestinal, gas venoso portal y líquido libre).
- **Laboratorio:** leucocitosis marcada con desviación a la izquierda, hemoconcentración, amilasa y fosfatasa alcalina discretamente elevadas, y acidosis láctica tardía. El **D-dímero** tiene alto valor predictivo negativo (si es normal hace muy improbable una IMA oclusiva aguda), pero es inespecífico. **Reiteración crítica: un lactato normal jamás descarta IMA temprana.**
- **Estudios complementarios:** electrocardiograma y ecocardiograma transtorácico/transesofágico para identificar fibrilación auricular o trombo intracavitario; en TVM, estudio de trombofilia antes o tras ajustar la anticoagulación.
- **Colonoscopia en colitis isquémica:** estándar diagnóstico en pacientes estables sin peritonitis (realizar en las primeras 48 horas con mínima insuflación de CO2). Muestra mucosa pálida y edematosa con hemorragias petequiales, úlceras longitudinales (**signo de la franja única o single-stripe sign**) o pseudomembranas cianóticas/negras en la forma gangrenosa; el respeto del recto es característico. Se evita avanzar el colonoscopio si se observa necrosis franca por riesgo de perforación.

### Tratamiento
#### Principios generales en IMA (WSES 2022 / ESVS)
El manejo se resume en la regla de las **4 R**: **Resucitación, Revascularización rápida, Resección del tejido necrótico y Revisión (second-look)**.
1. **Medidas inmediatas:** reanimación con cristaloides balanceados evitando sobrecarga excesiva, corrección de acidosis y potasio, SNG, antibióticos IV de amplio espectro (ceftriaxona + metronidazol o piperacilina-tazobactam) desde la sospecha por la alta translocación bacteriana, y **anticoagulación inmediata con heparina no fraccionada IV** (salvo hemorragia activa amenazante). Evitar vasopresores vasoconstrictores esplácnicos (norepinefrina/vasopresina a dosis altas); si requiere soporte inotrópico preferir dobutamina o milrinona.
2. **Estrategia de revascularización:**
   - En centros híbridos y en pacientes **sin peritonitis**, el abordaje **endovascular primero** (tromboaspiración, trombólisis dirigida por catéter o angioplastia con stent en estenosis ostial trombótica) reduce la mortalidad y la extensión de la resección intestinal.
   - Si existe **peritonitis, perforación o inestabilidad**, se indica **laparotomía exploradora inmediata**. La regla cardinal es **revascularizar primero y resecar después**, ya que segmentos de aspecto isquémico oscuro suelen recuperar perfusión tras restaurar el flujo.
   - **Embolectomía de AMS:** se accede a la base del mesocolon transverso, se realiza arteriotomía transversa de la AMS distal al origen de la cólica media y se extrae el émbolo con catéter de Fogarty 3-4 Fr. En la trombosis ostial se realiza un **stent retrógrado abierto (ROMS)** o un **bypass** aortomesentérico o iliomesentérico (preferiblemente con vena safena autóloga si existe contaminación intestinal).
3. **Control de daños y second-look obligatorio:** se reseca únicamente el intestino francamente necrótico o perforado, dejando los cabos grapados sin realizar anastomosis primaria en el primer tiempo, con cierre abdominal temporal. Se programa una **reexploración quirúrgica a las 24 a 48 horas** para reevaluar la viabilidad real de los segmentos limítrofes, realizar resección adicional mínima si procede y restituir continuidad cuando el paciente esté estable y sin vasopresores. Conservar al menos **100-150 cm de intestino delgado** (o >60-100 cm si se preserva la válvula ileocecal y el colon) es crítico para evitar dependencia permanente de nutrición parenteral.
4. **IMNO:** el tratamiento es primordialmente médico y endovascular: optimizar precarga y gasto cardiaco, suspender digital y vasopresores, anticoagular e iniciar infusión selectiva intraarterial de **papaverina** (30-60 mg/h) o alprostadil. La laparotomía solo se indica ante signos de infarto transmural.
5. **TVM:** la anticoagulación sistémica inmediata resuelve más de 80% de los casos sin cirugía. Si se desarrolla peritonitis o necrosis, resección conservadora + second-look + anticoagulación prolongada (3-6 meses si causa reversible; indefinida si trombofilia primaria).

#### Isquemia mesentérica crónica
Indicada la revascularización en todos los pacientes sintomáticos para prevenir el infarto agudo y revertir la desnutrición. El abordaje de primera línea es la **angioplastia con stent de la AMS** por vía endovascular (menor morbimortalidad temprana); el **bypass quirúrgico** (anterógrado desde aorta supracelíaca o retrógrado) ofrece mayor permeabilidad a largo plazo y se reserva para pacientes jóvenes de bajo riesgo quirúrgico con anatomía desfavorable o falla endovascular.

#### Colitis isquémica
- **No gangrenosa (80-85%):** reposo intestinal, hidratación IV, corrección del factor precipitante (hipotensión, arritmia), antibióticos de amplio espectro en formas moderadas a graves (guías ACG) y vigilancia estrecha. Mejora en 48-72 horas y resuelve en 1-2 semanas.
- **Gangrenosa, pancolitis, colitis isquémica aislada de colon derecho o falla al manejo médico:** resección del segmento colónico afectado con **estoma terminal** (Hartmann o ileostomía terminal), evitando anastomosis primaria en tejido inflamado o hipoperfundido.

### Complicaciones, pronóstico y seguimiento
Las secuelas principales incluyen síndrome de reperfusión con hiperpotasemia y falla multiorgánica, sepsis persistente, fístula o fuga anastomótica, **síndrome de intestino corto** (requiriendo nutrición parenteral domiciliaria) y estenosis colónica fibrosa tardía tras colitis isquémica (10-20%). El pronóstico de la IMA depende directamente del intervalo entre el inicio del dolor y la revascularización. Tras el egreso, los pacientes con EAMS requieren **anticoagulación oral de por vida**; los de TAMS e IMC requieren antiagregación plaquetaria, estatina de alta intensidad, suspensión estricta del tabaco y seguimiento con ultrasonido Doppler o angio-TC de permeabilidad del stent o bypass.

### Referencias
- Bala M, et al. Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery (WSES). World J Emerg Surg 2022.
- Björck M, et al. Editor's Choice – Management of the Diseases of Mesenteric Arteries and Veins: Clinical Practice Guidelines of the European Society for Vascular Surgery (ESVS). Eur J Vasc Endovasc Surg 2017.
- Brandt LJ, et al. ACG Clinical Guideline: Epidemiology, Risk Factors, Patterns of Presentation, Diagnosis, and Management of Colon Ischemia. Am J Gastroenterol 2015.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.
- Brunicardi FC, et al. Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- El signo cardinal temprano de isquemia mesentérica aguda es el **dolor abdominal severo desproporcionado a la exploración física**; cuando aparece peritonitis ya existe necrosis transmural.
- La **angio-TC trifásica** es el estudio de elección en IMA y **no debe retrasarse** por elevación de creatinina; un lactato normal no descarta el diagnóstico.
- En la **embolia de la AMS** el émbolo suele alojarse **distal al origen de la arteria cólica media** respetando el yeyuno proximal; en la **trombosis arterial** se ocluye el **ostium** y se afecta todo el intestino medio.
- Regla quirúrgica en IMA: **revascularizar primero, resecar solo necrosis franca sin anastomosar y realizar second-look a las 24-48 horas**.
- En la **colitis isquémica**, los sitios más vulnerables son el **ángulo esplénico (punto de Griffith)** y la **unión rectosigmoidea (punto de Sudeck)**; el recto suele respetarse por su doble irrigación.
`),
    sheet('int-htdb', '03', 'Hemorragia de tubo digestivo bajo', `
## Hemorragia de tubo digestivo bajo

### Definición
Clásicamente se define como toda pérdida sanguínea originada en el tubo digestivo **distal al ligamento de Treitz**. Sin embargo, las guías contemporáneas del **American College of Gastroenterology (ACG 2023)** subdividen el sangrado digestivo en tres compartimentos anatómicos por sus diferencias diagnósticas y terapéuticas: **hemorragia alta** (proximal al ámpula de Vater / Treitz), **hemorragia de intestino delgado o media** (entre el ámpula de Vater y la válvula ileocecal) y **hemorragia de tubo digestivo bajo (HTDB) propiamente dicha** (colon, recto y conducto anal). En la práctica quirúrgica y en los exámenes de residencia suele mantenerse la definición clásica al evaluar a un paciente con hematoquecia, teniendo siempre presente que **10 a 15% de las hematoquecias graves con inestabilidad hemodinámica proceden de una fuente digestiva alta**.

### Epidemiología
- Representa **20 a 30%** de todas las hemorragias gastrointestinales graves, con una incidencia anual aproximada de 30 a 40 casos por 100,000 adultos, que se multiplica en mayores de 70 años por el envejecimiento poblacional y el uso generalizado de AINE, aspirina, inhibidores P2Y12 y anticoagulantes orales.
- Alrededor de **80 a 85%** de los episodios se **autolimitan espontáneamente** con manejo médico de soporte, aunque la recurrencia puede alcanzar 20-30% según la causa.
- La mortalidad global oscila entre **2 y 4%**, elevándose a más de 10-20% en pacientes ancianos con comorbilidades graves, sangrado intrahospitalario de nueva aparición o necesidad de colectomía de urgencia.

### Etiología por grupo etario y características clínicas
| Causa | Frecuencia aprox. | Perfil clínico y mecanismo | Localización típica |
|---|---|---|---|
| **Enfermedad diverticular** | 30-50% | Sangrado arterial indoloro, súbito y abundante por erosión de un vaso recto en la cúpula del divertículo; cede solo en ~80%, resangra en 20-25% | **Colon derecho (>50% de los sangrados)** pese a que los divertículos son más frecuentes en sigmoides |
| **Colitis isquémica** | 10-20% | Dolor cólico en FII seguido de diarrea sanguinolenta autolimitada en ancianos con enfermedad vascular | Ángulo esplénico y colon descendente |
| **Patología anorrectal** (hemorroides, fisura, úlcera rectal) | 10-20% | Sangrado rojo brillante al final de la evacuación o en el papel; rara vez causa choque (salvo várices rectales o úlcera de Dieulafoy rectal) | Conducto anal y recto distal |
| **Neoplasias colorrectales y pólipos** | 10-15% | Sangrado crónico oculto o intermitente con anemia ferropénica; rara vez masivo | Cualquier segmento colónico |
| **Angiodisplasia (ectasia vascular)** | 5-10% | Sangrado venoso/capilar indoloro, recurrente o subagudo en adultos mayores; asociado a enfermedad renal crónica y estenosis aórtica (**síndrome de Heyde**) | **Ciego y colon ascendente** |
| **Sangrado pospolipectomía** | 2-7% | Ocurre de forma inmediata o tardía hasta 14-21 días después de resección endoscópica | Sitio de polipectomía |
| **Otras** (EII, proctitis actínica, AINE, Meckel, fístula aortoentérica) | 5-10% | **Divertículo de Meckel** es la causa clásica de HTDB indolora en niños y adultos jóvenes (<30 años) por mucosa gástrica ectópica; fístula aortoentérica en portadores de injerto aórtico | Íleon distal (Meckel a ~60 cm de válvula ileocecal), recto (radiación) |

### Fisiopatología
La hemorragia diverticular es de origen **arterial**: al herniarse la mucosa colónica a través de los puntos débiles de la capa muscular por donde penetran los *vasa recta*, estos vasos quedan separados de la luz únicamente por una delgada capa mucosa y sufren traumatismo mecánico crónico con engrosamiento intimal asimétrico y adelgazamiento de la media hasta romperse (sin inflamación diverticular; de hecho, la diverticulitis rara vez produce hemorragia masiva). En contraste, las angiodisplasias son ectasias degenerativas de venas y capilares submucosos debidas a obstrucción venosa intermitente por contracciones de la pared colónica, por lo que su sangrado suele ser venoso, menos brusco pero frecuentemente recidivante. En el síndrome de Heyde, la estenosis aórtica severa produce fragmentación por cizallamiento de los multímeros de alto peso molecular del factor de von Willebrand, agravando el sangrado de las angiodisplasias.

### Cuadro clínico y valoración inicial
La manifestación predominante es la **hematoquecia** (sangre rojo brillante o vino tinto mezclada con coágulos). Las lesiones de colon derecho o intestino delgado con tránsito lento pueden manifestarse como **melena**.

1. **Estabilización (ABC):** colocar dos catéteres venosos periféricos de grueso calibre (16-18 G), monitoreo continuo, cristaloides balanceados según respuesta hemodinámica y tipificación con pruebas cruzadas. Calcular el **índice de choque (FC / PAS)**: un valor **mayor de 1** identifica inestabilidad hemodinámica y sangrado activo de alto riesgo que exige angio-TC urgente en lugar de preparación colónica.
2. **Descartar origen alto:** ante hematoquecia acompañada de inestabilidad hemodinámica, relación BUN/creatinina >30, antecedente de úlcera péptica, cirrosis o uso de AINE, se debe descartar hemorragia digestiva alta mediante **endoscopia digestiva alta** antes de atribuir el cuadro al colon.
3. **Exploración física y estratificación de riesgo:** realizar **tacto rectal y anoscopia** para confirmar la presencia y color de la sangre y descartar patología anorrectal o masa palpable. Las guías ACG 2023 y BSG recomiendan calcular el **puntaje de Oakland** (edad, sexo, antecedente de ingreso por HTDB, hallazgo en tacto rectal, frecuencia cardiaca, presión arterial sistólica y hemoglobina): un puntaje **≤8** identifica pacientes de muy bajo riesgo candidatos a egreso seguro desde urgencias con estudio ambulatorio, mientras que **>8** indica hospitalización.

### Diagnóstico y herramientas de localización
| Estudio | Tasa mínima de sangrado | Ventajas principales | Limitaciones y papel actual (ACG 2023) |
|---|---|---|---|
| **Colonoscopia** (tras preparación con PEG) | No requiere sangrado activo | Diagnóstica, toma biopsias y permite **terapia hemostática directa**; rendimiento diagnóstico 70-90% | Requiere estabilidad hemodinámica y limpieza colónica; ACG 2023 recomienda realizarla durante el internamiento pero **no exige urgencia <24 h** porque no reduce resangrado ni mortalidad frente a >24 h |
| **Angiotomografía (angio-TC)** | **0.3-0.5 mL/min** | Rápida, no invasiva, disponible 24/7, sensibilidad ~85-90% en sangrado activo; localiza el territorio arterial exacto para guiar embolización o cirugía | No es terapéutica; exige sangrado activo en el momento del disparo; nefrotóxica en IRC severa |
| **Angiografía mesentérica selectiva** | **0.5-1.0 mL/min** | Permite **embolización supraselectiva** inmediata con control en 80-90% de los casos | Invasiva; solo se indica si la angio-TC previa muestra extravasación activa o en sangrado masivo refractario |
| **Gammagrafía con eritrocitos marcados (Tc-99m)** | **0.1 mL/min** | Máxima sensibilidad para sangrados intermitentes o lentos; permite rastreos seriados hasta 24 h | **Mala precisión anatómica** (el peristaltismo desplaza la sangre); rara vez guía una colectomía segmentaria por sí sola |
| **Videocápsula / Enteroscopia / Meckel (Tc-99m pertecnetato)** | Variable | Estándar cuando la endoscopia alta y la colonoscopia son negativas (**hemorragia de intestino delgado**) | No sirven en inestabilidad aguda; la gammagrafía de Meckel tiene mayor sensibilidad en niños y jóvenes |

### Tratamiento
#### Manejo médico, metas transfusionales y reversión de anticoagulantes
- **Transfusión restrictiva:** transfundir concentrados eritrocitarios cuando la hemoglobina es **<7 g/dL** (umbral **<8 g/dL** en pacientes con síndrome coronario agudo o cardiopatía isquémica activa), evitando sobretransfundir porque el exceso de volumen puede desplazar coágulos y aumentar el resangrado.
- **Anticoagulantes y antiagregantes (ACG 2023):**
  - **Warfarina:** en hemorragia amenazante para la vida, revertir de inmediato con **concentrado de complejo protrombínico de 4 factores (CCP-4F)** más vitamina K IV (no usar plasma fresco congelado de primera línea si se dispone de CCP). Si el sangrado es leve o moderado y estable, solo suspender y vigilar.
  - **Anticoagulantes orales directos (DOACs):** suspender el fármaco; en sangrado masivo usar agente reversor específico (**idarucizumab** para dabigatrán; **andexanet alfa** o CCP-4F para inhibidores del factor Xa como rivaroxabán y apixabán).
  - **Aspirina:** si es para **prevención secundaria** (cardiopatía isquémica, evento vascular cerebral previo, stent coronario), **no suspenderla** o reanudarla tan pronto se controle el sangrado; si es para prevención primaria, suspenderla definitivamente. En doble antiagregación tras stent coronario reciente, mantener aspirina y consensuar con cardiología la pausa breve del inhibidor P2Y12.

#### Tratamiento endoscópico
En pacientes hemodinámicamente estables se prepara el colon con 4-6 litros de polietilenglicol (por vía oral o SNG) hasta obtener efluente claro. Al identificar estigmas de hemorragia reciente en un divertículo (sangrado activo, vaso visible no sangrante o coágulo adherido), se aplica **hemostasia mecánica con hemoclips** (preferidos en el cuello diverticular por menor riesgo de perforación), **ligadura endoscópica con banda** o inyección de adrenalina combinada con clipaje. En angiodisplasias se emplea **coagulación con plasma de argón (APC)** o sonda bipolar a baja energía. Los polvos hemostáticos tópicos son útiles como rescate temporal en tumores sangrantes.

#### Radiología intervencionista
En pacientes con **inestabilidad hemodinámica (índice de choque >1) o sangrado activo persistente**, el algoritmo actual (ACG 2023) indica **angio-TC inmediata** sin perder tiempo preparando el colon. Si la angio-TC demuestra extravasación de contraste, se pasa de inmediato a **angiografía mesentérica con embolización supraselectiva** (microespirales/coils, partículas de gelatina o pegamento acrílico en los vasos rectos terminales). Logra hemostasia inicial en 80-90% de los casos, con un riesgo actual de isquemia colónica clínicamente relevante menor de 5-10% gracias a los microcatéteres coaxiales.

#### Tratamiento quirúrgico
Hoy menos de 5 a 10% de los pacientes con HTDB requieren cirugía, reservada para:
1. Inestabilidad hemodinámica refractaria a la reanimación pese a medidas iniciales.
2. Sangrado persistente o recurrente con requerimiento transfusional elevado (habitualmente **>6 concentrados eritrocitarios en 24 horas**) tras fracaso o indisponibilidad de endoscopia y angiografía.
3. Perforación, neoplasia obstructiva o colitis isquémica gangrenosa concomitante.

**Principios técnicos quirúrgicos:**
- **Hemorragia localizada preoperatoriamente** (por angio-TC, angiografía o tatuaje endoscópico): realizar **colectomía segmentaria** dirigida, que conlleva baja tasa de resangrado (<10%) y menor morbilidad funcional que una colectomía extensa.
- **Hemorragia colónica no localizada:** realizar **colectomía subtotal (abdominal total)** con anastomosis ileorrectal (en paciente estable, bien perfundido y sin incontinencia) o **ileostomía terminal con cierre del muñón rectal** (en choque o alto riesgo de fuga).
- **Regla prohibitiva clásica:** **jamás realizar una hemicolectomía derecha o izquierda "a ciegas"** sin localización confirmada, ya que conlleva una tasa de resangrado de **35 a 50%** y una mortalidad prohibitiva. Cuando el sangrado no parece colónico en quirófano, se puede recurrir a **enteroscopia intraoperatoria** para descartar lesiones del intestino delgado.

### Complicaciones, pronóstico y seguimiento
Las complicaciones derivadas del episodio y de sus intervenciones incluyen choque hipovolémico, lesión renal aguda, infarto agudo de miocardio por demanda, isquemia colónica postembolización, perforación endoscópica, diarrea crónica tras colectomía subtotal y fuga anastomótica. Una vez controlado el evento agudo, el paciente requiere colonoscopia completa electiva si no se realizó (para descartar neoplasia), optimización del riesgo trombótico frente al hemorrágico para reanudar anticoagulación (idealmente dentro de 7 días en alto riesgo embólico) y suspensión definitiva de AINE innecesarios.

### Referencias
- Sengupta N, et al. Management of Patients With Acute Lower Gastrointestinal Bleeding: An Updated ACG Guideline. Am J Gastroenterol 2023.
- Oakland K, et al. Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology (BSG). Gut 2019.
- Triantafyllou K, et al. Diagnosis and management of acute lower gastrointestinal bleeding: European Society of Gastrointestinal Endoscopy (ESGE) Guideline. Endoscopy 2021.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.
- Brunicardi FC, et al. Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- La causa más frecuente de HTDB grave en adultos mayores es la **enfermedad diverticular**, y aunque los divertículos predominan en el sigmoides, **más de 50% de los sangrados diverticulares provienen del colon derecho** (sangrado arterial indoloro).
- Ante hematoquecia masiva con inestabilidad hemodinámica, **descartar siempre una hemorragia digestiva alta** (10-15% de los casos).
- En sangrado activo con **índice de choque >1**, el primer estudio es la **angio-TC** (detecta 0.3-0.5 mL/min) seguida de **embolización supraselectiva**, sin demorar por preparación colónica.
- La gammagrafía con eritrocitos marcados detecta sangrados de hasta **0.1 mL/min**, pero su localización anatómica es imprecisa para dirigir resecciones segmentarias.
- En cirugía de urgencia por HTDB: **colectomía segmentaria si el sitio está localizado**; **colectomía subtotal si no se localizó**; nunca realizar una hemicolectomía a ciegas.
`),
  ],

  'ap-r3-higado': [
    sheet('hig-icterico', '01', 'Síndrome ictérico', `
## Síndrome ictérico

### Definición
El **síndrome ictérico** es el conjunto de signos y síntomas derivados de la elevación de la bilirrubina sérica (**hiperbilirrubinemia >1.2 mg/dL**), que se hace clínicamente evidente como coloración amarillenta de escleras, mucosa sublingual y piel cuando supera **2.5 a 3.0 mg/dL**. Para el cirujano general de tercer año, el objetivo central del abordaje no es solo clasificar el mecanismo de la ictericia, sino diferenciar con rapidez y precisión la **ictericia médica (prehepática o hepatocelular)** de la **ictericia quirúrgica u obstructiva (posthepática)**, distinguir obstrucción benigna de maligna y reconocer de inmediato la **colangitis aguda**, que constituye una urgencia vital.

### Metabolismo de la bilirrubina y fisiopatología de la colestasis
La bilirrubina proviene en ~80-85% del catabolismo de la hemoglobina de eritrocitos seniles en el sistema reticuloendotelial y en ~15-20% de eritropoyesis ineficaz y hemoproteínas hepáticas (citocromos, mioglobina).
1. **Formación y transporte:** la hemo-oxigenasa transforma el grupo hemo en biliverdina y la biliverdina reductasa en **bilirrubina no conjugada (indirecta)**, que es liposoluble, tóxica para el sistema nervioso central y circula firmemente unida a la albúmina (por lo cual no se filtra en el glomérulo y **no produce coluria**).
2. **Captación y conjugación hepática:** ingresa al hepatocito por transportadores de aniones orgánicos (OATP) y es conjugada en el retículo endoplásmico por la enzima **UDP-glucuroniltransferasa (UGT1A1)** con ácido glucurónico para formar **bilirrubina conjugada (directa)**, hidrosoluble y no tóxica.
3. **Excreción canalicular (paso limitante):** es transportada activamente contra gradiente hacia el canalículo biliar mediante la bomba dependiente de ATP **MRP2 (ABCC2)**. Por ser el paso más sensible a hipoxia, sepsis o inflamación, tanto el daño hepatocelular severo como la obstrucción mecánica elevan la bilirrubina directa.
4. **Circulación enterohepática:** en el íleon y colon las bacterias intestinales convierten la bilirrubina conjugada en **urobilinógeno** (80% excretado en heces como **estercobilina** que da el color café; ~20% reabsorbido a la circulación portal y excretado parcialmente por orina).

**Consecuencias fisiopatológicas de la ictericia obstructiva prolongada (relevancia quirúrgica):**
- **Coagulopatía:** la ausencia de sales biliares en el duodeno impide la absorción de vitaminas liposolubles (**A, D, E y K**), agotando los factores dependientes de vitamina K (**II, VII, IX y X**, además de proteínas C y S) y prolongando el INR.
- **Disfunción renal y sepsis (endotoxemia portal):** la falta de sales biliares intraluminales favorece el sobrecrecimiento bacteriano y la pérdida de barrera mucosa, con paso de endotoxinas hacia la porta; al estar deprimida la función de las células de Kupffer, las endotoxinas pasan a la circulación sistémica provocando vasoconstricción renal, nefropatía por cilindros biliares (**nefropatía colémica**) y mayor susceptibilidad a infección posoperatoria.
- **Disfunción hepatocelular, prurito e inmunosupresión:** el acúmulo intracelular de ácidos biliares hidrofóbicos induce apoptosis hepatocitaria, altera la cicatrización, genera prurito intenso (mediado por ácido lisofosfatídico y autotaxina) y puede progresar en meses a **cirrosis biliar secundaria**.

### Clasificación fisiopatológica y perfil diagnóstico
| Categoría | Fracción predominante | Bioquímica clave (índice R*) | Orina y heces | Causas principales |
|---|---|---|---|---|
| **Prehepática** | Indirecta (>80% del total) | AST/ALT, FA y GGT normales; ↑ LDH, ↑ reticulocitos, ↓ haptoglobina | Orina normal (**sin coluria**); heces normales o hipercolia | Hemólisis (esferocitosis, autoinmune, microangiopática), reabsorción de grandes hematomas, eritropoyesis ineficaz, **síndrome de Gilbert** y Crigler-Najjar |
| **Hepática (hepatocelular)** | Mixta (directa e indirecta) | **↑↑ AST/ALT** (R ≥5); FA normal o <2-3× LSN; ↓ albúmina e INR prolongado sin respuesta a vitamina K | Coluria variable; heces normales o hipocólicas | Hepatitis virales (A, B, C, E), hepatitis alcohólica (AST:ALT >2:1), toxicidad farmacológica (DILI), cirrosis, isquemia hepática, Dubin-Johnson y Rotor (directa pura) |
| **Posthepática / Colestásica (obstructiva)** | **Directa (>50% del total)** | **↑↑ FA y GGT** (R ≤2); transaminasas normales o leves (salvo pico fugaz en litiasis impactada) | **Coluria intensa y acolia** (heces color masilla) | **Benignas:** coledocolitiasis, síndrome de Mirizzi, estenosis posquirúrgica, pancreatitis crónica, CEP, parásitos (*Ascaris*). **Malignas:** cáncer de cabeza de páncreas, colangiocarcinoma, ampuloma, cáncer de vesícula, adenopatías hiliares |

*Índice R = (ALT / LSN de ALT) ÷ (FA / LSN de FA): R ≥5 patrón hepatocelular; R ≤2 patrón colestásico; R entre 2 y 5 patrón mixto.*

**Trastornos hereditarios de la bilirrubina (diagnóstico diferencial obligado):**
- **Síndrome de Gilbert:** autosómico recesivo, afecta a 5-10% de la población por reducción parcial de UGT1A1; hiperbilirrubinemia indirecta leve (<3-4 mg/dL) desencadenada por ayuno, estrés quirúrgico o infección, con PFH normales y pronóstico completamente benigno.
- **Crigler-Najjar tipos I y II:** ausencia total o severa de UGT1A1 (ictericia indirecta grave desde la infancia; el tipo II responde a fenobarbital).
- **Dubin-Johnson y Rotor:** defectos benignos en excreción/almacenamiento de bilirrubina conjugada (hiperbilirrubinemia directa con FA y GGT normales; en Dubin-Johnson el hígado macroscópico es negro por pigmento melánico y la biopsia es característica).

### Cuadro clínico
La historia clínica y la exploración física orientan la etiología en más de 75% de los casos antes de pedir estudios:
- **Obstrucción benigna (coledocolitiasis):** dolor cólico en hipocondrio derecho o epigastrio, antecedente de intolerancia a colecistoquinéticos, **ictericia fluctuante** y fiebre con escalofríos si existe colangitis (**tríada de Charcot**: dolor en HD, fiebre e ictericia; **péntada de Reynolds**: agrega hipotensión y alteración neurológica).
- **Obstrucción maligna (neoplasia periampular o biliar):** ictericia **progresiva e indolora**, prurito incapacitante con lesiones por rascado, coluria, acolia, pérdida ponderal significativa, anorexia, diabetes de inicio reciente en mayores de 50 años y dolor dorsal sordo (invasión retroperitoneal).
- **Signo de Courvoisier-Terrier:** **vesícula biliar palpable, distendida e indolora en presencia de ictericia**. Traduce obstrucción maligna distal al conducto cístico (p. ej., adenocarcinoma de cabeza de páncreas), porque una vesícula sana sin fibrosis previa puede distenderse libremente, a diferencia de la vesícula crónica y fibrosa de la litiasis.
- **Ampuloma:** clásicamente produce **ictericia fluctuante** (por necrosis y esfacelo periódico del tumor hacia el duodeno) acompañada de anemia ferropénica o melena (**heces plateadas de Thomas** al mezclarse acolia con sangre digerida).
- **Estigmas de hepatopatía crónica:** telangiectasias, eritema palmar, ginecomastia, ascitis, circulación colateral, esplenomegalia y asterixis orientan a causa hepatocelular o descompensación cirrótica.

### Diagnóstico y algoritmo de imagen
1. **Pruebas de laboratorio iniciales:** biometría hemática, pruebas de función hepática completas (bilirrubina total, directa e indirecta, AST, ALT, FA, GGT), albúmina, INR/TP, creatinina y amilasa/lipasa.
   - **Confirmación de origen biliar de FA:** elevarse junto con **GGT** (o 5'-nucleotidasa) descarta origen óseo o placentario.
   - **Prueba de Koller:** la administración de vitamina K parenteral (10 mg/día por 3 días) corrige el INR en la colestasis obstructiva por malabsorción, pero no lo corrige en la insuficiencia hepatocelular grave.
   - **Marcadores tumorales:** el **CA 19-9** apoya la sospecha y seguimiento de neoplasias pancreatobiliares, pero presenta **falsos positivos importantes en cualquier colestasis benigna** (debe reinterpretarse tras el drenaje biliar) y es indetectable en el **5-10% de la población con fenotipo sanguíneo Lewis negativo (a-b-)**. Solicitar **IgG4** si se sospecha colangiopatía o pancreatitis autoinmune (simula neoplasia).
2. **Ultrasonido abdominal (estudio inicial de elección):** accesible, rápido y sin radiación. Diferencia con sensibilidad >90% la ictericia obstructiva de la no obstructiva al evaluar el calibre de la vía biliar intrahepática y del colédoco (**normal ≤6 mm**; se acepta +1 mm por década arriba de 60 años y hasta 8-10 mm en poscolecistectomizados). Identifica cálculos vesiculares, masa hepática y nivel aproximado de la obstrucción, pero tiene baja sensibilidad para visualizar el colédoco distal y la cabeza del páncreas por interposición de gas duodenal.
3. **Tomografía computarizada (TC) trifásica con protocolo pancreatobiliar:** indispensable ante sospecha de neoplasia periampular o colangiocarcinoma. **Regla crítica de estadificación:** debe realizarse **ANTES de cualquier CPRE o colocación de prótesis biliar**, ya que la inflamación posprocedimiento y el artefacto metálico/plástico impiden evaluar correctamente el contacto vascular (arteria y vena mesentérica superior, tronco celíaco, vena porta) y la resecabilidad.
4. **Colangiorresonancia magnética (CRM):** estudio no invasivo de elección para obtener un mapa anatómico detallado de todo el árbol biliar, definir el nivel exacto en estenosis hiliares (Bismuth-Corlette) y diagnosticar coledocolitiasis con sensibilidad >90%.
5. **Ultrasonido endoscópico (USE):** la herramienta de mayor resolución para lesiones pequeñas (<2 cm) de cabeza de páncreas, ámpula y colédoco distal; permite tomar biopsia por aspiración/aguja fina (BAAF/BANC) con mínimo riesgo de siembra peritoneal.
6. **CPRE y colangiografía percutánea transhepática (CTPH):** actualmente son procedimientos **estrictamente terapéuticos** (extracción de cálculos, drenaje con prótesis, cepillado/biopsia en obstrucción irresecable) y no deben solicitarse con fines puramente diagnósticos por su riesgo de pancreatitis, hemorragia, perforación y colangitis.

### Preparación preoperatoria y drenaje biliar
El paciente ictérico que será sometido a cirugía mayor requiere optimización específica: hidratación IV para prevenir nefropatía colémica, corrección del INR con **vitamina K** (y plasma o CCP si requiere intervención urgente), profilaxis antibiótica dirigida a enterobacterias y valoración nutricional.

**¿Cuándo drenar la vía biliar antes de cirugía en ictericia maligna?**
El ensayo clínico aleatorizado **DROP (van der Gaag et al., NEJM 2010)** demostró que el **drenaje biliar preoperatorio de rutina** en pacientes con cáncer de cabeza de páncreas resecable y bilirrubina <14.6 mg/dL **aumenta significativamente las complicaciones graves (74% frente a 39%)**, principalmente colangitis y complicaciones de la CPRE, sin mejorar la mortalidad quirúrgica. Por ello, las guías NCCN y ESGE reservan el drenaje preoperatorio únicamente para:
1. **Colangitis aguda** (indicación absoluta e inmediata).
2. **Candidatos a quimioterapia neoadyuvante** (requieren bilirrubina <1.5-2 mg/dL).
3. **Hiperbilirrubinemia intensa** (habitualmente **>12-15 mg/dL**) cuando la cirugía no puede programarse de manera expedita o se planea hepatectomía mayor (p. ej., tumor de Klatskin que requiere embolización portal).
4. **Prurito intratable**, desnutrición severa o disfunción renal atribuible a colestasis.

Cuando se requiere drenaje en obstrucción distal maligna, se prefiere un **stent metálico autoexpandible corto** (cubierto o descubierto según resecabilidad y protocolo multidisciplinario) por menor tasa de oclusión que los stents plásticos.

### Tratamiento etiológico y paliativo
- **Benigno:** CPRE + colecistectomía en coledocolitiasis; descompresión urgente + antibióticos en colangitis; reconstrucción biliodigestiva (hepaticoyeyunoanastomosis en Y de Roux) en estenosis benignas refractarias o lesiones de vía biliar.
- **Maligno resecable:** cirugía oncológica con margen R0 según localización (pancreatoduodenectomía de Whipple en cabeza de páncreas/ampuloma/CCA distal; resección hepática y biliar en Klatskin o cáncer de vesícula).
- **Maligno irresecable (paliación):** drenaje endoscópico con prótesis metálica autoexpandible permanente (preferible a la derivación quirúrgica por menor morbilidad); la doble derivación quirúrgica (hepaticoyeyunoanastomosis + gastroyeyunoanastomosis) solo se reserva si se descubre irresecabilidad durante una laparotomía exploradora. Para el prurito refractario se emplean colestiramina, rifampicina, naltrexona o sertralina tras asegurar drenaje biliar adecuado.

### Complicaciones y pronóstico
Las complicaciones del síndrome ictérico no resuelto comprenden colangitis séptica, hemorragia digestiva o quirúrgica por hipoprotrombinemia, lesión renal aguda, desnutrición severa y cirrosis biliar secundaria. El pronóstico depende enteramente de la causa subyacente: excelente en obstrucción litiásica o hepatitis autolimitada, y sombrío en neoplasias pancreatobiliares avanzadas, donde solo la resección R0 ofrece posibilidad curativa.

### Referencias
- van der Gaag NA, et al. Preoperative biliary drainage for cancer of the head of the pancreas (DROP trial). N Engl J Med 2010.
- Dumonceau JM, et al. Indications, choices, and outcomes of endoscopic biliary stenting: ESGE Clinical Guideline. Endoscopy 2018.
- NCCN Clinical Practice Guidelines in Oncology: Pancreatic Adenocarcinoma & Biliary Tract Cancers, 2024-2025.
- Jarnagin WR, et al. Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed. Elsevier, 2022.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.

### Perlas de examen
- La ictericia se vuelve clínicamente visible a partir de **2.5-3.0 mg/dL**; la hiperbilirrubinemia indirecta **nunca produce coluria** porque circula unida a albúmina.
- El **signo de Courvoisier-Terrier** (vesícula palpable indolora + ictericia) orienta a obstrucción maligna distal al conducto cístico; la **ictericia fluctuante con anemia o melena** es clásica del **ampuloma**.
- En sospecha de ictericia obstructiva maligna, realizar siempre **TC trifásica ANTES de colocar una prótesis por CPRE** para no distorsionar la estadificación vascular.
- El **CA 19-9** puede elevarse falsamente por colestasis benigna y es falsamente negativo en **5-10% de pacientes con fenotipo Lewis negativo**.
- No indicar **drenaje biliar preoperatorio de rutina** en cáncer periampular resecable sin colangitis (ensayo **DROP**): incrementa complicaciones infecciosas sin mejorar supervivencia.
`),
    sheet('hig-absceso', '02', 'Absceso hepático y quistes hepáticos', `
## Absceso hepático y quistes hepáticos

### Definición
Las lesiones focales infecciosas y quísticas del hígado constituyen un motivo frecuente de interconsulta a cirugía general en México. El **absceso hepático** es una colección localizada de material purulento o necrótico dentro del parénquima hepático secundaria a invasión bacteriana (**piógeno**), parasitaria (**amebiano** por *Entamoeba histolytica*) o **fúngica**. Los **quistes hepáticos** comprenden un espectro que abarca lesiones benignas congénitas (**quistes simples** y **enfermedad hepática poliquística**), lesiones parasitarias (**quiste hidatídico** por *Echinococcus granulosus*) y lesiones neoplásicas con potencial maligno (**neoplasia quística mucinosa hepática**, antes llamada cistoadenoma/cistoadenocarcinoma biliar), cuya diferenciación preoperatoria es indispensable porque el tratamiento quirúrgico es radicalmente distinto.

### Epidemiología
- **Absceso hepático piógeno (AHP):** incidencia de 2 a 4 casos por 100,000 habitantes al año en Norteamérica y Europa, y mayor en Asia. Afecta predominantemente a adultos mayores de **50-60 años** sin claro predominio sexual; los factores de riesgo principales son patología biliar obstructiva, diabetes mellitus, cirrosis, inmunosupresión, neoplasia pancreatobiliar y antecedente de instrumentación biliar o derivación biliodigestiva.
- **Absceso hepático amebiano (AHA):** sigue siendo altamente prevalente en **México**, Centroamérica, Sudamérica e India. Afecta de manera característica a **hombres jóvenes de 20 a 45 años** (relación hombre:mujer de 7-10:1) con antecedente de alcoholismo o condiciones sanitarias deficientes; es la manifestación extraintestinal más común de la amebiasis invasora (<1% de los infectados por *E. histolytica*).
- **Quistes simples:** presentes en 2 a 5% de la población adulta (hasta 18% en series tomográficas), más frecuentes en mujeres mayores de 50 años y asintomáticos en >90%.
- **Quiste hidatídico:** endémico en regiones ganaderas de Sudamérica, cuenca mediterránea, Medio Oriente y zonas rurales de México; causado por la fase larvaria de *Echinococcus granulosus* (el perro es el huésped definitivo, el ganado ovino/bovino el intermediario y el humano es un huésped intermediario accidental al ingerir huevos).

### Fisiopatología y microbiología
- **Absceso piógeno:** las bacterias alcanzan el hígado por cinco vías:
  1. **Biliar ascendente (40-50%, causa más frecuente hoy):** secundaria a colangitis, coledocolitiasis, estenosis benigna o tumor biliar.
  2. **Vena porta (pileflebitis, 15-20%):** desde focos abdominales (diverticulitis, apendicitis perforada, enfermedad inflamatoria intestinal, cáncer colónico).
  3. **Arteria hepática (10-15%):** bacteriemia sistémica (endocarditis, neumonía, osteomielitis).
  4. **Extensión por contigüidad o trauma/iatrogenia (10%):** colecistitis perforada, úlcera perforada, ablación por radiofrecuencia, quimioembolización.
  5. **Criptogénica (15-20%).**
  En Occidente y México predominan infecciones **polimicrobianas** por enterobacterias (*Escherichia coli*, *Klebsiella pneumoniae*), estreptococos del grupo *anginosus/milleri*, *Enterococcus* y anaerobios (*Bacteroides fragilis*). Destaca el **síndrome invasivo por *Klebsiella pneumoniae* hipervirulenta (serotipos K1/K2)**, monomicrobiano en diabéticos, capaz de originar metástasis sépticas a ojo (**endoftalmitis**) y sistema nervioso central.
- **Absceso amebiano:** los trofozoítos de *E. histolytica* invaden la mucosa del ciego y colon ascendente y viajan por la vena mesentérica superior hacia la vena porta. Por el **flujo laminar portal**, la sangre mesentérica superior se dirige preferentemente al **lóbulo hepático derecho (75-85% de los casos)**. Los trofozoítos inducen necrosis licuefactiva por contacto enzimático sin gran infiltrado neutrofílico, produciendo un líquido espeso, inodoro, de color café rojizo (**"pasta de anchoas"**) que suele ser estéril y donde los parásitos se ubican únicamente en la pared periférica.
- **Quiste hidatídico:** la oncosfera atraviesa la pared intestinal y llega al hígado (60-70% de los casos; pulmón 20-30%). Crece lentamente formando tres capas: el **periquiste** (cápsula fibrosa generada por el huésped), la **membrana laminar** (acelular, blanca y elástica) y la **membrana germinativa** (interna, productora de vesículas hijas y protoescólices o "arena hidatídica"). El líquido quístico es altamente antigénico y su ruptura provoca choque anafiláctico y siembra peritoneal.

### Comparación clínica: absceso piógeno frente a absceso amebiano
| Característica | Absceso hepático piógeno | Absceso hepático amebiano |
|---|---|---|
| **Perfil típico** | >50-60 años, diabético, patología biliar o neoplasia; sin predominio claro por sexo | Hombre joven (20-45 años), zona endémica, antecedente de alcoholismo |
| **Número y ubicación** | Frecuentemente **múltiples** (~50%); ambos lóbulos | Habitualmente **único (>80%)** en **lóbulo derecho** (segmentos VI-VIII) |
| **Presentación** | Fiebre con escalofríos, dolor en HD, **ictericia (25-50%)**, sepsis más frecuente | Fiebre, dolor en HD irradiado a hombro, hepatomegalia dolorosa; disentería previa solo en 10-30%; ictericia rara |
| **Laboratorio** | Leucocitosis marcada, ↑ FA y bilirrubinas, hemocultivos positivos en 40-50% | Leucocitosis sin eosinofilia, ↑ FA; serología **ELISA IgG positiva (>90-95%)** después de la primera semana |
| **Aspirado** | Purulento, fétido, polimicrobiano en tinción de Gram y cultivo | "Pasta de anchoas" inodora, estéril (trofozoítos raros en el centro líquido) |
| **Tratamiento de primera línea** | **Antibiótico IV amplio espectro + drenaje percutáneo** (si >3-5 cm) | **Metronidazol** + amebicida luminal; drenaje solo en casos seleccionados |

### Clasificación OMS-IWGE del quiste hidatídico hepático
| Estadio OMS | Apariencia ecográfica | Estado biológico | Conducta terapéutica habitual |
|---|---|---|---|
| **CE1** | Quiste unilocular anecoico con pared visible ("signo de la tormenta de nieve") | Activo | Albendazol solo (<5 cm) o **PAIR + albendazol** (>5 cm) |
| **CE2** | Quiste multivesicular con vesículas hijas ("roseta" o "panal de abejas") | Activo | **Cirugía + albendazol** (PAIR tiene alta recurrencia) |
| **CE3a** | Membrana desprendida flotando en líquido ("signo del nenúfar / water-lily") | Transicional | **PAIR + albendazol** (o cirugía si es muy grande) |
| **CE3b** | Vesículas hijas dentro de matriz sólida | Transicional | **Cirugía + albendazol** (pobre respuesta a PAIR) |
| **CE4** | Contenido heterogéneo sólido sin vesículas hijas ("ovillo de lana") | Inactivo | **Vigilancia expectante** ("watch and wait") |
| **CE5** | Pared densamente calcificada en cáscara de huevo | Inactivo | **Vigilancia expectante** (no requiere intervención) |

### Cuadro clínico y diagnóstico
- **Abscesos:** fiebre (90%), dolor constante en hipocondrio derecho, ataque al estado general, náusea, anorexia, hepatomegalia dolorosa a la puñopercusión y derrame pleural derecho reactivo con elevación del hemidiafragma. El **ultrasonido** es el estudio inicial (sensibilidad 85-95%), pero la **TC de abdomen con contraste IV** es el estándar para caracterizar número, tabicaciones, realce periférico en anillo con edema perilesional (**signo del doble blanco o double-target sign** y **signo del racimo o cluster sign** en el piógeno), gas intraabsceso y foco causal abdominal (colecistitis, diverticulitis, tumor colónico). Tomar hemocultivos antes de antibióticos y realizar **aspiración guiada por imagen** para Gram y cultivo en sospecha de AHP. En sospecha de AHA, solicitar **serología IgG anti-*E. histolytica* por ELISA** (recordar que puede ser negativa en los primeros 7 días y permanece positiva años en zonas endémicas).
- **Quistes:** los quistes simples son anecoicos, uniloculares, de pared imperceptible, sin tabiques ni nódulos murales y sin realce con contraste. La presencia de **tabiques gruesos, calcificaciones irregulares, nódulos murales o realce de la pared** obliga a sospechar **neoplasia quística mucinosa (cistoadenoma/cistoadenocarcinoma)**. En el quiste hidatídico, la serología apoya el diagnóstico (aunque hasta 20% son seronegativos), la eosinofilia aparece en <30% y está **estrictamente contraindicada la biopsia o punción sin cobertura antiparasitaria ni técnica controlada** por riesgo de choque anafiláctico y siembra peritoneal.

### Tratamiento
#### Absceso hepático piógeno
1. **Antibioticoterapia IV empírica inmediata** tras hemocultivos: cobertura contra gramnegativos, anaerobios y estreptococos (p. ej., **ceftriaxona o cefotaxima + metronidazol**, o **piperacilina-tazobactam**, o carbapenémico en sepsis grave/origen nosocomial). Ajustar según cultivos; duración habitual de **2 a 4 semanas** (inicialmente IV y transición a vía oral cuando existe mejoría clínica, afebril >48 h y descenso de leucocitos).
2. **Drenaje:** abscesos únicos pequeños (**<3 cm**) pueden responder solo a antibióticos; abscesos **de 3 a 5 cm** se tratan con aspiración percutánea con aguja (puede repetirse); abscesos **>5 cm** requieren **colocación de catéter de drenaje percutáneo guiado por USG o TC** (éxito >85-90%).
3. **Drenaje quirúrgico** (laparoscópico o abierto): reservado para abscesos rotos con peritonitis, multiloculados con contenido espeso que fallan al drenaje percutáneo, localización inaccesible o cuando existe patología quirúrgica concomitante (colecistitis complicada, diverticulitis perforada, obstrucción biliar no resuelta por CPRE).
4. **Tratar siempre el foco causal:** drenar la vía biliar obstruida (CPRE) y, en AHP criptogénico en adultos mayores, realizar **colonoscopia electiva** tras la resolución porque se asocia a cáncer colorrectal oculto.

#### Absceso hepático amebiano
- **Tratamiento médico curativo en >90%:** **metronidazol 750 mg VO o IV cada 8 horas por 7 a 10 días** (alternativa: tinidazol 2 g/día por 3-5 días). Debe seguirse obligatoriamente de un **amebicida intraluminal** (**paromomicina** 25-35 mg/kg/día dividido en 3 dosis por 7 días, diyodohidroxiquinoleína o teclozán) para erradicar quistes intestinales y prevenir recaídas. La mejoría clínica (desaparición de fiebre y dolor) ocurre típicamente en **48 a 72 horas**.
- **Indicaciones de aspiración o drenaje percutáneo en AHA:**
  1. Falta de respuesta clínica tras **72 horas** de metronidazol adecuado (descartar sobreinfección bacteriana o error diagnóstico).
  2. **Riesgo inminente de ruptura:** absceso grande (**>5-10 cm**, especialmente >10 cm) con borde de parénquima hepático residual <1 cm.
  3. **Absceso del lóbulo izquierdo** por el riesgo catastrófico de ruptura hacia el **pericardio** (taponamiento cardiaco).
  4. Duda diagnóstica seria con absceso piógeno o embarazo con intolerancia a fármacos.
- La cirugía se reserva exclusivamente para ruptura libre a peritoneo con peritonitis o ruptura a pericardio.

#### Absceso hepático fúngico
Ocurre en pacientes con neutropenia prolongada o leucemia (habitualmente *Candida* spp. como lesiones múltiples en "ojo de buey"); el manejo es médico con antifúngicos sistémicos (equinocandina o anfotericina B liposomal seguida de fluconazol prolongado), rara vez quirúrgico.

#### Quistes hepáticos
- **Quiste simple:** si es asintomático, **no requiere tratamiento ni vigilancia periódica**. Si es sintomático (>5-8 cm con dolor, saciedad temprana o compresión biliar), el tratamiento de elección es la **fenestración o destechamiento laparoscópico amplio** con envío de la pared a patología para descartar neoplasia (la aspiración simple tiene recurrencia cercana a 100%).
- **Enfermedad hepática poliquística:** manejo conservador (análogos de somatostatina en casos seleccionados); fenestración en quistes dominantes, resección hepática parcial o trasplante hepático en hepatomegalia incapacitante con desnutrición o hipertensión portal.
- **Neoplasia quística mucinosa (cistoadenoma biliar):** **nunca fenestrar ni aspirar** por recurrencia segura y riesgo de transformación a cistoadenocarcinoma; exige **resección quirúrgica completa (enucleación o hepatectomía)** con márgenes libres.
- **Quiste hidatídico:** todo procedimiento intervencionista o quirúrgico debe acompañarse de **albendazol perioperatorio** (400 mg VO cada 12 h iniciando al menos 4 días antes — idealmente 1-4 semanas — y continuando 1-3 meses después) para inactivar protoescólices y evitar siembra.
  - **PAIR** (*Punción, Aspiración, Inyección de escolicida y Reaspiración*): indicado en estadios **CE1 y CE3a** >5 cm sin comunicación cistobiliar (verificar ausencia de bilis en aspirado).
  - **Cirugía** (indicada en CE2, CE3b, quistes >10 cm, superficiales con riesgo de ruptura, infectados o con fístula cistobiliar): puede ser conservadora (destechamiento + evacuación + manejo de cavidad con omentoplastia y cierre de comunicaciones biliares) o radical (**periquistectomía total o hepatectomía**, menor tasa de recurrencia y fuga biliar). Proteger el campo quirúrgico con compresas empapadas en **solución salina hipertónica al 20%** o cetrimida; **nunca inyectar alcohol absoluto ni formol si se sospecha fístula biliar** por el riesgo de **colangitis esclerosante cáustica** irreversible.

### Complicaciones y seguimiento
Los abscesos no tratados pueden romperse a cavidad pleural o árbol bronquial (produciendo empiema o **vómica achocolatada** en el AHA), cavidad peritoneal (peritonitis aguda) o saco pericárdico (taponamiento cardiaco letal en abscesos izquierdos). Tras el tratamiento del AHA, la resolución radiológica de la cavidad es muy lenta (3 a 12 meses), por lo que **no se deben repetir imágenes de rutina para confirmar desaparición si el paciente está asintomático**. En el quiste hidatídico se requiere seguimiento serológico y ecográfico por al menos **5 años** para detectar recurrencias.

### Referencias
- Brunetti E, et al. Expert consensus for the diagnosis and treatment of cystic and alveolar echinococcosis in humans (WHO-IWGE). Acta Trop 2010.
- European Association for the Study of the Liver (EASL). Clinical Practice Guidelines on the management of cystic liver diseases. J Hepatol 2022.
- GPC CENETEC/IMSS: Diagnóstico y tratamiento del absceso hepático amebiano no complicado.
- Jarnagin WR, et al. Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed. Elsevier, 2022.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.

### Perlas de examen
- El **absceso hepático amebiano** afecta típicamente a hombres jóvenes como lesión **única en el lóbulo derecho**; su tratamiento es **metronidazol + amebicida luminal** (paromomicina/diyodohidroxiquinoleína) y **no se drena de rutina**.
- Las indicaciones de drenaje percutáneo en el absceso amebiano son: **lóbulo izquierdo** (riesgo de ruptura a pericardio), **tamaño >5-10 cm con riesgo de ruptura**, falla clínica a las **72 horas** o duda con piógeno.
- La causa más frecuente hoy del **absceso hepático piógeno** es la **vía biliar ascendente**; el manejo exige **antibióticos IV + drenaje percutáneo** (si >3-5 cm) y erradicar el foco causal.
- En el **quiste hidatídico**, nunca puncionar ni biopsiar sin cobertura previa con **albendazol**; evitar escolicidas cáusticos si existe **fístula cistobiliar** por riesgo de colangitis esclerosante química.
- Una lesión quística hepática con **tabiques gruesos o nódulos murales** sugiere **neoplasia quística mucinosa** y exige **resección completa**, nunca fenestración laparoscópica.
`),
    sheet('hig-tumores', '03', 'Tumores benignos hepáticos y hepatocarcinoma', `
## Tumores benignos hepáticos, hepatocarcinoma y metástasis

### Definición
Las neoplasias hepáticas se dividen en **benignas** (hemangioma cavernoso, hiperplasia nodular focal y adenoma hepatocelular) y **malignas**, las cuales pueden ser **primarias** — encabezadas por el **carcinoma hepatocelular (CHC)** (80-85%) y el colangiocarcinoma intrahepático (10-15%) — o **secundarias (metástasis hepáticas)**, que en conjunto constituyen los tumores hepáticos malignos más frecuentes en la práctica quirúrgica, siendo el **cáncer colorrectal** su origen principal y la indicación más común de resección hepática oncológica.

### Epidemiología
- **Tumores benignos:** el **hemangioma cavernoso** es el tumor hepático benigno más común (prevalencia 1-7% en población general, predominio femenino 3-5:1). La **hiperplasia nodular focal (HNF)** ocupa el segundo lugar (0.5-3%, mujeres jóvenes de 20-50 años) y carece de potencial maligno. El **adenoma hepatocelular (AHC)** es mucho menos frecuente (3-4 por 100,000 usuarias prolongadas de anticonceptivos orales combinados), también asociado a esteroides anabólicos, obesidad/síndrome metabólico y glucogenosis tipos I y III.
- **Carcinoma hepatocelular (CHC):** sexta neoplasia más frecuente y tercera causa de muerte por cáncer en el mundo. En 80 a 90% de los casos se desarrolla sobre un **hígado cirrótico** (virus de hepatitis B y C, alcohol y, con crecimiento acelerado en México, enfermedad hepática esteatósica asociada a disfunción metabólica — MASLD/MASH). El **VHB** es oncogénico directo por integración en el genoma y puede causar CHC sin cirrosis previa.
- **Metástasis hepáticas de cáncer colorrectal (MHCCR):** aproximadamente 15-25% de los pacientes con CCR presentan metástasis hepáticas sincrónicas al diagnóstico y otro 20-25% las desarrollarán de forma metacrónica.

### Tumores benignos hepáticos: diagnóstico diferencial y conducta
| Característica | Hemangioma cavernoso | Hiperplasia nodular focal (HNF) | Adenoma hepatocelular (AHC) |
|---|---|---|---|
| **Patogenia** | Malformación vascular venosa congénita de crecimiento lento | Respuesta hiperplásica policlonal a una malformación arterial anómala; contiene conductillos biliares y células de Kupffer | Proliferación monoclonal hepatocitaria estrógeno/andrógeno dependiente; sin conductos biliares ni tractos portales |
| **Hallazgo en TC/RM trifásica** | **Realce nodular periférico discontinuo** con llenado **centrípeto** progresivo; muy hiperintenso en T2 ("signo del foco") | Realce arterial homogéneo intenso que se vuelve isointenso en fase venosa; **cicatriz central** con realce tardío | Realce arterial heterogéneo con lavado variable, grasa intralesional o hemorragia; sin cicatriz central |
| **RM con contraste hepatoespecífico (Eovist/Primovist)** | Hipointenso en fase hepatobiliar (sin hepatocitos) | **Isointenso o hiperintenso** en fase hepatobiliar (retiene contraste por tener hepatocitos y conductillos) | **Hipointenso** en fase hepatobiliar (carece de conductos biliares funcionales) — clave para diferenciarlo de HNF |
| **Riesgo de sangrado / malignización** | Nulo de malignización; ruptura excepcional incluso en gigantes | Nulo de malignización y ruptura excepcional | **Hemorragia/ruptura (20-25% si >5 cm)** y **malignización a CHC (4-10%)**, sobre todo en subtipo **β-catenina mutado** y en hombres |
| **Biopsia** | **Contraindicada** (alto riesgo de hemorragia y diagnóstico seguro por imagen) | Innecesaria si RM hepatoespecífica es típica | Solo si duda diagnóstica o para subtipificación molecular que cambie conducta |
| **Tratamiento** | **Observación** (no contraindica embarazo ni anticonceptivos). Resección o enucleación solo si **sintomático grave**, crecimiento acelerado o **síndrome de Kasabach-Merritt** (coagulopatía de consumo) | **Observación** sin seguimiento indefinido; no requiere suspender anticonceptivos. Cirugía excepcional si duda diagnóstica o síntomas compresivos claros | Suspender anticonceptivos/anabólicos y bajar de peso; vigilar 6 meses. **Resección quirúrgica** en: **todos los hombres** (cualquier tamaño), mujeres con lesión **≥5 cm** tras suspender estrógenos, crecimiento >20%, subtipo **β-catenina positivo** o sangrado |

**Subtipos moleculares del adenoma hepatocelular (relevancia R3):**
1. **Mutación HNF1α (30-40%):** esteatosis difusa intensa, bajo riesgo de malignización y sangrado.
2. **Inflamatorio (40-50%):** asociado a obesidad y alcohol, telangiectasias sinusoidales, **mayor riesgo de hemorragia**.
3. **Mutación de β-catenina (10-15%):** predominio en hombres y uso de anabólicos, **máximo riesgo de transformación a CHC** (requiere resección independientemente del tamaño).
4. **No clasificado (<10%).**

En caso de **ruptura espontánea de adenoma con hemoperitoneo y choque**, el manejo contemporáneo prioriza reanimación y **embolización arterial transcatéter selectiva** de urgencia para controlar el sangrado sin morbimortalidad de hepatectomía en choque, difiriendo la resección electiva 2-3 meses tras reabsorción del hematoma.

### Carcinoma hepatocelular (CHC)
#### Vigilancia y diagnóstico no invasivo (AASLD 2023 / LI-RADS)
- **Tamizaje obligatorio:** ultrasonido abdominal **cada 6 meses** (± alfafetoproteína AFP) en todo paciente con cirrosis Child-Pugh A o B (o C en lista de trasplante) y en portadores no cirróticos de VHB de alto riesgo.
- **Diagnóstico por imagen sin biopsia (criterios LI-RADS 5):** en un paciente con **cirrosis o VHB crónica**, una lesión **≥1 cm** observada en TC trifásica o RM contrastada que demuestre **hiperrealce arterial no en anillo** (por vascularización exclusivamente arterial del CHC) seguido de **lavado (washout) en fase venosa portal o tardía** ± cápsula en realce o crecimiento umbral cumple criterios **LI-RADS 5**, con especificidad >95% para CHC y **no requiere biopsia confirmatoria**. La biopsia se reserva para pacientes **sin cirrosis** o lesiones indeterminadas (LI-RADS 4 o LR-M) donde cambie la conducta.
- **Alfafetoproteína (AFP):** normal en 30-40% de los CHC pequeños, por lo que una AFP normal no excluye el diagnóstico; valores >400 ng/mL en un hígado cirrótico con nódulo son altamente sugestivos y predicen invasión vascular y recurrencia postrasplante.
- **Estadificación de extensión:** TC de tórax, abdomen y pelvis (el pulmón, hueso y ganglios son sitios frecuentes de metástasis) más evaluación exhaustiva de reserva hepática (**Child-Pugh, MELD, hipertensión portal y volumetría del remanente**).

#### Estadificación y algoritmo terapéutico BCLC (actualización 2022)
| Estadio BCLC | Características tumorales | Función hepática y ECOG | Tratamiento de primera línea | Supervivencia esperada |
|---|---|---|---|---|
| **0 (Muy temprano)** | Nódulo único **≤2 cm**, sin invasión vascular ni metástasis | Child-Pugh A, ECOG 0 | **Ablación** (radiofrecuencia/microondas) o **resección quirúrgica** (si es accesible y sin hipertensión portal) | >5 años |
| **A (Temprano)** | Nódulo único >2 cm, o **≤3 nódulos cada uno ≤3 cm** (criterios de Milán) | Child-Pugh A-B, ECOG 0 | **Resección** si tumor único sin hipertensión portal y bilirrubina normal; **trasplante hepático** si cirrosis/hipertensión portal dentro de Milán; **ablación** si ≤3 cm no candidato a cirugía | >5 años |
| **B (Intermedio)** | Multinodular más allá de Milán, sin invasión macrovascular ni diseminación extrahepática | Child-Pugh A-B, ECOG 0 | **Quimioembolización transarterial (TACE)** (o radioembolización TARE); considerar **downstaging** a criterios de trasplante en casos seleccionados; terapia sistémica si enfermedad difusa bilobar | ~2.5-3 años |
| **C (Avanzado)** | Invasión macrovascular (trombosis tumoral portal) o metástasis extrahepáticas | Child-Pugh A, ECOG 1-2 | **Terapia sistémica de primera línea:** **atezolizumab + bevacizumab** (IMbrave150, previa endoscopia para tratar várices) o **durvalumab + tremelimumab** (HIMALAYA); alternativas: sorafenib o lenvatinib | >1.5-2 años |
| **D (Terminal)** | Cualquier carga tumoral no trasplantable | Child-Pugh C o ECOG >2 | **Cuidados paliativos y soporte sintomático exclusivo** | ~3-6 meses |

#### Principios quirúrgicos en el CHC
- **Resección hepática:** es el tratamiento de elección en pacientes **sin cirrosis** y en cirróticos **Child-Pugh A** con bilirrubina normal, **sin hipertensión portal clínicamente significativa** (GPVH <10 mmHg, plaquetas >100,000/µL sin esplenomegalia ni várices) y con un **remanente hepático futuro ≥40%** en cirrótico (≥20-25% en sano). Se prefieren **resecciones anatómicas** (extirpando el territorio portal que nutre el tumor para eliminar micrometástasis portales intrahepáticas) con margen ideal ≥1 cm (aunque margen R0 negativo es aceptable en cercanía a grandes vasos).
- **Trasplante hepático:** resuelve simultáneamente el tumor y la cirrosis subyacente (menor recurrencia a 5 años, <15%, frente a 50-70% tras resección). Los **criterios de Milán** (1 tumor ≤5 cm, o hasta 3 tumores ≤3 cm cada uno, sin invasión macrovascular ni metástasis) siguen siendo la referencia global, con supervivencia a 5 años >70%. Los **criterios de UCSF** (1 tumor ≤6.5 cm, o ≤3 tumores ≤4.5 cm con suma total ≤8 cm) amplían la elegibilidad con resultados comparables.
- **Ruptura espontánea del CHC:** complicación letal (mortalidad 25-50%); igual que en el adenoma roto, el manejo de elección es estabilización + **embolización transarterial (TAE)** para hemostasia inmediata, seguida de estadificación y resección diferida si el paciente es candidato.

### Metástasis hepáticas de cáncer colorrectal (MHCCR)
La **resección hepática completa R0** combinada con quimioterapia sistémica es el único tratamiento con potencial curativo, logrando supervivencia a 5 años de **40 a 55%**.
- **Definición moderna de resecabilidad:** ya no depende del número ni del tamaño absoluto de las metástasis, sino de **lo que queda en el paciente**: posibilidad de extirpar toda enfermedad macroscópica con márgenes negativos (**≥1 mm es oncológicamente aceptable**), preservando al menos dos segmentos contiguos con flujo arterial y portal adecuado, drenaje venoso y drenaje biliar intactos, y un **remanente hepático futuro ≥20-25%** (o **≥30%** tras quimioterapia prolongada por riesgo de hígado azul por oxaliplatino o esteatohepatitis por irinotecán).
- **Estrategias en enfermedad compleja:** quimioterapia de conversión (FOLFOX/FOLFIRI/FOLFOXIRI + anti-EGFR en RAS nativo o bevacizumab), **embolización portal preoperatoria**, resección combinada con ablación intraoperatoria, **hepatectomía en dos tiempos** y abordaje **liver-first (hígado primero)** en cáncer de recto con metástasis hepáticas sincrónicas voluminosas.

### Complicaciones, pronóstico y seguimiento
Las complicaciones quirúrgicas comprenden hemorragia, fuga biliar e insuficiencia hepática posthepatectomía. Tras la resección de CHC o MHCCR se realiza vigilancia estrecha cada **3 a 6 meses** durante los primeros 2 años y luego cada 6 meses hasta completar 5 años con TC trifásica o RM y marcadores (AFP o CEA), junto con tratamiento antiviral (VHB/VHC) y control de la hepatopatía de base para disminuir el riesgo de recurrencia *de novo*.

### Referencias
- Reig M, et al. BCLC strategy for prognosis prediction and treatment recommendation: The 2022 update. J Hepatol 2022.
- Singal AG, et al. AASLD Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma. Hepatology 2023.
- EASL Clinical Practice Guidelines on the management of benign liver tumours. J Hepatol 2016.
- NCCN Clinical Practice Guidelines in Oncology: Hepatocellular Carcinoma & Colon Cancer, 2024-2025.
- Jarnagin WR, et al. Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed. Elsevier, 2022.

### Perlas de examen
- El **hemangioma cavernoso** muestra realce nodular periférico con llenado centrípeto, **nunca se biopsia** y solo se opera si es francamente sintomático o produce síndrome de Kasabach-Merritt.
- La **RM con contraste hepatoespecífico** distingue **HNF** (retiene contraste en fase hepatobiliar) de **adenoma** (hipointenso en fase hepatobiliar); el adenoma se reseca en **todos los hombres**, en mujeres si mide **≥5 cm** o si tiene **mutación de β-catenina**.
- En un paciente cirrótico, un nódulo ≥1 cm con **hiperrealce arterial y lavado venoso (LI-RADS 5)** establece el diagnóstico de **CHC sin necesidad de biopsia**.
- La **hipertensión portal clínicamente significativa** contraindica la resección hepática mayor en el CHC cirrótico; estos pacientes deben evaluarse para **trasplante hepático** si cumplen **criterios de Milán** (1 lesión ≤5 cm o ≤3 lesiones ≤3 cm).
- En **metástasis hepáticas de cáncer colorrectal**, la resecabilidad la define el **remanente hepático futuro suficiente y funcional** (≥20-30%) con margen R0 ≥1 mm, no el número aislado de lesiones.
`),
    sheet('hig-portal', '04', 'Hipertensión portal y su tratamiento quirúrgico', `
## Hipertensión portal y su tratamiento quirúrgico

### Definición y umbrales hemodinámicos
La **hipertensión portal (HTP)** es el incremento patológico y sostenido de la presión en el sistema venoso portal por encima de los valores normales (**5 a 10 mmHg**). En clínica se cuantifica mediante el **gradiente de presión venosa hepática (GPVH)** — diferencia entre la presión venosa hepática enclavada (que refleja la presión sinusoidal) y la presión venosa hepática libre —, cuyos umbrales pronósticos definidos por el **consenso de Baveno VII (2022)** guían toda la toma de decisiones:
- **Normal:** GPVH de 1 a 5 mmHg.
- **Hipertensión portal:** GPVH **>5 mmHg**.
- **Hipertensión portal clínicamente significativa (CSPH):** GPVH **≥10 mmHg**. A partir de este umbral aparecen várices esofagogástricas, ascitis, descompensación cirrótica y se **contraindica la resección hepática mayor** en el paciente cirrótico con hepatocarcinoma.
- **Umbral de hemorragia variceal:** GPVH **≥12 mmHg**. Ningún paciente sangra de várices esofágicas si su GPVH se reduce por debajo de 12 mmHg (o ≥20% respecto al basal).
- **Alto riesgo de falla terapéutica y muerte en sangrado agudo:** GPVH **>20 mmHg**.

### Fisiopatología
El sistema portal conduce ~75% del flujo sanguíneo hepático y ~50% de su aporte de oxígeno a través de la unión de la **vena mesentérica superior** y la **vena esplénica** detrás del cuello del páncreas. La presión portal obedece la ley de Ohm ($P = Q \times R$):
1. **Aumento de la resistencia intrahepática ($R$):** tiene un **componente fijo o arquitectónico (~70%)** debido a fibrosis, nódulos de regeneración y trombosis microvascular, y un **componente dinámico o funcional (~30%)** debido a la contracción de las células estrelladas hepáticas activadas (miofibroblastos) y a la disfunción endotelial sinusoidal con déficit de óxido nítrico (NO) y exceso de endotelina-1.
2. **Aumento del flujo venoso portal ($Q$):** como respuesta paradójica, la circulación esplácnica sobreproduce **óxido nítrico** y otros vasodilatadores, provocando vasodilatación arteriolar esplácnica masiva, hiperflujo portal que perpetúa la HTP y un estado de **circulación sistémica hiperdinámica** (gasto cardiaco alto, resistencia vascular sistémica baja, hipovolemia arterial efectiva) que activa los ejes renina-angiotensina-aldosterona, simpático y vasopresina, causando retención de sodio y agua (ascitis y síndrome hepatorrenal).
3. **Formación de colaterales portosistémicas:** al elevarse la presión, la sangre busca escapes hacia la circulación cava en cuatro sitios anatómicos clave:
   - **Plexo gastroesofágico** (vena gástrica izquierda o coronaria estomáquica y vasos cortos → venas ácigos/hemiácigos): genera **várices esofágicas y gástricas**, la causa de mayor mortalidad.
   - **Venas paraumbilicales** (ligamento redondo → venas epigástricas): origina la **cabeza de Medusa** (síndrome de Cruveilhier-Baumgarten).
   - **Plexo hemorroidal** (vena rectal superior → rectales medias e inferiores): produce várices rectales.
   - **Retroperitoneo y venas esplenorrenales** (venas de Retzius y shunts esplenorrenales espontáneos): desvían amoniaco y toxinas directamente al cerebro provocando encefalopatía hepática.

### Clasificación etiológica de la hipertensión portal
| Sitio de obstrucción | Mecanismo y GPVH | Causas principales | Notas clínicas y quirúrgicas |
|---|---|---|---|
| **Prehepática** | Obstrucción antes del hígado; **GPVH normal** (presión portal elevada con enclavada normal) | Trombosis de la vena porta (cirrosis, estados protrombóticos, pileflebitis, onfalitis neonatal), **trombosis aislada de la vena esplénica** (pancreatitis crónica/aguda, cáncer de páncreas) | Función hepática preservada. La trombosis esplénica causa **HTP izquierda (sinistral)** con **várices fúndicas gástricas aisladas (IGV1)** y se **cura con esplenectomía** |
| **Intrahepática presinusoidal** | Bloqueo en vénulas portales; GPVH normal o levemente elevado | **Esquistosomiasis** (*S. mansoni*, principal causa mundial no cirrótica), colangitis biliar primaria temprana, sarcoidosis, fibrosis hepática congénita, HTP idiopática | Hígado con función sintética preservada durante años |
| **Intrahepática sinusoidal** | Bloqueo en sinusoides; **GPVH elevado** | **Cirrosis hepática (>90% en México y Occidente):** alcohol, VHC, VHB, MASLD/MASH, autoinmune, hemocromatosis | Cursa con insuficiencia hepatocelular, ascitis, encefalopatía y riesgo de CHC |
| **Intrahepática postsinusoidal** | Bloqueo en vénulas hepáticas terminales; **GPVH elevado** | Síndrome de obstrucción sinusoidal (enfermedad venooclusiva tras trasplante de médula ósea o oxaliplatino) | Hepatomegalia dolorosa, ascitis rápida e ictericia |
| **Posthepática** | Bloqueo en venas suprahepáticas, VCI o corazón; **GPVH normal o alto** (según nivel) | **Síndrome de Budd-Chiari** (trombosis de venas suprahepáticas por trastornos mieloproliferativos/JAK2), pericarditis constrictiva, insuficiencia cardiaca derecha grave | Budd-Chiari produce hipertrofia compensatoria del **lóbulo caudado (segmento I)** por su drenaje venoso directo a la VCI |

### Cuadro clínico y diagnóstico
Las manifestaciones cardinales derivan de la descompensación portal: **hemorragia digestiva alta por várices**, **ascitis** (con riesgo de peritonitis bacteriana espontánea cuando hay **≥250 PMN/mm3** en líquido ascítico y gradiente albúmina suero-ascitis **GASA ≥1.1 g/dL**), **encefalopatía hepática**, **esplenomegalia con hiperesplenismo** (trombocitopenia <150,000/µL y leucopenia), hidrotórax hepático y síndrome hepatorrenal o hepatopulmonar.

**Evaluación diagnóstica y criterios de Baveno VII (2022):**
- **Reserva hepática:** calcular siempre **Child-Pugh** (bilirrubina, albúmina, INR, ascitis y encefalopatía: clase A 5-6 pts, B 7-9 pts, C 10-15 pts) y **MELD-Na / MELD 3.0** (creatinina, bilirrubina, INR, sodio, albúmina y sexo), que predicen mortalidad quirúrgica y priorizan el trasplante hepático.
- **Diagnóstico no invasivo de CSPH (Baveno VII):** la elastografía transitoria (FibroScan) con rigidez hepática **LSM ≥25 kPa** confirma CSPH sin necesidad de cateterismo; por el contrario, una **LSM <20 kPa junto con plaquetas >150,000/µL** identifica riesgo muy bajo de várices que requieran tratamiento y permite **evitar la endoscopia de tamizaje**.
- **Imagen vascular:** el **ultrasonido Doppler** evalúa dirección del flujo portal (hepatópeto normal frente a hepatófugo invertido), permeabilidad portal y venas suprahepáticas; la **angio-TC trifásica** mapea colaterales, trombosis portal y descarta CHC antes de planear TIPS o cirugía.
- **Endoscopia digestiva alta:** clasifica las várices esofágicas (pequeñas <5 mm frente a grandes ≥5 mm, signos de alto riesgo como puntos rojos o "red wale marks") y las **várices gástricas según Sarin**: **GOV1** (extensión por curvatura menor, se manejan como esofágicas), **GOV2** (extensión al fondo gástrico), **IGV1** (fúndicas aisladas: descartar siempre trombosis de vena esplénica) e **IGV2** (ectópicas en cuerpo/antro/duodeno).

### Manejo de la hemorragia variceal aguda (Baveno VII / AASLD)
Constituye una emergencia médico-quirúrgica con mortalidad de **15 a 20%** a las 6 semanas. El protocolo escalonado exige acciones simultáneas desde el minuto cero:
1. **Reanimación cuidadosa y protección de vía aérea:** intubación electiva si hay encefalopatía grave o hematemesis masiva. Utilizar una **estrategia transfusional restrictiva** (transfundir concentrados eritrocitarios si **Hb <7 g/dL**, meta **7 a 8 g/dL**), ya que la sobreexpansión de volumen aumenta la presión portal y dispara el resangrado (Villanueva et al., NEJM 2013). No transfundir plasma fresco de forma rutinaria por INR elevado en el cirrótico.
2. **Fármaco vasoactivo inmediato** (iniciar ante la sola sospecha, antes de la endoscopia, y mantener **2 a 5 días**):
   - **Terlipresina** (análogo de vasopresina; único demostrado en metaanálisis para reducir mortalidad; precaución en cardiopatía isquémica y riesgo de hiponatremia/sobrecarga), u **octreótido** (bolo de 50 µg IV seguido de infusión 50 µg/h, el más disponible en el IMSS) o **somatostatina**. Todos provocan vasoconstricción esplácnica y reducen el flujo portal.
3. **Profilaxis antibiótica obligatoria** (reduce infecciones, resangrado y mortalidad): **ceftriaxona 1 g IV cada 24 horas por 5 a 7 días** (estándar en cirrosis avanzada y entorno hospitalario).
4. **Endoscopia terapéutica temprana (<12 horas tras estabilización):** previa administración de eritromicina IV (250 mg) como procinético para limpiar el estómago. En **várices esofágicas y GOV1**, el tratamiento de elección es la **ligadura endoscópica con bandas** (superior a escleroterapia). En **várices gástricas fúndicas (GOV2 e IGV1)**, el tratamiento de elección es la obliteración con **adhesivo tisular (cianoacrilato)** o inyección guiada por USE con coils + cianoacrilato.
5. **Rescate ante hemorragia refractaria o masiva:** colocación temporal (<24 horas) de **prótesis esofágica metálica autoexpandible cubierta (stent Danis)** — preferida hoy sobre el balón por mayor seguridad — o **taponamiento con sonda de Sengstaken-Blakemore** (previa intubación endotraqueal) únicamente como **puente hacia un TIPS de rescate**.
6. **TIPS temprano (preemptivo, dentro de las primeras 72 horas):** recomendado por Baveno VII tras el control endoscópico inicial en pacientes de alto riesgo de fracaso (**Child-Pugh C con 10-13 puntos**, o **Child-Pugh B >7 puntos con sangrado activo visible en la endoscopia**), pues reduce dramáticamente el resangrado y mejora la supervivencia.

### Profilaxis primaria y secundaria
- **Prevención de descompensación y profilaxis primaria:** Baveno VII promueve el inicio temprano de **betabloqueadores no selectivos (BBNS)** — siendo **carvedilol** el fármaco preferido (12.5 mg/día) por sumar bloqueo alfa-1 que reduce aún más la resistencia intrahepática que propranolol o nadolol — en pacientes con CSPH o várices de alto riesgo. Si hay intolerancia o contraindicación a BBNS, se indica ligadura endoscópica con bandas.
- **Profilaxis secundaria** (tras un episodio de hemorragia variceal, donde el riesgo de resangrado sin tratamiento alcanza 60% al año): combinación obligatoria de **BBNS (carvedilol o propranolol) + sesiones seriadas de ligadura endoscópica** hasta erradicar las várices. En pacientes con ascitis refractaria o hipotensión (PAS <90 mmHg), ajustar o suspender BBNS con cautela.

### Tratamiento intervencionista y quirúrgico
#### Derivación portosistémica intrahepática transyugular (TIPS)
Consiste en crear por vía radiológica endovascular un conducto recubierto (stent de PTFE expandido, Viatorr) entre una vena suprahepática y una rama portal intrahepática, reduciendo el GPVH por debajo de 12 mmHg sin la mortalidad de una laparotomía en el cirrótico.
- **Indicaciones:** hemorragia variceal refractaria (rescate), **TIPS temprano (<72 h)** en alto riesgo, profilaxis secundaria tras falla a BBNS + ligadura, **ascitis refractaria**, hidrotórax hepático refractario y **síndrome de Budd-Chiari** refractario a anticoagulación.
- **Contraindicaciones absolutas:** insuficiencia cardiaca congestiva grave, hipertensión pulmonar severa (PSAP >45 mmHg), sepsis sistémica no controlada, obstrucción biliar no drenada y encefalopatía hepática crónica refractaria. En pacientes con MELD >18-20 o bilirrubina >3-5 mg/dL el riesgo de falla hepática post-TIPS es elevado.
- **BRTO / CARTO** (*obliteración transvenosa retrógrada con balón o tapón*): excelente opción radiológica para **várices gástricas fúndicas** asociadas a un shunt gastrorrenal espontáneo, ya que oblitera las várices sin empeorar la encefalopatía (incluso puede mejorar la perfusión hepática).

#### Derivaciones quirúrgicas y procedimientos de desvascularización
Hoy son excepcionales en centros con disponibilidad de TIPS y trasplante, pero el R3 debe conocer sus bases anatómicas, indicaciones actuales (HTP no cirrótica, falla anatómica del TIPS o centros sin radiología intervencionista en pacientes Child-Pugh A con buena reserva) y comportamiento fisiológico:

| Procedimiento quirúrgico | Tipo de derivación | Anatomía y efecto hemodinámico | Ventajas y desventajas clave |
|---|---|---|---|
| **Portocava terminolateral o laterolateral / Mesocava con injerto H** | **No selectiva** (total) | Desvía todo el flujo portal hacia la VCI; descompresión máxima de várices y ascitis (laterolateral) | Alta eficacia hemostática (>90%), pero **alta tasa de encefalopatía hepática (30-50%)**, deterioro de función hepática y **dificulta el futuro trasplante hepático** si se manipula el hilio |
| **Esplenorrenal distal de Warren** | **Selectiva** | Anastomosis de la vena esplénica distal a la vena renal izquierda + desconexión de vena gástrica izquierda (coronaria) y gastroepiploica derecha | Descomprime las várices esofagogástricas por los vasos cortos **preservando el flujo portal hepatópeto**; menor encefalopatía y no toca el hilio hepático. **Contraindicada en ascitis refractaria** (la empeora) |
| **Desvascularización esofagogástrica (Sugiura-Futagawa)** | **No derivativa** | Esplenectomía + desvascularización de curvatura menor/mayor y esófago distal + transección esofágica con grapadora circular | Opción de rescate cuando existe **trombosis portomesentérica difusa** sin venas aptas para derivación ni TIPS; mínima encefalopatía pero mayor resangrado tardío |
| **Esplenectomía aislada** | Curativa en HTP izquierda | Elimina el influjo arterial esplénico al cortocircuito de vasos cortos | **Tratamiento definitivo y curativo** de la **hipertensión portal sinistral (izquierda)** por trombosis aislada de vena esplénica con várices fúndicas sangrantes |
| **Trasplante hepático ortotópico** | Definitivo | Reemplaza el hígado cirrótico y normaliza la resistencia sinusoidal | **Único tratamiento definitivo** de la cirrosis descompensada con HTP (ver hoja 05) |

### Complicaciones, pronóstico y seguimiento
La mortalidad de la cirugía abdominal mayor electiva en el cirrótico se correlaciona estrechamente con Child-Pugh (~10% en Child A, ~30% en Child B y **>70-80% en Child C**), por lo que en Child B-C debe evitarse toda cirugía no urgente y optimizarse previamente al paciente. Las complicaciones principales de la HTP son resangrado variceal, encefalopatía post-TIPS (25-35%, manejada con lactulosa y rifaximina o reducción del calibre del stent), peritonitis bacteriana espontánea, síndrome hepatorrenal y progresión a CHC. Todo cirrótico requiere seguimiento multidisciplinario por hepatología, erradicación de etiología (abstinencia alcohólica, antivirales), tamizaje semestral de CHC y evaluación temprana para trasplante si el MELD supera 15 o presenta descompensación.

### Referencias
- de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol 2022.
- Kaplan DE, et al. AASLD Practice Guidance on risk stratification and management of portal hypertension and varices in cirrhosis. Hepatology 2024.
- Villanueva C, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med 2013.
- Jarnagin WR, et al. Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed. Elsevier, 2022.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.

### Perlas de examen
- Umbrales clave del **GPVH**: **>5 mmHg** define hipertensión portal; **≥10 mmHg** es clínicamente significativa (várices, ascitis, contraindica resección hepática mayor); **≥12 mmHg** es el umbral de **sangrado variceal**.
- En la hemorragia variceal aguda se inicia de inmediato **fármaco vasoactivo (terlipresina u octreótido) + ceftriaxona profiláctica + transfusión restrictiva (meta Hb 7-8 g/dL)**, seguido de **ligadura endoscópica en <12 horas**.
- En **várices gástricas fúndicas aisladas (IGV1)** con función hepática normal, descartar siempre **trombosis de la vena esplénica** (HTP izquierda o sinistral), cuyo tratamiento curativo es la **esplenectomía**.
- La **derivación esplenorrenal distal de Warren** es selectiva (preserva flujo portal al hígado, menor encefalopatía y respeta el hilio para un futuro trasplante), pero está **contraindicada en pacientes con ascitis refractaria**.
- Según **Baveno VII**, el **carvedilol** es el betabloqueador no selectivo de elección en hipertensión portal, y el **TIPS temprano (<72 h)** mejora la supervivencia en pacientes Child C (10-13) o Child B con sangrado activo.
`),
    sheet('hig-hepatectomia', '05', 'Trasplante hepático y hepatectomías', `
## Trasplante hepático y hepatectomías

### Anatomía quirúrgica del hígado
La cirugía hepática moderna descansa en la **anatomía funcional segmentaria de Couinaud**, que divide al hígado en **ocho segmentos independientes**, cada uno provisto de su propia tríada portal (rama de vena porta, arteria hepática y conducto biliar envueltos en la vaina de Glisson) y drenaje venoso hacia las venas suprahepáticas.
- **Línea de Cantlie (cisura portal principal):** plano imaginario que va desde el **lecho de la vesícula biliar hasta el borde izquierdo de la vena cava inferior (VCI)** y sigue el trayecto de la **vena suprahepática media**, dividiendo al hígado en **hemíhígado derecho** (segmentos V, VI, VII, VIII) y **hemíhígado izquierdo** (segmentos II, III, IV). El ligamento falciforme marca únicamente la división entre el sector lateral izquierdo (II-III) y el medial izquierdo (IV), no la división lobar funcional.
- **Planos venosos verticales:** la **vena suprahepática derecha** separa el sector anterior derecho (V, VIII) del posterior derecho (VI, VII); la **vena suprahepática media** separa el hemíhígado derecho del izquierdo; la **vena suprahepática izquierda** separa el segmento II del III y drena el segmento IV junto con la media.
- **Plano portal horizontal:** las ramas principales derecha e izquierda de la vena porta dividen los segmentos en **superiores** (II, IVa, VIII, VII) e **inferiores** (III, IVb, V, VI).
- **Lóbulo caudado (segmento I):** es anatómicamente autónomo; recibe irrigación portal y arterial de **ambas ramas (derecha e izquierda)** y drena directamente a la cara anterior de la **VCI** mediante múltiples venas cortas (venas de Spiegel), razón por la que se hipertrofia en el síndrome de Budd-Chiari y debe resecarse en bloque en el colangiocarcinoma perihiliar.
- **Variantes arteriales (clasificación de Michels):** la anatomía clásica (arteria hepática propia originada del tronco celíaco) ocurre solo en ~55-60%. Las dos variantes más importantes para el cirujano son la **arteria hepática derecha reemplazada o accesoria originada de la arteria mesentérica superior** (discurre posterior al páncreas y en el borde posterolateral derecho del ligamento hepatoduodenal, ~10-15%) y la **arteria hepática izquierda reemplazada o accesoria originada de la arteria gástrica izquierda** (corre por el ligamento gastrohepático, ~10%).

### Nomenclatura de resecciones hepáticas (Consenso de Brisbane 2000)
| Término estándar (Brisbane 2000) | Segmentos de Couinaud resecados | Término anatómico tradicional equivalente |
|---|---|---|
| **Hepatectomía derecha** | V, VI, VII, VIII (± I) | Lobectomía derecha |
| **Hepatectomía izquierda** | II, III, IV (± I) | Lobectomía izquierda |
| **Triseccionectomía derecha** (hepatectomía derecha extendida) | IV, V, VI, VII, VIII (± I) | Trisegmentectomía derecha |
| **Triseccionectomía izquierda** (hepatectomía izquierda extendida) | II, III, IV, V, VIII (± I) | Trisegmentectomía izquierda |
| **Seccionectomía lateral izquierda** | II, III | Lobectomía lateral izquierda |
| **Seccionectomía posterior derecha** | VI, VII | Sectoriectomía posterior derecha |
| **Hepatectomía central (mesohepatectomía)** | IV, V, VIII | Resección central |
| **Segmentectomía / Resección en cuña** | Un segmento único / resección no anatómica | Resección ahorradora de parénquima |

### Evaluación preoperatoria y modulación del remanente hepático
La causa principal de mortalidad tras una resección hepática mayor es la **insuficiencia hepática posthepatectomía (PHLF)** por dejar un hígado remanente insuficiente en volumen o calidad funcional.
1. **Valoración de calidad y reserva funcional:**
   - **Child-Pugh y MELD:** solo los pacientes **Child-Pugh A** sin hipertensión portal clínicamente significativa son candidatos seguros a hepatectomía mayor; Child B solo tolera resecciones menores muy seleccionadas y Child C contraindica la resección (candidato a trasplante o paliación).
   - **Prueba de retención de verde de indocianina a los 15 minutos (ICG-R15, criterio de Makuuchi):** en pacientes con bilirrubina normal, una retención **<10%** permite triseccionectomía o hepatectomía derecha; **10-19%** permite hepatectomía izquierda o sectoriectomía; **20-29%** solo segmentectomía; **≥30%** limita a enucleaciones o ablación.
   - **Elastografía y biopsia del parénquima no tumoral** si se sospecha fibrosis avanzada o lesión por quimioterapia (síndrome de obstrucción sinusoidal por oxaliplatino o esteatohepatitis por irinotecán).
2. **Volumetría por TC y Remanente Hepático Futuro (RHF):**
   - **Hígado sano:** RHF mínimo **≥20 a 25%** del volumen hepático total estandarizado (VHTE).
   - **Hígado con esteatosis moderada/severa o quimioterapia hepatotóxica prolongada (>6 ciclos):** RHF mínimo **≥30%**.
   - **Hígado cirrótico compensado (Child A sin HTP):** RHF mínimo **≥40%**.
3. **Estrategias de hipertrofia cuando el RHF es insuficiente:**
   - **Embolización de la vena porta (PVE):** estándar de oro; al ocluir el flujo portal del hemíhígado que se va a resecar, todo el flujo portal y sus factores hepatotróficos se redirigen al RHF, induciendo una hipertrofia de **25 a 40% en 4 a 6 semanas** (y demostrando capacidad regenerativa funcional antes de operar).
   - **Deprivación venosa hepática (LVD / doble embolización):** combina embolización portal con embolización de la vena suprahepática ipsilateral en el mismo procedimiento, logrando hipertrofia más rápida y pronunciada con baja morbilidad.
   - **ALPPS** (*Asociación de partición hepática y ligadura portal para hepatectomía en dos tiempos*): logra hipertrofia de 60-80% en solo **7 a 10 días**, pero conlleva mayor morbimortalidad y se reserva para centros HPB de alto volumen en casos de rescate tras PVE fallida o tumores con riesgo de progresión rápida.

### Técnica quirúrgica de las hepatectomías
El control del sangrado intraoperatorio es el principal determinante técnico de morbilidad y recurrencia oncológica (la transfusión masiva inmunosuprime y empeora la sobrevida).
- **Anestesia con presión venosa central (PVC) baja (<5 mmHg):** durante la fase de transección parenquimatosa se restringen líquidos IV para mantener la VCI y las venas suprahepáticas descomprimidas, disminuyendo drásticamente el sangrado venoso retrógrado; una vez concluida la transección y hecha la hemostasia, se restaura la volemia.
- **Ultrasonido intraoperatorio (USIO):** obligatorio antes de iniciar la transección; detecta nódulos adicionales no vistos en la TC/RM (hasta en 15-20% de los casos) y define las relaciones exactas del tumor con los pedículos portales y las venas suprahepáticas.
- **Control vascular:** la **maniobra de Pringle** (oclusión del ligamento hepatoduodenal — arteria hepática y vena porta — respetando la VCI) se aplica de forma **intermitente** (15 minutos de pinzamiento y 5 minutos de reperfusión en hígado sano; 10/5 en cirrótico) para controlar el sangrado aferente sin dañar el remanente. La **exclusión vascular total** (Pringle + pinzamiento de VCI infra y suprahepática) solo se usa en tumores pegados a la confluencia cavo-suprahepática.
- **Transección parenquimatosa:** se emplea pinza de fractura (**Kellyclasia**), aspirador ultrasónico (**CUSA**), disector por chorro de agua, energía bipolar avanzada o bisturí armónico; los pedículos glissonianos mayores y venas suprahepáticas se dividen con **grapadoras vasculares lineales** o sutura vascular de polipropileno. El abordaje laparoscópico y robótico es hoy estándar para seccionectomías laterales izquierdas y lesiones anterolaterales (segmentos II, III, IVb, V, VI), reduciendo dolor, sangrado y estancia sin comprometer márgenes R0.

### Complicaciones posthepatectomía
- **Insuficiencia hepática posthepatectomía (PHLF):** la complicación más temida. Se diagnostica mediante los **criterios 50-50 de Balzan** al día 5 posoperatorio (**tiempo de protrombina <50% o INR >1.7** junto con **bilirrubina sérica >50 µmol/L o >3.0 mg/dL**, que predice mortalidad >50%) y se gradúa con la clasificación **ISGLS** al día 5 o posterior: **grado A** (anormalidad bioquímica sin cambio de manejo), **grado B** (requiere cambio en manejo médico no invasivo: diuréticos, plasma, albúmina, antibióticos) y **grado C** (requiere medidas invasivas en UCI: ventilación, hemodiálisis, vasopresores). Su prevención es clave porque el tratamiento es de soporte.
- **Fuga biliar (ISGLS):** bilirrubina en el líquido del drenaje **≥3 veces la bilirrubina sérica** a partir del día 3 posoperatorio. Grado A (autolimitada sin cambio de manejo), grado B (requiere drenaje percutáneo o CPRE con esfinterotomía/stent) y grado C (requiere relaparotomía por peritonitis biliar).
- **Otras:** hemorragia posoperatoria, absceso perihepático, trombosis de la vena porta, ascitis refractaria y derrame pleural derecho.

### Trasplante hepático ortotópico
#### Indicaciones, contraindicaciones y priorización
El trasplante hepático reemplaza de forma definitiva el hígado insuficiente y corrige la hipertensión portal.
- **Indicaciones principales:**
  1. **Cirrosis descompensada** (alcohol tras abstinencia demostrada, MASLD/MASH, VHC, VHB, autoinmune, CBP, CEP) con **MELD ≥15** o complicación mayor (ascitis refractaria, hemorragia variceal, encefalopatía, síndrome hepatopulmonar).
  2. **Insuficiencia hepática aguda grave (IHAG):** prioridad nacional máxima (estatus 1A) definida por los **criterios de King's College** (por paracetamol: pH <7.30 o tríada de INR >6.5 + creatinina >3.4 mg/dL + encefalopatía grado III-IV; no paracetamol: INR >6.5 o 3 de 5 criterios: edad <10 o >40, etiología desfavorable, ictericia a encefalopatía >7 días, INR >3.5, bilirrubina >17.5 mg/dL).
  3. **Carcinoma hepatocelular sobre cirrosis** dentro de los **criterios de Milán** (1 lesión ≤5 cm o hasta 3 lesiones ≤3 cm, sin invasión macrovascular ni diseminación extrahepática) o tras downstaging exitoso. También colangiocarcinoma perihiliar muy seleccionado (protocolo Mayo) y metástasis irresecables de tumor neuroendocrino bien diferenciado.
  4. **Enfermedades metabólicas/congénitas:** enfermedad de Wilson, atresia de vías biliares en niños, polineuropatía amiloidea familiar.
- **Contraindicaciones absolutas:** sepsis extrahepática no controlada, neoplasia maligna extrahepática activa, CHC con invasión macrovascular o metástasis, enfermedad cardiopulmonar severa (hipertensión portopulmonar con PMAP >45-50 mmHg refractaria), consumo activo de alcohol o drogas ilícitas, y falta de red de apoyo/adherencia que imposibilite la inmunosupresión.
- **Priorización en lista de espera:** sistema **MELD-Na** (bilirrubina, INR, creatinina y sodio; escala de 6 a 40, donde el paciente más grave recibe primero el órgano) y su actualización **MELD 3.0** (añade albúmina y sexo femenino para corregir inequidad). Se asignan puntos de excepción para CHC dentro de Milán.

#### Donación, preservación y técnica quirúrgica
La donación proviene principalmente de **donante cadavérico por muerte encefálica** (o en asistolia controlada) y, en centros especializados, de **donante vivo** (lóbulo izquierdo en pediatría o hemíhígado derecho en adultos) o hígado dividido (*split liver*). Tras la procuración, el órgano se perfunde y conserva en hipotermia con solución de **Universidad de Wisconsin (UW)** o **HTK (histidina-triptófano-cetoglutarato)**, buscando un **tiempo de isquemia fría ideal <8-12 horas**.

El trasplante ortotópico comprende **tres fases**:
1. **Hepatectomía nativa:** disección del hilio y movilización del hígado cirrótico, con preservación de la VCI retrohepática (**técnica de piggy-back**, hoy la más utilizada por evitar el pinzamiento total de la cava y mantener retorno venoso) o reemplazo bicava clásico.
2. **Fase anhepática e implante vascular:** secuencia estricta de anastomosis: primero **vena cava** (piggy-back término-lateral o latero-lateral a venas suprahepáticas), luego **vena porta término-terminal**, seguido de **reperfusión** del injerto (momento de mayor riesgo de **síndrome postreperfusión**: bradicardia, hipotensión e hiperpotasemia súbita por lavado de solución fría rica en potasio) y finalmente anastomosis de la **arteria hepática** con magnificación óptica.
3. **Reconstrucción biliar:** habitualmente **coledococoledocoanastomosis término-terminal** sin tubo en T (permite acceso futuro por CPRE); se realiza **hepaticoyeyunoanastomosis en Y de Roux** cuando la vía biliar receptora está enferma (colangitis esclerosante primaria, atresia biliar) o existe gran discrepancia de calibres.

#### Inmunosupresión y complicaciones del trasplante
El hígado es el órgano sólido más "inmunotolerogénico" (requiere menor inmunosupresión que riñón o corazón y no exige compatibilidad HLA estricta, aunque sí compatibilidad ABO). El esquema de mantenimiento estándar combina un **inhibidor de calcineurina (tacrolimus**, eje del tratamiento con monitoreo estrecho de niveles valle), un **antimetabolito (micofenolato de mofetilo)** y **esteroides** con descenso progresivo.
- **Complicaciones tempranas (<30 días):**
  - **Disfunción primaria del injerto (PNF, 2-5%):** necrosis masiva, acidosis láctica, coagulopatía refractaria y ausencia de producción de bilis; exige **retrasplante de urgencia**.
  - **Trombosis de la arteria hepática (TAH, 2-5%):** la complicación vascular **más temida**. Debido a que el árbol biliar del injerto depende exclusivamente de la arteria hepática (al perderse las colaterales durante la procuración), la TAH temprana provoca necrosis biliar, bilomas infectados y falla del injerto; requiere **revascularización quirúrgica/endovascular inmediata o retrasplante urgente**. Se vigila sistemáticamente con **ultrasonido Doppler** en el posoperatorio temprano.
  - **Trombosis portal, hemorragia, fuga biliar** y **rechazo celular agudo** (elevación de transaminasas/bilirrubina, confirmado por biopsia con tríada de Snover y tratado con bolos de metilprednisolona).
- **Complicaciones tardías:** estenosis biliar (anastomótica o isquémica no anastomótica), **infecciones oportunistas** (bacterianas el primer mes; **CMV, *Pneumocystis jirovecii* y hongos** del mes 1 al 6, por lo que reciben profilaxis con valganciclovir y trimetoprim-sulfametoxazol; comunitarias después de 6 meses), nefrotoxicidad, diabetes y neurotoxicidad por tacrolimus, rechazo crónico ductopénico, neoplasia de novo (piel, linfoma PTLD) y recurrencia de enfermedad basal.

### Pronóstico y seguimiento
La mortalidad de las hepatectomías mayores en centros de alto volumen es actualmente <3-5%. El trasplante hepático alcanza una supervivencia del paciente de **~90% al año y 70-75% a los 5 años**. Todos los pacientes trasplantados requieren vigilancia de por vida de niveles de inmunosupresores, función renal, perfil metabólico, tamizaje oncológico, prohibición absoluta de **vacunas de virus vivos atenuados** y valoración inmediata ante cualquier fiebre.

### Referencias
- Strasberg SM, Phillips C. Use and dissemination of the Brisbane 2000 nomenclature of liver anatomy and resections. Ann Surg 2013.
- Rahbari NN, et al. Posthepatectomy liver failure: a definition and grading by the International Study Group of Liver Surgery (ISGLS). Surgery 2011.
- EASL Clinical Practice Guidelines: Liver Transplantation. J Hepatol 2024.
- Jarnagin WR, et al. Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed. Elsevier, 2022.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.

### Perlas de examen
- La **línea de Cantlie** (lecho vesicular a VCI, plano de la vena suprahepática media) separa funcionalmente el hemíhígado derecho (V-VIII) del izquierdo (II-IV); el **lóbulo caudado (segmento I)** drena directamente a la VCI.
- Remanente hepático futuro mínimo seguro: **≥20-25%** en hígado sano, **≥30%** tras quimioterapia o esteatosis, y **≥40%** en cirrosis Child A; si es insuficiente, indicar **embolización de la vena porta (PVE)**.
- Durante la transección parenquimatosa se mantiene **PVC baja (<5 mmHg)** y **maniobra de Pringle intermitente** para minimizar hemorragia venosa retrógrada.
- Los **criterios 50-50 al día 5** (TP <50% o INR >1.7 + bilirrubina >3 mg/dL) definen insuficiencia hepática posthepatectomía grave con alta mortalidad.
- En el **trasplante hepático**, la **trombosis de la arteria hepática** es la complicación vascular más catastrófica (isquemia biliar y pérdida del injerto); los **criterios de Milán** y el puntaje **MELD-Na/MELD 3.0** rigen la selección y priorización.
`),
  ],

  'ap-r3-vias-biliares': [
    sheet('vb-colecistitis', '01', 'Litiasis vesicular y colecistitis aguda', `
## Anatomía de la vesícula, litiasis y colecistitis litiásica y alitiásica

### Anatomía quirúrgica esencial
La vesícula biliar es un órgano piriforme de 7 a 10 cm de longitud y 30 a 50 mL de capacidad alojado en la fosa vesicular entre los segmentos hepáticos **IVb y V**. Se divide en fondo, cuerpo, infundíbulo (**bolsa de Hartmann**, sitio frecuente de impactación de cálculos) y cuello, que continúa hacia el conducto cístico (con sus pliegues mucosos llamados **válvulas espirales de Heister**).
- **Triángulo hepatocístico (triángulo de Calot moderno):** limitado inferiormente por el **conducto cístico**, medialmente por el **conducto hepático común** y superiormente por el **borde inferior del hígado**. Contiene la **arteria cística** (habitualmente rama de la arteria hepática derecha, ~75-80%) y el **ganglio linfático cístico de Mascagni (o de Lund)**. En la descripción original de Calot (1891) el límite superior era la arteria cística, pero en cirugía laparoscópica se emplea el triángulo hepatocístico porque define el espacio que debe limpiarse por completo.
- **Referencias anatómicas fijas de seguridad:** el **surco de Rouvière** (fisura presente en ~70-80% de los hígados a la derecha del hilio que aloja el pedículo portal posterior derecho; toda disección debe mantenerse **por arriba/ventral al plano del surco**) y la base del **segmento IVb**.
- **Conductos subvesicales (de Luschka):** pequeños conductillos biliares aberrantes (1-2 mm) en el lecho vesicular que drenan parénquima del segmento IVb/V y pueden ser fuente de fuga biliar posoperatoria si se secciona profundamente hacia el parénquima hepático.

### Definición y epidemiología
- **Colelitiasis:** presencia de cálculos en la vesícula biliar. Afecta a **10-15% de los adultos** en países occidentales y alcanza prevalencias aún más elevadas en **México** y poblaciones amerindias/mestizas. Factores de riesgo clásicos: sexo femenino, edad >40 años, obesidad, multiparidad y embarazo, pérdida rápida de peso (cirugía bariátrica), ayuno prolongado, nutrición parenteral total (NPT), estrógenos, diabetes, cirrosis, enfermedad ileal/resección de íleon terminal y hemólisis crónica.
- Más de **70-80%** de los portadores permanecen asintomáticos toda su vida; solo **1 a 3% al año** desarrolla síntomas (cólico biliar) y menos de 0.5% al año debuta con una complicación grave.
- **Colecistitis aguda:** inflamación aguda de la pared vesicular. En **90-95%** de los casos es **litiásica** (obstrucción persistente del conducto cístico por un cálculo) y en **5-10%** es **alitiásica** (en pacientes críticos). Es una de las urgencias quirúrgicas más frecuentes en el IMSS.

### Fisiopatología
- **Litogénesis:** los **cálculos de colesterol (~80%)** se forman por la tríada de sobresaturación biliar de colesterol (hipersecreción o déficit de sales biliares/fosfolípidos), nucleación acelerada por mucina e hipomotilidad vesicular. Los **cálculos pigmentarios negros (~15%)** se componen de bilirrubinato cálcico en bilis estéril por hemólisis crónica (esferocitosis, drepanocitosis) o cirrosis. Los **cálculos pigmentarios marrones (~5%)** son blandos, se forman sobre todo en la vía biliar principal por infección bacteriana crónica (*E. coli* produce β-glucuronidasa que desconjuga la bilirrubina) y estasis.
- **Colecistitis aguda litiásica:** el cálculo impactado en el cuello o cístico eleva la presión intraluminal y provoca distensión vesicular; las prostaglandinas y la fosfolipasa A2 (que convierte lecitina en **lisolecitina**, irritante mucoso potente) desencadenan inflamación química inicialmente estéril. La hipertensión sostenida colapsa primero el drenaje venoso y linfático y después el flujo arterial terminal de la arteria cística, generando edema mural, isquemia, sobreinfección bacteriana secundaria en 50-75% de los casos (enterobacterias como *E. coli*, *Klebsiella*, *Enterobacter*, además de *Enterococcus* y anaerobios como *Bacteroides* y *Clostridium*) y progresión a **gangrena, empiema (piocolecisto) o perforación**.
- **Colecistitis aguda alitiásica (CAA):** ocurre sin cálculos en pacientes en estado crítico (UCI, trauma mayor, quemaduras extensas, sepsis, cirugía cardiovascular o abdominal mayor, choque con vasopresores, ventilación mecánica, ayuno prolongado y NPT). Su fisiopatología combina **estasis biliar extrema** (falta de estímulo de colecistocinina con formación de lodo biliar viscoso) e **isquemia de la pared vesicular** por hipoperfusión esplácnica y trombosis microvascular. Evoluciona a **gangrena y perforación en más de 50%** de los casos, con una mortalidad elevada (**30 a 50%**).

### Cuadro clínico
- **Cólico biliar no complicado:** dolor visceral constante (pese al nombre "cólico") en epigastrio o hipocondrio derecho, frecuentemente posprandial tras ingesta grasa, que dura de **30 minutos a 6 horas** y cede espontáneamente, sin fiebre, sin defensa ni leucocitosis.
- **Colecistitis aguda litiásica:** dolor persistente **>6 horas** en hipocondrio derecho irradiado a epigastrio o región subescapular derecha (signo de Boas), náusea, vómito, anorexia y fiebre de bajo grado (38-38.5 °C). En la exploración destaca el **signo de Murphy** (interrupción súbita de la inspiración profunda al palpar el hipocondrio derecho por descenso de la vesícula inflamada; sensibilidad ~65%, especificidad ~87%), defensa muscular local y, en 20-30%, plastrón o masa palpable. En ancianos y diabéticos la clínica puede ser engañosa o silente hasta la gangrena o perforación.
- **Colecistitis alitiásica:** en el paciente sedado de UCI suele manifestarse únicamente como **fiebre de origen desconocido, leucocitosis progresiva, empeoramiento de sepsis, trombocitopenia o elevación inexplicable de fosfatasa alcalina/bilirrubina**, exigiendo alto índice de sospecha.

### Diagnóstico
- **Laboratorio:** leucocitosis con neutrofilia y elevación de PCR. Las pruebas de función hepática suelen ser normales o levemente alteradas (<2 veces el LSN por inflamación contigua). Una **bilirrubina total >4 mg/dL** o elevación marcada de FA/GGT **no se explica por colecistitis simple** y obliga a descartar **coledocolitiasis, colangitis o síndrome de Mirizzi**.
- **Ultrasonido abdominal (estudio inicial de elección):** sensibilidad 85-90% y especificidad >90%. Hallazgos cardinales: litiasis o lodo biliar (cálculo impactado en el cuello), **engrosamiento de la pared >4 mm** (doble halo/edema mural), distensión vesicular (eje largo >8 cm o transverso >4 cm), **líquido perivesicular** y **signo de Murphy ecográfico** (dolor máximo al comprimir directamente la vesícula con el transductor). En la CAA se observan pared >3.5-4 mm, líquido perivesicular, lodo biliar y gas intramural en ausencia de cálculos.
- **Gammagrafía hepatobiliar (HIDA con Tc-99m):** es el estudio con **mayor sensibilidad y especificidad (>95%)** para confirmar obstrucción del conducto cístico (no visualización de la vesícula a los 60 minutos pese a paso normal del trazador al duodeno). Se reserva para casos con clínica dudosa y ultrasonido no concluyente.
- **Tomografía computarizada (TC) con contraste:** menor sensibilidad para cálculos de colesterol (frecuentemente radiolúcidos), pero superior para diagnosticar **complicaciones** (colecistitis gangrenosa con falta de realce mural, perforación, absceso perivesicular o hepático, **colecistitis enfisematosa** con gas en pared/luz) y descartar diagnósticos diferenciales.

### Clasificación diagnóstica y de gravedad: Guías de Tokio (TG18)
**Diagnóstico TG18:** definitivo cuando existe **1 signo de inflamación local (A)** [signo de Murphy o masa/dolor/defensa en HD] + **1 signo de inflamación sistémica (B)** [fiebre, PCR elevada o leucocitosis] + **hallazgo de imagen característico (C)**. (A + B sin C es diagnóstico sospechoso).

| Grado TG18 | Criterios clínicos y paraclínicos | Estrategia terapéutica recomendada (TG18 / WSES) |
|---|---|---|
| **Grado I (Leve)** | Colecistitis aguda en paciente sano sin disfunción orgánica y con cambios inflamatorios leves en la vesícula | **Colecistectomía laparoscópica temprana** (idealmente <72 h y hasta 7 días); antibiótico perioperatorio, sin prolongar tras cirugía no complicada |
| **Grado II (Moderada)** | Al menos uno de los siguientes: **leucocitos >18,000/mm3**, **masa dolorosa palpable** en HD, **duración >72 horas**, o **inflamación local marcada** (gangrena, enfisema, absceso perivesicular o hepático, peritonitis biliar) | **Colecistectomía laparoscópica temprana** por cirujano con experiencia (técnicas de rescate como subtotal si anatomía hostil); si paciente no apto o falla manejo médico, drenaje biliar urgente (**colecistostomía percutánea**). Antibióticos IV 4-7 días si complicada |
| **Grado III (Grave)** | Disfunción de al menos un órgano/sistema: **cardiovascular** (hipotensión con vasopresores), **neurológica** (alteración conciencia), **respiratoria** (PaO2/FiO2 <300), **renal** (oliguria o Cr >2.0 mg/dL), **hepática** (INR >1.5) o **hematológica** (plaquetas <100,000/mm3) | Reanimación en UCI, antibióticos de amplio espectro inmediatos y **drenaje vesicular temprano (colecistostomía percutánea)** en pacientes con alto riesgo quirúrgico (CCI ≥4-6, ASA ≥3) o disfunción persistente; colecistectomía laparoscópica temprana solo en centros expertos si la disfunción revierte rápido y el paciente es operable |

### Tratamiento
#### Colelitiasis asintomática
**No se opera de rutina**, porque el riesgo quirúrgico supera el riesgo anual de complicaciones. Excepciones quirúrgicas claras: **vesícula en porcelana** (riesgo de cáncer de vesícula, especialmente calcificación mucosa selectiva), **pólipos vesiculares ≥10 mm** (o pólipos en crecimiento / ≥6 mm asociados a colangitis esclerosante primaria), cálculos gigantes **>3 cm**, anemia hemolítica crónica (esferocitosis, drepanocitosis) y casos seleccionados en población de altísimo riesgo de cáncer vesicular o antes de trasplante.

#### Colecistitis aguda litiásica
1. **Soporte médico:** ayuno, cristaloides IV, analgesia multimodal (AINE como ketorolaco/diclofenaco reducen prostaglandinas vesiculares y progresión del cólico; opioides si es necesario) y antieméticos.
2. **Antibioticoterapia (TG18 / WSES 2020):** en grado I comunitario sin comorbilidad basta profilaxis antibiótica perioperatoria (cefalosporina de 1.ª/2.ª generación o amoxicilina-clavulanato) y **suspender en las primeras 24 horas** tras colecistectomía no complicada (ensayo de Regimbeau et al., JAMA 2014). En grados II-III, ancianos, diabéticos o infección nosocomial iniciar cobertura empírica amplia contra gramnegativos y anaerobios (ceftriaxona + metronidazol, piperacilina-tazobactam o carbapenémico en choque séptico/BLEE) por **4 a 7 días** tras control del foco.
3. **Momento de la cirugía:** la **colecistectomía laparoscópica temprana** (idealmente en las primeras **72 horas** desde el inicio de los síntomas, y válida dentro de los primeros **7 a 10 días** en el mismo internamiento según WSES 2020) es el estándar de oro: disminuye la estancia hospitalaria, costos y reingresos sin aumentar lesiones biliares ni conversiones frente a la cirugía diferida (6-8 semanas).
4. **Colecistostomía percutánea frente a cirugía en pacientes de alto riesgo:** el ensayo **CHOCOLATE (Loozen et al., BMJ 2018)** demostró en pacientes de alto riesgo quirúrgico (APACHE II ≥7) que la **colecistectomía laparoscópica temprana** produjo significativamente **menos complicaciones mayores (12% frente a 65%)** y menos reintervenciones que el drenaje percutáneo. Por ello, la colecistostomía percutánea se reserva hoy estrictamente para pacientes **inestables o verdaderamente inoperables** (choque refractario, ASA IV-V); si se coloca, se mantiene al menos 3-6 semanas para madurar el trayecto (preferible abordaje transhepático) y posteriormente se valora colecistectomía de intervalo si mejora su reserva.

#### Colecistitis aguda alitiásica
Es una urgencia crítica por su rápida evolución a gangrena. Requiere antibióticos IV de amplio espectro de inmediato:
- Si el paciente está **estable y tolera anestesia general** (o hay sospecha de perforación/gangrena): **colecistectomía de urgencia** (laparoscópica o abierta).
- Si el paciente está **críticamente enfermo en UCI e inestable**: **colecistostomía percutánea guiada por ultrasonido a pie de cama**, con éxito clínico >85-90%. A diferencia de la litiásica, en muchos sobrevivientes de CAA sin cálculos la colecistostomía puede ser **tratamiento definitivo** tras confirmar permeabilidad del cístico por colangiografía, sin requerir necesariamente colecistectomía de intervalo.

### Complicaciones especiales y pronóstico
- **Perforación vesicular (clasificación de Niemeier):** tipo I (perforación libre con peritonitis biliar generalizada — cirugía urgente), tipo II (perforación subaguda con absceso perivesicular contenido — drenaje o cirugía), tipo III (perforación crónica con **fístula colecistoentérica** e íleo biliar).
- **Colecistitis enfisematosa:** infección por anaerobios formadores de gas (*Clostridium perfringens*, *E. coli*) que afecta sobre todo a **hombres diabéticos ancianos** (~50% sin cálculos); muestra aire en la pared o luz vesicular en Rx/TC, progresa velozmente a gangrena y exige **antibiótico anticlostridial y colecistectomía urgente** (mortalidad 15-25%).
- **Síndrome de Mirizzi (clasificación de Csendes I-V):** compresión extrínseca del conducto hepático común por un cálculo impactado en la bolsa de Hartmann o el cístico (tipo I), que puede erosionar la pared creando una fístula colecistobiliar (<1/3 de circunferencia tipo II, hasta 2/3 tipo III, destrucción completa tipo IV, o asociada a fístula bilioentérica tipo V). Conlleva altísimo riesgo de lesión biliar inadvertida y suele requerir colecistectomía subtotal o reconstrucción con hepaticoyeyunoanastomosis en Y de Roux en tipos III-IV.
- **Colecistitis xantogranulomatosa:** inflamación destructiva crónica con engrosamiento mural masivo que **simula estrechamente un cáncer de vesícula**; obliga a estudio histopatológico definitivo de toda pieza de colecistectomía.

El pronóstico de la colecistitis grado I-II operada oportunamente es excelente (mortalidad <0.5%, egreso en 24-48 horas). La mortalidad se concentra en grado III, colecistitis enfisematosa y alitiásica en el paciente crítico.

### Referencias
- Yokoe M, et al. Tokyo Guidelines 2018 (TG18): diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci 2018.
- Okamoto K, et al. Tokyo Guidelines 2018: flowchart for the management of acute cholecystitis. J Hepatobiliary Pancreat Sci 2018.
- Pisano M, et al. 2020 World Society of Emergency Surgery (WSES) updated guidelines for the diagnosis and treatment of acute calculus cholecystitis. World J Emerg Surg 2020.
- Loozen CS, et al. Laparoscopic cholecystectomy versus percutaneous catheter drainage for acute cholecystitis in high risk patients (CHOCOLATE trial). BMJ 2018.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.

### Perlas de examen
- En el **triángulo hepatocístico** (conducto cístico, conducto hepático común y borde inferior del hígado) discurren la **arteria cística** y el **ganglio de Mascagni**; el **surco de Rouvière** marca el límite inferior seguro de disección.
- Una **bilirrubina >4 mg/dL** en un paciente con colecistitis aguda obliga a descartar **coledocolitiasis, colangitis o síndrome de Mirizzi**.
- Según **TG18**, la **colecistitis grado II** se define por leucocitos **>18,000**, masa palpable, **>72 horas** de evolución o inflamación local marcada; el **grado III** por **disfunción orgánica**.
- La **colecistectomía laparoscópica temprana (<72 h a 7 días)** es el estándar de oro; tras una colecistectomía no complicada grado I-II **no se deben prolongar los antibióticos posoperatorios**.
- La **colecistitis aguda alitiásica** ocurre en el paciente crítico de UCI por estasis e isquemia, evoluciona rápido a gangrena y se trata con **colecistectomía urgente** o **colecistostomía percutánea a pie de cama** si es inestable.
`),
    sheet('vb-coledoco', '02', 'Coledocolitiasis', `
## Coledocolitiasis

### Definición
Presencia de uno o más cálculos en la vía biliar principal (conducto hepático común o colédoco). Desde el punto de vista patogénico se distinguen dos tipos:
- **Coledocolitiasis secundaria (>85% en México y Occidente):** cálculos de **colesterol** (o pigmentarios negros) formados en la vesícula biliar que migran a través del conducto cístico hacia el colédoco.
- **Coledocolitiasis primaria (<15%):** cálculos de **pigmento marrón** (bilirrubinato cálcico con sales de ácidos grasos) formados *de novo* dentro de la vía biliar como consecuencia de **estasis biliar crónica e infección bacteriana** (estenosis biliar benigna, quistes de colédoco, divertículos duodenales yuxtapapilares, colangitis esclerosante, derivaciones biliodigestivas estenosadas o parasitosis como *Clonorchis* y *Ascaris*).

Cronológicamente, los cálculos diagnosticados dentro de los primeros **2 años** tras una colecistectomía se consideran **litiasis residual (retenida)**, mientras que los hallados después de 2 años se consideran **litiasis recurrente** (primaria).

### Epidemiología
- Está presente en **10 a 15%** de los pacientes sometidos a colecistectomía por colelitiasis sintomática, proporción que asciende a **20-25%** en mayores de 60 años y a ~15% en pacientes con colecistitis aguda.
- Alrededor de un tercio de los cálculos que pasan al colédoco pueden migrar espontáneamente al duodeno en pocas semanas, pero el resto permanece impactado con alto riesgo de **colangitis aguda**, **pancreatitis biliar** y **obstrucción crónica** si no se extrae.

### Fisiopatología
La impactación de un cálculo en el tercio distal del colédoco o en el esfínter de Oddi eleva la presión intraductal por encima de la presión secretora hepática (~25-30 cmH2O), deteniendo el flujo biliar y provocando reflujo de bilirrubina conjugada y enzimas canaliculares hacia la circulación sistémica (colestasis). El estancamiento biliar favorece la colonización ascendente por bacterias entéricas desde el duodeno, precipitando **colangitis aguda**. Si el cálculo obstruye de forma transitoria o sostenida el conducto pancreático principal (Wirsung) en el conducto común ampular, genera hipertensión ductal pancreática y **pancreatitis aguda biliar** (particularmente con microlitiasis o cálculos <5 mm). Cuando la obstrucción incompleta persiste durante meses o años, conduce a inflamación portal progresiva, fibrosis y **cirrosis biliar secundaria**.

### Cuadro clínico
El espectro clínico abarca desde el hallazgo incidental asintomático (en pruebas hepáticas o imagen) hasta cuadros potencialmente letales:
- **Dolor biliar:** dolor en epigastrio o hipocondrio derecho más prolongado y constante que el cólico vesicular simple, con irradiación dorsal, náusea y vómito.
- **Síndrome colestásico:** ictericia (a menudo **fluctuante** por efecto de válvula de bola del cálculo), coluria, acolia o hipocolia y prurito.
- **Complicaciones debutantes:** fiebre con escalofríos (**colangitis aguda**) o dolor epigástrico en cinturón con elevación de lipasa (**pancreatitis aguda biliar**). A diferencia de la obstrucción maligna, la vesícula suele ser fibrosa y **no palpable** (Courvoisier negativo).

### Diagnóstico
1. **Pruebas de función hepática (PFH):** patrón colestásico con elevación de **fosfatasa alcalina (FA), GGT y bilirrubina directa**. Dato clave para el R3: en las primeras 24-48 horas tras la impactación aguda de un cálculo es frecuente observar un **pico transitorio marcado de ALT y AST (>500-1,000 U/L)** que simula hepatitis aguda y desciende rápidamente al desimpactarse el cálculo. Las PFH completamente normales tienen un **valor predictivo negativo >95%** para coledocolitiasis.
2. **Ultrasonido abdominal (primer estudio):** excelente para vesícula y dilatación de la vía biliar, pero tiene **baja sensibilidad (25-50%) para visualizar directamente el cálculo** en el colédoco distal debido al gas duodenal. Se considera colédoco dilatado un diámetro interno **>6 mm** en paciente con vesícula intacta (se tolera +1 mm por cada década sobre los 60 años y hasta **8-10 mm** tras colecistectomía previa).
3. **Colangiorresonancia magnética (CRM):** estudio no invasivo de elección en pacientes de riesgo intermedio. Posee sensibilidad de **85-92%** y especificidad de **93-97%**, aunque su sensibilidad cae (<65%) en **microlitiasis o cálculos <3-4 mm**.
4. **Ultrasonido endoscópico (USE):** el método diagnóstico más sensible (**93-97%**) y específico (>95%), superior a la CRM para **cálculos pequeños (<5 mm)** en el colédoco distal y sin interferencia de gas; además permite pasar inmediatamente a CPRE en la misma sesión anestésica si confirma litiasis.
5. **Colangiografía intraoperatoria (CIO) y ultrasonido laparoscópico (USL):** alternativas altamente precisas durante la colecistectomía en pacientes de riesgo intermedio (sensibilidad ~85-95%), que además delinean la anatomía biliar.
6. **CPRE:** estándar de oro **terapéutico**, no diagnóstico de primera línea por su morbilidad (pancreatitis, sangrado, perforación).

### Estratificación del riesgo y algoritmo de manejo: Guías ASGE 2019
Las guías revisadas de la **American Society for Gastrointestinal Endoscopy (ASGE 2019)** redujeron significativamente las CPRE innecesarias al exigir criterios más estrictos para el grupo de alto riesgo (notablemente, **la pancreatitis biliar aguda ya NO es por sí sola un predictor de alto riesgo**, pues la mayoría de los cálculos ya migraron al duodeno):

| Categoría de riesgo ASGE 2019 | Criterios clínicos, bioquímicos e imagenológicos | Probabilidad de cálculo | Conducta recomendada |
|---|---|---|---|
| **Alto riesgo** | Al menos **uno** de los siguientes:<br>• Cálculo en colédoco visualizado en USG o TC<br>• **Colangitis aguda** clínica<br>• **Bilirrubina total >4 mg/dL Y colédoco dilatado** (>6 mm con vesícula intacta o >8 mm sin vesícula) | >50% | **CPRE preoperatoria directa** (o exploración laparoscópica de vía biliar en un tiempo si hay experiencia) seguida de colecistectomía laparoscópica en el mismo internamiento |
| **Riesgo intermedio** | Cualquiera sin criterios de alto riesgo:<br>• PFH alteradas (distintas de bilirrubina >4 + dilatación)<br>• Edad **>55 años**<br>• Colédoco dilatado en USG (>6 mm) sin bilirrubina >4 | 10-50% | **Confirmación no invasiva o intraoperatoria antes de CPRE:** **CRM** o **USE**, o bien **colecistectomía laparoscópica con CIO / USL** y exploración si resulta positiva |
| **Bajo riesgo** | Ningún predictor presente | <10% | **Colecistectomía laparoscópica directa** sin estudios adicionales de la vía biliar |

### Tratamiento
Toda coledocolitiasis confirmada debe tratarse (incluso si es asintomática) por el alto riesgo de colangitis y pancreatitis. Existen dos grandes estrategias equivalentes en eficacia cuando las ejecuta un equipo experto:

#### 1. Estrategia en dos tiempos: CPRE + Colecistectomía laparoscópica (estándar más extendido en México)
- **CPRE terapéutica:** esfinterotomía biliar endoscópica y barrido de la vía con **balón extractor o canastilla de Dormia**, logrando depuración completa en **85-90%** en el primer intento.
- **Colecistectomía laparoscópica obligatoria en el mismo internamiento** (idealmente en las primeras 24-72 horas tras la CPRE): dejar la vesícula in situ tras limpiar el colédoco conlleva hasta **20-35% de recurrencia** de eventos biliares (colecistitis, nueva coledocolitiasis, colangitis o pancreatitis), salvo en pacientes extremadamente frágiles con expectativa de vida muy corta.

#### 2. Estrategia en un solo tiempo: Exploración laparoscópica de la vía biliar (LCBDE) o Rendezvous
Resuelve simultáneamente la colelitiasis y la coledocolitiasis en una sola anestesia, con **menor estancia hospitalaria** y preservando la función del esfínter de Oddi (cuando se realiza por vía transcística).
- **Vía transcística (preferida cuando es factible):** indicada en cálculos **<8-10 mm**, conducto cístico amplio o dilatable, **<5 cálculos** ubicados distales a la unión cístico-hepática. Se extrae con canastilla bajo guía fluoroscópica o coledocoscopio fino sin abrir el colédoco; mínima tasa de fuga biliar.
- **Coledocotomía laparoscópica (o abierta):** indicada en colédoco dilatado (**≥8-10 mm** para evitar estenosis al suturar), cálculos grandes (>10 mm), múltiples (>5) o proximales al conducto hepático común. Se realiza incisión longitudinal anterior en el colédoco supraduodenal, extracción con coledocoscopio/balón/canastilla y verificación de limpieza completa. Hoy se prefiere el **cierre primario del colédoco** con sutura absorbible fina (monofilamento 4-0/5-0) cuando la papila está permeable y no hay colangitis ni cálculos residuales (menor estancia y morbilidad que el tubo en T); se deja **sonda en T de Kehr** si existe inflamación severa, duda de limpieza completa o necesidad de acceso futuro (se retira tras colangiografía por sonda normal a las 2-4 semanas).
- **Rendezvous laparoendoscópico:** el cirujano pasa una guía transcística hasta el duodeno durante la colecistectomía y el endoscopista la captura para canular selectivamente el colédoco sin manipular el conducto pancreático, reduciendo drásticamente la pancreatitis post-CPRE.

#### 3. Manejo de cálculos difíciles o refractarios
En cálculos gigantes (**>15 mm**), impactados, intrahepáticos o múltiples sobre estenosis: **dilatación papilar endoscópica con balón grande (EPLBD)** tras esfinterotomía limitada, **litotricia mecánica**, **colangioscopia directa (SpyGlass)** con litotricia electrohidráulica o láser holmio, y colocación de **prótesis plástica temporal** si no se logra extracción completa en la primera sesión (alivia la obstrucción y ablanda/fragmenta el cálculo para una segunda CPRE en 2-3 meses). En pacientes con **anatomía quirúrgica alterada** (bypass gástrico en Y de Roux, Gastrectomía Billroth II), se emplea CPRE asistida por enteroscopia, acceso transgástrico guiado por USE (EDGE), acceso percutáneo transhepático o exploración quirúrgica. En coledocolitiasis primaria recurrente con **colédoco muy dilatado (≥15-20 mm)** puede indicarse una **derivación biliodigestiva** (coledocoduodenoanastomosis o hepaticoyeyunoanastomosis en Y de Roux).

### Pancreatitis biliar y momento de la intervención
En la **pancreatitis aguda biliar leve**, la **colecistectomía laparoscópica debe realizarse durante la misma hospitalización** (ensayo **PONCHO, Lancet 2015**), evitando recurrencias que ocurren hasta en 18% en las primeras semanas. La **CPRE urgente (<24 h)** en pancreatitis biliar **solo está indicada si hay colangitis aguda concomitante** u obstrucción biliar persistente (ensayo **APEC, Lancet 2020**). En pancreatitis grave o necrosante, la colecistectomía se difiere (~6 semanas) hasta la resolución de colecciones.

### Complicaciones de la CPRE y prevención
1. **Pancreatitis post-CPRE (3-10%, la más frecuente):** se previene con **indometacina o diclofenaco 100 mg vía rectal** justo antes o después del procedimiento en todos los pacientes sin contraindicación, hidratación periprocedimiento con Ringer lactato y prótesis pancreática profiláctica si se canula repetidamente el Wirsung.
2. **Hemorragia postesfinterotomía (1-2%):** se maneja con inyección de adrenalina, coagulación o stent metálico totalmente cubierto.
3. **Perforación duodenal (0.3-1%, clasificación de Stapfer):** tipo I (pared lateral/medial duodenal por el endoscopio → **cirugía urgente**); tipo II (periampular por esfinterotomía → manejo conservador + stent biliar cubierto/drenaje si retroperitoneal contenida, cirugía si peritonitis o sepsis); tipo III (conducto biliar/pancreático por guía → conservador + stent); tipo IV (retroneumoperitoneo aislado sin fuga → manejo conservador).
4. **Colangitis post-CPRE (1-2%):** por drenaje incompleto de vía contrastada; exige cobertura antibiótica cuando se prevé drenaje incompleto.

### Seguimiento y pronóstico
Verificar la normalización de las pruebas de función hepática y confirmar la programación oportuna de la colecistectomía si no se efectuó en el mismo internamiento. Si el paciente presenta dolor recurrente o elevación de FA/bilirrubina tras colecistectomía, investigar cálculo residual con CRM o USE. El pronóstico tras depuración completa y colecistectomía es excelente.

### Referencias
- Buxbaum JL, et al. ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc 2019.
- Manes G, et al. Endoscopic management of common bile duct stones: European Society of Gastrointestinal Endoscopy (ESGE) guideline. Endoscopy 2019.
- da Costa DW, et al. Same-admission versus interval cholecystectomy for mild gallstone pancreatitis (PONCHO trial). Lancet 2015.
- Schepers NJ, et al. Urgent endoscopic retrograde cholangiopancreatography with sphincterotomy versus conservative treatment in predicted severe acute gallstone pancreatitis (APEC). Lancet 2020.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.

### Perlas de examen
- Según **ASGE 2019**, los criterios de **alto riesgo** para CPRE directa son: **cálculo visible en imagen**, **colangitis aguda**, o **bilirrubina total >4 mg/dL + colédoco dilatado**; la pancreatitis biliar aislada ya **no** es criterio de alto riesgo.
- En pacientes de **riesgo intermedio**, nunca ir directo a CPRE: confirmar primero con **CRM**, **USE** (mejor sensibilidad para microlitiasis <3-5 mm) o **colangiografía intraoperatoria**.
- Tras limpiar el colédoco por CPRE, debe realizarse **colecistectomía laparoscópica en el mismo internamiento** para evitar recurrencia de eventos biliares.
- En la **exploración laparoscópica de vía biliar**, preferir vía **transcística** para cálculos pequeños y distales; reservar la **coledocotomía** para colédocos **≥8-10 mm** o cálculos grandes/proximales.
- La profilaxis obligada contra **pancreatitis post-CPRE** incluye **indometacina 100 mg rectal**; ante perforación post-CPRE **Stapfer tipo I** (pared duodenal libre) el manejo es **quirúrgico inmediato**.
`),
    sheet('vb-colangitis', '03', 'Colangitis y fístulas biliares', `
## Colangitis aguda y fístulas biliares

### Parte I · Colangitis aguda

#### Definición y epidemiología
La **colangitis aguda** es la infección bacteriana aguda de un árbol biliar obstruido con hipertensión intraductal que provoca translocación bacteriana sistémica y respuesta inflamatoria grave. Constituye una **urgencia médico-quirúrgica potencialmente mortal** cuya mortalidad histórica superaba 50% antes de la era del drenaje endoscópico y que hoy desciende a **<5%** con reanimación, antibióticos y descompresión oportuna, aunque en la forma grave (grado III) sin drenaje temprano sigue superando **20 a 30%**.

Las causas más frecuentes son la **coledocolitiasis (50-70%)**, las **estenosis benignas** (posquirúrgicas, pancreatitis crónica, colangitis esclerosante primaria), las **neoplasias obstructivas** (cáncer de cabeza de páncreas, colangiocarcinoma, ampuloma — que raramente causan colangitis espontánea salvo tras instrumentación previa), las **prótesis biliares obstruidas** y los procedimientos invasivos previos (CPRE, CTPH). En el paciente anciano con prótesis biliar previa, la obstrucción del stent es la primera causa a descartar.

#### Fisiopatología y microbiología
La bilis en condiciones normales es estéril gracias a la barrera mecánica del esfínter de Oddi, el flujo biliar continuo, la IgA secretora y el efecto bacteriostático de las sales biliares. Para que ocurra colangitis aguda se requieren **dos factores indispensables**: **obstrucción biliar + contaminación bacteriana** (bacteriobilia).
- La presión biliar normal es de **7 a 14 cmH2O**. Cuando la obstrucción eleva la presión intraductal por encima de **20 a 25 cmH2O**, se interrumpe la secreción hepatocitaria y se abren las uniones estrechas paracelulares, generando **reflujo colangiovenoso y colangiolinfático**. Esto inyecta bacterias y endotoxinas directamente a las venas suprahepáticas y la circulación sistémica, explicando la rapidez con la que se instala la bacteriemia, el choque séptico y la falla multiorgánica.
- **Microbiología:** predomina la flora entérica ascendente: bacilos gramnegativos (**Escherichia coli** 25-50%, **Klebsiella spp.** 15-20%, **Enterobacter spp.**), cocos grampositivos (**Enterococcus spp.** 10-20%) y **anaerobios** (*Bacteroides*, *Clostridium*), estos últimos especialmente relevantes en **ancianos, casos graves y pacientes con derivación biliodigestiva previa**. En infecciones asociadas a la atención de la salud, prótesis biliares o CPRE previa deben cubrirse **Pseudomonas aeruginosa** y enterobacterias productoras de **BLEE**.

#### Cuadro clínico
- **Tríada de Charcot (1877):** fiebre con escalofríos, dolor en hipocondrio derecho e ictericia. Presenta **alta especificidad (>95%)** pero **baja sensibilidad (25 a 55%)**, de modo que su ausencia **nunca descarta colangitis** (especialmente en ancianos o inmunosuprimidos, que pueden cursar sin ictericia ni dolor marcado).
- **Péntada de Reynolds (1959):** añade **hipotensión (choque séptico)** y **alteración del estado mental** a la tríada de Charcot; aparece en <10% de los casos y traduce colangitis supurativa aguda grave de muy alta mortalidad si no se descomprime en horas.

#### Diagnóstico y clasificación de gravedad: Guías de Tokio (TG18)
**Criterios diagnósticos TG18:**
- **A. Inflamación sistémica:** fiebre >38 °C y/o escalofríos, o evidencia de laboratorio (leucocitos <4,000 o >10,000/mm3, o PCR ≥1 mg/dL).
- **B. Colestasis:** ictericia (bilirrubina total ≥2 mg/dL) o PFH anormales (FA, GGT, AST o ALT >1.5 veces el LSN).
- **C. Imagen:** dilatación de la vía biliar o evidencia etiológica (cálculo, estenosis, stent, tumor) en USG, TC o CRM.
- **Diagnóstico definitivo:** 1 criterio de A + 1 de B + 1 de C. (Diagnóstico sospechoso: 1 de A + 1 de B o C).

| Grado TG18 | Criterios de gravedad | Urgencia del drenaje biliar |
|---|---|---|
| **Grado I (Leve)** | No cumple criterios de grado II ni grado III | Manejo médico inicial (líquidos + antibióticos); drenaje biliar electivo o en 24-48 h si no responde al manejo médico |
| **Grado II (Moderada)** | Al menos **dos** de los siguientes 5 criterios:<br>1. Leucocitos **>12,000** o **<4,000/mm3**<br>2. Fiebre alta **≥39 °C**<br>3. Edad **≥75 años**<br>4. Hiperbilirrubinemia (**bilirrubina total ≥5 mg/dL**)<br>5. **Hipoalbuminemia** (<0.7 × límite inferior normal) | **Drenaje biliar temprano (dentro de las primeras 24 horas)** junto con antibióticos IV y reanimación |
| **Grado III (Grave)** | Disfunción de al menos **un órgano/sistema**:<br>• **Cardiovascular:** hipotensión que requiere dopamina ≥5 µg/kg/min o cualquier dosis de norepinefrina<br>• **Neurológica:** alteración del estado de conciencia<br>• **Respiratoria:** PaO2/FiO2 <300<br>• **Renal:** oliguria o creatinina sérica >2.0 mg/dL<br>• **Hepática:** INR >1.5<br>• **Hematológica:** plaquetas <100,000/mm3 | **Drenaje biliar URGENTE / INMEDIATO (en horas)** tan pronto se inicie la reanimación y soporte orgánico; **nunca retrasar esperando respuesta a antibióticos** |

#### Tratamiento de la colangitis aguda
El tratamiento reposa sobre dos pilares inseparables: **terapia antimicrobiana/reanimación** y **descompresión biliar oportuna** (control de la fuente). Sin drenaje, el antibiótico no logra concentraciones terapéuticas en una vía biliar obstruida a alta presión.
1. **Reanimación y soporte:** cristaloides balanceados, vasopresores (norepinefrina) si hay choque séptico, corrección de coagulopatía (vitamina K / plasma si se requiere esfinterotomía), monitoreo en UCI para grado III.
2. **Cultivos y antibióticos empíricos inmediatos (<1 hora en sepsis):** tomar **dos pares de hemocultivos** antes de la primera dosis (y enviar cultivo de bilis durante el drenaje) sin demorar el inicio antimicrobiano:
   - *Grado I comunitario:* cefalosporina de 2.ª o 3.ª generación (cefuroxima, ceftriaxona) o amoxicilina-clavulanato / ampicilina-sulbactam.
   - *Grado II comunitario:* **piperacilina-tazobactam**, o **ceftriaxona/cefepima + metronidazol**.
   - *Grado III, nosocomial, stent previo o derivación biliodigestiva:* cobertura antipseudomónica y antianaerobia/BLEE (**piperacilina-tazobactam**, **cefepima + metronidazol**, o **meropenem/imipenem** ± **vancomicina** si sospecha de *Enterococcus* resistente).
   - **Duración (TG18):** tras lograr drenaje biliar efectivo y control del foco, bastan **4 a 7 días** de antibiótico (extender a 2 semanas solo si existe bacteriemia documentada por cocos grampositivos como *Enterococcus* o *Streptococcus* por riesgo de endocarditis).
3. **Vías de drenaje biliar:**
   - **Endoscópica (CPRE — primera línea en >90%):** permite descompresión inmediata con **prótesis plástica temporal** o **drenaje nasobiliar**. En el paciente **inestable o con coagulopatía severa (grado III)**, el objetivo primario es **drenar rápido colocando un stent sin realizar necesariamente esfinterotomía ni extracción laboriosa de cálculos**, difiriendo la limpieza definitiva para cuando la sepsis se haya resuelto.
   - **Drenaje biliar transhepático percutáneo (PTBD):** segunda línea cuando la CPRE falla o la anatomía está alterada quirúrgicamente (bypass en Y de Roux, Whipple previo, obstrucción duodenal u obstrucción hiliar compleja).
   - **Drenaje biliar guiado por USE (EUS-BD):** alternativa moderna en centros expertos cuando falla la CPRE y el árbol biliar intrahepático está dilatado.
   - **Drenaje quirúrgico abierto (coledocotomía y colocación de tubo en T de Kehr):** último recurso histórico con altísima mortalidad en el paciente séptico, reservado únicamente cuando fracasan o no existen opciones endoscópicas ni percutáneas.

---

### Parte II · Fístulas biliares e íleo biliar

#### Clasificación de las fístulas biliares
Las fístulas biliares son comunicaciones anómalas entre el árbol biliar y otra estructura hueca o la superficie cutánea:
1. **Fístulas biliares internas espontáneas (bilioentéricas y bilio-biliares):** casi siempre secundarias a **colelitiasis de larga evolución** (>90%) con episodios repetidos de colecistitis que adhieren la vesícula a una víscera vecina y permiten la erosión por presión del cálculo. Menos frecuentemente se deben a úlcera péptica perforada, cáncer de vesícula/colon o enfermedad de Crohn.
   - **Colecistoduodenal (~70%):** la más frecuente; origen principal del **íleo biliar**.
   - **Colecistocólica (~15%):** conecta vesícula con ángulo hepático del colon; provoca diarrea secretora por ácidos biliares, malabsorción, neumobilia y colangitis recurrente por contaminación fecal de la vía biliar.
   - **Colecistogástrica y coledocoduodenal (~5-10%).**
   - **Fístula bilio-biliar (colecistocoledociana / colecistohepática):** corresponde a los tipos II-IV del **síndrome de Mirizzi**.
2. **Fístulas biliares externas (biliocutáneas):** casi siempre **iatrogénicas** (fuga del muñón cístico, conducto de Luschka, lesión de la vía biliar poscolecistectomía, fuga tras hepatectomía o retiro prematuro de tubo en T) o traumáticas. Se clasifican en **bajo gasto (<200 mL/día)** y **alto gasto (>500 mL/día)**.

#### Íleo biliar y síndrome de Bouveret
El **íleo biliar** es una obstrucción mecánica intestinal causada por la impactación de un cálculo biliar grande (**≥2.0-2.5 cm**) que migró al tubo digestivo a través de una **fístula colecistoduodenal**. Representa 1 a 4% de todas las obstrucciones de intestino delgado, pero hasta **25% en mujeres mayores de 65 años** sin cirugías previas ni hernias.
- **Sitios de impactación:** **íleon terminal y válvula ileocecal (60-70%, sitio más estrecho)**, yeyuno (15-20%), colon sigmoideo (4%, suele haber estenosis diverticular) y **duodeno/píloro (1-3%)**, entidad conocida como **síndrome de Bouveret** (obstrucción de salida gástrica con vómitos incoercibles).
- **Diagnóstico:** cuadro de obstrucción intestinal frecuentemente intermitente ("fenómeno de volteo" o *tumbling obstruction* conforme el cálculo avanza). La **tríada de Rigler** en radiografía o TC — presente en ~30-50% en Rx y >75% en TC — consiste en: **1) neumobilia (aire en vía biliar), 2) signos de obstrucción de intestino delgado y 3) cálculo biliar ectópico radiopaco o visible en TC**. El cambio de posición del cálculo en estudios seriados se denomina tétrada de Rigler.
- **Tratamiento quirúrgico del íleo biliar:**
  - **Enterolitotomía simple (procedimiento de elección en la mayoría de los ancianos comórbidos):** se ordena suavemente el cálculo en sentido proximal hacia un asa intestinal sana (lejos del sitio de impactación isquémico), se realiza una **enterotomía longitudinal**, se extrae el cálculo y se cierra en sentido transversal (técnica Heineke-Mikulicz) para evitar estenosis. **Paso técnico obligatorio:** palpar cuidadosamente **todo el intestino delgado desde Treitz hasta el ciego** y la vesícula para descartar un **segundo cálculo** (presente en ~10-15%, causa de recurrencia temprana).
  - **Procedimiento en un tiempo** (enterolitotomía + colecistectomía + cierre de fístula): conlleva mayor morbilidad y mortalidad; solo se considera en pacientes **jóvenes, hemodinámicamente estables y con riesgo quirúrgico bajo (ASA I-II)**. En el síndrome de Bouveret se intenta primero **extracción o litotricia endoscópica** antes de recurrir a gastrotomía/duodenotomía quirúrgica.

#### Manejo de las fístulas biliares externas
El principio rector es idéntico al de cualquier fístula digestiva: **una fístula biliar sin obstrucción distal y sin discontinuidad completa del árbol biliar tiende a cerrar espontáneamente si se elimina el gradiente de presión en la papila**.
1. Estabilización hidroelectrolítica, control de sepsis y **drenaje percutáneo de bilomas** intraabdominales.
2. Definir anatomía biliar precisa mediante **TC, colangio-RM y CPRE** (descartar lesión mayor de Strasberg tipo E o cálculo distal retenido).
3. En fugas del muñón cístico, conductos de Luschka o lesiones laterales parciales (Strasberg A y D): **CPRE con esfinterotomía y/o colocación de prótesis plástica temporal** por 4-6 semanas, lo que logra cierre de la fístula en **>90%** de los casos. En fístulas externas con discontinuidad completa de la vía biliar principal se controla primero el drenaje y se programa reconstrucción diferida (hepaticoyeyunoanastomosis en Y de Roux).

### Complicaciones, pronóstico y seguimiento
En la colangitis grave las complicaciones son choque séptico refractario, abscesos hepáticos piógenos múltiples, lesión renal aguda, coagulación intravascular diseminada y muerte. Tras superar el episodio agudo y resolver la obstrucción, es imperativo realizar el estudio etiológico definitivo (descartar neoplasia, retirar o recambiar prótesis biliares programadamente y efectuar **colecistectomía electiva** si la causa fue coledocolitiasis). En el íleo biliar tratado con enterolitotomía simple, la mayoría de las fístulas colecistoduodenales se cierran o permanecen asintomáticas, por lo que no suele requerirse cirugía biliar diferida en ancianos sin síntomas recurrentes.

### Referencias
- Kiriyama S, et al. Tokyo Guidelines 2018 (TG18): diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci 2018.
- Mukai S, et al. Indications and techniques of biliary drainage for acute cholangitis in updated Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci 2018.
- Nuño-Guzmán CM, et al. Gallstone ileus, clinical presentation, diagnostic and treatment approach. World J Gastrointest Surg 2016.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.
- Brunicardi FC, et al. Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- La **tríada de Charcot** (fiebre, dolor en HD, ictericia) tiene alta especificidad pero baja sensibilidad; la **péntada de Reynolds** suma **hipotensión y alteración neurológica** e indica colangitis grave grado III.
- En la **colangitis grado III (TG18)** con disfunción orgánica, el drenaje biliar (CPRE de primera línea con colocación rápida de stent) es **urgente en horas**; **nunca esperar** a ver si los antibióticos solos resuelven la sepsis.
- El **reflujo colangiovenoso** ocurre cuando la presión biliar supera **20-25 cmH2O**, precipitando bacteriemia fulminante por gramnegativos entéricos (*E. coli*, *Klebsiella*).
- El **íleo biliar** se produce por una **fístula colecistoduodenal** con impactación típica en el **íleon terminal** y se reconoce por la **tríada de Rigler** (neumobilia, obstrucción intestinal y cálculo ectópico); el **síndrome de Bouveret** es la impactación duodenal/pilórica.
- El tratamiento de elección del íleo biliar en el anciano es la **enterolitotomía simple** (palpando todo el intestino en busca de cálculos múltiples), evitando el cierre simultáneo de la fístula salvo en pacientes jóvenes y estables.
`),
    sheet('vb-lesion', '04', 'Lesión de la vía biliar y técnicas de colecistectomía', `
## Lesión de la vía biliar y técnicas de colecistectomía

### Definición y epidemiología
La **lesión iatrogénica de la vía biliar (LVB)** es cualquier sección, oclusión, estenosis o daño térmico inadvertido del árbol biliar durante un procedimiento quirúrgico; la **colecistectomía laparoscópica** causa >80% de los casos. Su incidencia es de **0.3 a 0.6%** (lesiones mayores Strasberg E ~0.15-0.3%), frente a 0.1-0.2% de la colecistectomía abierta histórica. Pese a su baja frecuencia relativa, aumenta la mortalidad temprana y tardía, deteriora la calidad de vida por colangitis recurrente y cirrosis biliar secundaria, y lidera el litigio médico-legal en cirugía general. En **20 a 35% de las lesiones mayores** coexiste una **lesión vasculobiliar** (predominantemente de la **arteria hepática derecha**), lo que agrava la isquemia ductal y condiciona la reconstrucción.

### Anatomía vascular y mecanismos de lesión
- **Irrigación axial:** el hepático común y el colédoco supraduodenal dependen de dos **arterias marginales en las posiciones horarias de las 3 y las 9**, irrigadas ~60% ascendente (arteria retroduodenal/gastroduodenal) y ~38% descendente (arteria hepática derecha); su sección favorece estenosis isquémica. En contraste, la **placa hiliar y el conducto hepático izquierdo** poseen abundante irrigación proveniente de la arteria hepática izquierda, base de la técnica de **Hepp-Couinaud**.
- **Error de percepción cognitiva (>95%):** Way et al. demostraron que casi todas las LVB resultan de una **ilusión óptica**. En la **lesión clásica laparoscópica**, el colédoco o hepático común se confunde con el cístico (por tracción cefálica del infundíbulo en vez de inferolateral o inflamación que adhiere la bolsa de Hartmann al hepático común), se clipa y corta, y al continuar ascendiendo se secciona también el hepático común y con frecuencia la arteria hepática derecha.
- **Otros mecanismos:** "efecto tienda de campaña" (*tenting*) del colédoco por tracción excesiva del cístico; **lesión térmica tardía** por cauterio monopolar o energía ultrasónica cerca del conducto o clips metálicos (necrosis a los 7-14 días); clipado a ciegas por hemorragia hiliar; y **variantes anatómicas de riesgo** (**conducto sectorial posterior derecho aberrante** en 2-5%, inserción baja/medial del cístico y arteria hepática derecha en "joroba de oruga" de Moynihan).

### Prevención: Visión Crítica de Seguridad y colecistectomía segura
La **Visión Crítica de Seguridad (VCS)** de **Strasberg (1995)**, pilar del consenso **SAGES/AHPBA/IHPBA (2020)**, exige cumplir **tres criterios** antes de clipar o cortar cualquier estructura:
1. **Triángulo hepatocístico limpio** de grasa y tejido fibroso (sin necesidad de esqueletizar el colédoco).
2. **Tercio inferior de la vesícula separado de la placa cística**, exponiendo el lecho hepático detrás del cuello.
3. **Dos y solo dos estructuras entrando a la vesícula** (conducto cístico y arteria cística), confirmadas en vistas anterior y posterior (*doublet view*) y documentadas en foto/video.

Medidas complementarias: identificar referencias anatómicas fijas (**surco de Rouvière** — presente en 70-80% — y base del **segmento IVb**, manteniendo la disección **por arriba del plano R4U**); realizar una **pausa quirúrgica (*time-out*)** antes de dividir; usar liberalmente **colangiografía intraoperatoria (CIO)** (permite reconocer precozmente una lesión y evitar resección completa del colédoco) o **fluorescencia con verde de indocianina (ICG)**; y pedir segunda opinión intraoperatoria ante duda anatómica.

### Colecistectomía difícil y estrategias de rescate (bail-out)
Se anticipa en colecistitis aguda grados II-III (TG18), vesícula escleroatrófica, **síndrome de Mirizzi**, colecistitis xantogranulomatosa, cirrosis y cirugías supramesocólicas previas; intraoperatoriamente se gradúa con la **escala de Parkland (1 a 5)**. Si la inflamación pétrea impide lograr la VCS, **detener la disección hiliar** y ejecutar un procedimiento de rescate (*bail-out*):
- **Colecistectomía subtotal (Strasberg, 2016):** abrir la vesícula, evacuar todos los cálculos, resecar la pared libre lejos del hilio y ablacionar la mucosa remanente. Dos subtipos:
  - **Subtotal fenestrante:** remanente **abierto** con drenaje subhepático (puede cerrarse el orificio cístico desde dentro con bolsa de tabaco). **Ventaja:** mínima recurrencia litiásica (~1-2%). **Desventaja:** mayor **fuga biliar transitoria (10-18%)**, habitualmente resuelta espontáneamente o con CPRE + stent.
  - **Subtotal reconstituyente:** remanente **cerrado** con sutura o engrapadora ("neovesícula"). **Ventaja:** poca fuga biliar (~2-4%). **Desventaja:** mayor **litiasis o colecistitis recurrente en el muñón (5-15%)**.
- **Colecistostomía intraoperatoria:** tubo vesicular ante inflamación extrema o inestabilidad.
- **Conversión a cirugía abierta:** decisión prudente ante sangrado incontrolable o falla de progresión; recordar que **abrir no aclara un hilio pétreo**, por lo que a menudo se completa como **subtotal abierta**.
- **Abordaje fondo-a-cuello (*top-down*):** conlleva riesgo de **lesión vasculobiliar extrema** (arteria hepática derecha o porta) si la disección se profundiza en la placa hiliar inflamada; detenerse arriba del cuello y pasar a subtotal si está fusionado.

### Clasificación de Strasberg y Bismuth
La clasificación de **Strasberg (1995)** abarca todo el espectro de lesiones e incorpora en su categoría **E** los cinco niveles de **Bismuth (1982)**:

| Tipo Strasberg | Anatomía de la lesión | Presentación típica | Manejo estándar |
|---|---|---|---|
| **Tipo A** | Fuga de conducto menor en continuidad con la vía principal (**muñón cístico** o **conducto de Luschka**) | Biloma o fuga por drenaje; la más frecuente | **CPRE con esfinterotomía y/o prótesis plástica** (éxito >90%) + drenaje de biloma |
| **Tipo B** | Oclusión (clipado) de **conducto sectorial derecho aberrante** sin fuga | Asintomática o colangitis segmentaria / atrofia tardía | Observación si asintomática; derivación o resección segmentaria si colangitis |
| **Tipo C** | Sección con **fuga libre** de **conducto sectorial derecho aberrante** (sin continuidad con colédoco) | Fuga biliar persistente **no visible en CPRE** (requiere CRM/CTPH) | Conducto <3 mm: drenaje/embolización; ≥3-4 mm: **hepaticoyeyunoanastomosis en Y de Roux** |
| **Tipo D** | **Lesión lateral parcial** (<50% circunferencia) de vía biliar principal sin pérdida de continuidad | Fuga biliar intraoperatoria o temprana | Intraoperatoria limpia: cierre primario fino ± tubo en T/drenaje; posoperatoria: **CPRE + stent** (cirugía si lesión térmica extensa) |
| **Tipo E1 (Bismuth I)** | Sección/estenosis circunferencial del hepático común con muñón **>2 cm de la confluencia** | Ictericia obstructiva, fuga masiva o peritonitis biliar | **Hepaticoyeyunoanastomosis (HYA) término-lateral en Y de Roux (Hepp-Couinaud)** por equipo HPB |
| **Tipo E2 (Bismuth II)** | Muñón **<2 cm de la confluencia** (la lesión mayor más frecuente) | Ictericia o fuga masiva; frecuente lesión de arteria hepática derecha | **HYA término-lateral en Y de Roux (Hepp-Couinaud)** tras mapeo biliar y vascular |
| **Tipo E3 (Bismuth III)** | Lesión en la **confluencia hiliar (carina)** con techo preservado y comunicación entre ambos hepáticos | Obstrucción/fuga hiliar compleja | **HYA amplia en Y de Roux con descenso de placa hiliar (Hepp-Couinaud)** en centro HPB |
| **Tipo E4 (Bismuth IV)** | Destrucción de la confluencia con **separación de conductos hepáticos derecho e izquierdo** | Colangitis grave, fuga compleja, alto riesgo de estenosis | **HYA bilateral (anastomosis separadas o plastia de confluencia)**; hepatectomía si atrofia o necrosis lobar |
| **Tipo E5 (Bismuth V)** | Lesión combinada de vía biliar principal + **conducto sectorial derecho aberrante** | Fuga dual o colangitis segmentaria | **HYA en Y de Roux incorporando ambos sistemas ductales** |

La clasificación de **Stewart-Way (clases I-IV)** complementa el análisis según mecanismo (clase III = resección de segmento de vía principal, lesión clásica; clase IV = lesión de hepático derecho/sectorial con arteria hepática derecha).

### Presentación clínica y diagnóstico
Solo **25 a 30%** se detectan en el transoperatorio (bilis inexplicada, doble luz ductal, hemorragia hiliar o hallazgo en CIO). El **70 a 75%** restante se diagnostica en el posoperatorio: el signo más temprano es el **paciente que "no evoluciona bien"** a las 24-72 h (dolor persistente, distensión, náusea, fiebre, taquicardia, íleo, bilis por drenaje o elevación de bilirrubinas). Las lesiones oclusivas o térmicas debutan días o semanas después con **ictericia obstructiva progresiva y colangitis**.

**Algoritmo diagnóstico (WSES 2020):**
1. **Laboratorios:** BH, PFH, PCR, lactato y coagulación.
2. **Ultrasonido y angio-TC trifásica:** detecta bilomas, líquido libre, dilatación biliar y evalúa **obligatoriamente la permeabilidad de la arteria hepática derecha y vena porta**.
3. **Colangiorresonancia magnética (CRM):** estudio no invasivo de elección para mapear la anatomía proximal y distal (con contraste hepatobiliar si se sospecha fuga tipo C).
4. **CPRE:** diagnóstica y terapéutica en **Strasberg A y D**; la amputación completa del colédoco confirma lesión tipo E.
5. **Colangiografía transhepática percutánea (CTPH):** necesaria en lesiones completas tipo E o tipo C para mapear la confluencia proximal y colocar drenajes biliares preoperatorios.

### Manejo intraoperatorio, momento quirúrgico y derivaciones biliodigestivas
#### 1. Conducta ante reconocimiento intraoperatorio
La experiencia del equipo que efectúa la **primera reparación** define el pronóstico: **85 a 90% de éxito a largo plazo** en manos de un cirujano hepatopancreatobiliar (HPB), frente a **<30%** cuando intenta reparar el cirujano index sin entrenamiento HPB (acorta el conducto sano y genera fibrosis isquémica).
- **Con cirujano HPB disponible in situ:** definir anatomía mediante colangiografía y realizar reparación definitiva inmediata.
- **Sin cirujano HPB disponible ("detenerse, drenar y referir"):** cesar la disección, **no clipar ni suturar el muñón proximal**, **no convertir solo para reparar**, colocar **drenajes subhepáticos amplios**, documentar hallazgos y trasladar de inmediato a un centro HPB.

#### 2. Momento de la reparación posoperatoria
- **Temprana (<72 h hasta 7 días):** solo si el paciente está estable, **sin sepsis, sin peritonitis y sin lesión arterial**, tras mapeo completo y por cirujano HPB.
- **Intermedia (1 a 6 semanas):** **evitar** por inflamación máxima, edema, isquemia evolutiva y altísima tasa de estenosis.
- **Diferida (6 a 12 semanas, clásicamente 6-8 semanas):** estándar en peritonitis, bilomas infectados, sepsis o **lesión de arteria hepática derecha**. En la espera se controla la sepsis con antibióticos, drenaje percutáneo de bilomas, descompresión biliar (CTPH) y soporte nutricional hasta lograr conductos dilatados, firmes y bien perfundidos.

#### 3. Derivaciones biliodigestivas
- **Hepaticoyeyunoanastomosis término-lateral en Y de Roux con técnica de Hepp-Couinaud (estándar de oro en Strasberg E1–E4):** se reseca tejido isquémico/cicatricial hasta mucosa sana, se desciende la **placa hiliar** para exponer el trayecto extrahepático horizontal del **conducto hepático izquierdo** y se extiende una incisión longitudinal en su cara anterior hacia la confluencia para obtener una boca anastomótica amplia (**2-3 cm**). Se anastomosa **mucosa-a-mucosa, sin tensión, en un plano** con polidioxanona 5-0/6-0 a un **asa yeyunal en Y de Roux de 50-60 cm** retrocólica (previene reflujo entérico y colangitis ascendente).
- **Reparación término-terminal sobre sonda en T de Kehr:** solo excepcionalmente en secciones netas (no térmicas), intraoperatorias y sin pérdida de longitud ni tensión; conlleva **40-50% de estenosis tardía** por interrupción de las arterias de las 3 y 9 horas.
- **Lesiones complejas E4/E5 o vasculobiliares graves:** anastomosis ductales separadas o **hepatectomía derecha** si existe atrofia lobar, necrosis parenquimatosa o abscesos refractarios por lesión combinada arterial y ductal.
- **Coledocoduodenoanastomosis latero-lateral:** reservada para obstrucción benigna distal en ancianos con colédoco **≥15 mm**; **contraindicada en lesiones proximales** por tensión, riesgo de fístula duodenal y **síndrome del sumidero (*sump syndrome*)**.

### Complicaciones tardías y seguimiento
La principal complicación tras HYA es la **estenosis anastomótica (10-15% en centros HPB)**, causante de colangitis recurrente, hepatolitiasis y **cirrosis biliar secundaria**. Aunque ~70% ocurre en los primeros **2 años**, se indica **seguimiento clínico y con PFH por al menos 5 a 10 años**; la estenosis sintomática se maneja inicialmente con **dilatación con balón por CTPH** (o enteroscopia) antes de reoperar.

### Referencias
- Strasberg SM, et al. An analysis of the problem of biliary injury during laparoscopic cholecystectomy. J Am Coll Surg 1995.
- Strasberg SM, et al. Subtotal cholecystectomy — "fenestrating" vs "reconstituting" subtypes. J Am Coll Surg 2016.
- Brunt LM, et al. Safe cholecystectomy multi-society practice guideline (SAGES/AHPBA/IHPBA). Ann Surg 2020.
- de'Angelis N, et al. 2020 WSES guidelines for the detection and management of bile duct injury during cholecystectomy. World J Emerg Surg 2021.
- Townsend CM, et al. Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022.

### Perlas de examen
- La **Visión Crítica de Seguridad (Strasberg)** exige: **1)** triángulo hepatocístico limpio, **2)** tercio inferior vesicular separado de la placa cística y **3)** **dos y solo dos estructuras** entrando a la vesícula; disecar siempre por arriba del **surco de Rouvière**.
- Más de **95%** de las LVB son por **error de percepción visual** (confundir colédoco con cístico) y en **20-35%** de las lesiones tipo E coexiste lesión de la **arteria hepática derecha** (solicitar **angio-TC**).
- **Subtotal fenestrante** = remanente abierto (más fuga biliar transitoria, mínima litiasis recurrente); **subtotal reconstituyente** = remanente cerrado (menos fuga, mayor riesgo de litiasis/colecistitis en el muñón).
- Lesión mayor reconocida intraoperatoriamente **sin cirujano HPB**: **NO intentar reparar**, no clipar el muñón proximal, **colocar drenaje subhepático amplio y referir** ("drenar y derivar").
- **Strasberg A y D pequeña** → **CPRE + stent**; **Strasberg E1–E4** → **HYA término-lateral en Y de Roux (50-60 cm) con técnica de Hepp-Couinaud** sobre el **conducto hepático izquierdo**.
`),
    sheet('vb-cancer', '05', 'Adenocarcinoma de vesícula y vía biliar', `
## Adenocarcinoma de vesícula biliar y colangiocarcinoma

### Parte I · Adenocarcinoma de vesícula biliar

#### Epidemiología y factores de riesgo
El **adenocarcinoma de vesícula biliar** es la neoplasia maligna más frecuente del árbol biliar (**80-95%**) y la quinta del tubo digestivo, con alta prevalencia en **México, Chile, Bolivia e India** y claro predominio en **mujeres (3:1)** mayores de 60 años. Su supervivencia global a 5 años es baja (<15-20%) por diagnóstico tardío, pero en estadios tempranos resecados adecuadamente supera 70-95%. La carcinogénesis deriva de inflamación mucosa crónica (metaplasia → displasia → carcinoma):
- **Colelitiasis:** presente en **70-90%** de los casos; el riesgo se eleva ~10 veces con cálculos **>3 cm**.
- **Vesícula en porcelana:** el riesgo real (~5-10%) se concentra en la **calcificación mucosa selectiva/punteada** y es mucho menor en la calcificación intramural completa.
- **Pólipos vesiculares:** indicación quirúrgica si miden **≥10 mm**, crecen ≥2 mm, son sésiles o miden **≥6 mm** en **colangitis esclerosante primaria (CEP)**.
- **Unión pancreatobiliar anómala (APBJ):** conducto común largo (>15 mm) fuera del esfínter de Oddi que genera reflujo pancreático crónico y alto riesgo carcinogénico aun sin litos.
- **Otros:** portador crónico de *Salmonella typhi*, quistes de colédoco, obesidad y adenomiomatosis segmentaria.

#### Anatomía patológica y diseminación
Más de 90% son adenocarcinomas (papilar de mejor pronóstico, tubular y mucinoso). **Clave anatómica:** la pared vesicular **carece de submucosa y, en su cara hepática, carece de serosa**; la capa muscular contacta el tejido conectivo perimuscular continuo con la cápsula de Glisson de los **segmentos IVb y V**, facilitando la invasión hepática directa temprana. La diseminación linfática progresa desde el **ganglio cístico (Mascagni) → ligamento hepatoduodenal → retroduodenopancreáticos/arteria hepática común → celíacos e interaortocavos** (los ganglios **interaortocavos/paraaórticos equivalen a M1** y contraindican cirugía curativa).

#### Cuadro clínico, diagnóstico y estadificación (AJCC 8.ª ed.)
En **50-70% de los casos operables** es un **hallazgo incidental** en la pieza de colecistectomía (~0.5-1% de todas las colecistectomías). Cuando es sintomático suele estar avanzado (dolor constante en HD, pérdida de peso, masa palpable e **ictericia obstructiva**, signo ominoso que traduce invasión hiliar e irresecabilidad en >80%). El ultrasonido detecta masa intraluminal fija sin sombra o engrosamiento focal asimétrico; la estadificación exige **TC trifásica de tórax/abdomen/pelvis**, **colangio-RM** si hay ictericia, **CA 19-9/CEA** y **laparoscopia de estadificación** en ≥T2 sospechado (detecta carcinomatosis oculta en 20-30%).

**TNM clave (AJCC 8.ª ed.):** **T1a** (lámina propia); **T1b** (muscular); **T2a** (conectivo perimuscular lado **peritoneal**); **T2b** (conectivo perimuscular lado **hepático**, peor pronóstico y mayor invasión hepática/ganglionar); **T3** (perfora serosa o invade hígado o un órgano vecino); **T4** (vena porta principal, arteria hepática o ≥2 órganos extrahepáticos). **N1** (1-3 ganglios regionales), **N2** (≥4 ganglios; mínimo **6 ganglios** para estadificación adecuada).

#### Manejo quirúrgico (incidental y sospechado)
Ante sospecha preoperatoria resecable, **evitar biopsia percutánea** (siembra) y realizar **colecistectomía radical en un tiempo** sin perforar la vesícula. En el **cáncer incidental**, tras reestadificar con TC, la conducta depende del estadio T y del margen cístico (reintervención ideal a las **4-8 semanas**):

| Estadio AJCC 8.ª ed. | Conducta quirúrgica recomendada (NCCN / AHPBA) | Supervivencia 5 años aprox. |
|---|---|---|
| **Tis y T1a** (margen cístico negativo) | **Colecistectomía simple curativa**; vigilancia | >95% |
| **T1b** | **Reintervención oncológica:** resección hepática **IVb-V** + **linfadenectomía regional (≥6 ganglios)** | 70-85% |
| **T2a y T2b** | **Colecistectomía radical:** bisegmentectomía **IVb-V** (o cuña ≥2 cm; anatómica preferida en T2b) + **linfadenectomía del ligamento hepatoduodenal** | 50-70% |
| **T3 resecable** | **Resección radical extendida** (IVb-V o **hepatectomía derecha extendida** + órgano vecino en bloque para **R0**) + linfadenectomía | 20-40% |
| **T4, ganglios interaortocavos o M1** | **Irresecable:** biopsia + perfil molecular + drenaje paliativo + **terapia sistémica** | <5% |

**Principios técnicos actuales:**
- **Resección de la vía biliar principal con HYA:** **NO rutinaria**; indicada únicamente si el **margen del conducto cístico es positivo** o hay invasión directa ductal.
- **Resección de puertos laparoscópicos:** **NO recomendada de rutina** (no mejora supervivencia y refleja siembra peritoneal difusa; solo resecar nódulo palpable aislado).

---

### Parte II · Colangiocarcinoma (intrahepático, perihiliar y distal)

#### Clasificación anatómica y factores de riesgo
Adenocarcinoma del epitelio ductal biliar (>90% desmoplásico, con invasión perineural temprana). Se divide en tres entidades quirúrgicas distintas:
1. **Perihiliar o tumor de Klatskin (~50-60%, el más frecuente):** entre conductos de segundo orden y la inserción del cístico.
2. **Distal (~20-30%):** distal al cístico hasta la ampolla de Vater.
3. **Intrahepático (~10-20%):** proximal a conductos de segundo orden (segundo cáncer primario hepático tras el CHC).

**Factores de riesgo:** **colangitis esclerosante primaria (CEP)** (principal en Occidente, riesgo de por vida 10-15%), **quistes de colédoco** (Todani I y IV, riesgo 10-30%), enfermedad de Caroli, hepatolitiasis, duelas biliares (*Clonorchis sinensis*, *Opisthorchis viverrini* en Asia), **cirrosis y hepatitis B/C** (forma intrahepática), síndrome de Lynch y Thorotrast.

#### Cuadro clínico y diagnóstico
Los tumores **perihiliares y distales** debutan con **ictericia obstructiva indolora progresiva**, prurito, coluria, acolia y pérdida de peso (colangitis espontánea rara antes de instrumentar). En el distal puede haber **signo de Courvoisier-Terrier** (vesícula palpable indolora), mientras que en el **Klatskin la vesícula está colapsada**. El **intrahepático** suele presentarse como masa hepática con dolor sordo sin ictericia temprana.

**Regla diagnóstica de oro:** en sospecha de tumor de Klatskin, obtener **TC trifásica y colangio-RM ANTES de colocar cualquier prótesis biliar**, porque el stent colapsa la vía y produce edema/artefacto que impide estadificar extensión ductal y vascular. El **CA 19-9** (>100-129 U/mL orienta en CEP) presenta falsos negativos en 5-10% (antígeno Lewis negativos) y falsos positivos por colestasis/colangitis. El diagnóstico tisular se busca por cepillado en CPRE con citología + **FISH** o biopsia por **colangioscopia (SpyGlass)**. En perihiliares resecables o candidatos a trasplante está **contraindicada la biopsia percutánea transperitoneal** por siembra del trayecto.

#### Clasificación de Bismuth-Corlette y criterios de resecabilidad
| Tipo Bismuth-Corlette | Extensión ductal (Klatskin) | Resección quirúrgica habitual |
|---|---|---|
| **Tipo I** | Hepático común distal a la confluencia | Resección de vía biliar + linfadenectomía + HYA en Y de Roux (± hepatectomía/caudado) |
| **Tipo II** | Compromete la **confluencia hiliar** sin conductos secundarios | Resección de vía biliar + **lóbulo caudado (segmento I)** + habitualmente hepatectomía + linfadenectomía + HYA |
| **Tipo IIIa** | Confluencia + **conducto hepático derecho** (secundarios derechos) | **Hepatectomía derecha (o extendida) + resección obligatoria del segmento I (caudado)** + vía biliar + linfadenectomía + HYA |
| **Tipo IIIb** | Confluencia + **conducto hepático izquierdo** (secundarios izquierdos) | **Hepatectomía izquierda (o extendida) + resección obligatoria del segmento I (caudado)** + vía biliar + linfadenectomía + HYA |
| **Tipo IV** | Confluencia + **ambos conductos secundarios derecho e izquierdo** (o multifocal) | Clásicamente **irresecable**; casos muy seleccionados: trisegmentectomía o **protocolo de trasplante (Mayo Clinic)** |

**Criterios de irresecabilidad (Blumgart / MSKCC y NCCN) en Klatskin:**
1. Metástasis a distancia o ganglios **N2 a distancia** (paraaórticos, interaortocavos, celíacos, mesentéricos superiores).
2. Extensión ductal bilateral más allá de conductos de segundo orden sin margen reconstruible.
3. Invasión/oclusión no reconstruible del tronco principal de la vena porta o arteria hepática propia.
4. **Compromiso vascular o atrofia de un lóbulo combinado con extensión ductal (o vascular) contralateral**.
5. Remanente hepático futuro (FLR) insuficiente (<30-40% en hígado colestásico) pese a embolización portal, o cirrosis avanzada.

#### Tratamiento quirúrgico, trasplante y terapia sistémica
La **resección R0** es el único tratamiento curativo:
- **Preparación en perihiliar:** **drenaje biliar preoperatorio selectivo del futuro remanente hepático (FLR)** si hay colangitis, bilirrubina muy elevada o necesidad de **embolización de la vena porta (PVE)** para hipertrofiar un FLR <30-40%.
- **Intrahepático:** **hepatectomía anatómica R0** + linfadenectomía del ligamento hepatoduodenal (≥6 ganglios).
- **Perihiliar (Klatskin):** resección de vía biliar extrahepática + **hepatectomía mayor** + **resección obligatoria del lóbulo caudado (segmento I)** — cuyos conductillos drenan directo a la confluencia y son foco principal de recurrencia — + linfadenectomía + HYA en Y de Roux.
- **Distal:** **pancreatoduodenectomía (Whipple)** con linfadenectomía regional.
- **Trasplante hepático (protocolo Mayo Clinic):** opción curativa en Klatskin irresecable localizado (sobre todo en CEP) **<3 cm**, sin metástasis ni ganglios positivos (estadificación quirúrgica), **sin biopsia transperitoneal previa**, tras quimiorradioterapia neoadyuvante.
- **Terapia adyuvante (ensayo BILCAP, 2019):** **capecitabina oral por 6 meses** es el estándar tras resección curativa de cáncer de vesícula o colangiocarcinoma (valorar quimiorradioterapia en R1/N+).
- **Enfermedad avanzada (primera línea):** **gemcitabina + cisplatino + durvalumab (TOPAZ-1)** o **pembrolizumab (KEYNOTE-966)**. El **perfil molecular es obligatorio**: fusiones **FGFR2** (pemigatinib/futibatinib) y mutaciones **IDH1** (ivosidenib) en intrahepático; **HER2** en vesícula; BRAF V600E y MSI-H. En ictericia paliativa con expectativa >3-6 meses preferir **prótesis metálica autoexpandible**.

### Pronóstico y seguimiento
La supervivencia a 5 años tras resección R0 N0 es de 40-50% en vesícula T1b-T2 y 30-45% en colangiocarcinoma, cayendo a <10-15% con N+ o R1. Seguimiento mínimo de **5 años** con exploración, PFH, CA 19-9/CEA y TC cada 3-6 meses los primeros 2 años y luego cada 6-12 meses.

### Referencias
- NCCN Clinical Practice Guidelines: Biliary Tract Cancers, 2024-2025.
- Primrose JN, et al. Capecitabine compared with observation in resected biliary tract cancer (BILCAP). Lancet Oncol 2019.
- Oh DY, et al. Durvalumab plus gemcitabine and cisplatin in advanced biliary tract cancer (TOPAZ-1). NEJM Evid 2022.
- Kelley RK, et al. Pembrolizumab plus gemcitabine and cisplatin in advanced biliary tract cancer (KEYNOTE-966). Lancet 2023.
- Amin MB, et al. AJCC Cancer Staging Manual, 8th ed. Springer, 2017.
- Jarnagin WR, et al. Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed. Elsevier, 2022.

### Perlas de examen
- La vesícula **carece de submucosa y de serosa en su cara hepática**; por ello el cáncer **T2b** (lado hepático) tiene peor pronóstico que **T2a** (peritoneal) e invade rápido los **segmentos IVb y V**.
- **Cáncer incidental de vesícula:** **Tis y T1a** (margen cístico negativo) → **colecistectomía simple curativa**; **≥T1b** → **reintervención (resección IVb-V + linfadenectomía ≥6 ganglios)**; resecar vía biliar solo si margen cístico positivo y **no** resecar puertos de rutina.
- En **tumor de Klatskin**, solicitar **TC trifásica y colangio-RM ANTES del stent** y evitar la **biopsia percutánea transperitoneal** en candidatos a resección o trasplante.
- En **Klatskin (Bismuth-Corlette IIIa/IIIb)** siempre se agrega **resección del lóbulo caudado (segmento I)** a la hepatectomía mayor; el **colangiocarcinoma distal** se opera con **Whipple**.
- Los ganglios **interaortocavos/paraaórticos** en cáncer biliar equivalen a **M1 (irresecable)**; el protocolo **Mayo Clinic** permite **trasplante hepático** en Klatskin irresecable <3 cm N0 M0 (especialmente CEP) tras neoadyuvancia.
- **Capecitabina 6 meses (BILCAP)** es el estándar adyuvante, y **gemcitabina + cisplatino + durvalumab/pembrolizumab (TOPAZ-1 / KEYNOTE-966)** la primera línea en enfermedad avanzada.
`),
  ],
};

