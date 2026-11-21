/* ==========================================================================
   CALOT-OS · Black Ops · Vista Portada (Selector de Tarjetas R2 + Docente)
   ========================================================================== */

import * as S from '../scroll.js';
import { renderBootPortadaHTML, wireBootPortada, playRoleIntro } from '../fx/boot.js?v=20261121z';
import { isAdscrito } from '../perfil.js?v=20261121z';

export const section = 'portada';

export function render() {
  return renderBootPortadaHTML();
}

export function mount(root) {
  const cleanup = wireBootPortada(root, () => {
    playRoleIntro();
    const target = isAdscrito() ? '#/adscrito' : '#/inicio';
    if (location.hash !== target) {
      location.hash = target;
    } else {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  });
  S.onCleanup(cleanup);
}
