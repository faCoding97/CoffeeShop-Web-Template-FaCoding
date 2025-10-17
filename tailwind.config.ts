import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#f8f3f0",
          100: "#f0e6e0",
          200: "#e2cdc1",
          300: "#d0b39e",
          400: "#b88479",
          500: "#9a5f4e",
          600: "#7c4634",
          700: "#663929",
          800: "#4a281c",
          900: "#2e190f",
          950: "#1c100a",
        },
        latte: {
          100: "#FAEAD8",
          200: "#F3D9BD",
          300: "#E8C49B",
          400: "#D7A975",
          500: "#C88F55",
        },
        accent: {
          400: "#ff7a32",
          500: "#ff6a18",
          600: "#e25804",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('/images/hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
