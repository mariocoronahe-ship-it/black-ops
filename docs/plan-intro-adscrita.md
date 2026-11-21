# Plan: intro «El guardián» para la adscrita (Dra. Hernández)

## Objetivo
Reemplazar la entrada actual del panel docente por una escena 3D con el **mismo androide de metal negro** de la intro del residente. Aquí no amenaza: es un **aliado**.

El tono sigue siendo oscuro y cinematográfico, pero **sin terror**. Quedan fuera:
- sustos, embestidas y espasmos;
- la lámpara que falla, el bisturí y la línea plana;
- el ECG acelerado.

Tampoco va la cámara en picada «sobre el paciente».

Usa una paleta nueva y voces nuevas de ElevenLabs.

**No se toca la intro del residente.** Debe seguir idéntica.

## Contexto del proyecto
- **Stack:** SPA en JS puro, sin build. Router por hash en `js/main.js`.
- **Servidor local:** `python3 -m http.server 5173`. En `.claude/launch.json` se llama `calot-os`.
- **Caché:** todos los imports llevan `?v=20261120v`.
  - Al terminar, súbela a `w` en todo el repo:
    ```bash
    grep -rl 'v=20261120v' --include='*.js' --include='*.html' . | grep -v '^./.claude' | xargs sed -i '' 's/v=20261120v/v=20261120w/g'
    ```
  - Los archivos nuevos deben usar ya la versión nueva.
- **Rol:** sale de `document.body.dataset.rol` (`'adscrito'` | `'residente'`), guardado en `localStorage['calot:rol']`.
- **Entrada actual:** `playRoleIntro(playIntro, reduced)` en `js/fx/boot.js` (al final del archivo). Si el rol es adscrito, importa `js/fx/intro-adscrito.js` y llama a `playAdscritoIntro({ reduced })`.
- **`js/fx/intro-adscrito.js` hoy:** intro 2D de unos 6.5 s (ojo + anillo de tarjetas + bienvenida).
  - **Debe quedarse como respaldo** si no hay WebGL2 o si el 3D falla.
  - Su función `summary()` ya calcula residentes, alertas, mensajes y tarjetas (`cohort()` de `js/views/adscrito.js`, `unread('adscrito')` de `js/mensajes.js`). Reutilízala.

### Androide 3D: `js/fx/androide/`
- **`intro-androide.js`:** `createAndroidIntro({...})`. Maneja el reloj, saltar (Esc/Espacio/Enter/clic), calidad adaptativa y `window.__ciT` para congelar cuadros.
- **`android-timeline.js`:** guion del residente.
  - Exporta `sampleTimeline(t, reduced)`, `cueList(doctor, reduced, logoUrl)`, `CUE`, `TOTAL`, `REDUCED_TOTAL`, `BEEPS` y `rng`.
  - **Campos que devuelve cada muestra:** `cam {px,py,pz,tx,ty,tz,fov,roll}`, `yaw`/`pitch`/`roll` (rad), `headT`, `body [x,y,z,inclinación,giro]`, `eye`, `cables`, `lamp`, `scalpel`, `hr`, `key`, `rimLeft`, `rimRight`, `under`, `fill`, `halo`, `mist`, `crackGlow`, `crackSpread`, `scan`, `jawExtra`, `exposure`, `bloom`, `aberration`, `flicker`, `motion` y `time`.
- **`android-stage.js`:**
  - `createStage({ THREE, canvas, assetBase, vendorBase, level, reduced })`.
  - **Importa `sampleTimeline` de forma fija** (línea 1 y unas 315). Hay que volverlo inyectable.
  - Ahí están el material de metal, las luces `rimL`/`rimR`/`fill`/`keyL`/`under`/`backGlow`, los cables rojos (`MeshBasicMaterial`), la lámpara y el bisturí.
