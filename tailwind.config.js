/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0D0D0D",
          soft: "#1A1A1A",
          muted: "#2E2E2E",
        },
        slate: {
          light: "#F5F5F0",
          mid: "#E8E8E2",
        },
        accent: {
          DEFAULT: "#00C896",
          dark: "#00A67A",
          glow: "rgba(0, 200, 150, 0.15)",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
