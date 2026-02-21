import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import { type ReactNode, type FC } from 'react';

export enum HeadingSize {
  xl = 'xl',
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs',
}

export enum HeadingLevel {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
}

const headingVariants = cva('tracking-tight', {
  variants: {
    size: {
      [HeadingSize.xl]: 'text-3xl lg:text-4xl font-extrabold text-balance',
      [HeadingSize.lg]: 'text-2xl lg:text-3xl font-semibold',
      [HeadingSize.md]: 'text-xl lg:text-2xl font-semibold',
      [HeadingSize.sm]: 'text-lg lg:text-xl font-semibold',
      [HeadingSize.xs]: 'text-base lg:text-lg font-semibold',
    }
  },
  defaultVariants: {
    size: HeadingSize.md
  }
});

type HeadingProps = {
  className?: string,
  children: ReactNode,
  level?: HeadingLevel
} & React.ComponentPropsWithRef<typeof headingVariants> & VariantProps<typeof headingVariants>;

export const Heading: FC<HeadingProps> = ({ level, size, className, children, ...restProps }) => {
  const Comp = level ?? HeadingLevel.h1;

  return (
    <Comp {...restProps} className={cn(headingVariants({ size, className }))}>
      {children}
    </Comp>
  );
};
