/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        main: "#dd68ac",
        light: "#e077b4",
        dark: "#c75e9b",
      },
      secondary: {
        main: "#191d25",
        light: "#3d4463",
        dark: "#232a4a",
      },
      action: {
        disabledBackground: "#a7a7a7",
        disabled: "#000",
      },
    },
    extend: {},
  },
  plugins: [],
};
