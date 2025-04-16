import Image from "next/image";
import { FiStar } from "react-icons/fi";
import BookCard from "@/components/books/BookCard";
import type { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // In a real app, you would fetch the author data here
  const author = {
    id: params.id,
    name: "James Clear",
    bio: "James Clear is a writer and speaker focused on habits...",
    image: "https://jamesclear.com/.../james-clear-headshot-2019.jpg",
  };

  return {
    title: `${author.name} | Your Bookstore`,
    description: `${author.bio.substring(0, 160)}...`,
    keywords: [author.name, "author", "books", ...author.name.split(" ")],

    openGraph: {
      title: `${author.name} | Your Bookstore`,
      description: author.bio.substring(0, 160),
      url: `https://yourbookstore.com/products/authors/${author.id}`,
      siteName: "Your Bookstore",
      images: [
        {
          url: author.image,
          width: 800,
          height: 800,
          alt: `Portrait of ${author.name}`,
        },
      ],
      locale: "en_US",
      type: "profile",
      // Profile specific metadata
      ...(author.name.split(" ").length > 1 && {
        firstName: author.name.split(" ")[0],
        lastName: author.name.split(" ").slice(1).join(" "),
      }),
    },

    twitter: {
      card: "summary_large_image",
      title: `${author.name} | Your Bookstore`,
      description: author.bio.substring(0, 160),
      images: [author.image],
    },

    alternates: {
      canonical: `https://yourbookstore.com/products/authors/${author.id}`,
    },

    // Schema.org markup for authors
    other: {
      "schema:author": {
        "@type": "Person",
        name: author.name,
        image: author.image,
      },
    },
  };
}

export default function AuthorDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock author data
  const author = {
    id: params.id,
    name: "James Clear",
    bio: "James Clear is a writer and speaker focused on habits, decision making, and continuous improvement. He is the author of the #1 New York Times bestseller, Atomic Habits. His work has appeared in the New York Times, Entrepreneur, Time, and on CBS This Morning. His website receives millions of visitors each month and hundreds of thousands subscribe to his popular email newsletter.",
    rating: 4.8,
    reviewCount: 12894,
    booksWritten: 3,
    nationality: "American",
    birthDate: "1986",
    website: "https://jamesclear.com",
    image:
      "https://jamesclear.com/wp-content/uploads/2014/06/james-clear-headshot-2019.jpg",
  };

  // Mock books by this author
  const authorBooks = [
    {
      id: "1",
      title: "Atomic Habits",
      author: author.name,
      price: 27.99,
      coverImage:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
      rating: 4.8,
      href: `/products/1`,
    },
    {
      id: "2",
      title: "The Habits Academy",
      author: author.name,
      price: 197.0,
      coverImage:
        "https://jamesclear.com/wp-content/uploads/2020/09/habits-academy-cover.png",
      rating: 4.9,
      href: `/products/2`,
    },
    {
      id: "3",
      title: "Transform Your Habits",
      author: author.name,
      price: 9.99,
      coverImage:
        "https://jamesclear.com/wp-content/uploads/2014/06/transform-your-habits-cover.png",
      rating: 4.7,
      href: `/products/3`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Author Header Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Author Image */}
        <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg bg-gray-100">
          <Image
            src={author.image}
            alt={`Portrait of ${author.name}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Author Info */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold text-primary">{author.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(author.rating)
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-primary">
              {author.rating.toFixed(1)} ({author.reviewCount.toLocaleString()}{" "}
              reviews)
            </span>
          </div>

          {/* Author Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
            <DetailItem
              label="Books Written"
              value={author.booksWritten.toString()}
            />
            <DetailItem label="Nationality" value={author.nationality} />
            <DetailItem label="Born" value={author.birthDate} />
          </div>

          {/* Author Links */}
          <div className="flex gap-4 pt-2">
            {author.website && (
              <a
                href={author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-book-accent hover:underline"
              >
                Official Website
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Author Biography */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Biography</h2>
        <div className="prose max-w-none text-primary">
          {author.bio.split("\n").map((paragraph, i) => (
            <p key={i} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Books by Author */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">
          Books by {author.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {authorBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

// Reuse the DetailItem component from your book details page
function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="font-medium text-primary">{label}</h3>
      <p className="text-primary">{value}</p>
    </div>
  );
}
