import React, { ReactNode, forwardRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        primary:
          'bg-red-800 text-white hover:bg-red-900 focus:ring-red-800 shadow-sm hover:shadow-md rounded-lg px-6 py-3',
        secondaryCustom:
          'bg-white text-red-800 border-2 border-red-800 hover:bg-red-50 focus:ring-red-800 rounded-lg px-6 py-3',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'default' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  href?: string;
  external?: boolean;
}

interface CustomButtonProps extends ButtonProps {}

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, variant = 'primary', size, href, external = false, className, ...props }, ref) => {
    const variantMap: Record<string, any> = {
      primary: 'primary',
      secondary: 'secondaryCustom',
      default: 'default',
      destructive: 'destructive',
      outline: 'outline',
      ghost: 'ghost',
      link: 'link',
    };

    const classes = cn(
      buttonVariants({ variant: variantMap[variant] || variant, size }),
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
