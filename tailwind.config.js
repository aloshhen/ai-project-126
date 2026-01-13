import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        coffee: {
          50: '#f7f3f0',
          100: '#e6d4c1',
          500: '#8B4513',
          900: '#3C1E00'
        }
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(135deg, #8B4513, #D2691E)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}