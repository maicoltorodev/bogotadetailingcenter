"use client"

import { Button } from "@/components/ui/button"
import { Wrench, PaintBucket, CheckCircle2 } from "lucide-react"
import { scrollToHash } from "@/lib/scroll-utils"
import Image from "next/image"

export function BodyworkSection() {
  return (
    <section id="latoneria" className="relative py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-800 relative">
              <Image
                src="/professional-automotive-body-shop-repair-and-paint.jpg"
                alt="Taller de Latonería y Pintura"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-neutral-900 border border-amber-500/30 p-6 shadow-2xl">
              <p className="text-sm font-semibold text-amber-500">Taller</p>
              <p className="text-2xl font-bold text-white">Profesional</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
              <Wrench className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-semibold text-amber-500">Restauración Completa</span>
            </div>

            <h2 className="mb-6 font-serif text-4xl font-bold text-white lg:text-5xl text-balance">
              Taller de Latonería y Pintura Profesional
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-neutral-300">
              En Bogotá Detailing Center, somos especialistas en devolverle la belleza a tu vehículo. Ofrecemos
              servicios completos de latonería y pintura, desde la reparación de rayones y abolladuras hasta la
              restauración completa de la carrocería.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <CheckCircle2 className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Reparación de Abolladuras</h3>
                  <p className="text-neutral-400">Eliminamos golpes y abolladuras sin afectar la pintura original</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <PaintBucket className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Pintura de Alta Calidad</h3>
                  <p className="text-neutral-400">Igualación perfecta del color con acabado de fábrica</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-amber-500/20 p-1">
                  <Wrench className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Restauración Completa</h3>
                  <p className="text-neutral-400">Devolvemos la carrocería a su estado original</p>
                </div>
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
                Solicitar Evaluación
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
