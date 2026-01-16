
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServiciosCTA = () => {
    return (
        <section className="pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-white text-3xl md:text-5xl font-black mb-4">¿Listo para optimizar su IT?</h2>
                        <p className="text-white/80 text-lg max-w-[600px]">Hable con uno de nuestros arquitectos de soluciones hoy mismo y reciba un diagnóstico inicial sin costo.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <Button asChild variant="secondary" size="lg" className="bg-white text-primary font-black text-lg hover:bg-gray-200">
                           <Link href="/contacto">Agendar Consultoría</Link>
                        </Button>
                        <Button asChild variant="ghost" size="lg" className="bg-gray-900 text-white font-black text-lg hover:bg-black">
                            <Link href="tel:+573246594263">Llamar Ahora</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiciosCTA;
