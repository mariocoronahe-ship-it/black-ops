// R4 · tórax y trasplante: desarrollo completo por subtema. Ver hoja.js.
import { sheet } from './hoja.js?v=20261122i';

export const R4B = {
  'ap-r4-torax': [
    sheet('tx-sca', '01', 'Dolor torácico agudo (SCA)', `
## Dolor torácico agudo (SCA)

### Definición y enfoque del cirujano general
El **dolor torácico agudo** exige del residente de cuarto año de Cirugía General una doble competencia: descartar de inmediato las **seis grandes causas letales** — varias de ellas emergencias quirúrgicas absolutas — y coordinar el manejo del **síndrome coronario agudo (SCA)** y de la **lesión miocárdica posoperatoria (MINS)** en pacientes quirúrgicos, donde la hemorragia, la anemia y el estado protrombótico modifican radicalmente las decisiones antitrombóticas y de reperfusión.

El **SCA** abarca el espectro de isquemia miocárdica aguda por reducción súbita del flujo coronario, habitualmente secundaria a ruptura o erosión de una placa aterosclerótica con trombosis intraluminal: **infarto agudo de miocardio con elevación del segmento ST (IAMCEST)**, **infarto sin elevación del segmento ST (IAMSEST)** y **angina inestable (AI)**.

### Diagnóstico diferencial letal del dolor torácico agudo
Antes de anticoagular o trombolizar un dolor torácico deben excluirse las seis causas potencialmente mortales; administrar fibrinolíticos en una disección aórtica o en una ruptura esofágica resulta catastrófico.

| Entidad letal | Perfil clínico clave | Hallazgos y estudio diagnóstico | Conducta inmediata prioritaria |
|---|---|---|---|
| **Síndrome coronario agudo (SCA)** | Opresivo retroesternal irradiado a mandíbula o brazo izquierdo; diaforesis, náusea, disnea; silente en diabéticos y posoperados | **ECG en <10 min** (supradesnivel/infradesnivel ST, T invertida); troponina de alta sensibilidad (hs-cTn) seriada | Código Infarto: reperfusión emergente en IAMCEST; antitrombóticos + estrategia invasiva en IAMSEST |
| **Disección aórtica aguda** | Súbito, intensidad máxima desde el inicio, desgarrante, irradiado a espalda; HTA crónica o Marfan | Asimetría de pulsos o de PAS **>20 mmHg** entre brazos, soplo diastólico aórtico, déficit neurológico; ensanchamiento mediastinal; **angio-TC toracoabdominal** | Control de **FC (<60 lpm) antes de TA (<100–120 mmHg)** con betabloqueador IV (esmolol/labetalol); **Stanford A = cirugía cardiotorácica de emergencia**; Stanford B = manejo médico/TEVAR si complicada |
| **Tromboembolia pulmonar (TEP)** | Pleurítico, disnea súbita, taquipnea, taquicardia, síncope o hemoptisis; posoperado, inmovilizado o cáncer | Hipoxemia con Rx limpia, taquicardia sinusal o S1Q3T3; **angio-TC pulmonar** | Anticoagulación inmediata; reperfusión (trombólisis o catéter) si alto riesgo hemodinámico |
| **Neumotórax a tensión** | Dolor pleurítico, disnea intensa y choque obstructivo; trauma, EPOC, catéter central o ventilación mecánica | Ausencia de murmullo, timpanismo, ingurgitación yugular, desviación traqueal tardía | **Diagnóstico clínico: NO esperar placa.** Descompresión inmediata (4.º–5.º EIC línea axilar anterior/media, ATLS 10.ª ed.) + sonda endopleural |
| **Ruptura esofágica (Boerhaave)** | Dolor retroesternal atroz tras vómitos violentos o endoscopia (tríada de Mackler: vómito, dolor torácico, enfisema subcutáneo) | Enfisema subcutáneo cervical, signo de Hamman, derrame izquierdo con amilasa elevada y pH bajo; **TC o esofagograma con contraste hidrosoluble** | Ayuno, reanimación, antibiótico amplio + antifúngico, drenaje pleural y **reparación quirúrgica primaria** temprana (<24 h) o stent/exclusión |
| **Taponamiento cardiaco** | Disnea, choque obstructivo tras trauma penetrante, disección proximal o cirugía torácica | **Tríada de Beck** (hipotensión, ingurgitación yugular, ruidos apagados), pulso paradójico >10 mmHg; **eFAST/ecocardiograma** (colapso diastólico de VD) | Volumen cauteloso como puente; **pericardiocentesis ecoguiada** o ventana pericárdica/toracotomía urgente si es traumático |

### Fisiopatología y clasificación (Cuarta Definición Universal)
La **Cuarta Definición Universal del Infarto de Miocardio** requiere lesión miocárdica aguda (troponina >percentil 99 con curva de ascenso/descenso) más evidencia clínica, electrocardiográfica o de imagen de isquemia aguda. Para el cirujano es esencial diferenciar el mecanismo:
- **Infarto tipo 1 (aterotrombótico):** ruptura o erosión de placa coronaria con trombosis oclusiva (IAMCEST) o suboclusiva (IAMSEST); requiere antitrombóticos plenos y revascularización.
- **Infarto tipo 2 (desequilibrio aporte/demanda):** isquemia sin trombosis de placa, detonada por hemorragia quirúrgica, anemia aguda, taquicardia, hipotensión, sepsis o hipoxemia. **Predomina en el posoperatorio** y exige corregir primero el detonante fisiológico (hemostasia, transfusión, control de frecuencia y perfusión) antes de anticoagular agresivamente.
- **IAMCEST vs IAMSEST vs angina inestable:** el IAMCEST refleja oclusión epicárdica transmural completa con elevación persistente del ST (≥1 mm en ≥2 derivaciones contiguas; en V2–V3 ≥2 mm en varones ≥40 años, ≥2.5 mm en <40 años y ≥1.5 mm en mujeres) o equivalentes (depresión ST en V1–V3 con R alta por infarto posterior; elevación en aVR con depresión difusa por lesión de tronco principal; bloqueo de rama nuevo con criterios de Sgarbossa modificados). El IAMSEST presenta necrosis sin elevación persistente del ST; la angina inestable cursa con troponinas seriadas negativas.

### Diagnóstico inicial y estratificación
1. **ECG de 12 derivaciones:** obtener e interpretar en **<10 minutos** del primer contacto. Repetir cada 15–30 min si el inicial no es diagnóstico. En infarto inferior (DII, DIII, aVF) tomar siempre **derivaciones derechas (V3R–V4R)** para detectar extensión al ventrículo derecho (donde los nitratos están contraindicados) y posteriores (V7–V9).
2. **Troponinas de alta sensibilidad (hs-cTnI / hs-cTnT):** biomarcador de elección (reemplaza a CK-MB). Las **guías ESC 2023** recomiendan algoritmos rápidos **0 h/1 h** (preferido) o **0 h/2 h** para descartar o confirmar IAMSEST. En **IAMCEST jamás se retrasa la reperfusión esperando troponinas**.
3. **Complementarios y escalas:** biometría hemática (descartar anemia o trombocitopenia antes de antiagregar), química, electrolitos, coagulación, radiografía portátil y ecocardiograma a pie de cama ante inestabilidad o sospecha de complicación mecánica. El puntaje **GRACE** estratifica riesgo en IAMSEST (>140 indica estrategia invasiva temprana <24 h); **HEART** apoya el triaje en urgencias; **Killip-Kimball (I–IV)** clasifica la insuficiencia cardiaca aguda post-IAM.

### Tratamiento del SCA y Código Infarto (IMSS / ESC 2023)
Medidas iniciales: monitoreo continuo con desfibrilador, acceso venoso, **oxígeno solo si SpO2 <90%** (la hiperoxia causa vasoconstricción coronaria), nitratos sublinguales o IV para dolor isquémico (contraindicados en PAS <90 mmHg, infarto de VD o uso de inhibidores de PDE-5 en últimas 24–48 h) y opioides IV solo si el dolor es refractario (la morfina retrasa la absorción de los inhibidores P2Y12).

#### Terapia antitrombótica (DAPT y anticoagulación)
- **Ácido acetilsalicílico (AAS):** carga inmediata de **150–300 mg masticados** seguida de 75–100 mg/día indefinidamente.
- **Inhibidor del receptor P2Y12 (terapia antiagregante dual — DAPT):**
  - En ICP primaria o IAMSEST sometido a cateterismo, **prasugrel** (60 mg carga / 10 mg día; contraindicado en antecedente de EVC/AIT) o **ticagrelor** (180 mg carga / 90 mg c/12 h) son superiores a clopidogrel. Las guías **ESC 2023 desaconsejan el pretratamiento sistemático con P2Y12 en IAMSEST** cuando la angiografía será temprana (<24 h), previendo una eventual cirugía de revascularización coronaria (CABG).
  - **Clopidogrel** (300–600 mg carga / 75 mg día) es obligatorio con **fibrinólisis** o cuando existe alto riesgo hemorrágico o anticoagulación oral concomitante.
- **Anticoagulación parenteral:** indicada en todo SCA hasta la revascularización o durante el internamiento: **heparina no fraccionada (HNF)** IV (estándar en hemodinamia, ERC grave o paciente quirúrgico por vida media corta y reversión con protamina), **enoxaparina** SC o **fondaparinux** (menor sangrado en IAMSEST conservador; requiere bolo de HNF si pasa a ICP).

#### Reperfusión en IAMCEST (Código Infarto IMSS)
El programa **Código Infarto del IMSS** aplica las metas internacionales para acortar el tiempo total de isquemia:
- **ICP primaria:** elección si se realiza en **≤120 minutos desde el diagnóstico electrocardiográfico** (puerta-balón **≤60 min** en centro con hemodinamia; ≤90–120 min con traslado).
- **Estrategia fármaco-invasiva (fibrinólisis):** si la ICP demora >120 min y el paciente lleva **<12 horas** de síntomas sin contraindicaciones absolutas (hemorragia intracraneal previa, EVC isquémico <3–6 meses, tumor/malformación SNC, sospecha de disección aórtica, sangrado activo o **cirugía mayor en las últimas 3 semanas**), administrar trombolítico fibrino-específico (**tenecteplasa** bolo único por peso o alteplasa) en **≤10 min** del diagnóstico y trasladar para angiografía de rescate (si falla a los 60–90 min) o sistemática entre **2 y 24 horas**.

#### Estrategia invasiva en IAMSEST (ESC 2023)
Angiografía **inmediata (<2 h)** en muy alto riesgo (inestabilidad hemodinámica, choque cardiogénico, dolor refractario, arritmias malignas, complicación mecánica, insuficiencia cardiaca aguda o depresión difusa del ST con elevación en aVR); **temprana (<24 h)** en alto riesgo (IAMSEST confirmado, cambios dinámicos del ST/T, GRACE >140); y selectiva en riesgo bajo estabilizado.

### Paciente quirúrgico: MINS, IAM posoperatorio y manejo de stents
Las complicaciones cardiacas provocan más de un tercio de la mortalidad en cirugía mayor no cardiaca (**guías ESC 2022 y AHA/ACC 2024**):
1. **Lesión miocárdica tras cirugía no cardiaca (MINS):** elevación isquémica de troponina en los primeros 30 días posoperatorios (habitualmente 24–72 h), con o sin síntomas ni cambios en ECG. Por la analgesia y sedación, **>80% de los eventos de MINS e IAM posoperatorios cursan sin dolor torácico**. En pacientes de alto riesgo (≥65 años, o ≥45 años con enfermedad cardiovascular o RCRI ≥1 sometidos a cirugía intermedia o mayor) se recomienda tamizar con **hs-cTn preoperatoria y a las 24 y 48 horas**. El MINS triplica o cuadruplica la mortalidad a 30 días. Manejo: corregir detonantes de infarto tipo 2 (anemia, sangrado, taquicardia, sepsis), iniciar AAS y estatina al asegurar hemostasia (y valorar dabigatrán 110 mg c/12 h según ensayo **MANAGE**) y seguimiento cardiológico.
2. **IAM posoperatorio agudo:** la **fibrinólisis está contraindicada** tras cirugía mayor reciente (<3 semanas). En IAMCEST posoperatorio o IAMSEST inestable, la única reperfusión segura es la **ICP primaria urgente**, equilibrando antiagregación frente al sangrado del lecho quirúrgico.
3. **Stents coronarios y DAPT en cirugía:** diferir cirugía electiva idealmente **≥6 meses** tras un SCA o stent liberador de fármaco (mínimo 1 mes en cirugía oncológica/sensible al tiempo en consenso multidisciplinario). En cirugía impostergable bajo DAPT, **mantener la aspirina perioperatoria** siempre que sea posible y suspender temporalmente solo el P2Y12 (ticagrelor 3–5 días, clopidogrel 5 días, prasugrel 7 días antes), reanudándolo en 24–48 h tras confirmar hemostasia (o usar puenteo IV con **cangrelor** en alto riesgo trombótico inmediato).

### Complicaciones mecánicas y seguimiento
Entre los días 3 y 7 de infartos extensos no reperfundidos aparecen emergencias cardiotorácicas: **ruptura de pared libre** (taponamiento letal), **ruptura del septum interventricular** (soplo holosistólico nuevo con frémito y choque) y **ruptura de músculo papilar** (habitualmente el posteromedial por irrigación única; insuficiencia mitral aguda y edema pulmonar fulminante). Vigilar además arritmias ventriculares, bloqueo AV completo (IAM inferior) y pericarditis (síndrome de Dressler). El seguimiento incluye DAPT (12 meses estándar, acortable a 1–3 meses en alto riesgo hemorrágico), estatina de alta intensidad (meta LDL <55 mg/dL), betabloqueador, IECA/ARA-II y rehabilitación cardiaca.

### Referencias
- Byrne RA, et al. 2023 ESC Guidelines for the Management of Acute Coronary Syndromes. Eur Heart J 2023.
- Halvorsen S, et al. 2022 ESC Guidelines on Cardiovascular Assessment and Management of Patients Undergoing Non-Cardiac Surgery. Eur Heart J 2022.
- Thompson A, et al. 2024 AHA/ACC/ACS Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery. Circulation 2024.
- IMSS. Protocolo de Atención Integral Código Infarto y GPC CENETEC de SCA.
- Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022; Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- Todo dolor torácico agudo requiere **ECG de 12 derivaciones en <10 minutos**; en IAMCEST **jamás se espera la troponina** para activar reperfusión.
- Antes de anticoagular o trombolizar, descarta **disección aórtica** (dolor desgarrante, asimetría de pulsos; **betabloqueo IV antes de vasodilatar** y cirugía urgente en Stanford A) y **Boerhaave**.
- En infarto inferior toma siempre **V3R–V4R**: el compromiso del ventrículo derecho **contraindica nitratos** por colapso de precarga.
- En **Código Infarto**, elige **ICP primaria si se logra en ≤120 min** desde el diagnóstico; si demora más, **fibrinólisis en ≤10 min** (tenecteplasa) + estrategia fármaco-invasiva.
- Más de **80% de los IAM posoperatorios (MINS)** son **asintomáticos y de tipo 2**; la fibrinólisis está contraindicada en cirugía mayor reciente (<3 semanas).
- Ante cirugía urgente en portador de **stent coronario**, **no suspendas la aspirina** y coordina la pausa mínima del inhibidor P2Y12 con cardiología.
`),
    sheet('tx-tep', '02', 'Tromboembolia pulmonar', `
## Tromboembolia pulmonar

### Definición y relevancia quirúrgica
La **tromboembolia pulmonar (TEP)** es la oclusión parcial o completa del lecho arterial pulmonar por émbolos desprendidos en >90% del sistema venoso profundo iliofemoral o pélvico. Junto con la trombosis venosa profunda (TVP) integra la **enfermedad tromboembólica venosa (ETEV)**. Para el cirujano general de cuarto año representa la **principal causa prevenible de muerte intrahospitalaria posoperatoria** y plantea el desafío clínico de decidir anticoagulación, reperfusión o filtro de vena cava en pacientes con cirugía reciente o riesgo hemorrágico alto.

### Epidemiología y fisiopatología
Su incidencia anual es de 60–120/100,000 habitantes y se dispara tras los 60 años. Sin profilaxis, la TVP en cirugía general mayor alcanza 15–30% y en cirugía oncológica abdominopélvica 30–40%. La mortalidad a 30 días pasa de <2% en TEP de bajo riesgo a 5–15% en riesgo intermedio-alto y supera **30–50%** en TEP de alto riesgo (masiva).

La trombosis obedece a la **tríada de Virchow** (estasis, lesión endotelial e hipercoagulabilidad quirúrgica/oncológica). Al ocluirse la circulación pulmonar se producen dos fenómenos:
1. **Alteración del intercambio gaseoso:** se genera **espacio muerto alveolar** (alvéolos ventilados sin perfusión), desequilibrio V/Q, pérdida de surfactante con atelectasias y cortocircuito derecha-izquierda (posible apertura de foramen oval permeable), provocando hipoxemia e hiperventilación con **alcalosis respiratoria e hipocapnia**.
2. **Falla aguda del ventrículo derecho (VD) — causa directa de muerte:** la obstrucción mecánica (>30–50% del lecho) más la vasoconstricción por tromboxano A2 y serotonina elevan súbitamente la **poscarga del VD**. Al ser una cavidad de pared delgada, el VD se dilata con rapidez, incrementa su demanda de oxígeno y reduce su perfusión coronaria; el **abombamiento del septum interventricular hacia la izquierda** bloquea el llenado del ventrículo izquierdo, desploma el gasto cardiaco y precipita isquemia del VD y **choque cardiogénico obstructivo** (espiral de muerte del VD).

### Cuadro clínico y diagnóstico
Los síntomas predominantes son **disnea súbita** (~80%), **dolor pleurítico** (infarto pulmonar periférico), taquipnea, taquicardia sinusal, hemoptisis y **síncope** (signo de alarma de obstrucción central). En el posoperatorio (días 3–14), toda taquicardia o desaturación súbita con radiografía normal obliga a descartar TEP; hasta 30–50% muestran signos simultáneos de TVP.

El algoritmo de las **guías ESC 2019** parte de la estabilidad hemodinámica y la probabilidad clínica pretest:
1. **Escalas de Wells, Ginebra revisada y PERC:**
   - **Wells para TEP:** signos de TVP (+3), TEP más probable que otro diagnóstico (+3), FC >100 lpm (+1.5), inmovilización ≥3 días o cirugía en últimas 4 semanas (+1.5), TVP/TEP previa (+1.5), hemoptisis (+1) y cáncer activo (+1). **≤4 = TEP improbable; >4 = TEP probable.**
   - **Criterios PERC:** en probabilidad clínica baja (<15%), si el paciente cumple los 8 criterios (edad <50 años, FC <100, SpO2 ≥95%, sin hemoptisis, sin estrógenos, sin cirugía/trauma en 4 semanas, sin ETEV previa y sin edema unilateral de pierna), la TEP se descarta sin dímero D.
2. **Dímero D de alta sensibilidad:** solo útil en probabilidad baja/intermedia (VPN >99%). En mayores de 50 años aplicar **corte ajustado por edad (edad × 10 µg/L)**. Su especificidad es muy baja en posoperados, trauma, sepsis y cáncer, donde suele estar elevado de base.
3. **Angiotomografía (angio-TC) pulmonar:** **estudio diagnóstico de elección** en probabilidad alta o dímero D positivo (sensibilidad ~85–90%, especificidad ~95%). Identifica el trombo hasta ramas subsegmentarias y mide la sobrecarga del VD (relación **VD/VI ≥0.9–1.0**).
4. **Estudios alternativos y apoyo:** **gammagrafía V/Q** (alergia grave al contraste, ERC avanzada o embarazo con Rx normal); **US Doppler venoso de miembros inferiores** (una TVP proximal confirma indicación de anticoagulación sin contraste); **ecocardiograma transtorácico (ETT) a pie de cama** en el **paciente inestable** que no puede ir a TC: hallar dilatación de VD, movimiento septal paradójico, **signo de McConnell** (acinesia de pared libre media con hipercontractilidad apical) o trombo en tránsito justifica reperfusión inmediata; un VD normal descarta que la TEP cause el choque. El ECG suele mostrar taquicardia sinusal, T invertidas en V1–V4, bloqueo de rama derecha o **S1Q3T3**; en radiografía son raros la **joroba de Hampton** (infarto en cuña) y el **signo de Westermark** (oligohemia focal).

### Estratificación de riesgo (ESC 2019) y sPESI
La escala **sPESI** suma 1 punto por cada criterio: edad >80 años, cáncer, enfermedad cardiopulmonar crónica, FC ≥110 lpm, PAS <100 mmHg y SpO2 <90% (**sPESI = 0** = bajo riesgo; **≥1** = riesgo elevado).

| Categoría ESC | Inestabilidad hemodinámica | sPESI ≥1 | Disfunción de VD (ETT / angio-TC) | Biomarcadores (Troponina / BNP) | Tratamiento y destino prioritarios |
|---|---|---|---|---|---|
| **Alto riesgo (masiva)** | **Sí** (paro, choque obstructivo, PAS <90 mmHg o vasopresores ≥15 min) | Sí | **Sí** | Positivos | **UCI + HNF IV + reperfusión urgente** (trombólisis sistémica; si contraindicada: catéter/trombectomía o embolectomía quirúrgica) |
| **Intermedio-alto** | No | Sí | **Sí** | **Positivos** (ambos positivos) | **Monitoreo estrecho (UCI/intermedios) + anticoagulación parenteral (HBPM/HNF)**; vigilar deterioro para **trombólisis de rescate** |
| **Intermedio-bajo** | No | Sí | Uno solo positivo o negativos | Uno solo o negativos | **Hospitalización en piso + anticoagulación** (HBPM o DOAC) |
| **Bajo riesgo** | No | **0 puntos** | No | Negativos | **DOAC oral**; valorar alta precoz/ambulatoria si cumple criterios Hestia |

### Tratamiento: soporte, anticoagulación, reperfusión y filtro de VCI
1. **Soporte en falla de VD:** oxígeno si SpO2 <90%; **evitar sobrecarga de líquidos IV** (máximo 500 mL si hipovolemia clara) porque sobredistiende el VD y colapsa el VI. Iniciar temprano **norepinefrina** para sostener la perfusión coronaria del VD; evitar intubación innecesaria por riesgo de paro en la inducción anestésica.
2. **Anticoagulación (pilar universal):** iniciar desde sospecha intermedia/alta si no hay sangrado activo.
   - **Alto riesgo, ERC grave (TFG <30) o posoperado inestable:** **heparina no fraccionada (HNF) IV** (bolo 80 UI/kg + infusión 18 UI/kg/h ajustada por TTPa) por reversibilidad rápida con protamina.
   - **Riesgo intermedio o bajo:** **HBPM** (enoxaparina 1 mg/kg SC c/12 h) o **DOACs directos** (**apixabán** o **rivaroxabán** sin puente; dabigatrán/edoxabán tras 5 días de HBPM). En **cáncer activo**, apixabán/edoxabán/rivaroxabán equivalen a HBPM, pero se prefiere **HBPM en neoplasias GI o GU luminales no resecadas** por menor sangrado mucoso.
   - **Duración:** mínimo **3 meses** en TEP provocada por cirugía; **indefinida** en no provocada recurrente, cáncer activo o síndrome antifosfolípido (usar warfarina, no DOACs).
3. **Reperfusión en TEP de alto riesgo (y rescate en intermedio-alto):**
   - **Trombólisis sistémica:** primera línea (ideal <48 h, útil hasta 14 días): **alteplasa 100 mg IV en 2 h** (o 0.6 mg/kg en 15 min en paro inminente). **Contraindicaciones absolutas quirúrgicas:** hemorragia intracraneal previa, EVC isquémico <6 meses, neoplasia SNC, **cirugía mayor o trauma grave en las últimas 3 semanas**, sangrado GI <1 mes o hemorragia activa.
   - **Terapia dirigida por catéter (TDC) y trombectomía mecánica percutánea:** liderada por equipos **PERT**, la **tromboaspiración mecánica sin trombolítico** (o trombólisis local a baja dosis asistida por ultrasonido) es la **opción de elección en posoperados recientes con TEP de alto riesgo** donde la trombólisis sistémica está contraindicada.
   - **Embolectomía quirúrgica pulmonar (bajo CEC) y ECMO venoarterial:** alternativa de rescate cuando falla o está contraindicada la trombólisis (especialmente con trombo en tránsito en aurícula derecha o choque refractario).
4. **Filtro de vena cava inferior (VCI):** **NO de uso rutinario**. Indicaciones estrictas (ESC/CHEST): 1) TEP aguda o TVP proximal con **contraindicación absoluta a anticoagulación**; y 2) **recurrencia documentada de TEP** bajo anticoagulación terapéutica óptima. Colocar siempre **filtro recuperable** y retirarlo en cuanto pueda anticoagularse.

### Profilaxis quirúrgica de ETEV: escala de Caprini
El puntaje **Caprini** suma factores del paciente y cirugía (edad 41–60 = 1, 61–74 = 2, ≥75 = 3; cirugía mayor o laparoscopia >45 min = 2; cáncer = 2; IMC >25 = 1; reposo >72 h = 2; ETEV previa o trombofilia = 3; fractura cadera/pelvis o politrauma = 5):

| Puntaje Caprini | Riesgo de ETEV | Esquema de tromboprofilaxis en cirugía general |
|---|---|---|
| **0 puntos** | Muy bajo (<0.5%) | Deambulación temprana exclusiva |
| **1–2 puntos** | Bajo (~1.5%) | Profilaxis mecánica (compresión neumática intermitente — CNI) |
| **3–4 puntos** | Moderado (~3%) | Farmacológica (**enoxaparina 40 mg SC c/24 h** o HNF 5,000 UI c/8–12 h) o CNI si alto riesgo hemorrágico |
| **≥5 puntos** | Alto (~6%) | **Combinada:** farmacológica (HBPM o HNF) **+ mecánica (CNI)** hasta deambulación plena |
| **Cirugía oncológica abdominopélvica mayor** | Muy alto | Profilaxis farmacológica **extendida por 28 días** posoperatorios con HBPM (o DOAC en protocolos validados) |

### Complicaciones y seguimiento
Además de recurrencia y sangrado mayor, 2–4% desarrollan **hipertensión pulmonar tromboembólica crónica (HPTEC)**, sospechada ante disnea persistente tras 3 meses de anticoagulación (tamizar con ETT y gammagrafía V/Q; manejo curativo con tromboendarterectomía pulmonar). Revalorar a los 3–6 meses la duración de anticoagulación y descartar neoplasia oculta en TEP no provocada.

### Referencias
- Konstantinides SV, et al. 2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism. Eur Heart J 2020.
- Stevens SM, et al. CHEST Guideline Update for Antithrombotic Therapy in VTE Disease. Chest 2021.
- Gould MK, et al. Prevention of VTE in Nonorthopedic Surgical Patients (Caprini Score, ACCP/CHEST); ASCO/NCCN 2023.
- Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022; Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- La **causa de muerte en TEP masiva** es la **falla aguda del ventrículo derecho**; evita bolos excesivos de cristaloides e inicia **norepinefrina** temprano.
- El **dímero D** solo **descarta** TEP en probabilidad baja/intermedia (VPN >99%), se **ajusta por edad (>50 años: edad × 10 µg/L)** y pierde especificidad en recién operados.
- **Estratificación ESC:** alto riesgo = choque/hipotensión → reperfusión; intermedio-alto = estable + disfunción de VD + troponina positiva → monitoreo estrecho para trombólisis de rescate.
- En un **posoperado (<3 semanas) con TEP de alto riesgo**, la trombólisis sistémica está contraindicada: elige **trombectomía mecánica por catéter (PERT)** o **embolectomía quirúrgica**.
- El **filtro de VCI** (siempre recuperable) solo se indica por **contraindicación absoluta a anticoagulación** o **recurrencia pese a anticoagulación óptima**.
- En cirugía oncológica abdominopélvica mayor (Caprini ≥5), la profilaxis con HBPM se extiende **28 días** posoperatorios.
`),
    sheet('tx-pleura', '03', 'Hidroneumotórax, hemotórax y empiema', `
## Hidroneumotórax, hemotórax y empiema

### Definición y fisiología del espacio pleural
El **espacio pleural** contiene 10–20 mL de líquido lubricante entre la pleura visceral (insensible al dolor) y la parietal (inervada por nervios intercostales y frénico), manteniendo una presión intrapleural negativa (−3 a −5 cmH2O al final de espiración) que conserva expandido el pulmón. La ruptura de este equilibrio origina **derrame pleural**, **neumotórax** (aire pleural), **hidroneumotórax** (aire + líquido con nivel hidroaéreo horizontal estricto), **hemotórax** (sangre pleural con hematocrito del líquido ≥50% del sanguíneo periférico) y **empiema** (pus franco o bacterias en cavidad pleural).

### Derrame pleural y criterios de Light
Todo derrame libre >10 mm en ultrasonido o decúbito lateral sin causa cardiaca evidente amerita **toracocentesis diagnóstica ecoguiada** por el borde superior de la costilla inferior. Los **criterios de Light** distinguen trasudados (insuficiencia cardiaca, cirrosis/hidrotórax hepático, síndrome nefrótico) de exudados (infección, neoplasia, TEP, hemotórax) con sensibilidad de ~98%:

Es **exudado** si cumple **al menos uno** de los siguientes criterios:
1. **Proteínas pleura / suero >0.5.**
2. **DHL pleura / suero >0.6.**
3. **DHL pleural >2/3 (0.67)** del límite superior normal sérico.

**Trampa clínica:** hasta 25% de los trasudados en pacientes tratados con diuréticos clasifican falsamente como exudados por hemoconcentración; en ellos, un **gradiente de albúmina suero − pleura >1.2 g/dL** (o proteínas >3.1 g/dL) confirma que se trata de un trasudado. Otros marcadores útiles: predominio linfocitario + **ADA >40 UI/L** (tuberculosis), **amilasa pleural elevada** (pancreatitis o **ruptura esofágica** por isoenzima salival) y **triglicéridos >110 mg/dL** con quilomicrones (**quilotórax**).

### Derrame paraneumónico y fases del empiema
Complica 20–40% de las neumonías hospitalizadas (y 5–10% progresan a empiema), además de hemotórax retenidos infectados, perforaciones esofágicas y abscesos subfrénicos. Las guías **ATS / BTS 2023 / AATS** definen tres fases continuas:

| Fase del empiema | Tiempo aprox. | Bioquímica y anatomopatología | Manejo prioritario |
|---|---|---|---|
| **I: Exudativa (derrame simple)** | Días 1–7 | Líquido libre estéril, pH >7.2, glucosa >60 mg/dL, DHL <1,000 UI/L; pulmón expandible | Antibiótico IV + vigilancia; toracocentesis si sintomático |
| **II: Fibrinopurulenta (derrame complicado / empiema)** | Semanas 1–3 | Invasión bacteriana, depósito de fibrina y tabiques; **pus franco, Gram/cultivo+, pH <7.20, glucosa <40–60 mg/dL o DHL >1,000 UI/L** | Antibiótico IV + **sonda endopleural** + **fibrinolíticos (tPA + DNasa, MIST2)** o **VATS temprana con desbridamiento** (elección si loculado o falla en 48 h) |
| **III: Organizada (crónica)** | >3–4 semanas | **Corteza fibrosa inelástica («peel»)** que impide la reexpansión (**pulmón atrapado**) | **Decorticación quirúrgica** (VATS o **toracotomía abierta**) para liberar el pulmón; ventana pleurocutánea (Eloesser) solo en inoperables |

#### Evidencia clave en empiema (MIST2 vs VATS)
Las indicaciones absolutas de drenaje pleural son: **pus macroscópico**, Gram/cultivo positivo, **pH <7.20** (medido en gasómetro con jeringa heparinizada), **glucosa <40 mg/dL**, **DHL >1,000 UI/L** o loculaciones con signo de la «pleura hendida» (*split pleura sign*) en TC.
- **Antibióticos:** cubrir estreptococos, estafilococos y **anaerobios** (ceftriaxona + metronidazol o piperacilina-tazobactam; sumar vancomicina/linezolid si es nosocomial por SARM). Evitar aminoglucósidos (se inactivan en pH ácido).
- **Fibrinolíticos intrapleurales (ensayo MIST2, NEJM 2011):** la **combinación tPA (10 mg) + DNasa (5 mg)** cada 12 h por 3 días — tPA lisa la fibrina y DNasa reduce la viscosidad del pus — mejoró el drenaje radiológico, acortó la estancia y redujo la cirugía frente a placebo (ninguno de los dos fármacos por separado fue eficaz).
- **VATS temprana vs decorticación abierta:** la **VATS temprana** en fase fibrinopurulenta loculada o ante falla tras 48–72 h de sonda + fibrinolíticos evacua tabiques bajo visión directa con menor morbilidad. En fase III organizada con corteza gruesa que no cede por VATS se convierte a **toracotomía posterolateral y decorticación** completa.

### Neumotórax: espontáneo, a tensión e indicaciones quirúrgicas
Se clasifica en **espontáneo primario (NEP)** (varón joven, alto, delgado, fumador; ruptura de bulas subpleurales apicales), **espontáneo secundario (NES)** (EPOC/enfisema, fibrosis, TB; mayor gravedad y mortalidad), **iatrogénico** y **traumático**.
- **Neumotórax a tensión:** emergencia vital por válvula unidireccional con colapso del retorno venoso. **Diagnóstico clínico (hipotensión + murmullo abolido + hipoxemia); jamás esperar radiografía.** Realizar **descompresión inmediata** con aguja gruesa (14 G) o toracostomía digital en **4.º–5.º espacio intercostal anterior a la línea axilar media** en adultos (**ATLS 10.ª ed.**; 2.º EIC medioclavicular en niños), seguida de sonda endopleural.
- **Manejo del NEP y NES (BTS 2023):** un NEP estable y mínimamente sintomático puede manejarse conservadoramente (ensayo Brown) o con aspiración/catéter fino (≤14 Fr); si hay disnea intensa, inestabilidad o es un **NES**, colocar sonda endopleural y oxígeno suplementario (acelera la reabsorción de nitrógeno).
- **Indicaciones quirúrgicas (VATS con bulectomía apical + pleurodesis mecánica o pleurectomía):** 1) **recurrencia ipsilateral (2.º episodio)**; 2) **primer episodio contralateral o bilateral sincrónico**; 3) **fuga aérea persistente >3–5 días** o falta de reexpansión pulmonar; 4) **hemoneumotórax espontáneo**; 5) **profesiones de alto riesgo** desde el primer evento (pilotos, buzos).

### Hemotórax agudo y hemotórax retenido
Secundario a trauma torácico (laceración parenquimatosa de baja presión — usualmente autolimitada al reexpandir el pulmón — o sangrado arterial intercostal/mamaria/grandes vasos) o posoperatorio. Borra el ángulo costofrénico a partir de 200–300 mL en placa erguida; **eFAST y TC** son más sensibles en supino.
- **Manejo inicial:** reanimación + **toracostomía cerrada con sonda de 28–32 Fr** para evacuar coágulos y medir el débito horario.
- **Indicaciones de toracotomía urgente (hemotórax masivo):** drenaje inicial **≥1,500 mL** (o >20 mL/kg), sangrado persistente **>200 mL/h durante 2–4 horas**, o inestabilidad hemodinámica refractaria con transfusión continua.
- **Hemotórax retenido:** coágulos residuales >300–500 mL o >1/3 del hemitórax en TC tras la sonda inicial. Evoluciona a **empiema** (25–30%) y **fibrotórax**. El estándar (**EAST / WSES**) es **VATS temprana dentro de los primeros 3 a 7 días** (antes de la organización fibrosa); una segunda sonda a ciegas falla con frecuencia y eleva el riesgo de infección.

### Toracostomía cerrada, triángulo de seguridad y sistemas de 3 cámaras
1. **Triángulo de seguridad (BTS):** delimitado anteriormente por el **borde lateral del pectoral mayor**, posteriormente por el **borde anterior del dorsal ancho**, inferiormente por una línea a nivel del **pezón / 5.º espacio intercostal** y superiormente por el vértice axilar. Evita arteria mamaria interna, mama y vísceras subdiafragmáticas (el diafragma asciende hasta el 4.º EIC en espiración).
2. **Técnica segura:** paciente semisentado con brazo ipsilateral elevado; anestesia local amplia hasta **periostio y pleura parietal**; incisión de 2–3 cm, **disección roma con pinza de Kelly estrictamente sobre el borde superior de la costilla inferior** (protegiendo el paquete neurovascular subcostal), entrada controlada y **exploración digital obligatoria de 360°** (jamás usar trócar metálico punzante). Dirigir la sonda apical/anterior (aire) o posterior/basal (líquido/sangre), verificando que el último orificio quede intratorácico; fijar y confirmar con radiografía.
3. **Sistema de drenaje de 3 cámaras (Pleur-Evac):** 1) **cámara recolectora** (mide volumen/características); 2) **sello de agua** (2 cm de agua estéril; válvula unidireccional cuya oscilación respiratoria prueba permeabilidad y cuyo burbujeo continuo indica fuga aérea activa); 3) **control de aspiración** (columna húmeda a −20 cmH2O o regulador seco). Mantener el sistema siempre por debajo del tórax y **nunca pinzar una sonda con fuga aérea activa** (riesgo de neumotórax a tensión).
4. **Retiro:** pulmón reexpandido, **sin fuga aérea por ≥24 h** y débito seroso **<150–200 mL/24 h**. Retirar en maniobra de **Valsalva** (o inspiración sostenida) sellando inmediatamente el orificio.

### Complicaciones
Mala posición de sonda, lesión del paquete intercostal, perforación pulmonar, cardiaca o hepatoesplénica, **edema pulmonar por reexpansión** (evitar evacuar >1,000–1,500 mL de golpe en derrames crónicos), empiema secundario, hemotórax retenido y neuralgia intercostal.

### Referencias
- Roberts ME, et al. British Thoracic Society (BTS) Guideline for Pleural Disease 2023. Thorax 2023.
- Rahman NM, et al. Intrapleural tPA and DNase in Pleural Infection (MIST2 Trial). NEJM 2011.
- ACS. ATLS 10.ª ed. 2018; Shen KR, et al. AATS Consensus Guidelines for Empyema. J Thorac Cardiovasc Surg 2017.
- Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022; Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- **Criterios de Light (exudado):** proteínas pleura/suero >0.5, DHL pleura/suero >0.6 o DHL pleural >2/3 LSN; en pacientes con diuréticos, un **gradiente de albúmina suero − pleura >1.2 g/dL** reclasifica el líquido como trasudado.
- Derrame paraneumónico con **pH <7.20, glucosa <40 mg/dL, DHL >1,000 UI/L, Gram/cultivo+ o pus franco** = **drenaje con sonda endopleural**.
- En empiema loculado, la fibrinólisis eficaz es la **combinación tPA + DNasa (MIST2)** o **VATS temprana**; en fase organizada con pulmón atrapado se indica **decorticación**.
- **Hemotórax masivo:** **≥1,500 mL iniciales** o **>200 mL/h por 2–4 h** = **toracotomía urgente**; **hemotórax retenido** = **VATS temprana (<3–7 días)**.
- La toracostomía cerrada va en el **triángulo de seguridad**, sobre el **borde superior de la costilla inferior**, con exploración digital y **sin trócar punzante**.
- Limitar drenaje inicial a **≤1.5 L** en derrames crónicos (evita edema por reexpansión) y **jamás pinzar una sonda con fuga aérea activa**.
`),
    sheet('tx-tumores', '04', 'Tumores pleuropulmonares y mediastinales', `
## Tumores pleuropulmonares y mediastinales

### Definición y enfoque del residente R4
El estudio de las masas intratorácicas engloba el **nódulo pulmonar solitario y el cáncer pulmonar**, el **mesotelioma pleural maligno** y los **tumores del mediastino**. El cirujano general de cuarto año debe interpretar los criterios de malignidad, dominar la estadificación TNM y mediastinal, calcular la reserva funcional pulmonar posoperatoria, conocer las indicaciones de resección y diferenciar con precisión las neoplasias de cada compartimento mediastinal.

### Nódulo pulmonar solitario (NPS)
Opacidad intraparenquimatosa **≤3 cm** rodeada de pulmón aireado, sin atelectasia, adenopatías ni derrame (lesiones **>3 cm son masas pulmonares**, malignas hasta demostrar lo contrario). Más de 90% de los nódulos pequeños son benignos (granulomas infecciosos, hamartomas con grasa y calcio en «palomita de maíz»).
- **Criterios de malignidad:** edad avanzada, tabaquismo, tamaño >8 mm, **bordes espiculados**, localización en **lóbulos superiores**, calcificación excéntrica o ausente (frente a calcificación central, difusa, laminar o en palomita de maíz, típicas de benignidad), componente parcialmente sólido en crecimiento y tiempo de duplicación de **20–400 días** (estabilidad en TC durante **≥2 años** en sólidos sugiere benignidad; vidrio deslustrado requiere seguimiento de hasta 5 años).
- **Guías de Fleischner 2017 (nódulos incidentales sólidos en ≥35 años sin cáncer previo):** **<6 mm** = sin seguimiento en bajo riesgo (TC opcional a 12 meses en alto riesgo); **6–8 mm** = TC a 6–12 meses (y 18–24 meses si alto riesgo); **>8 mm** = calcular probabilidad pretest: baja (<5%) → TC a 3 meses; intermedia (5–65%) → **PET-TC** y/o biopsia; **alta (>65%)** → resección directa (cuña por VATS con transoperatorio y lobectomía si confirma cáncer).

### Cáncer pulmonar: CPCNP vs CPCP
Es la **primera causa de mortalidad por cáncer en el mundo**, ligada en >80% al tabaquismo (además de humo de leña en México, asbesto y radón).
1. **Cáncer de pulmón de células no pequeñas (CPCNP, ~85%):**
   - **Adenocarcinoma (~45–50%, el más frecuente globalmente y en no fumadores):** periférico, metástasis precoces; obligatorio solicitar **perfil molecular completo** (**EGFR, ALK, ROS1, RET, KRAS G12C, BRAF, MET y PD-L1**) para terapia dirigida e inmunoterapia (NCCN 2025).
   - **Carcinoma epidermoide (~25–30%):** fumadores, **central/endobronquial**, tiende a cavitarse, causa hemoptisis/atelectasia e hipercalcemia paraneoplásica por **PTHrP**.
   - **Carcinoma de células grandes (~5–10%):** diagnóstico de exclusión, agresivo.
2. **Cáncer de pulmón de células pequeñas (CPCP, ~15%):** tumor neuroendocrino de fumadores intensos, **central con conglomerados mediastinales**, diseminación hematógena temprana y síndromes paraneoplásicos (**SIADH**, **Cushing** por ACTH ectópica, síndrome miasténico de **Lambert-Eaton**). Salvo casos T1–T2aN0M0 excepcionales (<5%), **su tratamiento NO es quirúrgico**, sino quimiorradioterapia (enfermedad limitada) o quimioinmunoterapia (extensa).
3. **Tumor de Pancoast (sulcus superior):** CPCNP apical que invade plexo braquial (dolor C8–T1), vasos subclavios y cadena simpática cervical (**síndrome de Horner**: ptosis, miosis, anhidrosis). Tratamiento estándar: **quimiorradioterapia neoadyuvante seguida de resección en bloque**.

### Estadificación TNM (8.ª/9.ª ed.) y valoración mediastinal
- **T:** T1 ≤3 cm (T1a ≤1, T1b >1–2, T1c >2–3); T2 >3–5 cm o pleura visceral/bronquio principal; T3 >5–7 cm, pared torácica, frénico, pericardio o nódulo satélite mismo lóbulo; T4 >7 cm, mediastino, corazón, grandes vasos, tráquea, esófago, vértebra o nódulo en otro lóbulo ipsilateral.
- **N:** **N1** = ganglios intrapulmonares o hiliares ipsilaterales (estaciones 10–14); **N2** = mediastinales ipsilaterales o subcarinales (estaciones 2–9; la **9.ª ed. IASLC** subdivide en **N2a** estación única y **N2b** estaciones múltiples); **N3** = mediastinales/hiliares contralaterales o supraclaviculares (irresecables).
- **M:** M1a (derrame pleural/pericárdico maligno o nódulo contralateral), M1b (metástasis extratorácica única) y M1c (múltiples; 9.ª ed.: M1c1 un órgano vs M1c2 varios órganos).
- **Estadificación por imagen e invasiva:** **TC contrastada de tórax y abdomen superior**, **PET-TC** en todo candidato quirúrgico y **RM cerebral** en estadios II–III y en todo CPCP. Ante ganglios >1 cm, PET positivo, tumor central o >3 cm, realizar estadificación invasiva mediastinal: primera línea **EBUS-TBNA** (estaciones 2, 4, 7, 10, 11) + **EUS** (4L, 7, 8, 9); si resulta negativo con alta sospecha de N2, confirmar con **mediastinoscopia cervical** (2R/2L, 4R/4L, 7 anterior).

### Valoración funcional preoperatoria y cirugía del CPCNP
Además del riesgo cardiaco (RCRI), se calculan los **valores predichos posoperatorios (ppo)** de **FEV1** y **DLCO** descontando los segmentos funcionales a resecar (de 19 segmentos totales):
- **FEV1 ppo y DLCO ppo >60%:** bajo riesgo; apto directamente para lobectomía o neumonectomía.
- **FEV1 ppo o DLCO ppo 30–60%:** prueba de ejercicio simple (escalera >22 m o caminata >400 m); si falla, pasar a prueba cardiopulmonar formal.
- **FEV1 ppo o DLCO ppo <30%:** exige **prueba de esfuerzo cardiopulmonar (CPET)** midiendo **VO2 máx**: **>20 mL/kg/min** = bajo riesgo; **10–20** = moderado; **<10 mL/kg/min** (<35% predicho) = **contraindicación para resección mayor** (ofertar radioterapia estereotáctica **SBRT**).

**Tratamiento quirúrgico y multimodal (NCCN 2025):**
- **Estadios I–II:** **lobectomía anatómica por VATS o robótica + linfadenectomía mediastinal sistemática** (≥3 estaciones N2 incluida subcarinal 7 + N1) es el estándar en tumores >2 cm. En tumores periféricos **≤2 cm N0 (T1a–b)**, los ensayos **JCOG0802 y CALGB 140503** validaron la **segmentectomía anatómica** con margen ≥2 cm y confirmación N0 como equivalente en supervivencia con mayor preservación funcional.
- **Estadios II–IIIA resecables:** **quimioinmunoterapia neoadyuvante o perioperatoria** (nivolumab — CheckMate 816 — o pembrolizumab — KEYNOTE-671) antes de operar en tumores sin mutación EGFR/ALK; en mutación **EGFR** operada (IB–IIIA), **osimertinib adyuvante** (ADAURA). En estadio III irresecable (N2 voluminoso/N3): quimiorradioterapia concurrente + **durvalumab** (PACIFIC).
- **Metastasectomía pulmonar:** indicada en seleccionados (colorrectal, sarcomas) si cumplen **criterios de Thomford**: primario controlado, sin enfermedad extratorácica no controlable, resección R0 factible y reserva pulmonar suficiente.

### Mesotelioma pleural maligno
Asociado en >70–80% a **exposición a asbesto** (latencia 20–40 años). Presenta disnea, dolor torácico, derrame unilateral y **engrosamiento pleural nodular circunferencial** en TC. La citología falla en ~70%; requiere **biopsia por VATS** con inmunohistoquímica (calretinina, WT1, D2-40 positivos; TTF-1/CEA negativos). Subtipos: **epitelioide** (mejor pronóstico, único candidato quirúrgico habitual), **sarcomatoide** (peor, no quirúrgico) y bifásico. Manejo sistémico con platino-pemetrexed o nivolumab + ipilimumab (CheckMate 743); en epitelioides muy seleccionados se contempla **pleurectomía/decorticación extendida** (preferida sobre neumonectomía extrapleural por menor mortalidad).

### Tumores del mediastino por compartimentos
| Compartimento | Tumores más frecuentes | Clínica y marcadores clave | Abordaje y tratamiento prioritario |
|---|---|---|---|
| **Mediastino anterior (prevascular)** — **«Las 4 T»** | **1. Timoma / carcinoma tímico** (#1 en adultos)<br>**2. Teratoma y germinales** (jóvenes)<br>**3. Tiroides** (bocio retroesternal)<br>**4. «Terrible» linfoma** | Timoma: **miastenia gravis** en 30–50% (anti-RAch), aplasia eritroide, síndrome de Good. Germinales: pedir siempre **AFP, β-hCG y DHL**. Linfoma: síntomas B, síndrome de VCS | **Timoma encapsulado resecable:** **NO biopsiar transpleuralmente** (siembra pleural) → **timectomía total R0** (VATS/RATS o esternotomía; estadificar Masaoka-Koga/TNM; optimizar miastenia antes). **Linfoma:** biopsia gruesa → quimioterapia. **Germinales no seminomatosos:** quimioterapia BEP primero y resección residual. **Bocio:** vía cervical habitualmente |
| **Mediastino medio (visceral)** | **Quistes congénitos** (broncogénico, pericárdico, duplicación esofágica), linfadenopatías, lesiones vasculares | Asintomáticos o compresión traqueoesofágica / infección | Quistes sintomáticos o dudosos: **resección completa por VATS** (evitar aspiración simple). Ganglios: EBUS/mediastinoscopia |
| **Mediastino posterior (paravertebral)** | **Tumores neurogénicos (>75%):** vaina nerviosa en adultos (**schwannoma**, neurofibroma); simpáticos en niños (neuroblastoma, ganglioneuroma) | Asintomáticos o dolor radicular; 10% extensión intraespinal en **«reloj de arena» (*dumbbell*)** | **RM de columna obligatoria** preoperatoria para descartar invasión medular; resección por VATS (abordaje combinado neuroquirúrgico si intrarraquídeo) |

### Complicaciones y seguimiento
Vigilar fuga aérea prolongada (>5 días), fibrilación auricular posoperatoria, neumonía, quilotórax, lesión de nervio laríngeo recurrente izquierdo (estación 5) o frénico, y **fístula broncopleural** (típica tras neumonectomía derecha: expectoración serohemática, caída del nivel hidroaéreo y sepsis). El seguimiento del CPCNP resecado comprende TC de tórax cada 6 meses por 2–3 años y luego anual, más cesación tabáquica absoluta.

### Referencias
- NCCN Clinical Practice Guidelines: Non-Small Cell Lung Cancer, Small Cell Lung Cancer, Mesothelioma and Thymomas (v.2024–2025).
- MacMahon H, et al. Fleischner Society 2017 Guidelines for Incidental Pulmonary Nodules. Radiology 2017.
- Altorki N, et al. CALGB 140503 (NEJM 2023); Saji H, et al. JCOG0802 (Lancet 2022).
- Brunelli A, et al. ACCP Physiologic Evaluation for Lung Cancer Resection. Chest 2013.
- Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022; Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- Un **NPS sólido estable ≥2 años** es probablemente benigno; un nódulo >8 mm espiculado en lóbulo superior de fumador exige PET-TC o resección.
- **Adenocarcinoma** = periférico y más frecuente (perfil EGFR/ALK/PD-L1); **epidermoide** = central, cavitado, PTHrP; **CPCP** = central, neuroendocrino (SIADH, Cushing, Lambert-Eaton) y de manejo no quirúrgico.
- **Valoración funcional pulmonar:** FEV1 ppo y DLCO ppo **>60%** permiten operar directo; si **<30%** exigir CPET (**VO2 máx <10 mL/kg/min** contraindica resección mayor).
- En CPCNP periférico **≤2 cm N0**, la **segmentectomía anatómica** equivale a lobectomía; para >2 cm el estándar es **lobectomía VATS + linfadenectomía mediastinal**.
- **Mediastino anterior («4 T»):** timoma, teratoma/germinales (pedir AFP y β-hCG), tiroides y linfoma; en **timoma encapsulado resecable NO biopsiar por vía transpleural**.
- En todo tumor neurogénico del **mediastino posterior**, solicita **RM de columna** preoperatoria para descartar tumor en «reloj de arena».
`),
  ],
  'ap-r4-trasplante': [
    sheet('tx-renal', '01', 'Generalidades y trasplante renal', `
## Generalidades y trasplante renal

### Definición y panorama en México
El **trasplante renal** es el tratamiento de elección para la enfermedad renal crónica (ERC) terminal (estadio 5, TFG <15 mL/min/1.73 m2), pues ofrece mayor supervivencia, mejor calidad de vida y menor costo que la diálisis crónica. En México, donde la diabetes y la hipertensión impulsan la ERC, el trasplante renal es el **trasplante de órgano sólido más frecuente** (coordinado bajo la normativa del **CENATRA** y la **NOM-032-SSA3**, con el IMSS como principal realizador), aunque la lista de espera supera ampliamente la oferta de donadores.

### Inmunología del trasplante y pruebas pretrasplante
El rechazo surge por reconocimiento de los **antígenos leucocitarios humanos (HLA)** del donador (complejo mayor de histocompatibilidad, brazo corto del cromosoma 6):
- **HLA clase I (A, B, C):** presentes en todas las células nucleadas; presentan péptidos a **linfocitos T CD8+ citotóxicos**.
- **HLA clase II (DP, DQ, DR):** en células presentadoras de antígeno (dendríticas, macrófagos, linfocitos B, endotelio activado); activan **linfocitos T CD4+ cooperadores**. La compatibilidad en **HLA-DR** ejerce el mayor impacto en la supervivencia del injerto renal.
- **Vías de alorreconocimiento:** la **vía directa** (células presentadoras del donador activan linfocitos T del receptor) domina el rechazo celular agudo temprano; la **vía indirecta** (antígenos procesados por células del receptor) dirige el rechazo humoral y crónico.

**Estudios inmunológicos obligatorios:**
1. **Compatibilidad ABO:** sigue las reglas de transfusión eritrocitaria (O donador universal, AB receptor universal; Rh irrelevante). El trasplante ABO incompatible exige desensibilización especializada.
2. **Tipificación HLA, PRA/cPRA y DSA:** cuantifica el porcentaje de sensibilización previa (por transfusiones, embarazos o trasplantes) e identifica **anticuerpos donador-específicos (DSA)** por citometría de fase sólida (Luminex).
3. **Prueba cruzada (*crossmatch*):** enfrenta suero del receptor contra linfocitos T y B del donador. Un **crossmatch positivo por citotoxicidad dependiente de complemento (CDC) contra linfocitos T es contraindicación absoluta** (rechazo hiperagudo); el **crossmatch por citometría de flujo** ofrece mayor sensibilidad para DSA de bajo título.

### Tipos de rechazo (clasificación de Banff)
| Tipo de rechazo | Cronología | Mecanismo | Histología (Banff) y clínica | Tratamiento prioritario |
|---|---|---|---|---|
| **Hiperagudo** | Minutos a horas tras despinzar | **Anticuerpos preformados** anti-ABO o anti-HLA → activación masiva del complemento | Riñón flácido, moteado/cianótico en quirófano; trombosis microvascular y necrosis fibrinoide | **Irreversible:** prevención con ABO y crossmatch negativo; si ocurre, **trasplantectomía inmediata** |
| **Agudo celular (mediado por T)** | Semanas a meses (pico primeros 3–6 meses) | Linfocitos T CD4+/CD8+ (vía directa) | Ascenso de creatinina, oliguria, fiebre o dolor local; biopsia con **tubulitis, infiltrado intersticial y endotelialitis** | **Pulsos de metilprednisolona IV** (500–1,000 mg/día × 3 días); si es corticorresistente o grave (Banff IIB–III), **timoglobulina (ATG)** |
| **Agudo humoral (mediado por Ac)** | Días a meses (o tardío por mala adherencia) | DSA anti-HLA activando complemento | Deterioro rápido; biopsia con **capilaritis peritubular, glomerulitis y depósito lineal de C4d+** + DSA séricos | **Plasmaféresis + inmunoglobulina IV (IVIG) ± rituximab** (anti-CD20) o eculizumab |
| **Crónico** | Meses a años | Daño humoral/celular sostenido + toxicidad por CNI, HTA e isquemia | Aumento lento de creatinina, **proteinuria** e HTA; **fibrosis intersticial, atrofia tubular (IF/TA)** y glomerulopatía del trasplante | Prevención (adherencia, control de TA, ajuste de CNI); sin cura al establecerse fibrosis |

### Inmunosupresión: inducción y mantenimiento (KDIGO)
1. **Inducción perioperatoria:**
   - **Basiliximab (anti-CD25, receptor de IL-2):** anticuerpo monoclonal no depletante; indicado en **riesgo inmunológico bajo o moderado** (días 0 y 4).
   - **Timoglobulina (globulina antitimocítica, rATG):** policlonal depletante de linfocitos T; indicada en **alto riesgo inmunológico** (cPRA alto, DSA, retrasplante, isquemia prolongada); exige profilaxis estricta contra CMV y *Pneumocystis*.
2. **Mantenimiento (triple esquema estándar):**
   - **Inhibidor de calcineurina (CNI) — Tacrolimus (primera línea) o Ciclosporina:** bloquean calcineurina impidiendo transcripción de **IL-2**. Se monitorizan por **niveles valle** y son metabolizados por **CYP3A4** (azoles, macrólidos y diltiazem elevan niveles; rifampicina y fenitoína los reducen). **Toxicidades:** **nefrotoxicidad** (vasoconstricción de arteriola aferente), neurotoxicidad (temblor, PRES), **diabetes postrasplante (NODAT)**, hiperpotasemia, hipomagnesemia y microangiopatía trombótica (ciclosporina: hiperplasia gingival e hirsutismo). **Regla R4:** niveles *altos* + creatinina alta = nefrotoxicidad; niveles *subterapéuticos* + creatinina alta = sospechar rechazo agudo.
   - **Antiproliferativo — Micofenolato de mofetilo/sódico:** inhibe síntesis *de novo* de purinas en linfocitos; causa diarrea, **leucopenia** y es **altamente teratógeno** (en embarazo planeado cambiar a **azatioprina** ≥6 semanas antes con el equipo de trasplante).
   - **Esteroides (prednisona):** bloquean citocinas (NF-κB); generan hiperglucemia, osteoporosis, mala cicatrización y **enmascaramiento del abdomen agudo**.
   - **Inhibidores mTOR (sirolimus, everolimus):** efecto antineoplásico, pero **impiden la cicatrización de heridas y favorecen dehiscencias, linfoceles y fugas**; evitar en posoperatorio inmediato y suspender antes de cirugía electiva mayor.

### Donación y técnica quirúrgica
- **Donador vivo vs fallecido:** el donador vivo logra mejor función inmediata y supervivencia (vida media ~15–20 años vs ~10–12 años cadavérico). Requiere **consentimiento libre sin coerción y evaluación independiente del donador**. Se prefiere **nefrectomía laparoscópica izquierda** porque la **vena renal izquierda es más larga** (dejando siempre el mejor riñón al donador si existe asimetría >10%).
- **Implante heterotópico:** se coloca en **fosa ilíaca derecha** (vasos más superficiales, sin sigmoides) mediante **incisión de Gibson (en palo de hockey)** estrictamente **extraperitoneal** (confina fugas/hematomas y facilita biopsias).
- **Anastomosis:** 1) **vena renal** término-lateral a **vena ilíaca externa**; 2) **arteria renal** (con parche aórtico de Carrel en cadavérico) término-lateral a **arteria ilíaca externa** (o término-terminal a ilíaca interna); 3) **ureteroneocistostomía antirreflujo extravesical de Lich-Gregoir** (túnel submucoso en el detrusor) protegida con **catéter doble J** (retirado a las 4–6 semanas), preservando la grasa del triángulo dorado ureteral para evitar isquemia del uréter distal.

### Complicaciones quirúrgicas e infecciones por línea temporal
1. **Función retardada del injerto (DGF):** requerimiento de diálisis en la primera semana, usualmente por **necrosis tubular aguda** tras isquemia fría prolongada; descartar primero trombosis u obstrucción con **US Doppler** y biopsiar si persiste >7–10 días.
2. **Complicaciones vasculares:**
   - **Trombosis arterial o venosa (1–3%, primeras 48–72 h):** **caída brusca de diuresis hasta anuria** (en trombosis venosa, dolor intenso, injerto turgente y hematuria). **Urgencia quirúrgica absoluta:** confirmar con **US Doppler** (ausencia de flujo arterial o flujo diastólico reverso en venosa) y reexplorar de inmediato.
   - **Estenosis de arteria renal (1–10%, tardía):** **hipertensión arterial refractaria**, soplo sobre el injerto o caída de TFG con IECA/ARA-II; manejo de elección con **angioplastia percutánea ± stent**.
3. **Complicaciones urológicas:**
   - **Fuga urinaria (2–5%, semanas 1–2):** por isquemia ureteral distal o falla técnica; diagnóstico con **creatinina en líquido de drenaje muy superior a la sérica**. Manejo con sonda Foley + derivación (nefrostomía/doble J) en fugas pequeñas o **reimplantación quirúrgica** en necrosis/fugas mayores.
   - **Linfocele (5–15%, semanas a meses):** por sección de linfáticos ilíacos; **creatinina igual a la sérica** y predominio linfocitario. Si causa hidronefrosis o compresión venosa ilíaca, tratamiento definitivo con **fenestración laparoscópica hacia cavidad peritoneal**.

| Periodo postrasplante | Patógenos predominantes | Profilaxis y vigilancia clave |
|---|---|---|
| **Temprano (<1 mes)** | Infecciones **nosocomiales y quirúrgicas** (herida, ITU, neumonía, catéter, *C. difficile*) o transmitidas por el donador | Antibiótico profiláctico perioperatorio, retiro temprano de sondas y drenajes |
| **Intermedio (1–6 meses)** — *pico de inmunosupresión* | **Oportunistas:** **CMV** (máximo riesgo en Donador + / Receptor −), **poliomavirus BK** (nefropatía del injerto), ***Pneumocystis jirovecii***, *Aspergillus*, *Nocardia*, *Listeria*, TB | **Valganciclovir** (profilaxis CMV 3–6 meses) y **trimetoprima-sulfametoxazol** (*P. jirovecii*/ITU 6–12 meses); tamizaje de carga viral BK |
| **Tardío (>6 meses)** | Comunitarias, reactivaciones tardías (CMV, zóster) y **neoplasias asociadas a inmunosupresión** | Tamizaje dermatológico anual (**carcinoma espinocelular**, cáncer más frecuente postrasplante) y sospecha de **PTLD** por virus Epstein-Barr |

### Referencias
- KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients (actualizaciones vigentes).
- Fishman JA. Infection in Organ Transplantation. Am J Transplant 2017.
- CENATRA / Secretaría de Salud (México). Ley General de Salud y NOM-032-SSA3.
- Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022; Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- Un **crossmatch CDC positivo contra linfocitos T** contraindica el trasplante por **rechazo hiperagudo** (anticuerpos preformados → trombosis en minutos → trasplantectomía).
- El injerto se implanta en **fosa ilíaca derecha extraperitoneal** a **vasos ilíacos externos** con ureteroneocistostomía de **Lich-Gregoir**; en donador vivo se prefiere el **riñón izquierdo** (vena más larga).
- **Tacrolimus** (CNI) causa nefrotoxicidad y diabetes; los **inhibidores mTOR** retrasan cicatrización de heridas; el **micofenolato** es teratógeno (cambiar a azatioprina antes de embarazo).
- Anuria súbita en las primeras 48 h = sospechar **trombosis vascular** → **US Doppler inmediato** y quirófano.
- Drenaje con **creatinina mucho mayor que la sérica** = **fuga urinaria**; colección tardía con **creatinina igual a la sérica** + hidronefrosis = **linfocele** (tratamiento: **fenestración laparoscópica peritoneal**).
- Las infecciones oportunistas (**CMV, BK, *Pneumocystis*, *Aspergillus***) predominan entre **1 y 6 meses**; en <1 mes dominan infecciones quirúrgicas y nosocomiales.
`),
    sheet('tx-hepatico', '02', 'Trasplante hepático', `
## Trasplante hepático

### Definición e indicaciones principales
El **trasplante hepático ortotópico (THO)** sustituye el hígado enfermo por un injerto sano (de donador fallecido o vivo) y constituye el único tratamiento curativo definitivo para la cirrosis descompensada, la falla hepática aguda fulminante y el hepatocarcinoma seleccionado, alcanzando supervivencias de **85–90% al año y 70–75% a 5 años**.

1. **Cirrosis descompensada (>70% de los casos):** alcohol, **esteatohepatitis metabólica (MASH/MASLD)**, hepatitis viral crónica (VHC/VHB), cirrosis autoinmune, CBP, CEP, enfermedad de Wilson y hemocromatosis. Se refiere ante descompensación mayor (ascitis refractaria, hemorragia variceal, encefalopatía, PBE, síndrome hepatorrenal o hepatopulmonar) o **MELD ≥15**. En alcoholismo se exige valoración psicosocial integral y red de soporte.
2. **Falla hepática aguda (FHA):** **coagulopatía (INR ≥1.5) + encefalopatía** sin cirrosis previa (<26 semanas). Es prioridad nacional urgente porque la mortalidad sin trasplante supera 70–80% por edema cerebral. Se rige por los **criterios de King's College**:

| Etiología de la FHA | Criterios de King's College para trasplante urgente |
|---|---|
| **Por paracetamol (acetaminofén)** | **pH arterial <7.30** tras reanimación (independiente de encefalopatía)<br>**O los 3 juntos:** **INR >6.5** (TP >100 s) + **creatinina >3.4 mg/dL** + **encefalopatía grados III–IV** |
| **No por paracetamol** (viral, fármacos idiosincrásicos, Wilson, indeterminada) | **INR >6.5** independientemente de encefalopatía<br>**O ≥3 de 5:** edad <10 o >40 años; etiología desfavorable (no A–no B, fármacos); intervalo ictericia-encefalopatía >7 días; **INR >3.5**; **bilirrubina >17.5 mg/dL** |

3. **Hepatocarcinoma (CHC):** sobre cirrosis, el trasplante trata tumor y terreno preneoplásico (supervivencia a 5 años >70%):
   - **Criterios de Milán (estándar internacional):** **1 lesión ≤5 cm** o **hasta 3 lesiones ninguna >3 cm**, sin **invasión macrovascular** ni **metástasis extrahepáticas**.
   - **Criterios de la UCSF:** **1 lesión ≤6.5 cm**, o **≤3 lesiones con la mayor ≤4.5 cm y suma total ≤8 cm**, sin invasión vascular ni metástasis. Se emplean terapias puente o *downstaging* (TACE/TARE/ablación) y vigilancia de **AFP** (>1,000 ng/mL suele contraindicar salvo descenso sostenido).
4. **Pediatría y metabólicas:** atresia de vías biliares (indicación #1 pediátrica), déficit de alfa-1 antitripsina, hiperoxaluria primaria.

**Contraindicaciones absolutas:** sepsis no controlada, cáncer extrahepático activo, enfermedad cardiopulmonar irreversible (hipertensión portopulmonar grave refractaria con PAPm ≥45 mmHg), abuso activo de sustancias sin soporte y falta de adherencia insalvable. La trombosis portal aislada ya **no** contraindica el procedimiento si existe vaso esplácnico reconstruible.

### Asignación de órganos: MELD-Na y MELD 3.0
La asignación prioriza al más grave estimando mortalidad a 90 días (6–40 puntos), sustituyendo a Child-Pugh:
- **MELD original:** **bilirrubina, INR y creatinina** (el beneficio neto sobre manejo médico inicia en **MELD ≥15**).
- **MELD-Na:** incorporó el **sodio sérico** (125–137 mEq/L), marcador potente de hipertensión portal y mortalidad.
- **MELD 3.0 (OPTN/UNOS desde 2023):** agrega **sexo femenino** y **albúmina sérica** y fija un techo de creatinina en **3.0 mg/dL**, corrigiendo la histórica subestimación de gravedad en mujeres por menor masa muscular. En niños <12 años se usa **PELD**.

### Donador fallecido vs donador vivo
- **Donador fallecido:** injerto completo o **bipartido (*split liver*)** (segmento lateral izquierdo II–III para un niño y lóbulo derecho extendido IV–VIII para un adulto). La esteatosis macrovesicular severa (>30–60%) eleva el riesgo de no función primaria.
- **Donador vivo relacionado (LDLT):** segmento lateral izquierdo en niños o lóbulo derecho (V–VIII) en adultos. Exige **remanente hepático ≥30–35% en el donador** y un **cociente peso injerto/peso receptor (GRWR) ≥0.8%** en el receptor (GRWR <0.8% precipita el **síndrome de injerto pequeño — *small-for-size*** con colestasis, ascitis masiva e hipertensión portal por hiperflujo).

### Técnica quirúrgica: piggyback vs reemplazo de cava y secuencia de anastomosis
Con soporte transfusional guiado por **tromboelastografía (TEG/ROTEM)**, el procedimiento sigue dos estrategias cavales:
1. **Técnica *piggyback* (estándar actual):** preserva íntegra la **vena cava inferior retrohepática del receptor** ligando las venas cortas del caudado y anastomosando la cava del injerto al manguito de venas suprahepáticas (o lado a lado, técnica de Belghiti). Mantiene el retorno venoso en la fase anhepática, **evita el bypass venovenoso** y acorta la isquemia caliente.
2. **Reemplazo clásico de cava:** reseca la cava retrohepática nativa y realiza anastomosis suprahepática e infrahepática término-terminales (± **bypass venovenoso** femoroportaxilar si existe intolerancia hemodinámica al pinzamiento).

**Secuencia estricta de anastomosis:**
1. **Vena cava / venas suprahepáticas** (flujo venoso de salida).
2. **Vena porta** término-terminal (con *growth factor* para prevenir estenosis). Previo al despinzamiento se lava el injerto para depurar el potasio de la solución UW. Al despinzar ocurre la **reperfusión portal**, momento crítico por el **síndrome postreperfusión** (caída ≥30% de la PAM por ≥1 min en los primeros 5 min, bradicardia, hiperpotasemia, acidosis y riesgo de paro).
3. **Arteria hepática** término-terminal con microinstrumentación/lupas cuidando meticulosamente la íntima.
4. **Vía biliar (última):** **colédoco-colédoco término-terminal** (habitualmente sin tubo en T). En vía biliar enferma o ausente (**CEP, atresia biliar, retrasplante**) se realiza **hepático-yeyunostomía en Y de Roux**.

### Complicaciones críticas postrasplante hepático
Se monitorizan lactato, coagulación (INR/factor V), transaminasas, bilirrubina y **ultrasonido Doppler hepático obligatorio el día 1** y ante cualquier deterioro.

| Complicación | Ventana temporal | Clínica y diagnóstico clave | Conducta inmediata prioritaria |
|---|---|---|---|
| **No función primaria (PNF, 2–5%)** | Primeras 24–72 h | Encefalopatía/coma, **acidosis láctica refractaria, coagulopatía grave, transaminasas >5,000 UI/L, hipoglucemia y ausencia de bilis** con vasos permeables en Doppler | **Emergencia absoluta:** soporte intensivo y **retrasplante urgente** (prioridad máxima) |
| **Trombosis de arteria hepática (TAH, 2–5% adultos; ~8% niños)** | **Temprana (<30 d)** vs tardía | **Complicación vascular más temida.** El epitelio biliar del injerto depende **100% de la arteria hepática**. Cursa con alza abrupta de transaminasas, necrosis biliar/bilomas, colangitis o falla hepática. Confirmación: **US Doppler** (sin señal arterial) + **angio-TC/angiografía** | **TAH temprana:** **trombectomía/reconstrucción arterial de emergencia** si se detecta en horas sin necrosis; si falla o hay necrosis biliar/hepática → **retrasplante urgente** |
| **Trombosis portal (1–3%)** | Temprana o tardía | Ascitis súbita, sangrado variceal, falla del injerto; Doppler sin flujo portal | Temprana: **trombectomía quirúrgica urgente** o trombólisis |
| **Complicaciones biliares (10–25%, las más frecuentes)** | Fuga <30 d; estenosis meses | **Fuga biliar** (bilis en drenaje, bilioma, fiebre) y **estenosis anastomótica** (técnica) vs **no anastomótica/isquémica** (múltiples intrahepáticas → **descartar TAH siempre**) | **CPRE con dilatación y stent** como primera línea (>80% éxito); CTPH o derivación quirúrgica si hay Y de Roux o falla endoscópica |
| **Rechazo celular agudo (15–30%)** | Días 7–30 | Fiebre y elevación de bilirrubina, FA, GGT y transaminasas. **Biopsia: tríada de Snover** (infiltrado portal mixto, lesión ductal biliar y endotelialitis venular) | Optimizar tacrolimus + **pulsos de metilprednisolona IV** (>80–90% respuesta); ATG solo si corticorresistente (el hígado rara vez sufre rechazo hiperagudo) |

### Seguimiento
El hígado requiere menos inmunosupresión a largo plazo (frecuentemente tacrolimus en monoterapia tras retirar esteroides). El seguimiento incluye niveles de tacrolimus, prevención de recurrencia (inmunoglobulina anti-HBs + análogo nucleósido en VHB; vigilancia de CHC con TC y AFP; abstinencia alcohólica), prevención de CMV y cribado de cáncer *de novo* (piel, PTLD, colon en CEP/CUCI).

### Referencias
- AASLD / AST Practice Guidelines for Liver Transplantation; EASL Clinical Practice Guidelines: Liver Transplantation.
- Kim WR, et al. MELD 3.0. Gastroenterology 2021; Mazzaferro V, et al. Milan Criteria. NEJM 1996.
- Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022; Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- **Criterios de Milán (CHC):** **1 lesión ≤5 cm** o **≤3 lesiones ≤3 cm**, sin invasión macrovascular ni metástasis; **UCSF** amplía a 1 ≤6.5 cm o ≤3 ≤4.5 cm (suma ≤8 cm).
- En **FHA por paracetamol**, un **pH arterial <7.30** tras reanimación cumple por sí solo los **criterios de King's College** para trasplante urgente.
- **MELD 3.0** suma **sexo femenino y albúmina** al MELD-Na (bilirrubina, INR, creatinina, sodio); el trasplante supera en supervivencia al manejo conservador a partir de **MELD ≥15**.
- La técnica **piggyback** preserva la cava retrohepática evitando el bypass venovenoso; orden obligatorio de anastomosis: **1) cava/suprahepáticas → 2) porta (reperfusión) → 3) arteria hepática → 4) vía biliar**.
- La **trombosis temprana de arteria hepática** es una emergencia (riesgo de necrosis biliar y pérdida del injerto → trombectomía urgente o retrasplante); toda estenosis biliar no anastomótica obliga a **descartar TAH con Doppler**.
- La biopsia de **rechazo agudo hepático** integra la **tríada de Snover**: infiltrado portal mixto, lesión ductal biliar y endotelialitis venular.
`),
    sheet('tx-multiorganico', '03', 'Trasplante multiorgánico y procuración', `
## Trasplante multiorgánico y procuración

### Definición y relevancia
La **procuración multiorgánica** comprende la detección del potencial donador fallecido en **muerte encefálica**, su mantenimiento fisiológico intensivo, la extracción quirúrgica reglada con soluciones preservadoras en frío y la asignación equitativa de órganos. El R4 de Cirugía General es un actor clave para identificar potenciales donadores en urgencias y UCI, activar al coordinador de donación y dominar las bases de la preservación orgánica y del trasplante pancreático, intestinal y multivisceral.

### Muerte encefálica: fisiopatología, criterios clínicos y marco legal en México
Es la pérdida completa e irreversible de todas las funciones de los hemisferios cerebrales y del tallo encefálico. La herniación del tallo desata inicialmente una **tormenta simpática (reflejo de Cushing)** con hipertensión extrema, edema pulmonar neurogénico y daño miocárdico, seguida de **colapso vasopléjico**, **hipotermia** y **panhipopituitarismo** con **diabetes insípida central**.

#### Criterios clínicos obligatorios
1. **Exclusión previa de confusores reversibles:** causa neurológica estructural conocida e irreversible en neuroimagen; **temperatura central ≥35–36 °C**; estabilidad hemodinámica (**PAS ≥90–100 mmHg / PAM ≥65 mmHg**); ausencia de sedantes, depresores del SNC o bloqueadores neuromusculares (esperar ≥5 vidas medias); y exclusión de alteraciones metabólicas o endocrinas graves.
2. **Exploración neurológica:** **coma profundo arreactivo** (Glasgow 3 sin respuesta motora encefálica; los reflejos medulares como el signo de Lázaro no la descartan) y **ausencia total de reflejos de tallo**: fotomotor (pupilas fijas), corneal, **oculocefálicos** («ojos de muñeca»), **oculovestibulares** (agua helada en conductos auditivos), **nauseoso** y **tusígeno**.
3. **Prueba de apnea:** preoxigenación con FiO2 100% por 10 min hasta PaCO2 basal 35–45 mmHg; desconexión del ventilador con **oxígeno continuo intratraqueal a 6 L/min** (oxigenación apneica) observando durante 8–10 min. Es **positiva** si no hay esfuerzo respiratorio con **PaCO2 ≥60 mmHg o incremento ≥20 mmHg sobre la basal**. Si ocurre hipotensión, hipoxemia o arritmia, se aborta de inmediato y se recurre a un estudio de flujo cerebral.

#### Marco legal en México (Ley General de Salud arts. 343–345 y CENATRA)
- **Artículo 343:** establece la pérdida de la vida por **muerte encefálica** o **paro cardiaco irreversible** y enuncia los signos clínicos de muerte encefálica (ausencia permanente de conciencia, respiración espontánea y reflejos de tallo).
- **Artículo 344:** exige **obligatoriamente un estudio confirmatorio** documental: **electroencefalograma (EEG)** con silencio eléctrico absoluto corroborado por especialista, **o cualquier estudio que demuestre ausencia permanente de flujo encefálico arterial** (angiografía cerebral de 4 vasos — estándar de oro —, angio-TC cerebral validada, Doppler transcraneal con flujo reverberante o gammagrafía cerebral). La certificación debe firmarla personal médico ajeno al equipo de procuración y trasplante.
- **Artículo 345 y CENATRA:** tras certificar la pérdida de la vida y recabar el consentimiento (expreso o tácito ratificado por familiares disponentes secundarios; en muertes violentas con autorización ágil del Ministerio Público), el **CENATRA** coordina la distribución nacional trazable en el registro SIRNT bajo comités internos de trasplante y la NOM-032-SSA3. La donación en **asistolia controlada (Maastricht III)** representa además una vía complementaria en expansión internacional.

### Mantenimiento hemodinámico y endocrino del donador multiorgánico
Tras certificar la muerte encefálica, el objetivo pasa a proteger la perfusión orgánica («regla de los 100» actualizada):

| Dominio | Metas en UCI | Intervención prioritaria |
|---|---|---|
| **Hemodinamia** | **PAM ≥65 mmHg** (PAS ≥100), PVC 6–10 mmHg (restrictiva si se procuran pulmones), lactato <2 | Cristaloides balanceados sin sobrecarga; **vasopresina** (0.01–0.04 UI/min, corrige vasoplejía y diabetes insípida) + **norepinefrina** en dosis mínimas |
| **Diabetes insípida y electrolitos** | Diuresis **1–3 mL/kg/h**, **Na+ <150–155 mEq/L** (Na+ >155–160 causa falla primaria del injerto hepático) | Ante poliuria >3–4 mL/kg/h con densidad <1.005: **desmopresina (DDAVP 1–4 µg IV c/6–8 h)** o vasopresina + agua libre (glucosada 5%/hipotónica) |
| **Ventilación** | SpO2 ≥95%, PaO2 >100 mmHg, PaO2/FiO2 >300 | **Ventilación protectora** (Vt 6–8 mL/kg, PEEP 8–10 cmH2O), reclutamiento y aspiración estéril |
| **Endocrino y temperatura** | Glucemia **120–180 mg/dL**, normotermia **>35.5 °C** | Terapia hormonal combinada en inestables: **metilprednisolona** (15 mg/kg IV), **levotiroxina IV**, vasopresina e **insulina IV**; mantas térmicas |
| **Hematología** | Hb ≥7–8 g/dL, plaquetas >50,000 | Transfusión juiciosa y cultivos seriados |

### Procuración multiorgánica en bloque, preservación e isquemia fría
1. **Disección y perfusión:** incisión **esternolaparotomía media**; maniobra de **Cattell-Braasch** exponiendo **aorta infrarrenal** y VCI; disección de **aorta supracelíaca** y vena mesentérica inferior (si perfusión dual aórtico-portal), vigilando arterias hepáticas aberrantes. Se administra **heparina IV plena (300 UI/kg)**, se canulan los vasos y, coordinado con el equipo torácico, se efectúa **pinzamiento cruzado de aorta supracelíaca** (inicio de isquemia fría), **descompresión venosa** en VCI/aurícula derecha, **perfusión fría a presión** y **enfriamiento tópico con hielo granizado** (<4 °C, reduce metabolismo celular ~90%).
2. **Orden de extracción:** **1.º corazón → 2.º pulmones → 3.º hígado → 4.º páncreas/intestino → 5.º riñones en bloque**, concluyendo con **injertos vasculares ilíacos**, bazo y ganglios linfáticos para tipificación/crossmatch.
3. **Soluciones de preservación:** **UW (Universidad de Wisconsin)** es de tipo **intracelular** (alta en K+ ~125 mEq/L, lactobionato, rafinosa, glutatión, adenosina; requiere lavado previo a reperfusión hepática); **HTK (Custodiol — histidina-triptófano-cetoglutarato)** es **extracelular** (baja en K+ ~10 mEq/L y baja viscosidad que lava bien el lecho biliar, requiere mayor volumen).

| Órgano | Tiempo máximo habitual de isquemia fría estática | Preservación avanzada en máquina |
|---|---|---|
| **Corazón** | **4 – 6 horas** | Perfusión normotérmica *ex situ* (OCS) |
| **Pulmones** | **6 – 8 horas** | Perfusión pulmonar *ex vivo* (EVLP) |
| **Intestino delgado** | **6 – 8 horas** | Alta susceptibilidad a lesión mucosa |
| **Hígado** | **8 – 12 horas** | Máquinas **HOPE** (hipotérmica oxigenada) y **NMP** (normotérmica) rescatan injertos marginales |
| **Páncreas** | **12 – 18 horas** | Frío estático (preferencia por UW) |
| **Riñón** | **24 – 36 horas** | Perfusión pulsátil hipotérmica (reduce DGF) |

### Generalidades de trasplante de páncreas, intestino y multivisceral
- **Trasplante de páncreas:** indicado en **DM1** (y DM2 muy seleccionada): **SPK** (simultáneo páncreas-riñón, ~75–80% en DM1 con ERC terminal; el riñón sirve como «centinela» de rechazo), **PAK** (páncreas tras riñón de donador vivo) y **PTA** (páncreas aislado en DM1 lábil con **hipoglucemias inadvertidas letales**). El injerto pancreatoduodenal se implanta en fosa ilíaca derecha con **injerto arterial en Y** (AMS + esplénica), drenaje venoso sistémico (ilíaca/cava) y **drenaje exocrino entérico** (duodeno-yeyunostomía, superior al drenaje vesical histórico que provocaba acidosis metabólica por pérdida de bicarbonato y cistitis química). La principal causa técnica de pérdida temprana es la **trombosis venosa pancreática** (5–10%).
- **Trasplante de intestino y multivisceral:** reservado para **falla intestinal irreversible** con **complicaciones amenazantes de la nutrición parenteral (NPT)**: hepatopatía avanzada (IFALD), trombosis de ≥2 accesos venosos centrales mayores o sepsis recurrente por catéter. Variantes: intestino aislado, **hígado-intestino** (si cirrosis por NPT) y **multivisceral** (estómago, duodeno, páncreas, intestino ± hígado en trombosis portomesentérica difusa completa o tumores mesentéricos irresecables). Presenta la **mayor tasa de rechazo agudo** por su abundante tejido linfoide (GALT), requiriendo ileostomía de vigilancia para biopsias seriadas.

### Referencias
- Ley General de Salud de México (arts. 343–345) y lineamientos del CENATRA / NOM-032-SSA3.
- Greer DM, et al. AAN/AAP/CNS/SCCM Brain Death Consensus Guideline. Neurology 2023.
- Kotloff RM, et al. SCCM/ACCP/AOPO Management of the Potential Organ Donor. Crit Care Med 2015.
- Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022; Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- Para declarar **muerte encefálica** descarta primero confusores (hipotermia <35–36 °C, sedantes, relajantes, hipotensión); la **prueba de apnea** confirma ausencia de respiración cuando **PaCO2 ≥60 mmHg o sube ≥20 mmHg**.
- En México, el **art. 344 de la Ley General de Salud** hace **obligatorio un estudio confirmatorio** (EEG isoeléctrico o estudio de ausencia de flujo cerebral) avalado por médicos ajenos al equipo de trasplante.
- En el mantenimiento del donador, trata la **diabetes insípida** con **desmopresina (DDAVP)** o vasopresina y agua libre para mantener **Na+ <150–155 mEq/L** (la hipernatremia grave causa falla primaria hepática).
- **Isquemia fría máxima:** corazón **4–6 h**, pulmón/intestino **6–8 h**, hígado **8–12 h**, páncreas **12–18 h** y riñón **24–36 h**.
- **UW** es solución intracelular (alta en K+, lavar antes de reperfundir hígado); **HTK (Custodiol)** es baja en K+ y baja viscosidad.
- **SPK** con **drenaje exocrino entérico** es el estándar en DM1 con ERC; el **trasplante intestinal** se indica únicamente ante complicaciones graves de la NPT en falla intestinal irreversible.
`),
    sheet('tx-bazo', '04', 'Bazo y cirugía en el paciente inmunosuprimido', `
## Bazo y cirugía en el paciente inmunosuprimido

### Anatomía quirúrgica, histología y funciones esplénicas
El **bazo** (peso normal 75–150 g, ~11–12 cm) ocupa el hipocondrio izquierdo protegido por las costillas 9.ª–11.ª y se fija mediante cuatro ligamentos clave: **gastroesplénico** (contiene los **vasos gástricos cortos**; evitar necrosis de pared gástrica al ligarlos), **esplenorrenal** (contiene el pedículo esplénico y la **cola del páncreas**, ubicada a **<1 cm del hilio en 30–70%** de los casos y principal estructura vulnerable a lesión iatrogénica), **esplenocólico** y **esplenofrénico**. La arteria esplénica (del tronco celíaco) presenta un patrón terminal **distribuido** (~70%) o **magistral** (~30%); la vena esplénica se une a la mesentérica superior para formar la porta.

**Histología y fisiología:**
- **Pulpa blanca (~25%, inmunológica):** integrada por la **vaina linfoide periarteriolar (linfocitos T)**, **folículos linfoides (linfocitos B)** y la **zona marginal**, indispensable para capturar antígenos polisacáridos de bacterias encapsuladas, producir **IgM** rápida y sintetizar opsoninas (**tuftsina y properdina**).
- **Pulpa roja (~75%, hematológica):** **cordones de Billroth y sinusoides** encargados de la hemocatéresis, remoción de inclusiones intraeritrocitarias (*pitting*: los **cuerpos de Howell-Jolly** en frotis periférico son el sello clásico de asplenia) y almacenamiento de **~30% de las plaquetas** (hasta 80–90% en esplenomegalia masiva).

### Indicaciones de esplenectomía y bazo accesorio
| Categoría | Indicaciones principales | Puntos clave de manejo |
|---|---|---|
| **Hematológicas benignas** | 1. **PTI crónica refractaria** a esteroides/IVIG y segunda línea (agonistas TPO o rituximab; diferida >12 meses)<br>2. **Esferocitosis hereditaria** moderada/grave (curación >95%; diferir idealmente hasta **>6 años** + colecistectomía si hay litiasis)<br>3. **Anemia hemolítica autoinmune por Ac calientes** refractaria<br>4. Talasemia mayor o drepanocitosis con secuestro recurrente | En PTI evitar transfusión rutinaria previa de plaquetas (se destruyen de inmediato); preparar con **IVIG/esteroides** y, de requerirse plaquetas, transfundir **después de ligar la arteria esplénica**. **Buscar bazo accesorio siempre.** |
| **Esplenomegalia y masas** | Esplenomegalia masiva sintomática (>20 cm: mielofibrosis, linfoma de zona marginal, hiperesplenismo), absceso refractario a drenaje percutáneo, quiste gigante sintomático o neoplasia | Alto riesgo de sangrado y trombosis esplenoportal; valorar embolización previa o cirugía mano-asistida/abierta |
| **Trauma esplénico** | **Inestabilidad hemodinámica** sin respuesta a reanimación, lesiones **AAST IV–V** inestables, fracaso del manejo no operatorio/angioembolización o lesión asociada que exija laparotomía | En pacientes estables (**WSES 2017**), el estándar es **manejo no operatorio ± angioembolización** para preservar la inmunidad |

**Bazo accesorio:** presente en **15–30%** de la población. Si se pasa por alto en PTI o esferocitosis, se hipertrofia y provoca **recidiva** (detectada por gammagrafía con eritrocitos dañados con Tc-99m). Su búsqueda sistemática al iniciar la cirugía sigue su frecuencia anatómica: **1.º hilio esplénico (#1, >50–70%)**, 2.º ligamento esplenocólico y cola pancreática, 3.º ligamento gastroesplénico, 4.º epiplón mayor y mesenterio.

### Técnica quirúrgica: laparoscópica vs abierta
- **Esplenectomía laparoscópica (elección en hematología electiva):** paciente en **decúbito lateral derecho** («bazo colgante»); búsqueda inicial de bazos accesorios; sección de ligamento esplenocólico y vasos cortos; movilización medial separando bajo visión directa la **cola del páncreas**; división hiliar con **engrapadora lineal vascular**; extracción en bolsa (morcelación suave solo en benignos; **nunca morcelar en sospecha de linfoma**, extrayendo intacto por incisión suprapúbica para preservar arquitectura y evitar **esplenosis**).
- **Esplenectomía abierta (trauma inestable o esplenomegalia masiva >20–25 cm):** laparotomía media en trauma con movilización posterolateral rápida (división del esplenorrenal elevando el bazo hacia la línea media), control manual inmediato del hilio, protección de la cola pancreática y ligadura vascular. En esplenomegalia masiva electiva es útil la **ligadura precoz de la arteria esplénica** en el borde superior del páncreas para descomprimir el órgano.

### Complicaciones y prevención de OPSI
Las complicaciones incluyen hemorragia, **fístula pancreática por lesión de la cola** (1–5%; amilasa en drenaje >3× sérica), atelectasia basal izquierda, lesión gástrica, **trombocitosis reactiva** (valorar AAS si >1,000,000/µL) y **trombosis venosa esplenoportal** (vigilar en esplenomegalia masiva con TC ante dolor o fiebre posoperatoria y dar profilaxis extendida).

**Sepsis fulminante posesplenectomía (OPSI):** riesgo de por vida con progresión explosiva a choque séptico, CID, necrosis suprarrenal (Waterhouse-Friderichsen) y **mortalidad de 50–70%**.
- **Gérmenes encapsulados principales:** ***Streptococcus pneumoniae*** (>50–70%), ***Neisseria meningitidis*** y ***Haemophilus influenzae* tipo b (Hib)** (además de ***Capnocytophaga canimorsus*** en mordeduras de perro/gato → amoxicilina-clavulanato inmediata).
- **Esquema y tiempos de vacunación (CDC / ACIP):**
  - **Esplenectomía electiva:** vacunar al menos **14 días ANTES** de operar.
  - **Esplenectomía de urgencia (trauma):** vacunar **14 días DESPUÉS** de la cirugía (o previo al alta si hay riesgo de pérdida de seguimiento).
  - **Vacunas obligatorias:** antineumocócica (**PCV20** o **PCV15 + PPSV23** a las 8 semanas), antimeningocócica (**MenACWY + MenB**), **Hib** y **vacuna anual contra influenza**.
  - **Educación vital:** portar identificación de asplenia y acudir a urgencias de inmediato ante cualquier fiebre >38 °C para iniciar antibiótico IV empírico (ceftriaxona + vancomicina) sin esperar cultivos.

### Abdomen agudo en el paciente inmunosuprimido, trasplantado y neutropénico
**Principio rector R4:** **los esteroides e inmunosupresores borran la fiebre, el rebote y la leucocitosis**. Una exploración abdominal «tranquila» y leucocitos normales jamás descartan perforación libre en un trasplantado o inmunocomprometido. Mantener **umbral sumamente bajo para TC abdominal contrastada temprana y exploración quirúrgica**, coordinando siempre con el equipo de trasplante o hematología (administrar hidrocortisona IV de estrés perioperatoria en usuarios crónicos de esteroides para evitar crisis suprarrenal; recordar que los inhibidores mTOR comprometen gravemente las anastomosis).

1. **Colitis neutropénica (tiflitis):** inflamación necrosante del **ciego y colon ascendente** en pacientes con **neutropenia profunda (<500 neutrófilos/µL)** a los 7–14 días de quimioterapia citotóxica.
   - **Diagnóstico:** tríada de **fiebre, dolor en FID y neutropenia profunda** + **TC abdominal** demostrando **engrosamiento parietal cecal >4 mm**, estriación pericólica o neumatosis (contraindicados colonoscopia y enemas por riesgo de perforación).
   - **Tratamiento:** **manejo médico conservador inicial** en la forma no complicada: reposo intestinal, hidratación, **antibiótico IV antipseudomónico + anaerobios** (piperacilina-tazobactam o cefepime + metronidazol, o meropenem; sumar antifúngico si fiebre >72 h) y **G-CSF**. **Indicaciones estrictas de cirugía (Shamberger):** 1) **perforación libre**; 2) **hemorragia digestiva persistente** pese a corregir coagulopatía/plaquetas; 3) **necrosis transmural, absceso no drenable o sepsis refractaria**. En quirófano: **hemicolectomía derecha con ileostomía terminal y fístula mucosa** (evitar anastomosis primaria en neutropenia profunda).
2. **Perforación intestinal enmascarada por esteroides:** elevada incidencia de **diverticulitis perforada** (clásica en trasplantados renales con riñón poliquístico) y úlcera péptica perforada. Evoluciona más rápido a peritonitis fecal y presenta mayor recurrencia (las guías WSES/ASCRS sugieren vigilancia estrecha y valorar resección electiva tras episodio confirmado en inmunosupresión crónica intensa).
3. **Infecciones gastrointestinales por CMV:** típicas entre 1–6 meses postrasplante o VIH avanzado (CD4 <50); producen vasculitis isquémica con **úlceras perforadas o hemorragia masiva** (biopsia con inclusiones en «ojo de búho» + PCR). Tratamiento con **ganciclovir IV** y resección con estoma si hay perforación o sangrado refractario.
4. **Sepsis perianal en neutropénicos:** dolor anal intenso y fiebre sin pus fluctuante por falta de neutrófilos. **Evitar tactos rectales repetidos y enemas**; antibiótico IV antipseudomónico + anaerobios y drenaje/desbridamiento urgente solo si existe fluctuación clara o fascitis necrosante (Fournier).
5. **Urgencias comunes en trasplantados:** apendicitis y colecistitis aguda cursan con tasas de gangrena y perforación hasta 3 veces mayores por retraso diagnóstico; en colecistitis aguda, colecistectomía laparoscópica temprana (o colecistostomía percutánea en el paciente crítico).

### Referencias
- Coccolini F, et al. WSES Classification and Guidelines for Splenic Trauma. World J Emerg Surg 2017.
- Neunert C, et al. ASH 2019 Guidelines for Immune Thrombocytopenia. Blood Adv 2019.
- CDC / ACIP. Immunization Schedule for Asplenia (2024–2025); Sartelli M, et al. WSES Diverticulitis Guidelines 2020.
- Sabiston, Tratado de cirugía, 21.ª ed. Elsevier, 2022; Schwartz, Principios de cirugía, 11.ª ed. McGraw-Hill, 2019.

### Perlas de examen
- La **cola del páncreas** yace a <1 cm del hilio en el **ligamento esplenorrenal**; es la estructura más vulnerable durante la esplenectomía (fístula pancreática).
- El **bazo accesorio** existe en 15–30% (sitio #1: **hilio esplénico**); omitirlo en PTI o esferocitosis hereditaria causa recidiva.
- Prevención de **OPSI** (***S. pneumoniae***, *N. meningitidis*, *H. influenzae* tipo b; mortalidad 50–70%): vacunar **14 días ANTES** en electiva o **14 días DESPUÉS** en urgencia por trauma.
- En **PTI**, si se transfunden plaquetas intraoperatoriamente, se administran **después de ligar la arteria esplénica**.
- En el **paciente trasplantado o con esteroides**, el abdomen «blando» y los leucocitos normales **no descartan perforación**: umbral muy bajo para **TC temprana** y manejo conjunto con trasplante.
- La **colitis neutropénica (tiflitis)** (fiebre + dolor en FID + neutrófilos <500/µL + ciego >4 mm en TC) se trata **inicialmente de forma médica** (antibiótico antipseudomónico + anaerobios + G-CSF); se opera solo ante **perforación, hemorragia persistente, necrosis o sepsis refractaria**.
`),
  ],
};
