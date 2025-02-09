"use client";
import { useTranslation } from "@/context/TranslationContext";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { translations } = useTranslation();

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-800 text-white">
      <h1 className="text-lg font-bold">{translations.title}</h1>
      <div className="flex gap-4">
        <SearchBar />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
