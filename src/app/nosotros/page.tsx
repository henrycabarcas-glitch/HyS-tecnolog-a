import NosotrosCta from "@/components/sections/nosotros-cta";
import NosotrosHero from "@/components/sections/nosotros-hero";
import NosotrosMissionVision from "@/components/sections/nosotros-mission-vision";
import NosotrosValues from "@/components/sections/nosotros-values";
import NosotrosWhy from "@/components/sections/nosotros-why";

export default function NosotrosPage() {
  return (
    <main>
      <NosotrosHero />
      <NosotrosMissionVision />
      <NosotrosWhy />
      <NosotrosValues />
      <NosotrosCta />
    </main>
  );
}
