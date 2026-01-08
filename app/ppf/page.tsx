import { PPFSection } from "@/components/ppf-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ServiceStructuredData } from "@/components/service-structured-data"
import { getAbsoluteUrl } from "@/lib/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PPF - Paint Protection Film | Bogotá Detailing Center",
  description:
    "Protección total para la pintura de tu vehículo con PPF de última generación. Resistencia contra rayones, manchas y deterioro UV. Garantía de 12 años.",
  keywords: ["PPF", "Paint Protection Film", "protección pintura", "película protección", "Llumar PPF", "Bogotá"],
  alternates: {
    canonical: "/ppf",
  },
  openGraph: {
    title: "PPF - Paint Protection Film | Bogotá Detailing Center",
    description: "Protección total para la pintura de tu vehículo con PPF de última generación. Garantía de 12 años.",
    type: "website",
    locale: "es_CO",
    url: getAbsoluteUrl("/ppf"),
    siteName: "Bogotá Detailing Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPF - Paint Protection Film | Bogotá Detailing Center",
    description: "Protección total para la pintura de tu vehículo con PPF de última generación.",
  },
}

export default function PPFPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <ServiceStructuredData
        name="Paint Protection Film (PPF)"
        description="Protección total para la pintura de tu vehículo con PPF de última generación. Resistencia contra rayones, manchas y deterioro UV."
        serviceType="Paint Protection Film"
        areaServed="Bogotá, Colombia"
      />
      <div className="pt-32 sm:pt-36 md:pt-44 lg:pt-48">
        <PPFSection />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
