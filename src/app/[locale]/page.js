"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "@/context/TranslationContext";

export default function Home({ params }) {
  const { translations } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);
  const [locale, setLocale] = useState("tr"); 

  useEffect(() => {
    const fetchLocale = async () => {
      const resolvedParams = await params; // 
      setLocale(resolvedParams.locale || "tr"); 
      setIsHydrated(true);
    };

    fetchLocale();
  }, [params]);

  if (!isHydrated) {
    return <p>Loading...</p>; // ✅ SSR ve CSR farklı içerik üretmesin
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">{translations.title}</h2>
      <p className="mt-2 text-gray-700">{translations.description}</p>
    </div>
  );
}
