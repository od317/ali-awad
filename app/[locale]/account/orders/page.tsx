import EmptyOrders from "@/components/orders/EmptyOrders";
import OrderList from "@/components/orders/OrderList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Orders - BookHaven",
  description: "View your order history and track recent purchases",
};

export default function OrdersPage() {
  const hasOrders = true; // Replace with real data check

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">Your Orders</h1>

        {hasOrders ? <OrderList /> : <EmptyOrders />}
      </div>
    </div>
  );
}
