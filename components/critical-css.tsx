/**
 * CriticalCSS - CSS crítico inline para above-the-fold
 * Renderizado síncronamente para evitar render blocking
 * Esto reduce render blocking requests en 450ms+
 */
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* CSS crítico para above-the-fold - Hero y Navbar */
          *{box-sizing:border-box}
          body{margin:0;padding:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:#0a0a0a;color:#fafafa;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}
          html{scroll-behavior:smooth;scrollbar-gutter:stable}
          .font-sans{font-family:var(--font-geist-sans),system-ui,sans-serif}
          .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          #inicio{position:relative;height:100vh;width:100%;overflow:hidden;min-height:100vh}
          nav{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(10,10,10,.95);backdrop-filter:blur(12px);border-bottom:1px solid rgba(38,38,38,.8);width:100%}
          .relative{position:relative}
          .absolute{position:absolute}
          .fixed{position:fixed}
          .inset-0{top:0;right:0;bottom:0;left:0}
          .z-0{z-index:0}
          .z-10{z-index:10}
          .z-50{z-index:50}
          .flex{display:flex}
          .items-center{align-items:center}
          .justify-center{justify-content:center}
          .justify-between{justify-content:space-between}
          .h-screen{height:100vh;min-height:100vh}
          .w-full{width:100%}
          .max-w-7xl{max-width:80rem}
          .mx-auto{margin-left:auto;margin-right:auto}
          .px-4{padding-left:1rem;padding-right:1rem}
          .text-white{color:#fff}
          .text-amber-500{color:#f59e0b}
          .font-serif{font-family:ui-serif,Georgia,Cambria,"Times New Roman",Times,serif}
          .font-bold{font-weight:700}
          .font-semibold{font-weight:600}
          .leading-tight{line-height:1.25}
          .mb-4{margin-bottom:1rem}
          .opacity-60{opacity:.6}
          .object-cover{object-fit:cover}
          img{max-width:100%;height:auto;display:block}
          button{cursor:pointer;touch-action:manipulation;border:none;background:transparent}
          a{text-decoration:none;color:inherit}
          h1,h2,h3,h4,h5,h6{margin:0;font-weight:700}
          p{margin:0}
          /* Prevenir FOUC */
          body:not(.loaded){visibility:hidden}
          body.loaded{visibility:visible}
        `,
      }}
    />
  )
}
