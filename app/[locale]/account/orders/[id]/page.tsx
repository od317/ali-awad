import OrderDetails from "@/components/orders/OrderDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Order #${params.id} - BookHaven`,
    description: `Details for your order #${params.id}`,
  };
}

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // In a real app, you would fetch the order by ID here
  const order = {
    id: params.id,
    date: "2023-07-15",
    status: "Delivered",
    total: 73.99,
    subtotal: 68.07,
    tax: 5.92,
    shipping: 0,
    paymentMethod: "Credit Card (•••• •••• •••• 4242)",
    shippingAddress: {
      name: "John Doe",
      street: "123 Book Street",
      city: "Literary City",
      state: "CA",
      zip: "90210",
      country: "United States",
    },
    items: [
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
    ],
  };

  if (!order) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <OrderDetails order={order} />
      </div>
    </div>
  );
}
