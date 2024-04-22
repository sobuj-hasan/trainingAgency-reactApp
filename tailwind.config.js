/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': "#000",
        'white': "#fff",
        'primary': "#010851",
        'secondary': "#9A7AF1",
        'tartiary': "#707070",
      }
    },
  },
  plugins: [],
}

