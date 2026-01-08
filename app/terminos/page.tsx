import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Términos y Condiciones | Bogotá Detailing Center",
  description: "Términos y condiciones de uso de los servicios de Bogotá Detailing Center.",
}

export default function TerminosPage() {
  return (
    <>
      <WhatsAppButton />

      <section className="bg-neutral-950 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Términos y Condiciones</h1>
            <p className="text-xl text-neutral-300 leading-relaxed">Última actualización: Enero 2025</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-neutral-800 bg-neutral-950/50 p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Al utilizar los servicios de Bogotá Detailing Center, usted acepta estos términos y condiciones en su
                totalidad. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros
                servicios.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">2. Servicios Ofrecidos</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Bogotá Detailing Center ofrece servicios profesionales de detailing automotriz, incluyendo pero no
                limitado a: lavado premium, corrección de pintura, protección cerámica, Paint Protection Film (PPF),
                polarizados, latonería y pintura, y limpieza de interiores.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">3. Reservas y Cancelaciones</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Las citas pueden ser reservadas por teléfono, WhatsApp o a través de nuestro formulario de contacto. Se
                requiere un aviso de al menos 24 horas para cancelar o reprogramar una cita sin penalización.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">4. Precios y Pagos</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Todos los precios están sujetos a cambios sin previo aviso. Los precios finales pueden variar según el
                tamaño y estado del vehículo. Aceptamos efectivo, transferencias bancarias y tarjetas de crédito/débito.
                El pago se realiza al momento de la entrega del vehículo.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">5. Garantías</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Ofrecemos garantía en nuestros servicios de Paint Protection Film (PPF) de 12 años contra
                amarillamiento y craquelamiento. Para otros servicios, la garantía se limita a defectos en la
                aplicación de productos y debe ser reportada dentro de las 48 horas posteriores a la entrega.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">6. Responsabilidad del Cliente</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                El cliente es responsable de informar cualquier daño preexistente en el vehículo antes del inicio del
                servicio. Bogotá Detailing Center no se hace responsable por daños preexistentes no reportados.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">7. Limitación de Responsabilidad</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Bogotá Detailing Center no será responsable por daños indirectos, incidentales o consecuentes que
                resulten del uso de nuestros servicios, excepto en casos de negligencia comprobada.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">8. Modificaciones</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las
                modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">9. Contacto</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Para cualquier pregunta sobre estos términos y condiciones, puede contactarnos a través de nuestro
                formulario de contacto, WhatsApp o visitando cualquiera de nuestras sedes.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  )
}

