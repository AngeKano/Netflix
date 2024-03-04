import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gotham: ["Gotham", "sans-serif"],
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(30deg)" },
          "100%": {
            transform: "rotate(20deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
