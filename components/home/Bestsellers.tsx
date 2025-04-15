// components/home/Bestsellers.tsx
import BookCard from "@/components/books/BookCard";
import Link from "next/link";

const bestsellers = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    price: 27.99,
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.8,
    href: "/books/atomic-habits",
  },  {
    id: "11",
    title: "Atomic Habits",
    author: "James Clear",
    price: 27.99,
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.8,
    href: "/books/atomic-habits",
  },  {
    id: "12",
    title: "Atomic Habits",
    author: "James Clear",
    price: 27.99,
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.8,
    href: "/books/atomic-habits",
  },  {
    id: "14",
    title: "Atomic Habits",
    author: "James Clear",
    price: 27.99,
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.8,
    href: "/books/atomic-habits",
  },
  // Add 3-4 more books 
];

export default function Bestsellers() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Bestsellers</h2>
        <Link href="/bestsellers" className="text-book-primary hover:underline">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestsellers.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
