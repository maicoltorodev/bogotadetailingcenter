"use client"

import Script from "next/script"
import { SITE_URL, getAbsoluteUrl } from "@/lib/config"

interface ServiceStructuredDataProps {
  name: string
  description: string
  serviceType: string
  areaServed?: string
  providerName?: string
  providerUrl?: string
}

/**
 * Service Structured Data (JSON-LD)
 * Ayuda a Google a entender los servicios ofrecidos y puede aparecer en rich snippets
 */
export function ServiceStructuredData({
  name,
  description,
  serviceType,
  areaServed = "Bogotá, Colombia",
  providerName = "Bogotá Detailing Center",
  providerUrl,
}: ServiceStructuredDataProps) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    provider: {
      "@type": "AutomotiveBusiness",
      name: providerName,
      url: providerUrl || SITE_URL,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
    />
  )
}

