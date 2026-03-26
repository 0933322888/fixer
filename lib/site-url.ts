/**
 * Canonical site origin for sitemap and robots.txt.
 * On Hostinger (or any Node host), set one of these in your server environment:
 * - SITE_URL — server-only (recommended), e.g. https://yourdomain.com
 * - NEXT_PUBLIC_SITE_URL — same value if you already use it elsewhere
 */
export function getSiteUrl(): string {
  const pub = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (pub) return pub.replace(/\/$/, "");

  const site = process.env.SITE_URL?.trim();
  if (site) return site.replace(/\/$/, "");

  return "http://localhost:3000";
}
