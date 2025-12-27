import type { SvgColor, ResponsiveSizes } from './types'

/**
 * Maps theme color names to CSS variable references
 */
const COLOR_MAP: Record<string, string> = {
  currentColor: 'currentColor',
  primary: 'oklch(var(--primary))',
  'primary-light': 'oklch(var(--primary-light))',
  'primary-dark': 'oklch(var(--primary-dark))',
  'primary-contrast': 'oklch(var(--primary-contrast))',
  secondary: 'oklch(var(--secondary))',
  'secondary-light': 'oklch(var(--secondary-light))',
  'secondary-dark': 'oklch(var(--secondary-dark))',
  'secondary-contrast': 'oklch(var(--secondary-contrast))',
  foreground: 'oklch(var(--foreground))',
  background: 'oklch(var(--background))',
  muted: 'oklch(var(--muted))',
  'muted-foreground': 'oklch(var(--muted-foreground))',
  accent: 'oklch(var(--accent))',
  'accent-foreground': 'oklch(var(--accent-foreground))',
  error: 'oklch(var(--error))',
  'error-light': 'oklch(var(--error-light))',
  'error-dark': 'oklch(var(--error-dark))',
  warning: 'oklch(var(--warning))',
  'warning-light': 'oklch(var(--warning-light))',
  'warning-dark': 'oklch(var(--warning-dark))',
  info: 'oklch(var(--info))',
  'info-light': 'oklch(var(--info-light))',
  'info-dark': 'oklch(var(--info-dark))',
  success: 'oklch(var(--success))',
  'success-light': 'oklch(var(--success-light))',
  'success-dark': 'oklch(var(--success-dark))',
  custom1: 'oklch(var(--custom1))',
  'custom1-light': 'oklch(var(--custom1-light))',
  'custom1-dark': 'oklch(var(--custom1-dark))',
  custom2: 'oklch(var(--custom2))',
  'custom2-light': 'oklch(var(--custom2-light))',
  'custom2-dark': 'oklch(var(--custom2-dark))',
}

/**
 * Resolves a color value to a CSS-compatible string
 * @param color - Theme color name or direct CSS color value
 * @returns CSS color value
 */
export function resolveColor(color: SvgColor | undefined): string | undefined {
  if (!color) return undefined
  return COLOR_MAP[color] ?? color
}

/**
 * Converts a size value to a CSS-compatible string
 * @param size - Number (px) or string with units
 * @returns CSS size value
 */
export function formatSize(size: string | number | undefined): string | undefined {
  if (size === undefined) return undefined
  if (typeof size === 'number') return `${size}px`
  return size
}

/**
 * Checks if a value is a responsive size object
 */
export function isResponsiveSize(
  value: string | number | ResponsiveSizes | undefined
): value is ResponsiveSizes {
  return typeof value === 'object' && value !== null
}

/**
 * Generates CSS custom properties for responsive sizes
 * Used with CSS media queries for responsive behavior
 */
export function generateResponsiveSizeVars(
  sizes: ResponsiveSizes,
  prefix: string
): Record<string, string> {
  const vars: Record<string, string> = {}

  if (sizes.default !== undefined) {
    vars[`--${prefix}`] = formatSize(sizes.default) ?? ''
  }

  return vars
}

/**
 * Generates Tailwind classes for responsive sizes
 * @param sizes - Responsive size configuration
 * @param property - 'w' for width, 'h' for height
 * @returns Tailwind class string
 */
export function generateResponsiveClasses(
  sizes: ResponsiveSizes,
  property: 'w' | 'h'
): string {
  const classes: string[] = []

  // For arbitrary values, we need to use Tailwind's arbitrary value syntax
  // But since sizes can be complex, we'll use inline styles instead
  // This function is kept for potential future use with predefined sizes

  if (sizes.default !== undefined) {
    classes.push(`${property}-[var(--svg-${property})]`)
  }

  return classes.join(' ')
}

/**
 * Breakpoint values in pixels (matching Tailwind defaults + custom xs)
 */
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

/**
 * Generates inline styles for responsive sizes using CSS variables
 * The actual responsiveness is handled via CSS media queries in a style tag
 */
export function generateResponsiveStyles(
  width: string | number | ResponsiveSizes | undefined,
  height: string | number | ResponsiveSizes | undefined,
  size: string | number | ResponsiveSizes | undefined
): React.CSSProperties {
  const styles: React.CSSProperties = {}

  // Size takes precedence (sets both width and height)
  if (size !== undefined) {
    if (isResponsiveSize(size)) {
      if (size.default !== undefined) {
        styles.width = formatSize(size.default)
        styles.height = formatSize(size.default)
      }
    } else {
      styles.width = formatSize(size)
      styles.height = formatSize(size)
    }
  } else {
    // Handle width
    if (width !== undefined) {
      if (isResponsiveSize(width)) {
        if (width.default !== undefined) {
          styles.width = formatSize(width.default)
        }
      } else {
        styles.width = formatSize(width)
      }
    }

    // Handle height
    if (height !== undefined) {
      if (isResponsiveSize(height)) {
        if (height.default !== undefined) {
          styles.height = formatSize(height.default)
        }
      } else {
        styles.height = formatSize(height)
      }
    }
  }

  return styles
}

/**
 * Generates a unique ID for SVG elements
 */
let idCounter = 0
export function generateSvgId(prefix = 'svg'): string {
  return `${prefix}-${++idCounter}`
}
