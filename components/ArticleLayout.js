import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { absoluteUrl } from "@/lib/utils";

const shareLinks = (slug, title) => {
  const url = encodeURIComponent(absoluteUrl(`/news/${slug}`));
  const text = encodeURIComponent(title);

  return [
    { href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`, icon: Twitter, label: "X" },
    { href: `https://www.facebook.com/sharer/sharer.php?u=${url}`, icon: Facebook, label: "Facebook" },
    { href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`, icon: Linkedin, label: "LinkedIn" }
  ];
};

export default async function ArticleLayout({ article }) {
  return (
    <article className="w-full px-6 lg:px-12 xl:px-16 py-12">
      <Link
        href="/news"
        className="inline-flex rounded-full border px-4 py-2 text-sm font-semibold border-[#00b43e] text-[#00b43e]"
      >
        Back to News
      </Link>
      <div className="mt-8 grid gap-x-12 gap-y-10 lg:grid-cols-[70%_30%]">
        <div>
          <div className="space-y-6">
            <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl">
              {article.title}
            </h1>
          </div>
          <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-[32px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="mt-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-green-500/15 px-4 py-1.5 font-semibold text-[#00b43e]">
                {article.category}
              </span>
              <time className="text-slate-400" dateTime={article.publishedAt}>
                {/* {formatDate(article.publishedAt)} */}
              </time>
            </div>
            {article.body.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="text-lg leading-9 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="h-fit sticky top-24">
          {/* <TrendingSidebar articles={articles} /> */}

          {/* <div className="rounded-[28px] border border-white/10 bg-slate-900 p-5">
            <h2 className="text-sm font-black uppercase tracking-[0.28em] text-slate-400">
              Share
            </h2>
            <div className="mt-4 space-y-3">
              {shareLinks(article.slug, article.title).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#00b43e] hover:text-[#00b43e]"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ))} 
            </div>
          </div> */}
        </div>

      </div>
    </article>
  );
}
