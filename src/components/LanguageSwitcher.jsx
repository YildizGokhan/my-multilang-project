"use client";
import { useTranslation } from "@/context/TranslationContext";
import { useRouter, usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const { lang, changeLanguage } = useTranslation();
  const router = useRouter();
  const pathname = usePathname(); 

  const changeLang = (newLang) => {
    localStorage.setItem("lang", newLang); 
    changeLanguage(newLang);

  
    const newPath = `/${newLang}${pathname.replace(/^\/[a-z]{2}/, "")}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-3 bg-gray-100 p-2 rounded-lg shadow-md">
      <button className={`px-4 py-2 rounded ${lang === "en" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => changeLang("en")}>EN</button>
      <button className={`px-4 py-2 rounded ${lang === "tr" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => changeLang("tr")}>TR</button>
      <button className={`px-4 py-2 rounded ${lang === "de" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => changeLang("de")}>DE</button>
    </div>
  );
};

export default LanguageSwitcher;
