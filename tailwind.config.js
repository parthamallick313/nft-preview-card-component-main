/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "425px",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
