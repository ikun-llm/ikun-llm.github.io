import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKUN-LLM | 大道至简 — 从零训练大语言模型",
  description:
    "3块钱 · 2小时 · 从零训练你的大语言模型。开源、轻量、全流程可复现的 LLM 教育项目。",
  openGraph: {
    title: "IKUN-LLM | 大道至简",
    description: "从零训练你的大语言模型",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="scroll-smooth">
      <body className="relative overflow-x-hidden">
        {/* Background effects */}
        <div className="bg-grid fixed inset-0 pointer-events-none z-0" />
        <div className="glow-orb -top-[200px] -right-[100px] bg-[radial-gradient(circle,#6366f1,transparent)] animate-float-slow" />
        <div className="glow-orb -bottom-[200px] -left-[100px] bg-[radial-gradient(circle,#a78bfa,transparent)] animate-float-slower" />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
