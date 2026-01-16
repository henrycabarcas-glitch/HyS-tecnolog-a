import Link from "next/link";
import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="bg-muted/50 dark:bg-gray-900/50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-16">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Expertos en soluciones tecnológicas integrales. Calidad, servicio
              y respaldo para tu empresa en la región.
            </p>
          </div>
          <div>
            <h3 className="font-bold font-headline text-foreground mb-4">
              Servicios
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Renting de Impresoras
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Venta de Computadores
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Servicio Técnico
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Suministros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-headline text-foreground mb-4">
              Empresa
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/nosotros" className="hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-headline text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} HyS Tecnología SAS. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
