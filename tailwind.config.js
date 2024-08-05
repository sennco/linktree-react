/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
          smoke: "#F5F5F5",
          transp:"rgba(245, 245, 245, 0.1);",
          border:"rgba(245, 245, 245, 0.3);",
      },
    },
  },
  plugins: [],
};
