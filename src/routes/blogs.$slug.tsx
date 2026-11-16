import { createFileRoute, notFound } from "@tanstack/react-router";
import { articles } from "@/content/articles";
import { ArticlePage } from "@/components/JournalPages";
export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  component: Article,
  head: ({ loaderData }) => ({
    meta: [
      { title: (loaderData?.title ?? "Journal") + " — StoryPrint Agency" },
      { name: "description", content: loaderData?.excerpt ?? "Notes for your next chapter." },
    ],
  }),
});
function Article() {
  const article = Route.useLoaderData();
  return <ArticlePage article={article} />;
}
