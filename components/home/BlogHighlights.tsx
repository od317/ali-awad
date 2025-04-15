// components/home/BlogHighlights.tsx
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";

const blogPosts = [
  {
    title: "10 Must-Read Books for Summer 2023",
    excerpt: "Discover our top picks for beach reads and summer adventures.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    href: "/blog/summer-2023",
    date: "June 15, 2023",
    readTime: "5 min",
  },
  {
    title: "How to Build a Reading Habit That Sticks",
    excerpt:
      "Practical tips from bibliophiles to help you read more books this year.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    href: "/blog/reading-habit",
    date: "May 28, 2023",
    readTime: "8 min",
  },
];

export default function BlogHighlights() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">From Our Blog</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article key={post.title} className="group">
            <Link href={post.href} className="block">
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex gap-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <FiCalendar /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <FiClock /> {post.readTime} read
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-book-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-block border border-book-primary text-book-primary hover:bg-book-primary hover:text-white px-6 py-2 rounded-lg transition-colors"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
}
