import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TextInputRootProps {
  children: ReactNode;
  className?: string;
}

function TextInputRoot({ children, className }: TextInputRootProps) {
  return (
    <div
      className={twMerge(
        'flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300',
        className
      )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
  className?: string;
}

function TextInputIcon({ children, className }: TextInputIconProps) {
  return (
    <Slot className={twMerge('w-6 h-6 text-gray-400', className)}>
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function TextInputInput({ className, ...props }: TextInputInputProps) {
  return (
    <input
      className={twMerge(
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none',
        className
      )}
      {...props}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
