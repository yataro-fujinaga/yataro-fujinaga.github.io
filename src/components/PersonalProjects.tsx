"use client";

import { useLanguage } from "@/i18n/context";

type PersonalProject = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  highlight?: string;
};

const personalProjects: Record<"ja" | "en", PersonalProject[]> = {
  ja: [
    {
      name: "Semilattice (sl)",
      description:
        "ファイルツリーの上に乗る意味的関係レイヤー。AIエージェントの探索コストを、蓄積されたデータで代替する。ベクトル検索とグラフ探索を組み合わせて、関連ファイルを一発で特定。",
      tech: ["Rust", "SQLite", "candle (ML)", "multilingual-e5-small"],
      github: "https://github.com/yataro-fujinaga/semilattice",
      highlight:
        "Christopher Alexanderの「都市はツリーではない」に着想を得た設計思想",
    },
    {
      name: "MCP TTS Server",
      description:
        "Claude CodeなどのAIエージェントにテキスト読み上げ機能を提供するMCPサーバー。VOICEVOXとStyle-BERT-VITS2に対応。",
      tech: ["TypeScript", "MCP", "VOICEVOX", "Style-BERT-VITS2"],
      github: "https://github.com/yataro-fujinaga/mcp-tts",
    },
    {
      name: "Transit Search",
      description:
        "日本の公共交通データ（GTFS）を使ったローカル経路検索エンジン。RAPTORアルゴリズムを自前実装し、全国25社以上の時刻表データを統合。",
      tech: ["Python", "RAPTOR", "GTFS"],
      github: "",
      highlight: "経路探索アルゴリズムをスクラッチで実装",
    },
    {
      name: "Agents for Claude Code",
      description:
        "Claude Codeの専門エージェントシステム。タスクの種類に応じて最適なエージェントを選択・起動する仕組み。",
      tech: ["Claude Code", "AI Agents", "Prompt Engineering"],
      github: "https://github.com/yataro-fujinaga/agents-for-claude-code",
    },
  ],
  en: [
    {
      name: "Semilattice (sl)",
      description:
        "A semantic relationship layer on top of your file tree. Replaces AI agent exploration costs with accumulated data. Combines vector search with graph traversal to find related files instantly.",
      tech: ["Rust", "SQLite", "candle (ML)", "multilingual-e5-small"],
      github: "https://github.com/yataro-fujinaga/semilattice",
      highlight:
        'Design philosophy inspired by Christopher Alexander\'s "A City is Not a Tree"',
    },
    {
      name: "MCP TTS Server",
      description:
        "An MCP server that provides text-to-speech capabilities to AI agents like Claude Code. Supports VOICEVOX and Style-BERT-VITS2.",
      tech: ["TypeScript", "MCP", "VOICEVOX", "Style-BERT-VITS2"],
      github: "https://github.com/yataro-fujinaga/mcp-tts",
    },
    {
      name: "Transit Search",
      description:
        "A local transit routing engine using Japan's public transportation data (GTFS). Implements the RAPTOR algorithm from scratch, integrating timetable data from 25+ operators nationwide.",
      tech: ["Python", "RAPTOR", "GTFS"],
      github: "",
      highlight: "Routing algorithm built from scratch",
    },
    {
      name: "Agents for Claude Code",
      description:
        "A specialized agent system for Claude Code. Automatically selects and launches the optimal agent based on the type of task.",
      tech: ["Claude Code", "AI Agents", "Prompt Engineering"],
      github: "https://github.com/yataro-fujinaga/agents-for-claude-code",
    },
  ],
};

export default function PersonalProjects() {
  const { lang } = useLanguage();
  const data = personalProjects[lang];

  return (
    <section id="personal-projects" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in">
          <h2 className="text-sm font-medium text-indigo-500 tracking-widest uppercase mb-3">
            Side Projects
          </h2>
          <h3 className="text-3xl font-bold tracking-tight mb-12">
            {lang === "ja" ? "個人プロジェクト" : "Personal Projects"}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.map((project, i) => (
            <div
              key={i}
              className="fade-in group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h4>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors ml-3 mt-1 shrink-0"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
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

              {project.highlight && (
                <p className="text-sm font-medium text-indigo-600">
                  {project.highlight}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
