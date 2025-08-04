import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "(you website url)",
      lastModified: new Date(),
    },
    {
      url: "(you website url)/about",
      lastModified: new Date(),
    },
    {
      url: "(you website url)/blog",
      lastModified: new Date(),
    },
  ];
}
