/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-ribbon": {
          50: "#edf6ff",
          100: "#d7eaff",
          200: "#b9dcff",
          300: "#88c7ff",
          400: "#50a8ff",
          500: "#2883ff",
          600: "#1162ff",
          700: "#0a4beb",
          800: "#0f3dbe",
          900: "#133995",
          950: "#11245a",
        },
      },
      
    },
  },
  plugins: [],
};
