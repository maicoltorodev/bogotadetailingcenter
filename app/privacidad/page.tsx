import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { CONTACT_EMAIL } from "@/lib/config"

export const metadata = {
  title: "Políticas de Privacidad | Bogotá Detailing Center",
  description: "Políticas de privacidad y protección de datos personales de Bogotá Detailing Center.",
}

export default function PrivacidadPage() {
  return (
    <>
      <WhatsAppButton />

      <section className="bg-neutral-950 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">Privacidad</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Políticas de Privacidad</h1>
            <p className="text-xl text-neutral-300 leading-relaxed">Última actualización: Enero 2025</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-neutral-800 bg-neutral-950/50 p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Recopilamos información que usted nos proporciona directamente, incluyendo:
              </p>
              <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-2 ml-4">
                <li>Nombre completo</li>
                <li>Número de teléfono</li>
                <li>Dirección de correo electrónico</li>
                <li>Información del vehículo</li>
                <li>Información de contacto para servicios</li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">2. Uso de la Información</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-2 ml-4">
                <li>Procesar y gestionar sus solicitudes de servicio</li>
                <li>Comunicarnos con usted sobre nuestros servicios</li>
                <li>Mejorar nuestros servicios y experiencia del cliente</li>
                <li>Enviar información promocional (con su consentimiento)</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">3. Protección de Datos</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
                personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">4. Compartir Información</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:
              </p>
              <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-2 ml-4">
                <li>Cuando sea necesario para proporcionar nuestros servicios</li>
                <li>Cuando sea requerido por ley o proceso legal</li>
                <li>Con su consentimiento explícito</li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">5. Cookies y Tecnologías Similares</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Puede
                configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del
                sitio.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">6. Sus Derechos</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">Usted tiene derecho a:</p>
              <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-2 ml-4">
                <li>Acceder a su información personal</li>
                <li>Rectificar información inexacta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">7. Retención de Datos</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos
                descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">8. Cambios a esta Política</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios
                significativos publicando la nueva política en esta página y actualizando la fecha de "última
                actualización".
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4">9. Contacto</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, puede contactarnos
                a través de:
              </p>
              <ul className="list-disc list-inside text-neutral-400 mb-6 space-y-2 ml-4">
                <li>Email: {CONTACT_EMAIL}</li>
                <li>WhatsApp: A través de nuestros números de contacto</li>
                <li>Visita a cualquiera de nuestras sedes</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  )
}

