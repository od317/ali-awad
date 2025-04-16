import Image from "next/image";
import Link from "next/link";
import { FiTwitter, FiGlobe } from "react-icons/fi";

interface Author {
  name: string;
  bio: string;
  image: string;
  social?: {
    twitter?: string;
    website?: string;
  };
}

export default function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="flex flex-col text-book-light sm:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
      <div className="flex-shrink-0">
        <div className="relative h-24 w-24 rounded-full overflow-hidden">
          <Image
            src={author.image}
            alt={`Portrait of ${author.name}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl text-book-light font-bold mb-2">
          About {author.name}
        </h3>
        <p className="text-book-light mb-3">{author.bio}</p>
        <div className="flex gap-3">
          {author.social?.twitter && (
            <Link
              href={author.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-book-light hover:text-book-accent transition-colors"
              aria-label={`${author.name}'s Twitter`}
            >
              <FiTwitter className="h-5 w-5" />
            </Link>
          )}
          {author.social?.website && (
            <Link
              href={author.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-book-light hover:text-book-accent transition-colors"
              aria-label={`${author.name}'s Website`}
            >
              <FiGlobe className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
