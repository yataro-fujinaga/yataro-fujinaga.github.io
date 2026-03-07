"use client";

import { useLanguage } from "@/i18n/context";

const t = {
  ja: {
    heading: "自己紹介",
    paragraphs: [
      "6年間の実務経験を持つソフトウェアエンジニアです。要件定義から設計・実装・コンサルティングまで一気通貫で対応できます。",
      "2021年にはIPA未踏IT人材育成・発掘事業に採択され、プログラミング学習支援ツールを開発しました。現在はフリーランスエンジニアとして、大規模データ処理、業務改善、DX支援の領域で活動しています。",
      "「何を作るか」の前に「なぜ作るか」を考えることを大切にしています。技術と対話を通じて、本当に必要なものを形にします。",
    ],
  },
  en: {
    heading: "About Me",
    paragraphs: [
      "Software engineer with 6 years of hands-on experience. I cover the full lifecycle from requirements definition, system design, and implementation to consulting.",
      "In 2021, I was selected for the IPA MITOH Program — Japan's premier initiative for discovering and nurturing exceptional IT talent (acceptance rate ~15%). Currently working as a freelance engineer in large-scale data processing, business process improvement, and DX consulting.",
      "I believe in understanding the \"why\" before the \"what.\" Through technology and dialogue, I build solutions that truly address the problem at hand.",
    ],
  },
};

export default function About() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <section id="about" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-3xl mx-auto fade-in">
        <h2 className="text-sm font-medium text-indigo-500 tracking-widest uppercase mb-3">
          About
        </h2>
        <h3 className="text-3xl font-bold tracking-tight mb-8">{c.heading}</h3>
        <div className="space-y-5 text-gray-600 leading-relaxed">
          {c.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
