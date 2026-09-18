/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06080C',
          900: '#0B0E14',
          850: '#10141C',
          800: '#141A24',
          700: '#1D2433',
          600: '#2A3449',
        },
        primary: {
          DEFAULT: '#FF4742',
          hover: '#FF5E59',
          glow: 'rgba(255, 71, 66, 0.4)',
        },
        accent: {
          orange: '#FF7700',
          amber: '#FFAA00',
          crimson: '#E60026',
          gold: '#F59E0B',
          cyan: '#00E5FF',
        },
        nitkkr: {
          DEFAULT: '#0088FF',
          glow: 'rgba(0, 136, 255, 0.35)',
          dark: '#0055A5',
        },
        nitj: {
          DEFAULT: '#FF3333',
          glow: 'rgba(255, 51, 51, 0.35)',
          dark: '#B31414',
        }
      },
      fontFamily: {
        heading: ['"Chakra Petch"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(255, 71, 66, 0.15) 0%, rgba(11, 14, 20, 0) 70%)',
        'dual-glow': 'radial-gradient(circle at 20% 30%, rgba(0, 136, 255, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255, 51, 51, 0.12) 0%, transparent 50%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
