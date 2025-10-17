// app/sitemap.ts
import { type MetadataRoute } from "next";
import { data } from "@/lib/data";
import { getMenuCategoryRoutes } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = data.siteUrl || "https://coffee.elixflare.com";

  // Annotate arrays + keep string literals as literals
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/menu",
    "/about",
    "/contact",
  ].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = getMenuCategoryRoutes().map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...categoryRoutes];
}
