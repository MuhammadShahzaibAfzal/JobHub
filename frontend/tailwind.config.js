/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4377b3",
        primaryHover: "#4ab3f4",
      },
    },
  },
  plugins: [],
};
