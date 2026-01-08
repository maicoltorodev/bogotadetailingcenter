"use client"

import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { scrollToHash, getHashHref } from "@/lib/scroll-utils"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Cerrar el menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Cerrar el menú al hacer scroll (solo en móvil)
  useEffect(() => {
    if (!isMenuOpen) return
    
    const handleScroll = () => {
      setIsMenuOpen(false)
    }
    
    // Pequeño delay para evitar cerrar inmediatamente después de abrir
    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }, 300)
    
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Cerrar el menú inmediatamente
    setIsMenuOpen(false)
    
    // Si estamos en la página principal, hacer scroll a la sección
    if (pathname === "/") {
      setTimeout(() => {
        scrollToHash(hash)
      }, 100)
    } else {
      // Si estamos en otra página, navegar al home con el hash
      // El scroll se manejará automáticamente por el componente SmoothScroll
      router.push(`/${hash}`)
    }
  }

  const handleDesktopAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    
    // Si estamos en la página principal, hacer scroll a la sección
    if (pathname === "/") {
      scrollToHash(hash)
    } else {
      // Si estamos en otra página, navegar al home con el hash
      // El scroll se manejará automáticamente por el componente SmoothScroll
      router.push(`/${hash}`)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-32 lg:h-36">
          {/* Logo y Lema */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center relative h-16 sm:h-20 md:h-28 lg:h-32 w-auto">
              <Image 
                src="/images/logo.png" 
                alt="Bogotá Detailing Center" 
                width={128}
                height={128}
                className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto object-contain"
                priority
                quality={75}
                fetchPriority="high"
              />
            </Link>
            <div className="hidden md:block">
              <span className="hero-lema text-amber-500 font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif italic">#MejorQueNuevo</span>
            </div>
          </div>

          {/* Lema Centrado en Mobile */}
          <div className="md:hidden flex items-center justify-center flex-1">
            <span className="hero-lema text-amber-500 font-bold text-base sm:text-lg font-serif italic">#MejorQueNuevo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href={getHashHref("#servicios", pathname)}
              onClick={(e) => handleDesktopAnchorClick(e, "#servicios")}
              className={`transition-colors font-medium ${
                pathname?.startsWith("/servicios") || pathname?.startsWith("/ppf") || pathname?.startsWith("/polarizados") || pathname?.startsWith("/latoneria") ? "text-amber-500 font-semibold" : "text-neutral-300 hover:text-amber-500"
              }`}
            >
              Servicios
            </a>
            <a 
              href={getHashHref("#nosotros", pathname)}
              onClick={(e) => handleDesktopAnchorClick(e, "#nosotros")}
              className="text-neutral-300 hover:text-amber-500 transition-colors font-medium"
            >
              Nosotros
            </a>
            <a
              href={getHashHref("#curso", pathname)}
              onClick={(e) => handleDesktopAnchorClick(e, "#curso")}
              className="text-neutral-300 hover:text-amber-500 transition-colors font-medium"
            >
              Curso
            </a>
            <a
              href={getHashHref("#sedes", pathname)}
              onClick={(e) => handleDesktopAnchorClick(e, "#sedes")}
              className="text-neutral-300 hover:text-amber-500 transition-colors font-medium"
            >
              Sedes
            </a>
            <a
              href={getHashHref("#contacto", pathname)}
              onClick={(e) => handleDesktopAnchorClick(e, "#contacto")}
              className="hero-contact-button group/button bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 px-6 py-2 rounded-md hover:from-amber-400 hover:to-amber-500 transition-all duration-300 font-semibold relative overflow-hidden"
            >
              <span className="relative z-10">Contacto</span>
              {/* Efecto de brillo animado */}
              <span className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-300 hover:text-amber-500 transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Overlay */}
        {isMenuOpen && (
          <>
            {/* Overlay de fondo */}
            <div 
              className="md:hidden fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-40 touch-none"
              style={{ top: '80px' }}
              onClick={() => setIsMenuOpen(false)}
              onTouchStart={() => setIsMenuOpen(false)}
            />
            
            {/* Menú desplegable */}
            <div className="md:hidden fixed top-[80px] sm:top-[96px] left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-800 shadow-2xl max-h-[calc(100vh-80px)] sm:max-h-[calc(100vh-96px)] overflow-y-auto">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-2">
                  <a
                    href={getHashHref("#servicios", pathname)}
                    className={`group flex items-center justify-between py-4 px-5 rounded-xl transition-all duration-200 touch-manipulation min-h-[44px] ${
                      pathname?.startsWith("/servicios") || pathname?.startsWith("/ppf") || pathname?.startsWith("/polarizados") || pathname?.startsWith("/latoneria") 
                        ? "bg-amber-500/10 text-amber-500 border border-amber-500/30" 
                        : "text-neutral-300 hover:text-white hover:bg-neutral-900/50 border border-transparent active:bg-neutral-900 active:scale-[0.98]"
                    }`}
                    onClick={(e) => handleAnchorClick(e, "#servicios")}
                  >
                    <span className="font-semibold text-base">Servicios</span>
                    <ChevronRight className={`h-5 w-5 transition-transform ${pathname?.startsWith("/servicios") || pathname?.startsWith("/ppf") || pathname?.startsWith("/polarizados") || pathname?.startsWith("/latoneria") ? "text-amber-500" : "text-neutral-400 group-hover:text-white group-hover:translate-x-1"}`} />
                  </a>
                  
                  <a
                    href={getHashHref("#nosotros", pathname)}
                    className="group flex items-center justify-between py-4 px-5 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-900/50 transition-all duration-200 border border-transparent touch-manipulation min-h-[44px] active:bg-neutral-900 active:scale-[0.98]"
                    onClick={(e) => handleAnchorClick(e, "#nosotros")}
                  >
                    <span className="font-semibold text-base">Nosotros</span>
                    <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href={getHashHref("#curso", pathname)}
                    className="group flex items-center justify-between py-4 px-5 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-900/50 transition-all duration-200 border border-transparent touch-manipulation min-h-[44px] active:bg-neutral-900 active:scale-[0.98]"
                    onClick={(e) => handleAnchorClick(e, "#curso")}
                  >
                    <span className="font-semibold text-base">Curso</span>
                    <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href={getHashHref("#sedes", pathname)}
                    className="group flex items-center justify-between py-4 px-5 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-900/50 transition-all duration-200 border border-transparent touch-manipulation min-h-[44px] active:bg-neutral-900 active:scale-[0.98]"
                    onClick={(e) => handleAnchorClick(e, "#sedes")}
                  >
                    <span className="font-semibold text-base">Sedes</span>
                    <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="pt-2 mt-2 border-t border-neutral-800">
                    <a
                      href={getHashHref("#contacto", pathname)}
                      className="hero-contact-button group/button flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 px-6 py-4 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 font-bold text-base shadow-lg hover:shadow-amber-500/50 hover:scale-[1.02] relative overflow-hidden touch-manipulation min-h-[44px] active:scale-[0.98] active:opacity-90"
                      onClick={(e) => {
                        if (navigator.vibrate) navigator.vibrate(30)
                        handleAnchorClick(e, "#contacto")
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Contacto
                        <ChevronRight className="h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                      </span>
                      {/* Efecto de brillo animado */}
                      <span className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
