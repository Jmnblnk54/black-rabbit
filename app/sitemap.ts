import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { posts } from "@/lib/journal";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "/",
    "/weddings",
    "/weddings/films",
    "/weddings/pricing",
    "/brand",
    "/events",
    "/about",
    "/journal",
    "/tampa-wedding-videographer",
    "/book",
    "/inquire",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency:
      path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority:
      path === "/" || path === "/weddings"
        ? 1.0
        : path === "/tampa-wedding-videographer"
          ? 0.9
          : 0.7,
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${base}/${c.vertical}/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...postRoutes];
}
