import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Instagram, Music2 } from "lucide-react";

const socials = [
  { Icon: Instagram, label: "@lucyarroyo_escueladebaile", href: "https://www.instagram.com/lucyarroyo_escueladebaile/" },
  { Icon: Music2, label: "@lucyarroyo_escuelabaile", href: "https://www.tiktok.com/@lucyarroyo_escuelabaile" },
];
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

const reels = [
  {
    src: "/eventos/evento1.mp4",
    title: "Nuestros eventos",
    desc: "Bailarines profesionales de Lucy Arroyo en escena.",
  },
  {
    src: "/eventos/evento2.mp4",
    title: "En comunidad",
    desc: "La energía de nuestra escuela fuera del estudio.",
  },
  {
    src: "/eventos/evento3.mp4",
    title: "Presentaciones",
    desc: "Shows para eventos sociales y empresariales.",
  },
];

function ReelCard({ src, title, desc, i }: { src: string; title: string; desc: string; i: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.article variants={fadeUp} className="group">
      <div className="relative mx-auto aspect-[9/16] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-black">
        <video
          ref={ref}
          src={src}
          loop
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        <button
          onClick={toggle}
          aria-label={playing ? "Pausar" : "Reproducir"}
          className="absolute inset-0 grid cursor-pointer place-items-center"
        >
          <span
            className={`grid h-16 w-16 place-items-center rounded-full bg-white/95 text-black shadow-2xl transition-all duration-300 ${
              playing ? "opacity-0 scale-90" : "opacity-100 scale-100 group-hover:scale-110"
            }`}
          >
            {playing ? <Pause className="h-6 w-6 fill-current" /> : <Play className="h-6 w-6 fill-current translate-x-0.5" />}
          </span>
        </button>

        <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white/90">
          <Instagram className="h-3 w-3" /> Reel {String(i + 1).padStart(2, "0")}
        </div>
      </div>
      <div className="mt-6 max-w-sm mx-auto text-center md:text-left">
        <h3 className="text-display text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-white/60">{desc}</p>
      </div>
    </motion.article>
  );
}

export function Redes() {
  return (
    <section id="redes" className="relative py-24 md:py-36 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="mb-16 max-w-3xl"
        >
          <motion.p variants={fadeUp} className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Redes
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
          >
            Vive la escuela en <span className="italic text-primary">redes</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-white/60">
            Los mejores momentos, ensayos y reels de la comunidad Lucy Arroyo.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="relative">
                  Síguenos {label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8"
        >
          {reels.map((r, i) => (
            <ReelCard key={i} src={r.src} title={r.title} desc={r.desc} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
