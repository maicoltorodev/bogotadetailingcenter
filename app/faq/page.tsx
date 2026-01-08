import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQStructuredData } from "@/components/faq-structured-data"
import { getAbsoluteUrl } from "@/lib/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Bogotá Detailing Center",
  description: "Respuestas a las preguntas más comunes sobre nuestros servicios de detailing automotriz. Información sobre servicios, horarios, garantías y más.",
  keywords: ["preguntas frecuentes", "FAQ detailing", "información servicios detailing", "Bogotá"],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Preguntas Frecuentes | Bogotá Detailing Center",
    description: "Respuestas a las preguntas más comunes sobre nuestros servicios de detailing automotriz.",
    type: "website",
    locale: "es_CO",
    url: getAbsoluteUrl("/faq"),
    siteName: "Bogotá Detailing Center",
  },
  twitter: {
    card: "summary",
    title: "Preguntas Frecuentes | Bogotá Detailing Center",
    description: "Respuestas a las preguntas más comunes sobre nuestros servicios de detailing automotriz.",
  },
}

const faqs = [
  {
    question: "¿Qué servicios ofrecen?",
    answer:
      "Ofrecemos servicios completos de detailing automotriz incluyendo lavado premium, corrección de pintura, protección cerámica, Paint Protection Film (PPF), polarizados, latonería y pintura, y limpieza de interiores.",
  },
  {
    question: "¿Cuánto tiempo toma un servicio de detailing?",
    answer:
      "El tiempo varía según el servicio. Un lavado premium toma aproximadamente 1 hora, mientras que servicios de corrección de pintura pueden tomar de 5 a 16 horas. Los servicios de interior pueden tomar de 3 horas hasta 3 días dependiendo del nivel de detalle.",
  },
  {
    question: "¿Qué es Paint Protection Film (PPF)?",
    answer:
      "El PPF es una película transparente y ultra resistente que se aplica sobre la pintura de tu vehículo, creando una barrera invisible contra piedras, rayones, manchas y rayos UV. Ofrecemos PPF de Llumar con garantía de 12 años.",
  },
  {
    question: "¿Cuáles son sus horarios de atención?",
    answer:
      "Atendemos de lunes a sábado de 7:30 AM a 5:00 PM, y domingos y festivos de 8:00 AM a 1:30 PM. Ahora también abrimos los domingos para su conveniencia.",
  },
  {
    question: "¿Tienen múltiples sedes?",
    answer:
      "Sí, tenemos 3 sedes: Sede Norte en Carrera 7#161-57, Sede El Polo en Calle 83 # 22a-31, y Sede Chía en Km 2 vía Chía - Cota plaza empresarial El León.",
  },
  {
    question: "¿Ofrecen garantía en sus servicios?",
    answer:
      "Sí, nuestros servicios de PPF incluyen garantía de 12 años contra amarillamiento y craquelamiento. Todos nuestros servicios están certificados bajo los parámetros de The International Detailing Association (IDA).",
  },
  {
    question: "¿Necesito agendar una cita?",
    answer:
      "Para servicios básicos puede llegar sin cita previa, pero para servicios especializados como PPF, corrección de pintura completa o servicios de interior, recomendamos agendar una cita para garantizar disponibilidad.",
  },
  {
    question: "¿Aceptan todos los tipos de vehículos?",
    answer:
      "Sí, trabajamos con todo tipo de vehículos: autos, camionetas, motos, vehículos clásicos y de alta gama. También ofrecemos servicios para barcos y bicicletas en el caso del PPF.",
  },
]

export default function FAQPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <WhatsAppButton />

      <section className="bg-neutral-950 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">Ayuda</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Preguntas Frecuentes</h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-neutral-800 bg-neutral-950/50 p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-neutral-800">
                  <AccordionTrigger className="text-left text-white hover:text-amber-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-neutral-400 mb-6">¿No encuentras la respuesta que buscas?</p>
            <a
              href="/#contacto"
              className="inline-block bg-amber-500 text-neutral-950 px-8 py-3 rounded-md hover:bg-amber-400 transition-colors font-semibold"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

