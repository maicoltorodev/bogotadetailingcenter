import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AnniversaryBadge } from "@/components/anniversary-badge"
import { AboutSection } from "@/components/about-section"
import { Process } from "@/components/process"
import { SedesSection } from "@/components/sedes-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButtonLoader } from "@/components/whatsapp-button-loader"
import dynamic from "next/dynamic"

// Code splitting: Componentes no críticos que están debajo del fold (después del scroll inicial)
// Se cargan solo cuando son necesarios, mejorando el tiempo de carga inicial
const Gallery = dynamic(() => import("@/components/gallery").then(mod => ({ default: mod.Gallery })), {
  ssr: true, // Mantener SSR para SEO
})

const CoursesSection = dynamic(() => import("@/components/courses-section").then(mod => ({ default: mod.CoursesSection })), {
  ssr: true, // Mantener SSR para SEO
})

const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.Testimonials })), {
  ssr: true, // Mantener SSR para SEO
})

export default function Page() {
  const carImage = "/images/mustang.png"

  return (
    <main className="min-h-screen bg-neutral-950">
      <Hero carImage={carImage} />
      <AnniversaryBadge />
      <Services />
      <AboutSection />
      <Process />
      <SedesSection />
      <Gallery />
      <CoursesSection />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButtonLoader />
    </main>
  )
}
