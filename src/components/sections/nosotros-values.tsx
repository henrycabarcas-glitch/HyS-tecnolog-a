import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Handshake, Lightbulb, CheckSquare } from "lucide-react";
import Image from "next/image";

export default function NosotrosValues() {
  const valuesImage1 = PlaceHolderImages.find(
    (img) => img.id === "nosotros-values-1"
  );
  const valuesImage2 = PlaceHolderImages.find(
    (img) => img.id === "nosotros-values-2"
  );

  return (
    <section className="bg-foreground text-background py-24 px-6 lg:px-40 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
              Nuestros Valores Fundamentales
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Handshake className="text-accent text-3xl" />
                <div>
                  <h4 className="text-xl font-bold mb-1">Integridad</h4>
                  <p className="text-zinc-400 text-sm">
                    Transparencia absoluta en cada diagnóstico, presupuesto y
                    negociación con nuestros clientes.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Lightbulb className="text-accent text-3xl" />
                <div>
                  <h4 className="text-xl font-bold mb-1">Innovación</h4>
                  <p className="text-zinc-400 text-sm">
                    Búsqueda constante de las mejores y más eficientes
                    tecnologías para el entorno empresarial.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <CheckSquare className="text-accent text-3xl" />
                <div>
                  <h4 className="text-xl font-bold mb-1">Compromiso</h4>
                  <p className="text-zinc-400 text-sm">
                    Nos hacemos dueños de sus problemas tecnológicos hasta
                    encontrar la solución perfecta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {valuesImage1 && (
                <div className="h-64 relative">
                  <Image
                    src={valuesImage1.imageUrl}
                    alt={valuesImage1.description}
                    data-ai-hint={valuesImage1.imageHint}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              )}
              <div className="h-40 bg-primary rounded-2xl flex items-center justify-center p-6 text-center">
                <p className="font-bold text-lg">
                  Impulsando el éxito regional
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-40 bg-accent rounded-2xl flex items-center justify-center p-6 text-center">
                <p className="font-bold text-lg">Soporte 24/7 para empresas</p>
              </div>
              {valuesImage2 && (
                <div className="h-64 relative">
                  <Image
                    src={valuesImage2.imageUrl}
                    alt={valuesImage2.description}
                    data-ai-hint={valuesImage2.imageHint}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
