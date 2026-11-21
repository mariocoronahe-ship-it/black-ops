// Hojas por subtema de los módulos R2 de Colon y Apéndice (7 hojas) y Recto y Ano (8 hojas).
// Integra y amplía el contenido doctrinal de temario_aprende_base.js, resúmenes R2 y temario PUEM HGR 72. Ver hoja.js.
import { sheet } from './hoja.js?v=20261122a';

export const R2_COLON = {
  colon: [
    sheet('col-anatomia', '01', 'Anatomía quirúrgica, vascularización y fisiología del colon', `
## Anatomía quirúrgica, vascularización y fisiología del colon

### Embriología y relevancia quirúrgica
El intestino grueso mide entre **120 y 150 cm de longitud** en el adulto y se extiende desde el ciego en la fosa ilíaca derecha hasta la unión rectosigmoidea a la altura de la tercera vértebra sacra (S3) [Tratado AMCG 3ª ed., Cap. 145; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52]. Desde el punto de vista embriológico, el colon tiene un origen dual que determina de manera directa su irrigación arterial, su drenaje venoso, sus vías linfáticas de diseminación oncológica y los planos fasciales avasculares de movilización quirúrgica:
- **Intestino medio (derivado de la arteria mesentérica superior, AMS):** origina el ciego, el apéndice cecal, el colon ascendente y los **dos tercios proximales del colon transverso**.
- **Intestino posterior (derivado de la arteria mesentérica inferior, AMI):** origina el **tercio distal del colon transverso**, la flexura esplénica, el colon descendente, el colon sigmoides y el recto superior y medio.

Durante las semanas 6 a 12 de gestación el intestino medio realiza una rotación antihoraria de **270°** alrededor del eje de la AMS. Al regresar a la cavidad abdominal, el mesocolon ascendente y el mesocolon descendente se adosan al peritoneo parietal posterior formando la **fascia de coalescencia de Toldt** (derecha e izquierda). Esta lámina avascular de tejido areolar laxo constituye el plano embriológico de oro para la movilización medial-a-lateral o lateral-a-medial en cirugía laparoscópica y en la excisión completa del mesocolon (CME), protegiendo las estructuras retroperitoneales subyacentes: uréteres, vasos gonadales, segunda y tercera porciones del duodeno, cabeza pancreática y fascia de Gerota.

### Morfología externa, capas histológicas y segmentos anatómicos
El colon se distingue macroscópicamente del intestino delgado por tres rasgos patognomónicos que el cirujano utiliza para orientarse en laparotomía y laparoscopia:
1. **Tenias cólicas:** tres bandas longitudinales gruesas resultantes de la condensación de la capa muscular longitudinal externa: la **tenia libre** (anterior en ciego, ascendente y descendente; inferior en transverso), la **tenia mesocólica** (posterointerna, sitio de inserción del mesocolon) y la **tenia omental** (posterolateral, anclaje del epiplón mayor). Las tres tenias convergen en la base del ciego marcando invariablemente el nacimiento del apéndice cecal; en la unión rectosigmoidea se ensanchan y se fusionan para formar una capa longitudinal circunferencial continua propia del recto.
2. **Haustras cólicas:** saculaciones segmentarias interpuestas entre las tenias, generadas porque las tenias son más cortas que la longitud real del tubo intestinal; internamente corresponden a los pliegues semilunares. Su pérdida radiográfica ("tubo de plomo") traduce inflamación crónica transmural (CUCI de larga evolución) o dilatación paralítica severa (megacolon tóxico).
3. **Apéndices epiploicos (omentales):** prolongaciones pedunculadas de tejido adiposo subseroso recubiertas de peritoneo visceral, dispuestas a lo largo de las tenias libre y omental. Son más abundantes en el sigmoides y están **ausentes en el apéndice cecal y en el recto**. Su torsión e infarto producen apendagitis epiploica, simulador clásico de diverticulitis o apendicitis que se resuelve con analgésicos sin requerir cirugía.

Histológicamente, la pared colónica consta de mucosa (epitelio cilíndrico simple sin vellosidades, con criptas de Lieberkühn ricas en células caliciformes y enterocitos absortivos), **submucosa** (capa más rica en colágeno tipos I y III, vasos y plexo nervioso de Meissner; **es la capa que aporta la mayor fuerza tensil para el anclaje de suturas y grapas anastomóticas**), muscular propia (circular interna y longitudinal externa con plexo mientérico de Auerbach entre ambas) y serosa peritoneal (ausente en la cara posterior del colon ascendente y descendente, que son secundariamente retroperitoneales).

| Segmento | Longitud aproximada | Relación peritoneal | Relaciones quirúrgicas críticas |
| :--- | :--- | :--- | :--- |
| **Ciego** | 6–8 cm (diámetro 7.5–9 cm) | Intraperitoneal (90% móvil o fijado parcialmente) | Uréter derecho, vasos ilíacos externos, músculo psoas, nervio genitofemoral |
| **Colon ascendente** | 15–20 cm | Retroperitoneal posterior (fascia de Toldt derecha) | Duodeno (D2–D3), riñón derecho, uréter derecho, vasos gonadales |
| **Colon transverso** | 40–50 cm | Intraperitoneal con mesocolon móvil | Ligamento gastrocólico, páncreas, vasos cólicos medios, bazo (ángulo esplénico) |
| **Colon descendente** | 25–30 cm | Retroperitoneal posterior (fascia de Toldt izquierda) | Riñón izquierdo, cola pancreática, uréter izquierdo, vasos gonadales |
| **Colon sigmoides** | 35–45 cm (muy variable) | Intraperitoneal con mesosigmoides en V invertida | Uréter izquierdo (cruza bifurcación ilíaca en el receso intersigmoideo), plexo hipogástrico superior |

El **ángulo hepático** guarda relación directa con la vesícula biliar, el lóbulo derecho hepático y la segunda porción duodenal; el **ángulo esplénico** se sitúa más alto y profundo, anclado al diafragma y al bazo por el ligamento frenocólico izquierdo y el esplenocólico, cuya tracción excesiva durante la movilización colónica izquierda es la causa más frecuente de lesión esplénica iatrógena.

### Vascularización arterial, arcadas anastomóticas y puntos críticos isquémicos
El colon recibe su aporte sanguíneo de dos troncos mayores cuya anatomía presenta variaciones frecuentes que el cirujano debe reconocer antes de cualquier ligadura vascular [Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52]:
- **Sistema de la Arteria Mesentérica Superior (AMS):** nace de la cara anterior de la aorta a nivel de L1, detrás del cuello pancreático y cruza anterior a D3. Emite:
  - *Arteria ileocólica:* rama constante que irriga el íleon terminal, ciego y apéndice (vía arteria apendicular, arteria terminal que discurre por el borde libre del mesoapéndice).
  - *Arteria cólica derecha:* rama más inconstante (ausente como tronco independiente hasta en 15–30%, naciendo a menudo de la ileocólica o la cólica media); irriga el colon ascendente.
  - *Arteria cólica media:* nace debajo del borde inferior del páncreas, penetra en el mesocolon transverso y se divide en rama derecha (anastomosa con la cólica derecha) y rama izquierda (anastomosa con la cólica izquierda).
- **Sistema de la Arteria Mesentérica Inferior (AMI):** nace de la cara anterolateral izquierda de la aorta a nivel de **L3**, unos 3 a 4 cm proximal a la bifurcación aórtica. Emite la **arteria cólica izquierda** (asciende hacia el colon descendente y ángulo esplénico), de **2 a 4 arterias sigmoideas** y continúa como **arteria rectal superior (hemorroidal superior)** tras cruzar los vasos ilíacos comunes izquierdos.

Dos circuitos anastomóticos conectan ambos territorios y permiten la viabilidad colónica tras ligaduras oncológicas altas:
1. **Arcada marginal de Drummond:** vaso anastomótico continuo que recorre todo el borde mesentérico del colon a 1–2 cm de la pared intestinal, uniendo las ramas terminales desde la ileocólica hasta la rectal superior y emitiendo los vasos rectos (*vasa recta*) que penetran la pared muscular.
2. **Arco de Riolano (arteria meándrica mesentérica):** comunicación anastomótica central accesoria, más proximal que Drummond, que conecta directamente la rama izquierda de la arteria cólica media (AMS) con la rama ascendente de la arteria cólica izquierda (AMI). Su hipertrofia en la angiotomografía es signo clásico de estenosis aterosclerótica crónica de la AMS o la AMI.

Dos zonas limítrofes (*watershed areas*) tienen circulación colateral precaria y concentran la isquemia colónica:
- **Punto crítico de Griffiths (ángulo esplénico):** frontera entre los territorios de la AMS (cólica media) y la AMI (cólica izquierda), donde la arcada de Drummond es delgada o discontinua hasta en 5–10% de las personas. Es el **sitio más vulnerable de todo el colon a la colitis isquémica no oclusiva** durante episodios de hipotensión, choque, cirugía aórtica o bajo gasto cardíaco.
- **Punto crítico de Sudeck (unión rectosigmoidea):** zona de transición entre la última arteria sigmoidea y la arteria rectal superior; adquiere relevancia crítica cuando se liga la AMI en su origen o se reseca el recto superior sin conservar la arcada marginal permeable.

| Estructura vascular / punto | Ubicación anatómica | Origen / comunicación | Importancia quirúrgica práctica |
| :--- | :--- | :--- | :--- |
| **Arcada de Drummond** | Borde mesentérico continuo a 1–2 cm de la pared | Anastomosis periférica AMS–AMI | Mantiene perfusión del colon izquierdo tras ligadura alta de la AMI |
| **Arco de Riolano** | Raíz del mesocolon transverso izquierdo | Rama izq. cólica media ↔ rama asc. cólica izq. | Vía colateral central; su lesión involuntaria al movilizar la VMI puede isquemiar el descenso |
| **Punto de Griffiths** | Flexura esplénica | Transición AMS / AMI | Sitio #1 de colitis isquémica no oclusiva |
| **Punto de Sudeck** | Unión rectosigmoidea | Última arteria sigmoidea ↔ rectal superior | Riesgo de isquemia anastomótica en resección anterior baja |
| **Tronco gastrocólico de Henle** | Borde inferior de cabeza pancreática (VMS) | Confluencia vena cólica derecha + gastroepiploica derecha + pancreatoduodenal anterosuperior | Sitio clásico de hemorragia venosa severa en hemicolectomía derecha con CME |

### Drenaje venoso, drenaje linfático e inervación
El drenaje venoso acompaña de manera estrecha al arterial salvo una asimetría anatómica crucial en cirugía laparoscópica izquierda:
- Las venas del colon derecho y transverso drenan hacia la **vena mesentérica superior (VMS)**, que asciende a la derecha de la AMS y se une con la vena esplénica detrás del cuello pancreático para formar la vena porta. El **tronco venoso gastrocólico de Henle** desemboca en la cara anterolateral derecha de la VMS y exige disección cuidadosa en hemicolectomía derecha oncológica.
- La **vena mesentérica inferior (VMI)** NO acompaña a la AMI hasta la aorta; asciende verticalmente por el retroperitoneo a la izquierda del ángulo de Treitz y desemboca habitualmente en la **vena esplénica** (60%) o en la confluencia esplenomesentérica por debajo del borde inferior del páncreas. La ligadura alta de la VMI bajo el borde pancreático es un paso clave para ganar longitud sin tensión al descender el colon izquierdo hacia la pelvis.

El drenaje linfático sigue fielmente el trayecto arterial en cuatro estaciones sucesivas que fundamentan la linfadenectomía oncológica: ganglios **epicólicos** (sobre la pared intestinal), **paracólicos** (a lo largo de la arcada de Drummond), **intermedios** (a lo largo de los vasos cólicos principales) y **centrales o apicales (estación D3)** en la raíz de la AMS y la AMI.

La inervación autonómica regula secreción y motilidad:
- **Simpático (inhibitorio de la motilidad):** fibras preganglionares de T6–T12 (colon derecho y transverso, vía plexo mesentérico superior) y L1–L2 (colon izquierdo y sigmoides, vía plexo mesentérico inferior y plexo hipogástrico superior).
- **Parasimpático (estimulador de la motilidad y propulsión):** nervio vago (X) hasta el ángulo esplénico; nervios esplácnicos pélvicos (*nervi erigentes*, S2–S4) para el colon izquierdo distal, sigmoides y recto. El desequilibrio entre inhibición simpática y supresión parasimpática sacra explica el síndrome de Ogilvie.

### Ley de Laplace y biomecánica de la perforación cecal
La Ley de Laplace aplicada a cilindros viscerales de pared elástica establece que la tensión tangencial parietal (T) es proporcional al producto de la presión intraluminal (P) por el radio (r): **T = P × r** (o T = P × r / grosor parietal en la formulación de pared fina) [Tratado AMCG 3ª ed., Cap. 145; Sabiston 21ª ed., Cap. 52].

Su consecuencia clínica es directa: el ciego tiene el **mayor diámetro basal** de todo el tubo digestivo (7.5 a 9.0 cm) y además la **pared muscular más delgada** del colon. Ante una obstrucción distal (por ejemplo, cáncer estenosante de sigmoides) acompañada de una **válvula ileocecal competente** (presente en ~75–85% de los adultos, lo cual impide la descompresión retrógrada hacia el íleon y convierte al colon en un asa cerrada), la presión intraluminal aumenta de forma uniforme en todo el marco colónico, pero la tensión parietal máxima recae sobre el ciego. Cuando el diámetro cecal alcanza **10 a 12 cm** en la radiografía simple o la tomografía, la tensión supera la presión de perfusión capilar submucosa (>30 mmHg), ocasiona isquemia mucosa, necrosis transmural y **perforación diastática del ciego**, a distancia del tumor obstructivo. El mismo principio explica el riesgo de perforación en el síndrome de Ogilvie y el megacolon tóxico.

### Fisiología del colon: absorción, motilidad y microbioma
El colon cumple tres funciones fisiológicas cardinales que explican la clínica de la diarrea poscolectomía y la adaptación tras resecciones extensas:
1. **Absorción de agua y electrolitos:** el íleon terminal entrega diariamente entre **1,000 y 1,500 mL** de quimo isotónico al ciego. El colon sano absorbe cerca del **90%** del agua y del sodio (dejando 100–200 mL de agua en heces), con una **capacidad absortiva máxima de hasta 4.5 a 5.0 L/día**. El sodio se absorbe activamente (canales ENaC regulados por aldosterona en el colon distal e intercambiador Na⁺/H⁺ en el proximal), el cloro se intercambia por bicarbonato (razón por la cual las fístulas colónicas o diarreas secretoras causan acidosis metabólica hiperclorémica) y el potasio se secreta pasiva y activamente hacia la luz. El colon derecho absorbe la mayor parte del volumen líquido; el izquierdo almacena y deseca las heces.
2. **Metabolismo bacteriano y ácidos grasos de cadena corta (AGCC):** el colon alberga más de 10¹¹–10¹² bacterias por gramo de contenido fecal, con claro predominio de **anaerobios obligados** (*Bacteroides fragilis*, *Clostridium*, *Bifidobacterium*) en proporción 1,000:1 sobre aerobios y facultativos (*Escherichia coli*, *Klebsiella*, *Enterococcus*). Esta microbiota fermenta los carbohidratos no digeridos en **AGCC (acetato, propionato y butirato)**. El **butirato es el principal sustrato energético del colonocito** (aporta ~70% de su energía); su privación en un segmento excluido tras una colostomía explica la **colitis por derivación**, que mejora con enemas de AGCC o al restablecer el tránsito. La flora también sintetiza vitamina K y desconjuga ácidos biliares y bilirrubina.
3. **Motilidad colónica:** presenta contracciones segmentarias no propulsivas (haustración, que mezcla y prolonga el contacto absortivo) y **movimientos en masa** (contracciones propulsivas de alta amplitud, 1 a 3 veces al día, desencadenadas por el **reflejo gastrocólico** tras las comidas), que impulsan el bolo fecal hacia el rectosigmoides. El tiempo de tránsito colónico normal oscila entre 24 y 72 horas.

### Implicaciones prácticas para la preparación y cirugía colorrectal
El conocimiento de la microbiota colónica y de la vascularización sustenta principios básicos de cirugía moderna (guías ASCRS y protocolos ERAS):
- La **preparación mecánica combinada con antibióticos orales no absorbibles** (neomicina más metronidazol o eritromicina) más profilaxis antibiótica intravenosa (cobertura para gramnegativos y anaerobios 30–60 min antes de la incisión) reduce de manera significativa la infección del sitio quirúrgico y la fuga anastomótica en resecciones electivas, mientras que la preparación mecánica aislada sin antibiótico oral no ofrece ese beneficio.
- Toda anastomosis colónica exige tres pilares inviolables: **perfusión arterial y drenaje venoso íntegros** (confirmados por sangrado rojo rutilante de bordes, pulso en arcada marginal o fluorescencia con verde de indocianina), **ausencia absoluta de tensión** (movilizando el ángulo esplénico cuando sea necesario) y **afrontamiento submucoso hermético** sin contaminación activa ni choque hemodinámico.

### Perlas de examen
- Las **tres tenias cólicas convergen en la base del apéndice**; los apéndices epiploicos están ausentes en el apéndice y el recto.
- La **submucosa** es la capa histológica que brinda la mayor resistencia mecánica a las suturas y grapas en una anastomosis colónica.
- **Punto de Griffiths** (ángulo esplénico, unión AMS–AMI): zona más susceptible a colitis isquémica no oclusiva. **Punto de Sudeck** (unión rectosigmoidea): última sigmoidea con rectal superior.
- **Ley de Laplace (T = P × r):** ante obstrucción distal con válvula ileocecal competente, el **ciego** perfora primero al superar **10–12 cm** de diámetro.
- El **butirato** (ácido graso de cadena corta) es el combustible principal del colonocito; su ausencia explica la colitis por derivación en segmentos desfuncionalizados.
- La **VMI** drena habitualmente en la **vena esplénica** bajo el borde inferior del páncreas, NO en la cava ni junto al origen aórtico de la AMI; el **uréter izquierdo** debe identificarse siempre antes de ligar la AMI.
- En el colon predominan los **anaerobios** (*Bacteroides fragilis*) sobre los aerobios (*E. coli*) en relación aproximada de 1,000:1; toda profilaxis quirúrgica colónica debe cubrir ambos.
`),
    sheet('col-colitis', '02', 'Colitis inespecíficas (CUCI y Crohn colónico) y amebiasis colónica', `
## Colitis inespecíficas (CUCI y Crohn colónico) y amebiasis colónica

### Panorama quirúrgico y diagnóstico diferencial
Las colitis con potencial requerimiento quirúrgico urgente o electivo en Cirugía General se agrupan en dos grandes vertientes: las **enfermedades inflamatorias intestinales (EII)** —colitis ulcerosa crónica inespecífica (CUCI) y enfermedad de Crohn con afección colónica— y las **colitis infecciosas invasivas**, encabezadas en México por la **amebiasis colónica invasiva** por *Entamoeba histolytica* (además de *Clostridioides difficile*, abordada en hoja aparte). Para el cirujano la toma de decisiones responde a tres preguntas concretas: **qué entidad tiene el paciente** (porque cambia radicalmente la extensión de la resección y la posibilidad de anastomosis o reservorio), **cuándo intervenir** (operar tarde en colitis fulminante multiplica la mortalidad) y **qué operación ofrece el máximo control séptico con la menor morbilidad**.

Antes de etiquetar un brote como EII o escalar inmunosupresión, es obligatorio descartar colitis infecciosas mediante coprocultivo, toxinas de *C. difficile*, examen coproparasitoscópico/antígeno de *E. histolytica* y, en pacientes refractarios a esteroides o inmunosuprimidos, biopsia colónica para **citomegalovirus (CMV)** [Schwartz 11ª ed., Cap. 29; ACG-UC 2025]. La **calprotectina fecal** (punto de corte 50–100 µg/g) discrimina eficazmente enfermedad inflamatoria intestinal orgánica de trastornos funcionales y sirve para monitorizar respuesta mucosa [ACG-Crohn, Lichtenstein 2025].

### CUCI vs enfermedad de Crohn colónico: diferencias anatomopatológicas y clínicas
La distinción anatomopatológica entre CUCI y Crohn explica directamente su comportamiento quirúrgico [Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52]:
- La **CUCI** es un proceso inflamatorio limitado a la **mucosa y submucosa**, con inicio constante en el recto y extensión **continua** en sentido proximal. Presenta friabilidad mucosa, úlceras superficiales, **abscesos de las criptas** y **seudopólipos** inflamatorios. Al respetar la serosa, rara vez fistuliza o genera masas inflamatorias penetrantes, pero sangra abundantemente y en su forma fulminante causa pérdida del tono muscular y megacolon tóxico.
- La **enfermedad de Crohn** es **transmural** y **discontinua (lesiones salteadas)**; puede comprometer cualquier segmento desde la boca hasta el ano, con frecuente respeto rectal. Histológicamente muestra úlceras aftoides que coalescen en patrón en "empedrado", **granulomas no caseificantes** (patognomónicos aunque presentes solo en ~30–50% de biopsias), fibrosis transmural y grasa mesentérica envolvente (*creeping fat*). Por ser transmural, **penetra** (abscesos, fístulas enteroentéricas, enterocutáneas y perianales) y **estenosa**.

| Rasgo diferencial | CUCI | Crohn colónico |
| :--- | :--- | :--- |
| **Profundidad parietal** | Mucosa y submucosa | Transmural (mucosa a serosa y mesenterio) |
| **Distribución** | Continua desde el recto; ileítis por reflujo (*backwash*) en pancolitis | Segmentaria (lesiones salteadas); suele respetar el recto |
| **Histología típica** | Abscesos de criptas, depleción de moco, seudopólipos | Granulomas no caseificantes, úlceras fisurantes, fibrosis transmural |
| **Endoscopia** | Eritema difuso, pérdida de patrón vascular, friabilidad, úlceras continuas | Úlceras lineales/aftoides, aspecto en empedrado, mucosa intercalada sana |
| **Complicación quirúrgica clásica** | Hemorragia masiva, colitis fulminante, megacolon tóxico | Estenosis (9–13% de Crohn colónico), abscesos, fístulas, enfermedad perianal |
| **¿Cirugía curativa?** | Sí en lo colorrectal (proctocolectomía total elimina enfermedad colorrectal) | No (enfermedad recurrente; 50–70% requerirá al menos una operación) |
| **Reservorio ileoanal (IPAA)** | Estándar de reconstrucción tras proctocolectomía | Controvertido / no de primera línea (alta tasa de falla y fístulas del reservorio) |
| **Riesgo de cáncer colorrectal** | Aumenta con pancolitis y años de evolución | Similar al de CUCI (riesgo 2–3 veces mayor en colitis extensa de Crohn) |
| **Marcadores serológicos orientadores** | p-ANCA positivo (~60–70%) | ASCA positivo (~50–60%) |

Hasta un 10% de las colitis inflamatorias se clasifican inicialmente como **colitis indeterminada (EII no clasificada)**; cuando requieren cirugía urgente, la colectomía subtotal permite examinar toda la pieza colónica antes de decidir la reconstrucción definitiva.

### Clasificación y escalas de actividad (Montreal, Truelove-Witts y Mayo)
- **Clasificación de Montreal (2006):**
  - *CUCI por extensión:* **E1** proctitis (limitada al recto), **E2** colitis izquierda (distal al ángulo esplénico) y **E3** colitis extensa o pancolitis (proximal al ángulo esplénico). *Por gravedad:* S0 remisión, S1 leve, S2 moderada, S3 grave.
  - *Enfermedad de Crohn:* edad al diagnóstico (**A1** ≤16 años, **A2** 17–40 años, **A3** >40 años); localización (**L1** ileal, **L2** colónica, **L3** ileocolónica, **L4** tubo digestivo alto como modificador); comportamiento (**B1** no estenosante-no penetrante, **B2** estenosante, **B3** penetrante, añadiendo **«p»** ante enfermedad perianal).
- **Criterios de Truelove-Witts (CUCI aguda grave):** definen el brote grave que obliga a hospitalización inmediata: **≥6 evacuaciones sanguinolentas al día** acompañadas de al menos un signo de toxicidad sistémica: frecuencia cardiaca >90 lpm, temperatura >37.8 °C, hemoglobina <10.5 g/dL o VSG >30 mm/h (o PCR >30 mg/L en guías modernas) [ACG-UC, Rubin 2025].
- **Índice de Mayo (0–12 puntos):** suma cuatro parámetros de 0 a 3 puntos (frecuencia de evacuaciones, sangrado rectal, hallazgo endoscópico y evaluación global médica): 0–2 remisión, 3–5 leve, 6–10 moderada y 11–12 grave. Un subpuntaje endoscópico de 3 corresponde a sangrado espontáneo y ulceración extensa.

### Tratamiento médico escalonado y rescate en CUCI aguda grave
| Escenario clínico | Esquema terapéutico recomendado (ACG 2025 / ECCO 2026) |
| :--- | :--- |
| **CUCI leve a moderada** | 5-ASA (mesalamina) oral ≥2 g/día; en proctitis/proctosigmoiditis, 5-ASA rectal ≥1 g/día (superior al esteroide tópico) y combinación oral + rectal |
| **Falla a 5-ASA** | Esteroide de liberación colónica (budesonida MMX) en brote leve-moderado |
| **CUCI moderada a grave** | Ciclo corto de prednisolona oral como puente hacia terapia avanzada (anti-TNF, vedolizumab, ustekinumab, anti-IL-23, inhibidores JAK o moduladores S1P). Tiopurinas/metotrexato NO inducen remisión en monoterapia |
| **Mantenimiento** | 5-ASA ≥2 g/día en leve-moderada o terapia avanzada/inmunomodulador; **los esteroides sistémicos jamás se usan para mantenimiento** |
| **CUCI aguda grave hospitalizada** | Esteroide IV: **metilprednisolona 60 mg/día** o **hidrocortisona 100 mg IV cada 6–8 h**, tromboprofilaxis obligatoria (alto riesgo de TVP/TEP), corrección de electrolitos; suspender 5-ASA oral y evitar AINE, opioides y anticolinérgicos |

Aproximadamente el **30% de los pacientes con CUCI aguda grave no responde al esteroide IV** y entre 10 y 20% requiere colectomía durante el primer ingreso [ECCO-UC 2022/2026]. La reevaluación crítica se realiza al **día 3** mediante los **criterios de Oxford**: **>8 evacuaciones/día**, o **3 a 8 evacuaciones/día con PCR >45 mg/L** (predice colectomía en 85% sin rescate). Ante falla al día 3 se inicia terapia de rescate médico con **infliximab** (5 mg/kg en semanas 0, 2 y 6) o **ciclosporina IV** (2 mg/kg/día en infusión continua con niveles valle de 150–250 ng/mL; evitar si el paciente ya falló previamente a tiopurinas), con tasas comparables de colectomía a 98 días (17% vs 21%). **La valoración quirúrgica debe solicitarse desde el día 3**; si no existe mejoría franca a los **7 días** de tratamiento intensivo o aparece cualquier dato de toxicidad, **debe operarse sin demora**, pues retrasar la colectomía dispara la mortalidad hasta 15%. El uso previo de infliximab o ciclosporina no aumenta las complicaciones posoperatorias ni justifica diferir una colectomía indicada [ACG-UC 2025].

### Indicaciones y tácticas quirúrgicas en CUCI y Crohn colónico
#### Colitis ulcerosa crónica inespecífica (CUCI)
- **Indicaciones urgentes:** megacolon tóxico (criterios de Jalan: colon transverso >6 cm + signos de toxicidad), perforación libre, hemorragia masiva refractaria, falla multiorgánica y colitis aguda grave refractaria a esteroide IV y rescate médico.
- **Indicaciones electivas:** enfermedad refractaria a terapia médica óptima o corticodependiente, intolerancia terapéutica, retraso ponderal en niños, **displasia de alto grado**, displasia de bajo grado multifocal o cáncer colorrectal.
- **Cirugía de urgencia:** **colectomía abdominal subtotal con ileostomía terminal**, preservando el recto (muñón rectal cerrado a nivel de la reflexión peritoneal o exteriorizado como fístula mucosa; evitar un muñón muy corto bajo la reflexión peritoneal que dificulta la reintervención y eleva el riesgo de sepsis pélvica). **Jamás se realiza proctocolectomía total ni anastomosis ileoanal en urgencia**, porque el paciente está séptico, hipoalbuminémico e inmunosuprimido y la disección pélvica aumenta el sangrado y las lesiones nerviosas.
- **Reconstrucción electiva (estándar):** **proctocolectomía total restauradora con reservorio ileoanal en «J» (IPAA)** (reservorio de ~15 cm sin tensión, manguito o *cuff* rectal ≤2 cm, anastomosis engrapada y abordaje mínimamente invasivo). Tras una colitis aguda grave se realiza en **tres tiempos** (1. colectomía subtotal + ileostomía terminal; 2. proctectomía + IPAA + ileostomía en asa de protección; 3. cierre de ileostomía). El abordaje en dos tiempos (proctocolectomía + IPAA + ileostomía protectora, luego cierre) o dos tiempos modificado se reserva para pacientes electivos bien nutridos con esteroides <20 mg/día. La complicación tardía más frecuente del IPAA es la **reservoritis (*pouchitis*)**, tratada con ciprofloxacino o metronidazol.

#### Enfermedad de Crohn colónico
- **Principio rector:** cirugía conservadora y dirigida a complicaciones (estenosis sintomática, perforación, absceso no drenable, hemorragia, fístula compleja, cáncer o colitis fulminante), porque el Crohn recurre casi inevitablemente y preservar longitud intestinal previene el síndrome de intestino corto.
- **Crohn colónico urgente (colitis fulminante o megacolon tóxico):** colectomía subtotal con ileostomía terminal sin anastomosis [ASCRS-Crohn, Lightner 2020].
- **Crohn colónico electivo con recto sano:** si hay **un solo segmento afectado**, resección segmentaria con anastomosis primaria; si compromete **dos o más segmentos colónicos**, se prefiere **colectomía total con anastomosis ileorrectal**, porque la resección segmentaria múltiple presenta recurrencia quirúrgica mucho más temprana (4.4 años antes en promedio) [ASCRS-Crohn 2020].
- **Proctitis grave refractaria o destrucción perianal irreversible:** proctocolectomía total con **ileostomía terminal definitiva**. El reservorio ileoanal (IPAA) está generalmente contraindicado en Crohn por elevadísima tasa de fístulas y pérdida del reservorio.
- En el manejo médico del Crohn, la mesalamina carece de eficacia demostrada; se recomienda terapia avanzada temprana en enfermedad moderada-grave y **colonoscopia posoperatoria a los 6–12 meses** para detectar recurrencia endoscópica temprana (índice de Rutgeerts) y ajustar profilaxis [ACG-Crohn 2025].

### Vigilancia de displasia y cáncer en EII
Tanto la CUCI extensa como la colitis de Crohn extensa confieren riesgo elevado de adenocarcinoma colorrectal (cifras clásicas de texto: ~2% a 10 años, 8% a 20 años y 18% a 30 años; cohortes modernas reportan tasas menores gracias al mejor control inflamatorio) [ECCO-EII y neoplasias, Gordon 2023]:
- **Inicio:** primera colonoscopia de vigilancia a los **8 años del inicio de síntomas** (la proctitis aislada E1 no requiere programa especial). Si coexiste **colangitis esclerosante primaria (CEP)**, la vigilancia es **anual desde el momento del diagnóstico de la CEP**.
- **Intervalos posteriores:** cada **1 año** en alto riesgo (CEP, antecedente familiar de cáncer colorrectal en primer grado ≤50 años, estenosis o displasia en los últimos 5 años, colitis extensa con inflamación grave); cada **2–3 años** en riesgo intermedio; cada **5 años** sin factores de riesgo. Preferir **cromoendoscopia** con biopsias dirigidas en remisión.
- Una lesión polipoide visible, esporádica y completamente resecable en bloque sin displasia en la mucosa plana circundante puede manejarse con resección endoscópica y vigilancia estrecha; la **displasia de alto grado o displasia de bajo grado multifocal/no resecable** indica colectomía oncológica.

### Amebiasis colónica invasiva, colitis necrotizante fulminante y ameboma
La infección por el protozoario *Entamoeba histolytica* es endémica en México y representa una causa relevante de colitis aguda grave y error diagnóstico cuando se confunde con EII y se administran corticosteroides, los cuales desencadenan necrosis colónica catastrófica [Tratado AMCG 3ª ed., Cap. 147; Sabiston 21ª ed., Cap. 52].
- **Fisiopatología:** tras la ingestión de quistes, los trofozoítos colonizan el ciego y el colon ascendente, se adhieren mediante lectina Gal/GalNAc y secretan proteasas y amebaporos que destruyen el epitelio y se diseminan lateralmente en la submucosa formando las clásicas **úlceras en «botón de camisa»** o cuello de botella con necrosis licuefactiva.
- **Formas quirúrgicas de presentación:**
  1. *Colitis amebiana necrotizante fulminante (1–3% de los casos):* predomina en desnutridos, embarazadas, alcohólicos, diabéticos y pacientes tratados inadvertidamente con esteroides. Evoluciona con fiebre alta, disentería masiva, dolor abdominal intenso, megacolon tóxico y perforaciones múltiples. Macroscópicamente el colon muestra placas necróticas confluentes con friabilidad extrema en **«papel mojado»**, que se desgarra al menor contacto.
  2. *Ameboma (1%):* masa inflamatoria granulomatosa crónica, más frecuente en el ciego y colon ascendente, que produce dolor, masa palpable en fosa ilíaca derecha u obstrucción intestinal simulando de manera exacta un adenocarcinoma de colon o un plastrón apendicular.
- **Diagnóstico:** detección de antígeno específico de *E. histolytica* en heces o PCR (superior a la microscopía directa, que no distingue *E. histolytica* de *E. dispar* no patógena), serología (ELISA positiva en >85–90% de enfermedad invasiva o absceso hepático concomitante) y biopsia endoscópica de bordes ulcerosos que muestra trofozoítos hematófagos. Descartar siempre **absceso hepático amebiano** sincrónico con ultrasonido o TC.
- **Tratamiento médico:** **metronidazol 750 mg IV u oral cada 8 horas durante 10 a 14 días** (amebicida tisular), seguido invariablemente de un **amebicida luminal** (**paromomicina 500 mg VO cada 8 h por 7 días** o yodoquinol) para erradicar quistes y prevenir recaídas. El ameboma no complicado se resuelve con tratamiento médico sin cirugía.
- **Tratamiento quirúrgico:** indicado ante perforación libre, peritonitis, hemorragia masiva incoercible, megacolon tóxico sin mejoría en 24–48 h o duda diagnóstica de neoplasia en un ameboma obstructivo que no responde. El procedimiento de elección en colitis fulminante es la **colectomía subtotal con ileostomía terminal y fístula mucosa sigmoidea**. **Está estrictamente contraindicada cualquier anastomosis primaria** en colon amebiano agudo, porque la necrosis submucosa microscópica y la friabilidad en papel mojado condicionan tasas de dehiscencia anastomótica del **80 al 90%**.

### Perlas de examen
- **Recto respetado o lesiones salteadas = enfermedad de Crohn**, no CUCI; la CUCI siempre comienza en el recto y asciende de forma continua.
- **Criterios de Oxford (día 3 en CUCI aguda grave):** >8 evacuaciones/día o 3–8 con PCR >45 mg/L indican falla al esteroide IV y necesidad de rescate con infliximab o ciclosporina (evitar ciclosporina si falló a tiopurinas).
- **Cirugía de urgencia en CUCI, Crohn fulminante o colitis amebiana necrotizante:** siempre **colectomía subtotal con ileostomía terminal**; jamás proctocolectomía total ni anastomosis primaria en urgencia.
- En **Crohn colónico electivo con ≥2 segmentos afectados** y recto respetado, la operación de elección es **colectomía total con anastomosis ileorrectal**, no resección segmentaria.
- **Vigilancia de cáncer en EII:** iniciar a los **8 años** de síntomas; si hay **colangitis esclerosante primaria**, colonoscopia **anual desde el diagnóstico**.
- **Amebiasis colónica:** úlceras en «botón de camisa», friabilidad en «papel mojado»; siempre descartar amebiasis antes de dar esteroides por sospecha de EII; tratar con **metronidazol + amebicida luminal (paromomicina)** y proscribir anastomosis primaria si requiere resección urgente.
`),
    sheet('col-apendicitis', '03', 'Apendicitis aguda, escalas diagnósticas y manejo del plastrón apendicular', `
## Apendicitis aguda, escalas diagnósticas y manejo del plastrón apendicular

### Definición, anatomía y epidemiología
La apendicitis aguda es la inflamación aguda del apéndice vermiforme y constituye la **urgencia quirúrgica abdominal más frecuente** en cirugía general [Tratado AMCG 3ª ed., Cap. 146; Schwartz 11ª ed., Cap. 30; Sabiston 21ª ed., Cap. 51]. Afecta aproximadamente al **7–8% de la población** a lo largo de la vida (riesgo de 8.6% en varones y 6.7% en mujeres), con pico de incidencia entre los 10 y 30 años. Aunque es menos común en edades extremas, la tasa de perforación supera el 40–50% en niños menores de 5 años y adultos mayores de 65 años por presentación atípica y diagnóstico tardío.

El apéndice mide en promedio 6 a 10 cm, nace en la cara posteromedial del ciego a unos 2 cm por debajo de la válvula ileocecal en el punto exacto donde convergen las **tres tenias cólicas**, y recibe irrigación terminal de la **arteria apendicular** (rama de la arteria ileocólica, proveniente de la AMS), sin colaterales significativas, lo que favorece el infarto rápido cuando se trombosa. Su posición anatómica es variable: **retrocecal (~65%, la más frecuente)**, pélvica (~30%), subcecal, preileal y postileal, variación que explica los distintos signos irritativos en la exploración física.

### Fisiopatología y fases evolutivas
El evento desencadenante clásico es la **obstrucción de la luz apendicular**: en niños y adultos jóvenes predomina la **hiperplasia folicular linfoide submucosa** (~60%, secundaria a infecciones virales o bacterianas), mientras que en adultos predominan los **fecalitos o apendicolitos (~35%)**; causas menos frecuentes son cuerpos extraños/semillas (~4%), parásitos (*Enterobius vermicularis*, *Ascaris*) y **neoplasias (1–2%)**, cuya proporción asciende notablemente en mayores de 40 años.

La obstrucción progresa en cuatro fases anatomoclínicas continuas:
1. **Fase catarral o congestiva (0–12 h):** la secreción mucosa continua dentro de una luz cerrada eleva la presión intraluminal por arriba de 40–60 mmHg, supera la presión venosa y linfática y produce edema parietal e ingurgitación. Las fibras aferentes viscerales simpáticas (dermatoma T10) generan **dolor visceral sordo, mal localizado, periumbilical o epigástrico**.
2. **Fase flegmonosa o supurada (12–24 h):** la estasis favorece proliferación bacteriana polimicrobiana (*Escherichia coli*, *Bacteroides fragilis*, *Streptococcus*, *Pseudomonas*) con invasión transmural y exudado fibrinopurulento seroso. El contacto con el peritoneo parietal anterior (inervación somática) provoca la **migración clásica del dolor hacia la fosa ilíaca derecha (FID)** con hipersensibilidad localizada y defensa muscular.
3. **Fase gangrenosa o necrótica (24–36 h):** la presión intraluminal y la trombosis microvascular arterial comprometen el borde antimesentérico (zona peor irrigada), causando infartos elipsoides transmurales de color violáceo-negruzco.
4. **Fase perforada (>36–48 h):** necrosis completa con rotura parietal y salida de pus y materia fecal. Si el epiplón mayor y las asas vecinas confinan el proceso se forma un **plastrón o absceso apendicular**; si no logra contenerse, evoluciona a **peritonitis purulenta o fecal generalizada**.

### Cuadro clínico y signos exploratorios
La **cronología de Murphy** es orientadora aunque solo se cumple completa en ~50–60% de los casos: primero aparece dolor epigástrico o periumbilical, después anorexia, náusea o vómito (habitualmente escaso; si el vómito precede al dolor o es profuso, sospechar gastroenteritis u obstrucción), migración del dolor a FID en 12–24 horas y finalmente febrícula (37.5–38.3 °C; fiebre >38.5–39 °C orienta a perforación o absceso).

- **Punto de McBurney:** sensibilidad máxima en la unión del tercio externo con los dos tercios internos de la línea entre la espina ilíaca anterosuperior derecha y el ombligo.
- **Signo de Blumberg (rebote):** dolor agudo al descomprimir bruscamente la FID (irritación peritoneal parietal).
- **Signo de Rovsing:** dolor en FID al comprimir la fosa ilíaca izquierda por desplazamiento retrógrado de gas hacia el ciego.
- **Signo del psoas:** dolor en FID al extender pasivamente la cadera derecha en decúbito lateral izquierdo (sugiere apéndice **retrocecal**).
- **Signo del obturador:** dolor hipogástrico al rotar internamente el muslo derecho flexionado a 90° (sugiere apéndice **pélvico**).
- **Signo de Dunphy:** incremento del dolor en FID al toser.

En mujeres en edad fértil es **obligatoria la prueba de embarazo (β-hCG)** para descartar embarazo ectópico roto, además de considerar torsión ovárica, quiste hemorrágico y enfermedad pélvica inflamatoria. El examen general de orina puede mostrar leucocituria o eritrocituria leve por contigüidad ureteral o vesical sin que ello descarte apendicitis.

### Escalas diagnósticas (Alvarado vs AIR) e imagenología (WSES Jerusalem 2020)
Las guías **WSES Jerusalem 2020** recomiendan utilizar escalas clínicas validadas para estratificar el riesgo y evitar tomografías innecesarias en pacientes de bajo riesgo o retrasos quirúrgicos en los de alto riesgo, destacando la **superioridad en especificidad de la escala AIR (Appendicitis Inflammatory Response)** sobre la escala histórica de Alvarado, ya que incorpora la proteína C reactiva (PCR) y gradúa la intensidad de la defensa muscular [Sabiston 21ª ed., Cap. 51; WSES Jerusalem 2020].

| Parámetro | Escala de Alvarado (0–10 pts) | Escala AIR (0–12 pts) |
| :--- | :--- | :--- |
| **Síntomas** | Migración del dolor (1), anorexia (1), náusea/vómito (1) | Vómito (1), dolor en FID (1) |
| **Exploración física** | Dolor en FID (2), rebote (1), temperatura ≥37.3 °C (1) | Defensa/rebote: leve (1), moderada (2), severa (3); temperatura >38.5 °C (1) |
| **Leucocitos** | >10,000/mm³ (2) | 10,000–14,900/mm³ (1); ≥15,000/mm³ (2) |
| **Neutrófilos** | >75% (1) | 70–84% (1); ≥85% (2) |
| **PCR** | No incluida | 10–49 mg/L (1); ≥50 mg/L (2) |
| **Bajo riesgo** | 0–4 puntos (baja probabilidad) | **0–4 puntos** (<5% probabilidad; observación ambulatoria segura) |
| **Riesgo intermedio** | 5–6 puntos (imagen / observación) | **5–8 puntos** (estudio de imagen mandatorio) |
| **Alto riesgo** | 7–10 puntos (alta probabilidad) | **9–12 puntos** (>95% probabilidad; cirugía directa en jóvenes <40 años) |

#### Selección del estudio de imagen
- **Ultrasonido abdominal con compresión graduada:** primera línea en **niños, mujeres jóvenes en edad fértil y embarazadas** (sin radiación ionizante). Criterios diagnósticos: estructura tubular ciega, **no compresible, diámetro >6 mm**, signo de la diana en corte transversal, hiperemia Doppler, apendicolito con sombra acústica y líquido libre periapendicular. Su principal límite es la dependencia del operador y la mala visualización en obesidad o apéndice retrocecal.
- **Tomografía computarizada (TC) de abdomen y pelvis con contraste IV:** estudio de elección en **adultos varones, ancianos y casos de riesgo intermedio con US no concluyente** (sensibilidad y especificidad >95%). Hallazgos clave: diámetro apendicular **>6 mm**, engrosamiento parietal **>2 mm** con realce en doble halo, estriación de la grasa periapendicular, apendicolito, defecto parietal, gas extraluminal o absceso. La TC con baja dosis de radiación mantiene precisión equivalente (WSES 2020).
- **Resonancia magnética (RM) sin gadolinio:** estudio de segunda línea de elección en **embarazadas** cuando el ultrasonido no visualiza el apéndice o resulta equívoco (sensibilidad >90%, sin radiación).

### Tratamiento: apendicectomía, manejo no operatorio y antibióticos
- **Apendicectomía laparoscópica temprana:** sigue siendo el **estándar de oro** en apendicitis aguda no complicada y complicada en la mayoría de pacientes operables. Frente a la técnica abierta (McBurney o Rocky-Davis), la laparoscopia disminuye dolor posoperatorio, infección de herida quirúrgica, estancia hospitalaria y facilita la exploración en mujeres y obesos, con riesgo comparable de absceso intraabdominal cuando se realiza aspiración cuidadosa (sin lavado peritoneal excesivo indiscriminado). Debe ejecutarse **dentro de las primeras 24 horas** desde el ingreso; retrasos mayores de 24–36 horas elevan la tasa de perforación y complicaciones (WSES 2020).
- **Detalles técnicos clave:** tres puertos, identificación de la base apendicular siguiendo la convergencia de las tenias cólicas, control de la arteria apendicular en el mesoapéndice, ligadura segura del muñón (endoloop, clips poliméricos o engrapadora lineal si la base cecal está necrótica o friable; si hay necrosis de la base cecal, resección en cuña cecal o ileocecectomía), extracción protegida en bolsa y **envío obligatorio de toda pieza a patología**.
- **Manejo no operatorio (NOM) con antibióticos en apendicitis no complicada:** ensayos aleatorizados mayores (**APPAC**, JAMA 2015/2018; **CODA**, NEJM 2020) demostraron que los antibióticos son factibles en pacientes adultos seleccionados con apendicitis no complicada confirmada por TC **sin apendicolito**, pero presentan una **tasa de recurrencia y apendicectomía ulterior de 25–40% al año y hasta ~40–49% a 5 años**, siendo significativamente mayor el fracaso cuando existe **apendicolito** (41% de apendicectomía a 90 días en CODA). Por ello, la cirugía sigue siendo primera línea en pacientes operables y el NOM se ofrece mediante decisión compartida bien informada.
- **Duración de antibióticos:**
  - *Apendicitis no complicada:* **dosis única profiláctica preoperatoria** (cobertura para enterobacterias y anaerobios: cefoxitina, o ceftriaxona + metronidazol); **NO continuar antibióticos posoperatorios**.
  - *Apendicitis complicada (gangrenosa, perforada, absceso):* tras un control quirúrgico adecuado del foco, continuar antibiótico **3 a 5 días** (ensayo **STOP-IT**, NEJM 2015: 4 días fijos tras control adecuado es equivalente a cursos prolongados).

### Manejo del plastrón y absceso apendicular
Se presenta en **2 a 7% de los pacientes**, casi siempre con **>5 a 7 días de evolución**, cuando el epiplón y las asas intestinales bloquean la perforación formando una masa inflamatoria sólida (flemón/plastrón) o una colección purulenta delimitada (absceso). Operar de urgencia en este escenario de tejidos edematosos y friables multiplica las lesiones intestinales y obliga a resecciones ileocecales o hemicolectomías derechas innecesarias [Tratado AMCG 3ª ed., Cap. 146; Sabiston 21ª ed., Cap. 51; WSES 2020].

1. **Manejo conservador inicial:** hospitalización, hidratación IV, reposo digestivo y antibióticos de amplio espectro (ceftriaxona + metronidazol o piperacilina/tazobactam durante 7–10 días).
2. **Drenaje percutáneo guiado por TC o US:** indicado ante un **absceso accesible ≥3 a 4 cm** (catéter *pig-tail*), logrando resolución en >80–90% sin cirugía urgente. La cirugía urgente se reserva únicamente para fracaso del tratamiento médico/drenaje, peritonitis libre generalizada u obstrucción intestinal persistente.
3. **Exigencia oncológica obligatoria (>40 años):** **todo paciente mayor de 40 años** tratado conservadoramente por un plastrón o absceso apendicular debe someterse a una **colonoscopia completa (y TC si es necesario) a las 6–8 semanas** del episodio agudo. Entre el **3% y el 7%** de estos cuadros en mayores de 40 años (e incluso hasta 10–15% en algunas series modernas) ocultan un **adenocarcinoma de ciego o una neoplasia mucinosa apendicular** cuya primera manifestación fue obstruir la luz del apéndice.
4. **Apendicectomía de intervalo (8–12 semanas):** la recurrencia global tras manejo conservador es baja (5–15%), por lo que hoy se indica de forma **selectiva** en pacientes con síntomas persistentes, apendicolito retenido o duda neoplásica, no de forma automática en jóvenes asintomáticos (WSES 2020).

### Escenarios especiales: embarazo y tumores apendiculares incidentales
#### Apendicitis en el embarazo
Es la **urgencia quirúrgica no obstétrica más frecuente durante la gestación** (1 en 1,000–1,500 embarazos). El útero grávido desplaza el ciego y el apéndice en sentido cefálico y lateral conforme avanza la gestación, aunque el dolor suele persistir en el cuadrante inferior o flanco derecho; la leucocitosis fisiológica del embarazo resta especificidad al laboratorio. Algoritmo de imagen: **ultrasonido primero → RM sin gadolinio si no es concluyente**. **Nunca retrasar la cirugía**: la apendicitis no perforada conlleva pérdida fetal de ~1.5–5%, pero la **perforación eleva la pérdida fetal a 20–35%**. La **apendicectomía laparoscópica es segura en cualquier trimestre** (SAGES/WSES), ajustando el acceso inicial (técnica abierta de Hasson o punto de Palmer), manteniendo neumoperitoneo a 10–12 mmHg y decúbito lateral izquierdo parcial para descomprimir la vena cava inferior.

#### Neoplasias apendiculares incidentales (0.5–1% de todas las piezas)
| Histología | Característica clave | Conducta quirúrgica estándar |
| :--- | :--- | :--- |
| **Tumor neuroendocrino (carcinoide)** | Neoplasia apendicular más frecuente (~50–60%); suele ubicarse en la punta | **<1 cm** sin invasión mesoapendicular: apendicectomía sola. **>2 cm**, invasión mesoapendicular >3 mm, margen positivo, compromiso de base o Ki-67 alto: **hemicolectomía derecha oncológica**. En **1–2 cm**, individualizar según factores de riesgo |
| **Neoplasia mucinosa de bajo grado (LAMN)** | Epitelio mucinoso displásico; su rotura siembra mucina en peritoneo (**pseudomixoma peritoneal**) | Confinada al apéndice con margen proximal negativo: apendicectomía (evitar rotura transoperatoria). Con mucina extraapendicular/pseudomixoma: referencia a centro especializado para cirugía citorreductora + HIPEC |
| **Adenocarcinoma apendicular** | Tipo colónico o mucinoso; mayor riesgo ganglionar | **Hemicolectomía derecha oncológica** con linfadenectomía formal (≥12 ganglios) y estadificación completa |
| **Adenocarcinoma de células caliciformes** | Comportamiento agresivo (ex "carcinoide de células caliciformes") | **Hemicolectomía derecha oncológica** independientemente del tamaño |

### Perlas de examen
- La causa más común de obstrucción apendicular en niños es la **hiperplasia linfoide (60%)** y en adultos el **apendicolito/fecalito (35%)**.
- **Escala AIR (0–12 pts)** supera en especificidad a Alvarado por incluir **PCR**: 0–4 bajo riesgo (observar), 5–8 riesgo intermedio (imagen), 9–12 alto riesgo (cirugía directa).
- **Antibióticos:** en apendicitis no complicada basta **profilaxis preoperatoria única**; en complicada tras control del foco, **3 a 5 días** (STOP-IT).
- El **apendicolito** predice alto fracaso del manejo conservador con antibióticos (ensayo CODA).
- **Plastrón apendicular:** antibióticos + drenaje percutáneo si absceso ≥3–4 cm; **colonoscopia obligatoria a las 6–8 semanas en todo mayor de 40 años** para descartar cáncer de ciego o neoplasia apendicular.
- **Embarazo:** US → RM sin gadolinio; **no diferir la cirugía** porque la perforación dispara la pérdida fetal al 20–35%; laparoscopia segura en cualquier trimestre.
- **Tumor neuroendocrino apendicular >2 cm**, con invasión mesoapendicular >3 mm o en la base → **hemicolectomía derecha oncológica**.
`),
    sheet('col-diverticular', '04', 'Enfermedad diverticular del colon y diverticulitis aguda', `
## Enfermedad diverticular del colon y diverticulitis aguda

### Definición, epidemiología y fisiopatología
Los divertículos colónicos son **pseudodivertículos (divertículos falsos) adquiridos por pulsión**, formados por la herniación de la mucosa y la submucosa a través de los puntos débiles de la capa muscular circular por donde penetran los *vasa recta* (arterias perforantes) en los bordes laterales de las tenias mesocólica y omental [Tratado AMCG 3ª ed., Cap. 150; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52]. A diferencia de los divertículos verdaderos (como el de Meckel o los raros divertículos congénitos solitarios del ciego en población asiática), carecen de capa muscular propia.

La **diverticulosis** aumenta drásticamente con la edad: es rara antes de los 40 años (<10%), afecta a ~30% a los 60 años y supera el 60–70% después de los 80 años en poblaciones occidentales. En Occidente y México compromete el **colon sigmoides en >90–95%** de los casos porque es el segmento de menor diámetro y donde se generan las presiones intraluminales segmentarias más altas (dietas bajas en fibra, estreñimiento crónico, obesidad, tabaquismo, sedentarismo, uso de AINE y esteroides). Solo entre el **4% y el 15%** de los portadores de diverticulosis desarrollará diverticulitis aguda a lo largo de su vida, y alrededor de 5–15% presentará hemorragia diverticular. Contrario al mito histórico, **el consumo de semillas, nueces o palomitas NO desencadena diverticulitis** ni hemorragia diverticular (estudio prospectivo de Strate, JAMA 2008).

La **diverticulitis aguda** surge cuando un fecalito o restos fecales obstruyen el cuello diverticular, causando estasis, abrasión mucosa, sobrecrecimiento bacteriano, isquemia local y **microperforación o macroperforación**. Si el mesocolon y la grasa pericólica contienen el proceso, se produce flemón o absceso; si la rotura es libre hacia cavidad peritoneal, ocurre peritonitis purulenta o fecal. En cambio, la **hemorragia diverticular** obedece a la erosión mecánica asimétrica de un vaso recto en la cúpula o cuello del divertículo **sin inflamación asociada**, lo que explica que sangre de forma abundante e indolora y que rara vez coexista con diverticulitis aguda; además, aunque los divertículos predominan en el sigmoides, hasta el **50–60% de las hemorragias diverticulares graves provienen del colon derecho**, donde los cuellos diverticulares son más anchos y la pared más delgada.

### Cuadro clínico y diagnóstico
- **Diverticulitis no complicada:** dolor persistente en **fosa ilíaca izquierda (FII)** ("apendicitis del lado izquierdo"), febrícula, anorexia, náusea, alteración del hábito intestinal (estreñimiento o diarrea) y dolor a la palpación o empastamiento en FII. En pacientes con sigmoides redundante o diverticulitis derecha, el dolor puede ubicarse en hipogastrio o fosa ilíaca derecha.
- **Diverticulitis complicada:** fiebre persistente y masa palpable (absceso); abdomen en tabla, defensa difusa e inestabilidad (perforación libre); **neumaturia, fecaluria e infecciones urinarias polimicrobianas recurrentes** (**fístula colovesical**, la fístula diverticular más frecuente, ~65%, predominante en varones y mujeres histerectomizadas); salida de gas o heces por vagina (**fístula colovaginal**, ~25%, casi exclusiva de mujeres histerectomizadas); distensión, estreñimiento progresivo y vómito (**estenosis inflamatoria u obstructiva**).
- **Estudio diagnóstico de elección:** **tomografía computarizada (TC) de abdomen y pelvis con contraste intravenoso** (sensibilidad 94–98%, especificidad 99%). Confirma el diagnóstico (engrosamiento parietal >4 mm, divertículos, estriación de la grasa pericólica), descarta diagnósticos diferenciales (cáncer perforado, colitis isquémica, apendagitis epiploica, patología ginecológica o urológica) y **estatifica la gravedad** (absceso, aire libre extraluminal, líquido libre), guiando directamente la conducta terapéutica.
- **Contraindicación en fase aguda:** la **colonoscopia y el enema baritado están contraindicados durante el episodio agudo** por el riesgo de convertir una microperforación contenida en perforación libre. Sin embargo, se recomienda **colonoscopia diferida a las 6–8 semanas** tras diverticulitis complicada (y en no complicada si no hay colonoscopia reciente de calidad o existen datos sospechosos) para **descartar adenocarcinoma de colon subyacente** (detectado en 7–11% de las diverticulitis complicadas vs ~1–2% en no complicadas).

### Clasificación: Hinchey modificada (Wasvary) y WSES 2020
| Estadio Hinchey modificado (Wasvary 1999) | Correlato WSES 2020 | Hallazgo tomográfico / operatorio | Conducta terapéutica primaria |
| :--- | :--- | :--- | :--- |
| **Estadio 0** | No complicada (Estadio 0) | Diverticulitis leve clínica; engrosamiento parietal sin flemón | Manejo ambulatorio sintomático; sin antibiótico en inmunocompetente |
| **Estadio Ia** | No complicada (Estadio 0) | Inflamación pericólica / flemón confinado sin absceso | **Sin antibióticos de rutina** en paciente inmunocompetente estable (AVOD/DIABOLO) |
| **Estadio Ib** | Complicada (Estadio 1b) | Absceso pericólico o mesocolónico confinado | Antibiótico IV; **<4–5 cm:** antibiótico solo; **≥4–5 cm:** drenaje percutáneo + antibiótico |
| **Estadio II** | Complicada (Estadio 2a) | Absceso pélvico, intraabdominal a distancia o retroperitoneal | Antibiótico IV + **drenaje percutáneo guiado por TC/US** si ≥4–5 cm (convierte urgencia en cirugía fría) |
| **Estadio III** | Complicada (Estadio 3–4) | Peritonitis purulenta generalizada (rotura de absceso sin comunicación fecal libre) | Cirugía urgente: **resección + anastomosis primaria con ileostomía en asa** (en paciente estable) o **Hartmann** (en inestable). Lavado laparoscópico solo en casos muy seleccionados |
| **Estadio IV** | Complicada (Estadio 4) | Peritonitis fecal generalizada (comunicación libre con luz colónica) | Cirugía urgente inmediata: **procedimiento de Hartmann** (estándar en choque/acidosis/fecal) |

*Aclaración doctrinal clave:* en la clasificación de Hinchey modificada, la diferencia entre **Ib y II es anatómica (localización pericólica vs pélvica/a distancia)**, no por tamaño; el punto de corte de **4 a 5 cm** (guía WSES 2020) es el umbral que decide si el absceso se trata solo con antibióticos IV o si requiere **drenaje percutáneo**.

### Manejo de la diverticulitis aguda: evidencia moderna y discrepancias
#### 1. Diverticulitis no complicada (Hinchey 0 / Ia): omisión selectiva de antibióticos
Los ensayos aleatorizados multicéntricos **AVOD** (BJS 2012) y **DIABOLO** (Ann Surg 2017) demostraron con evidencia nivel 1A que, en **pacientes inmunocompetentes, hemodinámicamente estables y sin SIRS grave**, la diverticulitis aguda no complicada confirmada por TC tratada de forma sintomática **sin antibióticos** tiene idéntico tiempo de recuperación, tasa de complicaciones y recurrencia que el tratamiento con antibióticos [Sabiston 21ª ed., Cap. 52; ASCRS 2020; WSES 2020]. Los antibióticos SÍ están indicados ante **inmunosupresión, embarazo, comorbilidades graves (ASA III–IV), diabetes descontrolada, fiebre alta/sepsis, leucocitosis marcada, PCR muy elevada (>140 mg/L), intolerancia oral o presencia de líquido libre/aire pericólico**. Esta representa una discrepancia doctrinal clásica frente al Tratado AMCG 3ª ed., que aún prescribía antibióticos de forma sistemática a todo paciente con diverticulitis.

#### 2. Diverticulitis complicada con absceso (Hinchey Ib / II)
Hospitalización, ayuno o dieta líquida según tolerancia, cristaloides IV y antibióticos de amplio espectro contra gramnegativos y anaerobios (ceftriaxona + metronidazol, piperacilina/tazobactam o ertapenem). Si el absceso mide **<4–5 cm**, suele resolver solo con antibiótico IV y vigilancia clínica estrecha; si mide **≥4–5 cm** y es accesible, el **drenaje percutáneo guiado por TC o ultrasonido** (éxito ~80%) evita una laparotomía urgente y permite enfriar el proceso. Si no mejora en 48–72 horas o no es drenable y se deteriora, está indicada la cirugía.

#### 3. Perforación libre con peritonitis (Hinchey III y IV): Hartmann vs anastomosis primaria vs lavado
- **Procedimiento de Hartmann** (sigmoidectomía, cierre del muñón rectal y colostomía terminal en FII): sigue siendo la operación más segura y el estándar de oro ante **inestabilidad hemodinámica, choque séptico dependiente de vasopresores, acidosis, coagulopatía, desnutrición severa, inmunosupresión o peritonitis fecal masiva (Hinchey IV)**. Su gran desventaja histórica es que **40 a 50% de los pacientes jamás logra la reconexión intestinal** y permanece con colostomía definitiva.
- **Resección con anastomosis primaria e ileostomía de protección en asa:** ensayos aleatorizados de alto impacto (**LADIES-DIVA**, Lancet Gastroenterol Hepatol 2019; **DIVERTI**, Ann Surg 2017) demostraron que en pacientes con **Hinchey III (e incluso Hinchey IV muy seleccionados) hemodinámicamente estables** y operados por cirujanos con experiencia, la resección con anastomosis primaria protegida ofrece mortalidad y morbilidad equivalentes a Hartmann, pero con una **tasa muy superior de estar libre de estoma a 12 meses** (~90–95% vs ~60–70%) y una reconexión mucho más sencilla (cierre de ileostomía en asa) [WSES 2020; ASCRS 2020].
- **Lavado laparoscópico peritoneal (sin resección):** evaluado en los ensayos **DILALA**, **SCANDIV** y **LADIES-LOLA** únicamente para Hinchey III. Aunque reduce estomas inicialmente, conlleva mayor riesgo de abscesos residuales, reintervenciones por perforación no sellada y cáncer inadvertido; por ello la guía **WSES 2020 lo limita como recomendación débil únicamente a casos muy seleccionados** y NO es tratamiento de primera línea, quedando **absolutamente contraindicado en Hinchey IV**.

### Cirugía electiva: cuándo indicar sigmoidectomía y principios técnicos
La antigua regla rígida de operar tras «dos episodios de diverticulitis no complicada» o «un episodio en menores de 50 años» **quedó obsoleta** (ASCRS 2020; Sabiston 21ª ed.). Hoy la indicación electiva se **individualiza**:
- **Indicaciones claras de sigmoidectomía electiva:** fístula (colovesical, colovaginal, colocutánea), estenosis obstructiva sintomática, imposibilidad de excluir cáncer, o diverticulitis complicada con absceso pélvico/perforación contenida tratada conservadoramente (valorando riesgo quirúrgico).
- **Indicaciones individualizadas:** episodios recurrentes frecuentes de diverticulitis no complicada o síntomas crónicos persistentes que deterioran seriamente la calidad de vida, o pacientes con inmunosupresión crónica (trasplantados, esteroides crónicos, quimioterapia), en quienes un nuevo brote tiene mayor riesgo de perforación letal.
- **Principios técnicos críticos de la sigmoidectomía (preferentemente laparoscópica):**
  1. **Límite distal inviolable:** resecar **todo el sigmoides hasta la unión rectosigmoidea verdadera** (donde desaparecen las tenias y el colon se continúa con el recto superior sano). Dejar sigmoides distal residual (anastomosis colosigmoidea) multiplica por 4 el riesgo de recurrencia diverticular (~12–15% vs <2–3%).
  2. **Límite proximal:** resecar hasta colon descendente blando y sin inflamación; **no es necesario resecar todos los divertículos proximales del colon** si la pared está sana.
  3. **Seguridad anatómica:** identificar y proteger sistemáticamente el **uréter izquierdo** en todo su trayecto pélvico y preservar la arteria mesentérica inferior si la indicación es estrictamente benigna (disección cercana a la pared o preservación de la rectal superior) para cuidar la vascularización anastomótica y los nervios hipogástricos.

### Hemorragia diverticular: diagnóstico y manejo escalonado
Es la **causa más frecuente de hemorragia digestiva baja grave en adultos** (30–50% de los casos), seguida de angiodisplasias, colitis isquémica y neoplasias. Se presenta como **hematoquecia rojo brillante o vinoso, indolora y súbita**; afortunadamente **cede de manera espontánea en 75–80% de los casos**, aunque recurre en ~20–25%.
1. **Reanimación y descarte de origen alto:** accesos venosos gruesos, transfusión restrictiva (umbral Hb 7 g/dL, o 8 g/dL en cardiopatía isquémica), reversión de anticoagulantes y descartar hemorragia digestiva alta masiva (hasta 10–15% de las hematoquecias con inestabilidad provienen de arriba del Treitz).
2. **Estable hemodinámicamente:** preparación colónica rápida y **colonoscopia temprana** (idealmente en 24 h) para localizar el divertículo con estigma de sangrado reciente (sangrado activo, vaso visible, coágulo adherido) y aplicar hemostasia endoscópica (clips, ligadura con banda, adrenalina combinada).
3. **Sangrado activo continuo o inestabilidad:** **angiotomografía (angio-TC)** urgente (detecta sangrados desde 0.3–0.5 mL/min y localiza el vaso culpable), seguida inmediatamente de **angiografía con embolización supraselectiva** (éxito técnico >85–90%, riesgo de isquemia colónica <5–10% con microcatéteres).
4. **Cirugía de rescate (último recurso):** indicada ante choque refractario, requerimiento transfusional masivo (>6 unidades en 24 h) o fracaso endoscópico/angiográfico. Si el sitio sangrante está localizado, **colectomía segmentaria dirigida**; si el sangrado es masivo sin localización posible (pese a colonoscopia/angio-TC), **colectomía abdominal subtotal con anastomosis ileorrectal o ileostomía terminal** (jamás realizar hemicolectomía «a ciegas», porque la tasa de resangrado supera el 40–75%).

### Perlas de examen
- Los divertículos colónicos son **pseudodivertículos de pulsión** (mucosa + submucosa) que salen por el punto de entrada de los **vasos rectos**; >90–95% en sigmoides, pero >50% de las **hemorragias diverticulares** provienen del **colon derecho**.
- **AVOD y DIABOLO (evidencia 1A):** en Hinchey Ia en paciente **inmunocompetente y estable**, se omiten los antibióticos sistémicos de rutina.
- **Umbral de 4–5 cm (WSES 2020):** absceso diverticular <4–5 cm → antibióticos solos; ≥4–5 cm → **drenaje percutáneo guiado por TC/US** + antibióticos.
- **Hinchey III estable:** resección con **anastomosis primaria + ileostomía en asa** (LADIES/DIVERTI) es segura y evita que 40–50% quede con colostomía permanente como en Hartmann. **Hinchey IV o choque:** **Hartmann**.
- **Colonoscopia contraindicada en fase aguda**; obligatoria a las **6–8 semanas** tras diverticulitis complicada para descartar cáncer.
- En la **sigmoidectomía electiva**, la anastomosis debe ser **colorrectal** (desaparecen las tenias); dejar sigmoides distal provoca recurrencia.
- **Fístula colovesical** (neumaturia + fecaluria) es la fístula diverticular más frecuente; la **colectomía segmentaria a ciegas** en hemorragia no localizada está proscrita (hacer colectomía subtotal).
`),

    sheet('col-megacolon-volvulo', '05', 'Megacolon congénito (Hirschsprung), vólvulos colónicos y síndrome de Ogilvie', `
## Megacolon congénito (Hirschsprung), vólvulos colónicos y síndrome de Ogilvie

### Panorama de las dilataciones colónicas quirúrgicas
Tres grandes entidades convergen bajo el espectro clínico de la dilatación colónica masiva no neoplásica y constituyen preguntas predilectas en los exámenes de residencia: la **enfermedad de Hirschsprung (megacolon aganglionar congénito)**, los **vólvulos colónicos** (obstrucción mecánica en asa cerrada por torsión axial del sigmoides o del ciego) y el **síndrome de Ogilvie (pseudoobstrucción colónica aguda)**. Distinguir si la dilatación es **congénita vs adquirida**, **mecánica vs funcional** y **viable vs isquémica** determina si el tratamiento es endoscópico, farmacológico o quirúrgico urgente [Tratado AMCG 3ª ed., Cap. 149; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52].

### Megacolon congénito: enfermedad de Hirschsprung
La enfermedad de Hirschsprung es un trastorno congénito de la motilidad caracterizado por la **ausencia de células ganglionares entéricas** en los plexos mientérico (Auerbach) y submucoso (Meissner) del intestino distal, lo que produce una obstrucción funcional crónica [ERNICA, Kyrklund 2020; Montalva 2023]. Su incidencia es de **1 en 5,000 nacidos vivos**, con predominio masculino **4:1** en la forma rectosigmoidea clásica. En **80 a 85%** de los casos el segmento aganglionar se limita al rectosigmoides; la afección de segmento largo o pancolónica ocurre en 15 a 20%.

#### Embriología, fisiopatología y genética
Se origina por una falla en la migración craneocaudal de las **células de la cresta neural** hacia el colon distal durante las semanas 5 a 12 de gestación [Schwartz 11ª ed., Cap. 29]. El segmento aganglionar carece de neuronas inhibitorias (óxido nítrico) y presenta hipertrofia de fibras nerviosas colinérgicas extrínsecas (elevando la actividad de acetilcolinesterasa), por lo que permanece **tónicamente contraído e incapaz de relajarse**; secundariamente, el colon proximal normoganglionar se dilata de forma masiva por obstrucción funcional. Concepto clave: **el segmento dilatado es el colon sano; el segmento estrecho es el enfermo**.
- **Genética:** el gen principal en la forma no sindrómica es **RET** (mutaciones de pérdida de función en 15–35% de los esporádicos y hasta 50% de los familiares), seguido de **EDNRB** (~5%).
- **Síndromes asociados:** síndrome de Down (el más común, ~10% de todos los Hirschsprung), síndrome de Shah-Waardenburg, hipoventilación central congénita (Ondine) y síndrome de Mowat-Wilson.

#### Presentación clínica y diagnóstico diferencial
- **Neonatal (~90%):** **retraso en la expulsión de meconio >24–48 horas** (>60%), distensión abdominal progresiva (>90%) y vómito que suele volverse biliar (>85%). Al realizar el tacto rectal o pasar una sonda rectal aparece el signo clásico de **salida explosiva y fétida de gas y heces** (*squirt sign*), con descompresión transitoria. Hasta 10–15% debuta ya con enterocolitis grave.
- **Tardía o en el adulto (inusual después de los 3 años):** estreñimiento crónico intratable, falla de medro y megacolon funcional en segmentos ultracortos. En el adulto con megacolon crónico en América Latina y México, el diagnóstico diferencial obligatorio es la **enfermedad de Chagas** (*Trypanosoma cruzi*), que destruye de manera adquirida los plexos ganglionares produciendo megacolon y megaesófago [Schwartz 11ª ed., Cap. 29].

| Prueba diagnóstica | Hallazgo característico | Alcance y limitaciones (ERNICA 2020) |
| :--- | :--- | :--- |
| **Colon por enema (sin preparación previa)** | **Zona de transición** (embudo entre recto estrecho aganglionar y colon proximal dilatado), índice rectosigmoideo <1 y retención de contraste en placa tardía a 24 h | Sensibilidad ~91% para zona de transición, pero menos específica en neonatos; **contraindicado en enterocolitis aguda** |
| **Manometría anorrectal** | **Ausencia del reflejo inhibidor rectoanal (RAIR)** al distender el balón rectal | Útil en niños mayores y adultos (segmento ultracorto); inferior a la biopsia en neonatos; un RAIR ausente exige biopsia |
| **Biopsia rectal por succión** | **Ausencia de células ganglionares**, **calretinina negativa** y aumento de **acetilcolinesterasa** en lámina propia | **Estándar de oro definitivo**. Tomar ≥2–3 muestras de pared posterior/lateral **≥2 cm por arriba de la línea dentada** (evitar zona fisiológicamente hipoganglionar), con ≥3 mm y ≥1/3 de submucosa |

En la tinción con hematoxilina-eosina (H&E), identificar **una sola célula ganglionar excluye Hirschsprung**. En prematuros y neonatos las células ganglionares son inmaduras y difíciles de ver en H&E, por lo que la inmunohistoquímica de **calretinina (negativa en Hirschsprung)** es el complemento más confiable.

#### Tratamiento preoperatorio, descenso quirúrgico y enterocolitis (HAEC)
1. **Descompresión inicial:** iniciar **irrigaciones rectales con solución salina tibia** 1 a 3 veces al día mientras se confirma el diagnóstico; descomprimen eficazmente al ~75% de los pacientes. Se confecciona un **estoma derivativo** si las irrigaciones fallan (sugiere segmento largo), hay enterocolitis refractaria o perforación; el sitio empírico más seguro en urgencia es el **íleon distal**, siempre con biopsia transoperatoria por congelación para confirmar ganglios en el estoma.
2. **Cirugía definitiva (descenso o *pull-through*):** resecar el segmento aganglionar y anastomosar colon ganglionar al conducto anal preservando el esfínter, habitualmente a los **2–3 meses del diagnóstico** con el lactante estable y creciendo. Las cuatro técnicas —**Swenson** (proctectomía total con anastomosis coloanal sin manguito), **Soave** (disección submucosa endorrectal dejando manguito muscular corto <2–3 cm; riesgo de manguito enrollado/obstruido), **Duhamel** (descenso retrorrectal dejando pared anterior aganglionar; riesgo de **espolón rectal**) y **descenso endorrectal transanal puro o asistido por laparoscopia**— muestran resultados funcionales equivalentes a largo plazo. Reglas inviolables: comenzar la disección **0.5–2 cm por arriba de la línea dentada** (preservando sensibilidad anal) y transecar el colon **al menos 5–10 cm por arriba de la primera biopsia normal** (con biopsia circular «dona») para evitar dejar una zona de transición hipoganglionar.
3. **Enterocolitis asociada a Hirschsprung (HAEC):** complicación más grave (~30% de los operados, mayor riesgo en síndrome de Down y segmento largo). Cursa con diarrea explosiva fétida o sanguinolenta, fiebre y distensión (escala de Pastor >4 puntos). Tratamiento: hospitalización, líquidos IV, **antibióticos IV de amplio espectro** (metronidazol + cobertura gramnegativa) y **lavados rectales salinos** 2–3 veces al día; **nunca hacer enema contrastado en fase aguda**. Ante HAEC recurrente descartar estenosis u obstrucción mecánica y considerar **toxina botulínica intraesfinteriana** (eficacia 62–89%).

### Vólvulos colónicos: sigmoides vs ciego
El vólvulo es la torsión axial de un asa colónica redundante sobre su mesenterio de base estrecha, configurando una **obstrucción mecánica en asa cerrada** con compromiso venoso temprano, edema, isquemia arterial y necrosis transmural rápida. Los sitios más frecuentes son el **colon sigmoides (75–80%)**, el **ciego (15–20%)** y, raramente, el colon transverso o ángulo esplénico (<5%) [Tratado AMCG 3ª ed., Cap. 149; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52].

| Característica | Vólvulo de sigmoides | Vólvulo de ciego |
| :--- | :--- | :--- |
| **Frecuencia y perfil típico** | **75–80%**; adultos mayores (>65 años), institucionalizados, estreñimiento crónico, neuropatía, megacolon/Chagas | **15–20%**; pacientes más jóvenes (40–60 años), mujeres, antecedente quirúrgico, embarazo; falla congénita de fijación cecal (ciego móvil) |
| **Radiografía simple de abdomen** | Asa gigante sin haustras en **«grano de café»** o «U invertida» con vértice hacia el **hipocondrio derecho** y recto vacío | Asa distendida en forma de **«riñón» o «coma»** con ápex dirigido hacia el **hipocondrio izquierdo** y niveles de intestino delgado |
| **Tomografía computarizada** | **Signo del remolino mesentérico (*whirl sign*)**, pico de ave en el punto de torsión, signos de isquemia/neumatosis | Signo del remolino en mesenterio ileocólico, ciego ectópico en cuadrante superior izquierdo |
| **Descompresión endoscópica** | **Primera línea** si el paciente está estable y sin peritonitis ni necrosis (éxito 75–90%) + sonda rectal 24–48 h | **ESTRICTAMENTE CONTRAINDICADA** (éxito <20–30%, riesgo de perforación cecal iatrógena 10–15%) |
| **Tratamiento definitivo** | **Sigmoidectomía electiva con anastomosis primaria durante la MISMA hospitalización (48–72 h)** (recidiva >50–60% sin resección) | **Cirugía urgente directa: hemicolectomía derecha con anastomosis ileocólica primaria** (o ileostomía si inestable/séptico) |
| **Si hay necrosis o peritonitis** | Laparotomía urgente + **procedimiento de Hartmann** | Laparotomía urgente + **hemicolectomía derecha** (anastomosis o ileostomía terminal según estabilidad) |

*Matiz doctrinal auditado en vólvulo cecal:* aunque textos antiguos mencionaban la cecopexia o la descompresión endoscópica, la evidencia moderna (Sabiston 21ª ed., ASCRS 2016/2021) **proscribe el intento endoscópico** y favorece la **hemicolectomía derecha** sobre la cecopexia simple (que tiene recidivas de 15–30%) como único procedimiento curativo definitivo. Existe una variante llamada **báscula cecal** (plegamiento anterosuperior del ciego sin torsión axial verdadera) que también se resuelve quirúrgicamente.

### Síndrome de Ogilvie (pseudoobstrucción colónica aguda)
Descrito por Sir Heneage Ogilvie en 1948, consiste en la **dilatación aguda y masiva del colon (predominantemente ciego y colon derecho) sin obstrucción mecánica alguna** [Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52].
- **Fisiopatología y factores predisponentes:** desequilibrio autonómico agudo con **supresión de la actividad parasimpática sacra (S2–S4)** e hipertonía simpática inhibitoria, dejando el colon distal funcionalmente atónico. Aparece en pacientes hospitalizados mayores o críticos tras **cirugía ortopédica** (artroplastia de cadera/rodilla, fractura vertebral), cirugía cardiotorácica o cesárea, trauma pélvico, sepsis grave, infarto, desequilibrios electrolíticos (hipokalemia, hipomagnesemia) y uso de **opioides, anticolinérgicos o bloqueadores de canales de calcio**.
- **Diagnóstico:** cuadro de distensión abdominal progresiva indolora o con dolor moderado; la aparición de dolor focal en FID, fiebre, leucocitosis o peritonismo sugiere isquemia o perforación cecal. Es obligatorio **descartar obstrucción mecánica** antes de confirmar Ogilvie, idealmente mediante **TC de abdomen y pelvis con contraste** (o enema con contraste hidrosoluble), midiendo con exactitud el **diámetro cecal**. Por la **Ley de Laplace**, el riesgo de isquemia y perforación aumenta bruscamente cuando el **ciego supera los 10 a 12 cm** o la dilatación persiste >48–72 horas.
- **Manejo escalonado (ASGE / ASCRS):**
  1. **Medidas conservadoras iniciales (24–48 h si ciego <12 cm y sin datos de isquemia):** ayuno, descompresión con sonda nasogástrica y sonda rectal blanda, movilización/cambios posturales (decúbito prono/genupectoral), suspensión estricta de opioides y anticolinérgicos, y reposición agresiva de electrolitos (**K⁺ >4.0 mEq/L y Mg²⁺ >2.0 mg/dL**). Resuelve ~70% de los casos.
  2. **Tratamiento farmacológico específico — Neostigmina:** indicado si falla el manejo conservador en 24–48 h o si el ciego alcanza 10–12 cm sin isquemia ni perforación. Dosis: **neostigmina 2.0 mg IV en infusión lenta durante 3 a 5 minutos**, bajo **monitorización electrocardiográfica continua**, paciente en decúbito supino y **atropina (1.0 mg IV) lista en jeringa a la cabecera** por riesgo de bradicardia sintomática o broncoespasmo. Logra descompresión rápida con expulsión masiva de gas en **85 a 90%** de los casos dentro de 10–30 minutos (si no responde o recurre puede repetirse una segunda dosis). *Contraindicaciones:* **bradicardia <50–60 lpm, bloqueo AV de 2.º o 3.º grado, asma/EPOC grave, infarto reciente, obstrucción mecánica no descartada o sospecha de perforación**.
  3. **Colonoscopia descompresiva:** indicada si la neostigmina está contraindicada o fracasa (éxito ~75–85%, aunque con recurrencia hasta de 40%, menor si se deja sonda de descompresión colónica).
  4. **Cirugía de urgencia:** reservada para fracaso de todo lo anterior o signos de **isquemia, necrosis o perforación cecal** (mortalidad 30–50% si perfora). Según hallazgos: cecostomía percutánea/quirúrgica si el ciego está viable, o **hemicolectomía derecha / colectomía subtotal con ileostomía** si hay necrosis o perforación.

### Perlas de examen
- En **Hirschsprung**, el colon dilatado es el sano y el segmento estrecho es el aganglionar; la **biopsia rectal por succión (≥2 cm sobre la línea dentada)** es el estándar de oro (**calretinina negativa, acetilcolinesterasa elevada**).
- En **Hirschsprung**, **una sola célula ganglionar en H&E descarta la enfermedad**; en la cirugía de descenso (Swenson, Soave, Duhamel o transanal) se debe resecar **≥5–10 cm por arriba de la primera biopsia normal**.
- **Enterocolitis por Hirschsprung (HAEC):** líquidos IV, antibióticos IV y lavados rectales salinos; **enema contrastado estrictamente contraindicado** en el episodio agudo.
- **Vólvulo de sigmoides** (grano de café hacia HCD): descompresión endoscópica primero si no hay necrosis, seguida de **sigmoidectomía en la MISMA hospitalización** (recidiva >50–60%).
- **Vólvulo de ciego** (riñón/coma hacia HCI): **NUNCA descomprimir por endoscopia**; cirugía urgente directa con **hemicolectomía derecha**.
- **Síndrome de Ogilvie:** primero descartar obstrucción mecánica (TC) y corregir K⁺/Mg²⁺ + retirar opioides; tratamiento de elección: **neostigmina 2 mg IV en 3–5 min con monitor ECG y atropina lista** (contraindicada en bradicardia, bloqueo AV, asma grave o perforación).
`),
    sheet('col-cdiff', '06', 'Colitis por Clostridioides difficile y megacolon tóxico', `
## Colitis por Clostridioides difficile y megacolon tóxico

### Definición, microbiología y epidemiología de la colitis por C. difficile
La infección por *Clostridioides difficile* (ICD, anteriormente *Clostridium difficile*) es la **primera causa de diarrea nosocomial y colitis asociada a antibióticos** en pacientes hospitalizados y quirúrgicos [Tratado AMCG 3ª ed., Cap. 147; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52]. Es un bacilo grampositivo anaerobio estricto productor de esporas resistentes al alcohol-gel (lo que obliga al **lavado de manos con agua y jabón** y aislamiento de contacto).

El desencadenante central es la disrupción de la microbiota colónica normal por antibióticos de amplio espectro —históricamente **clindamicina**, **fluoroquinolonas**, **cefalosporinas de 3.ª generación** y **penicilinas/carbapenémicos**— junto con hospitalización prolongada, edad >65 años, cirugía gastrointestinal, inmunosupresión y uso de inhibidores de la bomba de protones (IBP). La cepa hipervirulenta **BI/NAP1/027** produce mayores concentraciones de toxinas, toxina binaria y resistencia a fluoroquinolonas, asociándose a brotes graves y megacolon tóxico.

#### Patogenia de las toxinas y pseudomembranas
Las cepas toxigénicas liberan dos exotoxinas mayores:
- **Toxina A (TcdA, enterotoxina):** daña las uniones estrechas intercelulares, atrae neutrófilos y desencadena secreción masiva de líquido y respuesta inflamatoria.
- **Toxina B (TcdB, citotoxina potente):** inactiva GTPasas Rho, **despolimeriza los filamentos de actina** del citoesqueleto y provoca apoptosis masiva de colonocitos.

El exudado inflamatorio rico en fibrina, neutrófilos, moco y detritos epiteliales forma placas sobreelevadas blanco-amarillentas adherentes sobre la mucosa eritematosa denominadas **pseudomembranas** (patognomónicas en sigmoidoscopia, aunque ausentes en formas muy tempranas o neutropénicas).

### Cuadro clínico, algoritmo diagnóstico y gravedad (IDSA/SHEA 2021)
La clínica abarca desde diarrea acuosa fétida leve (≥3 evacuaciones no formadas en 24 h) con dolor cólico abdominal y febrícula, hasta **colitis fulminante** con distensión masiva, **íleo paralítico paradójico (diarrea escasa o ausente que puede engañar al residente)**, fiebre alta, hipotensión, choque séptico, megacolon tóxico y perforación.

- **Diagnóstico microbiológico (solo en heces diarreicas no formadas; nunca en portadores asintomáticos ni para «prueba de cura»):** algoritmo escalonado en **dos pasos** recomendado por IDSA/SHEA: tamizaje inicial de alta sensibilidad con **glutamato deshidrogenasa (GDH)** o prueba de amplificación de ácidos nucleicos (**NAAT/PCR**), seguido de inmunoensayo enzimático (**EIA**) para **toxinas A y B** para distinguir infección activa productora de toxina de simple colonización.
- **Tomografía computarizada:** en colitis grave/fulminante muestra **engrosamiento parietal colónico marcado (pancolitis)**, edema submucoso intenso en **«signo del acordeón»** o «doble halo», estriación pericólica, ascitis y dilatación colónica (>6 cm). La colonoscopia completa está contraindicada en colitis fulminante por riesgo de perforación; si se requiere confirmación urgente en duda diagnóstica, solo sigmoidoscopia flexible limitada sin insuflación excesiva.

| Categoría IDSA/SHEA 2021 | Criterios diagnósticos | Tratamiento médico de elección |
| :--- | :--- | :--- |
| **ICD no grave (episodio inicial)** | Leucocitos ≤15,000/µL y creatinina <1.5 mg/dL | **Fidaxomicina 200 mg VO c/12 h × 10 días** (preferida por menor recurrencia) o **vancomicina 125 mg VO c/6 h × 10 días**. Metronidazol 500 mg VO c/8 h solo si ambos no están disponibles |
| **ICD grave** | Leucocitos **>15,000/µL** o creatinina **≥1.5 mg/dL** | **Fidaxomicina 200 mg VO c/12 h × 10 días** o **vancomicina 125 mg VO c/6 h × 10 días** |
| **ICD fulminante** | **Hipotensión o choque séptico**, **íleo paralítico** o **megacolon tóxico** | **Vancomicina 500 mg VO o por SNG c/6 h** + **metronidazol 500 mg IV c/8 h** + **enemas de retención rectal de vancomicina (500 mg en 100 mL de solución salina c/6 h)** si existe íleo. Valoración quirúrgica inmediata |
| **Recurrencias (15–25% tras primer episodio)** | Reaparición sintomática tras resolución | 1.ª recurrencia: fidaxomicina estándar o extendida, o pauta descendente/pulsada de vancomicina (± **bezlotoxumab**). ≥2 recurrencias: **trasplante de microbiota fecal (TMF)** (eficacia 85–90%) |

*Nota esencial:* **suspender de inmediato el antibiótico precipitante** siempre que sea clínicamente posible y **jamás administrar agentes antimotilidad (loperamida) ni corticosteroides**, pues precipitan megacolon tóxico y perforación [IDSA-SHEA, Johnson 2021; Sabiston 21ª ed.].

### Megacolon tóxico: definición, causas y criterios de Jalan vs Sabiston
El megacolon tóxico es una **colitis grave con dilatación aguda no obstructiva del colon y toxicidad sistémica** [Desai 2020; Sabiston 21ª ed., Cap. 52]. En esencia representa una **sepsis originada en una colitis transmural grave**: la dilatación es una manifestación de la parálisis neuromuscular inducida por óxido nítrico y mediadores inflamatorios, no la causa primaria del cuadro. Su mortalidad intrahospitalaria permanece elevada (6.5–9.2% global, disparándose a **30–50% si ocurre perforación**).

- **Etiologías principales:** enfermedad inflamatoria intestinal (**CUCI** es la causa clásica, ~5% de los brotes graves; Crohn colónico), infecciones graves (***C. difficile*** —causa creciente en hospitales—, **citomegalovirus**, *Entamoeba histolytica*, *Salmonella*, *Shigella*, *Campylobacter*) y colitis isquémica grave.
- **Factores precipitantes iatrógenos:** opioides, loperamida, anticolinérgicos, antidepresivos tricíclicos, hipopotasemia grave, enema baritado y colonoscopia en colitis activa.

| Criterio | **Criterios clásicos de Jalan (1969)** | **Criterios prácticos de Sabiston** |
| :--- | :--- | :--- |
| **Dilatación radiográfica** | **Obligatoria:** diámetro del **colon transverso >6 cm** con pérdida de haustras | Dilatación del colon transverso cuenta como un criterio, pero **no exige megacolon radiográfico** para intervenir si hay sepsis colónica |
| **Signos de toxicidad sistémica** | **Al menos 3 de 4:** fiebre >38.6 °C, frecuencia cardiaca >120 lpm, leucocitos >10.5 ×10³/µL o anemia | **Al menos 3 de 5:** FC >100 lpm, leucocitos >12,000/µL, albúmina <3.0 g/dL, temperatura >38.0 °C o transverso dilatado |
| **Descompensación asociada** | **Y al menos 1 de 4:** hipotensión, hipovolemia/deshidratación, alteración del estado mental o alteraciones electrolíticas | Valoración clínica seriada del abdomen y falla orgánica |

### Manejo médico-quirúrgico integrado del megacolon tóxico (primeras 48–72 h)
El paciente debe ingresar a **terapia intensiva o cuidados intermedios** con **co-manejo diario obligatorio entre gastroenterología/medicina interna y cirugía general** [Desai 2020; ACG-UC 2025]:
1. **Reanimación y soporte:** cristaloides IV, transfusión según necesidad, corrección agresiva de electrolitos (especialmente potasio y magnesio), ayuno total y descompresión con sonda nasogástrica y sonda rectal blanda.
2. **Vigilancia seriada estrecha:** exploración abdominal física repetida, biometría, electrolitos, lactato y **radiografía simple de abdomen dos veces al día** al ingreso (luego diaria si mejora) para medir el diámetro del transverso y detectar neumoperitoneo precoz. Cambios de posición (decúbito prono/genupectoral) ayudan a redistribuir gas.
3. **Retiro inmediato de precipitantes:** suspender opioides, anticolinérgicos, antidiarreicos y AINE.
4. **Tratamiento etiológico dirigido (el paso donde no se puede fallar):**

| Etiología del megacolon tóxico | Tratamiento médico específico | Uso de esteroides IV | Rescate / conducta quirúrgica |
| :--- | :--- | :--- | :--- |
| **CUCI** | Metilprednisolona 60 mg/día o hidrocortisona 100 mg c/6–8 h IV + antibióticos empíricos de amplio espectro | **SÍ (pilar inicial)**; no aumentan perforación | Rescate al día 3 (infliximab o ciclosporina); si falla en 48–72 h → colectomía subtotal |
| **Crohn colónico** | Esteroide IV + antibióticos empíricos | **SÍ** | Infliximab (la ciclosporina carece de evidencia en Crohn); colectomía subtotal si falla |
| ***Clostridioides difficile*** | **Vancomicina 500 mg VO/SNG c/6 h + enemas de vancomicina + metronidazol 500 mg IV c/8 h** | **ESTRICTAMENTE CONTRAINDICADOS** | Cirugía urgente ante choque, **lactato ≥5 mmol/L**, leucocitos ≥50,000 o <2,000, íleo progresivo o megacolon |
| **CMV (inmunosuprimidos / VIH)** | Ganciclovir IV + soporte | **NO** (salvo EII coexistente controlada) | Mala respuesta médica aislada; umbral quirúrgico bajo |
| **Amebiasis fulminante** | Metronidazol 750 mg IV c/8 h | **ESTRICTAMENTE CONTRAINDICADOS** | Colectomía subtotal + ileostomía terminal sin anastomosis |

*Nota:* el 5-ASA/sulfasalazina no tiene papel en el megacolon tóxico agudo y la nutrición parenteral total no reduce la necesidad de cirugía.

### Indicaciones y tácticas quirúrgicas: colectomía subtotal vs técnica de Neal
**La perforación multiplica la mortalidad de 3 a 5 veces; operar ANTES de la perforación es la decisión que salva al paciente** [Desai 2020; WSES 2019].

- **Indicaciones absolutas de cirugía urgente:** perforación libre o neumoperitoneo, peritonitis generalizada, necrosis/isquemia transmural en TC, hemorragia digestiva masiva refractaria, síndrome compartimental abdominal o choque séptico con falla orgánica progresiva.
- **Indicaciones por gravedad bioquímica o falta de respuesta (en *C. difficile* fulminante y megacolon):** **lactato sérico ≥5.0 mmol/L** (predictor crítico de mortalidad >75% si se demora la cirugía), **leucocitosis extrema ≥50,000/µL** o leucopenia <2,000/µL, requerimientos crecientes de vasopresores, empeoramiento del examen abdominal o ausencia de mejoría tras **24–72 horas** de tratamiento médico máximo.

#### 1. Estándar de oro quirúrgico: colectomía abdominal subtotal con ileostomía terminal
Consiste en la resección completa del colon abdominal (desde el ciego hasta el sigmoides distal/unión rectosigmoidea) con **confección de una ileostomía terminal en fosa ilíaca derecha** y cierre del muñón rectal a nivel intraperitoneal (muñón de Hartmann) o exteriorización como fístula mucosa sigmoidea [Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52].
- **Por qué es el estándar:** elimina de raíz toda la fuente de sepsis y toxinas, evita una anastomosis de altísimo riesgo en un paciente séptico, vasopresor-dependiente e hipoalbuminémico, y evita la disección pélvica de una proctocolectomía en urgencia (menor tiempo quirúrgico, menor sangrado y preservación del recto para reconstrucción futura en segundo tiempo).

#### 2. Alternativa preservadora de colon en *C. difficile*: técnica de Neal (Universidad de Pittsburgh)
Descrita por Neal et al. (Ann Surg 2011) y aceptada por las guías **WSES y EAST** como alternativa en pacientes seleccionados con *C. difficile* fulminante **SIN necrosis colónica, SIN perforación y SIN síndrome compartimental abdominal**:
- Abordaje **laparoscópico** para confeccionar una **ileostomía en asa desfuncionalizante**.
- **Lavado colónico anterógrado intraoperatorio** a través del asa eferente del estoma con **8 litros de solución de polietilenglicol (PEG) tibia** (con sonda rectal para drenaje), arrastrando toxinas y pseudomembranas.
- **Infusión anterógrada posoperatoria de vancomicina (500 mg en 500 mL de salina cada 8 horas por 10 días)** a través del asa eferente + metronidazol 500 mg IV cada 8 h.
- En series seleccionadas redujo la mortalidad frente a controles históricos y permitió **preservar el colon en >90%** de los sobrevivientes con reconexión ulterior sencilla; sin embargo, ante cualquier duda de viabilidad parietal, necrosis o falta de respuesta clínica en 24–48 h, **debe convertirse sin demora a colectomía subtotal**.

### Perlas de examen
- ***C. difficile*** produce **Toxina A (enterotoxina)** y **Toxina B (citotoxina que despolimeriza actina)**; sus esporas resisten alcohol-gel (lavar manos con agua y jabón).
- En **ICD fulminante** (choque, íleo o megacolon): **vancomicina 500 mg VO/SNG c/6 h + enemas de vancomicina 500 mg/100 mL c/6 h + metronidazol 500 mg IV c/8 h**. La diarrea puede desaparecer por **íleo paralítico** —no confundir con mejoría—.
- **Lactato ≥5.0 mmol/L** y **leucocitosis ≥50,000/µL** son los marcadores bioquímicos clásicos de alarma quirúrgica en *C. difficile* fulminante.
- **Criterios de Jalan para megacolon tóxico:** dilatación del **colon transverso >6 cm** + ≥3 signos de toxicidad (fiebre >38.6 °C, FC >120, leucocitos >10.5 mil, anemia) + ≥1 dato de descompensación (hipotensión, hipovolemia, alteración mental o electrolítica).
- **Esteroides IV:** indicados en megacolon por **CUCI/Crohn**, pero **estrictamente contraindicados** en megacolon infeccioso (*C. difficile*, amebiasis).
- **Cirugía estándar en megacolon tóxico y *C. difficile* con necrosis:** **colectomía subtotal con ileostomía terminal** (jamás anastomosis primaria ni proctocolectomía). La **técnica de Neal** (ileostomía en asa + lavado con 8 L de PEG + vancomicina anterógrada) solo aplica si el colon está viable, sin necrosis ni perforación.
`),
    sheet('col-cancer', '07', 'Pólipos, cáncer de colon, excisión completa del mesocolon y complicaciones quirúrgicas', `
## Pólipos, cáncer de colon, excisión completa del mesocolon y complicaciones quirúrgicas

### Pólipos colónicos, vías moleculares y síndromes hereditarios
Más del **95%** de las neoplasias malignas de colon son **adenocarcinomas** que surgen de lesiones precursoras epiteliales (pólipos adenomatosos y serrados) mediante la acumulación escalonada de alteraciones genéticas [Tratado AMCG 3ª ed., Cap. 151; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52].
- **Clasificación histológica de pólipos:**
  - *Adenomatosos (neoplásicos):* tubulares (75–85%, menor riesgo), tubulovellosos (10–15%) y **vellosos (5–10%, mayor riesgo de malignidad, hasta 35–40% si >2 cm)**. El riesgo de cáncer invasor depende del tamaño (>1–2 cm), componente velloso y grado de displasia.
  - *Serrados:* hiperplásicos pequeños del rectosigmoides (sin potencial maligno), **adenomas/pólipos serrados sésiles (SSL)** (predominan en colon derecho, vía metiladora CIMP/BRAF) y adenomas serrados tradicionales.
  - *Pólipo maligno (adenocarcinoma invasor a través de la muscularis mucosae, pT1):* se evalúa con la **clasificación de Haggitt** (pólipos pediculados, niveles 1–4) y **Kikuchi** (pólipos sésiles, Sm1–Sm3). Basta la polipectomía endoscópica completa únicamente si cumple **todos los criterios de bajo riesgo**: resección en bloque con **margen libre ≥1 mm**, bien o moderadamente diferenciado, **sin invasión linfovascular ni perineural**, sin *budding* tumoral de alto grado e invasión superficial (Haggitt 1–3 o Kikuchi Sm1). Si incumple cualquiera (o es Haggitt 4 / Sm3), requiere **colectomía oncológica formal** por riesgo de metástasis ganglionares (>10–25%).

#### Tres vías moleculares mayores del cáncer colorrectal
1. **Inestabilidad cromosómica (CIN, ~80–85%):** secuencia clásica adenoma-carcinoma de Vogelstein: pérdida temprana de **APC** (5q21) → activación de **KRAS** → pérdida de **SMAD4/DCC** (18q) → pérdida tardía de **TP53** (17p). Predomina en colon izquierdo.
2. **Inestabilidad de microsatélites alta / deficiencia de reparación de apareamiento (MSI-H / dMMR, ~15%):** inactivación de *MLH1, MSH2, MSH6* o *PMS2* (germinal en síndrome de Lynch; hipermetilación somática del promotor de *MLH1* en esporádicos). Predomina en **colon derecho**, histología mucinosa/poco diferenciada con denso infiltrado linfocitario, mejor pronóstico en etapas tempranas y **respuesta sobresaliente a inmunoterapia anti-PD-1** (pembrolizumab/nivolumab).
3. **Fenotipo metilador de islas CpG (CIMP, ~15–20%):** vía serrada asociada a mutación **BRAF V600E** (peor pronóstico en enfermedad metastásica).

| Síndrome hereditario | Gen y herencia | Rasgos clínicos clave | Conducta quirúrgica y vigilancia |
| :--- | :--- | :--- | :--- |
| **Poliposis Adenomatosa Familiar (PAF)** | **APC (5q21)**; autosómica dominante | >100 a miles de adenomas desde la pubertad; **100% cáncer colorrectal hacia los 40 años**; pólipos duodenales/ampulares (2.ª causa de muerte), tumores desmoides, CHRPE (Gardner/Turcot) | **Proctocolectomía total restauradora con IPAA** a los 15–20 años (o colectomía total + anastomosis ileorrectal solo si recto con <10–15 pólipos y vigilancia endoscópica anual estricta) |
| **Síndrome de Lynch (HNPCC)** | **MLH1, MSH2, MSH6, PMS2** (o EPCAM); AD | Causa hereditaria más frecuente (~3% de CCR); **MSI-H**, colon derecho, edad temprana (<45–50 años), cáncer sincrónico/metacrónico, **endometrio (40–60%) y ovario** (criterios Ámsterdam II / Bethesda) | Ante cáncer de colon: **colectomía total con anastomosis ileorrectal** (evita riesgo de 30–40% de metacrónico a 10 años) + histerectomía/salpingooforectomía profiláctica al completar paridad |
| **Poliposis asociada a MUTYH (MAP)** | **MUTYH**; autosómica recesiva | 10–100 adenomas (PAF atenuada); sin antecedentes verticales | Colonoscopia cada 1–2 años; colectomía si pólipos incontrolables o cáncer |
| **Peutz-Jeghers** | **STK11/LKB1**; AD | Pólipos hamartomatosos (intususcepción), máculas melanóticas mucocutáneas; riesgo alto de cáncer GI, páncreas y mama | Polipectomía enteroscópica y vigilancia multiorgánica estrecha |

### Tamizaje, presentación clínica y estadificación (TNM AJCC 8ª ed.)
Según la **US Multi-Society Task Force (actualización noviembre 2021)** y NCCN, el tamizaje en población de riesgo promedio inicia a los **45 años** mediante **colonoscopia cada 10 años** o **prueba inmunoquímica fecal (FIT) anual** [USMSTF 2021].

- **Colon derecho (ciego y ascendente):** luz amplia y heces líquidas; cursa con sangrado oculto, **anemia microcítica hipocrómica ferropénica**, fatiga, pérdida de peso y masa palpable en FID; rara vez obstruye.
- **Colon izquierdo y sigmoides:** luz estrecha, heces sólidas y patrón anular en «corazón de manzana»; produce cambio en hábito intestinal, heces acintadas, **hematoquecia visible**, dolor cólico y **obstrucción intestinal** (causa #1 de obstrucción colónica). **Nunca atribuir rectorragia a hemorroides en mayores de 45 años sin colonoscopia completa.**
- **Estudio diagnóstico y estadificación obligatoria:** colonoscopia completa con biopsia y **tatuaje con tinta china** de lesiones pequeñas/laparoscópicas (para localizarlas y descartar cáncer sincrónico, presente en 3–5%); **TC contrastada de tórax, abdomen y pelvis**; **antígeno carcinoembrionario (ACE) basal** (no diagnóstico, esencial para pronóstico y seguimiento); pruebas moleculares universales de **dMMR/MSI** en todo cáncer colorrectal y **KRAS/NRAS/BRAF/HER2** en estadio IV.
- **Estadificación AJCC 8ª edición:** **Tis** in situ; **T1** submucosa; **T2** muscular propia; **T3** subserosa/tejido pericolónico; **T4a** perfora serosa visceral; **T4b** invade órganos vecinos. **N1a** 1 ganglio; **N1b** 2–3 ganglios; **N1c** depósitos tumorales satélites sin ganglio; **N2a** 4–6 ganglios; **N2b** ≥7 ganglios. **M1a** un órgano; **M1b** ≥2 órganos; **M1c** carcinomatosis peritoneal. **Estadio I:** T1–2 N0; **Estadio II:** T3–4 N0; **Estadio III:** cualquier T, N+; **Estadio IV:** cualquier M1. **Criterio inviolable de calidad oncológica: cosechar y examinar al menos 12 ganglios linfáticos** en la pieza quirúrgica.

### Principios quirúrgicos: excisión completa del mesocolon (CME) y manejo urgente
La cirugía es el pilar curativo del cáncer de colon localizado. La **Excisión Completa del Mesocolon (CME) con Ligadura Vascular Central D3 (CVL)**, sistematizada por **Werner Hohenberger (2009)**, traslada al colon los principios embriológicos de la TME de Heald [Sabiston 21ª ed., Cap. 52; NCCN]:
1. **Plano embriológico fascial:** disección cortante en el plano avascular entre la fascia visceral del mesocolon y la fascia retroperitoneal parietal (**fascia de Toldt**), extrayendo el mesocolon intacto dentro de sus hojas peritoneales sin desgarros que siembren células linfáticas.
2. **Ligadura vascular central (D3):** sección de los vasos nutricios en su **origen anatómico verdadero** (AMS para colon derecho; origen aórtico de la AMI y VMI bajo el borde pancreático para colon izquierdo) para extirpar las estaciones ganglionares apicales.
3. **Margen longitudinal parietal:** **≥5 cm proximal y distal** de pared colónica sana.
4. **Resección en bloque:** ante tumores T4b adheridos a órganos vecinos (vejiga, asa delgada, pared abdominal), resecar **en monobloque** sin despegar adherencias sospechosas (hasta 50% contienen tumor).
5. **Abordaje laparoscópico:** oncológicamente equivalente al abierto (ensayos COST, COLOR, CLASSIC) con menor íleo, dolor y estancia.
- *Operaciones regladas:* ciego/ascendente → **hemicolectomía derecha** (ileocólica, cólica derecha y rama derecha de la cólica media + 10–15 cm de íleon); ángulo hepático/transverso proximal → hemicolectomía derecha extendida; ángulo esplénico/descendente → **hemicolectomía izquierda**; sigmoides → **sigmoidectomía oncológica**.
- **Cáncer obstruido o perforado:** en perforación libre con choque/peritonitis → resección oncológica del segmento perforado sin anastomosis (Hartmann o ileostomía terminal). En obstrucción colónica izquierda aguda → resección con anastomosis primaria (si paciente estable y colon viable), resección tipo Hartmann (si inestable/alto riesgo), o **prótesis metálica autoexpandible (stent)** como **puente a cirugía electiva** (reduce estomas y permite laparoscopia, aunque con ligera preocupación de perforación subclínica) o como paliación definitiva en enfermedad irresecable.

### Tratamiento sistémico: ensayo IDEA, terapias dirigidas y metástasis hepáticas
- **Quimioterapia adyuvante (estadio III y estadio II de alto riesgo):** el estadio II de alto riesgo incluye **T4, perforación, obstrucción, <12 ganglios examinados, invasión linfovascular o perineural, grado pobremente diferenciado o márgenes positivos** (nota: el estadio II con **MSI-H** tiene excelente pronóstico y **no se beneficia de fluoropirimidina sola**).
- **Ensayo Internacional IDEA (NEJM 2018) en Estadio III:**
  - *Bajo riesgo (T1–T3, N1):* **CAPOX por 3 meses** es oncológicamente no inferior a 6 meses y reduce la **neurotoxicidad sensitiva periférica severa por oxaliplatino del 45% al 15%**.
  - *Alto riesgo (T4 o N2):* mantener **6 meses** de FOLFOX o CAPOX [Sabiston 21ª ed., Cap. 52].
- **Enfermedad metastásica (estadio IV):** quimioterapia doblete/triplete (FOLFOX, FOLFIRI, FOLFOXIRI) guiada por biomarcadores y lateralidad: **anti-EGFR (cetuximab, panitumumab)** únicamente en **RAS/BRAF nativo (*wild-type*) y colon izquierdo**; **anti-VEGF (bevacizumab)** en RAS mutado o colon derecho; **inmunoterapia anti-PD-1 (pembrolizumab)** como primera línea en **MSI-H/dMMR** (ensayo KEYNOTE-177). Las **metástasis hepáticas resecables** (dejando remanente hepático futuro ≥25–30% en hígado sano) se tratan con **resección hepática + quimioterapia perioperatoria**, única vía con potencial curativo (sobrevida a 5 años de 40–55%). La radioterapia no tiene papel rutinario en cáncer de colon.

### Complicaciones de la cirugía de colon y fuga anastomótica (ISREC)
La **fuga anastomótica** es la complicación más temida tras una colectomía; su incidencia global oscila entre **1 y 19%** (metaanálisis: **9.6%**) y es el principal predictor de mortalidad posoperatoria, estoma permanente y recurrencia oncológica local [McDermott 2015; Singh 2014].

#### Clasificación ISREC (Rahbari 2010 — definida por el impacto terapéutico)
| Grado ISREC | Definición | Manejo clínico estándar |
| :--- | :--- | :--- |
| **Grado A** | Fuga radiológica sin impacto clínico; **no modifica el manejo** | Observación clínica; sin antibióticos ni intervención invasiva |
| **Grado B** | Requiere intervención terapéutica activa, **sin relaparotomía** | Reposo digestivo, antibióticos IV (gramnegativos + anaerobios) y **drenaje percutáneo guiado por TC** (si colección >3 cm, éxito hasta 86%) o drenaje transanal/vacío endoluminal |
| **Grado C** | **Requiere relaparotomía urgente** (peritonitis, sepsis, inestabilidad) | Control inmediato del foco en quirófano: desmontaje de anastomosis + estoma terminal (Hartmann) o derivación proximal + drenaje amplio. **Jamás revisar/resuturar una anastomosis en paciente inestable** |

*Factores de riesgo:* sexo masculino, ASA >II, insuficiencia renal, radioterapia previa, tumor distal o >3 cm, urgencia, sangrado/transfusión, cirugía >4 h, tabaquismo, obesidad, desnutrición (albúmina <3 g/dL), esteroides y bevacizumab reciente. La **preparación mecánica con antibióticos orales** reduce significativamente la fuga (OR 0.52 en auditoría ESCP 2018) y la infección del sitio quirúrgico; el **estoma derivativo no evita que exista fuga, pero sí mitiga la sepsis pélvica y las reintervenciones**.

#### Cuándo aparece y cómo diagnosticarla (libro vs práctica real)
- **Ventana temporal:** los textos clásicos la ubican entre los **días 2 y 7 (mediana día 5.5)** [Sabiston], pero estudios prospectivos muestran un **promedio diagnóstico de 12.7 días**, con **42% diagnosticadas tras el egreso** y 12% después de los 30 días [Hyman 2007]. Todo paciente operado de colon que reingresa con fiebre, taquicardia, dolor o **íleo prolongado** tiene fuga hasta demostrar lo contrario.
- **Proteína C reactiva (PCR):** herramienta clave para **descartar** fuga (metaanálisis de Singh 2014): puntos de corte **172 mg/L (día 3), 124 mg/L (día 4) y 144 mg/L (día 5)** (o umbral práctico >150 mg/L entre días 3–5), con **valor predictivo negativo (VPN) de 97%** y valor predictivo positivo de solo 21–23%. Una PCR baja apoya un alta segura; una PCR elevada obliga a realizar **tomografía computarizada (TC) contrastada**, que es el estudio de elección (superior al enema contrastado, detectando 17/19 vs 4/10 fugas en la serie de Hyman).

#### Otras complicaciones quirúrgicas mayores del colon
| Complicación | Puntos clave de diagnóstico y conducta |
| :--- | :--- |
| **Íleo posoperatorio prolongado** | Incidencia 10–30%; definido a partir del día 4 por ≥2 criterios (náusea/vómito, intolerancia oral >24 h, ausencia de flatos >24 h, distensión o imagen) [Vather 2013]. Reducido por laparoscopia y ERAS; **siempre descartar fuga anastomótica subyacente** |
| **Infección del sitio quirúrgico (ISQ)** | La más frecuente en cirugía colorrectal; si es de órgano/espacio (absceso intraabdominal/pélvico), pensar siempre en fuga oculta y solicitar TC |
| **Hemorragia anastomótica** | Hematoquecia leve es frecuente; sangrado grave raro (~0.5%, más común en anastomosis engrapadas). 85% resuelve con manejo conservador o hemostasia endoscópica (clips); cirugía solo ante inestabilidad |
| **Lesión ureteral iatrógena** | Incidencia **0.28%** (aumenta mortalidad y estancia); mayor riesgo en cáncer rectal, adherencias y colectomía izquierda (**uréter izquierdo** al ligar la AMI). Identificarlo antes de seccionar vasos; si se advierte en el acto, reparación inmediata con catéter doble J |
| **Complicaciones de estomas** | **Hernia paraestomal:** complicación tardía más frecuente de colostomía; **prolapso:** más frecuente en colostomía en asa; **deshidratación/lesión renal aguda:** causa #1 de reingreso tras ileostomía |

### Perlas de examen
- **Tamizaje de cáncer colorrectal (USMSTF 2021):** inicia a los **45 años** (colonoscopia cada 10 años o FIT anual).
- **PAF** (*APC* 5q21, >100 pólipos, 100% cáncer a los 40 años) → **proctocolectomía total con IPAA**. **Síndrome de Lynch** (MSI-H, colon derecho + endometrio) → **colectomía total con anastomosis ileorrectal**.
- **CME + ligadura vascular central D3 (Hohenberger):** disección en la fascia de Toldt, ligadura en el origen vascular, **margen longitudinal ≥5 cm** y mínimo **12 ganglios** en patología.
- **Ensayo IDEA (Estadio III):** bajo riesgo (T1–T3 N1) → **CAPOX 3 meses** (baja neurotoxicidad de 45% a 15%); alto riesgo (T4 o N2) → **6 meses**.
- **Fuga anastomótica (ISREC):** A sin cambio de manejo, B intervención sin cirugía (antibióticos/drenaje percutáneo si >3 cm), C relaparotomía. **PCR días 3–5 tiene VPN de 97% (sirve para descartar, no para confirmar)**; **TC** es el estudio de elección; **el estoma protector no impide la fuga, pero evita la sepsis mortal**.
- **Uréter izquierdo:** el de mayor riesgo en cirugía colorrectal; identificarlo sistemáticamente antes de ligar la AMI.
`),
  ],
};
