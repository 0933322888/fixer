import { headers } from "next/headers";

function siteUrlFromEnv(): string | undefined {
  const pub = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (pub) return pub.replace(/\/$/, "");

  const site = process.env.SITE_URL?.trim();
  if (site) return site.replace(/\/$/, "");

  return undefined;
}

/**
 * Canonical site origin for sitemap and robots.txt.
 * Prefer SITE_URL or NEXT_PUBLIC_SITE_URL when set (see VPS / Hostinger docs).
 * Otherwise use the incoming Host and X-Forwarded-Proto (typical behind Nginx).
 */
export async function resolveSiteUrl(): Promise<string> {
  const envUrl = siteUrlFromEnv();
  if (envUrl) return envUrl;

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
