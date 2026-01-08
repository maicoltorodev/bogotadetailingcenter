"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CardInView } from "@/components/ui/card-in-view"
import { MapPin } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const sedes = [
  {
    name: "Sede Norte",
    address: "Carrera 7#161-57",
    phone: "573245084306",
  },
  {
    name: "Sede El Polo",
    address: "Calle 83 # 22a-31",
    phone: "573118777229",
  },
  {
    name: "Sede Chía",
    address: "Km 2 vía Chía - Cota plaza empresarial El León",
    phone: "573184146744",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">Nuestras Sedes</p>
                </div>
          <h2 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2">
            Contáctenos
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-300 px-4">
            Estamos listos para transformar su vehículo. Elija su sede más cercana y contáctenos
          </p>
              </div>

        {/* Sedes Cards */}
        <div className="mb-12 sm:mb-16 md:mb-20 grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sedes.map((sede, index) => (
            <CardInView key={index}>
            <Card
                className="group relative overflow-hidden border border-neutral-800/50 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 backdrop-blur-sm p-8 md:p-10 rounded-2xl hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
              >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 shadow-lg shadow-amber-500/10 group-hover:scale-110 group-hover:shadow-amber-500/20 transition-all duration-300">
                        <MapPin className="h-8 w-8 md:h-10 md:w-10 text-amber-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight">{sede.name}</h3>
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
                  </div>
                </div>
                
                {/* Address */}
                <p className="mb-8 text-neutral-400 text-sm md:text-base flex-grow leading-relaxed text-center font-medium">{sede.address}</p>
                
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${sede.phone}?text=Hola+*Bogotá+Detailing+Center*+${sede.name}.+Necesito+más+información`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-auto group/button"
                  aria-label={`Contactar por WhatsApp a ${sede.name}`}
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500 font-bold text-sm md:text-base shadow-lg hover:shadow-green-500/50 transition-all duration-300 group-hover/button:scale-[1.02] min-h-[48px] touch-manipulation active:scale-95 active:opacity-90"
                    onClick={(e) => {
                      if (navigator.vibrate) navigator.vibrate(50)
                    }}
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                    Contactar Por Whatsapp
                  </Button>
                </a>
              </div>
            </Card>
            </CardInView>
          ))}
              </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl">
          <Card className="group relative overflow-hidden border border-neutral-800/50 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 backdrop-blur-sm p-8 md:p-10 rounded-2xl hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/3 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8 text-center">
                <h3 className="mb-3 font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">Reserve Su Cita</h3>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-4" />
                <p className="text-sm md:text-base text-neutral-400 font-medium">Complete el formulario y nos pondremos en contacto con usted</p>
            </div>

              {/* Form */}
              <form className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  inputMode="text"
                  className="w-full rounded-xl border border-neutral-800/50 bg-neutral-950/50 backdrop-blur-sm px-4 py-3 text-white placeholder:text-neutral-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all duration-300 text-base"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  className="w-full rounded-xl border border-neutral-800/50 bg-neutral-950/50 backdrop-blur-sm px-4 py-3 text-white placeholder:text-neutral-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all duration-300 text-base"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  className="w-full rounded-xl border border-neutral-800/50 bg-neutral-950/50 backdrop-blur-sm px-4 py-3 text-white placeholder:text-neutral-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all duration-300 text-base"
                  placeholder="+57 XXX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-white">
                  Tipo de Vehículo
                </label>
                <select
                  id="service"
                  name="service"
                  autoComplete="off"
                  className="w-full rounded-xl border border-neutral-800/50 bg-neutral-950/50 backdrop-blur-sm px-4 py-3 text-white focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all duration-300 text-base"
                >
                  <option value="">Seleccione...</option>
                  <option value="deportivo">Deportivo</option>
                  <option value="clasico">Clásico</option>
                  <option value="alta-gama">Alta Gama</option>
                  <option value="moto">Moto</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  inputMode="text"
                  className="w-full rounded-xl border border-neutral-800/50 bg-neutral-950/50 backdrop-blur-sm px-4 py-3 text-white placeholder:text-neutral-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all duration-300 resize-none text-base"
                  placeholder="Cuéntenos sobre su vehículo y necesidades..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 hover:from-amber-400 hover:to-amber-500 font-bold text-base shadow-lg hover:shadow-amber-500/50 transition-all duration-300 mt-2 min-h-[48px] touch-manipulation active:scale-95 active:opacity-90"
                onClick={() => {
                  if (navigator.vibrate) navigator.vibrate(50)
                }}
              >
                Enviar Solicitud
              </Button>
            </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
