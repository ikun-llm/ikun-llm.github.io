"use client";

const items = [
  "🏀 唱跳 Rap 篮球",
  "✦ 20+ 开源仓库",
  "⏱ 练习时长 2.5 年",
  "∞ ikun 浓度",
  "🐔 鸡你太美",
  "🔥 PyTorch 原生",
  "✎ 从零手写每一行",
  "☯ 大道至简",
  "🏀 唱跳 Rap 篮球",
  "✦ 20+ 开源仓库",
  "⏱ 练习时长 2.5 年",
  "∞ ikun 浓度",
  "🐔 鸡你太美",
  "🔥 PyTorch 原生",
  "✎ 从零手写每一行",
  "☯ 大道至简",
];

export default function Stats() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface/50 backdrop-blur-sm">
      <div className="marquee-track py-5">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display font-500 text-[13px] text-text-3 whitespace-nowrap tracking-wider hover:text-accent transition-colors duration-500 cursor-default select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
