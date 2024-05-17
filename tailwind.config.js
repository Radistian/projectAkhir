/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        f1:"#1C4E2A",
        f2:"#6B7A6B",
        f3:"#FF7F00",
        f4:"#20B2AA",
        f5:"#1C4E2A",
        f6:"#21956C",
      },
      backgroundImage:{
        bg1:"url('../images/bgtesti.png')"
      }
    },
  },
  plugins: [],
}