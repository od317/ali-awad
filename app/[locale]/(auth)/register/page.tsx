// app/(auth)/register/page.tsx
import Link from "next/link";
import { FiUserPlus } from "react-icons/fi";

export const metadata = {
  title: "Register for BookHaven",
};

export default function RegisterPage() {
  return (
    <div className="bg-white dark:bg-book-dark rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-primary mb-6">
        Create Your Account
      </h1>

      <form action="/api/auth/register" method="POST" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-secondary mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-book-primary"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-secondary mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-book-primary"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-book-primary"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-book-primary"
          />
          <p className="mt-1 text-xs text-secondary">
            At least 8 characters, including 1 number and 1 special character
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-book-primary"
          />
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-book-primary focus:ring-book-primary border-secondary rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-secondary">
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-book-primary hover:text-book-primary-dark"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-book-primary hover:text-book-primary-dark"
            >
              Privacy Policy
            </Link>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-book-primary hover:bg-book-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-book-primary"
          >
            <FiUserPlus className="mr-2" />
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-secondary" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-book-dark text-secondary">
              Or sign up with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-secondary rounded-md shadow-sm bg-white text-sm font-medium text-secondary hover:bg-book-paper dark:hover:bg-book-dark"
          >
            Google
          </button>

          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-secondary rounded-md shadow-sm bg-white text-sm font-medium text-secondary hover:bg-book-paper dark:hover:bg-book-dark"
          >
            Facebook
          </button>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-secondary">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-book-primary hover:text-book-primary-dark"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
