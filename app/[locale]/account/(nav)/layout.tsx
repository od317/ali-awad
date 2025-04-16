import AccountNav from "@/components/account/AccountNav";
import React, { ReactElement } from "react";

const layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="bg-book-paper dark:bg-book-dark min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <AccountNav />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
