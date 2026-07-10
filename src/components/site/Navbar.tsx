import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const LOGO_URL = "/logo.png";

// Anclas absolutas a la home para que funcionen también desde otras rutas (ej. /bailarines).
const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#clases", label: "Clases" },
  { href: "/#planes", label: "Planes" },
  { href: "/#profesores", label: "Profesores" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#redes", label: "Redes" },
  { href: "/#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
          <a href="/#inicio" className="flex items-center gap-3 shrink-0" aria-label="Lucy Arroyo — Inicio">
            <img
              src={LOGO_URL}
              alt="Lucy Arroyo Escuela de Baile"
              className={`transition-all duration-500 ${
                scrolled ? "h-10 md:h-11" : "h-12 md:h-14"
              } w-auto object-contain`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                <span>{l.label}</span>
                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 origin-left" />
              </a>
            ))}
            <Link
              to="/bailarines"
              className="group relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <span>Bailarines</span>
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 origin-left" />
            </Link>
          </nav>

          <div className="hidden lg:block">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:shadow-[0_0_30px_-6px_var(--color-primary)]"
            >
              Inscríbete
            </a>
          </div>

          <button
            className="lg:hidden inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <img src={LOGO_URL} alt="Lucy Arroyo" className="h-12 w-auto" />
              <button
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 pb-10 pt-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="text-display text-4xl font-semibold py-3 border-b border-white/5 hover:text-primary transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * links.length, duration: 0.4 }}
              >
                <Link
                  to="/bailarines"
                  onClick={() => setOpen(false)}
                  className="block text-display text-4xl font-semibold py-3 border-b border-white/5 hover:text-primary transition-colors"
                >
                  Bailarines
                </Link>
              </motion.div>
              <a
                href="/#contacto"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-semibold text-white"
              >
                Inscríbete
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
