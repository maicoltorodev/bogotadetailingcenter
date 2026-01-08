import { SITE_URL, getAbsoluteUrl } from "@/lib/config"

/**
 * WhatsAppMeta - Meta tags explícitas para WhatsApp
 * WhatsApp a veces tiene problemas leyendo las meta tags generadas por Next.js,
 * por lo que agregamos estas meta tags manualmente para asegurar compatibilidad
 */
export function WhatsAppMeta() {
  const ogImage = getAbsoluteUrl("/images/logo-official.jpg")
  
  return (
    <>
      {/* Open Graph / Facebook / WhatsApp - Meta tags explícitas */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content="Bogotá Detailing Center | Excelencia en Detailing Automotriz" />
      <meta property="og:description" content="Transforma tu vehículo con nuestros servicios premium de detailing. Protección cerámica, paint correction y detailing profesional. ¡Tu auto lucirá #MejorQueNuevo!" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content="Bogotá Detailing Center" />
      <meta property="og:locale" content="es_CO" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={SITE_URL} />
      <meta name="twitter:title" content="Bogotá Detailing Center | Excelencia en Detailing Automotriz" />
      <meta name="twitter:description" content="Transforma tu vehículo con nuestros servicios premium de detailing. Protección cerámica, paint correction y detailing profesional. ¡Tu auto lucirá #MejorQueNuevo!" />
      <meta name="twitter:image" content={ogImage} />
    </>
  )
}

