const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description: "Evaluamos el estado de su vehículo y discutimos sus necesidades específicas",
  },
  {
    number: "02",
    title: "Plan Personalizado",
    description: "Creamos un plan de tratamiento adaptado a las características de su automóvil",
  },
  {
    number: "03",
    title: "Proceso Profesional",
    description: "Nuestros especialistas trabajan con precisión usando productos premium",
  },
  {
    number: "04",
    title: "Inspección Final",
    description: "Verificamos cada detalle antes de entregar su vehículo impecable",
  },
]

export function Process() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-32 lg:py-40 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Nuestro Proceso</p>
          </div>
          <h2 className="mb-6 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Excelencia en
            <br />
            <span className="text-amber-500">Cada Paso</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div className="absolute top-16 left-[calc(50%+60px)] hidden h-1 w-[calc(100%-120px)] bg-gradient-to-r from-amber-500/50 via-amber-500/30 to-transparent lg:block" />
              )}
              <div className="relative text-center">
                <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-neutral-950 to-neutral-900 shadow-xl group-hover:border-amber-500/70 group-hover:scale-110 transition-all duration-300">
                  <span className="font-serif text-4xl font-bold text-amber-400">{step.number}</span>
                </div>
                <h3 className="mb-4 font-serif text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                <p className="text-base md:text-lg leading-relaxed text-neutral-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
