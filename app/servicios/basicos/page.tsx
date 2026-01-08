import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Droplets, Waves, CircleDot, Zap, Car, CarFront, Sparkles, Shield, Eraser } from "lucide-react"
import type { Metadata } from "next"
import { getAbsoluteUrl } from "@/lib/config"
import { ServiceStructuredData } from "@/components/service-structured-data"

const washServices = [
  {
    title: "Premium Wash",
    duration: "1 hora",
    prices: { standard: "$60,000", large: "$66,000" },
    description:
      "Enjuague exterior con dos tipos de shampoo, aplicación de cera, aspirado completo y protección en llantas.",
    icon: Droplets,
  },
  {
    title: "Premium Wash Hidrofóbico",
    duration: "1 hora",
    prices: { standard: "$95,000", large: "$110,000" },
    description: "Shampoo con propiedades hidrofóbicas. Durabilidad de 3-4 semanas.",
    icon: Waves,
  },
  {
    title: "Detallado De Llantas",
    duration: "3 horas",
    prices: { standard: "$195,000" },
    description: "Limpieza profunda de mordazas, amortiguadores y descontaminación completa de rines.",
    icon: CircleDot,
  },
  {
    title: "Motor Detailing + Vapor",
    duration: "4 horas",
    prices: { standard: "$245,000", large: "$270,000" },
    description: "Lavado meticuloso con vapor. Seguro para vehículos híbridos y eléctricos.",
    icon: Zap,
  },
  {
    title: "Motor + Premium Wash",
    duration: "1 hora",
    prices: { standard: "$110,000", large: "$130,000" },
    description: "Lavado tradicional de motor más premium wash completo.",
    icon: Car,
  },
]

const comboServices = [
  {
    title: "Chasis + Premium Wash",
    duration: "1h 40min",
    prices: { standard: "$105,000", large: "$115,000" },
    description: "Lavado de chasis con desengrasantes biodegradables más premium wash completo.",
    icon: Car,
  },
  {
    title: "Premium Wash + Chasis + Motor",
    duration: "2 horas",
    prices: { standard: "$150,000", large: "$170,000" },
    description: "Lavado completo de vehículo incluyendo chasis y motor.",
    icon: CarFront,
  },
  {
    title: "Hidrophobic + Chasis",
    duration: "2 horas",
    prices: { standard: "$145,000", large: "$160,000" },
    description: "Lavado hidrofóbico combinado con limpieza profunda de chasis.",
    icon: Waves,
  },
]

const protectionServices = [
  {
    title: "Wax Service",
    duration: "1-2 horas",
    prices: { standard: "$145,000", large: "$160,000" },
    description: "Aplicación de cera premium con máquina de doble acción para brillo duradero.",
    icon: Sparkles,
  },
  {
    title: "Wash And Protect",
    duration: "1h 45min",
    prices: { standard: "$205,000", large: "$225,000" },
    description: "Sellador de polímeros con protección de hasta 6 meses.",
    icon: Shield,
  },
  {
    title: "Descontamination Service",
    duration: "2-3 horas",
    prices: { standard: "$226,000", large: "$300,000" },
    description: "Descontaminación no abrasiva para eliminar contaminantes adheridos a la pintura.",
    icon: Eraser,
  },
]

export const metadata: Metadata = {
  title: "Servicios Básicos de Lavado Profesional | Bogotá Detailing Center",
  description: "Servicios de lavado profesional, combos ahorradores y sistemas de protección para mantener su vehículo impecable. Premium Wash, Detallado de Llantas, Motor Detailing y más.",
  keywords: ["lavado profesional", "premium wash", "detallado de llantas", "motor detailing", "servicios básicos", "Bogotá"],
  alternates: {
    canonical: "/servicios/basicos",
  },
  openGraph: {
    title: "Servicios Básicos de Lavado Profesional | Bogotá Detailing Center",
    description: "Servicios de lavado profesional, combos ahorradores y sistemas de protección para mantener su vehículo impecable.",
    type: "website",
    locale: "es_CO",
    siteName: "Bogotá Detailing Center",
    url: getAbsoluteUrl("/servicios/basicos"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Básicos de Lavado Profesional | Bogotá Detailing Center",
    description: "Servicios de lavado profesional, combos ahorradores y sistemas de protección para mantener su vehículo impecable.",
  },
}

export default function ServiciosBasicosPage() {
  return (
    <>
      <ServiceStructuredData
        name="Servicios Básicos de Lavado"
        description="Servicios de lavado profesional, combos ahorradores y sistemas de protección para mantener su vehículo impecable."
        serviceType="Lavado Profesional Automotriz"
        areaServed="Bogotá, Colombia"
      />
      <WhatsAppButton />
      <main className="min-h-screen bg-neutral-950">
        {/* Hero Section */}
        <section className="relative bg-neutral-950 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Servicios Básicos</h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Servicios rápidos y eficientes para mantener su vehículo impecable
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-neutral-900 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            {/* Lavado Profesional */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Servicios De Lavado Profesional Para Vehículos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {washServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                  <Card
                    key={index}
                    className="border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:border-amber-500/40 transition-all p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1 flex justify-between items-start">
                        <h3 className="font-serif text-xl font-bold text-white">{service.title}</h3>
                        <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">{service.duration}</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="border-t border-neutral-800 pt-4 space-y-2">
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
            </div>

            {/* Combos Ahorradores */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Combos Ahorradores
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comboServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                  <Card
                    key={index}
                    className="border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:border-amber-500/40 transition-all p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1 flex justify-between items-start">
                        <h3 className="font-serif text-xl font-bold text-white">{service.title}</h3>
                        <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">{service.duration}</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="border-t border-neutral-800 pt-4 space-y-2">
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
            </div>

            {/* Sistemas de Protección */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Sistemas De Protección En El Lavado
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {protectionServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                  <Card
                    key={index}
                    className="border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:border-amber-500/40 transition-all p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1 flex justify-between items-start">
                        <h3 className="font-serif text-xl font-bold text-white">{service.title}</h3>
                        <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">{service.duration}</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="border-t border-neutral-800 pt-4 space-y-2">
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
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-neutral-400 text-sm mb-4">Los precios pueden variar según el tamaño y estado del vehículo</p>
              <Link href="/#contacto">
                <button className="bg-amber-500 text-neutral-950 px-8 py-3 rounded-md hover:bg-amber-400 transition-colors font-semibold">
                  Solicitar Cotización
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

