import { TintingSection } from "@/components/tinting-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ServiceStructuredData } from "@/components/service-structured-data"
import { getAbsoluteUrl } from "@/lib/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polarizados | Bogotá Detailing Center",
  description:
    "Instalación profesional de polarizados automotrices. Protección UV, privacidad y confort térmico para tu vehículo.",
  keywords: ["polarizados", "tintado automotriz", "protección UV", "película solar", "polarizados Bogotá"],
  alternates: {
    canonical: "/polarizados",
  },
  openGraph: {
    title: "Polarizados | Bogotá Detailing Center",
    description: "Instalación profesional de polarizados automotrices. Protección UV, privacidad y confort térmico.",
    type: "website",
    locale: "es_CO",
    url: getAbsoluteUrl("/polarizados"),
    siteName: "Bogotá Detailing Center",
  },
  twitter: {
    card: "summary",
    title: "Polarizados | Bogotá Detailing Center",
    description: "Instalación profesional de polarizados automotrices.",
  },
}

export default function PolarizadosPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <ServiceStructuredData
        name="Polarizados Automotrices"
        description="Instalación profesional de polarizados automotrices. Protección UV, privacidad y confort térmico para tu vehículo."
        serviceType="Instalación de Polarizados"
        areaServed="Bogotá, Colombia"
      />
      <div className="pt-32 sm:pt-36 md:pt-44 lg:pt-48">
        <TintingSection />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
