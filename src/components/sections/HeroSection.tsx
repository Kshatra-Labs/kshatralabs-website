import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CONTENT } from '@/lib/constants';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[680px] sm:h-[754px] w-full overflow-hidden bg-kshatra-black/95">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={CONTENT.hero.backgroundImage}
          alt="Autonomous drone"
          fill
          priority
          className="object-cover object-center opacity-70"
          quality={90}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-kshatra-black/60 via-kshatra-black/40 to-kshatra-black/80" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-10 opacity-5 pointer-events-none">
        <Image
          src="/images/hero/grid-pattern.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-kshatra-white font-space-grotesk">
            {CONTENT.hero.headline}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-kshatra-white/90 leading-relaxed max-w-xl">
            {CONTENT.hero.description}
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              href={CONTENT.hero.ctaLink}
              className="text-sm sm:text-base font-medium tracking-wide"
            >
              {CONTENT.hero.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

export { HeroSection };
