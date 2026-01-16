import ContactForm from '@/components/contact-form';
import { IconFacebook, IconInstagram } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactoPage() {
  const mapImage = PlaceHolderImages.find((i) => i.id === 'contacto-map');

  return (
    <main className="flex-grow">
      {/* PageHeading Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-20 pt-16 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground leading-tight mb-4">
            Contacto
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Estamos listos para impulsar la transformación digital de tu empresa
            en Montería y toda Colombia. Cuéntanos tu proyecto y nuestro equipo
            de expertos se pondrá en contacto contigo.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-sm border">
            <ContactForm />
          </div>

          {/* Right: Info Section */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="text-primary" />
                  Nuestra Oficina
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Calle 14A #3-27 Barrio Buenavista
                  <br />
                  Montería - Córdoba, Colombia
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Phone className="text-primary" />
                  Llámanos
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground">
                    +57 324 659 4263
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Mail className="text-primary" />
                  Correo Electrónico
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground">
                    info@hybsas.com
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-12 border-t mt-12">
              <h4 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-6">
                Síguenos en redes
              </h4>
              <div className="flex gap-4">
                 <Link href="#" className="w-12 h-12 rounded-full bg-card border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-foreground" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="w-12 h-12 rounded-full bg-card border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-foreground" aria-label="Facebook">
                    <IconFacebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="w-12 h-12 rounded-full bg-card border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-foreground" aria-label="Instagram">
                    <IconInstagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] relative">
        <div className="absolute inset-0 bg-muted overflow-hidden">
          {mapImage && (
            <Image
              className="w-full h-full object-cover opacity-60 dark:opacity-40"
              alt={mapImage.description}
              src={mapImage.imageUrl}
              data-ai-hint={mapImage.imageHint}
              fill
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card p-4 rounded-xl shadow-xl flex items-center gap-4 border border-primary/30">
              <div className="size-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <MapPin />
              </div>
              <div>
                <h4 className="font-bold text-foreground">HyS Tecnología SAS</h4>
                <p className="text-sm text-muted-foreground">Sede Central Montería</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
