import ServicioTecnicoForm from "../servicio-tecnico-form";
import { Mail, MapPin, Phone } from "lucide-react";

const ServicioTecnicoContact = () => {
  return (
    <section className="py-24" id="contacto">
      <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50 flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-primary p-12 text-primary-foreground">
          <h2 className="text-3xl font-black mb-6">
            ¿Su impresora está fallando?
          </h2>
          <p className="mb-10 text-primary-foreground/90">
            Complete el formulario y un técnico se pondrá en contacto en menos
            de 2 horas para el diagnóstico inicial.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin />
              <span className="font-medium">Montería, Córdoba</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone />
              <span className="font-medium">+57 324 659 4263</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail />
              <span className="font-medium">info@hybsas.com</span>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-12 bg-card">
          <ServicioTecnicoForm />
        </div>
      </div>
    </section>
  );
};

export default ServicioTecnicoContact;
