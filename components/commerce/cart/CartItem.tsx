"use client";

import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function CartItem({
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
  const handleUpdateQuantity = (newQuantity: number) => {
    // API call to update quantity
    console.log(`Update quantity to ${newQuantity}`);
  };

  const handleRemove = () => {
    // API call to remove item
    console.log("Remove item");
  };

  return (
    <div className="p-4 flex">
      <div className="flex-shrink-0 w-20 h-28 rounded-md overflow-hidden">
        <Image
          src={item.image}
          alt={`Cover of ${item.title}`}
          width={80}
          height={112}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base font-medium text-primary">{item.title}</h3>
            <p className="text-sm text-secondary">{item.author}</p>
          </div>
          <button
            onClick={handleRemove}
            className="text-secondary hover:text-primary"
            aria-label="Remove item"
          >
            <FiTrash2 />
          </button>
        </div>

        <div className="mt-2 flex-1 flex items-end justify-between">
          <div className="flex items-center border border-secondary rounded">
            <button
              onClick={() => handleUpdateQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="px-2 py-1 disabled:opacity-50"
              aria-label="Decrease quantity"
            >
              <FiMinus className="h-4 w-4" />
            </button>
            <span className="px-3">{item.quantity}</span>
            <button
              onClick={() => handleUpdateQuantity(item.quantity + 1)}
              className="px-2 py-1"
              aria-label="Increase quantity"
            >
              <FiPlus className="h-4 w-4" />
            </button>
          </div>
          <p className="text-base font-medium text-primary">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
