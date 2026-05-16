import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function NewsCard({ article }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block h-full">
      <article className="h-full flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1.5">

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 space-y-4 p-6">

          <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
            <span className="rounded-full bg-green-500/15 px-3 py-1 font-semibold text-[#00b43e]">
              {article.category}
            </span>
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-black tracking-tight text-white transition group-hover:underline line-clamp-2">
              {article.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300 line-clamp-3">
              {article.description}
            </p>
          </div>

        </div>
      </article>
    </Link>
  );
}
