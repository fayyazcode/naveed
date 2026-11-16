import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/ContentPages";
import { servicePages } from "@/content/services";
export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search["service"] === "string" && servicePages.some((s) => s.name === search["service"])
      ? { service: search["service"] }
      : {},
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us — StoryPrint Agency" },
      {
        name: "description",
        content:
          "Tell us about your book. Get in touch about writing, editing, illustration, marketing and publishing support.",
      },
    ],
  }),
});
function Contact() {
  const { service } = Route.useSearch();
  return <ContactPage {...(service ? { service } : {})} />;
}
