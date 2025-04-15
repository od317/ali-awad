import CartItems from "@/components/commerce/cart/CartItems";
import CartSummary from "@/components/commerce/cart/CartSummary";
import ContinueShopping from "@/components/commerce/cart/ContinueShopping";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Shopping Cart - BookHaven",
  description: "Review items in your cart and proceed to checkout",
};

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">
        Your Shopping Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CartItems />
          <ContinueShopping />
        </div>

        <div className="md:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
