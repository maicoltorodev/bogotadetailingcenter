"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users, TrendingUp } from "lucide-react"
import { scrollToHash } from "@/lib/scroll-utils"
import Image from "next/image"

export function CoursesSection() {
  return (
    <section id="curso" className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
            <span className="text-xs sm:text-sm font-semibold text-amber-500 uppercase tracking-wider">Educación Profesional</span>
          </div>
          <h2 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2">
            ¡Conviértase en un
            <br />
            <span className="text-amber-500">Experto del Detailing!</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 px-4">
            Transforme su pasión en profesión con nuestros cursos especializados. Nuestros programas le brindarán las
            herramientas y conocimientos necesarios para destacar en la industria automotriz del detailing.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Image Section */}
          <div>
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border-2 border-neutral-800 shadow-2xl bg-neutral-800 relative">
                <Image 
                  src="/images/curso.png" 
                  alt="Cursos de Detailing" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 rounded-xl sm:rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/90 to-amber-600/80 backdrop-blur-md p-4 sm:p-6 md:p-8 shadow-2xl">
                <p className="text-xs sm:text-sm md:text-base font-bold text-neutral-950 uppercase tracking-wider">10 Años de</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-950">Experiencia</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 p-2.5 sm:p-3 shadow-lg flex-shrink-0">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl mb-1.5 sm:mb-2">Certificación Profesional</h3>
                  <p className="text-neutral-300 text-sm sm:text-base md:text-lg">Curso avalado por International Detailing Association</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 p-2.5 sm:p-3 shadow-lg flex-shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl mb-1.5 sm:mb-2">Clases Prácticas</h3>
                  <p className="text-neutral-300 text-sm sm:text-base md:text-lg">Aprenda directamente en nuestras instalaciones profesionales con equipos de última generación y técnicas avanzadas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 p-2.5 sm:p-3 shadow-lg flex-shrink-0">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl mb-1.5 sm:mb-2">Oportunidades Laborales</h3>
                  <p className="text-neutral-300 text-sm sm:text-base md:text-lg">Acceda a una industria en crecimiento con alta demanda. Nuestros egresados trabajan en los mejores centros de detailing del país.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <a 
                href="#contacto" 
                className="inline-block group/button w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash("#contacto")
                }}
              >
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 hover:from-amber-400 hover:to-amber-500 font-bold px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  Descubrir Programa
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
