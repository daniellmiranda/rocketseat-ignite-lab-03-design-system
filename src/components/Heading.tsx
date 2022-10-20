import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Heading({
  size = 'md',
  children,
  className,
  asChild,
}: HeadingProps) {
  const Component = asChild ? Slot : 'h2';
  return (
    <Component
      className={twMerge(
        'text-gray-100 font-sans font-bold',
        className,
        size === 'sm' && 'text-lg',
        size === 'md' && 'text-xl',
        size === 'lg' && 'text-2xl'
      )}
    >
      {children}
    </Component>
  );
}
