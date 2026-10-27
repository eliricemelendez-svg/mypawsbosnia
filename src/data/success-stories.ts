export interface SuccessStoryTranslation {
  shortLine: string;
  story: string;
  traits: string[];
  adoptedTo?: string;
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
    slug: "flint",
    name: "Flint",
    sex: "male",
    age: "young",
    ageYears: 2,
    size: "medium",
    shortLine: "A true hero who donated blood to save another dog. Now heading to his forever home in Austria.",
    story: "Flint has been at the shelter since he was a puppy. He donated blood to save another dog's life, earning him a special place in everyone's heart. He was cuddly, great with kids, and walked perfectly on a leash. After years of waiting, Flint finally found his forever family and is heading to Austria to start his new life. We couldn't be happier for this sweet, brave boy.",
    adoptedDate: "September 2026",
    adoptedTo: "Austria",
    traits: [
      "Cuddly and affectionate",
      "Great with kids",
      "Good with all people",
      "Walks calmly on a leash",
      "Medium size",
      "Neutered and fully vaccinated",
      "Donated blood to save another dog",
    ],
    de: {
      shortLine: "Ein echter Held, der Blut spendete, um einen anderen Hund zu retten. Jetzt auf dem Weg in sein Zuhause in \u00d6sterreich.",
      story: "Flint war seit seiner Welpenzeit im Tierheim. Er spendete Blut, um einem anderen Hund das Leben zu retten, und eroberte damit alle Herzen. Er war verschmust, kinderlieb und ging perfekt an der Leine. Nach Jahren des Wartens hat Flint endlich seine Familie gefunden und macht sich auf den Weg nach \u00d6sterreich in sein neues Leben. Wir freuen uns so sehr f\u00fcr diesen lieben, tapferen Jungen.",
      traits: [
        "Verschmust und anh\u00e4nglich",
        "Toll mit Kindern",
        "Versteht sich mit allen Menschen",
        "Geht ruhig an der Leine",
        "Mittelgro\u00df",
        "Kastriert und vollst\u00e4ndig geimpft",
        "Hat Blut gespendet, um einen anderen Hund zu retten",
      ],
      adoptedTo: "\u00d6sterreich",
    },
    nl: {
      shortLine: "Een echte held die bloed doneerde om een andere hond te redden. Nu op weg naar zijn thuis in Oostenrijk.",
      story: "Flint zat al in het asiel sinds hij een pup was. Hij doneerde bloed om het leven van een andere hond te redden, waarmee hij een speciaal plekje in ieders hart veroverde. Hij was knuffelig, heel goed met kinderen en liep perfect aan de lijn. Na jaren wachten heeft Flint eindelijk zijn gezin gevonden en gaat hij naar Oostenrijk voor zijn nieuwe leven. We zijn zo blij voor deze lieve, dappere jongen.",
      traits: [
        "Knuffelig en aanhankelijk",
        "Heel goed met kinderen",
        "Goed met alle mensen",
        "Loopt rustig aan de lijn",
        "Middelgroot",
        "Gecastreerd en volledig gevaccineerd",
        "Doneerde bloed om een andere hond te redden",
      ],
      adoptedTo: "Oostenrijk",
    },
    fr: {
      shortLine: "Un vrai h\u00e9ros qui a donn\u00e9 son sang pour sauver un autre chien. En route vers son foyer en Autriche.",
      story: "Flint \u00e9tait au refuge depuis qu\u2019il \u00e9tait chiot. Il a donn\u00e9 son sang pour sauver la vie d\u2019un autre chien, ce qui lui a valu une place sp\u00e9ciale dans le c\u0153ur de tous. Il \u00e9tait c\u00e2lin, super avec les enfants et marchait parfaitement en laisse. Apr\u00e8s des ann\u00e9es d\u2019attente, Flint a enfin trouv\u00e9 sa famille et part en Autriche pour commencer sa nouvelle vie. Nous sommes tellement heureux pour ce brave et doux gar\u00e7on.",
      traits: [
        "C\u00e2lin et affectueux",
        "Super avec les enfants",
        "S\u2019entend avec tout le monde",
        "Marche calmement en laisse",
        "Taille moyenne",
        "St\u00e9rilis\u00e9 et enti\u00e8rement vaccin\u00e9",
        "A donn\u00e9 son sang pour sauver un autre chien",
      ],
      adoptedTo: "Autriche",
    },
  },
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
      adoptedTo: "Gro\u00dfbritannien",
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
      adoptedTo: "Verenigd Koninkrijk",
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
      adoptedTo: "Royaume-Uni",
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
    story: "Pjuske (pronounced \"PYOO-shkeh\") spent her entire life in shelters. Ours was already her third. Despite everything, she remained loving, gentle, and trusting. In June 2026, after three long years of waiting, Pjuske was finally adopted and will soon be heading to her forever home. We couldn't be happier for her.",
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
      story: "Pjuske (uitgesproken als \u201ePJOE-sjkeh\u201c) bracht haar hele leven door in asielen \u2013 ons asiel was al haar derde. Toch bleef ze lief en vol vertrouwen. In juni 2026, na drie lange jaren wachten, werd Pjuske eindelijk geadopteerd en reist ze binnenkort naar haar nieuwe thuis. We zijn ontzettend blij voor haar.",
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
      story: "Pjuske (prononc\u00e9 \u00ab\u00a0PYOU-chk\u00e8\u00a0\u00bb) a pass\u00e9 toute sa vie en refuge. Le n\u00f4tre \u00e9tait d\u00e9j\u00e0 le troisi\u00e8me. Elle est pourtant rest\u00e9e affectueuse et pleine de confiance. En juin 2026, apr\u00e8s trois longues ann\u00e9es d\u2019attente, Pjuske a enfin \u00e9t\u00e9 adopt\u00e9e et rejoindra bient\u00f4t son nouveau foyer. Nous sommes tellement heureux pour elle.",
      traits: [
        "Affectueuse et douce",
        "S\u2019entend bien avec les autres chiens",
        "Bien avec les chats",
        "Adore les enfants",
        "Adore les c\u00e2lins et la compagnie des gens",
      ],
    },
  },
  {
    slug: "eli",
    name: "Eli",
    sex: "female",
    age: "puppy",
    ageYears: 0.4,
    size: "large",
    shortLine: "The friendliest puppy at the shelter found her forever home in England.",
    story: "Eli was one of three sisters born in April 2026 at our shelter in Brčko. She was the friendliest of the trio, always the first to run up for pets and belly rubs. Her brother had already been adopted to the UK, and in September 2026 Eli got her turn. She is heading to England to start her new life. She is a black sheepdog mix who will grow to around 25–30 kg. We are so happy for her.",
    adoptedDate: "September 2026",
    adoptedTo: "England",
    traits: [
      "Super friendly and social",
      "Loves belly rubs",
      "Good with other dogs",
      "Black sheepdog mix, will grow to 25\u201330 kg",
      "One of three sisters, brother also adopted to UK",
    ],
    de: {
      shortLine: "Der freundlichste Welpe im Tierheim hat sein Zuhause in England gefunden.",
      story: "Eli war eine von drei Schwestern, die im April 2026 in unserem Tierheim in Brčko geboren wurden. Sie war die freundlichste der drei, immer die Erste, die angerannt kam, um gestreichelt zu werden. Ihr Bruder wurde bereits nach Großbritannien adoptiert, und im September 2026 war Eli an der Reihe. Sie macht sich auf den Weg nach England in ihr neues Leben. Sie ist ein schwarzer Schäferhundmischling und wird etwa 25–30 kg wiegen. Wir freuen uns so sehr für sie.",
      traits: [
        "Super freundlich und kontaktfreudig",
        "Liebt Bauchkraulen",
        "Verträglich mit anderen Hunden",
        "Schwarzer Sch\u00e4ferhundmischling, wird 25\u201330 kg",
        "Eine von drei Schwestern, Bruder ebenfalls nach UK adoptiert",
      ],
      adoptedTo: "England",
    },
    nl: {
      shortLine: "De vriendelijkste pup van het asiel heeft haar thuis gevonden in Engeland.",
      story: "Eli was een van drie zussen, geboren in april 2026 in ons asiel in Brčko. Ze was de vriendelijkste van het trio, altijd de eerste die aanrende voor aaitjes en buikkrabbels. Haar broer was al geadopteerd naar het VK, en in september 2026 was Eli aan de beurt. Ze gaat naar Engeland om haar nieuwe leven te beginnen. Ze is een zwarte herdersmix die uitgroeit tot ongeveer 25–30 kg. We zijn zo blij voor haar.",
      traits: [
        "Supervriendelijk en sociaal",
        "Houdt van buikkrabbels",
        "Goed met andere honden",
        "Zwarte herdersmix, groeit uit tot 25\u201330 kg",
        "Een van drie zussen, broer ook geadopteerd naar het VK",
      ],
      adoptedTo: "Engeland",
    },
    fr: {
      shortLine: "La petite la plus amicale du refuge a trouvé sa famille en Angleterre.",
      story: "Eli était l'une des trois sœurs nées en avril 2026 dans notre refuge à Brčko. C'était la plus sociable du trio, toujours la première à accourir pour des câlins et des gratouilles. Son frère avait déjà été adopté au Royaume-Uni, et en septembre 2026, c'était au tour d'Eli. Elle part en Angleterre pour commencer sa nouvelle vie. C'est une croisée berger noir qui atteindra environ 25–30 kg. Nous sommes tellement contents pour elle.",
      traits: [
        "Très sociable et amicale",
        "Adore les gratouilles sur le ventre",
        "S'entend bien avec les autres chiens",
        "Croisée berger noir, atteindra 25–30 kg",
        "L'une des trois sœurs, frère aussi adopté au Royaume-Uni",
      ],
      adoptedTo: "Angleterre",
    },
  },
  {
    slug: "leia",
    name: "Leia",
    sex: "female",
    age: "young",
    ageYears: 3,
    size: "large",
    shortLine: "A gentle 40kg giant who was abandoned but never lost her kind heart. Now home in the UK.",
    story: "Leia was abandoned outside our shelter. Despite everything, she kept her kind heart and trusting nature. She was calm, confident, and incredibly social. The kind of dog who made life better just by being around. After waiting patiently at the shelter, Leia finally found her forever family in the United Kingdom.",
    adoptedDate: "October 2026",
    adoptedTo: "United Kingdom",
    traits: [
      "Calm, confident, and affectionate",
      "Excellent with children",
      "Great with other dogs",
      "Good with cats",
      "Beautiful thick coat",
      "Fully vaccinated and spayed",
    ],
    de: {
      shortLine: "Eine sanfte 40-kg-Riesin, die ausgesetzt wurde, aber nie ihr gutes Herz verloren hat. Jetzt zu Hause in Gro\u00dfbritannien.",
      story: "Leia wurde vor unserem Tierheim ausgesetzt. Sie hat sich ihr freundliches Wesen und ihr Vertrauen in Menschen bewahrt. Sie war ruhig, selbstsicher und sehr gesellig. Nach geduldiger Wartezeit im Tierheim hat Leia endlich ihre Familie in Gro\u00dfbritannien gefunden.",
      traits: [
        "Ruhig, selbstsicher und verschmust",
        "Hervorragend mit Kindern",
        "Toll mit anderen Hunden",
        "Vertr\u00e4glich mit Katzen",
        "Sch\u00f6nes dichtes Fell",
        "Vollst\u00e4ndig geimpft und kastriert",
      ],
      adoptedTo: "Gro\u00dfbritannien",
    },
    nl: {
      shortLine: "Een lieve reus van 40 kg die werd achtergelaten, maar altijd lief bleef. Nu thuis in het VK.",
      story: "Leia werd achtergelaten bij ons asiel. Toch behield ze haar lieve karakter en vertrouwen in mensen. Ze was rustig, zelfverzekerd en heel sociaal. Na geduldig wachten in het asiel heeft Leia eindelijk haar gezin gevonden in het Verenigd Koninkrijk.",
      traits: [
        "Rustig, zelfverzekerd en aanhankelijk",
        "Uitstekend met kinderen",
        "Goed met andere honden",
        "Goed met katten",
        "Dikke, mooie vacht",
        "Volledig gevaccineerd en gesteriliseerd",
      ],
      adoptedTo: "Verenigd Koninkrijk",
    },
    fr: {
      shortLine: "Une g\u00e9ante douce de 40 kg, abandonn\u00e9e mais qui n\u2019a jamais perdu son grand c\u0153ur. Maintenant chez elle au Royaume-Uni.",
      story: "Leia a \u00e9t\u00e9 abandonn\u00e9e devant notre refuge. Elle a quand m\u00eame gard\u00e9 son caract\u00e8re doux et sa confiance envers les humains. Elle \u00e9tait calme, s\u00fbre d\u2019elle et tr\u00e8s sociable. Apr\u00e8s une attente patiente au refuge, Leia a enfin trouv\u00e9 sa famille au Royaume-Uni.",
      traits: [
        "Calme, s\u00fbre d\u2019elle et affectueuse",
        "Excellente avec les enfants",
        "Tr\u00e8s bien avec les autres chiens",
        "Bonne avec les chats",
        "Beau pelage \u00e9pais",
        "Enti\u00e8rement vaccin\u00e9e et st\u00e9rilis\u00e9e",
      ],
      adoptedTo: "Royaume-Uni",
    },
  },
];
