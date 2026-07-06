// Central content + imagery. Swap image ids here to change any photo site-wide.
// Originals live in assets/landing; responsive WebP variants are generated into
// public/landing by `npm run optimize:images` (see scripts/optimize-images.mjs).

import variants from './landing-manifest.json';

// Resolve an image id + requested width to the nearest available WebP variant.
export function photo(id: string, w = 1400): string {
  const base = id.replace(/\.(jpe?g|png|webp)$/i, '');
  const widths = (variants as Record<string, number[]>)[ base ];
  if (!widths?.length) return `/landing/${ id }`;
  const pick = widths.find((x) => x >= w) ?? widths[ widths.length - 1 ];
  return `/landing/${ base }-${ pick }.webp`;
}

export const images = {
  desk: 'desk.jpg',
  laserAssorted: 'laser_assorted.jpg',
  plantBrackets: 'plant_brackets.jpg',
  lightBrackets: 'light_brackets.jpg',
  laserLiverpool: 'laser_liverpool.jpg',
  deskBowties: 'desk_bowties.jpg',
  cnc: 'cnc.jpg',
  lightAssorted: 'light_assorted.jpg',
  smithTowelRack: 'smithing_towelrack.jpg',
  hosSign: 'laser_hearts_and_souls.jpg',
  lightComplete: 'light_complete.jpg',
};


export const nav = [
  { label: 'The making', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Shop', href: '#shop' },
];

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/craftasaurusrex/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Craftasaurusrex' },
];

export const crafts = [
  {
    key: 'wood',
    title: 'Wood',
    body: 'Furniture and objects, cut and joined by hand. White oak, walnut, and ash, finished so the grain does the talking.',
    img: images.lightComplete,
    alt: 'Well-worn woodworking tools resting on a sawdust-dusted workbench.',
  },
  {
    key: 'steel',
    title: 'Steel',
    body: 'Forged hardware and ironwork. Heated in the coals, hammered on the anvil, then quenched. The hammer marks stay.',
    img: images.lightAssorted,
    alt: 'A hammer striking a glowing orange bar of steel on the anvil.',
  },
  {
    key: 'laser',
    title: 'Laser',
    body: 'Clean cuts and engraving for signs, boxes, and inlay. Drawn first, then burned to a fraction of a millimetre.',
    img: images.laserAssorted,
    alt: 'Wooden tiles engraved with fine portraits and patterns by a laser.',
  },
];

export const steps = [
  {
    n: '01',
    title: 'Drawing',
    body: 'Every piece starts on paper. Sizes, the joinery, the stock. Nothing gets cut until the drawing is right.',
  },
  {
    n: '02',
    title: 'Making',
    body: 'Then the bench. Sawdust, forge scale, the tool in the hand. This is where the hours go and where the marks are made.',
  },
  {
    n: '03',
    title: 'Finishing',
    body: 'Oil, wax, or a hand-rubbed patina. Sanded, checked, and signed on the underside before it is packed and shipped.',
  },
];

export const pieces = [
  {
    title: 'The Keepsake Box',
    meta: 'Oiled walnut, fitted lid',
    img: images.plantBrackets,
    alt: 'An open oiled-walnut box with a fitted lid, holding a watch and small keepsakes.',
    span: 'lead',
  },
  {
    title: 'The Kitchen Knife',
    meta: 'Hand-forged high-carbon steel',
    img: images.smithTowelRack,
    alt: 'A hand-forged blade catching a thin line of light against a black ground.',
    span: 'tall',
  },
  {
    title: 'Engraved Keepsake',
    meta: 'Laser-cut birch, your words',
    img: images.hosSign,
    alt: 'Hands holding a laser-engraved wooden book with a name and a mountain range.',
    span: 'wide',
  },
];
