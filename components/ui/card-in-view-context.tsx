"use client"

import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react"

interface CardRegistration {
  id: string
  ref: HTMLElement
  setActive: (isActive: boolean) => void
}

interface CardInViewContextType {
  registerCard: (id: string, ref: HTMLElement, setActive: (isActive: boolean) => void) => void
  unregisterCard: (id: string) => void
}

const CardInViewContext = createContext<CardInViewContextType | null>(null)

export function useCardInViewContext() {
  return useContext(CardInViewContext)
}

interface CardInViewGroupProps {
  children: ReactNode
  className?: string
}

export function CardInViewGroup({ children, className }: CardInViewGroupProps) {
  const cardsRef = useRef<Map<string, CardRegistration>>(new Map())
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    
    const checkMobile = () => {
      setIsMobile(mobileMediaQuery.matches)
    }
    
    checkMobile()
    
    mobileMediaQuery.addEventListener('change', checkMobile)
    window.addEventListener("resize", checkMobile, { passive: true })

    return () => {
      mobileMediaQuery.removeEventListener('change', checkMobile)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Registration methods
  const registerCard = (id: string, ref: HTMLElement, setActive: (isActive: boolean) => void) => {
    cardsRef.current.set(id, { id, ref, setActive })
  }

  const unregisterCard = (id: string) => {
    cardsRef.current.delete(id)
  }

  // Scroll handler
  useEffect(() => {
    if (!isMobile) return

    let rafId: number | null = null
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const checkCenter = () => {
      const viewportHeight = window.innerHeight
      const centerLine = viewportHeight / 2
      let closestCardId: string | null = null
      let minDistance = Infinity

      // Zona de detección: solo considerar cards dentro de una zona razonable del centro
      // Esto evita activar cards que están muy lejos del centro
      const detectionZoneHeight = viewportHeight * 0.6 // 60% del viewport
      const zoneTop = centerLine - detectionZoneHeight / 2
      const zoneBottom = centerLine + detectionZoneHeight / 2

      // Find the card closest to the center
      cardsRef.current.forEach((card) => {
        const rect = card.ref.getBoundingClientRect()
        
        // Check if card is visible in viewport at all
        if (rect.bottom < 0 || rect.top > viewportHeight) {
          // Si la card está fuera del viewport, asegurarse de que esté desactivada
          card.setActive(false)
          return
        }

        // Verificar si la card intersecta con la zona de detección
        const cardIntersectsZone = rect.bottom >= zoneTop && rect.top <= zoneBottom
        
        if (!cardIntersectsZone) {
          // Si la card no está en la zona de detección, desactivarla
          card.setActive(false)
          return
        }

        // Calcular el centro de la card
        const cardCenter = rect.top + rect.height / 2
        // Calcular la distancia desde el centro de la card al centro del viewport
        const distance = Math.abs(centerLine - cardCenter)

        // Solo considerar cards que están realmente cerca del centro
        // Si la distancia es menor que la mínima encontrada, esta es la más cercana
        if (distance < minDistance) {
          minDistance = distance
          closestCardId = card.id
        }
      })

      // Actualizar estados: solo la card más cercana al centro estará activa
      cardsRef.current.forEach((card) => {
        card.setActive(card.id === closestCardId)
      })

      rafId = null
    }

    const onScroll = () => {
      if (!isScrolling) {
        isScrolling = true
        document.body.classList.add('scrolling')
      }
      
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
        document.body.classList.remove('scrolling')
        // Final check after scroll stops
        if (!rafId) {
            rafId = requestAnimationFrame(checkCenter)
        }
      }, 150)

      if (!rafId) {
        rafId = requestAnimationFrame(checkCenter)
      }
    }

    // Initial check
    checkCenter()

    // Handler para resize - recalcular cuando cambia el tamaño del viewport
    const handleResize = () => {
      if (!isMobile) {
        // Si ya no es móvil, desactivar todas las cards
        cardsRef.current.forEach((card) => {
          card.setActive(false)
        })
        return
      }
      
      // Recalcular después del resize
      if (!rafId) {
        rafId = requestAnimationFrame(checkCenter)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleResize)
      if (rafId) cancelAnimationFrame(rafId)
      clearTimeout(scrollTimeout)
      document.body.classList.remove('scrolling')
      
      // Desactivar todas las cards al limpiar
      cardsRef.current.forEach((card) => {
        card.setActive(false)
      })
    }
  }, [isMobile])

  return (
    <CardInViewContext.Provider value={{ registerCard, unregisterCard }}>
      <div className={className}>
        {children}
      </div>
    </CardInViewContext.Provider>
  )
}
