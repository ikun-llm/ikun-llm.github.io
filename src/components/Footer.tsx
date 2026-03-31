export default function Footer() {
  return (
    <footer className="relative z-10 text-center pt-20 pb-12">
      <div className="court-line mb-12" />

      {/* Big decorative text */}
      <p className="font-display font-800 text-6xl md:text-8xl tracking-[-0.04em] text-border select-none mb-8">
        IKUN
      </p>

      <p className="text-3xl mb-4">🐔🏀</p>
      <p className="font-display font-600 text-sm text-text-secondary tracking-[0.2em] mb-3">
        鸡 你 太 美 · 大 道 至 简
      </p>
      <p className="text-xs text-text-muted">
        © 2025 IKUN-LLM · 练习时长两年半 · 唱跳 Rap 篮球 · 还有训练大模型
      </p>
    </footer>
  );
}
