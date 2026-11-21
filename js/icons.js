// Inline stroke icons (24x24), no external dependency.
const P = {
  logo: '<path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9L12 3Z"/><circle cx="12" cy="12" r="3.2"/><path d="M12 3v5.8M12 15.2V21M3.5 7.5l5.7 3M14.8 13.5l5.7 3M20.5 7.5l-5.7 3M9.2 13.5l-5.7 3"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"/>',
  notebook: '<path d="M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6V3Z"/><path d="M6 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h1M10 8h5M10 12h5"/>',
  library: '<path d="M4 4h4v16H4zM10 4h4v16h-4z"/><path d="m16.5 5.2 3.7-1 3 14.6-3.7 1z" transform="translate(-2.5 .5)"/>',
  tasks: '<rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M8 12l2.5 2.5L16 9"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  note: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18"/>',
  flame: '<path d="M12 22c4 0 7-2.7 7-6.8 0-3.6-2.4-6-4.3-8.1-.4 2-1.4 3.2-2.7 3.9.3-3.2-1.2-6.2-4-8C8 6 5 8.9 5 15.2 5 19.3 8 22 12 22Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  scalpel: '<path d="m3 21 7.5-7.5M14 4l6 6-8.5 5.5-3-3L14 4Z"/>',
  send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>',
  arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  arrowDown: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  refresh: '<path d="M20 12a8 8 0 1 1-2.5-5.8L20 8"/><path d="M20 3v5h-5"/>',
  half: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18Z" fill="currentColor"/>',
  circlePlus: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  circleCheck: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  circleX: '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',
  clipboard: '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 2h6v4H9zM9 12h6M9 16h4"/>',
  archive: '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 10v5h-5"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  quote: '<path d="M7 7h4v6c0 2-1 4-4 4M15 7h4v6c0 2-1 4-4 4"/>',
  feather: '<path d="M20 4C10 4 5 10 5 19l3-3h5c4 0 7-5 7-12Z"/><path d="M5 19 15 9"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  cube: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"/><path d="m3 7 9 5 9-5M12 12v10"/>',
  calc: '<rect x="5" y="2.5" width="14" height="19" rx="3"/><path d="M8.5 7h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01M8.5 19h.01M12 19h3.5"/>',
  cloud: '<path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4.75 4.75 0 0 1-.25 9.5H7Z"/>',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>',
  brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h0a3 3 0 0 1-3-3"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/>',
  gamepad: '<rect x="2.5" y="6" width="19" height="12" rx="5"/><path d="M6.5 12h4M8.5 10v4M15 11h.01M17.5 13h.01"/>',
  hospital: '<rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M12 7v5M9.5 9.5h5M8 15h8M10 21v-3h4v3"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M12 14v4M8 20h8"/>',
  pulse: '<path d="M2 12h4l2.5-6 4 12 3-8 2 2h4.5"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  crown: '<path d="M3 18h18l-1.5-10-4.5 4-3-6-3 6-4.5-4L3 18Z"/><path d="M4 21h16"/>',
};

/* Premium "obsidian" icons: glossy black body + metallic outline + a short specular stroke.
   Gradients live in the hidden <svg> defs of index.html (#ig-gloss, #ig-metal, #ig-red). */
