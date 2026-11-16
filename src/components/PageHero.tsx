import { Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useId, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicePages, type HeroKind } from "@/content/services";
const BookScene = lazy(() => import("./BookScene"));

const labels: Record<HeroKind, string> = {
  publishing: "READY FOR THE WORLD",
  marketing: "STORIES TRAVEL FURTHER",
  editing: "CLARITY IN EVERY LINE",
  audio: "PRESS PLAY ON POSSIBILITY",
  "children-marketing": "LET CURIOSITY TRAVEL",
  "children-editing": "A LITTLE MORE MAGIC",
  illustration: "FROM SKETCH TO STORY",
  amazon: "YOUR NEXT CHAPTER ON KDP",
  writing: "ONE WORD AT A TIME",
  about: "DIFFERENT CRAFTS. ONE STORY.",
  contact: "A CONVERSATION STARTS HERE",
  blogs: "NOTES FROM THE WRITING DESK",
  services: "EVERY PART OF YOUR JOURNEY",
};
export function MotionSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-enter]").forEach((el) =>
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
          }),
        );
      }, ref);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
function Paper({ editing = false, child = false }: { editing?: boolean; child?: boolean }) {
  return (
    <g className="motion-paper">
      <rect x="172" y="76" width="260" height="336" rx="4" fill="#faf9f1" stroke="#d6d7c8" />
      <text x="200" y="113" fontSize="9" letterSpacing="3">
        {child ? "ONCE UPON A TIME" : "THE NEXT CHAPTER"}
      </text>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <g key={i} className="manuscript-line">
          <line
            x1="201"
            x2={i % 3 === 0 ? "358" : "397"}
            y1={147 + i * 24}
            y2={147 + i * 24}
            stroke="#b8bdaa"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}
      {editing && (
        <>
          <path
            className="edit-stroke"
            d="M198 170 Q270 189 352 170 M202 240 L306 240 M230 284 Q273 255 321 284"
            fill="none"
            stroke="#e96940"
            strokeWidth="3"
          />
          <g className="float-item">
            <rect
              x="355"
              y="203"
              width="132"
              height="63"
              fill="#e96940"
              transform="rotate(7 355 203)"
            />
            <text x="370" y="230" fill="#fff7e9" fontSize="12">
              Let your voice
            </text>
            <text x="370" y="248" fill="#fff7e9" fontSize="12">
              shine through.
            </text>
          </g>
        </>
      )}
    </g>
  );
}
export function HeroArtwork({ kind }: { kind: HeroKind }) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const uid = useId().replace(/:/g, "");
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (paused) return;
      const ctx = gsap.context(() => {
        const targets = (selector: string) => ref.current?.querySelectorAll(selector);
        const to = (selector: string, vars: gsap.TweenVars) => {
          const nodes = targets(selector);
          if (nodes?.length) gsap.to(nodes, vars);
        };
        const from = (selector: string, vars: gsap.TweenVars) => {
          const nodes = targets(selector);
          if (nodes?.length) gsap.from(nodes, vars);
        };
        const fromTo = (selector: string, start: gsap.TweenVars, end: gsap.TweenVars) => {
          const nodes = targets(selector);
          if (nodes?.length) gsap.fromTo(nodes, start, end);
        };

        from(".scene-main", { opacity: 0, y: 25, duration: 1, ease: "power3.out" });
        to(".float-item", {
          y: -13,
          rotation: 3,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          stagger: 0.25,
          ease: "sine.inOut",
        });
        to(".motion-paper", {
          y: -8,
          rotation: -2,
          transformOrigin: "50% 50%",
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        to(".orbit-dot", {
          rotation: 360,
          svgOrigin: "300 250",
          duration: 18,
          repeat: -1,
          ease: "none",
          stagger: 3,
        });
        fromTo(
          ".sound-bar",
          { scaleY: 0.2 },
          {
            scaleY: 1,
            transformOrigin: "50% 50%",
            duration: 0.65,
            stagger: { each: 0.045, repeat: -1, yoyo: true },
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
        );
        fromTo(
          ".edit-stroke",
          { strokeDasharray: 500, strokeDashoffset: 500 },
          { strokeDashoffset: 0, duration: 2.4, repeat: -1, repeatDelay: 2, ease: "power2.inOut" },
        );
        fromTo(
          ".manuscript-line",
          { scaleX: 0.1, opacity: 0.3 },
          {
            scaleX: 1,
            opacity: 1,
            transformOrigin: "left center",
            stagger: 0.13,
            duration: 0.7,
            repeat: -1,
            repeatDelay: 3,
          },
        );
        to(".pencil-motion", {
          x: 35,
          y: -8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        to(".message-dot", {
          opacity: 0.2,
          stagger: 0.25,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
        });
        to(".send-letter", {
          y: -22,
          x: 14,
          rotation: 3,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        fromTo(
          ".connection-line",
          { strokeDasharray: "7 12", strokeDashoffset: 0 },
          { strokeDashoffset: -190, duration: 5, repeat: -1, ease: "none" },
        );
        to(".paint-dot", {
          scale: 1.08,
          transformOrigin: "50% 50%",
          duration: 2,
          repeat: -1,
          yoyo: true,
          stagger: 0.3,
        });
      }, ref);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, [kind, paused]);
  const isChildren = kind.startsWith("children");
  return (
    <div ref={ref} className={"page-art art-" + kind} data-hero-kind={kind}>
      <span className="art-top-label">{labels[kind]}</span>
      {kind === "publishing" ? (
        <>
          <Suspense
            fallback={
              <div className="book-fallback">
                Your next
                <br />
                chapter.
              </div>
            }
          >
            <BookScene paused={paused} />
          </Suspense>
          <span className="publishing-chip float-css">PRINT · DIGITAL · POSSIBILITY</span>
        </>
      ) : (
        <svg viewBox="0 0 600 500" role="img" aria-label={labels[kind]} className="page-art-svg">
          <defs>
            <pattern id={uid + "grid"} width="38" height="38" patternUnits="userSpaceOnUse">
              <path d="M38 0H0V38" fill="none" stroke="#cdd0c0" strokeWidth=".5" />
            </pattern>
            <filter id={uid + "shadow"} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow
                dx="8"
                dy="14"
                stdDeviation="10"
                floodColor="#343b2b"
                floodOpacity=".1"
              />
            </filter>
          </defs>
          <rect width="600" height="500" fill={"url(#" + uid + "grid)"} />
          <circle cx="300" cy="250" r="188" stroke="#c4c9b6" fill="none" />
          <circle cx="300" cy="250" r="137" stroke="#d7dace" fill="none" />
          <g className="scene-main" filter={"url(#" + uid + "shadow)"}>
            {(kind === "writing" || kind === "editing" || kind === "children-editing") && (
              <>
                <g transform="rotate(-6 300 250)">
                  <rect x="155" y="90" width="260" height="336" rx="4" fill="#d9dfcd" />
                  <Paper editing={kind !== "writing"} child={isChildren} />
                </g>
                <g className="pencil-motion">
                  <path d="M366 328l87-186 17 8-87 186-18 16z" fill="#e96940" />
                  <path d="m365 352 5-22 13 6z" fill="#535c48" />
                </g>
                {isChildren && (
                  <>
                    <text className="float-item" x="98" y="170" fontSize="48" fill="#e96940">
                      ✦
                    </text>
                    <text className="float-item" x="440" y="355" fontSize="50" fill="#88986b">
                      ☾
                    </text>
                  </>
                )}
              </>
            )}
            {kind === "audio" && (
              <>
                <g className="float-item">
                  <rect x="163" y="110" width="274" height="290" rx="135" fill="#e96940" />
                  <path
                    d="M216 247v-32a84 84 0 0 1 168 0v32"
                    fill="none"
                    stroke="#fff5e3"
                    strokeWidth="13"
                  />
                  <rect x="203" y="232" width="31" height="69" rx="15" fill="#fff5e3" />
                  <rect x="367" y="232" width="31" height="69" rx="15" fill="#fff5e3" />
                  <text
                    x="300"
                    y="349"
                    textAnchor="middle"
                    fontFamily="Georgia"
                    fontSize="25"
                    fill="#fff5e3"
                  >
                    Listen to your story.
                  </text>
                </g>
                <rect x="100" y="375" width="400" height="60" rx="30" fill="#faf9f1" />
                {Array.from({ length: 34 }, (_, i) => (
                  <rect
                    key={i}
                    className="sound-bar"
                    x={132 + i * 10}
                    y={402 - (12 + Math.sin(i * 0.8) * 9)}
                    width="4"
                    height={24 + Math.sin(i * 0.8) * 18}
                    rx="2"
                    fill="#7c8864"
                  />
                ))}
              </>
            )}
            {(kind === "marketing" || kind === "children-marketing") && (
              <>
                <g className="float-item">
                  <path
                    d="M206 208h51l111-66v202l-111-66h-51z"
                    fill={isChildren ? "#8d9c70" : "#e96940"}
                    stroke="#faf9f1"
                    strokeWidth="3"
                  />
                  <path d="m247 280 23 86h42l-24-68" fill="#343d2e" />
                  <rect x="190" y="216" width="24" height="55" rx="9" fill="#343d2e" />
                </g>
                <path
                  className="connection-line"
                  d="M388 152Q480 250 388 344 M409 125Q540 250 409 370"
                  stroke="#e96940"
                  strokeWidth="3"
                  fill="none"
                />
                {[
                  [450, 120],
                  [470, 365],
                  [150, 145],
                  [125, 340],
                ].map(([x, y], i) => (
                  <g className="float-item" key={i}>
                    <circle cx={x} cy={y} r="29" fill={i % 2 ? "#f9f1df" : "#d8decc"} />
                    <text
                      x={x}
                      y={(y ?? 0) + 7}
                      textAnchor="middle"
                      fontFamily="Georgia"
                      fontSize="24"
                      fill="#737f5f"
                    >
                      {isChildren ? ["✦", "a", "b", "☾"][i] : ["↗", "✦", "+", "↗"][i]}
                    </text>
                  </g>
                ))}
              </>
            )}
            {kind === "illustration" && (
              <>
                <rect
                  x="153"
                  y="90"
                  width="292"
                  height="340"
                  fill="#faf9f1"
                  transform="rotate(-5 300 250)"
                />
                <path
                  className="edit-stroke"
                  d="M184 351Q245 215 303 290T414 237 M201 370Q285 268 402 348"
                  fill="none"
                  stroke="#a3b18a"
                  strokeWidth="4"
                />
                <circle className="paint-dot" cx="293" cy="197" r="55" fill="#e8b789" />
                <circle className="paint-dot" cx="365" cy="266" r="64" fill="#8b9d76" />
                <circle className="paint-dot" cx="254" cy="303" r="59" fill="#e96940" />
                <g className="pencil-motion">
                  <path d="m352 353 94-204 22 10-94 204-26 20z" fill="#303b2e" />
                  <path d="m348 383 4-30 22 10z" fill="#e8b789" />
                </g>
                <text className="float-item" x="130" y="183" fontSize="45" fill="#e96940">
                  ✦
                </text>
              </>
            )}
            {kind === "amazon" && (
              <>
                <g className="motion-paper">
                  <rect x="137" y="107" width="326" height="301" rx="8" fill="#faf9f1" />
                  <rect x="137" y="107" width="326" height="37" rx="8" fill="#343d2e" />
                  <circle cx="155" cy="126" r="4" fill="#e96940" />
                  <circle cx="171" cy="126" r="4" fill="#dce1ce" />
                  <rect x="161" y="169" width="111" height="163" fill="#e96940" />
                  <text
                    x="216"
                    y="212"
                    textAnchor="middle"
                    fontFamily="Georgia"
                    fontSize="19"
                    fill="#fff6e6"
                  >
                    <tspan x="216">Your</tspan>
                    <tspan x="216" dy="24">
                      next
                    </tspan>
                    <tspan x="216" dy="24">
                      chapter.
                    </tspan>
                  </text>
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={i}
                      x1="298"
                      y1={180 + i * 25}
                      x2={i % 2 ? "412" : "436"}
                      y2={180 + i * 25}
                      stroke="#bdc4b0"
                      strokeWidth="5"
                    />
                  ))}
                  <rect x="296" y="298" width="130" height="33" rx="16" fill="#e8b789" />
                  <text x="361" y="320" fontSize="10" textAnchor="middle">
                    READY TO PUBLISH
                  </text>
                  <path
                    className="edit-stroke"
                    d="M191 365q102 48 219-2"
                    stroke="#e96940"
                    strokeWidth="5"
                    fill="none"
                  />
                </g>
                <g className="float-item">
                  <circle cx="452" cy="130" r="37" fill="#80916a" />
                  <path d="m437 130 10 10 20-22" fill="none" stroke="#fff6e6" strokeWidth="4" />
                </g>
              </>
            )}
            {kind === "about" && (
              <>
                <path
                  className="connection-line"
                  d="M173 204 300 131 427 204 427 338 300 402 173 338Z M173 204 427 338 M427 204 173 338 M300 131V402"
                  stroke="#a1ad8b"
                  strokeWidth="2"
                  fill="none"
                />
                {[
                  [173, 204],
                  [300, 131],
                  [427, 204],
                  [427, 338],
                  [300, 402],
                  [173, 338],
                ].map(([x, y], i) => (
                  <g className="float-item" key={i}>
                    <circle cx={x} cy={y} r="40" fill={i % 2 ? "#f9f4e5" : "#e96940"} />
                    <text
                      x={x}
                      y={(y ?? 0) + 6}
                      textAnchor="middle"
                      fontFamily="Georgia"
                      fontSize="18"
                      fill={i % 2 ? "#556445" : "#fff6e6"}
                    >
                      {["Voice", "Craft", "Care", "Ideas", "You", "Story"][i]}
                    </text>
                  </g>
                ))}
                <circle cx="300" cy="267" r="55" fill="#303b2e" />
                <text
                  x="300"
                  y="275"
                  textAnchor="middle"
                  fill="#fff6e6"
                  fontFamily="Georgia"
                  fontSize="28"
                >
                  Together.
                </text>
              </>
            )}
            {kind === "contact" && (
              <>
                <g className="send-letter">
                  <rect x="177" y="102" width="248" height="240" rx="4" fill="#faf9f1" />
                  <text x="210" y="159" fontFamily="Georgia" fontSize="41" fill="#727f5e">
                    Hello,
                  </text>
                  <line x1="212" y1="195" x2="382" y2="195" stroke="#c7ceba" strokeWidth="3" />
                  <line x1="212" y1="218" x2="357" y2="218" stroke="#c7ceba" strokeWidth="3" />
                  <line x1="212" y1="241" x2="372" y2="241" stroke="#c7ceba" strokeWidth="3" />
                </g>
                <path d="m145 248 155 96 155-96v155H145z" fill="#e96940" />
                <path d="m145 403 155-112 155 112" fill="#cf5836" />
                <path d="m145 248 155 96 155-96" fill="none" stroke="#f3ac84" strokeWidth="2" />
                <g className="float-item">
                  <rect x="360" y="90" width="145" height="73" rx="35" fill="#303b2e" />
                  {[0, 1, 2].map((i) => (
                    <circle
                      className="message-dot"
                      key={i}
                      cx={403 + i * 27}
                      cy="126"
                      r="5"
                      fill="#f6ead4"
                    />
                  ))}
                </g>
              </>
            )}
            {(kind === "blogs" || kind === "services") && (
              <>
                <g className="float-item" transform="rotate(-12 200 270)">
                  <rect x="105" y="155" width="166" height="240" fill="#8d9b75" />
                  <text x="132" y="204" fill="#fff6e6" fontFamily="Georgia" fontSize="27">
                    The art
                  </text>
                  <text x="132" y="237" fill="#fff6e6" fontFamily="Georgia" fontSize="27">
                    of a story.
                  </text>
                </g>
                <g className="motion-paper">
                  <rect x="242" y="101" width="223" height="294" fill="#f9f3e4" />
                  <rect x="260" y="122" width="186" height="100" fill="#e96940" />
                  <text x="280" y="173" fill="#fff6e6" fontFamily="Georgia" fontSize="26">
                    {kind === "blogs" ? "Field notes." : "Your story."}
                  </text>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      className="manuscript-line"
                      key={i}
                      x1="267"
                      x2={i % 2 ? "413" : "436"}
                      y1={252 + i * 25}
                      y2={252 + i * 25}
                      stroke="#bac3aa"
                      strokeWidth="3"
                    />
                  ))}
                </g>
                <text className="float-item" x="444" y="364" fontSize="80" fill="#e96940">
                  ✦
                </text>
              </>
            )}
          </g>
          <circle className="orbit-dot" cx="300" cy="62" r="6" fill="#e96940" />
          <circle className="orbit-dot" cx="300" cy="438" r="4" fill="#8b9d76" />
        </svg>
      )}
      <div className="page-art-bottom">
        <span>STORYPRINT STUDIO / {kind.toUpperCase().replaceAll("-", " ")}</span>
        <button
          aria-label={paused ? "Play hero animation" : "Pause hero animation"}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
          <span>{paused ? "PLAY" : "PAUSE"}</span>
        </button>
      </div>
    </div>
  );
}
export function PageHero({
  kind,
  eyebrow,
  title,
  accent,
  intro,
  contact = false,
}: {
  kind: HeroKind;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  contact?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".page-hero-copy > *", {
          opacity: 0,
          y: 25,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        });
      }, ref);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, [title]);
  return (
    <section ref={ref} className="container page-hero">
      <div className="page-hero-copy">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>
            {servicePages.find((service) => service.kind === kind)?.name ??
              { about: "About us", contact: "Contact us", blogs: "Blogs", services: "Services" }[
                kind as "about" | "contact" | "blogs" | "services"
              ]}
          </span>
        </div>
        <div className="eyebrow">
          <span className="dash" />
          {eyebrow}
        </div>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        <p>{intro}</p>
        <div className="page-hero-actions">
          <Link className="button" to="/contact" hash={contact ? "inquiry" : ""}>
            {contact ? "Tell us your story" : "Let’s talk about your book"}
            <ArrowUpRight size={17} />
          </Link>
          <a className="text-link" href="#explore">
            Explore this chapter <ArrowDown size={15} />
          </a>
        </div>
        <span className="hero-fineprint">INDEPENDENT THINKING. THOUGHTFUL CRAFT.</span>
      </div>
      <HeroArtwork kind={kind} />
    </section>
  );
}
