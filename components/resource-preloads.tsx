"use client"

import { useEffect } from "react"

/**
 * ResourcePreloads - Componente para preload y preconnect de recursos críticos
 * Agrega preloads y preconnects dinámicamente al head para mejorar LCP y reducir latencia de red
 */
export function ResourcePreloads() {
  useEffect(() => {
    // Preconnect para recursos externos críticos - establece conexión temprano
    // Esto reduce la latencia cuando se hacen las primeras solicitudes
    const preconnectOrigins = [
      "https://fonts.googleapis.com", // Google Fonts API
      "https://fonts.gstatic.com", // Google Fonts estáticos
      "https://vitals.vercel-insights.com", // Vercel Analytics
    ]

    preconnectOrigins.forEach((origin) => {
      const link = document.createElement("link")
      link.rel = "preconnect"
      link.href = origin
      // Sólo establecer crossOrigin cuando es necesario, evitando asignar undefined
      if (origin.includes("fonts.gstatic.com")) {
        link.crossOrigin = "anonymous"
      }
      document.head.appendChild(link)
    })

    // DNS prefetch como fallback para recursos menos críticos
    const dnsPrefetchOrigins = [
      "https://vitals.vercel-insights.com",
    ]

    dnsPrefetchOrigins.forEach((origin) => {
      const link = document.createElement("link")
      link.rel = "dns-prefetch"
      link.href = origin
      document.head.appendChild(link)
    })

    // Preload recursos críticos para mejorar LCP
    const resources = [
      { href: "/images/logo.png", as: "image", type: "image/png" },
      { href: "/images/mustang.png", as: "image", type: "image/png" },
      { href: "/images/porsche.png", as: "image", type: "image/png" },
    ]

    resources.forEach((resource) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href = resource.href
      link.as = resource.as
      link.type = resource.type
      link.setAttribute("fetchpriority", "high")
      document.head.appendChild(link)
    })

    // Cleanup (aunque en producción no es crítico)
    return () => {
      resources.forEach((resource) => {
        const existingLink = document.querySelector(
          `link[rel="preload"][href="${resource.href}"]`
        )
        if (existingLink) {
          document.head.removeChild(existingLink)
        }
      })
      
      preconnectOrigins.forEach((origin) => {
        const existingLink = document.querySelector(
          `link[rel="preconnect"][href="${origin}"]`
        )
        if (existingLink) {
          document.head.removeChild(existingLink)
        }
      })

      dnsPrefetchOrigins.forEach((origin) => {
        const existingLink = document.querySelector(
          `link[rel="dns-prefetch"][href="${origin}"]`
        )
        if (existingLink) {
          document.head.removeChild(existingLink)
        }
      })
    }
  }, [])

  return null
}
