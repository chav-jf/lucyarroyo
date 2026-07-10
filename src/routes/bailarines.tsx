import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { GrainOverlay } from "@/components/site/GrainOverlay";
import { Footer } from "@/components/site/Footer";
import { NuestrosBailarines } from "@/components/site/NuestrosBailarines";

export const Route = createFileRoute("/bailarines")({
  head: () => ({
    meta: [
      { title: "Nuestros Bailarines | Escuela de Baile Lucy Arroyo" },
      {
        name: "description",
        content:
          "Conoce al equipo de bailarines profesionales de Lucy Arroyo: salsa, tango y bachata para fiestas, eventos sociales y empresariales en Pasto.",
      },
    ],
  }),
  component: BailarinesPage,
});

function BailarinesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <GrainOverlay />
      <Navbar />
      <main>
        <NuestrosBailarines />
      </main>
      <Footer />
    </div>
  );
}
