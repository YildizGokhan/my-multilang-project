"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/context/TranslationContext"; // ✅ Çeviri desteğini ekledik

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { translations } = useTranslation(); // ✅ Çeviri sistemini çağırdık

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={translations.search_placeholder} // ✅ Çeviri ekledik
        className="p-2 border rounded text-[#000]"
      />
      <button type="submit" className="bg-blue-600 text-[#fff] px-4 rounded">
        {translations.search_button} {/* ✅ Çeviri ekledik */}
      </button>
    </form>
  );
};

export default SearchBar;
