import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E3B",
          950: "#050B16",
          900: "#0A1628",
          800: "#0B1E3B",
          700: "#122A52",
          600: "#1B3A6B",
          500: "#254A82",
        },
        graphite: {
          DEFAULT: "#2A2E35",
          900: "#14161A",
          800: "#1E2127",
          700: "#2A2E35",
          600: "#3A3F47",
          500: "#4B5058",
        },
        gold: {
          DEFAULT: "#B8965A",
          300: "#E4CE9E",
          400: "#D4B37C",
          500: "#B8965A",
          600: "#96773F",
          700: "#785D30",
        },
        offwhite: {
          DEFAULT: "#F7F5F0",
          100: "#FCFBF8",
          200: "#F7F5F0",
          300: "#EEEAE1",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(184,150,90,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,90,0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(184,150,90,0.35)",
        premium: "0 20px 60px -20px rgba(5,11,22,0.45)",
      },
      keyframes: {
        "pulse-node": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-200" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 3s ease-in-out infinite",
        "dash-flow": "dash-flow 8s linear infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
