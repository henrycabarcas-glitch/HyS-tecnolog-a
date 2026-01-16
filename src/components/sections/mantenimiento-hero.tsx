import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MantenimientoHero() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "mantenimiento-hero"
  );
  return (
    <section className="relative overflow-hidden pt-16 pb-24 px-6">
      <div
        className="absolute inset-0 opacity-30 -z-10"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            <Shield className="h-4 w-4" /> Soluciones IT en Montería
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-foreground">
            Optimice su infraestructura con{" "}
            <span className="text-primary">Contratos de Mantenimiento</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Garantice la operatividad de su empresa con soporte técnico
            prioritario, preventivo y correctivo diseñado para el crecimiento de
            su negocio en Colombia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="font-bold text-lg px-8 py-4 h-auto">
              <Link href="#plans">Ver Planes</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 py-4 h-auto">
              <Link href="/servicios">Nuestros Servicios</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-primary/5 rounded-[40px] absolute -top-4 -right-4 w-full h-full -z-10"></div>
          {heroImage && (
            <div className="aspect-square bg-cover bg-center rounded-[32px] shadow-2xl overflow-hidden border-8 border-background">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
