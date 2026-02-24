/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#15173D",
        primary: "#982598",
        secondary: "#E491C9",
        light: "#F1E9E9",
      },
      boxShadow: {
        glow: "0 0 40px rgba(152,37,152,0.35)",
      },
    },
  },
  plugins: [],
};