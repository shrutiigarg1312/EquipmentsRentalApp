/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "app/index.jsx",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#0077C0", // Blue
      black: "#212121", // Black
      white: "#FAFAFA", // White
      gray: "#E5E4E2",
      darkgray: "#D3D3D3",
    },
    extend: {},
  },
  plugins: [],
};
