import fs from "node:fs/promises";
import path from "node:path";
import { getHmac, slugify } from "@/lib/utils";

const dataFile = path.join(process.cwd(), "data", "news.json");

function normalizeArticle(item = {}) {
  const body = item.body ?? item.content ?? item.description ?? "";
  const publishedAt = item.publishedAt ?? item.createdAt ?? item.updatedAt ?? new Date().toISOString();

  return {
    ...item,
    image: item.image ?? item.imageUrl ?? "/banner.jpg",
    imageUrl: item.imageUrl ?? item.image ?? "/banner.jpg",
    body,
    content: item.content ?? body,
    description: item.description ?? body.slice(0, 160),
    publishedAt,
    featured: Boolean(item.featured),
  };
}

async function readNewsFile() {
  const raw = await fs.readFile(dataFile, "utf8");
  return JSON.parse(raw).map(normalizeArticle);
}

async function writeNewsFile(items) {
  await fs.writeFile(dataFile, JSON.stringify(items, null, 2));
}



export async function getAllNews() {

  const items = await getNewsList();

  return items.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getNewsList() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/public/post-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        reqHmac: getHmac(),
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`News list request failed with ${response.status}`);
    }

    const result = await response.json();

    const items = Array.isArray(result.data) ? result.data : [];
    return items.map(normalizeArticle);

  } catch (error) {
    console.error("getNewsList error:", error);
    return readNewsFile();
  }
}

export async function getFeaturedNews() {
  const items = await getAllNews();
  return items.filter((item) => item.featured).slice(0, 3);
}

export async function getTrendingNews(limit = 4) {
  const items = await getAllNews();
  return items.slice(0, limit);
}

// export async function getNewsBySlug(slug) {
//   const items = await getAllNews();
//   return items.find((item) => item.slug === slug) ?? null;
// }
export async function getNewsBySlug(slug) {
  try {
    const hmac = getHmac();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/public/post-details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          reqHmac: hmac,
        },
        body: JSON.stringify({ slug }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`News detail request failed with ${response.status}`);
    }

    const result = await response.json();

    if (result.code === "000") {
      return normalizeArticle(result.data);
    }

    throw new Error(result.message || "API returned an error");
  } catch (error) {
    console.error("getNewsBySlug error:", error);
    const items = await readNewsFile();
    return items.find((item) => item.slug === slug) ?? null;
  }
}

export async function createNewsArticle(payload) {
  const items = await getAllNews();
  const baseSlug = slugify(payload.title);

  if (!baseSlug) {
    throw new Error("A valid title is required to generate a slug.");
  }

  let slug = baseSlug;
  let counter = 1;

  while (items.some((item) => item.slug === slug)) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  // For the demo, the submitted description also acts as the full article body.
  const article = {
    slug,
    title: payload.title.trim(),
    description: payload.description.trim(),
    content: payload.description.trim(),
    imageUrl: payload.imageUrl.trim(),
    category: payload.category?.trim() || "General",
    publishedAt: new Date().toISOString(),
    featured: items.length < 3
  };

  const updated = [article, ...items];
  await writeNewsFile(updated);
  return article;
}
