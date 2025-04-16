"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export default function AccountNav() {
  const pathname = usePathname();

  const links = [
    { name: "Account Overview", href: "/account" },
    { name: "Orders", href: "/account/orders" },
    { name: "Wishlist", href: "/account/wishlist" },
    { name: "Addresses", href: "/account/addresses" },
    { name: "Payment Methods", href: "/account/payments" },
    { name: "Settings", href: "/account/settings" },
  ];

  return (
    <nav className="space-y-1">
      {links.map((link) => {
        const isActive = pathname.endsWith(link.href);
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`block px-4 py-2 rounded-md font-medium transition-colors ${
              isActive
                ? "bg-book-paper dark:bg-book-dark text-primary font-semibold"
                : "text-primary hover:bg-book-paper dark:hover:bg-book-dark"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
