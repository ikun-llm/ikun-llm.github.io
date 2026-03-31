"use client";

const items = [
  "🏀 唱跳 Rap 篮球",
  "✦ 20+ 开源仓库",
  "⏱ 练习时长 2.5 年",
  "🐔 鸡你太美",
  "🔥 PyTorch 原生",
  "☯ 大道至简",
  "🏀 唱跳 Rap 篮球",
  "✦ 20+ 开源仓库",
  "⏱ 练习时长 2.5 年",
  "🐔 鸡你太美",
  "🔥 PyTorch 原生",
  "☯ 大道至简",
];

export default function Stats() {
  return (
    <div className="overflow-hidden border-y border-line bg-surface">
      <div className="marquee-track py-4">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display font-500 text-[13px] text-text-3 whitespace-nowrap tracking-wide hover:text-accent transition-colors cursor-default select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
