"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

export default function FilterSidebar() {
  const [filters, setFilters] = useState({
    genres: [] as string[],
    priceRange: "",
    format: "",
    availability: "",
    rating: 0,
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    genres: true,
    price: true,
    format: true,
    availability: true,
    rating: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const bookGenres = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Biography",
    "History",
    "Self-Help",
    "Science",
    "Business",
    "Children",
    "Young Adult",
  ];

  const handleGenreChange = (genre: string) => {
    setFilters((prev) => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter((g) => g !== genre)
        : [...prev.genres, genre],
    }));
  };

  const handlePriceChange = (range: string) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === range ? "" : range,
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      genres: [],
      priceRange: "",
      format: "",
      availability: "",
      rating: 0,
    });
  };

  return (
    <>
      {/* Mobile filter button */}
      <button
        type="button"
        className="md:hidden flex items-center gap-2 mb-4 text-book-primary"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span>Filters</span>
        <FiChevronDown className="h-4 w-4" />
      </button>

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="absolute inset-0 bg-white p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Genre filter */}
              <div className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection("genres")}
                >
                  <h3 className="font-medium">Genres</h3>
                  {expandedSections.genres ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedSections.genres && (
                  <div className="mt-2 space-y-2">
                    {bookGenres.map((genre) => (
                      <label key={genre} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.genres.includes(genre)}
                          onChange={() => handleGenreChange(genre)}
                          className="rounded text-book-primary focus:ring-book-primary"
                        />
                        <span>{genre}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price filter */}
              <div className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection("price")}
                >
                  <h3 className="font-medium">Price</h3>
                  {expandedSections.price ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedSections.price && (
                  <div className="mt-2 space-y-2">
                    {[
                      { label: "Under $10", value: "0-10" },
                      { label: "$10 - $25", value: "10-25" },
                      { label: "$25 - $50", value: "25-50" },
                      { label: "Over $50", value: "50-1000" },
                    ].map((range) => (
                      <label
                        key={range.value}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name="price"
                          checked={filters.priceRange === range.value}
                          onChange={() => handlePriceChange(range.value)}
                          className="text-book-primary focus:ring-book-primary"
                        />
                        <span>{range.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Format filter */}
              <div className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection("format")}
                >
                  <h3 className="font-medium">Format</h3>
                  {expandedSections.format ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedSections.format && (
                  <div className="mt-2 space-y-2">
                    {["Hardcover", "Paperback", "eBook", "Audiobook"].map(
                      (format) => (
                        <label key={format} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={filters.format === format}
                            onChange={() =>
                              setFilters((prev) => ({
                                ...prev,
                                format: prev.format === format ? "" : format,
                              }))
                            }
                            className="rounded text-book-primary focus:ring-book-primary"
                          />
                          <span>{format}</span>
                        </label>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Rating filter */}
              <div className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection("rating")}
                >
                  <h3 className="font-medium">Rating</h3>
                  {expandedSections.rating ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedSections.rating && (
                  <div className="mt-2 space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="rating"
                          checked={filters.rating === rating}
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              rating: prev.rating === rating ? 0 : rating,
                            }))
                          }
                          className="text-book-primary focus:ring-book-primary"
                        />
                        <span className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`${
                                i < rating ? "text-yellow-500" : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                          {rating === 4 ? " & Up" : ""}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={clearAllFilters}
                  className="flex-1 border border-gray-300 rounded-md py-2 text-sm font-medium"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex-1 bg-book-primary text-white rounded-md py-2 text-sm font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop filters */}
      <div className="hidden md:block space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Filters</h2>
          <button
            onClick={clearAllFilters}
            className="text-sm text-book-primary hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Genre filter */}
        <div className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection("genres")}
          >
            <h3 className="font-medium">Genres</h3>
            {expandedSections.genres ? (
              <FiChevronUp className="h-5 w-5" />
            ) : (
              <FiChevronDown className="h-5 w-5" />
            )}
          </button>
          {expandedSections.genres && (
            <div className="mt-2 space-y-2">
              {bookGenres.map((genre) => (
                <label key={genre} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.genres.includes(genre)}
                    onChange={() => handleGenreChange(genre)}
                    className="rounded text-book-primary focus:ring-book-primary"
                  />
                  <span>{genre}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price filter */}
        <div className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection("price")}
          >
            <h3 className="font-medium">Price</h3>
            {expandedSections.price ? (
              <FiChevronUp className="h-5 w-5" />
            ) : (
              <FiChevronDown className="h-5 w-5" />
            )}
          </button>
          {expandedSections.price && (
            <div className="mt-2 space-y-2">
              {[
                { label: "Under $10", value: "0-10" },
                { label: "$10 - $25", value: "10-25" },
                { label: "$25 - $50", value: "25-50" },
                { label: "Over $50", value: "50-1000" },
              ].map((range) => (
                <label key={range.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange === range.value}
                    onChange={() => handlePriceChange(range.value)}
                    className="text-book-primary focus:ring-book-primary"
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Format filter */}
        <div className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection("format")}
          >
            <h3 className="font-medium">Format</h3>
            {expandedSections.format ? (
              <FiChevronUp className="h-5 w-5" />
            ) : (
              <FiChevronDown className="h-5 w-5" />
            )}
          </button>
          {expandedSections.format && (
            <div className="mt-2 space-y-2">
              {["Hardcover", "Paperback", "eBook", "Audiobook"].map(
                (format) => (
                  <label key={format} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.format === format}
                      onChange={() =>
                        setFilters((prev) => ({
                          ...prev,
                          format: prev.format === format ? "" : format,
                        }))
                      }
                      className="rounded text-book-primary focus:ring-book-primary"
                    />
                    <span>{format}</span>
                  </label>
                )
              )}
            </div>
          )}
        </div>

        {/* Availability filter */}
        <div className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection("availability")}
          >
            <h3 className="font-medium">Availability</h3>
            {expandedSections.availability ? (
              <FiChevronUp className="h-5 w-5" />
            ) : (
              <FiChevronDown className="h-5 w-5" />
            )}
          </button>
          {expandedSections.availability && (
            <div className="mt-2 space-y-2">
              {["In Stock", "Pre-Order", "Out of Stock"].map((status) => (
                <label key={status} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.availability === status}
                    onChange={() =>
                      setFilters((prev) => ({
                        ...prev,
                        availability:
                          prev.availability === status ? "" : status,
                      }))
                    }
                    className="rounded text-book-primary focus:ring-book-primary"
                  />
                  <span>{status}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Rating filter */}
        <div className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection("rating")}
          >
            <h3 className="font-medium">Rating</h3>
            {expandedSections.rating ? (
              <FiChevronUp className="h-5 w-5" />
            ) : (
              <FiChevronDown className="h-5 w-5" />
            )}
          </button>
          {expandedSections.rating && (
            <div className="mt-2 space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() =>
                      setFilters((prev) => ({
                        ...prev,
                        rating: prev.rating === rating ? 0 : rating,
                      }))
                    }
                    className="text-book-primary focus:ring-book-primary"
                  />
                  <span className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`${
                          i < rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    {rating === 4 ? " & Up" : ""}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
