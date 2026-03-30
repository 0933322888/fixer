import { headers } from "next/headers";
import { resolveStaticSiteOrigin } from "./canonical-site";

/**
 * Canonical site origin for sitemap and robots.txt.
 * Prefer SITE_URL or NEXT_PUBLIC_SITE_URL when set (see VPS / Hostinger docs).
 * Otherwise use resolveStaticSiteOrigin() (production default host) or the incoming Host
 * and X-Forwarded-Proto (local dev behind Nginx, etc.).
 */
export async function resolveSiteUrl(): Promise<string> {
  const staticOrigin = resolveStaticSiteOrigin();
  if (staticOrigin) return staticOrigin.replace(/\/$/, "");

  const h = await headers();
  const host = (h.get("x-forwarded-host") ?? h.get("host"))?.split(",")[0]?.trim();
  if (host) {
    const proto =
      h.get("x-forwarded-proto")?.split(",")[0]?.trim() ??
      (process.env.NODE_ENV === "production" ? "https" : "http");
    return `${proto}://${host}`.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}
