import { BodyworkSection } from "@/components/bodywork-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ServiceStructuredData } from "@/components/service-structured-data"
import { getAbsoluteUrl } from "@/lib/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Latonería y Pintura | Bogotá Detailing Center",
  description:
    "Taller especializado en latonería y pintura automotriz. Restauramos tu vehículo a su estado original con tecnología de punta.",
  keywords: ["latonería", "pintura automotriz", "restauración vehículo", "taller latonería", "Bogotá"],
  alternates: {
    canonical: "/latoneria",
  },
  openGraph: {
    title: "Latonería y Pintura | Bogotá Detailing Center",
    description: "Taller especializado en latonería y pintura automotriz. Restauramos tu vehículo a su estado original.",
    type: "website",
    locale: "es_CO",
    url: getAbsoluteUrl("/latoneria"),
    siteName: "Bogotá Detailing Center",
  },
  twitter: {
    card: "summary",
    title: "Latonería y Pintura | Bogotá Detailing Center",
    description: "Taller especializado en latonería y pintura automotriz.",
  },
}

export default function LatoneriaPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <ServiceStructuredData
        name="Latonería y Pintura"
        description="Taller especializado en latonería y pintura automotriz. Restauramos tu vehículo a su estado original con tecnología de punta."
        serviceType="Latonería y Pintura Automotriz"
        areaServed="Bogotá, Colombia"
      />
      <div className="pt-32 sm:pt-36 md:pt-44 lg:pt-48">
        <BodyworkSection />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
