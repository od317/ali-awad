import OrderCard from "./OrderCard";

export default function OrderList() {
  // Sample data - replace with real data fetching
  const orders = [
    {
      id: "ORD-12345",
      date: "2023-07-15",
      status: "Delivered",
      total: 73.99,
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
    },
    {
      id: "ORD-12344",
      date: "2023-06-10",
      status: "Delivered",
      total: 42.5,
      items: [
        {
          id: "3",
          title: "Deep Work",
          author: "Cal Newport",
          price: 42.5,
          quantity: 1,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
