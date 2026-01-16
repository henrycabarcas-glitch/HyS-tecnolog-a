
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Briefcase, Wrench, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ServiciosHero from "@/components/sections/servicios-hero";
import ServiciosGrid from "@/components/sections/servicios-grid";
import ServiciosFeatures from "@/components/sections/servicios-features";
import ServiciosCTA from "@/components/sections/servicios-cta";

export default function ServiciosPage() {
  return (
    <>
      <ServiciosHero />
      <section className="py-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-[600px]">
                    <h2 className="text-primary text-sm font-black uppercase tracking-widest mb-2">Qué hacemos</h2>
                    <h3 className="text-3xl md:text-4xl font-black text-foreground">Nuestros Pilares de Servicio</h3>
                </div>
                <p className="text-muted-foreground max-w-[400px]">
                    Estructuramos nuestras soluciones en tres áreas fundamentales diseñadas para cubrir todo el ciclo de vida tecnológico de su organización.
                </p>
            </div>
        </div>
      </section>
      <ServiciosGrid />
      <ServiciosFeatures />
      <ServiciosCTA />
    </>
  );
}
