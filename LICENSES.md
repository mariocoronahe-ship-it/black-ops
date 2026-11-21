# Licencias de activos de terceros

Solo se listan los activos de terceros que agregaron las intros 3D y la transición del nombre. Three.js r160 ya estaba en `vendor/three/` con su `LICENSE`.

| Activo | Fuente | Licencia |
|---|---|---|
| `assets/intro/models/android-bust-lod.glb`, `assets/intro/models/android-bust-lo.glb` | «Porcelain Android», Grab3D (grab3d.com/models/characters/android/), recortado y simplificado con gltf-transform | CC0 1.0 |
| `assets/intro/hdri/polyhaven-wooden_studio_09-1k.hdr` | Alexander Scholten, Poly Haven (polyhaven.com/a/wooden_studio_09) | CC0 |
| `assets/fonts/space-grotesk-bold.typeface.json` (subconjunto convertido a formato de three.js para el nombre en 3D) | Space Grotesk Bold, The Space Grotesk Project Authors (github.com/floriankarsten/space-grotesk); licencia completa en `assets/fonts/SpaceGrotesk-OFL.txt` | SIL Open Font License 1.1 |
| `vendor/three/addons/loaders/GLTFLoader.js`, `vendor/three/addons/loaders/RGBELoader.js`, `vendor/three/addons/utils/BufferGeometryUtils.js`, `vendor/three/addons/loaders/FontLoader.js`, `vendor/three/addons/geometries/TextGeometry.js` | three.js authors, npm `three@0.160.0` (mismo `three.module.min.js` que ya usa la app) | MIT (ver `vendor/three/LICENSE`) |

Nota sobre Grab3D: sus modelos «High Detail» parten de mallas base generadas con IA y retocadas en Blender. La licencia publicada es CC0 y no hay autor individual al que atribuir.
