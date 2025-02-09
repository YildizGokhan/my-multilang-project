"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "@/context/TranslationContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname(); // Mevcut URL'yi al
  const { lang } = useTranslation(); // Şu anki dili al

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Mevcut URL'deki dili koruyarak yeni URL oluştur
      const newPath = `/${lang}/search?q=${encodeURIComponent(query)}`;
      router.push(newPath);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ara..."
        className="p-2 border rounded text-[#000]"
      />
      <button type="submit" className="bg-blue-600 text-[#fff] px-4 rounded">
        Ara
      </button>
    </form>
  );
};

export default SearchBar;
