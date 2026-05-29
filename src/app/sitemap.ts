import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

const routes = ["/", "/services", "/our-work", "/about", "/get-a-quote"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "monthly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
