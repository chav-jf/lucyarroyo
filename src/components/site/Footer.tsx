import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Music2 } from "lucide-react";

const LOGO_URL = "/logo.png";

const socials = [
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/lucyarroyo_escueladebaile/" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/escueladebailelucy" },
  { Icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@lucyarroyo_escuelabaile" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="Lucy Arroyo" className="h-14 w-auto" />
            <div>
              <div className="text-display text-lg font-semibold">Lucy Arroyo</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Escuela de Baile</div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <a href="/#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="/#clases" className="hover:text-white transition-colors">Clases</a>
            <a href="/#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="/#planes" className="hover:text-white transition-colors">Planes</a>
            <a href="/#profesores" className="hover:text-white transition-colors">Profesores</a>
            <Link to="/bailarines" className="hover:text-white transition-colors">Bailarines</Link>
            <a href="/#galeria" className="hover:text-white transition-colors">Galería</a>
            <a href="/#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white hover:bg-primary hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-2 pt-6 border-t border-white/5 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Escuela de Baile Lucy Arroyo. Todos los derechos reservados.</p>
          <p>Donde el arte cobra vida a través del movimiento.</p>
        </div>
      </div>
    </footer>
  );
}
