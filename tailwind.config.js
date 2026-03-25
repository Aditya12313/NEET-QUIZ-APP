/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        calm: '0 14px 40px rgba(91, 70, 128, 0.12)',
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        floatIn: 'floatIn 0.55s ease-out',
      },
    },
  },
  plugins: [],
}

