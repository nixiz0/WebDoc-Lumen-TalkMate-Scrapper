/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#1d3461',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