- **`android-shaders.js`:** ojos, boca, párpados y juntas/grietas, que hoy son **rojos**. Hay que parametrizar el color.
- **`android-ui.js`:** `mountUi(...)` crea el lienzo, las barras de cine, los subtítulos (`cueList`) y el HUD de signos vitales. La adscrita **no** lleva el HUD del monitor.
- La boca se mueve con `getVoiceLevel()` de `js/fx/voice.js`, así que las voces deben sonar por `speak()` para que la boca se sincronice.

### Audio
- **`js/fx/voice.js`:**
  - `speak(name, { at, delay, vol, interrupt })` reproduce `assets/voz/<name>.mp3` con un leve procesado robótico.
  - `prefetchVoice(names)` precarga. Respeta `isVoiceOn()`.
- **`js/fx/portal-audio.js`:** `getEngine()` devuelve `{ ctx, dry, comp, verb, ... }`; también exporta `isPortalAudioMuted()`.
- **Regla del usuario:** nada de agudos ásperos. Usa paso-bajo de unos 2–2.5 kHz en lo sintetizado y ninguna onda cuadrada o diente de sierra sin filtrar.

## Guion (unos 16 s)
**Paleta aliada:**

| Elemento | Color |
|---|---|
| Ojos | ámbar dorado `#ffb347` (HDR para el bloom) |
| Cables del cuello | verde azulado `#2fd6c0` |
| Contorno | cálido `#ffd9a0` |
| Relleno | azul petróleo muy tenue `#0b2a33` |
| Juntas | casi apagadas; si brillan, en ámbar |
| Fondo | negro azulado |

- No debe quedar **nada rojo** en el androide.
- **Cámara:** a la altura de los ojos (`py ≈ 1.6`, `ty ≈ 1.6`), frontal o 3/4, con movimientos lentos (dolly suave).
- **Sin cortes bruscos:** `aberration` mínima y sin `cutKick`.

| t (s) | Imagen | Voz | Subtítulo |
|---|---|---|---|
| 0–2 | Negro. Pulso lento (60 lpm). Una línea verde azulada cruza la pantalla como un monitor estable (overlay DOM/SVG). | — | — |
| 2–4.5 | En penumbra se encienden los ojos ámbar en un fade de unos 0.6 s, sin parpadeo de falla. Los cables se iluminan suave al ritmo del pulso. Contorno cálido leve. Cámara 3/4, acercándose despacio. | `ads-saludo-noche` / `-dia` / `-tarde` en 2.6 s | «—Buenas noches, doctora Hernández.» |
| 4.5–8 | Se endereza (`body[3]` de 0.25 a 0.05) e inclina la cabeza en una leve reverencia (`pitch` +12° y vuelta). Detrás aparecen en holograma las tarjetas de los residentes (overlay DOM, como en la intro 2D actual, pero con borde ámbar y translúcido). | `ads-orden` en 5.0 s | «—Su servicio está en orden. Yo vigilo mientras usted enseña.» |
| 8–11 | Un escaneo ámbar recorre las tarjetas (`uScan` en la cara y un barrido CSS en el overlay). Cada tarjeta toma su color de estado: ok `#3ccf8e`, atención `#f0b54a`, riesgo `#ff6b6b` (el rojo solo en tarjetas, nunca en el robot). Él las mira de reojo (`yaw` de unos −25°). | `ads-resumen` en 8.4 s | «—Le preparé el resumen de su grupo.» |
| 11–13.5 | Gira hacia la cámara y la mira de frente. Los ojos se suavizan (`squint` leve) y la boca se mueve con la voz. | `ads-mensajes` en 11.2 s si `unread('adscrito') > 0`; si no, `ads-calma` | «—Tiene mensajes de sus residentes.» / «—Todo en calma esta noche.» |
| 13.5–16 | Título «CALOT·OS · Panel docente» y «Bienvenida, Dra. Hernández», con la fila de cifras: residentes, requieren atención y mensajes (reutiliza `summary()`). El androide queda de guardia detrás, en penumbra, con los ojos tenues. Fade a negro y aparece el panel. | `ads-cuando` en 13.8 s | «—Cuando quiera, doctora.» |

