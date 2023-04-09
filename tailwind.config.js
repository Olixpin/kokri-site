/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#0098da",
      white: "#fff",
      black: "#000",
      text: "#5f5f5f",
      secondary: "#61dafb",
      "input-border": "#cbd6e2",
      "input-border-focus": "#b6b6b6",
      readmore: "#e5e6e0",
      tertiary: "#ff6464",
    },
  },
  plugins: [],
}
