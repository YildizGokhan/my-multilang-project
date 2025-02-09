import en from "@/locales/en.json";
import tr from "@/locales/tr.json";
import de from "@/locales/de.json";

export const getTranslation = () => {
  if (typeof window === "undefined") return en; 
  const lang = localStorage.getItem("lang") || "en";
  const translations = { en, tr, de };
  return translations[lang] || en;
};
