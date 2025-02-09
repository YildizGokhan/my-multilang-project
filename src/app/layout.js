import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
