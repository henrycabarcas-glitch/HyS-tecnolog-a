"use client";

import {
  Printer,
  ScanLine,
  Laptop,
  Video,
  Mouse,
  Droplets,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const categories = [
  {
    name: "Multifuncionales",
    icon: <Printer className="w-5 h-5" />,
    active: true,
  },
  { name: "Escáneres", icon: <ScanLine className="w-5 h-5" /> },
  { name: "Computadores", icon: <Laptop className="w-5 h-5" /> },
  { name: "Proyectores", icon: <Video className="w-5 h-5" /> },
  { name: "Accesorios & Partes", icon: <Mouse className="w-5 h-5" /> },
  { name: "Tóner, Tintas & Insumos", icon: <Droplets className="w-5 h-5" /> },
];

export default function ProductosSidebar() {
  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h1 className="font-headline font-bold text-2xl mb-2">Catálogo</h1>
          <p className="text-muted-foreground text-sm">
            Equipos y suministros en Montería.
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">
            Categorías Principales
          </p>
          {categories.map((category) => (
            <Link
              key={category.name}
              href="/productos"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                category.active
                  ? "bg-primary/10 text-primary border-l-4 border-primary font-semibold"
                  : "hover:bg-muted font-medium"
              }`}
            >
              {category.icon}
              <span className="text-sm">{category.name}</span>
            </Link>
          ))}
        </div>
        <div className="p-5 bg-gray-900 rounded-xl text-white relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs font-bold text-primary mb-1 uppercase tracking-tighter">
              ¿No encuentras lo que buscas?
            </p>
            <p className="text-sm mb-4 text-gray-300">
              Te ayudamos a encontrar la solución perfecta.
            </p>
            <Button
              asChild
              variant="secondary"
              className="w-full text-xs font-bold uppercase tracking-wide bg-white text-black hover:bg-gray-200"
            >
              <Link href="/contacto">Solicitar Asesoría</Link>
            </Button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20">
            <MessageSquare className="w-24 h-24" />
          </div>
        </div>
      </div>
    </aside>
  );
}
