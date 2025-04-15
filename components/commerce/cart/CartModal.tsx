"use client";

import { FiX, FiShoppingBag, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CartModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Sample cart items
  const cartItems = [
    {
      id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      price: 27.99,
      quantity: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "2",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 22.5,
      quantity: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "2",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 22.5,
      quantity: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "2",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 22.5,
      quantity: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "2",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 22.5,
      quantity: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "2",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 22.5,
      quantity: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "2",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 22.5,
      quantity: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal container */}
        <div
          className="inline-block align-bottom bg-book-paper dark:bg-book-dark rounded-lg text-left overflow-hidden shadow-xl transform transition-all 
        w-full h-full
        sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div ref={modalRef} className="p-4 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-primary">
                <FiShoppingBag className="inline mr-2" />
                Your Cart ({cartItems.length})
              </h2>
              <button
                onClick={onClose}
                className="text-secondary hover:text-primary"
                aria-label="Close cart"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            {/* Cart items */}
            <div className="divide-y divide-secondary max-h-[40vh] overflow-y-scroll">
              {cartItems.length > 0 ? (
                cartItems.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <p className="py-4 text-secondary">Your cart is empty</p>
              )}
            </div>

            {/* Subtotal */}
            <div className="mt-4 border-t border-secondary pt-4">
              <div className="flex justify-between text-lg font-medium text-primary">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-sm text-secondary">
                Shipping and taxes calculated at checkout
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-4">
              <Link
                href="/cart"
                onClick={onClose}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-book-primary hover:bg-book-primary-dark"
              >
                View Full Cart <FiArrowRight className="ml-2" />
              </Link>
              <button className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-book-primary bg-book-paper dark:bg-book-dark hover:bg-gray-50 dark:hover:bg-gray-800 border-secondary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Cart Item Component
function CartItem({
  item,
}: {
  item: {
    id: string;
    title: string;
    author: string;
    price: number;
    quantity: number;
    image: string;
  };
}) {
  return (
    <div className="py-4 flex">
      <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={`Cover of ${item.title}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <h3 className="text-base font-medium text-primary">{item.title}</h3>
          <p className="text-sm text-secondary">{item.author}</p>
        </div>

        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-primary">${item.price.toFixed(2)}</p>
          <p className="text-secondary">Qty: {item.quantity}</p>
        </div>
      </div>
    </div>
  );
}
