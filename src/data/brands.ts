export type TickerBrand = {
  name: string;
  domain?: string;
  localLogo?: string;
};

export const tickerBrands: TickerBrand[] = [
  { name: "Rolling Stone India" },
  { name: "Amazon Prime Video", domain: "primevideo.com", localLogo: "/logos/amazon-prime-video.svg" },
  { name: "Waves OTT" },
  { name: "Jack Daniel's", domain: "jackdaniels.com", localLogo: "/logos/jack-daniels.png" },
  { name: "RuPay", domain: "rupay.co.in", localLogo: "/logos/rupay.svg" },
  { name: "Lakmé", domain: "lakmeindia.com", localLogo: "/logos/lakme.svg" },
  { name: "Sony", domain: "sony.co.in" },
  { name: "Tata Play", domain: "tataplay.com" },
  { name: "Xiaomi", domain: "mi.com" },
  { name: "Google TV", domain: "google.com" },
  { name: "Wonder Cement", domain: "wondercement.com" },
  { name: "Raj Petro", domain: "rajgrp.com" },
  { name: "Zoomol" },
  { name: "Symphony", domain: "symphonylimited.com" },
  { name: "Taj SATS", domain: "tajsats.com" },
  { name: "Sanathan Textiles", domain: "sanathan.com" },
  { name: "Taco Bell", domain: "tacobell.com", localLogo: "/logos/taco-bell.svg" },
  { name: "Kotak", domain: "kotak.com", localLogo: "/logos/kotak.svg" },
];

export const freelanceBrands: TickerBrand[] = [
  { name: "The Black Shepherd" },
  { name: "JB Marble" },
  { name: "Honest Farms" },
];
