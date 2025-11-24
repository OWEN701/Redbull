import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: boolean;
  id?: string;
}

export function Section({ children, className, container = true, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', className)}>
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
