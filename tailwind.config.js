const { truncate } = require('fs');
const win95Colors = require('./win95Colors.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "MS-Sans-Serif": ['MS Sans Serif'],
    },
    container: {
      center: true
    },
    extend: {
      colors: win95Colors.colors
    },
  },
  plugins: [],
}
