import { Metadata } from "next";
import AccountNav from "@/components/account/AccountNav";
import SettingsForm from "@/components/account/SettingsForm";

export const metadata: Metadata = {
  title: "Account Settings - BookHaven",
  description: "Update your profile, preferences, and contact information.",
};

export default function AccountSettingsPage() {
  return (
    <div className="md:w-3/4">
      <h1 className="text-3xl font-bold text-primary mb-6">Account Settings</h1>

      <div className="bg-white dark:bg-book-dark rounded-lg shadow-sm p-6">
        <SettingsForm />
      </div>
    </div>
  );
}
