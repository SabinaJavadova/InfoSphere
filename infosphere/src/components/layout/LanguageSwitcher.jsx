"use client";

import { usePathname, useRouter, useParams } from "next/navigation";

const locales = ["aze", "rus", "eng", "turk"];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useParams();

  const changeLanguage = (e) => {
    const newLocale = e.target.value;

    const segments = pathname.split("/");
    segments[1] = newLocale;

    router.push(segments.join("/"));
  };

  return (
    <select
      value={locale}
      onChange={changeLanguage}
      className="px-3 py-2 rounded-full bg-gray-100 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}