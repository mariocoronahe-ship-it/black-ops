// Hojas por subtema del módulo R2 de Recto y Ano (8 hojas).
// Integra y amplía el contenido doctrinal de temario_aprende_base.js, resúmenes R2 y temario PUEM HGR 72. Ver hoja.js.
import { sheet } from './hoja.js?v=20261122g';

export const R2_RECTO = {
  recto: [
    sheet('rec-anatomia', '01', 'Anatomía fascial del recto, conducto anal, complejo esfinteriano y pruebas funcionales', `
## Anatomía fascial del recto, conducto anal, complejo esfinteriano y pruebas funcionales

### Límites anatómicos, morfología y tercios rectales
El recto mide **12 a 15 cm** en el adulto y se distingue macroscópicamente del sigmoides porque **carece de tenias cólicas, haustras y apéndices epiploicos**: las tres tenias se ensanchan y fusionan en la unión rectosigmoidea formando una capa muscular longitudinal externa continua [Tratado AMCG 3ª ed., Cap. 145; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52].

- **Límite proximal (aclaración topográfica obligatoria):** anatómicamente el recto inicia a la altura de la **tercera vértebra sacra (S3)**, donde termina el mesocolon sigmoides móvil. Es un error clásico de examen confundir S3 con el **promontorio sacro**, que corresponde a la articulación lumbosacra anterior (**L5–S1**), situada 4 a 5 cm más proximal. Clínicamente, los cirujanos usan los **15 cm desde el margen anal** por rectoscopia rígida como referencia operativa en oncología rectal.
- **Límite distal:** termina en el **anillo anorrectal**, integrado por la cincha en «U» del músculo puborrectal y el borde superior del complejo esfinteriano al atravesar el diafragma pélvico.
- **Válvulas transversas de Houston:** tres pliegues semilunares fijos (superior izquierdo, **medio derecho** e inferior izquierdo). La **válvula media (a ~7–8 cm del margen anal)** es la más constante y marca el nivel aproximado de la reflexión peritoneal anterior; las biopsias profundas anteriores por arriba de ella conllevan riesgo de perforación intraperitoneal.

| Tercio rectal | Altura desde margen anal | Cobertura peritoneal | Relevancia quirúrgica directa |
| :--- | :--- | :--- | :--- |
| **Superior** | 10–15 cm | Cara anterior y laterales (posterior extraperitoneal) | Perforación anterior da peritonitis libre; admite TME parcial (5 cm bajo el tumor) |
| **Medio** | 5–10 cm | **Solo cara anterior** (fondo de saco de Douglas) | Reflexión a ~7–8 cm en varones y ~5.5–6 cm en mujeres; exige TME completa |
| **Inferior** | 0–5 cm | **Totalmente extraperitoneal** | Rodeado por mesorrecto distal y elevadores; mayor riesgo de CRM+ y LARS |

### Fascias pélvicas, mesorrecto y el «Plano Sagrado» de Heald
La cirugía rectal moderna se sustenta en cuatro estructuras fasciales clave [Tratado AMCG 3ª ed., Cap. 152; Sabiston 21ª ed., Cap. 52]:
1. **Mesorrecto:** cilindro bilobulado celuloadiposo que envuelve posterior y lateralmente al recto (y anteriormente en el tercio distal); contiene ramas de los vasos rectales superiores, linfáticos y **todas las estaciones ganglionares primarias**.
2. **Fascia propia del recto (fascia mesorrectal visceral, FMR):** envoltura fibrosa brillante que sella el mesorrecto como un manguito hermético. Preservarla intacta impide la siembra tumoral local y define la calidad de la TME.
3. **Fascia presacra parietal (fascia de Waldeyer):** lámina parietal posterior que tapiza sacro y cóccix, cubriendo la arteria sacra media y el **plexo venoso presacro** (conectado con venas basivertebrales avalvulares). Su desgarro provoca hemorragia venosa masiva rebelde a electrocauterio que requiere tachuelas estériles de titanio (*thumbtacks*), parche muscular soldado o empaquetamiento pélvico. A nivel de S4 se condensa el **ligamento rectosacro**, que debe dividirse con corte frío o electrocauterio y jamás por tracción roma.
4. **Fascia de Denonvilliers (tabique rectovesical o rectovaginal):** lámina fibromuscular anterior que separa el mesorrecto inferior de próstata y vesículas seminales (varón) o pared vaginal posterior (mujer). En tumores anteriores se diseca por delante de ella; en posteriores suele preservarse para proteger los haces neurovasculares cavernosos de Walsh (a las 10 y 2 del reloj).

El **«Plano Sagrado» (*Holy Plane*) de Heald** es el plano virtual avascular («telaraña» areolar laxa) entre la **fascia propia mesorrectal (visceral)** y la **fascia presacra de Waldeyer (parietal)**. La disección cortante en esta interfaz extirpa el mesorrecto intacto sin sangrado presacro ni lesión nerviosa.

### Vascularización arterial, drenaje venoso, linfáticos e inervación autonómica
El recto recibe triple aporte arterial con rica red colateral intramural [Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52]:
- **Arteria rectal superior:** rama terminal impar de la **arteria mesentérica inferior (AMI)**; irriga recto superior, medio y mucosa distal.
- **Arterias rectales medias:** ramas pares e inconstantes de la **arteria ilíaca interna** que ingresan por los ligamentos laterales.
- **Arterias rectales inferiores:** ramas pares de la **arteria pudenda interna** (conducto de Alcock); cruzan la fosa isquiorrectal hacia anodermo y esfínteres.

El **drenaje venoso dual** tiene gran peso clínico: la **vena rectal superior** drena a la **vena mesentérica inferior (VMI)** y al **sistema porta** (metástasis hepáticas), mientras que las **venas rectales medias e inferiores** drenan a la **vena cava inferior** (vía pudenda/ilíaca interna). Por ello, el cáncer de recto medio e inferior puede producir **metástasis pulmonares aisladas sin afección hepática**, y la hipertensión portal origina **várices anorrectales** (distintas de hemorroides comunes).

La **inervación autonómica pélvica** exige identificación sistemática durante la cirugía:
1. **Simpático (T11–L2 — plexo hipogástrico superior y nervios hipogástricos):** desciende sobre el promontorio sacro y corre 1–2 cm lateral al mesorrecto. Controla la **eyaculación anterógrada** y el tono esfinteriano basal; su sección al ligar la AMI o abrir el promontorio produce **eyaculación retrógrada e infertilidad**.
2. **Parasimpático (S2–S4 — *nervi erigentes* / esplácnicos pélvicos):** emergen de los agujeros sacros S2–S4 y forman con los hipogástricos el **plexo hipogástrico inferior (pélvico)** anterolateral junto a las vesículas seminales. Gobiernan la **erección**, la lubricación vaginal y la **contracción del detrusor vesical**; su lesión ocasiona **impotencia eréctil y vejiga neurogénica atónica**.

### Conducto anal, línea dentada y complejo esfinteriano
El **conducto anal quirúrgico** mide **3.0 a 4.0 cm** (del anillo anorrectal al margen anal; el conducto anatómico mide ~2.0 cm, de la línea dentada al margen). La **línea dentada o pectínea** (a **2.0 cm del margen anal**) marca las 8 a 12 **columnas y criptas de Morgagni**, donde drenan las **glándulas anales intramurales** (origen criptoglandular del 90–95% de abscesos y fístulas). Justo por arriba yace la zona de transición anal que permite el **reflejo de muestreo** (discrimina gas, líquido y sólido); distalmente, la **línea blanca de Hilton** señala el surco interesfintérico.

| Característica | Arriba de la línea dentada | Abajo de la línea dentada |
| :--- | :--- | :--- |
| **Embriología y epitelio** | Endodermo; epitelio cilíndrico glandular rectal | Ectodermo; epitelio escamoso no queratinizado (**anodermo**, sin folículos ni glándulas) |
| **Inervación y dolor** | Autonómica visceral; **insensible al dolor agudo cortante** | Somática por **nervio rectal inferior (pudendo S2–S4)**; exquisitamente sensible al dolor |
| **Drenaje venoso** | Vena rectal superior → **sistema porta (VMI)** | Venas rectales inferiores → **sistema cava inferior** |
| **Drenaje linfático** | Ganglios mesorrectales, **mesentéricos inferiores e ilíacos internos** | **Ganglios inguinales superficiales** (palpar ambas ingles siempre) |
| **Patología típica** | Hemorroides internas indoloras, adenocarcinoma rectal | Hemorroides externas trombosadas dolorosas, fisura anal, carcinoma epidermoide anal |

El **complejo esfinteriano** coordina la continencia y la defecación:
- **Esfínter anal interno (EAI):** engrosamiento de la capa circular lisa rectal; músculo involuntario que genera **70–80% del tono basal de reposo**. Presenta el **Reflejo Inhibitorio Rectoanal (RAIR)**: la distensión rectal lo relaja reflejamente vía plexo mientérico.
- **Esfínter anal externo (EAE):** músculo estriado voluntario inervado por el **nervio pudendo (S2–S4)** (haces subcutáneo, superficial y profundo); aporta 20–30% del tono basal y 100% de la contracción voluntaria forzada. En la mujer su porción anterior es más corta y vulnerable al trauma obstétrico y a fistulotomías anteriores.
- **Músculo puborrectal:** haz medial del elevador del ano en «U» que tracciona la unión anorrectal hacia delante manteniendo el **ángulo anorrectal de ~90°** en reposo (barrera clave para heces sólidas), abriéndose a 130–140° al defecar.
- **Espacios perirrectales:** **interesfintérico** (entre EAI y EAE, plano de fístulas y resecciones ultrabajas), **perianal**, **isquiorrectal** (comunicado bilateralmente por el **espacio posanal profundo de Courtney**), **supraelevador** y **retrorrectal**.

### Pruebas funcionales e imagenología anorrectal
| Estudio | Parámetros / valores normales | Indicación principal |
| :--- | :--- | :--- |
| **Manometría anorrectal de alta resolución (HRAM)** | Reposo (EAI): **50–70 mmHg** (60–80 cmH₂O). Contracción (*squeeze*, EAE): **100–180 mmHg**. **RAIR ausente = enfermedad de Hirschsprung**. Sensibilidad balón: primera **20–30 mL**, deseo **60–80 mL**, máxima **150–250 mL** | Incontinencia fecal, disinergia defecatoria (anismo), Hirschsprung y valoración preoperatoria |
| **Prueba de expulsión del balón** | Evacuación de balón con 50 mL en **<1–2 minutos** | Tamizaje de disinergia del piso pélvico |
| **Ultrasonido endoanal 3D (EAUS)** | Integridad 360°: **EAI hipoecoico** interno, **EAE hiperecoico** externo; mide ángulo de defecto | Estándar de oro en lesiones esfinterianas (OASIS, trauma) y fístulas bajas (con H₂O₂) |
| **RMN pélvica de alta resolución** | Fascias mesorrectal, Waldeyer y Denonvilliers; CRM, EMVI, ganglios y trayectos fistulosos altos | Estándar de oro en cáncer de recto y fístulas complejas/Crohn |
| **Cinedefecografía por RM dinámica** | Reposo, contracción y pujo: descenso perineal **>3.0 cm**, rectocele **>2.0 cm**, enterocele, intususcepción y anismo | Defecación obstruida y prolapso multicompartimental |
| **EMG / latencia pudenda (PNTML)** | Contracción paradójica (EMG); latencia pudenda normal **2.0 ± 0.2 ms** (>2.2 ms = neuropatía) | Complemento selectivo (uso decreciente frente a HRAM y EAUS) |

### Perlas de examen
- El recto mide **12–15 cm**, carece de tenias/haustras/apéndices epiploicos e inicia en **S3** (**no en el promontorio sacro L5–S1**).
- **«Plano Sagrado» de Heald:** espacio avascular entre la **fascia propia del mesorrecto** y la **fascia presacra de Waldeyer** (lesionarla desgarra el plexo venoso presacro).
- **Nervios hipogástricos (T11–L2)** → eyaculación anterógrada (lesión = eyaculación retrógrada); **nervi erigentes (S2–S4)** → erección y detrusor (lesión = impotencia y vejiga neurogénica).
- **Línea dentada (2 cm del margen):** arriba visceral/porta/ilíacos internos; abajo somático pudendo/cava/**ganglios inguinales superficiales**.
- **EAI:** músculo liso, **70–80% del tono basal** (50–70 mmHg). **Puborrectal:** ángulo anorrectal de **90°**. **RAIR ausente = Hirschsprung**.
- **Ultrasonido endoanal 3D:** EAI **hipoecoico**, EAE **hiperecoico**; estándar de oro para rupturas esfinterianas.

### Referencias
Tratado de Cirugía General AMCG, 3ª ed., Caps. 145 y 152. Schwartz, Principios de Cirugía, 11ª ed., Cap. 29. Sabiston, Tratado de Cirugía, 21ª ed., Caps. 52 y 53. Skandalakis JE, et al. Surgical Anatomy, Cap. Recto y ano. Heald RJ. The 'Holy Plane' of rectal surgery. J R Soc Med 1988;81:503–508. Carrington EV, et al. IAPWG London Classification. Neurogastroenterol Motil 2020;32:e13679.
`),
    sheet('rec-hemorroides', '02', 'Enfermedad hemorroidal', `
## Enfermedad hemorroidal

### Anatomía de los cojinetes anales y fisiopatología
Las hemorroides no son simples «várices», sino **cojinetes fibrovasculares normales de Thompson**, integrados por sinusoides arteriovenosos directos (lo que explica que su sangrado sea **rojo rutilante arterializado**), tejido conectivo elástico y el **músculo submucoso de Treitz / ligamento de Parks** [Tratado AMCG 3ª ed., Cap. 153; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 53]. Fisiológicamente sellan el conducto anal aportando **15–20% del tono basal** y continencia fina a líquidos y gases.

Los tres cojinetes primarios ocupan en **posición de litotomía** las horas **3 (lateral izquierda), 7 (posterolateral derecha) y 11 (anterolateral derecha)**. La enfermedad hemorroidal responde a la **teoría del deslizamiento de las almohadillas anales**: el pujo prolongado, estreñimiento, dieta baja en fibra, embarazo, obesidad y envejecimiento fragmentan el tejido de sostén, provocando descenso, congestión venosa, sangrado y prolapso.

### Clasificación anatómica y de Goligher (Banov)
- **Hemorroides internas (arriba de la línea dentada):** cubiertas por mucosa rectal con inervación visceral; **NO duelen** salvo estrangulación o trombosis extensa. Producen **rectorragia roja brillante indolora**, prolapso y secreción mucosa.
- **Hemorroides externas (abajo de la línea dentada):** cubiertas por anodermo y piel con inervación somática pudenda; ocasionan **dolor agudo intenso al trombosarse** o plicomas residuales. Las **mixtas** combinan ambos plexos.

| Grado de Goligher (internas) | Hallazgo clínico | Síntoma predominante | Manejo de primera elección |
| :--- | :--- | :--- | :--- |
| **Grado I** | Ingurgitación hacia la luz **sin prolapso** | Rectorragia indolora | Conservador; si persiste: bandas, escleroterapia o fotocoagulación |
| **Grado II** | Prolapsan al defecar y **reducen espontáneamente** | Sangrado, cuerpo extraño | Conservador + **ligadura con banda elástica (Barron)** |
| **Grado III** | Prolapsan y **requieren reducción manual** | Prolapso molesto, manchado | Bandas (casos selectos) o **cirugía** (hemorroidectomía, THD o PPH) |
| **Grado IV** | Prolapso **permanente irreducible** (o estrangulado) | Prolapso fijo, dolor/ulceración | **Hemorroidectomía excisional** (Milligan-Morgan o Ferguson) |

### Evaluación clínica y diagnósticos diferenciales obligatorios
El diagnóstico se basa en inspección (reposo y pujo), tacto rectal (descarta masas y fisuras; las internas blandas **no se palpan**) y **anoscopia** (estándar para graduar los cojinetes) [ASCRS 2024; Sabiston 21ª ed., Cap. 53]. **Regla inviolable:** jamás atribuir rectorragia a hemorroides sin **colonoscopia completa** en pacientes **≥45 años**, con anemia ferropénica, cambio del hábito intestinal, pérdida de peso, antecedente familiar de cáncer colorrectal o sangrado persistente.
- **Prolapso rectal completo (*procidentia*):** pliegues mucosos **concéntricos** y surco profundo circunferencial (vs pliegues **radiales** en hemorroides grado IV).
- **Várices anorrectales (hipertensión portal):** colaterales portosistémicas violáceas; **no realizar hemorroidectomía estándar** por riesgo de sangrado masivo (tratar hipertensión portal, ligadura selectiva/sutura o TIPS).
- Descartar además fisura anal, cáncer anal o rectal bajo, condilomas y enfermedad de Crohn.

### Tratamiento médico y procedimientos de consultorio
- **Manejo conservador (primera línea universal):** **fibra 25–35 g/día** (*psyllium*), agua 2–3 L/día (reduce sangrado ~50%), limitar tiempo en inodoro a **<3–5 minutos** sin pujo, **baños de asiento tibios** y **flebotónicos** (diosmina/hesperidina) en episodios agudos; esteroides tópicos solo <7–10 días [ASCRS 2024].

| Procedimiento de consultorio (grados I–III) | Técnica y mecanismo | Eficacia y ventaja | Contraindicaciones / riesgos |
| :--- | :--- | :--- | :--- |
| **Ligadura con banda elástica (Barron)** | Banda de látex **≥1–2 cm arriba de la línea dentada** → necrosis isquémica y fibrosis en 7–10 días | **Más eficaz en consultorio (75–85%)** y menor retratamiento; 1–3 paquetes/sesión | **Evitar cerca de línea dentada** (dolor severo), **anticoagulados, inmunosuprimidos y Crohn activo**; rara **sepsis pélvica** |
| **Escleroterapia** | Inyección submucosa (fenol 5% en aceite o polidocanol) en vértice del paquete | Rápida e indolora; **opción más segura en anticoagulados o cirróticos** (grados I–II) | Mayor recurrencia; inyección profunda anterior puede causar prostatitis o impotencia |
| **Fotocoagulación infrarroja (IRC)** | Pulsos infrarrojos en base vascular → coagulación submucosa | Mínima morbilidad en grados I–II sangrantes | Mayor tasa de recurrencia y sesiones repetidas |

### Tratamiento quirúrgico formal (5–10% de pacientes)
Indicado en **grado IV**, grado III refractario a bandas, hemorroides **mixtas** sintomáticas o estranguladas/gangrenadas [Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 53; ASCRS 2024]:

| Técnica quirúrgica | Descripción | Eficacia / recurrencia | Dolor y complicaciones |
| :--- | :--- | :--- | :--- |
| **Hemorroidectomía abierta (Milligan-Morgan)** | Excisión en bloque interno-externo con ligadura pedicular; heridas **abiertas** (segunda intención) | **Menor recurrencia (<2–5%)**; estándar en grados III–IV y mixtas | Dolor moderado-intenso; cicatriza en 4–6 sem; dejar **puentes mucocutáneos ≥1 cm** |
| **Hemorroidectomía cerrada (Ferguson)** | Igual escisión pedicular con **cierre continuo absorbible** de mucosa y anodermo | **Igual eficacia (<2–5%)**; estándar preferido en guías ASCRS | Cicatrización más rápida y menor secreción; dolor similar |
| **Energía bipolar/ultrasónica (LigaSure / Harmonic)** | Disección y sellado sin suturas | Equivalente a excisión clásica | Menor tiempo quirúrgico, sangrado y ligero menor dolor temprano |
| **Hemorroidopexia con engrapadora (PPH / Longo)** | Mucosectomía circunferencial **arriba de línea dentada** con engrapadora circular | **Mayor recurrencia (10–25%)**; NO resuelve externas ni grado IV fijo | Menor dolor agudo, pero riesgo de **fístula rectovaginal, perforación, sepsis pélvica y urgencia** |
| **Desarterialización guiada por Doppler (THD/HAL) + mucopexia** | Ligadura selectiva Doppler de ramas rectales superiores + pexia mucosa | Útil en grados II–III; **recurre más** que excisión en grado IV | Mínimo dolor y bajísima morbilidad; no reseca piel externa |

**Regla técnica:** la antigua resección circunferencial de **Whitehead** está proscrita por producir **ectropión mucoso («ano húmedo»)** y estenosis severa. Preservar siempre puentes de anodermo sano e integridad del esfínter interno.

### Trombosis hemorroidal externa aguda y situaciones especiales
Cursa con dolor súbito continuo y tumoración violácea firme y tensa en el margen anal [Tratado AMCG 3ª ed., Cap. 153; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 53]:
- **<72 horas del inicio:** **escisión quirúrgica elíptica completa** bajo anestesia local en consultorio o urgencias (alivio inmediato). **Jamás hacer incisión simple con evacuación del coágulo** (tasa de **retrombosis de 30–40%**).
- **>72 horas del inicio:** el trombo ya se organiza y el dolor cede → **manejo conservador** (analgesia, baños de asiento, ablandadores), salvo dolor intratable o ulceración sangrante.
- *Discrepancia bibliográfica auditada:* **Tratado AMCG (3ª ed.)** propone ventana de **48 horas**, mientras **Schwartz (11ª ed.), Sabiston (21ª ed.) y ASCRS** fijan el límite en **72 horas** (estándar habitual en guardias).
- **Situaciones especiales:** en el **embarazo**, manejo conservador (resuelven tras el parto; cirugía solo ante trombosis severa temprana o necrosis). En **Crohn perianal activo**, evitar hemorroidectomía excisional (alto riesgo de úlceras refractarias y sepsis). En hemorroides internas **estranguladas con necrosis**, la hemorroidectomía urgente selectiva respetando puentes viables es segura.

### Complicaciones de la cirugía hemorroidal
- **Retención aguda de orina (5–20%):** complicación temprana **más frecuente**; prevenir restringiendo líquidos IV transoperatorios y con analgesia multimodal (bloqueo pudendo, AINE, evitar exceso de opioides).
- **Hemorragia (1–2%):** **primaria (<24 h)** por falla técnica del pedículo (revisión en quirófano); **secundaria (días 7–14)** por caída de escara o infección (taponamiento con Foley, hemostasia endoscópica o revisión).
- **Estenosis anal:** por resección excesiva sin puentes cutáneos; formas rígidas requieren **anoplastia deslizante (V-Y o en casa)**.
- **Sepsis perineal post-banda:** urgencia potencialmente mortal sospechada ante la tríada **dolor anal progresivo severo + fiebre + retención urinaria** a los 2–7 días → antibióticos IV y exploración urgente.

### Perlas de examen
- Cojinetes de Thompson en litotomía a las **3, 7 y 11 del reloj**; aportan 15–20% del tono basal.
- **Internas** (arriba línea dentada) sangran rojo brillante **sin dolor**; **externas trombosadas** (abajo) **duelen mucho**.
- **≥45 años** o datos de alarma + rectorragia = **colonoscopia completa obligatoria**.
- **Ligadura con banda elástica (Barron):** más eficaz en consultorio (grados I–III), colocar **≥1–2 cm arriba de línea dentada**; **escleroterapia** preferida en anticoagulados.
- **Ferguson / Milligan-Morgan** tienen la **menor recurrencia** y son el estándar en grado IV y mixtas; **PPH (Longo)** recurre más y arriesga fístula rectovaginal/sepsis pélvica.
- **Trombosis externa:** **<72 h** (48 h AMCG) → **escisión elíptica completa** (no incisión simple); **>72 h** → manejo conservador.
- **Retención urinaria** = complicación temprana #1; **dolor creciente + fiebre + retención urinaria** post-banda = sospechar **sepsis pélvica**.

### Referencias
Tratado de Cirugía General AMCG, 3ª ed., Cap. 153. Schwartz, Principios de Cirugía, 11ª ed., Cap. 29. Sabiston, Tratado de Cirugía, 21ª ed., Cap. 53. Hawkins AT, et al. ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids. Dis Colon Rectum 2024;67:614–623. Watson AJ, et al. (eTHoS Trial) Lancet 2016;388:2375–2385.
`),
    sheet('rec-abscesos-fistulas', '03', 'Abscesos anorrectales y fístulas anales', `
## Abscesos anorrectales y fístulas anales

### Teoría criptoglandular y espectro de la sepsis anorrectal
El absceso anorrectal y la fístula anal son dos estadios de un mismo proceso: fase **aguda** supurativa y trayecto **crónico** [Tratado AMCG 3ª ed., Cap. 154; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 53; ASCRS 2022]. Más del **90–95%** siguen la **teoría criptoglandular de Eisenhammer y Parks**: la obstrucción de una **glándula anal intramural** que desemboca en una **cripta de Morgagni** (línea dentada, predominio posterior) genera infección polimicrobiana (*E. coli*, *B. fragilis*, *Peptostreptococcus*, *Staphylococcus*) en el plano interesfintérico, disecando los planos de menor resistencia. El **5–10%** restante responde a causas secundarias: **enfermedad de Crohn**, tuberculosis, actinomicosis, hidradenitis, radiación, cuerpo extraño, trauma o **neoplasia maligna**. Entre **30 y 50%** de los abscesos drenados evolucionan a fístula anal crónica.

### Clasificación anatómica de abscesos y principios de drenaje
| Tipo anatómico | Frecuencia | Cuadro clínico clave | Vía de drenaje obligatoria |
| :--- | :--- | :--- | :--- |
| **Perianal** | **~60%** | Dolor pulsátil, eritema y masa fluctuante junto al margen anal | **Incisión elíptica o cruciforme lo más cerca posible del margen anal** |
| **Isquiorrectal** | **20–25%** | Dolor glúteo profundo, fiebre y toxicidad; induración cutánea tardía | Incisión amplia en fosa isquiorrectal **lo más medial posible** bajo anestesia |
| **Interesfintérico** | **~5%** | **Dolor anal severo SIN signos externos visibles**; masa dolorosa al tacto rectal | **Drenaje interno transanal** (esfinterotomía interna limitada en quirófano) |
| **Supraelevador** | **3–4%** | Dolor pélvico profundo, fiebre, tenesmo, síntomas urinarios; confirmar por TC/RMN | **Según origen** (interesfintérico → transrectal; isquiorrectal → piel isquiorrectal; pélvico → percutáneo/abdominal) |
| **En herradura** | <5% | Extensión bilateral de una fosa isquiorrectal a otra vía **espacio posanal profundo de Courtney** | **Procedimiento de Hanley modificado** (apertura posanal + drenaje cripta posterior + contraincisiones laterales) |

#### Reglas quirúrgicas inviolables del drenaje
1. **Urgencia sin demora:** todo absceso exige **incisión y drenaje inmediato** bajo anestesia adecuada (local para perianales pequeños superficiales; bloqueo regional o anestesia general para isquiorrectales, interesfintéricos, supraelevadores, en herradura o pacientes ansiosos/diabéticos); **nunca esperar fluctuación** ni tratar solo con antibióticos, pues el retraso propicia extensión a espacios profundos, destrucción esfinteriana y sepsis necrosante.
2. **Incisión lo más cerca posible del margen anal:** realizar una incisión elíptica o cruciforme resecando un pequeño huso cutáneo para impedir el cierre precoz de los bordes y favorecer drenaje continuo. Dado que **40–50%** desarrollarán fístula secundaria, acercar el drenaje al borde anal garantiza un **trayecto fistuloso corto** que involucra una fracción mínima del esfínter externo y permite una fistulotomía simple y segura en el futuro [Tratado AMCG 3ª ed., Cap. 154; Schwartz 11ª ed., Cap. 29].
3. **Absceso supraelevador:** su vía de drenaje depende estrictamente de su etiología: si asciende desde el **espacio interesfintérico**, drenarlo por vía **transrectal interna** (drenarlo a través de la fosa isquiorrectal perforando el elevador crea una **fístula supraesfintérica iatrógena**); si asciende desde la **fosa isquiorrectal**, drenarlo por vía **cutánea isquiorrectal** (drenarlo hacia el recto crea una **fístula extraesfintérica**); y si proviene de una **causa pélvica intraabdominal** (diverticulitis, apendicitis, Crohn), realizar drenaje percutáneo guiado por TC o transabdominal tratando el foco primario.
4. **Antibióticos y taponamiento:** tras drenaje completo en inmunocompetentes sin celulitis extensa no se requieren antibióticos (ASCRS 2022 / WSES 2021). Son obligatorios ante **celulitis extensa, diabetes, inmunosupresión/VIH, neutropenia, sepsis o prótesis valvular cardíaca**. Evitar el taponamiento repetido y doloroso con gasa (el ensayo **PPAC2**, BMJ 2022, mostró mayor dolor sin beneficio en curación ni reducción de fístulas); bastan drenaje amplio, limpieza y baños de asiento frecuentes. Tampoco debe sondearse agresivamente con estiletes metálicos durante el drenaje agudo por alto riesgo de crear falsas vías.

### Gangrena de Fournier (fascitis necrosante perineal)
Fascitis necrosante polimicrobiana sinérgica rápidamente progresiva de periné y genitales externos, frecuente tras absceso anorrectal o trauma uretral en **diabéticos (factor #1)**, obesos, alcohólicos o inmunosuprimidos [WSES-AAST 2021]. Combina aerobios (*E. coli*, *Klebsiella*, *Streptococcus*, *S. aureus*) y anaerobios (*Bacteroides*, *Clostridium*), causando trombosis microvascular y necrosis rápida a lo largo de las fascias de **Colles, Dartos y Scarpa**.
- **Alarma clínica:** **dolor desproporcionado**, edema leñoso que rebasa el eritema, **crepitación subcutánea**, ampollas hemorrágicas, exudado grisáceo fétido («agua de lavaplatos») y choque séptico. **LRINEC ≥6** apoya el diagnóstico pero no lo excluye; **ninguna imagen debe demorar el quirófano**.
- **Manejo urgente (mortalidad 20–40%):** reanimación + antibióticos IV inmediatos (**meropenem o piperacilina-tazobactam + vancomicina/linezolid + clindamicina** antitoxina) + **desbridamiento radical inmediato** hasta tejido sangrante sano con **revisión programada a las 24–48 h** + derivación urinaria y **colostomía selectiva** ante destrucción esfinteriana o contaminación fecal continua, seguido de terapia de presión negativa (VAC) y reconstrucción diferida.

### Fístulas anales: evaluación, regla de Goodsall y clasificación de Parks
Trayecto fibroso entre un **orificio interno** (cripta anal) y uno **externo** (piel perianal) que produce secreción purulenta crónica y abscesos recurrentes. En fístulas **complejas, recurrentes, anteriores en mujeres o de Crohn**, la **RMN pélvica** es el estándar de oro (>90% sensibilidad/especificidad), complementada por **US endoanal 3D con H₂O₂** y exploración bajo anestesia (EBA).
- **Regla de Goodsall-Salmon:** trazando una línea transversal por el centro anal:
  - **Orificio externo ANTERIOR:** trayecto **radial recto y corto** hacia la cripta más cercana.
  - **Orificio externo POSTERIOR:** trayecto **curvilíneo** convergente hacia la **línea media posterior (hora 6)**.
  - **Excepciones críticas:** todo **orificio anterior a >3.0 cm del margen anal** suele curvarse hacia la línea media posterior; también falla en fístulas en herradura anteriores, fístulas múltiples, Crohn y neoplasias.

| Tipo de Parks (1976) | Frecuencia | Relación con el complejo esfinteriano | Complejidad (ASCRS 2022) |
| :--- | :--- | :--- | :--- |
| **Interesfintérica** | **~70%** | Cruza EAI y desciende por espacio interesfintérico sin afectar EAE | Generalmente **simple** |
| **Transesfintérica** | **~25%** | Cruza EAI y **EAE** hacia fosa isquiorrectal (baja <30% EAE; alta >30% EAE) | Simple si baja; **compleja** si >30% EAE o anterior en mujer |
| **Supraesfintérica** | **~4%** | Asciende interesfintérica, **rodea el puborrectal por arriba** y perfora el elevador | **Compleja** (alto riesgo de incontinencia) |
| **Extraesfintérica** | **~1%** | Comunica piel con recto **por fuera de todo el aparato esfinteriano** (trauma, Crohn, iatrógena) | **Compleja** (tratar causa primaria) |

Se consideran **fístulas complejas** aquellas con >30% del EAE, supra/extraesfintéricas, **anteriores en mujeres**, trayectos múltiples/herradura, rectovaginales, Crohn, radioterapia previa o incontinencia basal.

### Tácticas quirúrgicas en fístulas anales y fístulas en Crohn
El objetivo es erradicar el trayecto **preservando la continencia fecal**:
1. **Fistulotomía:** apertura longitudinal y legrado; indicada **exclusivamente en fístulas simples bajas (<25–30% EAE)** con continencia intacta (evitar en fístula anterior en mujeres). Curación **>90–95%**.
2. **Setón de drenaje (laxo):** silastic/seda sin tensión para controlar sepsis y madurar el trayecto 6–12 semanas antes de cirugía preservadora (o definitivo en Crohn complejo). El **setón cortante** ocasiona incontinencia en **12–35%** y hoy está desaconsejado salvo excepciones.
3. **Técnica LIFT (*Ligation of Intersphincteric Fistula Tract*):** ligadura y sección del trayecto en el plano interesfintérico **sin cortar EAI ni EAE**; curación **70–80%** con incontinencia **<1–2%**; primera línea preservadora en fístulas transesfintéricas altas maduras [ASCRS 2022; Sabiston 21ª ed., Cap. 53].
4. **Colgajo de avance endorrectal:** cierre del orificio interno cubierto por colgajo vascularizado de mucosa/submucosa/muscular superficial rectal; curación **60–80%**, útil en altas y rectovaginales si **no hay proctitis activa** (alteración leve de continencia ~10–15%).
5. **Otras técnicas preservadoras:** pegamento de fibrina, tapón bioprostético, VAAFT y láser (FiLaC) preservan esfínteres pero curan menos (30–60%).
6. **Fístulas en enfermedad de Crohn:** evaluar primero **proctitis activa** mediante rectoscopia/colonoscopia y RMN pélvica (proctitis activa contraindica colgajo o fistulotomía). Manejo combinado: drenaje de colecciones + **setón laxo** + antibióticos (ciprofloxacino/metronidazol) + **terapia biológica anti-TNF (infliximab/adalimumab)** (cierre 50–65%; células madre mesenquimales —darvadstrocel— como opción). Solo en remisión mucosa sostenida se retira el setón o se intenta LIFT/colgajo; en destrucción perineal refractaria, derivación o proctectomía.

### Perlas de examen
- **>90–95%** de abscesos/fístulas son **criptoglandulares**; absceso más frecuente: **perianal (60%)**; fístula de Parks más frecuente: **interesfintérica (70%)**.
- Drenar todo absceso de urgencia **lo más cerca posible del margen anal** (acorta la eventual fístula en el 40–50% que la desarrolla); no esperar fluctuación ni dar antibióticos solos.
- Dolor anal severo con piel normal = **absceso interesfintérico** (drenaje transanal). En **supraelevador**, la vía depende estrictamente de su origen.
- **Gangrena de Fournier:** dolor desproporcionado + crepitación en diabético → **desbridamiento radical inmediato + meropenem/pip-tazo + vancomicina + clindamicina**.
- **Goodsall-Salmon:** anterior → trayecto recto radial; posterior o **anterior >3 cm del margen** → curvo a línea media posterior (hora 6).
- **Fistulotomía** solo en simples bajas (<25–30% EAE); en altas o **anteriores en mujeres**, preferir **LIFT (70–80%)** o **colgajo de avance**.
- **Crohn perianal:** **drenaje + setón laxo + anti-TNF (infliximab)**; nunca operar agresivamente con proctitis activa.

### Referencias
Tratado de Cirugía General AMCG, 3ª ed., Cap. 154. Schwartz, Principios de Cirugía, 11ª ed., Cap. 29. Sabiston, Tratado de Cirugía, 21ª ed., Cap. 53. Gaertner WB, et al. ASCRS Clinical Practice Guidelines for Anorectal Abscess, Fistula-in-Ano, and Rectovaginal Fistula. Dis Colon Rectum 2022;65:964–985. Tarasconi A, et al. Anorectal emergencies: WSES-AAST guidelines. World J Emerg Surg 2021;16:48.
`),
    sheet('rec-fisura-pilonidal', '04', 'Fisura anal y enfermedad pilonidal', `
## Fisura anal y enfermedad pilonidal

### Fisura anal: localización y fisiopatología isquémica
La **fisura anal** es una úlcera longitudinal lineal del **anodermo** (epitelio escamoso del conducto anal distal, altamente sensible por inervación pudenda), extendida desde el margen anal cutáneo hasta la línea dentada [Tratado AMCG 3ª ed., Cap. 154; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 53; ASCRS 2023]. Afecta a varones y mujeres por igual con pico en adultos jóvenes y de mediana edad, y constituye una de las causas más frecuentes de dolor anal agudo en consulta y urgencias.
- **Localización primaria vs secundaria (regla diagnóstica cardinal):** más del **90%** de las fisuras primarias (casi 99% en varones y ~85–90% en mujeres) asientan en la **línea media posterior (hora 6)**, mientras que alrededor del **10% en mujeres** aparece en la **línea media anterior (hora 12)**, frecuentemente tras trauma obstétrico del tabique rectovaginal. Por el contrario, toda fisura **lateral (horas 3 o 9), múltiple, indolora, de bordes socavados o refractaria** al manejo estándar obliga de inmediato a investigar una causa secundaria: **enfermedad de Crohn** (causa secundaria #1), **VIH** (úlceras idiopáticas, citomegalovirus o herpes simple), **sífilis** (chancro anal), **tuberculosis**, leucemia/neutropenia y **carcinoma epidermoide anal**. Estas lesiones **jamás deben llevarse a esfinterotomía ciega** sin antes efectuar exploración bajo anestesia (EBA), biopsia de los bordes, serologías/cultivos y colonoscopia según el contexto clínico.
- **Fisiopatología (círculo vicioso hipertonía–isquemia):** suele iniciarse con el trauma mucocutáneo por heces duras y voluminosas (o episodios de diarrea explosiva irritativa). Mientras que la mayoría de las fisuras agudas epitelizan en días, en la fisura crónica el dolor lacerante somático desencadena un **espasmo reflejo persistente del esfínter anal interno (EAI)**, elevando la presión basal de reposo a **>90–100 mmHg** (normal 50–70 mmHg). Los estudios angiográficos y Doppler han demostrado que la **comisura posterior posee la menor densidad arteriolar de todo el anodermo** (las ramas terminales de las arterias rectales inferiores atraviesan perpendicularmente el EAI). La hipertonía sostenida colapsa dichas arteriolas perforantes, produce **isquemia microvascular relativa** y perpetúa la ulceración. En consecuencia, todo tratamiento eficaz de la fisura primaria persigue **romper el espasmo del EAI para restablecer la perfusión tisular**.

### Cuadro clínico: aguda vs crónica (tríada de Brodie)
El síntoma patognomónico es el **dolor anal intenso, lacerante o cortante («como paso de vidrios»)** desencadenado al defecar y que persiste entre 30 minutos y varias horas tras la evacuación por espasmo esfinteriano, acompañado de **rectorragia rojo brillante escasa** (estrías en el papel o superficie fecal). El temor al dolor induce estreñimiento voluntario que endurece aún más el bolo fecal y agrava el desgarro.
- **Aguda (<6–8 semanas):** desgarro superficial nítido de bordes planos, blandos y rojos, sin cambios fibrosos.
- **Crónica (>6–8 semanas — Tríada de Brodie):** (1) **papila anal hipertrófica proximal** en la línea dentada, (2) **úlcera lineal profunda de bordes indurados sobreelevados con fibras musculares circulares blancas del EAI visibles en su fondo**, y (3) **plicoma o hemorroide centinela distal** en el margen anal (a menudo confundido por el paciente con hemorroides).
- **Regla exploratoria:** separar suavemente los glúteos para exponer la comisura posterior; en una fisura aguda muy dolorosa **no forzar tacto rectal ni anoscopia en consultorio** sin anestesia tópica o sedación (si existe duda diagnóstica o sospecha de absceso oculto/neoplasia, programar EBA).

### Tratamiento escalonado de la fisura anal
| Escalón | Esquema / técnica | Curación | Ventajas y riesgos clave (ASCRS 2023) |
| :--- | :--- | :--- | :--- |
| **1. Conservador** | Fibra soluble **25–35 g/día**, agua 2–3 L/día, ablandadores osmóticos y **baños de asiento tibios** 10–15 min 2–3 veces/día | **50–80% agudas** (~35% crónicas) | Base universal obligatoria; relaja el EAI vía reflejo somatovisceral térmico |
| **2. Calcioantagonistas tópicos (1ª línea)** | **Gel de diltiazem 2%** o **nifedipino 0.2–0.3%** aplicado c/12 h por **6–8 semanas** | **65–75%** (hasta 80%) | **Preferidos sobre nitratos:** eficacia igual o superior con **cefalea <5%** y rara dermatitis perianal |
| **3. Nitratos tópicos** | **Nitroglicerina 0.2–0.4%** tópica c/12 h por 6–8 semanas | **50–68%** | Donador de óxido nítrico; limitado por **cefalea pulsátil (20–40%)** e hipotensión (evitar con inhibidores PDE-5) |
| **4. Toxina botulínica A** | Inyección de **20–50 U** (hasta 80–100 U) en el EAI bilateral o plano interesfintérico | **60–80%** (efecto 3–4 meses) | «Esfinterotomía química reversible»; ideal ante falla a tópicos o **alto riesgo de incontinencia** (multíparas, cirugía previa) |
| **5. Esfinterotomía lateral interna (ELI)** | Sección controlada del **tercio distal del EAI** (hasta la línea dentada o vértice proximal de la fisura) en hora 3 o 9, técnica abierta o cerrada | **>95% (estándar de oro)** | Alivio en 24–48 h; recurrencia <5%; incontinencia transitoria a gases ~5–10% y a **sólidos <1%** |
| **6. Colgajo de avance cutáneo (anoplastia)** | Colgajo dermograso **V-Y o en casa (*house flap*)** avanzado sobre la fisura desbridada **sin cortar esfínter** | **80–90%** | **Elección en fisuras crónicas con esfínter normotónico o hipotónico** (trauma obstétrico, multíparas, ELI previa o incontinencia basal) |

**Proscripciones y matices técnicos:** la **dilatación anal manual forzada (procedimiento de Lord)** está formalmente proscrita por provocar desgarros musculares impredecibles e incontinencia permanente (>20–30%). La esfinterotomía **nunca debe realizarse en la línea media posterior** (genera la deformidad en «ojo de cerradura» o *keyhole deformity* con manchado crónico); se practica lateralmente en forma «a medida» (dividiendo únicamente la longitud de la fisura y nunca por arriba de la línea dentada), en particular en mujeres cuyo conducto anal es más corto.

### Enfermedad pilonidal: etiopatogenia y presentación clínica
La **enfermedad pilonidal (quiste o seno pilonidal sacrococcígeo)** es una entidad inflamatoria crónica adquirida del tejido celular subcutáneo en el fondo de la **hendidura interglútea**, predominante en **varones jóvenes (15–30 años, relación 3–4:1)** con hirsutismo, surco profundo, obesidad, sudoración abundante y sedentarismo o microtrauma repetido («enfermedad del conductor de jeep») [Tratado AMCG 3ª ed., Cap. 155; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 53; ASCRS 2019].
- **Teoría adquirida (Bascom y Karydakis):** descartado su origen congénito, **Bascom** demostró que el estiramiento y la presión negativa al caminar/sentarse en un surco profundo dilatan y rompen folículos pilosos originando **poros primarios en la línea media**. **Karydakis** integró los tres determinantes: **pelo suelto × fuerza de inserción × vulnerabilidad cutánea del surco**. Los pelos incrustados inducen una reacción granulomatosa a cuerpo extraño (cavidad sin revestimiento epitelial verdadero), infección secundaria y trayectos fistulosos que emergen casi siempre en sentido **cefálico y lateral** (si el orificio está muy cerca del ano, descartar fístula anal criptoglandular).
- **Cuatro escenarios clínicos:** (1) poros asintomáticos en línea media (**no requieren cirugía**, solo higiene); (2) **absceso pilonidal agudo** (masa fluctuante dolorosa y febril); (3) enfermedad crónica/recurrente con supuración y trayectos secundarios; y (4) degeneración maligna excepcional tras >20 años de inflamación crónica a **carcinoma epidermoide invasor** (enviar siempre piezas resecadas a patología y biopsiar úlceras friables atípicas).

### Tratamiento del absceso pilonidal y cirugía de la enfermedad crónica
1. **Absceso pilonidal agudo:** **incisión y drenaje urgente longitudinal y LATERAL (1.5–2 cm fuera de la línea media)** bajo anestesia local o sedación —nunca en el fondo del pliegue— acompañado de **curetaje meticuloso de pelos y tejido de granulación** (cura definitiva sin reoperación en 40–60% del primer episodio). **Evitar excisión radical definitiva en el episodio agudo**; antibióticos únicamente ante celulitis extensa, inmunosupresión o sepsis.

2. **Enfermedad crónica y recurrente (guías ASCRS 2019):**
| Estrategia | Técnica | Ventajas | Recurrencia / límites |
| :--- | :--- | :--- | :--- |
| **Mínimamente invasivas (*Pit picking* de Bascom, técnica de Gips, EPSiT, láser)** | Excisión puntual con sacabocados/bisturí de poros de línea media + drenaje lateral y curetaje o ablación endoscópica ambulatoria | Mínimo dolor y retorno laboral en 2–5 días; excelente opción en enfermedad primaria limitada | Recurrencia **10–20%**; inadecuada en enfermedad extensa o múltiples recidivas |
| **Excisión abierta o marsupialización** | Resección completa dejando herida abierta para segunda intención (o suturando bordes cutáneos al fondo fibroso) | Baja tasa de infección aguda; técnica simple | **Cicatrización prolongada (6–12 semanas)**, curaciones diarias laboriosas; recurrencia 8–15% |
| **Cierre primario EN LA LÍNEA MEDIA** | Sutura directa borde a borde en el fondo hipóxico del surco | Ninguna ventaja duradera | **DESACONSEJADA (ASCRS 2019):** dehiscencia >30% y **recurrencia 20–35%** por tensión y humedad |
| **Colgajo de Karydakis (*off-midline*)** | Excisión elíptica asimétrica + movilización de colgajo contralateral que **lateraliza la sutura 2 cm** y aplana el surco | Cicatrización rápida (~2 semanas) y reproducible; primera línea en crónica moderada | **Recurrencia <2–5%**; riesgo bajo de seroma o dehiscencia menor |
| **Bascom *Cleft Lift* (elevación del surco)** | Resección cutánea excéntrica (sin profundizar a fascia sacra) + colgajo dermograso que **oblitera completamente la hendidura glútea** con cicatriz lateral | **Estándar de oro en enfermedad compleja, heridas crónicas de línea media que no cicatrizan y recidivas múltiples** | **Recurrencia <2–4%**; mínima tensión profunda y excelente recuperación |
| **Colgajo romboidal de Limberg (modificado)** | Excisión romboidal hasta fascia sacra + transposición glútea con **polo inferior lateralizado fuera de la línea media** | Cobertura ideal para defectos extensos o trayectos bilaterales | **Recurrencia <2–5%**; cicatriz más amplia y leve riesgo de seroma |

- **Prevención posoperatoria:** higiene seca diaria del surco, evitar sedestación prolongada continua, control ponderal y **depilación láser coadyuvante** una vez cicatrizada la herida; evitar el rasurado repetido con rastrillo (asociado paradójicamente a mayor recurrencia por pelos cortos con puntas afiladas).

### Perlas de examen
- **Fisura primaria:** >90% en **línea media posterior (hora 6)** por hipertonía del EAI (>90–100 mmHg) + isquemia. Fisura **lateral o múltiple** → descartar **Crohn, VIH, sífilis, TB o cáncer** con EBA/biopsia.
- **Tríada de Brodie** (>6–8 semanas): papila hipertrófica + úlcera con fibras del EAI + plicoma centinela.
- **1ª línea farmacológica en fisura crónica:** **gel de diltiazem 2%** c/12 h × 6–8 semanas (65–75%, preferido sobre nitroglicerina por evitar cefalea).
- **Estándar quirúrgico en crónica hipertónica:** **ELI** (>95% curación, incontinencia a sólidos <1%). Si **esfínter normo/hipotónico** → **colgajo de avance cutáneo**. **Lord proscrita.**
- **Absceso pilonidal agudo:** **incisión y drenaje lateral fuera de la línea media + curetaje de pelos**.
- **Pilonidal crónica (ASCRS 2019):** **jamás cerrar en línea media** (recurrencia 20–35%); preferir **cierre fuera de línea media** (**Karydakis, Bascom *cleft lift* o Limberg modificado**, recurrencia <2–5%).

### Referencias
Tratado de Cirugía General AMCG, 3ª ed., Caps. 154 y 155. Schwartz, Principios de Cirugía, 11ª ed., Cap. 29. Sabiston, Tratado de Cirugía, 21ª ed., Cap. 53. Davids JS, et al. ASCRS Clinical Practice Guidelines for Anal Fissures. Dis Colon Rectum 2023;66:190–199. Johnson EK, et al. ASCRS Clinical Practice Guidelines for Pilonidal Disease. Dis Colon Rectum 2019;62:146–157.
`),
    sheet('rec-prolapso', '05', 'Prolapso rectal, rectocele y trastornos del piso pélvico', `
## Prolapso rectal, rectocele y trastornos del piso pélvico

### Definición, clasificación y diagnóstico diferencial del prolapso rectal
El **prolapso rectal completo de espesor total (*procidentia*)** es la invaginación circunferencial de todas las capas de la pared rectal a través del conducto anal hacia el exterior [Tratado AMCG 3ª ed., Cap. 156; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 53; ASCRS 2017]. Debe distinguirse con total claridad de dos entidades relacionadas:
1. **Prolapso mucoso parcial:** protrusión exclusiva de la mucosa y submucosa (<3–4 cm) con pliegues dispuestos en sentido **radial**, habitualmente asociado a enfermedad hemorroidal avanzada o cirugía anal previa.
2. **Intususcepción rectal interna (prolapso oculto):** invaginación de espesor total que desciende hacia el conducto anal sin rebasar el margen anal externo; puede causar defecación obstruida o síndrome de úlcera rectal solitaria.

Su presentación epidemiológica es bimodal: el **80 a 90%** corresponde a **mujeres mayores de 60 años** (con antecedente de multiparidad, pujo crónico, histerectomía o prolapso multicompartimental), mientras que en el grupo de **adultos jóvenes (<40 años)** afecta a varones y mujeres casi por igual y se vincula con estreñimiento severo de tránsito lento, trastornos psiquiátricos (fármacos constipantes), síndrome de Ehlers-Danlos o autismo. En la cirugía se reconocen cinco rasgos anatómicos constantes asociados a la *procidentia*: **fondo de saco de Douglas anormalmente profundo**, mesorrecto largo y móvil sin fijación al sacro, colon sigmoides redundante, diastasis de los músculos elevadores del ano y esfínter anal patuloso con neuropatía pudenda por tracción.

| Rasgo clínico exploratorio | Prolapso rectal completo (*procidentia*) | Hemorroides internas prolapsadas grado IV |
| :--- | :--- | :--- |
| **Capas involucradas** | **Todas las capas de la pared rectal** (mucosa, submucosa y muscular) | Cojinetes vasculares submucosos y mucosa anal |
| **Patrón de los pliegues** | **Pliegues mucosos concéntricos anulares** en diana | **Pliegues radiales** separados por surcos longitudinales entre paquetes |
| **Relación con el margen anal** | Existe un **surco circunferencial profundo** palpable entre el cilindro prolapsado y el anodermo | Continuidad directa con el margen anal, **sin surco profundo circunferencial** |
| **Longitud y consistencia** | Cilindro grueso, uniforme, frecuentemente >4–10 cm | Masa lobulada irregular, habitualmente <3–4 cm |

### Evaluación clínica, estudios complementarios y manejo del prolapso estrangulado
El cuadro típico incluye sensación de masa que sale al defecar o caminar, secreción mucosa abundante que irrita la piel perianal, sangrado leve por fricción, **incontinencia fecal (presente en 50–75%)** y **estreñimiento o defecación obstruida (en 25–50%)**. El diagnóstico es **eminentemente clínico**: si el prolapso no se evidencia en decúbito lateral, se pide al paciente pujar en posición sentada sobre el inodoro o tras un microenema de fosfato.

- **Estudios preoperatorios esenciales:** (1) **colonoscopia completa** para descartar una neoplasia o pólipo gigante que actúe como cabeza de invaginación; (2) **evaluación del hábito intestinal** (si existe estreñimiento severo, estudio de tránsito colónico con marcadores radiopacos para definir si conviene añadir resección sigmoidea); (3) **manometría anorrectal y ultrasonido endoanal** en pacientes con incontinencia significativa para documentar función basal; y (4) **cinedefecografía por RM dinámica** cuando se sospecha prolapso multicompartimental asociado (enterocele, cistocele, prolapso de cúpula vaginal) para planear una reparación conjunta con uroginecología.
- **Urgencia quirúrgica: prolapso rectal incarcerado o estrangulado:**
  - Si el segmento prolapsado está edematoso pero **viable (mucosa rosada, sin signos de necrosis ni peritonitis)**, puede intentarse reducción suave bajo sedación aplicando **azúcar granulada abundante sobre la mucosa durante 15–20 minutos** (efecto hiperosmótico que deshidrata rápidamente el edema parietal) y programando reparación definitiva temprana en el mismo ingreso o corto plazo.
  - Si el prolapso es **irreducible, presenta isquemia, necrosis/gangrena o perforación**, está contraindicada la reducción forzada: requiere cirugía de urgencia mediante **rectosigmoidectomía perineal (procedimiento de Altemeier)** si el paciente está estable y el segmento necrótico es accesible por periné, o **resección abdominal tipo Hartmann** si existe peritonitis, choque o compromiso proximal.

### Selección quirúrgica del prolapso rectal: abordaje perineal vs abdominal
La cirugía es el único tratamiento curativo del prolapso completo. Las guías **ASCRS** eligen la vía según la **reserva fisiológica del paciente, la edad, el sexo y la presencia de estreñimiento o incontinencia** [Sabiston 21ª ed., Cap. 53; Schwartz 11ª ed., Cap. 29; ASCRS 2017]:

| Procedimiento | Abordaje y técnica quirúrgica | Paciente ideal | Recurrencia y perfil funcional |
| :--- | :--- | :--- | :--- |
| **Rectopexia ventral laparoscópica con malla (técnica de D'Hoore)** | **Abdominal laparoscópico/robótico:** disección **exclusivamente anterior** en el tabique rectovaginal hasta el piso pélvico (respetando el plano posterior y los ligamentos laterales); fijación de malla biológica o polipropileno al recto distal anterior y al promontorio sacro | **Estándar de elección actual en pacientes aptos** (mujeres y varones); ideal cuando coexisten rectocele o enterocele | **Recurrencia <2–5%**; **no induce estreñimiento de novo** al preservar nervios autonómicos; mejora la incontinencia en >70%; riesgo bajo (~1–2%) de erosión de malla |
| **Rectopexia con resección sigmoidea (Frykman-Goldberg)** | **Abdominal:** movilización rectal posterior + sigmoidectomía con anastomosis colorrectal + rectopexia con sutura al promontorio sacro (sin malla) | Pacientes aptos con **estreñimiento crónico severo y dolicosigmoides** (evitar en diarrea o incontinencia severa sin estreñimiento) | **Recurrencia 2–5%**; mejora significativamente el estreñimiento, pero añade riesgo de fuga anastomótica (~2–3%) |
| **Rectopexia posterior con malla (Wells) o con sutura simple** | **Abdominal:** movilización posterior y fijación al promontorio sacro (en Wells, la malla cubre solo los 2/3 posteriores dejando libre la cara anterior) | Pacientes aptos sin estreñimiento severo (alternativa sin resección) | **Recurrencia 3–7%**; la sección bilateral de ligamentos laterales puede provocar **estreñimiento de novo en 30–50%** |
| **Procedimiento de Altemeier (rectosigmoidectomía perineal)** | **Perineal:** resección transanal de espesor total del rectosigmoides redundante + anastomosis coloanal manual o engrapada + **plastia posterior de elevadores** | **Ancianos frágiles / ASA III–IV** con prolapsos largos (**>4–5 cm**) o prolapso estrangulado | **Recurrencia 10–20%**; realizable bajo bloqueo raquídeo, mínima morbilidad; la plastia mejora la continencia |
| **Procedimiento de Delorme** | **Perineal:** mucosectomía circunferencial del cilindro prolapsado + **plicatura longitudinal (en acordeón) de la capa muscular propia** + reanastomosis mucosa | **Ancianos frágiles** con prolapsos cortos (**<4–5 cm**), prolapso mucoso extenso o **varones jóvenes** que desean riesgo cero de lesión neural pélvica | **Recurrencia 15–25%**; evita entrada a cavidad peritoneal y reduce riesgo de fuga anastomótica grave |

*Notas históricas:* el cabestrillo anterior completo de **Ripstein** cayó en desuso por altas tasas de obstrucción y erosión rectal, y el cerclaje anal de **Thiersch** se reserva solo para paliación extrema en pacientes moribundos que no toleran ninguna anestesia.

### Síndrome de úlcera rectal solitaria (SURS)
Trastorno benigno crónico poco frecuente causado por **trauma isquémico mucoso repetido** secundario a pujo excesivo, intususcepción rectal interna, prolapso oculto o contracción paradójica del puborrectal. A pesar de su nombre, hasta en 30% de los casos las lesiones son múltiples o presentan aspecto polipoide o eritematoso sin úlcera franca, localizándose característicamente en la **pared anterior del recto a 5–10 cm del margen anal**.
- **Diagnóstico obligatorio:** cursa con rectorragia, expulsión de moco, tenesmo y esfuerzo defecatorio prolongado. **Toda úlcera rectal debe biopsiarse generosamente** para descartar adenocarcinoma rectal, enfermedad de Crohn, úlcera por AINE/supositorios o infecciones. El hallazgo histológico patognomónico es la **obliteración fibromuscular de la lámina propia** con hipertrofia y desorganización de la *muscularis mucosae* y colágeno que asciende entre las criptas.
- **Tratamiento:** es inicialmente **médico y conductual**: fibra abundante, ablandadores, evitar el pujo y la digitación, enemas tópicos de sucralfato o 5-ASA y **terapia de biorretroalimentación (*biofeedback*)** (mejora a más del 60% de los pacientes). La **cirugía (rectopexia ventral laparoscópica)** se reserva únicamente para pacientes con prolapso rectal completo o intususcepción severa demostrada refractarios a manejo conservador; la resección local de la úlcera casi siempre recurre si no se corrige el mecanismo mecánico.

### Rectocele, síndrome de defecación obstruida y disinergia del piso pélvico
El **síndrome de defecación obstruida (SDO)** se caracteriza por pujo prolongado, sensación de bloqueo anorrectal, evacuación incompleta y necesidad de **maniobras manuales (digitación vaginal, perineal o anal)** para vaciar el recto. Responde a causas **anatómicas** (rectocele, enterocele, intususcepción) o **funcionales** (**disinergia defecatoria o anismo**: falla en la relajación o contracción paradójica del puborrectal y EAE durante el pujo).
- **Rectocele:** herniación de la pared rectal anterior hacia la luz vaginal posterior por atenuación o desgarro del **tabique rectovaginal** (asociado a parto vaginal instrumentado, histerectomía y pujo crónico). Aunque hasta 40–60% de las mujeres multíparas presentan rectoceles pequeños asintomáticos (<2 cm), se considera **clínicamente significativo** cuando en la **cinedefecografía por RM dinámica** mide **>2 a 3 cm y demuestra atrapamiento de contraste** tras el vaciamiento.
- **Regla de oro del manejo del SDO:** **nunca operar un rectocele sin haber descartado antes anismo/disinergia** mediante manometría y prueba de expulsión del balón, porque operar a una paciente con contracción paradójica fracasa casi invariablemente. El tratamiento inicial es siempre **fibra + laxantes osmóticos + biofeedback del piso pélvico** (eficacia 70–80% en disinergia). Solo si persisten síntomas incapacitantes con rectocele >3 cm con retención documentada y sin disinergia no tratada, se indica reparación quirúrgica: **reparación transvaginal (colporrafia posterior)** o **transperineal** (preferidas cuando hay defecto del cuerpo perineal), **rectopexia ventral con malla** (cuando coexisten intususcepción y enterocele) o reparación transanal selectiva (la resección transanal con engrapadora **STARR** hoy está muy restringida por complicaciones severas como fístula rectovaginal, dolor pélvico crónico y urgencia fecal).

### Incontinencia fecal: evaluación y manejo escalonado
La **incontinencia fecal** (pérdida involuntaria de gases, heces líquidas o sólidas durante ≥1 mes en mayores de 4 años) afecta profundamente la calidad de vida y se clasifica en **pasiva** (escape sin percibirlo, disfunción predominante del EAI o hiposensibilidad rectal), **de urgencia** (incapacidad para diferir la evacuación, disfunción predominante del EAE o pérdida de distensibilidad rectal) y **mixta**. Su causa #1 en mujeres es la **lesión obstétrica del complejo esfinteriano o neuropatía pudenda**; otras causas incluyen cirugía anorrectal previa (fistulotomía, ELI), prolapso rectal, LARS, radioterapia pélvica, diabetes y enfermedades neurológicas.
- **Evaluación:** cuantificar gravedad basal con la **escala de Jorge-Wexner (Cleveland Clinic, 0 = continencia perfecta a 20 = incontinencia total)**; realizar **ultrasonido endoanal 3D** (identifica y mide el ángulo de ruptura del EAI/EAE) y **manometría anorrectal** (presiones basales y de contracción y sensibilidad rectal) [ASCRS Fecal Incontinence 2023].
- **Tratamiento escalonado:**
  1. *Conservador (primera línea):* modificación dietética, **fibra soluble (*psyllium*)** para dar volumen y consistencia a las heces y **loperamida** (disminuye motilidad y aumenta el tono del EAI), que controla los síntomas en >50% de los casos leves-moderados.
  2. *Rehabilitación del piso pélvico:* **biofeedback** con manometría o EMG + ejercicios de Kegel (beneficia a 60–75% de pacientes motivados).
  3. *Neuromodulación de raíces sacras (**SNS**, electrodo implantado en el foramen sacro **S3**):* hoy constituye el **tratamiento quirúrgico de primera línea** tanto en pacientes con esfínter intacto como con defectos esfinterianos moderados (<120–180°). Tiene una fase de prueba de 2 semanas y logra reducción ≥50% de los episodios de incontinencia en **75 a 85%** de los pacientes implantados de forma sostenida a largo plazo.
  4. *Esfinteroplastia anterior por superposición (*overlapping*):* reservada para **defectos anatómicos aislados y bien definidos del EAE** (habitualmente trauma obstétrico en mujeres jóvenes); aunque logra buena continencia inicial (70–80% al año), sus resultados **deterioran progresivamente a los 5–10 años (<40–50%)** por neuropatía pudenda progresiva.
  5. *Opciones de rescate:* irrigación transanal, agentes abultadores submucosos (para incontinencia pasiva leve) y, en casos severos refractarios que destruyen la vida social, **colostomía sigmoidea terminal definitiva**, que devuelve autonomía y calidad de vida al paciente.

### Perlas de examen
- **Prolapso rectal completo (*procidentia*):** **pliegues mucosos concéntricos anulares** y surco profundo circunferencial (diferente a las hemorroides grado IV, que muestran pliegues radiales).
- **Prolapso rectal incarcerado viable:** intentar reducción osmótica aplicando **azúcar granulada** durante 15–20 min; si hay **necrosis o estrangulación** → **Altemeier** o Hartmann urgente sin reducir.
- **Cirugía de prolapso rectal:** en pacientes aptos, el abordaje abdominal laparoscópico tiene **menor recurrencia (2–5%)** —destacando la **rectopexia ventral con malla de D'Hoore** (preserva nervios y evita estreñimiento de novo) y **Frykman-Goldberg** (si coexiste estreñimiento severo y dolicosigmoides)—; en **ancianos frágiles**, abordaje perineal (**Altemeier** para prolapsos largos >4–5 cm; **Delorme** para cortos <4–5 cm).
- **Síndrome de úlcera rectal solitaria:** pared anterior a 5–10 cm; histología con **obliteración fibromuscular de la lámina propia**; biopsiar siempre para excluir cáncer; manejo inicial conservador + biofeedback.
- **Rectocele y SDO:** jamás operar sin descartar **disinergia del piso pélvico (anismo)**, cuyo tratamiento es **biofeedback**, no cirugía.
- **Incontinencia fecal:** evaluar con escala **Wexner**, **US endoanal 3D** y manometría; tras falla a fibra/loperamida/biofeedback, la **neuromodulación sacra (S3)** es el tratamiento invasivo de primera línea con mejores resultados sostenidos a largo plazo.

### Referencias
Tratado de Cirugía General AMCG, 3ª ed., Cap. 156 (Prolapso rectal y trastornos del piso pélvico). Schwartz, Principios de Cirugía, 11ª ed., Cap. 29. Sabiston, Tratado de Cirugía, 21ª ed., Cap. 53. Bordeianou L, et al. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Treatment of Rectal Prolapse. Dis Colon Rectum 2017;60:1121–1131. Bordeianou LG, et al. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Fecal Incontinence. Dis Colon Rectum 2023;66:647–661.
`),
    sheet('rec-benignos', '06', 'Tumores benignos anorrectales, condilomas y displasia anal', `
## Tumores benignos anorrectales, condilomas y displasia anal

### Condilomas acuminados y tumor de Buschke-Löwenstein
Los **condilomas acuminados** son lesiones papilomatosas de transmisión sexual causadas en **>90% por VPH de bajo riesgo (tipos 6 y 11)** [Tratado AMCG 3ª ed., Cap. 157; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 53]. Hasta 20–30% coexiste con serotipos oncogénicos (VPH 16/18), sobre todo en VIH.
- **Evaluación obligatoria:** realizar siempre **anoscopia** (>50% tiene enfermedad intraanal) y tamizaje de ITS (VIH, sífilis, hepatitis B/C). **Biopsiar** toda lesión atípica, indurada, pigmentada, ulcerada, refractaria o en inmunosuprimidos.
- **Tratamiento (recurrencia global 20–50%):**
  - *Domiciliarios (solo piel externa, proscritos en embarazo):* **imiquimod 5%**, **podofilotoxina 0.5%** o sinecatequinas 15%.
  - *En consultorio (externos e intraanales pequeños):* **ácido tricloroacético (TCA) 80–90%** (**seguro en embarazo**) o crioterapia.
  - *Quirúrgicos (enfermedad extensa o intraanal):* **escisión con tijera o electrofulguración** bajo anestesia preservando **puentes cutáneos** para evitar estenosis anal, enviando muestra a patología.

#### Tumor de Buschke-Löwenstein (condiloma gigante / carcinoma verrucoso)
Lesión rara asociada a **VPH 6/11** que forma una masa exofítica gigante en «coliflor», **localmente destructiva** (invade esfínteres, fosa isquiorrectal y produce fístulas/abscesos), con baja metástasis a distancia pero **focos de carcinoma epidermoide invasor en 30–56%** [Sabiston 21ª ed., Cap. 53]. Exige **RMN pélvica** y biopsias profundas; el estándar es **escisión quirúrgica radical R0** con colgajos (o operación de Miles si destruye esfínteres; quimiorradioterapia tipo Nigro si predomina componente epidermoide invasor).

### Displasia anal (AIN / LSIL / HSIL), tamizaje y ensayo ANCHOR
Precursor escamoso del cáncer anal impulsado por **VPH de alto riesgo (16 y 18)** (oncoproteínas E6→p53 y E7→pRb). La nomenclatura **LAST** clasifica la neoplasia intraepitelial anal en **LSIL** (AIN 1, bajo potencial, vigilancia) y **HSIL** (AIN 2 p16+ y AIN 3 / enfermedad de Bowen anal, verdadero precursor maligno) [IANS 2024; ASCRS].

| Elemento | Estándar actual (IANS 2024 / ANCHOR) |
| :--- | :--- |
| **Poblaciones de tamizaje** | **VIH+** (HSH y mujeres trans ≥35 años; mujeres cis y varones heterosexuales con VIH ≥45 años); **HSH VIH− ≥45 años**; mujeres con **cáncer o HSIL vulvar**; **trasplante de órgano sólido** (>10 años) |
| **Método diagnóstico** | **Citología anal** (± VPH alto riesgo) → anormalidad (≥ASC-US) pasa a **Anoscopia de Alta Resolución (HRA)** con ácido acético y Lugol para biopsia dirigida |
| **Ensayo ANCHOR (NEJM 2022)** | En 4,459 personas con VIH y HSIL, el **tratamiento dirigido de la HSIL** (ablación electroquirúrgica/infrarroja, imiquimod o 5-FU tópico) **redujo en 57% la progresión a cáncer anal invasor** |
| **Prevención primaria** | **Vacunación nonavalente contra VPH** (rutinaria hasta 26 años; individualizada hasta 45 años) |

*Enfermedad de Paget perianal:* adenocarcinoma intraepidérmico raro (CK7+ primario cutáneo vs CK20+/CDX2+ secundario a **adenocarcinoma colorrectal sincrónico** en ~30–50%). Exige colonoscopia completa y mapeo en cuadrantes; manejo con escisión local amplia R0 o tratamiento de la neoplasia visceral asociada.

### Adenomas vellosos rectales, síndrome de McKittrick-Wheelock y TEM/TAMIS
Los **adenomas rectales** (tubulares, tubulovellosos y vellosos) constituyen las neoplasias epiteliales benignas más comunes del recto; los **adenomas vellosos sésiles >2–4 cm** presentan foco de adenocarcinoma invasor oculto hasta en **30–40%**, cifra frecuentemente subestimada por las biopsias endoscópicas superficiales (falsos negativos de 20–30%).
- **Síndrome de McKittrick-Wheelock:** cuadro hidroelectrolítico potencialmente mortal desencadenado por un **adenoma velloso rectal o rectosigmoideo gigante (>3–4 cm)** que secreta masivamente **1 a 4 L/día** de moco rico en electrolitos debido a sobreproducción tumoral local de **prostaglandina E2 (PGE2)** y AMPc, en un segmento donde ya no existe mucosa colónica distal capaz de reabsorber el líquido [Sabiston 21ª ed., Cap. 52; Schwartz 11ª ed., Cap. 29]. Su tríada clásica consiste en **diarrea mucosa profusa crónica + depleción severa de volumen con lesión renal aguda prerrenal + hiponatremia, hipopotasemia profunda e hipocloremia** (capaces de inducir arritmias, choque y mortalidad cercana al 100% si no se reseca la lesión). El manejo comprende tres pasos: (1) reanimación hídrica y reposición cuidadosa de potasio y sodio; (2) **indometacina** (inhibidor de la ciclooxigenasa que bloquea la PGE2 y reduce drásticamente el volumen secretor) como puente preoperatorio; y (3) **resección quirúrgica completa curativa** (TEM/TAMIS si es benigno accesible, o resección anterior oncológica si es circunferencial gigante o invasor).
- **Resección local transanal (TEM / TAMIS):** las plataformas de **Microcirugía Endoscópica Transanal (TEM)** y **Cirugía Transanal Mínimamente Invasiva (TAMIS)** con insuflación de CO₂ y óptica laparoscópica permiten resecar con alta precisión lesiones del **recto medio y superior (6 a 15 cm del margen anal)** inaccesibles a la excisión transanal convencional de Parks. Indicaciones principales: (1) adenomas sésiles grandes o recurrentes no resecables en bloque por colonoscopia/EMR; (2) **tumores neuroendocrinos (NET) rectales <1–2 cm, bien diferenciados (G1)**, sin invasión de la muscular propia en USE/RMN ni adenopatías (los NET rectales >2 cm o con invasión muscular requieren TME formal por alto riesgo ganglionar); (3) GIST rectales pequeños seleccionados; y (4) adenocarcinomas **T1 sm1 de bajo riesgo** (hoja 07). Técnicamente se realiza resección **en bloque de espesor total** hasta la grasa mesorrectal con margen macroscópico de 5–10 mm y cierre transversal del defecto parietal (en cara anterior alta por arriba de la reflexión peritoneal, si se abre el peritoneo se cierra herméticamente en dos planos por vía transanal), logrando recurrencia local <5–8% frente a las resecciones fragmentadas.
- *Otras lesiones submucosas benignas:* lipomas, leiomiomas, endometriosis rectal (masas fibrosas anteriores con disquecia cíclica menstrual) y **hemangiomas cavernosos rectales** (rectorragia masiva indolora desde la juventud con flebolitos pélvicos característicos en TC/RMN; **no biopsiar** por riesgo de hemorragia catastrófica).

### Tumores presacros (retrorrectales): regla de no biopsiar y abordaje según S3
El espacio retrorrectal (presacro) está limitado anteriormente por la fascia propia del mesorrecto, posteriormente por la fascia presacra de Waldeyer y el sacro-cóccix, superiormente por la reflexión peritoneal e inferiormente por los elevadores del ano y el músculo coccígeo. Son neoplasias raras (~1 en 40,000 ingresos) ordenadas mediante la **clasificación de Uhlig y Johnson** [Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52]:

| Categoría (Uhlig y Johnson) | Frecuencia | Ejemplos representativos y claves diagnósticas |
| :--- | :--- | :--- |
| **Congénitos** | **~65% (los más frecuentes)** | Quistes de desarrollo (epidermoide, dermoide, duplicación rectal y ***tailgut cyst* / hamartoma quístico retrorrectal** —el más común en mujeres adultas, multilocular, simula fístula perianal recurrente y conlleva riesgo de malignización ~5–10%—); teratoma sacrococcígeo; meningocele sacro anterior («signo de la cimitarra» sacro); **cordoma** (**tumor maligno presacro más frecuente**, derivado de restos de notocorda, destrucción osteolítica sacra medial y crecimiento lento muy recidivante) |
| **Neurogénicos** | ~10% | Schwannoma, neurofibroma, ganglioneuroma, ependimoma (dependientes de raíces sacras) |
| **Óseos** | ~10% | Tumor de células gigantes, osteosarcoma, condrosarcoma, sarcoma de Ewing |
| **Misceláneos** | ~15% | Liposarcoma, GIST retrorrectal, linfoma, metástasis |

- **Diagnóstico e imagen:** el tacto rectal palpa una **masa extrínseca posterior que desplaza una mucosa rectal completamente sana e intacta**. El estudio de elección es la **RMN pélvica** (define contenido quístico vs sólido, invasión sacra/neural, comunicación con canal raquídeo en meningocele y relación con S3), complementada con TC para valorar destrucción ósea.
- **REGLA DE ORO INVIOLABLE: NUNCA BIOPSIAR VÍA TRANSRECTAL** una masa presacra resecable, pues conlleva tres catástrofes: (1) **meningitis bacteriana letal** si se punciona inadvertidamente un meningocele anterior; (2) **infección y abscedación severa** de un quiste de desarrollo estéril que duplica la morbilidad quirúrgica; y (3) **siembra tumoral de la pared rectal** en neoplasias malignas (cordoma/sarcoma), obligando a resecar el recto en bloque. Únicamente en lesiones irresecables o con alta sospecha de linfoma o sarcoma de Ewing que requieran neoadyuvancia se efectúa biopsia **percutánea posterior transsacra/parasacra** (cuyo trayecto cutáneo puede resecarse en bloque).
- **Resección quirúrgica obligatoria (incluso en benignos por riesgo de infección o malignización) guiada por S3:** borde superior **por debajo de S3 → abordaje posterior (Kraske / parasacro)** con coccigectomía (reduce recidiva en quistes/teratomas); **por arriba de S3 → abordaje abdominal anterior** (laparoscópico o abierto); **cruza S3 → abordaje combinado abdominosacro** (conservar al menos una raíz S3 unilateral para mantener función vesical e intestinal; sacrificar S2 bilateral ocasiona vejiga e intestino neurogénicos).

### Hidradenitis supurativa perianal (acné inversa)
Enfermedad inflamatoria crónica supurativa originada en la oclusión folicular y destrucción secundaria de folículos pilosos y glándulas apocrinas en regiones intertriginosas (axilas, ingles, periné y glúteos), estrechamente ligada a **tabaquismo y obesidad**. **Estadios de Hurley:** **Estadio I** (nódulos/abscesos aislados sin tractos ni cicatrices), **Estadio II** (abscesos recurrentes con tractos sinuosos y cicatrices separadas por piel sana) y **Estadio III** (compromiso difuso con múltiples tractos subcutáneos interconectados, induración en panal y cicatrices confluentes sin piel sana). **Clave diferencial quirúrgica:** afecta la piel portadora de glándulas apocrinas y **rara vez comunica con la línea dentada o atraviesa el complejo esfinteriano** (a diferencia de fístulas criptoglandulares y Crohn perianal, aunque pueden coexistir). Manejo: suspensión absoluta del tabaco, pérdida de peso, antibióticos antiinflamatorios (tetraciclinas o clindamicina + rifampicina) y **biológicos anti-TNF (adalimumab) o anti-IL-17 (secukinumab)** en Hurley II–III; cirugía: el drenaje simple solo alivia abscesos agudos; el **destechamiento (*deroofing*)** sirve para tractos limitados, y la **escisión quirúrgica amplia de toda la piel afectada** (respetando esfínteres, con segunda intención/VAC, injertos o colgajos) es el único tratamiento curativo local en Hurley III. Biopsiar toda lesión ulcerada crónica >10–20 años por riesgo de **carcinoma epidermoide (úlcera de Marjolin)** muy agresivo.

### Perlas de examen
- **Condilomas:** VPH **6 y 11**; **anoscopia obligatoria**; en embarazo solo **TCA** o cirugía (proscritos imiquimod/podofilotoxina).
- **Tumor de Buschke-Löwenstein:** localmente destructivo (VPH 6/11), 30–56% con foco epidermoide invasor → **escisión quirúrgica radical R0**.
- **HSIL anal (AIN 2–3, VPH 16/18):** el **ensayo ANCHOR (NEJM 2022)** demostró que tratar la HSIL diagnosticada por **HRA** reduce **57%** el cáncer anal invasor.
- **Síndrome de McKittrick-Wheelock:** adenoma velloso gigante + **diarrea mucosa profusa + lesión renal aguda prerrenal + hiponatremia/hipopotasemia severas** (PGE2); puente con líquidos + **indometacina** → **resección completa**.
- **Tumores presacros:** congénitos #1 (**tailgut cyst** benigno; **cordoma** maligno #1); masa posterior con **mucosa intacta**; **NO biopsiar vía transrectal**; abordaje **posterior (Kraske) bajo S3**, abdominal arriba de S3.
- **Hidradenitis perianal (Hurley I–III):** no cruza esfínteres ni comunica con línea dentada; Hurley III = **adalimumab + escisión amplia**; vigilar úlcera de Marjolin.

### Referencias
Tratado de Cirugía General AMCG, 3ª ed., Caps. 157 y 158. Schwartz, Principios de Cirugía, 11ª ed., Cap. 29. Sabiston, Tratado de Cirugía, 21ª ed., Caps. 52 y 53. Palefsky JM, et al. (ANCHOR) N Engl J Med 2022;386:2273–2282. Stier EA, et al. IANS consensus guidelines. Int J Cancer 2024;154:1694–1702. Hassan I, Wietfeldt ED. Presacral tumors. Clin Colon Rectal Surg 2009;22:84–93.
`),
    sheet('rec-cancer', '07', 'Cáncer de recto y del conducto anal: RMN, TME, TNT, Watch and Wait y protocolo de Nigro', `
## Cáncer de recto y del conducto anal: RMN, TME, TNT, Watch and Wait y protocolo de Nigro

### Cáncer de recto: evaluación inicial y RMN pélvica de alta resolución
El cáncer de recto representa un tercio del cáncer colorrectal (>95% adenocarcinomas), pero su manejo difiere del colon por la estrechez pélvica, cercanía a esfínteres y plexos autonómicos, drenaje venoso dual y alto riesgo de recurrencia locorregional [Tratado AMCG 3ª ed., Cap. 152; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 52; NCCN 2024].

- **Estudio inicial obligatorio:** tacto rectal (altura, movilidad/fijación, circunferencia y relación con puborrectal), **rectosigmoidoscopia rígida** (**recto bajo 0–5 cm, medio 5–10 cm, alto 10–15 cm**), **colonoscopia completa con biopsia** (descarta sincrónico en 3–5%), **TC de tórax, abdomen y pelvis**, **ACE basal** y determinación universal de **dMMR/MSI-H** (los tumores rectales dMMR localmente avanzados alcanzan respuestas clínicas completas extraordinarias con **inmunoterapia anti-PD-1 [dostarlimab]**, evitando incluso QRT y cirugía en protocolos NCCN).
- **RMN pélvica de alta resolución (estándar de oro):** (el USE se reserva como complemento en cT1–cT2 para valorar resección local). Evalúa cinco variables críticas:
  1. **Profundidad T y subestratificación de T3:** invasión mesorrectal milimétrica (**T3a <1 mm, T3b 1–5 mm, T3c 5–15 mm, T3d >15 mm**) y T4 (T4a peritoneo visceral; T4b órganos vecinos/elevadores).
  2. **Invasión venosa extramural (mrEMVI):** tumor en venas mesorrectales; predictor independiente de metástasis a distancia.
  3. **Ganglios mesorrectales (N) y pélvicos laterales:** por morfología (bordes espiculados, señal heterogénea).
  4. **Distancia a la fascia mesorrectal / CRM:** **CRM ≤1.0 mm = amenazado o comprometido (indicación absoluta de neoadyuvancia)**. *Matiz auditado:* la positividad patológica R1 es **≤1.0 mm** en AMCG/Schwartz/Sabiston, pero **Sabiston 21ª ed.** destaca **1.0–2.0 mm** en RMN como margen limítrofe que justifica intensificar con TNT.
  5. **Relación con plano interesfintérico y puborrectal** para decidir preservación esfinteriana vs operación de Miles.

### Escisión Total del Mesorrecto (TME), calidad de Quirke vs R1 y márgenes
La **TME (Richard Heald)** extirpa en bloque el recto y su mesorrecto íntegro envuelto por la **fascia propia recti** en el **«Plano Sagrado» avascular**, reduciendo la recurrencia local histórica de >25–30% a **<5%** [Sabiston 21ª ed., Cap. 52].

| Grado de Quirke | Calidad macroscópica de la pieza | Recurrencia local |
| :--- | :--- | :--- |
| **Grado 1 (Completo)** | Superficie lisa, intacta, defectos <5 mm sin conización | **<4%** |
| **Grado 2 (Casi completo)** | Defectos >5 mm **sin exponer muscular propia** | ~8–12% |
| **Grado 3 (Incompleto)** | Desgarros profundos que exponen *muscularis propria* o conización | **>25–30%** |

- **Distinción auditada (Quirke 3 ≠ R1 automático):** **R1 es estrictamente histopatológico** (células tumorales viables a **≤1.0 mm** del CRM entintado). Un tumor T1 central con desgarro superficial (Quirke 3) puede ser R0 (>1 mm); sin embargo, Quirke 3 **multiplica ×3–5 el riesgo de R1**.
- **Extensión mesorrectal:** **recto medio/inferior (<10–12 cm) → TME completa** hasta puborrectal; **recto superior (>10–12 cm) → TME parcial** seccionando el mesorrecto **5.0 cm debajo del tumor**.
- **Márgenes oncológicos:** **CRM >1.0 mm = R0**. **Margen distal:** 2.0 cm en recto superior/medio; en **recto inferior (<5 cm)** existe discrepancia doctrinal real: **AMCG (3ª ed.)** mantiene **2.0 cm**, mientras **Schwartz (11ª ed.), Sabiston (21ª ed.) y NCCN** validan **1.0 cm in situ** (e incluso **0.5 cm post-neoadyuvancia** con congelación R0) para preservar el esfínter.

### Terapia Neoadyuvante Total (TNT) y estrategia Watch and Wait
En enfermedad localmente avanzada (**cT3–T4, cN+, CRM ≤1 mm o EMVI+**), la **TNT** (quimiorradioterapia + quimioterapia sistémica preoperatorias) es el estándar moderno (NCCN 2024), elevando la **respuesta patológica completa (pCR: ypT0 ypN0) a 28–35%** (vs 12–14% con QRT clásica) [Sabiston 21ª ed., Cap. 52]:

| Ensayo pivotal | Esquema evaluado | Resultado clave |
| :--- | :--- | :--- |
| **RAPIDO** (Lancet Oncol 2021 / 5 años 2023) | RT curso corto (**5×5 Gy**) → QT consolidación (**CAPOX ×6 o FOLFOX ×9**) → TME | Duplicó pCR (28% vs 14%) y bajó metástasis a distancia; a 5 años leve mayor falla local (10% vs 6%, cautela en T4/CRM+) |
| **PRODIGE 23** (Lancet Oncol 2021 / 7 años 2024) | QT inducción (**mFOLFIRINOX ×6**) → QRT curso largo (**50 Gy + capecitabina**) → TME → adyuvancia | Mejoró supervivencia libre de enfermedad, metástasis y **supervivencia global a 7 años**; pCR 28% |
| **OPRA** (JCO 2022 / 2024) | TNT de **inducción** (QT → QRT) vs **consolidación** (QRT → QT) con *Watch and Wait* | **Consolidación (QRT → QT)** logró mayor **preservación de órgano libre de TME (~53–54% vs ~39–41%)** sin pérdida de supervivencia |
| **PROSPECT** (NEJM 2023) | **FOLFOX neoadyuvante** con QRT selectiva vs QRT estándar en cT2N+/T3 sin CRM amenazado | **No inferior** a 5 años; permite evitar radiación en tumores seleccionados de recto medio/alto |

#### Estrategia «Watch and Wait» (Angelita Habr-Gama)
En pacientes con **Respuesta Clínica Completa (cCR)** demostrada a las **8–12 semanas** tras TNT, únicamente bajo protocolo estricto:
- **Criterios de cCR:** (1) tacto rectal liso y elástico sin masas; (2) endoscopia sin tumor ni úlcera (solo cicatriz blanca plana/telangiectasias); (3) **RMN con difusión (DWI) negativa** y sin ganglios sospechosos.
- **Vigilancia auditada:** **Año 1:** tacto y rectoscopia **mensual ×3 meses y luego c/2 meses**, RMN DWI + ACE c/3 meses; **Año 2:** clínica/endoscopia c/3 meses y RMN c/6 meses; **Años 3–5:** clínica/RMN c/6 meses + TC anual. El **recrecimiento local (*regrowth*, 15–25%, 90% en primeros 2 años)** se maneja con **TME de rescate** con supervivencia equivalente (>90%).

### Cirugía reglada y síndrome de resección anterior baja (LARS)
1. **TEM / TAMIS:** exclusivo de **cT1 sm1 de bajo riesgo** (<3 cm, bien/moderadamente diferenciado, sin LVI/PNI ni *budding* alto, R0 >1 mm); hallazgo adverso → TME de completamiento.
2. **Resección Anterior Baja (RAB):** TME + doble engrapado circular (EEA 29–31 mm). **Ileostomía en asa de protección (selectiva, no universal):** indicada ante (a) anastomosis **<5–6 cm del margen**; (b) coloanal/bolsa en «J»; (c) **radioterapia previa**; (d) prueba neumática positiva; y (e) alto riesgo (varón pelvis estrecha, obesidad, albúmina <3.0 g/dL, esteroides, choque). No evita la fuga subclínica, pero **evita sepsis pélvica mortal y reoperación**.
3. **Amputación Abdominoperineal de Miles (ELAPE):** ante invasión de esfínter/puborrectal; colostomía terminal definitiva en FII. La **técnica cilíndrica extralevadora (ELAPE) en posición prona** elimina la conización («cintura»), reduciendo perforación y CRM positivo.
4. **Síndrome LARS (60–80% tras RAB):** frecuencia elevada, urgencia, incontinencia y evacuación fragmentada (*clustering*). **LARS Score (0–42):** 0–20 sin LARS, 21–29 menor, **30–42 mayor**. Escalera terapéutica: dieta/fibra → loperamida → biofeedback → **irrigación transanal (Peristeen)** → neuromodulación sacra o colostomía.

### Carcinoma epidermoide del conducto anal: AJCC 8ª edición y protocolo de Nigro
Ligado en **85–90% a VPH 16/18** (E6→p53, E7→pRb); 85–90% epidermoide; drenaje primario a **ganglios inguinales superficiales** (palpación bilateral obligatoria + PET-TC/RMN) [Tratado AMCG 3ª ed., Cap. 158; Sabiston 21ª ed., Cap. 53; AJCC 8ª ed.].

| Categoría (AJCC 8ª ed.) | Definición exacta |
| :--- | :--- |
| **T1 / T2 / T3** | **T1:** ≤2.0 cm · **T2:** >2.0 a ≤5.0 cm · **T3:** >5.0 cm |
| **T4** | Invade órganos vecinos (**vagina, uretra, vejiga**); **el esfínter anal o elevador NO es T4** |
| **N1a** | Ganglios **inguinales, mesentéricos inferiores o ilíacos internos UNILATERALES** |
| **N1b** | Ganglios **ilíacos externos** |
| **N1c** | Ganglios **inguinales BILATERALES** o combinación de cuencas ganglionares |

- **Primera línea curativa — Protocolo de Nigro (1974):** **IMRT 45–54 Gy** (pelvis, canal anal e ingles) + **5-FU 1,000 mg/m²/día (días 1–4 y 29–32)** (o capecitabina) + **mitomicina C 10–12 mg/m² IV día 1** (y día 29 en RTOG). Control locorregional y curación **80–85% preservando el esfínter** (sobrevida 5 años 70–80%). Evaluar respuesta hasta **24–26 semanas** (no operar ni biopsiar prematuramente si está en regresión).
- **Miles solo como cirugía de rescate:** (1) **persistencia por biopsia positiva a las 24–26 semanas**, o (2) **recurrencia locorregional** comprobada.

### Perlas de examen
- **RMN pélvica** = estándar de oro en cáncer de recto; **CRM ≤1.0 mm** (1–2 mm limítrofe en Sabiston) = neoadyuvancia obligatoria.
- **Quirke 3 ≠ R1 automático** (R1 = tumor ≤1.0 mm del CRM entintado), pero multiplica ×3–5 el riesgo de R1 y sube recurrencia local de <4% a >25–30%.
- **TME completa** en recto medio/bajo (<10–12 cm); **TME parcial (5 cm bajo tumor)** en superior. **Margen distal:** 2 cm medio/alto y **1.0 cm en bajo** (0.5 cm post-neoadyuvancia R0; AMCG 2 cm).
- **TNT (pCR 28–35%):** **RAPIDO** (5×5 Gy + CAPOX/FOLFOX), **PRODIGE 23** (mFOLFIRINOX + QRT), **OPRA** (**consolidación QRT → QT** maximiza preservación de órgano ~53%). En **dMMR**, inmunoterapia anti-PD-1 (dostarlimab).
- **Watch and Wait (Habr-Gama):** cCR con **RMN DWI negativa**; *regrowth* 15–25% (90% en 2 años) → TME de rescate.
- **Ileostomía en RAB:** selectiva (<5–6 cm, coloanal, RT previa, fuga+, alto riesgo). **LARS ≥30 = mayor** (Peristeen).
- **Cáncer anal (VPH 16/18, ingles):** esfínter invadido **no es T4**; **Nigro (IMRT 45–54 Gy + 5-FU + mitomicina C)** cura 80–85%; **Miles solo de rescate** (24–26 semanas).

### Referencias
Tratado de Cirugía General AMCG, 3ª ed., Caps. 152 y 158. Schwartz, Principios de Cirugía, 11ª ed., Cap. 29. Sabiston, Tratado de Cirugía, 21ª ed., Caps. 52 y 53. Bahadoer RR, et al. (RAPIDO) Lancet Oncol 2021;22:29–42. Conroy T, et al. (PRODIGE 23) Lancet Oncol 2021;22:702–715. Garcia-Aguilar J, et al. (OPRA) J Clin Oncol 2022;40:2546–2556. Schrag D, et al. (PROSPECT) N Engl J Med 2023;389:322–334. NCCN Guidelines 2024; AJCC 8th ed.
`),
    sheet('rec-trauma', '08', 'Traumatismo de la región anorrectal y cuerpos extraños rectales', `
## Traumatismo de la región anorrectal y cuerpos extraños rectales

### Mecanismos y evaluación diagnóstica inicial
Las lesiones traumáticas del recto y conducto anal representan solo el **1 a 5% de los traumas abdominales**, pero arrastran una morbimortalidad relevante por la estrechez de la pelvis ósea, la elevada carga bacteriana anaerobia, el riesgo de sepsis pélvica oculta y la frecuente asociación con hemorragia vascular ilíaca, fracturas pélvicas inestables y lesiones urogenitales (vejiga, uretra y vagina) [Tratado AMCG 3ª ed., Cap. 160; Schwartz 11ª ed., Cap. 29; Sabiston 21ª ed., Cap. 53; WSES-AAST 2019]. En trauma civil predominan las **heridas penetrantes (80–85%)** por proyectil de arma de fuego transpélvico o arma blanca; el **trauma cerrado (5–10%)** suele acompañar a **fracturas pélvicas complejas de alta energía** (espículas óseas que desgarran la pared rectal extraperitoneal o cizallamiento perineal); el resto se debe a **empalamientos perineales**, **lesiones iatrógenas** (colonoscopia, termómetros, enemas, biopsias prostáticas), **trauma obstétrico (OASIS)** y **cuerpos extraños rectales**.
- **Evaluación diagnóstica protocolizada (ATLS 10ª ed. + EAST 2016 + WSES 2019):**
  1. **Reanimación ABCDE** prioritaria; ante fractura pélvica abierta e inestabilidad hemodinámica, control inmediato de la hemorragia pélvica (faja pélvica, empaquetamiento preperitoneal o angioembolización).
  2. **Inspección perineal, uretral y vaginal + tacto rectal:** evalúa sangre en dedil (sensibilidad limitada ~50%; **un tacto rectal normal jamás descarta lesión rectal**), tono esfinteriano, defectos parietales, fragmentos óseos o desplazamiento prostático. *Precaución:* ante sospecha de cuerpo extraño de vidrio roto o bordes cortantes, no practicar tacto a ciegas antes de la radiografía.
  3. **Rectosigmoidoscopia rígida o flexible (proctoscopia):** es el **estudio diagnóstico de referencia** (sensibilidad >85–95% en lesiones extraperitoneales) y resulta **obligatoria** en toda herida penetrante pélvica o glútea con trayecto transpelviano, fractura pélvica abierta perineal, empalamiento o sangre en el tacto rectal; en pacientes inestables se ejecuta en quirófano bajo anestesia.
  4. **TC abdominopélvica con contraste IV y rectal (triple contraste)** en pacientes estables: define trayectos balísticos, gas extraluminal perirrectal, extravasación de contraste y lesiones concomitantes. Solicitar **cistografía o uretrografía retrógrada** siempre que haya hematuria, sangre en el meato uretral o herida pélvica anterior.

### Lesión intraperitoneal vs extraperitoneal y clasificación AAST
La distinción anatómica crítica separa las lesiones **intraperitoneales** (tercio superior y cara anterior del tercio medio, por arriba de la reflexión peritoneal del fondo de saco de Douglas: ~7–8 cm en varones y ~5.5–6 cm en mujeres) de las **extraperitoneales** (tercio inferior y caras posterior/laterales del medio), pues cada compartimento sigue principios operatorios propios.

| Grado AAST (recto) | Tipo | Descripción anatómica |
| :--- | :--- | :--- |
| **Grado I** | Hematoma / laceración | Contusión o hematoma sin desvascularización; laceración de espesor parcial (sin perforación) |
| **Grado II** | Laceración | Laceración de espesor total que compromete **<50% de la circunferencia** |
| **Grado III** | Laceración | Laceración de espesor total que compromete **≥50% de la circunferencia** |
| **Grado IV** | Laceración | Laceración de espesor total que **se extiende hacia el periné** |
| **Grado V** | Vascular | **Segmento rectal desvascularizado** |

*(Avanzar un grado en lesiones múltiples hasta grado III).*

### Evolución de las «4 D» históricas a guías EAST (2016) y WSES-AAST (2019)
Durante la Guerra de Vietnam se impuso el dogma de las **«4 D»** para toda herida rectal extraperitoneal: **1) *Diversion*** (colostomía), **2) *Debridement / Direct repair***, **3) *Distal rectal washout*** (lavado distal) y **4) *Drainage presacro***. Ensayos clínicos aleatorizados modernos (**Gonzalez et al.**) y las guías **EAST (Bosarge 2016)** y **WSES-AAST (2019)** demostraron que el lavado distal y el drenaje presacro rutinario son obsoletos y perjudiciales en trauma civil [Sabiston 21ª ed., Cap. 53; EAST 2016; WSES 2019]:

| Escenario / medida | Conducta moderna basada en evidencia (EAST 2016 / WSES 2019) |
| :--- | :--- |
| **Recto intraperitoneal** | Se maneja exactamente igual que **trauma de colon**: en lesiones no destructivas en paciente estable → **reparación primaria en 1 o 2 planos sin estoma**; en destructiva (≥50% o desvascularización) estable sin choque → resección y anastomosis primaria; en paciente **inestable, en choque, control de daños o peritonitis fecal severa** → resección con **colostomía terminal (Hartmann)** |
| **Recto extraperitoneal NO destructivo (AAST I–II)** | Defectos pequeños, limpios y accesibles vía transanal pueden repararse primariamente de forma selectiva (incluso sin derivación en casos muy seleccionados según WSES); ante hematoma perirrectal o duda, derivación proximal segura |
| **Recto extraperitoneal destructivo o inaccesible (AAST III–V)** | **Derivación fecal proximal obligatoria**, prefiriendo **colostomía en asa sigmoidea (o transversa)** sobre Hartmann cuando no se requiere resección (logra derivación funcional completa y simplifica la reconexión). Reparar el defecto solo si es fácilmente alcanzable vía transanal o ya expuesto en laparotomía; **NO disecar planos pélvicos presacros vírgenes** para perseguir perforaciones pequeñas |
| **Drenaje presacro rutinario** | **ABOLIDO / NO RECOMENDADO (EAST / WSES):** no reduce abscesos pélvicos ni mortalidad y **aumenta infecciones profundas, sangrado y daño tisular** (solo en destrucción masiva perineal con contaminación presacra ya expuesta) |
| **Lavado rectal distal retrógrado** | **PROSCRITO:** la irrigación a presión impulsa bacterias y heces a través de la perforación hacia planos presacros estériles, aumentando la sepsis pélvica |
| **Antibióticos y trauma urológico** | Cobertura IV contra gramnegativos y anaerobios limitada a **24 horas** en ausencia de sepsis establecida. Si coexiste **lesión vesical o uretral**, reparar ambos órganos e **interponer un colgajo pediculado de epiplón mayor** entre ambas suturas para prevenir fístulas rectovesicales o rectouretrales |

*Lesión esfinteriana por trauma penetrante o empalamiento:* en heridas limpias tempranas con tejido viable, desbridamiento conservador y **reparación primaria directa**; ante destrucción extensa, edema severo o contaminación fecal masiva, confeccionar **colostomía derivativa**, marcar los cabos musculares con sutura no absorbible, desbridar y realizar **reparación esfinteriana diferida** una vez resuelta la sepsis.

### Lesiones esfinterianas obstétricas (OASIS)
Las **lesiones obstétricas del esfínter anal (*Obstetric Anal Sphincter Injuries*, OASIS)** ocurren en **1 a 6% de los partos vaginales** (factores de riesgo: nuliparidad, parto instrumentado con fórceps o extractor de vacío, macrosomía >4 kg, variedad occipitoposterior y **episiotomía en la línea media**) y representan la **primera causa de incontinencia fecal femenina** [RCOG / ACOG / ASCRS]:

| Clasificación de Sultan | Estructuras comprometidas |
| :--- | :--- |
| **Grado 1 / Grado 2** | **G1:** piel perineal o mucosa vaginal · **G2:** músculos perineales **sin compromiso del esfínter** |
| **Grado 3A / 3B / 3C** | **3A:** <50% grosor del EAE · **3B:** >50% grosor del EAE (EAI intacto) · **3C:** **EAE + EAI** |
| **Grado 4** | **EAE + EAI + mucosa rectal** |

- **Principios de reparación primaria inmediata:** ejecutar en quirófano bajo anestesia adecuada y buena iluminación: (1) suturar primero la **mucosa rectal** (Grado 4) con poliglactina 3-0 o 4-0 continua; (2) identificar y reparar de forma independiente el **EAI** término-terminal con **polidioxanona (PDS) 3-0**; (3) reparar el **EAE** con **PDS 3-0** mediante técnica **término-terminal** (3A/3B parciales) o **por superposición (*overlapping*)** (desgarros completos 3B/3C/4); (4) reconstruir el cuerpo perineal y mucosa vaginal; (5) administrar **dosis única profiláctica de antibiótico IV** (cefalosporina 2ª generación o ampicilina-sulbactam) y **ablandadores fecales osmóticos por 10–14 días** para evitar pujo y dehiscencia. Ante síntomas persistentes a las 6–12 semanas, realizar **US endoanal 3D** y manometría para rehabilitación o esfinteroplastia diferida.

### Manejo de cuerpos extraños rectales
Suelen consultarse de manera tardía por pudor o tras intentos fallidos de autoextracción (autoeróticos, agresión sexual, *body packing* de narcóticos —riesgo mortal por ruptura de paquetes— o objetos ingeridos como espinas de pescado) [Sabiston 21ª ed., Cap. 53; WSES-AAST 2021]:
1. **Evaluación inicial y seguridad:** exploración abdominal cuidadosa buscando **irritación peritoneal** y **radiografía simple AP y lateral de abdomen y pelvis** (determina número, forma, orientación, material, altura respecto a la unión rectosigmoidea y descarta **neumoperitoneo**; TC si objeto radiolúcido o sospecha de perforación contenida en estable). **Jamás efectuar tacto rectal a ciegas si se sospecha vidrio roto o bordes punzocortantes.**
2. **Algoritmo escalonado de extracción (WSES 2021):**
   - **Paso 0 — Perforación, peritonitis o inestabilidad:** **contraindicado cualquier intento transanal** → antibióticos IV de amplio espectro y **laparotomía exploradora directa**.
   - **Paso 1 — Urgencias (objetos bajos sin perforación, éxito 60–75%):** sedación consciente IV y/o bloqueo perianal en litotomía para vencer el espasmo esfinteriano + **presión suprapúbica bimanual** para descender el objeto + pinzas atraumáticas o anoscopio iluminado. Para objetos lisos cilíndricos o de vidrio que generan **efecto de vacío/succión**, pasar una **sonda de Foley (18–22 Fr) más allá del borde proximal, insuflar aire por el canal para romper el vacío e inflar el balón** y traccionar suavemente.
   - **Paso 2 — Quirófano (fracaso en urgencias o cuerpos por arriba del rectosigmoides):** **anestesia general o bloqueo espinal** (relajación esfinteriana máxima) + extracción transanal asistida por **laparoscopia (*milking* abdominal descendente)** sin abrir la luz intestinal.
   - **Paso 3 — Laparotomía:** solo si fracasa el *milking* laparoscópico o hay perforación/necrosis → intentar *milking* manual transanal intraoperatorio y, únicamente si es irreductible, practicar **colotomía en segmento sano** y extracción (cierre primario si pared viable o **Hartmann** si necrosis o contaminación grave).
3. **Paso final obligatorio:** **rectosigmoidoscopia post-extracción inmediata** para descartar laceraciones mucosas profundas, sangrado o perforación oculta, con observación clínica de 12–24 horas cuando exista lesión mucosa significativa.

### Perlas de examen
- **Proctoscopia rígida/flexible** = estudio clave en trauma rectal extraperitoneal (tacto rectal normal **NO descarta** lesión).
- **Trauma rectal intraperitoneal:** igual que colon → **reparación primaria sin estoma** en lesiones no destructivas estables.
- **Extraperitoneal destructivo (AAST III–V):** **derivación proximal (colostomía en asa sigmoidea preferida)**; no disecar planos presacros vírgenes para defectos pequeños.
- **EAST 2016 / WSES 2019:** **drenaje presacro rutinario y lavado rectal distal retrógrado están proscritos** (aumentan sepsis e infecciones profundas).
- **Lesión rectal + vesical/uretral:** reparar ambos órganos e **interponer epiplón mayor**.
- **OASIS (Sultan):** 3A <50% EAE, 3B >50% EAE, 3C EAE+EAI, G4 incluye mucosa rectal → reparación inmediata por capas con **PDS 3-0** + antibiótico + ablandadores.
- **Cuerpo extraño rectal:** radiografía AP/lateral antes del tacto si sospecha vidrio; peritonitis/neumoperitoneo → laparotomía; romper vacío con **sonda de Foley proximal**; **rectosigmoidoscopia post-extracción obligatoria**.

### Referencias
Tratado de Cirugía General AMCG, 3ª ed., Cap. 160. Schwartz, Principios de Cirugía, 11ª ed., Cap. 29. Sabiston, Tratado de Cirugía, 21ª ed., Cap. 53. Bosarge PL, et al. EAST Practice Management Guideline: Penetrating Extraperitoneal Rectal Injuries. J Trauma Acute Care Surg 2016;80:546–551. Di Saverio S, et al. WSES-AAST colorectal injuries guidelines. World J Emerg Surg 2019;14:54. Tarasconi A, et al. WSES-AAST anorectal emergencies. World J Emerg Surg 2021;16:48. RCOG Green-top Guideline No. 29 (OASIS).
`),
  ],
};
