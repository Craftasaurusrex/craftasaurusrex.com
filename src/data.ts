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
  desk: 'desk.jpg', // A wooden desk made from elm and white oak
  laserAssorted: 'laser_assorted.jpg', // A laser-cut frame with embedded magnets and interchangeable face plates, and an Arsenal sign
  plantBrackets: 'plant_brackets.jpg', // A set of brackets for hanging plants
  lightBrackets: 'light_brackets.jpg', // A set of brackets for hanging a wooden branch light fixture
  laserLiverpool: 'laser_liverpool.jpg', // A laser-cut sign of the Liverpool crest
  deskBowties: 'desk_bowties.jpg', // The elm desk with dark walnut bow-tie inlays
  cnc: 'cnc.jpg', // Cutting the desk's bow-tie inlays on the CNC machine
  lightAssorted: 'light_assorted.jpg', // Assorted brackets for hanging a wooden branch light fixture
  smithTowelRack: 'smithing_towelrack.jpg', // A towel rack made from steel and oak
  hosSign: 'laser_hearts_and_souls.jpg', // A laser-cut sign of the Hearts and Souls logo
  lightComplete: 'light_complete.jpg', // A completed wooden branch light fixture with hanging brackets
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
    body: 'Furniture and knickknacks, cut and joined by hand. Beautiful wood grains sanded to a glassy finish.',
    img: images.lightComplete,
    alt: 'A completed wooden branch light fixture hanging from its brackets.',
  },
  {
    key: 'steel',
    title: 'Steel',
    body: 'Forged hardware and ironwork. Heated in the coals, hammered on the anvil, then quenched. The hammer marks stay.',
    img: images.lightAssorted,
    alt: 'Assorted brackets for hanging a wooden branch light fixture.',
  },
  {
    key: 'laser',
    title: 'Laser',
    body: 'Clean cuts and engraving for signs, boxes, and inlay. Drawn first, then cut with precision.',
    img: images.laserAssorted,
    alt: 'A laser-cut frame with embedded magnets and interchangeable face plates, beside an Arsenal sign.',
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
    title: 'Plant Hanging Brackets',
    meta: 'Forged steel with simple symbols',
    img: images.plantBrackets,
    alt: 'A set of brackets for hanging plants.',
    span: 'lead',
  },
  {
    title: 'The Towel Rack',
    meta: 'A towel rack on an oak backplate',
    img: images.smithTowelRack,
    alt: 'A towel rack made from steel and oak.',
    span: 'tall',
  },
  {
    title: 'Hearts & Souls Sign',
    meta: 'A laser-cut logo for the band <a href="https://linktr.ee/heartsandsoulstheband" target="_blank" rel="noopener">Hearts &amp; Souls</a>',
    img: images.hosSign,
    alt: 'A laser-cut sign of the Hearts and Souls logo.',
    span: 'wide',
  },
];
