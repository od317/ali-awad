import { Metadata } from "next";
import AccountNav from "@/components/account/AccountNav";
import PaymentMethods from "@/components/account/PaymentMethods";

export const metadata: Metadata = {
  title: "Payment Methods - BookHaven",
  description: "Manage your saved cards and payment options.",
};

export default function PaymentMethodsPage() {
  return (
    <div className="md:w-3/4">
      <h1 className="text-3xl font-bold text-primary mb-6">Payment Methods</h1>

      <div className="bg-white dark:bg-book-dark rounded-lg shadow-sm p-6">
        <PaymentMethods />
      </div>
    </div>
  );
}
