"use client";
import { useTranslation } from "@/context/TranslationContext";

export default function Home() {
  const { translations } = useTranslation();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">{translations.title}</h2>
      <p className="mt-2 text-gray-700">{translations.description}</p>
    </div>
  );
}
