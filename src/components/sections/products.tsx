import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  const images = {
    printer: PlaceHolderImages.find((i) => i.id === "services-printer-closeup"),
    laptop: PlaceHolderImages.find((i) => i.id === "services-laptop"),
    photocopier: PlaceHolderImages.find((i) => i.id === "services-photocopier"),
    office: PlaceHolderImages.find((i) => i.id === "services-corporate-office"),
  };

  return (
    <section id="productos" className="py-20 bg-background-light dark:bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              {images.printer && (
                <Image
                  alt={images.printer.description}
                  className="rounded-lg shadow-lg w-full h-48 object-cover transform translate-y-8"
                  src={images.printer.imageUrl}
                  width={400}
                  height={600}
                  data-ai-hint={images.printer.imageHint}
                />
              )}
              {images.laptop && (
                <Image
                  alt={images.laptop.description}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                  src={images.laptop.imageUrl}
                  width={400}
                  height={600}
                  data-ai-hint={images.laptop.imageHint}
                />
              )}
              {images.photocopier && (
                <Image
                  alt={images.photocopier.description}
                  className="rounded-lg shadow-lg w-full h-48 object-cover transform translate-y-8"
                  src={images.photocopier.imageUrl}
                  width={400}
                  height={600}
                  data-ai-hint={images.photocopier.imageHint}
                />
              )}
              {images.office && (
                <Image
                  alt={images.office.description}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                  src={images.office.imageUrl}
                  width={400}
                  height={600}
                  data-ai-hint={images.office.imageHint}
                />
              )}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">
              Por qué elegir HyS Tecnología
            </span>
            <h2 className="font-headline font-bold text-4xl mt-2 mb-6 text-foreground">
              Tecnología que impulsa tu productividad
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              En HyS Tecnología SAS entendemos que cada minuto cuenta. Por eso
              ofrecemos equipos de alta gama que minimizan los tiempos de
              inactividad y maximizan la eficiencia.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-1">
                  <Check className="text-green-600 h-4 w-4" />
                </div>
                <span className="ml-3 text-foreground/90">
                  Asesoría personalizada para encontrar el equipo ideal.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-1">
                  <Check className="text-green-600 h-4 w-4" />
                </div>
                <span className="ml-3 text-foreground/90">
                  Respuesta rápida en servicio técnico en Montería.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-1">
                  <Check className="text-green-600 h-4 w-4" />
                </div>
                <span className="ml-3 text-foreground/90">
                  Insumos garantizados y de alta calidad.
                </span>
              </li>
            </ul>
            <Link
              href="/contacto"
              className="text-primary font-bold hover:text-red-700 border-b-2 border-primary hover:border-red-700 pb-1 transition-all"
            >
              Solicitar catálogo de productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
