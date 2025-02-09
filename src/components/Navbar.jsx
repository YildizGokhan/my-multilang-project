"use client";
import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslation } from "@/lib/getTranslation";
import SearchBar from "./SearchBar"; // Arama çubuğunu da ekleyelim

const Navbar = () => {
  const t = getTranslation(); // Seçilen dile göre çeviri al

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-800 text-white">
      <h1 className="text-lg font-bold">{t.title}</h1>
      <div className="flex gap-4">
        <SearchBar /> {/* Arama çubuğunu navbar içine ekliyoruz */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
