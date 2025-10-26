import React from 'react';
import { cn } from '@/lib/utils';

// Définitions des variantes et des tailles du bouton
const buttonVariantsDef = {
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  },
  sizes: {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariantsDef.variants;
  size?: keyof typeof buttonVariantsDef.sizes;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    const classes = cn(
      buttonVariantsDef.base,
      buttonVariantsDef.variants[variant],
      buttonVariantsDef.sizes[size],
      className
    );

    if (asChild) {
      const child = React.Children.only(children);
      // FIX: Use `React.HTMLProps` to correctly type the child props.
      // `React.HTMLAttributes` is too restrictive and does not include the `ref`
      // attribute, which caused an error when passing the ref to the child element.
      if (React.isValidElement<React.HTMLProps<HTMLElement>>(child)) {
        return React.cloneElement(child, {
          ...child.props,
          ...props,
          ref,
          className: cn(classes, child.props.className),
        });
      }
      return null;
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };