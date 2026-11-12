export type FilterTag =
  | "BRAND"
  | "ENTERTAINMENT"
  | "TALENT"
  | "EXPERIENCE"
  | "TECHNOLOGY"
  | "SOCIAL"
  | "PARTNERSHIPS"
  | "EVENTS";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  client: string;
  category: string;
  tags: FilterTag[];
  year: string;
  role: string;
  employer: string;
  description: string;
  brandfetchDomain?: string;
  status: "case-study" | "placeholder";
  metrics?: ProjectMetric[];
  sections?: CaseStudySection[];
  talent?: string[];
  partners?: string[];
  instagramEmbeds?: string[];
  driveVideoIds?: string[];
};

export const projects: Project[] = [
  {
    slug: "waves-ott",
    client: "Waves OTT",
    category: "Experience · Brand Management",
    tags: ["EXPERIENCE"],
    year: "2025-2026",
    role: "Creative Operations Partner, Creativeland Asia",
    employer: "Creativeland Asia",
    description:
      "End-to-end brand management and client servicing for an OTT platform: audience growth, distribution partnerships and flagship cultural activations.",
    status: "case-study",
    metrics: [
      { value: "50K+", label: "Instagram followers built" },
      { value: "100K+", label: "YouTube + Facebook audience" },
      { value: "100M+", label: "Organic views across campaigns" },
    ],
    sections: [
      {
        heading: "01. The Brief",
        body: [
          "Own brand management and client servicing for Waves OTT end to end: build audience, grow distribution, and put the brand inside the rooms that matter in Indian entertainment and film culture.",
        ],
      },
      {
        heading: "02. The Challenge",
        body: [
          "A growing OTT brand needed presence at the country's biggest film and culture platforms, IFFI, the National Film Awards and FICCI Frames, while scaling owned social audiences from a standing start.",
        ],
      },
      {
        heading: "03. The Idea",
        body: [
          "Treat distribution and culture as the same growth lever: build co-marketing partnerships with established platforms while showing up physically and digitally at the events the industry already watches.",
        ],
      },
      {
        heading: "04. The Strategy",
        body: [
          "Pair integrated digital and print campaigns with on-ground brand activations, and use distribution tie-ups to extend reach beyond owned channels.",
        ],
      },
      {
        heading: "05. The Execution",
        body: [
          "Led integrated brand activations at FICCI, the National Film Awards and IFFI 2025: multi-venue booth execution, the official tableau, live performances and Cultural Closing Ceremony communications.",
          "Supported distribution partnerships and co-marketing campaigns with Tata Play and Cloud TV.",
        ],
      },
      {
        heading: "06. Talent / Partners",
        body: [
          "Facilitated Sony Retail India's first third-party activation at IFFI, bringing a major retail partner into the Waves OTT presence on one of Indian cinema's biggest stages.",
        ],
      },
      {
        heading: "07. Experience",
        body: [
          "Multi-venue booth presence, an official tableau, live performances and Cultural Closing Ceremony communications across IFFI, NFA and FICCI Frames 2025.",
        ],
      },
      {
        heading: "08. Results",
        body: [
          "Grew the brand to 50K+ Instagram followers and 100K+ across YouTube & Facebook. Integrated campaigns contributed to 100M+ organic views and improved long-term brand equity.",
        ],
      },
    ],
    partners: ["Tata Play", "Cloud TV", "Sony Retail India"],
  },
  {
    slug: "amazon-prime-video",
    client: "Amazon Prime Video",
    category: "Technology · Partner Marketing",
    tags: ["TECHNOLOGY"],
    year: "2024-2025",
    role: "Senior Brand Solutions Strategist, Schbang",
    employer: "Schbang",
    description:
      "Daily partner marketing operations across 10 Smart TV OEMs, co-marketing for major title launches, and Talent Byte scripting for title and brand promotions.",
    brandfetchDomain: "primevideo.com",
    status: "case-study",
    metrics: [
      { value: "10", label: "Smart TV OEM partnerships managed" },
      { value: "60M+", label: "Users reached via co-marketing launches" },
    ],
    sections: [
      {
        heading: "01. The Brief",
        body: [
          "Run the day-to-day partner marketing operation across 10 Smart TV OEMs, Sony, Samsung, LG, Xiaomi and Google TV, on behalf of Amazon Prime Video.",
        ],
      },
      {
        heading: "02. The Challenge",
        body: [
          "Every major title launch needed coordinated promotion across a fragmented device ecosystem, each OEM with its own platform, placements and promotional assets.",
        ],
      },
      {
        heading: "03. The Idea",
        body: [
          "Standardise a co-marketing playbook that could flex per OEM, so every title launch landed consistently across Sony, Samsung, LG, Xiaomi and Google TV surfaces at the same time.",
        ],
      },
      {
        heading: "04. The Strategy",
        body: [
          "Integrate partner services and promotional assets into each title launch, and pair paid and owned OEM placements with Talent Byte content for the cast.",
        ],
      },
      {
        heading: "05. The Execution",
        body: [
          "Managed daily partner marketing operations across all 10 OEMs, ensuring seamless campaign execution for every title.",
          "Wrote Talent Byte scripts for title and brand promotions; coordinated promotional shoots and briefing sessions with cast and crew.",
        ],
      },
      {
        heading: "06. Talent / Partners",
        body: [
          "Talent Byte campaigns produced for title launches including Teri Baaton Mein Aisa Uljha Jiya (Shahid Kapoor solo cut), Call Me Bae, Madgaon Express, Paatal Lok and Ae Watan Mere Watan. See the Talent library for individual bytes.",
        ],
      },
      {
        heading: "07. Experience",
        body: [
          "Coordinated promotional shoots and briefing sessions across title launches throughout the year.",
        ],
      },
      {
        heading: "08. Results",
        body: [
          "Co-marketing campaigns for high-impact title launches reached 60M+ users across the Smart TV OEM ecosystem.",
        ],
      },
    ],
    talent: [
      "teri-baaton-mein-aisa-uljha-jiya",
      "call-me-bae",
      "madgaon-express",
      "paatal-lok",
      "ae-watan-mere-watan",
    ],
    partners: ["Sony", "Samsung", "LG", "Xiaomi", "Google TV"],
    driveVideoIds: [
      "1D72UJkyCmEU18EmZt-EXephekM6M3eEI",
      "1zp2zzamGuz-MPRJU5P24Gsn9ePvIWd9z",
      "1PN2fd9afNuPKOPtMdx5zWhXm18s-tb1Y",
      "1SDupZrGvGMQRV-wtAxBYErDjrrOnATfP",
      "12LKX5kNXiGKxbmKaRTL6Ms1tQe8Ko_39",
    ],
  },
  {
    slug: "jack-daniels",
    client: "Jack Daniel's",
    category: "Events · Integrated Campaigns",
    tags: ["EVENTS"],
    year: "2026-Present",
    role: "Senior Client Solutions Partner, 22 Feet Tribal Worldwide",
    employer: "22 Feet Tribal Worldwide",
    description:
      "End-to-end social media execution and a 360-degree activation around the Def Leppard concert.",
    brandfetchDomain: "jackdaniels.com",
    status: "case-study",
    sections: [
      {
        heading: "01. The Brief",
        body: [
          "Lead end-to-end social media execution and integrated campaigns across ATL and BTL channels for Jack Daniel's.",
        ],
      },
      {
        heading: "02. The Challenge",
        body: [
          "Translate brand objectives into an integrated marketing strategy that works across digital and offline touchpoints for a global spirits brand.",
        ],
      },
      {
        heading: "03. The Idea",
        body: [
          "Use culture as the connective layer: anchor the brand around a live music moment, the Def Leppard concert, with a full-funnel activation arc.",
        ],
      },
      {
        heading: "04. The Strategy",
        body: [
          "A 360-degree campaign structure: pre-event hype, on-ground activation, and post-event amplification across platforms.",
        ],
      },
      {
        heading: "05. The Execution",
        body: [
          "Spearheaded the 360-degree campaign for the Def Leppard concert, covering pre-event hype, on-ground activation, and post-event amplification across platforms.",
          "Served as primary client point of contact, translating brand objectives into integrated marketing strategies across digital and offline touchpoints.",
        ],
      },
      {
        heading: "06. Talent / Partners",
        body: ["Def Leppard concert partnership."],
      },
      {
        heading: "07. Experience",
        body: ["On-ground activation at the Def Leppard concert."],
      },
      {
        heading: "08. Results",
        body: ["Full campaign results in progress."],
      },
    ],
    instagramEmbeds: [
      "https://www.instagram.com/p/DZhBy3KyiQv/",
      "https://www.instagram.com/p/DZeVqibs1nT/",
      "https://www.instagram.com/p/DZmLeilSjZZ/",
      "https://www.instagram.com/p/DaXCaq-suZ9/",
      "https://www.instagram.com/p/Daw34S4OiW1/",
    ],
  },
  {
    slug: "rupay",
    client: "RuPay",
    category: "Partnerships · Integrated Campaigns",
    tags: ["PARTNERSHIPS"],
    year: "2026-Present",
    role: "Senior Client Solutions Partner, 22 Feet Tribal Worldwide",
    employer: "22 Feet Tribal Worldwide",
    description:
      "End-to-end social media execution and integrated ATL/BTL campaigns for RuPay (NPCI).",
    brandfetchDomain: "rupay.co.in",
    status: "case-study",
    sections: [
      {
        heading: "01. The Brief",
        body: [
          "Lead end-to-end social media execution and integrated campaigns across ATL and BTL channels for RuPay, NPCI's national payments network.",
        ],
      },
      {
        heading: "02. The Challenge",
        body: [
          "Translate brand objectives into an integrated marketing strategy that works across digital and offline touchpoints for a national payments brand.",
        ],
      },
      {
        heading: "05. The Execution",
        body: [
          "Served as primary client point of contact, translating brand objectives into integrated marketing strategies across digital and offline touchpoints.",
        ],
      },
      {
        heading: "08. Results",
        body: ["Full campaign results in progress."],
      },
    ],
    instagramEmbeds: [
      "https://www.instagram.com/p/DaPat1UjvzD/",
      "https://www.instagram.com/p/DZ1aguKIfox/",
      "https://www.instagram.com/p/DaSp0VpskO6/",
    ],
  },
  {
    slug: "wonder-cement",
    client: "Wonder Cement",
    category: "Brand · Performance Campaign",
    tags: ["BRAND"],
    year: "2021-2023",
    role: "Associate Manager, Client Servicing, White Digital Canvas",
    employer: "White Digital Canvas",
    description:
      "A performance-led brand campaign delivering measurable reach and impression scale.",
    brandfetchDomain: "wondercement.com",
    status: "case-study",
    metrics: [
      { value: "5M+", label: "Reach" },
      { value: "7.2M+", label: "Impressions on a single campaign" },
    ],
    sections: [
      {
        heading: "01. The Brief",
        body: ["Deliver a performance campaign for Wonder Cement as primary client liaison."],
      },
      {
        heading: "02. The Challenge",
        body: ["Drive measurable reach and impression scale within a defined campaign window."],
      },
      {
        heading: "08. Results",
        body: ["Achieved 5M+ reach and 7.2M+ impressions on a single campaign."],
      },
    ],
  },
  {
    slug: "lakme",
    client: "Lakmé",
    category: "Brand · E-commerce Storytelling",
    tags: ["BRAND"],
    year: "2024-2025",
    role: "Senior Brand Solutions Strategist, Schbang",
    employer: "Schbang",
    description:
      "Conceptualised and delivered SI and A+ e-commerce listings, boosting product visibility and brand storytelling.",
    brandfetchDomain: "lakmeindia.com",
    status: "placeholder",
  },
  {
    slug: "raj-petro",
    client: "Raj Petro",
    category: "Brand · Campaign",
    tags: ["BRAND"],
    year: "2021-2023",
    role: "Associate Manager, Client Servicing, White Digital Canvas",
    employer: "White Digital Canvas",
    description: "A high-impact brand campaign delivered as primary client liaison.",
    status: "placeholder",
    instagramEmbeds: ["https://www.instagram.com/reel/Cj2Gx-mIrut/"],
  },
  {
    slug: "zoomol",
    client: "Zoomol Lubricants",
    category: "Brand · Product Launch",
    tags: ["BRAND"],
    year: "2021-2023",
    role: "Associate Manager, Client Servicing, White Digital Canvas",
    employer: "White Digital Canvas",
    description: "Spearheaded a new SKU product launch.",
    status: "placeholder",
  },
  {
    slug: "symphony",
    client: "Symphony",
    category: "Brand · Client Servicing",
    tags: ["BRAND"],
    year: "2021-2023",
    role: "Associate Manager, Client Servicing, White Digital Canvas",
    employer: "White Digital Canvas",
    description: "Primary client liaison across campaign planning, budgeting and execution.",
    brandfetchDomain: "symphonylimited.com",
    status: "placeholder",
  },
  {
    slug: "taj-sats",
    client: "Taj SATS",
    category: "Brand · Client Servicing",
    tags: ["BRAND"],
    year: "2021-2023",
    role: "Associate Manager, Client Servicing, White Digital Canvas",
    employer: "White Digital Canvas",
    description: "Case study in development.",
    brandfetchDomain: "tajsats.com",
    status: "placeholder",
  },
  {
    slug: "sanathan-textiles",
    client: "Sanathan Textiles",
    category: "Brand · Client Servicing",
    tags: ["BRAND"],
    year: "2024-2025",
    role: "Senior Brand Solutions Strategist, Schbang",
    employer: "Schbang",
    description: "Case study in development.",
    brandfetchDomain: "sanathan.com",
    status: "placeholder",
    instagramEmbeds: [
      "https://www.instagram.com/p/DJJMptnuoxg/",
      "https://www.instagram.com/p/DI3Gp4uyHaT/",
    ],
  },
  {
    slug: "taco-bell",
    client: "Taco Bell",
    category: "Brand · Client Servicing",
    tags: ["BRAND"],
    year: "2025-2026",
    role: "Creative Operations Partner, Creativeland Asia",
    employer: "Creativeland Asia",
    description: "Case study in development.",
    brandfetchDomain: "tacobell.com",
    status: "placeholder",
  },
  {
    slug: "kotak",
    client: "Kotak",
    category: "Brand · Client Servicing",
    tags: ["BRAND"],
    year: "2025-2026",
    role: "Creative Operations Partner, Creativeland Asia",
    employer: "Creativeland Asia",
    description: "Case study in development.",
    brandfetchDomain: "kotak.com",
    status: "placeholder",
  },
  {
    slug: "the-black-shepherd",
    client: "The Black Shepherd",
    category: "Brand · Creative",
    tags: ["BRAND"],
    year: "2026",
    role: "Independent",
    employer: "Independent",
    description: "Case study in development.",
    status: "placeholder",
  },
  {
    slug: "jb-marble",
    client: "JB Marble: The Art of Taste",
    category: "Brand · Creative",
    tags: ["BRAND"],
    year: "2026",
    role: "Independent",
    employer: "Independent",
    description: "Case study in development.",
    status: "placeholder",
  },
  {
    slug: "honest-farms",
    client: "Honest Farms",
    category: "Social · Growth Strategy",
    tags: ["SOCIAL"],
    year: "2025-2026",
    role: "Independent",
    employer: "Independent (with Metiis × One Pot Media)",
    description: "Growth strategy. Case study in development.",
    status: "placeholder",
  },
];

export const filterTags: FilterTag[] = [
  "BRAND",
  "ENTERTAINMENT",
  "TALENT",
  "EXPERIENCE",
  "TECHNOLOGY",
  "SOCIAL",
  "PARTNERSHIPS",
  "EVENTS",
];
