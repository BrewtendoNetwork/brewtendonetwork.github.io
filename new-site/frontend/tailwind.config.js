/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#FFD000',
          'gold-light': '#FFE066',
          'gold-dark': '#C49000',
          pink: '#E8789C',
          'pink-light': '#F09AB5',
        },
        surface: {
          base: '#0c0c14',
          1: '#14142a',
          2: '#1c1c36',
          3: '#252545',
          4: '#2e2e52',
        },
      },
      fontFamily: {
        display: ['MarvelouzTubeFont3', 'sans-serif'],
        body: ['RodinNTLG', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'fade-in-up-1': 'fadeInUp 0.4s ease-out 0.1s both',
        'fade-in-up-2': 'fadeInUp 0.4s ease-out 0.2s both',
        'fade-in-up-3': 'fadeInUp 0.4s ease-out 0.3s both',
        'icon-pop': 'iconPop 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        iconPop: {
          from: { opacity: '0', transform: 'scale(0.8)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
