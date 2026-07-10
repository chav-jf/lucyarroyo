import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { whatsappUrl } from "@/lib/whatsapp";

type Programa = {
  id: string;
  label: string;
  edad: string;
  horarios: string[];
  dias: { dia: string; ritmos: string[] }[];
};

const programas: Programa[] = [
  {
    id: "ninos",
    label: "Niños",
    edad: "4 a 12 años",
    horarios: ["8:00 – 9:30 am", "4:00 – 5:30 pm", "Sáb 8:00 – 9:30 am"],
    dias: [
      { dia: "Martes", ritmos: ["Salsa Caleña", "Merengue", "Gimnasia de Piso", "Técnicas de Ballet"] },
      { dia: "Miércoles", ritmos: ["Salsa en Línea", "Tecnocumbias", "Salsa Choke", "Modelaje"] },
      { dia: "Jueves", ritmos: ["Bachata", "Salsa en Pareja", "Stretching", "Folclor Colombiano"] },
      { dia: "Sábado", ritmos: ["Salsa en Línea", "Salsa Caleña", "Bachata", "Modelaje"] },
    ],
  },
  {
    id: "adultos",
    label: "Adultos",
    edad: "12 a 90 años",
    horarios: [
      "7:00 – 8:30 am",
      "4:00 – 5:30 pm",
      "6:30 – 8:30 pm",
      "7:00 – 8:30 pm",
      "Sáb 8:00 – 9:30 am",
    ],
    dias: [
      { dia: "Martes", ritmos: ["Salsa Caleña", "Merengue", "Salsa Romántica"] },
      { dia: "Miércoles", ritmos: ["Salsa en Línea", "Tecnocumbias", "Salsa Choke"] },
      { dia: "Jueves", ritmos: ["Bachata", "Salsa en Pareja", "Vallenato"] },
      { dia: "Sábado", ritmos: ["Salsa en Línea", "Salsa Caleña", "Bachata"] },
    ],
  },
  {
    id: "especiales",
    label: "Cursos Especiales",
    edad: "Todas las edades",
    horarios: ["7:00 – 8:00 pm", "Sáb 9:00 – 10:30 am"],
    dias: [
      { dia: "Lunes", ritmos: ["Champeta"] },
      { dia: "Martes", ritmos: ["Salsa", "Bachata Avanzado"] },
      { dia: "Jueves", ritmos: ["Tango"] },
      { dia: "Viernes", ritmos: ["Reguetón", "Pista Abierta"] },
      { dia: "Sábado", ritmos: ["Heels"] },
    ],
  },
];

export function Programas() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const prog = programas[active];

  return (
    <section id="programas" className="relative py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="mb-12 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
          >
            <span className="h-px w-8 bg-primary" />
            Programas y Horarios
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
          >
            Un horario para <span className="italic text-primary">cada edad</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-white/60">
            Formamos a niños, adultos y bailarines avanzados. Elige tu programa y descubre los
            ritmos de cada día.
          </motion.p>
        </motion.div>

        {/* Selector de programa (tabs) */}
        <div
          role="tablist"
          aria-label="Programas de la escuela"
          className="flex flex-wrap gap-2"
        >
          {programas.map((p, i) => {
            const selected = i === active;
            return (
              <button
                key={p.id}
                role="tab"
                id={`tab-${p.id}`}
                aria-selected={selected}
                aria-controls={`panel-${p.id}`}
                onClick={() => setActive(i)}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  selected
                    ? "bg-primary text-white"
                    : "border border-white/15 bg-white/[0.03] text-white/70 hover:text-white hover:border-white/30"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Panel del programa activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={prog.id}
            role="tabpanel"
            id={`panel-${prog.id}`}
            aria-labelledby={`tab-${prog.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
            className="mt-8"
          >
            {/* Edad + horarios */}
            <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:flex-row md:items-center md:justify-between">
              <div className="text-sm uppercase tracking-widest text-white/60">
                Edades:{" "}
                <span className="font-semibold text-white">{prog.edad}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                {prog.horarios.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium tabular-nums text-white/90"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Horario semanal */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {prog.dias.map((d) => (
                <div
                  key={d.dia}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <h3 className="text-display text-xl font-semibold text-primary">{d.dia}</h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {d.ritmos.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-white/80">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={whatsappUrl(
                  `Hola, quiero información sobre el programa de ${prog.label} de la Escuela de Baile Lucy Arroyo.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm md:text-base font-semibold text-white transition-all hover:bg-accent hover:shadow-[0_10px_40px_-10px_var(--color-primary)]"
              >
                Reservar cupo en {prog.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
