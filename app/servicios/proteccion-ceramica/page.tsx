import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Shield, ShieldCheck, ShieldPlus } from "lucide-react"
import type { Metadata } from "next"
import { getAbsoluteUrl } from "@/lib/config"
import { ServiceStructuredData } from "@/components/service-structured-data"

const ceramicProtectionServices = [
  {
    title: "Coating Cerámico Básico",
    duration: "1 día",
    prices: { auto: "$1'200,000", standard: "$1'400,000", large: "$1'600,000" },
    description:
      "Aplicación de recubrimiento cerámico de 1 capa con protección de 1 año. Incluye preparación de superficie, descontaminación y aplicación profesional.",
    icon: Shield,
  },
  {
    title: "Coating Cerámico Premium",
    duration: "2 días",
    prices: { auto: "$1'800,000", standard: "$2'100,000", large: "$2'400,000" },
    description:
      "Recubrimiento cerámico de múltiples capas con protección de 2-3 años. Incluye corrección de pintura ligera, descontaminación completa y aplicación de múltiples capas de coating.",
    highlight: true,
    icon: ShieldCheck,
  },
  {
    title: "Coating Cerámico Ultra",
    duration: "3 días",
    prices: { auto: "$2'500,000", standard: "$2'900,000", large: "$3'300,000" },
    description:
      "Máxima protección con recubrimiento cerámico de alta gama. Protección de hasta 5 años. Incluye corrección de pintura completa, descontaminación, múltiples capas de coating y mantenimiento inicial.",
    highlight: true,
    icon: ShieldPlus,
  },
]

export const metadata: Metadata = {
  title: "Protección Cerámica | Coating Cerámico en Bogotá | Detailing Center",
  description: "Recubrimiento cerámico de última generación que protege la pintura por años, manteniendo el brillo y facilitando el mantenimiento. Coating Básico, Premium y Ultra con protección de hasta 5 años.",
  keywords: ["coating cerámico", "protección cerámica", "ceramic coating", "protección pintura", "Bogotá"],
  alternates: {
    canonical: "/servicios/proteccion-ceramica",
  },
  openGraph: {
    title: "Protección Cerámica | Coating Cerámico en Bogotá",
    description: "Recubrimiento cerámico de última generación que protege la pintura por años, manteniendo el brillo y facilitando el mantenimiento.",
    type: "website",
    locale: "es_CO",
    siteName: "Bogotá Detailing Center",
    url: getAbsoluteUrl("/servicios/proteccion-ceramica"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Protección Cerámica | Coating Cerámico en Bogotá",
    description: "Recubrimiento cerámico de última generación que protege la pintura por años, manteniendo el brillo y facilitando el mantenimiento.",
  },
}

export default function ProteccionCeramicaPage() {
  return (
    <>
      <ServiceStructuredData
        name="Protección Cerámica"
        description="Recubrimiento cerámico de última generación que protege la pintura por años, manteniendo el brillo y facilitando el mantenimiento."
        serviceType="Coating Cerámico"
        areaServed="Bogotá, Colombia"
      />
      <WhatsAppButton />
      <main className="min-h-screen bg-neutral-950">
        {/* Hero Section */}
        <section className="relative bg-neutral-950 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Protección Cerámica</h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Recubrimiento cerámico de última generación que protege la pintura por años, manteniendo el brillo y facilitando el mantenimiento
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-neutral-900 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
              {ceramicProtectionServices.map((service, index) => {
                const Icon = service.icon
                return (
                <Card
                  key={index}
                  className={`border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:border-amber-500/40 transition-all p-8 ${
                    service.highlight ? "ring-2 ring-amber-500/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div className="flex-1 flex justify-between items-start">
                      <h3 className="font-serif text-2xl font-bold text-white">{service.title}</h3>
                      <span className="text-xs text-amber-500 bg-amber-500/10 px-3 py-1 rounded whitespace-nowrap ml-4">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                  {service.highlight && (
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-amber-500 bg-amber-500/20 px-2 py-1 rounded">
                        Recomendado
                      </span>
                    </div>
                  )}
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                  <div className="border-t border-neutral-800 pt-6 space-y-3">
                    {service.prices.auto && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Auto</span>
                        <span className="text-white font-bold text-lg">{service.prices.auto}</span>
                      </div>
                    )}
                    {service.prices.standard && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Camioneta estándar</span>
                        <span className="text-white font-bold text-lg">{service.prices.standard}</span>
                      </div>
                    )}
                    {service.prices.large && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Camioneta grande</span>
                        <span className="text-white font-bold text-lg">{service.prices.large}</span>
                      </div>
                    )}
                  </div>
                </Card>
                )
              })}
            </div>

            {/* Benefits Section */}
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Beneficios de la Protección Cerámica</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-neutral-800 bg-neutral-950/50 p-6 text-center">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h4 className="font-semibold text-white mb-2">Protección Duradera</h4>
                  <p className="text-neutral-400 text-sm">Hasta 5 años de protección contra rayones y contaminantes</p>
                </Card>
                <Card className="border-neutral-800 bg-neutral-950/50 p-6 text-center">
                  <div className="text-3xl mb-3">✨</div>
                  <h4 className="font-semibold text-white mb-2">Brillo Excepcional</h4>
                  <p className="text-neutral-400 text-sm">Mantiene el brillo como recién salido de concesionario</p>
                </Card>
                <Card className="border-neutral-800 bg-neutral-950/50 p-6 text-center">
                  <div className="text-3xl mb-3">🧼</div>
                  <h4 className="font-semibold text-white mb-2">Fácil Mantenimiento</h4>
                  <p className="text-neutral-400 text-sm">Repelente al agua y fácil de limpiar</p>
                </Card>
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

