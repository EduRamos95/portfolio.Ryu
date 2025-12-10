import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils/utils'

const glassCardVariants = cva(
  'relative overflow-hidden transition-all',
  {
    variants: {
      variant: {
        glass: 'bg-white/30 dark:bg-black/30 backdrop-blur-xl',
        solid: 'bg-card',
        transparent: 'bg-transparent',
      },
      shadow: {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        combined: 'shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,158,171,0.20)] dark:shadow-[0px_12px_24px_-4px_rgba(0,0,0,0.3),0px_0px_2px_0px_rgba(255,255,255,0.1)]',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-md',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        xl: 'rounded-3xl',
      },
      padding: {
        none: 'p-0',
        sm: 'p-3 sm:p-4',
        md: 'p-4 sm:p-5 md:p-6',
        lg: 'p-5 sm:p-6 md:p-8',
      },
    },
    defaultVariants: {
      variant: 'glass',
      shadow: 'combined',
      radius: 'lg',
      padding: 'md',
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  asChild?: boolean
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, shadow, radius, padding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ variant, shadow, radius, padding }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassCard.displayName = 'GlassCard'

export { GlassCard, glassCardVariants }
