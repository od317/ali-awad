import Link from "next/link";
import { FaHeartBroken } from "react-icons/fa";

export default function EmptyWishlist() {
  return (
    <div className="text-center py-16 text-primary">
      <FaHeartBroken size={48} className="mx-auto mb-4 text-gray-400" />
      <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Looks like you haven’t added anything yet.
      </p>
      <Link href="/" className="text-book-primary font-medium hover:underline">
        Browse Books
      </Link>
    </div>
  );
}
