import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Sparkles, Sun, Star } from "lucide-react"
import type { Metadata } from "next"
import { getAbsoluteUrl } from "@/lib/config"
import { ServiceStructuredData } from "@/components/service-structured-data"

const paintCorrectionServices = [
  {
    title: "Rejuvenecimiento de pintura",
    duration: "3 a 4 horas",
    prices: { auto: "$335,000", standard: "$390,000", large: "$430,000" },
    description:
      "Sistema rápido y económico con buen acabado. Incluye Premium Wash, descontaminación física, micropulido de una sola etapa eliminando oxidación y marcas superficiales. Incluye protección, acondicionador de molduras y dressing.",
    icon: Sparkles,
  },
  {
    title: "Exterior Detailing Service",
    duration: "5 a 7 horas",
    prices: { auto: "$490,000", standard: "$600,000", large: "$650,000" },
    description:
      "Corrección con Polish dedicado. Incluye Premium Wash, descontaminación física, pulido para eliminar hasta 50% de marcas rectas y defectos superficiales. Mejora el brillo, profundidad del color y protección con cera.",
    icon: Sparkles,
  },
  {
    title: "Restoration to Shine",
    duration: "8 a 16 horas",
    prices: { auto: "$680,000", standard: "$810,000", large: "$940,000" },
    description:
      "¡Nuestra famosa corrección completa! Incluye Premium Wash, descontaminación, etapas de corrección con compuestos para eliminar defectos profundos cuidando el barniz, etapa de abrillantado y protección con cera.",
    highlight: true,
    icon: Sun,
  },
  {
    title: "Acabado de Exhibición",
    duration: "2 a 3 días",
    prices: { auto: "$800,000", standard: "$920,000", large: "$1'150,000" },
    description:
      "Servicio diseñado para un acabado de exhibición. Incluye Premium Wash, descontaminación, etapas de pulido, polish, abrillantado y refinado. Limpieza profunda de emblemas, empaques, ranuras, realce de cromados y protección.",
    highlight: true,
    icon: Star,
  },
]

export const metadata: Metadata = {
  title: "Corrección de Pintura | Paint Correction en Bogotá | Detailing Center",
  description: "Servicios profesionales de corrección de pintura para eliminar rayones, marcas y defectos, restaurando el brillo original de su vehículo. Técnicas avanzadas con productos de alta calidad.",
  keywords: ["corrección de pintura", "paint correction", "eliminar rayones", "pulido profesional", "restauración pintura", "Bogotá"],
  alternates: {
    canonical: "/servicios/correccion-pintura",
  },
  openGraph: {
    title: "Corrección de Pintura | Paint Correction en Bogotá",
    description: "Servicios profesionales de corrección de pintura para eliminar rayones, marcas y defectos, restaurando el brillo original de su vehículo.",
    type: "website",
    locale: "es_CO",
    siteName: "Bogotá Detailing Center",
    url: getAbsoluteUrl("/servicios/correccion-pintura"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrección de Pintura | Paint Correction en Bogotá",
    description: "Servicios profesionales de corrección de pintura para eliminar rayones, marcas y defectos, restaurando el brillo original de su vehículo.",
  },
}

export default function CorreccionPinturaPage() {
  return (
    <>
      <ServiceStructuredData
        name="Corrección de Pintura"
        description="Servicios profesionales de corrección de pintura para eliminar rayones, marcas y defectos, restaurando el brillo original de su vehículo."
        serviceType="Paint Correction"
        areaServed="Bogotá, Colombia"
      />
      <WhatsAppButton />
      <main className="min-h-screen bg-neutral-950">
        {/* Hero Section */}
        <section className="relative bg-neutral-950 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Corrección de Pintura</h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Eliminamos marcas de remolinos, micro rayones y defectos usando técnicas y productos de alta calidad, cuidando el barniz original
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-neutral-900 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
              {paintCorrectionServices.map((service, index) => {
                const Icon = service.icon
                return (
                <Card
                  key={index}
                  className={`border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:border-amber-500/40 transition-all p-8 ${
                    service.highlight ? "ring-2 ring-amber-500/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30">
                      <Icon className="h-6 w-6 text-amber-400" />
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

            {/* Info Box */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-6 py-4 text-center">
                <p className="text-amber-400 font-semibold">
                  💎 Protección extra por 6 meses: +$120,000 con cualquier servicio
                </p>
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

