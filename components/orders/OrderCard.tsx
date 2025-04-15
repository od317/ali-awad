import Image from "next/image";
import Link from "next/link";
import { FiPackage, FiCalendar, FiDollarSign } from "react-icons/fi";

export default function OrderCard({
  order,
}: {
  order: {
    id: string;
    date: string;
    status: string;
    total: number;
    items: Array<{
      id: string;
      title: string;
      author: string;
      price: number;
      quantity: number;
      image: string;
    }>;
  };
}) {
  const formattedDate = new Date(order.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border border-secondary rounded-lg overflow-hidden">
      {/* Order Header */}
      <div className="bg-book-paper dark:bg-book-dark p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 sm:space-y-0 sm:space-x-6">
          <span className="inline-flex items-center text-sm font-medium text-primary">
            <FiPackage className="mr-2" />
            Order #{order.id}
          </span>
          <span className="inline-flex items-center text-sm text-secondary">
            <FiCalendar className="mr-2" />
            {formattedDate}
          </span>
        </div>
        <div className="mt-2 sm:mt-0">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              order.status === "Delivered"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            }`}
          >
            {order.status}
          </span>
        </div>
      </div>

      {/* Order Items */}
      <div className="divide-y divide-secondary">
        {order.items.map((item) => (
          <div key={item.id} className="p-4 flex">
            <div className="flex-shrink-0 w-16 h-24 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={`Cover of ${item.title}`}
                width={64}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="ml-4 flex-1">
              <h3 className="text-base font-medium text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-secondary">{item.author}</p>
              <p className="mt-1 text-sm text-secondary">
                Qty: {item.quantity}
              </p>
            </div>

            <div className="ml-4 text-right">
              <p className="text-base font-medium text-primary">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <Link
                href={`/products/${item.id}`}
                className="mt-2 inline-block text-sm font-medium text-book-primary hover:text-book-primary-dark"
              >
                Buy again
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Order Footer */}
      <div className="bg-book-paper dark:bg-book-dark px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center text-sm text-secondary">
          <FiDollarSign className="mr-2" />
          <span className="font-medium text-primary">
            Total: ${order.total.toFixed(2)}
          </span>
        </div>
        <div className="mt-2 sm:mt-0 space-x-4">
          <Link
            href={`/account/orders/${order.id}`}
            className="text-sm font-medium text-book-primary hover:text-book-primary-dark"
          >
            View Order Details
          </Link>
          <button className="text-sm font-medium text-book-primary hover:text-book-primary-dark">
            Track Package
          </button>
        </div>
      </div>
    </div>
  );
}
