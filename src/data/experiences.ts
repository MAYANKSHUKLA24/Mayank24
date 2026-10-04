export type Experience = {
  id: string;
  title: string;
  org: string;
  year: string;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: "iffi-2025",
    title: "IFFI 2025",
    org: "International Film Festival of India",
    year: "2025",
    description:
      "Multi-venue booth execution, the official tableau, live performances and Cultural Closing Ceremony communications. Facilitated Sony Retail India's first third-party activation at the festival.",
    tags: ["Brand Activation", "Entertainment", "Culture"],
  },
  {
    id: "national-film-awards",
    title: "National Film Awards",
    org: "Creativeland Asia",
    year: "2025",
    description:
      "Integrated brand activation as part of Waves OTT's presence at India's national cinema honours.",
    tags: ["Brand Activation", "Entertainment"],
  },
  {
    id: "ficci-frames",
    title: "FICCI Frames",
    org: "Creativeland Asia",
    year: "2025",
    description:
      "Integrated brand activation at India's flagship media and entertainment industry convention.",
    tags: ["Brand Activation", "Entertainment", "Industry"],
  },
  {
    id: "def-leppard-concert",
    title: "Def Leppard Concert",
    org: "22 Feet Tribal Worldwide",
    year: "2026",
    description:
      "360-degree campaign spanning pre-event hype, on-ground activation and post-event amplification across platforms, for Jack Daniel's.",
    tags: ["Live Music", "Brand Activation", "Experiential"],
  },
];
