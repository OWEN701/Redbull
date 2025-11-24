import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  href?: string;
}

export function Card({ children, className, hover = true, href }: CardProps) {
  const baseStyles = cn(
    'bg-white rounded-xl border border-neutral-200 overflow-hidden',
    hover && 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}
