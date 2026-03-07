import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yataro Fujinaga - Portfolio",
  description: "Software Engineer | Data Analyst | DX Consultant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
