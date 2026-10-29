import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Logo Emerald Green palette (#22a344)
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22a344", // Logo primary green
          600: "#1b8537",
          700: "#16672c",
          800: "#145225",
          900: "#124420",
          950: "#052e16",
        },
        growth: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#38c35d",
          500: "#22a344",
          600: "#1b8537",
          700: "#15682b",
          800: "#125423",
          900: "#0f421c",
          950: "#052e16",
        },
        // Logo Metallic Silver / Gray palette (#b0b5b9)
        silver: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#b0b5b9", // Logo silver
          500: "#94a3b8",
          600: "#64748b",
          700: "#475569",
          800: "#334155",
          900: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Outfit", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        arabic: ["Cairo", "Segoe UI", "Tahoma", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px -3px rgba(34, 163, 68, 0.3)",
        "glow-emerald": "0 0 20px -3px rgba(34, 163, 68, 0.3)",
        "glow-card": "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 0 1px 1px rgba(176, 181, 185, 0.2)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
