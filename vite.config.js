/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      work: ["Work Sans", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
      opensans: ["Open Sans", "sans - serif"],
    },
    colors: {
      "dark-green": "#1AA090",
      "just-white": "#fff",
      "dark-teal": "rgba(9, 22, 56, 1)",
      "light-grey": "rgba(243, 243, 250, 1)",
      "border-grey": "rgba(180, 190, 200, 1)",
      "lighter-green": "rgba(26, 160, 144, 1)",
      "grey-light-100": "#F3F3FA",
      "light-blue": "#DEE7FF",
      typography: "#091638",
      "light-blue-100": "#F3F3FF",
      "border-grey-dark": "#555E68",
    },
    extend: {
      gridTemplateColumns: {
        grid: "repeat(auto-fit, minmax(297px, 1fr))",
      },
      screens: {
        lw: "1440px",
      },
    },
  },
  plugins: [require("daisyui", "tw-elements/dist/plugin")],
}
