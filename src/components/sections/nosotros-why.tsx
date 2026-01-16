import { Archive, MapPin, Wrench } from "lucide-react";

export default function NosotrosWhy() {
  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6 lg:px-40">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-black mb-4">
          ¿Por qué elegir HyS Tecnología?
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6">
          <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
            <MapPin className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold mb-3">Presencia Local</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Conocemos los desafíos únicos de las empresas en Montería y
            Córdoba, brindando atención presencial inmediata.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6">
          <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
            <Wrench className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold mb-3">Experiencia Técnica</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Ingenieros certificados y técnicos expertos con años de trayectoria
            resolviendo incidencias complejas.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6">
          <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
            <Archive className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold mb-3">Equipos Premium</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Acceso a las últimas innovaciones en hardware y software con
            garantías directas de fabricante.
          </p>
        </div>
      </div>
    </section>
  );
}
