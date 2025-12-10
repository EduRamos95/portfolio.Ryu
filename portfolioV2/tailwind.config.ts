import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // In Tailwind v4, @theme directive in CSS handles all color definitions
  // No need to duplicate them here
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
