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
          "0%  100%": { transform: "rotate(30deg)", backgroundColor: "green" },
          "20%": {
            transform: "rotate(20deg)",
            backgroundImage:
              "http://s3.amazonaws.com/massrel-viz-assets/production/15474/02.jpg?1377296589",
          },
          "50%": { transform: "rotate(30deg)", backgroundColor: "#5DC6D4" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
