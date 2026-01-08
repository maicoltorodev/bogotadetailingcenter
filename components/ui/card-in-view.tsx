"use client"

import React, { ReactNode, useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CardInViewProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export function CardInView({ 
  children, 
  className,
  threshold = 1.0,
  rootMargin = "0px"
}: CardInViewProps) {
  const [isInView, setIsInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Usar matchMedia en lugar de window.innerWidth para evitar forced reflow
    // matchMedia no causa forced reflow porque no lee propiedades geométricas del DOM
    const mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    
    // Check if mobile usando matchMedia
    const checkMobile = () => {
      const mobile = mobileMediaQuery.matches
      setIsMobile(mobile)
      return mobile
    }
    
    const mobile = checkMobile()
    
    // Escuchar cambios en matchMedia en lugar de eventos resize directos
    mobileMediaQuery.addEventListener('change', checkMobile)
    window.addEventListener("resize", checkMobile, { passive: true })

    // Only set up on mobile
    if (!mobile) {
      return () => {
        mobileMediaQuery.removeEventListener('change', checkMobile)
        window.removeEventListener("resize", checkMobile)
      }
    }

    // Encontrar el Link dentro del wrapper
    const currentRef = ref.current
    if (currentRef) {
      const linkElement = currentRef.querySelector("a.group") as HTMLElement
      if (linkElement) {
        linkRef.current = linkElement
      }
    }

    // Cache para getBoundingClientRect - evita recálculos innecesarios
    let cachedRect: DOMRect | null = null
    let cachedViewportHeight = window.innerHeight
    let lastRectCheck = 0
    const RECT_CACHE_TTL = 16 // ~1 frame a 60fps
    
    // Función para verificar si el elemento está tocando el centro vertical del viewport
    // Optimizada para evitar forced reflows: lee primero, escribe después
    const checkIfInCenter = () => {
      if (!currentRef || !linkRef.current) return

      const now = performance.now()
      
      // FASE 1: Leer todas las propiedades geométricas primero (batch reads)
      // Esto evita forced reflows al agrupar todas las lecturas antes de cualquier escritura
      let rect: DOMRect
      let viewportHeight: number
      
      if (!cachedRect || now - lastRectCheck > RECT_CACHE_TTL) {
        rect = currentRef.getBoundingClientRect()
        viewportHeight = window.innerHeight
        cachedRect = rect
        cachedViewportHeight = viewportHeight
        lastRectCheck = now
      } else {
        rect = cachedRect
        viewportHeight = cachedViewportHeight
      }
      
      const centerY = viewportHeight / 2 // Línea horizontal del centro del viewport
      
      // Crear una zona de detección optimizada para mejor UX
      // Gap en mobile es gap-6 = 24px, hacemos la zona de 60px para activación más temprana
      const detectionZoneHeight = 60 // Altura de la zona de detección (más amplia para activación anticipada)
      const zoneTop = centerY - detectionZoneHeight / 2
      const zoneBottom = centerY + detectionZoneHeight / 2
      
      // Verificar si la zona de detección del centro intersecta con la card
      // La card intersecta si: rect.bottom >= zoneTop && rect.top <= zoneBottom
      const isTouchingCenter = rect.bottom >= zoneTop && rect.top <= zoneBottom
      
      // FASE 2: Ahora hacer todos los cambios de estilo (batch writes)
      // Esto se ejecuta después de todas las lecturas, evitando forced reflows
      setIsInView(isTouchingCenter)
      if (linkRef.current) {
        if (isTouchingCenter) {
          linkRef.current.classList.add("group-in-view")
        } else {
          linkRef.current.classList.remove("group-in-view")
        }
      }
      
      // Invalidar cache si el elemento sale del viewport
      if (rect.bottom < 0 || rect.top > viewportHeight) {
        cachedRect = null
      }
    }

    // Usar Intersection Observer optimizado - eliminar redundancia con scroll listener
    // El IntersectionObserver maneja la detección principal, el scroll solo valida posición
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsInView(false)
          cachedRect = null // Invalidar cache cuando sale del viewport
          if (linkRef.current) {
            linkRef.current.classList.remove("group-in-view")
          }
          return
        }
        // Invalidar cache cuando entra al viewport para forzar recálculo
        cachedRect = null
        // Cuando está en el viewport, verificar posición del centro
        checkIfInCenter()
      },
      {
        threshold: [0, 0.5, 1.0], // Reducido de 4 a 3 thresholds para mejor rendimiento
        rootMargin: "-20% 0px -20% 0px", // Activar antes para animación más anticipada
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    // Optimización: Throttling adaptativo según hardware del dispositivo
    // Detectar rendimiento del dispositivo usando navigator.hardwareConcurrency y conexión
    const getThrottleDelay = (): number => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 4
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')
      const isLowEndDevice = hardwareConcurrency < 4
      
      // Base: 100ms, aumenta en dispositivos de bajo rendimiento
      if (isSlowConnection || isLowEndDevice) {
        return 150 // Más throttling para dispositivos lentos
      }
      return 100 // Throttling normal
    }
    
    let throttleDelay = getThrottleDelay()
    
    // Optimización: usar requestAnimationFrame solo cuando sea necesario
    // Evitar loops continuos durante scroll para mejor rendimiento
    let lastCheckTime = 0
    
    // Optimización: Usar RAF solo cuando sea necesario, no en loop continuo
    let scrollRAF: number | null = null
    let scrollTimeout: NodeJS.Timeout
    
    const handleScroll = () => {
      const now = performance.now()
      if (now - lastCheckTime < throttleDelay) return
      lastCheckTime = now
      
      // Agregar clase al body para pausar animaciones durante scroll
      if (!document.body.classList.contains('scrolling')) {
        document.body.classList.add('scrolling')
      }
      
      // Usar RAF solo para la próxima verificación, no en loop
      if (scrollRAF === null) {
        scrollRAF = requestAnimationFrame(() => {
          checkIfInCenter()
          scrollRAF = null
        })
      }
    }
    
    const handleScrollEnd = () => {
      // Remover clase del body para reanudar animaciones
      document.body.classList.remove('scrolling')
      
      if (scrollRAF !== null) {
        cancelAnimationFrame(scrollRAF)
        scrollRAF = null
      }
      // Verificación final
      checkIfInCenter()
    }

    // Verificar posición inicial
    checkIfInCenter()
    
    // Un solo event listener optimizado para scroll con throttling adaptativo
    window.addEventListener("scroll", () => {
      handleScroll()
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScrollEnd, 150)
    }, { passive: true })
    
    // Recalcular throttle delay en resize (puede cambiar la conexión)
    window.addEventListener("resize", () => {
      throttleDelay = getThrottleDelay()
    }, { passive: true })
    
    return () => {
      mobileMediaQuery.removeEventListener('change', checkMobile)
      window.removeEventListener("resize", checkMobile)
      // Limpiar clase de scrolling del body
      document.body.classList.remove('scrolling')
      
      if (scrollRAF !== null) {
        cancelAnimationFrame(scrollRAF)
        scrollRAF = null
      }
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      if (linkRef.current) {
        linkRef.current.classList.remove("group-in-view")
      }
    }
  }, [threshold, rootMargin])

  return (
    <div
      ref={ref}
      className={cn(className)}
    >
      {children}
    </div>
  )
}