const P3 = {
  home: { b: 'M4 10.8 12 4.2l8 6.6v8.4a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 19.2z', l: 'M9.8 20.8v-4.6a2.2 2.2 0 0 1 4.4 0v4.6', h: 'M6.6 10.4 12 6' },
  notebook: { b: 'M6.5 3.4h10.8a2.2 2.2 0 0 1 2.2 2.2v12.8a2.2 2.2 0 0 1-2.2 2.2H6.5z', l: 'M6.5 3.4v17.2M10 8.2h6.3M10 11.6h6.3M10 15h4M4.4 7h3.6M4.4 12h3.6M4.4 17h3.6', h: 'M9 5.2h8' },
  note: { b: 'M14 3.4H7a2.2 2.2 0 0 0-2.2 2.2v12.8A2.2 2.2 0 0 0 7 20.6h10a2.2 2.2 0 0 0 2.2-2.2V8.6z', l: 'M14 3.4v5.2h5.2M8.6 12.6h6.8M8.6 16h4.6', h: 'M7.2 5.4h4.4' },
  brain: { b: 'M11.4 4.6a3.2 3.2 0 0 0-5.6 1.6 3.3 3.3 0 0 0-2.3 4.6A3.4 3.4 0 0 0 5 16.6a3.4 3.4 0 0 0 6.4 1.9zm1.2 0a3.2 3.2 0 0 1 5.6 1.6 3.3 3.3 0 0 1 2.3 4.6 3.4 3.4 0 0 1-1.5 5.8 3.4 3.4 0 0 1-6.4 1.9z', l: 'M12 4.6v14.2M8.2 8.6c1.2.2 2 1 2.2 2.2M15.8 8.6c-1.2.2-2 1-2.2 2.2M7.4 13.6c1.4-.6 2.6-.2 3.4.8M16.6 13.6c-1.4-.6-2.6-.2-3.4.8', h: 'M6.6 6.2c.6-.9 1.6-1.3 2.6-1.1' },
  cube: { b: 'm12 2.8 8.6 4.8v9.2L12 21.6l-8.6-4.8V7.6z', l: 'm3.6 7.6 8.4 4.8 8.4-4.8M12 12.4v9', h: 'M7 6.2 12 3.6' },
  library: { b: 'M3.6 4.4h3.6v15.8H3.6zM8.8 4.4h3.6v15.8H8.8zm5.4 1.4 3.4-.9 3.9 14.6-3.4.9z', l: 'M3.6 8h3.6M3.6 16.6h3.6M8.8 8h3.6M8.8 16.6h3.6M14.9 9.1l3.4-.9', h: 'M4.6 5.6v6' },
  scalpel: { b: 'M14.2 3.6c3.2.7 5.8 3.4 6.2 6.6l-8.9 5.3-3.1-3.1zM8.6 12.2 3.4 18.6l1.9 1.9 6.4-5.2z', l: 'M9.9 13.6 6.2 17.5', h: 'M15.2 5.2c1.6.6 2.9 1.8 3.6 3.4' },
  calc: { b: 'M7.2 2.6h9.6a2.4 2.4 0 0 1 2.4 2.4v14a2.4 2.4 0 0 1-2.4 2.4H7.2A2.4 2.4 0 0 1 4.8 19V5a2.4 2.4 0 0 1 2.4-2.4z', l: 'M8 5.6h8v3.2H8zM8.6 12.4h.1M12 12.4h.1M15.4 12.4h.1M8.6 15.4h.1M12 15.4h.1M15.4 15.4h.1M8.6 18.4h.1M12 18.4h3.4', h: 'M6.8 4.4v4' },
  tasks: { b: 'M5.4 4.6h13.2a2.2 2.2 0 0 1 2.2 2.2v12a2.2 2.2 0 0 1-2.2 2.2H5.4a2.2 2.2 0 0 1-2.2-2.2v-12a2.2 2.2 0 0 1 2.2-2.2z', l: 'M3.2 9.4h17.6M8 2.8v3.6M16 2.8v3.6m-7.6 8.2 2.4 2.4 4.8-4.8', h: 'M5.2 6.6h4' },
  cloud: { b: 'M7.2 18.6a4.6 4.6 0 0 1-.6-9.1 6.1 6.1 0 0 1 11.7-.9 4.9 4.9 0 0 1-.4 10z', l: 'M9 14.6h6', h: 'M8.4 10.4a4 4 0 0 1 3-2.6' },
  grid: { b: 'M5.4 3.6h3.6a1.8 1.8 0 0 1 1.8 1.8V9a1.8 1.8 0 0 1-1.8 1.8H5.4A1.8 1.8 0 0 1 3.6 9V5.4a1.8 1.8 0 0 1 1.8-1.8zm9.6 0h3.6a1.8 1.8 0 0 1 1.8 1.8V9a1.8 1.8 0 0 1-1.8 1.8H15A1.8 1.8 0 0 1 13.2 9V5.4A1.8 1.8 0 0 1 15 3.6zM5.4 13.2h3.6a1.8 1.8 0 0 1 1.8 1.8v3.6a1.8 1.8 0 0 1-1.8 1.8H5.4a1.8 1.8 0 0 1-1.8-1.8V15a1.8 1.8 0 0 1 1.8-1.8zm9.6 0h3.6a1.8 1.8 0 0 1 1.8 1.8v3.6a1.8 1.8 0 0 1-1.8 1.8H15a1.8 1.8 0 0 1-1.8-1.8V15a1.8 1.8 0 0 1 1.8-1.8z', l: '', h: 'M5 5.4v2.4M14.6 5.4v2.4' },
  search: { b: 'M10.8 4a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6z', l: 'm15.8 15.8 4.6 4.6', h: 'M7.4 8.2a4 4 0 0 1 2.8-2.2' },
  book: { b: 'M5 5.6A2.4 2.4 0 0 1 7.4 3.2h11.4v14.4H7.4A2.4 2.4 0 0 0 5 20z', l: 'M5 20a2.4 2.4 0 0 0 2.4 2.4h11.4v-4.8M9 7.6h6', h: 'M7.2 5h3.6' },
  layers: { b: 'm12 3.4 8.6 4.8-8.6 4.8-8.6-4.8z', l: 'm3.4 12.6 8.6 4.8 8.6-4.8M3.4 16.6l8.6 4.8 8.6-4.8', h: 'M8 6.6 12 4.6' },
  gamepad: { b: 'M6.8 6.2h10.4a4.6 4.6 0 0 1 4.4 5.9l-1.1 4.2a2.6 2.6 0 0 1-4.3 1.2l-2.1-2.1H9.9l-2.1 2.1a2.6 2.6 0 0 1-4.3-1.2l-1.1-4.2a4.6 4.6 0 0 1 4.4-5.9z', l: 'M6.8 11.4h3.6M8.6 9.6v3.6M15.4 10.4h.2M17.4 12.4h.2', h: 'M7.4 7.8h6.4' },
  sparkle: { b: 'm12 3.2 2.4 5.8 6 2.4-6 2.4-2.4 5.8-2.4-5.8-6-2.4 6-2.4z', l: 'M12 7.2v9.6M7.2 12h9.6', h: 'M12 4.8l1.2 2.8' },
  hospital: { b: 'M5.2 3.4h13.6a2.2 2.2 0 0 1 2.2 2.2v13.2a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 18.8V5.6a2.2 2.2 0 0 1 2.2-2.2z', l: 'M12 6.8v5.2M9.4 9.4h5.2M8 15h8M10 21v-3.4h4V21', h: 'M6.2 5.2h6' },
  trophy: { b: 'M6.8 3.8h10.4v5.2a5.2 5.2 0 0 1-10.4 0z', l: 'M6.8 5.8H4v2.2a3 3 0 0 0 2.8 3M17.2 5.8H20v2.2a3 3 0 0 1-2.8 3M12 14.2v4.2M8.2 20.2h7.6', h: 'M8.4 5.4v3.8' },
  bolt: { b: 'M13.2 2.6 4.6 13.8h6.4l-1.2 7.6 9.6-11.8h-6.4z', l: 'M11 13.8H5.8M13 9.6h5.2', h: 'M11.6 5.4 7.6 10.8' },
  clipboard: { b: 'M6 4.4h12a1.8 1.8 0 0 1 1.8 1.8v13.6a1.8 1.8 0 0 1-1.8 1.8H6a1.8 1.8 0 0 1-1.8-1.8V6.2A1.8 1.8 0 0 1 6 4.4z', l: 'M9 2.6h6v3.6H9zM8.6 11.6h6.8M8.6 15.6h4.4', h: 'M6.6 6.8v4' },
};

export function icon(name, cls = '') {
  if (cls.includes('ic3d') && P3[name]) {
    const d = P3[name];
    return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">
      <path class="b" d="${d.b}" fill="url(#ig-gloss)" stroke="url(#ig-metal)" stroke-width="1.25" stroke-linejoin="round"/>
      ${d.l ? `<path class="ln" d="${d.l}" fill="none" stroke="url(#ig-metal)" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
      <path class="hl" d="${d.h}" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width=".9" stroke-linecap="round"/>
    </svg>`;
  }
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;
}
