import { NextResponse } from "next/server";
import { resolveSiteUrl } from "@/lib/site-url";

export const dynamic = "force-dynamic";

export async function GET() {
  const base = await resolveSiteUrl();
  const body = [
    "User-Agent: *",
    "Allow: /",
    "Allow: /favicon.ico",
    "",
    `Sitemap: ${base}/sitemap.xml`,
    "",
  ].join("\n");

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
