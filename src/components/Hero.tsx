"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 overflow-hidden">
      {/* Hero glow behind mascot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,107,0,0.12),transparent_70%)] animate-glow-pulse pointer-events-none" />

      {/* Mascot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.1 }}
        className="relative text-[140px] md:text-[180px] leading-none mb-2 select-none"
      >
        <span className="drop-shadow-[0_0_60px_rgba(255,107,0,0.3)]">🐔</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-display font-800 text-7xl md:text-[120px] tracking-[-0.04em] leading-[0.85] mb-5"
      >
        <span className="shimmer-text">IKUN</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-display font-600 text-xl md:text-2xl text-text-primary/80 mb-3"
      >
        练习时长两年半
        <span className="inline-block ml-2 animate-bounce-ball">🏀</span>
      </motion.p>

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-base md:text-lg text-text-secondary tracking-[0.4em] font-light mb-4"
      >
        大 道 至 简
      </motion.p>

      {/* Desc */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-sm text-text-muted max-w-sm mb-12 leading-relaxed"
      >
        唱、跳、Rap、篮球……和训练大语言模型
        <br />
        全网最有梗的 AI 开源社区
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex gap-4"
      >
        <a
          href="https://huggingface.co/IKUN-LLM"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-3.5 rounded-xl text-sm font-display font-700 bg-accent text-black hover:bg-accent-warm transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.25)]"
        >
          🤗 加入 IKUN
        </a>
        <a
          href="https://github.com/ikun-llm"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-xl text-sm font-display font-700 text-text-primary border border-border hover:border-accent/50 hover:text-accent transition-all duration-300"
        >
          GitHub →
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-[10px] font-display uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
      </motion.div>
    </section>
  );
}
