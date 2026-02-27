import { getDictionary } from "@/lib/i18n";
import Link from "next/link";

export default async function FeaturesPage({ params }) {
  const { locale } = params;

  const dict = await getDictionary(locale);
  const features = dict.features.items;

  return (
    <section className="min-h-screen py-32 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-16">
        {dict.features.title}
      </h1>

      <div className="grid md:grid-cols-3 gap-12">
        {features.map((item) => (
          <Link
            key={item.id}
            href={`/${locale}/features/${item.id}`}
            className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition block cursor-pointer"
          >
            <div className="w-16 h-16 mb-6 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-bold">
              {item.id}
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}