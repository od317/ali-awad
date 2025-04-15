// app/(main)/products/page.tsx
import { Suspense } from "react";
import BookCard from "@/components/books/BookCard";
import { BookCardSkeleton } from "@/components/ui/Skeletons";
import FilterSidebar from "@/components/commerce/FilterSidebar";

const books = Array(12).fill({
  id: "1",
  title: "Atomic Habits",
  author: "James Clear",
  price: 27.99,
  rating: 4.8,
  href: "/products/atomic-habits",
});

export default function ProductListingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Books</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <FilterSidebar />
        </div>

        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing 1-12 of 120 books</p>
            <select className="border rounded px-3 py-1">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Avg. Customer Review</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <Suspense
              fallback={
                <>
                  {Array(12)
                    .fill(0)
                    .map((_, i) => (
                      <BookCardSkeleton key={i} />
                    ))}
                </>
              }
            >
              {books.map((book, index) => (
                <BookCard
                  key={`${book.id}-${index}`}
                  book={{
                    ...book,
                    coverImage:
                      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
                  }}
                />
              ))}
            </Suspense>
          </div>

          <div className="flex justify-center mt-8">
            <nav className="flex gap-1">
              <button className="px-3 py-1 border rounded">1</button>
              <button className="px-3 py-1 border rounded bg-book-primary text-white">
                2
              </button>
              <button className="px-3 py-1 border rounded">3</button>
              <span className="px-3 py-1">...</span>
              <button className="px-3 py-1 border rounded">10</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
