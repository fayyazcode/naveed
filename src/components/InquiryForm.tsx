import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { servicePages } from "@/content/services";
export function InquiryForm({ defaultService = "" }: { defaultService?: string }) {
  const [draft, setDraft] = useState("");
  return (
    <form
      className="inquiry-form full-inquiry"
      onChange={() => setDraft("")}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = `Hello StoryPrint Agency,\n\nMy name is ${String(data.get("name")).trim()}.\nEmail: ${data.get("email")}\nInterested in: ${data.get("service")}\nProject stage: ${data.get("stage")}\n\n${String(data.get("message")).trim()}\n\nPreferred timing: ${data.get("timing") || "To be discussed"}`;
        setDraft(
          `mailto:hello@storyprintagency.com?subject=${encodeURIComponent("My next chapter — " + data.get("service"))}&body=${encodeURIComponent(body)}`,
        );
      }}
    >
      <span className="eyebrow">A LITTLE ABOUT YOU. A LOT OF POSSIBILITY.</span>
      <h3>Let’s hear your story.</h3>
      <div className="form-row">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input
            name="name"
            placeholder="Alex Morgan"
            required
            minLength={2}
            maxLength={100}
            pattern={".*\\S.*"}
            autoComplete="name"
          />
        </label>
        <label>
          Email address <span aria-hidden="true">*</span>
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            placeholder="alex@example.com"
            autoComplete="email"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          How can we help? <span aria-hidden="true">*</span>
          <select name="service" defaultValue={defaultService} required>
            <option value="" disabled>
              Select a service
            </option>
            {servicePages.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>I’m not sure yet</option>
          </select>
        </label>
        <label>
          Where are you in the journey?
          <select name="stage" defaultValue="An idea I’d love to explore">
            <option>An idea I’d love to explore</option>
            <option>An outline or partial draft</option>
            <option>A completed manuscript</option>
            <option>A published book</option>
          </select>
        </label>
      </div>
      <label>
        Tell us about your project <span aria-hidden="true">*</span>
        <textarea
          name="message"
          placeholder="What are you writing? Who is it for? What would you love help with?"
          required
          minLength={15}
          maxLength={4000}
          rows={5}
        />
      </label>
      <label>
        Do you have a timeline in mind? <span className="optional">Optional</span>
        <input
          name="timing"
          placeholder="I’m exploring, or hoping to publish next spring…"
          maxLength={150}
        />
      </label>
      <label className="consent-label">
        <input type="checkbox" required name="consent" />
        <span>
          I agree to share these details by email so StoryPrint Agency can respond to my inquiry.
        </span>
      </label>
      <button type="submit" className="button">
        Prepare my inquiry <ArrowUpRight size={18} />
      </button>
      {draft && (
        <div className="prepared-inquiry">
          <p role="status">
            <Check size={16} /> Your message is ready. Send it from your email app to complete your
            inquiry.
          </p>
          <a className="email-send-link" href={draft}>
            Open email app to send <ArrowUpRight size={17} />
          </a>
        </div>
      )}
      <p className="form-note">
        Required fields are marked *. This form prepares an email; it does not submit or store your
        details. If you don’t use an email app, write directly to hello@storyprintagency.com.
      </p>
    </form>
  );
}
