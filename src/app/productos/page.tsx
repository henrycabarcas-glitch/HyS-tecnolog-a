import ProductosSidebar from "@/components/productos/productos-sidebar";
import ProductosGrid from "@/components/productos/productos-grid";
import ProductosFilters from "@/components/productos/productos-filters";
import ProductosPagination from "@/components/productos/productos-pagination";

export default function ProductosPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <ProductosSidebar />
        <div className="flex-1">
          <ProductosFilters />
          <ProductosGrid />
          <ProductosPagination />
        </div>
      </div>
    </main>
  );
}
