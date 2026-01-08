"use client"

import { useEffect } from "react"

/**
 * ScrollAnimationHandler - Detecta elementos con border-draw-sequential y border-draw-services
 * y activa la animación cuando están cerca del centro del viewport (solo en móvil)
 * Usa IntersectionObserver para mejor rendimiento
 */
export function ScrollAnimationHandler() {
  useEffect(() => {
    // Usar matchMedia en lugar de window.innerWidth para evitar forced reflow
    // matchMedia no causa forced reflow porque no lee propiedades geométricas del DOM
    const mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    
    // Solo aplicar en móvil (pantallas menores a md)
    if (!mobileMediaQuery.matches) {
      return // En desktop, usar hover normal
    }

    // Detectar ambos tipos de elementos
    const elements = document.querySelectorAll('.border-draw-sequential, .border-draw-services')
    if (elements.length === 0) return

    // Rastrear elementos que ya han sido activados (para evitar re-activación mientras están visibles)
    const activatedElements = new WeakSet<Element>()

    // Configurar IntersectionObserver para detectar elementos cerca del centro
    // rootMargin: "0px -50% 0px -50%" hace que el viewport se enfoque en el centro
    // Esto detecta cuando el elemento cruza el centro vertical del viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target
          
          if (entry.isIntersecting) {
            // Elemento está en el centro - activar animación solo si no ha sido activado antes
            if (!activatedElements.has(element)) {
              element.classList.add('scroll-center-active')
              activatedElements.add(element)
              
              // Remover la clase después de que la animación termine (1500ms)
              setTimeout(() => {
                element.classList.remove('scroll-center-active')
              }, 1500)
            }
          } else {
            // Elemento salió del área de intersección - permitir re-activación
            activatedElements.delete(element)
            element.classList.remove('scroll-center-active')
          }
        })
      },
      {
        // rootMargin crea un área de intersección enfocada en el centro vertical
        // "0px -50% 0px -50%" significa: sin margen arriba/abajo, -50% izquierda/derecha
        // Esto efectivamente reduce el área de detección al centro vertical
        rootMargin: '0px -50% 0px -50%',
        // threshold: 0 significa que se activa cuando cualquier parte entra al área
        threshold: 0,
      }
    )

    // Observar todos los elementos
    elements.forEach((element) => observer.observe(element))

    // Manejar resize usando matchMedia para evitar forced reflow
    const handleResize = () => {
      // Usar mobileMediaQuery.matches en lugar de leer window.innerWidth
      if (!mobileMediaQuery.matches) {
        elements.forEach((element) => {
          element.classList.remove('scroll-center-active')
          activatedElements.delete(element)
        })
        observer.disconnect()
      }
    }
    
    // Escuchar cambios en matchMedia en lugar de eventos resize directos
    mobileMediaQuery.addEventListener('change', handleResize)
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      observer.disconnect()
      mobileMediaQuery.removeEventListener('change', handleResize)
      window.removeEventListener('resize', handleResize)
      
      // Limpiar clases activas
      elements.forEach((element) => {
        element.classList.remove('scroll-center-active')
      })
    }
  }, [])

  return null
}

