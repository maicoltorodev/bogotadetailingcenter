/**
 * CSSPreloader - Carga CSS de forma asíncrona para evitar render blocking
 * Usa un script inline que se ejecuta inmediatamente para interceptar CSS
 * antes de que bloqueen el renderizado inicial
 * 
 * Este script debe ejecutarse lo antes posible, por eso usamos dangerouslySetInnerHTML
 * directamente sin useEffect (que se ejecutaría demasiado tarde)
 */
export function CSSPreloader() {
  // Script inline que se ejecuta inmediatamente al parsear el HTML
  // Esto intercepta los CSS antes de que bloqueen el render
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Ejecutar inmediatamente - antes de que el navegador procese los CSS
            // Interceptar todos los CSS chunks y cargarlos de forma asíncrona
            
            // Función para hacer CSS no bloqueante
            function makeCSSAsync(link) {
              if (link.rel === 'stylesheet' && !link.hasAttribute('data-async-loaded')) {
                const href = link.getAttribute('href');
                // Solo procesar CSS chunks de Next.js (no CSS inline crítico)
                if (href && href.includes('/_next/static/chunks/') && href.endsWith('.css')) {
                  link.setAttribute('data-async-loaded', 'true');
                  link.media = 'print';
                  
                  // Cuando se carga, cambiar a 'all' para aplicar estilos
                  link.onload = function() {
                    this.media = 'all';
                  };
                  
                  // Fallback para navegadores que no soportan onload en link
                  setTimeout(function() {
                    if (link.media === 'print') {
                      link.media = 'all';
                    }
                  }, 100);
                }
              }
            }
            
            // Procesar CSS existentes en el head
            if (document.head) {
              const existingLinks = document.head.querySelectorAll('link[rel="stylesheet"]');
              existingLinks.forEach(makeCSSAsync);
            }
            
            // Interceptar nuevos CSS que se agreguen dinámicamente
            const originalAppendChild = Node.prototype.appendChild;
            Node.prototype.appendChild = function(child) {
              const result = originalAppendChild.call(this, child);
              if (child.nodeName === 'LINK' && child.rel === 'stylesheet') {
                makeCSSAsync(child);
              }
              return result;
            };
            
            // También interceptar insertBefore
            const originalInsertBefore = Node.prototype.insertBefore;
            Node.prototype.insertBefore = function(newNode, referenceNode) {
              const result = originalInsertBefore.call(this, newNode, referenceNode);
              if (newNode.nodeName === 'LINK' && newNode.rel === 'stylesheet') {
                makeCSSAsync(newNode);
              }
              return result;
            };
            
            // Observer para CSS agregados después del script
            if (document.head) {
              const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                  mutation.addedNodes.forEach(function(node) {
                    if (node.nodeName === 'LINK' && node.rel === 'stylesheet') {
                      makeCSSAsync(node);
                    }
                  });
                });
              });
              
              observer.observe(document.head, {
                childList: true,
                subtree: true
              });
            }
          })();
        `,
      }}
    />
  )
}
