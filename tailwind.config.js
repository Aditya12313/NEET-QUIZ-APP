/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#faf8f5',
        ink: '#1c1a17',
        muted: '#6b6459',
        rule: '#e2ddd7',
        accent: '#3b5a8a',
      },
    },
  },
  plugins: [],
}
