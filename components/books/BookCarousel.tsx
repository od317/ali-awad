// components/books/BookCarousel.tsx
"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const books = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    price: 27.99,
    href: "/books/atomic-habits",
  },
  {
    id: "2",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 22.5,
    href: "/books/psychology-of-money",
  },
  {
    id: "3",
    title: "Deep Work",
    author: "Cal Newport",
    price: 26.0,
    href: "/books/deep-work",
  },
  {
    id: "4",
    title: "The 5 AM Club",
    author: "Robin Sharma",
    price: 24.99,
    href: "/books/5-am-club",
  },
  {
    id: "5",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 23.95,
    href: "/books/subtle-art",
  },
];

export default function BookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-book-paper py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Books</h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {books.map((book) => (
              <div key={book.id} className="flex-shrink-0 w-full px-4">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3 aspect-[3/4] relative">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg"
                      alt={`Cover of ${book.title} by ${book.author}`}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{book.author}</p>
                    <p className="text-xl font-bold text-book-primary mb-6">
                      ${book.price.toFixed(2)}
                    </p>
                    <Link
                      href={book.href}
                      className="inline-block bg-book-primary hover:bg-book-primary-dark text-white font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous book"
          >
            <FiChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next book"
          >
            <FiChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {books.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-book-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
