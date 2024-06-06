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
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}