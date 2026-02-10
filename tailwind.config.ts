import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // ═══════════════════════════════════════════════════════════
        // AUXITE GLOBAL — INSTITUTIONAL DESIGN SYSTEM
        // "Quiet Authority" — Bağırmayan güç
        // ═══════════════════════════════════════════════════════════

        // PRIMARY: Midnight Navy
        midnight: {
          DEFAULT: "#0B0F1A",
          50: "#1a2035",
          100: "#151b2d",
          200: "#111725",
          300: "#0d131d",
          400: "#090f15",
          500: "#0B0F1A",
          600: "#080c14",
          700: "#06090f",
          800: "#04060a",
          900: "#020305",
        },

        // ACCENT: Matte Gold
        gold: {
          DEFAULT: "#C6A15B",
          50: "#f7f3e8",
          100: "#efe7d1",
          200: "#e0cfa3",
          300: "#d4b87a",
          400: "#C6A15B",
          500: "#b8944e",
          600: "#a58341",
          700: "#8c6f37",
          800: "#735b2d",
          900: "#5a4723",
        },

        // SECONDARY: Deep Emerald
        emerald: {
          DEFAULT: "#134E4A",
          50: "#0d3532",
          100: "#0f3d3a",
          200: "#114542",
          300: "#134E4A",
          400: "#155752",
          500: "#17605a",
          600: "#196962",
          700: "#1b726a",
          800: "#1d7b72",
          900: "#1f847a",
        },

        // NEUTRAL
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },

        // TEXT SYSTEM
        text: {
          primary: "#F5F7FA",
          secondary: "#94A3B8",
          muted: "#64748B",
          faint: "#475569",
        },

        // BORDER
        border: {
          DEFAULT: "#1E293B",
          light: "#334155",
          dark: "#0F172A",
        },
      },

      fontFamily: {
        // Headline: Elite, timeless feel
        display: ["'Playfair Display'", "Georgia", "serif"],
        // Body: Clean, institutional
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Institutional scale
        "hero": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h2": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h4": ["1.5rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "small": ["0.875rem", { lineHeight: "1.6" }],
        "xs": ["0.75rem", { lineHeight: "1.5" }],
      },

      spacing: {
        // Section spacing: 120-160px
        "section": "8rem",
        "section-lg": "10rem",
        "section-xl": "12rem",
      },

      maxWidth: {
        // Container: 1280-1440px
        "container": "1280px",
        "container-lg": "1440px",
        "content": "720px",
      },

      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "2xl": "24px",
      },

      boxShadow: {
        "soft": "0 4px 20px rgba(0, 0, 0, 0.15)",
        "institutional": "0 8px 40px rgba(0, 0, 0, 0.25)",
        "gold": "0 4px 20px rgba(198, 161, 91, 0.15)",
      },

      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.8s ease-out",
        "slow-pulse": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },

      transitionTimingFunction: {
        "institutional": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
