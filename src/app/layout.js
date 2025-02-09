"use client";
import { useEffect, useState } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children, params }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [locale, setLocale] = useState("tr");

  useEffect(() => {
    async function fetchLocale() {
      const resolvedParams = await params;
      setLocale(resolvedParams.locale || "tr");
      setIsHydrated(true);
    }

    fetchLocale();
  }, [params]);

  if (!isHydrated) {
    return <p>Loading...</p>; // ✅ SSR ve CSR uyuşmazlığı önleniyor.
  }

  return (
    <html lang={locale}>
      <body className="bg-gray-100">
        <TranslationProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </TranslationProvider>
      </body>
    </html>
  );
}
