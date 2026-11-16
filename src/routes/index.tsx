import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  PenLine,
  MoveUpRight,
  Sparkles,
  Menu,
  X,
  Plus,
  Check,
  Globe2,
  AudioLines,
  Palette,
  Megaphone,
  ShieldCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BookScene from "@/components/BookScene";
import heroPhoto from "@/assets/hero-books.jpg";
import writingPhoto from "@/assets/ghostwriting.jpg";
import publishingPhoto from "@/assets/publishing.jpg";
import coverOne from "@/assets/cover-1.jpg";
import coverTwo from "@/assets/cover-2.jpg";
import coverThree from "@/assets/cover-3.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "StoryPrint Agency — Your story deserves to be a book." },
      {
        name: "description",
        content:
          "A creative home for your next chapter. Discover thoughtful ghostwriting, editing, book design, publishing and marketing with StoryPrint Agency.",
      },
    ],
  }),
});
const services = [
  {
    title: "Ghostwriting",
    tag: "FROM A SPARK TO A STORY",
    icon: PenLine,
    text: "An idea, a few notes, a lifetime of experiences. We bring them together in a manuscript that sounds unmistakably like you.",
    details:
      "Interviews & research · Chapter outlines · Fiction, memoir & nonfiction · Collaborative drafts",
  },
  {
    title: "Editing & proofreading",
    tag: "MAKE EVERY WORD MATTER",
    icon: BookOpen,
    text: "A fresh pair of expert eyes. We shape your narrative, strengthen your voice, and give every sentence a reason to stay.",
    details: "Developmental editing · Line editing · Copyediting · Final proofreading",
  },
  {
    title: "Design & illustration",
    tag: "LOVE AT FIRST PAGE",
    icon: Palette,
    text: "Covers that spark curiosity. Interiors that invite you in. Beautiful, considered design from the outside to the very last page.",
    details: "Cover design · Interior layout · Children’s illustration · Print & ebook formatting",
  },
  {
    title: "Publishing & distribution",
    tag: "FROM YOUR DESK TO THE WORLD",
    icon: Globe2,
    text: "Navigate the publishing journey with a team beside you, from preparing your files to reaching readers across major retailers.",
    details: "Amazon KDP · Apple Books · Kobo · Barnes & Noble · IngramSpark",
  },
  {
    title: "Book marketing",
    tag: "FIND YOUR PEOPLE",
    icon: Megaphone,
    text: "Good stories deserve to be discovered. Build a considered launch and a lasting connection with the readers who matter.",
    details: "Launch strategy · Author positioning · Metadata & keywords · Campaign planning",
  },
  {
    title: "Audiobook production",
    tag: "GIVE YOUR STORY A VOICE",
    icon: AudioLines,
    text: "Take your words beyond the page with narration guidance and production support that captures the heart of your book.",
    details:
      "Script adaptation · Narrator selection · Production coordination · Release preparation",
  },
];
const faqs = [
  [
    "Will I own the rights to my book?",
    "Yes. Your words, copyright, publishing accounts and royalties stay yours. We work behind the scenes, with confidentiality agreed before your project begins.",
  ],
  [
    "Can we work together on just one service?",
    "Absolutely. Whether you need a full manuscript, a thoughtful edit, a cover or publishing support, we meet you wherever you are in the process.",
  ],
  [
    "How long does a project take?",
    "A full manuscript typically takes 12–20 weeks, depending on research, length and feedback. Smaller editing or design projects often take 2–4 weeks. We agree on your schedule before starting.",
  ],
  [
    "Which genres do you work with?",
    "We support fiction, memoir, business, self-development, children’s books and other nonfiction. Tell us about your idea so we can discuss the right creative fit.",
  ],
  [
    "How much will my project cost?",
    "Every book has a different scope. After learning about your manuscript, goals and timeline, we prepare a tailored proposal with clear deliverables and milestones.",
  ],
];
const books = [
  {
    img: coverOne,
    title: "The Quiet Ledger",
    genre: "LITERARY FICTION",
    desc: "A quiet mystery. A lasting impression.",
  },
  {
    img: coverTwo,
    title: "North of Nowhere",
    genre: "MEMOIR & ADVENTURE",
    desc: "For the journeys that change us.",
  },
  {
    img: coverThree,
    title: "Mira and the Paper Moon",
    genre: "CHILDREN’S FICTION",
    desc: "Little readers. Limitless imagination.",
  },
];
function Brand() {
  return (
    <a href="#" className="brand" aria-label="StoryPrint Agency home">
      <span className="brand-mark">
        <BookOpen size={26} strokeWidth={1.5} />
        <span>✦</span>
      </span>
      <span>
        storyprint<span className="brand-agency">THE AUTHOR’S CREATIVE PARTNER</span>
      </span>
      <i>®</i>
    </a>
  );
}
function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [emailReady, setEmailReady] = useState("");
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.from(".hero-reveal", {
          y: 35,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        });
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) =>
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
            y: 35,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
          }),
        );
        gsap.to(".orbit-word", { rotation: 360, duration: 55, repeat: -1, ease: "none" });
      }, root);
      return () => context.revert();
    });
    return () => mm.revert();
  }, []);
  useEffect(() => {
    if (selectedBook === null) return;
    const previous = document.activeElement as HTMLElement | null;
    const close = document.querySelector<HTMLButtonElement>(".modal-close");
    close?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedBook(null);
      if (e.key === "Tab") {
        e.preventDefault();
        close?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = old;
      previous?.focus();
    };
  }, [selectedBook]);
  return (
    <div ref={root}>
      <div className="announcement">
        <span>A new chapter starts with a conversation.</span>
        <a href="#contact">
          Let’s write yours <ArrowUpRight size={13} />
        </a>
      </div>
      <header className="site-header">
        <div className="container nav">
          <Brand />
          <nav aria-label="Main navigation" className={menu ? "nav-links open" : "nav-links"}>
            {[
              ["Services", "services"],
              ["Our approach", "approach"],
              ["Selected work", "work"],
              ["FAQs", "faq"],
            ].map(([name, id]) => (
              <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
                {name}
              </a>
            ))}
            <a className="button small" href="#contact" onClick={() => setMenu(false)}>
              Let’s talk books <ArrowUpRight size={16} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow hero-reveal">
              <span className="dot" /> FOR THE STORIES WAITING TO BE TOLD
            </div>
            <h1 className="hero-reveal">
              Your story.
              <br />
              Our craft.
              <br />
              <em>A world of</em>
              <br />
              <em>possibilities.</em>
              <span className="heading-star">✽</span>
            </h1>
            <p className="hero-reveal hero-description">
              From that first “what if” to the final printed page.
              <br className="desktop-break" /> We help you write, shape, and share a book
              <br className="desktop-break" /> that’s beautifully, unapologetically yours.
            </p>
            <div className="hero-actions hero-reveal">
              <a href="#contact" className="button">
                Start your next chapter <ArrowUpRight size={19} />
              </a>
              <a href="#work" className="text-link">
                Explore our work <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-note hero-reveal">
              <span className="note-icon">
                <ShieldCheck size={19} />
              </span>
              <span>
                Your voice. Your rights. <strong>Always.</strong>
              </span>
            </div>
          </div>
          <div className="hero-art hero-reveal">
            <div className="art-grid" />
            <span className="art-top-label">GOOD STORIES DON’T WRITE THEMSELVES.</span>
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <BookScene />
            <div className="round-stamp">
              <svg viewBox="0 0 120 120" className="orbit-word" aria-hidden="true">
                <defs>
                  <path id="circle" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
                </defs>
                <text>
                  <textPath href="#circle">
                    YOUR STORY STARTS HERE · YOUR STORY STARTS HERE ·{" "}
                  </textPath>
                </text>
              </svg>
              <MoveUpRight size={32} />
            </div>
            <div className="art-caption">
              <span>01 / THE BEGINNING</span>
              <span>
                Made of words.
                <br />
                Built for the world.
              </span>
            </div>
            <div className="float-note">
              <span>✦</span> A little imagination.
              <br />A whole lot of possibility.
            </div>
          </div>
        </section>
        <section className="platforms">
          <div className="container platform-inner">
            <p>
              YOUR NEXT CHAPTER.
              <br />
              <strong>EVERYWHERE READERS ARE.</strong>
            </p>
            <span className="amazon">
              amazon<span>⌣</span>
            </span>
            <span className="platform-apple">● Books</span>
            <span className="kobo">
              Rakuten <b>kobo</b>
            </span>
            <span className="barnes">
              BARNES<span>&</span>NOBLE
            </span>
            <span className="ingram">
              ingram<span>spark</span>
              <i>✦</i>
            </span>
          </div>
        </section>
        <section id="services" className="section container">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow">
                <span className="dash" /> WHAT WE DO
              </div>
              <h2>
                Big ideas. <em>Beautiful books.</em>
              </h2>
            </div>
            <p>
              One creative team. Every chapter of the journey.
              <br />A little help or the whole story — we’re here for it.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={"service-card reveal " + (activeService === i ? "expanded" : "")}
              >
                <div className="service-top">
                  <s.icon size={28} strokeWidth={1.35} />
                  <span>0{i + 1}</span>
                </div>
                <span className="micro-label">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <button
                  aria-expanded={activeService === i}
                  onClick={() => setActiveService(activeService === i ? null : i)}
                  className="service-button"
                >
                  {activeService === i ? "A closer look" : "Explore service"}
                  {activeService === i ? <X size={17} /> : <ArrowUpRight size={18} />}
                </button>
                {activeService === i && (
                  <div className="service-details">
                    <p>{s.details}</p>
                    <a href="#contact">
                      Tell us about your project <ArrowRight size={14} />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
        <section id="approach" className="approach">
          <div className="container approach-grid">
            <div className="approach-images reveal">
              <img
                src={heroPhoto}
                alt="Beautifully bound books, a pen and reading glasses in warm sunlight"
                loading="lazy"
              />
              <div className="image-tag">
                <Sparkles size={22} />
                <span>
                  THOUGHTFULLY CRAFTED.
                  <br />
                  <strong>Entirely yours.</strong>
                </span>
              </div>
            </div>
            <div className="approach-copy reveal">
              <div className="eyebrow">
                <span className="dash" /> MORE THAN A PUBLISHING PARTNER
              </div>
              <h2>
                We’re in your corner.
                <br />
                <em>And in every chapter.</em>
              </h2>
              <p>
                There’s a book only you can write. Maybe it’s been living in your head for years.
                Maybe it’s already a stack of pages on your desk.
              </p>
              <p>
                Wherever you’re starting, we bring the right people, a thoughtful process, and a
                genuine love of storytelling to help you move forward.
              </p>
              <div className="promise-list">
                <span>
                  <Check size={17} /> Your voice stays at the heart of it all
                </span>
                <span>
                  <Check size={17} /> Clear milestones. Open conversations.
                </span>
                <span>
                  <Check size={17} /> You keep your copyright and royalties
                </span>
              </div>
              <a href="#contact" className="text-link">
                Meet your next chapter <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
        <section id="work" className="section container">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow">
                <span className="dash" /> THE POSSIBILITIES, IN PRINT
              </div>
              <h2>
                Different worlds.
                <br />
                <em>The same love of story.</em>
              </h2>
            </div>
            <p>
              A glimpse of what your next chapter could look like.
              <br />
              Concept covers from our creative collection.
            </p>
          </div>
          <div className="books-grid">
            {books.map((b, i) => (
              <button key={b.title} className="book-card reveal" onClick={() => setSelectedBook(i)}>
                <div className={"book-display book-bg-" + i}>
                  <div
                    className="book-jacket"
                    role="img"
                    aria-label={b.title + " concept cover design"}
                    style={{ backgroundImage: `url(${b.img})` }}
                  />
                  <span className="book-view">
                    <ArrowUpRight size={24} />
                  </span>
                </div>
                <div className="book-meta">
                  <span>{b.genre}</span>
                  <ArrowUpRight size={17} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </button>
            ))}
          </div>
        </section>
        <section className="process-section">
          <div className="container">
            <div className="section-top reveal">
              <div>
                <div className="eyebrow">
                  <span className="dash" /> A CLEAR PATH FORWARD
                </div>
                <h2>
                  From “I have an idea”
                  <br />
                  <em>to “I wrote a book.”</em>
                </h2>
              </div>
              <a href="#contact" className="button light">
                Find your starting point <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="process-grid">
              {[
                [
                  "Let’s hear your story",
                  "We listen first. Your idea, your readers, your ambitions — and the kind of support you need.",
                ],
                [
                  "Build the blueprint",
                  "Together, we map out the scope, creative direction and milestones. A shared plan, from day one.",
                ],
                [
                  "Make something meaningful",
                  "Writing, editing and design come together with your feedback at every important step.",
                ],
                [
                  "Hello, world.",
                  "We help prepare your book for publication and plan the next steps for reaching your readers.",
                ],
              ].map(([title, text], i) => (
                <div className="process-step reveal" key={title}>
                  <span className="step-number">0{i + 1}</span>
                  <span className="step-line" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="editorial container section">
          <div className="editorial-title reveal">
            <div className="eyebrow">
              <span className="dash" /> ROOM FOR EVERY KIND OF STORY
            </div>
            <h2>
              What’s <em>your</em> next chapter?
            </h2>
          </div>
          <div className="editorial-grid">
            <a href="#contact" className="editorial-card reveal">
              <img
                src={writingPhoto}
                alt="A thoughtful space to develop a manuscript"
                loading="lazy"
              />
              <div>
                <span>FOR THE IDEA YOU CAN’T LET GO OF</span>
                <h3>Let’s find your words.</h3>
                <ArrowUpRight />
              </div>
            </a>
            <a href="#contact" className="editorial-card reveal">
              <img
                src={publishingPhoto}
                alt="Books and publishing materials prepared for the next chapter"
                loading="lazy"
              />
              <div>
                <span>FOR THE MANUSCRIPT THAT’S READY FOR MORE</span>
                <h3>Let’s turn the page.</h3>
                <ArrowUpRight />
              </div>
            </a>
          </div>
        </section>
        <section id="faq" className="faq-section container">
          <div className="faq-intro reveal">
            <div className="eyebrow">
              <span className="dash" /> A FEW THINGS YOU MIGHT BE WONDERING
            </div>
            <h2>
              Good questions.
              <br />
              <em>Honest answers.</em>
            </h2>
            <p>
              Still have something on your mind?
              <br />
              We’d love to talk it through.
            </p>
            <a className="text-link" href="#contact">
              Ask us anything <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="faq-list reveal">
            {faqs.map(([q, a], i) => (
              <details key={q}>
                <summary>
                  <span className="faq-number">0{i + 1}</span>
                  <span>{q}</span>
                  <Plus size={19} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="reveal">
              <div className="eyebrow">
                <span className="dot" /> YOUR STORY IS WORTH TELLING
              </div>
              <h2>
                The first page
                <br />
                starts with
                <br />
                <em>a hello.</em>
                <span>✽</span>
              </h2>
              <p>
                An idea. A draft. A wild ambition.
                <br />
                Tell us what you have in mind — let’s take it from there.
              </p>
              <a className="contact-email" href="mailto:hello@storyprintagency.com">
                hello@storyprintagency.com <ArrowUpRight size={20} />
              </a>
            </div>
            <form
              className="inquiry-form reveal"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Hello StoryPrint Agency,\n\nMy name is ${data.get("name")}.\nEmail: ${data.get("email")}\nI'm interested in: ${data.get("service")}\n\n${data.get("message")}`;
                const emailLink = `mailto:hello@storyprintagency.com?subject=${encodeURIComponent("Let’s talk about my book")}&body=${encodeURIComponent(body)}`;
                setEmailReady(emailLink);
              }}
            >
              <h3>Tell us a little about your story.</h3>
              <div className="form-row">
                <label>
                  Your name
                  <input
                    name="name"
                    placeholder="Alex Morgan"
                    required
                    maxLength={100}
                    autoComplete="name"
                  />
                </label>
                <label>
                  Email address
                  <input
                    type="email"
                    name="email"
                    placeholder="alex@example.com"
                    required
                    autoComplete="email"
                  />
                </label>
              </div>
              <label>
                How can we help?
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Ghostwriting</option>
                  <option>Editing & proofreading</option>
                  <option>Design & illustration</option>
                  <option>Publishing & distribution</option>
                  <option>Book marketing</option>
                  <option>Audiobook production</option>
                  <option>I’m not sure yet</option>
                </select>
              </label>
              <label>
                A little about your project
                <textarea
                  name="message"
                  placeholder="Every great story starts somewhere…"
                  rows={3}
                  required
                  maxLength={5000}
                />
              </label>
              <button className="button" type="submit">
                Prepare my inquiry <ArrowUpRight size={18} />
              </button>
              {emailReady && (
                <a className="email-send-link" href={emailReady}>
                  Open email app to send <ArrowUpRight size={16} />
                </a>
              )}
              <p className="form-note" role="status">
                {emailReady
                  ? "Your inquiry is ready. Open your email app using the link above, then send the message to complete your request."
                  : "Prepare your message, then send it from your email app. Your story stays private."}
              </p>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-main">
          <Brand />
          <p>
            Good stories bring us together.
            <br />
            Let’s put yours into the world.
          </p>
          <a href="#" className="back-top">
            BACK TO TOP <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} StoryPrint Agency. All rights reserved.</span>
          <span>INDEPENDENT SPIRIT. SHARED IMAGINATION.</span>
          <a href="#contact">
            Let’s make something meaningful <span>✦</span>
          </a>
        </div>
      </footer>
      {selectedBook !== null && (
        <div className="modal-backdrop" onClick={() => setSelectedBook(null)}>
          <div
            className="book-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close book preview"
              onClick={() => setSelectedBook(null)}
            >
              <X />
            </button>
            <img
              src={books[selectedBook]!.img}
              alt={books[selectedBook]!.title + " full concept cover"}
            />
            <div>
              <span className="eyebrow">CONCEPT COVER COLLECTION</span>
              <h2 id="book-modal-title">{books[selectedBook]!.title}</h2>
              <p>
                {books[selectedBook]!.desc} This concept explores the visual possibilities of{" "}
                {books[selectedBook]!.genre.toLowerCase()}. Your book’s design starts with your own
                story.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
