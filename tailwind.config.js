/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      hemi: "Hemi Head",
      sfpro: "SF Pro Display Medium",
      montserrat: "Montserrat",
      lemonmilk: "LEMON MILK",
    },
    screens: {
      // => @media (min-width: 1024px) { ... }
      xxl: { max: "2300px" },
      xxl1: { min: "2000px" },
      "5xl": { max: "1780px" },
      "5.1xl": { max: "1640px" },
      "4xl": { max: "1580px" },
      "3xl": { max: "1440px" },
      "2xl": { max: "1360px" },
      xl: { max: "1260px" },
      xl1: { max: "1200px" },
      xl2: { max: "1100px" },
      xl3: { max: "1050px" },
      lg: { max: "1000px" },
      tablet: { max: "960px" },
      tablet1: { max: "900px" },
      tablet3: { max: "820px" },
      tablet2: { max: "780px" },
      "tablet2.1": { max: "760px" },
      mobile: { max: "650px" },
      mobile2: { max: "600px" },
      "mobile2.1": { max: "560px" },
      mobile1: { max: "500px" },
      "mobile1.1": { max: "400px" },
      mobilesm: { max: "350px" },
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        blackOpac: "hsla(0, 0%, 100%, .3)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(top left,rgb(138, 101, 33) 34%,black 34%), radial-gradient(center,rgb(138, 101, 33) 34%, black 34%);",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        colauto: "repeat( auto-fit, minmax(330px ,1fr) )",
      },
    },
  },
  plugins: [require("daisyui")],
});
