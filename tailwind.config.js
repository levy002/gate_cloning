/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-b": "#d5d5d5",
        "dark-gray-b": "#333333",
        "-primary-c": "#1b1b1b",
        "dark-yellow": "#a18a4d"
      },
      backgroundImage: {
        "we-bg": "url('./assests/we-are-bg.png')",
        "ft-bg": "url('./assests/footer-bg.png')"
      }
    },
  },
  plugins: [],
}