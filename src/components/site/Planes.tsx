import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

const cop = new Intl.NumberFormat("es-CO");

const frecuencia = [
  { dias: "1 día a la semana", precio: 110000 },
  { dias: "2 días a la semana", precio: 140000 },
  { dias: "3 días a la semana", precio: 150000 },
  { dias: "4 días a la semana", precio: 180000 },
];

const sueltas = [
  {
    label: "1 sesión de clase",
    precio: 30000,
    desc: "Ideal para probar antes de inscribirte.",
  },
  {
    label: "1 clase personalizada",
    precio: 60000,
    desc: "Atención individual con nuestros instructores.",
  },
];

export function Planes() {
  return (
    <section
      id="planes"
      className="relative py-24 md:py-36 bg-gradient-to-b from-background via-background to-background"
    >
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
            Planes
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
          >
            Elige tu <span className="italic text-primary">ritmo</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-white/60">
            Tarifas flexibles según la frecuencia que mejor se adapte a ti. Valores en pesos
            colombianos (COP).
          </motion.p>
        </motion.div>

        {/* Matrícula anual */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-primary/30 bg-primary/10 px-8 py-7"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/60">
                Matrícula anual
              </div>
              <div className="text-display text-2xl font-semibold">Inscripción única por año</div>
            </div>
          </div>
          <div className="text-display text-4xl font-bold text-primary">
            ${cop.format(150000)}
          </div>
        </motion.div>

        {/* Frecuencia semanal */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {frecuencia.map((f) => (
            <motion.div
              key={f.dias}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 hover:border-primary/40 transition-colors"
            >
              <div className="text-sm uppercase tracking-widest text-white/50">{f.dias}</div>
              <div className="mt-4 text-display text-3xl font-bold">${cop.format(f.precio)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clases sueltas */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {sueltas.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-7 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="text-display text-xl font-semibold">{s.label}</div>
                <p className="mt-1 text-sm text-white/60">{s.desc}</p>
              </div>
              <div className="text-display text-2xl font-bold text-primary shrink-0">
                ${cop.format(s.precio)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
