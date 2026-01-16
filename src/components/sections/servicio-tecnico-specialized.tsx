
"use client";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { DraftingCompass, Printer, ScanLine } from "lucide-react";
import Image from "next/image";

const ServicioTecnicoSpecialized = () => {
  const plotterImage = PlaceHolderImages.find(
    (i) => i.id === "servicio-tecnico-plotter"
  );
  const scannerImage = PlaceHolderImages.find(
    (i) => i.id === "servicio-tecnico-scanner"
  );
  return (
    <section
      className="py-16 bg-foreground text-background rounded-3xl p-12 overflow-hidden relative"
      id="servicios"
    >
      <div className="absolute right-0 bottom-0 opacity-10">
        <Printer className="w-72 h-72" />
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Soporte para Formato Ancho y Scanners
          </h2>
          <p className="text-background/70 text-lg mb-8">
            No solo atendemos impresoras de oficina. Somos expertos en equipos
            especializados de alto rendimiento.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <DraftingCompass className="text-primary mb-3" />
              <h4 className="font-bold">Plotters</h4>
              <p className="text-sm text-white/60">
                Servicio para equipos de diseño arquitectónico e impresión
                publicitaria.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <ScanLine className="text-primary mb-3" />
              <h4 className="font-bold">Scanners de Alta Velocidad</h4>
              <p className="text-sm text-white/60">
                Ajuste de sensores y limpieza de rodillos para digitalización
                masiva.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {plotterImage && (
            <div className="aspect-square rounded-xl bg-center bg-cover border border-white/10 overflow-hidden">
                <Image src={plotterImage.imageUrl} alt={plotterImage.description} data-ai-hint={plotterImage.imageHint} fill className="object-cover" />
            </div>
          )}
          {scannerImage && (
            <div className="aspect-square rounded-xl bg-center bg-cover border border-white/10 mt-8 overflow-hidden">
                <Image src={scannerImage.imageUrl} alt={scannerImage.description} data-ai-hint={scannerImage.imageHint} fill className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicioTecnicoSpecialized;
