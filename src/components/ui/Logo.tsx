import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { COMPANY, IMAGES } from '@/lib/constants';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  href = '/',
  className,
  showText = true,
}) => {
  const sizes = {
    sm: { width: 30, height: 25, text: 'text-lg' },
    md: { width: 52, height: 31, text: 'text-2xl' },
    lg: { width: 70, height: 42, text: 'text-3xl' },
  };

  const textColors = {
    light: 'text-kshatra-white',
    dark: 'text-kshatra-black',
  };

  const logoSrc = variant === 'light' ? IMAGES.logos.footer : IMAGES.logos.main;
  const currentSize = sizes[size];

  const content = (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative" style={{ width: currentSize.width, height: currentSize.height }}>
        <Image
          src={logoSrc}
          alt={`${COMPANY.fullName} Logo`}
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className={cn('font-bold font-space-grotesk', currentSize.text, textColors[variant])}>
          {COMPANY.name}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
};

Logo.displayName = 'Logo';

export { Logo };
