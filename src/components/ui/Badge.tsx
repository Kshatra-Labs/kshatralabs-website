import * as React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-transparent border-2 border-kshatra-white text-kshatra-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-kshatra-black',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium tracking-wider',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Badge.displayName = 'Badge';

export { Badge };
