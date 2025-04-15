"use client";

import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import CartModal from "../cart/CartModal";

export default function NavCart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // In a real app, you would get this from your cart state
  const itemCount = 2;

  return (
    <>
      <button
        onClick={() => setIsCartOpen(true)}
        className="group -m-2 p-2 flex items-center"
        aria-label="Open cart"
      >
        <FiShoppingBag
          className="flex-shrink-0 h-6 w-6 text-book-dark group-hover:text-book-primary"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-book-dark group-hover:text-book-primary">
          {itemCount}
        </span>
      </button>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
