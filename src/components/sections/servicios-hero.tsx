
"use client";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

const ServiciosHero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === "servicios-hero");

  return (
    <section className="py-16 md:py-24 border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-8">
                    <div className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em]">
                        Montería, Córdoba
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                        Soluciones Tecnológicas que <span className="text-primary">Impulsan</span> su Empresa
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[540px]">
                        Proveemos infraestructura IT de alto rendimiento y soporte especializado para asegurar que su negocio nunca se detenga.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="font-bold">
                            <Link href="/productos">Ver Portafolio</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="font-bold">
                            <Link href="/contacto">Consultoría Gratis</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                     {heroImage && (
                        <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        width={600}
                        height={600}
                        className="relative w-full aspect-video md:aspect-square bg-center bg-cover rounded-xl border border-border"
                        data-ai-hint={heroImage.imageHint}
                        />
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default ServiciosHero;
