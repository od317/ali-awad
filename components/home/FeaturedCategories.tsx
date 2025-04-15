// components/home/FeaturedCategories.tsx
import Link from "next/link";
import { FaBookOpen, FaChild, FaHistory, FaFlask } from "react-icons/fa";

const categories = [
  { name: "Fiction", icon: <FaBookOpen />, href: "/categories/fiction" },
  { name: "Children", icon: <FaChild />, href: "/categories/children" },
  { name: "History", icon: <FaHistory />, href: "/categories/history" },
  { name: "Science", icon: <FaFlask />, href: "/categories/science" },
];

export default function FeaturedCategories() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center p-6 bg-book-paper rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-white"
          >
            <span className="text-3xl text-book-primary mb-3">
              {category.icon}
            </span>
            <h3 className="text-lg font-medium text-center">{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
