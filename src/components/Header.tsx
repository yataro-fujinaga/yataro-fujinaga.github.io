"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/context";

const navItems = {
  ja: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Side Projects", href: "#personal-projects" },
    { label: "Skills", href: "#skills" },
    { label: "Awards", href: "#awards" },
    { label: "Links", href: "#links" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Side Projects", href: "#personal-projects" },
    { label: "Skills", href: "#skills" },
    { label: "Awards", href: "#awards" },
    { label: "Links", href: "#links" },
  ],
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = navItems[lang];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          YF
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors ml-2"
          >
            {lang === "ja" ? "EN" : "JA"}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
          >
            {lang === "ja" ? "EN" : "JA"}
          </button>
          <button
            className="p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
