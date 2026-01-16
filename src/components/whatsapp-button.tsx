'use client';

import { Button } from '@/components/ui/button';
import { IconWhatsApp } from '@/components/icons';
import { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/573246594263"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <Button
          size="icon"
          className="h-16 w-16 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1DA851] text-white"
        >
          <IconWhatsApp className="h-8 w-8" />
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
