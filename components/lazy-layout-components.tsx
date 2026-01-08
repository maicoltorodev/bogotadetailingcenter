"use client"

import dynamic from "next/dynamic"

// Lazy load componentes no críticos para mejorar FCP y LCP
const SmoothScroll = dynamic(() => import("@/components/smooth-scroll").then(mod => ({ default: mod.SmoothScroll })), {
  ssr: false, // Solo en cliente, no crítico para SEO
})

const ScrollAnimationHandler = dynamic(() => import("@/components/scroll-animation-handler").then(mod => ({ default: mod.ScrollAnimationHandler })), {
  ssr: false, // Solo en cliente, no crítico para SEO
})

export function LazyLayoutComponents() {
  return (
    <>
      <SmoothScroll />
      <ScrollAnimationHandler />
    </>
  )
}
