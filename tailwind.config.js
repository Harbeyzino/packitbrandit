/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f3fb',
          100: '#cce7f6',
          200: '#99d0ee',
          300: '#66b8e5',
          400: '#33a1dd',
          500: '#00a0e3', // Dabi brand blue
          600: '#0080b6',
          700: '#006089',
          800: '#00405c',
          900: '#00202e',
        },
        amber: {
          50: '#faf6e6',
          100: '#f5eccc',
          200: '#ead999',
          300: '#e0c766',
          400: '#d5b433',
          500: '#d4af37', // Dabi brand gold
          600: '#a98c2c',
          700: '#7f6921',
          800: '#544616',
          900: '#2a230b',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};