import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode, type FC } from "react";

export enum TextType {
  paragraph = 'p',
  span = 'span'
}

export enum TextSize {
  xl = 'xl',
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs',
}

const typographyVariants = cva('font-normal', {
  variants: {
    size: {
      [TextSize.xl]: '',
      [TextSize.lg]: '',
      [TextSize.md]: '',
      [TextSize.sm]: '',
      [TextSize.xs]: ''
    }
  },
  defaultVariants: {
    size: TextSize.sm
  }
});


type TextProps = {
  className?: string,
  children: ReactNode,
  type?: TextType
}
  & React.ComponentPropsWithoutRef<typeof typographyVariants>
  & VariantProps<typeof typographyVariants>;

export const Text: FC<TextProps> = ({ size, type, className, children, ...restProps }) => {
  const Comp = type ?? TextType.paragraph;

  return (
    <Comp {...restProps} className={cn(typographyVariants({ size, className }))}>
      {children}
    </Comp>
  );
};
