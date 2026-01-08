import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Usar matchMedia en lugar de window.innerWidth para evitar forced reflow
    // matchMedia no causa forced reflow porque no lee propiedades geométricas del DOM
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      // Usar mql.matches en lugar de leer window.innerWidth directamente
      setIsMobile(mql.matches)
    }
    mql.addEventListener('change', onChange)
    // Usar mql.matches en la inicialización en lugar de calcular con window.innerWidth
    setIsMobile(mql.matches)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
