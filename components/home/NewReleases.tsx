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
    href: "/books/the-midnight-library",
  },  {
    id: "12",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.5,
    href: "/books/the-midnight-library",
  },  {
    id: "13",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.5,
    href: "/books/the-midnight-library",
  },  {
    id: "14",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    rating: 4.5,
    href: "/books/the-midnight-library",
  },
  // Add 3-4 more books
];

export default function NewReleases() {
  return (
    <section className="container mx-auto px-4 py-12 bg-book-paper">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">New Releases</h2>
        <Link
          href="/new-releases"
          className="text-book-primary hover:underline"
        >
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
