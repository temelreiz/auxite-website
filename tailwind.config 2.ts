import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E4BC',
          dark: '#B8960C',
        },
        navy: {
          DEFAULT: '#0A0F1C',
          light: '#141B2D',
          lighter: '#1E2A45',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
