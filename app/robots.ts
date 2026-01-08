import { SITE_URL } from "@/lib/config"
import type { MetadataRoute } from "next"

/**
 * robots.txt generado dinámicamente
 * Controla qué páginas pueden ser indexadas por los motores de búsqueda
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // APIs no deben ser indexadas
          "/_next/", // Archivos internos de Next.js
          "/admin/", // Si hay panel de admin (futuro)
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

