/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        colorBlack: "#16161A",
        colorGreen: "#43B028",
        fromColorTag: "#43B028",
        toColorTag: "#FBCE2E",
      },
      height: {
        swiperHeight: "30rem !important",
      },
    },
  },
  plugins: [],
};
