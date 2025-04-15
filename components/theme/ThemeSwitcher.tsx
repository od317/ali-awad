// components/theme/ThemeSwitcher.tsx
"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Only run on client after hydration
    const storedTheme =
      localStorage.getItem("theme") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update DOM and storage
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);

    // Optional: Send to server to set cookie
    fetch("/api/theme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme: newTheme }),
    });
  };

  if (theme === null) {
    // Render a neutral button during SSR and initial hydration
    return (
      <button className="rounded mx-[4%] w-[30px] h-[30px]">
        <div className="w-full h-full"></div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded mx-[4%]"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FiMoon className="h-5 w-5" />
      ) : (
        <FiSun className="h-5 w-5" />
      )}
    </button>
  );
}
