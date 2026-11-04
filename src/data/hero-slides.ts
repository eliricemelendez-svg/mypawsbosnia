import type { Lang } from "../i18n/utils";

// Hero slideshow text per dog, per language
// Images are imported separately in the HomePage component

interface HeroText {
  line: string;
  alt: string;
}

const heroText: Record<string, Record<Lang, HeroText>> = {
  barney: {
    en: { line: "Two years old, full of energy, and ready to travel to his new family.", alt: "Barney, a rescued dog at My Paws Bosnia" },
    de: { line: "Zwei Jahre alt, voller Energie und bereit, zu seiner neuen Familie zu reisen.", alt: "Barney, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Twee jaar oud, vol energie en klaar om naar zijn nieuwe gezin te reizen.", alt: "Barney, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Deux ans, plein d\u2019\u00e9nergie et pr\u00eat \u00e0 rejoindre sa nouvelle famille.", alt: "Barney, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  klara: {
    en: { line: "A brave little fighter who beat illness and is ready to find her forever home.", alt: "Klara, a rescued dog at My Paws Bosnia" },
    de: { line: "Eine tapfere kleine K\u00e4mpferin, die eine Krankheit besiegt hat und bereit f\u00fcr ihr Zuhause ist.", alt: "Klara, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Een dappere kleine vechter die ziekte overwon en klaar is voor haar eigen thuis.", alt: "Klara, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Une petite battante qui a vaincu la maladie et qui est pr\u00eate pour sa famille.", alt: "Klara, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  max: {
    en: { line: "Bottle-fed since he was two days old. Gentle, playful, and ready for a family.", alt: "Max, a rescued dog at My Paws Bosnia" },
    de: { line: "Mit der Flasche aufgezogen, seit er zwei Tage alt war. Sanft, verspielt und bereit f\u00fcr eine Familie.", alt: "Max, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Met de fles grootgebracht sinds hij twee dagen oud was. Lief, speels en klaar voor een gezin.", alt: "Max, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Nourri au biberon d\u00e8s ses deux jours. Doux, joueur et pr\u00eat pour une famille.", alt: "Max, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  nadia: {
    en: { line: "Bottle-fed since she was two days old. Playful, friendly, and looking for her forever home.", alt: "Nadia, a rescued dog at My Paws Bosnia" },
    de: { line: "Mit der Flasche aufgezogen, seit sie zwei Tage alt war. Verspielt, freundlich und auf der Suche nach ihrem Zuhause.", alt: "Nadia, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Met de fles grootgebracht sinds ze twee dagen oud was. Speels, vriendelijk en op zoek naar haar thuis.", alt: "Nadia, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Nourrie au biberon d\u00e8s ses deux jours. Joueuse, amicale et en qu\u00eate de son foyer.", alt: "Nadia, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  vanja: {
    en: { line: "A gentle, loyal girl with a golden heart. Spayed, vaccinated, and ready for her forever family.", alt: "Vanja, a rescued dog at My Paws Bosnia" },
    de: { line: "Eine sanfte, treue H\u00fcndin mit goldenem Herzen. Kastriert, geimpft und bereit f\u00fcr ihre Familie.", alt: "Vanja, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Een lieve, trouwe meid met een gouden hart. Gecastreerd, gevaccineerd en klaar voor haar gezin.", alt: "Vanja, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Une fille douce et fid\u00e8le au c\u0153ur en or. St\u00e9rilis\u00e9e, vaccin\u00e9e et pr\u00eate pour sa famille.", alt: "Vanja, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  luna: {
    en: { line: "Already over 43 cm tall and still growing. Playful, active, and looking for her family.", alt: "Luna, a rescued dog at My Paws Bosnia" },
    de: { line: "Schon \u00fcber 43 cm gro\u00df und w\u00e4chst noch. Verspielt, aktiv und auf der Suche nach ihrer Familie.", alt: "Luna, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Al meer dan 43 cm groot en groeit nog steeds. Speels, actief en op zoek naar haar gezin.", alt: "Luna, een reddingshond bij My Paws Bosnia" },
    fr: { line: "D\u00e9j\u00e0 plus de 43 cm et elle grandit encore. Joueuse, active et en qu\u00eate de sa famille.", alt: "Luna, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  daphne: {
    en: { line: "Rescued from a poor shelter, now full of life. Small, playful, and looking for her forever home.", alt: "Daphne, a rescued dog at My Paws Bosnia" },
    de: { line: "Aus einem armen Tierheim gerettet, jetzt voller Leben. Klein, verspielt und auf der Suche nach ihrem Zuhause.", alt: "Daphne, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Gered uit een arm asiel, nu vol leven. Klein, speels en op zoek naar haar thuis.", alt: "Daphne, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Sauv\u00e9e d\u2019un refuge d\u00e9muni, aujourd\u2019hui pleine de vie. Petite, joueuse et en qu\u00eate de son foyer.", alt: "Daphne, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  maus: {
    en: { line: "Those eyes. Recovered from demodex as a puppy, now a slim, athletic boy ready for adventure.", alt: "Maus, a rescued dog at My Paws Bosnia" },
    de: { line: "Diese Augen. Als Welpe von Demodex genesen, jetzt ein schlanker, sportlicher R\u00fcde voller Abenteuerlust.", alt: "Maus, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Die ogen. Als pup hersteld van demodex, nu een slanke, sportieve reu klaar voor avontuur.", alt: "Maus, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Ces yeux. Gu\u00e9ri de la d\u00e9mod\u00e9cie \u00e9tant chiot, aujourd\u2019hui un gar\u00e7on \u00e9lanc\u00e9 et sportif plein d\u2019aventure.", alt: "Maus, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  freya: {
    en: { line: "Her whole family got adopted. She's the only one still waiting.", alt: "Freya, a rescued dog at My Paws Bosnia" },
    de: { line: "Ihre ganze Familie wurde adoptiert. Sie ist die Einzige, die noch wartet.", alt: "Freya, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Haar hele familie werd geadopteerd. Zij is de enige die nog wacht.", alt: "Freya, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Toute sa famille a \u00e9t\u00e9 adopt\u00e9e. Elle est la seule qui attend encore.", alt: "Freya, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  "luna-2": {
    en: { line: "A sweet, playful sister who loves people, kids, and other dogs. Ideally adopted with her sister Nami.", alt: "Luna, a rescued dog at My Paws Bosnia" },
    de: { line: "Ein wundersch\u00f6nes, liebevolles M\u00e4dchen, das seit Jahren auf eine Familie wartet. Toll mit Kindern und voller Zuneigung.", alt: "Luna, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Een prachtig, liefdevol meisje dat al jaren wacht op een gezin. Geweldig met kinderen en vol genegenheid.", alt: "Luna, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Une belle fille aimante qui attend une famille depuis des ann\u00e9es. Incroyable avec les enfants et pleine de tendresse.", alt: "Luna, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  nami: {
    en: { line: "A happy, social girl full of energy and love. Ideally adopted with her sister Luna.", alt: "Nami, a rescued dog at My Paws Bosnia" },
    de: { line: "Ein wundersch\u00f6nes, liebevolles M\u00e4dchen, das seit Jahren auf eine Familie wartet. Voller Pers\u00f6nlichkeit, Zuneigung und Energie.", alt: "Nami, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Een prachtig, liefdevol meisje dat al jaren wacht op een gezin. Vol persoonlijkheid, genegenheid en energie.", alt: "Nami, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Une belle fille aimante qui attend une famille depuis des ann\u00e9es. Pleine de personnalit\u00e9, de tendresse et d'\u00e9nergie.", alt: "Nami, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  nero: {
    en: { line: "A beautiful, gentle boy with the softest heart. Loves being outdoors and around people.", alt: "Nero, a rescued dog at My Paws Bosnia" },
    de: { line: "Ein h\u00fcbscher, sanfter R\u00fcde mit einem ganz weichen Wesen. Liebt die Natur und Menschen.", alt: "Nero, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Een lieve reu met een heel zacht karakter. Houdt van buiten zijn en van mensen.", alt: "Nero, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Un beau gar\u00e7on au caract\u00e8re tendre. Adore le plein air et les gens.", alt: "Nero, un chien sauv\u00e9 par My Paws Bosnia" },
  },
  atlas: {
    en: { line: "Five years old, 70 cm of gentle giant. Warm brown eyes and a brindle coat looking for a family.", alt: "Atlas, a rescued dog at My Paws Bosnia" },
    de: { line: "Fünf Jahre alt, 70 cm sanfter Riese. Warme braune Augen und gestromtes Fell auf der Suche nach einer Familie.", alt: "Atlas, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Vijf jaar oud, 70 cm zachtaardig en groot. Warme bruine ogen en een gestroomd vacht, op zoek naar een gezin.", alt: "Atlas, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Cinq ans, 70 cm de douceur. Des yeux bruns chaleureux et un pelage bringé à la recherche d'une famille.", alt: "Atlas, un chien sauvé par My Paws Bosnia" },
  },
  senka: {
    en: { line: "A survivor with an unbreakable spirit. After everything she has been through, she is still full of love.", alt: "Senka, a rescued dog at My Paws Bosnia" },
    de: { line: "Eine \u00dcberlebensk\u00fcnstlerin mit unzerbrechlichem Geist. Nach allem, was sie durchgemacht hat, ist sie immer noch voller Liebe.", alt: "Senka, ein geretteter Hund bei My Paws Bosnia" },
    nl: { line: "Een overlever met een onbreekbare geest. Na alles wat ze heeft meegemaakt, is ze nog steeds vol liefde.", alt: "Senka, een reddingshond bij My Paws Bosnia" },
    fr: { line: "Une survivante au caract\u00e8re indestructible. Apr\u00e8s tout ce qu\u2019elle a travers\u00e9, elle est toujours pleine d\u2019amour.", alt: "Senka, un chien sauv\u00e9 par My Paws Bosnia" },
  },
};

// Ordered slug list for the slideshow
export const heroSlugs = [
  "barney", "klara", "max", "nadia", "vanja", "luna", "daphne",
  "maus", "freya", "luna-2", "nami", "nero", "atlas", "senka",
];

export function getHeroText(slug: string, lang: Lang): HeroText {
  return heroText[slug]?.[lang] ?? heroText[slug]?.en ?? { line: "", alt: "" };
}

// "Meet X" button prefix per language
export const meetPrefix: Record<Lang, string> = {
  en: "Meet",
  de: "{name} kennenlernen",
  nl: "Ontmoet",
  fr: "D\u00e9couvrir",
};

export function getMeetText(name: string, lang: Lang): string {
  const template = meetPrefix[lang];
  if (template.includes("{name}")) return template.replace("{name}", name);
  return `${template} ${name}`;
}

// Apply CTA text per language
export const applyCta: Record<Lang, string> = {
  en: "Apply to adopt &rarr;",
  de: "Jetzt bewerben &rarr;",
  nl: "Nu aanvragen &rarr;",
  fr: "Postuler maintenant &rarr;",
};

// Past rescue photo alt per language
export const pastRescueAlt: Record<Lang, string> = {
  en: "Rescue dog rehomed from Bosnia to a family in Europe",
  de: "Rettungshund vermittelt an eine Familie in Europa",
  nl: "Reddingshond herplaatst bij een gezin in Europa",
  fr: "Chien sauv\u00e9 plac\u00e9 dans une famille en Europe",
};

// Happy ending image alt per language
export const happyEndingAlt: Record<Lang, string> = {
  en: "adopted from My Paws Bosnia",
  de: "adoptiert von My Paws Bosnia",
  nl: "geadopteerd via My Paws Bosnia",
  fr: "adopt\u00e9 via My Paws Bosnia",
};
