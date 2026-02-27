import { getDictionary } from "@/lib/i18n";

export default async function ServicesPage({ params }) {
  const { locale } = params;

  const dict = await getDictionary(locale);

  return (
    <section className="min-h-screen py-32 px-6">
      <h1 className="text-5xl font-bold mb-10">
        {dict.services.title}
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl">
        {dict.services.description}
      </p>
    </section>
  );
}