"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "关于", href: "#about" },
  { label: "全家桶", href: "#projects" },
  { label: "整活", href: "#fun" },
  { label: "社区", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-void/70 backdrop-blur-2xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="text-2xl group-hover:animate-bounce-ball">🐔</span>
          <span className="font-display font-900 text-lg tracking-tight">
            IK<span className="text-accent">U</span>N
          </span>
        </a>

        {/* Center pill nav */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex items-center gap-1 px-1.5 py-1.5 rounded-full border border-line bg-void/60 backdrop-blur-xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 rounded-full text-[11px] font-display font-600 text-text-3 hover:text-text-1 hover:bg-white/5 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="https://huggingface.co/IKUN-LLM"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-4 py-2 rounded-xl text-[11px] font-display font-600 text-text-3 border border-line hover:border-accent/25 hover:text-accent transition-all duration-300"
          >
            🤗 HuggingFace
          </a>
          <a
            href="https://github.com/ikun-llm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl text-[11px] font-display font-700 bg-accent text-void hover:bg-amber transition-colors duration-300"
          >
            GitHub →
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
