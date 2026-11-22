// R1 · fundamentos (1/2): profesionalismo, técnica, respuesta al trauma, perioperatorio, líquidos y cicatrización.
// Desarrollo de tema completo por subtema (base: material de Drive «CALOT-OS COMPLETO» + Sabiston, Schwartz, GPC IMSS).
import { sheet } from './hoja.js?v=20261122l';

export const R1A = {
  'ap-r1-profesionalismo': [
    sheet('prof-etica', '01', 'Profesionalismo, ética clínica y consentimiento informado', `
## Profesionalismo, ética clínica y consentimiento informado

### Definición
El profesionalismo médico es el conjunto de valores, conductas y relaciones que sustentan la confianza de la sociedad en los médicos. En cirugía se traduce en competencia técnica, honestidad, respeto, responsabilidad sobre los resultados, trabajo en equipo y el interés del paciente por encima del propio. La *Charter on Medical Professionalism* (ABIM, ACP y Federación Europea de Medicina Interna, 2002) lo resume en tres principios fundamentales —primacía del bienestar del paciente, autonomía del paciente y justicia social— y diez compromisos: competencia, honestidad, confidencialidad, relaciones apropiadas, mejora de la calidad, acceso a la atención, distribución justa de recursos, conocimiento científico, manejo de conflictos de interés y responsabilidad profesional.

La ética clínica es la aplicación práctica de esos principios a decisiones concretas al pie de la cama. En la residencia de Cirugía General es una competencia transversal: se evalúa todos los días en cómo se informa, cómo se pide un consentimiento, cómo se reporta un error y cómo se trata al equipo.

### Contexto en la residencia
- Los conflictos éticos más frecuentes en cirugía son: consentimiento informado deficiente, información incompleta al paciente o a la familia, decisiones en el paciente grave o terminal, negativa a tratamiento, limitación del esfuerzo terapéutico y conflictos dentro del equipo.
- Las quejas ante la CONAMED en especialidades quirúrgicas (Cirugía General, Ortopedia y Ginecología están entre las más demandadas) se relacionan con mayor frecuencia con fallas de comunicación que con errores técnicos puros.
- El residente es corresponsable: actúa bajo supervisión, pero responde por sus actos (ver la hoja de aspectos médico-legales).

### Principios de la bioética (Beauchamp y Childress)
| Principio | Significado | Ejemplo quirúrgico |
|---|---|---|
| Autonomía | Respetar la decisión informada de una persona capaz | Paciente que rechaza una colostomía aunque esté indicada |
| Beneficencia | Actuar en el mejor interés del paciente | Indicar laparotomía en abdomen agudo |
| No maleficencia | No causar daño innecesario (*primum non nocere*) | No operar a un paciente con riesgo prohibitivo sin beneficio real |
| Justicia | Distribución equitativa de recursos y trato igualitario | Priorización de quirófano y de camas de terapia |

Cuando dos principios chocan (típicamente autonomía contra beneficencia), el análisis debe ser explícito: ¿qué quiere el paciente?, ¿qué se le explicó?, ¿tiene capacidad?, ¿hay alternativas razonables?

### Capacidad y competencia
La **capacidad** es un juicio clínico que hace el médico tratante; la **competencia** es un concepto legal que define un juez. Un paciente tiene capacidad para una decisión concreta si puede:
1. Comprender la información relevante.
2. Apreciar cómo se aplica a su situación.
3. Razonar y comparar opciones.
4. Expresar una elección estable.

La capacidad es específica para cada decisión y puede fluctuar (delirio, intoxicación, choque, hipoglucemia). Antes de declarar incapaz a un paciente hay que corregir lo corregible y documentar la valoración; en casos dudosos se pide valoración por Psiquiatría.

### Consentimiento informado
No es una firma: es un **proceso de comunicación** que culmina en una autorización documentada. Elementos:
- **Información:** diagnóstico, naturaleza del procedimiento, beneficios esperados, riesgos frecuentes y riesgos graves aunque sean raros, alternativas (incluido no hacer nada) y pronóstico sin tratamiento.
- **Comprensión:** lenguaje sin tecnicismos, verificar con preguntas abiertas («¿me puede explicar con sus palabras qué le vamos a hacer?»); método *teach-back*.
- **Voluntariedad:** sin coacción ni manipulación.
- **Capacidad:** del paciente o de su representante legal.
- **Documentación:** carta de consentimiento firmada por el paciente (o representante), el médico y dos testigos, según la NOM-004-SSA3-2012.

En México, el Reglamento de la Ley General de Salud en Materia de Prestación de Servicios de Atención Médica (arts. 80 a 83) y la NOM-004 exigen carta de consentimiento al ingreso hospitalario y para cada procedimiento que implique riesgo: cirugía mayor, anestesia general o regional, procedimientos diagnósticos o terapéuticos invasivos de riesgo, amputaciones o mutilaciones, salpingoclasia y vasectomía, investigación clínica, necropsia hospitalaria y trasplante.

**Urgencia sin quién autorice:** cuando el paciente no puede decidir, no hay familiar o representante y existe riesgo inminente para la vida o la función, la decisión la toman dos médicos autorizados del hospital, dejando constancia por escrito en el expediente (art. 81 del Reglamento). Nunca se retrasa una cirugía de urgencia vital por un trámite.

**Menores de edad:** autorizan padres o tutor. El adolescente debe ser escuchado (asentimiento). En urgencias vitales prevalece el interés superior del menor.

### Negativa a tratamiento y alta voluntaria
Un adulto capaz puede rechazar cualquier tratamiento, incluso uno que le salve la vida. La conducta correcta:
1. Confirmar la capacidad.
2. Explicar de nuevo las consecuencias, ofrecer alternativas aceptables y preguntar por los motivos (miedo, costo, creencias, malas experiencias).
3. Involucrar a la familia si el paciente lo permite.
4. Documentar la negativa en formato específico, firmada, con testigos.
5. Mantener la atención: rechazar una cirugía no es rechazar todo el cuidado.

**Testigos de Jehová:** el adulto capaz puede rechazar hemoderivados; se respetan sus documentos de voluntad anticipada y se maximizan las estrategias de ahorro de sangre (hierro, eritropoyetina, hemostasia meticulosa, recuperador celular si lo acepta, ácido tranexámico). En menores con riesgo vital la jurisprudencia mexicana ha privilegiado el interés superior del niño; se da aviso a la autoridad y al comité de ética.

### Confidencialidad y secreto profesional
- El expediente pertenece a la institución y la información al paciente; solo se comparte con quien el paciente autoriza o con la autoridad que lo solicite legalmente.
- Excepciones legales: enfermedades de notificación obligatoria, lesiones por violencia (aviso al Ministerio Público; NOM-046-SSA2-2005 en violencia familiar y sexual), riesgo grave para terceros y orden judicial.
- **Redes sociales:** nunca publicar imágenes, estudios o descripciones que permitan identificar a un paciente (cara, tatuajes, fechas, número de cama, expediente). Aun «anonimizado», un caso en grupos de mensajería sin consentimiento es una falta.

### Comunicación de malas noticias (protocolo SPIKES)
| Paso | Qué hacer |
|---|---|
| S (*Setting*) | Lugar privado, sentado, sin interrupciones, familiares que el paciente quiera |
| P (*Perception*) | Preguntar qué sabe o qué entiende |
| I (*Invitation*) | Preguntar cuánta información desea |
| K (*Knowledge*) | Dar la noticia en lenguaje claro, en bloques pequeños, con aviso previo («lamento decirle que…») |
| E (*Emotions*) | Reconocer y validar emociones; silencio |
| S (*Strategy/Summary*) | Plan concreto, siguiente paso y disponibilidad |

### Revelación del error médico
Ante un evento adverso: atender primero al paciente, avisar al adscrito, informar al paciente y a la familia de forma honesta (qué pasó, qué se está haciendo, qué se hará para evitarlo), ofrecer disculpa sin especular sobre culpables, documentar de forma objetiva y notificar al sistema institucional de eventos adversos. Ocultar un error convierte una complicación defendible en una falta ética y legal.

### Limitación del esfuerzo terapéutico y cuidados paliativos
- No iniciar o retirar medidas desproporcionadas no es eutanasia; es buena práctica cuando no hay beneficio razonable.
- La Ley General de Salud (Título Octavo Bis, cuidados paliativos) reconoce el derecho del enfermo en situación terminal a rechazar tratamientos que prolonguen la agonía; varias entidades tienen Ley de Voluntad Anticipada.
- Las órdenes de no reanimación se discuten con el paciente o su representante, se documentan y se revisan periódicamente. No reanimar no significa no tratar: se mantienen analgesia, confort y dignidad.

### Profesionalismo en la conducta diaria
- Puntualidad, presentación adecuada, notas completas y legibles, entrega de guardia estructurada.
- Trato respetuoso a pacientes, enfermería, camilleros y compañeros; tolerancia cero al acoso, hostigamiento y discriminación (existen comités institucionales y la NOM-001-SSA3-2012 de residencias médicas protege derechos del residente).
- Reconocer los propios límites: pedir ayuda a tiempo no es debilidad, es seguridad del paciente.
- Conflictos de interés: declarar relaciones con la industria; no aceptar regalos que condicionen prescripciones.
- Autocuidado: fatiga, privación de sueño y *burnout* aumentan errores. El *burnout* en residentes quirúrgicos mexicanos se reporta en más de la mitad en algunas series.

### Cómo analizar un caso ético (método de los cuatro cuadrantes de Jonsen)
1. **Indicaciones médicas:** diagnóstico, pronóstico, objetivos, probabilidad de éxito.
2. **Preferencias del paciente:** capacidad, información, voluntad expresada o anticipada.
3. **Calidad de vida:** antes y después del tratamiento, desde la perspectiva del paciente.
4. **Rasgos contextuales:** familia, recursos, aspectos legales, religiosos, institucionales.

Con eso se identifica el conflicto, se buscan opciones aceptables y, si persiste, se consulta al Comité Hospitalario de Bioética.

### Perlas de examen y errores frecuentes
- El consentimiento lo obtiene, idealmente, quien hará el procedimiento o un miembro del equipo que lo conozca a fondo; no se delega en enfermería ni se firma en el pasillo camino al quirófano.
- Un consentimiento firmado sin información real no protege legalmente al médico.
- La capacidad se valora para cada decisión; un diagnóstico psiquiátrico no la anula automáticamente.
- En urgencia vital sin representante: dos médicos autorizan y se documenta.
- El familiar no puede exigir que se oculte el diagnóstico a un paciente capaz que desea saberlo (privilegio terapéutico solo excepcional y documentado).
- Respetar la autonomía no es abandonar: se sigue cuidando al paciente que rechaza la cirugía.

### Referencias
Beauchamp TL, Childress JF. *Principles of Biomedical Ethics*, 8.ª ed. · ABIM Foundation. *Medical Professionalism in the New Millennium: A Physician Charter* (2002) · NOM-004-SSA3-2012 del expediente clínico · Reglamento de la LGS en materia de prestación de servicios de atención médica · Ley General de Salud, Título Octavo Bis · Sabiston, cap. «Ethics and professionalism in surgery» · Baile WF et al. *SPIKES*, Oncologist 2000 · CONBIOÉTICA, guía de comités hospitalarios de bioética.
`),
    sheet('prof-legal', '02', 'Aspectos médico-legales: expediente clínico y responsabilidad profesional', `
## Aspectos médico-legales: expediente clínico y responsabilidad profesional

### Definición
La responsabilidad profesional médica es la obligación de responder por los daños que se causen en el ejercicio de la profesión. El marco mexicano parte de que la obligación del médico es **de medios, no de resultados**: se compromete a aplicar los conocimientos y recursos de la *lex artis* (estado del arte de la medicina), no a garantizar la curación. Una complicación no es, por sí sola, mala práctica; lo es cuando hay desviación de la *lex artis* que causa daño.

### Marco normativo relevante para el cirujano
| Instrumento | Qué regula |
|---|---|
| Constitución, art. 4.º | Derecho a la protección de la salud |
| Ley General de Salud (LGS) | Organización del sistema; derechos del paciente (art. 51 Bis), cuidados paliativos, donación y trasplante |
| Reglamento de la LGS en Prestación de Servicios de Atención Médica | Consentimiento, urgencias, responsabilidad de los establecimientos |
| NOM-004-SSA3-2012 | Expediente clínico |
| NOM-024-SSA3-2012 | Expediente clínico electrónico |
| NOM-001-SSA3-2012 | Organización de residencias médicas |
| NOM-045-SSA2-2005 | Vigilancia y control de infecciones nosocomiales |
| NOM-046-SSA2-2005 | Violencia familiar, sexual y contra las mujeres |
| NOM-253-SSA1-2012 | Disposición de sangre y componentes |
| Carta de los Derechos Generales de los Pacientes (CONAMED) | Diez derechos: atención adecuada, trato digno, información suficiente, decidir libremente, consentimiento, confidencialidad, segunda opinión, atención de urgencia, expediente, inconformidad |

### El expediente clínico (NOM-004-SSA3-2012)
Es el conjunto de documentos (escritos, gráficos, de imagen, electrónicos) en los que el personal de salud registra la atención. Es propiedad de la institución y del prestador, pero el paciente tiene derecho a la información que contiene; debe conservarse **por lo menos cinco años** a partir de la fecha del último acto médico.

**Requisitos generales de cada nota:** nombre completo del paciente, edad, sexo, número de expediente o cama, fecha y hora, nombre completo, firma y cédula profesional de quien la elabora; letra legible, sin abreviaturas ambiguas, sin tachaduras ni enmendaduras; las correcciones se hacen con una línea sobre el texto erróneo, anotando fecha, hora y firma.

**Notas que exige la norma en el paciente quirúrgico:**
- Historia clínica.
- Nota de ingreso (urgencias u hospitalización).
- Notas de evolución (al menos una por turno en hospitalización; formato SOAP).
- Nota de interconsulta.
- **Nota preoperatoria:** fecha de la cirugía, diagnóstico, plan quirúrgico, tipo de intervención, riesgo quirúrgico, cuidados y plan terapéutico preoperatorio, pronóstico.
- **Nota preanestésica** (por el anestesiólogo).
- **Nota postoperatoria** (inmediatamente al terminar): diagnóstico preoperatorio, operación planeada, operación realizada, diagnóstico postoperatorio, descripción de la técnica, hallazgos transoperatorios, reporte de gasas y compresas, incidentes y accidentes, cuantificación del sangrado y transfusiones, estudios transoperatorios, ayudantes, instrumentista, anestesiólogo y circulante, estado postquirúrgico inmediato, plan de manejo, pronóstico, envío de piezas a patología.
- Nota de egreso: motivo (curación, mejoría, alta voluntaria, defunción, traslado), resumen de evolución, diagnósticos finales, pronóstico y plan.
- Cartas de consentimiento bajo información.
- Hoja de enfermería, registro de transfusión, reportes de laboratorio e imagen.

### Tipos de responsabilidad
| Tipo | Fundamento | Consecuencia |
|---|---|---|
| Civil | Daño patrimonial o moral | Reparación del daño (indemnización) |
| Penal | Conducta tipificada como delito (lesiones u homicidio culposos, responsabilidad profesional, abandono de paciente, falsedad de documentos) | Prisión, multa, suspensión del ejercicio |
| Administrativa | Incumplimiento de normas (LGS, NOM, reglamentos institucionales) | Amonestación, suspensión, inhabilitación (en servidores públicos, Ley General de Responsabilidades Administrativas) |
| Laboral/institucional | Reglamento interno del IMSS o de la residencia | Sanciones laborales o académicas |

### Formas de culpa (mala práctica)
- **Negligencia:** omitir lo que se debía hacer (no revisar un laboratorio crítico, no valorar a un paciente que empeora).
- **Impericia:** falta de conocimiento o habilidad para el acto (operar sin la competencia requerida, sin supervisión).
- **Imprudencia:** actuar con precipitación o sin las precauciones debidas (sacar un drenaje sin indicación, egresar prematuramente).
- **Inobservancia de reglamentos:** incumplir protocolos o normas.
- **Dolo:** intención de causar daño (excepcional en medicina).

Para que exista responsabilidad se requiere: **acto u omisión + daño + nexo causal + culpa**.

### Mecanismos de resolución en México
1. **Queja institucional** (módulos de atención al derechohabiente en el IMSS).
2. **CONAMED** (Comisión Nacional de Arbitraje Médico, creada en 1996) y las comisiones estatales: orientación, gestión inmediata, conciliación y arbitraje. Es un medio alternativo, gratuito y especializado.
3. **Vía civil** (demanda de reparación del daño).
4. **Vía penal** (denuncia ante el Ministerio Público).
5. **Comisión Nacional de los Derechos Humanos** en instituciones públicas.

### Situaciones médico-legales frecuentes en la guardia de cirugía
- **Lesiones por violencia o accidentes:** dar aviso al Ministerio Público y elaborar la nota médica de lesiones (descripción objetiva, sin juicios de causalidad no verificados; clasificación según el Código Penal local: si tardan en sanar menos o más de 15 días, si ponen en peligro la vida, si dejan cicatriz permanente en la cara, etc.).
- **Cadena de custodia:** proyectiles, ropa y objetos se entregan etiquetados, en bolsa de papel, registrando quién los recibe. No manipular un proyectil con pinzas metálicas dentadas (altera estrías).
- **Defunción:** certificado de defunción; si la muerte es violenta o sospechosa, no se certifica: se da aviso al MP y el cuerpo pasa a medicina legal.
- **Alta voluntaria:** formato firmado, explicando riesgos; se documenta que se ofreció continuar el tratamiento.
- **Paciente detenido o bajo custodia:** se le atiende con los mismos derechos; la custodia no autoriza a romper la confidencialidad.
- **Interrupción del embarazo, violencia sexual:** NOM-046; atención obligatoria y aviso según protocolo.

### El residente ante la ley
- El residente es un médico titulado con cédula profesional; responde por sus actos, aunque la institución y el adscrito responsables de la supervisión comparten la responsabilidad (culpa *in vigilando* e *in eligendo*).
- La NOM-001-SSA3-2012 establece que el residente actúa bajo la dirección, asesoría y supervisión de los médicos adscritos; las guardias se programan con un máximo de tres por semana con intervalo de al menos dos días.
- Nunca firmar notas, recetas o certificados de actos que no se hicieron o no se presenciaron.
- Documentar las llamadas al adscrito (hora, qué se informó, qué indicó).

### Cómo protegerse (medicina defensiva bien entendida)
- La mejor defensa es una **buena relación médico-paciente**, una **buena nota** y un **consentimiento real**.
- Escribir en el momento, con hora, hallazgos objetivos, razonamiento clínico y plan.
- Registrar lo que se informó a la familia y quién recibió la información.
- Seguir guías y protocolos; si se decide apartarse, justificarlo por escrito.
- Evitar la medicina defensiva mal entendida (estudios innecesarios), que no protege y aumenta el daño y el costo.

### Perlas de examen y errores frecuentes
- Obligación de medios, no de resultados.
- Expediente: conservar mínimo 5 años; sin tachaduras; cada nota con nombre, firma y cédula.
- Nota postoperatoria: incluye el conteo de gasas y compresas y la cuantificación del sangrado.
- Elementos de responsabilidad: acto, daño, nexo causal y culpa.
- Las tres formas clásicas de culpa: negligencia, impericia, imprudencia.
- CONAMED: conciliación y arbitraje, no impone sanciones penales.
- Toda lesión de causa externa en urgencias implica aviso al Ministerio Público.

### Referencias
NOM-004-SSA3-2012 · NOM-001-SSA3-2012 · Ley General de Salud y Reglamento en materia de prestación de servicios de atención médica · CONAMED, *Recomendaciones para mejorar la práctica de la medicina* y Carta de los Derechos Generales de los Pacientes · Código Penal Federal (lesiones, responsabilidad profesional) · Sabiston, cap. «Surgical ethics and law».
`),
    sheet('prof-liderazgo', '03', 'Liderazgo, seguridad del paciente, investigación y docencia', `
## Liderazgo, seguridad del paciente, investigación y docencia

### Seguridad del paciente: definición y magnitud
La seguridad del paciente es la reducción del riesgo de daño innecesario asociado a la atención a un mínimo aceptable. El informe *To Err is Human* (Institute of Medicine, 1999) estimó entre 44 000 y 98 000 muertes anuales por errores en hospitales de EE. UU. La OMS calcula que uno de cada diez pacientes hospitalizados sufre un evento adverso y que cerca de la mitad son prevenibles; casi la mitad de los eventos adversos hospitalarios se relacionan con la cirugía.

### Conceptos básicos
| Término | Definición |
|---|---|
| Evento adverso | Daño causado por la atención, no por la enfermedad |
| Evento centinela | Evento adverso inesperado con muerte o daño grave permanente (cirugía en sitio equivocado, cuerpo extraño retenido) |
| Cuasi falla (*near miss*) | Error que no llegó al paciente o no causó daño |
| Error activo | Acto inseguro en la «punta» (quien está con el paciente) |
| Condición latente | Falla del sistema (diseño, carga de trabajo, equipo) que facilita el error |

**Modelo del queso suizo (James Reason):** el daño ocurre cuando se alinean los «agujeros» de varias barreras. La respuesta correcta a un error no es buscar culpables sino analizar el sistema (**análisis causa-raíz**) y fortalecer barreras, dentro de una **cultura justa** que distingue error humano (consolar), conducta de riesgo (asesorar) y conducta temeraria (sancionar).

### Acciones Esenciales para la Seguridad del Paciente (AESP, Consejo de Salubridad General, 2017)
1. Identificación correcta del paciente (al menos dos identificadores: nombre completo y fecha de nacimiento; nunca el número de cama).
2. Comunicación efectiva (escuchar, escribir, leer y confirmar las órdenes verbales; SBAR en entregas).
3. Seguridad en el proceso de medicación (medicamentos de alto riesgo: electrolitos concentrados, insulina, anticoagulantes, opioides).
4. Seguridad en los procedimientos (protocolo universal: marcaje del sitio, lista de verificación, tiempo fuera).
5. Reducción del riesgo de infecciones asociadas a la atención (higiene de manos en los cinco momentos de la OMS).
6. Reducción del riesgo de daño por caídas.
7. Registro y análisis de eventos centinela, eventos adversos y cuasi fallas.
8. Cultura de seguridad del paciente.

### Lista de verificación de cirugía segura (OMS, 2008)
| Momento | Puntos clave |
|---|---|
| **Entrada** (antes de la inducción) | Identidad, sitio, procedimiento y consentimiento confirmados; sitio marcado; equipo de anestesia y pulsioxímetro funcionando; alergias; vía aérea difícil o riesgo de aspiración; riesgo de hemorragia mayor de 500 ml (7 ml/kg en niños) con accesos y sangre disponibles |
| **Pausa quirúrgica** (antes de la incisión) | Presentación del equipo por nombre y función; confirmación de paciente, sitio y procedimiento; eventos críticos previstos (cirujano, anestesia, enfermería); profilaxis antibiótica en los últimos 60 min; imágenes disponibles |
| **Salida** (antes de que el paciente salga del quirófano) | Nombre del procedimiento; conteo de instrumental, gasas y agujas correcto; etiquetado de muestras; problemas con el equipo; aspectos clave de la recuperación |

Haynes et al. (*NEJM* 2009) mostraron una reducción de la mortalidad de 1.5% a 0.8% y de las complicaciones de 11% a 7% tras implementarla en ocho hospitales de distintos países.

### Comunicación y trabajo en equipo
- **SBAR** (Situación, Antecedentes, Evaluación, Recomendación) para llamar al adscrito o entregar guardia.
- **Comunicación en circuito cerrado:** quien recibe la orden la repite y confirma su ejecución.
- **Speak up / CUS** («Estoy preocupado, me siento incómodo, es un problema de seguridad»): cualquier miembro del equipo puede detener un procedimiento inseguro.
- **Entrega de guardia estructurada** (I-PASS: gravedad, resumen, lista de tareas por hacer, conciencia situacional y plan de contingencia, síntesis por quien recibe) reduce errores prevenibles.

### Liderazgo quirúrgico
El cirujano es el líder natural del quirófano, pero el liderazgo moderno es **situacional y compartido**: dirigir en crisis (instrucciones claras, asignación de tareas), escuchar en la planeación y apoyar en la docencia. Habilidades no técnicas evaluadas por el sistema NOTSS: conciencia situacional, toma de decisiones, comunicación y trabajo en equipo, y liderazgo. En crisis (hemorragia masiva, paro), el líder declara la situación, pide ayuda, asigna roles y verbaliza el plan.

### Calidad y mejora continua
- Ciclo **PDSA** (planear, hacer, estudiar, actuar).
- Indicadores de estructura, proceso y resultado (Donabedian).
- Sesiones de morbimortalidad: análisis no punitivo de complicaciones y muertes, con enfoque en sistemas y aprendizaje.
- Registros de resultados (por ejemplo, ACS NSQIP) para comparar contra lo esperado.

### Investigación clínica
**Marco ético y legal:** Código de Núremberg (1947), Declaración de Helsinki (última revisión de la AMM en 2024), Informe Belmont (respeto, beneficencia, justicia), Pautas CIOMS y el Reglamento de la LGS en Materia de Investigación para la Salud, que clasifica los estudios como **sin riesgo, de riesgo mínimo y de riesgo mayor que el mínimo**. Todo protocolo requiere aprobación del Comité de Ética en Investigación y del Comité de Investigación (en el IMSS, registro en SIRELCIS) y consentimiento informado de los participantes, salvo excepciones justificadas.

**Diseños de estudio y nivel de evidencia:**
| Diseño | Fortaleza | Limitación |
|---|---|---|
| Revisión sistemática y metaanálisis de ECA | Máxima evidencia | Heterogeneidad, sesgo de publicación |
| Ensayo clínico aleatorizado | Controla confusores | Costo, validez externa, dificultad de cegar en cirugía |
| Cohorte | Incidencia, riesgo relativo, temporalidad | Confusión, pérdidas en el seguimiento |
| Casos y controles | Enfermedades raras, rápido | Sesgo de memoria; razón de momios |
| Transversal | Prevalencia | No establece causalidad |
| Serie de casos | Genera hipótesis | Sin grupo control |

**Conceptos estadísticos mínimos:** sensibilidad, especificidad, valores predictivos (dependen de la prevalencia), razón de verosimilitud, riesgo relativo, reducción absoluta del riesgo y número necesario a tratar (NNT = 1 / RAR), valor de p e intervalo de confianza, error tipo I (alfa) y tipo II (beta), poder estadístico (1 − beta). Sistema GRADE para calidad de la evidencia y fuerza de recomendación.

**Escribir una tesis de residencia:** pregunta de investigación con formato PICO, revisión de la literatura, justificación, hipótesis, objetivos, diseño, tamaño de muestra, variables operacionalizadas, análisis estadístico, consideraciones éticas, cronograma. Registrar y aprobar antes de recolectar datos.

### Docencia en cirugía
- El residente enseña desde R1 (internos, estudiantes) y aprende enseñando.
- La pirámide de Miller (sabe, sabe cómo, demuestra cómo, hace) guía la evaluación; las **Actividades Profesionales Confiables (EPA)** describen tareas que el residente puede hacer con supervisión decreciente.
- Modelo **Zwisch** de autonomía en el quirófano: *show and tell* → ayuda activa → ayuda pasiva → solo supervisión.
- La simulación (nudos, sutura, laparoscopia en caja de entrenamiento, FLS) reduce la curva de aprendizaje antes de operar pacientes.
- Retroalimentación efectiva: oportuna, específica, centrada en conductas y no en la persona (modelo «preguntar–decir–preguntar»).

### Perlas de examen y errores frecuentes
- Identificación del paciente: dos identificadores, nunca la cama.
- Pausa quirúrgica: antes de la incisión, con todo el equipo.
- Profilaxis antibiótica dentro de los 60 min previos a la incisión.
- El análisis causa-raíz busca fallas de sistema, no culpables.
- Riesgo mínimo, sin riesgo y mayor que el mínimo: clasificación mexicana de la investigación.
- NNT = 1 / reducción absoluta del riesgo.
- Error tipo I: rechazar una hipótesis nula verdadera (falso positivo).

### Referencias
OMS. *Guidelines for Safe Surgery* (2009) · Haynes AB et al. *NEJM* 2009;360:491-9 · Consejo de Salubridad General. *Acciones Esenciales para la Seguridad del Paciente* (2017) · Reason J. *Human error*. BMJ 2000 · Starmer AJ et al. I-PASS, *NEJM* 2014 · Declaración de Helsinki (AMM) · Reglamento de la LGS en Materia de Investigación para la Salud · Sabiston, cap. «Patient safety» y «Evidence-based surgery».
`),
  ],
  'ap-r1-tecnicas': [
    sheet('tec-bases', '01', 'Bases técnicas, tiempos fundamentales, asepsia y antisepsia', `
## Bases técnicas, tiempos fundamentales, asepsia y antisepsia

### Definición
La técnica quirúrgica es el conjunto de procedimientos manuales e instrumentales ordenados que permiten operar con el menor daño posible al tejido. Sus pilares son: **asepsia** (evitar que lleguen microorganismos a los tejidos: material estéril, campo estéril), **antisepsia** (destruir o inhibir microorganismos sobre tejidos vivos: piel, mucosas, manos), **manejo delicado de los tejidos** (principios de Halsted) y **tiempos quirúrgicos fundamentales**.

### Principios de Halsted
1. Manejo gentil de los tejidos.
2. Hemostasia meticulosa.
3. Preservación de la irrigación.
4. Asepsia estricta.
5. Mínima tensión en los tejidos.
6. Aproximación precisa de los planos.
7. Obliteración del espacio muerto.

Siguen vigentes: cada infección de herida, dehiscencia o fuga anastomótica suele tener detrás la violación de alguno.

### Tiempos quirúrgicos fundamentales
| Tiempo | Objetivo | Instrumental y recursos |
|---|---|---|
| **Diéresis (incisión y corte)** | Abrir planos de forma limpia y suficiente | Bisturí (hojas n.º 10, 20-22 para piel; n.º 11 punzante; n.º 15 fina), tijera de Metzenbaum (tejido delicado), de Mayo (tejido denso, suturas), electrocauterio |
| **Hemostasia** | Controlar el sangrado | Compresión, pinzas (Kelly, mosquito, Rochester), ligadura, electrocoagulación, grapas, energía avanzada, hemostáticos tópicos |
| **Exposición y disección** | Ver y separar estructuras por planos | Separadores (Farabeuf, Richardson, Deaver, maleable, autoestáticos como Balfour y Gosset), disección roma y cortante, pinzas de disección con y sin dientes |
| **Síntesis** | Reconstruir planos | Porta agujas (Mayo-Hegar), suturas, grapas, adhesivos tisulares |

### Incisiones abdominales
- **Línea media (supra o infraumbilical):** rápida, versátil, exangüe, acceso a toda la cavidad; preferida en urgencia y trauma. Mayor riesgo de eventración (10-20%).
- **Subcostal (Kocher), Chevron (bilateral):** vía biliar, hígado, páncreas, bazo.
- **McBurney (oblicua) y Rocky-Davis (transversa):** apendicectomía abierta; respetan la musculatura (incisión que divulsiona fibras).
- **Pfannenstiel:** transversa suprapúbica; ginecología y pelvis; excelente cosmética.
- **Paramedia, transversa, toracoabdominal:** indicaciones específicas.
- Las **líneas de tensión de la piel** (Langer, Kraissl) orientan incisiones con mejor cicatriz.

### Asepsia
**Clasificación de Spaulding de los dispositivos:**
| Categoría | Contacto | Requisito | Ejemplos |
|---|---|---|---|
| Crítico | Tejido estéril o vascular | Esterilización | Instrumental quirúrgico, implantes, catéteres |
| Semicrítico | Mucosas o piel no íntegra | Desinfección de alto nivel | Endoscopios, laringoscopios |
| No crítico | Piel íntegra | Desinfección de nivel bajo o intermedio | Brazaletes de presión, estetoscopios |

**Métodos de esterilización:**
- **Vapor a presión (autoclave):** el más usado, barato y confiable; 121 °C durante 15-30 min o 134 °C durante 3-10 min, según el ciclo.
- **Calor seco:** 160-180 °C durante 1-2 h (instrumental que no tolera humedad).
- **Óxido de etileno:** termosensibles; requiere aireación prolongada (tóxico, carcinógeno).
- **Plasma de peróxido de hidrógeno:** termosensibles, ciclo corto, sin residuos tóxicos.
- **Radiación gamma:** industrial (material desechable).
- **Glutaraldehído 2% y ácido peracético:** desinfección de alto nivel o esterilización química por inmersión.

Indicadores: físicos (temperatura, presión, tiempo), químicos (cinta testigo que cambia de color, indicadores internos) y **biológicos** (esporas de *Geobacillus stearothermophilus* para vapor; *Bacillus atrophaeus* para óxido de etileno): son el estándar de oro.

**Conducta en quirófano:** el área estéril es la cara anterior de la bata del pecho a la cintura y las mangas hasta 5 cm por arriba del codo; la espalda no es estéril; las manos se mantienen por arriba de la cintura; no se da la espalda al campo; ante la duda de contaminación, se considera contaminado y se cambia.

### Antisepsia
**Lavado quirúrgico de manos:** retirar anillos y relojes, uñas cortas sin esmalte artificial; cepillado o fricción de 2 a 5 minutos con clorhexidina al 4% o yodopovidona al 7.5-10%, o fricción con solución alcohólica (técnica sin agua) igual de eficaz según la OMS.

**Preparación de la piel del paciente:**
- **Baño preoperatorio** con jabón (con o sin clorhexidina) la noche previa o el mismo día.
- **Vello:** no retirarlo de rutina; si estorba, usar **rastrillo eléctrico (clipper)** inmediatamente antes de la cirugía. El rastrillo de navaja aumenta la infección por microabrasiones.
- **Antiséptico:** la **clorhexidina al 2% en alcohol isopropílico al 70%** es superior a la yodopovidona acuosa para prevenir infección del sitio quirúrgico (Darouiche, *NEJM* 2010: 9.5% contra 16.1% en cirugía limpia-contaminada). La OMS y los CDC recomiendan soluciones antisépticas con base alcohólica.
- Aplicar desde el sitio de incisión hacia la periferia, esperar a que **seque por completo** (riesgo de incendio con el electrocauterio y campos con alcohol líquido).
- Precauciones: clorhexidina no en mucosas, oído medio ni meninges; en mucosas y genitales usar yodopovidona acuosa.

**Antisépticos principales:**
| Agente | Espectro | Inicio | Efecto residual | Comentario |
|---|---|---|---|---|
| Alcohol 70% | Amplio, no esporicida | Muy rápido | No | Inflamable |
| Clorhexidina | Gram +, gram −, levaduras; débil en micobacterias | Intermedio | Sí (6 h o más) | Persistente; ototóxica |
| Yodopovidona | Amplio | Intermedio | Mínimo | Se inactiva con sangre y materia orgánica |
| Peróxido de hidrógeno | Amplio | Rápido | No | Daña tejido de granulación; no es antiséptico ideal en heridas |

### Hemostasia: recursos
- **Mecánicos:** compresión, pinzas, ligaduras, puntos transfictivos, grapas, clips.
- **Térmicos:** electrocirugía monopolar (requiere placa de retorno; corte con onda continua y coagulación con onda intermitente de alto voltaje), bipolar (la corriente pasa solo entre las puntas: útil cerca de nervios y en portadores de marcapasos), energía avanzada (sellado bipolar de vasos de hasta 7 mm; bisturí ultrasónico de hasta 5 mm, según el dispositivo).
- **Químicos y biológicos:** celulosa oxidada, colágeno microfibrilar, gelatina, trombina, sellantes de fibrina.
- **Farmacológicos sistémicos:** ácido tranexámico.

**Riesgos de la electrocirugía:** quemadura en la placa de retorno mal colocada (debe ir sobre músculo bien irrigado, piel seca, lejos de prótesis metálicas), quemaduras por contacto con superficies metálicas, incendio en quirófano (triángulo: oxidante, combustible y fuente de ignición), interferencia con marcapasos y desfibriladores (programar en modo asíncrono o desactivar terapias; preferir bipolar), humo quirúrgico (aspirarlo). En laparoscopia: falla de aislamiento, acoplamiento directo y acoplamiento capacitivo.

### Posiciones quirúrgicas
Decúbito supino, Trendelenburg e inverso, litotomía, decúbito lateral (renal), prono y navaja sevillana. Proteger prominencias óseas, nervio cubital (codo), peroneo (cabeza del peroné en litotomía) y plexo braquial (abducción del brazo menor de 90°).

### Instrumental básico
- **Corte:** bisturí, tijeras.
- **Prensión:** pinzas de disección, Allis, Babcock (atraumática para víscera), Foerster, Duval.
- **Hemostasia:** Kelly, Crile, mosquito, Rochester-Pean, Kocher (con dientes).
- **Separación:** manuales y autoestáticos.
- **Síntesis:** porta agujas, engrapadoras.
- **Especial:** pinzas intestinales atraumáticas (Doyen), vasculares (Satinsky, DeBakey, bulldog).

### Perlas de examen y errores frecuentes
- Antisepsia es sobre tejido vivo; asepsia, evitar la contaminación.
- No rasurar con navaja; si hace falta, clipper justo antes de operar.
- Clorhexidina-alcohol es la preparación de piel de elección; esperar a que seque.
- Indicador biológico: estándar de oro para validar la esterilización.
- Bipolar en portadores de marcapasos y cerca de estructuras nobles.
- La incisión de elección en trauma abdominal es la línea media.

### Referencias
Schwartz, cap. «Surgical infections» y «Fundamentals of surgical technique» · Sabiston, cap. «Surgical infections and antibiotic use» · OMS. *Global guidelines for the prevention of surgical site infection*, 2.ª ed. (2018) · CDC/HICPAC, guía de prevención de infección del sitio quirúrgico (2017) · Darouiche RO et al. *NEJM* 2010;362:18-26 · NOM-045-SSA2-2005.
`),
    sheet('tec-sutura', '02', 'Material de sutura, engrapadoras, drenajes y taller de sutura', `
## Material de sutura, engrapadoras, drenajes y taller de sutura

### Definición
La sutura es cualquier material que se usa para aproximar tejidos o ligar vasos hasta que la cicatrización aporte suficiente fuerza. La elección depende del tejido, del tiempo que necesita soporte, del riesgo de infección y del calibre necesario.

### Características que definen una sutura
- **Origen:** natural (catgut, seda, lino) o sintético.
- **Absorción:** absorbible (pierde fuerza en menos de 60 días y desaparece) o no absorbible.
- **Estructura:** monofilamento (menor reacción e infección, más memoria y nudos menos seguros) o multifilamento/trenzado (manejo y nudo excelentes, pero efecto mecha y mayor colonización).
- **Calibre (USP):** de 5 (más grueso) a 11-0 (más fino). En piel facial 5-0 o 6-0; en piel de tronco 3-0 o 4-0; en fascia 0 o 1 (o 2-0 en técnica de puntos pequeños); vascular 5-0 a 7-0.
- **Fuerza tensil, memoria, elasticidad, coeficiente de fricción y reacción tisular.**

### Suturas absorbibles
| Sutura | Estructura | Fuerza tensil conservada | Absorción completa | Usos |
|---|---|---|---|---|
| Catgut simple | Natural, monofilamento | 7-10 días | ~70 días | Mucosas, ligaduras superficiales (en desuso) |
| Catgut crómico | Natural | 10-21 días | ~90 días | Mucosas, ginecología |
| Ácido poliglicólico (Dexon) | Trenzada | ~65% a 2 semanas | 60-90 días | Planos internos |
| Poliglactina 910 (Vicryl) | Trenzada | ~75% a 2 semanas, ~50% a 3 semanas | 56-70 días | Anastomosis, ligaduras, subcutáneo |
| Poliglactina de absorción rápida (Vicryl Rapide) | Trenzada | ~50% a 5 días | ~42 días | Piel, mucosa oral, perineo |
| Poliglecaprona 25 (Monocryl) | Monofilamento | 50-60% a 1 semana, 20-30% a 2 semanas | 91-119 días | Intradérmica, subcutáneo |
| Polidioxanona (PDS) | Monofilamento | ~60% a 4 semanas, ~40% a 6 semanas | 180-240 días | Cierre de aponeurosis, vía biliar, anastomosis pediátricas |
| Poligliconato (Maxon) | Monofilamento | ~65% a 3 semanas | ~180 días | Aponeurosis |

### Suturas no absorbibles
| Sutura | Estructura | Características | Usos |
|---|---|---|---|
| Seda | Natural trenzada | Excelente manejo, alta reacción; pierde fuerza en meses | Fijación de drenajes, ligaduras (cada vez menos) |
| Nylon (poliamida) | Monofilamento | Mucha memoria, poca reacción | Piel |
| Polipropileno (Prolene) | Monofilamento | Muy inerte, resistente a infección; requiere más lazadas | Vascular, hernias, aponeurosis, piel |
| Poliéster (Ethibond, Mersilene) | Trenzado | Muy fuerte, durable | Cardiaco, fijación de mallas, ortopedia |
| Acero | Mono o multifilamento | La más fuerte | Esternón |
| PTFE expandido | Monofilamento | Inerte | Vascular con injertos de PTFE |

### Agujas
- **Cuerpo:** recta, 1/4, 3/8, 1/2 y 5/8 de círculo (las de 1/2 y 5/8 trabajan en espacios profundos).
- **Punta:** cortante convencional (filo hacia el interior de la curva) y **reverso cortante** (filo hacia el exterior; menor riesgo de desgarro: piel y tendones); **ahusada o cilíndrica** (perfora sin cortar: intestino, vasos, peritoneo); **roma** (aponeurosis, hígado, riñón; protege contra punciones accidentales); punta de espátula (oftalmología).
- Se toma con el porta agujas entre el tercio medio y el tercio posterior, nunca en el engaste.

### Técnicas de sutura
- **Puntos simples separados:** mejor control de tensión; si uno falla, los demás sostienen.
- **Continuo (surgete):** rápido, distribuye tensión; si se rompe, se abre todo.
- **Colchonero vertical (Donati):** eversión de bordes en piel con tensión.
- **Colchonero horizontal:** hemostasia y bordes friables.
- **Intradérmico (subcuticular):** mejor cosmética.
- **Puntos en U, en jareta y en ocho:** hemostasia o cierre de orificios (muñón apendicular, sitio de trocar).
- **Puntos de Gambee, Lembert, Connell y Cushing:** anastomosis intestinales (Lembert seroso, Connell invertido de todo el espesor).

### Cierre de la pared abdominal (laparotomía media)
- **Técnica de puntos pequeños (small bites):** puntadas a 5 mm del borde y separadas 5 mm, con sutura monofilamento de absorción lenta 2-0 y aguja pequeña. El ensayo STITCH (Deerenberg, *Lancet* 2015) redujo la hernia incisional al año de 21% a 13% frente a puntos grandes.
- Relación longitud de sutura/longitud de herida **mayor o igual a 4:1** (regla de Jenkins).
- Sutura continua, solo aponeurosis (no incluir músculo ni grasa), tensión suficiente para aproximar sin estrangular.
- Guías de la European Hernia Society (2015, actualizadas 2022) recomiendan esta técnica y considerar malla profiláctica en pacientes de alto riesgo (aneurisma de aorta, obesidad).

### Retiro de puntos de piel
| Región | Días |
|---|---|
| Cara y párpados | 3-5 |
| Cuello | 5-7 |
| Cuero cabelludo | 7-10 |
| Tórax, abdomen, espalda | 7-14 |
| Extremidades | 10-14 |
| Sobre articulaciones, palmas y plantas | 14 |

### Nudos
- **Nudo cuadrado (llano):** dos lazadas en sentido opuesto; base de todos.
- **Nudo de cirujano:** doble vuelta en la primera lazada para que no se afloje bajo tensión.
- **Nudo deslizante:** se baja y se asegura con lazadas opuestas.
- Número de lazadas: más en monofilamentos (polipropileno y nylon requieren 5-6) que en trenzadas (3-4).
- Técnicas: a dos manos, a una mano, instrumental; en laparoscopia, intracorpóreo y extracorpóreo (Roeder).
- Cortar las colas a 3 mm en seda o trenzadas y más largas en monofilamento.

### Engrapadoras quirúrgicas
| Tipo | Función | Uso típico |
|---|---|---|
| Lineal (TA, TX) | Coloca dos o tres hileras de grapas sin cortar | Cierre de muñón, bronquio |
| Lineal cortante (GIA, endo-GIA) | Coloca dos hileras a cada lado y corta en medio | Anastomosis laterolaterales, sección de intestino, estómago, pulmón |
| Circular (EEA, CDH) | Anastomosis terminoterminal o terminolateral con dos hileras circulares | Colorrectal baja, esofágica, gastroyeyunal |
| Cutánea | Cierre de piel | Heridas largas |

**Altura de la grapa (según tejido):** cargas vasculares o delgadas (2.0-2.5 mm abiertas), estándar o medianas (3.5 mm, cerrada ~1.5 mm) para intestino delgado y colon, gruesas (4.1-4.8 mm, cerrada ~2.0 mm) para estómago o recto. La grapa cerrada adopta forma de «B»: comprime sin necrosar, permitiendo que pase sangre hacia el borde. Elegir mal la carga (demasiado corta en tejido grueso) causa fuga; demasiado alta en tejido delgado causa sangrado.

### Drenajes quirúrgicos
**Objetivos:** evacuar una colección establecida (absceso), controlar una fístula o fuga (pancreática, biliar) y vigilar (sangrado, fuga). El drenaje «profiláctico» de rutina **no** está indicado en colecistectomía no complicada, apendicectomía (incluso complicada), colectomía ni tiroidectomía: no reduce complicaciones y aumenta infección, dolor y estancia.

**Tipos:**
| Tipo | Mecanismo | Ejemplos | Comentario |
|---|---|---|---|
| Pasivo abierto | Capilaridad y gravedad | Penrose, canalizaciones | Puerta de entrada de bacterias |
| Pasivo cerrado | Gravedad hacia bolsa | Sonda en bolsa | — |
| Activo cerrado (succión) | Presión negativa | Jackson-Pratt, Hemovac, Blake | Menos infección; ideal bajo colgajos |
| Sumidero (*sump*) | Doble luz con entrada de aire | Saratoga | Colecciones de alto gasto |
| Sello de agua | Unidireccional | Sonda pleural | Tórax |

**Reglas:** sale por contraabertura (no por la herida), en trayecto recto y declive, fijo a la piel, sin acodaduras; se cuantifica y describe el gasto (seroso, serohemático, hemático, biliar, purulento, intestinal, quiloso). Se retira cuando el gasto es mínimo (habitualmente menos de 30-50 ml en 24 h) y no hay fuga. En sospecha de fístula pancreática se mide amilasa en el líquido (más de tres veces la sérica a partir del tercer día define fístula según el ISGPS).

**Sonda en T (Kehr):** tras exploración de vía biliar; colangiografía por la sonda antes de retirarla; se retira en general después de 2-3 semanas, cuando el trayecto ya maduró (más tiempo en pacientes con esteroides o desnutrición).

### Taller de sutura: lista práctica
1. Postura: brazos relajados, porta agujas con pulgar y anular en los anillos, índice como guía.
2. Entrada de la aguja perpendicular a la piel (90°), seguir la curvatura con giro de muñeca.
3. Distancia del borde igual a la profundidad del tejido; eversión de los bordes en piel.
4. Puntos equidistantes, sin isquemia (el edema postoperatorio aprieta más).
5. Practicar: punto simple, colchonero vertical y horizontal, surgete anclado e intradérmico; nudos a dos manos, a una mano e instrumental, primero en modelo y luego bajo supervisión.

### Perlas de examen y errores frecuentes
- Monofilamento en heridas contaminadas; trenzado tiene efecto mecha.
- Cierre de laparotomía: small bites, 4:1, PDS o similar.
- Aguja ahusada para vísceras; reverso cortante para piel.
- Polipropileno: el más inerte, de elección en vascular y en hernias.
- Drenaje profiláctico de rutina: no reduce absceso en apendicitis complicada ni en colectomía.
- Grapa demasiado corta en tejido grueso = fuga.

### Referencias
Schwartz, cap. «Surgical techniques» · Sabiston, cap. «Principles of surgical technique» · Deerenberg EB et al. *Lancet* 2015;386:1254-60 (STITCH) · European Hernia Society, guías de cierre de pared abdominal (2015, 2022) · Fichas técnicas de los fabricantes de sutura · ISGPS, definición de fístula pancreática (2016).
`),
    sheet('tec-lap', '03', 'Cirugía laparoscópica: principios, equipo y neumoperitoneo', `
## Cirugía laparoscópica: principios, equipo y neumoperitoneo

### Definición
La cirugía de mínima invasión realiza procedimientos a través de pequeñas incisiones con una óptica y una cámara, en un espacio creado por insuflación de gas (neumoperitoneo). Frente a la cirugía abierta ofrece menos dolor, menor íleo, menos infección de herida, menos hernias incisionales, estancia más corta y regreso más rápido a la actividad. Desventajas: pérdida de la percepción táctil y de la visión tridimensional (en sistemas 2D), curva de aprendizaje, costo y efectos fisiológicos del neumoperitoneo.

### Historia breve
Kelling (1901, «celioscopia» en perros), Jacobaeus (1910, en humanos), Veress (1938, aguja con obturador romo), Semm (procedimientos ginecológicos y la primera apendicectomía laparoscópica, 1983), Mühe (1985) y Mouret (1987) con las primeras colecistectomías laparoscópicas. Hoy la colecistectomía laparoscópica es el estándar.

### Equipo
| Componente | Características |
|---|---|
| **Óptica (telescopio)** | 10 o 5 mm; 0° (visión frontal) o 30° (permite «mirar alrededor»; la más versátil) |
| **Cámara** | Alta definición o 4K; 3D en algunos sistemas |
| **Fuente de luz** | Xenón o LED, transmitida por cable de fibra óptica (calienta: no apoyar sobre campos) |
| **Insuflador** | Controla presión intraabdominal y flujo de CO2 |
| **Monitor** | Frente al cirujano, a la altura de los ojos o ligeramente por debajo |
| **Trocares** | 5, 10-12 y 15 mm; con y sin cuchilla; ópticos |
| **Instrumental** | Pinzas de prensión atraumáticas y traumáticas, disectores (Maryland), tijeras, gancho, aspiración-irrigación, porta agujas, aplicadores de clips, engrapadoras endoscópicas, bolsas de extracción |
| **Energía** | Monopolar, bipolar, sellado avanzado, ultrasónico |

### Por qué CO2
Es incombustible, muy soluble en sangre (reduce el riesgo de embolia grave), se elimina por los pulmones y es barato. Desventajas: se absorbe y produce hipercapnia y acidosis respiratoria, e irrita el peritoneo (dolor referido al hombro). Alternativas raras: óxido nitroso, helio, argón y laparoscopia sin gas (elevadores de pared).

### Creación del neumoperitoneo
**Técnica cerrada (aguja de Veress):** en la cicatriz umbilical o en el **punto de Palmer** (3 cm por debajo del reborde costal izquierdo en la línea medioclavicular, útil en cirugías previas o en obesidad). Pruebas de posición correcta: chasquidos al atravesar fascia y peritoneo, prueba de la gota (la solución desciende libremente), aspiración negativa de sangre o contenido intestinal y **presión inicial baja (menor de 8-10 mmHg)** con flujo libre.

**Técnica abierta (Hasson):** incisión y disección bajo visión hasta el peritoneo, introducción de un trocar romo fijado con puntos. Recomendable en cirugías previas, embarazo, niños y para el cirujano en formación. Reduce el riesgo de lesión vascular mayor (casi exclusiva de la técnica cerrada) aunque no elimina la lesión intestinal.

**Trocar óptico:** se avanza bajo visión con la óptica dentro.

**Presión de trabajo:** 12-15 mmHg en adultos; 8-12 mmHg con buena relajación neuromuscular es suficiente en muchos casos y reduce los efectos fisiológicos y el dolor (estrategia de baja presión). En niños, 6-12 mmHg según edad.

### Fisiología del neumoperitoneo
| Sistema | Efecto | Consecuencia clínica |
|---|---|---|
| Cardiovascular | Aumento de la presión intraabdominal: con presiones moderadas aumenta inicialmente el retorno venoso; por arriba de ~15 mmHg comprime la cava y lo disminuye; aumenta la resistencia vascular sistémica | Hipotensión, menor gasto cardiaco, sobre todo en hipovolemia o cardiopatía |
| Reflejo vagal | Distensión peritoneal brusca | Bradicardia y asistolia al insuflar (suspender insuflación, atropina) |
| Respiratorio | Elevación del diafragma, menor distensibilidad y capacidad residual funcional, mayor presión pico; absorción de CO2 | Hipercapnia y acidosis respiratoria: aumentar la ventilación minuto; riesgo de atelectasia e intubación selectiva al subir el diafragma |
| Renal | Compresión de vena renal y parénquima, liberación de ADH | Oliguria transitoria (no indica hipovolemia necesariamente) |
| Esplácnico | Menor flujo portal y mesentérico | Relevante en isquemia mesentérica o cirrosis |
| Neurológico | Aumento de la presión intracraneal (hipercapnia y aumento de presión intratorácica) | Contraindicación relativa en hipertensión intracraneal |
| Posición | Trendelenburg aumenta presión venosa central e intracraneal; anti-Trendelenburg favorece estasis venosa en piernas | Profilaxis tromboembólica, vigilar presión arterial |

### Complicaciones específicas
- **Lesión por trocar o aguja:** vascular (aorta, iliacas, cava; los vasos epigástricos inferiores en trocares laterales: transiluminar y colocar bajo visión) e intestinal (con frecuencia inadvertida, se presenta como peritonitis en 24-72 h).
- **Embolia gaseosa por CO2:** rara pero grave; caída súbita de la ETCO2, hipotensión, arritmia, soplo «en rueda de molino». Manejo: suspender la insuflación y desinflar, oxígeno al 100%, posición de Durant (decúbito lateral izquierdo con Trendelenburg), aspirar por catéter venoso central, reanimación.
- **Enfisema subcutáneo** (crepitación; benigno en general, pero si hay hipercapnia grave se pausa el neumoperitoneo), **neumotórax y neumomediastino** (paso por defectos diafragmáticos o hiato).
- **Lesión térmica** por energía (acoplamiento directo, capacitivo, falla de aislamiento): puede ser fuera del campo visual y manifestarse días después.
- **Hernia en el sitio del trocar:** cerrar la aponeurosis en trocares de 10 mm o más (sobre todo umbilicales y con cuchilla).
- **Dolor de hombro** por irritación diafragmática: evacuar el gas al final, maniobra de reclutamiento pulmonar.
- **Hipotermia** por gas frío y seco en procedimientos largos.

### Contraindicaciones
- **Absolutas:** inestabilidad hemodinámica que no tolera el neumoperitoneo, imposibilidad de tolerar anestesia general.
- **Relativas (hoy muchas superadas con experiencia):** adherencias por cirugía previa, obesidad mórbida (de hecho, la vía laparoscópica es preferible), embarazo (segura en cualquier trimestre según SAGES; idealmente segundo trimestre), coagulopatía no corregida, cirrosis avanzada con hipertensión portal, distensión intestinal masiva, peritonitis generalizada con inestabilidad, cardiopatía o neumopatía grave, hipertensión intracraneal.

**Laparoscopia en embarazo (SAGES):** técnica abierta o Veress/óptico lejos del útero (punto de Palmer), presión de 10-15 mmHg, decúbito lateral izquierdo, capnografía, profilaxis tromboembólica, vigilancia fetal antes y después.

### Ergonomía y principios técnicos
- **Triangulación:** la óptica en el centro y los instrumentos de trabajo a los lados; ángulo de manipulación entre instrumentos ideal de unos 60° (aceptable 45-75°); evitar el «paralelismo» (instrumentos en línea con la óptica).
- Monitor frente al cirujano, en el eje de las manos y el blanco quirúrgico («línea de visión coaxial»).
- Mesa a la altura en que los codos queden en 90-120°.
- Efecto fulcro: el instrumento se mueve en sentido inverso a la mano; la escala del movimiento cambia según cuánto del instrumento esté dentro.
- **Visión crítica de seguridad (SAGES)** en colecistectomía: triángulo hepatocístico libre de grasa y tejido fibroso, tercio inferior de la vesícula separado del lecho hepático, y solo dos estructuras entrando en la vesícula.
- **Conversión a cirugía abierta:** no es una complicación, es una decisión de seguridad (sangrado no controlable, anatomía no identificable, lesión que no se puede reparar por laparoscopia).

### Variantes
Laparoscopia de puerto único (SILS), mano asistida, cirugía robótica (visión 3D, muñeca articulada, eliminación del temblor; mayor costo, sin ventajas claras de resultado en muchos procedimientos generales) y cirugía endoscópica transluminal por orificios naturales (NOTES).

### Formación
El programa **FLS** (*Fundamentals of Laparoscopic Surgery*) de SAGES evalúa conocimientos y cinco tareas en caja de entrenamiento: transferencia de objetos (*peg transfer*), corte de precisión, ligadura con lazo, sutura con nudo extracorpóreo y con nudo intracorpóreo. La práctica en simulador mejora el desempeño en el quirófano.

### Perlas de examen y errores frecuentes
- Presión de neumoperitoneo: 12-15 mmHg en adultos.
- Veress correcta: presión inicial menor de 10 mmHg con flujo libre.
- Bradicardia al insuflar = reflejo vagal.
- Caída súbita de ETCO2 con colapso = embolia de CO2: desinflar, Durant, aspirar.
- Oliguria intraoperatoria en laparoscopia: efecto del neumoperitoneo, no indica por sí misma reponer volumen.
- Cerrar la fascia de los trocares de 10 mm o más.
- Embarazo no contraindica laparoscopia.

### Referencias
SAGES. *Guidelines for the use of laparoscopy during pregnancy* (2017) y *Safe cholecystectomy program* · Schwartz, cap. «Minimally invasive surgery» · Sabiston, cap. «Principles of laparoscopic surgery» · EAES, consenso sobre neumoperitoneo (Neudecker et al., *Surg Endosc* 2002) · Programa FLS.
`),
  ],
  'ap-r1-rbt': [
    sheet('rbt-mediadores', '01', 'Estímulos, mediadores y cambios hemodinámicos, metabólicos y bioquímicos', `
## Respuesta biológica al trauma: estímulos, mediadores y cambios

### Definición
La respuesta biológica (o metabólica) al trauma es el conjunto de cambios neuroendocrinos, inflamatorios, inmunológicos, hemodinámicos y metabólicos que el organismo despliega ante una agresión —cirugía, trauma, quemadura, infección— con el fin de mantener la perfusión de órganos vitales, aportar sustratos energéticos y reparar el tejido. Es adaptativa cuando es proporcional y autolimitada; se vuelve dañina cuando es excesiva o persistente (síndrome de respuesta inflamatoria sistémica, disfunción orgánica, catabolismo prolongado).

### Fases clásicas
**Cuthbertson (1930s):**
| Fase | Duración | Características |
|---|---|---|
| *Ebb* (reflujo o hipodinámica) | 12-48 h | Hipovolemia, bajo gasto, vasoconstricción, menor consumo de O2, hipotermia relativa, hiperglucemia; prioridad: perfusión |
| *Flow* (flujo o hiperdinámica) | Días a semanas | Hipermetabolismo, aumento del gasto cardiaco y del consumo de O2, catabolismo proteico, fiebre; luego transición a la fase anabólica |

**Moore** dividió la convalecencia en cuatro etapas: lesión (adrenérgico-corticoide), punto de inflexión, recuperación de fuerza muscular (anabólica) y ganancia de grasa (ver la hoja de convalecencia).

### Estímulos desencadenantes
- **Hipovolemia** y disminución del volumen circulante efectivo (barorreceptores aórticos y carotídeos, receptores de volumen auriculares).
- **Dolor y lesión tisular** (aferentes nociceptivos al hipotálamo).
- **Patrones moleculares asociados a daño (DAMPs):** HMGB1, ADN y péptidos formilados mitocondriales, proteínas de choque térmico, ATP extracelular, ácido úrico.
- **Patrones moleculares asociados a patógenos (PAMPs):** lipopolisacárido (endotoxina) de gramnegativos, peptidoglucano y ácido lipoteicoico, flagelina, ADN bacteriano.
- **Hipoxia, acidosis, hipotermia e hipoglucemia.**
- **Ansiedad y emociones** (corteza y sistema límbico).
- **Ayuno e inmovilidad.**

DAMPs y PAMPs se reconocen por **receptores de reconocimiento de patrones**: receptores tipo Toll (TLR4 para LPS, TLR9 para ADN), receptores NOD y el **inflamasoma** (NLRP3), que activa caspasa 1 y libera IL-1 beta e IL-18. Esto explica por qué el trauma estéril y la sepsis producen respuestas tan parecidas.

### Respuesta neuroendocrina
| Eje u hormona | Cambio | Efecto principal |
|---|---|---|
| Hipotálamo-hipófisis-suprarrenal (CRH → ACTH → cortisol) | Cortisol aumenta varias veces en horas; se pierde el ritmo circadiano | Gluconeogénesis, proteólisis, lipólisis, resistencia a insulina, antiinflamatorio, sensibiliza el vaso a catecolaminas |
| Simpático-suprarrenal (noradrenalina, adrenalina) | Aumento inmediato | Taquicardia, vasoconstricción, glucogenólisis, lipólisis, liberación de glucagón, inhibición de insulina |
| Glucagón | Aumenta | Glucogenólisis y gluconeogénesis |
| Insulina | Disminuye en la fase *ebb*; luego normal o alta con **resistencia periférica** | Hiperglucemia del estrés |
| Hormona antidiurética (ADH, vasopresina) | Aumenta (osmolaridad, volumen, dolor, opioides, náusea) | Retención de agua libre, vasoconstricción esplácnica; riesgo de hiponatremia |
| Renina-angiotensina-aldosterona | Activado | Retención de sodio y agua, excreción de potasio, vasoconstricción |
| Hormona de crecimiento | Aumenta, con resistencia periférica e IGF-1 bajo | Lipólisis; anabolismo deficiente |
| Eje tiroideo | T3 baja, rT3 alta (síndrome del eutiroideo enfermo) | Ahorro energético; no se trata |
| Gonadales | Testosterona y estrógenos bajos | Contribuyen al catabolismo |
| Prolactina, beta endorfinas | Aumentan | Analgesia endógena, inmunomodulación |

### Mediadores inflamatorios
**Citocinas proinflamatorias:**
- **TNF-alfa:** la primera (pico a los 30-90 min); fiebre, catabolismo muscular, activación endotelial, caquexia; en exceso, choque.
- **IL-1 beta:** fiebre (prostaglandina E2 hipotalámica), anorexia, liberación de reactantes de fase aguda.
- **IL-6:** se eleva en 2-6 h; su concentración **se correlaciona con la magnitud de la lesión** y con la mortalidad; principal inductor de proteínas de fase aguda hepáticas.
- **IL-8:** quimiotaxis de neutrófilos.
- **IL-12, IFN-gamma, IL-17, IL-18:** respuesta celular.

**Antiinflamatorios:** IL-10 (principal), IL-4, IL-13, antagonista del receptor de IL-1, receptores solubles de TNF, TGF-beta, cortisol.

**Otros mediadores:**
- **Eicosanoides** (ácido araquidónico): prostaglandinas (PGE2 fiebre y vasodilatación; PGI2 antiagregante), tromboxano A2 (vasoconstrictor y agregante), leucotrienos (permeabilidad y broncoconstricción).
- **Complemento:** C3a y C5a (anafilatoxinas), C5b-9.
- **Óxido nítrico:** vasodilatación; su producción masiva por iNOS explica la vasoplejía del choque séptico.
- **Cininas** (bradicinina), histamina, serotonina, factor activador de plaquetas.
- **Endotelio:** pierde su glucocálix, expresa moléculas de adhesión (selectinas, ICAM-1, VCAM-1) y se vuelve procoagulante; aumenta la permeabilidad (fuga capilar, «tercer espacio»).
- **Coagulación e inflamación** se potencian mutuamente (inmunotrombosis): factor tisular, trampas extracelulares de neutrófilos.

### SIRS, CARS y PICS
- **SIRS** (síndrome de respuesta inflamatoria sistémica): dos o más de temperatura mayor de 38 °C o menor de 36 °C, FC mayor de 90, FR mayor de 20 o PaCO2 menor de 32 mmHg, leucocitos mayores de 12 000, menores de 4000 o más de 10% de bandas. Es sensible pero poco específico; Sepsis-3 lo retiró de la definición de sepsis.
- **CARS** (síndrome de respuesta antiinflamatoria compensadora, Bone 1996): inmunosupresión simultánea —menor expresión de HLA-DR en monocitos, apoptosis de linfocitos, anergia— que explica infecciones secundarias tardías.
- **PICS** (inflamación persistente, inmunosupresión y catabolismo): fenotipo de pacientes críticos que sobreviven la fase aguda pero quedan con PCR alta, linfopenia, desgaste muscular, mala cicatrización y estancias prolongadas en terapia.

### Cambios hemodinámicos
- Taquicardia, aumento de la contractilidad, vasoconstricción periférica, cutánea, esplácnica y renal con preservación del flujo cerebral y coronario.
- Fuga capilar con edema intersticial y redistribución de líquido al «tercer espacio»; hipovolemia relativa.
- Retención de sodio y agua: **oliguria fisiológica postoperatoria** las primeras 24-48 h y movilización del líquido secuestrado (diuresis) entre el día 3 y 5.
- En la fase *flow*, estado hiperdinámico: gasto cardiaco alto y resistencias bajas.

### Cambios metabólicos
**Carbohidratos:**
- Glucogenólisis inmediata: el glucógeno hepático (unos 75-100 g) se agota en 12-24 h de ayuno; el glucógeno muscular solo sirve al músculo.
- Gluconeogénesis hepática y renal a partir de alanina y glutamina (del músculo), lactato (ciclo de Cori) y glicerol (de la lipólisis).
- **Hiperglucemia del estrés** por catecolaminas, cortisol, glucagón y resistencia periférica a la insulina (menor translocación de GLUT4). La hiperglucemia mayor de 180-200 mg/dl se asocia con infección y mala evolución.

**Proteínas:**
- Proteólisis del músculo esquelético (vía ubiquitina-proteasoma) para dar aminoácidos a la gluconeogénesis y a la síntesis de proteínas de fase aguda y de reparación.
- **Balance nitrogenado negativo:** la excreción de nitrógeno ureico puede llegar a 15-20 g/día en trauma grave y sepsis y más en quemaduras extensas (cada gramo de nitrógeno equivale a 6.25 g de proteína, o unos 30 g de músculo).
- Balance nitrogenado = (proteína ingerida en g / 6.25) − (nitrógeno ureico urinario en g/24 h + 4).
- La glutamina es el aminoácido más abundante liberado por el músculo; combustible del enterocito y del linfocito.

**Lípidos:**
- Lipólisis por catecolaminas, cortisol, glucagón y GH: los ácidos grasos son la principal fuente de energía en el estrés.
- A diferencia del ayuno simple, la **cetogénesis está atenuada** por la insulina relativamente alta, de modo que el cerebro no se adapta y se sigue consumiendo proteína.

| | Ayuno simple | Estrés (trauma, sepsis) |
|---|---|---|
| Gasto energético | Disminuye | Aumenta |
| Insulina | Baja | Normal o alta con resistencia |
| Cetosis | Marcada (adaptación) | Escasa |
| Proteólisis | Disminuye tras adaptación | Persistente y acelerada |
| Glucosa | Normal o baja | Alta |
| Respuesta a la alimentación | Revierte el catabolismo | Lo atenúa pero no lo revierte |

**Gasto energético estimado** según la agresión: cirugía electiva no complicada +0-10%; fracturas de huesos largos +15-30%; politraumatismo +30-50%; sepsis +20-60%; quemaduras mayores de 40% de superficie corporal, hasta el doble.

### Cambios bioquímicos y de laboratorio
| Parámetro | Cambio | Causa |
|---|---|---|
| Glucosa | Aumenta | Hormonas contrarreguladoras y resistencia a insulina |
| Lactato | Aumenta | Hipoperfusión y glucólisis aerobia acelerada por catecolaminas |
| Sodio | Tiende a bajar | ADH y soluciones hipotónicas |
| Potasio | Aumenta inicialmente (lisis celular) y luego se pierde en orina | Aldosterona |
| Urea | Aumenta | Proteólisis e hipovolemia |
| Albúmina, prealbúmina, transferrina | Disminuyen (reactantes negativos) | Reprogramación hepática y fuga capilar |
| PCR, fibrinógeno, ferritina, haptoglobina, alfa-1 antitripsina, procalcitonina | Aumentan | IL-6 |
| Hierro y zinc séricos | Disminuyen | Secuestro (hepcidina) |
| Leucocitos | Aumentan con neutrofilia y linfopenia | Cortisol y catecolaminas |

### Factores que modifican la respuesta
- **Magnitud de la lesión** (cirugía abierta mayor que laparoscópica), duración, hipotermia, transfusión, infección y dolor.
- **Paciente:** edad avanzada, fragilidad, desnutrición, obesidad, diabetes, uso de esteroides crónicos (riesgo de insuficiencia suprarrenal), inmunosupresión.
- **Segundos golpes (*second hit*):** una nueva agresión (cirugía, infección, transfusión) sobre un sistema ya activado provoca respuestas desproporcionadas y falla orgánica múltiple.

### Modulación de la respuesta (aplicación práctica)
- Reanimación oportuna y control del foco (hemorragia, contaminación).
- Cirugía de mínima invasión y técnica cuidadosa.
- Analgesia multimodal y bloqueos regionales (la analgesia epidural torácica atenúa la respuesta endocrina en cirugía abdominal).
- Normotermia.
- Evitar ayunos prolongados: carga de carbohidratos preoperatoria y alimentación temprana.
- Control glucémico con meta de 140-180 mg/dl en el paciente crítico (NICE-SUGAR: el control estricto 81-108 mg/dl aumentó la mortalidad).
- En quemados: propranolol y oxandrolona reducen el hipermetabolismo y el catabolismo.
- Suplementar esteroides en pacientes con uso crónico (ver hoja de convalecencia).

### Perlas de examen y errores frecuentes
- Fase *ebb* = hipometabólica, primeras 24-48 h; fase *flow* = hipermetabólica.
- IL-6 es la citocina que mejor se correlaciona con la gravedad; TNF-alfa la primera en elevarse.
- En el estrés no hay adaptación cetogénica: el catabolismo proteico continúa aunque se alimente al paciente.
- La oliguria de las primeras 24 h puede ser fisiológica (ADH y aldosterona), pero siempre se descarta hipovolemia.
- La albúmina baja en el postoperatorio refleja inflamación, no desnutrición aguda.
- La T3 baja del paciente grave no se trata con levotiroxina.

### Referencias
Sabiston, cap. «The inflammatory response» y «Metabolism in surgical patients» · Schwartz, cap. «Systemic response to injury and metabolic support» · Cuthbertson DP, 1932 · Moore FD. *Metabolic care of the surgical patient*, 1959 · Bone RC. *Crit Care Med* 1996 · Gentile LF et al. PICS. *J Trauma Acute Care Surg* 2012 · NICE-SUGAR. *NEJM* 2009.
`),
    sheet('rbt-convalecencia', '02', 'Fase de convalecencia y recuperación postoperatoria', `
## Fase de convalecencia y recuperación postoperatoria

### Definición
La convalecencia es el periodo que va desde el fin de la agresión hasta la recuperación de la función y la composición corporal previas. Incluye la resolución de la respuesta inflamatoria, la transición de catabolismo a anabolismo, la reparación tisular, la recuperación de la fuerza muscular y la reposición de los depósitos de grasa. Su duración depende de la magnitud de la lesión y de la reserva del paciente: días tras una colecistectomía laparoscópica, meses tras un politraumatismo o una sepsis abdominal.

### Las cuatro etapas de Moore
| Etapa | Duración aproximada | Hormonas dominantes | Clínica | Metabolismo |
|---|---|---|---|---|
| **I. Lesión (adrenérgico-corticoide)** | 2-4 días tras cirugía mayor | Catecolaminas, cortisol, ADH, aldosterona, glucagón | Taquicardia, fiebre leve, íleo, apatía, dolor, oliguria con retención de sodio y agua | Catabolismo: balance nitrogenado negativo, pérdida de peso, hiperglucemia |
| **II. Punto de inflexión (retirada corticoide)** | 1-2 días, alrededor del día 3-6 | Descenso de cortisol y catecolaminas | Mejora el ánimo, regresa el apetito, se reanuda el tránsito, diuresis espontánea del líquido secuestrado | Balance nitrogenado se acerca a cero; excreción de sodio y agua |
| **III. Fuerza muscular (anabólica temprana)** | 2-5 semanas | Insulina, hormona de crecimiento, IGF-1, andrógenos | Recupera la deambulación y la fuerza; cicatriz madura | Balance nitrogenado positivo (2-4 g/día); ganancia de masa magra lenta (unos 100-200 g de músculo por día como máximo) |
| **IV. Ganancia de grasa (anabólica tardía)** | Meses | Normalización hormonal | Recupera el peso, regresa a la actividad completa | Balance de carbono positivo, reposición de tejido adiposo |

**Idea clave:** el músculo se pierde rápido (días) y se recupera lento (semanas o meses); por eso es crucial minimizar la fase catabólica y empezar la rehabilitación temprano.

### Fisiología de la transición
- La resolución de la inflamación no es pasiva: intervienen **mediadores proresolución** derivados de omega-3 y del ácido araquidónico (lipoxinas, resolvinas, protectinas, maresinas), la apoptosis de neutrófilos y su eliminación por macrófagos (eferocitosis), que viran del fenotipo M1 (proinflamatorio) al M2 (reparador).
- Desciende la IL-6 y la PCR (la PCR normalmente alcanza su pico a las 48-72 h y desciende después; una PCR que vuelve a subir o no baja al tercer a quinto día sugiere complicación infecciosa o fuga anastomótica).
- La sensibilidad a la insulina se recupera gradualmente (la resistencia puede durar semanas tras cirugía mayor).
- Se moviliza el líquido intersticial: diuresis espontánea y descenso del peso. Si el paciente no la presenta y sigue con balance positivo, buscar complicaciones (sepsis, falla cardiaca, renal).

### Factores que prolongan la convalecencia
- Magnitud de la cirugía, complicaciones (infección, fuga, reintervención) y transfusión.
- Edad, fragilidad, sarcopenia, desnutrición y comorbilidades.
- Inmovilidad: el reposo en cama provoca pérdida de 1-1.5% de fuerza muscular por día, atelectasias, tromboembolia, desacondicionamiento cardiovascular, resistencia a la insulina y delirio.
- Dolor mal controlado, opioides en exceso (íleo, náusea, sedación) y sondas y drenajes innecesarios que limitan la movilización.
- Ayuno prolongado.
- Trastornos del sueño y delirio.

### Fatiga postoperatoria
Sensación de agotamiento que puede durar semanas tras cirugía mayor. Se relaciona con pérdida de masa muscular, desacondicionamiento, alteraciones del sueño, anemia, ánimo depresivo y la propia inflamación. Mejora con movilización temprana, nutrición adecuada y prehabilitación.

### Recuperación acelerada (ERAS): cómo acortar la convalecencia
Los protocolos ERAS (*Enhanced Recovery After Surgery*) agrupan intervenciones con evidencia que, juntas, reducen la respuesta al estrés, las complicaciones (hasta 30-50% en cirugía colorrectal) y la estancia (2-3 días menos) sin aumentar readmisiones. El beneficio se correlaciona con el grado de **apego** al protocolo (más de 70-80%).

| Momento | Intervención |
|---|---|
| Preoperatorio | Información y educación; **prehabilitación** (ejercicio, nutrición, apoyo psicológico durante 2-6 semanas); dejar de fumar y de beber alcohol (al menos 4 semanas); corrección de anemia; tamizaje nutricional; sin ayuno prolongado (sólidos 6 h, líquidos claros 2 h) y **bebida de carbohidratos** 2-3 h antes (evitarla en diabéticos descontrolados o con vaciamiento gástrico retrasado); evitar premedicación sedante de acción larga; profilaxis tromboembólica y antibiótica |
| Intraoperatorio | Anestesia de acción corta; analgesia regional (epidural torácica en cirugía abierta; bloqueos de pared o infiltración en laparoscopia); mínima invasión; **normotermia**; fluidoterapia dirigida a objetivos, evitando sobrecarga; profilaxis de náusea y vómito; evitar sondas nasogástricas y drenajes de rutina |
| Postoperatorio | Analgesia multimodal ahorradora de opioides; dieta oral desde el mismo día o día 1; masticar chicle; **movilización el día de la cirugía**; retiro temprano de sonda vesical (24 h en la mayoría); suspender líquidos IV en cuanto tolere la vía oral; control glucémico; criterios de alta objetivos; seguimiento telefónico |

**Criterios de alta habituales:** dolor controlado con analgésicos orales, tolerancia a dieta sin náusea, movilización sin ayuda o al nivel previo, ausencia de signos de complicación, paciente y familia de acuerdo con el egreso, y acceso a seguimiento.

### Prehabilitación
Programa multimodal antes de una cirugía electiva mayor (sobre todo oncológica) para aumentar la reserva funcional: ejercicio aeróbico y de fuerza, optimización nutricional (proteína de 1.2-1.5 g/kg/día, suplementos orales en desnutridos) y reducción de la ansiedad. Mejora la capacidad funcional (prueba de caminata de 6 minutos) y en algunos estudios reduce complicaciones, sobre todo en pacientes frágiles.

### Insuficiencia suprarrenal y esteroides perioperatorios
Los pacientes que han recibido el equivalente a 20 mg/día o más de prednisona durante más de 3 semanas (o con datos de Cushing) pueden tener supresión del eje y no montar la respuesta de cortisol; los que reciben 5 mg o menos se consideran sin supresión. La insuficiencia suprarrenal aguda se manifiesta con hipotensión refractaria a líquidos y vasopresores, hiponatremia, hiperpotasemia, hipoglucemia, fiebre y dolor abdominal.

**Dosis de estrés sugeridas (hidrocortisona), además de la dosis habitual:**
| Agresión | Ejemplo | Hidrocortisona |
|---|---|---|
| Menor | Hernia inguinal, procedimientos con anestesia local | Dosis habitual (o 25 mg el día de la cirugía) |
| Moderada | Colecistectomía, hemicolectomía, artroplastia | 50-75 mg el día de la cirugía, reducir en 1-2 días |
| Mayor | Pancreatoduodenectomía, esofagectomía, cirugía cardiaca, trauma, sepsis | 100 mg IV en la inducción y 50 mg cada 6-8 h (o 200 mg/día en infusión) por 2-3 días, luego reducción |

Las recomendaciones son orientativas y varían entre guías (hay tendencia a dosis menores que las clásicas); en la duda, ante hipotensión inexplicable en un usuario crónico de esteroides, administrar 100 mg IV de hidrocortisona.

### Recuperación tras enfermedad crítica
El paciente que sale de terapia intensiva puede desarrollar el **síndrome post-cuidados intensivos**: debilidad adquirida en la UCI (polineuromiopatía), deterioro cognitivo, ansiedad, depresión y estrés postraumático; afecta también a los familiares. La prevención se basa en el paquete ABCDEF (analgesia, despertar y respiración espontánea, elección de sedación, delirio, movilización temprana, familia).

### Papel del cirujano en la convalecencia
- Detectar desviaciones del curso esperado: fiebre persistente, taquicardia inexplicada, íleo prolongado, PCR que no desciende, ausencia de diuresis espontánea, deterioro del estado mental.
- Alimentar pronto, movilizar pronto, retirar dispositivos pronto.
- Planear el egreso desde el ingreso (red de apoyo, rehabilitación, cuidados de estomas y heridas).
- Seguimiento: revisión de herida, resultados de patología, rehabilitación nutricional, regreso al trabajo (incapacidad por cirugía laparoscópica 1-2 semanas; abierta mayor, 4-6 semanas o más, según la actividad).

### Perlas de examen y errores frecuentes
- Moore: lesión → inflexión → fuerza muscular → ganancia de grasa.
- La diuresis espontánea entre los días 3 y 5 marca el punto de inflexión.
- PCR que no desciende al día 3-5 tras cirugía colorrectal: sospechar fuga anastomótica.
- Prednisona 20 mg/día o más por más de 3 semanas: suponer supresión suprarrenal.
- La bebida de carbohidratos preoperatoria reduce la resistencia a la insulina postoperatoria.
- Reposo en cama = pérdida diaria de fuerza; movilizar desde el día 0.

### Referencias
Moore FD. *Metabolic care of the surgical patient* · Sabiston, cap. «Metabolism in surgical patients» · Gustafsson UO et al. *Guidelines for perioperative care in elective colorectal surgery: ERAS Society recommendations* (2018) · Ljungqvist O et al. *JAMA Surg* 2017 · Woodcock T et al. *Guidelines for the management of glucocorticoids during the peri-operative period* (Anaesthesia 2020) · Carli F, prehabilitación, *Br J Surg* 2017.
`),
  ],

  'ap-r1-perioperatorio': [
    sheet('peri-preop', '01', 'Evaluación preoperatoria y optimización', `
## Evaluación preoperatoria y optimización

### Definición
La valoración preoperatoria es el proceso clínico que identifica, cuantifica y, cuando es posible, reduce el riesgo de un paciente ante un procedimiento concreto. Su objetivo no es «dar el pase», sino responder tres preguntas: ¿cuál es el riesgo?, ¿se puede disminuir antes de operar?, ¿el beneficio de la cirugía justifica ese riesgo? El resultado se comunica al paciente en el consentimiento y se traduce en un plan perioperatorio.

### Epidemiología
Se realizan más de 300 millones de cirugías al año en el mundo; la mortalidad perioperatoria global en cirugía no cardiaca es de 0.5-2% y las complicaciones mayores afectan a 7-15% de los pacientes. Las complicaciones cardiovasculares (lesión miocárdica, infarto, arritmias) y pulmonares son las principales causas de muerte prevenible. En México, la GPC IMSS de valoración perioperatoria en cirugía no cardiaca recomienda una valoración dirigida y no estudios indiscriminados.

### Componentes de la valoración
1. **Historia clínica dirigida:** comorbilidades, capacidad funcional, cirugías y anestesias previas (complicaciones, vía aérea difícil, hipertermia maligna en familiares), sangrado anormal, medicamentos (incluidos herbolarios), alergias, tabaquismo, alcohol y drogas.
2. **Exploración física:** signos vitales, IMC, vía aérea (Mallampati, apertura oral, movilidad cervical), cardiopulmonar, estado nutricional, fragilidad.
3. **Estratificación del riesgo** (paciente y procedimiento).
4. **Estudios complementarios** solo si cambian la conducta.
5. **Optimización** y plan.

### Clasificación ASA (estado físico)
| Clase | Descripción | Ejemplo |
|---|---|---|
| I | Sano | Sin enfermedad, no fuma |
| II | Enfermedad sistémica leve | HTA o DM controladas, fumador, embarazo, IMC 30-40 |
| III | Enfermedad sistémica grave | DM o HTA mal controladas, EPOC, IMC 40 o más, ERC en diálisis, FEVI moderadamente reducida, IAM de más de 3 meses |
| IV | Enfermedad sistémica grave que amenaza la vida | IAM o EVC en los últimos 3 meses, isquemia activa, FEVI muy reducida, sepsis |
| V | Moribundo que no sobrevivirá sin la operación | Aneurisma roto, trauma masivo |
| VI | Muerte cerebral, donador de órganos | — |

Se agrega la letra **E** si la cirugía es de urgencia. ASA no es una escala de riesgo quirúrgico en sí (no considera el procedimiento), pero se correlaciona con la mortalidad.

### Riesgo cardiovascular
**Riesgo intrínseco del procedimiento:** bajo (menor de 1% de eventos cardiacos mayores: superficial, mama, tiroides, oftalmológico, endoscópico, hernia), intermedio (intraperitoneal, intratorácico, ortopedia mayor, cabeza y cuello, carotídea) y alto (mayor de 5%: aorta y vascular mayor, cirugía de duodeno-páncreas, hepatectomía, esofagectomía, cistectomía).

**Índice de riesgo cardiaco revisado de Lee (RCRI):** un punto por cada uno:
1. Cirugía de alto riesgo (intraperitoneal, intratorácica o vascular suprainguinal).
2. Cardiopatía isquémica.
3. Insuficiencia cardiaca.
4. Enfermedad cerebrovascular.
5. Diabetes tratada con insulina.
6. Creatinina mayor de 2 mg/dl.

Riesgo de evento cardiaco mayor en la cohorte original: 0 puntos ~0.4%, 1 punto ~0.9%, 2 puntos ~6.6%, 3 o más ~11%. Cohortes posteriores con medición sistemática de troponina muestran cifras más altas (aproximadamente 4%, 6%, 10% y 15%); otras herramientas son el calculador NSQIP (Gupta MICA) y el ACS NSQIP Surgical Risk Calculator.

**Capacidad funcional:** menos de 4 METs (no puede subir dos pisos de escaleras o caminar dos cuadras a paso rápido) se asocia a mayor riesgo. El cuestionario DASI estructura esta evaluación.

**Algoritmo práctico (ACC/AHA 2024, ESC 2022):**
1. ¿Urgencia? Operar y vigilar.
2. ¿Condición cardiaca activa (síndrome coronario agudo, insuficiencia cardiaca descompensada, arritmia grave, valvulopatía grave sintomática)? Valoración y tratamiento por Cardiología antes de la cirugía electiva.
3. Riesgo bajo (RCRI 0-1, procedimiento de bajo riesgo): operar.
4. Riesgo elevado con capacidad funcional buena (4 METs o más): operar.
5. Riesgo elevado con capacidad pobre o desconocida: considerar BNP o NT-proBNP y troponina basal; pruebas de estrés solo si el resultado cambia la conducta (revascularización indicada por sí misma, al margen de la cirugía).

**ECG:** en pacientes con cardiopatía, arritmia o enfermedad vascular conocida o con factores de riesgo que van a cirugía de riesgo intermedio o alto; no en asintomáticos de bajo riesgo. **Ecocardiograma:** disnea de causa no aclarada, insuficiencia cardiaca con cambio clínico, soplo sospechoso de valvulopatía grave.

### Riesgo pulmonar
Las complicaciones pulmonares postoperatorias (atelectasia, neumonía, insuficiencia respiratoria, broncoespasmo) son tan frecuentes como las cardiacas. Factores: edad mayor de 60 años, ASA II o más, EPOC, insuficiencia cardiaca, apnea obstructiva del sueño, tabaquismo, desnutrición, cirugía abdominal alta o torácica, cirugía mayor de 2-3 horas, urgencia, anestesia general. Escalas: **ARISCAT** y **STOP-BANG** para apnea del sueño. La espirometría y la radiografía de tórax de rutina no predicen complicaciones; se reservan para disnea no explicada o para cirugía de resección pulmonar.

**Optimización:** dejar de fumar (idealmente 4-8 semanas antes, aunque cualquier tiempo ayuda), tratar el broncoespasmo, fisioterapia e inspirometría incentivada, CPAP en apnea del sueño ya diagnosticada.

### Otros riesgos a evaluar
- **Renal:** creatinina y tasa de filtrado si hay ERC, DM, HTA o uso de nefrotóxicos.
- **Hepático:** Child-Pugh y MELD en cirróticos (Child C y MELD mayor de 15-20: riesgo prohibitivo en cirugía electiva).
- **Endocrino:** HbA1c en diabéticos (mayor de 8-9%: considerar diferir cirugía electiva); función tiroidea si hay sospecha clínica.
- **Hematológico:** anemia (Hb menor de 13 g/dl en ambos sexos según el consenso internacional de 2018), coagulopatía (historia de sangrado como mejor tamiz).
- **Nutricional:** NRS-2002, pérdida de peso mayor de 10-15% en 6 meses, IMC menor de 18.5, albúmina menor de 3 g/dl (marcador pronóstico, no nutricional). Riesgo nutricional grave: diferir cirugía electiva para nutrición de 7-14 días.
- **Fragilidad:** escala clínica de fragilidad, velocidad de marcha; predice complicaciones, institucionalización y mortalidad mejor que la edad.
- **Cognitivo:** riesgo de delirio postoperatorio en el anciano.
- **Tromboembólico:** escala de Caprini (ver tabla).

### Laboratorios preoperatorios
No existe un «perfil preoperatorio» universal. La recomendación (NICE NG45, GPC IMSS) es pedir estudios según edad, comorbilidad y magnitud del procedimiento: biometría hemática en cirugía mayor o con sangrado esperado, química y electrolitos en ERC, DM, uso de diuréticos o IECA, tiempos de coagulación solo si hay anticoagulantes, hepatopatía o historia de sangrado, prueba de embarazo en mujeres en edad fértil, grupo y Rh y pruebas cruzadas según el riesgo de transfusión.

### Ayuno preoperatorio (ASA 2023)
| Ingesta | Horas antes |
|---|---|
| Líquidos claros (agua, té, café sin leche, jugos sin pulpa, bebidas de carbohidratos) | 2 |
| Leche materna | 4 |
| Fórmula infantil, leche no humana, comida ligera | 6 |
| Comida con grasa, frituras, carne | 8 o más |

Los agonistas de GLP-1 retrasan el vaciamiento gástrico: las recomendaciones han cambiado (ASA 2023 sugería suspender la dosis semanal una semana antes; el consenso multisociedad de 2024 propone en general continuarlos, con dieta líquida 24 h antes en pacientes de alto riesgo y ultrasonido gástrico si hay síntomas). Es un tema en evolución: seguir el protocolo local.

### Manejo de medicamentos
| Fármaco | Conducta habitual |
|---|---|
| Betabloqueadores | Continuar; **no iniciarlos el día de la cirugía** (POISE: más EVC y mortalidad) |
| Estatinas | Continuar |
| IECA y ARA-II | Suspender 24 h antes es razonable para evitar hipotensión (controvertido; continuarlos es aceptable en insuficiencia cardiaca) |
| Diuréticos | Omitir la mañana de la cirugía |
| Ácido acetilsalicílico | Continuar en prevención secundaria y con *stents*; suspender 7 días en neurocirugía, cirugía de canal medular, próstata transuretral o ocular posterior |
| Clopidogrel / ticagrelor / prasugrel | Suspender 5 / 3-5 / 7 días antes |
| Doble antiagregación tras *stent* | Diferir cirugía electiva 6 meses tras *stent* farmacoactivo (mínimo 3 si es impostergable) y 1 mes tras *stent* metálico; decisión conjunta con Cardiología |
| Warfarina | Suspender 5 días; INR menor de 1.5 el día de la cirugía; puente con heparina solo en alto riesgo trombótico (válvula mecánica mitral, EVC o TEV reciente de menos de 3 meses, CHA2DS2-VASc muy alto); el ensayo BRIDGE mostró que en fibrilación auricular el puente aumenta el sangrado sin reducir embolias |
| Rivaroxabán, apixabán, edoxabán | Suspender 24 h (bajo riesgo de sangrado) o 48 h (alto riesgo) con depuración de creatinina de 30 ml/min o más; sin puente |
| Dabigatrán | 24-48 h con depuración de 50 ml/min o más; 48-96 h con 30-49 ml/min |
| Metformina | Omitir el día de la cirugía |
| Inhibidores de SGLT2 | Suspender 3 días antes (ertugliflozina 4): riesgo de cetoacidosis euglucémica |
| Insulina basal | 75-80% de la dosis la noche previa; insulina de acción rápida según glucemia |
| Esteroides crónicos | Mantener y considerar dosis de estrés |
| Anticonceptivos y terapia hormonal | Valorar suspensión 4-6 semanas antes en cirugía de alto riesgo tromboembólico |

### Profilaxis antibiótica
- **Indicada** en cirugía limpia con implante o de alto riesgo, limpia-contaminada y contaminada; en heridas sucias se trata, no se profilaxis.
- **Cefazolina 2 g IV** (3 g si pesa 120 kg o más) **dentro de los 60 min previos a la incisión**; vancomicina (15 mg/kg) y fluoroquinolonas, en los 120 min previos.
- Cirugía colorrectal: cefazolina más metronidazol (500 mg) o cefoxitina; preparación mecánica más antibiótico oral (neomicina o equivalente más metronidazol) reduce la infección de sitio quirúrgico.
- Alergia grave a betalactámicos: clindamicina 900 mg o vancomicina, más gentamicina (5 mg/kg) o aztreonam si se requiere cobertura gramnegativa.
- **Redosificar** cefazolina cada 4 h o si el sangrado supera 1500 ml.
- No prolongar más de 24 h tras la cirugía: no disminuye infecciones y aumenta resistencia y *C. difficile*.

### Tromboprofilaxis (escala de Caprini)
| Riesgo Caprini | Conducta |
|---|---|
| 0 (muy bajo) | Deambulación temprana |
| 1-2 (bajo) | Medias o compresión neumática intermitente |
| 3-4 (moderado) | Heparina de bajo peso molecular (enoxaparina 40 mg SC cada 24 h) o heparina no fraccionada 5000 U SC cada 8-12 h, o mecánica si el riesgo de sangrado es alto |
| 5 o más (alto) | Farmacológica más mecánica; en cirugía oncológica abdominopélvica, **prolongar 4 semanas** |

### Otros elementos del plan
Consentimiento informado, marcaje del sitio, reserva de hemoderivados, cama de terapia intensiva si se prevé, plan analgésico (incluida analgesia regional), prehabilitación y educación (ERAS).

### Perlas de examen y errores frecuentes
- ASA con E = urgencia.
- RCRI: seis variables; creatinina mayor de 2 mg/dl y DM con insulina.
- Menos de 4 METs = no sube dos pisos de escaleras.
- Líquidos claros hasta 2 h antes; sólidos 6 h.
- Cefazolina 2 g en los 60 min previos; redosis cada 4 h; no más de 24 h.
- No iniciar betabloqueador el día de la cirugía.
- Sin puente con heparina en fibrilación auricular con warfarina (BRIDGE).
- SGLT2: suspender 3 días antes.

### Referencias
Thompson A et al. *2024 AHA/ACC Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery* · Halvorsen S et al. *2022 ESC Guidelines on cardiovascular assessment of patients undergoing non-cardiac surgery* · ASA, *Practice Guidelines for Preoperative Fasting* (2023) · Bratzler DW et al. *Clinical practice guidelines for antimicrobial prophylaxis in surgery* (ASHP/IDSA/SIS/SHEA 2013) · Douketis JD et al. *Perioperative management of antithrombotic therapy*, CHEST 2022 · GPC IMSS-455-11, valoración perioperatoria en cirugía no cardiaca en el adulto · NICE NG45.
`),
    sheet('peri-ventilacion', '02', 'Oxigenoterapia y ventilación mecánica', `
## Oxigenoterapia y ventilación mecánica

### Definición
La oxigenoterapia es la administración de oxígeno a una concentración mayor que la del aire ambiente (FiO2 de 0.21) para tratar o prevenir la hipoxemia. La ventilación mecánica es el soporte artificial de la respiración mediante un dispositivo que genera presión positiva, de forma no invasiva (mascarilla) o invasiva (tubo endotraqueal o traqueostomía). Para el cirujano son herramientas cotidianas en el postoperatorio, en trauma y en sepsis.

### Fisiología básica
- **Hipoxemia:** PaO2 menor de 60 mmHg o SpO2 menor de 90%. **Hipoxia:** oxigenación tisular insuficiente (puede existir sin hipoxemia, por ejemplo en anemia o choque).
- **Contenido arterial de oxígeno:** CaO2 = (1.34 × Hb × SaO2) + (0.003 × PaO2). La hemoglobina y la saturación pesan mucho más que el oxígeno disuelto.
- **Aporte de oxígeno:** DO2 = gasto cardiaco × CaO2 × 10.
- **Causas de hipoxemia:** baja FiO2 (altitud), hipoventilación (PaCO2 alta, gradiente A-a normal), alteración ventilación-perfusión (la más frecuente: EPOC, neumonía, TEP), cortocircuito (atelectasia, SDRA; no corrige con oxígeno) y alteración de la difusión.
- **Gradiente alveolo-arterial:** PAO2 = FiO2 × (Patm − 47) − PaCO2/0.8; PA-aO2 normal aproximado = (edad/4) + 4.
- **Índice de oxigenación (Kirby):** PaO2/FiO2; normal mayor de 400. En la Ciudad de México y otras zonas altas los valores normales de PaO2 son menores (unos 65-75 mmHg) por la presión barométrica baja.

### Indicaciones y metas de oxigenoterapia
- Hipoxemia (SpO2 menor de 92-94%), choque, paro cardiaco, intoxicación por monóxido de carbono (FiO2 de 1.0 sin importar la SpO2, que es falsamente normal), neumotórax pequeño (acelera su reabsorción), cefalea en racimos.
- **Metas (BTS 2017):** SpO2 de 94-98% en la mayoría; **88-92% en riesgo de insuficiencia respiratoria hipercápnica** (EPOC, obesidad-hipoventilación, enfermedad neuromuscular). La hiperoxia no es inocua: vasoconstricción coronaria y cerebral, atelectasias por absorción, más mortalidad en críticos con metas liberales.
- No dar oxígeno «de rutina» a pacientes sin hipoxemia (infarto, EVC).

### Dispositivos
| Dispositivo | Flujo | FiO2 aproximada | Comentario |
|---|---|---|---|
| Cánula nasal convencional | 1-6 L/min | 24-44% (cerca de +4% por litro) | Cómoda; FiO2 variable con el patrón respiratorio |
| Mascarilla simple | 5-10 L/min | 35-55% | No usar menos de 5 L/min (reinhalación de CO2) |
| Mascarilla Venturi | Según la válvula | 24-60% fija | De elección cuando se necesita FiO2 precisa (EPOC) |
| Mascarilla con bolsa reservorio (no reinhalación) | 10-15 L/min | 60-90% | Hipoxemia grave, trauma, temporal |
| Cánula nasal de alto flujo | Hasta 60 L/min | Hasta 100% | Humidificada y calentada; PEEP leve (3-5 cmH2O), lava espacio muerto; insuficiencia respiratoria hipoxémica y postextubación |
| Bolsa-válvula-mascarilla | 15 L/min | Cercana a 100% | Reanimación |

### Ventilación mecánica no invasiva (VMNI)
- **Modos:** CPAP (presión continua) y BiPAP o presión de soporte con PEEP (presión inspiratoria y espiratoria).
- **Indicaciones con mejor evidencia:** exacerbación de EPOC con acidosis respiratoria (pH 7.25-7.35 con PaCO2 mayor de 45 mmHg), edema agudo pulmonar cardiogénico, insuficiencia respiratoria en inmunocomprometidos, prevención de falla postextubación en hipercápnicos, apnea del sueño. En **insuficiencia respiratoria hipoxémica tras cirugía abdominal**, la VMNI redujo la reintubación (Jaber, *JAMA* 2016).
- **Contraindicaciones:** paro respiratorio, deterioro del estado de alerta o incapacidad para proteger la vía aérea, vómito o hemorragia digestiva alta, inestabilidad hemodinámica grave, trauma o cirugía facial, obstrucción de vía aérea superior, secreciones abundantes, falta de cooperación. En anastomosis esofágicas o gástricas recientes se usa con precaución (no está formalmente contraindicada, con presiones bajas).
- **Fracaso:** si en 1-2 horas no mejoran el pH, la PaCO2, la frecuencia respiratoria y el trabajo respiratorio, intubar; retrasar la intubación aumenta la mortalidad.

### Indicaciones de intubación y ventilación invasiva
1. Incapacidad para proteger la vía aérea (Glasgow de 8 o menos, quemadura de vía aérea, trauma maxilofacial grave).
2. Falla de oxigenación refractaria a oxígeno de alto flujo o VMNI.
3. Falla ventilatoria (acidosis respiratoria progresiva, fatiga, frecuencia mayor de 35).
4. Choque grave o paro cardiaco.
5. Necesidad de sedación profunda o traslado de paciente inestable.
6. Curso clínico previsible (por ejemplo, quemadura de vía aérea con edema progresivo).

**Secuencia de intubación rápida:** preoxigenación (3 minutos o 8 respiraciones a capacidad vital con FiO2 de 1.0), inductor (etomidato 0.3 mg/kg o ketamina 1-2 mg/kg en inestabilidad; propofol en estabilidad), bloqueador neuromuscular (succinilcolina 1-1.5 mg/kg o rocuronio 1.2 mg/kg), intubación, confirmación con capnografía (estándar de oro), auscultación y radiografía.

### Modos ventilatorios
| Modo | El médico fija | Variable | Uso |
|---|---|---|---|
| Asistido-controlado por volumen | Volumen corriente, FR, flujo, PEEP, FiO2 | Presiones | El más usado al inicio; garantiza volumen minuto |
| Asistido-controlado por presión | Presión inspiratoria, tiempo inspiratorio, FR, PEEP, FiO2 | Volumen corriente | Limita presiones; el volumen cambia con la distensibilidad |
| Presión soporte | Presión de soporte, PEEP, FiO2 | FR y volumen (los define el paciente) | Destete; paciente con impulso respiratorio |
| SIMV | Respiraciones mandatorias y soporte | Mixto | Menos usado hoy |

### Programación inicial (ventilación protectora)
- **Volumen corriente:** 6-8 ml/kg de **peso predicho** (6 ml/kg en SDRA). Peso predicho: hombres = 50 + 0.91 × (talla en cm − 152.4); mujeres = 45.5 + 0.91 × (talla en cm − 152.4).
- **Frecuencia:** 14-20 por minuto, ajustada al pH.
- **PEEP:** 5 cmH2O inicial; mayor en SDRA según tabla PEEP/FiO2 u otras estrategias.
- **FiO2:** 1.0 al inicio y descender rápido para SpO2 de 92-96% (PaO2 55-80 mmHg).
- **Límites:** presión meseta menor de 30 cmH2O; presión de distensión (meseta − PEEP) menor de 15 cmH2O.
- La ventilación protectora intraoperatoria (volúmenes bajos y PEEP) reduce complicaciones pulmonares postoperatorias.

### Síndrome de dificultad respiratoria aguda (SDRA)
**Definición de Berlín (2012):** inicio en menos de 1 semana tras un factor desencadenante, opacidades bilaterales no explicadas por derrame, colapso o nódulos, edema no explicado completamente por falla cardiaca o sobrecarga, y PaO2/FiO2 con PEEP de 5 o más: **leve 200-300, moderado 100-200, grave 100 o menos**. La definición global de 2023 acepta oxígeno de alto flujo (30 L/min o más) y la relación SpO2/FiO2 cuando no hay gasometría.

Causas quirúrgicas frecuentes: sepsis abdominal, neumonía, aspiración, pancreatitis, transfusión masiva (TRALI), trauma, contusión pulmonar, embolia grasa.

**Tratamiento:** volumen corriente de 6 ml/kg de peso predicho con meseta menor de 30 (ARDSNet 2000: mortalidad de 39.8% a 31%), PEEP adecuada, **posición prona 16 h o más al día si PaO2/FiO2 menor de 150** (PROSEVA 2013: mortalidad de 32.8% a 16%), balance hídrico conservador una vez fuera del choque, bloqueo neuromuscular en casos seleccionados, ECMO en refractarios. Tratar la causa (control de foco).

### Gasometría: lectura rápida
1. pH: acidemia (menor de 7.35) o alcalemia (mayor de 7.45).
2. PaCO2: ¿explica el pH? (respiratorio) o HCO3 (metabólico).
3. Compensación esperada (ver la hoja de ácido-base).
4. Oxigenación: PaO2, PaO2/FiO2, gradiente A-a.
5. Lactato y brecha aniónica.

### Destete (liberación) de la ventilación
**Criterios para intentar una prueba de ventilación espontánea:** causa en resolución, PaO2/FiO2 mayor de 150-200 con PEEP de 8 o menos y FiO2 de 0.4-0.5 o menos, estabilidad hemodinámica sin vasopresores o con dosis bajas, despierto o fácilmente despertable, tos eficaz.

**Prueba:** 30-120 minutos con presión soporte de 5-8 cmH2O o pieza en T. Fracaso: FR mayor de 35, SpO2 menor de 90%, FC mayor de 140 o cambio de más de 20%, hipertensión o hipotensión, agitación, diaforesis, uso de músculos accesorios. **Índice de respiración rápida superficial** (FR/volumen corriente en litros) menor de 105 predice éxito. Se combina con la interrupción diaria de la sedación (despertar y respirar). Tras la extubación, el alto flujo o la VMNI previenen la reintubación en pacientes de riesgo.

**Traqueostomía:** si se prevé ventilación prolongada; la traqueostomía temprana (antes del día 10) no ha mostrado reducir la mortalidad de forma consistente, pero facilita el cuidado y el destete.

### Complicaciones de la ventilación mecánica
- **Lesión pulmonar inducida por el ventilador:** volutrauma, barotrauma (neumotórax), atelectrauma, biotrauma.
- **Neumonía asociada a ventilación:** prevención con cabecera a 30-45°, interrupción diaria de la sedación, aspiración subglótica, higiene oral, evitar cambios innecesarios del circuito, movilización temprana.
- **Auto-PEEP** (atrapamiento aéreo en EPOC y asma): bajar FR, alargar espiración.
- Inestabilidad hemodinámica (menor retorno venoso con PEEP alta), lesión de vía aérea, sinusitis, delirio, debilidad adquirida en la UCI, úlceras de estrés y tromboembolia.

### Complicaciones pulmonares postoperatorias y prevención
La **atelectasia** es la más frecuente (90% de los pacientes con anestesia general tiene algo de atelectasia). Contra el dogma clásico, la atelectasia no es una causa demostrada de fiebre postoperatoria temprana. La prevención incluye analgesia adecuada (sobre todo regional en cirugía abdominal alta), movilización temprana, inspirometría incentivada y fisioterapia, ventilación protectora intraoperatoria y evitar sondas nasogástricas innecesarias.

### Perlas de examen y errores frecuentes
- Meta de SpO2 88-92% en EPOC retenedor de CO2.
- Venturi = FiO2 exacta; reservorio = FiO2 alta.
- Volumen corriente con peso **predicho**, no real.
- Meseta menor de 30 cmH2O; distensión menor de 15.
- SDRA grave: PaO2/FiO2 de 100 o menos; prono si es menor de 150.
- Índice de Tobin menor de 105 = probable éxito de extubación.
- La capnografía confirma la intubación.
- La saturación es normal en intoxicación por monóxido de carbono.

### Referencias
O'Driscoll BR et al. *BTS guideline for oxygen use in adults* (2017) · ARDS Network. *NEJM* 2000;342:1301-8 · Guérin C et al. PROSEVA. *NEJM* 2013 · ARDS Definition Task Force. *JAMA* 2012 y definición global 2023 · Rochwerg B et al. *ERS/ATS guidelines: noninvasive ventilation* (2017) · Jaber S et al. *JAMA* 2016 · Schwartz y Sabiston, capítulos de cuidados intensivos quirúrgicos.
`),
    sheet('peri-postop', '03', 'Cuidados postoperatorios y complicaciones', `
## Cuidados postoperatorios y complicaciones

### Definición
Los cuidados postoperatorios abarcan la vigilancia, el soporte y las intervenciones desde que el paciente sale del quirófano hasta su recuperación funcional. Su objetivo es acelerar la recuperación (ERAS) y detectar a tiempo las complicaciones, que en cirugía abdominal mayor afectan a 20-40% de los pacientes. La mortalidad tras una complicación grave depende tanto de la complicación como de la capacidad del equipo para reconocerla y tratarla a tiempo (**«falla en el rescate»**).

### Recuperación postanestésica inmediata
- Vía aérea, ventilación, oxigenación, hemodinamia, temperatura, dolor, náusea, estado de alerta y sangrado.
- **Escala de Aldrete modificada** (actividad, respiración, circulación, conciencia y saturación, de 0 a 2 cada uno): 9 o más permite el egreso de la unidad de recuperación.
- Problemas frecuentes: hipoxemia (efecto residual de opioides y relajantes, atelectasia), hipotensión (hipovolemia, sangrado, efecto anestésico), hipertensión (dolor, retención urinaria), hipotermia y escalofríos, náusea y vómito, delirio de emergencia.

### Pase de visita estructurado
Signos vitales y tendencias, dolor, estado mental, balance de líquidos y diuresis, herida y drenajes (cantidad y aspecto), sondas, tolerancia a la vía oral, canalización de gases y evacuaciones, movilización, glucemia, medicamentos (antibióticos, anticoagulantes, analgésicos), laboratorios pertinentes y plan para el día. Preguntarse siempre: **¿el paciente evoluciona como se espera para este día postoperatorio?**

### Analgesia multimodal
| Escalón | Fármaco | Dosis habitual en adulto |
|---|---|---|
| Base | Paracetamol | 1 g IV/VO cada 6-8 h (máximo 4 g/día; 2-3 g en hepatopatía, desnutrición o alcoholismo) |
| Base | AINE: ketorolaco | 30 mg IV cada 6-8 h (15 mg en mayores de 65 años o menos de 50 kg), máximo 5 días; evitar en ERC, sangrado, úlcera |
| Base | AINE: metamizol | 1-2 g IV cada 8 h (riesgo raro de agranulocitosis) |
| Regional | Epidural, bloqueos de plano transverso del abdomen, infiltración de herida | Según técnica |
| Rescate | Opioides: morfina, tramadol, buprenorfina | Morfina 2-4 mg IV a titular; tramadol 50-100 mg cada 6-8 h (máx. 400 mg/día) |
| Adyuvantes | Dexametasona, lidocaína IV, ketamina, gabapentinoides | Casos seleccionados |

Evitar opioides en exceso (íleo, náusea, depresión respiratoria, delirio).

### Líquidos y nutrición
- Suspender soluciones IV en cuanto el paciente tolere la vía oral.
- Evitar la sobrecarga (aumenta íleo, edema de la anastomosis, complicaciones pulmonares) y la hipovolemia.
- Dieta oral temprana en la mayoría (incluso tras anastomosis colónica). Nutrición enteral si no se espera tolerancia oral suficiente en 5-7 días.

### Fiebre postoperatoria
La fiebre en las primeras 48 h suele ser inflamatoria (respuesta al trauma quirúrgico) y no requiere estudio extenso si el paciente está bien. La regla de las «5 W» orienta por tiempo, con salvedades:
| Momento | Causas que considerar |
|---|---|
| Intraoperatorio y primeras horas | Hipertermia maligna, reacción transfusional, bacteriemia por manipulación, medicamentos |
| Primeras 24-48 h | Respuesta inflamatoria; **infección necrosante de herida por estreptococo del grupo A o clostridio** (dolor desproporcionado, crepitación, líquido «en agua de lavar carne»); fuga anastomótica temprana; aspiración |
| Días 3-5 | Neumonía, infección urinaria (sonda), flebitis por catéter, infección asociada a catéter central |
| Días 5-7 | Infección del sitio quirúrgico, **fuga anastomótica**, absceso intraabdominal |
| Después del día 7 | Absceso, trombosis venosa profunda o TEP, colitis por *C. difficile*, fiebre por fármacos |

**Abordaje:** exploración completa (herida, catéteres, tórax, abdomen, pantorrillas), biometría, PCR o procalcitonina, examen general de orina, hemocultivos, radiografía de tórax según clínica y tomografía con contraste si se sospecha colección o fuga. No tratar la fiebre con antibióticos sin buscar la causa.

### Oliguria
Diuresis menor de 0.5 ml/kg/h durante 6 h o más. **Primero, revisar la sonda** (obstruida o acodada). Después distinguir:
- **Prerrenal:** hipovolemia (sangrado, tercer espacio, pérdidas), bajo gasto, hipertensión intraabdominal (síndrome compartimental: medir presión vesical). Fracción excretada de sodio menor de 1%, sodio urinario menor de 20 mEq/L, BUN/creatinina mayor de 20.
- **Renal:** necrosis tubular aguda por hipoperfusión prolongada, contraste, aminoglucósidos, AINE, rabdomiólisis.
- **Posrenal:** obstrucción (retención urinaria, lesión ureteral inadvertida).

Recordar la oliguria «fisiológica» de las primeras 24 h por ADH. Clasificar la lesión renal aguda según **KDIGO** (creatinina 1.5 veces la basal o aumento de 0.3 mg/dl en 48 h, o diuresis menor de 0.5 ml/kg/h por 6 h). Tratamiento: corregir la causa, reto de líquidos si hay hipovolemia (sin sobrecargar), suspender nefrotóxicos, ajustar dosis.

### Íleo postoperatorio
Recuperación normal: intestino delgado en 0-24 h, estómago en 24-48 h y colon en 48-72 h. Se considera **íleo prolongado** si persiste más de 4-5 días o reaparece. Causas: opioides, desequilibrio electrolítico (potasio, magnesio), manipulación, sepsis abdominal, hematoma, fuga anastomótica. Tratamiento: descartar obstrucción mecánica o complicación (tomografía), corregir electrolitos, reducir opioides, movilizar, sonda nasogástrica solo si hay vómito o distensión importante. Prevención: ERAS, mínima invasión, analgesia ahorradora de opioides, chicle, alvimopán donde exista.

### Náusea y vómito postoperatorios
Escala de **Apfel**: sexo femenino, no fumador, antecedente de náusea postoperatoria o cinetosis, opioides postoperatorios (riesgo con 0-4 factores: 10, 20, 40, 60 y 80%). Profilaxis según el riesgo: ondansetrón 4 mg, dexametasona 4-8 mg, droperidol o haloperidol a dosis bajas, propofol en vez de anestésicos inhalados. Tratar con un fármaco de clase distinta a la usada en profilaxis.

### Delirio postoperatorio
Trastorno agudo y fluctuante de la atención y la cognición; afecta a 10-50% de los ancianos operados (más en cadera y cirugía mayor). Se diagnostica con el **CAM** (inicio agudo y curso fluctuante, inatención, más pensamiento desorganizado o nivel de conciencia alterado). Siempre buscar la causa: hipoxemia, sepsis, dolor, retención urinaria, fármacos (benzodiacepinas, anticolinérgicos, opioides), abstinencia alcohólica, hipoglucemia, hiponatremia. Prevención no farmacológica: orientación, lentes y auxiliares auditivos, sueño, movilización, hidratación, familiares presentes. Haloperidol a dosis bajas solo para agitación peligrosa; evitar benzodiacepinas (salvo abstinencia).

### Complicaciones de la herida
- **Seroma:** acumulación de suero; aspiración si es grande o sintomático.
- **Hematoma:** por hemostasia deficiente o anticoagulación; drenar si se expande o compromete la vía aérea (cuello: emergencia; abrir la herida en la cama).
- **Infección del sitio quirúrgico** (ver el módulo de infección): abrir, drenar y curar; antibiótico solo si hay celulitis extensa o datos sistémicos.
- **Dehiscencia aponeurótica (evisceración):** 1-3% de las laparotomías, típicamente entre los días 5 y 8; el signo de alarma es la salida de líquido serosanguinolento «en agua de carne» por la herida. Factores: infección, técnica de cierre, aumento de presión intraabdominal (tos, íleo, ascitis), desnutrición, esteroides, obesidad, urgencia. Manejo: cubrir con gasas húmedas estériles, faja, y reintervención para cierre (o manejo de abdomen abierto si no es posible); mortalidad de hasta 10-20%.

### Fuga anastomótica
Ocurre en 3-15% de las anastomosis colorrectales (más en las bajas) y suele manifestarse entre los días 5 y 7, aunque puede ser temprana o tardía. Signos: taquicardia inexplicada (a menudo el primero), fiebre, íleo prolongado, dolor, cambio en el drenaje, PCR que no desciende, deterioro clínico. La **tomografía con contraste** (oral o rectal) confirma. Manejo: pequeña y contenida, antibióticos y drenaje percutáneo; con peritonitis generalizada o inestabilidad, reintervención (lavado, desmantelar la anastomosis y estoma, o estoma de protección).

### Tromboembolia venosa
Trombosis venosa profunda (dolor, edema, empastamiento de pantorrilla; ultrasonido Doppler) y TEP (disnea súbita, taquicardia, hipoxemia; angiotomografía). Prevención con profilaxis según Caprini. El tratamiento postoperatorio inmediato prefiere heparina no fraccionada (reversible) si el riesgo de sangrado es alto.

### Complicaciones cardiovasculares
- **Lesión miocárdica tras cirugía no cardiaca (MINS):** elevación de troponina por isquemia en los primeros 30 días, en su mayoría **asintomática**; se asocia a mayor mortalidad. Algunas guías recomiendan medir troponina en pacientes de alto riesgo.
- Fibrilación auricular postoperatoria (buscar desencadenantes: hipovolemia, dolor, electrolitos, sepsis, fuga anastomótica).
- Hipertensión y crisis hipertensiva (dolor, retención urinaria, suspensión de antihipertensivos).

### Retención urinaria
Frecuente tras hernioplastia, cirugía anorrectal y anestesia raquídea; ultrasonido vesical; sonda intermitente si el volumen es mayor de 400-600 ml.

### Criterios de alta y seguimiento
Dolor controlado con vía oral, tolerancia a la dieta, función intestinal en progreso, movilización, signos vitales estables, sin complicaciones activas, comprensión de signos de alarma (fiebre, dolor que aumenta, vómito, salida de material por la herida, sangrado). Cita para revisión de herida, retiro de puntos y entrega de resultados de patología.

### Perlas de examen y errores frecuentes
- Fiebre en las primeras 48 h: casi siempre inflamatoria, pero excluir infección necrosante y fuga.
- La atelectasia no es una causa probada de fiebre.
- Oliguria: primero revisar la sonda.
- Taquicardia inexplicada al día 5 de una anastomosis = fuga hasta demostrar lo contrario.
- Líquido «en agua de carne» por la herida = dehiscencia aponeurótica.
- Hematoma de cuello con compromiso de vía aérea: abrir la herida en la cama.
- Ketorolaco: máximo 5 días.
- Delirio: buscar causa orgánica y evitar benzodiacepinas.

### Referencias
Gustafsson UO et al. *ERAS colorectal guidelines* 2018 · Gan TJ et al. *Consensus guidelines for the management of PONV* (2020) · Schwartz, cap. «Complications» · Sabiston, cap. «Surgical complications» · KDIGO, lesión renal aguda (2012) · VISION Investigators, MINS, *JAMA* 2017 · American Geriatrics Society, delirio postoperatorio (2015).
`),
  ],

  'ap-r1-liquidos': [
    sheet('liq-composicion', '01', 'Composición corporal, requerimientos y soluciones', `
## Composición corporal, requerimientos y soluciones

### Definición
La fluidoterapia es la administración de líquidos y electrolitos por vía intravenosa (o enteral) para reanimar, mantener, reponer pérdidas o corregir trastornos. Se debe prescribir como un fármaco: con indicación, tipo, dosis, velocidad, metas y reevaluación. Tanto la hipovolemia como la sobrecarga aumentan las complicaciones quirúrgicas (fuga anastomótica, íleo, edema pulmonar, infección de herida).

### Epidemiología
Los trastornos hidroelectrolíticos son de las alteraciones más frecuentes en el paciente quirúrgico: la hiponatremia afecta a 15-30% de los hospitalizados, y la hipopotasemia a cerca de 20%. En estudios de auditoría (NCEPOD), una proporción relevante de las muertes postoperatorias se relacionó con errores en la prescripción de líquidos.

### Compartimentos corporales
| Compartimento | % del peso corporal (adulto varón joven) | Componentes |
|---|---|---|
| **Agua corporal total (ACT)** | 60% (50% en mujeres y ancianos; 70-80% en recién nacidos) | — |
| Líquido intracelular | 40% (dos tercios del ACT) | Principalmente músculo |
| Líquido extracelular | 20% (un tercio del ACT) | Intersticial 15%, plasma 5% |
| Volumen sanguíneo | 7% del peso (unos 70 ml/kg en adultos) | Plasma más elementos formes |

El tejido adiposo contiene poca agua, por eso el obeso tiene un porcentaje menor de ACT.

**Electrolitos predominantes:**
| | Extracelular (plasma) | Intracelular |
|---|---|---|
| Cationes | Sodio 135-145 mEq/L | Potasio ~150 mEq/L, magnesio |
| Aniones | Cloro ~100, bicarbonato ~24 | Fosfatos, proteínas |

La bomba Na/K-ATPasa mantiene estas diferencias; la falla energética (choque) las altera (entrada de sodio y agua a la célula).

### Osmolaridad y tonicidad
- **Osmolaridad plasmática calculada** = 2 × Na + glucosa/18 + BUN/2.8; normal 280-295 mOsm/kg.
- **Brecha osmolar** = medida − calculada; mayor de 10 sugiere osmoles no medidos (metanol, etilenglicol, manitol).
- **Tonicidad (osmolaridad efectiva):** solo cuentan solutos que no cruzan la membrana (sodio, glucosa); la urea cruza libremente.
- El agua se mueve entre el compartimento intracelular y el extracelular según la tonicidad; entre plasma e intersticio, según las fuerzas de Starling y el estado del **glucocálix endotelial** (modelo revisado de Starling: la mayor parte del filtrado regresa por los linfáticos).

### Requerimientos de mantenimiento en adultos
| Elemento | Requerimiento diario |
|---|---|
| Agua | 25-35 ml/kg/día (o regla 4-2-1 en ml/kg/h: 4 para los primeros 10 kg, 2 para los siguientes 10 y 1 por cada kg adicional) |
| Sodio | 1-1.5 mEq/kg/día |
| Potasio | 0.5-1 mEq/kg/día |
| Cloro | 1-1.5 mEq/kg/día |
| Glucosa | 50-100 g/día (previene cetosis por ayuno; no es nutrición) |

**Pérdidas insensibles:** 600-900 ml/día (piel y respiración, unos 10 ml/kg/día), aumentan con la fiebre (alrededor de 10-15% por cada grado por arriba de 37 °C), taquipnea, quemaduras y heridas abiertas. **Diuresis mínima adecuada:** 0.5 ml/kg/h en adultos (1 ml/kg/h en niños).

### Las cinco «R» (NICE CG174)
1. **Reanimación** (Resuscitation): restaurar la perfusión.
2. **Mantenimiento rutinario** (Routine maintenance).
3. **Reposición** (Replacement) de pérdidas actuales y déficit previos.
4. **Redistribución** (Redistribution): edema, sepsis, tercer espacio, hipoalbuminemia.
5. **Reevaluación** (Reassessment) continua.

### Soluciones cristaloides
| Solución | Na | K | Cl | Ca | Mg | Buffer | Osm (mOsm/L) | pH |
|---|---|---|---|---|---|---|---|---|
| NaCl 0.9% (fisiológica) | 154 | — | 154 | — | — | — | 308 | ~5.5 |
| Hartmann / Ringer lactato | 130 | 4 | 109 | 3 | — | Lactato 28 | ~273 | ~6.5 |
| Plasma-Lyte A / 148 | 140 | 5 | 98 | — | 3 | Acetato 27, gluconato 23 | ~294 | 7.4 |
| NaCl 0.45% | 77 | — | 77 | — | — | — | 154 | — |
| Glucosada 5% | — | — | — | — | — | Glucosa 50 g/L (170 kcal/L) | 252 (hipotónica en vivo) | ~4 |
| Mixta (glucosa 5% más NaCl 0.9%) | 154 | — | 154 | — | — | Glucosa 50 g/L | ~560 | — |
| NaCl 3% (hipertónica) | 513 | — | 513 | — | — | — | 1026 | — |

**Presentaciones concentradas frecuentes en México:**
- NaCl 17.7%: 3 mEq/ml (ampolleta de 10 ml = 30 mEq de sodio).
- KCl 14.9%: 2 mEq/ml (ampolleta de 10 ml = 20 mEq de potasio). **Medicamento de alto riesgo**: nunca en bolo, siempre diluido.
- Bicarbonato de sodio 7.5%: 0.89 mEq/ml (ampolleta de 10 ml); 8.4% = 1 mEq/ml.
- Sulfato de magnesio 10%: ampolleta de 10 ml = 1 g (8.1 mEq).
- Gluconato de calcio 10%: ampolleta de 10 ml = 1 g (93 mg de calcio elemental, 4.65 mEq).

**Distribución tras 1 litro infundido:**
| Solución | Permanece en el intravascular (aprox.) |
|---|---|
| Cristaloide isotónico | 200-250 ml (un cuarto o un quinto) |
| Glucosada 5% | ~80 ml (se distribuye en el ACT) |
| Albúmina 5% | ~500-1000 ml (según el estado del glucocálix) |

En la práctica clínica, en estados de fuga capilar la permanencia es aún menor, y en hipovolemia algo mayor.

### Salina contra soluciones balanceadas
- La NaCl 0.9% en grandes volúmenes produce **acidosis metabólica hiperclorémica** (de brecha aniónica normal), vasoconstricción renal y probablemente más lesión renal.
- Las soluciones balanceadas (Hartmann, Plasma-Lyte) se acercan más al plasma. Los ensayos SMART y SALT-ED (2018) mostraron una reducción pequeña de eventos renales mayores; BaSICS y PLUS (2021-2022) no encontraron diferencias en mortalidad. Conclusión actual: **las balanceadas son una opción preferente razonable en la mayoría de los pacientes**, con diferencias modestas.
- Excepciones: en **trauma craneoencefálico** se prefiere NaCl 0.9% (el Hartmann es ligeramente hipotónico y puede aumentar el edema cerebral); en hiponatremia o alcalosis hipoclorémica, NaCl 0.9%.
- El Hartmann contiene potasio (4 mEq/L) y calcio, pero puede usarse en hiperpotasemia (la acidosis por salina eleva más el potasio). El calcio puede formar coágulos si se mezcla con sangre citratada en la misma vía.

### Coloides
- **Albúmina (5% y 20-25%):** útil en cirróticos (paracentesis de gran volumen: 6-8 g por litro extraído mayor de 5 L; síndrome hepatorrenal; peritonitis bacteriana espontánea) y como opción en sepsis tras grandes volúmenes de cristaloide (SAFE, ALBIOS sin beneficio en mortalidad global).
- **Hidroxietil almidones:** aumentan la lesión renal, la necesidad de diálisis y la mortalidad en sepsis (6S, CHEST); la EMA restringió su uso y en 2022 recomendó retirarlos. No usarlos en sepsis, quemados ni críticos.
- **Gelatinas y dextranos:** riesgo de anafilaxia y coagulopatía; sin ventajas.

### Reposición de pérdidas gastrointestinales
| Líquido | Volumen/día | Na | K | Cl | HCO3 | Reposición sugerida |
|---|---|---|---|---|---|---|
| Gástrico | 1-2 L | 60 | 10-15 | 130 | — | NaCl 0.9% más KCl 20 mEq/L |
| Biliar | 0.5-1 L | 145 | 5 | 100 | 35 | Hartmann |
| Pancreático | 0.5-1 L | 140 | 5 | 75 | 115 | Hartmann (más bicarbonato en fístula de alto gasto) |
| Intestino delgado / ileostomía | 1-3 L (ileostomía 0.5-1.5 L) | 120-140 | 5-10 | 100-110 | 30 | Hartmann |
| Diarrea / colon | Variable | 40-120 | 15-40 | 40-100 | 30-50 | Hartmann más potasio |

(Valores en mEq/L, aproximados; medir electrolitos en el líquido si las pérdidas son grandes y persistentes.)

### Evaluación del estado de volumen
- **Clínica:** sed, mucosas, llenado capilar (más de 3 s), frialdad distal, taquicardia, hipotensión ortostática, oliguria, alteración del estado mental.
- **Laboratorio:** lactato, BUN/creatinina mayor de 20, sodio urinario, hematocrito (hemoconcentración).
- **Dinámica (respuesta a volumen):** elevación pasiva de piernas con medición del gasto cardiaco, variación de presión de pulso (mayor de 12-13% en ventilación controlada con volumen corriente de 8 ml/kg y ritmo sinusal), ultrasonido (vena cava inferior, VExUS para congestión). La **presión venosa central** aislada no predice la respuesta a volumen.
- Peso diario y balance acumulado.

### Fluidoterapia perioperatoria
- Evitar ayunos largos y la «hidratación nocturna» innecesaria.
- Intraoperatorio: balance cercano a cero; terapia guiada por objetivos en cirugía mayor o pacientes de alto riesgo. El ensayo RELIEF (2018) mostró que una estrategia **demasiado restrictiva** aumentó la lesión renal aguda frente a una liberal moderada: la meta es la **euvolemia**, no la restricción extrema.
- Postoperatorio: suspender líquidos IV en cuanto el paciente beba; si se requieren, mantenimiento isotónico con potasio y glucosa.

### Ejemplo de prescripción de mantenimiento
Adulto de 70 kg en ayuno, sin pérdidas anormales: unos 2000-2400 ml/día, por ejemplo 1000 ml de Hartmann más 1000 ml de glucosada al 5% con 40 mEq de potasio en total, ajustados por electrolitos diarios. Reevaluar cada 24 h (o antes).

### Perlas de examen y errores frecuentes
- ACT 60% del peso; intracelular dos tercios; plasma 5%.
- 1 L de cristaloide deja solo 200-250 ml en el intravascular.
- Salina 0.9% en exceso = acidosis hiperclorémica.
- En TCE, NaCl 0.9% (no Hartmann).
- Pérdidas por SNG: NaCl 0.9% más potasio.
- No usar almidones en sepsis.
- KCl nunca en bolo.
- La PVC aislada no predice respuesta a volumen.

### Referencias
NICE CG174. *Intravenous fluid therapy in adults in hospital* (actualización 2017) · Semler MW et al. SMART, *NEJM* 2018 · Myles PS et al. RELIEF, *NEJM* 2018 · Finfer S et al. PLUS, *NEJM* 2022 · Schwartz, cap. «Fluid and electrolyte management of the surgical patient» · Sabiston, cap. «Fluid and electrolyte management» · Malbrain MLNG et al. *Ann Intensive Care* 2018 (fases de la fluidoterapia).
`),
    sheet('liq-sodio', '02', 'Trastornos del sodio', `
## Trastornos del sodio

### Definición
El sodio es el principal catión extracelular y el determinante de la tonicidad plasmática. Los trastornos del sodio son, en realidad, **trastornos del agua**: la hiponatremia indica exceso relativo de agua libre y la hipernatremia, déficit relativo de agua. Valores normales: 135-145 mEq/L.

### Fisiología de la regulación
- **Osmorreceptores hipotalámicos:** un aumento de 1-2% en la osmolaridad estimula la sed y la liberación de ADH (vasopresina), que inserta acuaporinas 2 en el túbulo colector y concentra la orina.
- **Barorreceptores:** la hipovolemia también libera ADH, y este estímulo prevalece sobre la osmolaridad (por eso el paciente hipovolémico retiene agua aunque esté hiponatrémico).
- **Sistema renina-angiotensina-aldosterona** y péptidos natriuréticos regulan el sodio corporal total (es decir, el volumen extracelular).
- En el postoperatorio, el dolor, la náusea, los opioides y el estrés quirúrgico elevan la ADH de forma «no osmótica»: por eso las soluciones hipotónicas causan hiponatremia postoperatoria.

### Hiponatremia
**Epidemiología:** el trastorno electrolítico más frecuente en hospitalizados (15-30%). Se asocia con mayor mortalidad, caídas, fracturas y estancia prolongada. Las mujeres premenopáusicas y los niños tienen más riesgo de encefalopatía hiponatrémica.

**Clasificación por gravedad bioquímica (guía europea 2014):** leve 130-135, moderada 125-129, profunda menor de 125 mEq/L. **Por tiempo:** aguda (menos de 48 h) o crónica (48 h o más, o desconocida). **Por síntomas:** moderadamente graves (náusea sin vómito, confusión, cefalea) o graves (vómito, convulsiones, somnolencia, Glasgow de 8 o menos, paro cardiorrespiratorio).

**Abordaje diagnóstico paso a paso:**
1. **Osmolaridad sérica:**
   - Normal (280-295): **pseudohiponatremia** por hiperlipidemia o hiperproteinemia grave (artefacto de laboratorio), o absorción de soluciones de irrigación (glicina en RTU).
   - Alta (más de 295): **hiponatremia hipertónica** por hiperglucemia o manitol. Corrección por glucosa: sumar 1.6 mEq/L (o 2.4 según Hillier) por cada 100 mg/dl de glucosa por arriba de 100.
   - Baja (menos de 280): hiponatremia hipotónica verdadera; continuar.
2. **Osmolaridad urinaria:** menor de 100 mOsm/kg indica ADH suprimida (polidipsia primaria, potomanía de cerveza, dieta de «té y pan tostado»); mayor de 100, ADH activa.
3. **Volumen extracelular y sodio urinario:**

| Estado de volumen | Sodio urinario | Causas |
|---|---|---|
| Hipovolémica | Menor de 20-30 mEq/L | Pérdidas extrarrenales: vómito, diarrea, fístulas, tercer espacio, quemaduras |
| Hipovolémica | Mayor de 20-30 mEq/L | Pérdidas renales: diuréticos (sobre todo tiazidas), insuficiencia suprarrenal, nefropatía perdedora de sal, síndrome cerebral perdedor de sal |
| Euvolémica | Mayor de 30 mEq/L | **SIADH**, hipotiroidismo, insuficiencia suprarrenal secundaria, hiponatremia postoperatoria, fármacos |
| Hipervolémica | Menor de 20 mEq/L | Insuficiencia cardiaca, cirrosis, síndrome nefrótico |
| Hipervolémica | Mayor de 20 mEq/L | Insuficiencia renal |

**SIADH (criterios esenciales):** osmolaridad sérica menor de 275, osmolaridad urinaria mayor de 100, sodio urinario mayor de 30 con ingesta normal, euvolemia clínica, función tiroidea y suprarrenal normales, sin diuréticos recientes. Causas: posoperatorio, dolor, náusea; fármacos (opioides, carbamazepina, ISRS, ciclofosfamida, vincristina); enfermedades pulmonares (neumonía, cáncer de pulmón de células pequeñas) y del sistema nervioso central.

**Síndrome cerebral perdedor de sal:** en hemorragia subaracnoidea y TCE; se parece al SIADH pero el paciente está **hipovolémico**. Se trata con volumen y sodio, no con restricción.

**Cuadro clínico:** depende de la velocidad más que de la cifra. Náusea, cefalea, letargia, confusión, calambres, marcha inestable (en crónica leve), convulsiones, coma, herniación y paro respiratorio (en aguda grave). Edema cerebral por entrada de agua a las neuronas.

### Tratamiento de la hiponatremia
**Hiponatremia con síntomas graves (cualquier tiempo):**
- **Bolo de 150 ml de NaCl 3% en 20 minutos** (o 100 ml en 10 minutos según otras guías); repetir hasta dos veces más, midiendo el sodio entre bolos, hasta aumentar unos **5 mEq/L** o hasta que mejoren los síntomas.
- Luego, detener la solución hipertónica y tratar la causa, con límite de corrección.

**Preparación casera de NaCl 3% en México:** 890 ml de NaCl 0.9% más 110 ml de NaCl 17.7% (aproximadamente 513 mEq/L). Algunos protocolos usan 900 ml más 100 ml; verificar la receta institucional.

**Límites de corrección (prevención de la desmielinización osmótica):**
- No más de **10 mEq/L en las primeras 24 h** ni 18 mEq/L en 48 h.
- En pacientes de alto riesgo (sodio de 105 o menos, alcoholismo, desnutrición, hipopotasemia, hepatopatía avanzada), no más de **8 mEq/L en 24 h**.
- Meta práctica: 4-6 mEq/L en 24 h es suficiente para quitar el riesgo cerebral.

**Fórmula de Adrogué-Madias** (cambio estimado del sodio sérico tras 1 L de solución):
Δ Na = (Na de la solución + K de la solución − Na sérico) / (ACT + 1)

Ejemplo: mujer de 60 kg (ACT 0.5 × 60 = 30 L), sodio de 118, NaCl 3% (513): (513 − 118) / 31 = 12.7 mEq/L por litro; para subir 6 mEq/L se requieren unos 470 ml en 24 h. Es una estimación: medir sodio cada 2-4 h al inicio, porque la diuresis acuosa al corregir la causa puede provocar sobrecorrección.

**Si hay sobrecorrección:** relajar con glucosada al 5% (unos 3 ml/kg/h) y desmopresina 2-4 µg IV, para volver a bajar el sodio por debajo del límite.

**Síndrome de desmielinización osmótica:** aparece 2-6 días después de una corrección rápida; disartria, disfagia, cuadriparesia, síndrome de enclaustramiento. Es en gran parte irreversible: se previene, no se trata.

**Según la causa (sin síntomas graves):**
- **Hipovolémica:** NaCl 0.9% (al restaurar el volumen se suprime la ADH y el sodio puede subir rápido: vigilar).
- **SIADH:** restricción de líquidos (menos de 800-1000 ml/día o 500 ml por debajo de la diuresis), urea oral (15-30 g/día), tabletas de sal más diurético de asa; tolvaptán en casos seleccionados (riesgo de sobrecorrección y hepatotoxicidad). Suspender fármacos causales y tratar dolor y náusea.
- **Hipervolémica:** restricción de agua y sodio, diuréticos de asa, tratar la enfermedad de base.
- **Insuficiencia suprarrenal:** hidrocortisona.
- **Hipotiroidismo:** levotiroxina.

### Hiponatremia postoperatoria: prevención
Evitar soluciones hipotónicas de mantenimiento (glucosada sola, mixta 0.45%) en el postoperatorio, sobre todo en niños y mujeres jóvenes; usar soluciones isotónicas y medir sodio diariamente en pacientes con líquidos IV.

### Hipernatremia
**Definición:** sodio mayor de 145 mEq/L. Siempre implica hipertonicidad. Ocurre cuando falta acceso al agua o la sed no funciona: ancianos, pacientes intubados o con alteración de la conciencia, lactantes.

**Causas:**
- **Pérdida de agua libre:** pérdidas insensibles (fiebre, quemaduras, ventilación), gastrointestinales (diarrea osmótica, lactulosa), renales: diuresis osmótica (glucosa, manitol, urea en alimentación enteral hiperproteica), **diabetes insípida** central (TCE, neurocirugía, muerte encefálica) o nefrogénica (litio, hipercalcemia, hipopotasemia).
- **Ganancia de sodio:** bicarbonato, solución hipertónica, ahogamiento en agua salada, hiperaldosteronismo.

**Cuadro clínico:** sed, irritabilidad, letargia, debilidad, hiperreflexia, convulsiones, coma; la deshidratación neuronal puede romper venas puente (hemorragia intracraneal).

**Diagnóstico:** osmolaridad urinaria: mayor de 600-800 mOsm/kg indica respuesta renal adecuada (pérdidas extrarrenales o falta de ingesta); menor de 300 con poliuria sugiere diabetes insípida (prueba con desmopresina: la central concentra la orina).

### Tratamiento de la hipernatremia
**Déficit de agua libre** = ACT × [(Na actual / 140) − 1]

Ejemplo: varón de 70 kg (ACT 42 L), sodio de 160: 42 × (160/140 − 1) = 6 L de agua libre.

- Corregir **no más de 10-12 mEq/L en 24 h** en hipernatremia crónica (riesgo de edema cerebral); en hipernatremia aguda (horas), puede corregirse más rápido (1-2 mEq/L/h).
- Sumar las pérdidas continuas (insensibles y urinarias) al déficit calculado.
- **Vía:** agua por sonda enteral si es posible; IV con glucosada al 5% o NaCl 0.45%. En hipovolemia con choque, primero restaurar volumen con cristaloide isotónico.
- **Diabetes insípida central:** desmopresina (1-2 µg IV o SC cada 12-24 h); en muerte encefálica del donador, vasopresina o desmopresina.
- Medir sodio cada 4-6 h al inicio.

### Perlas de examen y errores frecuentes
- Hiponatremia con síntomas graves: 150 ml de NaCl 3% en 20 minutos, repetir hasta 2 veces; meta inicial +5 mEq/L.
- Límite de corrección: 10 mEq/L en 24 h (8 en alto riesgo).
- SIADH es euvolémico con sodio urinario alto; el síndrome perdedor de sal es hipovolémico.
- Hiperglucemia: sumar 1.6 mEq/L por cada 100 mg/dl por arriba de 100.
- Déficit de agua = ACT × (Na/140 − 1).
- Hiponatremia postoperatoria = ADH más soluciones hipotónicas.
- Desmielinización osmótica: días después de corregir rápido.

### Referencias
Spasovski G et al. *Clinical practice guideline on diagnosis and treatment of hyponatraemia* (ESE/ESICM/ERA-EDTA 2014) · Verbalis JG et al. *Am J Med* 2013 (recomendaciones del panel de expertos) · Adrogué HJ, Madias NE. *NEJM* 2000;342:1493 y 1581 · Schwartz y Sabiston, capítulos de líquidos y electrolitos · NICE CG174.
`),
    sheet('liq-potasio', '03', 'Trastornos del potasio y magnesio', `
## Trastornos del potasio y magnesio

### Potasio: fisiología
- Normal en suero: **3.5-5.0 mEq/L**. El 98% del potasio corporal (unos 3500 mEq) es intracelular; por eso una cifra sérica pequeña refleja grandes cambios de reserva.
- **Distribución transcelular** (cambios rápidos sin alterar el contenido total): la insulina, los agonistas beta-2 y la alcalosis meten potasio a la célula; la acidosis (sobre todo la inorgánica), la hiperosmolaridad, la lisis celular y los betabloqueadores lo sacan.
- **Excreción renal:** el túbulo colector cortical lo secreta bajo el efecto de la aldosterona, el flujo distal y la llegada de sodio. El riñón conserva el potasio peor que el sodio: aun en ayuno se pierden 10-20 mEq/día.
- Determina el potencial de membrana en reposo; sus alteraciones afectan sobre todo al corazón y al músculo.

### Hipopotasemia
**Definición:** potasio menor de 3.5 mEq/L (grave, menor de 2.5).

**Causas en el paciente quirúrgico:**
| Mecanismo | Ejemplos |
|---|---|
| Pérdidas gastrointestinales | Diarrea, fístulas, ileostomía de alto gasto, adenoma velloso, preparación intestinal |
| **Vómito y sonda nasogástrica** | La pérdida gástrica de potasio es pequeña; la hipopotasemia se debe sobre todo a **pérdida renal**: la alcalosis metabólica y el hiperaldosteronismo secundario a hipovolemia aumentan la secreción distal |
| Renales | Diuréticos de asa y tiazidas, hiperaldosteronismo, anfotericina B, **hipomagnesemia**, poliuria postobstructiva, recuperación de necrosis tubular |
| Desplazamiento intracelular | Insulina (cetoacidosis tratada), agonistas beta (salbutamol), alcalosis, **síndrome de realimentación**, hipotermia |
| Ingesta deficiente | Ayuno prolongado con soluciones sin potasio |

**Cuadro clínico:** debilidad muscular, fatiga, calambres, íleo (puede prolongar el íleo postoperatorio), retención urinaria, rabdomiólisis (menos de 2.5), parálisis ascendente e insuficiencia respiratoria (menos de 2.0), arritmias (más en cardiópatas y con digoxina) y poliuria por resistencia a ADH.

**Electrocardiograma:** aplanamiento de la onda T, **onda U** prominente, depresión del ST, prolongación del intervalo QU, extrasístoles, taquicardias auriculares y ventriculares, *torsade de pointes* y fibrilación ventricular.

### Tratamiento de la hipopotasemia
**Estimación del déficit:** por cada 1 mEq/L de descenso por debajo de 3.5 faltan, aproximadamente, 200-400 mEq (relación no lineal; en la práctica, de 3.5 a 3.0 = 100-200 mEq).

**Vía oral** (preferida si hay vía oral y no es grave): KCl 40-100 mEq/día en dosis divididas (máximo unos 40 mEq por toma).

**Vía IV** (grave, sintomática, arritmias o sin vía oral):
| Parámetro | Vía periférica | Vía central |
|---|---|---|
| Velocidad máxima habitual | 10 mEq/h | 20 mEq/h (hasta 40 mEq/h en urgencia vital con monitoreo continuo en UCI) |
| Concentración máxima habitual | 40 mEq/L (hasta 60-80 en algunas guías; flebitis y dolor) | Mayor, en bombas con volumen controlado |

- Usar **bomba de infusión** y monitoreo ECG si la velocidad es mayor de 10 mEq/h.
- Diluir en NaCl 0.9% (no en glucosada, que estimula insulina y puede bajar más el potasio al inicio).
- **Nunca en bolo IV directo**: puede causar paro cardiaco. El KCl concentrado es un medicamento de alto riesgo (almacenamiento separado, doble verificación).
- **Corregir el magnesio:** la hipopotasemia es refractaria si el magnesio está bajo.
- Medir potasio a las 2-4 h de reposiciones IV importantes.
- En alcalosis metabólica por vómito o SNG: NaCl 0.9% más KCl (corrige el volumen, el cloro y el potasio).
- Fosfato de potasio si coexiste hipofosfatemia (realimentación, cetoacidosis).

### Hiperpotasemia
**Definición:** potasio mayor de 5.0-5.5 mEq/L; grave, de 6.5 o más, o con cambios electrocardiográficos.

**Pseudohiperpotasemia:** hemólisis de la muestra (torniquete prolongado, aguja fina, puño cerrado), trombocitosis o leucocitosis extremas. Si el ECG es normal y no hay causa, repetir la muestra (sin retrasar el tratamiento si hay cambios en el ECG).

**Causas:**
| Mecanismo | Ejemplos |
|---|---|
| Menor excreción | **Lesión renal aguda** y ERC, hipoaldosteronismo, insuficiencia suprarrenal, fármacos (IECA, ARA-II, espironolactona, amilorida, trimetoprim, AINE, heparina, tacrolimus) |
| Salida celular | Acidosis, **rabdomiólisis**, síndrome de aplastamiento, lisis tumoral, hemólisis, **reperfusión** de una extremidad o víscera isquémica, quemaduras, hiperosmolaridad (hiperglucemia), betabloqueadores, digoxina en intoxicación |
| Aporte | Transfusión masiva de sangre almacenada (el potasio de la unidad aumenta con los días), potasio IV excesivo, sustitutos de sal |
| **Succinilcolina** | Eleva el potasio unos 0.5 mEq/L en todos; en quemados (después de 24-48 h), lesión medular, denervación, inmovilidad prolongada, rabdomiólisis o miopatías puede causar hiperpotasemia letal por receptores extrauniones |

**Cuadro clínico:** debilidad, parestesias, parálisis flácida, arritmias y paro (asistolia o fibrilación ventricular). A menudo **asintomática hasta el paro**.

**Electrocardiograma (secuencia aproximada, no siempre ordenada ni correlacionada con la cifra):** ondas T altas y picudas → prolongación del PR y aplanamiento o desaparición de la onda P → ensanchamiento del QRS → patrón sinusoidal → fibrilación ventricular o asistolia. También bradicardia y bloqueos.

### Tratamiento de la hiperpotasemia (tres pasos simultáneos)
**1. Estabilizar la membrana cardiaca** (si hay cambios en el ECG o potasio de 6.5 o más):
- **Gluconato de calcio al 10%: 10-30 ml (1-3 g) IV en 5-10 min**; efecto en 1-3 min, dura 30-60 min; repetir si el ECG no mejora.
- Cloruro de calcio al 10%: 10 ml (tres veces más calcio elemental; por vía central por riesgo de necrosis si se extravasa).
- Precaución con digoxina (tradicionalmente se temía el «corazón de piedra»; la evidencia actual sugiere que es seguro administrarlo lentamente).

**2. Redistribuir el potasio hacia la célula:**
- **Insulina rápida 10 U IV más 25 g de glucosa** (50 ml de glucosa al 50%), inicia en 15-30 min, dura 4-6 h, baja 0.6-1.0 mEq/L; vigilar hipoglucemia (sobre todo en ERC: considerar 5 U o infusión de glucosa posterior). Si la glucosa es mayor de 250 mg/dl, solo insulina.
- **Salbutamol nebulizado 10-20 mg** (dosis mayores que las de broncodilatación), efecto aditivo con la insulina; baja 0.5-1.0 mEq/L.
- **Bicarbonato de sodio:** solo si hay acidosis metabólica significativa; poco efecto aislado.

**3. Eliminar el potasio del cuerpo:**
- **Diuréticos de asa** (furosemida 40-80 mg IV) si hay diuresis y volumen adecuados.
- **Quelantes intestinales:** ciclosilicato de sodio y zirconio (10 g cada 8 h; inicio en 1-2 h), patirómero; el poliestireno sulfonato de sodio (Kayexalate) actúa lento y se asocia a necrosis intestinal, sobre todo con sorbitol y en postoperatorio: evitarlo en pacientes recién operados.
- **Hemodiálisis:** el método más eficaz; en hiperpotasemia refractaria, lesión renal grave, rabdomiólisis o lisis tumoral.

Además: suspender fármacos y aportes de potasio, tratar la causa (desbridar tejido necrótico, revascularizar, fasciotomía en síndrome compartimental), y monitoreo ECG continuo.

### Magnesio: fisiología
- Normal en suero: **1.7-2.4 mg/dl** (aproximadamente 1.4-2.0 mEq/L). Menos de 1% del magnesio corporal está en el suero (el resto en hueso y músculo): la cifra sérica puede ser normal con depleción corporal.
- Cofactor de la Na/K-ATPasa y de cientos de enzimas; regula la liberación de PTH.

### Hipomagnesemia
**Causas:** desnutrición y alcoholismo, diarrea, fístulas, ileostomías de alto gasto, intestino corto, pancreatitis, diuréticos, **inhibidores de bomba de protones** de uso prolongado, aminoglucósidos, anfotericina, cisplatino, síndrome de realimentación, poliuria, paratiroidectomía (hueso hambriento).

**Clínica:** temblor, hiperreflexia, signos de Chvostek y Trousseau, tetania, convulsiones, arritmias (incluida *torsade de pointes*), **hipopotasemia refractaria** (pérdida renal de potasio) e **hipocalcemia refractaria** (menor secreción y resistencia a la PTH).

**Tratamiento:**
- *Torsade de pointes* o convulsiones: **sulfato de magnesio 2 g IV en 5-15 min** (en paro, en bolo).
- Grave sintomático: 1-2 g IV en 15-60 min, seguido de 4-8 g en 12-24 h; continuar varios días para reponer depósitos (la mitad de lo administrado se pierde por la orina).
- Leve y asintomático: vía oral (óxido o cloruro de magnesio), aunque causa diarrea.
- Reducir la dosis a la mitad en insuficiencia renal y vigilar reflejos.

### Hipermagnesemia
Rara; casi siempre por aporte excesivo en insuficiencia renal (antiácidos, laxantes, enemas con magnesio) o por tratamiento de preeclampsia. **Clínica escalonada:** náusea, rubor e hipotensión; luego **pérdida de reflejos osteotendinosos** (aproximadamente a partir de 4-6 mEq/L, unos 5-7 mg/dl), somnolencia, bradicardia y bloqueos; **parálisis respiratoria y paro** con cifras de unos 10 mEq/L o más (unos 12 mg/dl o más). **Tratamiento:** suspender el aporte, **gluconato de calcio al 10% 10-20 ml IV** (antagoniza el efecto), líquidos con diurético de asa si la función renal lo permite, hemodiálisis en casos graves.

### Perlas de examen y errores frecuentes
- Hipopotasemia por SNG o vómito: la pérdida principal es **renal** (alcalosis e hiperaldosteronismo).
- Onda U = hipopotasemia; T picuda = hiperpotasemia.
- KCl periférico: no más de 10 mEq/h; nunca en bolo.
- Hipopotasemia que no corrige: medir y reponer magnesio.
- Hiperpotasemia con cambios en el ECG: primero calcio (no baja el potasio, protege el corazón).
- Insulina 10 U más 25 g de glucosa; salbutamol 10-20 mg nebulizado.
- Succinilcolina contraindicada en quemados después de 24-48 h, aplastamiento y lesión medular.
- Hipermagnesemia: la pérdida de reflejos precede a la parálisis respiratoria.

### Referencias
Schwartz y Sabiston, capítulos de líquidos y electrolitos · UK Kidney Association. *Clinical practice guidelines: treatment of acute hyperkalaemia in adults* (2020, actualización 2023) · KDIGO Controversies Conference on potassium (2020) · Kraft MD et al. *Am J Health Syst Pharm* 2005 (reposición de electrolitos) · AHA, *Guidelines for CPR and ECC*, alteraciones electrolíticas.
`),
    sheet('liq-calcio', '04', 'Trastornos del calcio y fósforo', `
## Trastornos del calcio y fósforo

### Fisiología del calcio
- El 99% del calcio está en el hueso. En el suero, **calcio total 8.5-10.5 mg/dl**: cerca de 40-45% unido a proteínas (sobre todo albúmina), 10% unido a aniones y 45-50% **ionizado** (la fracción activa): **1.12-1.32 mmol/L** (4.5-5.3 mg/dl).
- **Calcio corregido por albúmina** = calcio total + 0.8 × (4 − albúmina en g/dl). Es una aproximación poco confiable en el paciente grave: en críticos, medir calcio iónico.
- La **alcalosis** aumenta la unión a albúmina y **reduce el calcio iónico** (parestesias en la hiperventilación); la acidosis lo aumenta.
- Regulación: **PTH** (aumenta la resorción ósea y la reabsorción renal de calcio, disminuye la de fosfato y activa la 1-alfa hidroxilasa renal), **calcitriol** (aumenta la absorción intestinal de calcio y fosfato) y calcitonina (papel menor). El receptor sensor de calcio de la paratiroides responde en minutos.
- Funciones: excitabilidad neuromuscular, contracción muscular y cardiaca, coagulación (factor IV), secreción hormonal.

### Hipocalcemia
**Definición:** calcio total corregido menor de 8.5 mg/dl o iónico menor de 1.12 mmol/L.

**Causas relevantes en cirugía:**
| Causa | Comentario |
|---|---|
| **Postiroidectomía total o paratiroidectomía** | Hipoparatiroidismo transitorio (desvascularización o resección inadvertida de paratiroides) en 10-30% tras tiroidectomía total; permanente en 1-3%. **Hueso hambriento** tras paratiroidectomía por hiperparatiroidismo grave (con hipofosfatemia e hipomagnesemia) |
| **Transfusión masiva** | El citrato de los hemoderivados quela el calcio iónico; empeora en hipotermia y disfunción hepática. Forma parte del «diamante letal» del trauma |
| **Pancreatitis aguda** | Saponificación de calcio con la grasa necrótica; criterio de gravedad de Ranson (menor de 8 mg/dl) |
| Sepsis y choque | Hipocalcemia iónica frecuente; marcador de gravedad |
| Hipomagnesemia | Altera secreción y acción de la PTH |
| Insuficiencia renal | Hiperfosfatemia y déficit de calcitriol |
| Deficiencia de vitamina D | Malabsorción, cirugía bariátrica, ausencia de sol |
| Rabdomiólisis y lisis tumoral | Precipitación con fosfato |
| Fármacos | Bisfosfonatos, denosumab, foscarnet, cinacalcet |
| Alcalosis aguda | Hiperventilación (baja el iónico) |

**Cuadro clínico:** parestesias periorales y acras, calambres, **signo de Chvostek** (contracción de la comisura labial al percutir el nervio facial delante del oído; presente en 10% de sanos), **signo de Trousseau** (espasmo carpopedal al inflar el manguito por arriba de la sistólica 3 minutos; más específico), tetania, laringoespasmo y broncoespasmo, convulsiones, confusión, hipotensión, insuficiencia cardiaca y **prolongación del QT**.

**Tratamiento:**
- **Sintomática o aguda grave (iónico menor de 0.9-1.0 mmol/L, tetania, convulsiones, QT largo):** **gluconato de calcio al 10%, 10-20 ml (1-2 g) IV en 10-20 minutos**, seguido de infusión (por ejemplo, 100 ml de gluconato al 10% —930 mg de calcio elemental— en 1 L de glucosada al 5% o NaCl 0.9% a 50-100 ml/h, equivalente a 0.5-1.5 mg/kg/h de calcio elemental), ajustada por el calcio cada 4-6 h. El **cloruro de calcio al 10%** (10 ml = 272 mg de calcio elemental, unas tres veces más que el gluconato) se prefiere en paro y en transfusión masiva, por vía central (necrosis si se extravasa).
- No mezclar calcio con bicarbonato (precipita) ni con sangre citratada en la misma vía.
- **Corregir el magnesio** al mismo tiempo.
- **Crónica o leve:** carbonato de calcio (1-3 g de calcio elemental al día en dosis divididas, con alimentos) más **calcitriol** (0.25-1 µg/día) en hipoparatiroidismo.
- **Transfusión masiva:** medir calcio iónico y mantenerlo por arriba de 1.1 mmol/L (empíricamente, 1 g de cloruro o 3 g de gluconato por cada 4 unidades de sangre, según protocolo).
- **Postiroidectomía:** medir calcio (y PTH) a las 6-24 h; PTH baja (menor de 10-15 pg/ml) predice hipocalcemia sintomática y permite iniciar calcio y calcitriol profilácticos.

### Hipercalcemia
**Definición:** calcio total corregido mayor de 10.5 mg/dl. Leve menor de 12, moderada 12-14, **grave mayor de 14 mg/dl** (crisis hipercalcémica).

**Causas:** el **hiperparatiroidismo primario** es la causa más frecuente en pacientes ambulatorios y la **neoplasia** en hospitalizados (juntas explican más de 90%). Mecanismos de la hipercalcemia maligna: péptido relacionado con PTH (PTHrP: carcinomas epidermoides, renal, mama), metástasis osteolíticas (mama, mieloma), producción de calcitriol (linfomas). Otras: granulomatosis (sarcoidosis, tuberculosis), tiazidas, litio, intoxicación por vitamina D o A, inmovilización, hipertiroidismo, insuficiencia suprarrenal, síndrome leche-alcalinos, hipercalcemia hipocalciúrica familiar (no operar).

**Cuadro clínico («piedras, huesos, quejidos abdominales y gemidos psíquicos»):** litiasis renal y nefrocalcinosis, poliuria (diabetes insípida nefrogénica) y deshidratación, dolor óseo y osteoporosis, náusea, estreñimiento, úlcera péptica, **pancreatitis**, debilidad, confusión, depresión, coma; **acortamiento del QT**, bradicardia y bloqueos.

**Diagnóstico:** confirmar con calcio corregido o iónico; medir **PTH**: alta o inapropiadamente normal indica hiperparatiroidismo; suprimida, causa no paratiroidea (PTHrP, vitamina D, electroforesis de proteínas, imagen en busca de tumor). Calcio urinario para descartar hipercalcemia hipocalciúrica familiar.

**Tratamiento de la hipercalcemia grave:**
1. **Hidratación con NaCl 0.9%**: 200-300 ml/h (ajustar a cardiópatas y renales) con meta de diuresis de 100-150 ml/h; corrige la deshidratación y aumenta la calciuria.
2. **Calcitonina** 4 UI/kg SC o IM cada 12 h: actúa en horas, efecto modesto y transitorio (taquifilaxia en 48 h).
3. **Bisfosfonato IV:** **ácido zoledrónico 4 mg IV en 15 min** (o pamidronato 60-90 mg en 2-4 h); efecto en 2-4 días, dura semanas; ajustar en insuficiencia renal.
4. **Denosumab** (120 mg SC) si hay insuficiencia renal o refractariedad a bisfosfonatos.
5. **Glucocorticoides** en hipercalcemia mediada por calcitriol (linfoma, granulomatosis) o mieloma.
6. **Furosemida** solo después de restaurar el volumen (ya no se recomienda de rutina).
7. **Hemodiálisis** en hipercalcemia grave con insuficiencia renal o cardiaca.
8. Tratar la causa: **paratiroidectomía** en hiperparatiroidismo primario sintomático o que cumpla criterios.

### Fisiología del fósforo
- Normal: **2.5-4.5 mg/dl**. El 85% está en el hueso; el resto, intracelular. Forma ATP, 2,3-difosfoglicerato, fosfolípidos y ácidos nucleicos.
- Se regula por la PTH (fosfaturia), el calcitriol y el FGF-23.

### Hipofosfatemia
**Causas:**
- **Síndrome de realimentación** (ver el módulo de nutrición): al reiniciar carbohidratos en un desnutrido, la insulina mete fosfato, potasio y magnesio a la célula.
- Alcoholismo, cetoacidosis diabética en tratamiento, alcalosis respiratoria, sepsis, quemaduras, hueso hambriento tras paratiroidectomía, hiperparatiroidismo, quelantes de fósforo y antiácidos, diálisis continua, hierro carboximaltosa IV (aumenta FGF-23).
- Hepatectomía mayor: la regeneración hepática consume fosfato (la hipofosfatemia postoperatoria es frecuente y se asocia a insuficiencia hepática).

**Clínica (sobre todo con menos de 1 mg/dl):** debilidad muscular, **insuficiencia respiratoria y dificultad para el destete** del ventilador, disfunción miocárdica, rabdomiólisis, hemólisis, disfunción leucocitaria y plaquetaria, confusión y convulsiones.

**Tratamiento:**
- Leve (2-2.5 mg/dl) y asintomática: vía oral (fosfato de sodio o potasio, 1-2 g/día de fósforo en dosis divididas; diarrea como efecto adverso).
- Moderada (1-2 mg/dl): IV 0.16-0.24 mmol/kg en 4-6 h.
- Grave (menos de 1 mg/dl) o sintomática: IV 0.32-0.64 mmol/kg en 6-12 h (hay protocolos más agresivos en UCI).
- Elegir fosfato de potasio si el potasio es menor de 4 mEq/L; de sodio si el potasio es alto.
- Precauciones: la infusión rápida provoca hipocalcemia y precipitación de fosfato de calcio; reducir en insuficiencia renal.

### Hiperfosfatemia
Casi siempre por **insuficiencia renal**; también lisis tumoral, rabdomiólisis, hemólisis, acidosis, enemas o laxantes con fosfato (riesgo de nefropatía aguda por fosfato en preparación intestinal), hipoparatiroidismo. Clínica: la derivada de la hipocalcemia acompañante y calcificaciones metastásicas (producto calcio × fósforo mayor de 55-70). Tratamiento: restringir fósforo, quelantes con los alimentos (sevelámer, carbonato de calcio, lantano), solución salina en lisis tumoral con función renal conservada, hemodiálisis en casos graves.

### Perlas de examen y errores frecuentes
- Calcio corregido = calcio + 0.8 × (4 − albúmina).
- La alcalosis baja el calcio iónico.
- Trousseau es más específico que Chvostek.
- Gluconato de calcio al 10%: 10-20 ml IV lento; cloruro, por vía central.
- Hipocalcemia que no responde: buscar hipomagnesemia.
- Hipercalcemia grave: salina, luego calcitonina y zoledronato; furosemida solo con volumen repuesto.
- Causa más frecuente de hipercalcemia: hiperparatiroidismo (ambulatorio) y cáncer (hospital).
- Hipofosfatemia grave = dificultad para el destete y hemólisis; piensa en realimentación.
- QT largo = hipocalcemia; QT corto = hipercalcemia.

### Referencias
Schwartz y Sabiston, capítulos de líquidos y electrolitos y de paratiroides · Cooper MS, Gittoes NJ. *BMJ* 2008 (hipocalcemia) · Minisola S et al. *BMJ* 2015 (hipercalcemia) · Endocrine Society, *Treatment of hypercalcemia of malignancy in adults* (2022) · ASPEN, *Consensus recommendations for refeeding syndrome* (2020) · American Thyroid Association, hipoparatiroidismo postoperatorio (Orloff, *Thyroid* 2018).
`),
    sheet('liq-acidobase', '05', 'Equilibrio ácido-base e interpretación de la gasometría', `
## Equilibrio ácido-base e interpretación de la gasometría

### Definición
El equilibrio ácido-base es el conjunto de mecanismos que mantienen el pH extracelular entre 7.35 y 7.45 (concentración de H+ de 35-45 nmol/L) a pesar de la producción diaria de ácidos volátiles (CO2, unos 15 000 mmol/día) y fijos (unos 1 mEq/kg/día). Los trastornos ácido-base son marcadores de gravedad en el paciente quirúrgico: la acidosis láctica en el choque, la alcalosis hipoclorémica por vómito, la acidosis hiperclorémica por fístulas o por salina.

### Fisiología y amortiguadores
- **Ecuación de Henderson-Hasselbalch:** pH = 6.1 + log [HCO3 / (0.03 × PaCO2)]. El pH depende del cociente HCO3/PaCO2, no de los valores absolutos.
- **Amortiguadores:** bicarbonato (el más importante en el extracelular, sistema abierto porque el CO2 se elimina por el pulmón), hemoglobina, proteínas plasmáticas, fosfatos y hueso.
- **Pulmón:** regula la PaCO2 en minutos (compensación respiratoria).
- **Riñón:** regula el HCO3 en horas a días (reabsorción de bicarbonato filtrado, excreción de acidez titulable y de amonio).

### Valores normales (nivel del mar)
| Parámetro | Rango |
|---|---|
| pH | 7.35-7.45 |
| PaCO2 | 35-45 mmHg (en la Ciudad de México y zonas altas, aproximadamente 28-34 mmHg) |
| HCO3 | 22-26 mEq/L (algo menor en la altura, 18-22) |
| Exceso de base | −2 a +2 |
| Lactato | Menor de 2 mmol/L |
| Brecha aniónica | 8-12 mEq/L (sin potasio, varía con el método) |

### Lectura sistemática en seis pasos
1. **Verificar la coherencia** de la gasometría (que el pH concuerde con PaCO2 y HCO3).
2. **pH:** acidemia (menor de 7.35) o alcalemia (mayor de 7.45). Un pH normal no excluye trastornos mixtos.
3. **Trastorno primario:** si el pH y la PaCO2 cambian en sentido opuesto, el problema es respiratorio; si el pH y el HCO3 cambian en el mismo sentido, metabólico.
4. **Compensación esperada** (si no se cumple, hay un segundo trastorno):

| Trastorno primario | Compensación esperada |
|---|---|
| Acidosis metabólica | **PaCO2 = 1.5 × HCO3 + 8 (± 2)** (fórmula de Winter) |
| Alcalosis metabólica | PaCO2 = 0.7 × HCO3 + 21 (± 2) (o aumento de 0.7 mmHg por cada mEq de HCO3; rara vez sube de 55) |
| Acidosis respiratoria aguda | HCO3 sube 1 mEq/L por cada 10 mmHg de PaCO2 |
| Acidosis respiratoria crónica | HCO3 sube 3.5-4 mEq/L por cada 10 mmHg |
| Alcalosis respiratoria aguda | HCO3 baja 2 mEq/L por cada 10 mmHg |
| Alcalosis respiratoria crónica | HCO3 baja 4-5 mEq/L por cada 10 mmHg |

La compensación nunca normaliza por completo el pH (excepto, a veces, en la alcalosis respiratoria crónica).

5. **En acidosis metabólica, calcular la brecha aniónica (anion gap):**
   - **BA = Na − (Cl + HCO3)**; normal unos 8-12.
   - **Corregir por albúmina:** sumar 2.5 por cada g/dl de albúmina por debajo de 4 (la hipoalbuminemia, muy frecuente en el paciente quirúrgico, oculta una brecha alta).
6. **Delta-delta** (en brecha alta): Δ BA / Δ HCO3 = (BA − 12) / (24 − HCO3). Entre 1 y 2: acidosis de brecha alta pura; menor de 1: coexiste acidosis de brecha normal; mayor de 2: coexiste alcalosis metabólica (por ejemplo, cetoacidosis más vómito).

### Acidosis metabólica de brecha aniónica elevada
Mnemotecnia **GOLDMARK**: glicoles (etilen y propilenglicol), oxoprolina (paracetamol crónico), L-lactato, D-lactato (intestino corto), metanol, aspirina, insuficiencia renal (*renal failure*), cetoacidosis (diabética, alcohólica, de ayuno).

**Acidosis láctica:**
- **Tipo A (hipoperfusión o hipoxia):** choque de cualquier tipo, isquemia mesentérica, síndrome compartimental, intoxicación por CO o cianuro, anemia grave, convulsiones.
- **Tipo B (sin hipoperfusión evidente):** metformina, linezolid, propofol (síndrome de infusión), adrenalina (estimulación beta-2 de la glucólisis), insuficiencia hepática, deficiencia de tiamina, neoplasias hematológicas, alcalosis.
- **Lactato mayor de 2 mmol/L** define hipoperfusión en el choque séptico (Sepsis-3, junto con vasopresores); mayor de 4 se asocia a mortalidad alta; el **aclaramiento** del lactato (descenso en 2-6 h) es meta de reanimación.
- **En el cirujano: acidosis láctica que no se explica = buscar isquemia mesentérica, necrosis o colección no drenada.**

### Acidosis metabólica de brecha aniónica normal (hiperclorémica)
Pérdida de bicarbonato o ganancia de cloro:
- **Gastrointestinal:** diarrea, **fístulas pancreáticas, biliares o intestinales altas**, ileostomía de alto gasto, ureterosigmoidostomía o conductos ileales disfuncionales.
- **Renal:** acidosis tubulares renales, inhibidores de la anhidrasa carbónica (acetazolamida), insuficiencia renal temprana.
- **Iatrogénica:** **grandes volúmenes de NaCl 0.9%**, nutrición parenteral con mucho cloro.
- **Brecha aniónica urinaria** = (Na + K) urinario − Cl urinario: negativa sugiere pérdida gastrointestinal (el riñón excreta bien amonio); positiva, acidosis tubular renal.

### Tratamiento de la acidosis metabólica
- **Tratar la causa:** reanimación y control del foco en acidosis láctica; insulina y líquidos en cetoacidosis; diálisis en insuficiencia renal o intoxicaciones.
- **Bicarbonato de sodio:** controvertido en acidosis láctica y cetoacidosis (no mejora la hemodinamia y genera CO2 intracelular, hipocalcemia iónica e hipernatremia). Se considera con **pH menor de 7.1-7.2**, sobre todo si hay lesión renal aguda (en el ensayo BICAR-ICU, con pH de 7.20 o menos, mejoró la supervivencia en el subgrupo con LRA moderada a grave) o en acidosis hiperclorémica por pérdidas de bicarbonato (donde sí repone lo perdido). Requiere ventilación adecuada para eliminar el CO2 generado.
- **Déficit de bicarbonato** (orientativo) = 0.5 × peso (kg) × (HCO3 deseado − HCO3 actual); administrar la mitad en varias horas y reevaluar.
- Usar soluciones balanceadas en lugar de salina cuando la acidosis es hiperclorémica.

### Alcalosis metabólica
Es la alteración ácido-base más frecuente en el paciente quirúrgico hospitalizado. Requiere un factor generador (pérdida de H+ o ganancia de HCO3) y un factor de mantenimiento (hipovolemia, hipocloremia, hipopotasemia, hiperaldosteronismo que impiden excretar el bicarbonato).

| Tipo | Cloro urinario | Causas |
|---|---|---|
| **Sensible a cloro** | Menor de 20 mEq/L | **Vómito, succión nasogástrica**, obstrucción del vaciamiento gástrico (estenosis pilórica), diuréticos (tardío), poshipercapnia, adenoma velloso, cloridorrea congénita |
| **Resistente a cloro** | Mayor de 20 mEq/L | Hiperaldosteronismo primario, Cushing, hipopotasemia grave, diuréticos en uso activo, Bartter y Gitelman, exceso de álcali (citrato de la transfusión masiva, síndrome leche-alcalinos) |

**Obstrucción pilórica o vómito prolongado:** alcalosis metabólica **hipoclorémica e hipopotasémica**. Al inicio la orina es alcalina (se excreta bicarbonato con sodio y potasio); con la hipovolemia, la aldosterona retiene sodio a cambio de H+ y K+ y aparece la **aciduria paradójica** (orina ácida pese a la alcalemia).

**Consecuencias:** hipoventilación compensadora, hipocalcemia iónica, hipopotasemia, arritmias, desplazamiento a la izquierda de la curva de disociación de la hemoglobina, dificultad para el destete.

**Tratamiento:** **NaCl 0.9% más KCl** (repone volumen, cloro y potasio) en las sensibles a cloro; inhibidores de bomba de protones si la SNG debe continuar; acetazolamida (250-500 mg) en el paciente con sobrecarga de volumen; en alcalosis grave refractaria, ácido clorhídrico diluido por vía central o hemodiálisis (excepcional). En las resistentes a cloro, tratar la causa (espironolactona, reponer potasio).

### Acidosis respiratoria
Hipoventilación alveolar (PaCO2 mayor de 45 mmHg): depresión del centro respiratorio (opioides, sedantes, anestesia residual, TCE), enfermedad neuromuscular, debilidad diafragmática, tórax inestable, neumotórax, obesidad, EPOC, asma grave, broncoaspiración, distensión abdominal con hipertensión intraabdominal, ventilador mal programado. **Clínica:** somnolencia, cefalea, asterixis, vasodilatación, narcosis por CO2. **Tratamiento:** corregir la causa (naloxona, revertir relajantes), VMNI o intubación. En el EPOC crónico, corregir la PaCO2 lentamente y no más allá de su basal (riesgo de alcalosis metabólica poshipercápnica).

### Alcalosis respiratoria
Hiperventilación (PaCO2 menor de 35 mmHg): dolor, ansiedad, fiebre, **sepsis temprana** (frecuentemente el primer signo), hipoxemia, TEP, embarazo, cirrosis, intoxicación por salicilatos (mixta con acidosis metabólica), ventilación mecánica excesiva, lesión del sistema nervioso central. Tratamiento: el de la causa; ajustar el ventilador.

### El enfoque físico-químico (Stewart), en breve
Describe el pH a partir de tres variables primarias: PaCO2, la **diferencia de iones fuertes** (SID, aproximadamente Na + K − Cl − lactato; normal unos 40) y los ácidos débiles totales (albúmina y fosfato). Explica bien la acidosis hiperclorémica por salina (el Cl alto reduce la SID) y el efecto alcalinizante de la hipoalbuminemia. Es complementario del enfoque tradicional.

### Casos breves
- **Vómito por obstrucción pilórica:** pH 7.52, PaCO2 47, HCO3 37, Cl 85, K 2.9 → alcalosis metabólica hipoclorémica e hipopotasémica con compensación respiratoria adecuada (esperada 0.7 × 37 + 21 = 47) → NaCl 0.9% más KCl.
- **Fístula pancreática de alto gasto:** pH 7.28, PaCO2 30, HCO3 14, Na 138, Cl 114 → BA = 10 (normal) → acidosis hiperclorémica por pérdida de bicarbonato → Hartmann y bicarbonato.
- **Isquemia mesentérica:** pH 7.18, PaCO2 25, HCO3 9, BA 26, lactato 8 → acidosis láctica de brecha alta con compensación adecuada (1.5 × 9 + 8 = 21.5 ± 2; 25 sugiere fatiga respiratoria incipiente) → reanimación y cirugía urgente.

### Perlas de examen y errores frecuentes
- Winter: PaCO2 esperada = 1.5 × HCO3 + 8 ± 2.
- Corregir la brecha aniónica por la albúmina.
- Lactato alto inexplicable en el posoperatorio: isquemia o colección.
- Vómito o SNG: alcalosis hipoclorémica hipopotasémica, cloro urinario bajo, aciduria paradójica.
- Fístula pancreática y diarrea: acidosis de brecha normal.
- Salina 0.9% en exceso: acidosis hiperclorémica.
- Alcalosis respiratoria inexplicable: considerar sepsis temprana o TEP.
- En la altura, la PaCO2 normal es más baja.

### Referencias
Berend K, de Vries APJ, Gans ROB. *Physiological approach to assessment of acid-base disturbances*, NEJM 2014;371:1434-45 · Seifter JL. *Integration of acid-base and electrolyte disorders*, NEJM 2014 · Jaber S et al. BICAR-ICU, *Lancet* 2018 · Kraut JA, Madias NE. *Lactic acidosis*, NEJM 2014 · Schwartz y Sabiston, capítulos de líquidos y electrolitos.
`),

  ],

  'ap-r1-cicatrizacion': [
    sheet('cic-proceso', '01', 'Proceso normal, factores que la alteran y cicatrización patológica', `
## Cicatrización: proceso normal, factores que la alteran y cicatrización patológica

### Definición
La cicatrización es la respuesta del organismo a la pérdida de continuidad de un tejido, que busca restaurar su integridad mediante una secuencia ordenada y superpuesta de eventos celulares y moleculares: hemostasia, inflamación, proliferación y remodelación. En el adulto, la piel y la mayoría de los tejidos se reparan con una **cicatriz** (tejido fibroso) y no con regeneración del tejido original; el hígado y el epitelio son excepciones con capacidad regenerativa. Una cicatriz madura alcanza, como máximo, **70-80% de la fuerza tensil** de la piel sana.

### Epidemiología e impacto
Las complicaciones de herida (infección, dehiscencia, eventración) son de las más frecuentes en cirugía general. Las heridas crónicas (úlceras venosas, pie diabético, lesiones por presión) afectan a 1-2% de la población en países desarrollados; en México, el pie diabético es una de las principales causas de amputación no traumática y de hospitalización en el IMSS.

### Fases de la cicatrización
| Fase | Tiempo | Células clave | Eventos principales |
|---|---|---|---|
| **Hemostasia** | Minutos a horas | Plaquetas | Vasoconstricción, agregación plaquetaria, coágulo de fibrina (matriz provisional); liberación de PDGF, TGF-beta, VEGF desde los gránulos alfa |
| **Inflamación** | Días 0-4 (hasta 6) | **Neutrófilos** (24-48 h) y luego **macrófagos** (48-96 h) | Vasodilatación y permeabilidad; los neutrófilos fagocitan bacterias y detritus; el **macrófago es la célula indispensable**: fagocita, cambia de fenotipo M1 a M2 y coordina con factores de crecimiento la siguiente fase |
| **Proliferación** | Días 4-21 | **Fibroblastos**, células endoteliales, queratinocitos, miofibroblastos | Tejido de granulación (fibroblastos, colágeno tipo III, nuevos capilares), angiogénesis (VEGF, FGF), epitelización, contracción por miofibroblastos |
| **Remodelación (maduración)** | De la semana 3 a 1-2 años | Fibroblastos, metaloproteinasas | Recambio del colágeno tipo III por tipo I, entrecruzamiento y reorientación de fibras, menor vascularidad, aumento progresivo de la fuerza |

Los linfocitos T aparecen hacia el día 5-7 y regulan la fase proliferativa.

**Fuerza tensil de una herida cutánea suturada:** unos 20% a las 3 semanas, 50% al mes y 70-80% al año. La aponeurosis cerrada tiene alrededor de 50% de su fuerza a las 6 semanas: por eso se restringe el esfuerzo físico intenso durante 4-6 semanas tras una laparotomía.

### Síntesis de colágeno
- El colágeno es la proteína más abundante del cuerpo; en la piel predomina el tipo I (80%) y el tipo III (20%). La herida temprana tiene más tipo III.
- La **hidroxilación de prolina y lisina** requiere **vitamina C (ácido ascórbico)**, **oxígeno**, hierro ferroso y alfa-cetoglutarato; sin ella las fibras son inestables (escorbuto: heridas que no cicatrizan y cicatrices viejas que se reabren).
- El **entrecruzamiento** de las fibras (lisil oxidasa, que requiere cobre) da la fuerza tensil.
- Las **metaloproteinasas de matriz** (MMP) degradan colágeno y están reguladas por sus inhibidores tisulares (TIMP); su exceso caracteriza a la herida crónica.

### Factores de crecimiento
| Factor | Origen principal | Acción |
|---|---|---|
| PDGF | Plaquetas, macrófagos | Quimiotaxis y proliferación de fibroblastos; becaplermina (PDGF recombinante) aprobado para úlcera diabética |
| TGF-beta | Plaquetas, macrófagos | Síntesis de colágeno, fibrosis; su exceso se asocia a queloides |
| VEGF | Macrófagos, queratinocitos | Angiogénesis |
| FGF (básico) | Macrófagos | Angiogénesis, proliferación de fibroblastos |
| EGF y KGF | Plaquetas, fibroblastos | Epitelización |
| IL-1, TNF-alfa | Macrófagos | Inflamación |

### Tipos de cierre
- **Primera intención (cierre primario):** bordes aproximados con sutura, grapas o adhesivo en heridas limpias; la epitelización sella la superficie en 24-48 h.
- **Segunda intención:** la herida se deja abierta y cierra por granulación, contracción y epitelización; en heridas contaminadas o sucias, abscesos y pérdidas de tejido. Más lenta y con mayor cicatriz.
- **Tercera intención (cierre primario diferido):** herida contaminada que se deja abierta 3-5 días y, si está limpia, se cierra. Reduce la infección en heridas sucias.
- **Cierre con injertos o colgajos** cuando la pérdida no permite aproximación.

**Epitelización y contracción:** los queratinocitos migran desde los bordes y los anexos cutáneos (folículos), unos 1 mm/día en condiciones ideales; necesitan ambiente húmedo. La contracción, mediada por miofibroblastos, reduce el tamaño de las heridas abiertas (puede causar contracturas en articulaciones y cuello).

### Factores que alteran la cicatrización
**Locales:**
| Factor | Mecanismo y dato clave |
|---|---|
| **Infección** | Más de 10⁵ microorganismos por gramo de tejido impide el cierre (excepto estreptococo beta hemolítico, que lo impide con menos) |
| **Isquemia e hipoxia** | La síntesis de colágeno y la actividad bactericida de los neutrófilos necesitan PO2 tisular adecuada (más de 30-40 mmHg); tabaquismo, vasculopatía, tensión excesiva de la sutura, hipovolemia, frío |
| Cuerpo extraño y tejido necrótico | Mantienen la inflamación y favorecen biopelículas |
| Hematoma y seroma | Medio de cultivo, separación de planos |
| Edema | Reduce la perfusión |
| Tensión y movimiento | Isquemia de bordes, dehiscencia, cicatriz ensanchada |
| **Radiación** | Endarteritis obliterante, fibrosis, daño de fibroblastos; efecto permanente |
| Técnica quirúrgica | Manejo brusco, electrocauterio excesivo, espacio muerto |

**Sistémicos:**
| Factor | Comentario |
|---|---|
| Edad avanzada | Inflamación y proliferación más lentas, menor fuerza |
| **Diabetes mellitus** | Disfunción de neutrófilos, microangiopatía, neuropatía, glucosilación del colágeno; la hiperglucemia mayor de 180-200 mg/dl aumenta la infección |
| **Desnutrición** | Pérdida de peso mayor de 10-15%, albúmina menor de 3 g/dl; deficiencia de proteína, vitamina C, vitamina A, zinc, cobre, hierro |
| **Glucocorticoides** | Inhiben la inflamación, la síntesis de colágeno, la epitelización y la contracción; la **vitamina A** (por ejemplo 10 000-25 000 UI/día por 7-10 días, o tópica) revierte parcialmente el efecto (excepto la contracción) |
| **Tabaquismo** | Vasoconstricción por nicotina, monóxido de carbono, hipoxia; suspenderlo al menos 4 semanas antes |
| Obesidad | Tejido graso mal irrigado, tensión, seroma, infección |
| Quimioterapia | Antiproliferativos; diferir cirugía electiva 3-4 semanas tras ciclos citotóxicos |
| **Bevacizumab y antiangiogénicos** | Alteran cicatrización y anastomosis: suspender al menos 28 días antes de cirugía electiva y reiniciar al menos 28 días después (con herida cicatrizada) |
| Inmunosupresores | Sirolimus y everolimus (inhibidores de mTOR) afectan especialmente la cicatrización |
| Uremia, ictericia, insuficiencia hepática | Alteran inflamación y síntesis proteica |
| Anemia | Solo la grave afecta (el aporte de O2 depende más de la perfusión que de la hemoglobina) |
| Hipotermia | Vasoconstricción periférica |
| Enfermedades del tejido conectivo | Ehlers-Danlos, Marfan, osteogénesis imperfecta |

### Cicatrización patológica
**Insuficiente (herida crónica):** herida que no progresa en un orden y tiempo razonables, en general tras 4-12 semanas de tratamiento adecuado. Atrapada en la fase inflamatoria: exceso de proteasas, biopelícula, senescencia celular, isquemia o presión. Tipos principales: úlcera venosa (región maleolar medial, con edema e hiperpigmentación), arterial (distal, dolorosa, bordes «en sacabocado», pulsos ausentes, índice tobillo-brazo menor de 0.9), neuropática o pie diabético (sitios de presión plantar, indolora), lesión por presión (prominencias óseas; estadios 1 a 4, no estadificable y lesión de tejido profundo), por radiación.

**Úlcera de Marjolin:** carcinoma epidermoide que se desarrolla sobre una cicatriz crónica (quemadura, úlcera de larga evolución, osteomielitis con fístula); sospechar ante cambio de aspecto, bordes elevados, sangrado o dolor nuevo: **biopsiar**.

**Excesiva (fibroproliferativa):**
| | Cicatriz hipertrófica | Queloide |
|---|---|---|
| Límites | Dentro de los bordes de la herida original | **Rebasa los bordes** e invade piel sana |
| Aparición | Semanas tras la lesión | Puede aparecer meses después |
| Evolución | Tiende a **regresar** con el tiempo | No regresa; crece |
| Relación | Tensión, zonas de movimiento, quemaduras, infección | Predisposición genética, piel oscura, familiar; menos relación con tensión |
| Localización | Articulaciones, zonas de tensión | Lóbulo de la oreja, esternón, hombros, espalda alta |
| Colágeno | Fibras tipo III paralelas a la superficie | Fibras gruesas tipo I y III desorganizadas |
| Recurrencia tras resección | Baja | **Alta (50-80% con resección sola)** |

**Tratamiento de cicatrices excesivas:**
- **Prevención:** técnica atraumática, cierre sin tensión siguiendo las líneas de tensión, evitar infección, láminas o gel de **silicona** por 2-3 meses en pacientes de riesgo, presoterapia (prendas a 20-30 mmHg, 23 h/día por 6-12 meses en quemados).
- **Primera línea:** silicona y **triamcinolona intralesional** (10-40 mg/ml cada 4-6 semanas; efectos adversos: atrofia, hipopigmentación, telangiectasias).
- Otros: 5-fluorouracilo intralesional, crioterapia, láser de colorante pulsado, toxina botulínica.
- **Queloide:** nunca resecar solo: resección (preferiblemente intramarginal) **más** esteroide intralesional o radioterapia adyuvante temprana.
- **Contracturas:** liberación con zetaplastias o injertos.

### Dehiscencia y eventración
La **dehiscencia aponeurótica** temprana (días 5-8) y la hernia incisional tardía comparten factores: infección de herida (el principal), técnica de cierre (puntos grandes, relación sutura/herida menor de 4:1), obesidad, tos y EPOC, ascitis, desnutrición, esteroides, urgencia, tabaquismo y aneurisma de aorta. La hernia incisional aparece en 10-20% de las laparotomías medias a largo plazo.

### Perlas de examen y errores frecuentes
- El macrófago es la célula indispensable de la cicatrización; el neutrófilo no lo es.
- Colágeno tipo III temprano, tipo I en la cicatriz madura.
- Vitamina C, oxígeno y hierro para la hidroxilación de prolina.
- Fuerza tensil máxima: 70-80% de la piel normal, al año.
- Más de 10⁵ bacterias por gramo impiden el cierre.
- Vitamina A revierte el efecto de los esteroides en la cicatrización.
- Queloide rebasa los bordes y recurre; hipertrófica, no los rebasa y regresa.
- Úlcera crónica que cambia de aspecto: biopsia (Marjolin).
- Bevacizumab: 28 días antes y después.

### Referencias
Sabiston, cap. «Wound healing» · Schwartz, cap. «Wound healing» · Gurtner GC et al. *Wound repair and regeneration*, Nature 2008 · Ogawa R et al. *Japan Scar Workshop consensus* (2019) · Gold MH et al. *International clinical recommendations on scar management* (2014) · Guías del IWGDF (pie diabético, 2023) · NPIAP/EPUAP, lesiones por presión (2019).
`),
    sheet('cic-heridas', '02', 'Tratamiento de heridas: desbridamiento, apósitos y presión negativa', `
## Tratamiento de heridas: desbridamiento, apósitos y presión negativa

### Definición
El tratamiento de heridas es el conjunto de medidas locales y sistémicas que crean las condiciones para que una herida aguda o crónica cierre lo más rápido posible y con la mejor cicatriz: control de la causa, limpieza, desbridamiento, control de la infección, manejo de la humedad, protección de los bordes y elección del método de cierre. Una herida no se «cura» con un apósito: el apósito solo optimiza el ambiente; la causa (isquemia, presión, edema venoso, infección, hiperglucemia) debe corregirse.

### Valoración inicial de la herida
- **Etiología** (quirúrgica, traumática, quemadura, venosa, arterial, neuropática, por presión, oncológica).
- **Tiempo de evolución** (aguda o crónica) y tratamientos previos.
- **Localización, tamaño** (largo × ancho × profundidad, túneles y cavitaciones), **lecho** (porcentaje de granulación roja, esfacelo amarillo, necrosis negra), **exudado** (cantidad y tipo), **bordes** (macerados, epitelizados, socavados, enrollados), **piel perilesional**.
- **Signos de infección:** eritema mayor de 2 cm, calor, induración, dolor creciente, exudado purulento, mal olor, crepitación, fiebre; en heridas crónicas, los signos pueden ser sutiles (aumento de exudado, granulación friable, retraso en el cierre).
- **Perfusión:** pulsos, llenado capilar, **índice tobillo-brazo** (menor de 0.9 enfermedad arterial; menor de 0.5 isquemia grave; mayor de 1.3 vasos no compresibles en diabéticos o renales: usar presión del primer dedo o TcPO2).
- Estado nutricional, glucemia, tabaquismo, fármacos.

### Esquema TIME (preparación del lecho de la herida)
| Letra | Problema | Intervención |
|---|---|---|
| **T** (*Tissue*) | Tejido no viable o deficiente | Desbridamiento |
| **I** (*Infection/Inflammation*) | Infección, biopelícula, inflamación persistente | Limpieza, antisépticos tópicos, antibiótico sistémico si hay infección clínica, desbridamiento |
| **M** (*Moisture*) | Desequilibrio de humedad (seca o con exceso de exudado) | Apósitos que hidraten o absorban; presión negativa |
| **E** (*Edge*) | Bordes que no avanzan | Reevaluar causa, desbridar bordes, terapias avanzadas, injerto |

La versión TIMERS añade **R** (reparación y regeneración: injertos, sustitutos dérmicos) y **S** (factores sociales y del paciente).

### Limpieza
- Irrigar con **solución salina o agua potable** a presión moderada (4-15 psi: jeringa de 35 ml con aguja o catéter calibre 19). En heridas traumáticas, la irrigación abundante es la medida más eficaz contra la infección.
- Los antisépticos (yodopovidona, clorhexidina, peróxido de hidrógeno, hipoclorito) son citotóxicos en concentraciones altas; usarlos de forma limitada en heridas contaminadas o con biopelícula. Las soluciones con **polihexanida (PHMB)** o superoxidadas tienen buen perfil para limpiar heridas crónicas.
- No restregar el tejido de granulación sano.

### Desbridamiento
| Tipo | Cómo | Ventajas | Desventajas |
|---|---|---|---|
| **Quirúrgico (cortante)** | Bisturí o tijera en quirófano o en cama | El más rápido y eficaz; obligatorio en infección necrosante y necrosis extensa | Dolor, sangrado; requiere perfusión adecuada |
| Autolítico | Apósitos que conservan humedad (hidrogeles, hidrocoloides, películas) dejan actuar a las enzimas propias | Indoloro, selectivo | Lento; no en heridas infectadas |
| Enzimático | Colagenasa, papaína | Selectivo, útil si no se puede operar | Lento, costo |
| Mecánico | Gasa húmeda-seca, irrigación pulsátil | Barato | No selectivo, doloroso (la gasa húmeda-seca ya no se recomienda) |
| Biológico | Larvas estériles de *Lucilia sericata* | Muy selectivo | Aceptación, disponibilidad |

**Excepción importante:** la **escara seca, estable y sin infección en el talón o en una extremidad isquémica** no se desbrida hasta revascularizar; funciona como cubierta biológica.

### Apósitos: principio de la cicatrización en ambiente húmedo
Winter (1962) demostró que las heridas húmedas epitelizan más rápido que las secas. El apósito ideal mantiene humedad sin macerar, absorbe exceso de exudado, protege de contaminación, permite el intercambio gaseoso, no se adhiere al lecho, es cómodo, costeable y no requiere cambios frecuentes.

| Apósito | Composición | Indicación | Frecuencia de cambio | Precauciones |
|---|---|---|---|---|
| Gasa | Algodón | Cubierta secundaria, heridas quirúrgicas cerradas, empaquetamiento | Diaria o más | Se adhiere y daña la granulación al retirarla seca |
| Película transparente | Poliuretano semipermeable | Heridas superficiales con poco exudado, protección de catéteres e incisiones | 3-7 días | No absorbe |
| **Hidrocoloide** | Carboximetilcelulosa, pectina | Heridas superficiales con exudado leve o moderado, desbridamiento autolítico, lesiones por presión de estadio 2 | 3-7 días | No en heridas infectadas ni con mucho exudado; olor y gel amarillo normales |
| **Hidrogel** | Agua 70-90% en polímero | Heridas secas, esfacelo, necrosis seca para autolisis, quemaduras superficiales | 1-3 días | Macera si hay exudado |
| **Alginato** | Fibras de algas (alginato de calcio) | Exudado **abundante**, cavidades, heridas sangrantes (efecto hemostático) | 1-3 días | No en heridas secas |
| Hidrofibra | Carboximetilcelulosa | Exudado moderado a abundante | 1-3 días | — |
| **Espuma** | Poliuretano | Exudado moderado a abundante, protección de prominencias | 2-7 días | — |
| Apósitos con **plata** | Plata iónica o nanocristalina | Heridas con carga bacteriana alta o infección local; uso limitado (2 semanas) y reevaluar | Variable | Costo; no de rutina |
| Antimicrobianos alternativos | PHMB, yodo cadexómero, miel de grado médico | Biopelícula, colonización crítica | Variable | Yodo: precaución en tiroides y embarazo |
| Carbón activado | Absorbe olor | Heridas malolientes, tumorales | Variable | — |
| Colágeno, matrices dérmicas | Colágeno bovino o porcino, matrices acelulares | Heridas crónicas estancadas | Variable | Costo |

### Terapia de presión negativa (TPN, sistema VAC)
**Definición:** aplicación de presión subatmosférica controlada a la herida mediante una espuma (poliuretano o polivinil alcohol) o gasa, una película adhesiva hermética y un tubo conectado a una unidad con recolector.

**Mecanismos:** macrodeformación (aproxima los bordes), microdeformación (estimula proliferación y angiogénesis), eliminación de exudado y proteasas, reducción del edema, ambiente húmedo cerrado y estimulación del tejido de granulación.

**Parámetros habituales:** **−125 mmHg continua** (rango −50 a −150 según la herida; menor en tejidos frágiles, pacientes pediátricos o dolor); cambio de apósito cada **48-72 horas** (tres veces por semana; más frecuente si hay infección).

**Indicaciones:**
- Heridas abiertas agudas o crónicas tras desbridamiento (incluida la infección de sitio quirúrgico abierta y la dehiscencia de herida).
- **Abdomen abierto** (sistemas específicos con capa visceral protectora): favorece el cierre fascial primario diferido.
- Fijación de injertos de piel (mejora la integración).
- Pie diabético tras desbridamiento o amputación menor.
- Lesiones por presión de estadio 3 y 4.
- Fasciotomías.
- **TPN incisional en heridas cerradas de alto riesgo** (obesidad, cirugía colorrectal, reintervención): la OMS (2016) la sugiere para reducir la infección del sitio quirúrgico (recomendación condicional, evidencia baja a moderada; resultados heterogéneos en ensayos recientes).

**Contraindicaciones:**
- Tejido necrótico con escara no desbridado.
- Osteomielitis no tratada.
- **Malignidad en la herida** (excepto paliación).
- Fístulas no exploradas o de órganos o cavidades.
- **Vasos, órganos, nervios o anastomosis expuestos** sin una capa protectora interpuesta.
- Sangrado activo o coagulopatía no controlada.

**Complicaciones:** sangrado (vigilar el recolector: si aparece sangre roja abundante, suspender y comprimir), **fístula enteroatmosférica** cuando la espuma toca directamente el intestino, infección por retención de espuma, dolor en los cambios, maceración y lesión de la piel perilesional, retención de fragmentos de espuma.

### Heridas traumáticas agudas
- **Cierre primario** si la herida es limpia y reciente (en general menos de 6-12 h; en cara y cuero cabelludo hasta 24 h por su buena irrigación) tras irrigación y desbridamiento.
- **Cierre primario diferido** en heridas contaminadas, con mucho tejido desvitalizado o de evolución prolongada.
- **Mordeduras:** irrigación abundante y desbridamiento; las de perro en cara se suelen cerrar; las de mano y las de gato, no. Profilaxis con amoxicilina/clavulanato en mordeduras de riesgo (mano, profundas, inmunocomprometidos, gato, humana). Valorar profilaxis antirrábica.
- **Profilaxis antitetánica:**

| Antecedente de vacunación | Herida limpia y menor | Herida propensa a tétanos (sucia, punzante, con tejido necrótico, quemadura, más de 6 h) |
|---|---|---|
| Desconocido o menos de 3 dosis | Toxoide (Td o Tdpa) | Toxoide **más inmunoglobulina antitetánica humana 250 UI IM** (500 UI en heridas muy contaminadas o de más de 24 h, según la guía) en sitio distinto |
| 3 dosis o más | Toxoide si la última fue hace más de 10 años | Toxoide si la última fue hace más de 5 años |

### Manejo de la herida quirúrgica
- Cubrir la incisión cerrada con apósito estéril 24-48 h; después puede bañarse con agua y jabón.
- No usar antimicrobianos tópicos en heridas quirúrgicas cerradas (OMS).
- Infección del sitio quirúrgico superficial: **abrir, drenar, lavar y curar**; antibiótico solo si hay celulitis significativa (más de 5 cm), datos sistémicos o inmunosupresión.
- Heridas abiertas tras infección: curación húmeda o TPN, y cierre diferido o por segunda intención.

### Terapias complementarias
- **Oxígeno hiperbárico:** evidencia en lesiones por radiación (osteorradionecrosis, cistitis rádica) e intoxicación por CO; en pie diabético los resultados son contradictorios (no es de primera línea).
- **Factores de crecimiento tópicos** (becaplermina) y, en México, factor de crecimiento epidérmico humano recombinante intralesional en pie diabético.
- **Injertos de piel y sustitutos dérmicos.**
- **Compresión** en úlceras venosas (30-40 mmHg con ITB mayor de 0.8): pilar del tratamiento.
- **Descarga** (yeso de contacto total) en úlcera neuropática plantar.
- **Revascularización** en úlcera arterial.

### Perlas de examen y errores frecuentes
- TIME: tejido, infección, humedad, bordes.
- Alginato para exudado abundante y sangrado; hidrogel para heridas secas.
- Hidrocoloide no en heridas infectadas.
- TPN: −125 mmHg, cambios cada 48-72 h.
- TPN contraindicada en malignidad, osteomielitis no tratada, vasos u órganos expuestos sin protección y necrosis no desbridada.
- Escara seca en talón isquémico: no desbridar antes de revascularizar.
- Herida propensa a tétanos con menos de 3 dosis: toxoide más inmunoglobulina.
- La compresión es la base del tratamiento de la úlcera venosa (confirmar ITB primero).

### Referencias
Schultz GS et al. *Wound bed preparation: a systematic approach to wound management* (TIME), Wound Repair Regen 2003 · OMS. *Global guidelines for the prevention of surgical site infection* (2016, 2018) · Sabiston y Schwartz, capítulos de cicatrización · World Union of Wound Healing Societies, consensos de presión negativa (2016) y biopelícula · CDC/ACIP, profilaxis antitetánica · GPC IMSS de pie diabético y de úlceras venosas.
`),
  ],
};
