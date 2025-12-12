'use client';

import * as React from 'react';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-kshatra-white/90 backdrop-blur-md shadow-sm border-b border-kshatra-black'
          : 'bg-kshatra-white border-b border-kshatra-black'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[74px] items-center justify-center">
          <Logo variant="dark" size="md" showText={true} />
        </div>
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export { Header };
