import Fuse from "fuse.js";
import products from "@/data/products.json";

const getLanguage = (lang) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lang") || lang || "tr";
  }
  return lang || "tr"; 
};


export const searchProducts = (query, lang) => {
  if (!query) return [];

  lang = getLanguage(lang); 

 
  const localizedData = products.map((item) => ({
    id: item.id,
    name: item.name[lang], 
    category: item.category[lang],
    description: item.description[lang],
  }));

 
  const fuse = new Fuse(localizedData, {
    keys: ["name", "category", "description"],
    threshold: 0.4, // Yakın eşleşme toleransı
    distance: 100,
    minMatchCharLength: 2
  });


  const results = fuse.search(query);
  return results.map((result) => result.item);
};
