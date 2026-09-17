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
  fr?: SuccessStoryTranslation;
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
      story: "Bridgette geh\u00f6rte zu einem Wurf, der in unserem Tierheim in Br\u010dko geboren wurde. Ihre Familie fand uns \u00fcber Facebook, fand die Welpen s\u00fc\u00df und schrieb uns eine Nachricht. Nach einem Hausbesuch und etwas Papierkram war Bridgette auf dem Weg nach Gro\u00dfbritannien. Als sie 2022 ankam, war sie \u00e4ngstlich. Sie wusste nicht, was ein Spielzeug ist. Sie spielte mit St\u00f6cken und versteckte sich vor ihrer neuen Familie. Vier Jahre sp\u00e4ter ist sie lebhaft, liebevoll und meistens voller Schlamm. Bridgette ist der Beweis, dass diese Hunde nur eine Chance brauchen.",
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
      story: "Bridgette was onderdeel van een nest dat in ons asiel in Br\u010dko werd geboren. Haar gezin vond ons via Facebook, vond de puppy\u2019s schattig en stuurde ons een bericht. Na een thuiscontrole en wat papierwerk was Bridgette op weg naar het VK. Toen ze in 2022 aankwam, was ze zenuwachtig. Ze wist niet wat een speeltje was. Ze speelde met stokken en verstopte zich voor haar nieuwe gezin. Vier jaar later is ze uitgelaten, lief en meestal onder de modder. Bridgette is het bewijs dat deze honden gewoon een kans nodig hebben.",
      traits: [
        "Speels en energiek",
        "Liefdevol en aanhankelijk",
        "Houdt van buiten zijn",
        "Geadopteerd van Bosni\u00eb naar het VK",
        "Transportkosten ca. \u00a3500",
      ],
    },
    fr: {
      shortLine: "D\u2019un chiot apeur\u00e9 en Bosnie \u00e0 une chienne heureuse et couverte de boue au Royaume-Uni.",
      story: "Bridgette faisait partie d\u2019une port\u00e9e n\u00e9e dans notre refuge \u00e0 Br\u010dko. Sa famille nous a trouv\u00e9s sur Facebook, a craq\u00e9 pour les chiots et nous a envoy\u00e9 un message. Apr\u00e8s une visite \u00e0 domicile et quelques formalit\u00e9s, Bridgette \u00e9tait en route pour le Royaume-Uni. Quand elle est arriv\u00e9e en 2022, elle \u00e9tait nerveuse. Elle ne savait pas ce qu\u2019\u00e9tait un jouet. Elle jouait avec des b\u00e2tons et se cachait de sa nouvelle famille. Quatre ans plus tard, elle est turbulente, affectueuse et couverte de boue la plupart du temps. Bridgette est la preuve que ces chiens ont juste besoin d\u2019une chance.",
      traits: [
        "Joueuse et \u00e9nergique",
        "Affectueuse et c\u00e2line",
        "Adore le plein air",
        "Adopt\u00e9e de Bosnie vers le Royaume-Uni",
        "Transport environ 500\u00a0\u00a3",
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
      story: "Pjuske (ausgesprochen \u201ePJUU-schkeh\u201c) verbrachte ihr ganzes Leben in Tierheimen \u2013 unseres war bereits ihr drittes. Sie blieb aber liebevoll und voller Vertrauen. Nach drei langen Jahren wurde Pjuske im Juni 2026 endlich adoptiert und wird bald in ihr neues Zuhause reisen. Wir freuen uns so sehr f\u00fcr sie.",
      traits: [
        "Liebevoll und sanft",
        "Vertr\u00e4glich mit anderen Hunden",
        "Gut mit Katzen",
        "Toll mit Kindern",
        "Liebt Streicheleinheiten und ist gern bei Menschen",
      ],
    },
    nl: {
      shortLine: "Na drie jaar in asielen heeft Pjuske eindelijk haar thuis gevonden.",
      story: "Pjuske (uitgesproken als \u201ePJOE-sjkeh\u201c) bracht haar hele leven door in asielen \u2013 ons asiel was al haar derde. Ondanks alles bleef ze liefdevol, zachtaardig en vol vertrouwen. In juni 2026, na drie lange jaren wachten, werd Pjuske eindelijk geadopteerd en reist ze binnenkort naar haar nieuwe thuis. We zijn ontzettend blij voor haar.",
      traits: [
        "Liefdevol en zachtaardig",
        "Vriendelijk met andere honden",
        "Goed met katten",
        "Dol op kinderen",
        "Houdt van aandacht en menselijk gezelschap",
      ],
    },
    fr: {
      shortLine: "Apr\u00e8s trois ans en refuge, Pjuske a enfin trouv\u00e9 sa famille pour la vie.",
      story: "Pjuske (prononc\u00e9 \u00ab\u00a0PYOU-chk\u00e8\u00a0\u00bb) a pass\u00e9 toute sa vie en refuge. Le n\u00f4tre \u00e9tait d\u00e9j\u00e0 le troisi\u00e8me. Malgr\u00e9 tout, elle est rest\u00e9e affectueuse, douce et pleine de confiance. En juin 2026, apr\u00e8s trois longues ann\u00e9es d\u2019attente, Pjuske a enfin \u00e9t\u00e9 adopt\u00e9e et rejoindra bient\u00f4t son nouveau foyer. Nous sommes tellement heureux pour elle.",
      traits: [
        "Affectueuse et douce",
        "S\u2019entend bien avec les autres chiens",
        "Bien avec les chats",
        "Formidable avec les enfants",
        "Adore les c\u00e2lins et la compagnie des gens",
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
      shortLine: "Eine sanfte Seele, die ihr Zuhause in Belgien gefunden hat.",
      story: "Nero ist ein h\u00fcbscher, sanfter R\u00fcde mit einem ganz weichen Wesen. Wahrscheinlich ein Border Collie-Sch\u00e4ferhund-Mischling, der gerne drau\u00dfen war, alles erkundete und am liebsten in der N\u00e4he von Menschen blieb. Nero hat geduldig im Tierheim gewartet. Im August 2026 wurde er endlich adoptiert und beginnt sein neues Leben in Belgien. Wir sind so gl\u00fccklich f\u00fcr diesen lieben Jungen \u2013 das hat er sich so verdient.",
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
      story: "Nero is een prachtige, lieve reu met een heel zacht karakter. Waarschijnlijk een Border Collie-herdersmix die graag buiten was, alles wilde ontdekken en bij mensen was. Na geduldig wachten in het asiel werd Nero in augustus 2026 geadopteerd en begint hij zijn nieuwe leven in Belgi\u00eb. We zijn zo blij voor deze lieve jongen \u2013 hij verdient het echt.",
      traits: [
        "Vriendelijk en aanhankelijk",
        "Actief en speels",
        "Houdt van mensen en natuur",
        "Heel goed met kinderen",
        "Kruising (Border Collie / Herder)",
      ],
    },
    fr: {
      shortLine: "Une \u00e2me douce qui a trouv\u00e9 son foyer en Belgique.",
      story: "Nero est un beau gar\u00e7on au caract\u00e8re tendre. Probablement un crois\u00e9 Border Collie et berger, il adorait \u00eatre dehors, explorer et rester pr\u00e8s des gens. Apr\u00e8s une attente patiente au refuge, Nero a \u00e9t\u00e9 adopt\u00e9 en ao\u00fbt 2026 et commence sa nouvelle vie en Belgique. Nous sommes tellement heureux pour ce gentil gar\u00e7on. Il le m\u00e9rite vraiment.",
      traits: [
        "Amical et affectueux",
        "Actif et joueur",
        "Adore les gens et la nature",
        "Formidable avec les enfants",
        "Crois\u00e9 Border Collie / berger",
      ],
    },
  },
];
