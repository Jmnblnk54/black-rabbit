export type Vertical = "weddings" | "brand" | "events";

export type CaseStudy = {
  slug: string;
  vertical: Vertical;
  title: string;
  client: string;
  location: string;
  date: string;
  summary: string;
  story: string;
  quote?: { text: string; attribution: string };
  stillsCount: number;
  credits: string;
};

const CREDIT =
  "Filmed and edited by Julia Blank · Black Rabbit Creative";

export const caseStudies: CaseStudy[] = [
  {
    slug: "armature-works-tampa",
    vertical: "weddings",
    title: "An industrial-chic wedding at Armature Works",
    client: "Maya & Jordan",
    location: "Armature Works · Tampa Heights, FL",
    date: "March 2025",
    summary:
      "Brick, brass, and golden hour light — a Tampa Heights wedding built around the texture of the room.",
    story:
      "Armature Works is a building that does half the work for you. The brick has weight, the windows let in that soft late-afternoon light, and there's a rhythm to the space that feels like a film set before anyone shows up. Maya and Jordan leaned into all of it — string lights, brass details, a first dance under the trusses. We shot a four-camera ceremony, kept one cinema body on Maya's parents the entire time, and let the band carry the second half of the night. The cut prioritized the small stuff: a thumb across a wrist, a held breath before the doors opened, Jordan's grandfather quietly humming along to the recessional. The final film is six minutes that feel like the room felt.",
    quote: {
      text: "We watched it the morning after the wedding and immediately watched it again. It's the day we remembered, not a stranger's version of it.",
      attribution: "Maya & Jordan",
    },
    stillsCount: 3,
    credits: CREDIT,
  },
  {
    slug: "clearwater-beach-sunset",
    vertical: "weddings",
    title: "A beach-front ceremony at last light",
    client: "Priya & Daniel",
    location: "Clearwater Beach, FL",
    date: "October 2024",
    summary:
      "A destination beach wedding timed to the last forty minutes of Gulf-coast light.",
    story:
      "We had a forty-minute window between the ceremony and the sun disappearing into the Gulf, and the whole day was built around it. Priya and Daniel kept the guest list small — fifty people, two long tables on the sand, a string quartet that didn't need amplification. The wind was constant, which meant lavalier mics on both of them and a hand-held shotgun on the officiant. The first dance happened with the water about thirty feet behind them. The cut runs four and a half minutes and tries to do justice to what the light was doing — gold, then peach, then that strange blue you only get on Florida beaches when the sun has fully set but the sky hasn't given up.",
    quote: {
      text: "Julia caught the part of the day we couldn't see ourselves — our families watching us, mostly. It's the film we send people when they ask about the wedding.",
      attribution: "Priya & Daniel",
    },
    stillsCount: 3,
    credits: CREDIT,
  },
  {
    slug: "oxford-exchange",
    vertical: "weddings",
    title: "An intimate ceremony at Oxford Exchange",
    client: "Elena & Marcus",
    location: "Oxford Exchange · Tampa, FL",
    date: "January 2025",
    summary:
      "Forty guests, marble and library light, and a ceremony that felt like a private dinner.",
    story:
      "Oxford Exchange is one of those Tampa rooms that doesn't really need decorating — marble floors, a glass conservatory ceiling, bookshelves that turn into a backdrop the second you point a camera at them. Elena and Marcus wanted a wedding that felt closer to a long, slow dinner than a production, and we kept the footprint quiet: two operators, no slider, no monitor cart, available light wherever the light was good enough. The vows happened in the conservatory under flat winter sun, which is the most flattering light in Florida if you know how to find it. The reception was eight courses, fourteen toasts, and a first dance that looped twice because the band kept playing. The final film runs five minutes and barely cuts during the toasts — that was the brief, and the brief was right.",
    stillsCount: 3,
    credits: CREDIT,
  },
  {
    slug: "throttled-in-bond",
    vertical: "brand",
    title: "A brand story film for a Tampa craft distillery",
    client: "Throttled In Bond",
    location: "Tampa, FL",
    date: "February 2025",
    summary:
      "Ninety seconds on the hands, copper, and patience behind a small-batch distillery.",
    story:
      "Throttled In Bond doesn't want to be every craft distillery — they want to be the one your bartender brings up unprompted. The brief was a ninety-second flagship film that put the work first: hands, copper, a quiet warehouse on a Sunday morning, the founder's father walking through the rickhouse without saying anything. We pre-produced with a single page of intent and three reference frames. The shoot day was seven hours, one location, two cameras, no on-screen text until the final card. The cut leans on natural sound — the hum of the still, the clink of glass, a single line of voice-over from the founder near the end. The film is now the first thing on their homepage and the asset their distributors lead with at trade meetings.",
    quote: {
      text: "Julia made the film we'd been trying to describe for two years. The whole company watched it on a Tuesday and the room got quiet.",
      attribution: "Founder, Throttled In Bond",
    },
    stillsCount: 3,
    credits: CREDIT,
  },
  {
    slug: "clark-custom-therapy",
    vertical: "brand",
    title: "Modeling films and brand content for a wellness practice",
    client: "Clark Custom Therapy, LLC",
    location: "Tampa, FL",
    date: "December 2024",
    summary:
      "A two-day content sprint — modeling films, website video, and assets clean enough for a Jumbotron.",
    story:
      "Clark Custom Therapy needed content that would carry their brand across a website, printed flyers, and — eventually — a Jumbotron at a live event. That last constraint changed everything: every frame had to hold up at twenty feet wide. We scoped two days, three locations, two on-camera talents, and a moodboard that leaned editorial more than clinical. The deliverables were a primary brand film, four modeling-style cutdowns, a thirty-second hero loop for the homepage, and a library of vertical stings for social. Color and exposure discipline were the whole game — anything noisy would fail on a big screen. The Jumbotron play happened a month after delivery and the footage held.",
    quote: {
      text: "Clean, high-quality edits with a polished, professional finish that truly elevated our brand. From modeling videos that matched our style to content we'll use for future campaigns, the entire experience was top-tier and exactly what we needed.",
      attribution: "Clark Custom Therapy, LLC",
    },
    stillsCount: 3,
    credits: CREDIT,
  },
  {
    slug: "wodapalooza-2025",
    vertical: "events",
    title: "Behind the scenes at Wodapalooza 2025",
    client: "Wodapalooza",
    location: "Miami, FL",
    date: "January 2025",
    summary:
      "Three days of one of the largest CrossFit events in the world, cut for hype and brand.",
    story:
      "Wodapalooza is one of the biggest events on the CrossFit calendar, and the brief was to capture the parts of it that the broadcast cameras don't — the warm-up tents, the coaches' faces between heats, the parents at the rail, the moment athletes find their families after a podium. Three operators, three days, one edit suite running on-site. We pushed a daily recap film at midnight, a sponsor-ready highlight reel by Monday, and a long-form recap a week later. The athletic side of the footage matters, but the brand side mattered more — Wodapalooza wanted to look like the place you'd fly across the country to compete at. The recap played in their athlete email and on the big screens at the next stop on the tour.",
    stillsCount: 3,
    credits: CREDIT,
  },
];

export function caseStudiesByVertical(v: Vertical) {
  return caseStudies.filter((c) => c.vertical === v);
}

export function findCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
