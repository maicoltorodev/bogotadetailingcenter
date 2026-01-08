import { Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Footer Links Grid */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Columna 1: Somos */}
          <div>
            <h3 className="mb-3 sm:mb-4 font-semibold text-white text-sm sm:text-base">Somos</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/#servicios" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link href="/#nosotros" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Sedes
                </Link>
              </li>
              <li>
                <Link href="/#curso" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Curso
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="mb-3 sm:mb-4 font-semibold text-white text-sm sm:text-base">Servicios</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/servicios/basicos" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Servicios Básicos
                </Link>
              </li>
              <li>
                <Link href="/servicios/interior" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Servicios Interior
                </Link>
              </li>
              <li>
                <Link href="/servicios/detallado" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Servicios Detallado
                </Link>
              </li>
              <li>
                <Link href="/servicios/correccion-pintura" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Corrección de Pintura
                </Link>
              </li>
              <li>
                <Link href="/servicios/proteccion-ceramica" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Protección Cerámica
                </Link>
              </li>
              <li>
                <Link href="/ppf" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Paint Protection Film (PPF)
                </Link>
              </li>
              <li>
                <Link href="/polarizados" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Polarizados
                </Link>
              </li>
              <li>
                <Link href="/latoneria" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Latonería y Pintura
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Políticas */}
          <div>
            <h3 className="mb-3 sm:mb-4 font-semibold text-white text-sm sm:text-base">Políticas</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Políticas de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="mb-3 sm:mb-4 font-semibold text-white text-sm sm:text-base">Contacto</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/#contacto" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Contáctenos
                </Link>
              </li>
              <li>
                <a
                  href="https://facebook.com/bogotadetailingcenter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com/bogotadetailingcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-500"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/bogotadetailingcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-500"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/bogotadetailingcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-500"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Bogotá Detailing Center - Logo"
              width={112}
              height={112}
              className="h-24 w-auto md:h-28 object-contain"
              priority={false}
              quality={85}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-center gap-2 text-center md:items-end">
            <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Bogotá Detailing Center. Todos los derechos reservados.</p>
            <p className="text-xs text-neutral-400">10 años cuidando su vehículo</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
