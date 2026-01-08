import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Sparkles, Star, Award } from "lucide-react"
import type { Metadata } from "next"
import { getAbsoluteUrl } from "@/lib/config"
import { ServiceStructuredData } from "@/components/service-structured-data"

const detalladoServices = [
  {
    title: "Full Detailing Exterior + Interior",
    duration: "1 a 2 días",
    prices: { auto: "$890,000", standard: "$1'050,000", large: "$1'250,000" },
    description:
      "Servicio completo que incluye corrección de pintura, detailing interior completo, limpieza profunda de motor, chasis y protección cerámica básica. Transformación integral de su vehículo.",
    highlight: true,
    icon: Sparkles,
  },
  {
    title: "Premium Detailing Package",
    duration: "2 a 3 días",
    prices: { auto: "$1'200,000", standard: "$1'450,000", large: "$1'700,000" },
    description:
      "Paquete premium que combina corrección de pintura completa, detailing interior premium, protección cerámica y todos los servicios de mantenimiento. El servicio más completo que ofrecemos.",
    highlight: true,
    icon: Star,
  },
  {
    title: "Detailing Completo Básico",
    duration: "1 día",
    prices: { auto: "$650,000", standard: "$780,000", large: "$920,000" },
    description:
      "Servicio completo básico que incluye premium wash, detailing interior estándar, limpieza de motor y aplicación de protección básica. Ideal para mantenimiento regular.",
    icon: Sparkles,
  },
  {
    title: "Detailing de Exhibición",
    duration: "3 a 4 días",
    prices: { auto: "$1'500,000", standard: "$1'800,000", large: "$2'100,000" },
    description:
      "Servicio de nivel exhibición que incluye corrección de pintura de exhibición, detailing interior premium, protección cerámica ultra, PPF en áreas críticas y acabado impecable.",
    highlight: true,
    icon: Award,
  },
]

export const metadata: Metadata = {
  title: "Detailing Completo | Paquetes Premium de Detailing en Bogotá | Detailing Center",
  description: "Paquetes completos que combinan interior y exterior para una transformación integral de su vehículo. Detailing de Exhibición, Premium y más.",
  keywords: ["detailing completo", "paquetes detailing", "detailing premium", "detailing exhibición", "transformación vehículo", "Bogotá"],
  alternates: {
    canonical: "/servicios/detallado",
  },
  openGraph: {
    title: "Detailing Completo | Paquetes Premium de Detailing en Bogotá",
    description: "Paquetes completos que combinan interior y exterior para una transformación integral de su vehículo.",
    type: "website",
    locale: "es_CO",
    siteName: "Bogotá Detailing Center",
    url: getAbsoluteUrl("/servicios/detallado"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Detailing Completo | Paquetes Premium de Detailing en Bogotá",
    description: "Paquetes completos que combinan interior y exterior para una transformación integral de su vehículo.",
  },
}

export default function DetalladoPage() {
  return (
    <>
      <ServiceStructuredData
        name="Detailing Completo"
        description="Paquetes completos que combinan interior y exterior para una transformación integral de su vehículo. Detailing de Exhibición, Premium y más."
        serviceType="Detailing Automotriz Completo"
        areaServed="Bogotá, Colombia"
      />
      <WhatsAppButton />
      <main className="min-h-screen bg-neutral-950">
        {/* Hero Section */}
        <section className="relative bg-neutral-950 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Servicios Detallado</h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Servicios completos que combinan interior y exterior para una transformación integral de su vehículo.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-neutral-900 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {detalladoServices.map((service, index) => {
                const Icon = service.icon
                return (
                <Card
                  key={index}
                  className={`border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:border-amber-500/40 transition-all p-6 ${
                    service.highlight ? "border-amber-500/50 bg-gradient-to-br from-amber-500/5 to-neutral-950/50" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/30">
                      <Icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div className="flex-1 flex justify-between items-start">
                      <h3 className="font-serif text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">{service.duration}</span>
                    </div>
                  </div>

                  <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{service.description}</p>

                  <div className="border-t border-neutral-800 pt-4 space-y-2">
                    {service.prices.auto && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500 text-sm">Automóvil</span>
                        <span className="text-white font-semibold">{service.prices.auto}</span>
                      </div>
                    )}
                    {service.prices.standard && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500 text-sm">Camioneta estándar</span>
                        <span className="text-white font-semibold">{service.prices.standard}</span>
                      </div>
                    )}
                    {service.prices.large && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500 text-sm">Camioneta grande</span>
                        <span className="text-white font-semibold">{service.prices.large}</span>
                      </div>
                    )}
                  </div>
                </Card>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <p className="text-neutral-400 text-sm mb-4">
                Los precios pueden variar según el tamaño y estado del vehículo
              </p>
              <Link href="/#contacto">
                <button className="bg-amber-500 text-neutral-950 px-8 py-3 rounded-md hover:bg-amber-400 transition-colors font-semibold">
                  Solicitar Cotización
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-neutral-950 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl font-bold text-white mb-6">¿No estás seguro qué servicio necesitas?</h2>
              <p className="text-lg text-neutral-300 mb-8">
                Nuestro equipo de expertos está listo para asesorarte y recomendarte el servicio perfecto para tu vehículo.
              </p>
              <Link href="/#contacto">
                <button className="bg-amber-500 text-neutral-950 px-8 py-3 rounded-md hover:bg-amber-400 transition-colors font-semibold">
                  Consulta Gratuita
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

