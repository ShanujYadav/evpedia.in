"use client";

import { useMemo, useState } from "react";
import NewsGrid from "@/components/NewsGrid";

const PAGE_SIZE = 6;

export default function NewsExplorer({ articles }) {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return articles;
    }

    return articles.filter((article) =>
      [article.title, article.description, article.category]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [articles, query]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="space-y-8">
      {/* <div className="rounded-[28px] border border-white/10 bg-slate-900 p-5 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.55)]">
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setVisibleCount(PAGE_SIZE);
          }}
          placeholder="Search news by keyword or category"
          className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#00b43e]"
        />
      </div> */}
      {visibleArticles.length ? (
        <NewsGrid articles={visibleArticles} />
      ) : (
        <div className="rounded-[28px] border border-dashed border-white/10 px-6 py-12 text-center text-sm text-slate-400">
          No stories match your search.
        </div>
      )}
      {visibleCount < filteredArticles.length ? (
        <div className="text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="rounded-full bg-[#00b43e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#009735]"
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}
