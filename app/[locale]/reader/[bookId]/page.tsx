import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sampleBook } from "@/lib/books/sampleBook";
import BookReaderControls from "@/components/reader/BookReaderControls";
import BookNavigation from "@/components/reader/BookNavigation";

interface Params {
  params: {
    bookId: string;
  };
  searchParams: {
    page?: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const book = sampleBook; // In real app, fetch by bookId

  if (!book) {
    return {
      title: "Book Not Found",
      description: "The requested book could not be found.",
    };
  }

  return {
    title: `${book.title} | Reader | Your Bookstore`,
    description: book.description,
    keywords: [
      book.title,
      book.author,
      "read online",
      "ebook",
      ...book.title.split(" "),
    ],

    openGraph: {
      title: `Read "${book.title}" Online`,
      description: `Read "${book.title}" by ${book.author} online at Your Bookstore`,
      url: `https://yourbookstore.com/reader/${book.id}`,
      type: "book",
      images: [
        {
          url: book.coverImage,
          width: 800,
          height: 1200,
          alt: `Cover of ${book.title}`,
        },
      ],
      book: {
        authors: [book.author],
        isbn: book.metadata.isbn,
        releaseDate: book.metadata.publishedDate,
        tags: book.title.split(" "),
      },
    },

    twitter: {
      card: "summary_large_image",
      title: `Read "${book.title}" Online`,
      description: `Read "${book.title}" by ${book.author} online at Your Bookstore`,
      images: [book.coverImage],
    },

    alternates: {
      canonical: `https://yourbookstore.com/reader/${book.id}`,
    },
  };
}

export default function BookReaderPage({ params, searchParams }: Params) {
  const book = sampleBook; // In real app, fetch by bookId
  const currentPageId = parseInt(searchParams.page || "1");
  const currentPage =
    book.pages.find((page) => page.id === currentPageId) || book.pages[0];

  if (!book || !currentPage) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-book-paper">
      {/* Header */}
      <header className="bg-book-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">{book.title}</h1>
            <p className="text-sm opacity-80">by {book.author}</p>
          </div>
          <BookReaderControls
            currentPage={currentPage.id}
            totalPages={book.pages.length}
            bookId={book.id}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Book Navigation (Table of Contents) - Hidden on mobile by default */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5">
          <BookNavigation book={book} currentPageId={currentPage.id} />
        </aside>

        {/* Reading Area */}
        <section className="flex-1">
          <article
            className="prose lg:prose-xl max-w-none p-6 bg-white rounded-lg shadow-sm"
            dangerouslySetInnerHTML={{ __html: currentPage.content }}
          />
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-gray-100 border-t p-4">
        <div className="container mx-auto flex justify-between">
          <div className="flex gap-4">
            {currentPage.id > 1 && (
              <a
                href={`/reader/${book.id}?page=${currentPage.id - 1}`}
                className="px-4 py-2 bg-book-primary text-white rounded hover:bg-book-primary-dark transition-colors"
              >
                Previous Page
              </a>
            )}
          </div>
          <div className="text-secondary">
            Page {currentPage.id} of {book.pages.length}
          </div>
          <div className="flex gap-4">
            {currentPage.id < book.pages.length && (
              <a
                href={`/reader/${book.id}?page=${currentPage.id + 1}`}
                className="px-4 py-2 bg-book-primary text-white rounded hover:bg-book-primary-dark transition-colors"
              >
                Next Page
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
