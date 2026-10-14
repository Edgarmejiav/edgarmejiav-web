/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'Cascadia Code', 'Source Code Pro', 'Menlo', 'Consolas', 'monospace'],
        archivo: ['Archivo', 'sans-serif'],
      },
      colors: {
        accent: {
          cyan: '#06b6d4',
          violet: '#7c3aed',
          lime: '#84cc16',
          blue: '#7FA8FF',
        },
      },
    },
  },
  plugins: [],
};