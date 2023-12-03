/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        testFont: ["Big Shoulders Display"],
        lexenddeca: ["Lexend Deca"],
      },
    },
  },
  plugins: [],
};
