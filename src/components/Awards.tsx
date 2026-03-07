"use client";

import { useLanguage } from "@/i18n/context";

const awards = {
  ja: [
    {
      year: "2021",
      title: "IPA 未踏IT人材育成・発掘事業 採択",
      description:
        "プログラミング学習支援ツールの開発で採択（採択率約15%）",
    },
    {
      year: "2024",
      title: "筑波大学 情報メディア創成学類長表彰",
      description:
        "卒業論文「依頼順序を考慮したタスク割り当てアルゴリズムの開発」が優秀と認められ受賞",
    },
    {
      year: "2024",
      title: "筑波大学 茗渓会賞",
      description:
        "工作施設のオンライン利用申請システム導入が、在学中の顕著な社会貢献活動として評価",
    },
    {
      year: "2021",
      title: "学生ビジネスプランコンテスト 努力賞",
      description:
        "落とし物探索アプリの開発。UXに徹底的にこだわり、計5回のユーザビリティテストを実施",
    },
  ],
  en: [
    {
      year: "2021",
      title: "IPA MITOH Program — Selected",
      description:
        "Selected for Japan's premier IT talent program (~15% acceptance rate) for developing a programming education support tool",
    },
    {
      year: "2024",
      title: "Dean's Award, College of Media Arts, Science and Technology",
      description:
        'Graduation thesis "Optimization of Worker Request Order for Task Assignment" recognized as outstanding',
    },
    {
      year: "2024",
      title: "University of Tsukuba Meikei Award",
      description:
        "Recognized for social contribution through digitizing a university fabrication facility's application system",
    },
    {
      year: "2021",
      title: "Student Business Plan Contest — Effort Award",
      description:
        "Developed a lost-item finder app with 5 rounds of usability testing, focused on accessibility for all users",
    },
  ],
};

export default function Awards() {
  const { lang } = useLanguage();
  const data = awards[lang];

  return (
    <section id="awards" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="fade-in">
          <h2 className="text-sm font-medium text-indigo-500 tracking-widest uppercase mb-3">
            Awards
          </h2>
          <h3 className="text-3xl font-bold tracking-tight mb-12">
            {lang === "ja" ? "受賞歴" : "Awards"}
          </h3>
        </div>

        <div className="space-y-0">
          {data.map((award, i) => (
            <div
              key={i}
              className="fade-in flex gap-6 py-6 border-b border-gray-100 last:border-0"
            >
              <div className="w-16 shrink-0 text-sm font-medium text-gray-400 pt-0.5">
                {award.year}
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">
                  {award.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
