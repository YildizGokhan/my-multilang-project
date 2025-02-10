"use client";
import { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import tr from "@/locales/tr.json";
import de from "@/locales/de.json";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState("tr"); 
  const [translations, setTranslations] = useState(tr); 

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "tr";
    setLang(storedLang);
    setTranslations(getTranslations(storedLang));
  }, []);

  const getTranslations = (selectedLang) => {
    const translations = { en, tr, de };
    return translations[selectedLang] || tr;
  };

  const changeLanguage = (newLang) => {
    localStorage.setItem("lang", newLang);
    setLang(newLang);
    setTranslations(getTranslations(newLang));
  };

  return (
    <TranslationContext.Provider value={{ lang, translations, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
