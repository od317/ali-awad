"use client";

import { useState } from "react";
import { FaCreditCard, FaPlusCircle, FaTrashAlt } from "react-icons/fa";

type Payment = {
  id: string;
  brand: string;
  last4: string;
  expiry: string;
  isDefault?: boolean;
};

const mockPayments: Payment[] = [
  { id: "1", brand: "Visa", last4: "4242", expiry: "12/26", isDefault: true },
  { id: "2", brand: "Mastercard", last4: "5111", expiry: "03/25" },
];

export default function PaymentMethods() {
  const [methods, setMethods] = useState<Payment[]>(mockPayments);

  const removeMethod = (id: string) => {
    setMethods((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-6">
      {methods.length === 0 ? (
        <p className="text-primary">You have no saved payment methods.</p>
      ) : (
        <ul className="space-y-4">
          {methods.map((method) => (
            <li
              key={method.id}
              className="flex items-center justify-between border p-4 rounded-lg"
            >
              <div className="text-primary space-y-1">
                <p className="font-semibold flex items-center gap-2">
                  <FaCreditCard className="text-primary" />
                  {method.brand} ending in {method.last4}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Expires {method.expiry}
                </p>
                {method.isDefault && (
                  <span className="text-xs text-green-600">Default</span>
                )}
              </div>
              <button
                onClick={() => removeMethod(method.id)}
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                <FaTrashAlt />
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => alert("Add card flow here")}
        className="flex items-center gap-2 text-primary font-medium hover:underline"
      >
        <FaPlusCircle />
        Add New Payment Method
      </button>
    </div>
  );
}
