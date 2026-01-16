import MantenimientoForm from "../mantenimiento-form";
import { Phone, MapPin } from "lucide-react";

export default function MantenimientoContact() {
  return (
    <section className="py-24 px-6 bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="text-4xl font-black mb-6 leading-tight">
            ¿Listo para blindar su empresa tecnológicamente?
          </h2>
          <p className="text-background/70 mb-10 text-lg">
            Déjenos sus datos y un especialista IT se pondrá en contacto para
            realizar un diagnóstico gratuito de su infraestructura en Montería.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <Phone />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-primary">
                  Llámenos
                </p>
                <p className="text-xl font-bold">+57 324 659 4263</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <MapPin />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-primary">
                  Ubicación
                </p>
                <p className="text-xl font-bold">
                  Calle 14A #3-27 Barrio Buenavista Montería - Córdoba
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-3xl p-8 lg:p-10 text-foreground shadow-2xl">
          <MantenimientoForm />
        </div>
      </div>
    </section>
  );
}
