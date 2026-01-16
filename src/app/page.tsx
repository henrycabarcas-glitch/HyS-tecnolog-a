
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="servicios">
        <Services />
      </section>
      <section id="productos">
        <Products />
      </section>
    </>
  );
}
