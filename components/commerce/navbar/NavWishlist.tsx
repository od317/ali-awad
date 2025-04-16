"use client";

import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function NavWishlist() {
  const wishlistCount = 2; // Replace with dynamic data if available

  return (
    <Link
      href="/account/wishlist"
      className="relative text-primary hover:text-book-primary transition"
      aria-label="Wishlist"
    >
      <FaHeart className="text-xl" />

      {wishlistCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-book-primary text-white text-xs rounded-full px-1.5 py-0.5">
          {wishlistCount}
        </span>
      )}
    </Link>
  );
}
