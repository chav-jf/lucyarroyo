import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Instagram, Facebook, Music2 } from "lucide-react";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";

const WHATSAPP_NUMBER = "573155562072";

const contactInfo = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "315 556 2072",
    href: "https://wa.me/573155562072",
    external: true,
  },
  {
    Icon: Phone,
    label: "Teléfono",
    value: "315 556 2072",
    href: "tel:+573155562072",
    external: false,
  },
  {
    Icon: Mail,
    label: "Correo",
    value: "escueladebailelucyarroyo@hotmail.com",
    href: "mailto:escueladebailelucyarroyo@hotmail.com",
    external: false,
  },
  {
    Icon: MapPin,
    label: "Estudio",
    value: "Cra. 22 No. 20-39, 2do piso — Centro, Pasto",
    href: "https://www.google.com/maps/place/Escuela+de+Baile+Lucy+Arroyo/@1.213153,-77.275845,812m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e2ed4859a5ae7a5:0xca506807f6d8ec61!8m2!3d1.213153!4d-77.275845!16s%2Fg%2F11fylv55jr",
    external: true,
  },
];

const socials = [
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/lucyarroyo_escueladebaile/" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/escueladebailelucy" },
  { Icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@lucyarroyo_escuelabaile" },
];

export function Contacto() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    const texto = [
      "Hola, quiero información sobre las clases de baile.",
      "",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Correo: ${email}`,
      `Mensaje: ${mensaje}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="contacto" className="relative py-24 md:py-36 bg-background">
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
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/60 transition"
                  placeholder="Tu nombre"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="text-xs uppercase tracking-widest text-white/50">Teléfono</label>
                <input
                  required
                  name="telefono"
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/60 transition"
                  placeholder="315 556 2072"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Correo</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/60 transition"
                  placeholder="tucorreo@ejemplo.com"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Mensaje</label>
                <textarea
                  required
                  name="mensaje"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/60 transition resize-none"
                  placeholder="¿Qué estilo te interesa?"
                />
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-white/40">Te respondemos por WhatsApp lo antes posible.</p>
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:shadow-[0_10px_40px_-10px_var(--color-primary)]"
              >
                Enviar por WhatsApp
                <MessageCircle className="h-4 w-4" />
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
            {contactInfo.map(({ Icon, label, value, href, external }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
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
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
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
                src="https://www.google.com/maps?q=1.213153,-77.275845&output=embed"
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
