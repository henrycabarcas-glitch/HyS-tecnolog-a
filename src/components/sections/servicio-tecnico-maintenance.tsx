import {
  CheckCircle,
  Wrench,
  ShieldCheck,
  Sparkles,
  AlertTriangle,
  Hammer,
} from "lucide-react";

const ServicioTecnicoMaintenance = () => {
  return (
    <section className="py-20" id="mantenimiento">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-black tracking-tight mb-4">
            Mantenimiento Profesional
          </h2>
          <p className="text-muted-foreground">
            Garantizamos que sus equipos operen sin interrupciones con planes
            adaptados a su volumen de impresión.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card p-10 rounded-2xl border-b-4 border-teal-500 shadow-xl shadow-black/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
            <Sparkles className="w-36 h-36" />
          </div>
          <div className="text-teal-500 mb-6">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Mantenimiento Preventivo</h3>
          <p className="text-muted-foreground mb-8">
            Acciones proactivas para extender la vida útil y evitar paros
            inesperados.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-teal-500" />
              <span>Limpieza profunda de sistemas ópticos</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-teal-500" />
              <span>Lubricación de piñones y ejes</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-teal-500" />
              <span>Calibración de color y registro</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-teal-500" />
              <span>Actualización de firmware de seguridad</span>
            </li>
          </ul>
        </div>
        <div className="bg-card p-10 rounded-2xl border-b-4 border-primary shadow-xl shadow-black/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
            <Hammer className="w-36 h-36" />
          </div>
          <div className="text-primary mb-6">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Mantenimiento Correctivo</h3>
          <p className="text-muted-foreground mb-8">
            Reparación técnica inmediata para restaurar la funcionalidad total.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Wrench className="text-primary" />
              <span>Cambio de unidades de imagen (DRUM)</span>
            </li>
            <li className="flex items-center gap-3">
              <Wrench className="text-primary" />
              <span>Reparación de tarjetas electrónicas</span>
            </li>
            <li className="flex items-center gap-3">
              <Wrench className="text-primary" />
              <span>Corrección de códigos de error (SC)</span>
            </li>
            <li className="flex items-center gap-3">
              <Wrench className="text-primary" />
              <span>Repuestos originales garantizados</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicioTecnicoMaintenance;
