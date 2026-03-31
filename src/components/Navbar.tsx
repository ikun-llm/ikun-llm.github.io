"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "关于", href: "#about" },
  { label: "全家桶", href: "#projects" },
  { label: "整活", href: "#fun" },
  { label: "社区", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-bg-void/80 backdrop-blur-2xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="text-2xl group-hover:animate-bounce-ball">🐔</span>
          <span className="font-display font-800 text-lg tracking-tight">
            IK<span className="text-accent">U</span>N
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-line bg-bg-void/50 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-[12px] font-display font-600 text-text-3 hover:text-text-1 hover:bg-line transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="https://huggingface.co/IKUN-LLM"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-4 py-2 rounded-xl text-[12px] font-display font-600 text-text-3 border border-line hover:border-accent/30 hover:text-accent transition-all duration-300"
          >
            🤗 HuggingFace
          </a>
          <a
            href="https://github.com/ikun-llm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl text-[12px] font-display font-700 bg-accent text-black hover:bg-accent-warm transition-colors duration-300"
          >
            GitHub →
          </a>
        </div>
      </div>
    </nav>
  );
}
