import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { Placeholder } from "./Placeholder";

// Para poblar la galería, deja las fotos en `public/galeria/` con estos nombres
// (01.webp … 08.webp). Mientras no existan, cada casilla muestra un marcador
// elegante en lugar de una imagen rota.
const items = [
  { src: "/galeria/01.webp", span: "row-span-2" },
  { src: "/galeria/02.webp", span: "" },
  { src: "/galeria/03.webp", span: "" },
  { src: "/galeria/04.webp", span: "" },
  { src: "/galeria/05.webp", span: "row-span-2" },
  { src: "/galeria/06.webp", span: "" },
  { src: "/galeria/07.webp", span: "col-span-2" },
  { src: "/galeria/08.webp", span: "" },
];

/** Imagen de galería con degradado elegante a Placeholder si el archivo no existe. */
function GalleryImage({ src, index, className }: { src: string; index: number; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <Placeholder label="Galería" index={String(index + 1).padStart(2, "0")} className={className} />
    );
  }
  return (
    <img
      src={src}
      alt={`Escuela de Baile Lucy Arroyo — foto de galería ${index + 1}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className ?? ""}`}
    />
  );
}

export function Galeria() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v === null ? v : (v + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((v) => (v === null ? v : (v - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="galeria" className="relative py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <motion.p variants={fadeUp} className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Galería
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display font-bold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
            >
              Momentos que <span className="italic text-primary">nos definen</span>.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-md text-white/60 text-lg">
            Presentaciones, ensayos y vida en el estudio.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4"
        >
          {items.map((it, i) => (
            <motion.button
              key={i}
              variants={fadeUp}
              onClick={() => setOpen(i)}
              aria-label={`Ampliar foto de galería ${i + 1}`}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${it.span}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <GalleryImage src={it.src} index={i} className="h-full w-full" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-white/0 group-hover:text-white/90 transition-colors">
                Ver
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] cursor-pointer bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-5 right-5 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white/10 border border-white/20 text-white"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => (v === null ? v : (v - 1 + items.length) % items.length));
              }}
              className="absolute left-5 grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white/10 border border-white/20 text-white"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => (v === null ? v : (v + 1) % items.length));
              }}
              className="absolute right-5 grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white/10 border border-white/20 text-white"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[4/3] cursor-default rounded-2xl overflow-hidden"
            >
              <GalleryImage src={items[open].src} index={open} className="h-full w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
