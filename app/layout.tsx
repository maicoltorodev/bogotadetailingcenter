import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { StructuredData } from "@/components/structured-data"
import { ClientOnlyComponents } from "@/components/client-only-components"
import { LazyLayoutComponents } from "@/components/lazy-layout-components"
import { SITE_URL, getAbsoluteUrl } from "@/lib/config"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"], 
  variable: "--font-geist-sans",
  display: "optional", // Mejor para LCP - no bloquea render
  preload: true,
  adjustFontFallback: true, // Mejora CLS
  fallback: ['system-ui', 'arial'], // Fallback rápido
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"], 
  variable: "--font-geist-mono",
  display: "optional", // No crítico, no bloquea
  preload: false, // No crítico, no preload
  adjustFontFallback: true,
  fallback: ['monospace'], // Fallback rápido
})

export const metadata: Metadata = {
  title: "Bogotá Detailing Center | Excelencia en Detailing Automotriz",
  description:
    "Servicios premium de detailing automotriz en Bogotá. Protección cerámica, paint correction, y restauración profesional para vehículos de lujo.",
  keywords: [
    "detailing automotriz",
    "coating cerámico",
    "paint correction",
    "detailing Bogotá",
    "protección cerámica",
    "limpieza profunda auto",
    "detailing premium",
  ],
  authors: [{ name: "Bogotá Detailing Center" }],
  creator: "Bogotá Detailing Center",
  publisher: "Bogotá Detailing Center",
  generator: "Next.js",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Bogotá Detailing Center",
    title: "Bogotá Detailing Center | Excelencia en Detailing Automotriz",
    description:
      "Transforma tu vehículo con nuestros servicios premium de detailing. Protección cerámica, paint correction y detailing profesional. ¡Tu auto lucirá #MejorQueNuevo!",
    images: [
      {
        url: getAbsoluteUrl("/images/logo-official.jpg"),
        width: 1200,
        height: 630,
        alt: "Bogotá Detailing Center - Excelencia en Detailing Automotriz",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bogotá Detailing Center | Excelencia en Detailing Automotriz",
    description:
      "Transforma tu vehículo con nuestros servicios premium de detailing. Protección cerámica, paint correction y detailing profesional. ¡Tu auto lucirá #MejorQueNuevo!",
    images: ["/images/logo-official.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon-light-32x32.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // Para iPhone X+ safe areas
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* Preload recursos críticos para mejorar LCP - Next.js App Router procesa estos links correctamente */}
        <link rel="preload" href="/images/logo.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="preload" href="/images/mustang.png" as="image" type="image/png" fetchPriority="high" />
        
        {/* Preconnect a recursos externos que se usarán después (mejora velocidad cuando el usuario interactúa) */}
        {/* Estos no bloquean el render inicial, solo preparan la conexión para uso futuro */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Marcar body como loaded para prevenir FOUC
              (function() {
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', function() {
                    document.body.classList.add('loaded');
                  });
                } else {
                  document.body.classList.add('loaded');
                }
              })();
            `,
          }}
        />
        <StructuredData />
        <ClientOnlyComponents />
        <LazyLayoutComponents />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
