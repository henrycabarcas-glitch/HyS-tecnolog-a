'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IconWhatsApp } from '@/components/icons';

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/573246594263"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        size="icon"
        className="h-16 w-16 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1DA851] text-white"
      >
        <IconWhatsApp className="h-8 w-8" />
      </Button>
    </Link>
  );
};

export default WhatsAppButton;
