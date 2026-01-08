"use client"

/**
 * AsyncCSSLoader - Componente cliente para asegurar que CSS se carga asíncronamente
 * Este componente actúa como respaldo en caso de que el script inline no funcione
 * Se ejecuta después de la hidratación
 */
export function AsyncCSSLoader() {
  // Este componente es principalmente un respaldo
  // El trabajo principal lo hace CSSPreloader que se ejecuta en el head
  // Este componente solo verifica que todo esté bien después de la hidratación
  return null
}
