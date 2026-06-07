/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest:  { DEFAULT: '#3d6b41', light: '#5a8f5e', dark: '#2a4a2e' },
        straw:   { DEFAULT: '#e8d5a3', light: '#f5ecd4', dark: '#c9b47a' },
        earth:   { DEFAULT: '#8b5e3c', light: '#a87450', dark: '#6b4228' },
        cream:   '#faf6ee',
        bark:    '#4a3728',
        sage:    '#8fa882',
        sand:    '#d4c4a0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Source Serif 4"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
