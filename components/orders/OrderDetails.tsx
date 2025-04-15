import Image from "next/image";
import Link from "next/link";
import {
  FiPackage,
  FiCalendar,
  FiDollarSign,
  FiTruck,
  FiCreditCard,
  FiHome,
} from "react-icons/fi";

export default function OrderDetails({
  order,
}: {
  order: {
    id: string;
    date: string;
    status: string;
    total: number;
    subtotal: number;
    tax: number;
    shipping: number;
    paymentMethod: string;
    shippingAddress: {
      name: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
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
    <div>
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-primary">Order #{order.id}</h1>
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

      <div className="grid md:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="md:col-span-2 space-y-6">
          <div className="border border-secondary rounded-lg overflow-hidden">
            <div className="bg-book-paper dark:bg-book-dark p-4 border-b border-secondary">
              <h2 className="text-lg font-medium text-primary">
                Items Ordered
              </h2>
            </div>
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
                    <Link
                      href={`/products/${item.id}`}
                      className="text-base font-medium text-primary hover:text-book-primary"
                    >
                      {item.title}
                    </Link>
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
          </div>

          {/* Order Summary */}
          <div className="border border-secondary rounded-lg overflow-hidden">
            <div className="bg-book-paper dark:bg-book-dark p-4 border-b border-secondary">
              <h2 className="text-lg font-medium text-primary">
                Order Summary
              </h2>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-secondary">Subtotal</span>
                <span className="text-primary">
                  ${order.subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Shipping</span>
                <span className="text-primary">
                  ${order.shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Tax</span>
                <span className="text-primary">${order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-secondary font-medium">
                <span className="text-primary">Total</span>
                <span className="text-primary">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Info */}
        <div className="space-y-6">
          {/* Shipping Address */}
          <div className="border border-secondary rounded-lg overflow-hidden">
            <div className="bg-book-paper dark:bg-book-dark p-4 border-b border-secondary flex items-center">
              <FiHome className="mr-2 text-primary" />
              <h2 className="text-lg font-medium text-primary">
                Shipping Address
              </h2>
            </div>
            <div className="p-4">
              <p className="text-primary">{order.shippingAddress.name}</p>
              <p className="text-secondary">{order.shippingAddress.street}</p>
              <p className="text-secondary">
                {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                {order.shippingAddress.zip}
              </p>
              <p className="text-secondary">{order.shippingAddress.country}</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border border-secondary rounded-lg overflow-hidden">
            <div className="bg-book-paper dark:bg-book-dark p-4 border-b border-secondary flex items-center">
              <FiCreditCard className="mr-2 text-primary" />
              <h2 className="text-lg font-medium text-primary">
                Payment Method
              </h2>
            </div>
            <div className="p-4">
              <p className="text-primary">{order.paymentMethod}</p>
              <p className="text-secondary mt-1">Paid on {formattedDate}</p>
            </div>
          </div>

          {/* Order Status */}
          <div className="border border-secondary rounded-lg overflow-hidden">
            <div className="bg-book-paper dark:bg-book-dark p-4 border-b border-secondary flex items-center">
              <FiTruck className="mr-2 text-primary" />
              <h2 className="text-lg font-medium text-primary">Order Status</h2>
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <span
                  className={`h-3 w-3 rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                ></span>
                <span className="ml-2 text-primary">{order.status}</span>
              </div>
              {order.status === "Delivered" && (
                <p className="text-secondary mt-1">
                  Delivered on {formattedDate}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/account/orders"
          className="inline-flex items-center text-book-primary hover:text-book-primary-dark font-medium"
        >
          ← Back to Orders
        </Link>
      </div>
    </div>
  );
}
