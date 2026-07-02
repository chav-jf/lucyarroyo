import { motion } from "framer-motion";
import { Instagram, Facebook, Music2 } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { Placeholder } from "./Placeholder";

const profesores = [
  { name: "Lucy Arroyo", role: "Directora / Salsa & Bachata" },
  { name: "Carlos Méndez", role: "Kizomba / Afro" },
  { name: "Andrea Ruiz", role: "Reggaeton / Urbano" },
  { name: "Mateo Rivas", role: "Contemporáneo" },
];

export function Profesores() {
  return (
    <section id="profesores" className="relative py-24 md:py-36 bg-gradient-to-b from-background via-background to-black">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {profesores.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-all"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <Placeholder
                    label={p.name}
                    index={String(i + 1).padStart(2, "0")}
                    className="h-full w-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                {/* social overlay */}
                <div className="absolute inset-x-5 bottom-24 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {[Instagram, Facebook, Music2].map((Icon, k) => (
                    <a
                      key={k}
                      href="#"
                      aria-label="Red social"
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative p-6">
                <h3 className="text-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-primary/90">
                  {p.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
