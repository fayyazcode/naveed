import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ContentPages";
import { servicePages } from "@/content/services";
const service = servicePages.find((s) => s.slug === "book-editing")!;
export const Route = createFileRoute("/book-editing")({
  component: () => <ServicePage service={service} />,
  head: () => ({
    meta: [
      { title: service.name + " — StoryPrint Agency" },
      { name: "description", content: service.intro },
    ],
  }),
});
