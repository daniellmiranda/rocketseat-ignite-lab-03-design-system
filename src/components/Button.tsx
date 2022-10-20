import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Button({ children, className, asChild }: ButtonProps) {
  const Component = asChild ? Slot : 'button';
  return (
    <Component
      className={twMerge(
        'font-sans py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className
      )}
    >
      {children}
    </Component>
  );
}
