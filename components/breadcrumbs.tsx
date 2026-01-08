"use client"

import Script from "next/script"
import { SITE_URL, getAbsoluteUrl } from "@/lib/config"
import Link from "next/link"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

/**
 * Breadcrumbs Component con Structured Data
 * Mejora la navegación y ayuda a Google a entender la estructura del sitio
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Agregar página de inicio siempre al principio
  const allItems = [
    { name: "Inicio", url: SITE_URL },
    ...items,
  ]

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-400">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-neutral-600">/</span>}
              {index === allItems.length - 1 ? (
                <span className="text-neutral-300 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url === SITE_URL ? "/" : item.url.replace(SITE_URL, "")}
                  className="hover:text-amber-500 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

