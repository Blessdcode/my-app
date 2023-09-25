/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00296D",
        secondary: "#2977D5",
        Accent_Color: "#44C6E9",
        Dark_Black: "#252525",
        Light_Color: "#D4E4F4",
        Grey_Color: "#666666",
        white: "#FFF9FD",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Source Sans 3", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
