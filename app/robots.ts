import type { MetadataRoute } from "next"

const host = "https://priboy1.ru"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  }
}
