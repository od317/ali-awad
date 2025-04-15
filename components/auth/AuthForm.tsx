"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormType = "login" | "register";

interface AuthFormProps {
  type: FormType;
}

export const AuthForm = ({ type }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log(`[${type.toUpperCase()}] Submitted:`, data);

    // TODO: Replace with API call
    setTimeout(() => {
      setLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {type === "register" && (
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("name", { required: true })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-brand"
            placeholder="Jane Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">Name is required</p>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-brand"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">Email is required</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-brand"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">Password is required</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand text-white py-2 rounded-lg hover:bg-brand-dark transition"
      >
        {loading
          ? "Please wait..."
          : type === "login"
          ? "Login"
          : "Create Account"}
      </button>
    </form>
  );
};
