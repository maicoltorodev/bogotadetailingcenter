/**
 * Configuración centralizada del sitio
 * Centraliza todas las URLs y dominios del proyecto para facilitar el mantenimiento
 */

/**
 * URL base del sitio de producción
 * Usa la variable de entorno NEXT_PUBLIC_SITE_URL si está disponible,
 * si no, usa el dominio de Vercel actual como fallback
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bogotadetailingcenter.vercel.app"

/**
 * Dominio del sitio (sin protocolo)
 */
export const SITE_DOMAIN = SITE_URL.replace(/^https?:\/\//, "")

/**
 * Email de contacto
 * Usa el dominio configurado para mantener consistencia
 */
export const CONTACT_EMAIL = `info@${SITE_DOMAIN}`

/**
 * Función helper para construir URLs absolutas
 * @param path - Ruta relativa (ej: "/servicios/detallado")
 * @returns URL absoluta completa
 */
export function getAbsoluteUrl(path: string): string {
  // Asegurar que el path comience con /
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${cleanPath}`
}

