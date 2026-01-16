import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function NosotrosCta() {
  return (
    <section className="py-20 px-6 lg:px-40">
      <div className="max-w-[1000px] mx-auto bg-primary rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/40">
        <div
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
        ></div>
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-3xl lg:text-5xl font-black max-w-2xl">
            ¿Listo para transformar su empresa con tecnología de punta?
          </h2>
          <p className="text-lg opacity-90 max-w-xl">
            Hable con nuestros expertos hoy mismo y obtenga una auditoría
            técnica inicial sin costo para su negocio en Montería.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary font-bold text-lg hover:bg-zinc-100"
            >
              <Link href="/contacto">
                <Mail className="mr-2 h-5 w-5" />
                Contáctanos Ahora
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-zinc-900/20 backdrop-blur-md border-white/30 text-white font-bold text-lg hover:bg-zinc-900/30"
            >
              <Link href="/productos">Ver Catálogo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
