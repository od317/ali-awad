"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "Browse", href: "/browse" },
  { name: "Books", href: "/products" },
  { name: "Authors", href: "/authors" },
  { name: "New Releases", href: "/new-releases" },
  { name: "Bestsellers", href: "/bestsellers" },
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
          className={`text-sm font-medium transition-colors text-primary ${
            pathname === link.href ? "text-primary" : "text-dark"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
