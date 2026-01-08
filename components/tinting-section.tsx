"use client"

import { Button } from "@/components/ui/button"
import { Sun, Shield, Eye } from "lucide-react"
import { scrollToHash } from "@/lib/scroll-utils"
import Image from "next/image"

export function TintingSection() {
  return (
    <section id="polarizado" className="relative py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
              <Sun className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-semibold text-amber-500">Protección Solar</span>
            </div>

            <h2 className="mb-6 font-serif text-4xl font-bold text-white lg:text-5xl text-balance">
              Polarizados para Autos
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-neutral-300">
              En Bogotá Detailing Center, ofrecemos un servicio especializado de polarizados para vidrios de autos que
              garantiza no solo un aspecto elegante, sino también una protección óptima para su vehículo. Siempre
              trabajando con las mejores marcas como LLumar.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <Sun className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Bloqueo UV 99%</h3>
                  <p className="text-neutral-400">Protección total contra rayos ultravioleta dañinos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <Shield className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Mayor Privacidad</h3>
                  <p className="text-neutral-400">Protege el interior de miradas indiscretas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <Eye className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Aspecto Elegante</h3>
                  <p className="text-neutral-400">Dale un look premium y sofisticado a tu vehículo</p>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logos/llumar-logo.jpg"
                  alt="LLumar"
                  width={120}
                  height={32}
                  className="h-8 w-auto brightness-0 invert"
                  quality={85}
                />
                <p className="text-sm text-neutral-300">Instaladores certificados de LLumar</p>
              </div>
            </div>

            <a 
              href="#contacto"
              onClick={(e) => {
                e.preventDefault()
                scrollToHash("#contacto")
              }}
            >
              <Button size="lg" className="bg-amber-500 text-neutral-950 hover:bg-amber-400 font-semibold">
                Cotizar Polarizado
              </Button>
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-800 relative">
              <Image
                src="/car-window-tinting-installation-professional.jpg"
                alt="Polarizado para Autos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
