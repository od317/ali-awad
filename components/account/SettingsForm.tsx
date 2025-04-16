"use client";

import { useState } from "react";

export default function SettingsForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    newsletter: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to backend or API
    console.log("Updated Settings:", form);
    alert("Profile updated!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1 text-primary" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label className="block text-primary font-medium mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="newsletter"
          name="newsletter"
          type="checkbox"
          checked={form.newsletter}
          onChange={handleChange}
          className="h-4 w-4"
        />
        <label htmlFor="newsletter" className="text-sm text-primary">
          Subscribe to our newsletter
        </label>
      </div>

      <button
        type="submit"
        className="bg-book-primary text-white px-6 py-2 rounded-lg hover:bg-book-primary-dark transition"
      >
        Save Changes
      </button>
    </form>
  );
}
