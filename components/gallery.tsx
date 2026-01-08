"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const images = [
  {
    src: "/images/resultados-interior.png",
    title: "Interior",
    description: "Limpieza profunda, protección y restauración completa del interior",
  },
  {
    src: "/images/resultados-paint.png",
    title: "Paint Correction",
    description: "Eliminación de rayones y marcas para un acabado perfecto",
  },
  {
    src: "/images/resultados-ceramica.png",
    title: "Protección Cerámica",
    description: "Coating cerámico de larga duración para máxima protección",
  },
  {
    src: "/images/resultados-detailing.png",
    title: "Detailing Exterior",
    description: "Restauración y protección completa de acabados exteriores",
  },
  {
    src: "/images/resultados-chasispremiumwash.png",
    title: "Chasis + Premium Wash",
    description: "Limpieza profunda de chasis y lavado premium completo",
  },
  {
    src: "/images/resultados-descontaminacion.png",
    title: "Descontamination Service",
    description: "Eliminación de contaminantes y preparación de superficie",
  },
]

function GalleryItem({ item, index }: { item: typeof images[0]; index: number }) {
  const [isInView, setIsInView] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // Usar matchMedia en lugar de window.innerWidth para evitar forced reflow
    // matchMedia no causa forced reflow porque no lee propiedades geométricas del DOM
    const mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    
    // Solo aplicar Intersection Observer en móvil (pantallas menores a md)
    if (!mobileMediaQuery.matches) {
      // En desktop, siempre mostrar en hover (comportamiento original)
      return
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsInView(false)
          return
        }

        // Usar entry.boundingClientRect en lugar de card.getBoundingClientRect()
        // entry.boundingClientRect ya está calculado por IntersectionObserver
        // y no causa forced reflow adicional
        const rect = entry.boundingClientRect
        // window.innerHeight puede causar forced reflow si se lee después de cambios DOM
        // pero aquí solo se lee, no hay cambios DOM previos, así que es seguro
        // Sin embargo, podríamos usar entry.rootBounds.height si estuviera disponible
        const viewportHeight = entry.rootBounds?.height ?? window.innerHeight
        const centerY = viewportHeight / 2
        
        // El elemento está en el centro si su centro está cerca del centro de la pantalla
        const elementCenterY = rect.top + rect.height / 2
        const distanceFromCenter = Math.abs(elementCenterY - centerY)
        
        // Mostrar si está cerca del centro (dentro de 250px del centro)
        // Esto permite que el texto aparezca cuando la imagen está aproximadamente en el centro
        if (distanceFromCenter < 250) {
          setIsInView(true)
        } else {
          setIsInView(false)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.5, 1.0], // Reducido a 3 thresholds para mejor rendimiento
      rootMargin: "-50px 0px", // Activar animaciones antes de que el elemento sea visible
    })

    observer.observe(card)

    // Manejar cambios de tamaño usando matchMedia
    const handleResize = () => {
      if (!mobileMediaQuery.matches) {
        setIsInView(false)
        observer.disconnect()
      }
    }
    
    mobileMediaQuery.addEventListener('change', handleResize)

    return () => {
      observer.disconnect()
      mobileMediaQuery.removeEventListener('change', handleResize)
    }
  }, [])

  return (
    <Card 
      ref={cardRef}
      className="group relative overflow-hidden border-2 border-neutral-800 bg-transparent p-0 rounded-3xl hover:border-amber-500/50 transition-all duration-500 shadow-2xl hover:shadow-amber-500/10 hover:scale-[1.02] border-draw-sequential"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src={item.src || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-3xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={80}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Overlay - visible en hover (desktop) o cuando está en el centro (móvil) */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-transparent rounded-3xl transition-opacity duration-500
            md:opacity-0 md:group-hover:opacity-100
            ${isInView ? 'opacity-100' : 'opacity-0'}
          `}
        />
        {/* Texto - visible en hover (desktop) o cuando está en el centro (móvil) */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 rounded-b-3xl transition-transform duration-500
            md:transform md:translate-y-full md:group-hover:translate-y-0
            ${isInView ? 'transform translate-y-0' : 'transform translate-y-full'}
          `}
        >
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base">{item.description}</p>
        </div>
      </div>
    </Card>
  )
}

export function Gallery() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">Nuestro Trabajo</p>
          </div>
          <h2 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2">
            Resultados que Hablan
            <br />
            <span className="text-amber-500">por Sí Mismos</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 px-4">
            Cada proyecto es una obra de arte. Vea la excelencia que logramos en cada detalle
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
