/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FDE030",
        white: {
          DEFAULT: "#F8F5F0",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        black: "#000000",
      },
      fontFamily: {
        aldi: ['Aldi', 'system-ui', 'sans-serif'],
        thunder: ['Thunder', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};