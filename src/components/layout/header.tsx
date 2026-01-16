"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Logo from "../logo";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";
import { ThemeToggleButton } from "../theme-toggle-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/outsourcing", label: "Outsourcing" },
  { href: "/productos", label: "Productos" },
  { href: "/servicio-tecnico", label: "Servicio Técnico" },
  { href: "/mantenimiento", label: "Contratos" },
];

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full z-50 bg-card/80 dark:bg-card/70 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
                suppressHydrationWarning
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggleButton />
            <Button asChild className="font-bold shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggleButton />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="mt-8 flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-lg font-medium transition-colors",
                            pathname === link.href
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                          )}
                          onClick={() => setIsSheetOpen(false)}
                          suppressHydrationWarning
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <Button
                      asChild
                      className="w-full font-bold text-lg py-6"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Link href="/contacto">Contáctanos</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
