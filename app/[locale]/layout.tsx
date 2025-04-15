import type { Metadata } from "next";
import type { ReactElement } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import axios from "axios";
import React from "react";
import Navbar from "@/components/commerce/navbar/Navbar";

type LayoutChildProps = {
  user: any; // Replace `any` with a proper User type when ready
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return {
    title: messages?.SEO?.title || "Store",
    description:
      messages?.SEO?.description || "Default description for the site.",
    alternates: {
      canonical: `https://yourdomain.com/${locale}`,
      languages: {
        en: "https://yourdomain.com/en",
        ar: "https://yourdomain.com/ar",
      },
    },
    openGraph: {
      title: messages?.SEO?.title || "Default OG Title",
      description: messages?.SEO?.description || "Default OG description",
      url: `https://yourdomain.com/${locale}`,
      locale: locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactElement;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <head>
        <link rel="alternate" href="https://yourdomain.com/en" hrefLang="en" />
        <link rel="alternate" href="https://yourdomain.com/ar" hrefLang="ar" />
      </head>
      <body
        className={`antialiased text-black relative overflow-x-hidden ${
          isArabic ? "rtl" : "ltr"
        }`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
