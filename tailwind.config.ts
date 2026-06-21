import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#1A2B1C",
        greenSoft: "#24382a",
        sage: "#6E8F6F",
        sageD: "#5c7c5d",
        terra: "#BF6A4A",
        terraD: "#a9583a",
        cream: "#F7F2EA",
        creamD: "#efe7d9",
        ink: "#26271f",
        muted: "#6b6358",
        line: "#e6ddcf",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Hanken Grotesk", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(26,43,28,.04), 0 8px 24px -16px rgba(26,43,28,.18)",
      },
    },
  },
  plugins: [],
};

export default config;
