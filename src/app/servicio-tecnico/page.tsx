import ServicioTecnicoHero from "@/components/sections/servicio-tecnico-hero";
import ServicioTecnicoBrands from "@/components/sections/servicio-tecnico-brands";
import ServicioTecnicoMaintenance from "@/components/sections/servicio-tecnico-maintenance";
import ServicioTecnicoSpecialized from "@/components/sections/servicio-tecnico-specialized";
import ServicioTecnicoContact from "@/components/sections/servicio-tecnico-contact";

export default function ServicioTecnicoPage() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-20">
      <ServicioTecnicoHero />
      <ServicioTecnicoBrands />
      <ServicioTecnicoMaintenance />
      <ServicioTecnicoSpecialized />
      <ServicioTecnicoContact />
    </main>
  );
}
