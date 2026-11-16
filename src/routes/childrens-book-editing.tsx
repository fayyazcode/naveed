import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ContentPages";
import { servicePages } from "@/content/services";
const service = servicePages.find((s) => s.slug === "childrens-book-editing")!;
export const Route = createFileRoute("/childrens-book-editing")({
  component: () => <ServicePage service={service} />,
  head: () => ({
    meta: [
      { title: service.name + " — StoryPrint Agency" },
      { name: "description", content: service.intro },
    ],
  }),
});
