// Central content + imagery. Swap image ids here to change any photo site-wide.
// All ids verified resolvable on the Unsplash CDN.

const UNSPLASH = 'https://images.unsplash.com/photo-';

export function photo(id: string, w = 1400): string {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const images = {
  heroWork: '1631396327481-661e938ae313', // a block plane resting in fresh shavings
  wood: '1520372561567-bac27b0e5fa1', // worn hand tools on a sawdust bench
  steel: '1716469801932-3b1b5494615c', // hammer striking glowing steel on the anvil
  forge: '1543347080-1a67824f1be2', // forge fire and sparks (process backdrop)
  woodGrain: '1611600700192-d87eaeed4f81', // close weathered wood grain
  laser: '1582269847642-87432658c952', // laser-engraved wooden tiles
  boxPiece: '1549315309-f0857a904065', // open walnut keepsake box
  knifePiece: '1596299085622-4f96269e5bc7', // hand-forged blade on black
  signPiece: '1728495002385-b1363666eccb', // laser-engraved keepsake book
  maker: '1511306162219-1c5a469ab86c', // a smith at the anvil in his workshop
};

export const nav = [
  { label: 'The making', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Shop', href: '#shop' },
];

export const crafts = [
  {
    key: 'wood',
    title: 'Wood',
    body: 'Furniture and objects, cut and joined by hand. White oak, walnut, and ash, finished so the grain does the talking.',
    img: images.wood,
    alt: 'Well-worn woodworking tools resting on a sawdust-dusted workbench.',
  },
  {
    key: 'steel',
    title: 'Steel',
    body: 'Forged hardware and ironwork. Heated in the coals, hammered on the anvil, then quenched. The hammer marks stay.',
    img: images.steel,
    alt: 'A hammer striking a glowing orange bar of steel on the anvil.',
  },
  {
    key: 'laser',
    title: 'Laser',
    body: 'Clean cuts and engraving for signs, boxes, and inlay. Drawn first, then burned to a fraction of a millimetre.',
    img: images.laser,
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
    img: images.boxPiece,
    alt: 'An open oiled-walnut box with a fitted lid, holding a watch and small keepsakes.',
    span: 'lead',
  },
  {
    title: 'The Kitchen Knife',
    meta: 'Hand-forged high-carbon steel',
    img: images.knifePiece,
    alt: 'A hand-forged blade catching a thin line of light against a black ground.',
    span: 'tall',
  },
  {
    title: 'Engraved Keepsake',
    meta: 'Laser-cut birch, your words',
    img: images.signPiece,
    alt: 'Hands holding a laser-engraved wooden book with a name and a mountain range.',
    span: 'wide',
  },
];
