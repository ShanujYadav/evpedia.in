import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function TrendingSidebar({ articles }) {
  return (
    <aside className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.5)]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-black tracking-tight text-white">
          Trending Now
        </h2>
        <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#00b43e]">
        </span>
      </div>
      <div className="space-y-5">
        {articles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="flex gap-4 rounded-2xl border border-transparent p-3 transition hover:border-green-500/20 hover:bg-slate-800"
          >
            <span className="text-3xl font-black leading-none text-[#00b43e]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                {article.category}
              </p>
              <h3 className="mt-1 text-sm font-bold leading-6 text-white">
                {article.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {formatDate(article.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
