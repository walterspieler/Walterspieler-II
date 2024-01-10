import { MetadataRoute } from "next";

import { getSortedPostsData } from "lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const languages = ["fr", "en"];
  const map: MetadataRoute.Sitemap = [];
  const posts = await getSortedPostsData();
  languages.forEach((lang) => {
    const postMap: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `https://www.walterspieler.com/${lang}/blog/${post.id}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    }));
    map.push(
      {
        url: `https://www.walterspieler.com/${lang}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `https://www.walterspieler.com/${lang}/work`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `https://www.walterspieler.com/${lang}/blog`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      ...postMap
    );
  });
  return map;
}
