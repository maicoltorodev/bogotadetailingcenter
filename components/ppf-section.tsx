"use client"

import { Button } from "@/components/ui/button"
import { Shield, Sparkles, Star, ChevronLeft, ChevronRight, Award } from "lucide-react"
import { useState, useEffect } from "react"
import { scrollToHash } from "@/lib/scroll-utils"
import Image from "next/image"

export function PPFSection() {
  const [activeCategory, setActiveCategory] = useState<"carro" | "moto">("carro")
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const carroImages = [
    { src: "/images/ppf-jeep-1.png", alt: "Paint Protection Film para Vehículos - Jeep 1" },
    { src: "/images/ppf-jeep-2.png", alt: "Paint Protection Film para Vehículos - Jeep 2" },
  ]

  const motoImages = [
    { src: "/images/ppf-moto-1.png", alt: "Paint Protection Film para Motos - Moto 1" },
    { src: "/images/ppf-moto-2.png", alt: "Paint Protection Film para Motos - Moto 2" },
  ]

  const currentImages = activeCategory === "carro" ? carroImages : motoImages

  // Auto-rotación de imágenes cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % currentImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [currentImages.length])

  // Resetear índice al cambiar de categoría
  useEffect(() => {
    setActiveImageIndex(0)
  }, [activeCategory])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      // Swipe izquierda: siguiente imagen
      setActiveImageIndex((prev) => (prev + 1) % currentImages.length)
    }
    if (isRightSwipe) {
      // Swipe derecha: imagen anterior
      setActiveImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
    }
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }
  return (
    <section id="ppf" className="relative py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
              <Shield className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-semibold text-amber-500">Protección Premium</span>
            </div>

            <h2 className="mb-6 font-serif text-4xl font-bold text-white lg:text-5xl text-balance">
              Paint Protection Film (PPF)
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-neutral-300">
              Es la mejor protección que le puede brindar a la superficie de su carro o moto. Se trata de una película
              transparente termoplástica, diseñada para proteger la pintura de su vehículo contra rayones, impactos de
              piedras, y daños ambientales.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <Star className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Protección Invisible</h3>
                  <p className="text-neutral-400">Mantiene el aspecto original de la pintura mientras protege</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Auto-Regeneración</h3>
                  <p className="text-neutral-400">Los rayones superficiales desaparecen con calor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <Shield className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Durabilidad Garantizada</h3>
                  <p className="text-neutral-400">Protección que dura años sin amarillear</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <Award className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Instaladores Certificados</h3>
                  <p className="text-neutral-400">Equipo profesional certificado por las mejores marcas</p>
                </div>
              </div>
            </div>

            {/* Images - Carrusel con categorías */}
            <div className="mb-8 relative">
              {/* Selector de categoría */}
              <div className="mb-6 flex items-center justify-center gap-4">
                <button
                  onClick={() => setActiveCategory("carro")}
                  className={`relative px-6 py-3 rounded-xl font-serif font-bold text-lg transition-all duration-300 ${
                    activeCategory === "carro"
                      ? "bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/50 scale-105"
                      : "bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
                  }`}
                >
                  Carro
                  {activeCategory === "carro" && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-amber-500 rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => setActiveCategory("moto")}
                  className={`relative px-6 py-3 rounded-xl font-serif font-bold text-lg transition-all duration-300 ${
                    activeCategory === "moto"
                      ? "bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/50 scale-105"
                      : "bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
                  }`}
                >
                  Moto
                  {activeCategory === "moto" && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-amber-500 rounded-full" />
                  )}
                </button>
              </div>

              {/* Carrusel de imágenes */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-800 border-2 border-neutral-700 group"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Imagen actual */}
                <div className="relative h-full w-full">
                  {currentImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === activeImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 66vw"
                        quality={80}
                        loading={index === 0 ? "eager" : "lazy"}
                        priority={index === 0}
                        placeholder={index > 0 ? "blur" : undefined}
                        blurDataURL={index > 0 ? "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" : undefined}
                      />
                    </div>
                  ))}
                </div>

                {/* Botones de navegación */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-950/80 backdrop-blur-sm border border-neutral-700 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-950/80 backdrop-blur-sm border border-neutral-700 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

              {/* Indicadores de imágenes */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeImageIndex
                        ? "w-8 bg-amber-500"
                        : "w-2 bg-neutral-600 hover:bg-neutral-500"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a 
                href="#contacto" 
                className="inline-block group/button"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash("#contacto")
                }}
              >
                <Button
                  size="lg"
                  className="hero-contact-button bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 hover:from-amber-400 hover:to-amber-500 font-semibold w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Cotizar PPF
                    <ChevronRight className="h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                  </span>
                  {/* Efecto de brillo animado */}
                  <span className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