**Saludo según la hora local:** 06–12 «Buenos días»; 12–19 «Buenas tardes»; resto «Buenas noches».

**Partitura** (sintetizada con `getEngine()`, todo con paso-bajo):
- pad grave cálido (triángulo/seno, unos 55–110 Hz) desde 0.5 s;
- latido suave a 60 lpm hasta los 13 s;
- campana suave (seno, unos 660 Hz, decaimiento de 2 s) cuando se encienden los ojos (2.6 s);
- acorde mayor-7 abierto en 13.5 s.

Sin impactos ni drones disonantes. Respeta `isPortalAudioMuted()`.

**Movimiento reducido o `reduced`:** unos 5 s. Los ojos se encienden, aparecen el título y la bienvenida y entra el panel. Sin movimiento de cámara; voces opcionales (solo el saludo).

## Implementación

### 1. Volver inyectables el guion y la paleta
- **`android-stage.js`:**
  - `createStage` acepta `sample` (por defecto el `sampleTimeline` actual) y `palette`.
  - El bucle usa `sample(t, reduced)`.
  - `palette` define `eye`, `cables`, `rim`, `fill` y `crack` (`THREE.Color`).
  - Aplícala a los uniformes de color del shader y a los materiales y luces. Hoy el rojo está fijo; búscalo con `grep -n "0xff\|vec3(1\.\|red\|rojo" js/fx/androide/*.js`.
  - Si `lamp` y `scalpel` son 0 o null, que esos grupos queden ocultos.
- **`android-shaders.js`:** añadir `uEyeColor`, `uCrackColor` (y lo que haga falta) con el rojo actual por defecto.
- **`intro-androide.js`:** `createAndroidIntro` acepta `timeline = { sample, cueList, TOTAL, REDUCED_TOTAL }`, `palette`, `ui = { vitals: false }` y `overlay` (un nodo DOM extra montado sobre el lienzo). Por defecto se usa lo del residente.
- **`android-ui.js`:** opción para ocultar el HUD de signos vitales y un estilo de subtítulo cálido (`ci-an-sub is-warm`).
- **Criterio:** la intro del residente debe verse y sonar idéntica después del cambio. Compara cuadros congelados con `__ciT` en 6.5, 14 y 23 s antes y después.

### 2. Nuevo guion: `js/fx/androide/android-timeline-aliado.js`
- Exporta `sampleAlly(t, reduced)`, `cueListAlly({ saludo, mensajes, stats })`, `TOTAL = 16`, `REDUCED_TOTAL = 5` y `CUE_ALLY` (tiempos de las voces).
- Reutiliza el patrón de `track`/`bump` (cópialos o expórtalos desde el timeline original).
- Mantén todos los campos de la muestra:
  - `lamp: 0`, `scalpel: null`, `crackSpread: 0`, `jawExtra: 0`, `aberration ≈ 0.0006`, `hr: 60`;
  - `scan` activo solo de 8 a 11 s.

### 3. Overlay de hologramas
- En `intro-adscrito.js`, crear un nodo con el anillo o arco de tarjetas (reutiliza la lógica y CSS de `.ci-ads-card`).
- Estilo holograma: fondo translúcido, borde ámbar, scanlines tenues.
- Colocarlo detrás o a los lados del robot, sin tapar la cara (arco superior o dos columnas laterales en móvil).
- Animar por tiempo con el mismo reloj (actualizar desde un `requestAnimationFrame` con `performance.now()` o exponer un `onFrame(t)` desde `createAndroidIntro`).

### 4. `js/fx/intro-adscrito.js`
- `playAdscritoIntro({ reduced })`:
  1. Calcula `summary()` y el saludo por hora.
  2. Llama a `prefetchVoice([...])`.
  3. Si `canRunAndroidIntro()`, crea la intro 3D con el timeline aliado, la paleta, el overlay y `ui.vitals = false`.
  4. Arranca la partitura y programa las voces con `speak(name, { delay })` relativo al inicio.
  5. Al saltar o terminar, detiene la voz (`stopVoice()`) y la partitura.
