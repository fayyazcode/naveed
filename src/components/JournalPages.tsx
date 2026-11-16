import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles } from "@/content/articles";
import { ChapterCTA } from "./ContentPages";
import { HeroArtwork, MotionSection, PageHero } from "./PageHero";
export function BlogsPage() {
  return (
    <main id="main-content">
      <PageHero
        kind="blogs"
        eyebrow="THE STORYPRINT JOURNAL"
        title="Notes on the craft."
        accent="Ideas for the journey."
        intro="Practical thoughts on writing, editing and getting your book into the world. Pull up a chair. There’s always more to the story."
      />
      <MotionSection>
        <section id="explore" className="container section">
          <div className="section-top" data-enter>
            <div>
              <span className="eyebrow">
                <span className="dash" />
                FROM OUR WRITING DESK
              </span>
              <h2>
                A little perspective.
                <br />
                <em>For your next page.</em>
              </h2>
            </div>
            <p>
              Original guides for authors at every stage.
              <br />
              Read at your own pace.
            </p>
          </div>
          <div className="journal-grid">
            {articles.map((a, i) => (
              <Link
                data-enter
                to="/blogs/$slug"
                params={{ slug: a.slug }}
                key={a.slug}
                className="journal-card"
              >
                <div className={"journal-cover journal-" + a.color}>
                  <span>STORYPRINT / FIELD NOTES</span>
                  <span className="journal-cover-number">0{i + 1}</span>
                  <div className="journal-cover-art">{["Aa", "¶", "↗"][i]}</div>
                  <span>{a.category}</span>
                  <ArrowUpRight size={24} />
                </div>
                <div className="journal-meta">
                  <span>{a.category}</span>
                  <span>{a.readTime}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="text-link">
                  Read the story <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </MotionSection>
      <ChapterCTA
        title="A question of your own?"
        text="Tell us what you’re working on. We’re here for your next chapter."
      />
    </main>
  );
}
export function ArticlePage({ article: a }: { article: (typeof articles)[number] }) {
  return (
    <main id="main-content">
      <section className="container article-hero">
        <div>
          <Link to="/blogs" className="text-link">
            <ArrowLeft size={15} /> Back to the journal
          </Link>
          <div className="eyebrow">
            {a.category} / {a.readTime}
          </div>
          <h1>{a.title}</h1>
          <p>{a.excerpt}</p>
          <div className="article-byline">
            <span className="byline-mark">s.</span>
            <span>
              StoryPrint editorial desk
              <br />
              <small>NOTES FOR THE AUTHOR’S JOURNEY</small>
            </span>
          </div>
        </div>
        <HeroArtwork
          kind={
            a.slug.includes("edit")
              ? "editing"
              : a.slug.includes("launch")
                ? "publishing"
                : "writing"
          }
        />
      </section>
      <section className="container article-layout">
        <aside aria-label="Article contents">
          <span className="eyebrow">IN THIS CHAPTER</span>
          {a.sections.map(([h], i) => (
            <a key={h} href={"#section-" + i}>
              <span>0{i + 1}</span>
              {h}
            </a>
          ))}
        </aside>
        <article className="article-body">
          <p className="article-intro">
            A good next step starts with understanding the work in front of you. These notes offer a
            starting point, with room for the details that make your project different.
          </p>
          {a.sections.map(([heading, body], i) => (
            <section id={"section-" + i} key={heading}>
              <h2>{heading}</h2>
              <p>{body}</p>
            </section>
          ))}
          <div className="article-endnote">
            Every book has its own requirements. Discuss the scope, rights and deliverables of your
            project before committing to a service.
          </div>
          <Link className="text-link" to="/blogs">
            <ArrowLeft size={15} /> More from the journal
          </Link>
        </article>
      </section>
      <ChapterCTA />
    </main>
  );
}
