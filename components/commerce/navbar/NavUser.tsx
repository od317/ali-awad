// components/commerce/navbar/NavUser.tsx
"use client";

import { FiUser } from "react-icons/fi";
import Link from "next/link";

export default function NavUser() {
  // In a real app, you would check authentication state here
  const isAuthenticated = false;

  return (
    <div className="flex items-center">
      {isAuthenticated ? (
        <Link href="/account" className="p-2 rounded-full hover:bg-book-paper">
          <FiUser className="h-5 w-5 text-book-dark" />
        </Link>
      ) : (
        <div className="flex gap-2">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-book-primary hover:bg-book-paper"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="hidden sm:inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded bg-book-primary text-white hover:bg-book-primary-dark"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
