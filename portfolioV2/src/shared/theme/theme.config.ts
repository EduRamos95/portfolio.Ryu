/**
 * THEME CONFIGURATION
 * Similar to Material UI ThemeProvider
 * Edit colors here and they apply to ALL components automatically
 */

export type ColorVariant = {
  main: string
  light: string
  dark: string
  contrastText: string
}

export type ThemeColors = {
  primary: ColorVariant
  secondary: ColorVariant
  error: ColorVariant
  warning: ColorVariant
  info: ColorVariant
  success: ColorVariant
  // Add your own custom colors
  custom1?: ColorVariant
  custom2?: ColorVariant
  custom3?: ColorVariant
}

export type Theme = {
  colors: ThemeColors
  radius: string
  // Add more theme options as needed
}

/**
 * LIGHT THEME
 * Change colors here to customize your entire app
 */
export const lightTheme: Theme = {
  colors: {
    primary: {
      main: 'oklch(0.205 0 0)',         // Black
      light: 'oklch(0.35 0 0)',         // Lighter gray
      dark: 'oklch(0.15 0 0)',          // Darker black
      contrastText: 'oklch(0.985 0 0)', // White
    },
    secondary: {
      main: 'oklch(0.97 0 0)',          // Light gray
      light: 'oklch(0.985 0 0)',        // Lighter
      dark: 'oklch(0.92 0 0)',          // Darker
      contrastText: 'oklch(0.205 0 0)', // Black
    },
    error: {
      main: 'oklch(0.577 0.245 27.325)',
      light: 'oklch(0.677 0.245 27.325)',
      dark: 'oklch(0.477 0.245 27.325)',
      contrastText: 'oklch(1 0 0)',
    },
    warning: {
      main: 'oklch(0.75 0.15 85)',      // Orange
      light: 'oklch(0.85 0.13 85)',
      dark: 'oklch(0.65 0.17 85)',
      contrastText: 'oklch(0.145 0 0)',
    },
    info: {
      main: 'oklch(0.55 0.22 264)',     // Blue
      light: 'oklch(0.65 0.2 264)',
      dark: 'oklch(0.45 0.24 264)',
      contrastText: 'oklch(1 0 0)',
    },
    success: {
      main: 'oklch(0.6 0.18 142)',      // Green
      light: 'oklch(0.7 0.16 142)',
      dark: 'oklch(0.5 0.2 142)',
      contrastText: 'oklch(1 0 0)',
    },
    // CUSTOM COLORS - ADD YOUR BRAND COLORS HERE
    custom1: {
      main: 'oklch(0.55 0.22 264)',     // Example: Blue
      light: 'oklch(0.65 0.2 264)',
      dark: 'oklch(0.45 0.24 264)',
      contrastText: 'oklch(1 0 0)',
    },
    custom2: {
      main: 'oklch(0.6 0.18 142)',      // Example: Green
      light: 'oklch(0.7 0.16 142)',
      dark: 'oklch(0.5 0.2 142)',
      contrastText: 'oklch(1 0 0)',
    },
  },
  radius: '0.625rem',
}

/**
 * DARK THEME
 * Automatically applied when dark mode is active
 */
export const darkTheme: Theme = {
  colors: {
    primary: {
      main: 'oklch(0.922 0 0)',
      light: 'oklch(0.95 0 0)',
      dark: 'oklch(0.85 0 0)',
      contrastText: 'oklch(0.205 0 0)',
    },
    secondary: {
      main: 'oklch(0.269 0 0)',
      light: 'oklch(0.35 0 0)',
      dark: 'oklch(0.22 0 0)',
      contrastText: 'oklch(0.985 0 0)',
    },
    error: {
      main: 'oklch(0.704 0.191 22.216)',
      light: 'oklch(0.804 0.191 22.216)',
      dark: 'oklch(0.604 0.191 22.216)',
      contrastText: 'oklch(1 0 0)',
    },
    warning: {
      main: 'oklch(0.8 0.13 85)',
      light: 'oklch(0.9 0.11 85)',
      dark: 'oklch(0.7 0.15 85)',
      contrastText: 'oklch(0.145 0 0)',
    },
    info: {
      main: 'oklch(0.6 0.2 264)',
      light: 'oklch(0.7 0.18 264)',
      dark: 'oklch(0.5 0.22 264)',
      contrastText: 'oklch(1 0 0)',
    },
    success: {
      main: 'oklch(0.65 0.16 142)',
      light: 'oklch(0.75 0.14 142)',
      dark: 'oklch(0.55 0.18 142)',
      contrastText: 'oklch(1 0 0)',
    },
    custom1: {
      main: 'oklch(0.6 0.2 264)',
      light: 'oklch(0.7 0.18 264)',
      dark: 'oklch(0.5 0.22 264)',
      contrastText: 'oklch(1 0 0)',
    },
    custom2: {
      main: 'oklch(0.65 0.16 142)',
      light: 'oklch(0.75 0.14 142)',
      dark: 'oklch(0.55 0.18 142)',
      contrastText: 'oklch(1 0 0)',
    },
  },
  radius: '0.625rem',
}

// Export current theme based on mode (will be handled by ThemeProvider)
export const getCurrentTheme = (mode: 'light' | 'dark'): Theme => {
  return mode === 'dark' ? darkTheme : lightTheme
}

// Helper to get all color names
export const getColorNames = (): string[] => {
  return Object.keys(lightTheme.colors)
}
