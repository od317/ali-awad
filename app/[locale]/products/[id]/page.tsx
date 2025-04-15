import RelatedBooks from "@/components/books/RelatedBooks";
import ReviewList from "@/components/books/ReviewList";
import AddToCartButton from "@/components/commerce/cart/AddToCartButton";
import Image from "next/image";
import { FiStar, FiShare2, FiHeart } from "react-icons/fi";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
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
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Book Cover */}
        <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg bg-book-paper">
          <Image
            src={book.coverImage}
            alt={`Cover of ${book.title} by ${book.author}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Book Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-primary">{book.title}</h1>
            <p className="text-xl text-secondary">by {book.author}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(book.rating)
                      ? "text-book-accent fill-book-accent"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-secondary">
              {book.rating.toFixed(1)} ({book.reviewCount.toLocaleString()}{" "}
              reviews)
            </span>
          </div>

          {/* Price Section */}
          <div className="p-4 rounded-lg bg-book-paper dark:bg-book-dark border border-book-primary/20">
            <p className="text-2xl font-bold text-book-primary">
              {book.price.toFixed(2)}
            </p>
            <p className="text-book-secondary">In Stock</p>
            <p className="text-sm text-secondary">
              Free delivery on orders over $50
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <AddToCartButton
              productId={book.id}
              className="flex-1 bg-book-primary hover:bg-book-primary-dark text-book-light"
            />
            <button className="p-3 border border-secondary rounded-lg hover:bg-book-paper dark:hover:bg-book-dark">
              <FiHeart className="h-5 w-5 text-secondary" />
            </button>
            <button className="p-3 border border-secondary rounded-lg hover:bg-book-paper dark:hover:bg-book-dark">
              <FiShare2 className="h-5 w-5 text-secondary" />
            </button>
          </div>

          {/* Description */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-bold text-primary">Description</h2>
            <p className="text-secondary">{book.description}</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <DetailItem label="Publisher" value={book.publisher} />
            <DetailItem label="Publication Date" value={book.publishedDate} />
            <DetailItem label="Pages" value={book.pages.toString()} />
            <DetailItem label="Language" value={book.language} />
            <DetailItem label="ISBN-10" value={book.isbn} />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Customer Reviews
        </h2>
        <ReviewList bookId={book.id} />
      </section>

      {/* Related Books */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          You May Also Like
        </h2>
        <RelatedBooks currentBookId={book.id} />
      </section>
    </div>
  );
}

// Reusable Detail Item Component
function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="font-medium text-primary">{label}</h3>
      <p className="text-secondary">{value}</p>
    </div>
  );
}
