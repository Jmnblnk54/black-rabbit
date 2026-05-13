export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  tag: string;
  body: string[];
};

export const posts: JournalPost[] = [
  {
    slug: "5-questions-to-ask-your-wedding-videographer",
    title:
      "5 questions to ask your wedding videographer (that actually matter)",
    excerpt:
      "Most couples ask about packages first. Ask these instead — the answers tell you what your film will feel like.",
    date: "2025-04-08",
    readMinutes: 6,
    tag: "Wedding planning",
    body: [
      "There's a list of questions that circulates on wedding-planning blogs every season — how many hours of coverage, how many cameras, when does the deposit refund. They're fine. They're not the questions that decide whether your film is something you'll watch again in five years.",
      "Here are the five I'd ask instead, in the order I'd ask them.",
      "1. What does your audio workflow look like? Audio is the difference between a film you finish and one you never make it through. Ask whether the videographer dual-records, whether they put a lavalier on both partners and the officiant, and whether they have backup audio for the toasts. If the answer is vague, the toasts will be vague.",
      "2. Can I see a full ceremony cut, not a highlights reel? Highlights are designed to look good on Instagram. A full ceremony cut tells you whether the videographer can hold a single moment without cutting away every two seconds. If they won't share one, ask why.",
      "3. How do you handle low light? Florida weddings drift into dim reception lighting fast. Cameras that are forgiving at ISO 12800 are doing a different job than cameras that aren't. The honest answer is gear-specific and a videographer should be able to give it without flinching.",
      "4. What happens if something fails? Backup body, backup audio, redundant storage. The videographer who's thought about this answers immediately. The one who hasn't tells you it won't happen.",
      "5. Who actually edits the film? On a one-person studio this is a non-question. On larger studios it can be a different person from the one you met. Both can produce great work — you just want to know which it is.",
      "Most of these aren't about gear. They're about whether the person you hire has thought hard about the day in advance.",
    ],
  },
  {
    slug: "behind-the-lens-at-armature-works",
    title:
      "Behind the lens at Armature Works: why this Tampa venue is a videographer's dream",
    excerpt:
      "A walkthrough of the rooms, the light windows, and the camera angles that make Armature Works one of the best wedding venues to shoot in Tampa.",
    date: "2025-03-12",
    readMinutes: 5,
    tag: "Venue spotlight",
    body: [
      "Armature Works does something rare among wedding venues: it photographs and films the way it feels in person. The brick reads warm without going orange. The trusses give you scale without forcing you wide. The windows do something honest with afternoon light. As a videographer, you spend less of the day fighting the room and more of it covering people.",
      "A few specifics, in case you're touring it.",
      "The Gathering. Most ceremonies at Armature Works happen here. It's tall, which means you can run a wide camera in the back without it feeling intrusive, and you can put a second body on a long lens at the side aisle without crowding anyone. The light through the south-facing windows around 4:30 PM is the best light in the building.",
      "Heights Public Market. This is the cocktail-hour room, full of food stalls and ambient texture. It's busy, but the noise floor is forgiving — the espresso machines and the crowd actually mask the cameras, which means guests forget about them faster.",
      "The Hall. The reception space is column-free, which sounds boring until you've shot a reception in a room with columns. You can place a slider once and use it the whole night. The first-dance lighting rigs the venue brings in are designed for the ceiling height, and the resulting footage has actual contrast.",
      "Pre-ceremony portraits. The mezzanine and the loading-dock alley do a lot of work here. Both have the same brick palette as the rest of the building, which keeps a film visually consistent — you cut from a portrait to the ceremony and the rooms feel related.",
      "If you're booking a wedding at Armature Works and asking videographers about the venue, the right answer should include the word 'trusses' in the first thirty seconds. If it doesn't, they haven't been there enough.",
    ],
  },
  {
    slug: "dual-recording-audio-non-negotiable",
    title:
      "Why dual-recording audio is non-negotiable for your wedding film",
    excerpt:
      "Audio is the one thing you can't reshoot. Here's why every wedding shoot should be running two audio paths in parallel — and what happens when they aren't.",
    date: "2025-02-04",
    readMinutes: 4,
    tag: "Craft & process",
    body: [
      "Every wedding film has a moment where the audio carries the cut. The vows. The first toast. The grandfather saying the thing he didn't plan to say. When that audio fails, you don't get to ask everyone to do it again.",
      "Dual-recording is the answer, and it's not optional on a wedding shoot.",
      "Here's what 'dual' means in practice. Each subject — both partners, the officiant — has a lavalier mic feeding a small wireless transmitter clipped under their jacket or against their dress strap. That signal goes to two separate receivers: one on the primary camera, one on a recorder hidden nearby. If a camera battery dies, the recorder keeps going. If the recorder's card fills, the camera keeps going. Either path on its own would be a single point of failure. Together they're not.",
      "The second piece is a shotgun mic on a separate camera — usually the wide one covering the ceremony from the back of the aisle. It's not as clean as the lavaliers, but if a wireless signal drops out for forty seconds during the vows, the shotgun is your insurance.",
      "I won't pretend wireless audio doesn't fail. It does. RF interference in old buildings, sweaty transmitters in Florida humidity, batteries that should have been swapped at the hour mark. The point of the workflow isn't to prevent failure — it's to make sure failure of any single piece never reaches the final cut.",
      "When a videographer says 'we have backup audio' the right follow-up is 'walk me through the signal chain.' If they can, you're fine. If they can't, you're trusting one microphone and one set of batteries with the part of your day you most want to remember.",
    ],
  },
];

export function findPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
