"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`); // Kullanıcıyı arama sayfasına yönlendir
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
      <button type="submit" className="bg-blue-600 text-[#fff] px-8 rounded">
        Ara
      </button>
    </form>
  );
};

export default SearchBar;
