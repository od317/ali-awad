import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CartSummary() {
  // Sample data - replace with real calculations
  const subtotal = 73.99;
  const shipping = 0;
  const tax = 5.92;
  const total = subtotal + shipping + tax;

  return (
    <div className="border border-secondary rounded-lg p-6 bg-book-paper dark:bg-book-dark">
      <h2 className="text-lg font-medium text-primary mb-4">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-secondary">Subtotal</span>
          <span className="text-primary">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-secondary">Shipping</span>
          <span className="text-primary">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-secondary">Tax</span>
          <span className="text-primary">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-secondary pt-4 flex justify-between text-lg font-bold">
          <span className="text-primary">Total</span>
          <span className="text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      <Link
        href="/checkout"
        className="mt-6 w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-book-primary hover:bg-book-primary-dark"
      >
        Proceed to Checkout <FiArrowRight className="ml-2" />
      </Link>
    </div>
  );
}
