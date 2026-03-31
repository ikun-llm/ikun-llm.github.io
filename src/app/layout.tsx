import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKUN — 练习时长两年半的 AI 开源社区",
  description:
    "🐔 鸡你太美 · 大道至简 · 唱跳 Rap 篮球和训练大语言模型。IKUN-LLM 开源组织官网。",
  openGraph: {
    title: "IKUN — 鸡你太美 · 大道至简",
    description: "练习时长两年半的 AI 开源社区",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="relative overflow-x-hidden">
        {/* Noise grain */}
        <div className="noise-overlay" />

        {/* Glow orbs */}
        <div className="glow-orb w-[500px] h-[500px] -top-[200px] right-[10%] bg-[radial-gradient(circle,rgba(255,107,0,0.08),transparent)] animate-float-slow" />
        <div className="glow-orb w-[400px] h-[400px] top-[60%] -left-[100px] bg-[radial-gradient(circle,rgba(255,184,0,0.06),transparent)] animate-float-slower" />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
