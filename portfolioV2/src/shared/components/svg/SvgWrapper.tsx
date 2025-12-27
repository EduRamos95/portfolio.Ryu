import { forwardRef, useId, useMemo } from 'react'
import type { SvgIconProps, ResponsiveSizes } from './types'
import {
  resolveColor,
  isResponsiveSize,
  generateResponsiveStyles,
  formatSize,
  BREAKPOINTS,
} from './utils'
import { cn } from '@/shared/utils/utils'

/**
 * Generates CSS media queries for responsive sizes
 */
type SizeValue = string | number | ResponsiveSizes | undefined

function generateMediaQueries(
  id: string,
  width: SizeValue,
  height: SizeValue,
  size: SizeValue
): string | null {
  const queries: string[] = []

  const processSize = (
    sizeValue: ResponsiveSizes,
    cssProperty: 'width' | 'height'
  ) => {
    const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

    breakpointOrder.forEach((bp) => {
      const value = sizeValue[bp]
      if (value !== undefined) {
        queries.push(
          `@media (min-width: ${BREAKPOINTS[bp]}px) { #${id} { ${cssProperty}: ${formatSize(value)}; } }`
        )
      }
    })
  }

  // Size takes precedence
  if (size !== undefined && isResponsiveSize(size)) {
    processSize(size, 'width')
    processSize(size, 'height')
  } else {
    if (width !== undefined && isResponsiveSize(width)) {
      processSize(width, 'width')
    }
    if (height !== undefined && isResponsiveSize(height)) {
      processSize(height, 'height')
    }
  }

  return queries.length > 0 ? queries.join(' ') : null
}

/**
 * SvgWrapper - A flexible, themeable SVG container component
 *
 * Features:
 * - Theme-aware colors (uses CSS variables from your theme)
 * - Responsive sizing via breakpoints
 * - Dark mode support with optional auto-invert
 * - Accessible with title and desc support
 * - Forwards ref to the SVG element
 *
 * @example
 * // Simple usage
 * <SvgWrapper size={24} fill="primary">
 *   <path d="..." />
 * </SvgWrapper>
 *
 * @example
 * // Responsive sizing
 * <SvgWrapper
 *   size={{ default: 32, md: 48, lg: 64 }}
 *   fill="foreground"
 * >
 *   <path d="..." />
 * </SvgWrapper>
 *
 * @example
 * // With dark mode inversion
 * <SvgWrapper size={100} invertOnDark>
 *   <path d="..." />
 * </SvgWrapper>
 */
export const SvgWrapper = forwardRef<SVGSVGElement, SvgIconProps>(
  (
    {
      children,
      width,
      height,
      size,
      fill = 'currentColor',
      fillSecondary,
      stroke,
      invertOnDark = false,
      className,
      style,
      title,
      desc,
      viewBox = '0 0 24 24',
      ...props
    },
    ref
  ) => {
    const baseId = useId()
    const svgId = `svg-${baseId.replaceAll(':', '')}`
    const titleId = title ? `${svgId}-title` : undefined
    const descId = desc ? `${svgId}-desc` : undefined

    // Resolve colors to CSS values
    const resolvedFill = resolveColor(fill)
    const resolvedFillSecondary = resolveColor(fillSecondary)
    const resolvedStroke = resolveColor(stroke)

    // Generate base styles for default/non-responsive sizes
    const baseStyles = useMemo(
      () => generateResponsiveStyles(width, height, size),
      [width, height, size]
    )

    // Generate media queries for responsive sizes
    const mediaQueries = useMemo(
      () => generateMediaQueries(svgId, width, height, size),
      [svgId, width, height, size]
    )

    // Check if we have responsive sizes
    const hasResponsiveSizes =
      isResponsiveSize(width) || isResponsiveSize(height) || isResponsiveSize(size)

    // Combine all styles
    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...style,
      // Set CSS custom properties for colors (useful for child elements)
      '--svg-fill': resolvedFill,
      '--svg-fill-secondary': resolvedFillSecondary,
      '--svg-stroke': resolvedStroke,
    } as React.CSSProperties

    return (
      <>
        {/* Inject responsive media queries if needed */}
        {hasResponsiveSizes && mediaQueries && (
          <style dangerouslySetInnerHTML={{ __html: mediaQueries }} />
        )}

        <svg
          ref={ref}
          id={svgId}
          viewBox={viewBox}
          fill={resolvedFill}
          stroke={resolvedStroke}
          className={cn(
            'shrink-0', // Prevent SVG from shrinking in flex containers
            invertOnDark && 'dark:invert',
            className
          )}
          style={combinedStyles}
          aria-labelledby={titleId || descId ? `${titleId ?? ''} ${descId ?? ''}`.trim() : undefined}
          aria-hidden={!(title || desc)}
          {...props}
        >
          {title && <title id={titleId}>{title}</title>}
          {desc && <desc id={descId}>{desc}</desc>}
          {children}
        </svg>
      </>
    )
  }
)

SvgWrapper.displayName = 'SvgWrapper'
