import OutsourcingHero from "@/components/sections/outsourcing-hero";
import TrustStrip from "@/components/sections/trust-strip";
import SpecializedServices from "@/components/sections/specialized-services";
import FeaturesBar from "@/components/sections/features-bar";
import QuoteSection from "@/components/sections/quote-section";

export default function OutsourcingPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-16">
      <OutsourcingHero />
      <TrustStrip />
      <SpecializedServices />
      <FeaturesBar />
      <QuoteSection />
    </main>
  );
}
