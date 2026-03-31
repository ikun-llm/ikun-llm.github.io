"use client";

const items = [
  "🏀 唱跳 Rap 篮球",
  "20+ 开源仓库",
  "练习时长 2.5 年",
  "∞ ikun 浓度",
  "🐔 鸡你太美",
  "PyTorch 原生实现",
  "从零手写每一行",
  "大道至简",
  "🏀 唱跳 Rap 篮球",
  "20+ 开源仓库",
  "练习时长 2.5 年",
  "∞ ikun 浓度",
  "🐔 鸡你太美",
  "PyTorch 原生实现",
  "从零手写每一行",
  "大道至简",
];

export default function Stats() {
  return (
    <div className="relative py-1 overflow-hidden border-y border-line">
      <div className="marquee-track py-5">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display font-600 text-sm text-text-3 whitespace-nowrap tracking-wide hover:text-accent transition-colors duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
