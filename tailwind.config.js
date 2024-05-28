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
        f7:"#FFBE04",
        f8:"#66CF8A",
        f9:"#8FBC8F",
      },
      backgroundImage:{
        bg1:"url('../images/bgtesti.png')",
        bgJus:"url('../images/bgJus.png')",
        bgProduk:"url('../images/bgProduk.png')",
      }
    },
  },
  plugins: [],
}