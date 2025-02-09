"use client";
import { TranslationProvider } from "@/context/TranslationContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
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
