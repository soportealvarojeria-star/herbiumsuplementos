/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        botanical: {
          bone: '#F4F1EA',
          carbon: '#1A1A1A',
          pine: '#1E3A2F',
          terra: '#C17767',
          leaf: '#8A9A5B'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}