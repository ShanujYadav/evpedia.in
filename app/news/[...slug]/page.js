import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { getNewsBySlug } from "@/lib/news";
import { excerpt } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const fullSlug = slug.join("/");
  const article = await getNewsBySlug(fullSlug);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: article.title,
    description: excerpt(article.body, 155),
    openGraph: {
      title: article.title,
      description: excerpt(article.body, 155),
      type: "article",
      // url: absoluteUrl(`/news/${article.slug}`),
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: excerpt(article.body, 155),
      images: [article.image],
    },
  };
}


// ✅ Page
export default async function ArticlePage({ params }) {
  const { slug: slugArray } = await params;
  const slug = slugArray.join("/");

  const article = await getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleLayout article={article} />;
}

