import type { MetadataRoute } from "next";
import { BLOGS } from "@/app/blog/constants";
import { siteConfig } from "@/lib/site";
import { getAllPackagePaths } from "@/lib/packages";
import { getAllGameSlugs } from "@/lib/games";

const packageCategorySlugs = ["1-day", "2d1n", "3d2n"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const blogLastModified = BLOGS.reduce(
    (latest, p) => {
      const t = new Date(p.date).getTime();
      return t > latest.getTime() ? new Date(p.date) : latest;
    },
    new Date(BLOGS[0]?.date ?? Date.now()),
  );

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/paket-outbound`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  const packageCategoryPages: MetadataRoute.Sitemap = packageCategorySlugs.map(
    (slug) => ({
      url: `${baseUrl}/paket-outbound/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const packageDetailPages: MetadataRoute.Sitemap = getAllPackagePaths().map(
    ({ category, slug }) => ({
      url: `${baseUrl}/paket-outbound/${category}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const packagePages: MetadataRoute.Sitemap = [
    ...packageCategoryPages,
    ...packageDetailPages,
  ];

  const blogPages: MetadataRoute.Sitemap = BLOGS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const gamePages: MetadataRoute.Sitemap = getAllGameSlugs().map((slug) => ({
    url: `${baseUrl}/games/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  return [...staticPages, ...packagePages, ...blogPages, ...gamePages];
}
