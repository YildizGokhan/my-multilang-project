import en from "@/locales/en.json";
import tr from "@/locales/tr.json";
import de from "@/locales/de.json";

export const getTranslation = () => {
  if (typeof window === "undefined") return tr; 
  const lang = localStorage.getItem("lang") || "tr";
  const translations = { tr, en, de };
  return translations[lang] || tr;
};
