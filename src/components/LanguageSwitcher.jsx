"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [activeLang, setActiveLang] = useState("tr"); // Varsayılan Türkçe

  // Sayfa yüklendiğinde mevcut dili al
  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "tr";
    setActiveLang(storedLang);
  }, []);

  // Dil değiştirme işlemi
  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    setActiveLang(lang);
    router.refresh(); // Sayfayı yeniden yükleyerek dili değiştir
  };

  // Buton tasarımı
  const buttonClass = (lang) =>
    `px-4 py-2 rounded-lg transition-all duration-300 
    ${activeLang === lang ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`;

  return (
    <div className="flex gap-3 bg-gray-100 p-2 rounded-lg shadow-md">
      <button className={buttonClass("en")} onClick={() => changeLanguage("en")}>
        EN
      </button>
      <button className={buttonClass("tr")} onClick={() => changeLanguage("tr")}>
        TR
      </button>
      <button className={buttonClass("de")} onClick={() => changeLanguage("de")}>
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
