import { SITE_URL, getAbsoluteUrl } from "@/lib/config"

/**
 * Structured Data (JSON-LD) para SEO Local
 * Mejora el SEO y permite rich snippets en Google
 */

export function StructuredData() {
  // Usa la configuración centralizada del sitio
  const canonicalDomain = SITE_URL
  
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${canonicalDomain}/#organization`,
    name: "Bogotá Detailing Center",
    description:
      "Servicios premium de detailing automotriz en Bogotá. Protección cerámica, paint correction, y restauración profesional para vehículos de lujo.",
    url: canonicalDomain,
    logo: getAbsoluteUrl("/images/logo-official.jpg"),
    image: getAbsoluteUrl("/images/logo-official.jpg"),
    telephone: ["+573245084306", "+573118777229", "+573184146744"],
    priceRange: "$$$",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Carrera 7#161-57",
        addressLocality: "Bogotá",
        addressRegion: "Cundinamarca",
        addressCountry: "CO",
        name: "Sede Norte",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Calle 83 # 22a-31",
        addressLocality: "Bogotá",
        addressRegion: "Cundinamarca",
        addressCountry: "CO",
        name: "Sede El Polo",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Km 2 vía Chía - Cota plaza empresarial El León",
        addressLocality: "Chía",
        addressRegion: "Cundinamarca",
        addressCountry: "CO",
        name: "Sede Chía",
      },
    ],
    geo: [
      {
        "@type": "GeoCoordinates",
        latitude: "4.7110",
        longitude: "-74.0721",
        name: "Sede Norte",
      },
      {
        "@type": "GeoCoordinates",
        latitude: "4.6667",
        longitude: "-74.0500",
        name: "Sede El Polo",
      },
      {
        "@type": "GeoCoordinates",
        latitude: "4.8614",
        longitude: "-73.9764",
        name: "Sede Chía",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Detailing Automotriz",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Protección Cerámica",
            description: "Recubrimiento cerámico de última generación",
            provider: {
              "@type": "AutomotiveBusiness",
              name: "Bogotá Detailing Center",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corrección de Pintura",
            description: "Paint correction profesional",
            provider: {
              "@type": "AutomotiveBusiness",
              name: "Bogotá Detailing Center",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Detailing Interior",
            description: "Limpieza profunda del interior",
            provider: {
              "@type": "AutomotiveBusiness",
              name: "Bogotá Detailing Center",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Detailing Completo",
            description: "Paquetes completos de detailing",
            provider: {
              "@type": "AutomotiveBusiness",
              name: "Bogotá Detailing Center",
            },
          },
        },
      ],
    },
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${canonicalDomain}/#organization`,
    name: "Bogotá Detailing Center",
    url: canonicalDomain,
    logo: getAbsoluteUrl("/images/logo-official.jpg"),
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
      // "https://www.facebook.com/bogotadetailingcenter",
      // "https://www.instagram.com/bogotadetailingcenter",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  )
}

