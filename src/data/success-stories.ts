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
}

export const successStories: SuccessStory[] = [
  {
    slug: "pjuske",
    name: "Pjuske",
    sex: "female",
    age: "young",
    ageYears: 3,
    size: "medium",
    shortLine: "After three years in shelters, Pjuske finally found her forever home.",
    story: "Pjuske (pronounced \"PYOO-shkeh\") spent her entire life in shelters — ours was already her third. Despite everything, she remained loving, gentle, and trusting. In June 2026, after three long years of waiting, Pjuske was finally adopted and will soon be heading to her forever home. We couldn't be happier for her.",
    adoptedDate: "June 2026",
    traits: [
      "Loving and gentle",
      "Friendly with other dogs",
      "Good with cats",
      "Wonderful with children",
      "Loves affection and human company",
    ],
  },
  {
    slug: "nero",
    name: "Nero",
    sex: "male",
    age: "young",
    ageYears: 1.5,
    size: "medium",
    shortLine: "A gentle soul who found his forever home in Belgium.",
    story: "Nero is a beautiful, gentle boy with the softest heart. Possibly a Border Collie and Shepherd mix, he loved being outdoors, exploring, and being around people. After waiting patiently at the shelter, Nero was adopted in August 2026 and will be starting his new life in Belgium. We're so happy for this sweet boy — he truly deserves it.",
    adoptedDate: "August 2026",
    adoptedTo: "Belgium",
    traits: [
      "Friendly and affectionate",
      "Active and playful",
      "Loves people and nature",
      "Great with kids",
      "Mixed breed (Border Collie / Shepherd)",
    ],
  },
];
