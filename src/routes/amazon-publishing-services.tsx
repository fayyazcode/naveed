import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ContentPages";
import { servicePages } from "@/content/services";
const service = servicePages.find((s) => s.slug === "amazon-publishing-services")!;
export const Route = createFileRoute("/amazon-publishing-services")({
  component: () => <ServicePage service={service} />,
  head: () => ({
    meta: [
      { title: service.name + " — StoryPrint Agency" },
      { name: "description", content: service.intro },
    ],
  }),
});
