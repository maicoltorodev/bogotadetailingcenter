import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import dynamic from "next/dynamic"
import { WhatsAppButtonWrapper } from "@/components/whatsapp-button-wrapper"

// Componentes críticos cargados inmediatamente (above the fold)
// El Hero y Services son visibles de inmediato, así que se cargan sin lazy

// Componentes lazy-loaded para mejor rendimiento inicial en móvil
// Estos se cargan solo cuando están cerca del viewport
const AnniversaryBadge = dynamic(() => import("@/components/anniversary-badge").then(mod => ({ default: mod.AnniversaryBadge })), {
  ssr: true, // SSR para SEO, pero lazy en cliente
})

const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), {
  ssr: true,
})

const Process = dynamic(() => import("@/components/process").then(mod => ({ default: mod.Process })), {
  ssr: true,
})

const SedesSection = dynamic(() => import("@/components/sedes-section").then(mod => ({ default: mod.SedesSection })), {
  ssr: true,
})

const Gallery = dynamic(() => import("@/components/gallery").then(mod => ({ default: mod.Gallery })), {
  ssr: true,
})

const CoursesSection = dynamic(() => import("@/components/courses-section").then(mod => ({ default: mod.CoursesSection })), {
  ssr: true,
})

const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.Testimonials })), {
  ssr: true,
})

const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), {
  ssr: true,
})

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  ssr: true,
})

// Selección aleatoria simple basada en timestamp (más eficiente que fetch externo)
function getRandomImage() {
  // Alternar entre mustang y porsche basado en el tiempo
  // Esto da variedad sin hacer requests externos
  const images = ["/images/mustang.png", "/images/porsche.png"]
  const randomIndex = Math.floor(Date.now() / 1000 / 3600) % images.length // Cambia cada hora
  return images[randomIndex]
}

export default function Page() {
  const carImage = getRandomImage()

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
      <WhatsAppButtonWrapper />
    </main>
  )
}
