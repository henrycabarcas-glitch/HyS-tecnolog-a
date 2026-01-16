import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  badgeText?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  title: string;
  subtitle: string;
  features: string[];
  priceLabel: string;
  price: string;
  priceColor?: string;
  buttonText: string;
  buttonVariant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
}

export default function ProductCard({
  imageUrl,
  imageAlt,
  imageHint,
  badgeText,
  badgeVariant,
  title,
  subtitle,
  features,
  priceLabel,
  price,
  priceColor,
  buttonText,
  buttonVariant,
}: ProductCardProps) {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-white p-8">
        {badgeText && (
          <Badge
            variant={badgeVariant}
            className={cn("absolute top-3 left-3 uppercase text-[10px] font-black", {
                "bg-green-500 text-white": badgeText === "Nuevo"
            })}
          >
            {badgeText}
          </Badge>
        )}
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={400}
          className="w-full h-full object-contain"
          data-ai-hint={imageHint}
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="font-headline text-lg font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs font-medium">{subtitle}</p>
        </div>
        <div className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <CheckCircle className="w-3 h-3 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 pt-4 border-t">
          <div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase">
              {priceLabel}
            </p>
            <p className={cn("font-headline text-xl font-bold", priceColor)}>
              {price}
            </p>
          </div>
          <Button
            variant={buttonVariant}
            className="text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
