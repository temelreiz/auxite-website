import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Core (Institutional Dark)
        bg: {
          DEFAULT: "#0B0E11",
          1: "#141821",
          2: "#1B2130",
          3: "#232A3A",
        },
        line: {
          DEFAULT: "#2A2F3A",
          soft: "#1E2431",
        },
        text: {
          DEFAULT: "#F5F7FA",
          muted: "#8B90A0",
          faint: "#6E7485",
        },
        // Auxite Gold Accent
        aux: {
          gold: "#C9A24D",
          goldSoft: "#E6D39A",
          goldDeep: "#A67C2A",
        },
        // System States
        state: {
          success: "#3BE58C",
          warning: "#F7C948",
          danger: "#FF5C5C",
          info: "#4DA3FF",
        },
        // Metal accents (for metal pages only)
        metal: {
          gold: "#C9A24D",
          silver: "#C7CCD6",
          platinum: "#BFC6C9",
          palladium: "#A8B2B8",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
