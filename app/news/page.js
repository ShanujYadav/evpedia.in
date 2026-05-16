import NewsExplorer from "@/components/NewsExplorer";
import { getNewsList } from "@/lib/news";

export const metadata = {
  title: "News",
  description: "Browse all published stories on EVpedia News."
};

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const articles = await getNewsList();

  return (
    <>
      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-10 xl:px-16 py-10">
        <div className="w-full">
          <NewsExplorer articles={articles} />
        </div>
      </div>
    </>
  );
}
