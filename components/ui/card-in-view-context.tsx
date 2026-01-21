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

      // Find the card closest to the center
      cardsRef.current.forEach((card) => {
        const rect = card.ref.getBoundingClientRect()
        // Check if card is visible in viewport at all
        if (rect.bottom < 0 || rect.top > viewportHeight) return

        const cardCenter = rect.top + rect.height / 2
        const distance = Math.abs(centerLine - cardCenter)

        // Only consider cards that are roughly in the middle area (optional optimization)
        // or just pick the absolute winner. Let's pick the absolute winner among visible ones.
        if (distance < minDistance) {
          minDistance = distance
          closestCardId = card.id
        }
      })

      // Update states
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

    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
      clearTimeout(scrollTimeout)
      document.body.classList.remove('scrolling')
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
