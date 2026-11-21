// R1 · trauma: los cuatro niveles de Drive (R1-R4) repetían ATLS, tríada letal y control de daños;
// aquí quedan una sola vez, repartidos por región anatómica.
import { sheet } from './hoja.js?v=20261122c';

export const R1_TRAUMA = {
  'ap-r1-trauma': [
    sheet('tr-mecanismos', '01', 'Mecanismos de lesión, triage y atención prehospitalaria', `
## Mecanismos de lesión, triage y atención prehospitalaria

### Epidemiología y distribución trimodal de la muerte
El trauma constituye la primera causa de muerte en personas de 1 a 44 años en México y en el mundo, además de ser el principal responsable de años de vida potencialmente perdidos y discapacidad permanente en población económicamente activa. En los hospitales generales regionales del IMSS predominan dos grandes escenarios: el trauma cerrado por siniestros viales (colisiones automovilísticas, motociclistas, atropellamientos y caídas de altura) y el trauma penetrante por agresiones con arma blanca o proyectil de arma de fuego.

La mortalidad por trauma sigue clásicamente una **distribución trimodal** descrita por Trunkey:
- **Primer pico (inmediato, segundos a minutos):** representa alrededor del 50 % de las muertes. Ocurre por lesiones catastróficas no recuperables en la escena: laceración cerebral o de tallo encefálico, lesión medular alta, ruptura cardiaca o avulsión aórtica. Solo se reduce mediante **prevención primaria** (cinturón de seguridad, casco, control de velocidad, educación vial).
- **Segundo pico (temprano, minutos a horas):** cerca del 30 % de las muertes. Corresponde a la llamada **hora dorada**, donde la causa de muerte es el hematoma epidural o subdural, el hemoneumotórax a tensión, la ruptura esplénica o hepática, las fracturas pélvicas con hemorragia masiva o la hemorragia exanguinante de extremidades. La **hemorragia es la principal causa de muerte prevenible** en trauma y la razón de ser del ATLS y de los sistemas de trauma.
- **Tercer pico (tardío, días a semanas):** alrededor del 20 %. Se debe a sepsis, síndrome de dificultad respiratoria aguda (SDRA) y falla orgánica múltiple (FOM). Su incidencia disminuye directamente con una reanimación temprana adecuada y control rápido de la hemorragia y la contaminación.

### Biomecánica y mecanismos de lesión
Comprender la transferencia de energía permite anticipar lesiones ocultas antes de que el paciente se descompense. La energía cinética depende de la masa y del cuadrado de la velocidad: **Ec = 1/2 × m × v²**. Por ello, duplicar la velocidad cuadruplica la energía transferida al organismo. Sin embargo, el principio quirúrgico es invariable: **el mecanismo orienta la sospecha, pero jamás sustituye la exploración física ni la monitorización hemodinámica**.

#### Trauma cerrado (contuso)
La lesión resulta de fuerzas de **compresión** (aplastamiento de vísceras contra estructuras rígidas como la columna vertebral) y de **desaceleración brusca o cizallamiento** (desgarro de pedículos vasculares en puntos de fijación anatómica: istmo aórtico, hilio renal, raíz del mesenterio y unión duodenoyeyunal).
- **Colisión vehicular frontal:** si el ocupante no lleva cinturón, sigue dos trayectorias típicas: *abajo y por debajo* (luxación posterior de cadera, fractura de fémur y rótula, trauma abdominal por volante) o *arriba y por encima* (TCE, lesión cervical, contusión pulmonar y ruptura diafragmática). El **signo del cinturón de seguridad** (equimosis lineal abdominal inferior) se asocia a lesión de intestino delgado, desgarro mesentérico y fractura vertebral de Chance (flexión-distracción lumbar).
- **Colisión lateral:** menor zona de deformación del vehículo; produce fracturas costales ipsilaterales, contusión pulmonar, ruptura hepática o esplénica según el lado del impacto y fractura pélvica por compresión lateral.
- **Atropellamiento:** en el adulto sigue la secuencia parachoques-cofre-pavimento (fractura de tibia/peroné, pelvis y TCE). En el niño ocurre la **tríada de Waddell**: fractura de fémur, lesión toracoabdominal ipsilateral y TCE contralateral al caer al suelo.
- **Caída de altura:** una caída mayor a 6 metros (aproximadamente 3 veces la estatura del paciente) se considera mecanismo de alta energía. Al caer de pie se produce el **síndrome de Don Juan**: fracturas bilaterales de calcáneo, fracturas de pilón tibial o meseta tibial y fractura por compresión de la columna toracolumbar (T12-L1).

#### Trauma penetrante
- **Arma blanca (baja energía):** el daño se limita prácticamente al trayecto anatómico de la hoja; no obstante, la longitud externa de la herida no predice la profundidad ni la dirección del trayecto (un arma corta puede alcanzar pericardio, diafragma o grandes vasos si se inclinó).
- **Proyectiles de arma de fuego:** se clasifican en baja velocidad (< 350 m/s, pistolas comunes) y alta velocidad (> 600–750 m/s, rifles y fusiles). Además de la **cavidad permanente** (tejido destruido por el paso directo del proyectil), los proyectiles de alta energía generan una **cavidad temporal** por onda expansiva que provoca cavitación y necrosis tisular a distancia, además de fragmentación ósea que actúa como proyectil secundario. Las escopetas a corta distancia (< 3–5 metros) causan destrucción masiva de tejidos blandos y alta contaminación por el taco.
- **Lesiones por explosión (onda de choque):** primaria (órganos con aire: membrana timpánica —el más sensible—, pulmón de explosión, perforación intestinal), secundaria (esquirlas y metralla), terciaria (proyección del cuerpo contra superficies) y cuaternaria (quemaduras, inhalación de humo, aplastamiento).

| Mecanismo de lesión | Cinemática predominante | Lesiones ocultas que obligan a descartarse |
|---|---|---|
| Impacto frontal con cinturón | Compresión + flexión-distracción | Perforación yeyunoileal, desgarro mesentérico, fractura de Chance |
| Impacto lateral | Compresión ipsilateral | Fracturas costales, rotura esplénica (izq.) o hepática (der.), fractura pélvica |
| Desaceleración rápida (> 50 km/h) | Cizallamiento en puntos fijos | Lesión de istmo aórtico, ruptura diafragmática, avulsión pedículo renal |
| Caída de altura de pie (> 6 m) | Carga axial vertical | Fractura de calcáneo, fractura toracolumbar (T12-L1), lesión pélvica |
| Herida penetrante toracoabdominal | Trayecto transdiafragmático | Lesión simultánea de tórax, diafragma, hígado, bazo o estómago |
| Proyectil de alta velocidad | Cavitación temporal + fragmentación | Necrosis tisular más allá del trayecto, lesión vascular o intestinal a distancia |
| Explosión en espacio cerrado | Sobrepresión + proyectiles | Rotura timpánica, pulmón de explosión, embolia aérea, perforación colónica |

### Triage: principios, sistema START y criterios de centro de trauma
El **triage** (del francés *trier*, seleccionar) consiste en clasificar a los pacientes según la gravedad de sus lesiones y la probabilidad de supervivencia frente a los recursos disponibles. En situaciones cotidianas (múltiples lesionados sin desbordar la capacidad hospitalaria) se atiende primero al paciente más grave que amenaza con morir. En **catástrofes o incidentes con víctimas múltiples** (cuando la demanda rebasa los recursos), la ética cambia al principio utilitario de **lograr el mayor bien para el mayor número de sobrevivientes**: los pacientes en paro o con lesiones incompatibles con la vida no consumen los recursos limitados mientras existan víctimas salvables en estado crítico.

#### Algoritmo START (*Simple Triage and Rapid Treatment*)
Diseñado para clasificar a cada víctima adulta en menos de 30 a 60 segundos evaluando en orden estricto marcha, respiración, perfusión y estado mental (RPM: 30-2-puede):
1. **¿Puede caminar?** Si camina hacia el área segura → **Verde (diferido / menor)**.
2. **Respiración:** si no respira, abrir vía aérea (tracción mandibular). Si sigue sin respirar → **Negro (expectante / fallecido)**. Si inicia respiración o tiene FR > 30 rpm → **Rojo (inmediato)**. Si FR ≤ 30 rpm, pasar a perfusión.
3. **Perfusión:** evaluar pulso radial o llenado capilar. Si falta pulso radial o el llenado capilar es > 2 segundos → controlar hemorragia visible y clasificar como **Rojo**. Si la perfusión es normal, pasar al estado mental.
4. **Estado mental:** pedir una orden sencilla («apriete mi mano»). Si no obedece → **Rojo**. Si obedece órdenes simples → **Amarillo (urgente / retrasado)**.

| Categoría START | Color | Significado clínico | Ejemplos típicos | Prioridad de evacuación |
|---|---|---|---|---|
| Inmediato | Rojo | Riesgo vital inminente, pero salvable con intervención rápida | Hemorragia controlable, neumotórax a tensión, obstrucción aérea, choque compensado/descompensado | Primera (prioridad 1) |
| Urgente / retrasado | Amarillo | Lesiones graves que requieren atención hospitalaria, pero toleran espera de 1–2 h | Fracturas abiertas estables, trauma abdominal estable, quemaduras moderadas sin vía aérea comprometida | Segunda (prioridad 2) |
| Menor / diferido | Verde | «Heridos que caminan», lesiones leves o ambulatorias | Laceraciones superficiales, esguinces, fracturas cerradas menores | Tercera (prioridad 3) |
| Expectante / fallecido | Negro | Sin signos de vida tras abrir vía aérea o lesiones catastróficas en desastre masivo | Paro cardiorrespiratorio en escena, exposición masiva de masa encefálica | Última (cuidados de confort si aún vive) |

#### Criterios de traslado directo a centro de trauma (ACS / CDC)
Se activa el traslado preferente al hospital con capacidad quirúrgica de trauma ante cualquiera de los siguientes escalones:
- **Criterios fisiológicos:** Glasgow ≤ 13, presión arterial sistólica < 90 mmHg (o < 110 mmHg en mayores de 65 años), frecuencia respiratoria < 10 o > 29 rpm, o necesidad de soporte ventilatorio.
- **Criterios anatómicos:** toda herida penetrante en cabeza, cuello, torso o extremidades proximales a codo o rodilla; tórax inestable; dos o más fracturas de huesos largos proximales; extremidad aplastada, desguantada o sin pulso; amputación proximal a muñeca o tobillo; fractura pélvica; fractura craneal abierta o deprimida; parálisis.
- **Criterios de mecanismo y consideraciones especiales:** eyección del vehículo, muerte de otro pasajero en el mismo compartimento, intrusión > 30 cm del lado del ocupante, caída > 6 m, atropellamiento > 32 km/h, accidente de motocicleta > 32 km/h, pacientes anticoagulados, embarazadas > 20 semanas, extremos de la vida y quemaduras asociadas.

### Atención prehospitalaria paso a paso (PHTLS)
El manejo prehospitalario moderno se rige por la secuencia **X-ABCDE** (donde **X** representa la hemorragia exanguinante externa) y por el principio de minimizar el tiempo en la escena (< 10 minutos, los llamados *minutos de platino*).
1. **Seguridad de la escena y bioseguridad:** no convertir al rescatador en una segunda víctima; guantes, cubrebocas y protección ocular.
2. **X — Control inmediato de la hemorragia exanguinante:** presión directa firme con gasas; si es en extremidad y no cede de inmediato o la escena es hostil, colocar **torniquete comercial** 5–8 cm proximal a la herida (o «alto y apretado» sobre la ropa si el sitio exacto no es visible) apretando hasta abolir el sangrado y el pulso distal. Anotar siempre la **hora exacta de colocación**. Nunca aflojar el torniquete durante el traslado si el tiempo estimado al quirófano es menor a 2 horas. En zonas de unión (ingle, axila, cuello) donde no cabe un torniquete, realizar empaquetamiento profundo de la herida con vendaje hemostático (caolín o quitosano) más compresión sostenida por al menos 3 minutos.
3. **A — Vía aérea y restricción del movimiento espinal:** permeabilizar con tracción mandibular, aspirar secreciones y colocar cánula orofaríngea o nasofaríngea según estado de conciencia. La intubación prehospitalaria solo se realiza si el operador tiene experiencia probada y no retrasa el traslado; los dispositivos supraglóticos son alternativas válidas. La **restricción del movimiento espinal** con collarín rígido está indicada en mecanismo compatible con dolor cervical, déficit neurológico, alteración del estado mental o intoxicación; hoy se evita mantener al paciente innecesariamente sobre tabla rígida larga por riesgo de úlceras por presión y restricción ventilatoria, y **no se inmoviliza de rutina en trauma penetrante aislado sin déficit neurológico** porque retrasa el acceso al quirófano y aumenta la mortalidad.
4. **B — Ventilación:** oxígeno suplementario, sello torácico valvulado en neumotórax abierto y descompresión pleural de emergencia si hay datos inequívocos de neumotórax a tensión.
5. **C — Circulación y traslado rápido:** en trauma penetrante urbano con hospital cercano, la estrategia de **cargar y llevar (*scoop and run*)** supera a intentar accesos venosos prolongados en la calle (*stay and play*). Las vías periféricas se canalizan en ruta; si el paciente sangra activamente y no tiene TCE, evitar bolos masivos de cristaloides que rompen el coágulo inicial por aumento de presión y hemodilución.
6. **D y E — Déficit neurológico y control térmico:** registrar Glasgow inicial (clave para detectar deterioro posterior), glucemia capilar, retirar ropa húmeda y cubrir con mantas térmicas porque la hipotermia comienza en la escena.

### Traslado interhospitalario y entrega estructurada
Cuando un hospital de primer contacto o segundo nivel no cuenta con neurocirugía, cirugía vascular, radiología intervencionista o quirófano disponible, debe activarse el traslado temprano conforme al ATLS:
- **Regla fundamental:** realizar únicamente las maniobras que salvan la vida antes del traslado (vía aérea definitiva si se requiere, sonda pleural, control de hemorragia externa, faja pélvica, inicio de hemoderivados o ácido tranexámico). **Nunca retrasar un traslado para obtener una tomografía** si el hospital emisor no puede resolver el hallazgo que busca.
- **Comunicación directa médico a médico:** el médico que envía habla con el médico que recibe, transmitiendo el resumen estructurado **ATMIST**: **A**ge (edad/sexo), **T**ime (hora del trauma), **M**echanism (mecanismo), **I**njuries (lesiones sospechadas), **S**igns (signos vitales y Glasgow inicial/actual) y **T**reatments (intervenciones, torniquete con hora, volumen y medicamentos administrados).
- **Acompañamiento y documentación:** enviar copia completa de notas, laboratorios, estudios en formato digital, hora de aplicación de torniquetes o medicamentos y garantizar personal capacitado capaz de manejar complicaciones durante el trayecto.

### Perlas de examen
- La **hemorragia** es la principal causa de muerte prevenible en trauma; el segundo pico de la distribución trimodal ocurre en las primeras horas y depende directamente de la atención oportuna.
- En el algoritmo **START**, la regla mnemotécnica rápida es **30-2-puede**: FR > 30 rpm, llenado capilar > 2 s (o ausencia de pulso radial) o incapacidad de obedecer una orden simple clasifican automáticamente en **Rojo**.
- En un incidente con víctimas múltiples, un paciente que no respira tras abrir la vía aérea se clasifica como **Negro**; no se inicia RCP prolongada en escena de desastre.
- El **signo del cinturón de seguridad** obliga a buscar lesión de intestino delgado, desgarro mesentérico y fractura lumbar de **Chance**.
- En **trauma penetrante aislado sin déficit neurológico**, la inmovilización cervical rutinaria no aporta beneficio y aumenta la mortalidad al retrasar la cirugía.
- Nunca se retrasa el traslado de un paciente politraumatizado a un centro resolutivo para hacer estudios de imagen que no cambiarán la decisión de trasladarlo.

### Referencias
ATLS *Advanced Trauma Life Support*, 10.ª ed. (American College of Surgeons, 2018) · PHTLS *Prehospital Trauma Life Support*, 10.ª ed. (NAEMT, 2023) · CDC/ACS *National Guideline for the Field Triage of Injured Patients* (2022) · Sabiston *Textbook of Surgery*, 21.ª ed. · Schwartz *Principles of Surgery*, 11.ª ed.
`),
    sheet('tr-atls', '02', 'Atención hospitalaria inicial (ATLS)', `
## Atención hospitalaria inicial (ATLS)

### Principios del ATLS y organización del equipo de trauma
El protocolo *Advanced Trauma Life Support* (ATLS, 10.ª edición del American College of Surgeons) establece un lenguaje común y una secuencia jerárquica diseñada para **identificar y tratar primero lo que mata primero**, sin esperar diagnósticos definitivos para iniciar acciones salvadoras. La evaluación y la reanimación son **simultáneas**, no secuenciales: en cuanto se detecta una amenaza en la vía aérea, la ventilación o la circulación, se corrige antes de avanzar al siguiente paso.

En la sala de choque del hospital, el **cirujano general** suele fungir como líder del equipo de trauma. La preparación previa al arribo incluye:
- Notificación prehospitalaria y activación del equipo multidisciplinario (cirugía, urgencias, anestesiología, enfermería, banco de sangre y radiología).
- Equipo de protección personal completo (bata impermeable, guantes, lentes y cubrebocas).
- Verificación de equipo de vía aérea, laringoscopio/videolaringoscopio, aspirador, cristaloides tibios (39–40 °C), calentador rápido de fluidos, equipo de toracostomía, ultrasonido con transductor para eFAST y faja pélvica.
- Asignación explícita de roles y comunicación en **circuito cerrado (*closed-loop*)**: quien recibe una indicación la repite en voz alta y confirma cuando se ha cumplido.

### Fisiopatología del politrauma y el diamante letal
El choque hemorrágico traumático desencadena hipoperfusión tisular, metabolismo anaerobio, deuda de oxígeno y disfunción endotelial aguda. De forma muy temprana —incluso antes de administrar grandes volúmenes de líquidos— se instala la **coagulopatía inducida por trauma (CIT)**, mediada por la lesión tisular, hipoperfusión, degradación del glucocálix endotelial, activación de la vía de la proteína C (que inhibe los factores V y VIII y desinhibe la fibrinólisis) y consumo de fibrinógeno y plaquetas.

Este proceso se perpetúa en la clásica **tríada letal**, hoy ampliada al **diamante letal del trauma**:
1. **Hipotermia (< 35 °C):** reduce la actividad enzimática de los factores de coagulación (cada 1 °C de descenso disminuye ~10 % su función), deteriora la adhesión plaquetaria y desvía a la izquierda la curva de disociación de la hemoglobina.
2. **Acidosis metabólica (pH < 7.2, déficit de base < −6 mEq/L):** producto de la hiperlactatemia por hipoperfusión; disminuye dramáticamente la generación de trombina (a pH 7.0 la actividad del complejo factor tisular/VIIa cae más de 50 %).
3. **Coagulopatía:** agravada por la dilución iatrogénica cuando se infunden litros de cristaloides fríos y por la hiperfibrinólisis sistémica.
4. **Hipocalcemia (calcio ionizado < 1.0 mmol/L):** cuarto vértice del diamante letal. Ocurre de manera intrínseca por el trauma y se agrava de forma crítica con el **citrato** presente en los hemoderivados transfundidos (el citrato quela el calcio). El calcio ionizado es indispensable como factor IV de la coagulación, para la función plaquetaria, la contractilidad miocárdica y el tono vascular.

### Evaluación primaria y reanimación simultánea (X-ABCDE)
La revisión primaria se ejecuta en minutos y se reevalúa de manera continua ante cualquier cambio clínico:

#### X — Hemorragia exanguinante externa
Si existe sangrado arterial masivo visible en extremidades o sitios de unión, el control inmediato con compresión directa, vendaje hemostático o torniquete precede incluso a la vía aérea, porque una exanguinación masiva mata en 2 a 3 minutos.

#### A — Vía aérea con restricción del movimiento cervical
La manera más rápida de valorar la permeabilidad es hablar con el paciente: si responde con voz clara y coherente, la vía aérea está permeable, ventila y perfunde el cerebro en ese instante. Signos de obstrucción o peligro inminente: estridor, ronquera, gorgoteo, agitación por hipoxia, fracturas faciales complejas, hematoma cervical expansivo o quemadura de vía aérea.
- **Maniobras iniciales:** aspiración de sangre/vómito, tracción mandibular (*jaw thrust*, sin hiperextender el cuello), oxígeno a alto flujo por mascarilla con reservorio.
- **Indicaciones de vía aérea definitiva (tubo endotraqueal con globo inflado en tráquea o vía aérea quirúrgica):** apnea, incapacidad para mantener oxigenación o proteger la vía aérea, **Glasgow ≤ 8**, hematoma cervical en expansión, lesión traqueal o laríngea, quemadura inhalatoria con edema inminente y choque grave refractario.
- **Técnica:** intubación orotraqueal por **secuencia rápida** con estabilización manual en línea de la columna cervical por un asistente (retirando solo la pieza anterior del collarín). Si falla la intubación y no es posible ventilar ni oxigenar, realizar **cricotiroidotomía quirúrgica** de emergencia (en menores de 12 años se prefiere cricotiroidotomía con aguja e insuflación a chorro por el riesgo de estenosis subglótica).

#### B — Respiración y ventilación
Exponer el tórax, inspeccionar simetría y esfuerzo respiratorio, palpar tráquea y crepitación subcutánea, percutir y auscultar ambos hemitórax. El objetivo inmediato es detectar y tratar las lesiones que matan en minutos:
- **Neumotórax a tensión:** diagnóstico clínico (disnea, taquicardia, hipotensión, hipoventilación unilateral, timpanismo, ingurgitación yugular, desviación traqueal tardía). Tratamiento inmediato: descompresión torácica (aguja o toracostomía digital en 4.º–5.º EIC línea axilar anterior/media en adultos; 2.º EIC línea medioclavicular en niños) seguida de sonda endopleural. Jamás esperar una radiografía.
- **Neumotórax abierto:** oclusión inmediata con apósito estéril fijado en tres lados (efecto válvula unidireccional) y colocación de sonda pleural en un sitio distinto.
- **Hemotórax masivo:** reposición de volumen/sangre + sonda pleural 28–32 Fr y preparación inmediata para toracotomía si el drenaje inicial es > 1,500 mL o persiste > 200 mL/h durante 2–4 horas.
- **Tórax inestable con contusión pulmonar:** oxigenación, analgesia multimodal (bloqueo regional/epidural), ventilación protectora si hay falla respiratoria y evitar sobrecarga hídrica.

#### C — Circulación y control de la hemorragia
En un paciente traumatizado, **toda hipotensión o taquicardia inexplicable es choque hemorrágico hasta demostrar lo contrario**. Evaluar estado de conciencia, color y temperatura cutánea, llenado capilar y características del pulso (la presencia de pulso radial orienta a PAS > 80 mmHg; femoral > 70; carotídeo > 60, aunque son estimaciones aproximadas).
- **Los cinco sitios donde un paciente se desangra («el piso y cuatro más»):** hemorragia externa, tórax, abdomen, retroperitoneo/pelvis y huesos largos (fémur).
- **Acciones simultáneas:** dos accesos venosos periféricos cortos y de grueso calibre (14–16 G) o acceso intraóseo si fallan dos intentos; toma de muestras (grupo y Rh, pruebas cruzadas, BH, coagulación, fibrinógeno, gasometría, lactato, calcio ionizado y prueba de embarazo en toda mujer en edad fértil); control mecánico inmediato (compresión, torniquete, faja pélvica, tracción de fémur) y activación de cirugía si hay hemorragia cavitaria no controlada.

| Parámetro | Clase I | Clase II (leve) | Clase III (moderada) | Clase IV (grave) |
|---|---|---|---|---|
| Pérdida sanguínea estimada | < 15 % (< 750 mL) | 15–30 % (750–1,500 mL) | 30–40 % (1,500–2,000 mL) | > 40 % (> 2,000 mL) |
| Frecuencia cardiaca | Normal (< 100) | Normal / ↑ (100–120) | ↑ (120–140) | ↑↑ (> 140) |
| Presión arterial sistólica | Normal | Normal | ↓ | ↓↓ |
| Presión de pulso | Normal | ↓ (por vasoconstricción) | ↓ | ↓↓ |
| Frecuencia respiratoria | 14–20 | 20–30 | 30–40 | > 35 |
| Gasto urinario (mL/h) | > 30 | 20–30 | 5–15 | Mínimo / anuria |
| Estado mental | Leve ansiedad | Ansioso | Confuso / letárgico | Letárgico / comatoso |
| Déficit de base (mEq/L) | 0 a −2 | −2 a −6 | −6 a −10 | < −10 |
| Necesidad de hemoderivados | Monitorizar | Posible | Sí | Protocolo transfusión masiva |

La respuesta a un bolo inicial de máximo 1 litro de cristaloide balanceado tibio (en el adulto) clasifica al paciente en: **respondedor rápido** (estabilización sostenida, pérdida < 15 %), **respondedor transitorio** (mejora y recae, indica sangrado activo del 15–40 % que requiere hemoderivados y probable control quirúrgico/angiográfico) y **no respondedor** (pérdida > 40 % o causa no hemorrágica como taponamiento/neumotórax a tensión; requiere transfusión masiva y quirófano inmediato).

#### D — Déficit neurológico
Evaluar rápidamente la **Escala de Coma de Glasgow** (ocular, verbal y motora), tamaño y reactividad pupilar (anisocoria > 1 mm sugiere herniación uncal), signos de focalización motora y **glucemia capilar** (descartar hipoglucemia reversible). Evitar atribuir el deterioro neurológico al alcohol o drogas antes de descartar hipoxia, choque o hematoma intracraneal.

#### E — Exposición y control ambiental
Desvestir completamente al paciente cortando la ropa para buscar lesiones ocultas en axilas, periné y dorso (mediante giro en bloque o *logroll* protegiendo la columna). Inmediatamente después, **cubrir con mantas térmicas**, elevar la temperatura de la sala de choque e infundir líquidos tibios para evitar la hipotermia.

### Adjuntos a la evaluación primaria
Se realizan en paralelo sin interrumpir la reanimación:
- **Monitorización continua:** ECG (arritmias, contusión miocárdica, actividad eléctrica sin pulso), pulsioximetría, capnografía (método más confiable para confirmar intubación endotraqueal) y presión arterial no invasiva o línea arterial.
- **Sondas:** sonda vesical para medir diuresis horaria (meta ≥ 0.5 mL/kg/h en adultos, 1 mL/kg/h en niños). **Contraindicada** si hay sospecha de lesión uretral (sangre en meato, hematoma perineal o escrotal en alas de mariposa, imposibilidad de paso suave); en ese caso realizar uretrografía retrógrada primero. Sonda gástrica para descomprimir el estómago y reducir aspiración: usar **vía orogástrica** si hay sospecha de fractura de base de cráneo o trauma mediofacial grave.
- **Imagen a la cabecera:** **eFAST** (evalúa cuatro ventanas abdominales/pericárdicas: subxifoidea, hepatorenal/Morison, esplenorrenal y pélvica suprapúbica, más ventanas pleurales anteriores para neumotórax y hemotórax). Radiografía portátil AP de tórax y AP de pelvis (en trauma cerrado o mecanismo compatible). No solicitar radiografías de columna o extremidades que retrasen el control de hemorragia.
- **Laboratorio funcional:** gasometría arterial/venosa con **lactato y déficit de base** (mejores marcadores tempranos de choque oculto que la hemoglobina, que suele ser normal en los primeros minutos por pérdida de sangre total), calcio ionizado y tromboelastografía (**TEG**) o tromboelastometría (**ROTEM**) para guiar reposición dirigida de plasma, crioprecipitado, plaquetas o antifibrinolíticos.

### Reanimación de control de daños (hemostática)
En el paciente con choque hemorrágico grave (clases III–IV o ABC score ≥ 2), la estrategia actual se basa en cinco pilares:
1. **Control temprano y definitivo de la hemorragia:** la cirugía o angioembolización es parte de la reanimación, no un paso posterior.
2. **Restricción de cristaloides:** limitar a ≤ 1 L inicial de solución balanceada (Hartmann/Ringer lactato). Evitar solución salina al 0.9 % en grandes volúmenes por acidosis hiperclorémica.
3. **Hipotensión permisiva:** mantener PAS de 80–90 mmHg (o PAM ~50–60 mmHg) hasta lograr hemostasia quirúrgica para evitar desalojar el coágulo primario y agravar el sangrado. **Contraindicación absoluta: TCE moderado o grave y lesión medular**, donde la hipotensión duplica la mortalidad y se exige PAS ≥ 100–110 mmHg.
4. **Transfusión balanceada 1:1:1:** activar protocolo de transfusión masiva (concentrado eritrocitario : plasma fresco congelado : plaquetas en proporción 1:1:1, respaldado por el ensayo PROPPR, o sangre total tipo O de bajo título cuando esté disponible). Usar sangre O negativo en mujeres en edad fértil y O positivo en varones si se requiere transfusión inmediata sin cruzar.
5. **Hemostasia farmacológica y soporte metabólico:** administrar **ácido tranexámico (TXA)** según el ensayo CRASH-2: 1 g IV en bolo de 10 minutos dentro de las **primeras 3 horas** del trauma (mayor beneficio en la primera hora), seguido de 1 g en infusión durante 8 horas; no administrar después de las 3 horas porque aumenta la mortalidad por sangrado. Reponer **calcio** (1 g de cloruro de calcio o 2–3 g de gluconato de calcio IV cada 4 unidades de hemoderivados o para mantener Ca²⁺ > 1.1 mmol/L), mantener fibrinógeno > 150–200 mg/dL (crioprecipitado) y normotermia > 36 °C.

### Evaluación secundaria, índices de gravedad y evaluación terciaria
Se inicia **únicamente cuando la evaluación primaria ha concluido, las amenazas vitales están controladas y el paciente muestra tendencia a la estabilización**.
- **Historia AMPLE:** **A**lergias, **M**edicamentos (en especial anticoagulantes, antiagregantes y betabloqueadores que enmascaran la taquicardia), **P**atologías previas y embarazo, **L**ibaciones/última comida y **E**ventos/ambiente del trauma.
- **Exploración física completa de cabeza a pies:** cráneo, macizo facial, ojos, oídos (hemotímpano), cuello, tórax, abdomen, pelvis, periné, dorso, extremidades (pulsos, sensibilidad y movilidad) y examen neurológico detallado. El tacto rectal hoy se realiza de manera selectiva (sospecha de lesión medular, pélvica o penetrante glútea/perineal).
- **Estudios definitivos:** en el paciente hemodinámicamente estable con mecanismo de alta energía, la tomografía de cuerpo entero (*pan-scan*) con contraste intravenoso define con precisión las lesiones craneales, cervicales, torácicas, abdominales y pélvicas.
- **Índices de gravedad:** el **ISS (*Injury Severity Score*)** es la suma de los cuadrados de las tres lesiones más graves en tres regiones anatómicas distintas según la escala AIS (1 a 6); un ISS > 15 define clásicamente al paciente politraumatizado grave (cualquier AIS 6 asigna automáticamente ISS = 75).
- **Evaluación terciaria:** exploración completa repetida a las 24 horas (y tras recuperar el estado de conciencia) junto con la revisión final de todos los estudios de imagen para detectar hasta un 10 % de lesiones inadvertidas inicialmente (fracturas menores, lesiones ligamentosas, laceraciones oculares o faciales).

### Perlas de examen
- La **hemoglobina inicial normal no descarta hemorragia masiva aguda**; el lactato y el déficit de base son los marcadores precoces de choque oculto.
- Un paciente anciano o usuario de **betabloqueadores** puede estar en choque hemorrágico clase III sin taquicardia; una PAS de 110 mmHg puede representar hipotensión grave en un paciente hipertenso crónico.
- La **hipotensión permisiva está contraindicada en el TCE**: un solo episodio de hipotensión (PAS < 90 mmHg) o hipoxia (SpO₂ < 90 %) duplica la mortalidad cerebral.
- El **ácido tranexámico** solo se administra dentro de las **primeras 3 horas** del trauma (CRASH-2); pasado ese límite resulta perjudicial.
- En el **diamante letal**, olvidar reponer **calcio ionizado** durante la transfusión masiva perpetúa la coagulopatía y la falla miocárdica por quelación con citrato.
- El **paciente inestable va a quirófano, jamás al tomógrafo** («el túnel de la muerte»).

### Referencias
ATLS *Advanced Trauma Life Support*, 10.ª ed. (ACS, 2018) · Holcomb JB et al. *PROPPR Randomized Clinical Trial*, JAMA 2015 · CRASH-2 Trial Collaborators, Lancet 2010 · Spahn DR et al. *European Guideline on Management of Major Bleeding and Coagulopathy Following Trauma*, Crit Care 2023 · Sabiston 21.ª ed. · Schwartz 11.ª ed.
`),
    sheet('tr-tce-cuello', '03', 'Trauma craneoencefálico, raquimedular y de cuello', `
## Trauma craneoencefálico, raquimedular y de cuello

### Trauma craneoencefálico (TCE): fisiopatología y clasificación
El trauma craneoencefálico es la principal causa de muerte y discapacidad grave en el paciente politraumatizado. Su manejo se comprende separando dos fenómenos:
- **Lesión cerebral primaria:** daño mecánico directo en el momento del impacto (contusiones, laceraciones, hemorragias, cizallamiento axonal). Es irreversible por intervención médica; solo se previene.
- **Lesión cerebral secundaria:** daño isquémico y citotóxico progresivo en las horas y días siguientes causado por **hipotensión, hipoxia, hipercapnia o hipocapnia extrema, hiperglucemia, fiebre, convulsiones e hipertensión intracraneal**. Todo el esfuerzo del cirujano en urgencias busca prevenir la lesión secundaria.

De acuerdo con la **doctrina de Monro-Kellie**, la bóveda craneal es un compartimento rígido ocupado por encéfalo (~80 %), líquido cefalorraquídeo (~10 %) y sangre (~10 %). Cuando aparece una masa ocupativa (hematoma o edema), inicialmente se desplazan LCR y sangre venosa; una vez agotada esa compensación, pequeños incrementos de volumen disparan exponencialmente la presión intracraneal (PIC). La **presión de perfusión cerebral (PPC)** equivale a **PAM − PIC** (meta habitual 60–70 mmHg). Si la PIC supera 20–22 mmHg o la PAM cae, el cerebro entra en isquemia global y ocurre herniación transtentorial (uncal) con compresión del III par craneal (midriasis fija ipsilateral) y del pedúnculo cerebral (hemiparesia contralateral), pudiendo manifestarse la **tríada de Cushing** (hipertensión arterial con presión de pulso amplia, bradicardia y patrón respiratorio irregular), signo tardío de herniación inminente.

#### Escala de Coma de Glasgow (GCS)
Evalúa la mejor respuesta ocular (1–4), verbal (1–5) y motora (1–6), sumando de 3 a 15 puntos (el componente motor es el mejor predictor pronóstico):
- **TCE leve (GCS 13–15):** representa > 80 % de los casos. Se solicita TC de cráneo simple ante criterios de riesgo (*Canadian CT Head Rule*): GCS < 15 a las 2 horas, sospecha de fractura abierta/deprimida o de base de cráneo (ojos de mapache, signo de Battle, hemotímpano, otorragia o rinorraquia), ≥ 2 episodios de vómito, edad ≥ 65 años, amnesia retrógrada > 30 minutos, mecanismo peligroso o uso de anticoagulantes.
- **TCE moderado (GCS 9–12):** requiere TC de cráneo urgente, vigilancia neurológica horaria e ingreso hospitalario; 10–20 % se deterioran a TCE grave.
- **TCE grave (GCS ≤ 8):** exige **vía aérea definitiva inmediata**, reanimación enfocada a neuroprotección, TC urgente y valoración neuroquirúrgica.

### Lesiones intracraneales y manejo paso a paso del TCE
- **Hematoma epidural:** clásicamente por ruptura de la **arteria meníngea media** asociada a fractura temporal. En la TC simple se observa una imagen hiperdensa en forma de **lente biconvexa** que no cruza suturas craneales. El cuadro típico —aunque presente en menos de un tercio— es el **intervalo lúcido** seguido de deterioro rápido y midriasis ipsilateral. Pronóstico excelente si se evacua oportunamente.
- **Hematoma subdural agudo:** causado por desgarro de las **venas puente** corticales, frecuente en ancianos y alcohólicos por atrofia cerebral. En la TC adopta forma de **semiluna (cóncavo-convexa)** que sí cruza suturas pero no la línea media (respetando la hoz). Su mortalidad es mayor que la del epidural porque suele acompañarse de lesión parenquimatosa subyacente.
- **Contusiones hemorrágicas y hemorragia subaracnoidea traumática:** las contusiones frontobasales y temporales pueden progresar («florecer») en las primeras 24–48 horas, obligando a TC de control.
- **Lesión axonal difusa (LAD):** producida por fuerzas rotacionales de aceleración-desaceleración; produce coma profundo prolongado con TC inicial casi normal o con microhemorragias en cuerpo calloso y unión cortico-subcortical.

#### Manejo escalonado del TCE grave
1. **Estabilización ABCDE sin retraso:** intubación con secuencia rápida (sin descuidar presión arterial durante la inducción), mantener **SpO₂ > 94–95 %** (PaO₂ > 60 mmHg) y **normocapnia (PaCO₂ 35–40 mmHg)**. Evitar la hiperventilación profiláctica porque la vasoconstricción cerebral agrava la isquemia; la hiperventilación leve transitoria (PaCO₂ 30–35 mmHg) se reserva únicamente como puente temporal ante signos clínicos de herniación aguda.
2. **Metas hemodinámicas estrictas:** **no existe hipotensión permisiva en el TCE**. Según las guías de la *Brain Trauma Foundation* (4.ª ed.) y ATLS 10.ª ed., mantener **PAS ≥ 100 mmHg** en pacientes de 50–69 años y **PAS ≥ 110 mmHg** en menores de 50 o mayores de 70 años. Usar solución salina isotónica o balanceada; evitar soluciones hipotónicas y glucosadas.
3. **Medidas generales de control de PIC:** elevar la cabecera a 30° manteniendo el cuello en posición neutra (sin comprimir yugulares con collarín excesivamente apretado), sedación y analgesia adecuadas, control estricto de fiebre y glucemia (140–180 mg/dL), mantener sodio sérico en rango normal-alto (140–145 mEq/L).
4. **Terapia hiperosmolar:** indicada ante deterioro pupilar, herniación o PIC > 22 mmHg. Se utiliza **solución salina hipertónica** (3 % o 23.4 % por vía central; preferida en pacientes hipovolémicos o hipotensos) o **manitol** al 20 % (0.25–1 g/kg IV en bolo, contraindicado si el paciente está hipotenso por su diuresis osmótica).
5. **Profilaxis anticonvulsiva y reversión de anticoagulantes:** levetiracetam o fenitoína por **7 días** en TCE grave para prevenir convulsiones tempranas (no previenen epilepsia tardía). Revertir de inmediato warfarina (concentrado de complejo protrombínico + vitamina K) o anticoagulantes directos.
6. **Criterios neuroquirúrgicos (evacuación urgente):** hematoma epidural > 30 mL (sin importar GCS) o espesor > 15 mm o desviación de línea media > 5 mm; hematoma subdural agudo con espesor > 10 mm o desviación > 5 mm o caída ≥ 2 puntos en GCS; fractura craneal deprimida mayor al grosor de la tabla ósea o abierta con fuga de LCR. Monitorización de PIC en TCE grave con TC anormal o con TC normal si cumple ≥ 2 criterios (edad > 40 años, postura motora anormal o PAS < 90 mmHg).

### Trauma raquimedular y evaluación de la columna cervical
La lesión de la columna cervical debe asumirse en todo politraumatizado hasta descartarla. En el paciente alerta, estable y cooperador se puede retirar el collarín sin estudios de imagen si cumple los **cinco criterios NEXUS**: ausencia de dolor en línea media cervical posterior, ausencia de intoxicación, estado de alerta normal (GCS 15), ausencia de déficit neurológico focal y ausencia de lesión dolorosa distractora. La *Canadian C-Spine Rule* complementa esta valoración evaluando edad (< 65 años), mecanismo de bajo riesgo y capacidad de rotar el cuello 45° a ambos lados. Si no cumple criterios clínicos, el estudio de elección actual es la **TC de columna cervical de cortes finos** (superior a la radiografía simple de tres proyecciones).

#### Síndromes medulares y estados de choque
- **Lesión medular completa:** pérdida total de función motora y sensitiva por debajo del nivel lesional (incluidos segmentos sacros S4–S5).
- **Síndrome medular central:** el síndrome incompleto más frecuente; típico de hiperextensión cervical en adultos mayores con espondilosis. Produce debilidad desproporcionadamente mayor en **extremidades superiores** que en inferiores, con alteración sensitiva variable.
- **Síndrome de Brown-Séquard (hemisección medular):** común en trauma penetrante; parálisis motora y pérdida de propiocepción/vibración **ipsilaterales**, con pérdida de dolor y temperatura **contralaterales** uno o dos segmentos abajo.
- **Síndrome medular anterior:** lesión de arteria espinal anterior; paraplejía y pérdida de dolor/temperatura bilateral con **preservación de columnas posteriores** (propiocepción y vibración). Peor pronóstico.
- **Choque neurogénico vs choque medular (distinción crítica):**
  - El **choque neurogénico** es un fenómeno hemodinámico (choque distributivo) en lesiones medulares **por arriba de T6** por pérdida del tono simpático y predominio vagal: produce **hipotensión con bradicardia paradójica y piel caliente y seca** en extremidades inferiores. Antes de atribuir la hipotensión al choque neurogénico, siempre descartar hemorragia oculta. Se trata con volumen juicioso, **noradrenalina** (meta PAM 85–90 mmHg durante los primeros 5–7 días para optimizar la perfusión medular) y atropina si hay bradicardia sintomática.
  - El **choque medular (*spinal shock*)** es un fenómeno neurológico transitorio (horas a semanas) caracterizado por flacidez, arreflexia y pérdida del tono esfinteriano por debajo de la lesión; su resolución se marca con el retorno del **reflejo bulbocavernoso**, momento a partir del cual puede determinarse con certeza si la lesión es completa o incompleta.
- **Esteroides:** las guías actuales de ATLS y AANS/CNS **no recomiendan metilprednisolona** en dosis altas de rutina en lesión medular aguda por el incremento de infecciones, sangrado digestivo e hiperglucemia sin beneficio neurológico consistente.

### Trauma de cuello: anatomía por zonas y abordaje actual
El cuello concentra en un espacio muy reducido estructuras vasculares (carótidas, vertebrales, yugulares, subclavias), vía aérea (laringe, tráquea), tubo digestivo (faringe, esófago) y sistema nervioso (médula, plexo braquial, pares craneales IX–XII). La frontera anatómica esencial es el **músculo platisma**: toda herida que rebasa el platisma se considera penetrante y conlleva riesgo de lesión profunda. **Nunca explorar a ciegas con pinzas o dedos una herida cervical en urgencias**, ya que puede desalojar un coágulo y desencadenar una hemorragia exanguinante o embolia aérea.

| Zona cervical | Límites anatómicos | Estructuras principales en riesgo | Consideración quirúrgica |
|---|---|---|---|
| **Zona I** | Clavículas / horquilla esternal hasta borde inferior del cartílago cricoides | Vasos subclavios, tronco braquiocefálico, carótidas proximales, vértice pulmonar, tráquea, esófago distal, conducto torácico | Acceso quirúrgico difícil; suele requerir esternotomía media o toracotomía anterolateral para control proximal |
| **Zona II** | Cartílago cricoides hasta ángulo de la mandíbula | Carótida común/interna/externa, vena yugular interna, laringe, tráquea cervical, faringe y esófago cervical | Zona más frecuentemente lesionada y la más accesible mediante cervicotomía por borde anterior del ECM |
| **Zona III** | Ángulo de la mandíbula hasta la base del cráneo | Carótida interna distal, arteria vertebral, pares craneales altos, faringe superior | Control quirúrgico distal muy difícil; la terapia endovascular es clave en lesiones vasculares |

#### Paradigma moderno «sin zonas» (*no-zone approach*)
Históricamente, toda herida penetrante en Zona II obligaba a exploración quirúrgica sistemática, mientras que las Zonas I y III exigían angiografía y estudios endoscópicos. Hoy, respaldado por las guías de la **WTA (*Western Trauma Association*) y EAST**, el manejo se rige por la **estabilidad hemodinámica y la presencia de signos duros**, independientemente de la zona:
- **Signos duros (indicación inmediata de quirófano):** hemorragia activa pulsátil o incontrolable, hematoma expansivo o pulsátil, ausencia de pulso carotídeo o déficit neurológico central evolutivo (isquemia cerebral), soplo o frémito cervical, burbujeo de aire por la herida (*sucking neck wound*) o compromiso grave de la vía aérea/hemoptisis masiva.
- **Signos blandos (requieren estudio dirigido en paciente estable):** hematoma estable no expansivo, antecedente de sangrado significativo en escena, hemoptisis o hematemesis leve, disfonía, disfagia u odinofagia, enfisema subcutáneo y trayecto cercano a estructuras mayores o que cruza la línea media.

### Manejo paso a paso del trauma de cuello
1. **Asegurar vía aérea y hemostasia inicial:** intubación precoz si hay hematoma expansivo, estridor o distorsión anatómica (tener listo equipo de cricotiroidotomía). Ante sangrado profuso por herida profunda en cuello no compresible, puede introducirse temporalmente una **sonda Foley** en el trayecto e inflar el globo con 10–15 mL de solución salina como taponamiento puente hasta llegar a quirófano.
2. **Paciente inestable o con signos duros:** traslado inmediato a quirófano sin perder tiempo en estudios de imagen. El abordaje clásico en Zona II es la **cervicotomía oblicua sobre el borde anterior del músculo esternocleidomastoideo** (o incisión en collar si es transcervical bilateral), logrando control vascular proximal y distal antes de abrir el hematoma. Las lesiones de arteria carótida común o interna se reparan primariamente o con injerto venoso (la ligadura solo se reserva para coma profundo prolongado sin flujo distal o exanguinación incontrolable); la vena yugular interna puede ligarse si es unilateral. Las perforaciones esofágicas tempranas se cierran en dos planos con interposición de colgajo muscular (ECM u omohioideo) y drenaje amplio.
3. **Paciente estable sin signos duros con violación del platisma:** estudio de elección actual es la **angiotomografía (angio-TC) helicoidal multicorte de cuello**, que ofrece sensibilidad y especificidad > 95 % para lesiones vasculares y define el trayecto respecto a tráquea y esófago.
   - Si la angio-TC descarta lesión vascular y el trayecto se aleja del eje aerodigestivo sin signos blandos: observación clínica 24 horas.
   - Si el trayecto es adyacente al eje aerodigestivo o existen signos blandos (disfagia, enfisema subcutáneo, hemoptisis): complementar con **esofagograma con contraste hidrosoluble** (seguido de bario diluido si resulta negativo), **esofagoscopia flexible** y **laringobroncoscopia**; la combinación de ambos estudios alcanza sensibilidad cercana al 100 % para lesión esofágica oculta.
   - En trauma cerrado de cuello con mecanismo de alta energía (cinturón de seguridad, fractura cervical C1–C3 o de agujero transverso, fractura Le Fort II–III, ahorcamiento), aplicar los **criterios de Denver** para solicitar angio-TC y descartar lesión cerebrovascular contusa (BCVI), tratada con antiagregación o anticoagulación según el grado de Biffl (I–V).

### Perlas de examen
- **Hematoma epidural:** arteria meníngea media, lente biconvexa, no cruza suturas, intervalo lúcido. **Hematoma subdural:** venas puente, semiluna, cruza suturas pero no la línea media.
- En el TCE grave (GCS ≤ 8), intubar de inmediato, evitar hipotensión (**PAS ≥ 100–110 mmHg**) e hipoxia, y **no hiperventilar de rutina**.
- **Choque neurogénico** (arriba de T6) = hipotensión + **bradicardia** + piel caliente; **choque medular** = flacidez y arreflexia que termina al reaparecer el **reflejo bulbocavernoso**.
- En trauma penetrante de cuello **nunca explorar la herida a ciegas en urgencias**; los signos duros van directo a quirófano y el paciente estable sin signos duros se estudia con **angio-TC** (*no-zone approach*).
- El **síndrome medular central** afecta más a extremidades superiores que a inferiores y es el síndrome incompleto más común tras hiperextensión cervical en adultos mayores.
- Una lesión esofágica cervical no diagnosticada en las primeras 24 horas multiplica la mortalidad por mediastinitis descendente; ante enfisema subcutáneo o trayecto transcervical, siempre combinar esofagograma + endoscopia.

### Referencias
ATLS 10.ª ed. (ACS, 2018) · Carney N et al. *Brain Trauma Foundation Guidelines for the Management of Severe Traumatic Brain Injury*, 4.ª ed., Neurosurgery 2017 · Sperry JL et al. *Western Trauma Association Critical Decisions in Trauma: Penetrating Neck Trauma*, J Trauma Acute Care Surg 2013 · Bromberg WJ et al. *EAST Practice Management Guidelines for Blunt Cerebrovascular Injury* · Sabiston 21.ª ed. · Schwartz 11.ª ed.
`),
    sheet('tr-torax', '04', 'Trauma de tórax', `
## Trauma de tórax

### Epidemiología y enfoque general
El trauma torácico es responsable directo del 20 al 25 % de todas las muertes por trauma y contribuye como factor asociado en otro 25 %. A pesar de su alta letalidad potencial, una regla fundamental del ATLS es que **entre el 80 y el 85 % de las lesiones torácicas —tanto cerradas como penetrantes— se resuelven sin toracotomía**, mediante maniobras simples pero oportunas: aseguramiento de la vía aérea, oxígeno, analgesia eficaz, reanimación juiciosa y colocación de una sonda endopleural. Solo el 10 al 15 % de los traumatismos torácicos requieren intervención quirúrgica mayor.

La fisiopatología común de la muerte en el trauma de tórax se reduce a tres vías finales: **hipoxia** (por hipoventilación, cortocircuito intrapulmonar por contusión o colapso pulmonar), **hipovolemia** (por sangrado de grandes vasos, corazón o arterias intercostales/mamarias) y **choque obstructivo** (por neumotórax a tensión o taponamiento cardiaco que impiden el retorno venoso).

### Lesiones que matan en minutos (evaluación primaria)
Se identifican y tratan de inmediato durante los pasos A, B y C del ATLS:
1. **Obstrucción de la vía aérea y lesión del árbol traqueobronquial:** sospechar lesión traqueobronquial ante enfisema subcutáneo cervical/torácico masivo, hemoptisis, neumomediastino y **fuga aérea persistente con falla de reexpansión pulmonar** tras colocar una sonda pleural bien posicionada. La confirmación es por broncoscopia y el tratamiento definitivo suele ser reparación quirúrgica (en el paciente inestable, intubación selectiva del bronquio sano).
2. **Neumotórax a tensión:** mecanismo de válvula unidireccional que acumula aire a presión en el espacio pleural, colapsa el pulmón ipsilateral, desplaza el mediastino al lado opuesto y colapsa las venas cavas, provocando choque obstructivo fulminante. El diagnóstico es **estrictamente clínico** (taquipnea, hipoxia, hipotensión, ausencia de murmullo vesicular, timpanismo ipsilateral, ingurgitación yugular y desviación traqueal tardía). Tratamiento inmediato: descompresión torácica (aguja o toracostomía digital) seguida de sonda endopleural.
3. **Neumotórax abierto (herida torácica succionante):** ocurre cuando el defecto de la pared supera dos tercios del diámetro traqueal, haciendo que el aire entre preferentemente por la herida durante la inspiración. Manejo inicial: apósito oclusivo estéril fijado en **tres de sus cuatro lados** (válvula unidireccional que deja salir aire al espirar pero impide su entrada al inspirar), seguido de sonda pleural en un sitio alejado de la herida y cierre quirúrgico definitivo del defecto.
4. **Hemotórax masivo:** acumulación rápida de **≥ 1,500 mL de sangre** (o más de un tercio de la volemia) en una cavidad pleural, habitualmente por herida penetrante de vasos hiliares, corazón, aorta o arteria mamaria interna. Produce choque hipovolémico combinado con hipoxia, matidez a la percusión, ausencia de murmullo vesicular y venas del cuello colapsadas (a diferencia del neumotórax a tensión y el tamponade). Tratamiento: reanimación hemostática simultánea + sonda endopleural 28–32 Fr (nunca esperar a colocar la sonda sin tener vías y sangre listas) + **toracotomía urgente**.
5. **Taponamiento cardiaco:** más común en heridas penetrantes dentro de la «caja cardiaca» (entre líneas medioclaviculares, clavículas y reborde costal/epigastrio). Bastan 100–200 mL de sangre en el saco pericárdico fibroso para colapsar las cavidades derechas y precipitar choque obstructivo. La **tríada de Beck** (hipotensión, ingurgitación yugular y ruidos cardiacos velados) aparece completa en menos del 40 % de los casos; también pueden observarse el signo de Kussmaul (aumento de la presión venosa yugular en inspiración) y actividad eléctrica sin pulso. El diagnóstico rápido se confirma con la ventana subxifoidea del **eFAST** (sensibilidad > 90 %, menor si existe hemotórax izquierdo asociado que descomprime el pericardio). En el paciente estable con duda diagnóstica se realiza **ventana pericárdica subxifoidea**; el tratamiento definitivo es **esternotomía media o toracotomía anterolateral izquierda** con cardiorrafia. La pericardiocentesis es únicamente una medida transitoria de rescate si no hay acceso inmediato a quirófano.
6. **Tórax inestable (volet costal) y contusión pulmonar:** fractura de dos o más costillas consecutivas en dos o más sitios (o disyunción costocondral), generando un segmento parietal con **movimiento paradójico** (se hunde en inspiración y sobresale en espiración). La causa principal de hipoxemia **no es el movimiento paradójico sino la contusión pulmonar subyacente** y el dolor que limita la ventilación. Manejo: oxígeno humidificado, **analgesia multimodal agresiva** (catéter epidural torácico o bloqueo paravertebral/serrato), higiene bronquial, **restricción de líquidos** (la sobrecarga empeora el edema de la contusión pulmonar) y ventilación mecánica protectora solo si hay insuficiencia respiratoria. La fijación quirúrgica costal se considera en pacientes seleccionados que no logran destete ventilatorio o presentan deformidad grave de la pared.

### Lesiones potencialmente letales (evaluación secundaria)
Se buscan activamente con radiografía de tórax, ECG y angiotomografía en el paciente estabilizado:
- **Neumotórax simple y hemotórax simple:** tratados con sonda endopleural si son sintomáticos, moderados/grandes o el paciente requerirá ventilación mecánica con presión positiva (un neumotórax oculto pequeño < 2 cm en paciente asintomático sin ventilación puede observarse de forma estrecha).
- **Contusión pulmonar:** la lesión parenquimatosa potencialmente letal más frecuente en trauma cerrado; las opacidades en la radiografía suelen tardar 6–24 horas en manifestarse plenamente, mientras la TC la detecta de inmediato.
- **Trauma cardiaco cerrado:** sospechar en impacto esternal frontal. Según las guías EAST, un **ECG de 12 derivaciones normal + troponina I normal** al ingreso descarta lesión clínicamente significativa; si cualquiera es anormal, ingresar a telemetría 24–48 horas y realizar ecocardiograma si hay inestabilidad o arritmia.
- **Lesión aórtica traumática:** ocurre por desaceleración súbita en el **istmo aórtico** (inmediatamente distal al origen de la arteria subclavia izquierda, a nivel del ligamento arterioso). Más del 80 % mueren en la escena; los que llegan vivos están contenidos por la adventicia. Signos en radiografía de tórax: **ensanchamiento mediastinal > 8 cm**, borramiento del botón aórtico, desviación de la tráquea o sonda nasogástrica a la derecha, depresión del bronquio principal izquierdo, casquete apical izquierdo y fractura de 1.ª o 2.ª costilla. El estudio confirmatorio es la **angio-TC de tórax**. Manejo inicial urgente: **control de impulso (terapia antiimpulso)** con esmolol o labetalol IV para mantener FC < 80–90 lpm y PAS < 100–120 mmHg, seguido de **reparación endovascular torácica (TEVAR)**, que ha desplazado a la cirugía abierta por su menor mortalidad y menor riesgo de paraplejía.
- **Ruptura diafragmática traumática:** más diagnosticada del **lado izquierdo** (el hígado protege y tampona el hemidiafragma derecho). Sospechar ante elevación del hemidiafragma, burbuja gástrica o punta de sonda nasogástrica enrollada en el hemitórax izquierdo. En trauma penetrante toracoabdominal izquierdo estable con TC normal, la **laparoscopia diagnóstica** es el estándar para descartar una lesión oculta que de otro modo evolucionaría a hernia diafragmática estrangulada meses o años después. El abordaje agudo es habitualmente abdominal (por la alta frecuencia de lesiones abdominales asociadas) reparando con sutura no absorbible.
- **Ruptura esofágica traumática:** sospechar ante herida transmediastinal o golpe epigástrico severo con neumomediastino, enfisema cervical o salida de contenido gástrico por sonda pleural izquierda (en trauma cerrado imita el síndrome de Boerhaave).

| Situación clínica | Criterio específico | Abordaje quirúrgico de elección |
|---|---|---|
| **Hemotórax masivo inicial** | Drenaje inmediato ≥ 1,500 mL de sangre al colocar sonda pleural | Toracotomía anterolateral (4.º–5.º EIC) del lado afectado |
| **Sangrado torácico persistente** | Gasto > 200 mL/h durante 2–4 horas consecutivas (o necesidad continua de transfusión) | Toracotomía anterolateral del lado afectado |
| **Taponamiento cardiaco / herida cardiaca** | eFAST positivo o ventana pericárdica positiva | Esternotomía media (estable) o toracotomía anterolateral izquierda (inestable) |
| **Lesión traqueobronquial mayor** | Fuga aérea masiva persistente sin reexpansión pulmonar | Toracotomía posterolateral derecha (tráquea distal/carina/bronquio der.) o izquierda (bronquio izq. distal) |
| **Toracotomía de reanimación (sala de choque)** | Paro presenciado por trauma penetrante torácico con signos de vida / RCP < 15 min (o trauma cerrado con signos de vida y RCP < 10 min según guías EAST) | Toracotomía anterolateral izquierda en 4.º–5.º EIC (extensible a *clamshell*): liberar pericardio anterior al nervio frénico, cardiorrafia, masaje cardiaco abierto, pinzamiento aórtico descendente |

### Taller práctico paso a paso: descompresión pleural, toracostomía cerrada y pericardiocentesis

#### 1. Descompresión con aguja y toracostomía digital (neumotórax a tensión)
- **Sitio actualizado (ATLS 10.ª ed.):** en adultos, **4.º o 5.º espacio intercostal justo anterior a la línea axilar media** (pared torácica más delgada y menor tasa de falla que el 2.º EIC medioclavicular, que se conserva como sitio preferente en población pediátrica).
- **Técnica con aguja:** asepsia rápida, insertar catéter sobre aguja calibre 14 G de al menos 5–8 cm perpendicular a la piel, rozando el **borde superior de la costilla inferior** para proteger el paquete neurovascular intercostal. Al escuchar salida de aire a presión, avanzar el catéter, retirar la aguja y preparar de inmediato la sonda endopleural definitiva. En pacientes en paro o con ventilación mecánica por personal entrenado, la **toracostomía digital** (incisión y penetración con pinza y dedo directamente a la pleura sin sonda inicial) es aún más confiable.

#### 2. Toracostomía cerrada (colocación de sonda endopleural)
- **Referencias anatómicas (triángulo de seguridad):** borde lateral del pectoral mayor adelante, borde anterior del dorsal ancho atrás y línea horizontal a nivel del pezón/5.º espacio intercostal abajo (4.º–5.º EIC entre línea axilar anterior y media).
- **Preparación:** paciente en decúbito supino con el brazo ipsilateral en abducción por encima de la cabeza; asepsia amplia con clorhexidina alcohólica y campos estériles; profilaxis antibiótica controversial pero habitualmente cefazolina dosis única en trauma penetrante (guías EAST actuales no la exigen de rutina en trauma cerrado simple).
- **Anestesia local:** infiltrar lidocaína al 1–2 % con epinefrina formando habón cutáneo, trayecto subcutáneo, periostio de la costilla inferior y pleura parietal (confirmando aspiración de aire o sangre).
- **Incisión y disección:** incisión transversal de 2–3 cm paralela al espacio intercostal un espacio por debajo del punto de entrada pleural deseado (túnel subcutáneo). Disecar de forma roma con pinza de Kelly curva sobre el **borde superior de la costilla** atravesando músculos intercostales y pleura parietal con un chasquido controlado (nunca usar trócar metálico por alto riesgo de perforación cardiaca, hepática o pulmonar).
- **Exploración digital obligatoria:** introducir el dedo índice enguantado en la cavidad pleural girando 360° para confirmar localización intrapleural real, descartar adherencias y verificar la ausencia de diafragma o vísceras abdominales herniadas.
- **Inserción y fijación:** elegir calibre **28–32 Fr** en hemotórax (en neumotórax simple basta 14 Fr tipo *pigtail* o 20–24 Fr; estudios recientes demuestran igual eficacia de 28–32 Fr frente a 36–40 Fr con mucho menos dolor). Avanzar la sonda guiada con pinza hacia arriba y atrás (apical-posterior), verificando que **el último orificio lateral quede completamente dentro de la cavidad torácica**. Conectar al sistema de sello de agua de tres cámaras (recolección, sello a 2 cmH₂O y succión a −20 cmH₂O), asegurar con sutura resistente (seda 0 o 1-0 en bolsa de tabaco o jareta + fijación con nudo de bailarina), cubrir con gasas estériles y confirmar posición y reexpansión mediante **radiografía de tórax**.
- **Criterios de retiro:** pulmón reexpandido sin fuga aérea durante 24 horas y gasto seroso < 150–200 mL en 24 horas. Se retira en **espiración forzada o inspiración máxima sostenida (maniobra de Valsalva)** ocluyendo de inmediato el orificio con gasa petrolada.

#### 3. Pericardiocentesis subxifoidea (medida puente temporal)
- **Indicación:** exclusivamente rescate temporal en taponamiento cardiaco cuando no existe disponibilidad inmediata de quirófano o cirujano para ventana/toracotomía (la sangre coagulada con frecuencia no puede aspirarse por aguja).
- **Técnica:** guía ecográfica siempre que esté disponible; paciente semiincorporado a 30–45°, asepsia, punción 1–2 cm debajo y a la izquierda del apéndice xifoides con aguja larga calibre 16–18 G montada en jeringa, avanzando con aspiración continua en ángulo de 30–45° dirigida hacia el **hombro izquierdo**. Al obtener sangre no coagulable (desfibrinada por el movimiento cardiaco), aspirar el volumen mínimo que restaure la presión arterial (a menudo 20–50 mL bastan para una mejoría espectacular) y dejar un catéter tipo Seldinger mientras se traslada a cirugía. Si aparece elevación del ST o extrasístoles en el monitor, la aguja tocó el epicardio y debe retirarse unos milímetros.

### Complicaciones del trauma torácico
El **hemotórax retenido** (coágulo residual > 300–500 mL visible en TC tras la primera sonda) conlleva un riesgo elevado de empiema y fibrotórax; en lugar de colocar múltiples sondas ineficaces, las guías EAST y WSES recomiendan **videotoracoscopia (VATS) temprana entre el día 3 y el día 7** para evacuar el coágulo y lavar la cavidad. Otras complicaciones incluyen neumonía asociada a contusión pulmonar, SDRA, fístula broncopleural y lesiones iatrogénicas durante la toracostomía (paquete intercostal, parénquima pulmonar, hígado o bazo si se punciona por debajo del 5.º EIC).

### Perlas de examen
- El **80–85 %** de los traumatismos torácicos se manejan sin toracotomía (sonda endopleural, oxígeno y analgesia).
- **ATLS 10.ª ed.:** la descompresión con aguja del neumotórax a tensión en adultos se realiza en el **4.º–5.º espacio intercostal justo anterior a la línea axilar media**; en niños permanece el 2.º EIC línea medioclavicular.
- En el **tórax inestable**, lo que causa hipoxemia grave es la **contusión pulmonar subyacente** y el dolor, no el movimiento paradójico; evitar sobrecarga de líquidos y dar analgesia regional temprana.
- Indicaciones clásicas de toracotomía en hemotórax: **≥ 1,500 mL iniciales** o **> 200 mL/h durante 2–4 horas**.
- La lesión aórtica traumática ocurre en el **istmo aórtico** (distal a la subclavia izquierda); el tratamiento inicial es control de frecuencia cardiaca y presión arterial con betabloqueador seguido de **TEVAR**.
- Ante un **hemotórax retenido**, el procedimiento de elección es **VATS temprana** (días 3–7) para evitar empiema y decorticación tardía.

### Referencias
ATLS 10.ª ed. (ACS, 2018) · Seamon MJ et al. *EAST Practice Management Guideline: Emergency Department Thoracotomy*, J Trauma Acute Care Surg 2015 · Patel NJ et al. *EAST Guideline: Retained Hemothorax*, J Trauma Acute Care Surg 2021 · Lee WA et al. *SVS Clinical Practice Guidelines for TEVAR in Blunt Thoracic Aortic Injury* · Sabiston 21.ª ed. · Schwartz 11.ª ed.
`),
    sheet('tr-abdomen', '05', 'Trauma abdominal y cirugía de control de daños', `
## Trauma abdominal y cirugía de control de daños

### Anatomía por regiones y epidemiología
El abdomen es el tercer sitio anatómico más afectado en el politraumatizado, después del cráneo y el tórax, y representa la fuente más frecuente de hemorragia oculta fatal. Para orientar la sospecha diagnóstica, el abdomen se divide en cuatro compartimentos:
1. **Cavidad peritoneal:** dividida en abdomen superior (intratorácico, protegido parcialmente por la parrilla costal: diafragma, hígado, bazo, estómago y colon transverso) y abdomen inferior (intestino delgado y resto del colon).
2. **Región toracoabdominal:** delimitada arriba por el 4.º espacio intercostal anterior (línea mamilar) y las puntas de las escápulas atrás, y abajo por el reborde costal. Durante la espiración forzada el diafragma asciende hasta el 4.º EIC; por ello, **toda herida penetrante en esta franja puede lesionar simultáneamente tórax, diafragma y vísceras abdominales**.
3. **Espacio retroperitoneal:** aorta abdominal, vena cava inferior, páncreas, mayor parte del duodeno, riñones, uréteres y cara posterior del colon ascendente y descendente. Las lesiones aquí dan pocos signos peritoneales iniciales y **el FAST no las detecta**.
4. **Pelvis:** recto, vejiga, vasos ilíacos y órganos reproductores internos.

Por mecanismo, el órgano más frecuentemente lesionado en el **trauma cerrado** es el **bazo**, seguido del **hígado** y el intestino delgado. En las **heridas por arma de fuego** predomina el **intestino delgado** (por el volumen que ocupa), seguido del colon y el hígado. En las **heridas por arma blanca** predomina el **hígado**, seguido del intestino delgado, el diafragma y el colon.

### Evaluación diagnóstica y toma de decisiones
El objetivo clínico inmediato en urgencias no es ponerle nombre exacto a cada órgano lesionado, sino responder una sola pregunta operativa: **¿este paciente requiere laparotomía de urgencia ahora mismo?**

#### Limitaciones de la exploración física
La exploración abdominal busca dolor, defensa involuntaria, rigidez en tabla, rebote, distensión progresiva, evisceración, heridas de entrada y salida, signo del cinturón de seguridad, equimosis periumbilical (signo de Cullen) o en flancos (signo de Grey Turner, sugestivos de hemorragia retroperitoneal). Sin embargo, el examen abdominal es **poco confiable hasta en el 40 % de los pacientes** cuando existe TCE, intoxicación por alcohol o drogas, lesión medular, fracturas distractoras o analgesia potente; en esos escenarios nunca basta una exploración «normal» para descartar lesión.

#### Herramientas diagnósticas según estabilidad
- **FAST (*Focused Assessment with Sonography for Trauma*):** rápido (2–3 minutos), repetible y realizado a la cabecera en la sala de choque. Detecta líquido libre intraperitoneal a partir de ~200–250 mL en los espacios de Morison (el más sensible en decúbito supino), esplenorrenal y fondo de saco de Douglas. Su utilidad máxima está en el **paciente inestable**: un FAST positivo obliga a laparotomía inmediata. Sus dos grandes limitaciones son que **no descarta lesión de víscera hueca ni lesiones retroperitoneales** y depende del operador.
- **Tomografía computarizada (TC) trifásica con contraste IV:** estándar de oro en el **paciente hemodinámicamente estable**. Gradúa con precisión las lesiones de órganos sólidos (escala AAST), detecta extravasación activa arterial (*blush*) candidata a angioembolización, evalúa el retroperitoneo y muestra signos directos o indirectos de perforación de víscera hueca (neumoperitoneo, líquido libre sin lesión de órgano sólido, engrosamiento mural o infiltración mesentérica). **Jamás se realiza en un paciente inestable.**
- **Exploración local de la herida (ELH):** útil únicamente en heridas por **arma blanca en abdomen anterior** en pacientes estables y sin peritonitis. Bajo anestesia local y condiciones estériles, se amplía suavemente la herida para verificar si penetró la **fascia anterior**. Si la fascia está íntegra, el paciente puede egresarse con curación; si está violada o la exploración es dudosa, ingresa a observación clínica seriada cada 4 horas por 24 horas (con biometrías seriadas) o se realiza TC/laparoscopia según localización. **No se realiza ELH en heridas por arma de fuego, región toracoabdominal ni en pacientes obesos donde no se ve el fondo.**
- **Laparoscopia diagnóstica:** excelente para descartar **lesión diafragmática oculta** en heridas penetrantes toracoabdominales izquierdas estables y para confirmar penetración peritoneal en heridas tangenciales.
- **Lavado peritoneal diagnóstico (LPD):** hoy casi desplazado por el FAST y la TC; conserva utilidad histórica o en entornos sin ultrasonido/tomógrafo. Es positivo ante aspiración inicial de ≥ 10 mL de sangre franca o contenido intestinal, o en el líquido lavado: > 100,000 eritrocitos/mm³ en trauma cerrado (> 10,000 en penetrante), > 500 leucocitos/mm³, tinción de Gram positiva, fibras vegetales o amilasa/bilirrubina elevadas.

| Mecanismo | Indicaciones absolutas de laparotomía inmediata | Conducta si el paciente está estable y sin indicaciones absolutas |
|---|---|---|
| **Trauma cerrado** | Inestabilidad hemodinámica con FAST positivo (o LPD+), peritonitis difusa, neumoperitoneo o aire retroperitoneal, ruptura diafragmática, rotura intraperitoneal de vejiga | TC de abdomen y pelvis con contraste IV → manejo no operatorio selectivo o angioembolización |
| **Arma blanca** | Inestabilidad hemodinámica, peritonitis, evisceración de vísceras (el epiplón aislado en paciente estable es manejable selectivamente en centros con experiencia), sangrado digestivo/genitourinario, empalamiento | Abdomen anterior: exploración local de herida → si viola fascia, observación seriada 24 h (guías EAST/WTA). Toracoabdominal izq.: laparoscopia diagnóstica. Flanco/espalda: TC con triple contraste (o IV + rectal) |
| **Arma de fuego** | Inestabilidad hemodinámica, peritonitis, evisceración, trayectoria transabdominal evidente (tradicionalmente > 80–90 % tienen lesión visceral) | Manejo no operatorio selectivo **solo** en centros de alto volumen con TC multicorte que confirme trayectoria estrictamente superficial/tangencial o lesión hepática aislada sin peritonitis |

### Laparotomía exploradora en trauma paso a paso
Cuando se decide cirugía, el objetivo es sistematizar la exploración para no morir de hemorragia ni omitir lesiones:
1. **Preparación amplia:** lavado antiséptico desde el mentón/cuello hasta el tercio medio de los muslos (incluyendo tórax por si se requiere esternotomía o toracotomía y muslo por si se requiere injerto de vena safena). Disponer de dos aspiradores, separador autoestático, compresas abundantes tibias y autotransfusor si aplica.
2. **Incisión:** laparotomía media amplia **xifopúbica** (en segundos, con bisturí frío y tijera/cauterio).
3. **Control inicial de la hemorragia:** evacuar rápidamente sangre y coágulos manualmente y **empaquetar los cuatro cuadrantes** (perihepático, periesplénico, ambos corredores paracólicos y pelvis) con compresas secas. En ese momento hacer una breve pausa coordinada con anestesiología para reanimar con hemoderivados antes de liberar el taponamiento. Si hay hemorragia masiva arterial incontrolable que amenaza paro inmediato, realizar **compresión manual de la aorta supracelíaca** en el hiato diafragmático.
4. **Desempaquetamiento sistemático:** retirar las compresas comenzando por el cuadrante **menos probable** de sangrar y dejando al final el foco principal. Controlar primero el sangrado arterial/venoso mayor y después la contaminación gastrointestinal (pinzas intestinales atraumáticas, suturas provisionales o grapadoras lineales).
5. **Exploración visceral completa:** examinar ambos hemidiafragmas, hígado, bazo, cara anterior y posterior del estómago (abriendo la transcavidad), duodeno y páncreas (maniobra de Kocher si está indicado), recorrer todo el intestino delgado desde el ángulo de Treitz hasta la válvula ileocecal por ambas caras y mesenterio, colon completo y recto intraperitoneal.
6. **Manejo de hematomas retroperitoneales (zonas de Kudsk y Sheldon):**
   - **Zona I (central, supramesocólica e inframesocólica — aorta, VCI, páncreas, duodeno):** se explora **siempre** (tanto en trauma cerrado como penetrante), logrando primero control vascular proximal (maniobra de Mattox —rotación visceral medial izquierda— para aorta y vasos izquierdos; maniobra de Cattell-Braasch —rotación visceral medial derecha— para VCI, vasos renales derechos y vasos ilíacos).
   - **Zona II (lateral — riñones y vasos renales):** en trauma penetrante suele explorarse si hay hematoma en expansión, pulsátil o no contenido; en trauma cerrado **no se explora** salvo que sea pulsátil, expansivo o el paciente esté inestable (evita nefrectomías innecesarias).
   - **Zona III (pélvica — vasos ilíacos y plexo presacro):** en **trauma cerrado NO se abre el peritoneo pélvico** (romper el taponamiento natural provoca exanguinación venosa fatal); se controla con empaquetamiento preperitoneal, fijación externa y angioembolización. En trauma penetrante sí se explora por alta probabilidad de lesión ilíaca arterial.

### Cirugía de control de daños (CCD) y abdomen abierto
Descrita formalmente por Rotondo en 1993, la **cirugía de control de daños** reconoce que el paciente traumatizado crítico no muere por falta de una reconstrucción anatómica perfecta, sino por agotar su reserva fisiológica al caer en el diamante letal. **La decisión de pasar a control de daños debe tomarse temprano** (idealmente en los primeros 15–30 minutos de cirugía), no como último recurso cuando el paciente ya está en paro.

#### Disparadores clásicos de control de daños
- Acidosis grave (**pH < 7.20** o déficit de base > 8–15 mEq/L, lactato > 5 mmol/L).
- Hipotermia (**temperatura central < 35 °C**).
- Coagulopatía clínica (sangrado difuso en sábana por superficies cruentas) o transfusión masiva (> 10 unidades de concentrado eritrocitario).
- Lesiones múltiples de alta energía (ISS > 35), lesión vascular mayor combinada con lesión visceral compleja, necesidad de tiempo quirúrgico > 90 minutos o edema visceral masivo que impide el cierre sin tensión.

#### Las tres fases de la cirugía de control de daños
1. **Fase I (quirófano inicial, abreviado < 60–90 min):** controlar la hemorragia (empaquetamiento perihepático/pélvico, ligadura de vasos prescindibles, *shunts* vasculares temporales en vasos mayores), controlar la contaminación (resección rápida y grapado de cabos intestinales sin reconstruir tránsito —**jamás realizar anastomosis primaria ni estomas definitivos en un paciente frío, acidótico y en choque**—) y **cierre abdominal temporal** para evitar el síndrome compartimental.
2. **Fase II (UCI, 24–48 horas):** recalentamiento activo (> 36.5 °C), corrección de acidosis y aclaramiento de lactato, reversión de coagulopatía guiada por TEG/ROTEM, reposición de calcio, soporte ventilatorio/vasopresor y vigilancia estrecha de la presión intraabdominal (PIA). Si el paciente vuelve a inestabilizarse o desarrolla síndrome compartimental a pesar del abdomen abierto, regresa de inmediato a quirófano sin esperar las 24 horas.
3. **Fase III (reintervención programada a las 24–48 horas):** una vez corregida la fisiología, retiro cuidadoso de compresas (humedeciéndolas con solución salina tibia para no arrancar el coágulo), reevaluación de lesiones inadvertidas, reconstrucción vascular/intestinal definitiva (anastomosis o estoma según estabilidad y edema) y **cierre fascial definitivo temprano** si no existe tensión.

#### Abdomen abierto y clasificación de Björck
El cierre abdominal temporal debe proteger las vísceras, contener las asas, cuantificar pérdidas y permitir reexploraciones rápidas. Las opciones incluyen la **bolsa de Bogotá** (silo plástico suturado a piel, económico pero sin manejo de fluido ni tracción fascial) y, como estándar actual preferido por la WSES, la **terapia de presión negativa abdominal** (técnica de Barker artesanal o sistemas comerciales tipo ABThera con lámina visceral fenestrada que evita adherencias entre asas y pared) combinada con **tracción fascial mediada por malla** para lograr cierre fascial definitivo en los primeros 7–8 días. Cada día extra con el abdomen abierto aumenta exponencialmente el riesgo de **fístula enteroatmosférica** y de abdomen congelado.

| Grado Björck (2016) | Descripción del abdomen abierto | Prioridad terapéutica |
|---|---|---|
| **1A** | Limpio, sin adherencias entre intestino y pared abdominal | Cierre fascial temprano (24–72 h) con presión negativa |
| **1B** | Contaminado, sin adherencias | Lavado, control de contaminación, presión negativa y cierre precoz |
| **1C** | Fuga entérica sin fijación | Control inmediato de la fuga / exteriorización antes de que se fije |
| **2A** | Limpio, desarrollando adherencias/fijación | Tracción fascial dinámica + presión negativa para evitar pérdida de dominio |
| **2B** | Contaminado, desarrollando adherencias | Control de infección + tracción fascial cuidadosa |
| **2C** | Fuga entérica con adherencias en desarrollo | Aislamiento estricto del efluente entérico (estoma flotante / puente) |
| **3A / 3B** | Abdomen congelado (*frozen abdomen*) limpio (3A) o contaminado (3B) | No disecar a ciegas; cobertura con injerto cutáneo y reconstrucción diferida (6–12 meses) |
| **4** | Fístula enteroatmosférica establecida en abdomen congelado | Nutrición, control hidroelectrolítico, aislamiento de fístula, cirugía reconstructiva tardía |

### Síndrome compartimental abdominal (SCA) y complicaciones
La **hipertensión intraabdominal** se define por una presión intraabdominal (medida de forma indirecta por vía intravesical con 25 mL de solución salina en decúbito supino al final de la espiración) sostenida **≥ 12 mmHg**. El **síndrome compartimental abdominal** ocurre con **PIA sostenida > 20 mmHg asociada a nueva disfunción orgánica** (oliguria/anuria por compresión venosa renal, aumento de presiones pico de la vía aérea con hipoxemia, caída del retorno venoso y gasto cardiaco por compresión de la VCI, aumento de PIC e isquemia esplácnica). El tratamiento inicial incluye sedación/relajación, descompresión nasogástrica y balance hídrico negativo; si persiste disfunción orgánica, el tratamiento definitivo es la **laparotomía descompresiva urgente**.

### Perlas de examen
- En el **trauma abdominal cerrado**, el órgano más lesionado es el **bazo**; en **arma de fuego**, el **intestino delgado**; en **arma blanca**, el **hígado**.
- El **FAST negativo NO descarta lesión de víscera hueca ni lesión retroperitoneal**.
- **Hematomas retroperitoneales:** Zona I se explora siempre; Zona III en trauma cerrado **no se abre** (empaquetamiento preperitoneal + fijación + angioembolización).
- En la **cirugía de control de daños**, nunca hacer anastomosis intestinales ni reconstrucciones complejas en el paciente hipotérmico (< 35 °C), acidótico (pH < 7.2) y coagulopático: se reseca, se grapan los cabos, se empaqueta y se difiere 24–48 horas.
- El **síndrome compartimental abdominal** (PIA > 20 mmHg + nueva disfunción orgánica) exige descompresión abdominal urgente; puede ocurrir incluso con un abdomen abierto mal manejado (SCA recurrente).
- El cierre fascial temprano (idealmente dentro de la primera semana) con presión negativa y tracción fascial reduce drásticamente el riesgo de **fístula enteroatmosférica** y hernia ventral gigante.

### Referencias
ATLS 10.ª ed. (ACS, 2018) · Coccolini F et al. *WSES Guidelines: Open Abdomen in Trauma and Non-Trauma Patients*, World J Emerg Surg 2018 · Rotondo MF et al. *Damage Control*, J Trauma 1993 · Kirkpatrick AW et al. *WSACS Consensus Definitions on Intra-Abdominal Hypertension and Abdominal Compartment Syndrome*, Intensive Care Med 2013 · Sabiston 21.ª ed. · Schwartz 11.ª ed.
`),
    sheet('tr-visceras', '06', 'Trauma de víscera hueca, duodeno, páncreas y colon', `
## Trauma de víscera hueca, duodeno, páncreas y colon

### Esófago y estómago

#### Esófago traumático
Las lesiones esofágicas por trauma externo son raras (< 1 % de los traumatismos penetrantes), pero tienen una mortalidad elevada (15–30 %) cuando su diagnóstico se retrasa más de 24 horas por mediastinitis fulminante y sepsis pleural. El esófago cervical es el segmento más afectado en heridas penetrantes, seguido del torácico y del abdominal.
- **Diagnóstico:** en el paciente estable con sospecha (trayecto cercano, enfisema subcutáneo, neumomediastino, derrame pleural izquierdo con contenido alimentario o amilasa elevada), el estándar es la combinación de **esofagograma con contraste hidrosoluble** (gastrografín; si es negativo, repetir inmediatamente con bario diluido por su mayor sensibilidad para microperforaciones) más **esofagoscopia flexible**. La TC con contraste oral complementa la evaluación del mediastino.
- **Tratamiento paso a paso:**
  - **Diagnóstico temprano (< 24 horas) sin necrosis extensa:** desbridamiento cuidadoso de bordes necróticos, identificación precisa de toda la extensión de la laceración mucosa (abriendo ligeramente la capa muscular si es necesario), **cierre primario en dos planos** (mucosa con sutura absorbible + muscular con puntos separados) reforzado con colgajo vascularizado (músculo esternocleidomastoideo en cuello, pleura o músculo intercostal en tórax, fondo gástrico tipo Thal/Nissen o epiplón en esófago abdominal) y drenaje cerrado amplio.
  - **Diagnóstico tardío (> 24 horas), contaminación severa o destrucción amplia:** si los tejidos no sostienen una reparación segura, recurrir a drenaje amplio, exclusión/derivación (esofagostomía cervical terminal, gastrostomía de descompresión y yeyunostomía de alimentación) o manejo con prótesis endoscópica cubierta en lesiones seleccionadas. En lesiones cervicales pequeñas contenidas (< 1 cm) sin sepsis, puede indicarse drenaje exclusivo y ayuno con antibióticos.

#### Estómago
El estómago se lesiona con mayor frecuencia en trauma penetrante (7–20 % de las heridas abdominales penetrantes) y rara vez en trauma cerrado (usualmente en estado posprandial lleno). El hallazgo de sangre fresca por la sonda nasogástrica o aire libre subdiafragmático orienta el diagnóstico.
- **Regla operatoria de oro:** ante cualquier perforación en la cara anterior del estómago, es **obligatorio abrir la transcavidad de los epiplones** (a través del ligamento gastrocólico) para inspeccionar meticulosamente la **cara posterior**, así como la curvatura menor, la unión esofagogástrica y el píloro, para no omitir un orificio de salida.
- **Reparación:** gracias a la excelente irrigación gástrica, casi todas las heridas se tratan mediante desbridamiento de bordes desvitalizados, hemostasia cuidadosa de la submucosa (fuente frecuente de sangrado posoperatorio) y cierre primario en uno o dos planos (o grapado lineal en lesiones tangenciales). Las lesiones destructivas extensas o del antro pueden requerir gastrectomía parcial con reconstrucción Billroth II o Y de Roux (diferida si el paciente está en control de daños).

### Intestino delgado
Es el órgano más lesionado en heridas abdominales por arma de fuego y el tercero en trauma cerrado. En el trauma contuso el mecanismo típico es el **estallamiento en asa cerrada** (compresión súbita por cinturón de seguridad contra la columna) o el **desgarro mesentérico en «asa de balde» (*bucket-handle*)** que desvasculariza un segmento entero, produciendo isquemia y perforación tardía días después del accidente.
- **Reto diagnóstico:** en el trauma cerrado, el FAST es poco sensible y la exploración física inicial puede ser engañosa porque el contenido yeyunoileal tiene pH casi neutro y baja carga bacteriana. En la TC con contraste, los signos de alarma que obligan a laparotomía o exploración laparoscópica son: neumoperitoneo, extravasación de contraste oral, **líquido libre intraperitoneal moderado-abundante en ausencia de lesión de órgano sólido**, engrosamiento focal de la pared intestinal e infiltración grasa mesentérica con hematoma. Un retraso diagnóstico mayor a 8–24 horas incrementa notablemente la morbilidad y mortalidad.
- **Manejo quirúrgico (AAST):**
  - **Grado I (hematoma mural o desgarro seroso):** inversión con puntos de Lembert si el desgarro es amplio; los hematomas pequeños estables se observan.
  - **Grado II (< 50 % de la circunferencia):** desbridamiento de bordes y **cierre primario transversal** (perpendicular al eje longitudinal del asa) en uno o dos planos para prevenir estenosis.
  - **Grados III–V (≥ 50 % de circunferencia, transección completa, múltiples heridas cercanas en un segmento corto o desvascularización mesentérica):** **resección segmentaria y anastomosis primaria** (manual o mecánica). En el paciente inestable sometido a control de daños, se reseca el segmento dañado y se dejan los cabos **grapados en discontinuidad**, difiriendo la anastomosis 24–48 horas.

### Duodeno y complejo pancreatoduodenal
El duodeno (salvo la primera porción) es un órgano retroperitoneal íntimamente unido a la cabeza del páncreas, al colédoco distal y a los vasos mesentéricos superiores. Se lesiona en 3–5 % de los traumas abdominales, clásicamente por golpe directo epigástrico contra el volante o manubrio de bicicleta que lo aplasta contra L1–L2.
- **Diagnóstico:** requiere altísimo índice de sospecha. En la TC buscar **aire retroperitoneal delineando el riñón derecho o el músculo psoas**, extravasación de contraste, engrosamiento duodenal o hematoma periduodenal. En quirófano, ante cualquier hematoma periduodenal, crepitación retroperitoneal o tinción biliar, es obligatoria la exposición completa mediante **maniobra de Kocher** (movilización de 1.ª–2.ª porciones), **maniobra de Cattell-Braasch** (movilización del colon derecho e intestino delgado para exponer 3.ª–4.ª porciones) y apertura del ligamento de Treitz.
- **Manejo quirúrgico según AAST:**
  - **Hematoma intramural duodenal aislado (Grado I–II sin perforación):** en el paciente estable con TC que descarta perforación, manejo **conservador** con descompresión nasogástrica y nutrición parenteral total durante 10–14 días; la gran mayoría se reabsorben espontáneamente. Si persiste obstrucción > 14 días, evacuación laparoscópica o abierta del hematoma sin abrir la mucosa.
  - **Laceraciones simples (Grado II y mayoría de Grado III < 50–75 % sin lesión ductal ni ampular):** el 80 % de las lesiones duodenales se resuelven adecuadamente con **desbridamiento y reparación primaria transversal sin tensión** más drenaje cerrado periduodenal (evitar la sobreutilización de procedimientos complejos innecesarios).
  - **Laceraciones complejas (Grado III extenso > 75 % o afectando D2):** reparación primaria protegida con parche seroso yeyunal o duodenoyeyunostomía en Y de Roux; la **exclusión pilórica** (cierre interno del píloro con sutura absorbible + gastroyeyunostomía) se utiliza hoy de forma muy selectiva porque estudios comparativos mostraron que no siempre reduce la fístula y sí aumenta la estancia hospitalaria. Considerar acceso nutricional distal (yeyunostomía) y descompresión duodenal.
  - **Lesiones masivas (Grado IV–V con disrupción de ámpula de Vater, colédoco distal o desvascularización pancreatoduodenal):** **pancreatoduodenectomía de trauma (procedimiento de Whipple)**, casi siempre ejecutada en **dos tiempos bajo estrategia de control de daños** (resección/control inicial y reconstrucción diferida en paciente estable).

### Páncreas y vía biliar extrahepática
El trauma pancreático es infrecuente (2–5 %) pero conlleva morbilidad alta (fístula pancreática, pseudoquiste, absceso, hemorragia erosiva). **El factor anatómico que define el tratamiento y el pronóstico es la integridad del conducto pancreático principal (Wirsung) y la ubicación respecto a los vasos mesentéricos superiores.**
- **Diagnóstico:** la amilasa y lipasa séricas pueden ser normales en las primeras 3–6 horas (especialmente en trauma penetrante), por lo que su normalidad no excluye lesión; una elevación persistente o progresiva obliga a estudiar el conducto. La TC helicoidal detecta fracturas del parénquima; en pacientes estables con duda ductal, la **colangiopancreatografía por resonancia magnética (colangio-RM)** o la **CPRE** confirman la integridad del Wirsung (la CPRE además permite colocación terapéutica de *stent* transpapilar en lesiones seleccionadas).
- **Manejo quirúrgico del páncreas (AAST / WSES):**
  - **Grados I y II (contusión o laceración sin lesión ductal):** hemostasia cuidadosa y **drenaje aspirativo cerrado externo**; no intentar suturar cápsula a tensión sobre parénquima edematoso.
  - **Grado III (transección distal o lesión parenquimatosa con rotura ductal a la izquierda de la vena mesentérica superior):** **pancreatectomía distal** (con esplenectomía en el paciente inestable o con preservación esplénica en pacientes seleccionados muy estables), cerrando el muñón con grapadora o sutura y colocando drenaje cerrado.
  - **Grado IV (lesión proximal a la derecha de la VMS con compromiso ductal sin destrucción ampular):** drenaje externo amplio (controlando la fístula dirigida) + CPRE con *stent* ductal, o en centros especializados pancreatectomía subtotal o pancreatoyeyunostomía en Y de Roux sobre el segmento distal.
  - **Grado V (destrucción masiva de la cabeza pancreática):** control de daños (hemostasia, empaquetamiento y drenaje amplio) seguido de Whipple diferido si hay destrucción irreconstruible.
- **Vía biliar extrahepática:** la lesión de vesícula biliar se trata con **colecistectomía**. Las laceraciones parciales (< 50 % de la circunferencia) de la vía biliar principal sin pérdida de tejido se reparan primariamente con sutura absorbible fina sobre sonda en T; las lesiones ≥ 50 %, transecciones completas o avulsiones se reconstruyen mediante **hepaticoyeyunostomía en Y de Roux** (en el paciente inestable se coloca únicamente un tubo de drenaje biliar externo para control de daños y se reconstruye de forma diferida).

| Órgano y grado AAST | Hallazgo anatómico clave | Conducta quirúrgica estándar (guías WSES / EAST) |
|---|---|---|
| **Duodeno I–II** | Hematoma intramural o laceración parcial sin compromiso ampular | Hematoma estable: conservador (SNG + NPT). Perforación: cierre primario transversal + drenaje |
| **Duodeno III–V** | Disrupción > 50–75 %, lesión ampular o desvascularización masiva | Reparación compleja / duodenoyeyunostomía en Y de Roux; en Grado V, Whipple en dos tiempos (CCD) |
| **Páncreas I–II** | Contusión o laceración sin rotura del conducto de Wirsung | Hemostasia + drenaje aspirativo cerrado (no resección) |
| **Páncreas III** | Rotura ductal distal (a la izquierda de la vena mesentérica superior) | Pancreatectomía distal (con o sin preservación esplénica) + drenaje cerrado |
| **Páncreas IV–V** | Rotura ductal proximal o destrucción de cabeza pancreática | Drenaje amplio ± *stent* CPRE; en destrucción masiva, control de daños y cirugía diferida |
| **Colon no destructivo (< 50 %)** | Laceración < 50 % circunferencia sin desvascularización | **Reparación primaria** en prácticamente todos los pacientes |
| **Colon destructivo (≥ 50 %)** | Transección, desvascularización o múltiples perforaciones cercanas | **Resección y anastomosis primaria** si estable sin factores de alto riesgo; estoma o control de daños si choque/transfusión masiva |

### Colon y recto

#### Colon
Durante décadas la regla rígida en trauma colónico fue la colostomía obligatoria. Hoy, con base en múltiples ensayos aleatorizados y las guías EAST y WSES, la **reparación primaria o la resección con anastomosis primaria** es el estándar en la mayoría de los pacientes:
- **Lesiones no destructivas (< 50 % de la circunferencia sin compromiso vascular):** cierre primario en uno o dos planos.
- **Lesiones destructivas (≥ 50 % de circunferencia, transección completa o desvascularización):** resección y **anastomosis primaria** cuando el paciente está estable, sin comorbilidad grave ni choque sostenido.
- **Indicaciones de colostomía derivativa o manejo en control de daños:** inestabilidad hemodinámica persistente, requerimiento de **> 6 unidades de concentrado eritrocitario**, contaminación fecal masiva con retraso > 6–12 horas, uso crónico de vasopresores o abdomen abierto en control de daños (donde se reseca y se dejan cabos grapados, decidiendo en la reoperación a las 24–48 h entre anastomosis tardía selectiva o colostomía).

#### Recto
Es indispensable diferenciar la localización anatómica respecto a la reflexión peritoneal:
- **Recto intraperitoneal:** se comporta y se trata exactamente igual que el colon (reparación primaria o resección con anastomosis según estabilidad).
- **Recto extraperitoneal:** sospechar ante fractura pélvica abierta o herida penetrante glútea, perineal o transpelvica; el diagnóstico se apoya en tacto rectal (sangre en dedo de guante), TC pélvica y **rectosigmoidoscopia rígida o flexible**. El dogma clásico de las «4 D» (derivación, desbridamiento, drenaje presacro y lavado distal) ha sido reemplazado por un manejo selectivo respaldado por guías EAST:
  - En lesiones extraperitoneales no destructivas: **derivación fecal proximal** (colostomía en asa de sigmoides) si hay contaminación relevante o compromiso extenso; **ya no se recomienda de rutina el lavado del muñón distal ni el drenaje presacro sistemático**, pues no reducen las infecciones pélvicas y aumentan la morbilidad.
  - La reparación transanal directa solo se intenta si la herida es fácilmente accesible y sin tensión.

### Complicaciones y seguimiento
Las principales complicaciones son fístula pancreática (definida por amilasa en el líquido de drenaje > 3 veces el límite superior sérico a partir del 3.º día posoperatorio), fístula duodenal de alto gasto, fuga anastomótica (días 5–7 con taquicardia, fiebre, íleo y leucocitosis), abscesos intraabdominales y sepsis tardía. El seguimiento incluye cuantificación diaria de drenajes, vigilancia estrecha de signos de fuga, soporte nutricional enteral temprano cuando existe acceso distal y TC con contraste ante cualquier falta de progreso clínico a las 48–72 horas.

### Perlas de examen
- Ante cualquier herida en la **cara anterior del estómago**, es obligatorio abrir la transcavidad de los epiplones para descartar un orificio de salida en la **cara posterior**.
- En la TC por trauma cerrado, el hallazgo de **líquido libre intraperitoneal sin lesión de órgano sólido** obliga a sospechar lesión de intestino delgado o mesenterio.
- La integridad del **conducto de Wirsung** es el determinante absoluto del manejo en trauma pancreático: lesión distal con conducto roto (AAST III) = **pancreatectomía distal**.
- El **hematoma intramural duodenal** sin perforación en el paciente estable se trata inicialmente de forma **conservadora** (SNG + NPT 10–14 días), no con cirugía inmediata.
- En trauma de colon, la reparación o resección con **anastomosis primaria** es la primera elección en pacientes estables; la colostomía se reserva para choque, transfusión masiva (> 6 CE), gran contaminación o control de daños.
- En el **recto extraperitoneal**, las guías EAST actuales indican derivación fecal proximal selectiva y **abandonan el lavado distal y el drenaje presacro rutinarios**.

### Referencias
Coccolini F et al. *WSES-AAST Guidelines: Duodeno-Pancreatic and Extrahepatic Biliary Tree Trauma*, World J Emerg Surg 2019 · Bosarge PL et al. *EAST Practice Management Guideline: Extraperitoneal Rectal Injuries*, J Trauma Acute Care Surg 2016 · Sharpe JP et al. *Management of Destructive Colon Injuries*, J Trauma Acute Care Surg · Moore EE et al. *AAST Organ Injury Scaling* · Sabiston 21.ª ed. · Schwartz 11.ª ed.
`),
    sheet('tr-higado-bazo', '07', 'Trauma hepático y esplénico', `
## Trauma hepático y esplénico

### Epidemiología y paradigma del manejo no operatorio (MNO)
El **bazo** es el órgano sólido más frecuentemente lesionado en el trauma abdominal cerrado, seguido muy de cerca por el **hígado**; en el trauma penetrante por arma blanca el hígado ocupa el primer lugar debido a su gran volumen en el cuadrante superior derecho. Durante los últimos 30 años, el tratamiento de ambos órganos experimentó una transformación radical: de la laparotomía obligatoria al **manejo no operatorio (MNO)**, que hoy es el estándar de oro en más del 80–90 % de los traumatismos cerrados en pacientes hemodinámicamente estables.

La regla cardinal establecida por las guías de la *World Society of Emergency Surgery* (WSES) y EAST es inequívoca: **la decisión entre manejo no operatorio y cirugía depende de la estabilidad hemodinámica y de la ausencia de peritonitis, NO del grado anatómico aislado en la escala AAST**. Incluso lesiones hepáticas o esplénicas grado IV o V pueden tratarse sin cirugía si el paciente permanece estable y se dispone de los recursos adecuados.

#### Requisitos obligatorios para indicar manejo no operatorio
1. **Estabilidad hemodinámica** (sin hipotensión refractaria ni requerimiento continuo de hemoderivados).
2. **Ausencia de signos de irritación peritoneal** o de otra lesión intraabdominal que exija laparotomía (p. ej., perforación de víscera hueca o ruptura diafragmática).
3. **Tomografía trifásica con contraste intravenoso** que clasifique con precisión la lesión y descarte extravasación arterial activa no tratada o lesiones asociadas.
4. **Infraestructura hospitalaria 24/7:** monitorización clínica continua (terapia intermedia o vigilancia estrecha), biometrías seriadas, banco de sangre, quirófano disponible de inmediato y acceso a **radiología intervencionista (angioembolización)**.

### Escalas AAST (revisión 2018) y clasificación WSES
En 2018 la *American Association for the Surgery of Trauma* (AAST) actualizó las escalas de bazo e hígado incorporando por primera vez las **lesiones vasculares detectadas por TC** (extravasación activa de contraste o *blush*, pseudoaneurisma y fístula arteriovenosa), ya que su presencia predice con fuerza la falla del manejo conservador sin embolización. Paralelamente, la **clasificación WSES** combina el grado anatómico AAST con el estado hemodinámico: lesiones leves (AAST I–II estable), moderadas (AAST III estable en hígado/bazo y IV–V estables según subcategoría) y graves (cualquier grado AAST con **inestabilidad hemodinámica**, lo cual exige cirugía inmediata).

| Grado AAST (2018) | Trauma esplénico | Trauma hepático |
|---|---|---|
| **Grado I** | Hematoma subcapsular < 10 % de superficie; laceración capsular < 1 cm de profundidad | Hematoma subcapsular < 10 %; laceración capsular < 1 cm de profundidad |
| **Grado II** | Hematoma subcapsular 10–50 % o intraparenquimatoso < 5 cm; laceración 1–3 cm de profundidad | Hematoma subcapsular 10–50 % o intraparenquimatoso < 10 cm; laceración 1–3 cm de profundidad y ≤ 10 cm de longitud |
| **Grado III** | Hematoma subcapsular > 50 % o roto, o intraparenquimatoso ≥ 5 cm; laceración > 3 cm de profundidad | Hematoma subcapsular > 50 % o roto, o intraparenquimatoso > 10 cm; laceración > 3 cm de profundidad; lesión vascular o hemorragia activa contenida dentro del parénquima |
| **Grado IV** | Lesión vascular intraparenquimatosa o sangrado activo confinado a la cápsula; laceración de vasos segmentarios o hiliares con > 25 % de desvascularización | Disrupción parenquimatosa del 25–75 % de un lóbulo hepático; sangrado activo que rebasa el parénquima hacia el peritoneo |
| **Grado V** | Bazo estallado (*shattered spleen*); lesión vascular esplénica con **sangrado activo hacia la cavidad peritoneal** | Disrupción > 75 % de un lóbulo hepático; **lesión venosa yuxtahepática** (vena cava retrohepática o venas suprahepáticas mayores) |

*Nota de clasificación:* en ambos órganos, avanzar un grado ante lesiones múltiples hasta alcanzar el grado III.

### Trauma esplénico: manejo conservador, angioembolización y cirugía
El bazo cumple funciones inmunológicas esenciales (filtración de bacterias encapsuladas y producción de opsoninas e IgM). Preservar el bazo cuando es seguro evita el riesgo de por vida de infección fulminante posesplenectomía.

#### Manejo no operatorio y papel de la angioembolización
- **Grados I–III estables sin lesión vascular en TC:** observación clínica, reposo relativo, vigilancia de signos vitales y hemoglobina cada 6–8 horas inicialmente, dieta precoz si no hay deterioro y tromboprofilaxis farmacológica segura a las 24–48 horas si la hemoglobina es estable.
- **Indicaciones de angioembolización esplénica (paciente estable):** presencia de **extravasación activa de contraste (*blush*)**, **pseudoaneurisma esplénico**, fístula arteriovenosa y, de acuerdo con guías WSES/EAST, fuertemente recomendada en **lesiones grado IV–V estables** incluso sin *blush* evidente para disminuir el fracaso del MNO.
  - La **embolización proximal** (tronco de la arteria esplénica distal a la pancreática dorsal) reduce la presión de perfusión manteniendo viable el bazo mediante circulación colateral (vasos gástricos cortos y gastroepiploica), con menor tasa de infarto esplénico masivo y absceso que la embolización distal; la **embolización distal (selectiva)** se emplea en lesiones vasculares focales bien definidas.

#### Indicaciones y técnica de cirugía esplénica
- **Indicaciones:** inestabilidad hemodinámica al ingreso (con FAST+), peritonitis o falla del MNO (caída progresiva de hemoglobina con requerimiento de > 2–4 unidades de concentrado eritrocitario o inestabilidad pese a embolización).
- **Técnica de esplenectomía de urgencia:** incisión media xifopúbica. El cirujano introduce la mano izquierda sobre la convexidad esplénica, tracciona suavemente el bazo hacia la línea media y divide el **ligamento esplenorrenal** (avascular) para movilizar el bazo hacia el campo anterior, comprimiendo de inmediato el hilio entre los dedos para frenar el sangrado. Luego se ligan y seccionan los **vasos gástricos cortos** cerca del bazo (cuidando no lesionar ni incluir la pared de la curvatura mayor gástrica, causa de necrosis gástrica tardía) y finalmente se ligan individualmente la arteria y vena esplénicas visualizando y protegiendo la **cola del páncreas** (para evitar fístula pancreática). La esplenorrafia o malla absorbible solo se considera en lesiones pequeñas en pacientes completamente estables operados por otra causa.
- **Profilaxis contra OPSI (*Overwhelming Post-Splenectomy Infection*):** la sepsis fulminante posesplenectomía (mortalidad > 50 %) es causada principalmente por bacterias encapsuladas. Todo paciente esplenectomizado debe recibir vacunación contra ***Streptococcus pneumoniae*** (conjugada + polisacárida), ***Neisseria meningitidis*** (A, C, W, Y y serogrupo B) y ***Haemophilus influenzae* tipo b**, además de influenza anual. El momento óptimo inmunológico es a los **14 días posoperatorios**; sin embargo, si existe riesgo de que el paciente no regrese a seguimiento (frecuente en trauma), se aplica **antes del egreso hospitalario**.

### Trauma hepático: manejo conservador y control de daños
El hígado posee doble irrigación sanguínea (**75 % vena porta** de baja presión y **25 % arteria hepática** de alta presión) y drena directamente por tres venas suprahepáticas cortas hacia la vena cava inferior retrohepática. Esta anatomía explica por qué el sangrado venoso de baja presión suele ceder con compresión y empaquetamiento, mientras que el sangrado arterial requiere ligadura selectiva o angioembolización y las lesiones yuxtahepáticas tienen mortalidad superior al 50 %.

#### Manejo no operatorio en trauma hepático
Es exitoso en > 85–90 % de los traumatismos cerrados estables y en casos muy seleccionados de trauma penetrante (herida por arma blanca en hipocondrio derecho sin peritonitis y con TC que descarta lesión de víscera hueca). Si la TC muestra extravasación arterial activa en un paciente estable, se realiza **angioembolización selectiva de la rama arterial hepática**.

#### Cirugía de control de daños hepática: la escalera hemostática
Ante un paciente inestable llevado a laparotomía con hemorragia hepática masiva, se aplica una secuencia escalonada de lo más simple y rápido a lo más complejo:
1. **Compresión manual bimanual:** aproximar los bordes fracturados empujando el hígado hacia atrás y arriba contra el diafragma mientras anestesiología reanima.
2. **Empaquetamiento perihepático (técnica correcta):** se colocan compresas dobladas **sobre la cúpula diafragmática y debajo de la cara visceral** para comprimir el parénquima y reconstituir su anatomía en sándwich; **nunca se introducen compresas a la fuerza dentro de una laceración profunda** (lo cual abre más la fractura) ni se comprime excesivamente la vena cava inferior (lo cual colapsa el retorno venoso). Si el empaquetamiento controla la hemorragia en un paciente frío y acidótico, **detener la cirugía ahí**, dejar abdomen abierto y llevar a UCI (retirar compresas a las 24–48 horas).
3. **Maniobra de Pringle (pinzamiento del ligamento hepatoduodenal):** si el sangrado continúa al liberar la compresión, se introduce el dedo por el hiato de Winslow y se coloca un clamp vascular atraumático o torniquete de Rummel rodeando la tríada portal (arteria hepática, vena porta y colédoco). El tiempo seguro continuo es de **20–30 minutos** (puede hacerse intermitente: 15 min de oclusión por 5 min de reperfusión). Su valor diagnóstico es extraordinario:
   - **Si el sangrado disminuye drásticamente o cesa:** proviene de ramas de la **arteria hepática o vena porta** → explorar la laceración mediante hepatotomía con digitoclasia y ligar selectivamente vasos y conductos biliares visibles (o ligadura selectiva de arteria hepática derecha/izquierda en sangrado arterial intratable).
   - **Si persiste hemorragia venosa oscura profusa a pesar de un Pringle bien colocado:** sospechar **lesión de venas suprahepáticas o de vena cava inferior retrohepática**. En este escenario, intentar movilizar el hígado precipitadamente rompe el taponamiento y provoca exanguinación instantánea; la medida más segura y eficaz suele ser **reempaquetar firmemente** y pasar a control de daños. Solo si el empaquetamiento fracasa y el paciente se exanguina se recurre a exclusión vascular total hepática (pinzamiento suprahepático e infrahepático de VCI + Pringle) o derivación atriocaval de Schrock en centros de altísima experiencia.
4. **Hemostasia complementaria:** electrocauterio de argón, agentes hemostáticos tópicos (celulosa oxidada, matriz de trombina-gelatina), parche de epiplón pediculado (taponamiento con epiplón viable dentro de una grieta sangrante) y **taponamiento con balón intrahepático** (sonda de Sengstaken-Blakemore o sonda Foley con drenaje Penrose) en trayectos penetrantes profundos bilobares por arma de fuego. La **resección hepática anatómica formal** en agudo es excepcional (reservada a segmentos ya prácticamente avulsionados y necróticos).
5. **Angioembolización posoperatoria:** si tras empaquetamiento perihepático el paciente persiste con sangrado o TC posoperatoria con *blush* arterial, la arteriografía con embolización completa el control hemostático sin reabrir el abdomen prematuramente.

### Complicaciones tardías y seguimiento
- **Trauma esplénico:** sangrado diferido (en los primeros 7–14 días), pseudoaneurisma tardío (justifica repetir TC a las 48–72 horas en lesiones grado III–V manejadas conservadoramente según protocolos institucionales), absceso subfrénico, lesión de cola pancreática, trombocitosis reactiva (por lo general benigna; considerar ácido acetilsalicílico solo si > 1,000,000/µL) y OPSI.
- **Trauma hepático:** las complicaciones aumentan en grados III–V (10–25 %):
  - **Biloma y fístula biliar:** colecciones biliares intra o perihepáticas; se manejan con **drenaje percutáneo guiado por imagen** más **CPRE con esfinterotomía y colocación de *stent* biliar** para disminuir la presión del esfínter de Oddi y favorecer el cierre.
  - **Hemobilia:** comunicación entre una rama arterial hepática (pseudoaneurisma) y un conducto biliar; se manifiesta clásicamente con la **tríada de Quincke** (dolor en cuadrante superior derecho, ictericia y hemorragia digestiva alta). El tratamiento de elección es **angioembolización arterial selectiva**.
  - **Necrosis hepática y absceso:** frecuentes tras embolización extensa o lesiones grado IV–V; requieren antibióticos, drenaje percutáneo o desbridamiento tardío si hay sepsis persistente.
  - **Síndrome compartimental abdominal:** vigilar PIA estrictamente tras empaquetamiento perihepático.
- **Seguimiento ambulatorio:** no se requiere TC de rutina al egreso en lesiones grado I–II asintomáticas; restringir deportes de contacto y esfuerzos intensos de 4 a 8 semanas (hasta 3 meses en lesiones de alto grado).

### Perlas de examen
- La **estabilidad hemodinámica** —y no el grado AAST— dicta la indicación de cirugía vs manejo no operatorio en trauma hepático y esplénico.
- La presencia de **extravasación activa (*blush*) o pseudoaneurisma** en la TC de un paciente estable indica **angioembolización**, no necesariamente laparotomía.
- Si al aplicar la **maniobra de Pringle** continúa un sangrado venoso oscuro abundante, la lesión está en las **venas suprahepáticas o en la vena cava retrohepática**; el primer gesto salvador es el empaquetamiento perihepático bien ejecutado.
- Durante la esplenectomía de urgencia, cuidar dos estructuras anatómicas críticas: la **cola del páncreas** en el hilio y la **curvatura mayor gástrica** al ligar los vasos gástricos cortos.
- Tras esplenectomía vacunar contra **neumococo, meningococo y *Haemophilus influenzae* tipo b** (idealmente a los 14 días, o antes del alta si hay riesgo de no seguimiento).
- La **tríada de Quincke** (dolor en CSD, ictericia y sangrado digestivo) indica **hemobilia** y se trata con **angioembolización**, no con reoperación de primera intención.

### Referencias
Coccolini F et al. *WSES Classification and Guidelines for Liver Trauma*, World J Emerg Surg 2020 · Coccolini F et al. *WSES Classification and Guidelines for Spleen Trauma*, World J Emerg Surg 2017 · Kozar RA et al. *Organ Injury Scaling 2018 Update: Spleen, Liver, and Kidney*, J Trauma Acute Care Surg 2018 · Sabiston 21.ª ed. · Schwartz 11.ª ed.
`),
    sheet('tr-vascular', '08', 'Trauma vascular y pélvico', `
## Trauma vascular y pélvico

### Trauma pélvico: fisiopatología y clasificaciones
Las fracturas del anillo pélvico reflejan transferencia de energía muy alta (atropellamientos, colisiones de motocicleta, caídas de altura) y se acompañan de mortalidad del 10 al 15 %, cifra que supera el 35–40 % cuando el paciente ingresa en choque hemorrágico o la fractura es abierta (comunicada con piel, vagina o recto). El origen de la hemorragia pélvica tiene una distribución anatómica decisiva para el tratamiento:
- **~85 % de origen venoso y óseo:** desgarro del plexo venoso presacro y perivesical más sangrado del hueso esponjoso fracturado. Este sangrado es de baja presión y responde a la **reducción del volumen pélvico** (faja pélvica) y al **taponamiento directo** (empaquetamiento preperitoneal).
- **~15 % de origen arterial:** ramas de la arteria ilíaca interna (hipogástrica), sobre todo la arteria glútea superior y la pudenda interna. Es de alta presión y requiere **angioembolización selectiva**.

#### Clasificación de Young-Burgess (por mecanismo) y de Tile (por estabilidad)
La clasificación de **Tile** evalúa la estabilidad mecánica: **Tipo A** (anillo posterior intacto, estable), **Tipo B** (rotacionalmente inestable pero verticalmente estable, p. ej., «libro abierto») y **Tipo C** (inestabilidad rotacional y vertical completa, mayor riesgo de sangrado masivo). La clasificación de **Young-Burgess** orienta además el patrón de hemorragia y las lesiones asociadas:

| Patrón Young-Burgess | Mecanismo y anatomía | Riesgo hemorrágico y lesiones asociadas |
|---|---|---|
| **Compresión anteroposterior (APC I–III)** | Impacto frontal; separación de sínfisis púbica (> 2.5 cm en APC II–III) y apertura de articulaciones sacroilíacas («libro abierto») | **Máximo riesgo de hemorragia venosa y arterial masiva** (aumenta exponencialmente el volumen pélvico); lesiones uretrales y vesicales frecuentes |
| **Compresión lateral (LC I–III)** | Impacto lateral (la más frecuente, ~60 %); rotación interna de hemipelvis, fractura de ramas púbicas y compresión sacra | Menor volumen de sangrado que APC/VS (salvo LC III en «pelvis barrida»); mayor asociación con TCE y lesiones toracoabdominales |
| **Cizallamiento vertical (VS)** | Caída de altura sobre una extremidad; desplazamiento cefálico completo de una hemipelvis con rotura de ligamentos sacroilíacos y del piso pélvico | **Altísimo riesgo de hemorragia masiva**, lesión de plexo lumbosacro y desgarro vascular ilíaco |
| **Mecanismo combinado (CM)** | Combinación de vectores de fuerza en traumatismos de muy alta energía | Inestabilidad severa y alta incidencia de choque hemorrágico |

### Manejo paso a paso de la fractura pélvica inestable
La guía **WSES de trauma pélvico** prioriza el control rápido del sangrado evitando errores clásicos que agravan la hemorragia:
1. **Exploración única y gentil:** nunca «mecer» o comprimir repetidamente la pelvis inestable porque cada maniobra rompe los coágulos venosos recién formados.
2. **Estabilización mecánica inmediata:** colocar una **faja pélvica comercial (*binder*)** o una sábana bien tensada **centrada exactamente sobre los trocánteres mayores del fémur** (colocarla alta sobre las crestas ilíacas es un error técnico frecuente que abre aún más la pelvis y falla en cerrar la sínfisis) manteniendo una rotación interna suave de rodillas y tobillos. La faja no se retira hasta asegurar fijación definitiva y no debe permanecer colocada más de 24–48 horas por riesgo de necrosis cutánea.
3. **Estratificación rápida mediante eFAST:**
   - **Paciente inestable con FAST positivo (hemoperitoneo significativo):** prioridad absoluta a **laparotomía exploradora** para controlar la hemorragia intraperitoneal, combinada en el mismo tiempo quirúrgico con **empaquetamiento pélvico preperitoneal** (sin abrir el peritoneo pélvico sobre el hematoma de Zona III) y fijación externa ortopédica.
   - **Paciente inestable con FAST negativo (hemorragia predominantemente pélvica):** el estándar moderno de rescate es el **empaquetamiento pélvico preperitoneal (PPP)** realizado en 15–20 minutos mediante una incisión vertical infraumbilical de 8 cm sin violar el peritoneo, colocando 3 compresas firmes a cada lado en el espacio paravesical y presacro contra la pared pélvica, asociado a **fijación externa o *C-clamp* posterior**. Si persiste inestabilidad o requerimiento transfusional tras el empaquetamiento, trasladar de inmediato a **angiografía con embolización** de ramas de la ilíaca interna (la embolización bilateral no selectiva de arterias ilíacas internas es una opción de salvamento en sangrado difuso).
4. **Paciente estable:** realizar TC con contraste trifásico; si existe extravasación arterial activa (*blush*), enviar a angioembolización selectiva.
5. **Descartar lesiones asociadas genitourinarias y rectales:** ante sangre en meato uretral, hematoma perineal/escrotal o incapacidad para orinar, **no colocar sonda Foley a ciegas**; realizar **uretrografía retrógrada**. Si se sospecha rotura vesical, realizar cistografía por TC (la rotura **intraperitoneal** requiere cierre quirúrgico; la **extraperitoneal** no complicada se maneja con drenaje por sonda vesical 10–14 días). En fracturas pélvicas abiertas, descartar lesión vaginal o rectal con exploración bajo anestesia/rectoscopia, administrar antibióticos de amplio espectro, desbridar y realizar colostomía derivativa si hay herida perineal contaminada.

### Control hemorrágico avanzado: torniquetes y REBOA
- **Torniquetes en extremidades:** medida de primera línea en hemorragia arterial exanguinante periférica. Colocar 5–8 cm proximal a la herida, apretar hasta detener totalmente el sangrado y abolir el pulso distal (un torniquete flojo solo bloquea el retorno venoso y empeora el sangrado), registrar la hora exacta y aplicar un segundo torniquete contiguo si el primero no logra hemostasia en muslo voluminoso. El tiempo seguro sin daño isquémico irreversible suele ser < 2 horas.
- **REBOA (*Resuscitative Endovascular Balloon Occlusion of the Aorta*):** técnica puente para el control temporal de la **hemorragia no compresible del torso** en pacientes en choque profundo refractario o paro inminente por trauma subdiafragmático. Se accede a la arteria femoral común (guía ecográfica o disección abierta) y se avanza el catéter balón a dos zonas anatómicas precisas:
  - **Zona I (entre arteria subclavia izquierda y tronco celíaco):** indicada en hemorragia intraabdominal masiva o paro traumático subdiafragmático (equivalente endovascular al pinzamiento aórtico torácico). Tiempo máximo recomendado de oclusión completa: **≤ 30 minutos** por el riesgo de isquemia mesentérica, renal y medular.
  - **Zona III (entre arterias renales y bifurcación aórtica):** indicada en **hemorragia pélvica catastrófica o de unión inguinal** (preserva la perfusión visceral y renal). Tolerancia máxima aproximada: **≤ 60 minutos**.
  - **Zona II (tronco celíaco a arterias renales):** zona de **no oclusión**.
  - **Contraindicaciones absolutas de REBOA:** sospecha de lesión aórtica torácica, hemorragia torácica no controlada o taponamiento cardiaco (aumentar la poscarga proximal precipita la exanguinación torácica). El REBOA es exclusivamente un puente hacia el quirófano o la angioembolización, nunca un tratamiento definitivo (y su beneficio real depende de sistemas con tiempos muy cortos al control quirúrgico).

### Trauma vascular periférico y troncal
Las lesiones vasculares pueden ser completas (transección), parciales (laceración, que sangran más porque el vaso no puede retraerse ni vasoespasmarse), fístulas arteriovenosas, pseudoaneurismas o trombosis intimal (típica del trauma cerrado, como la lesión de arteria poplítea tras **luxación posterior de rodilla** o de arteria axilar/braquial tras fractura supracondílea).

#### Signos duros, signos blandos e Índice Tobillo-Brazo (ITB)
- **Signos duros (indicación directa de exploración quirúrgica inmediata; > 95 % de lesión vascular):**
  1. Hemorragia pulsátil activa.
  2. Hematoma expansivo o pulsátil.
  3. Soplo audible o frémito palpable.
  4. Ausencia de pulsos distales o signos clásicos de isquemia aguda (palidez, frialdad, parestesias, parálisis).
- **Signos blandos (requieren estudio objetivo en paciente estable):** antecedente de hemorragia importante en escena, hematoma estable no expansivo, déficit nervioso periférico adyacente a un paquete vascular, lesión penetrante o fractura/luxación en proximidad anatómica a un vaso mayor (p. ej., luxación de rodilla) y pulso disminuido respecto al contralateral.
- **Índice Tobillo-Brazo (ITB) o Índice Arterial Lesionado (API):** cociente entre la presión sistólica medida con Doppler en la extremidad lesionada y la de una extremidad sana.
  - **ITB ≥ 0.9** sin signos duros: excluye lesión arterial quirúrgica con valor predictivo negativo > 99 % (observación clínica).
  - **ITB < 0.9** o presencia de signos blandos relevantes: realizar **angiotomografía (angio-TC)** de la extremidad (estándar actual que ha desplazado a la arteriografía diagnóstica convencional).

#### Principios técnicos de la reparación vascular
1. **Preparación del campo:** incluir siempre la **extremidad inferior contralateral** íntegra en el campo estéril para cosechar la **vena safena magna** como injerto autólogo.
2. **Control proximal y distal:** obtener control vascular con cintas vasculares o clamps atraumáticos **antes** de abrir el hematoma traumático.
3. **Evaluación y trombectomía:** desbridar bordes arteriales contundidos hasta encontrar íntima sana; pasar un **catéter de balón de Fogarty** proximal y distalmente para extraer trombos hasta obtener buen flujo anterógrado y retrógrado (*backbleeding*), e irrigar ambos cabos con solución salina heparinizada (y anticoagulación sistémica con heparina IV si no hay TCE ni sangrado mayor en otra cavidad).
4. **Tipo de reparación:**
   - Laceración lateral pequeña: sutura primaria con polipropileno 5-0 o 6-0 o parche venoso para no estenosar.
   - Defecto < 1–2 cm sin tensión: anastomosis término-terminal espatulada.
   - Defecto > 2 cm: **injerto de interposición con vena safena magna invertida** (primera elección; evitar injertos sintéticos de PTFE/Dacrón en heridas contaminadas por alto riesgo de infección y dehiscencia).
   - **Control de daños vascular:** si el paciente está inestable o existe una fractura inestable asociada con isquemia prolongada, insertar un ***shunt* vascular intraluminal temporal** (Argyle, Sundt o tubo estéril adaptado) asegurado con ligaduras de seda para restaurar la perfusión en minutos. Ante fractura + lesión arterial con isquemia > 4 horas, la secuencia ideal es: ***shunt* temporal primero → fijación ortopédica → reparación vascular definitiva**.
   - **Lesiones venosas asociadas:** reparar venas mayores (poplítea, femoral común, ilíaca externa, VCI suprarrenal) en pacientes estables para prevenir hipertensión venosa y pérdida de la extremidad; en control de daños pueden ligarse con elevación y compresión posoperatoria.
   - **Verificación final:** comprobar señal Doppler distal o arteriografía transoperatoria antes de cerrar y cubrir la reparación con músculo viable.

### Síndrome compartimental de extremidades y reperfusión
El aumento de presión dentro de un compartimento fascial inelástico colapsa la microcirculación capilar y provoca necrosis muscular y nerviosa en 4 a 6 horas. Causas principales: fractura de tibia o antebrazo, lesiones por aplastamiento, lesión combinada arterial y venosa, y **edema por isquemia-reperfusión** tras restablecer el flujo luego de > 4–6 horas de isquemia.
- **Diagnóstico clínico:** el signo **más temprano y sensible** es el **dolor desproporcionado** que no cede con analgésicos y se exacerba intensamente con el **estiramiento pasivo** de los músculos del compartimento afectado, seguido de parestesias y tensión leñosa del compartimento. **La ausencia de pulso distal es un signo tardío** (la presión compartimental colapsa capilares a ~30 mmHg mucho antes de superar la presión arterial sistólica). En pacientes intubados o inconscientes se mide la presión intracompartimental: indica cirugía una **presión absoluta > 30 mmHg** o una **presión diferencial ΔP = (PAD − presión compartimental) < 30 mmHg**.
- **Tratamiento:** retirar vendajes o yesos apretados de inmediato y realizar **fasciotomía descompresiva de emergencia**. En la pierna deben liberarse los **cuatro compartimentos** (anterior, lateral, posterior superficial y posterior profundo) mediante la técnica de **dos incisiones** (una incisión anterolateral para los compartimentos anterior y lateral, cuidando el nervio peroneo superficial, y una incisión posteromedial 2 cm detrás del borde tibial para liberar ambos compartimentos posteriores, protegiendo la vena safena). La fasciotomía profiláctica está indicada tras revascularización con isquemia > 4–6 horas o lesión arterial y venosa combinada de vasos poplíteos/femorales.
- **Síndrome de reperfusión y rabdomiólisis:** la liberación de potasio, ácido láctico y mioglobina desde músculo isquémico puede causar paro cardiaco por hiperkalemia y lesión renal aguda por mioglobinuria; requiere hidratación vigorosa (meta diuresis 100–200 mL/h), monitorización estrecha de potasio y calcio, y alcalinización selectiva. La escala **MESS (*Mangled Extremity Severity Score*)** orienta la gravedad de una extremidad catastrófica, pero nunca sustituye el juicio multidisciplinario para decidir salvamento vs amputación.

### Perlas de examen
- El **85 % del sangrado en fracturas pélvicas es venoso/óseo** (se controla con faja pélvica y empaquetamiento preperitoneal); el **15 % es arterial** (angioembolización).
- La **faja pélvica** debe colocarse centrada sobre los **trocánteres mayores**, nunca sobre las crestas ilíacas.
- En la **luxación posterior de rodilla**, siempre descartar lesión de la **arteria poplítea** (ITB y angio-TC); tiene la mayor tasa de amputación del trauma vascular periférico.
- **Signos duros** (hemorragia pulsátil, hematoma expansivo, soplo/frémito, isquemia/pulso ausente) → directo a quirófano. **Signos blandos o ITB < 0.9** → angio-TC.
- En el **síndrome compartimental**, el signo más temprano es el **dolor desproporcionado al estiramiento pasivo**; esperar a que desaparezca el pulso significa llegar tarde.
- El **REBOA** se infla en **Zona I** (máx. ~30 min) para hemorragia abdominal y en **Zona III** (máx. ~60 min) para hemorragia pélvica; está contraindicado en hemorragia torácica o lesión aórtica.

### Referencias
Coccolini F et al. *WSES Classification and Guidelines: Pelvic Trauma*, World J Emerg Surg 2017 · Kobayashi N et al. *EAST Practice Management Guidelines for Penetrating Lower Extremity Arterial Trauma* · Bulger EM et al. *Joint Statement on REBOA (ACS-COT / ACEP)*, J Trauma Acute Care Surg 2019 · Sabiston 21.ª ed. · Schwartz 11.ª ed. · ATLS 10.ª ed.
`),
    sheet('tr-infeccion', '09', 'Infección intraabdominal y sepsis quirúrgica', `
## Infección intraabdominal y sepsis quirúrgica

### Definiciones y clasificaciones actuales (SIS / WSES / Sepsis-3)
La **infección intraabdominal (IIA)** comprende un espectro de entidades que van desde la apendicitis inflamatoria localizada hasta la peritonitis fecal generalizada con choque séptico. Es la segunda causa más frecuente de sepsis en las unidades de cuidados intensivos (después de la neumonía) y la principal causa de mortalidad infecciosa en Cirugía General.

#### Clasificación clínica de las infecciones intraabdominales (SIS / WSES)
- **No complicada:** el proceso infeccioso permanece confinado al órgano de origen sin extensión al peritoneo (p. ej., apendicitis aguda no perforada o colecistitis no perforada). Suele resolverse con la resección del órgano y **no requiere antibióticos posoperatorios prolongados** (basta la profilaxis o ≤ 24 h).
- **Complicada (IIAc):** la infección rebasa el órgano de origen hacia la cavidad peritoneal, causando **peritonitis localizada (absceso o plastrón)** o **peritonitis difusa**. Exige siempre dos pilares indisolubles: control del foco y terapia antimicrobiana sistémica.
- **Según patogenia de la peritonitis:**
  - **Primaria (peritonitis bacteriana espontánea):** sin perforación visceral; típica del paciente cirrótico con ascitis (o en diálisis peritoneal). Suele ser **monomicrobiana** (*Escherichia coli*, *Klebsiella*, estreptococos), se diagnostica con **≥ 250 polimorfonucleares/mm³** en líquido ascítico y su tratamiento es médico (cefalosporina de 3.ª generación + albúmina), **no quirúrgico**.
  - **Secundaria:** la más frecuente en cirugía (~80–90 %); resulta de la pérdida de integridad del tubo digestivo (perforación de úlcera, apendicitis perforada, diverticulitis Hinchey III–IV, isquemia mesentérica, trauma penetrante o fuga anastomótica). Es **polimicrobiana** (aerobios gramnegativos + anaerobios) y su pilar terapéutico es quirúrgico o percutáneo.
  - **Terciaria:** infección intraabdominal persistente o recurrente (> 48 horas) a pesar de un control inicial aparentemente adecuado del foco secundario. Afecta a pacientes críticos o inmunosuprimidos, presenta escasa respuesta peritoneal local y se debe a flora nosocomial de baja virulencia pero alta resistencia (*Enterococcus*, *Pseudomonas*, *Enterobacter*, *Staphylococcus* coagulasa negativo y ***Candida***).
- **Según origen epidemiológico:** **adquirida en la comunidad** (flora sensible habitual) vs **asociada a cuidados de la salud / nosocomial** (posoperatoria, hospitalización > 5 días o exposición antibiótica previa en los últimos 90 días; alto riesgo de bacilos productores de BLEE, *Pseudomonas aeruginosa*, *Enterococcus* y hongos).

#### Definiciones Sepsis-3 (2016) y estratificación pronóstica
- **Sepsis:** disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped a una infección, operacionalizada como un **incremento agudo ≥ 2 puntos en la escala SOFA** (evalúa PaO₂/FiO₂, plaquetas, bilirrubina, presión arterial/vasopresores, Glasgow y creatinina/diuresis).
- **Choque séptico:** subconjunto de sepsis con profundas alteraciones circulatorias y metabólicas definido por necesidad de **vasopresor para mantener PAM ≥ 65 mmHg** más **lactato sérico > 2 mmol/L** a pesar de una reanimación adecuada con volumen (mortalidad hospitalaria > 40 %).
- **qSOFA** (FR ≥ 22 rpm, alteración del estado mental y PAS ≤ 100 mmHg): ya **no se recomienda como herramienta única de tamizaje** en la campaña *Surviving Sepsis* 2021 por su baja sensibilidad; se prefiere NEWS, MEWS o criterios clínicos integrales + SOFA.
- **Índice de Peritonitis de Mannheim (MPI):** estratifica mortalidad según edad > 50 años, sexo femenino, falla orgánica, malignidad, evolución > 24 h, origen no colónico, peritonitis difusa y tipo de exudado (claro, purulento o fecal); un puntaje **> 26–29** identifica riesgo muy alto de muerte.

### Fisiopatología, microbiología y cuadro clínico
Cuando el contenido gastrointestinal contamina el peritoneo, se desencadena una sinergia microbiana clásica demostrada experimentalmente por Weinstein:
1. **Fase temprana (peritonitis aguda y bacteriemia):** dominada por enterobacterias gramnegativas aerobias (***E. coli***, *Klebsiella*, *Proteus*), cuya endotoxina (lipopolisacárido) activa receptores Toll-like (TLR4), desatando una tormenta de citocinas (TNF-α, IL-1, IL-6), activación del complemento y coagulación microvascular. Esto provoca vasodilatación sistémica (óxido nítrico), fuga capilar masiva hacia el tercer espacio, hipovolemia relativa, depresión miocárdica séptica y disfunción mitocondrial.
2. **Fase tardía (formación de abscesos):** dominada por anaerobios obligados, principalmente ***Bacteroides fragilis***, cuyo polisacárido capsular estimula el depósito de fibrina que tabica las bacterias protegiéndolas de fagocitos y antibióticos. En perforaciones altas (estómago/duodeno) la carga bacteriana es menor (estreptococos, lactobacilos y *Candida* si el paciente usa inhibidores de bomba de protones), mientras que en colon distal supera 10¹¹ UFC/g con predominio anaerobio.

#### Cuadro clínico y signos de alarma en el posoperatorio
El cuadro típico incluye dolor abdominal intenso que empeora con el movimiento o la tos, fiebre o hipotermia (< 36 °C, signo de gravedad), taquicardia, taquipnea, íleo, distensión, defensa muscular involuntaria y signo de rebote. Sin embargo, en **adultos mayores, pacientes con esteroides, inmunosuprimidos y posoperados recientes**, los signos peritoneales pueden estar atenuados o ausentes. En el posoperatorio de cirugía gastrointestinal, la **taquicardia inexplicable persistente (> 110–120 lpm)**, la taquipnea, la oliguria, el delirio de novo, el íleo refractario o un ascenso de PCR/procalcitonina deben hacer sospechar **fuga anastomótica o sepsis abdominal oculta** antes de esperar a que aparezca un abdomen en tabla.

### Diagnóstico e imagen
- **Laboratorio:** biometría hemática (leucocitosis o leucopenia < 4,000 con bandemia), química sanguínea, pruebas de función hepática, tiempos de coagulación, **gasometría con lactato seriado** (el aclaramiento del lactato guía la reanimación) y **procalcitonina** (útil sobre todo en tendencia para apoyar la suspensión antibiótica, nunca aislada para descartar cirugía).
- **Cultivos:** tomar **dos pares de hemocultivos** antes de iniciar el antibiótico (sin retrasar jamás su administración). En infección comunitaria no complicada (p. ej., apendicitis aguda sin factores de riesgo) los cultivos peritoneales rutinarios no cambian la conducta; en cambio, son **obligatorios en peritonitis nosocomial, posoperatoria, choque séptico, inmunosupresión o falla terapéutica** para desescalar el espectro antimicrobiano.
- **Imagen:** la **TC de abdomen y pelvis con contraste intravenoso** es el método diagnóstico de elección en el paciente estable para identificar el órgano culpable, localizar abscesos susceptibles de drenaje percutáneo, detectar neumoperitoneo sutil o confirmar una fuga anastomótica (agregando contraste hidrosoluble oral o rectal según el nivel anatómico). El ultrasonido a la cabecera es útil en embarazadas, niños o pacientes inestables para detectar líquido libre o patología biliar.

| Escenario clínico (SIS / WSES) | Microorganismos objetivo | Esquema empírico IV inicial sugerido |
|---|---|---|
| **IIAc comunitaria leve a moderada** (sin choque, sin factores de riesgo de resistencia) | Enterobacterias (*E. coli*, *Klebsiella*) + anaerobios (*B. fragilis*) | Ceftriaxona + metronidazol; o ertapenem; o ciprofloxacino + metronidazol (en alergia grave a β-lactámicos, vigilando resistencia local) |
| **IIAc comunitaria grave / choque séptico** | Enterobacterias + anaerobios + cobertura antipseudomónica | Piperacilina-tazobactam; o cefepime + metronidazol; o meropenem/imipenem (si alta prevalencia local de BLEE) |
| **IIA nosocomial / posoperatoria / terciaria** | BLEE, *P. aeruginosa*, *Enterococcus* spp. (agregar vancomicina si SARM o choque) | Meropenem (o piperacilina-tazobactam / ceftazidima-avibactam + metronidazol según ecología local) ± vancomicina/linezolid |
| **Factores de riesgo para *Candida* invasiva** (choque séptico nosocomial, perforación gastroduodenal recurrente, NPT, inmunosupresión) | *Candida albicans* y especies no *albicans* resistentes a azoles | **Equinocandina** (caspofungina, micafungina o anidulafungina) en paciente crítico; fluconazol solo en paciente estable sin exposición previa a azoles |

### Manejo paso a paso: paquete de reanimación y control del foco
La mortalidad de la sepsis abdominal aumenta de forma proporcional a cada hora de retraso en administrar el antibiótico adecuado y en controlar el foco infeccioso. El manejo se ejecuta de manera simultánea siguiendo *Surviving Sepsis Campaign* (2021) y las guías WSES (2024):

1. **Reanimación inicial y paquete de la primera hora:**
   - Medir lactato sérico y repetirlo en 2–4 horas si es > 2 mmol/L.
   - Obtener hemocultivos sin demorar el antibiótico.
   - Administrar **antimicrobiano IV de amplio espectro dentro de la primera hora** en choque séptico (y en menos de 3 horas en sepsis sin choque), optimizando la farmacocinética (dosis de carga completa e infusión extendida en β-lactámicos en el paciente crítico).
   - Infundir **cristaloides balanceados** (Hartmann/Ringer lactato preferidos sobre solución salina 0.9 % para reducir acidosis hiperclorémica y lesión renal aguda) a razón inicial de **~30 mL/kg en las primeras 3 horas** ante hipoperfusión o hipotensión, guiando los bolos subsecuentes mediante **medidas dinámicas de respuesta a fluidos** (elevación pasiva de piernas, variación de presión de pulso o ecografía a la cabecera) para evitar sobrecarga hídrica y edema intestinal.
   - Iniciar **noradrenalina** como vasopresor de primera línea (incluso por vía periférica segura temporal mientras se coloca catéter central) con meta de **PAM ≥ 65 mmHg**. Agregar **vasopresina** (0.03 U/min) si se requieren dosis crecientes de noradrenalina, y considerar **hidrocortisona 200 mg/día IV** únicamente en choque séptico refractario a vasopresores.
2. **Control del foco (el pilar definitivo):** ningún antibiótico cura una perforación libre ni un absceso grande no drenado. Debe ejecutarse idealmente en las **primeras 6–12 horas** (de inmediato si hay choque séptico o peritonitis difusa):
   - **Drenaje percutáneo guiado por TC o ultrasonido:** elección en abscesos bien delimitados (> 3–4 cm) en pacientes hemodinámicamente estables sin peritonitis difusa ni necrosis visceral.
   - **Cirugía urgente (laparotomía o laparoscopia según experiencia y estabilidad):** indicada en peritonitis generalizada, isquemia intestinal, perforación libre, falla del drenaje percutáneo o choque séptico. Consiste en evacuar material purulento/fecal, desbridar tejido necrótico, resecar o cerrar el órgano perforado (evitando anastomosis primarias riesgosas en pacientes en choque con dosis altas de vasopresores; en ese caso optar por estoma o control de daños) y realizar lavado peritoneal dirigido sin arrastrar contaminación hacia espacios limpios.
3. **Estrategia de reintervención y abdomen abierto en sepsis:** en la mayoría de las peritonitis secundarias con control adecuado del foco en la primera cirugía, la estrategia de **relaparotomía a demanda (*on-demand*)** (reoperar solo ante deterioro clínico o hallazgos en TC) ha demostrado igual mortalidad, menos reoperaciones y menor estancia en UCI que la relaparotomía programada rutinaria (ensayo RELAP). El **abdomen abierto con terapia de presión negativa** se reserva para casos seleccionados de choque séptico grave con control de daños (cirugía abreviada), contaminación imposible de controlar en un tiempo, necesidad de *second-look* por isquemia mesentérica o prevención/tratamiento de síndrome compartimental abdominal.
4. **Duración del tratamiento antimicrobiano y desescalamiento:** con base en el ensayo aleatorizado **STOP-IT** (Sawyer et al., NEJM 2015), tras lograr un **control adecuado del foco**, un curso fijo de **4 días de antibióticos** (3–5 días según guías WSES) es igual de eficaz que cursos prolongados de 8–10 días, reduciendo infecciones por *Clostridioides difficile*, resistencia bacteriana y nefrotoxicidad. Si el paciente persiste con fiebre o leucocitosis al 4.º–5.º día, **no prolongar antibióticos a ciegas**: buscar un foco no controlado o una colección residual mediante TC. Desescalar siempre el espectro al recibir los cultivos a las 48–72 horas.
5. **Soporte integral en UCI/piso:** ventilación protectora (Vt 6 mL/kg de peso predicho), control glucémico (< 180 mg/dL), tromboprofilaxis farmacológica y mecánica, profilaxis de úlcera de estrés si hay factores de riesgo y nutrición enteral precoz una vez estabilizada la perfusión.

### Falla terapéutica y seguimiento
Ante ausencia de mejoría clínica, persistencia de fiebre, leucocitosis o ascenso de lactato a las 48–72 horas de la intervención inicial, el algoritmo diagnóstico exige:
1. Reevaluar al paciente completo descartando focos extraabdominales (neumonía, infección de catéter, IVU, infección de herida quirúrgica, TVP).
2. Solicitar **TC de abdomen y pelvis con contraste** para descartar absceso residual, fuga anastomótica o isquemia progresiva.
3. Revisar cultivos y antibiogramas para identificar patógenos resistentes (BLEE, *Enterococcus*, *Candida*) y ajustar el esquema.

### Perlas de examen
- El tratamiento de la infección intraabdominal complicada tiene dos pilares inseparables: **control del foco + antibiótico empírico temprano**; el antibiótico solo fracasa si el foco no se drena o reseca.
- En la **peritonitis bacteriana espontánea** (primaria, cirróticos, PMN ≥ 250/mm³, monomicrobiana), el tratamiento es **médico** (ceftriaxona + albúmina), jamás laparotomía.
- Según el ensayo **STOP-IT**, tras un control adecuado del foco la duración óptima de antibióticos en infección intraabdominal complicada es de **4 días** (3–5 días); si hay fiebre al día 5, **pedir TC para buscar colección residual** en vez de extender antibióticos sin diagnóstico.
- **Sepsis-3:** sepsis = infección + ΔSOFA ≥ 2; **choque séptico** = vasopresor para PAM ≥ 65 mmHg + lactato > 2 mmol/L. Vasopresor de primera línea: **noradrenalina**.
- En el posoperatorio de cirugía digestiva, la **taquicardia persistente inexplicable** suele ser el signo más temprano de **fuga anastomótica**.
- La estrategia de **relaparotomía a demanda (*on-demand*)** es preferible a la relaparotomía programada rutinaria en pacientes estabilizados tras el primer control del foco.

### Referencias
Evans L et al. *Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021*, Intensive Care Med 2021 · Sartelli M et al. *WSES/GAIS/WSIS/SIS-E/AAST Global Clinical Pathways for Patients with Intra-Abdominal Infections*, World J Emerg Surg 2024 · Sawyer RG et al. *Trial of Short-Course Antimicrobial Therapy for Intraabdominal Infection (STOP-IT)*, N Engl J Med 2015 · Mazuski JE et al. *Surgical Infection Society Revised Guidelines on the Management of Intra-Abdominal Infection*, Surg Infect 2017 · Sabiston 21.ª ed. · Schwartz 11.ª ed.
`),
  ],
};
