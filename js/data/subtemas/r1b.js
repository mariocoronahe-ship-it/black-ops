// R1 · fundamentos (2/2): infección, choque, nutrición y sangre.
// Desarrollo de tema completo por subtema (base: material de Drive «CALOT-OS COMPLETO» + Sabiston, Schwartz, GPC IMSS).
import { sheet } from './hoja.js?v=20261122c';

export const R1B = {
  'ap-r1-infeccion': [
    sheet('inf-quirurgica', '01', 'Infección quirúrgica: etiología, fisiopatología, clasificación y prevención', `
## Infección quirúrgica: etiología, fisiopatología, clasificación y prevención

### Definición
La infección quirúrgica es la que requiere tratamiento quirúrgico (drenaje, desbridamiento, resección) o la que aparece como complicación de un procedimiento. Comprende la **infección del sitio quirúrgico (ISQ)**, la infección intraabdominal, las infecciones necrosantes de tejidos blandos y las infecciones nosocomiales del paciente operado (neumonía, infección urinaria asociada a sonda, bacteriemia asociada a catéter y colitis por *Clostridioides difficile*).

### Epidemiología
- La ISQ es una de las infecciones asociadas a la atención de la salud más frecuentes: complica 2-5% de las cirugías en países de altos ingresos y hasta 10-20% en países de ingresos medios y bajos (OMS). Duplica la estancia, aumenta el costo y la mortalidad.
- En México, la Red Hospitalaria de Vigilancia Epidemiológica (RHOVE) reporta la ISQ, la neumonía y la bacteriemia entre las IAAS más frecuentes; en servicios de cirugía general las tasas de ISQ informadas oscilan entre 5 y 15%, según el tipo de cirugía y la calidad de la vigilancia.
- Hasta la mitad de las ISQ se consideran prevenibles con medidas basadas en evidencia.

### Etiología
| Situación | Microorganismos más frecuentes |
|---|---|
| Cirugía limpia (hernia, mama, tiroides, vascular, con implantes) | *Staphylococcus aureus* (incluido resistente a meticilina, SARM), estafilococos coagulasa negativos |
| Tubo digestivo alto | Cocos grampositivos, bacilos gramnegativos, flora oral |
| Vía biliar | *E. coli*, *Klebsiella*, *Enterococcus*, anaerobios en obstrucción o anastomosis bilioentéricas |
| Colon, recto, apéndice | Enterobacterias (*E. coli*), anaerobios (*Bacteroides fragilis*), enterococos |
| Infección nosocomial o con antibióticos previos | *Pseudomonas aeruginosa*, enterobacterias productoras de betalactamasas de espectro extendido (BLEE) y de carbapenemasas, *Enterococcus faecium*, *Candida* |

La mayoría de las ISQ provienen de la **flora endógena** del paciente (piel o víscera abierta); la contaminación exógena (personal, aire, instrumental) es menos frecuente pero causa brotes.

### Fisiopatología
- **Contaminación → colonización → infección:** ocurre infección cuando el inóculo y la virulencia superan las defensas del huésped. Riesgo ≈ (dosis de contaminación × virulencia) / resistencia del huésped.
- **Carga crítica:** más de 10⁵ microorganismos por gramo de tejido; con cuerpo extraño (una sola sutura de seda) bastan 10²-10³ estafilococos.
- **Factores locales que facilitan la infección:** tejido desvitalizado, hematoma, espacio muerto, isquemia por tensión, cuerpo extraño, mala técnica.
- **Biopelícula:** comunidad bacteriana adherida a superficies (mallas, catéteres, prótesis) dentro de una matriz extracelular; resistente a antibióticos y a la fagocitosis; suele requerir retirar el material.
- **Respuesta del huésped:** neutrófilos (requieren oxígeno para el estallido respiratorio: la hipoxia tisular reduce la capacidad bactericida), complemento, opsonización, macrófagos.

### Factores de riesgo de ISQ
| Paciente | Procedimiento |
|---|---|
| Edad avanzada, obesidad, diabetes e hiperglucemia perioperatoria, tabaquismo, desnutrición, inmunosupresión (esteroides, quimioterapia), infección a distancia, colonización nasal por *S. aureus*, estancia preoperatoria prolongada, ASA 3 o más | Clase de herida, duración mayor que el percentil 75 del procedimiento, rasurado con navaja, profilaxis inadecuada (tarde, dosis baja, sin redosis), hipotermia, transfusión, drenajes, técnica deficiente, urgencia, reintervención |

**Índice NNIS:** un punto por ASA 3 o más, herida contaminada o sucia y duración mayor del percentil 75; predice el riesgo mejor que la clase de herida sola.

### Clasificación de la herida quirúrgica (CDC)
| Clase | Descripción | Ejemplos | Tasa de ISQ aproximada |
|---|---|---|---|
| I. Limpia | Sin inflamación, sin entrada a tubos respiratorio, digestivo, genital o urinario | Hernioplastia, tiroidectomía, mastectomía | 1-2% |
| II. Limpia-contaminada | Entrada controlada a esos tubos sin contaminación inusual | Colecistectomía, colectomía electiva preparada, gastrectomía | 3-10% |
| III. Contaminada | Heridas traumáticas recientes, derrame importante de contenido intestinal, falla mayor de la técnica estéril, inflamación aguda no purulenta | Apendicitis aguda no perforada con derrame, herida abierta reciente | 10-15% |
| IV. Sucia o infectada | Heridas traumáticas antiguas con tejido desvitalizado, infección clínica, víscera perforada | Peritonitis purulenta o fecal, absceso | Más de 25-30% |

### Clasificación de la ISQ (CDC/NHSN)
| Tipo | Afecta | Plazo | Criterios (al menos uno) |
|---|---|---|---|
| **Superficial incisional** | Piel y tejido subcutáneo | 30 días | Drenaje purulento, cultivo positivo, signos inflamatorios con apertura deliberada de la herida, diagnóstico del cirujano |
| **Profunda incisional** | Fascia y músculo | 30 días (90 días con implante en ciertos procedimientos) | Drenaje purulento profundo, dehiscencia espontánea o apertura con fiebre o dolor, absceso en imagen o cirugía |
| **Órgano o espacio** | Cualquier zona manipulada más profunda que la fascia (peritoneo, absceso subfrénico, mediastino) | 30 o 90 días | Drenaje purulento por drenaje, cultivo, absceso en imagen o reoperación |

No se consideran ISQ el absceso de punto (inflamación mínima en el sitio de entrada de la sutura) ni la celulitis aislada de un sitio de drenaje.

### Cuadro clínico y diagnóstico
- ISQ superficial: típicamente entre los días 4 y 8; dolor, eritema, induración, calor, salida de pus, fiebre.
- **Excepción temprana:** infección en las primeras 24-48 h con dolor desproporcionado, eritema que avanza, ampollas o líquido grisáceo: estreptococo del grupo A o clostridio (infección necrosante; ver la hoja de tejidos blandos).
- ISQ de órgano o espacio: fiebre, íleo, taquicardia, dolor, leucocitosis, PCR que no desciende; **tomografía con contraste** para identificar colecciones y fugas.
- Cultivo de pus o tejido (no de hisopo superficial).
- Biomarcadores: la PCR al día 3-5 de cirugía colorrectal con valores bajos (por ejemplo, menos de 150 mg/L al día 3, según estudios) tiene alto valor predictivo negativo para complicaciones infecciosas; la procalcitonina ayuda a decidir la suspensión de antibióticos.

### Tratamiento de la ISQ
- **Superficial:** retirar puntos, abrir, drenar, irrigar y curar (húmeda o con presión negativa); cierre por segunda intención o diferido.
- **Antibiótico sistémico** solo si hay eritema o induración de más de 5 cm alrededor de la herida, fiebre mayor de 38.5 °C, FC mayor de 110, leucocitos mayores de 12 000 o inmunosupresión (IDSA 2014): cefalosporina de primera generación o, si hay riesgo de SARM, vancomicina; en heridas abdominales o perineales, cobertura de gramnegativos y anaerobios.
- **Profunda o de órgano o espacio:** drenaje percutáneo guiado por imagen (de elección en colecciones accesibles) o quirúrgico, más antibiótico; buscar y corregir la fuga.
- **Malla infectada:** las mallas macroporosas de polipropileno pueden salvarse a menudo con drenaje, antibiótico y presión negativa; las de PTFE expandido o multifilamento suelen requerir retiro.

### Prevención (paquete basado en guías OMS 2016/2018, CDC 2017 y ACS/SIS 2016)
**Preoperatorio:**
- Baño con jabón (simple o con antiséptico) antes de la cirugía.
- No retirar el vello; si se hace, con rastrillo eléctrico.
- Descolonización con mupirocina nasal más baño con clorhexidina en portadores de *S. aureus* que van a cirugía cardiaca u ortopédica.
- Tratar infecciones a distancia antes de una cirugía electiva.
- Control glucémico, suspender el tabaquismo, optimizar la nutrición.
- **Cirugía colorrectal:** preparación mecánica más antibióticos orales (neomicina o equivalente con metronidazol) la víspera.
- Estancia preoperatoria lo más corta posible.

**Transoperatorio:**
- **Profilaxis antibiótica** adecuada en tiempo (60 min antes de la incisión), dosis (por peso), redosis (cada 2 vidas medias o con sangrado mayor de 1500 ml) y espectro.
- **Antisepsia de piel con clorhexidina-alcohol** y lavado quirúrgico de manos.
- **Normotermia** (más de 36 °C).
- **Control glucémico** (meta menor de 200 mg/dl en diabéticos y no diabéticos).
- Oxigenación: la OMS sugiere FiO2 de 80% en pacientes intubados (recomendación condicional, cuestionada por estudios posteriores; no se usa de forma universal).
- Mantener la normovolemia.
- Técnica cuidadosa (principios de Halsted), hemostasia, eliminar espacio muerto, evitar cuerpos extraños innecesarios.
- Protectores de herida en cirugía abdominal limpia-contaminada y contaminada (recomendación condicional).
- Suturas recubiertas de triclosán (recomendación condicional de la OMS).
- Cambio de guantes e instrumental antes del cierre en cirugía colorrectal (paquetes de cierre).
- Disciplina en quirófano: puertas cerradas, poco tránsito.

**Postoperatorio:**
- **No prolongar la profilaxis más allá del final de la cirugía** (OMS) o de 24 h (máximo aceptado por otras guías).
- Apósito estéril 24-48 h; higiene de manos antes de tocar la herida.
- Considerar presión negativa incisional en heridas cerradas de alto riesgo.
- Vigilancia activa de ISQ hasta 30 días tras el alta (muchas se presentan en casa).

### Otras infecciones nosocomiales del paciente quirúrgico
| Infección | Prevención clave |
|---|---|
| Neumonía postoperatoria y asociada a ventilación | Movilización, inspirometría, cabecera elevada, higiene oral, interrupción de sedación |
| Infección urinaria asociada a sonda | Indicación justificada, inserción aséptica, sistema cerrado, **retiro temprano (24-48 h)** |
| Bacteriemia asociada a catéter central | Paquete de inserción (higiene de manos, barreras máximas, clorhexidina, evitar femoral, retiro diario si no se requiere) |
| ***C. difficile*** | Uso prudente de antibióticos e inhibidores de bomba; aislamiento de contacto; lavado con agua y jabón (el alcohol no elimina esporas) |

**Colitis por *C. difficile*:** diarrea (3 o más evacuaciones en 24 h) tras antibióticos; diagnóstico con PCR o antígeno y toxinas. Tratamiento: **vancomicina oral 125 mg cada 6 h** o **fidaxomicina 200 mg cada 12 h** por 10 días; el metronidazol oral solo si no hay alternativas. **Fulminante** (hipotensión, choque, íleo, megacolon): vancomicina oral 500 mg cada 6 h más metronidazol IV 500 mg cada 8 h (y vancomicina rectal si hay íleo); **cirugía** ante perforación, megacolon tóxico, choque refractario, lactato mayor de 5 mmol/L o leucocitos mayores de 50 000: colectomía subtotal con ileostomía terminal o, como alternativa en casos seleccionados, ileostomía en asa con lavado colónico.

### Perlas de examen y errores frecuentes
- *S. aureus* es la causa más frecuente de ISQ.
- Más de 10⁵ bacterias/g = infección; con cuerpo extraño basta mucho menos.
- ISQ superficial: abrir y drenar; antibiótico solo con celulitis mayor de 5 cm o datos sistémicos.
- No prolongar la profilaxis.
- Clorhexidina-alcohol, normotermia, glucosa menor de 200 y no rasurar.
- Fiebre con dolor desproporcionado en las primeras 48 h: infección necrosante.
- *C. difficile*: vancomicina oral o fidaxomicina; colectomía subtotal en fulminante.

### Referencias
OMS. *Global guidelines for the prevention of surgical site infection* (2016; 2.ª ed. 2018) · Berríos-Torres SI et al. *CDC Guideline for the Prevention of Surgical Site Infection*, JAMA Surg 2017 · Ban KA et al. *ACS/SIS Surgical Site Infection Guidelines* (2016) · Stevens DL et al. *IDSA guidelines for skin and soft tissue infections* (2014) · Johnson S et al. *IDSA/SHEA guideline on C. difficile* (2021) · NOM-045-SSA2-2005 · Schwartz, cap. «Surgical infections».
`),
    sheet('inf-tejidos', '02', 'Infecciones de piel y tejidos blandos e infecciones necrosantes', `
## Infecciones de piel y tejidos blandos e infecciones necrosantes

### Definición
Las infecciones de piel y tejidos blandos (IPTB) abarcan desde la celulitis y los abscesos (frecuentes, de manejo ambulatorio) hasta las **infecciones necrosantes de tejidos blandos** (fascitis necrosante, gangrena de Fournier, mionecrosis clostridial), que son emergencias quirúrgicas con mortalidad de 20-30% y en las que el pronóstico depende del tiempo hasta el desbridamiento.

### Epidemiología
- Los abscesos cutáneos y la celulitis son motivos muy frecuentes de consulta en urgencias.
- Las infecciones necrosantes tienen una incidencia de 0.3-15 por 100 000 habitantes. En México, la alta prevalencia de **diabetes mellitus** (más de 10% de los adultos) explica que la gangrena de Fournier y la fascitis polimicrobiana sean motivo habitual de ingreso en servicios de cirugía del IMSS.
- Factores de riesgo: diabetes, obesidad, alcoholismo, cirrosis, inmunosupresión, enfermedad vascular periférica, uso de drogas intravenosas, cirugía o trauma reciente, varicela en niños, AINE (asociación discutida: pueden enmascarar síntomas).

### Clasificación práctica (IDSA)
| Categoría | Ejemplos | Agente principal |
|---|---|---|
| **No purulenta** | Erisipela (dermis superficial, bordes netos, elevados), celulitis (dermis profunda e hipodermis, bordes difusos) | Estreptococos beta hemolíticos (grupo A) |
| **Purulenta** | Absceso, forúnculo, ántrax, celulitis con pus | *S. aureus* (incluido SARM) |
| **Necrosante** | Fascitis, miositis, gangrena | Polimicrobiana o monomicrobiana (ver abajo) |

**Gravedad:** leve (sin datos sistémicos), moderada (con datos sistémicos), grave (fracaso del tratamiento, SIRS con hipotensión, inmunosupresión o sospecha de infección profunda o necrosante).

### Celulitis y erisipela
- Clínica: eritema, edema, calor y dolor, a menudo en miembros inferiores con puerta de entrada (intertrigo, tiña, úlcera, linfedema).
- Diagnóstico clínico; cultivos solo en casos graves o inmunocomprometidos.
- Tratamiento: **cefalexina** 500 mg VO cada 6 h, **dicloxacilina** o penicilina; en casos moderados o graves, cefazolina IV (1-2 g cada 8 h); 5-7 días suelen bastar (extender si no mejora). Elevación de la extremidad y tratamiento de la puerta de entrada.
- Diagnóstico diferencial: trombosis venosa profunda, dermatitis por estasis (bilateral), gota, fascitis necrosante.

### Absceso cutáneo
- **Incisión y drenaje** es el tratamiento principal; empacar la cavidad no es obligatorio en abscesos pequeños.
- Antibiótico (trimetoprim-sulfametoxazol o clindamicina para cubrir SARM comunitario) si hay celulitis extensa, datos sistémicos, inmunosupresión, extremos de edad, localización difícil de drenar (cara, manos, genitales) o falla del drenaje solo; los ensayos recientes muestran que el antibiótico aumenta modestamente la curación incluso en abscesos pequeños.

### Infecciones necrosantes: tipos
| Tipo | Microbiología | Contexto clínico |
|---|---|---|
| **I (polimicrobiana)**, la más frecuente (55-75%) | Aerobios y anaerobios: enterobacterias, estreptococos no A, *Bacteroides*, *Peptostreptococcus*, *Clostridium* | Diabéticos, ancianos, perineo (Fournier), posoperatorio abdominal, pie diabético |
| **II (monomicrobiana)** | ***Streptococcus pyogenes*** (grupo A), a veces con *S. aureus* | Jóvenes sanos, extremidades, trauma menor; síndrome de choque tóxico estreptocócico |
| **III** | *Clostridium perfringens* (mionecrosis o gangrena gaseosa) y bacterias marinas (*Vibrio vulnificus*, *Aeromonas*) | Heridas traumáticas contaminadas con tierra; exposición a agua salada o mariscos en cirróticos |
| IV (fúngica) | *Candida*, mucormicosis | Inmunocomprometidos, trauma grave |

**Gangrena de Fournier:** fascitis necrosante del perineo, genitales y región perianal; origen colorrectal (absceso perianal), urológico (estenosis uretral) o cutáneo. El índice de gravedad de Fournier (FGSI) estima el pronóstico.

### Fisiopatología
Las bacterias se diseminan a lo largo de la fascia superficial (poco irrigada), producen toxinas y enzimas (hialuronidasa, colagenasa, estreptolisinas, toxinas alfa clostridiales) y causan **trombosis de los vasos perforantes**, con isquemia y necrosis de la piel desde la profundidad. Por eso **el daño profundo es mucho mayor que lo que se ve en la piel** y los antibióticos no llegan al tejido necrótico.

### Cuadro clínico
- **Temprano:** dolor intenso, **desproporcionado** a los hallazgos cutáneos; eritema mal delimitado, edema tenso que rebasa el eritema, calor. Fácil de confundir con celulitis.
- **Intermedio:** ampollas o bulas, induración leñosa, fluctuación, decoloración.
- **Tardío:** bulas hemorrágicas, piel grisácea o negra, **anestesia cutánea** (destrucción de nervios), **crepitación** (gas), necrosis franca, choque y falla orgánica.
- **Señales de alarma:** dolor desproporcionado, progresión en horas pese a antibióticos, signos sistémicos, crepitación, anestesia local, bulas, líquido «en agua de lavar platos» sin pus franco.

### Diagnóstico
- **Es clínico y quirúrgico.** Con sospecha razonable, la exploración quirúrgica es diagnóstica y terapéutica: no retrasarla por estudios.
- **Escala LRINEC** (PCR, leucocitos, hemoglobina, sodio, creatinina y glucosa; 6 o más puntos sugiere fascitis): útil para apoyar la sospecha, pero su sensibilidad es baja; **un puntaje bajo no excluye** la fascitis.

| Variable LRINEC | Puntos |
|---|---|
| PCR de 150 mg/L o más | 4 |
| Leucocitos 15 000-25 000 / más de 25 000 | 1 / 2 |
| Hemoglobina 11-13.5 / menor de 11 g/dl | 1 / 2 |
| Sodio menor de 135 mEq/L | 2 |
| Creatinina mayor de 1.6 mg/dl | 2 |
| Glucosa mayor de 180 mg/dl | 1 |

- **Tomografía:** gas en tejidos blandos (muy específico, pero ausente en muchos casos), engrosamiento y realce fascial, colecciones; útil en el paciente estable con duda diagnóstica o para valorar extensión (Fournier hacia retroperitoneo). La radiografía simple puede mostrar gas.
- **Prueba del dedo:** incisión de 2 cm bajo anestesia local hasta la fascia; ausencia de sangrado, líquido turbio grisáceo y **disección fácil de la fascia con el dedo** confirman la fascitis.
- Cultivos de tejido profundo y hemocultivos; Gram transoperatorio.

### Tratamiento
1. **Reanimación** (sepsis y choque séptico según Surviving Sepsis).
2. **Desbridamiento quirúrgico urgente y radical**: resecar todo el tejido necrótico hasta tejido sano que sangre; la cirugía en las primeras 6-12 h reduce la mortalidad. Enviar tejido a cultivo y patología.
3. **Reexploración programada a las 24 h** (y cada 24-48 h) hasta que no haya necrosis nueva; en promedio se requieren 3-4 desbridamientos.
4. **Antibióticos empíricos de amplio espectro:**
   - Cobertura de SARM: **vancomicina** (15-20 mg/kg cada 8-12 h) o linezolid.
   - Más cobertura de gramnegativos y anaerobios: **piperacilina-tazobactam** 4.5 g cada 6 h o un carbapenémico (meropenem 1 g cada 8 h).
   - Más **clindamicina** 600-900 mg IV cada 8 h: inhibe la síntesis de toxinas (efecto Eagle: el estreptococo en fase estacionaria responde mal a la penicilina sola).
   - En infección confirmada por estreptococo del grupo A: **penicilina más clindamicina**; en clostridio: penicilina más clindamicina.
   - En exposición a agua de mar o *Vibrio*: doxiciclina más ceftazidima o ceftriaxona.
   - Duración: hasta que no se requieran más desbridamientos, el paciente mejore y no haya fiebre por 48-72 h.
5. **Inmunoglobulina IV** en el síndrome de choque tóxico estreptocócico (beneficio discutido).
6. **Oxígeno hiperbárico:** adyuvante discutido; **nunca debe retrasar la cirugía**.
7. **Fournier:** desbridamiento amplio; la colostomía de derivación se indica si hay compromiso del esfínter o contaminación fecal continua (los sistemas de manejo fecal pueden evitarla); la cistostomía, si hay lesión uretral. Los testículos rara vez se necrosan (irrigación propia).
8. **Reconstrucción:** presión negativa, injertos o colgajos cuando la herida está limpia.
9. Control glucémico, nutrición (gran pérdida proteica por la herida) y profilaxis tromboembólica.

### Complicaciones y pronóstico
Choque séptico, falla orgánica múltiple, amputación (hasta 20% en extremidades), insuficiencia renal, grandes defectos que requieren reconstrucción. La mortalidad global es de 20-30% y aumenta con el retraso del desbridamiento, la edad, la extensión, la falla orgánica y la localización en tronco o perineo.

### Otras infecciones relevantes
- **Pie diabético infectado** (clasificación IWGDF/IDSA: leve, moderada, grave): desbridamiento, drenaje y antibióticos; descartar osteomielitis (sonda a hueso, radiografía, resonancia); valorar isquemia.
- **Mordeduras:** amoxicilina/clavulanato en mordeduras de riesgo (ver hoja de heridas).
- **Piomiositis:** absceso intramuscular, *S. aureus*; drenaje.
- **Hidradenitis supurativa:** enfermedad inflamatoria crónica de glándulas apocrinas (axilas, ingles, perineo); manejo médico y resección amplia en casos avanzados.

### Perlas de examen y errores frecuentes
- Dolor desproporcionado = infección necrosante hasta demostrar lo contrario.
- La piel engaña: la necrosis profunda es mayor que la visible.
- LRINEC bajo no excluye; la exploración quirúrgica es la prueba definitiva.
- Clindamicina por su efecto antitoxina; vancomicina más piperacilina-tazobactam como esquema empírico.
- Reexplorar a las 24 h.
- Absceso: el tratamiento es el drenaje.
- Celulitis no purulenta = estreptococo; purulenta = *S. aureus*.

### Referencias
Stevens DL et al. *IDSA practice guidelines for SSTI* (2014) · Sartelli M et al. *WSES/SIS-E consensus conference: recommendations for the management of skin and soft-tissue infections* (2018) · Wong CH et al. LRINEC, *Crit Care Med* 2004 · Stevens DL, Bryant AE. *Necrotizing soft-tissue infections*, NEJM 2017 · Schwartz, cap. «Surgical infections» · GPC IMSS de pie diabético y de fascitis necrosante.
`),
    sheet('inf-antimicrobianos', '03', 'Antimicrobianos: farmacología, indicaciones y riesgos', `
## Antimicrobianos: farmacología, indicaciones y riesgos

### Definición
Los antimicrobianos son fármacos que matan o inhiben microorganismos. En cirugía se usan en tres escenarios distintos que no deben confundirse: **profilaxis** (prevenir la ISQ, dosis única o menos de 24 h), **tratamiento empírico** (infección probable antes de conocer el agente) y **tratamiento dirigido** (con cultivo y antibiograma). Su uso inadecuado genera resistencia, toxicidad, *C. difficile* y costo, sin sustituir nunca el **control del foco**.

### Epidemiología de la resistencia en México
- Las enterobacterias **productoras de BLEE** son frecuentes: en series mexicanas, más de 30-50% de *E. coli* hospitalarias y una proporción importante de las comunitarias; la resistencia de *E. coli* a **fluoroquinolonas** supera 40-50% y a ampicilina-sulbactam también es alta.
- *Klebsiella pneumoniae* y *Enterobacterales* productoras de carbapenemasas (KPC, NDM, OXA-48) han aumentado desde la pandemia de COVID-19; *Acinetobacter baumannii* y *Pseudomonas aeruginosa* multirresistentes en unidades de terapia intensiva.
- Implicación práctica: los esquemas empíricos deben ajustarse al **antibiograma local** y la terapia debe **desescalarse** con los cultivos.

### Principios de farmacocinética y farmacodinamia
| Tipo de actividad | Parámetro que predice eficacia | Fármacos | Implicación |
|---|---|---|---|
| Dependiente del tiempo | Tiempo por arriba de la CMI (%T > CMI) | Betalactámicos (penicilinas, cefalosporinas, carbapenémicos) | Dosis frecuentes o **infusión extendida o continua** en críticos |
| Dependiente de la concentración | Pico / CMI | Aminoglucósidos, metronidazol, daptomicina | Dosis única diaria alta |
| Exposición total | ABC / CMI | Vancomicina (ABC 400-600), fluoroquinolonas, linezolid | Ajuste por niveles y función renal |

- **Dosis de carga** en sepsis (el volumen de distribución aumenta): no reducir la primera dosis por insuficiencia renal.
- Ajustar las dosis de mantenimiento a la función renal (depuración de creatinina) y a la hepática.
- Considerar la penetración tisular (meninges, hueso, bilis, abscesos) y el peso (obesidad).

### Principales grupos
| Grupo | Ejemplos y dosis IV habitual en adulto | Espectro útil en cirugía | Efectos adversos relevantes |
|---|---|---|---|
| Cefalosporinas 1.ª G | Cefazolina 1-2 g cada 8 h (profilaxis 2 g; 3 g si pesa 120 kg o más) | Grampositivos (SAMS, estreptococos), algunos gramnegativos | Alergia |
| Cefalosporinas 2.ª G | Cefoxitina 2 g cada 6-8 h, cefuroxima | Agrega anaerobios (cefoxitina) | Alergia |
| Cefalosporinas 3.ª G | Ceftriaxona 1-2 g cada 24 h; cefotaxima; ceftazidima (antipseudomonas) | Gramnegativos comunitarios | Lodo biliar (ceftriaxona), *C. difficile*; inactivas frente a BLEE |
| Cefalosporinas 4.ª G | Cefepime 2 g cada 8-12 h | Gramnegativos incluida *Pseudomonas* | Neurotoxicidad en insuficiencia renal |
| Penicilinas con inhibidor | Piperacilina-tazobactam 4.5 g cada 6 h (o infusión extendida); amoxicilina-clavulanato | Amplio: gramnegativos, *Pseudomonas*, anaerobios, enterococo sensible a ampicilina | Nefrotoxicidad combinada con vancomicina, alergia |
| Carbapenémicos | Meropenem 1 g cada 8 h; imipenem 500 mg cada 6 h; ertapenem 1 g cada 24 h (no cubre *Pseudomonas* ni *Acinetobacter*) | BLEE, anaerobios, amplio espectro | Convulsiones (imipenem), **disminuyen los niveles de ácido valproico**; selección de resistencia: reservarlos |
| Glucopéptidos | Vancomicina 15-20 mg/kg cada 8-12 h (carga 20-35 mg/kg en críticos), ajustar por niveles o ABC | Grampositivos incluido SARM y *E. faecium* sensible | Nefrotoxicidad, reacción por infusión rápida («síndrome del hombre rojo»), ototoxicidad |
| Oxazolidinonas | Linezolid 600 mg cada 12 h IV o VO | SARM, enterococo resistente a vancomicina | Trombocitopenia (más de 2 semanas), síndrome serotoninérgico con ISRS, acidosis láctica, neuropatía |
| Lincosamidas | Clindamicina 600-900 mg cada 8 h | Grampositivos, anaerobios; efecto antitoxina | ***C. difficile***; resistencia creciente de *B. fragilis* |
| Nitroimidazoles | Metronidazol 500 mg cada 8 h (o 1-1.5 g cada 24 h) | Anaerobios, *C. difficile* (oral, segunda línea), amebas | Efecto tipo disulfiram con alcohol, sabor metálico, neuropatía periférica |
| Aminoglucósidos | Amikacina 15-20 mg/kg cada 24 h; gentamicina 5-7 mg/kg cada 24 h | Gramnegativos (sinergia) | Nefrotoxicidad y ototoxicidad; evitar uso prolongado |
| Fluoroquinolonas | Ciprofloxacino 400 mg cada 8-12 h; levofloxacino 750 mg cada 24 h | Gramnegativos, atípicos | QT largo, tendinopatía y rotura tendinosa, aneurisma aórtico, disglucemia, *C. difficile*, delirio; alta resistencia en México |
| Tetraciclinas y glicilciclinas | Doxiciclina; tigeciclina (100 mg carga, luego 50 mg cada 12 h) | Tigeciclina: amplio, incluido SARM y BLEE (no *Pseudomonas*) | Tigeciclina: náusea, mayor mortalidad en algunos análisis, pancreatitis |
| Polimixinas | Colistina, polimixina B | Gramnegativos multirresistentes | Nefrotoxicidad, neurotoxicidad |
| Nuevos betalactámicos | Ceftazidima-avibactam, ceftolozano-tazobactam, meropenem-vaborbactam | Gramnegativos resistentes (KPC, *Pseudomonas* MDR) | Uso restringido, guiado por infectología |
| Antifúngicos | Fluconazol 800 mg carga, luego 400 mg/día; equinocandinas: caspofungina 70 mg carga, luego 50 mg/día; anidulafungina 200 mg, luego 100 mg/día; micafungina 100 mg/día | *Candida* (equinocandina de elección en críticos e inestables) | Interacciones (azoles), hepatotoxicidad |

### Alergia a betalactámicos
- Hasta 10% de los pacientes dice ser alérgico a la penicilina, pero más de 90% tolera la penicilina tras evaluación.
- La reactividad cruzada penicilina-cefalosporinas depende de las **cadenas laterales** y es baja (alrededor de 1-2%); la **cefazolina** tiene una cadena lateral única y puede usarse incluso con antecedente de reacción no grave a penicilina.
- Evitar betalactámicos solo ante historia de anafilaxia grave, síndrome de Stevens-Johnson o necrólisis epidérmica tóxica; en esos casos, alternativas como clindamicina, vancomicina, aztreonam o fluoroquinolonas.
- Carbapenémicos: reactividad cruzada menor de 1%.

### Infección intraabdominal: esquemas empíricos
**Principio:** el antibiótico complementa al **control del foco** (drenaje, resección, cierre de la perforación), que es lo que realmente cura.

| Escenario | Opciones empíricas |
|---|---|
| **Comunitaria, leve a moderada, sin factores de riesgo de resistencia** | Ceftriaxona o cefotaxima **más metronidazol**; amoxicilina-clavulanato (según resistencia local); ertapenem si hay riesgo de BLEE |
| **Comunitaria grave (sepsis o choque) o con riesgo de resistencia** (antibióticos en los 90 días previos, institucionalizado, BLEE conocido) | Piperacilina-tazobactam; meropenem o imipenem si hay BLEE probable y choque |
| **Nosocomial o postoperatoria** | Piperacilina-tazobactam o carbapenémico (según flora local) ± vancomicina (enterococo, SARM) ± antifúngico |
| **Riesgo de *Candida*** (perforación gastroduodenal en paciente grave, peritonitis recurrente o terciaria, inmunosupresión, nutrición parenteral, cultivos positivos) | Agregar equinocandina en el paciente grave |

Evitar en México, como monoterapia empírica, la ampicilina-sulbactam y las fluoroquinolonas para *E. coli* por la alta resistencia, salvo que el antibiograma local lo permita.

### Duración
- **Infección intraabdominal con control adecuado del foco: unos 4 días** (ensayo STOP-IT, Sawyer *NEJM* 2015: 4 días fueron equivalentes a tratar hasta 2 días después de resolver la fiebre, la leucocitosis y el íleo).
- Apendicitis o colecistitis no complicadas, resueltas con cirugía: sin antibiótico posoperatorio o menos de 24 h.
- Si a los 4-7 días el paciente no mejora: **buscar un foco no controlado** (tomografía), no simplemente cambiar o prolongar el antibiótico.
- Bacteriemia por *S. aureus*: mínimo 14 días IV (más si es complicada); bacteriemia por gramnegativos: unos 7 días si el foco está controlado.
- Neumonía asociada a ventilación: 7 días.
- Fascitis necrosante: hasta que no se requieran desbridamientos y el paciente esté estable.

### Optimización del uso (*stewardship*)
- Tomar cultivos antes del antibiótico (sin retrasarlo en sepsis).
- Dar la primera dosis **en la primera hora** en choque séptico.
- Reevaluar a las 48-72 h: **desescalar** al espectro más reducido eficaz, pasar a vía oral cuando sea posible, fijar la duración desde el inicio.
- Procalcitonina para apoyar la suspensión.
- Evitar duplicar cobertura (por ejemplo, metronidazol con piperacilina-tazobactam o carbapenémico, que ya cubren anaerobios).

### Riesgos del uso de antimicrobianos
- **Resistencia** individual y colectiva.
- ***C. difficile*** (clindamicina, fluoroquinolonas, cefalosporinas y carbapenémicos son los de mayor riesgo).
- Toxicidad renal (vancomicina, aminoglucósidos, polimixinas; la combinación vancomicina con piperacilina-tazobactam aumenta la lesión renal), hepática, neurológica y hematológica.
- Alergia y anafilaxia.
- Interacciones (linezolid con ISRS, carbapenémicos con valproato, fluoroquinolonas y macrólidos con fármacos que prolongan el QT, metronidazol y fluconazol con warfarina).
- Infecciones fúngicas por alteración de la flora.

### Perlas de examen y errores frecuentes
- Betalactámicos: dependientes del tiempo; aminoglucósidos: de la concentración.
- No reducir la dosis de carga por insuficiencia renal en sepsis.
- Ertapenem no cubre *Pseudomonas*.
- Clindamicina: más riesgo de *C. difficile*; también efecto antitoxina.
- Infección intraabdominal con foco controlado: unos 4 días (STOP-IT).
- No sumar metronidazol a piperacilina-tazobactam o carbapenémico.
- Si no mejora, buscar el foco, no cambiar el antibiótico.
- Linezolid más ISRS: síndrome serotoninérgico.
- Cefazolina es segura en la mayoría de los alérgicos a penicilina sin anafilaxia.

### Referencias
Mazuski JE et al. *Surgical Infection Society revised guidelines on the management of intra-abdominal infection* (2017) · Sartelli M et al. *WSES guidelines for management of intra-abdominal infections* (2017) y actualización 2021 · Sawyer RG et al. STOP-IT, *NEJM* 2015;372:1996-2005 · Evans L et al. *Surviving Sepsis Campaign 2021* · Shenoy ES et al. *Evaluation and management of penicillin allergy*, JAMA 2019 · Rybak MJ et al. *Vancomycin therapeutic monitoring consensus* (2020) · PUCRA-UNAM, informes de resistencia antimicrobiana en México.
`),
  ],
  'ap-r1-choque': [
    sheet('choq-septico', '01', 'Choque séptico y sepsis quirúrgica', `
## Choque séptico y sepsis quirúrgica

### Definición y criterios Sepsis-3
El consenso **Sepsis-3** (2016) centró las definiciones en la disfunción orgánica y eliminó el término «sepsis grave»:
- **Sepsis:** disfunción orgánica potencialmente mortal por una respuesta desregulada del huésped a la infección, identificada por un **incremento agudo ≥ 2 puntos en la escala SOFA** respecto al basal (se asume basal de 0 sin disfunción previa conocida).
- **Choque séptico:** subconjunto con alteraciones circulatorias y metabólicas profundas, definido por necesidad de **vasopresores para mantener PAM ≥ 65 mmHg** más **lactato sérico > 2 mmol/L** (18 mg/dL) pese a reanimación hídrica adecuada.

La **Surviving Sepsis Campaign (SSC) 2021** recomienda **no usar qSOFA** (FR ≥ 22 rpm, PAS ≤ 100 mmHg, alteración mental) como herramienta única de tamizaje por su baja sensibilidad; prefiere sistemas de alerta temprana (NEWS, MEWS), SIRS y vigilancia clínica estrecha.

### Epidemiología y focos quirúrgicos frecuentes
La sepsis tiene una mortalidad global de 15-25%, que asciende a **40-50%** en choque séptico. En los servicios de Cirugía General del IMSS, la **sepsis abdominal** es la causa más habitual en urgencias y piso, seguida de infecciones necrosantes y complicaciones posoperatorias:
- **Peritonitis secundaria:** apendicitis perforada, úlcera péptica perforada, diverticulitis Hinchey III-IV, colecistitis perforada, isquemia mesentérica con necrosis y perforación traumática de víscera hueca.
- **Sepsis biliar:** colangitis aguda grave (Tokio TG18 grado III) con bacteriemia colangiovenosa por obstrucción bajo presión.
- **Complicaciones posoperatorias:** fuga anastomótica (días 5-7), abscesos residuales, colitis fulminante por *Clostridioides difficile* y bacteriemia por catéter central.
- **Tejidos blandos:** fascitis necrosante, gangrena de Fournier y pie diabético infectado grave.

### Fisiopatología
1. **Respuesta inflamatoria:** los **PAMPs** bacterianos y **DAMPs** tisulares activan receptores TLR en macrófagos, induciendo NF-κB, citocinas (**TNF-α, IL-1β, IL-6**) y complemento (C3a, C5a); en paralelo aparece una fase antiinflamatoria (IL-10, apoptosis linfocitaria) con inmunoparálisis secundaria.
2. **Endoteliopatía y fuga capilar:** la degradación del **glucocálix endotelial** aumenta la permeabilidad capilar, causando extravasación intersticial, hipovolemia relativa y edema tisular.
3. **Vasoplejía y microcirculación:** la iNOS, la apertura de canales de potasio dependientes de ATP y el déficit relativo de vasopresina desploman las resistencias vasculares sistémicas (RVS). Los cortocircuitos capilares explican que la ScvO₂ pueda lucir normal pese a hipoperfusión celular.
4. **Miocardiopatía séptica e hipoxia citopática:** hasta 40-50% desarrollan disfunción biventricular reversible; además, el daño mitocondrial impide usar el oxígeno disponible (**hipoxia citopática**), elevando el lactato.
5. **Coagulopatía inducida por sepsis:** la expresión de factor tisular, el consumo de proteína C/antitrombina y el PAI-1 generan microtrombosis diseminada que puede evolucionar a CID.

### Diagnóstico y escala SOFA
Sospechar sepsis ante taquicardia, taquipnea, alteración mental (signo temprano frecuente en ancianos), oliguria, fiebre o hipotermia, hiperglucemia de estrés o íleo persistente. En la fase temprana (choque caliente) las extremidades están tibias con presión de pulso amplia; al progresar aparece choque frío con piel moteada y llenado capilar prolongado.

| Sistema (parámetro) | 0 puntos | 1 punto | 2 puntos | 3 puntos | 4 puntos |
|---|---|---|---|---|---|
| **Respiratorio** (PaO₂/FiO₂, mmHg) | ≥ 400 | < 400 | < 300 | < 200 con soporte | < 100 con soporte |
| **Coagulación** (plaquetas × 10³/µL) | ≥ 150 | < 150 | < 100 | < 50 | < 20 |
| **Hepático** (bilirrubina, mg/dL) | < 1.2 | 1.2–1.9 | 2.0–5.9 | 6.0–11.9 | ≥ 12.0 |
| **Cardiovascular** (PAM o µg/kg/min) | PAM ≥ 70 | PAM < 70 | Dopamina ≤ 5 o dobutamina | Dopamina > 5, epi ≤ 0.1 o NE ≤ 0.1 | Dopamina > 15, epi > 0.1 o NE > 0.1 |
| **SNC** (Glasgow) | 15 | 13–14 | 10–12 | 6–9 | < 6 |
| **Renal** (creatinina mg/dL o diuresis) | < 1.2 | 1.2–1.9 | 2.0–3.4 | 3.5–4.9 o < 500 mL/día | ≥ 5.0 o < 200 mL/día |

**Estudios iniciales:** **lactato sérico** seriado cada 2-4 h; **dos juegos de hemocultivos** más cultivos del foco (líquido peritoneal, bilis, tejido) antes del antimicrobiano sin retrasarlo > 45 min; biometría, química sanguínea, PFH, coagulación y gasometría. **Imagen:** ultrasonido en colangitis/colecciones y **TC contrastada** en pacientes estables ante sospecha de fuga, absceso o isquemia; nunca retrasar laparotomía en peritonitis franca inestable.

### Reanimación inicial y paquete de la primera hora (SSC 2021)
El manejo integra tres pilares simultáneos: **reanimación hemodinámica**, **antimicrobianos precoces** y **control del foco**.

| Intervención | Meta recomendada (SSC 2021) | Consideraciones quirúrgicas |
|---|---|---|
| **Lactato y perfusión** | Lactato basal y seriado si > 2 mmol/L + **tiempo de llenado capilar** | Aclaramiento de lactato y llenado capilar < 3 s (ANDROMEDA-SHOCK) |
| **Cultivos** | Hemocultivos y muestras del foco antes de antibióticos | Tomar líquido peritoneal purulento o tejido profundo, no hisopo superficial |
| **Antibióticos empíricos** | **≤ 1 hora** en choque séptico o sepsis probable; **≤ 3 h** si sepsis posible sin choque | Cobertura de gramnegativos y anaerobios en abdomen; dosis de carga completa aun con LRA |
| **Fluidos IV** | **30 mL/kg de cristaloide balanceado** (Hartmann/Plasma-Lyte) en las primeras 3 h | Preferir balanceados sobre SS 0.9% (menos acidosis hiperclorémica); prohibidos almidones; albúmina si grandes volúmenes |
| **Respuesta a volumen** | Usar **medidas dinámicas** (elevación pasiva de piernas, VPP, VTI ecográfico) | La PVC aislada no predice respuesta; evitar sobrecarga que edematiza intestino y amenaza anastomosis |
| **Vasopresores** | Inicio precoz si persiste PAM < 65 mmHg | Norepinefrina por **vía periférica proximal segura** mientras se instala CVC |

### Soporte vasopresor, inotrópico y medidas de terapia intensiva
| Fármaco | Receptor principal | Dosis habitual IV | Papel en choque séptico (SSC 2021) |
|---|---|---|---|
| **Norepinefrina** | α1 potente > β1 | 0.05–1.0 µg/kg/min (PAM ≥ 65) | **Primera elección.** Restaura tono vascular con mínimo efecto taquicardizante |
| **Vasopresina** | Receptores V1 | 0.03 U/min (dosis fija) | **Segunda línea** al alcanzar NE 0.25–0.5 µg/kg/min; ahorra catecolaminas |
| **Epinefrina** | α1, β1, β2 | 0.05–0.5 µg/kg/min | Segunda o tercera línea; puede elevar lactato por estímulo β2 |
| **Dobutamina** | β1 > β2 | 2.5–20 µg/kg/min | Añadir a NE si hay **disfunción miocárdica** e hipoperfusión persistente con PAM adecuada |
| **Dopamina** | D1, β1, α1 | — | **No recomendada** salvo bradicardia sintomática seleccionada; más arritmias y mortalidad |

**Terapias adyuvantes:**
- **Corticoides:** **hidrocortisona 200 mg/día IV** (50 mg c/6 h o infusión) solo en choque refractario (NE ≥ 0.25 µg/kg/min por ≥ 4 h).
- **Ventilación protectora en SDRA:** volumen corriente **6 mL/kg de peso predicho**, presión meseta ≤ 30 cmH₂O y pronación temprana si PaO₂/FiO₂ < 150 mmHg.
- **Control glucémico y soporte:** insulina con meta **140-180 mg/dL**; transfundir eritrocitos solo con **Hb < 7 g/dL** (sin hemorragia activa ni isquemia); tromboprofilaxis (HBPM + mecánica); profilaxis de úlcera de estrés en pacientes con riesgo; bicarbonato solo si pH ≤ 7.2 con LRA AKIN 2-3.

### Control del foco quirúrgico
Ningún antibiótico sustituye el **control del foco**, que debe realizarse **lo más pronto posible** (idealmente en **6-12 horas**, e inmediato en fascitis necrosante, isquemia intestinal o peritonitis fecal):
- **Drenaje percutáneo guiado por imagen:** elección en abscesos intraabdominales delimitados sin peritonitis difusa.
- **Descompresión biliar:** CPRE urgente en colangitis grave; colecistostomía percutánea en colecistitis grado III no operable de inmediato.
- **Control de daños en sepsis abdominal:** ante inestabilidad extrema, acidosis, hipotermia o coagulopatía, realizar resección rápida sin anastomosis, lavado, cierre abdominal temporal con presión negativa (abdomen abierto), reanimación en UCI y reexploración en 24-48 h.
- **Retirar catéteres venosos** infectados en cuanto exista otro acceso.

### Seguimiento y desescalamiento
Monitorizar aclaramiento de lactato, llenado capilar, diuresis (> 0.5 mL/kg/h) y balance hídrico (buscando balance negativo al resolver el choque). Desescalar antibióticos con cultivos y completar ~**4 días** tras control exitoso del foco abdominal (STOP-IT), apoyándose en la procalcitonina. Si no mejora en 48-72 h, solicitar imagen para descartar **foco residual o fuga** antes de cambiar antibióticos empíricamente.

### Perlas de examen
- **Sepsis-3:** sepsis = infección + incremento agudo de **SOFA ≥ 2**; choque séptico = vasopresor para **PAM ≥ 65 mmHg** + **lactato > 2 mmol/L** pese a volumen adecuado.
- **SSC 2021:** el **qSOFA no debe usarse como herramienta única** de tamizaje de sepsis.
- **Antibióticos:** iniciar en la **primera hora** en choque séptico; tomar cultivos antes solo si no retrasa su administración.
- **Fluidos:** 30 mL/kg de **cristaloide balanceado** en las primeras 3 h; después guiar exclusivamente con variables dinámicas, nunca con PVC aislada.
- **Vasopresores:** **norepinefrina** es primera línea; **vasopresina** (0.03 U/min) segunda línea; **dobutamina** si hay disfunción miocárdica con hipoperfusión persistente; **hidrocortisona** 200 mg/día solo en choque refractario.
- En sepsis quirúrgica, el **control del foco** (drenaje, desbridamiento o resección) es obligatorio; ningún esquema antibiótico cura un absceso no drenado ni un intestino necrótico.
- El **tiempo de llenado capilar** cada 30 min tiene rendimiento comparable o superior al lactato para guiar la reanimación temprana (ANDROMEDA-SHOCK).

### Referencias
Evans L, Rhodes A, Alhazzani W et al. *Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021*, Intensive Care Med 2021;47:1181-1247 · Singer M et al. *The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)*, JAMA 2016;315:801-810 · Hernández G et al. ANDROMEDA-SHOCK, *JAMA* 2019 · Sartelli M et al. *WSES guidelines for management of intra-abdominal infections*, World J Emerg Surg 2021 · Sabiston, *Tratado de Cirugía*, 21.ª ed., cap. «Choque, electrolitos y líquidos» · Schwartz, *Principios de Cirugía*, 11.ª ed., cap. «Choque» · GPC CENETEC/IMSS de diagnóstico y tratamiento de sepsis grave y choque séptico en el adulto.
`),
    sheet('choq-hipovolemico', '02', 'Choque hipovolémico y hemorrágico', `
## Choque hipovolémico y hemorrágico

### Definición y etiología
El **choque hipovolémico** es un estado de hipoperfusión tisular aguda causado por la pérdida crítica de volumen intravascular, lo que reduce el retorno venoso, la precarga ventricular y el gasto cardiaco. En Cirugía General y Trauma es el tipo de choque más frecuente y se divide en dos grandes grupos:
- **Hemorrágico:** pérdida aguda de sangre total por trauma cerrado o penetrante, hemorragia de tubo digestivo alto o bajo, rotura de aneurisma de aorta abdominal, embarazo ectópico roto, hemorragia obstétrica o sangrado posoperatorio. Representa la **principal causa de muerte prevenible** en las primeras horas tras un traumatismo grave.
- **No hemorrágico:** pérdida de plasma o agua y electrolitos sin sangrado franco, como en quemaduras extensas, pancreatitis aguda grave, obstrucción intestinal con secuestro en tercer espacio, fístulas enterocutáneas de alto gasto, vómito incoercible o diarrea profusa.

Un principio fundamental de la **ATLS 10.ª edición** es que **choque no es sinónimo de hipotensión**: el organismo sano compensa pérdidas de hasta 30% del volumen circulante manteniendo cifras tensionales aparentemente normales mientras ya existe hipoperfusión esplácnica y acidosis metabólica oculta.

### Fisiopatología: compensación, diamante letal y coagulopatía del trauma
1. **Respuesta neurohumoral compensadora:** al disminuir la precarga y el volumen sistólico, los barorreceptores carotídeos y aórticos inhiben el tono vagal y disparan una descarga simpática intensa. La liberación de catecolaminas produce **taquicardia** (primer signo clínico habitual) y **vasoconstricción arteriolar** mediada por receptores α1 en piel, músculo, riñón y territorio esplácnico, redirigiendo el flujo hacia el corazón y el encéfalo. Simultáneamente se activan el eje renina-angiotensina-aldosterona y la ADH para retener sodio y agua, mientras la caída de la presión hidrostática capilar promueve el paso de líquido intersticial al plasma («autotransfusión»).
2. **Descompensación y metabolismo anaerobio:** cuando la pérdida supera la capacidad compensadora (usualmente > 30% de la volemia), desciende la presión arterial, se instala hipoperfusión generalizada y las células pasan a glucólisis anaerobia con generación de **lactato** y aumento del **déficit de base**. La falta de ATP deteriora la bomba Na⁺/K⁺-ATPasa, provoca edema celular, lesión endotelial y, finalmente, daño orgánico irreversible.
3. **Coagulopatía aguda inducida por trauma (TIC):** hasta 25-35% de los politraumatizados graves llegan a urgencias ya coagulopáticos antes de recibir líquidos. No se debe solo a dilución; la combinación de **hipoperfusión tisular y lesión endotelial** activa la vía de la proteína C, degrada el glucocálix (autoheparinización endógena), agota el fibrinógeno, genera disfunción plaquetaria y promueve **hiperfibrinólisis**.
4. **Del triángulo al diamante letal:** clásicamente se describió la **tríada letal** (**hipotermia**, **acidosis** y **coagulopatía**), que se retroalimentan entre sí (por debajo de 34 °C la actividad enzimática de los factores y la función plaquetaria caen drásticamente; un pH < 7.2 reduce en más de 50% la generación de trombina). Actualmente se reconoce el **diamante letal** al añadir la **hipocalcemia**, agravada por el citrato de los hemocomponentes, ya que el calcio ionizado (factor IV) es indispensable tanto para la coagulación como para la contractilidad miocárdica y el tono vascular.

### Clasificación ATLS del choque hemorrágico (10.ª edición)
El volumen sanguíneo normal de un adulto corresponde aproximadamente al **7% del peso corporal** (~70 mL/kg, es decir, ~5 L en un adulto de 70 kg). La ATLS 10.ª ed. incorporó el **déficit de base** como parámetro cuantitativo clave en la estadificación inicial:

| Parámetro | Clase I | Clase II (leve) | Clase III (moderado) | Clase IV (grave) |
|---|---|---|---|---|
| **Pérdida sanguínea (%)** | < 15% | 15–30% | 30–40% | > 40% |
| **Pérdida estimada (adulto 70 kg)** | < 750 mL | 750–1,500 mL | 1,500–2,000 mL | > 2,000 mL |
| **Frecuencia cardiaca** | Normal (< 100) | Normal o ↑ (100–120) | ↑ (120–140) | ↑↑ (> 140) |
| **Presión arterial sistólica** | Normal | Normal | ↓ (hipotensión) | ↓↓ |
| **Presión de pulso (PAS − PAD)** | Normal | ↓ (estrecha) | ↓ | ↓ |
| **Frecuencia respiratoria** | Normal (14–20) | Normal o ↑ (20–30) | ↑ (30–40) | ↑↑ (> 35) |
| **Gasto urinario (mL/h)** | ≥ 30 | 20–30 | 5–15 | Mínimo / anuria |
| **Estado mental (Glasgow)** | Normal / ansioso leve | Ansioso moderado | Ansioso / confuso | Confuso / letárgico |
| **Déficit de base (mEq/L)** | 0 a −2 | −2 a −6 | −6 a −10 | −10 o menor |
| **Necesidad de hemoderivados** | Vigilar | Posible | **Sí** | **Protocolo de transfusión masiva** |

**Trampas clínicas frecuentes en la valoración inicial:**
- **Adultos mayores y pacientes con betabloqueadores o marcapasos:** pueden no presentar taquicardia compensadora; una presión sistólica de 110 mmHg en un hipertenso crónico puede representar hipotensión grave.
- **Atletas y embarazadas:** los atletas tienen bradicardia basal (una FC de 95 lpm ya es taquicardia relativa); en el embarazo la hipervolemia fisiológica retrasa los signos maternos hasta pérdidas de 30-35%, cuando el feto ya sufre hipoperfusión severa.
- **Hemoglobina y hematocrito iniciales:** pueden ser completamente normales en la hemorragia aguda antes de que ocurra la redistribución de líquidos o la infusión de cristaloides; **nunca descartar sangrado activo por una Hb inicial normal**.

### Diagnóstico y búsqueda sistemática de focos de sangrado
En todo paciente inestable tras trauma o cirugía, el diagnóstico es fundamentalmente clínico y se apoya en el **índice de choque** (FC / PAS; normal 0.5-0.7; un valor **≥ 0.9-1.0** predice necesidad de transfusión masiva y mayor mortalidad), el **lactato sérico** y el **déficit de base**.

Para localizar la fuente oculta de hemorragia se aplica la regla de **«en el piso y cuatro más»**:
1. **Hemorragia externa:** cuero cabelludo, heridas vasculares de extremidades (revisar la escena y el sangrado previo al ingreso).
2. **Tórax:** hemotórax masivo (radiografía portátil de tórax, eFAST torácico).
3. **Abdomen:** lesiones de bazo, hígado o mesenterio (**eFAST** en el paciente inestable; tomografía con contraste solo si está hemodinámicamente estable).
4. **Pelvis y retroperitoneo:** fracturas pélvicas en libro abierto, lesión de vasos ilíacos o aorta (radiografía de pelvis; la faja pélvica debe colocarse a nivel de los trocánteres mayores ante inestabilidad mecánica).
5. **Huesos largos (fémur):** cada fractura cerrada de fémur puede secuestrar 1,000 a 1,500 mL de sangre.

En el **posoperatorio** de cirugía general, la taquicardia persistente, la oliguria y la caída del gasto por drenajes (o un drenaje obstruido con distensión abdominal creciente) obligan a descartar hemoperitoneo de inmediato mediante exploración clínica, ultrasonido y reintervención si persiste la inestabilidad.

### Reanimación de control de daños (DCR)
El paradigma moderno sustituyó las grandes cargas de cristaloides por la **reanimación de control de daños**, orientada a detener la hemorragia y prevenir el diamante letal desde el minuto cero:
1. **Control inmediato de la hemorragia (XABCDE):** presión directa, torniquete en sangrado exanguinante de extremidades (anotar hora exacta), empaquetamiento hemostático en zonas de unión, faja pélvica en fractura pélvica inestable y control quirúrgico o angioembolización urgente. En centros capacitados, la oclusión endovascular con balón de la aorta (**REBOA**) puede servir de puente en hemorragia no compresible del torso.
2. **Restricción de cristaloides:** la ATLS 10.ª ed. redujo el bolo inicial en adultos de 2 litros a **máximo 1 litro de cristaloide balanceado tibio** (39 °C). Infundir litros de solución salina diluye los factores de coagulación, desprende el coágulo primario, induce acidosis hiperclorémica y agrava el edema tisular.
3. **Hipotensión permisiva:** en hemorragia no controlada sin traumatismo craneoencefálico (TCE) ni lesión medular, mantener una **PAS meta de 80-90 mmHg** (o PAM 50-65 mmHg) con pulso radial palpable hasta lograr el control quirúrgico definitivo. Si coexiste **TCE grave**, la hipotensión permisiva está **contraindicada** y debe mantenerse PAS ≥ 100-110 mmHg para preservar la presión de perfusión cerebral.
4. **Reanimación hemostática (protocolo de transfusión masiva):** activar ante signos de clase III-IV, puntaje **ABC ≥ 2** (trauma penetrante, PAS ≤ 90, FC ≥ 120, FAST positivo) o falta de respuesta al bolo inicial. Administrar hemoderivados en relación balanceada **1:1:1** (concentrado eritrocitario : plasma fresco congelado : plaquetas, respaldado por el ensayo **PROPPR**) o sangre total con bajo título de anticuerpos tipo O si está disponible. Idealmente guiar ajustes posteriores con **tromboelastografía (TEG)** o **ROTEM**.
5. **Ácido tranexámico (TXA):** antifibrinolítico que reduce la mortalidad por sangrado (ensayo **CRASH-2**). Dosis: **1 g IV en 10 minutos** seguido de **1 g IV en infusión durante 8 horas**, administrado idealmente en la primera hora y **siempre dentro de las primeras 3 horas** del trauma (después de 3 horas puede aumentar la mortalidad por sangrado).
6. **Calcio y normotermia:** administrar **1 g de cloruro de calcio** o **3 g de gluconato de calcio** tras las primeras unidades (y cada 4 unidades de hemoderivados) para mantener calcio ionizado > 1.1 mmol/L; calentar soluciones, cubrir al paciente y mantener el quirófano tibio.

### Respuesta a la reanimación y cirugía de control de daños
| Patrón de respuesta | Evolución tras bolo inicial | Pérdida estimada | Conducta quirúrgica |
|---|---|---|---|
| **Respondedor rápido** | Signos vitales se normalizan y se mantienen estables | Mínima (< 15%) | Descartar lesiones ocultas; vigilancia y reevaluación seriada |
| **Respondedor transitorio** | Mejora inicial, pero vuelve a presentar taquicardia e hipotensión | Moderada y activa (15–40%) | **Sangrado activo continuo:** iniciar hemoderivados y preparar control quirúrgico o angiográfico urgente |
| **No respondedor** | Persiste inestable pese a volumen y sangre | Grave (> 40%) o choque no hemorrágico | Descartar causa obstructiva (neumotórax/taponamiento) y llevar de inmediato a **quirófano** |

Cuando el paciente llega al quirófano en agotamiento fisiológico (**pH < 7.2**, **temperatura < 34-35 °C**, **coagulopatía clínica difusa**, necesidad de > 10 concentrados eritrocitarios o lesión compleja que tomaría > 90 minutos), se indica la **cirugía de control de daños (DCS)** en tres fases:
- **Fase I (laparotomía abreviada):** controlar la hemorragia (empaquetamiento hepático/pélvico, ligadura o derivación vascular temporal con *shunt*) y controlar la contaminación (cierre rápido de perforaciones o resección intestinal sin anastomosis), seguido de cierre abdominal temporal (bolsa de Bogotá o sistema de presión negativa).
- **Fase II (UCI):** corregir hipotermia, acidosis, hipocalcemia y coagulopatía durante 24-48 horas.
- **Fase III (reintervención programada):** retiro de compresas, reconstrucción definitiva (anastomosis o estomas) y cierre de pared abdominal cuando el edema lo permita.

### Particularidades del choque hipovolémico no hemorrágico
En obstrucción intestinal, pancreatitis aguda grave o fístulas de alto gasto, la pérdida es de líquido extracelular y electrolitos. La reposición se hace con **cristaloides balanceados** guiada por gasto urinario (0.5-1 mL/kg/h), lactato, hematocrito y balance electrolítico. En la **pancreatitis aguda**, la reanimación moderada (1.5 mL/kg/h con bolos solo si hay hipovolemia, ensayo WATERFALL) reduce la sobrecarga hídrica frente a esquemas agresivos antiguos. En quemaduras > 20% de superficie corporal se calcula el aporte inicial con fórmulas como Parkland modificada (2-4 mL/kg/% SCQ de Hartmann en 24 h, mitad en las primeras 8 h) ajustando estrictamente a la diuresis.

### Perlas de examen
- La **taquicardia** y el **estrechamiento de la presión de pulso** preceden a la hipotensión; la caída de la PAS aparece clásicamente en la **clase III** (30-40% de pérdida).
- La **ATLS 10.ª ed.** añadió el **déficit de base** a la tabla de choque hemorrágico y redujo el bolo inicial de cristaloides de 2 L a **1 litro**.
- **Nunca confiar en una hemoglobina inicial normal** para descartar hemorragia aguda masiva.
- **Ácido tranexámico (CRASH-2):** 1 g IV en 10 min + 1 g en 8 h, solo dentro de las **primeras 3 horas** del trauma.
- **Hipotensión permisiva** (PAS 80-90 mmHg) está indicada en hemorragia no controlada, pero **contraindicada en TCE grave**.
- **Diamante letal:** hipotermia + acidosis + coagulopatía + **hipocalcemia**; corregir el calcio ionizado desde las primeras unidades transfundidas.
- Un **respondedor transitorio** tiene sangrado activo no controlado: requiere hemoderivados y resolución quirúrgica o endovascular, no más litros de solución salina.

### Referencias
American College of Surgeons. *ATLS: Advanced Trauma Life Support*, 10.ª ed., 2018 · Holcomb JB et al. PROPPR Trial, *JAMA* 2015;313:471-482 · CRASH-2 Trial Collaborators, *Lancet* 2010;376:23-32 · Rossaint R et al. *European guideline on management of major bleeding and coagulopathy following trauma*, Crit Care 2023 · Sabiston, *Tratado de Cirugía*, 21.ª ed., cap. «Choque, electrolitos y líquidos» y «Trauma agudo» · Schwartz, *Principios de Cirugía*, 11.ª ed., cap. «Choque» · GPC CENETEC/IMSS de manejo inicial del paciente con trauma grave y hemorragia.
`),
    sheet('choq-cardio-neuro', '03', 'Choque cardiogénico, obstructivo y neurogénico', `
## Choque cardiogénico, obstructivo y neurogénico

### Diagnóstico diferencial hemodinámico de los estados de choque
En la guardia de Cirugía General, atribuir toda hipotensión a hipovolemia o sepsis es un error potencialmente mortal. Reconocer el perfil hemodinámico permite identificar rápidamente un fallo de bomba, una obstrucción mecánica tratable en segundos o una lesión medular alta:

| Tipo de choque | Gasto cardiaco (GC / IC) | Precarga (PVC / PCP) | Resistencias vasculares (RVS) | Saturación venosa (SvO₂) | Hallazgo clínico distintivo |
|---|---|---|---|---|---|
| **Hipovolémico** | ↓↓ | ↓↓ | ↑↑ | ↓↓ | Piel fría, pálida, venas yugulares colapsadas, taquicardia |
| **Séptico (distributivo)** | ↑ temprano / ↓ tardío | ↓ o normal | ↓↓ | ↑ o normal (↓ si hipovolémico) | Foco infeccioso, fiebre/hipotermia, presión de pulso amplia inicial |
| **Cardiogénico** | ↓↓ | ↑↑ (PCP > 15–18) | ↑↑ | ↓↓ | Ingurgitación yugular, estertores, S3, extremidades frías y húmedas |
| **Obstructivo** | ↓↓ | ↑↑ (PVC alta) | ↑↑ | ↓↓ | Yugulares ingurgitadas **sin** edema pulmonar; asimetría torácica o ruidos velados |
| **Neurogénico** | ↓ o normal | ↓ | ↓↓ | Normal o ↑ | Hipotensión con **bradicardia paradójica** y piel tibia/seca por debajo de la lesión |

### Choque cardiogénico
#### Definición y fisiopatología
Es el estado de hipoperfusión orgánica derivado de un **fallo primario de la bomba cardiaca** pese a un volumen intravascular adecuado. Hemodinámicamente se caracteriza por **PAS < 90 mmHg** durante más de 30 minutos (o necesidad de soporte farmacológico/mecánico para mantenerla), **índice cardiaco < 2.2 L/min/m²** y presión capilar pulmonar en cuña **(PCP) > 15-18 mmHg**, acompañados de signos clínicos o bioquímicos de hipoperfusión (oliguria < 30 mL/h, lactato > 2 mmol/L, piel fría y moteada, alteración del estado mental).

La caída del volumen sistólico desencadena vasoconstricción refleja intensa que **aumenta la poscarga**, eleva el consumo miocárdico de oxígeno y reduce la perfusión coronaria diastólica, perpetuando un círculo vicioso de isquemia progresiva. La clasificación **SCAI** estadifica su gravedad en cinco etapas: **A** (en riesgo), **B** (inicial, hipotensión sin hipoperfusión), **C** (clásico, hipoperfusión que requiere soporte), **D** (en deterioro) y **E** (extremo, colapso refractario o paro).

#### Etiología en el paciente quirúrgico
- **Infarto agudo de miocardio (IAM) perioperatorio:** causa más frecuente (~80% de los casos; generalmente compromiso > 40% de la masa del ventrículo izquierdo o complicaciones mecánicas como rotura de músculo papilar, pared libre o tabique interventricular). En el posoperado suele cursar **sin dolor torácico típico** por efecto de analgésicos y anestesia, manifestándose como hipotensión, disnea o arritmia súbita.
- **Trauma cardiaco cerrado (contusión miocárdica):** sospechar ante trauma torácico anterior de alta energía (impacto contra volante) con arritmias nuevas, elevación de troponina o disfunción ventricular en ecocardiograma.
- **Arritmias graves** (taquicardia ventricular, fibrilación auricular con respuesta ventricular rápida, bloqueo AV completo), descompensación de insuficiencia cardiaca crónica por sobrecarga hídrica posoperatoria, taponamiento posquirúrgico o miocardiopatía por estrés (Takotsubo).

#### Diagnóstico y tratamiento
Solicitar de inmediato **electrocardiograma de 12 derivaciones**, troponina ultrasensible seriada, radiografía de tórax, gasometría con lactato y **ecocardiograma transtorácico urgente** (evalúa función biventricular, motilidad regional, válvulas y descarta causas obstructivas).

El manejo prioriza corregir la causa y optimizar el gasto cardiaco sin sobrecargar el ventrículo:
1. **Reperfusión coronaria urgente:** en IAM con choque cardiogénico, la intervención coronaria percutánea (ICP) primaria temprana reduce la mortalidad (ensayo SHOCK); la cirugía de revascularización se reserva para anatomía no apta para ICP o complicaciones mecánicas.
2. **Fluidos con extrema cautela:** si no hay congestión pulmonar franca (por ejemplo, infarto del ventrículo derecho), administrar pequeños retos controlados (250 mL) vigilando saturación y líneas B pulmonares.
3. **Soporte vasopresor e inotrópico:** iniciar **norepinefrina** como vasopresor de primera línea para mantener **PAM ≥ 65 mmHg** (el ensayo SOAP II mostró menos arritmias y menor mortalidad frente a dopamina en choque cardiogénico). Una vez asegurada la presión de perfusión, añadir un inotrópico como **dobutamina** (2.5-15 µg/kg/min) o **milrinona** (inhibidor de fosfodiesterasa-3; útil si hay hipertensión pulmonar o betabloqueo, pero causa mayor vasodilatación e hipotensión). Evitar betabloqueadores e IECA durante la fase aguda.
4. **Soporte circulatorio mecánico:** en pacientes en estadio SCAI D-E refractarios, considerar balón intraaórtico de contrapulsación (útil sobre todo en complicaciones mecánicas), bomba de flujo axial (Impella) u oxigenación por membrana extracorpórea venoarterial (**ECMO-VA**) como puente a recuperación o intervención definitiva.

### Choque obstructivo
Ocurre por un **impedimento mecánico agudo** al llenado ventricular o al vaciamiento cardiaco. Su importancia quirúrgica es máxima porque **no responde a vasopresores ni a volúmenes solos**, pero se revierte de forma espectacular al eliminar la obstrucción.

#### 1. Neumotórax a tensión
El aire entra al espacio pleural por un mecanismo valvular unidireccional, colapsa el pulmón ipsilateral, desplaza el mediastino hacia el lado opuesto y **colapsa las venas cavas**, aboliendo el retorno venoso.
- **Clínica:** disnea intensa, taquicardia, hipotensión progresiva, ingurgitación yugular, ausencia de murmullo vesicular e hiperresonancia ipsilateral; la desviación traqueal y el enfisema subcutáneo son signos tardíos. En el paciente intubado se manifiesta por aumento súbito de la presión pico en la vía aérea y caída abrupta de la tensión arterial.
- **Manejo:** el diagnóstico es **estrictamente clínico**; **nunca solicitar radiografía de tórax** antes de descomprimir. Realizar **descompresión inmediata con aguja o toracostomía digital** en el **5.º espacio intercostal, línea axilar anterior o media** en adultos (actualización ATLS 10.ª ed., por menor grosor de pared torácica que el clásico 2.º EIC línea medioclavicular, que sigue aceptándose en niños), seguida inmediatamente de la colocación definitiva de una **sonda endopleural** conectada a sello de agua.

#### 2. Taponamiento cardiaco
La acumulación rápida de sangre o líquido en el saco pericárdico rígido (bastan **150-200 mL agudos** en trauma penetrante torácico en la «caja cardiaca») iguala las presiones intracavitarias e impide el llenado diastólico ventricular.
- **Clínica:** **tríada de Beck** (hipotensión, ingurgitación yugular y ruidos cardiacos velados; presente completa en menos de 40% de los casos), **pulso paradójico** (caída de la PAS > 10 mmHg durante la inspiración), signo de Kussmaul y alternancia eléctrica o complejos QRS de bajo voltaje en el ECG.
- **Diagnóstico y manejo:** el **eFAST (ventana subxifoidea o paraesternal)** identifica líquido pericárdico y colapso diastólico de la aurícula o ventrículo derechos. En trauma penetrante, el tratamiento definitivo es quirúrgico (**esternotomía media o toracotomía anterolateral izquierda**, o ventana pericárdica subxifoidea en casos dudosos estables). La **pericardiocentesis guiada por ultrasonido** solo se usa como medida transitoria de rescate si no existe quirófano inmediato, pues la sangre suele estar coagulada. Administrar un bolo moderado de cristaloides para sostener la precarga y evitar la intubación prematura antes de estar listos para abrir el tórax (la presión positiva torácica colapsa aún más el retorno venoso).

#### 3. Tromboembolia pulmonar (TEP) masiva y otras causas obstructivas
En el posoperado encamado o paciente oncológico, un émbolo en silla de montar obstruye el lecho vascular pulmonar, dispara la resistencia vascular pulmonar y provoca **falla aguda del ventrículo derecho**, que abomba el tabique hacia el ventrículo izquierdo reduciendo su llenado.
- **Clínica y diagnóstico:** choque súbito, hipoxemia refractaria, taquicardia, ingurgitación yugular y síncope. Si el paciente está demasiado inestable para **angio-TC pulmonar**, el ecocardiograma a la cabecera muestra dilatación del VD, movimiento septal paradójico y **signo de McConnell** (acinesia de la pared libre del VD con preservación apical).
- **Manejo:** oxígeno, evitar sobrecarga de volumen (empeora la distensión del VD), norepinefrina para mantener perfusión coronaria del VD, **anticoagulación inmediata** y reperfusión urgente: **trombólisis sistémica** (alteplasa) si no existe contraindicación quirúrgica absoluta, o **embolectomía dirigida por catéter o quirúrgica** en pacientes con cirugía mayor reciente o alto riesgo hemorrágico.
- **Otras causas quirúrgicas de choque obstructivo:** el **síndrome compartimental abdominal** (presión intraabdominal > 20 mmHg con nueva disfunción orgánica que comprime la vena cava inferior, tratado con laparotomía descompresiva) y el **auto-PEEP** excesivo en pacientes ventilados con EPOC o asma (desconectar brevemente del ventilador para permitir vaciamiento espiratorio).

### Choque neurogénico y choque medular
El **choque neurogénico** es un choque distributivo provocado por la interrupción aguda de las vías simpáticas descendentes tras una **lesión medular cervical o torácica alta (por arriba de T6)**, o bien tras un bloqueo neuroaxial extenso. La pérdida del tono vasomotor produce vasodilatación venosa y arterial, mientras el **tono parasimpático vagal sin oposición** (nervio vago intacto por ser par craneal) impide la taquicardia compensadora cuando se lesionan las fibras cardioaceleradoras (T1-T4).

Es obligatorio diferenciar dos entidades frecuentemente confundidas en exámenes y guardias:

| Característica | Choque neurogénico | Choque medular (espinal) |
|---|---|---|
| **Naturaleza** | **Hemodinámico** (disautonomía cardiovascular) | **Neurológico** (fenómeno electrofisiológico medular) |
| **Nivel típico** | Lesión cervical o torácica alta (**arriba de T6**) | Cualquier nivel de lesión medular completa o grave |
| **Manifestaciones** | Hipotensión, **bradicardia paradójica**, piel tibia y seca debajo de la lesión, hipotermia por poiquilotermia | Parálisis flácida, **arreflexia**, pérdida sensitiva, íleo, retención urinaria, priapismo |
| **Evolución / resolución** | Horas a semanas (suele mejorar en 1-6 semanas) | Días a semanas; su fin se marca por el **retorno del reflejo bulbocavernoso** y aparición de espasticidad |

#### Abordaje diagnóstico y terapéutico del choque neurogénico
En el politraumatizado, el choque neurogénico es siempre un **diagnóstico de exclusión**: primero debe descartarse hemorragia oculta (eFAST, tórax, pelvis, abdomen), ya que la lesión medular puede enmascarar el dolor abdominal y la taquicardia.
1. **Inmovilización y vía aérea:** restricción de la movilidad cervical; vigilar insuficiencia respiratoria en lesiones por arriba de C5 (compromiso del nervio frénico, C3-C5).
2. **Fluidos con moderación:** iniciar cristaloides balanceados (1-2 L) para llenar el lecho vascular dilatado, evitando sobrecarga que precipite edema pulmonar neurogénico.
3. **Vasopresores y control de frecuencia:** si persiste hipotensión, iniciar vasopresor con actividad α y β (**norepinefrina** de primera elección en lesiones cervicales/torácicas altas; **fenilefrina** solo si la lesión es baja sin bradicardia, pues su efecto α puro empeora la bradicardia refleja). Para bradicardia sintomática o pausas sinusales: **atropina** IV (0.5-1 mg) o marcapasos transcutáneo en casos refractarios.
4. **Meta de presión de perfusión medular:** las guías neuroquirúrgicas (CNS/AANS) recomiendan mantener una **PAM de 85-90 mmHg durante los primeros 5 a 7 días** para limitar la isquemia medular secundaria.
5. **Descompresión y cuidados generales:** interconsulta urgente a neurocirugía/columna para estabilización y descompresión temprana (< 24 h); **no se recomienda metilprednisolona a dosis altas de rutina** (ATLS 10.ª ed.) por el incremento de infecciones y sangrado digestivo sin beneficio neurológico concluyente. Instalar sonda vesical, mantener normotermia e iniciar tromboprofilaxis mecánica y farmacológica temprana (alto riesgo de TVP/TEP).

### Evaluación a la cabecera con ultrasonido: protocolo RUSH
Ante un choque indiferenciado en urgencias o piso, el protocolo ecográfico **RUSH** (*Rapid Ultrasound in Shock*) orienta la etiología en menos de 3 minutos evaluando tres componentes:
- **La bomba (corazón):** derrame pericárdico y colapso del VD (taponamiento), dilatación del VD (TEP), contractilidad global del VI (cardiogénico vs hiperdinámico en hipovolemia/sepsis).
- **El tanque (volumen y cavidades):** diámetro y colapsabilidad de la vena cava inferior, eFAST abdominal/pleural (sangre o ascitis), líneas A/B y deslizamiento pulmonar (descartar neumotórax o edema pulmonar).
- **Las tuberías (grandes vasos):** aorta abdominal (aneurisma roto o disección) y compresibilidad venosa femoral/poplítea (trombosis venosa profunda).

### Perlas de examen
- **Choque cardiogénico:** índice cardiaco **< 2.2 L/min/m²** con **PCP > 15-18 mmHg**; el vasopresor de primera elección es **norepinefrina** (no dopamina) y la prioridad en IAM es la **reperfusión urgente**.
- **Neumotórax a tensión:** diagnóstico 100% **clínico**; descomprimir de inmediato en el **5.º EIC línea axilar anterior/media** (adultos, ATLS 10.ª ed.) antes de cualquier radiografía.
- **Taponamiento cardiaco:** tríada de Beck (hipotensión, ingurgitación yugular, ruidos velados) y pulso paradójico; en trauma penetrante el tratamiento definitivo es **quirúrgico**, no la pericardiocentesis aislada.
- **TEP masiva en posoperado reciente:** cuando la trombólisis sistémica está contraindicada por cirugía mayor reciente, considerar **embolectomía por catéter o quirúrgica**.
- **Choque neurogénico vs choque medular:** el neurogénico es hemodinámico (**hipotensión + bradicardia + piel tibia** en lesión arriba de T6); el medular es neurológico (flaccidez y arreflexia que termina al regresar el **reflejo bulbocavernoso**).
- En choque neurogénico, siempre **descartar primero hemorragia oculta**; la meta hemodinámica es **PAM 85-90 mmHg por 5-7 días** y **no** se indica metilprednisolona rutinaria.

### Referencias
American College of Surgeons. *ATLS: Advanced Trauma Life Support*, 10.ª ed., 2018 · Van Diepen S et al. *Contemporary Management of Cardiogenic Shock*, Circulation 2017 · Konstantinides SV et al. *ESC Guidelines for Acute Pulmonary Embolism*, Eur Heart J 2019 · Walters BC et al. *Guidelines for the Management of Acute Cervical Spine and Spinal Cord Injuries*, Neurosurgery 2013 · De Backer D et al. SOAP II Trial, *NEJM* 2010 · Sabiston, *Tratado de Cirugía*, 21.ª ed., cap. «Choque, electrolitos y líquidos» · Schwartz, *Principios de Cirugía*, 11.ª ed., cap. «Choque».
`),
  ],
  'ap-r1-nutricion': [
    sheet('nut-valoracion', '01', 'Desnutrición, valoración nutricional e indicaciones de soporte', `
## Desnutrición, valoración nutricional e indicaciones de soporte

### Definición e importancia quirúrgica
La **desnutrición relacionada con la enfermedad** es un estado agudo o crónico de desequilibrio entre el aporte y los requerimientos energéticos y proteicos, con frecuencia potenciado por inflamación sistémica, que produce alteraciones mensurables en la composición corporal (pérdida de masa magra y **sarcopenia**), deterioro funcional y peores desenlaces clínicos. En Cirugía General no constituye un problema secundario: es un **factor de riesgo independiente** de infección del sitio quirúrgico, dehiscencia y fuga de anastomosis digestivas, neumonía nosocomial, dependencia prolongada de ventilación mecánica, úlceras por presión, reingresos y mortalidad hospitalaria.

### Epidemiología
Entre **30 y 50%** de los pacientes ingresados a un servicio de cirugía presentan algún grado de desnutrición o riesgo nutricional al momento de la admisión, proporción que supera **60 a 80%** en neoplasias del tubo digestivo alto (esófago, estómago, páncreas), enfermedad inflamatoria intestinal y fístulas enterocutáneas. Además, una fracción importante de pacientes que ingresan eutróficos se desnutren durante la hospitalización por ayunos repetidos para estudios, íleo, complicaciones infecciosas y subestimación de la ingesta real.

### Fisiopatología: ayuno simple frente a estrés metabólico
Comprender la diferencia metabólica entre el ayuno no complicado y la agresión quirúrgica o séptica explica por qué el paciente quirúrgico pierde masa muscular con tanta rapidez:

| Característica | Ayuno simple (sin estrés) | Estrés quirúrgico / sepsis / trauma |
|---|---|---|
| **Gasto energético basal** | Disminuye (ahorro adaptativo) | Aumenta (hipermetabolismo, +10 a +50% o más) |
| **Hormonas predominantes** | ↓ Insulina, ↑ glucagón leve | ↑↑ Cortisol, catecolaminas, glucagón, citocinas (IL-1, IL-6, TNF-α) |
| **Metabolismo de carbohidratos** | Glucogenólisis (agotada en ~24 h), luego ↓ gluconeogénesis | **Resistencia a la insulina**, hiperglucemia de estrés y gluconeogénesis sostenida |
| **Metabolismo lipídico** | Lipólisis con **cetogénesis intensa** (cerebro usa cuerpos cetónicos) | Lipólisis aumentada, pero cetogénesis inhibida; oxidación parcial de grasas |
| **Catabolismo proteico** | Disminuye progresivamente (ahorro proteico adaptativo) | **Proteólisis muscular acelerada** (balance nitrogenado muy negativo) que no se suprime del todo con glucosa sola |

El agotamiento de la masa proteica compromete de manera directa la proliferación de fibroblastos y la síntesis de colágeno en heridas y anastomosis, debilita la musculatura diafragmática (dificultando la extubación) y deteriora la inmunidad celular (linfopenia) y humoral. De forma paralela, la falta prolongada de nutrientes en la luz intestinal provoca atrofia de las vellosidades y debilitamiento de la barrera mucosa.

### Tamizaje y diagnóstico nutricional
Las guías **ESPEN 2021** y **ASPEN** distinguen dos pasos secuenciales que deben realizarse en todo paciente quirúrgico durante las primeras 24-48 horas del ingreso: **tamizaje** (identificar riesgo) y **evaluación/diagnóstico** (confirmar desnutrición y graduar su gravedad).

1. **NRS-2002 (*Nutritional Risk Screening 2002*):** es la herramienta de tamizaje de elección en pacientes hospitalizados y quirúrgicos según ESPEN. Evalúa el deterioro del estado nutricional (0-3 puntos, según pérdida de peso, IMC e ingesta) más la gravedad de la enfermedad o agresión quirúrgica (0-3 puntos; cirugía abdominal mayor suma 2 puntos, paciente en UCI con APACHE > 10 suma 3 puntos), añadiendo **1 punto si la edad es ≥ 70 años**. Un puntaje **≥ 3** indica riesgo nutricional y exige plan nutricional estructurado; un puntaje **≥ 5** identifica riesgo nutricional grave.
2. **Valoración Global Subjetiva (SGA):** integra historia clínica (cambio ponderal, ingesta, síntomas gastrointestinales, capacidad funcional) y exploración física (pérdida de grasa subcutánea, atrofia muscular en temporales/cuádriceps/interóseos, edema/ascitis) para clasificar en **A** (bien nutrido), **B** (desnutrición moderada o sospechada) y **C** (desnutrición grave).
3. **Criterios diagnósticos GLIM (2019):** estándar internacional vigente para diagnosticar desnutrición en adultos. Exige al menos **un criterio fenotípico** y **un criterio etiológico**:

| Dimensión GLIM | Criterios | Desnutrición moderada (estadio 1) | Desnutrición grave (estadio 2) |
|---|---|---|---|
| **Fenotípico 1: Pérdida de peso involuntaria** | > 5% en los últimos 6 meses o > 10% en > 6 meses | 5–10% en 6 meses o 10–20% en > 6 meses | **> 10% en 6 meses** o **> 20% en > 6 meses** |
| **Fenotípico 2: IMC bajo (kg/m²)** | < 20 (< 70 años) o < 22 (≥ 70 años) | < 20 (< 70 años) o < 22 (≥ 70 años) | **< 18.5 (< 70 años)** o **< 20 (≥ 70 años)** |
| **Fenotípico 3: Masa muscular reducida** | Validada por TC (L3), DEXA, bioimpedancia o antropometría/exploración | Déficit leve a moderado | Déficit grave |
| **Etiológico** | Ingesta ≤ 50% por > 1 semana, malabsorción o **carga inflamatoria/enfermedad** aguda o crónica | Requerido al menos uno | Requerido al menos uno |

### Evaluación bioquímica, funcional y la trampa de la albúmina
Uno de los errores más penalizados en exámenes actuales de residencia y en el pase de visita es diagnosticar desnutrición exclusivamente por una albúmina baja. Las proteínas viscerales son **reactantes de fase aguda negativos**: durante la inflamación (IL-6), el hígado prioriza la síntesis de proteína C reactiva (PCR) y fibrinógeno, disminuye la producción de albúmina y la fuga capilar la redistribuye al intersticio.

| Marcador | Vida media | Utilidad clínica real en Cirugía General | Limitaciones principales |
|---|---|---|---|
| **Albúmina** | ~20 días | **Excelente predictor de riesgo quirúrgico** (morbimortalidad y fuga si < 3.0 g/dL) | No mide ingesta reciente ni respuesta nutricional aguda; baja por inflamación, dilución, cirrosis o síndrome nefrótico |
| **Transferrina** | 8–10 días | Marcador intermedio histórico | Alterada por deficiencia de hierro (sube), inflamación y hepatopatía |
| **Prealbúmina (transtiretina)** | 2–3 días | Puede apoyar el seguimiento de respuesta nutricional **solo si la PCR está normal o en descenso** | Cae bruscamente con inflamación/sepsis; se eleva falsamente en insuficiencia renal |
| **Proteína fijadora de retinol** | ~12 horas | Uso principalmente de investigación | Muy dependiente de función renal y niveles de vitamina A |
| **Balance nitrogenado** | 24 horas | Evalúa anabolismo vs catabolismo: BN = (Proteína ingerida g / 6.25) − (N ureico urinario 24 h + 4 g) | Difícil en insuficiencia renal o pérdidas extrarrenales masivas (fístulas, abdomen abierto) |
| **Dinamometría / TC L3** | Dinámico | Mide fuerza muscular (sarcopenia funcional) y área de músculo esquelético en tomografía oncológica | Requiere equipo (dinamómetro) o software de segmentación de imagen |

### Cálculo de requerimientos energéticos y proteicos
El **estándar de oro** para medir el gasto energético en el paciente crítico o complejo es la **calorimetría indirecta**, que además proporciona el **cociente respiratorio** (RQ = VCO₂ / VO₂): 1.0 para oxidación pura de carbohidratos, 0.8 para proteínas y 0.7 para lípidos; un **RQ > 1.0** indica lipogénesis por **sobrealimentación**, con producción excesiva de CO₂ que dificulta el destete del ventilador.

Cuando no se dispone de calorimetría indirecta, las guías ESPEN y ASPEN recomiendan fórmulas predictivas simples basadas en peso corporal (peso actual en eutróficos o peso ideal/ajustado en obesidad):

| Escenario clínico | Energía (kcal/kg/día) | Proteína (g/kg/día) | Consideraciones clave |
|---|---|---|---|
| **Cirugía electiva / hospitalizado estable** | 25–30 | 1.2–1.5 | Cubrir déficit previo sin sobrealimentar |
| **Paciente crítico / sepsis / politrauma (fase aguda)** | 20–25 (avanzar gradualmente) | 1.3–1.5 (hasta 2.0 en pérdidas altas) | Evitar aporte calórico pleno en los primeros 2–3 días de choque inestable |
| **Abdomen abierto / fístula de alto gasto / gran quemado** | 25–35 (individualizar) | 1.5–2.0 (añadir ~15–30 g proteína por cada litro de exudado abdominal) | Reponer zinc, vitamina C y electrolitos perdidos |
| **Obesidad (IMC 30–50 kg/m²)** | 11–14 kcal/kg peso actual (o 22–25 peso ideal) | 2.0–2.5 g/kg **peso ideal** | Nutrición hipocalórica e hiperproteica para preservar masa magra |
| **Lesión renal aguda sin diálisis vs con TRR** | 25–30 | 1.0–1.3 (sin TRR) / 1.5–1.7 (con TRR o hemodiálisis) | **No restringir proteínas agresivamente** en el paciente quirúrgico catabólico para «evitar diálisis» |

### Indicaciones de soporte nutricional perioperatorio (ESPEN 2021)
La **optimización preoperatoria** es una de las intervenciones con mayor impacto en la reducción de complicaciones postoperatorias. De acuerdo con ESPEN, un paciente presenta **riesgo nutricional grave** si cumple al menos uno de los siguientes criterios:
- Pérdida de peso **> 10-15% en los últimos 6 meses**.
- **IMC < 18.5 kg/m²**.
- **SGA grado C** o **NRS-2002 > 5**.
- **Albúmina sérica < 3.0 g/dL** (en ausencia de insuficiencia hepática o renal como causa primaria).

Ante **riesgo nutricional grave** en un paciente programado para **cirugía mayor electiva** (incluyendo cirugía oncológica), está indicado **posponer la intervención de 7 a 14 días** para administrar soporte nutricional preoperatorio (preferentemente oral con suplementos o enteral; parenteral solo si la vía enteral no es factible o no alcanza > 50% de requerimientos).

**Indicaciones generales de terapia nutricional artificial (enteral o parenteral):**
- Previsión de que el paciente no podrá ingerir alimentos por vía oral durante **más de 5 días** en el perioperatorio.
- Ingesta oral menor al **50% de los requerimientos recomendados por más de 7 días**.
- Complicaciones postoperatorias mayores (fuga, sepsis, íleo prolongado) que impiden retomar la vía oral.

**Principios ERAS e inmunonutrición:** los protocolos de recuperación acelerada (**ERAS**) eliminan el ayuno innecesario (permitiendo sólidos hasta 6 h y líquidos claros con **carga oral de carbohidratos** hasta 2 h antes de la inducción anestésica en pacientes sin gastroparesia, lo que atenúa la resistencia a la insulina posoperatoria) y promueven reiniciar la vía oral en las primeras 24 horas en la mayoría de cirugías gastrointestinales. En cirugía oncológica digestiva mayor (gástrica, esofágica, colorrectal, pancreática), las fórmulas **inmunomoduladoras** enriquecidas con **arginina, ácidos grasos omega-3 y nucleótidos** durante 5-7 días preoperatorios (y continuadas en el posoperatorio si hay desnutrición) reducen las complicaciones infecciosas y la estancia hospitalaria.

### Perlas de examen
- La **albúmina sérica < 3.0 g/dL** es un potente predictor de morbimortalidad y fuga anastomótica, pero es un **reactante de fase aguda negativo** (refleja inflamación, no desnutrición aislada).
- La vida media de las proteínas séricas: albúmina **~20 días**, transferrina **8-10 días**, prealbúmina **2-3 días**, proteína fijadora de retinol **~12 horas**.
- **NRS-2002 ≥ 3** indica riesgo nutricional; **≥ 5** indica riesgo grave. Los criterios **GLIM** requieren al menos 1 criterio fenotípico y 1 etiológico.
- En **desnutrición grave antes de cirugía mayor electiva**, se recomienda **soporte nutricional preoperatorio de 7 a 14 días** antes de operar.
- Requerimiento basal del paciente quirúrgico: **25-30 kcal/kg/día** y **1.2-1.5 g/kg/día de proteína** (hasta 2.0 g/kg/día en críticos, quemados o abdomen abierto).
- Un **cociente respiratorio (RQ) > 1.0** indica lipogénesis por **sobrealimentación** con exceso de carbohidratos, aumentando la producción de CO₂ y dificultando el destete ventilatorio.
- La fórmula del **balance nitrogenado** divide los gramos de proteína ingeridos entre **6.25** (1 g de nitrógeno equivale a 6.25 g de proteína).

### Referencias
Weimann A et al. *ESPEN practical guideline: Clinical nutrition in surgery*, Clin Nutr 2021;40:4745-4761 · Cederholm T et al. *GLIM criteria for the diagnosis of malnutrition*, Clin Nutr 2019;38:1-9 · Evans DC et al. *The use of visceral proteins as nutrition markers: an ASPEN position paper*, Nutr Clin Pract 2021 · Singer P et al. *ESPEN practical and partially revised guideline: Clinical nutrition in the ICU*, Clin Nutr 2023 · Sabiston, *Tratado de Cirugía*, 21.ª ed., cap. «Metabolismo en pacientes quirúrgicos» · Schwartz, *Principios de Cirugía*, 11.ª ed., cap. «Respuesta sistémica a la lesión y apoyo metabólico» · GPC CENETEC/IMSS de soporte nutricional en el paciente adulto hospitalizado.
`),
    sheet('nut-enteral', '02', 'Nutrición enteral, fórmulas y accesos (gastrostomía y yeyunostomía)', `
## Nutrición enteral, fórmulas y accesos (gastrostomía y yeyunostomía)

### Fundamento fisiológico e indicaciones
El principio rector del soporte nutricional en cirugía es indiscutible: **«si el intestino funciona, úsalo»**. Siempre que el tubo digestivo sea anatómica y funcionalmente utilizable, la **nutrición enteral (NE)** es superior a la nutrición parenteral por razones fisiológicas, inmunológicas y económicas bien demostradas:
- **Trofismo mucoso y barrera intestinal:** los enterocitos obtienen su principal sustrato energético (**glutamina**) y los colonocitos el suyo (**ácidos grasos de cadena corta**, especialmente butirato) del estímulo luminal. La NE evita la atrofia vellositaria, conserva las uniones estrechas intercelulares y reduce la translocación bacteriana.
- **Inmunidad de mucosas:** preserva el tejido linfoide asociado al intestino (**GALT**) y la secreción de **IgA secretora**, lo que se traduce en una reducción consistente de neumonías, infecciones intraabdominales e infecciones del sitio quirúrgico frente a la nutrición parenteral.
- **Modulación metabólica:** atenúa la respuesta hipercatabólica, mejora la sensibilidad a la insulina (efecto incretina), reduce la incidencia de colestasis hepática y cuesta una fracción de la nutrición parenteral.

Las guías **ESPEN 2021** y **ASPEN** recomiendan iniciar la **nutrición enteral temprana dentro de las primeras 24 a 48 horas** en el paciente crítico hemodinámicamente reanimado y en el posoperatorio de cirugía gastrointestinal mayor (incluso con anastomosis digestivas recientes, salvo indicación específica contraria del equipo quirúrgico), siempre que no sea posible cubrir requerimientos por vía oral.

### Contraindicaciones reales y falsos mitos
Es indispensable distinguir las contraindicaciones verdaderas de los mitos que retrasan innecesariamente el soporte:
- **Contraindicaciones absolutas:** obstrucción intestinal mecánica completa, isquemia intestinal activa o sospechada, perforación gastrointestinal no controlada, hemorragia digestiva masiva inestable, **choque no reanimado** (hipotensión refractaria, lactato en ascenso o requerimientos crecientes de vasopresores altos por riesgo de isquemia mesentérica no oclusiva), síndrome compartimental abdominal y fístula enterocutánea de alto gasto (> 500 mL/día) cuando no se puede acceder distalmente al sitio de la fístula.
- **No son contraindicaciones por sí solas:** la **ausencia de ruidos hidroaéreos** a la auscultación, la falta de canalización de gases en las primeras 24-48 h tras laparotomía, el abdomen abierto (puede administrarse NE trófica una vez estabilizado y sin isquemia ni discontinuidad intestinal) o el uso estable de dosis bajas a moderadas de vasopresores con perfusión en mejoría.

### Clasificación de las fórmulas enterales
La selección de la fórmula debe basarse en la capacidad digestiva y absortiva del paciente, el estado hipermetabólico y las comorbilidades, evitando prescribir fórmulas costosas sin respaldo científico:

| Tipo de fórmula | Composición y densidad calórica | Indicaciones clínicas principales | Notas prácticas y precauciones |
|---|---|---|---|
| **Polimérica estándar** | Proteínas intactas, carbohidratos complejos, lípidos LCT; 1.0–1.2 kcal/mL, isoosmolar (~300 mOsm/L) | **Primera elección** en > 85% de los pacientes con función digestiva y absortiva conservada | Menor costo, buena tolerancia; disponible con o sin fibra |
| **Polimérica hipercalórica / hiperproteica** | 1.5–2.0 kcal/mL; proteína 60–90 g/L | Restricción de volumen (cardiópatas, ascitis, lesión renal), alto catabolismo (trauma, sepsis, quemados) | Mayor osmolaridad; vigilar hidratación con agua libre adicional |
| **Oligomérica (semielemental)** | Péptidos de cadena corta, maltodextrinas, **triglicéridos de cadena media (MCT)** | Malabsorción grave, síndrome de intestino corto, insuficiencia pancreática exocrina, enteritis actínica, quilotórax (MCT se absorben directo a vena porta) | Más costosa; usar solo ante fracaso documentado de fórmula polimérica o malabsorción franca |
| **Elemental (monomérica)** | Aminoácidos libres, monosacáridos, muy poca grasa | Casos excepcionales de malabsorción extrema o alergia proteica grave | Muy hiperosmolar (riesgo de diarrea osmótica); poco palatables |
| **Inmunomoduladora** | Enriquecida con **arginina, ácidos grasos omega-3 (EPA/DHA) y nucleótidos** | **Cirugía oncológica digestiva mayor** (5–7 días preoperatorios y posoperatorio en desnutridos) y trauma grave | Precaución o evitar exceso de arginina en **choque séptico grave** (sustrato de óxido nítrico) |
| **Especializadas por órgano** | Renal (baja en K/P/Mg), hepática (BCAA), diabética (carbohidratos de bajo índice glucémico) | Renal si hiperkalemia/hiperfosfatemia persistente; hepática con BCAA solo en encefalopatía refractaria; fibra soluble en diarrea | Evitar fibra insoluble en pacientes críticos con vasopresores o riesgo de isquemia intestinal |

### Selección de la vía y accesos enterales
La elección del acceso responde a dos preguntas operativas: **duración esperada** y **ubicación anatómica (gástrica vs pospilórica)**.

- **Regla del tiempo:** si se prevé soporte por **menos de 4 a 6 semanas**, se utiliza una **sonda nasoenteral** (nasogástrica o nasoyeyunal de poliuretano o silicón fino, 8-12 Fr; evitar sondas de PVC grueso como Levin para alimentación prolongada por riesgo de necrosis alar y esofagitis). Si la necesidad superará **4 a 6 semanas** (o se anticipa durante una cirugía mayor digestiva/oncológica), está indicado un **acceso enteral definitivo** (gastrostomía o yeyunostomía).
- **Acceso gástrico vs pospilórico (duodenal/yeyunal):** el **estómago** es la vía inicial de elección por ser más fisiológico (permite bolos, regula el vaciamiento, el ácido clorhídrico actúa como barrera bactericida). El acceso **pospilórico/yeyunal** se reserva para: gastroparesia grave refractaria a procinéticos, pancreatitis aguda grave con intolerancia gástrica, obstrucción al vaciamiento gástrico, fístula gastrocutánea o esofágica, alto riesgo demostrado de broncoaspiración o como complemento intraoperatorio tras esofagectomía, gastrectomía total o pancreatoduodenectomía (Whipple).

### Gastrostomía y yeyunostomía: técnicas y selección quirúrgica
| Procedimiento | Técnica clave | Indicaciones principales | Contraindicaciones / complicaciones destacadas |
|---|---|---|---|
| **GPE / PEG (gastrostomía endoscópica percutánea)** | Técnica de tracción (**Ponsky-Gauderer**): insuflación gástrica, transiluminación de pared abdominal, punción con guía y paso del tubo por boca | **Primera elección** para nutrición gástrica > 4–6 semanas (EVC, disfagia neurológica, cáncer de cabeza y cuello) | Contraindicada si el endoscopio no pasa, ascitis masiva, coagulopatía, falta de transiluminación o interposición colónica. Complicación típica: síndrome de ***buried bumper*** (migración del tope interno en pared gástrica) |
| **Gastrostomía de Stamm** | Laparotomía mínima o laparoscopia; **doble sutura en bolsa de tabaco (jareta)** concéntrica alrededor de la sonda y fijación del estómago a la pared anterior (**gastropexia**) | Cuando la PEG no es factible (estenosis esofágica total, adherencias previas, acceso intraoperatorio) | Sencilla y rápida; el tracto madura en 2–4 semanas; fuga si cede la gastropexia |
| **Gastrostomía de Witzel** | Sonda introducida en estómago y cubierta por un **túnel seromuscular de 4–6 cm** con puntos de Lembert antes de salir a pared | Alternativa quirúrgica diseñada para minimizar fugas y reflujo por el estoma | Requiere mayor longitud gástrica; algo más laboriosa que Stamm |
| **Gastrostomía de Janeway** | Creación de un **tubo gástrico revestido de mucosa** (usualmente con engrapadora lineal) exteriorizado como estoma permanente | Necesidad definitiva a muy largo plazo sin sonda permanente (hoy menos usada) | Estoma permanente que requiere cirugía para cerrarse |
| **Yeyunostomía de Witzel** | A **20–30 cm del ángulo de Treitz**, sonda 10–14 Fr enterrada en un túnel seromuscular de 4–5 cm (evitando estenosar la luz) y fijación del yeyuno a la pared abdominal (evitar vólvulo) | Nutrición pospilórica definitiva en cáncer gástrico/esofágico, Whipple, trauma duodenopancreático, obstrucción gástrica inoperable | **Nunca usar en bolos** (solo infusión continua); riesgo de obstrucción, vólvulo en sitio de fijación o necrosis intestinal si se infunde en choque |
| **Yeyunostomía con catéter de aguja** (*needle-catheter*) | Tunelización submucosa oblicua con aguja y catéter fino (5–7 Fr) en yeyuno proximal | Cirugía digestiva mayor donde se busca acceso temporal de bajo perfil | Se obstruye con facilidad; requiere fórmulas líquidas de baja viscosidad y lavados frecuentes |

### Prescripción, vigilancia y manejo de complicaciones
- **Modalidad de infusión:** en el estómago puede administrarse de forma continua, cíclica (12-16 h nocturnas) o en bolos intermitentes (200-400 mL en 15-20 min cada 4-6 h). En **duodeno o yeyuno la infusión debe ser estrictamente continua con bomba** (iniciando a 10-20 mL/h e incrementando cada 8-12 h según tolerancia) para evitar síndrome de vaciamiento rápido (*dumping*), cólico y diarrea osmótica.
- **Prevención de broncoaspiración:** mantener la cabecera elevada a **30-45°**, confirmar la posición de sondas nasoenterales con **radiografía de abdomen** antes del primer uso (la auscultación de aire no es confiable) y revisar la marca externa en cada turno. Las guías **ASPEN/ESPEN** ya no recomiendan medir el volumen residual gástrico de forma rutinaria; si se mide en pacientes de alto riesgo, no suspender la NE con residuos < 500 mL en ausencia de náusea, vómito o distensión, y considerar procinéticos (metoclopramida o eritromicina) o paso a sonda pospilórica.
- **Complicaciones y manejo práctico:**
  - **Diarrea:** causa más frecuente de suspensión innecesaria. Antes de suspender la NE, **descartar infección por *Clostridioides difficile*** y revisar medicamentos concomitantes (jarabes con **sorbitol**, antibióticos, laxantes, magnesio). Si persiste, cambiar a fórmula con fibra soluble o reducir velocidad.
  - **Oclusión de sonda:** prevenir lavando con 30 mL de agua tibia cada 4-6 h y antes/después de medicamentos; nunca administrar tabletas trituradas de liberación prolongada. Desobstruir con agua tibia (o enzimas pancreáticas con bicarbonato), evitando introducir guías rígidas a ciegas.
  - **Desplazamiento accidental de gastrostomía/yeyunostomía:** si ocurre **antes de 2-4 semanas** (tracto inmaduro), **no reinsertar a ciegas** por riesgo de perforación y peritonitis: evaluar por cirugía/endoscopia o radiología. Si el tracto ya está maduro (> 4 semanas), recolocar una sonda de reemplazo o Foley temporal cuanto antes (el trayecto puede cerrarse en horas) y confirmar posición antes de reiniciar alimentación.
  - **Isquemia intestinal no oclusiva:** complicación rara (< 1%) pero letal en pacientes con choque y vasopresores altos que reciben NE agresiva (sobre todo por yeyunostomía): sospechar ante distensión súbita, intolerancia, lactato en ascenso y neumatosis intestinal → suspender NE de inmediato y valorar laparotomía.

### Perlas de examen
- «Si el intestino funciona, úsalo»: la NE preserva vellosidades, **GALT e IgA secretora**, disminuyendo complicaciones infecciosas frente a la NPT.
- La **ausencia de ruidos peristálticos o canalización de gases no contraindica** iniciar nutrición enteral temprana (24-48 h).
- Regla del tiempo para el acceso: **< 4-6 semanas** = sonda nasoenteral; **> 4-6 semanas** = gastrostomía (PEG de elección) o yeyunostomía.
- La **gastrostomía de Stamm** usa doble jareta concéntrica y gastropexia; la técnica de **Witzel** crea un túnel seromuscular de 4-6 cm.
- La **yeyunostomía siempre se administra en infusión continua con bomba**, nunca en bolos; se coloca a 20-30 cm del ángulo de Treitz y debe fijarse a la pared para prevenir vólvulo.
- Ante diarrea en un paciente con NE, primero descartar ***C. difficile*** y fármacos con **sorbitol** antes de culpar o suspender la fórmula.
- Si una gastrostomía se sale antes de 2-4 semanas (tracto inmaduro), **no reinsertar a ciegas** por riesgo de infundir alimentación a cavidad peritoneal.
- El **síndrome de *buried bumper*** es la migración del tope interno de una PEG hacia la pared gástrica/abdominal por tracción excesiva prolongada.

### Referencias
Weimann A et al. *ESPEN practical guideline: Clinical nutrition in surgery*, Clin Nutr 2021 · Bischoff SC et al. *ESPEN guideline on home enteral nutrition*, Clin Nutr 2020 · McClave SA et al. *Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient (ASPEN/SCCM)*, JPEN 2016 y actualización 2022 · Sabiston, *Tratado de Cirugía*, 21.ª ed., cap. «Metabolismo en pacientes quirúrgicos» · Schwartz, *Principios de Cirugía*, 11.ª ed., cap. «Respuesta sistémica a la lesión y apoyo metabólico» · GPC CENETEC/IMSS de nutrición enteral en el paciente adulto hospitalizado.
`),
    sheet('nut-parenteral', '03', 'Nutrición parenteral, accesos venosos centrales y complicaciones', `
## Nutrición parenteral, accesos venosos centrales y complicaciones

### Definición e indicaciones quirúrgicas
La **nutrición parenteral (NP)** consiste en la administración intravenosa completa o suplementaria de macronutrientes, micronutrientes, electrolitos y líquidos cuando el tubo digestivo no es funcional, no es accesible o no permite cubrir al menos 50-60% de los requerimientos nutricionales. Nunca debe competir con una vía enteral viable, pero salva vidas cuando el intestino falla.

**Indicaciones clásicas en Cirugía General:**
- **Falla intestinal aguda o crónica:** síndrome de intestino corto (menos de ~100 cm de intestino delgado sin colon en continuidad o < 50-60 cm con colon), enteritis actínica grave o pseudoobstrucción crónica.
- **Fístula enterocutánea de alto gasto (> 500 mL/día)** cuando no es posible colocar una sonda distal al orificio fistuloso ni realizar fistuloclisis.
- **Obstrucción intestinal mecánica** no resuelta o **íleo paralítico prolongado** que impide la vía enteral.
- **Sepsis intraabdominal grave con abdomen abierto** y edema intestinal severo o discontinuidad gastrointestinal en cirugía de control de daños.
- **Isquemia intestinal** o hemorragia digestiva masiva prolongada, así como pancreatitis aguda grave con intolerancia comprobada a nutrición enteral pospilórica.
- **Soporte preoperatorio de 7-14 días** en desnutrición grave cuando la vía oral/enteral está obstruida (por ejemplo, cáncer gástrico obstructivo).

**Momento óptimo de inicio (ESPEN 2021 / ASPEN):**
- En el paciente **bien nutrido** (NRS-2002 < 5): esperar hasta **5 a 7 días** si no se logra establecer vía enteral adecuada (el ensayo EPaNIC demostró que iniciar NP suplementaria demasiado temprano en críticos bien nutridos aumenta infecciones y estancia).
- En el paciente con **desnutrición grave** (NRS-2002 ≥ 5, SGA C, pérdida > 10%): iniciar NP de manera **temprana (primeras 24-72 horas)** una vez estabilizado hemodinámicamente si la vía enteral está contraindicada.

### Nutrición parenteral periférica (NPP) frente a central (NPC/NPT)
| Característica | Nutrición parenteral periférica (NPP) | Nutrición parenteral central (NPC / NPT) |
|---|---|---|
| **Acceso venoso** | Vena periférica de buen calibre (o catéter de línea media) | **Catéter venoso central** con punta en **unión cavoatrial** (tercio inferior de VCS) |
| **Osmolaridad máxima** | **< 850–900 mOsm/L** (mayor causa flebitis química y trombosis) | Sin límite práctico (> 1,200–1,800 mOsm/L tolerados por alto flujo sanguíneo) |
| **Concentración de dextrosa** | ≤ 10% (y aminoácidos 3–5%) | Alta (15–35% o más), permite aporte completo en volumen moderado |
| **Duración recomendada** | Corta (**< 7–14 días**), útil como puente o complemento parcial | Prolongada (> 7–14 días) o requerimientos calórico-proteicos elevados |
| **Limitación principal** | Requiere grandes volúmenes para aportar pocas calorías; alto riesgo de flebitis | Riesgos propios del acceso venoso central y complicaciones metabólicas |

### Formulación y cálculo de la NPT
Una mezcla de nutrición parenteral total (usualmente en **bolsa 3 en 1** o mezcla total de nutrientes, aunque los lípidos pueden infundirse por separado en sistemas 2 en 1) integra tres macronutrientes más electrolitos, vitaminas y oligoelementos:
1. **Carbohidratos (dextrosa monohidratada):** aporta **3.4 kcal/g** (cifra de examen distinta a las 4 kcal/g de los carbohidratos orales). Constituye 50-65% de las calorías no proteicas. No debe excederse la **velocidad máxima de oxidación de glucosa de 4-5 mg/kg/min** (~5-7 g/kg/día); superarla induce hiperglucemia, esteatosis hepática y exceso de producción de CO₂.
2. **Proteínas (aminoácidos cristalinos):** aportan **4 kcal/g** (1 g de nitrógeno = 6.25 g de proteína). Se prescriben **1.2-1.5 g/kg/día** (hasta 2.0 g/kg/día en catabolismo extremo o fístulas). La relación ideal de **kilocalorías no proteicas por gramo de nitrógeno** es de **100-150:1** en el paciente estable y **80-100:1** en estrés grave o sepsis.
3. **Lípidos (emulsiones lipídicas IV):** aportan **9-10 kcal/g** (emulsión al 20% = 2 kcal/mL; al 10% = 1.1 kcal/mL). Cubren 20-35% de las calorías no proteicas, limitando la dosis a **≤ 1.0-1.5 g/kg/día** (nunca superar 0.11 g/kg/h). Un aporte mínimo de 2-4% de las calorías totales en forma de ácidos grasos esenciales previene su deficiencia (dermatitis descamativa, alopecia, trombocitopenia). Se prefieren las **emulsiones lipídicas mixtas modernas** (aceite de soya, MCT, aceite de oliva y **aceite de pescado rico en omega-3**, como SMOF) sobre las emulsiones puras de aceite de soya (ricas en omega-6 proinflamatorios que favorecen colestasis).
4. **Electrolitos y micronutrientes:** requerimientos diarios orientativos en el adulto estable: sodio 1-2 mEq/kg, potasio 1-2 mEq/kg, calcio 10-15 mEq, magnesio 8-20 mEq y fósforo 20-40 mmol (ajustados a función renal y pérdidas). Añadir siempre **multivitamínico diario** (recordar que la vitamina K suele requerir suplementación adicional según presentación) y **oligoelementos** (zinc, cobre, selenio, cromo, manganeso). En pacientes con **fístulas intestinales o diarrea profusa**, suplementar **zinc adicional** (10-12 mg por cada litro de gasto entérico), pues su deficiencia provoca exantema periorificial/acral y mala cicatrización. En colestasis marcada, reducir o retirar cobre y manganeso por su excreción biliar.

### Accesos venosos centrales: anatomía y técnica de Seldinger
Todo residente de primer año debe dominar la selección anatómica y la colocación segura de un **catéter venoso central (CVC)** mediante **técnica de Seldinger** (punción venosa → paso de guía metálica flexible en «J» sin resistencia → retiro de aguja → dilatación cutáneo-subcutánea → paso del catéter sobre la guía → retiro completo de la guía confirmando su integridad → verificación de retorno venoso, fijación y **radiografía de tórax** para confirmar la punta en la **unión cavoatrial** y descartar neumotórax).

| Sitio anatómico | Ventajas principales | Desventajas y complicaciones | Indicación preferente en NPT |
|---|---|---|---|
| **Vena subclavia** | **Menor tasa de infección asociada a catéter** (ensayo 3SITES) y de trombosis; cómodo para el paciente y apósito estable | Mayor riesgo de **neumotórax** (~1-3%) y arteria **no compresible**; evitar en enfermedad renal crónica avanzada (estenosis central impide fístula AV futura) | **Sitio preferido** para NPT de corta-mediana duración si no hay coagulopatía ni insuficiencia respiratoria grave |
| **Vena yugular interna** | Accesible con **guía ecográfica en tiempo real** (estándar actual), arteria carótida compresible, menor riesgo de neumotórax | Mayor colonización cutánea por cercanía a secreciones orales/traqueostomía; más incómodo en el cuello | **Excelente alternativa**, de elección en coagulopatía o si se dispone de ultrasonido |
| **Vena femoral** | Fácil acceso de emergencia, sin riesgo de neumotórax, compresible | **Mayor tasa de infección y trombosis venosa profunda**; limita la deambulación | **Evitar para NPT** salvo imposibilidad absoluta de accesos superiores |
| **PICC / tunelizado (Hickman) / puerto** | Inserción periférica con bajo riesgo mecánico (PICC) o barrera contra infección en uso prolongado (tunelizado) | Mayor riesgo de trombosis venosa en PICC si calibre grande; el tunelizado requiere quirófano | **NPT > 4 semanas o domiciliaria** (falla intestinal crónica) |

**Reglas innegociables de prevención de infecciones del CVC (paquete de inserción):** higiene de manos, **barreras máximas estériles** (gorro, cubrebocas, bata estéril, guantes estériles y campo que cubra todo el cuerpo), antisepsia cutánea con **clorhexidina al 2% en alcohol al 70%**, uso de ultrasonido en yugular interna, **dedicar un lumen exclusivo para NPT** (no tomar muestras ni pasar medicamentos por esa vía) y retiro diario de todo catéter sin indicación vigente.

### Complicaciones de la nutrición parenteral y del acceso central
| Categoría | Complicaciones principales | Diagnóstico y manejo práctico |
|---|---|---|
| **Mecánicas del CVC** | Neumotórax, hemotórax, punción arterial, arritmias por guía, trombosis venosa, quilotórax (lado izquierdo), **embolia aérea** | Rx de tórax post-colocación. Ante **embolia aérea**: pinzar catéter, O₂ al 100%, **maniobra de Durant** (decúbito lateral izquierdo + Trendelenburg para atrapar el aire en ápex del VD) y aspirar por el CVC |
| **Infecciosas (CLABSI)** | Bacteriemia por *S. epidermidis*, *S. aureus*, gramnegativos o *Candida* | Hemocultivos pareados (periférico y central: positividad ≥ 2 h antes en el central confirma CLABSI) o cultivo de punta (Maki ≥ 15 UFC). **Retirar el catéter de inmediato** ante *S. aureus*, *Candida*, *Pseudomonas*, choque séptico, tromboflebitis supurativa o infección del túnel |
| **Metabólicas agudas** | **Hiperglucemia** (la más frecuente), hipoglucemia de rebote, hipertrigliceridemia, acidosis metabólica hiperclorémica, sobrecarga de volumen | Meta glucémica **140–180 mg/dL** (insulina regular en bolsa o infusión). Si triglicéridos > 400 mg/dL, reducir o suspender lípidos. Al suspender NPT, disminuir gradualmente o vigilar glucosa para evitar hipoglucemia. Si acidosis hiperclorémica, sustituir sales de cloruro por **acetato** |
| **Síndrome de realimentación** | Tríada electrolítica clásica: **hipofosfatemia** (dato cardinal), **hipokalemia** e **hipomagnesemia**, más déficit agudo de **tiamina** y retención de sodio/agua | Ocurre al reiniciar glucosa en pacientes con desnutrición grave, ayuno > 5–10 días, alcoholismo o cáncer: el pico de insulina desplaza P, K y Mg al espacio intracelular, causando **arritmias, insuficiencia cardiaca, debilidad respiratoria, rabdomiólisis y encefalopatía de Wernicke**. Prevención: dar **tiamina 100–300 mg IV antes de iniciar dextrosa**, empezar lento (**10–15 kcal/kg/día** o ≤ 50% del objetivo), reponer P, K y Mg profilácticamente y medir electrolitos cada 12–24 h los primeros 3–5 días |
| **Hepatobiliares (IFALD / PNALD)** | **Esteatosis hepática** (adultos, por exceso de dextrosa), **colestasis** (más en uso prolongado/niños), **lodo biliar y colecistitis alitiásica** (falta de liberación de colecistocinina) | Evitar sobrealimentación (< 4 mg/kg/min de glucosa), **ciclar la NPT** (12–16 h/día), emplear emulsiones lipídicas con aceite de pescado (≤ 1 g/kg/día), tratar sobrecrecimiento bacteriano y mantener aunque sea **nutrición enteral trófica** mínima |

### Seguimiento y retiro de la NPT
Al iniciar la NPT se monitorizan glucemia capilar cada 6 horas, balance hídrico diario y electrolitos séricos (**incluyendo fósforo y magnesio**) cada 24 horas (o cada 12 horas si hay riesgo de realimentación) hasta estabilizar la mezcla; posteriormente dos veces por semana junto con biometría, pruebas de función hepática y triglicéridos semanales. La transición a vía oral o enteral debe iniciarse tan pronto el tubo digestivo recupere función, reduciendo la NPT de forma escalonada y retirándola una vez que la ingesta enteral cubra de manera sostenida **60 a 75%** de los requerimientos estimados.

### Perlas de examen
- La **dextrosa monohidratada** intravenosa aporta **3.4 kcal/g** (no 4 kcal/g); su velocidad máxima de oxidación es **4-5 mg/kg/min**.
- La nutrición parenteral periférica tolera una osmolaridad máxima de **850-900 mOsm/L** (dextrosa ≤ 10%); cualquier mezcla más concentrada exige **acceso venoso central** con punta en la **unión cavoatrial**.
- El sitio con **menor tasa de infección de CVC** es la **vena subclavia** (3SITES), aunque conlleva mayor riesgo de neumotórax; la **femoral** tiene la tasa más alta de infección y trombosis.
- El **síndrome de realimentación** tiene como sello bioquímico la **hipofosfatemia** (acompañada de hipokalemia e hipomagnesemia): siempre administrar **tiamina IV antes de iniciar dextrosa** y comenzar con aporte calórico reducido (10-15 kcal/kg/día).
- La **complicación metabólica más frecuente** de la NPT es la **hiperglucemia**; la **esteatosis hepática** en el adulto se relaciona con exceso de carbohidratos y la **colecistitis alitiásica** con la falta de estímulo de colecistocinina.
- En **embolia aérea** durante manipulación del CVC, colocar al paciente en **decúbito lateral izquierdo y Trendelenburg** (posición de Durant) con oxígeno al 100%.
- En bacteriemia por catéter causada por ***S. aureus***, ***Candida*** o ***Pseudomonas***, el catéter **debe retirarse de inmediato**.

### Referencias
Weimann A et al. *ESPEN practical guideline: Clinical nutrition in surgery*, Clin Nutr 2021 · da Silva JSV et al. *ASPEN Consensus Recommendations for Refeeding Syndrome*, Nutr Clin Pract 2020;35:178-195 · Parienti JJ et al. 3SITES Study, *NEJM* 2015;373:1220-1229 · Casaer MP et al. EPaNIC Trial, *NEJM* 2011 · Mermel LA et al. *IDSA Clinical Practice Guidelines for Catheter-Related Bloodstream Infection* · Sabiston, *Tratado de Cirugía*, 21.ª ed., cap. «Metabolismo en pacientes quirúrgicos» · Schwartz, *Principios de Cirugía*, 11.ª ed., cap. «Respuesta sistémica a la lesión y apoyo metabólico».
`),
  ],
  'ap-r1-sangre': [
    sheet('san-coagulacion', '01', 'Fisiopatología de la coagulación, fibrinólisis y pruebas hemostáticas', `
## Fisiopatología de la coagulación, fibrinólisis y pruebas hemostáticas

### Visión general de la hemostasia quirúrgica
La **hemostasia** es el sistema fisiológico que detiene la pérdida sanguínea tras una lesión vascular mientras conserva la fluidez de la sangre en el resto del árbol circulatorio. Depende del equilibrio coordinado entre cuatro procesos: **hemostasia primaria** (vasoconstricción y tapón plaquetario), **hemostasia secundaria** (generación de trombina y malla de fibrina), **anticoagulación fisiológica** (limitación espacial del coágulo) y **fibrinólisis** (remodelación y recanalización vascular).

Para el residente de Cirugía General, dominar esta fisiología tiene una aplicación diaria inmediata: distinguir en quirófano o recuperación entre un **sangrado quirúrgico** (vaso no ligado, lesión arterial o venosa localizada, que exige control mecánico) y un **sangrado coagulopático** (hemorragia difusa en sábana por superficies cruentas, sitios de venopunción, mucosas o heridas, que exige corregir factores, plaquetas, temperatura, pH y calcio simultáneamente).

### Hemostasia primaria: vasoconstricción y tapón plaquetario
Cuando se lesiona el endotelio, queda expuesto el colágeno subendotelial y se desencadenan cuatro pasos consecutivos:
1. **Vasoconstricción refleja:** respuesta miógena inmediata potenciada por endotelina-1, serotonina y **tromboxano A₂ (TXA₂)**, que disminuye el flujo local.
2. **Adhesión plaquetaria:** las plaquetas circulantes se fijan al colágeno subendotelial mediante el **factor de von Willebrand (FvW)**, que actúa como puente molecular al unirse al receptor plaquetario **glucoproteína Ib (GP Ib)**.
3. **Activación y secreción:** al adherirse, las plaquetas cambian de forma (emiten seudópodos), exponen fosfolípidos aniónicos (fosfatidilserina) en su membrana y liberan el contenido de sus **gránulos densos** (**ADP**, calcio, serotonina) y **gránulos alfa** (fibrinógeno, FvW, factor V, factor plaquetario 4, PDGF), además de sintetizar TXA₂ vía ciclooxigenasa-1 (COX-1).
4. **Agregación plaquetaria:** el ADP y el TXA₂ inducen un cambio conformacional en el receptor de superficie **GP IIb/IIIa**, permitiendo que moléculas de **fibrinógeno** enlacen plaquetas adyacentes y consoliden el tapón hemostático primario (inestable hasta que la fibrina lo refuerza).

**Trastornos clave de la hemostasia primaria en cirugía:**
- **Enfermedad de von Willebrand:** trastorno hemorrágico hereditario **más frecuente** (~1% de la población; autosómica dominante en tipos 1 y 2). Produce sangrado mucocutáneo y puede prolongar el TTPa por descenso secundario del factor VIII (el FvW lo transporta y protege). En el tipo 1 suele responder a **desmopresina (DDAVP 0.3 µg/kg IV)**; en tipos 2B y 3 requiere concentrados de FvW/FVIII.
- **Disfunción plaquetaria urémica:** en insuficiencia renal crónica las toxinas urémicas y el óxido nítrico alteran la adhesión/agregación con cuenta plaquetaria normal. Se corrige preoperatoriamente con **diálisis**, **desmopresina (DDAVP)**, corrección de la anemia (Hto > 30% desplaza las plaquetas hacia la pared vascular) y, en sangrado grave, crioprecipitado o estrógenos conjugados.
- **Síndrome de Bernard-Soulier** (deficiencia de **GP Ib**, plaquetas gigantes) y **trombastenia de Glanzmann** (deficiencia de **GP IIb/IIIa**, agregación ausente).

### Hemostasia secundaria: cascada clásica y modelo celular
Aunque la **cascada clásica** sigue siendo indispensable para interpretar las pruebas de laboratorio (TP y TTPa), *in vivo* la coagulación opera según el **modelo celular de Hoffman y Monroe**.

#### La cascada clásica (utilidad diagnóstica)
- **Vía extrínseca (evaluada por TP/INR):** iniciada por el **factor tisular (III)** y el **factor VII** (proteína con la **vida media más corta**, 4-6 horas; por eso el TP/INR se prolonga primero en insuficiencia hepática o al iniciar warfarina).
- **Vía intrínseca (evaluada por TTPa):** factores **XII, XI, IX y VIII** (la deficiencia de factor XII prolonga notablemente el TTPa en laboratorio, pero **no causa sangrado clínico**).
- **Vía común (evaluada por ambos):** factores **X, V, II (protrombina) y I (fibrinógeno)**.
- **Factor XIII (estabilizador de fibrina):** forma enlaces covalentes cruzados que hacen al coágulo resistente a la fibrinólisis. Su deficiencia cursa con **TP y TTPa completamente normales** y sangrado tardío tras cirugía.
- **Síntesis y dependencia de vitamina K:** el hígado sintetiza todos los factores **excepto el factor VIII y el FvW** (producidos principalmente en células endoteliales). Son **dependientes de vitamina K** los factores **II, VII, IX y X**, así como las proteínas anticoagulantes **C y S** (la γ-carboxilación les permite fijar calcio ionizado, el factor IV).

#### Modelo celular de la coagulación (Hoffman y Monroe)
1. **Fase de iniciación:** ocurre en la superficie de células extravasculares (fibroblastos, músculo liso) que expresan **factor tisular**. El complejo **FT-VIIa** activa pequeñas cantidades de factores IX y X; el factor Xa unido a Va genera una traza inicial de **trombina**, insuficiente aún para formar un coágulo estable.
2. **Fase de amplificación:** esa pequeña cantidad de trombina activa las plaquetas adheridas en la lesión, escinde el FvW del factor VIII y activa los cofactores **V, VIII y XI** directamente sobre la membrana plaquetaria.
3. **Fase de propagación:** sobre la superficie fosfolipídica rica en calcio de las plaquetas activadas se ensamblan el complejo **tenasa** (**IXa-VIIIa**) y el complejo **protrombinasa** (**Xa-Va**), generando un masivo **«estallido de trombina»** que transforma el fibrinógeno en monómeros de fibrina y activa el factor XIII para estabilizar la malla.

### Anticoagulantes fisiológicos y sistema fibrinolítico
Para evitar que la trombosis se propague a vasos sanos actúan tres sistemas reguladores:
- **Antitrombina (AT III):** inhibe principalmente trombina (IIa) y factor Xa (además de IXa y XIa); la heparina amplifica su actividad más de 1,000 veces.
- **Sistema proteína C / proteína S / trombomodulina:** la trombina unida a la trombomodulina endotelial activa la proteína C, que junto con su cofactor proteína S degrada los cofactores **Va y VIIIa**.
- **Inhibidor de la vía del factor tisular (TFPI):** bloquea rápidamente el complejo FT-VIIa-Xa al concluir la fase de iniciación.

**Fibrinólisis:** las células endoteliales liberan **activador tisular del plasminógeno (tPA)**, que convierte el plasminógeno atrapado en el coágulo en **plasmina**. La plasmina escinde la fibrina entrecruzada generando productos de degradación de fibrina, entre ellos el **dímero D** (marcador específico de formación previa de fibrina estabilizada y fibrinólisis activa). Este proceso es frenado por el inhibidor del activador del plasminógeno tipo 1 (**PAI-1**) y la **α2-antiplasmina**. El **ácido tranexámico** es un análogo de la lisina que bloquea los sitios de unión del plasminógeno a la fibrina, inhibiendo la hiperfibrinólisis en trauma y cirugía mayor.

### Pruebas hemostáticas convencionales y pruebas viscoelásticas
Las pruebas convencionales se realizan en plasma pobre en plaquetas a 37 °C, por lo que **no detectan** efectos de la hipotermia, la disfunción plaquetaria, el déficit de factor XIII ni la hiperfibrinólisis. Las pruebas viscoelásticas de sangre total (**tromboelastografía [TEG]** y **tromboelastometría rotacional [ROTEM]**) superan estas limitaciones y guían la terapia transfusional dirigida en trauma, trasplante hepático y cirugía cardiovascular.

| Prueba convencional | Vía o componente evaluado | Valores de referencia aprox. | Causas frecuentes de alteración en cirugía |
|---|---|---|---|
| **Cuenta plaquetaria** | Hemostasia primaria (número) | 150,000–450,000/µL | Consumo (hemorragia, CID, sepsis), dilución, hiperesplenismo, TIH |
| **TP / INR** | Vía extrínseca (VII) y común (X, V, II, I) | TP 11–13.5 s; INR 0.8–1.2 | Warfarina, déficit de vitamina K, hepatopatía, CID, sangrado masivo |
| **TTPa** | Vía intrínseca (XII, XI, IX, VIII) y común | 25–35 s | Heparina no fraccionada, hemofilia A/B, EvW grave, anticoagulante lúpico, CID |
| **Fibrinógeno (Clauss)** | Sustrato final de fibrina (factor I) | 200–400 mg/dL | **Primer factor en agotarse** en hemorragia masiva y CID; reactante de fase aguda positivo |
| **Tiempo de trombina (TT)** | Conversión de fibrinógeno a fibrina | 14–19 s | Hipofibrinogenemia, disfibrinogenemia, heparina, dabigatrán |
| **Prueba de mezclas (1:1)** | Diferencia déficit de factor vs inhibidor | Corrige con plasma normal | **Corrige** = déficit de factor; **no corrige** = inhibidor (anticuerpo anti-FVIII, heparina, anticoagulante lúpico) |

#### Interpretación práctica de TEG y ROTEM en quirófano
| Fase del coágulo | Parámetro TEG / ROTEM | Significado fisiológico | Tratamiento dirigido ante alteración |
|---|---|---|---|
| **Iniciación (tiempo de reacción)** | **R** prolongado (TEG) / **CT** prolongado (ROTEM) | Deficiencia de factores de coagulación o efecto de heparina | **Plasma fresco congelado** (o CCP); protamina si efecto heparínico (confirmado con heparinasa) |
| **Cinética / velocidad de formación** | **K** prolongado y **ángulo α** disminuido / **CFT** prolongado | Déficit de **fibrinógeno** (principalmente) y factores | **Crioprecipitado** o concentrado de fibrinógeno |
| **Firmeza máxima del coágulo** | **MA** (amplitud máxima) / **MCF** disminuida | Disfunción o déficit **plaquetario** (~80%) y fibrinógeno (~20%) | **Concentrado plaquetario** (revisar FIBTEM/fibrinógeno funcional para separar ambos) |
| **Estabilidad / lisis del coágulo** | **LY30 > 3%** (TEG) / **CLI30** caída excesiva | **Hiperfibrinólisis** (lisis prematura del coágulo) | **Ácido tranexámico** IV |

### Coagulopatías quirúrgicas específicas
- **Hepatopatía crónica (cirrosis):** produce una **hemostasia rebalanceada**, porque disminuyen simultáneamente los factores procoagulantes (II, V, VII, IX, X) y los anticoagulantes naturales (proteínas C y S, antitrombina), mientras aumentan el factor VIII y el FvW. Por ello, **un INR elevado en el cirrótico no predice bien el riesgo de sangrado** y **no está indicado transfundir PFC profiláctico** antes de procedimientos menores solo para «normalizar el INR» (solo aporta volumen e incrementa la presión portal); guiar con fibrinógeno, plaquetas y TEG/ROTEM.
- **Coagulación intravascular diseminada (CID):** activación sistémica descontrolada de la coagulación secundaria a sepsis, trauma grave, cáncer o complicaciones obstétricas, con consumo de plaquetas y factores y depósito de microtrombos. Diagnóstico mediante criterios **ISTH** (plaquetas bajas, TP prolongado, fibrinógeno en descenso y dímero D muy elevado). El pilar terapéutico es **tratar la causa subyacente** (control del foco séptico/quirúrgico), reservando hemocomponentes (plaquetas, crioprecipitado, PFC) únicamente si hay hemorragia activa o procedimiento invasivo urgente.

### Perlas de examen
- La **adhesión plaquetaria** depende del **FvW + GP Ib** (déficit = Bernard-Soulier); la **agregación plaquetaria** depende de **fibrinógeno + GP IIb/IIIa** (déficit = trombastenia de Glanzmann).
- El **factor VII** tiene la vida media más corta (4-6 h), por lo que el **TP/INR** es la primera prueba que se altera en hepatopatía o al iniciar warfarina.
- Todos los factores de coagulación se sintetizan en el hígado **excepto el factor VIII y el FvW**. Los dependientes de vitamina K son **II, VII, IX, X** y las proteínas **C y S**.
- La deficiencia de **factor XII** prolonga el TTPa **sin causar sangrado**; la deficiencia de **factor XIII** causa sangrado tardío con **TP y TTPa normales**.
- El **fibrinógeno** es el **primer factor de coagulación que alcanza niveles críticos** en la hemorragia masiva.
- En **TEG**: **R** largo → plasma; **ángulo α** bajo / K largo → crioprecipitado (fibrinógeno); **MA** baja → plaquetas; **LY30 > 3%** → ácido tranexámico.
- En la **coagulopatía urémica**, el manejo inicial incluye **desmopresina (DDAVP)**, diálisis y corrección de anemia.

### Referencias
Hoffman M, Monroe DM. *A cell-based model of hemostasis*, Thromb Haemost 2001 · Kitchens CS, Kessler CM, Konkle BA. *Consultative Hemostasis and Thrombosis* · Rossaint R et al. *European guideline on management of major bleeding and coagulopathy following trauma*, Crit Care 2023 · Northup PG et al. *AASLD Practice Guidance: Vascular Liver Disorders and Coagulation in Cirrhosis*, Hepatology 2021 · Sabiston, *Tratado de Cirugía*, 21.ª ed., cap. «Principios de cirugía y hemostasia» · Schwartz, *Principios de Cirugía*, 11.ª ed., cap. «Hemostasia, hemorragia quirúrgica y transfusión».
`),
    sheet('san-transfusion', '02', 'Transfusión de hemocomponentes: indicaciones, protocolos y reacciones', `
## Transfusión de hemocomponentes: indicaciones, protocolos y reacciones

### Principios de Medicina Transfusional y Patient Blood Management (PBM)
La sangre alogénica es un tejido vivo, escaso y con riesgos inmunológicos, hemodinámicos e infecciosos reales. En el paciente quirúrgico, la transfusión innecesaria se asocia de forma independiente con mayor tasa de **infección del sitio quirúrgico**, neumonía, estancia hospitalaria prolongada y posible inmunomodulación relacionada con la transfusión (TRIM). Por ello, la práctica moderna se rige por los tres pilares del **Patient Blood Management (PBM)**:
1. **Optimizar la eritropoyesis preoperatoria:** detectar y tratar la anemia semanas antes de la cirugía electiva (hierro intravenoso u oral en ferropenia, vitamina B₁₂/folato, evitando transfundir en quirófano por una anemia crónica tratable).
2. **Minimizar las pérdidas sanguíneas:** técnica quirúrgica meticulosa, normotermia, uso oportuno de antifibrinolíticos (**ácido tranexámico**), reducción de flebotomías diagnósticas y recuperador celular intraoperatorio (*cell saver*) en cirugías con gran sangrado limpio (contraindicado ante contaminación bacteriana franca; discutido con filtros leucorreductores en oncología).
3. **Aprovechar y optimizar la tolerancia fisiológica a la anemia:** aplicar **umbrales transfusionales restrictivos** y transfundir **una unidad a la vez** en pacientes sin sangrado activo, reevaluando clínica y hemoglobina tras cada unidad.

### Hemocomponentes: características, dosis e indicaciones (AABB 2023 / GPC IMSS)
| Hemocomponente | Contenido y volumen | Respuesta esperada (adulto 70 kg) | Indicaciones y umbrales actuales |
|---|---|---|---|
| **Concentrado eritrocitario (CE)** | Eritrocitos (Hto 55–80%) en solución conservadora; 250–300 mL; almacenamiento 1–6 °C (35–42 días) | **+1 g/dL de Hb** (+3% de Hto) por unidad | **Umbral restrictivo (AABB 2023):** **Hb < 7 g/dL** en hospitalizados estables y críticos; **< 7.5 g/dL** en cirugía cardiaca; **< 8 g/dL** en cirugía ortopédica, enfermedad cardiovascular preexistente o síndrome coronario agudo; en hemorragia activa guiar por clínica y perfusión, no esperar Hb |
| **Plasma fresco congelado (PFC)** | Todos los factores de coagulación (~1 UI/mL), incluido fibrinógeno (~400 mg/bolsa); 200–250 mL | Dosis **10–15 mL/kg** (~3–4 unidades) aumenta factores ~20–30% | Hemorragia activa con coagulopatía (TP/TTPa > 1.5× control), protocolo de transfusión masiva (1:1:1), reversión urgente de warfarina **solo si no hay CCP-4**, púrpura trombocitopénica trombótica. **NO usar para expandir volumen ni corregir INR leve sin sangrado** |
| **Concentrado plaquetario** | Aféresis (1 unidad = ~3 × 10¹¹ plaquetas) o pool de 4–6 concentrados estándar; almacenamiento **20–24 °C en agitación** (5–7 días) | **+30,000 a 50,000/µL** por aféresis o pool de 5–6 unidades | Profilaxis: **< 10,000/µL** en estable; **< 20,000/µL** para CVC o sepsis/fiebre; **< 50,000/µL** en cirugía mayor, punción lumbar o sangrado activo; **< 100,000/µL** en **neurocirugía**, cirugía ocular o trauma craneoencefálico con hemorragia |
| **Crioprecipitado** | Fracción insoluble al descongelar PFC a 4 °C; rico en **fibrinógeno (≥ 150–250 mg/u)**, FVIII, FvW y FXIII; 10–15 mL/u | 1 unidad/10 kg (pool de 8–10 unidades) sube fibrinógeno **~70–100 mg/dL** | Hipofibrinogenemia **< 150–200 mg/dL** con sangrado activo (trauma, hemorragia obstétrica, CID), disfibrinogenemia o hemorragia urémica refractaria |
| **Sangre total tipo O de bajo título** | Eritrocitos, plasma y plaquetas en una sola bolsa (500 mL) | Reanimación hemostática integral balanceada | Creciente adopción en centros de trauma para reanimación inicial en choque hemorrágico grave |

**Modificaciones especiales de hemocomponentes:**
- **Leucorreducción:** filtra > 99.9% de los leucocitos; reduce las reacciones febriles no hemolíticas, la aloinmunización anti-HLA y la transmisión de citomegalovirus (CMV).
- **Irradiación gamma:** inactiva linfocitos T del donador para prevenir la **enfermedad injerto contra huésped asociada a transfusión (TA-GVHD)** (casi siempre mortal); obligatoria en trasplantados de médula ósea, inmunodeficiencias celulares graves, uso de análogos de purinas (fludarabina) y donaciones de familiares de primer grado.
- **Lavado de eritrocitos:** elimina proteínas plasmáticas; indicado en pacientes con **deficiencia de IgA** y antecedentes de anafilaxia transfusional grave.

### Compatibilidad ABO/Rh y pruebas pretransfusionales
En la compatibilidad de **eritrocitos** se evita que los anticuerpos del receptor ataquen los antígenos de los glóbulos rojos transfundidos; en el **plasma** la regla se invierte:
- **Eritrocitos:** el grupo **O Rh negativo** es el donador universal de urgencia (en trauma exanguinante, los hombres y mujeres posmenopáusicas pueden recibir **O Rh positivo** para preservar las reservas de O negativo para mujeres en edad fértil). El receptor **AB positivo** puede recibir cualquier grupo eritrocitario.
- **Plasma y crioprecipitado:** el grupo **AB** carece de anticuerpos anti-A y anti-B, por lo que es el **donador universal de plasma** (en urgencia trauma se usa plasma AB o plasma A de bajo título anti-B).
- **Pruebas pretransfusionales:** el **grupo y rastreo de anticuerpos** (*type and screen*, ~30-45 min) basta en cirugías de bajo riesgo de sangrado; las **pruebas cruzadas** (*crossmatch*) se solicitan cuando se prevé transfusión. En hemorragia exanguinante, nunca retrasar la transfusión esperando pruebas cruzadas: iniciar con O sin cruzar y cambiar a grupo específico en cuanto el banco lo libere (~10-15 min).

### Protocolo de transfusión masiva (PTM)
Se define clásicamente como la transfusión de **≥ 10 concentrados eritrocitarios en 24 horas**, o bien de manera más operativa en tiempo real como **≥ 4 unidades en 1 hora** con sangrado continuo o reposición de > 50% de la volemia en 3 horas. El puntaje **ABC** (1 punto por cada uno: trauma penetrante, PAS ≤ 90 mmHg, FC ≥ 120 lpm, FAST positivo; **≥ 2 puntos** indica activación inmediata) evita retrasos.

Se transfunde en relación balanceada **1:1:1** (CE : PFC : plaquetas, ensayo **PROPPR**) utilizando calentadores de fluidos rápidos, y se vigilan de forma proactiva las **complicaciones metabólicas de la transfusión masiva**:
- **Hipocalcemia por citrato:** el citrato usado como anticoagulante en las bolsas quela el calcio ionizado, provocando hipotensión refractaria, prolongación del QT y agravamiento de la coagulopatía → reponer cloruro o gluconato de calcio para mantener Ca²⁺ ionizado > 1.1 mmol/L.
- **Hiperkalemia:** los eritrocitos almacenados liberan potasio al sobrenadante; relevante en transfusión masiva rápida o insuficiencia renal (vigilar ECG y electrolitos).
- **Hipotermia y acidosis:** usar siempre calentadores rápidos y corregir la hipoperfusión; el citrato hepático se metaboliza a bicarbonato al restaurar perfusión, pudiendo causar incluso alcalosis metabólica tardía.

### Reacciones transfusionales agudas y tardías
| Reacción | Frecuencia y tiempo | Fisiopatología y clínica clave | Manejo específico |
|---|---|---|---|
| **Hemolítica aguda (RHA)** | Rara pero **la más grave**; minutos a < 24 h | **Incompatibilidad ABO** (casi siempre error humano de identificación). Fiebre, escalofrío, dolor lumbar/torácico, hipotensión, **hemoglobinuria**, CID y lesión renal aguda | **Suspender transfusión**, SS 0.9% para sostener TA y diuresis (1–2 mL/kg/h), verificar etiquetas, Coombs directo, haptoglobina/DHL/bilirrubinas, manejo de choque y CID |
| **TRALI (lesión pulmonar aguda asociada a transfusión)** | < 6 horas tras transfusión (más con **plasma y plaquetas**) | Anticuerpos anti-HLA/anti-HNA del donador activan neutrófilos pulmonares → edema pulmonar **no cardiogénico**. Disnea súbita, hipoxemia (PaO₂/FiO₂ < 300), infiltrados bilaterales, **sin sobrecarga** (BNP normal/bajo, fiebre/hipotensión) | Soporte ventilatorio protector (VMI si requiere); **evitar diuréticos agresivos** (puede empeorar hipotensión); notificar al banco para diferir donador |
| **TACO (sobrecarga circulatoria asociada a transfusión)** | **Principal causa actual de muerte transfusional**; < 6–12 h | Edema pulmonar **hidrostático** por volumen excesivo o infusión rápida en ancianos, cardiópatas o nefrópatas. Disnea, **hipertensión**, ingurgitación yugular, estertores, **BNP elevado** | Sentar al paciente, oxígeno, **diurético de asa (furosemida IV)**, reducir velocidad o dividir futuras unidades |
| **Febril no hemolítica** | **La más frecuente** (~1%); durante o < 4 h | Citocinas acumuladas o anticuerpos antileucocitarios. Elevación térmica ≥ 1 °C sin hemólisis ni hipotensión | Descartar siempre RHA y sepsis bacteriana; paracetamol; prevenir con **hemocomponentes leucorreducidos** |
| **Alérgica / anafiláctica** | Frecuente (urticaria) / rara (anafilaxia); minutos | Reacción IgE contra proteínas plasmáticas; anafilaxia grave clásica en **deficiencia de IgA** | Urticaria aislada: pausar y dar difenhidramina (puede reanudarse si resuelve). Anafilaxia (estridor, choque): **suspender definitivo + adrenalina IM** |
| **Contaminación bacteriana (sepsis)** | Más común en **plaquetas** (almacenadas a **20–24 °C**); minutos a horas | Bacteriemia y choque endotóxico agudo: fiebre alta (> 39 °C), escalofríos intensos, hipotensión rápida | Suspender, conservar bolsa para cultivo, hemocultivos al paciente y **antibiótico IV de amplio espectro inmediato** |
| **Hemolítica tardía** | 5–14 días post-transfusión | Respuesta anamnésica de anticuerpos contra antígenos menores (Rh, Kidd, Kell). Caída inexplicable de Hb, ictericia leve, Coombs directo positivo | Manejo de soporte; identificar anticuerpo para futuras unidades antígeno-negativas |

### Protocolo inmediato ante sospecha de reacción transfusional
Ante cualquier fiebre, escalofrío, disnea, hipotensión, dolor lumbar o urticaria generalizada durante una transfusión, el residente debe ejecutar cinco pasos sin demora:
1. **Detener la transfusión de inmediato** y retirar la bolsa junto con el equipo de infusión (sin purgar el resto hacia el paciente).
2. **Mantener la vía venosa permeable** con solución salina al 0.9% usando un equipo nuevo.
3. **Evaluar ABC, signos vitales y exploración física** (buscar disnea, estertores, broncoespasmo, exantema, oliguria o sangrado en sábana).
4. **Verificar doblemente la identificación** del paciente, el brazalete y la etiqueta de la bolsa para detectar un error ABO (y alertar de inmediato al banco si hubo intercambio de pacientes).
5. **Notificar al banco de sangre** enviando la bolsa remanente, muestras frescas de sangre (prueba de Coombs directa, hemólisis, nueva tipificación) y muestra de orina (hemoglobinuria).

### Perlas de examen
- **Umbral restrictivo estándar (AABB 2023):** **Hb < 7 g/dL** en pacientes hospitalizados estables y críticos; **< 8 g/dL** en cardiopatía isquémica o cirugía ortopédica; cada concentrado eritrocitario eleva la Hb **~1 g/dL**.
- **Umbrales de plaquetas:** < 10,000 profilaxis; **< 50,000 cirugía mayor o sangrado activo**; **< 100,000 neurocirugía** o cirugía ocular.
- El **crioprecipitado** es el hemocomponente de elección para reponer **fibrinógeno** (umbral **< 150-200 mg/dL** con sangrado activo).
- La **reacción febril no hemolítica** es la más frecuente; la **hemolítica aguda por error ABO** es la más grave en el agudo; el **TACO** es actualmente la causa más común de mortalidad relacionada con transfusión.
- **TRALI vs TACO** (ambas en las primeras 6 h): TRALI = edema pulmonar **no cardiogénico** con hipotensión y BNP normal (tratar con soporte ventilatorio, no diuréticos); TACO = sobrecarga hidrostática con **hipertensión, ingurgitación yugular y BNP alto** (tratar con **furosemida**).
- La **contaminación bacteriana** ocurre con mayor frecuencia en **concentrados plaquetarios** porque se conservan a temperatura ambiente (**20-24 °C**).
- La **irradiación** de hemocomponentes previene la **enfermedad injerto contra huésped asociada a transfusión**; la **leucorreducción** previene reacciones febriles no hemolíticas y transmisión de CMV.

### Referencias
Carson JL et al. *Red Blood Cell Transfusion: 2023 AABB International Guidelines*, JAMA 2023;330:1892-1902 · Kaufman RM et al. *Platelet Transfusion: A Clinical Practice Guideline from the AABB*, Ann Intern Med 2015 · Holcomb JB et al. PROPPR Trial, *JAMA* 2015 · NOM-253-SSA1-2012 para la disposición de sangre humana y sus componentes con fines terapéuticos · Sabiston, *Tratado de Cirugía*, 21.ª ed., cap. «Principios de cirugía y hemostasia» · Schwartz, *Principios de Cirugía*, 11.ª ed., cap. «Hemostasia, hemorragia quirúrgica y transfusión» · GPC CENETEC/IMSS de uso terapéutico de hemocomponentes.
`),
    sheet('san-anticoagulantes', '03', 'Anticoagulantes, antiagregantes, reversión y trombocitopenia inducida por heparina', `
## Anticoagulantes, antiagregantes, reversión y trombocitopenia inducida por heparina

### Farmacología clínica de los anticoagulantes y antiagregantes
Una proporción creciente de los pacientes quirúrgicos recibe terapia antitrombótica por fibrilación auricular, tromboembolia venosa, válvulas protésicas o enfermedad coronaria. El cirujano debe equilibrar dos riesgos opuestos: **hemorragia perioperatoria** si mantiene el fármaco y **trombosis catastrófica** (infarto, EVC, trombosis valvular o de *stent*) si lo suspende de forma inadecuada.

| Fármaco | Mecanismo de acción | Vida media y eliminación | Monitoreo de laboratorio | Antídoto / reversión específica |
|---|---|---|---|---|
| **Heparina no fraccionada (HNF)** | Potencia **antitrombina III** → inhibe factores **IIa y Xa** (1:1) | 60–90 min; metabolismo reticuloendotelial (**segura en ERC grave**) | **TTPa** (o actividad anti-Xa) | **Sulfato de protamina** (reversión completa: 1 mg por cada 100 U de HNF activas) |
| **HBPM (enoxaparina)** | Potencia antitrombina III → inhibición predominante de **Xa** sobre IIa (4:1) | 4–6 h; **eliminación renal** (ajustar o evitar si TFG < 30 mL/min) | No rutinario (actividad **anti-Xa** en obesidad extrema, embarazo, ERC) | **Protamina** (reversión solo **parcial ~60%**: 1 mg/mg si < 8 h) |
| **Fondaparinux** | Pentasacárido sintético inhibidor selectivo indirecto de **Xa** vía AT III | 17–21 h; eliminación renal (contraindicado si TFG < 30 mL/min) | No rutinario (anti-Xa calibrado) | Sin antídoto específico (CCP activado o rFVIIa en sangrado grave) |
| **Warfarina / acenocumarol** | Inhibe vitamina K epóxido reductasa (**VKORC1**) → ↓ factores **II, VII, IX, X** y proteínas **C y S** | Warfarina ~36–42 h (efecto dura 4–5 días); metabolismo hepático CYP2C9 | **TP / INR** | **CCP de 4 factores** (inmediato) + **vitamina K IV** (efecto en 6–24 h) |
| **Dabigatrán (ACOD)** | Inhibidor directo competitivo de **trombina (IIa)** | 12–17 h; **80% eliminación renal** | TTPa/TT (cualitativos; TT normal descarta efecto); tiempo de ecarina | **Idarucizumab** (anticuerpo monoclonal 5 g IV, inmediato) |
| **Rivaroxabán / apixabán / edoxabán (ACOD)** | Inhibidores directos del **factor Xa** | 8–14 h; eliminación renal parcial (apixabán ~27%, menor que rivaroxabán ~35%) | Actividad **anti-Xa** calibrada (TP/TTPa normales no los excluyen) | **Andexanet alfa** (o **CCP de 4 factores** si no hay andexanet) |
| **AAS (ácido acetilsalicílico)** | Inhibición **irreversible** de COX-1 → bloquea TXA₂ | Efecto dura **7–10 días** (vida de la plaqueta) | No rutinario | Hemostasia local, TXA, DDAVP ± plaquetas en sangrado crítico |
| **Clopidogrel / prasugrel / ticagrelor** | Inhibidores del receptor plaquetario **P2Y12** (irreversibles: clopidogrel, prasugrel; **reversible**: ticagrelor) | Clopidogrel/prasugrel 5–7 días; ticagrelor 3–5 días | No rutinario (agregometría) | Medidas locales, TXA; plaquetas (menos efectivas con **ticagrelor** circulante) |

Un detalle fisiopatológico clásico de la **warfarina** es que al iniciarla caen primero el factor VII y la **proteína C** (vidas medias cortas de 4-8 horas), antes que los factores II y X (40-72 horas). Esto genera una ventana inicial paradójicamente **protrombótica** (riesgo de necrosis cutánea inducida por warfarina), por lo que en trombosis aguda siempre debe traslaparse con heparina al menos 5 días y hasta lograr dos INR terapéuticos consecutivos.

### Manejo perioperatorio: suspensión, terapia puente y reinicio (CHEST 2022)
Las guías del **American College of Chest Physicians (CHEST 2022)** y el estudio **PAUSE** simplificaron la conducta preoperatoria evitando puentes innecesarios que multiplican el sangrado:

| Fármaco | Suspensión antes de cirugía electiva | Terapia puente (HBPM / HNF) | Reinicio posoperatorio |
|---|---|---|---|
| **HNF IV terapéutica** | **4–6 horas** antes de la incisión | No aplica | 12–24 h tras hemostasia segura |
| **HBPM terapéutica** | **24 horas** antes (dar solo 50% de la dosis matutina previa si es esquema cada 24 h); profiláctica **12 horas** | No aplica | 24 h en riesgo bajo-moderado; **48–72 h** en riesgo hemorrágico alto |
| **Warfarina** | **5 días** antes; verificar **INR < 1.5** el día previo (si INR 1.5–1.9 valorar vitamina K oral 1–2 mg) | **NO de rutina** (ensayo **BRIDGE** demostró más sangrado sin menos EVC en FA). Solo en **alto riesgo trombótico** | La noche de la cirugía o al día siguiente (tarda 3–5 días en hacer efecto) |
| **ACOD (apixabán, rivaroxabán, edoxabán)** | **1–2 días** antes en riesgo hemorrágico bajo-moderado; **2–3 días** antes en riesgo alto (estudio PAUSE) | **NO requieren terapia puente** por su vida media corta y efecto rápido | 24 h en riesgo bajo-moderado; **48–72 h** en riesgo alto (inicio pleno en 2–4 h) |
| **Dabigatrán** | Si CrCl ≥ 50: 1–2 días (bajo) o 2–3 días (alto). Si **CrCl 30–50**: **2 días** (bajo) o **4 días** (alto) | **NO requiere terapia puente** | 24 h (bajo) o 48–72 h (alto) |
| **Antiagregantes** | **Mantener AAS** en prevención secundaria salvo neurocirugía o prostatectomía. Suspender **clopidogrel 5 días**, **ticagrelor 3–5 días**, **prasugrel 7 días** | Nunca suspender terapia dual en *stent* reciente sin cardiólogo | Retomar en 24–48 h en cuanto cese el sangrado quirúrgico |

**Indicaciones reales de terapia puente con HBPM en pacientes con warfarina (alto riesgo trombótico):**
- Prótesis valvular mecánica en posición **mitral** o modelos antiguos en posición aórtica (bola-jaula o monodisco), o prótesis mecánica aórtica con factores de riesgo adicionales.
- Fibrilación auricular con **CHA₂DS₂-VASc ≥ 7**, EVC o ataque isquémico transitorio en los **últimos 3 meses** o valvulopatía reumática mitral.
- Tromboembolia venosa (TVP/TEP) aguda en los **últimos 3 meses** o trombofilia grave (síndrome antifosfolípido, déficit de proteína C/S/AT).

**Pacientes con *stent* coronario:** diferir toda cirugía electiva al menos **30 días** tras un *stent* metálico convencional y **3 a 6 meses** tras un *stent* liberador de fármacos; si la cirugía es urgente dentro de esa ventana, mantener al menos el AAS y coordinar con cardiología.

### Protocolos de reversión en cirugía de urgencia o hemorragia grave
1. **Warfarina con hemorragia mayor o cirugía emergente:** administrar **concentrado de complejo protrombínico de 4 factores (CCP-4)** (25-50 UI/kg IV según INR; normaliza el INR en **10-15 minutos**, con mínimo volumen y sin requerir tipificación) **combinado con vitamina K 10 mg IV lenta** en 30 minutos (para sostener la reversión cuando pase el efecto de los factores del CCP a las 6-12 h). El **plasma fresco congelado (15 mL/kg)** es segunda línea cuando no se dispone de CCP-4.
2. **Heparina no fraccionada:** suspender la infusión y administrar **sulfato de protamina** lentamente (no exceder 50 mg en 10 min por riesgo de hipotensión, hipertensión pulmonar y anafilaxia, especialmente en diabéticos expuestos a insulina NPH o alérgicos al pescado). Dosis: **1 mg por cada 100 U** de HNF administradas en la última hora (0.5 mg/100 U si pasaron 30-60 min).
3. **HBPM:** si la última dosis fue hace **< 8 horas**, administrar protamina 1 mg por cada 1 mg de enoxaparina (0.5 mg/mg si pasaron 8-12 h); recordar que solo revierte ~60% de la actividad anti-Xa.
4. **Dabigatrán:** **idarucizumab 5 g IV** (dos bolos consecutivos de 2.5 g); efecto inmediato y completo. Si la ingestión ocurrió hace < 2 horas, considerar carbón activado; en caso extremo sin idarucizumab, el dabigatrán es dializable.
5. **Inhibidores del factor Xa (apixabán, rivaroxabán, edoxabán):** **andexanet alfa** donde exista disponibilidad; en la mayoría de los hospitales (incluido el entorno IMSS), la alternativa avalada es **CCP de 4 factores** (dosis fija de 2,000 UI o 50 UI/kg IV) más ácido tranexámico y carbón activado si la ingesta fue hace < 2-4 horas. No son dializables por su alta unión a proteínas.

### Trombocitopenia inducida por heparina (TIH / HIT)
Es fundamental distinguir dos formas radicalmente diferentes:
- **TIH tipo I (no inmune):** caída leve y transitoria de plaquetas (rara vez < 100,000/µL) en los **primeros 1-4 días** por efecto directo de la heparina; no causa trombosis y se resuelve sin suspender el fármaco.
- **TIH tipo II (inmune, la verdadera TIH quirúrgica):** reacción mediada por anticuerpos **IgG contra el complejo factor plaquetario 4 (PF4)-heparina**. Estos inmunocomplejos se unen al receptor FcγRIIa de las plaquetas, causando activación plaquetaria masiva, liberación de micropartículas procoagulantes y generación explosiva de trombina. Paradójicamente, pese a la trombocitopenia, **es un estado intensamente protrombótico** (riesgo de 30-50% de trombosis venosa profunda, TEP, isquemia arterial aguda de extremidades, infarto o necrosis hemorrágica suprarrenal bilateral). Es mucho más frecuente con **HNF** que con HBPM y casi inexistente con fondaparinux.

#### Diagnóstico clínico: puntuación de las 4T
| Criterio 4T | 2 puntos | 1 punto | 0 puntos |
|---|---|---|---|
| **Trombocitopenia** | Caída **> 50%** y nadir ≥ 20,000/µL | Caída 30–50% o nadir 10,000–19,000/µL | Caída < 30% o nadir < 10,000/µL |
| **Tiempo** (inicio de caída) | **Días 5–10** de exposición, o **≤ 1 día** si hubo heparina en los últimos 30 días | > día 10, fecha incierta, o ≤ 1 día si exposición previa hace 30–100 días | ≤ 4 días **sin** exposición previa reciente |
| **Trombosis** o secuelas | Nueva trombosis confirmada, necrosis cutánea en sitio de inyección o reacción sistémica tras bolo | Trombosis progresiva/recurrente, lesiones eritematosas o sospecha no confirmada | Ninguna |
| **oTras causas** de trombocitopenia | Ninguna otra causa evidente | Otra causa posible (sepsis, fármacos, circulación extracorpórea) | Otra causa definitiva |

**Interpretación y pruebas confirmatorias:** puntaje **0-3** (baja probabilidad, valor predictivo negativo > 98%: descartar TIH y no solicitar pruebas); **4-5** (probabilidad intermedia) y **6-8** (probabilidad alta). Ante **4T ≥ 4**, actuar de inmediato mientras se solicita **inmunoensayo ELISA anti-PF4/heparina** (muy sensible, puede dar falsos positivos) y, si resulta positivo o dudoso, confirmar con prueba funcional de **liberación de serotonina (SRA)**, el estándar de oro.

#### Tratamiento inmediato ante sospecha intermedia o alta (4T ≥ 4)
**Nunca esperar el resultado de laboratorio para iniciar el manejo:**
1. **Suspender TODA exposición a heparina:** HNF, HBPM, lavados de catéteres con heparina y catéteres impregnados con heparina.
2. **Iniciar de inmediato un anticoagulante no heparínico a dosis terapéutica:** **argatrobán** IV (inhibidor directo de trombina de metabolismo hepático, **de elección en insuficiencia renal**), **bivalirudina** (útil en falla hepática y renal combinada), **fondaparinux** subcutáneo o un **ACOD** (rivaroxabán o apixabán) en pacientes clínicamente estables.
3. **No iniciar warfarina** hasta que las plaquetas se hayan recuperado a **≥ 150,000/µL** (iniciarla antes precipita **gangrena venosa de extremidades** por depleción aguda de proteína C; si el paciente ya tomaba warfarina, suspenderla y administrar vitamina K). Al hacer la transición, traslapar al menos 5 días.
4. **No transfundir plaquetas de forma profiláctica** (alimentan la trombosis); reservarlas solo ante sangrado potencialmente mortal o cirugía de urgencia inaplazable.
5. Realizar **ultrasonido Doppler venoso bilateral** de extremidades inferiores para detectar TVP asintomática, lo que define la duración de la anticoagulación (4 semanas si TIH aislada sin trombosis; mínimo 3 meses si existe trombosis confirmada).

### Perlas de examen
- **Reversión urgente de warfarina:** **CCP de 4 factores + vitamina K IV** (el CCP actúa en minutos y supera al PFC).
- **Antídotos clave:** HNF → **protamina** (1 mg/100 U); HBPM → protamina (solo reversión parcial ~60%); dabigatrán → **idarucizumab**; anti-Xa (apixabán/rivaroxabán) → **andexanet alfa** (o CCP-4).
- **Suspensión preoperatoria:** warfarina **5 días** (puente con HBPM solo en alto riesgo trombótico tras el estudio **BRIDGE**); **ACOD no requieren terapia puente** (suspender 1-3 días según riesgo hemorrágico y función renal); clopidogrel **5 días**, prasugrel **7 días**, ticagrelor **3-5 días**.
- La **TIH tipo II** es causada por anticuerpos **IgG anti-PF4/heparina** entre los **días 5 y 10**, y su principal peligro es la **trombosis**, no el sangrado.
- Ante **puntaje 4T ≥ 4**, suspender **toda heparina** (incluidos lavados de catéter) e iniciar de inmediato un anticoagulante alternativo (**argatrobán**, bivalirudina, fondaparinux o ACOD) **sin esperar pruebas de confirmación**.
- **Nunca iniciar warfarina en TIH aguda** mientras las plaquetas estén **< 150,000/µL** (riesgo de gangrena venosa de extremidades).
- La **HNF** y el **argatrobán** son seguros en insuficiencia renal grave; las **HBPM**, el **fondaparinux** y el **dabigatrán** se acumulan cuando la depuración de creatinina cae por debajo de 30-50 mL/min.

### Referencias
Douketis JD et al. *Perioperative Management of Antithrombotic Therapy: An American College of Chest Physicians (CHEST) Clinical Practice Guideline*, Chest 2022;162:e207-e243 · Douketis JD et al. BRIDGE Trial, *NEJM* 2015 y PAUSE Study, *JAMA Intern Med* 2019 · Cuker A et al. *American Society of Hematology (ASH) Guidelines for Management of Venous Thromboembolism: Heparin-Induced Thrombocytopenia*, Blood Adv 2018 · Tomaselli GF et al. *ACC Expert Consensus Decision Pathway on Management of Bleeding in Patients on Oral Anticoagulants*, JACC 2020 · Sabiston, *Tratado de Cirugía*, 21.ª ed., cap. «Principios de cirugía y hemostasia» · Schwartz, *Principios de Cirugía*, 11.ª ed., cap. «Hemostasia, hemorragia quirúrgica y transfusión».
`),
  ],
  // __R1B_FIN__
};
