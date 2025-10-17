// Next.js metadata route for robots.txt
import { type MetadataRoute } from "next";
import { data } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  const host = data.siteUrl || "https://coffee.elixflare.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
