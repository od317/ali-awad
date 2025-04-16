"use client";

import { useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
          <FiAlertTriangle className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">
          Something went wrong!
        </h1>
        <p className="text-secondary mb-6">
          We couldn't load the blog post. Please try again later.
        </p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-book-primary text-white rounded-md hover:bg-book-primary-dark transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
