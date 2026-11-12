export type TalentCategory =
  | "ACTORS"
  | "CREATORS"
  | "MUSICIANS"
  | "SPORTS"
  | "CULTURE"
  | "ENTERTAINMENT";

export type Talent = {
  slug: string;
  name: string;
  category: TalentCategory[];
  brandRelevance: string;
  format: string;
  byte: string;
  project: string;
  projectSlug: string;
  notes: string;
  driveFileId: string;
};

export const talents: Talent[] = [
  {
    slug: "teri-baaton-mein-aisa-uljha-jiya",
    name: "Shahid Kapoor: Teri Baaton Mein Aisa Uljha Jiya",
    category: ["ACTORS", "ENTERTAINMENT"],
    brandRelevance: "Amazon Prime Video title launch, Smart TV OEM co-marketing",
    format: "Talent solo cut, 16:9, 30 sec",
    byte: "Solo attribution byte built for Smart TV OEM placements around the title's Prime Video launch.",
    project: "Amazon Prime Video: Smart TV OEM Partner Marketing",
    projectSlug: "amazon-prime-video",
    notes: "Scripted and coordinated as part of the Schbang Talent Byte workflow for Prime Video.",
    driveFileId: "1D72UJkyCmEU18EmZt-EXephekM6M3eEI",
  },
  {
    slug: "call-me-bae",
    name: "Call Me Bae",
    category: ["ENTERTAINMENT"],
    brandRelevance: "Amazon Prime Video title launch, Smart TV OEM co-marketing",
    format: "Generic attribution, with subtitles",
    byte: "Generic title attribution cut used across OEM promotional placements.",
    project: "Amazon Prime Video: Smart TV OEM Partner Marketing",
    projectSlug: "amazon-prime-video",
    notes: "Part of the co-marketing push across Sony, Samsung, LG, Xiaomi and Google TV.",
    driveFileId: "1zp2zzamGuz-MPRJU5P24Gsn9ePvIWd9z",
  },
  {
    slug: "madgaon-express",
    name: "Madgaon Express",
    category: ["ENTERTAINMENT"],
    brandRelevance: "Amazon Prime Video title launch, Smart TV OEM co-marketing",
    format: "Generic attribution, 30 sec",
    byte: "Generic title attribution cut used across OEM promotional placements.",
    project: "Amazon Prime Video: Smart TV OEM Partner Marketing",
    projectSlug: "amazon-prime-video",
    notes: "Part of the co-marketing push across Sony, Samsung, LG, Xiaomi and Google TV.",
    driveFileId: "1PN2fd9afNuPKOPtMdx5zWhXm18s-tb1Y",
  },
  {
    slug: "paatal-lok",
    name: "Paatal Lok",
    category: ["ENTERTAINMENT"],
    brandRelevance: "Amazon Prime Video title launch, Smart TV OEM co-marketing",
    format: "Generic attribution",
    byte: "Generic title attribution cut used across OEM promotional placements.",
    project: "Amazon Prime Video: Smart TV OEM Partner Marketing",
    projectSlug: "amazon-prime-video",
    notes: "Part of the co-marketing push across Sony, Samsung, LG, Xiaomi and Google TV.",
    driveFileId: "1SDupZrGvGMQRV-wtAxBYErDjrrOnATfP",
  },
  {
    slug: "ae-watan-mere-watan",
    name: "Ae Watan Mere Watan",
    category: ["ENTERTAINMENT"],
    brandRelevance: "Amazon Prime Video title launch, Smart TV OEM co-marketing",
    format: "Generic attribution, 30 sec",
    byte: "Generic title attribution cut used across OEM promotional placements.",
    project: "Amazon Prime Video: Smart TV OEM Partner Marketing",
    projectSlug: "amazon-prime-video",
    notes: "Part of the co-marketing push across Sony, Samsung, LG, Xiaomi and Google TV.",
    driveFileId: "12LKX5kNXiGKxbmKaRTL6Ms1tQe8Ko_39",
  },
];

export const talentCategories: TalentCategory[] = [
  "ACTORS",
  "CREATORS",
  "MUSICIANS",
  "SPORTS",
  "CULTURE",
  "ENTERTAINMENT",
];
