import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { absoluteUrl } from "@/lib/utils";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

const shareLinks = (slug, title) => {
  const url = encodeURIComponent(absoluteUrl(`/news/${slug}`));
  const text = encodeURIComponent(title);

  return [
    {
      href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      icon: Twitter,
      label: "X"
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: Facebook,
      label: "Facebook"
    },
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
      icon: Linkedin,
      label: "LinkedIn"
    }
  ];
};

export default async function ArticleLayout({ article }) {

  return (
    <article className="w-full px-6 lg:px-12 xl:px-16 py-12">

      {/* Back Button */}
      <Link
        href="/news"
        className="inline-flex rounded-full border px-4 py-2 text-sm font-semibold border-[#00b43e] text-[#00b43e]"
      >
        Back to News
      </Link>

      <div className="mt-8 grid gap-x-12 gap-y-10 lg:grid-cols-[70%_30%]">

        {/* LEFT CONTENT */}
        <div>

          {/* Heading */}
          <div className="space-y-6">

            <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl leading-tight">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-xl text-slate-500 leading-8">
                {article.excerpt}
              </p>
            )}

          </div>

          {/* Hero Image */}
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

          {/* Article Content */}
        <div className="mt-10">

  <article
    className="
      prose
      prose-lg
      max-w-none

      !text-slate-800

      prose-headings:!text-black
      prose-headings:!font-black

      prose-h1:!text-black
      prose-h2:!text-black
      prose-h3:!text-black
      prose-h4:!text-black

      prose-p:!text-slate-800
      prose-p:leading-9

      prose-strong:!text-black

      prose-li:!text-slate-800

      prose-ul:!text-slate-800
      prose-ol:!text-slate-800

      prose-blockquote:!text-slate-700

      prose-a:!text-[#00b43e]

      prose-code:!text-black

      prose-pre:!bg-slate-900
      prose-pre:!text-white
    "
  >

<ReactMarkdown
  remarkPlugins={[remarkGfm, remarkBreaks]}
  components={{
    h1: ({ children }) => (
      <h1 className="text-5xl font-black text-black mt-10 mb-6">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-3xl font-black text-black mt-10 mb-5">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-black mt-8 mb-4">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="text-slate-700 text-lg leading-9 mb-6">
        {children}
      </p>
    ),

    li: ({ children }) => (
      <li className="text-slate-700 text-lg leading-8 mb-2">
        {children}
      </li>
    ),

    strong: ({ children }) => (
      <strong className="font-bold text-black">
        {children}
      </strong>
    ),
  }}
>
  {article.content}
</ReactMarkdown>

  </article>

</div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="h-fit sticky top-24">

          {/* Share Box */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">

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
                  className="
                    flex items-center gap-3 rounded-2xl 
                    border border-slate-200 
                    px-4 py-3 text-sm font-semibold 
                    text-slate-700 transition 
                    hover:border-[#00b43e] 
                    hover:text-[#00b43e]
                  "
                >

                  <item.icon className="h-4 w-4" />

                  {item.label}

                </a>

              ))}

            </div>

          </div>

        </div>

      </div>

    </article>
  );
}
