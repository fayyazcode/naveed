import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  BookOpen,
  PenLine,
  Mail,
  ShieldCheck,
  Users,
  Compass,
} from "lucide-react";
import { PageHero, MotionSection } from "./PageHero";
import { InquiryForm } from "./InquiryForm";
import { servicePages, type ServicePageData } from "@/content/services";
import heroPhoto from "@/assets/hero-books.jpg";
export function ChapterCTA({
  title = "Your next chapter is waiting.",
  text = "Tell us where you are in the journey. We’ll talk through what comes next.",
  service,
}: {
  title?: string;
  text?: string;
  service?: string;
}) {
  return (
    <section className="chapter-cta">
      <div className="container">
        <div>
          <span className="eyebrow">GOOD STORIES START WITH A CONVERSATION</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link to="/contact" search={service ? { service } : {}} className="button">
          Let’s write what’s next <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
export function Questions({ items }: { items: string[][] }) {
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => (
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
  );
}
export function ServicePage({ service: s }: { service: ServicePageData }) {
  const related = servicePages
    .filter((x) => x.slug !== s.slug)
    .slice(s.kind.startsWith("children") ? 3 : 0, s.kind.startsWith("children") ? 6 : 3);
  return (
    <main id="main-content">
      <PageHero
        kind={s.kind}
        eyebrow={s.eyebrow}
        title={s.title}
        accent={s.accent}
        intro={s.intro}
      />
      <div className="service-promise-strip">
        <div className="container">
          <span>
            <Check size={15} />
            Your rights stay yours
          </span>
          <span>
            <Check size={15} />A clear, agreed scope
          </span>
          <span>
            <Check size={15} />
            Feedback at every milestone
          </span>
        </div>
      </div>
      <MotionSection>
        <section id="explore" className="container service-overview section">
          <div data-enter>
            <div className="eyebrow">
              <span className="dash" />
              THE THOUGHT BEHIND THE CRAFT
            </div>
            <h2>{s.heading}</h2>
          </div>
          <div data-enter>
            <p>{s.body}</p>
            <Link to="/contact" search={{ service: s.name }} className="text-link">
              Talk through your project <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
        <section className="offering-section">
          <div className="container">
            <div className="section-top" data-enter>
              <div>
                <span className="eyebrow">
                  <span className="dash" />
                  BUILT AROUND YOUR BOOK
                </span>
                <h2>
                  The details <em>make the difference.</em>
                </h2>
              </div>
              <p>
                We agree on the deliverables that suit your project.
                <br />
                Here’s where we can help.
              </p>
            </div>
            <div className="offering-grid">
              {s.features.map(([title, text], i) => (
                <article data-enter key={title}>
                  <span className="offering-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="container section">
          <div className="section-top" data-enter>
            <div>
              <span className="eyebrow">
                <span className="dash" />
                THOUGHTFUL STEPS. SHARED MOMENTUM.
              </span>
              <h2>
                A way forward.
                <br />
                <em>Made together.</em>
              </h2>
            </div>
            <p>A collaborative process, with a clear place for your input at each stage.</p>
          </div>
          <div className="service-steps">
            {s.steps.map((step, i) => (
              <article data-enter key={step}>
                <span>0{i + 1}</span>
                <h3>{step}</h3>
                <p>
                  {
                    [
                      "First, we learn about your book, your readers and the support you need.",
                      "Then we agree on direction, deliverables and milestones before the work begins.",
                      "You review the work at agreed checkpoints, with room to ask questions and share feedback.",
                      "We refine, check and hand over the agreed materials, with practical next steps.",
                    ][i]
                  }
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="service-ownership">
          <div className="container" data-enter>
            <ShieldCheck size={37} strokeWidth={1.2} />
            <div>
              <h3>Your book. Your voice. Your rights.</h3>
              <p>
                We’re your creative partner. Ownership, confidentiality, revisions and deliverables
                are agreed in your project scope before work starts.
              </p>
            </div>
            <span>ALWAYS YOURS. ↗</span>
          </div>
        </section>
        <section className="container service-faq section">
          <div data-enter>
            <span className="eyebrow">
              <span className="dash" />
              BEFORE WE BEGIN
            </span>
            <h2>
              A little clarity.
              <br />
              <em>A confident start.</em>
            </h2>
          </div>
          <div data-enter>
            <Questions
              items={[
                s.faq,
                [
                  "Can I combine this with other services?",
                  "Yes. We can prepare a proposal for one service or a coordinated project. We’ll agree on the scope and sequence so the work fits together.",
                ],
                [
                  "How do you price a project?",
                  "We consider the manuscript, scope, complexity and timeline, then prepare a tailored proposal. There are no automatic prices or packages to commit to on this website.",
                ],
              ]}
            />
          </div>
        </section>
        <section className="container related-section">
          <div className="section-top" data-enter>
            <div>
              <span className="eyebrow">
                <span className="dash" />
                THERE’S MORE TO THE STORY
              </span>
              <h2>
                Your next <em>possibility.</em>
              </h2>
            </div>
            <Link to="/services" className="text-link">
              All services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="related-grid">
            {related.map((r) => (
              <Link key={r.slug} to={`/${r.slug}` as "/"} data-enter>
                <span className="micro-label">{r.eyebrow}</span>
                <h3>{r.name}</h3>
                <ArrowUpRight size={22} />
                <p>{r.intro}</p>
              </Link>
            ))}
          </div>
        </section>
      </MotionSection>
      <ChapterCTA service={s.name} />
    </main>
  );
}
export function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        kind="services"
        eyebrow="ONE CREATIVE PARTNER. EVERY CHAPTER."
        title="Wherever you start,"
        accent="let’s go somewhere."
        intro="A first idea or a final draft. One small piece or the whole publishing journey. Find the support your story needs."
      />
      <MotionSection>
        <section id="explore" className="container section service-directory">
          <div className="section-top" data-enter>
            <div>
              <span className="eyebrow">
                <span className="dash" />A COMPLETE CREATIVE TOOLKIT
              </span>
              <h2>
                Big ideas.
                <br />
                <em>The right people.</em>
              </h2>
            </div>
            <p>
              Explore each service to see what’s involved, how we work, and where your voice fits
              in.
            </p>
          </div>
          <div className="service-directory-grid">
            {servicePages.map((s, i) => (
              <Link data-enter to={`/${s.slug}` as "/"} key={s.slug}>
                <span className="directory-number">0{i + 1}</span>
                <span className="micro-label">{s.eyebrow}</span>
                <h3>{s.name}</h3>
                <p>{s.intro}</p>
                <span className="text-link">
                  Explore this service <ArrowUpRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </MotionSection>
      <ChapterCTA
        title="Not sure where to start?"
        text="That’s a perfectly good place to begin. Tell us about your book and we’ll explore the options together."
      />
    </main>
  );
}
export function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        kind="about"
        eyebrow="THE PEOPLE BEHIND THE PAGES"
        title="Different crafts."
        accent="A shared love of story."
        intro="We bring words, design and publishing together around one simple belief: a book should feel like the person whose name is on the cover."
      />
      <MotionSection>
        <section id="explore" className="container section about-story">
          <div className="about-story-photo" data-enter>
            <img
              src={heroPhoto}
              alt="Books, glasses and a pen in a sunlit writing space"
              loading="lazy"
            />
            <span>FOR THE WORK THAT MATTERS TO YOU.</span>
          </div>
          <div data-enter>
            <span className="eyebrow">
              <span className="dash" />A CREATIVE HOME FOR YOUR NEXT CHAPTER
            </span>
            <h2>
              Not just a book.
              <br />
              <em>Your point of view.</em>
            </h2>
            <p>
              Some stories arrive as voice notes. Some come in boxes of research. Some are already a
              draft that needs a thoughtful second pair of eyes.
            </p>
            <p>
              StoryPrint Agency brings writing, editing, illustration, design and publishing support
              into one collaborative process. We meet you where you are and help you make the next
              decision with clarity.
            </p>
            <p>
              Our role is to listen closely, do careful work, and keep your voice at the heart of
              it. Your name belongs on the cover. Your perspective belongs on every page.
            </p>
          </div>
        </section>
        <section className="values-section">
          <div className="container">
            <div className="section-top" data-enter>
              <div>
                <span className="eyebrow">
                  <span className="dash" />
                  THE WAY WE WORK
                </span>
                <h2>
                  Care is <em>part of the craft.</em>
                </h2>
              </div>
            </div>
            <div className="values-grid">
              {[
                [
                  Users,
                  "A conversation, not a conveyor belt",
                  "We ask questions, make space for your feedback and build around the story in front of us.",
                ],
                [
                  PenLine,
                  "Your voice, with intention",
                  "We strengthen the work while staying attentive to your perspective, style and creative goals.",
                ],
                [
                  Compass,
                  "Clarity at every step",
                  "A shared scope, planned milestones and honest conversations make the journey easier to navigate.",
                ],
                [
                  ShieldCheck,
                  "Ownership stays with you",
                  "Rights, confidentiality and deliverables are discussed before the work begins. Your story stays yours.",
                ],
              ].map(([Icon, title, text]) => {
                const I = Icon as typeof Users;
                return (
                  <article data-enter key={String(title)}>
                    <I size={30} strokeWidth={1.2} />
                    <h3>{String(title)}</h3>
                    <p>{String(text)}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="container section about-collaboration" data-enter>
          <span className="eyebrow">
            <span className="dash" />
            ONE STORY. MANY WAYS TO HELP.
          </span>
          <h2>
            Writers. Editors. Artists.
            <br />
            <em>All on your side of the page.</em>
          </h2>
          <p>
            Writing and research find the heart of the story. Editing gives it shape. Design and
            illustration give it presence. Publishing support helps it travel. We coordinate those
            crafts around your book, with you as a collaborator throughout.
          </p>
          <Link to="/services" className="text-link">
            Explore the ways we can help <ArrowRight size={17} />
          </Link>
        </section>
      </MotionSection>
      <ChapterCTA title="Let’s make something that feels like you." />
    </main>
  );
}
export function ContactPage({ service = "" }: { service?: string }) {
  return (
    <main id="main-content">
      <PageHero
        kind="contact"
        eyebrow="THE FIRST PAGE STARTS HERE"
        title="An idea. A question."
        accent="A simple hello."
        intro="Tell us what you’re dreaming about, what you’re working on, or where you feel stuck. We’d love to hear the story behind your story."
        contact
      />
      <MotionSection>
        <section id="explore" className="container contact-details section">
          <article data-enter>
            <Mail size={28} strokeWidth={1.3} />
            <span className="eyebrow">WRITE TO US</span>
            <h3>We’re a hello away.</h3>
            <a href="mailto:hello@storyprintagency.com">
              hello@storyprintagency.com <ArrowUpRight size={15} />
            </a>
            <p>
              Email works for first questions, project briefs and manuscripts you’d like to discuss.
              Please contact us before sending confidential materials.
            </p>
          </article>
          <article data-enter>
            <BookOpen size={28} strokeWidth={1.3} />
            <span className="eyebrow">BRING WHAT YOU HAVE</span>
            <h3>A draft isn’t a prerequisite.</h3>
            <p>
              An outline, a half-finished chapter, or just an idea you can’t shake. We can talk
              through a useful next step from wherever you are.
            </p>
          </article>
          <article data-enter>
            <Users size={28} strokeWidth={1.3} />
            <span className="eyebrow">WHAT HAPPENS NEXT</span>
            <h3>A thoughtful conversation.</h3>
            <p>
              After receiving your email, we can clarify your goals, discuss suitable support and
              agree on whether a proposal is the right next step.
            </p>
          </article>
        </section>
        <section id="inquiry" className="contact-page-form-section">
          <div className="container contact-page-form-grid">
            <div data-enter>
              <span className="eyebrow">
                <span className="dash" />
                LET’S GET TO KNOW YOUR BOOK
              </span>
              <h2>
                You don’t need
                <br />
                all the answers.
                <br />
                <em>Just a starting point.</em>
              </h2>
              <p>
                The more you can tell us, the more useful our first conversation can be. A genre, a
                rough word count and your ambitions are a great place to start.
              </p>
              <div className="contact-help">
                <ShieldCheck size={23} />
                <p>
                  Sharing a brief doesn’t commit you to a project. Scope, pricing and
                  confidentiality are agreed separately before work begins.
                </p>
              </div>
              <a className="text-link" href="mailto:hello@storyprintagency.com">
                Prefer to write directly? <ArrowUpRight size={16} />
              </a>
            </div>
            <div data-enter>
              <InquiryForm key={service} defaultService={service} />
            </div>
          </div>
        </section>
        <section className="container section service-faq">
          <div data-enter>
            <span className="eyebrow">
              <span className="dash" />
              BEFORE YOU SAY HELLO
            </span>
            <h2>
              Good questions.
              <br />
              <em>A clear beginning.</em>
            </h2>
          </div>
          <div data-enter>
            <Questions
              items={[
                [
                  "Do I need a finished manuscript?",
                  "No. We can discuss an idea, outline, partial draft or finished manuscript. The right starting point depends on what you want to create.",
                ],
                [
                  "Can I ask about more than one service?",
                  "Yes. Choose the service closest to your needs and mention any other support in your project brief.",
                ],
                [
                  "Does this form send my message automatically?",
                  "No. The form prepares a message for your email app. Review and send it there, or email hello@storyprintagency.com directly. Nothing is submitted to a server by this form.",
                ],
              ]}
            />
          </div>
        </section>
      </MotionSection>
    </main>
  );
}
