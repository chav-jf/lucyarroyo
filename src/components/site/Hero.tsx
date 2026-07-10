import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const HERO_VIDEO = "/hero-dance.mp4";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // Con "reduce motion" desactivamos el parallax scroll-linked y el zoom del video.
  const y = reduceMotion ? "0%" : yRaw;
  const opacity = reduceMotion ? 1 : opacityRaw;
  const scale = reduceMotion ? 1 : scaleRaw;

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-background"
    >
      {/* Video */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full w-full items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.4em] text-white/70"
          >
            <span className="h-px w-10 bg-primary" />
            Escuela de Baile
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-display font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(2.75rem, 9vw, 8rem)" }}
          >
            <span className="italic text-primary">Lucy</span>{" "}
            <span className="text-white">Arroyo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 max-w-2xl text-lg md:text-2xl text-white/85 text-display italic"
          >
            &ldquo;Brindamos bienestar integral por medio de la danza, fomentando el desarrollo socio cultural.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm md:text-base font-semibold text-white transition-all hover:bg-accent hover:shadow-[0_10px_40px_-10px_var(--color-primary)]"
            >
              Inscríbete ahora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#clases"
              className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 backdrop-blur-md px-7 py-4 text-sm md:text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-black">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Ver clases
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        aria-label="Desplázate hacia abajo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-max flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/30"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
