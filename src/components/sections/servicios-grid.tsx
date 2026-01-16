
"use client";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Briefcase, Wrench, Server, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";


interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    imageHint: string;
    iconBgClass: string;
    iconColorClass: string;
  }

const ServiceCard = ({ icon, title, description, link, imageUrl, imageAlt, imageHint, iconBgClass, iconColorClass }: ServiceCardProps) => (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-border">
        <div className="h-48 w-full relative">
            <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                data-ai-hint={imageHint}
            />
        </div>
        <div className="p-8 flex-1 flex flex-col gap-4">
            <div className={`size-12 rounded-lg ${iconBgClass} flex items-center justify-center ${iconColorClass}`}>
                {icon}
            </div>
            <h4 className="text-xl font-bold text-foreground">{title}</h4>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
            <div className="mt-auto pt-6 border-t border-border">
                <Link className="flex items-center gap-2 text-primary font-bold group" href={link}>
                    Ver planes de renta
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    </div>
)


const ServiciosGrid = () => {

    const images = {
        outsourcing: PlaceHolderImages.find(i => i.id === 'servicios-outsourcing'),
        tecnico: PlaceHolderImages.find(i => i.id === 'servicios-tecnico'),
        mantenimiento: PlaceHolderImages.find(i => i.id === 'servicios-mantenimiento'),
    }

    const services = [
        {
          icon: <Briefcase size={32} />,
          title: "Outsourcing y Renta",
          description: "Acceda a tecnología de punta sin grandes inversiones iniciales. Ofrecemos hardware leasing flexible y personal IT gestionado a la medida de su empresa.",
          link: "/outsourcing",
          imageUrl: images.outsourcing?.imageUrl ?? "",
          imageAlt: images.outsourcing?.description ?? "",
          imageHint: images.outsourcing?.imageHint ?? "",
          iconBgClass: "bg-primary/10",
          iconColorClass: "text-primary"
        },
        {
          icon: <Wrench size={32} />,
          title: "Servicio Técnico",
          description: "Reparación especializada y respuesta ultra-rápida. Contamos con técnicos certificados listos para intervenir hardware crítico en sitio o laboratorio.",
          link: "/servicio-tecnico",
          imageUrl: images.tecnico?.imageUrl ?? "",
          imageAlt: images.tecnico?.description ?? "",
          imageHint: images.tecnico?.imageHint ?? "",
          iconBgClass: "bg-accent/10",
          iconColorClass: "text-accent"
        },
        {
          icon: <Server size={32} />,
          title: "Contratos de Mantenimiento",
          description: "Prevención es rentabilidad. Asegure la continuidad de su negocio con planes de mantenimiento preventivo y soporte prioritario 24/7.",
          link: "/mantenimiento",
          imageUrl: images.mantenimiento?.imageUrl ?? "",
          imageAlt: images.mantenimiento?.description ?? "",
          imageHint: images.mantenimiento?.imageHint ?? "",
          iconBgClass: "bg-primary/10",
          iconColorClass: "text-primary"
        }
      ]

    return (
        <section className="pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiciosGrid;
