import { Wrench, Printer, RefreshCw } from "lucide-react";

const FeaturesBar = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-card p-6 rounded-xl border border-border flex items-center gap-4">
        <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          <Wrench />
        </div>
        <div>
          <h4 className="font-bold">Soporte Técnico</h4>
          <p className="text-xs text-muted-foreground">
            Expertos locales en Montería
          </p>
        </div>
      </div>
      <div className="bg-card p-6 rounded-xl border border-border flex items-center gap-4">
        <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          <Printer />
        </div>
        <div>
          <h4 className="font-bold">Suministro Rápido</h4>
          <p className="text-xs text-muted-foreground">
            Insumos originales garantizados
          </p>
        </div>
      </div>
      <div className="bg-card p-6 rounded-xl border border-border flex items-center gap-4">
        <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          <RefreshCw />
        </div>
        <div>
          <h4 className="font-bold">Tecnología Punta</h4>
          <p className="text-xs text-muted-foreground">
            Equipos 2024 de alto rendimiento
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;
