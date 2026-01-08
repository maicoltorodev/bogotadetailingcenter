import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AnniversaryBadge } from "@/components/anniversary-badge"
import { AboutSection } from "@/components/about-section"
import { Process } from "@/components/process"
import { SedesSection } from "@/components/sedes-section"
import { Gallery } from "@/components/gallery"
import { CoursesSection } from "@/components/courses-section"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButtonLoader } from "@/components/whatsapp-button-loader"

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
