import type { ReactElement } from "react";
import "./globals.css";
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default async function LocaleLayout({
  children,
}: {
  children: ReactElement;
  params: Promise<{ locale: string }>;
}) {
  return (
    <html>
      <body>
        <Head>
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
      </body>
    </html>
  );
}
