// components/commerce/Footer.tsx
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoodreads,
} from "react-icons/fa";

export default function Footer() {
  const links = [
    {
      title: "Shop",
      items: [
        { name: "All Books", href: "/books" },
        { name: "New Releases", href: "/new-releases" },
        { name: "Bestsellers", href: "/bestsellers" },
        { name: "Deals", href: "/deals" },
      ],
    },
    {
      title: "About",
      items: [
        { name: "Our Story", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Help",
      items: [
        { name: "FAQ", href: "/faq" },
        { name: "Shipping", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="bg-book-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {links.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <Link href="#" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-book-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaTwitter className="text-2xl hover:text-book-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-book-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Goodreads">
                <FaGoodreads className="text-2xl hover:text-book-primary transition-colors" />
              </Link>
            </div>
            <p className="text-gray-300">
              Sign up for our newsletter to receive updates and exclusive
              offers.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BookHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
