/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFDF7',
          100: '#FFF9E6',
          200: '#FFEAA0',
          300: '#FFD700',
          400: '#D4AF37',
          500: '#B8860B',
          600: '#9A7209',
          700: '#7B5804',
          800: '#5D4200',
          900: '#3E2C00',
        },
        cream: {
          50: '#FEFEFE',
          100: '#F5F5DC',
          200: '#F0F0C8',
          300: '#EBEBB4',
          400: '#E6E6A0',
          500: '#E1E18C',
          600: '#DCDC78',
          700: '#D7D764',
          800: '#D2D250',
          900: '#CDCD3C',
        },
        brown: {
          50: '#FAF7F5',
          100: '#F5EFEB',
          200: '#E8D5CC',
          300: '#DBBCAD',
          400: '#CE9E8E',
          500: '#C18870',
          600: '#A0714F',
          700: '#8B4513',
          800: '#6B3610',
          900: '#4B270C',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};