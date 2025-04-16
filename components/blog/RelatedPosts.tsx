import Link from "next/link";
import Image from "next/image";

interface BlogPostPreview {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
}

export default function RelatedPosts({
  currentPostId,
}: {
  currentPostId: string;
}) {
  // Mock data - replace with your CMS/API fetch
  const relatedPosts: BlogPostPreview[] = [
    {
      id: "2",
      title: "10 Must-Read Books for Autumn 2023",
      excerpt: "Curated selection of books perfect for cozy autumn reading",
      date: "2023-09-28",
      readTime: "5 min",
      slug: "autumn-2023-must-reads",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "3",
      title: "Interview with Award-Winning Author Sarah Johnson",
      excerpt:
        "An in-depth conversation about her writing process and latest novel",
      date: "2023-09-15",
      readTime: "12 min",
      slug: "interview-sarah-johnson",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "4",
      title: "How to Build a Reading Habit That Lasts",
      excerpt:
        "Practical tips for making reading a consistent part of your daily life",
      date: "2023-08-22",
      readTime: "6 min",
      slug: "building-reading-habit",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
  ].filter((post) => post.id !== currentPostId);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedPosts.map((post) => (
        <article key={post.id} className="group">
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="aspect-video relative rounded-lg overflow-hidden mb-4 bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-book-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-secondary line-clamp-2 mb-2">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-secondary">
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{post.readTime} read</span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
