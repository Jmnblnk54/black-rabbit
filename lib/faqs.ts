export type Faq = { q: string; a: string };

export const weddingFaqs: Faq[] = [
  {
    q: "Do you cover weddings outside of Tampa?",
    a: "Yes — across Florida, and as a destination videographer beyond. If you're getting married somewhere you love, send a note and let's talk through logistics.",
  },
  {
    q: "What's the typical wedding film length?",
    a: "Highlights films are 3–5 minutes. Full feature edits run 15–25 minutes. The Heirloom package adds a same-day teaser and the raw ceremony footage on top.",
  },
  {
    q: "When will I receive my final film?",
    a: "Most weddings deliver in 6–10 weeks. The Heirloom package includes a same-day teaser so you can share something the morning after.",
  },
  {
    q: "Do you have a backup plan if equipment fails?",
    a: "Dual-card recording, backup audio, redundant on-site storage. Every shoot runs with a backup camera body and insured gear.",
  },
  {
    q: "Do you carry liability insurance?",
    a: "Yes — $1M general liability. Certificates of insurance are available for venues on request.",
  },
  {
    q: "Can we customize a package?",
    a: "Absolutely. The packages above are starting points. Send a note via the inquiry form and I'll build something specific to your day.",
  },
];

export const tampaFaqs: Faq[] = [
  {
    q: "Why hire a wedding videographer in Tampa specifically?",
    a: "Local knowledge of venues, light, and vendor relationships shows up in the final film. I know how the late-afternoon sun hits Armature Works, what to expect at Oxford Exchange, and which Tampa coordinators run a tight day.",
  },
  {
    q: "What Tampa venues have you filmed at?",
    a: "Armature Works, Oxford Exchange, and Clearwater Beach are recent favorites — case studies for each are on the films page. Open to any Tampa Bay venue.",
  },
  ...weddingFaqs,
];
