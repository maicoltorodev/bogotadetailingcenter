/**
 * Utilidad para hacer scroll suave a un elemento con hash
 * @param hash - El hash del elemento (ej: "#servicios")
 * @param options - Opciones adicionales
 * 
 * Nota: Esta función lee propiedades geométricas (getBoundingClientRect, pageYOffset)
 * que pueden causar forced reflow si se ejecutan después de cambios en el DOM.
 * Se usa requestAnimationFrame para asegurar que las lecturas ocurran antes del próximo
 * frame de renderizado, minimizando el riesgo de forced reflow.
 */
export function scrollToHash(
  hash: string,
  options: {
    offset?: number
    behavior?: ScrollBehavior
    updateHistory?: boolean
  } = {}
) {
  const {
    offset = 100, // Offset por defecto para el navbar fijo
    behavior = "smooth",
    updateHistory = true,
  } = options

  const element = document.querySelector(hash)
  if (element) {
    // Usar requestAnimationFrame para asegurar que las lecturas geométricas
    // ocurran en el momento óptimo del ciclo de renderizado, evitando forced reflow
    requestAnimationFrame(() => {
      // Batch reads: leer todas las propiedades geométricas primero antes de cualquier escritura
      const elementPosition = element.getBoundingClientRect().top
      const scrollPosition = window.pageYOffset || window.scrollY
      const offsetPosition = elementPosition + scrollPosition - offset

      // Ahora hacer el scroll (write operation)
      window.scrollTo({
        top: offsetPosition,
        behavior,
      })

      // Actualizar history después del scroll (write operation)
      if (updateHistory) {
        window.history.pushState(null, "", hash)
      }
    })
  }
}

/**
 * Helper para generar href correcto según la ruta actual
 * Si estamos en home, usa hash directo, si no, redirige a home con hash
 */
export function getHashHref(hash: string, pathname: string): string {
  return pathname === "/" ? hash : `/${hash}`
}

