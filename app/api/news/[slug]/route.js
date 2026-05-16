import { NextResponse } from "next/server";
import { getNewsBySlug } from "@/lib/news";

export async function GET(_request, { params }) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    return NextResponse.json({ error: "Article not found." }, { status: 404 });
  }

  return NextResponse.json({ article });
}
