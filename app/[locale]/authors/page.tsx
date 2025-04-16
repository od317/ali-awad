import { Suspense } from "react";
import { FiStar } from "react-icons/fi";
import { AuthorCardSkeleton } from "@/components/ui/Skeletons";
import FilterSidebar from "@/components/commerce/FilterSidebar";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Browse Authors | Your Bookstore",
  description:
    "Discover all authors in our bookstore collection. Find your favorite writers and explore their works.",
  keywords: ["authors", "writers", "bookstore authors", "author directory"],

  openGraph: {
    title: "Browse Authors | Your Bookstore",
    description: "Discover all authors in our bookstore collection",
    url: "https://yourbookstore.com/authors",
    siteName: "Your Bookstore",
    images: [
      {
        url: "https://yourbookstore.com/images/og-authors.jpg",
        width: 1200,
        height: 630,
        alt: "Authors collection at Your Bookstore",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Browse Authors | Your Bookstore",
    description: "Discover all authors in our bookstore collection",
    images: ["https://yourbookstore.com/images/twitter-authors.jpg"],
  },

  alternates: {
    canonical: "https://yourbookstore.com/authors",
  },
};

// Mock author data
const authors = Array(12).fill({
  id: "1",
  name: "James Clear",
  rating: 4.8,
  booksCount: 3,
  image:
    "https://jamesclear.com/wp-content/uploads/2014/06/james-clear-headshot-2019.jpg",
});

export default function AuthorsListingPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-primary">
      <h1 className="text-3xl font-bold mb-6">All Authors</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <FilterSidebar type="authors" />
        </div>

        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing 1-12 of 120 authors</p>
            <select className="border rounded px-3 py-1">
              <option>Sort by: Featured</option>
              <option>Name: A to Z</option>
              <option>Name: Z to A</option>
              <option>Most Published</option>
              <option>Avg. Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <Suspense
              fallback={
                <>
                  {Array(12)
                    .fill(0)
                    .map((_, i) => (
                      <AuthorCardSkeleton key={i} />
                    ))}
                </>
              }
            >
              {authors.map((author, index) => (
                <AuthorCard key={`${author.id}-${index}`} author={author} />
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

// Author Card Component
function AuthorCard({
  author,
}: {
  author: {
    id: string;
    name: string;
    rating: number;
    booksCount: number;
    image: string;
  };
}) {
  return (
    <div className="group">
      <Link href={`/authors/${author.id}`} className="block">
        <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden mb-3">
          <Image
            src={author.image}
            alt={`Portrait of ${author.name}`}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity"
          />
        </div>
        <h3 className="font-medium text-lg mb-1 text-primary transition-colors">
          {author.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiStar className="text-yellow-500 mr-1" />
            <span className="text-primary">{author.rating}</span>
          </div>
          <span className="text-primary">{author.booksCount} books</span>
        </div>
      </Link>
    </div>
  );
}
