import Image from "next/image";
import Link from "next/link";
import { FiStar } from "react-icons/fi";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  rating: number;
  href: string;
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group">
      <Link href={book.href} className="block">
        <div className="aspect-[3/4] relative bg-gray-100 rounded-lg overflow-hidden mb-3">
          <Image
            src={book.coverImage}
            alt={`Cover of ${book.title} by ${book.author}`}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity"
          />
        </div>
        <h3 className="font-medium text-lg mb-1 group-hover:text-book-primary transition-colors">
          {book.title}
        </h3>
        <p className="text-gray-600 mb-2">{book.author}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiStar className="text-yellow-500 mr-1" />
            <span>{book.rating}</span>
          </div>
          <span className="font-bold">${book.price.toFixed(2)}</span>
        </div>
      </Link>
    </div>
  );
}
