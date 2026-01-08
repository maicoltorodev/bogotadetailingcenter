"use client"

import { useEffect } from "react"

/**
 * PerformanceDetector - Detecta el rendimiento del dispositivo
 * y agrega clases al body para optimizar animaciones
 */
export function PerformanceDetector() {
  useEffect(() => {
    // Detectar rendimiento del dispositivo
    const detectPerformance = () => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 4
      const deviceMemory = (navigator as any).deviceMemory || 4 // GB
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      
      // Detectar si es dispositivo móvil
      const isMobile = window.innerWidth < 768
      
      // Detectar conexión lenta
      const isSlowConnection = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        connection.saveData === true
      )
      
      // Detectar dispositivo de bajo rendimiento
      // Solo marcar dispositivos de muy bajo rendimiento (< 4 cores o < 4GB RAM o conexión muy lenta)
      const isLowPerformance = (
        hardwareConcurrency < 4 || 
        deviceMemory < 4 || 
        isSlowConnection
      )
      
      // Detectar preferencia de movimiento reducido
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      // Limpiar clases previas
      document.body.classList.remove('low-performance', 'reduced-motion')
      
      // Agregar clase según rendimiento - simplificado a solo 2 niveles
      if (prefersReducedMotion) {
        document.body.classList.add('reduced-motion')
      } else if (isLowPerformance) {
        // Solo marcar dispositivos de muy bajo rendimiento
        document.body.classList.add('low-performance')
      }
      // Dispositivos normales/gama media no necesitan clase especial
      
      // Log para debugging (solo en desarrollo)
      if (process.env.NODE_ENV === 'development') {
        console.log('[PerformanceDetector]', {
          hardwareConcurrency,
          deviceMemory,
          isMobile,
          isSlowConnection,
          performance: isLowPerformance ? 'low' : 'normal',
          prefersReducedMotion
        })
      }
    }
    
    // Detectar al cargar
    detectPerformance()
    
    // Detectar cambios en conexión
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    if (connection) {
      connection.addEventListener('change', detectPerformance)
    }
    
    // Detectar cambios en prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleReducedMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion')
      } else {
        document.body.classList.remove('reduced-motion')
        detectPerformance() // Re-detectar sin reduced-motion
      }
    }
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleReducedMotion)
    } else {
      // Fallback para browsers antiguos
      mediaQuery.addListener(handleReducedMotion)
    }
    
    return () => {
      if (connection && connection.removeEventListener) {
        connection.removeEventListener('change', detectPerformance)
      }
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleReducedMotion)
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleReducedMotion)
      }
    }
  }, [])
  
  return null
}

