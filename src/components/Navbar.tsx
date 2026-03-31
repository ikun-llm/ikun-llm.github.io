"use client";

const navLinks = [
  { label: "关于", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "社区", href: "#community" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-void/80 backdrop-blur-xl border-b border-line">
      <div className="max-w-[1400px] mx-auto px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl">🐔</span>
          <span className="font-display font-800 text-[17px] tracking-tight text-text-1">
            IKUN
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-display font-500 text-text-2 hover:text-text-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://huggingface.co/IKUN-LLM"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-5 py-2 rounded-lg text-[13px] font-display font-600 text-text-1 border border-line hover:border-text-3 transition-colors"
          >
            🤗 HuggingFace
          </a>
          <a
            href="https://github.com/ikun-llm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-[13px] font-display font-700 bg-accent text-void hover:bg-accent-hover transition-colors"
          >
            GitHub →
          </a>
        </div>
      </div>
    </nav>
  );
}
