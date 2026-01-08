"use client"

import dynamic from "next/dynamic"

// Cargar WhatsAppButton de forma diferida (no crítico para SEO, puede ser client-only)
const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button").then(mod => ({ default: mod.WhatsAppButton })), {
  ssr: false, // No crítico para SEO, puede ser client-only
})

export function WhatsAppButtonLoader() {
  return <WhatsAppButton />
}
