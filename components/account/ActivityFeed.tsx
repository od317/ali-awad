import { FiBook, FiShoppingBag, FiStar } from "react-icons/fi";

export default function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "order",
      title: "Order Delivered",
      description: "Your order #ORD-12345 has been delivered",
      date: "2023-07-15",
      icon: <FiShoppingBag />,
    },
    {
      id: 2,
      type: "review",
      title: "Review Posted",
      description: 'You reviewed "Atomic Habits"',
      date: "2023-07-10",
      icon: <FiStar />,
    },
    {
      id: 3,
      type: "wishlist",
      title: "Book Added",
      description: 'Added "The Psychology of Money" to wishlist',
      date: "2023-07-05",
      icon: <FiBook />,
    },
  ];

  return (
    <ul className="divide-y divide-secondary">
      {activities.map((activity) => (
        <li key={activity.id} className="py-4 flex">
          <div
            className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
              activity.type === "order"
                ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300"
                : activity.type === "review"
                ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300"
                : "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300"
            }`}
          >
            {activity.icon}
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-primary">
              {activity.title}
            </h3>
            <p className="text-sm text-secondary">{activity.description}</p>
            <p className="text-xs text-secondary mt-1">{activity.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
