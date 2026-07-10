import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { GrainOverlay } from "@/components/site/GrainOverlay";
import { Hero } from "@/components/site/Hero";
import { Nosotros } from "@/components/site/Nosotros";
import { Servicios } from "@/components/site/Servicios";
import { Clases } from "@/components/site/Clases";
import { Programas } from "@/components/site/Programas";
import { Planes } from "@/components/site/Planes";
import { Profesores } from "@/components/site/Profesores";
import { Galeria } from "@/components/site/Galeria";
import { Redes } from "@/components/site/Redes";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Clases />
        <Programas />
        <Planes />
        <Profesores />
        <Galeria />
        <Redes />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
