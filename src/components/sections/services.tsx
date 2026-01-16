import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Laptop, Printer, Wrench } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  iconBgClass: string;
  iconColorClass: string;
  borderColorClass: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  link,
  iconBgClass,
  iconColorClass,
  borderColorClass,
}: ServiceCardProps) => (
  <Card
    className={`group bg-background rounded-2xl p-2 md:p-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:${borderColorClass}`}
  >
    <CardHeader>
      <div
        className={`w-16 h-16 ${iconBgClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        <div className={iconColorClass}>{icon}</div>
      </div>
      <CardTitle className="font-headline font-bold text-xl text-foreground">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
      >
        Saber más <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: <Printer className="w-9 h-9" />,
      title: "Venta y Alquiler de Equipos",
      description:
        "Multifuncionales, impresoras láser, escáneres y fotocopiadoras de las mejores marcas. Planes de renting flexibles.",
      link: "/outsourcing",
      iconBgClass: "bg-primary/10",
      iconColorClass: "text-primary",
      borderColorClass: "border-primary/30",
    },
    {
      icon: <Laptop className="w-9 h-9" />,
      title: "Equipos de Cómputo",
      description:
        "Venta y arrendamiento de computadores portátiles y de escritorio para dotar a tu personal con la mejor tecnología.",
      link: "/productos",
      iconBgClass: "bg-accent/10",
      iconColorClass: "text-accent",
      borderColorClass: "border-accent/30",
    },
    {
      icon: <Wrench className="w-9 h-9" />,
      title: "Mantenimiento y Soporte",
      description:
        "Servicio técnico especializado preventivo y correctivo. Suministros y repuestos originales para garantizar la vida útil de sus equipos.",
      link: "/servicio-tecnico",
      iconBgClass: "bg-gray-200 dark:bg-gray-700",
      iconColorClass: "text-foreground",
      borderColorClass: "border-border",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Nuestros Servicios Principales
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Ofrecemos soluciones integrales adaptadas a las necesidades de
            impresión y cómputo de tu negocio.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
