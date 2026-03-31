import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKUN - 练习时长两年半的 AI 开源社区",
  description:
    "大道至简 - IKUN-LLM 开源组织官网，从零手写 LLM 训练全链路",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
