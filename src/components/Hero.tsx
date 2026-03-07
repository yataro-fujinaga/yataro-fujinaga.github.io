"use client";

import { useLanguage } from "@/i18n/context";

const t = {
  ja: {
    name: "藤永 弥太郎",
    sub: "Yataro Fujinaga",
    role: "Software Engineer / Data Analyst / DX Consultant",
  },
  en: {
    name: "Yataro Fujinaga",
    sub: "藤永 弥太郎",
    role: "Software Engineer / Data Analyst / DX Consultant",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
          {c.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-light tracking-widest mb-8">
          {c.sub}
        </p>
        <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
          {c.role}
        </p>
        <div className="mt-12">
          <a
            href="#about"
            className="inline-block text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
