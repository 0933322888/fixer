/** Canonical site origin (no trailing slash). Used for metadata, sitemap, and host redirects. */

const FALLBACK_PRODUCTION_ORIGIN = "https://fixerappliancerepair.ca";

function originFromEnv(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || process.env.SITE_URL?.trim();
  if (!raw) return undefined;
  try {
    const u = new URL(raw);
    return `${u.protocol}//${u.host}`;
  } catch {
    return undefined;
  }
}

/**
 * When set (env or production fallback), all public URLs and redirects use this origin.
 * In local dev without env, returns "" so middleware skips host redirects and sitemap uses the request host.
 */
export function resolveStaticSiteOrigin(): string {
  const fromEnv = originFromEnv();
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV !== "production") return "";
  return FALLBACK_PRODUCTION_ORIGIN;
}

export function getCanonicalHostname(): string {
  const o = resolveStaticSiteOrigin();
  if (!o) return "";
  try {
    return new URL(o).hostname.toLowerCase();
  } catch {
    return "";
  }
}

/** Same registrable host (handles www vs non-www only). */
export function canonicalHostRedirectTarget(
  requestHostname: string,
  canonicalHostname: string
): string | null {
  const req = requestHostname.split(":")[0].toLowerCase();
  const canon = canonicalHostname.toLowerCase();
  if (req === canon) return null;
  const strip = (h: string) => (h.startsWith("www.") ? h.slice(4) : h);
  if (strip(req) !== strip(canon)) return null;
  return canon;
}
