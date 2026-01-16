import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

const PlanCard = ({
  plan,
}: {
  plan: {
    name: string;
    price: string;
    billing: string;
    features: { name: string; included: boolean; bold?: boolean }[];
    popular?: boolean;
  };
}) => (
  <div
    className={`flex flex-col rounded-3xl p-8 transition-all bg-card ${
      plan.popular
        ? "border-2 border-primary relative shadow-xl shadow-primary/10"
        : "border border-border hover:border-primary/30"
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
        Más Popular
      </div>
    )}
    <div className="mb-8">
      <h4 className="text-lg font-bold mb-2">{plan.name}</h4>
      <p className="text-3xl font-black">{plan.price}</p>
      <p className="text-sm text-muted-foreground">{plan.billing}</p>
    </div>
    <ul className="flex-1 flex flex-col gap-4 mb-8">
      {plan.features.map((feature, index) => (
        <li
          key={index}
          className={`flex items-center gap-3 text-sm ${
            !feature.included ? "text-muted-foreground/60" : ""
          } ${feature.bold ? "font-semibold" : ""}`}
        >
          {feature.included ? (
            <CheckCircle className="text-primary h-5 w-5" />
          ) : (
            <XCircle className="h-5 w-5" />
          )}
          <span>{feature.name}</span>
        </li>
      ))}
    </ul>
    <Button
      asChild
      variant={plan.popular ? "default" : "outline"}
      className="w-full py-3 h-auto rounded-xl font-bold"
    >
      <Link href="/contacto">Elegir {plan.name}</Link>
    </Button>
  </div>
);

export default function MantenimientoPlans() {
  const plans = [
    {
      name: "Básico",
      price: "Consultar",
      billing: "Facturación Mensual",
      features: [
        { name: "Mantenimiento preventivo trimestral", included: true },
        { name: "Soporte remoto ilimitado", included: true },
        { name: "Informes de estado de equipos", included: true },
        { name: "Soporte en sitio", included: false },
      ],
    },
    {
      name: "Empresarial",
      price: "Consultar",
      billing: "Facturación Mensual",
      popular: true,
      features: [
        { name: "Preventivo + Correctivo", included: true, bold: true },
        { name: "Soporte en sitio prioritario", included: true, bold: true },
        { name: "Limpieza física mensual", included: true, bold: true },
        { name: "Préstamo de equipos de respaldo", included: true, bold: true },
      ],
    },
    {
      name: "Premium",
      price: "Consultar",
      billing: "Facturación Mensual",
      features: [
        { name: "Cobertura total de hardware", included: true },
        { name: "Repuestos y consumibles incluidos", included: true },
        { name: "Suministro de Tóner ilimitado", included: true },
        { name: "Soporte 24/7 de emergencia", included: true, bold: true },
      ],
    },
  ];

  return (
    <section id="plans" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black mb-4">
            Planes Diseñados para su Empresa
          </h2>
          <p className="text-muted-foreground">
            Seleccione la cobertura que mejor se adapte al tamaño de su
            operación IT.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
