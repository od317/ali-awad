"use client";

import React from "react";

interface FormTextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  placeholder = "",
  required = false,
  rows = 3,
  className = "",
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-secondary mb-1"
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-book-light rounded-md focus:outline-none focus:ring-2 focus:ring-book-accent bg-book-paper text-primary"
      />
    </div>
  );
};
