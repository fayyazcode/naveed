import { createFileRoute } from "@tanstack/react-router";
import { BlogsPage } from "@/components/JournalPages";
export const Route = createFileRoute("/blogs/")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "The Journal — StoryPrint Agency" },
      {
        name: "description",
        content:
          "Practical guides on writing, editing and publishing. Notes from the StoryPrint editorial desk.",
      },
    ],
  }),
});
