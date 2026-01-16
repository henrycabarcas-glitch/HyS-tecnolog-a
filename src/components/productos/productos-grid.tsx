import { PlaceHolderImages } from "@/lib/placeholder-images";
import ProductCard, { type ProductCardProps } from "./product-card";

export default function ProductosGrid() {
  const images = {
    l3250: PlaceHolderImages.find((i) => i.id === "epson-ecotank-l3250"),
    fi8170: PlaceHolderImages.find((i) => i.id === "fujitsu-fi-8170"),
    probook: PlaceHolderImages.find((i) => i.id === "hp-probook-440-g9"),
    toner58a: PlaceHolderImages.find((i) => i.id === "hp-toner-58a"),
    powerlite: PlaceHolderImages.find((i) => i.id === "epson-powerlite-x49"),
    kingston: PlaceHolderImages.find((i) => i.id === "kingston-a400-ssd"),
  };

  const products: ProductCardProps[] = [
    {
      imageUrl: images.l3250?.imageUrl ?? "",
      imageAlt: "Epson EcoTank L3250",
      imageHint: "multifunctional printer",
      badgeText: "Disponible",
      badgeVariant: "default",
      title: "Epson EcoTank L3250",
      subtitle: "Multifuncional WiFi Direct",
      features: [
        "Impresión sin cartuchos",
        "WiFi Direct & App Smart Panel",
        "Bajo costo de impresión",
      ],
      priceLabel: "Precio Sugerido",
      price: "$850.000",
      buttonText: "Cotizar",
      buttonVariant: "default",
    },
    {
      imageUrl: images.fi8170?.imageUrl ?? "",
      imageAlt: "Fujitsu fi-8170",
      imageHint: "enterprise scanner",
      badgeText: "Consultar Stock",
      badgeVariant: "secondary",
      title: "Fujitsu fi-8170",
      subtitle: "Escáner de alto rendimiento",
      features: ["70 ppm / 140 ipm", "Detección de alimentación doble"],
      priceLabel: "Estado",
      price: "Cotización",
      priceColor: "text-primary",
      buttonText: "Ver Ficha",
      buttonVariant: "outline",
    },
    {
      imageUrl: images.probook?.imageUrl ?? "",
      imageAlt: "HP ProBook 440 G9",
      imageHint: "business laptop",
      badgeText: "Nuevo",
      badgeVariant: "destructive", // Using destructive for a 'new' green color might need theme adjustment
      title: "HP ProBook 440 G9",
      subtitle: "Intel Core i5-1235U",
      features: ["16GB RAM DDR4", "512GB SSD NVMe"],
      priceLabel: "Empresarial",
      price: "Desde $3.200.000",
      buttonText: "Cotizar",
      buttonVariant: "default",
    },
    {
      imageUrl: images.toner58a?.imageUrl ?? "",
      imageAlt: "Tóner Original HP 58A",
      imageHint: "printer toner",
      title: "Tóner Original HP 58A",
      subtitle: "CF258A Negro",
      features: ["Rendimiento: 3,000 pág."],
      priceLabel: "Insumos",
      price: "$350.000",
      buttonText: "Comprar",
      buttonVariant: "default",
    },
    {
      imageUrl: images.powerlite?.imageUrl ?? "",
      imageAlt: "Epson PowerLite X49",
      imageHint: "office projector",
      title: "Proyector Epson X49",
      subtitle: "PowerLite 3LCD",
      features: ["3,600 lúmenes", "HDMI / VGA / USB"],
      priceLabel: "Educativo",
      price: "$2.150.000",
      buttonText: "Cotizar",
      buttonVariant: "default",
    },
    {
      imageUrl: images.kingston?.imageUrl ?? "",
      imageAlt: "Kingston A400 SSD 480GB",
      imageHint: "solid state drive",
      title: "SSD Kingston A400",
      subtitle: "Unidad Sólida 480GB",
      features: ["10x más rápido que HDD"],
      priceLabel: "Partes",
      price: "$125.000",
      buttonText: "Comprar",
      buttonVariant: "default",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );
}
