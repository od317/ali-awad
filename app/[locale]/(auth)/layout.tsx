// app/(auth)/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BookHaven - Authentication",
  description: "Login or register to access your BookHaven account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-book-paper dark:bg-book-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <Link href="/" className="text-2xl font-bold text-book-primary">
            Book<span className="text-book-secondary">Haven</span>
          </Link>
        </div>
        <div className="mt-8 max-w-md mx-auto">{children}</div>
      </div>
    </div>
  );
}
