/**
 * Textura cinematográfica sutil a nivel de página: grano de película + viñeta.
 * Fundamentada en el tema (fotografía de danza): da profundidad al negro plano
 * sin introducir costuras entre secciones. Puramente decorativo y no interactivo.
 */
export function GrainOverlay() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1]">
      {/* Grano de película */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Viñeta radial suave */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 100% at 50% 38%, transparent 68%, rgba(0,0,0,0.35) 100%)",
        }}
      />
    </div>
  );
}
