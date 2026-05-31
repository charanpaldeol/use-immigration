// Purpose: POST handler to ping IndexNow after content updates (optional INDEXNOW_SECRET).
import { NextResponse } from "next/server";
import { submitIndexNow } from "@/lib/indexnow";

export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  let urls: string[] | undefined;
  try {
    const body = (await request.json()) as { urls?: string[] };
    if (body.urls?.length) {
      urls = body.urls;
    }
  } catch {
    // empty body → default URL list
  }

  try {
    const results = await submitIndexNow(urls);
    return NextResponse.json({ ok: results.every((r) => r.ok), results });
  } catch (error) {
    const message = error instanceof Error ? error.message : "IndexNow failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
