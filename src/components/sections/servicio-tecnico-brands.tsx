const brands = ["Ricoh", "Epson", "HP", "Kyocera"];

const ServicioTecnicoBrands = () => {
  return (
    <section className="py-16" id="marcas">
      <h3 className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-10">
        Soporte Multimarca Especializado
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <div
            key={brand}
            className="bg-card p-8 rounded-xl flex items-center justify-center border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <span className="text-2xl font-black italic text-muted-foreground/60 group-hover:text-primary transition-colors uppercase">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicioTecnicoBrands;
