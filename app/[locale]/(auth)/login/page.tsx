import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export const metadata = {
  title: "Login to BookHaven",
};

export default function LoginPage() {
  return (
    <div className="bg-white dark:bg-book-dark rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-primary mb-6">Welcome Back</h1>

      <form action="/api/auth/login" method="POST" className="space-y-4">
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
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-book-primary focus:ring-book-primary border-secondary rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-secondary"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              href="/forgot-password"
              className="font-medium text-book-primary hover:text-book-primary-dark"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-book-primary hover:bg-book-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-book-primary"
          >
            <FiLogIn className="mr-2" />
            Sign In
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
              Or continue with
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
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-book-primary hover:text-book-primary-dark"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
