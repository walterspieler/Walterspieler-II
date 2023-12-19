/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "matt-green": "#43ea80",
        "matt-orange": "#fa6b26",
      },
    },
  },
  plugins: [],
};
