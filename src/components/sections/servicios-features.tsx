
"use client";
import { MapPin, Phone, ShieldCheck } from "lucide-react";

const ServiciosFeatures = () => {
    return (
        <section className="py-24 bg-gray-900 dark:bg-black rounded-3xl mb-24 relative overflow-hidden mx-4">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-4 max-w-[720px]">
                        <h2 className="text-white text-4xl font-black leading-tight">¿Por qué elegir HyS Tecnología?</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">Combinamos más de una década de experiencia local con los estándares globales de la industria tecnológica.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <MapPin className="text-accent" size={40} />
                            <h5 className="text-white text-xl font-bold">Experiencia Local</h5>
                            <p className="text-gray-400 text-sm">Nacimos en Montería y conocemos las necesidades únicas de las empresas en la región de Córdoba.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Phone className="text-primary" size={40} />
                            <h5 className="text-white text-xl font-bold">Respuesta 24/7</h5>
                            <p className="text-gray-400 text-sm">Incidentes críticos no tienen horario. Nuestro equipo está listo para actuar en cualquier momento.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <ShieldCheck className="text-accent" size={40} />
                            <h5 className="text-white text-xl font-bold">Alianza Global</h5>
                            <p className="text-gray-400 text-sm">Somos distribuidores autorizados de las marcas líderes, garantizando partes y equipos originales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiciosFeatures;
