import Fuse from "fuse.js";
import products from "@/data/products.json";

// 🔹 Kullanıcının seçtiği dili güvenli bir şekilde alma
const getLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lang") || "tr"; // Varsayılan dil Türkçe
  }
  return "tr";
};

// 🔹 Karakter dönüşüm fonksiyonu
const normalizeText = (text, lang) => {
  if (!text) return "";

  text = text.toLowerCase();

  // 🔹 Türkçe karakter dönüşümü
  if (lang === "tr") {
    return text
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c");
  }

  // 🔹 Almanca karakter dönüşümü
  if (lang === "de") {
    return text
      .replace(/ä/g, "a")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u")
      .replace(/ß/g, "ss");
  }

  return text; // İngilizce için küçük harf dönüşümü yeterli
};

// 🔹 Fuse.js yapılandırması
const getFuseOptions = () => ({
  keys: ["normalizedName", "normalizedCategory", "normalizedDescription"],
  threshold: 0.5,
  distance: 200,
  minMatchCharLength: 2,
  ignoreLocation: true,
  tokenize: true,
  findAllMatches: true,
});

// 🔹 En iyi eşleşmeyi bulma
const findBestMatch = (results) => {
  if (!results.length) return [];
  return results.sort((a, b) => a.score - b.score).map((result) => result.item);
};

// 🔹 Arama fonksiyonu
export const searchProducts = (query) => {
  if (!query) return [];

  const lang = getLanguage(); // 🔥 Seçili dili al
  const normalizedQuery = normalizeText(query, lang);

  // 🔹 Seçilen dile göre veri setini düzenle
  const localizedData = products.map((item) => ({
    id: item.id,
    name: item.name[lang], // 🔥 Doğru dili kullanarak nesne yerine string kaydediyoruz
    category: item.category[lang],
    description: item.description[lang],
    normalizedName: normalizeText(item.name[lang], lang),
    normalizedCategory: normalizeText(item.category[lang], lang),
    normalizedDescription: normalizeText(item.description[lang], lang),
  }));

  // 🔹 Fuse.js ile arama yap
  const fuse = new Fuse(localizedData, getFuseOptions());
  const results = fuse.search(normalizedQuery);

  // 🔥 En iyi sonucu getir
  return findBestMatch(results);
};
