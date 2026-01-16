import MantenimientoComparison from "@/components/sections/mantenimiento-comparison";
import MantenimientoContact from "@/components/sections/mantenimiento-contact";
import MantenimientoHero from "@/components/sections/mantenimiento-hero";
import MantenimientoPlans from "@/components/sections/mantenimiento-plans";
import MantenimientoTrust from "@/components/sections/mantenimiento-trust";
import MantenimientoWhy from "@/components/sections/mantenimiento-why";

export default function MantenimientoPage() {
  return (
    <main className="w-full">
      <MantenimientoHero />
      <MantenimientoWhy />
      <MantenimientoPlans />
      <MantenimientoComparison />
      <MantenimientoContact />
      <MantenimientoTrust />
    </main>
  );
}
