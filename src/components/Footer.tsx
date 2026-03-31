"use client";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Standard footer */}
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="divider" />

        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🐔</span>
              <span className="font-display font-800 text-lg">IKUN</span>
            </div>
            <p className="text-xs text-text-3 leading-relaxed">
              练习时长两年半的 AI 大模型组织
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-600 text-sm text-text-2 mb-4">项目</h4>
            <div className="flex flex-col gap-2.5">
              <a href="https://github.com/ikun-llm/ikun-2.5B" target="_blank" rel="noopener noreferrer" className="text-sm text-text-3 hover:text-text-1 transition-colors">ikun-2.5B</a>
              <a href="https://github.com/ikun-llm/ikun-V" target="_blank" rel="noopener noreferrer" className="text-sm text-text-3 hover:text-text-1 transition-colors">ikun-V</a>
              <a href="https://github.com/ikun-llm/ikun-basics" target="_blank" rel="noopener noreferrer" className="text-sm text-text-3 hover:text-text-1 transition-colors">ikun-basics</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-600 text-sm text-text-2 mb-4">资源</h4>
            <div className="flex flex-col gap-2.5">
              <a href="https://huggingface.co/IKUN-LLM" target="_blank" rel="noopener noreferrer" className="text-sm text-text-3 hover:text-text-1 transition-colors">HuggingFace</a>
              <a href="https://github.com/ikun-llm" target="_blank" rel="noopener noreferrer" className="text-sm text-text-3 hover:text-text-1 transition-colors">GitHub</a>
              <a href="https://www.bilibili.com/video/BV12dHPeqE72/" target="_blank" rel="noopener noreferrer" className="text-sm text-text-3 hover:text-text-1 transition-colors">Bilibili</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-600 text-sm text-text-2 mb-4">社区</h4>
            <div className="flex flex-col gap-2.5">
              <span className="text-sm text-text-3">微信社群</span>
              <span className="text-sm text-text-3">鸡你太美 · 大道至简</span>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="py-6 flex items-center justify-between">
          <span className="text-xs text-text-3">© 2025 IKUN-LLM</span>
          <span className="text-xs text-text-3">唱跳 Rap 篮球 · 还有训练大模型</span>
        </div>
      </div>

      {/* Giant brand watermark — like TRAE */}
      <div className="relative overflow-hidden bg-accent">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="font-display font-800 text-[120px] md:text-[200px] lg:text-[280px] text-void leading-[0.85] tracking-[-0.04em] select-none py-4 md:py-0">
            IKUN
          </div>
        </div>
      </div>
    </footer>
  );
}
