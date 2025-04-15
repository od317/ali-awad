// components/commerce/navbar/NavLogo.tsx
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl font-bold text-book-primary">
        Book<span className="text-book-secondary">Haven</span>
      </span>
    </Link>
  );
}
