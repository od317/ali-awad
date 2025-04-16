import type { Metadata } from "next";
import Link from "next/link";
import { FiCalendar, FiClock, FiTag } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Blog | Your Bookstore",
  description:
    "Discover articles, book reviews, and literary insights from our bookstore blog",
  keywords: ["book blog", "literary articles", "book reviews", "reading tips"],
  openGraph: {
    title: "Blog | Your Bookstore",
    description: "Discover articles, book reviews, and literary insights",
    images: [
      {
        url: "/images/og-blog.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// Mock blog data
const blogPosts = [
  {
    id: "1",
    title: "The Evolution of Modern Fantasy Literature",
    excerpt:
      "Exploring how fantasy genre has transformed from Tolkien to contemporary authors",
    date: "2023-10-15",
    readTime: "8 min",
    category: "Literary Analysis",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    slug: "evolution-modern-fantasy",
  },
  {
    id: "2",
    title: "10 Must-Read Books for Autumn 2023",
    excerpt: "Curated selection of books perfect for cozy autumn reading",
    date: "2023-09-28",
    readTime: "5 min",
    category: "Book Lists",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    slug: "autumn-2023-must-reads",
  },
  {
    id: "3",
    title: "Interview with Award-Winning Author Sarah Johnson",
    excerpt:
      "An in-depth conversation about her writing process and latest novel",
    date: "2023-09-15",
    readTime: "12 min",
    category: "Author Interviews",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    slug: "interview-sarah-johnson",
  },
  {
    id: "4",
    title: "How to Build a Reading Habit That Lasts",
    excerpt:
      "Practical tips for making reading a consistent part of your daily life",
    date: "2023-08-22",
    readTime: "6 min",
    category: "Reading Tips",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    slug: "building-reading-habit",
  },
  {
    id: "5",
    title: "The Rise of Indie Publishing",
    excerpt: "How independent authors are changing the publishing landscape",
    date: "2023-08-10",
    readTime: "10 min",
    category: "Publishing",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    slug: "rise-indie-publishing",
  },
  {
    id: "6",
    title: "Classic Novels That Stand the Test of Time",
    excerpt: "Why these century-old books remain relevant today",
    date: "2023-07-29",
    readTime: "9 min",
    category: "Literary Analysis",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    slug: "classic-novels-timeless",
  },
];

export default function BlogListingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Bookstore Blog</h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          Discover literary insights, author interviews, and reading
          recommendations from our team
        </p>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row gap-8">
        {/* Blog Posts */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex gap-3 text-sm text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="h-4 w-4" />
                    {post.readTime} read
                  </span>
                  <span className="flex items-center gap-1">
                    <FiTag className="h-4 w-4" />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-2 group-hover:text-book-accent transition-colors">
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-secondary mb-4">{post.excerpt}</p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center text-book-accent font-medium hover:underline"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex gap-2">
              <button className="px-4 py-2 border rounded-md bg-book-primary text-white">
                1
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                2
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                3
              </button>
              <span className="px-4 py-2">...</span>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                8
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
