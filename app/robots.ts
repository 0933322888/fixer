import type { MetadataRoute } from "next";
import { resolveSiteUrl } from "@/lib/site-url";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = await resolveSiteUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
