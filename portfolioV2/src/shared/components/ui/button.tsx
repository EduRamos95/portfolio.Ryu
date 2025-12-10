import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils/utils'

/**
 * Button variants following Material UI pattern
 * - contained: Filled background with contrast text
 * - outlined: Border + transparent background
 * - text: No background, just text color
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      // Color variants (like MUI color prop)
      color: {
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        info: '',
        success: '',
        custom1: '',
        custom2: '',
      },
      // Visual variants (like MUI variant prop)
      variant: {
        // Contained: bg={color}, text={color-contrast}
        contained: 'shadow-sm',
        // Outlined: border={color}, text={color}, bg=transparent
        outlined: 'border-2 bg-transparent',
        // Text: just text color, no bg or border
        text: 'bg-transparent hover:bg-accent/10',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    // Compound variants: color + variant combinations
    compoundVariants: [
      // PRIMARY variants
      {
        color: 'primary',
        variant: 'contained',
        className:
          'bg-primary text-primary-contrast hover:bg-primary-light active:bg-primary-dark focus-visible:ring-primary',
      },
      {
        color: 'primary',
        variant: 'outlined',
        className:
          'border-primary text-primary hover:bg-primary/10 active:bg-primary/20 focus-visible:ring-primary',
      },
      {
        color: 'primary',
        variant: 'text',
        className:
          'text-primary hover:bg-primary/10 active:bg-primary/20 focus-visible:ring-primary',
      },

      // SECONDARY variants
      {
        color: 'secondary',
        variant: 'contained',
        className:
          'bg-secondary text-secondary-contrast hover:bg-secondary-light active:bg-secondary-dark focus-visible:ring-secondary',
      },
      {
        color: 'secondary',
        variant: 'outlined',
        className:
          'border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/20 focus-visible:ring-secondary',
      },
      {
        color: 'secondary',
        variant: 'text',
        className:
          'text-secondary hover:bg-secondary/10 active:bg-secondary/20 focus-visible:ring-secondary',
      },

      // ERROR variants
      {
        color: 'error',
        variant: 'contained',
        className:
          'bg-error text-error-contrast hover:bg-error-light active:bg-error-dark focus-visible:ring-error',
      },
      {
        color: 'error',
        variant: 'outlined',
        className:
          'border-error text-error hover:bg-error/10 active:bg-error/20 focus-visible:ring-error',
      },
      {
        color: 'error',
        variant: 'text',
        className: 'text-error hover:bg-error/10 active:bg-error/20 focus-visible:ring-error',
      },

      // WARNING variants
      {
        color: 'warning',
        variant: 'contained',
        className:
          'bg-warning text-warning-contrast hover:bg-warning-light active:bg-warning-dark focus-visible:ring-warning',
      },
      {
        color: 'warning',
        variant: 'outlined',
        className:
          'border-warning text-warning hover:bg-warning/10 active:bg-warning/20 focus-visible:ring-warning',
      },
      {
        color: 'warning',
        variant: 'text',
        className:
          'text-warning hover:bg-warning/10 active:bg-warning/20 focus-visible:ring-warning',
      },

      // INFO variants
      {
        color: 'info',
        variant: 'contained',
        className:
          'bg-info text-info-contrast hover:bg-info-light active:bg-info-dark focus-visible:ring-info',
      },
      {
        color: 'info',
        variant: 'outlined',
        className:
          'border-info text-info hover:bg-info/10 active:bg-info/20 focus-visible:ring-info',
      },
      {
        color: 'info',
        variant: 'text',
        className: 'text-info hover:bg-info/10 active:bg-info/20 focus-visible:ring-info',
      },

      // SUCCESS variants
      {
        color: 'success',
        variant: 'contained',
        className:
          'bg-success text-success-contrast hover:bg-success-light active:bg-success-dark focus-visible:ring-success',
      },
      {
        color: 'success',
        variant: 'outlined',
        className:
          'border-success text-success hover:bg-success/10 active:bg-success/20 focus-visible:ring-success',
      },
      {
        color: 'success',
        variant: 'text',
        className:
          'text-success hover:bg-success/10 active:bg-success/20 focus-visible:ring-success',
      },

      // CUSTOM1 variants
      {
        color: 'custom1',
        variant: 'contained',
        className:
          'bg-custom1 text-custom1-contrast hover:bg-custom1-light active:bg-custom1-dark focus-visible:ring-custom1',
      },
      {
        color: 'custom1',
        variant: 'outlined',
        className:
          'border-custom1 text-custom1 hover:bg-custom1/10 active:bg-custom1/20 focus-visible:ring-custom1',
      },
      {
        color: 'custom1',
        variant: 'text',
        className:
          'text-custom1 hover:bg-custom1/10 active:bg-custom1/20 focus-visible:ring-custom1',
      },

      // CUSTOM2 variants
      {
        color: 'custom2',
        variant: 'contained',
        className:
          'bg-custom2 text-custom2-contrast hover:bg-custom2-light active:bg-custom2-dark focus-visible:ring-custom2',
      },
      {
        color: 'custom2',
        variant: 'outlined',
        className:
          'border-custom2 text-custom2 hover:bg-custom2/10 active:bg-custom2/20 focus-visible:ring-custom2',
      },
      {
        color: 'custom2',
        variant: 'text',
        className:
          'text-custom2 hover:bg-custom2/10 active:bg-custom2/20 focus-visible:ring-custom2',
      },
    ],
    defaultVariants: {
      variant: 'contained',
      color: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'color'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  color,
  size,
  asChild = false,
  ...props
}: Readonly<ButtonProps>) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, color, size, className }))}
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
