// Purpose: This file generates the site's robots.txt, allowing crawlers and pointing them to the sitemap.
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
