import { getDictionary } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function FeatureDetail({ params }) {
  const { locale, id } = params;

  const dict = await getDictionary(locale);

  const feature = dict.features.items.find(
    (item) => item.id === Number(id)
  );

  if (!feature) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-6">
        {feature.title}
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        {feature.description}
      </p>

      <div className="text-gray-800 leading-relaxed">
        {feature.content}
      </div>
    </section>
  );
}