import EmptyWishlist from "@/components/wishlist/EmptyWishlist";
import WishlistGrid from "@/components/wishlist/WishlistGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist - BookHaven",
  description: "Browse and manage your saved books.",
};

export default function WishlistPage() {
  const wishlistItems = [
    {
      id: "1",
      title: "Deep Work",
      author: "Cal Newport",
      price: 19.99,
      coverImage:
        "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
      href: "/products/deep-work",
    },
    {
      id: "2",
      title: "The Power of Now",
      author: "Eckhart Tolle",
      price: 16.99,
      coverImage:
        "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
      href: "/products/power-of-now",
    },
    // Add more or fetch dynamically
  ];

  const hasItems = wishlistItems.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">My Wishlist</h1>

        {hasItems ? <WishlistGrid items={wishlistItems} /> : <EmptyWishlist />}
      </div>
    </div>
  );
}
