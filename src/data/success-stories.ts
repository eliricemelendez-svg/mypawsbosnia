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
    slug: "bridgette",
    name: "Bridgette",
    sex: "female",
    age: "adult",
    ageYears: 4,
    size: "small",
    shortLine: "From a scared puppy in Bosnia to a happy, mud-loving dog in the UK.",
    story: "Bridgette was part of a litter born at our shelter in Brčko. Her family found us through Facebook, thought the puppies looked cute, and sent us a message. After a home check and some paperwork, Bridgette was on her way to the UK. When she first arrived in 2022, she was nervous. She didn't know what a toy was. She played with sticks and hid from her new family. Four years later, she's rambunctious, loving, and covered in mud most of the time. Bridgette is proof that these dogs just need a chance.",
    adoptedDate: "2022",
    adoptedTo: "United Kingdom",
    traits: [
      "Playful and energetic",
      "Loving and affectionate",
      "Loves the outdoors",
      "Adopted from Bosnia to the UK",
      "Transport cost around £500",
    ],
  },
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
