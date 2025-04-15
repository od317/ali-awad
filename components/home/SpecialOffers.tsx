import Image from "next/image";
import Link from "next/link";
import { FiClock, FiArrowRight } from "react-icons/fi";

export default function SpecialOffers() {
  return (
    <section className="bg-book-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Today's Special Offers</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured Deal */}
          <div className="bg-white text-book-dark rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative aspect-square">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg"
                  alt="Special offer: 3 Books for the price of 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FiClock className="text-book-accent" />
                  <span className="text-sm font-medium">Ends in 23:59:59</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  3 for 2 on All Paperbacks
                </h3>
                <p className="text-gray-600 mb-4">
                  Mix and match any paperbacks and get the cheapest one free.
                  Limited time only!
                </p>
                <Link
                  href="/deals/3-for-2"
                  className="inline-flex items-center gap-1 bg-book-accent hover:bg-yellow-600 text-book-dark font-bold py-2 px-4 rounded transition-colors"
                >
                  Shop Now <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/* Deal List */}
          <div className="space-y-4">
            {[
              {
                title: "30% Off Bestsellers",
                discount: "30%",
                href: "/deals/bestsellers",
              },
              {
                title: "Buy 1 Get 1 Free on Classics",
                discount: "50%",
                href: "/deals/classics",
              },
              {
                title: "Free Shipping Over $50",
                discount: "Free",
                href: "/shipping",
              },
            ].map((deal) => (
              <Link
                key={deal.title}
                href={deal.href}
                className="block bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{deal.title}</h3>
                  <span className="bg-book-accent text-book-dark font-bold py-1 px-3 rounded-full text-sm">
                    {deal.discount}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
