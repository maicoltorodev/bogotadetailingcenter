/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Habilitar optimización de imágenes de Next.js para mejor rendimiento
    formats: ['image/avif', 'image/webp'],
    // Tamaños optimizados para móvil (priorizar tamaños más pequeños primero)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Calidades permitidas para optimización de imágenes
    qualities: [60, 65, 70, 75, 80, 85, 90],
    // Cache más largo para mejor rendimiento
    minimumCacheTTL: 31536000, // 1 año
    // Calidad adaptativa según dispositivo (se maneja en componente)
    // AVIF y WebP tienen mejor compresión
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Optimización de carga de imágenes
    remotePatterns: [],
    // Optimización de formato - priorizar AVIF
    unoptimized: false,
  },
  // Compresión para mejor rendimiento móvil
  compress: true,
  // React strict mode para mejor desarrollo
  reactStrictMode: true,
  // Optimización de producción
  productionBrowserSourceMaps: false,
  // Optimización de bundle - tree-shaking agresivo para librerías grandes
  // Solo incluir librerías que realmente se usan en la aplicación
  experimental: {
    optimizePackageImports: [
      'lucide-react', // ✅ Usado en muchos componentes para iconos
      '@radix-ui/react-dialog', // ✅ Usado en whatsapp-button.tsx
      '@radix-ui/react-accordion', // ✅ Usado en app/faq/page.tsx
      '@radix-ui/react-slot', // ✅ Usado en button.tsx y otros componentes base
      '@radix-ui/react-label', // ✅ Usado en label.tsx
      'sonner', // ✅ Usado para toasts/notificaciones
      // Removidas librerías no usadas:
      // - @radix-ui/react-icons: no se usa
      // - @radix-ui/react-dropdown-menu: no se usa
      // - recharts: solo existe chart.tsx que no se usa
      // - react-hook-form: solo existe form.tsx que no se usa
      // - date-fns: no se usa
      // - cmdk: solo existe command.tsx que no se usa
      // - input-otp: solo existe input-otp.tsx que no se usa
      // - react-day-picker: solo se usa como ícono, no como componente
      // - react-resizable-panels: solo existe resizable.tsx que no se usa
      // - vaul: solo existe drawer.tsx que no se usa
      // - next-themes: no se usa
    ],
  },
  // Optimización de compilación
  compiler: {
    // Remover console.log en producción
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Optimizaciones de rendimiento
  poweredByHeader: false, // Remover header X-Powered-By
  // Headers de seguridad y caché
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Headers para CSS chunks - permitir preload
        source: '/_next/static/chunks/:path*.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css; charset=utf-8',
          },
        ],
      },
    ]
  },
}

export default nextConfig
