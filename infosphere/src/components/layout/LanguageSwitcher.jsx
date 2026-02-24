"use client";

import { usePathname, useRouter, useParams } from "next/navigation";

const locales = ["aze", "rus", "eng", "turk"];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useParams();

  const changeLanguage = (newLocale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => changeLanguage(loc)}
          className={`px-3 py-1 text-sm rounded-full transition ${
            locale === loc
              ? "bg-primary text-white shadow"
              : "text-gray-600 hover:text-primary"
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}