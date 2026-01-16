import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const features = [
  {
    feature: "Tiempo de respuesta remota",
    basico: "2 Horas",
    empresarial: "1 Hora",
    premium: "30 Minutos",
  },
  {
    feature: "Visitas en sitio al mes",
    basico: "1 Programada",
    empresarial: "Ilimitadas",
    premium: "Ilimitadas",
  },
  {
    feature: "Mantenimiento Preventivo",
    basico: "Trimestral",
    empresarial: "Mensual",
    premium: "Mensual",
  },
  {
    feature: "Repuestos Incluidos",
    basico: "—",
    empresarial: "Bajo presupuesto",
    premium: "Sí, Incluidos",
  },
  {
    feature: "Suministro de Tóner",
    basico: "—",
    empresarial: "—",
    premium: "Sí, Incluido",
  },
];

export default function MantenimientoComparison() {
  return (
    <section className="py-20 bg-muted/20 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-12">Comparativa Detallada</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <Table className="w-full text-left bg-card">
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="p-6 font-bold">Característica</TableHead>
                <TableHead className="p-6 font-bold">Básico</TableHead>
                <TableHead className="p-6 font-bold text-primary">
                  Empresarial
                </TableHead>
                <TableHead className="p-6 font-bold">Premium</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="p-6 text-sm font-medium">
                    {item.feature}
                  </TableCell>
                  <TableCell className="p-6 text-sm">{item.basico}</TableCell>
                  <TableCell className="p-6 text-sm font-bold text-primary">
                    {item.empresarial}
                  </TableCell>
                  <TableCell className="p-6 text-sm">{item.premium}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
