import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Text({ size = 'md', children, className, asChild }: TextProps) {
  const Component = asChild ? Slot : 'span';
  return (
    <Component
      className={twMerge(
        'text-gray-100 font-sans',
        className,
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-md',
        size === 'lg' && 'text-lg'
      )}
    >
      {children}
    </Component>
  );
}
