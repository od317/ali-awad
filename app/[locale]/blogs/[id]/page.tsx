import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiCalendar, FiClock, FiTag, FiShare2 } from "react-icons/fi";
import RelatedPosts from "@/components/blog/RelatedPosts";
import AuthorBio from "@/components/blog/AuthorBio";

// Types
interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  author: {
    name: string;
    bio: string;
    image: string;
    social: {
      twitter?: string;
      website?: string;
    };
  };
}

// Mock data - replace with your CMS/API fetch
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const mockPosts: Record<string, BlogPost> = {
    "evolution-modern-fantasy": {
      id: "1",
      title: "The Evolution of Modern Fantasy Literature",
      content: `<p>Fantasy literature has undergone significant transformation since the days of J.R.R. Tolkien. This article explores the key developments in the genre over the past century.</p>
        <h2>The Tolkien Era</h2>
        <p>The publication of "The Lord of the Rings" in 1954-55 established many conventions that would define high fantasy for decades to come.</p>
        <h2>New Wave Fantasy</h2>
        <p>In the 1980s and 90s, authors like Terry Pratchett and Neil Gaiman began blending fantasy with other genres and introducing more contemporary themes.</p>
        <h2>Modern Trends</h2>
        <p>Today's fantasy is characterized by diverse voices, complex worldbuilding, and the blurring of genre boundaries.</p>`,
      excerpt:
        "Exploring how fantasy genre has transformed from Tolkien to contemporary authors",
      date: "2023-10-15",
      readTime: "8 min",
      category: "Literary Analysis",
      tags: ["Fantasy", "Literary History", "Genre Studies"],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
      author: {
        name: "Dr. Emily Carter",
        bio: "Literature professor specializing in genre fiction with 15 years of teaching experience at major universities.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
        social: {
          twitter: "https://twitter.com/emilycarter",
          website: "https://emilycarterliterature.com",
        },
      },
    },
    // Add more mock posts as needed
  };

  return mockPosts[slug] || null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Your Bookstore Blog`,
    description: post.excerpt,
    keywords: [...post.tags, post.category, "book blog", "literature"],

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yourbookstore.com/blog/${params.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: post.author.social.twitter
        ? `@${post.author.social.twitter.split("/").pop()}`
        : undefined,
    },

    alternates: {
      canonical: `https://yourbookstore.com/blog/${params.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto px-4 py-8 text-primary">
      <article className="max-w-4xl mx-auto">
        {/* Post Header */}
        <header className="mb-12">
          <div className="flex gap-3 text-sm text-secondary mb-4">
            <span className="flex items-center gap-1">
              <FiCalendar className="h-4 w-4" />
              {formattedDate}
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

          <h1 className="text-4xl font-bold text-primary mb-6">{post.title}</h1>

          <div className="relative aspect-video rounded-lg overflow-hidden mb-8 bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Post Content */}
        <div className="prose max-w-none text-primary mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold  mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/blog?tag=${tag.toLowerCase()}`}
                  className="px-3 py-1 bg-gray-100 text-book-light rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <AuthorBio author={post.author} />

        {/* Sharing */}
        <div className="mt-12 border-t border-b  border-gray-200 py-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium ">Share this post</h3>
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <FiShare2 className="h-5 w-5" />
              </button>
              {/* Add more social sharing buttons as needed */}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
        <RelatedPosts currentPostId={post.id} />
      </section>
    </div>
  );
}
