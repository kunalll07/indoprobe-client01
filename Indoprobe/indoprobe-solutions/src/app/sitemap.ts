import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/utils";

const routes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/experts",
  "/confidentiality",
  "/insights",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
