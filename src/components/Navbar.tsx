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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,7,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="t-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src="/icons/mascot.png" alt="IKUN" className="w-7 h-7 rounded" />
          <span
            className="text-lg font-bold tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            IKUN
          </span>
        </a>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-2 hover:text-text-1 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://huggingface.co/IKUN-LLM"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm text-text-2 border border-line rounded-lg hover:text-text-1 hover:border-text-3 transition-all duration-200"
          >
            HuggingFace
          </a>
          <a
            href="https://github.com/ikun-llm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-void bg-accent rounded-lg hover:bg-accent-hover transition-colors duration-200"
          >
            GitHub
            <span className="text-xs">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
