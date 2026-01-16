"use client";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SpecializedServices = () => {
  const printerImage = PlaceHolderImages.find(
    (img) => img.id === "outsourcing-printers"
  );
  const laptopImage = PlaceHolderImages.find(
    (img) => img.id === "outsourcing-laptops"
  );

  return (
    <section>
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl font-bold tracking-tight">
          Servicios Especializados en Montería
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Outsourcing de Impresión */}
        <div className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all">
          {printerImage && (
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={printerImage.imageUrl}
                alt={printerImage.description}
                width={600}
                height={338}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint={printerImage.imageHint}
              />
            </div>
          )}
          <div className="p-8 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-extrabold">
                Outsourcing de Impresión
              </h3>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-tighter">
                PLAN TODO INCLUIDO
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">
                    Suministro de Insumos Automático
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tóner y repuestos originales siempre disponibles.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Mantenimiento Preventivo</p>
                  <p className="text-sm text-muted-foreground">
                    Visitas técnicas programadas para evitar fallos.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Monitoreo de Consumos</p>
                  <p className="text-sm text-muted-foreground">
                    Software de gestión para controlar cada impresión.
                  </p>
                </div>
              </li>
            </ul>
            <Button
              asChild
              variant="outline"
              className="w-full py-3 h-auto font-bold border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all"
            >
              <Link href="/outsourcing">Saber Más</Link>
            </Button>
          </div>
        </div>
        {/* Renta de Cómputo */}
        <div className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all">
          {laptopImage && (
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={laptopImage.imageUrl}
                alt={laptopImage.description}
                width={600}
                height={338}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint={laptopImage.imageHint}
              />
            </div>
          )}
          <div className="p-8 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-extrabold">
                Renta de Equipos de Cómputo
              </h3>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-tighter">
                ÚLTIMA GENERACIÓN
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">
                    Renovación Tecnológica Constante
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Actualice su flota cada 24 o 36 meses sin inversión
                    inicial.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Beneficios Tributarios</p>
                  <p className="text-sm text-muted-foreground">
                    El canon de arrendamiento es 100% deducible de impuestos.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Soporte On-Site</p>
                  <p className="text-sm text-muted-foreground">
                    Técnicos especializados en sitio en menos de 4 horas.
                  </p>
                </div>
              </li>
            </ul>
            <Button
              asChild
              variant="outline"
              className="w-full py-3 h-auto font-bold border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all"
            >
              <Link href="/outsourcing">Saber Más</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;
