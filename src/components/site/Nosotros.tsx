import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useReducedMotion,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, VolumeX } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

const stats = [
  { value: 37, suffix: "+", label: "Años de experiencia" },
  { value: 500, suffix: "+", label: "Alumnos formados" },
  { value: 100, suffix: "+", label: "Presentaciones" },
  { value: 20, suffix: "+", label: "Estilos de baile" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    // Con "reduce motion" mostramos el valor final sin animar el conteo.
    if (reduceMotion) {
      count.set(to);
      return;
    }
    const controls = animate(count, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, to, count, reduceMotion]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Nosotros() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoInView = useInView(videoWrapRef, { amount: 0.5 });
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

  const syncState = () => {
    const v = videoRef.current;
    if (!v) return;
    setVideoPlaying(!v.paused);
    setVideoMuted(v.muted);
  };

  // Reproduce al entrar en pantalla intentando activar el audio; si el navegador
  // bloquea el autoplay con sonido, cae a mudo (el botón permite activarlo con un clic).
  // Pausa al salir de pantalla para no dejar el audio sonando fuera de vista.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (videoInView) {
      v.muted = false;
      v.play()
        .catch(() => {
          v.muted = true;
          return v.play().catch(() => {});
        })
        .finally(syncState);
    } else {
      v.pause();
      syncState();
    }
  }, [videoInView]);

  // Clic del usuario (gesto válido): si está en pausa reproduce con sonido;
  // si suena en mudo lo activa; si ya suena, pausa.
  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play().catch(() => {});
    } else if (v.muted) {
      v.muted = false;
    } else {
      v.pause();
    }
    syncState();
  };

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
          <div className="lg:col-span-4 order-2 lg:order-1">
            <motion.div
              ref={videoWrapRef}
              variants={fadeUp}
              className="group relative aspect-[9/16] w-full max-w-sm mx-auto overflow-hidden lg:max-w-none"
            >
              <video
                ref={videoRef}
                src="/video1.mp4"
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

              <button
                onClick={toggleVideo}
                aria-label={
                  !videoPlaying
                    ? "Reproducir video"
                    : videoMuted
                      ? "Activar sonido"
                      : "Pausar video"
                }
                className="absolute inset-0 grid cursor-pointer place-items-center"
              >
                <span
                  className={`grid h-16 w-16 place-items-center rounded-full bg-white/95 text-black shadow-2xl transition-all duration-300 ${
                    videoPlaying && !videoMuted
                      ? "opacity-0 scale-90"
                      : "opacity-100 scale-100 group-hover:scale-110"
                  }`}
                >
                  {!videoPlaying ? (
                    <Play className="h-6 w-6 fill-current translate-x-0.5" />
                  ) : videoMuted ? (
                    <VolumeX className="h-6 w-6" />
                  ) : (
                    <Pause className="h-6 w-6 fill-current" />
                  )}
                </span>
              </button>

              <div className="absolute -bottom-6 -right-6 hidden md:block h-32 w-32 border-2 border-primary" />
            </motion.div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
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
              Desde 1988, la Escuela Lucy Arroyo forma bailarines apasionados y
              disciplinados. Combinamos técnica, energía y expresión artística para
              que cada alumno descubra su propio lenguaje sobre la pista.
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
