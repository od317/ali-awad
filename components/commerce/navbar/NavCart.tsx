// components/commerce/navbar/NavCart.tsx
"use client";

import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";

export default function NavCart() {
  // In a real app, you would get this from your cart state
  const itemCount = 0;

  return (
    <Link href="/cart" className="group -m-2 p-2 flex items-center">
      <FiShoppingBag
        className="flex-shrink-0 h-6 w-6 text-book-dark group-hover:text-book-primary"
        aria-hidden="true"
      />
      <span className="ml-2 text-sm font-medium text-book-dark group-hover:text-book-primary">
        {itemCount}
      </span>
      <span className="sr-only">items in cart, view cart</span>
    </Link>
  );
}
