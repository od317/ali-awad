"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "Browse", href: "/browse" },
  { name: "Books", href: "/products" },
  { name: "New Releases", href: "/new-releases" },
  { name: "Bestsellers", href: "/bestsellers" },
  { name: "Authors", href: "/authors" },
  { name: "Deals", href: "/deals" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-sm font-medium transition-colors hover:text-book-primary ${
            pathname === link.href ? "text-book-primary" : "text-book-dark"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
