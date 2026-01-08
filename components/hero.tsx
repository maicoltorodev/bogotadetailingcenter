"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { scrollToHash } from "@/lib/scroll-utils"
import Image from "next/image"

interface HeroProps {
  carImage: string
}

export function Hero({ carImage }: HeroProps) {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={carImage || "/placeholder.svg"}
          alt="Bogotá Detailing Center - Vehículo detallado profesionalmente"
          fill
          priority
          quality={60}
          fetchPriority="high"
          className="object-cover opacity-60"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          // Optimización: calidad 60 para máxima compresión (imagen con opacity-60, detalles no críticos)
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-screen items-center pt-32 sm:pt-36 md:pt-44 lg:pt-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="mb-4 sm:mb-6 font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white lg:text-7xl">
              <span className="hero-title inline-block">Excelencia en </span>
              <span className="hero-title-highlight text-amber-500 inline-block">Detailing</span>
              <br />
              <span className="hero-title-last inline-block">Automotriz</span>
            </h1>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300 lg:text-2xl">
              Restauramos y protegemos el valor de su inversión con técnicas profesionales, productos premium y precios accesibles
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <a 
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  if (navigator.vibrate) navigator.vibrate(30)
                  scrollToHash("#contacto")
                }}
                className="touch-manipulation"
              >
                <Button
                  size="lg"
                  className="hero-contact-button bg-amber-500 text-neutral-950 hover:bg-amber-400 font-semibold w-full sm:w-auto min-h-[44px] touch-manipulation active:scale-95 active:opacity-90"
                >
                  Agendar Cita
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a 
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash("#servicios")
                }}
                className="touch-manipulation"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white w-full sm:w-auto min-h-[44px] touch-manipulation active:scale-95 active:opacity-90"
                >
                  Ver Servicios
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
