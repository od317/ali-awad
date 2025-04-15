"use client";

import { FiX, FiMenu } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLogo from "./NavLogo";

const mobileLinks = [
  { name: "Browse", href: "/browse" },
  { name: "New Releases", href: "/new-releases" },
  { name: "Bestsellers", href: "/bestsellers" },
  { name: "Authors", href: "/authors" },
  { name: "Deals", href: "/deals" },
  { name: "Account", href: "/account" },
  { name: "Sign in", href: "/login" },
  { name: "Register", href: "/register" },
];

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-book-dark"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <FiMenu className="h-6 w-6" aria-hidden="true" />
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-book-light">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <NavLogo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-book-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root px-4">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {mobileLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 ${
                      pathname === item.href
                        ? "bg-book-paper text-book-primary"
                        : "text-book-dark hover:bg-book-paper"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
