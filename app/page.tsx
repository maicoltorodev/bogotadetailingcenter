import { Hero } from "@/components/hero"
import { AnniversaryBadge } from "@/components/anniversary-badge"
import dynamic from "next/dynamic"

// Carga diferida de componentes no críticos (debajo del fold)
const Services = dynamic(() => import("@/components/services").then(mod => ({ default: mod.Services })), { ssr: true })
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), { ssr: true })
const Process = dynamic(() => import("@/components/process").then(mod => ({ default: mod.Process })), { ssr: true })
const SedesSection = dynamic(() => import("@/components/sedes-section").then(mod => ({ default: mod.SedesSection })), { ssr: true })
const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), { ssr: true })
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), { ssr: true })
const WhatsAppButtonLoader = dynamic(() => import("@/components/whatsapp-button-loader").then(mod => ({ default: mod.WhatsAppButtonLoader })), { ssr: false }) // Solo cliente

const Gallery = dynamic(() => import("@/components/gallery").then(mod => ({ default: mod.Gallery })), {
  ssr: true,
})

const CoursesSection = dynamic(() => import("@/components/courses-section").then(mod => ({ default: mod.CoursesSection })), {
  ssr: true,
})

const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.Testimonials })), {
  ssr: true,
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
