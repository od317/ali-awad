// components/Layout.tsx
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Architect Portfolio" }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Professional portfolio of an architecture engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
