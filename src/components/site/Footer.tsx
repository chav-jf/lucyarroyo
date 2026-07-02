import { Instagram, Facebook, Music2 } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logoAsset.url} alt="Lucy Arroyo" className="h-14 w-auto" />
            <div>
              <div className="text-display text-lg font-semibold">Lucy Arroyo</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Escuela de Baile</div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#clases" className="hover:text-white transition-colors">Clases</a>
            <a href="#profesores" className="hover:text-white transition-colors">Profesores</a>
            <a href="#galeria" className="hover:text-white transition-colors">Galería</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            {[Instagram, Facebook, Music2].map((Icon, k) => (
              <a
                key={k}
                href="#"
                aria-label="Red social"
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
