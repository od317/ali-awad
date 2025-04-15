// components/commerce/navbar/NavSearch.tsx
"use client";

import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function NavSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative hidden lg:block">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search books, authors..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-book-paper placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-book-primary focus:border-book-primary sm:text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
