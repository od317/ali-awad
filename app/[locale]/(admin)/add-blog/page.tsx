"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";
import BlogForm from "@/components/admin/BlogForm";

export default function AddBlogPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // In a real app, you would send this to your API
      console.log("Form data:", Object.fromEntries(formData.entries()));

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to blog list after successful submission
      router.push("/admin/blogs");
    } catch (err) {
      setError("Failed to save blog post. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">Add New Blog Post</h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <BlogForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />

        <div className="mt-8 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/admin/blogs")}
            className="px-4 py-2 border border-gray-300 rounded-md text-primary hover:bg-gray-50 transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            form="blog-form"
            className="px-4 py-2 bg-book-primary text-white rounded-md hover:bg-book-primary-dark transition-colors flex items-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <FiLoader className="animate-spin" />
                Saving...
              </>
            ) : (
              "Publish Post"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
