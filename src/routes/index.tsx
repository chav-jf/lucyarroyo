import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Nosotros } from "@/components/site/Nosotros";
import { Clases } from "@/components/site/Clases";
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
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Clases />
        <Profesores />
        <Galeria />
        <Redes />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
