import React, { type FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

export enum ButtonVariant {
  default = 'default',
  destructive = 'destructive',
  outline = 'outline',
  secondary = 'secondary',
  ghost = 'ghost',
  link = 'link',
}

export enum ButtonSize {
  default = 'default',
  xs = 'xs',
  sm = 'sm',
  lg = 'lg',
  icon = 'icon',
  'icon-xs' = 'icon-xs',
  'icon-sm' = 'icon-sm',
  'icon-lg' = 'icon-lg'
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        [ButtonVariant.default]: "bg-primary text-primary-foreground hover:bg-primary/90",
        [ButtonVariant.destructive]:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        [ButtonVariant.outline]:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        [ButtonVariant.secondary]: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        [ButtonVariant.ghost]: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        [ButtonVariant.link]: "underline-offset-4 hover:underline",
      },
      size: {
        [ButtonSize.default]: "h-9 px-4 py-2 has-[>svg]:px-3",
        [ButtonSize.xs]: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        [ButtonSize.sm]: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        [ButtonSize.lg]: "h-10 rounded-md px-6 has-[>svg]:px-4",
        [ButtonSize.icon]: "size-9",
        [ButtonSize["icon-xs"]]: "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        [ButtonSize["icon-sm"]]: "size-8",
        [ButtonSize["icon-lg"]]: "size-10",
      },
    },
    defaultVariants: {
      variant: ButtonVariant.default,
      size: ButtonSize.default,
    },
  }
);

type ButtonProps = {
  asChild?: boolean,
  label: string
} & React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>

export const Button: FC<ButtonProps> = ({
  className,
  variant = ButtonVariant.default,
  size = ButtonSize.default,
  asChild = false,
  label,
  ...props
}) => {
  const Comp = asChild ? Slot.Root : "button";

  const shouldExcludeTab = variant === ButtonVariant.link;

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      tabIndex={shouldExcludeTab ? -1 : 0}
      aria-label={label}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
