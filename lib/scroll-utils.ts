/**
 * Utilidad para hacer scroll suave a un elemento con hash
 * @param hash - El hash del elemento (ej: "#servicios")
 * @param options - Opciones adicionales
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
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior,
    })

    if (updateHistory) {
      window.history.pushState(null, "", hash)
    }
  }
}

/**
 * Helper para generar href correcto según la ruta actual
 * Si estamos en home, usa hash directo, si no, redirige a home con hash
 */
export function getHashHref(hash: string, pathname: string): string {
  return pathname === "/" ? hash : `/${hash}`
}

