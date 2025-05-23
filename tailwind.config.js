/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#121218',
          700: '#1a1a22',
          600: '#2d2d3d',
        },
        accent: {
          500: '#00ADB5',
          600: '#009299',
          700: '#007F86',
        },
        light: {
          100: '#EEEEEE',
          200: '#E1E1E1',
          300: '#CCCCCC',
        },
        skill: {
          programming: {
            light: '#4C1D95',
            DEFAULT: '#6D28D9',
            dark: '#7C3AED'
          },
          visualization: {
            light: '#047857',
            DEFAULT: '#059669',
            dark: '#10B981'
          },
          cloud: {
            light: '#1E40AF',
            DEFAULT: '#2563EB',
            dark: '#3B82F6'
          },
          analytics: {
            light: '#9D174D',
            DEFAULT: '#BE185D',
            dark: '#DB2777'
          }
        },
        gradient: {
          start: '#4C1D95',
          middle: '#2563EB',
          end: '#059669'
        },
        'brown': {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          950: '#28201d',
        },
        'light': {
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
        },
        'gradient-start': '#f59e0b',
        'gradient-middle': '#d97706',
        'gradient-end': '#92400e',
      },
      height: {
        'screen-90': '90vh',
      },
      keyframes: {
        slideRight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: 0.5, filter: 'brightness(100%)' },
          '100%': { opacity: 1, filter: 'brightness(120%)' },
        },
      },
      animation: {
        slideRight: 'slideRight 1.5s ease-out',
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        scaleIn: 'scaleIn 0.5s ease-out',
        gradient: 'gradient 8s ease infinite',
        'gradient-slow': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(245, 158, 11, 0.5)',
      },
    },
  },
  plugins: [],
} 