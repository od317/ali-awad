import Link from "next/link";
import BookCard from "../books/BookCard";

const newReleases = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.5,
    href: "/products/atomic-habits",
  },
  {
    id: "12",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.5,
    href: "/products/atomic-habits",
  },
  {
    id: "13",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.5,
    href: "/products/atomic-habits",
  },
  {
    id: "14",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.5,
    href: "/products/atomic-habits",
  },
  // Add 3-4 more books
];

export default function NewReleases() {
  return (
    <section className="container mx-auto px-4 py-12 ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl text-primary font-bold">New Releases</h2>
        <Link href="/new-releases" className="text-primary hover:underline">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newReleases.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
