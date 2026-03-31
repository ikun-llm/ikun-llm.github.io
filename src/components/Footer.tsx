export default function Footer() {
  return (
    <footer className="relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="court-line mb-16" />

        {/* Giant watermark text */}
        <div className="relative flex justify-center mb-12">
          <span className="font-display font-800 text-[120px] md:text-[200px] leading-none tracking-[-0.06em] text-line select-none">
            IKUN
          </span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
            🐔🏀
          </span>
        </div>

        {/* Info */}
        <div className="text-center">
          <p className="font-display font-600 text-sm text-text-2 tracking-[0.25em] mb-3">
            鸡 你 太 美 · 大 道 至 简
          </p>
          <p className="text-xs text-text-3">
            © 2025 IKUN-LLM · 练习时长两年半 · 唱跳 Rap 篮球 · 还有训练大模型
          </p>
        </div>
      </div>
    </footer>
  );
}
