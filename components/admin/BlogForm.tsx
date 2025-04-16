"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";
import RichTextEditor from "./RichTextEditor";

interface BlogFormProps {
  onSubmit: (formData: FormData) => void;
  isSubmitting: boolean;
}

export default function BlogForm({ onSubmit, isSubmitting }: BlogFormProps) {
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("content", content);
    if (featuredImage) {
      formData.set("featuredImage", featuredImage);
    }
    onSubmit(formData);
  };

  return (
    <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-secondary mb-1"
        >
          Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-book-primary focus:border-transparent"
          placeholder="Enter blog post title"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label
          htmlFor="excerpt"
          className="block text-sm font-medium text-secondary mb-1"
        >
          Excerpt *
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          required
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-book-primary focus:border-transparent"
          placeholder="A short summary of your blog post"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary mb-1">
          Featured Image *
        </label>
        <ImageUploader
          onImageUpload={setFeaturedImage}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-secondary mb-1"
        >
          Category *
        </label>
        <select
          id="category"
          name="category"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-book-primary focus:border-transparent"
          disabled={isSubmitting}
        >
          <option value="">Select a category</option>
          <option value="Book Reviews">Book Reviews</option>
          <option value="Author Interviews">Author Interviews</option>
          <option value="Literary Analysis">Literary Analysis</option>
          <option value="Reading Tips">Reading Tips</option>
          <option value="Industry News">Industry News</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-secondary mb-1"
        >
          Tags
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-book-primary focus:border-transparent"
          placeholder="Comma separated tags (e.g., fantasy, contemporary, classics)"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary mb-1">
          Content *
        </label>
        <RichTextEditor
          value={content}
          onChange={setContent}
          disabled={isSubmitting}
        />
      </div>

      <div className="flex items-center">
        <input
          id="publish"
          name="publish"
          type="checkbox"
          className="h-4 w-4 text-book-primary focus:ring-book-primary border-gray-300 rounded"
          disabled={isSubmitting}
        />
        <label htmlFor="publish" className="ml-2 block text-sm text-secondary">
          Publish immediately
        </label>
      </div>
    </form>
  );
}
