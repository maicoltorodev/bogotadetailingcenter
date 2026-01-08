import { Award, Sparkles, TrendingUp } from "lucide-react"

export function AnniversaryBadge() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <div className="relative group">
          {/* Borde decorativo animado */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-sm transition-opacity duration-500 animate-pulse" />
          
          {/* Card principal */}
          <div className="relative flex flex-col items-center justify-center gap-6 sm:gap-8 rounded-3xl border-2 border-amber-500/30 bg-gradient-to-br from-neutral-950 via-amber-500/5 to-neutral-950 p-8 sm:p-12 md:p-16 text-center backdrop-blur-sm overflow-hidden">
            {/* Patrón de fondo sutil */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
            </div>

            {/* Elementos decorativos superiores */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 opacity-20">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 animate-pulse" />
            </div>
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Badge de medalla */}
            <div className="relative z-10 mb-2">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="relative rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-2 border-amber-500/40 p-4 sm:p-6 shadow-2xl">
                  <Award className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Título principal */}
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
                <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight">
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-400/20 blur-2xl rounded-lg" />
                    <span className="relative bg-gradient-to-r from-white via-amber-50 to-white bg-clip-text text-transparent">
                      10
                    </span>
                  </span>
                </h2>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500 leading-tight">
                    Años
                  </span>
                  <span className="text-xs sm:text-sm md:text-base text-amber-400/80 uppercase tracking-[0.2em] font-semibold mt-1">
                    de Excelencia
                  </span>
                </div>
              </div>
            </div>

            {/* Línea decorativa */}
            <div className="relative z-10 w-32 sm:w-40 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-2" />

            {/* Descripción principal */}
            <div className="relative z-10 space-y-3 sm:space-y-4">
              <p className="max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-white font-medium">
                Transformando vehículos con{" "}
                <span className="text-amber-400 font-bold">pasión</span>,{" "}
                <span className="text-amber-400 font-bold">precisión</span> y{" "}
                <span className="text-amber-400 font-bold">perfección</span>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
                Una década liderando el mercado de detailing automotriz en Bogotá
              </p>
            </div>

            {/* Estadísticas */}
            <div className="relative z-10 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 w-full max-w-2xl">
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500">10+</p>
                <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">Años</p>
              </div>
              <div className="flex flex-col items-center gap-1 sm:gap-2 border-x border-amber-500/20">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500">3</p>
                <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">Sedes</p>
              </div>
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500">1000+</p>
                <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">Clientes</p>
              </div>
            </div>

            {/* Elementos decorativos inferiores */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 opacity-20">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-20">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
