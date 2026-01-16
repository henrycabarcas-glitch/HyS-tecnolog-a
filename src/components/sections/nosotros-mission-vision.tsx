import { Eye, Rocket } from "lucide-react";

export default function NosotrosMissionVision() {
  return (
    <section className="bg-muted/30 dark:bg-zinc-900/50 py-20 border-y dark:border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-40">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all group">
            <div className="size-14 rounded-xl bg-primary flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Rocket className="text-3xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Proveer soluciones tecnológicas integrales que optimicen los
              procesos de nuestros clientes en la región Caribe, garantizando
              soporte técnico de alta calidad y equipos de vanguardia que
              impulsen la transformación digital.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all group">
            <div className="size-14 rounded-xl bg-accent flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Eye className="text-3xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Consolidarnos para el año 2030 como la empresa líder en servicios
              IT y consultoría tecnológica en el departamento de Córdoba, siendo
              reconocidos por nuestra innovación, confiabilidad y compromiso con
              el éxito empresarial local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
