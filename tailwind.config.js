/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tt: ["TT Commons", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
};
