# CALOT-OS · Cirugía

App personal de estudio para residente de Cirugía General (PUEM · HGR No. 72 IMSS). SPA estática sin build: ES modules nativos, sin `package.json`, con GSAP, ScrollTrigger, Lenis y Three.js en `vendor/`. Estética negro OLED y carmesí, con tema claro opcional.

## Rutas (`#/…`)
| Ruta | Sección | Qué hace |
|---|---|---|
| `#/` · `#/portada` | Portada | Arranque del sistema con cifras reales; al entrar corre la intro 3D. |
| `#/inicio` | Inicio | Panel con racha, horas, pendientes de HGR 72, captura rápida y órbita de módulos. |
| `#/resumenes` | Resúmenes | Temario PUEM R1–R4 por año, sistema o tema (`?vista=&anio=&sistema=&id=`). 38 temas, 145 subtemas en total. |
| `#/aprende` | Aprende | 32 módulos: 11 base ARGOS-MED (9 de R2 + hepatobiliar y trauma transversales) y 21 de Drive (R1 11/11, R3 7/10, R4 3/8). Cada módulo con Leer / Repasar / Jugar (`?tema=&casa=&tab=`), subrayados y apuntes. Los 9 módulos R2 conservan su contenido citado; 8 de 9 traen síntesis de Drive (quemaduras no). |
| `#/repasa` | Repasa | 1,105 puntos de alto rendimiento (595 citados de ARGOS-MED + 510 perlas de Drive) y 319 tarjetas SM-2, más perlas categorizadas (`?tema=&tab=puntos|tarjetas|perlas`). Los casos seriados ya no están aquí: viven en `#/puem`. |
| `#/puem` | PUEM | Banco de preguntas por año de residencia R1–R4 (`?anio=R1|R2|R3|R4`), tres bancos: R2 trae «Preguntas PUEM R2 (2022)» (casos seriados con opciones, respuesta y explicación; algunas claves llevan la nota «Clave corregida · fuente» y las preguntas retiradas no se muestran) y «Repaso PUEM R2 (2013)» (pregunta y respuesta libre). Además, «Casos clínicos CALOT-OS (por tema)» con 510 casos en los cuatro años (R1 150, R2 180, R3 130, R4 50). Total PUEM: 590 casos y 832 preguntas visibles. |
| `#/juegos` | Juegos | Seis modos (`?modo=&tema=`, ver abajo). |
| `#/recursos` | Recursos | Catálogo de 107 ítems, 97 visibles (los 10 paquetes PUEM no se listan) (`?cat=todos|3d|algoritmos|casos|guias|escalas`, `?id=`). |
| `#/stats` | Progreso | Tiempo de estudio, partidas, casos y dominio por tema. |
| `#/hgr72` | HGR 72 | Modo guardia: rotaciones, calendario, pendientes, Bitácora Qx y formatos IMSS (`?mod=personal|bitacora|formatos`). |
| `#/pendientes` | Tablero | Tareas y agenda; se abre desde Inicio. |

Rutas antiguas que redirigen: `cuaderno`, `apuntes`, `tema` → Aprende; `temas`, `temario`, `resumen` → Resúmenes; `repaso`, `flashcards` → Repasa; `blitz`, `arcade`, `simuladores` → Juegos; `atlas`, `3d`, `modelos`, `algoritmos`, `guias`, `escalas`, `calculadoras` → Recursos; `biblioteca`, `estadisticas` → Progreso; `bitacora`, `guardia(s)`, `rotaciones`, `formatos` → HGR 72; `home`, `orbit(a)` → Inicio. Cualquier otra ruta cae en Inicio.

## Contenido por año (verificado 20 nov 2026)

| Año | Temas | Subtemas | Aprende | PUEM (casos) |
|---|---|---|---|---|
| R1 | 11 | 37 | 11/11 módulos Drive | 150 |
| R2 | 9 | 43 | 9 base + síntesis Drive en 8/9 | 260 (2022: 46, 2013: 34, CALOT: 180) |
| R3 | 10 | 33 | 7/10 módulos Drive | 130 |
| R4 | 8 | 32 | 3/8 módulos Drive | 50 |
| **Total** | **38** | **145** | **32 módulos** | **590 casos, 832 preguntas** |

R4 es el año menos completo (3/8 módulos y 50 casos). Las listas de Drive se armaron sin el temario de la sede, así que cada tema se recolocó manualmente en el año del hospital (ver `scripts/build-drive.mjs`).

## Juegos
Blitz 45 s (racha multiplicadora), Pase de Visita, ¿Se opera o no? (laparotomías blancas), Detective Dx, Quirófano Paso a Paso y Paciente en evolución.

## Escalas (dentro de Recursos → Escalas)
Alvarado, AIR, Tokyo 2018 colecistitis, Tokyo 2018 colangitis, BISAP, Ranson, Atlanta 2012, qSOFA, SIRS, Glasgow, Choque ATLS, Quemaduras (ATLS 2 mL por defecto, Parkland 4 mL opcional), Caprini y ASA.

## Recursos 3D (`atlas/`)
10 modelos: apendicitis, divertículos/Hinchey, fístula anal/Parks, isquemia intestinal, úlcera/HDA, ERGE/unión, vólvulo, fuga anastomótica, Hirschsprung y CUCI vs Crohn, más árboles de guardia, casos seriados, fichas de diferenciación y noche crítica.

## Datos y estado
- `js/data/`: temarios, casos, tarjetas, catálogo y bancos de juegos. Los pesados se cargan bajo demanda al entrar a cada vista. No cambies sus `id`: los usan el progreso y la sincronización.
- Estado en `localStorage` (`calot:v3`). Sincronización opcional entre dispositivos con un código (`api/sync` + Upstash Redis).
- Chat con IA vía `api/ai` (OpenAI).

## Desarrollo y despliegue
- Local: `python3 -m http.server 5173` (sin `/api`: sync e IA no funcionan).
- Producción: Vercel, que sirve los archivos estáticos y las funciones de `api/`. Variables: `OPENAI_API_KEY`, `KV_REST_API_URL` y `KV_REST_API_TOKEN` (o `UPSTASH_REDIS_REST_*`).
- Un solo URL por módulo: no mezcles `./x.js` y `./x.js?v=…` entre importadores; si subes un `?v=`, cámbialo en todos.
