// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Architecture-themed colors
        "arch-primary": {
          DEFAULT: "#2A3A4A", // Dark blue-gray
          light: "#3D4E5D",
          dark: "#1A2A3A",
        },
        "arch-secondary": {
          DEFAULT: "#D4A76A", // Warm beige
          light: "#E5C28F",
          dark: "#C39550",
        },
        "arch-accent": "#7D8B99", // Cool gray
        "arch-light": "#F5F5F5", // Off-white
        "arch-dark": "#1E1E1E", // Near black
        "arch-paper": "#F8F4E8", // Paper-like background
      },
      backgroundColor: {
        primary: "var(--bg-primary, #F8F4E8)",
        secondary: "var(--bg-secondary, #FFFFFF)",
      },
      textColor: {
        primary: "var(--text-primary, #1E1E1E)",
        secondary: "var(--text-secondary, #2A3A4A)",
        accent: "var(--text-accent, #7D8B99)",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
  darkMode: "class",
} satisfies Config;
