import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Headset } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-printer");

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl -z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge
              variant="outline"
              className="bg-accent/10 text-accent border-accent/50 text-sm font-semibold mb-6"
            >
              <BadgeCheck className="w-4 h-4 mr-2 text-accent" />
              Líderes en Montería y Córdoba
            </Badge>

            <h1 className="font-headline font-extrabold text-5xl lg:text-6xl tracking-tight leading-tight text-foreground mb-6">
              Soluciones de{" "}
              <span className="bg-gradient-to-r from-primary to-accent gradient-text">
                Impresión y Tecnología
              </span>{" "}
              para tu Empresa
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Optimizamos el flujo de trabajo de tu oficina con venta y alquiler
              de equipos multifuncionales, impresoras y computadores de última
              generación.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="font-bold text-lg shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1"
              >
                <Link href="#contacto">
                  Cotizar Ahora <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg font-semibold"
              >
                <Link href="#servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:h-full flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <Card className="rounded-2xl shadow-2xl p-6 border relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-0">
                  {heroImage && (
                    <Image
                      src={heroImage.imageUrl}
                      alt={heroImage.description}
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-64 object-cover mb-4"
                      data-ai-hint={heroImage.imageHint}
                      priority
                    />
                  )}
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold font-headline text-foreground">
                        Kyocera ECOSYS
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Multifuncional de alto rendimiento
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800">
                      Disponible
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <div
                className="absolute -bottom-6 -left-6 z-20 bg-card p-4 rounded-xl shadow-lg border-l-4 border-accent animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-full text-accent">
                    <Headset />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Soporte Técnico
                    </p>
                    <p className="font-bold text-foreground">Especializado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
