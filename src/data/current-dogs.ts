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
      "Ready to travel from Bosnia",
    ],
  },
  {
    slug: "nero",
    name: "Nero",
    sex: "male",
    age: "young",
    ageYears: 1.5,
    size: "medium",
    shortLine: "A gentle soul with a kind heart. Friendly, active, and great with kids.",
    description: "Nero is a beautiful, gentle boy with the softest heart. Possibly a Border Collie and Shepherd mix, he loves being outdoors, exploring, and being around people. He's healthy, well-cared for, and full of life. Nero would make a wonderful companion for an active family or anyone looking for a loyal and loving friend.",
    traits: [
      "Friendly and affectionate",
      "Active and playful",
      "Loves people and nature",
      "Great with kids",
      "Healthy and ready to go",
      "Mixed breed (Border Collie / Shepherd)",
    ],
  },
];
