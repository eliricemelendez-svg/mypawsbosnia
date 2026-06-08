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
    slug: "pjuske",
    name: "Pjuske",
    sex: "female",
    age: "young",
    ageYears: 3,
    size: "medium",
    shortLine: "Three years in shelters, still full of love. Good with dogs, cats, and kids.",
    description: "Pjuske (pronounced \"PYOO-shkeh\") has spent her entire life in shelters. We are already her third. Despite everything, she remains loving, gentle, and trusting. She's been waiting three years for someone to take her home.",
    traits: [
      "Loving and gentle",
      "Friendly with other dogs",
      "Good with cats",
      "Wonderful with children",
      "Loves affection and human company",
      "Has never known life outside a shelter",
    ],
  },
];
