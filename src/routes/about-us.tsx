import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/ContentPages";
export const Route = createFileRoute("/about-us")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — StoryPrint Agency" },
      {
        name: "description",
        content:
          "Thoughtful writing, editing, design and publishing support. Your voice, your book, your next chapter.",
      },
    ],
  }),
});
