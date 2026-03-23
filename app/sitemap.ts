import { MetadataRoute } from "next";
import path from "path";

const baseUrl = "https://irebar-ai.vercel.app";

// Central route config (easy to scale)
const staticRoutes = [
  {
    path: "",
    priority: 1,
  },
  {
    path: "/contact",
    priority: 0.8,
  },
  {
    path: "/pricing",
    priority: 0.8,
  },
  {
    path: "/what-we-do",
    priority: 0.8,
  },
  {
    path: '/who-we-are',
    priority: 0.8,
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));

  // Future dynamic pages (example)
  // const dynamicPages = fetch from DB/CMS later

  return [...staticPages];
}