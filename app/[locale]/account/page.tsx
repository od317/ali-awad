// app/account/page.tsx
import { Metadata } from "next";
import AccountNav from "@/components/account/AccountNav";
import QuickAction from "@/components/account/QuickAction";
import ActivityFeed from "@/components/account/ActivityFeed";
import InfoCard from "@/components/account/InfoCard";
import EditProfileModal from "@/components/account/EditProfileModal";
import PasswordChangeForm from "@/components/account/PasswordChangeForm";
import DeleteAccountModal from "@/components/account/DeleteAccountModal";

export const metadata: Metadata = {
  title: "My Account - BookHaven",
  description: "Manage your account details, orders, and preferences",
};

export default async function AccountPage() {
  const session = null;

  return (
    <div className="bg-book-paper dark:bg-book-dark min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <AccountNav />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h1 className="text-3xl font-bold text-primary mb-6">My Account</h1>

            {/* Account Overview */}
            <div className="bg-white dark:bg-book-dark rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-primary mb-4">
                Account Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard
                  title="Personal Information"
                  items={[
                    {
                      label: "Name",
                      value: session?.user?.name || "Not provided",
                    },
                    {
                      label: "Email",
                      value: session?.user?.email || "Not provided",
                    },
                    {
                      label: "Member Since",
                      value:
                        new Date(
                          session?.user?.createdAt
                        ).toLocaleDateString() || "N/A",
                    },
                  ]}
                />

                <InfoCard
                  title="Default Address"
                  items={[
                    {
                      label: "Shipping",
                      value: session?.user?.shippingAddress || "Not set",
                    },
                    {
                      label: "Billing",
                      value: session?.user?.billingAddress || "Not set",
                    },
                  ]}
                  emptyMessage="No addresses saved"
                />
              </div>
            </div>

            <div className="space-y-8">
              {/* Existing content... */}
              <EditProfileModal />
              <PasswordChangeForm />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <QuickAction title="My Orders" icon="📦" href="/account/orders" />
              <QuickAction
                title="Wishlist"
                icon="❤️"
                href="/account/wishlist"
                count={5} // Dynamic count
              />
              <QuickAction
                title="Settings"
                icon="⚙️"
                href="/account/settings"
              />
              <QuickAction
                title="Log Out"
                icon="🚪"
                href="/api/auth/signout"
                isAction={true}
              />
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-book-dark rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-primary mb-4">
                Recent Activity
              </h2>
              <ActivityFeed />
            </div>
            <DeleteAccountModal />
          </div>
        </div>
      </div>
    </div>
  );
}
