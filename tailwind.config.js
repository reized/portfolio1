/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#000428',
        secondary: '#839B97',
        accent: '#85EBD9',
        gradient: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

