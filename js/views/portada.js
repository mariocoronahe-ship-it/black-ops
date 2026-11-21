/* ==========================================================================
   CALOT-OS · Vista Portada (4d Arranque del Sistema)
   Mantiene la portada viva al entrar en #/ o #/portada y permite entrar al
   quirófano con clic en el CTA o presionando Enter.
   ========================================================================== */

import * as S from '../scroll.js';
import { renderBootPortadaHTML, wireBootPortada, playRoleIntro } from '../fx/boot.js?v=20261121r';
import { playIntro, prefetchIntro } from '../fx/intro.js?v=20261121r';
import { isAdscrito } from '../perfil.js?v=20261121r';

export const section = 'portada';

export function render() {
  return renderBootPortadaHTML();
}

export function mount(root) {
  prefetchIntro();
  const cleanup = wireBootPortada(root, () => {
    // Al entrar desde la portada siempre corre la intro de 30 s (se puede saltar con Esc).
    playRoleIntro(playIntro, !S.enabled);
    if (location.hash === '#/inicio' || location.hash === '#/adscrito') return;
    location.hash = isAdscrito() ? '#/adscrito' : '#/inicio';
  });
  S.onCleanup(cleanup);
}
