import QuoteForm from "../quote-form";
import { Phone, MapPin } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-900 text-white rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="lg:col-span-5 flex flex-col gap-6 relative z-10">
        <h2 className="text-4xl font-black">
          Solicite una Cotización Personalizada
        </h2>
        <p className="text-zinc-400 leading-relaxed">
          Déjenos sus datos y un consultor especializado en soluciones de
          outsourcing se pondrá en contacto con usted en menos de 2 horas
          laborales.
        </p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-3">
            <Phone className="text-primary" />
            <span className="font-medium">+57 324 659 4263</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" />
            <span className="font-medium">
              Calle 14A #3-27 Barrio Buenavista Montería - Córdoba
            </span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7 relative z-10">
        <QuoteForm />
      </div>
    </section>
  );
};

export default QuoteSection;
