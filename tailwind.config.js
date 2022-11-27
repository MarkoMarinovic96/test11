/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {keyframes: {
      nadesno: {
        '100%': { right: '0px' },
      }
    },
  },
  plugins: [],
}
}