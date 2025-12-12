import * as React from 'react';
import Image from 'next/image';
import { Logo } from '@/components/ui/Logo';
import { Badge } from '@/components/ui/Badge';
import { COMPANY, CONTENT, CONTACT, IMAGES } from '@/lib/constants';
import { createMailtoLink, createTelLink } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-kshatra-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <Image
          src={IMAGES.sections.footerBg}
          alt="Background decoration"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top section with logo */}
        <div className="flex justify-between items-start mb-16">
          <Logo variant="light" size="md" showText={true} href="/" />

          {/* Contact section */}
          <div className="text-right">
            <p className="text-kshatra-white/50 font-bold mb-6 text-base sm:text-lg font-space-grotesk">
              CONTACT US
            </p>
            <div className="space-y-4 font-normal text-lg sm:text-xl">
              <a
                href={createTelLink(CONTACT.phone)}
                className="block text-kshatra-white hover:text-kshatra-white/80 transition-colors"
              >
                {CONTACT.phoneFormatted}
              </a>
              <a
                href={createMailtoLink(CONTACT.email)}
                className="block text-kshatra-white hover:text-kshatra-white/80 transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10 py-8 sm:py-12">
          {/* Badge */}
          <Badge variant="default">
            {CONTENT.footer.badge}
          </Badge>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-kshatra-white font-space-grotesk max-w-3xl leading-tight">
            {CONTENT.footer.headline}
          </h2>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center sm:text-right">
          <p className="text-kshatra-white/70 text-sm sm:text-base">
            {CONTENT.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export { Footer };
