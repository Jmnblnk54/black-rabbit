export type Pkg = {
  name: string;
  tagline: string;
  price: string;
  includes: string[];
  featured?: boolean;
};

export const weddingPackages: Pkg[] = [
  {
    name: "Engagement Film",
    tagline: "A 60–90 second love-story short to launch your story.",
    price: "starting at $1,500",
    includes: [
      "Half-day session, one location",
      "60–90 second cinematic edit",
      "Licensed music + color grade",
      "Vertical social cutdown",
      "4K final delivery",
    ],
  },
  {
    name: "The Story",
    tagline: "Ceremony + reception highlights, told in 3–5 minutes.",
    price: "starting at $2,800",
    includes: [
      "6 hours of wedding-day coverage",
      "3–5 minute highlights film",
      "Two social cutdowns (vertical)",
      "Dual-recorded ceremony audio",
      "Online private gallery",
    ],
    featured: true,
  },
  {
    name: "The Feature",
    tagline:
      "A full 15–25 minute documentary cut, plus the highlights film.",
    price: "starting at $4,500",
    includes: [
      "8 hours of coverage",
      "15–25 minute documentary edit",
      "Highlights film + social cutdowns",
      "Aerial / drone coverage",
      "Toasts + vows in full",
    ],
  },
  {
    name: "The Heirloom",
    tagline:
      "The complete, multi-camera record of your day — with a same-day teaser.",
    price: "starting at $7,200",
    includes: [
      "10 hours of full-day coverage",
      "Multi-camera setup",
      "Raw ceremony footage included",
      "Aerial / drone coverage",
      "Same-day teaser delivered",
      "Documentary + highlights + social cuts",
    ],
  },
];

export const brandPackages: Pkg[] = [
  {
    name: "Content Session",
    tagline:
      "One day on set, eight to twelve short-form pieces ready to ship.",
    price: "starting at $1,800 / day",
    includes: [
      "One-day branded content shoot",
      "8–12 short-form deliverables",
      "Hooks built for vertical platforms",
      "Color + sound design",
      "Cloud delivery within 14 days",
    ],
  },
  {
    name: "Brand Story Film",
    tagline:
      "Your flagship 60–90 second brand film — concept to color.",
    price: "starting at $3,500",
    includes: [
      "Pre-production + creative direction",
      "One shoot day, multi-cam",
      "60–90 second flagship film",
      "Vertical and square cutdowns",
      "Two rounds of revisions",
    ],
    featured: true,
  },
  {
    name: "Monthly Retainer",
    tagline:
      "A standing relationship — fresh content every month, on rhythm.",
    price: "starting at $2,500 / month",
    includes: [
      "One shoot day per month",
      "Ongoing edit support",
      "Content calendar collaboration",
      "Priority turnaround",
      "Three-month minimum",
    ],
  },
];

export const eventPackages: Pkg[] = [
  {
    name: "Half-Day Coverage",
    tagline: "Up to four hours of coverage and a clean recap.",
    price: "starting at $1,500",
    includes: [
      "Up to 4 hours on site",
      "Highlight reel (60–90 sec)",
      "Two social cutdowns",
      "Delivery within 3 weeks",
    ],
  },
  {
    name: "Full-Day Coverage",
    tagline: "Eight hours, a highlight, a recap, and social cuts.",
    price: "starting at $2,800",
    includes: [
      "Up to 8 hours on site",
      "Highlight reel + recap film",
      "Social cutdowns for vertical platforms",
      "Sponsor / partner inserts",
      "Delivery within 4 weeks",
    ],
    featured: true,
  },
  {
    name: "Multi-Day / Large Event",
    tagline:
      "Festivals, tournaments, conferences — scoped to your scale.",
    price: "Custom quote",
    includes: [
      "Multi-camera production",
      "Daily recaps + headline film",
      "Sponsor activations covered",
      "Press-ready stills available",
      "On-site edit suite available",
    ],
  },
];
