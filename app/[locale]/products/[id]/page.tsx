// app/(main)/products/[id]/page.tsx
import { Suspense } from "react";
import Image from "next/image";
import { FiStar, FiShare2, FiHeart } from "react-icons/fi";
import { BookDetailsSkeleton } from "@/components/ui/Skeletons";

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = {
    id: params.id,
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving - every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    price: 27.99,
    rating: 4.8,
    reviewCount: 12894,
    pages: 320,
    language: "English",
    isbn: "9780735211292",
    publishedDate: "October 16, 2018",
    publisher: "Avery",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<BookDetailsSkeleton />}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg"
              alt={`Cover of ${book.title} by ${book.author}`}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-4">by {book.author}</p>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(book.rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {book.rating.toFixed(1)} ({book.reviewCount.toLocaleString()}{" "}
                reviews)
              </span>
            </div>

            <div className="bg-book-paper p-4 rounded-lg mb-6">
              <p className="text-2xl font-bold text-book-primary mb-2">
                ${book.price.toFixed(2)}
              </p>
              <p className="text-green-600 mb-2">In Stock</p>
              <p className="text-sm text-gray-600">
                Free delivery on orders over $50
              </p>
            </div>

            <div className="flex gap-3 mb-8">
              <button className="flex-1 bg-book-primary hover:bg-book-primary-dark text-white font-bold py-3 rounded-lg transition-colors">
                Add to Cart
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-50">
                <FiHeart className="h-5 w-5" />
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-50">
                <FiShare2 className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Description</h2>
              <p className="text-gray-700">{book.description}</p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h3 className="font-medium">Publisher</h3>
                  <p className="text-gray-600">{book.publisher}</p>
                </div>
                <div>
                  <h3 className="font-medium">Publication Date</h3>
                  <p className="text-gray-600">{book.publishedDate}</p>
                </div>
                <div>
                  <h3 className="font-medium">Pages</h3>
                  <p className="text-gray-600">{book.pages}</p>
                </div>
                <div>
                  <h3 className="font-medium">Language</h3>
                  <p className="text-gray-600">{book.language}</p>
                </div>
                <div>
                  <h3 className="font-medium">ISBN-10</h3>
                  <p className="text-gray-600">{book.isbn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
