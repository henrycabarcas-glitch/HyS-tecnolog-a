import { Rocket, Wallet, BadgeCheck } from "lucide-react";

export default function MantenimientoWhy() {
  const reasons = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Soporte Prioritario",
      description:
        "Sus reportes técnicos se atienden antes que cualquier solicitud ocasional. Respuesta garantizada en menos de 4 horas.",
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Ahorro de Costos",
      description:
        "Evite facturas inesperadas. Un contrato fijo mensual permite una mejor planeación financiera sin sorpresas por fallas críticas.",
    },
    {
      icon: <BadgeCheck className="h-8 w-8" />,
      title: "Longevidad de Equipos",
      description:
        "Aumentamos la vida útil de su hardware mediante mantenimientos preventivos regulares, reduciendo el desgaste y optimizando el rendimiento.",
    },
  ];

  return (
    <section className="py-20 bg-muted/20 dark:bg-white/5 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            ¿Por qué un contrato de mantenimiento?
          </h2>
          <p className="text-muted-foreground">
            Protegemos su inversión tecnológica con un enfoque proactivo que
            elimina el tiempo de inactividad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group"
            >
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
