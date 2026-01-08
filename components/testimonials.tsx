import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Angelo Zambrano",
    vehicle: "Cliente desde hace 3 años",
    rating: 5,
    text: "Conozco este lugar desde hace 3 años y siempre traigo mis vehículos aquí porque hacen un trabajo excelente. La atención es muy buena, utilizan productos de calidad y los precios son justos para el servicio que ofrecen. Tienen un área cómoda para esperar con WiFi y nunca he tenido inconvenientes. Recomiendo con los ojos cerrados.",
  },
  {
    name: "Motero Enlatado",
    vehicle: "Cliente satisfecho",
    rating: 5,
    text: "Mi camioneta tenía muchos detalles de pintura que corrigieron como los expertos que son. Son honestos, responsables, cumplidos, trabajan con personal de calidad y los mejores materiales. El precio es el justo por tan excelente trabajo. Podría apostar que son los mejores de la ciudad.",
  },
  {
    name: "Jaime C",
    vehicle: "Cliente regular",
    rating: 5,
    text: "Un muy buen lugar tanto para el lavado rutinario (que les queda súper bien y se nota el buen trabajo y productos) como para procesos especiales como restauración del interior de los carros. Recomendado.",
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 py-32 lg:py-40 overflow-hidden before:absolute before:top-0 before:left-0 before:w-96 before:h-96 before:bg-amber-500/5 before:rounded-full before:blur-3xl after:absolute after:bottom-0 after:right-0 after:w-96 after:h-96 after:bg-amber-500/5 after:rounded-full after:blur-3xl">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Testimonios</p>
          </div>
          <h2 className="mb-6 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            La Confianza de
            <br />
            <span className="text-amber-500">Nuestros Clientes</span>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden border-2 border-neutral-800 bg-gradient-to-br from-neutral-950/80 to-neutral-900/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl hover:border-amber-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 hover:scale-105 before:absolute before:top-0 before:right-0 before:w-32 before:h-32 before:bg-amber-500/5 before:rounded-full before:blur-2xl before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500">
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="mb-8 text-lg md:text-xl leading-relaxed text-neutral-200 font-medium">"{testimonial.text}"</p>
              <div className="border-t border-neutral-800 pt-6">
                <p className="font-bold text-white text-lg mb-1">{testimonial.name}</p>
                <p className="text-base text-amber-400">{testimonial.vehicle}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
