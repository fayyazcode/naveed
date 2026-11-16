import { useState, useRef, useEffect } from "react";
import { X, Send, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Placeholder contact number — replace with the agency's real number.
export const CONTACT_PHONE_DISPLAY = "+1 (555) 012-3456";
export const CONTACT_PHONE_LINK = "+15550123456";

type Message = { from: "bot" | "user"; text: string };

const GREETING: Message = {
  from: "bot",
  text: `Welcome to storyPrintagency! Tell us a little about your book and we'll point you in the right direction. You can also call us at ${CONTACT_PHONE_DISPLAY}.`,
};

function botReply(text: string): string {
  const t = text.toLowerCase();
  if (/(price|cost|rate|discount|quote|charge)/.test(t)) {
    return "Pricing depends on the length and scope of your project. Request a quote below and we'll send a detailed, fixed-price proposal within 24 hours.";
  }
  if (/(time|long|deadline|fast|week|month)/.test(t)) {
    return "A full manuscript typically takes 12 to 20 weeks. Single services such as editing or cover design usually run two to four weeks.";
  }
  if (/(call|phone|talk|speak|number)/.test(t)) {
    return `Happy to talk it through! Call us at ${CONTACT_PHONE_DISPLAY} and a project manager will pick up during business hours.`;
  }
  if (/(publish|amazon|kdp|platform)/.test(t)) {
    return "We publish across Amazon KDP, Apple Books, Kobo, Barnes & Noble, Google Play and more — your book, every major retailer.";
  }
  if (/(hi|hello|hey|salam)/.test(t)) {
    return "Hello! What kind of book are you working on?";
  }
  return "Thanks for reaching out! A project manager will follow up shortly. In the meantime, request a quote below or give us a call for an instant answer.";
}

type ChatWidgetProps = {
  open: boolean;
  onClose: () => void;
};

export function ChatWidget({ open, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  if (!open) return null;

  function handleSend() {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setDraft("");
    const reply = botReply(text);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 600);
  }

  return (
    <div
      role="dialog"
      aria-label="Chat with storyPrintagency"
      className="fixed bottom-4 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border shadow-2xl shadow-foreground/20"
    >
      <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cream opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cream" />
          </span>
          <div>
            <p className="text-sm font-semibold leading-tight">Chat with us</p>
            <p className="text-[11px] text-primary-foreground/75 leading-tight">Typically replies in minutes</p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Close chat"
          onClick={onClose}
          className="inline-flex size-8 items-center justify-center rounded-lg text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors"
        >
          <X className="size-4" />
        </button>
      </div>

      <div ref={scrollRef} className="max-h-72 min-h-40 flex-1 space-y-3 overflow-y-auto bg-background px-4 py-4">
        {messages.map((message, index) => (
          <div key={index} className={message.from === "user" ? "flex justify-end" : "flex justify-start"}>
            <p
              className={
                message.from === "user"
                  ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground"
                  : "max-w-[85%] rounded-2xl rounded-bl-sm bg-card px-3.5 py-2 text-sm text-ink ring-1 ring-border"
              }
            >
              {message.text}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-border bg-card px-3 py-3">
        <form
          className="flex items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            handleSend();
          }}
        >
          <Input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Type your message…"
            aria-label="Type your message"
            className="flex-1"
          />
          <Button type="submit" size="icon" aria-label="Send message" className="shrink-0">
            <Send className="size-4" />
          </Button>
        </form>
        <a
          href={`tel:${CONTACT_PHONE_LINK}`}
          className="mt-2 flex items-center justify-center gap-1.5 text-xs font-medium text-ink-soft hover:text-ink transition-colors"
        >
          <Phone className="size-3.5" />
          Prefer to talk? Call {CONTACT_PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
