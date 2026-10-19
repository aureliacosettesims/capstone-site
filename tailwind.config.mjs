/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Organic warm paper, cream, and oatmeal neutrals
        paper: {
          50: '#FDFCF9',  // Clean warm ivory for card containers
          100: '#F4EFE6', // Soft oatmeal / warm paper base background
          200: '#ECE4D6', // Subtle oatmeal wash, badges, hover surfaces
          300: '#DFD4C3', // Delicate dividing lines and soft borders
          400: '#D3C1AD', // Light artisan brown border / framing
          500: '#BFA895', // Muted warm hazelnut
          600: '#A68A72', // Rich light brown, secondary labels, subtitles
          700: '#8C6D53', // Rich warm artisan brown, accents, links, active borders
          800: '#5A4537', // Deep warm mocha brown
          900: '#2D241E', // Deep dark chocolate brown — primary text, high-contrast framing, buttons
          950: '#1F1813', // Ultra-deep chocolate for modal backdrops
        },
        // Rich artisan accent browns
        artisan: {
          50: '#FAF6F0',
          100: '#F3ECE1',
          200: '#E6D9C8',
          300: '#D3C1AD', // Light brown framing borders
          400: '#BFA895', // Warm hazelnut
          500: '#A68A72', // Medium golden brown
          600: '#8C6D53', // Rich warm artisan brown
          700: '#755941', // Deep saddle brown
          800: '#4D3A2C', // Deep espresso
          900: '#2D241E', // Deep chocolate brown
          950: '#1F1813',
        },
        // Harmonious alias mapping for legacy references
        terracotta: {
          50: '#FAF6F0',
          100: '#F3ECE1',
          200: '#E6D9C8',
          500: '#A68A72',
          600: '#8C6D53',
          700: '#755941',
          800: '#4D3A2C',
          900: '#2D241E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.025em',
      },
    },
  },
  plugins: [],
};
