export interface PastRescueTranslation {
  story: string;
  shortLine: string;
}

export interface PastRescue {
  slug: string;
  name: string;
  sex: "male" | "female";
  age: "puppy" | "young" | "adult" | "senior";
  size: "small" | "medium" | "large";
  yearRescued: number;
  adoptedTo: string;
  story: string;
  shortLine: string;
  de?: PastRescueTranslation;
  nl?: PastRescueTranslation;
  fr?: PastRescueTranslation;
}

export const pastRescues: PastRescue[] = [
  {
    slug: "luna",
    name: "Luna",
    sex: "female",
    age: "young",
    size: "medium",
    yearRescued: 2023,
    adoptedTo: "Switzerland",
    story: "Found wandering near a highway. After months of rehabilitation, Luna found her forever home in Zurich.",
    shortLine: "Now living her best life in Switzerland.",
    de: {
      story: "Sie wurde in der N\u00e4he einer Autobahn gefunden. Nach Monaten der Rehabilitation fand Luna ihr Zuhause in Z\u00fcrich.",
      shortLine: "Lebt jetzt ihr bestes Leben in der Schweiz.",
    },
    nl: {
      story: "Gevonden bij een snelweg. Na maanden revalidatie vond Luna haar thuis in Z\u00fcrich.",
      shortLine: "Leeft nu haar beste leven in Zwitserland.",
    },
    fr: {
      story: "Trouv\u00e9e errant pr\u00e8s d\u2019une autoroute. Apr\u00e8s des mois de r\u00e9habilitation, Luna a trouv\u00e9 son foyer \u00e0 Zurich.",
      shortLine: "Elle vit aujourd\u2019hui sa plus belle vie en Suisse.",
    },
  },
  {
    slug: "rocky",
    name: "Rocky",
    sex: "male",
    age: "adult",
    size: "large",
    yearRescued: 2022,
    adoptedTo: "Germany",
    story: "Rocky was severely malnourished when Vesna found him. With proper care, he recovered fully and was adopted by a family in Munich.",
    shortLine: "From skin and bones to a happy family dog.",
    de: {
      story: "Rocky war stark unterern\u00e4hrt, als Vesna ihn fand. Mit der richtigen Pflege erholte er sich vollst\u00e4ndig und wurde von einer Familie in M\u00fcnchen adoptiert.",
      shortLine: "Von Haut und Knochen zum gl\u00fccklichen Familienhund.",
    },
    nl: {
      story: "Rocky was ernstig ondervoed toen Vesna hem vond. Met de juiste zorg herstelde hij volledig en werd hij geadopteerd door een gezin in M\u00fcnchen.",
      shortLine: "Van vel over been tot een gelukkige familiehond.",
    },
    fr: {
      story: "Rocky \u00e9tait gravement sous-aliment\u00e9 quand Vesna l\u2019a trouv\u00e9. Avec les bons soins, il s\u2019est compl\u00e8tement r\u00e9tabli et a \u00e9t\u00e9 adopt\u00e9 par une famille \u00e0 Munich.",
      shortLine: "De la peau sur les os \u00e0 chien de famille \u00e9panoui.",
    },
  },
  {
    slug: "sara",
    name: "Sara",
    sex: "female",
    age: "puppy",
    size: "small",
    yearRescued: 2024,
    adoptedTo: "United Kingdom",
    story: "Part of a litter abandoned in a cardboard box. Sara was the smallest but the fiercest. She now lives in London.",
    shortLine: "The tiniest survivor, now thriving in London.",
    de: {
      story: "Teil eines Wurfs, der in einem Karton ausgesetzt wurde. Sara war die Kleinste, aber die Tapferste. Sie lebt jetzt in London.",
      shortLine: "Die kleinste \u00dcberlebende, jetzt gl\u00fccklich in London.",
    },
    nl: {
      story: "Deel van een nest dat werd achtergelaten in een kartonnen doos. Sara was de kleinste maar de dapperste. Ze woont nu in Londen.",
      shortLine: "De kleinste overlever, nu gelukkig in Londen.",
    },
    fr: {
      story: "Elle faisait partie d\u2019une port\u00e9e abandonn\u00e9e dans un carton. Sara \u00e9tait la plus petite mais la plus courageuse. Elle vit d\u00e9sormais \u00e0 Londres.",
      shortLine: "La plus petite survivante, aujourd\u2019hui \u00e9panouie \u00e0 Londres.",
    },
  },
];
