import Link from "next/link";

type WishlistItem = {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  href: string;
};

export default function WishlistGrid({ items }: { items: WishlistItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((book) => (
        <Link
          href={book.href}
          key={book.id}
          className="group bg-white dark:bg-book-dark rounded-lg shadow-sm hover:shadow-md transition"
        >
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-primary font-semibold group-hover:underline">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              by {book.author}
            </p>
            <p className="mt-2 font-medium text-book-primary">${book.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
