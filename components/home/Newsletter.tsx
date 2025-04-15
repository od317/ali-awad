// components/home/Newsletter.tsx
"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would connect to your email service here
    console.log("Subscribed with:", email);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="bg-book-primary text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <FiMail className="mx-auto text-4xl mb-4" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-6">
          Subscribe to our newsletter for the latest releases, deals, and
          literary news.
        </p>

        {subscribed ? (
          <div className="bg-book-secondary p-4 rounded-lg">
            <p className="font-medium">Thank you for subscribing!</p>
            <p>You'll receive our next newsletter soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg text-book-dark"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-book-accent hover:bg-yellow-600 text-book-dark font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-sm mt-4 opacity-75">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
