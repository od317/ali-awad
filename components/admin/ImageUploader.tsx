"use client";

import { useState, useCallback } from "react";
import { FiUpload, FiX, FiImage } from "react-icons/fi";

interface ImageUploaderProps {
  onImageUpload: (url: string) => void;
  disabled?: boolean;
}

export default function ImageUploader({
  onImageUpload,
  disabled,
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setIsUploading(true);

      // In a real app, you would upload to your server or cloud storage
      // Here we just create a local preview
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onImageUpload(result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    },
    [onImageUpload]
  );

  const removeImage = useCallback(() => {
    setPreview(null);
    onImageUpload("");
  }, [onImageUpload]);

  return (
    <div className="space-y-2">
      {preview ? (
        <div className="relative group">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-64 object-cover rounded-md"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-opacity"
            disabled={disabled}
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <label
          className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-md cursor-pointer ${
            disabled
              ? "bg-gray-100 border-gray-200"
              : "bg-white border-gray-300 hover:border-book-primary"
          } transition-colors`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
            {isUploading ? (
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            ) : (
              <>
                <FiUpload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </>
            )}
          </div>
          <input
            id="featured-image"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            disabled={disabled || isUploading}
          />
        </label>
      )}
    </div>
  );
}
