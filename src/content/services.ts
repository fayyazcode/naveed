export type HeroKind =
  | "publishing"
  | "marketing"
  | "editing"
  | "audio"
  | "children-marketing"
  | "children-editing"
  | "illustration"
  | "amazon"
  | "writing"
  | "about"
  | "contact"
  | "blogs"
  | "services";
export const servicePages = [
  {
    slug: "book-publishing",
    name: "Book Publishing",
    kind: "publishing",
    eyebrow: "YOUR WORDS. OUT IN THE WORLD.",
    title: "From finished draft",
    accent: "to first edition.",
    intro:
      "You’ve done the writing. Let’s give it the finish, format and thoughtful release it deserves — in print, in pixels, and in the hands of readers.",
    heading: "A beautiful book is only the beginning.",
    body: "Publishing brings a hundred small decisions together. We help you make them with confidence, from choosing a format to preparing accurate files and retailer listings. Your publishing accounts and rights stay yours.",
    features: [
      [
        "Print & ebook preparation",
        "Interior formatting, front matter and file checks tailored to your chosen formats.",
      ],
      [
        "Retailer setup",
        "Support with book descriptions, categories, keywords and upload requirements.",
      ],
      [
        "Distribution planning",
        "Choose the right combination of Amazon KDP, Apple Books, Kobo and print distribution.",
      ],
      [
        "Release coordination",
        "A shared checklist for proofs, approvals, publication and the next steps after launch.",
      ],
    ],
    steps: [
      "Review your manuscript",
      "Prepare the edition",
      "Approve the proof",
      "Release with confidence",
    ],
    faq: [
      "Can I publish in both print and ebook formats?",
      "Yes. We can prepare separate files for your selected print and digital editions. Availability and production requirements depend on the platforms you choose.",
    ],
  },
  {
    slug: "book-marketing",
    name: "Book Marketing",
    kind: "marketing",
    eyebrow: "GOOD BOOKS DESERVE TO BE FOUND.",
    title: "A story worth sharing.",
    accent: "Readers worth finding.",
    intro:
      "Connect your book with the people it was written for. Thoughtful positioning, a clear launch plan, and campaigns built around your story.",
    heading: "Give your book a considered introduction.",
    body: "Marketing starts with understanding the reader, not chasing every channel. We help define your book’s promise and build a practical plan around your goals, budget and stage of publication.",
    features: [
      [
        "Reader positioning",
        "Define your audience, comparable titles and the reasons your book belongs on their shelf.",
      ],
      [
        "Launch planning",
        "Coordinate the moments before, during and after publication with a workable schedule.",
      ],
      [
        "Discoverability",
        "Refine descriptions, categories and keywords so your book is easier to understand and find.",
      ],
      [
        "Campaign creative",
        "Develop a consistent message across author content, email and advertising materials.",
      ],
    ],
    steps: ["Understand your readers", "Shape your message", "Build the launch", "Review & refine"],
    faq: [
      "Can you guarantee sales or bestseller status?",
      "No. Sales depend on many factors beyond a campaign. We focus on clear positioning, thoughtful execution and reviewing the evidence rather than promising rankings or revenue.",
    ],
  },
  {
    slug: "book-editing",
    name: "Book Editing",
    kind: "editing",
    eyebrow: "EVERY WORD, WITH PURPOSE.",
    title: "Your voice.",
    accent: "A sharper story.",
    intro:
      "An expert edit makes your writing stronger without making it someone else’s. Let’s find the clarity, rhythm and confidence already inside your manuscript.",
    heading: "A fresh perspective. The same unmistakable you.",
    body: "Some drafts need a structural rethink. Others need a careful polish. We start by understanding what your manuscript needs and agree on the right depth of editing before we touch a sentence.",
    features: [
      [
        "Developmental editing",
        "Structure, pacing, character development and the bigger questions behind the book.",
      ],
      ["Line editing", "Strengthen rhythm, voice and meaning at the paragraph and sentence level."],
      ["Copyediting", "A consistent approach to grammar, usage, spelling and style."],
      [
        "Proofreading",
        "A final review of the prepared text for remaining typographical and presentation errors.",
      ],
    ],
    steps: [
      "Assess the draft",
      "Agree the edit",
      "Collaborate on revisions",
      "Polish the final pages",
    ],
    faq: [
      "Do I need every type of editing?",
      "Not necessarily. We recommend the level that suits the manuscript. Proofreading is a final check and does not replace developmental or line editing.",
    ],
  },
  {
    slug: "audio-book",
    name: "Audio Book",
    kind: "audio",
    eyebrow: "STORIES THAT STAY WITH YOU.",
    title: "Beyond the page.",
    accent: "Into their world.",
    intro:
      "A new way to experience your words. Bring your book to life with narration guidance, careful production planning and a voice that feels right.",
    heading: "Let your readers become listeners.",
    body: "An audiobook has its own rhythm. We help you consider what works aloud, develop a narrator brief and coordinate the production decisions that turn a manuscript into a listening experience.",
    features: [
      [
        "Audio-ready manuscript",
        "Prepare pronunciations, dialogue cues and text adaptations for spoken delivery.",
      ],
      [
        "Narrator direction",
        "Define the tone, pace and character your story needs before choosing a voice.",
      ],
      ["Production coordination", "Plan recording milestones, review points and corrections."],
      [
        "Release preparation",
        "Organize audio files and metadata around your selected distributor’s requirements.",
      ],
    ],
    steps: [
      "Listen to the story",
      "Find the right voice",
      "Record & review",
      "Prepare for release",
    ],
    faq: [
      "Can I narrate my own book?",
      "Yes. Author narration can be a good fit, especially for memoir. We can discuss preparation, recording needs and whether a professional narrator better serves your project.",
    ],
  },
  {
    slug: "childrens-book-marketing",
    name: "Children’s Book Marketing",
    kind: "children-marketing",
    eyebrow: "LITTLE READERS. BIG POSSIBILITIES.",
    title: "Find the grown-ups.",
    accent: "Inspire the little ones.",
    intro:
      "A children’s book has two audiences: the child who falls in love with it and the adult who helps them discover it. Let’s speak thoughtfully to both.",
    heading: "Make room for wonder on more bookshelves.",
    body: "Age range, reading context and the adults around a child all shape how a book is discovered. We help build a message that respects those differences, from read-aloud picture books to independent readers.",
    features: [
      [
        "Age-aware positioning",
        "Clarify the reading age, themes and the experience your book offers.",
      ],
      [
        "Parent-facing messaging",
        "Explain the story’s appeal with clear, helpful descriptions and creative.",
      ],
      [
        "Educator outreach planning",
        "Develop suitable materials for school, library and reading-community outreach.",
      ],
      [
        "Launch content",
        "Plan read-aloud ideas, illustrator features and shareable glimpses inside the book.",
      ],
    ],
    steps: [
      "Define your reading age",
      "Find the adult audience",
      "Create a playful launch",
      "Learn from the response",
    ],
    faq: [
      "Do you guarantee school or library placement?",
      "No. Selection decisions belong to individual schools, libraries and retailers. We can help prepare appropriate outreach and positioning materials.",
    ],
  },
  {
    slug: "childrens-book-editing",
    name: "Children’s Book Editing",
    kind: "children-editing",
    eyebrow: "SMALL WORDS. LASTING WORLDS.",
    title: "A little more wonder.",
    accent: "On every page.",
    intro:
      "Make every word earn its place. Editing for age-appropriate language, read-aloud rhythm and the magical relationship between words and pictures.",
    heading: "Thoughtful editing for curious minds.",
    body: "Writing for children asks a lot of a few words. We look at the child’s experience, the narrative arc and how illustrations carry part of the story — while keeping your distinctive warmth and imagination.",
    features: [
      [
        "Age & reading level",
        "Review vocabulary, sentence complexity and concepts for your intended readers.",
      ],
      ["Read-aloud rhythm", "Refine repetition, pacing and the sound of the story when spoken."],
      [
        "Page-turn moments",
        "Consider suspense, surprise and how the story unfolds across spreads.",
      ],
      [
        "Words & pictures",
        "Identify opportunities for illustration to tell the story without unnecessary explanation.",
      ],
    ],
    steps: [
      "Meet your young reader",
      "Explore the story arc",
      "Refine the read-aloud",
      "Review page by page",
    ],
    faq: [
      "Can you help with a rhyming picture book?",
      "Yes. We can review meter, rhyme and narrative clarity. Sometimes a prose version better serves the story; we discuss options rather than forcing the text into rhyme.",
    ],
  },
  {
    slug: "book-illustration",
    name: "Book Illustration",
    kind: "illustration",
    eyebrow: "IMAGINATION, MADE VISIBLE.",
    title: "Worlds you can see.",
    accent: "Stories you can feel.",
    intro:
      "From the first character sketch to the final full-color spread. Original visual direction that gives your story a world of its own.",
    heading: "Art that tells its part of the story.",
    body: "Great illustration does more than decorate. We build a visual language around your manuscript, exploring mood, character and composition before developing the finished artwork.",
    features: [
      [
        "Visual development",
        "Mood, palette and references shaped into a coherent creative direction.",
      ],
      [
        "Character studies",
        "Explore expressions, silhouettes and details before the characters meet the page.",
      ],
      [
        "Interior illustration",
        "Spot art, chapter openers and full spreads planned around your book’s format.",
      ],
      [
        "Cover artwork",
        "A distinctive visual introduction developed with layout and readability in mind.",
      ],
    ],
    steps: [
      "Explore the visual world",
      "Meet the characters",
      "Sketch the sequence",
      "Bring it into color",
    ],
    faq: [
      "Will I see sketches before final artwork?",
      "Yes. We agree on review stages for visual direction and sketches before final rendering. Revision rounds, deliverables and usage rights are set out in the project scope.",
    ],
  },
  {
    slug: "amazon-publishing-services",
    name: "Amazon Publishing Services",
    kind: "amazon",
    eyebrow: "YOUR BOOK. YOUR KDP ACCOUNT.",
    title: "Make your next move",
    accent: "a confident one.",
    intro:
      "Navigate Amazon KDP with practical support for formatting, listing setup and publication. You stay in control of your account and your book.",
    heading: "The details behind a better book listing.",
    body: "From file specifications to categories, KDP can feel like another manuscript to learn. We guide you through the process and help prepare a listing that accurately represents your work.",
    features: [
      [
        "KDP preparation",
        "Understand account prerequisites, format choices and the files you’ll need.",
      ],
      ["File & proof review", "Prepare print and ebook layouts and review proofs before approval."],
      ["Listing metadata", "Develop descriptions, category choices and relevant keyword ideas."],
      [
        "Publication support",
        "Work through pricing, territories and the publishing checklist in your own account.",
      ],
    ],
    steps: [
      "Map your KDP needs",
      "Prepare files & metadata",
      "Review your proof",
      "Publish in your account",
    ],
    faq: [
      "Are you affiliated with Amazon?",
      "No. StoryPrint Agency is an independent service provider. Amazon KDP makes its own approval, eligibility and distribution decisions; we cannot guarantee rankings or acceptance.",
    ],
  },
  {
    slug: "book-writing-services",
    name: "Book Writing Services",
    kind: "writing",
    eyebrow: "THERE’S A BOOK IN THERE.",
    title: "Your ideas.",
    accent: "Finally on the page.",
    intro:
      "Voice notes, scattered pages, a story you keep coming back to. We help you turn them into a manuscript that sounds and feels like you.",
    heading: "A writing partner, from the first question.",
    body: "Your voice is the starting point. Through thoughtful conversations, research and collaborative drafting, we help shape your experience or imagination into a coherent book — with you guiding every important decision.",
    features: [
      [
        "Discovery & interviews",
        "Uncover the material, perspective and voice that make the story yours.",
      ],
      [
        "Research & outlining",
        "Build a chapter blueprint with a clear purpose and narrative direction.",
      ],
      [
        "Collaborative ghostwriting",
        "Develop the manuscript in agreed stages with time for your feedback.",
      ],
      [
        "Revision & handover",
        "Refine the draft and provide the agreed manuscript files with your ownership protected.",
      ],
    ],
    steps: ["Find the heart of it", "Build the blueprint", "Write together", "Make it yours"],
    faq: [
      "Will the book sound like me?",
      "That is the goal. We use interviews, writing samples and your feedback to develop the voice, then review sample material together before the full draft progresses.",
    ],
  },
] satisfies Array<{
  slug: string;
  name: string;
  kind: HeroKind;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  heading: string;
  body: string;
  features: string[][];
  steps: string[];
  faq: string[];
}>;
export type ServicePageData = (typeof servicePages)[number];
