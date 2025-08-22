import type { MetadataRoute } from "next";
import { env } from "@/env";

export default function robots(): MetadataRoute.Robots {
  const baseURL = env.BASE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/anixplorer"],
        disallow: ["/private/"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
