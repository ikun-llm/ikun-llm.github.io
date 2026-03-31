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
        <div className="noise" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
