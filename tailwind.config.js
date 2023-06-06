/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1440px",
        wide: "1500px",
      },
      backgroundImage: {
        desktop: "url('./assets/website.png')",
        mobile: "url('./assets/mobile.png')",
      },
      backgroundColor: {
        primary: "#f1e6df",
        secondary: "#74cbc4",
        hover: "#cf7823",
        "black-primary": "#0a0b0b",
      },
      colors: {
        primary: "#eae7e1",
        secondary: "#74cbc4",
        "black-primary": "#0a0b0b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        vina: ["Vina Sans", "cursive"],
        shellhead: ["shellhead", "sans-serif"],
      },
      maxWidth: {
        desktop: "1440px",
      },
      fontSize: {
        "10xl": "9rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utils = {
        ".bg-hero": {
          "background-image": "url(/assets/hero.png)",
        },
      };
      addUtilities(utils);
    }),
  ],
};
