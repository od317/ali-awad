"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

export default function AuthorFilterSidebar() {
  const [filters, setFilters] = useState({
    nationalities: [] as string[],
    booksCount: "",
    rating: 0,
    awards: [] as string[],
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    nationalities: true,
    booksCount: true,
    awards: true,
    rating: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const authorNationalities = [
    "American",
    "British",
    "Canadian",
    "French",
    "German",
    "Japanese",
    "Indian",
    "Nigerian",
    "Australian",
    "Brazilian",
    "Mexican",
    "Russian",
  ];

  const authorAwards = [
    "Nobel Prize",
    "Pulitzer Prize",
    "Booker Prize",
    "National Book Award",
    "Hugo Award",
    "Nebula Award",
    "Edgar Award",
    "Caldecott Medal",
    "Newbery Medal",
  ];

  const handleNationalityChange = (nationality: string) => {
    setFilters((prev) => ({
      ...prev,
      nationalities: prev.nationalities.includes(nationality)
        ? prev.nationalities.filter((n) => n !== nationality)
        : [...prev.nationalities, nationality],
    }));
  };

  const handleBooksCountChange = (range: string) => {
    setFilters((prev) => ({
      ...prev,
      booksCount: prev.booksCount === range ? "" : range,
    }));
  };

  const handleAwardChange = (award: string) => {
    setFilters((prev) => ({
      ...prev,
      awards: prev.awards.includes(award)
        ? prev.awards.filter((a) => a !== award)
        : [...prev.awards, award],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      nationalities: [],
      booksCount: "",
      awards: [],
      rating: 0,
    });
  };

  return (
    <>
      {/* Mobile filter button */}
      <button
        type="button"
        className="md:hidden flex items-center gap-2 mb-4 text-primary"
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
              <h2 className="text-xl font-bold">Author Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Nationality filter */}
              <div className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection("nationalities")}
                >
                  <h3 className="font-medium">Nationality</h3>
                  {expandedSections.nationalities ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedSections.nationalities && (
                  <div className="mt-2 space-y-2">
                    {authorNationalities.map((nationality) => (
                      <label
                        key={nationality}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          checked={filters.nationalities.includes(nationality)}
                          onChange={() => handleNationalityChange(nationality)}
                          className="rounded text-primary focus:ring-book-primary"
                        />
                        <span>{nationality}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Books count filter */}
              <div className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection("booksCount")}
                >
                  <h3 className="font-medium">Books Published</h3>
                  {expandedSections.booksCount ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedSections.booksCount && (
                  <div className="mt-2 space-y-2">
                    {[
                      { label: "1-5 books", value: "1-5" },
                      { label: "5-10 books", value: "5-10" },
                      { label: "10-20 books", value: "10-20" },
                      { label: "20+ books", value: "20-1000" },
                    ].map((range) => (
                      <label
                        key={range.value}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name="booksCount"
                          checked={filters.booksCount === range.value}
                          onChange={() => handleBooksCountChange(range.value)}
                          className="text-primary focus:ring-book-primary"
                        />
                        <span>{range.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Awards filter */}
              <div className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection("awards")}
                >
                  <h3 className="font-medium">Awards</h3>
                  {expandedSections.awards ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedSections.awards && (
                  <div className="mt-2 space-y-2">
                    {authorAwards.map((award) => (
                      <label key={award} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.awards.includes(award)}
                          onChange={() => handleAwardChange(award)}
                          className="rounded text-primary focus:ring-book-primary"
                        />
                        <span>{award}</span>
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
                          className="text-primary focus:ring-book-primary"
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
          <h2 className="font-bold text-lg">Author Filters</h2>
          <button
            onClick={clearAllFilters}
            className="text-sm text-primary hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Nationality filter */}
        <div className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection("nationalities")}
          >
            <h3 className="font-medium">Nationality</h3>
            {expandedSections.nationalities ? (
              <FiChevronUp className="h-5 w-5" />
            ) : (
              <FiChevronDown className="h-5 w-5" />
            )}
          </button>
          {expandedSections.nationalities && (
            <div className="mt-2 space-y-2">
              {authorNationalities.map((nationality) => (
                <label key={nationality} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.nationalities.includes(nationality)}
                    onChange={() => handleNationalityChange(nationality)}
                    className="rounded text-primary focus:ring-book-primary"
                  />
                  <span>{nationality}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Books count filter */}
        <div className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection("booksCount")}
          >
            <h3 className="font-medium">Books Published</h3>
            {expandedSections.booksCount ? (
              <FiChevronUp className="h-5 w-5" />
            ) : (
              <FiChevronDown className="h-5 w-5" />
            )}
          </button>
          {expandedSections.booksCount && (
            <div className="mt-2 space-y-2">
              {[
                { label: "1-5 books", value: "1-5" },
                { label: "5-10 books", value: "5-10" },
                { label: "10-20 books", value: "10-20" },
                { label: "20+ books", value: "20-1000" },
              ].map((range) => (
                <label key={range.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="booksCount"
                    checked={filters.booksCount === range.value}
                    onChange={() => handleBooksCountChange(range.value)}
                    className="text-primary focus:ring-book-primary"
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Awards filter */}
        <div className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => toggleSection("awards")}
          >
            <h3 className="font-medium">Awards</h3>
            {expandedSections.awards ? (
              <FiChevronUp className="h-5 w-5" />
            ) : (
              <FiChevronDown className="h-5 w-5" />
            )}
          </button>
          {expandedSections.awards && (
            <div className="mt-2 space-y-2">
              {authorAwards.map((award) => (
                <label key={award} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.awards.includes(award)}
                    onChange={() => handleAwardChange(award)}
                    className="rounded text-primary focus:ring-book-primary"
                  />
                  <span>{award}</span>
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
                    className="text-primary focus:ring-book-primary"
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
