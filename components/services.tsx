"use client"

import { Card } from "@/components/ui/card"
import { Droplets, Sparkles, Shield, Car, Wrench, Sun, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { scrollToHash } from "@/lib/scroll-utils"

const serviceCategories = [
  {
    title: "Lavado y Limpieza Básica",
    description: "Lavado profesional, limpieza de motor, chasis y servicios rápidos para mantener su vehículo impecable",
    icon: Droplets,
    href: "/servicios/basicos",
    color: "from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    title: "Detailing Interior",
    description: "Limpieza profunda y protección para el interior de su vehículo con productos biodegradables",
    icon: Car,
    href: "/servicios/interior",
    color: "from-purple-500/10 to-purple-600/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    title: "Detailing Exterior",
    description: "Corrección de pintura, pulido y abrillantado para restaurar el brillo original de su vehículo",
    icon: Sparkles,
    href: "/servicios/correccion-pintura",
    color: "from-amber-500/10 to-amber-600/10",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    title: "Detailing Completo",
    description: "Paquetes completos que combinan interior y exterior para una transformación integral de su vehículo",
    icon: Sparkles,
    href: "/servicios/detallado",
    color: "from-violet-500/10 to-violet-600/10",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    title: "Protección Cerámica",
    description: "Recubrimiento cerámico de última generación con protección de hasta 5 años",
    icon: Shield,
    href: "/servicios/proteccion-ceramica",
    color: "from-emerald-500/10 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    title: "Paint Protection Film (PPF)",
    description: "Película transparente ultra resistente con garantía de 12 años contra rayones y daños",
    icon: Shield,
    href: "/ppf",
    color: "from-cyan-500/10 to-cyan-600/10",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    title: "Polarizados",
    description: "Instalación profesional de polarizados automotrices con marca Llumar",
    icon: Sun,
    href: "/polarizados",
    color: "from-orange-500/10 to-orange-600/10",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    title: "Latonería y Pintura",
    description: "Taller especializado en latonería y pintura profesional con tecnología de punta",
    icon: Wrench,
    href: "/latoneria",
    color: "from-red-500/10 to-red-600/10",
    borderColor: "border-red-500/30",
    iconColor: "text-red-400",
  },
]

export function Services() {
  const pathname = usePathname()
  const router = useRouter()

  const handleHashClick = (hash: string) => {
    if (pathname === "/") {
      scrollToHash(hash)
    } else {
      router.push(`/${hash}`)
    }
  }

  return (
    <section id="servicios" className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">Nuestros Servicios</p>
          </div>
          <h2 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Servicios
            <br />
            <span className="text-amber-500">Especializados</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 px-4">
            Descubre nuestra gama completa de servicios de detailing automotriz profesional. 
            Cada categoría está diseñada para satisfacer las necesidades específicas de su vehículo.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href={category.href} className="group block h-full touch-manipulation">
                <Card className={`relative overflow-hidden border border-neutral-800/50 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 p-8 md:p-10 h-full cursor-pointer rounded-2xl transition-colors duration-300 md:backdrop-blur-sm md:hover:border-amber-500/30 md:hover:shadow-lg border-draw-services`}>
                  <div className={`hidden md:block absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 md:group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-center mb-6">
                      <div className={`relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${category.color} border ${category.borderColor} shadow-lg shadow-amber-500/10 md:group-hover:scale-110 md:group-hover:shadow-amber-500/20 transition-transform duration-300 before:hidden md:before:block before:absolute before:inset-0 before:bg-amber-500/20 before:rounded-2xl before:blur-xl md:group-hover:before:blur-2xl before:transition-all before:duration-300`}>
                        <Icon className={`h-8 w-8 md:h-10 md:w-10 ${category.iconColor} relative z-10`} />
                      </div>
                    </div>
                    <div className="flex-grow space-y-3 text-center">
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">{category.title}</h3>
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
                      <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-medium">{category.description}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-center text-amber-500 font-semibold text-sm md:text-base md:group-hover:gap-2 transition-all duration-300">
                      <span>Ver servicios</span>
                      <ChevronRight className="h-4 w-4 md:h-5 md:w-5 ml-1 md:group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="relative mt-12 sm:mt-16 md:mt-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-12">
        <Card className="relative overflow-hidden border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-neutral-950/50 backdrop-blur-sm p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl shadow-2xl before:absolute before:top-0 before:right-0 before:w-64 before:h-64 before:bg-amber-500/10 before:rounded-full before:blur-3xl after:absolute after:bottom-0 after:left-0 after:w-64 after:h-64 after:bg-amber-500/10 after:rounded-full after:blur-3xl">
          <div className="relative z-10 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              ¿No estás seguro qué servicio necesitas?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Nuestro equipo de expertos está listo para asesorarte y recomendarte el servicio perfecto para tu vehículo.
            </p>
            <Link 
              href="/#contacto" 
              className="inline-flex group/button w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 px-8 sm:px-10 py-4 sm:py-5 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-amber-500/50 hover:scale-105 touch-manipulation min-h-[48px] min-w-[48px] items-center justify-center active:scale-95 active:opacity-90 before:absolute before:inset-0 before:bg-gradient-to-r before:from-amber-400 before:to-amber-500 before:opacity-0 group-hover/button:before:opacity-100 before:transition-opacity before:duration-300"
              onClick={(e) => {
                e.preventDefault()
                handleHashClick("#contacto")
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Consulta Gratuita
                <ChevronRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
              </span>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  )
}
