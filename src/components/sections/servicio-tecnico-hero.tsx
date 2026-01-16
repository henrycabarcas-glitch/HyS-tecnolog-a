"use client";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, Cog } from "lucide-react";
import Image from "next/image";

const ServicioTecnicoHero = () => {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "servicio-tecnico-hero"
  );
  return (
    <section className="py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Cog className="text-sm" />
          Soporte Especializado en Montería
        </div>
        <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em] text-foreground">
          Soporte Técnico de Impresoras{" "}
          <span className="text-primary">Multifuncionales</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          Optimizamos la operatividad de su oficina con técnicos certificados en
          equipos de alta gama. Soluciones IT integrales para su
          infraestructura de impresión.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="font-bold flex items-center gap-2"
          >
            <Calendar />
            Agendar Visita Técnica
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-bold flex items-center gap-2"
          >
            Ver Tarifas
          </Button>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-teal-500/20 rounded-xl blur-2xl group-hover:opacity-75 transition-opacity duration-500 opacity-50"></div>
        {heroImage && (
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-center bg-cover border-4 border-card">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicioTecnicoHero;
