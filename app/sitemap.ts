import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const APP_DIR = path.join(process.cwd(), "app");

function collectPageRoutes(dir: string, segments: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const ent of entries) {
    const name = ent.name;
    if (name === "api") continue;
    if (name.startsWith("_") || name.startsWith("(") || name.startsWith("."))
      continue;

    const full = path.join(dir, name);
    if (ent.isDirectory()) {
      routes.push(...collectPageRoutes(full, [...segments, name]));
    } else if (ent.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(name)) {
      const route = segments.length === 0 ? "/" : `/${segments.join("/")}`;
      routes.push(route);
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = Array.from(new Set(collectPageRoutes(APP_DIR))).sort();

  return paths.map((pathname) => ({
    url: pathname === "/" ? base : `${base}${pathname}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: pathname === "/" ? 1 : 0.7,
  }));
}
