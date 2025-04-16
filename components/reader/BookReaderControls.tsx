"use client";

import { FiBookmark, FiSettings, FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";

interface BookReaderControlsProps {
  currentPage: number;
  totalPages: number;
  bookId: string;
}

export default function BookReaderControls({
  currentPage,
  totalPages,
  bookId,
}: BookReaderControlsProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  const [showSettings, setShowSettings] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    // You would apply this to the reading content
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
        aria-label="Bookmark"
      >
        <FiBookmark className="h-5 w-5" />
      </button>

      <div className="relative">
        <button
          className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
          onClick={() => setShowSettings(!showSettings)}
          aria-label="Settings"
        >
          <FiSettings className="h-5 w-5" />
        </button>

        {showSettings && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 text-black p-2">
            <div className="flex items-center justify-between p-2">
              <span>Dark Mode</span>
              <button
                onClick={toggleDarkMode}
                className="p-1 rounded-full bg-gray-200"
              >
                {darkMode ? (
                  <FiSun className="h-4 w-4" />
                ) : (
                  <FiMoon className="h-4 w-4" />
                )}
              </button>
            </div>
            <div className="p-2">
              <label className="block mb-1">Font Size</label>
              <div className="flex gap-2">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => changeFontSize(size)}
                    className={`px-2 py-1 rounded text-sm ${
                      fontSize === size
                        ? "bg-book-primary text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-sm hidden sm:block">
        {currentPage}/{totalPages}
      </div>
    </div>
  );
}
