import { motion } from "framer-motion";
import { Check, Trophy } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

const columnaEventos = [
  "Protocolo para 15 años",
  "Protocolo para matrimonios",
  "Montajes coreográficos",
  "Bailarines profesionales para tus eventos",
];

const columnaEscuela = [
  "Escuela de baile para niños",
  "Escuela de baile para adultos",
  "Modelaje",
  "Defensa personal",
];

const logros = [
  "Reinado departamental y nacional de la Ñapanga",
  "Competencias de baile",
  "Reinado departamental y nacional del Currulao",
];

function ServiceList({ items }: { items: string[] }) {
  return (
    <motion.div variants={staggerParent} className="flex flex-col">
      {items.map((s) => (
        <motion.div
          key={s}
          variants={fadeUp}
          className="flex items-center gap-4 py-3 border-b border-white/5"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
            <Check className="h-4 w-4" />
          </span>
          <span className="text-lg text-white/85">{s}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Servicios() {
  return (
    <section id="servicios" className="relative py-24 md:py-36 bg-background">
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
            Nuestra Escuela
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
          >
            Formación pedagógica y cultural desde <span className="italic text-primary">1988</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-white/70 leading-relaxed">
            Escuela de Formación Pedagógica y Cultural Lucy Arroyo: protocolo, montajes
            coreográficos, bailarines profesionales para eventos y formación artística para
            niños y adultos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          <ServiceList items={columnaEventos} />
          <ServiceList items={columnaEscuela} />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-14 flex flex-col md:flex-row items-start md:items-center gap-6 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20 px-8 py-8"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-white">
            <Trophy className="h-5 w-5" />
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm md:text-base font-medium text-white/90">
            {logros.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
