import { AddBookForm } from "@/components/commerce/forms/AddBookForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Book | Your Bookstore",
  description: "Add a new book to your bookstore collection",
  keywords: ["add book", "new book", "bookstore admin"],
};

export default function AddBookPage() {
  return (
    <div className="min-h-screen bg-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Add New Book</h1>
          <p className="text-secondary">
            Fill in the details to add a new book to the store
          </p>
        </div>
        <AddBookForm />
      </div>
    </div>
  );
}
