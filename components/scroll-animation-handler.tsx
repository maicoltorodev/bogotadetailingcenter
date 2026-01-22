"use client"

import { useEffect } from "react"

/**
 * ScrollAnimationHandler - Detecta elementos con border-draw-sequential y border-draw-services
 * y activa la animación cuando están cerca del centro del viewport (solo en móvil)
 * Solo activa UN elemento a la vez: el más cercano al centro del viewport
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
    const elementsArray = Array.from(
      document.querySelectorAll<HTMLElement>('.border-draw-sequential, .border-draw-services')
    )
    if (elementsArray.length === 0) return

    let rafId: number | null = null
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    // Función para encontrar y activar solo el elemento más cercano al centro
    const checkCenter = () => {
      const viewportHeight = window.innerHeight
      const centerLine = viewportHeight / 2
      let closestElement: HTMLElement | null = null
      let minDistance = Infinity

      // Buscar el elemento más cercano al centro del viewport
      for (const element of elementsArray) {
        const rect = element.getBoundingClientRect()
        
        // Solo considerar elementos visibles en el viewport
        if (rect.bottom < 0 || rect.top > viewportHeight) {
          // Si el elemento está fuera del viewport, asegurarse de que esté desactivado
          element.classList.remove('scroll-center-active')
          continue
        }

        // Calcular el centro del elemento
        const elementCenter = rect.top + rect.height / 2
        // Calcular la distancia desde el centro del elemento al centro del viewport
        const distance = Math.abs(centerLine - elementCenter)

        // Si este elemento está más cerca del centro, es el candidato
        if (distance < minDistance) {
          minDistance = distance
          closestElement = element
        }
      }

      // Desactivar todos los elementos primero
      for (const element of elementsArray) {
        element.classList.remove('scroll-center-active')
      }

      // Activar solo el elemento más cercano al centro
      if (closestElement) {
        closestElement.classList.add('scroll-center-active')
      }

      rafId = null
    }

    // Configurar IntersectionObserver para detectar cuando elementos entran/salen del viewport
    // Esto optimiza el rendimiento al solo verificar elementos visibles
    const observer = new IntersectionObserver(
      (entries) => {
        // Cuando un elemento entra o sale del viewport, verificar el centro
        // Usar RAF para agrupar múltiples cambios
        if (!rafId) {
          rafId = requestAnimationFrame(checkCenter)
        }
      },
      {
        // Observar cuando elementos entran/salen del viewport
        rootMargin: '0px',
        threshold: [0, 0.1, 0.5, 1.0],
      }
    )

    // Observar todos los elementos
    elementsArray.forEach((element) => observer.observe(element))

    // Handler de scroll optimizado
    const onScroll = () => {
      if (!isScrolling) {
        isScrolling = true
        document.body.classList.add('scrolling')
      }
      
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
        document.body.classList.remove('scrolling')
        // Verificación final después de que el scroll termine
        if (!rafId) {
          rafId = requestAnimationFrame(checkCenter)
        }
      }, 150)

      // Verificar durante el scroll usando RAF
      if (!rafId) {
        rafId = requestAnimationFrame(checkCenter)
      }
    }

    // Verificación inicial
    checkCenter()

    // Escuchar eventos de scroll
    window.addEventListener('scroll', onScroll, { passive: true })

    // Manejar resize usando matchMedia para evitar forced reflow
    const handleResize = () => {
      // Usar mobileMediaQuery.matches en lugar de leer window.innerWidth
      if (!mobileMediaQuery.matches) {
        // Si ya no es móvil, desactivar todo y desconectar
        elementsArray.forEach((element) => {
          element.classList.remove('scroll-center-active')
        })
        observer.disconnect()
        window.removeEventListener('scroll', onScroll)
        if (rafId) cancelAnimationFrame(rafId)
        clearTimeout(scrollTimeout)
      } else {
        // Si sigue siendo móvil, recalcular después del resize
        if (!rafId) {
          rafId = requestAnimationFrame(checkCenter)
        }
      }
    }
    
    // Escuchar cambios en matchMedia en lugar de eventos resize directos
    mobileMediaQuery.addEventListener('change', handleResize)
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      observer.disconnect()
      mobileMediaQuery.removeEventListener('change', handleResize)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', onScroll)
      
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      clearTimeout(scrollTimeout)
      document.body.classList.remove('scrolling')
      
      // Limpiar clases activas
      elementsArray.forEach((element) => {
        element.classList.remove('scroll-center-active')
      })
    }
  }, [])

  return null
}

