import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Instagram, Facebook, Music2, Send } from "lucide-react";
import { toast } from "sonner";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

export function Contacto() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensaje enviado", {
        description: "Te contactaremos muy pronto.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-36 bg-black">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerParent}
          className="mb-16 max-w-3xl"
        >
          <motion.p variants={fadeUp} className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Contacto
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-display font-bold leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
          >
            Da tu primer <span className="italic text-primary">paso</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-white/60">
            Cuéntanos qué quieres bailar. Te asesoramos y agendamos tu clase de prueba.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerParent}
            onSubmit={onSubmit}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div variants={fadeUp}>
                <label className="text-xs uppercase tracking-widest text-white/50">Nombre</label>
                <input
                  required
                  name="nombre"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition"
                  placeholder="Tu nombre"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="text-xs uppercase tracking-widest text-white/50">Teléfono</label>
                <input
                  required
                  name="telefono"
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition"
                  placeholder="+51 999 999 999"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Correo</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition"
                  placeholder="tucorreo@ejemplo.com"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Mensaje</label>
                <textarea
                  required
                  name="mensaje"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition resize-none"
                  placeholder="¿Qué estilo te interesa?"
                />
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-white/40">Te respondemos en menos de 24 horas.</p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:shadow-[0_10px_40px_-10px_var(--color-primary)] disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
                <Send className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.form>

          {/* Info */}
          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerParent}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {[
              { Icon: MessageCircle, label: "WhatsApp", value: "+51 999 999 999", href: "https://wa.me/51999999999" },
              { Icon: Phone, label: "Teléfono", value: "+51 (01) 555-0000", href: "tel:+5115550000" },
              { Icon: Mail, label: "Correo", value: "hola@lucyarroyo.com", href: "mailto:hola@lucyarroyo.com" },
              { Icon: MapPin, label: "Estudio", value: "Av. Principal 123, Lima", href: "#mapa" },
            ].map(({ Icon, label, value, href }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-primary/40 hover:bg-white/[0.04] transition-all"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-white/50">{label}</div>
                  <div className="truncate font-semibold">{value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
              {[Instagram, Facebook, Music2].map((Icon, k) => (
                <a
                  key={k}
                  href="#"
                  aria-label="Red social"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-primary hover:border-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              id="mapa"
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 aspect-[4/3]"
            >
              <iframe
                title="Ubicación del estudio"
                src="https://www.google.com/maps?q=Lima,Peru&output=embed"
                className="h-full w-full grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
