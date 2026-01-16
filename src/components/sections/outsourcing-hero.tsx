"use client";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Zap } from "lucide-react";
import Image from "next/image";

const OutsourcingHero = () => {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "outsourcing-hero"
  );

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full w-fit">
          <Zap className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Eficiencia Corporativa
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
          Optimice su infraestructura con{" "}
          <span className="text-primary">Outsourcing</span> y Renta
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[500px]">
          Reduzca costos operativos hasta un 30% y garantice la continuidad de
          su negocio en Montería con equipos de última generación y
          mantenimiento especializado incluido.
        </p>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="font-bold px-8 py-4 h-auto rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Ver Planes de Renta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 h-auto rounded-xl font-bold transition-all"
          >
            Hablar con un Experto
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
        {heroImage && (
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl relative z-10">
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

export default OutsourcingHero;
