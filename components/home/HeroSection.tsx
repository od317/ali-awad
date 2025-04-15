// components/home/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative bg-book-primary text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Your Next{" "}
              <span className="text-book-accent">Favorite Book</span>
            </h1>
            <p className="text-xl md:text-2xl">
              Explore our curated collection of bestsellers, new releases, and
              timeless classics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/browse"
                className="flex items-center justify-center gap-2 bg-book-accent hover:bg-yellow-600 text-book-dark font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Browse Collection <FiArrowRight />
              </Link>
              <Link
                href="/deals"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-book-dark font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Today's Deals
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto shadow-2xl">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg"
                alt="Featured book: The Silent Patient by Alex Michaelides"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
