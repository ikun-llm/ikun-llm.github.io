"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "关于", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "社区", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-deep/80 backdrop-blur-xl border-b border-accent/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-accent to-accent-lighter rounded-[10px] flex items-center justify-center text-xl">
            🐔
          </div>
          <span className="font-bold text-lg tracking-tight">IKUN-LLM</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
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
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 border border-accent/15 hover:text-slate-200 hover:border-accent-light/40 transition-colors"
          >
            🤗 HuggingFace
          </a>
          <a
            href="https://github.com/ikun-llm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-br from-accent to-accent-lighter text-white hover:opacity-90 transition-opacity"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
