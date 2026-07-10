import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { Placeholder } from "./Placeholder";

// Fotos reales en `public/galeria/` (01–10). Si algún archivo faltara, la casilla
// muestra un marcador elegante en lugar de una imagen rota.
const items = [
  { src: "/galeria/01.jpg", span: "row-span-2", alt: "Grupo de bailarines de Lucy Arroyo posando en las escaleras" },
  { src: "/galeria/02.jpg", span: "", alt: "Pareja de baile en una presentación" },
  { src: "/galeria/03.jpg", span: "", alt: "Bailarinas con vestuario rojo en la escuela Lucy Arroyo" },
  { src: "/galeria/04.jpg", span: "", alt: "Jóvenes bailarinas en una presentación con luces" },
  { src: "/galeria/05.jpg", span: "row-span-2", alt: "Bailarina con traje típico de Ñapanga en el centro de Pasto" },
  { src: "/galeria/06.jpg", span: "", alt: "Presentación de baile en un evento social" },
  { src: "/galeria/07.jpg", span: "col-span-2", alt: "Gran grupo de bailarines celebrando el aniversario de Lucy Arroyo" },
  { src: "/galeria/08.jpg", span: "", alt: "Bailarines de Lucy Arroyo con trofeo de competencia" },
  { src: "/galeria/09.jpg", span: "", alt: "Pareja de danza folclórica con poncho y pañolón" },
  { src: "/galeria/10.jpg", span: "", alt: "Grupo de niñas bailarinas en el escenario de Lucy Arroyo" },
  { src: "/galeria/11.jpg", span: "", alt: "Fila de bailarinas en una presentación de salsa" },
  { src: "/galeria/12.jpg", span: "row-span-2", alt: "Pareja de baile en una pose elegante" },
  { src: "/galeria/13.jpg", span: "", alt: "Bailarina con traje típico girando en una galería de arte" },
  { src: "/galeria/14.jpg", span: "", alt: "Niñas con traje tricolor de Colombia en una plaza de Pasto" },
  { src: "/galeria/15.jpg", span: "", alt: "Bailarina solista frente al logo de Lucy Arroyo" },
  { src: "/galeria/16.jpg", span: "row-span-2", alt: "Pareja de baile en un escenario con humo y luces dramáticas" },
  { src: "/galeria/17.jpg", span: "col-span-2", alt: "Pareja de tango bailando al aire libre" },
  { src: "/galeria/18.jpg", span: "col-span-2", alt: "Gran grupo de bailarines en el escenario de Lucy Arroyo" },
  { src: "/galeria/19.jpg", span: "", alt: "Bailarinas con traje típico de Ñapanga en un evento cultural" },
  { src: "/galeria/20.jpg", span: "", alt: "Grupo de niños bailarines con vestuario dorado" },
  { src: "/galeria/21.jpg", span: "", alt: "Grupo de niños bailarines celebrando en el escenario" },
  { src: "/galeria/22.jpg", span: "col-span-2", alt: "Elenco de bailarines de Lucy Arroyo en una presentación" },
  { src: "/galeria/23.jpg", span: "row-span-2", alt: "Dos niñas bailando en el escenario" },
  { src: "/galeria/24.jpg", span: "", alt: "Bailarina solista en una pose de danza contemporánea" },
  { src: "/galeria/25.jpg", span: "", alt: "Bailarina con vestuario folclórico tricolor" },
];

/** Imagen de galería con degradado elegante a Placeholder si el archivo no existe. */
function GalleryImage({
  src,
  alt,
  index,
  className,
}: {
  src: string;
  alt: string;
  index: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <Placeholder label="Galería" index={String(index + 1).padStart(2, "0")} className={className} />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
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
                <GalleryImage src={it.src} alt={it.alt} index={i} className="h-full w-full" />
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
              <GalleryImage src={items[open].src} alt={items[open].alt} index={open} className="h-full w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
