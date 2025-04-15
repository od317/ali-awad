import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

export default function EmptyOrders() {
  return (
    <div className="text-center py-12">
      <FiBookOpen className="mx-auto h-12 w-12 text-secondary" />
      <h2 className="mt-2 text-lg font-medium text-primary">No orders yet</h2>
      <p className="mt-1 text-secondary">
        When you place an order, it will appear here.
      </p>
      <div className="mt-6">
        <Link
          href="/products"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-book-primary hover:bg-book-primary-dark"
        >
          Browse Books
        </Link>
      </div>
    </div>
  );
}
