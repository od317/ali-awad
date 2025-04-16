import Link from "next/link";
import { Book } from "@/lib/books/sampleBook";

interface BookNavigationProps {
  book: Book;
  currentPageId: number;
}

export default function BookNavigation({
  book,
  currentPageId,
}: BookNavigationProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm sticky top-4">
      <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
      <nav>
        <ul className="space-y-2">
          {book.pages.map((page) => {
            // Extract chapter titles from content (simplified for demo)
            const chapterMatch = page.content.match(
              /<h[12][^>]*>(.*?)<\/h[12]>/
            );
            const title = chapterMatch ? chapterMatch[1] : `Page ${page.id}`;

            return (
              <li key={page.id}>
                <Link
                  href={`/reader/${book.id}?page=${page.id}`}
                  className={`block p-2 rounded ${
                    page.id === currentPageId
                      ? "bg-book-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
