"use client";
import { useTranslation } from "@/context/TranslationContext";

const LanguageSwitcher = () => {
  const { lang, changeLanguage } = useTranslation();

  return (
    <div className="flex gap-3 bg-gray-100 p-2 rounded-lg shadow-md">
      <button className={`px-4 py-2 rounded ${lang === "en" ? "bg-blue-600 text-[#fff]" : "bg-gray-300"}`} onClick={() => changeLanguage("en")}>EN</button>
      <button className={`px-4 py-2 rounded ${lang === "tr" ? "bg-blue-600 text-[#fff]" : "bg-gray-300"}`} onClick={() => changeLanguage("tr")}>TR</button>
      <button className={`px-4 py-2 rounded ${lang === "de" ? "bg-blue-600 text-[#fff]" : "bg-gray-300"}`} onClick={() => changeLanguage("de")}>DE</button>
    </div>
  );
};

export default LanguageSwitcher;
