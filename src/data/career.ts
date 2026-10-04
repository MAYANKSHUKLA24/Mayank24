export type CareerRole = {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  current: boolean;
  summary: string;
  bullets: string[];
  brandfetchDomain?: string;
};

export const careerTimeline: CareerRole[] = [
  {
    id: "rolling-stone-india",
    company: "Rolling Stone India",
    role: "Manager, Brand Partnerships & Experiences",
    dateRange: "2026 - Present",
    current: true,
    summary:
      "Building partnerships between culture-defining brands and Rolling Stone India's audience.",
    bullets: [
      "Developing brand partnerships, branded content and experiences across Rolling Stone India's editorial, digital and live platforms.",
      "Working at the intersection of brand strategy, talent and culture to turn briefs into ideas worth covering.",
    ],
  },
  {
    id: "22feet-tribal",
    company: "22 Feet Tribal Worldwide",
    role: "Senior Client Solutions Partner",
    dateRange: "Mar 2026 - 2026",
    current: false,
    summary:
      "Led end-to-end social and integrated campaigns for Jack Daniel's and RuPay (NPCI).",
    bullets: [
      "Led end-to-end social media execution and integrated campaigns across ATL and BTL channels for clients including Jack Daniel's and RuPay (NPCI).",
      "Spearheaded a 360-degree campaign for the Def Leppard concert: pre-event hype, on-ground activation and post-event amplification across platforms.",
      "Served as primary client point of contact, translating brand objectives into integrated marketing strategies across digital and offline touchpoints.",
    ],
    brandfetchDomain: "tribalworldwide.com",
  },
  {
    id: "creativeland-asia",
    company: "Creativeland Asia",
    role: "Creative Operations Partner",
    dateRange: "2025 - Mar 2026",
    current: false,
    summary:
      "Owned brand management and client servicing for Waves OTT, scaling audience and leading cultural activations at IFFI, FICCI and the National Film Awards.",
    bullets: [
      "Owned brand management and client servicing for Waves OTT; grew the brand to 50K+ Instagram followers and 100K+ across YouTube & Facebook.",
      "Led integrated brand activations at FICCI, NFA and IFFI 2025: spearheading multi-venue booth execution, the official tableau, live performances and Cultural Closing Ceremony communications.",
      "Managed integrated marketing campaigns across digital and print, contributing to 100M+ organic views and improved long-term brand equity.",
      "Supported distribution partnerships and co-marketing campaigns with Tata Play and Cloud TV; facilitated Sony Retail India's first third-party activation at IFFI.",
    ],
    brandfetchDomain: "creativeland.asia",
  },
  {
    id: "schbang",
    company: "Schbang",
    role: "Senior Brand Solutions Strategist",
    dateRange: "2024 - 2025",
    current: false,
    summary:
      "Ran partner marketing across 10 Smart TV OEMs for Amazon Prime Video and led e-commerce storytelling for Lakmé.",
    bullets: [
      "Managed daily partner marketing operations across 10 Smart TV OEMs (Sony, Samsung, LG, Xiaomi, Google TV) for Amazon Prime Video, ensuring seamless campaign execution.",
      "Developed and executed co-marketing campaigns for high-impact title launches reaching 60M+ users, integrating partner services and promotional assets.",
      "Wrote Talent Byte scripts for title and brand promotions; coordinated promotional shoots and briefing sessions.",
      "Conceptualised and delivered SI and A+ e-commerce listings for Lakmé, boosting product visibility and brand storytelling.",
    ],
    brandfetchDomain: "schbang.com",
  },
  {
    id: "bnk",
    company: "BNK",
    role: "Head of Operations (Self-Employed)",
    dateRange: "2023 - 2024",
    current: false,
    summary:
      "Streamlined internal operations and client onboarding across concurrent projects.",
    bullets: [
      "Streamlined internal processes and resource planning, mitigating delivery risks across concurrent client projects.",
      "Onboarded new clients, delivering tailored solutions and building long-term trust-based relationships.",
    ],
  },
  {
    id: "white-digital-canvas",
    company: "White Digital Canvas",
    role: "Associate Manager, Client Servicing",
    dateRange: "2021 - 2023",
    current: false,
    summary:
      "Primary client liaison for Wonder Cement, Raj Petro, Zoomol Lubricants and Symphony.",
    bullets: [
      "Served as primary client liaison for brands including Wonder Cement, Raj Petro, Zoomol Lubricants and Symphony.",
      "Executed a high-impact brand campaign for Raj Petro; spearheaded Zoomol's new SKU product launch.",
      "Delivered a Wonder Cement performance campaign achieving 5M+ reach and 7.2M+ impressions.",
      "Managed end-to-end campaign workflows from planning and budgeting through to execution and reporting.",
    ],
  },
];
