/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  purge: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], // Agrega las rutas de los archivos que usan Tailwind CSS
  darkMode: false, // Opcional, dependiendo de tus necesidades
  theme: {
    extend: {}, // Puedes extender o personalizar temas aquí
  },
  variants: {
    extend: {}, // Puedes extender o personalizar variantes aquí
  },
  plugins: [], // Puedes agregar plugins adicionales aquí
};


