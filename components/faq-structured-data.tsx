"use client"

import Script from "next/script"
import { SITE_URL, getAbsoluteUrl } from "@/lib/config"

interface FAQStructuredDataProps {
  faqs: Array<{ question: string; answer: string }>
}

/**
 * FAQPage Structured Data (JSON-LD)
 * Permite que Google muestre rich snippets de FAQ en los resultados de búsqueda
 */
export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
    />
  )
}

