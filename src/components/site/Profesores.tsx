import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

const profesores = [
  {
    name: "Lucy Arroyo",
    role: "Directora y Fundadora",
    photo: "/profesores/lucy_arroyo.png",
    instagram: "https://www.instagram.com/lucyarroyo_guerrero/",
    handle: "lucyarroyo_guerrero",
  },
  {
    name: "Lucy Virginia Arroyo",
    role: "Instructora de Baile",
    photo: "/profesores/virginia.png",
    instagram: "https://www.instagram.com/lucyvirginiaa/",
    handle: "lucyvirginiaa",
  },
  {
    name: "Francisco Pantoja",
    role: "Instructor de Baile",
    photo: "/profesores/francisco.png",
    instagram: "https://www.instagram.com/guidofpantoja/",
    handle: "guidofpantoja",
  },
];

export function Profesores() {
  return (
    <section id="profesores" className="relative py-24 md:py-36 bg-gradient-to-b from-background via-background to-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="mb-16 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
          >
            <span className="h-px w-8 bg-primary" />
            Profesores
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
          >
            El equipo detrás de cada <span className="italic text-primary">movimiento</span>.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profesores.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-all"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <img
                    src={p.photo}
                    alt={`${p.name}, ${p.role} en Escuela de Baile Lucy Arroyo`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="relative p-6">
                <h3 className="text-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-primary/90">
                  {p.role}
                </p>
                <a
                  href={p.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-primary transition-colors"
                >
                  <Instagram className="h-3.5 w-3.5" />@{p.handle}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
