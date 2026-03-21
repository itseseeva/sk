/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          500: '#00a698', // приближенный к skyscanner "teal/blue" цвет для брендинга
          600: '#009084',
        },
        primary: {
          DEFAULT: '#0770e3', // Classic Skyscanner Blue
          hover: '#0452a8',
        },
        secondary: {
          DEFAULT: '#00a698',
        },
        background: '#f1f2f8'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
