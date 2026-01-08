"use client"

import { Button } from "@/components/ui/button"
import { Award, CheckCircle2, Shield, Sparkles, Users, Calendar, Target, Badge } from "lucide-react"
import { Card } from "@/components/ui/card"
import { CardInView } from "@/components/ui/card-in-view"
import { usePathname, useRouter } from "next/navigation"
import { scrollToHash } from "@/lib/scroll-utils"
import Image from "next/image"

export function AboutSection() {
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
    <section id="nosotros" className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden before:absolute before:top-0 before:left-0 before:w-96 before:h-96 before:bg-amber-500/5 before:rounded-full before:blur-3xl after:absolute after:bottom-0 after:right-0 after:w-96 after:h-96 after:bg-amber-500/5 after:rounded-full after:blur-3xl">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
            <span className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">
              10 Años de Experiencia
            </span>
          </div>
          <h2 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2">
            Somos Bogotá
            <br />
            <span className="text-amber-500">Detailing Center</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-amber-400 font-semibold mb-4 sm:mb-6 px-4">
            Expertos en Detallado Automotriz en Bogotá y Chía
          </p>
          <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 mb-6 sm:mb-8 leading-relaxed px-4">
            10 años de experiencia cuidando autos con pasión
          </p>
          <div className="inline-flex items-center gap-3 rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-amber-500/5 backdrop-blur-sm px-6 py-3 shadow-lg">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-lg font-bold text-amber-400">¡No somos un lavadero de autos, convencional!</span>
          </div>
        </div>

        {/* Main Content - Image Centered Above, Cards Below */}
        <div className="mb-12 sm:mb-16">
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="relative group max-w-2xl w-full aspect-[4/3] rounded-3xl border-2 border-neutral-800 shadow-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 border-draw-sequential">
              <Image
                src="/images/equipo.png"
                alt="Equipo de Bogotá Detailing Center trabajando"
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>

          {/* Cards Below - Grid for Symmetry */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Historia */}
            <Card className="border-neutral-800 bg-gradient-to-br from-neutral-950/80 to-neutral-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 shadow-lg">
                  <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">Nuestra Historia</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 text-neutral-200 text-base sm:text-lg">
                  <div className="h-3 w-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50 flex-shrink-0"></div>
                  <p>Fundados en <span className="text-amber-400 font-bold">2014</span></p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-neutral-200 text-base sm:text-lg">
                  <div className="h-3 w-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50 flex-shrink-0"></div>
                  <p>Trayectoria en el sector automotriz desde <span className="text-amber-400 font-bold">2010</span></p>
                </div>
              </div>
            </Card>

            {/* Misión */}
            <Card className="border-neutral-800 bg-gradient-to-br from-neutral-950/80 to-neutral-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 shadow-lg">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">Nuestra Misión</h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-200">
                Somos un centro especializado en detailing automotriz, recubrimientos cerámicos y corrección de pintura. 
                Nuestra misión es dejar tu vehículo <span className="text-amber-400 font-bold text-2xl">#MejorQueNuevo</span> mediante 
                procedimientos de alta calidad que restauran y protegen su estética.
              </p>
            </Card>
          </div>
        </div>

        {/* Galería de Trabajo e Instalaciones */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Nuestro Trabajo e Instalaciones</h3>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Conoce nuestras instalaciones profesionales y el proceso de trabajo que garantiza resultados excepcionales
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-3xl border-2 border-neutral-800 shadow-2xl hover:border-amber-500/40 transition-all duration-500 border-draw-sequential aspect-[4/3] before:absolute before:inset-0 before:bg-gradient-to-t before:from-neutral-950/95 before:via-neutral-950/70 before:to-transparent">
              <Image
                src="/images/trabajo-profesional.png"
                alt="Técnico profesional aplicando Paint Protection Film en Bogotá Detailing Center"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-bold text-2xl mb-2">Trabajo Profesional</p>
                <p className="text-neutral-200 text-base">Aplicación meticulosa de PPF y protección cerámica</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl border-2 border-neutral-800 shadow-2xl hover:border-amber-500/40 transition-all duration-500 border-draw-sequential aspect-[4/3] before:absolute before:inset-0 before:bg-gradient-to-t before:from-neutral-950/95 before:via-neutral-950/70 before:to-transparent">
              <Image
                src="/images/instalaciones-profesionales.png"
                alt="Instalaciones profesionales de Bogotá Detailing Center con certificación IDA"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-bold text-2xl mb-2">Instalaciones Certificadas</p>
                <p className="text-neutral-200 text-base">Espacios profesionales con certificación IDA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipo y Certificación */}
        <div className="mb-16">
          <Card className="border-amber-500/30 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4 font-serif">Detallado Automotriz de Alta Calidad</h3>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Nuestro equipo está liderado por <span className="text-amber-500 font-semibold">Juan Carlos Pinzón</span>. 
                Todos nuestros técnicos cuentan con certificación <span className="text-amber-500 font-semibold">IDA (International Detailing Association)</span>.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-amber-500" />
                  Garantías en Cada Servicio
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300">Restauración del brillo original de tu carro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300">Corrección de rayones, manchas y desgaste de pintura</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300">Aplicación profesional y garantizada de cerámicos y PPF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300">Solución efectiva a los efectos estéticos</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-amber-500" />
                  Problemas que Solucionamos
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300">Rayones y microabrasiones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300">Pérdida de brillo y desgaste de pintura</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300">Daños menores en carrocería y acabados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-300">Acabado impecable y duradero para tu carro o moto</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Compromiso Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Compromiso con la Calidad</h3>
            <p className="text-xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              En Bogotá Detailing Center nos esforzamos por superar tus expectativas, ofreciendo un servicio profesional 
              que protege tu inversión y resalta la belleza de tu vehículo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <CardInView>
              <Card className="group relative overflow-hidden border border-neutral-800/50 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 backdrop-blur-sm p-8 md:p-10 text-center hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 rounded-2xl hover:-translate-y-1">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 shadow-lg shadow-amber-500/10 group-hover:scale-110 group-hover:shadow-amber-500/20 transition-all duration-300">
                        <Users className="h-8 w-8 md:h-10 md:w-10 text-amber-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-white text-xl md:text-2xl font-serif tracking-tight">Atención Personalizada</h4>
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-medium">En cada una de nuestras sedes</p>
                  </div>
              </div>
            </Card>
            </CardInView>

            <CardInView>
              <Card className="group relative overflow-hidden border border-neutral-800/50 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 backdrop-blur-sm p-8 md:p-10 text-center hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 rounded-2xl hover:-translate-y-1">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 shadow-lg shadow-amber-500/10 group-hover:scale-110 group-hover:shadow-amber-500/20 transition-all duration-300">
                        <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-amber-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-white text-xl md:text-2xl font-serif tracking-tight">Resultados Excepcionales</h4>
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-medium">Tu auto brillará como recién salido de concesionario</p>
                  </div>
              </div>
            </Card>
            </CardInView>

            <CardInView>
              <Card className="group relative overflow-hidden border border-neutral-800/50 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 backdrop-blur-sm p-8 md:p-10 text-center hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 rounded-2xl hover:-translate-y-1">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 shadow-lg shadow-amber-500/10 group-hover:scale-110 group-hover:shadow-amber-500/20 transition-all duration-300">
                        <Shield className="h-8 w-8 md:h-10 md:w-10 text-amber-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-white text-xl md:text-2xl font-serif tracking-tight">Calidad Garantizada</h4>
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-medium">Soluciones efectivas y duraderas</p>
                  </div>
              </div>
            </Card>
            </CardInView>
          </div>
        </div>

        {/* Respaldos y Certificación */}
        <div className="mb-12">
          {/* Marcas */}
          <div className="mb-12 sm:mb-16">
            <p className="mb-6 sm:mb-8 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-500 px-4">
              Respaldados por las Mejores Marcas
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4">
              <a
                href="https://www.gtechniq.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 relative h-10 sm:h-12 md:h-14 w-auto max-w-[120px] sm:max-w-[150px] transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/logos/gtech.webp"
                  alt="Gtechniq - Instalador Acreditado"
                  width={150}
                  height={56}
                  className="h-10 sm:h-12 md:h-14 w-auto max-w-[120px] sm:max-w-[150px] object-contain"
                  quality={85}
                />
              </a>
              <a
                href="https://llumar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 relative h-10 sm:h-12 md:h-14 w-auto max-w-[120px] sm:max-w-[150px] transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/logos/llumar-logo.jpg"
                  alt="Llumar - Paint Protection Film"
                  width={150}
                  height={56}
                  className="h-10 sm:h-12 md:h-14 w-auto max-w-[120px] sm:max-w-[150px] object-contain"
                  quality={85}
                />
              </a>
            </div>
          </div>

          {/* Certificación IDA - Destacada */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div className="text-center max-w-4xl mx-auto px-4">
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-4 leading-relaxed">
                Nuestro proceso profesional está avalado por el{" "}
                <a
                  href="https://the-ida.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition-colors font-semibold"
                >
                  IDA (International Detailing Association)
                </a>
                , una ventaja que nos distingue y garantiza la excelencia en cada servicio.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://the-ida.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 flex-shrink-0"
              >
                <Image
                  src="/images/ida.webp"
                  alt="International Detailing Association - Certified Detailer"
                  width={144}
                  height={144}
                  className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto object-contain"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-2 ring-amber-500/20 group-hover:ring-amber-500/40 transition-all pointer-events-none" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="relative overflow-hidden border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-neutral-950/50 backdrop-blur-sm p-12 md:p-16 max-w-5xl mx-auto rounded-3xl shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-white mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
                Si buscas un centro especializado en detailing automotriz, cerámicos o taller de pintura en Bogotá y Chía, 
                somos tu mejor opción.
              </p>
              <p className="text-xl text-neutral-200 mb-10 max-w-3xl mx-auto">
                Descubre por qué los amantes de autos y motos eligen a Bogotá Detailing Center: 
                calidad excepcional, soluciones efectivas y resultados que dejan tu carro{" "}
                <span className="text-amber-400 font-bold text-2xl">#MejorQueNuevo</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
                <a 
                  href="/#contacto" 
                  className="inline-block group/button touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault()
                    handleHashClick("#contacto")
                  }}
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  <Button size="lg" className="!h-auto bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 hover:from-amber-400 hover:to-amber-500 font-bold px-10 text-lg shadow-lg hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 !min-h-[44px] !min-w-[44px] py-[12px] touch-manipulation inline-flex items-center justify-center">
                    Agenda tu Cita
                  </Button>
                </a>
                <a 
                  href="/#servicios" 
                  className="inline-block touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault()
                    handleHashClick("#servicios")
                  }}
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  <Button size="lg" variant="outline" className="!h-auto border-2 border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600 font-bold px-10 text-lg transition-all duration-300 !min-h-[44px] !min-w-[44px] py-[12px] touch-manipulation inline-flex items-center justify-center">
                    Ver Nuestros Servicios
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
