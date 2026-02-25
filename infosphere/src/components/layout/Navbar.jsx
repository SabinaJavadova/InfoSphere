"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ dict }) {
  const pathname = usePathname();
  const { locale } = useParams();

  const links = [
    { key: "home", path: "" },
    { key: "features", path: "features" },
    { key: "services", path: "services" },
    { key: "contact", path: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href={`/${locale}`}
          className="text-2xl font-bold text-primary"
        >
          InfoSphere
        </Link>

        <nav className="hidden md:flex gap-10 items-center">
          {links.map((link) => {
            const href =
              link.path === ""
                ? `/${locale}`
                : `/${locale}/${link.path}`;

            const isActive = pathname === href;

            return (
              <Link
                key={link.key}
                href={href}
                className={`relative font-medium transition ${
                  isActive
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {dict.nav[link.key]}

                {isActive && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-primary" />
                )}
              </Link>
            );
          })}

          <button className="px-6 py-2 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition">
            {dict.nav.cta}
          </button>

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}