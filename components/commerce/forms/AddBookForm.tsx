"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";

export const AddBookForm = () => {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const data = Object.fromEntries(formData.entries());
    console.log("Form data:", data);

    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondary p-6 rounded-lg shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Book Title"
          name="title"
          placeholder="Enter book title"
          required
        />
        <FormInput
          label="Author"
          name="author"
          placeholder="Enter author name"
          required
        />
        <FormInput
          label="ISBN"
          name="isbn"
          placeholder="Enter ISBN number"
          required
        />
        <FormInput
          label="Price"
          name="price"
          type="number"
          placeholder="Enter price"
          required
        />
        <div>
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-primary"
          >
            Cover Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full rounded border border-gray-300 p-2 text-primary bg-white"
            required
          />
        </div>
        <FormInput
          label="Category"
          name="category"
          placeholder="Enter category"
          required
        />
        <FormInput
          label="Pages"
          name="pages"
          type="number"
          placeholder="Enter number of pages"
        />
        <FormInput label="Published Date" name="publishedDate" type="date" />
      </div>

      <FormTextarea
        label="Description"
        name="description"
        placeholder="Enter book description"
        required
        rows={5}
        className="mt-6"
      />

      {imagePreview && (
        <div className="mt-6">
          <p className="text-primary font-medium mb-2">Image Preview:</p>
          <img
            src={imagePreview}
            alt="Cover Preview"
            className="w-48 h-auto rounded border"
          />
        </div>
      )}

      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="px-4 py-2 border border-book-light rounded-md text-primary bg-book-paper hover:bg-book-light transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-book-accent text-white rounded-md hover:bg-book-accent-dark transition-colors"
        >
          Add Book
        </button>
      </div>
    </form>
  );
};
