// R3 · páncreas: una hoja por subtema (desarrollo completo). Ver hoja.js.
import { sheet } from './hoja.js?v=20261122h';

export const R3C = {
  'ap-r3-pancreas': [
    sheet('pan-aguda', '01', 'Pancreatitis aguda', `
## Pancreatitis aguda

### Definición
Inflamación aguda del páncreas por activación prematura de las enzimas pancreáticas dentro de la glándula, que produce autodigestión, edema, necrosis y una respuesta inflamatoria sistémica de intensidad variable. Según la **clasificación de Atlanta revisada (2012)** el diagnóstico requiere **dos de tres criterios**:
1. Dolor abdominal compatible (epigástrico, de inicio agudo, persistente, a menudo irradiado a la espalda).
2. Lipasa o amilasa séricas **mayores de 3 veces** el límite superior normal.
3. Hallazgos característicos en tomografía contrastada, resonancia o ultrasonido.

Si el dolor es típico y las enzimas son diagnósticas, **no se necesita imagen** para confirmar el diagnóstico.

### Epidemiología
- Incidencia de 30 a 40 casos por 100,000 habitantes al año; es una de las causas más frecuentes de hospitalización gastrointestinal.
- Mortalidad global de 1 a 5%; en la forma grave con falla orgánica persistente sube a 15-30%, y en la necrosis infectada con falla orgánica puede pasar de 30%.
- **Litiasis biliar y alcohol** explican 70-80% de los casos. En México y en la población derechohabiente del IMSS predomina la etiología **biliar**, sobre todo en mujeres; la alcohólica predomina en hombres.
- Otras causas: hipertrigliceridemia (tercera causa; triglicéridos mayores de 1,000 mg/dL), hipercalcemia, post-CPRE (3-5% de las CPRE), fármacos (azatioprina, ácido valproico, estrógenos, furosemida, inhibidores de DPP-4 con evidencia débil), trauma, infecciones (parotiditis, CMV), autoinmune, genética (PRSS1, SPINK1, CFTR), páncreas divisum y tumores (todo paciente mayor de 40-50 años con pancreatitis "idiopática" requiere descartar neoplasia).

### Anatomía y fisiopatología
El evento inicial es la **activación intracelular del tripsinógeno a tripsina** (colocalización de zimógenos con enzimas lisosomales, elevación sostenida del calcio intracelular). La tripsina activa en cascada elastasa, fosfolipasa A2 y lipasa; se producen necrosis acinar, daño endotelial y liberación de citocinas (TNF-alfa, IL-1, IL-6, IL-8). La fuga capilar genera **tercer espacio**, hipovolemia y SIRS, que pueden progresar a falla orgánica.

- **Biliar:** obstrucción transitoria del ámpula por un cálculo (sobre todo microlitiasis o cálculos menores de 5 mm), con reflujo y aumento de la presión ductal.
- **Alcohólica:** secreción proteica viscosa, tapones ductales, sensibilización acinar y toxicidad directa del etanol y sus metabolitos.
- **Hipertrigliceridemia:** lipólisis intrapancreática con ácidos grasos libres tóxicos.

La historia natural es bifásica: **fase temprana** (primera semana), dominada por SIRS y falla orgánica; y **fase tardía** (después de la primera semana), dominada por complicaciones locales (necrosis, colecciones, infección). La necrosis infectada aparece típicamente entre la 2.ª y la 4.ª semana por translocación bacteriana intestinal.

### Clasificación de gravedad (Atlanta 2012)
| Grado | Definición |
|---|---|
| Leve | Sin falla orgánica ni complicaciones locales o sistémicas |
| Moderadamente grave | Falla orgánica **transitoria** (menor de 48 h) o complicaciones locales o exacerbación de comorbilidad |
| Grave | Falla orgánica **persistente** (mayor de 48 h), única o múltiple |

La falla orgánica se define con el **score de Marshall modificado** ≥2 en el aparato respiratorio (PaO2/FiO2), renal (creatinina) o cardiovascular (presión sistólica y respuesta a líquidos).

**Tipos morfológicos:** pancreatitis **intersticial edematosa** (80-90%) y **necrosante** (necrosis del parénquima, peripancreática o ambas).

### Cuadro clínico
Dolor epigástrico intenso, de inicio súbito, irradiado en banda a la espalda, que empeora en decúbito y mejora con la flexión del tronco; náusea y vómito en 90%, distensión, íleo y fiebre baja. La exploración muestra dolor epigástrico, defensa y ruidos disminuidos. **Grey Turner** (equimosis en flancos) y **Cullen** (periumbilical) traducen hemorragia retroperitoneal: graves pero tardíos e infrecuentes (menos de 3%). Ictericia sugiere coledocolitiasis persistente o colangitis. La forma grave se manifiesta con taquicardia, hipotensión, oliguria, taquipnea, hipoxemia y alteración del estado de alerta.

### Diagnóstico
- **Enzimas:** la **lipasa** es más sensible y específica y se mantiene elevada más tiempo (8-14 días); la amilasa se normaliza en 3-5 días y puede ser normal en la hipertrigliceridémica y la alcohólica. **La magnitud de la elevación no se correlaciona con la gravedad**; no repetir enzimas para seguir la evolución.
- **Laboratorio de ingreso:** biometría (hematocrito), química (BUN, creatinina, glucosa), calcio, **triglicéridos**, pruebas de función hepática (ALT mayor de 150 U/L en las primeras 48 h tiene un VPP de ~85% para etiología biliar), gasometría y lactato, PCR.
- **Ultrasonido abdominal en todos** al ingreso para buscar litiasis vesicular y dilatación de la vía biliar.
- **Tomografía contrastada:** **no de rutina** al ingreso. Indicaciones: duda diagnóstica, ausencia de mejoría a las 48-72 h, deterioro clínico o sospecha de complicación. Si se hace para valorar necrosis, idealmente **después de 72-96 h** (antes subestima la necrosis). El **índice de gravedad por TC (Balthazar-Ranson modificado, Mortele)** combina inflamación y porcentaje de necrosis.
- **Colangiorresonancia o ultrasonido endoscópico:** para coledocolitiasis no confirmada o pancreatitis idiopática tras un primer estudio negativo.

### Predicción de gravedad
| Escala | Componentes | Uso |
|---|---|---|
| **BISAP** (24 h) | BUN mayor de 25 mg/dL, alteración mental, SIRS, edad mayor de 60, derrame pleural | ≥3 puntos: mortalidad mayor de 5% |
| **Ranson** (48 h) | 5 criterios al ingreso + 6 a las 48 h | ≥3 grave; poco práctico hoy |
| **APACHE II** | Fisiológico completo | ≥8 grave; útil en UCI |
| **SIRS persistente** | Más de 48 h | Mejor predictor simple de falla orgánica y muerte |
| Hematocrito y BUN | Hemoconcentración mayor de 44% o BUN en ascenso a las 24 h | Reanimación insuficiente |
| PCR | Mayor de 150 mg/L a las 48 h | Sugiere necrosis |

### Tratamiento médico
- **Reanimación hídrica:** temprana y **moderada, no agresiva**, preferentemente con **Ringer lactato**. El ensayo **WATERFALL (NEJM 2022)** comparó reanimación agresiva (bolo de 20 mL/kg y 3 mL/kg/h) contra moderada (bolo de 10 mL/kg solo si hay hipovolemia y luego 1.5 mL/kg/h) y fue detenido por **más sobrecarga de volumen con la agresiva sin mejorar desenlaces**. Ajustar por metas: diuresis mayor de 0.5 mL/kg/h, frecuencia cardiaca, presión arterial media, BUN y hematocrito; reevaluar a las 12, 24, 48 y 72 h.
- **Analgesia:** multimodal; los opioides son seguros (no hay evidencia clínica de que la morfina empeore la pancreatitis). Considerar analgesia epidural en dolor refractario en UCI.
- **Nutrición:** en la leve, **vía oral temprana** (dieta blanda baja en grasa) en cuanto el dolor lo permita, sin esperar a que se normalice la lipasa. En la grave, **nutrición enteral** en las primeras 24-72 h (la sonda nasogástrica es tan segura como la nasoyeyunal); la nutrición parenteral solo si la enteral no es posible o no cubre los requerimientos tras 5-7 días.
- **Antibióticos:** **no profilácticos**, aunque haya necrosis. Solo ante infección demostrada o fuertemente sospechada (gas en la necrosis en TC, deterioro tardío con bacteriemia) o infección extrapancreática (colangitis, neumonía). De elección carbapenémicos, quinolonas o metronidazol por su penetración al tejido pancreático. La punción con aguja fina ya no es rutinaria.
- **Hipertrigliceridemia:** insulina en infusión (con glucosa si es necesario), heparina con cautela; plasmaféresis en casos seleccionados (hipocalcemia, acidosis láctica, falla orgánica). Después, fibratos y control metabólico.
- **CPRE:** urgente (en las primeras 24 h) solo si hay **colangitis** concomitante; temprana si hay obstrucción biliar persistente (ictericia progresiva, colédoco dilatado). **No** está indicada en la pancreatitis biliar sin colangitis (ensayo APEC, Lancet 2020).
- Vigilar y tratar el síndrome compartimental abdominal (presión intraabdominal mayor de 20 mmHg con falla orgánica nueva).

### Tratamiento quirúrgico e intervencionista
- **Colecistectomía en la misma hospitalización** en la pancreatitis biliar leve (**ensayo PONCHO, Lancet 2015**: reduce las complicaciones biliares recurrentes de 17% a 5%). En la grave o necrosante, diferir hasta que se resuelvan las colecciones o hayan pasado unas 6 semanas.
- En pacientes no aptos para cirugía, la esfinterotomía endoscópica reduce la recurrencia de pancreatitis, no la de cólico o colecistitis.
- **Necrosis infectada:** abordaje **escalonado (step-up)**. Ensayo **PANTER (NEJM 2010)**: el drenaje percutáneo o endoscópico seguido, si es necesario, de necrosectomía mínimamente invasiva redujo complicaciones mayores y muerte frente a la necrosectomía abierta primaria. Ensayo **TENSION (Lancet 2018)**: el step-up endoscópico es equivalente al quirúrgico en mortalidad y produce menos fístulas pancreáticas.
- **Momento:** retrasar la intervención hasta que la colección esté **encapsulada (necrosis amurallada, ~4 semanas)**. El ensayo **POINTER (NEJM 2021)** no mostró beneficio del drenaje inmediato frente al pospuesto, que además requirió menos intervenciones.
- Indicaciones de cirugía abierta hoy: síndrome compartimental refractario, isquemia o perforación intestinal, hemorragia no controlable por angiografía y falla del abordaje escalonado.

### Complicaciones
- **Locales:** colección líquida aguda, pseudoquiste, colección necrótica aguda, necrosis amurallada, infección, trombosis de la vena esplénica o porta, pseudoaneurisma (esplénica, gastroduodenal), hemorragia, fístula pancreática, síndrome del conducto desconectado, obstrucción duodenal o biliar.
- **Sistémicas:** SDRA, lesión renal aguda, choque, coagulación intravascular, hiperglucemia, hipocalcemia, exacerbación de comorbilidades.
- **A largo plazo:** diabetes posterior a pancreatitis (tipo 3c) en hasta 20-40% de las graves, insuficiencia exocrina y recurrencia.

### Pronóstico
La mayoría (80%) cursa leve y se resuelve en 3-7 días. La mortalidad se concentra en dos picos: temprana por falla orgánica múltiple y tardía por necrosis infectada. La falla orgánica persistente es el principal determinante de la muerte.

### Perlas
- Lipasa elevada no es igual a pancreatitis: también sube en isquemia mesentérica, perforación, obstrucción intestinal e insuficiencia renal.
- Reanimación moderada con Ringer lactato, no agresiva (WATERFALL).
- Sin antibióticos profilácticos; sin CPRE si no hay colangitis.
- Colecistectomía antes del egreso en la biliar leve.
- Ante necrosis infectada: esperar, drenar y escalar; necrosectomía solo si no hay mejoría.

### Referencias
- Banks PA, et al. Clasificación de Atlanta revisada. Gut 2013.
- Guía de Práctica Clínica IMSS/CENETEC: Diagnóstico y tratamiento de la pancreatitis aguda.
- de-Madaria E, et al. WATERFALL. NEJM 2022.
- Tenner S, et al. ACG Guideline: Management of Acute Pancreatitis. Am J Gastroenterol 2024.
- IAP/APA Evidence-based guidelines for acute pancreatitis; WSES 2019 Guidelines for severe acute pancreatitis.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.
`),
    sheet('pan-cronica', '02', 'Pancreatitis crónica', `
## Pancreatitis crónica

### Definición
Enfermedad fibroinflamatoria progresiva del páncreas, en individuos con factores de riesgo genéticos, ambientales u otros, en la que la lesión parenquimatosa persistente produce **fibrosis irreversible**, pérdida de tejido acinar e insular, calcificaciones y estenosis ductales. Se traduce clínicamente en **dolor crónico**, **insuficiencia exocrina** (esteatorrea, desnutrición) e **insuficiencia endocrina** (diabetes tipo 3c).

### Epidemiología
- Prevalencia de 40 a 50 por 100,000 habitantes; predomina en hombres de 40 a 60 años.
- El **alcohol** explica 40-70% de los casos en países occidentales; el **tabaquismo** es un factor independiente que acelera la progresión y la calcificación.
- En México la etiología alcohólica es la más frecuente en los hospitales generales; la idiopática ocupa el segundo lugar.
- Riesgo de adenocarcinoma de páncreas 13 veces mayor que la población general (hasta 40-50% a lo largo de la vida en la hereditaria por PRSS1).

### Etiología: clasificación TIGAR-O (versión 2)
| Letra | Grupo | Ejemplos |
|---|---|---|
| T | Tóxico-metabólica | Alcohol, tabaco, hipercalcemia, hipertrigliceridemia, insuficiencia renal crónica |
| I | Idiopática | Temprana, tardía, tropical |
| G | Genética | PRSS1, SPINK1, CFTR, CTRC, CPA1 |
| A | Autoinmune | Tipo 1 (IgG4) y tipo 2 |
| R | Pancreatitis aguda recurrente y grave | Necrosis previa, episodios repetidos |
| O | Obstructiva | Páncreas divisum, estenosis postraumática, tumores, disfunción del esfínter |

### Fisiopatología
La hipótesis **SAPE** (sentinel acute pancreatitis event) propone que un primer episodio de pancreatitis aguda activa a las células estrelladas pancreáticas, que, ante la persistencia del estímulo (alcohol, tabaco), producen colágeno y fibrosis. Hay precipitación de proteínas en los conductos, tapones que se calcifican, estenosis y dilataciones ductales ("cadena de lagos"), hipertensión ductal e intersticial, isquemia y **neuritis perineural**. El dolor tiene dos componentes: **obstructivo-hipertensivo** (susceptible de drenaje) y **neuropático-central** (sensibilización, poco susceptible a cirugía).

### Clínica
- **Dolor epigástrico** crónico o recurrente, irradiado a la espalda, posprandial; presente en 80-90%. Puede disminuir con los años ("burn out"), pero no es la regla.
- **Insuficiencia exocrina:** aparece cuando se pierde más de 90% de la función; esteatorrea, distensión, pérdida de peso, deficiencia de vitaminas liposolubles (A, D, E, K), osteoporosis.
- **Diabetes tipo 3c:** pérdida de células beta y alfa; riesgo de hipoglucemia por falta de glucagón ("diabetes frágil").
- **Complicaciones locales:** pseudoquiste (20-40%), estenosis biliar distal (colédoco intrapancreático "en cola de ratón"), obstrucción duodenal, trombosis de la vena esplénica con **hipertensión portal izquierda** (várices gástricas aisladas), pseudoaneurismas, ascitis o derrame pancreático (fístula interna), cáncer.

### Diagnóstico
- **Tomografía con contraste:** estudio de primera línea; muestra calcificaciones parenquimatosas o intraductales (altamente específicas), atrofia glandular, dilatación arrosariada del conducto de Wirsung, pseudoquistes, trombosis venosa y masas en la cabeza.
- **Colangiorresonancia con secretina:** evalúa cambios ductales finos, ramas secundarias y reserva exocrina; se gradúa con la **clasificación de Cambridge** (normal, equívoca, leve, moderada y marcada).
- **Ultrasonido endoscópico (USE):** herramienta más sensible en enfermedad temprana o de conducto pequeño (**criterios de Rosemont**: mayores A/B y menores para definir pancreatitis crónica consistente, sugestiva o indeterminada); indispensable para biopsia con aguja fina/gruesa (BAAF/BAG) ante masa sospechosa.
- **Función exocrina:** **elastasa fecal-1** menor de 200 µg/g confirma insuficiencia exocrina (menor de 100 µg/g indica insuficiencia grave); debe medirse en heces sólidas para evitar falsos positivos por dilución. La prueba de aliento con triglicéridos marcados con 13C es más precisa pero poco disponible en medios hospitalarios.
- **Función endocrina:** glucosa en ayuno y HbA1c anuales; la diabetes tipo 3c suele acompañarse de péptido C bajo y ausencia de autoanticuerpos de diabetes tipo 1.
- **Evaluación del dolor:** escalas multidimensionales como el **puntaje de Izbicki** (frecuencia del dolor, EVA, uso de analgésicos e incapacidad laboral) permiten objetivar la respuesta terapéutica.
- La **CPRE** ya no es diagnóstica; se reserva estrictamente para fines terapéuticos.
- **Descartar cáncer y pancreatitis autoinmune:** toda masa focal en la cabeza pancreática en un paciente con pancreatitis crónica es adenocarcinoma hasta demostrar lo contrario (CA 19-9, TC multifásica, USE-BAG; si la duda persiste, resección). Asimismo, descartar **pancreatitis autoinmune (PAI)**: el **tipo 1** (enfermedad relacionada con IgG4, hombres mayores, páncreas «en salchicha» con halo hipodenso periférico, estenosis biliar proximal o retroperitoneal, IgG4 sérica >2× LSN) y el **tipo 2** (adultos jóvenes, asociada a colitis ulcerosa, IgG4 normal) se diagnostican con los **criterios HISORt/ICDC** y muestran una respuesta espectacular a **prednisona**, evitando pancreatectomías innecesarias.

### Tratamiento médico
- **Abstinencia absoluta de alcohol y tabaco:** es la medida que más frena la progresión fibroinflamatoria, reduce el dolor, disminuye la aparición de calcificaciones y abate el riesgo cardiovascular y neoplásico.
- **Analgesia escalonada (OMS):** iniciar con paracetamol y AINE, progresar a tramadol y evitar, en la medida de lo posible, opioides potentes crónicos (que empeoran la sensibilización central, causan hiperalgesia y disfunción intestinal). Los neuromoduladores como **pregabalina** (con beneficio demostrado en ensayo aleatorizado) y los inhibidores de la recaptura de serotonina-noradrenalina ayudan en el componente neuropático.
- **Terapia de reemplazo enzimático pancreático (TREP):** cápsulas con microesferas entéricas recubiertas tomadas **durante** las comidas: 40,000–50,000 U de lipasa con las comidas principales y 20,000–25,000 U con colaciones. Si persiste esteatorrea, verificar apego, aumentar dosis y añadir inhibidor de bomba de protones para reducir la inactivación ácida. No existe evidencia sólida de que las enzimas con cubierta entérica alivien el dolor por sí solas.
- **Soporte nutricional y metabólico:** dieta normal en grasas toleradas (ya no se restringen grasas si la TREP es adecuada), suplementación de vitaminas liposolubles (A, D, E, K), calcio y vitamina D, y densitometría ósea basal y periódica por alto riesgo de osteopenia/osteoporosis.
- **Diabetes tipo 3c:** metformina en fases iniciales (además asociada a menor riesgo neoplásico) e insulina titulada con extrema precaución por la pérdida concomitante de glucagón y polipéptido pancreático, que predispone a hipoglucemias graves.
- **Bloqueo o neurólisis del plexo celíaco** guiada por USE: proporciona alivio parcial y transitorio (pocos meses); útil como puente o en pacientes no operables.

### Tratamiento endoscópico
Indicado en dolor obstructivo con conducto principal dilatado (>5 mm) y cálculos o estenosis dominantes en la cabeza o el cuello: esfinterotomía pancreática, **litotricia extracorpórea por ondas de choque (ESWL)** para cálculos radiopacos >5 mm seguida de extracción endoscópica, y colocación de prótesis plásticas secuenciales (o metálicas cubiertas temporales) para dilatar estenosis benignas. También permite drenar pseudoquistes comunicantes y descomprimir temporalmente estenosis biliares distales. Sin embargo, los ensayos aleatorizados de **Díte (2003)** y **Cahen (NEJM 2007)** demostraron **alivio del dolor superior y más duradero con cirugía** que con endoscopia. Más recientemente, el ensayo **ESCAPE (JAMA 2020)** confirmó que la **cirugía temprana** (dentro de los primeros meses del inicio de opioides) logra mejores puntajes de dolor de Izbicki y menos intervenciones que el abordaje escalonado que inicia con endoscopia.

### Tratamiento quirúrgico
**Indicaciones:** dolor intratable pese a manejo médico óptimo (idealmente antes de desarrollar sensibilización central o dependencia crónica a opioides), complicaciones mecánicas (estenosis biliar distal persistente, obstrucción duodenal, pseudoquiste no susceptible de endoscopia, fístula pancreática interna o externa, hemorragia por pseudoaneurisma o hipertensión portal izquierda) y sospecha fundada de neoplasia maligna.

| Situación clínica y anatómica | Procedimiento de elección | Aspectos técnicos y resultados |
|---|---|---|
| Conducto principal dilatado (>7 mm) sin masa ni hipertrofia de la cabeza (<3.5–4 cm) | **Pancreatoyeyunostomía lateral (Partington-Rochelle o Puestow modificada)** | Apertura longitudinal amplia del Wirsung (8–10 cm, hasta 1–2 cm del duodeno y 1–2 cm de la cola), extracción completa de cálculos y anastomosis laterolateral con asa en Y de Roux (45–60 cm). Preserva el bazo (a diferencia del Puestow clásico). Mortalidad <2%, alivio del dolor en 70–80% a corto plazo; la recidiva tardía suele deberse a enfermedad residual en la cabeza («marcapasos» del dolor) |
| Cabeza agrandada (>4 cm, masa inflamatoria benigna) con conducto dilatado | **Procedimiento de Frey** | Vaciamiento/excavación local de la cara anterior de la cabeza pancreática (dejando un ribete posterior de tejido sobre la porta y la VMS para evitar disecar el eje vascular) combinada con apertura longitudinal del conducto en cuerpo y cola y una sola pancreatoyeyunostomía laterolateral en Y de Roux. Menor morbilidad y sangrado que Beger y Whipple; alivio del dolor en ~80% |
| Cabeza inflamatoria agrandada con compresión vascular o biliar | **Procedimiento de Beger (DPPHR)** o modificación de **Berne** | En Beger se secciona el cuello pancreático sobre el eje mesentérico-portal y se reseca subtotalmente la cabeza preservando el duodeno y un ribete de 5–8 mm sobre su borde interno (respetando la arcada pancreatoduodenal posterior); reconstrucción con doble anastomosis en Y de Roux. La **modificación de Berne** excava la cabeza (como Frey) sin seccionar el cuello sobre la porta ni abrir el conducto distal, permitiendo descomprimir el colédoco intrapancreático |
| Masa en la cabeza con **sospecha de cáncer**, o estenosis biliar y duodenal simultáneas | **Pancreatoduodenectomía (Whipple o Traverso-Longmire con preservación pilórica)** | Estándar obligatorio siempre que no pueda descartarse adenocarcinoma ductal; mayor tasa de insuficiencia exocrina y endocrina posoperatoria que las cirugías de preservación duodenal |
| Enfermedad confinada a cuerpo y cola (p. ej., estenosis postraumática distal) | **Pancreatectomía distal** (con o sin preservación esplénica) | Resuelve enfermedad focal distal; alto riesgo de diabetes cuando el remanente cefálico también está fibrótico |
| Enfermedad difusa de conducto pequeño (<5 mm), dolor refractario o pancreatitis hereditaria (*PRSS1*) | **Pancreatectomía total con autotrasplante de islotes (TPIAT)** | Solo en centros de referencia; infusión intraportal de islotes propios tras resecar todo el páncreas para mitigar la diabetes frágil |
| Hipertensión portal izquierda con várices gástricas sangrantes | **Esplenectomía** (o embolización arterial esplénica en no operables) | Interrumpe el flujo hacia los vasos cortos gástricos; curativa del sangrado variceal aislado |

**Evidencia comparativa:** los ensayos aleatorizados que comparan Beger, Frey y pancreatoduodenectomía (incluido el ensayo multicéntrico **ChroPac, Lancet 2017**) muestran **calidad de vida y control del dolor a mediano plazo equivalentes**, aunque los procedimientos con preservación duodenal (Frey, Beger, Berne) ofrecen menor pérdida sanguínea, menor estancia hospitalaria, mejor ganancia ponderal y mejor preservación de la función endocrina. En presencia de **estenosis biliar distal** por fibrosis de la cabeza, puede añadirse una hepaticoyeyunoanastomosis en Y de Roux o destechamiento intrapancreático del colédoco durante un procedimiento de Frey o Berne.

### Complicaciones y pronóstico
La supervivencia a 20 años ronda el 50%, pero la mayoría de las muertes se debe a factores asociados al alcohol y al tabaco (enfermedad cardiovascular, cirrosis, infecciones y neoplasias extrapancreáticas o cáncer de páncreas) más que a la pancreatitis en sí. La cirugía de drenaje o resección alivia el dolor en 70–85% de los casos bien seleccionados, pero no revierte la fibrosis ni detiene por completo la progresión de la insuficiencia exocrina y endocrina. La abstinencia de alcohol y tabaco es determinante en el pronóstico posoperatorio.

### Perlas de examen
- Conducto principal dilatado (>7 mm) sin masa en la cabeza → **Partington-Rochelle** (Puestow modificada). Cabeza inflamatoria agrandada + conducto dilatado → **Frey** (o Beger/Berne). Sospecha de cáncer → **Whipple** sin concesiones.
- La **cirugía temprana** supera al abordaje escalonado endoscópico en control del dolor crónico obstructivo (ensayo **ESCAPE**, JAMA 2020).
- Várices gástricas aisladas (sin várices esofágicas) con esplenomegalia y función hepática normal → **trombosis de la vena esplénica** (hipertensión portal izquierda); el tratamiento definitivo es la **esplenectomía**.
- Elastasa fecal-1 menor de 200 µg/g confirma insuficiencia exocrina; se trata con lipasa (40,000–50,000 U/comida) y no se restringe estrictamente la grasa si la sustitución es adecuada.
- La **pancreatitis autoinmune (IgG4)** imita al adenocarcinoma de cabeza de páncreas («páncreas en salchicha», halo hipodenso) y responde de manera espectacular a esteroides; siempre considerarla antes de llevar a Whipple a un paciente atípico.
- La diabetes tipo 3c carece tanto de insulina como de glucagón («diabetes frágil»): alto riesgo de hipoglucemia grave con dosis agresivas de insulina.

### Referencias
- Whitcomb DC, et al. TIGAR-O versión 2. Pancreatology 2019.
- Löhr JM, et al. HaPanEU: guías europeas de pancreatitis crónica. UEG J 2017.
- Issa Y, et al. ESCAPE. JAMA 2020; Diener MK, et al. ChroPac. Lancet 2017; Cahen DL, et al. NEJM 2007.
- Gardner TB, et al. ACG Clinical Guideline: Chronic Pancreatitis. Am J Gastroenterol 2020.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.
`),
    sheet('pan-colecciones', '03', 'Colecciones peripancreáticas y pseudoquiste', `
## Colecciones peripancreáticas y pseudoquiste

### Definición y clasificación (Atlanta 2012)
Las colecciones se clasifican por **tiempo de evolución** (menos o más de 4 semanas) y por la **presencia de necrosis**:

| Tipo de pancreatitis | Menos de 4 semanas (sin pared) | Más de 4 semanas (con pared) |
|---|---|---|
| Intersticial edematosa | **Colección líquida peripancreática aguda (CLPA)** | **Pseudoquiste** |
| Necrosante | **Colección necrótica aguda (CNA)** | **Necrosis amurallada (WON)** |

Cualquiera puede estar **estéril o infectada**. El **pseudoquiste** es una colección de líquido rico en amilasa, rodeada por una pared de tejido de granulación o fibroso **sin epitelio**, que aparece después de 4 semanas y no contiene material sólido. El término "absceso pancreático" ya no se usa.

### Epidemiología
- Las CLPA aparecen en 30-50% de las pancreatitis agudas, pero más de la mitad se reabsorben espontáneamente.
- Los pseudoquistes ocurren en 5-15% de las pancreatitis agudas y en 20-40% de las crónicas (en la crónica se forman por obstrucción ductal, sin pancreatitis aguda previa).
- La necrosis se presenta en 10-20% de las pancreatitis agudas; un tercio se infecta.

### Fisiopatología
La rotura o desconexión del conducto pancreático produce fuga de jugo pancreático, que se organiza en el retroperitoneo o en la transcavidad. En la pancreatitis necrosante, la necrosis del cuello o el cuerpo puede dejar la cola funcional **desconectada** del resto del conducto (**síndrome del conducto pancreático desconectado**), que provoca colecciones recurrentes y fístulas.

### Clínica
Muchas son asintomáticas. Cuando dan síntomas: dolor epigástrico persistente, saciedad temprana, vómito por compresión gástrica o duodenal, ictericia por compresión biliar, masa palpable, pérdida de peso. Fiebre y deterioro sugieren infección.

### Diagnóstico
- **Tomografía contrastada:** tamaño, pared, relación con estómago y duodeno, gas (sugiere infección o fístula).
- **Resonancia magnética:** mejor que la TC para distinguir **detritus sólidos** (necrosis) de líquido; define la integridad del conducto (colangiorresonancia con secretina).
- **Ultrasonido endoscópico:** distancia a la pared gástrica, vasos interpuestos, detritus; permite aspirar líquido.
- **Diagnóstico diferencial clave:** neoplasia quística (NMPI, cistadenoma mucinoso). Datos a favor de neoplasia: ausencia de antecedente de pancreatitis, septos, nódulos murales, calcificación periférica, comunicación con un conducto dilatado sin pancreatitis. El líquido del pseudoquiste tiene **amilasa muy elevada** y **CEA bajo**; el mucinoso tiene CEA alto (mayor de 192 ng/mL) y glucosa baja.

### Tratamiento
**Principio fundamental:** el tamaño por sí solo **no** es indicación de drenaje. La antigua regla de «6 cm y 6 semanas» está obsoleta; colecciones estables y asintomáticas pueden vigilarse independientemente de su diámetro. Se intervienen únicamente las colecciones **sintomáticas**, **infectadas**, **complicadas** o con **crecimiento progresivo**.

**Indicaciones de intervención:** dolor persistente incapacitante, obstrucción al vaciamiento gástrico, duodenal o biliar, infección sospechada o documentada (deterioro séptico, gas intralesional), hemorragia/pseudoaneurisma (primero embolizar), rotura sintomática, imposibilidad de tolerar vía oral tras semanas de evolución y sospecha de neoplasia quística (que exige resección oncológica, nunca drenaje).

| Modalidad | Indicación preferente | Detalles técnicos y consideraciones |
|---|---|---|
| **Drenaje endoscópico transmural guiado por USE** | Primera línea cuando la colección tiene pared madura (>4 semanas) y se encuentra a ≤1 cm de la pared gástrica o duodenal (cistogastrostomía o cistoduodenostomía) | Permite verificar con Doppler ausencia de vasos interpuestos o várices gástricas. Se emplean prótesis plásticas doble cola de cochino (7–10 Fr) en pseudoquistes líquidos puros o **prótesis metálicas de aposición luminal (LAMS, 15–20 mm)** en necrosis amurallada (WON) porque permiten realizar necrosectomía endoscópica directa (DEN) a través de su luz. Éxito clínico >90%, menor estancia y costo que la cirugía (ensayo de **Varadarajulu, Gastroenterology 2013**). Las LAMS deben retirarse en **3–4 semanas** por riesgo de erosión vascular, sangrado diferido y síndrome de prótesis enterrada |
| **Drenaje transpapilar (CPRE)** | Colección pequeña (<5–6 cm) con comunicación demostrada al conducto pancreático principal y disrupción parcial | Colocación de prótesis pancreática que puentea el sitio de fuga; útil en ascitis o derrame pleural pancreático, insuficiente en disrupción completa (conducto desconectado) |
| **Drenaje percutáneo guiado por TC o USG** | Colección infectada temprana o inmadura (<4 semanas) en paciente séptico inestable, o colecciones en gotieras paracólicas y pelvis inaccesibles a la endoscopia | Usar catéteres de calibre amplio (≥14 Fr, idealmente con trayecto retroperitoneal izquierdo en flanco si se anticipa VARD), lavados frecuentes y recambio ascendente. Principal desventaja: riesgo de **fístula pancreatocutánea** (hasta 20–30%), en especial si existe conducto desconectado |
| **Drenaje quirúrgico interno** | Falla endoscópica, colecciones complejas o múltiples, localización alejada del estómago/duodeno, necesidad de colecistectomía concomitante o imposibilidad de descartar neoplasia | Cistogastrostomía (abierta o laparoscópica), cistoyeyunostomía en Y de Roux o cistoduodenostomía (rara, alto riesgo de lesión ampular/biliar). Siempre exige biopsia de pared |

### Abordaje escalonado (step-up approach) en necrosis infectada y WON
El manejo de la necrosis pancreática infectada cambió radicalmente al abandonar la necrosectomía abierta precoz (mortalidad >30–40%) en favor del principio **«retrasar, drenar y desbridar» (*delay, drain, debride*)**:
1. **Evidencia pivote:**
   - **PANTER (NEJM 2010):** el abordaje escalonado quirúrgico (drenaje percutáneo retroperitoneal seguido, solo si no hay mejoría en 72 h, de **VARD**) redujo complicaciones mayores o muerte de 69% a 40% frente a la necrosectomía abierta primaria, con menos diabetes y hernias incisionales; además, 35% de los pacientes sanó únicamente con el drenaje percutáneo.
   - **TENSION (Lancet 2018) y MISER (Gastroenterology 2019):** compararon el step-up **endoscópico** (drenaje transmural + necrosectomía endoscópica directa) frente al step-up **quirúrgico** (drenaje percutáneo + VARD). Ambos lograron mortalidad similar, pero el abordaje endoscópico produjo significativamente **menos fístulas pancreatocutáneas** (5% vs 32%) y menor estancia hospitalaria.
   - **POINTER (NEJM 2021):** demostró que posponer el drenaje hasta la encapsulación (~4 semanas) con antibióticos y soporte no aumenta complicaciones ni mortalidad frente al drenaje inmediato (<24 h del diagnóstico de infección), pero reduce el número total de intervenciones y permite que **39%** de los pacientes se cure solo con antibióticos.
2. **Técnica VARD (Video-Assisted Retroperitoneal Debridement):** con acceso previo mediante catéter percutáneo colocado por vía retroperitoneal izquierda (entre el colon descendente y el riñón izquierdo), se realiza una incisión subcostal izquierda de ~5 cm siguiendo el trayecto del drenaje, se extrae el tejido necrótico suelto bajo visión directa y con laparoscopio/nefroscopio sin traccionar vasos adheridos, y se dejan dos drenajes de gran calibre para lavado continuo posoperatorio.
3. **Drenaje quirúrgico interno del pseudoquiste:**
   - **Cistogastrostomía transgástrica (abierta o laparoscópica):** gastrotomía anterior longitudinal, punción aspiradora a través de la pared posterior del estómago para confirmar la cavidad y descartar sangre, apertura de 4–6 cm de las paredes fusionadas, **biopsia obligada de la pared** (descarta neoplasia quística), evacuación de detritus, sutura continua hemostática con material absorbible en todo el perímetro (o engrapadora lineal en laparoscopia) y cierre de la gastrotomía anterior.
   - **Cistoyeyunostomía en Y de Roux:** indicada cuando el pseudoquiste no se adhiere a la cara posterior del estómago o abomba hacia el mesocolon transverso o la raíz del mesenterio; se anastomosa la porción más declive del quiste a un asa desfuncionalizada de 45–60 cm.
4. **Síndrome del conducto pancreático desconectado (DPDS):** ocurre en 20–40% de las pancreatitis necrosantes del cuello o cuerpo, dejando un segmento viable de cola aislado del duodeno. Si se retira una LAMS sin reemplazo, la colección recurre; por ello se recomienda **intercambiar la LAMS por prótesis plásticas doble cola de cochino a largo plazo** (drenaje transmural permanente) o, en pacientes seleccionados con recurrencia refractaria, realizar **pancreatectomía distal** o **pancreatoyeyunostomía** del remanente.

### Complicaciones
- **Infección sobreagregada:** fiebre persistente, leucocitosis, elevación de procalcitonina, falla orgánica nueva o gas en TC; exige antibiótico dirigido (carbapenémico o quinolona + metronidazol) y drenaje escalonado.
- **Hemorragia y pseudoaneurisma (*hemosuccus pancreaticus*):** complicación más letal (mortalidad 15–40% sin control rápido). La digestión enzimática de la pared arterial afecta sobre todo a la **arteria esplénica (~40%)**, seguida de la gastroduodenal y las pancreatoduodenales. Se manifiesta como caída súbita del hematocrito, dolor abdominal agudo o hemorragia digestiva alta intermitente. Diagnóstico con **angiotomografía** y tratamiento de elección con **angioembolización transcatéter**; la cirugía queda como rescate en choque incontrolable. **Nunca drenar endoscópicamente una colección sin descartar un pseudoaneurisma**.
- **Rotura:** hacia la cavidad peritoneal (ascitis pancreática aguda o peritonitis química), hacia el tubo digestivo (puede drenarse espontáneamente o sangrar) o hacia el tórax (fístula pancreatopleural).
- **Obstrucción mecánica:** compresión antropilórica/duodenal (vómito posprandial), ictericia obstructiva por compresión del colédoco distal y trombosis de la vena esplénica o porta.
- **Ascitis y derrame pleural pancreáticos (fístula interna):** líquido con **amilasa >1,000 U/L** (a menudo >10,000 U/L) y albúmina elevada (>3 g/dL). Manejo escalonado: nutrición enteral/parenteral, paracentesis o toracocentesis, análogos de somatostatina (octreótido) y **prótesis pancreática transpapilar por CPRE**; cirugía (anastomosis o resección distal) si falla el manejo endoscópico.

### Pronóstico
Hasta 50–70% de las colecciones agudas y pseudoquistes secundarios a pancreatitis aguda se resuelven espontáneamente; en la pancreatitis crónica la resolución espontánea es menor de 10%. Con el abordaje escalonado moderno la mortalidad de la necrosis infectada ha descendido a 15–20%. La recurrencia tras el drenaje oscila entre 10 y 20% y es significativamente más alta cuando existe conducto pancreático desconectado no reconocido.

### Perlas de examen
- Clasificación de **Atlanta 2012**: <4 semanas sin pared madura = **CLPA** (intersticial) o **CNA** (necrosante); >4 semanas con pared definida = **pseudoquiste** (líquido sin epitelio) o **WON** (necrosis amurallada). El término «absceso pancreático» ya no se utiliza.
- El diámetro del pseudoquiste por sí solo **no** indica drenaje (adiós a la regla «6 cm / 6 semanas»); se drenan solo los sintomáticos o complicados.
- En necrosis infectada: **retrasar (~4 semanas, POINTER), drenar (endoscópico preferido por menor fístula, TENSION/MISER) y escalar a desbridamiento (PANTER/VARD)**.
- Las prótesis metálicas de aposición luminal (**LAMS**) deben retirarse a las **3–4 semanas** por riesgo de erosión vascular y hemorragia diferida; en **conducto desconectado**, sustituirlas por prótesis plásticas permanentes.
- Antes de drenar cualquier colección: descartar **neoplasia quística** y **pseudoaneurisma** (angio-TC). En todo drenaje quirúrgico es obligatorio tomar **biopsia de la pared**.
- Ascitis o derrame pleural unilateral izquierdo con **amilasa >1,000 U/L** = fístula pancreática interna; primera línea intervencionista: prótesis transpapilar por CPRE.

### Referencias
- Banks PA, et al. Classification of acute pancreatitis—2012 (Atlanta revisada). Gut 2013.
- van Santvoort HC, et al. PANTER. NEJM 2010; van Brunschot S, et al. TENSION. Lancet 2018; Boxhoorn L, et al. POINTER. NEJM 2021.
- Arvanitakis M, et al. ESGE Guideline: Endoscopic management of acute necrotizing pancreatitis. Endoscopy 2018.
- Baron TH, et al. AGA Clinical Practice Update: Management of Pancreatic Necrosis. Gastroenterology 2020; Varadarajulu S, et al. Gastroenterology 2013.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.
`),
    sheet('pan-quisticas', '04', 'Neoplasias quísticas del páncreas', `
## Neoplasias quísticas del páncreas

### Definición
Lesiones quísticas del páncreas revestidas de epitelio neoplásico, a diferencia del pseudoquiste (sin epitelio). Incluyen la **neoplasia mucinosa papilar intraductal (NMPI)**, la **neoplasia quística mucinosa (NQM, antes cistadenoma mucinoso)**, el **cistadenoma seroso** y la **neoplasia sólida pseudopapilar (NSPP)**; otras lesiones sólidas pueden presentarse con componente quístico (tumores neuroendocrinos quísticos, adenocarcinoma con degeneración quística).

### Epidemiología
- Hallazgo incidental en 2-3% de las tomografías y hasta 20-40% de las resonancias en adultos mayores; la prevalencia aumenta con la edad.
- Las **mucinosas (NMPI y NQM)** son **premalignas**; las serosas son prácticamente benignas.
- La mayoría de los quistes incidentales pequeños son NMPI de rama secundaria de bajo riesgo.

### Características de cada tipo
| Lesión | Paciente típico | Localización | Imagen | Líquido | Potencial maligno |
|---|---|---|---|---|---|
| **Cistadenoma seroso** | Mujer de 60-70 años | Cabeza o cualquiera | Microquístico "en panal", **cicatriz central con calcificación en sol naciente**; a veces oligoquístico | Claro, delgado; **CEA bajo** (menor de 5 ng/mL), amilasa baja, glucosa normal | Casi nulo |
| **NQM** | **Mujer** de 40-50 años | **Cuerpo y cola** | Uniloculado o con pocos septos, pared gruesa, calcificación periférica en "cáscara de huevo"; **no comunica** con el conducto | Mucoso, **CEA alto**, glucosa baja | Moderado (10-30% invasor) |
| **NMPI de conducto principal** | 60-70 años, ambos sexos | Cabeza más frecuente | Dilatación del conducto principal; ámpula "en boca de pez" con salida de moco en endoscopia | Mucoso, CEA alto | **Alto (40-60% displasia de alto grado o invasor)** |
| **NMPI de rama secundaria** | 60-70 años | Cabeza, proceso uncinado; a menudo multifocal | Quiste o "racimo de uvas" **comunicado** con el conducto principal | Mucoso | Bajo (aprox. 15-25% a largo plazo) |
| **NSPP (tumor de Frantz)** | **Mujer joven** (20-30 años) | Cola o cualquiera | Masa sólido-quística encapsulada, hemorragia | Hemorrágico | Bajo grado; 10-15% metastatiza; excelente pronóstico tras resección |

La NQM posee **estroma de tipo ovárico** (positivo para receptores de estrógeno y progesterona), requisito histológico definitorio desde la clasificación de la OMS, que explica su predominio casi absoluto en mujeres perimenopáusicas y su localización en cuerpo y cola (~95%). Por su parte, las **NMPI (IPMN)** se dividen morfológicamente en conducto principal (MD-IPMN), rama secundaria (BD-IPMN) y mixtas, e histológicamente en subtipos **gástrico** (el más frecuente en rama secundaria, bajo riesgo), **intestinal** (suele progresar a carcinoma coloide de mejor pronóstico), **pancreatobiliar** (progresa a adenocarcinoma tubular agresivo) y **oncocítico** (neoplasia oncocítica papilar intraductal). El **cistadenoma seroso (SCA)** se asocia en algunos casos al síndrome de **von Hippel-Lindau** y presenta variantes microquística (clásica en panal), macroquística/oligoquística (simula NQM) y sólida (simula tumor neuroendocrino). La **neoplasia sólida pseudopapilar (SPN o tumor de Frantz)** afecta casi exclusivamente a mujeres jóvenes y muestra mutación de *CTNNB1* con acumulación nuclear de beta-catenina.

### Diagnóstico y análisis del líquido quístico
- **Resonancia magnética con colangiorresonancia (CRM):** estudio de elección para caracterización inicial y vigilancia seriada; evalúa comunicación con el Wirsung, calibre ductal, septos, engrosamiento parietal y nódulos murales sin radiación ionizante.
- **Tomografía trifásica de protocolo de páncreas:** superior para demostrar calcificaciones (central en sol naciente en SCA; periférica en cáscara de huevo en NQM), relación vascular y estadificación oncológica si hay sospecha de invasión.
- **Ultrasonido endoscópico (USE) con contraste armónico y BAAF/micropinza:** indicado ante datos preocupantes o diagnóstico incierto. El USE con contraste distingue un **nódulo mural verdadero con realce** de un simple tapón de moco avascular. La biopsia de la pared con micropinza *through-the-needle* aumenta el rendimiento histológico en quistes seleccionados, aunque conlleva mayor riesgo de pancreatitis y hemorragia.
- **CA 19-9 sérico:** su elevación (>37 U/mL en ausencia de ictericia) es un marcador de sospecha de displasia de alto grado o carcinoma invasor.

| Biomarcador del líquido | Pseudoquiste | Cistadenoma seroso (SCA) | NQM (MCN) | NMPI (IPMN) |
|---|---|---|---|---|
| **CEA** | Bajo (<192 ng/mL) | Muy bajo (<5 ng/mL) | **Alto (>192 ng/mL)** | **Alto (>192 ng/mL)** |
| **Glucosa intracística** | Variable/baja | Normal (>50 mg/dL) | **Baja (<50 mg/dL)** | **Baja (<50 mg/dL)** |
| **Amilasa** | **Muy alta (>250–1,000 U/L)** | Baja | Baja (sin comunicación) | **Alta** (comunica con ducto) |
| **Mutaciones clave (NGS)** | Negativas | ***VHL*** (y VEGF elevado) | ***KRAS*** (sin *GNAS*) | ***KRAS* y *GNAS*** (*RNF43*); *TP53/SMAD4/CDKN2A* = alto grado |
| **Citología** | Macrófagos/inflamación | Células cuboidales ricas en glucógeno | Epitelio mucinoso (baja sensibilidad) | Epitelio mucinoso papilar |

La **glucosa intracística <50 mg/dL** supera al CEA (>192 ng/mL) en sensibilidad y precisión diagnóstica para identificar lesiones mucinosas; ninguno de los dos distingue por sí solo displasia de bajo grado de carcinoma invasor.

### Criterios de riesgo para NMPI (Fukuoka 2017 y actualización Kioto 2024)
Las **guías internacionales de Kioto (Pancreatology 2024)**, revisión basada en evidencia de Fukuoka 2017, estratifican el riesgo de displasia de alto grado o cáncer invasor en dos categorías operativas:

**Estigmas de alto riesgo (*high-risk stigmata*; indicación directa de resección en paciente apto):**
- Ictericia obstructiva en un paciente con lesión quística en la cabeza pancreática.
- **Nódulo mural con realce ≥5 mm** o componente sólido con realce.
- **Dilatación del conducto pancreático principal ≥10 mm**.
- Citología sospechosa o positiva para malignidad (añadida como estigma de alto riesgo en Kioto 2024).

**Datos preocupantes (*worrisome features*; exigen USE con contraste/BAAF y evaluación multidisciplinaria; la presencia de múltiples factores eleva marcadamente el riesgo de malignidad):**
- Tamaño del quiste **≥30 mm**.
- Nódulo mural con realce **<5 mm**.
- Paredes del quiste engrosadas o con realce.
- Conducto pancreático principal de **5 a 9 mm**.
- Cambio abrupto del calibre ductal con atrofia parenquimatosa distal.
- Linfadenopatía regional.
- **CA 19-9 sérico elevado**.
- Tasa de crecimiento **≥2.5 mm/año** (actualizada en Kioto 2024 desde 5 mm/2 años).
- Pancreatitis aguda atribuible al quiste.
- **Diabetes mellitus de inicio reciente o descompensación aguda** (incorporada en Kioto 2024).

### Tratamiento y principios quirúrgicos
| Lesión | Conducta recomendada | Detalles quirúrgicos y de vigilancia |
|---|---|---|
| **Cistadenoma seroso (SCA)** | **Observación** | Potencial maligno prácticamente nulo (<0.1%). Resecar únicamente si causa síntomas compresivos, crece de forma acelerada o no puede distinguirse con certeza de una neoplasia mucinosa |
| **Neoplasia quística mucinosa (NQM/MCN)** | **Resección quirúrgica** en pacientes aptos | Generalmente pancreatectomía distal (laparoscópica o robótica), con preservación esplénica (técnica de Kimura o Warshaw) si no hay sospecha de invasión; con esplenectomía y linfadenectomía si es >4 cm o tiene nódulos. Las guías europeas (2018) aceptan vigilancia en NQM <4 cm sin nódulos ni síntomas |
| **NMPI de conducto principal o mixto** | **Resección oncológica** | Riesgo de malignidad de 40–60%. Pancreatoduodenectomía o pancreatectomía distal con linfadenectomía estándar |
| **NMPI de rama secundaria (BD-IPMN)** | **Estratificada por Kioto 2024** | Resección si hay estigmas de alto riesgo o acumulación de datos preocupantes en paciente con buena expectativa de vida; vigilancia en el resto |
| **Neoplasia sólida pseudopapilar (SPN)** | **Resección R0 siempre** | Incluso si es grande o hay metástasis hepáticas resecables; la linfadenectomía formal extensa no es rutinaria por la bajísima tasa de metástasis ganglionares (<2%) |

**Manejo del margen y remanente en NMPI:**
- Es obligatoria la **biopsia transoperatoria por congelación del margen de sección pancreático**: la presencia de **displasia de alto grado o carcinoma invasor** exige ampliar la resección (incluso hasta pancreatectomía total en casos seleccionados). La **displasia de bajo grado** en el margen es aceptable y no justifica ampliar resecciones de alto riesgo.
- En lesiones benignas o premalignas pequeñas sin datos de invasión pueden considerarse resecciones preservadoras de parénquima (pancreatectomía central o enucleación), ponderando su mayor tasa de fístula pancreática.
- **Vigilancia de BD-IPMN sin datos de riesgo (Kioto 2024):** <20 mm → CRM a los 6 meses y luego cada 18 meses; 20–29 mm → cada 6 meses por 1 año y luego anual; ≥30 mm → alternar CRM y USE cada 6 meses. En quistes **<20 mm estables durante 5 años**, Kioto 2024 permite considerar la suspensión de la vigilancia en pacientes de edad avanzada o con esperanza de vida limitada (<10 años).
- **Vigilancia posresección de NMPI:** el remanente pancreático requiere seguimiento con imagen de por vida (cada 6–12 meses), ya que existe un riesgo acumulado de 5–10% de desarrollar una nueva NMPI de alto riesgo o un **adenocarcinoma ductal concomitante o metacrónico** en otro segmento de la glándula.

### Pronóstico
- NMPI no invasora resecada: supervivencia a 5 años >90%; NMPI con carcinoma invasor: 40–60% (significativamente mejor en el subtipo coloide que en el tubular, cuyo pronóstico se aproxima al adenocarcinoma ductal clásico).
- NQM no invasora resecada: curación prácticamente total sin requerir vigilancia prolongada; NQM con componente invasor: 50–60% a 5 años.
- NSPP (tumor de Frantz): supervivencia a 5 años >95% tras resección R0.

### Perlas de examen
- Mujer de 45 años con quiste en cuerpo/cola, septos gruesos, calcificación en «cáscara de huevo», sin comunicación ductal y estroma ovárico → **NQM (MCN)**; indicar pancreatectomía distal.
- Secreción de moco a través de un ámpula dilatada en **«boca de pez»** en la endoscopia → signo patognomónico de **NMPI de conducto principal** (alto potencial maligno → resección).
- Mujer de 65 años con lesión microquística «en panal» y **cicatriz central calcificada en sol naciente**, CEA <5 ng/mL → **cistadenoma seroso**; se vigila y no se opera salvo síntomas.
- Mujer de 25 años con masa sólido-quística encapsulada y hemorrágica en cola del páncreas → **NSPP (tumor de Frantz, mutación *CTNNB1*)**; resecar siempre con excelente pronóstico.
- **CEA >192 ng/mL** y **glucosa <50 mg/dL** en líquido quístico identifican lesiones **mucinosas**, no malignidad. La mutación ***GNAS*** es altamente específica de **NMPI**.
- En las **guías de Kioto 2024**: nódulo mural con realce ≥5 mm, Wirsung ≥10 mm, ictericia obstructiva o citología maligna = **estigmas de alto riesgo** → cirugía; crecimiento ≥2.5 mm/año y diabetes de inicio reciente son **datos preocupantes**.
- Margen transoperatorio en NMPI: displasia de bajo grado se acepta; **displasia de alto grado o invasión** obliga a ampliar la resección.

### Referencias
- Ohtsuka T, et al. International evidence-based Kyoto guidelines for the management of intraductal papillary mucinous neoplasm of the pancreas. Pancreatology 2024 (revisión de Fukuoka 2017).
- European Study Group on Cystic Tumours of the Pancreas. European evidence-based guidelines on pancreatic cystic neoplasms. Gut 2018.
- Elta GH, et al. ACG Clinical Guideline: Diagnosis and Management of Pancreatic Cysts. Am J Gastroenterol 2018.
- NCCN Guidelines: Pancreatic Adenocarcinoma (evaluación de quistes pancreáticos), versión vigente 2024–2025.
- Sabiston, Tratado de cirugía, 21.ª ed.; Schwartz, Principios de cirugía, 11.ª ed.
`),
    sheet('pan-cancer', '05', 'Cáncer de páncreas (adenocarcinoma ductal)', `
## Cáncer de páncreas: adenocarcinoma ductal

### Definición
Neoplasia maligna epitelial originada en el epitelio ductal pancreático, que representa **más de 85-90%** de las neoplasias malignas del páncreas. Se caracteriza por un **estroma desmoplásico denso**, invasión temprana perineural y vascular, diseminación linfática y hematógena precoz (hígado, peritoneo, pulmón) y resistencia a la quimioterapia. Alrededor de **60-70% se localiza en la cabeza**, 20-25% en cuerpo y cola, y el resto es difuso.

### Epidemiología
- Es la **tercera a cuarta causa de muerte por cáncer** en países occidentales, con una relación mortalidad/incidencia cercana a 1; se proyecta como segunda causa para 2030-2040.
- Supervivencia global a 5 años de **10-13%**; solo **15-20%** de los pacientes es candidato a resección al diagnóstico.
- En México (GLOBOCAN 2022) se registran alrededor de 5,000-6,000 casos nuevos y una cifra similar de muertes al año; la mayoría se diagnostica en etapa avanzada, y en el IMSS una proporción importante llega con ictericia y enfermedad localmente avanzada o metastásica.
- Edad media al diagnóstico de 65-70 años; ligero predominio masculino.
- **Factores de riesgo:** **tabaquismo** (el más importante modificable; duplica el riesgo y explica 20-25% de los casos), obesidad, diabetes de larga evolución, **diabetes de inicio reciente después de los 50 años** (puede ser manifestación del tumor), pancreatitis crónica, alcohol intenso, antecedente familiar (2 o más familiares de primer grado), síndromes hereditarios: **BRCA2, BRCA1, PALB2, ATM**, síndrome de Lynch, **FAMMM (CDKN2A)**, **Peutz-Jeghers (STK11; riesgo de hasta 30-40%)**, pancreatitis hereditaria (PRSS1). Las NMPI y NQM son lesiones precursoras quísticas.

### Anatomía quirúrgica relevante
- La **cabeza** se aloja en el marco duodenal, a la derecha de la vena mesentérica superior (VMS); el **proceso uncinado** pasa por detrás de la VMS y se relaciona con la **arteria mesentérica superior (AMS)**.
- El **cuello** está por delante de la confluencia esplenomesentérico-portal; es el sitio de sección en la pancreatoduodenectomía.
- **Irrigación:** arcadas pancreatoduodenales anteriores y posteriores (de la gastroduodenal, rama de la hepática común, y de la pancreatoduodenal inferior, rama de la AMS); cuerpo y cola por ramas de la esplénica.
- **Variantes arteriales** (importantes en la planeación): **arteria hepática derecha reemplazada desde la AMS (10-20%)**, que corre por detrás de la cabeza y a la derecha de la vena porta; hepática común desde la AMS (2-3%); hepática izquierda desde la gástrica izquierda.
- El **mesopáncreas** (tejido retropancreático entre la cabeza y el borde derecho de la AMS, con nervios y linfáticos) es el sitio más frecuente de **margen positivo (margen de la AMS o retroperitoneal)**.

### Patogenia y biología
Progresión desde lesiones precursoras (**PanIN** de bajo a alto grado, NMPI, NQM) con acumulación de mutaciones: **KRAS** (más de 90%, evento temprano), **CDKN2A** (p16), **TP53** y **SMAD4/DPC4** (eventos tardíos; la pérdida de SMAD4 se asocia a enfermedad metastásica). Alrededor de 5-10% tiene mutaciones germinales (sobre todo BRCA1/2, PALB2), por lo que **las guías NCCN recomiendan estudio genético germinal a todos los pacientes**, y perfil molecular somático en enfermedad avanzada (KRAS G12C, NTRK, inestabilidad de microsatélites, NRG1, BRAF).

### Clasificación y estadificación (AJCC 8.ª edición)
| Categoría | Definición |
|---|---|
| T1 | Tumor de 2 cm o menos (T1a ≤0.5 cm; T1b 0.5-1 cm; T1c 1-2 cm) |
| T2 | Mayor de 2 y hasta 4 cm |
| T3 | Mayor de 4 cm |
| T4 | Afecta tronco celíaco, AMS o arteria hepática común, **sin importar el tamaño** |
| N0 / N1 / N2 | Sin ganglios / 1 a 3 ganglios / **4 o más** ganglios |
| M1 | Metástasis a distancia (incluye citología peritoneal positiva) |

| Etapa | Agrupación |
|---|---|
| IA | T1 N0 M0 |
| IB | T2 N0 M0 |
| IIA | T3 N0 M0 |
| IIB | T1-T3 N1 M0 |
| III | Cualquier T N2 M0, o T4 cualquier N M0 |
| IV | Cualquier T cualquier N M1 |

En la práctica, la decisión terapéutica se basa en la **resecabilidad anatómica**, no solo en el TNM.

### Cuadro clínico
- **Cabeza:** **ictericia obstructiva progresiva** (más de 70%), a menudo **indolora**, con coluria, acolia y prurito; **vesícula palpable no dolorosa (signo de Courvoisier-Terrier)**; pérdida de peso, anorexia, dolor epigástrico sordo irradiado a la espalda (sugiere invasión del plexo celíaco y peor pronóstico), esteatorrea, vómito por obstrucción duodenal (tardío).
- **Cuerpo y cola:** **dolor epigástrico o dorsal** y pérdida de peso; diagnóstico más tardío, mayor tasa de irresecabilidad.
- Otros: **diabetes de inicio reciente**, pancreatitis aguda inexplicable en mayores de 50 años, **tromboflebitis migratoria (Trousseau)**, depresión, trombosis venosa profunda.
- **Signos de enfermedad avanzada:** ganglio de Virchow (supraclavicular izquierdo), nódulo de la hermana María José (umbilical), escudo de Blumer (fondo de saco), ascitis, hepatomegalia nodular.

### Diagnóstico
1. **Tomografía multifásica de protocolo de páncreas** (fase pancreática o arterial tardía a ~40-50 s y fase portal a ~65-70 s, cortes de 3 mm o menos con reconstrucciones multiplanares): estudio inicial clave. Debe hacerse **antes de colocar una prótesis biliar** (la prótesis y la inflamación alteran la evaluación). Define tumor (hipodenso, con dilatación de colédoco y Wirsung: **signo del doble conducto**), contacto vascular en grados, variantes arteriales y metástasis. Se recomienda un **reporte estructurado** (plantilla de la NCCN/ACR).
2. **Resonancia magnética con difusión:** complemento para metástasis hepáticas pequeñas (detecta lesiones que la TC no ve) y lesiones isoatenuantes.
3. **Ultrasonido endoscópico con biopsia por aguja fina (BAAF o BAG):** método de elección para obtener tejido. **La biopsia no es obligatoria antes de la resección** de un tumor resecable con alta sospecha clínica, pero **es obligatoria antes de neoadyuvancia o quimioterapia paliativa**. Evitar la biopsia percutánea en tumores potencialmente resecables (riesgo de siembra).
4. **CA 19-9:** útil para pronóstico y seguimiento, no para diagnóstico ni tamizaje. Se eleva falsamente con colestasis (medirlo cuando la bilirrubina se normaliza) y es indetectable en el **5-10% Lewis negativo**. Un CA 19-9 muy alto (por ejemplo mayor de 500 U/mL) sugiere enfermedad oculta y orienta a neoadyuvancia o laparoscopia.
5. **Laparoscopia de estadificación:** considerar en tumores de alto riesgo de enfermedad oculta: CA 19-9 muy elevado, tumor primario grande, tumor de cuerpo y cola, adenopatías voluminosas, dolor intenso o pérdida de peso importante, ascitis dudosa. Detecta metástasis peritoneales o hepáticas en 10-30% de los pacientes "resecables".
6. **PET-CT:** no rutinario; se puede considerar en pacientes de alto riesgo.
7. **Diagnóstico diferencial:** pancreatitis crónica de masa, **pancreatitis autoinmune** (IgG4), colangiocarcinoma distal, ampuloma y carcinoma duodenal, tumor neuroendocrino, linfoma, metástasis (renal).

### Resecabilidad (NCCN, versión vigente 2025)
La NCCN define la resecabilidad por el **contacto tumoral con arterias** (tronco celíaco, AMS, arteria hepática común) y **venas** (VMS y vena porta), medido en grados de circunferencia.

| Categoría | Arterial | Venoso |
|---|---|---|
| **Resecable** | Sin contacto con tronco celíaco, AMS ni hepática común | Sin contacto con VMS/porta, o contacto de 180° o menos **sin irregularidad** del contorno venoso |
| **Limítrofe (borderline)**, cabeza y proceso uncinado | Contacto con la hepática común **sin extensión** al tronco celíaco ni a la bifurcación hepática (permite resección y reconstrucción); contacto con la **AMS de 180° o menos**; contacto con una variante arterial (por ejemplo hepática derecha accesoria) | Contacto con VMS/porta **mayor de 180°**, o de 180° o menos con irregularidad o trombosis, **reconstruible** (hay vena adecuada proximal y distal); contacto con la vena cava inferior |
| **Limítrofe**, cuerpo y cola | Contacto con el tronco celíaco de **180° o menos**; contacto mayor de 180° sin afectar la aorta y con gastroduodenal intacta (algunos lo consideran irresecable) | Igual que en la cabeza |
| **Localmente avanzado (irresecable)** | Cabeza: contacto con **AMS mayor de 180°** o con tronco celíaco mayor de 180°. Cuerpo y cola: contacto mayor de 180° con AMS o tronco celíaco; contacto con el tronco celíaco y la aorta | VMS/porta **no reconstruible** por invasión u oclusión (trombo tumoral o blando) |
| **Metastásico** | Metástasis a distancia, incluidos ganglios fuera del campo de resección (por ejemplo, paraaórticos) | |

Además de la anatomía, el consenso internacional (IAP 2017) considera la resecabilidad **biológica** (CA 19-9 mayor de 500 U/mL o ganglios sospechosos) y la **condicional** (estado funcional ECOG ≥2), que favorecen iniciar con tratamiento sistémico.

### Tratamiento según categoría
**1. Resecable**
- **Cirugía primero seguida de adyuvancia** es el estándar histórico; la **neoadyuvancia** es una opción aceptada en NCCN, sobre todo con factores de alto riesgo (CA 19-9 muy elevado, tumor grande, ganglios voluminosos, pérdida de peso o dolor intensos).
- Evidencia: PREOPANC-1 (quimiorradioterapia con gemcitabina) mostró beneficio en supervivencia a largo plazo sobre todo en limítrofes; los ensayos de FOLFIRINOX neoadyuvante en resecables (NorPACT-1, Alliance A021501) no demostraron superioridad clara. Por eso en el resecable de bajo riesgo la cirugía inicial sigue siendo válida.
- **Drenaje biliar preoperatorio:** **no de rutina** (van der Gaag, NEJM 2010: más complicaciones con drenaje sistemático). Indicado en **colangitis**, prurito intolerable, bilirrubina muy elevada con disfunción hepática o renal, cirugía demorada y antes de neoadyuvancia. Preferir **prótesis metálica autoexpandible corta (cubierta)**, que obstruye menos que las plásticas.

**2. Limítrofe (borderline)**
- **Neoadyuvancia** (estándar): **FOLFIRINOX modificado** (pacientes con buen estado funcional) o **gemcitabina con nab-paclitaxel**, por 4-6 meses, con o sin radioterapia (quimiorradiación o radioterapia estereotáctica) después.
- Reestadificar con TC de protocolo y CA 19-9; **la TC subestima la respuesta** (la fibrosis posterior al tratamiento persiste como contacto vascular), por lo que la **disminución o normalización del CA 19-9** y la estabilidad clínica son criterios importantes para explorar.
- Cirugía con posible **resección y reconstrucción venosa** (VMS/porta con parche, anastomosis término-terminal o injerto de yugular interna, vena renal izquierda o protésico); la resección arterial es excepcional y en centros de alto volumen.

**3. Localmente avanzado**
- Quimioterapia de inducción (FOLFIRINOX o gemcitabina con nab-paclitaxel); si hay respuesta y ausencia de progresión tras 4-6 meses, puede intentarse la exploración en centros expertos (conversión a resección en 10-20%). La radioterapia de consolidación se individualiza (el ensayo LAP07 no mostró beneficio de supervivencia, pero sí de control local).

**4. Metastásico**
- **Quimioterapia sistémica** según estado funcional: **FOLFIRINOX** (PRODIGE 4/ACCORD 11: mediana de 11.1 vs 6.8 meses con gemcitabina), **gemcitabina con nab-paclitaxel** (MPACT: 8.5 vs 6.7 meses), **NALIRIFOX** (NAPOLI-3, 2023: 11.1 vs 9.2 meses frente a gemcitabina-nab-paclitaxel); gemcitabina sola en ECOG 2.
- **BRCA1/2 o PALB2 germinal:** esquemas con platino y **mantenimiento con olaparib** (POLO).
- Inestabilidad de microsatélites alta: pembrolizumab. Fusiones NTRK: larotrectinib/entrectinib.
- **Cuidados paliativos tempranos**.

### Adyuvancia (todos los resecados que se recuperen, idealmente iniciar en las primeras 8-12 semanas)
| Esquema | Ensayo | Resultado |
|---|---|---|
| **FOLFIRINOX modificado** | **PRODIGE 24/CCTG PA.6 (NEJM 2018)** | Mediana de supervivencia global 54.4 vs 35 meses con gemcitabina; supervivencia a 5 años ~43%. **Estándar en pacientes aptos (ECOG 0-1)** |
| **Gemcitabina + capecitabina** | **ESPAC-4 (Lancet 2017)** | 28 vs 25.5 meses; opción para pacientes que no toleran FOLFIRINOX |
| Gemcitabina sola | CONKO-001 | Superior a observación; para pacientes frágiles |
| S-1 | JASPAC-01 | Estándar en población asiática |
| Gemcitabina + nab-paclitaxel | APACT | **No alcanzó su objetivo primario** (supervivencia libre de enfermedad por revisión independiente); no es primera opción adyuvante |

Duración total de quimioterapia perioperatoria: **6 meses**. Los pacientes que recibieron neoadyuvancia completan el total con adyuvancia según respuesta.

### Técnica: pancreatoduodenectomía (Whipple) paso a paso
**Indicación:** adenocarcinoma de cabeza o proceso uncinado, ampuloma, colangiocarcinoma distal, carcinoma duodenal, NMPI o tumores neuroendocrinos de la cabeza.

**Preparación:** valoración nutricional (prehabilitación, inmunonutrición), control de la colangitis, profilaxis antibiótica guiada por el cultivo biliar si hay prótesis (las bacterias de la bilis aumentan la infección del sitio quirúrgico), protocolo ERAS, tromboprofilaxis.

1. **Exploración y estadificación:** laparotomía (subcostal bilateral o media) o laparoscopia inicial; buscar metástasis hepáticas, peritoneales, en raíz del mesenterio y ganglios paraaórticos (biopsia transoperatoria de lesiones sospechosas; si hay metástasis, no se reseca).
2. **Maniobra de Kocher extendida:** movilización del duodeno y la cabeza del páncreas hasta la vena cava, la vena renal izquierda y la aorta; permite palpar la relación del tumor con la AMS y tomar el ganglio interaortocavo (16b1) para biopsia si es sospechoso.
3. **Apertura de la transcavidad** por el ligamento gastrocólico y descenso del ángulo hepático del colon; identificación de la **VMS** en el borde inferior del cuello (siguiendo la vena cólica media o el **tronco gastrocólico de Henle**, que se liga).
4. **Disección del ligamento hepatoduodenal:** colecistectomía, identificación de la **arteria hepática común** y linfadenectomía de la estación 8a; identificación de la **arteria gastroduodenal**: antes de ligarla se hace la **prueba de pinzamiento** (si desaparece el pulso de la hepática propia, sospechar estenosis del tronco celíaco por ligamento arcuato, que obliga a preservar la gastroduodenal o revascularizar). Ligadura y sección de la gastroduodenal.
5. **Sección del conducto hepático común** por arriba del cístico (tomar margen biliar para estudio transoperatorio) y descenso de los ganglios del hilio (estación 12). Buscar una **hepática derecha reemplazada** por detrás de la vena porta.
6. **Túnel retropancreático:** disección roma del plano entre el cuello del páncreas y la vena porta/VMS (avascular normalmente). Confirma la ausencia de invasión venosa.
7. **Sección gástrica** (antrectomía, Whipple clásico) o **duodenal** 2-3 cm distal al píloro (**pancreatoduodenectomía con preservación de píloro, Traverso-Longmire**; resultados oncológicos y de vaciamiento similares).
8. **Sección del yeyuno** 10-15 cm distal al ángulo de Treitz y paso del asa por detrás de los vasos mesentéricos hacia la derecha.
9. **Sección del cuello pancreático** sobre la vena porta (bisturí o energía, con hemostasia cuidadosa del muñón); **margen del cuello a estudio transoperatorio**; identificar el conducto de Wirsung.
10. **Disección del proceso uncinado y del mesopáncreas:** separar la cabeza de la VMS/porta ligando las tributarias venosas (pancreatoduodenal posterosuperior) y disecar **a lo largo del borde derecho de la AMS** (abordaje "arterial primero"), resecando el tejido linfoneural hasta su adventicia para obtener **margen R0**. Ligadura de las arterias pancreatoduodenales inferiores. Si hay invasión venosa, se hace resección venosa en bloque con reconstrucción.
11. **Linfadenectomía estándar (consenso ISGPS 2014):** estaciones 5, 6, 8a, 12b1, 12b2, 12c, 13a, 13b, 14a, 14b, 17a y 17b. La linfadenectomía extendida **no mejora la supervivencia** y aumenta la morbilidad. Se recomienda examinar **al menos 12-15 ganglios**.
12. **Marcado de márgenes** para el patólogo: cuello pancreático, conducto biliar, AMS (retroperitoneal o uncinado), surco venoso (VMS/porta), y gástrico/duodenal y yeyunal. R1 se define como **tumor a menos de 1 mm del margen**.
13. **Reconstrucción (orden de Child):** el asa yeyunal se sube y se hacen, en ese orden:
    - **Pancreatoyeyunostomía** término-lateral **ducto-mucosa** (técnicas de Blumgart modificada o Cattell-Warren) o por invaginación; alternativa: **pancreatogastrostomía**. Ninguna técnica ha demostrado superioridad consistente; la elección depende del cirujano y de la textura. Se puede usar una férula (stent) en el conducto pequeño.
    - **Hepaticoyeyunostomía** término-lateral a 10 cm de la anterior, con puntos separados o continuos de material absorbible monofilamento.
    - **Gastroyeyunostomía o duodenoyeyunostomía** antecólica, 40-50 cm distal (la vía antecólica se asocia a menos vaciamiento gástrico retardado en algunos estudios).
14. **Drenajes:** su uso rutinario es controvertido; la práctica más aceptada es colocar drenaje en pacientes de riesgo intermedio-alto de fístula y **retirarlo temprano** (día 3) si la amilasa del drenaje es baja.

**Riesgo de fístula: Fistula Risk Score alternativo (a-FRS)** basado en **textura pancreática blanda**, **conducto de Wirsung de 3 mm o menos** e índice de masa corporal alto (el FRS original de Callery incluye además patología de alto riesgo, como ampuloma o duodeno, frente a adenocarcinoma o pancreatitis, y la pérdida sanguínea). El adenocarcinoma con páncreas duro y conducto dilatado es de bajo riesgo.

### Complicaciones posoperatorias (definiciones ISGPS)
| Complicación | Definición y grados |
|---|---|
| **Fístula pancreática posoperatoria (ISGPS 2016)** | Cualquier volumen de drenaje con **amilasa mayor de 3 veces el límite superior sérico** en o después del **día 3**, **asociado a una condición clínicamente relevante**. **Fuga bioquímica (antes grado A)**: no es fístula, sin repercusión. **Grado B**: cambia el manejo: drenaje mantenido más de 3 semanas, drenaje percutáneo o endoscópico, angiografía por hemorragia relacionada, signos de infección sin falla orgánica. **Grado C**: reoperación, falla orgánica o muerte relacionada |
| **Vaciamiento gástrico retardado (ISGPS 2007)** | **A**: sonda nasogástrica 4-7 días o reinsertada después del día 3, o no tolera dieta sólida al día 7. **B**: sonda 8-14 días o reinsertada después del día 7, no tolera sólidos al día 14. **C**: sonda más de 14 días o reinsertada después del día 14, no tolera sólidos al día 21 |
| **Hemorragia pospancreatectomía (ISGPS 2007)** | **Temprana** (24 h o menos; suele ser técnica) o **tardía** (más de 24 h; suele asociarse a fístula y **pseudoaneurisma**, de la gastroduodenal sobre todo). **Hemorragia centinela** (sangrado menor por drenaje o tubo digestivo) precede a la hemorragia masiva: obliga a angiotomografía inmediata y angiografía con embolización o prótesis cubierta |
| Fuga biliar (ISGLS) | Bilirrubina del drenaje mayor de 3 veces la sérica en o después del día 3 |
| Fuga quilosa (ISGPS) | Triglicéridos mayores de 110 mg/dL en el drenaje después del día 3; dieta con triglicéridos de cadena media |

**Frecuencias en centros de alto volumen:** morbilidad 30-50%, fístula clínicamente relevante 10-20%, vaciamiento gástrico retardado 15-25%, hemorragia 5-10%, **mortalidad menor de 3-5%**. La mortalidad depende fuertemente del **volumen hospitalario** (se recomienda centralizar: 20 o más pancreatoduodenectomías al año).

**Manejo de la fístula:** mantener drenaje, nutrición (enteral preferente), antibióticos si hay infección, drenaje percutáneo de colecciones, vigilar hemorragia centinela; el octreótido profiláctico tiene evidencia contradictoria (el pasireótido tuvo un ensayo positivo de un solo centro). Reoperación solo en fístula grado C con sepsis no controlable (desmantelamiento de la anastomosis o pancreatectomía completa como rescate, de alta mortalidad).

**Otras complicaciones tardías:** insuficiencia exocrina (enzimas a casi todos), diabetes, estenosis de la hepaticoyeyunostomía, colangitis, úlcera marginal, hernia incisional.

### Pancreatectomía distal para tumores de cuerpo y cola
Pancreatectomía distal con **esplenectomía** y linfadenectomía (estaciones 10, 11 y 18). La técnica **RAMPS** (radical antegrade modular pancreatosplenectomy) mejora el margen posterior. Con invasión del tronco celíaco y gastroduodenal permeable, puede considerarse la **operación de Appleby modificada** (DP-CAR) en centros expertos. La vía laparoscópica es oncológicamente equivalente (ensayos LEOPARD y DIPLOMA). Vacunación contra encapsulados por la esplenectomía.

### Paliación
- **Ictericia:** prótesis metálica endoscópica (de elección); hepaticoyeyunostomía si se encuentra irresecable en la exploración.
- **Obstrucción duodenal:** prótesis duodenal endoscópica (supervivencia corta) o **gastroyeyunostomía** laparoscópica (mejor resultado si la supervivencia esperada es mayor de 2-3 meses); la gastroenteroanastomosis guiada por ultrasonido endoscópico es una alternativa emergente.
- **Dolor:** opioides, **neurólisis del plexo celíaco** guiada por ultrasonido endoscópico, radioterapia.
- **Insuficiencia exocrina:** enzimas pancreáticas (mejoran peso y calidad de vida).
- **Tromboprofilaxis** en pacientes ambulatorios de alto riesgo (score de Khorana) con apixabán o rivaroxabán.

### Pronóstico
| Situación | Supervivencia aproximada |
|---|---|
| Resecado + FOLFIRINOX adyuvante | Mediana 54 meses; a 5 años ~40% |
| Resecado global | A 5 años 20-30% |
| Localmente avanzado | Mediana 12-20 meses |
| Metastásico | Mediana 8-11 meses |

**Factores pronósticos:** margen R0, ganglios (N2 peor), grado, CA 19-9 posoperatorio (no normalizado = mal pronóstico), invasión perineural y vascular, recibir quimioterapia completa, respuesta a la neoadyuvancia.

### Seguimiento
Historia, exploración, CA 19-9 y TC cada 3-6 meses por 2 años y luego cada 6-12 meses. Vigilar la insuficiencia exocrina, la diabetes y el estado nutricional.

### Perlas
- Ictericia indolora con vesícula palpable: tumor periampular hasta demostrar lo contrario (Courvoisier).
- TC de protocolo de páncreas **antes** de la prótesis biliar.
- No drenar la vía biliar de rutina antes de un Whipple; sí antes de neoadyuvancia o con colangitis.
- Contacto con AMS mayor de 180°: irresecable; 180° o menos: limítrofe.
- Biopsia obligatoria antes de neoadyuvancia, no antes de una resección inicial.
- El margen más frecuentemente positivo es el de la AMS (uncinado).
- Fístula pancreática: amilasa en drenaje mayor de 3 veces la sérica al día 3 **más** repercusión clínica (B o C). La fuga bioquímica no es fístula.
- Hemorragia tardía tras Whipple: piense en pseudoaneurisma de la gastroduodenal y vaya a angiografía.
- Adyuvancia: mFOLFIRINOX en pacientes aptos; gemcitabina-capecitabina si no lo toleran.
- Estudio genético germinal en todos.

### Referencias
- NCCN Clinical Practice Guidelines in Oncology: Pancreatic Adenocarcinoma, versión 2025.
- Conroy T, et al. PRODIGE 24. NEJM 2018. Neoptolemos JP, et al. ESPAC-4. Lancet 2017.
- Conroy T, et al. PRODIGE 4/ACCORD 11. NEJM 2011. Von Hoff DD, et al. MPACT. NEJM 2013. Wainberg ZA, et al. NAPOLI-3. Lancet 2023. Golan T, et al. POLO. NEJM 2019.
- Versteijne E, et al. PREOPANC. J Clin Oncol 2020/2022. Van der Gaag NA, et al. NEJM 2010.
- Bassi C, et al. ISGPS: definición de fístula pancreática actualizada 2016. Surgery 2017. Wente MN, et al. ISGPS: vaciamiento gástrico retardado y hemorragia pospancreatectomía. Surgery 2007.
- Tol JA, et al. ISGPS: linfadenectomía estándar. Surgery 2014. Isaji S, et al. Consenso internacional IAP de resecabilidad. Pancreatology 2018.
- Amin MB, et al. AJCC Cancer Staging Manual, 8.ª ed.
- Guía de Práctica Clínica IMSS/CENETEC: Diagnóstico y tratamiento del adenocarcinoma de páncreas.
- Sabiston, 21.ª ed.; Schwartz, 11.ª ed.; Blumgart, Cirugía del hígado, vía biliar y páncreas, 7.ª ed.
`),
    sheet('pan-net', '06', 'Tumores neuroendocrinos del páncreas', `
## Tumores neuroendocrinos del páncreas

### Definición
Neoplasias epiteliales con diferenciación neuroendocrina originadas en el páncreas (antes llamadas "tumores de células de los islotes"). Se dividen en **funcionantes** (producen un síndrome hormonal: insulinoma, gastrinoma, glucagonoma, VIPoma, somatostatinoma y otros raros) y **no funcionantes** (los más frecuentes hoy, 60-90%, muchos descubiertos incidentalmente).

### Epidemiología
- Representan 1-2% de las neoplasias pancreáticas, pero su incidencia ha aumentado (1 por 100,000) por el uso de imagen.
- Edad de presentación 50-60 años.
- La mayoría son esporádicos; 10% se asocian a síndromes: **NEM-1** (gen MEN1: paratiroides, hipófisis, páncreas/duodeno), **von Hippel-Lindau**, neurofibromatosis tipo 1 y esclerosis tuberosa.

### Clasificación histológica (OMS 2019/2022)
| Categoría | Diferenciación | Ki-67 | Mitosis/2 mm² |
|---|---|---|---|
| TNE G1 | Bien diferenciado | Menor de 3% | Menor de 2 |
| TNE G2 | Bien diferenciado | 3-20% | 2-20 |
| TNE G3 | Bien diferenciado | Mayor de 20% | Mayor de 20 |
| CNE (carcinoma neuroendocrino) | **Pobremente diferenciado** (células pequeñas o grandes) | Mayor de 20% (a menudo mayor de 55%) | Mayor de 20 |
| MiNEN | Mixto neuroendocrino-no neuroendocrino | Variable | |

Inmunohistoquímica: cromogranina A y sinaptofisina. La estadificación sigue el TNM específico AJCC 8.ª para TNE pancreáticos.

### Tumores funcionantes
| Tumor | Hormona | Síndrome clínico | Malignidad | Localización |
|---|---|---|---|---|
| **Insulinoma** | Insulina | **Tríada de Whipple**: síntomas de hipoglucemia (neuroglucopénicos y adrenérgicos), glucosa baja documentada y alivio al administrar glucosa; aumento de peso | **Menos de 10%** maligno; 90% solitario y menor de 2 cm | Distribuido uniformemente en todo el páncreas |
| **Gastrinoma** (síndrome de Zollinger-Ellison) | Gastrina | Úlceras pépticas múltiples, refractarias o en sitios atípicos (yeyuno), **diarrea** (que mejora con IBP), esofagitis | **60-90%** maligno | **Triángulo del gastrinoma (Passaro)**: unión del cístico y el colédoco, unión de la 2.ª y 3.ª porciones del duodeno, y unión del cuello y cuerpo del páncreas; más de 50% es **duodenal**, pequeño y múltiple (sobre todo en NEM-1) |
| **Glucagonoma** | Glucagón | **Eritema necrolítico migratorio**, diabetes, pérdida de peso, **trombosis venosa**, glositis, depresión (las "4 D": dermatosis, diabetes, TVP, depresión) | 50-80% | Cuerpo y cola |
| **VIPoma** (Verner-Morrison) | Péptido intestinal vasoactivo | **Diarrea acuosa secretora** masiva (más de 3 L/día), **hipopotasemia**, aclorhidria (síndrome WDHA) | 40-70% | Cuerpo y cola |
| **Somatostatinoma** | Somatostatina | Diabetes, colelitiasis, esteatorrea, hipoclorhidria | 70% | Cabeza del páncreas y duodeno (asociado a NF-1) |

### Diagnóstico bioquímico
- **Insulinoma:** **prueba de ayuno supervisado de 72 h**. Criterios ante glucosa **menor de 55 mg/dL** con síntomas: **insulina de 3 µU/mL o más**, **péptido C de 0.6 ng/mL o más**, **proinsulina de 5 pmol/L o más**, beta-hidroxibutirato de 2.7 mmol/L o menos y **sulfonilureas y meglitinidas negativas en plasma** (descarta hipoglucemia facticia). La hipoglucemia facticia por insulina exógena da insulina alta con **péptido C suprimido**.
- **Gastrinoma:** gastrina sérica en ayuno elevada con **pH gástrico menor de 2**. Gastrina mayor de 10 veces el límite superior (aprox. mayor de 1,000 pg/mL) con pH ácido es diagnóstica. Si es menor, **prueba de secretina**: aumento de gastrina de **120 pg/mL o más** confirma. Suspender los IBP con precaución (riesgo de perforación); causas de hipergastrinemia sin ácido: gastritis atrófica, IBP.
- **Glucagonoma:** glucagón mayor de 500 pg/mL. **VIPoma:** VIP mayor de 75 pg/mL con diarrea secretora (ayuno no la detiene).
- **No funcionantes:** cromogranina A (apoyo; falsos positivos con IBP e insuficiencia renal).
- **Descartar NEM-1** en todos: calcio y PTH (hiperparatiroidismo), prolactina; antecedentes familiares. En NEM-1 con gastrinoma, **corregir primero el hiperparatiroidismo** (la hipercalcemia estimula la gastrina).

### Localización por imagen
- **TC multifásica** (lesión hipervascular en fase arterial) y **resonancia magnética**.
- **Ultrasonido endoscópico**: el más sensible para tumores pequeños de la cabeza (insulinoma, gastrinoma); permite biopsia y tatuaje.
- **PET-CT con análogos de somatostatina marcados con galio-68 (DOTATATE/DOTATOC)**: estándar para TNE bien diferenciados y estadificación (sustituye al Octreoscan). **El insulinoma expresa poco el receptor 2**; para localizarlo es mejor el **PET con análogo de GLP-1 (exendina-4)** donde esté disponible.
- **PET con FDG**: para G3 y CNE (más agresivos).
- Transoperatorio: **ultrasonido intraoperatorio** (identifica más de 90% de los insulinomas) y palpación bimanual. La **prueba de estimulación arterial selectiva con calcio** (Imamura) localiza insulinomas ocultos; la transiluminación duodenal y la duodenotomía localizan gastrinomas duodenales.

### Tratamiento quirúrgico
| Situación | Procedimiento |
|---|---|
| **Insulinoma** solitario, superficial, a más de 2-3 mm del conducto | **Enucleación** (abierta o laparoscópica); curación en más de 90% |
| Insulinoma profundo, cerca del Wirsung o sospecha de malignidad | Resección formal (pancreatectomía distal, central o pancreatoduodenectomía) |
| **Gastrinoma** esporádico | Exploración con duodenotomía, palpación y ultrasonido; enucleación de tumores pancreáticos y resección de los duodenales con **linfadenectomía regional** (los ganglios están afectados con frecuencia) |
| Gastrinoma en NEM-1 | Controvertido: cirugía generalmente cuando el tumor mide **más de 2 cm**; control con IBP en dosis altas |
| **TNE no funcionante de 2 cm o menos**, G1, asintomático, sin dilatación ductal ni ganglios | **Vigilancia** activa es una opción aceptada (ENETS 2023, NCCN); resecar si crece o cambia |
| TNE no funcionante de más de 2 cm, G2-G3, sintomático | **Resección oncológica con linfadenectomía** (pancreatoduodenectomía o pancreatectomía distal) |
| Metástasis hepáticas resecables (TNE bien diferenciado) | Resección del primario y de las metástasis (incluso citorreducción si se puede quitar más de 70-90% del volumen tumoral en tumores funcionantes o sintomáticos) |
| Glucagonoma, VIPoma, somatostatinoma | Resección oncológica; control preoperatorio del síndrome con análogos de somatostatina, corrección hidroelectrolítica (VIPoma) y anticoagulación (glucagonoma) |

### Tratamiento médico y de enfermedad avanzada
- **Control del síndrome hormonal:** insulinoma: dieta fraccionada, **diazóxido**, análogos de somatostatina con cautela (pueden empeorar la hipoglucemia al suprimir el glucagón), everolimus en el maligno. Gastrinoma: **IBP en dosis altas** (omeprazol 60-120 mg/día). VIPoma y glucagonoma: **octreótido o lanreotida**.
- **Antiproliferativo:** análogos de somatostatina (**lanreotida, CLARINET**; octreótido LAR), **everolimus** (RADIANT-3), **sunitinib**, cabozantinib (CABINET).
- **Terapia con radionúclidos dirigida a receptores (PRRT)** con lutecio-177 DOTATATE (NETTER-1 en TNE intestinales; NETTER-2 en primera línea G2-G3 con receptor positivo).
- **Quimioterapia:** capecitabina con temozolomida (CAPTEM) en TNE pancreáticos; platino-etopósido en CNE.
- **Metástasis hepáticas no resecables:** embolización o radioembolización, ablación; trasplante hepático en casos muy seleccionados (criterios de Milán para TNE).

### Complicaciones de la cirugía
La **enucleación** tiene una tasa de **fístula pancreática mayor** que la resección (hasta 20-30%, casi siempre bioquímica o grado B), pero preserva parénquima y función. Hipoglucemia de rebote o hiperglucemia transitoria tras el insulinoma.

### Pronóstico
- Insulinoma benigno resecado: curación con supervivencia normal.
- TNE bien diferenciados: supervivencia a 5 años de 80-90% localizados; 30-60% con metástasis.
- Carcinomas neuroendocrinos: mediana menor de 12 meses en enfermedad avanzada.
- Factores pronósticos: grado (Ki-67), tamaño, ganglios, metástasis, diferenciación.

### Perlas
- Tríada de Whipple + ayuno de 72 h: insulina alta con péptido C alto = insulinoma; péptido C bajo = insulina exógena.
- Insulinoma: pequeño, único, benigno; enucleación.
- Zollinger-Ellison: úlceras refractarias + diarrea; buscar en el triángulo de Passaro y en el duodeno; descartar NEM-1.
- Eritema necrolítico migratorio = glucagonoma.
- TNE no funcionante de 2 cm o menos, G1: se puede vigilar.
- Ga-68 DOTATATE para estadificar; no sirve bien para insulinoma.

### Referencias
- NCCN Guidelines: Neuroendocrine and Adrenal Tumors, versión vigente.
- ENETS 2023 Guidance Paper for nonfunctioning pancreatic NETs; ENETS 2023 functioning pancreatic NETs.
- WHO Classification of Tumours: Digestive System Tumours, 5.ª ed., 2019; Endocrine and Neuroendocrine Tumours, 2022.
- Cryer PE, et al. Endocrine Society Clinical Practice Guideline: hypoglycemic disorders. 2009.
- Caplin ME, et al. CLARINET. NEJM 2014.
- Sabiston, 21.ª ed.; Schwartz, 11.ª ed.
`),
    sheet('pan-cirugia', '07', 'Técnicas quirúrgicas del páncreas', `
## Técnicas quirúrgicas del páncreas

### Generalidades
La cirugía pancreática incluye resecciones (pancreatoduodenectomía, pancreatectomía distal, central, total y enucleación) y derivaciones (drenaje ductal y de pseudoquistes, derivaciones biliares y gástricas paliativas). Sus resultados dependen del **volumen hospitalario y del cirujano**: la mortalidad de la pancreatoduodenectomía es menor de 3-5% en centros de alto volumen y puede superar 10% en centros de bajo volumen. Las guías internacionales recomiendan **centralización**.

### Anatomía quirúrgica esencial
- **Partes:** cabeza (con proceso uncinado), cuello, cuerpo y cola. El cuello cubre la confluencia de la VMS, la vena esplénica y la porta.
- **Conductos:** Wirsung (principal, desemboca en la papila mayor junto al colédoco) y Santorini (accesorio, papila menor). En el **páncreas divisum** (5-10%) la mayor parte del drenaje es por la papila menor.
- **Arterias:** arcadas pancreatoduodenales (gastroduodenal y pancreatoduodenal inferior), arteria pancreática dorsal, gran pancreática y caudal (ramas de la esplénica).
- **Venas:** drenan a la porta, la VMS y la esplénica; **tronco gastrocólico de Henle** en el borde inferior del cuello.
- **Variantes arteriales hepáticas:** hepática derecha reemplazada desde la AMS (10-20%), hepática común desde la AMS (2-3%); deben identificarse en la TC preoperatoria. **Estenosis del tronco celíaco** (ligamento arcuato) en 2-7%: la ligadura de la gastroduodenal puede causar isquemia hepática; se hace prueba de pinzamiento.

### Pancreatoduodenectomía (Whipple)
Indicaciones: adenocarcinoma de cabeza, ampuloma, colangiocarcinoma distal, carcinoma duodenal, NMPI y tumores neuroendocrinos de la cabeza, pancreatitis crónica con masa de cabeza, trauma grave de cabeza y duodeno (raro). La técnica paso a paso está descrita en la hoja de cáncer de páncreas; aquí se resumen los puntos clave:
- Variantes: **clásica** (con antrectomía) o **con preservación de píloro** (Traverso-Longmire); similares en supervivencia, mortalidad y vaciamiento gástrico retardado. La variante con **resección del píloro y preservación del estómago** (PrPD) es otra alternativa.
- **Abordaje arterial primero** (superior, posterior, mesentérico o del proceso uncinado): define temprano la resecabilidad en relación con la AMS y la presencia de variantes.
- **Pancreatoyeyunostomía**: ducto-mucosa (Blumgart modificada, Cattell-Warren) o invaginación (Peng). **Pancreatogastrostomía**: alternativa con resultados similares en la mayoría de los metaanálisis; puede asociarse a más hemorragia de la línea de sutura y peor función exocrina a largo plazo.
- Vías de acceso: **abierta** (estándar), **laparoscópica** (equivalente en centros con experiencia; ensayo LEOPARD-2 detenido por mortalidad en la curva de aprendizaje) y **robótica** (en crecimiento).

### Pancreatectomía distal
- Indicaciones: tumores de cuerpo y cola (adenocarcinoma, NQM, NMPI, TNE), pancreatitis crónica limitada, trauma con lesión del conducto a la izquierda de la VMS, pseudoquiste con conducto desconectado.
- **Con esplenectomía** en patología maligna (para la linfadenectomía del hilio esplénico). **Con preservación del bazo** en lesiones benignas: técnica de **Kimura** (preserva los vasos esplénicos) o de **Warshaw** (liga los vasos esplénicos y el bazo sobrevive por los vasos gástricos cortos y gastroepiploicos izquierdos; riesgo de infarto esplénico y várices gástricas).
- **RAMPS** (pancreatoesplenectomía radical modular anterógrada): disección de derecha a izquierda, con plano posterior anterior o posterior a la suprarrenal izquierda, mejora la tasa R0.
- **DP-CAR (Appleby modificada)**: con resección del tronco celíaco en tumores que lo invaden, si la gastroduodenal mantiene el flujo hepático (se puede embolizar la hepática común previamente para estimular colaterales).
- **Manejo del muñón:** grapado (más usado), sutura manual, sello con parche o ligamento; el ensayo DISPACT no encontró diferencias entre grapado y sutura en la fístula. La fístula pancreática es la complicación principal (20-30%, la mayor parte grado B).
- Vía **laparoscópica**: menor estancia y pérdida sanguínea, resultados oncológicos equivalentes (LEOPARD, DIPLOMA).
- Tras esplenectomía: **vacunas** contra neumococo, meningococo y *Haemophilus influenzae* tipo b (idealmente 2 semanas antes en cirugía electiva o 2 semanas después).

### Pancreatectomía central (media)
Para lesiones benignas o de bajo grado del cuello y cuerpo proximal (TNE pequeño, NQM pequeña, NMPI de rama secundaria): se reseca el segmento central y se cierra el muñón cefálico; el distal se anastomosa a un asa en Y de Roux o al estómago. Preserva función endocrina y exocrina, pero tiene **mayor tasa de fístula** (dos superficies de corte).

### Enucleación
Para tumores pequeños, superficiales, benignos o de bajo grado (insulinoma, TNE pequeño, cistadenoma seroso sintomático) a más de 2-3 mm del conducto principal. Mínima pérdida de parénquima; riesgo de fístula de hasta 30%. No incluye linfadenectomía, por lo que no es oncológica para tumores de riesgo.

### Pancreatectomía total
Indicaciones: NMPI de conducto principal difusa, cáncer multifocal, margen persistentemente positivo en el cuello, rescate de fístula grado C (alta mortalidad), pancreatitis crónica difusa con **autotrasplante de islotes**. Consecuencia: **diabetes pancreatopriva** (frágil, sin glucagón) e insuficiencia exocrina total; requiere educación y seguimiento estrecho.

### Procedimientos de drenaje y derivación
- **Pancreatoyeyunostomía lateral (Partington-Rochelle)**: pancreatitis crónica con conducto mayor de 7 mm.
- **Frey** y **Beger**: pancreatitis crónica con cabeza agrandada (ver hoja de pancreatitis crónica).
- **Cistogastrostomía y cistoyeyunostomía**: pseudoquistes y necrosis amurallada (ver hoja de colecciones).
- **Necrosectomía retroperitoneal videoasistida (VARD)** y necrosectomía transgástrica laparoscópica.
- **Doble derivación paliativa** (hepaticoyeyunostomía y gastroyeyunostomía) en cáncer irresecable descubierto en la exploración.

### Cuidados perioperatorios
- **Protocolo ERAS** para pancreatoduodenectomía (sociedad ERAS 2019): asesoría, prehabilitación, carga de carbohidratos, sin preparación intestinal, analgesia epidural o bloqueo de pared, retiro temprano de sonda nasogástrica y drenajes, dieta temprana, movilización.
- **Profilaxis antibiótica**: ajustar a los cultivos biliares en pacientes con prótesis (piperacilina-tazobactam redujo la infección de herida frente a cefoxitina en un ensayo de 2023).
- **Somatostatina y análogos**: evidencia heterogénea; uso según el riesgo y la práctica del centro.
- **Retiro de drenaje**: temprano (día 3) si la amilasa del drenaje del día 1 es baja (por ejemplo, menor de 5,000 U/L).
- Tromboprofilaxis extendida (4 semanas) en cirugía oncológica.

### Complicaciones y su manejo (resumen ISGPS/ISGLS)
- **Fístula pancreática**: amilasa del drenaje mayor de 3 veces la sérica en el día 3 o después con relevancia clínica (B o C); fuga bioquímica sin repercusión no es fístula. Manejo: drenaje, nutrición, antibióticos, drenaje percutáneo de colecciones; reoperación en grado C refractario.
- **Hemorragia pospancreatectomía**: temprana (técnica: reoperación) o tardía (pseudoaneurisma: angiografía y embolización o prótesis cubierta); atender la **hemorragia centinela**.
- **Vaciamiento gástrico retardado**: procinéticos (eritromicina), sonda nasoyeyunal, nutrición; descartar colección o fístula subyacente.
- **Fuga biliar**: drenaje; la mayoría cierra sola; colangiografía percutánea si es de alto gasto.
- **Fuga quilosa**: triglicéridos de cadena media, octreótido, nutrición parenteral si persiste.
- **Infección de sitio quirúrgico y abscesos**: drenaje percutáneo.
- **Insuficiencia exocrina y endocrina**: enzimas a dosis adecuadas, vigilancia glucémica.
- **Clasificación de Clavien-Dindo** y **Comprehensive Complication Index** para reportar la morbilidad.

### Perlas
- Arteria hepática derecha reemplazada desde la AMS: búsquela por detrás de la porta antes de seccionar.
- Prueba de pinzamiento de la gastroduodenal antes de ligarla.
- Textura blanda + conducto de 3 mm o menos = alto riesgo de fístula.
- Warshaw preserva el bazo sin los vasos esplénicos; Kimura con ellos.
- La pancreatectomía total produce diabetes frágil sin glucagón.

### Referencias
- Bassi C, et al. ISGPS 2016. Surgery 2017. Wente MN, et al. ISGPS 2007.
- Melloul E, et al. ERAS Society guidelines for pancreatoduodenectomy. World J Surg 2020.
- Diener MK, et al. DISPACT. Lancet 2011. De Rooij T, et al. LEOPARD. Ann Surg 2019.
- Strasberg SM, et al. RAMPS. Surgery 2003.
- Sabiston, 21.ª ed.; Schwartz, 11.ª ed.; Blumgart, 7.ª ed.
`),
  ],
};
