import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { Placeholder } from "./Placeholder";

const clases = [
  { name: "Salsa", desc: "Ritmo, sabor y conexión en pareja.", tag: "Latino", photo: "/estilos/salsa.png" },
  { name: "Bachata", desc: "Sensualidad y elegancia dominicana.", tag: "Latino", photo: "/estilos/bachata.png" },
  { name: "Kizomba", desc: "Movimientos suaves y musicalidad africana.", tag: "Afro", photo: "/estilos/Kizomba.png" },
  { name: "Reggaeton", desc: "Actitud, fuerza y estilo urbano.", tag: "Urbano", photo: "/estilos/Reggaeton.png" },
  { name: "Urbano", desc: "Hip-hop y estilos callejeros actuales.", tag: "Urbano", photo: "/estilos/urbano.png" },
  { name: "Contemporáneo", desc: "Expresión libre y técnica escénica.", tag: "Escénico", photo: "/estilos/contemporaneo.png" },
];

export function Clases() {
  return (
    <section id="clases" className="relative py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
            >
              <span className="h-px w-8 bg-primary" />
              Clases
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display font-bold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
            >
              Encuentra tu <span className="italic text-primary">estilo</span>.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-md text-white/60 text-lg">
            Programas para principiantes, intermedios y avanzados. Elige el ritmo
            que quieres dominar.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clases.map((c, i) => (
            <motion.article
              key={c.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-colors"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  {c.photo ? (
                    <img
                      src={c.photo}
                      alt={`Clase de ${c.name} en Escuela de Baile Lucy Arroyo`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Placeholder label={c.name} index={String(i + 1).padStart(2, "0")} className="h-full w-full" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 mix-blend-multiply" />

                <div className="absolute top-5 left-5">
                  <span className="rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white/90 border border-white/20">
                    {c.tag}
                  </span>
                </div>
              </div>

              <div className="relative p-6 md:p-8">
                <h3 className="text-display text-3xl md:text-4xl font-semibold">
                  {c.name}
                </h3>
                <p className="mt-2 text-white/60">{c.desc}</p>

                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group/link"
                >
                  <span className="relative">
                    Más información
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
