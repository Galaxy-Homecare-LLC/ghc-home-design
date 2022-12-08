/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F182A",
        secondary: "#1E293B",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        lg: "1000px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
