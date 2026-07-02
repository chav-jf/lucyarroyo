import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import { Placeholder } from "./Placeholder";

const stats = [
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 500, suffix: "+", label: "Alumnos formados" },
  { value: 100, suffix: "+", label: "Presentaciones" },
  { value: 20, suffix: "+", label: "Estilos de baile" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div variants={fadeUp} className="relative aspect-[4/5] w-full">
              <Placeholder label="Lucy Arroyo" index="01" className="h-full w-full" />
              <div className="absolute -bottom-6 -right-6 hidden md:block h-32 w-32 border-2 border-primary" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.p
              variants={fadeUp}
              className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
            >
              <span className="h-px w-8 bg-primary" />
              Nosotros
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
            >
              Una escuela donde el <span className="italic text-primary">movimiento</span> se convierte en arte.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
              Desde hace más de una década, la Escuela Lucy Arroyo forma bailarines
              apasionados y disciplinados. Combinamos técnica, energía y expresión
              artística para que cada alumno descubra su propio lenguaje sobre la pista.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
              Aquí no solo enseñamos pasos: creamos experiencias, formamos comunidad
              y celebramos el poder transformador del baile.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="relative border-l border-white/10 pl-4">
                  <div className="text-display text-4xl md:text-5xl font-bold text-white">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
