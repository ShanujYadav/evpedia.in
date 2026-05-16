import Link from "next/link";
import NewsGrid from "@/components/NewsGrid";
import { getNewsList } from "@/lib/news";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const news = await getNewsList();

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-10 xl:px-16 py-12">
      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00b43e]">
              Fresh Coverage
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-black">
              Headlines built for fast reading
            </h2>
          </div>
          <Link
            href="/news"
            className="rounded-full border px-5 py-2.5 text-sm font-semibold text-black transition border-[#00b43e] hover:text-[#00b43e]"
          >
            View all news
          </Link>
        </div>
        <NewsGrid articles={news.slice(0, 16)} />
      </section>
    </div>
  );
}
