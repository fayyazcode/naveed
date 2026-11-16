import { Link } from "@tanstack/react-router";

interface LogoProps {
  variant?: "dark" | "light";
  showMark?: boolean;
  className?: string;
}

export function Logo({ variant = "dark", showMark = true, className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      to="/"
      aria-label="storyPrint agency home"
      className={`inline-flex w-fit flex-col items-center leading-none ${className}`}
    >
      {showMark && (
        <svg viewBox="0 0 64 40" className="h-8 w-auto" fill="none" aria-hidden="true">
          {/* Quill */}
          <path
            d="M40 2c-8 2-14 9-16 20l3 1c2-9 7-15 13-21z"
            className="fill-gold"
          />
          <path d="M26 22l-2 6" className="stroke-gold" strokeWidth="1.5" strokeLinecap="round" />
          {/* Stars */}
          <circle cx="16" cy="12" r="1.3" className="fill-gold" />
          <circle cx="48" cy="10" r="1.3" className="fill-gold" />
          <circle cx="52" cy="18" r="1" className="fill-gold" />
          {/* Open book */}
          <path
            d="M6 26c9-3 18-2 26 3 8-5 17-6 26-3v10c-9-3-18-2-26 3-8-5-17-6-26-3V26z"
            className={isLight ? "fill-cream/90" : "fill-primary"}
          />
          <path d="M32 29v10" className={isLight ? "stroke-ink" : "stroke-cream"} strokeWidth="1.2" />
        </svg>
      )}
      <span
        className={`font-script text-2xl font-bold -mt-0.5 ${isLight ? "text-cream" : "text-primary"}`}
      >
        storyPrint
      </span>
      <span
        className={`text-[8px] font-bold uppercase tracking-[0.35em] ${
          isLight ? "text-gold" : "text-gold"
        }`}
      >
        agency
      </span>
    </Link>
  );
}
