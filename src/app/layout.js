"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TranslationProvider } from "@/context/TranslationContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Eğer kullanıcı `/` adresine geldiyse, yönlendirme yap
    if (window.location.pathname === "/") {
      const savedLang = localStorage.getItem("lang") || "tr";
      router.replace(`/${savedLang}`);
    }
  }, []);

  return (
    <html lang="tr">
      <body className="bg-gray-100">
        <TranslationProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </TranslationProvider>
      </body>
    </html>
  );
}
