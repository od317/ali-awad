import Link from "next/link";

export default function ContinueShopping() {
  return (
    <div className="mt-4 text-center">
      <Link
        href="/products"
        className="text-book-primary hover:text-book-primary-dark font-medium"
      >
        ← Continue Shopping
      </Link>
    </div>
  );
}
