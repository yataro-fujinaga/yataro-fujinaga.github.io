"use client";

import { useLanguage } from "@/i18n/context";

const skillGroups = {
  ja: [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "PHP", "SQL", "C"],
    },
    {
      category: "Frameworks",
      skills: ["Django", "Flask", "Laravel", "React", "Vue.js", "Node.js"],
    },
    {
      category: "Infrastructure",
      skills: [
        "AWS (Lambda, EC2, RDS, CloudFront)",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Git / GitHub",
      ],
    },
    {
      category: "Other",
      skills: [
        "データ分析",
        "機械学習",
        "自然言語処理",
        "プロジェクトマネジメント",
        "要件定義・設計",
        "業務改善コンサルティング",
      ],
    },
  ],
  en: [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "PHP", "SQL", "C"],
    },
    {
      category: "Frameworks",
      skills: ["Django", "Flask", "Laravel", "React", "Vue.js", "Node.js"],
    },
    {
      category: "Infrastructure",
      skills: [
        "AWS (Lambda, EC2, RDS, CloudFront)",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Git / GitHub",
      ],
    },
    {
      category: "Other",
      skills: [
        "Data Analysis",
        "Machine Learning",
        "Natural Language Processing",
        "Project Management",
        "Requirements Definition & System Design",
        "Business Process Consulting",
      ],
    },
  ],
};

export default function Skills() {
  const { lang } = useLanguage();
  const data = skillGroups[lang];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in">
          <h2 className="text-sm font-medium text-indigo-500 tracking-widest uppercase mb-3">
            Skills
          </h2>
          <h3 className="text-3xl font-bold tracking-tight mb-12">
            {lang === "ja" ? "スキル" : "Skills"}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {data.map((group) => (
            <div key={group.category} className="fade-in">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white text-sm text-gray-700 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
