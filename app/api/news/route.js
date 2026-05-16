import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createNewsArticle, getAllNews } from "@/lib/news";

export async function GET() {
  const articles = await getAllNews();
  return NextResponse.json({ articles });
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.title || !body.description || !body.imageUrl) {
      return NextResponse.json(
        { error: "Title, description, and image URL are required." },
        { status: 400 }
      );
    }

    const article = await createNewsArticle(body);

    revalidatePath("/");
    revalidatePath("/news");
    revalidatePath(`/news/${article.slug}`);

    return NextResponse.json({ article }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to create article." },
      { status: 500 }
    );
  }
}
