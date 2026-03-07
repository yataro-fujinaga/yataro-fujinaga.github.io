"use client";

import { useLanguage } from "@/i18n/context";

const publications = {
  ja: [
    {
      authors: "藤永 弥太郎, 伊藤 寛祥, 鈴木 伸崇, 森嶋 厚行",
      title:
        "A Crowdsourcing Approach To Ad-Hoc On-Site Information Collection",
      venue: "GSLS (GLOBAL STUDENT LEADERSHIP SUMMIT) 2026, AIET-07",
      location: "つくば国際会議場",
      date: "2026年1月",
    },
    {
      authors: "藤永 弥太郎, 伊藤 寛祥, 鈴木 伸崇, 森嶋 厚行",
      title:
        "フィジカルクラウドソーシングにおける分担タスク割当てのためのワーカ依頼順序の最適化",
      venue:
        "第16回データ工学と情報マネジメントに関するフォーラム (DEIM2024), T4-B-5-03",
      location: "オンライン & アクリエひめじ",
      date: "2024年2月-3月",
    },
  ],
  en: [
    {
      authors: "Yataro Fujinaga, Hiroyoshi Ito, Nobutaka Suzuki, Atsuyuki Morishima",
      title:
        "A Crowdsourcing Approach To Ad-Hoc On-Site Information Collection",
      venue: "GSLS (GLOBAL STUDENT LEADERSHIP SUMMIT) 2026, AIET-07",
      location: "Tsukuba International Congress Center",
      date: "January 2026",
    },
    {
      authors: "Yataro Fujinaga, Hiroyoshi Ito, Nobutaka Suzuki, Atsuyuki Morishima",
      title:
        "Optimization of Worker Request Order for Divided Task Assignment in Physical Crowdsourcing",
      venue:
        "The 16th Forum on Data Engineering and Information Management (DEIM2024), T4-B-5-03",
      location: "Online & Acrie Himeji",
      date: "February - March 2024",
    },
  ],
};

export default function Research() {
  const { lang } = useLanguage();
  const data = publications[lang];

  return (
    <section id="research" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        <div className="fade-in">
          <h2 className="text-sm font-medium text-indigo-500 tracking-widest uppercase mb-3">
            Research
          </h2>
          <h3 className="text-3xl font-bold tracking-tight mb-12">
            {lang === "ja" ? "研究業績" : "Publications"}
          </h3>
        </div>

        <div className="space-y-0">
          {data.map((pub, i) => (
            <div
              key={i}
              className="fade-in py-6 border-b border-gray-100 last:border-0"
            >
              <p className="text-base font-semibold text-gray-900 mb-2">
                {pub.title}
              </p>
              <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
              <p className="text-sm text-gray-400">
                {pub.venue} — {pub.location}, {pub.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
