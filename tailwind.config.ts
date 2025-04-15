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
        "book-primary": {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          dark: "#4338CA",
        },
        "book-secondary": {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        "book-light": "#F9FAFB",
        "book-dark": "#1F2937",
        "book-accent": "#F59E0B",
        "book-paper": "#F3F4F6",
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl"), // Ensure this is properly installed
  ],
  darkMode: "class",
} satisfies Config;
