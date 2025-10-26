import React from 'react';
import { cn } from '@/lib/utils';

const badgeVariantsDef = {
  base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  variants: {
    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    destructive: 'border-transparent bg-destructive text-destructive-foreground',
    outline: 'text-foreground',
  },
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariantsDef.variants;
}

// FIX: Refactored to a const with React.FC to fix type inference issues with `key` and `className` props.
const Badge: React.FC<BadgeProps> = ({ className, variant = 'default', ...props }) => {
  return (
    <div className={cn(badgeVariantsDef.base, badgeVariantsDef.variants[variant], className)} {...props} />
  );
}

export { Badge };
