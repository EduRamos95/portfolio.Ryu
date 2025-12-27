import type { SVGProps, CSSProperties } from 'react'

/**
 * Responsive size configuration
 * Keys are Tailwind breakpoint names, values are sizes
 */
export type ResponsiveSizes = {
  default?: string | number
  xs?: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
  '2xl'?: string | number
}

/**
 * Color configuration for SVG elements
 * Supports theme colors, CSS variables, or direct color values
 */
export type SvgColor =
  | 'currentColor'
  | 'primary'
  | 'secondary'
  | 'foreground'
  | 'background'
  | 'muted'
  | 'accent'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'custom1'
  | 'custom2'
  | (string & {}) // Allow any string while keeping autocomplete

/**
 * Props for the base SVG wrapper component
 */
export interface SvgWrapperProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  /** Width - can be number, string, or responsive object */
  width?: string | number | ResponsiveSizes
  /** Height - can be number, string, or responsive object */
  height?: string | number | ResponsiveSizes
  /** Size (sets both width and height) - can be number, string, or responsive object */
  size?: string | number | ResponsiveSizes
  /** Primary fill color - uses theme system */
  fill?: SvgColor
  /** Secondary fill color for multi-color SVGs */
  fillSecondary?: SvgColor
  /** Stroke color - uses theme system */
  stroke?: SvgColor
  /** Whether to invert colors in dark mode automatically */
  invertOnDark?: boolean
  /** Additional CSS class names */
  className?: string
  /** Inline styles */
  style?: CSSProperties
  /** Accessible title for the SVG */
  title?: string
  /** Accessible description for the SVG */
  desc?: string
}

/**
 * Props for individual SVG icon components
 */
export interface SvgIconProps extends SvgWrapperProps {
  /** The SVG children (paths, groups, etc.) */
  children?: React.ReactNode
  /** ViewBox of the SVG - defaults to "0 0 24 24" */
  viewBox?: string
}
