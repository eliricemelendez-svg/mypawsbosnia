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
  },
];
