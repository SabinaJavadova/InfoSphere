"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ dict }) {
  const pathname = usePathname();
  const { locale } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { key: "home", path: "" },
    { key: "features", path: "features" },
    { key: "services", path: "services" },
    { key: "contact", path: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-blue-100 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-2xl font-bold text-primary"
        >
          InfoSphere
        </Link>

        {/* Desktop Nav */}
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
                    : "text-gray-700 hover:text-blue-300"
                }`}
              >
                {dict.nav[link.key]}
              </Link>
            );
          })}

          <button className="px-6 py-2 rounded-ful  font-semibold hover:opacity-90 transition">
            {dict.nav.cta}
          </button>

          <LanguageSwitcher />
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-6">
          {links.map((link) => {
            const href =
              link.path === ""
                ? `/${locale}`
                : `/${locale}/${link.path}`;

            return (
              <Link
                key={link.key}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-primary"
              >
                {dict.nav[link.key]}
              </Link>
            );
          })}

          <button className="w-full px-6 py-3 rounded-full bg-primary text-white font-semibold">
            {dict.nav.cta}
          </button>

          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}