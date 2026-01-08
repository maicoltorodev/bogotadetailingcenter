"use client"

import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { WhatsAppIcon } from "./whatsapp-icon"

const sedes = [
  {
    name: "Norte",
    address: "Carrera 7#161-57",
    description: "Nuestra sede en el corazón de Bogotá Norte, equipada con la última tecnología en detailing automotriz.",
    image: "/images/sede-norte.png",
    phone: "573245084306",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carrera+7+161-57+Bogotá",
  },
  {
    name: "El Polo",
    address: "El Polo Cl. 83 #22A-31",
    description: "Ubicada en la zona comercial de El Polo, ofrecemos servicios premium con instalaciones de primera clase.",
    image: "/images/sede-polo.png",
    phone: "573118777229",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Polo+Cl.+83+22A-31+Bogotá",
  },
  {
    name: "Chía",
    address: "Km 2 vía Chía - Cota plaza empresarial El León",
    description: "Nuestra sede en Chía cuenta con amplias instalaciones para atender vehículos de todos los tamaños.",
    image: "/images/sede-chia.png",
    phone: "573184146744",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Km+2+vía+Chía+Cota+plaza+empresarial+El+León",
  },
]

function SedeItem({ sede, index }: { sede: typeof sedes[0]; index: number }) {
  const [imageError, setImageError] = useState(false)
  const isEven = index % 2 === 0

  return (
    <>
      {/* Estructura para móvil - Card vertical simple */}
      <div className="md:hidden group relative mb-8 last:mb-0 overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 border-draw-sequential">
        {/* Imagen arriba */}
        <a
          href={sede.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full cursor-pointer group/image"
        >
          <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <Image
              src={imageError ? "/placeholder.svg" : sede.image || "/placeholder.svg"}
              alt={`Sede ${sede.name} - ${sede.address}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={80}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
          </div>
        </a>

        {/* Contenido abajo */}
        <div className="p-6 flex flex-col">
          <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
            {sede.name}
          </h3>

          {/* Dirección */}
          <a
            href={sede.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 flex items-start gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex-shrink-0">
              <MapPin className="h-5 w-5 text-amber-400" />
            </div>
            <div className="flex-1 pt-1">
              <p className="text-neutral-400 font-medium mb-1 text-xs uppercase tracking-wider">Ubicación</p>
              <p className="text-white text-sm leading-relaxed font-medium hover:text-amber-400 transition-colors">{sede.address}</p>
            </div>
          </a>

          {/* Descripción */}
          <p className="text-neutral-300 text-sm leading-relaxed mb-6">
            {sede.description}
          </p>

          {/* Botón WhatsApp */}
          <div className="flex justify-center">
            <Link
              href={`https://wa.me/${sede.phone}?text=Hola+*Bogotá+Detailing+Center*+${sede.name}.+Necesito+más+información`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group/button"
              aria-label={`Contactar por WhatsApp a sede ${sede.name}`}
            >
              <button 
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-110"
                aria-hidden="true"
              >
                <WhatsAppIcon className="w-7 h-7 transition-transform group-hover/button:scale-110" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Estructura para desktop - Layout alternado */}
      <div className={`hidden md:grid group relative grid gap-0 ${isEven ? "md:grid-cols-[1.6fr_1fr]" : "md:grid-cols-[1fr_1.6fr]"} items-stretch mb-24 last:mb-0 overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 border-draw-sequential ${!isEven ? "md:grid-flow-dense" : ""}`}>
        {/* Imagen - Alterna izquierda/derecha - Aspect ratio 1:1.88 (alto:ancho) */}
        <a
          href={sede.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative overflow-hidden flex items-center justify-center cursor-pointer group/image w-full p-4 md:p-6 lg:p-8 ${!isEven ? "md:col-start-2" : ""}`}
        >
          <div className="relative w-full max-w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '53.08%' }}>
            <Image
              src={imageError ? "/placeholder.svg" : sede.image || "/placeholder.svg"}
              alt={`Sede ${sede.name} - ${sede.address}`}
              fill
              className="object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              quality={80}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              onError={() => setImageError(true)}
            />
            {/* Borde decorativo que aparece en hover */}
            <div className="absolute inset-0 border-4 border-amber-500/0 group-hover/image:border-amber-500/50 transition-all duration-300 ease-in-out rounded-2xl pointer-events-none z-10" />
            {/* Overlay sutil en hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none z-10" />
          </div>
        </a>

        {/* Contenido */}
        <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center relative min-h-[400px] md:min-h-[600px] ${!isEven ? "md:col-start-1 md:row-start-1" : ""}`}>
          {/* Elemento decorativo de fondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl opacity-30" />

          <div className="relative z-10">
            {/* Título */}
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center">
              {sede.name}
            </h3>

            {/* Dirección con icono elegante */}
            <a
              href={sede.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 flex items-start gap-5 cursor-pointer hover:opacity-80 transition-opacity duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex-shrink-0 shadow-lg">
                <MapPin className="h-7 w-7 text-amber-400" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-neutral-400 font-medium mb-2 text-sm uppercase tracking-wider">Ubicación</p>
                <p className="text-white text-lg md:text-xl leading-relaxed font-medium hover:text-amber-400 transition-colors">{sede.address}</p>
              </div>
            </a>

            {/* Descripción */}
            <div className="mb-10">
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto text-center sm:text-left">
                {sede.description}
              </p>
            </div>

            {/* Botón WhatsApp Icon */}
            <div className="flex justify-center">
              <Link
                href={`https://wa.me/${sede.phone}?text=Hola+*Bogotá+Detailing+Center*+${sede.name}.+Necesito+más+información`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group/button"
                aria-label={`Contactar por WhatsApp a sede ${sede.name}`}
              >
                <button 
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-110"
                  aria-hidden="true"
                >
                  <WhatsAppIcon className="w-10 h-10 transition-transform group-hover/button:scale-110" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function SedesSection() {
  return (
    <section id="sedes" className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header mejorado */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">Nuestras Sedes</p>
          </div>
          <h2 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2">
            Visítanos en Cualquiera de
            <br />
            <span className="text-amber-500">Nuestras Sedes</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 px-4">
            Contamos con tres ubicaciones estratégicas para brindarte el mejor servicio de detailing automotriz
          </p>
        </div>

        {/* Grid de sedes */}
        <div className="space-y-0">
          {sedes.map((sede, index) => (
            <SedeItem key={index} sede={sede} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

