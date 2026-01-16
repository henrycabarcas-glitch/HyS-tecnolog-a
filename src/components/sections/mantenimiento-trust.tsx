import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function MantenimientoTrust() {
  const logos = [
    PlaceHolderImages.find((i) => i.id === "cliente-logo-1"),
    PlaceHolderImages.find((i) => i.id === "cliente-logo-2"),
    PlaceHolderImages.find((i) => i.id === "cliente-logo-3"),
    PlaceHolderImages.find((i) => i.id === "cliente-logo-4"),
    PlaceHolderImages.find((i) => i.id === "cliente-logo-5"),
  ];

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-12">
          Empresas que confían en nuestra gestión IT
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 grayscale opacity-40 hover:grayscale-0 transition-all">
          {logos.map(
            (logo, index) =>
              logo && (
                <Image
                  key={index}
                  alt={logo.description}
                  className="h-8 w-auto"
                  src={logo.imageUrl}
                  width={150}
                  height={32}
                  data-ai-hint={logo.imageHint}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}
