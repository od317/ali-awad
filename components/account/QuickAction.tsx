import Link from "next/link";

export default function QuickAction({
  title,
  icon,
  href,
  count = 0,
  isAction = false,
}: {
  title: string;
  icon: string;
  href: string;
  count?: number;
  isAction?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`p-4 rounded-lg shadow-sm flex items-center ${
        isAction
          ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300"
          : "bg-white dark:bg-book-dark hover:bg-book-paper dark:hover:bg-gray-800"
      }`}
    >
      <span className="text-2xl mr-3">{icon}</span>
      <div className="flex-1">
        <h3 className="font-medium text-primary">{title}</h3>
        {count > 0 && (
          <span className="text-xs text-secondary">
            {count} {title === "Wishlist" ? "items" : "orders"}
          </span>
        )}
      </div>
    </Link>
  );
}
