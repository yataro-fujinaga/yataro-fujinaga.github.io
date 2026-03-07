"use client";

import { useLanguage } from "@/i18n/context";

const projects = {
  ja: [
    {
      title: "プログラミング学習支援ツールの開発",
      subtitle: "IPA 未踏IT人材育成・発掘事業 採択",
      description:
        "プログラミング学習で共有されにくい「考え方の過程」を記録・再生できるツールを開発。コードに注釈を付けて知見を共有する機能により、初学者の学習効率を向上。",
      tech: ["TypeScript", "Node.js"],
      result: "12名の検証で83%の参加者の学習成果が向上",
      period: "2021.04 - 2022.03",
    },
    {
      title: "22万件規模のデータ照合システム",
      subtitle: "図書館蔵書とメディア芸術データベースの照合",
      description:
        "図書館が所蔵するマンガ22万件と、文化庁のメディア芸術データベース（MADB）56万件を突き合わせるシステムを開発。プログラムによる自動照合と人の目による確認を組み合わせた手法を設計。",
      tech: ["Python", "NLP", "Deep Learning", "Web API"],
      result: "照合完了率80%（17.5万件）を達成、複数の公共機関で採用",
      period: "2023.04 - Present",
    },
    {
      title: "クラウドソーシング基盤の開発・運用",
      subtitle: "プロジェクトリーダーとしてチームを牽引",
      description:
        "研究機関が運営するクラウドソーシング基盤の開発リーダー。チームを率いて開発体制をゼロから構築し、基盤の維持・改善を主導。",
      tech: ["AWS", "Python", "MongoDB", "SQL"],
      result: "開発体制をゼロから構築し、安定運用を実現",
      period: "2023.12 - Present",
    },
    {
      title: "製造会社の配送業務改善",
      subtitle: "属人化した業務のデータ分析・自動化",
      description:
        "1人の担当者しか作成できなかった配送計画を、過去データの分析と現場ヒアリングで誰でも作れる仕組みに変革。",
      tech: ["Python", "データ分析", "統計解析"],
      result: "配送計画の60%をアルゴリズムで自動化可能と実証",
      period: "1年間",
    },
    {
      title: "工作施設オンライン申請システム",
      subtitle: "大学施設のDX化",
      description:
        "デジタルファブリケーション工作施設の紙ベース申請をオンライン化。利用者インタビューに基づく設計で大学事務局と1年間交渉して導入。",
      tech: ["Microsoft Forms", "UXデザイン"],
      result: "筑波大学 茗渓会賞を受賞（社会貢献活動）",
      period: "2022 - 2023",
    },
    {
      title: "落とし物探索アプリ",
      subtitle: "誰でも使いやすいアプリの設計・開発",
      description:
        "高齢者やスマホに不慣れな方でも迷わず使えることを目指したアプリ。計5回の使いやすさテストを繰り返し、細部まで改善。",
      tech: ["UXデザイン", "ユーザビリティテスト"],
      result: "学生ビジネスプランコンテスト 努力賞を受賞",
      period: "2021",
    },
    {
      title: "履修単位の自動計算アプリケーション",
      subtitle: "複雑な修了要件を誰でも簡単に確認",
      description:
        "大学院の複雑な修了要件に対して、取得済み単位を自動で分類・計算し、卒業までに必要な残り単位を一目で確認できるWebアプリケーション。手作業での確認ミスや見落としを防止。",
      tech: ["Web開発"],
      result: "段階的リリースを提案・実行し、第一フェーズを予定より早く完了",
      period: "2022 - 2023",
    },
  ],
  en: [
    {
      title: "Programming Education Support Tool",
      subtitle: "Selected for IPA MITOH Program (~15% acceptance rate)",
      description:
        'Developed a tool that records and replays the "thinking process" behind coding — something rarely shared in programming education. Enabled knowledge sharing through code annotations, improving learning outcomes for beginners.',
      tech: ["TypeScript", "Node.js"],
      result: "83% of 12 study participants showed improved learning outcomes",
      period: "2021.04 - 2022.03",
    },
    {
      title: "Large-Scale Data Matching System (220K Records)",
      subtitle:
        "Matching library holdings against the Media Arts Database (MADB)",
      description:
        "Developed a system to match 220,000 manga records held by libraries against 560,000 entries in the Agency for Cultural Affairs' Media Arts Database (MADB). Designed a hybrid approach combining automated matching with human verification.",
      tech: ["Python", "NLP", "Deep Learning", "Web API"],
      result:
        "Achieved 80% match rate (175K records), adopted by multiple public institutions",
      period: "2023.04 - Present",
    },
    {
      title: "Crowdsourcing Platform Development & Operations",
      subtitle: "Led the team as project leader",
      description:
        "Development leader for a crowdsourcing platform operated by a research institution. Led the team and built the development process from scratch, driving platform maintenance and improvement.",
      tech: ["AWS", "Python", "MongoDB", "SQL"],
      result:
        "Built the development process from scratch and achieved stable operations",
      period: "2023.12 - Present",
    },
    {
      title: "Delivery Operations Improvement for a Manufacturer",
      subtitle: "Data analysis & automation of person-dependent operations",
      description:
        "Transformed a delivery planning process that only one employee could handle — using historical data analysis and on-site interviews to create a system anyone can operate.",
      tech: ["Python", "Data Analysis", "Statistics"],
      result:
        "Proved 60% of delivery plans could be algorithmically automated",
      period: "1 year",
    },
    {
      title: "Online Application System for Fabrication Facility",
      subtitle: "Digitizing university facility operations",
      description:
        "Digitized a paper-based application system for a digital fabrication facility. Designed based on user interviews and negotiated with university administration over one year to implement.",
      tech: ["Microsoft Forms", "UX Design"],
      result: "Received the University of Tsukuba Meikei Award (Social Contribution)",
      period: "2022 - 2023",
    },
    {
      title: "Lost Item Finder App",
      subtitle: "Designing an app anyone can use intuitively",
      description:
        "Built an app designed so that even elderly users and those unfamiliar with smartphones can navigate it effortlessly. Refined through 5 rounds of usability testing.",
      tech: ["UX Design", "Usability Testing"],
      result: "Received the Student Business Plan Contest Effort Award",
      period: "2021",
    },
    {
      title: "Course Credit Calculator",
      subtitle: "Easily check complex graduation requirements",
      description:
        "A web application that automatically classifies and calculates earned credits against complex graduate program requirements, showing remaining credits at a glance. Prevents manual errors and oversights.",
      tech: ["Web Development"],
      result:
        "Proposed phased release approach, delivered first phase ahead of schedule",
      period: "2022 - 2023",
    },
  ],
};

export default function Projects() {
  const { lang } = useLanguage();
  const data = projects[lang];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in">
          <h2 className="text-sm font-medium text-indigo-500 tracking-widest uppercase mb-3">
            Projects
          </h2>
          <h3 className="text-3xl font-bold tracking-tight mb-12">
            {lang === "ja" ? "プロジェクト" : "Projects"}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.map((project, i) => (
            <div
              key={i}
              className="fade-in group rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
                {project.period && (
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-4 mt-1">
                    {project.period}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm font-medium text-indigo-600">
                {project.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