- Si no hay WebGL2, falla la carga o tarda más de unos 4 s, usa la intro 2D actual (renómbrala `playAdscritoIntro2D`).
- Para la adscrita no se usa `playIntro` del residente.

### 5. Voces de ElevenLabs: `scripts/voz-adscrito.mjs`
Script de Node 18+, sin dependencias:
- Lee `ELEVENLABS_API_KEY` y `ELEVENLABS_VOICE_ID` del entorno. **Nunca se escriben en el repo ni se imprimen.**
- `POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}?output_format=mp3_44100_128`
  - header `xi-api-key`;
  - body:
    ```json
    { "text": "...", "model_id": "eleven_multilingual_v2", "voice_settings": { "stability": 0.6, "similarity_boost": 0.8, "style": 0.15, "use_speaker_boost": true } }
    ```
- Guarda en `assets/voz/`:

| Archivo | Texto |
|---|---|
| `ads-saludo-dia.mp3` | «Buenos días, doctora Hernández.» |
| `ads-saludo-tarde.mp3` | «Buenas tardes, doctora Hernández.» |
| `ads-saludo-noche.mp3` | «Buenas noches, doctora Hernández.» |
| `ads-orden.mp3` | «Su servicio está en orden. Yo vigilo mientras usted enseña.» |
| `ads-resumen.mp3` | «Le preparé el resumen de su grupo.» |
| `ads-mensajes.mp3` | «Tiene mensajes de sus residentes.» |
| `ads-calma.mp3` | «Todo en calma esta noche.» |
| `ads-cuando.mp3` | «Cuando quiera, doctora.» |

- **Voz:** la misma de CALOT si el usuario da su `voice_id`. Tono más cálido, pausado y servicial; nada amenazante.
- Uso:
  ```bash
  ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... node scripts/voz-adscrito.mjs
  ```
- **Lo corre el usuario**, no el agente.
- Mientras no existan los mp3, la intro funciona solo con subtítulos: `speak` falla en silencio y hay que verificar que no rompa nada.
- Las voces deben caber en su ventana; si alguna dura más, ajusta los tiempos del guion.

### 6. Caché y limpieza
- Sube la versión de `v` a `w` en todo el repo.
- No subas a git `.claude/` ni `.DS_Store`.

## Verificación
1. Arranca `calot-os` y abre `http://localhost:5173/#/`.
2. Ejecuta en consola:
   ```js
   sessionStorage.clear(); localStorage.setItem('calot:rol','adscrito')
   ```
   Recarga e inicia sesión como Adscrito con usuario `dra.hernandez` y cualquier contraseña.
3. La intro 3D debe correr completa (unos 16 s) y terminar en `#/adscrito` sin errores en consola (los 404 de `/api/*` en local son esperados).
4. Congela cuadros con `window.__ciT = 3 | 6 | 9.5 | 12 | 14.5` y revisa:
   - ojos ámbar y cables verde azulado; **nada rojo en el robot**;
   - la cara siempre en cuadro y la cámara a la altura de los ojos;
   - las tarjetas no tapan la cara.
5. Prueba `window.__vl = 1` en 12 s: la boca debe abrirse con la voz.
6. Revisa en móvil (375×812), saltar con Esc y clic, y movimiento reducido.
7. Simula sin WebGL2 (fuerza `canRunAndroidIntro = () => false`): debe salir la intro 2D.
8. **Regresión del residente:** inicia sesión como residente; la intro de terror debe verse y sonar igual que antes.

## Reglas del usuario
- Responder en español.
- Sonidos sin agudos ásperos.
- Commit y push **solo cuando el usuario lo pida**.
  - Los mensajes de commit terminan con `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
  - El push necesita acceso a `github.com`.
- No leer `.env` ni secretos.
