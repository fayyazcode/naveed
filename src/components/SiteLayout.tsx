import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BookOpen, ChevronDown, Menu, X } from "lucide-react";
import { servicePages } from "@/content/services";
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="StoryPrint Agency home">
      <span className="brand-mark">
        <BookOpen size={26} strokeWidth={1.5} />
        <span>✦</span>
      </span>
      <span>
        storyprint<span className="brand-agency">THE AUTHOR’S CREATIVE PARTNER</span>
      </span>
      <i>®</i>
    </Link>
  );
}
export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [services, setServices] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setMenu(false);
    setServices(false);
  }, [path]);
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) {
        setMenu(false);
        setServices(false);
      }
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="announcement">
        <span>A new chapter starts with a conversation.</span>
        <Link to="/contact">
          Let’s write yours <ArrowUpRight size={13} />
        </Link>
      </div>
      <header
        ref={header}
        className="site-header multipage-header"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setServices(false);
            setMenu(false);
            trigger.current?.focus();
          }
        }}
      >
        <div className="container nav">
          <Brand />
          <nav
            id="site-navigation"
            aria-label="Main navigation"
            className={"nav-links " + (menu ? "open" : "")}
          >
            <Link to="/" activeProps={{ "aria-current": "page" }} activeOptions={{ exact: true }}>
              Home
            </Link>
            <Link to="/about-us" activeProps={{ "aria-current": "page" }}>
              About us
            </Link>
            <div className="services-nav">
              <button
                ref={trigger}
                className="services-trigger"
                aria-expanded={services}
                aria-controls="services-dropdown"
                onClick={() => setServices(!services)}
              >
                Services <ChevronDown size={13} className={services ? "rotate" : ""} />
              </button>
              {services && (
                <div id="services-dropdown" className="services-dropdown">
                  <div className="dropdown-intro">
                    <span className="eyebrow">EVERY CHAPTER, COVERED</span>
                    <Link to="/services">
                      Explore all services <ArrowUpRight size={16} />
                    </Link>
                    <p>From the first spark to your next reader.</p>
                  </div>
                  <div className="dropdown-links">
                    {servicePages.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}` as "/"}
                        activeProps={{ "aria-current": "page" }}
                      >
                        {s.name}
                        <ArrowUpRight size={13} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link className="primary-service-link" to="/book-publishing">
              Book publishing
            </Link>
            <Link className="primary-service-link" to="/book-marketing">
              Book marketing
            </Link>
            <Link className="primary-service-link" to="/book-editing">
              Book editing
            </Link>
            <Link to="/blogs" activeProps={{ "aria-current": "page" }}>
              Blogs
            </Link>
            <Link className="button small" to="/contact">
              Contact us <ArrowUpRight size={15} />
            </Link>
          </nav>
          <button
            className="menu-toggle"
            aria-controls="site-navigation"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
export function SiteFooter() {
  return (
    <footer className="full-footer">
      <div className="container footer-directory">
        <div>
          <Brand />
          <p>
            Good stories bring us together.
            <br />
            Let’s put yours into the world.
          </p>
          <a className="footer-email" href="mailto:hello@storyprintagency.com">
            hello@storyprintagency.com
          </a>
        </div>
        <div>
          <span className="eyebrow">THE AGENCY</span>
          <Link to="/about-us">About us</Link>
          <Link to="/services">Our services</Link>
          <Link to="/blogs">The journal</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/" hash="work">
            Selected concepts
          </Link>
        </div>
        <div>
          <span className="eyebrow">YOUR NEXT CHAPTER</span>
          {servicePages.slice(0, 5).map((s) => (
            <Link key={s.slug} to={`/${s.slug}` as "/"}>
              {s.name}
            </Link>
          ))}
        </div>
        <div>
          <span className="eyebrow">MORE POSSIBILITIES</span>
          {servicePages.slice(5).map((s) => (
            <Link key={s.slug} to={`/${s.slug}` as "/"}>
              {s.name}
            </Link>
          ))}
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} StoryPrint Agency. All rights reserved.</span>
        <span>INDEPENDENT SPIRIT. SHARED IMAGINATION.</span>
        <Link to="/contact">
          Let’s make something meaningful <span>✦</span>
        </Link>
      </div>
    </footer>
  );
}
