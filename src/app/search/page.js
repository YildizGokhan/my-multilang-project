"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchProducts } from "@/lib/search";
import { useTranslation } from "@/context/TranslationContext";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { translations } = useTranslation();

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    const fetchedResults = searchProducts(q);
    setResults(fetchedResults);
  }, [searchParams]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">{translations.search_results}</h2>
      <p className="mt-2 text-gray-700">{query} {translations.search_for}:</p>
      <ul className="mt-4 space-y-2">
        {results.length ? (
          results.map((item) => (
            <li key={item.id} className="p-2 border rounded bg-white">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <span className="text-sm text-blue-600">{item.category}</span>
            </li>
          ))
        ) : (
          <p className="text-red-500">{translations.no_results}</p>
        )}
      </ul>
    </div>
  );
}
