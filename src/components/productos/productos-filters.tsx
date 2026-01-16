"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

export default function ProductosFilters() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="text-xs font-bold">
          <Filter className="w-4 h-4 mr-2" />
          Filtrar
        </Button>
        <div className="h-4 w-px bg-border"></div>
        <p className="text-xs text-muted-foreground font-medium">
          <span className="text-foreground font-bold">128</span> productos
          encontrados
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Ordenar por:
        </span>
        <Select defaultValue="relevancia">
          <SelectTrigger className="bg-transparent border-none text-xs font-bold p-0 pr-6 focus:ring-0 w-auto">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevancia">Relevancia</SelectItem>
            <SelectItem value="precio-asc">Precio: Menor a Mayor</SelectItem>
            <SelectItem value="precio-desc">Precio: Mayor a Menor</SelectItem>
            <SelectItem value="nuevos">Nuevos ingresos</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
