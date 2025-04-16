// components/account/DeleteAccountModal.tsx
"use client";

import { useState } from "react";
import { FiAlertTriangle, FiX } from "react-icons/fi";

export default function DeleteAccountModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    if (confirmation !== "DELETE") {
      setError("Please type DELETE to confirm");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/account", {
        method: "DELETE",
      });

      if (response.ok) {
      } else {
        const data = await response.json();
        setError(data.message || "Error deleting account");
      }
    } catch (err) {
      setError("Network error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-8 text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
      >
        Delete My Account
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-book-dark rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-primary flex items-center">
                <FiAlertTriangle className="text-red-600 mr-2" />
                Delete Account
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-secondary">
                This action cannot be undone. All your data including orders,
                wishlists, and reviews will be permanently deleted.
              </p>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-secondary">
                  Type <span className="font-mono">DELETE</span> to confirm:
                </label>
                <input
                  type="text"
                  value={confirmation}
                  onChange={(e) => {
                    setConfirmation(e.target.value);
                    setError("");
                  }}
                  className="w-full px-3 py-2 border border-secondary rounded-md"
                />
                {error && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {error}
                  </p>
                )}
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-secondary rounded-md text-primary"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isLoading}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                >
                  {isLoading ? "Deleting..." : "Permanently Delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
