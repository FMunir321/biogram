/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Kapakana: ['Kapakana', 'serif'],
      },
    },
  },
  safelist: [
    'font-poppins',
    'font-kalpurush'
  ],
  plugins: [require("tailwindcss-animate")],
} 