import * as React from 'react';
import Image from 'next/image';
import { CONTENT } from '@/lib/constants';

const VisionSection: React.FC = () => {
  return (
    <section className="relative bg-kshatra-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Decorative grid pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #3f3f3f 1px, transparent 1px)',
          backgroundSize: '74px 74px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          {/* Heading with decorative arrows */}
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            {/* Left arrow */}
            <div className="relative w-8 sm:w-10 h-3 flex-shrink-0">
              <Image
                src={CONTENT.vision.decorations.arrowLeft}
                alt=""
                fill
                className="object-contain rotate-180 scale-y-[-1]"
              />
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-normal text-kshatra-black text-center tracking-tight">
              {CONTENT.vision.heading}
            </h2>

            {/* Right arrow */}
            <div className="relative w-8 sm:w-10 h-3 flex-shrink-0">
              <Image
                src={CONTENT.vision.decorations.arrowRight}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Vision content */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed text-kshatra-black text-center font-space-grotesk">
            {CONTENT.vision.content}
          </p>
        </div>
      </div>
    </section>
  );
};

VisionSection.displayName = 'VisionSection';

export { VisionSection };
