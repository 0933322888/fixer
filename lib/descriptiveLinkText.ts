/** Accessible / SEO-friendly anchor text for internal links (avoid generic "Learn more"). */

const BLOG_LABELS: Record<string, string> = {
  "/blog/repair-vs-replace-appliance": "When to repair or replace an appliance",
};

export function descriptiveLinkText(href: string): string {
  const path = href.split("?")[0].split("#")[0];
  if (BLOG_LABELS[path]) return BLOG_LABELS[path];

  const segments = path.split("/").filter(Boolean);
  const slug = segments[segments.length - 1] ?? "";
  if (!slug) return "Related page";

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
