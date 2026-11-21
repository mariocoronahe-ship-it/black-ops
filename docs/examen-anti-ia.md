# Examen R2 · Protección contra IA y trampas (21 nov 2026)

## Navegadores permitidos
- **Solo Safari en iPhone y Chrome en Android** (`js/fx/browser-check.js`, copia mínima en `api/examen.js`).
- Bloqueados: Edge (Copilot), Opera (Aria), Brave (Leo), Chrome en iPhone (Gemini), Firefox, Samsung Internet,
  DuckDuckGo, Yandex, UC, Vivaldi, Xiaomi/Huawei, Comet, App de Google, navegadores dentro de apps
  (WhatsApp/Instagram/Facebook/TikTok, WebView de Android), «sitio de escritorio» en iPhone y cualquier computadora.
- El servidor también revisa el user agent del request; si cliente y servidor no coinciden, gana el «no permitido».

## Decisión sobre Chrome Android + Gemini
Chrome Android se permite porque es el navegador por defecto de casi todos los Android. Gemini en Android
puede «preguntar sobre la pantalla» (toma captura y la lee con OCR) y Circle to Search hace algo parecido.
Eso **no se puede impedir desde una página web**. Mitigaciones:
1. La pregunta y las opciones se dibujan en `<canvas>`: ningún asistente que lea el texto de la página las ve.
2. Abrir Gemini/Circle to Search encima quita el foco a Chrome o reduce el área visible → se registra como
   **interrupción** (amarillo en el panel, con pregunta y duración). Si cambia de app → **salida**.
3. La doctora está presente en el aula: una interrupción en el panel = mirar ese celular.

## Qué registra el panel
- **Salidas** (cuentan y bloquean): pestaña oculta ≥ 2 s, o recargar/cerrar la página (con su tiempo real).
- **Parpadeos** (no cuentan): pestaña oculta < 2 s.
- **Interrupciones** (no bloquean): pierde el foco sin ocultarse, o el área visible se reduce mucho.
- **Cambios de respuesta** tras una salida/interrupción: «salió 40 s en P7 y cambió B→D en P7».
- Navegador y sistema de cada residente (verde permitido / rojo no permitido).

## Robustez
Cada pulso del residente (cada 2.2 s) manda su bitácora completa y su avance, así que si una escritura se pierde
por concurrencia en la nube, el siguiente pulso la repara. Desbloquear y «Calificar así» viven en la llave de
configuración docente, que los residentes nunca escriben.
