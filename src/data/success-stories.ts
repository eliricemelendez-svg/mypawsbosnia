export interface SuccessStoryTranslation {
  shortLine: string;
  story: string;
  traits: string[];
}

export interface SuccessStory {
  slug: string;
  name: string;
  sex: "male" | "female";
  age: "puppy" | "young" | "adult" | "senior";
  ageYears?: number;
  size: "small" | "medium" | "large";
  shortLine: string;
  story: string;
  adoptedDate: string;
  adoptedTo?: string;
  traits: string[];
  de?: SuccessStoryTranslation;
  nl?: SuccessStoryTranslation;
}

export const successStories: SuccessStory[] = [
  {
    slug: "bridgette",
    name: "Bridgette",
    sex: "female",
    age: "adult",
    ageYears: 4,
    size: "small",
    shortLine: "From a scared puppy in Bosnia to a happy, mud-loving dog in the UK.",
    story: "Bridgette was part of a litter born at our shelter in Br\u010dko. Her family found us through Facebook, thought the puppies looked cute, and sent us a message. After a home check and some paperwork, Bridgette was on her way to the UK. When she first arrived in 2022, she was nervous. She didn't know what a toy was. She played with sticks and hid from her new family. Four years later, she's rambunctious, loving, and covered in mud most of the time. Bridgette is proof that these dogs just need a chance.",
    adoptedDate: "2022",
    adoptedTo: "United Kingdom",
    traits: [
      "Playful and energetic",
      "Loving and affectionate",
      "Loves the outdoors",
      "Adopted from Bosnia to the UK",
      "Transport cost around \u00a3500",
    ],
    de: {
      shortLine: "Von einem \u00e4ngstlichen Welpen in Bosnien zu einem gl\u00fccklichen, schlammverliebten Hund in Gro\u00dfbritannien.",
      story: "Bridgette geh\u00f6rte zu einem Wurf, der in unserem Tierheim in Br\u010dko geboren wurde. Ihre Familie fand uns \u00fcber Facebook, fand die Welpen s\u00fc\u00df und schrieb uns eine Nachricht. Nach einem Hausbesuch und etwas Papierkram war Bridgette auf dem Weg nach Gro\u00dfbritannien. Als sie 2022 ankam, war sie \u00e4ngstlich. Sie wusste nicht, was ein Spielzeug ist. Sie spielte mit St\u00f6cken und versteckte sich vor ihrer neuen Familie. Vier Jahre sp\u00e4ter ist sie wild, liebevoll und meistens voller Schlamm. Bridgette ist der Beweis, dass diese Hunde nur eine Chance brauchen.",
      traits: [
        "Verspielt und energiegeladen",
        "Liebevoll und anh\u00e4nglich",
        "Liebt die Natur",
        "Adoptiert von Bosnien nach Gro\u00dfbritannien",
        "Transportkosten ca. \u00a3500",
      ],
    },
    nl: {
      shortLine: "Van een bange pup in Bosni\u00eb tot een blije, moddergekke hond in het VK.",
      story: "Bridgette was onderdeel van een nest dat in ons asiel in Br\u010dko werd geboren. Haar gezin vond ons via Facebook, vond de puppy\u2019s schattig en stuurde ons een bericht. Na een thuiscontrole en wat papierwerk was Bridgette op weg naar het VK. Toen ze in 2022 aankwam, was ze zenuwachtig. Ze wist niet wat een speeltje was. Ze speelde met stokken en verstopte zich voor haar nieuwe gezin. Vier jaar later is ze wild, lief en meestal onder de modder. Bridgette is het bewijs dat deze honden gewoon een kans nodig hebben.",
      traits: [
        "Speels en energiek",
        "Liefdevol en aanhankelijk",
        "Houdt van buiten zijn",
        "Geadopteerd van Bosni\u00eb naar het VK",
        "Transportkosten ca. \u00a3500",
      ],
    },
  },
  {
    slug: "pjuske",
    name: "Pjuske",
    sex: "female",
    age: "young",
    ageYears: 3,
    size: "medium",
    shortLine: "After three years in shelters, Pjuske finally found her forever home.",
    story: "Pjuske (pronounced \"PYOO-shkeh\") spent her entire life in shelters \u2014 ours was already her third. Despite everything, she remained loving, gentle, and trusting. In June 2026, after three long years of waiting, Pjuske was finally adopted and will soon be heading to her forever home. We couldn't be happier for her.",
    adoptedDate: "June 2026",
    traits: [
      "Loving and gentle",
      "Friendly with other dogs",
      "Good with cats",
      "Wonderful with children",
      "Loves affection and human company",
    ],
    de: {
      shortLine: "Nach drei Jahren im Tierheim hat Pjuske endlich ihr Zuhause gefunden.",
      story: "Pjuske (ausgesprochen \u201ePJUU-schkeh\u201c) verbrachte ihr ganzes Leben in Tierheimen \u2013 unseres war bereits ihr drittes. Trotz allem blieb sie liebevoll, sanft und voller Vertrauen. Im Juni 2026, nach drei langen Jahren des Wartens, wurde Pjuske endlich adoptiert und wird bald in ihr neues Zuhause reisen. Wir k\u00f6nnten gl\u00fccklicher f\u00fcr sie nicht sein.",
      traits: [
        "Liebevoll und sanft",
        "Vertr\u00e4glich mit anderen Hunden",
        "Gut mit Katzen",
        "Wunderbar mit Kindern",
        "Liebt Zuneigung und menschliche Gesellschaft",
      ],
    },
    nl: {
      shortLine: "Na drie jaar in asielen heeft Pjuske eindelijk haar thuis gevonden.",
      story: "Pjuske (uitgesproken als \u201ePJOE-sjkeh\u201c) bracht haar hele leven door in asielen \u2013 het onze was al haar derde. Ondanks alles bleef ze liefdevol, zachtaardig en vol vertrouwen. In juni 2026, na drie lange jaren wachten, werd Pjuske eindelijk geadopteerd en reist ze binnenkort naar haar nieuwe thuis. We zijn ontzettend blij voor haar.",
      traits: [
        "Liefdevol en zachtaardig",
        "Vriendelijk met andere honden",
        "Goed met katten",
        "Geweldig met kinderen",
        "Houdt van aandacht en menselijk gezelschap",
      ],
    },
  },
  {
    slug: "nero",
    name: "Nero",
    sex: "male",
    age: "young",
    ageYears: 1.5,
    size: "medium",
    shortLine: "A gentle soul who found his forever home in Belgium.",
    story: "Nero is a beautiful, gentle boy with the softest heart. Possibly a Border Collie and Shepherd mix, he loved being outdoors, exploring, and being around people. After waiting patiently at the shelter, Nero was adopted in August 2026 and will be starting his new life in Belgium. We're so happy for this sweet boy \u2014 he truly deserves it.",
    adoptedDate: "August 2026",
    adoptedTo: "Belgium",
    traits: [
      "Friendly and affectionate",
      "Active and playful",
      "Loves people and nature",
      "Great with kids",
      "Mixed breed (Border Collie / Shepherd)",
    ],
    de: {
      shortLine: "Eine sanfte Seele, die sein Zuhause in Belgien gefunden hat.",
      story: "Nero ist ein wundersch\u00f6ner, sanfter R\u00fcde mit dem weichsten Herzen. Wahrscheinlich ein Border Collie-Sch\u00e4ferhund-Mischling, der es liebte, drau\u00dfen zu sein, die Welt zu erkunden und in der N\u00e4he von Menschen zu sein. Nachdem er geduldig im Tierheim gewartet hatte, wurde Nero im August 2026 adoptiert und beginnt sein neues Leben in Belgien. Wir sind so gl\u00fccklich f\u00fcr diesen lieben Jungen \u2013 er hat es wirklich verdient.",
      traits: [
        "Freundlich und anh\u00e4nglich",
        "Aktiv und verspielt",
        "Liebt Menschen und Natur",
        "Toll mit Kindern",
        "Mischling (Border Collie / Sch\u00e4ferhund)",
      ],
    },
    nl: {
      shortLine: "Een lieve ziel die zijn thuis vond in Belgi\u00eb.",
      story: "Nero is een prachtige, lieve reu met het zachtste hart. Waarschijnlijk een Border Collie-herdersmix die graag buiten was, de wereld verkende en bij mensen was. Na geduldig wachten in het asiel werd Nero in augustus 2026 geadopteerd en begint hij zijn nieuwe leven in Belgi\u00eb. We zijn zo blij voor deze lieve jongen \u2013 hij verdient het echt.",
      traits: [
        "Vriendelijk en aanhankelijk",
        "Actief en speels",
        "Houdt van mensen en natuur",
        "Geweldig met kinderen",
        "Kruising (Border Collie / Herder)",
      ],
    },
  },
];
