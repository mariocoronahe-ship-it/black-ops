/* ==========================================================================
   CALOT-OS · Black Ops · Vista Portada (Selector de Tarjetas R2 + Docente)
   ========================================================================== */

import * as S from '../scroll.js';
import { renderBootPortadaHTML, wireBootPortada, playRoleIntro, docenteFormRequested } from '../fx/boot.js?v=20261122a';
import { isAdscrito } from '../perfil.js?v=20261122a';

export const section = 'portada';

export function render() {
  return renderBootPortadaHTML({ showDocente: docenteFormRequested() });
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
