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
        // Your existing custom colors
        "book-primary": {
          DEFAULT: "var(--book-primary)",
          light: "var(--book-primary-light)",
          dark: "var(--book-primary-dark)",
        },
        "book-secondary": {
          DEFAULT: "var(--book-secondary)",
          light: "var(--book-secondary-light)",
          dark: "var(--book-secondary-dark)",
        },
        "book-light": "var(--book-light)",
        "book-dark": "var(--book-dark)",
        "book-accent": "var(--book-accent)",
        "book-paper": "var(--book-paper)",

        // New CSS variables for text colors
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        accent: "var(--text-accent)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
  darkMode: "class",
} satisfies Config;
