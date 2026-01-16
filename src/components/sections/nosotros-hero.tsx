import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function NosotrosHero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "nosotros-hero");
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-40 py-16 lg:py-24">
      <div className="flex flex-col gap-12 lg:flex-row items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
          {heroImage && (
            <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl overflow-hidden relative z-10">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="absolute -bottom-6 -right-6 p-6 bg-card rounded-xl shadow-xl z-20 border border-primary/20">
            <p className="text-primary font-black text-4xl">30+</p>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Años de experiencia
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Nuestra Identidad
            </span>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
              Innovación IT en el corazón de{" "}
              <span className="text-primary">Córdoba</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En HyS Tecnología SAS, no solo vendemos equipos; construimos
              infraestructuras que sostienen el crecimiento de Montería. Somos
              un equipo apasionado por la excelencia técnica y el servicio
              humano.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <BadgeCheck />
            </div>
            <div>
              <h4 className="font-bold">Socio Estratégico</h4>
              <p className="text-sm text-muted-foreground">
                Aliados certificados de las mejores marcas globales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
