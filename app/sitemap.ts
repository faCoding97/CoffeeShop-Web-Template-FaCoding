// Next.js metadata route for sitemap.xml
import { type MetadataRoute } from "next";
import { data } from "@/lib/data";
import { getMenuCategoryRoutes } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = data.siteUrl || "https://coffee.elixflare.com";
  const staticRoutes = ["", "/menu", "/about", "/contact"].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8
  }));
  const categoryRoutes = getMenuCategoryRoutes().map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7
  }));
  return [...staticRoutes, ...categoryRoutes];
}