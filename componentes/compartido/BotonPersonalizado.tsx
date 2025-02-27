import React from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props extends PressableProps {
  children: string;
  color?: 'primario' | 'secundario' | 'terciario';
  variant?: 'contained' | 'text-only';
  className?: string;
}

const BotonPersonalizado = React.forwardRef<View, Props>(
  ({ children, color = 'primario', variant = 'contained', className, ...rest }, ref) => {
    const btnColor = {
        primario: 'bg-primario',
        secundario: 'bg-secundario',
        terciario: 'bg-terciario',
    }[color];

    const textColor = {
      primario: 'text-primario',
      secundario: 'text-secundario',
      terciario: 'text-terciario',
    }[color];

    return (
      <Pressable
        ref={ref}
        className={twMerge(
          `p-3 rounded-md ${variant === 'contained' ? btnColor : ''} active:opacity-90`,
          className ?? ''
        )}
        {...rest}
      >
        <Text
          className={twMerge(
            `text-center font-work-medium`,
            variant === 'contained' ? 'text-white' : textColor
          )}
        >
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default BotonPersonalizado;
