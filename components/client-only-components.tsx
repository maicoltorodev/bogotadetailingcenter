"use client"

import dynamic from "next/dynamic"

// Cargar Analytics y PerformanceDetector de forma diferida (no bloquean render inicial)
const Analytics = dynamic(() => import("@vercel/analytics/next").then(mod => mod.Analytics), {
  ssr: false, // Solo en cliente, no crítico para SEO
})

const PerformanceDetector = dynamic(() => import("@/components/performance-detector").then(mod => ({ default: mod.PerformanceDetector })), {
  ssr: false, // Solo en cliente
})

export function ClientOnlyComponents() {
  return (
    <>
      <PerformanceDetector />
      <Analytics />
    </>
  )
}
