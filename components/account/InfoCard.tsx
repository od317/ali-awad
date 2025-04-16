import Link from "next/link";

export default function InfoCard({
  title,
  items,
  emptyMessage = "No information available",
}: {
  title: string;
  items: Array<{ label: string; value: string }>;
  emptyMessage?: string;
}) {
  const hasItems = items.some(
    (item) =>
      item.value && item.value !== "Not provided" && item.value !== "Not set"
  );

  return (
    <div className="border border-secondary rounded-lg p-4">
      <h3 className="font-bold text-primary mb-3">{title}</h3>
      {hasItems ? (
        <ul className="space-y-2">
          {items.map(
            (item) =>
              item.value && (
                <li key={item.label} className="flex justify-between">
                  <span className="text-secondary">{item.label}:</span>
                  <span className="text-primary font-medium">{item.value}</span>
                </li>
              )
          )}
        </ul>
      ) : (
        <p className="text-secondary">{emptyMessage}</p>
      )}
      <Link
        href={
          title.includes("Address") ? "/account/addresses" : "/account/settings"
        }
        className="mt-3 inline-block text-sm text-book-primary hover:text-book-primary-dark"
      >
        {title.includes("Address") ? "Manage Addresses" : "Edit Profile"}
      </Link>
    </div>
  );
}
