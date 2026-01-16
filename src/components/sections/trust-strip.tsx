const TrustStrip = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-8 opacity-50 grayscale py-4 border-y border-border">
      <span className="text-sm font-bold uppercase tracking-widest italic">
        Nuestros Aliados
      </span>
      <div className="flex gap-12 flex-wrap justify-center">
        <span className="text-xl font-black italic">HP Enterprise</span>
        <span className="text-xl font-black italic">EPSON</span>
        <span className="text-xl font-black italic">Lenovo</span>
        <span className="text-xl font-black italic">Canon</span>
        <span className="text-xl font-black italic">Kyocera</span>
      </div>
    </div>
  );
};

export default TrustStrip;
