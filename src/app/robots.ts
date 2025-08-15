import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = process.env.BASE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/private/"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
