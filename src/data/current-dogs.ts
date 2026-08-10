export interface Dog {
  slug: string;
  name: string;
  sex: "male" | "female";
  age: "puppy" | "young" | "adult" | "senior";
  ageYears?: number;
  size: "small" | "medium" | "large";
  shortLine: string;
  description: string;
  traits: string[];
}

export const currentDogs: Dog[] = [
  {
    slug: "flint",
    name: "Flint",
    sex: "male",
    age: "young",
    ageYears: 2,
    size: "medium",
    shortLine: "A true hero. Cuddly, great with kids, walks perfectly on a leash.",
    description: "Flint has been at the shelter since he was a puppy. He recently donated blood to save another dog's life. After all this time, he's still one of the sweetest dogs here and deserves a family of his own.",
    traits: [
      "Cuddly and affectionate",
      "Great with kids",
      "Good with all people",
      "Walks calmly on a leash",
      "Medium size",
      "Neutered and fully vaccinated",
      "At the shelter since puppy age",
    ],
  },
  {
    slug: "barney",
    name: "Barney",
    sex: "male",
    age: "young",
    ageYears: 2,
    size: "medium",
    shortLine: "Happy, affectionate, and full of energy. Best with active families.",
    description: "Barney is a cheerful, energetic boy who loves people and is always ready for the next adventure. He's neutered, fully vaccinated, and his paperwork is ready to travel from Bosnia to his new home.",
    traits: [
      "Happy and affectionate",
      "Very energetic and playful",
      "Good with other dogs",
      "Good with older children",
      "Best suited to an active family",
      "Neutered, vet work complete, travel-ready",
    ],
  },
  {
    slug: "leia",
    name: "Leia",
    sex: "female",
    age: "young",
    ageYears: 3,
    size: "large",
    shortLine: "A gentle 40kg giant who was abandoned but never lost her kind heart.",
    description: "Leia was abandoned outside our shelter. Despite everything, she kept her kind heart and trusting nature. She's calm, confident, and incredibly social — the kind of dog who makes life better just by being around. She needs a home with space to move, and her beautiful thick coat needs regular care.",
    traits: [
      "Calm, confident, and affectionate",
      "Excellent with children",
      "Great with other dogs",
      "Best suited to a home with a large yard",
      "Beautiful thick coat — needs regular grooming",
      "Spayed and fully vaccinated",
      "Ready to travel from Bosnia",
    ],
  },
  {
    slug: "klara",
    name: "Klara",
    sex: "female",
    age: "puppy",
    ageYears: 0.3,
    size: "large",
    shortLine: "A brave little fighter who beat illness and is ready to find her forever home.",
    description: "Klara is one of three sisters born in April 2026 at our shelter in Brčko. As a young puppy she fell seriously ill, but after veterinary treatment and lots of care she made a full recovery. Now healthy, playful, and full of energy, Klara is ready to travel to her new family. Her brother has already been adopted to the UK — and Klara deserves the same chance. She's a black sheepdog mix who will grow to around 25–30 kg.",
    traits: [
      "Fully recovered from illness",
      "Sweet and playful",
      "Good with other dogs",
      "One of three sisters at the shelter",
      "Black sheepdog mix — will grow to 25–30 kg",
      "Ready to travel",
    ],
  },
  {
    slug: "eli",
    name: "Eli",
    sex: "female",
    age: "puppy",
    ageYears: 0.3,
    size: "large",
    shortLine: "A happy, social puppy who loves belly rubs and has never met a stranger.",
    description: "Eli is one of three sisters born in April 2026 at our shelter in Brčko. She's the friendliest of the trio — always the first to run up for pets and belly rubs. Her brother has already been adopted to the UK, and Eli is hoping she's next. She's a black sheepdog mix who will grow to around 25–30 kg, and she's healthy, active, and full of puppy joy.",
    traits: [
      "Super friendly and social",
      "Loves belly rubs",
      "Good with other dogs",
      "One of three sisters at the shelter",
      "Black sheepdog mix — will grow to 25–30 kg",
      "Healthy and ready to travel",
    ],
  },
];
