import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/ContentPages";
export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services — StoryPrint Agency" },
      {
        name: "description",
        content:
          "Thoughtful writing, editing, design and publishing support. Your voice, your book, your next chapter.",
      },
    ],
  }),
});
