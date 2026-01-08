"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { scrollToHash } from "@/lib/scroll-utils"

/**
 * SmoothScroll - Solo maneja la carga inicial con hash en la URL
 * Los componentes individuales manejan sus propios clics usando scrollToHash()
 */
export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    // Solo manejar scroll cuando hay un hash en la URL al cargar/navegar
    const hash = window.location.hash
    if (hash) {
      // Delay más largo cuando se navega desde otra página para asegurar que el DOM esté completamente cargado
      const delay = pathname === "/" ? 100 : 300
      
      setTimeout(() => {
        scrollToHash(hash, { updateHistory: false }) // No actualizar history porque ya está en la URL
        
        // Retry si el elemento no se encuentra (puede pasar cuando se navega desde otra página)
        if (!document.querySelector(hash)) {
          setTimeout(() => {
            scrollToHash(hash, { updateHistory: false })
          }, 200)
        }
      }, delay)
    }
  }, [pathname])

  return null
}

