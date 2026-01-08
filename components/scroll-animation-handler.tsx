"use client"

import { useEffect } from "react"

/**
 * ScrollAnimationHandler - Automáticamente detecta elementos con border-draw-sequential
 * y activa la animación cuando están en el centro del viewport (solo en móvil)
 */
export function ScrollAnimationHandler() {
  useEffect(() => {
    // Solo aplicar en móvil (pantallas menores a md)
    const checkIfMobile = () => window.innerWidth < 768
    
    if (!checkIfMobile()) {
      return // En desktop, usar hover normal
    }

    // Detectar ambos tipos de elementos: border-draw-sequential y border-draw-services
    const elements = document.querySelectorAll('.border-draw-sequential, .border-draw-services')
    if (elements.length === 0) return

    // Optimización móvil: Usar IntersectionObserver en lugar de scroll cuando sea posible
    // Fallback a scroll throttled para mejor rendimiento
    let rafId: number | null = null
    let lastScrollTime = 0
    
    // Throttling adaptativo según hardware
    const getThrottleDelay = (): number => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 4
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')
      const isLowEndDevice = hardwareConcurrency < 4
      
      if (isSlowConnection || isLowEndDevice) {
        return 200 // Más throttling para dispositivos lentos
      }
      return 150 // Throttling normal para móvil
    }
    
    let throttleDelay = getThrottleDelay()
    
    // Rastrear el estado de cada elemento (dentro/fuera del centro)
    // Usamos WeakMap para que los elementos puedan ser garbage collected
    const elementState = new WeakMap<Element, { isInCenter: boolean, hasActivated: boolean }>()
    
    // Cache para getBoundingClientRect - evita recálculos innecesarios
    const rectCache = new Map<Element, { rect: DOMRect, timestamp: number }>()
    const RECT_CACHE_TTL = 32 // ~2 frames a 60fps
    
    const getCachedRect = (element: Element): DOMRect | null => {
      const now = performance.now()
      const cached = rectCache.get(element)
      
      if (cached && (now - cached.timestamp) < RECT_CACHE_TTL) {
        return cached.rect
      }
      
      const rect = element.getBoundingClientRect()
      rectCache.set(element, { rect, timestamp: now })
      return rect
    }

    // Obtener o inicializar el estado de un elemento
    const getElementState = (element: Element) => {
      let state = elementState.get(element)
      if (!state) {
        state = { isInCenter: false, hasActivated: false }
        elementState.set(element, state)
      }
      return state
    }

    const handleScroll = () => {
      const now = performance.now()
      if (now - lastScrollTime < throttleDelay) return
      lastScrollTime = now

      const viewportHeight = window.innerHeight
      const centerY = viewportHeight / 2
      const threshold = 250 // Distancia del centro para activar

      // FASE 1: Leer todas las propiedades geométricas primero (batch reads)
      // Esto evita forced reflows al agrupar todas las lecturas antes de cualquier escritura
      const elementData = Array.from(elements).map((element) => {
        const rect = getCachedRect(element)
        if (!rect) return null
        
        const elementCenterY = rect.top + rect.height / 2
        const distanceFromCenter = Math.abs(elementCenterY - centerY)
        const isInCenter = distanceFromCenter < threshold && rect.top < viewportHeight && rect.bottom > 0
        
        return {
          element,
          rect,
          isInCenter,
          state: getElementState(element),
        }
      }).filter(Boolean) as Array<{
        element: Element
        rect: DOMRect
        isInCenter: boolean
        state: { isInCenter: boolean; hasActivated: boolean }
      }>

      // FASE 2: Ahora hacer todos los cambios de estilo (batch writes)
      // Esto se ejecuta después de todas las lecturas, evitando forced reflows
      elementData.forEach(({ element, rect, isInCenter, state }) => {
        const wasInCenter = state.isInCenter
        
        // Actualizar estado actual
        state.isInCenter = isInCenter

        // Solo activar cuando ENTRA al centro (transición de fuera -> dentro)
        if (isInCenter && !wasInCenter && !state.hasActivated) {
          // Elemento acaba de entrar al centro - activar animación
          element.classList.add('scroll-center-active')
          state.hasActivated = true
          
          // Remover la clase después de que la animación termine
          // Pero mantener hasActivated = true para que no se active de nuevo mientras esté en el centro
          setTimeout(() => {
            element.classList.remove('scroll-center-active')
          }, 1500)
        } 
        // Resetear cuando SALE completamente del centro
        else if (!isInCenter && wasInCenter) {
          // Elemento salió del centro - resetear para que pueda activarse de nuevo
          element.classList.remove('scroll-center-active')
          state.hasActivated = false
        }
        
        // Limpiar cache si está completamente fuera del viewport
        if (rect.bottom < 0 || rect.top > viewportHeight) {
          rectCache.delete(element)
        }
      })
    }

    // Usar requestAnimationFrame para mejor rendimiento en móvil
    const handleScrollThrottled = () => {
      if (rafId !== null) return
      
      rafId = requestAnimationFrame(() => {
        handleScroll()
        rafId = null
      })
    }

    // Escuchar scroll
    window.addEventListener('scroll', handleScrollThrottled, { passive: true })
    handleScroll() // Verificar posición inicial

    // Manejar resize
    const handleResize = () => {
      // Recalcular throttle delay en resize
      throttleDelay = getThrottleDelay()
      // Limpiar cache de rects en resize (el layout cambió)
      rectCache.clear()
      
      if (!checkIfMobile()) {
        // Limpiar clases y estados si cambiamos a desktop
        elements.forEach((el) => {
          el.classList.remove('scroll-center-active')
          const state = elementState.get(el)
          if (state) {
            state.isInCenter = false
            state.hasActivated = false
          }
        })
      } else {
        // Recalcular estados en resize (posiciones pueden haber cambiado)
        handleScroll()
      }
    }
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled)
      window.removeEventListener('resize', handleResize)
      
      // Cancelar cualquier RAF pendiente
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      
      // Limpiar cache
      rectCache.clear()
      
      // Limpiar clases activas
      elements.forEach((element) => {
        element.classList.remove('scroll-center-active')
      })
    }
  }, [])

  return null
}

