import { getTranslation } from "@/lib/getTranslation";

export default function Home() {
  const t = getTranslation(); 

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">{t.title}</h2>
      <p className="mt-2 text-gray-700">{t.description}</p>
    </div>
  );
}
