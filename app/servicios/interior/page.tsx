import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Sofa, SquareStack, Package, Armchair, Square, Wrench, Droplet, Shield } from "lucide-react"
import type { Metadata } from "next"
import { getAbsoluteUrl } from "@/lib/config"
import { ServiceStructuredData } from "@/components/service-structured-data"

const interiorServices = [
  {
    title: "Estrene otra vez",
    duration: "1 a 1.5 días",
    prices: { auto: "$395,000", standard: "$460,000", large: "$560,000" },
    description:
      "Limpieza completa de tapicería, techo, tablero, parales, cinturones, consola, tapetes y baúl con productos biodegradables. Incluye hidratación de todas las superficies tratadas.",
    icon: Sofa,
  },
  {
    title: "Carpet Renew",
    duration: "3 días",
    prices: { auto: "$300,000", standard: "$320,000", large: "$360,000" },
    description:
      "Recomendado para malos olores, derrames o exceso de arena. Debe ir acompañado del servicio Estrene otra vez.",
    note: "Debe combinarse con Estrene otra vez",
    icon: SquareStack,
  },
  {
    title: "Combo, asientos y carteras",
    duration: "3 horas",
    prices: { auto: "$290,000", standard: "$320,000", large: "$390,000" },
    description:
      "Limpieza interna de bajo costo con acabado impecable. Incluye hidratación con producto libre de silicona e incluye Premium wash.",
    icon: Package,
  },
  {
    title: "Limpieza asientos",
    duration: "3 horas",
    prices: { auto: "$175,000", standard: "$185,000", large: "$195,000" },
    description:
      "Limpieza de 5 asientos en tela y cuero con productos biodegradables. Incluye hidratación para superficies en cuero.",
    icon: Armchair,
  },
  {
    title: "Limpieza de Techo",
    duration: "1 a 2 horas",
    prices: { auto: "$165,000", standard: "$190,000", large: "$205,000" },
    description:
      "Limpieza cuidadosa del techo usando productos adecuados para no soltar el pegamento ni generar motas.",
    icon: Square,
  },
  {
    title: "Limpieza Interior Básica",
    duration: "3 a 4 horas",
    prices: { auto: "$170,000", standard: "$200,000", large: "$230,000" },
    description: "Limpieza interior del tablero de instrumentos, parales de puertas y puertas. Incluye hidratación.",
    icon: Wrench,
  },
  {
    title: "Limpieza Tapete",
    duration: "3 a 4 horas",
    prices: { auto: "$170,000", standard: "$210,000", large: "$260,000" },
    description:
      "Lavado de tapete y sobretapetes en sitio, sin desmontar asientos. Recomendación: mayor tiempo de secado.",
    icon: SquareStack,
  },
  {
    title: "Hidratación cuero",
    duration: "30 minutos",
    prices: { auto: "$85,000", standard: "$95,000", large: "$105,000" },
    description:
      "Hidratación de superficies de cuero, vinilo y plásticas con producto libre de silicona y pH balanceado.",
    icon: Droplet,
  },
  {
    title: "Interior Protection",
    duration: "24 horas",
    prices: { auto: "$870,000", standard: "$1'000,000", large: "$1'150,000" },
    description:
      "Detallado full con servicio Estrene otra vez + coating de nanotecnología para tela (12 meses) + protección cerámica para plásticos, vinilos y cuero (24 meses).",
    highlight: true,
    icon: Shield,
  },
]

export const metadata: Metadata = {
  title: "Detailing Interior | Limpieza Profunda de Interior en Bogotá | Detailing Center",
  description: "Servicios profesionales de limpieza y protección para el interior de su vehículo. Limpieza profunda de tapicería, techo, asientos, alfombras y más con productos biodegradables.",
  keywords: ["detailing interior", "limpieza interior auto", "limpieza tapicería", "carpet renew", "estrene otra vez", "Bogotá"],
  alternates: {
    canonical: "/servicios/interior",
  },
  openGraph: {
    title: "Detailing Interior | Limpieza Profunda de Interior en Bogotá",
    description: "Servicios profesionales de limpieza y protección para el interior de su vehículo con productos biodegradables.",
    type: "website",
    locale: "es_CO",
    siteName: "Bogotá Detailing Center",
    url: getAbsoluteUrl("/servicios/interior"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Detailing Interior | Limpieza Profunda de Interior en Bogotá",
    description: "Servicios profesionales de limpieza y protección para el interior de su vehículo.",
  },
}

export default function ServiciosInteriorPage() {
  return (
    <>
      <ServiceStructuredData
        name="Detailing Interior"
        description="Servicios profesionales de limpieza y protección para el interior de su vehículo con productos biodegradables."
        serviceType="Limpieza Profunda de Interior"
        areaServed="Bogotá, Colombia"
      />
      <WhatsAppButton />
      <main className="min-h-screen bg-neutral-950">
        {/* Hero Section */}
        <section className="relative bg-neutral-950 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Servicios De Interior</h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Limpieza profunda y protección para el interior de su vehículo con productos biodegradables y de alta calidad
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-neutral-900 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {interiorServices.map((service, index) => {
                const Icon = service.icon
                return (
                <Card
                  key={index}
                  className={`border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:border-amber-500/40 transition-all p-6 ${
                    service.highlight ? "ring-2 ring-amber-500/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/30">
                      <Icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="flex-1 flex justify-between items-start">
                      <h3 className="font-serif text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">{service.duration}</span>
                    </div>
                  </div>
                  {service.highlight && (
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-amber-500 bg-amber-500/20 px-2 py-1 rounded">
                        Recomendado
                      </span>
                    </div>
                  )}
                  {service.note && (
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-amber-500 bg-amber-500/20 px-2 py-1 rounded">
                        {service.note}
                      </span>
                    </div>
                  )}
                  <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="border-t border-neutral-800 pt-4 space-y-2">
                    {service.prices.auto && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500 text-sm">Auto</span>
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

