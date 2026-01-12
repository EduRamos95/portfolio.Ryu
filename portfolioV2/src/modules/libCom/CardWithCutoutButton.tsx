import { cn } from '@/shared/utils/utils'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface CardWithCutoutButtonProps {
  children?: ReactNode
  className?: string
  /** Size of the cutout button in pixels */
  buttonSize?: number
  /** Gap between button edge and cutout edge in pixels */
  cutoutGap?: number
  /** Distance from card edge to button center in pixels */
  buttonOffset?: number
  /** Position of the cutout button */
  buttonPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  /** Button content (icon, text, etc.) */
  buttonContent?: ReactNode
  /** Button props */
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>
  /** Border radius of the card in pixels */
  cardRadius?: number
}

/**
 * Card with Cutout Button Component
 *
 * A card component with a circular button inside that creates a "cutout" effect,
 * where the card corner appears to be carved out around the button.
 * The button stays within the card boundaries.
 *
 * @example
 * <CardWithCutoutButton
 *   buttonContent={<PlusIcon />}
 *   buttonProps={{ onClick: () => console.log('clicked') }}
 * >
 *   <p>Card content here</p>
 * </CardWithCutoutButton>
 */
export function CardWithCutoutButton({
  children,
  className,
  buttonSize = 48,
  cutoutGap = 6,
  buttonOffset = 16,
  buttonPosition = 'top-right',
  buttonContent,
  buttonProps,
  cardRadius = 16,
}: Readonly<CardWithCutoutButtonProps>) {
  // Calculate the cutout radius (button radius + gap)
  const cutoutRadius = buttonSize / 2 + cutoutGap
  const buttonRadius = buttonSize / 2

  // Calculate mask and button positions based on buttonPosition
  const getPositions = () => {
    const btnPos = buttonOffset - buttonRadius

    switch (buttonPosition) {
      case 'top-left':
        return {
          maskPosition: `${buttonOffset}px ${buttonOffset}px`,
          buttonStyle: { top: btnPos, left: btnPos },
        }
      case 'bottom-right':
        return {
          maskPosition: `calc(100% - ${buttonOffset}px) calc(100% - ${buttonOffset}px)`,
          buttonStyle: { bottom: btnPos, right: btnPos },
        }
      case 'bottom-left':
        return {
          maskPosition: `${buttonOffset}px calc(100% - ${buttonOffset}px)`,
          buttonStyle: { bottom: btnPos, left: btnPos },
        }
      case 'top-right':
      default:
        return {
          maskPosition: `calc(100% - ${buttonOffset}px) ${buttonOffset}px`,
          buttonStyle: { top: btnPos, right: btnPos },
        }
    }
  }

  const { maskPosition, buttonStyle } = getPositions()

  // Create radial gradient mask for cutout effect
  const maskImage = `radial-gradient(circle ${cutoutRadius}px at ${maskPosition}, transparent 100%, black 100%)`

  return (
    <div className="relative">
      {/* Card with cutout mask */}
      <div
        className={cn('bg-card border border-border p-6', className)}
        style={{
          borderRadius: cardRadius,
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        {children}
      </div>

      {/* Button positioned inside the card area */}
      <button
        {...buttonProps}
        className={cn(
          'absolute flex items-center justify-center',
          'rounded-full bg-primary text-primary-foreground',
          'shadow-lg hover:bg-primary/90 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          buttonProps?.className
        )}
        style={{
          width: buttonSize,
          height: buttonSize,
          ...buttonStyle,
        }}
      >
        {buttonContent}
      </button>
    </div>
  )
}
