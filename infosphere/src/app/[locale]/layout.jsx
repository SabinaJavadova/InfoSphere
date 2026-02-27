import { getDictionary, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} />
      <main className="">
        {children}
      </main>
    </>
  );
}