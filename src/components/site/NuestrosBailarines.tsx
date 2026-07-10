import { motion } from "framer-motion";
import { MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

const WHATSAPP_URL = "https://wa.me/message/IU2XOAZLB4MDN1";

const gallery = [
  {
    src: "/assets/bailarines4.webp",
    alt: "Grupo de bailarines de Lucy Arroyo en pose grupal celebrando el aniversario 37 de la academia",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/assets/bailarines3.webp",
    alt: "Pareja de bailarines profesionales de Lucy Arroyo en una pose dinámica de salsa",
    span: "lg:row-span-2",
  },
  {
    src: "/assets/bailarines1.webp",
    alt: "Equipo de bailarines de Lucy Arroyo posando en el escenario",
    span: "",
  },
  {
    src: "/assets/bailarines2.webp",
    alt: "Bailarines juveniles de Lucy Arroyo en una presentación inclusiva sobre el escenario",
    span: "",
  },
];

export function NuestrosBailarines() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[85svh] min-h-[560px] w-full items-end overflow-hidden bg-black">
        <img
          src="/assets/bailarines5.webp"
          alt="Pareja de bailarines de Lucy Arroyo en una elegante pose de tango"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.4em] text-white/70"
          >
            <span className="h-px w-10 bg-primary" />
            Nuestro Equipo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-display font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Nuestros <span className="italic text-primary">Bailarines</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/85"
          >
            Te presentamos nuestro gran equipo de bailarines profesionales 💃🕺. Bailes latinos
            para fiestas y eventos sociales 🎶 — parejas de bailarines en salsa, tango y bachata
            para eventos empresariales y socioculturales.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-24 md:py-36 bg-black">
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
                Galería
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-display font-bold leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
              >
                Talento que <span className="italic text-primary">enciende el escenario</span>.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="max-w-md text-white/60 text-lg">
              De competencias a celebraciones empresariales: un equipo formado para brillar en
              cualquier escenario.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerParent}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] md:auto-rows-[300px] gap-4"
          >
            {gallery.map((img) => (
              <motion.div
                key={img.src}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-black via-background to-background">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerParent}
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
            >
              <span className="h-px w-8 bg-primary" />
              Contrátanos
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display font-bold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Lleva este <span className="italic text-primary">show</span> a tu evento.
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              👉 Visita nuestra sede en el centro de Pasto o escríbenos directo por WhatsApp para
              cotizar tu evento.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm md:text-base font-semibold text-white transition-all hover:bg-accent hover:shadow-[0_10px_40px_-10px_var(--color-primary)]"
              >
                <MessageCircle className="h-5 w-5" />
                Contáctanos por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-6 inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/70"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-left">
                📌 Cra. 22 No. 20-39, Segundo piso — Centro de Pasto
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
