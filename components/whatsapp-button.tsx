"use client"

import { MapPin, ChevronRight } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { XIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

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

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  const handleWhatsAppClick = (phone: string, sedeName: string) => {
    // Feedback háptico si está disponible
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
    
    const message = encodeURIComponent(
      `Hola *Bogotá Detailing Center* - ${sedeName}. Necesito más información sobre sus servicios.`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group flex h-14 w-14 sm:h-16 sm:w-16 min-w-[56px] min-h-[56px] items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:from-green-400 hover:to-green-500 hover:shadow-green-500/50 active:scale-95 touch-manipulation"
          aria-label="Chat por WhatsApp"
          onClick={(e) => {
            // Feedback háptico al abrir diálogo
            if (navigator.vibrate) {
              navigator.vibrate(30)
            }
          }}
        >
          {/* Efecto de pulso animado */}
          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping opacity-75" />
          <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8 text-white transition-transform duration-300 group-hover:scale-110" />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border-neutral-800/50 text-white max-w-[90vw] sm:max-w-lg p-0 overflow-hidden" showCloseButton={false}>
        {/* Botón de cerrar personalizado */}
        <DialogClose asChild>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-50 flex min-h-[48px] min-w-[48px] items-center justify-center rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 touch-manipulation"
            aria-label="Cerrar"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </DialogClose>
        
        {/* Elementos decorativos de fondo - igual que la sección de contacto */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        
        <DialogHeader className="relative z-10 px-5 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-4 border-b border-neutral-800/50 text-center">
          <DialogTitle className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
            Elige tu Sede
          </DialogTitle>
          <DialogDescription className="text-sm text-neutral-400">
            Selecciona la sede más cercana para contactarnos por WhatsApp
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative z-10 px-5 py-4 sm:px-6 sm:py-5 space-y-3">
          {sedes.map((sede, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-neutral-800/50 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 backdrop-blur-sm p-4 sm:p-5 rounded-xl hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 cursor-pointer active:scale-[0.98] touch-manipulation"
              onClick={() => handleWhatsAppClick(sede.phone, sede.name)}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/3 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-4">
                {/* Icon Container - compacto */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 shadow-lg shadow-amber-500/10 group-hover:scale-110 group-hover:shadow-amber-500/20 transition-all duration-300">
                    <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
                  </div>
                </div>
                
                {/* Content - horizontal */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-tight mb-1">{sede.name}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">{sede.address}</p>
                </div>
                
                {/* WhatsApp Button Icon - compacto */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-gradient-to-r from-green-500 to-green-600 group-hover:from-green-400 group-hover:to-green-500 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                    <WhatsAppIcon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
