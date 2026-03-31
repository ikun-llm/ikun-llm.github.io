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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-void/90 backdrop-blur-2xl border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-2xl group-hover:animate-bounce-ball transition-transform">🐔</span>
          <span className="font-display font-800 text-xl tracking-tight">
            IK<span className="text-accent">U</span>N
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-display font-600 uppercase tracking-[0.15em] text-text-muted hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="https://huggingface.co/IKUN-LLM"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-4 py-2 rounded-lg text-[13px] font-display font-600 text-text-secondary border border-border hover:border-accent/40 hover:text-accent transition-all duration-300"
          >
            🤗 HuggingFace
          </a>
          <a
            href="https://github.com/ikun-llm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-[13px] font-display font-700 bg-accent text-black hover:bg-accent-warm transition-colors duration-300"
          >
            GitHub →
          </a>
        </div>
      </div>
    </nav>
  );
}
