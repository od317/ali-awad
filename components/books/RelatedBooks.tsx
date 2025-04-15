import { getRelatedBooks } from "@/lib/api/data";
import Image from "next/image";
import Link from "next/link";

async function RelatedBooks({ currentBookId }: { currentBookId: string }) {
  const relatedBooks = await getRelatedBooks(currentBookId);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {relatedBooks.map((book) => (
        <div key={book.id} className="group">
          <Link href={`/products/${book.id}`} className="block">
            <div className="aspect-[3/4] relative bg-book-paper rounded-lg overflow-hidden mb-2">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
            <h3 className="font-medium text-primary group-hover:text-book-primary transition-colors">
              {book.title}
            </h3>
            <p className="text-secondary">{book.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RelatedBooks;
