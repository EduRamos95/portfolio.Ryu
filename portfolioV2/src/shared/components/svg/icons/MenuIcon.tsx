import { forwardRef } from 'react'
import { SvgWrapper } from '../SvgWrapper'
import type { SvgWrapperProps } from '../types'

export interface MenuIconProps extends SvgWrapperProps {
  /**
   * Thickness of the menu lines
   * @default 4
   */
  strokeWidth?: number
  /**
   * Stroke color of the lines
   * @default 'currentColor'
   */
  stroke?: string
}

/**
 * Menu Icon Component - Slanted bars menu icon
 *
 * A modern, slanted menu icon with diagonal lines.
 * Perfect for navigation menus with a unique, dynamic look.
 *
 * @example
 * // Basic usage - inherits color from parent
 * <MenuIcon size={32} />
 *
 * @example
 * // With custom stroke color
 * <MenuIcon size={40} stroke="primary" />
 *
 * @example
 * // Responsive sizing
 * <MenuIcon
 *   size={{ default: 24, md: 32, lg: 40 }}
 *   stroke="foreground"
 * />
 *
 * @example
 * // Custom stroke width
 * <MenuIcon size={48} strokeWidth={6} stroke="primary" />
 */
export const MenuIcon = forwardRef<SVGSVGElement, MenuIconProps>(
  ({ strokeWidth = 4, stroke = 'currentColor', fill = 'none', ...props }, ref) => {
    return (
      <SvgWrapper ref={ref} viewBox="0 0 53 32" fill={fill} {...props}>
        <line
          x1="6.82779"
          y1="26.0524"
          x2="9.46406"
          y2="28.8034"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1="2.82779"
          y1="7.05235"
          x2="23.0602"
          y2="28.1644"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1="9.88247"
          y1="1.99967"
          x2="35.0059"
          y2="28.2165"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1="36.7516"
          y1="3.12467"
          x2="50.1364"
          y2="17.092"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1="22.8278"
          y1="1.99967"
          x2="47.9512"
          y2="28.2165"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </SvgWrapper>
    )
  }
)

MenuIcon.displayName = 'MenuIcon'
